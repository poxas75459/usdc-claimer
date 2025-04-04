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
    "3bgeJQ2Eve2A8y7Yi6AT8fGptXpqqrJ2oVRxDdopw6GTrcidKhAhxiVF848ZkxYZ2SV76cRNX6VLDxccFeZpdJ3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Q5psuY4kxGtYzHFwbNCDpWFrrrjtNrYJNi9bpQdmCpM4sCgvkmbQz5VLUpwVSupWV7X6JVCgtBGftzyyvdHw7A",
  "key1": "5DfMd856Akb11XsmHYefRmysPULvJXeJixvJaiAjDRYtuXWcpj85MiwiRwgckBzZsQyFrai2rfGbkebv7842NaiS",
  "key2": "3wLs6U2rPERzQHUE8WeMjnk5r7DsnuovANCFMLpXaC9WHB5ACa7pHbMMot92HhGjQmKzhJ2i4BhthA1EQanTPdcu",
  "key3": "3qS8ZU2vjrBU5kcVaAun8g5icnAFMXoRwQ4b1SrDAaA5NApG8kAv7fufuENEKtWx97YczErNMPRYCbkR8bosYuEz",
  "key4": "5niXTFYiJHXVwyPAbtEpURV2CU4M2mvhwUWCqgo8QpHdZLMgdkSNtZUgzgdpXmfAPGf5TWtN8qqHF9x2AozfUVH8",
  "key5": "4NnKSEdvHPEWcpQCHmUSjGMTEyEaANJkruSE2w6xzyN7Akt4R9UktU4RUgw9NGm5nAmspRhXx2xphgiyzhDitZHk",
  "key6": "5RgA7obqX9UiZntBGPa2zWfTQE2PCotxZku9siV3demPSegkLA55DFCD9SeCJiQC8r9bMTU2cKVapaqAezc2nyct",
  "key7": "4iDC676Zun8ruufFT6iAZsRP3AEzjXjAqk9t1BuJdLiRWxj26PeZsCP3PVuoV8W9Vq9YQAA2VZwpqTPF1Kfps3nf",
  "key8": "xhXLQozUzbsDTa32yrpdyvMxGj45zxQJuW693gVN7rSYF5kFctXk5N6QKRZoRWFcLWBjnfooyFuNdu5vr6gqNFA",
  "key9": "58mG4Sz2YcZZJhi1h81cYjWEMGfaSRRy9zsVptC4CEBNkLuRqdocYRVbQJTA98ByFGQSFyiMSKGnGHpe2dyabdUm",
  "key10": "3gz9UzpxbbUjjHFpQrbfExKi7ZXRMdB5D3tkoogdxfx4Z5sddTMqFT8rMtcBKKJAaACMndEeVAXMAhrsQGn6Td3z",
  "key11": "YvL4ugmbaGgVR8scKYbn13xErdMbW2qaKyDCnLdTzPvfS2KN29sA8grF2EKtWupBy2G91m4noN33yNSXBgpz2nE",
  "key12": "4R8PcYFHgeSUoDPwmvztneyzFBKSgQF4SmCxE3UNwWpRkGFdwV216RbFmz5EXohz1w1VTzhz1BfX6juoTQ7upyip",
  "key13": "3AdL67yKk3jAjYh7Q5hLRtvuigCwtWuexUH2GCdWPoYpqcN3NpTqTsjwqCUXgNf3TKgFeUVTjASh2RK3Jmq6yzeh",
  "key14": "5W6N31sxaVXeJqse1Tq1MZLAfJBu2h9kVvkZxzia3VRsoqjtvDRSukwjLnnQtAhb52DhgoZF5TpzqDo26qA53W4J",
  "key15": "5Ub5zYw95Z6YZv5QPoNwZDyDeg4Dkhb1oVZ1fErkdNLPBcBy7qACuLd7cShShtuEAQttsKxaCvBSEJibnJ2b7H37",
  "key16": "W5sAipVewCH9afXMXWBXGUdDjrHydn73Jpu3ivXZLJWY5S36pSmmCfGVc14vqMaa4L6qc8vQ9DPR1GnWeoEfcJC",
  "key17": "3eT5Yq3ZFofvVAn3uwcPXr77WYFcKdkiiBx6t3zVYcsqyTpdZ917YSbPcK1yUx6VoeRbDZ5ApKhtJVUSQ7RgHDYk",
  "key18": "4rftphymqXBc3Ww5FrvngjGFtqEeCLMt6bbCrC44EhVQiSJwxtptyJD5DiUHrRvQxHN46RFp7aB6H8Mcqo37qyGa",
  "key19": "5pGZHYjc2vdotZvDLeT5rVLJqJzQJq7Aae4EFh9opeT1jqdfwe4mDv4To4NSdegjmoBiEhoatGu9EMz2f3e1h6po",
  "key20": "5K7goog1E5jYqYLoJTxXVjtgGmxCEFGsM1C3ArUJaJ39esJTuvAVudCAWqDDX3n3zbhAjLR2zWxn63JqUnHpppg2",
  "key21": "417Bn9CWXXvWUb494DSyvYGXpF3qGAW4uuVtHomEuz8p159j45EujkbsojnE6KuCwpMeC4PJWZtWiKLwmpUs6sgC",
  "key22": "5kx8ZZ7BK8kSjvh9HRQEaxrtRX5xN7AJMQWie3ESTdNAzU6rBzibpvy2Jq1FVnR1SCFKtgZe3qXvDoXwprhxPtey",
  "key23": "5oJqXnLrd4h8mtx13zFdu958PCPGTmaufvcRdEeoqgEZYAK1w6uuwSuEZiHLo11u1YQoHSQ3ZMd1LGMoThZjxvxs",
  "key24": "4mL3pGZgRRpwDanUSsyfcL2kshzYznCPtbgEJJWYrXb3mrMCxuedL7aXbix6wULEaTa8Va62shvA39LUg7tWA5M9",
  "key25": "1Qh5jK3TvteSS1EaAeiac2mYMXFxNGoHyeTWjjLGf5RXU9kbtBzK1z8yvixBTFyAisiNE6E27dbn6XUTTNsGAP1",
  "key26": "5FnafophSbEo9cwid59bphULKpEyjhey9AB9ifmNNwpiVrBDzf2rWXSAtfyrgCh4PqrYZQyFwUnc7mrrAek5UZ6C",
  "key27": "29rdRvhqHyemMmnS3tSTyziF1iz487EmtUcR3bx3Y2vUtdssAWAT9xHqApxKX9pJzagUmxQjrunxctS1ZtLZcUyc",
  "key28": "3S8X6h239phDE4HatzrnpiwR25bY4aVbkUAuETuPExL2qCiBkd34mv3Nzy5aTYxuaAgeEGNbreyBfV7FRvfsQd3c",
  "key29": "28pAvoDYGt8UyU5fBcpjHdTj9YRf34nougEcB8d6GmU4u4EK2HWwf4Ddc3bqr7sgvoy7RUR3tbP33XxztGanz5H1",
  "key30": "42tHtQeizzENbfnLDh3EEYreDNsxRzTvALDcz32VwZpSz3sHptey5cC6JfNaJTCix6NRMXwP26iEWv5EpwEmY16c",
  "key31": "QRe3pRHBy2WTAGPWjgj6jNDGt28xdenRwcG2TEbDoS7phPMuXguJ1yXkSWxWnx9osx5ULae8qL6u56JqkSgXYW4",
  "key32": "4Vn37cQfz5qJfj4j1MkYFPoxu8kiNgEBhV6BtZQcepDcyMfW41PP5AW3AsMHhREFfCGqeFQ2A6cE4BXFB1DsLGF8",
  "key33": "5iNc9nU8XJeqgN6bsKRsDvpbxQZdi1poUSKCvA1d7V5iJ1NiYt8wuvmPnK78mdukTGJLjJDbwQfmb2CMuFVGptNn",
  "key34": "HjoBdaksEKX3DEwJXZ4zwdGn5LRkpKnZhQKwLGJPX7aQHHdfqyax5oM967KwQ3JuUgH55xeitJ4NbniL6ZjfGGs",
  "key35": "4Az68rqFF4EV1GENL59QhLrFz2nzezTvZdcdK2KBXHUGTvC4Q8K7311BgpWd7ijFnHBzbPg7F6FAbmAUDuQk1ZtF",
  "key36": "67JKjviCfFDjZ6tiSCqUBfpgY4PL45ceqHxaWdw2LDugX9oog9YLC7MrcGWYt5C4fdxfxoTE3Ub45TNCkxRBeCRX",
  "key37": "U5MD4JfTopxCPxiSXw3Ty5iWQmJ3P2ZT7KpmKJNN9GjouxTi7HAC6KFC85ZcunJXYSwqT3QGLHyxBvs9S5MuchF",
  "key38": "2qxePGnqLtXrWzL2DPCMeXP123JzqwtgT3KpcWBRHbbAgqSNZ2YjHC2bHsFGSdeR9xfLAmvAjdsJzsQHNjkUemEF",
  "key39": "4gHjbdFAiW4BzSJbvDXHreYNHT5bxvXJy3QSmcoF7ZycFF2Gw7UDFjfJm8tAA5XgnGYb5WRRwNajY3MNsySVjneL",
  "key40": "4eMwEY8ttSiFJntVM2a5XT17nVPFSnKE8gVxA3CkuTi7TmKDZ7g7t3faii2Ubyec5hpxG5QtqKXQJdyQC5eidaq",
  "key41": "2wNi1JzfLuDNrCw8QCAtvEeeBE5X8EaSf4NJLzycjSm3gX2mMxSFheSajVF32bRDDTpGByqcRQcnH5nQ6F5SaVUW",
  "key42": "4LMvFKr5M19Sf1LzErWrUgz4D296dhpwjQDd4uq3RCcaU7JzqFhpjvKG2D2Tzy4ywPsCefvJHNWqUtumJPyjjz5d"
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
