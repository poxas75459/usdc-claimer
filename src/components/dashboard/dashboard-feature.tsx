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
    "4yw96UuWyzJSdww8CtjNMtCrUUR88SQRFFH55CqnhvhLtriJ9QZinL3zy1FFKMrUiEUbfFu4jX7BR7vG933LXyZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxUb7F19nKZdkiVQ9d97j81pG8XkhLM46vjiLm2wUHusRP7axyxGfsTobhzq9EM7skDVeCoRBU5a3pjsn2umAy4",
  "key1": "56pCUyN5mHSvK1yJ9Tnpef5cqC7xhdZxWQNb49qicv1F5jjqcyFvBmm4WegXRfk6tvgeTjijzKtTTJPXN4AKdcJc",
  "key2": "2hoc5JjSvuiev84QfXpfcLbALnADMCr2SNFtDyj4kH1TwvkCDA1DXaiqv5gRiT8BX3e6C9PoPd2j8mhMvKWnQoJk",
  "key3": "3NApKjeFBesUV2zfjKRWjpzgtarD1ANiN51rp9W9SzQDQBjYTaDoygUH5C255LsrkSXguC57FLzNC62UaQwSUbSY",
  "key4": "4RV7pseCY5PEfS2LyfKoeVFEhhCtgqTtqPGEpTBFcUTENhYkHXS9PJxS3J95t2vKgKSh5UiQjqDFsky3zaQb4HCf",
  "key5": "2RuZnoBeZwHVDW7Ao3vjrG2WFxaHQSgfaXCfReUkNnT3ghaPdVx2mc8j5WvHaaHCdwzyXgG6YqMr87Y8cQ8xXkko",
  "key6": "3xk47HZ5R6Fdm58yzHtbVP9qEgbjKVmG7NDrCvYmAkXkMtNBAXihkviHyTp1oKEYdUEgsN4hmaV7cRRRbheriMNd",
  "key7": "2NuscaEEbmPgLH9mPh2cAWkVQYN2466748kbeM7RinWTf4UpBdozURvkH33UYFnw1Nmvyrs5yYSYVxNVC9dV9HyB",
  "key8": "3PkwZJEFmNa8g7X1T1saa7kmcg2sdozUjFgCzChD3DnJMmMyf5Fdoj3n2MfFa2Lov55BrZMGdx415TJsn2G5piSx",
  "key9": "5oBc1ScdeBE4qbhJEwDDuxMnQ3Y2h4afsSrTBntnx1xK2mYW6JGmGLKoCwLGKR2WUpXamtyLSQp8wjpzMgARkqr",
  "key10": "dnatwQ8aszKTsyY2Utnkhc5Tyj3BK8fF4tmnTWpp9tMKYAyE94SqzcnVJyGRe8iVeykvWnL5o1XpwHUJiwKp7uf",
  "key11": "5Y9YRW4CwBoCwKtneD5fVtnBFVtkVXuDBWVAYgaEdfNxVGAoNbYSVMDDMWqptkSw1s67nCR3foscP68nJEjHF1sG",
  "key12": "5ZNt4EM5bgy63HYg1Pc8uVpVfg65ZS1NDNVhQtjDyNPqHFEVn5nEyhRcXi6br3N6ArPreytMPtzzXErXmbZZpUjA",
  "key13": "5Ci2oVRDQBgS4QK2eaaefJUFe4it3X1MgXS5ZzrvqTGrbKY3sgHtGpiSzCLNGbLWYEexGHu1TKszJCngPteLRTwK",
  "key14": "4SaUz8n2XMLBvfQ8jxigkWAQ4rDS4QdLxg2kP5PuGpiHbB2NkPVeDxGEvhc8McNNsTWbG9ri5tmdLmKbCzJxDbyp",
  "key15": "2xLo7JJ6HcToXLYnrwX8x48RgzhwjjWrqqr6pTKfc2QKG9y59tuaCdr4VXusz4919Bm97gzth1iTdD99jS3a2mRV",
  "key16": "3vKTv4rqhnXKdeZR77jyoFaSxWVod4sQbuX5rKuZj3SQkRPRodQdTZ1z7noy96TR2tfGXbeRcLJt3fv51AWPKGzm",
  "key17": "6WXpP5QRTtZfZN525bVjPo69wSUwo9kkgp7Gni1a6phpqxZVRhkeRppNgfVMSx8aLHGMGK3HLRBjHQ4mnJpysKQ",
  "key18": "4q71J8TPnFXSVsfS2NVDgbeVQnHUyBL2a1NKcxJhWiR9Tk9kpggmpsiiu7AJadEPMUZuHxqajcMVSQFwqFKwhp3t",
  "key19": "66kdTitKR4n1bcv1TMoc6jcVcaTXVszTkiBXnqExFeLDembYKsr4FKhBNr54rLVB27tULpFizqugb76TdjM2Aznj",
  "key20": "E3U2wtw9t65BDVaHVC3Hynv1BtrkHFEHBDzxCK6Lj2X7uMccDMK95SbaCyMjsGYXDh8FXRuHXFjwcFXqPoaAcPd",
  "key21": "51huGFaiZG1kRnhM3gTsPwxcQd7rSpnVMpYRZxdG3xS6fzXCbBYCM9bmVcCyMGVruZC8AHPeoCu1Z2HSFAdzyV8H",
  "key22": "4D6LgptU5oa43q2gcxs5VQ6pZxkhhCmqqQG8rcv6yVE23s1VsBQSz7oYBP9my2F3YFLwQT5EynXrRzeKrc9Z8Tdi",
  "key23": "2z2kZGoa7ZewVfQqEW2zCqD2QtVSocyHmxagcs7Eb5GNRmJz44BmJ98Y5FSE74Wh7qMA8Sihgb6CgHmAVruAX2Xw",
  "key24": "4dKea6PxB4XA4RakvTnv6JamC9a98xj3NdbxrvMvRKRnq11Xk7N7B8xf1rGgcVhELJkSB2xkBj4Kg394naed1W66",
  "key25": "WmUXoVAT5PR4T3KqoxGNDwvE4GKcvuR7wdaBs1fyfcz8E3rEs9ezvJTNELPE28hCqGxGfsjdJHPNvHxYsJQnxmJ",
  "key26": "2xLwTArYf9vmhyZMLSiS9XD2SqGh8ZTCWe5Mn1AhNCY2YnHG4gobaa1hnR8XBiiE1qC1uUvnw6KUD79gGpnttTc4",
  "key27": "4XX8fz3HpxGcN36VAa5TE9tHE3YAwo7oh6oAvE5t2PNxEVRx5kGYLwnDLdaD9EBnXouAgdg7xkQN4Xsv3Bc5nZ3o",
  "key28": "MdJ8higjWnYZJST9uq25hxf6EgGXhyvP71aMmhoCpQMY3FdSm1RC9EVQsNMpfTVn4rFF6Szz8mX4NoUPMvr6CSn",
  "key29": "2jfJqN54WmkVSHcRtw7MKPrbHmqeQy4tSaXEfqrw44nX1q1BsPXZn4pLFSvDQCcdvRBuWKeBJ1sUW8VJFmfiSUTw",
  "key30": "3JvZZ6iE8TEgZSXygSvr1QEzZYEo65YaPyiiouGmuB9nKujCWM7PEGqsvsTGWFZFNhN8LRT4HKYqQtSk7wET3fmq"
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
