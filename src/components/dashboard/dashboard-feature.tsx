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
    "2povmDuB3DLQdMUG7qMiir5LXkBJVdrCFfriXjLYLaLiBshuDEY3yXeteGggWJtXsJoqBXXaEuzQtGntsQBp7P9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKqXxDhKo2u2ALSMBYgBzD3wW7TLxerhkbWTK4SiSbbYvxeba4UmAfBeoTKUuQ6oQsFucoRMF7PwrUSzgqwrSE9",
  "key1": "4aHUdH2JuSirs22967Wi5kvsocvS3pWC7ZEwwkKwDaiy6M7zme2c3kZjfJACt9ynPAqp2A9sAi5rHCYBS7DpnSHz",
  "key2": "5kdSKDapfG4XY95eaHyUoGqYYCxRj2HuHo3GCwR4PExXdBSQ1r3JewG768nGairiFF6JjoGWXjGZrFDzq8ukBnPf",
  "key3": "9i2JdNkFrdUvD2XqiKZbid5JyboqwVKvHAjbZPcTAL7nYE5sFkPjzUAQv8AtpuEjevjbMVxXqZBpNji3UpQeWs3",
  "key4": "44L37X1nwKZkgsWmXTFSPnzrHaJsaeL9cVDGAj9Rw3SSUqqdKJo9z5wgjtJxhMUgMS3AWExJkmqPSLfqiiy411jh",
  "key5": "uv36dutb9w2w4bujKdwFRLLqLUPSGBzQ2VDfipwDCEpRYrYWz3YeBa7Ej9xsamycwu1XiEk7vGMkGhmTVPEWEZB",
  "key6": "4PkxUQ4wXh7BAqxsbu8q6CFH3QGxK4X8RRtvPSHimjU5VMFcRyquy3zkarkPNXPgEXXveJBy4XZELeHxQs4p7eyL",
  "key7": "4gNqGcsqxZdNRa25NWjFdWaH3ommfbr7EojezYcJiLxLj4kfbmTz9ogNGCPreU5NAz48p7QWc9yLw2i1kJ3uCKaT",
  "key8": "4XmpWnuuvPcyXPQBvWStRZj8kmUayYe3vfRxLFtR9BBHQFUft5DUqQQfeks1dnvSFtkYeCaHJCD3yoDFoaV95a67",
  "key9": "3swNeHKXwypCXmZbGEZKVDt7fghuP7kBxPLZhTz92AFaK5mA3Ch2sNQKrFrsQdCxb6CUeW8YKuueDZ8eBscqqrFc",
  "key10": "fLmjqsAqJaL1BMo2J37mx7V4UHFjRgU588xszqWNYQji8AHma5jqkSToZvJ4wcjfhjg8n5rUJMFsDymYMsEZ4Eo",
  "key11": "4Uuxs7vgYLySfzVvejwoxRXyeVxxbuZa8VZa8sg6hsceizvU8rwpBk666aXAZGkurmgrsBAvKJi23M1KRy2L2HMk",
  "key12": "3pQkMrdxTC3vQtMzQNP2RKJheLNoNp7hfitPuGpWh7TXdbG2wSH2pzTbCLcDCYv4sXpRb9Bmotc7pdZsYov8FE6R",
  "key13": "5SrYLYAadEsF6iBab2XZbbBERFn64hqzP6wgQQpaT2JxjvD3gCh7syxiXQyw1bEvyrJSECsVv48LEwXwZ5YEzVGz",
  "key14": "4DJCgxN5cE8RVGF8puMfejs5WdzPLXH1eSqC5bJjMHRbuZyBXkEYeGGRRinNgHQxYyXfYDEgNQwuyEFLNt5EsWU2",
  "key15": "4uqmGCGRLKwf4TpNGGxdGkxDa5p11ixKTZYi2sUYaba41kS9VVKCKQqHkWSvjLE9oL4vdJGvzp1RSi8WXHn2n3cn",
  "key16": "jNVBsbdBgptCnejHEUKRBxAURyMkvmSCiHYTqQrNfnYvtmapw5xAyoeEw2KiDVhrdtSSZ5pTekiUng2PK2n8pxm",
  "key17": "2NqKQ3ymsCkniyj9spQquuV4jM6pPEPG5HxpmKSur9JJjH3q6e5wQV3KLFn4owFLE3GP8tBnb7onZWmNiTCVP6p3",
  "key18": "46uJWQweuM1VyPFQL22RvaCghDsY42MjshhcMarEK3pUfQMcnu1yVSVjcQdi6X16J1gHVQGFUvNMvdSciV5J6z6d",
  "key19": "4zHwNm8GZr8VVKgqhTw1X4gEUstphXvSjo2hSWjDjS6Ats5QPM8x2Ay62oQ6uKt6eDvgyVsJaUBswkzHN2rCiSLZ",
  "key20": "2VcRTJc1BbJTiJg239BMzwSFpi5WMZByrxLtD9ZXP5LEVPEGG1xbooPzYdZHhwQcq4qhSQZGMbbXaWMmYs6H9S2j",
  "key21": "3cbHpTEJ8XuCzbvWDvJjpSXV9NKUA7x8KH9FbQ4K3MszaUAHGrLVaACpqggqQRKcWGMrzY6QqVhmG2VSTu6E9EAn",
  "key22": "2dWp7SCCSKaPZhz7nyp6Qvf2UVTXMWn1ZYFyv6fiePVcy654TqbqKgs51zMvjjwDLA2TSfTxZVEiWvLDJUdDEDH2",
  "key23": "2dqAEJ7i9REcWrWnjLezThkKSHGbTBQoTN3DEiPYt9wZwrnhNrTuGcj7rC2vjnc6iLHdnN97U2VvRvQjhxdYfbBh",
  "key24": "3jwXYkq83rrviMFeqxkHd1cWBBX4nzJBWmeEU176aEZ5pBdnRGz6f1vu1PkUzHF5ZUnXQ4Ksvkp7s29cN7oF9W43",
  "key25": "5JKSsu65jGJiSRXdEAfWpVUs42ToLmpNPirZt2SBUkypXDnoBvru6bvRhwDufPumzGp9kG7qGkqfAjwovNn8wmUT",
  "key26": "37JnhMDnFbWnhELsHc3UVcBLEXrGH9DUgAsPM2tXmUMk4Dyq7B3mu3mRCSr76sgXSXygWTCPunG73q1GuxuhusH6",
  "key27": "4wTtQsNNvKvmgxTQex2awfk4qKDJHaMcWfRaKrZaKBhHZTa55i2EgbfSkKfkP1vQLFTs9c6m3iR5cH5fH6BEU7CC",
  "key28": "u8un2ueY4n3yahQgcWMUvZqrUXHTvXFC4Mp1vTCY5cdLqL3roirSriHBxcnm8G9S3DsPVfUUbqjeAr1H8maP1Ff",
  "key29": "G967RCmcXCbJyvuynWnFa7D1zoGotafQRikjzNYZmuFz1EPiCGx6steBmCqzec1BCFJN2niAu1Eo2kjEgFLF3P2",
  "key30": "4MjMGrPxAkjaqoNo29ytv6CBuzFR63NtcgJ9U7BsCCTChkdGKQNtTVHmFT26Fwk6YXdUXj1dUscYjC6D5hEmCzBd",
  "key31": "vwnjrgSiDevLuCGNLHiWsWZkBCpidU3rpAENhRUxewFwNuQjRD9CMNS3LnPpvgugZnMVbLFtM7y5CaPPjF3K97X",
  "key32": "4Ed2idizWe1QGsGHSNpsfQMHnpvk3csBRhqfinYWNccmeyAfN9gbkCFoBimJ3LrNu3iXVxsSq7n6kXLviZMn9ftK",
  "key33": "5ZUzRxjvoU4K7fSMNLDKSyvoPuFM2y9LKB7AjASYyPVk9hncqVpgGNyvhcFYQBJVspbXTaJHHm8AaxgXL2pb2H8Z",
  "key34": "3qEyzgEnKVuqYnjudJNBbZH3m8e2JVSEkces4dLRUHsbDc1Yomr6e74qMQYRw32xJgz7Jso8S57SUVfn2mTM1x3E",
  "key35": "2Ptk1MLJJpX7H58E5ripFTLsZUkHjir1KoWJjLPaWQMfwEkuDmd5DhUYhoxiZgdfr2HXFj7jnBEGSNC7kRJza4Eb",
  "key36": "5guPiZuBxtbtGPhEdg3hS8KHPwGYcSVUuNPE1jGUFKNRB8k5g9t8iRDi4QcXM94v88uoJihV3xKpzfP2e5eED8ky",
  "key37": "376tVj65QSVxZqF36qnxhapp28TMc24WBqPKt723QYtaVdYQcwkjV3UefN5TShHaNNaJhnMcQMqfiY25r1pmNPZd",
  "key38": "4yXatGTsXGogC9LcxHnxRC8PvGhk7wEtkU5jHhS9GyZXpwCM2PTPAB86DAEtCDJ5UXsDmJGL9dPZQAnYJuyWsbBV",
  "key39": "2qujXzd39smNt57XRJWxw5QfRTq9yWAajz27kMKvyzKMTNbMbW44QDqPe1BKGEfCRmpaczMC1mphXTS3j8CVQUqh",
  "key40": "gn9eFBw8JgvQeTPLzaZzaCeoiuPkVTTuozzHraXy4gq4d31b4hDc3J2VomyKmvXBKubWKE6egkqGwX7iiXxXFd1",
  "key41": "5t2T8Y8jKdZv9HfksBo6yWTYXwZKg3wFaj74UMdTjgSdp8pRp5nEbPGQ2r6HHxquCVyDrWb1G57G7nE37LtB78WB",
  "key42": "5D9jzaGtXGV6ua9Mf167a9iYXfvYtG5rjrEFXyBBWjukn55RTmEjmrdhcuwdSdxcjKNDpNGifTb9jFc8S8rEz5kU",
  "key43": "VpMWsAEaP8vWEbwYpTEFMmSsNtthSdG9DzT5C3w3tgQYjjVY7dhVFdSXH9GPtkds8sYUjnCHRhdzxGEohavhajU",
  "key44": "QqnedWVZ9iAgU6PFFuzrQPa339K4f7s4B71Gpm7AD8KiwiCFagm4LuN84C2PNgyPBkTjRVBMvTPNdcvyGaVwq67",
  "key45": "4s1TZhGZoFhTKso54rdHazL6UfjgsMiUUfM1LLdSyWP3e5VB5aiT7pabZZyEMkqvkrNWaCxMiKndkHgZQAn8Cvfp",
  "key46": "3N56JsmNGfwxDdX7GfP6rPUeb5RkfwSsvQJAjd9cG34z3A8D9pGZ5w7YkjpsXTPC7744o2MFYR1dh7R3BHbBbkmW",
  "key47": "2UDd5MkhJ4gLwEeFzMXzwZKx7qjoNT37kxPMBc1XEHbP1iu7Xm7EaKBDuvJNZzxsbDb3pkGY5YYiRXGEGrTd6GRR"
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
