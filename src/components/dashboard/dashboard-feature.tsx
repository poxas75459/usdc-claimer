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
    "3Fknrdp4GFKfom3CDL2XcUBMkHoM1KWjwq476hcDrcXGeQrMaKzp2tedDXfVapsX8QManWtCE1zk2ouLviRqfiRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QshrLtqkowPFUeYAmGakpYZNVJ32LFycTX7qUqeKj2HqddwGexEHNvnn5VonLncAN8iVVEzo3kiSBYY6fG1svnS",
  "key1": "dMNbEqmP4SB5ZEy78wgkxxRGXXJNVksDuFBmdEFSBVencBA6zfoY6iqF8F35pWvGgtpJYVkrdMHgAWCX4mzRTGK",
  "key2": "DgLQfpdJLJeVEth6B92deSVjFzoYwKATvArhYL1o5FFwQKWoDHPLup6y4CZ65qaLgeZLqRdWnq9S86tRh9pHAfA",
  "key3": "2TNCeDonJoqy1KpMZNaCp8H56LqfdWkFGyD9113LtEbZboHNmJDFcvWDy2view4Gfw78BZY2JeEoQPdtviUE5q1t",
  "key4": "8quRKHsF5yxTx9HXR3sgMYe97PifPuZULUz8sQMNUtyaRNM2k2ANoPS55Dy6LB9kBE6LvNhatZsBVdm8J2drj3F",
  "key5": "Kps5YQU4J2Hsa2XkuNhj2oUDSNniYwDNp5pjFkkKFi3Vaqf7qWrQdKN3ihZnt29aJrMXs8ckPDqKNFiG3XUNuJU",
  "key6": "3kPyvr7YdCyL6YVfenDL2F9tjUVUYmkt2xvuvoytf5fDRuCq7RwCt6Bn5ryse1S8u7npH3S7iTLhN6Dn4sXekUUg",
  "key7": "Uxb1AYMepU57FSYxfL9sBnWDprmUyTcyNX9zUnh1oyssXNFGaVtToEB2sFjt8vHAHA6LfRxTg8zRV2J7hEMGXx1",
  "key8": "3MiMsi4T77AJ6kijXYCWNbx9huHy4WxLmFCb3e7eBMnk7zjvAH4GEvcq1bb9BdhXn8ZKM4VWzwmAWmAwvXjzrBwp",
  "key9": "2zU3FqzR8XauCmoEo4wX1ANAzswUke5WRkDWCLgVPpz2DS5gqQgPntZL1QPMPehtiTAizxVTAk7MXgG1b25SeeFm",
  "key10": "2TQBnWB1VLqtcyEKD6igLEaLen2CoXKfFqnYQA4EDKn8uwE1HtRf2nd5TxzM1up8rrjC3W1yfYRjeQfnX7jC5asu",
  "key11": "5tyWTGNss5cB3Ca9vPM4BZyurzCV4LF91ovmoWKL7ox8pH3wZGt2p18wEjuPWFQjKmozWR2EqYpDwDfCsFMNR9Hg",
  "key12": "3W6f9kd4emwXwByFECf95FMdc6zfCTXcnaw6NvivogvGH5vXG4h2WsNbmSP7r5UCzuBe7hgpNFq8yHtCXkDL4AkY",
  "key13": "4ZhWg2FXW2GUo8wems7UhUSkYuLjn4zNUu1mZ6guBpPjSdG8XMf2SZZWxi25pU6YUyctrtaHVsKcBzDterb2TtVd",
  "key14": "48nnUsT8PTMrZhgPzdLUWZc54UEs27LGtUzRUSou1M4orJyLnDE69DeghWgXaJdgA1GZLPed5wYCvVV2Nt7NeZmo",
  "key15": "aFSMQAAJGbNToxd2HajPTXBG99B4E4TDFVrxD18TAfpzUQzA4qCtNz2SncKevh6ogLXXSYsegqTYhkRyZkbi6DZ",
  "key16": "5pZ4XBktfgEchfm5ULAqSwdrf8S7tLBi7rx4ttnvqRRmWaTTyQRMnUVQnvzEEcaSPtdvVTacxp8bUoxQ5G8v95EZ",
  "key17": "4KHEb8mCyzhvHxHSmGCuuWost3VC3JGfoaa7qYmtWSWxUGYJJKscoBWovDLxW9FmaYmjZ5wbJrxFi4i5DNUtrkaG",
  "key18": "99AbVNFEA3cG4RxmyqBjjup36rCxDB1RnvF5H8M6SD2ECrDVn66AzXPcfCatBCspfDcmUY4eAvycevQTQxm6XPA",
  "key19": "2YY8gSpudvDNzWsseLKfP1TvaJeP8BwCVraZt3ihsodSwf1L4ddsCqiBsJ3Vm67wq9e65n93cfbvopxLi3X4nbEW",
  "key20": "yCAUm9VkcK2y5HVa1GAyxRp97BfBncRTwqQ2xyXNCoMmzXJYXToT3v582E8KFnJAgHqJsVqYhTPYMMVewehkuxR",
  "key21": "5xXGfeQJMYY19pBa7C81cXZofot7u2wKN3raGDdfQgyyKS55ZJNu6gRUykd6QmR2AA1nkfSibNqtqXSFRzJkmZfj",
  "key22": "3PUQtgnAupcvm1JzxA9kTifeshZmA5UqMX62tWoCWthShtiYNdrk6M7zZLvvq3NVqFyS9kdkjasi7oVuh1Cz61WQ",
  "key23": "5UjJgKWN2yXM7SwPumppRrb2x1adB6dU2ZtpuVmNnhwVjL5RKMSKrYe2wtNXEMwADZTQMsz6ScoaPaPmsXpGYNpv",
  "key24": "tcCkxVKhMGrH2V9C55Gfso3VvtBCr9eqHp1jXSHDmYVq3JzbYN8Pr3q62gDznr8LSuUuHgJuZo6jbW1MSvF5pXM",
  "key25": "9oVt6evDfFzQ3Fff3guBbQinGx7HhZKRVpwjt9sueuLNgrHnG7udVtnunJ2ZQoV9JW8x1A5JndjJBiBb3iBWfH4",
  "key26": "5szXaC25LE61meb48SmCH4SRfVsAmk4HkithdTNSvAAAZVycDK4Ke4cExnzZZK9TdexPREvvAKaD7WSLy8vjUkjn",
  "key27": "4mN5GyG1iP25fxCtYw6RmWXCeyitJZUa5rTzTAh1kdcJtXvLrpDSXHDG4yrug7ZnUPz94j579SgNHacdZ9AyVJeN",
  "key28": "3nJmvpcUrGNKyTZKeizkt8qeAFKMWbqrMYyJd5xGfDqA3s6HmJz3kCjNM28sBLm3iKAKbUcUsWBVBtvov8Lca29F",
  "key29": "4L8814bmUXZYX6cMEXYp75KfW5W1c58G5tk3ZriBvg8XpGnpPdpS861Lgu6MvLahfLqnrZij7LbQdwjSpQ49bwje",
  "key30": "24Dxm4mHcmSGL5ycDv4NiZ54HVpd135M3CdwYRNDGzyroWRHwnsE3xu6xJVvES6DP2DyEdU8BczetJbS3jA1YrLz",
  "key31": "4rxW9u3rMJHAv15rsRJtE6in7LSvxXiHVmHEawRf9mo3BxrFKrEX296UtRpS2Deb7D65AUY8QeNL98dec1Bi9o2u",
  "key32": "2udzV9j5asZ3agJh8wrSG9JJ9VhwTYSLgeWEZ3JrZfxoJDA91MbEUAQQxPmh1PzcM4xfUNWw3R9nn9rs89WkWeS9",
  "key33": "wrMpxzX9r113o9ZKeExoyRYAFoNdNcddbnSHFfZ8daKnUUR15Tvp1PRYUV9MwxkMfAuy5CwR6E5qowDt7XZVC2x",
  "key34": "5ZCcG9mRCT1U6UFoZ9HMwE9uH563MEzUuQqboMa4JnZtoTeCqTdwAXDRzjWgJ61KZ8WZdww6nZXRnM63h8absLQu",
  "key35": "34eXjJrYKHma2AYqPMP4X2LdhRbpFtw1YNhZDaYXh1nkpBN3BcP4ay16QovsqZgfLeoQ9n2Tn6tRQgRJFgsLr5Mz",
  "key36": "cuhBse28N8Yr9ndPDxmbjrjHDF63RENH6npmmKQ8aJcd5uscnfxCRCHDJPabbZQrcngBKBMCoFTAreTVjFiAFrv",
  "key37": "4EK2Yok2t2ja8axyo3vZdRuCb9qWe8ipDNaBvfm7HgSBmuBwGbXV4LzpANjM1DK2NdTbrnJMvzR5qxZtcK5XdVJk",
  "key38": "tFFZv4e15dHLxkQB2aZnJmTa16G3TWaPZ5SL25qzWVw6bKdrk786NDMSGdpSyZgP8dWHb8JESQrFS2zp8p2p2r6",
  "key39": "2TGF7NAFfcEbcsPdR9SW3Wqt3mipprbxaZW9oFZtn2ptpu7yiMbFWd9vqX8a8CRjhQxiF7LL659h9fthAozWVKQF",
  "key40": "42htkwvqAEyJsz6CH5qf9gvahADHHar2icP4uK5FsQbhMfNTmocmVrMZpmKirbFFYomExpjnyepuqrYP48UmPz4n",
  "key41": "5ZE8ZyRJNmPsWZgk1GZmQX63UEHpant12Afa8en3uc68vaoqjjH4K8f6MUpx2Hh4XqGrYg52TqDrqWQqmTHf7cZd"
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
