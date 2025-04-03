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
    "3yzheSbsK759VZ2TMLMcpCagqxSyvmfJUqXSR77TdgZy988mmKzwxPNSkWNCGQQbZid7YsTa317rcQQLB3qjsdsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nhiiLJrcLsAi721e8Xmf3q4yVudF4XVSXiW64DRMnRyHEBPYxj1tFShcfRuzoz9iAZgPXEWaJgAetfans1op7Qp",
  "key1": "3HpUFo9neZPFQPp7xtMf84dhrKKeCx8Mv2XuJte5gksmyKV5A3JBvRRKpRvaY5H9wkhXCaX2gBSWiQEhCMpXaaz4",
  "key2": "4RM7ZQYpqT2cwRRSQwSCHwRSK1MhVdjh35htBWLV1RoYqTeVGg5TLpYQwHa4KdgzsS3U1JancX4kmXen9PE1v2fQ",
  "key3": "48CUoair1oK7tusSLRT13zgsgKQyG1xWMAM19Y8AzU4sDmEWN3qEjX31PcdorBMqWWW49rHwK4sCaGLU2fXtEtU9",
  "key4": "5ey2ZauBWRh7dD1f9qYhnxzANG9RAEVFNVHPLkezcBXhVdB6momWQPwZ73VdQNjwQFMcZzfGdGVSvTbmTsM4qvXa",
  "key5": "3tsKDLBEM6cgfrS38cuE2GnLA4W3WxvaQ75XVAhd6m9JFEJZD1duYj6HxogCBRdeQZE9HsztP8EpoaNXXFWT3r6A",
  "key6": "3mpQ1atJoZDtofC3zusCF2QnT4cysFW1ATENuHhGKnQeQQWK2cmoWG7Nd9UxhEFsD3ZiH2uKHuRaTAnQ7GmPDQgS",
  "key7": "5BoEwbxGxDNg7mg9NNz36wHfa5sbdunQb2SXqLjhttVfETQVdASd4rKqjCEuwaMXAdzaL5JX2bf9KXeuWTYUUrMm",
  "key8": "2ptqhiA51H2HYbkTQfGfxeVYPYpRQ9qwm4KQt1UG5dVfjANhKc5z4LyNgA6xy5f4q4g69YiAnjgTfEXroXrgpgbR",
  "key9": "2fUSkQ7TmF2Cy2Q8uRTevSibQ3AP5nLxpZNtN4TdzYKD5gDxQaQnJ7WsVXWShxDiVE3os7b3cApZR5U3M1Y9uuMP",
  "key10": "4fVx77tmyaN4NyeJkCDFByW1hmsbhFGtuETcKtzpQCkLsNr4TsE6KwSPhQjNB9zLAbNQxkpgPTxWVfPE4WAGUVKu",
  "key11": "3knVh8a3fWmPL6oFEiamJcXaoT7za7bDovFmnE91ZNZNQFRi4TkcuwWQS7W8sMRypedNfaZZEXaNzUCtWM1sPdA7",
  "key12": "PwzFqUck5DqCV1hAFD2hBeysm4hecx6Y9V7yr675Dhx16X3EG4SxvFwzj7pEARXRUL7WQQ3Hw2uPL19tLVwPsvQ",
  "key13": "5yYwkdJVLmnRtAmg7cgzPpAMTG3VAHb6EN398AU1U14Gd4A7XH7ZQdaxAhzZj3FnCypEzAjFU1f1YWbJ98sEg8GC",
  "key14": "3a1DFgVpGrcVefErKXfNhv2x8sGTpJxzhfrqAJi2TguyoWFXEzeiK3LtTa1LEr2QGFQKwghkNXBkPFajGayPTPTb",
  "key15": "QpkBfmEy3XkTaRq2HNs7KSKj76RxHwq7sk3E4NetzjxVEFNzgR4XsEXrStcqzCv67ZAZa9X14zwR6mi47pgrCok",
  "key16": "338mtFpp9SUXqjC5EebFuEtg74aE8zjKsnx1XDBkCk3mfGxwwpnX6K43Uf8nVnMuG9EDGv7wVVeoqdAahDwzJLuj",
  "key17": "8Gizh6VrvKPtpmB4S76gmXt4RtfXfzoGVr4BbCD8nKno2HjtRmT3A65k4aNQtVBiaKsQEqNmuPyf3bXn6cePGPc",
  "key18": "5BpUqjttbtKpkiTty1dhXQqJccJScUnKLv3F3U8iG9tKm3zedMrnZvDh87yT4ehsbkR1fSabXgZJ4G2AiAGdmbkc",
  "key19": "4VSat6SzqQMSFX5AXy65J6LLqbtkyPDA3DnsJkEnc3oEC4M9DEntCfKwD2qKYSSGyD53MUvnchEdan3uDP4qwQsK",
  "key20": "3X6Cv75p6ttS5aq59cwhSXTfD1iApPZhNavjPj9ZVssUjKDQqaFe9tUYF6a8rJ4iGGzQC7PZya91wbpDZKnpHRJm",
  "key21": "vRxKxGayFT5GmhjHvCXg16bbcSTYLoC8RifP3JtFeB57NzhfrxA5nDfBaWag2am3pUn4HGtnnT3WDDVdp7X51UQ",
  "key22": "2w1YvRzDKEpF8eyRh4ZrDFPWmWcJ8iijJixDy3ZSruUENLJs5FWxS6Q9encPiiuZnfEeHVCmR3xoUELK5tHuPiro",
  "key23": "2EjVsb39MpMeUT5kdvDM96s7JEjYQ596UqCqkWdWzAX6qYK7NfnhSVT7xvUR3Hd7LWdnqLwcSmYaDPzBCt5y4MCg",
  "key24": "H9h4fYPzT5G2Ss2HH88UVEFuX8QHqDYMHemdoQikM7m7RS69tTiMutdZiLpe5qFRPVvSo5BxYgcdWXMBBtJHk7G",
  "key25": "4H7VNssXTkNgMzZkGp8M31uMqAEXXQ9UurvswTZuxpcqK5pKpeL9H4Dk9gerZ835xsRC3qa2katwFLMdd6R72KHm",
  "key26": "FgEwT44EjYiLGahcQL5QPZtB4gjYcQvXSm7r5wrEpCU8dr6nDREEjTPBLr4YM1FCDbsdErxK4J2r495UBUzmWFm",
  "key27": "hNWjLy9muEK9Le3dsJDgg96Sr5xiNrsaggo87yM21fvMtUPseTaVVsSF9DpnKajj4Wd6gWboeeAPtGKuB8PNYoD",
  "key28": "5zsJTaZjp2oWKifuZhRfpejJdfw7NhYrwqRKKWSYoJLUxbvVq2vYBbW1pQTcx55cANVPdLnxBjaVayexXGg2tcPn",
  "key29": "4iwcmEYoPWVMmXxQsUd3fDkv1XzR2DNzBkuCnzLMxmuccDjeuAedjXsauHEbAZvgMQ1M9Fkvi5vc18ZLoisv28GP",
  "key30": "2FZ2mLGMmmghbPcbc3Sq6zpq5zKUCk9qqED7YixKGLd6GmXnwwgUM8EU6uHmtCSb64XkNn4D9idgo4JekWTjYcPc"
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
