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
    "2q4NDsbCKH1ye119bMN65NobBZqpjo6vtSB3UwgUsJZ34VTyDwJXKnS7AUjeUhHkcL9LCHv8CnydEQYDHskPhmhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CqUAWbqYQaHpPmsaXeMmjJbxeXx5qRg5TLvWZFKLNXN4viyQNTwZZxhaVQvZNM8Wj5X1jgp5xyuWUBqCyvk9rEQ",
  "key1": "mY2KHsfFqtS8aqXVGtsaczJcottpASgbnK3nKkJQv7FGrFbVyu7ugWN5HTcgSfAP3MBU97zNeo9XTt865uduc8V",
  "key2": "3oV857rCMEhpotaHDpy6Gge8RtLMFdzvEvi1d5S1Yk9RnGUkTM67k9xnpTD1McwkWNbFvx4WEHc2uGaq7uSJaYJV",
  "key3": "NR4nvQpavdnK5hum9tude7FFNmwZTwJTMVcLtsPaVbBKtMhHyTXA18SGDk1hmfC9wHRMrseAhPbjrBpSnrmhGuf",
  "key4": "5h3V6RWcAWUSBPNgGg83MpZEPFFZ6s2x4PjWsHPU2bwpRUvHpzUvcXGaCSPKPeDNzCjKxLV3XGA3Y2UEqHgGxam",
  "key5": "Pr84fLdj5eNkeZzpfj48CRBDxijPyZUUWLfU6Zn3TB2uyee4ghgpAp5mKbsBLX2qYH6Y9w6o9D3ETtqEmYKHr7G",
  "key6": "2V6uz1S99E7ri5Ysa7hrJuuyN2AoXJqd7Fa1SM3ybyTjKPkLAQWxxPRMpAkwF7a9a7o9aKnjWtnDTtzPpnPgnyBe",
  "key7": "59qgwHf1dD4i6iGbAhyotfAtkxdj8BcqGvHraZ2b7NUt6B7STCxqKAw4GXTHLbZJA8MdBygSdqNiV1ySa87R43Va",
  "key8": "2gUZBav68E2UJJDbJJYQMRKV2A9B6oZgc4DnrHNtsvpN2bTAJsQiRMk2kMmLLmR89SrPbrfjppnx8TwwELARpb4q",
  "key9": "5JLmnz4xRgzDu9dA35sxnvskdy9B1d32nE2SmW1rWNXqieeGMj7W3RDmfFKXd6xYBSKYYSGFNw1XkFfFEp2ZZZvB",
  "key10": "3VDGvQFVeykqaJmNtxkCcogtu2wnw57iDcrMybfpDQZS8Nbjyt4j82Q22ECCthdH89vEJi5yipJJ9paGDpQhWV81",
  "key11": "2e88GXvcX5XQkGUUyA8NQvS5EB3GGcHYZM48bHL1Z7XGLwW89wRU2zFVPwCi9kS8NFusgf1kbBhUXeBmGdxo9W48",
  "key12": "3xc2qxEmABcDzrVDEy5fGiqUSBZ3SPVLi3SceB1yGNDbzvWUDrcGo2QXeFofYr6NXm3STSNQR2brtYapH51sfFW7",
  "key13": "4NwqFweY1oex5sEiwi2GCMozNVzyTZZUw2sy8jhpshtNAo5jqKJjX4uh3CQpxKin8veejt4dXKc4Waau1StqudML",
  "key14": "z36QjgrpbrC6tjGvASiB4RtctzpXQUEbTm4PCryi6VBknkgiZxpacfTzZBLnFXMMSrJ3fWc7mkPYMFwkTb8T25h",
  "key15": "26dTgo8ExNs3MRz6DRzcgE2FmGY9jxGAzoUa8pQkchYFrS1UzZHKheQUg3aUVhbZ3KGvqpTPJEnsX5vPQsRkVe4p",
  "key16": "2GfofmyB1SdTiU4p597ZBYJhwuE8vozecDedfMUePCsmGy9yVLbcC1TbgYyB3Tkmq7Eo1FMW31D1mc4t7GX89dgr",
  "key17": "4joRdgW6FNcmwM2ucLWMAiK4vfPYvTAKGotEgtSGEzaEbFQzNzVzwAGgnfh43t6kgmr7VoCw3YBfLeJCGpR8egcM",
  "key18": "VBzcXEAikbEczgohq7GDi8dVxV7XdhZHQ915HyN1fkHQ451YtaD7APv85F9DpNiyLWmyQD3HEsYX2Dp74FzkaV3",
  "key19": "5TSyt1gP7u6fVjq3oCmY3FyMkycr5bmzKBd53ZwwaWqkjPbTV2bQhLSoYdrmhPhHm2RuK1xKd2bXxghstU41BVNs",
  "key20": "5hJNR62XunmafN7sLWA2pstGGntUgRtq41aBWaBbYXueCAcT9wsh9o4pVrbjDye9VB58WMcvXaGBiPpSiXs2pBWu",
  "key21": "62vC1mEeWSnvvpu5VJ1svQmwPEdpAr9uWmEWbFz8pSViJNN382D56M3q1iSFR7fT7FHv4qWKJ299Asu87A3YTmZS",
  "key22": "FMK9sjL3VF6hWgip8dSdUnQcwvmSW5ypWX5QVZz3QhJK8zJHZmHqbDgrevfsCkbmd4N59auJGYtv8tWEAxs8SSh",
  "key23": "sX7wEm2BdCWo5uFSKrnVRXwMv8YHAsR2LvzgQxoeujdqjo185qs38eaN1EmPVExUUw9PACMrcuuTjaJrVNn5pgf",
  "key24": "5cdkTUG3RjxpdbCHtN5oAUBJbu1y7JSZPsBQgrnoLSiqcmHKzuRgcMrcjNVT1RNAjX2KuwBRb5yQwkjZWWz7zP1V",
  "key25": "5PMnk5EcuRwvsTPYPU1DMfv6Xw879r33Bwo4o5FKvtsCpUsHLMVhvZAAxbNp12x7QSPpGnoneq9tWcr6EuA8xrrT",
  "key26": "MPGjpFvE3gwVdgNjTkkCv2KrQaeRfSVP8k7qrcGn5gWZLtioRTs4Ny3ev5oQSsh3CUi9avRewgLmnApgD3ZJXCG",
  "key27": "3QBAnVwuvUtmPxqUFU7iy6Nv1VV8u29QJJm7EPNfDv163PiWj63eKXcdxub3JjH85wFbqQARiYyjX4Uf3oi3CWZS",
  "key28": "YcrrnQ27rr5YDP2hccdUccNUPvZqZUQByKB8LGYucpYHPUW2KitPgfiE4G3TowREeEtGZTgiDAfNjPw32SF8UJJ",
  "key29": "5oPNYHEo7Hnmyg9DWA1mrsHgCmf5c1Xv3MM55R8HR5JFbrLYDk82v96epmCXjVr3gc9dqpJK5ZNr2tUcfSXGJpot",
  "key30": "3EXQY8349mtKjfNXJHiXDyt7pb2r5gqsUPMGbxZAs8EkJ7WQtYfXvqnx8V62WjNjMxFQEUH15Qb7nC5zmWYe9aiU",
  "key31": "4cq6mi2J4192aTpMQWSaXULn9vZW5LUkDZsdAaBsD3ASfGiGMVDGT9uLm2rmx8uuz8tpXUcxbuRYDZTHmYa8aKjw",
  "key32": "3DHExWq9VdLodZrR1rb6hahAdJJTDk238iDaV8rmDwhE8ZJwoKks8Zr4FqKg4nWpPytrtFBoeEoG5pzPvGobuCrY"
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
