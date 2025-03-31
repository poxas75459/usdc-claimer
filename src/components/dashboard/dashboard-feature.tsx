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
    "4BSU8NueAjadubZUQ5F33P14BYhMUQKBK1QBBdaJDAWrRNAGoGo3JRLFEStiwWtbGWKC5z4x9Y34zPwgHB6bGVFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PvnVjWELUUcgJUBswmosRhBMfE16Hw2DzE6Ppmwj6zSMqjTPJHFhutBC5qpYs9w2XRPG4V5g65rSi5XHuMAK2JB",
  "key1": "2LbLPYK2fyGqnReKv1YMM4uLYXRECpE5APnfHDKBwJY4G65425Tc3TEQaqcVrh51aRSu2SmWguCBZ3ATXMRTPjuk",
  "key2": "5txQ2jvZpn3FmPfAJURebdxXYVYASQipr3WaxpdNPBzjRCHWx4574L3Rw2WCDUAM8WeMxPGHAsix34eENBruiin9",
  "key3": "4YmwNitTudPurSWUDekh464CXF1k5PwG8zgNVTsPf7MdFkCraJBYzjvu5m7xVGGDMWPz4qJJ89F3SptjyCcPnC3k",
  "key4": "38N6g9a9svf2fmzNipXoA11XQ2tQETqnvi7pE3DazrcRSkVUurKNN2yrwPDxgc4gSDvPL93FFuCKBquFMqE9Gn8o",
  "key5": "2JcT1fajZiVt5qqcTT73pxaWSUwasj5qXtEjhTk3KnM1qt7PrtQMvcaLrMgxLQpb2HC3KhWo6uNpcmzF9qN7CWpN",
  "key6": "tYjFmdtjiD6srgTy8uR8kvHUoGyo66V3ashKXTwsfGzN6ywEL8a5Niaa2XJKMjc5jTyuTQyvdsp8Skg1iTwZf6G",
  "key7": "4xuRHjMS5UayDAudQ71Q5hLFD5XYGGe4gbsP7QtLxNcNJkaDF3L8yGhiSAW3fJ8zyNYFDdSC4NdEJRR4KaZ384Yj",
  "key8": "kLo6HVQK7YJPYT3HeCScRcYov1b8g4oUEXy3qCDXYs2snKc9XbJfYbZeZ2sjZGkkF1cUFUKQWtCLUnkwcFyk7po",
  "key9": "PrEcchEXA4Zv44EHEKW7CgPcRvj5YiiZ9PSK7CyytGYD8LTvRodtUyoxUMc6WCCNVbyw2SXDaCcCWLY9D1xDgAq",
  "key10": "4jxEeRRSiSqztPo6n3mmunCx2gFgQwTeryE1rpbjKcPDA4x3ecME9nXXPEj6ur8PHNoM3FDq73JUVyAvYrWqxvJu",
  "key11": "zZEmRbgMxsmQ2eFSQG6Ws5c9dNgtZtNuZogrkoqKkKfpZWJfAaXB4RzqhkTiieDeWYQASATf597vn9xe3vCeJwQ",
  "key12": "8xSjso9JSQvRknozg2j4t2UCFSFGasVh3ZC3X9i6hJCvgYmtfjnVeT7RbAFCPscUotX9rhLrueHdtA44SXaxGdt",
  "key13": "4V491XjRy6bsirhmdgXXF8KvpXhRTE663sCxFteRrCrmxfeYuK6ZxUL9kamauzH1gXPrvBLNQBXB5AA51XCnYgKG",
  "key14": "5cGAfwPiTUicR1gsJYPqSHNAeN8nH9eUKkUaT697wvisKJYU5j4w3NFnBjF7hf3h9CGJfGvKdeC6p5JJ3rDFYgLN",
  "key15": "5i2sGHXGP8EvxkXHEs2L88nqzcsHAEroDEe5NUQFwSRfh9gpnB49jVt4sXtkFbRU4DdRZ92hp88dewrnPYmZKoxK",
  "key16": "5vnQoG1aYwY42JLFC6Jik8zQvow9a4L7sMpeAGMV3YuzDYfNMsa3rvZyWkuqxZX5tgYV2pbTzdtvuoxBaPXpevg5",
  "key17": "4AHg3ce5Mciz3f2XDWKxp3fR5pq8cTuxG3cNkKKMNqy13hfdQPnT274FRb7snAaVSNrKtSkZ1Gk67XE8MCWpiLah",
  "key18": "228gyxkYoxpiMFGu41Hom1DuZWwqy6LqCcwNioEPq2xdPEiN9DnmMysT7REgt2SwiQQsEszLszCVL5aufNNeMb2a",
  "key19": "3L79sAdUH27yLCqZdsWhBWjLuhBgd8GRugJdXoMytC4KdFST7CHqq3Pf78dLcA22DSLCDyRXEUCkhMEWjwohyJxZ",
  "key20": "4RkdM53ihbBP2inEboh1wGAjzXUsDsu5654ZxcprPiS7BFAck8UTx9SBmveEqH8Lnp5HeTSqGB22JMMAEpqTMviV",
  "key21": "Yk6tSunFYsuAi1jNwe8ioSGP6TaATSubpEnKd7w7DNVg8Xc5ahRb85HH3yzhR2edgQaVjEGmHZ8ckrEPBiT4pr8",
  "key22": "4wfhgn2ap5PPpw5cjBnQt4tCXcXJeypgoQdMZfgRc57hwtiL1ngYkvHuakmZHmKVpMfWodhxd9gzx5ypTeR2qNbN",
  "key23": "4KM6VdwG6UtMg2qehDKrheBHs7q5thWfoPYrevF4QCK5NjyBGuKFRiH6uPGPuUrndUHiUndCcdRkgwoZAyCPRaUX",
  "key24": "2oSBvFtXE5CRQxY5WSug5MyNkfX2TrjhBu99YEC3FPomRuxD9Sd75SiYDr7D7gHP8f5diS2J51ZbR7wZfxSmwwN1",
  "key25": "Y3ox82Em2tJRf8LYBSt3UkT3TYtFgARqahcZUiAiWyC5rPvfSJfLKVEsvte5MCCvsryuHzi8Xsm7orRdRWNQAiD",
  "key26": "tNaSqQCaE2wqz9JU3d8E7tZxoBGU51qky1DWr11u3G3PsAsWZ5ksuybKXgphJ8thJCSt4kBwbPG6Fr7SfM2VJQF",
  "key27": "4C1ewXF6uweSDi3bivofk2QwdK1F7CtQh8DZD8vHtCwgtkmg1W4RaJyCYKQPVAsuwaw96sktKrLzux4VsPgUNYwL",
  "key28": "5sANgzuLmtsPh22VPbNL4kGJ7U7KNur7WbnQJd7ceCq9TpFrLZVGGpCJUnBBWKHFw3XBYm6PR8F7scjXFvKMH8PS",
  "key29": "3k14fbwQi5NuW9XWWMeGv2xnH7dNtD1QyxUBeZPiNoX7xunKanWjesUQv94hSuRttpzKQZ27nstLvaaZnJsPAUeL",
  "key30": "4QNNnWWcSX5fJM7pnxnLsGQpGLJep1p9MFRJXwBdWnbqvCdKt8vh84CsBcWVeWzfub1X1ZcSangHoHsp2Hd74pPB",
  "key31": "3j6prvvhSNZmSE11wcdUiPCdt7Uke5pThYtP1DjWxNXdtpvhzTmoK77YrsJf9pFm89g2gTU7izEj33vZvjhUNC3J",
  "key32": "3NGD8rxbrGNWakYe87PF9vnhQfpQQgv56mN7HdncwNQwc2PxJkLrdM7L8F2hPKto1MVvS2JG9k5TCGDsRyJ7XddS",
  "key33": "3SAQHinS76kKRA2MZYCKbvNomhFjSRV2nKFEWsZkZAM8B2czBtS4UkXQgovsvH8vAJmgBSoxgxxvvunYicbF9Emq",
  "key34": "3VnFTfdmuDZyvrrop4H7exRwcfunMEn4ZPFmYaaH9afWgHenqJQYpwddayotjAACKfbkk2PdZoEacCDFNSPMxyos",
  "key35": "Et3BkhAKyiU7tvngB42ZBdA2ip9XhHfpuWhRVTV5F4Ztx3SuEdtKAQvFCCqbkPbyrBZ67BSamLBViLLoTCnNUZ7",
  "key36": "2AHD5n5bWUfkzPYt9TRU3sHQpdnkopAV7NYTLqqK11EBQzgd3Um9qRBUh9DhryUWxxJZ1vV2fEEjx4YUNr1jyjqR",
  "key37": "31whD5EvdP2Z33Eu3aQWnXyJZUPAsYn4FXrddu4DDSTnkfTMXZrJajjwz1ZZczwKAgAp9XFbDY1CrJDg9rRG5go5",
  "key38": "59kgomzuYzPjGbQVzmWD1drTVxc4ycAfF2ox2ZsVdnLiUcd2E8VzyAEiKTubygSMrZCqGCzXei39WUhFPxNhuu2i",
  "key39": "3Ss8N1UU38uVBGVwzRn8yFKg6Csm1xMRtVEkyi5iGiJAxbPUBs6aARTRyPxaSgv9JMYnttLgH4EDeHaCumA6eSVM",
  "key40": "2ywKCBmHSKGn1XahN9Ym9vaoJxCBQn2PST62fG7kaJ7gnbqxrRhs234ueJM57RaDPBR749fyLsEEAo7MFT7apfSW",
  "key41": "5L3YEdmYVgxnwx532WLCiiVu1GWJJMnNyHWF5bcv1aXEKZaU4jVDm7QeMMKnQEm3K9sW2XEj7JwFZ2hM3hFVb3jY",
  "key42": "2MWWLJofpvmj4iqL8WNgGAp2s5Vw5v4FnKG49RYSCP544szsj8yTJCPHuY86hm7wM7EU8zg2rp3GjVBajjhJG5Nq",
  "key43": "eQ1WUkLTfjguEdo7QSqj5iXQQ75DQtvLZwyRShgHqXWZoHezYrf5B42XFXtJkZwgCjxNCSJtvncYTc9HUUkEqms",
  "key44": "5Y4jaxYCixdEstJKsUnjrg6CcbwV6NubK3bLqMTrVt4p71f6q8PJLeyBmv49oRq2WBwyrZQv8abfL3AE8NYdgzRe",
  "key45": "4MzfWc2h7bNQAZXDZphxqJC7oEzW3vcwa8VDuWXDqkszF8okxM4UaqHXPQgJrmwkCDYeM5UksqfP7b6CVwaP97FT"
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
