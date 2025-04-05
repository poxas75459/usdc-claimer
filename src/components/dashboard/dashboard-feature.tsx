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
    "3TpzcareACJbUpxevie1RuJNcAf7MYZ5xbJAFxWRmDo9AuasReYoApsrz36nVs29dTFypeDraneehXeRHWBuEw5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wh4dqXbMTTdv48hV8vjNNCm97D6V85pt2MxgXzERnNDFxxmYBAxojt7iNfTQPHkxFAnktvH6qfeECsWB4E3hA5Y",
  "key1": "5TmQPknMwdpoxwLpVh5kXS417sLdTTYKjBM5QQjNd1eLaGurdhqrjAR52DHPPT7Zsye6u4gDcaUUsiK6iPVbryjP",
  "key2": "2A3sqo2d7rKG5viDfXaceNE4EXHFJ3FnsZYGG8Dg5FJWDWtHSFEJSbdtYqx5BR959v1uNKedu5KoSN7CQSaeLqtA",
  "key3": "5Np1HTeWwsfGk2WiecnaoMxXtgbqgRr8vNPRdcWKy3NJkJNSuufK1GLtV4V9UyycQaaRNcRFsAu3AMp2mfXToAhv",
  "key4": "5jH6zPy1T1kcfewW7kMdBYvgpFdkyBKhhA41hN3o2bHvp1dRmQuidNWeJkfCw9Wnq4c29XLqaTqXDqcH8QE4T454",
  "key5": "4oT95m6SKDGkcacGsQiYmHsZmYtinuMFjQR7A68N1NxiuLsimp5qQqYwT3Se3NCnkCdMUrBXs6z9swGiRvWweXsT",
  "key6": "4t7qQt2DNXuDawWTjEfPg4druCJUcoZqpkBrvF2cL85eNk94762hJJbQ1eZjSzehZ8qZfhhcqAK44cCC4mnJPnSL",
  "key7": "2SNJPgLZtqx6gzsgox65gP6r4YGZ1H1FTvUiRD5YNasTF6iE1pEazVBrDwTcCQWZeK7ESjyP944Fv9VTo2GojTj3",
  "key8": "4JsBR3F3k41uDSuhYQCvgSmVbHPz3BAEA7cqEP4EX5ecMKtNtvp4gYJgfZ623WyYapgZTKjRpq26zvg17f4uuzYV",
  "key9": "LEbEbJ4X8BhDHNAur9EManfexUTmaQr18MoEkz6CiGEyULbyRQ31iJXQsJiqPHxz9Rf2XdR1eMPTod14uLWaXKJ",
  "key10": "598cM56qCXWPQC5VctYZtxfoh2FA8ZTRQHGiatdoBTSpZYj474ne48JusNY6U79NNfDdFgZr3hGqX1gTF9jmQKpV",
  "key11": "sHkjES4NA1mcRALLjchZcofopa9ysJp6pd7eKsMsPMr6TBGAwU2GnyPX7Gz4htpBcBVgMkvijHSFGAHhyie6MuN",
  "key12": "3bxsskCivrfq5KiLm7u2BqV9jgArbLusBHEXmtthEHjyKkFJfLngeEScdd2szabrmyU7RZVbX9Ee4pveeBbgsxcA",
  "key13": "hDq5vy6bMtEDzUnJcppyWj1iEWebC2v5zqX6ea1GdH7HqSi9x4zKnkoWgpdxNF2o4gUnQfCodT2A6gaXqt8VRFf",
  "key14": "5HStcdy7bCVLpzWtaYVK3HPpSNtahmUEC6Pd3M1rAab9fYUxrsLxakTdjeQfdeBGucnTQyt9JrGXkvEDrU3KwTs5",
  "key15": "cVyaqQmNmM1zaGyFknPU4qXTGb3ozUfe6NbxyMJDn5BK7QjbTXDZwM9RLfWDw34bWo3YzTj2W48EZ4fSFLBP36N",
  "key16": "n7gNMKa2uSLvQjXtvMSb3f6tJVFpxnBdBiVFJDQZoJGwRLbZzruGJLSCk1fYuMsdD5a7yE4qRPtXmRnQWjNXhT1",
  "key17": "3khMtkxmWAFpasz9YhN54yeJnsn8ryLg4P91L4dWekQC4kC3qYsL82h9a7FPzqGa2jrFmP8A24W1ySbsbNJUJZKZ",
  "key18": "498TFi52SqF2NupUZHjx7myKBEkAc5tsXMfBus9mRQ6X5Ru1CXJKKUzydM2N78AqWf11i5SfyWLazM8QdtPZcZwa",
  "key19": "hMSheZTNhs6L9oDE2EHLCajF1gmVMfAfFStvNM7PuFk9ud9Mg3gyzULo3RcxEGPg9en3WqMeDSAQ33KKELBTqpF",
  "key20": "2QugKMDYow3bCvvnddogMYgKWKZrY1Wt2LCpw7nG8xsXTjn6DS1pRd1SDKCf435qN9CPLPxeegCBeBjP3Tjj4i63",
  "key21": "5z9R5cx2jHdbcPxvE13BBqHJ6FDgJjL9bjgPcJ8LuTcZycKSxJnhLubcUN7fpCHJD2ugMFycDc6hDkRXkruGFYSB",
  "key22": "nZM7oBtf9oKrLCChD1xxPRskj1MwnsbophQGwXNJQb8o2kMomKFAYcdvoAap44nei2Qy9azSpaLiEFHCsWRXjwU",
  "key23": "5eP9AnrM1CmaU5uWrxfY47mfunT53peq2KXVMcn8W7Swd3MYdn58tLzHFauguxAXgVsu2r78QVfYhMqjzwgu1FBd",
  "key24": "54F5sNkwwgDAtJbpEWj8NRnuVTvNetnNPAZzUh3gVnnTqEXSXgUtiZZiPM1gEaz7w8gNtGP6rLTf42zaYPKYi9qB",
  "key25": "32WzkojgtXE6PpFgjCBuZCoLKtqQbmqUWmi8yEBbGrj4be157Qqh6vyUnSGA9ZMW3hzCUGmBbqc9WDzbSmywPhba",
  "key26": "4hMooU2b4ceBL4dpPUY2NCKLqhz7jPCVDfs67bjzjxHGWziAfhANPifZJqetDZecokYeKUWTKtJaujHhXu5MKUXS",
  "key27": "c6LEzszcyxQY4N93YUp65JJhwPsEjfvXpvtgGimkgg91rk65EcMxF3SGQgqJhYvyLQT3v4Nn57DxXUdePhhVYJF",
  "key28": "PPwZPnWTs5PTrL6dCxPbofGq5VZBrjtnvanQwZQh2iqm2ieesch5dp7nhGaEDUvLgWduGmMsAgqYU9twvidx3Bm",
  "key29": "5Eik7ZU8zERKJy8LiKSKZjgRuB4cjCuLX12fzm93JWJCGLE8aHrW7ULCEoB7yZ1La3C46LakgThdqbujWLJZmvse",
  "key30": "Nq5r38T93L2WLCpdQeYx1QYuhX9Z8JctWDUrPgt8ax4RNgFPzB3nor9C4uaaybVeH4s4jU55hfEdMSefjrqRMvJ",
  "key31": "2y9cLvywgTfShLdCRnVwNT6DERXGJSniGZ538jgNkQsrbtrCa9CAe6HqctWEzSBh3q2Nj1F2Td9zwZFvv3EeE9m6",
  "key32": "34zvfXjU5mr6EEXF62grjanvEThkcP6erfbZDbghbXq9fAnPmBS6rhjBC25s5xkiUa5MobhzfQtJ8EwXoxBF7kfr",
  "key33": "CgQzjRj58S5mxepUPxvBmgQFdML1j39X561TTK1uzpJuyK7G8U3ZbeaJsVaVdEVxHPCZUJNKgya52zbWbeWyd3h",
  "key34": "24WPhwoCvGkxt9ixq5kMQiV7SwFmggQzbovh9TA2Ln8J2CDA82GoxFwfxTZ1iWREBHubU1pichdeUJH99ADQm8C6",
  "key35": "2d489jS7ArMTfYs93rh4NDKztDmUVfh318sD2JpvQSkpKhVXvM4szfAnguKWdRD9G1qupBPdedohMiFAkkWXaS3o",
  "key36": "FdKijXXYUd8zV3HkkgcwpJaSe7ST3N4Me7haQt9RZnETPYx6RZbfRGTxwfCNnYuDQW2BMPVjFYuA2nsR6dgddDQ",
  "key37": "36dKB9RGHJFiW8citvfnbauurqnqChx9LGATxJ4YRnjP2fUBjGby6e576fkcxS5vkL1sJDpvjmKYrJareCP2nDeX"
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
