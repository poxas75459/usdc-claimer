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
    "2xfcLRVkSCRvFovXeHEyLEBpjG1Sgh6kqHzQEwbXtPByoASbS667BMEz7uwdc6hUwKAte1YgTqWGQMhznAFYWXaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wsuhWiZwPt3c8voX4vjixXbkWmGGUakRCNgSsS723fb5BZVC4exrQLD9gmgh1CpJ8HcpA7oLXZJdkQj6hffeAUp",
  "key1": "mZJSpapKrkh9ok4fJ1TLThqftBpcqy7SJXJTF2FHKtJha3dJBptS7NpK82bwzYP5Nf32pZEqfNbT6hyeVwnVJJr",
  "key2": "54nHW2vAr8wN72iZEdxRaCZH61WjsRUDHKxwQbbXtVgx4bdJsbLH4dD2G4d5C96xTke3zx1Lv7SD6UbbY7HgNyQ1",
  "key3": "4XNN5ugGCos2hr4rjQv9w4Y7J4V5v3xZ4HKCfFsJZZFF5kqgFkeQZ1ergsHn69y1ZQBoTgT6XCc54GDuYCTGAhhE",
  "key4": "2eShsRw7JWLNN2ZDfH8ziLRRC4GLUrdVv7Kh8LoA8yU3ZDdhtjiNg4EU2VX6tciC7yVhpanspUkoH6rJ7W3qhfAa",
  "key5": "3n3TKeRe7fESqeJxkC5bNDjhJfVbzFm56otSDxkHGBsdQ2gcFVb3cNvhgy9NjwjiLtbsGQ7DmgHxoSrbdb9U57cy",
  "key6": "2PZFH6se7aXuP51NTumba8bfxFBD4VyyBydh8UVGeaF8s1PHyLvCigwtjp8ryu1qTCuAbWQEcKTeXnCGvjg2z1Zn",
  "key7": "5JivqQPXeTwg4FjH26FwCwvJnfFhYH8RYvimJoUHtmCb1ypa1k6hLqXhHJSgby495nWTu5oRhpGwur7upW4Aud9Z",
  "key8": "4HmBjo6Mo2BVcXYHQ5ZSfEMstLcVMAKqe88Lu7NpXcQGVxvjX62XxDwoHphdzu9ocxXTBFDSjewjhyxwBSRp9jGD",
  "key9": "3pRWBXGWWH1K3LJCPfyq1hqVSf7jDRJeMDxKGRnmcMzh1qHpFoZFCj4vSbWGuPQPZhyyXPb2UDnF69DWLR2HSjbL",
  "key10": "1MUtiBuLrLtCUicBwfbJRqEoH9x6ZXdgetbFJm26Z7m7A2jSNpxt1iipQNbMLNzvBpbHaumrDHuXNv2NXqMYGcD",
  "key11": "usJ287wunrkiUpnEK2ctDpCFqDUB32YeM7sxN61dQ2w9hS8EYCHTz8jrHGvDd1msuQ1xDN5nE5fzA6bXarWZ5jr",
  "key12": "5pThengG68XnbX4NvCMkGGQmz9kuEzGkmtrJYYYoyxkx76W8H6M2ijZme7aGJaEDAuKxpuGcU6pRWrhya8j6jFi8",
  "key13": "3xM6esF7KtXhPaBjtDmQSg8DXhZseMhDQHnf65pJ9gsYxMScL5vpud83NCJnxgTN6GcaLibukgMjh4xkPnrkezxU",
  "key14": "4rKeyYmhcphmU1yiykgLaGTVrsZj9T7htXb5rgXfHKEFCJ7DZeMzcxqKEP6dQfPp3oz2iXTLU3q89da6tzsF9c7F",
  "key15": "4hyNXWmaoQRpQmQ3Mg7RmUfTaHUygWziR8Cawc6TCD7n9wzyZ3s3CZ5cpPAwrne5Zfx6eZjvfjWSByUd2X4R9Pjg",
  "key16": "2U9FeDVDvZujFqauza6XdeiyzU3nqN7ywuMguMLJ2ATDga7mk8hX5Qp6LcVT2UNLFbQibaVcWmKYoDMAutR5GSq1",
  "key17": "Ud1VqMJLyx6PYbeXnQGNEiX13V87YqWTdnYTLaz1UVw4nNYVa1zLdwQrnzx71xqT1d1m7FsNeWGjsnUGrdNXZ9h",
  "key18": "2fJaAkwRK9Dg3dCFxbShjxrGxAgn8L9gZnEU7CRgawa71LFHNXWMPFPVKb6oo8yivVzpQDTgi7B79GTk8kbKUvw2",
  "key19": "4jUyzrTz23n5zwpAvMtk9hFiwxgbEwJ5Jyf9C2fHZrD6S19cdL81PtLc3wp4a42dA5iyKwTqj6EMR4Y2Ur2vVax9",
  "key20": "2kgiaQV3xveyte9KyhqhQCLkaWWPERxXu6uxweniEo7VSWxTxUiFHr1LxY9DymSk27Fwff2g2tMzhTFUuUVq5eEi",
  "key21": "gxMYovMqwNkYqmDt3z4Hrdu2wanVNvHqhSsV9Laa7GXrjqzz2aV35EXfZhzFzo73ZKtXbZ94HUKMmHDv8JWsKuA",
  "key22": "yo97sxCYv7Mb2yH3FcKd12xyrYPk5KAAfijrhe6tcrFHxhFKJuZuJGL1PihDYvBTfG4JFo9F7ea8TXX8xozeoxB",
  "key23": "3a722vUYkkW1zupTa7LgWvbq5vb3PGvhrgKsmUxXZKDwi6DrGDofuAVEAB9VaCVrR8fasRb7PZzaPJ81bNCXgdAv",
  "key24": "nmAa165H7AStHG15F6e3rwEoBRUyFfUVi4ZmKodmBCHF3uDLtpQ8ER8dK8VA5ij4RGFH7puv7GDeWbC7eQuquoQ",
  "key25": "Ht6gWzEjJNeW8oQAF9XSyAwdSi8L1HrtdAAgnzpKfqXRGhGj4dD9zPrSPfbz88ZbMM2qBjXrGZXYfzbjeKetUXU",
  "key26": "5bJiS4S8wXsTHp6giYEp46WuZZd3TXwhBjtySgcUiuMU3ihAJBNkfYs9n9LM6h3nR75tPxAqV1Z6pe7dfzk9H8ra",
  "key27": "vKk2Y7oEhTh2qfuA34VH5DkJR692byuWurJ2ZxmQrGzFmCyFcEkPouzxVXRSsNAE4JRkULSVPr4koZVRfbhMTCa",
  "key28": "3YwV1M6eA6qZHuRLe815F5u4osqYt2CJFJpaesD6D7GVV6TiNSDtCVQFkEPGBBQ2ugnwaiY9Q8xxRh4JkF4fyS4e",
  "key29": "2DWKgVtAcmg9q7EQ7U5XPf2EtdULBA7S39mJZM9PGGauWkoZRWKu7V1YTyALULKgxj1XoiUKaNRuLhDnXQHaaLu7",
  "key30": "36qwWuf2vk1bM36Uz678d32RLSuauNgTcoEefF1Qh9PzgME6JTtxccu2L8Z4b4VcVY4NXZSUppeZG56Rk3dXUR3u",
  "key31": "4sPGaxsh2S3qVKtcioykKrUBxzHGphaCpmwHcsCc4VaNLywxRY1AZefR3wNJwaN5dX2y9mognJEMJdCfAMyVzjFo",
  "key32": "GfxBHZC8xzvgE5ijf1R1zpmxSxjUbDJj8FMBCUEb27QCqZUZorKenZqeB7bF33PbSEJi5iqNKmwu97G2eipEfXQ",
  "key33": "3NEu3Vpm4VLQU1UHcuBNbNfekZzmZV7ihZnRqXpqNvTcLctontvq7gc5KZgyZ9gTu2Bet59PUMnyrcVvC3knQsfe",
  "key34": "44eVqq7tgX7CdBH6HoBiJY7TMeZFduET22DR63Vg827LPA7drRGtha9NBbTGsFjyzvA4cmp3Ja3zhB9koLCjdKfu",
  "key35": "5Hb2CEg9oDtYe24cuz4Xpb4CycpQxqUmBGd7Wx5oak2WixeiEJC89BSBfvrXBaBjaAXYv2dKf2q6pPXnr83znLnv",
  "key36": "niwz2gXmpWLV3GaagkVhF8m4KU9tJqzgi4zUuwTs13AdnGmYaWiwbotuqCMBaz1h5ZS7zGxctZm7Z3DhwZm3e2H"
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
