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
    "53hjfHUqkqp5tJezqp5f4MTfq9Z2vHKTaRZjgbxqczkekwSLP2YehFJEQeBLSz5E5tS1hEtdRC6FuZ4r7kRxezBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49jqthMYpK8KHu7oqy4brw25DVbPnQhZEdMAa7cKu4iaZMXXxygJUoMFC2qiCSZsLBAaxwDte3VxKjg3PkzxDbgn",
  "key1": "4Q3PnCugYSU5FW7fsRKBk6eFc49Yq4Edo3f4DjiMKTvp2kC4Um6XPqGp3T2gJKHQ3BgXKJF6LHj6BRhCfxSP8jHV",
  "key2": "5cqEC6aJ9AHG3uiFQgiNPuqEhXWjpyDV5j6qaAKut7aH5WWSFtCrv4hG1upC4kDetpYYLVC42JsPsXESwfscsBYA",
  "key3": "yyGjdKemBFYzN3gGScBhagg48dKCmw7y1FuLzK8J6M3bF695wtBkozGZzenWDVTi5wn7wS5u3hBERWHRztDYpWR",
  "key4": "F8uAhSkEeWFiyn39ScGskvUDmuuZe1DdLJt3qegFMEHtLfEUW7aCgBKv2gpAAovHvqEcY8gRCwK4r5MAzEQo8Ww",
  "key5": "5sRxZcTUNPygjNAYFDPA99mG6Wfuam3i3XFXyycthe5jXnAuTr7VpoLW6tKS93oSX73RqAnwmAoEnKcssg7t568d",
  "key6": "2f4zGpXSeUH46LsrebUmkuEefcbyZ3CeJtKJr4dXqdNLCDfpwoXRAaTpEwZz2N8oz7btbquBG1Sfc1LCuGHb8nKv",
  "key7": "2hD1tq1qn7MrU2ifPUecs865GJG9VW8N2VTNhXcwQtEa9mneh6ErKZFQB3PL3F7WomBrzGPf7dxPmsn3YkEx9GWX",
  "key8": "pNEvo7bv6VZrJXiYtUMqDnMo2AhRtDKD9e1i8wLQGJfEjkywkdMJBLRXDg9JHVrfNRSw3FhygqcNMq9dwykGZiQ",
  "key9": "5j1s5wHSAcLy9zgrWMLjvtrEPtPew2Hx59GUrsccKM7m6g1uiMhxnfJeZywWwbX9Hps6YUHAsnpULbFjQ5oJgHuX",
  "key10": "2xwDGhgfF2TeVGy9r814cgzz1mJeX4eCi5mhTKyXbYDRsahmQdyStzFVJ32NvXBBbieGphDParx5VY2f3vaSxPFS",
  "key11": "3jQLavptyryKrWm2CSjmQXsEF16qyNNGjssn4Xi13DEodQAQ9qhn5W5dFmoGMHpbv2vxC944pKsqPbn83V2PeH18",
  "key12": "CFRsJCtRVz3bBTTkx74T765WohtGHQYgnQ8DqFCoNA5mVUtWZNAQZLjMr7ohse6soY815idoYLaAxQkGyjzQwx9",
  "key13": "5Ud9n5CVSfVAcQyuEbdaCF1aegE8Bjc6yQroE48Pg9kuxaKrappvXKbZuBH46Fj6LZKJBvoz24Mn8TnAqdt3hNMo",
  "key14": "4YBiPi9uVPuGk1Mz3a913Eh1byJaoy5Nyw8HVLkpAqwueBq3YEtys64hwk6cLX8iJVUYTNLE5LqVD3FAekuAioKS",
  "key15": "5Pit4SYq4zkwrViZYC9HyeVKHueByFQdDvA3A738Y7GKT152gfjAe5JNZe8i4ZgdfvZyLh1ipZzW7AHXVGDnHcLF",
  "key16": "5KPuEprMEyzmqhJG7cYkfaJthMxRBEv4zpw71JUT5YWZzMWJCvL1zRxPbudnBZ6RRzXbKHKccBCAzrUvd9UT9EFN",
  "key17": "2W6wkZbZ68d8v9Jjwc7TzrMHMW34xR6kggtekKZBHPf2QLYQDbnSEgrQwFUCEXmpxrC2HN5Zu1PaduXmqpPcvZ65",
  "key18": "3tyMWthLBPj3Eew9qyz8r3y9tvqwPBfLZi1Gu61ZMkQiwoEcMKhYeFKwg1XdJGCDVC6xwt9Cr7aad4nui4LXSHBk",
  "key19": "4EU9Ea3NEeCqRy8EcjuoSECkDxGMHtpN25tuC52nDSWBTsXbnjLzJuurUpbjtSMTzmtzgzX4umErCzuSGwY6fSWa",
  "key20": "nLM5HXsrT4fLD68m8XHmv6MfCNerRviY6LrFCct4njz5KxPvnqLZu9xN2t9MKxdKxWkXHEiB6WYB9LM2qtBjVPk",
  "key21": "3DmNBvM8brWCyMb6ZDaNtosxWYTR22RAZJN87No8gy1TzxxXfV95KSWNiPhGownB5g6JbatQnAAcHCsrmD9Stxoc",
  "key22": "4zEACZ9bcSvaX3co9s2Kk6qxtm3AjjHVVuyYANeCuLDQ6EGhfHMieamRdJmETWisrHHajjJs9RTz5nyt13oBEU8b",
  "key23": "2J6iCmtxNM1k3SRMgncN4RYtpEH26bGCbY5Lbsc2qPCscas4DZzDHmwNsST1bBCcmEfLz4TaYehGUhhMnPqTjtQ",
  "key24": "39fJHwHBvrjkAWM2iXLQBizukukHfBwWYe2LwgsdL9ALJDUf8eDs6u9piMQeFtDq4EJxfzK5g48YeqMbsjqWxD86",
  "key25": "rafvgrBou45SbX8SUJMUVVgMrGp5yFSkuLcu1HX7otYjaiw4iV3ZFV8wfQKY9LJ9S8NrCkMoQvrSLT4Sv8Zr4cy",
  "key26": "5ZkaXadDDtfGaY3aaPKH886c3wXbopziBABxam9rzodmbRUjRHQkzPDjJGxbXSrjqnGm7vTFZhvJ1brQmzdZYtoV",
  "key27": "snw9aF8Kyg2GQwgpKNpFVj2BmV5GmMrw1QmujVJMMab1HZLhCcEEsFYKuNoM7KcMNviSrkF2euHw8jMDiS8esu6",
  "key28": "5cStBZkSodh4PGT4mFjY44uuc73pznRGemyCfFYcYx1yzUT36fgvBJPTVQKi6Mo1oT4qxv6pdWn7TQRdn6beyA8S",
  "key29": "4cHHSySAu7ZRfkUjDnp9BhMXRdXMVpn8UHhHQhEXYbPUqZc8sXbndbBrW3qeRoitpEW3UCzqi7jG7p5kdJDEMt9",
  "key30": "3mYnaSJXN2gUgSjVhw5yciLscMAe25diupejHyV8M3GvodFtTJRAuui2FKehu9ByAnGEnnfSYkUNBdg9r69aHA2e",
  "key31": "65Fn78Dq1g2QSmjHHBrVC9awozeXptaxMQYBuV3Ei8DzuGKdBKKktvxLbAKcm2iZc56piAfqXEBw9xM73Aesr89B",
  "key32": "3RYysDYBSDxWqLsDmmtKMTA6sTLCyzpNFHygUdSnVR1bbZ1VpLrTwUmexeGXyqdmvQdtkayeo9y1ThnsAMJS3WFw",
  "key33": "2iWbWPj1xrvTZj22cN4muC7b5YGh6ELJ7jnaTGnqvyESwGz8ERPRSNLG6NR4EaiPondm4HwoUUuWV5Qpf3nYRhV7",
  "key34": "3GBjeW3ShBCZxjDxaoF69f7E4beRfTHDi3CBcXs6nhseYMeLbMCQTh3RNZCto7EVVn7HTXC7qDimN89ueGA9kiZy",
  "key35": "2ikKHJmsvd1EUB7e3MXK91NcXPeVSkuP1usyD1jm8mnuupgjr8VDMEcdChdDanwGFAZgmQexTWhaCjq1CXxnXyYr",
  "key36": "3EngYp857UjRcabhrpSX8QDkKsJa2JVnY1bE6BotqVo4Zzxxgt9ZuLFKETTTGqFWxqisY33VwA36UcGd92FEgTdP",
  "key37": "2TVsdfEpAdMoVfUGBELPHBPxDSZBRmBiMZuswBVGsbAZDbFSP3LTnqKeDZhbXiJfYZjAQ9Z2nSyZJoVXmNjpa1bB",
  "key38": "3t9E1osWKGWfMDJ7oox7ehVrSEkTJJdmUCHY2F2prxxiEN2hiqWgYuY8H878kyP5uLyUW6BgDmZeeNBSQmYcGwuA",
  "key39": "5m2EUSNAsN4mCYtEjad9cbJ69m53NeePoku9kRWrJMZyeBoBhRjQ9ZvcJhQfmgjQZhMcdmXLt5e9uG5UvEYMh5Qb",
  "key40": "4ZuAZNmcvP713qbEEeEp99qVmu76qyEVrWdjGio8CycR8H7mreB8haNmE7tLwvzfVCaWJhvs2SikNog2F5c5b1xT",
  "key41": "2eGJ2W2toy3H5VyxVBUmZS5RvU7B67rNMFVebxmim5ZovNGmAQ72UUGoSVXUPvJdrhtg43Yse4xAG9M61aTXqHa9",
  "key42": "2tKzDPR87F5hq8mxhjvCoMf7p1Tebrihudqm7o4vjHKcnAL9pR3Dx5KpkyBHTg1cLYjSnaxgNazByzJFqgFX5Ahs",
  "key43": "HHr2YtFvPd7BsydPtFwAb8Q1QrV4PV4vEVPkg7LtbFm1DAgM43ptwJ4CvxMmwhn934YWAeGXgYXYxgz2N4oBAX9"
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
