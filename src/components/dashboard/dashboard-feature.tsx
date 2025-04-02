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
    "54fWybDM3wB9hdHFHkaGezf8uHMEhsS4bVo3HbXUWTdybu2zghirjbPGGM72KmyE2wVpmcokHVWDC4ERL1CpzTKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1mHBLHkYv1J7nXhJffnG8f1aZziC7aa5M6wMt6ckPz6ex1TxmaDKiwgVCFV8iyRGNZuuriVbkNN6ztSVEPbKxDE",
  "key1": "2ecaZ4xhjbFdCTHgsYFGxXD1N47tDPFxx8ebyHvVB18Pimf1MjgBKPaSUJtFZNrTATeuLdB8MudKJzDCf142pzpd",
  "key2": "27FfV273fUTmfvtmwyocvS439mNNG75w41xxVvakMhp129PA88LVh5uJ4N4FHQ2FcqD2jmwebKrjPxhEHmtqn2aD",
  "key3": "4vh4Cy7mT7k459BVELfYChzVtx6o2kJf4T4d8hwEqPkyGscAdPByTyTkZiHku7i69NWmHMa1Cd9mXYf924dJsWM8",
  "key4": "2SFdGgvHCuL8sqwkzTDNRPCZqwiXScH8vh7B9ZeZ2NpEZzHDmHmpgKncv27u1AgqLHgQzYiVPMYjZUHC69CeM3zr",
  "key5": "1ZPWzRk6idZ4v7hrxUqqrLqRJarRY8QH67DUzcYJjpmwTcHvZhjcyjjJPE6JNnggLJYCwiC5HZuGFuypxjdbCH2",
  "key6": "5upYd2xtcYGMybLBrcsfpdyxp2erJM5kGXbBEMJiSiiReJy7sDDpXy94nbWKMGFfJu1GXs3EBbYYqG44bySqDH7t",
  "key7": "4qDkG3WBWkjyUXqXoeV1N2qsZP5XW8SbCHswdgoNXLj4jPsTQw9JBwY4481iS3HxarQaahkvem9kSHTmbzBXoreA",
  "key8": "2JKYZwCLE8BKeGV5LQUq5QTprHodT1PGWkgAcKAbut43y7Q5cHo35etdzuu2s1GBvvmy1NFd5Tc39vfWYfgdyPA2",
  "key9": "65iQ1uqRkmroTJHHj3MggV6t6a4ZJ6wCfySLtKQNAnSnvQFYebHGyZ4D68veXh57GXmrQdUUxNg9JXrgsubg6aZM",
  "key10": "2CH9S3oqxtEaQWkpscLMhjTcsusyXNR9PQ4gqi6dSxhEgEMQi4ex9Z1ZK5zuwS4zuDAQhwrWDdcFxoiMBqrjUio6",
  "key11": "5ys9EM3wMdPVGqip7tWaA3WaVfRN7zBFEMhtDWtdUtAjahpXT5G32n4ebfMKQ7c6AjtTfwNBnPmsWf28CY5FcgTL",
  "key12": "27ohKkmw74d4Jwiz2H5T5fVRiY2arFDC6WBqRYdZdoUpXrVaFBuRgYe8btLEnjPTNcbQQ6JwYRZPoPvBvVx5em85",
  "key13": "ZicBuLTrfaXvcbaiUeqX2giiT16cd1fFLvXYkotkaabnDwP2SzzTbLAdVGUooeCwRy5vHXRHPPsdt2Z5fNiku5F",
  "key14": "5dYpQHh4FZxFzqYt1EXuQqT9TvjuRB6RMC7qZ4xNe2ZsVeqXa6SXrPoWfUeqT6mpAQYMMRhosauM5UPaB5MKLo3f",
  "key15": "5xzfLMZs4cyULjykpPaiByosy55rkiob7nocZGNhjSBA2RWJMzFG2e4iiCXG56Yw7eCFNgW43vdyhVrNMfse5PvJ",
  "key16": "2BVSkCzcXW7gxyJtuaQ6V9Ys1Abc2JEVEYGr1uk9Y8bdh9aBzvWyfRguzptVHj7Ub2caR9LD98ab8BLcnn6gnKag",
  "key17": "4MSsmT3v8uFinUvpddWwXQez5RzMFAaMAGFFCgyT9ifZcm8o1fy49FYq4jiVBhnQy9V6yqBgT5D5AcxMN5UHU86c",
  "key18": "4mZm68JtUXKMQeyaxpdAc7ivnNk2f8L5PW9xRvKnwswdsfJCvAAfu4LRdFCLiHui75ra3VUVdx4ktpuFrUQszKk8",
  "key19": "5PGdy6UgcHSoxQPmVMnnRKD6vP3L5zeBeCk4zZCRZfdP9ntC8JwfV67cDbaWSuv1YZyeYbMx21hTHNGpFEsW783Z",
  "key20": "JsUW8hKmioybNUPwN5dHgtPc76jTeCsKo3EZMPkNViq38m99jaG9UfsLwcJizRXVW3QbFxYZUQX7nhdQHXmgjbH",
  "key21": "33tbNPBzA9jutp3KJ6XqT7dWeyhhB9zuPKH1bJ9zZnTJQuTsDAzvASKWLBcatHHm46UEuTMAaZpVQzEeMgYns3Kp",
  "key22": "3oF7botX3Lby4gL5rSuBpCcjhFtVi89CwnQEmh8iDGcJMzmpdEQ5iJhdBQ4N6emt9kSFkUb33q5UhwyDDawxoFJF",
  "key23": "4eJ3dBnBQRP5dpyhDwU3eFqb16AsWqSxEbj3DwTfLo3YYD3mg74mjLhtwxQUynbteGkpqzANUTGeLGfEuYgB8Bti",
  "key24": "29bSqLZbBd6WwHMaw2jZvosY6Ma1vxQPJSXZBepNg2T7ihokU5ynXwr8umEsS76uMBnfaXbcRKQCNP1k9p6TiQFT",
  "key25": "3nhsESL2PFNZiWNrCkjbps1foZaLNQyTacFSEp5b5DFrjSKVL462JipgtmDZPYbPxWpSisXCMbauUaACzEkg4NF9",
  "key26": "3UxJ7Vk1dychscR6wV7LEeuGhm59xnTa9UDwrUmPsoDYkA4aX9FfCtiy8DjmGGaEFbdQtypRqk8qmCucmRB83hGB",
  "key27": "4iiTqwARWPNj3g1JHxF3jxSc5oeBrSRm3MbM9UiYoPpVXZgEcPjAxGGtE5NbVRYjR46skTjSZcEZAcH2UUkFz6nm",
  "key28": "5JYHzZJiWR5wsmQ2ZiHsWLyGMu8furUvjxCkoNpurARbuoHKLGsqteg52cxTD7s34N2m7WzBsPaYr95kLGNrPrSn",
  "key29": "4TLMiSgarG361JSfFcWc63z35nvTTFGdSwvsjLxAy9E9DFydWmmW4b9m5t373eNA3RjMrDvcDSXpLsuTsJHmNtvZ",
  "key30": "3sipFovDzb76FDHcCwJkVPokR75rJ6LiAfNGWBXvjikWKNG63emsxFXhTPamUG2n3ChNoFLtkGXxacGFyXS5gqpx"
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
