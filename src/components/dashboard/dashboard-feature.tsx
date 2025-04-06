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
    "NYQfBGZoz4zQBC4B6N76bevv2ttCsNNv4HpasAiqQRqLk8dBiJZKpfsG9PB7iHb4qAvQqnrsVUnFfabG27qpUSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28d3okoMfjL9aUnyCMRnRSGsk7kRVi5yccpHzUUyL3ZDcdX3dLLCoTb5qzkAfFKJVmCrXm7JWt758ay3o7SXsiSC",
  "key1": "3TYCzP2ZCTpqQfsqNn9grJ3R5hzLroegN37JY8QQ9PY7LMp7aqaoVUtjBoUWn5MrVt5ejJ7aPFWSQYjH6XRUF31i",
  "key2": "3vnVVmHBX2ceFbQmRvgKSYHRTVpApCPY3dyPn6BXqMaft1ydnngNqav3yYFWAvREYFw6a2h4P6Lwr1Aja5NF94BJ",
  "key3": "5mpsbiwQ6jh25mwTzCJnz34Temwo2RFdqKdVoGoZSg117NmN9RqNxM8tU8cBFXRLsLN7bojUvuuVdPCwzcJQQCnY",
  "key4": "4GEGeJwboAR7Cy8oQFifcQQsuwshiRaHVKbjiRQvutwdHcyiTBkP5fbQwwzKF9DuLLpNV4NRa3Qm8gqvnqZFZodx",
  "key5": "3HvZBYMe71anPWMfAEaKKJkzuan2HB2viCrdwUgdE3ZSYu7mQfvoGY13VfGkDw5M36Hwqyq3ZxkryWFjLzpsdM6W",
  "key6": "5uXbjZyHb4JuN3JDjLWPQDQsCrFLSzjNNMuRvBLXgtEfPNwEkqsaQcQ5i9385jXDFZ5Fg3uGpTmTguauxJjKUNoj",
  "key7": "M3Q87H7JbZh8z12j5qi3af6nvac91qxVKG4fgkw67QZcCwEDHGJEsbQt8gktw8oUn93GNV5pveCgLFQAUk57Pd5",
  "key8": "5QS37FFvuc7K2gibw1EeFHCkAwXUteJ9vFV1tf3WoBSuhDmAUU5yLk9hrRQaQSLbutfDs5kFjUm3ARYWvUNcSxoZ",
  "key9": "2ysr4vR7HKjAaFLTFAmsh3hak3XsLnJTmGjuhNL4jZgvcEzB4jTTBMCxJ4kXbRrqEn4gcjRJZSjKvNELGxfVTRku",
  "key10": "4vNEBQcKT2fB2SyAP4DGbRfrYXHVQTb5no5rDDZMeay75FLw8SokVR59cwpQAioi1ZEX7s6xggJDTi8NPrv3qjwT",
  "key11": "4YEZvu7ZTsnwquqa9An5H6Dd9hV7tCJ6w7oct1psfvQ8CUsK9zf9vd83ZQaL5zTL3aYfPkBy5hV4qvBXBzsvngRp",
  "key12": "2fpWgtiiQTC89w4RSbaXiUSsdSTLMMZHA5ijFZTpCnqp5xccddmjXRMMNPnAZ3jsDqLUh8Y4xsAkM8YvxYMdyi3h",
  "key13": "H6UTo3sX1d5sz1wRk6kWQAXgjmLPpB4RjeyDhkAH5BXv5p28oGuFWuPES79nEmEjhV71MsCcesb2PPjhiJhKBee",
  "key14": "5KZj6exMbTvvEj5y1bWDnSTP9vXuNiLXPSXhB7Ftop8UmCJeW56zA4oMR7NyaaPDa1hMfiMq75A1q19cJN711B2H",
  "key15": "2xRdgdWw84i6AnrPGqohD2c7ccoYuf47kENSiMQZ12k3KVusj5WUzQY5P5h13PgjFkLaMcTV5r5cTmGupYssS9b3",
  "key16": "129B8GwkhFNQhCarrgj78ULak6pFFCF4ZpHFg7frFxBp3AdLS1Tdp6LMVfcDBBXMRpQ95dVYMrBucpDo7tFSgpL6",
  "key17": "476bfASGXbtXF6bcvqTsZmgSd7VXrNXuX7kjAwv9ADM3aiaTd6J3NGcypZjZAfjAv7xnjG6Mei8MKWjJ3uuetqYS",
  "key18": "52jQ5z4rTU74cFTQzgqdxzc5LHXxG7xsFAcvyCVkFF3976aJxh4nMcfTSdghL5qQTcjrmYvxVu8Vn9ShwGYL1pXY",
  "key19": "64CcHuwyXvTn3if4Htd72a9iXnRFcLQRQU5PwDWc4sCRnLScQc8zVd74Kt4kd6Z3zzZ5dbDZsjMs6RLDLDeGTDJn",
  "key20": "3kJTijBFsQjC2nWApbgs22hYJLgS8K83FddBmy7C3VQUpHeUiGY2KARWXyp75ETGvbgZW6hijcnX8dhQYDCe9qA5",
  "key21": "3jHnzArqwxj2SmrcvjNpFQhqhmtLVn23mfLwyqd4QF8zdfnCgaLMV5h4GcQ9Cc5Zyr5pweaNtgoAxa7sPmjBZz4B",
  "key22": "4opteNX9pVqyCuxmCwJHkSjtwfitc5DePBdnonyMgSSyfoRUZ7WTFQU7LF6zGsrMxm8LkzKZ5ZUSJKfpHv7Y1VVm",
  "key23": "4W2gHxVvRdzXUbx88EJoKPJAUxQe1EwttDPvDfxcKw67H6adbvSL5cmyr5eiANbnHsxvnMYRr5LZT79ZMFyUJV1N",
  "key24": "3Ki9WXN8bS1ad2izvFFoy916grW5BjxPfm18EqiNZG9KP1mjDGdboBCXZ1juzZaxvR5VNC9eVdBndPR8YjMV6qrb",
  "key25": "2DvEddy8Fo3N6kHzm4GLxu8Lsb4vpXxjpLSnjzjJfvrmthqTo4FYFGF8sQ8ebw2jxEXTtnmyppMnnhLoh8JHJczX",
  "key26": "42h9frou3qih5SDbtZWLAwd2UnNWWdNJbuXNKNb2APD8xnGXYWpV6bYi7fFbK6QA8gqKYzkUnSn6KGZV7BdW8GTm",
  "key27": "5o666h1crhPGupF42wBGiAeMzuJD1wp9q97fpBfZyw53bTJaS16s9ETdcnkHMnsYw8xv3qFTbatQfuN4zF7SfJrJ",
  "key28": "5ZiBpHmoWqiPXNQ9f3HYQ5CjfhGGeQKt41W1uQG1uzmcst7USqMrcV6YjwD3m1M7iFgwvLpf7jjwAiHqtEUfMRtZ",
  "key29": "56My8aG1knF5xUqXogtWBwcXRKLVez1iF4SmBqzCnD3tt6SM7NRHHES2kpmW1qF2Zv3mTuuxVDDQKL8ZmVaDCRV2",
  "key30": "34fHz8opnZQsassAaraU5j6NKCsarCPNa3bsEPyWjVhvX772yk1HKTjXR8qWMmy9MPQjeQi9VLSSjHPYbzsjuRrj",
  "key31": "3JZv5r2EXubYjNpQAyTFhQR7jhVjxLB6Yo6JDjqUWQhpKARSW1N7UQFEmv81rbh39VnATCgsjm4bUhLBwK1mBCTt",
  "key32": "2s1YpFJDreVpgigBLVTB6DVTXbkurJAaN2KK9zxnPR4KxE6g45TXmyNonaH8FTci2jtvVUnLvDoMZy5gfsnXv8Ct",
  "key33": "5AuYadEgDtRfPyB1YqNujxq9Hyn3QbZSTqvXS11XBa1pY1p6U53Hz8cmc6nN7JE7GY5qhxvS2Eb2P7CrktkyWcvE",
  "key34": "EZDA3bsvG4EKk8fA9pERHWCmQkwFcBFq6HoS9RmAJLwpr5TMfLmmsv34S4JrRza7ra4UJLXNMbsdee6q4hwBjwM",
  "key35": "EZ1i8ztNidvTjRZkapuC2mpvkagRa7m3bZ5exwnSStSMUanaxUm3ZgkXtusg5evoUoFRZzmJeNZ8oisP2XLyYKZ",
  "key36": "5KJJSQWiFLFg66GMeX2Kj4mqsKkJLxCvJvjRQ6Lo1aKXmji7yoFDvUxX1pg5VPyrS8G8wzBPzpGD7Y3JEwJMzw4J"
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
