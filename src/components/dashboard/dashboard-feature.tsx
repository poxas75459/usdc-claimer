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
    "3drRV1RnnyEHtkikAAykN41gbuQtC6WZZCuLVo9dwfWZLDi6MnVRUVmPPPkmGMftSAgdTrbhe8Bn6RrhhZEB3y79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AuTR1TqTfnCr6rXsBgi5TVSwS1AxkVfkuGpKVUdAMC7doHvEH2UMgWpdamXpCkgALRtXWELUJuSND4HPFAz1vno",
  "key1": "5aNr1deGBcE5ScprNBAzY9obxvd4qsHtcMbCTJcqWbXo4v3paJb2Hg7UeiWmf47mV8u9FhRc546gPXNUeYF7z1mE",
  "key2": "53q15CngMCUQJrpja6y9TBjekPiBQzmytYij8nNB4DUvwtdicUTxAvc11mbLZpptsGHgtdXVQpbnRJLiTtEcwcuJ",
  "key3": "67ZYLzZDzD2uUguieE3Bspu8AxTftfsPNBqGZHEfSbmqmL8a9Zuu5S6n8rEydDMmQFnF54r2tew4uS7iokcYUwvt",
  "key4": "5QD4dYxL5Y4MCbT2TsT4MfxTk9FihBdL5PoJSeFpfA61nU3z6XUZQGjGunthshhve2ibEbHQVwWC7h87XJ6bfWth",
  "key5": "5XN8eGMaZTQF8aAJXWa9soRS1FCpDpn5gncC6mK7e5zfRVZnnFUkFaoiG5wRkL5xqU7PP7RwyUM35xbxvGePLjvQ",
  "key6": "2B7BjdaYx6coRFuJ2knaDTUASGVG3Dw4xBnp5AMa6q2Wk4aPoWfoq3uynPMy71XEUSrRiCHa2gxV8zHQRLeiPiFF",
  "key7": "272mBvGAR8yT4uneBvtyBL3vqQyN5tLJT4TzqLF5Pd8K4NcVW8opGmgmVxZnCirjWEBAuxeVxQDSzNMd4hyWgNqq",
  "key8": "nyDDFw5vS9Dgc4NB48uMa2V7z8xtNVAuLydVxej9YMjA8sFK9vbKrKhZQqxjWdzhmg1kULLqbFR8y64BXHPpjmY",
  "key9": "4Sd5Hi7wFTCLpYmNeGuULfqNBpCw8TEtHSvmoU399dwsmyupNtHcQZktCs5aDnh2qovdCnsF31EMKpahW2Tm3xAo",
  "key10": "2gMbW2i5mgGzpPh2Pute4WVADHFAGzWxgsujeUeFEVHrWUiqxn4fZEYoYCkwzEvxkmeqGnJhcaYbRUJBm4AVSFt5",
  "key11": "52NJ6tFDCqTDwUKuPGst4orm12W88RxK2ZUJZ8hYsZZ471JnaCdVMYFxnUcWsKR5kMJNJ2SaW2PjrSX9FUYRyJwR",
  "key12": "34Bi918V24fLzv3fx6Wpcz1MFyZLuC5CKRnMsSpKW4ufq5nBj3w9pBuGqkvTZghRsHRhJNTkrgGkcbmhVaiEVy8F",
  "key13": "4wKFHnWY3hfPpCb87kBiFZjzxdCi4AGMeJHWpuFfoZbdm2Acyk4bd5GDU57SDXrDpbpXUJmgbaiK7zvqczNReFaJ",
  "key14": "o6maDiaXbaTXze8zkCNQkAGTrnEByThyKMRh4GDt8PzTpCrzRkMqvjLR86pocdvMeDxasSRHnQ1YStpRcspPMq7",
  "key15": "EVnoNoGBUsdJJRvTRWNdBrwNKNe5JfQdLu1RiFmYrosRoW1A7UJ8XzDx7oQ8bBkeBxVCGap18smbBF1MqA898p9",
  "key16": "4kyw6Kq6Q211MoRWqEUfikNo8N4PC2Te6ccQPyVzyRwKLWoer8skrUFbzAMa7wJSHCEx9DNDzK5c6EpKRLU7Xc72",
  "key17": "6NgQh6HewwzRf9FHatrygm8ZtsbEGvXiXAo8GrJJ79Ccxj7Y3RSJNAWCrGSREfs5cjqvBe7vGW5i4kojGL9HcUn",
  "key18": "3aK2LPokyPtwQC3by6cvmKujGnm5w75fGYjqFDUURHV6vt7QHgskJZPQJzQqcrn93H8yCcFmW9X4sdAqRx5rHVyZ",
  "key19": "GnWiXVcYR4UfD4236iBcEHGkAe1uk379PtZZ7bZ17QwakrQPx7uX6Pa3gZbyt4NQCata5Gxh6ZFgnVjUN9eojZ6",
  "key20": "2jT5YYgb6aSuYEHBMtCejcSarKdEPXR6MBLZmE5zLZGangmnNNVkgUawpHDWTsMDBChPGZ9Xs7gZ3j1x9qpkHnVJ",
  "key21": "5EAzXdm9mMyyz7zcccECK6hSsobNJU38GkcfLGpsz2KoJbB8aQ2EkeEZNrBTwLDSckymooCKjb8X6RgCbfY1paKP",
  "key22": "3pE8kMZ8fqAturycy5kG1uCp4pwnCEop3cp9EA8YDqVNiEbMdqhPAoc7Gk9qzkeCBoQycm5BHoRpbDLZgKBa8GLq",
  "key23": "L2byc6vrXGpndy9q6q3KoqM5HKwn2AdgjaXxZ5HYM8fYncvdpeYmrdbg5gNpa9o5KzgEN8FpkmajY7z3duMo3oL",
  "key24": "JKK4WPk24ShK17MGrPsqwiG9JjMCWqRFBFfBjp3LKkwuRtLBmbcDfDHCRv1uH9EgFj7CXMM7s8GFdD1MtD7mJpB",
  "key25": "5ZEecAZxTPBWzxGK3SrNQXG3r3NFsbW8mD3WA4WPspP8Q1UqcXZSJVwRU2oE4sH9Qij5p1ivP2casYtLt8QJzydd",
  "key26": "42KBWNvLSFsromJBs5ft849Wa3WR5UByP5HRyaT89gRE8zaLdrxKdxRzrDSq24Hbo5wGd4vQZHg9H5q82NjzSiEd",
  "key27": "528aNpm9jbTmznd8Ci2qwyJsEJGUEecifCzcGiTinyQHF2qkK9pHkdbgKu3DU53PsMBTFQJY133h1mFFhXPJUuJc",
  "key28": "58a2HccbP43NUDNRESbGzPXdczn6m8oHPEBdDBTgCpykmSFntnC1K2aZRyZCCm9sHd9ccpAALCYiGW6qmgeXiSs5",
  "key29": "2n2bfyjBdP2r1cbXL5da3zdgAdbNHpi3YgM9GRv8RjrT6XaunZetuSEmd2YaDrcPKHX6nvvZaXjz6pVqGvmtkb4Z",
  "key30": "5zTdxw494GYRLr1KbDAAxvDN9JGxgYHUGHqRq4agGRrfWQcTxVrktrn37xvttHkMmUbkKVb7S4ruGvF5xdqL4xdR",
  "key31": "478bYWcUf3pduCJwD2wibvQ8P852GNsPCNwaJokbr7KGi48FXcHdXusu5FWv9JvYW1aQYnMJ5VcN6XRrW6KAiNib",
  "key32": "3MQ7XaF6mBuz41MbQ84XuYvVtzSfjLsHeXudEeXpHDnjUx8u1c5Ktx2TSDe4dEhw7KyXJPKDQEiSA1PzNQjpjsyg"
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
