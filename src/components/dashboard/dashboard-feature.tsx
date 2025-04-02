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
    "2MTwWuWWBNcuLyFpMv1PaDZzpu2tRs6BhiK4V9WpGXBq3jVq4GXKD8nGk383HYDwApPSzZ9JiLLdwmNbLfpT83jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTLG9dyboehos1ZEfw66GV8XqWWUGiDJN1nQhqEuUe5fRS7J1bxef9W5R8BFYSRWhF9KH1zgK6n6hFFmoMLrVqX",
  "key1": "5vFaC52DojzMhc9xgYPo44eCPvLnzfmHuAANLvF4v6PbHaygSoT9LLUsjEJHUNLsupv6NusP2PjiLCR195y4pcEv",
  "key2": "y6QYZRJCsE5ByxCLg3DtNk7J2YrpSA75jxaeuBErHxyKgqP1V1W1BtE4GhK8rwU8rDYwnnhhFamNcTT2PorRnbo",
  "key3": "3khRjQhxgL29hhVE5DJ97QLVmEHThvLAYFeue2bKk6Ko2xbCcGMdHu1A9dXnWsZQTLupNtystrUqrKhqVXFPs3U4",
  "key4": "5kbtRBvWqPbE1eAHRQxf4aHPCUsXVqPnFkd7JwNpvb3MvDiF36QMEukhRkejHUe3zkeDaXn4n33U84PQQGjAy5cd",
  "key5": "DSHDuDftwTQuSFBJXHoVHW6YfQ4ANFAhRYZNvHiwW4RCPuoxG4YjYPhb3taQUw6nTDAfiJTyD49A1bo7Nh2s4Pm",
  "key6": "3HSHNh1RQG6cDMmsAae2fS895mUHsu42NCFiBysxZcBzppbQbSTF5Tj4T4DHNmy18vEhd9zuT8s4Jc9ce2Mbnakd",
  "key7": "2C8TqzXjQJWajzd9oBbT1tnV5CYbCRgNTNSuP7z9a5V9g7UuWQhg3DHPB5Vtvk5rGXQJCFhYdBQU49J7R93D1D51",
  "key8": "YmbCWPCJcPciDnprYJwRZSZHWDasjkPmueghFZBoC3Q95XWKhbJTGQ7iUr4zxKLNUexLkAehY3ZfMM9bLPM5TMi",
  "key9": "3JX5mzYpxGehR8K3xhgPxMh3UcmnEqdjkL2kd163cBcDfmosvDGt2NaufrEYyiC6xUuvtpGuF3cyfqaZ5scG3Kht",
  "key10": "38N9SyaibW4975nhUBj7i4xcc5NeWHVX8d8ZqEFf75GZ7pxm9yDyrMPiqpkX1wPnhQc9U3gtVCLkVMMv4eaXzBR7",
  "key11": "5mCtjBzZMM25dLZezfEhoyHuY6mdyCuJSgmsnSnS98zcgRfQJRp8BRq5ma6j1XZAur7hNxD4EH6GnmwEW1oaQ8YR",
  "key12": "GQ7M1uFFVUw5JjB1sfvRmsNUBSHWzV53UzutHCRcZSbmtd6AoQh7n1DdxCwb1mqQfXTKfKvXnWvLGVsRpVE9ir1",
  "key13": "3j7zkAFLnnEoRnGPq7coVcvHXTdde7NWkbcb9wYhZyA4Zofhceii5FPKv3QNDQctGzFfouz63Qstr86YnwmEjt4d",
  "key14": "5QJKPV2yjw8FEYBFjho5CMVjYUtrnMEqwBAJXQFWV6EJHGb2D3rzCPyKsX3RgjK8d2TuMNWCyGXLjzRQVQ6rrv9c",
  "key15": "4WUZfGpm1WF3hLqtJsbuSXdQvMsGoMhSphutp6T3sR23sus9Bd2H5L5njdVdnzyCmKpAAyJ97khVo6fnGARfLytM",
  "key16": "4rrRygxBB4gTYj7eeL4Qst1dEZFo8YMV8nqkH6a5QnQveREMETfAJrCrdF2ynFbxmUAMYsj5jUo93xPsxuKZ49oa",
  "key17": "5txciuW4ikrNnvdecqTxJrR3MPe8X4Aj8ibmzP793HTvtycTkZjFGRX3vwXGmtqp2bdDwbqHayEYN8P7Y13oAQQs",
  "key18": "Cgi71Gm9hGCH8Gs16QynsPYrNwBkzKZQuAJ7fxtfm8B4sQMJzLsair7YL25FP3MhGoeHo9uwU43Lzn1dSC5vTvK",
  "key19": "3CFUwsmaeaR8A35w9LtaxsugHWbNMSpXsKEtvRiYFqaDBqeSFkRehKWos94QQkycXp7izY6MjZYDQia42YtE1aP9",
  "key20": "LPhSVJpY7tcq5kzKdtv6kA3JduucMYCN6prDNTHJMmwNVg2i7zkbeFVKdF3PVH2QXMSBVc9KhHGevHRGxxyHnWC",
  "key21": "SnGK7KNEdxeaMKTTuoCbYrRgCGbUqDkB4DWYRoWwNAPdNTBCU5E91FUqAEkxEA8yLGAT8pAqhehmVDCtjCWuJ6a",
  "key22": "4ofbxfLrhj3gRh2j4duxmBWLKDYCfDxS59569faNY8AK1BJLod4j1AmfTxa4wrXnrmEjca6UcWC2keStyNwQ78bf",
  "key23": "5s2yN14ioHc4avmMaVqi91qf59NVW4Zsyv9dykNxXnGw1QkhosSGZjmdT3hzFD32EkonoEbKPdfncGSBeMs5XiuG",
  "key24": "3FXpsET5RrxpM7KZ7nomfjuqHgkZAEABXcFSxCNQR7tqbNNoQqfAsYWA9XeZ1Cy2M8gts4XfWgVU78cTBJXC7qiq",
  "key25": "2Ue4hGVcifhyRF5QmRcVpGqy8NEQtCbySnFbM1jafZYMjJBfeZuzdkxhNJcJcBXvKUT4FAjtidPRMA1RF1M5T1ex",
  "key26": "3AX7SnTJqmN5VNuTZMtihsNv5nYnn8mUayvqRqb5QBGCKjCv5Y7WvcnQu39tyqFtrbyps5GinULrrfn9GUwEHi4X",
  "key27": "2JDNB7aS12fErjdrFoWek4bLbN1BgKzDiviTeSuhwmcbnypbPF73f2A4Vv5V3s9sCbswgaqmKkm8EL2DqKzj7way",
  "key28": "3989hdfrqbuJSLLV3v9DjjU8VJ7VJbVWMG6YBvHxbP7rFMhT7dnXZBSTaTkjNWu8Gttc4EHvymf7Sbc4WpW4VwUn",
  "key29": "37j77LQGjUGWiHStbWBqgA2aq4NLMXk2fFqqxfqcTpehTowRuvkSedyU5ar966pmWmAJC89pkr3RpK9c7jPwn6vc",
  "key30": "2ccnLRGSCvwKR34aJU5rgLs4Ugo17J6vpj1CYL8cUNYKSPHvEpcS5WqdZVupz1wMcMTDbKPYeW26ieWejw4mePCD",
  "key31": "zYRMx7RW9Mb2evrQGaHf742wNWtY1b9X2c1bdHh4AZ4ejLrPT6rhf2QPod5xTwdtSHLG891YkD6zytxjRRriZPv",
  "key32": "2iMxbWJUuXZiSG17ssfPNWroP9mENserMRrTGQCwMWRQrHcLsAZarSyVR5CtctWaqfdC8jQt2fwxcfC23bx2H6zD",
  "key33": "uB3RAeAhMPVeq7JkA4ACrgXy95Gos8nEDcY16u8s1NJALuGfNs5q3uQNt3DnQQaQLuwXfHpo4rw7w91pK6QAhRA",
  "key34": "2m1PfeegvYFBBzRVgkBEWxfAME3Bfz7ocuR24WjSqgZ7Yjxe3xaLZ3CNQr6975bsycxHscoAxGAzcg2BU4BZVYyS",
  "key35": "svdvE16SJqdi4adwM2fCr17MjasT5zxuU27LbbrThSopCQ17wuQmDREo5vAteHjn1pmmr4QLaAVJMdWsv1RAdM6",
  "key36": "Ku9Gz14yoEmZnBgSctCncr1yM37uTYhpVYFVG4uSCdenuPEKLJcNMva39nRenKNFdWPLCbhYc2vXKCkvgjAvorv",
  "key37": "4jTyf1J6D8kNMzcFuo5e5mZJ96xartEewur8t2NBcTqzmGkRT72eyHCqmN8ugZFpVaM28q8GVG3dWxfN5AtaUYmt",
  "key38": "rHdc1nyWptdYoYH371KSB98GnZP8bMK8gh3EwwMEA9Rq6EwVGSaQbD4GWzad9JfvE2zUL8wHj348xqZdjyCn698",
  "key39": "4jBaPofM1ux5Ph9ENV2NWCGQzcinxsro1V93FDunFznWDkJ3KY4c4m91xQr5dMwA6sBNB8Vvu4AfFVJVBUtEv58u",
  "key40": "3Y1UpttewfjLbhC5vxJXtfMQbFQNiaVmfixf3iupK9rZJLCXFDmwSEt6zzF3MYtirsxi21gvny8mkSRQkiqXsyW8",
  "key41": "3EQeLNC2kxavr75n74GNyiNMKQ72fnDp6xU7kdgCobvhuZc5iJQ28LSAbdJ7P6ujSX83yR2cVz8P5A4cveWbufWS",
  "key42": "5NXEHp6E5BED2CNmsHtNPhcC4ynaMjrm4k46WndExZpn7aq5MQJZbe8rLv2rsdcrAseARJeQBtSydrfbfRtFd9Hz",
  "key43": "2NDStSkrwG952f1dhaXxrJZZgfChkLn84hasWngG7kmsqjJjwmtx26GNfBWvJrZgfp8t2Yh7qs5UNJSwaRnLCqLC",
  "key44": "3kXQtX8QmeJ4b8ujyTXn7Zf7Gmyod9wUkGqzuGYCh6s6otEdoumTDaDSUgE96ky5esVBHYZaMfvvmkpLeJneEDeU",
  "key45": "4jZNiEhyxPcDJhit7YFHJq7Ma3StvXMSCL5FjJEjNnftjt95VHLydH2swEJ2RVGX8chpB9RyKoc7Sa7c492Yz2Xb",
  "key46": "3sHvqobXJVqVBdKj3tTaPuoMuSrk5GK1wqMCNn8h7dWtW13LH29sChx2UrQpHta5Erju1qdBDnf729ACEmdpRTsP"
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
