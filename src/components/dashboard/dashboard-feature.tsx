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
    "21A3JLmMrpCVyZnM7RFEzcCGSpqNdrEUWjwRQ8Te9Szd3anG1kM8FDJZSQ5s4woVkAwt7BBc76mnTioeCjkJ161J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgTgqXorJ4ndUL1BvutdBR4xNgKMZfP5jVJkeXGdd1sQ3gCH9hQubAm36fvqPuu1yAmk9cEKmVGJawrN4WSsk3M",
  "key1": "D3N6HPojPU9T9ax3ZuJsCSjqaRrfKFByC9wQHvJJW8dYqCSJ6qKBMKdzyU5oYVWTENgnCDEXtnLLMJxjeZU4vUT",
  "key2": "4CjHzvZxNNqsQr1j8o9rnkk3aGRaWa86V7xXkhYTDS6CwrGFmhHPbo8qqDGjD5pyzw44novyns9ouaatG6Buttd5",
  "key3": "4Vy8F5CmrfzH6QrJq3w3VewX8DHBqzd7Q5b8KS25sRPrLtz3WdQFS6aZTVuc9H12E5tttVXJRYyTH134PZGWZZb2",
  "key4": "5Wsr8askSnUuAZS4kjxatkYZEherp3rqAtddznDv1YQxoXr8ZVoX7LeiMgV2QdCJQThKjhCbpeUrq285qy1R7VQ8",
  "key5": "YLoLmeyZo9c5PdiPENnafmm5WBaNLM2xUyPCWXYSUeHaeQr9MVmSwZJGafavzAwLNFkXhtxtaQg2i8VU1WiEDVw",
  "key6": "3GCSEH2dJBd4Y36bzRhC72cYnpdYRLjASV1jqTt5cg6jN696w24SmthwhUfKumuXZbWgiddq1naDvfueQ452HxWC",
  "key7": "dksSGPpY78rJwHVQVAR7chifehzzYwwXZHSXszcfNcJErhJZRKL3gWPvTfYFFepJTaXt3pFMBX4G5ZmsZte5bK7",
  "key8": "4ndGDiJZYiy3DrpDXHe5evYpV77GPdpdk8GQpDUyGK1bLBhmgZFR7EaMSaaACXmJ53tLGFFFfYwhWPxMZvhwMEEM",
  "key9": "F6YdPcSp5awCDQ9sw5hNDDETKyXxEF8ACySTnCWDeu63YgYKg27eFuha2HZ8v2mpbcPmxc8kS7WGv1ePC7YXbWD",
  "key10": "2nwpQ6iU6SPPr6ADEhAfFAVRd3LZznM4Vsgjihe3ptera8oHYAK3HnsqQmbKDs2VseVw3LSPrjtPKBXa5JaknWW9",
  "key11": "344MchU9KxeMHQQbGMvGPjAVWibHSyPfBNNPjgRKoAve2iAF78vagNfdKZVNNooXtafBtiXDiYd2H1LfNWxiQzfD",
  "key12": "5Jx7f7Rz7u8823BiRGtfZxPEG4gbMymgykNKZfQ5jWQ3z4zA9KUwcmysrg6dpGSo1yMZNZ8tNJKF8RxYVKMRyDe",
  "key13": "26oESZ8whS9RC6H3meGDp8JdJEkpEiHAYAk4H7hLjxo84CRAeKGb1iLz2j6qC59JdCjAJ8z9WUVAi25kaieBpami",
  "key14": "4jcpk2aZfeLvjvdxfgSNydmSsLDg6ogTJfUP9jjd4UNJcvXF1sJZ6XP2fELjAQjQY5BLbRjrC4nmZ8XJ7maawDxE",
  "key15": "4FV4UXosaf4MqwxUCdC9qHJS9KyG6cJXsm4VAEgckaJq2J7rJB7TPrEopkQBMnBYPRzBAVsTqUfoyVsy4B4QDNNG",
  "key16": "Ygpryb8ALgVUnQFKo56c9qaoQBnBL4JFGUiZsQ3AQFYCjyLb1yMuXR7FiFxkTykYAkzQkaysr9Tvc2N6CF9nDXa",
  "key17": "65Xb6K3Wxd1QjL9Zkks3e8kgthPwNc21qaKJ1gqo67ZKz8cUsxZTDzTp7EWkA8igv3Dpao8mqY8aHh9pba7mAgpj",
  "key18": "4v2yQBe5E5gu5J5zmwZPdH5vfgotkLfCTgmJcr5N2jGFvw6v2HFAHZXE8SyqfkB7bjMheHzGz1xyaLpy3d7TBE7c",
  "key19": "3yMTdpSzRV6rsJX4qYo9jgnCSmyoJp9mLhV1jqhpmxgEKJejeDb6KWsdeCPaUnYmHkDERhN7MJFEZkViF7wZsUx6",
  "key20": "HQxCFdGBsYo6jRaKhb9zG1puNkyHRGVLQzfmBWDiiiZZV1H4xpVVGEXR3xb2yJrARuPQGcJESe7htmSRKnBVR4d",
  "key21": "dWegQ5XN2fPACu3fnzp3fQwFSzzSe9RJ13wLcquLkDwRwYwXuigYf3i2c2SgRqjA8KnT81qDTho7XwqZVWEYd4e",
  "key22": "3vc2v1vqH4TPYPU3xRRLmcfZPb5qTtspReRzD9bawganbygdXKA4qsUec5AFfGraLttkkyoV9f1eHNpriRp2JF21",
  "key23": "2RdC8CAKE9TutZJEkXbkMDjYSb22W6zVqDuf5MxYnXFVfUf4FdZQWZWw3YkL4dmYykMEw7siybhHLNcRGaZ4NgdM",
  "key24": "2X5MPm1wopDCxYJvbQcaXzAP4bMXYV5yxKHpysh17TFn6TKEQXD8YNwj4ZQ7kHCCHhqvwkzsSsZ9mddDGkCJz22A",
  "key25": "2WV3yfmyMNWv5H27Pq4jgd5mgqx6ZJnqcqYeVQhD7Zaz5hFvffMNj7ECPE3Ckko5xsm6oMdHifQ5DCDiQ5UgGjvh",
  "key26": "3bG7dnmG7mycZQ8dx2YK5VtytWVFV6nPgRS3cUXPbDD8jDErR6ZDk1yMjjRUW71vaHAKe2rRTP6BfGRDUNZ66ASo",
  "key27": "5XgTMBprEvG5DcZFfnSXgrHJqt69omDnjCsbUCQwCodyJdpaYYy1a2jWKkFrv9PAiivi6PYGDxy1LMKSGCu89uyA",
  "key28": "4iko8W9ZEK61mCbmNFzz7ARBZb7wavafTU1QRd1vkdvAYMjPtqKJ6LiS1J8kiaAmiDj3HjEtqkxxqBfhum6GxgGL",
  "key29": "2pfurdGE5oTMBNZm1YbELNKRuQL2VGR71HBH9rXBHq3tyJSkzxbw6EJjBgTLD4sX1n5HmLJnu8XSiyLpktkAMksH",
  "key30": "2GPHrBJa69Q7mHymKLTv8ZDxPCCtayn1qpRgQVJt3dkGVUm3DjAKuQ3fR2JZ2EBGEytfMnK99zQjVX6RFYAByqP5",
  "key31": "2dMQo94Hd5k9i7U7VJXEL2WVTKeKBRasHpLGdDAwwzPq1GMB14WMhRraSH8MA4RnkyBXuKkBThoncys8SbJJLyTM",
  "key32": "oMjiGE2nFBj4qZDLBkpNyPsCeDSrGsbhodFUJEhC6on6JU4mCNX5YHELR6HLvnbZuQMKrebaNyBdMcaSfQAWVS2",
  "key33": "546o51iUWPRvLsWmBHgV8rJcQU9rtveLtRP1ugApKcbcsumXLRA8jqPXisVjHHRPTJF6urBhj2CBNBzzwdYMxvGr",
  "key34": "2H8Lfe576zVFbgzJ4CFQyEVSxJDw9wCoFrDVAu9cSo4JUj8joPeVWGGupAtBZDcXbRii2piM6MiSsrXAophdKxK2",
  "key35": "3wHzPiU7ECxzeAGpcxtUV7czvZULDE6P5w6DEFCouvA7HJiqhLAkpAw5pePJKojV5bBj8mYJkszcmaub5DqS5v1Y",
  "key36": "2LT2Da6mavmbAerHxHoqVtEjuKsFAdTgkz5JDdhqPJHHZXfW5x3Pqj6JQwjaAFdcqFGkFs8rPdyiHRYfpND17iBy",
  "key37": "XDCPbEUSAC1Th3WTyMwEA7tj7y9K3mynf7Ekxg432E5FLQ2T88T3t9vdRVDEE2ptLpWGpqFLJ5MQBHp78LwrpN9",
  "key38": "2sQR652cAMYRfS6LZmTd4KCukAtAaVLR4GfiFGWFk4jt7Jecx8g2SKQhVBdzMWBJdULRbpBRmFdqRSxah7aqVoTH",
  "key39": "4vHsu5ERosLeizrkR41LHqGmXL3sUNcV5smDaubMEMbsTyj49AjEQ1J7tNz3r8t3eBpLHj83ozSTBL63ibu4CZ2m",
  "key40": "3SzwkDQx3j6BLefwQfDXvDKvK1h3K43BuaiyYo3fqzgmXM7T4SriL8hk1uPVdfEeiWXGCbZw3tQYe56smJ1vCYHP",
  "key41": "4TTansDL8xtB2wWpe6A5hyY32Hd1vaJ8vqQgoTUwzTVj7EPDXExXo5jNNZKUPVjvyBsjPHuouaiu5CVcXhDTaZ79",
  "key42": "2pCkPoEjsFPxSb5SuFKSYHFEq6t95Bw69BAZnxrtiZoPEeWE8wUWBw7SGgnPJDsPQdSc5ybBidZ3qN1XEXs8yGnn"
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
