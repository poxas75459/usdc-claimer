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
    "3TkCJZBxAhSRn2vN5HrQd2hKuUe9VX7TCtqavaFQy7mPCDTthmkaxKxEiWrNMuAYKsDx7q4fsfyr6oqW7zCojj6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hgQjgJi6MpnkKPcYDLZTVY4E3q8mhunjvVfRvEeCKH8U4U2eY58tDaECaZ6WjyMVLjaYVugDohVFaWvZKJZndBg",
  "key1": "5VaoZWTcDjkaBevsp3kYcP5GiyYc33Qst1wYWqgzaXFizZyasJtzt2NckGwALzfaWDpt2hb66VHxPrJjcjDAQaSZ",
  "key2": "2RqXCooAFaHkRQWZn8rGL3iP8uPcnagWpQiQ7HAgxnsPLFZFYztdgAXPxDL8vrkRpEKN8KqJDaP22uMX5zgsBCBk",
  "key3": "2eWbcGbnrZXpUewJa9JioBuiykkVQmeKoNG78qPdxXDXmaGnRVfLhWuP8HxDAd16onLCUt3nMXz9tuuHuon3JPbv",
  "key4": "cG8qWr9XfjxBEYD13rPPCU8qDWHxSeiHnJHTvujSMA5ewcaXP7hRVwewviUVbExnctFb8ETAKusQAbPHbUkMZfW",
  "key5": "4SXVT2qRLrf8Xp2vMXZ56nSNRgjoYzP6zZDC8JVhnqTFEAKVcTRsjKgygLxW4tDhNWJDWqqzMRuk5NbQku2v2VQN",
  "key6": "xMvvJefszo7DpDQFNuh6NfyT8znKxn8rtihdon87b7F6iCBzf8H7vJxLtfHPRSqhrJpDKwXnrTxMRLXcqLfVw5S",
  "key7": "5ps7Jo9frcuJVybTFsNnagrX45PTWNKBLwXn68zBJw3QtTqSDSEuj2CcVLrEw6NEixz8QnkVownccCwJ1JSZyoYM",
  "key8": "3ByNNzPsR6GVjB775gNmGzr7SUCKzm5nrG65qpJTzmPW4CuiYsRGTp5ZE7UqKEiMMrZNbo7E73p32pmfEH719nkg",
  "key9": "yp7tX42RpAG6UWQ5pic32k2qHznZuFSAidM63tyrhkEtCv1suoBm98g4Z3e1pYnaRhndWJv55WDhmTYS5WNwHUD",
  "key10": "4Sb99SJDzZXY2GXZHR2Q86F1Ek8mErRExBwYr45Jyo4sNhxRSRgL6twGJ7miAmqtpKjExuhAbVJvreRLpceFgWo7",
  "key11": "2YjSQcdRBCnV2AxaCLK5yHX1iSKMN81YEwPhgXm4Xqxff3E8fsPTAYhFGnQHo5TAKRtYheVyKgC1eHf7vxRxe8j7",
  "key12": "3p87R1X5Uum1CjpEeqkBrwhxJjpgFPvDLfYzy1U4ocNxcr5C3hSBBcFwz6AYY5VqTDPWdzJpEYmV36NTsT5Xb4P7",
  "key13": "4z31gtYa8XPzcDL4bQu65tdEBddsgMfDehyxUuRLAgedi6w6kXLrJS1H6e474c5NfUPNQvjniaW8zBHAeye2A1w9",
  "key14": "UVnR816iyKtjcpuEe1YGsasPfZKzYdnN4pTNG33CSfYZMZExiULqEigSkr1myou1Qyp7GrGNgRmA1ERZpF9EB24",
  "key15": "65upN2tBqKpb5CMtfUN9xdv34bFfaBeLvJmKL2HBEV9i9cbwY2KyUf5YMbU9HcTs9prDJi7UfVxoUc7fB3SMsKU4",
  "key16": "2VV6jBprS115VcRug8CaKoe5yQf7oSTvea4nMtTRigcLrZFmBniCmQw9NVH1JLejUT663qXvCxx7b79WS7LfsLLE",
  "key17": "3j1Z1JWWa76LSwap71CZKTPgywp2Z2GzNZsCfpzyXEHjDtSivkWr6EUd79BVSrRBC3wq2hKfCQW3JfpgzKX9pdEN",
  "key18": "zdNc4KFcFUXTdnqmv6NounN3EkieRwYKUcZBejgMzVo4VRb5wNESsaURqPX7VSzoQPonUQ7Jpzub2fdUxZ3sVzG",
  "key19": "59ZvyaeXLymaZAXSiSaJVCqUJdiYKqzn3Xxc9BdoCDiFVnN3w9FvwHZSY3HagTSz1L5VoFmSdMoPhacEEKrBY5PD",
  "key20": "4wBJJCR9xYtquwxBMAFRvGwGmGXRidnis5jNgJyVQdafefWz7emTbRCwMCfWFEbPD9ZnQSPmNTTpsyoti8AdyiCn",
  "key21": "5a89yefLG698wFZA8eKV9j1qcsFGNsNVgTtNgJ5TvQokgxKqufMbHdeQfxdiZoHMmSEJEuEsKWi9u92xowaE8pMe",
  "key22": "2NUxmjfff9jF8C6VpUhVM9GPef8eRvYLm8X7pYdsZKMtoyYiwydC6cPs5ERPrq2UThuqjUBaV4ubZ56nnosPRuh7",
  "key23": "3AR1Q4b457x3J78shUogb5nCbA9hLEZ9iSBcFjXb4VvAZUL4rBiJAVQQCAnBXJfqZf1CQCZJDvt7r6sCi2x6RCRG",
  "key24": "3ZCEVHNkbypTX1HrP3X13vQQxJH425v3ciqM1xsNLKZpmiPahD6sRpweFozwbDucxJQDwuksM66h4GrwQkq5LQ5v",
  "key25": "3KJp2rNvQmiHSuh35XU8wLwuAf3mdvEhD1QNCFBARgmafnDSxfDQTSUttFD85ie3BGvX5pgk3WFmQSB4dWjVdqeB",
  "key26": "58DkMvP95oi9KDgiGB5wSb9uwo3M4Bn8D4UamsheJsqQtXB7QtLTeQUCHmRCsyMGXS9Vy5qHMRZpUAcnj1vnwaH1",
  "key27": "384W4WVCeoqTnEzTQtdepnyadoo2URDVWY3jNZy6hKPGSHzYADv5Ve1hMpnkqcmec3TBhSgefVrxyUy4psSgS5Ez",
  "key28": "2xGhk5BykGnX77YTfWJdiaGJCc9Z9J1yn3D3GgEY2ntFWNqKeqgrBESPiNgFbtUxb7FkMgJ2LBGbtdPnNigZpPoV",
  "key29": "372V8B4ZmbwMg9cPxFThW4zahfsuHmUnqVeGNJD5JCHh3zE7D2dn7uXxEH1SPQzhg1vtWqpDQ3Gs6wELi9XuWgBr",
  "key30": "4xCADuanAeZXmmGSiJkDnjZopQNX4D7mvXo2jppaWTB3QPFSpWoXvdBX7v4NGt2WM4GqHKDkLWhyi934MRfMrSFg"
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
