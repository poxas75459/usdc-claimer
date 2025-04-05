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
    "5cLdurNgeFsQZst8fjSHvnbuWeuc1kxQLYmJjfry5qvjJnGMMZQ2AmvRB3SKU814doRA34svtJJmcr7uBwCtfUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DvV14qKviinteZeRt664Mg9Y2vevv57Z674RPhU4uVkKFgA64HSfvHdhR3ySMx36wvaUX2f8wZhkNSPmzRPP65d",
  "key1": "x9DeuoZPVLN9z9CGDZyNZVFB1tdB8LqJAiyXPpSZcyHrmGPFC8q1AWHMQ4dB6UaReavNjAaHgfjBwvMLUaKfPD5",
  "key2": "4GovBRcs7snV3yjAZGS6Xo4XeY5kVV45BdXY7PaeVSuxp4fnSjbUr9ju98s5vyWpwtPh2ERuXf2THfG792GEY39g",
  "key3": "avbSdMvY63rSTNJuscGfYXEetYZfo7cTtyk8wL59CYu368emRLXVG4fg99yS6KYGKyP2MoCdXDwG7TiYAwk5pgu",
  "key4": "yoL1jm7P5vq7Wp1HQX7EopUBPjVqGB7jhBtifwVs8bLkfgkRevaMhsmC7ytotzW88uPyjoXYr7DDQFNs2WQ5wed",
  "key5": "k3qyLMojvFTA1zyVVEDruewujVo95qkYqusTxkJV3EvHQqD2n3eC7eMeisxgDa2bcRgsVuMCWDobceotJ8A3VCQ",
  "key6": "NBM937EJch11ZoAxjRYBoSSKQZE5LivDYCVPA4Rsj1ASAg5qgx4PJjBuK22bmg1WLNjJnxX6ePbzkvxbkXUVEdT",
  "key7": "2nw84EoDifuYiv7cG96ogbGSVUbR6TAoEGagSfdgvMhDbV2fCkeEjBigvgwZpuVWEzJXhXztMCJHMjTYRgehK7ub",
  "key8": "CMGjVAA8zJ5r3qwr1xNC2JMcqTJf6K6HJYpwyuzQ3V83fiPVAEvh1aT7DHjynBV7uhozNYuAhnKjESHho9S7NYj",
  "key9": "3JpzBCUt7rF9s5tjR22Z298ef6jajKwf1A54HBcARqCpG7ceWkhszPrYiENk6LTFkMzmbuFDMSLBLH715CRrSGF8",
  "key10": "3YDt3XASPynC4cAKTRPKsiSJf2kTfLc8ec8KzTJcSSiyLMe2tdYEAbVgMbFcjujx7ASsnrDrRHxu2GCXebCixGKC",
  "key11": "4mEEY4k1bBtwPK6WrUhB971TYXYHzrGWeNcamCMZfZ2DiagHEV5JAM6EWRLjhA2aXsP2vYwjEZjUwx9weEsvswsy",
  "key12": "5ncGmRA5aXEzq8cQ7aCXh7rZLx6zJuRiVZz4Nx3wTHJgJJ4vS22DDhUqpidrYBzfu4uQtvECp4MCwf9MnE9vEdtX",
  "key13": "MzfsCahRhvvUfyUyPVq2WQRrHSKPjeFSbbCkU9giTSTgo1siMJdyQjpp3Qfcew8PWv6EeZDqNXy2oPNoDjXkKRP",
  "key14": "5vhW7kKYijcTRzW9TQ1fUppmRUYo1RYVK4ZgwRZWDzNZ4E1Xf4iyTW7uWTkk48ZdBByBNGEsxhPtBiix8NDh6Uw8",
  "key15": "4PkwXUvUncygtbBRwQ29H2VKam1W97xrqR1ZcY9ycYkWQZXbjeunAUShXfpjBNCsnNpcKnhqzcr921nDHaRLDXqg",
  "key16": "57CmDrwGm75TLsetyxbMwx3yN7rLa7oBjfRgFVw4Nj7ikC6iWq6oTZiu2KV2aPRQDw7GVbxB5bETQxgEkVgfZrDs",
  "key17": "4J96YkcMVZpwPgCP3k9BR6wtHBPcEFTAoZ6FLt7sgBBYKz13H574AzctyFmpij5LP7iKLxGgzV6kdrR9iRUs1PY",
  "key18": "3nNrTYmAWcTS1HgaKEr8NdCtrnjuhzbsZLt9KuuQwEBMjpcgg8r4wgoMt9fDVxifjnmhJnEizCGLusvybNYCz6VG",
  "key19": "5pYFK2oB1k8PsiLknuwy47ZJzVKXDXmfSJP6HFr2gk1faFFi1rFzfvcGWZfaw1i9ddcdoc8qroLpJz6uGtcouo93",
  "key20": "NQPgzKYRFm9ktu6bA8CsyfEfQo5hvT642B85scS8mDjneHnt6fT5byUL8HdsCcRum9AFyqSyT5yvE8HuKkoVfmm",
  "key21": "5qxM5PR5JVBqH2BCCkBimZUXHBmUAPqRb1Jpe7GqjdU7Dm5JL46WcHzCnXqZ2iRqYn4fZtUHy71vC6axennCjY4s",
  "key22": "3UVoP6SNWBMahUdAjX2Z1RjrRryLQvfsSpbHG7ckZGwiuAPSRVsASWZ43FeJC4DbeeQ5ZmZAnVD62gWP3cWcDeKD",
  "key23": "5iZvFWkHRjyoAUuwaQRUYSvMF9WMH9Y18yHShLPDWfi9zkaf3oVRyPgwv6HdHphKTuc5YwMz8rkprBnxaHNSBZKv",
  "key24": "2GXzzh1TgHejSB8wqbjSFCejtBB4vPeGAf6uFZ58eNFw6oMQwD6azTrD1zsWHJVrJjBhZEnj4C6cgsTAxqkgyEHk",
  "key25": "n9JjAtfgZKDbYSsESSmVvNN1sgetCLCCKTaPAkNEVSUqxoUiyXcZxtFyYVjEETgcrjjUGhiDeeKn5iUBRaUTwEJ",
  "key26": "QcSjbx2Wfv7sNw9pUqRWDRaz2X68uD1XMWU7F7jf2oPJ8gyuqdov9biNXM1f8P7ZPr6kQXYkMnbNtBCDyYjPDnW",
  "key27": "5b1TGiRnbX7fSJER5bwZM8Y1BjgmU4MRZjKks3RY8aJujYncfv96Ce9zVQYsxCbgXu4sSMkvyPyDp3bpu8ehFMEU",
  "key28": "3hKgbUS8krPSDNQ8Fu2u9dbtRWPwBxdQy1eLRSEarZFfHi9RCcTx1kxnxAhZbFhv7KtedpM3iSYs9wJZCC43bU1b",
  "key29": "2sGmaPh2eg8RPL3r4AjmexqtT9bLU2QLNod5Rp9LRrmsgL6kbkHHbcexmKuMQsmd7MzZgNHST8b4r8PeuH2dwnjM",
  "key30": "4RQqbJFn3p6L71Ncwqwshb6AYEC5TCUBSKRB7vT5cMwo2JPRDzRkwrtzPBw8SDdHVCNmG3Gn1YVCFyoQnMWjgYie",
  "key31": "4BVLxG9F4HKx2FBWEBnF2daFeGsXUdyK1FC4NZ5G1qg5Xsa87kVa2msBX7WKujoaob2a44MLk9YPzRoytLA7hGha",
  "key32": "54a2ueSF2tTU4sy8fx2R7UxhZw5tcotxKVwZD2Dv4NF1cFsrpuKyuMZcaTef8kPxDQxPovTsTNYGdA9YXzUtU1Ab",
  "key33": "382wCTohQcj9ScfBaGaR3zY46AUuE79qojNH2XAYPvWaHZuSbGPt6jm5SHQe4mZghzTpSqnfxBXnSxFVnu6yvDVm",
  "key34": "5zmwikns5HnyyYx6AGPytT2hQwqwy6qCZMbP9T7gpPZBBpix2xmQH3Yx99DvBKbcLeiBSP2oN6h3edCoCi3uNYDF",
  "key35": "2jwQBaGdLvXBXG19GjP4YM8MGUZYQw8b9kR59WzrM9WA2Sr57wrUufNkA8JgkP4z9PMTnKiwaEv3JUBr96jbuBmu",
  "key36": "5Vw4kRAUvMjGuyRRLRkxT27TiABzCzHgvKEcQcEM3k1kwm2Ancq2REPGPTs3jsX8HimKLFiMt4SG2pThEw8D69oZ",
  "key37": "3Th1LGucBvuxxfpGWAK7kdAFad5Z7x4wZs6iKGGn9JkLYy32ip44b3bN6uVDcn7msa2kxHfqsP5WHJD6ZX97Usft",
  "key38": "2PV3B4fb5cbuQ8ZsPgoi3XRrMcrEJhv97z2xDopfbwniT4jE7xdeMwPBGueZZJ2uwKKhY3bfSHnduhZfhX7zxMR1",
  "key39": "39Au9k49riBh48RbjxP1uEa2GmuYmqkEkJGqq2pnNFvDH2eB7eJjcPcx76KUyw9NfRcaqJ2YuQuK1xckV6j6WtvA",
  "key40": "2uQwSTHYfnszfjgYc8EeFiB1w9mHtwPriHFF8n7u3kZ7ZJuyvYzxogGjD3feTeuT2SAvQso8Gwn2RTkXbe44gEJA",
  "key41": "2xYe6tcQAz7qdRp361AucVGR1ebmwJXWz3Hpa2Qpsujdm17KKyoU6sNNiDrSwSeV68mkgCoNgfE4z9S9CeU98hUc",
  "key42": "2L73PXppd6Af7gFUkb3h1wqJJyrUJAj4prGCP84tbuzP2rs48Vqku9JNihkoZULcX6w4XvsZLFoX77YkEdSzwaDp",
  "key43": "Aqi2k2DfZBShFfVvqzuXAaguxiwDvK5AQA48Z9hhC3ATNowgD7Zh6DJzA3JUkGyKT7bu1DGnFo9HRH3L9cQMtsu",
  "key44": "2XcxtKD5kgKhhGkL9jByPZgQ1nEjLkFBzJd3oV6N7Nfk8CZtwmLb8D82LFqeAeV9E9byuF21tiPTVb2FLW4xYXyZ"
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
