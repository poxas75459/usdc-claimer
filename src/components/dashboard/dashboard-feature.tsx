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
    "p92dfqYegLzmQTDjRnYwNgVWWfRsdgko9sDrbNd9BkcyScR6jpGDMoPuxK8QJVHSyryiwB6R8uH2MS7FdT8KRpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ahit8BQS45G6CdHn8Jn2QN3wRCEexK5mFX1SkAfPi7XZd8FP7fLTRHaAdHjJKJd5kM4nDXnsu6FTjSjwzfYKvhK",
  "key1": "4eryuNHacwnEk1jkHfmcqz5NYZ1C4hrmQNEz64XFpGNex1kcfQ9qL13AE83Td1svX58BKvFWUzME12BNVzCTUWvb",
  "key2": "VdYQAJqPrCzNzHNYDWzvxYzR9b7TT4urAwQ3unQYi4ZT3Zt1Bh8z4kM2oBokhHK93VKPuqLhQFGfc5eUpsba8Te",
  "key3": "2pMzTvudXqXiDJGLftAUeF2zKCk85icmwHfKfpkdaH6nw8RqKKP7x21iFSxxpskBksfWdA7sDzUD7EHk15e45fzX",
  "key4": "4f2xAsCrvxnvzjzYos1Su4GRfWempaTKLavnsz2w3DEGqDbZ7qvmWi6Z5tZP13ECEeyUd4oATw6UuTxBhP2H62aP",
  "key5": "3oXqi1uk8ZVMunAFWSM6d3sHeadgYRon5aD57CBYK8qT1DTzvc3syXJ2SRRhh2KkZWQZqkRxMajz8dEPVWf4tgex",
  "key6": "4zQdj86b9McUgxhVC6VF96VAzPsznp5t3552n3PfrHRUsYCyyR5v1mKRKnJvW9h9a3mZ6WkDZ2yjeHEyQYV7oJvh",
  "key7": "5HjLwsYMkc3BgW3AmvCT9FnNfGCHhL87LrFDsuTJiJevpM3g823SXBqnS8sb2ibUyQ2AhPqPXNyXDDtfR1ZEh4t1",
  "key8": "4jMukEYXBLUQwFHpLTD6caqN5UdxEm5Ku4yFzjtrnufYibaDU6KALPgeWrCDorEk9xpKBe4KmMLZysc6GPmXXPwH",
  "key9": "316ZB2STV39JVZFwVEJka2FDP1hmtQK5M6mmbseuCVbxobeub9W1qnQenM3A8v4Y8MtC4sKJbf74wJUqTczTQjye",
  "key10": "2GnfqEoybBqNfPCZUYBkrUmXUg4pDA1RG2JgBkF9BNAENaKYv1kUzUX1U5EG492Z9AkmhUd2wrQDmu2PgVgsgZXJ",
  "key11": "FyPVn7BnXurYbhAAhEHbBKHbF6khQ2fqK58Fg22Y6YPurZfsX3wqMjQqYtN6Pf22KanjQPubag71v3D5WTCzhJt",
  "key12": "2aVYGRgtLQQZHsWQnmvK3dUmA5KHAxxUiftpr7g6UBsubkTfP3AWi5ShTmocf8Z42VotKi5kqdnKcQm8JNFX3Z4r",
  "key13": "3qivTEcPGoofrZQd73cVZR7Me8sRF2EDSi4wdw6m5GT2DqLn3U7A8sSMm3vAzhMTsYg2cGoZvYVrvAN5q7Cx5rT9",
  "key14": "255yQ8k47BBAL2AYiRsjWjKZHndh67v6sezEqtxq84zRHNnkLk4RvmXhtwY3q1wY9aaLK9bgWBBm1EYLyTkeSKhR",
  "key15": "56khqZFhW8WJDHKUzPWpNhKU5xQFqSuXh2Drq4ZeFTdAqay1a7oysRoBVsgFWKbu9XRsozM8Poss4mcEaHPY8CYy",
  "key16": "4QzPHLH1zXiCDrjRuDjKBMJ7x2hk51AkmP3vxMirjCyHiAAf3fFCvgAdK9MJFDjWa3xfUt8Te9WBYrap7PWnbdfq",
  "key17": "2eytCzG4YoLY6H6EU7sVx3ZoqkTJWnuqkERkiBXkgcNAUkRvBjHnteJhWpAdQBakbrZAgRB7jLCWN83VvaFmp76Z",
  "key18": "JnL4uK5FyGNJ7ufNcorGFvjiM2QkTzUD3Xh5UV864sHqGnTgExndZFeKfuFkaLocEbdvjfhhy9RNrswQMarmxQU",
  "key19": "2YMf8XSiEDYKjSm5CtNrXJj9V8BHydkb98dxfdm5YnT9GquAqLcx3cUU8iGhZH3D9beoEfXs8BtSpJ6FdSYL5tzD",
  "key20": "5PtRhWjTSerQEShvpL17LRFhmPSHoB92sBhp7ss8wFh91B9sgsvUqDAX7cxXAoytVJDzJ9VuYMzYyVrrjKsp7jgT",
  "key21": "2Cp3qBcuJ4Kq2KWW7jdEe3Sfpzy5rFHv2S7rmiYQFEdHMcuFdapAd5NsGPsJgRweQcGZiGP817b9dd9747XMXMH5",
  "key22": "55Awq2Eia4vRaAu8FXvAxbFURmGFFGXuhhueMENdAAncWn3ucpzSsQZCv5dUf84AFfHhdB3UUkbHKQAn1G9Ms5y5",
  "key23": "y2qyFhWDLZs3ybFkYK61w4CkejWh4A5uoNUWQ3d7PD4cR8DNohgsrhpXDxgemmGQ7mvu9cd7rMzBGTttzBaYpSC",
  "key24": "4XVYPQtEVi2Uo3vxQvCVGVQg9rASdVN7jdmeg4mqFahrenqwfRNrXuG7Gjn2Zzw3myLwEbW1PrV2QTNDSYCqXP5B",
  "key25": "4Nkg29Jou7yu8CNGeiVuSovUu46tNhx4SFgyQufGy6SWHPt1DGGnygUsvvJHuomnGBhYmMHCuRrxzeXhkADoYWo",
  "key26": "2HNk2zFevM8bprbCijWA4CieFSz8QViss5iWUL4xiGLZjhnqYVdA95gGHsNrtQHaj19VFZSgXYwCDeRZhLLj6D3X"
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
