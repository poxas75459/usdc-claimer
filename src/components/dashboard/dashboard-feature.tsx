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
    "5v8EvndjRMewvjjDhFwMKdbXUi8dE3tbd1FUxRdvcn5HPWm2zDtaxjd9phQFHcUFpXJToKYzr8H1cmjizqPoTMGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YikSUDdbAH7qspBrS473zTSUMWDV51fs8gdXsuBQbiD3gR2q8FYzh3uc9cTTgyxbZBNuE36bMo7pvAwy9p7rqcF",
  "key1": "2gNgw9dg3n2siQN1gw2tPANKGmohfEZmaABw6kTUKb1dRhY5xGNWhpjpUqUETzKbW4CA1ABsyTT5a4GaXJsPes45",
  "key2": "4eER9CJuYZGDpsV8ZqfK9kre9eDawnAm4qrb63zfRuuUoNqeP3TNYm4b3FBXkX8tpWetdnHBuZ6gqRdsAvgkzC3v",
  "key3": "3qvw7zTEg1zyA9zcr3QJHnoY4EFpJXGK5WrnRERrsEdcuocd1rMbWN7wSaGpSrct5nqc7uugP2Ji72ySfhQwccRn",
  "key4": "66382meM3yR1uQ1w5UtkxANrAHEPyryuND76gbYs8Y4eB7SCg8MaUGjz21CT7wZSMUE9U1Ygx6SAgfFXVUgxHxHr",
  "key5": "mcPHT5Mo3HqHu52tkr2s8kLqWHi6jWYPRWFVyqHRyJjWN58hbb1a2EL37RfB36m9Q4oF2sRSz82dC2rfsQfGpdw",
  "key6": "5JnUFXwAg947awuUZqykL9RG5YDSCG3fop3A9uqVXa4Eg94ziTbCka7sBGmLR5SHpEL4WYTvk217j2zA5UB1nqvt",
  "key7": "y6axQNN6negS8SonUy2kZaE9kWFgyK9ZNz5ic6KBMk7bMdwJvHg3EPpVsq8N7WEUMC3ew1P96cUajZZeDHcMSWT",
  "key8": "63s7r4GwGcCmdEFUxfCzeKEp8N1qnoCArm5QegFotViwxi49ZDm5cULDgjZQd7HqriusNKVtcCpn2e8b3FnTZRop",
  "key9": "zUJbphjcKMYbpkJ1gnwML88t9KZe4JpnCpvYfBdKSxN56mUYV32so3zvrArLsDnsnEFsQ4NFYcgWc6kKNsuchMG",
  "key10": "2NFBoqafSyLXLRLAAZ9egYW2KtGvMXwrtYjPEHWQVnjT2N7SkaGbzQjsVwjxEHNvWYjvXhp8ZbgCkK8VTn4Vpnvg",
  "key11": "5SPESZ8GnjYGvGAgQwUFf5QqrGP5334MRnWkDCVxqCeniJRCddPxhqPsc1SDKtafk8ncYnaie2HBqCAkyxQAr5Rd",
  "key12": "4fiiy875irttnjQELpqayQ7EGzi59wiKdgZ4ygU6zCQvE5b5a4ty7nhpcpL3aF3dW4mLZUs5HH8gwC7T9MY6UEn2",
  "key13": "3HXqL1pCi2HaAA3AWLg7PMme8JPcjzYt6U7Bfj48mBrtxeSgLqFimiqWmzGXpTfecDVpcnKgq8y2MqssY6zwup9e",
  "key14": "3oSnU8FXykmtj5edQFMvWVaywdbjgc4Dm5cFQZhKERXJgL2N9Zo6J4LuAxZXjxoxcxApwSgQFhx6VPVu9S9JyykD",
  "key15": "4oJ7u6umWPC4jHEtePVwL2jwhRn1LbEx1LnyDsw9dhrVsBcuByoZ8pgqMSca6M6Sy9NL83xY74ewZftE5wcfg2gG",
  "key16": "5kUm3iH8Na874YyYgnbUQtrNWygDcruJqtyZatNt5p47PSqQTkDAHgg8JGHsCRfiToyF9a3qKcybBrWErNiuV6kp",
  "key17": "295yhpsvgqPtidzVKn9L7trA11CLFs3mL3HqGPzEN2o395BXhQdVNsuU8kHzrzLzCnEJcgyXfGhp4My9yHJ1dWoG",
  "key18": "gZRtj9skt8vWPszgUwQboquArnbTDTTMjhnbEHQVMXDiajdKZiykbsBh3cD1ToBx5RqczhqPgui7jtjkEiXSsSe",
  "key19": "9XMqMJb8pBxpi5ohdVmpikLNuP4VrsWV8giJYSFqx2uEALwJtv7UhGQHUFgR6zeiH7bNvCPeYi3hTaMV6SHXaJo",
  "key20": "2wmc15eTdtGd4axXCS2ukqJXcGeYakVQNHqgVfr8mHoLTkM6v1mtoLVpN9KLEZGoxxWC5AN8Tssgei49N8DTWhzJ",
  "key21": "32AKnnAiN8Zn89coHBizbB1YajmyxPYmj6fcABygCx17Qfy4A8JUHz9QLW9KCRoSy2HG2xfoB3rSs1nHTJPm4TPp",
  "key22": "63krHGoD79wjEAtfoBwb3jzUpsVTafM2cgEauAvct9VKTZSVZXgqTagBf4W1qkuaZMh48w4CeVnsBwd9kFFLYECW",
  "key23": "iMWMyjhHHPuBXzVpbsSHerFq6aHnjiCReVVkVW814MPzg3MRJYwECRqVjj13VRTykWmukdjcfd4si6Z2mDvheB3",
  "key24": "2s79S7BNByymMc4dzLo6N5hn1curAyEDJAmS2i42jwzxe8wFMT3eUyVBroLoDPyZibH6NhFzjg2fTr8JQfxLCbHf",
  "key25": "gEXbCSV6HzBMKCPcSwnmf8HEAnNcDawwQbxpfB6DZEpnuumbzkfobBs3YiUPBFyXgK5iKeFyKZcGE6ZabkohY6y",
  "key26": "2C3jgmo2yTtnwdU89QNC7Ct9dtq7Vu5XbfTyxcoLJ5jvLo6BdcoEee6aqoms3aPCZ3cGjBoaLpiRm6rbuS2MRyZL",
  "key27": "5D7qksWjaenpn4S3GG8TfyMFh6amdz2JN7osHjU9kxf4KFHuVzr5TQBdinA4jHLKQgW2bSH2xu8sgyMVhUfYesdX",
  "key28": "3hctcup9jsyLRyNQGLss8NMZqsMgKmt58L9hjEVU24uWSCaBS6zXhG5z39GFurQ7PAfz8MwjRkwRmUXFvrgn6J86",
  "key29": "2tFqgEwG2YURQx3Uv8DBN6pQxZRJqpSszWzsz94BnnyicMyd7eLgw6NFutrbqwmeryCrvqgzLAxWGB7KAEFFLpxr",
  "key30": "UxDjfqEaz7npse8xbCwfjo61CK6hs29RoqR9ThzsRc33518M6aoPLSLTE1pnKtE1P8XfsrW8in7sSQuhhCUy9Yw",
  "key31": "64dg1VL2aiSDsrqhNJFFN38rCL8FZABgF4yUXsYdbVAaV2GKBi7ZKMjkKz5QoGt2yKAfw9WWBNef58kRJtxuQniG",
  "key32": "2eViy6EZPrffSAim4geBHeU1PKBDnGK5kZ7yrkw5b12RZFGqv3mo9wCtRYUf5tu3jnqBdDq4xryzXpcC4pDacWK8",
  "key33": "3c35atjr1VBfHoiM1rddPsURrqZJ664rrsTac48rKajrecJ6R1yL5cbFjCqTnAZRECdwnXSYb8wBrS3mEgki9QB1",
  "key34": "3i6LvfoA4MWeFLtTHFdNQ1BzgWpgF15b54D4gAKy9RaSJtkoiZi3YSjiwjbK8eL1BMPLviYqT6NyuBv1XAmguyUS",
  "key35": "4hweA23wYzLFAHZiT8kN9y1F5qtsNpvZEFp4SQ2gr9SwJ2kWugPK8vbEY1dFMcB8g7urczzpkKq5ZW2z4UvG4W1q",
  "key36": "atY3uwaUqzSCNDFGpq3KP5nuoBpX1y1TLVhxjGEwmCRjpMNRU3Dfy2QVMKEbu7DrBTeYwEEJmMLie8X8mso7dYw",
  "key37": "5LYbCjUJ32oUWrf279stVidqUHwMvPnFoHXh2SVpvmNwPbMvhGT63SwV9NKXiWdiQjjCLL4BuWB389aiy2RaFrLN",
  "key38": "4nrtdCrUdePwe3Jb7549MJ1YkanpUcF9cgcu53DEhfLkw6qTbXLF8K9CkHpHNMk4iawtpGaTKsSdD6FLf9fm5B1Y",
  "key39": "63NrNA99Sw4iTrmECFDB1DrpESxeDFK532mWoWRFSbrHUUK9BGPD9Bj7uPTugUutkvGCCqmf83X7iZtNH4jcdPGU",
  "key40": "4iibsPTGhBfiVQBBq8fP3W74Z3iuV8KR3fPDpfJGUjJdkmYRkrSiXrZd7yshb7PEem3kNcwRySPiJ7HbdAHsugHL",
  "key41": "4jWn8swMiQp8zNDoeeeyx3zdK3GjJWi8NXdtNJGhMjebgbEEYrUnBiHbH2Ex6kcz97ythYCXm3G7J4jhkeerjCf6",
  "key42": "3JTNKbWNznqEM3AaB3NcWuBK8Uamyp4MSqe3HRE5dJZPYRt4VS16hpHnu3e6TE9xupvmHBKatfdp1zoabRveXJvY"
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
