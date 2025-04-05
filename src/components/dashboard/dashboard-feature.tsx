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
    "3k1a8aYG5bz7dyG37JidSj9BpF4vKehDfphMGUDiW6XYJBNQjhLPQsEgBDv7oMn23h46guMzXUBkTpUdGj7fQH5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUazYZrZKHXvfTvbe9psRw8P1gf9sAt4Yeu1di4ZaDYwKpKqP7zkChJBNeW9DJM4npR1YLnKaBcfiyzLBuQ3B7g",
  "key1": "HVNvvZAhyNuYVAXGndnoZb36r5PeFYzMZ4xYukdD1jAo7xoQsfAuFEQgL1wdbphXyVCqWRDD3mcQxzTHNUm2ujV",
  "key2": "2kvEB7hggJN9CLqLRDzEF6Qkq3PxzTewGxGL4CfAN27W1Tvw1TYrD3X4BgJUVY16Mhka7Qtbv41ekDQEiAbP7FLq",
  "key3": "292uSPKcVAceLdnCdsPGS5UxtmvQfujSTWguBKQsfrYzQjYbNeyrNMmzRiT4xdzr8dHruaN74vDZhpatkrFjCu7W",
  "key4": "hWyw8Xr537aBi94GGP1jBZSjTGQWTckHiPhcaEekdgmNotsQLEKESpz5Z4eZrsEDk4YMyf6yoxsMhNz3vCJuJko",
  "key5": "Nb1AYije4eMKXJhxxnQdqdMQoBdEshJbnunq7ck5kHDS36TEjxNNQdvd1eVXTqDh2T8ts5AfshtHCNoQ8PTvVSS",
  "key6": "5U8pDemh26kWmqCn3pVLiVsjyWz58B5gFKBrekV9TbuP59gs71ijRMA5oto2MMkBgPmeMA3CXKW2gu4Xh46fhhSy",
  "key7": "3cHivKF9wfPQXJz46dXsX1MfvKVvnfNQhuvbguHDTRpiTR5mPtAhNvb2GYsJVQtYTbTfJeF1BTLV1icp5YgsyLnp",
  "key8": "4mtfS3FsY6PWk6X3aFWkxhRSyuy11fLCrRdU21VUB5fzFxRs8CcLVHnYwG3q8KqBPw5Wu2UnzscnwCF5Wy1g473w",
  "key9": "3tnvzqMiwe6ifi9UKQevi3R6j4pX1cQPgDoGN53rP57i9q4vD4yhUiLEjykFjqGr2963zytueoKaSm7YJTeELsrN",
  "key10": "3wAj2tGMYgysBB2EnSyipDZJKcRX7rMuLQTEDoasjZtKAhWeKtYqMz1WhZeeA5suh78KiFyWkYURiBAHWgqPmK8p",
  "key11": "52N5uhFn9brAkkXtpZKzLLYqt9pDw8ZJQsFwSfkej7T6itXCaZGjjdo9LH2gLVk6jqQtbyzZKVdd5NTLggC48rCT",
  "key12": "3YC4UA3JrsLLHpn2vdBKbSjweCZ45YdbtntSuToE7wHurxGkhtkrdFfQGEkbiX2m29gtQceSN4gkZn83wft9MT9h",
  "key13": "kjXU9BR6XLYf11b2UoFdfZAjvrASatLbD8yLzCB9nik5tr5mPuQnfKGT89SUtVp53a8drgxqxURKpKyZbw75gnj",
  "key14": "Usx28GNPWY6dpFtC39q7tJ3AZU8KmL8H2HX29Pk2HzJQmcNYhNWi3tgve82XFXqm9mPk4SYKDgwKYEnfojwwbG1",
  "key15": "46E7wdmfSxys1xYYkeMvYDfWJaG8YRbkbmMRPvDRiss2bfu4EKSgGkqf1PnirCPzhy5CQ9PDidDMmb4zTsqFoLBF",
  "key16": "39gwhw4XESyyFrMCxxbA4a9U1RWk52bcGArugqkDy4YSbgiBakdGgwxRNoSCAT4LQYjNsFeNAWzVGKNXuJFdiJXU",
  "key17": "2e3QmidcYfPmdZUcetGLUMybUvE9uZvZmEq1yWsbsKKpYPuCKqNXha2VakDHdEZ5fZRqfRQ6GZPqBfkcXrSfYZ3u",
  "key18": "432UcPspyjqypLFpNuHU9jpYBn7oN9Q461eZafAR64fVzfgBzXKR5GfCJ6oJ33E8kHzXzckc9MMtVd97JYHyybCU",
  "key19": "5ZC1C8gBbYY5Ded8ERv2PAEWeXUz91bZPxMuQEqGz4LzdYbjzmvdqB194tUgeqW2ikgTx2jEHTRXAKdTSvaptn9e",
  "key20": "28UC8dbeBGWPn7jb8QqDkEVxyYV8uheMc9NEaWA4bQqDD4Qb9Jn8SSPg3fQ1C6og14HfGyDL1ue55Gbt4Q3ypvp9",
  "key21": "4DDLJn9WxsfLUt1zqQhXopkshfQJnrL259jL2gqarBDSSwNaN9fShRSEQUrtQwjCJ4jeuu1SBArme646GaDVoa1k",
  "key22": "2qfpXi46uVua9pKDgetd4VzKboBVz7oh8hYdjw8Ko7eZG5uzu7yFu568nDd2SFazNA44mLML6Aivhg9B4ex4DG4p",
  "key23": "5nmqNKg8DcRkvW5L9fxjXrXcuvemPykQzqYW1mKPdoMWgpkzmmpr3XxZsF3FmK9GEnGJhc5Z4m6HfRbhyJGZo27m",
  "key24": "5UaxeyLHdhuuNUqzZckRrcpH98Z613YopZFuVs7iHLJNKh6JJmXaCsA8QdrZtEa9Q2riXh1FLqQMHnMeebmyKrPL",
  "key25": "4DcKuhXrQXUVAuSXawWYPHz4hqQjpCyBbazkM3PVgZLzjHWTQRE6NhWZjcNZCvdQXWfAztZFLPB2ZBq6HLRRpKU9",
  "key26": "5fpYS632hqdJoJB1SPUUPvyu42uPuxHcu6vZW2VP7wtSYsNjT8TdAeS4VsWCLnoaVepBn793r5VScNmc2zNgcEg9",
  "key27": "21YSkTRs3Hu72Tgot7m5NW78t4FSck3tNeetLN6cLUHFZ4YLWVUyEnGqLfNRHaMV4mVm37QEymjLVXs91FNmspsk",
  "key28": "4uoMEDHy1k4ZC66ZyZPfdBxkUhnQvftr6N8Zv5pPcqM2QvzSKhbtUD5vzYucLjMWszbouXCu3gWdbmuRLeEohiQY",
  "key29": "g53inrTF7czondRNw7fkVKu8996qvmi5NXf66BLvjb9N6bW4TgzCsVV7REik1YAq3smf6gPYHc7Xc43dWXiPvKS",
  "key30": "4F2zNZz1Rm5v6kATeExzergrdRHNdUMSwjUrxhXVRsR7pYLnJVdBFFkf6PxTEbgVVvTu8Z4awgER8n8RNffyajLt",
  "key31": "2m4CYp75fHzauFDZNobYiP9dke6mAULpembf7ZETbPABhS5H6adnDkqu64pX7k6ggv2HCTMH7GNcHrPxsjcYiXgE",
  "key32": "4H2A9kpkEpKpNJx71j4sYy1EPyB7EgDN7nHtYF6Mk9hsk7Ftt85LyUj8pWhXepjdh4LAqNRp74Ec1r5tkjnFXnB",
  "key33": "56ZrmmwWhRj1YwQBjiDARHcVcgJ3vfFm7XZ3AaxgSsfGPR7jBkCYoYAe4Rmi39Vx5uNyCwYJkTTmgQ6g7gZa35Ui",
  "key34": "mdDe25JfJXnjCyXsPbZtwVFyE965HPTroAs7e7TtbctJLSNUf3NBtLCFnSp1kXK9D8zCUoZUDaJxaCMv8nNoiyr",
  "key35": "4cXhFe4tbMMkVK2uo7uPu6tFzZLKTCyf3LD1Ef3tN8HQeDCv787gK49ZcyQFtaeY5jVwkha1pmE7kNt5RMteoVxt"
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
