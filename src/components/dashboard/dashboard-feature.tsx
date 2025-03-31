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
    "3yB1SXPkxoDcxKyAAiYsKrficbkKZUnvaN1M17UM4m7HnJKwLvvgmi98P4qwhRPSJh5pVWBfgj6zBjNWppS3EM3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cw1Bdh4q1qLPXHhmby2LTzwmD2V8G4sBRjk1VPBC1x2A4iKtDZVHz9jHPiqsHuy9ofUrgJXsgbp3CoFGCthkyxC",
  "key1": "4v1b3RmMLas5A9EHdbF5i1QqCTfnGBsGdQcAfSM2zDK71DM3v1ty4Jhqspud6tqCWnokL8HRRQawbB4R8PcFQbXP",
  "key2": "5QSheq8rhVBXHDoxJ4WdTYejFNCkyA4ac6gjEpGVomni6yiwUWvoYE3ykXvoeSG2g1eEtx7n6iDXw6vrhEL45QCm",
  "key3": "Ee8JkQ3o77g6qRJMmqAqP9BNSAdKKCvLLjUeVtjCAkuGooMu6xV2oRuHATcSkETB2yMBmogqeHxyFfo1fnFTGL5",
  "key4": "4GoMwsjxk7co2gK4RRLhoq72y5igeiLPp9L8RbWzbevJbVEackFuQWDSEG6BbRZvSwzngygQxYLMKHTxzGNVxJBy",
  "key5": "5vot7vX6TUsZTfX2XRKeHR28GxnnWY5iPxCgQV84PvqY6ZSB1eU2yJtQjEdsx97EMY2VFitPLcEJ2RJWwD5NbVb2",
  "key6": "58ZL54zDNWHee4mPzeB4tJNSDwtJby6ycZWjVNgi9C9zgBWT4uv5AD6jXXjhyYrJhUipQbcAm4u2NZDibybrfnjQ",
  "key7": "26A3jaLPp8bpDyCSF3ozWiAz9pHeAkvFDKk9nyy6p4xjTaGRcGTLr8Q6QXSKidwVs8yzVQ9yyiT3F8KnDNzgf6iE",
  "key8": "4yt1AXdHuCMad4vMMCaj2WrTFDE5b9XFwo1UmNv9HRDV9V2r5zM9gom8AvD2tftgTAexsAEoSouaKu3JHwJd2oy",
  "key9": "2HL69LYi8gsV5rSw4bE7JXC79uh5Dg57yS5hVkTeMiek4eWcS5eJnadnn9jVEactsmQ1EAg7Xx5KDD2dnVtVJT9x",
  "key10": "9Qno1YsTz4aZze7tfzUD2aDUce1Fv4gE9YcEAxKPqejQZk9qkGqBwuXd4xy7dZPfhQyb7TtfxsJP38hUEnLueLp",
  "key11": "mmX6iCB1QmUpeZcEco7XHjN1BpL4wW7aq7Nds7LiZBMxGK5w1qhKpDviSiXSdKfuZTZg1rAHCz8BwkvJtq14MGg",
  "key12": "4FCG7p82CyxD5ZumrN1QYYcsNCpsDCHfXr2YdYwtx9nJAeDoNsRt3ytbUNWzN3NmKNoFBbYkRj8wCeUjzeRMyZLk",
  "key13": "AoPHm1ZETEkAbR3BJFJ2mhwbFRktpYgnvhFx6fBJEhLGhaVEQ3Jzr3qLHhnhEaMAjgaRHyJQBQoxjD3T7VU9Qcs",
  "key14": "2z6YwJT1EzwdFnVkb2b5E46RbutrvMff2EcpNp1qnRh2Ah6QxRUJr7AfzBS6Mnu3N5qzPyLaJiow6ar7Ryrs1Hvb",
  "key15": "2TPkJzx5c8MDnbRGj6XJc18rpYnmbv9aBmPq3jtHei2mofjM22bw8qS9McfHaPxoUw2kMektXFMgpfTMegR9nVA3",
  "key16": "2E3mDNKWV56zeYLChLUDeNFhe56qMTtWrinNuJZXp1nQM1PB5eFCNGnvtc1QcTSiFv54SN1ZFmD4HiZGSqX14C3k",
  "key17": "avY7jBwtdqi398v72g6euJtEchT3nSRqXez5dHycsiFHwxaJNry4CPXPFB6HP2bz7BW6yHrC2yfsSBeGTEVxvH5",
  "key18": "4xa2ebNVZGQ4Aq8Mhwps8EATCZuuwXUgwoP55j9FkNauw1brQvGvQWwya3ifZYG1xbJwSFvn9q7oTZYHxt3yod7D",
  "key19": "51rWijvsTeyktm8aLrkdA9UtioW7nBMmQsP2Ev2sPhZXmi7HyTiMqgaLBEyWmoLz8dPoMa8X9KF5Um4ANvyCZSXC",
  "key20": "8RXV8ZVLJjvNSiN1Lgusdb71qfpBhfLeQ1SpLuDny6QBQhWrhpRDV3f1LPmrzYvMNSLzFFamL47UGXLa7iSRqcG",
  "key21": "dfVoNA7GWTGwiheqUgPESBVuKX7awFHVqF8CvdkV1y6yKM56SNnRQWwWyZDepZ2gYdRsoH2EA614RFA5ugonoZ5",
  "key22": "2va9TKRXJmzgTjUpCQGghdBcDAfYmgkkaSiouSwemAYTXmT1XyDShQ8KGSny7LXwBU2K1mbuE9Gtf8rcRBmYaGSg",
  "key23": "349d8tmvTeciFmRbg2YnVbRvXmYdnPQuv9AzzoFh1dpkvY1tjG8gN2zbbyYf15EPY6N1G4xTzu4J5LHHL2MHjwes",
  "key24": "2U2jLdjKt627Wf77xmjwSNCCK7xgGwj4q3nCtHxuCm6cWs76YAiCs497T2WRwvx3JesAQJTv1ZYyXrtRL3fnCt4e",
  "key25": "62fZHDNJT7FPCmKXEEiNu1U7dRSQzRpWYAq5nmQowwp1cUqRLmVpfxWu8aRdgR5fxvcBC3F15jHmNEyS6oE2kgF5",
  "key26": "4yFcQcmpxXFbNH5CJ2sYiA1SyQChez1QdYFumefLtN48xEvfcTtDRAyCYpf1do8phxA3YK7cUn1mN9eBm131Zr7y",
  "key27": "SWwZk6sFU1pPMDYxBwEQZHk2Zs8g4hwZYW39GE3nqyhubksGCoL2kgprsppAxCjuBrRkiUsdzgz88rrDxXrNSAS",
  "key28": "4YWGeosSY1m3n54kpErU78hqFjycsAiPN8PfWjQoRJDq1dgHcY8pN8dry2Li3nFDRbDPVni1t4R8LV7v1votxb9C",
  "key29": "2x8jBz7VthRTdx8dbnAFET12WyCqWeCpv2NQJ2fFxLvnCmcDTfypKXMNWuWSLX5u5osy1a8LZuLkW5CsLNbBx1u9",
  "key30": "4pN8w6utAV5SwdygBRLLYvksp9W7SAtAvYvQQmkdVEVT73KSCzE5WXh7KV5nqtmsbYLdujDwsxrdsqPVn9kdbXaS",
  "key31": "5GS8nYnC4EBFKbmv3c23Q7uZf2jfcJ1tvi1LWv5gEtRfZ49fYK24a3PJcXU8noYpGN7h1xQaD62UHo7L39ZVpJV9",
  "key32": "5Ni7t3PuhT4Jdast7RrEUK3VrCC2wr6rry9RjaNi3yj58kBihgBG9HqTe26VALY1pfZ9FhL3kUBUBR7B4FDUVCtV",
  "key33": "2xt5YVNK3Y9Etngsoke3vqkpTMEr9nrGhuDSXGjsDtjep6jQDsuHV1mm6q7Gi6Rp8pq2U6zor1N8qCYtMAE5w6dU",
  "key34": "2YUQC2wwAgwgiPm2hxXDboL5XHQ5mFNiU2deNnemERaihEciSNSKerKJCpDjwk5P1JQvYZhTrPY9kkenrApzCDNi",
  "key35": "5HUZkxitoEJtCCKAPS53tMxbFhqfDyHox7H7t1Q3g6QsLstF2WgCtRt5Ve6vEG1vVGZVvEjNEKBDj8phyBK1XmPt"
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
