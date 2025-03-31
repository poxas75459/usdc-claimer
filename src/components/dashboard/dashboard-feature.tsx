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
    "2DJYKbEKqhe3nspcu5rahkYSjimnReBVZy7hVRGZNfRDebXHWFv3ZH9Roh2Xi4BEaT3Dm8w8FgSRUxbQH6q7G3sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FiRfSx4atUpzZrjJjsjKzaBeYDPR6iUM7KtQ4QbrfQGzU7SEszHtJ9D3tjHkGgZ9pgSAD4Xn9LBHoN2RfyVj7Ad",
  "key1": "QJJ5LBeDe9yvHYtP5b9w9XTG89JSWPQjR5hWt1r13aZAErkSiACML5Asn45Mx3t5xJU9dNev7Um6YKPBBS4hxSL",
  "key2": "5Pn7QB3YE72WTrBmp8gqaypjC8EL4oYtZp2nnRgVP8NBVa1EQrQjNWysSgP49WVyfp94YyBijMfYMorLhaS6CXWN",
  "key3": "2foo2NNoYLtvMGCNxLPCaZxJScwarxSujdJkW2bKRycLBJWeAvpKBYaQjLWe4oxx8Q4ZavUy5Xc8GM4G1GDhBkAu",
  "key4": "3jJ3A7Mz22xE37L6wfQ8sRukT9qTBo5QXJCxFz1cz8Zw5aJH4quEJtgX23UEbku9RER6eBnpp5iSeGGj77j4RTWd",
  "key5": "2bZfoz5THjRue4BbaRYgXpndaWDZ4ZE2ZL1nBtacojF7ZG25nBVRjwpbEE5bMStRJ1eEGfHni8xwGV6DMtJwa9Qm",
  "key6": "5hJhsaJvMa75NJMa6D2hjdE3WdSYeaW2RMH9CDRvmSYm7QpCJR2gjwD97fewxZ3JiU1aD65NXpDbfSri7HzUsJEf",
  "key7": "5LLxiRHvNWahpXFWzwgMxGTtJWZvtEqfDjJKaWZTmXWGtzQoZw2ZZnqkbS1RciMdExm4xeEuNU6RUWiukpAbaiR7",
  "key8": "3Cpt2ck3dkiuvUwrvydhcpS1i4feqzYyhYz8ksJtxdHkePymnyCCnU1U79nFdbU9env9vQk4R25GE9EQv7EG2oQ2",
  "key9": "2tktgoqRt6poDJnc7ToSKTMAHVpUp6DB3zbXbMYc5QL9FiGG2LCgRP5EKWTAdEikKE2LAbZ4MCK4hMcRsMJFq3rr",
  "key10": "zUmZTStrcTZrUo7vHSgNtYkz99bVZWgJnYx2szu477HrBFcm54mNWzSmXVx1SEAzP6K6FDKAg8PMfPSisJrMBCV",
  "key11": "2TitSk8WjKHd9Aj3Cf6RiKzJHZndbPd3t1TNntYPNTHTgYj5gJNVhngaDM55GzvpFhnb3RSMW1r6HKU6HX3viVAY",
  "key12": "5wwxB1hoZMdxsa15zjwx2sc3LF9Ehabr7f6QeXxjtFB7GPtgEYmphkbvgkn8Au4WFkRRqGV3LGYxQjaDnHmUZW1X",
  "key13": "5GXrt8uXQjCnXbQfjYcGQCcncn1LWTy56TMw8ceWEwUvcmEUrThCNKpdDCBv9bgRzLgKukUsexJVt4gZJ6p6j1zJ",
  "key14": "5sFRAVgkQ48h3UtiNyJkFd65TEHnRt5yUaivsUvQT5gmPjnjv4Je2bRcWLuvWZnJoT6LTozpH4v2oLH8deLTxmPh",
  "key15": "2Uq5HwGumYFJVuQUcHnPZFHUWd6XFm56e9suMTDUVHTWUzY1316p4ZTUKSmfEFEmaNQtuPexZQXn54C8AyfFmNPW",
  "key16": "449Yuucrk8riqZyGdp7nFYJbVZKQNRemWuw7QiuiaDEwci54tx9PWVhnoKAyE6Z7ytoWj8fsDEHLWcgxjW1sVgUt",
  "key17": "2DJwPiJnbLxHAdE4oywRvpCRnohrV2W8Ad2tkLU7HHiTHHfXNsbDSayZuAbpNQyjQm1ijxaxXtYJ8rBaMCEmBbe",
  "key18": "GL2Fi8rWt6uT6n3a7vo7CH5oqYnzWc5TvnyBj3D2hXLVjkerwVRn2GjygPKS6exkZBnjvK7yUHyPGaAkuVD2KKo",
  "key19": "4pu1GjNiJRjRGRbqDc6mqeVnEyodpVE4rc811JCwF1fyLTPgvrnDzmHC9sQaqJDkEqQyGg8629R2xR7q7MxmYRZo",
  "key20": "4u4HdCsD5F7eZMvfpb8wzV1X1ddweJHHPMBK23pXVfDcJFaAHbAWJtZLNMwShjvLRmXA3PpPuuoo3y9CGYk9TdQ6",
  "key21": "3e4y9gfdKMmYSW27yoDA73HGJ4ndMkE7L128qJhUWaRyaK96NnhNNh78S29BHcYubHL59PivYEGsn7BSHAnLrmaL",
  "key22": "4L41Ntif4npAbnvsQjen5uLP99QfaBpLBZ7eCiauFFTDPb98J4ZiVuDBchfS2u44fuwkamXiHt38APCVcuP52FWq",
  "key23": "2RJae8KeueWfNeKYaNmN2LnySML3GnwZiZvJqEvTUn4sATunJuhSxMgbaT8RN6g9VRHTaLq3YRWQus433DzTSucw",
  "key24": "HpPgLcy678EdTBqFGvD8Krxx2CMysxp6qGamG1DsLsaPEktUw7esLdH8PbfM5VgRMdHpLxRAyYzamFzGvSCVzxG",
  "key25": "4gnhnAKFNDq9iUMk2F8GLjX1DYYSDLH41MU29xTU9qmvSfh7y4TAtyh3vPBBcdesApCU9WZHMnndEcJtnbKyCgZB",
  "key26": "2nySBvrCcecQ2ucYZeHYB672Jd4vs1RoW43TCrudiPMM2d9Cvio7HN3biRYhHoHe1NKh1DnYXadi5rPcBRaNBX1t",
  "key27": "ygYkBAG3FRUTSeqxohM97eHagqjnUSdKwUtLSQpSNpySLBMsf8Jg8wvCXCn8bDb6535GhEzcNLtg3zBNvT3o6CA"
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
