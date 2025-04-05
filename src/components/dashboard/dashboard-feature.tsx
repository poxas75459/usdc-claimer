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
    "62jgitSpin9QLU1L89XTFHzZmhs8Rd4H1U6gFgBiE4w2iCVrRfcpsk5ELYb67XF1NWqtoFAxxT6YmseY4wqE5DNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tJ6vffnTRw5cLg2G7JkjsyecjuefBJ8RyMA37MNTdcsjwnundi7izYtdpGfGZQaZGY3aEUoHLpKhhLW4ghbKgbW",
  "key1": "5PrLksWUbxT5SduzM5NnQkXu7aCMxWtVA8CtNL2JsAu1wAbt8H5yo2Y7PFBFH3DMd4GV965dDJtieUSfshJ6Xb7x",
  "key2": "22msUYQ28HWqopVVp6paBXNANGfKkQQWcdva6FsJS5CNQze99MfRtPWdj2c2XmxXnpU4dEHCjmHJCykojcoXrKi8",
  "key3": "CJTrfTdNUFepRcKzdNJZGdYeqXFVc1GhtLxshE212wEgmoQvBZZAHyBQZroFKKkWKpdagdtFT1WmZQE3TwxjA28",
  "key4": "5r5DB7HeVpFEPFiRkA33yhQbAsVxVeKJiaVwni9K3CX9iEsR4cEeATV1Ts7zxh2CeG9FwxxTN1QtDcdouxA3Hknc",
  "key5": "4rYHVVgEv1NLgh98bkoXdrdiCjV27AXfjq9PeCoHgQsnpcgxvzyaiB6bSzvB7FqAvgxVcDf9bdJqqYZndiArqv3C",
  "key6": "2YB8g8va6PuKuZo53JTDNjLMuM9BqWviwWsN7k8Mr4MJ3mbKXtGjnex5Dffe7A2gwp6goQpqH9XohNefW3Yakz3v",
  "key7": "3Jrw4AUUCgA5kYmfzJxbr993HurZp4MJB2FSjTxHZAYksxDyZiUzKjFswoVAAuh6RbTghuRsa1AVBJmLZddumRgi",
  "key8": "3XXaQhUFwpKoWrymsnSju3GXoXdGzYFpyKDYwHLSmjMvFTCxeNVw96LkDpJJ35YSocWjxc75WrJdsuCRgr4YYxwy",
  "key9": "3kcGeb1mDjKW9g8Cm7MVwmawZbtwe4Np5pjNWRzTceT4U8kJCEfGGemvUZRm6dpKfqTVbSZ8xPKmpEcXx6QBkNSr",
  "key10": "2zqyYDXWqouxoeV1Q8meiLiQG9yvQNnqG5PDNFBbyEe4FwuErj95NxVaKmfuuAAggXPVkuXBe4Hmfz8Z49bogHZB",
  "key11": "4N5F36aP8uohYwdnfaHky3rj4Tz5SH4vfCDu6FevLARUhiBZqys6MrUgMTTFetSvmin7oLfj7yGePKNsFJJywB8H",
  "key12": "5k4wu5W9zr2K5uLfFynKsFAoceuasBVTjTu5qBEK3E4c1aBKfHrYnJpgx4vYceYFgGnXXF4YBF6mavVbfanEwLGN",
  "key13": "4hy5CvAMPzVcwwWvU7f7WZppfgFYM4oQiG7NrjhTdL2B77sNzUfhvvV8AR2qnfLjsqgSTVsDMM87yQnBwTCQdt1T",
  "key14": "61MzN7sGyRBfAVA93ETtDrx9LhoiMXGAf79YhvSXhPwJPtLrk34RARgGTt1FxStV5ZTJZBDKg5YFUMMGMd9dbNQ8",
  "key15": "TBZQYVmm3TJ7C3jv7D4GbDFQow1pcAxCJ6sDSAvtq8q2M4XPSLHAWpL568PDyDC6ZRPVDZ9Mpd2MFDnGJNP1kZF",
  "key16": "bCp3DRW9A8bBWrxBfUNUJbsrvwBBPg3MCrcNDiQen9e4Q3xEuKuZ8JqFhz196EiDxdP5PncPK2d4ut3myTCoXfi",
  "key17": "5XtUsxCcW8AjEQsSGZvUmY5JRaYGyUjX1nwyPiGEg1iz2jCQYJ2weqG3xQLzVzzUzUZ8GQSiCx52gMSdcTma7eSd",
  "key18": "3GS5obV6QC3MXnL7NTwMSWuptpsfDdhSFkbKmWG61WRUNgcRBJ668vNhBbmtSfXZVfSqxxJeRKJhCNv6QnRPUMhH",
  "key19": "4nHqvSQCjgM2EbMuHKSoWRsaJznisoMJRjCxf68zHWNW5rinVk82Goc9enCSEeTMcKz5KJbqebij7o2MFefnAW5H",
  "key20": "noFanYPDNmkwqhUHhS2sX7EmtwZV4rN1jJYKwLwf9qhTgtAYGKeEHU2m2u4ogit1CACw4mCZ1nKmEbfm49xyN9D",
  "key21": "5h5bS5gdmagUBNZjRd9cyJg3rgpbUdeWXSMQCcwUM95tNCDzkEEe4Z1cac7TppPUuwpFtHtNtDxiuRVVuLmy9Sx8",
  "key22": "2N6sYR4FNwXdh7YHpjTEubzisPv4ELzG54Cp3mcUBWbeTAoe9Leq9N2C17rJs2J9UdQ8v2M7wtUtVtMMxWhuZoQz",
  "key23": "4fgpwGNkrLrbPiu5ietEF27TybhTba479wz96c3S6t9HkLgohtdiprkmzm8bEK58zK439yGxeLKpevyGFyBFTaS",
  "key24": "3gZV9SwjxP41QidJdjDK1fT41gogDvcdDR2JUvfpT1b1TXihTy6o9iVwnWhhydSSPXCHj71vgHPFjamE7KtaWRbZ",
  "key25": "4zw6xxbNkdHyd6c1VujXkiwcKKpdQzMXh8EDg8f97KBBCrECG6Wes5c29Daw36wzg7nbeB7ocSAVTA5wTmafHbuo",
  "key26": "5xkrGLJ4VBswBAwW4KkpTx7eHk6Ge5zeDqJaKMhRkfjmbBaq3tjfj9FQsqJRgRfLhHfSG9xKg9AKfPwTQ4NKpuAz",
  "key27": "5sQ8m2mtHUkj6btywYNdCsBmBxmsi3yD8teDpmMUz83eWCgK48QNjg9z8cixtnkV3cai6FdmxUpjqyutQ67FoMqH",
  "key28": "5scsFCKgrerV76tgbQBTbjwnL2hXWMSVufnQhZBJ26KFBFduHavH6yze9N41j4Mx2qcVdyHFBzHDTinC7gyzXWgp",
  "key29": "4zpzQs2LPwpkUfb8TpSUpGgaHDYAMxoDYE4oMrjoDvrcN3oKBLa6ntjKg3G9HhFryzxhzweqSNVsTLM9EfxrC9DS",
  "key30": "4GRY2dCSgEE2i1frXVHJnE6hrZgzxQqG9ZwTp1VajGsFzyPFNYjgiNBcrdwEvxPGLTqyGNL53zADiXSNNZvvXh1c",
  "key31": "5kcmSL2HTVQ8Gb7vexiw2z6q1AErQRhJe1G2Lwjbi5Qh9b2x2Zrd9GT5Ju75xaxHEFhThs7rCUnMz7sRZFeCC8Lf",
  "key32": "39BenFQ69gJmaMu4YQuTyQuJ7vUGGESmSg6fTvbHS2eCPuZjihramSQ5ohTicedB7pZccHv9XQYfJuF4V9oLzbaS",
  "key33": "5PK7iQpDh2nuUPPbvUTAUWURm5EKewHbNbVMhPW7R168GUYNTnmTQPGh1Z675q3o6gCKydPJJXU2fsYwt9VtBrcP",
  "key34": "KfsmZhPbcX5mb1eRnt4YaKbgTepmeKZL1dHzgmJuTGJpir5zW4WjdG8ZjZDuq1iS3sXYaGev7i3DfP6ccBSiGBM",
  "key35": "ZvHgLfokX8qvoYdw1GsL7XMAcBM92FSzCD2dNMwpHpurLxG1gZJPjCdF5k5nufmmt2V5oCejdnJkzPF7FpnLWZ7",
  "key36": "PU8pHwpRUu7MbZ7D7xApCA4d99E8sLhkm7Q7CVMEauzJwdfHm1XPPzMAuJSox1rhr4SrtDkHA1QyTLnjRppntQ4"
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
