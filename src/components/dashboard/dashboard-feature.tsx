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
    "pjsA4GwbXm5nS7xFA1AgudDeDr6QyeFckogV3yEhuAvV9fnybbyuGwqTH7ugMC8fJmkrvLVTGFK2Wrjmd4QZbQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "498yDHtVLJhZcpW3qPnofEoMPDU9yDk6NKztVjCUKHzH5gjE74TWXZw5F3fZEzvUSKgwrmPXJXKNDy9fZhcxZigg",
  "key1": "5rxcnr3BoN66yHcJXAEfb78z3PZXBwV559B5SGwUgcry1YCZwQATzRqPq7CPqB2jyMZ6SLaGWnFvGT3aLe4ECAnr",
  "key2": "5YvEavvScDeDbQw6msDhDP9rC9BTQzE2QGkSZNj9F8vhSYTm9cD5yUWm2pHaJw1j1CAZmrKorU9R6fnxnE8aYdRA",
  "key3": "24xSVAhNpzJcsTQDm3xigzGo8eyPnZKiN4W1rUcgVdfjmoCG5Ts9EtZfyDd1SHMJiMGGNBXoSefjCvSgbAsp94rQ",
  "key4": "Dy5ZcesNC6htf8JduX1QCajeBtkEAS4HCjcYCKsJLFjUkpyyiQi3EgKSwN3SkJqqWDH441cEpm9HAwsn1guarWj",
  "key5": "3X2faQCWLDin8XmGFq29zzobpCdjgremUoGqx2As4goW1r9L2MqNFrsNci6U9uddCMmNwLeHVQUyz8ZKsxmCad29",
  "key6": "2MJnXRGUh3xT8mnsthQkgB6cZH8FFyr1pY5DpwJLnC5LVbaENGxgNmZ9ifUyQScsRvzS4Hn3CrcoLC5S8iHX8XH3",
  "key7": "3fkde5iaiSTLvr14eTHyeLW2TLdPKrf9Gc46CGS4nndym2EV2x5sxKzs8pmjCWk58w67FPmUQVcfBkUtLAenzVhY",
  "key8": "5wTBicRzJ71Ex8TvqWQMchkJ6uAmpysQXTF6euLBQed3jJegQA5mYSXMW1v2zjXtjLm2pQypQ6XRAGE3DauvnvLw",
  "key9": "3iVMMeToSKqqJgfvEFkhtbav9se8FazJRQJXeQ1S6oaTmEiiVJ7v2nxDfGZU6XBVMqkut4XsWKn3tXuLcLwqUyC4",
  "key10": "5XT2CQbtb4PNRPVvuf2K13B9ni6ZxPpgjbwB2i8PqsAP2xf3UG9KUnBpogm7LLJ5JEhbaFMH1pNP62P2kaSqApFL",
  "key11": "4ip22gNhKVvPJWfrw9oTis3fHFrQfP2izUCJUvHt6Poo91NXzW4oFwYRekkLULv52hFAvYTbwaTiCQjGZhwj57Mb",
  "key12": "2HihGtCQHEVE39X6zpfNuCginK1Ep8YhxbzkqhSXCpXdUhdLdCABVSzzKapuHMQeAzhnB3d5xrSoihPwD67ffN5u",
  "key13": "f3JCrSTR3goB7A6roG3ot6Z8uHBLPg2usxCFxKizkXb1BfQxQctirLM6Xrat59FjMQQLz62ioRy1A1rsHJXCAHd",
  "key14": "3X1RJ6UtUg4HYJbhAmm31v4UTRJsTQ5aCJructcX1Jj6RseJYVTpYBaWqi9UhbHJBMpkjSy1iR7J7jfjK7d1sWaW",
  "key15": "5eq288tWR82Gogako9wUcCnsp2dekLEbwAKJCxJ6reeFUuACpGVdsNC3oApKNodgmTB6TxrT71Wc1Sz8jMAb79pb",
  "key16": "5neY3V6bpH1SooTKsVG1QW3y7PGyikJabpPzxkBDDf17JBVgVgYJhHBtkEtxQrs3SoHQrnrgCaFupBpQvj1RTr24",
  "key17": "4DQ2K5z7wDuQFHTXQqzZCLUxbxDHqCob2itqB1ZzV2nhV31vDmpX8StrgUAZxAokCZ4kgJw7HVuW1Mk4zw6u8o1N",
  "key18": "5a6HJY4DX1WLkuJPAsAkfoiaQUvZnBwtyocFC2pJNDh2koYftKfvH9mw942xyypcJBxzsFuCSTMBQ474QVG8jUx7",
  "key19": "417f7giDmZ7jArBxbMxSrzvthmc1qFjUhDszi4oAvPZtvQk8gNqZdp3MRBBsVANCMXVhJG8WTnCHQfUZJagrybVb",
  "key20": "gYg6qoPxJdHa93io3VsdiQmpfDh9p3PNwFpvKderXtvcTrHXawBC13P8QbrM4iYju9fZ3PfNf87GRToHWRaq3gk",
  "key21": "4G77cvtsAMK4ED1kWZpFJkm7GQWLeR1wNKRDBNvfucE1RFKQNaFJqi4gMZEumD5MsuzxgAkTBEmTZmj6hPVhwS35",
  "key22": "4hegfhFLCtBnLcdjHWUSYU7VqwzUQT3reoxt2MnxsKJsdQCkm7gCNjFttRYGdLAyQ8fRLcFFxUCYUxdtutphNv2q",
  "key23": "5yzez1jbDxZLQCcMwhg2z4tKZ6qJDxN6uVGR1qsKoTfUfZy9uoxKFAvspLxPsCVrPeooMNzGrRfrJCh93V4oU35u",
  "key24": "58mB6yTkKMUqg6oWQxwWXRLEJbCFFgpdn3BjNQfKb9VAyo1pbvaoRVB9wHJ78QH59aFXefez1mn5J5D4EvH3Ah62",
  "key25": "5ZG8vbsHwXZdoRkBQ6RXUa5coZYPrWxE8R2oAydtiWg1Cwd3MEsQhpkQZYGaycDePmKmfoJQbbreMRU7yFJeL2uJ",
  "key26": "4eVioujjyzLuLJBKnkm5JN5fUsPbWm4QPqNSz1rJBRry8AFFNHZhoBmDUUxWTziVNzb9b6y86ChASW6utifSq4gv",
  "key27": "316iFx9C9E1zudp6m4GU886F2LD6bLLqBt48ymMjkaeWK5eSbnSaekvjUAZXUwHQtiPU3KoDbHjnSQJpg29nLVQr",
  "key28": "5ZRkHFj1w2piMCEJoZmowZsE7mewAXsJdurEJigTAoUMBXLiTbRZtyfDwh2ZiK6LqtpFvrfJYZjqmqEZZQqXLTi3",
  "key29": "2cv3sC6iBPtkjSpnRDS22Rr3XergfFaZaJgSZCnRFFDTKXdoyatUt6yaKsRy63UexHGPSPbNz4n85Ft25juhXN88",
  "key30": "iKCsiXo7nFEDwVoELa2revVFobPJgys2CsRtoKc4E6tJEeB1oSXLZhtZxkxUftDKQUuqk7xBuJjTZgbSDbM4ks9",
  "key31": "5ddHNkzHh2fcTzRUsaCJBt4NAm7nepW8nv5dZdA8DcsFyoNR7Zj4j1wqR8vCt2D8PyYEXb1g4NPFBUfEhpLgoNPm",
  "key32": "4qz62irXR3BkxymCigtZ4hiCTKygExzHtbTjwfAsTYuJBJGLnaWYRzPXunkxhN3qXT8xGUKAu2hgSAC6ky1D3GpY",
  "key33": "mdUJbJmTpvyN2Re219A8pC6RaNLwVCoZREg7Qqy2bnb2LA1m4eNutYiemEBfDMa5vyKsZzw81rX7yiM2nYDQQsa",
  "key34": "2jPA34kcYff3KP3N3KK9NvxmiiazNq9KdLqdcAeeN1CFiHwdHfsBeAryT43CLQ7LeoHVzgSBdqRFBJJ1yVwzEXQ6",
  "key35": "4NDpXQKJNiGidFKqZDrks9TqTKTQwpyy5ET4vog6Et2qGzfE3exZ1UN4TCbjvPANarRZD2cbgs5YPmq13VpZ1DNv"
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
