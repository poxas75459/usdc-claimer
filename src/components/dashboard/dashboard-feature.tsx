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
    "2K78DHVXnRKVpVu4sBHieZWsU8Vj56iDwqJqkSYcaLsPumB8kboifxDJhpBvmETEf4PqZVazsk4GP1xpa4m7sYFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SX14n44C4NEaNcVvYJvvL8AzPrSYf52RQGCkbaNq8wBWErehpqjWa5yNWT56mTL3BSaZEe1Y2pBgivYpQ7qe7p2",
  "key1": "4L9DYNb6hWtN29BhJ5JowWSzDT9NsHWj3oe8B28u8ZKMS1owQ62HSRBUs6aEfMZemzaKZtwtMZb64dRtMjUqrjR6",
  "key2": "3AeD8jzCB68WC5KbEQaB2z7KaDXTZ6UYVhVJGadiVedpNqchSLQdyhZ9euDo6248ckJCNnYDwPn8JLgQqnudrpYA",
  "key3": "5uzsD6pCpjizqWLzccnjbWZ15RTRrvHwHr64tDvNqrpK5gK7dSWczvmLwGmDiQppg8fusp7m4nCiaVzMfYZXpN7r",
  "key4": "3YFWhGjBvGMtAa4w1KbVQTngg8orNQTLt7AMeoQFKM71nfL5j6KSS2WRe1rbzTnRPVYsfen5Hy7nZkcNrVV4GdhN",
  "key5": "3asxYPwZifS3Xu4EJ1BNASuTiesiZrRLYDqs6wprnSgvmPDr2Xp8sLjjWjmTUievv71US1BoHjyG551oLZ8Siim6",
  "key6": "4Y3Z1yPTY9UfzepXJo8Uv6es6uf4jRsMmZsjWLMWGGDXv9wKmdtAqJpZgf4VdRqZxB4cM1Fw6dFitax6nGWm3bR1",
  "key7": "5Gbau4KbEpxJ2zMaZaCuYCv1bQcXk8fg8kg9ig73tgXPm8aQbY317R5oyrdmqc6FgJMwJCZg3NgaUbuE9TphEbfZ",
  "key8": "3Lswk729tsW4CHAG3hSLkNjL4mzA95A4Dq8N8rH2HxDWF4HtCL8fpD92TeV9sCdE1reH4BUyvr2NzXdQxUUEknQP",
  "key9": "3ytPrGCg3kWZmWHTS3xwPZg5j1Ehi1DNr9wNL4dA4NZQoAPd54RDbs5bF3XxhQPtEQeBXkNoiHCR4vWrs6nWbP8b",
  "key10": "4t8h31qxnstKA45eqyiMhTTVvhZ1DFs6GQFh91uM3CkkPymmRMMSkioojifNBeVCqyPkBNgyMMnUXYgK2Agsntxp",
  "key11": "c4TXGPk1hZJcQi3af1MMh9rZ4gnGxEuMvb9UgfvXGzxuxGVxpto6UVmGCEZTX39RcTtGQLFszEqNnMweHFofEsL",
  "key12": "5oJP2Bt8Ee93K2nTGxo5mTZaCFoaht8ABwaUszU3fqxGkoDaKQ875WgdtcmFjikWK4NpcX7gnJhaWBHTisFn2De5",
  "key13": "2PsMSxcZbMakuXmpaVTxKrCiGQDKTfiQ8AppssXLs7Duw35uW42ggscLvcRGs8sfpVHvaim9g7MhkTbbtofTjFMJ",
  "key14": "7TM9N4itgJbYcaevtZFETxWXcjGHBPPcHiiV7srrEUTfWYmhzAnhecMjWbyWzQiaqxobegn6ztkyQEm15LdtEh3",
  "key15": "VdZCUzgvus9TL59kkTmzL8WXk7x4axdyJ19rRjKvD4UwUJYWCMGjMZgjPoSFPruUb5aB1wmUDheNJAZCDL9pDpG",
  "key16": "357Hxu2WowJ478n7pGbHrzkue2gxkey1YEArbdob2i3xBWw19vnEXnfiu52pSubdx9xgyxrAYf3qBc85GuQwR9kW",
  "key17": "2dm9fMCvJf1ko8RecDcS3MNdQHj5t13op8A5w1KvsUPfEDxb5LN7iCPKMGx5JnxQC7AWGM2NRrV7B3tzmREdBa5m",
  "key18": "26ZzepP2H1AYpHRLyJQnUWwen976NMXAFYQ1sUy3EACyddGuQTz9imnRpAmRnuGAAkrk24NHbrcMZ51SKftZFpgq",
  "key19": "3UtFW8Bbv6beA3ryyCfBkp5uu2YqCSgrdrDQSgoGfZ2VizKw5WwrXit77zLLtBkA2VwDtC3LS4uBghTCPLopnkHF",
  "key20": "57DRVNHkNyyHqdfE98LqYxR22L1Py2PjdCxyTvJz2smip7ZiknhkacUj2sc2WERnAs7Yyq7zR9pvSJmRDjJPxhr7",
  "key21": "5Vm5Hp6V6iTdStUv6oToXnXvjzAdaHehfxaQwWMmXYpDAzgYW399hMTWT5rdkJQjjybGsSP3XqYdy5D3WwKboAwE",
  "key22": "5VwZjguUVBL9v2gYt1fpN1SLZSzejZr8LemWcqgB3w2xGqWRsduBmBdBA4fJBq87Noroi874p1mfHCvcQYonjdSM",
  "key23": "3LxDS27jk15ii6zBVS3xyuSeUoty8p1yc2Rx4vMNNpT74Wid3vpNT75jtcfXW4YV6KsmPtUuq5XNqGP5TiMU2Pia",
  "key24": "5sW4LsLjw5C5u6gbZwsJ5a2eCqUcFs1YLMEbBfqC6r4bGcj6ViAxtQEtKXdrYYsYX6gtweEAbhdcnoeWzdoLzmCw"
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
