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
    "5jiosKCW2zLUtG45JpmoP21gjpKrp3RCnM2ci3gTmGYyjB3JZQWN1gA6bCcyc7wMRJoskKhtF2xfhWwvy3sQGmZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625No7B5d7ZZ7hz3UoqPQdfG2duHSjwFekX8g2QB6bH3Gg8kpa54BDusFPk4dk2bRV6apRuJCAWk3X5iGuZC5L5G",
  "key1": "2x1T7cSKYqpXWq8Nrsf2FxbJ9SmYVtg2DkxkYYeQEze9MPw3QZSdams32M9WvFSCJzsPmfKTmSrdgpayLv4ojgkb",
  "key2": "2thC5rKVi1nWjYFQ3vGSZN5KXXqdNGTsTZ4TUYeZSHtmpPf24mfzvCkcJ5vxi6Fq2mF9QPQhhM7uDHb8waGjfQWQ",
  "key3": "38tnZexmmNa7ci3JixStH755RViCDTUYceSf7542N7ePrRLb288v3n4hs7YNxc9QZD7egMn9NevH1b9EnqynyD9R",
  "key4": "ZKA8eMLAg9zdXnZ97dkJVnS2db2SLpPAoPTS3VajJuQ1U8pG8yrwvT7wnigmkxsJCZR97fqvEryEHQ4jLPYC7v8",
  "key5": "2nCbnFkTp8JhHaLssV78VXffCXiP3EdgPdzwhx7Cj6bXN9cMV9fUSAeGBvUp7TWZbXKizfLDijnHXcMTpDCgLzjA",
  "key6": "2uEHjkUG9g4ti8xgemGC6EPTq17ubCVm3WEksAL3KjBVTBqYYDEWBRXVWTyzQ9GXXYqvUrmuJJZuGoCq7N7p38dQ",
  "key7": "XYsjnktS2aueCZg1r5BJTDGUgsLqhxvXFNKMRX8Cc1MpYw6TiJWT4EesUgmVzL63zBYt81z9zGVQnV4wFszuuUt",
  "key8": "245MEKc5v58TreBzF2KL25cQcAeQULPGKsdQ9B4sBfMc16cv9nmexGe161SEb5Q5erLuAzi5fgwBn3ZSQKFmEyF6",
  "key9": "vrvFx5YgBHZc3yA6wiCaoHcGyS46RGg3NjXpL7s98HoYa7JwRnLqpXyczaq8vcjKMRH3VNt2p7QPM1j1tR8jV31",
  "key10": "4CE9gwTQ8Cof9QLyNTdVPJnvSVhQUQ4yiMfJssgE2UAFuDC49CdadHojzcVWp1AserCPP4Qt9cFJaqCYsXtQU93j",
  "key11": "Vdyxfkw8o4DLFXV7JCUvXo3gkUNHKwHm8vzD7k1jYmBEECL9wkZt3qsf2pFUqTEA4R6zmWeCzPVJpev7wfGrUWg",
  "key12": "3zVySni63LFkmUjw5gkho2djB3biCTS6X1A2ynYkudG1U8S9mTTumgmPBsJGbtqqbBgFVdcSYDwLnfYi3HT9wP3k",
  "key13": "3ifpGS9QN6cKipwmw2e1NFTNmAyDAVzxonMLVMaNHkZue6snejfWhCmHYvSdHdDjGd8obHCrBJNAEh4DWzEbUAbB",
  "key14": "Tv5eDev8Q4MYq7kvCGGLCv4yD9tTSsfdXvCAfBnuXvRAHkdTPw4gyuCRMwdwr6w5hX3dJzRQ45iRswW1aDWNaza",
  "key15": "5qGb9133XjVfp6kRrPVPUemJ9Ay3REbKVbVUHu5M3eJ2reLKnAeoAsL19aPWt3hYAijrCyG2bNjzVcAdYDDu1Hxx",
  "key16": "5ABgseTt95t2WzvXKnfxXsGVmtWExcRfZxVHnQ6R7UkBjavgnrk2oMbuM8kJg75fD4zNtLph6FRTcmvYdV8oaMW7",
  "key17": "2SfD1WueEYcJKbP212psSCzGsGiCRbKpTEqNCfR3JQuK3fwNhhsQHqduHjmH5qU7wLSTzJE6h5KCxAit1Jr74k5q",
  "key18": "2vQQTqhjPNDgry8n7SBNfzpLUvHZ66v4Vjj35P4c1nPQqCHe9yRBsogFAEvX9StWLQ224Det2HcudHTsbZ2ruBfF",
  "key19": "2WC48eiD7oHiAAqLfvjxGSWsyx5pu8zAKop3ZbmCBDPBjYeVcYo9bGmasiqGTbDpyFJeLHn6CtXgBLs6AowrRhSn",
  "key20": "3LVeD7EBx4HhQ2cXsEdDDPKAkLAPUq5twZzJU7zjunRH4B63B1N1bQQFpjJp1pNAnnCPhNyr1ErD7243QZniASRh",
  "key21": "45f9EYWveGEKLDThNLCQVqURRUMdiVspyAppoBgTiE9ZQ1z7eWeG3Ua39wnFHeLsau3iLYsBFPa791jtnsvTbDWE",
  "key22": "CCt1m4B43VYfLnkpTXphn4LChJZVV4QduLoCqQALmXpcairTDDs6fKzkfTPcA6875EpVgwaETSX64gEpRpsumpm",
  "key23": "5EuVv768AwNDYRTCiYwnVsbYt3suuGniusiGUAMQb73gtPFcLqHLSz5xmXhrMjjq8JzvzFHk2oZfR5zrDfrfwkkX",
  "key24": "5grBTwde1FJWF7kFUyhiBKnMWRxx5Csf8iGLuZkea3wkADjuP6eUzf8hhoGoGcRaLhfmQ1WyQvvwbw29aN7HVVMF",
  "key25": "3fUwDhkGXpg4zgTxkBjHSyjXA9ak31AtddWvqqUHkHhKXvdQFU1pemjuurVLGLUbJADt48VtgF8W8qzas3kLdRSL",
  "key26": "4ctj2SNzXG6VG3TSgpSTuMY5zCn2bhK5zRjF2Q6oAEwhdsBdcRAGpT17kcg9Nsgif3gt1E2kPhMyhmypGJ4hcMzP",
  "key27": "21Dh8ZWdACdhLPgP1oKDDymmLHWAeQUUBRodFJNBiWzZZM6n1ZAZDWNPFrJm8kz7YD7mMotiKFaRnvPsYR5FQVW3",
  "key28": "R8wwZHi6vnc6aNwS5MWkTkYi9r9G5nUAxq9aTsr6xdN4EMmecJQmBLciD5T6ebZHyyP4uCUX37jXZHf5DcDSFHB",
  "key29": "F5qpiULkdsSWpCwjXNp6Pt3JbYir49t1bxmbQeZSAp8xHoQw3dvZqULEzRKZYEUaKgFi7U7qSW7DmvNX43j1xX5",
  "key30": "353y7KzBEdSWfD5Tw486MdvEQbauCyKuEJGnw4hQHJyzfZE69HcZdNuFhypqWSWJ9KJubZvycvtSgDVcdPxACwsE",
  "key31": "32CXJmn82YLTSVgzMqZVJDJS8DA9Vrzkn3mTFc2o3tT7qLK7m7T1fCQp7DAUN8xkTJEFqJ82aD56CCLrhWpoWFSk",
  "key32": "2Ck4pnsjAPAToRmNQvgWedzZdBGL7Eh1EBL3j3dHEoVBjBdZ98EM2PeLjfYL3HwZxFzh9V23c7ZcRgG5PhgX6yoy",
  "key33": "5E9RYScMo5tyXL7a5hh7TFMdhcMRP2tpiKK2t3DqV1HvbgPJNMihzzoc8buf14Csquo5916wr16ej1uHAeHuyxha",
  "key34": "4mBJyQhJdWVn85tApwv4WhqweTEfZD7bsp2E2edTeAGz88ycXBESSCGt8aLAgUVuXsiaHi4Pn772dhrSPsbtY6pG",
  "key35": "2yAkonKBE7JTGCEgXDmPK6PbczNd6W4L1ys4gc7tpYN5krxv2eRZ1dZvS2PtTYF8gwG7EDe5gfNJyjpWxFsqNszt",
  "key36": "3bnJuFz9Xr7zWFUYL2iyGTNPSBGa8FyNiswMVBaHLbvH4nJv85TJqk3kVLdMHAzW5E1E48RMChpPLbsMRkvozixA",
  "key37": "4AEUTkaMQCpo69P9gpn1xEYX1P6xFYr2igxqpLYSTVzohc2qFzLp4UoRvMRy7M8JhR87sq6B7UvJPxDAfoG3eT8a",
  "key38": "2X3yvVE8uXdcgzQK3n1MxLMedGaiZ9bmUDwMJHg38aT4KUNsxoQsGf9SGMZrjdtJqoSZaQaMdBvRuAF4wG21UdQT",
  "key39": "21DWuvfCxd2qthP48wC69Ek3tw8Mmxoho6c7jKDKK8rNU6c86THKcrMTSBdzsbpLvekQVaw9atzgydiyWCksr6yD",
  "key40": "46dALqbYr9bcAc54n4VeZaD1MmMdDBFRjRTNY4j3ZvKFVQrMSDrC3tBJwu71wqJfEppSgvFq2jVrhvz4ff81icw"
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
