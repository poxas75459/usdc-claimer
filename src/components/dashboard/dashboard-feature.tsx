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
    "3LbfwYtB5HWQyr2fvtShSE9ZRrVbSWYHsayrUGno9dK7KbXgUe49hwvQnafde1HZL1Br5RLY1zZvQWYr13ddZwe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iwqj9TDPnP6jKzoooKd1s6zMsRh7Fxy7f1gGxtP8LnV9RxVc9y2hDpCTYaBEa2KuFm12F34eay6cCGNRVxwXJvi",
  "key1": "oSdMGMZvFgbjQA6R6z73Shnz4YgtpLarRJpLbbSh2bEJw45gQgM3ULFz5yXdvxXo4vYNGrLnHTouVbg1jn4YQBK",
  "key2": "5XWgWVQVaxxjFMicdK2qgWDRpje7nRbaC3Ghg7NSHkPqFxrsqcGnQzAM77v2cmvmUnQbBFgqGRJzxU44Lmkkq8Me",
  "key3": "4AzN6eBn4YSmbfcgMY9n2oAfXUqGS2wBkfJeRraJdADiatFbPPDA18XciVtwXRyNfvpqcuX9EHWdxsefy6RUACN5",
  "key4": "5nAp6UDcFNEb3rysE1dDTT9Ynh1sw69jki7z4hHUqjBfLY9JMMsACnxU4Wipj7ebgyLfAGoYrSwsU1npfjYGQENk",
  "key5": "59UQGYzeJ6HQDGhxtN41Xv6GioARWywmS9SFNmADrh58r4PaiVKvR9Gai1j8WNqmR9b7t7gsgqwoV3gyCrWMCDDq",
  "key6": "Gwi8Wb3tSjx9kt1DoKUD4p3c5uBQSPzHKaJ6ZcbtEavQn1zM5J9rAJHUYWuGWzvX9y255Nj8aAYLojcf1n9sqoF",
  "key7": "3WUzHamo24aMixF4X51tnZ89hmBRVHjQ4BDDxdfVrW5jEm2XavXGnpUeYMoY6tnxEPci4kDHtw4kYnANoqRgpncs",
  "key8": "44dhYMvmfi3kKtoZb14LBTPZ4Y5ye4DmxZBzYrWufNBtuUmmNUXSYxs5JpTRz3XKRBPxNCtsGqVk52ySzRszmkzM",
  "key9": "48Eqfz2MP6JkCkqUHGu4Een9qg3qnCsngpDK8EyBzhmcPuJR2oSuTwrKGSuNAv853fmK17nASXcvLqFndUzf8ZmX",
  "key10": "3yBBdoNbpUDVbtfbdziXczHqQ8vMuVmm3cYmREmswBqeU4ZM5BSQAVvXb37zeqv5u5dJeBmrwFDSWxGKy27XLdxH",
  "key11": "2b3gdqXpwjKegsQkuSMteizqCJ1vk2YJV5EKTASHReaoMrxQ22aWLabSaJz3tmdFab9QjQCXKNV3qq1yK1Uvrerr",
  "key12": "YjS77LRMp2Vezjvr5P6LeTXpzYSyNECK2Bv3zFNVADAkU3XSrTeEthtd9RPkhZqeQxb4BxWPoF15k1gVNy7DnSL",
  "key13": "5UbPReY99G8a4GDKUhKuGRHcu2cV9FtQSTsap2YLPYtbBVoFjZV9R8XmTTDn87stfNxtsEgGdmVdvhpcy7bEju6n",
  "key14": "e2yGMfg6KZEprR1rSouoQHbNxCry8isVjcpSYFfsENyxSGeTJAeq4NuL4acrUJJwgKHFgmM9WoHWijAa8m23seo",
  "key15": "3Ag8uvgb3KVBJaKD3dmuRjJZdYyvn7FVRzJwfA3Vth9kcbgcj6PHhCv2FZczMG9cignVtP4LiSEBiEvwtPz314E3",
  "key16": "8C6uadN2JJH4LJRhJRpbEsu19HTnPu68Pbk2FNckV3TDVbhphRYJUy4RtcfbPxCKaAYeHqNb9paDNMTU1hkPNgn",
  "key17": "3uM1dSFukYydQS1VTsgGLtgjVTLatZisBHcvBDa7nPN5ns6rvJRZf3exrbG1NavtZdMW1ig8suxFgZegedypjGDy",
  "key18": "4ePPVzPipXjjJjKyGvVRdauyud2wVFwwexUJnt1cHAV62Rfhe8vop4JnKFmMVcP68fj5Zmp5tPLBGZ66ZRxvoeKm",
  "key19": "2Lnp7KmYJz3hdhVETmHbdKiKvUxT77gdKTgMX2sG9pBBMYMCsBV6u7ogsrmFML25tMuP3EXJZjxA3BkrQrhKcLwQ",
  "key20": "4GHdn1Ue9MLGgCmGVjSg4geW4WZtnxy9kELhP1r4JH43HNzwbUTy7LRPaU4zpx5TRa9K4sNA3fE37SeMu6vcDj6w",
  "key21": "2rgiUCDyda9fre8YVqpkG8bgDVuDVZq1LzDtNR2ncem7nmy2ShuQoJkoRNn6BbUV3gE8eJQR1EAUZb4aK9TkpAUw",
  "key22": "3Z3Mk1LMKMSukVtHWCWdC2bXMhdxDjyUrsdoLDiLoE27eqnbVsQpwoAEL3RPJC7iTpTEEimb6wp6t9WfryZ5dp1u",
  "key23": "bvMDGnGDyBDBWMjw48GDEDqgBxTkZva3Z1a4A6rot4ASG9H4CcoxFQE888MckvSzRabmHmt2GvojA5bBz75vTiD",
  "key24": "3K1KhVWUBGX7gkqXPxb8KSo4dP9RbEWoXhMXr5yDBRVAEXz6aupfXmz11kPvp99ph7ZyREqMAQcTAuSujDq3KLu2",
  "key25": "3zfV2HMGroBymHedVzL4eJyXPvsCuQGH3pUR2JMxtZrnK5FxVFowfAG9mPezJzkrUpdJvqVGZ7NKtksDv4ySbH2U",
  "key26": "5KtbRcEngeGJPnmdZg6cZGHuZ48ecQ1bwQ5MCWjkL7hU5ioyzMYxFmr76ngtU9M9VN4ioyyWXecbcUHcJ5BNvUKU",
  "key27": "5cCTEUEAXamzEvk4EwpwwwYshC8JyzHVffjuWUEmG2cRXZJQVWgPLciJnenSX4a3aorwsT1aMBQe88NvSdQNvS2B",
  "key28": "4h97YCD37z4ZaLn7LVB7q4hCZb5XDGZF9y6QKi2rfsfALvKqgWNE65S6E3j3AgLSbA8Wqrz2jRbQtH2DvTaRAAPM",
  "key29": "63gTvwgkoms76oPmekmJvbRdLDdutfmC5aiSL1uAgZZLDpXHuFYjT1TkCsjihVndGvAAwVDkMhB2ibZSphpY6b5C",
  "key30": "5v6r4sWyc6tdv5ruTksH9UY6uz9Br87qZdC5LMHKx7V9P99GA3LwExbAuh8YvdBCko8TEhGraEC4DujUDmGmCft"
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
