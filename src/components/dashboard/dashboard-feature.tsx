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
    "2UPstoEWmLpEUpD3Y8M8xeY3L4dxMZyTydgA7vdEdGYGchQ3WsSA3dXnf4ZgiStabkgYWed3w7XRKgtEPRoqaHUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SiwiwUiwxKWqhMWHNew4UghC79tVspMyAMLtF24aENqmj5Z7w7yD8924x6oDjS3nxu8wgGMWcSqJioqT4ABp57i",
  "key1": "5AjcSUqUrArUTdVvDcHxzZCwvzwRTEhqNf67HUmmDd23zFqzMUAe91L3oH9J6htrm4TxANELTQNSZujt4wRqHy7D",
  "key2": "319a87m7KfvBt1J3Hqg5HQ6hfqLByeeBQJ5zp8nT6a1hPY2Fz5GDamjqq3qrumAzdE9ikrUS8B24cZRxAR6hXQEZ",
  "key3": "2W4ACVAuQdVXfTYVkx1pNBz7msn6bTgKGQ2UKfCQV4N59onuVjfNaZCuc9Wc7kyQETNBSVCQXpn4HTvxY6M38k3B",
  "key4": "4ovaaKMLdr7sXh6hwqgrirfmPX7SLDzHJS8HnN3CznqxsyxBNRBcUk57wgjCY1bovZE76GDseNftT3RCPCbLeWzH",
  "key5": "2X89XUpCesN5qcakTqBJs6jrmzn5cuHjcdUY8TzbQZfPYg9XtwSY9vghnTb4gbDdg1WHmwSVMAUQWrTR6nJ8qQyS",
  "key6": "4DTus388tTYf9izWv2bbniNefg7SKPPx7bBW8shz2oQLXvXsn62HDmpZnRxbsdZRnjrhLb2jKdcucXnA4dMT9TTn",
  "key7": "5EfTgKzgxyDngysrAKE4WxCoqiegmLmZxq8icstEFkJMoRGup28TxaNekHPoKGJeDEffePTiLcH1ZxbAnJaJgsXK",
  "key8": "R2uY8EmuFKTjeXXuMteqNPQ3c2D8y1Qh6PyydMAh5QxKfhCwXHTr96hyL98bT7ZK85TZRpvPST9z3GL3AKDfjUb",
  "key9": "2Vm4NgzbPQLPsJZ5zNUMn65CDCjDnTycSv6YFy8omxktKiDm9kGvY9mPpuzhpbGgyu6czpsbSpkqX6aZnRXZ3N4n",
  "key10": "5A8trhUM7jAm4qhyGX9N5Ttb6t9VZDtZ7kV4583NjUiLHdkKzSUn6cAHtg1jJaPpbW3jPurBsEhdHBrXe1dNchbP",
  "key11": "5cF3Nt3XzuVhuedp4VB5SnB2oQFUomcP3Y2ArXZpvgQVE4sQ3V1srcwFTzxwDFW9j8cmwGVGUJFXk1KiD563QKkT",
  "key12": "RXwuoCqkkdTRAgrAAUkDVv8mnuvcuz9txFKVf7cokr7cUo9CUPZe8YUHYriZCkJuiTiaTdxiStk1NX1EJVyzqpE",
  "key13": "51ogVfgqyRXhGYGSPNT8P96DwLV7BjkJAzirF9rVpQfTzvFSjKbPqgPE4wNUH5cP5YyZNkkmPLGa6eRMiMML2cgy",
  "key14": "4b4KLJTP9coi7YuzUhWckaxb1ckQZmBfUzUy18JjYHB55WkFEN52XSjU1cTRaKnH1SfgG7ZfjQok6HVkVdjzb2z",
  "key15": "5eMQMRCK92y59m5GBHiEoD3Dyop3oxhMXF1siYHB8StAL1VbLZ9uW41c9GWqFWKdb2SCkcrjJNCDmtw62fgSQFPt",
  "key16": "3iNi3rTGcchAcvLAJJbFKKAiqJSULf6Jjq5Jvw3owga8nGmkz4khUinTdAN219gTKJDP2skCY1neU1uAQsR63VEY",
  "key17": "fM4FGhuWXKtJ8FRFFKQtMX3CcpGiaGyNai8HbvWXNGxNKPQMB2DDznmbUAa2ywsfJcfRVJ59VESjFmSmZVQkVKD",
  "key18": "2tvxPcBQbgAZPAR3b8v2Hedh2hvtT8D4xKEeMyyA9Kvbh6MKMbRpXetmsWm7n77x78KKfVPnECHa5N2Z7sD5Posw",
  "key19": "5HsGVMJXopePFQf8EXzgKyoXhxFz8BQNzi14vqMUrAEnkbWzZkwzLpoyy8eBMdvdPBh4VLTe3Nzb7bZ4gYqm9YAf",
  "key20": "3gLigCvRSTRZoeNAUYeaU9si1ET2UsRnn65tadfT9MxLgzk6HxChaPfysLmjoYrJKajZNcxBw1MKCAbgDjLqTvNy",
  "key21": "3V7PNMUeoGAHGthh5gjSqCH5rnhmi9kSG6GS3nLh3paRfnKhKhF4tJJpMDJwciieGzxagKt3haFJiqsJ8T1ZSFUu",
  "key22": "9HJXFBRccSufdAKtZ85uhoFPqZrFxkTmbNKAU2527JyMjtvoF6UoLk8NZrYdfHWYTbQKN5N2C4MkjTVk4jMvJfa",
  "key23": "2VwnyEgjusuVUmQCQUdDvbEkvaxXBtiYk9DEsDLvGEHonjbR26zZQyhvuwwoSDdZNxGPBUJQNrsGBU2JgWwRxt8k",
  "key24": "4w5VVuZQXL3tvCmASkP73vtvdr9RwN61LYBSQT4wUyx7WMaWuy2zurW97V9k9o9tknUKhyEWHsq8y5XgjEAcoPMu",
  "key25": "2UdnWq83rHYqLSzciTSCcm4cToysPW85ZZm6CM7xcKkWtxMxX6azDakmnqzKhfxcHFmUEtyerRcsBTngBmV8ycD4",
  "key26": "2avPLJVEfCGxoyELWdSVgFM45gtHD1TYuDYeY9qAYVSPNmhpRhpzpZKpfNX3nWUohZubRu6hMvFgAmWbL6gHYmeE",
  "key27": "2BJ43Led2X3pdaPRVsSnVWmhcXzZGVdBKdU9wpQcHYEKrPGcQYsfiLxtbwZtpaizXQQ2iMux2Fn7xqo3MReeZbWt",
  "key28": "cf8gBoXL3YjrKfUW4FxthxhKwALo3eUY57Q78iZ6vwtScTbA3MjA19ok3Pji1pqBQ7KT9GDgXW4quFTUVUmTiih",
  "key29": "5dTzFzyNApAbNdLo2VzN28Gf7ybrjjBSEScihn4st4QydqBidkyFxCx1DeH1vM1xKFhkNuzcNccrrETgcXEwfXyH",
  "key30": "5qWPxJJE8mNGE1YX9t346ZKxi6bRxYwsCVuA5PmP3jhDtGipBJSmQMzERsxRsj3czad1maaGAmiemM5WgEeN43X1",
  "key31": "4unSis9NvyiYwHFeNH5Ww3puBHGFKKxkwGWjWAUMxTht5s51JbMWnx2jLcSoNyoA1ymBhVmorXh6fNrGFtVob27t",
  "key32": "3VP1KQu19sRZ4A3iuZ2wEkzA3ScPVKF4jN9p9TA1QMemnwSP9Cawy33QVV6KtRjqURDD6crVf1SxoRDLQDuMYEfd",
  "key33": "4uhma96iwvvGgAb9DYeoG2NjNUunKAcop2fyvP1WvhZ3Vbj97pJu4Z9kX2vg23BFBdBXtsFoDyarcT5CC8LqSupH",
  "key34": "679XZa5tcpYwuEq646jPo2S35SHu5DkuNLzsXCb2dH694aqbRywYCmX1LUJN5YtMiuCAz7p8u6YeMgQM5wZT6iaP",
  "key35": "2sxHoi8gmogUPNkBgRT6QSCJK1CQ4j7a5kDLAneTzmvDstALQ4SBQuE2Gh4DCb9bRfMdtAMR5Ns79yQaigPgYe6P",
  "key36": "YsqX1E3YhZgkTSZw55iNX3Cmw4kfeyY5FyihRhtRpNytLEwqqyfBpQopydn8mSKsXUujLS51NAKvYx2agaeNUjb",
  "key37": "5kFEih5xtLdH2CFoVWJmM8WayrZ3RmLVDAMfZR9jYN7quBgYv1Sx7375XVaWVVFJDN7jS3XERMjDvAk3LpsZEKb7",
  "key38": "4TmSmqrjisAyFC4LwDgvZfVWF6TgEQigXhrWP6ZJMidXSyM3tqpEpSqT4KartQLwGCzJSETdp59oYTeHB6pgViJV",
  "key39": "3WusdWqDZUCiZLzSX68bGbpfgc8BkF8QBN1E7NRhEz3ZiS8VQGPsjMaG6pE8ybRDyp2LqEEiZod6v3Z8xGCYdUJb",
  "key40": "4NAxQprQpFjJNTVM2aH2jUU4Mp6FhaodcqMjko4WvC9uHPUgExGY1U5hXDLd8w42cvtuhFU4D4EffyEKX8ZYN1aW",
  "key41": "5TwEtTAEA2ouQQCnJCtvSJubEQv5dXGwAq1kLgQnbLtRN8DReNdCuALWqV2ppLAFh5xr7WSXzZXDG7zew5mRwZEU",
  "key42": "4t2Gve35qyTc79rjkPWPz9voQBwGu5aFitxMTzsBw4uigBcMZHccDDByhrQVazkYvyRevpcxyLyggx2y4emPdUEF",
  "key43": "26dm6ojTDyVUtFKLWQoTVHut1WpEVbutCxCCSkLwYiiCz2Qw6yZbBcYYjw2UtEqmxki5XGZ6EuyEryyvg3ecR9Yq",
  "key44": "483Qz6BJCjJi7TLPDRvktLU8op1sknZe4QDatXu5o8hB2v96TUKsueYPSQXSomYMevV7ehVo3yfBhgjM2MAsW5gt",
  "key45": "2Wu5J7d6ga1nRYKCzWiNp2YeLKcq5oq7khK3RDqGtNRLy47XRDCzWE34R5YjNGo5WZ7tXctVxaqjhTsDX2tUjU8j",
  "key46": "2tPfaQRrqGXLMRG3qAdddzbuenq72uCCXrMGPbw2bSFUZvsJRT26yvYyF8X3z9NCsCnooxuW1Vufymh55tpMfApB",
  "key47": "5nYGWYtg7J3Z4tN549w82pfvh5g4g7ALgyZAJbFtfHZZXP2W5CjX1EFoT6B8sP1JFfVNx7hBuZiG37Lz2BNgiML3"
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
