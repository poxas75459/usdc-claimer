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
    "3bccdiDPvwMM5qvXBRuk3W1SUNptYmRFCR9rTqLWz4qvM6bVCc2gmfwKjBSSSUW8U84NAAmjqsDEhgoRTps5L8Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPbtUdGTfDkmPu4wYcpDURshWtYNXvcDhiU61ZCvQvHbaZAQvwdNC46pjXJejxrW9ALbCVCuqaPrfhwG9tTgmxZ",
  "key1": "37a8nPQ9HJH7qSvxnZrh2CKQWUGPnXQBzJHGRazrsBHQpmat8L9cKxbCCpMXFbubEtgNnRr3JvTzMLoPh6gg7cjd",
  "key2": "56j2kk6igdLsxzzbk92FXMgjDvyySCWZTpiGt9yCDyRu5QmU4MKSr1DuU6L5Nktx9XVP7Bc2wnzVVDdqvr3Ptzb9",
  "key3": "2ruwP4r5hBfGZut5S677A8BVu6pmWXhfHcpMH3Skm61Ag79PUW1wsHmZDqkKZDuVdmDN3Jt14bYNpfeCyrPP6i88",
  "key4": "2Qkw7oeZg26yBx8Wo7c5ecE8SoASutHHV2aPMxF3cNrhjJinhLFmFmbJiKqUsSjHbPMF7jg31N4pHbubzTGfSYVc",
  "key5": "5UYyqPi6DgpBBYPER5Zpqqzqz5hebtRkCnBRRBDNu3CPsgaqvJMk885sgbARStGyuvryy52ewNstpYjevj7vL65g",
  "key6": "2Cvum7BRMqBGa7ttKAhPNozu2CZFm7dBKtwNuiy7R6YaRjNGxY1mvk6SGR7dYeDSr6rmQGQSM2bqREr97DUuYfJ4",
  "key7": "3LAwNa3DdWeMFAHSf61LDXkkEFyKeGGVtBEvQP1mTFpo388XSGGdJK9eBsjYNXe5w8MTsgxsRSJLYaGKYZDvsXTF",
  "key8": "3mBvCYrfJUC7MuH3uR7MPCBg6a6L54LY6qf9tfshvimjH515mfmPmJvzpVMTUrKYx2rJHiyKc822abnqMyu4E9Ae",
  "key9": "zZnKFFbGPVLPzP27Qh7h1yVKL55hYL9oUTAmAmdBWaJsT5X9guHMpuR6LFUpKYRUx6xLzryQPA9CHHKuYmkmpH5",
  "key10": "2qiqqr3s1CsVyVnejtV1hJbVTXRw7dzMScndVSqhrCG9FEdZmbbYEHivtWiwXYYk1ZEjfYqXBL8a66GX41bYc8GB",
  "key11": "63w92tqYzSppXMEhnxp8q5gp41xsdvRrqokd3gpx1crhvwbUeYBWX3NXrfALsMEJPrDvMxSE7J7ruYQhiYezdCMa",
  "key12": "s7fd2XfqpKnRawYYyWJUNJbgVfhy5i7LNapUcgawgip5UY1J8u3ASynyPHcJKo5vMQxG1R8rPL7YYmnXL3bixPV",
  "key13": "2VZ1H5Gabwzsxp6cHadHwWe9bBva4xTGmF2CkxzZ72LvMXKzcGos5gtwnCP5qPyQLSEbmwGQ9dr4wSoCLz86FrP9",
  "key14": "2T3FZSja9ohoKoPcEVd3pfa1x7gRPXZ5uompP5WgJf2w2ZmChKK9YxzommoneGvehzwB29Gh66dtFHidTsCKHEJs",
  "key15": "3XKbPoUpHnRwYksjhbR3qVd2CZzznsRNWvVq58C8iCd6FVidcrDsDC1U3z1x6oQMaWZfdjdCQkxK1uE86hw1zFUz",
  "key16": "3vgdNnVVeJommkyPsnb5gsmoteexVPJYRs8UD2wuD8Gm6xCyNq6fE1EYfsbNth2jF2WzjHhWWVgPqnmKD7a3Qpk4",
  "key17": "2k9oJLdQ9ST2maXuFGZmb2HKyBrPXjENK4SuyPWWYvWZvHHZnBoZfoEUkUomACG9mzw7KiF2H6u911m1E11mZaAr",
  "key18": "67DH5MgjC4TgHMHWJ547Ly5fDUDKMm7CLbFxLy6iwcqmTX6AqLtmAJ6ed5peRzxNoV3tq3Yboo2DyfPLWVz4bJDr",
  "key19": "3CZQ661hunCGKVEqfJpFf9JmRxWuDfvUr1GqspTyxSK7xtpzBFFVxVZeM24eckpEse5hoW3eGQBWEPoNWif3P6Cg",
  "key20": "3MM5D5KsbmMdkbF6ZYUX87ZndAaeEPmewnA9dWPwAP5gKkSB3sEpB4DcNczwaFV3rsHbGH7pBsrD7so4sCqy4JfM",
  "key21": "4LPKEhTp61joZimGHB5BAaGUTzamtDEzmn5afFHoY3qCe98pVstjvoLHKd84utN44oKHTUS8rXabpsUPTTK6mSZt",
  "key22": "4xcx4kj74qofaFCToqTwfN9UohgkgLCUMqsqvAfFooi4ZR6a1r4fRsscVkRUXPAGbtC6ZU3B1P9YfU9idJU4Miex",
  "key23": "3ccnVhrSUjFUrqXvwBsC8x8mJtLP5VYhMs6ieBAoEHra2VCbwdwzb1TRiay8egXSAiKHbRnfyGao45wmUkAsgBPv",
  "key24": "2BhW8Kggr1Jkb1xRfLmzPHJ6hwD1zWymr6uAVaRSegcjfdMuYmAG7iMgVr9MZZWaZJScRENRHnR52r7uGqSrzEg3",
  "key25": "2YswQhkpb1ZBPoMr45i2Pqyu1uSQ9hGaZu3WNgpkCf2ds6BsU3F2azahCWGLZL1ysfU7BmMQksfBoSybrb7wPQhT",
  "key26": "4i4d2QuEqJD3L3msaUQmekEuPi2HDE2R6PNh2mfTmtA5M1HfyNY4xkD8dNfsaViNb8mBpoMDHLqQP9LusNt6ijUh",
  "key27": "2S7D2EC779WgZmAL4fRa9H5fhxruLFoW2NQm5RnqtiAV3xH2BdfqpY9naMghPTZtT2cVLXEESjKqQDxrH1DmzLuP"
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
