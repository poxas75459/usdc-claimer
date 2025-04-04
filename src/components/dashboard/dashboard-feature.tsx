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
    "3kWLdCKNnDQgEDReMr8wT1kn33SrQnqQu5dDBcWZFtUA9X4XunPVFxzQJji8CMQ5JEVBJURR84JqQfctbeTzTSHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHx6y1m2Q7c7zccqVt6bF6SFjPmjJ6P5FyrWTB1jvFJ86kTZeHfGLidYZYAiXVpchFsBoEUeuubkEonhS5dKASG",
  "key1": "5Le83ENaW8z4dy7DMsoi5GxrYyf58ZVCZvsej6uPY8jDuuM9tCXWpwvb5TKtAeWuv99RYjtmjMprQmGKGC7cKf61",
  "key2": "C1g1TN5YDf76cz2Rfoy2AJcShYaaZ8rG5XxZPU9jhPxJRXcSvXNp7VgMCxGsTKikZEpWymyqHBC2dV6VBaPhy6X",
  "key3": "5DcAaKW3rfbTbPyFSybbtH6EMX1CJYr2vikpWBJa8FJpnQcjBCk1AjLXvpCVWoqu4kjfMv2PAcUcs2ibAXjrX4cR",
  "key4": "Tbs6WBkNPvcPbwZGukisGJRvxs43f7Mo4cDKZfoNTnb5e49P25jukivPN4ghQLZUMhW42NKjgH1jhc1dsEcSuyL",
  "key5": "266LioRgXXi3wmQhGJSKRtxDU3fvJvMvuDFaFjZBEZarYCmwU7QtJn8mPTJkTjfG6e2uXnq36NCdNJ94sCdWRzi9",
  "key6": "4Pm7hoDQBhN4QZWgpyCEUBRDm2bJ4txwoyxQjyrmdabnrwjz3TwMP3L892gSFux7Wq4B1h6U6Nji8KkpyKHG3mT8",
  "key7": "61SKM1yS7xCNTNsWtMJTcKCRsPXrXobtqzYkNvC66Seddj7QxNi9SEZqkS4b4HDGVZE4n5NF3aBkx2Dx1h3TtdtN",
  "key8": "3mEtg2ScZhwGDc6KVB6f57JWYd3vDZKrd6tfaEV35mhYeoipZQ6Guu6wo85AR7UP6ewtVSEcyD4RhvTPLcN1ytax",
  "key9": "2AkpETQCZAosu2rx9jyaWLHT8eUWMRJm8x7X5NyDuvDRyrJSFKtJmSR5JVNneMF5PpUoy6HqCDcMJqHP3oEJ6Nzc",
  "key10": "2sLthFcVpT28HSUFrHT3iHiUAwjBKxJVSrgpYLLgRyPd5gwxazxrJs35TNtB4LtvfV2QQqhM4UxBTgReJDzXNExy",
  "key11": "539gesAYgNxURwhmrjmX4SV4TqiHPdu2rieqQxmkAAPnnBbJRqoa1H8ZZ3dvyabPMduSaxKccF6ysHUsut3k3VAi",
  "key12": "4fFaCidsin2UxqsFUvXHx1fiBLcVdBAZCHpi2T4AYwtTHNffjpDQeTL6Dmhro3ymoXd4q7QEEvwMJXjphpj6tLtP",
  "key13": "3quS6WrWmCXnYX7SvDptShwGjEG68jFgyd5aQw8zhT3pVeP2DVgc3GMGZpoG6k64NuRLPq29xpZgrhunfgWxjLLG",
  "key14": "2WWp8zeAdVA4keVUASC67BCo3QVbPmCxVbM66AmfwS8pE8fMG78dsXm2F1L3F3asbXWRAMQRhwJUnUzdoCTPsaJy",
  "key15": "5MZCKTgvuJeraPS51A6WHbUxBN79ix12yd2Z88Mab4JaVgG8UHiT2L4XQnP17pdMfpqAFERaN8hG1Rp6iB45rx8J",
  "key16": "7qxpwX9dSNia73tdkWx1TzJjJtRZHCMMu4vQhEpzgZFBLsZxshucrQnXpTPxvVK8S1Hw9FpUcML3wtU2jZQ79MD",
  "key17": "3dXq9n9hTGytZq55NLYuizB4cEGKqYk65eiKfWGmjJbUqyzRm9N6hxDYKgrKbzJ88DwDPG4h4Eji4jGif55LnnaN",
  "key18": "2Ck9HdYkyixmS9LCtoJCgE2FvX1HpvU7Vm3Nj4e3xVNv5bnXgk6TcNsEEjaVYQyVtgh3wETRAPefeNRGKB9DmDGv",
  "key19": "2o2jwkLH8nYsTXM7HhNqezg4di4JMk9EMLQdNGV9aGXJrKFze9JxjEvjFanB9jgT5HWBc2EoQgf5W9kKvq3gsg1Q",
  "key20": "2DeNzzGBKqfKuC4s6UxaonFr7T2j2RjfygY7wdWxyXzQv8cpkwLft6cQ6oEVVULqJtR8trmBVMMn872ZCor9sin1",
  "key21": "ntnqvYGv6Mp2F584dUARZzEqLwFDuR6bJphCXrX71gqih8vrXJ7jVjGv1RipBciYAAdxPVDCQHGLGzte7AEQEzH",
  "key22": "m15scVhxG4TYsxMzdWKwknixCm1pEFs7HNrDf2aY5f36yzFV8TByAsfVW4KxWvWLBXxuTSt1hAU5aWXQcLYhW4n",
  "key23": "4NuFx3iJnkLCsojfBMhuhyTQFxMpCpEk5Cgj4GF35ufgJYB8keaMKm8UuwjWKtinvaMfbrGguajyfRRipRaaSHDr",
  "key24": "5ry7d6AjdUzBoSCEbAHxiszmVFPDrtNoVkrDMsQLxTdWCWs21Kda2juKqgPikboNWnxepNDGBgCbDGxAMHJkKBnf",
  "key25": "5JNQj5vzJoaEiCXZHu66KShpGb4FeWxdMkk4AqDSYfxjYZmQYMGZvdZbdUwo9vAZ1GaKPcjtFLC7ZXDqGEPV1QzF",
  "key26": "38Nuoy7eTDNQkr1aCfzdSHBKamhCGrsVgFXhLvUyPFqUxGZRikYvJgQ9DFgMw3hwsciqXNAHUWTS6JyYpmkSQxuU",
  "key27": "5dsSfP9eGEb6AmEgQWYmY2MjNaV1jsdBe2KPBS6WzMsENmMrAbPS3jThShx5PqqfJsjRBS9SD8aYVCSJDbDhsGWT",
  "key28": "3gc6QpqJeD28WMWJCrxrc9YJfGtL3W3gdfLqvXAngPZsDLeqeAvt6tH46G1yEhiDppp2hwRi1sdHp2a1F4UCQrj9",
  "key29": "2ayaLFLeLhS3P8tLCUsr5MndmTAeLdTd3sPsfLutaMfAU3xjY3YKq6wZ9YXGC3BVdp4yQLCtHLuAGtssaSayPLP5",
  "key30": "41csnsdkdYBdjzHhqPpU91tFmRPXXfbU3h4i3xDGhws7Tu7g7CiKE8zWZ8biU1ucVMaETnLj3CutqBAUN67jeEFk",
  "key31": "2n3PX8y8YWGuPfWMdb7owTc7vH8bihTR92NWq7UC9nvtXy9zQEeCAMfopA47jBmjzxmx9bdaWXkjMGZXye6is9nA",
  "key32": "EnjbBszyMuk6dispMRg8iUQAAZK7o4YCVmxTQ7Xao6jhpSvGm4KfhEL8Aw6Xbn6YKQ2UbrjsER5UuVWnyua4VsD",
  "key33": "65dfEo77x2dBLjN3vZBFma7oKGgq8BmG8cMD9zQv8Af9yJSWMznBphegFdVvADRvMViTnPR1ufELvz3ZBH12xgXu",
  "key34": "25t5gGQvfzYU3LBRWJneTroybyuAFT9PXf6VTX1AhGJnic2BiQYEhkuo6orS3dFKqGMbC5JrZPLMjCQDH8TMd7ZN",
  "key35": "46h7wfSV489sMFS6BMPQDXUWJoYXPZvTfnx3K8SusmHNxwiSmR3t8zvrspkXq8wbPv51Nkdi7THihuLUxv47TYCK"
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
