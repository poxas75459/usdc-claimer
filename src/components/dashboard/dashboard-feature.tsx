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
    "28y1hA3yGfnchA5D4D2aFwA5amQGczx2fBJv8bkvZxXJuQNkaq22Ft14q5CjFKrTEvdyYEyYegVJD3HwXprVuqJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uSAQmcbeWzJ2PC4BE9fiSeF6oRu5s9GcjauLwTqWVuVMvPnbGurUurR65WhwyvF8W9caTuScKM2dcSKfe6yPQjy",
  "key1": "5LoydrrEXpq5SL7fzrGkfVywMcP1i8Wr76L4bA1mon2MnkaGns6G6Au57BQ2YoMbGpdprviHgsUAjqFGakevYwY3",
  "key2": "5naN9EeUbhdPNgqY4WnTN1gMk79zYeeUQgHvnNfHD8rU7MmNGQ3qtcwpQ2EeG73hxZMQHCmgm6cazm4VeZmgir4Z",
  "key3": "4JgnkPeRKmZAXKN8RTXFGnUrZQ5PxYcVWCpAgSsm9CehKhDN515Vzqj1CnZrfvnXkSYNk1LQTDqGAouJ92seaZ6q",
  "key4": "5CNRccc2sfQK2j2oiwXUjAj4XQg1uN2yZJW5bggAE1CiC3rKpm5qZu6X78g4BgrsRFuaJ9zGZd1BGmJ56QhX45zd",
  "key5": "3KqDkPCHi68Piw5w6eSvKiHecWKeUpDBUXZ2Sbn1QUYS7LF1gtLTRBuYkRahevchSdJdXuachpHRDJwWD1XbNW1J",
  "key6": "iANzEaPguJUtDK5uSWazya45G41F4ouvfHTBMqxbwdiQ9MTKAAgEKiYPCR53PiT3d82roZSyTryZSsTwkeUaRo9",
  "key7": "47TF7VedfGKN1a6cdCaWFyMNQSTzb7S1gPQCrTKyJbrTM9pKXYQ47U96upFo6K7BdyuFYMu6btWj2HX1trwR57RX",
  "key8": "YCev1sWG8sBjLZgcQHhHiNdgYVnu4AiaJHaALtygmaFi4wddgUEoZKrbGpGVFAUX3g7wGUYemAayyaEvq1wZnzK",
  "key9": "2X5Q1Wcr4q5NvMLs9fs4nfWo1hCN5fNSjA2dkQkQf2qFZ79uuZq148iW3bunpNM4YEmXq7Gw8C939vD7k958jFyV",
  "key10": "583Whn6ixWeFUcr95jfeF94dy6XT6gzU175tkZg7968hKtTdL7nMEZh1ghy86hrhLLD6spWiunGCCgDBgcvTRWEM",
  "key11": "3CYGwkpg5T7WTLbNRReN1K7W1u7JnDFVy6BeXB5joN1vG9fgdwjBtpzKSFE3Y3UiuWnrwEoaEX8ZzhAdTQVbjTez",
  "key12": "2jNfnvwJFtoCN6GMLmWN8CNWh52Am7NHXDR9uvYpLJp3M5FR7GJKJgcWmJy9eBnsp2n3mqifuQ893CsCfe6dBBn6",
  "key13": "Mz2LXH4oTEFN8RN8yRnmZLVqzKp4EwiQXoW9K9ErSoSAx3hqVhg946BooqtCH5XE3YfF3Sarac2ACdxUULKFY6i",
  "key14": "ZFJC4fFsiEUr1FikswuLDRSfYEMqyokn5NPoyewiAnsW8bxYucWwgXMCT7LXDrjsizf7wsdAf1exm1VsCvQ2YYQ",
  "key15": "45n4r84XSfTFmY9zbVKxtaZZPqRKMGY9D82mVuncNPyPpenSaLEGKoWWDkpAcR2GzEHYDgvT2FrUMJhEQ8gKvmg7",
  "key16": "dG9V3wCPNy2C4Xy8JCd462n5jGYg4PyvfrnqAgZ3c1RTyWQybqeiGnHNEJ1sYGYgJv3kGQZHSuHccwzkiihZpKB",
  "key17": "5cwSSEi2j53DBcrBbg1hotHbuHER38yUGjpqPPHTXtkT6C3sau2sfgwMvc9YfTMka3fwWyRLaZgH4bjQ3WHqwiAE",
  "key18": "5k6nQadayvZpiTY6LNN913iiKYSuBoGYWp8hQcWjNMNRYpY7R5GKWq9kurhjsLjagWRNG9cnLcZdTKnF7uawCbUW",
  "key19": "5M5c7DD5n1QKDHSBkRHRBBJWTKAmcwzsXCRwvypp7uTrZqpnYx8JzzyWrjXJiZvfvj2PBHkY2ryk31pbLqGZY52e",
  "key20": "4mkqbnmypAwJBDpWGbGHavmytJ4QSCJe2G3WbriCXXAvygRjKTSBMdfhU2oj1f3eM1pUrnAk9FBQoAM1NjKaduki",
  "key21": "3GvTLVLECHG7FoMwgsHssxhFiotWtPkZn7a7pHsQGkGNcqgk4Luf3qNnL6ZxJqrciqkwgZ2aAGTqptG9sFUu287q",
  "key22": "2ydTZEBb33aJP5uDF25ZMv3XaPGso6F1WSsq3VQbziHoS538hwHoiCrVcfW69TcDTpYedibwcU9wNpkAjRZTQDPs",
  "key23": "3jU2xdpYZPATmMSbfkdZLp3TgDzWW7DNzRDyczyigfEcyu8D7KzzFxecQpjN2S8pw9U3xKnoj4VjTTFvnhfar4Cc",
  "key24": "4VR1MhPwMEqTEbcoKnETKJoM3kXGriTXm2CCNyPLoSknS2BR4PUL9pjtJnMWXRbvFXWGvMVK5nFDQu3HMXgdPGSx",
  "key25": "7tCCZBpLDsT3CDTNaRA1nBkuh7gHwtXcrhCFQs5CCLawDHndqLmHM3JMHxebtAQxAJCchkkiCZ3R2MKZhdNmB4q",
  "key26": "3ybHFuisCV1dXUuud35mQeoGZ7Ea27KmUj1PTz54ZtpSGUjHLdB3xy9rGTPe8F1VhEQUooofDMZz6iCx8Fzvw673",
  "key27": "3sGPQ3t7VCaiH1vPgHuRHDLPp6Wg9HgFczYHrwxgSE9gG1nj5Ejfdgd2zRtk8oXnyiRW7yXGwcmUs6jqUopnNG8h",
  "key28": "5VV1sFXoiL8nBKdzypBsfRSFC5bVS6b6gPkaYFr3Zm7Bn1a5xnbDiispvY7w5HdKiC3ZUHaSBxz4Hh8qGZCun9AN",
  "key29": "4Y5hjES3yY9faidFZYnYZzunUyrxwmh4P9QDjbX1ysv7pGkNx2Gr2GRUG8rbLkkqF7teKUNrrSz1C8ikariqj9Nk",
  "key30": "5iLAWuRPSeQ1vrhHXn1H2uEDYev3FVDZfza4UZVfwq6UZ5RkJJoEUXqgbLDCd2TB6CzbLEYtsxwh3Mmj3uUo2NP4",
  "key31": "23an9FiixhrWDiuSnJBGiqWJySbNACwbw2arEVaRGXntwKUmw3VAKnyVV2zrcKZnK1jsH789cRe2E2VTCESjBU1p",
  "key32": "4Ug7orkbwh98z9QESRkwHQWXciacfpGALofrfkJXpfAmJqFFMktWxMzHtXsEbayya6iV18bayvQ115ALDKMUmN8e",
  "key33": "2mwozCqB9a1gG3DnWiKwgdCb4DTggfr9F6QULD2SS4YuzHaUzYEJAmNVswphZC1eJ9t2uLjf353m5dLiVjNLvgqQ",
  "key34": "FsW2uMJQgCNKff6i6E2E3Q4YiTKj57fpLQCVteKYTUZHsQEar7izHfDsBJgffmGnaKTtxn8fc7V5rT8NpTJWSVS",
  "key35": "49XptPij3JUaydgTpU4QTUen77zGFji6Gx5qukqzWmjmBhweYTMdaKCW1EZvL4Ee6nvyZqpCpentoXXgw46V6f8T",
  "key36": "2ZdE2Ydquy21LVRMrTnfiyTBYE5i7txVQFg4CsJkBo22ucAMTQJize4JfNUXpnUcDbV6mLEvkNxt6r2YM5yP6UrM",
  "key37": "5u2pNtkpRkCehNCBCtqK38LXBMbXzTu3G2NLXdsAauMR51Mk6XQZSw4xgeW41GWtDbHZpsF2nT9Qy7gUWrHoZwzA",
  "key38": "5B5HCGiHwozDBm7Wu91CJRCyo1zxc3dZPwNTDQvQ4Z87Knvy216oPqPtDMtWH5em6tUpCrecYvfNRtw5GXjYxfoM",
  "key39": "gcRWD9bSfEUBBBp2gEPxT3SUYC2h7D18rMWXki1wYJU9w47iTm3e2zqeJokgv51TZtY999Pp973ux4JmzQB3fsa",
  "key40": "2k6jp8Z1VPDfrM5nt6CSV8dqkGk9mPdYaBhQNXP1rBC9sMwHwB6PQs6U2Dw3FrKQpA36m4H4f3kRWyNGfeTujeMm",
  "key41": "n7ZwgwoZouXrZ6fCoaityudmWdLZEKg8NMNyLMKtW3J77VLEv6SCh4nGxURW4qpVRkC4Tq8asM7PkitrAZWP2Hb",
  "key42": "qQwzLit2YwYm1u29yuF9DG29GCBLR1f8MTSiQJWsPioH5nhH8e2kMDdv6CpdnZqPU4QMZxURJoVqNgpRQ9T4JXB",
  "key43": "3CxnvVqDv6SUh7X7EHpTWgLrnXc6jjsgSi2Mn1MWrc2gjvASFtMPVYrSyq7aPFBWmKUVFoKZ6LkeTB83LiCfnf3v",
  "key44": "4P3QXVDYQ7JymCRAaJFDHVERmN1uwuwrxFdJEw1ExgH1rEuFAcn45XaEbthedTHKYxbv5v77b5oRMYZFGAPyDXzo",
  "key45": "QWyiLgxd9zpGbfjDPyWqU8TZPVgbbtuFTwsvxSELbRqwsUH5hVyEnPcduthCCkuFAWcRoQTANqozy6LPHaY8jQV",
  "key46": "3u2iSmKM6cT6ENPUGsnhNC4AkaLDYgU5NyEixbubvNgd8gT33Rd8kkD5N4cNLuEh5bseZ4BELd7hmLSReqVovEM8",
  "key47": "3YoewfAp8eyMYXYcvAWs9yqLgmuxyfm5W1U71ueKfQ4AKxkAagxWZf6HBpY5cWKa29aEY9BVnP1UMeMdCgngcTn4",
  "key48": "uV9GBhw6YkQ4pFXGhGBbGSkb4cWjhaUu74QqGTLb2MJMYqXdosrMjw6r9Eh4S7A5RoENsBm6rpGs3ZrAhFozS3a",
  "key49": "2nndaLbDkX8ASvLCxoY7ryGnyWXb6qK7yXkHTMbqSKWgDrf8aYBjJPTegXKqNW3Y7hwaU6YovQFMohm3PhKE6ht9"
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
