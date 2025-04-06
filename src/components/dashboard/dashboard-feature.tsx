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
    "2qfx2yp1t69F6DMiFCtTcx2x7xs78Y1WijfUdeNEg9ebBrCtnnVPkXXLRkqka5DJbXjPQJznGnUjJyMDRcipHcX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cLMWc1oBgTXCyWAp2iLx9EMMEK15UDDuPFuy1sL9QY5KiyENn1yjDAg9Y6fNBvennh6xj93Ym4h4xfQxZaWSfbs",
  "key1": "4qb7pwbPg5TFTYs9yDejdMAmJz5NVCqEHDQVcm4JJJJWg8s4wRYyur93txHK7cqFndM4B15RChsfJhVDgQqTdJbh",
  "key2": "4R9HPEuCXTaG95uPc5hqDdYsHeuk4R4Unw6EB8hPKrm18xwEeXzkE4Rx8gGyzNxLeN3Ca7SXpm4eBDxF8icZGPT8",
  "key3": "5jC8PpfrWXnERwX29JWRnjTtDuMk2wTJX1DtMVEBFGmBXHCEufAAws3zRQkD3bmUwRJpxkDWEkjgiEZJLKtAGQ7X",
  "key4": "5VxrBtcPTDLLQRP3NMCfkYMZZwoEc5otjNqmfBF3FzL36WnKQLNnqBed22wnEyfrifT7vLHTfmAuezDjc5Dk1SzL",
  "key5": "66M27qGh6KoumB5bc89hbJbDZc5v2AKxruQuxrXj5MD4Ub52TsSyfRzvgnJiu1CrPJWmPr1TWjQPwk4Ac5KDRSBT",
  "key6": "2JCNJUe5ACE3Q7JEp7XYkfQKUaELSvB5vwgwgkSQ9qRmZHwAZkvW1bJKV2J1rfd8NQwgFTyv9xNnMZpX2grW1DKS",
  "key7": "4Q4C1iqohYw8K3VhkGTY76Cr9yfwARvdRmAQT71BB3pZyC8xcgxiHLo1DXhthnBWEStSMkqRtoBN2PopsC4cpuBz",
  "key8": "3gizkN5vHZdCVjn5YbdSk2ZDwFTgxbKLBJPqM2Lq2Kn8NuVyokNNGhmzfAhaRUn3Kd8khTvQ9F6RSJZ87C4vE2k7",
  "key9": "224mYSGEoSJ4K812PwF9csM83K76DGiSpbkXE292qWmqhUx81dgWeBgMn4dsQKKEydwRTJ1s3YEYrDjYuG1hnubn",
  "key10": "4bURNkEanSGUzg1dG1UiRjZnzpDfzR5gPivyX7KnpkEpvYWmJNBtWDavXmu1otxkn3UgJkqcSjd26siuEa8qANRu",
  "key11": "2VTcuKqgKPTqbDCjazziVwN7qEpQXHarQoBh24WJKjHNSqJwjupRwqnn5e7wC6fPYJEhAAo3CQ2Z3q3CoJ3qxWoC",
  "key12": "3n1RG35dsyMHC2ePaz3skzYpXmnx57Ghy1V6hzJKhfgWxhLavRrbJkP9F7hDHL9Bv7biQp3e8y9QCykHhm23w67m",
  "key13": "665xsAdPD5m37a5wdqubh5r9pXtsNLRG3TfxS7uxbB7DQt8XhtMPEzG416mPAeXP2TzpY2dwWCxLfpzfx17WyyWV",
  "key14": "4adDUFFvNzzTXCrpuCYppKCzTXqA2MqtUWhFLLdjcNv9zpqLoYBPpQV22tw82yKBUD7GNYd8X88AsYV1Te6nxevo",
  "key15": "44LwKMKKN21rZdMY5S9Avg6FpuNDdAkFmwSoK9wUdBeGRprKpQXrVLRkAFYTL6mLCpJ3TCdbR2GG1V35MCuKhhXP",
  "key16": "3wHcvkgM4mixKayhwjfwmZKhtEfRi354DNXATT4C6grhjUC3QzHg8hSiwNPkRyhGjYV7yNK84f1twkfmQKmChfqQ",
  "key17": "jXBKGdcZHnQthx7mCGfPezxTMfdD6Xw2LUPaW5hxTgDYT5zi9wYyN1mUhLPe6sA64U7tPzKhW44G798X8KAbucF",
  "key18": "cRHwy2MEcyfGNKLNxrVMQBuwKaWq6HnPtW2W8euAqScrkcZBVJoXgQuR7n4Yjy3bM6M3LFXYHz6xJjxaFWUvNzu",
  "key19": "3ZwaxgUyjdhKNJ8EKTarLDTx1k8QSY65Vb934UJ97XniLqc5v1H6y3DdsAaTgYBCcvP24wd66g7DPXzZhY8LxCiA",
  "key20": "B6cEPNThkHQuJsH2BYisBvM45RwLjbMgSaH2wqaQD6tRQ37jMzrsdYKQnD41imqLA3CAw2Y9zma8hGmZxRELCD2",
  "key21": "5CUnSsS3GebUaTJot8dU5FMifdpTo74jw7ECHsjFEycnWDvaScYWoV3fswyX8DkjPSxcZbvzVtKLV21HnM7V5b8x",
  "key22": "gGHYP1mLn8y5Ppsh9Jh2SUS4tZVFTHSXyE1hrk4T6fM1eHescDwtSCsHiot8gvr2T2Fprzm7dK6RR1M4VtKGpbB",
  "key23": "3Mi8c5HM9ZshkgYynEH6ssGMfarAFoXngUbTGJei4Wtu4f46gkjpeofeqDcg4EPANgTHETB1qNRfy3jpQEGHVnfN",
  "key24": "5sy1RqL8xZPwscgwH4JWgnkTZSDuaDkz8ULbpDhJZop88ewC6KJ2b7Fe3Hx9bfo4mUgtGLFxBMjNgtxWvMzCmdV3",
  "key25": "2JaVvYELouTs67VELr6h4XXX4oU9cK6VvSNDvoZMmU7DU1Ut9Gp8LGjV7mKbttxe9D6Jay4eicyKK7QWKYoEMfDF"
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
