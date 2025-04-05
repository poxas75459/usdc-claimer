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
    "63hJLPNauAXwsyquqk8EBWy9zNVZua8tHKbpSDzgGvRxR7H1KFVTLMcZ7BYzV3CgiR2nr8xfuPpaeeeytszko2Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZWAGFAVpeEpueSFnauVMRcqshWHqdCxAJrxnnFaMrhYpfZKt8e6rrDrRsrVrFAwQAyuwUfUx6Y9a2XWrGedT628",
  "key1": "4qbz2zf2xy8fkhtLj9iK6fgafpjSjCbQCxwro6tvnZf136hFeBBEcwrXECn9nmcaakdit49VDtCVcr49eyM12YT1",
  "key2": "55Hc3jwkG1MoDGUAwnq8tvNGs7Lu2daX4TdMNVTwrbFNYBCJ5sv17YoRE5vTW9ek4srUfSEdGXore7zKY7sJ5FE2",
  "key3": "3F7t1xFK3Fx1pbcw3Z7Wk8eZFwtinusu6KynF9GoJqJVW4zhV84Jg1Wt1BHpPLBFSFJqgThQ7WwwCrfPMUjbuVsM",
  "key4": "5sn4Z8ZSyphgJQBi1sa8xQ4oJxWY3aosY6ikf6Uwtvi4CGFdGSN5La5pSC73iVw5XXMXo6j4fKTYpFKWx4ULyeH6",
  "key5": "4GXYgGYKj2fYYuzUaMURihNwzbToJsLDqsHpFK5jqxottmUGuYXVWZMY3CHhEr4pYyy2NMnBDvtRbonMVwP8cHgH",
  "key6": "43XpN5Ayd8NNMGxrJf1K3RwGx4sru6V3nCiLZbFB3nb7QMiRi97DxDY9ipCFy6FiHJGeYMgfKrMXhZ4Zvktx6iug",
  "key7": "3nMwhYBF7fiBjtPXDgPEwE2NnEcyArUpn1c1fzdvVzEWpeEEdt9fwafZbME6kbXEXWrQ8Kf5cKc1aqit8DS7yUFY",
  "key8": "4HNvzQvy8jea7J1gXSWnsoPWyefKDePpvHEWSHncrrZsAVepT5s7qgyvSkRFdAeAZ6DxRk2ApBuhskAEtcqn9Rw8",
  "key9": "3phRpGAc5sY4ggiW9jQJBoBg9kQg4eiKSxdytm1RUeP4JUt2gw3LnwwGsxnaBUVnbVVDxN26NbVHZT7vuoDmAqEf",
  "key10": "2gpKtf5ovpDt5gicU5RfxKjv6yeh5zQkzPoQDKjvpBZx2gJc6GFw9zcjSHQftun4AqxxCWcNgFEzJCfAsTQ1YhqD",
  "key11": "2ava4sdruvJcdjhhB6doaXEaQaVVpGQ1kqqxk9RcgrYdsv5Wx4PYDr65DLgtRTm7Bf8S5adV8fLrtAEmikyi9ggy",
  "key12": "2vf6noCyHat7GnX739fTEtM3JUSLZPK4qSGKTVcUxsDywuiNyv23NAq5ryJ1um6nV9SMBRyBeoqsfmxUWDee3CQh",
  "key13": "4icow1qkyvvoTYqiCwBgTEhPPTteb31vRKT9TFFuM8HZ5aXzUqdPkrnDsTdzP45jP7mY59oyL1V6zVGZmt3y7WKC",
  "key14": "59fRvbT1YBJ8eg1FzL1XQix6YwEnowxCg2bWuMfSBmnWjEh6M4jeyp5UDqbhAhhRcAhyz7jwhkaZDzRiJrbMBSUR",
  "key15": "4ekzhZ73JpfNoTdk2U7WVTi3PHwjZ62Y5KotcB5JCTcpRdhZ1yZxasDeMtwnD1uFikyHgmhz9hEPU7hpYKGzC34e",
  "key16": "4q2EUjWrFTA9xkTHHYavrvKfZN21UrNpj5tt8KHfS6YHRyrUA1k6sgMKMSdaQMzo6bkiL3mvULDLoLdzReqE9J4s",
  "key17": "5YrZyJUTf27rVCxWVgqJiDh86dx7gvs1FUUiQ64adQK6twEy1aWhPfLa8b5shNUaXkcCE2WZDfXpn33ns9TsV9v3",
  "key18": "5mhGhkY5eda7QiRktqTcrqvmZBbguhN7PNjs79ngrgkGYa1Y6VEK2hWdVCqEcxPX2suZcboEKuq3pjKoYCrmmPw9",
  "key19": "3a2XuzWMQwejGVE42PztcrkdfizJLRM9ABRu6JqmCxThSddowx1mV3fCsfWwQk6sqG26RHg16tvropFEmqMhVbLb",
  "key20": "2jSNcmho97kuVEmhhwTs2TZPMYr1rmEaab1T9GYRzvzbxz1EUJvSuA2EGrvXmB3pRC7tgpnf2yiMtgJcpDde64Jn",
  "key21": "2Uaw57pCJ6xmimFiXbqVLZN4P35ZexLZpQYCHvsCXgUWZTviV86XhoGrjjj6JAc6495Fe7daHxeDkDuoJm8r4ouc",
  "key22": "eb3gemgkxqERBCTQz2cDb6VXP3hbwVQLqhEArtMQeREHFSqCJNKNoj2cYLAkuTCrKfiRjvmyYH6Bnap8n5d3jyr",
  "key23": "5fjprvsY4acnieSZGh1q4TiU8Za1KJ9BR1i2wyQt3nzmBy1QMCqMm6J88gmbMTEbezAVpTzKfAEY9vGEPb4pvWE3",
  "key24": "5WYLXob9F7HmX9YHuKMmy2EdrX3hFedS38kz9tkphTqBN81BcdCEk4aPnYSLX7YyXQcT7H8gwpRyaxGn3XuJDgZP",
  "key25": "5g17TNu6daWR1SPxfynfDUuWo2g3E9A3ABy3Uct3askFvbSgShGzRia4SNCdcgsDDcUjE98fCg7Fb9QZ75wgadDW",
  "key26": "3FeVam7ZwzsgaeF52E2n3UVgzXpXGmwvz7mZGo5K9fG6QMJLA6CL8puriyBoWi6BuDQ43P8267hS7LJjfUVecLLs",
  "key27": "8YzmzoGso4q26CUYr1Yrqwyi3u66ki1pHKkhy3z7w7cYzzV48RgT8ZsRKJJyp6xsmFWfX4DzbTogTMPdAathAGr",
  "key28": "4TmGGMe4Pp949FXKvYgfmbXVtiLg2nKFqeX1V8ARt7HatW31YRvkk8sEKLXtUFi5Re5fDimVdRJ9dj2EzW3CJXbe",
  "key29": "5Rqf9xhqzqDxEF7TsCHdy4aWvsrzwpwk1d6EmGoYirWpwJqvbasgrBU65p4coZD4WnNPFCvWYAu2qUoTzW9w8Dnj",
  "key30": "2hgmatY54puFVL3mwYFreoCMcJcRume8bkAayziJjPQghdqdkubfUG7HN1WXgpT1dMQyR1Nvcr48oSZ4Sb7uJ275",
  "key31": "ScqJadjcjLXkSwuYLoR4DCHzRPZQpkAh3v6ydFMLJtGcjH3CrPziBhimusHCwNhB9NqNCnb1M22wDna1rFkctG2",
  "key32": "2pjzAjugfxfaF67z9c3igHrwZDKYCFPYA9SP7KAznDok98UMcmKqjTivGuEXs2jLKxiC6tkT9iffh2uu99ZvYh1a",
  "key33": "4LYi82SYwboJMVu5wfz27p1TVpjYLG8CGpBCM3XCgBz7Muh8ghojz25gVD9f8wcixYWWYeSEpXueu6n28m2iuPgy",
  "key34": "34uZ41M5kJaT1Wqh7MCWzdSRACE7XwpXY5qddvsDxVeEXiHpmCktdGe8pL3g7n6eMWrAmx4q4nLjRwYoXowbQGpP",
  "key35": "2GNvUH3MzGnmzqUEPU11xgaHkTjkM9CdNXYP2MxixE213m1GLKVdDfvfwMAhw5AiqJXWXyuyFCHeLdVTQfHDdB9",
  "key36": "3QdJJ4g5ekEgL8SaneUjNVzd8AgwezaJcjHYvAk3JXQAqStF1pe2L7CN9CDcnAVzeKL71KUo6qK1e2Kjn3b2MdsH",
  "key37": "3GE9NkBQuxXbFFniUzhQPntWmM2XAgVECRF5GtvBWBM3rp2kEweeP178WMH6ZrCNqdpSRCx2s9Zf3oRSD4w6LLoV",
  "key38": "2XnkQqz6Wsb3ATnQ9MxGEC2uDr9asin6MSd2NwZygDqT8zGoHxx94Bxo9WrdzUU1v7fuSmkN5sr9VGBWTNoD2HzQ",
  "key39": "X7uQp48nXMu58JzGA7MWwfyi9zAcgPvY5XqMvdGr7pYUm6Tvradhpcym48nDmhP7Cg7Kx65Ji94XK2MWmH7p47v",
  "key40": "44bTXaM9zFYvMDH9zgHDtYx4xAoXQXeANosTv8ofQD6Pk6488pdb8XQDo9ZFQSujebBTuLwM1RAPNs1A5oKJ4fkq",
  "key41": "51Y5GYvv455vk2zrRCChtaii3WxAdDMxyXMxDVZ53RLpnqkSSdqUm7asnWPWZVHuw5JM5vjF1tLCz8dFkWuq5ExH"
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
