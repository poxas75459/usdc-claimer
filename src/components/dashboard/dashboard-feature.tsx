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
    "3XpmipfJQHSeUpYUpLgTWi7jWr2aEPMYGnRLr3jeKCdyLWyLd9CwmVHcW58WcgWzaJEz3bd934Bzz9xuVaga7kev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57trzfCdQZCc6hqrqRZgQgjPZ7EKNMWKSx34ynRw4i3NjFxnVUKC85CnbR7CKVuEpUjn4cMRR6ChtqiN5AE4y6sR",
  "key1": "58NLbgocUMF1mWnT8QLwZjQ6GrpHVrPwBWBnEm4bW3UBEEiNA9qCkYzH24oe52pygK4JQpiAW7LJWgomeYqAhatF",
  "key2": "2iwhi9CkUuoDUzqvMTgs4XJyo2bFd53ix99PrfpGMSiyeXcAZkiRT1bWpg3SAKJ15tGMtVp7NuupANByLobR81y2",
  "key3": "39hhqbUUdYhQ43uPQwzPUy68qM6Zvgtnrjktihq7jcgMHmvj6Y24Ex6SekFMUazUGg4PejoMwYXPwtAoSNvHyD1W",
  "key4": "2jVwxUfYuEXBYq7ZAai2SdAHjVw2hZWpqTgBkF2NXBACSBc7qRyEDLR43ADfiQTCASg4fryNKe1hLqUpKmFioMYJ",
  "key5": "41MvfugTtkRophLMmc36qdaG3j5k3nW8iExB2JwSE8MfWh4aL3rnvK3MSdM9yaWcXti4RY3NRYiUNKgcbFi6jVB6",
  "key6": "2vzLCijGbQKEThN8EH14Wzv6i2vAWH8kjrQMCThbEnGpRShVrXAs15f47m4LbNZrV4MDA9gXAx1sP4DBB2Dved2L",
  "key7": "4JrF5WiDa5NKjtz98VBx8WFUjmpsHdJf4nZ4oxBYZqPUHzoPrGwE1er74fAcso9Vj96rTNn3RCG4yCgxLgV1CzrP",
  "key8": "66ANpCWGGASxAe6CAaSFWcwmrjd2jYyq1EPR9EvBhpuC1N6mXSQXyKq7HK8HjqcgicDqRfVZc5y43s3fz2MNnUZm",
  "key9": "5pnGbGfGfZsTkyK4pwNGutepB5eZTXuW8Tfr3ouKocFfVdpL25ow74Ue9Zwzda2qsLpbiNWtreb78f9tRMvcGp46",
  "key10": "5nSnEsHE2qqh6gGjUQt9HVQiBEjCaPHDLSS6efFcfBk8VEZYcuv2Mh7FVHobMLQ78pn1mtNX5waXcic8BZmJSbdx",
  "key11": "5M83xuEFedaMeTzJz4np4DEpe4N36gQfXYBmiL1fU2DTizgs4T4VxQnfnKi4u4TxBw5PxPVqFXYSeb7SnzXAFkB4",
  "key12": "4fPzrocZ3ktJn3hREAm1VKtXRa43GhqZMeu2SF3Q1oABjEJ7UjG2L8zAmrdz4hhV3DoJhdpfC9NrYeyhPLWBNJxp",
  "key13": "373s4WXgycqH8L912beGVq81SS6gywJEz2ygSGwAW88a8P86eXXWKm4GMA13tuGakq4SrzYDf3QBAoRprrLNnefr",
  "key14": "4Nq7YUPRAGkM7DCMjZu8fAjDPN5XshubVwrzG2LF5XLoZ6iuZ1j5d52PaZ1u4p76B6ojDtpYu9rJC4WGVUpvoBkf",
  "key15": "5KMJYGs1x6YgKfuMTtrFvRPELMzTCbzaxdKYaGxAX5KEiuMQBt16vqfNpzxtcEDrktg3Pz75V4FhfNoxmF9xpstM",
  "key16": "z6XTATkgzM6kXdsf4SRxcjNm2815qwYLW7jhoWZjtFUR1gFrBxzYaHEV3M7TGeTWXEBmAHCnBE2hhf98ShdnJMR",
  "key17": "3Dfh6DiohSRzJjhPA3fXaYYMAuB8eAXmgumANwunRmZAFbKs2YKP65Ly2zmA7yxPtUFfrVRo9ek92hDg2J77eFBi",
  "key18": "HYTnmXGzRttL8jt2neRsXDWmC9jpvHh5rimhZ6uQkofjhAvT2mpJP1LWSYf1KqNoiPUqaG23rN71Zs2EhQiTBeH",
  "key19": "2GJbst12DAHLt9HCDXQRWvwnjyze6FCvRwX81ndnGpWs11ChR7WXHeCJ6HSEXydTuRETiLyLLnxH9PjGhrJimzPK",
  "key20": "3eooVTbqdzWwqQFGUu9ss2i9iGyVpZN4TYcx2SYb7kU3DuJPfkHCpRKaESWerQaq98ngb8Q82iDQvpx4eDujnoRw",
  "key21": "JdQeHEs6MuZZVDZfjx7cXrcBJhxsFAaoGycGGYw3YZrPtoCV28bBRk5ChNmv8J8CtRrh7MgNB9KYCKzsJB19qQk",
  "key22": "4LqnfuW2P4oaXck2Rxr9pY9VQ8xUgjrk8Mhgx1rE5APvcBG4uTFVbrNF4zeKhyn2jJEkQvx6XtvFR5Z9T9HgPnD3",
  "key23": "38zzmKqw1tV18PYk49kTSag3eQbLusRqRhQpTKEfYuoVa37BWY8DH3GBpjPNvTSPyKHWcNpX9r2wxYb5kXgvWNbn",
  "key24": "2MPRSqvUDnCvZigq8nMppv9cm4jukFCcWzqq4SnuQcy6zK8k5vNPwxtcSJCcbHKWqZQT58uWrEyabxfkWP939gHM",
  "key25": "48pECevzuJMP8ahA6byXV3yweMd3zazMoQkzfFJ7YcDnTsKuYQB1hYHG67HutL2pxj6tP3M7xcCrtn46C44XxAJh",
  "key26": "5LnxBKTFfoRckbgJ1xFpDMx3QCF6tZ7cbTkEt31iyEWb6rnkGhHejnb9ZLNXvoDZPtVCiAA5VEZy1bFkYFYWcyUe",
  "key27": "2xVen5vAxJH6ydmPD6SjewvzNVoUYCbYTA196wzdGJnThe6N9fTceaGeEh1jErMJxx3TxW6au1oG3o9yTqEJnLxP",
  "key28": "5rWfPrSujHhH6U29h5jmpenhMC8U7ZKxmKMPSzbHAp3sY8gCkQykT5Dwbot9drYKdfwE8hF3Fgp5h5QtBuJYdRcS",
  "key29": "54Y6CcQNfwD1TZvxauPNAaYnGdZeCTMew7mtF75YAPkTitZXu5n8XKRBpXPQR9ds21CvN5idpnpH3Zka8MkXYGRM",
  "key30": "2xpUSESdGrKv6pRm9PZUWh76irYpjpwfUds9hRxyp4TmN4YaWEPUwDyKDtXiMhQqcoruYru1nrCCYVstozdvRuJ6",
  "key31": "4yuj5AqUL3LP6cUyexgBHcf2G6jFmxDXrz3nJCGZm8bTYYKsRmuB8VtHUXmnA6cJ1iDbRbb8HvxpPYFcYCU3Euph",
  "key32": "xtzrtsQ4QKmas8jYms1ZSeq8VQw9CyxepMaA7azZgwCMGeLE4Zdz3LnwhAgQyNexqr6xPihbGqobQQmDMR5sm3W",
  "key33": "2YC51e3zyzxomUS8VoyWiWfNz3y5ggLRxtBAfzd46upjBjgDAaRvd7U1cxARMQkR14oY93SpGhT8y75ZsfTsxtYb",
  "key34": "6589u5Zz9ZD6simwZeurU9oupt74sCadZmHUmc1B7dy2jFWFB7MJuX2NiKpz4vo3wkXKCioGvGbwKdD6JnQv3pfT",
  "key35": "wUfwVmoBEtvihfu9zZBtoG4HUNFMJMokZWgcaQTSnqZ6UvPVGELhrZ37Y7NHR4LTPWL3GnD8i8JQmSNFCwPi5YK",
  "key36": "3yfCV7fhzDXdb8iCCPjFKC7RMgdCnjRinm7dtsuk23mRit4JTBGpeHhwuzgq6QGmzu96zRgubB3KKyBTJEm6bxi2",
  "key37": "LDKsTEzbDJiAhgTWs1NsKTeV567ZUsLfyp5zeGKLQp4PxCq72pi9jY54JZq8ubcHzW8H3bVSP41UGtyfQV5SJ1t",
  "key38": "wU3L65jQ6regZV6HmCdFmS4Zcb4zcmRHzWCXrYMUwpmp4muVQNDVu5L49JCkvXcwQvN88grWK7oBwHkYaRC2QZh",
  "key39": "3MWtikSxjhsDVUvzWwbWmvQi6qZp9VCbqsdfrZAnScveVrmA4tbTJNbGGK1HEZAvRCATHmb7ooeqVa2Q5QfMfjJ2",
  "key40": "3dGTeu1CsKJdiE8HsRoPG9oi7LJQ5vH6xQwp3kwpt9Vfb6f3XFP2PkR7KAyPaddvrSE7pVJ6RzaKCLT69HYe81np",
  "key41": "66CuvXMEXhPcDaFHoKNPo15KViVyWCn6UT1jXZBMaMcfegjDD7tQGizf9gvRNmJLmbgP8h45xvHMeB6NyVkS1wHn",
  "key42": "JiyMaBauRCGPVEn9ZsWxtAu2YTUuUMBBUnNti5BuKNyDpSeipQXq1GbSXUas94vqR8axEZyYQyNa4qahARP5dJD",
  "key43": "55X9NtCCPm1LHKn1mnuGd7N1KcCZ8eeYFq62oiMKtZfFwyw9oa1FwRT1De38EawUjh7Fm4TUb4a55LZ5KMDctgHt"
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
