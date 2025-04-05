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
    "26MWBaJ7xCDCbahMLHUywYmE33AP6ToaA6GPs7ueeh9FGbbfxqR2sN1HTzLzmPHdNYbUeRpNCFs7edwoWze9tZry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8fxozwmFABAumrhxFTS3h48Gx5SU9FzCpyBF1w38yCANHUMT521aYbDpVB7ZJU1MCvHk9x1t7hvL5fZYQiRhoQ",
  "key1": "5sVS2M78jwkKiKjSDK9XWGihKQbNVN1tGQ62CLKSm1aCDZF5ytPQoJbA9quxhqwLLMFB8cCK48v4xwvxvzLcUKxF",
  "key2": "EckyPKgvw39satY7BbSVfGUk7o6RwG6HK6nQjF5LJQFAjd4sv2DfyZAfsTfzKPZNG5F1ochb63RFowHjLfcHncm",
  "key3": "5vQiYvBWcyUnr1kmzkeZYzhfBN7EyqjLp53WAtf1Q7cJhaxFPsfQLgHcFqyFUKKWQKrYYMbeYSM9o5eVwg1JebNp",
  "key4": "3oqa6YHEoc9eSLo596w96o6vEqTfdNwNpZY8SsV8RKU1vMVDb5z2Xi7XWJRHDaZ3LVRd8ynFWzEjMvzFnXhnTw6G",
  "key5": "3DXa5gv3dXsJEjnDdbfugdBu8KK4s9Pop6HceuZ2CNgmcS2Mk41wKdLKxcuLf8XKRLWQ6AWExHn33Fzr5NDZu3Fz",
  "key6": "21aeorCf3fNqN7G3rguBMt451Sb42iRamhpQnoNqdqRLMyQ6PmxpZTN3MQpsx8jydTzinGCeycJAPi6D7fPKxEVY",
  "key7": "k9CPatkXJTJmc7GMF1FeT45A6WeZGro91wE1rFYeysJGfaXx13DPURC7uRTnXK4dqmDTy1C422i4Hxfeuq2CWdj",
  "key8": "2MHpkbDbFDYqFSnUtQTxpUaS9gTxeQvFaM5nQHTRYHSPBFg3JSnTBXZKavgnBPZZasbhLPmUUcLW96AgkXkyxi53",
  "key9": "3g6dGyEnzvoeYoJaWPvKecfLoyVHqyuAKGjHb3wc61TMrbeJkHRwAxpYYcbzX9YQTzZtWsuwVP82Z6n751ALWnFJ",
  "key10": "5QrAfjV7SqanT2Hp2QUMPXprCL5KkPCszggZBZRzDPJVAzVo2DPVNmBXPh82KgonteEzRyQMRAFN7pq5ChLNbPta",
  "key11": "2h8aL9LEtDgBA2PSmkNtHWuDDgaNsREkUCmSoHLGwFt25NVp5RhHA7E4H5bgGFiFGvFgq7kss855yHyGT5Fy3Xo3",
  "key12": "25pSeg63eAFRshHfWWEPGEqTphZETE6ZvmpmNLYqSa7KCyhUno5Yixyu19pqbbQTY3hM7yhivYHZs749Rgu8b2Zf",
  "key13": "ByQQT1hDcpBSYNUWfX9CUqxHxHjVgdFEzkDfhqenTNDXn9uKbUvEpkHuLfDTTcuzPCscfaLCAyDnAAdZMJj7ANa",
  "key14": "2awX5cDKV9aT9tqK6vwB6yJgsNqozQMe9ws1DBvyomWFTcYHoSmXnMvmvYCNznRDVhvtKuuZeSoCsDzeys1zrsjL",
  "key15": "3WyGo6pDHk29ruYMJhW2KjmE6wiYPQi582ymw4aPtXuCVVYNwSvr6EwQB9cjuoe4QmFu4sE4hhxnC7cWGV7H3WbQ",
  "key16": "32Mg6R1pXLa5dm4m4jbXgJitoLf5z8Qeyw96tVSpwvmbcCDVzbbGyeNUuiPbXHwUt6nxABsamMRFK1Yc5rVHG9qd",
  "key17": "2EnotmYuR5Ghe2CjakJBGEi2eBdVHRmAf8brv93ZotQkBaYJ7MdkTrAd7ZMjhPvr9iNf7GJw9aPiyqXB48afaouZ",
  "key18": "wB7XFha7YA8BMQisK2jUVs465hXexcLKWcimmmCVd1HY239xEvLacVnUS4Yi5x6qpztQTFbMpqpBD5td4ijEGnc",
  "key19": "5MMmfqFZ9EHGqbP1VphM9pbqXDJzN1X9EcLL1TuzSuAB2SaickTQ3GjjsaPQJuyWKzBZcPAwxdgToeJH4quLQnq8",
  "key20": "TyzrFHDR8f8jcY9suUtTyM8QvUHwkJanbZJjbBbqufcsn2tBNofLgiJLNWyXRoLUguTtwU9af5vRrHyASVk8ogS",
  "key21": "5GKhP6gRkiWkhLTZLairQP43gNt3jwiV8KgNxCh9gVcdKoCuFXQH6he3qDgqqfv27MRYhrASGfJDgNBHEhZ8TbJH",
  "key22": "4L3nZJkotMK44PdUyojNGMBCgyu3Lg2R5ZnipAXZeV9L1BrT7oXf1A6TD9KuCSwtzHGbfhz88BeH2vdrsJgA2NPb",
  "key23": "4hSCNnqeENXy13hWMzXQKyFN4dqFgL1nkGUknrY9UfZTsBVXXzTXdHMj6X7WXNqjxf3wVDwnKUkj6SkAHCvJU4nQ",
  "key24": "4oYrugb3CAg1Fn3k4e2okAain26wmMK33h61DQUoAJy61apzme6uciEacHnfagmBXx892tW4PE8oqggJ9tcDJv4u",
  "key25": "5A44stZzNcRACXUcKG7YRC6ekBhpNpRzKH6zkD8f9LajFEzDWqTDVgowewzxxTLeFdGsi4CpKupffCp8QoiX2Ed6"
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
