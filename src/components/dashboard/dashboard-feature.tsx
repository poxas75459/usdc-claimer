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
    "212zN8gLKEKN5X7YegqjX13J112d94xCf1tCmQpw5c8R6NViqFUsNEtKgfk2i4vqcRZgzRMeE7cFMkhNU99h9Bjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wPsAERqnnyeVPwFRrFbYY9GUutzu44K6FcCWic9BKvybwVV3jFEunteCqF3Y7ecDQ33PoYpRh6t68LpuKRyed1r",
  "key1": "XXrjBd8mbymAQ3bDwQowbdJnoL5RUMKxuMTDeDswGYZede8dzViJMdg569r7a62XgdY6iEm8MECC3H9Uk3rKi8f",
  "key2": "NtpTAv65KHjn7t5YHxFkX2ss8JZFp3VvSaXi94zjuhybx4jovkyX5oguqydDFe4n53VPvXC4NqEzE9JorLQ9uvr",
  "key3": "A4hGo5uCVuNs9Z8CDiYERftL5CuBt5rbqpWHnouGHUvbXgQDcJ9VijkL2Xn5FxxqjkaBnNdzvVz4uAAqeb7W5N3",
  "key4": "41FP1FaB3JawvUZ5KYJkYjnwoPpG1LyXBbXuxaweE3uL8TMkTxRsWDczjFZSsFmsLyY2nPzXxv3co79dy8yJYxQG",
  "key5": "27cqJLfLB5uYxVMDd3xmZGimsFRB3ja5T1SNrPwG7NQBERNcmb5SEvQZK4X7mVWvxjehKo5eVSweqhTGqwM7P81c",
  "key6": "iRVXBDWLFhtNBEMABsPXH7knCCZJzTAit6XcfygrjyaPtAaGg4AviHcXVtSd2RS6ecHY2DFmsHiCF4zuLfMe4Sz",
  "key7": "2wuDsfWbjTjLTAxT7Pp3uS3DH4dShUfwobVMoqtqih4Fg4fYkAmUDVV9xQV8w2dYxpGha9Qs7eeS4TPJjFoYTJSt",
  "key8": "24kiQEp9T6nT8Wcf3gBMKpx1o3B4HMsAcXKW6oQbLrftxi3HaKnxWtBmzEKtzhka4Bp9G5j4vKTWderej8ZthTjY",
  "key9": "3CQioiQH6Cuy3KVEpZLj8BSG1NXKM76QkzonzozhVpx9XWhfuKyVo9T1mQByeYSsDbys7EQgAWbvjJ1CaubG7cTU",
  "key10": "85vnjGKNdWZwcFHSvDxnKqgF531h1vXs1toXhFyTcwNSFeGbeY5tkgCc3jzCH6FEJwF8y77rYGUjtrHkgUanjtW",
  "key11": "4pQeZywbWkzq9rJPywP4TVrCcJN52vTiZjcoSzZkyAMNP54N2z29B6jbfoWUaF9783hSTjxXMfRheahPLDynbzBp",
  "key12": "HYhzhEPLjYaEjTw5h4K1wAjBPw95cmDnYgokom3Kw4Yu5KRdJzEsEU5Czxqe5tz4M2ZyDVPMBUE21HuEqw82WoM",
  "key13": "odv35h4XTK1573zTfm34aVdZPU7x5rKCJoUEghTFc9Wrgw6EywuoqkUuDqWLGDFkhExnVfZZSknBQDtu4y443fi",
  "key14": "2N69Kes5K16FTJL4ccrwWdeqbEG7QnTW8ZvnuVLowYnNVNfkxx5xSA3dCwHBd2vhGmoNaaJ6mKE25gGwKXnvEX59",
  "key15": "3jDvgJJcCtzsvMfDmwAF6cWtxRT4dTVZ8iSDx5eehyPnBD9sVmMJ6CTiwkDPFLzxsKpFTh6oVB39YjKVKPK5DDRx",
  "key16": "4cg1rW7njdkT9VyYg4Wy43MCnJx5AKMLPjtmFbRYnWpTGRFZn1TSvv5WmqWJuqdMSTiaVYLcPBgnhZ2BH2DgwsKC",
  "key17": "5N4Zbh8xfWDDddLwo2LQMt6KSU5HMTu7XhhreHTJK5JiXkgHt8Muf4uuMuUokLwTkNRwsZbSU18LamFDxgUJjiut",
  "key18": "2rj1uAJQetoQrq8Lz9hcanvuNqtRo6GucSivysHGp4B65aAZpUNdz2EMWuPBCsau3zA6gKE2cpbtoYD9G4ke63Hz",
  "key19": "3pJoPbDkgSjG9iueDKARNQkBkAcYf97vZK37n76PEz6XLWTqjLTUYmMKbZ9AMe5vsq5ZxVdbFkf13rHMhznXR4os",
  "key20": "cyRVNxBu7q5MDAL9LXRBBsq22aiyA9Fxzj3JhgMUUdedFG6iVpp3t5txjppCTckGYXPqZ7cZgq57dJ5Vngbuefk",
  "key21": "4mrRs9THiTXQPu7b6fSANumZf3BYq9votDfHTH7sc8jwhXQtbxEM6obZvBFkhVZ2g21RiwDfeo8soPYHBEwmSPBD",
  "key22": "M2Hb8fAeZYfS7NnsoREHkeLuafxFevMhmKmdpsyfXRzNRZdnxUoRRPvoEyZQK5mSxTswNHVRrvpNLs73WegkDUX",
  "key23": "4UBRN5YnagA7yJu7WSLZXfFnX3PNaDDJXvumuHZ2Ws9tckb8doa7tAA8F1H8jLRDwxuQabFhF64yPZTjaJNku1co",
  "key24": "52ovQyQdkG8aU4LxrXJNG15zVH9ZccXmexQq5VVtUEPCxMQzM9aJWEGkcZcq4uQUnsz9gx35zbEHqmWsuQtWpDKc",
  "key25": "64yxXdcZcTyGi59DyWgppaUnwCYuyiK2VVDR2zRnBF7rTVXxXn67sxr5bPn19xAXaDcQKwJn92qyUQA1SjC3ovnj",
  "key26": "fLEhnshPvxWAkjwNCNX5TY6bhfqgEGmbk9Q6BVDHRrS9G82PsgnKpep8jHDyTf5yQFHHXjo3HzQXcYgTPDPncKb",
  "key27": "Vdb4LDQcCCaqtPr9ySgBFdLQZsL7YikMYCg19QmY1sZVf3pzRtWvDBw1r575JnbkzF5eXQaUnxMqvyiosdAqdzb",
  "key28": "2QBtppuEVPpyUkzoxJTun5wxjG4y4vsLcGNbPqQCsPD8sEQJ9JsWvzbFA7iCX4TMR8sRXXuBCctF3x1j8jfCyLUB",
  "key29": "5jVgM6U1HJqNAhsYtF2PM2MV2km9gbeWukZjbGtcbTDo4jHYDLT4JAMRvkDMw6x1DNih5qBc6sXF5UqjBDqhzPKs",
  "key30": "3Tpus3yDao9t3Snn6C1HBJEU7avLf9WAUXcYTLymg14NYxJp96rMgjWcp1ytsMu3aCPdEmP7eFMBg6Z3zpykReih",
  "key31": "2fQNBrnGbZdKT54rG6ggvptjno6gmQ5tZ7NaVGFAEWrfkfDRaDeaK7vpsFvnfL9TGS9fDQg14DCwbk6aA5TgmxUh",
  "key32": "5GUiBiiTv2xFTW2AqYr6MECEWHssZ6SQ8jUtAzSA8382Z1q2vXrGnRXp5EfzUpaU5CRkEmVRkK9qoW4wAEf8HnBC",
  "key33": "66MvNiV37tKL2KhC9TNQEKkJKQxHTXnfgEm3YqFyVA9Lk9SqSNzb499DX7QCtibVYWa9vStyJsifycfiquuzoS47",
  "key34": "2ddjC8Ferwhm4LCVXE2zuiz6oAcd3QTBAzxkPjVGz37N1n55AKanoC1yNnj3svtiXUs79d1z4ZsmQZj3p5Mvftbw",
  "key35": "4A8pkF11q5vWPBUTC3cwtVs9mF2tizGwKvbqfn395ygcQyWrZbSYNRQBcNLvYETwCnVuhq2zXbiCTazkhrA6CeWr",
  "key36": "9WdNAMXHQQVzRUXdJ3b6sujUqziFBmR2VyNBFBYrKWkW23y5kECv1qqmzLXPh24vF4qcRNbNsZ8JEqp3Xvz5ppR",
  "key37": "4HgMi9jfUeaevi88QZtwasEE1Eyx1kroxXAz94W3ocbKn5Jwia6JrPr3vduizwPedhN1g35N8DJHRx2ByzCiyJFT",
  "key38": "DZS38ad3zdmQZmCzbgHVs79Qdb3uJH2xPdddWZhwqw9yNX1MQkWCVB3pV9S4GNCwhGWx5pkrowMWCWY26GExyi2",
  "key39": "3YjGphd5HZaiq4NviUmtbiQ5DuDU6nozPQrYqWCPoSL9ZZUQVaEW991gLZhK2AFGgRVoE3FEFWVGVar24w7vm7S2",
  "key40": "3kUSAKX8sCga9cSevZPzbAZUNXnebsdeVr417NVujNf2f7s9dUkNEcdf6qVbGzFY6AKgXZVZU4LGdQXt14r6Nmzv",
  "key41": "45KbisKtmEp4GXnMjw1BZKRBjrsEQQ3RcAXpLrTCrGHGo9hjA6Q19cDmmfD3UdohrDKTwCs9zd8TXmUhwVujLA7S",
  "key42": "4BJaKemKVP57JTQM5RjUWU5BHxycM5gT8i8BASC59aNp2mUoRnrJya4KWfZkUrnSMyP1jG12afPtXWDvok1sHYTj",
  "key43": "22C1CTUfFHXGbAVvGfS5nr21CZ3BBfRPNr23Vdc1Yay8WBxbAEgHwGonnqVuNP5yqb1WfzAUbCRbpK1xGPZ1NDhF",
  "key44": "2NbtCqPuSNzBZ1fBT77P1c767QDmhEkwrCxeRW9Yui1C9VXPrPaEw2DbeqgyNVH4Jhhx1T9pBHPcyBxsAGLHngKd",
  "key45": "2CL3HoVSmBBBAgTtM6yE2dRsjhGaN1dC84zWHvLKkTwafxJsKVTTFmYe7x3t5eXNtLQb5bp4s4WyGXrXxG4py5ih",
  "key46": "56BaMJka3aPdx3FdCJmPhubYTNYPGhXf58x31j8U7dZKFXgbWoT6fA61w4BtBrfWRbRvvPJfrCrWtUCw7WMkNBVE",
  "key47": "p3tVQtrbyHGATzqNADgYy3ZfbfJEkTo2S9GUtC427Nt8dXfrHN8aCg76wac1mrQhjutEuUe1smmpDLrveVGR61S",
  "key48": "5L4z86oeF1q6kRA8VpXUvTTbNLrJ9K2b3SdaT8fvUG1WBUim6U1yjdcmuKx9UKM7VW4giymWCevTwy2ohH6tqbot"
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
