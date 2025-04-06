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
    "32mEGu5bsQYuHX93s4Ckgdg5KfrSYhiLBXwDgLh8eYtCZEu1UWRtbRNFWfyV2zC7Gvy48RQmEwDZQfbfh2BHSadR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tjgQfUz3AiMtnVU8euW9J9ndx6VQn52TVHTMr4aNmhrMiqV4DwZuyqv2MqCSFuHbqrR8E1LM65vJtx9Aqy2uc6x",
  "key1": "7mEQoBv7heKmq5j9MD4jSuxDZYnzaPHxVcv54ipuXTXgSHvnzRgsx3cCQ7Q4gS8revVP7yWEnXcptKqD1vJBMEj",
  "key2": "4qKW2fCjb4cnRtLfJRstD5e2HCDWBjfo5tBqUCSL6fnVxCDbdqwaEKtfGDTG7cDwbidiw2g65W7EsqyoEswkitso",
  "key3": "nREZUJjcmNLNozsyeD9GSwReqZGWHE1ty7owNCVmZ3shjg8mxYM6Qa3p8MHaJLNm8XTiGncheHkcVfPeKBLxuHo",
  "key4": "4EUFuPeuTd8fTf89JcJ8mrdHhh2mEvTf4kgq2PMt7jYLgdK3QHL32v5TbWq9HV5x8HdrKBHVrSW98ZoURN2afjxb",
  "key5": "tCzyC9KgA75JwUcw95qNw3tiCCJq74mPAuBd8cTNJcNVyST5CXvoDSyd2BopTeA3FFPNcQiSkHQ1xdVuyHwuYzu",
  "key6": "5UkBazfiNHMZPHtotw9a5AWpd8Gyq7sN2D6qwpfnWkYcUGHQtMcDf7AwXmASbpw8RYcq3pRQ2Y7EEtN7fL4wH8ps",
  "key7": "4w4nxN5TshwToNGujYAdLEkhyP5DC9ehCRKUCELQvrSJo6rGE8HwBaf7D5NsQwvrjZ1aVABVR8gHghzVt53RJr5y",
  "key8": "VXpjeAq77qXazWjRSY3QHES8gAVca7nmmkda1CY1NdnGk6e65CrZeuMzX3tSAi8atTpvts9dT88f5ZgzhbStPX3",
  "key9": "qRgExHckpCZzHk2guLEvPeZygDNnQf2eFuMWrMYzJHmfgHfHafpfiiCNrS6MUskDaQNt4SWfBSkF9AtZLdAXyyH",
  "key10": "5jNmnzebhxUHLx9eP7RL2rmLN5tTnwS5u86AxiUht1GtdH6enepjPibghb5H6uDSco3CT34UTqat2eX9n9R4uveq",
  "key11": "33LWi37AU8WoncqDKeLhntSVdmZ72hEsEV3zLJ85dNWL84GLMc7NXaCwtrtojEiP8KJyQJFhUWhDjxqM5bdkJfKq",
  "key12": "4edSPPXuf6X4H3vYUcooGkRGJRrhWchSvTTXVGGjfHubs87JKZgaBQUG8GWrkoDhxmTj5v7uE84sdPFQs4SXBPop",
  "key13": "4ScCbnHv8uDoZjCXACgTNc3HSaB4jheaUHem3iKrGrfVbVHrEi8uDQuMV41pYot5HmAwy3c4X5dDfsZvZQbYL27H",
  "key14": "5JSVjQA2yFmc8T9hJ2b6Khhbw7wwAYZKFNDNujdhzHJPR9QC5pwX1jAbesJPNh45JmuszaSuhSqm8ULC5GAaUJki",
  "key15": "3UHTUuFfpXFBij6xpWCyfj7VP5qW35UHwHWhSymw8Xf1fcsMdpj5DiRkKHC3K3uZt2mv34BCzxYtPWLUQNJwd6wh",
  "key16": "4aCPAXJZnLaM8kAjTts5hzLz9e1gdMSBDcxY4xEdtNq1KtTpymWK3hRRPgz4Zzu4MsanH2CgU5NUPmAByf3ZxJkn",
  "key17": "3jYdUb5EfUM2Wuk3bdNNgJ1VU3Ra8V1FtCqCbYdvJWNATLLkiRmcBQ6ZHxLc3i85ZxGRpGAnDUShiVb4QaTDqhrX",
  "key18": "4A6RSwzuic6QA1r4aoys88GpCeJjoRELaebtFkrQWvveveYGP8td7VQQySwXUve47MZY9sqLVLP2zx4XteVtxnGf",
  "key19": "5uCm7mkig6U1BJz8NT3A4w3971XFH8C3TUps8LQtCrbwHH13wggD5LZASDZ6UUKE6dkcL4VDjt4zPjFYDEcrQ4bN",
  "key20": "4N9D38CffDSTu8ndpf5DxgVmy2XTSrWPDuPkF2JZLAWkhb9hHvzfU5eWmaVhyzJ7iyjMHUPABYQHtGqsg73YhpS1",
  "key21": "46wPtztmscsTN6KF5J4Z7sNz9aqCTSt9FCyL4Y2TLeJXFuuerPurZBngkURPHZbTN2JbPwxUrwoHcY1UsK2FYxmf",
  "key22": "62kb4wfsAHRvhysidxzouvVaWHK2gq34U4jgjnTseEZzrZbwXRo2eGYvENVUdcnz28ByVodjLahnVttUv65g8j3V",
  "key23": "2h4h9HfmNV1mNkdhnQUDH9Gq7WEfEsiFPHaBEUB6PHmzsrKbnSRkzbtapqrwbK7pGohd9PyU5ZJoxfQ4gR8G3nUw",
  "key24": "EinnGoK7Nq2nezKvZavjCpF1psJzaGk2wGuUFKt3evqmg32Ne1YbtvgyLazSUWKLtYQBobYwNh32F91NWbY2WmF",
  "key25": "3FHDscDJ8x1g8X9Zcyq2MK6yr3patnMJuoY5tp8pU1V3e64Z1B64ZNMKJb2e48axJEYfqbVL9okFaeRGTokgW3jD",
  "key26": "jpSetmKxkaAc442u1AUPfAGcSYKAupRmyDdQz4xDmzY3QY3FbzNB2QgB3HXH1wHoHp41pspZQcqwVXEPMu7hKDS",
  "key27": "27Qz8hZBdTHw7KAg3X9f2TsK52FLc2PJvAy5FbnWM2zid1X4ApNwd6UCcGLqbkTuGd1vPKyn85kDn4hmzBPhA3wh",
  "key28": "mw83JjdgpmQm9iDrti6Xgv52jUC31RHzspCNg4XZV36NskUmH99hY4G3GgKBi9T2cRm53FUHubcpkMbypN5YxXc"
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
