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
    "28UzWhp3fyJS17tiBrMaSiZT3xvTaS8CJomk2m6ouThPt3xpqsCvaXoycLkXqFabB37o3wHqkGbZ42A81JgXERr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QAVascyV5zjtynFu7D7SqjZGutRjjxpKbRgSr935pzr9KH1i7CQBFNhas3dH8cJhBVsffAecjvwvFL7WMNhCrrs",
  "key1": "55r4SSryfzQttBH5UmBRFyvKLjHGd17szMqTR4LXQMTMHnAYvKaCZMHjPNY3nzr81bwFRqP5EbYZveG7gBSuumhL",
  "key2": "3iEtTM1bqhmjXFp5Fd6RNcVSyLFECsVtZpWzh3zdA9dHDtEkgTP5GiHGTTFVN9YxCap7iaybDaWDm7886SHV67BT",
  "key3": "54jBMRPTr5yHGDPsFq76PBnGHvd4kUcs6hP2WW66ctzwX1UUx8sxvMajRryg4puYuo4rG51UkVp8Hv5bXrHhAnSP",
  "key4": "5UoP9rN79bksMVM9DEobHcFJEvvhJLuiLiTzkxVQxRH2qPMn6XnZLzP9MYSVE2rPCagkvdrQMXkcnNKB7RwpURLL",
  "key5": "4q6sHKygjJAxvS8JR5sG16t4V5gXKDwWFtvJxVZy6wW2CaERUKZRj4Xsj4DZ6UTCHv8w1MwbguDjPwK1iVW7PwTj",
  "key6": "3Zhk4vTn7j3WfRkAjznA3AaFnfkeQ6tNwatggsfhr5hBBp1bwWbKVeefMa6SAPYCTKDCNfoRsoRNQvX97jMSaVQs",
  "key7": "4v84sXBExEeBHZisHZBLUMuxsXVJpm2U7tEUAiYQqSwb74x6oCKBoLFZ1W641N4CBoVkHbbgncnHCs199ZCkSWkG",
  "key8": "33dRAsC9NAEH8rSarJZkn2jHYg8bxhkdTmXwzGY8HsFNH2tPkoxvz57DDR9zjWBZTrVgpHR6MR6nVZERyhD1qrgi",
  "key9": "3yd9YGNrXB6PGVe5Tc9ECYAvEMERFS1DAYENRL7ZeXFFugGNRU1zuxoLYd4sntu6C5BycrUatK3Rsduu8NyaPccB",
  "key10": "3aHTsR78qeGDEV8NRH5sun9Em5BHKa9c74wfQ6Sr9Ze4fJ1MjRd1H5gUB1A3ctVLJxKUzP1S6z6eBRufx1F2Qgvv",
  "key11": "4LzL6STxQbk1xFjYTq4TKgaTTngLsWkbwRAWoTQiNNhV1SBy8xtdGuGZohQfkHAvVBtg5ECgyQpKX9DizT52KySp",
  "key12": "53R8gQELGuwXQwbxVZ1LzZC3ZKAn5Dxx9b5p4o2ieLTzb41ux8wu8kULp6ZsEa4LQjYbGTT2AugHdbLYB3ZMeQPS",
  "key13": "2hng8qXariqkuqUstCUmtQZnjEzcdMTvzu4pbxFfs41r6JtqKAcSpRix97wwJChrTUSCSB2T9Z95ZChayHtTUJuM",
  "key14": "pAvjiHeUg4m8MUbesbuMEja8HCJFQATxNmv9ZrG8npnQWfqgRJeryCQiu2Byp3v7C8JVCJintG1Bq1GBMZtGBqF",
  "key15": "5MP7cHHXBA3FiooFBp2cUMfcvxoTb9sj1qTmbAXKfqhXD12jVDZFXpi4zYuHnEiJuATYB5UY6j5d5ZDTvTGX2BPm",
  "key16": "5GttcbYMieuEUcAWea8sFTBm56qTQXNzACWNDVTxjPUoQrqArP5T87UX3C91Recd3pN41Y8qPUvG866yzops9p1p",
  "key17": "2z7LGYaEwcs7HzgV2CsAqT5hvVj2aRqYEfZ9Zy3ThAynR2xw2amw76PRRUF6cEVbXjwq8gLsSShb5tkpjyN8QH7K",
  "key18": "4L2wrV2VQu2C4CkpNYf1ZSqKHVaRVGrkRMHydFRQD5qKjgqja6wasEpNYtazccrADmncRXoUJKnHgQiuXQoVUiSE",
  "key19": "5pE8Ws9267TrJh1qvBxAziHpD1r2FWqXQ5A71rQgtY7CfeBL1itg51ps5s7XUXpegKrRUF3vBMfSGRcR2d24VkEN",
  "key20": "2xmg69rnaax8knnaWkZpsU3hytsQ5RNHQpHpz7FYtFfvqf3bSZUYkUZtn75htNGFQbDJtF7M74dau7P85N5cib2e",
  "key21": "3hucWnUDQYdoy8purY2pF48w9q4fnG5yg74wQ3df2hoRBzZ93FTrHVu8o62agU1jdeyc5Ua7D3q8V73HwMXekUY7",
  "key22": "31xTpBy4BKvoUANN4ZnzAKTc4XH7CSNhW9Np1KKgNDzUSnXHxYvr6FmsstKtoYDXvRRuMJN8MZQWeBgvivy8XUwL",
  "key23": "ge8zwZSAzeoDiZ4LRFpN8rdbqz1gRpC3SWW8cpPAY4ieon8YVonpCDWR13q9TPohQEsALYawHBYHujbuK7AAF8R",
  "key24": "3us655HnFyvR1WPmiQeEeKDUfzHLhEGKBRufpQihe3BtRR1cs8dBMdUEqgv6q97nCnXydPYbzzyaqGtgCngC7t3K",
  "key25": "2Y8Rr7WdE2FLtUSVh8sUV7emusZTqCPDA2yUVm4NHQKaMKtHZh31Mvtg43EywyRmkS94dLcMyMd1bN3oxNcyNc37",
  "key26": "hi18NdVJsPrBJP9K1fguUQKq36BRPbT4Y1MtN8sqhYPSWAHBWLY8J19J18DSDqPaAHaXsBBozZemWMmHwyn5Qyv",
  "key27": "5v9hLg81xAcESTdxwCKhDNwa57Ldhq8uLtujHxon2ToYDb4JbJXU7CNzsxn9DsZ1hgVghhQy9AobjsjtH8d51Gd8",
  "key28": "56n3LDNKVCiniDowRg5zsTFgSZSoTQzyqwoRW62H3YRxYjPPUJ3m4GRLaE622dizJVw3hQx8D4YaZQbJeSowVbCw",
  "key29": "5dx5P2QkedzuLUEmWtDqNuxrMVDFeA4UrNQpS45YWW31x8g2dPdJNHxnNVang98xSHoQGPG6RyfH2gm4TmUXhCSX",
  "key30": "66eY8gWbm4Qt2NPuzdVT9qtbHQ8LKQG66xXTWdTx8mC6ho3cUWn6o7HB5yaoDUBDXicQ1hEMGBiMSdcVJ9MLJTRW",
  "key31": "4CKo53WKrTAcfWFvFf3pGreN7ro9dpTFCmWZpCTxRbj2GKjcQ8eUrAx4xZDRdTch57PeRgDT474wtNUZBw4ntMYn",
  "key32": "56X5HRBujFLGvNCMN255PWJdFyi5YhX2q71qj34bgKan3EnCCDjgdRAXMDPm6mFJWyNhJBMnxgseU5Qxpux5ffuo",
  "key33": "94ZtNBH99c5GEkVPvTpa3uZ1JqACgiMuTdfoe5KgybCA5RsH8K9hWK1KpsEov3tWbGYgXnULWdWAKimdM7ZMM6F",
  "key34": "2U4ZWmsGDANLTt8jM8A9dH5j9iWzvMVZGZZVqtum9vkxDvbdYDiU52DVmSVExHgVB29SxCdiUNxR9gciWXEzqNPM",
  "key35": "42RTG8pAReJau3nQLSsns3f3ThFm6svXDou7MqAtwspev51x7F2g7cCU8wmjH1M8u6T161w7iYfsBfnVyCKGPiir",
  "key36": "4LLm5GFhxFggdtqUySTJZv2owgCcMWxqwucF62CppF4ZELrDL5LfHnAMvJYE9wVi5JK8aXfwE7S8Sq7wqFK1NB5P",
  "key37": "4XtCjr2ENko1VraWU3LYWDXhxcwX8GHBwhBGLJn4rjHZCFKbbt9s3GGbMnRF7tCB7ypZfDzXQuvJV2xPk6meiC41",
  "key38": "5x5aKDKHftaP8w2ch27CFykQ9Nr5L8Do7xRtJVQp8hziUPCk1uaL2hnvCxy9wajkmSHV7D947oGtVD17G1DeUzDz",
  "key39": "2SFhZasNf2fE4YNygzUdRyry63vxQbhcW79BmJ9FmS15fRrMmF9kE2v4WVFv9fkFx5cmwYo5xQDasDjaGQDMxNut",
  "key40": "3JZ35EKmGWvDvP4gSnLBwmwP6GUyrfcycQmhmEb2Tdioer4VpNM1sGC8BsypCXqW1umLx25dZcqyezMm3XBhqBPp",
  "key41": "2LhDAPyvUFJpXmaycdfoUnBsoFwtXqJqFJfeU5t8SqpM5TQRmzFP2H37oDSELKS5EVjYsxG6AnaXSg9dgTYmcoz2",
  "key42": "2bV7JEf1ip36cwR71zkYQGQjeuoxJA9iYNauT6mmkSoXwqwwBvMkwkvYmFA2cesx7t5jZrnQsTFwJcx9WfXdc2Du",
  "key43": "4t93oQnKUD9CXSvzXepkSAJPunTBkspu6X4v6HHugz7U7818YpZu1StyhCXpQWaSsiitHndi5vf9CeXzz5brVBft",
  "key44": "3vFkXWXJ1hm9EgFDD1ENi97UdXvZY5r9igNNeJ6LQjuuudAKb3KvZCT6wnfWiPPu7F6EjJYSrL4mJa6KffJZHQ7f",
  "key45": "TtMtK4itpxzsJd3Lv8dqnFTQoYW8FWdjnps3KiTPQfwPX85Lq3RFuBn6FSw8pb2A6Yzq4jewJMQzjpJhYceyAXg"
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
