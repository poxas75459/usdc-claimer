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
    "3eixybvwQQJMTUnZmsbcZy6avjdB38cT6Bgvd1BxjhYsw2tQ9NLeDhyBQk61qfAkNpzSjTM8qvK8MuoPoymr7TN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gpq7vtXiw6pE4vR3Xib4Sw57sJ3aHaX45mEBMeF8sfkNo1WSYa9xoCNP1mcxVD5JzEXEnJbPLej1dEVbzKVpKwt",
  "key1": "5sJgiTL5RP6XYNtrJuqHYiaa93ehAxHMmN53YfNxY2vSkadEZPXD14cwZ1cK7adFqWmHhqt8VveyPg9Th2PeM3nZ",
  "key2": "3qea9XFzabQQo1Hzs1sBEGkrrYKPkaDgaVzcfoHYbLqkn3tHqNx2GiycP9su32g1TxpjvuDhospWh9RdqeN3FXbs",
  "key3": "43gyHYCACwmY1Za1odoXgXXq1baZDSfyiLtCjkdKXbiYB9vkvcn1jMn1pjhLKDENaGnNmzD87Pcic1eYUd7Ruh2R",
  "key4": "2NjCtDUZFgDjHhvuTu91NH9btCZF1mvFsTS7puDd47Tbnzhty8AKmKT8Zw8Lzp4mUhBXp4xXTxHfwoRa9Ehk72i3",
  "key5": "2rCQgiKFu5AERNWqpAnS1Wty7tBpfMuMZv2t1Mnc1KX8vCkEsFEXVwohSf3oDnaKSytfczB4A2a7HaY4CYv2M7GT",
  "key6": "2Z2ianEyEd2oKXfSf5eKyawgdyAM8AZ7K9oDABfxPEmwbGWaC7MZf3Afc6bXsnArrjiipdWEYSdq3ELsjAJSayif",
  "key7": "2coL2PYHihJs7h8RrxJtgEQP38sykqo9Pbe3WuZgq2ZNSqi571z5HWv4LQCiLk5ijaqZ6GDYsAB8ZjNnKH12adh1",
  "key8": "5CrPf6XZr7bX1sBAU5JBZyLvqxHuDfJn1rVNod7o5E5ZiKWdYpcVuXey29Gov3ZyzfXdt3WHba8nay5gMo1GSxFB",
  "key9": "4NXWMVpAaKWusmhKCqfdpRYEHcAoANRz8wf9BMPPnvPVbesS4HeATPfiHvrXP1sc2PnrXmgimsAVUBTJpGy837dK",
  "key10": "2eCnAMECuLQbea6W4EQqzajZDV5gCNrRD716cYGCJYPJwNBnkbmECAXiU25sHj2beg8MFcfhbSMcGFZ69kT7JpJv",
  "key11": "53zWi52ioKjrXqQ1PAAdoDUvqYGaUYSWaLUaGKE6MWAkrkiW3MxL8xUKpd4Yg4WHg6EQtQbWQdtyxbPR3mk8JPJh",
  "key12": "5Fu5fqZ1G2Q5WBXFHLweTKX9VZ81K4C2DMw1pNYVh5iHvrbMNXtyvgbmqZw4nsKnsSTxdwG6ZjqfyJFzzqY5Np4h",
  "key13": "4anWhvkGdjw5DUStXhFAYu2ZZdNyjyn4N5y6sFvAdcsr7ToBFpPF46cYWf4BGkfuYijcjAxZGME8XFmb1Tibba1m",
  "key14": "3jSTNaFXykCiXSVVGF1FewHu8DV77C2kUvZ13yX3iL5DJ73SMPDM6BqutZFB52P9r4xTUmmSRZXqNDng8aqrEhFZ",
  "key15": "2F3jvgU1LHYtNpZEn6SwcmiDSoyZTKdTCgyZ6BiuJgcm8MCHf5Crkf4DJt6vHhaQAV7PHCcSSAhEtCNJzDkMTvWb",
  "key16": "3N8Dq28Ap6B4aHYdTFWMewnPapZ9k3zpST9paxfbCWA76TbibJnAv88aGSEsCcufZMDVAPWzMM44sZUk6dNXaqX6",
  "key17": "3uWQ81ye1t1DJvQmcNDqMLVcpzYBjRF4RjdUZUAjTpSGb4CKQTHjKJzQNyFeK7pw3hd1HkiMKaeV5snoiJBXyfRJ",
  "key18": "51XPaBtny6wmCeWxxw83WbLbJrwQp6A78NGbRv8tETXShBda2Womi3CTcw2g6fACQJSPYFZP1Xokb7t4kR6sthVz",
  "key19": "42RgtQPHwBkvwTubP9fdxJs4TXZievCvc7Ze3NTkKubiA4Jj7ddoMzh82r9by2rYc5sHz8ZiEt9ujcTm6DCUF7et",
  "key20": "5UEcoJEDLUe8MjVPQfi5VAXtS7RAThA2h8RSH76FdoWJmGVGTEVz92M8e8qHvRAgJwnUjoXFwv2FcRwjrL9neywN",
  "key21": "4sfzy14nQw1FRT9HExkSicabb3sPus5cYNtEihqXNmWLxLQj2Hu56QakZ3yFtffESWxmhzhKQhXqbHcLFf7prp3q",
  "key22": "4vdaRXiTxtztKEknMkjYCwH2uTSGw8XKL54Xd7nKeY9gv7g3thYx4bA4TF6fe8Hohk2bK7Q28xNAhM51MhK4xqji",
  "key23": "Yothm7XvnvLgDj5PnUT8NBV5Mx7mqyts3YsbKJvbtxiTjC3BMHC9oftpKyCjRNx6Z5SXeJ52P2vPjnkmHczQPg4",
  "key24": "2TGTTiU1DCAQoC1PGaZYpZBFhXk3Pfd7WWMmZ6j4nayJ7zbbb7W9JphbNYZgNgq6BuvEQNfB9wAovgEEfRQK5qXQ",
  "key25": "7jAjMRRdhR1uC9RASwVMQ67NHUswcyrWWYQLtiNp51qmW9HeKxjWvPQiRrkYWzGbVwvrVgndHuisTNGD7oYuVwv",
  "key26": "56Wn6JXuZMkCC8PzNYcUfLyHcpf3RFCLXoDFtBwAJq7fjW9ZNHws6V2re3eQEspNZ35Us9XHQqyNToiomc35TyKE",
  "key27": "5xhHMgsPEjzXk7hJ1xrS4RGCVDXZAhKWPobisHjehvWHWcRQiiZgq36AEDXeXvvhxdCmYhRdvsr9bLVay3T9sev3",
  "key28": "4XxcwLsEse5AqRYwPyfBLoxNGC4ZZCFQYAfWAgLwD12Jftoe72WvZgwJSJdq9EZE1NFVp9ahBFF2pCXUpKoqn1fB",
  "key29": "3QuqqBZc9Yeb7sU1zHcYHJ2WfhyuxTkj53SpHuuTqp3wqND3UuV3Gmi9Yh8cpRwbLeqCPDtsKuWRENLstc9fVHzJ",
  "key30": "2HeRoAYPcp2wiXLanFQtGCgVW8FZTRymAn82Zn6ZdkrU4Pj87jg3SV3UpNxr7XBCgPSv3Nd8L5eTAKeoXui16gbW",
  "key31": "3vLRwxUj67AjCfyXkk9H52fdiwiEApn3J1HRQha2fRSbvJsDCrFfETw3gG6w2UoU7Ps9hYdPBXUwDpmfcfWqLbTK",
  "key32": "5MEEqSXQWHC3QPUjxTZfjQq5HWGmrX9SXNqThR9ANJk2vQNSSRbXzMRLS4K2qcJ4LoiouUP5dtR7ytdDEjqY78GA",
  "key33": "5xSu8mhaBy1vgGxLWVg6s3rBG4Kmngc9iNi6otVCqZyXpPJdfdskn2WdybJd3vjaphPV8gJQ6c38cG92dBcNdvww",
  "key34": "ZZeKkKsvMHiVEdaMoyarxKpXDpUqEbS4SSFTmv2pbjwgBp5WUJTWfrAKTyF3tjshnBpN3ELRBXKJBLHGMBHEQu7",
  "key35": "25JhwARWPtw8BDPqETDjfXKsecL3tbyyUfT8pThX3abN6p8xXJSrpFxH99nHkTkjcmBXiVcZKgdfSLhyUsfMqky7",
  "key36": "drPcSYeihebYRT2zL2YxqzQK3h1yB79mguPo3TLQrDY9BtjTM9FtTLqv3hxZGJEHs7ovohhDKr1xKdfBpFxtu8A",
  "key37": "2mBLK9dkP4M9NuowMgHS4i6w7n7wYruD6wB9AqxfcHDBj527gpNhVvq2Ve5kRH1PE6spBkDXzCBLDjJZ2WN8wGCp",
  "key38": "4kKvBco5nJWRspDs6cG9qfy2ojUs5nPwfPjKQ2o5NqtpzZ5a2MaXfZFtQCLA915QxkQ1zwTqnf2zT9MHK7csMSrs",
  "key39": "3CG1uSZuT1LLL8HzduNN8DYZJeHcsKruf8KEoeE826PQoEZKirG1p34nBig9BQYAPdnbr9zHNdmqzbMAH3c9D7J2",
  "key40": "2RCcJpKGovH4nqua8SohgGTnKGTqrpLAWd2hERLbYxzNPoMgrE2Zi4oVgs13EGEK1xXzZ3VULXQFxoggsn8NVeWR"
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
