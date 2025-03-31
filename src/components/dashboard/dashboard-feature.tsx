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
    "rhcTrEyiGewHjAM6XZiKeCttEk7EyFUgnYKy1jdN6pCULzasTEgYF4w7D21PiTRSiPjyfxbHeucSgLZqFXR2Vqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "muE2z3SWKxxJeVe29sWE7asAoVu1WDuhfVEQPRR37K3YYSrTvqeA3sQh6pQRiscZ3fpuS1rkgX6PNyVRWGSYaKf",
  "key1": "s2kc2KQG3yGhGciAY7SMpKttncxKmpuoTF44mgiPyWypZZtNXN8b7Mb5b68DELQmXTMnkGv4ZwLCaEaU5XKAd54",
  "key2": "5iX4BLUavmjxnZjG5fs6pxq5XPoZuCrcUyUVu4AknTAcV7oQkry5HneXmyhBwaDgxrhsLFbMjJptcZTwv6hXJkJS",
  "key3": "56ZKWXD27eC8Vnffo6A6sToYqHq9cMWyH8JfPuSmsD68MTQDHsDNKD2HoeGNbaXEUiMHEywgBU6NWBhNtBFgx6hA",
  "key4": "4XqQ4zmoA9FyLNWBirrbXmmuwEGh35R4eLdHUysnRKsCYkZtNcniB9SXcZbP6no6dsacarU2PQJ87fTAKMtLneHq",
  "key5": "5qyvdbE1ZtRsm8Gc8DXLthUt3sSeSaTXdGUReTkpN3pZXbEVCYynyCSHwA26V6ZxfFro5Lo5MwT9sdNSNUD8AoSr",
  "key6": "4FBtp87y2v6cvqBP83XnqaiDL8EC9NZey3dtWSw5ihJKDsFezREDvLgUydmuCfVoCuiEGeRtybhDjGGr5jBLwsSe",
  "key7": "rTveYFV3YThQ58eqHVnjBwoJAuznK2eispcR1ujXcFrqQCTD6JmU6NKtCZ8k7NtWD5maFFTc4rwoMgD5pZPkSwr",
  "key8": "26f3PFdcQ8U9trhGskt7AM9kCDoyZ5oZdmjNmp3Mmv9vxm9dErPRDvDxBNR3ry2CGir82WS9CuUVcR9aFjyt3L7Z",
  "key9": "t12A3a7JqLqtcbfJzd7otdw9Mkcup8YnWuhDbeMv1ZhaC5P9maCqvm7ZQFXUUYJwvX1zie8XwGZ9fwXwTSiSpsK",
  "key10": "qprJ2Yt6y9B9CqTpdLPD1pdYPDitXf9TA67fzTNUanfNJPG7iZcsWGf2iiDS6EP43vLa4GVfa14Xyqm1bHNb1EK",
  "key11": "eqPWkrmhx1gwKK2SU6VNW9bziCvh5jVi6jGJjF625mXZdFqttAE1rLyjZCCTcjBBKweQ1iohT8TcYpx7H1fVQid",
  "key12": "39tiNyEAm8dywrEXLqtq7ZnfaRi3bZqdVSUujPQYqkseYTDoYBaGyt9TZpVJJxc4awCtYQdJ64m8qx8xBhC4QGeQ",
  "key13": "AFgcCXvw9tyXQJVTmKEgYVPfxYvZ3s2dtCPkQbcv64y5AkWvD6asqXatSw8sLb3VaY1E1wr2SHS4pNTX2QMgzJ2",
  "key14": "3jnKY16D1w7iHvFVBNb7aW2aMgUubDcUxRvcS92rD5mw7pTcRGnyAzXo2DrZW8mwCecHdNkpCRRpQr7p7ShjwgA8",
  "key15": "3JRE3svU1oNKueUoUxmZrRMoUkF42UG34SiM2SsDpxVa4DAYJFbxcrMKg7NL4sMGB8FMX4yWDRSBd2WfzaN11kT3",
  "key16": "2sCJVobfpqNuuUWXWgedb8eksui4HgES7WzquvCXKoop76Kki6iecnTW7a5hthSP3qgTiGtmvqrkpqwbEVNmryps",
  "key17": "2baNyn8U32hKch9oP4s6poLyg9C91jizesFdWUWb53aao7kdPn97Ww4gZ34jneKsWD21rmDARNAwuGGHWYZmR6nm",
  "key18": "5rLK3MFxaBopJaDAZz4jCoEZ9GdGqNekLsmuWDdzh3Wsm6tmUGweZMQ7mCnzrY2TKfmVtKh41kYwGZ46WPC7S3H5",
  "key19": "bqWsjmWMoD4Fm58L9N37dKTQAc8EABci4j3xaXVkeqk7yHjakVJy8RQRnJJhjbA8mokeUaYhxUyaAHBvARHJhyV",
  "key20": "5nTgYGeLwqyfeFx7U6rBanSjD3eFJ7MicfHGfmuALxPXU76Cbp9gEtVL3Fv3CsPCHs3xFqpXFtte9gxrAq9jhfRq",
  "key21": "2AHq9thNCb6GdFDt9hPawT7kgVt6XTTo3BcdUWvgrfLHWR8PKzS6a5RSYnR5SkMH7HSXupsUFuuycQRXQsYDoc1U",
  "key22": "5NShKmGk7VhPxbxXEGgFYU7cVajRABVaBPGdJj72corDVSjEAYXq2LCJQaWUgQFmLf4T6991T8Sq4rvSPkxeSphK",
  "key23": "4mNckZ7xGkRZmpLy7gDYEc4HjoFxbg4oDoZMLDikpv2SDAxMADGhW9dt3ThSf69C7i6xEdyTmqAMxJNkowuoSWrh",
  "key24": "3ob6FZFmDsJo2DdCRa9B1W1q6RKGDYQcuFuTNR3DNLE2xnw9RGPyG2hX1C9dgkDxbwW1jzoJijQnnB1z8SnhX2r",
  "key25": "5xH3Rexgw8g7HSBqvg7brdqYSmFoRowmvmJg4QHvQTpVcRhqAKTMxXtofy65ArM6tGWDyNAdUYW34h2CpcB3F3XH",
  "key26": "5CC99zxQaQaBWcxQwVu8zdd4vrv4iYwYGvb7VxgfcJC833fJvn8bC8GTysQcYm3GW3EW2UhdsnAffgaDVRWowWC1",
  "key27": "4AWzaqDKibMj5cEiGJ93Die6FDJbyhipWLedT8uuUb6WuLnvoVUYaC2kjTzvi9TPfWkiyoWbzEHuee6uBAoT9emP",
  "key28": "iPiPzBXQJahTrZW8NZUvowZWGECao9vwSeHrZx3R7Qkwwhq82GUoQjprM2vNPvFscPWGGJGthvNXfF2Qswb2xLa"
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
