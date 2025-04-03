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
    "5Kp5WJ5A67PY2eXy497N89nFQwpuhNJqMN2Bh4qf7ovNe59wNpmdKMb7A15rJtjASKz7WFDU4npeuTHC4r8ioggL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4446QHE8vhjJ7v9jdXHA1Fde6NgwSNSahs3Hczaozkb6nQKkA3HvcE9X3Tps8pPzJw2rPi2MnDKZU8pV7Cy8Pgtm",
  "key1": "21DJLTfqTW2dBGb8ok9SMscemo1d7QBjmNh4sXmWJ4DrFM3dr3DAbo1BPfh7w71zNbhXi5AuLhwzBYp4VCT7KxFM",
  "key2": "67oz5R1rz73qrbzFP1M6eoFoJ5K2JZDrie5qBsvb3Jy4qJcPcKE4pLGY6ZusrpPMgjAGDMLGvCxQMCjFVWtSTQva",
  "key3": "4rNovUD1RbaVYYpUHFpWY4DX8e4rWzxEAwDuvCUziUSfTwoa6pceS2SrY2j6RT9r2rk4ei1huhNbwUoLTihjULoQ",
  "key4": "4iRhtHk8QetmRxAXQKqQxV5obsZWLjEYwAx4UdgL7nrCSZNZcLKTQtCJBsCsRPXy9vaNWgd3KXzanJ22NiRxwDMg",
  "key5": "gWSpyh8tte2W9XGvLS9eaKPoo6XpP9qQcoFCdXLKoo1Rf1cT1dwjpGr87JxCcPQmsK6Rw7h9QsNAt45Q7icLzrP",
  "key6": "3SfStzUDDDpfRwYsTc2SAeVpNxyFtmu3c6xrB6SyQtnX9jUBzozkt96Zm1bHGpvrsuZniF2xNNa9LxWQLkPr7DKP",
  "key7": "kWmMSEhBNUPPhnPBHdipSjrDvUqYPo4pYN5MbCYyRUko4zbsUGED3iS5vqSYyzFeBLbdvDztTX1QXhB9i7qJLdZ",
  "key8": "bA4t7LsFrUNAAnLiSkjvNJV3Vc9oZtChFivqhtoY7PeN5YXVjPeYSsu2TNzLBM7tEebYdDnP5ie7czzLvyviCp2",
  "key9": "3yn2f4p2e8XdigCE6rw3qQLxnJsapUrpkQsma3hKHaLbYGBcYWXEqu8J5vke9VXP1xQtzn9u2YBaQVh95H3EhcqT",
  "key10": "5CstJZbeUhbSxowbbG5eicoCnztvJb354btjWpn9PPKDq5ytAG6BTHV7xEcbhZ1NrgZCAJcGqiKa94wcakpDkuSv",
  "key11": "3TeqkJTWnAEQgQccPnVsoezaTfj6nnw3mx8KvAZd9T9QRhh9gJf3a9HeB6mQr9BMJR1pqqbqh79miZ9ogfsF4fTh",
  "key12": "33ZBBX6e6NpAXfbVP7hnmWmU6LocTJ8n2Wm7DsCfYRnWJJv2MxRGBbfUL8tZVs9rvqVanZY5oZpyvqV46VordSZP",
  "key13": "39pQH4MreuHX36D7ZqKHnmipXpSCEWAa4dCeuRiuvE8qZFd7yzNwAuAtjdMRUEFtxb35eShaqzyTM5vQBQWrTYdT",
  "key14": "4yJrooMkkXgbrT4yDq8bLzZgs23WwK1CcVsMeSiKc99KZLP51R5Ao2jMM4FKBVvWD2tNKxro8NFkhupp2KHJs486",
  "key15": "ouBnB9AiKe2j7rSwFY7zuJxi5M1YBwoEmN6GWCdWQibkGnnZUDcNMf4XYR7EjHyF5Gqf7BDUAY8CxycVJQK4Fu8",
  "key16": "yQkomQhmeXXGE6Qn5DTLQ8CpUBPibakfrdQue1szNJ8oP6o7vn1VMtuSuziaS2Mqb3kqD2wavoqWVUt4b8DzvXE",
  "key17": "uCQTCre32fCGPPn6iz8PcFXBtrpTTudFJE8h3qbVjnsBTF3aPC4y1f5QH6zrAD98yWypfqwNeiUpFfMnDwVLEgX",
  "key18": "63cTBbBd8P6PMjxKxauLVwpYsbztCuimJT3GXK7MBSRBxSdFzoZDgbQLaoSynNqbUfT1DpYwjiiuZAJwVEHCKPiu",
  "key19": "4LX9tGTVhXS2PuAjz6ABAJR7NKwk6ujj5VQjFV1Gf5fTGr5sFiPRzqzLZbAyw5SRGeYqk97X6MDbbkYu9YNQTipb",
  "key20": "2HaEHoJjhQVxmbwsFDa9xcke42CWkWUm536DR1NnUC3sJUtVj2rK8ggPwAhWAXmZnaS1LVzzmdSjb8UFb3Do1yuE",
  "key21": "5h8vrcRMaDyJYtfuYSABoUCW2bZwV3TMoxz3VWdb2yoSeDA3ZRnXmw58hcojoPe6mSxbqCXW8cjKsfmwDa9LEtfk",
  "key22": "rKUDbKoLmE8MYoSpMW94Hm2KouhDH2bEX8o9byZBUwNY89Qo7qsW3UvjCeQSfeEgNTRJLZ5sWSwGDbaMA4M9vBj",
  "key23": "45mW5jbnVhHKvRcjX3mP6f2XgjhN6CCNVdLKSCrYVntB7oZkzJeCGUX6H2Aw1jtLaoLutyEh61wHEfGPabYNVKXD",
  "key24": "53fmLdtRgNrXXsVLdRjmqPZeVAWdY3ZyFBuicvTrhpL3H2N2y3a1nho4pbtHzs1Qb2CkKXdG3gAVr3GYnuq1M9hw",
  "key25": "mBtV83rsuzNmXgZVStuaChx7Xth56XAMxMc5vSKQM4LhxdVU2h3VvRLCMeJM98srH5tivCqf3NYDewGnXytwsqY",
  "key26": "KFR6FAK2ErXmsJkzL23h9q8JEgMSCzTvhr3FN1dDxGFkGhjH72GkkhGs7YL7eqixEuLQ6sPKnJc6VmLuMmLnU8K",
  "key27": "2omqpQ866QctfSQMiDMg6GzpMkhWxUC3u4uGRPFrL3mdC7dwqTNQqSKJc2C6VGGwRNByghK7CmC14YSoTNhAVXnJ",
  "key28": "4HobCkotCz1KZVsAEkbvrYQwwziYvFwP4ZqD2jV1uqrG5qBfbnyU2v14aMcBboC2UspJAqHjEEHqc9rbGTa7gTmT",
  "key29": "617D6jpLDDTdCjF5y45Mq4jhSnrCcyXobT6T6oob3spSbKSTmxcyzkZkt7sEWNSW4bWjQHYBXDj6JdQnLEF9L81a",
  "key30": "534u8JjfbKhdyn1spbuZkWXDRhH9qDqccUEq4jVxc2GDHQkEjC1wZESPhXnswV6JzxNyULXY8cQgLdYXGvzMndqr"
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
