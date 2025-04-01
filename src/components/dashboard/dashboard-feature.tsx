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
    "4SwoYC8ewFzpprb9CRL7swzVpRpR45KkU9NBG4oiLnQahQcZgfx18exD9VHAYYkwjWEAmxb1Lo6pdGyDFHame25d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDLuqTgaiBEo7PfFmyPBvBM3c1YBjH5q3U5QurPKuzW3kwk3zPxLGNpzyDaHPMsWhaMAZsV3GShWQp5Po688A4i",
  "key1": "2bWmqR9PfVaVHPUxxfuMnnapuuLitQv8NHw7EUVYBM1jWahQ49vXyF9dyyoBjjBdMDkMwmoLW5SAW4bCnh3NPpRg",
  "key2": "3kVCfF66NifkLmb9ar4vVkXzBKQdPNTGMmBxHavKetNtJorpPw1RjmJhc1P3ChwC6BGLqTLkapEvBLPpbBYkSpS2",
  "key3": "4cvWBkPbopjS2NgvepwdPv8BQNPA4gCt5JGiT6m4urwoyjHp39nJBkVKUrHosPyL3MZNbvZSgT8NMc89X8RpKQzt",
  "key4": "5d34gAKJ3FnXo9MrKuhE2HBek3tDFQ3ZW4BzSGpfYTCnKRBykkELjM6sckWaD5phe7P72i5d25WSVGdpSSB8KxHH",
  "key5": "67G5xBq2uxz9ZD8fZr3Jrw7Fkq6z2HLGWR7T4FbnvLF7heoSKq4y47EHpRizNyMQLAmifiKbPc1qJMDrpkcDJkDz",
  "key6": "24skJzuqfYNDwEXTzzzvRgdq5btiZ4fG2c8PKmNGFtrBnkgNarq53QuAcyoGaeQM94akebbZywf2pPimHcfeGPf5",
  "key7": "2XBn283CVpRicgYggcsdwfAwD8s5Aa2EzVEVat56VdmSwtGkEgTbhAj4Fo11URfARVSV68js4PqsJ8a3cT4AUfcu",
  "key8": "2saFjhWzWyTR4uNyQnT7KMz9QuPjCVb9KxpPPtfhY4eqkBHmgMdBpx7W9i4uyCBteuecfd7rkGKL5EcNELk6uvHx",
  "key9": "2AQ1fELsuU9ktC1dJULoa16tA39EXbGzuAPb9K75UUvEhvH2276BAQfu6cDzW1MAJdYznhgoFVfNbMh8JZDvub8L",
  "key10": "3nLCxnjb1qq5kwGSuLhgJmNEyFoS3pQAduA8dx2WU9twia8afnbDqpV5ThJeQwPqkyAabhGmJJ4Ff58758aPaCgA",
  "key11": "U9WxFRNXjBWy8biLxcXKptWMccAgqJ55ZGQ4idZXwgzB5hSUWx1YoFgAEUAy7UiF4MZmsgQYE9DsysaBhEn9EeM",
  "key12": "4yEcF5CpsbngW9MUwzKAfw9kEdc7LyDBkeKUFxBuJQQ9Snmr3dGFvoaTfd1QXr8GpVume7xnixkyfGB6pV33iFH9",
  "key13": "39b267nRQV11eaXAeDQShYDV9oFYAQ9nDjc4UrFroy11d66wh72smRNvnVz3rG3zBp42UytU6z1MLyb3Z9ojHUCn",
  "key14": "3UubnQcEamnSVtoRT2QP3B3wRKVQmkeivWapuFxBsz7KzzLKqEJ6M4AGf7hGFgmTHKZCXTW4xFfAiP8hXBJEEodo",
  "key15": "2Z1t4Wvan9FsTo9awHeU6d56MXG1AVtmmtAMd22gMAJA6GcWzCTMUYTYYvX1u96atuyZzQe21Z6qyA6YfaMSeeSu",
  "key16": "2C8pqe7cQNXukRyF7CQZjuo5vJfjDqr2HaGZza4s69hQmqHqk2eEWniVdeLEXNVRjSiwEWZV8d1hFTNbh6uDM4Ls",
  "key17": "4UPhr6rZhiArC1dohugX2AK8zJi1kuLwsuMAQvbaRuaT7QBTrP2xaTbXqeLn2VZKLWytZ98NmWNKxaKbgfZyxffQ",
  "key18": "ogpqRhZkuJSMaFsUUupea4yEC2k3cmJXZkeHzJ1HXSNywWJ5NccaeXXApwqMmDhK93knLfsBBauh1MDGN1gykts",
  "key19": "4cqriD355nuaxTRVB78uzRnuxwBdPDbDjB2Mh8arbwKFUKiT7yTdk1n123u2gLHxowDr4CR1jTs5aFzhnX3UKSQy",
  "key20": "4Gr6NgY8MFEwxfvGo3EhdzpDWLWX6A3j7eovBepYzYqEt1yUcmTsi4GJDmGuoonjYu1vMD81zh9yY6qWqKkudi44",
  "key21": "5bpRAqXKMs7mFGeW2wMin2oXUNoMqC6BVpgZXzQubd9JS6ADmJsBWcHDsm8HEv9VhvE28HULxCQwi5DqyR4ZQa2p",
  "key22": "TihmPthTeDcWiinH8BhxXHUUhAGiNd5EgyrwtkS7z4SJbz8mVV15nDWR8x6jvcUvyp6ZmR7MzKaRFLydLdGCeWi",
  "key23": "5HKYotjJzUGeu4iYHabQirdXsS61DYt2f3j1Zv2DLA4g25Peh64e6sRoaXFpLskdwHXbSshE91wxUTy2SG3rpphQ",
  "key24": "sCKEgmFjuXTf7EAKiEqHyMcmD3Fy6bbvBXbb1Lupa96w9PNpcwcXygjgmfyvs7yAqj2o4ZmZwJdLqqbQpfAwqWw"
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
