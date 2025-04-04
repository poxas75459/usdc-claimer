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
    "51k1RK6mLyvQ5tw3n3kquZmYZsN7Rb76VJDCuW55xA6XgT9uYRZ5ictoxBhnCJKtACLgmQJAP6oeueubUm3dXF1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38HaZWo8AxxngnogzK1Ei4KQy6Xi4FGdNM1ZF8fjeRjjJHoFgoYRaCki2HbWEVHs8s1FJLoc82D7oPASgajBfD5V",
  "key1": "67FevUEJWX4AtDBHPzn3pJizDZaAHQs2Y9TZhBAng3x35Kj7nUQ4RGhUSRThcavMbwvyEjtzdsvvmyMp2sbVj9LT",
  "key2": "2dXJMQyHGR38hZgBCjoJZZdPDQyZ3cta9XvjT98wQAPQ46Rk5BiYbjF5Rjo55BTocm2c9mbdQdudiRqhX5Zw7Lcs",
  "key3": "2FR92uPgaiH8qCVn9gHUywvqKvvHrxuCd9ydbfqsPggTMTRgdssk63YgmqSasxoS4nPdRkWbVcwLjT1wzQdg7xcp",
  "key4": "2vCNadY37h3hhDGa9rYsH6LhjVjj3open2YRdqbLM3Md8YThTtwCpV4C4JSiy3HCTePi1nrefZ5jFLs1GZd3aGnv",
  "key5": "3QfUZTgrqvEJkUEtYdgKJBkhVXUN94NgqDWfebc9voquoYy9F3jjeaLfbRtPVx2yWpsaR2KciUSdjNpwwy8eB4JW",
  "key6": "4WUJrTjtaAY4Lmj6hrL1WZsEGXsN9CNgPYFmuKD7vWghbufma3HqmYFgNfquu1iNXAqTKF13zjo25B25iRUknig7",
  "key7": "3ak19VzjKfyPqewAnzH95K874D5fjNaatvu6yiKe6oNc2npyLRXpdTwHqLAMsavQGbkeSKHR6qEGqMLKfyrDVQtZ",
  "key8": "5JisnoGjNM1y3TRDATNwNoxnM7NDCm9TzxFhngBRxVv9BKvX5xfpMmgxf6xmWkmHPyyHVSJhv9v6M19JU45ksAUA",
  "key9": "HCRFd7WDXEuRixmd17JGwfaa76sC74mMLuTDHC16hpd5KgHTQP26ZGRRJnNtxKTMxWHWypFTQvC5Y25SZPcM5hb",
  "key10": "2rLKF2swu6DnHoKTAiZYmgQnnifi8tXVHZrUF4ZB2eT1X8RkmdeMbFDgz5t6xGayNJUm15dXpPNkMDW9p2Dgmoii",
  "key11": "4BzaTpS6MkjAD1Pcap1uskPGkj8yGcKzRtFjkaNdkY7xMUTxYqJM7dbRssczpszaLiXfeZUW8Skxgn27NQYEroMN",
  "key12": "5LkX7dgEsVkR3LDuzhzLH1TxmmDEddPLvSBrqkeo8riqbnvdt7AknwbBcMn2RRXMJL2nLQGDGN9CfJ2Ca3fPY98H",
  "key13": "5oRuM2YNhsAare6PZRDz83jDphLARco94QLs9oeUM2YbdsCJnH68BwFf9WScQGzwqscStnwqGpXoDTCjLqkNPBxX",
  "key14": "4wGSLgbELbXdqUU1Rqi1Pq3sZEA3g8tcGbx79jwg99Jg4vkdeieqDbfTcBpp6JLLSxwfPyq8obT9x3gXwjTSP8ow",
  "key15": "5hzFhCyUAcSuCw66uVxepimcyNsW5fUaRH2J9VjHgFTTuQk5yG92g5ktnQ9YmL9CA58WmLvB9iZuua9TZJySiVbr",
  "key16": "56eqC4u19HK18E6zDiLJds82cWUaj8PoxhchcPzkGJS6XZT6a4Tos4zy3HDLQbSWVdfCLpvKFxasW4U3QvRdWmih",
  "key17": "22CBuwG1AW3KeDgFaK8dq7q3x2iTSouXZUEHbCHMeXGBcLpgcG3JG7ddFNEEMRZNt7kCLiYr8pY9j9jnVWYJ3dtn",
  "key18": "RhKMLoYaM2QeCMDByMFCaH2YQzyqRRxB1i88PrZkQnt3spYKdr3zFyuMgNTm6Ad3rE5UThiwRj1kKbsD5DqNaY2",
  "key19": "2PynDTiQ9Gd2Bz93mzvzw4oKja536tFmJ9hsuB9gyiw9Ly5V2g1vFwXyQbGKGrmQpy5EJ4KR36P9V1MwZJFAM2XU",
  "key20": "3tnzShhNzrxgGTu6PU4NBPSnG7AqbidbVjFduS6bqzExdtr5ft43gd431JUUA4ZREcVLd5upEdRGnhiTCd28rnRv",
  "key21": "VgVFs5QbeXZ58xVrncH6Q3NL9f87V4Ev8Jtngn1vikmK7uaUhCog9TywkJbCYn9Jg3B3GhB8FbX6porzgo8M8Fe",
  "key22": "88Rz3s5rAofpungY3zKsN7n3nrvj2cAmDaaYp3hrhN8sPL2YGBhcVxXfrGdzWBwWrkhuMsNfiuA5NJsouQyLDSb",
  "key23": "5S71qvadKdBA7oPH4TzaHkw5f58X4UXsn4yTEtbmcss7oKf4cHz6ho5BpAYRsneZUeZroj3ywwMXjBnqjfTEQR19",
  "key24": "2vjyBzeZz16ozHN5Tkx4U9LW867zwmuXjAic47ufzZFPSv9p8a3BCSKKaKQacNQPjTY8DBHMjL3okc5hAGGo9yha",
  "key25": "Jem38AtDGQQpWvEurwLM4Kr1bGuU7t7gua28nivtYiqwxTwXoDAc4D19Bgfnje2pwUXBXBW3T7U964aGxVGgcuY",
  "key26": "51CM66XU9RZgdiSqQ3C5totcK5gYxKJhWxydAMNtyhTfuDLf4b9AVdd4RpWJ6terXYnoWXew2ZMTius6J1Zea4fn",
  "key27": "3ycbLT2yXNKY6YNXKRoDeYfwiHdCLkeF166zU3rpCXXPWsT53hakYvvwNyjPLYZR39g7NLCnWaxASz253ToEjidK"
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
