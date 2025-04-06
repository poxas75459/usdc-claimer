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
    "3PphPSVuzKnAi5Uw3faqRH1zZU6Hj42dkQUYmRoYAxSPfMEsPQHypeptge4Q4NZGjd6o4J7XEJ7Rns8bCWU77ZGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MscwYJAaeKQfJeQKFsk7Ayskcpfp6GwT9oSAWYcgFwhKbmh3CmjGjdg9HogBDNZffUyo5qBbJvrMSN7EoH4rgDQ",
  "key1": "4EyLuiw1qF1TudMXMFh4AArcSpUYXs2nXeKpf6aEYnzb67HY13TpViWMhAFAr5CibN8FzjbgPgMDYbu3btDNb6c1",
  "key2": "5J9oaK6YQv5PUxiF9wFGphyzEgZctK1FYtZ4qvcGWvWBzA7hoevGRvq4DMQfhE1t9vwwiFmVg4chdk72bLrXLA6J",
  "key3": "4YjaFTnczHAaF7WvykvzBRFsVZHZHoNWYuECu3AhZq6stdD3jZDVUAbFfgtvnvp4hC28Neq269e19eJpCYMfSL3v",
  "key4": "67hw7en2QEfKrhqCc6Vr66dypWCzCsFvZMXBW93KtxtjDkCQRtMoAb2Bao9ZBaERfPcnpQ3S7N2kzRD2FyeNQk1Y",
  "key5": "56R2qb61DgCS1WJbApp2XVr6fAYKfzQDsnHwexAG3SqQaBbRpxzBF5fpvB8FP6nnaMNS9guEJ7eHjoDEut2jWbjV",
  "key6": "5kuVNxyW1vqniAmFwUCJ5thTRkXhvQxaycCxEtZ8mc7s11c39b6agpHoob8tQiMUjAyXGvZLTLf53iWhb12jtQWn",
  "key7": "4jETTtJ68JXrwpX6uKKQVNbwg1RnzyyZ95VLhsv4jYX5C4ZPsnKNq2KWB1dSnNnHJhhjgp7HrGGDLiJVzdyskcMZ",
  "key8": "2nVPL69qJwiuQ7pnYFmPsanGmTnP8HZPFNg42nkoTydYAzs3kpRZT1XdZRd1s5jD3W8KcgQHuHeeAqNnFvovVQoP",
  "key9": "3u9o6njGqKQPworxBJZQKqudE6Gmntmi3k2oiNoyk2gTAh4RqoRJ5xQLjyVK4NZadB2mQPXzMk6fxPv9vjDf6Jxu",
  "key10": "5KJGeYpbi8TYGYtzQvzovjM3j5sNtrvPBYwqrcjBcmLxHA81Hriu8N7PPoWV6faRqNxhutrKTnDZo2Q86eT6YMH3",
  "key11": "2ke4b2urCsxTSbYtq2mgC4USQuUZJghx5Eg8WpG2MUA4wBuzgtVfGcW7fDpZyDctB8y3YXN2VeEu7UupeQ8omt1V",
  "key12": "5k9dpQWzEkkSBVJevhw8ubozJQJuPPBp3vxD3U4EBr9kjTzvV9MjSx17VzpQZSvAfViGr4MmdMYfeJcD5riWXNWQ",
  "key13": "CRFbT1h1oCfCQLtgqXqooCnhm3z4R8PdsvcDtzzArT3xfTsSVYugoifzkWV2vFwWZD5qQLGjFTssfQu4ndKyu8t",
  "key14": "2SPgWLEQ9AVEnm3VHnHnoNew9YQ7UeKmTsBEAZvGaUuHEr48ZLH47cPixGA4ren99onuFs6RQ4qfgMj4c3HGeGBP",
  "key15": "4QrjCKQ9WLQnc5qQh5Sf6RLw7GXKz8QjTEVFJ9dJjREfcRi33KnAtwscT2xzdQkSW7Xh93vxzhoSjG67BLb52WWU",
  "key16": "neLWePjtNikKYstSpDUhhEZTqErhGSagYGtw45LQLgExYrcRV8cLpuRQiAuQKhkRESDecJiikETrSoN6UtgqLXy",
  "key17": "5o7LSkdQV4qJSsfEKtp2PTzhGEiYSvvyDSYqNTTg6JsRBYJKmPXdskLCgcgerE6soDqUMDqhBXyyHyBMdBbq9Dht",
  "key18": "vA4vrVR8cDWwZL58U2rK9VEBpdRSQ4X42osW4Kp9U3SV9DkorsCtzwp87o4GpDnKinzUm5uvAEVLppYQBU4QeSk",
  "key19": "4QoF8ywAi12jMX3yJxyLUX84cGfW5GxCA71ZSNSekDxqujfCZJkocgzAgsue74S3zDuoMMbsWKWy8chzRB4q8LnW",
  "key20": "3M3otTxKgKsSirjUy26xwFPCsctmK3M4S43QZnyK2mSMDQxB95NSh373kJeUmJNS7i1SuFvsR8wh24dbG4Kxdv7t",
  "key21": "5VkuKqwurcG6ZKZtHjtsGJqABB3DiC7CKyzjYgZ2qdpboAxkvEi6hnUjrr2a4ZkfE3zPbd3UD9MZRzvBZHdF25DX",
  "key22": "3vydQiZLHkoREpzdR1UrErsvRp7W6ocToXfRFZabfb4kcHjkXQpdBYAEcqdixWeR8xUgeiuzsQ29WZ3E1PpK3J5X",
  "key23": "2ph9cbrXFDsBS7RjxQYMvtU6XhjSbiBaW1EaoHxS2oTcRmCuz6gTKcwYqdf2jn5muhkWQEjgRsmpt4hGodhZ5Ehk",
  "key24": "58y6ZtVRfzGJFW8Htk6BgvjzuV4SXo1MBqsxEScy3u4rvTbB3jcfpvXJ74BWuFfQbWpskiPdWjxEVXQqqEtJ396m",
  "key25": "4FYaXTYuJStyhkNGb1uVjNfzbgqampS5J6CmT8CMk7MJUvGte1iLu1KGLEntooqbK2SwpMHv5qqHGm1bRM3XXfJg",
  "key26": "5v295V7qKPZ3GeoVtry4afcoxgH2DQazZupg1xefHJtmUzx6DDAAjwD6TkfS1fnEjDeb4UhQ98p3NpGM3xsMT6Jp",
  "key27": "26TdLbEzZcX8MVzyGFgeoir1ZKs6TiBrokBC4R1b7L5xpLLk7zx81xMnAadgP4EkMCwbCuA9f6dtYzPL7G2g9CZq",
  "key28": "5eZAfLi4Wpm7a8xd3gyV5FBd3WSp1hvTrgMqqcesHHvsCjgoyYCpNM7p2YXwCGsFZVidBwpq1AWCMWooRdDBQQwx",
  "key29": "5rzY1D3hNJzYTbgHXubJKhQqCnFdK9rLhEbKH12DwBgUi9DPXviN8Na7Sa2JgdCqjoMHwYj2GEtrXTLEuCLYpwH9"
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
