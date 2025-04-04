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
    "4iyRmtQ6HCciDZz8iDJtJLYV5dK6bpRBg9Kh1SexFgFu7Rj2JcCa53PADGsRSVVEXkVrKStx81tBnru32nUorUUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WnEMMin2VyoW9PxxFQH3EBSxVwLZQxu75Xibd7Gw1VSxy3hCxqj8AmvMLLJ7T8bcFcZJgCHXNeMNjbpCvabMpw5",
  "key1": "uzmWzvXV6fqKrp55DrQsC9n64VhkUy67YWE3cY5NujRUdn2Uw9ubmjbjyadQhCoYKUdryMwZ18FRxJFcJyVP51E",
  "key2": "3fGXPgUfT8TrMs2joAo4Hzvp99bjsxTFmZ927gE3SramR6kX4b8Wt5tsAyqBAmtkwnZWpJWzUMZJ6wqgDefTXgJz",
  "key3": "2RTsU5uMgRNXJc8eccdSzFv5m36avWP6weJzFAidi6kChFUaNwtfTFWePJniRCE6WmhYwiGVjq1bPwYJwg5cJtgD",
  "key4": "5ri1bgJRYM2FrDSWR5LU6jUV2UeF3n77t9Phxk4s8t26FPdNpLjUBKY4N8VjEqfQgAD2Sobe3VZsmsUGebSKCq1L",
  "key5": "5MCwS7AKqSTkK9yyKJpwzGhTN2JnPTMJCEWzgCH6rBeoQcsRpPkPxYQL2JxzdxvhXhAPfNCtVVUgc24ivG5GTxEA",
  "key6": "4QktagQ6KwBxhaQBJJGWMhm8G3pKrPAu5wE1TZZNVp4CE5fBAndAFibzsFkZrYWYRjNqEXCBjGn9VBjthRHJZCZS",
  "key7": "kunQ3n9fqs2Db4qwZXRXbRwcDGAdPCBLLATDW8MghTp8ZHiXH27RUzG4RFAG9kYQC1CTaM9v5j3aJ97xSzB3ZFQ",
  "key8": "3GLTKujDA5DaaoWYYJWJKvJawmwVFyN4hChc99sQ5rdmK5E2cSrPzfNyf8r7nGgMpBxroW5exHrWKWtXjDtDg97B",
  "key9": "3DZ4uZxqQJhBKwvWpyWqdrc2YnFNDjEvkhEiqPBdceh2XnEDiWXoEpSbLGzaA5ytrP26F41rwugbC7F4wx5Hg1V5",
  "key10": "4nrEJRQN9q4S9z5fz1zyfzdw5PNtJ12ZS31krv17fKBHiPgy2P9PnWNTSexjPPjf6vd6PVCGtL1uGrfs2ESoPbAv",
  "key11": "614JWdpeCu3mgPDaZE6desTgRCvTfeCYrSZ9GJXQCZ6wNRupHx1vQvpprUTtUMdzYhs3Ka9G1wor5AChGgbX7t17",
  "key12": "5vVudXD3MHWimxmJa9Nf5V6LZPcxLQcS6nbo55uPGoFtuhJRbUNC62C2w2s26n5ivLwn9suc9GRsNWKkuFHoFRgi",
  "key13": "4qWB2rviBkihB2iY7FWPQzPo6LWmiRiw1VBe1W88BbKvYKzi5t5XnRXpsUvaEjC58E38VFExg6M3gjxYSi4zpYT7",
  "key14": "4EzG4wRDW6eSQ4WNVxFG1UKmBo1VTAYxgsTvCTUG8muG57JVoB3PivR3QzxdJrwbRyzDvS4NQfmstrxvJfP4rzL3",
  "key15": "edf7AVQMRiDgSY2xRJPyTgjdY7Ymcc2S35D9bb4uQt9adua5t3AKWFVR9uZXNYH1t5XHsa2SVg3cDTVkWdSyj4H",
  "key16": "2yWYPq7eU2k3DQvKgCdepkVGd2EtFJhY56ZPC96UjsC8qCte783NPCMkJSrmuxZvvysctC4FJJxSzeCtnjAd7E4s",
  "key17": "3hDSh9PtXExjkRimoYMfQ9qDkfEMcBiutQFwawpchdhJiQQhSvchVadUMnxGe6xWXUtee9S9MMDCvT5P1MBdLrtP",
  "key18": "5UAfpinULiC1jnW48hsTy9LVuZTzfGAgMgi51NNYcicoahhvNh4LmcPq6Uz3ZfDTHgt1r3Deat5NHKiNMueKiJjf",
  "key19": "4UgafFkZkUoXN35PYNU2FYHzwA1HLCTSrHLvEhxEauW1Emb9ECiruKGKqPBpYehecAY8opNTRoP4xwHCmbBHrXX8",
  "key20": "3wYCQ72drkq59octRiDmG7ckZsHzBBRBGvjauXxvFPzK8vXJt7uoTWxbNdyzsbZCSq7vhRAH45qJmgmV9gHgM4Fm",
  "key21": "5TKVFrCtJQWa2PUMrzQFXnqJM6NzEQbrQq8X6xAUpfvEm7JxnBCpVeDEYrvrgiR3sG2kTGGGukAkSqJdAg9qJFnf",
  "key22": "2cRCc969weucpGKcpuMHWLSAUroYqfhVyZM9QDFU8DXzkGcxc1GwTx4berzWFqcd9xu9VCrZCzsFRsVbNjc9C4LP",
  "key23": "2uU46EZCLmUJ5pHFTrZm9otYTSrRcFumaNmBwdrew9syrVhe8JB6rTepaiMqRnr9Y1b8Zfmk3f8VW2Nh5mcs893s",
  "key24": "T6HwJ7B4oeHD23YX8PHmSziiGMzqbxC7fPtRbBMqH7HxNUtMgHXW2cd8VG9g8ekBNaRAhZmn4zvFFCQKSmgN6CS",
  "key25": "2dPM1WoYJUpW9MsxYZhqH5UgQeRkQ9VBwBzsvutoNzaFUYEdnHPwxTVjWuMBkv3mYhmKGd9Am88WPGsv2LTw3TUE",
  "key26": "2iJ1twntsWaMNo48LeMY3VdhdoJ5DAABEaj1zS4UWRVMcum2E2UrJzFgYhkCJX31kymh6j1EY37rW1jdLztVTBkG",
  "key27": "57okogE19seSuKCg2QNWZaqvWMy3sQuj1yKybuwMS1NPWNtU7fCDTjf5MFyNh2d5zi6FkiwpaGVPAPFjJq8xCPxP",
  "key28": "37Ty1SfBEg2F5LUESSnH94bcjkwWYd51JAB9WbhLfdMGV2QbdjqihP64aWtbEvEXUtwqHZfobjFKDig5q29nSqdk"
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
