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
    "4c2viwHVAja2Uyik8WgftwtEhMSd1zXVjTo87opK771JzSKios3W7h4sM3bYqVqjWG5QZvC6r2oSDGWL8PDgs3mY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dzHsAg7bqpw117Zw6Eh8RQjbFbVkJNsACeUDpq2WadFE1tTiC8j8wU1KC8HiAzWBEX8BUDKsHCtEAQixXsC2bKv",
  "key1": "25H4UEXCPypmy7YtwzVD8TiEEtiVPhgjC4Vn1Dpbv4Y1ijgqezYdywyrBY1L7WaTo89Jb7Y9TkFHV9LAbUafdnht",
  "key2": "3zZBYXQ6eA2U5NLFXi7dSgo6zCi7tcp3x9G7smv6XUPA7qHgZTbBSJFo3UBtXBVBPhDt7So5muXNnC7qttXB5BPo",
  "key3": "2G3xgLVLVRa6PgGzhrrjmRyxf5iytZfL5SBiF9EkW2RLr1KBvXxeRGZ3rVgCFJzWkwB9jrRAe5gNynZvd8DJvhKy",
  "key4": "3EXqJV75QNWZpK3unenscwwfxGNawvqNJRrfzpJU4euYMDCuHpJaLKBCcS86daHnvQrCFq6TMnmekQTkAv6Kmh1o",
  "key5": "5r3nKd2uKqLzGrCBHyeJEL1XNCvq1ANHCGf5pURJfuRtthMknX5vVvzGxR3thKtbwqjXmqFUGezzP4zhSJUjskKe",
  "key6": "2dgRHME2tGdvoKFMVpaDAwzRdJ6UuZvijZXcH9Ru9VFDEH2qyCxt9qVGSYXPiY3NHHPEM5cfMQfME4hbxw6ZMeiD",
  "key7": "3zdHYUZQ7rFBY6V1i7bZz61cxyt4f66qcCt15nHvy1VPN5NSs2mYh4rEmQoexR9QBUydPQNFGJLHAzca3PfWViwR",
  "key8": "3jLLYmC1kxs4SDNUCpiaJ6SB6VZQiBkg75r91R3zd9bSbLEQ8q42SkR8CbrQPgZCThf1SbrwEGvFWi4gbJiwCH2z",
  "key9": "5Qyuwc9MzRLQDVfK1fKnsbEddCqEDv62YF2Fqj1N6PdqmxTRT5Ab9f3hyjZWQgj2mJc2NVCNwUEp5M2FomtDD3vR",
  "key10": "3yjDrvXy5CTnC36cZctqSZFQzMbfQHw8rHRMSKPRqfAuskJjMYU76SA2bRZooSjpis799ScQddQfM7zwtsNCqPw5",
  "key11": "57AWTKs9UGfZyziXzhMaa8x5ekkPaf5ELhD4FD1EX4ExQtQg38vrt58icvu63S2ZJVuNNYfoXLWzGUMpySKEWMAb",
  "key12": "8J5YCZ9dgzJtaH5KMpHDdALdc5Ax6NuaXotWFHgzCaoMC5phjuPDSSb4XLWxrmSq2tod6wNPPUtjoyUit3PzwUV",
  "key13": "5EhECicieqjMKKNcQRexDBRqSCWhGL69tdKQ9EHCkAtdt96RzecEf3GLjXsz8bbXqRFuPHnpYFFTYff7kHuVY8yR",
  "key14": "3tDtEADBvwGcEVQewRVhf56maBDDB4124prbgsFFBoKQpNzha9h1eGo9zKxkCnUk7W2VLbPKBvyYuSE2t8thDqa6",
  "key15": "5K8xXbpeo8Sn6dBNp1nRbGQvWUxX7KYCCPHoSbyZoKj4vtrgUXahH4LMWJwwbc3KAz1WP2DFZosXGSLLaBBGVZDx",
  "key16": "YjHrpwWDzXbX8MQ968Q9ZPFhdqmovs8nXX8qucnMwLJPuoDsUa6UxgYMRNUWpZ8xbHgzP5iZKyjcZ5zE8Fs18ym",
  "key17": "61aHdww5XMB84irBzNRHi7szDjtU9CHCZ7rKpjtrUVaaaQ2uTnP9Z2ZEnDHuucGSeiYHSC29tjGikLUFMK3Zxkcw",
  "key18": "4c45gtxj3SU9f4GNbtcHZ65BjFB9MQC1w3ErHjz8FQeU2XF8UMqYLvBJbbJy8QjBeEt4oztbR8xfwNNB2w94tLr7",
  "key19": "4SnMedU7K5Uhc2TqHuHqxQrmMxXi6UJS57cKLZ1LmPPS59ApZEKWsgoha78RwYsGgWGe44bre3yPb61Daz2xe25B",
  "key20": "TQZUXGABbsPK1Dowx6E8UfNVTZEWEpLmT8yrJW57z6R4ahk1NEUhH352frHvz96FJFjUmt1eyMt1QdCKnvDiMoZ",
  "key21": "4jxEMEEMtSDbiQtTAA6SbccSx6zzwbH59WzNeAtyCnHR22cL4LXucRSZY2QXxaeTpi6RUpZRR1mg8mHncJ5h3KD5",
  "key22": "2YxvYSf6vtJKssYsT3NLAFzvLoiDKDjjUMRaZjc5Vy4xRjU2GzEKN4cnX2Ds81fpQGN36FDJRxM2XbSpdTFR3yJ9",
  "key23": "4Qc3Ev6s5fibysM4pyZARmqdmZztwQJr6YEvzp6DtzeXdwo1qdNJxeDae73zyKmJFkGtJ5mkRJi7cpmiQkx6afEq",
  "key24": "2yBaXDFS96N14p9ZCcF29EkigCMEEUoHtU77M983W8877wMZwPVNs1TJTjRCJjB6vLbzChujfuaoXm1kuQWjJbgN",
  "key25": "4CVuVYHHcFj3s4ajSNzjhcZhMpzJcjerWTjnzCrocH1fUMVNqXSAYMApV8zDm7uP4jnXGLMWV66311VH63aLe8Qn",
  "key26": "cwaxDRg8Zu9c8MPEN15hfyp6ouYS7rRqVjcrf54DnCnBYmGWsnk9wo9UwiNXt5yF2G34SVzTvbEdt82unKrSkGE"
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
