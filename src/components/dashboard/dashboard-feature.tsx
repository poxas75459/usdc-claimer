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
    "38YhDz2HdceKf3qkMLntzigy99wvxjDnvAFKAW7yxNVoeoViSchBx2RnTVtoeFpxC9h8Hd5vRRe8qctABrY195Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xn4Q2zywAZxV5pfi54VUwTEsfaPSo1MWWECT6EbVkWom8pHgRKLhobyX51wHLAszeDGnmgvZ2fGbMxWEzzRe3yV",
  "key1": "27hLf27HvQzrvxvNccrakVnSmg4shb9swATus5RNdquzA3tJ3t47djeugxQrLmW7U6AUL5Hhebsuwon5raL6xVMs",
  "key2": "3mnDfZ27zqDW7a5LGXXFQze5vifdPy4mnhQDzMvAHv4NxjEJPC1LwzgJXCzQips1fxdjLq4EE2wwHw7pwnsSNVna",
  "key3": "3jUdUQoDAKazmUzXSGHjsneFhduBhKKGz6TzE7GBbf2ryL1maatm4VmSKjETaedCyJnBQYcNX34n2DbF7yX7xG2F",
  "key4": "ounvn7mzqpWP55QpLSGjVjgfm6JeLjBX5pwyYpANXY1tfoCrLWvvKvqyLa6UJzKYjVSnVRVjUVJWRcvEcpaV34n",
  "key5": "4rpi8pakqckoq9FEuWEKoLMGct3cLVqYkickM5jXFqFxgutTiCGhmr92f5vvUJLvhMsR7ELXUVTFG4Z7BcgLivPc",
  "key6": "2Dgm4dA3mnAC2SvYJ2g8nefJaPKoA2itEDD6GdZqJc1KiWgbzmek5S8PZTK3ZTdmjJASqbioXwMhwvfyCbH3TZht",
  "key7": "4ZRMeiLHK26LSqfAHqmRpaWSajiiHmDEyixvmAQ3AhKxNjsLHFXLgoLoRfMx6cDFpqziuFSmynMKrhXmrF1QPXq3",
  "key8": "37sacWpgQvw7CrXq8ZTUGcYxCP87v4Wqv7JvbXkrPzey3vqnfFynL7ArEBxZBbcFHYGbuHfLyVf6JLMQcW7JPJeL",
  "key9": "2taTbuvsDfrRXy7asGWtYPGm4CCtAMHjcMZiawcTAbbSyf4q5T1WEqGoFCgqHobLcVmqgSnu511Gu3JbnWvy4RF5",
  "key10": "25q5xf2ER9bkicUNjtJqidAgFcnv6xtdcxoT5bgSSe4uWK2NSasCodeeiEhpjg7f3GokbX1Vjxbhu1yteoooqXC6",
  "key11": "5Puq7xYsA4rKkJ8QifAgxrmS1TfmtumrViuJqhNJ9UQ3jL5mySJG5JpGAuFLFbjJmvj8mcgKgr7Yn5xJuNUh5wKL",
  "key12": "W3HBn3fqXeSdHe5fTQ6Tyfiu1B8WM4nguYF7syHNLKqS4ymv9QYTTdoDqVQWK6JE1TWKo6pzQf8Av4FX3oNvjm6",
  "key13": "38A7vpqKHvnuAVSRpPoZvUXb3mZvdjdwntGPpdZjEL9qgkrD7PtvVyY1LLEM5xJ9UbQRJDk2t3ZA9hGfJa45FqiN",
  "key14": "3B4J31GdyFzaYCJwnsfBhMRvzpFgbyswUDJXr2s8DHzanjHMqRyJbio6YXRjZ93SpGgszS7xnmkEhu9fzLX9ekyx",
  "key15": "Z3s8XZgPcwYFc48wnt6tzUVoBSJZA5JfuiPqsqRVRteK2EvV5ySPPVDdUEZMGqQiYiDVJDNAVxr4oyGj5zvxxKt",
  "key16": "3bckqiyMVYzmRbVLjKL23TEFdXwRTNa56dzDSdPzFwBx55rGhFLhgu8Zu8c9DmicMqbfkQDM5KhKtpw6UtYToTFN",
  "key17": "qycnj5iW4Q6Www86ZtyUPXqhW6jiSf5EsTpfDEsvmNSn1w8zGUjuvGXwiEqx4PSnWEhGKexReeHEWNxkcBE2zHS",
  "key18": "4q6VzgFfgEeaLGeKM1Q9Zc1Kdz5x3tyBpAvwrQtqC6yEHLDEK9JGJtMWYEbNGfZrW1MNNGXgzZ56f7YbhWuLekis",
  "key19": "5yCu5T8tzoJGB1475oKhNNUoCDDJgpm9beAQ2G8cSmDjYdML6BQG7mPNfdZpK4sYgxnV3hfahCwQu3Zr8yRocuWj",
  "key20": "3oGgfyHxNtjfmTq9hfLcgbFQiR8vXV1HG52hX4rvuJmnUAQQBxVykA7vNdT8FYDg5vkhDneibXPG4beSUyJrG1N7",
  "key21": "2dMWf9xMBr993NBGFGwquKgr5jVbEJ76TseoW73sAVEuvisPgcvSLEwZKj7f3qtTzjapUbJqC2ujWPUy4DbmwTE4",
  "key22": "4j1fCEUpDMkcCVJfcqKt7jucuHSGrgxnqgCbzQmtxSCU3DvbmsxSre4wvURj6h9JgZaJXrn1VhGUsUXtBvsKBkzt",
  "key23": "za1tmUQt79dtiGjbJZWADD9z6wzL2MGv6AXMqntNdiX1wBtpYcMf7FHr6EofD8KxoS8fm2prv9K3o35caASWoEv",
  "key24": "wmhDGZrZVnVDXVeTrj6UvG6BKHJ73uEtUEtxngdknGD1tQb3QKGshRTSsEHiZKEGjRrijCYrZKE7vZTYhdUZQ1D",
  "key25": "3VChEN2ZAKmDXWQ6zrUS7jjKD8JVfgdvj6GWQTJF6Ant9H3C9mdRWCwcUWvVyGTWpgKJJ5KjVTRWttqgy4oH7WAD",
  "key26": "2xQjGTTup6qSus5DsyaLnFBY7WXvMkzv6xVNBqqJnrikJXA7ZeuoGMsiefPsWwThWGZKGaMdAd6rXz7yAU2DnEyM",
  "key27": "2LR69SVuM1BU74TSAjYKZq92kw3MziZVNn6m5WX1ywZXW8AVecE8dNBP4FBVx4pqy2WBxCDTWCqZBtZLT2udKbax",
  "key28": "gMyuaFNz3VZoMZ15PnorM72UYeFGcTt4Tz66nEepkSxCt8QXz7i95eZqhg341Hk82G5ABkm5tAD1ni9cM2phC1f",
  "key29": "5kua917hoEJePtLhag9DAZ4q4jgBeBFyYRwbTfJbeBCUcJsN991oEMbCe7rsm8mFG9enLLnBLEu4sgX8nkMWJ2nc",
  "key30": "32PUCtHvsTLe1KMWQgcpjC9CK8YGKprCaNNt3msH87BGDFFBxniDGF7vdNJL2u2R4G4HEmKkdSNcnvQBRC17mnXT",
  "key31": "4DVqAFHbqK9MAWoEHYWF8SpLoe61NW8rKamCtdGL3ECUr6YzHYM1aw1JvcMPNETDWeqRJkfgxoRwrpB9aZGo1hB3",
  "key32": "3z2xuNJhund2WM8ojDsW1YpZUMpiGAwgXXP12oUkRM3EGF8kHFiHML4MnG1vw6M4WY4YRoAfpAvsfn3vULLBRxyY",
  "key33": "4vtXgiVx9kchLKu9xJpkP8Qn2oXQ9VyJ3kmMTQt8pvhDwpgMAhS596TNudCULBkBAPVMCBJuaFj9EXLta8q3qWqY",
  "key34": "58T9xNHqNNanVahNGa1hRqrL5qXi6Y9A1Uw8WAuox5PXaKBRcVN8VBro98ouSDB1uGwkoFC46e75XBAgyzAi7jmY",
  "key35": "kfD8GWdBfsTKdUWk7EYh4VsncsNgGvdJPJQx6FTWfsuV3yPH54gVV14qHshzibTJY2dyM5CiJJPpkSgakUbfm3G",
  "key36": "4Cj42dsZAdPNCoEfw5rp1oxoLbUuvrJt5YqdQtfN4WTjTMr9gk2AQeGFk914thHrGQe38wsceid4MpQ32Skiobgc",
  "key37": "3ACxATojSvYS8q55TgASi64VufhUeu5yKKfzQpgPJu9uecpEZpYztVyWDarpdQkuzYogmXyecRhxheJZby5C1TbN",
  "key38": "AYeqnZLvSoEg8RLRrbrzo7L3LL4MnLYjVyWmUbw1TfEVDjder3WdRCit6U914iWKrX8i3dssxSKGvFp8C2MBthy"
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
