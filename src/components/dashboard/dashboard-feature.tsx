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
    "5KVTnnqTRKgTJCB79hxSUvmbnutCjau4oUTk7HUft4pjedgJpLb64GYStqkurBigLXf17W9L1o1zcLGLEycbHTJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6189H5MTKG6iEEGYpb76wvDtUrb2g81KX7tBHk6S61M3sAasu98f7skvoqFTNxoiWrBZ5mHCdB7Hjx28FG6TXW",
  "key1": "TB4JCy7YJFh3V4k2y7aQ7UgdDGA7QgshpKkG5CR2tKGC8FCKnHfxkowDbjFkzVTsae1B9s8fEc2hgxsDTapmcvN",
  "key2": "9sjvjeRhD9rHhP2bXBVLcAiWR2mxcATvDTGwbxeX9ya9K6HoNwfbDxHJkjJGGioULXoTuFMjLQNyKLeYnZPFYks",
  "key3": "4F58nLp9YsyyVMagd93Gzo6SNqGBKcraayWbkUwoUMejojDdVbUwj2ehmofd8oY9fFXnfc8SKxShBLyCV6xB1iiF",
  "key4": "4Gp4myhNuvPHKhyBDBEjbF43QqHB7UaPQ4MKRVzdbNaZst3pujoB2rpMfAWz6nVacftJYV3LyN7sVsJoqsfZYgbj",
  "key5": "sznqU9iY8NpsAcf3o5r1QAribN1crWEXTTJ5KGSdGSK55mty5fPGrhbB7asSEwnnxGx3zJrij4NwA7T2PAwWbuf",
  "key6": "3nB9JU4VjnuJuHQa1VWBAUUXJDq5EKhQDeCWpA5z1iDiytZysepQzpi8jGWHjEY9MxK6NX6acP1qwEnPMZji3Xnf",
  "key7": "5RVi6tey6dMMsHUv1bRd2YPQzTzCzsDQs4rAHctjDnQSNem58b8SzxtxrAVDBKEVT6fSK4AncB9tPbnh86mTp85J",
  "key8": "4C2Fs7KECsXGYJLFGtGCDPHc5iQYwU2wKHNACwhJux6sXTatX6gHt7APBjxT9QfmAzUXn2NqAuktAAHbfEbUmpUw",
  "key9": "oVuXTm8Ns7j5RUv3bHZ47C5jzRWvbuyVD54PGKvi5FxKx4mV66TAJnNJizWcfF59E91hcEZdF5WxKNy5iYrvjKf",
  "key10": "26v7fQBFAYYMjQsP8uXgwZ2wqJ2WgMmNg2j7dVYKi88Kk7iF2ngAQ6J5MRDWQr3zwUUu6qgw4hXANM85UcgBgAed",
  "key11": "2xELwXjaGASHBuWitAaoV3pk1wCcL7rgWNdzn6pJkKuf37RNKY17eLNp56UcrhU53qqW4LdhNA3mmzVak4YfLyYC",
  "key12": "9Bq8DomtAeNtWbrg3f4nxQyArWWzF1PVhqbZ2csqE8wKa5Qm653myy4yYYH9C68FR1ZxnSEQG4b2h6eY5MThBTW",
  "key13": "3L9p7gNujMxfY1XTxgvvuGRXoC4rANnrw1poLvjowwZmthouPUvfQMYojCzvXQbNiEe4cgTdBLMcA91UogT3M3PM",
  "key14": "5aZaKUPqzEcAqSEumAPdghxxbBVdxqU9BNRz6MpPX9du1zevQmKNzftkKXTZHSiCGkHPALM7LjvjDDxo5NNA7SaE",
  "key15": "2e5qGUhj6AsKKztqxdJDwiNPzcjyDaUKLA6Bv7UtUpoKg5Ug4WykiWdwFgXz6Naw7VnFGtEZsB2cnw2VqtUSKgKw",
  "key16": "nqJi3wY6J8tAQezCf1yE5NwPpP87FwD6DmBwvxTerDKhDXh3v4yaBM8ynuTmyKo2d3S78EXdKKaXaXmi4rdKg2H",
  "key17": "t7TBq6xhr6cS7775tJaprPRkBPGyymr6qNWpMUpdaPAQbxJ2MP9qzfX1vDu8CcvSLJ3xYfjTSyievb52Lii7Mi5",
  "key18": "5sHtwWcCts8Cb2yRALX77Ez9uDd5DdHwKjup6eprctCFbpe14pSVcdyCi8ZCqzyEYcVHN7AoRq3gSxQn2w1HQr9b",
  "key19": "51m5mHe214QExDtxgoGDWH6TzWtDaukKNvc5wJRrJy1FsQ37N7BDp3Vj4KZPzPku8uEU42APPCaETsZbYJU4TgpS",
  "key20": "3gfVLdBxh6RyWuDZXqafyS4FpT9M5SikRPryN5EDzjNJs1SNturLVdmZDG3gfYoP7tdCKd1hs6wSDiQkLNQsNuEL",
  "key21": "47t1DjA9ynrusVMRraXsSQF6wFhJVZzJJezBc39nKdBzYQRGVSZx4njAa3v4aVDwwSnjUDrUBsTAB1c22cC77QMr",
  "key22": "4HU7JqW69neXrDFVEtQ7zLcXamrtejL8Z9DLoE6g9HKFNX8ycr5bMfnuJyEzbKYXqRjECn4DrAQXvxRWadhFtvWx",
  "key23": "Z5skVDDteiWJ26aZQEChjcVe31TuEjbso2cgco7ogSgLS8xTDn7RLEXmXW2hkdoWHgqozk1F4fkCAoDDbatp32z",
  "key24": "3Jt1VaptkWKhmSE3iqXKZzTGdmYADfUhgiLi8kLnDxZatpGYuk7qw67kAiSCrfUhpg94SYS8fNAFjhW33HL3YoiJ",
  "key25": "dDM7FEjxUSr5vTmkrxNvk3DZuFKqHvkGmXonioeQfTULRR9ESUHf92veFWBwCycZuJ7ptptUKVivit6oKK5kj5z",
  "key26": "2BP8trPzxnnetSMeKeUaRCi9RveRcc4n9uCyfenwh3wTdUgwrTqKARbLkVyhnVPS4LiwnUKUDN8DwB6LGHDLNeow",
  "key27": "67T8UheqT9uP4KkcyeEdEpYwqio1ey9eofxRHAEMBfEQ8dvFhscjoaKx7QVrWbhFiLHxA52WuBsrNQFQSAeN9jZq",
  "key28": "5qBdie2owhNGwFLFwXq1Sr8N5K6F5KydULxKb3MdzMufx3nnzzMCN7uqqkiaqz8k6cJC7vWrT9hjzvTSSiNREraR"
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
