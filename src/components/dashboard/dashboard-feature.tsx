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
    "58fdGMksap7EdRLktD7aGmxTUrPFyPjjqi6jz8HWjsMkwBRTNZjAVSkMck4ykeDG2BixXAWwvcQCjnFtGKu9ryRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YWxB3XumZXjEcGdqUGaboyHjsv8Syk5Ktuba1DgjLnp2HTjxGm8TLRAeKxmiMeRNtV34A59puJgFoUeJyGNQGtm",
  "key1": "fT13vGEgptoFAfsZmF9TRczWiT5XZzn9cD67wH9cZnEkG2fr9EVVxZzhmLeXsr8hkek1D5bAujaYMoNQTz96pXQ",
  "key2": "35wDvujY477zQaLdemqzKYvjGZMqr7uTzS6wFnkKgf7kg9zWCj3h98HvysWA6tuU288Ntwz8Co9erW6R9d3UcfDS",
  "key3": "4VoUS2iUdjQfETUdkQzdZy7tNnSmKCNH6MgCmqLzYrC5n1bvn57qAJDVAvrQkjHHwdv2k7ZmJMH1ma8wJ4spnxk1",
  "key4": "AZPKvcFESscmizAvcVsXTF1w891suZkMubRKfwm9AdjG3t4tnyG6KJQrn1qnr32jHQPpHw5S32s9zkMUknf8JPg",
  "key5": "3chzP4Y8RF89Q8yCFSsAp3hRyeopcjUFZSd4J9Dz5ze7LLNMBqzqp6YLtD3apuar4dyE61vSCzrXH8eJoZx2eNMm",
  "key6": "3K1WPbDY2vRgcMwg8fniq5KcV4GerkuyUMZonjHAtJBZLDsh9h2M1xjkLaKpfAT18wCVbTvS2LxU6NxdXfZuZxAy",
  "key7": "27AwMmEVuKBtr9Zi9dX3jtuLms7QvrULPAW72YMoqAkB5b81khMrecpQiyP72zmtnTPt41qcRkLggPfcU1sLcN1V",
  "key8": "2DebBKxXP2tT5CodTm2jveRJMjUZuA8mvtmJyNNhvNw1NRZE4m9Z2FA8wEbpfTpWx2wFgUpGCRAUUbWLQoxeV9x8",
  "key9": "2FcCVUws4sETiBWNFcCJjE2PtoMMPonx4qaYHs6DbeNHNBbK3n689rTLdsjDZhKJ1BG4Abfxkyc91KbnC1NiTBSd",
  "key10": "25zwD4iKVcMaWErpM6Rm7ui6DAfwX5t3M75BD5mapiwnzCRDuUYWZS3FjUBcoAPjkCQs8eRL3EbFS1WFUpnGSZSm",
  "key11": "5aKqojb5en18Nut7vcgKCirxCTnnPMfD8yLTyG9AJxDK8szCFUEkLFE55RVWFaDuaAcj98PizgaBvX78h6AX315u",
  "key12": "RR1tv86B4id8fJV2AKMwmn8wD9SPp9Zmt7K7s5v2rLLErTV7Fb5vuxf3kzQqfUhscXHeJbWvsXoGRarrsh5iTuC",
  "key13": "3SkqkMWvGgF1aTuofzuHfwmP4af4uRVFpBHHa3wVR8yFN91aVNYdMVhXn4mgA9DMPDJCTfhJ2pP7n8UYHV6bkxJ2",
  "key14": "2VbrJVvMbLWmHW484M4gJgyM7vAsjikKvgVeXuansfEg5S7VtfC9meiezkUNNzNAHE6RWC99r3ecYtSZPG5E9g8g",
  "key15": "5Uinx35E3XWkfCFVko4LDnMYeY5CYnVUXpPLeLn2xaLRC4VTVA6szGpiSiTqFWLWatTxKLnrErMYwNpJ43HCFkBw",
  "key16": "5hNRULCwjHX4r2zvSbyXZoRUYQqk6i4JP7V2SzAEr9JZXkoRzjf1v87bVDaLf3Z6Le52GTPy59cBKGjznPAARrm8",
  "key17": "4dL4xQdgMGc8BRFj1BX5a8VUNBxjCD3HPsYj7BVDSHFxoMYZZFwYiUftHFxemDqr6N4DHS6r8zvXav36jEbK9nzg",
  "key18": "4BKPWKqUys6XmDQnxhh9A4JHMGU1C3YVMB1cb8XQvnXsarQGpzv9JXL2cMJSCQG2da7Qb6LSvweCxWzPVPmBqLzG",
  "key19": "4bruPZJvDeF13cxyiC4VDjGwBKpHkdUTHySCgwMQjdF3CQxbByJjSHF77dm2MMgCzyJJr3WnnRs2jrWcmEdYDNxB",
  "key20": "3xtUA3JaDEbJLjDWSDHBaAAGDYU5bnCvTkQLmrFo8dhK3SWwkUyUsBKTzr3BBKMwzeDXesex2bxyC7faGFhC4YbW",
  "key21": "ZADtXhShkDiF6e1hnCEufq6qcLDKwh4L71YFtA7HsMtfNMPwQh58qD7KkA1HZALCTLNkqhrPRQ2eDJUxr9byM2x",
  "key22": "3WWNxa5MvN2DZjjctYZQFoA8n7B5ASNJhP74ofk78xfVVYMT7wj1RVt9jPSCPZGGd7KwdymsJGziRBwUGGYj4ibS",
  "key23": "5DVv4q9A4QFRHU3D4178mo2cU45GeHE1KDX734E3gC98sXHKtzY59NM4RAG97eQqYC6KNRkDA1Zacae6zSke5cyF",
  "key24": "JHNLEiEHNb2fuFRELUJyzUu1Df6f6pabXvxGLg9GTJtDTob1WQPpJEwqCuPy9pZcJa7wAUggtbqA2XsS7kjvvAa",
  "key25": "33539L6cQqxioJoLarDTg1iANsFvfFhE2kbxE4ztnr83aP98sbeurp3x4JZZixDB83Y8uyba2wGSjf2NYXmWgATg",
  "key26": "47bYGLHED1vaMFwF2PSAa48i1mnSDrmJDK2KB7MhKZtEsJgrGsmzmxgwyTVuyPaDcC54mqDY7kbTGFkzf5vmaAd9",
  "key27": "5rJAjUZr3hvgW8a123kiMLzQn8oBbK7bqGaZ8UhtcezvEPCrrnSdc2pQGhmhGygPzvkmi653x9tFc9SRyHY5e5Jb"
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
