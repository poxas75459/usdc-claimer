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
    "33LiPnYmfXP91kYq91Fb8YDFjuHkGaUCMZrJdac8rvVmirkrxz2nrrPMFRDM65CPigPM1B4jJKix6MbuB9QXbDCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S1KZxveX44xFTmhCXFPQN95Rzuvny1kSjKazmjSmjGse9ssbiDpEbjJMDgQ5oqW1QgJym8VUtwVThxgD2JteQi3",
  "key1": "51ydiMUuPUbU8q9dqm6qpfpWjsxN61fiGUib5gg3LpxCVnNqP9pcLJVxV9PnkTVoYh38xYpjc41op7JMZ9zwd792",
  "key2": "2paeFJ7CoWqXFc3HW3sfPCL9hiXmmMGxHwEKd4hvhNV2dhhixgx5dyCFtofYUPUBwx8RLeFHMhJy6NyUNforrH2k",
  "key3": "63txdv8hgdPaXKfJcZBZC6amLNeAPqyorme5WxniQRcMDU3wCDnsx38UisKYoGVA1dDikie5jEtiYnEdRf95Dm4k",
  "key4": "5va5WoWe51kEx7obfsUTuPdYuNABkjoY8R393SknbSmgD6Y6KJZ76LNhhbGWM7Wh8bJ2Tb9wUzctZtTNyXiEY9Pe",
  "key5": "rN2ggG6VyQv5fRiHVCpmznMxHaqHUiCxYfpe9KrWn9La9z2KCEFuYhcmeCtNXh78dpPGzkh5ZBX3u5fcFD9rQcc",
  "key6": "2B3SEXCML3izRHf6bj3fuuj5QoQ2BRu1GJRKq8iVH1DPgewQXksgPUHtNNtVVjr7wuA7Uwp3Lm2bs94EddkfWmAD",
  "key7": "igqLGKR1543NJoec5U3xHELscEgJXjLenrk4frG2bFechpz21h2Pqf9ETagimWakEjB2MtjUkdvVxNdAovXbcnF",
  "key8": "4LKZftVuv6uaQA5tuZU2uxWwKpgRHfUDaXdvx4cGe2huXysrUTubatzbSHrtUnHxkWsneQDRzL7xo3UCwAMnZi89",
  "key9": "3tBt1nyMznafwHFgRawEdf7CAxq6VVKQa8DSow38xq3EDnbTdBeXynzWLsgStQSjJ76oQJZ94pN63Yfe3EhvdkJd",
  "key10": "4w5vJpjuNehynAeo3wkBLYwtwXBgQnLme23wPLQTTTjp5XpXDP9YvYLXbet28bH7HsNvk5vFqJVkzpWryRPFen2C",
  "key11": "xqzumM6Kdyfsm6apw4NTxyaLWB2z25p3GkkmmMKw3humj6PG5R5nHnm3tFfxhiu1rHFHWj1n29DH7z9KapSUUBP",
  "key12": "52EU3baZ9kykmYeRXrsvBicohKkZUwws6ZdWsJ3bLLF8yecv1LSXLv6Po82sZUssvfgcx3o5y1M3974YNVjaafdG",
  "key13": "3ndYcGC91pLmAq8pa4ucXU76guxCUqGLywAzofjUKxJgAmSGEpLfnmcwc2La8mggarT3QFv8GcF7JcaC3Zw9P5Gj",
  "key14": "3WEG9iJUXPpbjT5eNpTAsshauikyaUZK6kHBnpX7BThMcRhJwviFYHuErvWF8ubDdz7mWy79v5Wo7Z9k562pdi5b",
  "key15": "4Sq4BVMmDTGngpSG995d831cqrFwJoJPR5oqTBSSocFHVS6sJGQK4sNivb35GfFMA2bbSUFBcCjqMn2saxE2mWow",
  "key16": "48cnqq2J4EQqSU4duLVbqscHL4vKzqikSZBrR2LEgkZFZNgrhLbFb7d8xWy29kfT44rntASBc7RAHzUMMew6eUgs",
  "key17": "3MZKPap8cyG8aatugcfR4cy4LXHgaC6vCkBSi1zancSWHDpAeYKFgW1PZkbmNgG3DHVqNbJcPX5jMTrU74mqd8eY",
  "key18": "577g51e8oFNzMo3wxC85SRRb8HAkrhWQawUCCtKjE3TRXFHurxRgzqpFRmRnAAsH1XbEXAvRNadsKAq96EDNDHpC",
  "key19": "5REFwXTtFEDS6TekNEiKvBEyViwtLi5izNxA9KsBEtnApF1T7jsJcBMdfsq13NYqpqMzhbQBZ348rAXHDk6nASGm",
  "key20": "FB47rfraGbyQNSKXCCMe8baCJDs1ypF6UJyfcBVECgbJV6egxsb4d46FmuH6ySSK4N87noyQm8fNdifdLdb5NQQ",
  "key21": "4p6S65RzjzE6YUC4fAj9NNwFkc9JtGiTMZNMQPz4BHTx9119art4cEHPEPEfEPVPn5HMKrcZezssTw3BRqhMs481",
  "key22": "5xahZQ14WDAmmoejJXsTCQmzVatCXUTPh64GDwaK5cKZAVnjnSk8wvvjKVNGru9etGzXLrHrRbA8rsbLpeudYS5D",
  "key23": "5WAm8fbKSP13GMaDTxg2bmN5B2faE2odZ7tqHrXJR8BuaG6FShfSWqyMueF79PZbmQ2Bcp4m6hcdjiUMZsTyD1kL",
  "key24": "3dixgDWAh99aZEPfDv5M73XmR243urmrPdTkWR6qYRKCyMvWpSEK5MXytA6mN7i2cAURmxuJBKsfrfHhmdCsxrRW",
  "key25": "HNr5oUunHm6SNyNvWs9Vhbo9vCJi6Fz2QdwS8Uj4ixAdicDPafaC2qHAkJMw3ctiMP3oCfpKctHf47yRbrLwWdg",
  "key26": "4AKVz7YePFvuCwdnbHGX4ZSXW5DB9hD9bhg4UT6MwTxHtUo9HDUD2PGiDvmRQshujm2xz7FBxbuAaGuKJf3LZ5ux",
  "key27": "5W6LX7vQU1GpWj78ukmqdvbHiWoem7zK4fuaGiMdJFMcw2wMB3r15BEWsmQbk79TB1mBQp5KigPVjSLZ7m1ZenBD",
  "key28": "2PKB65ZcWknbUkJihjzaCmpsgJwnFrGx8XMTErgePK9RUmrnatsHDUmLZUVsfw4MGz1AfNtSgcchUwte2hcHjjDS",
  "key29": "3EFayHSDW6YsLPP6hQB9UtZyRwon574Atuxq4ZwfToP89gG9wdBxu14EV93kZLtUvzmB2ovESaX7d1e2YaTZG1my",
  "key30": "4WBsWTwcQNCutt1v3gnNMPMj8VrsuEkiW3E4gPapmxw5hptjaqgXv8QKNTCkjovDd8mnifw1Nm1hyWWDPTpey4ud",
  "key31": "VhDw2iEC6oQSvayzFjYHe31K9aMDvkqMWZKmaXzMEJCeZVBuffLi8aKTXd36Dt7bBU2ARqouoBY3o7YnTzb81CN",
  "key32": "3xw6bHd35NXegcLKRkHjMupcJNko8BxSmjJhqZ6zxCsEc15YoxjKsj3nHH7ZEu4yyjDtEriS2HaYH4w55bCtRc56",
  "key33": "63DQug1hX6e2vHyrRgpQcFVuDh2AjKcLnwZ71fRzCKJ7rezwAj1eLiizjzP7Rf1U2iQiS5gPKQysxViaWfqMWaYM",
  "key34": "5yNNWGeQGxJJUUqnp5v1wcB51vn94TmixYySQK6Pr6TKrt8Mw6ipj9n5K9PJmMek5hUrwUkd1hZxFZQRRaYG9vbd",
  "key35": "42wbRWnfPwx4WRNdkHSFTCvVNAU1KMCqRtM7SKTCQ12ypFYwasqpHfSBEo2bcU5AXmEnTyWLXJvCiwxBsQB6Xv6h",
  "key36": "4LmpNBq7msvQNfwAmvFvJpxsgBmk76PaHyMTdoAJV3UAZxPddgAKS6svUEZa5wZMtiNoaFssuujB4CMVn7JLWHwV",
  "key37": "aUvWPvxuy8hpBpYsNjArRS6NvqwApd5weyNYoVx4eVp8JiqLYoHKdt7a8P4NGkvAb6ukyguH9kurF79YbYseWwP",
  "key38": "4dYVZ7tGAixShVW94yMUWoRUjK723axdMLA2TKawyfKnaUgcCs1vr3BtF5bREbx9vfV9SdfvcmdzgJUXQggKeF29",
  "key39": "kPGTm5Len5E1x4gp6f3SLQpMgnPzbsStHypv8tpkkgHYws9HFiHcxcfKsQSGiSow7fWF9x3ksnMRGMa8H5CwHLG",
  "key40": "4PaTL9EGcanhUBzMtzhwKHcqKSw81p6zrrwWiMuEuBqV2t2TnzrBFcB5Nf2TX9Z9KzsGpGM5iB5DN99HM9pvQcj9",
  "key41": "4G84izEL42wNA9RReBbCGALw5eFTk3TMCkjgSDipfoLrAyxRTDn2EWKsUDEQxrUaV2oQW7Rzhoeh81cmFMRAdQTv",
  "key42": "65gbDjQu3NeLkrFX7N5Czh9ENAjtQBPZXjXKRJLmzmDU9FxBaQubpyHGYcbNfDGbwP36qijvQXfzoNhEB9xdigAV"
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
