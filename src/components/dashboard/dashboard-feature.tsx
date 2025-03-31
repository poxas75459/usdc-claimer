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
    "5drPxinTQoqTQAro9LKHXCgkENhuUL5GUdzbts3kRPC3k8RjVpwRAP3nbCHz634ryZjrcAGuuZw1H1WzwJRDBVkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vVqqbB4QJcQE4qktUCMKp7XjJEF1NMqN3qVo627Lfh12MQmKaRQN2Rfen4bugrnvjjiyLqJhb6aAfyh1MtYRCd9",
  "key1": "3Qj7UeT9BNS4WBpABw6r1LXZaqoyUe7Z95qyfTXco54aEMrR5AR7KpmgBojU8aHq94PAr663vvFeWZdA5oC58dB3",
  "key2": "4j9KB7fzGdaUtzzbw5YPQNcoTe1TRCP6UH1xACy3n9DXSUUqKzx4QSTHqXj49qX6freLJxaswtGmAYejYK71gRyf",
  "key3": "ZY2672x15Vo8cPh7BF89uvi7uqfvDPNpCRXU57xjQC3v66pjAsSjjsi4LTRKkXi981RSonL53wSnGqosNKnm22W",
  "key4": "3SudnX6jQdhFgHBdxZLtzYpWBPEyaxfbenYX9uSrLVEGoYjXpdPbdkHQC66mCG6BGqm4224sEyhvLvrNTtzkVom6",
  "key5": "4E8sWGv7EWmfxtpD2CPAQNKY7LkThXEbpePnqkp44KHYnNFVwHPcJQ5tTSEZCL775M2HoDyUnAcZzqGLVaBBe2hD",
  "key6": "2Lyp2JTigsqF9C9u4f8ActshUmgdGGir7qJzrRribMbqCQTqDdYs2A95n8sdKZZyb26ybC2nnZKW5CuBpAN5rRyo",
  "key7": "5Ka5qHcSYWtG5m81g3zqwEACSZTDFnpCWYMcDJdaUvxzDdUSfukhqEdPF7HmZFn2oGxixwpjfPACE9dhp3rodPjJ",
  "key8": "27gEdn4D2NutE3w3E8DHZN21B6cD9D3EK6S867YGpANB34aXsjMRLcsKE55aYNZWpWGUJv7eTx6F5HiA2euMpYBr",
  "key9": "66gHczp9kMzDe5a1kTnqBzM5w9GvYmWFYC8s4AetMevEGR5tKFYFGKeNsMtftAaZYWwbYQJ6fSjLtPZoZm3Gv48P",
  "key10": "3CCQvnJ5XPVdqRw1YKbhBigthVfT7k1bTCnKApS54P2LCFFxi2Z8pX6AED2DyFtdcgWTgQX7GmgmCoHK7R253bYY",
  "key11": "5zPV69uZFHf7bz2ByzudynXuDmRPuYkU6vCBMSv3ENFNi7AGFP8vGc37ExKgdfghEFMRWjzEQfUPtVWpqMTiS8iS",
  "key12": "pFUioEffXnGP3NXtCH5RuntAZ8AdaKPZqxzcdQQdYjDVx3xmWU9NBiiQUfWUgUDsuCBu4h6B9k1EhRsrDdPAnJT",
  "key13": "3QTddbZ2cB6onaH15x2osfcXfeGF3NNirRVUhUTAranWowfjrG2k27SnYKY3GSJVcNZmWvhdC1m951QJ2n7XFFe",
  "key14": "4RoUxgCkMXHb2HMCtctwWaX1rWVQ8KF8MbTjkxfq6YPZfThUdvo7y8tqWdaFA8ZALhuWutPwFWJQSineH1KVvyRC",
  "key15": "2mkV4Re6CmtrdeggpfdiibGAw75ZWtniGB3aaFkUbcDmjtgch21ssNYWnYzjxvx1qWsDXEkccoezF6n9vdo77kRP",
  "key16": "3Ta3RjjKDW95LfPkJSHGX25Wow8RZQsCxMGDvZcdtx6fy8YDTAgGZQmgmYexum8buFkpcnennsemsCk1uoVD7xrH",
  "key17": "4wyACQMWeHXKhGPkSNHP1X33ut4inUoVyxgfjdzr6fDfr3Fy3hbLD2Ee7pMBUKdaDogFknmZD419WcDaKKxtyP2z",
  "key18": "3P4HYaEjzSGmoEtQJ2XZ9Uuh2wgmxUKgnAm5rQYu23UqKFzLMwVNvU6bCdsJmAQPVWEvWr75fGvhEfdzpmZdQsfR",
  "key19": "3LEA6cjVY5vPHzRrKjSmRTRBgbsVnVRrwzxJgUM7XojQrNHVDsvKNsveUUjUnrKBJFwKS57qezVS6ERVynjTwC3R",
  "key20": "26epEbD4BoUNZYgQ9FupYADUMP1K3R1Tcva75HNNar75Z5XH1XkqTN4fyVwtfniZywohQbXufnm8eMA1nkxMZCX7",
  "key21": "3PdaYhyDi1c1eArQ3xGXzAgncyjochQnyETwYgAg5Twi6vjVNpdqMPEW9uLTbW1ckbppLtQthaCgD8SKH2QeUVYF",
  "key22": "5peGZ2SWEGQMe1CY9a2LkDdpbAKiHGFhitkghZ6i6jJx1E4NDeMrt2zkLDNYeWdZqJavf7xq4FP2YpThe8w8mRXx",
  "key23": "4i6UkCP6kHfqeQJ5i64ZRhidoNaKmMEwMRQ8g6zJukeJ4JeyGm2cFwMJyd3VEWeva3joMqtXfeCEwRK8JDUw2Kvm",
  "key24": "3oZJWxqP4kZwNX52ySJUJ3mCfzR49Xbwx2ntrUJa5WvfhgWyVw2aUJvpb7w8VMb1JpTkwTL9TcsU1EVeq17qomoL",
  "key25": "2SWm3mvnFe76k4TiJwMFP4xds2wY617d2rWY6W3f5UTU1xUS6xi2HqPc8k97imXiZeJoByHuGizBiF8Y44exUNEe",
  "key26": "3CucPocWjtBgEAEiZ9fjUWwqauRJDm4e5DwgPgJT6gSCMQzC7mBiBFVpZnkcpgUtiW8U6mNmwAQwrcokLmdfo9ae"
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
