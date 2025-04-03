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
    "2nN1Yuiu5VP9BGAUaHiC4KEvUBsQi5SmhkHM934cb73bLH238hr79r4CRAjsNtKW3uqM5QK4BGdBAdH5BUyaPHeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RGS46V1XycQphJ4nSpgSqdSHykht5mpa6jqWtfSXsKw6CkHW3Es3NT1uGijanDXRtmn4Z3cHN7p7ZAkEHbcqobm",
  "key1": "2F8cJ51hHrFjR1ubXpTeUtJSfvATnt3Nr1LaRpa2T7grgoREtPbNqrcc5o2giBmSb8HkEzKdH9gfj4swC7JqWVSk",
  "key2": "4i1VtDP3PkthehsUESaLRK9cBQQuxB1zFhkVWqHqCQ2zF18nTqvCjWB8hVY1WvmMYU27gDPVZC5MNnRgtYjr3AbJ",
  "key3": "5Jvma2QZi9sZxet5MpPWFJudbfjeWu6HGP2uhRmkwnuhZXmDHaxYEkvWdHiVgfD7WVtVsfLnLkjvmmBWGuSanTpw",
  "key4": "5RsxChXJFHwchDdnxooziBT618LyEZiJKJzzTDnX4FxKJxA6R6wxoBirEQ1odf4v4vWgKnCmuD8HHRq3gbtorHeS",
  "key5": "32F14aaNEtrkNXRJ35uko8PQkD38w1GYq14SvBs1NYYKQFpCMCriAXyApUkbU4Dj9rYHpHNZxPw9oCCJgabBViMR",
  "key6": "UpdfCWVMDja7yWKnpx8NhZSk5RjPpsxZ9NFfLVtnD7iLPcdYvvTrgDJq4JQxYh6PtK1VCtosjh4uEHfPsfshCZZ",
  "key7": "4QKwxKG72jjhos8EhtPnmZBQWszZNYM7xWbiLxSJwzyTHsXfZhHNmQYS9eZDqQ12zgZQkq4fXGBXzPVpkXEDUdhg",
  "key8": "4dX9WqKcVndWcSgYtJxgd6brivbgFHiEWHsPgq3heSByE6QR6jogCiyYLrmCc4Xdd3FPqSj6BLxHgycZrCd7rPju",
  "key9": "5yMgsh9AHaDVBrpkJKrJm9c8DyGgaWApdLsXaAVTgnng9es3EyBzukP4BMFt5Puud2ffYWwyz2nRmn5ct9ME1Dyj",
  "key10": "3YugSDKWdQipAE6BuvpTzTy2xHx88kPgWZy1uGo8VN2rMbgDrkbQyvW8bESodNzYZdDYpVLTgfFeBe5ymeR8JhV8",
  "key11": "4WZVoHbw9j1uhBShThE1A1Vy69ubFA9QEZMuf5kioUYs58cMw5DgQtNZMbGBhXMAqcUYsgZzzjh67io72VohWbrJ",
  "key12": "4AcG2N1T2oC26wuPXnKBjA4qtcQiVQaZWcGX9ZEAKvYy78rfEcV69d1sGvcUmrdmMwJ2Tox14rxZ7spQHs8WFdgv",
  "key13": "47rRKJL4LjgoBM2vkrvhF8Fryq5whGioZftxGTupzt8ZDkp4Woj7afunrDicworRye1eGAQ5Kb6SbmCYYKXSLqHf",
  "key14": "3C1r5SFDSndnE9JeoypmZTJtNNfcPsXcJ8Dtud8hXtF5H7Hh7kBHit4ToRLQAMtkGio83AHbHbGAYK15pbs94geR",
  "key15": "4KzPv4MycmKjr2KWv9gcnaGnmC93yuFDg4fmc3K7utkBAgrSiggKg9bJGbSAnokAzgek9MmczhUs5CKweQvUuA6z",
  "key16": "YymnxcCAu38ApHy4BhVxYpcJxAQ6RyffirKzJ52ojNRkyPsxXvfCxzLxw2bhUi7kBZHkWczyP4pDnCxyUwewrDo",
  "key17": "5S424NZ3m9SNQffuUZVd4rcesbuQAsnkq9wCWam1EaHwNbKeiGa11wekVbeWEQNq7HgwjC54ufiAcfCoQn8oZ373",
  "key18": "2R3njydZdV39wMb5PY64BUyJjYgCuj7KAmV3d5KmH7fbraynb1HxiyTJJnzZqYZfiDBf9A37DVrEwUMPuEsoXaWs",
  "key19": "5ZXg5Dt2hGtmediLD6Mhqkwmbt7P7MPfX9G8VLZF72urtNFjiR9X6f76ap2zNHFZRWPYTchVg7WCEHRbXwmSDmHA",
  "key20": "ATxS4stmco65fLpE2BmS6LP5fLHPnDMfYZ2Z1szDKvnDgQmuQPqf7jhrB9fX6A5iRCMgKDwYhD2XCtQWMoVWyQ8",
  "key21": "64UpWPDc2TANmyTB76XefQsbqqiCCsGsWVeTiM7X9thYNCqxccDEA6j6aG9svo3W3po77RTtbaGuxdBh86uLG47u",
  "key22": "28ASpLmnGCYUaQCo3bZwvBsejsRG9GAPepwrDX2AjN3YyJpwtbwiwoP4GEPcXrRMchUoeNU9tV2o7QKmZsdEznZY",
  "key23": "2fHHiaCVkCAeK7jxoKqDkdnSEXyQW32BaMYcLuK58jJKEs8R68SvzgHPTEWEGb4Up5rqx1Tgm8H6uEvTC7bXpEud",
  "key24": "2BLd3HZXavznwLdyUPxUFdAobk8t3Up6zUYNfSPabu7tARubrniKd6hivEXVSCAnRFdSgoTKB7S37iwC2SCs5m2W",
  "key25": "54fJfoHqQxzxgXSCyW2cJXXoXCUHLgRHGisAVvc2mEpFkVZf29mDtivJmjEXQStYpbpLL5aeqX9cnH8Yv5shvHRw",
  "key26": "4EbjZHuz4K2WRA7c7SGR6Zaxjrq1dThTCysi8PFsRBqqaDxmsNky7Dkm4LWpYBUnDGrmvWzHXj6hyeU69xw3zShu",
  "key27": "2aq52r6KW7tc31ggVocCFm1FUdDnsYKPzpbwhPTBCjcPEXo7aiuysK64J43fTp3hdQgnTquuYsUe8y3Ur6L69Bod",
  "key28": "3EMwHm38ovACngv86ukkC1LxqTBG2C9uEG7YkaWMQRkDd9VeC95HJKB2KKPXcMWftgzMUK6aJbPM1CJESf97CEDn",
  "key29": "5HSMZGuj88yWWfUxFyjMj33nVwsKLsJe5JK2HaTTKT8XZNnN84maat7DTCqnykREc454RzzywaBKLZ2ha9UFfZAX",
  "key30": "3jUehq1Eijp8yvsXk6aTudffmTRPwqJNY5mwT2rFR1SqW2cAYQp8EZA92LhhPWVE41Tt4oAo8vvmEQjWu17pTm6d",
  "key31": "Ynkgs3KhWMKRr7x1mDb14AFG6ypYVzJSy4cjib1MRHv9thKRzaK5TmTL8MEUWYGNbMdB5QPG3Ki2TYmjXZ8wtT2",
  "key32": "Bud5RqrYs5TKzMGbcGExcgcJ6WuEPQoQ8wfXVG4k5hTp8CupdHNq64aZL2sjzRxSyCNUXG8Wk7XGosa38hqGqJC",
  "key33": "4GJVYMQxz2DtEN85DJCYxuDPYoYxmoPveJvgeDtS2ipWJaxo9ReC24g1KHK7Ua2GTbKrQZNpe3kvqgdnHYKsmpBo",
  "key34": "2TtY9oiG38aP4sjaLcK7Pxfy9oAenuBuSiAcPnxQ3hkZGs8XZdkcFM99PEffwtL8yBYEu5k8fMLEUngrrVTLrmQX",
  "key35": "4nfNwUZhfFnJAyG95ZTUHpRXwB7Tn7UAy3ehnt1eHp81Rz4RmDzovpd3hgc5EPjmiAz9MFWBbYGRf28p1D6RMKLq",
  "key36": "2G2PD8YNVGbKSKqwH5jRb9Yr4avUg7boE5kEbymnWEznSU8VCNVcjqvwuTgLBhvDsaXNsqs3cjx8988tL8rXywWR",
  "key37": "5MpwDGdkVqaiKWvBoSCnW4UEnkQbvukNH9oudTVeudbwRNQc7L8WR1D3jR236FBm7GsyYNYimKsrzZUtZiEJa4E3",
  "key38": "32msSaULBACxGuVRPyeqT5VifbFLiyAoGBtfc8s5XvnMP5AmtqhkLbdPqKyKGYzEo4JNfJ3W7XyY5LsEKVR6pbAt",
  "key39": "qTidPNPLjPMMBi8Qp7fCTrxqbDWkpnDTgo2tFXBppVeBXhhNnKrKoNMHCh3qnhVtu5H174aviDPD2ZEreKNRoQJ",
  "key40": "4JUEtDapGk9aSTuFdgWT2J1Qe8zLxC1SUzJBCtndNFVzZpz6Tm9zLjfL3353QStQqE3g3bUM4dyBSb8vqptLvbHD",
  "key41": "4tYpDkPKj7Bf36HZAQQviMAj2tRkRUqHWtv8abFotjzt8PqDugDVNTdJb95wWCktmNqsAt74sWfyymYFCF8DmxDZ",
  "key42": "ViPg2zjchMHh6DF9k5wmKr5dqqaU3u8tts5pon41q5Fnkxik9pF1xhAi5rfguVQPBCGjmoCiMWAbFiLk83C9Mjn",
  "key43": "4jFgydBPxk4uo5R53uQhHpaJha6sjkyMBF1qsSMXGKw76dorCMLG8qVHm2jUx7ejV2kRRGvX8Enjd8UBFyBFH1uA",
  "key44": "24bDoH1j7jCYhDVUSvCEikqLbKyFpcjnvcuvRz6YFpJvFQT135PceYLQHZEzoZuGxYhe8VX2q9dabWdJMn5dzBUK",
  "key45": "5WwnrkCr4JogUTnBR1HCaqocx7wXxu9MhLkLLPjELS5B8GnD3qAQTBVGEzTsau4qc9nEEYbpBwnKpYrWSeCXiAv2"
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
