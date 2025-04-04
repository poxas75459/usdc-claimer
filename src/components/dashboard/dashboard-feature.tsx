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
    "3AQjWpwkxg4vL7fC4rVSHYhmTgwZ7YrcmAW52nfEG9VhSPAuUUd4ChaogUqxmu7jNnyhfwexSp1Q14XFetUJosmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "425eaQJ1Pr5oLRydQYamrqWUv3PzUhPED4zWJenNVpp4S3qGhvhQZ6oGJrJtWUiJNGx53q187RX7ykJYDQBcpSHg",
  "key1": "4wuXGCnB1pg1nQNJnjnwBTmmQDztkVaoHNKAFHopaHZVoyczYqFx69uwSeJccHhUwMd58Lxkcc6SVttU4H7G6GfP",
  "key2": "ENSfvaHcQodsP29P2mmvNRPmBdN4VXGeGo2Ww6xB56NrbRMHXPC9kxGykFunhb4UoXvTmznsef7fNVBa59knTDj",
  "key3": "3t28HaLFjQx95iofwrMusTyZxhHpkeqtJLSSGn6PMJQsnJGc2VYXb6NBZ64EpMNUQS2k25HiS2roUq56QCcGTfP3",
  "key4": "tCmE6hdj9V9bKgUkYMKtNktJVDX4j9F64TpUpQX4riDQkiv17wAHps15qqjKD2KvzD1Ca1C79JX8wH4uRPKkTvn",
  "key5": "3xQNz1GeqtxCk6Z9244ibUiVsmqcc7V7RpFxQzatypmntqtZR1Yjx8yb886dqLoiPWuP4C5ETibuPBh8RSk3bbBz",
  "key6": "2gp86frFbCSupcLSXQBtm3axd2cF63pHPprn6DmD7QfgD4yq49yKm9ndnJyEG4VLRWTSjo6YXhscyE1RP21muq3Z",
  "key7": "2JvsGCpMWAcfJzybDzcVULk4TtU6Sbk4bzd1djXkR1HwQxBCCDLDjwdRvQcXaERwgVe4s2j7Ys7jtVWFQckFgRGS",
  "key8": "4YiZcsdoEtSEDihfGzSubnS5S16x8rz9Qh4b11QgGEVEs1euUPsdUYt3HoFLp1ZjUNdhAdzcWRfcr6CWBbD3eUWm",
  "key9": "4YG756EKdm4DqxpC2Lv9UEjb4m2VfvWwv5LkKnMhJiGscTgpw6oiEZnAMv5wgB1cCDoDK5rt4C5bZyPa7xHMCxc4",
  "key10": "4eczWHPfbdAFn6yuhte4Z6csJb9T8pfjW9SoSZN61CZyYM8cibLKznT3ibvdhDVMC8UxjTnok4Gi3FKPFhEF4fXs",
  "key11": "2URb7asb438v3emi8bzM45yqSb67MnbqBhMwAfSCzrHnxeFMMawRoSB6a5ZyDdLqxDU1awCHfDynmwJmS6sH9D28",
  "key12": "5KVr7yk3Gyee4oTe5Yai1xmizfzMoYV59V4LSCWF8kD7i11t2YqQsGXaguJ4npcTtZFLKxXYVLESpTVGREX7N1gB",
  "key13": "2vFBUAD4y9Fnx9ju6P6YQganSUqhVdRnrzJpmXeD8HdVEGdPV2urr77iLSbux9cF53gR8LLYPj2jafaiE6iqoqbJ",
  "key14": "49vcunhftN6cVcaJv7ezJGmpbx68w1PAnqjqAxgJWphoazZVVLybjYsw2EQVVGUEUnTX4arLjJXgq8mwAmUa1zob",
  "key15": "36HLfqF9JkZDRyho6y1BK3QvBX4XCg8utS3nDmdCqETNQYYUQbxmu1gBGPQEiF6dGAW8zhG25YYBPHqk4ZLZ9S7x",
  "key16": "2gZ7vhRpKJbHbPxSp5Hehbig85ycJxxJxCHfVGKf8UkqTGLKizbSinEgFrki2KbFykwCLKCSbzeskSWxZC5qvvDN",
  "key17": "4CPMBRZwr53fFoNrJpULNAjqK36qJuVJka5dEbuCm383fEAqigxke78zrVy9XPECeQTxoLXxZ6nA49Lg16rHNyp8",
  "key18": "Sr1w84vTvYjGduuyfxP1sCmnCNfMTUXvhkEyvHdFuhteZQZcvNLZnmaowiKpGK1TDtDMzYbdiV5BHTmptwMEUqJ",
  "key19": "3vKVvExuv5JPW56Nc3ypwHtk8zyGdJRYyrEqdiHiUiBhka3rJWi6LYYiopbWTbKWhG223gnsjfWyvMYW8bqxtyAA",
  "key20": "3Wt5dkGPHFZwKfPXf5w19SCUc74gBJu9n3hZ9rGqXRMouwMguGD3xwJKS16pzCRzK7zRh1sL6JsicN4PH6tCuhUh",
  "key21": "3g9dUrtfHDq5wWxFv3EozKj5N5mW6FYLfksaDCzVNQjuQ6VP3QMyPXjCNQpYaLoBFZFr6MY2v5uyMT5ohXdVMpZc",
  "key22": "66ihGgZNc8Gz356eJXxJsX5nL2hhY4NQYr8ZXWpWN9hgF6KEby8cHy7ML3MdZucPZb9VkDjgiH1nGwejZEpq2rtx",
  "key23": "2RUMcCFJe8Frbo9uG6Z6X1T2cuPk2kiCHrhVR2p6tfJejmHeTzp2858WjUW929EtxY6zvCCSVomp4Dcrd6nW7o9n",
  "key24": "2ZFHS6GUCUyVjU7SGqv6HztGXyAr5pTAtLqK1VU4ASJy9VQZ3Nw6RwpgRJNmMPhsnBTKD4uH7xX5X8jeoiDD7FL",
  "key25": "5yt4kBUkfa5Bdfh4HnKY8uU8f2mV9U5Le2kd2YBghYufhDCeuM2i9VgqNs9Kgurj7gjrW4SovkkyHTbCXedr94Cf",
  "key26": "2EbyU6xmgmbghG1nxY5Q7GzBkL9jhHT8fRmqYEmp6T83jugpFwLYm5kLDiSpuNbv9xSsm6dS6Kf1bkaWTRPNVM5T",
  "key27": "PZ42J2Efb6KeXwvQCZK4t5Joxed7NoGEdti4wRdryXd58FXWUyC94KpUwcBLvps85uybKcb5eum4qDWPXMwL3ic",
  "key28": "5QgJzaRBz6axgD35Zgv3pyuK7m6L7igVztwxUaYPoACPpEzPFgiWoya3gFj5HmQYsbbfUJiwx46ve58GaZHmYw45"
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
