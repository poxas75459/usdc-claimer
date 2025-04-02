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
    "3Qb3RX8EVBKtDgujJ4vv4V1MEv5swX5dT3HUkXxmgFrr86GhgmjTabpVtcfXabNmev3VLfdr8voTbcCPFUQYiZuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P9QEV5UFht6QvFjrVpYegNrFbNhNqmAzSRXnNwQugs7wkuyShifKzDVgPhyH92iVwWg4mutngcdZfiJWkGre6f2",
  "key1": "AuWfwBREQwxKL57SWPzmfkjCs2foL8kRzwMLXisJcDb4QVVxJnKP8ATZMrq9P1ZCLbG6o6zCUKDvfWonENM75ZU",
  "key2": "7carwV6BCvMx9ZV5vkKJDFRSa1PSNbXciDUDojj2pSqhpD2v7t9LJoM8MewPG8V3WyFfN52y5Uo8Zhn2NKtkuMj",
  "key3": "28hwQYZg1ovgx8wgR6p63KtHecL2ZfhUh4VSBkKyPDRq8YBTcnWWLfB1iw3dS3o9C49mGwiL5wuZH2DdwFBGB2mb",
  "key4": "5AToYeF3egxFmTvDbMqbZB83YMnuZ2suF4momNfpQnkcTSnbWgiEjdjJY9xeb5Ci52qvs1H9UCFK3Xv1vvtdQSCR",
  "key5": "J1i7VFzFHbbptaZ3iL2x7EtR9PFP537tZKdTK4rgfTi62myzfsqg7grARoSWKLjkVQdTrRdbQPuXAZcR3jyzbZC",
  "key6": "2kiRXYDaxTE5bLnBKCqdSFjGgMoqCbuGMUEdjyExDpG8Vo3XCoQBMfWS9MMgsDW6eiwsgAJome9g9mZhFvGf3jSK",
  "key7": "31Zf3zNRfNmh1VvYsYRQEnFshaTHfaCot1VB4aaNbjTUDdFQf9xW4gyMbikaG1Cd7booapSMdrnbt2evDBqnUwXJ",
  "key8": "obm4pEmk8W2EpRXX3kr5Xvv9yFBiH6pbGYTrqYc61TYgt3PkG4H3XnujN3ixeX4Tp3kuExY7zwC9ST2Q63Z7pSu",
  "key9": "5EpTCgjHUrp7Sv6cZipmPsRuRNocrgzBFNkRaNDdvV8yL2yx9DiceVrgXcBpjibJo1AQHhrQHnwxccaiywuVUdzB",
  "key10": "4nZ3jc2D3XCRXM6WMdFKqWf3nZe8JGc6jwmUWPEtpczRi8nCAUintFdtJFC4oeqszTkY5FMi39xEHTNaKZbqBoiS",
  "key11": "3zahRSVYi8sSnFxhHHnA41KE7kw8tetr9UvWR6oEmenG28EN2wrL53LGyj5p8e6QmnHmCu3u247JHyz6vwXm5t76",
  "key12": "3rkt293LUVqN99w9bAT2uxuHiZubnpz6C6sMz18DX9nodrkXVyNreAgedoTeUEKot1zjtA3BMDA6uqLWnoxWEJX6",
  "key13": "5XB5DQARx618AoLAhT1woiCveVjeMUZMVGpvq5kQL11j35zmeabtmr1LA7T8H5bTgj7syk6a4oi4DBi1FjwDdhMz",
  "key14": "3Yffjf6ZkjrACyBsc6pjBTN1CkZsMuF4WGRrsNZrCULpJgDnLB24Khzr1QfD1JZAB9A8WDhc3GWmJwT4MjWVpx2K",
  "key15": "az1KFaAb6XtRfczd2ZpYa3fudAij7TwYH5Mi6ejczF5kjueCdb79nCAMQyoS1S5Z3XuKPeCAhnVA3CkXk2ah1NA",
  "key16": "5CqNxwc47XSaCVYMDvzwCDRZT6BdKtrrFQaK67vLCNdyvjeVVYQzNJxMhHJ6remSz38KmP5xK5KxQYTK1TFUA8M4",
  "key17": "3rtLkgnSmedAdXiS7VG9eM4Lbu2t6W1Xrd2xR47ehmyD5zcpsw5G44URrcfYDNVrXsXRuTobLJoxNHTDTAQdvD4i",
  "key18": "2k4pYN9t5NgZCK3yjNRFN7oyKV7TtEj9oeDyoUs1f7TQrQfxwX5bixaQjQGFqfQTgZqocFkzcMcnUvWgK8SAw3fp",
  "key19": "2mNsTqywyDiJVr7qEDw8foWGKpmXe17eeWki2Z2hhWg4oAoXKj3NTfyxNDBCZmkYPfNYdsCVxDQSzo7XV18mgzUS",
  "key20": "8FtH94dUtpKLxS8gB3RQrXKVc2E2fkRh9WPwcT3RYfMECsQR83w6JxHArSuPZdQGoifz5jQgsggQHeMtrsJYK7P",
  "key21": "3iG4AP8XpHTA2hh8uxTCAi272KQpbcphoNdnf7jBi4u74ePqavpGyovZfdfsiRgNNQUdASisEUEqiULRoX7ZUR7N",
  "key22": "4R2BkAdS66A9eJU5t56MuYxxhFe63MAtu2ujtSU7XT7owPu2eNueHrQpXmiC3muPJnq9CrNUi3trneYEVRuJRCVG",
  "key23": "5HG5aASUP3kki4UT73nc4xELs2BTaFPVkaj8kkKaC1QbFCKCHqqDkL6yzYZFGCEdhjp8RYBT5XMQXCy443rHoP9L",
  "key24": "4EmPdBjX3LHvMN8AbwtofxXaq9B4u8SbBd4d61CGeaPPLqkhQViM5BknYS41uXMTgwSs2UHSGFZ2GAYbQWNqLAWg",
  "key25": "28msVzXZN2tBMMLK6zYkWoJwYntY7MDYF1TwXVE1czDFBDiVz4Up66HZfJtLcocktHYCLGjTx5Lv5huWvMxj1vFH",
  "key26": "4uvgQUDP2RoLh6A86fqUn6AZsz78VJ9tt6btsSPTrvXNq6rEJz9AMwZKwg5Dij7asxLuC6KSczX2uZCBf9fy73rc",
  "key27": "4X9MpZhqpHZL2p1QDgZsyxJc2vMmcLC24Py1j17JNzGA6atKxudFxtRJJsDHBmF9fTsBjijK7WfzTZAbJnvQKacB",
  "key28": "64NZfCT9qyTMZq2eiCAHHDrNQzXVxVF1mWS1P6i6HNWvDQvT2dzuheRXwsTHARQRPkizaAxWSCvyoeTNewMnsWEs",
  "key29": "3waBEBycQd4z3Mi9oqMcjK4d9fdoUCzMbVxUrTPhtP1vP8FG7TNVNBBoXbNPkSfzS6zWB3ckjSoNoTQJ69pCRUMy",
  "key30": "3UCsCCe7By6xTQbGcu7kDdqtrNy5T7umYpbdjuPyVVs8hjKQn3VnsSycs2itA2VMttDhMzt3xktsUHeejCP11MZ1"
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
