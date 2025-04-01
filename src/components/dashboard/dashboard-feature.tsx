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
    "2pR2oiDakXQBYo6uqmsuip5DVv9wEMP98ZjRzHzuNhatfVe2wGfUAUoLmoNGAsiWGrryfUjK29HF4xe8DmmbHHhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3YvHXHtz2RoWHUe7L8wjKSTvvxi8yQ6JNdn8buGY1FB1H4mvFRVqE7faj3XuMNdPgf4tjL7QRRd8rpzucsKVpM",
  "key1": "XsYfNiyPUJVWnhaHY2z5aJanPRRKAxEkR6HpYsg57FMg8s8CBkq1wYVtHrR5MxLA7UoBQwXkRDcfowJdPF9q5eJ",
  "key2": "2PURYubjfc8da8dwXz4wE6STrB6KfCf7RBNHYiNScYvHdGQfNbixBMEqqrBdsVgmoTV5YTULZMuDqLjvpwAG8gpv",
  "key3": "35Bd2pDotyAoujSzpfx5j8uU3bxpQBpHu4kGX56LRz9kvnxzSnWBZ5jAMQbXTkHTiXRBHkHU2op3VCnduz7qeaHJ",
  "key4": "5nYvQtZzNukjRhJ91ima62TfJWk5nV319hXSjqXeJx7PXW3M9gNnqwhLqmeW8VUpFPx6attgH5xevCYHTd5ta6pc",
  "key5": "4LzrWjPZK4t32xYEVvLaakfF5QRzZZueXGeAqR5mzjfQCd5yKVrAF5Ze3ik6SeqXrfPzsHfEXYgnrept8otSqDqq",
  "key6": "3aD61MNAW36NoQh16xG1cJt1UkG3UyYdLzg2QihsecQz8xUEhvANdyQLVxuJ1MK26QqssFU1LAoxmaLTZE21Rh2h",
  "key7": "3NvTyf4NM18pP3RJ722Zs2QVbE66TNSBDB9aq96dpiTqG9x63HbNNpDXceG7rJ34SHJVRNVRGgcUsgM5aiCvrwoo",
  "key8": "5WzAfTujudVbXZfHkur2Qmgu4jcyeBCUAfT7A3C3x1YzdrEE1iugp4UpBdyPUJpE7nSGdE6y7jtRBDGHywFfqcUb",
  "key9": "5PDHbahyWM86jxgxxuCUsct1FejRvZVcHkvVPVWH7uqbSPPgtpar8JCUiuUP4fPW2QC781twMxHy13JcXrsNmQTk",
  "key10": "5AtHqmQVggLEAq5qXTRTeer4NjUKUZBXUpeLgZFSdwy3ow7X333QnHQYpJXHT55fDhsfrA2rEeisVUuKerXCXd47",
  "key11": "7bvBWjVhj7ShAYvxAbTwM5pVA64oyHohQpbPxo8tPFWxWnLNZ917zuVRu6voKXgxLKXa327P7Kc26ZqSMV7GHtE",
  "key12": "W3XzGnkDkZjrmCKY3gNtNjd4M86XVg8ziqD4VpQNFryfavec3rgYuWEeV8YdnZu3a3FU6JMEggYQMURiqBjDioJ",
  "key13": "uRu6XKxtQpL21swBsbB5QzkDRuvjaHtpbtch2n3fsbzfGsQm18d8T9AKWkWdqEysBTE8cc61rpfZBLmmhxdTnCP",
  "key14": "4jECPhBGFEn9NfY1d1ozJaxMLjhzNMM9LSeLGYih2b1qEfSriooL4GQrTKCqNWtkubaxzqhGoKheja5XGEJxY92w",
  "key15": "4skxVXoqmPvL7dW5zdjQ8fzqionKG4Fh8igFkhGyrhszknLxuvXHiiT31DB6WATNaVcPGYoNh29Yq7LpcTQoFpCB",
  "key16": "awKmw64Zbbg6FqWUiZsR3haFxKcX5nXrzPH8Aq4sb2WMM9aRJNZw97JBKa5SwySitdZ2ZdrACyRkWuPAAjU5ayW",
  "key17": "HPtRnL6HBhPLeoVbwUHhYZeM5xvbHPtnr7SpLTHCnqU2vv2LxLz9Hri5sKoHcthSgtntByQjJF2ooj9NAz9Cu1M",
  "key18": "4EZtHkW1TxrpFBseRUya9pWKzMMqgwbs52PxwfjV5pj5Dq8xuuupdmYfsnA3FrfFvUTFUhZVwN8fU4q31rG697Ld",
  "key19": "2UN4m32Si4ER5kDyhgZZDDUNwZsRJfmRxPcLayT7sYsQQNx741sVTjdBMz2mkRF68rywPszMfS62oxf96sexiWDC",
  "key20": "5fkeeiAeZZqHt425mPkPWpqZcu4CsTHg5CLibdrHcDRcubBiA4YjXS7cc7XXWgUD4tTJvphT8mkeZ2yQTZTTRmb3",
  "key21": "2tg4Y93J7TdH6yPqqSDp3BSqav7WyU28vdrwzGRsK59s1y6BasaCk28phyzGmgfDyjqfF2PKZckbk2YphnULmcgj",
  "key22": "2MJtMB77c4JKiouQyJ1xfgDTZf5VqwvttAHbAYCZZhisyV6PTqoSBGKiF4B2Wr6bPKeE2jxsJ5DLXGAXEAFABG9D",
  "key23": "hwN3ZZNVMBfumZtSpxoGWcacSHa3yGRkR1aczY4NfB8me4iD98AHzCJzbAMSWpWy89fomWrPqiKFdtmCzY3Ru4A",
  "key24": "3WxG3oWsq1jvxkXAPZwwZsC6mq5oXXercchwn1GP4hu2q3rimtNuSd1EzSXVUPw7JGWbu2VzGVoHwWZuNf1edrvZ",
  "key25": "NNpJpHHmRi2pbzs6ZB9xe1yoManw4yCCmaDKtsvpoxohLK6bMyfCKcrNeHv88QfvTV8bZW27GXJ4F6GXGmZpuve",
  "key26": "5z3v9AXbFUe3TZGYhF9kzxwKrx1f7YT6CNkRYZxuhzQJ3eqcz37uEzGjco7p1D4XWCMdmSj7TuJKdCAphH5p6Gav",
  "key27": "KxJoDgDVMLDyVB2M4G3VbncrJT495LnbtdJ26p6QCRSdq8JnpD3dtQLbVEkGWZGBy6Y4M3YfFLWmrikKV99qYQA",
  "key28": "3h7ze7XtM57Rn7Esg4uEPA8u51qseszL9gtY33JMZZdnV4FMcDfftn5E4aUhBY7ooS2hGALFJeCFnobqLZT8kyY4",
  "key29": "3ECs3YLUwPkX4Gow5Pm45ozmE75ZKEbSiYQF1SzoSDzVMBxppVFDF4XTdGPD7svnPrRhkUKZwUpZrqsuuM1DVdWh",
  "key30": "3atdgmkTM1zRohFNdWZriH14q2Pz2kT29xVfrpBLQihtXFNrbhN6zkkqX11vUu1tfBcVF1vw6XaQBWmKa9wAVstW",
  "key31": "2W7on8XambKttq5HHbaMe2oxRdwdk9ttmmAjBDvUqSqmC8oW6Vq7M3ovr8GvuVPvNLPzibhYSyP4LPjWnzPTpP1h",
  "key32": "41gGmn2cCf5nzr62LFKDqNmqbF2EpTVTNLzSm8bKDqnkjcCDZDyGD3FfuY7oTywrk8MgzLTzE3quj6bdC5K3nzZX"
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
