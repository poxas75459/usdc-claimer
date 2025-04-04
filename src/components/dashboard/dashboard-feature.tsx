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
    "5gArqN1Gz1kAsQPiMrD6qXeaPpqgqbL8EZq3k6MLFUVLzNAcrEJNJCqcBSZ7t18WMJu3CpDGzwQcGReyQtwD7bwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35p141X4c1oU15ek5e47aPXyRwbbS1ZpPPQaHFUUsVzvRk5TWNi8A1YqGwnvTH911UPi6j7Hr6qPWUSeFYhgQhN2",
  "key1": "2q7MRMx2d4t4hsk4T9P76Cuw5XnMfj2DZXc22CKUd17hQXqWSpTbHp2rvyoa4pGDVrqz3Fy8Xpc8ozcSXHC2mXQm",
  "key2": "Vjgc83tFqbwHhXxckeyLRDqVY8xVUH2KdCGeNqfskTZEPA12ph5vehQoo5pfUVViW1coa81KE8RYeKmh3mQBJyU",
  "key3": "aC3YaR4J3MkP4erwZvS6mzAQS4C5wVFvJNs1eme78CnN9CNSNzCu1A7tdXpWg5hQK7cD4fLFL7bXeddm6f9Q52c",
  "key4": "4RwS81Ct68QEcqnQeYfsydjGvt4cjh3HT6pJcKWweHksVWCMZbCpHQGczqWfiZRKWKkDwAf7X1pWVDFuMgd6uZWr",
  "key5": "3RRU8zULUx3yUzz8FEnijSRwBpFYjRCeiyiWNr6mcgSMGQXwXCJiAc2joRYArWt7aRnCctrVoj4jAFXTgh46ercL",
  "key6": "3Q67P3LJ42KUzKbfmxBiY3zL5n638rc9TqWuQrDCYzMSM8bu7WheKpXFwsFoLoGYEZbZD6Ajv8U7CPjUSrLNonTU",
  "key7": "2aMs5HiJiKZD2ybkME85QrNTgX99uFEa3rK3gTcd75VrLfCSNPig4bCeAzpHo8b8p9gh3xXymZBjRXpmVmCosSq4",
  "key8": "aFXBLSsKK9oLykP95yZFNKH7s6QTXizL93xsiJwgb1PTBeZXRa7z3XyiqMqedY5tSqsQXUfeEdDNdpAKDdEMJj3",
  "key9": "5gB3PEbADTb4bmSz8MMJsDrFtHuoAfgQaVEC7cBB1HkanvZsqD9eTQrU7SgY1Lh2T56kWDP3RuuMTzK3sLVk7yVB",
  "key10": "3u1UmKpurPXLU2PA7DeXQKKa6Jwar3UgczN2aq3roa7zwkKSegwUbmJSshaS2ThZi4KGvh6GBVPAsQ4QZbURS7ff",
  "key11": "qxVBX4iQi7rSivtpLwtcXnMsNXJekAH8EPCDdm1BLJymmCpiMBAeZHWtQEb2vZ1sVpZqJNq4ECYXvJVpebNoAqT",
  "key12": "49BunrJziQBceLTj9gZXwftNXAVFA7hGTHcU35tMiZL5umeDrXNpprRaoyHpjWnzaim928v4kPHJ7znQNuBsY4Ez",
  "key13": "4JbrQeQb8CdRAsSGQHbuMZYJ1jXJ1FqpdtGFHfCmwUzGqyLYxxnPtfoSN3hnqDevaCN2BqWbHaNzZE3w1x85EcYN",
  "key14": "3v5SJHfrfZqcSMaXAvrbsvQHCPVvBxvMz8kiR8pAtP1H5dy5i9WmdYPqYojqxJW9j7kA714JS7HVFTEoGNGq9Nqo",
  "key15": "5Y37rG7hGqKPPkvei62PDHDRDmdhK32XpJBWz9WRQGqrU3gsQkKgA1VNxFgtZ7PUzbuyCAr7BuQvJ8fANtN1cX1j",
  "key16": "3rx5CSq2EGmdQ439CrNcDY14ue2QmwfHuvk1cLwoGesqJBp75y2JDiY8e4TdRjwWRmiVaG4r9D6yE7VEX7GA6J1M",
  "key17": "4ehV5AjktF8mF7893AE6JTZobx66f5vJE6kYbjZhptTxEaZLdgZGBQYkpNxr87GdCAbaJ69raW9LXNEqJHGz29VT",
  "key18": "34qYFHzpAVspgR3bvEGNv7B6ym6M1H1TvANd4BzTiR6fEF5S1SeBzRp9hWDmHvtP1V1vs15pFamLR8GkQiVp4TM2",
  "key19": "xYLooqSvgux1sdCoxyg9kqZeHTP4APkHJzVQD8Ymsxx7GViDgXkZ9v6cjHbi34wgggLFbArzfTZXor2msoYnd7Z",
  "key20": "5rZthFi8NZL5CKYSodN52sSns9bro4LGqQHCnsWRc5VwUMbiEQBcfTTY8cTfqxcbEmWhzmkH38xaP5Kv3551obeE",
  "key21": "2DbWj26JvQKnb97fVZDDbSXFWo2tWEzxSC55kkneMkhxQ8YQodoQCSK69MQSsnQyaP2KbZgVkEmVpPeGHY4tVDVV",
  "key22": "5uxzQeZdDsGkwB2pCLWicDXhvn6J15BHXBhuJJj5GXzyvHg8oA15qRed9AD3i2nDiubspJ8rk2qrcR8VP7RYKop8",
  "key23": "Z4yn6JQmGrbxiaqD3LCCCgvR6sRh3LnQRPXf4byFrgSfJz2rhywFz2vy6c83XHh9MdKbjT3a19fYp1NVV5Pzocm",
  "key24": "5ZZN9LJEgArtHbszTRfqUVVj47Tuo4yjW8GRgYFLzqK3Cpquw3Ngxt5wxyaUP8dff5XfWuU3Afht17VErSJjJtA1"
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
