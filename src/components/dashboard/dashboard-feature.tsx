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
    "iGsTdc3VMPPVVxhEAsLaTQFh16cP9afhvUcseJvXf6NiqWXBJXa87NWjSv19m7C6MYx4d39wNoPripedPDfRxLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HLU7GwJ4SATziwgGUbfHLeLmH8593LUnyY9Ks8cfGMd9oU3mMMebpMvcP5JVMp9dftXKtiEAkNFP7iWGHx9qEdf",
  "key1": "47gheKv2NaVrZeU8VpGGAe5acDnQPUT1u3zjq6Z4NMs7eRtTvagxiU5iwqy1QJJiBvubNBgGybCMmqvubnk8Qppu",
  "key2": "67mqRowvB9GzZUcBmqFTj2dH1ZWpxzWVSya3ZYmGwB87qznwSnmgJsaA8YxEfLX97M41m8WTrzjFf5c5unBn2C1e",
  "key3": "4TpK4r3PTqgHsKdTBUCn7kRr8jH6aJQ89QPjLTT1rA4r1orVrNV5h67itCru8XZmVCYAgaRDcsRnQM8poTKQChRg",
  "key4": "3zZLM1NQkLWgwDxcDSDfSWmnztYJX7RqvN8PbCy7SV1XFJfZitsLBdTmsnPyqdzVb3zxACp1RaanacpbppawFTjq",
  "key5": "5RhyK53MpXnmxNTqjKpTEhSNSvQbNWm3TYxEUiEGyEbmA9PSGWRtZgVYoEPvkrMaNRpgsPQzDaudeNuStWKxvuoA",
  "key6": "28FqSqtekp3K5C6oiLGfdQy2NQQzy3A8fxD85aHDJw8g6ppZ2v83fecsZfj33MaqdXbxm47TmesHH4VWYutm5mQ5",
  "key7": "3XTrgR6eCjG2LLXbu2BHQ1BmSYBL6XzLWwJ3JJcwQ49s9MFonk5kDypnXcLefQhSB9p6oneVoRVbasMrZ6GKwQZ5",
  "key8": "2ha8ZgmwjwKMoBDKcJmBPd4dQzncGga7dJHCecZreUdwgZPtjoXZZTdW15hz1njBgJEf3htti49oF7npyHgZE1hH",
  "key9": "2tp23v1W5uds8TgJERubJHLddZTxePYGyiSVZXednTigwUyKdioHnj9f6zWTyHPrAeiZXzt91kiHemQCwDEwCSK3",
  "key10": "49NkBF2Vdb1bgZes87o32Xku5pmaw7nVFkyV1gwejCKum78VpXRDCwbC4tnfJv4J1d2iiiBQ7zAo5WuVg2z99GY3",
  "key11": "58sYF9uj8N4iX3yaA8m5FF6Cth83zJC8Ncu3QuymViEASCpwjiinWGsYhagAiaegXwTQJqcUYoHMLuidBC3tERpx",
  "key12": "NvzdygJoKB8rP11WcAvzsg3VeMbVWPXCu4REd17n9ChxxhCRXDiDS8wDDEoPRKS1mFvhtAkiiUgBcNdcr94pJAb",
  "key13": "2vGhqekZw1g7nADw1Vusf6KbtmxVDfZtwny3TxBpbjDYhumT8os6YJthvN72JXLGYdkjiUvzgMjdm3AmycDyPegu",
  "key14": "3mzrfMmdvzfTxfvseffBpe5b3sLKVLGoYyRk3pk7TYryshugrCVS5skyXMeBecdpXifSPZGBdHLYWxFJHwiSaKBx",
  "key15": "pnRkz2XhSA7LRsAbTXKemsdxuTagpqg8wjwA42VaHNg4rTtt75pk8rju4A7xBEYWaR6ZgQDmy6hSue79Wr9QCss",
  "key16": "5gfPhgKEYG4JkaiUG1i3VvkrN8mAvLr5sHLk8eVzMUkensoL9f82VDqf4YuFQP8SCnQAYgfbXFXoA4nsB1BfGXL6",
  "key17": "2Ln3ytATjPxwctVdUDMCXogAQ8QtyzsRZ9BPNDfQ5hWxL78U7mX6xuUt4DY3G9WMARsXwVUbqjuYJHNKUHuHcen3",
  "key18": "czfe4Zkj3p72yfuM5h4PT1FwCfjMmgWJ5Aqw2EYQpco2odVigENQCYcc3yX4tae5RBNUejso5CtB4rzYAzeSzfw",
  "key19": "3jZ73uxYHq9ALVSeC4T15YCKJSEVQKib8VmmDAfSwWL4ivgT6H2nUhqfKcBkhbZAXLFYN6DSUsu5mR3WB3SRugxf",
  "key20": "hLzWKsWD996DfzJrgyp3i3N7FUD1cjAENhi2ydwjq1ZVZPe7G46oieg2HhP3aj48aj3X6G8f43jivGm9KXpujdy",
  "key21": "4E9itCSDrAFcAWRzoWCCQSYn65EghkZ8ymfQMXdvfL2XjYTYcH86wxLArbQu5rhNwzYPYjzRBHkxxzv358dXGfdA",
  "key22": "4SEPWHM39Xt8F8UgN4FLL7q3Xy6ViNXXURACKgaauK4PGEj9SkL3CiDCPLVU93nbaD2zHPc1xzn3FsxshyhTvDUp",
  "key23": "3nkcymvRaaRk4FvqGiEJqi2AxwV4niypHnC5DpP15mwuSn7yTKqa2rURiL7qeQ9C8RJpFYxnVhMrnpE9AK59Cz1j",
  "key24": "5xRtGkb8j7NhcLDSKSeP1dnKgCm4VLWpGVXoCqBjTpGYmjMCn57c1TkwLv1pennPbc8uSFtmJEga6YgQjNuJ8Azz",
  "key25": "3LLm65nYKvoMtgZP1pB2SRejFwEVPiS91jMQifFk54PnqxEan5MVU6eKckCEmfbBymFg2ZzzvLXGXwSz8Lw5CSBH"
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
