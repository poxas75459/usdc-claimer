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
    "5WmXdbQWGCQmp2vfU7qQU3f6zcTwekeAkQTDHsNyUejcFedDGmSgxn3RjaWguzW3QZYtircTXyjxwppN4sSAuqy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKs3CdNqEkq6KJjiKVVzfY7iX9gBjsgBGJQXrDm5VpmG6Ad9WhsxcgwQmQtLCdSmtWqniDykMJR5z4HxVmQyoxa",
  "key1": "3u4N6ma7K22HtEgPNoiA9eBRchdDiCbgNHF5DetR4DDiL9hwLFnkWDX44ESaG6ssC5XzJSRkjp6gwq55MM6UhyES",
  "key2": "5UMF7Ap1FetUXvYhAFPe4GAzAKMzFMHgjXBvhGeYxbGXbp1fY1pdDut7p3i6yzC34sfDUY6YUoCaA5B8uFWnJ77R",
  "key3": "3i6nosjxx21aBt8LWFz9BJ3rrjPNixHTMaFeqoFvMQu4yYoS5aTe64kk43hajLmwPddKzMYBLaszDQKFbmQi7tqq",
  "key4": "2kSTZ79my2dqrF9by81zJXBQ2TCUhNjLi4GHkvx4vceijEcS4h6SfTezRw7UmwKpQePie8cRg3wJJTUMPXZ2UqRu",
  "key5": "3AWWiRa2uHQmondLJmvmvVCfNAuCKMRjdirLzeA7NtScwfNb88Bk5pau7Kj2YG5LHYYg9wriCWAKLHAZZXeKV8Qo",
  "key6": "2QcXwRCJVAvA6D9Lf13m6ZWH4J9AGQmF4DRWEjp646YV7uzpo1YRpsCo6vnGhezNrF6C2MNGU8CTgNFXu8m8jNsr",
  "key7": "zzycUbxJz8xnBTNsw918YzbApgnyDW7AXjNsTe3NrhhMCB4DsWytpiERTJ7vAiCho41dpjV2xmbZ7LhZb12jz2B",
  "key8": "Z5n5m5tYQSnHF7AM62pZsDvrwtt9et6weso8JozsiVAnGiZnD2cMXViL96HUo3aCb8bpdfnQwnGj7nQUYa7Xz4e",
  "key9": "4NKUeehPADPKnQXiu9KGMJtKKzxtd6LwNFZHcxcUaro8xgNqsQq1bkN7KZ2ZLj76h38g3uBSQsfNb9TL6GVqpDL3",
  "key10": "ANS2o4dubeKPdLKaiiieZr4tk3brYqtSJ9frcW17JrbT1Yibc8ojW1aUoH5GS2cuF34ahYSDLaMypcjsQFpUDMn",
  "key11": "2r1TFix99yahaDesGLJvu7a4ZpuoDwQhEjyuQGaBRW5V9DaiZvpcT4JMrqRSkrb2gSZUwiq3bdkKPC21FHTf5DtJ",
  "key12": "5mYUZbrFro8anrnZU4j3GjmyFMKhWsQ14MrhWxpswtNsAv1osh4rTNi4ioDpxfiyxasunVSTEwxXvhAA32x62HUP",
  "key13": "5tC22QJmzHA861qcagELQjZ4BPioqmKznyofPT5er9j4pE8Q6wPMZqARMPh7shkdgJsTQqM8u7kBX8JziEJhPxbC",
  "key14": "WQbjMWQhQraYucbe9bgUVDr4QuogioSN6xyk6m3YkfjB3wDRAH5mEbVHYYZ9nmT3d9amCCZ9uCCSJs9Max3iQTx",
  "key15": "57wCpr4m3n979zYcSR1irs5w69rudJT3MWf5K7nKeTBhP4W1JGTToAfp1bHfT3y6GEkVPJG3zVQFsXbJA9YzJLW8",
  "key16": "g7RPjJbakpLQC5ayJjSUfcPwaKWkXdhftZdDLc86444Wq38kkcbxAU2wVJ7ZAfAgoFTnqUTqgJYqcQwe1pLYfWQ",
  "key17": "5V8sqMmqLLtvAWjwTPitFbXGrJa1DWpnwFJDiforcYjmGuLyvF4mhXAXU6TPYkJ1B1zm1nF9HAkRrUb6BPL621ad",
  "key18": "3HGuRntA3CLGVyR55ak7irT1Cbv9i9uM7X62wMXTTfDbSptZi3mmBsBxd1rziq7FHrpx7FacNwXnDWC6FydgR5y3",
  "key19": "2RToekRorQikRowaUvKYCEB6kq9xmNSQsb84BwC3cpURGGe3G5du8q3RrJ8f3xKFTLtTvWvsEnq4gcwa6m6YyPbG",
  "key20": "4zqS47WpiCtZPqrf4ceKKy2iBfUNTDmBRKE9knipSwkDSruuR73kvWHGtayPU5K5BXsaVkHQnoRwmbrTdf5oFbx3",
  "key21": "4ziAhZYCtfre4VVFhw15RYmFBsneefKAZGvmCP8arR7ZrsPiBJaw9GUBT69qqRZY35pQoF1o1omDfEtjQFpwgL9K",
  "key22": "48o155n4TVvhcxMULZ2uJmn9EU5K4TRkKWw6hZs6LrKrQ3GEdPQZ4PTg3VoKKvNw341RZzmUKqhkGCXZkde8VZTp",
  "key23": "52SLzegGhjkXiK1Zo9SJkn2XZyD7FpxoSx7aWss67V1LhzKF2yz8kbyeEYk8uFi4aY7sNuacbymZm21nVK9yJktt",
  "key24": "3f3JyZsnHb5nWa3x8bsXNtbFd5BiXyw4GZtkmVbUgpzXqk3Fpep34u8rcLrfEuJHYZs7coW3STjjXLoLvbq4bJqh",
  "key25": "4BonGRG4wx7cAx8W6TNU9ev6qjNyj473RwKckDpUhi3aSFRq361wSXDFKNJmVgb8UGoC9UtvR3tgWwo56zBMK1Hx",
  "key26": "4WtPrgjoToyyu25gEuGwr6KiX2SUBXuwQNoMoqeBo9J9Mzadbo5bKA2RNpxEJ1rfQTQJW6y9K7pw1aEFEkqubRNQ",
  "key27": "23fTgKAjRb1qafMCg1yc12M6MBwApqd5ofWnSnmj1nM5zpAPVXyRAqzdMk6YSENPMTodq9fxgnWmvAFky1Fzdqg9",
  "key28": "5Q1WYajgPmENr3HaJMENfHsgNqWbdXzhzgMgnXbxdjhyyYQrmTut3FG545FRmPAes8j7JmWYSQ56V5RxwYvt3S1W",
  "key29": "vL2PTsjUqZdquwKNhHmcYrJDSYspoLjGovWaT6YLTZWS3UYe2JLxYGYfZ4TgYbw3E2FyrK2KWMwEpKq8eXjzwMa",
  "key30": "3xhd3fyLEfLvq4hvSzmZmDocLYFPMF12YP3L9TgxRKaDo7zDunZSnUjkWuTTwDAhSoQEGkt7zdGD8neV36Wdkbtb",
  "key31": "5Hf7LXuKEPmazyUx6vo51zJuoj7Mq65gYzoHm94GqG17gz2AqUWEb5Sj32D1hCm1BEP67FZaU3g29uJ9dXhyH5qS",
  "key32": "63WYJuiugAeVH9MERz3HiNTpBKaMt2sTD5ZDqDTNXL8MRFDbjyYrgN7eNKo2eWshWD6tTq7jzfP9nneBbFWbhH8P",
  "key33": "5hjN5gWjcrUWWceE4RPFuxkTHQ8nogFpURhYETknEWD1H7xf8EtFjnWy1fYWBSYVhQ44Tu27qtPXaVF9dHx1uE24",
  "key34": "a3SXH9Ttk9vwRWrG9enbFsoqZWju1J8bin7wKHiu1RS8EaekNqxCsx5dvkuFv67bw6yZUe9wY1GP2oqJfWWA8U4",
  "key35": "teFL7qNgKCZrN2L5Y8V2ZYXYGFz9Hx7jBbhSrU4wmb86cJX2mvg1sgEz4qgQcFqBr6uc4GtA75boFYwnL4qUnNG",
  "key36": "61jhx3FWRrUL3qzcHicTFtp88SXrU9tjC2xTWfxyX74qgnqnrtpRjaQaghuAxWqmPK8Yroa4dA96tpTZvpM4k35r",
  "key37": "37ZL9v64R3dh19g7BAD8Nyyan44GXakxBW2igtx9WJAUNY4Bg1CfGyqdCKK2ECr1GrdjHNcNrM3AzQppY1AudLFj",
  "key38": "4ge6gHr5GwbtLGV9YeAEmGKs6bRDB3eucs7e9k6i5xXRLESuEpZdBASzaJ2kBVq3Xyw6SC27UHVkNW1NzSzMqaLe",
  "key39": "4i7cyAKVco56tNMaPq5Gh2bop1vCEekeXnsgfbbDDCWLdH14QvHabL1VswZBeoubCpPpGdTDaAZ5JmYe9aDimepA",
  "key40": "4tDkQLTyHCnoxqfZnCKZu8sEBFipc7dEzEve7YJ1H3ApJJpqBofSEV95TXwiJtJoXDCMJLauH2fyVhCVeRLbUCEa"
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
