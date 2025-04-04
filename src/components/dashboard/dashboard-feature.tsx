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
    "5fnTzyGS1hyJAS45CQsEvRk3ggAj6SdUpd264JgGdQh7hmVsLMpUfSWTiFJM6f9yRUyMN6oj92623oiunt1zwxBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "urCbwCWaJ4pzqngWABavxtrWJMocn2VeBqFM6uQXaHu9WyycZFffmctdt3MFEr1oZrGgNBUrby4N33PCytgq9CN",
  "key1": "GrFYnPCZqazw4m6DWxUXyi6E5ZFodUURiFUYuQcDvk1eN46nD3pj5k2DKWG8EJp99Fd1Qrpx8S6xStGTs7F2so1",
  "key2": "kutKehAHJHUTTSJHDmus4qCsXxfiApmKeLv4xLMdg5XN7eCYHfqPzCMhjTwYvsuGrxcEm9aNwjmnbRGG4TmseZe",
  "key3": "5JeMFTkTzQK1sJtQfAMnNmMa1WvPooRpszxBUi5MGDpGtJPhsPTf97aVpCgDqGJSA9HZpbHmjW9VcdtbXtHf5BkG",
  "key4": "3c4BNKafuccdUs6Xx2Tm5eQ3vELmB69SmCXB2LibQtsSZS3WhkWpLjv3kHJ7HQhtBdaz4tqMcxp7dWdGCMMHVn5t",
  "key5": "4L6xNmLTNtUa9JxB4ofDKgAhPxaz3LniuoGeQDjXLnw5xS1bwePRDurJnVnFCEHVWoE1sfbR1iJfuyoCCwDexQtk",
  "key6": "2WFGbHnA74DkCW5n6k8nAHqa7G3yXEzksbHqejMoBKaKTaWf9Ej6crjgy7SeN7sPNDQeBbtVTuM4LoKkFg7YxSNq",
  "key7": "4672BdyrwB6TMduoPs1TCCHjpxgZ1wPQfpXjd8xY9XaN9tnehdScWAQ4BbHZe9R3iH3NGGSVWZRU7WiZu1XDkfHv",
  "key8": "4pNrCs8k7xPbgvkcvzS3TXoSGGqxP8NBwCbT92kaP6K6UXAcuqC8KwfC6mPWkXDGKWMxZGygp8xPm4jNVDvS7oj5",
  "key9": "3DAyT697cG5QZxmNaU37Gjtjdzpxpp8NHt86CGj64bbSTuhk7VMNoEQMmu996N9VjyyT1FdqW6uV2RaRc2PQ7Hdw",
  "key10": "5qWP8Jvsf3c9wW7qkh43dRNAHuMZ1zSrSAgbErfDuDhp2Z5RbPT4mwFGy6mfbk2Vx5q3CDgFkuoqYZrUtAonEoKs",
  "key11": "3vsh11yzAUsxjB6G8UgD5CzMTHWqmPbqmkhSEKRUAWxiyVpY4mWYakZusUxVLcXGH7XooCRSWQV27gRTHobnfzgb",
  "key12": "VmPu1sVgozWwEfFX4tao4HCLo9UJDr3yg2s8n3i8BUsjgCMZVK4EKDQfgZyP3RssTztPxhnDEnRFHEj7uJF1oy8",
  "key13": "32GCAqhGMEqw1jTts47Pzvfop4f9Ke3zbBPEnfVkL3x3iodXhnNzYTZVVb1bcn4kq6JamcE3mNDBDBCfKic4CpGd",
  "key14": "2UsQ1tJ3SU7y3dY4FaocTtSAfT3uf3Gswxeiaerzxtg1je9sk6VBpnkYqkMyQRQYJtq9XRSkbDvFNXnDpkBhukuM",
  "key15": "4GB3ZWNna88ZPqoNud6kT1yfrkqYkUkWULafYoSK2Uv1jyWfc7g47gJFPR6dgERrwhJqfvmDYRTPx2BPx6ssoT6C",
  "key16": "VEpRTsyitiAmhcr9FHVRL7Nsu9AfsVN6K48yqqwhntQUonxfu2PkPRoLKW94HsauyiPSVmQ5SYThgiDHTT4SBYS",
  "key17": "57Kbm6FqEy9auBicdbgajK9sQvEJ9YbKubcLMeaggXpBuN8GNC2UgAEL62YmbZgrTj9QQ214NEkEdqXgbzeLM3L1",
  "key18": "4ChyDRZtLmTHA88f4xAjQZNufkWwcFy8SXnjuWfFsxMUyJFpGnUHMAfCVxmAWaoauaj7Tw18a6nRe96pEaBbaxWL",
  "key19": "2afaXRCrGszjnfNhNd1UwvMQAnzoUbWDVvoNRfJddWqtdwyiwBfCFghfDM6VXZNHz5uxR7stSi3FNzVit1RSXgrz",
  "key20": "5369ncdENrVvtS4DrPqWSqFeVXfCxnHrtP9THNP7MWiDAsGpwBtVF9mepRjjBBVjHFbwAY2PX3eyxr1sMJDjeS23",
  "key21": "2RbyCDTopNCVD9Vw9LPTpX4KdKNevs6YP3AGeGjipXaMVvGKGa5SjptNXAo8RjBoEMEjARAf42Fgc8PHxDru9XTy",
  "key22": "2ei6RDtDjT5FQnMqRJWRX3bitbE98yfhVZNev7TzGhbtoTjYe8XRU28xEXygBiccdWcxM6ixh2vSzBAnUSng7QVz",
  "key23": "4T6A6pg7Femghn919JJVKr4sCg2oJsjLxBPEqSByFL8bZuh4vYA36P2v8zL9GAqYwEKKPXRJU4GgXAnvHfQsEBjv",
  "key24": "127D36RyB36rnUiWXbjZY7t4ZopcsJ7SHAgbWa3Cz3qAdTvTwGJV8jjw5pqjF41aGQ5B3qwrSakNn7ZoWFByhRyQ",
  "key25": "613F65vLhNCXKVFRa9QBe8a9YRbdszsG659G7qUWFcr48XYM4pimEDEmfsWfWFGeUGt2kyVLnRmgFiawcqbbvEdR",
  "key26": "5xtkbvyT6E1qiFShkJVzgBsR2KTC19MezL7f3zNDU1rwkUeRUjc4fks6xPygzggBS24zLdEBUDk2uaNa9kiAUbz5",
  "key27": "3wKSo5rXVcbaEKQBRjjVLk7rJuEgVrvG7pgZgmms77167w61VXdG7g7GvxjPR5hw3v32Mc22A9MydKsys2td9k26",
  "key28": "4kLbG5wqiDBTocEvcx4PumzqJJzE4LWdNYE7xZiCXf21zobb8kqiap5YntbYoeRxHG1CWjq9Bk5Tv75TRz99cZHs",
  "key29": "2Jk2hCPVWwQL9JUp6UNZGMen6AEkiyp6PLseGUqoBdTm2cjv7PhknHZQZA1Pa2D4rrS9YYwGfQAr6GB5yeG1iHnu",
  "key30": "57SaWaFuRMc1kuuyuzk6DL5a47gD7gc49DzyqFTkXAnyVKeAKgwbF13mNL9mVKFKDR6YkTPiTgc4p9KjK9ZSKiX3",
  "key31": "57BgMuvQF3e1iotB1edk5AUKUwVpLYZDmABnF1R4BCYfpgjjMwUdMFnm8dWZ53SDv5YYsnq2BxLfF5NCVxJFHYJk",
  "key32": "2aSMjwKooMzgtYiRx2epWXvRa829xMyzRsRhqJcwymggfAPUPa5kiC9cDjL6i7fNa6WnUGqJnSWss1fykrGri68h",
  "key33": "3oESwJEzUosf7gnfnq5pQMfyqswaxWjwvDnwKoyh7877V1v34LNr7Xre8dqqeC6nKWf5PePVwNMLYiThzVGBaUhy",
  "key34": "2DfbrfjjmbjZugjQEgT5HuPxv1kC3romUiMwJ3JKtPJwiAjCWPR2EAcvHhJkUF6b7pCW1QRFsJ1PPz6jhRYCLm7z",
  "key35": "3t2so3XGGM3H7cVJrrdzZvP159Pz84xgfohheo6goStmprQNkL4HbxkrhZEb9ZjHiDv6N7S15L4AKfDKVXs5v1BE",
  "key36": "4KfZnNiv9c4Xy4Kd81dGSThazbREE1WUNgDvufQEMsPp133Z87DLQ3PUzSxG4AvtiZokVDC1iwpTCbzPHd4bfUA7"
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
