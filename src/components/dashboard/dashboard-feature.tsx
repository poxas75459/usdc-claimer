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
    "41dmWmwS1nyM9UyQV5NAm3ArtxvZ1jEtkxuyp6XYzcUKr7PWr38U2cTa23aYuFoo1gp5iGCM125FwC25fxMyXzEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CE2izwgiwmQP4Y7pUddWSvBUb9wUsVZgBCX5mwvcrhV1p1xTswa4s6vcYTGKr5XkVKRhWuSSoKGrtjaVdFvncNY",
  "key1": "5knuf5fpVpyVBMzJUENq9MKZprZjUMkzDfxBt2AtV1bHCE2n31v7Zsnx9QTmLiqvDRb8yvzsJvmFDSoteWYWSwUn",
  "key2": "428hcsjRUMpB8utoLpuWjXywQTLon9GkWGzzg2weXWjaBbCwVYTC7bVEh5pr3FR7koMjZ7vNZFcS5VUVUqDUjHKA",
  "key3": "54nZCCviykEKj7XdsXsQYheGdDEYRGh9ZjPaWbKsC8TnpPEMtVHFHxgzRCFoMzsQtjBTXD9CyyVVCdf9qvxsLEsp",
  "key4": "2A7UyppKjhCytbjogCLvb6tM7kPXb9PQF3z2XCq71kd1qvp41cWJ6ecApFHkDw4DSWcW1irUZYVJjdEmMvjmKAoq",
  "key5": "3zTGMANVNEQWEGSU7CUTN82QDEch4orbf9AmcDkUPr8g8Doxv6GsMo8uToQ3sWxzNw7A8BDEB557U8Ly8G2EA9Ej",
  "key6": "3knUY5cipRhDkWRZuGYG7q29tpEhf3QjTHGjtdL5AcU25Ts1qJfnLGoGoZ4wrYpSNy7Sf15qdhUmMMoB7kA82v4t",
  "key7": "2kUZqbx2zcbsXN5jajAng4GNq7nz8Yqba2bbi9qMXpNfLNn3JknWdemC6Yj25gUbr2k1NQLBhDXAjHHEw9Tu96ap",
  "key8": "2JjRS19np5MrB9qKf89gsR8vLLjqNP8KmcqmRedMSBLKhk3TEVv9j2ZWZHtFTCX2UnRjMkWoGWnUiXDNDvCC3ZAQ",
  "key9": "3NTnYsUJBmq73BYSSHdB3h48y77hV5sL9hvzvgK7WhttCa637sJvAcLNmutYRWqE2AewvRw2mi3dDCRc8sVPTLZh",
  "key10": "tkjXjBsLfGYZ7dQdwdiMveuXCuXGSD8VFM2HQrKFFrz8gvKJAqzkDyY75uF6Qo7aGtizr9tf7bmtbVbTW7UQvkh",
  "key11": "54CpmWpM7QDr7vq2bP2W8hdLa1wTc5hBeB9R2TMmwysXUPGmsUnzmgfvEUmkAnb1fLYC5HzdtGg1tP7Hzq8Vyg2t",
  "key12": "2zaqKdoxgaJdoWCLyA3RgobgxcVEU2vDR9gpuwyUpPgWD1MuY8b8YV9EyP3Acrbj7GSW1TfXepLKUax56f81tmBS",
  "key13": "UwfcbEr2LgJHvTxDUZMH4Ay7TGCkuvFCcX6aZAxct2Kr5UuQFHE7xfE5srxFmhtCg7NEwMPTkDGTDKyp5FEJWvx",
  "key14": "rEsrSkwadCfU4KFXJodAkTZHaFdi5tPQcXUR4p5ogdPDGfjwYYRQzpbF8HMEvzUm4QVsbs4L8fbxnFWpqEzfrwY",
  "key15": "35XS8XrKa5PSt4sLRBE9x7bndaAH6vyKCTLsqRXQwSjBtqMAwz1z1i7Da1FiWt5hqyvkZxo2rZK2E1uE6dEDgihB",
  "key16": "3GysfZFVaM2E93bdYZSHei6Z4odQzGzpDNNBxbjhVZqmCMkLx4TnW9rrcGY4VP6pA7YkK2pxhxhAG1hfADXtJ1s9",
  "key17": "33qkX1DKiC2SpStg5ko8Q2gdTRpDC1CgBLtBceaYbrK5jfdGEj6YJ86CbKEas6tWVubiY5QriZPT1zKPzGGpFQfK",
  "key18": "LwkKScwaWBKSGHGTEWtrMXJq5ip54PHrMEhaLtjx4M3MTdy3EnVXXbiENJzD7Lkh7TY3jUNjcRUvqqPV9cwq2UC",
  "key19": "QwQ75VQ5jNJSbZnyfmasCafXSQxdsmkEsjxRcBfmGrEgEEmJ5euTcFPNnF3wcTR6bLsPTqTBmgZeijNWzMtoGUC",
  "key20": "3gdjx17oVTpsYMPB7Jam9ySYYsNFM1Yds2d89FGVrmgx5FwdjGEuc1hoFra31poMqohvrTWQaPMoUFzad7HLBx2m",
  "key21": "2BwhRhBeuauCiykngYMYPBkoxZHaffhTARC13fnueQzJJQ92hjuqP7QXG4psPNbKP5NVAZdCBvut1HaqGfmUtSGo",
  "key22": "3dFy4rht7vxczxzcVX5r6BJ2HWLSQ1Gm2Wy1d2V1xe7z4hdqV3Q5Hfm9jpp44Sq8BpzjUxRUpfaB4cjrHCviKiZm",
  "key23": "5Ya5nzA12nank4FRAdCFgWc45FCJd24ZnbKdYMugtBWicsE665W9h7Ym1sseNSQJJG9fkgvmCcu5JhZxp3uJ5Lhr",
  "key24": "5XBLu9DND6MxU1pRCr5XyUTR6iwGUCZwbBcyqsaaPu5aZLRB3USH9PKQa3Y7QrygSLg3xvojk7pvgPY1JfaYcgUo",
  "key25": "tnGnWs8YYQsHzdd7vsw6QdSMu3q2yWzPoBFQkF8cnnMtxepxnAwgbKrFf2whD1wMJ5KZHhAg2t8etadgWJwwphR",
  "key26": "2MXWrPspsYanDuTuW85Yg1ni43KZeiDqRuLSXPVkjSGiioRMzQzF5sEZU3CZDC7PhYnFDC1RAdmg2ngC2zS8j149",
  "key27": "4Ue9nvLbg6ErMdJDW9Bv8kaCSRB4giPDvGa2Ho983p1aCSmVMY3GSVS5gDCyxoG3WBAsVF7hcMtPMAECjLD6H9SD",
  "key28": "5cskUvffPxXMqmqdivvk8tKyQeaxxZ81R1L9APn5ux5En2rpPSesJgQYjYNc1E54sHoLB6e5iY9SXi7qX6GrcjEc",
  "key29": "2kjeqictcmirT6i83q3q9urVDVQwz7effZXLUT1NWwmdWMnxo65AR7eiLZGqayLfjyp9Suuxz9C7AgZGng3vQxJt",
  "key30": "3KXJTsT8Gy15J1e3D5sPNrr1zfYv2Zzjv4RWfabadUXVg5CC5LExuqGKyNda5aTzDzBfAunMmLvjhjm5nN5wGHDg",
  "key31": "2D1521bMKPqbLxDEj1ETQ25RQHLr5YZorEnCqXA52r88Ej6j7tu4jvHamNfgVqhAnJqXjJcaDeBWz9aC6KS8sPgN",
  "key32": "46BAxbYhc6Su7QTXDMkyx3Aou2BPmZfU6EdDo2TmwCECYKpvPR7qpY15ESBsGLJ2pL4duWxwWXWMqiqza4b4PkQ2",
  "key33": "3noRj3Rt42SuXrWcPvcNmx5oCPgoXVec2PHvrP3LNt5GZWnJtCKrurRpy9fvE3JX2p7Amj2rg3i1tRarH7pTMzfS",
  "key34": "FDDReJ4uu5x1fdsUCy38e7UBsQZXGCp421RkUXFRsKt3niGTHkyojp95BgKhNx3uN7atJeXvSEnw9XZJb6dUMET",
  "key35": "7rAQq32Tfcm6vhwn81Y5oaR7JfRtEqzz4jjbBHuPGykXPrA41jsYVp7ezTiKqjLhRwwgmTQ3EqVwNnPZbP8SNVE",
  "key36": "52CtgLTQTSEf23uGGGhDXS36NpWyoq2SCmg7g2fXb9HLkS2qU21z2XvtFLcRWHB1Cbth8shCKJoauk78GKmcL2bX",
  "key37": "3ntvnqzkkqjx4dgRvkPd51bAq8ZjUhFjTj52SZgyq1XCwSe2jUekJvWPxnNY8rmDGDTaFUDZ77EJ8GSB6q8EXhhq",
  "key38": "59Z2Mx7VnPFjZLQLNNUcJdfQjJXkjt7oYcFFqQC3RcXvvQUf6rxTUiaAaRjSJUN7d8kbbR5NErrnktNLHfMbUbhA",
  "key39": "2YCCVqtvfw9rUz14WF3mt7XaTzroGMpSXTHoZjrjvERV8V8NMfGR5qXw7kE6sgra7tCqVC7sXX5znQoRnbrzqxM5",
  "key40": "5oX7YhPPmKUek4qU1kMynU1TG4VjoobhKb3KG4m5cXe1puyjbErN1kczBbExDif1YtwgMpj7hhRyRoQoNB7H9RRK",
  "key41": "5QjisdE9v9Na7yyrQab3rEkai4LnecTjRx4rWWsiw1h7BisR9Agpw79mB5V5i4ipxJBVKfn8N15CrEPiC8Gyi579",
  "key42": "4UNHDtADgbre6qEkHkVkLZzeyuyVHQ1ke5YGVvzADw7KMFCaSpFKi4VvMAsvGJpaAvo2DF4MDc1RcznaaBm1X5JR",
  "key43": "mqPQvYvDbG6oNtVBi1NoZrrcBJ2nRNpMVZ546L1jrVeTFrFLUA1XoMGADPiY9sM7Ug8QnUrDiCZE4UfRki8V3uC",
  "key44": "389BRa35fJcamTTRcyJTtHChCodwA4UaKNXV5JfT8tadoiKF5pD6JHYseGmsyctgLJDsJobDZaJhQTTddaG4DK2G",
  "key45": "21sQssq66T1oApLprisogLF9HykgRP877bZfMxDdFjXNbhpbF4BawvnJVoabZTn5Utj7sJrpw9TzgykiZqBjRhwj",
  "key46": "2z9W71GCxGeJEPZXX5gQwKEPSMWgk9ic8R9KzmBMWHVytFPa7AwDmStzG1X2YiYJvdaoizZhv4VQtcaXWwiTR7bS"
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
