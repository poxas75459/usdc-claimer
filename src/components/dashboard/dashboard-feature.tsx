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
    "5Zq8TUaXxeaEwgc5XPHmfERXQKzvvpj3fVaSBovUhoXiVjnxn5CtZknKemUXvfhX4VhzeqQrgsMwTVBudCZxukLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iV7wSbeiQm9kDKZwvLDT9CM4QSTwuzbRQLLvPz9zQLUPyRk5xqeQbaGNK6iykhnfeaJsXjyyEWduwbWc4JFggCd",
  "key1": "4sTbFQi21C1ucAoEYy2trsoPmESH2uMXMJnq3pfub6faaSxcffDMPmMktjEqLHdzT7NgWhzaRQZPZVPAMJTPEEUR",
  "key2": "5zLNUv84gNKcHYNhBoyd9cF1YJUxR7BRcSQmpvbnpPY6Tb945zBhxLbyLUYZ58XmM3AtULqNK5hNM92NrX8wbuRq",
  "key3": "4LooErmzpGPSCkuHgGGXDz9mN9mcEiaMQM9WQ2cHo8SPNFXZ6Ph7Nuk694KpCkAQqCzBQxQ6X2wFgFVfD21KtN7M",
  "key4": "jAfSjJkNrmEmj1H9N8iFu4zzLKshnnF2aFN6mkvyVyPMtAXcfNXNtbXpvHV4u5keJYdcuByeCMY5kwTpgW9RBV1",
  "key5": "3FVpxXHd1YYKtd91tspDQT4jPARGDwMauApbriVLm1mqLjwY6uVt4Ya9eMfRXdyXjBd2T5D66F3HUx2xDD475R2j",
  "key6": "3pzX4TSRxaZPmp1v4XUcnpQnqhMWcZQJ5gVUTwrYNcMbXK11f6xLfeazNKqB1m7HKUNj3PxcA5mDF5GN7LFoyFpx",
  "key7": "4GThsfDd9JYjA9ZrqB1GFCS8UzudEyWghqUgyyxVXEh6BnLJw2euuBZ1Tov3NeY5joyxKoEeRHg1qHXKnVDXWv4v",
  "key8": "4PNGBixyR2nZkVRu6fX1V4K1DmCc7bVqZsRYchCZTDfsG1HNPpByTq7vGS5hLnTZqFxPd8Qk163kYdbNAhXVSx2f",
  "key9": "3NJP7pZoenyiFyu8rXDY6JZS94UXtxkWVRZMKsEQhFQrHNRtZWJuK4erWbiBpQot4aS6U1tiezwkgnkTVd4C4Xuy",
  "key10": "3PXVujqLd2UmRV8WueXcfrzSNMqQqVanicBj8neUiw1RY12TjTY1cAMpJ8wkYhcRPNeXAXc1k6EkkcsZC3YZArQQ",
  "key11": "5mFjnXPqe3Ea28W4KmR7jQXgephTw8bL1qB3wRGwPsCy7XSD8PoyP1hj2p1byScNm4HGWubyouSEnVXoQKJVHvCh",
  "key12": "3WzYRuCDqro3EHVrqcWxtEebfyuntm9jHF3eXZTELKLdRD7zxXGZJE7KEqPDcfj5DwHrwPvokq3ScMANdcNDW5Ag",
  "key13": "k9AGjbqM2DhNAcqHoiDwQpeSg6BQwAFQnK72vJ9Q4hNn6kGYChgX8z74DPosgBnfuqRD1poEPPvsDMNsUeT1yoN",
  "key14": "5xiuce9sgXTmxKsPidW55WKM7VmZH4ZNGc8vs3ErrvYKxA7tveMWyN4hBDEgbW4ybiQggn4JgBHnLwwyP5GYCmqm",
  "key15": "3Tv1mvCDYN4sjGQjJJcUCz5ygFKf2C8BoosHuL2XoW4snBGo11WPbRaGEp7Vi2SUT1W6G8ZqZisruGnt6pXCxsji",
  "key16": "Mc7a7znfDfCotFXduDUAeoqTK6GFENh7gk8ubDCRbD3ay2wU7Cn2zEqgXuBZ7jYQGGxQcRGTae77Dx7r4MZWBf4",
  "key17": "3EtLRH4qXJAerVu3Pyx2AiQ7f3SttTcZajNRntuz4VmhoCwZnwXUf5nurREHDXewPwDLahamWTVMY7ad7BH4QJZw",
  "key18": "aaC4eLw8B3xNwWBWU2N8Yib2xNvotkASPiSnqeWLgnsLFnNPyD3gSEKXndjQDAmn49QCZ7mUya3RpNd22GWEXWd",
  "key19": "37uAsey1QS83XCCL9zk4cg2nQ7pnPzUAUFXrnY2V1ivEPFyPMNkY77F9tmkCChScLyA662R9hzD3Wh1WHR6Ct1JY",
  "key20": "2W26HSZZhoXkutarXATbTMdsA4GsGuHafPE9dbSHgMe3hwaCz2j5MTCB2q2XxLkqvqQ9phtks8sgNWfen818b5Dv",
  "key21": "3obATv9kuGQDWMicZ9tPTCVCKoZUaKsVX142hdvQA6fRBSQek56Fv74yrouEkWdqWjrzkJ7F3772a73xoMqc8Qpb",
  "key22": "4HXU4ERciV8sdzu5hNfcjGggN6oMAjB8p3UGgmwKsBukoUF1kyYfhLak6iG5aD8zQeKa4Qo6jHKUAm8FG9FRpgP3",
  "key23": "4dKQGkQd5SoxZwnxUnAchxCXnNzJDFfNJ5B9BZkVpjU2E4w6aH8Nt96n6hwhxnWhmdELPQTt1JpzqjYE7xGEWzDE",
  "key24": "25TB57cgtrKm1zPVAzm5svee9bDuk5EhqcTKcLvDUeHvqvnLoLX1KC3J6TPHGnhZRyEYkP4eJbpLY46T8mF4JmV4",
  "key25": "5WEgX4v5zHMmTVEooE9BhcBMuS2pHi9Nqw1KMg7LyYi3GTEQmXwvmvUqPPmc6gd9sjkvJDZwG1CkCFRw5EY6a8p7",
  "key26": "4kSoT21aPvAtDvrvfBQxTRwynpRvy3vxZaJxqKm8dpZajzjAVka1V9nrYipVvTJjHwWaVPgGRzYSjCSMUyqSkgyc",
  "key27": "3BLWqEouakLjgQHF3zdNJHh87jn47fWk9f75VpVGFKUFZhM7ks8QbHHMWaThi9CeYqfMhttP4VC9hU3gUvraG4hs"
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
