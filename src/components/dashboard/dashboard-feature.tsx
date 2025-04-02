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
    "m8geWHDaNHdu1nxaEzq6sBFagwW9Em6roGH21Bkfdxvv7DQLigGaXTZ1KiK2YRVFoRm13o4GqiQe2NdFbUZ4XVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2EZMj5FBpfUjKJAWGoHAVapyXUQHMoZ4bsrzgedbvuh69Vn7r86TXJU9kMsJRgcSMpnVrZaHg2CuL3JyjHav7F",
  "key1": "2wRXX7AdcFBTFQztkCaJMSpNX5wXtc9RLem8ahfWKZ9fWEKvHeAPBCLkKujRtgbSGEFVmgFBMS1z6egvPVGbjAhP",
  "key2": "4WAfLR5u3KFvymScaJUvnovynnGnfpWAaVLVhgChfnrzzuWjTdrN9xBbVqxbF82HN2HjJTq6LMKALJ73jL7Xj1yF",
  "key3": "shN4JAXqecGU4tV89C79knrhcjufgBNo7TVuZnEdKDpSmkBrDjp5AWpkGD64UNH1BFYxAymTMZjEy5TWNF4fk8P",
  "key4": "5cQZQGGhhEX8ACMR4xm4EukoD47SpKCMPS6svDgkGeYwi6yXBPqWbGazakboWAUcSeDeaujvsfQ7dF9uzpyhGoMi",
  "key5": "4R4TVdd9JvTPdJ1w4i7kHH4Be8jrq47yKGs58qEgh5YSCQVSDb7YubPzWVA7aEjgsaLYWoq9AnSbe1x282nqezyw",
  "key6": "4CguNYhwRgDhshjUdT8f6HxLSpK3PYHTHfZPfgJHt8kpARwLENMTf7vSyCNiVChhqkSjE1N6DvKYZNr2XsKK9brH",
  "key7": "3KL5H4kGx1cbmvuY6GHpmE3PAoQidsZZp1gY76ZCnBpjWQaz69LWugLBmRRnqNgWfA1KDzvQr8z2uNMwdvwzPaa9",
  "key8": "6w913w6cGCSXhKrcCuEV6UJ9QPYnRmX45rGr6ZNcUUwPdS6Gy4qUdH23kqwr3KvV7dBgBnozK8QY115f2taVgyB",
  "key9": "J6urJqZuUh8DkKgnuVizpSMWYFvtV8dy2taDWYCGAgbnrvtf2ft9po1ErgjxSuUXZj15vMHz62Wpp7R6P4aZz67",
  "key10": "3eiF3q4Jz6QfQCJyeoqggNbfcP3dm7Hqx1SxqAv5D6rX4mXh1oKGa1N2PQnFBpeodyhTYeZUpDnJ8WYu8b3G2Vj7",
  "key11": "3FDAXDu5U7MGLk46ZEJrNL23c7masV1gybDUoevFYpG27Xs3iGBmPAFcKNgqRXsx7b9JcNhWoH4VTtWKiPLv34fi",
  "key12": "bphD8AmGGhm2Qsz6USuM84jvY1J5uQhtqUMhaC2z7jBh2LL1DLGebuwA2vnb3GfzvTZkbE3wJHa9dwfGazwNG2P",
  "key13": "29u7R2hL7L7vHAX5hQRjU95Wuo65Jn5SxSSP2vpUTyAG5v8wvjDdQ1QDgK6VTxZzbTgwa9PaQQLYRGLxyNyaYose",
  "key14": "TZEmRwAokVvZwjdo7Z8M6iY2KaTnbQLMCy9XjpVXPnD9uiCT2X8UQbAHcfHzWQRGqbQkmKUoyvPK25zYZpKipZd",
  "key15": "BDbgsU7om6jK19wzV8AFbAeuTtPF6tq7Z2Wc8LeRDqK1tMBGyaHWskxFkMULoSREbXyNJGA8uKf1UogTugZJwvs",
  "key16": "3tGjALBYyJDGEyYwaYrfzuNn6wuBX9FqE22hyfSP2Yz27HWCvNQnhMBcuVFZk2Eue1kVuV65zwXZyz4gnUH9w6j7",
  "key17": "2LQnYw31vVEcGrj8DGu1DEjAruEXgw9wcsRtbzuNdZvUjRDh3TP9yGpSSCgdp4YWp2iV4ZJ1oyTPWU78mPthGhKo",
  "key18": "zpob3bm9KX7P9wmjV5X9b929NXhsKknFmBSYMCsJ8ecBbD4dkGq1xXNUmq5TuGefLQuXcGY169va5pECRVN9nsW",
  "key19": "4WYdPxT1CZSKDNCtojraa3SWDZ6ijUdnVWGpXtvyxwxaQs5eZ56GMGFgEzZxCK19Lp35onJBjJ3bzc1KvWwYpPgH",
  "key20": "id9EHpZmXuoFPQ3T1UwcxGojyv5GjCwtVvkYiAqbLD6b395TyfntVCVcnvLwpLQk7Hju7XAfwoBRJPjQiEa9MmZ",
  "key21": "66fX1Fu8dmLQMBA4otWKZoFsRJX4qQmumSqh5pnox5duS5cFxfPpxJK2um6UpizdcSHVsxcttHCPjgcbABPbLP9H",
  "key22": "3LFppMKPJToc3suyuy2zTB26xStuVj1hZC4vKFewgDWhemHunHQR966Xkm8bS1aRyz8vRcHRZGCniDNCzS1ptjBi",
  "key23": "5wXkRzw6Xo5SpTdwpLz9U835phAqdwTALdHETGd63wwuadorhtCwjVAhin7NV2px3Kfvr5DGNaNs7sGF6P8Sqeyk",
  "key24": "7Jxk1r24ntu6kz5m4TwXFemLCQfw6MJzv7U21bHbQCyprbhmTdw8s8pPNnJUmh5Csz4mQn7MjDvSMLqJGiKtvAD",
  "key25": "LbiyiVZbQt4UEutNBKQ2QWiPsPKXTaS6C23eSYiRzBcq6r94ZfDRFsnyLj5iKrioH8P8aQC2JkrVtdGHv1vqGj5",
  "key26": "2i4EiG1nxmutdXYqqJTCid6WZAjv2ne6NhSHtmAWbvioPfgGSvCvDuW7rHpfD4Xhaj8LEoaxVgtHpibGdxe32krN",
  "key27": "24JGfcRqxXDejeQ7voXHjQpResf5cebBCi5mXoMrYybVhfHRfdNbTrcyjBfMNrKYZEKHtYwqFWPQ2fgTPNQm5CNZ"
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
