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
    "3LHC745oz2488MmpEzCLnZ32HaNfLS4bK53vJWgYdr8LHcLok7yGtFs7kSrDKkoFYgCzaPvKsECtM7RCqtaNhHsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tq8mB4im9qW4CX7xk8wrBwzjkPpPe5ai2ivC6T2UQcAecKeP35kjqru9VrbwwXGQqzBnKkooFzV7BKimnndju2P",
  "key1": "4sq9HURLCjWjqU4NvdNANDDPjxrKyNQS7CxrFswbWhMtGwVZ37CWK82yZhUcG3CjWjZfUg52paXQo5CHPHpzZmrK",
  "key2": "59tkk5QRTMKqip61SJ2FsDiugUgvtbqgwnKo8zrEERyHwnJWDbTFm59QQxyThCSTGYNjoMabJwjPhANNJDRwDehQ",
  "key3": "MptdFPyw6KAz2rivbVQrqhaBRTXx4Bx5iScQkxWk7pW5vcxKyjzDcvAig2AhU6ZH1G1UxmhUYZqfkasXcxX2jMv",
  "key4": "3epWZ9TVTPPbEDJiuqbVPEt83q7djHQ3f8G2MprXVH6DESfPudN4229aNNKzZBoXB7JdJ8KUvmKWrPeRom2cGcta",
  "key5": "3idFAx481TW9dyLq4oyR4BvhEQKvtvbVPuAAvFnvEnyu4CUbWgfrV63VujMdRqq6zkT9vxH6hQuE3ZzxnQAzD39N",
  "key6": "5xxwDQQKZbcJjedZTRaKNguPy8vyum7pC2Vap4Tz35SDbScg2MsatacJ7Y9D9oTmS3XitrqQFRSkg3BRgb6oaF2n",
  "key7": "WQykch1hRHbVMsHGF9CJdUTqGMRT87tbNS7cZJuLQrrKPgQPrgDtjV5Ju7wqT3SbHJFZTRJw3JzCUctM3XQjMuj",
  "key8": "3s6LzouaNC1ZA7mf6wm8LG6UXfZXuULEqHMPN8JuuxwNAGbFY7yZjkm2kY621PPjXkooR8vs64a9EfcAqK99N4LQ",
  "key9": "4eEMPGW7czfkJpLNb5V6HKZyHL4NyH29qAXTWtss9jzkrLzfeRCU9EAsVRMe8bVY9NEevPTzaKf2a9toeei58882",
  "key10": "5QJYoj3CtzCpXboTJTLom37zRBAF9TLww5xqikKxGZ2VsuPpYtg5Qzu4nTR2GdWaihoTabZpNY9Fk7FzY9pETTnv",
  "key11": "5dsX1PXE4NrVaXPtTBWkXwmXkQGuZWV9pQsTPFvd5ToQPLjJwxjncTwgczxHUwwU5KzkEXwHHkKSwTnL2wUd3cwC",
  "key12": "5ikG1CcPjCPNjqByLHtAni62e7sjZKhLBaXrG7xQuwtL1BKLgN9zACHCYLNrmLyePNfXsLwdXmYYWomRXpKgDCLg",
  "key13": "599LdDSguZ5mfxYfFBbXDcQGZwnyVfLvfowqFej1ELSHdwrYwLP7BNvXx5ygiDnSQPCuGkPoVZTMVkFESX4Cu9iN",
  "key14": "33nbmmwwkvC5YVKJDmhzgLAik3HLSFp5yVWmGpZVLg4XpeAKf1T7xbu8cx8e38V63XrKbiP3cTW1ASEaxopHGciV",
  "key15": "WQyXAM1riWTFG5Qi4knv84E7imTWk6uDQjfHPjurfQiyDnxjnJMssty6bvfTxTcA4A8FCJdXLL82UmrzLUzogpU",
  "key16": "3CFFBNLkQkKyk5qtMFdy2PuPy3pcJ45rpatDWHKoM6yTFk5zn8RuMBdHaXkGMRVeCrcpPdcAmwgwZvqJcKTwiHMM",
  "key17": "55EF8DMYUjPWVjryHUQirWmBML7Z2zHajFsPbMRnitc8MrAyXdM3GtiXgWyZze7P6jPTgFZ1Xp3WAkqGHCFt7uki",
  "key18": "2tH3Zyc98eobsfLPsYZhdEdNg6QMxfP4Ao69CqRAmSG3zcdp2mQhTg2AMWbobyrhXXiv53KeZvp2h5JHXEYB7hWr",
  "key19": "pNMrSn18tc3kr3NtvMTDqQ1sYT2Fcm6qpqcJQVxJ7dcK4cq794YNkYCmMPXYMojca7fHSn3VsEo24uquZcZHkJt",
  "key20": "2SAFX1UXiT7Ed12yJREASE392BpXXmimKUX3H9eNZqN5UozrPmfBMWHqgypGajckAM7npcYdE3MN7pKypyTjx9Tm",
  "key21": "2aa1f3vMmcUApEA24fmnMADHnzWoebaUEPvitjewZf6F7sEBZpHYd3VNYuFdNNCnCz1NqwHUVXXLZFibWB1RxnZs",
  "key22": "4qDbEM9sfNgvtC9T84rxpHYfo5RPgz3bXDqTWsRiuJZBuvCFFt1Vtd1P4Jz9eRiFrSxBbXez5h856hPJw7xriFhA",
  "key23": "4oyWDxD55sAHU8DfRD1R43SCsZ8JwPWuDAMWawj6o8gVda79K4ZLSih7BhCtXmtZJ9pE1oZitn8UhycSk9X2YbqW",
  "key24": "3Wgw1BaG14WwLqPQ6dgjbTJadUogdYXTAckwpTVtTcwVvynosnUq3xPW11jn7vxFacK2MgDLNo3Xzyr2KDAdSWgt",
  "key25": "66UbZn7hDizKKHfunFNkQRM1r6BHYoWiMhoCG7EhRw3SkCtJj7s3zrZBb1zGWkmjjRRUSFsbwzr1pS2bCaJMA3oV",
  "key26": "3dk8vdcDZgRsMiiiRFq2Emq1YbaxNibBd7SHuxGf6zDZeK78cuinq5eLQ2BaSL9rYZL41gaYTLopNNNRriBUBGQm",
  "key27": "Bg4AhQkcuEPDb4ezFQWMXxZgMNcZ8FZPkt4sA9mt9yRtDjtug4XqvqMkdEvcyidXcwqdBqeS3g5edRSMoXw3TCP",
  "key28": "658wbcZHPXRNngi2L6f8J5TkH1rQCWETSeYUje4AbSKZEHFzrMPKA3EtnQYXPNVQkPmdaijmvaMsusBfcS8DJFVg"
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
