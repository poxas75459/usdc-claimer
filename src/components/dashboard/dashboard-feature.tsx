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
    "oij2HN8DZd5PDexXdfWvUpTLJKxJ5eDHaLneX56h8tQoJgwoyWqBfSbnAqPVWzFHg9BYdiMYG1vd4ZVMhD53kWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9HHVSJUCKFmN3VQ8L1XUS3SxwcY5qxcHVyUaBcqpFoi9eJE4zBp6EPvjhTYDo9D6R2UvTdxT5Fb18om7maMSvgS",
  "key1": "41CccPgKDv1eGGrv8BcdnvfmDPmNr7gB5cnSScf4PWDbFp21Ke3Dd7nPNS4vDcUJDViHiTn1Rc2B7SiKD56Y2X64",
  "key2": "2yYh1xFu2qfMuJorLGA78p3cqgdjyHMN5qFp9P287BFP6G3TP7VMxLaB6KABCHbWDdtmWZnx3vtboozrSsmRhaYB",
  "key3": "5redSrfqtHrn9CfvMB31fJ7fb5uRscHTGYJzsDimSjD5Zm3JMzxr7D7L6wf48BvhSvB9rwumcimjCFq4muZHUfoz",
  "key4": "mKDWcfTBoxhFx7RqCxEK2XLPh8TbQR9xATPNam8HN2UPpuV7VitDvtk43htkM3XHaDEYUh58JqPWJ6QWgJw3qWp",
  "key5": "4mJDzzXFZoHY4MNuPNRkBAwtLLq4fzn4iUcUSRt8A82A72LgbJrL3vrda6NVCWgksAdWCTPcE5KKeADxay6dk6uX",
  "key6": "4AqTovF6bwxk3hd6t3Ps6YF7ZifYxk1QfkTyLRR3EX95Ew7Tb8NAScFYUM8MeHCEa38icGsc6Jh4oRuDoqBfUMgS",
  "key7": "2LrcxmBjhJY1cYfPqgiTHnJAETtmZhvTExRVae5HdKZ7Uth4yxqsYrG6bKxR3rXjDEEJENb5hFB4ymZMyrJBq86Y",
  "key8": "3BzjsKPdQjUY2xLkkUBkLKjfcpqoXfQbZ5AJVB4sFvACVpH8xtqLT2bhmBXUboABKH9yD7LiwTsD9dQLkVTbDH5P",
  "key9": "4mnQNnuQSnv8o7bZxaepzr4QmYkWerMaYU3xA5ZMBY9BuVhx4fDgQcvAUCf417SPp8zAWCxrAv6jSKeGbHkeSGLU",
  "key10": "SDUfh89fkDR8nE95uDXdcyvu6TdaFU4j53NRjDZs5W1JBGLTQMy9dnRBf9LkxWoFyFBW1j63otHCpLZAcksK3pC",
  "key11": "9SuR7D1gngWhNReCMW2X7AajXFhrbHzLHnUPi4MNbTxRHR9fUEzTofvNSUXehr1Cr7V8HuL3BMfR3WMH1MaMws2",
  "key12": "4njiYJgRGvREhZLper3NXktEUoMFbBRgCFCk1zcVH8XBC7xur41Eh6Qe4Ztc3gyHjyhhZb56EshLzEBMwvx5ALxk",
  "key13": "4hN3MkX2pAoHrqTxE1a4EaQ7Q3DWa9ZHupe2FZcoqDCkX3g2rkVBmv8mvHkhLzGxRwW4y7QgXiBBgmovToufgL7D",
  "key14": "4oDsJuVkEcwNHS8SFPSSPZYTScL1Tbtv2CYeZvFCUPmv8RxV8QsG1AdYVgwnyUoa6zLaczMV79i5A1quczkpTwKN",
  "key15": "4Hj6i9SQ3NRUEdi4arjAAUBHv5e12HeMNafbcT9vYfyQHpwFATuwJ7fe1jTLqSP5pQPF8VUYHTmNN6d12erN4xKr",
  "key16": "4KmkWme3nsNh5jUN8u1HsSinUEBSmgipHCwaYtp9pXkQH92SjcnWm3DSnKaQQfzZh9Lrkzq4DypUEo5J22kcFVMH",
  "key17": "2j8z8fatLQ6rdnELE6pnpqYZvxyMT8vic1TAdrH2tXB6fap2kwqTgj7kLaN8kH2Fo3L2KoMAmnPnxmzkuX62Vp5M",
  "key18": "5KdZVzwf3WeePKGqDSSDT2TfcSDprgWXYowKqc5Qyv4DVWfby8nGWqiMFMPUjdJg1SDip9QiqtiLF3UVvBnifdCN",
  "key19": "gEVDYjTDmMLHtBZm5X14JZJSKQmYjFoWTKrEGArVqCbegGCTkje3fG3NjenQbA5kzzUhg2YcKQ26jyxwVWW5zMH",
  "key20": "35WsGgoDAYwQBhmVN8Y4dzPekpoMKBEzFWq3V4aHNVTtTWiUcWm3mo692MHAYpK8U61yiSuvKNR1MqUVUBohiqA3",
  "key21": "3BcjvxHLH1NvH94NbUFEAbNxLiZFmEsi55ysPxMnUBWaeHkEeDQCbhdfGjg2oaYJyiLd1JYakKdPckRRGZj2e9XX",
  "key22": "513RWwmrUZUEXXz5EgX2N39s1NrmLqyj7Z29qb2cwsGDB2vZL2mWAvYksQTfSZGybG7oXfWieezkGpZ5H2mhHE8C",
  "key23": "5cfQG9Fa3kM1MhUybEGtnwrT8SH6WcuULcHwZrrY5GRUfMVVBb4zHgoZAdh1BrKuS1NqiESxQGQQqLSzuDcaVsU6",
  "key24": "24LYU34bDDShUZwG5fWFxG4zwh3voQAVVjWFGWuSN52fEZfYzrWyWoPxeR8kTTMbb92tLMgHAWjVtNwMkKce5i6J",
  "key25": "415zX2JUG3f2Dzm4tZjB5w8fjJoLiAhGo67QuyhVVcZxQJ3a1RAdS7XvkKsmwB5yFW6kp2Hbjd5j7gZxnPubMUiy"
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
