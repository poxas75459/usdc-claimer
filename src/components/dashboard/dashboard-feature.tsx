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
    "41JpqM8yRiBSdwyEo4TCzx8FDKXscxPxy6123Y8gDAtx6QaTQiNUag56MqRnmyNLYcQuDbDnuLNKM9QieTPeG87w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k1Pseq2WX8qBbiMMCtmQSH8SCJh24G3khqbMggkja8eqo1ZBkQPRVV6tJeEhYBF3f7pC66cekEe1zRHht2k4Zjn",
  "key1": "3LcW69E2CYZUvpGoYyDEdJpKcVzjemLAn5v4UbLHV9RwKUt6qZGqtUvpU5G1F6tKhuYUicW3AMysZFRKzP1ETRfq",
  "key2": "5fWv5trfPmkQLtjPbujpZiWxq1n2qtwobhc6U1KinuY2ywzskeqJAHy3qGVEBgs2AqhPLpMZZRnmfNY2bUuyWnCZ",
  "key3": "5Ec7GS89NXjB9sNSrb2vnAWTjRMVCA1kntuWKjKmfzirtX3Qkpsoe1M6Ez1gkjgN8DcNFhHR18Y6YkMnkFcmhdq8",
  "key4": "3bZvvSskxNnEozo1T1AVm9dKY6WEdGtwrbRHr5oUdjU6a1fY83iDQVJ72imoSdMaUqmJYRPevSJTNg2sgR5S9Hb6",
  "key5": "2sguAQRHh6AUiNUeKkJ9ykVWhp1ZFMeYGYhsshi7WgLTAv5HVd2HzwCr8TWJoPXxDyq8QqjF2pJDGefRCyn6C2Hi",
  "key6": "3qzRd4jP3rmeRcR1CdS7DKdbdhaf21HWEodfditk3EghGEcCb9JbCnEvsgS8eEeb7A4eyDHwUtqjEZPfqKAAGXip",
  "key7": "4YMBEVxjSquAmKDFgSaiJvYuFkEv3dwEoVV7DueRSaQrLrGWShDQZ8EoWhpWmmcgMi5jkEDFCYZwF1PGntjcs5AJ",
  "key8": "3HtjDXmVqwSGzhNapWEqVgvQKxZYyDe1p9Mo1K3RM49SuUUdT6APDAfPezuoGpHeh7qKiApVnpi4ERsBFSDbS2EY",
  "key9": "2oJE2dGQsD6GFemmMqbrCJFecEKEZYtQGQfMN6dsJZdooZAoinJfoXpXDhQmfX8JB38CTK44QTQYwmnFryd2nVG",
  "key10": "2KG5v7iGmJBZthFRwnEVAHSkJo3REkRsvMdZ3BeRzWS6Y12VyFEqWNijuTaSeU46fHGJKXwaapNjHtuzBirjB1ci",
  "key11": "2tgcB1MiPJV8jzyCnhk24eohndbicUErbB7k6Fn3xpk7pWcRAMMbJ5bpeNpX7moKG6NwSDzzzJ6jvA18vHmUECQ1",
  "key12": "5znNbUteZbaZYtTKXA895kdUc4WtU5635pEzDPYah1v3NstAHtqwohZenWXbv7uprNsUijhT3kBVsvuveGPajJE7",
  "key13": "42dBqokKBZDxD7GFDK9osgKHNLKqD687nkpqWXsw5UtMsafs4pNcZ5PPnbeFjdLHaxXMhVxzc8ZjHDCMYNkPwry1",
  "key14": "4t4n2hAWLBzrZHHZh9EY4pnHoWxgJG3cMNmtBpXBAnRpfuKWJJoNJm2zHXQBUL5uJwq6F1h5NBsf1cGdHuTxLYLu",
  "key15": "2jnqfagrtCvqFpbSqeR6h2chHC4V9w7WvUbvKrPojnQpvuGVFqstr5B1jZw5KTDcjnyxQ4bHqmWqQ2YjLgwfdC3y",
  "key16": "5dKffnkp71JH7yuQvq3Wp8mVrCvSQP51gyyV1dS7QBJvGuVtabNyAb74HJpbwRRiqQQCJS7WCGgp4YTsNhzynUwZ",
  "key17": "EM67ttAE5V4GGTtWrgxTPuLMwsFKbt44bz8ooQWCCPRVxSCZkYEzWgkX7fofWCNLakQdbXtpK2EhfotVHyYk7Bb",
  "key18": "2DbFbeeY2JGk8tfSC4TCpMTAFw5KLwu1UWFArHMQXNo6VkLBouiUvaBSjS1EouXo2YzKuKGqrC3z6Po4Wskb88YW",
  "key19": "3CiHoTsXm8qFRkSDGKYseXDStdY7Ds4z3hnzMoxBo6RrYoYU4ztdfW1GNGcbVHiTMAYUN9XcuWSKXwCPYk5vnzCh",
  "key20": "uDWjTraZtFDwy79KPfGC6qPdQtfLYY81p6qki4znq2QhASiGZzUfYzPNjL4x12euMXFiQcg35qa51geViyfsU3d",
  "key21": "3L2jJone1SqYVCqN7PuwTD1ahFNPybzFiZ7WhV7SUWanQEnKrHZLMKKiyv5Uc1wgfnFVwCsBdTaNY1CBe7aJgeKm",
  "key22": "3yage1tN7MxMUtA7FTAwsSZs735nfPp9MsHt7f5dJurRKD7yGDdYVb9TuSzVeUX8q59sK8YkyDgP5Y2xaXx2AJfT",
  "key23": "4qUcrnUMgzmAy8c3Bgc3jxs32temzcCdPhCx5hVV7ZdiT1q3DrbE76J49atbpRgMtzihfuniMwqSc4oraKv1qjf6",
  "key24": "5uQcQyJDsHK6jiDbscuD28XGmWoGyjx8MnCBNszjLmp9PdqYpNbZfMEK5H9ULQxQDQuEkGAU8SjhKhxZFVrRrcja",
  "key25": "3eX78bBzuRSnbt533oAJeEkfZ5haR5CPAoyMYNeZ5DYLa5N97KuYZDdoGcJ2v8yrKyjmMw1BnPKaGnAXwiY9X8JS",
  "key26": "4RgdQ9Y9DeFn7GewtrhR2V9WSdn62rAodXX2PsUeb6iLK9b4aRJmigV1qYTmJQotmxFPijUVkrj5LRuVgSbqF8wL",
  "key27": "2wX1dh1ce1oqg8ocHXxNaucon9EZZNpDH2QLDws46X2b92GffMk1rRZsfqeJWFPXmHaiHyQnDiNpJn6sBePzethh",
  "key28": "2jNiA79t2CBVfEvDVqLfN3B2i2r4C84BZazEpVeDzzcyFFee5BaR2gC4unCYmRLs3B5hSeLdJf2Ao9JQ8r6UD87y",
  "key29": "4honps7DLVp4J6T2M5uM7LCjzCFwpAc82ei437RsvHSpNAxyucXK46KDTsYsfsjbSSz1SbvUTzubnHdJZwSMfYEb",
  "key30": "3JxFib9dTSmXqcE6yjF6enmzRqLtgQihYEbhSGYedZr55uoZh3vKSuZGMoWpdYfNgTcGnS7VpKMzzXWFoULgXpUc",
  "key31": "3TAtfjwcSN5oFRxKCA1FudJb3coDUNmTJ2CDEeRHWEiVz2ziH7o6gKzUhiLxEfqHtVDEVmFihUkyT8QQCcdynLs8",
  "key32": "5bBybyA3SCk7zdNusszP6xMhVb3tvyFuy1xcEfLnSzqF38Jv5ya3cXgBvKQUhArgNPRrg8aEwU2vmnqXLwnPyUW6",
  "key33": "5xmUea7pbSKGs579P4oZ9kuLCYkgTbBDZpXQyi2HwQ9c9CWmoNsW81Lv4cgRKCG1bKj7tpQPaDak4FYvEZrQtCzn",
  "key34": "3MAtuAAxc3gKwN6gHwi7JoBB8uLvBRc6bs7Cqgu8bF3XqehMAesAka8HpvyTN2DRL4fzhLUkrCFjxQxtm37NibU8",
  "key35": "4cGnqzyHFj4HLZaj7TAemDrvMDETwH3cDEej2g94sGgu2nboNRB2oFLUFQAycDVXXrpHaZ1VjS9pqScaCGp1Vzxb",
  "key36": "PabGCyCY1c6h9Ghami1oWu9meygYWZ4vjJp7rYY8YKY4pCaB2td8bh9tAo1PwGtNDJmYMNBWXbbK8ZdSpsi511B",
  "key37": "2sEsVJoPBpfdDf6fFH2cQX2z4AoocyA2RgK9eQFLYVyF4RTJrVX8qHQmaYDpV9XGZiP24g9WycJQ4G66HDtWs8xG",
  "key38": "2tvkX4x1imyiyv9g4wkJC3vC4GRhQsPC6sk2fdiThj3rsqh8Z3cqncpKjEoQwYYxPK5LTi2xDtNiQWS1DiLHmhC",
  "key39": "4VPBGxEqR4AHNrUPkYWCR9nytomhkg78LoJEUV8qYCGkBhkfYM5Sdi7CgzoVZeccTJqSVrEoS93uvBLAaS2ZL9wM",
  "key40": "4s1G1M6LpZejvq58SHGW1ZTrQuzXD7SRiDQibdkZDAjxZQQkNzTdV9Ut7sDCP6LdartGjbybVxpFiz8XoajcXqV6",
  "key41": "47oFeknHdXEadH2qStPs9Tn6i4Jvkic8Z7bPe9Toqq8DGRce5Euu3mYMSmH42M5okzj9jPX3bdp9r9pzCvCGKUNv",
  "key42": "3VJ9XNVneL61vDoFg5S1M1kVPrBTnVJwbDsyP1XwhNSgJhstJWvzVmG8z2fL2BHN8fEb9YDodtYGuD27VDTMjUGA",
  "key43": "5otkr58JgQTMJ4q4ShR1xgJep2iaMmqccp6DxrRfuYheu4EXjC1o5piw5tB7EG6q4PT3rndDG6jtXoMnESAhRVtT",
  "key44": "az9qZHdosy64DqjVWMqCnJURXAMQesCkdw39Hh7HQ9Mj9iDDXXyktBgY6Lv9sygf3XGm4yMJvWuPU9WyW9sdM2t",
  "key45": "3gLFcSCQkAVcfd6yNyxhhs6sjFZAGGuRUabrKNge1apQLocCjDaPihvyAnK6bfGCkYNZac1GAHUkTT8fSBLFZa7W",
  "key46": "3nzDkfuYj7WbwMeJGizYbRbib7hrkkfntnjfNFsvSBwZQKExW9CfnqELeRzyHt46cVmMFA74FwLuM2zYivrjro4R",
  "key47": "4krV6hHH3NTvAxoQRXk3h8VwY3hqKvW1Afy5aKk9R7rCfXyviWDVnXfacXg6kQxwi5JYHR5Du9aLH1dcuVbE9a9q",
  "key48": "4SsYvQynG2eNYBiYVcASCyz369LWdGVcq83PU7jj7aQuhw3ASt8Z1GUt9euZKs4KNfT5Suqyvy4uo56C83iig7eu"
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
