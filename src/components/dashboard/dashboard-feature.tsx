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
    "636dk8bm4RyVWW5nd2skR6N8uUTMRyQVKWkze8S1vew3GGMiGmKubxk5kFuAWZAEfMUhZgeoBNBxMJ31Gq34EXis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J2vpj2Bpfc2WJ4WW71vRGMRY5TwmfRx5n6uro1n3Ts1CSczy1gUbhX3JVnjLYqt74jMQnhx6pAWYd33KKVxsbCq",
  "key1": "2fnhVjm2Vpm2S3Ju7omAhYuMo2DN7j2qVYS1J4bEuwZ8rEAan4tZwfmtYo1owprDGkkQ3FFBYoJLDa44L61VNkAm",
  "key2": "46CsGajt7GYfmBYPQsfnKijydizCMK5kDXR73NqoRh9L5G18m8NUe7YcAj1tjaan9j7dsxcLVGRkeWKNzUMhcTEt",
  "key3": "3u3X8DsdB1yCi7wqCdBCEVftqHwK4y2FqxTx8sbLTcc9mjRN4AQbmNKtCaV2aXvsZRDafwvvuKsJeZLdtVXFZmKi",
  "key4": "5biLutUZVbWqLf5AhkKh9VjsrA7QCJp2xSxpYMR6k4kzj9khDin2myYJ5PZP1sD79fzMbGLRZHhkn4rCSFuS53wC",
  "key5": "iyqUhpQPLn37tZKBvZ4ppuWUp1P1zmcB1JNc9fAp9hGNWKWWptwVDP8q1172Zazo1fkpMscZ2z82PDs1ohMh8zu",
  "key6": "u84M3ufmL4JRZ5XXjyA1Vhmj5qDXd151VAxLJZkyG3daqTgHydajpijDNh14N9iit6yS63iwmGLUjZcMkyAvGpR",
  "key7": "37j7Lf3CU3h6skHwrgsMiHjiPqpMtih8DxmtDwzafMqdjGeAuyZ1Xr761JCVvno8ctn4zxzyCbbFouJLM9YUvrD5",
  "key8": "5qvUPY37tTznFPeSDXBJVCE4A4M1Ftv8rnpogRNR2BtHWngVGX9fKcnCBEi48DSZD6GTva7emNrBu51pLnKn1HLz",
  "key9": "dUmpFmeUfTcg3eM52xC1EXv5UAJwYxyZBoEEr484rbJbgVRvUZfgkSQ6nEbNuzpf8etDm2PH4urvATePgQtWoRh",
  "key10": "2euc3f73b6PYPAibViP4PFupSJWSQuZLjpQMY3Jj8QF2WoCXXk3QiyHNBMRUHR81QbJ772DrYoCQmJpXHriK2YoT",
  "key11": "5tL1HYpszy7QqVxufgHJbXhUbozTKPNbmzbGvJrCeFFy9A9tD5MMgqzqkAagQvZ5NDT5vn2r6NznS39h7LVWsvwn",
  "key12": "3idaDuLDS2a99Hr3NJ9zTeoQokDPdoncevr6RpoigqWQxXsLmimhxGx4MMpoGmsLAqrXjyMpPNtSet2AuZUpCkuQ",
  "key13": "3wSZ76nYCxownbn1EkDdUPYXJxYaAymAVdntLtrNv9thvq8XtZP9wzC9Re5dJ4xtX4bGzmQbjen9rtnpeVkj1Whb",
  "key14": "4DQ2UEjXoMN9qofje1hVhHeATWpWaUnJgoBsPvsjaPrxsMyRfUE3YT3znudcHJnoc1W8Dyr9NToYb4sauN2boLam",
  "key15": "3VNSFbe5CMLXLpjL2JXaAMGesfobW4dDK1Yc5omTLC2ZYBm3YTTh6WdSuKw175Doi5cK5ZktBgA6TYmriqJ16Ep6",
  "key16": "5QVx29pcFP3LVx9DopDc2HQh9BDQpCciV7YmbjRhNkXZbrt7GHxjfk6KCRc2wMxc95HATmu6SPQraquSQXz73JpG",
  "key17": "5AuxXN5rZUmkS1HSAMqUKewA67xV5tmmSeP9ErDymXP2xYFwzkHiCLpngY6jjGTMfsitMSZWtWpLWsfGHUa8HjhA",
  "key18": "3auxpEKmF1Q2fwVgziW9LEjcBBnJHMDQ9oVZL6CxAY28nEHULEdZw4NAY7nY27ep4g1sDbt6NcFeo56P9Fx4DCaA",
  "key19": "21GKDhxD3roJVhFFqAS6pzmLEge7UfaS1ktWnxAkqAGG4D8fif5Z92P5XPraYtjy4i2eWJZMYVBaF1ZMxkAj8CRd",
  "key20": "Gh3tCJYe6hR5U77q6md1C4ie8a4S98x6aycy4oYh2GdRwyLRtPUTR3SiKEXrucQJyeeLUaZTnHwZgjABZJytdnx",
  "key21": "5xJP7SS47t8HdF6kdUHJ4asa5nAAb79atBb7kM3nVU5DbbYP2JotgSWWkvmkq5KZFhJXH5rM7uVh8f286HULNBtB",
  "key22": "5SgUS5tVoWPd3SQqRQ4jq4mfVeAikeeEVcEQxqzgoFE3fKPcPgPpqjrt52XWjSjh1yUqn9oS2oUBbBP8GJGkHxLz",
  "key23": "2DuBNUjvikFSr8WyUmAZhD4MHBCZi1UjcfxxAbMLUCNshy4v4RM6UjdmU7YWA6GCTNQ6RuUKYFCc7wkhqxT7ugQL",
  "key24": "3n32GvqUKEaRp4JhV1H4BURxztfcADfMGzwTt3cXZN233omim9ThZazfmoVSq3jvtpCqUagi6TQjfG3jrwqjsMpK",
  "key25": "2UwvUcyL3Pt7fDKenx2sRUyTpTRWPyggE4b9wTc85QzTnWVgxkd65zorhE4fDGUJ1KDHebocGP5VU1qNLPV3wGNG"
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
