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
    "4T6aZWGrfcfkjb3fckcPW3rv92VU6ETqbYegcRU3MujVMaV6s9QtxPMvR4V95bMBFBEWyFZjy8m6VMXfnLEK3WEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vSeYWJ5dXFhdNvhu6nRLqBHuHNF5gnKhtVn7aAYyLBtxwDW5sqPYRXCf2884Cr1VpsBegvxiPteMEWQhpQUanS5",
  "key1": "2ZeRMJj7iRrsntvTSKqzv1FTSmn3jieAYT6dDauWDNYWqFQ89oprPw6YfY3RYkrJ5fSSfX4g9UYM6vfaCNNuetx7",
  "key2": "5A5i6DS6Qt4HDvvTgvYwR2gVMdnBH6EhBayX72gsg9kq4n44aCRJVhuso8L2LnNJPrFAY6VRka3NM9nCYwHwbBj1",
  "key3": "wAoLf2Yy3WDcKc94WPzAYqNea4kPMr9LZv18Aq5WLMLyHYXf7mQDQwTt57kK9Tq46HfiozZYcDzyyNTz1vdfn1K",
  "key4": "2ZP46UF6cm2Ls54cBai6AvLC7X5QGDmKpcL2YETSDQwhbqp61uXMpV3KaqzTumDoMvRgWMWbcNHn6GKj3M5948vP",
  "key5": "rWY7aBM5noxMGXMyEoieR7E3M2dPcxLsciJCtbhZ9ob2YXp9fC61GCYsB6PeqDBPafLSfartbecVeMX9dLu4gEL",
  "key6": "5GV7nhW7zkzEQusbQroiz4kmJnRrEXJibRkrhL2XCq1DqDLe5js6CNbkQavX92RJ7EiFajP2qntvmvoqhUWJM2ka",
  "key7": "5Wcu27tExPpmej3pTp9xZwguixxwbp5nvirDHo7UArQCBB4PN8vXwo48RKc1cNp19yjZ4cpgPuRgiPkMH8jiV1Q1",
  "key8": "4RuUmGaRQDvARggzBeqgWGSjsw4hCoFL7SWfiPQuYNY69diJPHkrAfn6JrpusqSPZVryfbYoZiJ1eaQDNpRYnr1A",
  "key9": "3zMGw6NJqsHxjY65UdUp8ADC1DdXJhhEPaevPwEmNyq2GuL36hNwj4VjnpT5CRXgJum7EquJDJR1eKMsFsMMLe7U",
  "key10": "48MTRp7tjTDYRPeckeqwfc7TW1LJXi7Y1KCdaCL6o9rjBZ3CHyQUYpGVNbJCwjPLgLE7yDjUw7bvuaFAVxfbu6cu",
  "key11": "bK63BmwP8HqZSgJ6SsqCDYWeexG9BEWFL26zrH75Pd9MZZQbHVxbhZL2KQWZ2i4aPhiqFYSiRYMPuMkwRn2849E",
  "key12": "3eFdwy9WfaHFb4AttAh4mF5UM4365L491mKiQVVTUaxbjK9sdX9xHCMNtR6RZK8c3esVjVqow8fBoh4ZqCPTbYs2",
  "key13": "zNSrm2hLkuDChHDuBpAyk4HMVnQJqcVfuVuL9bsMbEHeNx7tpiiAy3tPh8XkMVXWQ4ea77kysSjisw38eto67VC",
  "key14": "4cdgqiMDwmLtTewaqNRx2BdnvwHcgEL9GZBj37T8HACaEkocryCVoXWRuHwVDn7iFkVjkbu6BjAbGuURFhGQFcee",
  "key15": "5i8CoGLZZAsK5dssqsvYjJ7euE4ykjtSP1S5kNVJTVNCCsNWA6n1oBQ5SZBRGfpRSsvrrEGdy1MRtcKemrzN5wQs",
  "key16": "xcrs7eqNeCuWGZk8XiSXhX7LdUUVBp6u4rC3tYnYqiHD11AV5bGYBh3CsSqkawLfAmQDxJTbfZxf45u6XjwwcWJ",
  "key17": "5KNtwLijFDbDJCnzEVMkn7w9961otHMpcU9Za6cswM9edjpcT4DCF2XdMwZ5MLw4XEgACK2qTr4emwPYHoV5Miq",
  "key18": "2mYPatFN6kWk5GRwpX29vxQES7co6BgLHhqZrCMAjDxTaXPWWrdDd3nwL8k1hbq7nSoSaHTPVjesjeLrznAfrh44",
  "key19": "5akrqRDBirVE7NQVheWxWe7Mpc9TmsK8jECbJQrATCC7B59FLbGRGmLp6pL7HXqzUhhUfp6yDoab9knKEPQLX8kU",
  "key20": "4kSAPRpq9HjUzD87axSTRN3xDMVNkSLoDfBCR2UuFhTAF6m5yJCoTZvXXGFrFupHUP81pVfU2n7gPEKhZVPGXCLN",
  "key21": "4JYdMCFSAUcfUWvpeKq6dDmBPLgNDToHWVry9tm9DeNrpbrsFqA61iVio7vACbge1PxJfA5zpKXpvp37sRnyHHNh",
  "key22": "Yzj7cR5gDbeUJnbscx3BkxEdh6sgukt5fxS3JCvaZmdPgpnLdJaAmGHox85m3k9WuoJrQUMGt5DbKyBdFfgojdv",
  "key23": "5mQAdTGsGin8Ze3qWGSQegTU2bByKHmSNbgNKtwryQC7XSRUvwW3uKFXBhwAkgbp4pVE7oeiaL3asqRkxPN1NEr6",
  "key24": "53rwsMHR3RFuEirXG8YMttYWUHMd82cSCDgWwAnaMhEtYRJuub3UYCYujVfJ1PcHR6LC2xA53tboAigQepLpXY18",
  "key25": "2Vxhj62euubUQVoDu7VJcF4vgreeJtm7MWrRdx998uUXhwUAxCyYg4czyFf59rTd7Rrtg3Jic4q9nAQ455eaDcaD",
  "key26": "oY6UahNrTni6Dqq6sBRqqq3cYLtdZ1otkrZaxnLDYy9y5asWLcAdCLpY6w6j8P9wnZmL5Kevbum2LDxBEpEvz7K",
  "key27": "3V2kuyztN8fuqtsKbXwL6RPkg7HXMQXUKCHR6BrhA7padC1ogvVzQoppWjTmU9KUTiCrmtR2genZX6UJurkr5he8",
  "key28": "4YkLN8nBxZdvquNXb4vzHj3DKLr9QRMKEZqVPQpghtkCJjvoqCGHLYMqs5Aego9qLvn2SrLKvBozi5QbTDf5WWy8",
  "key29": "4PsnXsYN2PuwWwiqNebup8c8oE5p2C87FoBuTu2AG3ypSfdVtHvMaE4HygAWVZKDWGWY6LRQgzsHTKN97AuVksAm",
  "key30": "33ZLtGDtHgVW584u7itX1E8fUW2UHWYtWkgCbYx2UCuqLS2i3EbnGKESvF7m4c2hYuwVTF2kbnxbbvV4mTiWbkFY",
  "key31": "2fbbhHJnEWPQMinrbWk8QuNJYD6u9YLbaEVsd4kQxt5w5bFzBd36iK3skPzjBh6EeQZrXRr7sxXkTox8USn6KDSK",
  "key32": "5Q7QjE44dtVTA3kq2AoZan3qfi598Sfr2njvAAdoSASPtrutFHhQosGga7wCdCuG2tMtdVzkzhfLEWEmvmczz9yY",
  "key33": "63HBoV9kTmosvQYKev8H9d2gRkmYTiYAG1dEkVGzWypaKxGduGfqdSHUcciUL9Q5Q5NuBb776qdq84ueE7iU3PmV",
  "key34": "3oVaRMbhoQbiMet5cKNC8k1HeGfEJVb8i8VUpxMgFWAjc2RDv4N1hrinqUsuvpAh38iKLg3bQWe4wDMxRz4gJJYF",
  "key35": "5w4GZCSmNcsLWCBYoj8LoaUe7ZwGqx9QQ7cc1tKCmv7fDFrYk5UJtfT7Mgcpz7bRKRFoLgTHTEAaqE2mogixsQev",
  "key36": "2qHJVKGDEYm12rdryJzKCVnZ3AGRJZGmCDR6CtuEx44gU947P4hbYRWAT8EA5SBLtgJWXSxS6VbA6jwusHKFPQe4",
  "key37": "5hAxWof7p1zGrS3bNFkfuLA4my8awZ9o5DbtqUmtPX51LMtizngQ6MY2i2ruamAQVCCq3pnarWL5vLnJzQXoYaCv",
  "key38": "2ZFFwnSNDKq259ZiRf7R4Sbe5FRBkP3zzeBAXwXVQNEeth8BAjkQU6csMKjd7CK5ae3SWpVoTB3YSJuzrmjpWjzS",
  "key39": "2yoYQ26vcbHLh4eGiFupYiRbKBnJmRW2trog7GemmnBoy3rGKM73Lme5F6bXymf6zPL4zFZUFHvsFHt9gamLiADk",
  "key40": "vcC5ujY3izsn1FaWMEZQQk24zYGySLLz3mzhn6UEBk9QESVHtatisnnBuQRd31Vdc5z32sDzjisTZGDH4CzusJz",
  "key41": "41S5e22E8M8B38UwmvhHnMh6BzJz7tmbvm6epvNtZPiMYmcLdJTqp6hgpPZRkyArdzRv1eDGxnPFdrsm212RMLSA",
  "key42": "3WfpNrZNz2CeHMFwbAZeaPacRegQ7EBwMtMQr86Qt7WFhU8wtPaccrnz5dRfdh86WeRWjNHSR6bk42ukr4Mxavjm",
  "key43": "VqJRZ6sRjmyucrqQc9N7gBBGEb7e4gqBUgg2Fwye6UuQHM29yx4egfF9cC9Afyw5ShEWMD3bcn6GvJYbedmCrYZ",
  "key44": "4yMDrCAKTtJpoK7Yj1whhiUGJkczm7heo9qf6c9M9UrzPimi5SujxeWoy3sLQK8gnmJkpnLmf7osDTPGnGBaxoDB",
  "key45": "5fdgEay9FMaoLHqfZo56ZtJeBtZ7u5oy1cHfNjeVqpfLKZy1o9VPLc1vXqyhtcgjMD28GP5K5TuAJ2xrHGpBMb4u",
  "key46": "343qDER5ZVL74iX6U9xitMdTNay1rUgzvXo7cfFY1WZJP5wKottgkUtJKEtkM4Y1EKRionULxdm5TW3SK5wQGTEH"
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
