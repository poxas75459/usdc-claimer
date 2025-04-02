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
    "K2w8wjP5WzMqGerjBAdmmaykrH9aTMT58MqecrwCgsqxR9Zo3LtFdaXViYL7cTQup5Tq1bo9WtDTGZkUd9V1XkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rX8cvLEzdHNEJLx5Yq2psf6JU9MABDQDd41gT6U9Yvn9p4HV8C7TYFGijFvi7xpEEHq1GJTP8d1vwGxSf385edd",
  "key1": "5hESBA1EJHoq1jfvv4yzcTiVaroJJRknV4m2NMHqXATwWob4ECnrN9g9UPCQkW97Qta2kCwDkM7BnPV3ezKN3hzU",
  "key2": "4ZfxX6gLgGPjQpECympKE5EypZEAUdP2n99LLhQ5SNUj52ebNTRJaHwSc2Cs4hRXhMcFExa4Q3dGkUNSuUQmKCfS",
  "key3": "VjNbkvxpkq11Cf3tRyBFWpWjvazkB4S5mRx3v7gcCetx9RqhUDL9JFJ5S4LqPs8z8hmJ17Z5f7Nzym8AMxnj9xd",
  "key4": "2DTzJ8kVpMudqARTpYgAdbfLnyPRHAPzfEgbuWccEJKhoLRvVnj632ZecU4XzcVkrPptx4m4y5DBcjVVZrTFVpe4",
  "key5": "3rwSHzr4JibMu2khUBTRHUmknXBgfY4f7hijXvCUp7eqApBSy1BnLL7RWdHZvyFAs4KAQKoycctjgjCZMq1dcEiA",
  "key6": "vQd97wEXEE3fqfAxTYaKMCXm4vMuQMBDnt23WTb6QiV6ugs7wgXSqvKd2bt6s8E3cosPXMVf8sF9pYBcVhTk6Ye",
  "key7": "4vptm7YhEJ36CLb1VC1ZRYvKbwd23VzEfrECLNVY9id5onFNCqiFKiE3A5zsLp2xfdWeLbWEkxXhwUC1ddNWn942",
  "key8": "3kWB9BXW8AnYAEsuKzA4jx23b6uRsNPAheBCtHCXiC7jSor68JfEJ9LfaqxwuoCanjZ4fh1UCPCxtoEcfTqbCXj8",
  "key9": "4n6h5vSur9ULj4wy95URQJhn9MqcHWgiucunvRygQkCvKgDpcoKHQLhFMtdd8JoKbDhDR5sww5gwsriesfwudBDU",
  "key10": "65jUjta5BvWdF1dioVpohnzi9d7jqsTYQLjPzarBMZs41JvPuabfeFgUohR36x9QEUcN4njH7AQ3AupLy468X5Yn",
  "key11": "3DAtHh6hbwSspTxHgcBG7FH99xiCSkC7ArRmvXyo8VHpr3SM5cMgyhwdRpakgVZ6cA2e6jNBELf3U2E8D4kBGdBw",
  "key12": "5CBUiBK5f7X1wgJcN9UPDnPxwWh9J8h84FKwm8cdmy7qQx7qRJNwmq25FbYEifUoiQxQmAfTNTphwBP6EXswanas",
  "key13": "4ZhrvpQSU9JWzpq9YFszSXpY3FUiwBX8FrTcrC5sHYbez95F9nqUHZRY1fDeLfvK6PuVCsBb9CwLMpFVLhbibows",
  "key14": "5T7Jt1SdJfALYVPixHy5DAPwr8mZqJUfJWoV9ZYVhTvJWS4qoYtma4WTJXCJDm8i4KyJSyPMvpaa9qfqMxEFFdYA",
  "key15": "jSeK2L4ZNxBHibZa2Mi9kRfgQKxr5W2qmtc7x3uNhjeNwwmoKo3URTiwDbRhmHwHAxdhzQt2XVQS99UBoCsHTrK",
  "key16": "5EofdD8mb9FsBi3MFh3wWPpWWEM9faihWXGrXyeFBSjpGfnnZLyaaMyhFPdWfWJFSn5WowyysZPBPrTMj83uFd9a",
  "key17": "4fNFzxooHTXnyUReWFUwV7E9KjZdhjU7LE3HoSvxBzVVr3eb2tv8b6aT4PmWq5ijUEEUrPhHscnguqZSuEaYwBdd",
  "key18": "3TngkH8mBgTnzqJn8gYoSoneEjcgMMxoW7uUTPNM98Nd8VPEgJ7vqh7bpq8rQYiqPkajG57Ejm8cV3oYouMjo3tv",
  "key19": "5owVVtpEbDYm5vvkkoF3ukB53oHwnSSJXfnsGXzc623WdnxrhNrPtFVTNxyx1R5GBfmYgcHr686QhxmP7bXkscBL",
  "key20": "2F94kaMkU3meDjJwxJjRtJGkVL73PDsH3Gp7PCnRecuvFactQ35pWR2kY8Fi8aPNnxJVd7KGjHaqBAsHXTdFZ1aG",
  "key21": "5SNrJ5ktyrPscpbeeqiygcxHRJhMVnVTifBpkB4w88NxhXsncK6ThCDxLtBoWsoS6iadGpDGCzmLd9pkc3AmGJKv",
  "key22": "5UeWHJzQLZAPurWnqcuVVVE4XJWEoDo9gUsXrTauhED3HVPqLtvjugqGY1A4YVYpqjZNxZuo6mTHb3Z46M5qhJaS",
  "key23": "2FMxWdy9XbbtQ9PZ8xmDRXLVBMGPJzBv8ss8cLSKiNDtBxd6HGRLDjtrodS6dDFwiAJGsw98Jp5xXjGfayj8X8wH",
  "key24": "57LrcKteawD1GqWmBz4L2vWtysFD3Du6uiV3sHbmLuM8sDL2G9iGs8bhEGFjC3m8RcStZeYiBqscqLgWNjcXjwEy",
  "key25": "5Yuyhdon3rmmfDsJ8nU6UbUJUGWe8P5AVZMETBGS9qPqa2bEeEHZpr2JvKwiTExfZaySY2hqikyaZjJnf7dpfd46",
  "key26": "4XVr4WTPo8oR1WdhNwWYgeBBs3GFw8L2TP57Lgm4MkTQ147u4xmnDUHGMbmdw3bnLFooPMSNPNbUmiWVUnrWZKNj",
  "key27": "3ZfRMgwD4YNCKn6awDDNysquGEjCqxVMQvpsQZCu9XaRw8ngiYW3p2F2AbUp5i1pFSebcQDh1Bq1QN7b8t2FPLJ7",
  "key28": "jCnFdH9i4ewMjbVHGadaEqMy4mGUkGdSWeX3jJwBFyVq93JgqNW2Pac8onXzw3maVNNJeGYWwbVNZzYCQmNdL6d",
  "key29": "4BUTsbqsnCXrWuSwwdjNsqijrAYzR9NkyAMBQt8KBJRnUNkPK5Hq7FtJ7rwPj46UEH8zasSeueDYc2XPgWfdP2pC",
  "key30": "4bb5pSjXDaeJJUpe652AWsF55NambAFgX5NEtm7TdyMw87A4wrnBo9c2LskGUoi8WJwZ9fPr1rbw9wTEHmuZTamo",
  "key31": "5caVN42GtcnTWNyFEkZQypiMXgnnhtLYkRvBxRMM7yGbZ6K6ZsJeE8CcwaUNrCa6J1a1ir548BUGfMXmfXBNY9pq",
  "key32": "4FKYUWtwQRsc8gDEQncEgharshYHhycSJqhKmNe8kcu7uPgMJVft8y1yv9KBmrU3WY7W4GgaU8jpAzCsdgq8jEdc"
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
