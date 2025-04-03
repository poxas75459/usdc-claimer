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
    "47TyyJ1BPDe9HjcUzFy1X6uHeN5ACev8rDeHqCdwviwNsiXCPncnmQUUBiD9sxc8qzYmhRCAvtPVeQoKTqPDfzJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kpth7sKAGMuASLnCQX4hiQAeJEMrWrHxAzEeMev9tSJdE7pFXiwmryixd1mYAeGmiHQV6BS2w4PEGphUQaYrjuk",
  "key1": "4gvocG6urKJV3KbNLAR48rA2FfzQM3cfQZhokamR4U37CUur6m1pSQHkBg1M6H2xSKLA7JoyMnm2ATTFiDFfRMCu",
  "key2": "4k1JVf8PoarV9f3rwZHZvTxXkRpCoK5nYcVcsx6xw6nF4h6WaDL5fgexJ1zDjuMveYVvxaqeEeoqzVp9RUXmDHce",
  "key3": "4oCFFsnKUn5vUKGUcoBxUZfyiuLpwLfhRUC7KgtAfA2rqP919u8qHrKoShbQD4o1Jz14tivdRz3uHxCp3k7ujgRW",
  "key4": "5xoxV4UgDPTnqBtREwKTByFt1pYs7wpeGs5SyG9aGx7ASdipdC1A4ERcPQrPYdpBq681hQAEK1gDmLokz1JhHfhG",
  "key5": "2HB4r1fS5o2CGmsyMEJxMYmaAaD8HqbgDqFHtmFsazrumE6FujDTUZfdFQUSJpWh6UqW5v8zWfPRTpGQj2vGnFru",
  "key6": "42B3KXNEvPcn71SNXrrNrn7BpR8xotHNwEMqzZZ5PMq5TqczqXW7kxuafiY4GCJ5Z2oDGSbM6DS7jWTWLfaBHtZG",
  "key7": "5NZGwag3SAxsuS17rRovRTL4uXrNouitpBdWBQgBq2voMfajhcSRoPfdwq8AFK2gVBw4jT1L8cVSZeEVBMr5nf1h",
  "key8": "3u4U1J4axDbhu2kMRX6j3JRsuJHP3Bsecdqdq6zttMf9ucyPv7oa3p8Q2yxg2STufYFfREQcj8UEyRLo98t71RpC",
  "key9": "CsYBG5s7eq95Savjyu3JjQ9jsZ2BbFkixRg6vBnuUbG6J1Mxv9RQ1Ea4XbbmknNF2b69N3qhs9gtFFYC9aSR8X5",
  "key10": "2uLJWWsHezcmWjEPnzZHotd4Qj3LkAhvHRHXm88zVNsuVk8XsXqwyCaEi9SYfnPNxrYgyUzhepTQwTjYneqvN48M",
  "key11": "35HjdEMtVgcdEcsKHLvNagf2cER7GLPUohHT624aDqUfKvXsU9VQ5jrKaB1LD8KFRakbQVVTiXAAhxTspfsVCHtK",
  "key12": "3Bf8zVxsTYp7WmuZJ4B5QSgaDcogEU8tvyugakEkJ5Lo8gGA8XwUwMLrayoDNVdRDdzQ5FVuRCqm5pCr3e2uRsab",
  "key13": "6Xe9XnTNqnADNDXvAo9RLWLfgd9Af1NgGgbfRmdAeCwzwyxqdMZUS7KRCUgK7q315a2QWCGDbQw8uxuZHWeZsXD",
  "key14": "4hCqp6WbDh1q4KcSwiAVw4fSui6iUcSg8RqRBbVDAjUTmLG2KHS8aT9h6YNjLY92JzQ37pFZvkbPi5sinwoQ6mQv",
  "key15": "5kgQkxqRF14NsMMCNzwFxWXnLa5PE8EpmKa8g2Dus8aGYFtqzQJe9yxrSEJskhLnLZTJrXv7p86u4aXrGfRvK4is",
  "key16": "3UBCr5oMrGAMmzRWbQdTe132QUw4hR1u5yCtdoTPsgZFPqhz8ZHqXcwHG87MxbhLBcryFtighzy2XjqSBGg7shcx",
  "key17": "5sSWd88GxNm3ZoBMppCgHxZAPMvvert569cCwYdWvbWGtyBvbwtXyZEHnkpTwRYSPpisUHMwiNchCasnkvykwAbP",
  "key18": "kEkyJ14FRRNYA67CqjAfnpk55xHjMY6K1enj8kax3bfXPY51g5Bmk3PmREnDG6PJVu3wnPju1Auh4tdBSfm4VEx",
  "key19": "4QkXyaXZsSfDVcmTf2hLLTJfSs4diqpqC67snXaTodjkHiopdG5SeYeLW7kGzWMCfDtRPNJDcFc1W5ZyB2ZUZhWP",
  "key20": "3TM5iuATzEm44gfWRKKQRwHG5ijFVPxvomXrPZUCnNah3PkCDMkPhpUHNkCKV8LpE1u8C4Wi83fakX76VmWJSvYi",
  "key21": "4gr4HEzg476LbHLnmD6mdEtWLE2XzcMym8pA2JaDAPiqxfdUuAFxk6Vrshngbc3TEojWE8qZroDsGdYDcmHLyRBH",
  "key22": "5G7Yvz3FrZCH2R4bA3rUN5gW2ixxhHX5a3F6XLeS4EZ7okitNhgDMGrxozaCqfKNJx1Z6khVdYBjo74HGwPSZsiq",
  "key23": "3MzLxwkZhRZBFHiHqXpJJCifcmYvx2WEdckJc6TBm4wYJrfG8J4YK2A3p36bRm5aPJ8ejCVLLcS3AkdXQSaygFVB",
  "key24": "3dddoeDXJRW8NzMDWoyRfWAzXphrq2ELdtiAxsh1mTgA37VFkcjKbP4SQuYkSrAXqxwDtYCz4j4KSNaq82cMQhSb",
  "key25": "2NKpb1pkpm89BgwPiu67qto5GbUjWvZkD8UqqLnFquGqA1LXGGW45tT43kwcgULR3VzN3XusAemt7fNHkuxf3sbR",
  "key26": "9EYAxCu48LKvSMkCMvsckuURUTNo9kQ5suix8XZvzTa82unSdWxmdguVkhfm43xaAof6GpPusFZPMqBDkULv89F",
  "key27": "uJiYQCRRJ6uRPnwUTxJ59uNoWUqn3btrWxZgrvPF3dHMtw3bBANmhtqtzuAtzapodpMj9zjnYzrMtrNKdZyAAQN",
  "key28": "598R4dFy9eUo1hbXUkV12hWRt2zcvmdDuJymmWphNvAE8N8oCHdz7ooa23AYpqtPH2HVfM7jv8Eugyvn9KRstUcf",
  "key29": "4p6R93pTqJBaw7SNkT5nhYuPTk9aVTBcYE4si2hdLsUre8ouw8rF26fy773e1cuvCgPwXBiqvSLCK2A2YoUwMJPS",
  "key30": "54TsBH3fKtL7MtuKH3zdyW9zMJKxaj7XDamyRRuji6HRY7anajUXuFAaWN4VTvKdNER4TnB1Mep3sf5HmNSgfh1x",
  "key31": "5iYw3zq9Knqoz1A8drC3DcdoBZAYvL4gYJD4bLqNxVRaS7oc7f6vRAbBnXqJ6oQc6ZG3KrQVJWUWcKBrrAR4QMbC",
  "key32": "3c72vUBamE1gh9k565euAYCykRKjVhrQ6tRxDx5DYxdgAuiN5c3GGg7CuCH7qk6bKc5XtKLcAkXSjnJSacKZRHS2",
  "key33": "tQL5mDWE2HpGJd2BNdkQzCZiygv6rVQEyZzYbHxPUeoqu7jhwPQj8JZ9GdyqGRRb92EpXp1e3mAiUU6dkHUSM8L",
  "key34": "66ZhhrLwJp3rgnyA2gQ6MEprRvCjjzLmA5Hym1kerKEvgQRTcS3yoEawAj7RevbBc8Ktvz8ajhJrHaKFjggnPBCo",
  "key35": "3zKHmvQfNPXaTCDdyDBd4vwxrQTCbwyQd14NP2H8fthWmwoJzKoAMsbT84sDGPeYWYBig3Jbptxy4L6RyqdmV18U",
  "key36": "2KTbC7XtmjFArPMputES5JzJwHmNAHESwVfUXm22zbU7uNCe59HYUZu5waTfQRHyF3AvmnSiEAWbLJYaZHWpYhuz",
  "key37": "4y2A7JvJ9LqmUVwyZfLhYC3RM9KCgLbSJm6mfQgxgevuSPpsP6kdJmQmaKLdxpcTvsDt2ptz19bhaxwSpbmUtthm",
  "key38": "2LJnJqnRKdUf6KGwRzhmWfMkjeWmkTuTWcSxcs7QNh3irMnsfcebJAmMVW896UESEwcAFfhy9z8DSLjB3f8mRA2F",
  "key39": "4keeZCFvGp6FQdPSoBtyZztKhPveWcPwtZahhpaCqP1M4Ydx219ibQE3DEZT3phFEHEja1mwWkspn41SHJ2jq1Zo",
  "key40": "YY4ynxRkMi7SJudcGkLnwS5vYJrMZMmuxEVKQFV4QDePgeMXd6dMTzhWVxoBPaViShXY8u38GkytDvWFzEvADNa",
  "key41": "fnCXWHFWWGmsQgd26KzXDt9FMYkGNGqtiddkh1LnueGvdxVn5S4YHzQB2RoWWZJJxLLMwg1FoAJediGhVtQ92Qo",
  "key42": "2RQpfS91AUCtG77qeMc1HCvZTQtWp4PggDYakgEwhUtuWw66L3BYzJh9MztmwZjD8u5ME8VA5ndbkfGmf1yf1ukd",
  "key43": "2xr94BueZNoK5929jTXKchfXh15gUjbb7epuSN7HfDBT4Z5DKVM3NraUUUcARXkoD3vh7VstKpeE8nSbwdXZtTHs",
  "key44": "4k5j2LfsbDnM89v7CtCiVoxQmL2zfdLrHf3f2f6WVP6ToHN2ivM1QhqSHFnyFX48T569XnWdeYhFMZjgfn9pkr5c",
  "key45": "2LK7jhtMQfHJRAmEtGfKZvCkjzxsQE4J6Hpfb7kFY1C3Dszpm5NF7sTYEojfXWX8KYaW21Lcm2zDiVyAg1cAitmA",
  "key46": "4Y4RU5jb5LQ3x91vth4jyJrsjZQ3rcfUwG83d2XVzCoLML9sMWGZ3ozVfcRdg7SUNHi2jaFqA45SUysqpsRGUXe",
  "key47": "4s1y1HCwPffusSrs3pRjBd4LB24fHGf2kcYqUuwB7xjqytJyFj8zZutb1B2yFbrSm1K2E2qQLbqsx6MnajA17u8i",
  "key48": "29bHkMf1bBj9QVwhMzYrCn36LWFKv9BXgz79wWi9UTq4KFc61VycawtQTBvfg1yMEEjUjNfTmnXNCNtaYVxtbReU",
  "key49": "3hD7eHJqeHMgGreyY5ppbxQVMS9JxKkXfAUn1mSbMr4cCr8jiBLMpW5gJRBJkb2oN5oYiqzVigguHhxYiVVSGeWC"
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
