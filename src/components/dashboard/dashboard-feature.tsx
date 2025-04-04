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
    "3jSvUEVhnup6u6ScjQ4jJmS2EHDxYWwS8CQe8FAZy18xmL46wiet5WAoswjSD5aNGjQxdfarNHTjnnUZjchEXMwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5opLyU7varbL17VTZjr4PGyqrmhSKqXgSpsSYHyg8nqRpDAqhByUvCruqTfAHXbuVRYMYYcC29bzQsS87XUvUc5Y",
  "key1": "5DKyEiyVckTq9EVHQCP7nCEiJcWTMcpLJqN6cs6WACuzFLFwtJUAicwyq95yXwNmKTwqCDvsGSQcGnntNWc2EURL",
  "key2": "3mnK7bR4wYb5QRuf5yNiCkAKE4xZDSnBoZ9xNLe4EUcvM95Rgvt34xmEjGdaVQxm8R6SUpGo6nU8CvGZ3ghfZeWt",
  "key3": "2HosrttbMFDqjYZebMVW5gywWKVvvVey6DfvUq59ZXS9e5ZduuiS8Hxjes9cQ2tN6DojoyMHGZ4PgeYrZAM4iacu",
  "key4": "3jdWLA65F6pXvNB4rQdVQEx4LPfqvTZrGUkBwLKABtF7UjjMZqYexuqV9PULMmBnyT7zkBNprPV56tEzudV3Cnq6",
  "key5": "4ExYubnLtQx6EcrurzXBmamw5NXwWazJv9PeWf9NhAfM13fiHmd1uiZpqqVPN71nabT5MNzKHiRTPqQHFhfQtjuZ",
  "key6": "5PE5a3ESgG7G9UNxJYkbPM2RKLHxEvCaZkFwD6ZBJkhYpfDUmsr2ncWkfbAGQsDMHooNdPU68Dswfz32nNV4KeSh",
  "key7": "3ujkHrjAo2Zk1ZpX4qohpk3dfQjKTk8JgQB3fSzp19ptBRsVvwnEfCx8z7dNbQ1a3eiU1BHrLtMoLoW5bkZBhUyb",
  "key8": "34g3MrzeFTgYXQDUGsFN7ktEEgQWrET25tTY8zaFWdAKP9aHVMK9sJWPAoMe5t8JcmHWyKeECeddCu6j63muaEp8",
  "key9": "2hox9qLqaEFZDiLGSrC6B9B9ZgJfp4bz5hxX8x1HyEdbbnGARcqsPTa14ChzYrPu9FDGyykNXvsab18qgEo2uLCE",
  "key10": "2QStEjZmD1jUm6tuEZVpkgJ2xi4hzS2VFaCykH7b8inbUoHYbuxBDVpJwY5LCEdrhKZyF24wUi3KmonYEcYoPCFs",
  "key11": "5eeV284fpLMfaQ9qMuKwiSnNnTQAum3eqKEUG4KKd1SEgqUMyso2VUKz6uorvxFWaW5haesLZencWAD5UV9fHvBt",
  "key12": "4m723Phoy3ZtpfuQrmCFCvu9fVLJszpZg9UPHRQ5GtUTRhLr7re3qLbdNpc7z3oHvXXsqcDXvXJAAPtTcqXEGBg2",
  "key13": "3irUeZaM8zf2EgSGgWtfmGYRSBmAdU5wgG2rsYzJZufcSdmPADNaJN8qGisgqa1psrmUqwXVwsBZkPhQtZB6FFvs",
  "key14": "sgDsaTyGqv8ebccKvRDVwkFfEGTVP2CtUmqVaieZ6fBuZiNzqpzAFCGq4Sy327k4JdPvzeuF4o6NdqHJ1p7koAM",
  "key15": "3wLkaR6ybMpAGNywpxC4LJaXBZ8zUFdMrA1vcABNsA4YK1Xyt82BdCvyVpKx1mNB7DeBbxUZnfiLaKiZMmKdwX5e",
  "key16": "3q6HRrvqEwJL8fs5J8njJsP8Sb4hbbrZYFnM3KtMdJnFWRiL7HhD6fkanC2SrDkyWBLhpCiD1N3CHJEnXMyD45jg",
  "key17": "2u4zfzqqDEB15KgSwgvQU89eveJm79Nr9j4RhjUNQmVr5PgSM6BZsGjVASX1UEUt3cbsQNkJkCQUSRbCCPuGk5dR",
  "key18": "3yTd4dWZL26qt34MJuHuN7kiZdRBE7i2PPtY513C5nS1kKHW1ptczBYNeUe7EKaFeFvuSxNSnxSqerGiLbX1b9gL",
  "key19": "5Q8FPYoLxbuSiiAVtwmCiDzvpHGKBjmxm6ivu2DC9SZJQ9jk1b6aCE8EDto9NsoAY7nhXUcFPErHrbZxg8LYY3iz",
  "key20": "26YhGSpYUCaqbgMGMHdyhgqAdBNemLCjmqnY5GxTZLHVDJFq6eLi1v1oWJ79F7behwKDE9aAE1EaRGGPmmPUCLk5",
  "key21": "4RGr96mX7LDsTDu6SdrDZ1BuRg8GcH9rXby5iZSG1ZvoA9q7euwXGPU4vs4jVvBVMRJSLFRzU67VCwKVo387Phsa",
  "key22": "doqYtnb5wZfjFEGpToCzUDubfWvnA7oSLNgYZxJNDoEc77o7u2mSSGtVzSEMp6JqwKoc11iEXSvAGSygDQMqLR2",
  "key23": "K1uqYsKTwns7QP41BD6JSU1DkPsmc1SmWwSqrRktpGoNHmpSUnEiDQ8RxBim3v7cEWMxAdm7S7Mk5XqtxvqHDat",
  "key24": "4CS4X2r3ec46DtZSu7LQ8SURiMNcx5jRxgfWQxjx3S6E6jcWa3zTWxTiTfM2pMEue8RawrtuA9T8DDc9CKDLQ4WS",
  "key25": "3KnpZfD6mNgTeWbvjYYEoyNeZqYPwGvyj5qxCdmojjMUYYqBwoZGxJyYkFhDBvBHp9a7PxgTPUTPDR44L2JLHE1g",
  "key26": "5apZgDktz4puvDK7eNLz8KYdiaSaPDmM31xqm2scKzwT4jHYwigc8V7Vw2EdRXxNCCv2LWnTMU4x7NJQPxmHDcxo",
  "key27": "5CX2qZ8VTYdhaFX7neKn5FFFGtMEJKEgxipRUeS3JQbum3KU5dvuMVLKhCu6eUUSRk2Lj7Jcy8t9tD5tJLdR3nig",
  "key28": "JBXun37dBBZwqWvx4fE5tb5e4LoSTpFiSanUMA1G4ZhJcYgmCuStQBXqPDCCzJH368jRhZb4LtXxV3rikd15cK3",
  "key29": "eMJGwypKxJkRWS8usjzutcQ9iQ1CvLyMHCPA9ZRnPSnK2yNWgkTp6riRQCQBc2vHAVpYzj1WgHD4yz7AKbXKrFH"
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
