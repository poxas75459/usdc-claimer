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
    "ymyvq65QV5sacSXsesNBqhen7C9ffhsvPFpsNUD8jVAKkB3Tna77tNC67J4xUTy7A7v19vp9rD6kXaG8jViB4D3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SYn1Fc23adsNsev766hmwxYr9qExYFDvYugNF3eBStUhNq7d8Y5MUFbbJYnkKATGTrjrcehVQUY4aRRXmmfTxEX",
  "key1": "2KQqJAfoynzMaP23wJy6Cz2QGPkDFpfph19yt68gxogGsdskcbCPGccFhkeRmuZNF8a6UwyQvejUb3EfSoTzaTEH",
  "key2": "3VQ81o17WVAboGoif23wJsXpyXS9ZtxfGAC1dbwgCgSFCEPTDJGsW9GTKKbyobjxvKbP3JvtY6XH6NTyWXf47CUT",
  "key3": "5CKcHk8rAVGMG7K4ZfczVAEwkFzLVEY7pU27wTXEuKHjL5NHkEwGQF1jqmapajcuSEN5b5rbZFjGSxYVpo9tzW46",
  "key4": "2VGyDRDtVToy88Gty8VwGVCd2hZD4k4DAFsVwDEkFtSbkrdyzKN17o1xD7QHhVHXFA5nW2uL1KKMZ9jfk94QRDNF",
  "key5": "5Y9eGiMWpoNyixqjUxERRy9aiy6GzfsTp7a7wrNaMDRFAGGutfx6HLh8NoYiJwBQr7KDmNy7vJhQEJ2vRSuStJGc",
  "key6": "4qJwjdMD4n6yqdtWT4KGt3kzfBskfS7VwVrN2XL3KRCewgCm7A8YtHiiKx31dcAKSSNQPXw5LTWUesHxAxtTbaqX",
  "key7": "3P9sUtrfAwqJBGQPwB9XU29baoUkfDMHrPysTEtbMGFH2H4RPMmyGGvwAn4aT4X4h1TqigUKTMvEr6DcnyRN4DQL",
  "key8": "5rpXXHqkQkErVeUPFAf8ssSw2TGTxGeSJxoMa7uaw6GK3igiTAMgfzKXXQ4hSfBHpHWaedzyYf3ATrdwGysMesVE",
  "key9": "4id5MTppLCYk8MZ2TDSHECbHdjGdVUP5KZSqRJLp3zR5LHaNWC3Z7eYsaTy7EZEJDSSjPoF7hqEPDL7o6yNmbuQ4",
  "key10": "49ZrupnmHXAzKmERJ5SpWcTc5Fhgy8Fmm2sG4tsYhZpgY5HQHJTE99HVmaP7JMgok1c4H8b89L9qmsMb742Nvpay",
  "key11": "3WiAnLERV76wzKiCTJ1ektPuUoua1tgtt9vYxgu4PpS8iCZNBtcvfqeJwoSQoqiBqpsea3rR8faFjBHVm4xsPNKQ",
  "key12": "3n96xgBES8UjWr2EgGa98vxGozifTwuEymvyWG6beUic7sZcMAcaHJpdt8uhy8zj9nopoPR1UPnGtnSkJY89zSsS",
  "key13": "3nmWdDvELYPgDv3FY4PmAzCF6u96sLzR3ELbFS4r4Hn6bswqSqyxrfq5Fv7Nf8UzcGmtQG87gjz9my3GRYs6rnDC",
  "key14": "2BKsRAbJdukGrztbyHhRQytXDuJjoP1DDpWbZYoRkLcF76x1M66UkAAVUPaJ5Ja2tS9tfAhawKHSXGx4CBhrP67q",
  "key15": "4ENjoUdHXM9Nnmaz55vyzFQCjctDE6DtjZy38sKHWZUNXTXpAZUszmucU28pLT8Q9P1hCV2fB7xMFWD4hPVRjN99",
  "key16": "3Lkx5EvFTRjmGdcK6dxvaZcy8ypZyCSVdNDLopMQWN6tzJS9sCYvP7iZ7DY64NTabrbnkvbdWLUQeaptQci76FmE",
  "key17": "5pMQBVvjHX9jTgjweLdf7rBFNdk9V9zsmuYUUy7Me7rrezbjJAhWTV9GNkyDEVC6xcrAeLs3zMfAtK5mW1z7t7nt",
  "key18": "5PH6TkquY3sfpbXTKq9SvsURbqFqYrq4JUTirAaGWKfzHmbrDp35hFN2Q4R9FbG2Vd8oMUtTWmprGswRHo944sGh",
  "key19": "3MtihqYqCG6e4aKMYAHUW8skfRTVk2Fk9ZyjFXRmvUceGdF6UkwiPDmctStwELn2MZHZD1duUU2duxEhXmBTAxD9",
  "key20": "2z2kKv81bNroXjwTzMUcBmg8ghovYuVJSZhZNexorDsuNSHbT6njqQxaas5s2hh5oc1VzH9QwKU71ga2wybsUTUo",
  "key21": "4mU7UbJVeinjto2FKY7ZTerd2Ltz1RD3y1DWYePi2cYo8p6Qfrg4kdvENfTYHzjtRKr3HCpPkvGSwcsP6V1PP671",
  "key22": "QgEQQ5Te81sjcN6kZ2NL6SbzwZRoSqEefKpzhu3SbpiDrc2LzxYKqvMrvPeQaARGznmTfphNPexucvBtnR1m4Ma",
  "key23": "4Wb4TpTGXYTt847jJBw7zFX4i7gKEZ1jsP1LR1DbWwzKzNZHPzjL8V46CcmnNT3PtNpmuaBrn8mfKPr1kYNkMr5Y",
  "key24": "3EXtzCB4J1NrUEQp8qQjsom4qGLBPEMhF9nuYGtBifBDov6w9B1s1M1Cm22pLPqJ4kifk3HDmhfhCJBhRw1u4Fkd",
  "key25": "5C3GtJSW1ZaqFitbp5m1n715WEiJB6pWd2Si3ZKfUFJXNiRVbxbPvYder8DgwV4kCshdbAc2m1estZzLidWXp8Gd",
  "key26": "4pqCgnjxHDsPTeXAUYssyNqABtSbffBYGJDFVmGZFyzVyiSgaW1DbxkXh1B3SDkSrWykEcBTVWhRU9WEBbd5TVtP",
  "key27": "3uJDWH95EfhkZyrs1Bf1sttr2qbKwWmsBdujpw14TSavTdSjWB55ojHTLURJrFp7kLWcNPSbV6RxEDyfEVfwu8rX",
  "key28": "2M2JjW1UvMB6DWhBNoPHtLN9PNxNtTdqbpQyGFzLmF4jjEPHzuwbH5RcXjuciMQs6iZXEMcDLFESZzftUAKh4QDg",
  "key29": "3VnLFob2LpscYmA6TGgVgTzRJgPJWc8D4mPqpGkbZM6ZznZUsZ5bF9aZFLJcCae9cUG7oMD9jaZMAZ88xzVVPypZ",
  "key30": "3Ti1h3hxhPWpXR2UGtYdwVyh2Po8wGrtQgXf1f4rABnFoJQ9qN3CjkVCKayq4DMDLVT74uVH7xyD6eXVGbdDuCF3"
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
