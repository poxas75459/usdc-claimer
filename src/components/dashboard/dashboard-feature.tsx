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
    "28uV4Pq9FBmEHBg17DzCwotfctZcUK7DUsSkfQ7frRzFdmwkWwFbJsfutKNR3D8ZUdYunUCYycRkxEEE2LkZrKeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfW1UVvscfHzYtcdBuit42Y9uMegecGhyhtHtP23PX6vk2H8gLjb1CaRU5Snwd8V8XvoBRbXRj5CamiS1BTSaZq",
  "key1": "rCffobF2gW5Gim88hfSjkX9DMMZdPC4frSPNSbe1HyARRDqJXdJfmvg1CNZQV8zjGgRDqw3MSpUJrynnxHnLxFE",
  "key2": "3owDa2v2QXaaMGMgzbj7fRi4EbhT19Pzk57yvveGwLGenkMTHZyw3cF59C1tB9UpbtGQ96eTrjezUzHYzEY9jX7M",
  "key3": "3Scig4EyprkEY8nzXUd3mNr2hf4NA9TAVvCLuPZfMEoJ5osjt271KZmxfH3Zc8fAPi6oQtBu3mbjZ8CguVCiA6b3",
  "key4": "3nCXoRiLbC5WbMJiHVpYveDQjTVt1ysf36izEYZA4if8p8YXXXC5vKzy6NbJjyCZpkLKMhzHC1F1HnS7uiQX8iim",
  "key5": "2YraKFNNRGcxurLM12Cwzdnjy4u6tw7MQ5puadSAkHT1YPEK9xWYner166WtuWziL5fviQDjLUWMNJ5PLxxzcQNV",
  "key6": "5Y9Fi2sLDd35T6XXspua36RBHAS8gm3LjDweCKTNDKCcctfUAz95BQQpP6PgKf2eyh3U5XDzWspgzHh5zNrnSddb",
  "key7": "4ZCJrp9NM2EBsnDL4QwVY7cjXbWizdH3JeL8uei89w7v5KzAmj8FRadL3bqoVM64JKBSaReooAFg6skrNtgxd3MS",
  "key8": "3NbXFNDn726PrhxE4uQ4HiShqR4ctbgApzrdgc5xfqoEF5CfVP5JqPwqRE5bFwVZUNE8omZ2HqQjqCXfKJu9Q2Ur",
  "key9": "dJSStLSVyBzN2ygSnkoxGNXXXvWqNcweZgNwuG6niP3VUEQtc36GjXneNM5hzmcaBeiXn8c2jQnsnBFhPbFYYaA",
  "key10": "XS2wskjg4bjSWfKpdyjNCbJwNU57N96ZbKAEbk2CnF28eKaBSNzMFxLdThCncRES5fRexj4C4rNqJ23GEV8z5G6",
  "key11": "5PVHW4kXRYV3uXbbrJL9VgASbtMQaVYUJtMjDfqyzSuRBAfo29EQFVJskX1WeFtFmr84eZpNSNvs9WuEeCnUeRMR",
  "key12": "3DNZ55hm7ZkDEwvjbHkQJnfCkJnU7XtD9iZ9yrMEdzmoxJd2Am8RrzQdSn6BJPotFvf7Q1ufZ14yLMXrSAdy1CMG",
  "key13": "5cLfRE9Mw2yMC6YVy3vAdXXTu5d5ycGAmpnFPu9Ekxx5f33vr4X9p9wTouxZ8QWKaoE48x4gHUHG8V3Tgn8QAJx3",
  "key14": "25GuHiNEgW96PhhmPsFfB5G8aVVWMnfGMRNwJmG4bXMDMXkKHVTA8mKo7unsxbSq7Hki67XQ2Y1Uc5S9McXF9nL8",
  "key15": "62tKkspCvjeZhsCysnipiqJ13oWa3RcXp9xTPazu74fayu16HtxNd5GvSWt3CTfioKA9TQyKeJe6sTzriu4GHG7x",
  "key16": "2nMtZLoafoEGxyZCi5fstcvi9PcLNcdUZ1L1KVBK1wjayr3Ea6wxkzmikjPuFKKrcowzByDLLyoJLavtkcsmn2XT",
  "key17": "5cSDSKzVr2jbmc8PKch3e16vnRqmewCcPfXTk83PrvoAQJ6utifEhDRih6GAwUDDx4ZWiZ9sByxCXHZiqKe8XFNX",
  "key18": "2Ppq6hm8sMw43XKKDFknaChrGJhuMQkh1yTJ96Cqiha64672cdVBqAhYg7A41m7HSNConkRfw5SRAvyVoihbSXn3",
  "key19": "3p6iZuKQ9cXxHHHPhazuhxn3PehZMeE3h4vLmPwVhPuLLjfHxfBxY8yuiUV5tE5wjHTscteq8NFZM8bCiEjLhWxQ",
  "key20": "4ZKKoNQZA1CsELPTscTY4yVyCmdEnacpsQn6MyQYyFMjNpFeUfYF7p6enFcELYzRpCeq75VkQrbhHyW6ptTvWb42",
  "key21": "d9fqxayWS7gZVVYyBradEgNNYspAL4wRgLszeZ7GkRCRs2Ae8PpKH9rPCbZ13KDfdtFbNjSP6asDPAFffhoPK72",
  "key22": "21rY3472JHswnbEazSJAUeQhGHJ7N4XWjdHUH21k5jpisDzJ8XrpszL2LUoZGfUWWgPL5rU5zE3ZKJqFQXcqED9H",
  "key23": "22yArS6fmoPFyoNFixXCH8cFSZP69VohEZoYxeJLiPNPjYkTRypvB1gq3JVHsA3Jt4TbULyitSo3X6mGZTAqu7qp",
  "key24": "5HXbEEoPCyc1zN4kfg2zJBBxLLbjs7jybsQMoEsMEq9hmdmwQ46WDwHpKhwbpvf1SeMwG3iLfeYZ8WT5LQms4PTD",
  "key25": "YHB26r5hYVBDefK8gDxCKHXzmZwKJoz5QhwBsCHZTDjyDEiycPR17XZ8PwUbVF36eKAxqgQWqQ1fQrqLAUVk3HH",
  "key26": "3vAZaJswN5HHpNFshncVymLifVVNrLAyZ5dMqyayKdxHYi66hcmzZY7Rqy8y5BYMzVgaUT8S2ivLexKxFa7EkWcL",
  "key27": "Z3HDrBXrszTQPAJxLBRiAncNoXSbaZmg9nBrkakHtdYCu22ZRX4k6aJNGjrEYsAroxKJViAqHuK8GHxpaJhBPm9",
  "key28": "5Ye8HBHFM9G5PXuFESAxqdPu97F6KaLFbwjR97LRBo4to9hLJCsLKQTM7GHqYF2T2TBxmqPCN53Wdhgt6ucqybDg",
  "key29": "qBMAeCYeGMD4MecLD5H1hcz1jrYUP733WmzzD6MaxfpmZGtrD1wtPD1YQBMDY7SgXirHCHZNDqGtwC49YvRYwsT",
  "key30": "63UNpVDhX7J9bTrGUhS6n6Ha3LejGdMkSou8J2QVpTuMdZn5pfReQZkHJDbJTNh9TCeTCtP52M1j2hMwxky2PcAc",
  "key31": "2NwTFfJyZUfh1S93Pr7AKdKwKs3HGGNyyfHKr8i5uYP64QmLjzTzcchCenfwgvWYynVaxNhEinNvXkmhHfV6Kua5",
  "key32": "3tteN4kuZkKbQU8eFFBntp3gh8cnAxousTsVS44crTMLZB2kwsLVY4kRrz412vi8jmP8H6aW8S6b9ioZE4nWzacK",
  "key33": "3JVY1mvP4YTbmxWhuuGvxRqp3nHUgWhRG5uHZ41Sw3LNvM1rg4R1zy2wN8RPmNd6CRcGf26i3MMK9t2cdKhruUmy",
  "key34": "2rHoQ9xJZMfpd7tBCv3p1WiCZwfmaejBJdvizZybc4yhyFQPcYHKLJNswDRRT5G3DutB1LRA6JDCzBsV7FPzzotd",
  "key35": "3b1cgRBHZFDLQXrFrjghPshx2PZQiVCqg11CWSqzqfPwSg4ePihrPhK5Hwz2ZmyDCPPq8pYbzJC9YjnW6Ht7ZbbK",
  "key36": "44kKPBgVYe9pY8kbW2Dcn78mA5Qgkb4c5STCGLDSd1McLThiUJd9Sm5LHVUB7ugK2LLcVYm8i9QdVPXbqidRawjm",
  "key37": "3tNw3mehTGqzcJyq1F5PjvZt1kyMf4tq44uR68ALsRSQQMT37bAk4UqJws7XEpJPFdJJK87FtfPau1e8sqSfudEt",
  "key38": "2f6PsNeL5VXTvWepbSqo2hXdpRfRKyeeZQSpvZg6TegFa2idswgSEpujj6BM5e19gHRtjMnVcrPmGZoBpeqzF5m9",
  "key39": "5fKAgK5CGPGSsWMubmdcn8pYGcA38vxAGtvTUmoqscvnofK8nKKG9jgAmf4X1oPr9vfyd2CAqNq3175szdS41A5Q",
  "key40": "5MTzPRqRmGtDHKLu1uqCDJMpdmUBxs555pySoLqcQHKv8uMYLh3QAwLLw17zW22gd2JnygZDeexFA4wwFXZdxaLU",
  "key41": "rZc1HF8wurez6twTgtqcNZK624q9v8hHu5x8HwbyGTVxmDhyPLSjSetC1WkQtUPgNsq3QJ4DUeaURwMntzyhKdt",
  "key42": "3r6UYSCu1q5EunMDN4tNcEYWRPu93Ur2rW1XkiYbKx1rgQ7P1iKhgSmVMrfrzZsUydjpZXdxyj3F2JRuhan3mopY",
  "key43": "3Tp7HR7CxryR2byaTU34rUyHGiRoLUNJURNZ7M2Jzn5CywMhvA6wLkVnixQLtxH3deuBZ1LdrarsrdBZ62ikBFCX",
  "key44": "5tdu2BbdW9r63SdTAHm2BZw4Bt9UABBeKBezszDu8TZqZWaSVeRVgmjdjqoeTS7HRr2o6vg2Ss79KSqxNqryhBJ8",
  "key45": "5vEjyEw86uRiy3bbvVZx8Ju7wwDEbjt2tbmwN2XME6Q8V1y3LGYLu6Hj53JhRTAWvVPEWEv7og6vkkHShkNnV1Lu",
  "key46": "4W71MrZsPw9pTUnqVhrHg5GngLqj73XkVKt1u39Cbv9UqsVsB6vTtCZiDMbFiM3PBLjW333XmoWrpcjZpBAjb8Mv",
  "key47": "4ZxF3zPzaLiWRo9cxnYkubETqLN72RhVU53xiAMDAKoLdnw1ftL6LqexZdgSv6s8nBYcRu5pU7dEA9RkbrYDoDKQ"
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
