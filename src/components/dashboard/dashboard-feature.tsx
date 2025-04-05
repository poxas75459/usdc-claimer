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
    "CRjqRUAbPtMhVUd42SFAA7uxpEe1DqFdbCyWhhB2AWMPtzfGWWgvARdiY6vw9nZe9Fn3gLuBaLRPQjkuTHAGdST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j76VnbX8f28AcVfJ4qfxo4p3L3DqaBA4AK6bPbyfRgFzQX6PBBVPFM9sgqMZxtVuJrMTacB24Kfsdd7B7zGsFMr",
  "key1": "4sp9gzWXFwBAkkgGeMmAJmNzGCdSAMQdRtRbK28DxCf5zVYyWFvhMXFWzFATFnLM6DFkyk5PL2N7b5WqjLRV5Rwg",
  "key2": "38rfU8f3qfxTH4vSAevkvkJdt7ApomdLzQmqNepTAQ9V3iPvWDbEwjqqThtiHSyt6GqZAs4fnEXez463pzDYTKoB",
  "key3": "5NtYbbT1ozpJVwuDRVHZV8teDqAEAVYFZF1R87RFu9QBwfuvEyd9DsWZUTkSd3EDZ1L1CHuYTGHP1isrAuKvxRBK",
  "key4": "3TF36rzBqLr7HhUPt7Vj35NG2tajJ3vDKQkQ4NDQxDTV2GJSVpcZXbWunYaWjjPkrPZsknamEd4zaKTBjK83AkpD",
  "key5": "N9RWphq1kr9wHyAA3DNQf6ozpPDmKXyNkAuvbMHXULbyTPobAqb4hrkNmn65cU5kd6V9qc9ifLmGEvjJHB9UfaK",
  "key6": "4ecrWkcfaZLnuRygdAnisqXvFwSPAG7i2qEBsf7DVu4WpYkAoErRQUUyZM3cNCh6TqqjAxUYZkDMKZPr1hTdMJhs",
  "key7": "3dFtMH9aSnDM2stqirPgP6BPXizJzwAUpbpKeaX9gf1Na867qHpcxXfW6xBLRVD2B5qkpFshs4KRtukFqnuchtks",
  "key8": "54CdviyySYYp7uWc6hjVqgn5HyTyxYEHLevsQ1PvMf5E6j8k13bWrp9vXwU2qhyV5DwbcGEhqvzvvSof4AJS6sib",
  "key9": "SNw1Dk6wGeKwsyyrQCY7B1M7qFdCCLSvL1Rn4K5tSdM3BNtRU252uP7yboLAMF6ehNjqmXjMkTLvAAtzjQ4rJua",
  "key10": "5tyFPcoozUCrVbx12UgQhmhY2tw45D6T6KjasDmpc7qKjFSQTa5tVurh8FfXSSw9wFgvJbrGXtV7Q7n8VTLTrNLa",
  "key11": "5fojn9EjoCViqxNyQmfkQRWQijgaVn3EdSVKAJDx64mWCkveN3NwyzK8P5hgNjHqSvgh3DZ2yinGaVgpVKbYQ3BH",
  "key12": "5SyXybLoWfpiAb3nB9BT5PHEQZHPvg3ozJN7gfDUPrWvsZJZfZef8yEctngHPo9nGdHtYNjgARxfvT5PqXdcuvVu",
  "key13": "HcZzMrjgMeikRCMEAj5iGzrxyAdGFoZLcGkZnShwmXyT5dSP9z3vR3rN3bEWqo87d2ytVegHvxsf1Gvtc3aKhEr",
  "key14": "4bRprrYEkR2TbMbQj5GeoYAFTtNDxtDZ1oAadrU22LaZ5yUTcNqpG1hx2YULbYDaJqfwRgBEExEDgJMRur3pTzQo",
  "key15": "5xPSreNXK6Z5eUzuQKZqJtBAAji5Kfw5CkNL6vwvBN4uky4B2ohof6jq2hiP8kdKGntm5kx9qn3p9QBzRQenv6Xy",
  "key16": "u6XmJ2vTjLhSHz326YLLTjgTG3TvzQRQBjApXPDfRBWzcPwzRppYGs5u9csrcfissdso6684hjY1PRxXoJyBJBa",
  "key17": "5ALWLE87Q5E2gRxKWYY83ppdsz9caPdEh8Gm2RCpN96AyuVJAfsB31W81kP77ySyaq4jUgdvYMz6FK1coo4sWM7K",
  "key18": "5gV52NWSZ5dakBZ4KTZqiLHrhA5rM1ymWqATCvxmuRwMpQEbzzJLpvKK7jYKm7xUbVTNsfDZWQwxoPZSocrDXGpt",
  "key19": "39T7Pe6dyZM5s1H1mb2caZAHZf71DUaoPKt1rmP2QqzuUhTtsg1KFtwx9Q7mTDeFUYMJx3N5YRAZkeYnyHR8SMYF",
  "key20": "2LbbJoMiN379PeCoRw9jJwJmqYaBpWUTdDyJ5v5umyseZu5yKVTPkDgyvM31H2pJj5tf8AkkSGC3WF67vMPBUdjo",
  "key21": "2GAinrMPs8xuVgWhcPRBnpUc3mWNBLn8fB3ppa62Jx77HYcLvwUFh3PFtRkJN9qxr9tWzpfJTE7VwxfkQSmA5VLE",
  "key22": "4V38zWQW5ycyBjmuhJVCrscLwbqt67MpfCasmTNABbQPDG7j6GwUaikzUd8V8DMZ13LgB4ceGVNpmwLLcChNrfHu",
  "key23": "41N4bx8Exf4uFcLTrBo1Htaoe4p4aWKtovM9J6PuXPjAx4zwna365aqVBhgjWpEAP2Zcv2qPpZqqsGVvdxrPgQ5n",
  "key24": "56fyHDckwrDReNJgncHW1LNTiNSsD4BajXGKECt4cfrCELG3z6TamB6fxkAMAbByicDErkSNnqCxnT43mu5d4Qf8",
  "key25": "y8ujG1ppQMv9Wdj2PfWko8wswi1gdNYLnctWkEHq43wvD8x5XMmA2meq1wCybEU5sp7xz51fev8V78kEawreKA2",
  "key26": "2vnvgEtpXwrTDwF1ub8nqi6YymHCuGUoE7npNC8HP5C9WgTs2Xd34Yg3oMrwSQGMkKkGySmgkhUj1ocWdPzTV9jG",
  "key27": "G4NmKmTi8kw6jK996xz5iPMzZVUtuWEnn8v7SGC85SH9YvJ7GJ9tiLQqoHoHR4pJLuhhGo293Z8XzAeo1Eu3zHc",
  "key28": "5vDs7cBcRfdHPENY9di46vcA6PUnsZvzSkjv6r51TgGEsXUs2tyEheewpfgGzvQjdFaaccHeNZuHZnzmVMLN7ACa",
  "key29": "RCJzELA4sUDosk3yj41oj6Zhaz74AqCiffNkuPL2EC1wkN2tVk2AZinnC7TAx4j9qH3u4935uZ9EduVdG9yqtVn",
  "key30": "4ncYocHJcYfa8vHoiS87KtovtNJYAQsbZYL9BFXgrfiBKxk44jNyCpcqSG8UZ5UJYkndtvoYtk3u2b7cKiyY1W4i",
  "key31": "2L85gAnWdG7Wsn6UXnUgL9uQpqnVpfT2knaVgUpFWnSX6Zrb1MGfxPhWrjFdMe3vzENZGTVuKfSAYYjoE1HYoyVL",
  "key32": "3otW3PucsVcXSQK17iCJzGWSzxs7EjjiGYBiMaRda4gtUceXaYbLkJ1paEZbiUYMUK6zAH9LXJAmB25hvati6YiQ",
  "key33": "26kYHAJJ1mwfTSdfXwPxqdMnyEGkws3b5evDknhrLSFFA3nnFY7gCeqKXMnLZy6UYcDRCrbVpy5qxu9cMZHweBhQ",
  "key34": "5tDBb53zb5TEiiGwXNf6fdvvsxBAU9FnboMSHQGoMsWXr7zFMvXsTV6ZvYopk7TjJMEwAijDTZCkLvTjcKPtuX9F",
  "key35": "66G8eTDdVN3KpjihtVWPhUYQkmBtmk8jQWyzJ4p9EMSKP5dALHYqG87D1KZ6cbGqkWQttQQ79tAM83LkS2RmpvtM",
  "key36": "4D33kHWGhguXvfa4EhhboBHdvP4kJTEDLpnDH17bjHWHao75CbZGG8AnqTgsUArjMUWDo33DFCQRTDH4BCRipJbS",
  "key37": "4saPKaoojdsoGNjcvQBiLrpj2f2tcTKw8fgECpJqiph4CYwYrZL1bwEfMK2VYroeb7fYqKJjFDDLwYpeovgQa7KH",
  "key38": "xVyybUH3DGztKYqNLFTiKvFj2bL19gbVKqneVC66W9Tc7iqEhFocjuZzLQK9pgm6j6PmqM64BoYKmrMwMjPGSmg",
  "key39": "5vt7Gce61hiX6aCGeqeV6uCor1ZUPM2hkrPSGmBf5ZPMMhH2kkqmJwGfWM5gsJ6Qkx6rYCPbttd2oEBh3Z9v5HpC",
  "key40": "2EZsrmNdr8AThS8MwBhHvDEYAZTS6koApqGXZmZhnqpYZvt5U83B426XEi7tEvp6jzAN5C6gZVRQCKKPomjr3tah",
  "key41": "5S7eZFNimEPpxBCXYYgq4eLkYtUbQcWy6T1ZD2ePksTozZETJjf1UyZFt1wjiZn4e98srrnMhfmounUNxFuw18bi",
  "key42": "5anU8xVe9myhjdgaMWQ1aCotsjSLU8VMuC3XU8SmqozXTNMLu5nLC8Bd3nKcmFYgfR2f9WKGmm3Qz1YVbF9yGDzn"
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
