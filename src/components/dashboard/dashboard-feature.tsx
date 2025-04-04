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
    "vYmi7LFayHWzhTfXCL8Pyi6HubqspQqYgKXAGqR3wMcWgpJ2HUxZWnnvHGEtzhhFHDos4Gkm45uVJGzfkvoYLUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExxKyXZXtBpNHoacPAxwkUfimj81kERAkJdDcwhh3fRKzvhqrPY4yZxTgtCkpmS1LZeR8K9zaKnEo9bAa93nxve",
  "key1": "3UTwHQ1jCnW2tBAd5s3mDNpnRdLKCnPjmcS81r8udrByFzguPjB9QLsgadUTzLj8Y1XKp9YRBJ1MK7QnspYJtEoU",
  "key2": "31vijiXorwTsgXPNLPHbBW2WxY5Qc1noPdBsCiwDoht5pKyXwFeLny4eyTxcEjrEE4wZsQ8e1W8zNKRtN76yS5JF",
  "key3": "22Dapy1eipck5mQPtzxskGPoSnaA7JdRAyR2bWZrzippZduZRXLEYHj8eBoZycKuhq9U9STeWsCyTC1wWakeJ55M",
  "key4": "ZMyezcTr6s7osyYaAWCpa54PyeTYsFMSfLz8Bi5RWjBhzbt6wGYCb1KDoBL5fZUZJSxfmR3gAJDZV9iUP7quXAf",
  "key5": "E482isWnGFE6MX4PTuvtekSWJM5SxbpjGkMBMZY6AZc2kvSAWbjr33ivA5V2onMQxU9nBWL6r1TEc1BYu7KGSc1",
  "key6": "55dryNcQdqvWeUhpeniaLmMZ6QvaaC2QnD9cJtqrRLNX18UkdaFdq6MfumjMNzcxS6CHaoRQztNUNxr2TXWueyzc",
  "key7": "52KB6h9g99K5gq1DY425VwucNqdBvwfxEYT34P1QsxmwGHZGFwZiLPvD6oPRRtzrQTPumHLajnrqXKqSud91Nvob",
  "key8": "4jwtoZuvcT9DbLfJrTXavsSJTRzTBD9VXwHTQ7yPsRHu37Vj8rHHGqGGBYpogtjmLoAMjgiPR9wYxCDRomyFdhZg",
  "key9": "62kUaeFbER1iufujDoE5xJASJySX2RSCS3Cj6KGuEyBfP46FSTYYsWAmjwNsVpPPoi6tYnKvMJeB35nPAahQMKD5",
  "key10": "39E2C4JW1jBdbfhmn3ZZ7AaHmSDfcp8Wka6bSgiWkvdGbfbv8vxu1xMKWFEMWeHkRm9mV7vns8FmBDQCCzagtuLF",
  "key11": "2yoZGgXu6YLBN5mxdoyaHX445W6cXKvNHnepWAanUfDRyVwfmXotoBEtstGJ9hpyfmgQN5sAjL5zp5p2ZARNBir7",
  "key12": "3jFde5JAgv9pxxfFSfzMGQZ1qKfTau2JbdTWqPSTi7Nz3kpzEAS2MrPaJY7Wh8NiGxH5Uk9yAcGRCZm8rnFZMCMd",
  "key13": "suXeKuMVBPKSv2DhWsCCgfFcg9k4giqig6nsknRaSVRUEuCjBdcHpdtFEMMiDWNFzjKid6m1QgnNoX2ovw9iGgf",
  "key14": "5b9LQ3Prr8WdGSSap9CmEQvEK369jAE9GmpVWddCXjohudRQgRr7CAt8LpWQ5pdMxUzimodBMb4nnxAGbpwDqciW",
  "key15": "af96BiUbPFQr4n2mSETYAEMs2HwvaF2GosYnHMtnZ24oej3c6WzjFxDPpRFhVpNJQU1vAcHoFSrjwxawqwbrnHz",
  "key16": "2eYisSBULthsQgEUCw8d3RgotzjWfxsoibjG4PMLrQfE4k2aoDXBUNsikaTo9tKE7vatU8FKb5XJG5SEQH3H8Zcn",
  "key17": "4kdwGqX5FHx2UFWmexY6EmCnC3FakE7DC2xPzaLrHadJBMKeYmAGiVACF1diRjTJPHJ39xbMTXTPYrc2ERhJRoYm",
  "key18": "3mkcimq5CLfDxNuUtompKHtC5buKwYVsTxVoko2n7B4TNJpczDR4u6yUaqMDvGg44v8ddbTwdqQgTz3fBWjUthex",
  "key19": "5ksCGUBqRVixibnvaGxK3SMNngf1oMWot4UQQTYm7xJCb14bK3pnJHRkRCsFERqyDahSUbMsLg7YPjvfTvrU13Kq",
  "key20": "xo8TZTHJ4wNHgk9DpYQZcm2tzTQsQ5kSkbxc6KqrE2n5zdR8BhUAMsMjH9tAvw6zmZMXqWKJnwhLqePPTHJJN71",
  "key21": "NkzyqwNHrQnVv4esJMsLpgBUGEi5y64ysEfok5D5gxmmUTqgKJqLs7YivBeQ3a5WGSrUxCyLKnX99KcVz9XSasv",
  "key22": "2Cm3BYcTfoxYaRhAJR4yqQu5JC3WBnu33bDHLMEgN9Q9SdyChPrCimD4hpWPKxYWFkYcFgonvRfWMNSu7WAyzCQr",
  "key23": "3eY4Hv6t6up6q22u2sLsDZKxV2BFx9JP28jjNcNbJhKDUgstyhaPz1K1HKa9X2do5jbNTMorBcxuoUj9C7iFrPug",
  "key24": "2kvVNgy9t5uARsyQjk4WCB93d5mS8e7TmTqmNYmu7J8h6r8ZYYBpaYnue9tU2J8guvMGqNNMjnufDkeEQDeFSYMy",
  "key25": "3BBJNuD8XpkMiB8KiQebhrV57ELY2w2Cf8MkzirDfaaWnL3KpPqHj1XXFJyynZ6hJz6QKCoJ4fxEQSL32B6kut5R",
  "key26": "49q7uSsUD4r3dwjR4Q5K3RFSRBWvbeUCrWxAc1vnpfh7C68L4o34jKF57Ce6CNNRF6trjJJfM2erKCoEcAv4MGYK",
  "key27": "3XEAp6h2cwGbZDKfMBTbqW2ijHic93Sh278wVB7VnZtoaSVba6XL3zBGG3Y6iwfL19aKydJxCjtCDgRUEvHfzoLW",
  "key28": "4z7SDTNWncwjYBbvrJVee1pRJYHZEZANHiXdnmy7rUKUFQaCbwDbK3qW4UxHqiE344RyK7L7mmqRGvomeWf98T3J",
  "key29": "4wgekMVnfxNagZ4rL79CJDQjVpPrjgMj9Lz6MhLeDsSdQQcVQZsy5rSU2ihmcYoD89Nia14FdykXN5ZMYMNDmE7M",
  "key30": "4v6jgSFJCxBggjM3biCisVb14CGaL9jpS6c2eRmBVhRHk2GbG2zZRzWcUK7wACxRU6Dr5mCo3LGjxkMuZHqyu13q",
  "key31": "3Vy5ucNik5GJNj8jjPC4cAasf3FW5pyKBEZC7Epg64BGhPfLT6J3HgZXDDseGi2iyz8cKNLppFTLWxgUsWbFXsUw",
  "key32": "pJHv3fAFsvptCRZQfnC6iM3G3FMF1WQFUFns34QgpffAKaZ1NruWKrWxMnwDNir9FnGwWsCwiKGFUaxcNvFSDsf"
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
