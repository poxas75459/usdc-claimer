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
    "3Urqe1LuHdpntiYQTHSdn9kiZB42uwWChux16i5YQfTqZTVyjM39o7YyXf8ny6uitty6pRJk54UrkMMX6cUtqN8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTHhLA6h9yxgXvJpmePzEDaB5dU64dDSMk7dqoQMB5pNse6ruZziKzqgsNE4LbNmpSRSggNRsFtHMUpDhZj4pPc",
  "key1": "4YiuY6hdAF8NxBzeD2jgGaSqCGBJCVr8MygxndoeqD3o5TfPeQqeqqDVtQh86W4rei6wzKnmiXgDVRRrtz7BnMvP",
  "key2": "4QghtgMWtm4p1Vfrw1F7ukDLyxQx8ViorLgreNzvFXxYTyHfNxFrgwV2xRrtrhB8rRjPkA9PUzfjiE9ZcUvdrtN7",
  "key3": "5BULKjShH36JiigsPGqLHtpY24Lt2fuwjwZX4buWuA3AwdzDD9P4qSc27Fq5EqFfVrCnfQ5sPQ1doA4VTogrxd1B",
  "key4": "2dbVB4ZXvVieUnD29wgHK5YCikbFz6YinE94Ar3RA7omdW2XL3r6RxYxD36qBgVxXKeJxpszbSE1C1oeASU2BSgF",
  "key5": "RFcNkZhxcFrDVKXsZ1mkTRKbzbmCgbBqhaUWJS9F9e9vz1xBHYCxooAsMiN2z8XKi3eZJzWcRtdMay8rHRJWqoG",
  "key6": "5KYrJVcnWYkCp6nMsu3xm6jv8us51sztSLe1G5T47uARCiJD1MgaQRpjSKQhMEGLMpeid1csaR5j6droKywCwxsN",
  "key7": "45KiCa9zYhxevxuk4oxJMKeYxpygMNzV1wgZ9irYB9iiMr3ivG2wkJ8Mwbat1uenpXbrqS8mJLS4idH3Vxmqv5hW",
  "key8": "3i58LvruN3TsUUunZE59LKRxSHrzii3dZKp1AC2JosY67NBAsAyDvvFeJYSMnnaufnH9E8f56er7YWPckDsVTshb",
  "key9": "4DJxYidJCJCz3hZi8CnDSdE9KFaPrWpGnHP85XRCfdMqMRXmxgiEevba3N8T3rREzpRYYy6AmFEhcM4J38gmsYtx",
  "key10": "5hj9awQZ6s7ZLQXNTThKN8dFnW8C8WRpE4EzCkwhRMWA4MUwuREeCtLQT7UphKQzMjEcFj4VKXehPAqHZm5Arzvd",
  "key11": "2K5aASNYeeXgcnobbrDdkGMgDMEbwh7UYtTTiqioAZEePumzjzxFqf9SVqZmVoo2P9dG97toSKvdanrVymjGRyzP",
  "key12": "Q6ABHX9SchAbE5wjCnYqakTKZfLpfHsuV7w5ptXHbT1ApDzd1CEn3joQEh9nb82oNKD5agCMBu7zTmnUPPWQ7Ku",
  "key13": "3RfgNCZgT7eUCME5hAPnqYPJdNvk4CqVL59asZKQQ7YcoRsVvP94mVtbSsdTGJFuwbzP2vP3PU3tssHH2HmEXnaC",
  "key14": "3a233Q8TrTJSBFF3QqQ2HB854irv29BTiMV2EzYtGanJaxYZSonuvPW8dtHG5eWmqCadFtfWtyA8EWBX58h2Cyk",
  "key15": "2ieiFo7NdGKHLn78us2764dw8kpVsh2fpLHvAUCotDe1ks6u9tTWiNMoojyBphZsmPs7JVpEDHiyB88oBrwYk8n3",
  "key16": "3DEkwxdvu3qgUekqh6QuykidtCzXkKNTVnwg2tfH7eRX7hWGQpjXFA9WPYhzotzY5fH1RtWdrGseQibjBU7LRg9G",
  "key17": "3fhsxjBwoN4C63Xp2C72VstFe3GKjR92W4z7b1c3tRYE7AJk9hYFLamnsfaq67QqAi2bzjkJFAft6bXj2V6WKrFN",
  "key18": "3pkEoyzePQReYS8hDTmSnmH7UMsEJHgtYAobVbjG9v86Cx1VWxn8SL6KqgdX9uoVbYdFrYchGJnkNAAQSXH2QHq6",
  "key19": "rccQaGMvQLWSDbZBtubjNgP76upMzHG5B2oCCiyYf4VTmjQinsG2CgED3gygwZwZdnCZwoyKHfDcEdazUzaP4gX",
  "key20": "3qZQtR9FPeAamsyiTVcLK8CykXiTscJPYWtywKzT75FtvAPrVXFDuufqVCAYXzbyDr6dX1fSc51ayqPfHSY8xVsr",
  "key21": "5GPPnk7LC6TWtBcRurDFSeUyypHQN14Uemth6bkHdXqH48SGBXj1LCW23ZJ8aP1aXKrwfGRBQDPJXVJRYVeogGwq",
  "key22": "5Q5pn6cuQmBSq3CiNobyYpVdVWnP9hmwEBivacQCJpMy4M9ED5Cz7mpgSY2puMyu2eyGZxkp77jQRGCFk9TqcrzK",
  "key23": "c2Y5Dni4e4UGwjfJhCTf8tYFgh4419UzikCUfnLcSg7tsHo94KssZLBm54tcacq6q7HXJQuXPF9Bq8X4MDtru78",
  "key24": "3xGQRj7KhFNEEPbJcpB27bSqFcE2gMrDX9o1EcAbsnsbEGv1ab854gKCVdM647pFqNR1Ruv5vhnx2bAqwmeJKGJ4",
  "key25": "4uh9p77UoPVoqZ2iRngUdFp5kuvEygyYKJ2xjxeJsi1puE9MaEQj4y72N42zizqJqHcpL9bAw3p4sjuEMbCDghtX",
  "key26": "snRX1zsQjFX5zXAQdRD1dBcxRuXpTfDr7dwBPwx5WgZbYUUkGyQcwtWXmmdYboi3mDmrtBGxfx21WNiRD7Cr9SP",
  "key27": "59SJ2VaD9JSKHp2KGUaiyLM2z2LJ9r9pZtx2WvwqoifEzW59M6evEqozspqMswtG8fZ6j28ub14Ho9cemGdDsBQb",
  "key28": "5ZTpSU3FNXRi8JPtWveesK5YfjFzB5WsC9DGGyTUUsc8766rnNPRwXWKtyL4eJ1avkzpcA985je8W22emvBW9e6L"
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
