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
    "4wY3HVRyW6NiLAiDpsTfdzfdwMi9nwKeA4HyQkSR2y3ZpfuaeVXSofdxZt17DMc7wWLXpGSjhWwVaBeaYwbGUJbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kDR5n37VYVC7ftHAoxVojfWF3yEFjzHnAWs7q8wGMpH2PqqP1kRYsrNPJw4B9YVZHizBREDy12uH4feMzB5AXow",
  "key1": "4eQM1LqcSH7cH4z1GpfzY88yZHg2ZouV6wY2CFR753q4DrduatiUUAArJ2eT7odHVBSfyWsxftkNbqmPPU3KJvVb",
  "key2": "3TN1Seag8F3asNAAzAfdmqM2UUWSWrEVx3Ev5AWSDaBxTcKsXqoZ3vL7ZirXrpdyaH3gyDKqN2PSQDQLfJYTpukJ",
  "key3": "2qFK54ggxnqphHZkMQSxJDujkQSqxbcLUX6bD8d5LWXEu1LsLB2XT198U89TJD3pkp1X1hD9dycKEF6AC25276ik",
  "key4": "3NuUp9WX5ohVC2smsjUYDAy2pQxakpJqHaJ4zJjTfQvSP1xHdvVnQ4hqRchBMj8qcB3dnbdXdiKCvXVDHZ3dYUC6",
  "key5": "3mXA5sDvwkLDE1mgkRCirhUah52cbi2NZb11bGg1aap6tfRVQCz5JrKvPhHHs5XRkHRMXDJbTvZiUK9oh8kAena5",
  "key6": "2XAYoMobV6zLSeEE3rvfNUK4bsjrdRVZAMpdmcjnwS3Q3sDp6nT9y53y6S1WGhE9asYjxnwK9XVTZB1svmGjeym9",
  "key7": "3ACA5L4pp8eR4EttvmTqwcDo5NNhJrvgCcZWNNXSjx5sYZWdfwN6wv2wEQZEeyhfkxT8awnd9fPvbPPcjauXG3Qo",
  "key8": "4XpjoLDmicW6qo1nYRSoGNNeZSu6eecHt8EByN2iZyMwYyyPP5bf2gEkdFz4ZKZDVAY356skLm4YLCmqd1EVVBf6",
  "key9": "3xKctEu1PsEMG9nuHdgR5ynv1QGcUmVjY8GiUjKTjASesqdxRAekQijo4UEstmkoJgurt4uqQjohTQVwxsnFWsJJ",
  "key10": "2ygZjbCqvVWQSYmfDYChSV44KQVRUHLWHokfAfRE9xtXmqfwWPtVz84UxRund5psgZ5ZLug9BDZv3WGm6DFxRCWY",
  "key11": "5i6iWekeBuMtjawGUHwKo99PJNEghEAsBvydN96vurethHAvYzfwS6yZddoxjQ8Jca6uQN6voJ8LEvRgv6LNdzqs",
  "key12": "43azcAgMFh4xP4WCSsUh9eBFAo52HZpYBwSytDeqd1vstT92ydt1UxfQ35E7yZpqJHJUTVvTds31QpcWLP5A3ryF",
  "key13": "4sQPEsXYwqDdqvaXsZiE4qNe7gFVGkSw3ARRzAPRaSpykPqTeh5yeZ77CaCZkudFWPApEyyn3yvbQuS5JuTPagVm",
  "key14": "4YsHG6TBpvBW9nk2edPhM1A3UF5J5UwUwUWAPMPfo38TTd4TkkFtP6bqsPWcBhY69pMhAfBVqduvp5C5qikox8Pj",
  "key15": "5jLepqcztCcDLiC7C8qY9ct2R6wTTVFMsmPKKpN8m6okwuopwnB289E28J1Ew8PbfCKdvfXSDzJbdnXoJmz9MZNc",
  "key16": "45qr7qcgLzL8EJZaAN7kCPrAUpCjid8L2WQxeZQfMJt4NCTkkGoTq4DBM9HwxqkM7oFQ66otcGoTaUAPn4KZMTpf",
  "key17": "js8GcAstNggKiexnev4ckQUinTCoyQMuzxhRpkQJnRm6zygmCyEkCxnfX4aBsP4FisaNauaHktkZUDw6VhAdUfK",
  "key18": "5r9Pqu3iDGMN2ZAaTTSHrPPb5bjE9sSraiHC182pHYrhR8Fg1RDLkc9H4vo54X8kNCMkegZBnoN1ARu6XjGXT1up",
  "key19": "2nqwYdHD9hgJc6y8r8PEdund69KD91F3jx79S5uDhorvxoz4Ktx3ScWojJLmKtMd8nwJ9kjoXMWs65Tr7KS8MRTF",
  "key20": "5jchijzkMkEtkTxHKm75ja8TrFac8M45kpwxXLSNK18b8qHAddqioZ2QgPWkwq1VqWLApowoNhpVE1ckjvN6aDSw",
  "key21": "3ss74nphzDxCasQGxrZTEAUsrJEHnM1Cr14pSr1zPNDiQZ4BDzgNqfgzvNkw3Y9wvAR1fJsXYRgaUjvT2RVw1gqi",
  "key22": "EQvErhjNy57Nfy2YkR7i8267v2pPHbzEyDqgYvETcBsvnff7wBvJiBm3Wxiv5oWkHsMqk929gHAX63tmvwYJ8mA",
  "key23": "2rhAdb8LNFe9N1dGg3ntbg3yMbobBkZWvz2LfEVWDsdVfnQfNzGmSiCAn84nZ1aCm8j9Ei4Jx9gUVMMA6QX9mUgW",
  "key24": "218nuugPPvNgMquxUqma3TVDmm6RGvm8iHFUE6G8dt7wmexgfWkBbXEUcaKFAN2j2CAnWSqksbeLjjtKNQWpAxxt",
  "key25": "4iuWxqh52bM3oAyP6xEZ6EzBYwK6KGohTu2y9Y7e7urnvDAsNXG4PEvb1rdadJ4Z5XYkb1gb8k6ESEhczsjsxyP1"
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
