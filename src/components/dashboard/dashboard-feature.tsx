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
    "5DX32WWCMcqFKCZZyxr5S22pXwQsiu7QuFhd6fcRg46HT4eqNEAHMbk9S2T7w2tXuJiUEjqR2xtaquE9YZ518Vxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42pzmi9qbBdsWUZH2bYXJRquZS5F8B2d7fE9idCGVYbhQ1ppHoATPYbypoBYBLq8askzCFea6vb7Wq1Btn9KzeTu",
  "key1": "3PEfDVBBNnBwW3XuNw36dgpHRJC9UkUcnYVbzNM79gXxavnuLowBMUf2emjg1asngpQhnbGx476fJk6JaoH5g7nM",
  "key2": "2pYpd7VjrzQHjxazJqPcbqfK84pdnzaHZZQuCx7x2Ed5hWkLxcv5hvqxMJPZRrUosRwLdc2SzKTF9fcbkzC3tGJK",
  "key3": "3guBQeEPjZn5ZJ5xDmf6iiEJk6n33gu1FjbFsqBLiLY5JADoYjDqW2wRnNFN64BujkNgSeMqsih1ZKMifSzBhJAQ",
  "key4": "56q4pv2K9GFifb5w9gw6Zc51ybv17Nncfehz9vWooHLVUfKXMbvCKi46WCwzKWguFTGYmzCoTDDHRCMpPfLj7hAh",
  "key5": "3AAJfh3eW6K7arXpjdThKaqQkgqbf2d61pY6VGzt5hVyUfdpTxyg9tUdMAoDLo6qmgDxU12we2dZJRzAgvsKJDvn",
  "key6": "3aDqU4g236f1kLJs3gtyLUhZz6supjucg2pEhhw72mCrsnTBdfvvpKrBnHM9so7Kjk3ey7bUE3SR9A3qb3NmEXf9",
  "key7": "5fABGrvd2qcr11xRv2E6B65sKkVp2RdaW1NwqgBFAH1hPzmGv6KbKj3qqXnXVXyUShkRNpdmNfY9PwKg8QkaZiGx",
  "key8": "2W4oaNoD3whpjjzKzn2EhddrsxxXV6eLfQrbR5AU3rdeAjho1TG6knv1KKJfK1kGmKzFUFim9BCT6HwmmZv4pRj5",
  "key9": "4jCTAo1JwtfieUmriWQPsNg5hoW4NacomQSjKKZQKf7icjiNZsjuyciXKuiycR8V3du4JrFD6qbE9HUAJg5fth6w",
  "key10": "2ft3LqyUALULErLnuNWV3v5FcAmWMqCM7rDHGfYggGaEFmK8JJyUgnL3HxPP8TNaJ6nGbEuZuHod1WbCL1xR5sH",
  "key11": "oyqtYrQzUPW4ErnM4qzX2hGjmGi5nLpqdJXkh4XANQDtCSwGdPtbmk7V1JB3SUME4jTQtZSLEKrsfX1GbC6f5Ny",
  "key12": "33udNm2GbSrsoxCFhD8drRHr7AGyxjegC4vehZW8ArePbZb867uctaCmTKeUihtjpe3U3NJp9GZEeuftU6j162f2",
  "key13": "5AfkaD6BhcvD2eL6P9eBBhr8bYHtLtmH3C1gCE1rKYXs7cspsD7BKNKaLG4LKQhV4WCJJxUaC8R1dRqa16Zoga2H",
  "key14": "4Xj4CEdrVpay6k89bQkkum4cM1Dx6vSE4Eh5A7MmKnCYeBAwsxuaxPASQJB3uSLgN6EbbtrsaQYhAZ75ZbGABFdZ",
  "key15": "2huKToSUhyxx1ZnMNi986JnqcCdexhDRDPrcRXePFpbcninHeJqWHvzCposjX6ts9kURSVua6i2AbYPxXGptLNSh",
  "key16": "2C7qFe9YxdeCFLJYXTHKjDN6iUthHiWyg3nskuXTRjmPXWVUZBRLf2pHzCoxm5WT1YsCmW1Rv2kHesNRpdAKizKH",
  "key17": "53AP4HdswkDW41bJnNX58pTtxNC9xMLZtiZxubj5rqhJz22ivg6aBfY47ZDPzBJDvmixQpcDsUexMjqLfvFcWsaU",
  "key18": "33tnUdVnBgJfhNmp1xk3GwgvCCtG5CWYzTTuKbKe59pNMLqVRuaohxitvqD1Md31J7aj8L7Ubh4AN2EzFvDe7XgF",
  "key19": "5hJcySSQD9A2PESQh9QjCrJyTnEC9uxq1ook82oEdvCnVB5p2NHz6MYMMtjcDst7zZJ8j5iPvsTEz3YgRJMRoEd6",
  "key20": "CKKQD5FRsWifrwZbiYCZ1uRPnJHqjSmS2bjqjSgFjj7oofULzepBAHUBUCeHQpzrYnVbUT6tNVAred1G69B3EEd",
  "key21": "4inbKcGgEjUUoihHTJ2smRRjqPeCrFakRgAaonWVPPqRqDRFLjFXjCmfATdudZaLicw8zoiv9U6wK4pEc3JrLLbW",
  "key22": "HLvCoW7waE9BHR57xPZehJSEnaiBGq1jDTEUhAjG238MPmVzFTG5wWbqRs8Jdm8fXiyjwkt1rerLCM6TKYoeUxG",
  "key23": "4eNKsgxyHEHmkAksr4bByesSnancusrAdkmqoTBVetMD3L7G9cQ22uw4JPjjGFvGoUCaKQ9WmM2KYR1kNXdivT6k",
  "key24": "2kkxDkK1yNVDVNe3dmFQndAug1PHSXao179ns9mJQdZVsXj3ucjGPgsZESYKKd8nXf7CusFubM1mZ2se8KowdpFr",
  "key25": "2netX7147NTDy9NaJ6bdtJ2dtaXyKNMNT6H6JjtsshVYJiSqjhd1aAVK3pJhxZUdd2qAQgYUTimaKFc3LVMotaH8",
  "key26": "4RPXbty6P79BnphQY48yXoef6dfFsEQ3yTiU3QKMaouvPHfkfswWQZ9EeGpFvdVvm1c2H2hKUsfooywXe3SQQPrv",
  "key27": "35PjzBrtni55ea52wVmzqoGkayQydqkKEruwiuAiUtwkrqysH4uzUcpTXK2zLQpqhLqWTbpZmU6wz95KLSgZYmxT",
  "key28": "39JsK57UogcnkW4e3K2QRt7w3XkmCnkoy6FeC3sNrG2T7zVLLMj1xHz1aFzdNdrDshh1Q1Pe6zDyXZUJrV1UC76Y",
  "key29": "qHtfRSd4rbNfWmKZHfJBS7VSJqq8MMXrasgQHxYhYxCssrMTGSor7isVguvCcinmnMr3z8TqWJxm93u27dJLoSD",
  "key30": "4SgUNRXte8ywLfT7rPjBZhycaEtDMVdRAGGxC8vNKMQjwK9mMp2USC6zcvdCuSkhbvu7bGihq8ez73BYNE2bpTTZ",
  "key31": "5UddsedM28ZhqSQhTDfky9HKMPWRzCUDeGo1JvE9x5NpH3N1RsCTNLkkhqjZSmZdY9QZrdDYQ14M3BQFpPBdLX1Y",
  "key32": "4jyynhdsnVjeVvuKSpmem1P7NzeD6CggK8WkurmBbPCb5etY3y9priAU4YktfMMeD67rfXJ3BPwaNWC18PTFfpxa",
  "key33": "2kK1yh6NxQKjBHsMzCgjjMa1FmrgK1rcxaEmYAfwEwLP21MELS7c2Cb9nN2H6NMcS25n6MHSy9yxSRJ8Vh6k5oEz",
  "key34": "5W9uDiwLQvNEAUDqHVVrzrdAKLm2LaEzhTi6hAaS7vuWYCk4NxtaC6FXkjdrkzDdwUyuT9VyxVGZBdNqg931gj9r",
  "key35": "9oDWBGygBFubeTHMiAgMSqTycwEGs5EeNerf77cGju9kYcFiFEPBsSaA1hAyg5Wr19MqxjwwwJR9jUQ3PPVJdiM",
  "key36": "5zdxGqPQsFwxopM8H4HuSujAN2VJtmMwSzBXwWgajeTFe9iwJzbBNmHm2f8qPQVBD2kBkhyBpZJR968hsLvS1aed",
  "key37": "4FjYf5kkFGqBzWAYBjr4EwRzpgo3YrrYK3JHidvbUH9LnHL3YYrCFAebMvbYTNnYhJnFgxnYcug4M82oqTQPeiGH",
  "key38": "4bNTyHggPTiaY78Q9sE8rrAM68SDi89p6eFppbcn5go3QHWHuYW57Dcor617HTUMBLETDJjLEX16tzLTb34m7cEM",
  "key39": "3cu2bFrFAUvybJ6pNEUDcUCvx9CZY1VT1QKJm7VTy3x6F4P7kRoRvTW4EVACVtLig1VdegsMZKF7ssvW9Cny5ChJ",
  "key40": "2858RfAoP5sKEGrrwvYbsAZg3Kp8g7JkA5WxwUTKMycABZ2uHoyDVWu1h1u4ptB4Lhz8ocGYjjMubFK3T3M8D37W",
  "key41": "3d1UWxaK5BEFXBaSpQHBhwZ1f5TQuqG5YvbbNy7VfNCgsJ1w1yMg6jSz6RhitQbTSPLyxxwpwidgote33ccC463P",
  "key42": "9y4h9ASrWpR11knhdtQeGD8vrmM6MwVn5kpKuHQyso5kjhzvmRnRUNx9nwLZZnTCSgas6pW3qwRoC338PRymqJR",
  "key43": "528TapcsMoio8V5EossVkjx2N4QyhMkpFxU7Z5tzyXBkB9SxqWMKzmMWZfpHnK2snQNNETpV1G6knubmQSTWojS3"
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
