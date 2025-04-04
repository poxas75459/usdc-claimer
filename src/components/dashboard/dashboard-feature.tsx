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
    "4NaGtq6QQNf59qmcs2g2wtcV2B2EdhemS8bmpgM36tDMoBvaPsf7uYFbvHrUKjGJ2Ae2411yRnQjXV3ALZZuJWSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B1AxUBs1urftfo29cV8cUaRQGpkX6TioNNFv5LbJfNoVGA4Qs6DnhUv9PzfrapQGrS9482oGwHCrerK38VDHn5k",
  "key1": "2TaXgfdPxznfaY1n4bbhKGZjS1ifBfAvq2NiDSLfaZD8i6XFgRixtZGXQqxyMFYiEGgdxja4oKVNUSC2YSywb57a",
  "key2": "vr77sPuCaEBNcnCVBzqkLAHqsLXCYHinfzEZyf6MFZZjayfxjGVSYwJsy2xXAznVNCpU7pZL4FjHKTFc8hzvvMY",
  "key3": "62vcLT8yM1L2qhEWeCKH5QSAxwwyRGEr7K9gRtXDgRvYU84CY1C6h2gzR6UauHobtQ6cMibHLt3bLTZbnnTyneyS",
  "key4": "4b4yZMp9TB1X7WCLVVeRqQP4nBbpzcTjZAzkjD5w7FAt7Lt6F1QW9Zdev8HMNNBUwqgw3m9qkhvwLRoNX3dMK1t2",
  "key5": "2v5JUesVNME7jGCkcyHSJpq769UeuVwgvoiz5ySgRuX71EYKVhXP8hRGJnFNF1M9X4xak3GBDoss5jTWCZU1GZpV",
  "key6": "dE1LfE3XQ34dnRUcQVgkSU4Nt8J5EmHfFaLzN8pDZMhUtQ4rxq3LuEwEFGu5Lqr3VGmWXz8YLZd5rWKz2x6wX1d",
  "key7": "4cp59JUrvoQsb2khDpZDoBi7BSHReorPHpXjF23vNAm63x8sRbF7a89HFVdzUKUitFgKi3WAa8YYpBpuzmqw1qpW",
  "key8": "5w8RMcUWatbXRS1GoJBH3GjLysPFT7od7sjEtm3xXnHEFLWPbjxkf7Xe7v96r4kFZm7WBHbGABEk1JfbyDjgoeCE",
  "key9": "5PPmKRL7YHQeCNS4JS5yfRTdWtbLJ6qyKJLLcSuybZrxAMBZJKQDL1hRhK695p6mzh8cBAS4yJPfZesVG1F6TdCu",
  "key10": "b98kzSkxknco9AWBWgpCDUkYVmBUevVpWNq5aJKCZLtrUV8nPeWLZuvfA4oypcd5XQEG5kuRghQg7CNNAz3exNT",
  "key11": "24XVM5TQbq5BAnFuezZxq3qtQErAbS96Ak6E4GWoKbJ2pk4w69JmkrduqJa8LZRzqGrC6BYq3RyNSbr5CJywszRt",
  "key12": "51GUwUMWXhBcKR3PBbfr5q4qSQm4YsRnPWd7MBubZ5f4DYs9hEp4XBrjudZWCzWX9Hp9Eqfi2KHqBFCQZxJZFB9b",
  "key13": "2QG4zEYnZG9dy2bAFtf1HYT5JHTUSKoPcxtxvgU7bTexRFkUWzq69dC8pXBX4G2kYoEsTxfiSYbhT1jQDK5TRL55",
  "key14": "q2bArAZAvQYbuYoAHhjcYu8igW2pXN1mfBqTdAJNymDzuKjGWidZkkLjrH9uwaP4VZxEuh3UAJ65FCoAGUrRFen",
  "key15": "4WEDE21wy37JtQgPKLFsU2pQCvFzZpAHkcQgTVTtWefKrebgRYGpbHKYWL2vxx2mg5Kp3NirHeBvWjSQXabBbNd6",
  "key16": "2GJ6U3nH5BuWcoDeJFKzezSsLAKm7Dwy2qRUYBPg1dhJUMBBJiBXyj9cNKsSXXumbTzsouuaMSAG4T8G4jXeBe3Z",
  "key17": "3T6grRmGRXQBaUi9KjYEZY8GhQf6kEmRX9nrXjHciBmDySqrvzkoiPwm35N1wWmw22sxC68jJmUFRxU4CA9ug6Px",
  "key18": "34L4PmfxvAHzwqCcKu4wYnkiCnQf5ZwoerzWsMLuCLTEfmjypXFueAZ5iN299acAeHktYXXuRrsMLJ2a3fDQee25",
  "key19": "5EUEDAcqhBfj525nCScjxHjdjXYDxkpK4MhCevteXHj9RWQ34wZUDERm9gGtHSPhYznohXUVZMMf9BT7cEcbBPnC",
  "key20": "4viJ3F5CD7BSNfGFCQLvNoV8bxfDKTJduiSz89cfhgftpYy8L5ZcsuwwYybELTCiSnkYmzQXeaAsXHVYFEGQh4w5",
  "key21": "FptyRYJ1uc6S2TsNjcmfemGdgBXRy5S1j45SHFtSP7AVJjFdDa77N7PrUvjQuxhqDz9T13Avomb5pf2RHB8kGP1",
  "key22": "2znSF3ThYVfQX1BdN8ZxBoE7CBzezdoPptZ9ccB7uCJviGjMeRZe3PtsE9NucuhiNXG1iEvAEdAvWtx5ThH6iMED",
  "key23": "4cAWPvAUEitsBD9vgS7pmaMeTH1jUXv11SZ3r3rERRv2N6B7fHnRd43dU33FL3bFphRQF8khvcFdbzJa3WGrC1AT",
  "key24": "2vZNunjA7FtgooQb6daRPsWsxm9NxTHvhqZ3B5WBFiSMij1tAzBR94Qissw2fzEohnT5Gxd1vEuB8MuiRHsVJHQp",
  "key25": "3rdaKLEvoXNvgY6v7UTi842FGcs5Y6wBKYg1o1b7CV1dYzxR2VUk7ABnXSceBTkcvhNhwAoKEfDr61mPFvKZbUfX"
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
