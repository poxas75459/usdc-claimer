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
    "4c7EjhU7UsHdoP3wRrQeA6U7FB15SqjwwBGeudSxtrtjKbimc8uiGp7trFnECpfFRfvUoagKrUj3DNnBh1SFKb2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrWpJvJNSR4mnNMVukesMUZp7cdphHUY48gMffgkSoSBNTFy9K9MC6nkND7vQJmTRTvk6wk9mx9w9LjAxureic",
  "key1": "298ScH8kKLCGSGPX7TxsxTzdz2U1H2uiX95Tw1YKQVh1RnQwYTFQULLM18Rcq1FRyUcqm1EuRzZXdgikJFMCruY1",
  "key2": "EWykTnEumBDZUoPgjr55PnzqYnDk6e79o5hXwvZ1HtbzRdTjYNPNUkfZ4k7Sh5pR8odFEps8oYCah4c1HUBZ4L1",
  "key3": "iqoiuUsfUraWbq6om12kYrx2d8NE14dWD1uhHf8Ke8mwZwNDWWhc2tTTWj2bqxhtaY1Z5d6GxFfv2YWw5xJa7dt",
  "key4": "2T8NKocbPKkqVsqd36QoDw6HWbTkWkrA3Fm6ZiJFqqBN2qojhFFuHDZwvQ54VFgfGBmVgQYLfhKYB9LAQNvLPFyi",
  "key5": "64HWtzUuFdTcjW9FYD45JC2HizNVWuVKFR3jwFrfeuFv66tGT2LiZJpZA7MJCdpxth8Q2kTFoWJNnfF2v1GRsUzF",
  "key6": "5aFfDooR5A73BfQdXfXpiQs6eQyZKqQnM2rzyLciKzRYyDBguSrnr3h49gs25KT5MCqTro35o2AyJjkFgUmYiSpB",
  "key7": "2RLvspD31JQ9Q4F7pyGBTJmUY6kQSKUMHTjnShwEdLcFpEKuugJwrbL6taCyxqs4iv5N29xqwrp1VsAmxcj6Cpe5",
  "key8": "2bXWVy9FTBm35cZCbmxTQg657kRS49PwU5UTX3qPpLVcFWwsetQkMJZdWEphNPRnZA8vwzwsUbDVoH2j3oev3d6Q",
  "key9": "XCkgNczX44ajWtiZ46E8ppJ9jxCjf96KExZ5nasN1gt1mZymdhArNnQkUMi7gn1QiSrqZCtknteWc7QhUBj39mQ",
  "key10": "39Nnq24QSw7LQH3HmxAtuMWYoFjcRfc86cU1GauP45HqKUf2iAFUE3eMqcN5jorhRahG7oPLGpwPp8DepQc9sxqE",
  "key11": "2PWGpxF5Gn2MYtKerCRAYswtd7toG8rZhEwr6oHgEdgCTeYpAduuXr6g6G4YnkzYi9WgQNL638PE7w58sey5vzyV",
  "key12": "37jopQGDVEzVE2WPCaH8aGjai8M27K9i9GQxN6cW9JzVxFVWXsT51SaBHfWGju3NEFTqp4naYBjVpkWmzZwChGDV",
  "key13": "2FNJrgtnJecKL7PqBoET1ztjvvpd9EyRZbv4Xw4VVog6eRzfucfF7yJTfFB5agTkfXdgSxgnVNJXEbgkB542Fuqr",
  "key14": "21GorcVRAeJ5fm1NFK2s1u5Kh1ESktMvcEcB3vtG1CZzi9MkLmH4KmDfCLsZe43Uo7u3BUf9FiGxu86wgM2W2He6",
  "key15": "rV2ibhTmfiZUzHAdMa5sPTW8VzKuxvYABjUYAjEc1m13UqMLcNJ5p5hEkYXjMdvJDmZoJDKaDG3V3mhczANBJdq",
  "key16": "2Zq7znvC3HVUnHqaDSuPYdba7zoLcFtEg438FetkQY2rjKqv2TX1PhNAwqaqUeMtS2D1xNAWRe8otnUEiYiv2y56",
  "key17": "T8Q8kVB7tgF5oyNL91tHQ8ZUBzBZFryBm24S2MQnL4Dhh4j11K8Rain64XU4JgRpAE7qqDcpVL2GoWWie7RpXh6",
  "key18": "2iS6vzMWDDrP9JRopinE8cXw1augPFreaD3UvyuQwouy9rSV4w3RTuNKhTiGMaXY2wpfeSXRCPsBPzvrku3gPU4p",
  "key19": "33bxsPtGrKjWnW6GP9so7rS5PyY4gMaYdAiJ3FPBj4wCNaLgCiRXk7cv3BY3WP21p6bm9xmjuzPxu6BcfPyVWpZU",
  "key20": "3rW6HAs6ME1RsgeFFd5tE6uqGjoQ8NvMNYuFLXeYM5MpZ2dDnSW2QEcZK4WeVMvYX7QrCoPzfXeSLxMtFAsHmzCg",
  "key21": "3vvAdC8BM6rzQooM2XWiufqdhXV9Fy5W1ZnLggpGukJrKYE6Pq7rH9YRF2GvakMXgp5qtxQx9V3Mk88LmEFAqLKg",
  "key22": "2bRbcVXUtJ4ZdD9EZMDgHYSXMDhE7kme8rJ1mjRGHmtYfgrACRnnygf1ZCiiZzt4sXB1Ag2Mik9oNJy9fa3dVEXj",
  "key23": "34AZBynAtPt3DKUvCCwpqXLB8TPF3jPvZNkEn7uxAAkCze1ouVmniya7PFp1nor5nMXzxgfkRP5GjcraL9oxHoh",
  "key24": "8jNzrDxC5HJhbNCQtifCcE9AdN8zAng8QYBq3nmSTBuxA7AdjpcEXS9ejK58n9Sr9VDgJ3SdWKGQWAJqhGNaxQh",
  "key25": "KaKQyRW2GB3EDKWqT4ZKNH3ftDnTb79ZDbZb5C2hX64ARkKZs32CLUyn4BqYqntf7ij1T3KQSD4FkJFruPMaDvc",
  "key26": "3BEYVqh6WbAMyzG9f2QP93BYaRSKtYytLgKNa2P6CCJ4fWdZEexkg9VZrZS927Yus3gKjKekEAwXB8VCa39cG8ok",
  "key27": "5xPDTZGrk7sXAt96ngFZezoVXaBzytwhuf4JEjgdPV6M9QdWy5ioehnmeTxp1VTSsb9YkSpzTbduVj51EfQmSmVc",
  "key28": "2zB1UdSJD6doLBxueEcjgj78uH715VMsfY4EumUXDNoRsvXXHf8b5AkmFwP8A6poJ1iBr1aJyoNyiSocbNPQp9Vn"
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
