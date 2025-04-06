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
    "3hxHFm9xhj7gDysJKvkE67T8TzNsZGP1Q325yKuSKdgHd2QST21sp2xKBiuBmaGwGZqd4kj9Ae7GforuUQVxfNWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CrYyJcnet29F2QwJ1eMnPs4khpQ5Nk8CMtaohUubGp2QzVjQrqgGMdTBn3amaWqB9T8by146TWm5GbhEL3oZvNE",
  "key1": "2qjnYXNVRoS8JfhRu52HAVdideTr4a3d69wYRQvm2wwayVGjw573qZpjUBMjLbLHvek5vCPKtaQsQzaCFtUH6MAX",
  "key2": "5TVJPdU4BBkZJZfnokYXME4GFtByXhZeiyk5nE1YYWkcz9Rr6KkGpJCBF5VYhCQTVjVskwcKgTiy4rLJMnbDgrKt",
  "key3": "4a1ZChhr3DjiwX8WQ9kTVef5rLeiuge4n2aKPQ1pUfwTUVSodPycpJ5A5tc5ZLd231ZNYQxwdhKFskgo3QCFMT5f",
  "key4": "5wxkdi7QEDyfqZWx3nF7ian48VNCXGjs4Z3cYcPAQ8sxMqjXP5LMRsVZ5eXRXYpKHum9eM93CrLqknThnjCZViSY",
  "key5": "3yXk9Kp3cE3Re9iXASCmq7unGJ6bp6sQtmxLNbmT6FGRu87Wadm7RwgXgftbzd5Adn6WHhmbG39vnLiUrBBDeAD",
  "key6": "jf59pSN67cuERHDBgYoUaRAWVtbHfCZtduZWU55SSnY2W481wRz21D8p6qyY5moSyPmS1muEu9DzphKqczw3mtb",
  "key7": "39GfM5HJaGLLV6DL6jqeUwfsZHBWA17uxpyAcRZ9M9dKwC6yLZdZiFGNSEki8L7EBcWQBJRF6hqr1xHwiukKe2tX",
  "key8": "2DG6zjEaVNp8bkQoz7RhHvNgUhME6CwfnpPgh2RJmaezvEnu8N19TBZejfc12K8MDJK1B1xtkyqdnbRb7AFK5mRx",
  "key9": "qn1N4Xv82PECWZXozBrmeUpDPFQBiPRhKcRbBcTfnc51Xsw7WhuJ9Qc33pD87vjrugbDLYNKYRj19u6dKzNYqRF",
  "key10": "4KZr7LRw1BnZeYgaD45yfwQL1PX87U513B8tPuyJampLaAYzWxnpxv7FwehL6n8wEYb7k7wWS6yNk3tELaP3zWWR",
  "key11": "5KV8gH8mFppTnXi5WAa9FQ1q3bzmGfA3A2tjKhKUZ1Z8gJyW7TfdsCu3wxKL3EGUsVCQ7pEBHkjn7rY1BQRM9NiN",
  "key12": "3vBU8J3MpPxBxWznFBV2MpDHxHs7zogMyozrP74TXjzrDriYVgqyktMJf8jQ7g6VXyicrZJJ3Dbaix7CtcJRcpQb",
  "key13": "4C4htmLFahENn4dxNWF61AQEwm3t7sSXRfxNP6zzseTtVqf21NcDW2cihCAitZd9bZGvaEtAN2WxBgcvLtQRuodD",
  "key14": "282hR5P1upAiCVuUHR17nc4NXc3N4rZzJHgmxkexBHTsUpsTBJrjHtgdwNAUYnF3k8c4XeUcsyRKXwm745bfhw3e",
  "key15": "5WaoTxwpudze1LJAMNYgame14wUqJpXDaVPaC4prfWJmXaU23x6UVEP9xcgtUWiDxif4c3UGPf2ogXQfrct8NTMQ",
  "key16": "urMUHmKDkeGrB3W2zij5Urc8xk13nwwDWAAd3nhYUzFU32FQjms9PijeNTa6Kw8gn8GBAv6s4Gf1DEEGs9aayik",
  "key17": "NJVfACN3etASpMaHyiCq9fXKe3x3AUBkvU9aNBwrn7rmoA1bPocGdCn5in1gWVTAF3aVY8tetRM2AcjuwdtZqGA",
  "key18": "5pepraY5M7bmuNVSE1exm9d5hkaJoEXNy56DyYgCmvr3dejb2ffyVxw7NvkbVivvAEXPNws6cn5iqQLS8nmd21wQ",
  "key19": "4GwDS43LEjf69vRZ87Dg6SV6FLXQaJoozercj6rYU3qQLv5KcfzzjTWCpb5Fq6DtXkxmb8jkiJ3fSz8VkfdGkQyw",
  "key20": "QhgztyTnjzWKiPdYFYCqLWenNe44YEGAAWrBG1h5ARQG5SGascUCauKTrvBPzyPB3vXoKX1NgCgL431wgJ6HZmM",
  "key21": "3cN67ZjV2TTs5h57eaLd7rTpSf8NvSVryXuMYFWPVEgDJagBEXYcMCuGS3yAQKDbXTuUmGg4vJykHYdtkQCV8mS9",
  "key22": "4sLhKHY2eoJLpsDjcyztRBXd7qosHbEhhQVq4kT8NtDMPCBEKkae2yL1YMsCsCsLcyb3AYipirVwgss2xTo35e1S",
  "key23": "3erQbGw9YPLktZRCZWDvj7H5nPiKMYmbja2QxEEh4DGWnkDnUnd51FQ9e2LfofSWjn5iuy2cWUadUUmYsLEtzAGw",
  "key24": "3b7ckMGaAnA1n3baoTVPimE9rMdAYW6EKqYCo4A6YJz9qpZdtECSWomyUJYPgBLbp3VZJ8i9Qx3Nt7T1XNmoEwVy",
  "key25": "5eSkjyNENuffwFnjHZV6V4fzBG5egdbiDRLX59iNGkaF5jGgsjDbr1DZYVDb5Rh6aLtVqx83PSnPDfUEETUPeCYo",
  "key26": "56sXBBk3FS4EgFtfmSAfWAix7Fy3UJLeLtWQ7zEyy7nKZKqqHnnnbypA28s8Mvr7LuBrD3zUC2mL1jnbDzJSNdXy",
  "key27": "58qfg9Q6JH4a88LrnPe7NLZV6GucHKEgzjREiYMGNfM6m9nSrSwYgfmgRxPnLRzJRXgmXJUNugm33yTQFtRFf3iW",
  "key28": "5Q7LFdnkhahKFrUYRMjzRZxfcVXviCPrttUfVPfPnXZmaDR7cNtQvg3TS3BrK5EZa66jbow9JD6HBACgrAGk36pp",
  "key29": "3uSUoY45qPzhorjsUyvJnASGGTszcPR2GKcrCaF9M1BBXwaP4mDhaEA31Na5wgL3ShQE5AGR3tRuv27mSzUJi67q",
  "key30": "XqRqiSivwQjEvkFeq8w9ScYyjeVHeGk4WWcESN2vfk46BEQ7Q9VLiLZTTTv8G5zyjGqkRKDf41eS3W3nS2TuM2x",
  "key31": "55JM7BmsPMtkJP49TozPQdos7sdCtS77Wn6HEjJ8zhJiKvCnWtoCeSi94njpufSQNWcvUYbsTMBDWb4Z2BBdfqA6",
  "key32": "mHXkKZnk61cTpFGABwe4McCX5fDWyyUzNhMC5CXm1f3cVMZ6k9FqTPkx2DCKA7X1aaius2FtqRkCMDuDRFNrkYN",
  "key33": "2YDWuVWLWv3oYAZQn4FUDfCf2N79sFCKkjjRh1h7tGE37Erb1WVeLuESZPjGz5uXwvrX6NVUe9EzEQ7REVh76tsA",
  "key34": "27nC8pB9irnXqSXPxUvRrBEZcMEP4a8kkJT84vVkSygLGfsNZS7e7yif9GEYxqRaQkcyBJzDomQfFS1HY9Ec2rzU",
  "key35": "5ryTFjT7eQ6N22Qs6opBxmkKpnndC51LQGJ7VoWze3b13paJMv7MC3JR5A3purzTk9xSJvwHSKq5tB1syTK4xNd5",
  "key36": "bQqXek6xPhhkZEqyCgUY3T3kw7H1kgtQMUX6vxmMZ5YgQSayxEqaHo7kcrmeXfmgFXz9CmQs1wpWMVZ2Nyhhm9J",
  "key37": "2rktnf6fEeABHaHBUzbYkE2CtqLnPUDr4Riog4c8p9CfycJhpGb8Ei2zvaVA9rkBJXHiNeDjJhjRvYpa1raj1SYJ",
  "key38": "3G7amnnVYacGWcnQPs4fjQ5YDLS5iANg6mcd151H6xg8ysgmHY5DLJgnSdF7zBtUUYh2d8UNNsMSKa88dHLWXVN5",
  "key39": "2YjwSgUz1eHyXAMLCz8zmHFT6dZD7Zrnf8N28gB328fXLRNJ1oEjE77To1XwmiLZrTgDEzBSdAAWjpSt38LrwEdw",
  "key40": "4TDPeL2wr753zfJVuTkR3EK1bfvsgeDUkUdDhS8JpvkEZqibMQNmHNFatznhNZV263yngumpWC5TQrdw3iveVFC8",
  "key41": "2gVztaeNVd1ShbLp8YFm5U2umzokJSq17bdB2n8nJY2PPtWQ8P5fbg9jx3WhPLXX8fSAZjmFNSrFk4BVhYg1zsdr",
  "key42": "3LpduPt9CpcWrXzMbyWHZH4maS5VzkDUXR1H2Dm4DqwLouSdCPEBHHJcY6MidQK7RpV3iWLoPjpG8EMCKMkpjza4",
  "key43": "2YbyjYjXLZ2sji8j4A5dzn4JvWroWR17NWKeCG49tupnUrYypmS1GvqaVcnYCMLgY9X337FmA2MxPMsmxuAC5meV",
  "key44": "x5evPHeWvJVB8VMXy6VaR1us6HcejB7dpzd2K4jDEBWKXMhMeEPTm3RHSksS8c2V1gXni4pYwASBPaJHmAsPgpC",
  "key45": "2Uoo5iN2sUYofkMuapLkMbSNsBBNDmwSuKvEGPNm2X73Z1dzNrUEpYRDfb43nTrNSBMuhHomsfxy2DPKQDScnQEs"
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
