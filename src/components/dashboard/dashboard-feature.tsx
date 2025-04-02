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
    "4Qj8u3ezS8pTqpybvqWfN7rDPo2xRBjQnb5PfvmFeNmKEnT6PHdoJ33F56sG1cfjSaFADiRsWvf16DzPqRYMu2Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NR9a62enzxAqehDKbD1YxPfNEay6og82pmWLT6YAEPJU9LFRy85BwPKYGpmk1KBjPZan8DrboRUqEjHE7tQyUn4",
  "key1": "3XvNJkiP5o3dFGSyZq93bJqv6qjtdAdfsR6G2GYhcs566o7xu4egZW2VtZVQ2X77f6kWVu6hSYfbCKpnjzTNUtRu",
  "key2": "5pGDWo9ZnJxtF3nmqfM8eVKgtrD72xkpuA4mhposmG9WxCsnwyvYvhx8vWqNbp2fKLhv6wWMRD8KDP6MD4xLoU5f",
  "key3": "4WZpJK7beXm4zhwEmHfKwPeGSYc77y7rmb8B1UyR1s3Q3jn1j8pXiaWzcDKjft9jJJnHgaCw34gi1tGvHsRu5TfM",
  "key4": "bBHe45XKFbPFPBwJBhGTDGJX3sjwEyGnSr6Wm3rKjaJxiQKKiVj7UzSieRmdZRMAtfw7jXQf5WqcdytkVYQvsLq",
  "key5": "hkFmx3t922Yv9zwjS8DNiruT53Jf2FxomNgkBGT6b9ezwNHGkG9X1NRvTFSXmDyXAdNcRtb59hMXqEYp3erpNmY",
  "key6": "61cK1Li7LBhiicMNhEAqy4itn3EVX4ctTCPaijyHxFZYiGmFXVxXxeJFw5h5VQpM1wtZFRZSq7CCjkmsNPoBRzfx",
  "key7": "3f1Veaf8U6c2qgdq7kchGKVo9aCUrBJzpHbnpBmzsb6BWK8ShdQ2Gavh7hkZMQUyidH5VAyyst3WmYtqVD9j6nmB",
  "key8": "5hXFgGgCavmGfD3y3JZfymcFdawZNGz17FMKib2Nf1Fru8vECvyAVvAEAJMw94Cj9s7qpvg5yqw6wqBPnQPQk4qW",
  "key9": "5WRt4Ep7po1ZNDH7Y1y4Z1BcecY8YLGDHKP4anKUVWsSpgEmBywWKuYPyZgNHjzkvUSf4xG5XpkEaRVUXv8sRTNx",
  "key10": "xtuvYvbeDVCiNPUS2fpSjMU2KtrjiQP6FgsjbTmTYLuh9rRBo8Qhdn3vyeg9rBwmdvFgB41sPmmuLaj3fKv58R7",
  "key11": "2JrsgUFupT4cXSshQKUXWfSUfAE5AvQuvowDb7cMgktUrG4bYY3Q2A2AqnfudkDZy2qW1FieZ3MxFmVN9aYW5mqi",
  "key12": "tqSSeYX3DqyRRwLwEaJLpKo5AAycT45GXR2tAyVJdbEaXxPFYFYwXLGd57ZDxmeX4nRzadCiVQzJrj2bK2diHZx",
  "key13": "a9tnzbciMEnux6gsEqhuh5XcBQ3zdpDhWLQpa5daHPz5Xvozh7J5ppcteMQgdtNTPxouAm4xBg2YfJ3xJ3qciEb",
  "key14": "3D267LdkTjoLm3bjT8B6WeRviieUuG6eJV5WzNUcaTRDhgob97hBKfKaaQrs3VJYMQc9HvT1o9GckLf935Yibuxu",
  "key15": "ca4UoF21VYUm1H7MBHRjnachvVhJpqfzHCqhhkLqdUNRU67M9EoxZydXbZcMgNJne75f4FivreD1LyMzgYUtnE4",
  "key16": "47xYanh1U1VoDMQ8jeaKiFVPcSHLPcqib1SK1QQ78dZK8i7DZtUSab2SWe5bPps6Un8ovS5LEeCEHG7qnPLwPH9v",
  "key17": "4KV8ZXxeEjAYBKA17NagmWA6dkabyngr1qqLdL2hJKSMfbQrGTA6EhQb4VNLS6iNs8eqwGyxoXhs6gHWPGbE9X8S",
  "key18": "42j3RLr1fH6VyZA2zKmq7AdLwSXogT2PSShuSXjJTFNDkc3KPcxCRNs9izqLQjENKPWresQmM9zsgpHkxxBcQNer",
  "key19": "2Rsqq1DshM3WJCTaRW3KYMPq5rE9GWBQSKW3cVPputKRVq2N13v3HGF4b1gk81fZnP5KTJHnZwdwK9pCK6Pt5Qj",
  "key20": "5t1ggtY62EPcHtTDF2DGAT3L5dH3aTS6HjNGpbFYoQMEeyaBbXvsjxUgYgCnTVErJVfZ9GR7brQJHn5TrsaGPJqe",
  "key21": "5HaNoLbd6gzitFMhiUz3cdF1xdUyVsgybooGSJMbnchAtuWwQQ4Ujogeg2eZFd8df4NHdMdLVN4Ce2TqGZjrPFpm",
  "key22": "5zcQzRTM3LmhKdHgFnFTB4G7nmpghjoRa4SBrCeCCcSg9bsUyGGFGX9Z812njbyaRtpo6oQwaNQgeuesicPCsWye",
  "key23": "VeeA3zTGxQeUMTNY9u7Qn5iEMgtr2bfPkTKQPyhAGNsJC8vgvNku24DZgDRCsRPxeFWAFNzAB4M86nJrfczRMdY",
  "key24": "3fR8XyJap82TmkbcnUvkN8LRY747cvBDgRdTYiwB95ZV2GPep2xWytdukzRXKMbffnHgBZv7JeEvmcejzNMqysaA",
  "key25": "2Pi7i8BNmzygQGFkBQt3PrYpyghWHtMbDTcerXyAHziFFxJ2Ftgb69rCAudjg6ZwiEpc4ADzvtXB4Lty9TDgZFqa"
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
