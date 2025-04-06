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
    "3QAHi4HbUKadVZS69ej1Bz5vX14wtiTGSunUn3tUqVzUQvfVrWL4L5BHhnEozDQCWHETZhH5MDYrgfCA4xHUaXAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xu4p2vcZGu3M6gaGkjWxPXELrPEgFGdzDcBmoPRoMx7Bb3R9mETwDaYSCZvNA5wD4C5fckXptvMVsJj5eLErRS3",
  "key1": "2htUZTrEGa9TE7cqyPcGvbG2Nm7phQKyDmyAqaLwLV1gs939Fwt4eQHTSMpH9aN2oZksMAVCndbw5xZzng5CZ3Qj",
  "key2": "fEPEjAdqnisbB8UHTc6cdyxuF4vjcF8mjeW4sS2wde44MYEQUi8XRwJMMQzk1ksxwzTieSh5e5st1KvJ2F2oBWV",
  "key3": "3uLZ4LLh5EAYAiJNYigEV5fiKAgezEorWjW4xToFLHpQdESUZiHDnRMCNcskxheaKFf6GQCfAEruaDSiK18kJ6AX",
  "key4": "3GRXE8QVxmSAcu8oCQSZ3Pnd3jdYUwLXdFcFFLEDEbwBRGCeqskW2kXLHzEztitvQ7xP4ZRC5gqTFcNGxRBfbMyD",
  "key5": "3eZXeX5p3gzrSL6Cgds9KQQcvcPSH2LrqPdUUCXhistEsdsxGSVQ7tTvFKdPZgGrXgkNmEcYEjpTDrf7wE4oMoqA",
  "key6": "5YbgD5pvJPuBKhTszQrKKgBM8n1U9pDbsXDw9yX9TddQ6KDqQvgbfer2VZteh2bUGvyXUA3Cad5NSxYqthWfrh8h",
  "key7": "35haTBzWCDa1FFiCzo4xVtVt1vwchDzghZaKLjRzTzT9faWMtP67F2zsdGP6KQsvnmXzhnDKLzm3SwR9yWC9suKK",
  "key8": "4CxpaNKEw17DzYi2LTGxbqTsK7P4Hfq36kLuCFLyVUpLM6s2dr4Mm1tNywp5L5R13MtjnvVkYtgx8iiR3nnBn11J",
  "key9": "2qDNMuZLsqQjWwCRXQoCkLKp1f1D56n1ieXRSfjUNGoRiirAxjEvMB3dDreUzM8ySjDSk1Sp1ZzfChTU2GbeShSS",
  "key10": "584vbwFVK8YMgxHSBxopkvD5vUcLBuqkrKfytnwJyQQTuAEnMQ9eEL7hBrSB2fryxR7n4E9KHNvQDpVxfh4TdX8F",
  "key11": "3khwhWjjuz5KM47JfcbAT3HViX2Pf2Pbf6Y2wgDqNc2npmV4dQEVcF4Ktj1ct3VruFFwzT97qqpBpritD14vMH1D",
  "key12": "466WZP3z3oHfudeyxgekhevRCzbLPkhCSGe6WPnLBvxEem3AXNKyVUivzzXfdLVKAniCXoFCspLdq3oBd8LMGfZ5",
  "key13": "4wnVqzpL7nXgywzfrj6jkcRqb2JWZNF8iCwqMVaGvY3RFvfFmfTMFSndWDwfxALyXANsTX6P8e9vLhHueWV71KGv",
  "key14": "286WwXRS5AD6WQCu4eCKrwNki7K98sonTvfcBXznw6113jmUBvKDAwmhVZFdQw8hU7VRo7SY7gbER3sNrYLkWYGi",
  "key15": "5afduNj8epxydg3y9MqXsrPqiyTHz66WgbdE3kwGZZnVjaAB2qdHS5FGw3HPvixrMsFTnX4j8B8WgoavEmGLchzt",
  "key16": "tv5ZMFxWKTz2G6a3oHz4CVYf3WDB1FpvFP9QNCHSyAqq8BW8todtND9eTWbAEHgfbdtaD6f7U6ySVDgMZB7dRnF",
  "key17": "3wnFxgfDk3V3QuBG9otvJFzg8bndMsXXMaQApug5Ax2HdyEXGuZQvvstaqoM5gQcruGwio5njntwqehgyMLk7wmg",
  "key18": "3tdWKAnmT1ngWZK7oXCTbBtgcwWA5Apru4Rq1BFkcJDQQxQzjmDWocL2PJ5zXgMEcdhYeY1MCZGJc1XEmq2rfZDp",
  "key19": "mwUVAxBAdFyQeCDkSGDUmEcGyKjDjB5gwdLgMmh5AEsYL7zSP5oznxELKV1TN2XR3Z7b5AyPsVduwpMCy1duJjp",
  "key20": "ji962AXNy2QKGemd3RHVkvQLcy3DRrj6hPJ4jQk7xcRwzAvTMpkHX5mPRCEYcsnXWBPeeKc1MyySaqW7Pi25DGu",
  "key21": "2AvQzj4mNkGnyzRG2hZy4CeyNve9691kjtsH7haBhmeKGXiMBs7QnzMjnKP3jtzCwtaHRHwQ2eDh25VvyrgkQAHt",
  "key22": "5KefMJCkUrL199c7TViguqtpzkywAfYiJSkqrXQPT2E2f4hvMAuTMn6h2HCWYY3dfxmaRwcLfXdSPSu5vXCRnpCt",
  "key23": "4W5M64FgbPeysyPwVBMXfHPNRTM65aD9BFsPRbnMVt36ePdaAHMod2a1GUhFBx39t8MzmhreiaZS3DF6Lwgwopmf",
  "key24": "3abfL1g3ERi3oJb1koPnMD66ZuCCkuBnkJ7wLzxKDv3gjPrxzpBBKEA6Afp6feU9T5EtoF3djKPq62vyYcRYySsj",
  "key25": "2abuq5e16qma54seutd3sywnbAVRozc1Q1teW9XHfUjjiPdJGnx74yK2AspoQWGAt7RLewSAZeBRcui1RR7SGD7Q",
  "key26": "36WKbLqDdeu5fNiTasD1tU77HXfaC1hEqpHsoyqzzNTYjsafXa5ysqpAZ5ejPgak5pr3uZVNZsMiaKJ3ouUBx3Vi",
  "key27": "3g7CatFhxzqtK5S79N3vxKSSMSB7Xc4mya8X9UxvEz5aT7B5xuEtk344QyghBLuaGmaCMMC41HrR2oCaKQB5BZyD",
  "key28": "5eKpTGaw7m3NB19K6zvchK2ngj2fiw6zbPueakNZb26LwMU2e77DgCSJSxnFwS3WszJ7bFFYk7k7v7fq4gLsy479",
  "key29": "yWZyKbb7LJzDhjNwQT4DpxcFk4t9mSQBdvRzRRoZnYvV9BsCMBPRXXtSXFNUCxhjgWAF1VwDZfg9tC62TGhyoez",
  "key30": "5nH1pFRf1L4rNdvn59XJB5V1peTWmSi8sqW79WqCmuSf8zea8qq9KsRtCv4VYogmJtNUAuLLHMhaFPUEZMTRLcth",
  "key31": "4GWfpGExMvpLHqpLBZK43LPVEvVJnpxPt6ySsafkd7ga1faTGSKbV4ZzkqBT63uvXvTKkqhpPaHGPpNMwsh74Ay9",
  "key32": "2Z1EouPDXxABUt7KUHoM1gXQRYyTyzFFW5w225W4HDqZiay3kzrC1hfPxAJsi5okvP2gJ9VzZqqtDb8ZuVVdBPRb"
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
