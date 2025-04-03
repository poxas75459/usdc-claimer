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
    "2ZuYvcruxmp6HwysZ5afeUH8ZF4KJncXseXLgnrxh4WyGcEw2RR1ML6Cxjn1y4EMDWnwb2ienSpFUC1ZtCyZwbdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPa5Xxk6mYqumQJSSdTT9WkgL3j3SKgoz6JnjMazWWE35iPVMEG7HzrFTZwpeEnsPPmtQEmAH4xN9CDV27oTLUc",
  "key1": "46VTj7GsWGPdSrFmDF1dcvbtExwfBwL1sGXE83DYsb6KatMEAafGWyDEyhyTWNUWBz7qSrf8nA7EoRSB3pQtZWjc",
  "key2": "4q5VUqwjRXSmfLnB1iDgPWs6H1asjuazcY5NRzMpkdQSWkZQS17BJ856t8tWokUFqbvBhHS936o1u397xLZpAYcz",
  "key3": "4VvwS1Spio5khGjkFhy9vzKLNiMFot3q5Bb84VKnzW4BNveSuV5VcbrH7skdFBnBxRP7XcYNpKBKis4M2Zt7Pw9c",
  "key4": "2CURTH8GkaZj4zk4F36Mm5CEoywvmWw4UDaZZu2TeHBLBw5NMXJruJXkezHWkyJj7xKHWnyvJP9LABcrviton8qW",
  "key5": "35TGfuNtLoKK7W8xbdXrumXtxbtTgDedriX8wLS5WevJmXFcY65ns8HPYm5eEz4CxfvsQX5MQaCZTMDpGAKQCg6H",
  "key6": "48VcVBVQp9XshNUijRHq2Cx24uNVxn8Ab9SEMWRwHoiUctwRb5QRTAXeGE7koMNgh2ZKdscuhdRBNYJSWHx4iMM6",
  "key7": "ZiYjkxW1r8GjYRHcdwv6ou5uq1UfZXLx5PWDE5cXpRfc9ieXS6jHSMQ4DTzqVziKWb79cWifmLBaFVvj3HeC3KX",
  "key8": "mLk6Q5aDzT4JBYFUo7Sa1s6ZwdEGkXvAqu55imwUSPRr9rb7Ew8y2t55fDw1orTSoEKv6pThK4tcieKXSTtxGHE",
  "key9": "HMV8LgZbPMskyPVhN9jLoHt7tqKhCKkfzfz32qfT4hjYxJeeYr6XuiMEqUi4GBingWjRrU269ghTBvUK8LVHmw8",
  "key10": "5rbdX9vbry5w4iBrf5c5rjo9Cdwju4rVDV31iaAcC7hArqAfxWSdN9p5pKsuydW3H63LTMWxqxqK9hhVNuQvcYyg",
  "key11": "UrsCL4DJUM3KyBxEqusobv6MP7LPSDGCncG3NZyByWKoVzhqooNhhvRDWXHhHGkMkeGvV294vge5wy8B7dZh9mn",
  "key12": "3HpUpZbJjQyVk51oE5WgYx4nZ2k8fgKi3N3qzEMe16UDyYakdG8Bxr8PwbtUkZUWQrYbb31ZiwzSqxd4oWbK7B3N",
  "key13": "8btuaXhP32BKkoSm2LjNcX5pKPGnDXuFDTGWz7RCnD529FeqAhDPtY3MCYxEu94AwYC3L7hWUBV1oFyBnnuC1F1",
  "key14": "3wzcT1RhFcuvTW56QYHwkoUwAvuGgSVxyXXwyKpgrfen5SZNmxV46nf5DAeh4NhhmMDCQfuTQoH8ktRxj5Bf3Pz8",
  "key15": "4K1FGbHHp997nbLEB3sRDqPEnTZTeYV5K2hCMj2qTwPPmK3Wu9vGiMh9X277WAV7syRUGQbWbxeX3bqGjhGhVkKZ",
  "key16": "5YHnbjciaoX72myvmu38S3DBT7Ph6D854z5mYnvHU2T1UgYJTyTLfubcrbkVrqvmvfLLTzGMANSwJis1zXMpyWii",
  "key17": "41ytxynS7U4gFcs6a9uAUUuSH9bnpsRGfTw4Dtz6WqcHBj3DYxdtxEw2FaExYRoANhp56PhMHS9PKd8dQuYwcusY",
  "key18": "2oozoT7QYHPvbP1Mzr7ASZXmYrn4Dx1aWXY241jDMpYYxdJuRkmNHiK3DVnBn4nXr1SCDmuZWTKZfZ2odP7jkwkp",
  "key19": "4kCept8EjoGJtxx3LHJmgoa6aDmXSfKeBYxLqkNJuVa2nnkHyff4Nw1xEMNS7tK2TUKJJ3DdpKDQoFvGFRUvYJMa",
  "key20": "3M8nMRw38xRzmhrNYvdZbDmSdRrSD8fX7VLJAsX5RwYE7PotTKQwPFkNtF2xpYy7o4fY4ceNJh7tYEdaygqoKnWC",
  "key21": "wvdjqyGE8UydoJj6HyGSkL7VmrvmqFBUub3vWt3wWAMDR4RvUzGbMicQPVkXfnRdGgPkEgtUP8nfPYprD1hqQRS",
  "key22": "boNWSSfwvdNv8ZEKYbTxsRkVMxYWthYpSfhZiVDEqudJLWxprYujm2i5ZSE8dfmANX6t6tkdzGArdAqBKDBSkbm",
  "key23": "5Eu9G2hbdUrHTAwFbgeGW3kfJtnUax34x16QU2QWJAGnQjzhVqfGEXyNcVW3eUdhPuqeEi1GFSpGfitLAbTmbb3m",
  "key24": "5zzehVZjZ2DpEvphi7YeZmTLBm5XAdTfVUmz8QjCpfe77aAvtYvjsXCSJkAa4cvmtWyMtbicVSV7xo21JjYjH6cm",
  "key25": "4NaRW6XttYXJy2N5YZxwya8SfJ2zure91a3UvMb1ngWikn98Yzi8TvhwSULKfvMeiQLnNHT5TBjyf6c5uQSfhxav",
  "key26": "AnPHMu5N6eYG1r1oZRkS856F5YnqtbmA7tYBQSpmfMFTMx3qCLHGj96fRbSjTVSVvP6X75yQSdUqw4AG2ULfoZr",
  "key27": "5Cg61zfWKModbXf6EAj11GGv3woCDpBAR6kRVEiPb4izEDe39tiBZTQrdP41LY3UhZG1Hsc9QMv1K4FUpLi8Ftde",
  "key28": "aNU69w5umSFBjBa8oLYck56A8x1F9seU3HKszLRkKL8CBR11HFEKDPkF59E1GLMSAPjs3wPovujh9zU7TQp9xyt",
  "key29": "3azRPmoHTeRJFgsin47ZLjTwKeieapJqLntrFuGthoF7BupT5fHi4y1yJ2fFwdcrfZ2XJNr8n14nXiq7Mt9PwtSv",
  "key30": "5D9a9PHzPbtBHPqSuSVbB5w6c698nD3LtbG2gMfjiW6khcY3r6SzBiamJNnHRQWQTJrvQWe7pePDkuuSBBGgLAx3",
  "key31": "BBacsGYPPGE69JnSdckqH4d6QZUArZwxtJmWZUrgZJKPy4jrMktpA2u2fCNM2pbtvmVEZ3XBS8jpgLbDCBU72AL",
  "key32": "4ThkURhJmu3vvzVR1ZSKFCgvEUi56VfAQuQMwU7y1z1qiNZxMGFYCBArGqztmf6DETNnmVSKFxi8uYpX27oXi1iL"
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
