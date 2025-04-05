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
    "5gqQwvJ57oytAk4zWcoZ5MFePJWbSkYP1WaUPUyF8hPDk4LrySwPSg82iPH8wp2WTWKXtX3H3bTGjA9SeRqtYq8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eUFkFHNitmDHmqG6jHEZTtEXfkX4uHySaiUQ5FaT3QfpZ5A4bXUc2YyfN1JjBYkRRm6JtJZG25M8dKziGa7QJRF",
  "key1": "rTYfiJ7TJQuz5YrRf1eDsv1cyKSUqVdcyAUNFYvs2higaYutb2JxXU7UNAitXpx6ccJccFpa3h6xP6WUV1tsYeB",
  "key2": "2PtGKy1Tu82oX4ou6S8Tn7KedQECRMv1FGRkVox4ga2rkWSHFc6bQQE1pezskMQPDdiRS7UofN2KtHkeFpyFn7dc",
  "key3": "Fi3rsacWZ25W4DdzNX5RAJkB5BfVx3hgsaoerZ6DQcT61PorB6hke7reaBFXY8d4TjC8XfBT1rM9EvSf93VNZ6B",
  "key4": "kL1E17AY1bYSkkwTShmD7crLvJ35uYMc2eJEPE38ho7knG41c6ahsmvsxLiPksLQTWs6eyx2CyHVzBGoN212WL6",
  "key5": "2ZtAR4Y2FchJZ9TaAy36VKQndrXqvFmRpDUhtDxDRvQTBj7TQfv4Nre4hFMA2RqkyvQi2cuHeFpQ89pGrhmzAEha",
  "key6": "y2MRUbevcCgy31w2s2nKnbJ91J5oLs2gmbyiD36ESpxR8qEiEW2PEnrHX2FZMbUa7TLiMLt8hxPqvQMy77STyMr",
  "key7": "2wWkJgsRRimh2uJUs5LRY6X57bkReeZ15rFkKoHrBUw7vkrgAdTKWwx4nzoTsycEy9qozvFmR8JWps2UhuqsL7Cg",
  "key8": "2oeff8xTBN8vE5DHSF28gBPCQXyAeudaf29C7HTXEh2mJBYoHyutKojdbX5w58doxHyicZdcr1AmtSiKLb7vaAoG",
  "key9": "5maUUJVkQrW9sDsPpx27VBC8mqBnnSNetKZJ9goVkMYUJH1CLFFRzr8teV8KRrur4KQN2thKqBmsqMNdNhpjiqm",
  "key10": "3JvobVRFM6bjBNUoqnF62bj3rW2GwbUDSycw7HnS1g1rXvf1KZUpz2AYB6v5UHRshfmePqv6Ar2V122MqzaGSzoe",
  "key11": "2nA1UVK5y8KTMZgJq38ssqxgVY1cD7KLzQy6cRLBzU9YZvnqtitV7RMotDyKLxs62nr3zauXEcDjftUGkUQVu9SP",
  "key12": "2UGfQatPdJCaMLuuoGtY3NhZFtubqboX86i7XfPFkCJfdZPFGDo9neeZNJBNV1gPmhpyfrSPhfWj2KoA1FJUneLp",
  "key13": "4ztmmFWxJHibPqH6ZP5eSFts8PuMdfYVoyCPVf4vCMGejoeHyb5WxoqFREnUuFSfmiTGUuqNVTgNWBswceeEBZ9f",
  "key14": "5z2RRW6WpQmfoUrYLTmEZdmRaKZgn2v8RPnYTwUHQyWS9Xj9U3JhHRvUeuyfCxagCAekPAW8h8ZLV1nYeHCvt3FF",
  "key15": "2QGeKZAvbYozGzqZmbhAU1ZFn6ruidCqXBqpSD8HNyh6LnRMpyzafCS4FPX46Ytao8a9tzJ2BxNWBuAk2rVjK2e",
  "key16": "3gntaZS9XMyLh7Tjuxj34WW5P5YMiZohsptGiLXCJpHX4GGVjs2giiay36favBRpG8aLVWaFwgYMh1AAKGkNU4A9",
  "key17": "2hnJt7i7bNfDALiyu52mnUWsRZB1bMA55Xg7zyC8ni6ZKuRa9h8pKQgUYCZ7ffreAVS2X4cgWrp6BRkkYPkcsBMe",
  "key18": "4297bsTXvrC4ckeVYLv8qReeS7tgnb3e1qfgpTyRPppJbX17wV7UvhU9Tg4fgMFyCBGJxqwYpMrGLD1d8iqFuQkt",
  "key19": "2sZHGCWb1ebaRxtDCCT672hqdcWFdBNhsWW56CJtEggWcP3fYvJWeP9qiYEyscpH5iuN8y2MF8p66xpxJVcH1s7v",
  "key20": "25YxhJmoP51QzGMnEZaCaNBacASYRzXiB1W9NQd1EnYot7smCuTzPXBoaa43aajarMvrzsVkBU3HhuLevuehY6pk",
  "key21": "2nfNLWFd369v2QaYExWjZQyVdSUMTB1GtE3eggg7oxAT7sYs35XC2DGemT9m6B3CU1hChA56Cvvymk2cs8aWazJr",
  "key22": "2k1EVHXNTfBBEvTbK9gpz9eMfghiWLK9fYFWZGaE5EdQ4J95F2Qg3q4Cj7SyCHo3VeutXVyKRDNHK8WWeNRkTYb4",
  "key23": "fdC8rBWNhYh2ufDppujmLzeY411LF6UfUjMiKMvG9hKusXnKAByabvcRxMwwENizqJYsJAMdrDqmZRkWSWPHFZf",
  "key24": "37EF6fas7fBqTEYqEC3M1AewNWZ1VvGtXTyVA6kGKqWLNLPUvt1tCJ4CSYsrSf1xxDHKTkWadcYqni6Z4tYbx9r6",
  "key25": "37XH3LuXzmf8BQrJmWtNgttjvVZv83cTggj2KUmsUPHjUGCupiU7waNKBh9zuEycwAK5MsGBwfCEb5ySMQ92pGby",
  "key26": "4SPcc3Q3BoL3trN85xak4dhKgjT4mBW6NzrzzMJKUoh74yxeS7S4NWKHg1SE1nxvxxbbdXdNNHa7GpaiyitPfAyr",
  "key27": "2PnNwKCSGSgu3ooWsc7wbPhTCoCGwvnjhvPQjbK3Q2kKpnvpLbUQbY2aCTcBzZP82qxiCR8iMPDiy5s7HnAQG5pE",
  "key28": "63mMtQhe6ez5okc7Ae7qPTVCTroYxXprtPVybZ3FpRssSzrDbHVUeTh4pvbUvjPAt6mQvHHHzSRCQgYizKZzV7aC",
  "key29": "5LfvHFu1T59A54bV2Yvw9sFeTMsMBS9E65sUEe5h8gFhLwkgTHXH2SRkZuFxRLhWGJbDPsAaKJruZSLXNKB2vc99",
  "key30": "4LX3ZXdgpAPMhDtchYRuTUqtFCh84Z4x4dPjb7Di2xBdkkoY9qXxjewqrVu1912Mpzgo7mA3AcsHnHugQ4ruQTJQ",
  "key31": "5Vj7sFH54uCpeYYEckrKRLhS84PJ6ANmfZ3YBa1afrm7RY8G35Hv3LbGzJkSqYxPyR6AnY52y3959LkosCC8Lshw",
  "key32": "5C81Z79UB8vNWR2uPga5FxHMhYV4TvcR6Rg31JSP4rWz5DeLxqaVqEGFG44CETL5xdCrh4NjwgFdHdmB8CTDMqqo",
  "key33": "2M6p3EA1p54kXbUJ1PpURci1spMFTMU5dbn7hcfzVs3wCQ7M9uq2b18MmA9nwiNf9c1zKZT1wRjAjn2zS5jJRWmH",
  "key34": "2YmaHiyUio1og7TaU5eAJEshf54sBmfCaKpiMTBTd94WjUUQiBss8KNSRfsaDMMVChWBk9TAKCay2jPZePzxoTWp",
  "key35": "2q9fqXkxtT8wGhn3iYEQt9aj9vptHyEM8259JfAvYiDZt2aPAiLZGqjYCxDYS2dgPy9H92iZ2LS4wb35viQRxHNu",
  "key36": "28VYYoXRTvEMiXzX7p4css6EPxpJk3G2RuYMBs1Sww9v5FzfVQ523GmA9Uk52QVCMbx5KKm7LiwFxPz9a3wX5J8x",
  "key37": "4CZRKkwpKJDe8VDQrB5a5YSmmH213XkM2HPzoo6bMtedPhDUMqLzKk6mH41CyHmmZQ5V7CenhBGFHbHc1SabTxxB",
  "key38": "3q5JnYMRwhRyqXLvf5J4ibpXQib4yNkUNKYfZMeqtgvc7Hsr4Hb1XcJBuVpX6UEfp967d9jUa9uavXbsN7tDvgRx",
  "key39": "4aLpebL9tT6hqy2JdzXBot7uyDV8rvqNzco2fzpCAV9FEXENd8z4KoqFxZnoBNNEyPQ39jxpXW3HmnUYvyQvwajj",
  "key40": "zyCGnFfQBtv3z7c5vAvY6GfD4xdEVNEFHaJQdese5CExnbJNPC9F9syXR5exLGVyD42kwYWCY4VHjy62Gy5gpyj",
  "key41": "4kh89k8buuwaJfR2WtjxjUoZx476ctyLm93mch84r7bjBq5mAYsV9KNrHhnzojC2d8RHCDZdEkWnrcEPHN6HeZ6R"
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
