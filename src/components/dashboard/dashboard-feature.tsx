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
    "2Jj6pVTqLkE3uqQw5XfT6Wuy3pq2L7FkaUo9ncmaMwTGpTwT2tD63f3zmzN6w19TcBHiFF1NhuPpMToM2cGr9eNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "msfdtucQjM1vkm9xjGJ2yFzP8yvV6ReEjxQmi6sR47NLR7gHrLiz84syHMP1vf8PtxVqvN564WDN6eG9oSzHNSS",
  "key1": "jCxSYReerhw6akniaMAE3kzda2KLW4f4MiRWtYbWHfUtvxkft78KAHtc6RaJJDUuXsqpCvhhg3YRTSixxMKsz8t",
  "key2": "3genZVuDoDJmiDhfYm6v9mnaphByWmE66eyUCB8vovHZuMo7WJqpW7RJeNWz1zkCxKyFARN3AUsLZyQfQw9jE2jx",
  "key3": "3Jy6py3cW7pbyMSZ7vjat2GPvknTnf54t71376RrEMMknXnvpGKLpoAS16G97FwN8qJWWcMrocaiznWceFhMa3S9",
  "key4": "gdbHDms5GYx18Vu2hMAYUiXGyHTFfMDgUPBwBFD3weiHc3HjtfyMcn2QFiHVnoD9NfcN8N5AQ5oUb5aDcVkaqzc",
  "key5": "2Frye6P6oDpXTr5vZVh9c1Z6ZXrUXsbEWDhyVPGSmzqQZgmmz1V4MAoxoSxL5RcMapMsuxBqHhX4vnFrZzCSAKtS",
  "key6": "3QZo6uLeJiZzDAhM3vvvaXTssvrGDXHc5WpUKdiVXHUZWX6pxBBqoxNxC7BtqsEJ76xQgR3DrV9E1E4H83NMw9r5",
  "key7": "8bELdWgX8tG6v2QHmFV67CDHv5FuLtxkWUHdaqUGVnvKm98v4aFeJ7eG8wrwPVPA9xrk8zEQkq8rti3NAQfc5HF",
  "key8": "4D3npJTW3AeW9D3or4L6TV94DUKzESNiucAdHaC7yLZNsWVacWt9H5YnhKtpByQ2qahYTHjo8yXQVuyTvrJvg5Av",
  "key9": "h77qkThTFPwNTj4ArWDLpRSk5NVRDNLxXsgugQnWMMzL9aikPsSUpGbJC8vcheTG11JJdZU89epip3W61J2kLR2",
  "key10": "2uhjvyBkQFJfJ6hjpuU5YQwuMDVmfqEG9gs2eFiEV9VUPQon43dpG1pmbB6XJj2QxzsB4C9tBvyJh6PhC3ZzhQs",
  "key11": "4QwXt5BJnsrwefRwU8EnC9DXo8VcNJnVp8aSiRPctXXaKNFUJmYMQS5Fbd6AT3tPBPC9RN2fzbUy4HWxsLTFwVgv",
  "key12": "43G9dZkLQvuYoMV5JYgJVoaaBkiKP4PT3YAHSUhb3BTsa45yn1Lgzcg66sqf9sdT1SPPUTnj5BXEAG2pvcsmWiLu",
  "key13": "s5iKmBAyWq3aWQCTuFSkT8K3vimpgc5Q28qBvGgbJ6Z6vQc6qz9VBinCvCMZn2EVzVK8RDB3BnutTDBRBFDy3bR",
  "key14": "5fRak9nQxn4pnc9zyUhrZRQsiZMcWhqPKeaGKqRjYNB6gAj5td2gFjVeA4hQ4KJfsynyN2mCqkG35H57mafN2mFp",
  "key15": "QgpDWcJ9rJRMyCUy8pxjdedoN5JCzrHNDpKUWU2QC4yweYZV9jomsP9FkVUSn8cTcJMs8cUq9Q4xDJmT8trvDDV",
  "key16": "45DUNpNyHgg6v9XqtT66Z7BBx2zeV4mR81tvZpz6egw8yD6G7baAQFRBVqfP77famHEhugrLqDDus1DN2ZMv6931",
  "key17": "4hYgUqQRjH3Z2ZB7tyNiwHLuMTCAkfUHsWthZQaTmsPfqj84cYwdfmpsBvUTwKEVqv48jKBVRXLkLWYmRNkYTfCF",
  "key18": "5fLf38UusuxntnjLjRpHvHBi88vM6EACfJDbgrBfx4Retg3zyCzJhYUafLMwZ9EzMBM5W5QFqAAaAASMK3YSQYZF",
  "key19": "3iLXvBHTx1gGmAyQyY7jt9Phd9Go2JXVmRbJUvtyzRWytBNuPcNsgyVKd6wT7hJpzTbxMLW5bq2gk6z2ws2izRSB",
  "key20": "4WQQhrZhYzWxBDM2XDG7U3vbQU9xuf4t4URwGtAWMoi9BtW2MJyERSzTMGbPa55TyZa5MR1qUvtkpuFUUAc3WP9C",
  "key21": "4XKSkSQBBx2xU8orJCuj4e6LSFbj8fuW7PazDaCZkDLF1G6oTJBeBwbHUJ3ZjGbQ38REKSHRP59QN8d1FiudJ4Ar",
  "key22": "65mhvZ6wPKN9waW8NG9ewZS5nx4FpFwAG4oLv2WGhSxgXxeBGZG6iG1NTK75vPQniqzpRvGhXB5JyWudwf3M1CAt",
  "key23": "5tVi8mQLzAAP8DLoRuRo9W8PafyVjPMSNfvCL2bQuS7hK6oJuqwG4HfnV3rXUCUaFGy2R6HESaMtYYHhwYmGr7EX",
  "key24": "4phi3w8qRyKXbtVa2G6oqj89EMdJbSBAg23EKBTonLqwYSGx3bHBf49jFzKoEtmEEa6X4XVrdTp1PZGhYJZzKF8D",
  "key25": "2WtsCwJXdW3t8Gnk2Cdfan64au6W5pxc4vRcrbMMvUWPCcjYHVtaZpzSNzy12UZzYzZ6pmvkZQ9rFkqZ1joQdHMY",
  "key26": "2nwtNt1iHsvxTC5ESuKNoYiVPTCLou2TbAAxnD7Ro6UxkdpXE64uEBrKzMxDikpWkEBbhd7xThyx4wpELwnRAFrV",
  "key27": "tm1ujvKW552YVPEqqkZEMvBF1KedMhWkHYhkosiahM8LQKAKiReMMSvaoaWtAQTYE9NUP8QFuWE5L9RtSNbXFyF",
  "key28": "45pjchNHHp5GCNNrv58Cmj2j36gmzxM3Ge2aLDF18PLnZtFuVm9P7Cj16YmvmFoX2Tm2JQ12Y3NhtXEM19XAAofm",
  "key29": "39pCGVfMkhzyETpQpg3x4LXhQaCqfAZpzBhhyKhqYBDZkHEW7MdYi9uGCA7FJ5yx1bqZFkP4ungd6SV4tuwftVS4",
  "key30": "5VuW8c2db3bF2JN6L63Gr9qXjSi2uUeDVtRN8y28WGVU499tYDs29o99WjJw2fxkkU9Lgv9bcp3H8Fyfmscunokn",
  "key31": "4rBA2tMtGigZYZcSfetg9LuFpTx5hKTvjH27Dc8kziwAn1eUds2XU3DV1pKAB7Ra8S9tthEtNXuUTM8MhYzqmcMC",
  "key32": "3v3Th4CwHMpTbqRGuvPc7SCDZsRPkD7m8bGBxRNtusDF13LrquUQ6pNP5QxNDtcpbBeGAf59A8jaMpMdZQLcJxkE",
  "key33": "2stmBKY8BwohGA4oS1JkEDryKH1jPjmYh13bsqHZ5GEXDPGe7tS8e8yV6GErjAk8FAFkXKvZtGpH1zZ3HVRpsD7k",
  "key34": "29Fxrw4waUeBqMv2EociYMWEMqZgZ8HVDhatVwnqvZuaU1QCZ3poUHU4Cgr9sVtzjLu5HJPCKc1xPG7gvqWe3YaZ"
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
