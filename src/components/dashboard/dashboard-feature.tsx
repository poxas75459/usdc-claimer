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
    "4sD4VpPxneL8RiLTMLLGPh9riXi32BTycCuLZWpu7CtXvLeFFuMYX52ruRUURAEwK48rnhLqdY9i6fkuBSBkQEqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vW8tFi22KS61UBcQph1aDQ3nGRqDjdHVpnqs8eXsk9igEszPrv4YXVzNpwVMzSqDVXs9H1LpUchrLC6LMhnewih",
  "key1": "64ZamQ9Z2QNC9yoGd63RrFZ9qYntrLbF7LEAkJoX4jQoGy5KAaNMYDHekgv2NsTbjf1H4RgR5eoN7RQCjPurqN7P",
  "key2": "5DDAWpmmfDghMaoAgdyBU2maiNvkkP5oLekYvMcSH3cfULUnL5V9WaoQHsFwH8yiTCcs7RF4HTkKQ49mweXCi9Er",
  "key3": "5JHxXRovfSAYfNnxB3upsgujwMidoSbE14wW5SrP6SDewcuLfoWXh6JxURjLtHreeQ2tnQqYQesbrw45tswahFML",
  "key4": "4Kz9DTeNZsyr6sZuLgQaYZRKhXvAT38geRA5Fotn8PHchqSDMW5VZk8GhpefmJtDH8mUSnAoxPjNmxZa2RNFzYfR",
  "key5": "2iSEYnzeApcwYscV8KJAeJyzw9MXF1Bxv2V1ai6skQDuNKpQsX1cUcJRjJfGqFGrhWJyxk7GHnEgKjXbRhQDBaUy",
  "key6": "5kmXy3ChaNJsVex1ZmGMDZB8oNX2nknamC3Mzzq14jA6jF4nWepw8sosGXvyLYUf3Tqh3vDcJzwdfh4S5BugX1ox",
  "key7": "5P1oMMG6wJJKxp22Lat7KNni98mnFFK9vE359QyKvjQ947W3zPU8F1LeZv5hw8xTwqZhiJhShoSwbu93mBLjEoXt",
  "key8": "cRSaQYzpjmRFHtxRbbyzf1ezCr5apGokz9b6ezVFAAE9h9aYab8VPad4HNeC96nmy5dyXz2LEqSavDjD6Po28Ay",
  "key9": "3cPd2a56HK2Mm4rYjTd1c5azmEC29CHDBnKWXRZiKpE5yHM7AhG3tzz5XRCwo89zjqVCHn7k3qMLYwo3ArRAxjaW",
  "key10": "3QedzVN62cVgrqbfFx3Szn9b7mu8jaSziPro8o5ZYBiKky49R79mYnoCLRuPQSv4x5RXaHtm4DNhmsCCMxDThPW8",
  "key11": "2WvvWX9hGz7WAgsVbuKUE3Zn1rF4DSE41v4L9ev8WTiwD2GzGy7SKW9FDPXmaY5WwHgEiqerp9LxU3eWwkBpFXzN",
  "key12": "3t7fDEBrmDkpJAJEKqoG8WsHm2mPVEc2uBmtvp1wsffagbARq2s7s7Rx1qiHdfR9AWQeQXW65R229NpNasigcqtf",
  "key13": "4tU9QCmk3Qfucne6dU7MBEz3FTBvv4ML1p7vRf7Tr9qCZnMzZ3gaZyo8nNMLphs7cKm2iEGoDbu88V1GLpDKePTG",
  "key14": "5orXc9iQ6MRHZg8ZYk9nMNPUU2QtqmsmKYfYGv6A7NYQ7Ppz8BqKNuWcTdK8JPdbT2QQgq2TYdUWibow85DWfthP",
  "key15": "55MNwGzVvBPKEVk16gCzAYA9LaH8NDEipGkD9caieT6mGpkwpVacPLj1WE8991RGrVrEZQEjPRnaYecGxmD5DmVx",
  "key16": "P5JvyWenfwXY8WwSPERmu7uDNYmt2PQ3bSeBMTyc2P9WZbHkSsWbTAGkxtW8hVgFqRHiddn8KYJ9PG9Tk9S1XtK",
  "key17": "4RPU5vRWAixX2xYs58ExuVLn4VGxUmnLePv5ERktChBi1gTciQzh9Jg5E1AGiRW2tfSKiRKhCMbRmRaGUZF2nL4b",
  "key18": "5eQRMCniegfWeMx92LV4DUeH4SbHUHW9bNXzQYzeLFMn1PMMwZpgk6GVbR8UfiAbZBhSPAkEHwNTQxGHrcq9xNLY",
  "key19": "2Mv6oRVbEU9V4HaUJEP9SQrs7m7RdghSDK5CgnZF4GRp5hLv9LnXD9Ek3rmQZrFfmn7JMjmEG6pc9ypJTTVfb1bT",
  "key20": "ZNMjDmhrfWTZ6pg7AssFMjZRYoe4KgoE6Jp7jep46oHspEChHzttf7pwvyGbpcZye44f3JLKZwint7ummz1dG8b",
  "key21": "3PaokfQ26Pc3ciNpAjg8rj57MCzeUranHJ73Xe4bTJvAaJRTmWy5yrxmrSHrvzJcmXhpvPcbnTpKWRZ5XkQfrtQq",
  "key22": "4hv9e9mNMZMu4acGhUzi5osiiAoWPxMJocPC5x6G2CaUjgYTDtL3ZadQFyN83W4dTFmhYxvGUXbzHc7m51D1PhWx",
  "key23": "SQokk3qJjRUsURCTVWRjY7G6hHwNAxTHofC6iALRjJCfHHDCWYYk96wGZBWshwDa8gQ6kHqWKHwTNhoAkqz9TBp",
  "key24": "28UaUCX1PXzP318igNQ6U3QaJjiwmWVYfCzXq537kHBiokvYBQF9i4XfHbkLyeM1BGrtob3ebSqSM3J1aBJGkmdT",
  "key25": "46zYBRx4AMCw4YCyhPgBsmRG3Ka8LSZHC2pn7NNfh6r5Xm5QYKAkEwWoC2JaLdGSwP1XAq8LeNxMbFs9H5xRQRUC",
  "key26": "5j24Y5S8fpX4PBRcDSADzuNdQvkTa6Rk6K75kNmDrYWYZtF5j186VAFTRwcq2R2VZ8amMdp9FPfeLZqrqXZTvByf",
  "key27": "nGif72NtArLpn28YYgikAiTV3c1XDTNGnkzS8qHwwFW8SkAGV53DpP67GWQo8PfxzzWfMGYMtQZY2PBnP56ZHdL",
  "key28": "3ezB9RmsX22Y1YPAeN5KnrMo4x1DB9bPNsZvKPBWeDN4zPX1DBRmQGLbGzX4LSRYukzzfGq65hH7YCSm6cGZF3rx",
  "key29": "2pbixrt1YVxGtZk4HMRsT6fLDU5dWdjCAVSZkHskYZEyrSJuumvZ8E6CkX6fsPzkWpcrH9V5o5rsTnW7pTPeTgFr",
  "key30": "2CgRzxy1EdrS7iy3oCr9wDRnvbdsEki3Mx6oRahMdfxYVPqxu6pnqNrL7Ax1CFy4EQENFQNPaKg9sifPuFH7EUq5",
  "key31": "35689AnxNF4s5LZJT7wcZgBqamPN3kT54MCxeJhaPzdheDJbhXFcXxz5w62K4KZmSmmSyVD1hJTuD26pqahGERx1",
  "key32": "65Muv5EVFhLMRRyVgX2y3VtAFNUJqQ9NwKybztaufEjKEhw9Kw6AGxB1ZkzgxhadGj2afX48X98eoEFKfzKDkeuX",
  "key33": "3sTy5DFYgXmB9nRWVPfnUATM2CHM8EbzSCxQtffWxMmkN3jJx2iFnorxrKCpttRB5cXCJoXu5xNt9QYV5oE2YPjX",
  "key34": "5VPTo7WExEgFAw9DrHsF12BNiCBBS4jjZUf3ddrB3zZg52cTXMSFvNu2RgLMVcQ7Vw5ig1JeEAoMy15Ut3DuT6Mv",
  "key35": "MQW4usPSNyp61Fm5PLEowkgC7M2UGvTuCHkm85dBo5tYnJ8EJLp57x5Suv7S8Y5WtNhrFt7t3xS18dskBvLQa7U",
  "key36": "3PVbSM2pqYvVovSE91pPihKNw6UfkYCaNsDd9qmVHkxeFy4A3auRvFqUhXHzSdWbLEWNbaf3EnvVaGPPbQWLYxta",
  "key37": "f6Qk1jZpzFweciyi3o1AuYkZyC7QLjApb4BgiKasVhgpFrmfCj5WJHsG5yaa5bp1Csk2FnBR9WErZhKLwGooY24",
  "key38": "44TARmotxH7eMn4goWTmcgMPDDsbrBEgBBC7GNhAXLquzEXVYhHb2DbFmeMCKpzszJZvADf6p9vFdqgBHeQyaU5P",
  "key39": "39Nxr1Qe6hFRQiHMktNsYigE2Sr18whWPqTGj1vpuBR7kJUSkbkk14SJoxZDvXvfMiHZWvfVPxPZMTgJ2fNGjrbq",
  "key40": "2CFonAE25L8RYEhCzUVDm8of7XSuzja7bts1uQa1C7PU3Lhy5MPZpTQBnEbCgmStXF2trMe4SPtdGo63XFekaKGK",
  "key41": "NcZFj54xK1ECboaHtJUEY9tVZF2j6TwmvZfSNYkwmh6PmDaTQHzsAFsMTWAJVs7SzPMsdmTRvBPGTSfWLqqJAzD",
  "key42": "5owxsQzAeNF12ntA6jfiksgu3fD7qMwNF36Z1UF4wDYgtj5Xk725KeVBL8rjs5cVvYZxBoyX3Nqz9CpMrNgUWFPY",
  "key43": "2efAUBSJnrrPRCbSK1qiZvxEqawcsq3jo6ZkZQMSomXWKdvTULsmniNzAZe4GP8pJPbGxAMXLiotLF86EfDXiq2U",
  "key44": "3hcBXv5W7CJpVeh2tzMPemrNcKPTKfvoBcWjUihAhEvmfnDeLwxLMaLopPRje1CKHHU4P3RwV3RoxCZ6x5dFpNg1",
  "key45": "3mXjTDpxPbFcVYgNW9wBorzNLtVnxyFNUwKgT69MHoTAXc9z2vZj7Mcf6sLu2yj3weAnNhkSLN6CXAcBygjk3XwZ",
  "key46": "26hEfDvWFwQAthBX2eDchmX4KPJ5Ha3tSVGLhwJHSfFRtrj14LmoBjPU7ZpDhEB2Q4LJaXSaCwhpxFJGVjqrwDL6"
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
