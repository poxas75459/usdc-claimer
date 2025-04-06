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
    "4ACpDVyw3B8SUcdkcmqr98zkGMLtSSXzmzJWFddcPnLao6PUqAyerPGCVxkwe2PTFwqbSJR67w2oA7KYA58L9nKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55xPQq7Z36jRvmBn7CMdpC5XDpKeEpqrNiHqGV67Bh5gN9FisUvJB3gN1v7XjAW8rN6DVw2MQ3Ss9x4y9MMbKdhx",
  "key1": "fxdu753Am7tzpbY37F6c4nwKKYXpSF6WPfd1L9KfbfiThqfCPqYiqxtzS4idABDLiymiuXu5A91Nr827kJmxNJD",
  "key2": "54hAh3L9eqm2AAM9gJKbZ7WCFYWyXv41qv3bsmUXfJpCUgYdWBsgQQUPyUNpezSsRaKnhcFucuj1VCsvLAZBUVr8",
  "key3": "3mCLzSW6iVwiDpWHnzNnaEg9Xg8vAKyudNG2czNVHSz487aQ5gek6ZpcmejXeRAEBvPGa6kpi5w4TvD6qEnK6gTE",
  "key4": "4kVciHGH9XjxbYkTi2V9n8r45M5wz94fDETG8WRLPnnDUjE1BuRpMBvboEESpatDcRTky9j6XGmVqEk8xcgdeHtG",
  "key5": "5vyqmKcUKM3TvzS4owTae2TL8cqX5STnnZgG4X6n4RPRD9BoWRxGe4woPG7qByD4xJcAs3if1yzd1HKtAy987TU6",
  "key6": "3yqWmBcuTar9PYTohRaAcHXW1fQdELABg3Mxz4tBUrmWtjBHwH8kLX41EdXyuN9CBA1MUco3Tt5HZaXzSGqug3LX",
  "key7": "22i8byq6AEpy2yPzkLEQnSdW4jmHSFbuBqDoMfUe74svf7At7tDCHebYxtHaEHoymRYaupx9vUNzTwRZ67g7qaNB",
  "key8": "422LnU1hiDAcYa5ALCvoNSryyia4SUMkEYgPbb4U3SRBgt1nj9yuyzbJhuBBK4kZAnEVGjJwhKFMXSnUq18pfrYp",
  "key9": "257yWcki3Q6ESqTEoJpzPdxHnjs8uqGf7Gz52bRy2eQZzM3qivgLrQ4dDY9TUpNQaTed1N6Ju42b7S8wdn63fBRe",
  "key10": "2srBQzbXJye8HYBUEEv7FLvrGRzFtTx36SKVGZxxBWiSZm2bxZJKjEz3qcjhmPa6ERiS1zaiWTomtpogPXGt92H2",
  "key11": "5BHv9snEC3YrYQ3iAsTk4qB8GFnZnD1uJK1LyzrJ4Vw98ntxx4gUN8NJhTbA9CBA29K2BQ8KWqG2GQwMhw85jwEo",
  "key12": "2RpUmLehR1pG5RfkzZzAdMhQsVSwcQjnJ4P6nN7qVk5QD85DFxEXAYDxBYrcLqxmzKhtPDezPixXsW93UALtb3yc",
  "key13": "YMCLGH5qss7e8J2qK5GeriBcwkoKu9A23W4p8BzQBjGz9wFFsQ7gdVjkM5V5BWvmvuZhC8mrJCkGdsJwVZ2JbMi",
  "key14": "fwUWY23B9sGFaT2tKAMHtYtebwyMP2FGenTxgmbiJurL4VhPNbbgBkZpWmCcLLSfS9CwQ6mmEDefG1Bjx7EeJj7",
  "key15": "5b374vBH2vYA6d5zwprNugUCQZVJvQKFp2MHhnNgKwb59nBPJ732seZC9nYgM9kBPhhEVCuXKra6oDCHJGhS3nyt",
  "key16": "5ZmbWZdQwNZ3HpTxk797fDqFRVkn6QHDn9vL4jgTUdW1jX476j5hd2D8FiKyos8VziWU9dfRJxtpML5qUfjMFhDM",
  "key17": "32qqrhJWVNcQ4XnEq1bWeKL8KkhfzEWsE6wtrnV3xFq1qAN9JLkAhiJP582ZLpnPBWuF1dXQWfYNd84EH94dcL8n",
  "key18": "4B1TN99xPbsuPGVcTD7DSrS8aVrA2ng8iFAwUdby8E9GyzXZUKDHZNGfqAAceukZ2mkHTEmsrr9HSXpPpP369XC9",
  "key19": "5p24XReQTmhTpDnDPZLGr1QQj6DJ5RVDXnyg7Gh7Fd2H1RznKjJ6P3PBMD1fbeyJRdPu82vozJ3GgfDhBFC1irDG",
  "key20": "4YeqBqd5ZieZtyihWnzAPyUQiFf8FbZ2gS6zYog9QQmq5ptG6VQo4QvUJRVswVS9v5LpcZqv1nvVMM6RCRhoTnNr",
  "key21": "2DcrTm7DRru3Zc38RimnirLVHDpfwRePr9roopYDtrcRMKreqi66ZtqWyyCj4yfqpaod6rF4hwGZXFkURe9JuFSF",
  "key22": "36mjbCVvabAb22GWLyUCqEqMaUacc1KGzqEErBs6aRKHXA1XD9HCEFqW1rwnY9rNSCbfLSbX3KAq87JN3thYR99y",
  "key23": "bJBDzMgVmj8vKDgrTfFYwQ3LdUvYRSL53ebY2Nff3dd3U8qYJ28aGfd3nZ4sAA37KRAJYbCfSnSB1VYtfcMv4t7",
  "key24": "5BhngMwS7RVERrhymePrgiqLddyiDGd3B3NRqiFk8QMm8dmMhvfJApCxso2BBPQU1L6u5rdhqexq9cLFMAVxXmBV",
  "key25": "daFqomEHMKqfJcaS1GvEj1vmYa1iFR5c9NgAwajYjQAbgUBtWbo1rPHFgtMSyh9EgSTEw7Qso9SfqdQqX8fK93d",
  "key26": "4iGtxP2v1ryeGSb63HcnuFgyokF65EnCE3ArFCARUJEKTEr4mZugJhT2dGgHrDdMs1GUbDqfJFYDXq9ehNu8rLDL",
  "key27": "tPyL7zEn9TXBZNVDszEr67Aohzsse8HjwUyq5K6ez9NUhVXZhLdfaDwqMz9N5tAwkcFREs8vw4FrBjkuBYEkPVR",
  "key28": "2Spq3xoYDAJ94avv4PTcXBiYfJfJJ3ddWrEPJTgHkWm2Vb9FgNqbX9k2C4Jdoa35zxqpbJY3qNNv6FYeTRsU57mW",
  "key29": "UVxA3m6M8t6LbWxJf3nJ9jdSCAtTk75ohdxk1VDNwq2uK9XkgWkkfjHZ5ZCXJPe839Ns7TDwhEMc2wyhX9C8j7E",
  "key30": "2gcjhiYSq2HNm1wJDH2TLPNJtWP69Cwr6DyvvvaBj8y65GhfmJJVp6MkdWqdyzsA1YGm8KdtGQBSECTk4xZ12sWM",
  "key31": "2BkhM9kqpSp4LSaxzhMo5D3pseLvR9xjSaY33DPycXUytBB9BqiQFKTbPLtmZkMPEGfSLP91BYoSKFBCL3NbzquB",
  "key32": "2sHbdmumkoZULKZbebqR3FXtk9xkKjhHQ83xTwVciGckBp73Uehj2fADtS9YFUb8sqHhTWyybtd1E2ZMqSq1dETg",
  "key33": "5WQ7LqGcDnd615pF3yd6BhqGuKrJnbh1mi6K8SCPDbVX2MfKA8RRcLEezauQ2wprNmVckd1pWRJYyfBHaABxqqsU",
  "key34": "45tRzk4VNK6XyCC6MwMNbAAftgtK2vHSKMbugQSir7X22ZuoJHvJD6i3rkzqr4PewSkAd6WEfYzBrcsTu8g7s53r",
  "key35": "5SH82qsna6wwWVfUxZhB2fHer8Jz6By8p9bwoVhsq6g1j5uJFTyAsbRrUzKtUNgE6HZWrfqkDvdgG2xnjPW6D585",
  "key36": "JAgukrR8gC1Mpfu6zudTxyqpwxsSJmFecPefZgAozQ8XjkkyJQDfnYrhxtcbJ1SEQRsRvsVK75xvG1jptdQRKa1"
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
