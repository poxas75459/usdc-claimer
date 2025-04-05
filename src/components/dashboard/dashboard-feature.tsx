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
    "296wt9g5SvpH84o64JQJBiAGNQEtaRn5GvEp1q95127eXE76zbPkbjUfYR98XZnWWv98h9o3UuCCXZS5ESVNAXoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QWXHwvqfWhgiiZkdDSC98Km8u3JL4YXze1YspubeWnA8sKPnxgZWbQeA6xAyZx6mt6Y1nEdf8cMgULgteaaMqDq",
  "key1": "2BvrPNT2q2BHxdH6SWZKaqgGF66wyDZ1Rr8BgKeFjvXCdjrF8Dfz8khGsuko4tp6GV21QEGzPdMZtH7wcXEKXMqN",
  "key2": "eWnH7Zf3tJu1m7ZLDoqEawWbTdu2ZY9VUbvipokWRtvTCA1AtNuaBU4vRYBmFbXit2veNNZFYc6SFo7YhYpiEPy",
  "key3": "r3exSDspEcQfq2q3JWMKGfo5Fuyh1Q35DFA9nz1A1ohFNTwZXuNbpmcU6jEjPNALoN6FDjh3DisiYXfFpedfKhL",
  "key4": "5EPAmz4Qf9o84XxmPh1ayGnQgd23DtGENt53aCUnCPsTo2aUjnKVr7z2mfubuvgQ3qVPdApbfXZvhn8cbN2BciEn",
  "key5": "5PiFAKLVwLSCt9Dfj9mVrq14UgAWykrHzBGh41Mn5roNaFfVKTtc9kFeqixbxoc5guDAfy8sExYPi3kHaeLcpfZE",
  "key6": "3VAgq75Rdpq5Cs2Ri6tqbAxwgid2Zs1vUxgd5NRu1Cvzc2Q9cmEW833FJZYtkCNXUPGBYJYfwgSZxTu5m8ZT5u4u",
  "key7": "5bGW9NvZfN6rg7wKtDAyhehY4XF4R6uj9fY7Mw8cvEVxWD9MH5SCkcBpq6LWm7MoSyRQWxPQ7mkUjMi1yzbfhgbd",
  "key8": "3fDRbHCFfbHhyAFrhJnGN2FacwDbRTUY9pB7Y4b4UgLNKWs9kJM79vNckQh4RQB7aFtZQLxpKr45YDcqC6QJAx31",
  "key9": "5Vt31EUDbVY5Qe8humqkq9LfnMGJcPDguhbPdDEWfvT3eYXeAcUZcne78SRzxvpBRGDCMXAkfGCcKoBJsq4v2aAD",
  "key10": "4tT3vSgiquEon7PKQRQxoTXPFNHdY726prYGFMbZszmNj57PDPcXhmQRDgRGsYPuhofsFJwV8eomWxDC7UH2USjr",
  "key11": "55sWqcF4PKu8kJbCTf4hoZKkpkKPRmpdbZXJunM4Rzwja4TwEGkqw872MbY9FJdwjqzEUVh2JCAhpvwsomfqV2be",
  "key12": "3rA7QREK61NRtupcjrfhkLhrBVGT2m9HUEVbF4B9nPDYYxgPiitwZ6eYjcoCcou4pTd8Zy1CvoH6geVYUPj6kuuw",
  "key13": "42FiEL981UYkvjrqHAx8DnpMXs1mbvSq9kt3P5PFF1Gp5djSZEDaNiCvdLVb4SNgKffJtnWeZRyiUdvo92mQBPBm",
  "key14": "5r5dfwYMKN9XVhNuKbf15CCLGdeTNBxxGbnzV24WG2Saq7GV1HpfwrAZpdrHpMZLNyjJRvktEkUwfqiDooKeSdhM",
  "key15": "3nk5xFM3VWQvo9oyZBCKLbwKrRFYCxDykL9Qn4MXEAeb5fs7kXPqEhzVoyJ8N46ZexavMi6MMjcastAa6miTn99n",
  "key16": "2a7b3urjr7eyNDNMjq5nunTSewBSPVzM3DXMGW7ioytcggcud4C6fFr2rC6pjacu3nqXw7hMpSubXuFv5gwuxX7D",
  "key17": "5xi2i82ntZj3DroHKXVtVzq6QdoDTDNTdkWJ4pXG1uqFPRsJ4hostJ8f6dL3ZfnqqYFoQGkzxwYWbTJDUgSu2stC",
  "key18": "2vogiY2QqZY9Zto4TS8oa8X7JyeqaNG1FJC1pzayw6HCKEeCE1mEFVXXbR9Gfweu3fs6EMMxT52Fb5xXVkSKyc3C",
  "key19": "5SHhmFiFoXx4zTds4tCxp2Z5QWFCs3vKVS5pNFh2njsGsAsQcgDERYpiUTx5nMEVLpVeNkHEF59KNhjAuE4CMcf1",
  "key20": "vnwrVHr5zwSTWzLMcEKY9vUdCagM6L4X5Z1wEvanVMNCBV4QEDcvRTjyUnWTQMknnP6CgvAqaDCxKBpD1cZYvzS",
  "key21": "56rn3ic6aF84GNukyKKxdm4TeXw7krtv6bAQYZRSCHA36cWaXfMvAafZZ8rATXn5MCz1REEXNR1hokx8QByAwx3Q",
  "key22": "3Bng8UongbHusoC7NLCdhaj4npbg1dpHGPLwz5HbTNr7woH2MgAo6QuchqMvALbonkXCKfatgJmn8ovCy12vefHZ",
  "key23": "5y79nE5ASfqaRsr1PxpTaWNBbwtQkWCYWihZ3G4uoD3osk7ofWXvzMjGNWnJMu6fhdThhofqky8WuDAiYafvYbP2",
  "key24": "2buGG6cpkfGjtcFQTwZaAvbuU7qa1puTqcec3Astewg1HNJUyRbtreKBxoR3uFr36riagtiBucCDir9H5AbNiXAj",
  "key25": "24CyD7C4H1N1wH9ZaLTWbDkABKpWv3sjCjSyu9KGTbkAFN111ruH1bD5R1Ga75d4a4RMDqxj75WnFA1oXKjb7L21",
  "key26": "2fMQC4tkUb5fXZR3QVML4MnqMz9dgFmp5HEDbG5FswxBvrSKFbVzDqAdf4XeTGCCsUzTMzCWuq5xQHjBiSKNBwM5",
  "key27": "2rsf8Zk7rFQM5VrzVt456P7ZLoEwWtfALHf6vhiCugLpoYg5vQ8MBMjrVismuvZUyzcH1ihk8V8VeUuqakoQEYBD",
  "key28": "4vhBrMn8hmLwrSYfuWFP95mupZVbZo6ewWkJp2AJt3MCRj8BCxWUNuCBKcpuJ3PayoZ9qTsMjerfsrkQMFuNkNAF",
  "key29": "ErU5YqMPFzpYV8v3rMxCuBxif25q2FQX3ZwYHcYbqMwWnA7EdXMhEG6RsBGAx3fDJ3UzvR3mYeWwEMu9XWK1KBX",
  "key30": "51tLXV84Gst5JNq9J5MpixFMhC1e84y3jxSrmd36sLMRj1UZFoMvMHGWHhMAivwmgkV7dtBQCbwHVmFs3N1aDhwP",
  "key31": "Towy78iynFiEsumt6TKHztKSduXTB2Q4iikhoZSJStpsumtyyGbfun5a28HemVs9Njax8pnSMToo74aM3iPJTd7",
  "key32": "4BAT2YBoKFgAjMcE8EsfRcoCbmk9L9XcXU6Sa478GS93yxXXMTiZn2QuSHBVkzshuiLug5hjzGBYcAMiyqdLXjvm",
  "key33": "3K35jq3F8zeKwE8tzzcDiJWk5fAhgH3VsjhYkSSH6sMxJ69fHFxyDd97BS1bU4urrZawA3rRMKaqQXHiab7YuTfR",
  "key34": "5ptfmrWennomMTk1aSyuD9JMZD865qUB2UWPscRSxQGrdAdnTBdm218a6aSiSKtYHJDYVzuYevxjvMvvHUk5rja8",
  "key35": "5p9PVntZV8xEioFYvuDyQrryYvEkGck7HnvAfZk5YzabCUrzVE8FMTbK99v4skEsTpqZ3wPZ8rq3xpshJ7p39m5R",
  "key36": "5995dBpFybe47rSrJejrtu2j1ynYqRo8W4YaNPLSj131BS3oCPssxCPMqS9yrhT85GCpp4cR1kPDQs4y75t55GGf",
  "key37": "34rDhs5My2SsAvbqyVGv3GFs3qKHVs1XHDc1nBjCM8z6zcsEaa39Do2zLCfWutiEZAVBmnLcPuSZwEAK8cMpE6FS",
  "key38": "5CaCBAc8nfSwyds1SahtuS6Fk7xnpoQNvU3bNJeqaEZosKYGi9HpJYdP1bi1c2THd9ei8y1v8xPa9WZFUcBPMs5H",
  "key39": "4JVEqU2Df5836BsGuXsN2UUuYa2Cm4jpiNL6L6TVY1xk3hzMwHWBDozidwSgDgKYU6nCAt7oiYyLtASM7BBTo1DM",
  "key40": "4mwT5aUX7itwQ5pVcnsHCfe5MNZVpaUPZvsubcxz5uVzT22rUx1fgrD3Ntdh4sC9KYcRdERet1qxfFniPUPVY2Ce",
  "key41": "3gF27AyEYRUETk2v8KoqY9xsXYib9rsCoeeKH6MYuFq3zkLmSrqLDX4CFTe5WN83HXoMX6gewywFrSqDCgoJ34Vi",
  "key42": "3ToBdPQG6HbQuyqgCD8D73XUH6M9jwrG1thygh7aqvCQbGa9LDAtTdUiy9LSYc5Xzfcs1h5dP6SLqwMWfQfNGqzr",
  "key43": "3vqa6eZoDdCZiBpPcJJ7BWLzG3CB6iQWbQH4h8X8aNPamdfoq8PaF7fVmWKp1ddfuxKVzAyy25T35h8xXtigw4Lg",
  "key44": "2T2ND6jt7KLtoMdyggsuAuaBdACeFGkx2f2rEu1Q726DdsQDbYHk767uNPfSig2xcRenPMh1Gth3UjS24XfJUNsF",
  "key45": "4Y2cU9J1fhp6j5B3rRzjGZ5mTe52AewRgbZQH2xopPCgujELpM5t7Qnf2bEK67E7c1WprXZTGcgCfsoZqNSzThcj",
  "key46": "4KzbXpT8ArVqv5pX3hrKKH76HqCrZEPofjhb8gMKBXFduEdZmDdMWN3hjm8QuvbJmyQrCuQTbk7iDf1vmh79SXbs",
  "key47": "2eHJgcXLvsKYvRJ5qcuX21oTzqKzJmakvCixnPp4r886m7Np4ZF93jzeS4UqNM9pX5V1D5WtnytphHVnggDejprN",
  "key48": "3xbqtdxom1AZz4EE9gzXBE63ohA5YaKtuFNr28CwBU8RdZ9pxjwKa44iyTn411Kx5bKKngBBV4QVtmVwHzSGrUu",
  "key49": "4YgvS8dSQQgS185Z6aXiF4kLW4hUG9n95safaHVawZgCmQYEPV8d17JQRAJFDSwcFzVcL9KoyJD3a327kE214puq"
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
