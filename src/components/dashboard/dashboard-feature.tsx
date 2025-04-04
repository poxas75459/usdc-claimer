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
    "4UUTsGYn9mVtcR3ARjVEmzneRwGRYK9tiyBFfbFmapq4rzAnRpgUajPEJD72fPEMprBVpdqzRFpVhrBQUbRqJryA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g6PXrFe1Jhv8kQGjPcH47CSsJPL7q486RbD4VpxyUb6n1gq6wwjdc5XZji5jZnnJ622a9EFUiPLzPHzdYmDwp5t",
  "key1": "PkZaRrFjYwxD8LaPBsQo3kCB5qzVqJohL5bZRMbpU5XHUdNfQ8W5moUYiwbEwAyEowTpqSa9VKZuSvV6vsuVMjb",
  "key2": "41HV4tjnY8BPj83oQTdMENhEiQZpFZ46Cw5yeSBMmxvSN6vcqWLu2RvdG8TCRViKzxwXCXcpDsWgtipSUy9hjTae",
  "key3": "4g52JGmc1WJA2MSUnorJ1cbNp9sA27Fx51fBP6dnvhc1H5iWbKit2iL29RvaUtN2wvq1XTkFX8Gr34ZgMGGjNRFu",
  "key4": "2CqzQrDFwbAmjoibeSpb3eRe7uBoUQYkgDMnBXEr2i4tNYNTep9eYwKwnotjnRyAni9SWuMm1GPk7nuUXRNLxSk4",
  "key5": "2pnVDtJDVegi6ofDYbJwr5DzaN1FiTu6beZ3tGqm2kDKQHZ9kPeP4VY7JNUVFB47PmXi8QXKAbJsAWrn2UusD1ky",
  "key6": "65AAXxRXX6hgA5yfUvUxwT4U68CPBEfuhPMhgHdomiBySFE2eP5WvhDb859s5GzJR2YeNJqF3Zp9wtiKVti1x2rE",
  "key7": "21XYdW8GQSinMdSQDH8zMsGMZ3eaDKAaazb5TCfH6c8wAWzzwKzkZraMiHU4y3taumSDAYVDs6qZ1R8UV9n8GQuY",
  "key8": "mtoztR7kKzJ9GufJweKhtsSqRDBxN6bX7k7YzCLY8nzCEbs5NuFXKTrjs31mTh4FvMZooSUQc5UGaYYFZjVyNVD",
  "key9": "3yzqLU8oc9w7NcAL4Cv4JZcDDPDk9Yd8QZUe4rad5ZX4ZsfjwYNSgfzEE4EXqYLymr5byGLVGqixcSosVpyZPaW7",
  "key10": "Es1dYELkhYqqgbqNVbe1Vf66b83xs8Kbh5zz2gETsug8frw4yUJ6syQgXM4hx8ZkozxVkZMc5L5MUELbzLhWn7v",
  "key11": "5n15pBgrpAEdnLWtiv9zWLmhCjUgpd7iu3yw7KbmGqHUiiH9LJFsDb2jAfuhLGMJWtuwccxq8MbV3j9AwNVXmSoZ",
  "key12": "2Ak34YUpJbz2FPLD1NYwfwV4KiqP6eGY4T3UADbkWmHvfS8FCuJWhGmJchbxDGrRH8XYC9kXtBrm9p9qTbgjAVWG",
  "key13": "4ZrkLjouzSJXRwvvFUwQh6kMSyBhqtUMCb4QLPFMjz1kdGZBzM2sV6hM8ixxSEmr771NrH9AwZvxVsJn8LLv5LVk",
  "key14": "7PvT1wgmdSGePxsEfMxiam1VqQAHVeS7Z3eLTfxLmPJyhQxTX5XT6P2uEaCFCUdKSFZtcDx9k81UQUipASSfXgo",
  "key15": "5JcSYMfhSNutNgFKAftPpLfYjQxNMf4xG2XGuApMwk4cBDYD6eMfpEuAqstv7eZJ8h3SHrtRJpY7acrWFDoGoDMc",
  "key16": "3wPESi28r4NFuaif7LWF5xaATeTrk81ZRCS3yupZKwaGHXa8ayZtsxtNBrkfqvX9RmQVcwR1DDMBRykmUx3Y8ZDb",
  "key17": "5WZBEiYJUmGUHWGnLoEf5AChUiB7KZp2eiC8dKFqeHtAvBxr8rfWWRRuFhk8tJi1L23m7rhZZkJUuAwQLowdPKj7",
  "key18": "2W65jd3DGMZgXfhkPKKkLb3JZMPdTcxgVmEki6YaNbYr3miXFgX2DugD2GnGvCDTZAZVd4ZQBxa2cLqN7CVYLuka",
  "key19": "3a88Mb5nWK9r6EWonLYxzRb7x6suo9WBqydBZkdaHpYNvemuQq43ZnXeTRFo9PgS4gfLM6YikTKxYddUKWFpV3V3",
  "key20": "EcVnbUVaYpb5hyS5ekNKrgfjg59QswhSotDCs4VJRRjgKEGhPtKQxbhvA2iThHPWJJUrXp66zFadwsKvEMhrfQA",
  "key21": "64kt2ti8FpceUwkVZQTqExZVHHfVu78tX1uMZKGiEM3Pucy4gsFknGgAr4cUPmfhTNnB6Gm1iR7R6ZURD3KygTJB",
  "key22": "4SMkKt9UvSMUpSQJRcWihSm2mGKe6NbAptEv6fypmJ85Z9kPhdz1bhMeh7MELc9zzterqPMna24bKgWMczVtinCQ",
  "key23": "5wJn51TNUvfyZxD8tMi5rrB8cnjh1junYndj6N85kezW4vdfEjXmtSNnhXxLQXRGbv7hbtCYv6zGiswJZUf9ZeFi",
  "key24": "24atfY7dq7suC7qbkKaLUJ53NoRzfnWnpf3uMaVSNZmdy1GjwNzfYhzAYN86VrA1PLhfyM63TBKH4jiczBTxSaTE",
  "key25": "4qbjNfhfnXEjLRCzX5Q79kQErrHXYQxScNMZgtbi7taNE7V33FvHDnmnkPmCbb9ez5qXNoBU234KP8g3Qp5Y25LR",
  "key26": "2tJckBfcv79RHn3ZyKCh27dVt7qqeh4apoVyb8oQJuSZmQNWJnEWrBbbb58q7H9wP4a5fQoLb9fD2ChiyKVYnkeD",
  "key27": "xbT5i2wnr2J2rgadSdoRwgt7V3i5PEjF5KSmPMP35i2rfv7XDwA5eLVEv6LpcuPbuhAQSjju5Asj23AHY2aatrR",
  "key28": "Ajq3knrPcTR7g36xKVuNoDbPAVo7T5avY9DFSFYow6b7ytDtydWs9CayNXfetHy4epi4kECWw1VFggb3DU1eaET",
  "key29": "48AVuTAfbyWaiSXSgw6KTcFQuKX1K8n4kXsiE2iqnahgdQ4EBRtX9DfAoY9uC4PuZYdYX1usH1iCVwMJiQyNngtb",
  "key30": "4BDYnB4X5gs3DU2q3fv7g7KS1wCP4NFPGmpjyaMbarGVP6Cg6sc58wNM595phVKGRqaWGMsd5UbH7gpkx8JS8W8H",
  "key31": "eyL9m9a9kgGd1U6jGdh2adv88HAYmSM87w1HNMvKzu9ZkSj2wU1JJVdGXpAUjBJf4VLgi2DjetDC79Q23znRVwn",
  "key32": "47dbY3ZRfxFUvFbAQqb4vFxeu8BdQnwGVoG9bYpQL9x6qTy2c1dYoLjoJeFdR2uA7VvEsP31XUJM6tqFDrvT5Pxz",
  "key33": "3eR2rGAKfhScdvnXPsTAPzuG4n21nXznoikRKg9TCW3HQ2HVxNQ9upUDCCAkgLhPehuyzVzx83rSXoQ7VGXrNu2S",
  "key34": "22YC5vV4HHeepRiZLQPKJp7DsL2ETjcQ9imVVZ6nsVQGzPJPU1dY2WajsHVyZqLieqgNUp3wuPyW88HqMr77ayXa",
  "key35": "rSEDfMSS9iiRqJVwchLxJPGzzT4GtedYw282MnCDmzSmw5QMqnJEc6VeXYCpzTyP1ALcyYkfEi5cUXUCTLTrqmC",
  "key36": "xHi7VCnqWyJZ3MA35BzDQHzMkwfmKE1TPFiugLeuxnhVg12xsBXV9HCsLMnFr1voriajeK9g5zrUrgsypu9uWGc",
  "key37": "5Fou3ggdmByp914PL5T9Sz2uxqDGEHtzz5YEoiyHL92Zpjq56cBW2L9BgKvZTibNkM5XWcQCZQ2dyoD1uf9hi1Dp",
  "key38": "5oUsswMsUNEwLoVvHQxkBy7Zy7QWdkUPDHdhS1TAWS3LJviLVhACPHhmHUXkZ7XHCQGfcH1M6s9PfsZBWLxkNjaA",
  "key39": "5ZuZdw2YEva7typn7yJRoCi4LrtT6FyE2E7H2ANZXqscF81Br844bQQVBRVdaVnNsey6LtLmopCsZMkMLvryV3Pf",
  "key40": "3yjhAdxAHSgWxS4HpozTW24eGQ4NVyuSmKs5iPfx5F4YrLxgGesG33oFR2MNTHDhGsWvgeEmSG1rutCac8XNMLeD",
  "key41": "3sY6FRBijUZ1yTPko7KNCu9RLSNQzmyB63xQa16JvgFurd63UU3e1Cn9uLRMkhPkKTpyBpZSJwJsmDEZUwtp83Qo"
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
