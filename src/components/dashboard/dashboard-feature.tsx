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
    "4oSqNqTSHUCNDXXCGevJ5t57P8p7Fn8HHgJB6zXPqkASCnAkdYWynTzmrB1ioTXEoxsyyMiWj2S8tUrH62WHncTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LGybxrUqwcLEDX5Y5sYRP3x3pxAPYPFHGESfh7uToyNwMdX2RzXvSx7Y6s4xSQfsJFwNGfgW3YBRNub23qMGDMp",
  "key1": "B8KmxzZZMC7mifMsCB6bin58JpzEiwuj1fJFbzXDUj5vRpDGMsFqAEpC2Jwy1Zqzt6FMAyzfuMBFtef2u98G7kA",
  "key2": "wLWhJqYMkVbDBk74MpaA7HVQuLKJFgwitdRHRqBSFTwSY8YagPrV88qwG4yUyCpnSuY2Y9SZdfTZcG17PNAt9tW",
  "key3": "3uEGYmPvaccVZ5yxGWdm26Yf2m868knSsFGxeTWSkY2T9K7J1J8rqmyNZHXhQRDcYav7STocfMGYNutmk9LcyQcw",
  "key4": "3u41iYaGZ8MYPsKcr2rCtLeUFTzg47ByFrT4aTqvpe9336XvtJTjhP786LLjz4wSEuAGJdKsgAtQTphLjmv4ea9o",
  "key5": "5z5GZu1XPGLkMA9HfywYphrYurnfSxen52ACYq7jnVRARMXKdAJJNWYaV4iKi5pXKP3XDbcojgtJNVZqN8DLmZGu",
  "key6": "6WHjQSE8FdjChN6wku4eCWt4by2vrPo2NpVjUYK1pi2wMYKFnnFkxwMYwdQ8gbUvkoxuBXSL6DPMwoLgvFzVyXG",
  "key7": "56NR8AHiejDYKhZfns2jTX5NqJvmDCZuaDhUe8ZRvNc4CeVRRc66MM5syg4WzNXZeLhvhwT4JKj5qm1h5CezhV6V",
  "key8": "42jF7LwBJZWeeFymJa6KH2Wm3AMFxT55dGTAu1SZbbxEmQBpkd7n3qHZawGzQB6VgxtiuyMNTD64xF1ke1595qoq",
  "key9": "2hPtJ8C7641RshR97UJ4eU7ZbxKsjgVeDdQyepfN2K4JWZrDRDEu2y3nz2i1bEqXfcjDozc7tSGj1QV6tqAPdLLW",
  "key10": "4LLrBoJjeSaHFr4tX7WntdinyEDJpBMZYe8XibEn2FmWVtbM4QGjjEu1NrDmNrazNoxaUX7kkS8pRUtLaLkTLmWp",
  "key11": "52hCW3wEBvCzzjtHjjbCD7LNwuhXxpfAVtK9UReYFtDM1jTAmJ6A1Vv2RKeqFscLNnDJ7A4gr1LK8sVdqmUQixpA",
  "key12": "3dGnGaoF9U8c2yau46huSFtVgCznM9dpcLegAFQMZnHdFWvktHYRxB9egXR5hKkwEcrfLSrHNgyn2hDbvPCtMRj",
  "key13": "4GVExpFDGY1jBSFdPhyRcCjk5b1B5A3YX8FtSdr1fzjtCHUuDLQNgLGCM6S5dTXgSKquA2eXLZBoSTWCGzjPBkJd",
  "key14": "YoMeHAECX4wBYVt1C4MuLqn2EHVJYSFFknzkFqZXRYixkzQSamabwtZ7kus8wZK7iHdsPvFVXXkvzc9Ac8zEjrP",
  "key15": "GujKmxzQGmYwtHWKmvK5FELqjL7wPshizp8L5fC9W2eZNg4B4NCh6kpqt11XL4QLu5KzXT4DjuNnp1fNB2KwjtX",
  "key16": "24TvcAih5FckgusPQEhT75BCEuteTephu8oN99c8o9UDUHxY9mFo3mnznsSer5cBpLDZ7UmBDWL4rvvkbNjdBt3q",
  "key17": "65ikGgSsjY1ndkwm8zNjGMEMJX1TwshJEKwowk2mdhXqDzbkkS6Pe5DpW7HzJbVq4Ufn7CejAh33HaeoFVnSuVCa",
  "key18": "2qy7Q94CrGPK6mE6iEhfS8kAxubcjXL87uSVSMCVLgMPr138EwWTzmPdHMdpKZXsairNf77qisfpPAsYwCBNsugS",
  "key19": "57YYpTMzXa2MHnraeSuDLc6wyen8abJKS1q521MrqXpdRkngCT3Ja2tZ9qsFQYEMiEsLKskjaH8KE9egGE7Q5JYw",
  "key20": "23y7yb7PZaYrbAmNaj7uFX3mFa33u7jKy5sKXUwAyZzxrySP9WW358J3upe4pX6NKFsWXFqyCTVfySpnPaXhQvBp",
  "key21": "5UhUeXJB5tCur4iwAYidmReMMuzqb6sxrodVzxiK5p7MSqfu46vcRno8k8DkMBx7H1dxEoGRGUT1o6kyaVN156mE",
  "key22": "4w8LCpKYU24DW96rn38BfRb1cb3DznA1dgyYXYHR4iy66HQRqaoKnbUwiGP1efQVfhk1ZrHJMLhFSgc8CEpDr6y6",
  "key23": "4mFX8XT1kkJxJ97eeynYWxphxJ3hMMX6YDUM6Ltnv6ZHnuVVqMikMUybRWxaQWATm3rJ7x3e8JdnzZieW2R118Ko",
  "key24": "zByG41jdWYQSdk5ikVPpomYra7KLC98UyAzXrdszc8xeFTSA79meumeYweVch9rWP58pdxTWhaQw5Ec6xzAeUrR",
  "key25": "4zmos2kAgNJ1i8EG6RsEW2bSvy8Wr3KQb6GtMSHstv3Um9JHFmKB55cRy7ShApzdZq2Sq3D1Z1XV6UyHXZVSdZur",
  "key26": "4rdFnkScSGEVqUAbMwXwtwgHnt69USjxKtZ6gbsytA7m4BMU3WuKkqMsdB8UJx42xAHhNwkituEEn53QwRjkdXZA",
  "key27": "2HREBbanakSW8f1PiK554U9vVAh3bDsPcgQ4vph8722TM2rp8uuEzahzNWpbrmt2rmEHTZQrtjYkxu3Tq8z4JE6z",
  "key28": "5r9js4CwktGnQcmTeLxr5Vy3Vuw57DEeVgGk5NXxLwoN945BzWwYKfcmp3axVu1KLnkrCHsohZxe6KRXDqL8tWFX",
  "key29": "2om2xw51UAwXkA8MpwDNQEgSrWGXUor6e5h2giMgDbxPeTMDveRSWHi7gPG7ZHdaxb6r3BnHQqyT5XUUFW4XNHEP",
  "key30": "41knpr2L2PRzdDj4UHDFH6A9ppD4zAtuZ2WGuRoUuSng69fg1TjSAKr5hZabmF9ysviWWQMjRa9savCyevpEG76e",
  "key31": "r9YLLgpKZhT93YtaX79iZnhKtmPU2mKsaawb3p6UpmpvqWiq7YL34nFFjR3HzE1NAEMNHJ3KgL4aGnH8i7brKYd",
  "key32": "5UPEtogaUCSyQm4Zkf3nbgtLbeuJNoBpw9MAQu8shtVVJLSDU64yhzKKF5J2ZTx5paoa26Q2X5SuELVkcUDwcQpT",
  "key33": "54rxFF8Jmz5vKPk73cDWajTc66JgxzvkF91ZAo139BjjB8F9jUQdK8oSqWrjmgzSqfsKYqapCTQDyMLtA9P36djd",
  "key34": "N3YUA55gjWVfd5eCpcNFxbcTrWZJ3FUDnpt6KhZbQuKu3RzKaKfr3vwrVCkBqRWb9uhkrn4Ef7asDxp39teD2PU",
  "key35": "4ec1YLuXwJwWTzcMDYhxxKZ7cvFLmzkEGPFGHNExCe5mKgGK8DQdXrRSVQuM1KnXYmHfYDjrNdBhteBQTYY1AE8z",
  "key36": "3q3jLVTa9nNfktDw2to79ZkZHAvT3cXRFJA2d1AMkSc48XbKFZJmudaoJSSMrw73S9phYYFMi9QzsjQwkb3szMJc",
  "key37": "53sBSi69ypyw2h9eyZ5PUPNzZoCLqw4iajH5gUXsUhKS2mDiFdMBuHBzGHhxg3hC2k4XvywK28BLRmGaQZgWKwGG",
  "key38": "5jzZGBK4BrfjfPvokDuQtDy5nMZ3n6u8N1Khbci7GDAp5zk7kJzCACaGwgZ6vYBwoBTp19YjGW2Z6Sgdyziv5r3B",
  "key39": "2TZhW7f3kjgK5mv72mKQegJrTNYaho4vnVpvd8JHpGQAhxZJ3Z6gz4EAqSm8oNNsgHurdiX7Peq4Ai1a9Aohcs2q",
  "key40": "5HUVzsVhWQJDAoPUCA89Cw4NxHgHcY5yMQ9qBDecgfMKEtAizL88KT7tCmbTCp8dGjfZ9pbCr42djdCdSX2J6P6p",
  "key41": "2TSTz4xkNrDSRten5VErATdpAQc8UBzjFk8gAFAMxYPUWtaHxKVkEYmahACBuJyvjhJ8Esza5NSRbm27hw8KeRv8",
  "key42": "2pjb2hCVeAzRssqM6JjGybvWs1B4zkr4YRLxfCGNEhnQMa5sTEGtHqgGYRPFEgVjhrTUQxd2NtsDVL5dz2pu37bi",
  "key43": "3zTaS3a5LpUhdfA5waB8mz4vu8Sx1DUCwmVAkooYsoRxP8enGg4snDBaZosPDJzjAwrEzW4JNqPfjCQNhoMLLPpD"
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
