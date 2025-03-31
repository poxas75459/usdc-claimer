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
    "DJHHeSkfTYmYE8djyiEEKLYbRUDDJDT6hvwGuAFBZEHVzbi2TJqpij97ajkgKKHYfr51FGUyL3hfxGkWmZncDkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BDpzVfRHwcWyGoFPemHpThuPoz9MRLAux2mq69jqAqf9oKW65VFGoMfhV44EEVdB9WcaMRS7F9eQxgd8Kp5EZB",
  "key1": "4vXvoGnQCj8vyuxeNkVvb4PXfuvLzj3MPCJERWPjTkKFYSEXMkXqajBDQ1GxyTeffig3hdVAnmNQwpoiN5adc6nH",
  "key2": "5iZ8D9nF1J3nBKP73K17nana4QQUEHJ3kx5TQGxpYpyLB1pS1rhvJR8VZXVLPh1mGitrzcArrvfHqMNYp5j4symq",
  "key3": "44ddgGCSSbLcBz3fkDRnJmKmn9129bUHJnSvkRvPCC65fyUzZX9fyk2fZS6mPviwwNUDcEcu75cConhhQH8AFL2y",
  "key4": "3oNuy7h6k628scJMnF4ndrknkwNeYi8TYDLuDDPrq1Rk9BC9TdK6VAjAPH9wnG3puiyTv9RURBNccyKUzzAEFLds",
  "key5": "5vKSCf8UzjbfGMUXmwi2uirm5nUaaCE3vjzBE5wtiBTvHce8c1C5RfRE4Zog2fVTrD3V9AGS4gxDmYrYEUhJAmUR",
  "key6": "2422dXgTHgF6gozKbFfbjdgKebSvre4rxqHSo7o1rZGr3D3XE4xJGXhK9aixRd1CXD8PtMdgdQLKG3PJ5nATqwfr",
  "key7": "4f6w2wm7tv5TvFrD6e6JQ1WUEE1etqoQyyMZVE9tRdndNYXELorQK6EMoeXzGb7oPyuLCq7CZoL8QQZhJNc6yY49",
  "key8": "4myKJcAX9btk558ukcYPzM6RtHVLmsfQhYFqnc6HLMKemo7PHh7Tau6GkdBTqSnLp4RjzEycAbPqKxMN8U8wSp4r",
  "key9": "2pvT2BefxkqcfH6iLvkm72uVkPkUdFAzuw6BAtLQvriVTLpCbcvRpRwrTDARU2kMYLjiJ4kKMf923kVucFterarg",
  "key10": "hX9atNGh1LaJJHC3cMY2C5j473FCku7CqzzfYoGvkkN9q8Lnz4k8cvbaEzLZCyX4T5bhEFpcBT3tiMViG3zDtms",
  "key11": "3JXXhJ5433WP1CHkfM2y5YuFXwVKodaCKKSw7631tXykWTvmdEGYC1LYxgkqDn9qnuxDDYMKVDWJNPsGZTDyzX17",
  "key12": "3V9QNH9G73q9m4kipaRbj346Ch722dqcFNUjxCYARacYcYQa7XGK5mPpvahkvLDo3cHYntRPBHFjxNiN7GTeAR3X",
  "key13": "DE36KwajxitRSxnbomozFnCNw6rHtU7uC16x9Vq69hthRZSE1NXG4W6suHLeKbf1vYEMftXH5pUEjSRASofXdwQ",
  "key14": "57LF5cAEY9yRVhYHjqhKaAUmem38ELjFT9CfsSeKPCV1MMhWda7U9AY8Ur8dy79A9YrJZyThypCSnHbcR42Dzy5k",
  "key15": "4L7FT52JAUMeCSwCPJfaAcRnwCH8zG6gHSieYxYJegzwmF1oMDMyo9hGH3FGFQ38tGGD5RBAjQavsdC57rdgEL13",
  "key16": "24VxARobSRuqnPoZ6LXpfdFhnzLMjPHdHs4TQ23VVpqQtEzwk8dPG2Ka2WAomxC16DR1P6rANpKy2SCoy7PHGHEz",
  "key17": "5jF2HJDU943ocyRoTUuPbFJaBgDXde2gFhARJEasZTDwjjEKkyj3yrNZEe8YKDajQFZvHF546ULPrL9U11CPsERQ",
  "key18": "2MGBam8o4SSsjbzdFqTrrYncbukNQ4Lah27TfLhKoqpQeeidHhfAu4JwFjvdC6bP1823ReVuzdZ7Hc5sm7ziUG9D",
  "key19": "5XJUkhgWGCgHq2uJFNnMe9PfD12Wz5rzPj384oQv5gQ4Dc6ps7HGC7A5zV9D7EE5xCCx9RRi8ALAVTJ137B635jW",
  "key20": "36hyLyyLwgUJLb9g4JVDsXkNRCuTNdW1AkakuphPNwLmPPTvxAJyAR8fdYPUSUtNnkVq6eyBk3djQy3ntsdDFn4q",
  "key21": "46pL2NaYJBtNdd232BBdGdgVC3zyNwssnoB6mVsBBqeTNSoiLrPW16qHjRAtpFRJx76Jqrh42T3rWsqce5gbw1ri",
  "key22": "5Ao1GfUgY4aDn14B1VzrWiDe5HeKuspQ8oDQQJ6GioDykJ3jJL47xFtMRSDH49Kgo45mzc5fypbY4QMFyrnFbkcM",
  "key23": "64mSBKDDNcXChuwkJEd2dutQLEedgU2s18d5E35ScSrJiZ41juxALnEpCb6yipD6wE4MDR93NRij3PjhF9KAUMVs",
  "key24": "2ZdTwqo7t44YJbBZSCSnHRTCp5vjQM78nEHQdDjGLvMCYb6WCwgoNp91GLue3Xavgg5j7QtsXC6vRu6BujzmaTa6",
  "key25": "qq4D7a1qh4uiJVT5zgAGMtvbEV3wTYR81vFLRiWyU81w8pfUEdiymmbeoxL4KQLUDiXnnBFt3axPYKe4NbtUqeD",
  "key26": "3se2FcLaJz7sWwvJLdeZ9MpWdVwt8YguhpESqa4A7c5BFWmcJn7mnYGTojHegqxxf1pChEESgZj7UMZ5uQsTp3Hy",
  "key27": "fHJDvJuiNCBxzhjUwvKqwwToLgCXkzoiW9RshzJmctSdC4Bgihr7vjDT7ksQGoCbpNZHs8L97g8s8eK7WFKqtsc",
  "key28": "5Ccn55wwTBhADmb4TJY4RzWqLXZfVXMWHB9Eq3j4zcauooDV8zHn5CPXCN73bsXM9A7GPCE7mm7MK74QmFg7bJYp",
  "key29": "2SLPfupB4TX8AU4j5zk64bAxG3mxZ8KMXrFodskM6iCBTSjEfywwFfr6K2gyqZcDefQ4f3wnKG66adxxAnHC6fGV",
  "key30": "3RA6gpKpUKXRt4xh8soJzQUkTCKr3WFDNUWpw8tG42zWrvCjbtbrmbLuF3dXBvNJJtrGye9tppPjRjKENGvmGLnx",
  "key31": "5sphXTP6GGoyGNtktCMyn6S7sfdhejryt9bemLXVqionMEeu1xF1vdf4av6DKwy7itnJuPVa6jYSezUTGFgA2jk3",
  "key32": "5m6RXNbKfHTQEAJQh4N47UySR23tfPUmwk72FUsgs3jz5gkqZBkmsFEM8erXvj3UcLWTqSYrfFYvX9QLZy4uUJ67",
  "key33": "5sLrF6GSSUNZxyx4xg1naUzLK6skNqabe7ZCjJZxf3RHDJBZjVqds2fojUpTqPHytPPQeAgqMtbcbLoJVjbsFM6k",
  "key34": "4dd89fYHoXRXWJwwWVFyCp59vZh7oW1t3xCM9FCnR1SEgZc1LFdYUobyRD9Yn4qS5yNe5h49uHma5sc1bybdfTqv",
  "key35": "376piBQqQZpH61ZJttZzr6hbNkLfLJg1hapog11mbFUF2LXP6RcJ6khwYqjscJAKooZvv16nkVp3V84iZJ5Ppsec",
  "key36": "332QuQMGnkpXaVuLKL78tCSyvT5Mhe576hocpqmzKewmKCJ4FdEJDLGcuTTBmzbt4ckygdBsgEuLt2dZf6WX586n",
  "key37": "3PVRmAsRmuwPXLpZGcA26pbVGhHfg9RZzNnhtRYpH1UcE1Az2Wz1hJCaixiNJ771pFm9sg4XjpzPT5S9dNHnfUn9",
  "key38": "2iFoPCEso1rh4QRaYJqxHg4LhDQyXxnCabjahvfJnSj8MvVv78PnguxeH7nkTzUAZqoDpjyKxwWmUuRjRvDXBjQV",
  "key39": "4vauS4JYPpLywiBcc5vDuP4C4ab9LYEs5tPFzecfjU9DVhbcqNZR9BKxtXLfDy4Me2omkFagYaR4LwsmQ7mZjdTC",
  "key40": "3maysRhbC56mYPjnmbiMywy9wBTh3hZXWjsJbFnbM6MxgjajVhAVKSJwRqNerRbfndnzTdUZanYnWhkcjeXQQXbz",
  "key41": "2p5k5qhQhHxSPWzE9Ag4jbHzeHWmbbXhAJqU8SYYQzeonqz4VYiRatPkqCgcCYEG2hyfU8FgXdR5bcVDoxLagi39",
  "key42": "4r3LnKqmzigbEaJcgvj6hZxajF6kL8V96wZ5X5WtQd39njc2s4rpsDqG4WcD8v4LncKXZyKLZv4LAZJi4SvyLG7o",
  "key43": "3WrYKgkM2G1k3Pb9u511MbH1RDjJFXxxTu1LKdHFqkZ6eeRaqs8P1d4sERXQvDNCzZfMcHSc1KYKVmZ5MgWXTxEx",
  "key44": "3tr7h8WLbmHQBrpfm6MG2M4vh69gzqmnmv4KQ3ZryWTX4NpYpuyDsbVS36wRP88SjnSF6WNSzw5Jf7GGcb2j55dY",
  "key45": "44H4X2srVrgPPPe4tT2ohvfkSmRbKDd2yfEnF2y9VeCngn8kV6Pmb9y3bncGVGJwRASUiNFjWjoWCXTNthCdEmSQ",
  "key46": "3z3MyCYcCN6Yh4CbAfmPvd7Ebd2Wc5Sv6kraPLpCB2KEKpQ9EZDggFPwuj86KxmgSG9qgQV9H7j1barhXUv28saj",
  "key47": "3TrbJYq7cyycEmyaRTsGXPcbpsku45roJ8cpS43rQozBadeeyT64fvmi4DwRxFVzuyCUe9WNTKH4GDNpxjJYvmVW",
  "key48": "5tXLNGbrYiCuZPmCkVSBo7JXcqi1GfcCs53oLiaXeSEZ52Dx8Ktx76S55caWJJ3X2dKTNAF3YBb5DvXEwp6JZTB6"
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
