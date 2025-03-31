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
    "27k4BzCwDdaSELGFJPJ22ya922PXfp9Vrn4dWpPVBzZPdq6VC5gaRhRvNS9mPvGuTjQwZDT38itJ2SYyJGCBWRvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPE3Sg8ZeeyC6x11D7nMGF8QDZiVSk7puQRbLtsn7kHjtdBtXwQbSPMTFxzQ6KGoTyG4ShBrzxTogZFQUPgzTLn",
  "key1": "2WK6g7rDSVFeMJNSMVGKL8agm8sXjiYWFtaebzbZUPyXLWPqqdt1CsVhACXQf7jrf1DozED7dMrV2wMTkozmFipb",
  "key2": "387bmvacs6HtF3FspNgoA9hbk5rmyzDhu5HgKXFig7xwFYGpc8nNg9Sfr6SeBqc81yYXKNH41h7gqN4X8RK7oiuV",
  "key3": "24UrELKqeemkLReM15rjaEgfBHYv6P5Efnwiiuy5XdKeeqL7NNUcwNHmk7dpQGJ2LBHNjiih5kzJo4kMbnQYnqS4",
  "key4": "2kF294SckkQPafSdX5tAU28nRm5zaq5LetQWCCrAbsKe8aFhM6L2pMmtkFv8ZF1AGFLxEhLyVXdJdwmgYapopDHV",
  "key5": "3Q3TXzTjCrt6rwUzZ9kbvRCmM4EWB9q3dqJqMymDSg4GMBt5YQSsJqoHNuoEATWSqccze53z3G9r5A9cVfT53oxu",
  "key6": "42NwxZLUXFCh86rr1mBVDm27AtckqKMgMcugp5n9XYfwStW4p22MUw2qW9ZcbXB93uay12jbQQNQt5kv7uUfM1H9",
  "key7": "f9rB7xLq2QiPcUYRUpk8ZHT6ynNiKey6HuqoL3cmMJNwwZAivCp1bSA58bVmxxCVsvXapCvT9zPPoTka7i6NSdZ",
  "key8": "5oA9pJZveQQc2YAgcD9yoUDiXjx5DUro5rwAqYrCT2a2dco4UH7PUH1BeeZh5YvBZgKgBoJWLA8bH8AjMAUbnGpT",
  "key9": "3zH3eBTRxVEdfPMndrqJm5yoGb2ffSyGzZkYaDwwQbfkeEKuwyUFry4nHA4933tzhS89mCWUa4Q5cT6fFrbdAj4w",
  "key10": "55Y8eUosnp6ewHQWpWhmg22HVDABjzF46GWAfiU2VXksRgDpwhR4AYGm7wYAbyJnKhRxjngRT4dEScutubAWj5Rq",
  "key11": "4inPuBzuEnSLLMbHu9Ka2fJhSU1zApvPGewkQsWPtg6JY1ors2mvGgSqcEBqmmv3UFLHVKnnuebWnZaLss9XJvBV",
  "key12": "4DafhazMTtZqjrvSQHDr4JQxrCMQhukrA5iQwzN8Cr3K932mSVgfMeWMoF1kZquN8m6oDPnViBtdhTZC9WxcgB3T",
  "key13": "4XtpgXE4VJHGhXgRUL8fRfSGpxakoaAtUPo4jDnr2j8rJYJMDwQJD38Nbf63aLxUKdvNCGnm2kFzpJHiXaFXSQHw",
  "key14": "5p4PTuXvMw4dxn2i4KFPW2CnB39sVZ3CqUkFxtm4fubvysm2vnqRywH7vRjcM4YkhgWDJDDSBK8oyrTcXk58d4gQ",
  "key15": "32BTYsMRPV2DFcyUZCJVPN5JZZxgPTRm7K2JECpD2QYLHEurKJZqSE5iPgk9RkS79YsqXyB6xMgSwUWK3qCdzX6n",
  "key16": "4DwsE32K6MzAiRQpQe1JZtNcaYjsw6aQz4aBd4YvR5Ex75b7vWKWVoYtKKSVajTkLD52jSiiB9mgwgR8HSQDG81y",
  "key17": "2poykYnhptgsaQGGa7ptW4WZQGp1C4GGxrwNCUaaYz4GJtiGZt4psRb8d8THdUaepnYjV5FnExfocSz6Tm2EMyQf",
  "key18": "sgA3ZFfRRZwHkMor6xxdxq4j47NLQQBJwRcR2593iidq16tq79jkrWYLUgApN3hay1AS6Kzsx34mbcuyrRMubBr",
  "key19": "34a9x5V9ygymBDa5DshPRmVJrAZnw6ej5MYZECvMTtrFGReVJE7CJXU3zrSHCRoRHAGPkXo1pup6sQAhXzGkSTjG",
  "key20": "Ns2F3XBZNmx1xJCy95TBC73ytN9erTuztzScXy2JQ2zsd9PAHnMqhY4spx8dmBXeLdtWXqyMENt3WfhopPVHktR",
  "key21": "3iq19GZFRi7bXBpYCbqWevPTZVuDLcDx5PFiLc37tewLH5NhimQXGGv9Dr76MNYYYx9jytMeM7DQW8riK4zaMSt9",
  "key22": "2rAQN5vFwmJpgZ5Q1Mvetzwphf2W3LF7vaavQzmxgtYFrnCtUNqsxJnaSocuAkkfVTCwy38S1rQEssytfyH9dJ5H",
  "key23": "5DbVJHsuEzhbopKad2ohigTeq8uZ2oTQRTnFHbhvDGPsjipGfUcZ1rKrk5ZkL4LtiNPS1iGDFck2fKetpMMz7nYm",
  "key24": "617kJs5tyKUeigVWADcuRhSYrhoo4AzZ6f8pN9outWb3rgeMoM2UTsK5X9YUE592SgBmdvQhBgocBusQ4EvP6Zi9",
  "key25": "u93QLDYvpQvBKScteDyawgahMoCyC3QxvLXQx1Vgez6Xbhf3zbYWHgCvTGub2TpDWDcg8fQFPi9cDrwaLjyc1iQ",
  "key26": "3FGqG6q43fqoaDFb44WRkAHUgfMWuQxKTRp76G95CMSYHNQaFpcpspCigC8gHru1UaAdfGDQcAkcirDTwfKPXC5u",
  "key27": "5jJwELqmo73TFG4jDrsJuE3EUAJ4ZStrqxReqLW6RbBysxbBQEPrvQDEKwnqPo9556o1eBeLdKMbfzP3wBpEtXr2",
  "key28": "M43rHTQcTRd3LWSanHB5JcgWBjCQnxHZP8VLPiGJHfPgkrMr5tpJatDUXXWoTqrCa3L5V1j46PnysGxdNFvk6xF",
  "key29": "2S7MKRENjYyW3gQVyNkP5M6aZV7ZDwKEU3iCri2LMff1wuRNeUDq25h7b2mK2ArgeFnxwxNoZK9SPiGWrbv1LRvM",
  "key30": "26kEAFepe7GRrb6jCktkoP7EW6cTPR1Etq15ytq4aRqSeUvYQwz7NfEKWohY6G1DRxQYkP3XpcsFNqZfS5Pz8oGg",
  "key31": "4urnV1WBExLQShxLZrPwJfE74pNuP1qXfdDLXo84KsYYvwrLv2sw9XF8cU1ookC7siFyGHjTv49CwnbA6eCGC7Ac",
  "key32": "FzUq1QPboSfx2pKbaT5EEHJYgjxvBUJ28nbofvoZsBRWzAJNd75Hk4tCsCqMbrdJqoXmLgmo3pPcBiu4x9DsabJ",
  "key33": "2Bho38voNfEXuHaDfy5V6MBTvBBwaWEpBZV37PWTmA8kJ1mWU79azprFTwdY7kTQMcyDoUUwBmyzNTb8HaBK4NNP",
  "key34": "4TYRYaG54MehcxYBPXZwxKMkyC7n4k8ZvJu4AqczT84KCK821knF8CUgavQTNU9qJjERuthfjiE15wrmwigZDebj",
  "key35": "3D2aE1EjQZSV4dtmSHzbwFaHhYfnoWHBf4wz842XXxzGjQK9uTA3XNxAZMqSDH8KpeCAyLTctES9XF7zV32iMo6W",
  "key36": "2qYHrMasWWV5ocXRkrYTLjygq5pizt76jajeVvHN4CokSwzinNRXgNC9Zo8YUp1nyfvTX9tPKhn6wuYe6gTva8i7",
  "key37": "RMJobQXiTsKS7zuSb1ZYRMdTmr3E4tffBvF5w5n3hY1yMUqhRe8qBGd1tdak8ufn5F1jDXGcy6MMXLtGtH2Zjwv",
  "key38": "3fyoTASzbkmqd5WY7Y3rAwjiuxtqGSJiyyM133dvJzAjJs4CkYi34x2B2NNXGWYuZFRwwJCczNfY9m8tfqxHSRvZ",
  "key39": "4ZD9ALMD9VwRkUWQW4zmUvtiwZRX4MiDwoJ7EuERcB2uMbjLUexHDF4btqU5NKcZYMWAy8Vkix7DymYKrNTSNv6t",
  "key40": "4hTuK4aNge8qtJ5ZopcBPy1Zb7rAnkLtmKeCGUGDXXWio9zfhf8dtZGTiFnAeXZyVWRrc9ui2HGsDkbUABTDWF4s",
  "key41": "3Dhw28cY9HLErPtXE67rJHKBsGjxfN6Nv7nN2XWMJrmyLbKt2TV3r1MDSEQgeCFkToE3V2FabqZarpRhbBpV6epR",
  "key42": "4vT9U8tH9UHFeyHB7dGbrkQ924e73J8FpARSoA7V7knpi9FzsnH5hH5qZm7NnR7pviBQULjzkV7GaQEA6wPXMTrj",
  "key43": "488wofqnAiAuJb6X7y9ny9uSgd94GxG1QiA55oxt7fBqbvUrckDKX9UPsb5MS7YnLGxv5bM1jCy26qprGEb32vJu",
  "key44": "3AB9bPeJFoPYvhWLFvFmx17rtanxc4WM2cbz2fg29fFUxwEMfbE1Ygudf6p35azLHWfN9pdEEdCzDMWXKAfxngu3",
  "key45": "Njk1wiBz1BgBKpyBtDRC3o7jvAX2BLZNRPjgxhWtTJvGCejZvQuZUz8bGkTxgVHJuHYtevW9mrUm6i53mtUGAdt",
  "key46": "uDeT3sXwjEpboziZ1W3baTckvKMGARzFAsWRiR4RNDa42JuyRFtMF29aygwmbx8MJQM9kQ1R6JbfhjqHdL6w5Fd",
  "key47": "33TpKAEWdevsErqUGXcEJUs8apDDNH7bZmvgfwBouvkMmRLVWiWudQhcSKRDZCxXFcubaYJfFYqpdMSjEH5mD6NV"
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
