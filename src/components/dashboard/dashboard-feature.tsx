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
    "5w8MTyrx8vHLhpYM7J9qHTWEsbAALnCG9KK69toEJBrTrSAdeszsqjTNfgzYqUiSMG3DwL69DsCPz3qCozokcaA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49VpXBwPMz7ekXkeKqj5PztahLqwW8yTTgndBknomQVLjddsNLmKaCuxcDATk39GbxWaESTsfS9Ks255oL65kDKh",
  "key1": "mdhFEba7U7htKeBzksbCz9VRkpLmv6g3yA4Erfni7D9LtQmFqQuDBaCaPUBNUYHWWru72zkdCu7bk2zTBdyTfot",
  "key2": "sCtRRf2R4YUfCfSt1vwB1tvMV9XSzjMU4aGNakYEpvR2Zu7VSyi6Rq7m9m8dKo7Rtc7YoReEorDXbzK7RkBTA2b",
  "key3": "3BUYzVi56RUAwFsXzpk48uhc9DpBYvKmbz62qxpv8dnjmt5z5umvyh1n8oPdFAGkp4TfDVKbjxis79cogjvdnoar",
  "key4": "35XFXHty8PmYtxgVm32zR2cYEC4pwGpp6qQcsoKFoLXfbEs61RMeavQp44qbcYKLH1bDTdZ5w8mK3TJoB9cFhUBJ",
  "key5": "3m723SNDhog76dontYKUbrTKipk6dbs3nkHwwm4KUN8Y4fmWphij3qHneZ1rYGgZk376mJWwwnVAAGuj5Tvw9PBU",
  "key6": "4yrUZrwRExUZuAd4YHzjoQkYax6izK3aeP1hgpW1DBa37ku99BMrcAFPngB8TxQutMvVGZvxWggwtJQ9Xt8oCpV8",
  "key7": "48Z5FnXGHEup7KyoKtBrAVVwVTevMZ5LWaALBLWwoGDWiQvsjQVYAYgic5zYrzVsobso93VHhnUjunnAHUDVGqgK",
  "key8": "5Hj87vWMXmxbi3DzMSGraMRdizPHnkLJdquXkzXBsPTFTP17gtjMSD39oySL93keTjciiSm8fmWBa5SQcyJLSya1",
  "key9": "2L9RbKxdexR5KKXYYbCn8t8GfiWa9Jr8d9SiUUezNooFEmdM6ckci46JAtSBfVSjRMjYUeFiDcQqC6cGqJCVgRKz",
  "key10": "3vyRhQk6fFczgYYDTWATrqVaWYVkwXmyDh1rpE1quW38xyrjHUtL3KNWoURhXvdJaS7Tjj1Br1HSmCEAuoXE5W5Y",
  "key11": "5UTtnoWHsFsdi4uZ97bWHNng5tu4Axwzk4z5k41HTuYeyQ8Cjf8VoSGKthXotLAQfyEi1MZfFn5ndfj21PEtWkse",
  "key12": "24378f3JxSB52XEAqMwWQuz2FP6HRBxBPbC6Usok6yJ8h8YmDKpxxX1KxeghWHnVGsgvSUwxUarjjEqjNYGFNkC3",
  "key13": "4P9T8Z9MVKddzH9rN66MfSej95beQnaeiUiUMPRvNqv8bW9JHqJGUwG2WkFPUhhEs2wq9c8ASprmXkNoS7bpwJEG",
  "key14": "2DsyHxCDoPamjKcqXEXX752rvYvPK2rw6GSRhqFRZghLZXshLbqowWr5we9CFGicexzEsrbLkzEahU3TCcZmmbHJ",
  "key15": "2RPpsX6fvzjRrXfCBRXM2SoevANceQfxY4ZmYK7xziGnrUX4M2Hao1pAkm8eeSHfvQo8pX5aPPhBqVHfxz4P5jvn",
  "key16": "4dAJWaxhZkezPbjiBFW65zHx6wFbocn85vbdUSF7DhzmDt6DTVLrpYx1gP1prdSFMPw4F1ME5qNh1FrDoC8R6Z16",
  "key17": "7GmBr4brng8JpkK8SU8wEu6wGLUYxKVrhzYSd9i7kSUUxpmm21UxWQrDzhZyWyC6eheogcybfdps4A9ukrmj6Go",
  "key18": "kkQXZuK4DmsHUggDT29G93UMxCzWnfxXzFHUtN2EXehXCfhBVmodyTYXanSmv7JkYWk3YdqpDEBinmP7E3YVgWP",
  "key19": "NEHhEh9wEJLrR2AuwtwDNuYN2DAei1pm6m7z4AE3zw57mbbqbG9WuULQ8MBL3aUsFA5pLi6sqJWjjWd8qRmMKbw",
  "key20": "3Lyspo1DUGdyACHrVfkj697fEFgUqvx6DGB3Wd5fLGJYFQaai9s59mEr2SDkSqTcRSVsJtHcTJjf1Q4DCLXzstCk",
  "key21": "5vjaqJQtS7AsAeJ5tCeCm3rBWMWxbrBorYT5WSkyLai4qnvaUTXbuE5dqCEr4Zd6CfFrSyHScPyvREsLxw4frdbo",
  "key22": "3tTvPVnXMb4P4grBLKZoMfJTr7gjEjUFgpNocKXKDcu6KpGke2PUsn8Q8gQdpWEiFtrTUkDXREaavphDTLCqoQJR",
  "key23": "654fTycfVNqpXmDMeafbLVzvBgcbA8xwK5D8WeBhTg6SnKhrj6787UWPCtXrzqj9G7AMd18CtWuMNbd2eDnCPQ1M",
  "key24": "2pZ5zEh4PhRz6VTQcUtRkowgEuwBwgwHZ8YhaXMvcNNNth7TNxox1nSEGoBAgyrozi9Mad1C9CDv7MQJWeJvBifA",
  "key25": "5CiyN4dWaiRMezFoesNj9L62LmjinMRpDx9MstRVBwytaj8cGKF3iznxx1k9FfMsF2K3asPehwFW4j1rWCoxaC7c",
  "key26": "EMxPByjFASPzyfH9pWu7VpPSBwBjVR92vbKcdH8hR9rsM7UUYfRrRYvgg2xRMYkSnx3xQDoVbGHyEqYuy4Zd7mA",
  "key27": "3jmwxVnUkZW1oTaaRbMGQN5XveghnwMQxhrT6u6eYNaFzcJ7YtvNaDdDJ96aXnjUbDb63o6pEFzwGTJPaW53rr5N",
  "key28": "x4udoYobZLFb92Wn5zYfMUR5cPw9k5mVU6nz3UfxahuqbL5jFvJCJz7peZ1DsJFNQACxwH3JXbKJkudYjtM9VFH",
  "key29": "s89rom5zKiwuULfYdZC9kGG8fZbVtUk4iZwVsX2xc1V3fgtV2ViG97R9Lyqy8aTUCEKWcK5zVZqTpZXFZ87Ji3k",
  "key30": "4CPwUbqYhp9WLwpw53X6iZkwV8YRNkAAWsjnBFR3veepoE7P4C1k3D4jqwJtAfjocTJymnhZK2uSNhJKhJgMW1JY",
  "key31": "4D63Lg13HNRkupuUbgey2MakSwd6qvZ9bntaQ375nhPJSANs1wu7U4B1jo1uC3th26HMLWkt6LR1qcaDTrWQmBK4",
  "key32": "66LbDqc5cCWhWdYNWBen4mL2KRuwVAzdakdnkLZ2Me2SoTzjT5tCaw82ANAf7fWM1zvoHdQBnWbnnBv5LSwrQSQy",
  "key33": "2h9qm5BwCQtjxoZdnECAMgSunrxkfmGWU484pb9r5rMe4JJKgMync1bB2tT8BiRkjEzrgJCqBZBURVk763dJSkCq",
  "key34": "MFdXsQq6NUop7hdJKb5zodzxzUSiHzS4ZXzFLC6oz7RA5X4R8VpNvcjjNDETUWsw4EwCX8knz8yk3vGbSG75D82",
  "key35": "2AZ2HJ35HmWKGcYXf9ZC4aofF14eMGsYsT58dfEQSE6KamYDZgJd3ptGjTkhiSj8vU4KFAHVXaWLx5DDvCXZg5pV",
  "key36": "3yENd2DtecxDrSbQbngDGR2QAfbmWZmTvYU3a5BsbF1XF5YWAX1aAmKbP2VWAMoiDETU54QEe1YsTSLKT4oxvzmo",
  "key37": "3rruHXxD8xUa64hfbvCZsRRZ5s6t47i2zkjB59jcUgT9FnQyDquRBigsD7trhsWs31C92jZrbqTY5wNjq2GwGdy4",
  "key38": "4y4X2GN5f2aLBCrq4Bkcn8Pn2BhSEkwW2tZjKKgdM4ZAaErZovTieS7TN1oQzqbTdecyFUJ5P8JUUhoe2ycTuhZL",
  "key39": "3oeuH7RsUg1tN1GSUr9rxtrNhpuLGJo5JNJ9rhbYK7wjLkrmb7Fr1S5EVhcopqEUaHmkbXCJBFwz2NoXL2iNauNz",
  "key40": "5hKCVxq5JttWBPs5esJQHDaXvz1K346hQ5TSM6phETL91UCSgMm2HMQ6BYsqFpQCBV9fFrdQNkYtsJtwRe6o5SpU",
  "key41": "2u6iNv9quUFT6EA4HiAN6igBCrAHkuXQz99ubWZptRFRAqiRGC7UzK1DatekbDCudP3woDvTXVG9vdqt7zWj3Sm8",
  "key42": "4ic9ki9xBNUEzkurFeB4roSzUR14kpxoC1MkEMSPpjE1Lbj79m6dmo989HyfLDYJW8uf4EkLkSJEfgBJY8VKqe2J",
  "key43": "phxqBMmf1Z3nBECKvvcqxuRT3fXeW2WTbeC2L3AiMmfdPBHmWvdycNGvUzpzVi1kvHDezDKq35ZNXYjyhvCdL7C",
  "key44": "3BgjVhqukQHiZe5S9PexucgEVH8eL4euxgGj7xCfTZGz8tfmZpegqy9AHqbK7KEoMfAYM2GwzsPTYRwNUYLWq7nc",
  "key45": "V723g5YzbapoTuWAPBfuW929ipTChFTuJfc9vBLFN1qG4MByAt7tosA33JySr3NvLn2YoYUo1NA8rmFHzV5xiqS",
  "key46": "2o3yZj5axgS8Z7QcgeFSC7cGWmwnqp85vvvKz7bMWp7b7RN1v7Ugh6c6FdpMwLpgRcTPpdb3UWyozsziyB76T3BV",
  "key47": "2K7QxjTKPMz35xwkUVArRARn2PKqx2YmQ6oMANmXG4nk7LTauHFf3JjDAwKQdJ7U8BwYFxa3QfmfbRJHa1RNSgPF"
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
