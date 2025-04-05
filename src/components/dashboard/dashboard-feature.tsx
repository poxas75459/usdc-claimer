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
    "YBv5DP9jZWJFp1uX8Gprnd2eWRegGhL4eSWy2NdNNJYovFsf5LRBTwk6XCFwzALXzR3sQU9uDsR7BVTSEvnYTnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GuJDT1hxkfLdow7DnVSYuA4RMarTTVoG97cJcVNM9fJcaCpRLnVJoV2Az8UeuofJxv1QtsuxjMujnTnzpA2dY69",
  "key1": "3wHo4b2FgLfZ1Bffk6xvr9cXu8w2VARQwasYYpSK1o7sudSPqNjePdhAP4Wgcfb3qXrN2rZxSqTsgacayHk3uR5N",
  "key2": "5N3zAiWijEJdGHJewQh6MydoEctG4MDrVQxy1dKgtCjqC8CS4MEu6rH98X4ZUAJbp5JPMc5miCwJ3mDNoQ45yemG",
  "key3": "2Fgn8nBUkKEQgxkC53KQmFdSdBGR9XHh3XNH2Ara8oxkYXsvJDzDCeBAp7JmjgiLbDXHKWrpDY9DtDPmdfBbPeHN",
  "key4": "4NLnbJego33sjgjo4kswz185cRMLu689DLqYBS5bLjTah7PXjQhJnQTAVpcLyiPQHspMJjkHJMbN1RoNJSbd29MW",
  "key5": "3cqGFhCDbVoc2apwJiFAYbwYNMtA7EzetPCgbnw7imLJmdjsVqwtvWganUPU3nC4x44iMHrpKrEL5r5k5GczKtSZ",
  "key6": "4NrFFwbXLY3ijgVRKFDjDCjgzYZDcB4nfmrsnQ64PgqE1pd96MWvSPBpc7hrqLqywnw5RXBNyCqbqQpAonj1A6b7",
  "key7": "4EmvUyJMAQVHGXsYZbfdXfFnVbiCEvftmgvu6fd1EQoRWMCquiza4Q2T7BrgfbneDHEpCKEXw24TLHxhTUUREx6C",
  "key8": "5aSjcR3nitaTLxJonppAb84M6z1ijZZMA8qZvxBftwwJLqxQCKNZzEz8tv3G6wJ1C1dPXWSjQ6Zrgu5mK62KbnRh",
  "key9": "2AU2yRnocqQJC2XgMUVeryRGYbNs7vHVp1ZXcK31LZ8Su93HC8WQ7SDJoZ5Jwps4Fhup9UuE4hm8GgF8THq1MuQp",
  "key10": "4tvPKU2ecvXr1E32cKyigve3S2kNZiVp4ESNd2DUg67bm8t3nxkH8dD6FWutoBsMCZaj7wQUT6AEJ8XJbR8RXY1n",
  "key11": "K5ZfgeG4zBiKh9Mw8zwfZfoZoutyDndu2bzEX4nDTWtFL2QRLRTWgYkxWAJXN7hudHbQbFt436wTUjZC6Eh7txm",
  "key12": "5jj6BeYDUHYX1ndPwBhCkdXjqjrAqkEwb5jUDn2VwDY3x3WbUa1tVeKtzJetFZJC6PB5kp5MscLdPogpT2EE4hhL",
  "key13": "WPosxQHojgKuC9fva2VC8GL6GfLtmeLYSJeRDsDKz6s63hbDniSBz2bnpYYypAvhm4iZRL14Mx1oGp67hJw9mha",
  "key14": "2PurgR1CTm8PmRJFYcXfu8sEpZfBqf15evErUYbprhbQHiF2CnoMArVWfantSD4nxSGbvREUPGmcDMd9Cznrevhn",
  "key15": "5QLw8cC4vNU2XfKBHixoD4qjU9YCacCePMC1f8fnUyevsbRXv8GCKLakixMymJV54gCkBkGNDJG5KwbCmeqDKkc7",
  "key16": "4No2LeZ3kJoF1ctgTANbmgsWqmsPY9SykW8VTrmZRrBhs1yiQNVjs7TsoZEBNMKPpHxXB7mTt6RaKA7eHrRse5NF",
  "key17": "3YbT8gbNpoK5QNpTmtkUcgccTpV52k24sJqCYLrzP8anNJTxmv6VrFDZMtiu3LTcDRFAy26kyo1PKJuymYgfmjjf",
  "key18": "4FxdbcUhjQ2WSYimntXkDFU2LKc6Fe8CfgJg5eS6dxgPPLkZQpkmjHNdMwXSgmPV83JVW3K357yewZoLub4NZZkx",
  "key19": "5oPuWQFhZeYWVvDBDYG9fYHVNpuDBbxd7VCdQALBNDq1BE2BWP3gMatUqxj3MLQFdU2rouKUnNrR9rEEgJ4MwjPh",
  "key20": "NGY2KMD28HnnV6EHZjEjgRJ7T7cFYVXFefr1Ez6t2NovDR7bASp4wekrXcLam4L26q69KhGomJucNnK53DoyWC9",
  "key21": "3oJW9kLMMEFKbM988HRqQBitH3c2RTAuWweR9DaZYXLGhUsexaYwT5yxzKSXu476XjNZPbAjQGD4ZZd6Xw55VnbG",
  "key22": "4iJwaqSUcnGJ8v3otNZzWfgUJ3FZbgW49m2MuCP4iupkyLFt8wszeN6YHaUBt3zswM7rtfWUyX25oLS5RZatMEeL",
  "key23": "3WWXx2asnxUaaoyrKs2vXh36LBU8QGosxA9HRRX29Dzfc4645Pv7zAXPNCY88omZbC9Q9mX2ywZG62cN55RfeBtd",
  "key24": "5d8ZyFS39xd9qkRFrSc9cFFENRCGtT5YBeMHQGdCjjLqFcqi54w6qy5Ga8cyKw2rfAPibLYQtQua3HPkR6MUsZWy",
  "key25": "Rfqy9ztCqG3wbKjaq8FJDAkNEYTntFMjwVm8MTkqPZBpjMzCNBsJNr2vXs7m1JuXA4wF8hSmH7eSzhqGh7QVGaJ",
  "key26": "2FhjkZpgpXrvDWLXBCvyXerLy7rgH7cQm84LMtUoY6ABLe4JtUUhteZThz1NQeX6iBdQHaKTxur33T5qpuJmVKGj",
  "key27": "RGvY8qrSgMSstaKQeFzK6S1rQigtb96DViAyNrANzGHEpvwNRhcy7tpX1CYM1VzADYvcswgRJCFzFodUAQrJS5S",
  "key28": "3WZkfHffU9jGxMMVgWKA2PYVUS7NqR4TFWhqeJydy5wFPDMDZyrykEwnn6MzYfkXFCyhh56ApqbqLmYgBzBfH5FG",
  "key29": "4ioxQdKJiizur5VH8AJXz51NG7xHfob8ETUiG7K9TAnkJvf6d6Jww93acUANhki1yvxxf7QdiAT23v8kdgB8buWN",
  "key30": "4j6upCFttjGYQ4wAs69YtgxzUtuM4JbgQQBhbe73CXECRrNVnT6NgDyXznk8L7HmTvbXSCQNW588QJBHehG7FjWr",
  "key31": "5y2GcS4KtBxTEci6crnHnf6fsCky4FbyEcH4xYQtb1FfPdMfgsYi5yV8fBsf35aQfxhPkXehKVJdwWB7yZ3Za5W7",
  "key32": "itWPuanyE5AqoqJh2qTyPyUrqGW41CLWbmdGAMaxUPVKDPkoz48DnpN7WxPpKiZxj74qqxbsyYb9mHJ38GfPdMR",
  "key33": "4qhK1xzTt54nAkrHRxytKWMMG8ir76L8WdeCn5eB5XSMhfUjxTCdxrhLTDhEc6AuNFGnv3uoPRSVqMXWeARvT58j"
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
