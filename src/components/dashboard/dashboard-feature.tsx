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
    "2a9jTNuwLuK9QAdspWjRgqqR1RKa9nNURowoCnsmGK3xrhCWmF6mfqJ4JGgdVgAZSATbVM5X5mxdhzrGVUuRdtYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kATJygVCWgMVXwPHBm36vGAEUR55ePacuWeyKx5EzyoEnbd1y61QiD4Vg3WZ6VZRk2dQpYf3sbVSHchYDFizgF3",
  "key1": "2MSjXvV6YdpPfxh6D4HAde4ZBJMFH1CUsaR3Z7561rwpFeRWLzZfJ4AzkqcakphhbkcsYozDxYJTCachi8NzWW1o",
  "key2": "2Bs9hGdhPviPTuGtw1QLNpkhNQ4k4kNViw3S5919vCEcA3uDrn5LLDatgcvrB9EMM9zZmsAFdRCJnqeTS5S1jbYZ",
  "key3": "DpK6R3rGkDzyDvoL9zFiUXuE7T4xPaFju1yhXPtGEZvy1nr1fpM2Vb7mbMbF6ATVGzpUjg6gGvbodAPEQwQAtno",
  "key4": "4HbWgTEyhgDF7GW9fYyEebtKSAjRrf189o5azK2AQqAA516NbWCM2dSvmHyJcJcEVPy4x6URJk1zDk15TpwxMANY",
  "key5": "3K3oiKo1eBJWvY9dMHLhtVMUTm3Nu5tqzBxFAKJCz3SpoAAcWa2fHsyb4WiZDrNPzDf2QnX9CQCMg73AD9AuN5Hk",
  "key6": "4sQsB7smejEQYsDYcrAgCkLZHhSbdHFZad9TTdvrnrFax1bCXMEQv1zZJnJro2tAUA3kXK7TVjynCxCuVTkcx37r",
  "key7": "3wze69MfXZzwCQMykdzWZNEe1PEJYbmwmvEfy5AMczSaQ6CmSd1DxktPR2rQLvoJomitUbbEoExerMbGBHzVDUJK",
  "key8": "5RRWZ2rzpb3zF13kPP97HQJWT7YP2Sn9Qg5Scztv6xYUoBJLmfTTR44Nod4AQEWcXc4nVky2Dsvw4hiDjEZpJ1QR",
  "key9": "2LcQkcxKGMdRE4zZpkpZSj5FyF6EjF4d9Hc55wYqQsQWYBMbHkWw3zH3dXzDNpNVebFgZWogrCJgr8SM3Tcksr6v",
  "key10": "qDRG7izet2wcDnW8iuEk8eCRK76gz3f3mETfWKRYqHXLAV2m3vxEW6exxpxuMwfSCtomS5tK7WnMJfEmRUAgFL9",
  "key11": "2qUavA5V6jXu4KxxCmvGF2RauLo7G2j4WutMVdnDbfwDHaKLpw83uK7YxNn4iUatmZ2KdySEm35Ng5mi6RhNEZrs",
  "key12": "5AeD6Kr1q1CkcE43dTBMoLe3dRdfH1Gq26JyGKGksugFTZKZnxSCjwva3izYV4o5P3xAu6JiA8MZ4Z6ubE7RgGDG",
  "key13": "4LfKUFumZTtfGERp2noqd7v92GiKVzK4HQQaLFgsRmgutiWEMzUPQhu5xdRTntBSG3bCrikb7KX5aAGzLXY4xRrN",
  "key14": "2kdkGFrJmmFgWRZGnta3o6Z7xc5jhu5JzgMEGQA1VM8tRog7khtEw3siDXziMAAdH4WaKKCU92S4RRMVnGmHP2WE",
  "key15": "21JhtFWxXEAc9yYggvWNnYHmBN4niAfoE7n6HrBVxjWsBKgmujmuE6rQbEcHXBL6z3aFWEfQEAhKiCe2iWw9u1S6",
  "key16": "4TgaqcknkSovDVujvbD7mk5NzFLYdNihpEHtFrjUwM6xqMnReb7iBtb6UG8EsWbyqRFsCJA2QgfnQ769yBmvGtbb",
  "key17": "5DGTt8Lb96d4Fw3zWWBqeP5rjwTz8m62DyanDzQX7sa7TTGC1RCSUrHAmYu1PXUSCyBV1q7dhHfcvLjGp3DE774G",
  "key18": "5q4YBb5WdG1jUmNFf44h3TrA7muAFxgVrc3GWNpwudT69fTzVHfQ7SDa21cfUKNU2S6G9KSJpTZKmjQjz9Ljcd7c",
  "key19": "YdP8UyVhJLJmKLawu54j63Eo4URWqRz43GVnTDVrDTu8bbkzLxag8qQhNUXKJ7UHsQhMXYGeUETgXCqJSiEtgM3",
  "key20": "2rDPfT8rdhLkp7aNQ4CkEDCpUVxFSHTE8YpBV47zvYEVcZGpgfjVtU551nrbanp3rXBEQVJhwvHXzJfCBvxV9YHi",
  "key21": "3Mf3ymuERa3dkVboBMBF3D1Qr97o1hvt5iZgfECuz4WDo5B3sgud9VGbdAy1DXveRPbueGaZM3WRHDDJSmNZ62DP",
  "key22": "52p7okasMhUJXLwwA5bbheGjoNEJtpZMTx6W4PtyCyQTu8vwWyBpMmovpULkqCDjvTrccjFLrjYmP36q3WAspCoW",
  "key23": "wLe3da1nbieZHQvicTHYjHU9VYCJyvcqpT4AR62WT5siq2Fz4EMPwugGdxY9dUsGPDzihnrFr1jptQv5694fZPd",
  "key24": "5ZckWBzqkMTH81LvBPdQ5DKQsDmwdrUSSUEHuSKWQqJWv28bk9Lfen3J2oPDez2Q6YmNauFJ1zMiPgv1PwmEZkw2",
  "key25": "4Qj9W6qc1mEZJcshBVk6HXuQ65K3bhBDqXbq43tfYW4on4VFQJ7wRt1VqahHbf6cKi2nMgvMCuwwHCYk6T1KAQYu",
  "key26": "5qsz6u55EFEzSar7unCcqJjAPsU2bXGEunrHz3yWn68r2MwvThfqjBC1dWEkiVtzU2N4aSWiVwnZNZcWNTwVUGg",
  "key27": "9KyG2qGLnzFRkp6Ggq6b1zduM7tqC93DPJdkyUb94pxqFwhyRT2oaZ56s19ifNLGKWzy3eTHpE1toJovjReEiFU",
  "key28": "5E6DwzPZsxgn3LeBWNJCkAY7hhqopvbSi3DiWf1PjVkWTiYSLeWUL9LXAwSFw2y9T9i7D8YQpqkc877k3H7u3o6s",
  "key29": "3BKqQKebv2h4gJ5Qo3PGgb32c27SnizZ29w956mJAm57jALqVZH7PiBjwtYhNBa8rjw8Zc45pr9KUTtGS2vVptqd",
  "key30": "WSmb8SfCws98VJ2Uy2Gm3kmdiPhfHeDGR7oMuqoXjmzaYvVTFVH1diUmoGGegCaT7SXAYsPu6KHCtHhwQg4j8sy",
  "key31": "3HQWgfjiPKX8993NZEBzCyCLprPvWpyCXKXu5G3Zi75iZD7eJpjTJoBWrFhVfaMc5BcsuU7aTLRChssjkuDELa2P",
  "key32": "3T2tCU4rnRS7Mw54if97yYyDCocEae18KF27UFiMBJzzQid2e1NoyuSBxfTq9uJpHijH53Tx2nSdnKURtQqodLHY",
  "key33": "4YogzSwWxpvxw7wgdsGAUzaE3Cfogvwjr2nrwxi4WAfrdn8eh1k8tLVdovM5NSMYDQFQeCE9ai8fLFtrNyNPXQah",
  "key34": "2Ay3JZDGB6u1nLRGECoQxzb1o5fyn3xujRmpxs9X8vveUKfut7RTk4rWjUQxiJqLT6Mx5dFZjDVf2iGVpoYqeak4",
  "key35": "3pwjvCEka1QqQemiGRyECSFXQNFEpVjg975YP1TBj6ZPJbknSGrTeBjaUZT2anKeMDfQUC9LwaHrLhDc9b8X4K3B",
  "key36": "5zSMdHPeAfjTfheMCk76Gazmh1PFKuHaDF1ayQiVe59HfLhuXuMVZuc1wLumjz7wTtuBPDk695w89rGMR1hZvXoS"
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
