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
    "64kJQTvJyogdfying5QAiLb1W598Y8BuJjtm1BXXn9cbKMwQTz6k84u7zVmndEqFxF5GmZLF8YGL1KUdxd2BfbDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cy1u6rEXcYJFSyPC1nGLWwo9fmEtvKW4dfvUfiWyynRYwtoL3gsruQC5Dfh3HUuoyengwepWeNdFExowpcfQUzH",
  "key1": "26KY3dEsfiXPtpPeuN22yhef4FMvwj7JkSQqiPn81XnDBTjcvxnRmcX7Db7vb9Fxs9ufhpsHFsJXZQytjxG4hiYV",
  "key2": "3wMb8psPZKmRETfTNbJfdNn3skHA5fXyQpYUTEqwYPvsTqPxA6SgBcCFb6rxYejRac9Gay1G1E7JWfJTHctUhJKn",
  "key3": "2zmxhH5kKGYh593SHHnK1HVRy8UBvWQWDWcjuQQpJnfmmfxhTmrNKUfrXFGuYNP4XmUetChBT46TENqcE1aNVwbu",
  "key4": "5STxvxupmiuGqN2usvBb2yDE6QrFVETae7xymZLAgzQVHkw2y4oWDtYoxryqZayyk6tYoCVA24mD13U8NSUFVr4K",
  "key5": "3gGt216sq5sLP67KoE3yqB6YEJjQzc92xj4TV3FiTouf61nyFZgVA26S8uNCb8ZHZ3xRPotpYiyeP36Wqh1wxRiM",
  "key6": "4XSQ6h4bzyN7xTEX4DHAwRSREYKwZ3CubgFM1zRkNS3t7j9aLGRditeToTPRk3NUS2ceXaW9JijGac4VzdZiEKbn",
  "key7": "3aSVhpLViCHLk8CGwBr1jWXbnowxyctK8hTDogsFW7C5rFV6vgRbu69QwgWe2UqyftW2uDR8tAicU8KZkpmcALD4",
  "key8": "29BBHmP3xQi6W4J69ryGj9tkrX3hb7HrsB6X9gcuvrWnF2bJK21Z8DYYMCu3uRhDJuL4r4MgMk4BNKEw9MHEdvNS",
  "key9": "2XgjkzQ3b7gq8JHKDy6Q1LmFfSFEo6z5FWRx5RVoWFVgfL6F7sRzvLfGfo7QH4NBS28sUKD6jjadVjqb2yDa9kK7",
  "key10": "2TBWUxhHkRr2ozSGEKPktaX2mXvRMCm4drciwGwqHPTgQ3T51Ah6hvJz7qjVn9fvHTcgn48GBoMBxDc2QBTGaPc7",
  "key11": "5rz8SeBnf7g6y5Sjendhh1L5YedcBTuR1RMVi3GZhN7vwsh7nzPnBTPyBRTXPabbJhwjr3ALkXwRTZe4QpaEp1kB",
  "key12": "3mZgWn42S1DuZUXHTfUF3YMrbdGYfgcAyvCuBm1JFcHEVpqxs4xjsESduwSfvMfQgTjY6hSwotDGLGtCudtTu9oR",
  "key13": "zNHnxve4KPLoifUuqAtfzd3cvRMb7SHUpYPWUjL6dPqv2LMBEQutc3C7aWyvPfP9s9wUxUa9amgmm5ngRMyhsWJ",
  "key14": "5stS3FrTQZ6NVQ2Av4XASsLmf5acEavLKvuTCFyoR1xGP7jYmc4mKVXAuJoedPF1CJwiWxpbaxwwUuvUkYQc9uZw",
  "key15": "4Qw2yAoQ7gCFPJhraef351w4rWJfAE6UXNtwCiAtTqqCvUyguyETE5pbPybBR1crbc3QLGhTnjV7u4W8zxVGeC7a",
  "key16": "267TsigC7jo88zBvBaib2bsoPHxrL14XLRYDh4vqeFjcvdpmNLRb49tyUGYakMfdTAofAjqY67x4S8HkJBiZGA1g",
  "key17": "JYf1g4tKyEm6oj9ZYX6R1t8RZvSqtEajhsMJ4L7w9BRP4WcdXYfD73NFBna2R8ivExTWCn2dDE9Ws3Wpd6Z7tRC",
  "key18": "2qPTkj45MCG7b7ZWcMd8qpws9kBvZqybn4TWWfyjTi7yot3r2FAhPiphD1xgGaFfPmChxqzyHwurVSAM97eWbhCx",
  "key19": "2Pyq8PNoKjmxvaAvpq4o5thvkEHsfuSvMUgMEiV9Cdp7Rz2xrNJL8TC9gnDrvxu1HXgKppnTgwgRobXA8mPa5EzF",
  "key20": "4wMk7xnzEr9g8kp8jGaPpccUmLvHGay32NRo1GYMfNEVMybyyTrPbGb1xNtPd4yZPXsvcwgVJ7q3XXfGWErvy2UF",
  "key21": "3ebvorhjJB7Cx1cWuwT3VFJwjQG1bZ4vAeEWvPuvXaXsKz3PCb81WoRjABkTceX29ApLymjRgtd4soyAaKm1TRVC",
  "key22": "2xSiCEhYUocFXdsKt4aqmXENaVwJ6o242exjBtDFtp65F5DQfLz4hDQwsxS1HP3ft2Y1H7mv7LnDTbmeT4vw1Kxm",
  "key23": "5FTqteHDtx9WQcLahjFwW3XFjviJiUkAiP11E9ncVZe1ASRg73hwvZCUvRw7aqkKVKQNGjGwP3nMPH5Ue9xGfNje",
  "key24": "5k4HafdkqqtHqYdPyEvXhLkKm5F81CmsaLmucVKLTz7eXHVwRx63guFPfEPicyRWH1A8kRmxvWFi8e4C79UPyeSy",
  "key25": "4o2xnPTwmjhZ7Q7WxNx9gBgB7RVLPjHaPFJa1M7dLHyTc8hsF8RTRtAMWCACEjYdLrcFcnS12ToYPzPa7dHB1A6F",
  "key26": "LNdxwQapB8AgcCRSoxKtRT8YMFGfTk1SWLpvtanwXB2ch57RuWni6tNcyqJSHQgUy3fphtSDkzDgTYqDzYdxZA7",
  "key27": "5aeYWYp27XjShE6XqutP6niBWj9VUCMdK3QeaSr1hPm2MvMvMfURFvySu1te3JhqCaW5dvzm475nLv8k8VAFNSwT",
  "key28": "4h7H9pJdJKpZmmEVyQTpJK5hdSQsbYfvygACYoYtP9qneZ7KgxJtP3UiwQx29RiT3xN8xqTEDYDnWFbqnzybSZFB",
  "key29": "3TCJqML4Nx48ML7aRjQxtzSoTm2gVcsJfx7z4z9ewkfp8ry2Sn79Co9rvMU4MkA8suZBE4Ax7WNRZ1dLuKBikiTo",
  "key30": "24WwWfSiGdgNtCyUbwKD5Ji5nGZ4A7iGC8agnbJLEzS7SWimD5GPynr1oDz1XaSm7rn1JPE3NioQ9BMPugTSZuWU",
  "key31": "3iDJZ2YzHy9JVgLQTQRbNKwK77HmRXBm844AjGTCBtWNHqELKCansg3AFk63xQx39HuTQbhUcKop5b7f168iveFn"
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
