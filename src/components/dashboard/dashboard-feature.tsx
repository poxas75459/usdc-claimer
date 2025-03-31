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
    "4EgcWaxwTajD91SmvA3XCGFRLPhAuam4QxeDnTAsRM36WQFJRCjUPtqUTXqkHPxYgqYAELF7Bc5xAPA8G1VUqeNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqNRdV7DH8NCmK1kwhACp4Th6hRmRNZepj8w4es4PMDPqRGDbg7vJcosnVjgy6gWpTHUdfkGPVqy1QAzBXxKYXo",
  "key1": "4c5ngNTyy33mC1QkYFsWEzApp1W5daWK3A1SV864VvW2vd8UA1imCfkzvBbpbMjp6ufz9QDNoCBmsNc74afX25Eq",
  "key2": "29HvnVNvxDijAPvTyKUWSxyFNSmF8GUMY9gGqbS6qybXBEMaUQirRq45nNTBMBXoHPNot66aPzvisZdRYXG1H7jB",
  "key3": "3smkLLr2buw57uJAc4SmLX5pt2e6TUXGtV3AD5Gy9tw1e7KMZHo7idtYxqbnNX9XgJEXwdjEGMKTiBUevS2wa9C",
  "key4": "4zVuPHRotDu8qLdoTXshN6fKB6ZmdR8tMMP4y9LgTz2qDLca5Cj56PHY2Bb693pzaZYn3L1ahX1h1G3uEKHFh1jv",
  "key5": "27US1xqdQEjsnMmNiCfrhDdmu4ArXadXsdTvUct5ahB9eh6ZQXfXRyFzFt2TCmv5UfNX8nCiDsrHHf1UcFKybegi",
  "key6": "4QuNCyMqD79hsupMxmSd2jpwEBXHwx2q6JSXAYNzQVmHUKqKBh7AdNqGV61Y2JM6mXanKYADCBHu7bavjweV4q1m",
  "key7": "63cPh1Q1ksYZZNh4SVBeEAHWYkAcQgWAm9eUxNvaTfuwSPkEDqKPtcX7ov6chYTuTfMjh7hTYhNf5hAksvkXxUL6",
  "key8": "4mZ8TBHtHzuyGUMZyALm1oDGAhR8zEKZbmp8SmPsnSiiLqU3gqp14CNXtFsajdRQNf3YpVGUJHFNkk8aN2Reoczw",
  "key9": "2MRicwTpzZ1Pr9bxkQUL7xCkmBNFa7XuAhd7y6fzsbQzRuqXPwnjDb9RWfg4Wue8F9aTaTTV3y3DARh4FuUj4hxK",
  "key10": "k5BUSi4REZhz3Q4jQ8w7KWR3H8F1xfVD5sUHccoFEcvkq4C9KQ9YwdtCa7YgsLDWb4dD2ngG2JfiUqUcjed3wXU",
  "key11": "2qLYoHQKve5EadHPGvRPh8KL6iXqdMDauoRtqeL1JVjied41QjcqdMjG7uMdH8BmfRbhtZztMFMGePXaJgk6eNtM",
  "key12": "39HqF9wjyUVwF3MecK3vWMD4hPHcTuktZJetVmqrEeRtUyA92KTs1cT3TMoEWvc5tAyQWjsGaBvDSFqAdNhjm1iE",
  "key13": "5qkMombRdM1taoL8GJvi9Q2PRJmhPee4MRfi4zDFLrJKpYQYT3MbBZqUe2vej1Dfogtd3GsAAjoWGVhbh8YUzggh",
  "key14": "2eVVv8zXhpTMDwhezdgj1SWXXoCXHv2J3FqKMxSf9n2UcbQgopWi54S6v8v1y2Zt2D5YRiX2bLtjZsfhtb61fBKv",
  "key15": "4fkk2d5YccQUPPToXCnTcoQzCEy48fTjFJSKCdjoa1Zg95QGnt4U6wGv7zYSKbHZ2Wh9q8QDqN4AdX1MiVgStQd2",
  "key16": "2SKPMoHdf51NqUieQit3PmXCEnTez5veVVH4ZniAXxExyy46uWFJW46A5282r3fSYf8uLyCPzwjDAVL5wjcoaJ9X",
  "key17": "225Tzgoi2hmduvpGTWVnEsDULLeWk4Ese3fwjAwnYL1rnqzgcN5QuUzbtJnK1g7La6URwJK6GPBF74mmYDZK1WrR",
  "key18": "22w8htpp93Fgh14BQMzbxo5k128HbVMhkvqUGYTAJBs967koDNpxZZKRYHRGJT4skBNpgwFP6KCXAwiMB6MqfW9H",
  "key19": "49ibJRnhoQLa7ULKk9phR1u1LeUisx657JXYuGwqdreoPD3EFZQU6Fkb6exh9X9FfWZSt7XJeax2LPLp7FtQnptA",
  "key20": "2T7nx4jccUJGNwQrwu4hq23m7YYFxdpa7CxaNPDxeKYZiLX6Eq7KpBaMyq4y99WMbkJ74rbzNYopEribpyJTaLgw",
  "key21": "3nPiKtLLQxPDM4bMkaeiDNFjkouN8vxuSDWfuL2xnBYYGUeLur7zfxf1xZkt85CSQHq3Gof4933TpEsy1qSLueaZ",
  "key22": "3TaTjGnB512bdECyzb9gmAvUbm2KWhiD8QkkrfJB3Y157ah3grEVH29a4nWye5zpWbKm361SZQ9GmdjskdETGPX7",
  "key23": "6hjhYBSzUpgCFrE6QP8kjHubkNFcNUkgZNdFv1NkTZN7XXB9ip4H8c22XiKthTB2ydxxAN5WvBaz5LFLJBCy6TB",
  "key24": "4oVW7EmspdvZGN95ow7rcLneHkcn1Mo6eF2EJAZysWR4kB1jg99DyPKa9QgQRz21kjiUiSs9hyMTDxKCzPsE39th",
  "key25": "kXvhWbmzzPE2gZm1jajq11k1wpJcdtJEdNTRXjhxn7ojC4sF1o7DjuURgp1qTkKfScQ6iWk4fK3cksh3P8EAKPG",
  "key26": "21TibmpPQ7bhbPrGRFFHg5y8TBbS6jESipZk9VXhVyhqkx6JfmuYzzLam4mZx3CfekZ8kYAr6S4Mb8ZVP1KMT7B8",
  "key27": "5aULf16JeMLqFFDoDXPquj7FaWdUUZVTf4J64NsiMwxd3gJcxe8gwQhQsRePwkJeCo1iDcsk21gFVCNDhRPLbrnA",
  "key28": "34JS8wUTXNFgHD8igkVFXzBAJJ7m74Ymye3XjoihschVdR8uBvbgi96RmtKf4Wrh6krgXJkyjcib6wF5MjxQjL3r",
  "key29": "24pp2E47QXKqc9VNRaVus5pU7cY2dWaic9nULChK9ybuoViJf7jEd2m82n1KXXNACPs53L3MqrMxswkUNjPxm7er",
  "key30": "2k2Vn8HKJacsrwtdAdJpcqX9Xc44WrcbDkKnBfaVdX3k3p9u91x84ym9rwSDXyTo8Erkds5nUZPycw5P9mnUMJ8y",
  "key31": "5jEDCVn1bG7pEp3fkvQpG1trspGMcdgK8FdSnccvdEA8CZuuzeGNw89LijW2Y3aHmiRBn5TeGbLmPVusq6qQ3Uvv",
  "key32": "3BXTQ9w4QyCcbAv188CnqWqzfBp6bRLQe6RveWACZPDVWECeWzmygK6ASNbFy13U8FFZRNtsy3YknjobFkTJLzHy",
  "key33": "4SXQHYda9FX4MTRJrDSKQkd4ATwzojC4qwDTWWMvGpsNtmuGXSULyhLQHiqCMoSqsFgaVHG8DEmcNUDDdpNDS2yS",
  "key34": "rYhHp7qFVoL4ygKcXfpE27p6ddVJURkNFj5n4DrJudenpqmn586m82hARULHGfKx1CtdZEgbPHdzxyWKJ3sKVS2",
  "key35": "2Vg61nhGSNiodGzn34nBhW137fiMPgLrLyQuqUf43e43tQj6a2Czypc4BfM3NaEQZdy1fG2drB7tNqxuXTbzRarC"
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
