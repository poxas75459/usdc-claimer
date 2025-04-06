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
    "32fhmRaqzThjYjU4nkDrCChoE8UEPWtJ8xH38SYrDn4YV88BYWKq54tNBA3eYLuprEqRshzyHuvvZwnyfR729qei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SL3i5wz3qKqJ1y1jew62EHrSkvQPxtEBGZsA7iHJMBc6G2E2FdLrNGboYLaRrAdngEModi5q4CGHdb7qx8JXqDU",
  "key1": "5Hgv9a3MWGKm2JssfGdY12fMoxdE2fUvNa3Nj2mYY2ysL5xgAXRtzefteqNWVR9VLNqmj5vkoGQUdorCoUQVEXni",
  "key2": "3fZVcWpE7ndHA6WfahkGQpdR3gRNNdmyyo9S6UKDfVuVaK3FYEsctcsKwKi2f6RVQXuNEWjKTcgT3NC5AbRJZBky",
  "key3": "29kQyVeWNoaVdqSMPUMW8UaJ6FUEYeXKpXZqS5J3qedgj1vTb95AQKTPDsNwCzN7z9xQtvdGoAZk6G6is16ow8MQ",
  "key4": "5h6muU8avKaTS48rPS42L4RVtd5WU5sHum5SobCXDSZx8xb2GnRzHSJD5hXc2Et9LdwJSTJfyGAY3g2wDABKdxoz",
  "key5": "vYdmeB2GJWe619624KFUxeTkvv19SJKfukuNFC6E8gRoeUtuwcwVVSvLCXbYn5DBgJaJfxPf398z2K2FoSgZzM3",
  "key6": "Z6npjPuzYCR36V2bTGJCVMSCeWfrCRJpQE2kCEpmRBvU7K4i4ZEQAb2NK8hVe3zPKPX82xMocsKTaZS3npnobU9",
  "key7": "Za3f2VH6tfVqgbiy2ixXEM9ea4a1FpTfA2nFCCww8PLs85EAxUf27o9365bR5C5oS9Qg3DZmjNyMea8H7DqNfNK",
  "key8": "2Z3fggSexrZCarioZTWvr9EqtYrPso3NPGWtjN8nxWtSoPyw7weeWeqL3Yq3kh4M2qLhQdnwMwUCtED9xDPWRZSL",
  "key9": "2T6gswfzhpwbbKkf3G5tchRsqdn4qTciMmrePMUEcDTH1am85trEykptKzDYBQfpVxj5NZTYHWW5eADxCLxWmzcX",
  "key10": "2Aqro8sZQebVUBDAqMEd4sd98dMan1qkaAxQsTDEF9rEvjZ31E6aH9Ea5n2Qjp47nxFMmFTDKTC3qqHWJCowRWm4",
  "key11": "5VN6yGQtYBw2ycKEFSgHqP9CLjUuYcQgxtTXjSVBjYMQNWHJirmuDpwLW2wr2PYSs9Nw5yLMcLsniczNJVwBQyHv",
  "key12": "4qSmLA8FnayFouNqL8mj57ND1xtywDtMfXMiCxucziUZ12K6LbdrCTWGQB43iEqf6AdWqBP9NSxWrzm3tKFrfemu",
  "key13": "62KsBRhV9dPq9UpB1PjWSByQPfyF9o9vKqWhwcesxCTNewVJ2VKfm95XXFeyh77MEZNFgC6YRxy6a6CtcgooCyG1",
  "key14": "Uvz5hoVztF9exEWoyXw6NLX21nYYjpWMMNJpp32CX6SNNjV3AqdMkY4LrV5hpF2or9a7AH7y7QfHVLErnNZy4ny",
  "key15": "LJSHabobF77DzLHjAzWyyccAx3WFz1AvwUmJ2xp8praDoZQP73uVQhaP7HqVWRGy4uG5GpFq19HsbGHSehEVRj1",
  "key16": "2Q5faCCWyUqyEx6qCk2N39QnqJAYh6CkeWfMmSUraobGiquwWX36SxoKXy5k31yxxBQ59MivoZCHzMu8A3Tzsog3",
  "key17": "2fY3tF7sbpR4uuWWj1581ksVPUdMvXHfbpTjKkczeSTcPeaRLatf9hCtAV42eufHfwfsdFxaLSjum8PbyAqdLHDb",
  "key18": "5Gd9QhqXEBhkfhQDNNHcL31f57oQqcmpjfdkWKq4bPqRSSZLc34NPW9hp6jkd3Ghbo8uLdsZq14DG3MxhjyuTsLp",
  "key19": "42xAyTxeQ3kqbR3Pwjp97AgVvetpZUEqtwUXFUdqKY2TBDoYX219hBda5o2wrCnmGupopULBqDim6yLfXaRRq8PE",
  "key20": "KUpLBXHjbyZh66wVj6oZGiJYif3fwVLWoVLfKXWKZTui2GsZnbz13TuGqy2akDHyCsaiynyMjGTCXCJumcgS5uR",
  "key21": "2u6yUEnBqboS7pJoEND4Ax4472YFYey4yD1r7xvhECq2Ea2HFthxSckFjXAKEjCc4icmL2XbjJKmbXAKWYCLuAaG",
  "key22": "2KvLs1WMjCgiyMo5GQjBJbEwovgRTf1FrM4D4cXDa9AtNBPvkz2nQERjBCr6Do5YWY3hLDK2BwA57bxUJRxSVZ2V",
  "key23": "QeQJkStj6EKGSUq9QvPVTUt9va2uozCQpBqWKJwLkERjaMEsqHTPSik7BXYhHxAqJ9SKHieZs4x3H3wPjtHX6aG",
  "key24": "5Vp5QsTmvHRzwU8Kj2XVLDRHTKeduXEL7cdWMBc1y8f8gthfTTo2YbCezREWsQMQr79mHpPENuwUPQsAAgAExH3z"
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
