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
    "3fAFVGuYw8QwufPWSANHgBoCxMk1L8UoAmVwt8APySQticT9jBsUrcGfBRZrvcukCxgAjhBxSa4RpP2nn1Fq5u9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QddrKEw3v1JrcyWfJn2o51QizqLFNoWRnyEEKGiHaPxbW2GxmuZXcMkUtur5FF3vjnfUF8VNJ7V4twUQa7Qi1tC",
  "key1": "5RH1QwrKhNynYoXx57t8tSjR6fhBK6Tw1RwKzC8G5mYd9q52hsGBBtHbGrtXm3Yr473FTwwqy2T6p9i16ECxtkYY",
  "key2": "2GTEWpbi6b2As2VFZA7zVKKv8SNmMJZhVQkB8jjSLZTnM5JSdo3tVGvxN51PxLCbaqM6DZY4E2AQpjYwfeUXu4kW",
  "key3": "64Pi5uXuHAAzCzobXKXGXhgDLaVenELqG7kS512w4z6Dqihd2Kf814Vizv143V29ncemUL64wZQq9mNU3cpkQHg7",
  "key4": "5sXevG2mZHPAC2Ju6PRpTzgDuEhswsvTLidtmuGSpNZnrwQjSj6vy7ZBkenD3VqFJRh5XNmNPuYvbgEE2WcVEsRW",
  "key5": "8tpWLxgNaKm1R25NtqiD9Aub1TBRuKN1HMnbQBbKso9njLdnrjzh1TkjG1gToTnnQ8kKPCaKV2tkQcg5eprcLKi",
  "key6": "3fdzkcBUVuYinBXCkV5S3wH9eW4x8je7yL8qZ7qPo9xv1doXsb5mFM8c61mPLVPGyp3mGB2UDpVgVFrz7DQhXkcV",
  "key7": "27cNXTbkPmAsx5Zt72nycoLFe59tR4J4cTbP6Jy4Qs69gq1wgvgg63iyZ6oT8tXGTWvdpED9etkPWtweStJmBRtX",
  "key8": "3WfsfEgzGG1ssXYtowAHCke8jfHsMKqc3fNmxWyD88mLGgn9PXXFDGTdM2Up4nE3ogovNs8Yesn82qEASPhH7Z3L",
  "key9": "3ufSJModRVzjbNGAqo389SsJCKchSWKaB86tNd6r5nWFFo2fqGtrKsdCLcGzDZpRqGkcazebNyVGUdyEX2d4rWsY",
  "key10": "5T44NAtwogWHtB4L9LBpozwxkGh9UR7yNqCHwarXpiiRTonoXSbQkcHt7vLBGLdTsZRKPgt8kbeJuvL6VRVGPGBF",
  "key11": "doGJ9AFmdZ2aBZ4ertr81UNHFrk3znddaCLGmMw6GdfobT7Xhn59LnP1pu9KoMKqSDRckNBqN7pu5QuSxeeR8m6",
  "key12": "3p9AnnEVgem4ztuPLomMXJbB8uvXsnCdWNtHuTCTFUyT6YVqCin3vodMjM5ZaD7wc1bccQWdBiN6akNdaLHV1omw",
  "key13": "49sM4zG3tzFp3vQjgGNCbuSBGJ7tdVZXUamscXS6VaQCQV2v648X8KU8T3cdTAXD1kJAsnEqdUBjKAemWZEfBsYk",
  "key14": "2rmGiBSwtt676d4iFzLiJzXJmKVR4ysJYqNmNqU7onKwJr2GmQHNsUq5U7oKBdYR233M8L6aUgbCff7BteEyAoiY",
  "key15": "5FTEe8z1wGLiwj968TiymnLZciE9xN55EPuLLxQwLATGmMTop6hP7KE99Tnmde2StG2crpBjxYBCf5rChbpx4PVE",
  "key16": "3SnfrpQwgx8YnUjz68N2raA8k3hBqHW1CUWuQse9E9esPsDPd2jGdWLqwoqgvcaVQ5fjdE8NTAmpsisZ1X4TVw7A",
  "key17": "2RzY3p3WApSE9AtCsyMER5F9q52NYMwGeok55rT4aPSb6vqEdpnj9RhP25SYvnhrbBeTjXyZpjjusFjjSzM92R2u",
  "key18": "48z81A9wcUkM7atHvZxkg1FrHiehSyafEoqv7wvGeAKgCJKitWJCJfHusdFG4jSCHJiX8YEBnaFVZ7QGh6Yt1evb",
  "key19": "3K7ca2N5LiA6xJ62hwKAoaavLu2tasnC5PbdTYXbybzt3R8mEqYGZK9MMVSDg1q5GzTwmgtf9Bu4oVczV7GjxVS4",
  "key20": "3a3k1FKzYcabGEYH9ReaD53wrBa3STQthWeGionR1wodUi6h8xB6nQYc6QvYZQ5EJWgnZHCzyy67AmRFpxu58MQm",
  "key21": "4ZX9h3pqNYRkNQdBYtTYKguB2bQPEAd7numv1Mv27AXbRFc31MWrL6bK8NiQfcKD9hrwbQCL1BG9V3CqQn3mxHDS",
  "key22": "cY8kxDzFE5LNCGVm3pVL74CpVaurrVRxqF4GSiN3fqCNZK5cmidML1knpTDhpsReahuheQwNDjWZTWBmhdjoY5B",
  "key23": "o2orMrGAEfwrSJ3SqjeURpeMhZdK3Ufhhty9AwmHJQqMGpRnHSqwKjbVDs2UFxKvu9h4okbWoyZMPLaWgTPfEk7",
  "key24": "RYmgkSBjNmahxiCnCCDCWei9PjrUQrBmvPMiGkPQyKnTQcVCdiNeToRJkQUBRqn4txs5mxtz1qT1Bh9hq6GLWJr",
  "key25": "5cTBPqpRdKbg7ZFQCvtJeyWtmRkJVGyKjifV3EcB1n99QuzSjPW3Hrs7nbVq33fE4bk2pcF5kymoFDvHLqyfxWCq",
  "key26": "5BcsQgbAhUVFGTreiri4fy2LnaqKgHF8f9kdvWN5RncKA6t2ejzzRBrhEzC36tY8tQQRuvXKAJqctC5KPHQ3in6i",
  "key27": "4FHLV8MRE6fVxzPhRsfC647asLTX2TAT2guY1JU7kqjHz165hwDodaJiaBarEkEaycnmwUZ1dFDU3dpz3gYwXump",
  "key28": "67HVUwZrQVNV1ipuukpFmAVNvW7Ua6kWEANCa4eHy7Rks7xTHccAWZENoAgYnVkzJE1MnZvtGgjebttgwpfi2eox",
  "key29": "5zQm5vpx9zAx1LEMTfsksPzHbGKgUEfJgyAwo6UNyQ4Zx8JSuHc5j8JEGpm6Q4w4cFzUmhhgGSWpWwBTmz2ESKMR",
  "key30": "3KmEree4g4mzejva2NfVjXEwRV53u2s8MHYPdPiDVFkAYjuZ4gpQZNkbNUdwX2oeM7E3JKkLH8AXZDoa7Bb53anM"
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
