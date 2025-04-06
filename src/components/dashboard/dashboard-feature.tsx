/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "53LeSqqUjUQSHjk7b2K4soqYXocCnGrMjK8c79oiCktFGWHs8fB24L3ghs1JLYa2bZWbyCyKp8C6rAbFiWX2JChS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46q8e9UgNEo5o2iMoV4ayykREsoVGmDcT2X4TQyoDaJZiDUexSxVFUaFALpVJgAk2kBkUPbcWpqaUiHK1dBbEssf",
  "key1": "3SWyc31MDwM8gtnHEvN15tCWhWvSZrrKeN9MSXmYCNXmoQkpmwpfcEUrQiL7pE3nU4yvVd1vC9eEZgxfk1RKwv44",
  "key2": "4jByr4T5E115TuRcT4uwWDbXDPV4E8a9wjY5xJbJeMGMLv931T1uZXQ1DC6hCKDH3Qd7SgwZGT2zxkFhUxGH2xuP",
  "key3": "2NNAwq8TMxTwFngCd8tKkKEHwzoYS28MJsRtcKXTiS3h3s5daroGKbd63fucXtoh5qGFYRpgEiWLNMqsomT8dSMN",
  "key4": "29UV3ymyy57rwwPPYoGEXA3JeH9MQSKNfxegpRgLiVv4Zt5rDAqiFag971vCMzf7d7NdK3jX1FbHWL4nGGLhttd4",
  "key5": "2pmPWtDxZM11yFPu85zTRdsGxbm7sfAyJq5xnCn6qGWn9Ytakp79gS4kTjxtaUEP2wNdZ2YnUj51fH5SnGz6YziS",
  "key6": "4RV7BeAjNi14wqENPoBmJSMjEtGo4wgQa3YGq7HXNmpEkxH6gRgCvfBbawRAGju3VFT7dZXKn2UbaRiBPzbGzf1i",
  "key7": "4YGMYwdrAA23j6Bm9oygu7MUonmove3Vo9tTwzS5UEnTWHuXZvEmbBLShiq1ZWeB8ghGH3yaxjwCoLhXferFZZ9W",
  "key8": "5w9ZvF8mLzAsPKBjEQWhEFNnKz5NGgV61jy1dJXMPeXRcRA8uxNABfB7zB4kEhFts9Q239Bk1PwYCbYmE3NCRBR6",
  "key9": "2uM9r2jUsJo2fyf8g8SyNtXEEunk5jkxsyGqUPKsk8iMKUvRCt43Wc8awAav6wJNTmHf4TndUZMykmLqN1tTtfRP",
  "key10": "2NDDixdJbrFvUPeujHUzpUprfVwVwevFVNnRv2TK7hBvz9FPJBDAw35kd8bumxwD7ynZ8w4xSxA5cmcobCaXZCqT",
  "key11": "2vGaBGfSZqggCPJYk8W1gLNgc9vbjZAUgUCvPR6karFZBdu6qWpf3C4MLjs9JdL1MB3B2EPN4yPe6VXtrdLgYf7Z",
  "key12": "KGMiEsrARfE4ZvFpExp5uZ3GAj9Dd7eignP6jvdyo6j3kNb3FopjALiAEXkCvG1b7gCCv17dG476B53sAVumX8n",
  "key13": "29xptrVXszZgJMoUYJiMGvvEMhCQwpSZdVGvniyCvnRwqBQ6JfPrzcnpf5K9AxQkmCKiR84bKLbes3XaGSd6L6Yc",
  "key14": "c7bxrSDNYQ56NefgpxfETxhPwodxvDH1dSDxS9Kw4iLh3n1AtoS7w6eFDsgV818mor2kg7BVeMVj2CcgX1TH9cM",
  "key15": "4BwhNT2pSLxs1Ee8cQ9zDp9MMFJbEz722EYACTqBNuB9rUyr6u3S9fRd4RJfcKztFAHLgyNxrfG34xL2ue9mgAc3",
  "key16": "7J1drnGQwCfGdb824f2v3HpsWhF8GTTVgVwWWYnTQX9EfWYFy1iC4xcBXopB2djeKqGXvaDzED76K6K5TG1UxMf",
  "key17": "4ctkSxuC8oZjwXKxb7ow3DwYPkW4WDkbDTZA2pMPuRCbFVWtLocEqRj3hGHGHaTUZTxjFh5gZBaUji9L6SPHcoSH",
  "key18": "51B9w38HicQKDptX8ZJsbRHXNRu75Wgc1nXxjTT5oxF1U7P3fbk37xrGoZgLD1hF2W4Aziv7KCUAC1MJEihwPXB5",
  "key19": "31YNBV2FZsgLGiiyFfeLG3o2JHL5kBx376jPEWHCSDheMVAcqojiLLpUjcC7QTaxR2QvXMkJJy7wVbBe24B85iAA",
  "key20": "3TnqxvSYXaN4p1dSVEh4xiSEjDK7qc3XbmJGqhgq6vjC4AMGHcBktsWyTt1dvfT2S3suw4j2NBSqHD6N4Htknxj1",
  "key21": "3pMAs1qgURi7PoibnfvDELRwatEkD6BCWr2RXwetjTDH9rxUGYRGMeqRKDQxVxHeu5MajH2nHbvmHtivBcbynQoo",
  "key22": "5z9Gjvmvcp8pFoAZzLrkp2cc87afkeQqfwo8ayJWQwiku9xPGxunHDo94B85dz2SVASsUW6JMvse7iEXWLYkccNH",
  "key23": "4AskhCWQhixdzsdbKBsFjuYzRgC32dZuBYiem6g3ie7Kixg77112S9vwDx4Up78mtWpvXXudfZVEeXiRku3QJRKF",
  "key24": "3yqnkyp5n9MwikUG1r2aZChREuFb5afyxhGCuSy5r4RnMcKK6WYAC7T7aeWktqDzRHqANKqMpATicspWhCDzXDqw",
  "key25": "U3PV3qXuPqLQSnqBnwSgjeJUTTVA5QbYxcLKS3uEFcqemvxuRP1kkkpXUVnzsosPdVQwzDiH44kXB866EzdG4Aq",
  "key26": "4iXagsxRbxNPYQ1yvkucAbcrXUJ82jJFwWouMXFVfKd92Nuy9qR1czVXgLcNYiUs7jWuh2GkqoTCocJd4kDipWmJ",
  "key27": "hAmsZ6Bxu3SPQdngnJ6hgv66KRK836qhEaNTdDg9iyWzfQbL1X3BBKSnhWcpkMHyKVgEgU1xA4w6gZ6kNrKT7xP",
  "key28": "3uGnUvHwqeayyWXJZgH2bnBmGJdbq7e4GABsHUAWkkPKECmNxRg49DkRaZKHZKZubJUaXWx54c7JhxHqywuRL7S5",
  "key29": "2v7vA468uZevMvAqFDXd6Nu8vVsMAyyMVcWbZTe2ijhx8pL9mNBri9C8W9QYpHv21N43Pkix7Umb3GfhBE8rv4Zy",
  "key30": "2AfBQXTEGaGHyP1x9M6E3zSQnQ4pvHMakBqqKM9PkcBrtns1NmVGNcecDgun9WFPXwah8DdYqq7N7Nr9RLZeBT67",
  "key31": "53ZetuesfiEecSotRKtu5EsWQ8CH2f7DiDmSDCoEP6N4C2RxVVffk4bVfiKD37Hui3XmdMQKBDsH22cgWaDkqmon",
  "key32": "64Fkh4kREs4vX2oHrpiJYMHwz8Xi7idMD3aXBYrLgbGkkcPAx68QMpogxvyWJeHH859q74UKQhkGPAGm8pGqkwCM",
  "key33": "4WQE1JoduJiCJofZTvQ64dmGyYz2BtpYjjJTPasmEK4squSUPwABm6iQqFUbwvcLjM2FtZHb8ZeXCaVJHkCPTrBS",
  "key34": "4aPnp4VdjkTzLnF49vpFpK9QBKuwkEPYkiSshd5YvmYDmCrxtYU2eVyCaTjS5cG5ZWw84J7wyjxHwK4qg7gqJB5n"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
