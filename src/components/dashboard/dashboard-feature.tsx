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
    "25yvy521JnBdsrGi5aNaZFABe3QAW55jxs4BqZN67pEyiQkzVUyV825yZhXBZNE9t5wgv7JkR6qvu4diCSkExLud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cUt2RmordhyJyXHrRBhjvooeLwudjvge8a7Z7eFVuY2jZDQ3jgPP9XoUbieGpVjJUxTwFoiMMJ2Xwh5Kb2miByp",
  "key1": "2PADr4Ca9UjoDeGNP2zfCBhwKsiaGHncGptztYLMnX7J7M47K4FLAwMWzZgxFTMcMCfGBEpdpAz54aRWnyff4j9B",
  "key2": "2NfWGB6vLHLCrCh5hyMqvb9XWeBGgWEtykJi8AS9TvjzFvMMwMjoSPMbzsUGfLvA396B32yHMFJQfvnyZ3rTgoGh",
  "key3": "2iLREWvs6ZgKVNDW9LL13CzPN8u1oVGtB6ea1gXtC31LBXfZFtc7BgMwY7C994oQQKmppLJ4B2Ke7HRtDJ6b5q3a",
  "key4": "oeuAd6LAtYnxprbobkg6onG88HMaJYA5k9LUWZEdDZgnxaU38Adfwyii621shVFqe3tQYWVUFD8eLs4CgDBuWMw",
  "key5": "5AMBtPbM5sbSrzFUvdonH11NGyx2C1jfaoMg762Lo39hqRymS7oYJEX497BjR2GZySAb1b1VhGycTkX9h4pC1CPJ",
  "key6": "5tzttc8EbB42rkEXKEktxA1VCfYrcdaVcSC8GLXTCfLzMEzg5gV6rBu7z2WqCSLg9HTPPPX5jdx1mcpDudLv1Rjh",
  "key7": "4Mf2jihQ5Wkozkp7TgZWeSuaKoDtWGhG27afXc6xcrqqrK2Yq9Yaw8wrZJcoPBXrFDapfdCwYpgXk4aP8VRTCh3L",
  "key8": "47JAJeRDZsqom13RqR6XjARCoUoSZQcLSDTJTLmsPUADYsJ11Y31QT6PhnmnShWSoBxKTS9TYDYLhPsLguaLBgag",
  "key9": "2yzAR1dmmqBYemC61JKc5fVNUpU6cNm75JDoMEhwqAaXirs85mTPaJzfQ3SzXLN9mHBctwPw6JJKYDLXyAy1yhBS",
  "key10": "4A7bjHXEomhwEfJuDqcbjMEjWJw7aX6HBgi1aLcyvqfUxkXih7wTW2wzub1kAF8qunS9KqpJDvybGfihPJ9bBPwn",
  "key11": "4jMfQgppq9gWKGpMAdAqcHer3hCD5yb2fPF925nyJ8LUSjS9qpNSp83ABf7MkUnbnj2SuSxibcmMUy3qDaGPEZiv",
  "key12": "3KMDiKmmv2vU8QfDtT9jgsNFQ4wjV4UgsYRhvErww4jbxr8BQwNTedMYw3uMaZ2cUxejt1WbUGNSnyKDWTUDoBCf",
  "key13": "3Xu1Bjzh8bzLsNPAPpijJLumdRNgcbeEJ7xXijLSnTFGCwcFw6FsdXM1ZdkxVYtLH8nCgYsBZzdVJyuJCQPcvzxY",
  "key14": "esTf5jJ8imi4RXTiKZ2Gas9fSBdY6hdeGZyL3PWLzCLmT89XYHsBAJip6yUwEo29ftcTXMYN5ESrwkz8PsA8fjo",
  "key15": "4Yt9cZR6vD4DPJ6v982VoAEveE2FtdJ7Gaw2FctyxEPvnVQH4FaxbaU1x37KG3WFyyC7oCFKxRUedQHSVmYFpovi",
  "key16": "4d4rRGXQL8mqUMuJCTfSbtMhe4U7PZadk5faPTt5BDABbtkWX8svoBkDbdqpnXGMnYBq7nmKmS7XY9gSNwUVdF6K",
  "key17": "5gZNuYK6K48RAc5QJLt1s7i6AWZRVJ2rEFeC9Uf7NxeMsSrWJyEr2L5SzsMpgKcnZ9WmkYzEEGiZcwztYNNohXmu",
  "key18": "3AXmRPLN2jKcTuCmJJxR3zFBjKdvcNeLUTwt3FmGRgaftKJ9FJTsPkvReigCpn5baoP6rQeAT4GF5Z8eBEmT4XiY",
  "key19": "51uGa9hENKEuy9bxbcNJA8WE7LAoTd7ujpoSniLADKa71xXw8CtMVryXSJhk2kgkXN4PFsdPE54Mn9YGTD5JxvXh",
  "key20": "2cZjWoYgDswwTgGzo1gyrBA94BziNVMAZttzs9z1yNnbahdGCiFvx4HeH6EchvHDpSovZjgDfeCB1GdDjX6HiTjJ",
  "key21": "2mUH24PkmziufUorXrvkR46tc5CnUegMkZMFyB5eFMY2xGCEgkk6FS9aeFSoR6E3qg7YFay9r5boTYX2Muw9WURY",
  "key22": "4VQKkLiaMM4dxaSKhawHcEtgrsVJndh5B7FyvibpZT2k879FBkkok5s5aZN4Xj8XGMz4VQeDJyBUMMgS93n7zfge",
  "key23": "DXb8BqZ8qciHt1vvtY4aL43iS2ybWB9ZJRuKccq7t9yNcRuGzwgxUU78R552BFofAg8x8ug2VRSqgzBgXSRAibd",
  "key24": "3gZ9Eppvgb98PwuBf4TjMbTou4vEt6fs2mBH1FDzcKssfvJmhqpn8eBPczM9rJXRDEZb3ao9YRYQAxVsALYMM41w",
  "key25": "5nD55e1MTZXUewCXiUVsuNkyhXcGSuK2YCMxLd5Wu2kuHFui1QbDdxAMaSMXLkMh8ZUcofU1trN3GZQyaacV7XqC",
  "key26": "4nB6H71DAvf1ezrDT4BuKXgFUgF1tXYBQ5v6MDo74ynV65VW94LKXpcp7EfJUdwhU7c8t4KPxJtDLgjfmXjh81kn",
  "key27": "44a2tAFWYHSiTsqzbNsJgRm4Ct6BzzPTd7XPy2Fk7MuHr7gi24hF8TCQtbZcYkbbZZFZNZMZnskrjfmSe7empiiV",
  "key28": "5Vu8Et97bdwwiTQaWuHafyoZkRi8ogCQL1pTWzZ5SmsCNRLa3KHegms9topqmGyYmKqfrjQLKWWsE44h5LJaKEj5",
  "key29": "5zicvDuzVHfMz9hoFkBBJxp5RuKyu6Go84aDxgaBHpS8uL2Cg128Ej2gquejwRACWA32K4CGLiXLRntRM6NZT2Zx",
  "key30": "5f5rYJDKraTY1jDPtnuok3kpea15MyQdFtHV9yx1RoHpUYrFYSMAy9vVDJPeA6C9kR4ckqetJTYyraxLHS11dFGR",
  "key31": "i8oo2pcMvkPdLExiGZDVbFWzQqH5hiaJzScuVeSsuSsBX4d6xezeme4GdoQx9LcQjRAxc2GEfjqgbARqihqgzFG",
  "key32": "5gEABEoJpi97UG34rTx6iCDVK5YZfuN8kU29gunGJ5REar4NKWGZU79k5TUDBHKsYcqrLtUuitBBfT1sjbbQkXwf",
  "key33": "2JrzWaSuTmnxhi7eHzo65hBe3bNR6V2eBnydJQHGkroKaCLwHJSU5odw7umNE9AapzB77pBJcNqAotzhVNEbMa7j",
  "key34": "28maMG6PdgAuL4HuHwFx53AoSHN7zYHYgmhcuvNsbjvLYcyWyEQuckufUpYcoFHXaHnmBX8VqLkKkZfpXHnWS8eR",
  "key35": "3MugVVmexg8HSC93xA9NqN9EnLcEwxFsu2YcnA99aLASb1EnwZefhyXLwLiNSWSZ8nhousreHTFd43hSrRBbt3Ym",
  "key36": "2Fg8MW6TdmEdfZAkSMpYjLhH9b6WfVWA5ZHFw6tBZg3jKcj3Yw29owAsSqUDqm6QYCEdKnBEYMzVQUUJzxhxKRFS",
  "key37": "2Ky8tL2uyXpfXyKLykhpnpKLFwVSv8kgKzgYVotFi7jab3AcLXbzHtxgvcGKgYGSP34kZ6WAiksEAdo5VGxGWfXo",
  "key38": "bac9y2i9sg5CveXpQm9SmGSaEAtQXhdeWkshe8FNNykzzgpc3gmW9fTndkbEfz2MKPG2Nvh5c1gpK4XixW4gmkt",
  "key39": "2cAujKJ3FP4iLwREAsL4YhsfEb7nbwKAEXKdR5JrBUcbQB1po9riPKKfu21rCibfFNoNMhfFtULa8i6CFF3fpdiV"
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
