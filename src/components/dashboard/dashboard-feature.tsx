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
    "2YhSxVu35FfLxEcfX1MqpjfsnCEbQj9taQLcpnQaok15uvc6x8zLCpoazbAKMbRsY4D4gjFjcRLXPBVs9ocu5G9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAyrD7tPUmKKMfTUkeiMQbEZK1hVVZVg3gJ8HYAnrjBjYqsQYYNiudDrzGjB8txDi56h2SJm12pvxwppvsz2yYz",
  "key1": "2bBCX5scEQcsYR13dPYMhX2JmGPuxsrp6hnWwAMrgLnwBthhbBEwJ3WrEaB5MUvrjFhGmtjw1yTSSJ1vNQuMtExF",
  "key2": "3QuyzB1VZDHg2fbFd164ZaLTzz3N5Uy5rhQTvzNptE3RjziXXUHJh8Gp3Nmav34pz9rziyFyYEK3Wepgc74nMQKu",
  "key3": "KZshtApfkw9wN7dabCmUsCM7cSm2ejtPxRRQx9LwDhAh3imE2XE4ruDhU1LASAiL8pzw7iNkgCJ2pW3FGtLc2br",
  "key4": "3GMsEc5fZYUkGEiv5FtrRaJUNu3h6RL5TrWfBuvmhmt3j7ULRHxcpPuHuhnqLSkJjxwmdamwPUbf8HNL2RWqEz5d",
  "key5": "4AW7eprcspvkEjX2HzUGpraQa3LkChzWx5HfSfzoaze2Lgy9Yv67qkh8FWJcBBDUVbucEuewZAdQqZWor8VN4Rm4",
  "key6": "44gZhvxh5KCo69fpGiojMocgzEiArgd2jPFRpr2Yvk2cby3xoTQcn93w5CZF6Dkj4QMWdfQS5Ki5G8fA8fBsZC6V",
  "key7": "2N9dCM12K81mmbmjUVAd4ufTShV9KxLCf6fyM39GQDvMr61uNbFZiMtsRyhEXf7eoKsaJX45y33bwbdc6BUN33Ez",
  "key8": "3t8WDoYBahF4o5cXVg5rHpQqFfrHEozJVjZ5yBnGBczk4FRdPSWHhfMHPHADmgfuJC9Gd1LY53eySM3uUvSDcbUC",
  "key9": "fwYmeTgs4jZnzZ272pQTstpcyyfbE9AFxuYFkFouvNnv1LegFPaSfJAexLFgm9xRjQpDy3nXRCbCn8JCEKYkfX6",
  "key10": "2JgL4Y8EJRhNUERxFytBZZiqYXpkHGu6puSVZmTzvmZMRC25i7aXaSeu8pZ1ASKW39qrTYttRyH36BJnHioyFxWx",
  "key11": "AMryyXzjq3yergWEVQSo8Uu3D8f4434egyUP91QJLge5VLN1ip2zYGjJ3zxVjdExqS5iopzEPGBtfErTeW41tfu",
  "key12": "kAWTfmU26hCQeddLWDV2h6dA2PLBaprEiw5hVgqcufFwG8R8NQvwgwSTCvYTRawfke63mSupznLgQ9c2tvTW3ZV",
  "key13": "5mAbdZZW7KqXnzCA57h2Vo3ciNzKztQMJepFw5xs5ytA7k1B3Wj1DWdQ64UK53XL5RkEaRSJJnvZ2UqTjRXRrCZz",
  "key14": "2cN94U1TPpUp71SiUpCLaEwT2XsZ9iLsK8Ha2CPc2NqYXpFa1Shu58Dqr6nHVkpLCRZd5SXWaVjgm4mtkYD8427W",
  "key15": "2hJK5WZVAEexmKTa5FfyG3XEbNqREVuafiwtBwhVDKYvcFW22sLnuhHGoPtg2Dewr4FeL8RwJcf545aum3kGuoZu",
  "key16": "2WEdFjQKjhSeRHGWkAFZLuZdm391QZxMaVNw4NAdoWAHxA5JK3VpiFPETuzj8DPvBQZStd6JK4DLPmdeXZ5oz4r2",
  "key17": "5JjNXNkL1tzso84yWbgKTzKEX8d3o7h3YqUdt6TrrUuHnFzYZJcD9zdrocqqH8GzNgwXSBLE5VucZagiyoNSrjcy",
  "key18": "d9r3joqzFuNdJazY7boQYcnyWBJjQdJxKNyLewyzpVWZZjzE3hnueVUFYV2WaD2QDueNnsgzxoPWLjqh45aXvA3",
  "key19": "5SqpbN6tXZwmpxiFwRiMFCXU8GVzh1dVNdhvwduUAvDyaoxbN8MY7BPXHakxmUguKwzHLP75eizR1RXMMQKRWQfe",
  "key20": "3qQdCX3wssNRQxUCypxEaCQU573iAfk5ktL9qjhJ38gRbwnDcXfY8moCbh7PJ8UZ9a4KG2DepjCozdcaWvNu4YKA",
  "key21": "4LTGanRMGUK6eENDNVprAKzXgDRVKZcYq3bH7NJQGNK3grNUs6jMpNmjayX48KykJT8g5VF8HjCtNvgvUGJBTmNi",
  "key22": "4wH4i1bg2tXPbDUUucquZL8WnrVmg7m7fyK9rKrr4b6BpvP63uwSkZqxsW7mHm5Eg8ZaqybfMfW4F625Mk5ZBLRX",
  "key23": "2pLteWCm5TY9aZMJs8DKsezSQeHNFtCBTH2qME96sptG6RSU8rpGCMik7nJkPm3CCJgjDgZU8UYJgQBvBS3dALDz",
  "key24": "3kVXE6ZSZiM8hFM3nbQQVqFT93YykddCWURvU6CbCsoMQ1QEhQpwLAADX8GbXBuRJGewWAfX4kun8PRj9H4FdtqH",
  "key25": "2URh26z4R8sHX5wbN5ogabUBti6Y454eGbYQtmhkffbcnx8nAzUiRNy6q5ohkrn2GZYJZkDwJAsijZAPP59iLPM7",
  "key26": "4EJjMjS2K8ArBuRXiAfUGDNCuMSS6qVPbQcXjVL2iVrMWtJ3wD3a7jKqgwqVr5ccgCPeM9jvqa7jxohQbMeNS6Jr"
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
