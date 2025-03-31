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
    "578kCa2Hw4m75syfgN5L7K87QJMQDoqD8UQs9tzj9Hr54Pq7MY44E3UUweCQHFdfwSJGCk3WEzPvWz6DUrDa3eHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Acy1jR7ZtZMNpwHUwBv6CJ6tHC4b4r495rEtDMd8WCwKdxtJX5EL9BNQgn7zxz4BfjQ13tPaoPLkzjCxKLuKoBf",
  "key1": "4noWeqh3PEjdFqxrNeX6UXBeU8ETPM1yv2hfMcs24ocCBuRC83kkRdrvwpnjhRRzss121wHK3i91GfySxaRkVSEs",
  "key2": "ztZmeBQgaomuogxf3EnuEpGA3yM3aZyCYd5fG2x8xK4MxFPU2Aox8yCDHKfpFqgx27EifJWYxcZ7NLzkKkgp1K1",
  "key3": "3tBQhq72zfwsvnbzhB25SxR4wGuaFSkaBaXSaBXCbrEQKZBssBZ9myiSbHGmnxoKeX7NhvQaKRRuKMecZsVpswun",
  "key4": "2YH9FsJw27vr8o4TBx63vscmUjkJmrJd4NxQ9UkgJZ8gK5tH44YBPnPoaEEKyLrhXq69NYbMrpsiyoZXmXV23n8Q",
  "key5": "32c19JjGu1M28A9XjzApHGyLTY11mNRk9e5KWfQNrw2UkLVkNGp9poyNmaHXdZRzAUxSvzi7j7XMB8M8bgyoKbtr",
  "key6": "2PTJ95WFbLEc8FnZvTP9NVwHxQJAHmMhuheF1F941eTKPu6NxEZJJBczCnmQoCVNX8QWjuV135PV5FDGZyQteLHf",
  "key7": "hRHhLYzg6hQ48Hi7ScQFmVgRMmVxtyQ3gfQMxK7eH5ZYterQCfQFoMQmiwnWAyRggr2SFHHWDKHYJB2VaQz24s1",
  "key8": "NDSz3FdVY1VbDbsBSjSzu8YwaM8g5w5CV9FRDVtQnoRjrqMi2esPAsyDUai6jvwPCbFJjZc9NB5Y7u41pEEV9tn",
  "key9": "5xHfyBaL693FpH26VCAH4WwPeJmgkqpFkNdiSgH8DrF6kfT8aczTJdSXWT1Ne67SjhUVUzrrF9nqgNNwfwT8uBig",
  "key10": "2VERJhZ6gMwu1ug8d5FYbNKSGvbESkVvN4Y4hYhjBh1YmxfU7JxsR1ZhgjtHiPpukkNL6Bb6uyNseBYyeyXddbb5",
  "key11": "5p3fXuC6vqBXtXuANHg7J4EMaMT6XPcTpuwXWtnTEkc1RRDMzfR9w4A3k2FGsk5uQMB1fqF2iiXxPS9n9ycQ8aXh",
  "key12": "4mcMmYxuQbZ3tnWX529wLL75Ynbrwm5ZtkEkUMn2pw5VsBmWkDhMxfj2T49v6GypAJxhSVmo6BYfNFoDFxEv4FW",
  "key13": "2ub6Fwrwbz4gw6hr7Fm6GygA1nSvNQ5XHaDD1tEhaxhc6Y5uEp3fnQEasbU8nC1tfJzKfXSzVYKhhxVHdVyTv9yi",
  "key14": "2SuRdCEBRs5oz6Q4twHCrFGUYyeYSnzhownREKE72ZGqxKfmfFzhduSji2rSn7N7XESt2mdD9A5UjjgwVrJcvBsT",
  "key15": "K7ME4J9if8neT3eMREsx4Jgzg5xJF6Uee42zVJe4B2nety74nvEaEWMh4aZHprjjXhovp5bbyqnyVEcdktYGn2C",
  "key16": "3ZUAPUYxhQJoqpHkeEayxLLjvonrPQpyfnktGvCmB7gAta6Mq87AJVPVvR4N65Wcx7SRkW3pHBpxGL6j6Ad65UM5",
  "key17": "5VQXRiBb8DikakmiEsBcUVLgYpTouFEAsGyM2YoNGkKSKxGr3PTfTJo5nwsYLCnSfMRVdusr4wQUAEHT9LfNhCP9",
  "key18": "2QzeR3N9VuQk6Fp899XpmSh51aKJg8LP8BKeCEtT1mRVJf78qRXm4uy8oZcsyor6cEUSUYsNm6Hb1e15CKuWnL3Z",
  "key19": "2esiG4yw4Cu4AJ5ckEuw7AL8od5FXZesTtPEuQCWcwiei7o4Ybw1eQetcb3D2HpoHTNmdcECsWfcAn2ktyyQf9v4",
  "key20": "5X2Lim97Gk8gBoU57Lovwh2jQ1RaT7UyXAv55xigZ8JsKsiUu6zXp6Jpsq8VGxXYqixH6fumVtjJfLT3X9dUuT3m",
  "key21": "2YndK8B5h9NBtWqLsNTRg4KB1yXRTk1AjF1kHLhND6w6SxJyMGGkxeVFj7sSA3PU5xbfma6UmkxRzTuPsEjKB5as",
  "key22": "37oDmoiJ9wvGUAgJJBuHP3YPxR2o6AKFWzZUgRamTN6TXyS5Xoo8uUGTWp2UvrwytjxvaCJ52xEp18PtFKYC5zxq",
  "key23": "5Awwt96C9WpbBDnnhLPrb6RDyjVaXQXfwZ2i58BurPRUF7aRJiSGKDG9TBUSejXBByaR636dM6v7BnGhnb4icN5w",
  "key24": "4nG2bfoYnNg99eV8qQ58kRGzMU5Kd9KgduqDW55kUVNecyaat7fy2zVJu8pan5Qg7MNcwbYfoP65zchuwWhdeqFK",
  "key25": "5YNfqjYxXCtDUGFabvnn6F6oiopKRMaTy6X8ojNfCFkTUMUpEzvDeaq6RoW23oxMAbuW9XmkuESxPr6pmDzKqQeN",
  "key26": "2qKkPGYq3WAsHnAbXARsv5mWRztp5jLxQBuK9XuhNzgoqST9jCGEbDKc5UDpyikDczSLziVvsd9J3Nou7KKNVTRo",
  "key27": "4TNbC86jTyWkRJURrdX2XFsUrrCj1dGYc6ao3A727jafK4qViq7FUWsp6qqVnjcWiX87yUPWyzKtT2A8sg31KbhR",
  "key28": "3RYnhGPsPsBi8Y6uS1HQewRkqYE3QL5QRqzbeLDUKncxBqwZDzUvgbbemE5LhoZhSL7Z8bU53c7h7amDigT3Utjx",
  "key29": "2DRovQswFmaDYueuz3x4sTogBM1wUoUB39D3FGEdSwjatLhigeYWRPdNQm1N5iaKL6AcX5EpUi72qvrCQzMWsREJ",
  "key30": "5CkbozoJd4xPm3ZxJ687ns6HHF4i32kawcNnwJtWmm7DFEwxewhZRhHzCxYy34W4emrLWJFxdkXXhJLrFMsV3ocD",
  "key31": "5j6PKv4kFf4y6qvCkQ9dXLh5i8rABiKLScq41Ndbaj5pkvSUMPBxT7igB8i6airwzBja1cmCHviKX3ZZpUMAfzTe",
  "key32": "5Sn7sv1MtjGUc9K95HsnWfr2WBWFGNur2rfz266bRjuLB1c2z6xvw8NaaP8HVJyHWmDo8h4sz9D1umAWwXvi6pPd",
  "key33": "qhArmfb9UJvsb4n8wBzTA48Z23aX4jTFeKL1h8ZrVPBzFHizFEY5Wfk5bBXnUKcYRfU1TD1sLfgyVpwctJ82JEa",
  "key34": "3ujHKC8f33TzFGx6DRp4wQr4smKHEVqcww9wH2VEoBVnhCAZ1Yw1zE6vLtGpeR93h5HpWuQcbWsC3VRV6KSfCcme",
  "key35": "3w5yZstNBay7HNGs8Bi2RWYf6JU1sfssDNmgcYGdJWUhJ286VJsxdyALjWkfmAZqF4uF4mgdaHSS7dGZPZukX9n1",
  "key36": "5deXQrdXd2Jd5SyhG6z3NMUsbf1uuqZQjYpqAE1bBd1eMw6uKHGoDjjVb2ZwD3WBJbQhKfnTPsCk1jjMqfxDMEks",
  "key37": "5xEEXTzyEFs3tfu6Ma6NVECUNhu1UzHvYWqeij5mXn3oNhCQMcKiwgDzMn77QsVoHZpM4e9TzbcKXm6CacQStNeG",
  "key38": "4TiMothstGKUZnvRpcKZ1WuzYfsy5pgMocWjeMhBB5kkNe5YyK9z4zx8bMZDpyLtT6Ezdtue8W6DB6BEt8KATc92",
  "key39": "8hkvG2uk7kQN6gpBMLGNoDSYm7pjqeDk8fGAGYekiyqQL27945up2m8hCri85QxRkMvkm5N8L7mSr6sWVBsZ43x",
  "key40": "3P875kE6THwVRFzBEyAiSENQF6AHbVn9botmhRbXgJR7We3AY9kTxojH37muU2zURaUF6mYQ8SHJ882Nb4gAgpzU",
  "key41": "3uc2fonESzejrB7FyFoVCJyFB68vKVbNUDAHYUARLpZ57FfFshJR5Z99r67cjFpNwS8yWeFith5e3xzhN6WBgfwZ",
  "key42": "uGFPHo2DVkdTF5RN5t35v9jE5xEaRBQsQPJh6c9FiByQaVwuYN6sZ8ztS77j8eWTbMKvp6rhYgV4WTjnAc9vmYX",
  "key43": "r7fqTXyEw7rxKBrcXbMBFV8tR6JF9PGsnp4NMX3wct7XMXmWzQMMWfF6p8a5qjqEnDfjdBoBQywKLrXKgeUG7iL",
  "key44": "VmKVMqPBkGMFgheCBWLqc99iebmzXQhxCSnx2XhLZDwBTVyAYQ8FVYwu3zZLDqzzPQpxeonsycJZiMRCsNLUWGd",
  "key45": "rxWjLMSmnZGa16CpLwZngyPwth18qbsVKgmrsS7EMVWm1CtVLX5K8GFxWBGCVmJHQpCLGbR17fcioQNp5csHiNQ"
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
