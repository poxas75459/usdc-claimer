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
    "4esBoGPeNcqKExhKp59fAxBjiePtK21GGHiaKdSDHUR8LYoeA5565BqxkBeXCC8E6B3YeNPnoYTcsXHvvDTnZPFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37NCj3dBGEdAPzHJQ6R3m9oaTBwhoRTizRejh6cShcTvKQXrPgxrigsBwFXBeJSQT2HCF1cqtb8RseiZNqTwafs9",
  "key1": "5hSrQmUHGQuHL1GdXMwq9mdemLfqUCDwj3Gg2XWPVeA3NyyidjvBUYP2e95KwH9iqhFxNdimsLgyfivicMhgfpeA",
  "key2": "58Pm13JNUqCJBEKQtiTJbK46DHKbJ7vr32c5UReJR5Cp9nPa91cajLVqKEeBwGUZ1XvEooXYNnSzAwVN7YEco4ms",
  "key3": "2Judh2HbjJm4x8G5Lvn5bBA8Q5tGTFQATqyW3TEu9XGeFxQYufRZxjxqvsqw8UzaoGFYpYv8uR3H7NsgKF2mYeYm",
  "key4": "4Aa61P7TvRFbjXgLUbJ7qPK1CyefgkppC9CKJdGzHRs46PCYrDHZy5dUFj9voqmADJAayqB4y7ttz4osvozpNeQ4",
  "key5": "MW7oWEmuZp2SgBmBt2C38TDdqW17XCZdPZicDZVsUxzQmLMijNSG3ATZ6epMYWDvnofHBCv5bahKP51mrVTATTF",
  "key6": "3gVXU9V4G8ihJnhSBcZwvkDpxiVu6R5zp12PkxZykpDscix7V7bapwtjQqBungd76F7GKHmjeQ94kSfP1s8Y48Du",
  "key7": "5jBNzADf93eqxFJC1MbeWWPpNywsAuUaZyfpvJ1srpDMVe4ZSKLAMg6GYGATYhNdQBwKjqd4txGvYpKhvc43qcVH",
  "key8": "uHpqridDrSzP8n8K8g2qBVpsna6YfBUXTJyB7v1pXuca82ZkoVQWH34T66Dw7QcoqB3HS3f35gqZA4Jio1a9wLm",
  "key9": "21GBbrxSEVXL8BTk9ruexeDQ147b7o7fEuVtjawQ6ceSkEHvsB9N6FAXDDkBCFPRdkamHnazCdXWdemMNeu5kPdU",
  "key10": "5EnS6bKfWQgXiGo6MzKVWFATsgcNyiVQtzjzCDJcAfUHeyvp1fS5BZ2shf8SmnnpoKibXVjWP7iGQvo7iiobbCEj",
  "key11": "tfU87DVfDV6tbPXZdKtLUz2fYEw8yDPRT8MMscNb1dAQdzPZRYJtqyPJPSLcBb7uDHqiR5hvyaqYzcoRX79Hyzh",
  "key12": "3BLKixUH1ieGzwtZJX12YRXfHgWiR12jAStnZXk9HSexxPbmZDymnwg71VvP5iCT3XSNzEVnnqPypGmy6Xn2w5bJ",
  "key13": "5HoJe1dT7xgkHhuBTtz2cwJcPGzcjKDwLB6GPsmV2Xmu3de83oerap785ZZCUdmMnaPLGq9B14P5Pi45w6sLghiX",
  "key14": "2wQqFWQYnFj9p7xWuZANEAKBMgmbNdaMuBiP2fExBRgz5AADwJLBV8aeUdYpKL2BNEAXQrAE1QjCEYHqQxUn1wQi",
  "key15": "5KKPSbeYCgVeUPWGY9ZLzrkMvCUh5XH2BqCtJDbUXHzhQv6qerv4nknJSfVtqzbFFCWnpg3am6rBu5oQuYvYkWfa",
  "key16": "5JcuAs4S9GPBiscyKVo56Uk62EEyZZEVDYhUhSfGNFfzwCcdxt8QWLjnRQnZShEZx1cgJymPJakzFBLMVoJVZGtY",
  "key17": "ox8d6pyCMTAnGP2Rz8yczqh6ZF7CPprdNZLADrZPiVpoanoLVXuegHagU6sAxrCUXQrU5f3F2HdBYcZAu9XEDvW",
  "key18": "5nAQwhohh5ZmEB62Q5dymtEP1a5gvtWyKHqg2e7a7VBMWCW1JxoAnGp6hPrnNXEpTNXz8PJsvxPzxWQWrxECtScB",
  "key19": "1vRFG3YssQhC8fMBd2N6HvcQhLSwDuPLM5VkT3WyHd9xnGG4htCLodvcbj6kR1wQNxSHeucNydvxr94BywTJzp5",
  "key20": "3LKf91z5TjaE1qAKT7FrvQiGo63AqpE2nTXgMXJVioDvodnFJGFbtVsXGNAZGhXcorjVERPtVeC1mkAFNJzxN4fp",
  "key21": "2dZbnE2P43Yri7dLjRfCduPZdkuH77h87V3zPs82YiXLjhTbRbAEyoB5AMJdSgJ2cdYBxMhbBaAPj7LqfcHEW7cb",
  "key22": "5HMWSvL866eZ2jhPPqjT87QLUen5QrtGMwZ8AurxU1PJjoFfJD5mDgp3xVa3NrrwDi61W56twBXhzvmHzQvnUn4G",
  "key23": "318BS7ZsLKTUykoPHMBs2yJArNuAryrkHtK3pPMDBtu29yNsAJmRH9e5ifhowrTc4r1QmHuBcbNtHDFdg4gBM4Uo",
  "key24": "3UjM77kyT8FMSR85zi2fmJgwuypvAfjq3RuLr7r7YTxZR552PuxhWKE76u231YiayCDYwBBDhksnKYsWNCS8pwCz",
  "key25": "5DFe8WQLjmN4KiGrLreN83rwVYrRjtetXcEBGAP755XEqtznAaYCajYofmyQtmfVzF4bAgAT5WMv522LEitzC6YC",
  "key26": "2mKnc83sUwSVeFCyz4BWp7KQeT4sMjBtsS2APNnEijGknDUz42oG8vjkZSMq1MYGACZnGyUUg5FxJ5TwZfN7tAcj",
  "key27": "2Ao57Ky3ewDfsLGB24oL46p1kxyeJs2ZkgCkdz2TSudgajznc5Hv3cywkvtYAnmhSpnbpkzScYoiiAKPU5qdtWLq"
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
