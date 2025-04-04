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
    "32DuLtESEdDUJpwxBbkq97qBwstYMQB2rnwG6WiAdeZa8yUbuZgZbbGLsRXgDm1iEiP82wg13kC6JtjQWmEhSd94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZYxmaaHZcupPUgvEobRgFP7DiQ7UPRx8VFwcAPdWWJvkqsX2aSyYeXtLqwm9HCL5zVGqSeNwQ81QS494crmEWV",
  "key1": "3MSrPdwPTzG1eDJPqW9VnRxFtYnkxZg1vSLvjBjgQDFsWCFWdEm5jGPnMq4Z2o8ivWwcw9Tuxf84AkbFiu4UAyY7",
  "key2": "CfG9oWcqAE9YpJAyzcMvVE1JxAPS21UFAsSsy9DAsUUofo38cc3zRSbMAyeXPBHYCZZoQSwPVCY5hzuKH74NALw",
  "key3": "3cYEbiMJHr8phqgVrtc7SxTw13th9ooTNorZcSeXsAhn7DRzADBYhKezZnt5e1hqH9AVKQQSzBm7NyTQwEHpBxg8",
  "key4": "4N5eZX9WyFjjjXRU8Zn3pVDh6eLhBoAT8UBErFRhizra4RqmutZY6WrSukdM9oMfCbfyqDjh6T1ke7JU5yeGwJ3b",
  "key5": "4LkLMa91ujqz1ShpGNMPgmYbMkfc4EjTBETQPJQMAy2tY2g6BXv9Y1TUmLfZw2TMuZQUDi3kGd5ZnSahTbcYwTC8",
  "key6": "uj8Pq1rVPKsQtvQ5T9U5etEvs7PzPZaj1WXjgtNqva1r163NdJA7pZAGrqzytxue4mn44Lkg3eBt6R5quXe4jtp",
  "key7": "5gqbKaeQHEb9k1Km2vdkbv6L6KxQ7gDdsA2XsTx6NSqWeZz3dhS99kQzKExxGnZMjeEfZj2oFW1x5c3vQgDWffwh",
  "key8": "2s7itFSRY5xDNSVvWJnoE1W7EMFWf9zQwX8zVCbnMV4hYmHHykPpW1WmimJFRBtSvyGNqzxxx8XpixSQA9Mrs9x9",
  "key9": "5RgzD43cracTonZb9Tiw8pVhmTVYZ1Wgvv9XQrwayFDKjaJaL7F8KUoBPFFvTkwDDpUkioUDJTStXGwf3K5Y5PTo",
  "key10": "23egiYM1gAoNnqwojnTA57iwhgTDUuFN8B2bos2y2uXTcFvBJJnS3TRRdeupQDqgRb7fwAwgRiMmtbWhdMStaJBw",
  "key11": "21E1C2UsXfFnXyfBrXVTMy8XsFixHYMRRhQuo3jQcu7TuhrzW4VcgccUPmTE4UqzFiEZ1TaJ5U8sictBw1nAC7L8",
  "key12": "dTe9Tsgdx3TxY546GjSJU54gGAPEeybEHLdG7xWvXY3sguJVZ9iBNeWvgqrBvDJfW81MeP7Whcp29D7mkQvfNUT",
  "key13": "4Di3SY2skDTVYVMDELPEUQGPNxw4AS2R6i1hFAeHf8iCeSCQhCc28UNJCyEZkKDMKeMsAaZpuMpyCUS7sA6tnNp8",
  "key14": "PRLwMVp2toNg3mytVto3gbpv3pVYtXrFupaT2xBuAVbFtQ2tNHynSAbpCsrPH8vZJ2fTXtraJSiDGye3TEN3eWa",
  "key15": "3qXugDNshzPtpgdS2FtGdpsA48AXZGgUJLdEXxppuG79KmEFmKzFMgekU4dnhb2L9syZB47jHhjgMuLFwmwKg4wL",
  "key16": "3CjGgTDL37nWqdXVEv8CcG3B5K9CBXoGHkGaFPmKqDYosSDsrYHKAqMTwEyoAkjiWcJKhNvFLGFTauRs7hYc2eok",
  "key17": "3L23mHaUDkmoybYQnNCqeHE7bF114f7iXu3KuijrV9ZjaDFMHThgPmVgCzpjGa1zJrreikRKWJJWkDG2PDsSyycN",
  "key18": "5aEnvS6dYMz9NqtAfy7zgxtxg91SZt8fZKxE2Wa4XCqDBP6gzDBprAk6QbY3fALBQ1kje6bC1PmggSxBiLJHwZrW",
  "key19": "3sS6z5oHHbySX1C3VUDri68Uww2Dctzo4LBjQkvSk692H9eaGofdt2GbrenQYux5AaF7Thdvo9wGtQwcvxFp1cHp",
  "key20": "29V4qv1bHGbqV8zf9wiShdoGnFfnB8zjknf2TdP4HVVb8Zadkf3aG5mPSPbWXhPTZpbMaz6RWazS8c4uCGwwc9vh",
  "key21": "5mPBbTgoKY8XTkhfg8ivofroaHkRbthFEcs5SL2CsSS35414QcbVJK9KUAMedjbYWpYvHSPNfN57Ukj4HK9UdCe4",
  "key22": "kC61jPNivGVyAEerhpeH4VExScHGzj97ZcjrZuo7uSUwXrJbP4gD12KM84q48DZQoq7dgdMn8jYdVMiVAx3gRb2",
  "key23": "4Qthquk5rE6XTV2GfREZw5RYrUApH6wmWxYKxAtgYvVPAp5Wm4VNEiAmqx6z5MbJZnr9i2CJnUM6APagGYJfguVo",
  "key24": "4MMEQHKEk9FMtAVciTc3v4ekHYK4bEEJjhNCCooR9CT4FZVQJPc13hTtYoBhhtJCrtNvYNYJBN4dgGS59kZ3sHya",
  "key25": "4fAPz6omYD92qxvmk4Y6RUCBhghPCGbGqMJom65nyN484XkoHuovsaRs12wczKri7oN1zkZnNHWWP9Afe8yYhgXn",
  "key26": "2H2zNjHXKfoaeuLuFNxMMPBLegJoHqp1mcM1Tamc8KVPcNzrJ6sSy7xRKTsc57u4GbvuXJU6bFYnBJdeqVn3w98G",
  "key27": "22zGt4pbVHf2xvenMcjuBex2r66H2xh73F5uFXnr6E28k5UbVp2kjXANAmR8LUGYhHNakcjpmLeHVLYCkQGb96qa",
  "key28": "vSFJoUjBXY5jTWBHFC44psTHv7s6nNnbZGM5gpV6b1BaSvNFkvoc3aA2wb3FMdWbQnNGGStTkco6f8q1MBqruE7",
  "key29": "38K3CqewDrtehLGN2JbL3VWz4vs9m4waDx3dyCyEZ2Xb8AgT5DdsUR5X18p1NfDXqMewfW4pbGTZmWekGAfMFQqr",
  "key30": "26xNvSUwwjLwUPWUzfsU4bncmz5p85K7Bctvc3BqEZGGFYJZZYh5jar5DSLGZcnGgTuon1Y7wqWhEqDNLT1cvkey",
  "key31": "gwNtJSDNBktmwL4y6XF5ywqAaRnQU8MA8bSqMtvirbTetuA9koojnB2HvCUR3ZQxDeRECroNmyFdwWqdBThmY5c",
  "key32": "4y8iLo61ZAjiQ9karJNdg39jtaJTng6JKdmGQHyStgjvqVpLRm4xfUdJWRYw2Aou1nAaQcteUSygwQ3q8Ev3PRuC",
  "key33": "49gUye7d1oskyDzTu1JYEQ5LGhGRjHzEBFMXVtMCw7ZiXPUZKMhLzUa7knceLjQnRjGH2TNecciVAZNaRySW33gT",
  "key34": "3qUgRXrgt1qDuYrAmcZpR6ijinjPgvf6pmkx8YriCBVUXqYEQbT5Fa6mGHTqrYPEGCEYdvTsNHXWS4urNSuaG8JL",
  "key35": "4k2Av3TpiMiQXPEkArAeJrKjYkw7UuZ7u3q7TrAGJeTzEHdMq7Y2P5xFfp7Pk5rHshJkdQU1XQZMNXV6AXctbxuP",
  "key36": "3RjdzchVfzpLqFbHvEUBTRdXoChZXNYy6E1DexcTbzkQQtNP2Atw8zf9qjFwhkahrzeaa67fxPe7WehxnDMmKSPD",
  "key37": "5McQ4UkrC6RGjVjW1DEiiC9Nd1ePhoXy4ZDXi1WQnD93dQqQTAXatstsAQficJznSyK5a1fycCgPZZPsRrtnBdTS",
  "key38": "TKEhDT47ZbkkLmFRiY77JBwdHFbG85StzPRNNm5EgdFJqneQdoUZWwHmbqigsQpyjRUPTubPirJ3eSip1piEe74",
  "key39": "3MisCFjDEFWps6jxAvaQV62BCJJ6e1uNKkc8B4FBFMAuoUDygaChk9FCdyV6zc9yRmcKA6acLgbGYJy1qRHmD3sz",
  "key40": "3cmtZMt4oKS8Q8WCzgGvsNMma8fM9XyCuEw32ptqXgmApo8juvjX2Dvmn1fYB1DdMDZZsi7g1tUnrC3USA6ooRJn",
  "key41": "332rPMABrp6SFQcCAoCzJ77wHcCXJYY1ogGU4rjUL13sSCRtSjvVf4fNmDBqqd9A1fEjfd5v39N8Ksb41CWjWSpm",
  "key42": "5nTNubdJWW4Wphqwf8azWPCNnv8g6Mjv3xVdNncSMDZFUxcTBNneaccUMMPga8A6p2vBcJUdX44LqWLoCL64B97b",
  "key43": "3KLS8iLnLHEsCABFRnQTr7iHbLAuEW8aXRyAMy2xqQJhRtdZaZS4ce37UEv9HhUQgdsv4HpXEymxkHdZqC2Lh6Ny",
  "key44": "3V73uLtqA2GenFA6ZxjFH75dTwrv65CbR2p9GfMLSzsqkR5bFpKgRUSnwPBLajHEMT9wmVUVeZ9Fk2et1ihTaMGN",
  "key45": "cMX5B2KwogFnTaoAJYo8eNQQcVRD1G5u8Sbrjf1Q9ecAd33tL56SUxC9uZ3WgnnkPHnGfS5uugPFYkLDCs59sBt",
  "key46": "2Afmx5hUjjDR15iX2Cjp7fB34DasLqdD2YqhFoarM48C8L7AX8aKRMkAXwPLESfJrcu7ZXdRKuVP7RgLP2fESaUb",
  "key47": "2L5wnLhYswrAbVZc2wyxQgCHiaD8HW1ZpCz31Cymxk8FsssYUyBpkFizctX1AM8qsrzNUwPWVxCBCRMwhuEjHe7T"
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
