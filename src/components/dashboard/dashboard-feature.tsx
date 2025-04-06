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
    "3MgspTXFuE8FF1kQrqTmRCeMa9zz5DTiD8L1pMJyxCMJubQjNCHxgSFMX2Cks4M9X7MSmot4gmf4cDexs4ouibqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xFggNUUkWutJavtPzoDM75y2xm4G1EDNzAcDgPX2tv4pwxa8sc8fbHG8ABz4ysfsoLvjG4Jnvi7EQ2yeEokRyhe",
  "key1": "22xAgD8mLm3yz45a9jfGs3oMVZS48nxqAFprBpY49N1XTwqCzsmpAhwZniF6SJPSfkGk6e9iVHzYxXiMzEruN9RS",
  "key2": "4NNocuxdCjq4XVJpmoCNwEaUWAitrEs9C3wcz9udpuj5Q35fB7FdB1kt1ms8G9RRvKDWczf7P1baP8dqycxgy6Yp",
  "key3": "2ykfXXkPv6vR63fp82rCpwFiDggjLKAdv9MiB8dPZbGySGsMQpPtHaTRyMuSnvXWpvM9poZvV1yz98AJri4cUtXg",
  "key4": "3imAVGMGvjD1FPVkEqH93RTypXNa3QRWJeXW1m8UVsZ38c1vAYGuU4dAYq7GSa3u3qhUK2c9224xoHJQXNK8z3zr",
  "key5": "5MPykcsymHeo24wcJzmE6wWjVEAcH1AQUnnLhWSJzPbxxqpa8JRAgoQ3sksG2skzFfVXSXFvwdcUpJBmKUQaxoVA",
  "key6": "3u872KJNrUtWEHXzteFDj2qd7aszzxxXocdNDXB3rSkktkhdb8ZqcerbvPXYu3P9NdefourXq964ffdcqKmiXUp5",
  "key7": "2oSu5vJLg5nr7Y8BtqrbDRDtQcnDrsrcd5NMk13rjBU3PQJJ2vY77v8jUWJoqjQbM6AoSoxLrazscfKufgEttEoa",
  "key8": "39jzkC17jNZV4sVRBrLydiXcdpWkMKJKtSEARkFgpc1YrVJ98SMCpjjPtGXfPGRiGJWJq8ZtbaPQgPZGhVTWsHMF",
  "key9": "2BSJUzLJddPQnZKCgqYYnJqCHeR93g15B523QUTrv49BLq9wJK4LKkFtX3FBX7GYMRQterQWeWTTobCrWmYJfgi1",
  "key10": "2LbBMHo3K9MZ1Hnrx2oyDBnJNYeQgzeA18bJTcsJxLqA6tFazCHqBGxWa3agtfvHqgD8tdjxx1DziYcLwo2YaeZW",
  "key11": "4aSMznDrELck4w1UxXHx6zT67KT6MHovDcLVgwbo67rVmXuRRqvC74hVCCvW3hAXLY9qpcoTXugeod56183Apwbt",
  "key12": "3yUCbnxEapJtur4kP6jaUHUL2c6BSweox1yJ9mWLPX5aGASjUCLucqNjMk8jUWnErekVcp6TiRPFqwNwadLbgYin",
  "key13": "5591dhyTBZVVhBb2oqC8rp5hPG7q9YhXYDUp1oMPuFux2ENVF3utpbE3gzfFbDN4NWRrg8iAGWSVUyFyT8WQyhV4",
  "key14": "5cJkDmKX8FdAqE3ELumESoZovSfVmSYDosUMwYBPMzk6XhQ8xuTdDPns5d8KKojSLoYtk7juswhcpVLJgDQLrcRz",
  "key15": "4XLS83DpbMrMbTp1dVx8Rvi1Y6U4byoY2wDghC2xPxbhywUcbN2vmNcsUb9LBra9epGZywgmu9qiwqA5gP3v517g",
  "key16": "2Hehs174tHjLTQv7Bk2UTpwf7zVTmoa9qTNnLESoV9J1QGNYTXDU6kHtcVTzEWYAvG8RRuwqCPTBWW8szCdRgZj2",
  "key17": "5qAH6FBYk6AaSqHCBVxv4DuUFYKmywYKvnFH6R2sTpc1hjJvYStS8asCig65cjjayWGoorUDVFBxE2hshCRCxpwp",
  "key18": "4wfHTkQDzT8hKLsQgFSYCRNMAi1tiJLf263iY27ZarRxf3cuE1pwxWFQWMsJ85QtbW2DW3DsDua9FxCpvMptACLo",
  "key19": "3eTDBPqo1WGByZ9aDf8sovu9hHsp8avdo1gTNzY1zMhuvPV3ggHkmHsF8Ao2iubz5FZdqro8nfJNPFpAPKsb6Leo",
  "key20": "3sxJ2Yk5aef8Q9iNFuyLRTeA9HTyUSW3E8oZmWdFuyvkodXMGEPo37LjNC7ySJZ5qjKQDCsL79LPZijXzMnTm9Xk",
  "key21": "3NGYVLcAwr2KfZ3fsTdHY4LbATzXBLLNjqZ5KReipha1urCcPrV64NtwHcx8xx2U1eCaC7CrVtrS63vj9Jp2LBsm",
  "key22": "AwhBD1Y8sELfkJjT8zbMDubPfK3vtbVnYF7oSiuRN4hac2KF4gqebGxVEEGPmEhkzhNF9kztozfpZ4X8mKrZZ3Y",
  "key23": "5esF3n32moiASceGf7atQYshQWtS3AdPRMz3VrwcwChmtWvN9bGBfbatgwPm8d35bDghY35uUiw7vzryNQD79KCV",
  "key24": "5eXd3FNLAjj661DFwKMTrrQ5jfab6LZU2w3uQHM8N9v7Mh8VHNwR2vBUSi1MVvash8ub1oYBcQfcfCnopA6UaQSE",
  "key25": "4zyFjtsSByGNmVZ4PHdcmpE8Y7Ahz4rX6pvrVZcRsQdzNWKutWw1YekbEPN5yo55SFNPZq7XZG4fPJyvtoT2uRE7",
  "key26": "YwtmQ1oADZkU2nk1aZnpeRzyPCXzMHSkuEpWwe6kcyagAhAxAqd9rN4RymagiVodwu6jbKrkK22jfwECEEURWhr",
  "key27": "4pvW2n8i6iqkMmBfZPFndS4KsaW6ZfAe8u99uKP5bybDmknb6XNaYfRWeN41Bn17gmFZDNPk5JUbRL1JGwG5Kg5r",
  "key28": "5qQdS6FvYDst97qWkynjE3wpYMv4AMjt3Rq92t5vvsCmeHX3kTMztre73FSZTbUGNrcSovL35dgAWkHeBCd1DEf",
  "key29": "56uG9XUSQtXvYxKBsSRYQ9ZUxPMfcg8psVEH7mzD9jZ3agLbNKPid4pYsWBvRTrdeC3VXHT9RA4GkVYHUzN9tmgZ",
  "key30": "4o7xqnnUwtEtHpU9JrUXZ26UyxVexkaVy2ZYaDjLfXTrzojRarvAd9WoqRm8RCZmGvdppkgffGT7oS8Bm4zGE15Y",
  "key31": "65vJxaP6vHs3EJtEAb36ZqPZ8dDE1WZM3mZqaUhs5bdhULRY8uTU9qVshPECjND4Zccx3vhbhtLhQVwa1VdPtN7C",
  "key32": "3dQJ1nHaCHRL83dk6PiboKEwKCmgfgsTYvU6kndqAp6tkaxKq4GWEzNEhV6PUTuBCuG6KYrY1iSFM2TzHHEHmCMf",
  "key33": "5C73YmBvtJXiwyeDtSZH9wZgZUDVto6QDgVPLUwFqQd7uMrpGjNjafRuYwjcbYFDPY8QzyVipB343SjCkQryWr1d"
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
