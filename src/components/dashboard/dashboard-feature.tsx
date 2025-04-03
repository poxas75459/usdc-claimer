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
    "5Aq2KYYcNZRAJWaA6U7nJw7vUz4KyQeJDDiJwMoDz2teqHM9Fqqk9N9YwCCvhzT2UbRHShEERYfmsLHUZVAvTm6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nfu6aMMMsRFX74cBiYwo4eSP8TsjwK9EM1kgPXdx4hZ6FFjeUgqdJgMoUutvh9sdvHjPz4f6JHap8Ei3x8jhQHp",
  "key1": "5b2538u1TYNbc752DRDZUQvfXRKAxFnCN8VnagVkFaDKWKgF2cg3AajwjvMsSVS6yEaz5REEpc6gJVgRJyRQc7yQ",
  "key2": "4NKHPKdR7VWXsoADaZkc716BExDSzVeURHV8soDncfcKmw7f6dHzMKgtakDHPzAtuRP8TNC4Jiazc6jeoGt1y79n",
  "key3": "64w3BPBcpcAGM3Zr9eMgEzRtuoEPo3J26VrSdoG3heWpDSM8KGgURPjc6J5ZB1Nsd7gBnNiBZ7HAUPvmkPhghhvd",
  "key4": "56TybEiGzwKKco9WouZkx3TY36oqnArfMZx8RRs7hVPLmHeSy2fgy22PVe88NJEPJGNp7aE8VwdZZvSNHSF8grKm",
  "key5": "46U3umNtPDqLBvru5jwFos4LDPaeehXwjvDpBrrnuQe23CM3iRLn3efyJTew3E8VAGoMutvf5Pc5td3fxUCBfUtg",
  "key6": "2aDaZYWaovWPekznJY5N2CqGeE4pdkYgesDXF6rTX3ayfWMu4ptfUmCQtzikwjwxESFVTY8kcb4THGtdGNLxkUxQ",
  "key7": "4zpL28ogvizKDXpah1HJC7KvDY1b1bohy8q7LGnapcP7Rm14dumkLvuKim3Z8hnh3srDh8CHTeLUW18Ks4pXdw5y",
  "key8": "5Ns7RzjGaYv33q3SVc8MWde6Fu1bYaVHtycZGEG7ao53ba6cQXiDVTpui7am6uHd7G4JYzXMBYnWTBn7wAnsHYfA",
  "key9": "3rg7EcM1zTXiqumpp1sTVPLV6bh21MLWrwUXviTyh5Di2qmes3h171cnioQ6mMUyizbyc1ArNyxwmF9dERSpXESB",
  "key10": "3X7HqmX5YLy6opajjMH9snDNVPXDWhSbTqd6XVqx7CC59HHtDf2a2giiQ5xqJYJtQp7GgudxsJa5RaKvSoyjiAk4",
  "key11": "63sTjahPYuSU8bZVmMsbJsNJiKpfVt68damv474aPctQHbFG3VomnGbp1y2QF54Fwr6rsTWh5qa4FZbfSVtFamuG",
  "key12": "5yRiFcYgGwAJ5QZE3bEEPZNU9VbuqYhvtP31nnGVvdgthwxj5THv447S6KhAD3ASDr54XoMZtQBsuBxjNTDVpJxM",
  "key13": "51ruAxHvSz8j3s9jgb8xcGS58zr7ScNLmF9JxSUQGGhpShJEFUGrLPn24cZ4uEH89ZMXuAF7ATY38PSS4yN5ypPj",
  "key14": "5yjJH3QXc6sFZRX57sVYZxedPQVnVhTSdkw2nrtkjEAJ4pPtmqQyzveRxY82ttjpbdf9qmmQXGpqQfRnpQwg2pcj",
  "key15": "3snuUqAwC2bMqKKEvPiGJbbUDkg4r7m6q6CeTi7AaDfgoBao3vZbN8RgdFh6KGP4pjkhTcH4yx6Lm6jpgbLzVChm",
  "key16": "3uU8B5Tng5ED9nWRvnmzzTBjWzEUwPzNSowXW82aKzprpUGR9Sd5dkpqW7mn1PxR54Gvz9Rq2WadibPicoiW4zuA",
  "key17": "4jFKa2Z6hb7vFdefL1nQZ5qor6LfE46yxA4oSxs1AjUJT7upgKqZCkkEKbFDpv8doCCwivyRz6H2Ft2PHTgBwUo1",
  "key18": "5ZRjkM7XrYvkxUYqJqVidverNzuVnzegGzbGyWGrizLgK76fBujp7bMGQx7qv87woJCVUUJeAB6LvboCqvWuyj2R",
  "key19": "2CGoPXcGsxompANNrdWC2Ymy3QqEDyeC8Tctev7KrD3XnQKjKZpqCM8714RgewjRFQ5MLu48XaEgXuWqeBbD9Gh5",
  "key20": "5HiVvKmE5vXRsL2M8f2wgDjxotRW7Wjmvv2JHxuPNguYM3iU4Pj3LQ8PUbHvuYRJWp76w3Wk2iz6YQre6hCV43zm",
  "key21": "2PEzeFBk3iUTSGkCkuNS8NjUH3dfFtdn8Hhj7duqac5eXkovwsn62UiMqzJoDPkWterP2vbgDtNBwZr4cJ1xrvfV",
  "key22": "MFAd7hYV31F6746iuocVo9XedE4nqpUPF6mJ3C5EoQCSdgYqK1s7SJBRL7b7nZm57G85UFfQKRLLv4auGjobSMk",
  "key23": "34rpXwzt9k7e2e96K88WKsrsTpgf1NrhTJHERwzmuiVbph8w1quyc3YxrQnXSkeNDqeeWEXrjYq5XD69ohLuEEad",
  "key24": "pCJQAYVegze6bh3DXyTPGH1C76FynLqfCVnVybJ1C41AHMu3mtZyEz7pRpQTjaYYhMPcsCUr1CXtWBbKqid7okf",
  "key25": "RuycMfLXowpkFJDnBCUciA3Jw4Cjne9G1x2bFAhj6uBo1v2aNqjQ4n3TatrZZ9hLyZrmAk7SPiND44m2Ckz3SRz",
  "key26": "5PqTKHTPeGZR1XDM1QtvpVLwy164hxCpTQwVsi83yKKbRhuizNBYwoDLydpbMBmLdkHW4deyGgASaZYfaaXHXB5T",
  "key27": "4yvQmW7J8kLiCNNPqFPYw62mKHd3gzcwMEwmS2y3vrTdL1JLF3CxP6VkUxdgoWBH99YaxAmehUm98H1Xrjfbjjx5",
  "key28": "4hbpX3HnLae1wDA5ET8XiJk3QquX6aNHoBKDGQBAbjNMo3h717ksA96TeqDavPtV1FHjQ67TBEniJp6PpZFEmyeX",
  "key29": "5Xq1SotzAChEWniUAiVnVGHC6RnyYnfKGpzJqRmr1Jfo5pbf8z9mtwt9rqv8XBykYF1yn6YS1kqvLoFPhqMe2LJm",
  "key30": "fm134GMEYx3Yr3ikRe1kABykcbAMNkj3kvGdNBdV9gt1rZ5ikrnYzvqcPfEhLZFrYZCn8garVBbvVWUGjkmRGsY"
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
