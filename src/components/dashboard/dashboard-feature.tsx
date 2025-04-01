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
    "2ZHssZJLr8zUgaGFwxv5aF7Gx5KjULRvnDai6xL2u4L1y745X8Qw4JTFvJKNLb8GpXLgKsmvtJhLVyYPoDoiqoJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BBDQzLfDEcYChk7BQh7Y4o9pJtz8oUfyiEQv5sUy3VvbrW2yWDyztr5gJhhiXXyDLHH9Knpu1sAuX5kZe8ipCMq",
  "key1": "4GkThxb4jQUKsDP6t95To5XDnrD5KnJ3JGuztEKZuMyKBfcJi2pWsWwYS93y6eyYdYrCcNjLeDYuV96uDUJczMCd",
  "key2": "67F8bJErVQ9FD5ymN2qNFtmg9bZjUf1c3169fivx2uuEgNq4ZS6ofqMigux4bYh9J6wakzk5uq7uSRuRmboa263K",
  "key3": "4mGa1BcsM1fTGyu4Wn5AQzFDjhpm5d97Ln2VfY9pV2yoJx2DZTUHHqLJwdDck6uc4G6DWrJVtZ92jezVF8KgcvZg",
  "key4": "37NqZCfPm5r3qx1foTNYyJfoCrYPMYzSLGptngBwj8TPoz1K4nhK6rjE9zrF9uVusbZHk7tPdC2nY99CrTvtd8Lw",
  "key5": "1XAW1GVYdHZ8bFqjDB8jaVUXzCw1JZnCWNxeybcBjCm688LwBEvzVmP7a3P1TcEGJ17ehdoVzBftYS54H6ZSLRa",
  "key6": "j1ipfCKWGSNY2dk2iShEptU1Qj2k4zhRuJisBNVfvGWdg72HDFsJVmGL5ZCMv5B9pyaYxtBzEz51pZGyCX1weeo",
  "key7": "3jGnuadUgkTEWys4mzexPDmzCpoh179cgSs4yPtjytr8k6x6MkrLzdNR93FnEkGvnScjjrFjvpxz3cQwLTqYS6C",
  "key8": "3pj7bukV7SupU5ZyxESfrbts9Hi864Cs5DrGnPg1Z3ZLfUumA99HGy5WTu6VhJ8xd61JhGbVm44zdtgQ6s7HeD1Z",
  "key9": "4nbt6dwNwoMLGLkLLLWyJZi1wfmUPVHYGzBxvBuPfyJynTUJ6sHXFUZGZWqzNYe7z1tJ46bxySrh4h2yvEinwxFf",
  "key10": "5N61NRsJHX2XXASZ1hBUPAak7LdvaA3Sk1rcoeRvLcaT6R2FERcyTFASEJWv1xF9bQDQ9wCwC5VFCxV48CsFSiXk",
  "key11": "37g1gME55ZLfNL7KqfXpD1h9fkEd5B7dP5uNDiTQYtFvguaN7d79oYkwkhGrhdWuaPqdHXWQJSsrvVZ1wtVF2xAN",
  "key12": "5GWNNDonsxhXQ9zpoR7Ms3x7rHinep8GVtEfY5bCNuE2StDLn2Z2WXMNtZvMU3VHNrVmwgR1r8D72VqiXrG1UHwg",
  "key13": "5Mu5ZncJFRrTk5JLR4NSmQpJeK1VBfLhoswrcwxgzv3jV9JiKDnd1HhkgEhUoS1U31BvzQFwJezwePziizUSNEN7",
  "key14": "4waJT9tSagp9ZPrbf7UvNLp6MjiFXw6r9jwCHZgMD6zouXeEyk9Esq7Cuot595gRAdYfi5ufK5hzV7Cx2Tuim84G",
  "key15": "4nxmCor2dteokhEG4zNMdAYiSjqb1Cz61dFjUeP3qcW248kEP5KVTVVqU7qSf6FGJAbjEa9p4hrxK6S7yExEFtqq",
  "key16": "HXnVMi1X96ZEuDje3NHrWjXxm1mZhze4GTZDtT5nzL5gxM6vx8VRi6WY3fvdyqbcPiTa6WC8sMjjMnrFbbGPxLb",
  "key17": "56rr6ozGmpn8b9x4DBYxmHPCYd4jTdPgdyRJc6V4anbz2LjCwvViTjfCG2Bgnm4yMtc3fxebSt6yqLaC1h4SpKbP",
  "key18": "62cVUQVhjiQXe1fLxto7su3yiM5P5endx9UogkN2kdLJaxHj64Xf8QVU63Zfj5XUker8xvaa3uDFRbxfd2uEtJUn",
  "key19": "3b9ZvLPHdFyu3GykwRNXfnEW4GiwcN3vz9bogswwkrCxCsf2DrSAXDvGhiQVnoakvLPMY1EpYyHdLoPdNJY6R7AF",
  "key20": "2mceVYq1KAhiwU1jG2WiRVLrsgRkfMU2PBpSB5SDhRZwtHNrJ3dpavFdykUSxEDXu5RofqvZyJ36ZYmNLAmLkLKx",
  "key21": "3u8RqbKKRk5H6v4FC62DHDYFJ291H7ZyQZqwYCxVtBePdZhFUxckiRD9wg5BPuLCFHkNSBsbqKSwcG1vnL28yD3m",
  "key22": "316owy7Q9zvuaQqAhZzfUGyX73iUKLY7r87CYKfZnCh2CUTt5zxJYmrw3GPSDfARD7eMoAQA9ic5pQxqWw66aEQs",
  "key23": "26pkwmfDBNAmRbpZ5faG9pZu3MKQ8p5m3K97eGmHHywabrghh837Dw6nPjJyY8hE7Af7shRph4n6r2W19CJmaPw4",
  "key24": "31zrouCsT93H6SVPFQXE3YyNHZmCHVkjRAW8TR2tdSdvZVtmVJRfQcb6a766udXf9YwTw6hPCUJGZTL9aMVPoNHT",
  "key25": "55uuAtpomtacVtKpTg7EhgvedDAUK3vTkrENbqMTnSLtCPs669N5KqaBYe41Xq2yzhceyuqjWmAmtuY7X9xci4m8"
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
