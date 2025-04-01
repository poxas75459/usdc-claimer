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
    "4mSd1W1aL3T1z6M5niaD4By5nW3FQK7YfZcN5rXebba56b7pgaxzZhtnUkqDMDZWzY9ok32ogRXpqEuRvJiNXKjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wSS6bsRGTNQzFpRDZ2BD7thJX963t1TW2asmNBdU2Nfa8dNxFKE6Dhmh1oQyCVh9BTzcwxBsHpKxnaMQ7EXgbvd",
  "key1": "4MDwGMFgpksscsCXPJKGjxQEM9bLM7zXU8cBrTvNhKM9C4nnL8jWNK2oU9W3gCkqdcz3BD3JfjrqfAMVJwxCfz5N",
  "key2": "3hPba2V7Aeu9PuHwCCYorWBFahW9kh5vafsakPhcH8pyGXpZ1P8y96rvKuXmKe53DcNdLFoocLG8LdgezRbxPgjC",
  "key3": "2q5bGx5pKehonjveJ7vV7VjHwo5oEm5iZMofADXRzonSeAWcV5ukCXLui4yXk158hhgVcwm8jWguuMwnS4rGPwSo",
  "key4": "49cj8kuVjd2GTjQsoU8RRdUHcioovAJncPFHJZx5gVN9XVV3VzAAEsfY6MwhKEoDa6b1ttsRG4uwYEoVypkXQFw5",
  "key5": "4J72wMMsaBUBvDHkPcokZ7cUcYjv158i3DaiUF9JZtYo7B3WfE185frFYpypK8Kyvr1JHAqBQSMj4fTnKVmT7dZT",
  "key6": "2LwfbbiLprycWtwxQWj3PfzAp1crFMrdP1y54RijBcE2y7FAwTL9Sf7xmUxbATWktGSNNGKauBfKzmw7B31GDhWC",
  "key7": "2sEk2hQh1LB6tNGnQRJTRr4xhiv3zcLwb6D8MNo2dypZkpGBQ3UuiZFADUXKQLWSrNwm61bTchbnQmna6NPvCCve",
  "key8": "4pKPYy6yaSCaa1h5Mzoq97XhxCcXJ3FwvjUpJbNFvt2xNmL6cwCLYw1tGqNwjsKSbCBQGTS29obxDgXnjNnemQPx",
  "key9": "5fSSoTe9rLDifycokV4reQ9D2P6S3yyUWNQvxK7S8kW13dUATMHRDTuNaie51P2epbbdx17W6jEQoTo1jcAt1F5q",
  "key10": "24ecKbpfFqfGs1XJeu6vkVddkQrV7GWgFXZ71YJVH3nQmoraTCH9AZrNzSKtGSTPVqxxNzpBddf6kfgqCZDCjoG6",
  "key11": "3yowAAdNyCZH8E6Ev9YGi6k8Eq74EhD71cQKnjpFspcQyM6S8QW9YZWfEzwU4KoJB6tmSU9AEURjAehEMYAs39m5",
  "key12": "ih5cGRoQ4Sv5UrAjLeW7mLWuw6u9ENyie2VoNFWdFVSSrR9Vsrhc81ENedd3NGgf2Bi7MLmEqpe9Dwzhscb5r3M",
  "key13": "F4cmmdqwgPi6tZUMGEhApv4hktzH1RRTR1hP5dc3yreneQjvpmy7dQAsCkrL2vQVUwTJ5JdP9a7BBXZi1pzD3rU",
  "key14": "3B6Tx5uFjkBzb9q8PHUto4sj2RYcSjrurkHMtByrZ3U7T3tPsxAWgAQ3npFNdmsjrzXCW6eFwD3iEM6Ff8PxG531",
  "key15": "PwAfVMfWbWG9kdgeLNn3vNBfPbKF7zRkWryf9Z6VN4cNR5aRaygeVFcgsfUgnncWuDiQ4zqdUjbnon8aw5HpiQg",
  "key16": "2Dtudyy8TJzr3g4XAuNCQ3Zgn4SyCUAB2MBcJXDLnXCYCtDtWkg4PbwUuEs7G5NxzSDErMc3AxuvkU5JXBVmHq8P",
  "key17": "3NpreMssu1Rohx8nJKgWS8up6toTB72T9VyudzwpbFJHE6sPmyHXnHNanNiNxPcvGTTww236EXUfhyayw9Lkn2FJ",
  "key18": "3sCZKqXu49CPCXAEiEAY6zUEyog98rRzAxE6dCXxYh6nrT5zCff1NEyzHjJdWZ9cbVeGCGeLm7hHWWx55gxR3VmV",
  "key19": "4uJZ4MR7QpUwXmfgZoY8zvXa95KNsmLySJZ3WjNh88EFfTZUjGrFuKQUB4VEDrqhwVovc17aiofoArFmZRxScQme",
  "key20": "29apmCnCJjTctRQr3qifHNAHEtP3Aidf1gcdf885NRYGu1b5PqnvcbZdAx7XFb1ChBQzk8du6Lk2kNjvB1341iFY",
  "key21": "4TMUq9t5JCefAZx8xExWThieprTfbHy53nGsKbAcqcLCtjbzrZFFt2KFdu6awFaN1kUTr4kGLn7ThB328Qnz3JHS",
  "key22": "2o8ZfxpGUcc7DrZ6gZgZ41vau4cnAGykxDewEYyk2mMQKQuTKySmohMMD2hm9fjAG2pwD9rdryuF1NrUzBdwqD2G",
  "key23": "5B4uep2iA6SwBzR6CPmF4LiHzwnrJ7wEqypx61FKd4ZQkN5ZQEswyxPiiRxy3JEmaSEtW5yUxAVG2cjSch8zHMf4",
  "key24": "Z5A61jeWsi3tBXYh4eaNUyY4sogTry4EWyFGTZ2Ep9Lr5zeH7Qn5uC75AcYr7FwLVwTu1utm89KCpJ4BBQms66f"
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
