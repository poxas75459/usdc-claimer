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
    "2mJdKkpPMEbQkj2EgpD3tMwrRX7rRewQzppRwpY3ziZgGMLHQRkk14RTSjcN7qVEcjnBk12zAQ3Y5oGmLfrMhiYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3suShGea5ZQZV8oqaYva85FxLjaDQh4PzHfiMNu5t8vm6XwAWmfBLq5WFMjWXHfaeea5q4wz8PGuXEnn25hrJjYB",
  "key1": "5u2bPiy6DgAb7Gix4sfsA3Bovcj3dufrxARqTtyA6yNGfdqRqjCSY91XNQquc9ET4MvUw2XFEsRLzRoCUosjjH2x",
  "key2": "3iMHtLf7uYwuahorqaQfbm3MVsjPjiu9DcEw4pU2XEK7f2EnhVpw3UYk4PCzGzDszPoXr2ZmW6GTL2ZXqPgANC1S",
  "key3": "2TAAfrZtvGpTXdWKg1P95jnpwA8eZ5dULnCKRVPHLPfYtM9scjQKLpknS2CtuqA3GtaZ4VLxwo4GjsGhkPdzBzi8",
  "key4": "52sQuiiPhk7h1TNzZPD3fHrGhgiBNT2RwM5Lx4vWSATaNPn8WPNfi6KQcuRnRDhT1dYs1PPJ8oJpjq3M8bs1TNLV",
  "key5": "2smQa1dbEf5NDUchAKyA56uTvu7z2q6wmPwqofjLXBzKxkkjwZodbQLAMmMa8SnDiJNYGDexeNCHK9T8h87YdK7e",
  "key6": "2pmRvqdbq2JKxstwVugxuA9DrVfo3VdLxFtTut6cbyu8a9q6JyKnWsUumR43B3Z2cmwxu1tQ1sXNE8aqMQh2c6CS",
  "key7": "4K7CCWHpfxjUsvdKsRzNdS7jAJBXywChvEnBwGzkUWkeGmGKtYzmYvLxANpibnNnmjAhFka4XH3WosH67tbNGeb8",
  "key8": "3wQpenJnMWHs7b8Nha1XyWSUcCxBNxyfq5MraePstX2Yne62eAP5F6tgiukRkZDgqoj5ZWU9Mtwok14Qap1KMwQN",
  "key9": "58UvAcyRir2PCLQex2kcRaN66smvwgyj48GJiRdJykRib4HKCHrmkUsZ4jT9NBtLrwg6E8eAvujhP4Zzoern7ZbL",
  "key10": "38Q5PQK6PsvQpL66RzguwV624VW3kd43cbPe8HcSeQa3ydSp2XbeAeggrGTheYtehnJNoNnNcZGZ3Mwy8eFtmAxu",
  "key11": "3efog56Giz1PAfmR6nPUk1FeYE3tUDRqsJ9dEFhuzH4xz11SiKF95eiL2hikNRgXydBbuz4XpTTPpvRSF8yATZrz",
  "key12": "4NApG5HmNGMEBGxFHdm7wy2QPebHSfNo7K33wJM4HvidhjWpNPvk2RWaYsUwAhYtiKyzKErx2QqMZ9vBTwWvnz2G",
  "key13": "8xbpFfmAJgxcK5jsKG7GusbGcEGK3c4XA6vYgjxzYRmtaqd4pzzb5GKNA6fsnhqarQci7uRjcTGcg7tKtJJxojv",
  "key14": "2N7WtCfG8PZMhnjo32nigDJ3Ynr42MuTh4JJ4gdGAjNZt1m2c2rDUkPsuWB6jmdxEg95zLSrYn5FCbs4xf4467gy",
  "key15": "jQ5Nw26cCJZDHg49cM7dBf98FMTrS8MXLmXzKs1kvc9QpYovQK77RFQD5VsuviwFECrdW95PBSZUzCuNazcLB34",
  "key16": "45R6N4XDQKyXHKUZX9kr7qCDiFSo2NoEG1Z3XfGqAar5U85zfeLW39N2TeyMRm2PeaQk75DdkG7QQ6Y3LUX4Fwx5",
  "key17": "3iq7XSvV7uujrHKY11XZ1g8j5Y24Ysodsn2Kd4brwL9UpiFQtUNRADGNRrbMLs1xd5mFoWktCB6K8ZXkzNZ4Do87",
  "key18": "5uo25QvVzTrBUvnV6vkJywE5LmP74MoftPApYbDGKVazUG5JQSWCdmtzvyUqSGgVqVyqmdp8GfVvzMi3GmteUnxT",
  "key19": "476R6whaoVk5fP3TUWafNUzGhsQkdo5tjPdDFcSXCyxWXhyFq7wjA6bnXzKgLy1GabLAiixf68aJ8jx7ATqy1PKN",
  "key20": "3CwHX94bzeK6vZJb6mkwtXbEe2zykMb6rXUEENKrF6QqMtTBUTdLVwtCVH78Za5kMQDUyL87nzVyRhntZtXXpfw4",
  "key21": "4CwGs4VJo91DEDxUT38aMBm77NbAB9D2oJLkqLTukcmsweaoeYd9nck6T4opshzYTWaS7o96KVGu3ooW2ADmkZsf",
  "key22": "5JEBim1RwGEtGu5f2R3e5iPrFvJbjGxkaTbkAKHk9Se5kyR1YWcaMmAJDXDCYyuJ79yEFGrJ9pd8GszohKCNVNxh",
  "key23": "3MQY89nrz6QpjXS8TKZ4yZKUCYPk7m9mmQQFxaxm7YV4L34ddrJSg11RY23xEouGbXVFUdQKebvixKHMa1UJw4qf",
  "key24": "LCm8dSLwZTcMkkFpmGC5WB9eKtG1RkJFqfoGMrKVyDVgSoBXiodA1g6TUvbQGXeFTwAVBrcV9Ff5PoFCUfz5eAw",
  "key25": "34iAExQra3BqSxachyag9Sn1rjhxr4oY6dQd8y16WBAWFVvMLt4JHaHj65uVWdkJymjGEeGV5bSZ1yMwtEA6uJCS",
  "key26": "2B1PJSBysd93A37QWetSu5f538V1XdX7x5J6EiW834kC2S4i5euA3Ck3zqasTfyd4sC9KiRa1hei3KhjPdUuesNs",
  "key27": "489BSYS5XdGTcfFdMke1ymw1pev2wNK7z8cYaukB8vhGXiaBm79K7xzHvmgKMmDXwaSAngWrQoyTwrUseSoba8kG",
  "key28": "5hZkQ2qhWeufVY3zgYhwZ9pZQtw9bmmdRqBHhbBLXw9mt6oykUyZ3JXWH3Z19Ni2JBTfnhpznqRePcgm6qYphBLV",
  "key29": "5dgipFBAFEtXitpp7GAJoasXBjxWy6gUpBxcRyiV7inxrPpWoX2ttTysXXJJu5kdWnGvTJmcd2U37itGtTq2xper",
  "key30": "2XbHBdb4122e6SkjwyH3zEJS1o8WQh5Qeq5TKUUjJUDXVRDAL2Em7eqjh9abpPATDVRM7iwLS9YnUCatETwa2AXF",
  "key31": "5KawNFEoT5mK8DsHfu14VC3aXbJYaMFjJJtzeDLG2KZsLeKF4YdUWXCHDeAznh87rf72XzNj7dcgFzQ2jt8gnsCQ",
  "key32": "4Prjtmi8bmvKDi859DjVA7FkYvY3mLpctyAriZqKDqNoneKbboZU9kWtBi3HrdQezgbFG3q16wmk1w6nqpnSoxHC",
  "key33": "2pYAxjLuCdoRQvFqMmBkWeGEK5xD2knnmmSVPG2brY6tnUFwCq5y9jFHWyyDvJJ2daXLDsuNq87w2LJZwKwtQesP",
  "key34": "5ek8MDDx1AUh8NByvfVg9wEU6nRq6VpP5dVr9mXJ5ebgGEecMSEWQXFYpWfvs7bQo4qTzNQqPy5K5sPLXqNSoQye",
  "key35": "3NEMfQ6s2HnYPpDeEG6GcmV3qxjfKFqriyqPW3UxwVz2E4V8B5SmXS2NkznYMTPVZ6q86AakV3p69KmcUR2nDKY4",
  "key36": "65iS5jRs9rczT5dScX3dT1v5E7VVvyuTf265SuAhUquJNC64yeAiXDBw5HaXfKEAhFhWqQQmQsBijX5QbYhC2mHE",
  "key37": "2v2FkBG75tAu2Lj8VxZ4t3JmpYCubfCPNb3zk12zhPgjAih64A4h4nYticHV8CaTved7kPuUaUZog7djVjGgw9Jt",
  "key38": "2fqUDMDTnd6f9VgJ1yZ5NKP5g7sZahaHNscZ2wVPS9P9Ara15czsm89AW4LBrtopKbqytiiDGZPJaA4QMZuHZG3d"
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
