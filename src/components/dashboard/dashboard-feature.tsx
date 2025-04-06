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
    "zUR8yYGhqa5CqYDNuemy8xVmXF5beBfSyEgCmWqiGUPRVwyvfzyJWovnh8hp71WxGkEerPDmjVBaRSXCJeU8maS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pz9D1Jgtgd2bt2ehVpKtg1UgjHjmv4Gy4EHQP2rVqHoxGepimkgk7hB64fB9zwA76z2xAeYGBEgYYEqVbEuQwCq",
  "key1": "4HQ6Lf7AN78g8AFF3mXJZHbiaHYYtUwK2R4gCXPiSXr12T97hXPA3vSF7XEUjWfZWztFnBcMouaVBFfDeAA9iD5n",
  "key2": "24A8JyyRX1reTSXF375L2SKScMXSscV2NAQSx98GcbYDiPPnJy2d4HHs7VWBNuL9PBPAVAZ9vLrtq9dnxDtchBV7",
  "key3": "23AkzJgChMRnU83xBSvFJysHR9vt3yYnKD7Au543WeGwhJMmfAN9o2z6fX1YoQsZGBGtP9xZKWXxQckxt89kcjVN",
  "key4": "AGqbPX8sFfiA7LcqhoF2kLq8kAPLi1FNo89vLCrdSJTGkeFmvCEy5RWuuExC6cFQtigZSyqQF5E4jDJzSU854c5",
  "key5": "2b5anJZkGwSQMSVXHmChPWYpeLc4KBHPxo7uMzWkRVvwGzJni48AQBZVzKY6wWzJcjsPKdhWDs7XLLk1ife7d9fa",
  "key6": "396Fmy4Xrd2qeT2fVCsTcBJKQbG536Tpwct9Vzy18MfVqvfFB53PFfq2UhnJxjyp9KdThosJEf7bBiZzbbGDJeWp",
  "key7": "2f6FH78Gwdq4Ber9TQxvcf5HttpB2KtRisZuEWDRmKPEPU8AWrWXdroY3HT48nhBTAoCUBYwBkMxzgVHc3QmY8im",
  "key8": "5UdVMfDmwu1UbkEn6ohh4PkhGHgmH2Sf4UbacDXWHt8RvFnPZNMC3XuPpp27txejoHUtUYWy83CUonNviZJfgFrW",
  "key9": "VAhgXPxnew6GaCsDnFejrDmWd3UZPjzkQQEEukaFiRrun6ArxWDqc39rrEkkzzviBAK5tWXbk49Ak5cc3STGRSJ",
  "key10": "43rLZ4REQT18ZnUfgPTbrQNTLij88XuHzEzAei4E3DnmBM49ASuTFFcVAsGgjujXRs3EMQchm4MhoMVZ5XqmwnoW",
  "key11": "4ykHSMsFxCRpaRzJM74RVrUS3aoDfjdpJi1o6Q1Y65GhQ1kfd16bD7yXz71TpQ3zv8CLcFxRykHWNuKLfkXfpJ1x",
  "key12": "5iPFbUYyFjGyxyMy86cQ8YCANdC7epWZV2ZoYN1FytWWuA4zbDKuRxeafwCBmacSZPwV3BWMBM1rzzgR9AAEfDZS",
  "key13": "3xMiTCMJgVgMMjQ35xQeTRE6TAn9QBxUS17nqPvU2LeRFXT9upxnoqjz6q4M7bo4bdqdzbdeRaAS6wjehzH6fGF7",
  "key14": "43Q5nU2ZSsHHjtmws4PuoKTLMKZ4KdNRgHmYJ1xz4NxvLsXReVdgy66PyZn1UvXgyjbQFDqqjTgjqT1mhoZu9HeL",
  "key15": "ArA1KppCJ2CVqmdAgrGqoDDLXXvvY3b79Gbua1ohu5EmqzokYwkHY25tHJYHquYFJJJLfM2Zraxrr6bFKbwqTKA",
  "key16": "3dPEZkur4qSGHWg8mPnntS6dPRx8VFr79QvWiEQ3KpPKhdKofDQcnZGcDss8XWSJn2JyzQUpT5T4q7nZaGoN53qn",
  "key17": "2A7DgSd2pZT2ME11TQppJQdhtsAm771WSeXfanyZnaCeWEKjfDp49nT9fQRbVeoXfeCXgqJoZoWzwUuVZeSM8sKT",
  "key18": "53TpcgHEbDGcDdgHkepdtyKrBaSfpervXoisfJJDEUoAo3eesMbhCC7ugHep4iZJvDbaKCApNFAeD24JFufB8DyH",
  "key19": "5r269c19tZsNzekgajsrGYPj6U9ZdFQQ1KUgvXWcVTLkdT5vwHfUWQkxKFgHUmXBH83S38bLYL4KG4Gy4ZECXP2j",
  "key20": "35bzUYGk4sAzUZkhNMfu6GNLhfvdg1tRfQtKaLfvzMBAKLp8tCfo3XiiL39DUPb94B4c5EWodTgcbrwYVtJCUuJ1",
  "key21": "61sGhrmgU2BKQLbcJeAUfBGrB3sWm16z1Zu3118p6CztNkPV9wcPKNzseNbk9f4FSsQjHfKn6hqcu494YGQUuRXQ",
  "key22": "4XRnDiVNFjWe4FrNLoBNYJG2oYGYCQPmyUcgjJoSs6q11nkjSWbtUgcpsLGjN9r3gCwmw6d2eQFdVVeaDykUUVnp",
  "key23": "5qsKyc7fN5kd7yNt8LSRo7wxDg6qDkmpca1cWJz16J9biWEVyCWPTJauKSxjs4BW5k8CgmWrWkwRYfQXfmukJFHe",
  "key24": "2eqYGSs7aC6jr921FB7D7kT6n9ZQRE9oaV17HFWrJafbFXmyz3iqvjB9x9bBnsSuWy4kX9crrkUeJkJi8E8v56AQ",
  "key25": "KoVjWKcFCqY2PgUYF8byqPcJEsFbid5yX2XXn4Ededn417mHFePLtd9m9iihBYNpcXupne99sDENm78doauzSjB",
  "key26": "53PLSBNf6Gonb2Cn9CJnUuPMiU3xnKwpAV55heHqRhBc5KSy35JyB4VetbPyeavngxxg2JTmt3DfgsdN52ZyxtTr",
  "key27": "2xTs1L4SCanaqfnaUt1HP5M9oCLf9myeg7JiRxPfo6E9sfq37mcLJLvQLKdbTRWRjrDo594mys4oeMevEkSGc3VR"
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
