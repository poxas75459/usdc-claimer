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
    "3uBsd59UN1fnmLjCAbu5umeEDRgTv2iX1nQUP7NpQxGDYg6UQ58kLpwbur5X9dbLo2T4y31gZmemLoQMVWKRiqkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wuS3jxBALnGPpMSUr4QE7gEoVT4zbUKubeJvd27MDj2h4BqSHJwmCD3JmxJfxLpJhTdoDnQQkQFVs5wV5gNCXD6",
  "key1": "VxGBLhAArJFupbshKACCzWhkrd18zg4RV88zQEP7EYtREM4MKc8ZCj6Dfrqo3iJMX933fduPHWg4VFVxKarqDhg",
  "key2": "XsMRybtQLay2DGGZ5f1By1NFzxC7mcLChNC7UvgYehApT2pN6aC4twoAzNJpetDWcgfGWYjxr47yoqbjzqXFs4A",
  "key3": "3F5aYjWh7zutPfnyRvfT44V3fVG5jkuaXi1gMeTfrmQgGMHZvKocPFvWrV5RNMqETYAJrvX1nJZ3rgjcYoyki4bT",
  "key4": "gPt9WwNvSNwB3iLsFgRVEnpbWSD95Fs7ovWk88pnGGHWedXwv6Sw76cNWYZRoZjZwH1mgB9Sd1m6ogc89c2a258",
  "key5": "22F58FJcdVwm4JfFeuyqkbSS3x2wm6dLTijZBcNVJ3b3f9JMHbiiKx8zWwkzh7XozSG3ZW2MAmtHFHwaRYVmYKqa",
  "key6": "63o49hHA45eUbkjRsVkqKhhLDBSkes5HHPiwb369auKGk7HHCbRsZuxRhA6VsBXvScEb9bvXwyzSC9sm5EG3CCJ9",
  "key7": "5jtG1FG31ypzpge7xNX2nvjVc3Aid5VT3jrjxHTf7oTS1JF8sESSVk3wizzVAo3CPwoKXj4W6ntQk7JMiPECS5K7",
  "key8": "48NpX2Fkm49dN5KCnBnGEMGKAxxjFPUJ4s7oDhM9YzotiHdjtUzqqpip9oHUC56WBqNZasFVv5Rfcta8PvKjRpS6",
  "key9": "4JDstThM9Z4H9QtQ6CZrXCAu2kz5uxQPUoXrnPvwqNyLbx6WL2z6vqxNQtCd9GeFRYEjJfakKjv4eQEd4wX2FgQo",
  "key10": "scTB57vVizZDFfsTT9SDVzs67CMvcfbyu6oqNBXUa47djQTgRHSjwfTw7KSXLEeQ1YMkmKJbxNm4e9dRyF2QyCT",
  "key11": "4XMjbA1dedDVXdHjEnBu9uLAgAjKENB1DK2kQyeXniV4Xjnj3iEyUKkeKXVBnr9NhVLGdXBxyKroYaw3N9Zz9vuZ",
  "key12": "3ainSjsEkw6xHhP5q3vcuswsn9fetXyU9EKLX11k7gH3ynDsLgSxnCpdzZVnUwPG1Pwz4zYrebrCpGSF2hQBfgJT",
  "key13": "54wykeA4pcmVakfiLEhV5PXMhnRGR3NAAzfLAS7vSgVRUgpSpmpH25z3bXenhdxF74EJsuabXTHKwNyQMPGnfMwF",
  "key14": "62d3MpEne15vrqNGmMVA2X7JERdm5gsuRPHXKdpgF1zoquwGw17udZGGv6aUCQSoGKMeKogDxUGY9Emy2zvft8Qj",
  "key15": "tHExHNYZKSybCaJ5TiiQmcYYqC8kekiGhcmBytDcQzJBbKS5hXPmMPG66taoquG1DB3DkKDcH9CLrMBoGwEc4kX",
  "key16": "5FcD6J3z6ygV1zj4oayp187TKegbuRaVbMteQn5xxdetmBagtdDBhhLFadnU71ARx937CYTr9Fd8gEBUG4rFSFYK",
  "key17": "5pUSSLj1SweprEFHeKGWSs4UCNYz6bPQZzwRunGp3CkSYDdKgjiurgSnjDBfXzyeaUjhERT3KKMaxjQ8pgFeQTVa",
  "key18": "5Bk2xHctNZZLfsh8Rdu3k1j6BS3VJ3dDYYDVLtJtM2U58YYXNyMiNkKx6EbL1jj9aYPHPxBCwENNiXJoKMYVxhsz",
  "key19": "4weKnFg2RhAVjqd33UhY7AUpwuf4berE28gjJUzXoe5QJLg5rMoGWsjkN3h1EAkqh7XhMfqPeBDTaTrPCesNs7d7",
  "key20": "4imCKxmZCNyRpUpidGffEnZi1zn4kzvggyC2t5PUTAypAVeWSfAiarwHfDPud7VFMFW6ZdtN1KhrAjQ3vJGiguFo",
  "key21": "4ifXHcr5DAhFFjjQGvYahR8nubMHyn8YJGK51vxrX16W2DpJeHQsE1Jn81rYPZy1K5ztKiFHQnJQ3beHuZe9KfAP",
  "key22": "5eaYHxDhfibLjYdXjqax2cqt1tQP88wwm3hnx9vjYYdkM7mMFBCyEt116d3EWizZRLEbvhYLxgRkL1J5438Evcf3",
  "key23": "ppkbcCpEBhxkEVdtQs1hn8LHR5BYiiYfRGAbQ4xWnSbQ5kmNtuk3HkFJt37Efq6V8d8p6oEJughbWvhmjdEYPPK",
  "key24": "XvpNuH5eMZtGWY1tSAvam3KtFZzNHpdVFR9YgrJcdttktSdAaG7Gy3KwoKRKGh9VHiwSGefhtv34tMphBZULdYu",
  "key25": "4pbp4Xx5Br33z3SvA3sW4m4DXEFKzL55pRF3GVaJ5u57dWCwNW7h6AGuotLF24ru6YJrVn8fTzn4BpAPneNHRyJ1",
  "key26": "5Yyizd64Yz9ipSnuGZFq6zLH5MdzPc2bYvz66Ex3Zpy4Wbsjy25cGJGwpmt5nBXMVaTzEj3L2uWDUYJUSQz2rf4G",
  "key27": "5sZrbs6Ku8prBdbayPweGF4mcGinMGpFN2G226hnN87WG22nnz37houcW8nSHjR93vwAvn7GsUzP4VqTGzfYm8fr",
  "key28": "4EKj7PArq6Lj73khgJ3NtYv9wkcvhhFaLkdfya5hyNQTvDzA7vgSEGnssyEsiYyjDo3p1wr1H8LXsz5rC65K1zSo",
  "key29": "8H5R8x2RUPiAPa1x1VUQ8pQVvEe7nPiE7Tai8k7ytWXy5guDXe2bRE3FeAvgJYJ99hpnxvd6uTbSbqdWEgm61N9",
  "key30": "bRW9hb1zgppYnMCyfSFgUEdYNP57SGwrxL5PS5k8SfKLXoPZ34DsDGYFPTJ87v1TJ9BEwb5n92K8AoeFRnxF5Tb",
  "key31": "4ifdrxyiFhu5uUpxofyUhXSAM3ZSvfwpYQdV6Txm3KcPvnmDFHcQVDRdkrXK3pcC3RB7Md9rRYGXU62eAk6Jqm3T",
  "key32": "3fHBTsfu2pmprVs64ALQcTGSk7u3zj3XGk3tFXb9ze7hPRAyJUFbYqXJrwqHCM6B3LV43TQBCiVwduimLVJhDuqW",
  "key33": "4WgRFfyNtzU4fBG5mkqsqNx3ZtrcicakeWc2jSmJhmHwCqrn8T7ki87fzE65UprQEEaZzETT31z28kz8JCUL7tk1",
  "key34": "Au8Hef6AYjcTd3bhSBfQjR22nsRGDiNN9hxPp7m6Ck1eYCCtiMQGp9PfdwmGuRfWAbuqg3mHxouwAQj4ZUb8Hkg",
  "key35": "225hHtAYv2ZdpWTzkfPUTJmPLMsGZ7jthfKFnPsoh9UWafXdrdoeQ4NryGTHzTosfAbz5EFRQX9UWXYoBnJetAd9",
  "key36": "3CMKmZJypLdiTTveGmwFENVmnpqXY4yZh9pzHkG69j7dQrCj6JhqkDg1nC898t5ue7DsZb5v1ftgKdooBsaoN8YS",
  "key37": "3zia7TNNK64Q7HERwXMgDCFZyE3HU4C7MxFx5qoytzTCTWY6mazFUkesknCwwAkRxgrwy1F3g7CiEwEJ6oJqwnGc",
  "key38": "AgpfZRsejDkvu5LT4iFckvbLEqYc4b21R3mc8xWSyupibmx7hd27zqA3ZrmrzfFaRANiA4HQGVY64wdBHqqKVxx",
  "key39": "54aGpRmAjXXqVVqGXW1HHMtyirug4zbY9SiP2Kmz377pKyGN1jTqbk3VhaYTZQTbV6yzPxbcjZpDTN3XsQciiXDe"
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
