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
    "3Dfmz52fPv9wSZ9PkuBeTKXVGytLUU7GcC3GuhfVSVxR7PcHBB6KfnX268i5of18kuFpEbhAGpwrzYjw7BXPkS4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dkpf9mRPiarZTTxx1Uk82tRVjMrbqSGhRvxTSZLTWUdxJBKi9QdErYE1aeWtdCTZMZFP795k243YSLwvhkRgvYw",
  "key1": "vv6oKNVZYh8gcQH7AVEvc8Q53Xp4V8FnEfeVRQU3R7ept4kCCjTnHaA3BTuREPH37k4JDn4vCVPobSAivmgAFtP",
  "key2": "54vrDH9fyf6WeGgc9ttKGVujToPVjuwzvU2Jkk2fdi9yCBZ6m6KRkebXBGVZEq2fV7Jbdhrr2spW3bRjLXe8WuDv",
  "key3": "22By91cVXfXj1i1ZRa3pr2M9jm92CoegoPY3BAfWrj75Vtjnf2N3yYxqH15sX48VLLR3bQXyYnBSXPTLLGQUqUqQ",
  "key4": "67DGRpp1FYrtpBZ9MkWJW2N9A3zS7Yh5r3VHDEvB2EDP29WTDXpMvNpxAnoTA9gvWjDoZmVAoc8bDHVnH4AMes3x",
  "key5": "2ce97tw4RV9f2jHiQSz3rSDFSJLY16Fs6rGV2bqBRqUuDcgYFJhGvKekHoxgwQBdDaRgu6mJPDfKwN7mn1oPdrQi",
  "key6": "2V7BXoh5oKkrWKzNGqrkBRL6MQHGiykcQwzVMisNH1NRPuWLsLk4UJe5xGqA2jVPWFrBkYrqbmimgA8rEhv9mVA5",
  "key7": "4bT5SE3nbGbVVBfDngt8uucPjwoZroKTi8DxFo3tGoTihPBnnWFMgyVEL9BSXsZ5PT4xg41cwV91LPJV8q8nrND9",
  "key8": "4B8S8TAiNpWYeikjoQEMbDuLFarSRNZffVBmkma8ohJuUTPWwTYyq3pXEB4BLzeDJ9KMShTd7zdQ8LZnN9LrdwBq",
  "key9": "5DokyT3Fx8NQ4yXU5WN1rFAJQQ5yB8ZVWfNgpY9JVE9Zwr7AYWTE7CNq4GuK21JAjbkpUpuDtuJ1kp8mz6DdyboY",
  "key10": "2yPZcZ5SmhxeFvmbSLXfQxymzN8QRkj4D3aQ5DXPQpYwhUaeUnMBr6K1eL2RtLPXV7kZK5pUqXt5wLmhph5wME6U",
  "key11": "4fCgdCdPtmrbEgQkR1rYa9SgZT18RWodz9xqL7JNV5kPfb5szGLGBpMPM5c2gd8zA9FMkfL7TV2KATFoxCZ3fhW7",
  "key12": "5jcAtnuLPNNKZu2264z54JrZ9NfSqBWVAgNoi7zB7ojBMKahzRGnWoQKm2HFkMfn8SgNpNp1bvbBnJHZ8csuGCfB",
  "key13": "5rV7JSHP1kMKSopgkhDB1jWcgazLBjLmbF1bzTct4G9EMgqRMaTpKBCjWJdCAXdUFwP4o9jkvatr6FHEKrrBp6JL",
  "key14": "5urpYSw1vaHRNzWuTF4vdrph4Z6m1kaM5JnzhDjw6nGYbSfjm9SXgzAfC2r4sxm1JigydxCLSrQYGKpmcbVhHLzm",
  "key15": "3N48wbvxVutv2dVTozijtBTSda9BeAzoGaVxFjRVZ2Rk9izvxpyqU1pjA83BpkBCq2nfnxeZ883S29rkaZiSLsFT",
  "key16": "3mUsy5mrjH1MfCWhvRUSugVP2RS76SA8bcKabDcJfyashMXS86FyLTX5XKeBaku1mhoXm9a7i1wpEri1QBEWuraC",
  "key17": "4Lk2QfoWFNYUdjnpjVBcjR7RcpSpNb49jqRSyNaJZf1tJDjNAWG6NwKAqNwmz6RJGwtMmNPtwi5qshZkcoXQ9BLR",
  "key18": "aEhnK2WE93egjvAR1gb8ejNNP5CHvA7wFKfEFUDxFV5xMe8UrGWzBowpJ4L3bpo22T8RMBAUHogwZ9xisCijBYN",
  "key19": "54Ls8Co6huNEGpQuQVPFck7ZgPoqk1jyGZ8AdRCKC8YSuRDR5DNh6bXkhruUK4jZGcsxVSeZMSHYd6LHAyVPhf4W",
  "key20": "2VvqWAzxGyU5SQt5EWj1QWt65T1iN5xBHNvPhJbCruGSmKynAwd9YexNKJ7VHsbtjR1X3ADyEKLEcw2K7LVEjzZK",
  "key21": "3VMm8Ab4HBLPBNPs54pFVzKozxf68km9gtB4xzCkQzBN6CPL1DzgEo4HSsqdeJjoSoydD8mr7aUd8chuVBtjoNz4",
  "key22": "2ubvVBkkuzSC26PsLizFdpHfHN8RczbBMNm6btU9Gf2SAbiRHebv4bg3f124Z62wRRPCipYNnZkWk9JbhRDxhLvB",
  "key23": "Kz6VNGZsYxtAw2ZXM8kb2sVhCcKzWfexXEEtto2tNrSnxP9ZJFNSTZB7Gh3Myg5h5xReW4HwYba41cu8YwBKoc9",
  "key24": "27qGKgYqnZ9xzntm9jSvb46wuMYkhL1QijsZ8u4vLsxAnUBehXQoNc1FjuyVnuiXduunNc37K4RbH8NRxiq4Duro"
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
