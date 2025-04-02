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
    "3C2X4axd4Z8jVKoRzhQgxbDL3mCyKaDfbFbY2DVbmGirBPbttSLY7J3TxcdukP4XmTTbeFeoeHKnPZnDXmokxgTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLsaA6wrVmcfRCFWcxAAHz8tTM4UmYveuEEiUoB6uZsM83TKXZT663eR2GKywQDwAfReSUP4ZkBEZzWMZQd9cKb",
  "key1": "3k5L1kPsUZ9DuWg4m9cKcEBoyuBrkWKh9TNVtFg9V8aCx3FFsgUNyhN4fWTTJQm9bQgN5VjvCU7SGWpeYhxos5mG",
  "key2": "SwTzZ421QRrkFMH8Cu26sYP11abwoQBydsY8HbZz87s4qpkEdVcGLDjUhmvGQboPJon2MDVJVseTDR7m9SZkM7b",
  "key3": "1KTGh1hM5XYWjxC5x5GFKiWeVSzGnuCgosQnFhABuVqqWoFR5e3AXBWfEnYi4wLxJbtWhDp1pKJeqzrXTiy9A36",
  "key4": "49srVzSsh3MGMMqY1ekye2c6dY6zWH5vJQjkhf4fitygzFG8Yag8roGY5oLyUKkQtmqGT5hNoryCFY9dhuhxYRdb",
  "key5": "28dSuh1bbhw2uY7kxDQyYCEMFFX6pr8sCAsyKwrSS87EYKemYtT8aHCxm5cLY922YQeZ9UqQe6Yd8pu4FYik3fis",
  "key6": "2YtLRPmNS426VQzLwDCrY235L7omPLFYUwUR9gjMTde5YtFRBB38WjjGTFt7vkgJHoy2AQ2G36R3PxCZ1MPWgDGU",
  "key7": "5Wnq3KgmxWxatWrssxELV47Ac2h3B9UXAnevQwqKHkUJwGSnUvTuj2Qd6sDg6JdWNGST7NKYWZkgaD6uywn7KJ15",
  "key8": "3RmypXxMD4pC1a6myomSFBuyAVXGVVE56LeUnZpZ9C87QAcAL7qsDARmWZ9mu8cR5tv4A2cw5rJJ8nhwck4qospU",
  "key9": "2rsNFRgwJFsZv6PBvujEy4iTUnKi2jrEUZ3zSimHxnvYN3jbeQk16egzJMRyLs83regg9myz8q8twNfwAeU6vcNq",
  "key10": "4WZnnok2xCubWi8Y1XYcRAvMYsDVXuafgZDVoHWW3XcwQSxx51f7fnu7BmcteeNggmQRbLUbKaHbWUq6oz3nUNhg",
  "key11": "4j9q1R35KQKeJgtymxQsKXBkeVhFN5aVrhvayJdLNALeRnFqGj7TW1TDZSBeY3FCLfBdN1XxJm4q8QAB8TDpA8Vm",
  "key12": "2qZkxdSWekApF5cHzVEdYLV22Cq2uPDNRx2yBmXK7hdEpMuwC3wMFrGYFjg1kfc7tjPDucCF8bXji1g2L9ZXZrn5",
  "key13": "h6pNJBk1SoSjzDjfebLxNVaufp4yxewLyKqu6zAvU1i1aVsfD8D8RzyBUzEjhpNL5EC86aJYY7FiRsA3dM9XRjq",
  "key14": "2aWThx3V2PWg73M5avyynuH21Ec5nayesWVyNVUfNE41ZANa44GRP2fNpN5g7Q93EByxCyHur8CsHZQZY7p4mKvz",
  "key15": "3iCyYrqvCcQmk2FAd5Re3D1LNMfekCMS1CT3VHVQQZC4KA6xPAcugwR3m1x3JBZfG3UJcBeTHZAAwZvpiH1scJ8",
  "key16": "4djwaU8CDbkPxE4i7nT9AhvYyMEieHZYEFCwwhxG1Ke4J2MnDzKGbypLwQXVUCQmbN2DSvnDiBJgAVzqgrpucEXe",
  "key17": "2ijJjbBVrbdHSgmxA469vytDxUBMbW8foWyxLW7mp2PBbQZHHCksFxduA3aCCehLMQado7xrHfADZivEp7W1HqLo",
  "key18": "645yzsCZfoPSPn7uZjudujnS6QJenEZRX6fdU3tEkc6pV5Co6jV8cAxPU7QkVPXeT2H6pKB6F9FaRFDQzrwGDCkj",
  "key19": "4Hve7WvCt3ZXyB98XRXVVsTuo93zxhfmk3zmc21duVKJarB2NhjYjE1Fj4bpfzrP1Kt4gYkwh9H6fbdm58aQ7dhY",
  "key20": "3qwQhHsaQ9qNGWLVt4iVUGsr162vtnw3GQiLpgEfT25hGK4kSFYx2z5NesqJKchp5ogR4hR2u95qRBcidAVCZRbX",
  "key21": "4m4ryCPBLYgs52bLJFnzmz3SZuEg1K3iEmFHe6P8RfZzNTHaaZtkGYk3Vb3yT7RW4CWGfFfbcZN8mbCoHaJ6sFsq",
  "key22": "124z6d3xF1kwRvtgP4HvpWdhVkPhEqEUCtWP9PNLvAqemmMX7ydXURnFcuUs7NU6kTYBQRaGNRK6JJPQ5QwDNfJ3",
  "key23": "63aHXNUHwHgbL2yrovSCUV2dfiyMuAEEGFSkdjXukrVmzrhUj4TeSDsMLxwtTmep7Mq9udncS2hHQomjYieBTFn9",
  "key24": "2DwBpfUWqYyzNKVRWcFZVZ54juoCmd1cfy2KvxgmLsFdSMtuRFPWY7t6R5gGdqxLd5pHPTdEnBg3T49NmzTjDyjK"
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
