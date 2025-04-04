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
    "gABnv9fLMqjPfqgwa4VNTUn7gndc5JWb85i2xQbwecSQ7p1d7Zzds7RoQ8LXXLtcjGqkaC1xRo2SNpURWH96u2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NHghEv6Fa1tqgVpvcRZSjwwHwCGXmED74LtuCcZhKDCnHMY6XRza2FnzFqQb6Hw12PYZATZQP73wkVenTY43iQY",
  "key1": "5UEKAfecwak4fRrJt9JvfhuTFxLsKsEPHYryB3L8EiaxqCErQpcgoL7wSpT8iP3sFcyxcLMXe4yzydzqXf9QPSob",
  "key2": "4jHtJcTi3xWcVSGzBokDizgCYETQK2eErKZGjHekYt7Q2fgsKSy8fuKtfBV5KiKj9cSjFS9cp8UunAUvZ4wbBAJ1",
  "key3": "24efbZFnsw2RDmSD41dNdtDJeCcnCoHyW9bPhozzzK5CLVa24c3PTd5oGgun9RU9bqN4FSE4ExaaoCdKj95zPMXi",
  "key4": "2o2yg393tW9CNFxntJzPiTMWipteKd6zxqxKqwcDYX8iTaspM4HHW4hFDKQE8vGeKyAyEKnQjRfBLvMErLYfgTmN",
  "key5": "3ddtbeMWQiSsvVYxgNX1cunb3cnRHo2dvVgEcsjaigQC1jWDWefps3eCWwXQtkpRFRzBQPKBxwG9koSx6RaaDMa7",
  "key6": "4sPEufWKoVx4bGK9bEMD3bWyCBaREVyQd6g6ivunbBcsJsG2EbfaW6CTXVPkEskEYFeG2PydmYQs21xiMchiZX1d",
  "key7": "2JCsX742hPZCMumGWdouUtyZRAxvPjuEAn1fK7soTBWG1cf1EcnSFRw4WyzQCTqS4fy8ExzEMYPcnC5eyd6fUiWi",
  "key8": "23Tdr36w8HnsW3wTMHw1gYYPfNx6NMkjPu2pfBmmMvgz5Q7XY9DZGxoLRLwftkbnvD2YynewEDLEvdNUaykMsVqx",
  "key9": "4VGxsQBUFYWTMmqY5eiq9tQnewPAs9ybdWegwDRDL3S5wTzZ44PkUdCikCLNpaNdTeDwU7kNxgTeH8C5V18hSvy2",
  "key10": "WMrMVPHVSNRcXv5DfEFa2PLyXkG2GcUH2MhbQ27uM3amdwVmiyMfi2wCBBDBq1e5t9eSA58iUpEwDZ9F94BdrJa",
  "key11": "5XC7quoGhrwiTd9zGtSx9YjfUKSkQN2WYGfpufW2QWYVXzUULBhwAccLujfdadhhXoFtppWG6Eh53Vjn4JaTNMEd",
  "key12": "33YAhKdvPcEnGtzTF1ogDnxFjxQ3nMdmAtEDpGR8zcfobR5SSHRGTED1eAkBVBforBkuWX8UuniEDK3KmS9FBmxJ",
  "key13": "3kxfriddTfwFKViGkgrUCqo1KfBRcWSKdgYd8oHaqdrrq6xUtpNf8FBsQubnmoJ5E4aKsZ69x2NTj9D6okxMHoTd",
  "key14": "5zNxpg3m9kNk7qxsVLYYds3ZDXwtDb5aYEiM5VF5RYT6MAHpxqrKZrHxhLiZY5Rwi4j1CPRRk3tmJaZ2asWgacdQ",
  "key15": "61KwcCJa3FVoqsW9gTVw2cDVVyyR9YybB8fePoE7L85NyYgxdq3x5EVe9BtKUuYiyf42psGnCVdz6ZYSAQxRYW8m",
  "key16": "3Gjf7CdscTFr3KxGz5Z6voPGo3jBwgDWU7KMUdSqPNvgGUpDZmeqZbjE79xM5Nhd8b29K2uw8yf596uKCz1gRSpT",
  "key17": "F6FvBiVToMScLKGmFAPZRr57d6HjV5rRLJgsdNzcXSZWEUZrs69uopKGnp2BTWqj1fU68Poke1YMrMkzuVYWpk8",
  "key18": "5K26XkErCqa57Tkg1V6siUkCFeDDsAW5wCcmJ3eQrm3b8zAGHu6raKWDbf1K32BwDctRKSz6yAiwjn3DUaj4Smwq",
  "key19": "55tKNqMXdtMHCunH2L1PnHwBY1aNeyijAjnmHBhXktGTZ4jWMac8T21M4nyVnoht3auEW1XVNwp1sUbjjvtfoj6S",
  "key20": "4TCX4wtUrJ6SLZvNWYi4j7odbAj1uCaNhD9LxP1oqNCxHiGE9m3nrXb13FDjL4CVnVFKmuugaV8ZcmkMHaUEJA6P",
  "key21": "2sKmKVBsNz6pR9Akw14dP8XANLb6oSE1dR4RKkGywhLfKpMh6LtTbxXeQZiejsqKgTcw2NwsF9NmG1BSDgw6pPRN",
  "key22": "3T7SGXYWH52G4CtmReWD9DB4YrFsDahPFKkXpgHPtnfYWhcTneQdzJmpo9L24P6GGsRkq3iSFdtjVDPziQmkMjqV",
  "key23": "31WqG1dgaSPxAg9UNqHSYkyGqrmqq4iZYYoDHvYVapEg94rJykxUocCjY93WpCWkepsfxeMqfyU3KZ9MFHKkgy8h",
  "key24": "jDgUsyTDyVy6Bq98EVMnfHK2KMfTVRMhhXYnY4Y6E3GrCdiFGov3pQ5gsezSWBmKEj2715LWdvkcPbtxakbJ9cP",
  "key25": "3pvdkDjm1AdG5nTrJP7HYjvTWpbXPFvYcRgGp72f13kZXebjF3xAj3JeEiCqEpjBZXrqb5aGmcGyVY9VmxoBPmHX",
  "key26": "2wRG1UEMKP1f5phePjR1XiPDscDhWK95dVV9uDEFACSjyAstMha4JowUGMCLLfjawrSYLP9h9Ca5TYdaHtwUateR",
  "key27": "4ZxPA6tRBcKkspUFgRJo7FqBZDVBf85H2UG2AG6jrG2xDA23YcLixbi6n5Ggjecw5m8sgAKAHnV43Dz2dNwBfnkb",
  "key28": "3uHPTm62g8zmtVcibitRCT8PmqkdJyYtddif7hkCpigyhHbB4EzbQHvJdXQ59SPRwVXhsiqo5rXN6knPtw9jegUj"
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
