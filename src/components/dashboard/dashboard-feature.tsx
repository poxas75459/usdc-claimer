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
    "2tu4Wqv83zrv9Mc8isQYbsVZQGT6YHLRAptj3ccW1r5xeUg15HmHJnuC3KQ1dhDEPjNrr6h8JpAyFXZNH1boifob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DJao8YNopAYmxhy1D9CTwmFiU9xXsvqGy68DKW5vWdgUo8LoPhLNUpNFPvykmgJJ66dhZsYC3GfuZbDZLsVWima",
  "key1": "3vipJ4AnSJAnNbrfTYLf2K3QXkFArnxSsEu57GXM9PZcV9LP6wTXBYXgRB8BY7KH16yireNGcgBgScLukK7AjEuo",
  "key2": "2VTA6QgHax4HzzD3DMpxD6MKeLTSuvcVLqfT33bhH1jToA9vfBdY4cayMjfPYfc1Lk5uYg7AeKGb6HStoaJXv8UN",
  "key3": "2cCvueoNta4XrxkLdjkPQmQ8Ciqd6VT3zbJg5PS3YA2pJ8xf5DY2yiRR4fuhZVWuDkGViLGiqXxpVqPXqJcc1RZ",
  "key4": "5ntYY74wUwiVHHqGGCYitNviWjXdZ3nS7kRQeuoCdnCf2tfKuHFWG8D8yG82oa48JGnr5XPpUyE1fjgvVF8NuVWz",
  "key5": "59QFLmRz3bbcdxescCyS4ja4VbRqrYKQY59GZV9hj9gpUULha1qg2BaZkW3Qhq6sSLwqHCuDbQgv5yHJ7wbd743f",
  "key6": "2sqq8MZWz6qBWvB5Zsz2BGg8ghaTeTS8EDbMKP6uaaguukCeiXFdCWcdWQss6r9aPi5gVQSLvjecFVicxr4PWB1n",
  "key7": "2K7dU9xdjhggqzkpyTpJpRzuiQcKLeARbf8bP1k6n55vPUPJQmB2yKBep8iSg2f6iSaJ3sEugvzvjNEmCKBytUdh",
  "key8": "3QfkD259i8PDsAchXpg3NGCzh9NsFq2hASCSFZUtNpFvirykMSUGTwXqAvB9TswtRNBgAugMQFA9cmyiyLxH869D",
  "key9": "622NVe7sXs6mYPxucE3sraefE7AoPSUEk7Ui1zueFP1k9iakXKp51EZkwwpxYqy7svK1LAHBMqJqN9TmfvvpkLxJ",
  "key10": "32LCf6ph4AzQPaFAmQd34gyYnJuyg2JWrfUhN6mYEoSBZF3PbfB9Hb1r9yzrVoZY9QBJVpkQ1b1UfSoy5HMHn427",
  "key11": "4tjdVJFUXEFtXnafdhpaCXj1yah7ge89weHBzK9mobvQPMasjHsFgqa9BGS5BRVX8swk7enfkwWJ7r5HgijksRbr",
  "key12": "4pDk8LyeXFnJyEpZm73AMNkchQXSTcqNZZFYzoVTYTZskAx7XJuRXyDQEhSDxpyrCCHrfx5ETosRXUHvPNUTjjCE",
  "key13": "5de4Nt6BoFeT3VbMjEWHpmc4FaC5ACDnEraGmwzCQmYsxpCmWznhbHqm1av5c7T6NyjnfqBAnoCjW4ZRCyjbTPcG",
  "key14": "56a8czYoixvXcpDcpCBDLoX8vmFMcwq5rNKyaTESc6hV8ScRiFNRPaDBvMpMMywjmAgXkR26NSruKAn6Bomn3Cwv",
  "key15": "3hfytpdndUNg6sPvXvzEwM6KmtPXgP6PPc9YoBocyLhtx6paXQNgdudh1cATZzcS3mrgvGLqM8zVZqQnNqzwt96U",
  "key16": "3mxsfCYE4E5hn8a6RjowqEnTfRoUX8RKqtQ6kcGAkSn8FbC4dSkEEWFpVhAdp28KQbYu9pgdwPUndMs2Dki9Euwm",
  "key17": "3YTeoyS1CdGU2YBbNp3FB9MsBighEfqPwiPuRErQn5aLFAyfrZPcB5yXYFUGPNoxbkyhaptYH93NpvdWGu1quRcA",
  "key18": "3kv45Pv21FtV6sUiPpdf51FCzR4M9Wj7HKbBMBrXYbyr6hqzMBmifsm7EQ92fZEW5KwevmqryetciiSWPXiDSLHf",
  "key19": "4PBwARbLu4HqhFxEZBMorZ4W16Hu3eiVpDzCfnf7ffLPuk8j9De5jbxANJEFKghUPnf3Su2cPU2wH895KtqgvjiR",
  "key20": "463iiUqjnk67a1DCEW8BJdiNSdmcZ9KgsqiLNPXFyMi5Zf8LW3BSyuyWwVuMjgzrWg6aTsK9kBiP9UUKaQhgzVcS",
  "key21": "365otdBahaV9qQUaUs43dSnnpG8NYX7Dse5GK7ENqa2MphZupyFfCreKmePJTT5hmZubAiMPDNjUuHRg4wqrf7tY",
  "key22": "2ZJSxPigKqK3kYhw35vEKQ2LeZXcjiwMpDWtpyrc2obffD3JM1efHg33MLbcVCc2RcK494CQWKU3YejzV57wNARk",
  "key23": "57eZG5AsWfdBwTFruUrxAgP3W9o2GK8ZdzJomqfTpWHkDdP6j5sHgkEBdFykdVb8dRa9sphtndsaLb9nCTK6k3WE",
  "key24": "22VwFWADYPG5yVoyX3ps6nTDBsr2pNu4GEh5N4e52AjkPh39UjhFJZLTzKSQkY1X1KQeFTpYvgtYfEkbFKu6XuV4",
  "key25": "FvT2BSvKazR7wqZqJGKhzxnAsD518zC4tPv84EtMSW7V7m3iQnjxDzG9wECRYicHBfRCSnWzzu6ZNDy3LtsPyNg"
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
