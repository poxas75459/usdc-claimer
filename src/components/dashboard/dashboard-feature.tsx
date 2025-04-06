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
    "5XoxR9d4Bp24jiXBPUqVVcLXf9zBwNMShwmFQ4dKziWUkhDKomGzt7LXmyKWjdkx1j57rKS55v84puNCi84X3VsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54kriR2WnrSv7KEn7Q9Hik64hHWecgGSuywDgEHzsyh9pmYTdd7ctWUqpZaPiRM2bdkkf2JUAcsU2bACCoZgkazQ",
  "key1": "gjWcLLk1yUKwgwMn4xFFXqqAiw4G4Xkq3uHJECT9L4H3pHPxdNxWV7gcFUMt7znxmiYcMN1HmBjh78xbBTRWxnK",
  "key2": "4Xd1RcYKxMpaR7VstVtSyzHom7tBc3CTBrdtgEtKTjvZu8c3PTZkMjGTQqxzDoBH1swuWCgVxukPDkGJc8gshfLv",
  "key3": "nfaGmsQLgXb5GrGp1NV86gyvDezuNCuAtdJxq72bbuQpuC7EUUyKezbDJFtwGP8Di1armX4ZZW7bezLqSDQiLAs",
  "key4": "27iRxzf6peaJoA1TZtiqAK2GffEng3JZPRRNmPt9K2rhTBExux5pfFjZW6YejDQGjmCGqp5yitDqiREkyqUVYNSK",
  "key5": "2yfR6feB3DuKayv77D541rJBGeWAh7iD52qWsKT2TGbatNmSgGPgfYhUpuSBkqmm1qY8TfCY6wRm6JR2fMkThHi3",
  "key6": "23GzMDx326qZfhK7sUMugdmKbKTup35qyLimyPFWJRzYoyXqpwVQM3AHPgRVMn2D2iyy3vTwKocE3hx6oR1GrBvS",
  "key7": "59Z6Se7cTuqrWpR4Gk3aF9vKEGevnCttkeycmFfpCXYBLUh4cW8nXXyTKy5JwxwNeFN8RbPcjVK4BkiLeAKaARED",
  "key8": "4EyCXLHCnwjmB1aNaavnGAcD5Hh8yv5tuKiFzaK9jNjTs4uvAeu1RNmevNqDzDxXYTPh7UbdQHfr52WRK7PRfCEz",
  "key9": "3TnfR7XY7dNFhnGxxybBvvjJErYxHiRb1jx95jRcNkZcSZRCwpuYzwpS1JjKtdQ2B7EePFpLzDGhfqkYXGTcPDwf",
  "key10": "27mFCWzBq2neCzdGgFQhFRinLDyyAKTFyiv2tFwb1afTW79benMe9i8xYBrJsM2k3znKMDJmPxNnnWviyY7em9Ya",
  "key11": "k7QUysR72ibL6gAW1rWUaYP6mj7bw4P4tgePRZQ4NpxYgeRV1g9NaCZKpoq9341mERvPVH4yALSyDapngKtMtH5",
  "key12": "31YDmtkjGaUtVMhx77fdhjQFd8GHDvVQGo7tpjTzKgafWMjAi7XoCZVQCemxfL4iFxGGM49pY1ij3BJVQboLBhqG",
  "key13": "2j4JZzgEPYB1nLDBuynzeiZtPEHNp2phXmXTneUaV2vCvGCLrQoLS9nDCF8XULtkVzKzfREHtgzcNAW27HUfpQia",
  "key14": "3ZH1HFLDEY64xGfzsgaD8rUhPaTtEKBHdHi9s38XY5mtaN3rkveo1VrtCZ1guG9mgFeEs6GQxi3Q5vPSDh1Ujwga",
  "key15": "Kb4G4N1Kc7RZXyUsJ4eoZngycUBqCdJoUMosQ5QHiaMUj5mSYG5XzVHQjCtk6MGJ7ZXW8i4szbpH7wnKo1xF71j",
  "key16": "4gyWeJgUZFwpUFg427jjr6swVcGwkmspANHQcnq2bZFUkfrhMAmLBjA7L67B3r6p49dbqMaciX12zMLXJR5Ysb3K",
  "key17": "3uDoE1Prf83rVifCVfMEM4QZ2Y9F5ru5eLEvk2jUXBKaPTevryc4rR7XnXTrALnpVWcaGf7QMq5CqMckRDrFwnts",
  "key18": "5UQijxPD4C1cpXbgBFgBMGvfLAi6J9rg4w3LP5z1jVGNRahJhBxmN397vNV6SHrZGL85BxydWTjK1dm2iuVajPAc",
  "key19": "4dVBToM1wUA74eghLxayRGTYFgkgH7tDrG3toNs9SnPBx9VBBGxkcwMNMgYHsdP5vmN2PNxALKtKpYwcgv4LmHBt",
  "key20": "25ub6BJK2nokRGQmyw9oxWsm9xmTUQrhKv8vM7TLg2MaG7UaK1B7G8iyq3Rt3Mq9LM1QB1NjKZ7kks7PZz1KdBHn",
  "key21": "5GyjY4oFKqGW62hKkPBK9LLUWK3mx7oZ3cDxJLywF4WoKRJDJYRAdZYL6nVuYm1sryF5w2pvMGoYpnW8MARrpaKb",
  "key22": "3L2kh69MKNXiDSuP9MohoAamq66DPpV6frB59VaYLJSAZHB41JfBJcQRJx818a9hrhreZf9ZRtS67EGXnkuvkP5G",
  "key23": "3fwccQGQBYWCoFtsfWpUw3X88PYiCNmeQkK634W4WF7uY3W38eaP3ye2A1PvV4URJ4qNyaGhxdioToG2ZwLwfDCR",
  "key24": "5rUdb3TdQwVZXZELtvJp9SGLNxskV4JkAreAxuGar1wrvXyd2gVQRdrWoBUTKKtKweixSq3no9kdU4GGciZRtmUL",
  "key25": "4bgEwJnqDVwFg8pMSdpfQK5hbMistrk6Zc9umatYg3YcpSrvE5HnZ6gB2QyxXjX7k2LnUomt1pxbzdG4kPDiGo8r",
  "key26": "2rpC7qrKoTXTo1EQDrMmjoprZM6pm2K8pu9BrBbfS9PFnNrDJ7SFutr1b4oVJ2GSZsuudg7pXWV3JheR7EcUTE4X",
  "key27": "4pGgizwgpAmGJNEazvSLr2pp93rEYwUCJWrvt4BXvYUWEQwR9H6ExnmcGKHoKjyNjNrbqQniUUs3sXwLWiy6d4kP",
  "key28": "4o5L7utnBMcq7QDYY7h4TZ96d36k8Mqy8dBpDBfirZcUubecCStuESfF9QK2iZVLPw8odQixaGaVeu2KnGfcW8rN",
  "key29": "46ovJXKKviFSVxaWHXhz1yejZXMbkmvUNQRdgsRj8CavpGztrqos7dwQakXsf7m2iXhFwKL8NnHDj9CeuHvcvq8g"
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
