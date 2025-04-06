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
    "WamDU3yoaeo36fGFArE2yUCPShorwY7jzEe8W8yUkKg9PfzRURKyUFLwxZRGHbo5mESoqCZ9Xn4PWjaUk6XRgbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gcKomhZA2LJT4dHTQ659N2d8U8Pe3orHh8yFjoMqBBMUjsQt5FcZXaCMD7nLJ21N83DnyEncJa4exiYPV3SQ4PJ",
  "key1": "48qkZrDjvqgsbGj7k7NJMJ8vkEcembVMB1Wsw55DBCNh2VxbucT29RZjQp2YNtbCVgPvYBtmWV5UKPvwECavNpCn",
  "key2": "5i7CPHAr5HXVWy94V6ZGonj2mD1sjhUEiMkXTdHckcaKxrqGeYeMDtGSPLQrdX8FpW5s64ymaZawQMAiWQjyHaDG",
  "key3": "5buNQt5Sxhcmv5ujJN5CEMfzbSke7tV4Cg1R2FZRVjsFP6RxBuyUNxCwQJZF6o92ZkCEW6DKfWX4TT9wjY1z46ea",
  "key4": "dzn9GZD6wsCwAf2teuv1dYCDNzUeawAC36Zqw513V2gUFsEdow4Kip3BksTABjSNbhyk2CPZHWjwdopgvx1WWiW",
  "key5": "5GryKhaoYUjjJkTrA6M7vK5eKBZ9uK55byi4EaXfEPFefTM7uEYbjdiWKDvhn8dH8BWU5cxkJriHcRGADFvaZcCG",
  "key6": "2RWzzL424b9QYUxF4KMHMPdUJ7an2jkuRyn9JzmZDPorrurMQsZ1BhgNa9jajHGyha1KVB12Gwo8um5z2bicGMGg",
  "key7": "49YmF9ew3SqQd8HGqDFcyrZ28iQAgHo1ibkpsSq5VNKpmSQciUCdDNkJRJdD3amXHQ967SmPhEiJYPGc2JCBBePP",
  "key8": "4AseCxM2YXYpLfHR9n1DDMrKrVcQarqJ8kgD8kaYPFs6177LJDx2sHcprBKwLKf2YyiABa4UrSQPMmUgW4Upcx3a",
  "key9": "XSYfFL8sfnDYdNCosePyfCcSWwACZ72cSrnyLX8oLmq7gN19n9HiWAq3Sr5EyX3TKqHUi86mcV6dR4XDaRxUzdd",
  "key10": "53bMi1yMnnWxAtLHXdTPyGx5oR6duktuFXFXXPEo1yhwcaY7sbwSM7n8JqJsUw7NDuCjUpbZYH7QNnTGz3d9nyfM",
  "key11": "5DYU7pvkksCDxfywytBCFXj5oKRbY2wvJrvXbEQ69gx4a9B2zBEJmdxSboRHTGCTLraknfc52YShvmkygxJLyG38",
  "key12": "2zP2gsSWZtReZBbSeTyaamQz1T1mWxhjSN7S2Qp8kuxqh2znvZ6S5v1FdKDjqtixkqmXBYoNkovHkAnUd1MWQHHE",
  "key13": "3UtgJHeneGAKeDkNYDGw3tLEDWY6buMdPetN9QUTHAQnTf9qipwGCKK8Br9jvy5PUZ6HV9kWo7mAtJFGvXi3C47Z",
  "key14": "7DW5nuaYXLm9LGVrvCVeCpTYY7Cjr6CyePCDLX6Sw3yuUZpM2APKKso6Vrm5LA182ZQDVhsqCvQPvCpsRBarqCi",
  "key15": "2Y5b8f83zQ8kS8PEND3hUEksi6tLMNPTa8cDQYbkYs9xb71uNegE8jfXHZeZjcrA8BaSgAw1LFcqguGUMbZsrZG9",
  "key16": "5MdDy4z9uzdV397dD2LTgmY7WRajDTHfP32riYBjeyAAvhftcjK9LqNzd4dBbYDPFDZrbN5wdDjgCUuKnamUpu39",
  "key17": "4wnqh46shgcxHoPzPsFSFtCuuYnB7vh3RpnEu1u6yHN7fF95JBfdzg5sXGhhjkY6GzNjwHiB5YNqhv9NRWQ3AdjH",
  "key18": "r84GMEJEwJn2ajhq8yLboyDeQm2hvtdKMT8zJYRuY8yYCZNrNMQUk4kf3MkZKVAyjbkSuKnh2uguFNxaLMdTd4C",
  "key19": "448Q2gQ3B9PEDMgUoK4JZ5LsmKa71Mk6uz1S8M5MPKcKS8c74xJJfoCv7BoD55rWEDaKyjvR9LUmfUnmnhzcj3LE",
  "key20": "2AETBNaBXkaqJmpGtjz24LJWhSQbSBdjhzAmaH2bcru5n65ifuRGyiu9ZB9Zp2At1DqJmSQXqfSUagHvTUvHQVoE",
  "key21": "4DJMfHHFJLqAPutApPfJk5mSDv1oa3Pt4T7YcmamRMoSpPAAUu6tNRFqLuc2XqtYoa3f3xZaigkzFxq5KuVHDJEG",
  "key22": "2jj6JMwCXAofqVwKEZvgk5Z1Xv9EPqvnzD8EZDt6GAJWXg5iZXaaaxuicRJkCuK8J12ebE1XktG7KbFMGt79oyar",
  "key23": "4x4BVoM54Wg39MiB2o1KWpW6sgkSiCK1o5vbhAHdDmHQu4S9FbCj1o3hZTijCdKmHdHqicSUPB68ZAq6mzhNQptm",
  "key24": "bgsC8z2jV3W2ZJpE2LuPz1MM94L6uQWqjzfcErPksqa3DRHxfptigwvBVVQWDoepPRVqRN4a9XpWE2xh37yuaFL",
  "key25": "vQD3vWpaqynQgqeT9ztyxBnBFvAm1j1bebMP1XQgZcCEHV4CmVTSbxYriJsyDeJRwQsS9QtPaZrbmdrKNQQGedS",
  "key26": "5NYLQkBDwSgmdKtPRGWqMxCo4QNNAG5Q6UoUG57GywNCpmYdya6GwB3jYLx3GQzYzWui5JcEysXWrgUDWi37xirX",
  "key27": "46zsYJdAuF2uQqdN9k7oBui8zSq2Sm9NurVpTtzbHvpdxey51w4wje5BfhEYuazbdA27HpeQjjDzpuwRuBDeXpbS",
  "key28": "2choQA3jTQHatMQ2PLmJyJs7jMZ1VMxfFGBBEni722gNaoK7Zv9CfJk1Zq1Ts3vvyPSF8Qrx6XkRiGE4M14BR7A9",
  "key29": "5AZPpntuuYH531oDUso79fgtK4Sy1KTGBruZjNi9o8Rbn5PDDzyTrDnmXWSkegYymyQgfeJ5c9cPGauXjFYK8v3e",
  "key30": "5bas6AYzrzHwGxc11iqVbhzH23B37DZFoJsbAcfyREMGi4aj6ZfrQVNXDi4epUCtxMdabndccntxi5y7VRqDYeqb",
  "key31": "53ysBw77k11BUhJhFEFCK752pfXCXz14iW4YiJtHc2QFbaFiu66cusjAocbnU8Qr5kzpKyCNR9oa6uMrsS16CCZB",
  "key32": "4LnkLKexuNEiWjY5sRYaQSpgCyTQ9LHzTwvnH51TkUWnWw8TkGmqavpEq2tj4pwfRjA9QoVS8mBygn5AfUA1QEvu",
  "key33": "4GDVW74T3LQXHmXBeekxp7vgShroXaaHThZ5j7u87wEnB1epqAx6jDmZnaBUnaeKfTGrQgjqLt8TR4KNiqGW4X8N",
  "key34": "KXk8iqePKLUP53G5tfP4t6eugfYhpcYTFapN6fFdSC7kph1utNhpj7KJPzV59HgHCYRqUQ26LtifX5fvqPKLosM",
  "key35": "5rtn5tgGqTG2ZkLnK6WY3KZTdPRdrvNVVSw3EVkVntQG7Ce3GQBi6QXk63c8AzenBLzA7Fj75FSXB2qj8FhXnpQr",
  "key36": "2hTkqBPkGDrUya3fVBRkLNyPWH4pzzg6mLYiL5SD3ko1wn2ayF1eAswCwexy6bZ8E2efnqD7GSNLyic84QsVYr5P"
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
