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
    "2eahgr4jnUaTZTba5Y5bxYHYVZBcqnciEcCP5UDPXnPV8f4LHJc7qjC9Zs8DR7Ap35dhm8zycDXGdFCS1vaWWzU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rNM5kfp1B4S8UNKE3xtJRpWRHmQYSHjatAav8xvFEfctqLCg4EjBHjhWZBHx8yBsnphGUewzhiXA5gASCLBbRz",
  "key1": "4g7kgQWSzMdWseE2bfSjvJUyTe1iv5bKgEruH165TTSHBqZw8duUxZdWExkXzRfzBzCi4KhbDAv4sCrBdGWMEADx",
  "key2": "5mba1fJza3Fqfik5jmn7xG4swDKdQLPakaJc3pBCKzjLftmMqiBULWkoi79mDBQnbrKJwAAAMATBoRdqGWM542g6",
  "key3": "5fnivRzHsqByDhDt4S6S1v8zrhFZN76SKhC6m7i7enSuPgTfpvwMVF1MTYXBWK2CLhkPzKHVTAVmrHEQm5uYTBma",
  "key4": "2AZzgPmb6Rr5vPkSTfSybLJkqeeR2qSHETwYAZVJkpYmfiXmZBDMqk6vAmGCYvgkaY7GsP1ymkeRh4g4iGrdow9u",
  "key5": "RTGSHuSdrbRCoDuv5HpUrQoB7N29WicGrugEmfvRaXGuyRDo7JueCb3ygRJMyoVgx8kVmgRk7fqnKXTxvaKmscN",
  "key6": "4N9fAmV9xeZjjXkj9xhok4yvC7vB9uLsVitUj9CVjYTE7h35MWxEgPvFPf38SWSTkvTvREb7XrCp5yWSXsUpSKTu",
  "key7": "2zN288waXkzMytAzAoSUmRrQarvt1TtnSBRGaA8YX2WNSaz72Rj9ABo7PBZfYGtfeXrZomJTu2KSZWaawhLDtiSB",
  "key8": "22pAhNGLys8VeaCx5aXg5tEVJZr6qgW1S5XRdZQP7tPEUBUPv1NmE8qAzWgw5BoEbb3yKgBVJodPK9PWoapAWHrG",
  "key9": "44Mg1idTMtnJnWSTmh3Vhcz2Z3jLYMbZ5kYRVadKNkZYh3LnRfxrz8NCEkGqjN7uzpTQQM1MXc2qR3vzN2Bb9bR2",
  "key10": "51RKPDcNzz62EfXf5Xy9S5bT2JSj6KN31YNWKKvPwGBoAtYzeXPtK2sSjg96vUvYc7c8xm3qqERDDDBNc26xkxkZ",
  "key11": "iRVzT5d4gL49SaQBt1fa5UdCfisyVZakA894xSSYymeAvhAZEx7EE6qKyDjTyGJC4PPcV4QLKVEwiJtgLvgVziA",
  "key12": "4E4zGJHUbbZBmkSVhLGuHGZFaEEGpgg9QBqAGKBJKRG28yLEzaYjLvr4BDVQdVTuMgrBqPXM5PJp2xkCX7S2obWf",
  "key13": "5u6bkttTaaiff4cgQUYJVBxYAiG1KFaNuZXXbLbDJ6sFFqv3CHURT51bacwA2mq2F6X76aBSNGumkMSPU9Jejnkg",
  "key14": "631SXrjhjfxQoNTzMr7FhoHryxv6L9Aa3yCx4F69o8e2EztU3JYhoBAY7TSZQ925hCUief9FpPJoArSr6zZgF5Ca",
  "key15": "23izg5kphFmohDYQUWyCcweoh18w4PNDqY56juHQTWDY8XVSayfEG1cyspPXpxmSQmHJ5WKFNGPeQV8JxMcAUmrt",
  "key16": "5a5Tofiy7czpdbRjG4VpdRCmzmUJQ9cqxXtretNGytPUr2gAb98aYBnoJrtZju7xowH8Xf7toC1gxTxR4g8Vv4rh",
  "key17": "34gB1JP9et5uUacPYJtxoFzyS5LYpRYDB7gqV81Dvfk8eMTYgU7KwmQod1ASCa1UmMjz6qfsFhPV8bpNtw9krQwa",
  "key18": "4S5MCpZP9ayH6H3beqF6TomG6TetUWoRLXSwuJ3cKzz3QYu5iTQVpevUhZ3Tey5ZazxUub2Y2sxjjxDuojKb8zRm",
  "key19": "2bdSwM4gd9AvXjaVSAecvA16oWHPtmKq1bbbqfwydrnkz46CwMxTukNNuEFueUziJNMngkZfkPWpruQXi728kBzW",
  "key20": "RfDLafqW2CTY7psgFRNcvtrTfHd79nEA4yrZ1bYgo1dMtXzKf3Re7oqgC16kpMoBenzeLdi8hW8fAdUY6tux6xo",
  "key21": "33wVbcSHJCkNBq6N6HZqLWMcq66Zuee5L5B6Kz7YsygkTZaYKRHCHx879m1iKwgundVRpyUkHRHHSVpEptsz24En",
  "key22": "dN4twnA1rW9Vs7y7YEYjZ15RamP5boG4FJtynNDdZvZUACpVwXnEHrXP3JtwEcbV51YuKPDHnUHgkkX6fv5hV7p",
  "key23": "56cMp6RkYZvgW27nGXs7hivuWijAsArMcbmK8KsAiBN5ekw83ZrEKS6gYvr5sxaoNhxu6yiEHFcJtNUuWjDfo1y2",
  "key24": "rZNUQoW4pEkpnfcmSh5CAyvZRS5GP3CwzokbZSDvMGNfrTjAJjH3C8xbhL6yqLG2CbTbs3fr36X9g2DniSCF66e",
  "key25": "2CQ8oj2Fb5XbYwCkRQjmZrrsQ9NxYth8pPyRHdNBSxvSBhwKT5qc5otUuVNP4us1wujbWFwMETawrjiYZwjLMdjx",
  "key26": "i1nXPMTPKu4gHWMzAdx4Y8jqGhQc1NHRPAsonBE6eRaMexuwaWq4tmNfNXYaMLj57CBXcwaRvuFNmrE23DThtVL",
  "key27": "35jnRBpLi4JL5Wjq7kAjXtvst462dsPwRJyNh89mtnqNgStB3za2kaWZ1B3TNUvc7eDcezjdEHSiK8ZedYVmoeUk"
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
