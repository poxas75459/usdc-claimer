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
    "2WwKANKAF52Wpf1Wx7bDEXfRZMpAKRa3hW28LDC9TgRmZnetTDymx5TxUWhjgyNX8Fk7SvkHKQMQSLLz1RkBMeqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kn3QYMBcA33gXwrr3T49TDpUddJXM7fH3MDbHQwd8erQ1rkqyN3GhirtswcN3x2FSqUrn57EufH1siMkShXmejx",
  "key1": "2HGJ7Qq51B9mPbyEAEMy9rs3pQYCsDWuRKjp4M3u58SwJkEychsuXgMyup7Ed9cDioaQNiUSMsk6fUEmaNpqfRXy",
  "key2": "2VSfsUgnUR6JdUJUDDSRptdpSazme17ZwsqBimdXdQh43jjL5vpMJouHYHLUuGRdE5KaY24Ctbd8TnsgfzbFzYfg",
  "key3": "3Kyd8MtFtMmQTfbhM2XCEys7Q7UaMDDAnRC1rez3LvauJ5NDnSZ5w5W1B1ufWLkj6XMqmPxLT6NW7XeWVRQMYCCz",
  "key4": "66o5bxaQR17n4sr3fWQniYVP8dNfXnb3V5G8my3iFa1ZbD2ZXs2wnoB6GdQK6rTz4brBAuXKXwej6EG8WHrmf7YW",
  "key5": "4q8JLHUcJgBuSgCSSq2xtsaN63nLFuL7u6R9WXtD6anAhWRABqhCwpaeQShtAcaasai8krC46UhtLZEpwasGNzeG",
  "key6": "5tDNKy7fmZJkr6E8m9PNT1DkuumEn4dxoLngVY8hnpqWPr3cp5mh7j415L1ZtxScxARWEQV7JXQWHSyJLz38S7ci",
  "key7": "58AqRZTDsqrnZZB5VhM4tvRNDMEgNurBXaLFj6DDwKaimTGEqY9qSWPHTX9qAZReMMrnqYmQPGYVAhUkvYSRKgsr",
  "key8": "3uP9DDkYNCuuqTotvXub9VDhcuwfuKqAb2xcDZQnbx3kjqtXSUYTREy9K7Br5ERHkXnLG6ovVjjK2ggCWfqTdv9a",
  "key9": "5JxfL68EWE6y53rmFZcrfpPyPAeV4yqBKLN9mDHFDukaiUbK2CqExEVtppco86mspKxzzyDhPfA8x6nwRRJNeb3N",
  "key10": "5x6SLtUbrWJvN4JyXxGCvnfNQTztojDQZVJBxxmeNCfuRHreUbhxoBJhkcLScgfWsuxNEroVhxG5ZBcvKzZN91ve",
  "key11": "35M3YwVnALW2zpdLUc5XngbLDYPCNvv25nVXRSLxLVWPCYNZmMGk8Awr86HJQEotjW4yWEp8gcQpJr21XWzCnQ3C",
  "key12": "2dceVG2rtUVxfXb2LjuqYQw8VBDQXCv1uCPeSkf1S46QxqbLhUhhy1hCzB1MaYY2auSQMfiQ8id3HTDiuJ8D7S6z",
  "key13": "2rBejjUS5JABNSFtibTz2wMf7qN9TrvHG6FZiQ7FUDMS8NP6J6JNWkuxSUAGpyCWazZNYvoqWcRPoyirReJyZ4nY",
  "key14": "2ZiVEp13T7LrriYu8UEe5LZDN2rHXGFAFQgNLAj7chn1dNHfFPcHC6a42DocwuSNKL8HuPe5TPF2WJbbpHPsFiNz",
  "key15": "4qhyaSw3pLMiry5mJPwhCHNSnovmDjKcFDcMJDuinwKzt3C6mprR5nqrdtNqWuXPq9NEPiphcR8joZ1SWX1MfDDf",
  "key16": "2Dxp1E5upwGTZb8s6hvfMRQnkggam7uRP4gL4PV8UTkp4YR9j5rg8iQMPQvCuwXFdAv5kUG3Vwim2KNgVMq3CDnz",
  "key17": "2izp1VetW2G2h35jfQuTTUGajDDRLyijKfaTtR4hJcJ9taKUzSz7fSysXLckUHb6jXr7ESrt1NxABZTfaDN9kAzY",
  "key18": "3XZLNKjR5VT7UPWh2uaNaZw7okFKJ5C2otn2uMrTmJfzv9xYnUNKsXttECk3WYVeU7QHuYckYYDrmL88kAdJtcoW",
  "key19": "56bmn5vfhCH8LnYrsLHD3xoUGmA3b34wyECpJUcYZBZnC5QXDi6eR6y2jiQqWELrDbCV5r1NqZXLj8UNd2PHdYN2",
  "key20": "4qx14ib89VjNLTFcN6kpiMCcJhfBzWbwqWVjqzWd8bRvjnK5q2uKb8PrBFWsTCWjDaSpK5tcCEMJ977WjPirWip9",
  "key21": "HTdr6sL2cXqfMxy8ZZiSsHRReW93RAsUGuwf6rNyZTPKrXx6HDLkj1P1v6gxcJkZjbr9vBE8yFX3LkJ8wnXjsge",
  "key22": "5567DKsC3ivfJ1xWhge37n1oTQpsqxFmTkpfgkmW6digVxMnckPBCzta9jxPtg8Cb79fW4HJFY2YXoTrCXoVh99e",
  "key23": "LVwTh4BzcfCgRUgrZ38yyM8w33wpAAtgYSX3aJv1m2V3N76idDUBPfxGy5ZsqxYL4pacWtXnDbtXyWQtpkpa9GV",
  "key24": "3sfDfnzDBLPSLRsUhmZucV21UZHTWSfzKVvJks7J2jQUN3QkqcsJWfRtaAGhcy2tPQBm1srgGmGuaL7vkro5pNHK",
  "key25": "2FiqjwSfjzVtYqPGgp9kjx6S4sqyPLHibygbV4nSGRH3LQTEXuPPYa1vnvxdxS2Zm9vEaHdvHikgFBu6kdnVgMyw",
  "key26": "5kRM87sF4zVQsqt3kMeCS1b2Fg3v1BManLKMWYr7MHkMepkcqJmxwC74gdj4bqWHehQC9rnkZDeR7sZGUgXkW9oa",
  "key27": "5ZahT4nmeK4MksPLJcB9jvKisVxz6DMY5VBumE6eCAXi91d79K25XmJG4RPRyZvdHP4yic91zSpSG7uYkTBDxp6d",
  "key28": "LU9XFBsaZRybLUJoAnHomP65UvdKguk7HCLPkNbJ7p5BxKxsTekQyjLskMVd4rFehx28xdkdK9qwjWCNGYfBeEX"
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
