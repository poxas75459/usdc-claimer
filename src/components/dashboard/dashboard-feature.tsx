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
    "2TAXiYtRxcxLPjm88XH7nhRcsEFM769Asc59TjLmkMUNZjsb2SfJ128pMHqfZFeq6K4FM5MUwunMJssBTdX3Gf43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GkJXmtByy2CcdcDvRxRX7najzDtuChX76QCzc5isKgBAXkg45MoNDmbAHfV7CrSsYttd8mgMbBq8xwzPibbu8yx",
  "key1": "5XYGafSjKvDrNLzHpvL8SRwywBLktCQtnsdKJaMJkJhTYJ334GqLjSS82cEutPZnTmBKwbZjQtWZunZ8gmfdtRLR",
  "key2": "2B35mpAxe6m2m2hgugmGTTQ8D7BnK1EJ7nBQ6sohdD4WDMqisCgE64APYK6iV2vtPgs4W9UA3yGMsynEaDhCoKtw",
  "key3": "4kXhUGTAAiStPmZ7BBEFhmBaEsynJtAiboaJkQ9yWePicMJqhQCnSzB6azDHYzbkhfpwKC5jwVMx1Y5kdaHVePHd",
  "key4": "4Jjfkw8X5dhiBx8aVQghzjbGJqA1pAQx5tnJwELevZyTX8uYPW6BTLhkmYpLB6HPtxuQGBid8ZfM9eoqdpPWxKDo",
  "key5": "3gKK9HXei1XB9Nrkt1yZ67oCCGaFMJcRNq6BZLQzzcQ8ceG5BteTCKJYv8vGDFDq5mwyibYTotN4PRtzLEQtM4iq",
  "key6": "5BatdeKUjkW7mXzyyqfjfXtzfqbudNyNgsmGeGEUWmKqtKjdKz3JBLkS3QedDyvrxRQ91c4AK6QFjdgiemVmZVE1",
  "key7": "3gNrLk9q7xoSCZtV8yB7iGVkbApCKUeCCEAhSb56pjFWqHzq3vczUEhYVq1WNuR5GJ93F4JHAmS5T4BBJ3BuJYdH",
  "key8": "3hpbARzy9YCR27GgJe1qQQHxfEZ3ycseZgDzxgSqTtemRRMoBPrrQ3wDC4FNZFxCEKJZry93i5JPTH7nkYWwJSmN",
  "key9": "2hoKrbbwcTMeu3eeSYYxG9SL6N6YH5r888QxXEuAWMQHTvXFAV27JPzNS94AjYgEcdeiCBqtofZrVnby5uWKtZji",
  "key10": "3j9pmofe4nNXDHnpa3bVbrEe2Y4LkkGat3vnoAUCcsxL9z8KeYkzdzBZSgAUQpft7DnpBE4pckibTDiatMYxSjsn",
  "key11": "YkXuXYW3LXL4BjrFJyaBRRgwUB8mFRbSknQwTt1RC74VXXRSCNEickzLZDktNvwkzkGNJkPDBarDLWFKvSLejD1",
  "key12": "5Wj1L99SF5WxiT63u7Qy18TjFQcCsKFjVcsv6DNcjM5UMCyZbzJifXJLK6dNGN7HHd1dxrgpkTj4UJ7gh4juoAUz",
  "key13": "4QEW8HD7m4yWJAFuXeAEJCprqptoxAmz91meNFqgAe5dj3M4X8HYGuxVPvpu6LUS6i5Yfhb5UUfGjQoVERbWWRoH",
  "key14": "3D1ou4rX6qA3Cnx664k5yy5uSV9utKpXmncJpTAVHFLHgdJTXkYGPbPUFAwEKnLVa5Nvn1dnFXbftzKh4q5wuf1E",
  "key15": "BFD3eAtihavmfpmbnaKq2xC5CHnC83bWUbz4AGUCZkSKy21JcKV9KmkWB9VtsiUzu7u5Scnf9MJ7LX7yQwiaZGF",
  "key16": "65Di4nDMDd68XQ8Z5zRzeGj1AcTX5GtZxDPFSsbz5okLT9ebjXQPJ72XKnj7xgwK673N3rA95Vfs47LX6FY2vSeF",
  "key17": "3J8VayteaDMhvbwew2mxTiktSJzhGRNrYZJGSTSRUfUC21UJYPymXuGZzRdpLtzG4E1qRmAumeZmV73Srm6V9Gk5",
  "key18": "5h7UWke1FRzALJ9UJpd82z28fBEcNtBdpgG3Kgeoju3CAoPCHGHvt6qPvon7prETzuKfkWWuivCERnDC5jTN4U6r",
  "key19": "H77XVN5q87sDph1dmJDQGrERZcPhTaqysmzvozDRGbPe9tJk3GGPvjaHmj6koLToeDA3WPcmWtvxkMKC7sdXCWa",
  "key20": "2PogawVJre6tjnmJB4XjSUJuJbRoho9fo3rzhWfBpJz6gWBxD7naHDpCSeWcXvoKpcTT99kSwWg5FDqUMK6S35Jv",
  "key21": "2HYFmVhnXzxkC22iW8Jw92DrmGMr17W5mYKPFC3fcb56JBs3Bd8M2BzqJ62oUhUhiWX1cFJZF1bkcZUb2PeRPgLA",
  "key22": "FvEmi2R3d9yQSawwXqLW1rdcEVhqV3iWcURKiS8FohVRfRzGGeiNPGmoGLKEpbrML5A7YMhr15w5sshtmFnwi4q",
  "key23": "3h1DofGXZs12f3fxKkbWya9zQZQnNtezjXYC6hnStV7VuY1aRZXVRvvPCaPYznhrrAoCmU8TnMGzhmTRSVZRimYy",
  "key24": "5Du2ranfsreLeMzkxHpwfoZB6PMVwLsz1jMfpZEMAtTK2cGrS93wqez1iNFNqNx3FctozUiF3BixFp4n7y5mCGn2",
  "key25": "5Q7fhJbtqUDEfhRB1kAJbsMAeJZpmZf62Jr9Mc3CJ4jLQc6Ju8ot7qRNLqyKNyauBAhemt8KeN3aPMqeP2k8Ji2K",
  "key26": "rTFiBGrBRUoYPwbQ56L1yM5JWHha21GKwKDFoKpF1Cc4Rxov6wSqQXmLerjkWeRe7A48qSywvpBkcJK8mfxtyNb",
  "key27": "5aph1HepbSteJ8dm5AgrVDiCwqUVjNG4iSVaAhYjpCEGP1F2Qz9yzh8awtdfstRqnrDa5ZWc8b8W9Bwn6dSQgFCA",
  "key28": "4RXFE8BoHrnjSpr1Qo32ZA1ibM8JZeRtFiM39Bvxc34uokVU1jbQzBUAHyaj4sitrss6rz8txwwr4qKnfw2HyS8f",
  "key29": "YLe1YUZV1DLcTVSjtnyqSBF2PvE51SYkgyeyQiBtqMq9QSi44nyHSHBimhAMbFoQkDGvEUCekNhzBqFjP6XozG8",
  "key30": "26iQh2eynEhdNFi9pAfuwPQzpQ5tDzu6XZDFz1c1ijPJ7tyijqGgphmXNpn7FrLuH7paSQnsqYQkb6zuJRYL2s3y",
  "key31": "3f3rZj6HweU5Mr3uasSeXSXKuhV6DQ1uJiq3NngRpDLmTQHjmUZTMkDATKTi66EVFDs4pYeeUbcRdZwgSnRCMJVu",
  "key32": "22wRZHSrn36e5fkUpgjcuqKaDG7TJ16FH66uZGpPZRuNECFwEnLmUMrpnRAJdYJrA2YcCFmbfh7S4FbkDJ3pFRHj",
  "key33": "4pw1VpYuhQV81iaer6631KYx4mgtncqNFzfQh6AoLafWrs3QWiPT192895icb53CzG1upuNa53gabodeQh3Xgp8j",
  "key34": "3dVGX3ytSJJbo3DiQP3mybdguVgtD63pu9PHVVLdpZYP6fyHU6J8LZZXCZVnnpvtEgzMwdiFdUfWriqPMVZY1NkN",
  "key35": "2zVTMD5LdCsuCaT8ZRPMSyLuasW8ES2YE2mK86Lxz3QsP12xSHR4iXmd1s1smwYjkKMzxNinixPNNduPPiUpo5dh"
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
