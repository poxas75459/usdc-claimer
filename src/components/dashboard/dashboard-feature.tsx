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
    "BuD77SN3C6WM25sf8hD1q2zAgDaduw9Xb1W8g5GeoJgVLoHrS6gjFyWgLvVSxAKsPisasLXmjzCFPi1JeEpqpF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LbiyP1ecifKXSWEwQBFPASkoUqschAejKKXyUVbbbyaxXX7mmLrHrhVHMfaYiD8BmqTMvdkBgfojKiy6PcRHzDt",
  "key1": "22gHTyYCYAvPy3V78W7mLvnMNdRwqvRnUhDS8DBsf3vD2y6tqTKP8QAckA66wehWum1WwVxothH8LAZ1NmS2BMTW",
  "key2": "5MCoV2o7735YxzFPhDpvRcwexcE7YmPTV4ApnSkYdKiCJagWa4nNyMasBea6oFdMMoSL6huPERCHnSZvB6rxQBYz",
  "key3": "5FWZme3A2btL4GGUcQQTj7iwXakNELk3bzFnc4MF7gzZuxm1aPhBriSoSfPrmEgZaX2zFH8VKzheqLbkgA4PW3G6",
  "key4": "ux6VJSapXTF76hsPrX7zh9DCApiCaHLX4vaCczRmgHyYcxdbWJHw2gtUJLyb8tEHSx41vVfX5ayABUsMPU7QWPh",
  "key5": "8WZNMP4FooHx34zcwysJ5mowHVHdLUCZgBQzp9Hsk7XY19Bt9CSTY9XYBhy4zLypnr5NZsHXMZ47mVYziXCH6dn",
  "key6": "29cc2jCSSikRcVdeMECdRwtEr4pp6V6g5oVBogTDjx8dvcAc6KTxKUmybtB2yErECfjuAaXAtxPf1GG7ymuhtoEC",
  "key7": "5PQzxKAHioQRURX7v17kt2edPQyHaeT97CGK7prt3KeB4fdRt9vadgXJCWBAoJAaARgYBiLpjA2Qphefw49wscq2",
  "key8": "4QchEwd5RJoZy2b8f1VPJEMkkfHTqVeDKkjZpWQGeAtGBEeTicGCtMGAzqYusZ7y1pHoWBo96a4B2VbXXR5LPVpy",
  "key9": "69ipZb6xfTssweBW1C44Pos4CXas2yYK5k6F5DH1eUS1nJoakyG6DbikVMa1g8w8UtnbxZtYCnRSwJQyURyRHbk",
  "key10": "512KmoGwuGZQ6ddZ38veHyu2Hc9SiMy7XFCSenB6NGN2b6jiB92Zan2LC35bdDM6pA9ufDrBDzDCEgHwcxoNu8Xj",
  "key11": "4F2YBVPeacMtaK5LeSQVrDbDukP8XJ3Jj6nC4Ny6niXNycC9QuMNb54W1sRQ943rH5tUPa1o8Uxo4J8kzvxvB3EB",
  "key12": "664NvE41JfBWFmTPLxJJE7RPo3GyVb4anJ9xHjTTL9iF7fR1ZuApxsgACAT3i6ddx19jAqW9dkmyGLCBbvcrGPGb",
  "key13": "2xgwxMmfHFKEp6PANKTwEGDzXeiSKWYJY4D1og8vQGqjEqXtpVDHesZMaJmjDjmBxB1VnX59UHnmcMNbrEZDXcLY",
  "key14": "4kPNQzDUnFew91h3WLP5qcfHLRgjY4SgoW1zTRPj9X4Rd24sLH6QAsDAZcq4fx8XrL6pxctd33WeMkibp5p4G2es",
  "key15": "3AiKY9Km7GCsxcH59sBJVC2UbZ8RCrGjDLirhXVsJq4hhR4uUUs7h64c6tXnX1BuaE1nFHGBYS8t66JZm97Qd1Zo",
  "key16": "29aG5Wv7ckZ49UrpWRKGVVmu5r9mQmj8uu8M3xYjU5J2NAUtSCv3n19HbXXZZcsDWXmQaNNv7XR1AfrnWeJ4kJ9b",
  "key17": "Q81SNwrQrak7ZViMdJMnFJ9SMEzbnndzNiuzkPcDZ1fBbfxG4b3QyYuKF7fjqvsauAuc7QytYvQVA5CicUBST4P",
  "key18": "rwA3G7iVJxcfigpLTr3RjqR8tMJtNSqjiFP2qfC2GYqCikpCrKoJW7Hd6AwCZXbqaqh7tsvJAu8KjMXZh3GBK1W",
  "key19": "5bs9GidxB4ZuTQjDZmn7XdDDJtekEd9Ayeo5US9zRbfhPNNPbatPfPR2Bkb5MM4wr3Xs9Msv1HfMeDAku5T4GuyF",
  "key20": "5LrZzQgLfFRgEZaUiUaLeFWJZBW6Ne5fkn3ErNtCp3kRNxBcQtiydep5xtFumZwv2azYP97ARxAELgk6yRVRMeSA",
  "key21": "5foDgwEroJLrgwBArmJRVJwrPbjpCgt5QjVDJKLRB8EYv1BytR2ZmZHEu1qhUJbCjZNJzcuce9Yn1RTeoaCB5wVm",
  "key22": "4LB8bMVg2TtpYyfGNMFZkJUszxFeTgjfVpdzm94BFeFgmNnY4Kn2cfpLJr5yHgY7YE1VhntdGXAK6wQQmM5mgLEm",
  "key23": "ZbXoopEmZGAuQTuzsrQrK6mhJ9gEpJ6kZjxg43BdiBAtPD9iP5aMafSj6LpTEtcRLYdW4wJWStoHFxXkfYnx9jL",
  "key24": "4Qc6ahNDE3zUxceRHeLBqxkZKYmAYmw9CRcavTY3NiVXftPqyxCUVtrQ98qx85eDqurheYoGuFp2VwF4vxfG4bA9",
  "key25": "heEHe8DuQemoSTHCW3htLRWvTEywaq5reUdBxtbpwNWbfjxggfv7kGkFuegzairptLDTwUnixVsAPiPM15ueavN",
  "key26": "2rFzmMiVMrbVYPtWwR3QWXY7c5pauW6XTkW1vE3gEkDrPhGMU3mxC5r612JHzQg55XZAXD43KoyL3Eia97TquV95",
  "key27": "2kKqAwwTxiFFfRigw7uvbZRLMvgMeSa1DhCA8ewBv6jafBPZpnX5rzXJbV4zCLrgffUu9DrDhSM6KGepHJSmLxCM",
  "key28": "5HHB5z7gMVgZJWhbdsDx7GNQsePJpLqGwaTSeYztTqzAn6bLzbkBk7d1t61cPaoX3pXM4koRkkUTmo11CNqXCWBx",
  "key29": "5FGksJLW3EDCFScg6aVThRHJ2Ff74xfUd2hyVfnG2TmbVfgjbuN3gsuAnynuVUncvR5Z1L1N2Rhs2FJNfVP1HiUk",
  "key30": "65iGSwh2UgbJ75FkZu4cArnHjEh2DBBt4Cq1kkr9K7y6zGu1QSwm29fcVoe8hyDSs7k8EUyufh3Dw5G4e8RgynAV",
  "key31": "4A6iChuXwS2T8rcrQgJxXWwSgjQzCbSQAa8VVF5i6VixVDHbsfeRfhikgh664wmSKPzP6rMbs7w41W2VetiobCf3",
  "key32": "3zZsAebxSzkrzooJzRpbyUQm35JVxJnty4bxb1X8BjS25agfoedtizmjN266Ei193TY3J5i3Sx72MLncwMY5QCPs",
  "key33": "4YGzf8TzJhiddVdmmrn6vZT5UwBmSKYZKB1MEMfF3UmUpVuTptuxZkPTfHKjzhq7uzXrkUTMmaWpH92qHMiE1W3B",
  "key34": "3qM3rBE3FeF2ckjAB5v2f4LooXjogLWj41a6PZxPJGWWUXmUvU8t4iW3vXuvSf8CQvr2Nq6J8Z52J2s18uyF9grt",
  "key35": "54U6zNRpeXWeBxps4BJtzQS3nAeMXy3oQTWrswQeLbsMQthm4CqJSZkCk2UoM1QrSCoDSvmRvjUX46ZoAKxR1jro",
  "key36": "2C15KptMFn153yA5ArN8Vc3ybjnvDGSvuxg6KLhh7xWyqJr4JbcJ4YRBTxtgSLFbDWaXaYrZN7aERePJtgrYXRex",
  "key37": "56xuoBx4DnXqUz8hVknLzC3tbVUpwLHCkhDzLVEMX3PWCbZLkixAqgpqBMRiWupHj9SoYqSJADaFb9rTTEK5uVy7",
  "key38": "2eeTLdUAshBtcB7qh7R8YkfoLapNWZbAcn81pzgz1SvpaTeBMkhAN2hqfcBjhnSnfxzSsAgdstpVUQ5pW6YRf8cd",
  "key39": "2gpvidL7y1CFUvk3pX5zybBTEiWwkRyA33wG1iirXmZBJD7xrXTXohTu2fS9DbMETRjY5Ywr36tQcrDqkLFnU4o4",
  "key40": "5jzvCuz4w5NrBuNQPvwGZZjZ2B2UUGL9WMcz8C3Ye7vjzf89PKDN5T5N3hkV7pNMHDZfsyXayPs82HEtuVfdhzug",
  "key41": "AZVU7pz33hm4bDv18fwZKoRgufCdy6oY392Db5BuFQtFhUTXe6QfqqoSESZx6rojFGdSuCadxped4nVWcpd3J42",
  "key42": "44ebwhAF6L9Y5DDmyuSbjoWbJ1HoatSpWniFtGkg1JCYDLXAQPSMNDkBRS3GVnqk3tdDxHm2eizLNDuBm2gP1ZmD"
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
