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
    "2KTihGUoYBXFd8BpsoyvvL7XyiRQugbpgMQCZBJXeAFmmNxTEZBUrWEJjr1fjVXZXaXkJapj4WJ1ZcZ88UUa2hze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2unT9SBcD4wb7GHRi7GwNJryek3y8DuXyf1xLTzt9h7KXdCWXGFyhwW6TPyofKr3tLwUTRFoSvgm6LnoG87T3LCg",
  "key1": "5zJN5ZsoPRC4kvCvaJxW1onR4sYNBUhj1VmhX5XosGpT1AJRjUBwJKR8xdXYLCb7J3oiRKq79VkRg4Xj9DEz4r2Q",
  "key2": "3CAGqY3oVDdWd8Ais1cfjtjDvdUd85zmoMvfDgFELssVG94ehES3u1gtbLbH5tgqyy48yKijaQeKA2RC1N9P5W3w",
  "key3": "3JCx7EqNk2JPSEqSYwrhmV29fASutVCJtnT3ALZP6GQpFGi8X9gQ55UBxsgqtXRt43c5D7k8vMPqo1tuYd8g5KZe",
  "key4": "441CA1XRmYBGgQvBQASMeNBv3Yez4mXopHzfxy3iQHWc9BNuDJ5Zik82XC7Gkcg6MxQyhDEKHhkxN6mtbNzxAAbp",
  "key5": "5PgQ5fjWdFL7bRdxVBsnRys4xqJ8EyYmLJCyV6AJkKui9q6Rwd4s5s6E6PJVhAnVvmyeqMuMZgg67LonbATDsddo",
  "key6": "2UNFqKbF3cNEkeGr6MD2nZgkx1feBk9VXP9CutokZbg4vqhXYDBYuihNLmJPnBRb7ejYCvMHbe4Rb2YBjo8Vkmkn",
  "key7": "5PfEqc3xWJ4erKWjFRJVHtfq9BBvdRk4S4rc834SCQ8QRNafRox1SSpFJtvLBzd5SpcJgcrNYw9PDHL5DWjNWXJk",
  "key8": "2JA2Ncvb18BE661wBPiLfzVTLBsjWSQRDPe47sAZ7xGZxScpw4FuXp7ZiGiqkomAUUPphwcaLqZ4CiHeSwxJv5v4",
  "key9": "4MFy7ohFHmtDBMJ77Svt75NyPUdTQjnQdgMZTtJyQNHpNk82a8t4wHgJkk3LrtAd7SH6hyd4kxQ6NKTHxQf9uV6V",
  "key10": "2Z9rBD8CY6r5GErG4X2k9ehTkv485zTdEQ1rz2UxoNGUJ6zVyp1D6aHzUF4koBzGasUB1YtowKPLVpJnQkM3N1j9",
  "key11": "SQuS3apPJaSmREZcf5o5Ba8UmT1DrFjR2GY4pZsiVjgFxrvW6AwFLWe3jjTXHu5YioG7sA75KDg3La1FTHy6k8K",
  "key12": "TF47tGJYPnKPLcgmX5JUNyfSjFu1mBm1LftR6gior3MRjXoC7epA73VdNN1WNvzk8SY1AjA8XGS6Nu6y7876hsJ",
  "key13": "3boZzU2WPJUB2WDnbnzfSqxVAhd4b1T4bmhLawNUu68vYwGyoTDBJb6oB4mXNArzdhs2PBgYGiDt4bAANieo1hTz",
  "key14": "4V3n88nrWSUuLAfPmJWc1G4TdFMHphDgk9cNnT2ytLverG3jape3dZ54hQc3VnY4sbUbfoE89UYtYdiaLHgMB31c",
  "key15": "4hXUczF7dq8y9fcDwwUEnhBHGNdrfuuDuAUjkDU7rjBLxrsFvEWZMXCtenw6JfpbfAuG2zMWgRRpY7u7QHBzF1Yw",
  "key16": "yGg5nS7Ha9Khj3je2576xh5KHGJKxJvrzQbMC6v8fyi3we2oKVttMEnSz3BipDCJmzEdbwGju1DpZCSF4pqQ7fC",
  "key17": "4Ag62NNoaVANFRdhS7zbzHLHTBHZP2ksimaKVFunycyHgTCnWWd1gZFSM97JaxAe3MZoLRrRzrFH1gMw6Tn1xzSi",
  "key18": "3NVeMPZRmgKVbaj8hYPZ7muPqjBUDxmtYrZCWj4ejZ6C3sAQeQjCBWzbACaCbrtGjN424HfHXDM1Qitcduy1EFxb",
  "key19": "3ELT22E1LvBdQi3C5cmZJWe2wgL7RbPujdMs7Cyocs21ujPWpHfpZK4eWpyoZkXXp1eM2BuRYUFVcXEWUpG2gypr",
  "key20": "eyuW3KsYrvQvNbJWzWdagBFdFH3ZNhAzo3W3fvVg8PoD1tp7UrLHpnbbHj4oRRZzAad2JsXsenWgwKiv1FEmf84",
  "key21": "32S5EGvPLD8kLX6ejCBqiZ64hupyGoAf7BeoxeSXjX2uYbEccuk1ZWcub6qzwZop4uFQLVLmC9sPi7W3KC9AXNFg",
  "key22": "5izCYHK1bQPi7oKXehf9nLrzvNQcLAMct2SehuK6xck2tJVzV2faoRu9onAVhYxpSsHS6kRWR8eGJ2JmWN5UZAyB",
  "key23": "5tMa15jkNoLE5Z8DDFw8FwRA1jBgJRwyKd2fjBMxXJHSApi3i9NSe43uQUDcUWZ8ScPrtxKGdwcSfXbnXuVnCfqt",
  "key24": "3vnPSRTqP7aNyPfXgbuvmZ3U4PUktraUmDG7m4H8882D137xHTsiVHGztFdQBFrf7bKUnq5Fvo4MFZDfamYFu31N",
  "key25": "3f2qq5kZjN8vcktAGevVkyaM6QxG6e9apEYiyFmGWYsh9B9EwtXoy7pix1CnUyHpmNJb3zTmafcVPUqFxvRsGKeE",
  "key26": "21Cb9mtEaAMA2iBXHD8ua4KmpZadTiwEadDPTMhMMFGkDNgnh5KVTYqiw2Hpk4YzT8oNeFdYT2ksdshFC8AW2nZ7"
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
