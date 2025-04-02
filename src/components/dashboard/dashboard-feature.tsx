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
    "xnE2m8ZEJKQ1uURQdPe1ST2ozSmGDki8WAeTv83kdoGpE8PU1B19JMg6it1jZWrgnDzkXuxCDfMjPAJUTzkVmeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r2N5MPCHndBgsLwSuhgq8HNZMQTVxJvj3oMnq5iZsvDQmSEQJbHUmryB6xq8kXA4cZbzCduRKt2PGwhySaZ6SKx",
  "key1": "KxzV3puLgwLvBE7dWVqhoaZr7gnqSU52HNqKjtfGhmxVtFxDd7Nih2pwHsB8LM38p2xjj3io1yJyqFxYvaVt24k",
  "key2": "5RSPzXERsFaa4xLFNq9rbnMwgP523FHMLh35QBeh4qKF69TMCGbZeQNPgMqgaJDx7T49TbrYqKyEPggV6Bb4DeAz",
  "key3": "4BZLGBn3B9izRmMJhtUDSKGgaLTAKXg5sKcRbYRXZx6CZpwMmiAppMNnird2xyXJxbaBUXLkFhhuQ66WTC67YsQo",
  "key4": "5sNMvnt2maeYKqvX9esYTqnRhQLSwTcfMFEUmXFU7NnEK6z1sgTvPXcJcvUJQAesC5xdCfGW9HozRhAPVrR2s9vb",
  "key5": "4C3sDT4p63SeqtyqchdYS2diXWZUrShAcZrtStMe33CgWgYEu6TsVsNce9hhJwd7N186L73AL6gVqqCkRRpuEHk6",
  "key6": "5YVh3rmcBdZVJnRZpmZrCpCA7RthdkqVogkyunwNpSuLtbQtUFr8DHN3NDugRcPH7G5f4xmxxCoFCPg6VGS8j8CG",
  "key7": "4bagd3Wn4V9RTUw3CbWvSbueaVRjuknj3WPwi7uXGN96cZiPP9wnduzRssJahoSoasDbrV7RVV2JCJbNtU7evjmD",
  "key8": "5d7MCLjdiYWZ3rPqhh4GaygXyQKUNQqocEH56hVzSqrWqcDs1BEg2SrGfj4ZBviGgRn8XUYNftuCwCeHYr8TM9yp",
  "key9": "4LXb7YgBnRLde4gUX6gSX7d2VQCvyACnhLBLFcCuNSNybZPFZ2Q7AE1YN9wcruAz2VW2xFWXpmTBEEnb9W2frJqY",
  "key10": "4WHwiYJywDdr8RXtvn39S9E288gXexrebRhzsb3G9BKXgLnk3P9RiTMPKpxNJhSBcdmf7HtnmgENcHFem56QNh9p",
  "key11": "3QGjtds9zVKo71Lj8SdMs9btiQET6VnsBKnGS6EzeXuw5ccyfENrVuRFF7VLZC6YUvpnuB3TCRhFv8qyr3i81QKb",
  "key12": "3Rb4agXyeNB94FsZL5xjsR9xAs6SBEk25eENCLDfGsAm4CYUcpnghBtVimKrJgaHh7RRG9nHyP8Rspj7MPMr8yr4",
  "key13": "Z6hXfXvTGXqfbRUd9HKE6pj5wAVekrgsoXtW7G17bRE2E4bQBbMADkZ35U5xgHzjAYF6iJCy8Lh8dUgjSNHymGr",
  "key14": "5fzw8h6G7DrhJMbGYb9RnSABpuhf6zxgnQQtksFa28KpfT9LYezKake6wU7FVWM2GJj2kKuRnfJNb4BQySksjx3G",
  "key15": "3BsCJe5pCUrsVN7otjhs9vSCChvcPMm5adQsLDJUBYa9cCnihgwNRzWeRixi4NuZm54RnViNiHthR1yhgmprQo4p",
  "key16": "59apdu3Fpn7WPuDEjspmwg2TFebJY6yUnN28d7avsNcHcV2AGFFcJRKRuT7QdvZVFUziBWeQU9vSk9V42pu5yWxk",
  "key17": "5Vg7YW8eWUz4N9YDrAGAkJkuadEQTNsVUMortLdjAPy6VhivxQNNjFtb6TE8cYWecGrVLd4nmh6UaAwkKu7t8y1W",
  "key18": "5Lq9jsA2sG27uKzLy1c5TaLVvanHnKuJpX1qcfFwDLS7UNLf54E4aL2AwSbxzUg6hwtXyisCP7iBrcpPQS3gZeE1",
  "key19": "4kLHi6awRzTB1bwhmeaBiAZotQGS4cwoVAxLSn1tVHmz7fzvsN4fJbDNEYCjaeBpnCv2uiu9eokAzuZhUG2ukgZe",
  "key20": "2px9BxoF9WVH3semuJydzSk2hEdkroeQYGseVkZAgGE2YqbLFkyWCrFQ35GKoAfNN7ux59TNeoppAidQ9ESqc2AA",
  "key21": "4BQ6q8ym3xTtiqcY6exekezQqq3yZLZC2qkCGeRJcZQB2Ei9MbbGWtS7uY6GT9hC53TEuo6ttMMLQ1mwD2KzHtso",
  "key22": "i9dwFPA8FA8Mb5dAUfxb2u35h1hCFewoQ2PUqYCH2Byi1vXYGqP3mFRJSmeBQgW8JCyZoyBxq6zEe5hJTtYB7zH",
  "key23": "33Ko1ZdVinbp2KXrYuh46KVvoMr6q6dNSA1bgVGGwyZfr8QAUQ3itSfAxp3BYzRVu7wj67kZaXViqPdJopFZKPVF",
  "key24": "StZh7PUFKf77CZ68tReSaYmM6MLa4nBgWva5ALdrDFbaes29FiWYkEhRUX2NJUqXdBQ6X8Nze5mXqYgEPJ6CBjJ",
  "key25": "3nxbBhhZyq61iUTPBoXBJbxafyoaDaLwxZzLyArcW1wRPWZSShx35aoqotGG2VXceC13sqhcUUKYbxti7VfZ3nBK",
  "key26": "5d1M6xPZUBsMNDw1yjM9TKK93JCgWRzexLNrDuCBJqXSUqGtXpdnFDiofHKu1EqSXS3LUa5WBmRdmfNvxUxpXGU3",
  "key27": "4i7jghyTCGWqkRMy7Gx5Fv6UvxhsWZFRf3xkQq2Vf3sMN2KaQATYrDuYd9aSSnfchQWzgDKUzrJWGq9nGcEbN8Nd",
  "key28": "3UN2GwthZaGkkByahZ6YGhoGxpPKAfUqN2dpdw5a3TXpfgVacdbjoKpgWf6KzTs8ub6EeuACmP3oezcbpawkDmh3",
  "key29": "65jkSsyiSaKfKvPczth3N9zQLZfRTupVGMY9xvnfUpmAAy5Ws2499QyU1zrV3L6uGDThBREXcwQyGRG3oJRSuX5a",
  "key30": "59dZ3F5bAsBVLQnefhS6WsnDdcghDQLZt8cbY3asUuvDzxZHuKzPjaV6goFFCJJDFedpVB9muPyESjCgfeG77ZLh",
  "key31": "54ngfjYt79dJBbmnmGmBtv5KKZ2TcykQyLiNgsr1EnXYHr2f9W5awcEEw7AjkuqqQdWQGfuujat1bbAbAsqHuZyw",
  "key32": "5k2WLZtf3Q26DR5p24qafWJ7tsFftfgL3kCzX1ahP8cepACR2K39dHwHpumyXfiNo4vL6D6kAvBKKuThZ65upvXN"
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
