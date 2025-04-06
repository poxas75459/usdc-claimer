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
    "psBHNMX9vEszV9ghVaGxGcF58oSmCsFD74XDS23dc9S7z2zsQSBgVYTZ6DjfPyx9qCZ2WahiTEaRt5Gxxo4ee6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57qofQ7jFk2aEP6j72Y57p1r2wra6B9Xh4XRvqHyzGuGfi8vGHxK3hhKAYZPWv9qop4n2nA3vWJ2qTRsqLfB85pY",
  "key1": "2XRrPoiaC7ayC4XM9oEZAuUWGkNxe45TL7KFeF6GALgg36BobkJnX4QrJtMeS7FyL89WQaD6ERFZb8kKLZmJoGQm",
  "key2": "2k5dRZUt7E1EpNGH7zzUmq4FUxXkmHLE5xX4wiD6CFoycBZ3cZ5z7sqxTwxwi5iyJ9Zyd74JN9h2eoXrKY9ktDXS",
  "key3": "WMWs2BzpS5MHqAq7uuyLFVwqCQFsKLv3AGbifxVrfe6JXNK7P9Un8QAFpzVRKTwEoeXZJUdVNP4geZeda23U5As",
  "key4": "4vJS67dupMQRnz7MAhjLF1oSuNCozQMmLXPPtDDQiFXdizU9LgAvscKPK5iUtzxqWk3TUVcfDcTjB57afmEwZ6gG",
  "key5": "5eDYx7NKkEr4J7F8RsCVAcZWzRBuqn8YtPaHDbfQSKSrgPszVNT8RxMTid1bFVr11Y7Zxi5s4qV9755JxfZNuxmZ",
  "key6": "4Cy4raeTFRJc72bUKRx2RWoEcMAi74MzePoNLas1ZSkzRCBaGjfVHxbZKcMJaZMUsDoGyz9egQmeUFHBigTR9J1D",
  "key7": "474HdecY9r3VVdZXrhRaZ3w9shnxpmT7PRo4qdZrGq6TQX9vmFvmWVR8jmzvCqcmQzFEHKzdAuujfRVwJRibhsRx",
  "key8": "3moMHRJeDyTmEJsHtuWQhdC5YpvyFoSRzjBFc1XFRpnTFgAC8VqJfEQaEyPcxaFaFcATXQ2J5SZmpQMkLFZHYWyd",
  "key9": "3KqhivqnJne9cmbFKr3LzkAXvHyZ6Hpwc5r6vhtcSz6xpUbf1vYykutVMwX1owzkVatiSAmGqnJqTty4MDcQdzUs",
  "key10": "4FVeQXr7b7humhZDPBMHwQf2eZvrZjxeLgh8uC3dVRfyH7gCiAHqCnLdkrgqLN1TBdBvXRV9486MM1joLc8HzTY7",
  "key11": "46RbK5LGvDe6DgdxnDe6dPwHm6DN2LufAahjLkcWrJtUB1NAQcdM2LHQAK2dagcZXnX4dWm76kFg36ztT1nDpb3U",
  "key12": "4MAWi6ruH5uC2QbLfopYWKKNyzTJ81e6DEU26dpsaYAbbgu2T2hXfL5rSPKrABnaXm6z1uNFbkRWJaouwNiSymVm",
  "key13": "5ksyVLvxpKNK4QdTPNjFfzYoT1vkR8Jrwu2WA4jY63VakaTThNfeqLMSjCCWym1zyCAcytsji54pCW4ujJ4nkYgy",
  "key14": "5cL9rR9Y73zxCxZGqtA2RBQ9AKuXhcCGeKL867kzoKrJLj8LfbBF6GVjn8eLipMVmxEH5LBTFgsxKACSkTYg3VdJ",
  "key15": "m1FrCf6qaB31cJLtGpvSLGgJgMLchemG2CiNVuJ8zdJUvM5Xt4348TbLXK2CoToYFDZxY6tD2dhRN4Ec7XLEzeU",
  "key16": "2myF7PSJ989NW9vLVW7xJeVVNAvm3eYgH9faMXH9DtEtFn7mUjAUsuNJHitDVtg4UdJxjMoyveaAQKSAnh6NFBXK",
  "key17": "3VdCdvCYzbLr1YqFUjD73qpDxnPkeX6qHh1wtPvcrpeb5WKxde8gPdgGYN52oeuF498dUr7xDHMzsM8LHdcBDcuG",
  "key18": "2wZv3RxizTK2Xc8JSWzbf7xEQSSnPQ4Lo1qgAtWxCZjANwDiiVdEfcoVhGeobYDTBVrmgs1MTw9omzeaGT3RFA95",
  "key19": "WeQZpwSGtdyHLbq5pJTuPD845rCLAuXjtgJWWUoJjrX1D1kSE7AfBtMboJJCdXgP1B3MVqptPFpKnowcn1rTgTp",
  "key20": "3j3PQp3UyV3WEFLZtfKWnqvZELXin69GC98mgKtiWoWKpgr95NsNjaRV2K9CzRLKYpVGojpc9fJpBcvFjWi9L4jw",
  "key21": "25JxvGFRFrXF4FddVZ5cx82rzQPk8Sc6F2jZNexEhxPT2ZguyBHnkdy3xXpULWAsmQuP5oqMTiyVunBxByEtEocb",
  "key22": "37YtKbMFstkRgdbV9PWYPdCWiUR4urxbFkUVocvGFcLqvL8TaNZkmf2buCo3haGAN7gXqsM1Rnne3voc856kpusV",
  "key23": "4c85vBwT6F4nTRoSV3rDTB6QrzXnR1REzypmMqTqot1NByPWynoPAYuUHb5xjQqe2RUghMN3nFoQrRnbYEim79ya",
  "key24": "23Rcvacp2FjJuV1ysGscRwJQfstjAbUFypEvUf4mEPmAwzzuCiysjP8PzHgEp1mb8teCPH15ZsA36udMbRjk87Wg",
  "key25": "4roJG57dj5iFNMG1t8WQnRgr1hzSNML18cNr7Ma1xz5AJKMFiAZZHN6gk4NrxtNeGTK4fjWTxUrNneJHKwWEuaaQ",
  "key26": "ALrWh5t7HqKHBvpLj5FeNa9UJbgmngsMGhd4PogiNJW39iWpw7e8bvqn8pLe1e2S1yWy8a7V2YrzMdRwMZ3FPq6",
  "key27": "swUi84N4TdqWvJtv4VSNGKoybtXfhjx63E74JFMzVCP4PueHJK6R59n6QUCe3rMMsBsm2Ymu4PB8Y4r4BEKGY5Y",
  "key28": "5oAeVbUPhjZKsTDLpbwxdyJVxwHdrTEpgfoAbSRdSJpR2eF1Qk3BXqeShxkwqH9m9Kz7ck5bQsnf1kZioriU16Hg",
  "key29": "3qionFWV4fkHKWt83JaPuR5VVKWUmbHxzB36o4oiXKgMjmuB9ub8WZfAAW136uFm3ZTJChEK5z8t9LPBbqFkU8EU",
  "key30": "4EpYhgm39Yu4dJB3JLkRzVqnLq4ijcabCX3didZLx1dFexAbMKijAG6tR8D6BoPYe5ASpSPmb59FbxhW3J5iM2Gb",
  "key31": "4E6tquakaWyzBt9931g2Rxuu7CbWf5QcSCnqufZHJgopfn812scVYk5NoZS9NTyRgZU7aUWGCWNvLJ4wLSLqpWr9",
  "key32": "5bDQMPiPFdT6zeoKYJFfDLzmerCf4mn83j2x4RptdABDQy4TPqiMwC9bmGXYGz5Dq8qcWBe5UFPvDzuDUCxPakED",
  "key33": "5pUTLX1fqX8wbJ6qg2G871PsRNcEywTnA8eAJT4azR2K5wvZJHYxeB4xi9mbHwTauE5jE5AgzzK8YANnf6MhHSrw",
  "key34": "YTEHjwC7LuAgJVNL84oGAbkbgrt3zKexu1azevQ1nBS7nqVAdgW2gY32MhJmTLeKoSu3kuKUKoBeXwQ1ys8jorS",
  "key35": "4u63Zs1mRbQBFYWVUgpFFVqJY3VsCTs8pbUYCKWyELYcJ21hBXfM7XLSVCHgtyTeuEMMWMPNP7f3fUog1EfGCHXa",
  "key36": "55UFGGnB5tgD3FxN8TPL4kSe1YmNiC31ZqUTTNoGxQ5nx7vv2VYejx4JR5R7g8ZakpQ4MRnsbCuN2pszxweK8age",
  "key37": "2jThrzWestJAy8tgH4eUhG8EpDfsocgfNyzDjVnMGPVCxzPrVSbpkdEFEKPstgGCRKCa6fArnqJyEkAkaKSjLUie",
  "key38": "zvwgdG86yRtfTj4axTvfUKb79i1qBYVEHnY3rRR8rNmfGyT3ch6PkMUxb8o2STcspvwdEMUg1Fo6aF12VpEcuh9",
  "key39": "TXCdr3Vgbz59omdW9TyY3vZHFH4BLT8KKFA8v2uGiDJFYEdv7DELSQwNcgu1NNZN7gQ2QcfUocAtWpwfEabMsfV",
  "key40": "W47zdP9J8YS5cMcPNWCg7NsJGfxHdRvncDA1gZjoHkh5Yzz3DUn2ZmxuNNppmEESLHw8pLcfG2eZ6sFyJzy5HP5",
  "key41": "3VfyMnD3MfwxroyvHUwVZ3Qu73to7z9YbiVoRdKXxRGjL5aTmHhfkDBLbC9Z1ewUN73q2VUZPeBtBXe8M6u2oTZD",
  "key42": "3pn2QDBJ3NpjkgeGWA2cQ918SFFo7Ky9FXPKU2EKALCz9aGZ3M7Ev75GKmCFgMm5fzi6pXH83hjwy4jRzbAbbe9H",
  "key43": "5nCpSZGmC22YL1kfevLuNRNGgVCzND9W3UwmazVmXFbrKg1PLoq7H5vtcSHmSPP2Pi8kx6z2yVZjB3VLpkizDmBP",
  "key44": "bAtYxESXh53tMPrFDLftuzVuHreRxUMcZpq8cWRGp12SS2vWi2BZoDs77APj8y5Skq8msjE3g26kK4AY6G7hzxp"
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
