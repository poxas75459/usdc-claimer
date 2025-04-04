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
    "bMtcRpSYYGUft7fHbwcFDwT1NBkK6UuPUdDV1MTDFxL2x2aWXq6q5rtfwEVdHS93e1vPjWGzoGGQor23z7RVwYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aTxEEr1aRerKd5bcGev3cT2kuxZHnScksHjEfHuR4nFK2XNDSFWq2ZzWuC99VW3s7gTZ8DyhRpbb8D6yVeTYVgW",
  "key1": "2uo38xRe73f6ARWjUqgkDjMEpmYERetZMyKYddYsz6e9bxXaTXBnUY3Qe8hbw3VPczi11yaTBDzUXpsFQbE3td4f",
  "key2": "5d8gSS6JXjQb65cvkcCyaoQTe2EDuAaGJ2dGBWLEPsGNa8RQ3RGa9PYYa4PALeS5CkM6YCYknpmUYgfGZKag2rXz",
  "key3": "3Rp5u9Rzs5RQaBg4yGsSZR6nr4Scwh1xeTN5frZcQcA7nrDZzWrbVYLtpBruXTnU2q5Gat4wgmKWgEGymPLKKxPa",
  "key4": "2Si5qtqaAf6fKuW9rRfiVk7yR9HadFtuFonvkZSJRo1QEpQ5EtuQuEHMygbpmig6DF4XvwwoGRt8VLo9UyaDvZUn",
  "key5": "3aZxbz9vwRGQiZ1THWoJ5GXpf5wkmp4JvKsiRgbfnPeUjoHZjzKRXL5zqkkuSbWK5Bhm1bGmHFfk9zohA1HSJ1gc",
  "key6": "4MhjimQjTd6L1i586SQXUJDBkmFD63NqYVidhgu8veK4Z9uJvRBEYhzkvAYNnUtjFnBbw5VnsCFCo4Sh8z6dbxk5",
  "key7": "nYLgZDAZ7aP43fWi2sfZaRnqWWddGiR1uRvF7XivtsymQa6CWnuFN1JmqrY89Xqx6p32SePkSnJzfzpYWE2jNeY",
  "key8": "3rMXKXV9uuLi2Ek1HkuC6wFiQq4Z6aDj1uRMvFiQ5JPVpXURxHdStoPWMpD2deWdpGjPnJxSVmGrZop1qc5RscXF",
  "key9": "52oXBSyWkGSY3XYqbwsGG33h9LYHwwiPiSMH68CibpguZQsdVdvzpm9tdQLPXAGZGuoFzhNVDoGRe1cHr8Rb8S1g",
  "key10": "2LUPkUSHDMq9CRbbnvgx1HqReC67MJQDiDPSgzamrVvt2Q7UFcjY5TNUB3DzLBEJrjbFKQMJiBA2c9BkVJvkMc2y",
  "key11": "3CAJzBdFTnTeF9E4kjo3wC2eis8VhE1crwaoh7c5UEQWyxetwB3aW18BQ2nvJxJNRGx59nnE94oHoFjcHM3XrMoV",
  "key12": "5Qbfg2bvFVBo2pnwbdG1roTJwvr8NyWrQqVEXjbTHHuANhSArteK1ohN7VJjUVNL9gdzCpVMAZGaUaYDiwcfWyG9",
  "key13": "j4csdZxSXbSuTvRPWBDCiR6nQ1Eyue4NjuQRHCUgLs5Et3TCAcynbUJG9TaHV7bBR5cfjSE4Dq5wQzSCAmyXSpT",
  "key14": "27gEwMXns3deGX82LRRXER6p2aqSrmGhVtw4RzYxGyq2RHWioEYcLW44WkKG48QZi8RWNVbvjTpYSSrgPkAQiQpH",
  "key15": "5C3Xb429dvLWmDJL9u3LMzfokMaL3a45wMakKdAhG75Jum6viZiwL1rCBJs1rBzLncc6nj8iiJgh5QyqEjE48iYf",
  "key16": "56iZUBg45Mz4WbSNeowqoFrhM2Sh7eZ7ZrQogsYufKsLuTzPBtyY2MUiNCvrBM8SDm1XJXN1fJrZFEZThvRAtFyh",
  "key17": "5YHmi9EZ1Zcc7UFJx5TErbo12rtAa9i5jmvvDt6QGtwZJLsTESKnkA5UWoD5VeTeJFCGZik7LKtgS5y8QqoGW3HE",
  "key18": "2xLwr8Tnj7iQwtLmvspSpsQbhkoXRsrgzfhm8pZAYQN1kwB42Y8eQmo44rJsiN8yXQ7EqGS2jDWvkKmwnBKJshT8",
  "key19": "5WKzgSV9GLfzD4WQrFsGM7XyUTLVu1Xz7ZB47qdTZrTRociZ5UNLBkvwbJ18JdkJH77SWCtHoC62HsB17odThVgX",
  "key20": "3MviAWKXTq4uHwngkzWk3zzRFWrf6ZnrVYmj9VHPwTXjDUTTmzzWkMFrSpV7RXrKzCh5bzayHUjYrmUsQ5wToUHF",
  "key21": "ebycd4XNMLCafKxMGsgaTqmGWGLoALs2Ye4gDBwoqiHpGLMrXCyxRFF6oERbF5FhCUodnEwcymvX8FmQH8W5UpB",
  "key22": "66PagPKpyyRiWuTe18Hq8463qqxvK2xyLebJboeEmhDY62LdgyQT1pWDD1VpkKpuNwr7JLmCspD6hpJRH7PusqCR",
  "key23": "5LCNFKsha7q4V2ku2r61LamrwtrJqdPowy7VY6fz7pA3w4UXcea2KfVLpXS6hTX2wT5wK7EgUL64JiDtKbQAikGU",
  "key24": "3vSeZzPG31U7PXi2K8H32cURKcbz4iYHUoXdeKzg9VWN7zcaJQnKmkzaqfhesoUZ9NdwSxfzuSPc6znQi4kvrCGg",
  "key25": "3wnnpgs1GkAXh6LEqYuuPE6MZ8KYLwRDPYoqXs4rbGrencmYHp9qMPRsBrt2Tt2gEP3FAu679bfjhKZnzSSdwzR4",
  "key26": "28dwztYufRNkiTw6MhGg1tYuXsRjEGaVffGYBH5Ue2SNtL4CMQ4C6n4cmakm9dKeWQsBSQKJi85foSGx8SModFk4",
  "key27": "4Ur6zTQ1h6qw9J55WNcrkWKTjP8HCkSDBoBW5XFd3EagEaHp6Vvjf5t5EgJ9nVbdv7pHXp7psi4jyGqd6wGyNBEz",
  "key28": "LBn2Tw59sJC4v1JnFMeefKx15NNFCrB3cTaPNNjBW3ZTKbzpFicezq4UyH9bjhczghCRUnTpYNxjfJPmiCND92T",
  "key29": "2kVhFgs7LigD7fs7r7VHSjK2kqaTWWphxKdQjc3poCQvWSpFCY3x8Y8r8EZ72qmTePdYEttWNQk9sdbNt8qbuhV",
  "key30": "3G7sHVnvB66yGw9ou5gqZUrR4HBAWLDSp5XfP9VewzFf8nSEcvQKXDSvaMKoabENjXMXZZTF8MxjLwRvrE9uHUY3"
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
