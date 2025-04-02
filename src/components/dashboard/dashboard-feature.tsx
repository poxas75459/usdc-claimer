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
    "4dQjUsemnh1fcH2kohu138gH2ZvbfhVjH9fvmfztcCD9gxtmpYuundvSYxyFPH7SHoUExsac4f6L2HBvcLpwTca2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kq6sF7mQsgw8zVSBKQVRqahxBBLpwzwG5A1pHqwyFggexub7wLjknLtcyqyA6oAaQBLabLpHawrLmBssohZS2Xu",
  "key1": "4kzULY87gn5d84ttumaSxttdQiu7uZSo1vC2X1qHh9mRhFRdVFpWJAngxWyXz7BRMJZj2ZBfmN1gfc4gzYJj37Xq",
  "key2": "4Taz2ePtKFcUXfpyFHGiNoMAwHPYa7Zzh1fniUF2ZfbRxyGPhVanoJ6ZGfUhkByJKLd2zS45eTCJXVuz1jYm1xem",
  "key3": "24JmaM5D5WWfzpb1bfbWSeC3dMjyP2MqLJfYDaTsJEHM6rCz1zpgic8oHDpR2nGuKh8z5QdoAbfcXo4zCJVudFej",
  "key4": "2KJcD7NpgqjoG5MMH7gXg2DhNR4T4BxJSCQQmVfMXnUTw7v4AG81tEWnC9XqoiiRLsLMZzGv92meEw7cRACiXCeH",
  "key5": "2nb9YcwPhkeBWbSTtdqPja8xKBPu5Bg2SLTKb6zSwW1eYBtHGrbPrfxT3RcVT2N4WoEzWpS3CTzj78wehsufhDoR",
  "key6": "3GJNgn3wgMwnH9BCmKj7JPxBYoh7kYJkginK65Xb6kzrLqd7KnoAP6XrPppKtf8bMQ2iV4fd1hkFLfPFtF1TRgaA",
  "key7": "3B73NJDNgsjCi22DEyaQfM6ek1gQZN2dxdD6aMHhax1LaKRQ6r9b73vp9SvL6SrWHCEB2gA4FnrVQvJpGSzgZxkp",
  "key8": "5UxgE3LaTwdd9WdnWCH2j6pNjy9UDyJfuad1gnzAw3Kabjz8TajZACWcPX4kZcyD1eDgL35T2kCTab6xmsbzt2oM",
  "key9": "4392dWJspTH92XswyRf3WwkWQ6j9tWZTVX1axqXJebv3m98pKmEzpYkt4ZeGHRtSidy98BhQvusr1hN77cPT6dCT",
  "key10": "31YG7YNsmk2Csf9TpAMShH8b8xR41bR4FLJkH4bFEh9Vhx2jCi2kscUa1oB3FPc6TTFJj1YBb7EswSewimjtMayg",
  "key11": "27UGmyJYv6uEMNAiGrxdrpv3aqHFw5UExBvTCAsmPTQfmnw31hw54ChSRuCqSwqhZtvJgWZJ5SrH4YwbE6u5nKsy",
  "key12": "5kkQt9JtJL3cxJpACxqbAEHSetmt3hvVNSxk84dYVesSbkvU8fzSPsGhEbmBPrd7HnGvbTS1u8hvkEiNncUf38u1",
  "key13": "SfKp8NbQWw6X9sxAp5H7BJsA7ocN4Wk3YbqgCu7UgFmNKate4hXg7cvvt5wVHbBEbLXWDhAxDGsBRrJLXyroMTb",
  "key14": "2uQrHmrgeZSsFy9KDgGwh58U4tswPC2YkiB9qNuEuFbaTgEFQ48m3puh7BdNzvkmzBB93c4HRfPNkpoZGtuZzB96",
  "key15": "25Q5YotNoGzfJ9jm5dHV8THxNMi7C3GexJEjHCMofG29pYH1FBGyn6g7w6LBNPGiBeULi7pUkK9GrBYpkskxbfdB",
  "key16": "3S4F7EjUU6iNqpA9tUNX5Ks8G2imKLU2QLGsnbyup4crpHosRv9LkZ3fB82SsRggFctmh7wuSkVPjjgt3Sp7amDB",
  "key17": "4ffLAJxyNqjtejofyaPWZRktfFRuthcPGGKsYDyqNBZsESDtQj4u3288oo5bZGFkquqKAJ2QJvtM8eSfGL6NfSi8",
  "key18": "3iMedj9P1tP2dD6PBZEADQWg9petuYnSQRgGZfFTToTQrgRQGgM2dJGLULQQw4udBn4Bhm11tDhcYBGoBzFj1SGC",
  "key19": "4yJozZC5wpZF2Mfg5YjqS9Jcp7qoG7mBz2pctbDdRdDZvxPjNL6c51a79BJzkjs1i6zAGuYtEYC96ASP1HcbHEtw",
  "key20": "3rxV2ga5UmgnF5DHEvbdRa719sCCwbGFhpxRmkzkAWmQBd81BWbYD2AzVPSx4ErZxpuA2DVpfz8hP9qTeDNniTyc",
  "key21": "5HYuGauCZLcbQUBAYyVQUSXwU3Df2QTZzb2a1UbTNEVgGw3A1CCDQ4Tw1ccS6rUsubEcsqhFjQZnuWGzwaR5tA1P",
  "key22": "3GmsnyBdHfXY4tupLdpRosyFN4SKFDXr4yqzaovEXx9w55RtGZvMfVpXRC6oj8iCYW7BitZjAmqKA1VK6MoeWFuG",
  "key23": "ViexjMWosBCeN4HWLwawc9gopHQcHFujqJyEGBW25MKA6jPBgVp6QkT3MSY4pAUyRwoRuw6i5wgHiq5mgtbu48H",
  "key24": "63bmDCnmXfbT37rj7QCLLujxMXuuRkiqLtqkvYMj9jGdbTj1UuRw6ZMJvVVRS3iARds3GtpFnt35fhvAA5QvvvHK",
  "key25": "39YBtCrji8uAu6piGZLoXzLCFFuC2etfwzGH4jpe86tjJ2mDevUzML6YSpFKFVJSLPFkeThL2bmjDHiWAHUeREDG",
  "key26": "5fxvosKijEn8tDrY4jbNycXMNmHGKMwRVnD5yU78x39wi1FQHrHB1bKKY3x3irDgZWkoKLPrPDYE3zJeCQMD6Lwj",
  "key27": "4K9mZkjPNvxsJcQUXCDPPKC833shqXXijKRBfcyEweBQBo6HQ4hLZoLSvSm5awDY7cnYVtuWxUyzjrnZaweykobt",
  "key28": "TDTxjdyS9nb1MLrKe5QT2NF12jV6JEYV2MsD8k6QVS9UJdaiF3mFXjrdmP4MKJqAa8SBptDvJSz48uMgww5UbW9",
  "key29": "5nZxcMrQFfj6ZAw3cXJuDiTkpGnBZYEAQ1CUjT9XU8CzjJGPotB7jLERdV5REJpyBNQbXx79G9Q83YyBV8x54aTE",
  "key30": "2d7rxgVZeqqATAaPd4JqRZQeCCKEqe8hPzKR9zwxJzbbHhTaXDK69SLnYQkZeBG8ijT5vMVGUa3mbhwU7iYBbR3c",
  "key31": "5nag9SVnwCqu1R6qTFAaam3odaHx1Z8cQ9i62UKQ4ASimBFfszcvETdVp5uRs9qcHatXfxyV4PeVhfEP11v2gujw",
  "key32": "34sULLm928jtuNYptGhvsHndqfTcPsAyHC1vsxyKSbRNK7Atdpi2yDWubUYTeVyF9Xyr1mEJYcg8412R8eDVy5Fb",
  "key33": "31SH971SgD8FMUXsmyw7y3XJycPVuZfEotTrPe34YVHhYCTDRebK9ZKuViHrjEAk9xN62UVMqaLLZ7ZgJSboPx2q",
  "key34": "4FmPsdaTp7QYdoxwFhdFATmTepeAVBHq4NxvPvT7F7F7jq6pgM6tuBKkn4t4jGSiSE9QJiFxZY8pvBautHhsaoKe",
  "key35": "2MpRkY2yhcxggn9a8ykAMFHzstBUbTE8YzXYrrKhjyNYStBQQF9V9URDiczBU5cZ4rGk8koQN81WLotSwHkWL95z",
  "key36": "2BEpSgUc2BVkPgyVJEVDzmTqGn89vdQEL15xrPytd8fJWhXnYB7N7thCCuRvj2NosHBHhTPUYbj4wJPKoSRghDaf",
  "key37": "4nrbrizg3F17sZWuw8bC6Trc2agfcUDfBG6XF16KPYbQsVPnkzNa3VYyR5QXg39GJ9TkWkFqsGcTFswdHGcz9Y6s",
  "key38": "47xPZxVCbikZb5rStD9tVySKyK18AXsjcknrdGF4zer5UhpBbqVaNnv5nWMw8T1g1jKpgDnXZUW6MWCJJrbhHY9k",
  "key39": "5MvroesVLgfYWTTujLFXy8ix7Tpsv6AjxEu4jv5CTqwatMqxeQUpM3owbw4b14sDBSDjCDnjQ7NnJ2r2PsjRrhq8",
  "key40": "4WTGN8Z1KYSyn43CghUmwTKRHJptZsvH8pJ1SNvusAJ6bS8xbqYYrKnsTn9rrrEV8e75VD6Fupr74yFF9AvYtN3V",
  "key41": "284RMLqwAqCSwLXUhvE4QTsZGaKmthbpPtZ82MVziHVG9ekwVC1h3TvhTRa6DDAiAe7AVpiwwbtfGE19WGvyLzee",
  "key42": "4xJpBe8ZaiSApWC2kbTxWNhv1KYJ86gpPvv3MyByWxc2it2daZpm9uTVbzZiCKzBr9h67PxgWSLnK8TcM2odtghq",
  "key43": "4Hz4rPvb4FhbgGJgBieuyihTcY4sv7LUH1iUjVc7FoxyiKgLAECTu7iV9ckAUfX6JarhJA47C5D9hVWeKYXSAXn",
  "key44": "W9m5ti2YaRrTbX5cZnveu4orE4gSUAvKnpbsWkVafCWvNZDrRFbccbt3846wWX8N6c8HsVFNCBSU5L64hgkQZTo",
  "key45": "3wezr8WNME6VaXb9idMy5iTdCmr9sR1ER96DBNvDx3FWcXTvvCR46ALx39VFKLHCAWE3w8sQgcbTnDxBRpDMMpAc",
  "key46": "4v5QLNuEquxDU8qvD51xZN3vd1TynRxjVBe7CBCWSkzSocMrn5j67Q3AgWTrFnTGcGkcSLCaSaYTu13X8bmM7uYY"
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
