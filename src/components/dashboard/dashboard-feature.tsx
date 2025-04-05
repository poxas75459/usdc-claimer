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
    "4jgTv2ZoC7NnqBMg9c5fbSDvG3b4M2Kmxq3GWtLJS3oe9AdqZw9QzkhDekaLCPupvzcGPC726HcDKSyTnz5bnUhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58MVYwnBG5CkrRbn7vQvtUeugVhd6aR95WrWH4xmPFsxfGawX925y8id9jiWnzVdHoNs7qtFpkq5mUT3WuY2x3ym",
  "key1": "vyHBaQJEQuCLFxYkHHLT7NqqcBsWp6KkEwzhs1Q16nshRr1ELpv5TtorRNF4XZ8HWHC3Jnuij4tPpZjA7eZ3uLE",
  "key2": "3dpfy1jwZWUiTRgH9ZfpkqB2Lu5GgSy8PP37tDw7DgYLCjEzaFU76co4w5E2wzKzLYCCCUJW2maAUD5Pi6cZMT6f",
  "key3": "PYiLSDSnrEatWkq9YyHEz5hfEGcusToTQaSQvA9bro3DVsSsDMkcCR5nTY1PHzTJ8ptrbxPPvJitpNVSywiFMjz",
  "key4": "2xywRFU5U9o7fMkhZwcaBAYM3pRnDEKtbe1vVXN8q3Mw3CdhWA9n8TDK1AYu72JyY33ifh1RC1hKsNgRDAW4J76v",
  "key5": "jxAchv782xXm2wutEpe2E6jMygvzo214EkgKGeMvkUsnvuZA77UjWmSF585CqSMEhgrUL2ar6fMywn1ENH1bL7T",
  "key6": "4AgMFJJYH4Ua9an55suLNT1PrTcWUUAtNePUt8Tpao2LTUfimWLvf7LUdLYfGR77e9FD2ZdyNTZbwQQkiePrfyQc",
  "key7": "p34sRcY7kfJBs8zdrLNnjKXoTaYMw8jHXVkfQs8DavzTNkVgUhZKM9bkeiAViyC7qY1oapq1chjDhCsGC65hTjt",
  "key8": "365PHmpYnPbkznREr4HUUX9dMgocQTaUBpzeUMvDb8uGosv5DJXjEdNvc7sfQKDDcJ2aHWXgoN6XLj3QRMrGNo85",
  "key9": "2A4m2mbn84tyX6Bwvq3pxK1gVkDVDanLkwvBk18fWNQXjj97C1uvrxJzExcLQ187gNgukoC9oqHaptGxCk6k1rnN",
  "key10": "2HT7Bf4NFodKnLXrRXB2uPEoWHW1QnnfhBDAEQQaHJv2Q4GD7mqCKqbGHrbs71hSFWjCAWPT5MSatj5eVYgPN2jH",
  "key11": "5MZC2i4kc6Yvyg26ygXD9Uwve8UwsucNKAmxxgxtUdSkMwyDKkfYrGdoirq3UKfZxPa3bTtZGv9N32xgWZxCHozV",
  "key12": "BC8w2KofqQKU1iXANCPheHcvLQf9KwbTBV4AUiskqVjH9P6h8idkYKeGdWgorRxdrWYteP2Ec3evLE1MCz671kp",
  "key13": "2oim2YrnpvL74KpQ1FtJmf768esNMZWPyoXwEWWvLeJUuuYPKdZFLPisFSx5SszVBVmpeepxb8UHm4rajhx44Sqi",
  "key14": "2tzsMb4NmuUtkTiNvdwWadXt1G6AVeARzs9Dmucjpir6HFTTqjAS5QaX528zvHFMQNVU7CyrtuTAuCqY1uAvkbNe",
  "key15": "3BkaYsaCHeqW7mSJXapeVgXw54LWpDpEi6d6a1Cp7cb3Ak9dPXpYdCsYR2Ua8K1rQKaWPjrHPqUBVRcmGsE7w13a",
  "key16": "5pTq3svN6H3k2Vssa7GfoKyezAJBr4FWcQ6ZQwdBNJzU68126VVKwVTbHASt2Jm4BHnCtWifM8CAZbD7Sd4udqhn",
  "key17": "29ggfNAAFbkung1JgE8Uzyxhe9ZMmnVfQcjZSfvcRhZNUN6G7SSNMQfHksFJYN6A3ms7Vo2vXAY2bKmdJa5LfoRZ",
  "key18": "hJV9Hn9y7bPXFg9SuSKxZDyVFQc8uyCf1jRZWW1BFp81qDCftqki6YD8mhEEdgtmVkHeu6Ba5nExzfsB76XkDei",
  "key19": "3DEjiGS5uB9sqbxL52cq2ybaZ4zNZ6EwTA2UNHgUxgrnFYLK5jjEDLnXjCmgvPwgAoBZFULwDweexi11u4qJCpsw",
  "key20": "3d6jDThNkhWQr7utopeJnZCiQDj2T47m5DHeWmyuSsYtj1Po7vLk6ph73TYxVsJssabnSULLA5pNReUC8yNaeG8c",
  "key21": "3TD1RkC3wgraWUUgRqcQGLfafzTiAU7M6PwuKq3qqEjBvHEi3j4EtjaBkBFFxCcBC7h3HKtLmpLQ2wqb3SokDVVN",
  "key22": "23NrSM3imKqb25YWxZVFbYBY3XJMMYYqKZDtCbLaxgYoux4KJfQYVAB9BGmYk4GsR2N1dNhLP9zEy8TTuPRCyaD3",
  "key23": "Z7dXAvbAX3MgXRu1YvozeCrUEku1ZfBihuhbRMmuE4mcD4CXw45vkZ2m3aeLkTo8BoiS4hy55NFFqZueYbVP95E",
  "key24": "4onb7nedn7uCEMgu2yyE7WmhYx8yEdPpnvRVVCgN1GEjKGE5sKBU3xgpjdTwh6neTUyYcQR7tze7WRKfbZyzpU9Y",
  "key25": "2KkKmzdjML3BRFiX3A2FadsML963fRf5i6fFGsZDzzYTwVzge47ckpijo4A9q63ZSwWaNkpygVvZtLpePKPZ2T5A",
  "key26": "3QJeakJuopj5T8VXJcReyk23mBAsQJtY2VHEkNwftfab9MoAJKjSMtSdaa4y9HgwtzCX2xeHLHWnLr5tuLphvmju",
  "key27": "aBn4FhFbCmY6Wgnc2CLnz7DoTyJBe5R6zHCE1nvxefF44gsxYhanhB8Np3NrAEAQswAPtNhouqnSuKFrZ1FNUqX",
  "key28": "4SXq64r9y17aPGYVCtBeL3M8Cft3mreDcHyQ6qcSTCQ5WZnsqwCoSnVqVQ4NVHRoe6GceSGjABFau6nzrqyM8DG7",
  "key29": "4zyYUu6v4D5gGPbc2zHnbkSTmDhkvaGwDjHWSVN6S3SrzyePyqFPTrDTiDt6pWcREwxJ2Xb6FAwpdCmhLdhSfWnA",
  "key30": "5x6qHKeXqZwckGHC8vFqDN5YU8UoBhMAd53HpD9ByzBKNahk5yFP4HbfvHfaz6Kq6G1SHhXyRv92tnwEWohRPyDt",
  "key31": "3zcuwXHVvXeFzSPcJCmAzrKygysKZ5Rr4vEQMGDe7beLiEJYBKkATGbEVSm1Aeu8jJtE86Hr9JuYURvURbyhNHDK",
  "key32": "2G1wHUZsGYHtpcTdjqYp2zXuc89Bezi4pAWQeLhigbZrKxpFkL144DH9zawjoQmsyoyXHLzjjUPPtHgnsuzKofrU",
  "key33": "591WEQPiDAbt46aAkczVPvHfCat9NLXLYU9gAYs5ZEmGuLwLdAaR21wHYVQdptoBtyTmEF3M86Me7YH9afiLX9r6",
  "key34": "4gfUqwxjuW8cv9aCqLA72G8rtCJu195wmbovrqADyw4ShqBnZGcLGwavxJaK45tRPfGpM1bZpJ7FQRBypPMcMKcb",
  "key35": "GomMLgzR6j16UM4Uv1pq9v3k9YFJuaK4pfSwPwRkWBP7ptxrffUHwXErh6dLTHQUnwGcEazdDJjRev66Jkc1vVt",
  "key36": "5AEbaJ5dNu72XxxbWQ5VQcDQfHRvqtffFfYuq2cmQhrGPu2nqBNnFKm5k8XG8QWmxtPXnHDYTqPsRNUgqJsEoRg6",
  "key37": "aSCPQr5sTk7r4MWvy7wDYxj8M28CefUuE1xkzjohVYrraVEiAAFWaE3mhQdQWocex1r6A9pmBdMU2voEGHJyzC3",
  "key38": "39qvGDUwcz9BQqDiMDGxVyqrmi8hj5A9aKgd4Ubt8tgPJWW3G91xfNY62dqqpCfRuiXUPW8CHj8iEMZfpKXFKgDM",
  "key39": "58Ue3mCg63BMNoRuWs7yoY7a6dPx695JciLSRCxwwjWK9Ma8JEEPQRdxANh6jiRjzjaHmDcqVNJRoDMt8pZhTted",
  "key40": "CHyVy3eLeqvhFFyJWBMadgtJCQkHhWKWFJyvXc67GVAxJwRkQekozRsmX4LNvBdpAG2Tt4xp8C2zfkYy22N9LRM"
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
