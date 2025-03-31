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
    "2avDVrUi6TyHKiFQ381R6Mx7vzScEgvpJxfS2Ed2gZWXhvHTBssE5sYvpkRX8tcd1e6kA2WFeg8BzECxEFpbMp7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cFzGRaFpmSFeR4pGMwTDi5bSYTuwz3ftADU7gKmPqecXY9uSSeLfHoQrtdRE4EzQJvfiVjTANpExWkwtuYLoPG5",
  "key1": "5AuuezriuyUtGjd4r3H4S6WLTyd2Zp7s3DkuLxHrqoDLMwLKS4rkygQuwduJbFd1DnVgSSTbNRS8PRWWyL6zNEeg",
  "key2": "4s2oLQx9s5Mq22gBQqn8CCqbJ3HJYbLQjq6W3aHoosoQrxnTTgVCxo6SnGdQ3CydD2tNFRzzm3vFnvLTFVcoJKLv",
  "key3": "5LpRJWRQGvYfycrmTeoMczc7tHK9fjg7mHE2wTU3crNdKzuc7ANe1uqHwW28uUpsG85jhc11zhf3S5xt5XueB31j",
  "key4": "VRazS6emUBQeWGZoLU1F2a7pHHwUd2LU6vjHTpME2wiW7HJJ9cmRxfpkpHNBvXXmQEbvdwADMXehNbPyQ5xsFeG",
  "key5": "4GXqtiKGSoUYV2eewSWUtwiuNuKTnzBbuF5EAkTgbxgiebqxwMJUVyUnaRkdtQf4MBGXpzeQYwKrBy8EGL2YegNi",
  "key6": "2DZd7xMWQSfw2ywndbDpkEMAXkqwDqyzp8Y6XuTjyjxhE2ne2tx3RVyyikLrpeEb7WdRi9hg3CLoqJpBGVmFxmqw",
  "key7": "4sQsYxCxuTA5VW4R8hsuSvvYZf4PFASbo7d3hpdmYKJnRZPeUQA6Lk7q2BtzbBk1XJj44Dpg91mvuv4NxdbvBbsW",
  "key8": "3fGmDiDytUqzQzZGmmv2ap3DFB2HsiTVLdgbkVLATojgN7buAfNXHvTit7vpfYkVPPR9webpMeHCHJsxLcQB1yDG",
  "key9": "29mNUXxUr84nUBZv7AMzQN33J5DEfx9vNLEMGqwCg7k6JBcKjg2JueaZ3y88kUPDb6kHYcgEcJynGYRn5vMaMWZR",
  "key10": "5yPZLvSdeEpMNRfUVX3UNuPjBiHXvDP2C9kh3mpwaqfEFd9HrjPqA4N4bzSFebGgsi9VyUsdJUiucu6f9j9oiX6u",
  "key11": "4XH1DegVKbk8nngcpGfsJxiaKCHaALLzPoLzgHaxJ5mZLP67BGeVNJ7PSxhi7BoQgpT5y8SrVG6qYx8bwX7bTTBQ",
  "key12": "nFgmPhW8pjvTBCPkBY1NhzWJsDGcmafHoPhuU3PUYWwQu6HQNApogmj7qTeUJGywBVgYthtGyuiHSgHFratK2dB",
  "key13": "3hMYjjkTLtQYWKvH5C2YZ18qMt12iTuSTxFbQfMXPEj43Xa8BtKVQoWkrLGtG1hbPidPW6SDGt1r27PsfJwpu8YG",
  "key14": "5HGWq54BTNuTV9pWGRbSBzjGb3ahz8HAfN9kYMYyUjKg2h35q9SGuBto9D4s1hGNwD7ubg2Yjjcxuh9qwpDaXS9G",
  "key15": "28iy13GDe9d3As4vFEfqJHxjoEE5wJ1vEERY4V68QPyFdRXocttiErNCn6AsZ4rg7c9h25gh9UYdf6NiecubyRFn",
  "key16": "2jGctPzpKbmK4ausFkcHWNqqJLprXpJv8B5zEhgiDHxjmw9KQkcwP9S2ePVEv4LaqfMeawyJqzjAM3UWj425uBJY",
  "key17": "3qqtNgchfgTRLw4VhRM1hryRc7mhTvfhyeL6bwF6zKy6QzunyH6eo8oR4giAc7SDdsKr3G7a8D2D3M3kHSnECXcw",
  "key18": "52gN9DJszyL48R9ToigN3TjHh9GCTZ95QLsN72PZrqD6gqd1WPMaZkm8fatE1jF18qgx7VW6mv85vscHa48ZjTe",
  "key19": "2YER2MdnzFfJfty9z1AR7hVSgTxxmCCB58EdFw1bgxMsAjnKzXouW4fKDCeZBt4PvSSC1RAYkU2jyzVWPdPrKBz",
  "key20": "2YxcbDnBUCrSzCtSJxwnJAJft1GjpNcyrpJAabtqG1CPj32nNdvtnTqB91FKs59FAaTTDRpQdEskCPkTknMT3Bg2",
  "key21": "2763qeL3aPJaytbEyN1yFZbKS2vjaBD3nyS3oZdGJERFmViNiVZ1BfDzidCVCyppHiybhrqGNzmTfUty7fenm8aY",
  "key22": "23ndHr6chM9f7Uao4m71hRSounDs52dDjTD3me3M1xHK7E4sZZ9qdVuAvWNhZz4jsJkA7GKXgEBgC2ziiczXEATM",
  "key23": "3JeNdKTVCqAGv51QATkbKpY8UDDSBj2g9Mw3WrZzvms9VAep9czD5GAzwCneJLZn8Yb8vE8ghMUG2NpPdojPF3Uw",
  "key24": "AdL7jjMFwCeXvHTRSmDTijTMtg8NHd5GaruFkSW1kLoRwgUMyA4sbdc98H7D3EgP6FTNXAeXTGc87WgLQKdqwKD",
  "key25": "5662yxpr1F1RJwiSP8LyLWuuVWdHCym14vJXjDqedwdXbHFn8nTJBjZ4vSJgghs9ZBMtQ7d6Vzp2ShjetEXkEff3",
  "key26": "3FQrSibuKA4hM6d5jS1s8shRJJKiquJFuVJQqqPJu56bkoxsVLJQyfsQfaXn24h5fe6km6SEuwHvEQ8wG8dr2Mgz"
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
