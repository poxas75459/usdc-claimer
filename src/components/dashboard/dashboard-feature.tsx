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
    "2D5hyvFFC8VzGeTNpDrx8zXw1M23SczEDHKjs3fwuwFSiwDirh8QzNXSbHh7EMJmMpnqrogBRGXvWbXDDZnYcS7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XuJ7i6dEbX2HBHPfFyKX4FP31gtooT4qUtsCoo51LuXKFbuemKTWQkrm4Ub3koChtsYPhUUVcxooBGmHAH52hVt",
  "key1": "Rxy5Qhf8t8zNxiRKHmQQHmN2Y4j5YvDzVDcgAmk6YWPwv12ZwiRCEc24fC3aoZkRe3A5rg2ncuRj6KxvoepvYgu",
  "key2": "2Ktk7wFQbvgNmt1K9CSwszBDXc3ZziTSSg6L1XpKaFUcJzzY7qevf7Wkma2HvbMXUigpa48wtSNXkkkPsUCUrUWB",
  "key3": "2JqZwd6yZ39PZ9hqK61Na8SFScvaUX9X7PsJyQXFiGN8LBGmqz6sJimrQ8E6KB7ENg25ca3713b8bjX2CPJhTkrf",
  "key4": "3FpXTyueCeZoiiTXD3B2YdGbeuVBiGXQ8LimMmboCWAcdVvY3KRKhCQ6LfgNCZCHYoHiH9RCajSYsVZsX1YaTfQp",
  "key5": "2wBJjwLdE5pRaQLFxbBJMmcV2gpSxgCo4UQZho8TkeauHW6vi8jfrAu1cHg6MX4D4B1D3AaBfm7QgD9yvHj81i6H",
  "key6": "5LEGWzwNFsH7DpuHCArrT4w7t6jYPpKGweQRR17vuScB2FkGuFjJm8zxtib67TveP6oTLhCMFbzr5D75Xmaqk4Hd",
  "key7": "4pA8HjZ3dea3nrUNKLAJahp62e3ZSGYJytxvX2J758kLCDkPG4rc7g6qqGiKjFn6sPtAPSBHxjq6k9s5zZmTp526",
  "key8": "LGahZWk3hBQ4HV9pcWHn4oJDG1Djku5qfKc6zfAaAE9bLNLxEu13VrwDkuUYKyz4XkUix9LFqAmoCNiRFg7z4Wh",
  "key9": "38YwfQxJQvFVmmLZr2AUZceJu46v24S1JibTTjQMhFpFh7kWvHkkZPQ4jc9fYfgmHSXqewRdkMDbcAytuzaQYhkL",
  "key10": "2xVGxjzzFGynHSNfxGWwvqzLkbQgsDGrE4WtUJKw1qRdwCiBMwQwJtc6ue2whuxP4jvi3SX7BN8vya75DLAeM5ZF",
  "key11": "4bqigY8mSxUGs1JY3N82c6QKwBuEKHr8kepdiyhWdDFxGrtEVmynQUiQR51MZ7iLoU2Fb3edqEb9VkBf4LVn5tU6",
  "key12": "5B9KzpG6YWSvUxoMEsiukM5LMRhSfHt9EvbbsKWvGPoZMtywFyJSkp9jGVzx7MZgFTFS2ESUyNULQK98qgM6stoU",
  "key13": "2K6JFykFcXKrwLRS3rsV2EYaGEABBjJU5vXMtBhbKbQUnMpZ1Xmjc97VCQWhxhNzSFB3iu9CWS5M9FsaMM551Cnt",
  "key14": "4pYETQ8WRvbu9rRpyczutWZfLPSXHTvrDwjhsyNtzyfkG1zuXjJTqHPBnk5Tk8WFhinr92JC3nUNhtu77pxvC93K",
  "key15": "3Zj9zpwG9TuG459smBViM8sKqtF212wm4FBCVjRmUuSAvL27jLkE1cx1YMagTT3xUoJSWbxWte8YhjVsBTBN5QGr",
  "key16": "4yFqj7qVSDZymqhMNeBu4VvWnrrwXivcqRWu7QhWeRU49fzrTQ54XHuLe3nJv4NrHznzqFyPV7kKnbtQep8JPeKT",
  "key17": "2gdGbXQnDqwk8nfVLmAFiWpsL9zRBPUK3q6EeUpMzrSKvS8KQKJxVG12R7SAHuUjB7sD4e2xwMr9qtXLwDJFTUF7",
  "key18": "3TCrJVfKbDcGr5BqH195bbSz8zjerL8B48zZ3qVQb4QhD7qy9eusnr6nxdoKWovhrk6co7sEGLgfmHvSKpUEj4ah",
  "key19": "3gYLGVXpmRJ2jFiJfGhkC3BrpzvS2NK9e2qkGxYpa7Movnis8YEaKxCeLDNC2hjW7Ls7FfGRHBuGBfCTLyyAuERL",
  "key20": "QDoWKijEnV4oCp9KjLT7UEjVfEdDFhrfFxmMi9Gp6NEgXAQxeubFQAJPwG6gqMJZ7VgsTna5UdeMmi2sny4M9rL",
  "key21": "4kEyFfWVA9mYS3CNyg3xz3nRMfi8K3SuXxAhsQ9vyprV7AF4PpmKoEQHNiWSK3TtA6j3uKoKQMcpLLnv2AxM7kN8",
  "key22": "5rdNofxemGF43gWjwz73uAjRYs2koPHDf5WxHx4Gx7srCJFV7Lbt9D6Wi4kJa3NiPZKYHtqvmauStTpVMgPtdv3c",
  "key23": "56tdW7cDRaGHHiKPQrgy2npt2xgMNWhQ2bsudXtqjTpnhVPKSLLqMyC5puwsf5Ff32QnBWYyet8M2HrdDiVQpvkM",
  "key24": "2XEdJYbfyfct71iXLtjbwrgQMCyG8nyHXc6AgPB47qGLcXwrKRC14GfBjcEN4QZARzVnzozFfxqgUSX4JptjQ6gH",
  "key25": "3yquB74kLoURDeSUERVkRSL5TW6cSR4rBireQsxz6qBEPWu81oU9HmfyAuAxWKiuW6fZthA32kcY4Mse6W12AZWo",
  "key26": "26n2S7Xuc4n9hgMGgYMRN1uZzV56BVTECJ5gxUy8hZQm54Kjkmr6JyFHsQyJAtp12JCSbDrR6EMfVctUkFeWPLEj"
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
