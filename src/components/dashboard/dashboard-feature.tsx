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
    "3iLTxt8udbGg2smkfxQ42JYQgGpKVPZM8MtBtZddCaVRfei4rnCHBXw27Hi1iqw4yYFMqrRnuX4cXmNGBDzyDmBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYmtkgsNcskjVtUAHeAXdnkUJqwRUqukfuUkCsYpdMGUGnwkeDoHxQqahHjwVYM1kfWdUSMhJhvyYDJzVjE26hG",
  "key1": "5G55n3sBRu8DygeNGaT3grDGGEAW1RT9F3gyqQDvGX9wm2DqpMD4dzoVzkFBZqmFDYkRMeKF85FrchSM8cdugEjp",
  "key2": "29gLtcSXZ66CkQKCbGVUcvBmGVWqupAgRuefuefjwcgogL8BoEUU17gfPucAGnxcCTmPjq6QZ8Es1WMM7tNZCtZe",
  "key3": "2N1Nq8HQQtVTwjFAXCwtaHtRTNYKWv1aCko9Ht7xEtyWMcYaMneHhKJjfn6jhmynSvKgLeUuEHN3LvEPCraas5GN",
  "key4": "5GQ4ZjQwRomMKNt8FeEAVeib5xY5Wjetnph9rfQ5Gt5i1vbjSoNUB57kDcvyLJU9sn9W8TCM18QXZtf7eSrvkx7",
  "key5": "2fu9fjKwVd1f3bT6FVYXF8Wd64ejZT61xAbcXzdes6oA6v3DLXhPL2vjrKZ959qBpdTzJ6EnTBDF5RDTVyH3get5",
  "key6": "4dBNHKfUkfkDy53tYZ6oVCscG3VgGPnkt16xNTjexTcqM3ZGPBNtu8SVWxCQhiXFN6VWWnSJTwDkQ3Rjq3JSKa9G",
  "key7": "3hucgMisi6MPJScXpKekSekrDgS4VRgs24SuMAHNhgHZXzzH4ho8nPx4Cgu25wQhmXb9LHDH6zPQ7KvPt3Q6XUQj",
  "key8": "42UQeFyiYCnSJufDhaCBCzFr2Zx7Kyt4wepfWa7CgJHcijkCLRgAmYHaVk3sjKBXYi1P6vVEvqpoJV1Gf4f78UDt",
  "key9": "58C4G5FxD79NAWKeLDH8xG5njS4TeXQjXwf7rfiAMoT2a8EQrvfT6ojitX9Zu3vAVCG92m1tr8cHtAf2tvrNQUZa",
  "key10": "RirRMCNuzPpe8hU95dSn4qUcp6j8DAo1RoUHFQvkYLHkyCzRi2TpwuxMvvV83tKXDvZgbqqNhQVVxt18FYEauTt",
  "key11": "3ob9sqC8XjznSgF7q4xHgoEGhEZXqUCHikhGcDYcnwZteCWSJ9FDNQ2F1LojBhh4qtHJE2ztmtktWUYsyB9c827K",
  "key12": "5nRpqxSV4PyZPYmrr7ofrE8ZbciukQeLqPz8koWSds2d8TezJVhPKS1XGVGKg46VdrHAoP7woqFrT1KhGP7Kaezz",
  "key13": "5Lze7EpYofPdNKH58WeySDsFkMHTXW8nzWzsEGnEQzVK3Zj15NvrbcQh8ZoYQRUp8W7csakFe4dvJkAfKCPiDwgd",
  "key14": "5tDiz2ywZaVdn5mKzzkREi1EbVTbnQ2hN8mxNQzbBbDxDY2YK1Y73NzPqToUA8c3GCEfkgD3mCpgqwre43nt9JDw",
  "key15": "T2rUEr3aNjpCLkw7mbMDx8EFUMFDg6wVzbwppaKmHXNT5EY5k6VbwaxUPrMTqkbADdMTBsdgx9WP3smtqCfk2s4",
  "key16": "4TC2cd8ZLBfHzYdDtnsw8ieFyCqa8EGfewfAuLQeMu7hc7VzAZvGdPJ9eEtKT2DLdeAjtkYkTVmBwA9vj8su4boo",
  "key17": "gJ491Qn348Cqtn31zTfFebzRUNPns8K9pQCHG17Kmw47zK1VRPZ2H82SYxkvn9NHqX39ySwgejeQiJigvCn6BxU",
  "key18": "4nJbSjNdNc6opcKYgXLvneUeoERHphDbmnFEaNwEUW3nnF9vgxkKRMn7rQkgEZLjpjkMfCPr1EqFihKzzivKjJrd",
  "key19": "g7Hcu39jVbHc71BVn9vZbgfJ9o5CvdLgQxMAxjZSGcmVMw2wxs6q4E6t1a1e2ZjzxFUk5zAVL7mSADk9vLhxkyn",
  "key20": "4LKnJtU9SDfmJVqcpFP7ojXBREr2oL8BDF92YU3Dtavr4b3Ld15zbqAJ7tveYDuWfRNpcEJPzHo6pC8hq25f6dfB",
  "key21": "22jqezfRkMVZwyxWvsqx5US2KeHLi8MqDgC9ySnSFtpN7pTj6nRDw9fx7tNfguQHsKCvw4c1vDtHsB7j79TBm1EL",
  "key22": "5fzAYB48xDtSqdHmMsxyNTHfWt6ScRrBcemGp49EaxoMKSfvtUafZa4EhrSiMQisnL64JubQbhSFeTEXtv1U68yu",
  "key23": "4SkFSf24yEK9WsJL5H5DdFRwwnUmUGPRbCaA7XcDeoZdrciTMvhuPh9YqEAUDCz6htibHrE5YkcA7XxYfH9ek1Tv",
  "key24": "j5ebdU1iM9tYjrrsso3fsQXbJed9eSyhWqQec7SUkxkDmYnieffFSpVYUuVmbxFUXhdwQvC1QbqKAvGKLeHCmzA",
  "key25": "3VfS1poorFtKLnXG6zrKNjM481dSzfDtgR9gMT6RkZrJmvoJ1BpYUxJYjABUNAAn7Ey2Zpnrg6BPryJVfdq4oFS4",
  "key26": "524Vb6GaDjnfevTaJHswcMkdso14iYEz6xFf1ppoqCTvSwgLGCjPLfGidnDaiW6YZ8RYamVpvrsyYbsHu9QTTsEu"
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
