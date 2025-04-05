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
    "2FE3Mo4HX6Ca5bJcexzLeui2KpMr2Vy4iuQJLWX6wuiK7ykBftZKboA8i6UAamvs9k1pw4gAAxDvLBf1kF3nN8N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Zpw8Hg5oUZCmWKpmATHWJF1vP8sMPzQGfPXpK1RfykyxurLg873bBuQpsRxtUYhvpyNjU3TZrDgiduaTFNY3nu",
  "key1": "2z1qFiJbZLs8A7juTbgSRGGK8jYCD5veGCsx9DqASoKY4SqTTGqashM4gi5VruRGCsvHvN4D467drJX2gyuV5Tty",
  "key2": "43BrG1PAqLZPjBVsq2gxusHcfShPb8XJpCi4Unx9jTmKf7ov1Rn3x77ThP2LYcAV1j9VZgbWpvwuDCH11z5T5cgq",
  "key3": "1F4mAyCREwPZVJaSipywLz6QeyvYmnmbG18FQoTHAdpcFAVyiruTEh49qfieJmXLwydMufKR5cAC6HrefwtWZys",
  "key4": "57xC7WEzp3Tsyr5MaGh96SqHJ9w14ZR4mNyyebU2gSiyxJZW8iQF7LReptaqtLshC1ex7pxJjh7DhZrqfQNaw8EQ",
  "key5": "2B3KCGghrxDXbs3opuStTyW9msqgUBybFjNAd37fGm9vnAvcvKaWGxvRwZdkTBJSSMX1ha8zR216WDJVmTxLftar",
  "key6": "3A2GirgbYwFBJuFSHHE33uchtghgD28fwEwQ2Rc1ZKqjP3h2ZiqYhTABHu3AnooWDTV9y8m4chBk8N5wKfjpgvch",
  "key7": "44iMj7K8kxKxcKeACHPnCtxuVJo5Ts3uUw2Ca87VpYSWgSL2czoNnHDfPQHkmZtEhs1AFMazaXC7RYFiWrynSYH2",
  "key8": "GxyJQW1zSwkfkffnuFEmTEsdufQUbvuMNzqCyJcg3XKgDerSDY5XxA5Y2PmDXpoNn9QMYTmqAk7z19LLT6VjY1s",
  "key9": "3BGxmcMGhwLKMvRJLaWhg8FHs7VhQEbG5weA91dmnVvn7Szg5YyojtedbGXsZbPiuPAJuT7ATiKtnk27UJCRLGz8",
  "key10": "NJN6Y6RmVSszWMW9MYRaDnhoPkRYbT3L5upMrCpctMPSE1amPomej1qzR5YzdjqdKs2jDeFJCokTWWkQDQWKQSZ",
  "key11": "38qzkvfyXNVPLwdFdGYicAnSx6ie9wxfsxV7pSh1SgbV8cjHfHSq3UwKuHr36aiTNZpgkkG4ipekrcYFBN393Riu",
  "key12": "5WAm4SrSS8Xzx35jy4MNWcw1yyra3guQvbepE2L7S38ukKzw3DtpdMpc42FH6SMo9mHq5hXG4aWjaPXaa4qMuY8r",
  "key13": "bfZmTinVbbwAWoSePJfwd2zw3yGgxjARb4UTKiGGL9HCi4VBhQHQMwhzy4XXnyKhNiY4b8Ds9eb9ERQTbZ2ejuN",
  "key14": "4xkihFQNdTKMCR2Nevx4iR58hRgCWuYpzNhmubWCmpBpBX7jLvRD2qFcg5jKPZ1dEK572GtPYDLqmqcVBTm6rjWg",
  "key15": "4tZ3yy4Fns6pwC3EFvZApnPTGPiU2s9yJPmbg3nNaFhMFV4PxC8rJMNSGnkYrX6SodxFXUWRH1NHEJ1rxxsborjv",
  "key16": "5M8qTmLx7pEosxN5FatikVaAkiyZTiLDoxz8kBuRRnCqED4knp4GNx8oBPGukd1hv6fAWcBrT2fLPmU5iTT8xxmq",
  "key17": "5ECfQGACBENy3zy6JKdJhe86FnePRic6svDbx8H96ysPPCmRHiYQDidbmn4rs5HHQDHoDkYPwjXAaDCnXs3n5p3A",
  "key18": "4EGwdTweZm4yzc74mtGSnmxTQWmYx7haVgw4FHnES5o8BGvbbm4S7DQiYp9XBX4LoJR22Rir9czHTMWT4ZQ3g8C3",
  "key19": "GCtxv59vr8gkw7p2TM2uVuictWuoxk15rZn54wvy8p4bkQDrQi9PqS92gJRmBtQAPpdHeWTumotTZQGPDboR6x7",
  "key20": "4eVgT9ynVPhvfPkyzPWYrfJGiYqd8cSBPh2PCmCh7nDJkXEC2gyKAsotABfE9f61tARV98s11bkmNpM3ghKEXvAU",
  "key21": "4piHKyFpsXCA1q1pvAHJjC1CYmgGoHGPsHbR26wytrYhXTrh8SeGGPDkRoJGUdoScnDg39qMP3thfJnBfQQQWS4w",
  "key22": "5UnQSYcfx53w6Si9D9WH5H48xfdaeVe18dumfBb23GzhjLoX6kFQhGBQoxpzaJZQtmp8AVPizgizXM6m7WwcDrmN",
  "key23": "497w6Axqag5PNz6zUfWPtbJG8pMuWQAVCUuEaPsNSPK6Dj8bVuaUWb1hQieF2xmzKeYYdzwG56qFXetCY3HYMvvu",
  "key24": "sdpSxgMM3YMuC3ncUUccm1UU9nro4Udd5SyKZ4SA3HDhWYrq68NLZDQYQasEoJFwWgBBiPJL5zVWixuzGfHyqhn",
  "key25": "5YEMgXuku2EenhM2LkXtqG9bdwrphbt7kwUQarnyShvo6S23uB87ySerBQZ917Lc2au82ns3KahFGAGFock737hY",
  "key26": "3AaThN5LtS4Mzvq8NAuz8HjhSZRfFvAo4fKQU2pH2937EMhJ9j7joLHT3Qa2W48BQkqNxNescD5L11wfw42FXbE5",
  "key27": "4hz8rZoNRFssvMLaxXictaDQtxivsobQJ2wG5XeyqkcJeYJuAxW8SWgEGjjBomygHxsyaHANmDPbSpgWuTGTPHyA",
  "key28": "5hCPqdbvB1P49sMvPDbNBU18TdNM8m8FPu7RJd9gYVXSHPoJpfwub8Si7aBgcrRKnVGLazw7rfPuNi3PNAcZVmF8",
  "key29": "5fo4eUtxSeN7NchL4Uw3yi3cjewe3QfSuTLKHNh1EbwT3vXWFM8giSzSXqjk4BaFLTRrfCTgyFtZTHxkYuTabzVk",
  "key30": "3eaU9xLr2ZJjRWi7KN8xkaNtHAQXJKsJHKu4j4BXAZ1JfTnaKWf2QgYuRLHGdnG6wBS5PGy5XGQHBBP4r8cTSycS",
  "key31": "3V69c1cogvTXNnMk6EGrTTAz5n2aF7Tzy41Jn5MXBZydpkg2Ecvd24uj8eXrPaEpWCbdYw8Xw7VVJ7bKJLL8RmQD",
  "key32": "z38PWSgWT2n6s31C2LRULrewsYgwvPKcdCG6yTyrfYgb5AFEvST85w5GeH14HJK4nXfEuUF6zn5cqJhW4NsPniA",
  "key33": "2EzNMge1urJ8zyvKvEEAQWmq4omwHCkp8vVuALtiRUwDpUhCte7REmG2Ys2ua5qTyUhnmX34FS4xEDMumJb8Yg2f",
  "key34": "484ezEqpsv9VAqedEFC2tdMHGrKd8GzRzRCN4xV1Y1ygZVnwJZwF1EWBhbJreV67xXvvaMa3rpFXYMUxTEhUqRFc",
  "key35": "FZeCWZHAukVKpUGHjZ3LCnxmkE6KChV4NZgSReBeD6WNv9Mt75qax46JjdnfnQFpkUNje3hBVauFTWypaHvm3p6",
  "key36": "47kPupgbppVwDieLVQSjW13cEfUkDqs2YFvTa21xqXwWWeYHUczoqsSCSDbu27xZWEb9P9xM6bFkcBA2nCyC96D4",
  "key37": "3epK1Bx1xULfLDhtxQgNWf3VQXA7rAu2y57chtaArFzUh6v8a3njxkJXVTHFBokyksu1mo1gDWJ2GC9XQgDSgYep",
  "key38": "21txtxxHAskkYtYZxsoPp4Q6yc5G9bdyPsbz3X3tYe7GQQGcufF8txYdWHRkGNwGhnjmpDudSWStMJbiD9Z8KjXH",
  "key39": "2AWDwLY8DYndpxNAt9k14KMnwcXgkj9tFZ22FHdmSyMt3gKJAWDxAbEWNtQsruUwtiubVkExR8Z2bJdy8pDVvmx3",
  "key40": "5keKy8yz4VsZVc1ncWPB3hDoJeYnMD8UEZaiDcVKSvUG1u3xbNAstB7CmE9BWBJtsNt5fG6bUv6V45umR8VFyFy6",
  "key41": "2aFdTcJfqvUV6fGUi2t1KeqKSKzGF6UKiaZesPdik2vo8bh5PBkF792HirWqX74wHAcHTQ93EK2idCBT7PZnb1h6",
  "key42": "2yM5MfiMdZ8FhMXSUehYArRcvEvnNeWLFYmRY9mCDHdBC3H7iduNmTtDYNHQvagyp5HCxqcasDXbWuwxRyoYoBbn",
  "key43": "5sNyQiFiZq7V3JS4WE4wUFLkYxvR8RG3fxbm4FUo4bXg3ARC3T1sFWuvDhNPQYJvoTAT8m4Ze1wbFJrq7TzhJA5y",
  "key44": "4vAMUsh5c8LWYBBrBCMEe7bHMqhkEg6LuTAvdeaFEj5nwkNckfFC19Ch5XwfgMuDYxeLAgUvUTx6NcCfskS5Ri1r",
  "key45": "2Y8Ps1KEtGTTb3k9LHBhCEHDrpBSJ6pyfkt8bvFw7gGRVnqD78GJ3o4Yj9CNSjJ2Q3ddcLCzrYyx735pNU2bPzU6",
  "key46": "46m1p7NMkXhbmHZ9dQtTbp2RnfLrQParKMJv1Roy6YrY3NLJcUd5orDmjPnhjKRuVsjcQipJQ9QzSEncLov9HrUF",
  "key47": "2takbHvqM7BYWDnb2P1YZ8symgyHxHs7Vc3AffmC6tiw1apyCXzkMS6CV1ygDqcruHBsKTT1r9TfwBVMNkxq3fHC"
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
