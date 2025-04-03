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
    "2V2cgYfoEbZF8YYCVY4J4nMCX3Bhxe5tFAGaEoLMGfMa36dkUXEzyUPCqQyjqELEBia1NpZTkV3UmaDkNpqgRLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NUP4cCqhWcLpo6BGaqZqWDrmCQxAHn4TuMyVNDZYbEesNWPYJUCNN1SeTAyhb5S6AaSZ6LjLSDrK2T7BQUwUTj8",
  "key1": "4ee4htsCuTDJA6ZoBs5tehnnY7FMR9ApN3VgGvbGwz2AcPXDYiBDb6PrSRg7eFc1RjDaCzeNVj1G3TCxEj2Qkn6V",
  "key2": "5YGWtCPmvbEWontDnivx7jFCnKRg42jTuufpM8dxgUbEJp7nk5RvyFMg8Fob8mG9LxN4NYShsaB4qgXMMBfbKAxX",
  "key3": "5Qz4FM8Dk6a8EJxufi2TTRXZTiBAkqQe5Za156GkbKQkfrVsn8MG5EXzRpFw6wzo33eCQzKb99rjQPMgY95Rj9S2",
  "key4": "2wn3amXGDEMpErqmDwZqgtYJuA9GbggXgXgWVEhCyBu5X7Ez6NCv1xkjk3NcVZcqDxr69MN8hjaTnzfV7btv3Dq5",
  "key5": "2dUA9fPuphHG7iaPzYg9b7hfjURYXPRj1XQPgi1epUCaUr38JuxZjS6mbaKhA2jPZHSn41cAyL2vyJsCYmzrCCGv",
  "key6": "3bfdUuS25dQ1v6PLhhbvJL4KLJ59Qgc7ccFVZVum1RWsTkz3izdV2B1E3AEyTHiZNHeztY6RjuoZtY67vFBNiWx6",
  "key7": "3xkzC7HNYtFriyjeb11m3exm2r6AmtJazJYsFpfZET3unBmp18vVs9kCaCKjYSBuFLuZB9gNeYRm8q4npUfdf2ke",
  "key8": "5egDf6cptTVgP8nvkYmTBNTuQ2hpHzy3j7nLbsvGb6xC7MCL8uNRutFUU6vgrtdNJDVHeSQRQJ1UWdbrzsvsw2e1",
  "key9": "3pFQEys2hEk6eS87bp5XdgMKEiBQcnTJBnZghxqUJYksgAqQEKZTdCd64WMz46tJNCBajFc8qiTab1wpbpvnhHJV",
  "key10": "4rTLgWYVaD5K77qVD6E6QW1pMxCSWDrxoTWY6WJynzMMvfSLU6Y5VXKwXrjvboA6WCV5VspXp6DuYHq25SeryXzN",
  "key11": "29CNYCHTJCyZrDmZBujRWdAk6UQoZimhQB3RgcFKXKLfTgonAPYZ25hYQyLFMKaqbFLFNHueA1tm8Fy2aGygoizR",
  "key12": "41cX6mp8EWcxmv8QvboJgNvaGjB2wfz23EzVNh59feyQgzwXDTkyD8NJ4isPBAJep1nTvZScHxpBrFZjqv4Wn541",
  "key13": "4WkYoBnZW6XWRVDoG5gEBceB2HCoL9WRSGnMmXFsQPbFinFQE8nUeacCfKRTXBvmqNDk4NGQjpHLRuBijuTnL1Mj",
  "key14": "2Y146ZRp1UArDSXbihP2ryBjvbT2UMaYkLSkjbJ6rvgqYwSErqYVKKtG1nQ7tYet5y99UEgmRzw3SCa6zE2uviBR",
  "key15": "5mFHqYHgEAwNzqzJdpXNNALEwfVvFWWVfijeBpC2UoP6gdCNrrY9fafxw5TxBU92m7mkjbXJX1GpjpY6vABCi7wy",
  "key16": "65boD2MuwbGfh8UocZSKm4r4N98JVTmMQx7E6AczuKhymjNGaWr34s45kknANFBuQQM2JQ2TeWv7Nyrs6UUWjBvM",
  "key17": "3LjNRd6d69JG7FAzaA5ibKaHzNMsX4CzRGwt3eaHv4sD4TJBtmupyFBCKzZY9W9q1tmatRbwHs4Hmoukp4mkbHaK",
  "key18": "hfzSbcbD9Yvy9eCJUDMnMC915dSkN42JZXtduG6UprkPpL8annX5AmGSQ5X9xwJvoGEmKcbssPgPitEXK4sDPHA",
  "key19": "5cMLkpQzaPpkJ5KxfuLVVV2yTNfjH97UM4HsmqJ9X4BbWfxmYPv8vxPJGonWo83F39U4ScbLC356yQKD3vPAfuar",
  "key20": "4sTsXJPUhnoRdvrsVutd7MnFDy26Xz7VczrdJuhZeNUmhg8fTSupZ2FqaHsCZVTbBvFqToTCkWJxoqZpVXxkw2fo",
  "key21": "2Fp8E8Py7RhcZDGiJnDw4WcnAeTVivnbkT6W8v2Rt7SM3gV7yp635ZbGuyRSvbCTetngwyckyLLBCsUEL1qWWaVV",
  "key22": "4DdGWWYkTgoqVh3TxtmtnDB3GHpw63ZPoiwTHRUiWJTVfXPPRhCKjF2U6cz6GkGZvC7uPWBBFRngrUgWrGj5tKEH",
  "key23": "eSR4bLVvED88nspDkJmBYV453od9c8h88NyPWJ6tGtgm6JKSfsBgUFXLEg2cKFrYfDoKgUtM8JdkBh32VxncpzN",
  "key24": "2RkbeHqmr4PEjFG8E4Ywr7SFBVMK9AzxnFsDG8TXsxAG9bEf1bviVbDApPJEfGSEHDi9iYHEdXTroEPwT9pnswGo",
  "key25": "3qkbbiBC7eEQMHEeDUqtxWgiYAEPuvdfLszQ9mQaY7zkviGp1Gw5LCvkL8bcbkPWJoEtSpFbRKmDc8kggGVou9fr",
  "key26": "52SCNaXnWydvx9MUHfMbf4pe9JV1A42gYKqFMmJpnqu96NQkDcDxwxhVRyCqd6F8Yx4HEGLxLuKWNG7uBbkrAH6v",
  "key27": "5PQMpeZGQwX5omkjTG9gvyXBNJYFrinCRUYCNPGh9UyyjkZdKJMNsvD1K4iQP2Bt8UoGC4nrXqUuSJP4R8NXH71b",
  "key28": "5uS7G1A34g6xhh2Uch1Bqyg6y9WbZAKaB5LMgB4oRswdgRDsWZcxPAjkgiCyzoC7nDwMaGZtH8rQky9izKwS7iPk",
  "key29": "nTk4NhrU1twCEgkPU4wBhMcf8ouYJwyA7J1NmMo8rLd8ckd3fajXdrar7giYESK1RBrEpBmmdK2Sr8Rc3AbnjBk"
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
