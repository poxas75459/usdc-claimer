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
    "643UZE3bWocdKeX1m9kCUiFrUP7k1C8BboV7vYyjyuQ7oP62nihjRU49LmUHHEKtFSAyKMDkzuVNfJjgPLjNhR26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqkQCcm56dK9GDdzApvBRq6Xx7E78Munajjd5LwGBfE1eDQwGKszY7epn1gBeRJ3QFo663BxYBcSQ8F7GPw27ue",
  "key1": "Yqhb3Cp49oMWg7QVQrgaj4MxwxkVkSmMKce1hEMJkPMknb2eBnjwrxXXZ87BV5LsucNEYZ2YiTKubbjkgis8PRx",
  "key2": "4qZT9R1tHGckYs4hLhYDVw9MkNDBHvDB7ENuwbNuDbHFcFw53nD3cTg7zXr8VM8Cnvm66A1uAM8gmW9LmaeN1GGB",
  "key3": "2gf4ZA5PD9NUzK8PYWzQD5SEsy9DDi8oeMKSTQEHYPE4b9HZJQSJx7D1hHc7SiHB9JwUJgx92d9ZcWHzJoj1g99B",
  "key4": "4GaLjCkdv9jmbXKQXAzE6B7idj4m4sokZxJSPuDhdRM5ipwqaLZ8MyzfdkuM3Y43Q9PSxXyqzTXMaYr3zUpcW6jo",
  "key5": "2GAeK5esQXayBi9ZS5sgeGAEZ7SgBxEvS6oxCe9JKs7o1UL85dtwb36zK9GQTi27gPurRDeNecvSSRcM2ZTTD4aw",
  "key6": "3ZzdiJB9hEGyjL4bL7wyzXJx6ymGhChBut7f3XvxcDQNa92trbg73QNPmYbVih68wnQVoozEe6MCQ8ZXArgFASQZ",
  "key7": "3yXd1f9qnZKBUcfTH1jPJePEWBfVbJzf2zYUH6PQrneGquevmTBybtRi5t9MSsBNEPU5YXiHUdKmQzvFBKRboD6L",
  "key8": "XTNo7pimRuTj83gxtwbHfpKxH9J33GKVnUQ1zPNfbK87W66NAb1xb8XwGBN3195RAe1Nhk9LmqeeYoVDGYJzgRw",
  "key9": "5c4SYzdYvoBGbr2z9XFY9QWgmUxGiBBEgSkKHiYK6TFotuNdLgrTRPZmBnHKY9an6pduTitEeaZaR4yncumrxi3h",
  "key10": "3ZJTxutzz2eFQnRJYWnF3Aec6hqKpiHykMVFjLywVSZJK1xAtcmJojxbAvXZL26Ne294uaBtYRGEGns3tAoezfce",
  "key11": "5WqfeSDTZQKW1US2KLt5g7nwaPU5ZDBqV8hV8SmF3wXwKgA45D5S9gDwLQhni34dsiR56eaVBvZuu1M2ddUhALtg",
  "key12": "3z8hyX7UW6KeiuAECSGtMjdfbVegN1eQ1GiNDWvcxsegrkoLsDi5KPAPoRyv1svGQPLiRwTsQjPoevFEGFH8Wm22",
  "key13": "543CcbqGKU3kSxi3yzgi2PAeV24vNxznT3hU9FUj8vtWSRPpxzN2LA1gHfkoazowuFr8BUJ4st5MAow27aRYpyU3",
  "key14": "37furVWRAPpADGt5rnXn5bV9uxeYpPDfhDSTs4CWSjtukTtm3XaGQsb74RUMuo5dooYhzxjawNuHNR2nvN8v3CLV",
  "key15": "4TA5fZwViBNaCkbbxfyocrjPAGYTEV4Se6Qm4rw53dH25zd72YB78RPd37pNwt2g8eSfLAsr5u34V94cRYhWiZyZ",
  "key16": "5wnKh4kj7kiU1fzzktdtEGc3h3d5kcrNHfH54nUSySUCtfdgs4pLwiSChkEnmKXNzonxRrhiYiqC54BHAqPrp9dS",
  "key17": "iA1iqMnsgHL2uALVZAfh2xhjArqpqgiXifPB9ny4hvjKK3CXZ4QCjv9Np1rq3KtKo19cDsuzZiBE8ekRCz5We5s",
  "key18": "2KZBNkiPjFzAR7mkcNuTLHUPC76uSRKaZydoqruZFmN2uC5FvjB33t5LvFECVTDKNdTCFWHmNyKj72yK5dsqBNG2",
  "key19": "2cMEz7nRGDGJNmFJwvmF3npAg5ejGQewJ14gYEyMWBxcmrCUacCYfAKFoDCtcR9aQkDJkbN29aQGVeND2BBLi4Ld",
  "key20": "58pUjngwJs1c5d5eowzkBxKuJpLPeQPcr359rMWTojVMQCgfEMuYSKhnjS4Ppngy7JpUs2cBS1oscgCvjH8m7SC3",
  "key21": "2cxwySU8ajjZfiqmcGtv7nTRo6SEEfWW9DscZyTpeQbK3pU5GEzsnkKPAhwGvUwN4kFdx1NgP7PgdPqKKSbe9qrQ",
  "key22": "2PmYy3UTNcCUWvoYbS8wCLnEwHaQtcN8djCAhMbFjofmroXJMZ7CB5CzJi6aYKbZwoK7ccCCdMebE76SRSv8Mu8i",
  "key23": "3DLtRK78HUdrUrFUoVikgs1de638sFwuJtELFSoazTnTD46njAAqDjXmGiqyihJsGNsEZSV6LUs55kQ1enov9Xr8",
  "key24": "5WDVr1SG8qLm5X3LmDzWCtVVjPGSCvYkwGqQCQTk1dWGbnSVtYfcw37RgbQuChQYoq46g1cMvCT2nRrt5DYZ8VWV",
  "key25": "5E99H9BecXU9h58usoHWTpiuF5Chk73h9pbTTc3CrgzM1fQbiGtYdQuUnNdkMe5DNLAFLEmmmXXwwbksjzMD7HqQ",
  "key26": "5cTNU3bfC63a8giNxcbum7hhceK2RRChcfsk77QudLUw3ZwD9Q4wasBgNc9hvMzkYd4weWw8EesrjvbWKz3m6zd8",
  "key27": "4ZDnoUMEcwuFUcT2CkYyf1ZUACBbsbZsnLvVBbUJwTCtyZ8J5jYWMbNQjnw3y5av12zzoNHHYP8fGdwpMbyuWqxR",
  "key28": "i4c8SkUdZG5C2JrKENZiajUjzyQJb2Cr4vTMmbDPACX8n8f3XHGPaWLUKMes5G2cazZAGQ6rTRm8aABVoxR8E7S",
  "key29": "2zeZczAXsHH9Kj8KGmWLxzH5PmPAHx7gXxobp3YGgyhwbYmoJxn1Si9yVSn7wUy1XLysNUDL25EeGYCVScRfbPhu",
  "key30": "uEn56m3NDfikfM8rLyVqRb6MwecH4aEkVXkvZL5tfBmcip2bQSZ7pkyyqM8uTr7uDL862shHtfCKUJNBB6E6AkP",
  "key31": "57FTJEjbHaiyYNkTYuxx7GcgsVY5t2Yi3y49ZUJ2kVb9hWTdhWcktx9DC4KgjpJoGJoYf8HFLQNnDomD1NSMbq1a",
  "key32": "4rHntgSY4prYAfkHMUddCMfNpUPobm5Fz2TutesmpzVyWNRp5mMEdkLtPvYajN2N3EEBchNLTW1FdFeYyEvA23wj",
  "key33": "4XVjba1Z4Fpy1BkaVm7QX7cQE1QiVixVtsChyFzn4XyUGcBWfH1PvDEqKUkTZKLp2NrJQTGAXV6Xk2wEv2qQ1AF3",
  "key34": "tzXCQ1wwoVo3GycfDNtXeVeRRoXRTzmHF4M2f6qDLuhhSp562UKvTaXC76MtS6wmWN73Szff4gtVc1b5qVCynR2",
  "key35": "W7oqDgprxgo5wsniKShd1gjBVSThKowN9QPMkXkNcCXagbuRu9DfXib3P7zEMcPvu3n1R5USKYUqFMq4RwVs89m",
  "key36": "4mkZFBT3EFUZnB2kHtXVze4CWivZLTLNXcGFdD7CB9qa6v4D91CqpTU6UntLdygTDX3R1AzMGQoNFmmc2VZefwdA",
  "key37": "3QzHzhFiQ8vvuo79M5FD7R2QhZzRNHgN9iVSzQWSDRM3MxbYv1Kumf1XTVahfQRFFZbQAYmMK5Kjpv9SeQQvsMZB",
  "key38": "nyq5nrC9KMokNQBbBsaR6sVzimwaYxaW9pWp8rm1bM8oavJ23h6gT9zMmGWBjPbqjbXtyRownRtYUTdTsyWgqh2",
  "key39": "A8AoFR57Dg5ouFh4reWkHraMPjK4CYXFbf9qsfoXrnxETjAXuCZHSqh6Nkc9NRuYLJUfYpJWNojvazZMoQEoPTr",
  "key40": "4DvX5bKujYPkbBfrHiRZBB5seATcsWsseqB3CxJKfn79x3MH3eP413XRTRwvELn9YZEm5X1TTRkbWuMnbNKqzaj8",
  "key41": "4QB1e18yCvaHAemNFRug5KBKWFF3Qw3wV1D1C84fpErWTPKcECkz5KMtZn6AkiXAKHa8A18v8f4D7SCWx6JTAkQW",
  "key42": "4Qqu3LZfuRnv4MiT9NZttftsHSbe6uivhuZYb49WMKT7DhuZCVhykwKYfwRZBopsTUg2B1BFY5U3JHmETfcx6GH",
  "key43": "577CxTABMu7vrTd86Td3EuAwav9A7Gx3m4FK9b2SBevF46BpNAcDzW52NiAZomAgaMMyZayDpQm8cAWPcfqkcd1z",
  "key44": "3YYG9jVG1pCESHteFenFpcfyaSBM1sFWJGuCCYiCRHk9yCJBWVcdCbPTaHERCy4FWoWhpHwxzqffVRWerfaxVJKq",
  "key45": "3dT1bXnVYjon38p8mo1kxyjtjVFCCW5jCsGhEW1h59r2ugSkSyj22BW4kqoott3HmgdFacb7csuqtYhjrq6TrCcf",
  "key46": "3FxBnU8aaLrwtDo2iawWzFfvVS5Kkk3Q933gQkkzLeg4msWcLQAhSZCBb6XZ7rwDmrtZwzrjubRtXykVopgvbUKf",
  "key47": "4KEccj1WoL6jx7UK3Y4yDhh5WsShAUSt4bX2QnzfiQEWBiueCESS8APr4j9eUcxSX7Fu6Rd4dsy5MPqVdLc3S2yt",
  "key48": "3894q4rffgrwPXsWnQDgnDzFdRQdtUdkocnp1rpMyFnxcwnQjQr7iwxWkAc5NWGJ6emY2MBHsGtBhYAANUgYmEJX",
  "key49": "aGFTt3dcUR2xJX62Jdx9xtJAC1UQVt21pkzAdZ21Kkq5c8qT6iDW8aDbSpSgsYYZvXvekanzJonGVBg69GcUmMP"
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
