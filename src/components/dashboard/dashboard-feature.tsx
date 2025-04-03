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
    "5awsiavRguwkQafDZVqqPTKC9sqxRc5fHeChyyzaFGEpvnZn1aAgND2HrQgk86MrHDrkzqZiQ7R61ghrMJWZQSrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MqJSfqv63LfTrsqjEw187vyJsddLiEq1VshYog7qYCYNoDcxdqkuNNr3cqn5JR2fAyLK2Ke9xhDGjj5NZArXaRK",
  "key1": "m5K9Dvi7NnGVPousyHUP32QSiUHrANqfvfBM1X6hqQ6CjSFjaEWzyz4aZZBfgfLTKQVrpHyrpcHZWgjrSkQQc1n",
  "key2": "UCyUdip6ZSA9TQW3ixvCbrbMZ9V1PaDzMKaS754bBrJPbE8bF4j5KJ69VrpsP39Xf4oSUQQTdrZFa65XrR8Ee8t",
  "key3": "hjoXB67sN2Eb3WUNPLptgyL4pKk8B4pY3MVnkkXAwT4X1rPEbEwN8AQxM7x8eYa8fxv8ZodGtrh1SiA4y6CYbNn",
  "key4": "2FpGTVSdPWbSoPScRLRJLWLF9eLUc8gH1VHAQtLpzyscH1e3KnKJatSH8o5XnMVJEAvc8qhSSQJfun4LgqxJmeJT",
  "key5": "4RdgHok1nzAtBToC7sAX3JihH5D6qcYb1YAvm9Lvsby29tHNfmUao2j2SV4FFpVUw7HRwSwF5wJo5po28Lo6gHyK",
  "key6": "UhaTvm6y26CuQmJX4eejqCQwnzhnJptxE8JnAqdYi24N97ZYR9zgtZrpnTwqqWDaVBtmHeqCwpR5J47h5hGhzpm",
  "key7": "ZFrS39G16RjqYwGwbNuWFyowWnG8bNJmoe1aunmQQUVJJkqsMMUSXTJctob7tK5gZjT1dbnLKebReXmk9H7w3WF",
  "key8": "4ma3GDLNMgUEyeLEnqUabYgiUm3rJmJ9iMGNTU5AK46kLsUpDwMHzLXD4qqrYWyccDtwUPi4GJ4dQsxx2tfzyBC3",
  "key9": "2vk8a85gXyg2kVah5bpnEFcX6XAqoB7EEq4nPtpzDajTavdTj9Hd3C4vnc71W5K87AB1y3HUv2exiMWVxUut5nZe",
  "key10": "3mBqx1f7mPQLPG3g9GeXk3mhxSp35Xq1S7ZzGYkPxbo9veLyPVLQ41DQxpoHc8uhdiNao2rniTaGvFYXQNHZYeX4",
  "key11": "4xQ4aaV17Soi2uqtP4NPssda5rYah4gVtEq565KR7mtBmz5o6AwLeYQuJ18Ssp9jiByCQrkX8StDmADViLXffYLt",
  "key12": "2KeubakphxQcEfEkSch9t1WkC5sx3tiRiS5jZkM9ifFKPKYJPEPqPRCZVycSZRPRxhXYYWWJbZCuHTBTrmx2zB3o",
  "key13": "5L3in4kPH7EQ3ndj3N6idFmcQFc8UGwjSDynx5aQBtFfWs3VrngxRow1tgHi3nVP6v2YuomQYouMck8ZukEyQX1H",
  "key14": "2Jq7kCesRDRTQVF5pXYHSs7AynKzMNDVF6bLJ8rmxufLXSDfiGP29A3yKaDevkaC8TobdmL58YZujNWuGd6n5P7c",
  "key15": "7HGEJmzJBq8hLaMbJnAisihNvNusaZZXGmKAcXTmTH2Hx5TALBwVTy4bBXWNx2939cF6MWHSmBcdzUQdGxYKoxj",
  "key16": "4sEbXe69GkBv27BgwnuA8b31cVaRgaH1DSjdXcWgHTvieSvCZ7e86Bdh8FdF95aG5MNRHjBcxUpcLdp4NztnoNcd",
  "key17": "3P5P9Kn7Wz7gp2v8oqT9CrCXh4aa6noHcjRJJMhLPbtdeE2WhACgYWbtNKBrJPjJn5JD8LAtPDayQxhRPvZsKDi1",
  "key18": "3N5eMH5qq6gPcU6JmQfPG5p8tKSaoEjnavRHBQKXYeLVnznEu45L23oKAmQCQPbdXu7xat4v7rFMBPaygspTNjZZ",
  "key19": "54nC9KccjZ1HxzoJdNqFjm7uEtgPWDrwvToQM15GcBqyAAQ4VAuxvCgZhNyTiKz9rtGjbPpwXUywVscuPh93ZTdJ",
  "key20": "7yKXqbyyFtpBf5BC5jfrY2jwmB3RrqKTe2XUgQcx1unSwHPsvMEjEQ59Bc4YuqSkd5j3TUSd7hxdVbNfhk4dhJY",
  "key21": "2T5NbBy82UFtNyGv3JzLEgzrTSBJHXXzX8xKmE2yh8PXL2e8gbgq5cEaZnBTASj18cVSuKKBus9GMjHjHsC7cToV",
  "key22": "5jezNK84pJsiFykttnjEA3GtCvNWgUJnknvrAVX95owwCFFCymFfuokPzTkPc1jSdQnwXJLYrmF67MZaCmW6xhaL",
  "key23": "3y52BsDa4BYCvvhvyCSPB942MjTenS3gV7iQXGqETDMb8AQkbQ1Szzhu8HKKa629y4HjGryzFHsvEcrNU4k3vDan",
  "key24": "4KxL6jfoAr4fWL7hBemsy3L44q33Kg2iwQbEcME4KMKoQDcuT1MeC6s4yNALEK87azVbGQskjR8ZjCrNjbwzLMKr",
  "key25": "4oMNiou7gmwwDwCV2YFf8tH4NiwWuVoVjqXbFwECX1xKxtVDDZY8YwAppxsVG2GANdgKweXVb8SFkS8jzP4CYHzm",
  "key26": "32JL2R9gBpM4KZjCFkdmHSwnU4bhhN7QAwtZ3fZNbiAUtCQGLspoAfs1cZi6Q9ZmLSb8nXYLMdGJuaRKW4X1oBYz",
  "key27": "3TxKNhVUKJMJ48xDPU2MwF8ExGhJnaVtXstpGJZ2PftBSEvnVHpgC26piprKUu72EBDFkwamqvxQk2aPdZxb1oaX"
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
