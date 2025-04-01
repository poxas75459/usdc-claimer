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
    "2ouBuVTCwzCzn7bjyQ7rcBjz8CUhMfYmwVTSeJVSVi2CHKHXMTDqMffgKWkBWu4snzdR1GRNtuYe9G9348Yo38Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PJyCc1Rmi6ZwepPy5Eqsx5GwAby9WCsFWMpH4Spu5aK7HmJ4roZ4Dms5rbU5RCwm9hXeugXJkgRqkVWmgt6YXuc",
  "key1": "cVyC7RUBJe7Exb1fTF9nfkjMxcfuQGorv192ceoSUkcWcNsaKhBf2QzuEhw8GbBiQ34nhvpLhGt4QpCp6WhrjcP",
  "key2": "2ikE8HdukQj4ri3y2QqJJ2VdsVVms8K6pZYNQFSPTLRgkcajQtcXna1DJ7mXEC45VsmjMxp6vSuaTaJsyLPPExdY",
  "key3": "aZWYkwyu8zGHNmrnb8wkL8sxTi3uZN67pjBLhR442F6Kt7UjZgQw6phZdsABe36Hwcsoscse6eie2Sxa97D18vZ",
  "key4": "47RUqkhhkRWgkrPqKiXhsgGS54M8y86RQY3ycVdDoRff4i6sEWWzN8uKfjc5Wu92mry3Y8mwyjq39NJsuC1aY1kZ",
  "key5": "7iSLug6WsNKFfu1AkG4sgr25gMX1Y2ngThnFMTa8KuhQqRFW946tHVTzg1z1prNyT1f4w4E1DgRn9ED8gKAk2S2",
  "key6": "4SnMrfKtZ7hMYod1gtjZbWxHjaVtD9Weo83Mqf63Eky5heoD3zrkGtLBVcLp3LYPRwA4ghWwcAnuSin9TwbJfDiS",
  "key7": "3UKsJK1eS3FnSAxkxHmy47SZZMHWHc8S61Km7qLQdx7t1uPdpfdtRy1acFA6bS4rHhqivenjs5i4tw7V2jra3vXW",
  "key8": "JTwiMNDZ491aRwkx2NS8d1h18fMSFQftMjhHYFEvg7p6S6krdQoGsBHG6VZxe6LTUgf7RNkBNfVYe2A2bV4yuwN",
  "key9": "37GpBzeiD7pXjwiALaCCQnv2b6uRVcyW3eVtqSVivB6G15D6dBYpvT5GW4gaNw1DnkjoStfvQfxPX63K5xtMpxKg",
  "key10": "Ht1NnCsLMT3Gt8u9QSsVULqTyvaKHNqnmGy7KPF4SLMowN94oKjNRCV7hjx2kzZM93LavozHyBv3hCH6Dh2S8n3",
  "key11": "2CV9t3zFrY6DvShAd2RW2gdMjntmRCij9exyrejk7xFoKCtYpVaVvpsR2PsEkzdw9sBkdEz9pPuJ6BDp8HLjcV33",
  "key12": "JY11Aq2qaMDZZeYUMDMbMyhjyMfdTU91ffHgPMPhs8LmJtDa9qXeu6BmSc6yGyeo6Vj29UCoewD9MqVmESdErck",
  "key13": "2LinN9kJ6w6DDGoHJw5FcULAeSinv9ss5TUTUXN6dMnRsGDBgBEuC3d4BhJfrQsRs6aWHDinaw6MPhzWNVii4una",
  "key14": "4f1nSqqWYjvePeuhNiomppWxPi9ED4FXcxFaaeyFDVWhgwxz3J598tDDnG9aePV5PPB2Tu1RZKtz96TesfZT3Nkf",
  "key15": "gnhexGYgfTnKTuuaGZ3xLB8iy6y5WSMKax4A8HYoadsSMjE5H4e85QVbc9fqXrnxwBvw1qPDp3QWtzmshoZb39d",
  "key16": "5WR1b35yZrWYizTShF96sZ9b3U9u4SfGf9cbMXnwpJT4dmQmjGz1PNUBYNP3MTGz1XrrpRratyDfvZVy4ZcL7o5B",
  "key17": "9SwG2pDmzzgTd3S9T8iWCB5cy6WTVwnzfxJ1SpFvKmhYRrBD9TaRshmYyEHTDSf7jbX91bVTEoD5yPngJjv2dk2",
  "key18": "4gFs8asz7UD6Pfv2yT3MFQRmGZmpmG5TQq52ANXXYEKSa9yNNwZ6DrimMfw3ET1hT4gqZYKpRrDbWpijqh7tyM7g",
  "key19": "4FkLhfXvu2neGKLUwguebBorFHZzK38tro7kC454jUTd8ezbuUP2c5d2Npx3dSMDwohGG9N9Ug9DHHgKSf1vd35H",
  "key20": "2aE7LznnXRcJQnQuHKYKWi28f748dT2BQkmgA8gmAZwUDJrmpcWeRpfcYyNmP3XTB7Wi6E6MmX1Ty96YKpWV2Wj6",
  "key21": "i4MacC81D7SoEGjncG768Z7jBXVzMgFpPHjHSSAPiKQVGKmdmW4eVmwMTdeH8jDxVeDh8zMQX6HT1VhMuUfvit3",
  "key22": "3S27YKAqrTApkzSjiUdeJMQsUfERdvtNTKFDzsTwVsAneLKsHX98DKu2aMt35u1XDyaiXRNeE3qL9DcxfLtadsCs",
  "key23": "TZvdRhKPjFatH7C4YsRwvm3PxQneKswkHBkGDCeHt8rrDcusBejfob7wZSFfAw7qqnqeyzVLPpfwHDsaw4y6kaz",
  "key24": "35bTm69e67cc7vaMm5NAbzvTP5YnPiMSCUdtZEXpw8fPPQeAYqFHobt2WT5CJvqTnvVVy9zJkU1oQjgPQbhFQr41",
  "key25": "3BBHszLk7Em9putn9gN1RygtSqpgM2Ykda7cwagQcH34XjahyypuVcahPTVaxX3hmrjwUcdnsF7HjTpTS9qTc1ag",
  "key26": "4tNQderdi6qw1JtcNLF4uQgHvPkDxEiMiyfoDwfDzvbCE6XSGzVGcowSTdUTqGPcVjhYr3GXWCrBW9CPgjioJgo5",
  "key27": "42LSpvsPpETb7TSz8df9arYerBuBxoWUA6mQpvdSfsRPMwWdPZhHgaibomzUnSckbNaHJGDT1BbHd5a55i4ZUrMA",
  "key28": "kXNCXwNMH3LsxnH24F4MsAQM5p5vMrQGi5GHqUWwPwCDYFya3qkDWD9oJy9ErJtX7oi9J3BP3R3FsGUqeBFybGh",
  "key29": "2Tvg9VWmiY9wdbVxbYWbiNV1fY5p2qBz8Zthv7F9oXHGDWt1Me6G3KkFRjoMWQ4fzqJfGVLUbM7JeMSDD6gpNpoX",
  "key30": "5kqkcZQjR1Mdr9efyHVBRtavS5zwMLwx4JKRPD2wtg7KyDWXWMw3iML8S41E3vHPDGPSM4ZdjdNw9enQMRo8mGK",
  "key31": "5GT2BtKJ9fzJrhNTMb5mnsZgv87FTsuKmHSEw9ceH9oknDDqrBT1mkmNw3TDH9CpjpK67qLUk6WDhPTHAe46yysm",
  "key32": "5LpZuNwR84zEK5ujJuDNkKW2sCtKPZHuVyPYyqiGy9PvBwpLK4tuBRDnyowEJtcArFRFjxmguGwiDuEfkUqnKEjW",
  "key33": "4xLEphCMuognw1pBSL9BSF1oB4SjpmdCYTy8jLF5pk8FVbPYC4nasKtmV3APgo7kc25fEY4yS3vVCVmmY21nHXQr",
  "key34": "57YDDnjpvkWuoNUMHc6DnR5HGgkgUeMwCurp6U7RB5hGsLr5eXne5hxagFrV9sNfNb5VRybrJXd6387giPhUVmQm",
  "key35": "4H99UQ2tw5Ank9K36fYL27NLv5hD3ym1y2eiwuv3CioPu5VSzf1rVSffjVSqzJZNwiMf1DX4HACeUd1ZzW8kKLLv",
  "key36": "2opquC1Xcu2zpU9kLmxE27C5vmmDNFQ7CdPCTLUCQpAxUudYRWt1m8Rfjppq8cNZcKrKBQaun7AeLrGJzVotRv2D",
  "key37": "2L1qeqYpf628PDKs5jh9dyBeBBh8hwJyrNps1r4TutsYKCuiaNE96KcVTkVnoFj5smi9aHs1zsrLJ9pYcAgjAD76",
  "key38": "CHBjtnjG1zGkEb5AL6aZWu6Zgfdt87Cjea8yPGQD9LFWQyeeLDFRELWPCRkWCwFPNKxbDD1kRf562WcFY4nUH9z",
  "key39": "4nbjnrbMCeeYUBHhTPBsmm1Wcv9XiFjbtnoLmdh9bhhXhRPust5bYQPxHeaQtU91vZLNbsDmnDnChmhEKJEXjz5m",
  "key40": "4ugGRsALR8Ri5eaixpGAZs2oVkPHUmWmT3xZXbgVyWSPezgmZxPzXdYFmVxdVtAgBj3SGgGwCgekuPXdFMhM1k44",
  "key41": "sBdDVv6pFKb3qNXueHHwUCuF25fViUeqagTFZNxikrBGUN2jEtBJdF368a7Mtz8SNYBeXt7pGuad7JkhiPZ7sRk",
  "key42": "3aZeHeYQcqKH1Akms4abHW86qfxWuUXw74zSLvZkjWYZSoLaERkodBycpKVRfFY45tcbDr8BPX3fEDC9PopjxpME",
  "key43": "34dzSY5GFkDhUVVT5eaNRP4jL2g8wye5MKSxtWB4DpAEp7LjiJSwFaiaDcUFJZ1Nj5UcEYtiCVeyeWs8zwuPuePw",
  "key44": "3Pt3g1EirL158bR3tB5RLwLwLtbN2FSQdTbPMHXTVkLV2B5k7CQ4eXNf4peaRgsJXAeQTMtKg5jkiGKh1druUsXf",
  "key45": "RjpYnHaiSAXbdn5MmjJgPrhXzKq3rv3R31sFTBffTfTkSVsdCpoYsr3QWaC7s7Q6HiAFdQatyKUqZmLwcm19D1t",
  "key46": "5ni7kugvrtitnAuhrTbXTSrn6zQtqnVEw1uDkjaVxcMzHZWHnDzwzgngTPBwDNS9H6Wrr4X7mtdeoMpNN2g9mhbd",
  "key47": "XkSRj1ahKxCsBPXTyWpSw1L7D2YnRY3UyHo49spiM2yQ9KgA8cKZhB4fy9c6vbnKVygKu29uZZDnUkjGDvzm9gL"
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
