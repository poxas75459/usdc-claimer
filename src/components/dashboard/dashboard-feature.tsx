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
    "y2pWSsyj15jnYZcqLjFeL841NBiKGuC58nGqjg3yMxMXiimwo38XqUhEhTpXCsfM3gvCoYEoWTomeeZeFLMPN48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xUbuTWpvPTGWVF24HyLVsLGn9fFmUrLQi4i8UKSjGm4pjNb156FK2b4oaY3CkrauvWHakNH5TnD7tcttmpikVb",
  "key1": "42ZGik71tyjch34x53AApEpoMAVz1UXXBK8jQNcTx2mHGGYSctvHpMd5E78tuEgWeBy9EB7urFw8czBaT59RT4xq",
  "key2": "aUTPbnApA2KFbbhTBX2KPDBNWKj1eDR52HqmMTPsdQZ7E3t8Aqhr4FwemK8h8EeD9sj3mA3h647rWfY4S9Q3bD8",
  "key3": "4Hxzyx5kRn8h6rDvWFhrucujsDre9f76gdHaD62XVy2nXCKesKjXNjctuUAhjqdMUAtCexSGKJg74W8LoBRvBUWk",
  "key4": "FWNUyfEZt1VjhE5m9rTvKkKePguSo51hnwsUnZMeyKCVJjeTwzfUa2GypC3FgCmrhJXdhVzpfZzmmwXSrpqdJiH",
  "key5": "5EHLk3Ev4aGEudneGukAT3ciZa1DSToeF5soPyAQ9tqNUF4ZvaW5gHZ5y1n7eBDuyzt1KC3MxhmhM9RKpCuaNJFs",
  "key6": "377eNxiCkUwtTWzRGCraVjNf8i9D4wJjuLakqZiYoVQn4UP7QomN1JFUFFo8HDKFQ6FwUp2XayrP858hbKcJWiHg",
  "key7": "47k3j4veBD6hi6DK2TFnqYsARHBM1w9y5RLAJMwXv5rxUCeQ6vhSABjycroKzr6J9E5gWvHJujCT3GPWoTZKN7vZ",
  "key8": "2TCCjUmxVEQAmmG98mBwptR7iK524ybQPcqjUWKC6p69MWzzr8sj6MWh5NeqoamoHomSqPorM4FSK3WmJGPkUPro",
  "key9": "NkhfCar3nwdXdUUHvm28a88zwv2hDQtY1FYvGAmU7Vrh3DdAkit5nfFpQ2y1ieQye7t7Nu1WvNUqAgSaYe1rpEa",
  "key10": "2xFp4qqdekjLmEUG7Hb8H7qVHy12QGnupB7z2uh11md8dLC8nPVL8fQLBWkbrvqR2PUfoEcoB9VBUevQjvXUeRBy",
  "key11": "3MjiD4qYSMTXHZhTtoZoTJC2qU3QjX6Yymy8Yi2wjau3P7G4HVfbPoZFUCqoVsW4HXMmfUS4Pjg8i7xw2YktdSMU",
  "key12": "5qUcxHzRPThFErzhVdrzGx5LiWQZq9DiEhGD2ufexF2WHTjDLnaWUpLc7KukjzZ9Fz73uamPQUomtfiAir4y4ips",
  "key13": "5thsf5kzdABaYvPGcjw8cHsCRaMtCnRKS3yuGSv1ogV6RDRQ8ZVc8oLh1x2L6eHjhE3pbXRQryTwq93pfpTzoiT2",
  "key14": "3vAkhYcB8ZRuSXbh78uUPNbiQFBynFKSFHhafKkzjjkD3fJxqjm4WUeep7c39mkKSLvbyVYYqepPbeL2qH7C9CwX",
  "key15": "4YHAiMquJj2GsdcqyTGJciiVKW6asssg9ozCWqLVnQrVuBD9AJndYTopGZt19kmFFuE2RCCmVbX4RprrPmCbggs4",
  "key16": "385PDt5yURD8rE2EuA6fhq5jVHhFMVMz8CAGu7FNTCgHP4eizkgtdFxPExWa9tri9tc2Uu1RmczsVTHVdB7bvE6g",
  "key17": "5Rp7Mbq2hjAbAwgwfa1GmDjMKgBPLPVPDYddnWm7miHKUweF2NURaJR3QC36M8ynJyPk2qjfLmvKXs6E27a8XKdt",
  "key18": "5hXhBcLJdUgK98LFTs9rqZSKBbN7kS8gN1S2ZTwgJMqxjA6RtGAdKdnec1kABjgyuSmHmWcLKMD9wY96dfqAp7YV",
  "key19": "2oi2659t9F6zQ3sQvjDdAxuYepnR8tDQrLjfzW66Rm2KCwc8C8LzyPVP5PDbSFm4WNXCnY7hydQakmnPeHueyTg5",
  "key20": "4bg6vqdhm4PrTEM4WgZVEASrckb4VMF6wsvLwSuq5ryjMTW9CykYdgZRboBg9RtcDZaQP5S4s6Dd4Y51TmiojQqc",
  "key21": "2AiKfuU1bfMeixwUjDK6Dnz8mHKVZc3UAma1TWXKGBicv95sDTcwNEH847gJBxeuWHxAdZiXCxrLnkgs8Y7s8ZtC",
  "key22": "MJ7JS6FUc9wQyhDuTxX44AnhcM7r2kFTP1eBiNCUm2XhKzjw9mbJw2WkBjPb12RPvkd28Aie1GSEw4jtMCTFseG",
  "key23": "kuu63f2VQ9atRRNKDz4Z13fPAxznJncShZJdr2Wv4kwSNmcc28SGaZ3CWj1LaDf3XSgUmKQM762pMav29mWW7co",
  "key24": "45xtRfzqZMyyiJe1aMhTjGph6YXcDgNovPTSrnGAbH1EEMXznnBe8wCADmBAMgSozgajVpceqfiMaw6vzAaF4QBr",
  "key25": "3xNHPUNnJk2GcgJ3hi3dPeUTmYchddoiRDLpfbGH3z1k5aHoPhoNxTt9b9x3Ef3kdfkpo9VKYYLHMA1ZSL6rTSpd",
  "key26": "2h3qqseFgCRE7R6Fh2bS7Cb8zda8gXU6KBos9pNGu2aRzDGziad6JUzBSTei2hM7piZU1vzwvDpQgeLFioVEFCmc",
  "key27": "2kASDe1oYy9KyvLqLhm52Uz6FUZ7NMfL4s9xHRLtVHy4UvXymHCsFr5HRnrpzhSFB5xyrLBEugiU2S76DJVdP4vX",
  "key28": "3TRf2PQdUDAnUM6GT7esaP9p5k9ACXysvyuSVmE1X133Mo6ZfSjtHbid3V1S6DNo9odkaQKEUtvH7K9rM3eeKdPc",
  "key29": "46rKRrxHCNYsg9yt3sGQvPbAipMnXPfFjCLsZcdUSkdGo7UGMjmYWkFagEAEiepe87JxmkRB5DjNLK4JeDPuxTn"
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
