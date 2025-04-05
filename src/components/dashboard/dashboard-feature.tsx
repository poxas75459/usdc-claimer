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
    "4zdAaed83JVE39yk8z3Zr2EKoWE334azR82ejSjbTnFtZnJEuxZSDTCM8qKkZAY5UKNMyV7d7CtpzzcPbwK6Sts6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mtb652YWXvY5fJ8oHN48mx93cWyMK9Nyefw9fDmvSBvQpw9EuDw5wWpyoom13iFfd3uk9kUrZ5nBhMhzvYb3B46",
  "key1": "59DN8WydaWTw5KHExeHG1Kr361FQpoNQPSXRuyaAo1PTGbKxQcLzVBtGwagCSut2FGgg8i3BNwGnvUMaTX2C6KYD",
  "key2": "2c5zZJLbmnstb9CKBmfrjyT1fzEJy8P3Wc4SmjUrLsRkhYL5qkvpRWU5mUeZYzNKUasKvYgZu5zd9fu4dXZhJeCr",
  "key3": "3ia9Bi8RNFcL6kfMZyHwBFdRia2YA4u9GiEfh6eqArv8tHRBDM8Gp1STfzodPJD4DxP1htUSTBvEfa8qFoXi6CCZ",
  "key4": "5inZPr4wiqQy7vstYfyrXVLiGXJ1Lr2aLzytNE3PJMXhrGPxrTiUHWWs4Ygaj2GRnXpNb4DmGozcw4cwLbgt7zoQ",
  "key5": "62ha8znkxgAURBrrfru7yCjAq9QvTiciuat59GqL2QrSasgzUSC6zFMQwhveEmyPJdZoJ8KK1E4UsCoGp9B1pibw",
  "key6": "2d6aJypUaswHxZ4UwpnE1xZmE4tuRy42wDxbXtYtSScAMS4ebhnqDnfPXhQtuNRKV475xr7rV1LroygE1q6GMMiY",
  "key7": "49n7mH6rVUmyXtEXCXkNcnAssMmnc42TYPciDRddxAhhmKqV4MGAFhPebQkhcQyE8k6E8FzNWGZ6wx1PcXe6jhYa",
  "key8": "671wb5w9xKJRHySn1xvgtC8rNHsSBAVPjAPxvohuEtG1STtnSs4twy2Cp3r6uUxiES8yqbkY26iT8bW4L4mXVaLo",
  "key9": "2B5Zw5Rb4aRadud32xuA88B2fP1xt43eX1oU8wVtgbwxyzaMTvMm7c6ixVUEJg6f3GcVozXiCag6pjKEhwftNSPZ",
  "key10": "3vYsmKfL2Tmc2zLTxLhTv6CJ3r5AJJXz4NGstZsibpXfUj9F2o5TMDXd8WBcBubg4cWN5vNJ24XPW5HATtpjJe1T",
  "key11": "39mMJrURAgbT4P2fCct5BakfEVKejefucvTXNVDLSNfDXVVV6fqZ7axT7wenTYvFdmKhwjyj6JxdhMmWz6vjbMya",
  "key12": "5EHHXVAbppKP3ZYRpdcSbLQEx9sVBuDMFiKi9MryYuFgm4PjKe233DmSCsTysLbyTWfa2TpeFnCcb8ab3Qrkv3Xp",
  "key13": "4Q4kExeuqAMwq9vFVFouZoTvZYitvBdXJZMwguNcYAmVs32m4wMuG3rCvfqxkvLjgj26uVBFvtpxDUwdEFNwrww4",
  "key14": "pxFPyngq1reZa44DS61JNz1UZ6VEuqJ81gXWDUHJScfDMtApqwFrSVr1VtCGdN4o83DUbqDeTaCgpP35Xt4cFwP",
  "key15": "36qkZaCHNvPMGiGi5bQaHMdxcd3zNx2QAbt8cKsEWJ7gCgJAwATbFQHmaf5NJafbT8RAAobusBcfb43wvxofdKej",
  "key16": "Ko7TL8tjfTA8zLtnnLbkhEcog1AHU1hQtmXhRFnti8mSRKe2VcfSjvynSMDGDNDJ8MWfPLJmgECsSb7CF69tQsh",
  "key17": "4n34kmUDfLobGrnPGzeUR4jMtPcXUWTonQpByu65W4gqZzR9VEVUVVJFW4pVrv1wrWrbK6bro8xZRewSqeYLyZ1A",
  "key18": "4faoRiMAtpWj4Xtux7jQC3zR6vnni8HA7iagPhUoY5enSmK78LY1wb9YwJtFShitjprc1bceAUZfNARn5dKBMCfN",
  "key19": "2RL8qsApMvJoTrH8MKSzJwmRBZrAkaBPx37Tkj8gj7T79grmByRYR4CfoymjxYRGTqybzDo1h6zPnwUWr1PvcjQh",
  "key20": "5ZHnPLDCjM8bbWBR9MKRigDSiVegjS5tnFxWk1qouebAEyGjbSPAB2MWWYguXzDSbfqMZQxu2ST41wbXcjeBsJp4",
  "key21": "2A6Pfj3v5hiXU48Tzy5f2pNzVzQu5cRixLG69vywTp6kKvXLKnDgCvvLx4EATvL5191VaWsrHiXF3tLhoNsjEUjD",
  "key22": "2T1153JkhmBBRFrTnyD4nnK7cADgivXzwjiMwysoeF65wLFdcyWQWRVSzG1hDYRtE4RcS1cWbKAc7vkyU1EqtYvD",
  "key23": "VfVDVqw9mANdrTrPRkMhpTgWCSeCKkdRvkwtu3N3tyvyjgabeicM5X35juGviSAStrAWqf8Eu58v4B9c5V6e3Jw",
  "key24": "5TfoPigAeZLLWm71cL8Eoa1tQq3nnMabDsVqnkYbPF2H7hErfN1m6SP7uLvyRK37f2S37jJMd9quLXpirPnnrbaC",
  "key25": "5MFyycH4f14VpKF2zes4qrK8Zg9VVm5h9uQKSTHjYTpj7716YdxDCwE8sbkyyR3u6uJfiSV1B3t9fcH5pkitu5Hh",
  "key26": "5hQyww3B1NCKPgRDs1MnkoP7hF6NnDD7y1wzVyzqtCfWxqq1uJESCHzvryWUHcyLM73kDbeigAaEUQSTRQcJ3i7Z",
  "key27": "t3K6YcfYYGV5vZhDRmarrW9EKQMYdjgyj1oa1FAs8NQLsHPuFkZsyKB7BdXL6Xk4Jg3Je6dpzAmehKY7rfrn4hH",
  "key28": "5JPaBU3Z7zbFAVuUvd3vNDdyTJCme81NPqXdg5MwwBADkeRg3ERY3mwanFQFhbRh9ymSKyVi3iWBQBDycvqkZWC3",
  "key29": "2d7VaVQvV5TQ5bwAm6bz37xKJsmcJfswRCb1VgHfWGcU3JMqQLo4LgTCQT3vLWqUBSAttXZrybk9YYSNPDttMbav",
  "key30": "2XRbNf3vrY7RqS1Km25RDDa15cJTJHNk4gYuajbAZ8KgAJHYWq6wNFnccy2jE4tfnU8aaoC4EQsEurUgzoBbucsP",
  "key31": "47aD3hkyMK3A1C4ohJgb8XoJZ3xgZq41iXHwWMmvtujpe6EbwBjipkg2UkGGZywFirSgVegvJCT51pYss4sP2rTG",
  "key32": "57s5YAfabBroLMp2SKR6JgCtNmA6CG1P2iTaPp4hbX8mfpWT4ntR3m9wQBZa8Tm6sF8PNZxscoDnjn7ZxzdzRd4X",
  "key33": "4qtEebi5XfTLjdtm19n8MLTMZbP62MaYoLvFxkLHEwNEtGhKTkZoRxAoBuhtpAdJhQJv5vWqTrghEPgQZTY3wLLH",
  "key34": "5opLXdPgvFZvpqcqHoRiT8GoKFziVuLke87fd5D4KEHXuD8STUyFZjzXwETLcY7efzdK7BA8fQ9f5jfRNJ5duvJi",
  "key35": "VQco25Krw4WJ6eb8LVJUh2e9HEx6DsMtE5AbsSTAjxE9ANGRthZoVy5D4438qgnoBz6aw49gynpydXawkKe5sAL",
  "key36": "53eoKkhqxULtCtnww2QUQ4mM2UKV3sHTrE3gGMHC3EMfW8MAkFGf3yYfuGPiy6PnuKUVA3v8a2hVrxv4taSzchfP",
  "key37": "H821GXL7Sk39NWFJ5L9KfCyR6LvuvkG65mRbjNWdbn4qg5CuLsna4FhorbQ7uCAGZRyXBeJiMbyCBFxEQaVz1KK"
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
