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
    "5bNLQ4N7dBR1BHpNGk2BL4UkH9JfzY6DEmfEZzcabQXRBAB7A4HauvTb5ndrjM146Pn2x4FTgnZ9mDp7cgypxjje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNgNPD8bLGi5pntXPRzSdfqvp2cqP324zDsA4DxZgPAkFbM3guR1jowq5hozjt2XFgcyCrqkxWhxWZfPaw1bALv",
  "key1": "5Jc7GipZH9sWTGryqMk6EmxhiLjx8m9aykXs5WMFqwvQdYH8v1cxDdZqMh9pd5YNzGTfSvQDjX28PnJvUzpyiwjq",
  "key2": "2Qk7G2tHGacC9H2irtbeo1dQKAcMnPYnKAH31ABQthPUfaTwfrZcqsVBxfTfaCPseqwxQfNRySJpZnjSswWyq6RX",
  "key3": "tGgWMVEFUQrnPWa6CygKipQwrDwZFAXyLgjR4FKG39BsqjT4ZF8LmBqoHut8aYhMP6NtEv3rLPSJX5eQDxM2BMg",
  "key4": "5wsYM5sGiqkZJVWcUQ2FiTRimTPDRmNzu1TCs3AU5o6LAQ7eXj6gw6WAHPyXXomQHdbibJesHhmT2TPB45oZ6QEq",
  "key5": "37UfjkT3goFNTVgcXPEQCBPoEt7Ku9VzEVwSNr72HGMYpjbfC13WUxpPwjZMCpS1MaSWfbP2ygmZNzhG6roybyXV",
  "key6": "5NUo7RH5dBt3eszUyy1EmqC6f4j57Qhuu9a8Qnu6bn19vpkZ9g4dBpMzvpZD7B59ZFjfLCCvrYQYZtvvCvTHLxYx",
  "key7": "5d5Jp8ZZaHyRM2ukBTaWV5U8zfXZxYvHctSc8tRVBPz6oDKry1vqMz631vofjj4zfAckG5bJrQV9gSrzvXN75HAo",
  "key8": "4GA4CHbbfMbXMDzjji1v25fLECBtsoZMKFNWiYNnEfai1MyzS6VgdM9xaCEAo9yDQsETF7v23kc5anT3AnhsTdQx",
  "key9": "25RThTqkH2uqvMvSeP95FHwqbDhQoiTz7sPQApdFkRziZ27WZMie4VPZoejinbzNpg9zfMEPQtG1EraKJmaoLq4o",
  "key10": "5VzHPH12VDq73nZXBr9dx7EXniyrkQx9gJQ3CmZVEHCEPYEFkT6idmQnv6soaDsdiJDW58P5PRZcuduK1JdTyTgV",
  "key11": "63AbzYr7nDkz8ZuJvuPgWUGDKoSitfhMqT4ERq7KRDXjEYnxBxubhcbAVEZpeannfpDRLXkeWr7aT2rQQGmsNQzG",
  "key12": "3g5PBkGitXwjXUnJdxmaoS4euveD6sMPfRM38zPUZGsCrgmnFuzr4p8eSDZDjL65782zwnRqneG3Vokn14BNHdJb",
  "key13": "2V7GrK8Afu34xFn2LhvVkBvZG33riEL2u4daxzF1bLqtV6EM8ZLnj5UUUH6Wbb8SuEW71dY9k8o49qFaCygGvScr",
  "key14": "kvLVKkBfqA3uEDNUT22AxvfQMsG1sWVub5Mp4pqSqXeenkcE5NEfhQjmzoQgVezGV4g6EZHCjHTwzn8hZnoPkqZ",
  "key15": "4yyJ6c6QjZSTqL9vrzaHp79zypq7vGERsxgEkB2j67ouFiw5LR4mxXpAfobHEzoL9czerTSdDQy8SewV4RhyU6Ui",
  "key16": "5aNoX9qzKtrfQGX7hfjLLkZJLXtcXhCHtm1XiUUKVAU2s93r7sSuAMd4KHpvbfxXh8uT4n5CdjHbh4qRvs3KUw1d",
  "key17": "3enmm3m1ciViPvFUAD7jSK4YH8GQbCsvNxy74fUb9uNZqW5766BVfFE3bZ1mpvoEzfU5AsDKG4Gcc6PiYe3ukLak",
  "key18": "4Z7W1CAf9VswtVy2Rn5YpkpgKphPr3xyS7LN4YdF6KoW6raJR7WHj7iSscDf8PdDAL641PpwyVLJ6U7GWCMGeqyZ",
  "key19": "5ts5ZrRZciusj5qTvCCjcpL2vUa27qpe2VSW5H23UhhF1J2YH4F7cPQB9WBUs1DKQaqHxHKvNJRy3MvE71RJ6drB",
  "key20": "4HtWh7XvP62e8nn9qJ9m4PvwLMM9ns48P5RF6EADcZ8NYLqhEzr4mgJHaQHJJFFuVPRUKaPFb5eyrLSXKDi1vaT2",
  "key21": "2YTDh5KtToRBQyXMSdrd8AsMtEnmRRoVcS7wdsV3shwp3nfX1wkc8nXDR7bFLSx3utsy4mXPc8W5h9NyeN5oebta",
  "key22": "3FcC3PoAZqMAVpi49Nzqxeb6KXxt6fULd7d2xUVqEKfVijPwu8TegvTh8kfzquY6gU35JTTxS5q1yC9ShVkDBCaa",
  "key23": "5sXkqCNnz9mPCxk44vJkiwqbyZoLbe6uoPPggNeT9Z9wzBpcb1EPABqx9m4TL4ssJNoFK6gQ1XnP1Jk5xPLKpYu1",
  "key24": "5UCGQP1aLWPt7ZQnn56EsP5YwNCfKZEG8GXaDToAoz84pHMk7YJDKcMuRQonPTqxxKEarrv2uAS4u33Bjxv1oj8S",
  "key25": "4UuU91vsph8j6XE9ALnwTqyK14HxnKY52SBBiRoLbVYMNivdQL37giQBzzomoaSgQGZgWEgbwu4f9EquJX6YbPhd",
  "key26": "5B7rW42XS9SwUFPNY7oxpjb9PCPcrVi8eRANGb8yQzCYTcHAyeFbCWzbpCwue8tiYmuMXSdNm4FzMUaX6qBvhKQY",
  "key27": "8LSbuJZNuabP6HCauavntSRFmt22HVYhPkyNcKrKy43Rwj7maAtty1yQ8SvgWW9GdvPK2bCeLcdzFjWY8EfVy4z",
  "key28": "45U9B6Tpv2dDhuhiPcgvD7yP4izfZDBzc6fKZ7hHJm33MsRJTNBXsMM5VMDA9mXKwoSjxfUPFcn96C4Hw2vQkxB2"
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
