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
    "3G5XTbM2jYPWL8HiQhTbCw3LEmxRr7NxfN7QZAEt4sip98CmeNsye48xWR9L8q1A6jPAM1YjdcmTaCWFm3kQ7wXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zLQxqaDquxDU7Fp1MekpMuxuviBs4a1rXZAvYMWMi5n2QN37AmKwSSRXbdMjGx3XWKCPWdAq9oa3XPToXgVphqd",
  "key1": "2JRso3shduNnCtUc6By2pTzHptvjbYa5wavx113cqryV2JBurqMec9DAa31dqw783hcGwykM7udoFwxc5EJJGE2V",
  "key2": "3yvo8rndxK6YJFfiFJ2i8Wgan4LNVQ1FnQqfE4CfVjuEzVRiz5D8L7LbPpxEyaRxXjbgrtefmTGqz9DFTZyEjysP",
  "key3": "5tAkcBs3mhnB7GkUaFZQt6CPLsJWtsoRWuiNDwMN2EVp5zq9F9vuBLZWUGddVump3izaMfwBpo5j9oY47Ccv1BXM",
  "key4": "65jV54LxpTvwo2R2mEyoM9uLT4RTmAry3ryRD9WJyQZRA4TDJoA4arDYSUZ4oRvEKp26ATwrjYC4J5W5sXVdga4n",
  "key5": "61Xesp2BU5CUnQXUCd48bjuSTM897ibeT3g1qYX5J5RqCx7rbRVhTQ3wiQtPMWsgQsAZzSPQuAesUEBJ77gUTerW",
  "key6": "58ppUsjYMRfWrogS9RA2HXCDFCcKyLbxrK8hizKAHdVwpgEq8484k3D7sKEx2EfevANgZ89mv6R6sZrgxD6R2zBs",
  "key7": "4ZeU5XceJZmkKJ6PT1Rk3RDwFXAttNxoJ6nPsxbEAccCsbdiNUDRZH4gBqb3coNgrUcHigqKTQURVuy8QxGQ94Bx",
  "key8": "66ZmScihXUCNPadq3KKoBqfeUiEtWeCT6xvbg2E2fU6vGQ7Zv4pxJFCL1SQ86rCpPPoJPXV8nRBaHGuz9Wmeo8Tr",
  "key9": "4AmMLtZPnb77hWawjth4bmhZrUMaTNraFxrbeJmo4yi6Kn5FKU9mDw79A41UbXYoKVb6ARyQFYqzp9X19hWVLi6D",
  "key10": "5MPsbWGuDSe43bnyuqedMaXRu7F1QLCs9onerqAeDKpXG6k6qGiFnVXQKqH7xYgGhGMeNK4DgmyMxKLiPpsMy7Be",
  "key11": "nDWdFYxhrUzWuU43B2AnUydaHGR9PFR8BtWZpeMqizusnhjJ56c1xVdD7DWdtabxQMQiUDr5J2KAyowX1s2j2vf",
  "key12": "2CGrhgz9KSoGyyd8ZEHxEZtpAhSsYv4zKcyiirh13LCdAXQ5nqsCWwzn7Lri6cgEELRQUUGKNMJHT6cCqyCpFmcR",
  "key13": "4ysty6yH8ATje64fSmFzZhno3WbTQtFEPQAjqcDjt3sybqYa15iuXsyVvxkgWbnSxxidHfXHA2DfXdhJCgpoppuH",
  "key14": "2FKbZTz2E74hZ14NCD58PCotp7GGmks6oibufbSdNAqUZduDaQdaGfUVJ1sDoxsp1jS5TUcCmiwUHC8mVVuzRVjd",
  "key15": "3LqvCAPgYBGjqC5daKsf1vaDzZMFJqYYmxveCry8deCQMGR4J9ZtaMuaq3BUZSMraa6SnEY8Mh1KsmHKKDFa9Mmd",
  "key16": "5Dnx3naU49ChMd1e1ejX3Yo3CGd3y1SvysmExsKfBQ4sZJ6B8d27JDvgfVWiymZsAJQiAMbPGCiNFAwG4J23JStN",
  "key17": "5FhAPVAiFR2jKUHzKcnKyXAuhcnKHBdTdC3ejPHCaQodhTgWHMAdXxw938YxuQqyatexD8BGyHGDNSx6j5PCwQTu",
  "key18": "HanK3CTmzA1XqViMTvyerACREJWJD9VtmwPrDHeLsvchRaVzWB93o9wMJoMCWPZvsDz22vFK1CQ2fakofNsjk7i",
  "key19": "2WgFcjDQDsaNcfAD5f1KYZcrmgrcai6eTLGuscfbXWnfgNCj1oKE5RWgmk2J4Hns9rxKYQQuwnbkT66KZdbDC4Re",
  "key20": "231tBCURDCfJp5uLtVUe4TLrXYmPyEmXK2kHbV5iktDzD8cRPaYXKsQfm9zhcgyoUieBGsApPYvxJEwZntP83wWh",
  "key21": "FwVhJYVe9X8zAAXQpmAaWqqqh7H7HfAU38weELbRKQH3itKmXWrBmPZ3SZxTdyxfFeWmXXUUzqUahGYaCXGH14M",
  "key22": "jvXTQ15keBMSnFykgmymrg5STHMPopkeZsFawWT1jXHKsFCooPHZ5U51XTAbR1saBMRnqKTEj3oSNiMhBeQ6JFg",
  "key23": "2bzpuy3zg51JgMTopCNGLqPwZ9T9kUbTACBCFpXEqD4cwmbhL2KnjsM4iyCtNmfRehQeKh2SV7fWXSPNMeeHMnBx",
  "key24": "2mWdBpfvvPpEcCXxNjwJVt9o7EDqgkMwU6GphDs21M7NV6gEtLT4XSWEx9qy1rH2hmqGqbJX2fBh3KZBJeKUgjbn",
  "key25": "3Q85oF8C12eGeRf2N6uPJBdv595LhPEvq39ghuXsLYNFsgeQuCRbUrvajj6kZ8uHEtxy14fZzzXkFT6wndEPqEou",
  "key26": "4PPyk6zybyHYEwS27jY6YihUWv86aDtMZoFWncnQuFQWvqMEnXK3SevAyZYvMb5FD3vB75kd5gbQFmGjtMasHkKh",
  "key27": "2tbDbvqFgfFDqn6zXTtCjDtUFCcxPg3qG9tYL8aC6qYW3xt2hPZRwQ6ZfcKiJ24P4k9zKDYbod1UAeU5knNyVcBA",
  "key28": "3MGLKVM9DRWjU1NXu91wKNB8FXCTauJrZ5maH4ETmrBwvacWenQmio36QX4pX1E3gmuTr91JLxs1UVR8JRu8uaCs",
  "key29": "3q9kZujgVJR7xFBGLcM4sFXBtMfy9YKiS5LYzDvVGFvs7ZkjYA3KpxHDU7fdC6yv55Jz4m29V69s3oGuiR9y4Bxe",
  "key30": "4w6hFEwjDBxAs46uFVp3BzmMUJxNrT6Rkt636dK3WE7aKQFuEEe6BJQuVAxDQTGDUsuicxc4kYyoVgm1kkWe2JQ2",
  "key31": "416bsSXeW8o3x3cwLUgq1118ed15KVPuERmW7DAzXAcV1Uawtsgc9YsWfv5RRCbyA6i55EyVqTrAn5opy6JYsc96",
  "key32": "5ks54iWVxBE6ukRn7wsPvZtTmZ7ahXfViR3eq1MvWL2LKm5cNEYTwE3BcHSJbQkecpQ8yfBruqZqHhp4RyFsjh63",
  "key33": "65WBq8Df4D5sVCqGpSszFbV8imLqY8V2bVdV3taJKcDbsYmpoNgaVeHmyfmxupcLRKSpbXYbrmGHq8NVgLXzwJZR",
  "key34": "2v47SLLEbA47GwpaXrnrwMRzRArbkmmCy2Y3UyqB8h5Vm8215EEL1kgVP5YMCc7b9FibrmvN3wH3Y8GUj9fHgrxf",
  "key35": "Ajz49AHrGiDb1EowZjyVSwwa8MgxDExNDe67u18cooNEUzHz46j9RiZ4n83hZ1KUy9ExM8hybgVsACMEvuR6WBb",
  "key36": "5KJ4rru3S6jXEFy6fozZVkDeDTDwWJcL4aJFskX3ourkcbuaDKeu7kYVePqZ1CNk3oVFaLM2Mz2wjCJ4kG43tcra",
  "key37": "2KNPhbM63NEVxXk2p2aWQxvXrr9vZPy6kAtdqj9biMkGhpWkCu7vDbdGdTqj4bEHghjkqUAuQPAsLGzuzbvisAcv"
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
