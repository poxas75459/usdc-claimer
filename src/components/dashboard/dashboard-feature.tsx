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
    "5hN7A7ZX6d1rqud361QvqnhYRgKHXJbJpgCPpFUCbMUL4igFSG9HFps23KqjbE63RLWRTjwDrzDcZ3LqAmWdoNZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vXzwavqUbkG92jN5Tts1Uyn7PJ8d2wu7xNao9Z1RbXsMLyn5NYHmtgqKW2CYZiHxZ4nkEvPX9k9CGGoKMhsvAQL",
  "key1": "rWkPh5iBbz8e6vyh4AnA8NrYmZcBhbLP983TswLK3CVyBGBtFKNoUe1caHjjcyfoewr23GoLYRA6YtsEirnKz8d",
  "key2": "3pqgYJRNg2cBbsm9TEN3pfqtUYvTY7JjtDKRHdqxVjiFY51z3qLEMoX16ssHRbFF6T6Ezrq7yvRtepbodePXWHDP",
  "key3": "4YDSx2ySrcX2P2Mwp1K1DCEVCGCB7aUHxAoBNr9m6oU8Wj8CiuuPQgghbX4nBQYBRBspqcuTGFNZKnNBhYpzX8ku",
  "key4": "DA9ZRCUKfQthuHNUy4FHBQbciRJw3WMM4wjMrAo7YCECxChX8NLERkCrxkuK4gGTRukas1ShbYkWdbxxubvLsZa",
  "key5": "jDCNG2qiraLyEeiB8C7QcqgmwYLEvXJqio6ZvdHT1HryEPtoEjyJZirSixoLRf3sLCQEXcSdSKwJwwySsMoaVVw",
  "key6": "5QZAuMCCDAdD2psL8TEa1Nz8bfPt4QkCBa9fH3dp9zAexpQx4NSsyywSNezT64MNhCH8ZLbPbWhfxWoGEw6SnmV8",
  "key7": "3XEDtnFKpKmhbee7WZDMMULCq2xCjsATYgBNsJiXQc1TvaZhi4NkuiefGzciVTtpQy4mK6tUoQ35cNXoDJKEYD9Z",
  "key8": "4T9Kyji4XLytudzn4KgtVcasanQcpsDpU52GFeEogRSV4zz1tFAqDYtud8L2br3QNz27hNYmzCPi8A5eendiRc7C",
  "key9": "1aB24HEevsXR2HSaJGTwdzTRS5CgL16Ber8wA2pGzjvuQM73thQvcQtxHSsv2NjoEYe6YPf7WZs2JTNc3BUKGVU",
  "key10": "36YFAXs3oRSXxpXPZTsuh5m1p1wTQUZfeaBKuJA9Yj3jHXLKdsv799jnxPL9VSEj6SqGBAsHifMEaPGVg2kjMyLY",
  "key11": "2n71yZhXrsa9LcgR7AJEYmpxJzi5VK7uXeSwsVofALx4fDcWkcrtfSmxe9Ry1CbA6dcLcJhF1KzXQPqZTjB7nWJf",
  "key12": "34ZxMySYNZ1c8Ca2nsB7CA3MttLvH4fpPG8hvfLjXbibHxWATmuAy6KfJHNxwdMSan3C8sZqXB4X57T9DsoSo7dp",
  "key13": "3w6BoDWNqyrVkxuavXkHNGhXy5tYnJeAFUqbycECbULUCXcwa7GBgRDCFdiyoVNhyn4FiFG3hNtijMRyLQPXpCTw",
  "key14": "3XJ34jRPZZenxXshSBYTVmY9D5c541tfNGtHGiQuYFzebhZswSk1zN7y5Fs1GjJhTmzA253rsRY9KSnb99SEfhoL",
  "key15": "3FLv1uXPWKxhny3gidFbFyEKbixhVjjo51wM7VKoZqpDYNn3pqaaRtxtikitcYKVze5uWzqmBJRCtefn5wM3h6sv",
  "key16": "3Gv433BkhTEWMUpZs8ratJHpbktBFmLFpgetmxu1RefHMiQFjW8vn9GhocQff2H2gTM9qFbAhwZWiHYi3fq9G9Sx",
  "key17": "3dBwh7BQC3TBeGTfvUuSLMTBnZcD6qv8wMjjbM4FvAjpZzdpF46zhqQv48UBXVLjcvF1rWkq5EeBZ1ouoSUt35S",
  "key18": "4NHcEmXmGF5uvRqvbgsDb9MG5Y8sENQr9xzMUs8oDzqxFfUBjyyWUQNqKZe8jA7J9bJF3D7JAbKaYNcpMahXJz2J",
  "key19": "4JWFvS6Myxamp2b51AWt5CPbGK7GYTJ3yvVcGCTrRPpikC82imeWveQNNa67rrZWeXyH2UTF1hYTsihUs4a7VxP8",
  "key20": "3Tc3VvF4Ld9zhkP2P9dhnd7aUK3YTUikwxTeH8bnkfrDrmbj5JJkyzeGDK9SBYEECJsNKWx6pYKZ24qrHiAPRY5Z",
  "key21": "2xPrVTuvsFwmZEvvsd7T44MCSKZof1BhMHmLdoShEvLQ2ig35ECu8n2kKJA8ux5SMyxKkSJJfJWMfZzvvzgWdDwp",
  "key22": "5owt6Dk24Qij91yEyvELGjv4DsTHisa1rGFqX9aqXF3QLitZMsYMc4tCv5bwqZYD89zt36sztUEoyPJ2JMuRAQto",
  "key23": "PHhqdkQ1JDDxRdbowDD1Vhtu4Vp1JsHG8f1LhMKqsfMVpwXnA89oz2uJvuJn7W3MuxxVzRZn4EyZ3bqGgLjmd2E",
  "key24": "9faNuzy19Z1wg7M4ktpjYcECM2Wff4oYKR9ZBv3ckZyrm9MrLA9eb1PdkFhzo1wA67iyFJPckHendatBPzqJFNj",
  "key25": "Mo8sp2CW914fSrk1L6gYjUL865X22KtWGVPMJ2jtE4VDBvYNqPKCj2qAt9oBmJPzGvV2y5y4YKziZ5kjVRezEMc",
  "key26": "3ctzTtscNSMtGxuVnM9kr5F9kKTPkQmoFVWkLbg2xSrEvTxV1ZEaPmwpE5x3MaW3zb6H7mCf3LCHxzfLRwJbQ5pN",
  "key27": "4xaCMrruGwUWpPNYsaSyUePja9L4SqXNifiBtV6KNuHg7WQobXq2cpDTWrVrdipGfQLUmPjfbPBB72SWBNHhL36Y",
  "key28": "5n1RT4RG4nLQxf1JLBs4upGbA1WAr6M7FE66FZr5EUwiqeVJcNX6rFD92dsR8vG1eyGodTe8SqNHMZteRFw9Zz8Z"
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
