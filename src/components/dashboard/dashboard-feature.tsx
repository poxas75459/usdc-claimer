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
    "3MNqZhrvrH4B1Bcg5XYYG1enaAz61mibiKv2frNmDDfECsUc7v9kknaA3VFwFA48aNHQvUYHNsuJ7fKdv7e9TwTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5bwTpKsUUNs2Yc1jSxdb8PkfV6wsVrQ2KtGc4w4zkcJsDEAYh7gj139b4KWMprJu32JU439Ente2Ts5SP36rFy",
  "key1": "5ig3DaWsmUgzjZz4uC8DXxdwgz3xixS2gqZUnjMSLEF8LayHa1Y31kZ1TMChxTbzUD28h3Ehtgd1koNLQXL4DcnH",
  "key2": "56sji1b1vamGhAKrvUDHKGW7YjbofNdxCCy1kqK3V2Ld48AqohxzYTusnYx6tpy2VBQvtobpFw3L2nGBUvzdZ4Q3",
  "key3": "3d85RVRU2fBcnf8RANbBSt2byfERNpwB3NgaiGtk7nH4ANqnS8CaUGkDNVb8XQyHKE7Q7ffMarShvoWEaZH3fRWj",
  "key4": "3C1YZwH9TyPpNydccDa2VersU1vbCtwPkpePU2aLnbVciLUe4voPAzYATkxxkLNArcWJ13BBUxntrCiNtsUR8kbb",
  "key5": "21v69hReQLJovs7rgwW24nfHjYFbnZMm21bhW3aj6uA5Z9R6r5b84TAnH4Wdr5KCZfJbGewBoCpB2g3K6Uihoanf",
  "key6": "VYwG2k27HNvmGhuDKotKWRnBbnxKiQEe6EGBhjcZhUM88Xv6e9CmFbRGd7JvHoiEMtpLP6EGXcYdALZ5dnLHqYH",
  "key7": "p9mrzcexsJTJunLSDmyfAXT8evae74KtmbLUqnLhPYLyxERH9vxWjh3Hb5mM6ebZwTBB48NCfpr66QzwJAsFc8C",
  "key8": "2ykWZBiuS9MDvWPg9bjD8DyMLg8QcLHwfQmt1NRVt9LkBP6K7xR5zA4NNVD64cXMfW7c137jCaRvJS6sJfPZ1Yfy",
  "key9": "4BpyqTkicx7HC38KjxArhkipKAdnurVBpn6EmaPDYY1nR9kdSkc5kAeqQ44afL8cranigRLkLezX1ghUsXb1vDTp",
  "key10": "4AWBPaHXHm6FALF2JS1ixPSYS6X9TuKQ5uyTByk8hgm4wf52u8v1r9otETDxDLCDHgdu1tGNSRXB5zHYFoXFGz5X",
  "key11": "4woEJtwkWLpMhrDDCYdJ8uuMtTUDq2jaBTNYNXZ9Jmqc2wLXesxRGsR9pqqsfMrbF9w6cEXEsjKisGy2CbAwAt1M",
  "key12": "3muuai7tGCMwbiaihpKE5fVDGjQQySfM7ZUwjbuzjTMYz8NacDAcWi54rW61HHiEo6LX4RUJrLgHE3iLjXyCU4x6",
  "key13": "3JABpaXS66AZrvsMFptaiECBi4UJHZDmxF9GBmbxTko1LHzk7MfJ3ke51wE1ge7ScJgjHYh6bHvbPBAi7jsZ6beB",
  "key14": "AskuMWX3yMec64gmPa6yNAbgwzytZ217tyxUfiYeU8n7K5SKGrG58aebSCn7nDuFeZN5TAYwvB7t1QT3JVQwG8i",
  "key15": "5pjWMiFJFqDxBFk58DR1WjNe3NCZwUGnpSkbgpKcCtB7ZadmCQfnUE5nWzZfxFugMfxyE6m4c1zRfeaicegcMzbT",
  "key16": "3Rk5wYBkCFSq9A4s7sqVMib99WpprFFy4fxhiLyBH4fVqq2fnv8CGFMLZmpAhcjURbEATyjgzHfwkuskKdH1jcUW",
  "key17": "2BwtiqupxzWLfLeZMcXbDSFrNyzd6QD8wLAMzdhFRg9r2rb6MrR5FKsRd6NHRHcVGzDjxQV78hZJFhCPDxhaEHU4",
  "key18": "CgGpYR6VY2ACDSTKPNBA2EWDMR9sJuSMxqfzqWMn13RDyY177Lh6tzCr4YiLDjqakGkadQ5EnMBnHrHxgRcTZkL",
  "key19": "4ak7X6GXNoRG5fqFAqi5vrXbAxTPoiRfwbNRCi12oYUdzMwBxDp3sy9yVQdkAHRoE9iEF52qReJ8WBgZ6G5FeC4H",
  "key20": "5i8SRn9NuMk4n2DLHKrbUpNS2mXx2xme7tCJBosAqMs6UDaMfG41HYNSpm1LwmQjxhT4YVsLQiYcuX18ZmPXChw3",
  "key21": "9JmunvJtAPKXAszbBccdsW7vidxtmWzxz6jkbkMpMCfVYXA8x6VCHtWSmb9cRcd1DBVTb3rs2oYrJZGhscTkdUP",
  "key22": "hSeWRrKYCQsN3wZJKRJi6vHskW8qbXywWwfqvRZUF7CKxZR3yt87L6AdrcMPHwfGXQSdATg7LDey4x6hUXQ3T4Z",
  "key23": "UvUYCNAykpf2T9qSrrDVzKZCUD8wLtmQqwoJbMpUHACxYSzBqyYfjTa7yNFLiHptRRN5TbcNshmG9p7XBzGc2Go",
  "key24": "i6d8bNczVg5V4ixJh33vpD7LHqyN4rbcpihT1QDjYWAPAA99m7yMqKJQ1gHSeJmB3zVtT4BEod9Jx2X6NbAQDsM",
  "key25": "3pFDUARGqQFrRwk2dxbP1PcuDwFTAftKJHSGC1jbDQZZagEpVzbrPKjcvpaZgegtzeYmcdLMZPzGeviWMV1qfTB",
  "key26": "4UpGGJ5tzRGztDwZYTTFYovjoX76vySwDL34t9uoiNWQosztBwhzYRF6WD7Xe2mN1P1gT4V3AwXWUrubLB2qTXXa",
  "key27": "UzSqcxJB9HZcojCmiFrjwbuXxamEJD4tNwei2J8P1sTtvmD7JKNvbF2rZJX1nAZufwM8vVL7zptXf5CX3cQt7fF",
  "key28": "4ogEjwEqo7FWwFwMUkaFuUDnmyp1nbW2bJWSWkwqaduAqA2FZBBHEShcKewFTqZdsbbj1CFEEwYPdUgJFeNiKipn",
  "key29": "5kkJjkzCUHvwm6j5DvE2pdvpSYgodPNSzsNya4R8roNoTX6ccWphZ2mM7YxhXeM9SuLdSamLCKkWvLCqwP3qKazw",
  "key30": "5KKRCjjLzFPwc3tWyoo57wuXicjEaTs6MVg1zzWrLtgKpEdxMmhW2HutEGq2CGJMsxkrS9sTHs5zvHjUq7BiWjwd",
  "key31": "BAPXkuYavJ8NTF2HeWB4NGwkrmHVnWZ4LP3BMPKPgSMqcvGEdcTudguHJTJ6SEjy7B6tWfKwh8SLBkaiea2jxod",
  "key32": "5x5ACX1uqdDBGATfGXAGx7iwzwDxzxkEdKUvPogK8Pot8SLTZWaxJ4VfnNNHc63ZgMHzJpvPjKFKCg7Vj2sAri2Y",
  "key33": "vkhU6M4nUU5nLYjJFbpW3865TEoEBsPRiYR2iy32HCYZhrE8QXfzGz8np8bQvkD5XNPU2Dc6WC9EJwiGSJa8fdm",
  "key34": "ML9u9HJtUib76LpjBirzEfpoKykTT3H7VB7ZB3hss6BbMnn1FabnEdWUNCVE96okXVPG6YZ1j1KHsu5s81CVGTk",
  "key35": "2Rr5B4QGDo2gxq8j5eL7MnMX4dme3FSVczTHdBMTkDwLAVDZgGpyjj8ujuVzeT9emxjU9PoZX136x1t7KqKLqhJv",
  "key36": "4QPefEfDaynoNMr91cyV2FdWzY4E6aXS3f6j6oo2aZNZpV2qQ5NkNjdQKC7vBWXmQT24iFiXEdY8JUmFVgPEtmmH",
  "key37": "3fV5zbzCpB9RD67KmAAQYZwhTvFJjam8sE4iMS4f7h58jYPj3BfCnb6Ba2BN9CbLRmQiM2PKpr1kpBJwwRc36tJR",
  "key38": "3JZzae9ot6UM59UJEFm1ppRmWMoNNwqsCr8Udz7tHCQKupghWqf5xHxJwmXTUPKxDZCexBLdjeVxyEw3NuEGvWLd",
  "key39": "5vYJ4wjo9dEYntDE2J5Qp2a2pbxbT9yTL6jBR9tTo2gCDeXuVhPX2mcVyb8XLyh85SezEWXE5FwtErre8BFidLgk",
  "key40": "4ppXvNj6mmyDnkCohhNWLaQ7Ja7dQqiGiPV6y5rwvnrZTUDz4bZy1DHpkecZ9ExD644R7z8s68uZsuryMM5W4ujr",
  "key41": "5R1aYJg4mj4swkS4KkSjfgzPK35v36AUM8WpeBi8GqzhgxXBz3VzgnJKe6qvtvUAJQMRDPbpwgQhUn1qEe8D8dom",
  "key42": "2KoAeEQRKFGgQLqK8foASLbAUDbTcEpjRmgD77BLEkXKZHa4KLwdFT2EC7L4LKV8hTNGcXA9tqTQPMb6XY2Chsex"
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
