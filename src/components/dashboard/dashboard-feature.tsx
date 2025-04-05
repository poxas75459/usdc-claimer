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
    "2CUGwzqNFSDLbXutuNqG6te9YJtqhtF55ZFkyggE8QUYxawmyv4vF77ojjtSDQ51hyGUQikB4nH6PPauQx3r8dAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LHweJbGhZedGrY2hRBmDSm9aVyoGTu3pLgKBN1HUjgjHg6Jzi19Bcb7AGVwhkiZL6erfCeTykod6TVVqJYMQiST",
  "key1": "5wsU8hFnTXGtfqZPugMPvg4qhcTf5Q1Fw4zzEGmYG8WnKcsPJaAzbSPdizNdiDigFeQ6VLkJ3if5r5sAp4aZEm5U",
  "key2": "3J1hH5Fv1bNS5oqVEQ4kyVtLFLam5uFsZ8QCHfHosmwC5iyBnjnbN62R41uddAEXr67VV1sdGKMdQv9EqNyvzB9",
  "key3": "w65y45QfvfrqYXSpGmkH5kpGEd5ry7HnLR6Zg9FftxPnzkyhpmiKZjMSzqHrRjWRdpwLwtbxSJGq8YKaR12qJr4",
  "key4": "5p91ZDtQjuSmyLze1JizGQkrnwZrRzZ56zMz4kfPH8AztiYm5e8Nc6HDH1NdSeYjH7vyoNDPHZ3BUqR9kosy4Wrt",
  "key5": "5B8jWnG1maZjoEcYBcYJSMypRGadeXFFhigv3B6ZNMC8Br6H98xnm4AjNW6RYjNAkejVVFtSUkDt1kYD9pzTQzi6",
  "key6": "5Nidh31Cz6nYLxyDbDTDJodDr2YA2dHPf3o594CUhzS1mVYemqWVbtLRKpCV3QEuNSjhLHhW5niiDPbL6fKQk1iM",
  "key7": "tpSH588HfSCGkbh65RXEn7ZBcnRPtK6xH2NFUCHZr2VStDkTiZTvJ9iibjZfB5ofhJAEigbLrybYVATJi8ziZSg",
  "key8": "XD6dMyrrVJvkd9h3mZTVK2d636tGcbe4pRmSkqVBAoS3rf3sh5UhgUyKX1bqFBVvJmdtw7Xiyr67BXxpoGPZyZ5",
  "key9": "2Y6ZjNtir3zLJSdMcSph1mUh8EBerKghPSatayrqEn7TKBYJg1o3KwophsvPaET5vWCKvkSXBP2gdPHMqJn864kj",
  "key10": "S1trijMCrj6uSYYzWzSBaTj6jgXsaXLc3TAnDQRUiTU8Dd5ivGxXW5QxumWM7G5LMVA9YkdfgKn5Uhh5ZmdgCC6",
  "key11": "3ngwQFxVLGQT82v77A3H7a5FmRikGt3STVUz7czGke5H345xrFamgYuSUE17otcn8J8gnJ55CRgyv5rwKufkgXLa",
  "key12": "2g3jztvfTGTsiG2DQTAbseSpxjW5NuBzkyZexbjudrBESZA6fk4GasrpYbSsuW8a6zjFfAo9CU8tcYTM5sipjYHV",
  "key13": "5SM13faR1DuNUrmE3ehePQoKB8dSfczqYtgFgSMnZtYbGRVEhCZa1abTPWvSeUXS8MU9n7fx7nVbXgQ25Mn6CTLk",
  "key14": "3fryecpoRGHN4WCfwhYf1AxGUyW8RUGZdyLQ8AU8cLeCUW4a5E9sdrZWAJo1wu6w6e6QEdMoKyGjyMWxYJ4E8txn",
  "key15": "3HRhgShFrepBKtXgJrRUKzQJszPgy2ApvQRMFNput6dR6FeJxVcDghkrBZetME4vKRJHRkExqhim7WCXSiqFdvNT",
  "key16": "2tvZc61je6HcbZpboDaPULdneAKm8hfqxQtAHNAaWKgmnWBcHf4oWbLvR6f4ukwCRmGHp4szqDQpUkeAfG9ikXqo",
  "key17": "2W72NWUNnd7KRGSBJgJUhRqB2vHntgkCauGfZoAtVreyhco7EcmSn3ZqU5pffs9xaDGDzh3T6TzcbBVx6fK4Cgrj",
  "key18": "5kfnzFcZRpHtrzHJja2XsjrLVS3vFgFtRxyDV7nZvfdfxQmjWbACi8JNr21mAxoF8mVP5Uh9HL6wgcsbn3MCJwu",
  "key19": "2mUSX14qJ3Y3rz5X9Nc2vT7SQKKdQmfy7q4B9KmYCq9MTBLikkWkuPxx3YY3kEstPWfDWrgLPtH2SavjgWLNz9bK",
  "key20": "5hFswpBCHBdvuSofunXZh7StcAjWUmbrFA9VqJo1zKJr8feChpsDjbnrnfgtgUjA4mPUVorCZTRBhWXKRFinThEm",
  "key21": "4ivXuV5C1FcX2kw2ErrevK2nStmJ6VsY56mtVXHonzn9jb3kFHCx6KQSjfvFpr1QSLd9onbtJrjLd2dT3B7H7a5D",
  "key22": "3bTs29JuhWi3iAJpV1mdnsEzZfZeMGfv9L2Z92egcvBsp4FVXduUwYGHzznGqqn3Qy85fTNnz1uqjga8dVa7cHdm",
  "key23": "4mZ9Q59vysE8JSiZ1gKjaQdB8DirKwrUgoYFJrRDnQ7wyw4xtofXtP9K8qfaXsBjYS66SK8Cb9kSv9gY29idh13c",
  "key24": "ST7Ar2kJ9pNixuFeDT4HJL49WuMQ6eKNwAaeKYauUwq7s5uEJadQ8LJKGZFjDg1hBT3CZpeekz1sipTiRbYCwJs",
  "key25": "3Nctkhh74mWcqcjXmDAcsSPHFWziHhB41RPXXcBbvB5biXP7t4xbtys2NfVoGTGoQoiriijrQ28PzK1YDggSTFoY",
  "key26": "53Y1GeZiVH7bJnGzYEJ4zKJg3uSf1vFkYNwufXrChxKik4ztKTDaU34mD9Z9ueCdJpsgaWmSyyuYTyejBbYX4tsV",
  "key27": "2ZU2EXhgKPYVtrTGqS5ZVH7TgnxZY3D6rNb3EZf9SHqm1o5cCEWUjUxfYBSSU36kTQBwgqtQoDwfog7YcF9oYro4"
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
