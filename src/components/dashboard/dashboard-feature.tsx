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
    "5KgtpwsKjMHqZh2xi7pfWLj6XuHX84pMBrfTg3vuuVKckZiQp5XT7rurwbfcsKNHmk3RX48CmxwpH4n3DNaKGJSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DLv8g4sJWVH89gZzFrc7W2649dAVTqZkHhuggpJeNgFmAZTdKwyb5Evg8dbQv4HDwjTAAjDu62ng62RbCY7LpvQ",
  "key1": "4597RQi7QeHkDk8GJefeXrZv5DKJu297rzmdVKN211mV4pVwuNMKAbYNCh1ePJmb2KRN19gwheCmDgbDdJ5L4HsH",
  "key2": "4ZYeJ7WusPRNGRtgZLBYbneNtkHNaoz4nBDMiuyDm3CULXtn8cifURJsk2TrGeScSpFKgxSBz9kmPppxcEZLXYNT",
  "key3": "2Nrb7uKq6Qk7rLMT3Sc7j2asxiazQ5kX4iHDVk7oC9wzrVVibnmGGHmDRRCHckPEjs9nMB3QD4W71nxFRy8Srh8n",
  "key4": "2jGNtY9ndTqc9gGFJX7Hr35atGjE1wGno23bfmbxXmdr3pXA3tRZw5E3Pxbr1zX6L3DGjtXBqiuV3iuD7e4amoNB",
  "key5": "2SaSzPW4Yaqgssc7656oVEu5RVJ1Y8WeftvyjFVabtFCa53Nxg4Z4sQWso2TVwB5VSyoRpiPzKHhoGn3rqDWSeAm",
  "key6": "3nRSFEezTw6SKWnyLVYU9x2nEFHTB6EP1sDSa2EPtL3BJz1wt8AmSeXYXmTFzzzEEkPyM5ie5eS1dXxiQkqM924z",
  "key7": "2nhzBPEiPRhL3v83atZxaU8PyqzfrrS59iJU6KMNzj6Fo1FC3xoE4DbWaDyPFiGPextPHMs6fHeqtVKPxgWK6X9s",
  "key8": "5ew6vrCWoT9g267uFx9D7c9tKWVLyHJkKKsrKX9rDT7ykETwqvwH5LuhBBmFXJQraruqLG6v49kHgKPVHVKEG2o2",
  "key9": "4XrRaY3MqgJ5p5p621g8nS2WHm6soxwXBVriMvBvmGKs4rnUTJiRi8QHicP3CSUFuSyUvjSwAuiD6dwzUKMd8gSm",
  "key10": "65mdHfYRjxWKeYhtgsYHUvQbPnHLJAoyNtUMCpYCTWZhZS7phfmzVKx5NxHdZVC7PD1SWn1jfscDX7JcbCV9MxJG",
  "key11": "Za7xjE43C3AqJ9PdsLWVQwth1WjNwQtPGHui63FXnysU8z6Rr8QYnHPDxRenHU6UMSkHYcnmcCkofogDbEqkFD6",
  "key12": "38HkpDHVGQeLtCyKdhFP2tDzpRNJEsozyEwHfMsGwKdsmQxwQJNTESnoBjE7NsQdmSDRgwHKWDxAW74nFeeu8PpV",
  "key13": "2QtxX5H2amG5HbEJ4z6zNBGKJG8SfxnqBFXUD9FDqNDGkCm9J5Hcej3oFo2cxrWBGoadPXrMhBv8DLc5UUjWvx5s",
  "key14": "3aLmevaaGMQkr7UKcMrkZsXVrrFENCJ1e6QktjyhDwz1x1i72ngJCsdG8uvPQgXKu5pBpYECfWG9MfsGJR8aUbcM",
  "key15": "56ygXtheyHdQoabigxDEyiGQCQtpMV3yBEt19s7LJVwyzN2Z54TPJwJvvUdWDkRdpyrhmwbSdSJ46gmV6yaDyGJp",
  "key16": "9QPAUCZmqJPtvfmbtmb646xkLQKrkfHbNAwnWEtbV3CqBn6xHB3En3DSrGVxZsrCk7mJoMRj2J7jNAPgC3ojZkM",
  "key17": "3Fd6rNZ2rMvZ442h1enYPqhPZtr8XtdUDbf8CP3bgeqFoVGFFsrjjPmEUgVkPPEJmUTfWaDCv2NoCdWpCFYCeFSB",
  "key18": "5FVkXvQ1jgp4NTP6xE9y6FsXswsy1XunqpTVsnU1qcBRFEk3kKNwRVNBu64QBK2JV3nmgGP8vy6rGWsyvELjUZKB",
  "key19": "ctYm3tGFYdX2EdqDbB5G2GxikzNpr8QrW7xYQxTEQo5WVwEBbbRyG1fEcLj7pUPTRU5tybPgkx4moUrjR8xand5",
  "key20": "5RyZxeRknd1X7JPcrVebsRBeNG33Z6UUjX3v72ngP4MLi8bvvZfZwE5QWjXpeX4U9QDAZNVbotCtBMrrns4R5a2P",
  "key21": "3f1uQVQYtZhMWFyk51W1Z8u24B3hGcxMRszHdv4VGxnGoSbVCERP9WTkp2zm9zXURFSFEpJ98ZapZu4efTxsiVhH",
  "key22": "48EyUVW6dZ7ipSGkdxPPqHMG4bEPmZBARpztPG7iQFjeGfsTpBeAVyR31kiJvhg4DQ3JM8btNXsDjY7Wfnfyo6q6",
  "key23": "hCjpxTLkvShMYQdVyZf7XN35g4pGDSnDjq49jh8dj5DAtMkPNhau2fpvdVTCdv9epm2CLa6GuETSAEPQBmweMTn",
  "key24": "nRjcCHJYDNVkpCz2wRqePPp1Q4X1eoCiSx8qzHWgZPDG2H9fXFj8qDC9MRCpEddkgxTo8wm71BK9h1892MhRZ3s",
  "key25": "3iFEuLFyXwvV6XGT4ejSVKE1NqjCquoNVhqVTixjNF9LoKQ2Xxti8874S1qUn98Xtp49aZuA4wufpgCuFEAf5DUg",
  "key26": "4cRLLoyJ31s31i9jer8G8FsZcxa6iFDZxmqds9y6Uf7EbhSikmaWD9pfJD5xP6dBrPEA16JyfoTmBGtBNsZ5sLwL"
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
