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
    "5zUdwCamiLvZPLUNFXK5S8CefG4w7iJe5VbBjgjjFYw1coVeCWUAWuPHfcVM25hHceRStfkfWWbrspkBNKPHmf3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWZp83CZrm5chybfzTzGKxbLymyE4k7cBfV4qbNdxFQBQ5LFGS2RuNPPbwskeXXcNgpaxQiXiV7L5q1bCXeN82j",
  "key1": "3XFeLTCe5kkmTTspLLVxhfAtwwC3EpW1HxfxjDH8dKZvj3j63Ar8dqnZ2QMpg3irzJ3xzp8YB8TT7nPYLpiRcRVG",
  "key2": "41uDmwiGJSFCXY7M55Bt4vXpFNQn9H82XUPjNyYT5FVvVgNLS5vtvn7EH6UBr7SM5wMCMoT9kmZCoveEtVHbzYrB",
  "key3": "2n3KQKxjxp8Zk1e8ca8B7GssnK2Atw598svVhED3yPGR1DMxz3EQZfpKPLrf3VKCghNt6VRvxZrS1YUrcanoA2Zg",
  "key4": "5MBrYm5Qj1B2JQCkWmxG1Vvm9odNeQWzoivs1jSgGDebHjV21XtMrpnvDNQU1pAjrv5d7viinfu2vkjtiPeASLkV",
  "key5": "51GBmYHft14UViewesdzFt3RSSn3NnVP1Eb9sVBzFv5YDKNtsFpqAKGWKKER8LxsBNKwML8VFBBvk7bhi3dMbMas",
  "key6": "5hcaQpJUkcimunXtg9iqmAJVFb7vPLmERxNvd3HVtbgiSkcYcFwSqe8AkkWoHFieX8xKcQ1KC3k25P7JgQQMRzaJ",
  "key7": "P2LGGagJyJEAXEJ3tFQKBJcVqtYB6gzdwL25r9WdrKn6ZTrrEMqhaf96wZdL7onetyb83oSTF9V5nNkjpyHQ4HD",
  "key8": "3PaScx1QZAo95JU5VGU6tyLD8GZJ6PMSyWemBjyCzpbbJYRw2LfqXPgov3WYGbJBADhWwsTzJZm4waSnj737vZdi",
  "key9": "QeTEeuRXKzggw4H9RSsCkA1Q29pNvydXeifwa6WcndHysMBENhQX41B3GyAgzhCdb3bMW7Vm73YwRRKCXkyrL5i",
  "key10": "3N8danZV9BSyCdBCGvbYgN8ecoAtHHtYrBr88A65NBWWJtm8NqyD7gjfNHrimgYojW9ustd3MyHhaciXByTVSwoC",
  "key11": "5ntaCqTN7t1y9mAe16CgCVfFfEBtB4KQxZbdK1BMEzE8N6P6rGjibkyttE6BhahKwqHF7Ji3x5EKS9yXpkKyynJH",
  "key12": "4sJ2xa4aTGnTwphhUqVzbwF5upyc68VyeSrDTrNCY6YCoWFtFhJMrsT5Z9gH3Huytaeoqhj2Z3xn4w5ooDj5bVF3",
  "key13": "5S88n3HFeecChFSeB6GFvoQMtuNebrRCbairgmDE3TpN6DMBpw1rdZTC4jicWTUW6xV9dMrArbVmbvSHZhzPvmE9",
  "key14": "3AFpMJ6yQGk3Cu3aa8qGRXcBBzHkVJFGuqGmwQFwfzP4rpznaVw9L4VptTRovgVepauKid2rMuL8n7FYWa7RKKDV",
  "key15": "3HL2WrcEYEtyubipSpuDjU4urFHEsYgc9ztX11L4kWtgsfjr2Zy2ScJaaL7T1F7uXRufFN7Yxkd5dzjrAYeMNu1s",
  "key16": "4sPHtFz5EV2aS1mowgz6ADNnGxvADneoqhxbfrUT94KTQY55unYGhtuLSbbmG3gKzSCSLE5CBoxEsC28c5xqeTws",
  "key17": "29LUoawLpANAQLXFcF7V3McRkrbEdNqNoDYNHTQtmwfjWQ2HGPH4yxsew4PF3cHCZtNTftd65vbEENvQrMDnDRcM",
  "key18": "3T2vjpNeT7D3yN3qGLe9qfAQaB7jrUaZwv3R2TzksCJ3kNSnkx1vGvbbmGwhQBXXf4QUMCsHJHE8rUx6RvHS36yW",
  "key19": "raWKGY97zbejp3hAmfXVnxWUZSE5KNShfkQyhdoXjTQqNtMunxeRX2YXNMA1cF6YUnJ7Y15NkJwuhL3SsjBpfGW",
  "key20": "59SFx7DAVLkxRZBBoZAmsKW3BnfE7E3wnyBpjSmMPxGBeWNRfP5CjLkidJoH3AZ1jBBtNFEdGGVkVmZ92u2mVkBo",
  "key21": "4oxoDFBQ5KvPci2ouv6fRnQMHKHy8Gge8CV8xA4Zgu4C4mFV4sD48emr1cTKWcMPetXUkTUPggK6buQQrGCbjR4Q",
  "key22": "5teX41kvd6vakLA2T1sy4viEBWzdxCgqZFkvMtxiktC7N8t71fLjoEYJaN8HY23YU4XQ6pEDVqbMaeKhfG17XFqC",
  "key23": "2U6AGVKJaUcqgHh1Wjpn58DL2ivGLqtrFrJHGuRf8QW1aUYVmiNwaHJ2hncRUj2B1U549KL5Sv2ajKrWxWpLBfWz",
  "key24": "5Zh4kXfUuRQey6D8ZHPiRnt2yUatTbNXqGYDZZpi62PKga6qeYGmXaz3EidtVWnmapb51p7EptJvEq4up1zRZUhU",
  "key25": "Ni6cgvJxkWPtZrvVwzp5Szy8RjQar92Ws9pXQCF8dD7dvvBzhXAXHBgu8XU2pHKiENSDQ28rFtEBCdpNaDVaWr4",
  "key26": "3MiMkKVHd8r1RPxQpKUXbNMDmW1rkZ18rs2QPLLzF8zjYRJsBY6p5tUdBuXG7qg61pG4hQaxRoW1RcUXci2v3qYQ",
  "key27": "3hZcoSkz7QXN3Et9Qo5oauSHcwjYKqEGoRUfo62cNNA1LJR5yYf5wigXFGsM65vcAJVJxZUPkaMgMdEXFNkpfKQU",
  "key28": "32DXPYH6jR1rtJWvKZKzBDU3pRP6sw4Ngdcc7DCanPpZdQb2Lwkz9tyBeZ5zcKgqPnFFJx4uJ11B9kuWPsNZigvq",
  "key29": "5vidRPrkxZLenniAtqptGHthmsa9tKU9o1B2BCxqvd46zbUeSjqbbB8LdsL8eXPbN1rFqL8A81kGdcYj2rsiserK",
  "key30": "3rwAu1NKVdRCVi3E8VBvFbnKYwnjnL7tV3LAqkfjsA37Ki7hVkeNuURsf4ibvdtHmYGL8SN9JrzvH7VWNBsC5TGG",
  "key31": "3c6oZyGf53Pj6ncPNwwDBGVBzEbQEmAuUdpRkJq1XbTpcf5Z4MQCeBAnxraDfSHrAevX18VWkVmFLiUdXNiMr7kT",
  "key32": "5xyM5Rj2cAu8ds4QXrmivR3hQG2ktze9NMiyrk1qn5JMHM2bKXLpHTcrNMbiV4gwG5C2qiH1w4E85JPL6UcAcyRz"
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
