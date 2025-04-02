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
    "qiAshNq6X3NGssnCnySZghgWHkpfNZ5ErXkTH9U71y1omrtvsrnP3VdGHfxjBHdthtLPszuK1MgBoXMgXX4D55z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Amsr9HV3jyrgowT2TrZBvahpst1W2hQJZTMwNYkFa9yoHKgXpgkS4bWKPfQk71sL6VYAzVkTLgasdSDDNHKzrUc",
  "key1": "2bG7HP1yyap3VMBFVe6i73Lkt6Afm7btPV7c9yukV4ELUmJoGfSZN3nb9jkSzXPWuUFGJQsrwA7kvoVwbS6uVPss",
  "key2": "V9fjcqGav83FP9Q1KnpyG3xNFXJCVsg4PY3fnUYA13bozs33ePJfKAKnnK7Qfm7v7qFGWtZqVDibH2veoJce1GH",
  "key3": "55bF2Z4dVJFZsVN4x5RyuWwCxpa2L7VcfYdPvuxMeJnHoy1QBYNV7Bp8o2viSMVfy7AupoHQDiVqtaueSb6QaTXk",
  "key4": "324Kms7qEzB5nt54XiUZtT7KgDWKsHUhBhpXemM2cG4hs7KHnedtqNM8mWBiUv2r33iHAHyBgFCTaSw56hGhqnBX",
  "key5": "3Hx8Ly9Ro1xNGeKuXtWJKdPoL9MH41H3sZHR7JnEvZDzYNUH6FYcinQtmYD34gDHPevUzqHcf2ssWHxHGr8xSDXs",
  "key6": "3B2MHtaHraSwMr3kiqZUYv24SC3ic2PPd2X3nAHyEnJxzqM6vMKLxajjFkuD9rn3EhGYYD1m5RRLonbTUGNpD2f9",
  "key7": "4cMzJGX6QbqyNeR1wFMpzxjgMbphq3Lu1V9odypQy1Bhomsqym74EFAoVFjPFKN3yL8tFaENqCW19ALpvtAYGLRZ",
  "key8": "5hb4n9Cc2dVtQJKT66iGYp9Wt6V8yfYvpX4hY71T2b6WmWKjhxqbrx5c25EU3kJAHiQGcPzscQxUUTaTH7TzURKt",
  "key9": "2Wfoz2PaY81bC66KpmfdqS7QF6ZeEqaGGJbNcygiUEMcx2y89Z6HniUszPLzPiAKoU7rfQHrGwtZk9k7LGQy1Xuc",
  "key10": "w3FXoXGviFZceMHy1ctcoCMy3PjdVHP9ZMPzEcTS7djQ3T7o5kVAqgRSNShQwDwuRqPfCaRmgLPmPcMtaHQdVmY",
  "key11": "37QafzVQ5aosFDbeyFnGwZW4XfwpZpn9XvmdrVvkaqKp67kQmHtGrpnsftoGPDNVRn2Et7cpUcj9E64zR5bfJeix",
  "key12": "2fGSe1KCUSi9VqG5xwPu2XkWV6AAxD65CDLSue7Xtz9to7mUHs8ugPkrHuV7AG57T9EHP9QCXNqu4QvTtzsJ4na9",
  "key13": "4gfVVgt34Xkq6UVQJ5riz3suyy72NANGQ5JFACiKewRFr8kq7Tv2c1R37z5Mhe4QfK6yohCuXGphF9sFbe4Ljjoi",
  "key14": "CN5dmSQ1s3nNJBDGrsoFEeGBDeMLSa68drBqSnPDg6La8rwSkpegRVft22XZur6gsV4D2VeTxh1Zyxk4ykBZddr",
  "key15": "3JRGD5qjX71eGmkGb3kxE1cQSF2SG6PvFmUpTSkmDciSELeqUarm7G6b3227apQkQG4ooeyy3tv98j5pDwQ5nB97",
  "key16": "3j5FdfF5CPUEwakoX6eaHEQMdG3jb234yWAWN1sFKjUxYLhLu3nxTYeVQ8oTdJuWFVNSAqcduRCcHsgLjBoVWD92",
  "key17": "4pvuyX56oKgNDzJsBe9Y3EAX6m84xTFdWzUkrvjAcXrSg9fAEgc5YQYRo4gxcuHHSjAbrkRh2tE759hr3Re22M7f",
  "key18": "4p5DzpgPZr23dQQBHfnhb4jVAhK4TCQc11NaPoocYXrBuJXeJEUk1QPfmfMwJB6asKvmSzqrJsdCmgU8AbnZhjEk",
  "key19": "5uQBgBoL2YKUjPjNKWNHUHEC89wxUEyzrcBzGY79Nttpgsx47Gjz8DSV6WFv6WDc8Mkdy8XujBPYQXki632ChqFV",
  "key20": "5ugiz4z3eyHGrzc1bhq7PRRqXy2Maf3DmfD6sS75XdV21HZrfdHP8fn9H7J8ykdr1Dks9jjjNBjyVdmpJjHSmRUV",
  "key21": "4TFqhNrXZSE7oiTVnpFZ5bJi8SJzBzmVfw8QKLC3Lh7Tem4BKb983bt5Ni18WUjHvCskKCakHs19koyNQnCTVBfY",
  "key22": "FueyCkNNB5dthkqYqsJbpaQ7rLAEN9k3f6RcjAiAGZsPy8zpqUoUDhJtXTyD7yNrPY9hhyURXQL8RLyDPahB84k",
  "key23": "23ikYi2cohnrUzWqaAJ83fhTu6a1EzXA8yP1q4mthj9TETkXRunk3WwEoiEjgJuCGnAdi9nnChBg9pGU3VAhpcQo",
  "key24": "32n9URL6p52SU5cXeSWbMybSeaHnpWBpgDPTNGejArbrZQ1DKQzyDeTmKi5ymTLNr5FafE9jdV7opMN72BhL4rw8",
  "key25": "66gXF7qEPVQShkab3AviMSJZHR8gXdQfNAy8o88kkri3QK6S2tWx17wwyGb3CCmC1rCLeJK6t3LD5w3267aMizGf",
  "key26": "2srFJbQZZfY3rcss5g7pyNT5ybA69yPbUgfupohCjQef78RvYedVaTxsUBMaXK3aNmDByXKfSkmbeBjk7K4mLzK4",
  "key27": "3x23vLrYom63Sznp4Dhw1XjKYjPQtszhSMcXPxZ6Xshj2AvdLSG5H8h3f2HKq35YFrS5zQjmcqfQPD8TgjcfVPov"
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
