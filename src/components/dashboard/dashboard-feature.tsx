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
    "27J69e4Zj3FRDUcqiMVds2VUjTbRAYML3NxkRPARkkcujjxXi6RqiGXowcmfHbdvBPzwv7hRWGBTb2eLJPPoxoRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bC87p64iwL4bz32bJ3yQ8xuCym6QkXsLVYT6t9qjXmVit35Fz1cGkDUgnZo1Bjv3QUtbmb7mS5fGcQZXzrP29rp",
  "key1": "4d7VaXsoHgjX91Vxsrvr6zSuWA5XhCoXkS1gy4qR7DbQLc4z5Ed2qaUUpDTxzqjAYwU9gzmtmGnQM2E3oT8GZioy",
  "key2": "5R5tDG7o7B4HxiMbfCthvik8VFHwFygu6CqG3fajTacUXzqmVtkmjR1UpJgTYuamJN1QT6cuBv2u8BVLWWF8K9WY",
  "key3": "nCk4kDUDSz9TjC7vXh98w9WeCRhZY6ht32crMUEa7adHgTcDAXmgGS4PFTYtdxQthNB3iqozQVQ6UQypfFcHGqY",
  "key4": "JfEYH9cgfT541wCc6WnJ3gdgVpVmAAG35ivt4hJ6gTeo8gZgmQr4VpZTuDjHcx6wBNJJjUMTDi4Zjz6tVC7LKQa",
  "key5": "6vxHc7pwemKMqEhzTAeyWCh1pysoSPHxKVygtbmHoebidw6oUEfRt67a27xxh2qJBJ5VBmayFvj5bWG1zWUZoCd",
  "key6": "5NKyJEjZaDcfEaVTQmzmZh7SV5926Wmw3h5RDM6uALvqTj1xm2ZcD117CmAMMrDxs7VFPhWrnjxCRy3qNNbp9ssF",
  "key7": "5Fw3FujqQjQujSukj12mZJm6ZqyGGFW8StCXTJLto6CB45BjWV5LkGm4zfWjEw4C4mfFsToJCHAzBgKN5yntEo3W",
  "key8": "4joqRxHQr2B93zmQ7YqH1oFA3JyiT2HVHY4eBKvUJGSsnUVGsVS8wo3AUzNHc1s8Ty73qFT6HfsXkCk5WeK5PRX4",
  "key9": "4pzqhy18vCNH29WssdnMBVboMNSAsC1Wb5CEWSNQjAQbRfwuk1zpjqQoJa1HUuL4KYef77dg7XpZ9KJVKzL24K9k",
  "key10": "JWRK78EgySdyCTkgD67aWzqBwfLp2y2i6pUhUsJXgXk2qz76WeVVc3HZRuKr81yR7X3sQePSSUF8SpToSzGseTW",
  "key11": "vR4SiVh9gkg2BExf9dxpcSwRKLCM8nd1WxmqQGTbYcpoL1RuqTN3sBmCriubF8ERGxbyQ27nNpxmZkF5iy7TfRf",
  "key12": "3ji7PikLuZWLoADUG2hi7D6tWmFJqncc7Cci94Cs4EU4Q7wPChi6DAB6ykrScAoTZiqqa5HQoY8c5i3Kn9xK7XyS",
  "key13": "629v1m57CQpVB6ad1RWLDfxtuhh9VFT5V3h2MyXP2nbSwEL3RskXPUuitN5JKB3iJXMaxC2b3c9zUVQsQYKHV2Uj",
  "key14": "2rmhJDEdSE46CAbmcHC215jMnQ7XVkoRrFH7ezN3j4yaQ33DMsgN38XsyCPkVpDamsJKG4zkgBrU51XsMTTKKkVu",
  "key15": "4sgnz8uKPbABuJ3DeRXWtp1ixr73q58BE3W9Udn8oqtnPpPUpxNS2RC5kpFk4SjXbjVP5eqZd3t7pmcopNngoAYq",
  "key16": "kTacsucqwtuNmyRa6VDrG2K6bmQqfqnWcHLfW5JQLrC2TiLb9XFLgWvF3q3CfCwWqk46D6YYqL6HGqKtmiMHQCW",
  "key17": "QRS2MdUNwMrG9PSGsZCAf1xYqehEsjGA55r9EYYjCrsTJcyZDRw2LnLuaEiMoY9y8i8Z6jkL3cRk1sHsxvzuuky",
  "key18": "2iTLQebvkyAUWscRo7c1PPpVBmygRkZd6882RGxWnBMzbhNTJawESTDMH2yPhmL8ZeCWoQehQxtUoK2X3xuE22ek",
  "key19": "2GjLjQRrb3ksH4d5HuuJ1uRotWvHXsZSZGYqkmisYCCCzpVqcrnYfmKvEaw1UysC8BneJDeiXEMRTHaqQdFF3gRW",
  "key20": "2sCaZQufDH5KzBc3cKjrtV43WNfJoLVD3ThU4u2TCdutHbDngkfhmFRFC4YkjaSNbomSPdqw8JXgy6CgGn2aHAp5",
  "key21": "53SmnR8iBfQ9DvfwVMNGWkAgrQrXCNN9CMuVJQJgRsthS4v3HM31HLPEqJzwbq4rC3ZxF3pjLCivxff4aQ3cPqxm",
  "key22": "5qhT4trVDRKTehp6DNcYwNWT69JWKBZ2w5k1vEVws4gYF7WKTZhknJTnjzLH533o94hCaEWHAXTJ7DDyReh2LSaB",
  "key23": "29yv4AjPd7e18GEuzg3suiAYVdyk3KgT7ALNoipyz1mVJJ95FkQRpL6SvV7whUzsuGdHzBSpsL6VhiuVb5BTc6i3",
  "key24": "3bUQr8DTSfvyUREhhrn5i3eDjUVDkhshyZq7GyKqqbjkrGXdPcm96T2kZnVo3RiEUqiHyg4ni2QHduKVZ4bTtgwF",
  "key25": "2psaRpFtPbpSPTbprBLZ4NJsRWuCkNANXLCx3qwamEUPmsHLtmRiB6v3NdSke8wLYAqHpDU7rKSLetQymZAFtgAW",
  "key26": "4MQwDLqxedXepsVgUBXoSVfD99LJWWo4i7UwFmLY1gLY7nABZJAnJMC1Zu2BdKpg6g5XJtWWrYgsLBMFDB9DNm4Y",
  "key27": "4GHKaWrtfGChDnKiYJMJh3mZwTfadXiHa3TBXNutKijHubW9quwcULiyXbmcSFAwzhEHKtNFAEvd4aYHfqmcMwPc",
  "key28": "62TZ9CngdhZ94GcEBTKSa9FMYkHgaM549sDEgWhwx9khoTW4qmgT6SvK3yCjGfT9TmqMMQCSuZaBat1LCJEy5QH5",
  "key29": "5Qc3uYXoQRzwQPoi8tTHurpQQ7jbWQNprFrcYVD9yEuXTc8UuqpnA3KsrUv3NQeqMWeyroHLvETqZi6ix3LMhQTH",
  "key30": "2URJujibpLF5RRep2WLkJSG34eEo13eyPY4kykifJCP3zJ9ZPJEcweSdapN6GaimQZEMYgcfagQyR7EqqgchpJ18",
  "key31": "Ec4HeNcRWb8Xzb7BvWvk1HhDP3ESMCYckJoSLWTSod74X893faxDwevyMK5QJtS9EdWiLjpaawfhhzcVNJHMudK",
  "key32": "38TpXYcPL9d8niMKwRRaVA4jF5CsRMU7pkHvkpynZCufrGiBg1ejwMQozz8QLVGVQJ9oobNTq7LxNoEkb64a56ZS",
  "key33": "5HHk8JCfwXUuDZL1VstopiR58sPdkgBZpZtqcWPCE4aqnS2EhF8m9pKmpkLG689WYRXhXBVu2DmjWMSoWtCJ6Apq",
  "key34": "5w381Srv3RyhNkFqFy4NdX7CG6JAkF86K39yT6vYXSvJ5nuNE9Bzv9E4dRBd8fr4Mp1sUt1RvR2fFkgn1QMyfeVJ",
  "key35": "4nCG5xZZZNagvixLUip9Vk4XD8vHJoCkzt2nGTM9ZzkWCmGrZTNv4Lxhfy3SxmCgwwhrSCWG26fKcx32tgbWLwq2",
  "key36": "5xbs6CBPgTtRWeoA1s7dtwWJ4k9jngweHCQX9WumBGk3otJgL9hy2bYjxwwSKEcoLETdj7uFBCnFDZGB4sVrNjqN",
  "key37": "4EvmtSf16R9avUKSp9JKXxAJo6ihLZezggNyXerECzHpi63DgRGRbfFPq2rvKUAjnbozzvdxXcKWYr6WbzBxJMMX",
  "key38": "51U5SXdY7NKdwmXPVtaA7xVABUt54cwdsb5q1ACXoJrbdMvtxpVTVGJMb1Ct8SprLDDfxJQKuRGyg8nruT7cvFZL",
  "key39": "x8oKqJxfe9YZgQvxuQhUTUN3yeCW3m8dY41FyRgCfWxEAHMoPxqDZdybTJGb7mzxmhBLbdeVaVHM9sU1Y3rDa6r",
  "key40": "2KqFqizfXDcP84Eap5j2Wg78gEjFp8d15QU6FREix5BoWutV3h76EeZAsi4iG1fTnZBonvJf4RVc9PHAjSLQNPvF",
  "key41": "PmGg3SFYRVbgtt9Q1zVuBZd1SHm7fYQeQeprpu9c3Az22oTGPb3UvMSaFnLktsmA5kWgPc6y1onasRHF64G4uK4",
  "key42": "5zYFBTpUNxM8x8tb3zEhJaqFQrC4yjuHNVtqVVyHG2xd2fmC7623Zhd6MYnJQUZ2mdfh5tHrE2gvrNqrMwQshCij",
  "key43": "34GQ62n16UVQPyK8tSno8jJvTyGtAsxKfg83uLdV6LXvGFYuU8ps2sKE61s7sNtwKLWQLB5DVGhLtN8hWbVwtvu5",
  "key44": "GMrZHURSz6oSSHmyiuHxFXL7RxX4up3DN2h6Zvo5poJGQK4tDvhvQ8hGCkcXvqRt4YcetUwm9UdhugZh3Sx5TcU",
  "key45": "4u2aDrFEaKFvziafWpuDM2EKdph2GZb3GqS2N6RFueXUxBD8o2nirU6GqAK82NCbPEsnNndt2wgwZhZconyJ2HGb",
  "key46": "3i4kZkL9GXQWCU9DJauKmpk3GVL7mDatvF7xDuVVjRzP1HFFftMqPcoU3wTnBXqB8wKcUZu1rArWyfE23FAaNap7",
  "key47": "4Ef26TrrjzLzdaKemoVMjuGfwWdmaSd9g6BqhfD2auVAxgnKdikKLkSVmnF97ETnwcgKpguuqEEvLgefkrz6P7uS",
  "key48": "5ejR7rKQh7dr2djevuZPhD7k1Puu2BuGFqvad44mC3DkEj3dRrzDdraHh9Q3TejPJ9EUaboqxxuwFmphHGT3W46G",
  "key49": "5Ker1q4WHhAyh1gb7gEc44c95ACAm7MtxAgkpbrQnakmuZNyxukYoMaKoZzb48uD2ucaLuL6kpQ3xz4RS3HuidaH"
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
