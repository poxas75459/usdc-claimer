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
    "3GPFZUAaHfDLkiaZqbFypvMw4BhQRDWqfEa2Kq94Nc6AwJMkwQLP93Vy6sLXSVSGpHU1Mp2o8jCunX4cAb6wNXSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WBc8S5Vs3dVe3346Rteud7CpchZffXfjNtbVvURkegY4wm33CdDQAocuNR1v4Myhxvdb2f7Rc6cPcovSJ7imjYi",
  "key1": "3MAFKK9Bha24t55yC9jLAKuXg4PAdaGRCUKESPiKu7hKGiNSvLo4oPPGyVnnNRFBLZBrwkrXNE4S2ctbbLaoR4rq",
  "key2": "23CD1xPNjtKYjkQoEX7CB5n7yA3VtmfryyzrSSi6g5TKsu63ZtDq7QuJHjU9uF9i81Kx7SeSYi6zpVcugATZyvyH",
  "key3": "39t1qdX5HC8q3ofJJbdkwKbKipCdmpd7KxSGKekaiAf2K8VVHknTqH9duUkXrihpYpGsWFRf8YTGbEPyFPMfZqLK",
  "key4": "2ZJsyQU4Ca1QWa42957hzPLY1vBtmwAshzjp7F8LR7sqYu8niSPVtDzYK9czQ8oTTpehevKH3wpDGGFB2UU1d5CA",
  "key5": "2sC6AVAJi3S7tNu28xWk5y3z3xxZ9W239J1FZ12XK5vumEjZ8NgCBqCahpuE4sPxqeahPANfFJDTnwjxkohsJJyk",
  "key6": "NNbREh4DYdVNetFzFLgLcXtzStWzEoCTcLqmcdQHq1QrvXweXRwWjxj73Zs7GFfZ7z1TWTQpGvvcLqEZwin1VdM",
  "key7": "3ESHGdCHXcuKTUtSxebaZyoKpbjGdQTBia6SCVmf1odgf5PizVzp3PAjpYEbUiwCHDTsaFDxgYMgxjF9KimahEDt",
  "key8": "2HfD9ShxVDSF9vbXyXiyKGDwQPcbn8JX3gR8L3oCrj6NaYzbeNZY7Yh3qcp68Zww7THgTXw7gWvx8YewBeX1Jci3",
  "key9": "4FuK5zvpa1X2J76nqFwjPp3SDr8g8BoToCFyXSmord6ypXHNakRuZQ8eFtGANttk5dS2wajHtgo7ey8DSYc4BTf8",
  "key10": "ArCwuuQaeJQeU7wJnKzi3Jk6437p7jAnDshLbv2my7Uupw5sg11AUGvpZUXfsdzJvDLUtAjzHBePRtLuazptHri",
  "key11": "nueAfZjJJW7NEqJq1TZb4JegMFm5af9GyZjbRK334oTmVgGyTSuSxVUh8tNc62stvXoRev1phYRZqcShHnnLsJP",
  "key12": "4Jr5VXcPENiUips2yoNe8rQtB2yLBVkpUB1ScRLE4dScbHtCHFgnG5oCWvRRFHDdGzhzWpuerVnTBYoLyuyKkGXa",
  "key13": "4cXePwAeEN4ojsbw2dMYShn4iTmrUu9aG9cm4TPYs1eYJZyXiaC5dWDzdbmQDks1n58CXZWvJTRJ3PdvNPgZkt1d",
  "key14": "4BzDYxeoqUczEmdLtkDcw3hK5bvdRoM8ay4JmKkeNVxKL9cw9Brp9kNDwF21dwXhajwHmMgymDLvug8GSSpqSvY6",
  "key15": "5UTZ69iUiaYEe2VhZ8C6KmXDRXnpwBvZ8PKWxEH12ZBfM6LPvyqKTtT8kXVZkebBLitCSPk7DkqZ5puwuF7i5JiP",
  "key16": "21dN7NBdLcHAg9jCQUwBtVPGxiyjQqknP45TF5KYPsUS9Md4ifwnNckBH6ab2J24vUj5Rdn21PuFY9fhXD54YPNa",
  "key17": "2fM2JAc8Hg7wmJHwa9UXCuptx5KzxFTAsSDSuKwgedwBartB8gyNJZbVcfcoA63QVDLH7xvTpi68Uj8LChBiqp2B",
  "key18": "Mt6F88Tsr4UPsrdQfh42TP7cGraCt3R5RWq7oT8Z7uZi1xkFHLKMD9bdD9B8n7Ssc4noJx8ZYCKpizZP2GHsbYv",
  "key19": "2sLcC5wrGWfQj2fHrxxLhw5TwmCtTQrGjU7qW9ywLnxB8MsppFagDtEhy5rLXATB1pND3WSNVtVRjqNLf8Y6ePMc",
  "key20": "5DCvw5ypsVFh729Y4jmbkDgSEqaD1hHddi9BiXuWBuAE7ci1T3TuWBo2BnkuDUmBzoWRHupLwm6bAcayHmuTmE5p",
  "key21": "3urq3sAtJuQmcZcwkpysFS7JnJ9zXrFtM1epiXhNs4tuub72iCpd1LxVPBhr5Q1BydXA68UjEj1qvi2rPaC3Hiph",
  "key22": "4Cf7YysNhbGMknqtfRfdy8cBsCgTp6Qw1n81oZt3mwzX9ipHF7NQm5bQbywZYJUhaFKztvLwjZSHPnxXZBV9U7br",
  "key23": "45dQnveLyXas4iPmdAMphTLbNQy4Zbh9FfGqpjjNm9VManXGeixgiMoxvAgc6Jr6gJSj236txC88wQKyLecjr6SB",
  "key24": "2gA4A5DBzxfKJ4sGvTkYiSsJFjM2ZfwW7KSH65qn4ZHePpqvsMTxvHGCTuCm9BpsAsRwTJ5chhsdVbD5C5Q5dHyb",
  "key25": "5aUHviC1Z1w7q5jTpFW2W3iQ6z9kWi5jLFqURYrRnGeHh7VGe4rkpdpPQWYjj5jCSz4nmoqDrzudkD1mZDcLRkre",
  "key26": "3GjDC6vVRuoi8WEdo6NKxJ6oUScdb6fAkKYULnNZAhtr89ze4jfEzeHdchr9uu1Yyj17bJsvAacVkemvkGsFvAMf",
  "key27": "3cBtEnkQ7vURJUncDMDwXiUzJ8thUExmMaUjZBFb2zD4LTpci5A6S4MkSbUy793V7hpDLJJHUzojj25aSzinUd9c",
  "key28": "4ayr4SiVd5h9zGRPc9NUPv1czEDHsjoAMyHeiKNL61pUJYYri36dXBbjaoyMQf1pFVERFuVdNunTdcHAD5QcVpHJ",
  "key29": "2gZnNmVA3inNB8rxoDvWo5ubCruVyZQZ4fn2MZms279jDBDPTKiH6RDUyLGcpqgfEXu1awcdVdYeyMdLRnrPP7PK",
  "key30": "2zPqpRMWrdvKnzR2P7JmsRm49aZjbRdYw21juniktp2VJSPbF4kFCvgMNtxgL96YLUagAcmzxPbLxQi6DyN34HVR",
  "key31": "32DzzgqMW9xCiXbCi5AonqpWC4iSqWGr1mJbon5FuCeP39ixV9ThYEe5ewn7yF7huSkx5RpFr6PyXZ72dZSW7Z7E"
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
