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
    "3MyBsm6agfrxN1EerTSodzr5EXJ4Jhp7AykscjkGxiasj7W5UVzeKhBWheSQj2We1XmvJSBhqURTui2fBMwjrmom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GASKNdJ1vzvzJWPDXi1Chk8kGsLgYr3UpG3GYjM3iuWk1g4V8kUz7t36U6eNyZ78DMNHUdFRtQSyYv66xgU4Fq9",
  "key1": "5RNXPfpQ9M9Qsdrc65xZ9mFFvuovXVZgPtiEkGq4njJb8JuG4SFYRYWm8EJGDmFYTouoqKtwSLW5w2rDVWjCXB2a",
  "key2": "28gphzYxcFz2RMZy3D4Q5AyEwYvZCnr5Xvhf6Wi5NxPpkxmpPJW3TBDBRdrKbu57mgEG2wnrnwbG2d3qDDSFQsCG",
  "key3": "Ai3kEns4MQ3pwLZJYgdUaJAgo4TddyWqVYZMoFPp2ikpQrABCToYR7p4ecqtbZWGKCrpnkNZDPHHp6DRvbg1Hyw",
  "key4": "5Qj1PJ38SFjZargdQPetC84VyDqjdm4h8fd3JtuKQZ7G198c6iipA8KyHYwNBju18ftqPysfeYmWJRkbKhhPyN7t",
  "key5": "4zDt39Y9dEuDYCgHPZCiXuJepLeEyCAZdcpuj9asQQZwxYqikSytUw5B9vz1FYdh3ccGL6oagaDg7vtvj1FDJpwD",
  "key6": "2AKmXre1MtTiLdZVUoUKhg1Jgryijv8LfnoY63r9PmNd6KBp4jb6zYNt15HvvEsvegzdCek4QAVyL1udTRpD574F",
  "key7": "3Qd7PskAEisksqkA8CoqAaDWKPyxs22dZDj7LjRjmMBLaB3y3jNNNpG8GSxVSkzEsv266hZyhXCgie5FWvFaWxCW",
  "key8": "5bR3W4p2P4ZmKgBSPncCKFi4mbCRZvJNevN5L4hiL6uo6wqhDiMUEsH3K8qbfG5RkWDddycsyfqiPGmkKehE2aPv",
  "key9": "WNhedEFPLxhVxAFRXLVTweYhQ73rCePPwUTbNq5deWLizDskuefGAhPXmDskyAMGhAJqYo72MM22F2s9tVDyw7a",
  "key10": "3R4EMVRZ6DhmFESyN8y369CqFr7c75ir9BoojPtQVa5UqnYu7peZVok6HgeMyUsS3wP7Ed5F5H8AsHR4ryLKVH9f",
  "key11": "3Y4x2aprPyzSbVKFEKqwvqmMApGWw2nmrtCLkMgVmNwPC8cFQhJEQZquxXXVikmkxSfyKibvc5Cb5CHXxeCQHy3e",
  "key12": "4xGUcZfy89HoJE7Zfm6s4s43kZH6JnDVXacCemPcasSPgoCdERrv9HR5qEvLQVF7LXGQ3hXwDC1vJYz7cRGAtSgr",
  "key13": "5ndqfaB1uinMZHbFE7vymKbjLsanz8Ljyuc5xhM9bvPygwy6xwHLmyry71ATH1FHP9Nnciv1KK7DVnPnG6kzcKR1",
  "key14": "42VFbtpL8qyZgCBsHZs9sMvpg3LdwoWhqmzmij2Q3uUowAAmrLysQg6vkaKq7irtsi9wkpPDR83yqAikvKWy8NoN",
  "key15": "MKV88Cyi2fCfBcLCvjGPNLwnWD3acRD9wXPnxvaShTVZuUmhZBjR12X2Ew1SzRHXguKtBsYWo4XyGL2npEXhh7e",
  "key16": "4jXssP8doKttcVDzNrniEnMXDiSs3qkn3uY8tPjrUSDAomJ9gSKTj3j1C13u6vi1xrvpiAY2UVeYukhkVvf7eyzu",
  "key17": "4dzP28PEbGTq3q9CNpdPsMXZeDNB52HAiBQh6WLwT9feMiM1gap7dSmE9i41AqSvshddSyUcXAkSxa3xuhcy7r2C",
  "key18": "4dvNZvTJ87qKRRRX9uu3wCaFgXktqgq7ppMUxDXqmL5qyrG4jkFQUDWKDBJzg3Nx6oriEfdFTfsaxP1LEJ3TPBxU",
  "key19": "YaErzZwiWQApS8fFmk5SmzaiTsay8a3P4NcCszyvuyeQiLvkb9KEAU8TBZCQWG1TBDPxrGf2uW12bnckDpQ4jEz",
  "key20": "5K6kyjfaDc5mcBotKu1GPw2dz5bW1ArVvpy6CUv3SC33eSHoTo2nFGGazYRDFPEMCZyk8YQdxsNzdWy3VSAYwF63",
  "key21": "2kUJ8a5P4yfuFkMCuNZd5JQvNnjPtXy1fHziU6QgnRdzCCrYGS5P6Wh34GTjYAAmtq3DHFC22ZDdmR4AdgLipay3",
  "key22": "5M4diS6ZwFUDokgV2hDyDB4vN3hjwr1RChXKzacojeihPoiazUMGaUR6rnr73PKSyTG2zhTW24QBp5RJcL6uVgby",
  "key23": "3Yb5TmRSMJFwYzxPUdtc8bpBiYPxuRiS9qjUXx21QAg7YMsJHeYKLb67gEH6g4CNNSwoyrh641zfbZrL2HizKxg8",
  "key24": "3Fb37bezypoyxK6Fc83ffoGEPAYSHZJ6qVRW9PpEfuS8na8BEuhofTDnLYBdY2U45KXE64enbyft36N8Ae1zKpLL",
  "key25": "5ByfT3WRDaxCejHs6A4XrrjEKFKfrtBLu8tadHz8Sv1mWkUa4JEqKSMs3Mpre9LKL4678mNcQxYdvmnHCgbQNiX7",
  "key26": "mc4953L39QRz7Z2zz4Pajnepm3kDrEMyMEzBNVSrnQyJbCR5Khwow9oFFBj27VnBFRax5eCC2WJ6QFRDiWoc2Zz",
  "key27": "5ZzwkdX4V9tChphvQsYsT8zNaWEcKR1Gi3GGx2DYcPaXMvARYX4L4s8tD2qc2mdrWJaSJyE6Smvecuvd8CwRJV76",
  "key28": "Xuhv7JAFnCpArK9U1aGoSBByCe2PEYCp23bvf3tg32fsCtVvbYYDNGyEM4tiU8yHHyTt6yiRey3NX8eEvxFe1mw",
  "key29": "3ZiiLxKyKqUVpFHLKDYCumc4Zr1pE2asrq9v5rGQ5Sd6ZKFZa9UeJiDjsuDW1dUUUyFqmqpiWucvBX6C6U4cXUHq",
  "key30": "5V2KgFf5oXMajsQAvBJzYxosdhpFPRUMFDTGHS4tcrVEonk1iyNFcrqADR84pxoFGhNmZD5zrn4bK1AbYWwFuS8V",
  "key31": "2ypVsmTWf4L7TAsBqzCNNLC6GnYCKeDcWtaWaRqUhx4KQiTRVTiQRNqypgmK7yS3kfMZuP7qK7F5D6M1qHnhLLgU",
  "key32": "VuXB141AsNh6DM87amQiLELVwevrny1Ku5E7wHZkg1WDNJ7Wy6UyR9ggwxzQmAPZwKmxpWcBdCLQei8t1S59sBB"
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
