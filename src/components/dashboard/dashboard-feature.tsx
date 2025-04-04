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
    "4eap7V1rsYkRTvuHjdfrz8tK76tEB6SWUELdQLHVEEge3KRXkAWVry3hg7bxxpMoVf2LUjtMcRsALQYmgARf2iUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dzYtpbMd7NLLv9fNkNJrRKbmJpka94fuNF4C7xzLEnWctmqpZGPy279VzgRPi7Nx5H2vczpPKM7Sy5szE7WRx1X",
  "key1": "3uLriJhMtuTw8NDxYP4YqEsz4o5VQBcN3CAwcisu87nQ5YKdPVPJMbNm9Wrv49hFKGD5NPbanS7qpfbHoecLvAHC",
  "key2": "5QzkXyG8Ex9MHeya15kGsQv1bnxm66T5e9akYB1dtt8hTt8buXrEoV8UQZvZ1wWGb8GngFY8Pp3oqSok2L5w9xHi",
  "key3": "f5qte3p2ZMvF7EsjQw6qSKCq1fgF28osFofvqEEq7icThfpwnUuonKU5oxdSuUdyxyrEH7nanwKBuoRqKoKXyTH",
  "key4": "3YpQG1GgkikfP5BKpWbhgR8XDzE1uW5NLUWqySKXwnyzdHWyHgvPtemGCxHsZCRQSoYE4cyJUkuMMpS1Fa6rCQSq",
  "key5": "3ifacBnctjL8ZhNVZvjNvFB9McA4kNio7m4Y5BN6r9sTrB8siL7S45k7FHhUexveqqCAFe4c4m6cT1L6E8H9FfWe",
  "key6": "23uhwBt8JKvGamhBvaTzf6zmVoApGz8HUeHvvFG78RG6CDfQHNMZkxDrw4RPZ7vMMnThdccVenJVF7bdrCM35Aiz",
  "key7": "2qyPwE821LyYyo9sPwSRZcoHuhHjJ2WDWTZWG669ZMmzBjYLEAWyNquHr9GnAgiF1GmyjqhinfFuaAni5pQAZZXJ",
  "key8": "5A4Tw4fmnf9e7TrYPMTZDPdaPq3ncA6LzWWEpp2vvMvgT9grKisQyDpQem1TGkHsPy9wzCnxcmU27J63xCkQh6Z8",
  "key9": "4SKkqC6RrHeDmvwTVRxYwmZJNzLGKsyDnK1Nwt3EqWCew61uiF6GC3XR79UgkX49b24fGvxsRjuC62VkCRL2CUiJ",
  "key10": "48Mc3tbhHw3qPXFbnxNEUNRyAyrQqYCYcb4u5sJNSnP2DBDi9xDyj2Sq7uk7q5W67bbY3kmrGGgeeFySYQ8qBahN",
  "key11": "4zcBQgAGCTwmwkPpZbGLP2ehcG3DtiULshrKT1XtwWwY9deVgh4eaJcPBr7dBeiqD3zKR4DpPf3JcKr2dWeZbBc3",
  "key12": "3T8F6Sr2LHeH26U4XunptHgUSH5GBXRR3HaMWGbV3mwjgGLfuMd8WaAKVUZGgzWxL91SfhKBdBeqz8nFnoNZdcTw",
  "key13": "5Gt7fY3JuB14fxJPZzCmN73sewoogqSRYR69sHWT2qNL5oJXbXXWmFGr5GGz1QuqcyDss3Njgd1HeQhcHSrCmdiS",
  "key14": "3iEu5Nz5TpW7nXUmy9kdrXghua1z4ZphX2ZuiqGUU39YPBHNmhM1scQXEBxUuc5PoGeYm6HTSMBYWPnMjsnSoedu",
  "key15": "2XAgCdUJQoZuz7Fp89eVVhf3JmyY3jLHrpXgSekrZDftjW79XjwdKNwvtt6wRDh75cBap3VuQvfjYZrWcFdWRBLq",
  "key16": "3d5rSe8csNuaXkeu2xCtM4gi1tSma5RpStH8wASEbpVF4T8gmGBiZ9muPQ8KxddsVtMXTPgUK1PZPUiX3btFRsug",
  "key17": "4vVmZrMMF7cMqnNz9QeFmk94xuCCE2ziJyKcSmHmS2hmzK4xui8yXXUANXfAYbLnBGWQCTmgVYLvY4exqv2qvHrG",
  "key18": "2yVqo178uc6DCdAAFoeJBJNKK3CunSkBz9YRa8z3Rahjdpn5JTC9AQroJAxhtUtUnPHHFt4bZaFadpZAeDu4mNTJ",
  "key19": "4qrE5Y6Kw3a4UmWD1bef8n6MXfbEEnbSBL5SG9VrKezNHuaJfJrSeNYGBbwTpvrT4DoY6HKe2xN2C84GF1sZJ3Mo",
  "key20": "4JzLinBDGVJRtbwrv8rmaF56yFwkFURNni2LnrZ6wULEWJHWA6gqbagMAUFML5NKn3ahj7VwrbKAtUkfBmDmKQxY",
  "key21": "4gyY3k5kpLoUtE4HcEDSrrrdr7vC9kCfqkVMEgRoTUCs4bWr21GDV9eDTT22znayoqiWChqvZ5WRJNPNFiDacwEw",
  "key22": "GdshGHKpaatKcZRux3Lqn973hk4tWTsEdJWbNb6DGsepMykd7Av3FWhdnoaGsnenqHQykySxcbkgE6YhcBNHBMp",
  "key23": "5d31y9ZPRFm72a1ybgqmUrkJSKFGxzAnegYGsbip4RJG7gwZ1x3trCwoMrrY4MhrjeRc6uRE87xbfX9aokk7MZvH",
  "key24": "2PKpGUJS3WpKmNPBde9Qtn1aS6ZHAUwBsDMfCWnZG1cb9aB9gdEiwvC4qzegxidcHAhWokXEgKxyFbj18RgEf8Xe"
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
