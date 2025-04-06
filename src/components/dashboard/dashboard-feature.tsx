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
    "4ZeH6xi3vLmRV742RXhzkLrGLBnKxqwJBSDdsc6CBnSMDKcPp7w7Xdi9PYhkrruRXTqnWsk1x1riJSyDnfBPGsB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V1onDGy81nj1BdWUUSZz3v2SxFaioL8CJfoowPuE7UcLAETHiaWZXgrfw35VFF96SAYfMtukBtnfURovc7rDqNM",
  "key1": "53KUy7m1ZfhPqye3danw5NWBLftBYmKuGGMqgZs1awnFvjvPTuzAJqN4iwNLq6qZr6Cx6AaeZDcZ4EK1q6DvUGsT",
  "key2": "3CcLwNZ5nZaa8h7e53R38cnA3GLdxtn8KaLLHeSsJsj4nHEgwzKmKTNCntF7GnhpeWDAdFge79HKxT3MR8DWipdg",
  "key3": "5Xzo6JQWBzkWnscvXgE3be4GQHsHYpg2MbN4PLt67TQAcrmoWpyFPLjUziruLNcM6TiVcrFdt9P7zCAbv2dQHQy2",
  "key4": "BuhV8kW4gXh57ThqRJs3fVLYTQyAoFinPoA1WYQjLrEJcB9esj4TEYZb6LRUK8XMTENDSWZ8YazP3YMAdtf4Ten",
  "key5": "5hhjS2FgLTKKfL7cswbryfRZ9mHgGC6kPozDJqqQScb1TYmdYu37JBPW5e1pRoCjNYQremZnjYZvRty2W2AAafm6",
  "key6": "59gHKNeXwsyJtndwr8FESjbmLCh7cHSYkGpKFYyS1MuM4e9xhEgqRkqihAn6bG3f8Y8jS8q6o5uEeHtStvqb6KNr",
  "key7": "xnEyGAeBEvZ1P8BDF17LzHHwarfWoakC4aJrN5pV9kQqPg8Gir9SxQwW1Ab83HTzspsKk14Y998NnApbsvZdYUX",
  "key8": "3JmkQJLZtBPHGyrPxDmBmftU45YNYXNEzQcrwB1Uztdjk2Sa1DViq5vvWFVKQHLajiQS9iVMBeqUeiyrEnBNPyZk",
  "key9": "3rW2LLkwgGTdx94wfpHqn4mwTGSPhmwZjfPi8cWrZXNDCMwi2mg7HgommhCWzwPa6SsHkxwkAvPqNexMYa2ASxT7",
  "key10": "5jnCuZDfNhDLYDFQR9HzBmMcPtAK27d6r7jnG9Yc9PTKiZWF35QbFrKqkKTdRJjjS86abfAxDDuyuvh4kMahe7f3",
  "key11": "z6znhYuJFMrGaUaD6k1sM9MJkSSSNNNqCwdBBCCYK87vHUJSd8mBpoWqruxnLwBGQ7qEixb3D54ppCdsAQHFeyC",
  "key12": "2hf1wyg5kJHyRJVTqW5UXdDXe4WGnWpqexayij6RGw6b4uskzHJhkqjZjaJB8q9upQMEPt6637QGNqWKUSP5URXD",
  "key13": "2GP2iak9r4RxoN9qAU8gyNEb52y6vsT8ueTR3i596KfUvDFM7NXRcKgft773rEiiqjDkjckuhNcrStXueLgnLdiY",
  "key14": "4Qj9ytPJuHR2cTKd3EWhn5JeTEx3N4SVU55nRqaw2wTMNwFuNV5c9tJpqNkgC2yUsKuAwBTReDaWyJNyhCqDhNTN",
  "key15": "2VpjUYUJZB1f8etXJJufYKCBVdsraw8L2nM9QYJavcCHetqAHdYPLG2mzJ9EzVtaWU5ZgjLdit5FzhMBHt7stz6j",
  "key16": "TqMcbeZRZcVFFFtG9svT37tcQPrdqxNwfPzP1FrC9K1MnTuaeqqfSvV3thcjasHjYiJ1BW3a3AaQsrDsmkgg12H",
  "key17": "4Sg6ERWNCDwMb5C4bwEuhmhwUkjDFyrckLrkbTv9GVejVZQX2YY7suvoURT9EYZJFhhvMCpv9iWnRVobAfsjhFU7",
  "key18": "4nwgfbhQZyctyy4AqzKb1jisSYst8m6MJybCwcUaxFpDRyUrUAeECLHQhmr2rGRLMhDR3kXcCvKq5pakoPpxMS5E",
  "key19": "64u6HHEjGFqXEWnE4NkJeUDWWNBUdQZJK3skxXDHy6pitpWSr1N4zmvxy285svkZQtCHcHdVoyuAgXmRbnj7g1ia",
  "key20": "2PGRy4VbW1qNpc4b3KijUkPyDH7w8aJrz56PQGhPUWp3s56XsFbhqZXMk31HiYzwRv1XGzZSCwS9SvEtbdVKXtEB",
  "key21": "2KotBS9vEu3RPQLugwMVHHmSCh3vvdE4gtjgsFNcUY2sVRe6qkWqowvoYQ2x4rj6iSivRzRriVHpMigGsjoVrWHf",
  "key22": "36wPa6rbKWuq65mPYRg8f5aLtbFnnsGX2mdhqVGvQNnoX7i78u8MimxwozAqcZzpsyDa9AQiAWznzACpfSaFC5La",
  "key23": "4r6xQAAV7dd61P84BqFwcJbau1yrdpqUMKz5xg63CMCktrRTUtYcFEwJdR4w375WuSJrvxSoqjhEudNrgH3heuZQ",
  "key24": "3qXYU5fuKZi5RyzpfnFpBxQdgh91eXvV95cqp7ubYvzrpPdskTDukwUFzYYChgR4wKpfxbwhHc81Bs5uM6WirjGi",
  "key25": "53nFRhD7JYCXEEnWApXMqKq28Kx8X3JBJbC1zCKAk9VhNZYejaGTG53yRZU388BBK6ByWX3vcEtQx74rQHC5QSNZ",
  "key26": "5z77QeeGKvD4Z7nnXGT4fWB1QX8QTZbR97oej3Hj4g7vVDVKX99mPfS1Rp314A6763kLJTXxmcQW7vCusf3oMAbB",
  "key27": "3a2ezwisvEpcv6WEsQrPMcxQtRzxwUwvWEvbdiT6V296v92CQqKtrzLJhmbLr4xD3wtmwkFke53CVm2ovRqUJ582",
  "key28": "4uUcg6zFEVPdR9NNFEHM15UVcGkmxi2FbwQHxJghcHL8qmuQLKAk9VtrEzxadoTGUPAH3z3ooGy3KhsioamDQq2j",
  "key29": "5vKc48rHBtcaWhrqBmG2H3fasetGYYEfC5N5S2KzFCDCBxoYnrcuzSFAeFapn7LTsismG6TU7WzcCdxSu3EiGRE8",
  "key30": "5XPEtf4QsGvwaUcab4uZUzpb1mRcHTmGX2atbBLcAKWTjzN7Pj2x4pzoG22jcaZ6krVsV6LYPHFSs8FaxCXyPWps",
  "key31": "3BKAyngrXwytNQLEbjqc9EpHNsLUcPxnhRVyA1QByazyaRCgg59QgsCqx3JbW5dwm9NkRLQSqrrrTkiVLgPj8nUW",
  "key32": "4iCr8uoiJtJ9c15EEAjMTrYEm6go5mFS5kXDgENUWGHrvd1BUpMdHh8CKPoALNpxUciy1oHtbgiTuWW15tSJzHvA",
  "key33": "5e1aKWFamjP4cGpQJuNoawLHUAXZS7jk7G5scDnV8BRxGQZVMc1zxbWr3N7dibk73SCPQYRaPaP5uedG3wwMQFw5",
  "key34": "aeRKW6tau64jrzPDVyPA2TdhJj29gSVQLeUQKaNi3FQ4K5sxGQ48zH39BMcgEgjuuZi5QNQuQ7Thip2yX5KKbgf",
  "key35": "DsGxPJpQNHQG3Ld7bk9aeJrMDdDgVsoveywuUGpAXtmBmjgMuEMy8xNxP5Zy88N3gKcWUVGM1AhQGNRTA6bE568",
  "key36": "471VAsqzpD3QPJNyjBz6mChnng74JDXnD4qhocADG7CNVKwFT1K447Qz8RyWGH8tPhe8B1jg3LMVz48q9wQ155pd",
  "key37": "gSCnE2HRrzHxXcKNr8GEtxbGRhMoyu23maeZTwVPzXn4xhoy6SgYV1NoKGVpzP3zdjsQw4SBURmEmHzPCydC91S",
  "key38": "5MGWYYxEYRRaZAqdmRKfTEk6f5CELD4qmP4owCWHpmnEWdoRSFycjigfTLfPycGGjL2hgR2AK2eYzyTa2yYe2zgj"
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
