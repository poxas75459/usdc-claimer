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
    "4ZLXQf5DNJZJtJSVpLr59aKS1qQxQGkb926sFTqP3ZfEdzYRrYxgc5iBMEALDYknknaCQbgTYxzTvePhgsFeTQs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jHMi2WyHtQNvUnoqnp2Xpzusd3Lxps7m4tFMT1Wd8EecMXFtnPsXssETMTUCkWokcRWpvQ6GgLpPcfdcjdqoN5K",
  "key1": "3oekDpfaKd939h9kRSrwfBUTpZyz9e57iGV6yvCDiy1v3KJrSgTAB6KyQpZj2yap5hnFTRSoNknwsLKgG5fsVTW3",
  "key2": "5EAT6jQTit8LHPLJYmsXgTfqfeAQ2qa7rjN9FQVz96BidFX2rm7SX9BqvbvJzkZ7t3DtvoeQSsAhPAvsm1YNWLUN",
  "key3": "5tiJXsuoLWwmCjtYt9yWbQJj2d1EbLbPAGJhYMZhPjv4snsFxb8d8smdRgeGJvhj4wJR2BJgZa8dfLSVoZjnttSM",
  "key4": "29sDv714RFvMgMoJR6x5ndMDYcbj6FQF4n6RKYPDjwpG3iLxoMf8AE9XG4BV7oiqHWkb3uT9cYjAua6p5RsZx4nF",
  "key5": "3rWF8quDWVXKrG961mrtDDBjq7ocLr6fnJLJz5T3jzcfyE4JLv1YB5ets4uiDsRmNrY7bXuMM79bxnDBLR8kSBkT",
  "key6": "4mgHP4fAnxivKMzWWSM9C59JDta1wH66pJG54tjE6zojbkYpUkmLvDxPG84SQB6RtrtDxVTUDcfpFx22GGoExE9w",
  "key7": "66NeRYY9yvJi9iHSdetbCgyg2YDZVRPJYZ52TxXDYmH8jLbFdGz6bhZNUSW3hwvch1r8HobiC8zpQsg2iex34Qhf",
  "key8": "3Ay2CuK5pBmvUhoQaYaHKvxyvZddXi88ekmf7ABP8Dab6pWBT2fsFfkkUfeum8u4kERCs1fohtYggtV2JKfBH7ek",
  "key9": "5kjPQqTccphD57si76WZ2CAL8ovG9ZPjs1ArnSKES3V3v1heFcGXjnfF9FvadURkPMYKMaSbdPmR64zjqKViWdVw",
  "key10": "5uDjjaUuPR8L3GiyXdZ6zh9rHWp4apkd8d7ygJWjDW3YEN8bF9GQ9UyVQ5YT62vqQSMG7oScYUPEHzN1kpKrifcf",
  "key11": "27yecaNk9LBD2TvkWsU7vAsJ9ynVDxmG9gqNo5CJZHdB6P4pycMdH8utcNsij7r2QNvGdppGeXhEdgYSwnwBaMuE",
  "key12": "7kehgorqwsyDTQY2AVCbNNip5L6SHnmKY5oR6asFam6QTsr4M2em3mGhytxVRYA4gfKGLwiyk82mfYFbKRgK5aS",
  "key13": "4U9iZxJ6tyKRcPYT2v2yMwbrzoSAia6JuDG3ePhUxs7sVjoTgxhiVry7k6n4bKKaRfu2t2FJ4Tp8GYCFx4KWX2M4",
  "key14": "2Hh8xC6hKvzsZosNNT5YkNNEEDm5SskiG7eaRMutkHBbDYwZfnirR28n2nnn4s4v4KDbWmDwBPiPehoyK2P92wUQ",
  "key15": "5DksYv4aUd6cHrLaNX4vpKa2VHVQRbmRiXGoF1cXuTSWceW9V61NDgWDb681mwobHCnnp71McH4z9STtkydiQrVk",
  "key16": "2a5CM8814v7QuKAur6rMH1ZAPNM7WDd9dKxc3TNeeNELFjfZCTUGRrXg6dtRqJRQZKVptL1oqooNsHdDF3dR81XP",
  "key17": "5Mg6yoEj9VorKa3uatQe9GEZdhr3RJ2dakQ1Uuoqe7PFmdvPJj4H1z9XAwfkWJyKHZADRUBZB9AEymbZTPMUzaE5",
  "key18": "5SeFxEhi4e3mbyqPaURvWcDsU1i1dutxfrKiWDqUntBmg1CLzrq9yGiaXqxWnVBc19muACR1NCnS2Hc2GhjSKvac",
  "key19": "3Hj4X399XTW1ZRptS5EUjPcAQq9zFRcbNaLDQW54vc1BoAVm3JSZFeF7m8nRT4T9118rSqXg4xhaxnL4rqbYqdzV",
  "key20": "SiTgyTMD3BWaDUdHqkLCJRsoE6BW4sji4Ga5dRMnNNiAfxsKZrud3ReLXE8F52QkshvJyaeUFW1gb6zKPQ6CMn1",
  "key21": "29CYBjaQhxJBC5GU13SoBuMxjWgsVTx3peLVefwtpMXMrBS1BrGvHeNyjdKQ8wTC9c8zPnzvwNSnTiL7UcrQnBrQ",
  "key22": "5SWqHj9HmJy5DpngxAWJbdEduf7T1hSKM933dpomTMYdsnibXNjs9JYw4fJnb6Gd869hGxCdJwiZonD3nnXFRD4i",
  "key23": "3JNHoBLWctaUF3UX6UBamQNFBcheGLgvpxxKTsx4Rm2PvWbKE5Lh7a5Qh46emPy68VfzcwRD9YJ6jPfEonJ6vAQ6",
  "key24": "5jUScEDHdwkVhviadyTW7DzQ4qyQykM2ujQG6Qkn471zwMnsjRpv4jC3Act9rRVuKjudhD33UwHRmH76JPyGyjwh",
  "key25": "32JJ3m7XaKRaNZPQBgC71YSutjw8ZbMmiTMrfAKxTgBkWXWHZMFUByQa4FB8hChiZAanDhj8VoWkmRAYs8sQswze",
  "key26": "3Ro2rDFidMsx7WyDrAjchVoHtXfubar2J5x6jPxkTDHo5FbhgsjnYwyN5FHgAoTT3Tskio2iAS6vStvd2nqaVE5X",
  "key27": "sdTWVq5kA7dNeNf1J8ggjsVDctpnqAw4WV6vFRo3rtHXcpGacuZwdjYu4eViXPAVmGmPkvEfZFmsBDFQxNimJ8E",
  "key28": "35p5BfhXtqdtGxne1UqM2piYv482hwejDULj5LFnUU77JhPFwTx399BG12AScaSFYZoB9jZJLy489pWytYzt3rgu",
  "key29": "26GgW1LNdV287M8JDzeDmYwGGCsTZC2aHze3soumA3BWNAZw8TMtK9XLnXspk9t467zXJUg8WLh5SJYqXV6RSaJX",
  "key30": "4gHSiHKteYjeJboWrwh1wbaSNwHChrZHvGJMVKF6YFNLJwckwkmPkFm4qrSybm2q3Bq1ec1DjYA8zqto5NMXM7wk",
  "key31": "2r7gDQtvTW6rQkak4Rt8HgN65MjTzzJfPKb8PzGceRbaief9YoevthdXKJeTrx6GQnky9ZCp7vaPfkEkGVPZAduA",
  "key32": "6FbjRqFZDhDT8MK1G1ZEuPM7ic3FViYCzoGoKKD5a5B8jtDr7AF8o4fXSvsYhiEEfYnhe2hZTR764z9EuYJkkSo",
  "key33": "2z8RnQ9Esd7q6vrceriU63uN2CBCx3PrFuZZS8VNZcw26TqLyhVDKpGVvxzV4TCzqas4qazhNWazumtu8bPRaHoV",
  "key34": "2bxkAYpnDCXaTp3k9C9bTRRy9BT78hgeMKoHjyfAFSXiSdq4EFdZiFUCmfDx1kBVZ2nk9w4Z6fMxrpHZ371BZRme",
  "key35": "4QdJWqZyNAh8JwAV3b1PC3YNrUW7GSG5QpnY194yV6TnRvMuzEeoRDFKehn2XLvi7tfsHN2zucS88CkkTAGZopZC",
  "key36": "PgJzu3pjCAH28stFVputrfYVpDQDcvJXWySKJ7Xq813kx3JgWNWhenPPb7BiSZgChLSjwJ9TqpWwbvNrVymZkTr",
  "key37": "3LsapDSUwLT6wXDdoPRKg9Ge6Jt4x4Gbwaa4kkE12jUiFwVECb4XVvymrzGTENpcMZoHX59kBBWVMBkzTXePAPEb",
  "key38": "5uAoVkKQahvEZ6Qykcr3LGXSNisoGTjD3GyZqyuvxMsZLex1Hn2ukLXdvFkzQH28UaHYbqecghYoNddVZZEBJ9GY"
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
