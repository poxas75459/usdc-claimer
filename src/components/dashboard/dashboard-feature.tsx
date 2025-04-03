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
    "5UqrjHyfJLKFaDXs25RWPmAHDqJbXFXmCHn4nNVdPpZ72fmTdMzSETGE2bMBGMLRf6DdoXegiKi25PLbEsgjRjCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zM1nkBNi8u2bWngH41qjcMo6Dzxhp2zBjmFrw8ckJKnVNAMXtmKjHSDYxo5VbDZqsqqKoAgmhvHijS2EJgXHBqu",
  "key1": "4HG5tijt1UgoCJuvA9SfLQWJZ1cgkCNTbQAVYptuCYp1DFbV4bDi7dbQvNRKrXXMGfsf9hHEtB5amrKvDbt1M6dp",
  "key2": "4FG9JTjjwAXydKG4SMvGuyPdAhBHADJxX9vJvFb6Wc6Tx8mWiSX9dyHMavUjrLcZzGhm5cVxqCJ3XYBB5481YHfb",
  "key3": "3adMkiy3iV4RiqwncXAmNeUg9mDhEq6eeQXAvgniHFAVj1X9rrX1bBGL7nJw1xCZfoPte5TLHH86w1oyuhVDqCow",
  "key4": "2jDcnY9pHCf6Mgvf2HGamzWzXAy3NchxzZW9nH9S6SqvJbDjHXUebLvXV7KktD3kU3YD2CoRhePVUzDvKqiCsAHM",
  "key5": "4rc11B6xogvEN5XqwBbJeyNTamauboHKPFYcP6pLJyM44VPJEyber35pz4R6rbqpHHoYhBH9cxCWGXqrqCLiwUzr",
  "key6": "LC68nwjkStBxANeBsKkXp9As3VSvD9Fy6jszWR1f4MEyVrxEJmCvemj5Rtrg5fz2wEdaDxjf8NLtSvUk52ZxzCE",
  "key7": "45VhYXzSqiYYyLe4eXhY9bE7uSNN2SXQVQ4rHSeNwjDnpLg4PQs8wrfyogC33rEFie4p9JDYWddnU9H95u8jDePd",
  "key8": "5GhtHuXfb8mpXke2rF7KFBTWRbymtoDi9agsKv3GNfD6WVsaDn2Y1BmRAx3QwmLF7XKdt34ALLsGgUG651DB6oRK",
  "key9": "3eGbHYuCH44BPvAb5CuXUWM7ZQgeSzr44227vWwoix5qGgPqbF2mzdBNmPX5q5U6oc8CJnaCyiFoTautvDb7mXQt",
  "key10": "3gaFVf2smTEFoiKrCYorSdmZdJdkQZMZLNohYxMtYrCuvWMvfkrk6iczQkY2ePWGaBG8xfu4DsSAWvH2gp58Utmk",
  "key11": "3kB4Ve9vGz4JyRtXLMny8SbKVDZM7e4sHioe8x5g16GGdkS7RBubkUuXXgMEhzJtKqWBwVAR8ojTD81GnTbyA5Wt",
  "key12": "3ZNvXJUTMZ5Q8QFDA9fxRZNog3ujAbUsSH5RDrmCkJdDBLuXHrHpTWqHhksrv3TbJ255fHJ7qU8PmJwqQiyiHzkK",
  "key13": "5kZq6iGewHzzb27Urw2STTLiXknyCdG41qpAGtk9MwNrqGdvmfnGwXWKR3uHinvgKSQdsKYKjiisBjkTTYwmDVrz",
  "key14": "4Pmna2vcwugsqdQE9DJiLHnJrUhN4xzSgrEy9R1hckiQFNLisMB65MfCakf9E73oQh7LC4SYVQzKCLor6U7pgNSc",
  "key15": "LC6GyjhmjQJsQoLmBrQ8QBqftVJabcgfaLBLbWdm4W47Jcohgc5NM4FGEhAUJdPVWf6TC9JcRomzkRg8mFUUZAU",
  "key16": "2VENo6miyqpbdKyKW6xqn5hFSL4xW7q3faRhV77WNTuNLq5fWyBWLrncKPC2Z3AAhC9yAARhkk2D3zC6mKJQj7Yb",
  "key17": "3yMs4WSFPYkyGxjJUKFQ46xX1MFrRqzgqXk9V3Y1SMPy8EM7MEQAEe54Rd4639gqC2ukapYMo7Fu9dpzh6CJXpYW",
  "key18": "mkr4Gx5cNXFvYk2qAG83fznAviLNhq2oUSFfzC5wQ4Di6fuqPKHsTHV5YCCfTTpsRSe6eMdxvncNhKXWyqyfmpc",
  "key19": "4nBUckDjHKX4GckUirrHDuNPA4C5qp2owtrE1ZtD6RN6tSoPPxWxPsyAGaRNB62N2dezbJVGYL1YkWWP7FqJHuhi",
  "key20": "qtrwQ4RRDTFHreRJxVXRnRgRZ9wNka2a7rXni1t9MV5FtRV1iksk9LE3na9PXB3hjVzko2CfK7QNarC1Dz2WC1u",
  "key21": "8q58ci9D4vKyAaknKuyDWQaYnxYc78LZ8n5oCXuVKh39sT6ppaF9GsPYLbv1V4J4KiaRn1o5PJcRjYnst9n1rXg",
  "key22": "5VoUWu2nPzvjgEYhzvwFmmrurqvWddmEGw1MvDw366pWvuffBFRCdtoWjXDc9vctn5kjbREX9658Bttu1vXqoYzf",
  "key23": "4P2h8q9ct994bLWWwb3qVE12CQyNMPxqdtCLXJ5ydqhYKLLKKG6FvqZAds9KoHoNYUFSzrwoS6LmAY9i9f1Hihqt",
  "key24": "3ooANY6LAycY9YAshaf6K8yLyHFymjm8VibWi5S3Dwj7sXTtrC82EJJy6jZYuEuJDceDdgwfoWNc4B7UBu55ddEN",
  "key25": "64rsoMpftJLf3TFdQ4gkagYcxR4FyiFogtMNhKCorud8F1DGQfTcp7BrkA4qwgwHzctLuzxPzZmjYF4DRC7oL883",
  "key26": "rQy4zG7mpp6JF4a4kZVT5hPzLyr8NGynamQ1FupRXa2VZQBx1SbiHJDkz2hGRdZkbKafxH7GunZA3RTTNFT2AF4",
  "key27": "338G2CFMyuDAAz1uynoKsGzjdKeKLPNm2vqDioYLaDoQ4S1QhMk4GPdrBgabVEKR1sULN3K9D2eCs27BumqFhNTy",
  "key28": "61pHLZuMkgxmaXosr65EnpRqKNnAfUY8n3QNfsKKhXhp5T7wRUgM2RWaBDep4wW8g3KCnfHbJoqndpupQCPwNT6U",
  "key29": "XLqZa45Dr7UfuEh6DYHUTGYvvyf8jrYYhBRFqHPgW4GTiZu9xFYL7gwcm6dsDDGQ3Q7Uzzmnfy9uwTLQJekxAko",
  "key30": "AoCjJoV1A8DyVbbArJuGV49WL25wuMNm9Mk61LFjgDRvxHmKhtauj3FNzkEV3j2zMithX9iCTthndNHW6qRRRmv",
  "key31": "KfzEy9HM3Bysi5LnY2sw5bDSsdL66qS6wEHonwxhjs7TJ2PSPqG7STL4rMrBYWdECUcyJh7aEfNDyaLbG5tmtnL",
  "key32": "5iE2GFriTEHqh6vmJhTq6w6ZqCiVCwe9uifdvDeNZmBfsXmpNUE74rhqzceg7AJBC9dzBdkt8Di2PVC4sw5sAHJk",
  "key33": "4uvMJb56wF6zwFgU2hQheE5knKpYfxj1pK5rsJZ5rHzqAz7E6dypdDiQchb4uRdSwKmPM2k9Wc91YUVWGBzmk6pp",
  "key34": "3dAsupv3SjgTSN7VdjEZ5PwxXKVTafHTsCzL7kbVuyR3rNumoGoQeGUqRR5i8hAeJdzQ34urN9TPPRqAzz5yZm8",
  "key35": "2RWC3TxPNHqjsj8R49fgohVL23RTLZck4Wm3yNfGs2K5BX6gUR53Lunwakru9TK7kr9nuvFbHXwN8Q9yHue4D3AA",
  "key36": "3nhxsxQmsV6GHuny2JbBFzmw2yu51vsZeq35LH7VNUQ38FaT7vTDkUmrFcbqNC7hjTMjscX6x7m5Zfn3D7RvbzLQ",
  "key37": "4AH75N2ZMscdYowdV7SCevEuxzDkMAUKM8DwX6dTBTNoengv4PSrpsD1tYHhseLvhLs4ficKTLbTK4MwYBTJ6nJV",
  "key38": "5c5m7R7zpvvwqtKU7jCPrv8EFXRFosUw5UAZnmNHJ5HzBLBcFyLjkJHQiRPL41uwHSgjiRbqWG4HdqsK2oTd6Kzb"
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
