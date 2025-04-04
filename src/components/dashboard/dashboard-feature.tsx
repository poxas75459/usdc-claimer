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
    "2qiWMkeFUVN4FK15GPLFbRUjy4m1DumHN35owMF9wyBBeaUXpWSpqkdnNspF8GD8BK25J3u4a887muo5L8Ssmawj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ei59bVEtHkvFzb9HyjTrqxodrQgRG8PjaED5uUEcQJauT22wKU4mAwQRxFYfgetbMicKMxkA9ssbsTNVTJG53DQ",
  "key1": "2SZ5L438dKohHDHWmF6AsTmsrabEs1d5EP4AKM2vELmuR3u2mv4WrYyJwC7G6BTKFXdLCkqcSHDUZHoBNnHX6A7s",
  "key2": "DcBBF1XMpCo7tj6HNgWapzAbctuzQqj8aRTLX9Gc4fVdwnZbrtFQnAMmzQyQkrLbWTqmq7jsi7hemWK8gksbYzv",
  "key3": "qrDDp8pfQWDiW3K8kzW8BRudYue7YXbEvo18jinde7eR6opPUvLyFrHJDRXH3FXLz4MXx39czb6VTzRkAUKBCEe",
  "key4": "MjxNpdKuDjzCKJxPRTYYXrGckJpEPh2XNaSkxjWJ1FWMRgYPedJDQWJQj4WvJvWhkt7akG9zPCHD4gQDL1wYghH",
  "key5": "3Adx17tmGz2xR42AS32WYiqHYsmQAoGQaT7NBw21APYJotC9nrcWFW9zagmKn8zUgvBFH14gmFwFMTmtCqtpi4vC",
  "key6": "5y2S3fcmBb2rq2mVzRshkfpybSZfLmdgSNbPT4dJNUJWBUJwhDDb4hsbQgR6z1WFHEcabH6Uknn8UXPrMCFXKxVK",
  "key7": "3BoFbnKMx8NPnHLhxUTgZQ8r9KSbPMNS2TM88p23QnDQ1gZeipgb6BZrFjMjAzpLhTBuvuxKH3ENYNBERgPLfiLw",
  "key8": "2KuoCXP1XXL5UNKVVHznK6xmnpqJdoeJM2uqz4wRosHKc19kEM5k3UuXgDB7EQhUMcnSkGDthijr4PoA1g2mY2no",
  "key9": "2umzjmWNXqaDkSc8NnsceQ1qDdSuhoSGZ2FHP5afWudzViKguJMkPdK5SAFzjWtpo7pmRjtn9ENpuJHeKnUVnVHi",
  "key10": "LmptTu6pVEDu6pTAzoQgpCy4soYaTYSzfWmZdpJHZAzqDok4EDK1ExZrgaooCohpb1zyJdxRdSQRXAyUvgwRqHp",
  "key11": "2uNTw7WaPJ69NQFHStmcqyWqJVWrzqo8tn8fgNfLphqm9kj3hh6fmyV31GFJ6MUMfHfmWmBjXajBdtu7HupeRDPx",
  "key12": "2fnhExaa3n8dmzFRCcRGhm73K3gFadaA9GJSaWMbeDPqDyEbH4ejPGdU8s86K4E66fujW6PGBkkATqqxH5CE9tRE",
  "key13": "3PADMXQZsshddrQ18fptRhUA6im5hoMWdiDVanzrqNdpnEbySyhnGWo3uLnScR2LF1hUaNTzvSTYXb3GzMw21j3Y",
  "key14": "2Y4iXXNzcJ51KFBhF4yYCcAm294nNepwwzABHxxw4FNQjA5F2Jm2Ho1rX34jbKZ5uewnkSYWzEpgWkBFu4oJvkwT",
  "key15": "upDeRBnoQuZByXEiaK6aCUfSWcaqXmi1pRa2MN8eiBXZdS4vTKE4iGddGWyRiQ7EtZptj2ds4nJULEbznrR9ARP",
  "key16": "3Z7bzuyyvRJg2gX8EZhn44aqKKrNS6Nqo7HeN9mmUd7vEQVK7JnZTdtB891vnKMvdpRv8EzrNACprcnhNnAnf14m",
  "key17": "486rpE73rqXunr49BqzzgCpXoZg7h5GmcvrWozDbBba2wANNQqzDTjy1WNk5uierRkZzRPVNebJRoQzj4ji1pxp9",
  "key18": "3DFwPH9SqiQNN5F84Hf2GovL734eyLKZCcWZuQtyW5u2CKDawCxWF7bAMb8NzSBK8tztCJddBCQ4Ezwg5iV6P4xS",
  "key19": "4qpGn1xc6UW1oWdQ3XtT3GtVSTZhJ2wLSjg4oCzDq73eEfYssMfuc3NY8SkwfWttNpMcfn7LUJfT9s2RG2VqUCF",
  "key20": "527dKoa7K1gcXFayD1UKAEpmLev5iZWh3JidvGSnprSKDqePBXC65vz6YHfGNpVX5A11XCNcLSr6H97xeryZd5Rr",
  "key21": "57ngNQLSzSdGMPCGdMjdXPwSECTjBvdm194h1GK7gwpRobHJddjJUVFnhub9Z9NYABEpZvPehNb1kMHLwUaezuZ5",
  "key22": "2CTUd4BRAP7SS6RTB2csjdiNKKTKtxp93TUP3siESEmj5w1auSVMcwF9ngpzKAFf1CiPXQv2k31GQBPD29EshpRz",
  "key23": "3pVAFXvUkLanPAGiiVK4XMEt8UXqVpZv5YX1yeHNmaj5aikS2pjm9hbRJDW9c9zPtBxg5fu8TfVrSJXhvSJYiG9P",
  "key24": "4w3od1htmSb476G647GabgRL1UpKDRtpErUdsiMmUEyjZjqh7yfewpN9XfSPuwRVFnQGNtwvfcD6WmtHA1tmgXTM",
  "key25": "2RcQMsdJuhT6Cj9B7btYYosncVF9TiK5vTsQYAW8mqedgZqQZ6c7vRbjw6Z1bWw7S5gNx557oLN434nGennEeVbU",
  "key26": "5qtnbiNZbmtUKd1o6UgdYgrARTQaKvGC5Ht4MJMrsR9HEztdZPVQ2KwiWiFeSUzfHJmqoxtU2rBEK1LivLNCq4Sz",
  "key27": "3HqQbzEv8sxmDysHqzkt62pwSaArPQFngojBoLKCbdAV33Bw8qnpZX2NqYKKkFB4mSdzwvBgF6rCgTgKGgV3hQti",
  "key28": "W3azh2swUhXsuLngQ91GxnAxrsWqh31Xv69h6MGJ5VkKAkpk7uYA5nCCNhDstZDqXBDkMpwPwodPGn3qLo3Rtov",
  "key29": "2SUPyB9Q7abJa3mY3juMSUydjr54jUcgkweBVrYsWAa4E1hkuVVnJi669v6v2nWuoBsjvjX2UAGeipCAwAUSaUTr",
  "key30": "3xsmYDoGBGZuqYrfJnHzGCJvFYUBdyaVjBmTJXFZrEoap8r9aeWwWBNLAU6VVh7U1tTEXMzVcSn7LMiNy6Yp2QRD",
  "key31": "37Yc7YiXaX9toNJ4AEwFmEA3QJnWQkxYshgvkhZXqrapyFWt8C2UzrDehXBA3B4CmhDXbAiz3ZFDQB6VfLnPGuSs",
  "key32": "545TrfbdAMd2ENgFXARJyRNVpxJYfUSLA9ZrJf4P7q2uQ8QLDjVvS4jnLcV9yj8d3iXxQoSoji4JLNoK5DaGssYi",
  "key33": "3bqVY3C49TwNXrY8ic5LcULT3wunj9Q4oQ4K3kmWGhZQQAYJyG9RU2KrMfPivGW7ff6Yg1atpwR8qrevVEax6HhV",
  "key34": "4zsF59L3tGYx16YZjNmTCpNGN2zDXkYqLQvq72ejLzmmxb7PQ3HfQBZewg274uPAsiEURLPepGAR9oWp61waWGNB",
  "key35": "2B8rTimBByS7E1AikWdANS7YJqoovXafrnEimjWK5r4z5xaUc3VrEmcf3NnsxbWoH1d9RPghZosTGGgEcaAXMpzn",
  "key36": "PQ8FTzGCVfV2CfGTqf1TuNDNrPRgjJzavekqR94pSKpVQprKCKwe5khxMvMuLnkSa2BcRkFMLjB74zWhXKSrRrG",
  "key37": "3CKnVMo5ahNKbx81M42pwHM5jszYJehhJgKh7hRPiZnrpiUsbKq2CLBoZYCxVwi3dM5xjwDawSXcAZENVdsMsUHJ",
  "key38": "5WvEEnHQVcaFLqauFnuzAY9kJTcqALsCnu1EyKS7BHCJBjdsdMcdnBNaQD3Kf8auzyw4oxssisgARdrRb823pSvA",
  "key39": "41eciE3odeY1teTm75cXWmXTK8vebbt3JHc8rcoGikd5MSQVqsR6jz9GojLh3CLdBncBr4hV5TSoAVYESfo1bnmT",
  "key40": "4Hz7mbPZDLEdM9zvKtB4U3kCHuPihwoWmfGR7mjBAJoge4VxXeukkVe35MGkGdiTFMxtFopEqL62J9v2cpKQaHZ9"
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
