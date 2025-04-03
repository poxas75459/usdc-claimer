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
    "3Lxspqd6jCiNMWVxB5NoKsQR2iJqqbdRPKjyxgsPkkEccPNqSUPyesTGrzYzNvoawST3P7hSaLQjgS4T2jWn713i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKJfEt67Vu3viXc3N58SMdUQ38sxUjGNt3UDXkxyeKeA4TTdgPuuYnowfdYo7ZKE5Bs8hy5w964rUvHUx3PwDZw",
  "key1": "5yx2fxsBDhj6VCrxjD13PpdH3PrmEeg5iyuYqKZFN23XDCXA46rJAxsgP1AQ5rqXN2jRRjoULWMfZJdZgi4Hxf91",
  "key2": "2CrrggMntTSh2Hit7gNpMT5jocCGm3j3eSro72rbttpszPtER5UAcjgeRLktmDj6ELKqR5TVBnyXvi3ZqtU73HSf",
  "key3": "5kg2VVgp6wE2SMAeMRxVSSMXr59N2VtjXHdo6PGxN1w6qve8NkoQrgppDVLuwKcLFsukNx5mn5uAYZdyjk9zrxwH",
  "key4": "4zqwZJDXC4yDnGpPvtowumjSiXWqjr7iBzaKdEA7E4b31oZPa6vHkVmHVQjBqwkmAdjjqbudbYXwh7SNUXBhxYmg",
  "key5": "WA2VjBVE7YpmNfqknK4R4LQdcYgSCgFpKHiiHsYHj4uY1Zw7r6hJLnFzJSvPhiwsSvYe3i3HQ9zvWC8FsENJfeB",
  "key6": "39oP5LGkhAm4E4RdhaEjb64da14JxmP313mHmqNrStweg25mQe34RLY6RkFJrHozVaQy6n29DsXcc4F4Mbx5BDBx",
  "key7": "v77Q84j97dx7hD8qexYfUJhyTX789wxFa4nbEaedJ3SdFjnNnyQ1DM59gRJMCET2k4GSBPj4KicWJsaSPUPPe4F",
  "key8": "4wnP2sW698PH8khiU1fo1sn8rguUnUTrnzatacwfhZFiVNBmQY5gwvTi5oBejfRGFgjGYC89Cmhy2pBR7LSrNFfx",
  "key9": "2jmSQ1BNdJf1dmr7kLJnHQNGq77omPJauWL37H7R8hk8799E9vjaBgxGPhgWYzTU2bS6HpEoDzfzfV9hTNvW4HFK",
  "key10": "P2iu9zaG8M3PugEiARJuRksQC4Ug2AcLFrjTxEeM97uY2bBWJqMSaNYzezri2WCiAyRKq9xEbTu98tDF36xidwR",
  "key11": "n3Fm6hMQL1qizEDJFS4GHhYSBUCEAU4ToqEx8r854AfjjMebTkBtMCTVuoeeKxcpzeBoAYaF4VaFqbm6UkmE4nS",
  "key12": "2ZY3Pg7DnwPtYUH616LXHvSCae4WAdS6t6fvpSRjmFdo3cdJdXkDwMPGzz2mx47RkMek4ohSkETvr68knuQpzioS",
  "key13": "5WB8VVh3T5XMg2gvkxSZRD15N7peXf4QQPdfPiTWXbgCVVaXyp3FToLhcXQKoi9N3hZGxeZdVS4RPv9BHHzhtt7W",
  "key14": "462W6WR4H1EqgKLAuLQJdrWBSJN26gsutSYz13UGF6faiYWc4DicLqf9wX7Xifx1MBjEnP9qiTDHvYyFSvz9tyvs",
  "key15": "2kpF7pHuesMt2hnoWYeBPRfnWLDQdUdUf3qp5QwHZpFgBECmx8b9xvcVh3pxdFiM79v6SNsPHF69CCZzG3aLj2xQ",
  "key16": "5VKWYVCsDj6iRyS8bVj4dgZ1gSgP6cSxK657EuKCgPJvT4RsiHHeQjfQC7eXPQAp1FfS9pivrSyoxUHvBTRyj4VN",
  "key17": "FoHop3DDqMak3cmyR4UqGXcHXYoqwVPDyZq3Ras6QL9ectn4h77zJpaGGxLoQJRFQkrSX44dggYGDgHaADRLZ6i",
  "key18": "4VsXYvggsXAphpt3853HT6wJr3CFXEwJhnRuehquYDGB4dnEKZKy2uzcCqg627BtiK3AhPfQekdrvsdFbTskvzGr",
  "key19": "3KJvcTj9BK3mT8ULuZ6Laifo3xybDCSkzEAGUoH6LshC8C7j1hKgR2uLYcbQAfizkNNwLFZrpuBUZiMBVkfpME44",
  "key20": "4Yur41zs8kt88YQjvYo7XtXUuoR2wJthScmhaYAwNWcM4cPoSDbh8rEDkb6aW7tgq6VvpksE2dHgBNwdo7xV9Qm5",
  "key21": "4cYUDJZ51QpygaRf6i75akJEmG7DSotH7CeCfEgdde1AbZMRqJaW1nRGjqRK6xyvfTWtQ9HoKWwBd1tBu2u1BSf5",
  "key22": "2qtzrZUP4t3YNdrAf2AeJE6XP17WgtnNvw6DPkw4Q3WgKaRNB1D657UifSiVfeCVkQQtLcWiJTvAawS3eGmLTKjA",
  "key23": "5PZL1Yiqwfw8xGYhj4qYh54PQKhZwZqd9acnJ96qZyPBg8GwKn6q1F65547J2VjVJ5fx5Lng88HdPzTgCDssyoAk",
  "key24": "3LLEhviMVPggi7ZVV6vH2CSAdzB6eAriB1fFeDJJHMWDW5jbydDW1cS7NnLGSNtefimNuF3eHuiZoAxepbSb1E3E",
  "key25": "5WWawXUmkkrhvDs8EKkBhDYvyGuKV5GmW8irWxqHHjwQX8bSTP1g4ZsRXQ4WvocH2N7CcPLKpLtDRecGyASJT7PL",
  "key26": "3MKrFVD6zbYjv9HEeq6XFKwAa1pnKjvr6Efmjhx4SfzKSZAjzPfx46nseFyv9PGqFkfMSLVva6upDjZF4hzwK7Br",
  "key27": "28xbpMQ1H7eQTfwBRmc9CbDVPVzH9bK7LZcWTzH1opDRBeprz8ejsTj9q9orXchj5VQZfdaNF2tXuReC7LAJmEyq",
  "key28": "5RixKQ9dnQdD2jJ3oZaBkf4PUtnRQkUFmxsQ5TbNAZMgFKc8rRAh1j8q1snnHHRQJ3muUqmpqMKUbXxJh8MRmEMY",
  "key29": "4BiGAF1XLQ1CbVULz4xKB25fN1mBzcUCebqibReM8vxMck1FyUvUMKzNuiu7XkTUPqBfMfZFXjfQzGtxAqm7xDNj"
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
