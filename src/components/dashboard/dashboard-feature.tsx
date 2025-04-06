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
    "4s1YGfzfuaYCKk6QTwnTHYoxFo14bKdPK9Hsfiepzo8iDw7AVL7yyeZxKBxu5cEV8nsVdxadmd8i4Y6NANxXMKGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r8MMLC81ezkPThfGdKwxhu3BTaYu7midKXGY9CBP1AjgUi5rKXSabsrhdzrGvs8hUuNZf6SWiaQS5U4CTbQd4A5",
  "key1": "2ptRNMw941razEQpf774XzTx4Wg7NBHsJgAgxrjD1XkqxjAkSGJqQtxSB1eCK6YEWtad3rSKGPXYwoj1WpWCRc33",
  "key2": "33FMDCgK5TiaQ6LSfBA2ie4RFZa6wqZH4zvH8XRF9V1Wci8MWdU9mLcCUo4vVfvquhSrwCrZwmATkXyfLuqVGmwC",
  "key3": "2Qjk3bTvpRkQCm16a97SMSNQd62gM3CS3Qv2DAukRZdk1KzUpxkwUSvnjNHqKJ4dADRNPU6W63pcBx48SsrVM4L4",
  "key4": "4nzZZdRpqtfbas4BpoCjor67qXsfqi847J2VCZiwi7bKWXQvDuEBYFvJDjwUC1WBYUiuGA1WPSywphFKSceVaxiL",
  "key5": "4JcagwgiZxVhDM8MZyY6vnH5mqCG4iHFTCBTMRJBJ5Te55rQC2SDZ1tFT6fsuv2CUJFuAEfCSLQC96siV6hmi6Qc",
  "key6": "4suiCyDxDFS5wNFeEabQPJLjCb36ZEqz7JoY9u8QBtXCCHNz28PSvsu8JLTNFSNAw9jfgdtko6bHvVujHG1AHKT6",
  "key7": "3tLPp9E9AiMTyNdngC7Bse2RvGwjK1UkqTG6hFJRivZCwG5E5xxsQKLTxmzd4btrmfUPDcj4S3py1SLUNrH8jtEd",
  "key8": "57eoVKCBuFP1EnaGqVVXdNdN2Y6DQzyGGNs1kcMLVyvnjoWF7oBtKR87frc3fKJLZZx7T5pQNrWAoe2R2yRdqLqn",
  "key9": "4MVWYktmYvAA11HuvRTS5tVsD6EoDemciSBoqiEbUz1TjDeE4rPAMfZidXGyu1YTXyJiNXLuwtTyMWjt1KvfwNDC",
  "key10": "3t7HpzebYPYbzjRc9318q5cptVwhW2LW8WJMtjbzY4ACjE6Dsx4auhtdM2six85xP6QFShdTnpPm94GCRg1EtkuT",
  "key11": "5FJY2Fv7xTc3Ur5tpqNZ2E1ESyb5srBE2934oVYcSCEjQMfwpAejHzmn7o7TFpyszRrBBSL5nH4cT3Q4oBoXY8mX",
  "key12": "3CCxhFEcznheiqWn7hxRXEjkBhWrn7a4a7JCYmkSme71y9mYzktKfrGL6ksDp7xu75smTUqWgAJxZzTSqPmyFUkn",
  "key13": "3J3YqK9vFxdNQigncfdvDk4eYT2J2WocB15UBVKnkX5ZBSX4KwdUXDDg4KmShGSm6XSMrZGTP4smaRpzACStLgMU",
  "key14": "PCv67V3sASBK9L3tDqwEoME5365NRDp2udpSd2xkbJ6XQ22jotnFadPZGDPuTShR4gbftdhBdcKsngkXZar6dan",
  "key15": "tcDm322DYLpFh5vVeUm5QzyeamPfKHhDbMm7BNyZZjhd3yjzo5MnPsDsLZAy6kHouK7GRbTRzwg289tWBDEEG58",
  "key16": "b5VXtHWHb7nYUS3NQ2c1cAJ9jsd72FzcM8a2wouHCN4JqRYC9LyvDzQaY6QnPWNbrrJWjBRJvfbMEXFjbLoNyhj",
  "key17": "5nrYJQtKQrANuDCeAoxrnE5ExfcNz46HMCPme9gG6NVfZWSoJrFGWrNK6CBD713XAdcdpfyc75vquZHq8fqYfLpm",
  "key18": "5Ez9fqcNb9CgvSn3SYzXhTMrPgprUyhLSZEiEuDV7fpo6ukVNH4dRKeFoQE8ZBG6t5fU4XEnZGRqf1SGii18Sk6",
  "key19": "2hZXA8k5ZDiQAM9niYHPrBUWJvCQnHDMeHZW9B74snZvPx8Ks7bYy65dgXSfHnrRGqJaC51pTnqgmA411XpQYLDq",
  "key20": "2hrSiDfqmbEm9Eq7HbjAUDt5RtvUT3YYwx8oB9w2urJ3EEUqXUauYEECYjWibCXWXW1LYvg1m5viRe71tyXj7zns",
  "key21": "3pccvNmmN7QqA74BFCsrf456EFzKJEBjKayu5cm6c3dSv4gkXRLBDHnoRecWXajLQk5YgVrvPKv8ckjchBjrkMvF",
  "key22": "39gmwZgBq3WA4zzABAEExJkA4PWpkMPnSK8qcSWoC2J9eZbBCPnWKPaGZJMRZyT8YxEFkJiVqBMLJDNUpDr6bBw8",
  "key23": "36VzG4kUYLkGrycuTfKFruvAc8NQth5tMyT1A8TcPWLPx1eNtwYSy3JT3bEzaNq8YFyk2Uth8j5urkEdtqBCmnQy",
  "key24": "2NvXGoqMJA3TcVoKdcEkBYG5PvbAWrqXMnGX66FoNPP5Ga2uYPqUcajGoMu35noLWA8GcAFD6qNaAXVojK3rGr8f",
  "key25": "5iihiYrShPzznTx8XSCjfT6QrmCosTv8bNAwufmJq631LVtUZ8M7y8ghNe5GEtjEbT8AG82dYnxHWTcZd1Z6FAVR"
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
