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
    "3X3cA3wqdcPKCtbfUdRdrkTYwhEqT8ApchzaxGU7f5GdZw6eVcwHTaBy7gWvor3xp77tU4WdZXUfem1ZhS9BKDrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RYdFiRdoMPhKsxr9uLfTdjwHMaQdR9iH8SM5xqBxPJeMf8j4pRXuL9yqoADSx7u448Mgmcamfahz8jESoqN7yms",
  "key1": "234UJ4MsSGW4Ko8Px9Uo6CJTpAvKCok3rTpdmk6nZZH23mWGua2uZ2A3MctTovHfSyVqGLMe6gFP8PTCVXjNFBru",
  "key2": "2ZWcAkEpk7YUJWsxZxKMsoToYVwANncFhSFyXHQZeBuVkCo6mx11uaqtRU1crdRL6HRPSWQNWXGWpJdhYo5APsRt",
  "key3": "2kp42n2c1o14iRRGK8JiTejwMSGxVhEPiZGbkXZt1gdzozLamaF3G2bwaKRZN4Bgt9aEbpMjQkiUefhZkAnNfdqK",
  "key4": "4WAax7X1yhZKFqsdiKDG8W3LzjC964ffNu5RgrdbCSLPjjo55odw4TVpHU7bzxu24bn53mXFePcjrkA15BHx1urc",
  "key5": "4rPbW8bTgBNGABrokF8HTad2sKCUPEDiXCqEpGP9QhzXjQjzJqWQsmSVqUgQ6Kmj6NExc82v544bDUMhTJPkeQJP",
  "key6": "3uK3sGCHpwJZCvHoEj3X3aTPhYP8eoTRJYaVdwMwZvs45duWGPMbz8QsWXamd5CkPfnMfY6hnXNtLgXNuhCSGPK5",
  "key7": "UxxxPKxZHigW8eEQexE2pFKAgjLtTS9qCfTaBUrBqfN51j2z12xKNxqjKjd49FT9mJYo2maaJQqyW2VV1F6XR3q",
  "key8": "4rhiPxNaqyAmXpjViT7W46pA416LERsu7CfFhb8fwkrXrZao2KrG2vr5SRmV9QjCCPzti6RErLmWZMEFNVNL4F6P",
  "key9": "2pPoYXhkzKLvGVgFR6ne4jHkX64PA4jNWvPtfikDrXJAUNJiAeaNTPjjpLSokDkmcuEqWoAoH2ErMaqGFFX3qSqc",
  "key10": "4TvQepShYAdSgEPQM7nbbjom9pwAejMBf1qoVN8xNhEkv2uZZz5UVKTMUPu3n72mX5Ap1wRgre4HvMVDtEHMMjU5",
  "key11": "52ohomWvSYjzn3Pg9sb3Hn9n8gj93jFzwYByX69ZtE2rsLDYeNXhwvW3poWxrQbqGxZQn6kupDj6kd5pM2NdTT4e",
  "key12": "7GFoB3MU7pgHt1pqPhxTjNw55ByDLakJH98v4ALANcLv7SMXA95ULytuA6P5Qiodeq4kzEW2sxpGa1hu2sccMLG",
  "key13": "4Sf5HAofJW9GpTgH22654d7BSdk3vQkB7MGXEDBsHTF7Yc4sb9a2GxvYqjcDVRV3tNXMuDQeaBojZj48YWDeXxJQ",
  "key14": "25cVSv3s9MKUjPaumXAZVXGXZWc482KP2e7aFa4frs1PRe62MF5gUGywN1PTxKZai4qQRLxpRvodVuaRsg5ejVke",
  "key15": "5gaP7sTfECdXSEcW7s6qYk3Kp3EqsbPGZUwXmWFmQ3MrKeV3tGWc8VDjND9PrTBEWCmUWD5aK4UteJWE2E8RhjN9",
  "key16": "VGkSYHjxptasymP5owZ7yvu7H3fgsJAVDm8H8vqmf63rkcdNMyYx8jR4RdPoXnrFsY1fNV682Pp5ZpA6u4iYmh1",
  "key17": "2qTtoZEusxo4izWXfwqFQfz3ANSUmPFgxcSKvbSoJJVj7mcqkZE4D6Eg6wemD2TWtKDqZRf6NaPtNhwzQrySSpYU",
  "key18": "RwLK8GFr45WuJqTND2MaZoHWdsYhbn95YEhdhddq1fvkuRvUPBhirhGbZKkMeyM4nmm8cFWyiKTyZwVTAvMBGVU",
  "key19": "5tW9y9jJtZKrWZeRBXcsLm2T1AYVENDBEPAmEbrKk82WV46zDWXxnoPKNZrUYZtkA3EsFxprYibv9Hw2BNQqdKz7",
  "key20": "3a3KmiBsWRjdjyzPzRoVqius7ToRBzvvzAgvfPkym2cwuv7VZhYxnbFX76Lc8TgWYvPCYAA9rcdQnzRkk86gpNMZ",
  "key21": "3BRJ5QBwRdw17nCzVWBQYToHWP5Rka5wqQr4KU1fnso7PzKJTa2XimhsA3BfajKwZnWujmW7CJjUPMFvtLrBr5Js",
  "key22": "41WtQoQLXhSakPg8eqEyCeRzWCozAKhTL5KdZqYRWESxgy1YsnM3b466kthJ7wwb8GAXktZBZpSSzYa3aTjbfDAp",
  "key23": "4kKoKaYtpomHsHAQJTZBfb1qDBjTacmJrWHXRCFuv9SPqrBizSKzi2NNtXxUPsmQPy3PzKg6FsRGyCDPnxtm1GrK",
  "key24": "2cGYJyLGN5rW7LfnD889GzZn8NPggszeXpcYeXiN7EoUsGvDpsoCBf52cSYfbErCCrwiKD1BpmPNiaXWhzTLzSnM",
  "key25": "3D3AuJ2PKQxoU5ovskFC5yTn8xd2Miy63j1iw4E1RS4bvzoRYLyzWK37DvfP3MJPbHZ2poPmuTcMu3nKj5XCWA7c",
  "key26": "3YinsGCSiz7BQP82iqC2sZiaXsY1H4pYf9CZPifGD9AMBqHVoawjmzV1mGU5xXxdZu5jAn875YPqLyxyjwsmiGLM",
  "key27": "58cs9xs4dyXm61KBrew4MahDzuy7Rxip4BoqLHGGCjS1dPvi2DJqwrZv3wcVZcvPnFfDrGCjLgTPhLP3hyG7yMFJ",
  "key28": "4qyVBLC5KL6GzGgEN6zuFvaSdUDgSW87eEZvBmNjEv18GnbUBq8DdRFhGwwTuPTUyqTowj9mpQUx8SGUVLYjrEkv"
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
