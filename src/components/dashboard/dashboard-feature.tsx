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
    "3GcUu64yPF12WoFBdNX3Nja9e73CYtewFoUuHJ2LS1gUadFWdcEZeSr7zaLPmbYub7C12ZvhFrGJ3A2ZLQLoKReN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kS5ArgSf9wEmLSKcMLyMJXGsA8TwCt33X4L5Hkh2Fyx4bCpEAHCPiLivK12sXWW1u8RPUdwRkrgQ4wax9nene6v",
  "key1": "5jRXzjg9kpurM9Xm39CFoA81JawsDVHGzKQQDAh3xo3vVjS59GUUE9h1xVDwQcgWsQcCThuFqArKtznfvX17THZY",
  "key2": "3kKqnS8TnECnBYRM3UXKqx8wGs7pGmgoFqLntMTu9C7LtMEPXZgyexWpsLbcWovaVgAcqdBbzMiwBpoevaXtYHzi",
  "key3": "3SttdoLsDrN34ySoCXQk2eCpfrmEBKARrAERXCiNQDY6bVLai8obquDyGEcUFTgZrzxYMjVVow1ysYy79FboQiri",
  "key4": "5NFTJMB1ectPCcGzDzXZceAPGcX5YKUhE7VT468wFpMDeAvH2CaggvaKL8Vm9XAATS1PTXv1WB7sDVEwUL6fa8iH",
  "key5": "35fPxa9czv6Siq9uvxbib8SVAijh5tmZpFiFkKWD7oG6vNJyZSYepWqGJZMf5jmYHynKZPyxDD1Q8RiUb84cyg7L",
  "key6": "R9omSUVedJ2ca7KU1imHv6hs64SHRvVa7D6zeY5kC9tbct1xxLRoNNDxyakA27YEJ5ZT5sRqPHo19V5nc8jZk1P",
  "key7": "2GTPfFhg4Sm54zbVdytUedfWYaAiGiXrQcwsnXRL36ZxE1fA7mxVP52Kc8URJPNi8TMgAshJVynati3h1CmhSbwG",
  "key8": "5PzLcRqusYTELzDkRqq7JZH86k9nZvsQWTbHgH991t6Hp6uHsRcN7tBxc3pJhyBAkX4w6ru8PcJWVuvT7NsVWSXy",
  "key9": "2nzG8aHAJHBXE9huKJqNaDE41PotAtvKT5qnPfXUZG2VxvshApoVGAoCcnjUeSuMvBtukePHkEQdTae9NpaQ4cH8",
  "key10": "2TZii6SBXLJR4NRT4yx1pXcNjcHnFpFZ9cmPkPWaqc974J8jLZLt2ZeGW3tkNUCmBYNqPsftyAixJsyGR2H8m572",
  "key11": "66y7MokFtHr1W9uTBabESHBT8nynLkN88z1RZRG3LCqDrESBSYShyKv1fa3YvsR5TShReN2FAnuMqyg5ZNttYbLd",
  "key12": "65ZebqBNaqf6RFEWR43uA2HgoSArasYKvEUB4twVNXkKHCqYhB724t473sDpCCMVoaDFjVhwMt7zjrEtGNfvebs9",
  "key13": "5qr9RBRBBvvgiKsqJeSiXSDU7jwce9K1BHChAgotn8QPXdASR6CsnDABMH54iiTLBBcXgksSibzM3zkMwgeR3DSu",
  "key14": "2krqBumBpUx2HABKkozoJUD3cNQRTwwJ9hVqqZafUo7Ab4pcaiaLajtFM5pxuciojHBTw1YzM9c8yfd8uQifdVuy",
  "key15": "4Mi3f7aSqkogK1x8XShtAQWGWEAY5jnuyohkdSsM2y7mhRwnDMrdjsKeonq3v5s2EgjmHjDuFdup8qr5oCjfVCCh",
  "key16": "564Kp1opb5dhHj4fHMVSU7KGfU9iNBrkhj66pNLqNZt2y4FR9NNfFVNwmYU5pny4WZuD6iN8M227QXJL2FbPYcsw",
  "key17": "5izBmanUhPyn7Xn8pVUVreMB838eDqP9V5czmS7it1Arx3p5QitUb7khqy6wTeEZNCEGcbHa8CuL9sczrB9kW5Nh",
  "key18": "4KU9NpZy4csHjCHbNxoZqSUDA2dgaj3EnrNNpVN2YmUZDtpaKoBF9ymozV7cUdFyS8eeEwdjU88xsmstWyzVRXU8",
  "key19": "4BaZocFwcw9a3jNkxAR1n3qBRsNzhxSg7bG7uGk6pvJ5sAAPetZPYcJXZ5FTbfJeXaiG8QMfy5x9MjgusE4nUEco",
  "key20": "33HFVTEwGjUt9Kkn4Lvzjx1ZBvsKGfBjLptHF625qY38hm38tQEMHYQNKLZk5GhcUTtc9kypVzuhz3yFEGyEvghG",
  "key21": "5RVQYi2PQiVdcSaSuM4wj2uxjUGLwnq8eoFm3eN3qj7Q2KR41wJCFc79tHRPPbziZYiM3U2Up2gxQ5EMPQL7UsKm",
  "key22": "3DnSFUtF3CFhdprFuP8dEhgUCk2X9AMraiyGpUakxUZ298GJMHKrd4g4BtuCMMDHoTAkAgc4HuNvd29KrJp1SPeL",
  "key23": "3FjfqwvbJdSqqFRux26yj82XGmTBFmPnjVid65HxPHkNk2C1vw7nsL36Q27YGk4Mnvg2MSUmM41Shhwbc6m6dHmp",
  "key24": "2y7tdAVhYcdEKaREr63GXvxfRCfWKic9wJYdRAp8S6FBdvq1UKHhuQPtNhswezesNbZKztuYMJRJuBwUanKECpKM",
  "key25": "3gcnNXiPSQin4XePmrwUiLwa6hue6mahegU3cfbEhopvioxnJpD3zx8cUSDEK5kWMkAi5wNqW8hnX54sBsy7FQXv",
  "key26": "oWCGA3aRcgtppV3Q1LR3EQsRghp55Hm4tVja3vd85nSBXJJqZZDsK52Hiq5nfDQH5wDqKxqcXFuPyWxsmmrEidq",
  "key27": "3p1EFMnbCqCsFFpXBcWjpH2Hc9KT3fZHccL6j34NJfrBwnFCzcXJxXcpczpbyWzrJF78mh8ChmDxFcdSHV8Grx77",
  "key28": "3j92hddyzMsYymkH4u6QAKyjeWZJPu5GK4EHb4XzS84XfdaxUqjC347cZdtaKLkA2VJphFzYQg7M7Ak2sTwaAPZ7",
  "key29": "5BkJdsg8FP8Eis2Mk88FSDQjvnbNBNTfbe5pYFAVN3eA4YDA4G475CBNRyvWZ3wYqAqHBsXx2fZjBofrAchffPr2"
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
