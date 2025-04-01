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
    "5ViHUdpvFwuTsvcFeBpZZ6eZhMuQdoyzdw3B6Z42osHFwiZWE2Zp8WDaq5kKFVeD4fwv8oGVecJJMNJZswH3saeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FM78NneLBKZ4nejydbfZPG3Fmr8bJMN5jzjLd58SvRDQ4epw16zMe6kskHtjAi2oB3o2HncWrJh6vDvLif9qJoR",
  "key1": "WDAwUdKifMwLjDNGrGn5HsR3Bb3wQf31463Myd6Jr3sS7Yuvx96LRuAw8GXMLXsTPKY3qzLkVyL5ao85DgbAosi",
  "key2": "2wD2mPYCG9reEinQXpXEdTzuL5jfEbSnz5zG3v7GugKtCpQZwHvNoThwBbwh9LzL9sPUQYwuJ2E8kJnkT1a589by",
  "key3": "55aU2nLmYcw54vaoRVT67zXrV12ZmRsmNxqUSQ2PSAPBBnBVZVMpmeBnUYa25dArvaesDqkcQQXzonZorBmZLQRM",
  "key4": "5zZU2a3DBCgXwK4izJ1rDbqcTGGY853a7JbBjudcbxGhZwRxYUNrtkQEeqnhPk3ipfQsvEpyVWRgABC8GDB5L1z2",
  "key5": "4VnmdefWSsy84XsYsYos8pjphiBoj5tk775mdD3VgrmPayAhCfXHYf8fFX6cfJemjubTHRgwP6cYDsVwS3g1NCKy",
  "key6": "5ehK49ndZp3tNhLQrcKbWUgYD4pdXXihqudHaadtFRXPXmR8sunD1anjM688ZJbMK7cvUT2Ssga4iPpW6njP34UL",
  "key7": "4U5A9txP7RGE8yobm6tgnumBui5JSB2ZEa2AH1bQTuau6ZSoGY1aee3YpYNgaff364DcpBrtDqubreNiavEyrwZi",
  "key8": "372gFPNwpBJHPn6U15TNDAXRqW3g8H5mbexnfvXwVRcYwEWUQ4ydvySRXd12LRncmDD2H3VeRDgrTXKTxXgHYpXw",
  "key9": "5PbuMdpJMvxWwdPTJnBYzXuQCik622uD4vxFabYqpSXSj67NjsTTZx87xAohfjGaHVwUAJ997X1KhVMcNWAap2xc",
  "key10": "XvDj6Pe5iSVoTrsXSC6KizkiAuVELLhGC7wrEJJs5NL8u2xxDpts3av62wjX1VPcYnb8FsJrvkREyNM5PEi778g",
  "key11": "4sib6NaPkUW71ynum8Vnv1o2rdF8wCpzHFtTtoPqqzaL93LdjJHxNqr4q6kUodrpDZGR2kabptabXwtam7jX6D5Q",
  "key12": "2jeFyhb7mc7K2dFhbfuptM3PEaZFVdCFyMjTHiizQAv8PC8Dw8mLwaornvzDLEGctwEWt6YbHtyKyH9xLQwHr5Ai",
  "key13": "5rTKyVFqGH2687eyybvWo9AXaStYgXz9uxekpBJP8DUQ4gSvCSPJ75PbPQdjxeKMJrdnkbsFnyHcPZXh29TFWR5L",
  "key14": "5kuTfRpjdY1EJXngyZn5xdJgrL22fkLupfE6Sdeby3iKAt7b8brdhDtvDH7p1w9T9g77ymUwdUWUFB29QAhLv3K2",
  "key15": "qWf2C6W5QXxz8CEKgXcWGTwHN2tyMqcV8yVXE7Qm5yvPKAp6HGJTTJ7L4kFJRAMFeP4PtiBPmGALt73edCmofob",
  "key16": "57tT5uLQTgKP14QmZbWVWExbrFJ6oW5ro2aLXLfeyYuK3MUNbcuMKuNCft3ZaziGduyMMDCimLDzhYXcqVM6PwrP",
  "key17": "3sqXnWDMzEuRkudmUarzMfiDfbee1fMNjAtGfdCB7riLt3Z9imk9SEaotjZ78B6AteLEAenzLWYku7NdxGMyvfR1",
  "key18": "48YKv1EYnP45YxKHQe8YZ3gWU6k1fshFpvux2TPJPsuSz7k4HxhUYuP3hFTMSu7ws7Rg9GW4dK816Lq84aUUGY7r",
  "key19": "2ZEve8qXP75GVuSMnbVXvF5K6oRxakfQGABYmX3FvoF6GRgZ83e2d4AsvfdTDBUB45os3eUQaCEWYGQGyhQQr61P",
  "key20": "3PabnsTsXDrDzsbJ1CAx8iatS4Z1yicaReytnW4CMkvq78657M9V3uDntiC2ANg7YopZR9nv5BzZovW6r73hbZkB",
  "key21": "4PLEoVXwTdrTnqczYkEj7gcrBLQVcY8pD8sehsbC1hn989wGN1Cp6AdcPjaeNrQf484JkkYHjwyLVJL3DDYt82Z6",
  "key22": "5gXySEwAkGUtqgamxK6tLQyqgZyymTdQ28a6aZDDwfdb1fEZNd2W29vZiCcRnyiK5LuctVwE5bihEUgAPAHSSsjQ",
  "key23": "4UfxVEF5PNHZ3impHJ7gqdQKxaj95zmbZ3DyQjX8fbu5pwHPHQoYjZrWUM8PVA8the96JnnC7ybnFGNUEMc6p9ND",
  "key24": "5JhJ5RA69B9kXnh9fauRQj8p1KwE56ZugbkgAMSqr74DSH8Q8bxNu11dfcNiUH7X8c739CX7ofEQLxiofnNvmUsd",
  "key25": "2MMkmiTbLPQ33gUzEWLpD4rLe74HoHKbgoVpQvhtZooaLaXikb8Q7GFjQvtu69Sb5hZfC2QpMcdkD4DsVcRbKF2u"
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
