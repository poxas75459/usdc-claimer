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
    "4nmLrT1tPWbdaiBk9pHHsaZcaGYcWFuUmgjBsznYzVAzHayX29ybjeSteDs8mn433uxbLDYKLRU9wk7Rr1mAPgmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46BvrbsHdM2Kj2Q8XPkWC6eyZjHTPCP4d1g6HkWPRpZgULJpstE86sHC6vT8vUTbBF9CszUx3F4FYK27WPewxTYh",
  "key1": "24RC6NfVtfhfxsnbYgvmEyhFxD2SrKtyJMkwLbjbByaS6zvHZNuStQWjhLE7jr4kCEBAj25aFBxaQskMPo2UAAYs",
  "key2": "5uybnX6HtSfkXXu6wfrGNSHBsS4vARuqPTo3bDsfkj6p57E9ZGxn7N95CzmhpRNWseCvT1tP9WDsFE5trNNbr1NA",
  "key3": "4FSgX7qQkUunzAtoLoMB7L5KjGE2wnBbAqCUMTN52ag7Hysk1zJ8CUG2V8qCWhdKCTD8VYVsojzJczaqft64AFTX",
  "key4": "3i4u4wZZGEMhG94eQsyhLvATbwD2Hs2h36oXmUKRvgPewETpCgx4Hc5eRtjJSMQjFbJA1wrf4JSDmyzR4WK6i15V",
  "key5": "3MsBceF1jvagn4UEuzt9mHVTUaceiX5S4oh11ZxNKoeBUdnNG7i7qpTYYpvRVjFae4Pw8b7zNoCu7XBmcjXoSLvY",
  "key6": "2CmkZtwxKUoTGHBCm6R3EC94c3sa4cZeXsbbH1eRZ6KEBmtAMcu5hduG16WyvkFqK2NsLd8WK5vAD2ieB6ev9zh2",
  "key7": "yKd1xsFo6TiLTckHKXJr4X7Lwfyb27wCe8rRyXFGNf8MPF23AEhvc1ujSUw5dM7z6fCe1BfaB3jWwMuQ22Hmafk",
  "key8": "oBwkLXwX2eYnd7mga1ukeK7DX6HUijmfCkJpQprvhcdTnZsUTFRXrQ3aR3D8gAeVhxTtQAWDwSQwBpy7T5zgpmm",
  "key9": "3G6a93uLXcczxbjqaTxzy2kH5XBWrHu3heAqPH158G6oqXxEp9GhkGKgEb7rQGDCKgTsf3vLgmv553DePcFzzmjm",
  "key10": "2FGjjWm87VWatFXsPnMG3gZEMXsB8Y5pJCQrm77fXqCwdLgqaqiy7siJ9zpJW2R1cVzM78e22xcXFrQya3pGSkVE",
  "key11": "yyyYNjWZF6hdYmYUxqD1r5CYyggpUncrurwuPY6amJCsPhRWX6NqrGEk4zyXc1Vkri5N5fwyEJYV2kLXiSymaz2",
  "key12": "4r8Trz9kbqNbrEFrRk9x8y36JRpECc1uRFEeR1L2ZvyJVm96DnbZXhev5UcaAdUA1SuPYgD7fPLbjvYPVxRkdkUS",
  "key13": "tdaiExA8nLLuT8FUeDJ9SXTEH1dsRSAr5GjXXYGWhsbseYJFvmNBrx72wUJVZELavC41QRjTpoHF8Fzoy7DVc1z",
  "key14": "4yUz7gDVUB22egzBjmEgQ9e6CcuadkALigWSpBoEb8c9GacqTnpUb51DJhpEvJbcw6vNuW7SG65GY7rUMR1UuMbX",
  "key15": "3Z8EzuGCUg3m47vQT3auEaPoEeB6rYgrzZkUyW1x7Ss1PVjK6Ybnu8QATUqDHk1qNPMqd77Yv5jQ734rDgr7Pt5q",
  "key16": "2i4YoFbWo2jGGnH1ATib5G9MsGfeQk8hCJn6LPsJr9JVqcpDRjRayYbA4wfBHebCm3Hs6qRwkoYefGradet1WZbN",
  "key17": "c2yXfjXyoCBeef22jfMQvyVs4PKBq5RHWY7RbLCoEjKvetRoFthPfdCVm6TEab5bKYZ6sz22ECZ6BmdQzWf13Er",
  "key18": "2ExrojgVUheoH6tbQzfj4RjZKL4112uNYcX2PQqb3BbGZkgJMjC1u2nL6RXTnweHaZFRSTMgWUrUbCZ1xvxhnwkm",
  "key19": "61iZTsDh3QFAdDJKKzFPoSppB4uEKygVp8Bd7R4JdEkq45WxxiZeCmtjN4NrPSGbopdiXESERBfaDbqzy6CmHKUx",
  "key20": "4mTZjkmsdASGGmHDaEbicqCG5dFUDoQBAEzf7rVuU6Xaaxd9FqnbTe5xxEX8r8hAyFZQUq2iMUxiKr9SpXMfjeGW",
  "key21": "2bhwMXnW2L4eNRwvSh6re8H8ftj5T4S4BoLiVbt6UMfWXKTvaisuQiaAXh2fokrxm1zUxYMjafJkasczBgTcWnwy",
  "key22": "2EFEojDkGKM4WdUbuZXm2RvcjjCctdReatiuqBLdBHhqbL8oiNJZYA5H2VtZt9R6c4S5hvWmwonGNiMrtEnH5oJC",
  "key23": "5EB83FTWCHT6qpRGKdctkFFNZic58fQjFd7DJJm4Af9GDvwzxryaUda3QyTNLYTfyH8KvNMFHfctRyhbqXv7PSuX",
  "key24": "5vsMzHzBYcpE77oFdfBUdM68EqMMeNxFqmxdn9ZRYemCtbjmRJqVtCnz12KcycwkzZ3nops6VLidMHSUWhfSC5Mu",
  "key25": "5zPxgZMYR6Zcxy8BCQ28a3dzBL8FdM1ugbtiGnPacz969HXU5oaHfrp2wTEjiWXQjygbnoogtgXTmRVQmEwYSuKZ",
  "key26": "59aYrnpJZ5A1mdP4Be4xs2GEBkTgmayrPdiGrgvDDgFhjTecAKuZYPiYqjcLAZkYofCs3aEV2WzPPCM2xLtP9vAv"
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
