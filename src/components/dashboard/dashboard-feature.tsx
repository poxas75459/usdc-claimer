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
    "EAR8W5867XPYwGWq7bRWcXHML4ca8PcY8SvytFgdjAxTjTpWgvLE5Mn85DvxQtQBfw2e4nbMDxdabMAzewbGvSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PuKQVgqejCZfcxMNyGYDnTRoMQiQq7eWwe4eyeqrJ58U7HZRnAuJDgfBFYJxVjgcRxozGs9qWsQ5Utu9AeQhorq",
  "key1": "4ttt4ou55yv6gTMk5kcVBd4McMVMXvX2D54MbuWRAjNNbfr3HQw519vM5NBDd9QNabMDAF6qckyM2ZzBLqGmsstk",
  "key2": "tiqo8zqNV7f3mNFSNf6bvwwyLCvZUt9rNczqCxLAz53w3dCuiD4ZdFVJHg9VMsgJfHAJzngKX4sNr2b3m22QaF6",
  "key3": "21efbxdtXoiVf7dRTW1tGPxrdMm85DpvKhhm8E9rtLANz7EWci3eRQviHSYhtEy46kntQ2GzpU7zBkgoKVfyVNm3",
  "key4": "32LemBz2nBSq2JfxkbKkMCLKapBXmkKTgM85AsDiZXGutNFcdDiJSRDYqvQzrGefNsoqqNMiJEdzCDz3G5N1UdUM",
  "key5": "4B9rFggL6C4Q4eyd2f7PUX29KWuZiTyZ4ojnP82GUWvCTBk3BjXMzEz6X4fH9C6GiQ1sFCxfCHGTknK6kYuawDQJ",
  "key6": "4N21ZEhA9n8p6FYGmSq3z3Nz8DiArGu2YAm2qxgsht6FEf5eFHjsv9NeRZnSnhFqAgmxQW3MHbKAHcwe2mj6n8eF",
  "key7": "3A7yx25tZMo2y3LqoqAEhoiKK1PvCC6tLSLfN86BsviCTzBt3oxnZ1tNVQWDRnK2KnGzDnztAMM5bZtpNosyqtmD",
  "key8": "2PcSuWhK6MCBHgqmJxQXnrxmXHmfzvCBEfmfvu64gUUbWvAE7qBz5n11mRbLnLYh7k7a1yZipjV2aYpxGMqCtCDN",
  "key9": "3u3okiTGPFdpmTumjHFHCuW3Sx1nixnSZCJ5itGgTe3LuN1SpTJsB7DgFTSnc7G2dD297GFgqReQkaXniWSLYi59",
  "key10": "zNmyiMwzdpN3HPm5uj61opkaAdMb82nQkHP1y59oPyLYNoGpDsFS8L2ZTQFWc7c7VU3s386Fvdjkwgiz7CRmYUV",
  "key11": "5rTFgLVA2h38cra9pRZEuwCypYa6KU465u8k5xkfSRqQJYhA5WDPUGypcMUFj7AMhE6pJejTkyT53DNvZ6KbeMxH",
  "key12": "p6jeKHeXzUC7y21n4vEMvbxsJcsWb5751po2PWtV8jWhswnviVpHeurfyye8mFKF3KsmxYxMa5zZyd38Ycshoei",
  "key13": "5SyYBAUaWaY9bRipBJmrEUivPYCWtb5WnLjuwo3JQDxiQWkFEi5sPA3ZvH5J7CpiLuwxFwDpnmsPsswyG3wfFepU",
  "key14": "5qSrW2UtgXcytsdmEieHQcX2pNs263uFY1s8rLBoatptKmzP7C9yk2egcQUpSsVTy1vsocEE5Z2EFBoXc2aXYBLq",
  "key15": "2fVQWkNnxHo3g8Ts3wv4YXk1GsunckVubM8d85ZpHHbbQuZaxxTEGo9ZKwVtWCZNRCRUyaDNcqQ6H4opLTjoJGT4",
  "key16": "5hazYbBHugTWmdzXm7L5FnCFNMX3v2Fwi5YbRx5wd9RfYAKPDe3rWMmdJqMNZFT6ffW2JZ9hAHHe4o2GmZczKHVY",
  "key17": "2MCdY35LTw6idumeB7ZRVdgsXV6nwxZbzYrjtcxV3cTYLjwqZp8sB7DZDpCFEWvRzWzGh6RP3HLi8dQg9afutxnh",
  "key18": "58eyUnXnZyDjdzJ3TmxwfiZmdyaj3HgULVrSeCgjFWAqJfdUfFmZVAA2gR4EfoecZALU1yDN6DVWJpzf7mJEkLao",
  "key19": "oMsNRtvXZUwWPHCmUwpf4Kq56jCrRfgKStrdE8etLqfrmDEJNYrc91WFyL4QCGsJP9bCbbyCQPPz4b23GBy86co",
  "key20": "5xwL1yVnnHJGVVmkuV6eaY77YdbuDXpVbSj5woxDAmQJt1K52T3uERqWvK6nyuYjfnQH9GhtjLLErr5Xyv7KsNF6",
  "key21": "5N7tL2kRDLfASiDsXpHvJD6BSMiLB7G9LqaRJMdyhZM6LXmAv91bcm1E1bSReL61jcqL4zFQsQk7zNbejW1iwVwv",
  "key22": "2n1187WpWV2yGPvQ8swkbmZRo8RGKWv5k3PmgMvBjRuzfe1XeSc7hc53cSzw5J8oe6dtAMMjDH9LWDWy4aJZKQDC",
  "key23": "p3rYwixmUwATipkqDYWbW3GMpeDGoi3zTgBhPSrBhRiNABS8dMP9Vf3px6s41n4c5bkdgmbaLvcZeg3gH5usp3i",
  "key24": "3YQ5m8zR9qDSGnBAGNf73jjAJiRBQvuHcV7wdYufpA7zWxgcxuabJEwvoGjtVxHKbeSCoM22YUBV19HaWduLswZh",
  "key25": "4k7qDRXninFYxU7sYfH8784VSBmqK4YCaU9FaUAAJMR3CQgGA8XVbio7h7fUgQ3Y38xHra5NDZM8Y99q2F1MyYpH",
  "key26": "2MuiHHHGhwbxEjVXQ3tBDHcSkwkVsFEs7zEH8jHDg1DgKv4yTyFC5JDqt5JSwzH1YeZ1LjHaaMbwHq7seQPGox87",
  "key27": "4umBYi4bm5dCDPUM3R51GwTtkhr9mCyUxxCdXPbsqiiWj37YMFP1Eg5cDdZi6dJEtYrW2vPaRPpakhFe6Q7ryKLa",
  "key28": "4jyDuDfGxJkipaNt6ww9AC4htQMxATGB2kNjpKS5Q4vjpS1hj6PgFUNX7y3KLikDLtoEbsjpKzbVp14XHWoZd3v4"
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
