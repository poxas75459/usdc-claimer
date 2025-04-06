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
    "32CUUfvj4X7dvCTSVzLg1ZeDBopvwMHuXd3Mfh11K2sDh8bgy741i1db4GbNQMZZKYKsQ15RS6RXDiTJT88PBqsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tM61jPk4VVnT2VL3fD9jqmnyP7kiBEJTpBZ3Ni5KJjrLnU2Z94rQof3at8PLYknD28xfpxnJHuZHb9g1KsEVQ85",
  "key1": "2DVHVKu4AH7966TNwr4L6Mkx28Y9iXYFCCMe1P6yoomXdmLMxCak49RTSaxDA1QqRUVAP111nJy8cgq4Tvf7YhWd",
  "key2": "2zMDFksiAahaHybNEKEjbkhaHdZ9jo7i7UdKMfnS1SBVjQK9feeFhPk6m1SFpk6bX5sq5DRKUPYsLZaDTQUVETii",
  "key3": "3Lww4Uxjt2xcPxDMHEkPbp1kVJTW43YyA4reuz9yXjDFjnmrVAhqMxHiWpSH5o4tkrtxQPsoCwcWQuepwPJRbbHf",
  "key4": "3XH7L8NJXBfkaor2a49oT4jBnHiVBEchXaLT1iS6g4cUgqGQbZL9dJhvFzXeQpTALt6ZQiHaBhVEJ7PW7DzfQbgV",
  "key5": "5KaxrJeqAi6sSBnL355sdkk8gqGLAdmbPafgLLuJTfD6ZrVnwRdVpKptkRYSJxURpT8cZtE3NgUDapH1SDucDVeF",
  "key6": "3mHsgfdAhYo7R7V33s2ZRo2qUqREjMSrGafmXtnC2HapmtxJnW3KRmyjMHndJcdWshRM2tMa8m7YKudUTBF3T9R",
  "key7": "4RizHFibei46DCgWfX8bPEGa2V7AJs1cMW7u3Xd9vgcJurd1SRrGahZHo2YpAu3qiPi5MWLuNaEoMgRfFdfVcTLN",
  "key8": "5jPCPt1MnMrnHFhBr7kNBxCjunWRHLXhoWUMhYt3KMXQUiFcvjaYzTdUaHeUWohVvfZHPHuFEVq86TDKSNWsZnev",
  "key9": "2VxgFfJUFGyMwkNsKkwQyo6BysUQ2nbBFdXEqY9SbF8HXKfguBRe2K4vKCbsoBcdA5s4fwZJ7PikbNnzGgrPyn9A",
  "key10": "5s8ZNxsSq86Rdm7uyQvWws9m1gQHNj3qsqrRcCGh54RZiUTtkwWnayGVVHQ2BZV56QLFNTCXvLFrKgJLXPNHF6aB",
  "key11": "3QFHB5V43gnWiwETt7A1tfVB3ahWwtT3pvWWz9RzDrMpfuuybn1jyK6cZ7P7m5bQcHafGiDrCYft7nNpirNszo1K",
  "key12": "639CEDxLvrdPJ8FFG8VLRJHLtvnsD1ahPsYKnQDCrnACejf3PBwhoFm1kGL16FftpS492fJ2UuZy2KZRBmkDuVnT",
  "key13": "2HWLENEvHLU8E1VsAqJAfHAg9JEFpyMrAKLjjpmSBe5D9jUT77VwgsPRCo4w4KNgcdcy8GMoAPzzrWFFgtJj2t2C",
  "key14": "4Yd34TbWonUrf7KZBh2RccF9dRCu4HN8gF2bDcXyPW3zrDNG5AtAHnuZLrS5UF4qQwgEwi2ttGf449P1W3vHjUt4",
  "key15": "2cgQbTjSJkxvt5sVQTrPMSEs3baaAaHdM53MbADgabyWZDkUcQoqYCw12nq14uDeQgpFV7e3zBi9SDx7pT6HLKt9",
  "key16": "24agEtBDGR3BEwgrrGaDPyD5JawFxZVCniBk7td9GzicZ4fjrc4EpQsk8wbitPwZ7J2GF2YN3BXzTTdK6dQ3f8ii",
  "key17": "peu78cMB9PAnC4mNhW4osRJ8NRrv3ydWQKs233hmabhPsjvZa2HRfq61tyfLyUA9PqzkD2HvYhZYHLpWxRntxrV",
  "key18": "277JRk9XyXVfdi4mrMrD9qCvoPCRVL6nRK2eQpDCwap1jYMDa5UgcFBGUFBkLETRkAeVnQwJRkCoURAPRV6TmHjS",
  "key19": "5naq4EyAiw4khncvURgcB3wvkaY8D9CUmBqfXqSnWHkKHhma2ps8CP2vjeYjwLEGkwqWsD9b1BDziHpVd3UK3wBK",
  "key20": "4aNaF2UqQ3Qo1XDDJN2QDyhQc8WYn7FNUSDTFE8WvKrYqw7ktfDL8LqdqpLTokaxoxG4ydgGskivsQi9qnPHXanV",
  "key21": "5JKccH4GXjhFmp3MfwvLyTUVWE2aC4hnAJoPnaHjvPzJrwL7jujhrYLBtLDc6hRhyimmbXxr6FQLdkxaAB5exwiB",
  "key22": "XfJtLjo9gnnSKhBWc63UumLT775bykSp1T6afRjiEsBx1bR7aUYLm8o6H6rhU9uBKGbq7YT7qqCyq288ica6Nzg",
  "key23": "588Q5msE8SnNiEZXtW1zVta9fhwMzwjZExLVHUw7jsX7kFF7HQTuE7Zms6uunz9cYsTSEwVyne3vSXxqY2aGywpL",
  "key24": "3mjC5zFJaHVvUK8rihEK7ZPaN7dpPEHhyoD2N9tzhkjYRnWKi9qq9oB3fuWR6hwiJX1JEJ17Hj5hdRTudXve7dXW",
  "key25": "3PrGTdAwEZACfMVjEeYPN9jBwgjLJV6MnehPgWxQr5ji4RREykGkp1hy2LrRJbVWBgeMjtqbXxDhe6B7Egi8EvC2",
  "key26": "Byt124dKe1JGYkuhHvYvxxHS1SGESYstXLXHV9iSw3MvQZ8Qm632Djs9qMetezXN6NFdMmKeZPSXM7Au8Wc6814",
  "key27": "2dqtqSviHD8VXAKu6wKweFpV2Zzg3Ewea8XvAvEA6uKpYGb5TYpRTFtofN3Lw3Ed4Vb4YQHzZYGTJdCNvsbuRHUG",
  "key28": "3pn72CBPcT1xdV3g4tRoMie4JxsUVQzAsAMyFRS8S5Yo7iBhX6hJ7pJxTdHVyfJf5vWKtWgEzoXvZiPLpYsdzNPP",
  "key29": "3oMXWhXLDbszQ2dnHTFf4JbwuzbH6gDVM4KSyT47cQNRBLwLQFBgLxmMsrAidcCLanpn6aL8qnGNhorULiU57VcG",
  "key30": "4ruBXgzoh6w81GoDY4oSqiZAoR8kaTDFZvPbQeqKxgVTokBepbebnAifBarbtCnsF59hniMPYRPaUQvZmdrMyCti",
  "key31": "51WeugHvQkFpuCjd9Sa2m9R5anv9zDCLfWmuUQtobNgaAXMFqW41Ys6rYsK2GK8wNAM3rtHahJ74Av8WiXj4Ld4C",
  "key32": "26P2f3B256exMjBJCMUGSB5K1p3b1oPj5UoZsGGynDvoU67qUgmj2M2pb57B5vBJMgRdj4Rc26LGvwBbsnq3Zsmz",
  "key33": "3i6WV8HBvegcX6GN8tbMi4B8TqUJxc8AobTVWo7GFP47dAqVmToFS7LEugmUoHhfQpLxMuJNXg8zoejPkHT7Yh3o",
  "key34": "5pD2yF1DLmEmLYS6phKzr6RPbpeydLYrDLL9qoToKkvLyXGC9QDrvhmRzBriH2UZ3iWNGGv1vKZycfajTDHR7u3p",
  "key35": "j6fffCybkcB6d28j2BcCRuc9h5RAbF6xcA192u625YdcXXTGcQLNbxEiyve5VQiUF9kFfhfXJGq5BA7nKNgLDch",
  "key36": "21owFRhw77qwLiBjj61wEXLS9tSwMeYtkF7BA7eaqoTvSnTzLNXneCvuXARVzQzvCcrSPTwBoa1efMKmE9ybgHSa",
  "key37": "4hvv9TZshZTd4qeLACgNy7EuxF3FoxWfge1q4uBCyntsH8Pf4YsTQ4wxRY5rTbS7UJ5NoFZFeFAZUMHGhrqckFAk",
  "key38": "2dwZCwYtXgrYzsfEYRuT71kBooom45Zr1q4Ba73EJMbiDeknwaKAQjTQ6W2LSGTarMwmgVevFX77nx5YRvMgZE3G",
  "key39": "5eqSwmm4kWsedC6FbR8m7D7M6sUQiSwsYtQ1qUT6BVawEVGuUoGvz3nrU5p4BPQE2Ci1zKDjDAxfYDmtrQbtWzFj",
  "key40": "481W93fytifRbeVgBCMogcj9yku1fPe1ehaR8Rb77PbJZby79AufLafUVB65vnBZgvGYNMQSbMjLssy6CAFQGD7y"
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
