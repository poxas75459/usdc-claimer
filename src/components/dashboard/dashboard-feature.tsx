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
    "2GXCCByR6vGvDsZMvXz9aDKMwAxZsSc8egend2MFZ2Zr1LEB7E3sxBRBfALAfmhkZ239t6CKV4NYXiu7YZCvayLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qg2cNo4aSKxEEDLWi3hCbSXeAy6qKbSvDs18PwYBVr2seuHJoTAWPYQHXBTDiwspjcYmrxv88KVWC1B3bbCTkAN",
  "key1": "5RhyhFfX5LeP1giMGUPLjbs7NomZNsooJVBT7qzENVW8dY9ztUb7om26CfgyVeEhefHDvq5DDTwym4mEXpUYFYGc",
  "key2": "33dFPyGD34tu1khCodYNCvsFEPjcUSnHiHZJggGUExGpx7CF1Vs2toX4VHiEjNP9W32ixtEEDLpDJmBvU6RgFgcv",
  "key3": "gkUzRweZxvAhsoXug4kyaYD3cBaG2KTx8MujtSnkgyY89yiQpahxhSYec6M7thdhEfNMWKVN7MMo44Q8MGnrSGn",
  "key4": "3GN7ZbsZeHcG5gh5vbpXYoByo7HHMmn45qNCNT3omweVQUY3P5zPMGiA5F5MFpESTwaqqa29XW7bT7mnH5Lb54Es",
  "key5": "4ztyY2pRFM4DDjvKSGaCgoMadk47E7yiUo9SpwSUDdV6vxhGrCQgtBDi6e6bJUEPN18oPWJBLJfxkrmgQAxEHNEj",
  "key6": "bso2QnZKcWbKgVeQnGJE3g5AkRkVfqDvYF5av83BGbUYSXmuvhei6Rje4ZcikWQPp4Z8SQWn8TCQwrhnubZoCED",
  "key7": "5UG6o5vDvh82dKiRgHq1Rw2mXLuzR7SU9Fx7EmxC4MUsASTsMcTzdgWtkajFcqfaU8Vd6sJgT1okWbZkksfsz1Lz",
  "key8": "3CWEwT82Z5gmfGr4pbKibXd9PqhPydBJdbhd6QcajWbdPYMUgWvMYnMZEJGDdm2jw2tJgWhe9MXT3KRgCyquCNpG",
  "key9": "59dRU3WEP5t13iGDTbjHRqXjCcq4GdNdKdnMp1BipytwfV91v2phXYP4Wi5BgfZGypqJe3wUrLKrHWq74VoV3V9w",
  "key10": "gHVPPREdsy5iDkhvaiHXX1nGpu4aWqbvbE6aMcpTEh555saVCpiHsfYba1EWcTwoQdEw3LuSD19CCGuL5gzvPSS",
  "key11": "3PEDVxsykZeEw6uN2UvnJa7mYDXtqutjSePp3rEE6WroorwWLXimAryymAzGEJ1GzRxBGECsPoh9BZu1xTk53AWx",
  "key12": "5eZSnyWnarBKT85zofTiyR1f6x1Rza1vY7Q4Hnf7qcSDj8U6ar3ZvZGHovDmw2bc3yeeSg835rme8nS6x5Y6tXpS",
  "key13": "2BdrDVrK8Zk2475gvgBjybsffQJV5z62E1m7NUrZv5uwr1QEjEafRY1JN1kYLYXZSSET2dvwWhtDcP7zde8M2ZZN",
  "key14": "2DKLfyAYtpLuGncRWftHvvdb84Et1aLr374iHkVeQSGMsQvP1sZrJCGc3bbFhNMd1oa5ZfnwvFtyfL5WfJp4AYT3",
  "key15": "3HWHLHAT8XtACcWEyQtB4bhm8Uujc7PZNu6vUVsr3iXpxsNmJxg3Qqmahk6sp8paiSFxaZy9FW1BZ8NCcY1RLsuS",
  "key16": "5xaecbFMPuqPvaFScofytkwHU6dfEn4wyXaUHTGScKmsh3Tz5nQr2aVwnTN2ccsPfyYNaVjTkXrNoPD8aWuLkk2g",
  "key17": "bFy1ecDXzQTRPNcKAAWpyfYpUbZkgqAftYk1EfCZwztsXTB5wdqLmcjooqdGmK2Cq7KfbM6MQ3S4ATjtD5Jf2np",
  "key18": "3cy7wZ286iyLq5FPGycdGNRsas4z325A1MgznWP21esraJzdBjeqF9Gk86o1UXPFRhnq7b7pnCSLGVp6qTzDixyX",
  "key19": "21oCsd9VH5TaRkMmArB4ZfvgeLMvDomSAxRc3vvkvZ8JH3fuJX2TutpZPsbtKitWUrsrGw6QYQPsd94DuJvhJpFF",
  "key20": "5HW6T7PTTvzpFmYXWmoDGFgGbb6Da7LFoQ66mzbqePRietE94GVoMgmg2esZr3HAULboWXN91JLUkSryPxqgmuAS",
  "key21": "KzGGRF8CA2koEsRFoaX2rGbfawcwFgK7jXPeRseoGZdxqJTwbFjgzoYh3HMDWVV7pC2t2uTrTP1jMYSEM514uzb",
  "key22": "4SPk9B3UGYzipgPJ4Q6yQWC9eSwRJuSNhXvdTRoXhKdYa5QiCm8chNgPupY6rgS2EjxbTpTBzBqwbZy6ak99YVyo",
  "key23": "5sD5kxTYjJ5ngMWATZph6H8WytwDDnKWCxHHVRZdWpqUSsRFroLd4DAErkCJuaieksV91CmkdbNatrLBSqk18RdJ",
  "key24": "2eGRQWims2xDhiRyZRLaVR9nLzAiBFxrmhqk2HkUcaAeUrmk45E3XaFeyrDqmFnvru8hDPt96ma6pmcqyZafxdiX",
  "key25": "4omPQrdGgd2CaDoEptJGVDMiLvXhjfF8E256FNu5BewCNQ8h1TmXbL5vF9fJp1r5fXfF33yDZSJ9MNN2ghaWrayG",
  "key26": "2UejcnYeKGHeuzLUEk9LWouRvjVpmdvWSBx88JEP8B2JtcKq35DP6pyeWSq3TwoEXJatCaq9PH7oe6FXTqDGtZJe",
  "key27": "44sUwwEhtzfQwsjAeDuxvus6E9E973VYqnGdytiT4FF84tbxE1P5aRNnAULidYYaA6sziJNKTSGcGMSFshoxnYQZ",
  "key28": "21eDv5VCymrqfA32PXAQG8vdj5Y5scAxNcGW7eYEmCFFz4qqgTuAjMBB37XLR2CwchJpSEZtZS4vyqmCxymAkoGr",
  "key29": "3FikRXw9bsYLfvDWBCfT29bUYeTE5eRuW2gyiZxj7ny3kwkGnvKbK5nvXvFajHcAmeeKW1EMTXAcJ5Rs1AdXq5Ru",
  "key30": "4zLVfi2vmbXsuCEMFfSpseRFZL94cso456tbcvQt8sG8PQf1y2AWkfqi6UhRYNBAfnZ4GA5SKfFi8iqHJh2ftsGR",
  "key31": "5wfH21ifrPeRcW2YLixC6W3enrJmgAXJrVckyj8CW4WFxfaCtRHNTZ3tC7xWonSFqgCjXntZJdWqjFTTrbmrQHuZ",
  "key32": "3PU3i7RxHYAB6w65wcQFytLuG91qrGekrGvUbFUZAEABqTDd9G9VWSBgv2mzg1xRNCRHBRdVSXhkGB5mR32pXu7w",
  "key33": "3vQaqRrthi61pDAgnryo16dJjvqVN16FYH4HeQ3oPBRoUpRgm5kMyE4LhqxJ9m8hb4WkEJiqnUv4aZ8HjijEFbBf",
  "key34": "2WxvsGyhnafwXmwxHT7e6KjDXfoHPmyEWpnwofZMqMMGV8vmLkDKNnQ9QP6UqLFTo6QvLqWxv3ZQU5RQ4e4HQ5RB",
  "key35": "4hCtUeThYUFBidh178QZ5Lna42wLyjVapxkirpaHxJhsRYbhpUqpkbvREoSSmfaw3iAZSVLegQ3esqEkW2YeZc9v",
  "key36": "5pxCnQ8xjhguzNFY4ApQXpXD5wEppLLToBCzm21fHpLXMfeD8M1DtjUWeMR4U7FxdsjrR4koNnfZRDL89kB6Umzr",
  "key37": "kqKnG29dur24TMZAEVEE8burWD15MKVtyiCccZd47Ju2oUBaLcT7faKD2Vjq7gyDwvVEgBRkP197aRoQXFAH6r7",
  "key38": "3NNFKFetEXPNmcZ2D42cSWXfDEmKehbWsdp2mYW3wN5Ubcau2keLyQYZHAMK6ivMakkpGJwjnPv823sy9BdmCiUT",
  "key39": "4GpmMy71swVtuUqghBPF9KdvDyMZxMUaiKWFv15Fbf2SYXHsyfftLoPBEjsKGPcXRX9JqbGaeQ5WPXmuuPRS5YMh",
  "key40": "3jHJwbEUreonH9y7F7kwB6ss2vLVZQ1fTCsnhZeGWDCeTVR66FbUYfSumm4XwnVHXfUkxW2iz4vMk2p71J6gMp9H",
  "key41": "5xFb29h6oEa46c1B6bvT3TSL4BzQa7qxq167vNZpgoW6gg5dj7M5ix9SfTvgvrEy5HXwGKzFiTZCQxmQj8LUusAA",
  "key42": "2759dfcmdMUKHeZCb9hDxFENjgqNqsehAHCVxQwvRSBB8CskF85w462WUEtsGfwKd2DcvCxuQ4fZw3UADGSQ1zfZ",
  "key43": "3QYZdqntRYBh5xS6gB61bSC34UN9ofJvtw5BTqJUk1vc5jk7SnBywDtL8dci1Nffq5uqv1tTTUa4zqfB8DC2yHS5",
  "key44": "HiS7uRxdSDNUmEUD9spmF3zVXTAH6krX6PDw5t3y3HwjJziZHTU3M8SvLAd4vw5YEzoGoytGr1mATnhtWsb1Rnf",
  "key45": "4yyNd7Xcf9tYVdEaCv32Jp4oqCHgdozbNr4dAb6xGvj2Ac3c5UR69pEiq5krMXEs42jdmjoUqqKDB2CVU4YsyPse"
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
