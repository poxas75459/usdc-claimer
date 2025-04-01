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
    "5v7YrbF5jaDvE6QA3vFUvcZgvKwcS8SN7w7SqQFSA5mtpfi2k84h6wBC1WEfqcPdTBorYqEtWvvXytMEtLF4dbMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43D9Rc4cJ99PJ4bzZBWeW8dr4HGT226ArgboVBEy21wXqqCDJ1XGJPrmUGTnaMvbQRiF4YwJpS45QDeJeJrkKdCH",
  "key1": "2RWZX8B5VNNijTwydBeemgWTMHoz3AEkpZKq4zWf84Q9mAwnhKwdEV8FmzTxZpMMVoVdYij5tsmXWpBy7xniii7V",
  "key2": "2qH6gGd1f63j22uoNjopKZb3h3eT9K1vhGs1obcvc4BDAJMA52fhMZ2xsocVXF4YQFtnvnZvRKc5zJZiiREm3X63",
  "key3": "95mVepNdKTMiLGz5cSboXtwHojEdnkkvADYxDQXLPx8XRNReinSnAxUtFn4WJ8m39ocU4gAiXTtHGcvy5ykzMbD",
  "key4": "24ZawxeS5CUbBuACyWsYWfA5L4uT1rQz3g7vYgDH6NqEhdV7Jr2zvut1BCtAdEj4f2BvyB4baytkUSEq6B4q57sD",
  "key5": "31VRQoPHESrCYwmZ2rGsChWBhVuuecipufgwJ1NdPF13adc498HDstixUJTMZEXtWb9CzDcK26fRxdfig1jNR5o1",
  "key6": "2L7QS3QBkEMTHYSsRgzTFH6LJZ82FH6DoWzs6Cy5X6aaWd9jZYsZhewn85J9Bf5ynnHSo4ra7PLZJbpdXx63ZfAf",
  "key7": "sgai2jPN4YCiigeQGW8tuubBqDvF8KciyTv4f8wq8uRkc3PxRExkAMGVgMtMR13A2NYGP6TsijQUXv6HpCLAMZe",
  "key8": "3uWUxo1uWJu5tdFprb9xA9nAa3B7cvhLvaTQG4w27RgrU1x2htwAcbxF4t7KSm45doiz8p468ibmxosHVUXaHvbB",
  "key9": "4YEFY2zAChpKH5W93XAZ2BPLCqAucPEHGHsLMgDSXE31DfVEAbZRsqThupQfcoGvJo4nccshusUGfHExh4Toxagd",
  "key10": "2P7KxJqmabT23MafiaEGitcRdfjLEVK4aAEp66Be91htTARS82WEBGqtZPE2epVhCB5r3eANXnZKRxsSbUctkbpC",
  "key11": "5jQaVLA8BCybCyZD1xpD18gDqp5RCyFdWgRLof2swRMjkBiEcNCPGtpiSdd8EHHu5Ar3ForvM5mbGXjwXTdcsiXz",
  "key12": "5x4gPPrGxRY1ZY1xt6HUJx8yeRRkjMhZdC1KjDc5ocbzqHTyqTjeuMNSiu4auKfMXbczxew45qvaUQvT6Bnmb8r5",
  "key13": "4hVtCfV2aPu6ydjb8TtgX3GmYPva6wWq81ZferLewMycjimLa6F9b5f7N4jeSaNr3bytDzmZwtfPKKBeEH6h7Xfx",
  "key14": "3NC7rNBTegAJxVUffJM26GbdYr6m3xPNsJ5kAdAyxR4oTGDMphNvRGCccmHc6VmvFiYoRitrhUPz5nb3zF5rVwCR",
  "key15": "3idy9qKNiVkRicAu4sF9YLMdBG2SX5RJvVWNKA9b6bbs9zVLzFsPgmP4VUczTh37kjgtrFyTtoQa55cCSfctskHG",
  "key16": "2TU5A32FrcGdGQ7tafnifZzaRta6YGbdZUYADHLgi5DyjANXib7phPWYnUx5THFo46MTUxXkrKk13MMy4yS89xgs",
  "key17": "LzDgHYsv8VkgxYdXor637Xade9opHW1QEsNx6A9sLbhqfXGK2fk57kYqZHpiXcEzrnqNudm17GGdD72AVwkUVpc",
  "key18": "62mf5o9jgtYaKCwKGsMiYocMzAXWG2y6rKav7YkW8315q7sqWs7aF7P6ry3fhy4jjYfggTnNzUBPhS5ZYXPcxcpP",
  "key19": "3U2LzDejFthmfDpQ49tudihQ2WiGaae2y8a4XRkEU1WvQufS46ofvxxdsK5ggigzkjs7Wi8N28Ncdcsh2s2sHyCw",
  "key20": "TLvmDcoivrssTBiWdduFzrActZEvHNnyRxD9HGXTUG38Vx2nWHETpYNqdeRMvJsQiqTuSe2Ey7PtPxG259Rhoar",
  "key21": "2rDzi22TccUUjbg6G2WE1Y9br7R4HXhAXwg8Lq7dzXnKMxCSDaiyCdqo5nhtnzbvN5yuniavkhnmFRhHhQjet6W5",
  "key22": "dtZyDgB8m16rfeUiyerNHqzQDyWSKKeRbt7FQciLZtZtNixEdw1ijAKT9HBjkn53zNB3ozVrmrbRifagXjbRspN",
  "key23": "43tpKSPLC6BJqNSn536xdgHdai8pyhqSE66m9ELsS1WVZ2HFK8BFN9k6aRwVgoD67VpkVt8wS8MMF6ShCd3bkRCa",
  "key24": "5u2hPMzpoe2D7Nc24dJ6b8ZheFQhzgmGvxGzaxXbM74qyKNkkp7Vh41ozjXLFayFfWZLqUYt1hZ6LpjiqPBAb3gi",
  "key25": "2sfsNAV5qm3kmJTkkyznWhjhszKjTX3qiMYaFPiwkocaC8KBCyAogfAki9m1xsAdbzSWMDrSc1Esw9RUMqsTuQ78",
  "key26": "2CCYJ21vMhv6SLLrM8GbycS7i6A3hBFNQuDfouNM7BiwJKi6aKbddfJ27aHBwFoNgcZLvRtDfcAhSpfPn3NANLFj",
  "key27": "3x124aLTD1iiGnje5MyzS998urXrSWHCDRYtmYGXCfZXkK4bbMVNF5KVDshJh4ke4GGGe2zCB2hugVrXRShqAXgT",
  "key28": "3FwGHtU6F4HbMYAw3NMMuM6dG5635FhDm6HuH9nmnr9mnWGnm1HrNf482aSC4qvdrhLDsP3kETGwQQYcVcqqciqv",
  "key29": "5fLV7AbEtyGJaxusajA2814GW6JfMTMEVHoND6dMJ6Sm1mg5RxNeyy13DmBvXSRwXvbEdUjasVr1cZDKPwFavGE",
  "key30": "3cJrciUAyasqzaxZ8sUu42cSCnUji9gVv5xGHgEGfk2HWkF1pN2bUDLsPdfctYnoDxSN7Qj867JiFtYKPtytorab",
  "key31": "5VkAPJveixMJpMc3sfYJwk38CxtUYZR3HC7fxJ3nJXd2rWKTLhoRsTY3qnyWRWjiKefpuXvtWZjR38xXD1r8qEr4",
  "key32": "23UFJmits5DtapJyMgRmvLYptgLrVSs7xC3jo6LF34oJm4QBrSA8mqirjEbM54f1HsnNjEyTbmYFzPBGp3sYzADS",
  "key33": "3AB1QVJmam3esobyUMbwjut41FZ2FRqgNg36hQsYgGBbBikyLoGo8qUg5pUT23F4BgSckcNQCfUBYHc64faPM7Xb",
  "key34": "4zhucDNqTJrb9gCmidbiDA3k1rL31FpShDjyEcGTJCLxGwNpmFKwqks8r11G1xkq8pRHyTtMdB95qWqCBxRVjBA5",
  "key35": "2Di47RcaRBqKRASdaRZXC6XVVxbNqdAzJQu1xdjDfUhSQtbFDNn6kgrfuK8bzFxDQstjUMfBcLZa6Y6yfkTUw43H",
  "key36": "5Ro9CTFssnV8KLJoeAq3d2bvW1DGSBK8NQKZaJKL1d4Y8ZjiGGr3Fxe7rG4AytmGbuHKetD7cVfwhGVWC4m7Qx5B",
  "key37": "43dG7xCj9ojXpygA5LfZxk66vS3KGK1RFqDmixZA8RtoCkm5tsnUiVrJCgAoqsBc3uVcoHkrpxeW8U8RZEBvCa6G",
  "key38": "2CF1uBWMmLMXeWDPtPuR3MAjmjjsXtNF3ULkEXkVbnQgiEo8KTmENtrTXzYFBA8uCfbzsNgg3FiEm3HqostPn1gN",
  "key39": "Gz3rqLUKvmtye3TaaCk2Lxz6tXA3rUDgsaXndtvybUkn1y8NsyesPtUKL7MPr24QW1eBH1hDnCL9vdHAptunerd",
  "key40": "38pgnkXyhiBCheQhA4gHkhbpZRseJMptVV5L8mZqUc2HKmXTjBMePHJRNCCz53vmypgTr5QKczFnxwaEdEd3amyV",
  "key41": "31Cqx2AB1yjdMsE78fMXDEYaEDQLpFBJAJRUhodHm8z1EkgxNGsqogbwc84zCo2g6W4fizj3ptJcfgwjupz6ePnL",
  "key42": "5GhWKbR5df1oTeuobhEogKx1q7PVQEA9jYcZwGDR7HrXLEiXbxWo1ciBm5XxpUZgq5SLv1JDN2kpVbfH9JHfjKWK",
  "key43": "2ze1xhg3shVyKwe6R5KzNp3De58C4Taxz26GiRqSH8AaWsgogjZ62Vw8RJUu4vEfNm8bvft2yqUBpuC1N98dSXdj",
  "key44": "33LPuhyTVXWimvSNd9UEhpmBYQBkZz7pBmFaYtzfpMYJ7g5Q72PL8q2obH1Xn8sgJHhicszRcGJ4RHp3WiJZBqtd",
  "key45": "Ctow6EDz3C6QUuuAv9mcG34XkgHyponQKm3PND8ugy5h5ZQrCs4GXjRYTBoKJXGb77SDMwxHrjgEcHHpnUib9n1",
  "key46": "3Se6Y2HAXnRSg2dVg1MzgsphHyswTGKSzAq3rqH4REPQQdZfTvgcjDiQsK2D98s1KMMLcrGLzVNhbpG4jpViYh7K",
  "key47": "3fDLkUc1oUSh5XsQ192GkaiT8BLU55vtcesagxv8EFtnfPv5bVywYKpVmXivG3JiparFFsEojEcJD4UqRoVoNE5L"
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
