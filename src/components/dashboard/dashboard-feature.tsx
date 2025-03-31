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
    "3tf9ZantXqvgUR9QZvSLdDV7AtY4YTKekZ86hXBCGvS7abmRLRE1SLBrd4HA1CZ1aCHspmXHvZQBWLTEtVNyzf8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R6p5VV7WfSFGanyKa92D5fWYjijzuAq13UZNATEMnocbqHGAm35xBP1SR6Zxq9mAaow246emTbXfvrPhXysToDc",
  "key1": "2MGmKL96NqKQJMv6LpcHJHX9m6RVaeguJSC9kAb9SkAwnBZ9QrZd1tBs2Rc6k1oRKrgYLpz7UGXZwYBBYhc888oq",
  "key2": "3rp4apK8gGcGcLbhEh4sJdN1LvvoQ8cwsn5tw5VSJXtkohiSEr5eHkLW7YzzARWVmN3JEtzEyjgyK3WChvaPwjxt",
  "key3": "2R38TNAHcGG3pywFLo8fWT2FQpRfZNKBWnQzdqVV341masKTEPJqFTQPLVcSH3d8qcjEx8XtWpap5shNsU4Vdebm",
  "key4": "2oRRM1TYtzqpB6mQ3LpjbaE4EUQstJ5YoT3jVbmsk3btkYBrSaYuY6C2ShwBq14t4h2bo8V89S7gJ7M3xpGkaXc2",
  "key5": "p4QUgQzWQBqC1LFxuoEiX3kSohMNyUVcbTHwwo4u6FK3fV7ek8kWajS3h94WDg7RJFyddBiZ5iHN47AEUFXNShP",
  "key6": "3oZoZzNzSKWuYZgEEwSWH246HZsUB95GCp6FBu396epnVqVcFFANYosRE7H7iC2upFPoY8iDS9ZLu1dh1nr2LSKv",
  "key7": "5kdV1dsPpWhBLj3Es2ReGDxZVvZYEcp1KKQLQbPYTwYkVPqhL5oqUKKqGN6Xbzo4ZB6XMnqTgqdjntWrCJjgbpaW",
  "key8": "2jC1USiLhaHWJ3xwsEk2MrXpAaj2RA8Bpidg5CPQBTkHuvdcEiq9Gm3Un9edDvuD6ueEQ4BRkS196eEQ5e1JxXBn",
  "key9": "5jc3R2tj7V3Zng5jMKynEY6gEsg5jTR8d8NLNRCMxgYMd8J5xF6QKoqk6H1AtndAhGDDX3427ekyMN5tP68SXZJU",
  "key10": "9Fu2VpDdwndJvKxNFsA9qCgdQrsMs1XwtNWx8cAR13C2dEz6CtmKzLofbVreTqk646pMY4r4n74kXWdFqkM6h15",
  "key11": "2dQPrgvvuEj3ReY5AWsYmDd7wFKCMrUdVEazkRNkQ69sivWCJhDyJLapC56hP2CuZ3zQBWuakMNcBzRRtLvks9j1",
  "key12": "5RuKBi9nVDTEB3W2SDDDbKJKpgAHEp2Ph48PPH78i9Rfw5wDY4MhVENSWeehTjgFiNxYpYYKT2woQhEcZxDoHVAW",
  "key13": "3jQqKeHfdcrYxhANWXkALxw84ChXU54ZV6aKkm5q77og27HwkGnte785bpN1u9hByMEXYirLsbCnNhctoQjZWLeJ",
  "key14": "5KfdbYZfgAK4cEDTGSR9LiBiSaZYabyEfESJEmUbETPDrNc1QSQe3pCajz9ZrqfNSowUu2dqqxqP8aFQafit9bsN",
  "key15": "5nLMH6mqAhe4EJ8TSSf1inkEwq1NwRdY7Txv1AqvZumkyVdmdaEcSV7sFLbidFxzQ3grQqLqgPKTXcJqgzAeK2uu",
  "key16": "2YvVdxps4Zbu6pwVNjsPx9A9nUzpQq6Nbbin4HmeSEo8JyEXZVsT5bkNt4ex4d5A87T5Uy1W5Jdr5GhPPMUpNkQM",
  "key17": "8bsdJtDTnnh6CUBW8oKY6Vvit1BvXL9gra5tNP9okaAxs5Y1Sp9QHrEFXLq3eo4Bfge6zrZB86y4Uda3kznQeJt",
  "key18": "84W8PtBKK9E5mNMNxhUoVpn7ABrQaRUGKw18jgEqNo5KmRTkwVuSM179FH1ry7FC72Msi9GjuB27aQmfGacdafv",
  "key19": "5xFLPddy9EqFMnEGkawUKMcjLxb545aNb7w3pdyY7f9YWeCBe4S5xbx46Rhyih245yaraMxrm2ve4rmV8k3zTBFi",
  "key20": "X16XyaoVBAduS2y465Uh1CCMQzLR4s1isZ6bJL1GkWX9Gn3MA8qvMKV1cYeAD5XJtvThw9jeVawtEAWAnpr3K5Z",
  "key21": "waYiDaU31Vo6btwk1rGpG1HnAKEFsRrGFzERmDhyuFutba4MG1i2e6UyvFEVEXDRobmwkdPkVMGK9h4f4VUTTKw",
  "key22": "9GTycsog3H9Db9ihEvf63DnSsTyxW7dSdzVGkSdsmzvKrBV8f2fjGtvQz41B7GyQBSSpntDeamgSButscLjcshX",
  "key23": "4BnGLqjSv9fyZCkdH2q9YDEpfg5LcBNBdpDBQfdffJ2Zzh8BgF9YPqJUKCR2uMhLdTyMHmptA8kETRvEseC3NgCR",
  "key24": "5XMWh7s6e3J4TgFCgag38Y6qJZt8CCtw9h6qk6rQPnejLRm5n29H3A6Sy6RwwtPxNW9tSLeVzzwXYLQ9vVthiKDZ",
  "key25": "vu9PKY4H1jDkA6SmAMJVDMitc6PQohP5utpcbC6ESFydpXR5gp2JqoVmW2VD3fFN3VUo5Zf6LkojLZpkiBK87ow",
  "key26": "jnPTchvnEq1YUSv3ZScq8WbXkyFUVYRJYdLjAemhESi8JuKiLfHy7fC4iBSwnyAVseWvE1Gnim1YdZ1qK9ZNuVX",
  "key27": "5eVaFRiXdgFBRFKhmAUEQqqxXDPaE6xZWPNuReXGHzVQWZQUeuTbUi9JznWzTcQnFnLKWSDLgwv5qJsnpSDb8jMj",
  "key28": "2hNoLRXX3qyxx4VjFjdNc1gFnFe2UqKeBZj9Q9g8VFrHPShvS7XuA2PndSCcfURUfvjh17PoRXLFovKv39ofv1xF",
  "key29": "2H5ikuhJRP2iYsbzMtQWPtsL2PonBBQ65KiZHSmtvw3kND77jQXQx3UmL6LaHKtELxudLYBGcJwVGjpB6CuufgFx"
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
