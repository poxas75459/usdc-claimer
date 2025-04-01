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
    "gmvSMZTk5ewkL3on2u2QfwdW9YEKDKQkYr3gasfjWuooBv6hPzJN75M1oUH9zmyiLNAMXFBWP6YyxUc1Pb4qEPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eEnc9zSSmwDKzCQv7RFuAWVi5oXnKELPARqGEoMBN2ckMEhTEfZKwgSGox63ZSiYRDJZY3RCVzDKR8xaBzBoqfA",
  "key1": "5pCGhA2aLNGcqwcUsxLpqm9GKCN2Fu4ng3ExHR6zPpuXUNFesTY47qDfFWKbHWFwRTen3AyWYEd7bB95vuZhrRRS",
  "key2": "4zLyKyWyKQY5eG2wfFpHfZu5oNJeShrBNVRKSfx9U82Hcrnr7T3TFCew9ijoqNG1HganGEhbzAcyZEGU3ijxezzo",
  "key3": "3AxQXTpTyYP5jx95y8ynuJ4frvdjg94tEznSiy7Vhjm5Nxw6hXD8nZefePreWst8VXGX4H3qWeNVNuwVEwsMsWuu",
  "key4": "1Tf1k3zk8oi7PFhv5P8iqEBm53NWS7gFQ9QnmRwXbuyTrStP9jCNPqHz6P1L3au2SGrbx4NpQbcvwa8W6vXuE6e",
  "key5": "5amN2udH6yAztBzLD9sNfBt2yVDkQTxK2Nxs9qazN3prWrFToG9rbvq9if8CAnzD7FNEvNyhtyZn9311Rk1678ye",
  "key6": "SGL5AzFRm3Xmdh2ZCkhsJF38YV1ttb5sjQzW3h6CDXkFwbeP49Z5yuzNvRE4FvF2BqsN6PY5mvLyxtdejavR11r",
  "key7": "5TkMLNStwEZM2gFpPtAHZiwUPmHfspTrrz5NCYS2ScuSYDbpH8fsi3dGm4CAvALuWVYd1xQdLZjizhWPpeDVr64m",
  "key8": "2QuYtwdHA3BUqnJaQNsV2Xy1AZKkJe2TxneodZ32GCcMQRzcoBwTcRnY4u4VwAYT3nYMebfCM6DYoWvWyqtD8WHF",
  "key9": "3sY85pWBw2HKXPwtcbCzEwT4U66Sftsh7gu7FfvjBDsrBWVKSu353Y7AA1n4N4yyCpzNdApgJdvzLQ8eWMRXTMQD",
  "key10": "5AayrVxvHZHbtPH1uebY7Qn1TVaogedFARxsQvnispsorpPSdy9rnL2bEWj3HiYdMRBmLXJuMD5eyyiXBqeRiELK",
  "key11": "3EWcJ4YMTQXHv1jriVNaq3RohgbBT1BFNqvaZtQBjKWKQzdu4dVAGbQnmFthsfZo4NWFmLdfGhMmxWjfxpCQD597",
  "key12": "4ngrKm73a4cPGQZQmG1GMjWWfR6tT1noYBgbcQhqZ47BFqFNj7SCY2BqRvZohH2JsBEx6NX2m6F3V3Bk4yEJ7Sab",
  "key13": "3PoHBokxFGGHfdVnb8MJvnzpUdR17r1vXiVcgfdcAxmwboHhbjHTpyRhxJYkbHmAh9W7qJEtPRtaQAGDioUAM4Xu",
  "key14": "2DifUnqqm6doKvonWuytj5LQRXhmZywyKSCvepk6tAzFFyJCA8vVTmkzWJA1UntR65vbxzf7NLiV7YoAAhfD4y1R",
  "key15": "5xLL3rFxsjFociz85e8pHam7LEqQyt2yCi5wGFaCspzS87auDVqbNowiV9o5hBwtkGUFwmAbhe6sY33ZdQZpFAe5",
  "key16": "48KFpmqFjgSNutaixWjqD5ayWpFyno4kk2PjiaLPkJgtjGa7WpWanmzcAcoQBzKVYCxhHEadHNGPUTSGyrmpcECw",
  "key17": "4XwtoVJwvHdKVG4utAVeCwAb2fQ4kG5noUcL6VNhMPVYoj51D1wRNFMGRyvDpKePz8vLaA5jV8nvVMYRn2SE6EtH",
  "key18": "3RA79Q4WBPtAWroxa4SEGgsxpYpq6Zn1U4uzELQqTct1MumgASLKGMwsJmYJtA3TK5QKvVXiDqYGwUFcXbp5Gu9S",
  "key19": "3v9gVrsN3AbaTvJs8kd1bdZmUDkbWVhNpTDKsPTjaq4SiTTQCNFRG2CAARoZbytywfJARanhk5gxXCEs1zkg8dyv",
  "key20": "4vzGWTcgDyvPPQ4GgPBoE4efZynyrhhG2JBeTokDRcg8mFGPUcifAAd37fMYqn2EztrQ7cEw7MsodCZrNpsbntt2",
  "key21": "3vcmJ1DdMCLbpyMa6bhmTdY5qzEYnDzRSPATrbRKK9PsWuNS2iahCKV4FGNzybkkWDxm6v7ipmVdxRQhHZ7qF8wG",
  "key22": "3BUJGVkp3yjNqvPwh1rkh89KnxzTCukRgdrqkxgUwwGBEdVDLteXUQtVyXXmKxoMGMHATt2PbGBSiSDCmAphujKP",
  "key23": "5E8FncBBMWPLHHvzR9Je2ecaTHuz8C1kWvub73A5jBxq3B4T3LR8E3TRBRSN234fPpFgMQGP8z8V7MTDE6PBoWCc",
  "key24": "3eimjqMxsNk8tETfN6p5CjsVSzSBwjqmCFNi7eKmBz4azPagQbMwJNXdUMqrRjGpysyUCzrv7uWTtN77fobJfK8D",
  "key25": "61AQWAv9z1NZk2u35qpiftXJMepPFFsStUEHfKvkgSu8JL7yfjxuZL6NvQV5Neamq6LWFYmKuac1qr3nSfdojLTA",
  "key26": "2nqsCYDTAcCTqrBx7xbN51WDJCBQD8MwJ8SgbjNThfDWzGCDKGVTCA6xgyW1VvZBon7G9crPGjeAJwGNf7feNhYx",
  "key27": "568XBauDmRHbifqiZAu3929XhwXFibSko5aE6naAUy8oUB17duh2bhgqyFkeGovY19uqRK9ve28KAbLES5qDWZdJ"
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
