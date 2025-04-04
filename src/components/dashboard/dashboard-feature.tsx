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
    "3aE8yrAEVnfeV5bZpMhSTXtoxwTRsEPGP55HJxfZumv1GDrjpD5SKBgfw3xswAL2LP91WsyLhHuFg7d9S878Z9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ETDsGvLUy1wYS5kHB8jtMzh3TQovnmipEYKVNjJ5p3Pcj13GxjAipmb8FrGNGfh8UJfniNrDipFqqYNzMyyFmmj",
  "key1": "T5c6D5giLFA9h2JTyEoVav4rCukRCwajGa1d2ENDWfV5dHp5pLxQ8AQ5qH7FitGQ8FEoHKmjaA7xnNzkQDJDmuV",
  "key2": "RPah5UMRKLbLGTGUbtFzVDjY2QeA6zU1nyFjwJFfSCUkMmtH23VhrThT3fUq4uiYPFvFCe7TUFoKzABkfNGEMFm",
  "key3": "2iRba66ANmnTR7CT73uMdgTNVs9ZTn8jDkLHJoL2aQ7mnUDxgseH6A2Lbv9dbrR7kDzUFJ73TqiDTKmb7rJ4kwMb",
  "key4": "YrhxNcw121wd6UgTkx5mL1WQRfVxqc8qHe5aehC6nz1612uhy3c3cr6h1gqDEF6pALNMLPWvN3zdAHUBVXTtZJK",
  "key5": "4RgFBQC57ZVoBtLJJaTeYcqvbqCnZWLnp2BNwgdQELYTU4xTHwD1ZKoSRAfvRDLTDKtxrr988m5vWFMChP4ph63j",
  "key6": "jbsQ1cdUGeRaTExwyfgU5VBLAZCp4gi2Vf1sguXnhJfDUF4fuWts4K7e1y5qVwUdS5SFjBUUUmkko7bxMxNGJbB",
  "key7": "2cChDKd35qkFGf7xeKAfy9AT5M2e9P8Js3RJG7R5e1Cij9mQA4dmCo5kaoE4vvrgsRuJzkm4YpW8AeMZZz1uMQV3",
  "key8": "4L28cQh1Hn3SBY59DjFvhpQcpNFFxkfaocKGEq1ZsHHPyUdNGF5C2pJ8peydyhXMFHB3VRkc4sqeWgZuz8wY1yX1",
  "key9": "2ywnSCC1GKiw3ajauzSZjxv2KTAkEbphti24c3uDenf1AaGQfWudjAn2sDcByWZa4eJTwfbmJLMjLWhgABSeJivL",
  "key10": "5v9GFZp2WntRDUBcZcgP87JXbJPvXMPXiT2XC1gGt8vkVz8bMZUrZxZyHaqF2G9mCGkj22geaGhKYMpnLTWYyYuo",
  "key11": "3sFRRQX81x8u7yxR8xPdaZFzqPw1jnhYpGNZJKYDoLWUagQfMCXxq7or28qiYaHNP9qMTGbYSVbtvZSCu2EvWjzj",
  "key12": "2NHL181QyDe3pLZkf1efoHaVX1b2wzUaebywnhujfGm4ub8VZae3C4mbj84AED7ej75G6wF2WeEknFeUmDhiMJ5d",
  "key13": "3EST9hPFEPbzLufNmnJvFzUnpjCBhZibefzX57C2MsakwDCp3gkCGC9Hn9kRzBESKoQ8Qkhs8pdoe3e2jkQ63akx",
  "key14": "4noa9HJBaoLqWtEXdApfio1UVtnV5TuqV9LNzQVV46fXn6ZQoXu3RCPyccCxkkaZ3EAwdLnHEjHwVM9W7qX3vLmA",
  "key15": "43VoUtD5ZcUFgrozb4HkeuUZZczaBQNzUkURWxqEFeciyDhZMAnXaXYyHr2RsAw9htTv3K9r7qavAdaN6ejYpQXW",
  "key16": "5DriRzZWRqKEPK5BnGEsQfbL3JyzVjcuXoREaLyd38uUjPprkTMWLwkQqDyDaS21K5QTqNrqL48VCZNMZj99mqQV",
  "key17": "4WMf5BLneyZYikX6BUzgFbvLjaBXFH1QuLghmrAxsVoztHZGngR5zsvMC4es3DjbwqkfgejjPmnSZumPjRKxEp31",
  "key18": "evM2gfcLLp2NvZKjy8SToCScxrZ85ZF73pvA9pfV1iMHyZXRsfraygmFsCnWdWYsg45LPgVhydo3i3b2xZZH6fu",
  "key19": "2PVwWZvCoBjTByXPQSqUsf5Bq9XjHPV6CBHEnoViwoHW5SukZyTYRYc3Hmmq5uyaZjbGUkB9tn9HPFuJu31aU9hY",
  "key20": "49FLBtmWfkaBjtnkPsQM2Q9WVur4LTJ5z7mWR9Q2AnFfTewNfN5zcKTESNmyBH85xEGwz1QNGJZ3xnDfu6V3AxkD",
  "key21": "2AvEMM5jv9ad12oYen6aJmLoUHJNr8RKdqKtQkuRbToyDgto974xonMECr7XxGNsTCYVb4ne3XQhZFVcaHW1uo2E",
  "key22": "5FpNi2vKvej2T2JQqM8FjJN2F8jkJg5nYy7SaA3ezx2QhWcTaC63gHT4bXuhGNBNYMUvAQPeDgwuJuKdwizeLTJp",
  "key23": "3jfYhbDpKwyDXCzBNgLGjpnNXedZkfsV9FxLAcEonwAbsZFPuJArSC62kjfs6y2MmVb7ooKYxHY8PfMUWkECqdB",
  "key24": "5fJFTyVPZeudq8FnsXcQzJ9kvY4EBiVpFFiMpBNc9KTQZGQYfBTaPWa2r4b1yP9r5MxNzoAQjshhWGstfYouLmNA",
  "key25": "314Lc8AUH1AWoWZx4cFrt5N2ktSXzv12D8SEd4H2pmmor1ykE1Pcfia7mCSuqyW93KgEa2TW7hVYxjKnKpDX49dS",
  "key26": "2pyVaDp5QmMf52TCkEirFXGfCsDY1sUz1wnxze6DLKjGeULgUbufaW6cZruJ2qifNjfw7hAerZP4VqWk7EmYZTda",
  "key27": "4e1scyNsRBJhzjuDFFC9koR3KLxt5ta6Ky6BoUpqyz7bahXvrzq1jPNXbKo8c6eQn28j2kQD6b3Ea8i8FiEnGepx",
  "key28": "5gvWb6Cem9c1K8uAL7kdbtSYNfBVZwdy7qytVunkdTVhe3dPCk4qzjDpbLvRvkVKSDvgixAKwfuELC1KmDC7x8wB",
  "key29": "5nHfZzbdwbtPz7XNxcPTsm4XdzgcD4aYrsNKGFK8ouRW77MFsxX6y32S7zugcsCyPDthcBzyxB35Tina3rzWSaZX",
  "key30": "4QKQ1Cfe8GaXUwFPNt5cvuLP1zwyUqd1fi7z8LmqosJP1EXfMpesycDwfirE7Ae1Ai1xTUkXEnhrWgKB9MEmYV5N",
  "key31": "2aK9V5FoqdYdiv3CvjxyymQGoPtghLZgQw1YYYnYtUGF49jwQBVpwSwKgsNscZPsNJPYt25nYhg2jDqHeiN2FVxL",
  "key32": "3Yd1LseUm7fpWuaqdCXPMuTSMmW5MbeXdQVG4E35GnZMDJarZtyAMZXrnpFsEy3ftaD469AdsCiz1RPpDDjPBKiE",
  "key33": "4SmDYG3J1pN3NoWzwkY9mNCssn9GLbGMH1DjZ2TH3tDMgtKg81NV8ABLhJ5MddM2ujXYevwQZZZGU8VjkLFUgZkR",
  "key34": "2Cgu8CazF6HsHg7SQ9DHTeQEP6YWccvdHGRcLqTkmx2oZRKx8LxwFGfPF1p1VLNN4biYTSba5ZoT6S8LmUsev2ee",
  "key35": "5v328BEGR2C9CPg89wCyzD28fsCFyQpC9A1ytD29D2QgtgPgqvPkJYruYLRnmWy4yY4DAwN1fjHB8rbn21fukx5k",
  "key36": "yB5ZBH3eucPWVYyA14ocFV6kmV1Sf1YMmfuJYnQvUyQWM5BdVEGkLDjETQ1kAyDztuFW5nis9aD47fgKVemtaoW",
  "key37": "2u4ACp5zBJucXh8Q4hZQc8TQT3mb74jUMfNFjpR6u8Y3vRTW95YE2DvwxE7AV19RcJa3CQz6kFgpEyJ77t2egUYz",
  "key38": "5xWw6GdKVQnDo7jC4118igPABRvRtiipe8KLDuHQW24tFT1TJ8u4AkRMnhfxDHnPWgFDeSfkeXhCiM81x2x8NTe3",
  "key39": "5vgeZkuSoftUQVZg5YAxzon4qPbX2fTM83GxCuwe6vMH5JSJp2QVkbs6FSTNc232UrAj2EZCVwSgFLTkd23ToU19",
  "key40": "3Rw9cwkFAtHQvphVX9A7StZ8raH1Wrj64F9RgZcTXYwfqJf89XvjsQ2qFRH2hDLBMAoiDTjRbDR5uCzkyFCGZ8zz",
  "key41": "5VBF72WTCVVM5zEXmNgU256j7QCPftn1KMievHPFDf32Mg7CCakbswNWWj6xnwcg2jwUNszH1KRiVmw8V6st3EtR",
  "key42": "2K7RvBKkvLZxa5r7hEj75my6nmX3mpqzwJsD3kSLiqpZUq3mMkASnY9V7QZy6ruaSHYjjoyQqQB1BK6kYpVWVH43",
  "key43": "2655vUJ326drguXaM9Yjrmi7rrRmHbzXmTWLNa4B6rUjN3edK6sH7Ldst8aoCAjV3Q7eYw9xFhpVc2Cs8Xb7oDj8",
  "key44": "3kkXTLdkimJfRUFzWQKRysiAh7eHhMrrvTi5yXo7SgnWqQ1uDkYJ8Za25b4j6zbiVBHwrWtN3JDSx7Z2Y9ov33Yj",
  "key45": "3wBdrnXHi1d6j7GwQMVHKCWTkp8KC2dxsJME5voSFK3QFhfL8vmpiQs5v9p6hT8nZu3QrMFe4S5MVUS8V7WUGjDZ",
  "key46": "3RfCXVY6L92dTwUWAoGGY5atgUMuKJvB96beBET1FoyRtguxkfm3dBgM9mLe2DRtKJyijcCLXRQWN4th7PGM1C88",
  "key47": "5VGgtSRh6d5XNG6Ty5KLLhpBaJA1gcK7sttFEaWrDGfDYatUCpoTiVmQAcbCVXuS4RN2dWhXwCdLUTm6R19h4CVx",
  "key48": "2ej9UkiFWAYsxvqxndeHk5wDiFqFHe27T2WzzDSe37XYVw9eCM5JEMnFnFb8HjFPsFeAei5Df64iM1reqo8MMMhW",
  "key49": "2wGrETnCke3FoKdW4R3doWfx17yfhh81wHPYvhWbQbHL1cG7T4m3AVQXifxswnAXqLQoBGkYQ7s39rtdhgyoDFaF"
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
