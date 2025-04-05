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
    "2VXYJA7vFtBajnjBmeRnw9jq38y1zTM6kTuZwrqLpeVHxz4zxWtVV5Bxu8uo8ejH4kSYsB9rYSzwdEcW63TNKqvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NtJj9FBXPKM8DMZBu131NWLRrxpZ8eFephdv6T3u934fkNyQkij8FdasuwFZLJVJCxZHrYPbUn9Di6Z34g78FXx",
  "key1": "43vhVK7QusgT7D3Nb5B535YPMPJjbP5HLeCH2aXrFqfFcvBBE1BfCLJ7axzLei3SqEgSW7AfcY514MaHPKsVEuhN",
  "key2": "5a5UH3QxLvZXrTHbmVecHmigDhNE18zJEkx2QPnr7SGsKyejR9LUeapGSszTvb3v6nS3rpVwszrc4Sjoet5TKnkg",
  "key3": "3kapZcuG2QNVWJG3TZGU8y9oxgppZFdDiZj4Bn4WQnD43JF51e19fQV2WgVAuK81EJTUXmTEePiAHL66HLWqNbP4",
  "key4": "5NyZoiritXAv4sJFiBxjSD2i2N7qvs8PLrRm2AVgW9vvq52mEfsb4Kh2c3aD9FLim5bnwSxd5qjLVknA7nMofRp2",
  "key5": "2yHUYhMk3aU5LLrLKqwXv71bRd4KLUZyr2sxn4h1iRqgBb7BJgUTFV6yHs35VoCUtVTzvDtNvoRZsmD1h7otySEB",
  "key6": "32AdEJdJ3jhCeHi8HuLPsToMQxKyYUkJ62WndAXQERtME8UKp4FXKy8NqWAw4zFgspL2Dz4LbpDh9Z6Uf4cJbsqt",
  "key7": "46Mu8QfeZoqbgyRSuJFmU83fg4EMVB4PYtzZvLyZVoV11nP7PEKGNmr63hm2PFV6hU92mz8roQeBxhLS2whMD4Ro",
  "key8": "3f8GdQvNf6rK8jHhnzwDs9QkwiQCvXt4hYysFFfH4k44W5jXUXr64tkotqXPvFME6SsK4yFYsu6hdPH2Rh6dm1d3",
  "key9": "1PpBYYbtmD1sMU7asgFKUqjZdy4SL2yupsnPQ3nJKLLt6hkgsuF7xZo9qz1z4pojNKtQ61msy7RYL3iisu9kbMK",
  "key10": "3RFAiXsaH1bmMQcVnY4eS9xQ26QHbU41A1sKvyo1Cupz5vo9qYiWfjKniuLPQhLuhoq9MQUXj2d74V3Xq6rpTGQS",
  "key11": "5t5M65XgevsZpP18Wuon3KQB1rPmZ1kJjnYkqjMLbGq5AZDepJebgW3MKsf9ep49p95mTkRBaKphBAeNqt1WcbF6",
  "key12": "4YCjpcmhK8TJggx6fQvuEJ1GDD7JtKMeNFN7jhirZx7fHcQ15q9pG8WM4QMdBYFG3tqcijobDU26gD9Ucay8WZtk",
  "key13": "5rSUV4XN5m86bnDQfi6yU9AJrU7qT3j9fuyoURhv9bGSBkW65sHbTXY1kQeiyxYgUw77BPMeb4zGbKYAepGY5556",
  "key14": "5xZFWeQe3LvvFCiRGe3EMvqaz9rFhJ1aDAh47HrS3rgGgXy1GdFTkHBhYFJ7bMoZx4FM9FasFFYwBfVkGraqZc3n",
  "key15": "4gR3gyGW43c7dAf5vKteMDmHTEGEgWAd1HCz16w3PDHwLixwKHraPDiZcNSeSm1C8i4WHKVWNPSKdZ8dcWYRbcY7",
  "key16": "3DDbfyjcMDLHR213kZNbuUjqoUkc7kP2w9DtBY5MiShhJbJnZCEouX9RXKmKZCayqUs7RnrHRCgw4XDfAaB2duQk",
  "key17": "5DSR7hEZ98gGMHvPZMpdBcFZgho6tpD7UXWHsR6hg8tbpL7EwiwRUMvjm5GHky2W1m5aQjT2NQTtQPqYeHrnRnQi",
  "key18": "51cC9nEkzgPyeQ3M7KLoGhv3TX2s6mAgoVSq61sdwWrhrxWBHtkgNWszBTbcXEfoqjs1bLXWSFszS26d4ETSBeAG",
  "key19": "4hoNeoLtvfygf8Hv1RZtqjBFgQ1DdKvQfxfcojAdiUEZ6wh7zDzLqETfPwy3nm2vTsDBDzcnTHRqk4weq1J1wkn7",
  "key20": "3UBoCufH7AkErFY61UbDYnJ4Bp1dPSmvZVo64yUFYAkKuJHt7uq2f79PUb2XucsximGwnK6Uj5QKhqCrorj2PRLL",
  "key21": "4HF6UaB8CnQmCLvyghd3s546m7CsqFadahKwPyCxRTib9SEJ2JAfEHvtoKVw871G7E7fgmptTcJ8hUbNLqxb3Z7f",
  "key22": "diToa5FevRkNifXMwQrUYjTWoUik6JiUU22YjeTht8yh8rsCsdrGJe5QVAvBQjXPFXcAFYMZrewWVaUrAqdTkoD",
  "key23": "4rw9xz9gHLX7Juer5x1K6PkGvo3yW6PkptgKQFrtX62YyzxFzqvA23tdtiefz8QiFMNW1UEGNDo5gPAj6YGkgupv",
  "key24": "cRst9daLkRcnRFBzqEoUpEofsn3e2JV7CQN8UytWfnTh2VLCtNM6b1eVBr5n8EQ98kGQWAKKSPVYUnn9b1M9EA4",
  "key25": "4SEGvsuhPS8DeGzV2RN2jqnhUoCqmu2ayis3Aa8KV1yrM3Vq1HZFuZMqxVU9kYrnH6oKtDReUvZuPLj6NnybAHGj"
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
