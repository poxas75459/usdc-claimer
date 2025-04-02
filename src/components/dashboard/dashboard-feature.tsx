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
    "PFbQoMfv3D2DYmVSw8pKDGSxaYukEcu8EVvbvV1vcbQmuaWzW27ckoAMcvtfgLU2XMuVz1WCpiPpW65MsTcL22x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gijShWSBxjQ8R7ZwzvC8TVm3DMYPaa6d4MJrDZnM42X8enVJmHUCF4c7ufmAHYFHq54CJ2CTZjGA3aQsA1EHQg5",
  "key1": "2CWjVBzxCMwFzcKh3gs9YdnF9ksdb1ooSaJTjbfQZ38Zt896oVZXY8XdqJeY36yirsXMY3b8GK9UJ2wK8j7mK356",
  "key2": "5DAJAt58oa8RuwGvscYMVeYsqonqD6RMGohukQid9vUPJrhJaXkGmjJ8nmnNHSMUDwyEfsmUQx9nmDvy3hUM8pUG",
  "key3": "2aGDAkSBhaEo9S7sjru4QSCkqTjZZoxkmADSU97SM98tncLwjNGFRSD1vhUZWRZiBeJVjxyHaW5WsaQ8wgZUNZ5Q",
  "key4": "2dx6MYCv3Xu8RTxPm3WcdcffizH3M41hbwFFcMuoNAxjc5EBpVXX72Fkr46dFAug24YgEmWtfPRaWLUZGKArLhwp",
  "key5": "27pfbLvaxMGjphat1vEJeVTFKYa78M4pVBfgYNYW8bGhzZU8DQBMp9jUorBAPzxtwzzd1HG8zm9QaSnQcGNUpfPV",
  "key6": "2psfDMfQyLUTRope9bZiN3xdZkG3dCQFegAVYp8QH3H35deC1mF8iZRVXoV2Yp7jdP8KRgJpF5LL74zVZXgcHyC2",
  "key7": "54w1CwvKzhxSffqqsUheiPCwgLeVqsRpz74eZ8zWsbWXNsgqYmxTfu7DZ8zMAdRkpHH2pAsbHPHWQCpScEQUqvog",
  "key8": "463poWkC37xUnewGQwAgH8pZcHvsihJaRzGuHc8G6HFceLyJ2XguT6KwDD3BLeoRcSPC1a5FhQvboYZtVKKdX1Nt",
  "key9": "2GHjVssj8a2kvZ6CGj1fSya21nhjk7MJ6whJWVpkRTJv8KAy9ayeawihd4QNGt5aVoXDXwzA7urk35ZdQKqvQajQ",
  "key10": "4j8w5R5WiX4wrpTdMEDc6EAbu4eV9mFcnp64tvSvsEfafyxNksJh7cWWhM3NnBruBKmC5GR7L3Jm2RHxAXFecCPM",
  "key11": "2RMBT3WdR8YhwzrbuBx9hxrNBDRn9WcNEifxsNffra28pLPNkVToADcesvzGfDjUB8curB877G3p7pYHu2SjuEZy",
  "key12": "35WRH1P6Q9SfKWSek22NyD8btM9Yva1fc8uXMJmjLifr5Xp8hFiTiH4DhsZU9Q1uAsh6BPVqDzbAmT9RhYKc67P9",
  "key13": "2WHyQSYfcwVVnvQeSjNi5gPDgZz6Hvb2v1do1616ExJb8u95CZfF7qVcZm8mC2APfjfMEvt6ZqTErUihT4GBJLdq",
  "key14": "4GSwEVAdnTh3gNmPDxFQWosY9zTJNrpCeYA8Xua5nN6i3QVyNbeNZEMZc7kCkyqnx5sokV6udH6e7FV92NEqcCQr",
  "key15": "2mezLi12eyRRZRLKQWh8qUq3pi5uYHpMALmPGmR8EDJntpfngkfrw2sm3DV439P61LkJkxeRdBpTUFwBcfk8aQmG",
  "key16": "5uuSSteMuvC7xJRF63GKa5A4d5aGhUP961M4qiBT58cPq1fwLbWYCsZuQWigzHH5uxxez42PB9NQDM6MbziLzXyC",
  "key17": "2BfbCvJR1GEniRBdcwbFNENdbFsbwJ1BaCJcLgUsPiNYGc1GAZf3Yr8iy7dr3ps8fuvKBQmofjzu23aC5HH6wPRn",
  "key18": "Tz8npcNkmYsBGWDeGPSmPJB6XhpeuvgtTjNAsdnkHAGubf7oqKcKJDdAwKSisU3BLCxctEcSUP5z1xaxceuGuAn",
  "key19": "FybTZByF2JsLr9x5orzMt64yHEzMDSzPcBcBQor9aseEzGwfppPFEwFiVoerwnLKTdrchV5TMC5uaq39NwJhCYK",
  "key20": "2uKg3QHQ69VH6yGRqF8bRrg3wEqQhHycoLgX4sGE9xcwd5LYETgXTHrVGBUqNVdqyf1aQfsCkGLBEBWTBP7tntuu",
  "key21": "4DqoJAx876nVeqriaqs5rLNppYnBm7TZsjaDLGq4qeU1SdKAEZeCmrdZ5kjrM9csYopB28mncByLSP5fgQMBnXpF",
  "key22": "5ihyuhU76xpvGPP2EDZVsMDEB2t8U2SCGypsDpF3BnjcH6ZRTPs4fiySN3E6SWY5stLrRwuAX9c561tUrYec8Bae",
  "key23": "5TC19yx4NascreNuFy82TuwkoEKuzWGZnLzMTamruonAYpeENegvAkgeu7Mzyvu9YFZFYtAdfierQunwzf4YEMZZ",
  "key24": "Yfa77jBMqjK8dii4UwkhXaAPKpkTqQbNHJjsiYek4kPoaD6STvxhkEaXiY7Tk7QnZvKDWNpAuQpXci3KqkPehLX",
  "key25": "425sxN1GxxsYu3HHoy5gCZLFkUBPn4bNARYFhKgLS5qMRujBHex5kSesN313Zh9BjiiarPUEbeAg3WGeekK2m8vN",
  "key26": "2u46Z9KFscoJeZGXxVfHiMRNjVbNv41TB2cKwjb7abPgmHcpkB98kGgXK1JoyUJF76Xrw7Ve4y16CFqZ2kF6rJVv",
  "key27": "5DD9Z39JjypF4HPwAoiwGzPAyff1usgyTsx79RXKrgHM77YSsH5qWyi9NvcUnr2vqqALR9aKakWCt6DvzCdyaTPn",
  "key28": "25YmpwWpURuqaAUx5QJEvv4DprwRWdDw3iKaGtFhWZHcNyPpoTPLZZUiC1QUyWWoVNiQEsUz4Na73GdkQ9DfJ8ND",
  "key29": "545i7NSAoH8SdUqGaG56jPULzZuAZY8pDUtR2sefVKYBqiqSn6W959VS2BNq7yXoHmCi37hcSShwPAKuZ8pjDj2g",
  "key30": "4U6s7dmgWqrXsxSSUVavAkEa2KQCpmhEwpN9uh8k3ySZLJY6UZUL7TR4Kp2BruxyHDrzq7wgy7WrjgiH6qZFRdEQ",
  "key31": "i9oCSxNKHe4Ag4vdQt41L1zWKAWbrHLDj2Ww5CNte85Emc8pYEY6bjWPKax2X5AeS9qDCTHNfib9NL8YS9ZpLBG",
  "key32": "5BmMAjrCLBXe7WeRbz39euWCwtYhVXxK4Cq6fhq5mPoNN7iZvPiv9B24LrpmK9HEXg5cNz9HsnWWQT3NSdwxQ2Qx",
  "key33": "5dpMGJNwuzksvz8NRMUaTShSQmxjqSfVppQUNvsmHguQTboHFQtd8kDBsrupCCVKVXFtHNzCjjEXLvz6a9XMAaKo",
  "key34": "4tBwPsDJGndz9Gr4tMwWyxKMtGxxDVwYqGT8KeRd7ro8jcL949V1Jxa5JTgbNh9T8KmShXzbrLMjuvDgTDkxX6Pf",
  "key35": "3gSfxP1fwyZYVVAaTjEBg3ypY7eeMLMVM396Kgp44W9KHsBDzFXNfWmq8G6hVDym4PyBzFyBzdULPvATziThAnkN",
  "key36": "3xBNu8p7kaEBjUrxfo1as6fVZU5XVYbzufeGbSNQk9cKJu7czizjy2L3GU3vHm2x4yuzRq6xTW9eaMBzEYT2B1Po",
  "key37": "4CGedmgGUGpnRxAHF7Fg9uruRaWPDr5TnH7QTZPvkuSANDtA8Amk3beamBsnR8rDvjupAKBYrxgxo6CNYD7Wa3Q8",
  "key38": "bwJMsPtW23WCHt36x3pA8Hisj12TBwTszpfhmw56F83BBZLnU4D4LoZgCR8zGKWbAXTpW5VJVDcWjVMWCeZUsf9",
  "key39": "p8vEzm67BppNsrcsooRRuLvzELn7TsNb7yHtyCgVHbaGSeVyJemKhGabwFkmhyjZT7G66oH81V6ed749gmpUNXg",
  "key40": "5CmFMS9eRJQjSFQPN7xabZUYNHxzpjXWiwGPxf26mXC1NNfdchd4LxrB1wB9XB3DUxpV3x5dhHkko7Aoum61s8hn",
  "key41": "4Ai8QPNuk2BLYqDyKKJCbTXcZeQK8D4TbQtGFqxUdUWbsAjpzmTZi14h7XkJaCG6rkSTCJj61qkfhtyrCF8sdtEH",
  "key42": "2bJ9mQJ68Yhg2f1VS47pCEnciPxnuZkEpv25NvGK5ij72AFag4zNxGkpfmzzvQzNMkaGHzMcztjC2FZ3rBRBmgrk",
  "key43": "5QJrkBx6ZFHMMCn5LZ76DELYS8pMxFHuXEhHnogy7mzokdnH7KDZynRjckSDMnNkLLEABCokuN7dbJB87bKCv2Ry",
  "key44": "5DNHaRuSwWic5j1kaWD26cPaJSfXStdUBGn9cAV8DbDsXdRYnDcQKF3S7FibKEAbBHgeCoNq92c5uZ7JPEr8K8J9",
  "key45": "4UhdRSJW4X2mwwun3tfkV2DB7gEDkbBfa9uH8F93tUxUndRixQBqkNNJmrDJCRr5tMtpQRC1pKFp4wB93B8jDdmA",
  "key46": "PxKHGpW2QmJBDgqCHg4TLbYfqKQexV81Ct1BwwTobdTpvx4fU9Ttv2mwzPoTFearWtZNCsQaThoVzSGsMGj3VfL",
  "key47": "4dPf9FZZEZXLxCG1vEN3A2c61VDvMYPAws7HBHYjK71A8euRbMTLDDWgzmqsLZGp9JtsA2QUu22xdJaY55jdaw48",
  "key48": "QpCry4EQQv9PQsLz88Y7rzCzLDnyLRuwAmpNFReKp2Ks9L7y55QAzMBUdLi5PEkK7SUHFUVyZhX2dNzxPLzs7pv"
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
