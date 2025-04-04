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
    "5A32EJ9m4sRg3EV5Y9CkH4fJQ2cYzP33nSPsVsetK6xxTm2XfHcnMAmAPNrnpLCNHrdfSuDQAemQqZGMt3N4pPnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59eUt5PXRNDHboGQA2mAaMuQ8RYuoWef4iH7iiUVJvZzTa3UZSmHBtAxeqnYiWseGbALyobUT6qzF3N6NeNg5KCi",
  "key1": "5cnEJfaT2UA3ZMnpHM59L87Ytz7bmDaZVnsVwyVGYaCSeVrKTVuNbjo3L3o4PE8Wqq447S1bYZFCtd7G28iBbSns",
  "key2": "2tt7FCU37UdJeHR8bombd56PZhpixYpcom1xbsUtLGxstHZeFGnfFNqKHxXPxGChdnnpVEKoqCbDTykaxxZxz9Hs",
  "key3": "3mBJtpVFGxnnZoj2KuagWr1FHmJmUL8QSsp7KDdoaPKQWADw24qQc7yLMw6nkHHyU1SVCUZu9HRXHJifS5dkjCRU",
  "key4": "2FyKoNEgkNfZEfTZMpoQ2xk4MevfAUkUzvJsL2hkWvjGoqyz5ms8W8tEnNxcr8dc5gcZLrwU5LrhNiN9LytszYWs",
  "key5": "2qTGp1i9JWKkofd18t48LMzsvDDaQy9doYaK54Ue9VS83wP6oESQuxvY4ePFwaCWVCGoQCAPSSniQn9ovjGDRv8b",
  "key6": "38sSqc5M81q1gN4ymRVHfsyxoUMJf4TGp7wBaotnpAPJ5uybprDAWdpnx56LWFxzhpJMBL27rPbvgCNJCRpQNeyW",
  "key7": "4QK2HW9h2U39ekQH7HcoZiXBaC9PB4VhY2jzPiF26hmqEyZxdZaG7MGW7q48uv7UacP6jpimqBVYwgZ42Jv34EJZ",
  "key8": "1FxndX1y6LzBQoBfP2Y6rsZ2zP1Sq9piB2Am6z3FooF7qbfFRVKJPK5nKY8AaFDS4ukLLT5RAZjY3Te9yg8RfZU",
  "key9": "3P2MyWt85SLqUrPGj8GSjkKieXX5LuBfCf5TM2N1JGRrJnsLFwe23CiFHNjEV5LFqFPfpdi38zqFmiFA3iebze2n",
  "key10": "56srPdeHxbtBavoKmhP7MXDbNeXcUn5vMM7bd7Kwa5cd3wZ7shQgcvfCh4bjKYrDkLuMfzVwdieo3dVTxBS4JHP6",
  "key11": "4idfs8r1teEDWikegoCRQjnBrAHRTLwCVt31payoohvQgCvu2FyGiQk4yGvL855sQ5CdBKtyPff3JbrABZ5QCKYd",
  "key12": "3iS379s4adQ9e6CX1jNdH5qdwab9CeVxAZRYazjwJrUEBF15n4FBPkw7g7q8fhuheLd4c21ijn1wKCDvVq6q92ye",
  "key13": "3Tkai3j9kHMgyccmk2genKxqRQv7mmn5o9EceoQTWwKsn8TZwFZtUh1LWy7rSN3fUmxjibTeNqeTodtuiNwGoMNv",
  "key14": "TMeKxzHcH3fyTtLjZfhrFWADWwmJX7FmEndcUpx5kFRLkhFfD4kZTzQvhSsyen1oJZgcJM1fcHU4GdaakSdeJkR",
  "key15": "5dT9jRE6FogmnbXqyGcZ7oebummGkrqDcqhMHAKk4geoN3b1Em1We1JtdwpSZiXrDcG2XbDL2WtEN1F5R2QPpBZH",
  "key16": "4nqL4VaRn5fVxysv4YAjkprTTQLVNsUpQgVFMVKM87W1Z4D7B6SRyVqPbSMkuEv8AYf2fLZzNfTQevGXhbAdSmp8",
  "key17": "3sZgDkS69dvxLWmwQUA93TYJ2sZFTDjLJ1G9BhbEjVs4aV8mRwGLmQqL8wernq1MqNfxve4MST8TNGDs3z1iGNXh",
  "key18": "2MYzKR8AvX9RQdiQh7HagEXDiwourA8AqKehCiHBf2hcWFUrpqAkvNLzppNKMSbTzmNJfkmLfuJgJGoxynbsB2on",
  "key19": "22Z8v2EnuBwxwcbdL9xRZA1a13H6QpPYjJ9fu3s6m47xrNzvVCx6yRWqdULB629LWQ5mkjNgLnKTR28yAhcY6xbx",
  "key20": "5qQ8YYVWkUY6x38iLS6kbaKu7G1RwAAkNessBoUo1pTPEDRp7cezEGJaWq4Q85fhecwVogcvMogrQmAeEUeCtGD",
  "key21": "RJaRFTpHnNE54x7p4aFzucgXgMQoeMGDeJGamHjjbfG7HjmaD1Vc6znpZt9nuyC6BpVBqNGJwDpCqudfkVWzAUP",
  "key22": "5hFn69xGZsfi7cWiV1e2azVkSE5cSFPLJVcQS3SPWuQCqECU4fH7NWffccmbT7E13oBk5xzDUEKRiju6FHKxxsmo",
  "key23": "43X5wG26NGF749weeMGZR4npPEyXcfoF8tTgTAgmWmgJP1cNKAfnt3KTbnQubqGhYPyWsVbSpVDSdGvHZzVaFoGd",
  "key24": "47x9521b6a51JRcyvvxQesNXyPC88QFNQ867HdEUzoPvN95RpaJBED5y4tAE6SVZsKScaZtV1WjpmsDuU5WJwakV",
  "key25": "2kgZfdsMGint2Vevv2dNhiudeL1rvv9LgjJFxqb4gCuNTepL3dwHrL3ENTMoiMpz3VRvLBaxjpJYZSYzkhHvf7xw"
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
