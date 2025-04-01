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
    "2A2x7cFYqvMtvf6X2AqQXqjBrE5ApW2sPG88kHiU8uWycrKdu7CjHepGT68oRV8ZE5jbgiweeeiZEva3Q2Ksa3HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eFmEKdruziMXp7RUEWojvx1RR1i8jxpgFxr4qztiKBMFs3CX6tT7GV1sDj8keyytrYKKP4uq52jgKJ6sFUPHjFx",
  "key1": "5EmzEBY25J1i4jkTxd9sRUrcVZiLgT9S4YfZNeukoDY4hMvQqLdfmp3dMMht4yBDWgheRUUDT7cY4MSR6xE7bu3R",
  "key2": "2yUSQN7SZz2ot3QDCM3n3DoXsf9prQsdArt7ersLrqqYw5wQZ6AnHVQGrbmhvBudqM1av2fxBTj256Ua5eLmrXoe",
  "key3": "5uK5QXwgdXkAYd4u672buSzuiESYkgnHnZf4HWEb3EUMQn8VDXDe4hntQ2Q6DMwcbKyk4dTT5qdpJcb2xZbKW8aG",
  "key4": "2cki28tFt5R2uBC9kHM4U721wLgRhrW6xycsbew8SXPS6Ao2V5RHCjALiuAA3pgPdyrF3uCrUHWL9W3GhfdxrZ9C",
  "key5": "3iNfc2ubA4ohMcKdjfCH5X7Kk7LDQ5amdwGhn85XSzG7jakYojByfrndkyejz27bPG1EqVtx71DDodVapSPFKLFv",
  "key6": "4Yd5px9sXJjn4pSftrx9DoV7uTBLMZ8WeoWfWdCB6sHyr69jfb54KRGJh6hz6kWotEvKZRQ3G4fxkyBxrS6NR1HJ",
  "key7": "4odo9NT68MPgDt4GFgNhrxH2CGTsekPEZR3Gcucr8bck2TEqbwHqeMDw4PN9h3qKZwnwGm2bLQsaZyD9xEgtHrpf",
  "key8": "24ygo76TucihLDrxwUCtvyrSNb8yoHqNXUhzATjV6N8m9FSCAAzqnvgW4m7y686BcGt2NLWHBZAU9M2Ro2RoVuca",
  "key9": "5EoerSWVS455VPgnWWbGDEUiZgPTV129LfYdsSjGQjXkCSph5rLAEJ4g5ebzwtZJhMLyiSf5YEsghXN2GNqWQsjm",
  "key10": "5TuGvyTsgjUCGSbCt1WZDi192UXimDPUDtC18oeo1bb7NHnxgcJtXKzSrtJT2DcBa22jbpfRwdrBJJ4pirNsCVEv",
  "key11": "3PcPDViZxG4DhBhLa5fWZjB3XXshaJ784Ywx2THfJuiychZ43TFfwBdxSJtu5aPsnU6YpK7dfrqinEHXH4JEhJwq",
  "key12": "3mwpRgwiuVGum6Az3M68CdZ6NWXRiS8CBPMmro5SytLhgm1DAjbNxFCLaoLDVYFoSCtftH26g1h6LjwM7YJaBx8R",
  "key13": "FeBqmpyp68GsUKwDmZfXRyYm8xhyB4NQAYXSWJapp9wT2GiqDzTeMqLmtKaUSAerzLL6piT1A4prwQ9v4x8zkwJ",
  "key14": "3htEAd8H12rRtgQmW1nefrT7QiGgfDEMMWfcz94h4WEXEw4NBR5w4UmGm873DTdD9vKW4fP6ChWqU2sXnB5T2adW",
  "key15": "4pKHiD2y1VBngHKTNSkfW2uJzk4atKVnZiaYFkLNLu9S4MHj7vfH65Nrrytvd6h2TyPzgQyoVpMVRP3tbTvkSg1x",
  "key16": "4bctQD1e7DWEdoW77TuPoUVSB8hgCowG2DJ3wYN92y6bv7tx1eCQNsTMYUugi5GvJ2F78dixaD3mEkozmBSpfqAY",
  "key17": "4N8AUHZN9LZ7pAAzu76ZmNHgFKRBbG4huHaQQjWitufHGLTbczwGkxRp6Dd1KeEVMUhZwbYtgqzE6WzRNTPbMZpC",
  "key18": "63HeH9jyQK8Fj9tf7VKXVpNWosVxDbF382aEH9DcHpkyJS387MJWzF6G6kiif4vvHTpiUfedXg8vCxreTeRqP62R",
  "key19": "3m54sejSRRzwZfkYrBrapVyywSVHLGNjDW5CbVJpJQoYpcepTQNiGGC9rnijkv1KCFySshT2EhvJACorDix5YjKo",
  "key20": "etVEC7Qu1BLy4tffSkKKmPrZPfYZeDfyr8fBaB1W7mmLSEyRFPc9D5Lf6AmXytNXYhdrFyreU29w5t5xnxrERMi",
  "key21": "5BZHEit46mqRJHd8uqMyXCQEtMeP1i5JK7DhbyL5vBqSXKyVdcDSksekqDNTB2eBUsWmyGc5Y66HuA6jPM1mWniG",
  "key22": "xnE9DyEYqcg8r6PncRQ2PZPXXyTRM2h4cetMRzY5e2tUE3zMiQ9Njunqef8WjTQwesCVzS59bD27RRopvsPepCQ",
  "key23": "fY2io3XupYE5iqJuD3rxFHfGVpqPyRLBPBnni4T8x1rJzTKXQzModjccVHyCYqfBse8WP7PKRYivP65hZwUsxg2",
  "key24": "24aHCxnjTcY1xWwByN5z4raqGsDb4miRqoXSWZ5inymNLe412PNmyM4SGpamX5YxDhNfeio9aMEttnnaU7e3FnPM",
  "key25": "nofJcxXahiqd48rA8HyJAx5UjrLdFM1Cwnm31BzyGKAFM5FWiTSWiNwwqVyQuo2VCw8a21uJYp46veTPxkvkj4g",
  "key26": "d5iXfywnW38KV8AFf88eLV3Hw2MyY2g3CQYS4HtVZj1VgHgT5vw46UiqDmSbuiAgKsgQBvxC4SX6d9N92Wm6vCb",
  "key27": "28T3298gyYNaEpCZNQeW6TRdG8FRepQwdPyZJ9EfuYbmJ5FXHi4He3izrzjPtPDUAG2dYKW3nDVTubmANR4h7Tyg",
  "key28": "jRcSCbuo4rHQe2Api5cQR48BmhQ1QCXUbNaMvApRjoczXZdxta5N52ny5BZkx1UouxyRMKRy2di75NG6gp96AwS",
  "key29": "5P8ieGfUxFuA7eUJ6aE2C7pHnmg71mFMdqy22ii8nvHmK5b5iYphYGFb7hdH2dYR6hxcqjgiJAUWNJ6fLCYEcx5H",
  "key30": "2A2UUCQiRD97t8GkvrCbREvNwfoLDtnrUgxHsfXPMCP9MHMxJfViJQAJHkST1fEM3Q9YSgsHwqr5WYTW6UdWVhaR",
  "key31": "qtznspe1LQvZDff9VdW9L6vsKimwAZmXTDrwJ1ZZFG4P4F2MPaA4i1XmFZ2D8DTpoUQe9spk56ZC9xNg33h7i7P",
  "key32": "4scuCkTw9L9c1iawz4hmFQ9Rvt79Lt6YcXmFhAd28Eiqx6dEvE3QRB6U7cmA9fDxXo8fLurwTY658TMKmUvA4auq",
  "key33": "4szoo4mGYz1xtmz1ZBz4QCngt1SgDtksi251YvFeLijqkBo2ugSGdDm9p87MGWSKNBVVssBKJQnL6UPWzSQGFz6x",
  "key34": "4vp5Yjp9Rif7wH1BW2SskrYLFDsCWc6gJVdGfb8ymrDBnPL8P5X3yADUihJL369Vt1m2UfPPmTQPfr6EMWupf49r",
  "key35": "2Paxj5Vig8SnLUnQvboBfW2CkFokozRfxya8jLAXm4kDk45JF7ceUFSNeApdmvhjy8AHU4XtXH8hMwAXw7751omX",
  "key36": "5xkU6d3eWwpAkEnYyvyCS1KE6LrBQr54JxaNSHVQKzcNeG1q6bWi6YbvxXZcHuWNesrF6NJPePdTB5V4829MkG1D"
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
