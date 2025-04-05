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
    "5ctgFd5G1Xxr5rAUUrYiiKCvenTDZDmjLapbp6kD6SackK9zakPsLjyVLyPDfTJq8VRbJj3QDcMHbhUeLNLha7Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTDEPwPx4wZeGNh6Vnf2XJ7ysN71L5uTQut5uVjFQnZoAkLqjnvrWG2gouDqNdGR36pFDdXfypp3uuJ19sJEZqH",
  "key1": "3i9NbKxTtPuY5d4FNeVJS7r7AgQr6EigpiJwEJ6MAT6psv1DwDtJ1x36YLnPgTCYre7HXU6nHqrn5PPx3vLnciGW",
  "key2": "2BLbxcHMj13cHxT98YonStimHF7Fi99DVaxDpnfQ9Ho6nsqA8KBnFB1mnYhYxC41e8qEYJEYPPditu14LKiohXhu",
  "key3": "3DNXiADT2Bk7mAyRp3WqDQMjA1sXZYZQjsKPiN9fPQSYN12Kj3eLnAwjDxRmMC3sS76Nz8QLqibMrKLRwLWaP6Kr",
  "key4": "5eKv5Puo7zoAEpCQnPH9LQaVGRYrbRJTBiV9iYqQmGfReNupCiuA4r1grXaV8r2ix82o4oT3JMg5c15NhHhhFeYZ",
  "key5": "9Q1NF2FvhYYeDqiyt6gFxupwgKnSFw791JHdQbpjRZaqx8zHxb8VhnZnxxxtpwc84rqBdcSoZG6hhjCyNawUh7T",
  "key6": "Qa2rkcsDkUqmY5HqsSJTuskPu2DbG29dH3yDaJbVMeXEzSFSfUsXWzWARaV5NnhFfrzLQZGmJeAwDM9YS6XxFns",
  "key7": "4PCMiT7RHRmF6sk9GP8YLkghnquCcHzV8SvxW7mpEGrd1uiNYPHQSrqzVeDm9MNH5qVk4M9HQtMLybHnsUFqDMhS",
  "key8": "4DVLhShypLpUWonhZ5oXctTGD88m4uK3gZA6pPF4ttWng5nAZTWJd6nUxLrhkFBMbo3dYLUXymWJ6y9svUABmhrV",
  "key9": "5kA2XSbBt2ZqYywSQ7AX9xLzX4psdi3ceVrmzb2eBtC8ZBYTjp9YTZKRa934J4zaCCUsZXJuxR9bZzM4HNBPJXyE",
  "key10": "G7zLHYYN1rBAf5j4V2LRBn7ZywVMoLVygs6Xpwq7srcBrUZhpFMba5yzAktoYZ9HYLWPuTrg2H4kAmVrvdstf5k",
  "key11": "2NdHqawmWp9DShzivAeioJ8bFWHLsUpSLPyF75M76zWyWm3rbBvnNRospNiTeCXhbmr7mTJaRm2CsAub6MtSPMeU",
  "key12": "2UuZLXjVDtc7WRfFx9WBCjcQXnc4DuHz4dnfaGSV87oTcbEkyWEwpNyNEcLKK1FbVekrbqZnL3yfhSrVZqpq2DJw",
  "key13": "4hJQqcoyb2pqaDtZ5D8Rioqsv1vfV2p9koWVL34cvpa3Q7AkwPagy6vkxkw1KZBAu4tY4HorbfRPjRUjdSWaSBJq",
  "key14": "5TUG4c8uhM8eiq5JdGWJ5XGshrmJ4TuSSZqHLj686Wpqs7E4gij5BNtUmXqN9xzmsDP1HCAG68hwfF5hLCNP9UuT",
  "key15": "29sb9D5DaUAZkE9R4sRHqDDMLM2J5yin98KKChwzWy9eR6AbnzqchicU3PFubVxUeHoTg3taTLRGmobCXmXh8Uta",
  "key16": "3erBSfKVybJoMeU6oUDXegasBPLrv6vWqTv9C17CpSN8VHQs5qS59dGbB7yDnJkxxXeNGUdvJfi5T1MPHWTbrqtZ",
  "key17": "4j2ZZpNRr1aEE3J6JYbezyzvhaGtsuCdyL1ZjZTJUbKQFx4FQrF83GyCHFkBsiBEDi5ahkrtpyGR149MV4PpPkCW",
  "key18": "5PPU1dM5kb45wVP53s6B16SJFuVzZ6J9gZSXbrGrabiPsAFG7h6FYQRm4ej4x3TmyWuQDCqjaM3qZZqADxXWHHcx",
  "key19": "3LFPvDvJRRvX22dtgFgn4swkRQsDqDxDFL9zmvxanc9qqPyjH8pMygXdbt7kzDEeGiXAetdiaqpgF2xWztVh87Qg",
  "key20": "3sYmeiPUUDM4oDhEZzQEbKH6t277vWUiUznbRgRQbioccBmLtr6iRWoasVxW9woaoPSp5hBz4DCpDhWFd6T6qaAy",
  "key21": "21eg5tR5oG1fHSPWrUQ36ewTzCQbX8BLYSmtvhUv1yGg7pNdKCbRbJtEHDuNe4Rtec4dx2K7RQTtiehNSVrRxEt2",
  "key22": "5wiMp2C4LJijuogME9G6cs9CBLW4Fsj1r7EpLk2FqvEu2AeKj8sYMr9TnX2uctFYwPAUWrtE4C3vRH9uVFziS6eN",
  "key23": "22VLHLS6z52kb1GgmgF2yikRkGZkWWBQF4np6YuovMhq8AbMandLTT3hU9H712BwXwbsHqUoPYH1dfXrpAWCHgRR",
  "key24": "2HeFabe4CnjahQo2MvDsoXq5QT85x9DGtykQxvpu6yc5y8wUCVYhBARVpwXeyZqcxCq28bt1YHiivFxHvaqVGVQj",
  "key25": "2Ltsi6kCy8YbyCouveBnAc1jZ6oXBe58SH4gz4inAomQHKBkrWkJxWs9pnthTkzh1WjzgdxqZCyUihWK3WfXiJw6",
  "key26": "4EnmFRKynZFYDN1FFEv5JgdEs2RSvfRQrXMvbS2aumdjRU1NcWiHP6TfvJgZjHW6Tx9oNVkZVvYRBW8unhXJqBtk",
  "key27": "3vTcTwPPxf9iaQ7LoicNRDw52b4d3JBkWkg7kh7P52Gp1fEm7t3Yee7KBSm7tXaqzFnRodBQBeE7m6ccvpL1uR52",
  "key28": "aspwH2N6wRDGsLKGQXXqQTQcrsAPggpXH6w8S4feyLB3kYTeRKtpGrUrxXfk2JoddSQ4BEvpdqFqTsdDPBJseq7",
  "key29": "5NyvhJmHvoA6LkxQz9eBYxPjfibALw8RRP8wKSRwHXCBTNtG7KMBMubkS2eYL1RLy4zCv2QRPJAFPdBs96oYgTs7",
  "key30": "2CeHPqSMdjNsLB7vTxk75YNt5Wf5BvLiWxE8tGdxuZQAEnCu6gWvz6jXVvkWqmwS9eAdVsYF1CB2R2rUHe9ggsGh",
  "key31": "3D5Sefs2dx2uZxojK1tcW3nNKy44KhJG5ZEJispP2rrm2eo8qVcna5S6M2at2cjQK24Hsv5gJfY4gfJxeZqF8jN4",
  "key32": "5wYBvgH7RibSP6vDn8vEfixtJaprXSg2TDBtbRm9t8Fmbd4hVafvcmHcttmrnfCLHJnJsJmTvj2sbooKZQUGYTE7",
  "key33": "RVo8o5orFDX3DZ6hv4yCEvZdtYALutVNFf6TkUeS3x57yEZ3wMDmmEreKntQFvGN1EEdMhnxqgdMKAve7GuoSr2",
  "key34": "55dhuvzr2PvM5UwAYE9BzocHKsxdocFNDhtSJpsizSd5ydDj58Lic4XwTvpp1ophjdXZ191tmvZ1HQd8Ap1KugLh",
  "key35": "NfBTErRH8o1unaLhNCgMTMscLFt1Lusr7sboee9ReNqhaj89YrrNnzxw6Gyt8fptYKgguD6hZG5xapEFyd3Tnmc",
  "key36": "WcxC9U7ZQtKgeBEJeB9Pcxz8Ws8oYDnYCGEhDSswiAhoEjuVW2nCsvgAACXFeXnkEbSUEjyadqjUCaFn6KmMBfz",
  "key37": "3YkPbyqHcQgZECcE6Ss4s3eGWYtq8VyYJvinncqbq1n6AKQAZJb5EoZw7ZF2UEJriLG66nbqc4vWfspZud3EzoY6",
  "key38": "2vLEP2wWARrdcE8rVqAXPMViXHNbyd947mpm8v5wLBDQajZs2T3emirvtfYRgT6784Cx2WbL4Gq9D5DM1F375BTH",
  "key39": "4AFfzbtK4HVokKmYmT8fJofZAFrWQLc9sE8PY72XHjEN6Kn3p3eSkokasfS4MHJqwTSBUWkPGVwNFQJAs2yCVsKv",
  "key40": "4uAGCXHMHetRcHBbAFriSKxLunTwfujy9yvtFKN88RSE1PkQg9Bz2asgkVNWeR8RVPf43TEwGz4rW3JL6WZtJ9dy"
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
