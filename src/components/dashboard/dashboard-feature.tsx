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
    "4UBd94bvBtUu3HTMXuVn1whXQEsVsFUJe1Zzba2NPE6PjEwdZM3dXDUkTzVEqQQCHiTBz6bku2N2RkeSTZKoeJ31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QYkk1rszPdV7TBtiMxXb4aEGU5JPLCRfZB7caJ2wBwS8Uto1dLRNCSgGJ75yxpdfsVF8vbrpNEyRYtgiZ3ZtFX5",
  "key1": "2LZCTmqLN6KUZtw3Bc1PpXXLGi9fKQR8EsxHgnPm212fyPDKRYeyTRAiJtdVQtnio2k8GckoPvHimMq9x4H3BPA2",
  "key2": "26BZ5KcE3yEcLTHEGNKcJ5gbS2ve87zX4dywyySoMZAG6QqfrAe5xcTTuq357gUPPYNoA1mGWrLrYQfREPh83AvH",
  "key3": "5oX2J5Bo9r2tn6yBNuWFmqFDfBrDrioB9rRt5YW1QhVZoFjNbkUBZtoPqADCTjpJyF94kfd8spAU7Xbny5AkJhiq",
  "key4": "3J19oV1Kjhv7zda8ArZoC4owpo8GgvPcYDCVcRkzBUzBBNy4G1yLpWmv9vVWyHdNcvpygnFYV8nLxNfLBjF5mgRf",
  "key5": "2RcELpzV89y1DDgGXruDZwB7aXV1mvmrP3ejsqsenSJuQJdWa16zWoz5UCpFX8JANh4qLqFK87V2QwFuWg9cE4zM",
  "key6": "4ZbuRD9yBjgD9vHHDfNLakAKtUKQKtSaPNzk9kiDKprDafHqSTgDUXhGcgHw1Tnz7MEqQLKo1AURnFBNFCQjihRW",
  "key7": "4TtJe7wwnpiospy9EMvkHafRMxLosXywqVe4dPztuynjpkAJMeV6vqJU48kEK2NbSaL8d4SQ8BrxnGrFHkvH6m6M",
  "key8": "36VpgmXpcQMppoPXyNdCRpRiJGPZKfRpvL2rbGH6cRuxxToZwRafFvMPct7C88hBqcxFHQtvR8zrbUDghoqXkYBS",
  "key9": "42qC499vQhJchdy46w5MjUFYTcvrDPiK6RSXEmHrxEu918rEd3vmzee91Z8CXvhNjBEfVu3THDfwH9sFFUJWNQCs",
  "key10": "4ivScKiAvHFh4tQQoXxQzMFFiTSHej5ZJ3Lgyq5Q2tUbGxvZXX6i5ZMGz4V1qFk3rNBZn4mwU7dgnVrnFGxVbCTN",
  "key11": "WPqSD9spYZtiDRmnKuRt6mKAzFGRZ3b1DcJoPUzHW66iLdkBcEjBuJqLKbXqhZbybTF1PEyArothpSNfUvx6bxD",
  "key12": "4joGW3zRNVeu7Xzwsq5iFCWNfnF6vo3tjhjEhoBf9scTTjYDXEMEiGCJedoRvxULGSfT8mWYycd63X5FjWqUJjD6",
  "key13": "34bMsJrgyv1zwbaDnhmULoTwcbJqfHtRbpr3CZCCwZNnsKGN28a892eSQXKDd5AGFqQXvnrgxToNMab9TkbQQm8R",
  "key14": "2BbnjEJSBgy8N7m1Crd2hmZHdo7zYjwNsjA77HNaQ8TbkrvXk5U3YbAcouLKmYxUXYTNyGqbAeL7NQwwUbLbwwLz",
  "key15": "53k1SsX9CoLoiRJFrjx96vNgzZDnzgyVBobnf2CXRF6LKAY5qwks3rnaut1wLzZnLx2VvN86DcKZ4jjAp9cKEZW2",
  "key16": "zTqzWcXzCWiCtvCFLZz45FBgdjMh5PLcNoHhm1aDPxQ7KZ7PvHTE5dHBs6kP23AeYicY2Evnp5aTcwuD8uPfMgu",
  "key17": "5rBoQmzrjzTNAPT2w78SFgBwVHHxuaG9pd529fen1BnNZCb1yfdyxvC9JQ28X5hUsMM2FNFGRj1JT8mrN8HpHpyz",
  "key18": "31CrfVPKVYN7jP8KeXWFT73Fje86GyLWNwRrQHRStsMvKjcQauA1Px7KtoRqScrvezRweeoxNMbZZ16YP58ckj78",
  "key19": "3JMt4HzqVEJ2dnSFhpN6YxTTGApQ91uTUMGiPf3S8J8t9M2EL9pdjULVAvKJHDZZn14kV4QeuTVZEqgwZAdj5WY4",
  "key20": "3zqLouCTrbTmnq1n7PZvdHaRWzY647vqfHgPbTYNuRgnp64Y3PgXjZypNEXsi4ipp6dF4iHdBC8uAR2ABw6oxbja",
  "key21": "3zAJ1KxDsH6di9RaCTPiYPecBDtujKNeUyo1NXhyq9NMkscdxi7ucng92L7wmFqZALfhSpuoBH24WBW9ELEUsHsW",
  "key22": "4gQMoUCE3ev7vE8soA4VxLXa9qj8oeFon1FuaKdD87ijkJUreeburqqZgjRejnb2bhJkw4Jsyz9i58sUtFjuQLEu",
  "key23": "SxvguaJirRwadCEL1uGJdgsUF4pv547cPnRBvETxMyuTCSJaHGDdoWn2wvzHesmGPcowr4ohtiC87WewoDjGnbA",
  "key24": "5H9j7Fup5Ee8T9j2V27gVRxevnHsu4YbLL5TyQBhnP1JtdfnNphdEibBD5VXVYnrWxnotvpNBocMN3a4SH59pkyB",
  "key25": "34NiEARYsCPMPcUmkZLQntWQPAP99TpLpKgyoF4nMCB7JybKHFWTVeNeonikz6zL9Zj37GbCqkBLgHt2Rx6pjwdr",
  "key26": "5RcH4jSwZB7rwdLwhrhGsNtAqz1P2qdXseEFL23w7bpQXKtAe7Kww8uPmNMDFwaLg724dkwNa21uDnM5HZJ6fY4a",
  "key27": "5DmmVtA4ib8qtuKhdPcQftJNKbQ5smuq9upY72cfEqZq7HuQeVCL4PBtHrDytMrzCZodj1LEu77uH6Rr7qKweiXG",
  "key28": "8wasU3C5VQJtq1hwyYsQwkJskLYuPQPVL5xqNYktMpDAwW6MMGvHdWGPAEWP4BUNfQTnNCqYVpKbunEMXU5GnL6",
  "key29": "3WDFGg2FFjjNkKSwFDGhTnhBYwC48tagsj25yG8jGxQoZn3MLg1Rpe35dggsVY6gydh1tNVqdHpWxtxzVcyYF92c",
  "key30": "5fhxvWjAZsbrPW8t7JGrQJzx7oxSij8NNGKrnHQCPmfCgKonznHZpLBhDDCVJAMjN78EeSEpNKvKeUd4HE2mUotz",
  "key31": "5YgD4s7GigvH1A3A7HQArJB6yeh64fU8eHfab5NGfvxKqVmcefzbj2EdgGFQZBeNtVUZThhnZDSQCWL5iT4wbTw3",
  "key32": "2m57ory11LpdhbRoQTqqtNR62mtKYgAD584AErxgLdXyQHgoVn5JMMxnVcVtbJEuYNfxNSnV9hqirSPnzjvZPWHJ",
  "key33": "54Eyjv2WwGQacZe62X3nH1pYK7aDahuuD3rhJJZbr7hHXSVZ1HUoARAmzn7a3KikyXfHSfGLGPkDsrAAvBgFNqFS",
  "key34": "qZtuDWMGTJEJXMjb1UL3GcbGfYEKENHhXuXbiwipRAUxdRC3U2BkKvAAiPDGCRicm6b9WM1ujF98qWyfCn5a8mH",
  "key35": "4QZjWSouFqks2WAz6rvmbtzX4Ukoxd5RWunwcModWHoPqpAbnt9qp2Nh833Rgn8R7o7UfbvS5D5N5cRScxahP3zw",
  "key36": "5woZj9XYhHC9PNmATAhe7T9cRi6KqdgqFyaYWKTw5Sa3fCG5KEtJUR6PJyhf1eoaWavDnWyYidzcLddkQLAU83mS"
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
