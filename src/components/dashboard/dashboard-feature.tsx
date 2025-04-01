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
    "4ffwCVZRejxgLbo7WponLHe5owqKxcStq85o965rd1hf8pTqjBbPTMjnNg3SPXvzuyH82KwtDGH1hW59Yh2Ymqzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kH26hPTMiJY5Nx8gZME3FwJmSQihmiWW4mPkFXDk1uSCy38pM8RcjrTxD5QwEVdh2JUCRGpveXmJSoctPeRNWUE",
  "key1": "288Zv6TQ6BBnirC1X4EZwmzc5r78xh7UkBJRKHcAz4SikZyuT4XnBckHDb5f4dvd72TBQLmCtTN3nE9aEE7GRTAQ",
  "key2": "3U5JNQHGGEB5bC1BPt38gwbf3cY5wgWE7oBYn2NM5NMKzfowge6EoJuAn2aeZFRKemuz976Df2eXx7voSXPiw67D",
  "key3": "5e6EJx2sJL9DUzBFSfzd3R2t7aFNsDghZgDmwP5Uu8UqWsV2diXpNgX5rct5g4sxeDeiVJ8pQEkzvUxzbQsUKJ2n",
  "key4": "2NnPgiqjnNi9ZvKSx7wTYHejPGo1wpo85Umjdsq3P2rjrusKreinCX75yDEUvZTMytLHxynkot5YVjJFnebZ2CUX",
  "key5": "35awKe9RgWXRUWRm23M8Av2RUCCBpSEfPzXnhb7zkpiqwF96USBt1y9DiJuUkcRS66o3rmrm3f3CExTRAxzJQK7F",
  "key6": "4ZCNUt8Lwx24fsoMH2uKkt5SHzWDm39fqiqhRLqLdhsAfSaPBkdbfYjmN8b7Fj17792Cv3REb3XqYjigaeRvpHcJ",
  "key7": "3jNqWtGzkJXnaQ7Q7oX5JKLbiCvJ82v3SVegcYUKfbynNYS8uPsdewB4yCdhNmdmcJgRfpAB3Lt1FD8QxMDr73tD",
  "key8": "5754X7hSV5LpRa2tUvFdBqpk2y7BeqBV2cHsn98C1VKHJHsdF2JyHutgbx9gHhh2KgtPBV1C1uWgfw5yU6HkQa4x",
  "key9": "3xSpm93agEHSWMi471WPpUkg6YJx5gChbzTPZPxDUSLm1u25oG7kQz8yX8nyQNmuGP6ckWZ7dSNfAxfezwNyuiAo",
  "key10": "VJmnFibupcKSFmEHDLeXQtUYi9X7j9LFLMynYPhYdQtRz9UMN6wfLeCUAhq7SM4ridbJbgSS2WMP71DcxE88t79",
  "key11": "5fZiCo6drdUaZAWAvZRuy9tybs6PMhqjRrUxitETbkxxfkRjrgi8w1bgJhJ1ps8r5ANRNgUWdzvmYhWffexBDf1T",
  "key12": "42FszTpL9Q7s3H91Xw12eJZkA3gmjjipigKHxWSkcLc3pk6imtsuX48mcJBS1SX7eCz2LRqGSf1rzm5xbJb8HtwE",
  "key13": "bDcizeZ5gM7A2Dh4szzQtKkVqDfBm2ryKqSskuML78LtmjW8knqinY1S5ixNZ5iHPWh5C5LQ7cqxQjSXMA1mJZw",
  "key14": "56TGQc6MqsRzzfzrkGzDWQSkxCvs7gPMAXk6MymHWLYHFcaVgXtTA44xe2qpp1waCggnVswoZP4cZ46j8pbR1FT5",
  "key15": "2cgrtSBJWgbyVWtyoM8AgDTD5PcxeQ9Q1yWt7cuCLqDZFjDZMTiXBNqxSVMzXJfUkPd2crvRBAMquxunNg2bPmCp",
  "key16": "3YX8getny9rxptuSZ1L3hoYs24ocVCdho27jYsV8s2zBVFcfnPLY1ef1jcbLjMcT5T12Rq3mpPdxUUU1vqKsv8Vd",
  "key17": "44Siwpee8rEpenV4VYTqMFX5Hw83AjMc49bNY2WPiCKhAPA4SdjPzXd7F7rwD5pFSJZ1rZz5zEX3rTDJkLstbjgy",
  "key18": "4fotDe4YX7C3ZBgtZuqH3cnt5MPLzJdbmXY28EafiGWvfiiFRrASwst4a9F6LAi3iWiPwKjoStThDKNFG3U1e9JS",
  "key19": "56xjkDombQGQjMaCCN1Uxia6A2TRkFdAp4KJFfiMCTtJhxH17r7Kmy2ptMLhLarWFVQXWwG9jdPiQfHL8ikQcFEM",
  "key20": "3QGmpXPSKPhzhgKFxEfLBAAs9n9hm58rvE1FwwXfC2qNu6cCyvsH7Jk5Zy5JmQ8pQ1fbT6CsuEyL3ScyCrjH81TF",
  "key21": "5z1j2YkTJfNo7rTYqB1MVZdrbQYF7ES4AJMsfxjrHTefZAQhKsjy7YvZ98MC3iKtYijXPKdcZ87Ac9AbJWkUoqXk",
  "key22": "2Gma4WRDGnN46pwDcFWU9LUcdPNx3epZEZX9523r24eQAvh3t7tnAW4ZYDBjCK4nXibFdJnM3EwC8MavYGtvShbR",
  "key23": "4CmLSrABfLUxzkFtkmx8U4UaQ8zSwVijksPySEGXLNeWP8Yahu5SvddvVZvZLSBUo9TtHSXhS7tEuzyyEoUd7K8J",
  "key24": "3m1r1TND7fgif3kLsX6NEk7PLaaEmr1WQKb91QEs2ajUHJ8SVLXJCrDyJJdfoGX8yM4Euoyr38CBYf1MpQWMNvdZ",
  "key25": "4ojZJbZvtA3zAqvi4J4aniGUnuPj2Cn7TXE2C7VzCBfEtewxf2Pj7nKry9XR3xxytdzutrc29wZmQnJkV9QGThtM",
  "key26": "2MAgYPvVMYKePPSLBA9c8UpJJwAgn5zoVLmSGym9hvxsvFQnBFHL7SqyVxntwKucg8zv5hizs51m7t7oKmzY6dF4",
  "key27": "J9mR8vSDK4iQHKWznEKTyAaFR8CEaa7wv9GGJAkeMibk97WSRLEh382otMBfBncKEwgF7ztRUzWTjtsRhgV6ERt",
  "key28": "5XFT9Q2RorTKMAtewPSasFkSkPvDC6WiQGjq5B1X68gPHq2u4dQxwTPffzM7wyu9bmaGp1mdm6haf5GMNaQEhGZU",
  "key29": "5DErmLvBrG1vKSinaryfFHQB9XDg3vvUgA2jAstizzQRMG7ivYKmKQJU8UXyDEpVofyomzgj7WQjddYTV53K96DM",
  "key30": "2vRjLsMcqKZZdYEDKjFXYskihaUjRnMMaqvs2BJFgk33CXn1LBbXVsrgzaqpjC4W7NBiUXbb1BofSj4Wz7Ctzvb2",
  "key31": "5oMPqJsDrpHoBzkLTpCPfj6G1JgoBMnUesh68xwq19KEShK447G4yLE3oMeQMdpqRPSFgUBCFpNCSPHAfQkHvss2",
  "key32": "4Nfj5Et58mwD2broj7g6Uzg1wUzbs64wdax2MioAJo176wFDjNQHwYaqxVbdRT9J1yM1FbRJ5vxNQZiZgkSNuYdf",
  "key33": "2UfLPffhbEYQUx9mvahW41nA2nCJURLyacQ5bmJ57kvBfA2TAMSTEnS9tKgKKirV3P6hur18VDbym29fE6XFDd9N",
  "key34": "5DPFeBtR2psuhBzEMzWpE7crwv2UnxapGhQuwVVnAJj2mRseTndBY4SWhqJH9tLRXcVbg7HtyykQKuqSA1mvQ356",
  "key35": "4np3tD1ZYiCwBJjXA6AsAyCi3rcg4XKDWEUmZDqGPMpU4ejco1WwSfdWpkRTTPtfGdeExZTHEtmpLMLKhFkmqxnz",
  "key36": "5qciKGpp4M7CUD2XthVccLaSeNyKibMYR8LrpUyn9F7GwP1aXy721X1TfF3Nsw8wdEDvY5yHhYtCxZXqYi3qYEEp",
  "key37": "5RvQaBe5x2MWZUeDuftWRW7wCwb65GA2bfagKFtEjTDeaXZun9pHXBiisAuziR397p4xg4SKeR3ntHMJHxJoNgWo",
  "key38": "3N5Hjf6LmQRkNGJBmqVS72DneiJkFdjCdJDxhzcwPStFzDqxfHNyFD83LN8ZojREvb9khqJX9Z67BRWtE3WiyT3z",
  "key39": "2M99HV2btVyMBLqe7VsJJiK9oFdCwpmuYbBLvkkFBENwaMPJMKdDqkCirjXCbZAnQ5RDfL9ANnoST5eLppF44Jem",
  "key40": "64WYNJMWeWTJ29Lr6F2pLcE726z46Q4pTZiuF1vQodQSmX8b9Vr54bcnpqdtXSJt96xaxBDekFtLHQEQzb2PoHW8",
  "key41": "5LAPiQU9yxbfe4c5BMDJJK7RnomenfZc79deiaJ7WL3n8FSRh4gQRTxgkgcLHMrbytefzPGivgT949GrsyBwsC5n",
  "key42": "2cjjhYFdyYGvJa4wqr2ZL2PchMoXikkNSztdVNNZEcRH1p5UXqYVttkW5KLNA9az81fiYjT723jXMyQ77oLF3Ln1",
  "key43": "5Uk6TFyRLisP9EDjK7qFvSh5gWHkdhYpzoxicjcxJeobNZRaFB4Kz2iZN4yc2xZosFLd5sL8XsRxW2bioxazxvik",
  "key44": "2DVTHdWZYyCafmsihnsdgQWpMfBQHywXdAYJZSZENoDcFZpUZEgKcVRjSvQhGRgpZwhapmgXkbpGKZ5Pd2Nu6LEb",
  "key45": "3teY67LsZ9yTNRk62EqVMKbnqsCtvWSSQa9siSTR89rLn7XvLpwtAXNw7vMSc9TNDq361TsikYNXWuGpC2ja7EAP",
  "key46": "5kKoEAkYWQFqgUjVmUJqTpo6wM4FWcCpTtakYwoFTSZnYNWkvaM7z49FWCmqfaBnUrmLThEVrPJJ5E9nWemtYNu7"
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
