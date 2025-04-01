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
    "5E68GcJwAiEQHosF2ypNcnig5PpC3tahcYzkdxiQdt9gxQvrwRxpAx7KNj1y5GpY4pYnJ21j3ufdo5LJWjHBxiJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iZp2yyH6Mv1feA8m8g7VPtigfv7vkwikPqitt7XXMPpfALskhpMNHWscpnzfcuQxUp51kU8zsa6Q7eVpBRaa9jT",
  "key1": "yGTQkcikvESLoVUDTvqtuQoLdhvx45uigif2d3zv5qQXSTHabt5Mb31GL3MBwGZ6Spdzso8ZCNez374WjoDJBtm",
  "key2": "4qZahi9QP6zr9PBfCbBxD5RTtwqfGx4kqRDRZNTXovBnNYQFFnNr48iJpMLwjYwDqHAkKHG4PjgRg8Nu5s4eboRt",
  "key3": "3JxGigktzDwsxvrArGi8g1GQCmKnQ2vAvrACE8RfEBAouLy6WpnYLLGaUmsaDCuAcXup2pwHxyDZhbDX2dgVzTSJ",
  "key4": "5sDuGbsgxM5vXwYP2AdjSDV4zyC891fzzPT2osCrk4i9vk3R7uMtHjVSWfZ4xL55xiNQiekZJvMYR8HrCZUCL2e3",
  "key5": "uvxjcxfesSzbqzxkMqT5LP699kw6frMMoqFaTQtXEesjUj9ESu5LDCSCTTNnNh6PL9QevY65fqdABD9BAsDLnFA",
  "key6": "AKLUZ5XSHPo4L3gmCeNuSvwsj4ZH9g81YHbEevAodXgNMsrzfNthdcsRvPTvydcu4YwDDu6PuavnDANw5q3o8Hx",
  "key7": "32oKSCFttckiwuWKa9vkdwK6HhoG76mdXTbetBeKpiz2zb5LmTnCcNKwk7pypPdr7DqreUMZ5QhddPZ6ejxtRtuC",
  "key8": "wKPynpJetYvjghok4cDh7zaqi3NTUPJg6M57uSifRh4ozccBmPcfeBXTL4fR4gYams9ApZqTxXAsM2RQuKEDyJk",
  "key9": "2SE7xrKfUYgzSAoPBW9MZtbuC9vPnjkq5ajyFbjmdB6J2NvSUxYtRiRATKFSubEXkgCz95TpWtWpZyXmmSa5v1Wn",
  "key10": "5LcuKunQMPUTHTLTnDG9zrPkZf4FaJNSpGB53vAmkH9b3k9DgRBkeReXNJ54Me1inEgVzTiuHF5GWQ25b8NLN3o4",
  "key11": "65xzCA7UCkFRJtn7WppEi4yWXE31fF5qsQZWeSxeQveGEwzwjx5HVR1oTAEQshJ4QGMzaqzuMLz5tKeAaDeReBLs",
  "key12": "4RkqMgA4WDx8aFWtPx2bfuT36fz4ESPUCq87qLGd2yHp97xmnbchMFxoDNxWX7zcTDdoX6TjhQTGetuApV2SMX4K",
  "key13": "5WDMpKDqDsGAJDnreidTmQ5GHJkXNaJnLk2beLDNnpXr9GE1MiotHrJHG9MgdCLPgGDD9evT66jj6HWcs5DN7m1K",
  "key14": "Q1iguhjA5vfgKbj7ijN58bKD2jj1t13rxyaAu3kCY5BuaDBMqP8CaYebrs1Z6qDuMm1RoPer8D6CUBMAuSEyrU7",
  "key15": "4gALjtqGXMBYmeG3eRm2U2Bp5SMMYmnHZu8VymrCs9U21geU83X8wyJKy4QAScRasCXig9ZNMG3hA3bXdr4ZidQ4",
  "key16": "2NfeYzV3tFkhjEhcGzTxyQnquqrM7SrBpXdvqwmfHW5WkFJ4oMY6GKAikGQdVRpmv2wEdZqKma2XFBfJM9a1czjH",
  "key17": "3A6Pu9M6FEdXYFTMSXQsHrfoF5JxWU2KRe4DNqn6hRxNvvfPmseYN5V15EM2WPztS1EEiv3YR2ii3Hf3RdQJeqEW",
  "key18": "46DbFAZk7sHfrXZVfqxRU8piwRT85ssKqYuuAWLPBXYvd41xaB63eoAzKE8VZjApFMGZ9oXiv9whwt37XytNpM3i",
  "key19": "2rnHqvEKDnSANRmsHVJmV8xJwk5Epxme32zKuoxR8RtZecCSX9JX7m1u4ytVDqqHG4agNhPshictEYrHLbjryqYU",
  "key20": "SNZgEN2cEhNDxv9M4Az5rf3tuCSKGAuysDBjzhh4LaipRVHcHi2r3bKrCQWSJiB5gLRdAzMG6DXhwgpSpXQDZyu",
  "key21": "3WEft4DMbcSRpWnWghUjSrNsUCTShG4Def3VPDQv3CjoqxirBHtccYWMab2mJz5GdwgyZz1DffvhagoZEqvpfJug",
  "key22": "9nhkUt3bNXKn4dA6ynLBTX3e8onjEVyESEVk1iy3hBHL23fbCwbAirvsJhJD6fXDTsTZr19T46JEeSXUGGpi4BB",
  "key23": "2V48vy6NfqFTNCR9AsqEwvXyNXHd57s46bdkQekyoJCoT5iS5rGJSwcTDHGhnkYYfsNweNhF8q66qn97GSqNwY3q",
  "key24": "5QaCE5W4txigRHb4pLDt9EoCLzJEccuVtMVHwMuLJ6A2es5SnCbQT1AVmxC6CFRhDSGcVRKxjLH8tfbhXFwx7diK",
  "key25": "4TTU3SpLM1Ee2SUfw69SymQTcELy6pZKh5Tfvn5dn8wHFL8GSZfj5zDEaJ2g3wZAsdVQrVy1KQprhsFTNpvaZEKc",
  "key26": "4oAHgj1jji2Z79SL4XFvPHRbCyYCtbc5Yam1vut5mnRUiaugpcmcm3TR6x8D4RBnYhAqRxkFgAKhK6jK9WBDwh26",
  "key27": "2w2FjsANLyzWHEh2kG8LzdH8TrokRf4ZfCsLPmKBkh9CqXvuRiLbgHUtV6VNByA1yJ6HipPaJugUP2QahM5djsCg",
  "key28": "4efcBmGyLdowC7fzGjTf6J3BFmb6PBfjCyggT19be2cUUHMX8hoyjzNvCtBpqjZ4uzPoBHaNtEHiUUR3ywnPJ5qb",
  "key29": "2os1chm86k7owce9JJjjVmvNzCYYoDDrHa1WAyUtZ4St1g2qDzReUZDKYdoS2RXMB6g9pcisbAUWRfbyVenPfEbv",
  "key30": "4aeNocJARSR6WKsxmGKjtPtWyRzd8h4WwmRZJ5Qj4dqYhoeNXJvscPRR5P8YeTqWrJYSRMvNcp5vC6nQ5JXk8aWB",
  "key31": "2qXhKFjJ6nq3FTf7ErTRbRqtNPRE8jS48jYFNEQZSWk4i1oG6ER7YGfnpjuUowQUcJLyAFqyKSDLELg8TdrnhyRg",
  "key32": "4ybNkfJTZiwGvf9qasMcZbv89MSGqyMs8UH5UM7B2DGKkQKfQvi97k8X8gZEfmBhnk3jBMvEgdTvyMjyfryhR5wD",
  "key33": "3xm6BD2ykGimEgkDTbMw1z3LjiP1aazmHJ6NPHfa7rfgq5fWQGJ3R5zxnWvMCZmVXKyBNtkDdrXFWCwBt4R6yG85",
  "key34": "wmKtFQcCu8yKaVURxZoyqkxcnCvqR9NmJqpT2U7JWvKNscqwXejv5JT3SUGas7GcN1WfnyMJGVaa8NZbSKoENbY",
  "key35": "5zozyU4swonxAoKHDwUxiGLSpW8c5a8URChEBXJT5M55x9CDEBzffU3eq9w4tdbZRPyHsRyhgF7dtAy4b6SQtAjE",
  "key36": "tsYoWx7akw95sHaWfGy57ZJkjA5BdAm4xsrqy1T2P3tRv1oh4VKHh3CgMJsJLcb39qXT6WXAf3Cw1cT9Xi3GPRm",
  "key37": "MTSjQ36cLEpD2sGLdB3EQ7J1wXbffEBQ2STgGgwBKvy6Nxv4jntfbLgX6Kn5PpbVY1S5VgVWAayqthj2L77bXW2",
  "key38": "2RPyzo8vraeGZ6UNDNLWPu6kVDPBhKccZojwnRGJwgBLa8b5DhwAdkUNPx1q8Nmdvz5Ekroh9eKvECvQx2P2QzUR"
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
