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
    "Q9QvcbVvahKeonBgowEH68w11Fg4YTSh1KRF8G3RuUVXhb19pJEPSDGkttiigZaGHAk2wJs9Y8qAKgQqRkq19Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovabDNNWmzz5H4hdFL4iimhU4SFaDomgWfMsiCZ5eg9KZgbtDACChgVGWjmyKHjpZn89QukXp1g7VQTwHzw83eF",
  "key1": "2py5kPmY8gtKRZMiaCTRCqqtUSwgXWmsQtGCUEPiHz3K4swqgEEAojDYMH5itxjVQ91eGwaVTbgpxUwiV9kRnoJH",
  "key2": "57EB58y9E4DXjbF16hFVNyJnneoFR2uVgvoj2CViqcaEjYD4vgFw8oGz6gUw7VhTez9wRptzdtN6Hf6ReqrtTViE",
  "key3": "3inEZhwb9GTUpi6wHVPd14MQeXy5a3YqchePDRfKARAnz9aZhmDGaQdP6aDubqEXh7V51DZLxMFq8otMizNfVANN",
  "key4": "61yXWq2Fv3hpFxvn9DeHadfc1Rc43Z31Yuic6ctRF1Yheg11KhB7JUmUff4rCDAk9uGsnWGYPnQPYdfRENAYWZJw",
  "key5": "3PAvGFX5nxAccwFcQgRRXKBVH6gASeupbRp2mzgjEv1WkNY9nZPBjWHeFhio9AohsC6Tfmus3v16wKiw4eBSiK2Q",
  "key6": "4jDuNkERQtkNVKYC4TyHimMVAZbLu41FiB3yg8ZDooRKAxRAPDN7Ahcq7HjyupT1qsfJbscxJHeuWvduviSjjd5g",
  "key7": "7rcBhdy9DyykSxphMhiXEEqXHjC65crGy74VM6KyGNe3TXvFfv9pbPCUZE8z7fSwPyqxuKaNTtT6bXE6xDBg9Mi",
  "key8": "5jAmeXDzR8B64kc58wSFGyhC5fJn7dNY6KdZUQhnGFJfYHZATRNwnbbVUnWsMHxohfmnshMhgUa5NVBK24uEVaDP",
  "key9": "4ZA5zsrwNS1eVirKP6L6DuLiKKRfcoGubefRsAFrVgvzzucPktheCWnXELSNNgeAeBDx6EXozKDkg355eeVxZQkR",
  "key10": "oDBPB7oAuczj9ZWoW2E38z9KiAkHaK1AB5XUmQHQGrzANv1tbAUVFyuu5sj4DB946W75sJ4v2NSmFdHa4ZuLtdm",
  "key11": "4J6hUu2iGzPSsk22rARBmFCZGoYUFtsqGqwEag5zpr8znAQqu53GDMWG8aunzzA5e46p9ehM5qPzAF8fBFJQRCHB",
  "key12": "4rnWcksfPtbTsDmppLVQv577gNXNVQYzvyYUMrajAWm6Ms6KGM53fXWybYqVpp9sHS9GNDTYqHKdgKpfRMs2wB76",
  "key13": "2nrLX7P5KsYXkA6JfvMrDkSXZcZ7txAUaoctsWLyJQvZGYYQXXUW6jvYBut585kSSgLahNo3EzUATDkWzWXxzi14",
  "key14": "3L1yeGCnuVYTNjteG9zbPiMNGzGFiQTHbTYNUiimaDosrUyetXmMwA2YdGhpNTskyfqLCLHMe48ojfzUTfqt715Q",
  "key15": "2q6b3D4xMCrbgWS2LZkWr9t6MxJ1rGRxGDxjMrB7m7UYXzytDLCzoTR1BEhg8py9Hbtjav3gpxf5Pn8UEXLAviTR",
  "key16": "2qRwgSqRWxC2DtMYn9wGS7oAxF2SeYrVWToDhhyjsYHrEku4PWw7nNqWTwwrx8ML7nrNTpsCXowi8zUFSYAffDeZ",
  "key17": "3cBfac4AcDRE3Kk8aozrKxdXwnNK4yRtGM8ysuu5k5TP8upVztaSQZZP5tN8UgTyd8nQGRD18BiSb5X6ZFHqWTis",
  "key18": "S1XWog6b8dmVxLhb2Ts1CQbTekJAH5BWfRZW8mRsLSN1d2QFsKc2KEnYvdJAcPsTHcdtYFtXQPNieSqQXmTA9co",
  "key19": "4KEu25FTW8kst1YhdgCZsQ42bnX2gVNXvDxCtYVugToz8qMnM7eLzg7Vu8Z8qFcuzv1Ar8rbSGeHZFUqunvzVu3Y",
  "key20": "fyEqAZY1uj9HxCYEyR4tWhK1wgxbdSszTdWKLEMfm4ioc1QgLBwiRv8TgHC13RytTnNiTAD8zFGB3MhetrZgNfc",
  "key21": "2sQvzBXVeFP7VZFGUDwJk1VDNfKEn2gaRBqM2aj7QE3Q5zEFrkrLjFDfAmZqF1mVpiHMrZWg1CpZPok6WA477LKT",
  "key22": "4Hr1AztTPvDLPBqEKjT4dnKbLyqoo9DBmAgncQPMkezZH9PHonKfQyna9SRNpLGFiNarkVb6jpeP4ZquKYPPAHUo",
  "key23": "5aw3eSDH3tg9Kdq4D2rfcgRad2yB1rxdnK8aoHKYogB2V8eCms1hpDsMRXVPJd4m4AwAtJxVUaVXup8GTp5M829x",
  "key24": "5GTToHv5hz5cGxBrfL4LiHsETEJATFNHkh4RRHVkbE6ndV7DJWNYdyA2YBmV9GaKbbkm9rar2MDra6sAH2k8Dwfw",
  "key25": "3ZXjHF9TqBmtkcZiQdgToUakjmx9vJYUDex2AftP3br3GKvoNBwsMcvwHGGiuc6QgVcyk7Kwse8D2RPvowFYyKR2",
  "key26": "2dSbwb27mBAZPZLyfLXk9jDHxfQZ9hQJnp1j1WGuH1jALaeQbaVF33CSAbc3XYFCeqgiWicX1jYT2o1wPw8tdic8"
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
