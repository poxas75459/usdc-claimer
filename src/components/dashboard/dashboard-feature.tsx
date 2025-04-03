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
    "3qSUMwcrLfSw6TMZ4s24pstFEdKNuKqtZzNVGrvMJcQ47W66sSM43AacXtTLrS6MaG5tVeDdFFqDw27QYYZ1tD9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfkvZ6ngoMt3L76mQyzf6UTVsg4s3RdX3iveyW8aUyEte8mr5BXRCAzbXRZSsuvu5WvVFphEqPboDiKkkkTWKFX",
  "key1": "MzBamvrR2iziVALjGcq1hxUuxwUetBSsogQXVLrMPFLjKngH3V6vuu6ZWAXKNqbkknCfcYeETbPvJkktyGD9wT5",
  "key2": "2kukKpgveHFLU4kB6rPWBZ3vnm82oocWqmFS85RArC2AxqSLyqcm9icACBJ9jybBQxZZ4xKUvNsUrhvkoggbnHtS",
  "key3": "YFaBK1gVv8SAu9eEmXZK3aWgpWqy4T5AsQxNqPKe99uNgxNwdtQkZQgunQ9zZ2xCa98Hu9U1ZqwY7qbXQdsxZZy",
  "key4": "413UM9Vq6AFrFmYpTz1aRXxVHgRG9aWYeW9DDA9x8HtbcH6X1qNFgRPw7az7KgWYvuj97jxdQCQ5ZZUC78ZayzbY",
  "key5": "3GejXtXvMTEmbx23xRw8ZaNo97gN96yWG5xrirLNvkf4QJ2U1P6RjGyEPBAt9EFG6LkKkwEbwFGmZviMHBUFvLmh",
  "key6": "3kVGv5XhYxTGgukZ98TTWSKSwxThY9LSmsCTNw9F4ZzHmm745qyddqFD99bQGvn81K2hXARfRsNna8Rp85bSjsF8",
  "key7": "5FP2KyNf4VTW6oZuNEG9mXhX6dv1PABwHN6skEYc3xjtubouvsBGcc2xAy14zYFNCcCKuGQvrhWjabHv2cBNJGWL",
  "key8": "3BZ7cSwejzwnaS5t8XFkuosxWnoSQj5uxoyWV8iBJ988vfCvs1e485DysY8QX2cFcqCez6XEWDtAHw129yfvFhuD",
  "key9": "38Xg9NbbuDEkZbQNJR5QGVAAojEMweWLZretcgyuGPKGkXZbpmrhjmFF2zWKGstr7GYFByffB13tL59CCKpdMseN",
  "key10": "4FBnmzk7RtcM4CuSQ9R3NHH78Q9dd8HfqyxzSDn1GxNvQ5KMMV61bxAN9EL2vUQ78bTAqj8iVv5VqDWokE5WvZfN",
  "key11": "2yzrggGKRQ4oMK1ZMHzU8KhFBFcbpCCoZGDY831cnPTG5CQ2a33s7ozx34pydVBMXgt5taYTtjESWW91GB7SXppw",
  "key12": "3mv8CQR4DTsih6Qac45kVdfqSWy31m7dcjALmZ7dCFqxAv7BnS1Kr6uHnPCNe1JTrVCYghoMMjVj7npoMVu5GSxa",
  "key13": "2jy1GZr3hpcKj5NwJXo1JLASU5aAdmmeCCm6BjCvidTbTbsgA56Tho5UzFvPTv9VsoCC4z5tfgTRMyN2iiAZcvN4",
  "key14": "wSBnU1XGnHHRUCqiJ5HTvaYLwayskebAmY6TkpvHHSHQfVmwGhzUew5CN7gjGz7mt6eH6Re7zPKM2YzRDVJRzHj",
  "key15": "3BXwAuvQY3AX5KXa9K8rN6Jcb7ctTY91CiDdhyoxSUJwRFVGN8DkYiQLNsSxByZZxn3HgQ8pqUnNz5EnYvDNZqNJ",
  "key16": "4FCRgAKJnvtjq7TMD27ynp2fbQGbpxAfsf3H9Zo7Y8iSYKD5x4q9o3PYTw1F65R89RzJRNLHjby9DfHmjZL3nFtk",
  "key17": "4GHuxMa1fjuJwbDkQKqajjV46qZKSNSH71H4Db8hCeQNjVE2FMmtqdrELYsmnsYMduRJmiz4CW7oHz4FkQPDwNrF",
  "key18": "WE5GSmqVhVSZCRcCxfL68BoHbVo1ioEqwsM9KC7SsyR6joG8QsXYP5k6ovR74S33LQkLfuE2QfX9c82dbdMAssM",
  "key19": "2mqX3t4wKA6MbLnReRYhkP18XbyvNEt9kWVVprCAmazU6gjvFFdVMwmEw5c3AjRDfFqhxMwSf6gsiWTtujFaZUtH",
  "key20": "ejhFZfjjSCZbuvLiKcFcPqL5WnCJgZ8F3SDpmW3kNqqmkT9QDCEP8XCggLMrJeqNwHvHVVvnVFXVQ5HnKBaDLyM",
  "key21": "aucHBCo4xoA9obbvyVAQMQ9u363E9uETAZZTAUAsSvGftuSAZpxrkLuG43FzVsSPJrvU8Had7thkapK3xWhSx1a",
  "key22": "3ynnZwpUkDdMvzaNDquVNwHwzM7pFwtuxbmucrmDDmGekJSdZd1a6WtYiKtLLHWuuqAAqnxyhZDFKSSaoMQxJSWz",
  "key23": "2PgQzSxC1uz4G1V7Bt2dyBuBpg8PK5zpfiKHNZJSds6SVmDJXjdT2QuXwr1DsFq39uPwfCsTbj8tyGeoxyxiSRDJ",
  "key24": "4yf5Ev1rvdHUPsEb9o9YDeUEyu8KWLXPNHyQAcmresEH29fXpsnSTJJwBEUUHDD3JPJpeJCuaJynzfXkjnWq6For",
  "key25": "5jcMCJ2fKNqhyZeZtjnjQBcn5Tixc2PQG27tkmwFgrM7Lr1tiXTsUr5Vh7WtT9mHj5LBefFMYVh1gc9AJ8WcX8H2",
  "key26": "3XhDuJhwz4caC45vaSBdLDWZwA7XLXBF61xxdu7wCBxaCsC3qzxzr2oQCoXNVrS4eKMtUxweKGVL43o5nsnd42uv",
  "key27": "xkdt1ainW3nq4XYdmW6PSnd7pfHHg4As7RmKBxUPH4TfCvzPMBJVfUJQSZEMnHudaDZhy14BwGrLRbLSHHJnfLo",
  "key28": "5SR7WbhJB858mgC6Wp9KqseHWYWLWbpKg1AtBhzi43CDN6U6t4ccGcUKUwRYaZKUtvcoBnD3y1szUco8qJdnncPr",
  "key29": "3Ch5MYMRw2KaxwTFqHTtHJZBYa8mgkVdMyCJWQeP1eLjwAg6vGqRbooju8z4HnRRMFVMZLAw4fwnwLz2ttmjU1ke",
  "key30": "5y5QQStkCWNCJUBsGdWCsdCh6zCfVLB5KTfLkA4EEZd1Ko8FjTHwVA5ctD9H8cPePNwaMvHpQjwfwsyAXdU4eCmG",
  "key31": "22g2ypRSNNJ12o1ZjsE2aNjxXBoaAfuxDcdrbExdB3ajN9aeNjoCUXfUwGNykhwFZkyegE3KqdSKn1xLyhcZ4kEv",
  "key32": "3Xht9RCek6xYAqoPBcKUyC4fZNWWUBW9v2UfK912m8ELC2hv6kaf1tz2CeXeNsTL65uE5PUtM9kMgsw1aFGbXg15",
  "key33": "5C9RNmoxmaPerp8GxsmCxJWN9iFMo4WS3qBQx5xBztrYaiwkbBiiH3chEFXEzjZDgwmxYLLbaWMW7jS8Jx7XnUAh",
  "key34": "2Qahqrkjf3qrCJyF6vDQq8X33Z3onJ2vqbFTLNRNP2mt8hstxRGcWGnPp5VRCF4JFBJYGRbEWQk988QbaTqfpxNt",
  "key35": "3cyuPtvpLtCfULXpCDqoW8GfBazVmM4JiFnBoA6acPmVCbtjaZaFNfPSF6HX29f5eoQnd9AWNU19pcR692sY8n7D",
  "key36": "58APQsoGk6nGT6Ur79RcfvcFWUxUBJ4iUmFg8rkNhU3Ndzj4Hy7d71zmynZoLwKFtiFmQPAVBheoKowGkD9hYtc7",
  "key37": "5FmehmK34FLq6PNhknnSdvfiW3BXFBjdkMujRUQvtQ2s2vvVwout71C4yBEkmdBNxNHwMGqiS9E6V5vNVC7fv9jC",
  "key38": "3XhKSkLiCNEbHXp8rE4F68wgFmL2fhHguhqw9ZQQzk7C5sGiTTvrA2BN5io7EhpVGYamVW7fcd5dPtFjjo88oqaF",
  "key39": "2aAYMs281VcqvNaY5U7bzdiNXmoxHkkX27611oyz1wN88tsCeJKDAEBEG6vsWWFiMqqPQLh2AonHofG32Y2bd6Uz",
  "key40": "2W8x1SHaum2cjqfX6YN51d3ZjjYpcPFbuKsGzgZTWLFnmEzvPrNY7pELyyqWXXTKKzGYNnk2DRmGpszjxqasfdUd",
  "key41": "4tmRzDezTfwLF8schsxJQRKortJkokjTyFU5tWRxdJsQJa1yWPXRrkhRbNsrcM4cLfXxpiDkSC5X2y7peyt9QHkq",
  "key42": "26iRkGRJ6PMDk5xyqjHyxBJxBhqqwV9n8N4K68qo4f2ovJjcvZwpD42R9rPhFoWPj63iRN1iyVvz9oNPyLtKdvVy",
  "key43": "33hhdPh7ts5MwxMDMcrFSqb7sTFYQsDCbsbTrA3DZJtSaxijVHGC5wMTgS7aKpmRU1iqePseWu2S5ot7hWXQHdVx",
  "key44": "4KZVH7BNgVoR7BN8a8qSreX7mjXxnZe8nJbrzLqJkqW3JPUZ6rvjbB3v99dJgskgJNYjNkh1SAgYjceWtugYJadV"
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
