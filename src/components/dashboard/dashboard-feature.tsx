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
    "3ZZh7JCkdya13RCW9ygA48FhhJyQuLj3UmUV6V8fCVmQNzEUaKzJQw3MoY9ToSRKJ1SeUERNPmEySeZknaLUXGzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U7dGUrdj6RF8zgB8aXEpSSraqHNYpRAZfShBnPzLYiDaki8tho7f1uk4D94KipH2y5yisqqd428tG5DxeXdVvmY",
  "key1": "3asmFCBTm9BgvJDoqEGyAyCQawtkPHGEAeCmoxRNpYTQ1NeaFMpSkNJJDNm4vSnwnEwRskgUgMqSWAp5nyuAtPS",
  "key2": "6PMsGLMXyxCpokGstksDANpeYcFtQnJw9uiUmnr9YcCAxGG9C9DS5y9QefQzDWCptZy3Yq5rgTfMRe1vAFi8Toy",
  "key3": "2P58sp6WykXg6dvgxyxrExDNhLe85f198UE9ag8LXux7S8u3Z5HguDgGwB3ozMnLKLYTiD8Hchhf2wezR6f8xyHD",
  "key4": "4jY5JGez2MUD9bwNshEcuvkg5YQxdrAubDkNUfQgzESBdpfNxBMBp3RH5Wm1rUumq68vxcf6JQQjMKw8kgkX3mc3",
  "key5": "5BaLqFaTrmb9PMMX5P4FubBD1eKTG3D9MFkjirNjdX1nLHB6kzm1G9ZAHSbTkbexjie6FHhiDT6E8kzkNLiMHrtS",
  "key6": "53F977kCiPc2xPjpFzLey4MJUfR6crWgHX4bg7vk3SruP1uGEq5T2iEQz78pHH9vHLLarVVXGAYSxKfeMHCheVXM",
  "key7": "5r1nKbcdhhbX7RrLeURbx5v3VWWyUyAEQUfrreHCMwEroeQNrENS45RRRZPqE7F6mM46HNdorRb8h6HsFVcw1SJN",
  "key8": "4tcmSW9HfTuSVJp6QkkjzwS8XN2TGGuKdgYT5Rw2ohhTYefx9Q5pA6t6Ew6R4xidUC63WU4bqPFodDVaNeBy5jqb",
  "key9": "21oC6s6vmYTRBMr2z7BHBMS2r7AFymXjqXwU7ZywvnXftKWNcEVGVki1Sb9asDmkZtBmgSmuzYFaCwveY3GiY8ur",
  "key10": "2HSTb3msnKHJ9Wd3zVWHMmZTcmibGzNrf65XhYpANJKkg1BLex9nBdwQdTV17LVhPqh6zFbpoLnJJz7QSP1ZPFQX",
  "key11": "441VYHm4amVeUJogRBZ88KhNLXgbcrGKHt5SkCxgqxWBXY5n9jWuyxZB6cAoBqiCDAPgqZQzFuGhqnJcoKgdX1EC",
  "key12": "hK2rWKVFE569YeMsJVKtApTLLKrhM1D6jvjCwj4YGrJGh6xtEKXDNinyfbPe8bPTwnjSZj8NjwGHkwvaw2PzFYg",
  "key13": "5DxT8wYM5BaXZUzr144QVuQxk91Si7F2VFzKGWjxEP2TByokXe8bqffJaomXssFRdJ6YMZCkNpe1rTBpXZriWZXJ",
  "key14": "4upxGW5ognxG3NwdZLbUaDvysVE1nN4JxLh231rTbJirb3eUfa1RsNJn2agYvZG7Aki1iKr8n9c782aGmrgP5pwe",
  "key15": "2E7g772T4gvWZb9jLgefReRrqq7G1VUwGW4QLV5En5wUwFSvJJxhp5c2G5kS8tQFZGCLn1HP178xNGW8UKTiSTcv",
  "key16": "eHY98dhAokhoFjSeiCb1QEFGz9Qh74Nar7zyQ6VMXkL31Jn2wQZ6bKb9rAjxrZdiyNeS3yk6xY6ERXdG4A1vtXd",
  "key17": "5wD6HepV9gUx1vXa1eoG4kSG98cN4ohAYP9ypKKoSJfhWEfu8iSa24czzeqWjGhyJbvGmHZJRSXnHKfnCLa7kz8h",
  "key18": "2t9s9BuXZJtyUZzFXAfiBW7RrdzwDiKbWP71XbCVQbB12AokQTwePxN3itZyZcU8QULJFQNnk4zHeAuh5Tzr51a2",
  "key19": "55Sx9xgz9PtGTFW1nnzgsBTn329KfDdhennrr7KUSrgAfY7RunbM3vFGuzgHDnvjXRcMcWE6pJGKz5cwmqbYVNf8",
  "key20": "38JTSWXrCENpBXQmiijJ8fzcypLdLDKyrtKNjYj44dikfJNaJPjKQkRsJQjD2GTy8BD4fwGJSRfYe8TJwPn2S6A3",
  "key21": "SC14azwfGghBxPhNQzxuSpJPdkSGTFw3CgkUhJgcgoN2su2QWBvGyKgfv1pDtm2Qn8iuRj32E5c1SDAs1zjWSuj",
  "key22": "3tLyGxfetSy2pwLYgU2nr4ZWmXccycPRqp8zNSMi8AN1q3q1aZiSGHcsBeg9iVtvoEy5fpE4SoDNpKJyFfcgLwmH",
  "key23": "62F7Co3bFMiLp9CdR6qPfmdxftXMx62RorCtxL4cZcAk1jYc14mvYgAodb75h5Xhm1kw5EpHb6bN1RUBa7kRktSN",
  "key24": "62Sz4B7aJWqWLr3ehGnRerANVZjnXxvFRZiwiCRzkqxy8hRStq7H7qBLFXcnzKmZjHfKtN9ZBiaZoJNu2pRRoKEg",
  "key25": "6156YgZvZXYiB43xRbKd3Ya4DovqQfw73rBMA9yjoSzPPdGe9inuSkm4MsHThz45kAyZbvL9vD9Qn6TfzVAr7iQR",
  "key26": "35DPjGmJrG35VoNnHhtsF4W96Y5QmPxSvc1xWWNtmGti3FWQmAacNCfVgX9wA7Kh9TRTCuvq1vBREUaibzYrjRAm",
  "key27": "4jbNhzvGwtKa6qdC8qZjaZELweTxZ4z8RgsipYmBybH1jc5zX6xomxFD1qV7UFWDSk4Wkh7oXN36Fe2AVKAgjX15",
  "key28": "2kMfmMtENgfPzBXbTAHx2c4tPqD3WTzoNdSAieyn1z4RsC7Fbi4Y5n4fMfAq9McXuZiiZBT16fQK1VpDbaQuqYNq",
  "key29": "2NUVwncpkTgEu8v7kC3QmyECrW7TgNQFxP2Xy2Y8GUCW2GpnmbHtg9SiWNxyiyQ5VQGtbPPqPhUAYDBVv6EbqSUR",
  "key30": "3aPnAEn8Ho7uzRM5xWdwwPV7fFcD6LRVo2NgtFVJtCi3jbxXR4sDELJZBDmZ3KbocV35FBWu8n1ZMKNzdNzFTXpJ",
  "key31": "fkNqT4ZMU4u8Ek6ptRCTHbL54DzSBwhW6BUPPa3kauoeHfA5413Z4ZTXP15nJxDS177ECxTHn2We4cJkvxpLqsN",
  "key32": "5SiA2oDRX1vKLS7Xx7Yp8iYHBmA7w7tLJWpr96p3HbVW3iA8NAjMRq1NSREYNehEHyCR2Vfg4VghjUMgPCHV6w43",
  "key33": "3BQ3FRBTE3e2br6tJihe5WoC8T5d7dui4sa9d5GmMdqxFjz5ChNz2eLmVrsB6zSPeYSHd83ztNrPoKgG3bpsWvsm",
  "key34": "52kj5tf8mVRdi1igEppWwzwNUXP8dBNFXNAEqYmKbJRJJi99bW8LWA33FV8bmNErmvE1aRYBKeCzMXzE3Q1xkqCj",
  "key35": "5Gxt6mPeJsqubTMnKAhUbxZSuQadBmyNbDTcFqh2UhAuEcDpx8cVWbeLzS2Ez4TX4xSD68979BimSJCpBP5AWttn",
  "key36": "4ZAoECrT4ucrobgVM5oduwN3FNNuCap7Mrpy9rDPDFAdXgSNpAZarYW1ZWwNWesk5HH893Th9ooT8E2DVxzMrizx",
  "key37": "5xNcVHCBkeGLHLsE78AGkBPYy53tsznKh39VddDsm2qqU59XuZ6yK2EgiVmvSX1hBX894s1ex1jxGwsDavwMXTh",
  "key38": "3HaNBwmg5xiq6BYxqGaY8PMWJnGym4zbPnsHtS1mFvPZPSsTqBLasn95k8787pDH2VnCDg6k1XYtbB4PcAPEtGAN",
  "key39": "453FKzp5Fb13fcGYRea7gEzMVYVnHGRWy5opFwTCdqxrqwemoS3KUsYhTPpsvg8KsRJYUze8UvKYveJKM2wxuM6w",
  "key40": "2kegH7e3R9Y3e8YFGpb29eADrBEtsZ4DuPuB5X5BvYuXPQCXNHC7ZejforxJD9dn89J9HWHpWYgjDtUnNd3UgKsH",
  "key41": "3AUcaAB5QPsAdwTgAU4VwJBjdhieiVypeLi8KHTDo9wagGabTWFiie4kCRj3qar3GLdgKkTnivHvpPBrZm2dej8m",
  "key42": "ZcYWTHpt7Bq8rQMoVBtBXAdmuY75kwzATZ5YiBNvGcRmF52MAcm8Qyi4B9rmiTs9D2FDS4XR9UaoTQahzrjsxsN",
  "key43": "HMFGi8T8cv9GuhZALmrcZzJhQ37BhJEzjJvCcPN4NGX9KmG1VP2DMqo6mRePyF3r1gQBkoqH8mPiEqPQ7QdqPug",
  "key44": "5JAzDmenYxnNbgxSPLnHohZB5WEX2jKZHbCnMsDmu4S2NhT6uWKTVfLaau5wZyN9rNaiC5ff4H4wi1Uba856RioD"
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
