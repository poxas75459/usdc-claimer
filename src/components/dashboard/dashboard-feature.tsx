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
    "2FRa6SpYwud4rVPzAp7oU5KGnECNfcMNhkXkn1dU9y3AcdcLaqV2qF1BgpfoaYQr5vmQFq6u4oiqHSqH1Rvr58Pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MpztF4z5JUMg2dh9wwo8BRLk7552JP9SxZrsk9CLmgNU625bdkoguWkdLnGSAN4YxwNBKNnMpKyPiDEhkN877Ey",
  "key1": "hK6zHPBwPJyjRWNMfKmTAFJ6Kt1hbsVhS7i5EEifxSvTqFAamkRB4Y4AwWM6S36izkxaCaNaM6Md2yB4fZSvEhd",
  "key2": "ppDUX1ZuGepE21J14vx3biS8y4N7vMaTEs2Q8ZXQLE5N1XKhKH9DqFu8d4UwzhGTqRpdqM1dr2Npnefv6t94eY2",
  "key3": "4K8T5WUAQfbJFLvpxArZAGnZY9ZRJqRHax2SPaXe9eFC2iiytbVyHoRKgudZaUeRkYVEPSXKqQXKTtChNP1V7wzn",
  "key4": "5Z7dUAxzQe7QJPFG9xqFKEFD5CTSM5ioCH92jM2Qt9nMU1KULMJaVLMN8gZFBh5jMUybj3HEtTHHAsczjqv6C6g9",
  "key5": "KnG3sSquL6CrX525Ba8S7CZaaZHjoGaudPVpTKCxCzbfGGyCaHxdcjRGEPoZNJiPeGv67xJeKu8SBxqHXtirexK",
  "key6": "2ySZJWPrV4AjWF6pNCyqxvcJwRRJ94ysBWvTAeYZNbnH3uBsSvP3W8MofNTnuxrSxZJwEpcG3Q2JHeRHuFLLFH3C",
  "key7": "4LaYQrdh7gfcwmGpkUcn3mxdUFjM85fzLwtmvSf4XTACYtSDHP8vig7vzVSM9K6ntjS2AHEGy5kvgCueQM1wACMh",
  "key8": "3qXiznKRX6hw4Kr9E8tuzCRFSowXgNx4RSFZ3ZY157sNQZHETQDPXRTvjrJKXJQjinkk4MLKyS1a4Ux1icLeN5HA",
  "key9": "3NPsHrrSvuV4ajsHbaGx6kvS1q8vJth8DnWsN1mp223LUFLWwo5UrRG3BHEqergFf3eSEcdNsfohoTrJvSGLf2Le",
  "key10": "cYK5wdoRA6JfvCdR24DHNwedd4UBcWoSpkRbyKZUwUSxqRCUdx1Krrf8D5XsfRuxA8jjbcQAW82QKzvmWm4xzb4",
  "key11": "4cEoozd9h3ZNGQQXvkwwaBzymtR1mmyNZG84dTvbChrJoNv2KPqH4B3eh8ueX16zTYaq16aooEZcyVYiwEFQqqAn",
  "key12": "5Wo7KWQgf6BrQ1gUNkPqLbWiEXtPN4WzLWoNb2hsHabmCFZqoErJBHjz1LSeuueVBXHGKDrq2hDyo4hnifmQR9q3",
  "key13": "32ofaMnvrse35oGhK8x8Urypvec7yUEfYmzFKoPcFd3MgN4waNGHkrHZRqPDw5vfZ9f4wHWQvxo5tLqiE7zAAzft",
  "key14": "8M1DUJVfQuWHsKfZtMt3qmzETpyEFwS41GWEX59TfBc4RJ7iZH85vAsDKmVUrskdVeAKYVSZCLe8SUSwk2Mu8vG",
  "key15": "3k6BKpv9mNEn9NHchk9PsBdQ37cvB4moRx9XQmri8SWbx7gj4VZtUymzi8MN8wvukcNEVHWbJHXCV8EN4RGKudZ8",
  "key16": "LYx9GEW5JmdmJEH5ooKxd3Y3XoBovitc5JfPCuegQj91X6Cwcjh1jTpsNP5oMCc2Gwub169Ang3Q1DCTGSh9Uuj",
  "key17": "5nnbNATVtbaZj7uuBtyY3CxHqxLdWApPjwDjJQbwMciap69cgv87ZDiLgh44rG8Jyc2YHjNrWFMgoW1nvq3upSUk",
  "key18": "4wp4RZHyC4b6Br2NzoJo4sLvWzt8MpHntsjBW1vsiVRQ5NKpgrwZN5dWBye1rFEyF6CrFbHVgjJVKyq6xHry81tU",
  "key19": "2cHVGhcDegJU2XUzJb95s9EGE2NRMDnGMXyMrabMUSL2piDzVteY8qCG34cC9EQf2z96AUnZzcupvdBEi2vqpSYo",
  "key20": "5JqWqVUAnvj2TLfRcgaieBrXTEZqBsz86BtU9mjeFh6c52K6LiXbzH4NpsZNoapLoopUifvyMiUS5uJZLSYsskGf",
  "key21": "5U4X25rPBHJvCXwR9Yhxt5SVemMgShGAZBPhgEdoftFnabfLygrgsQCv8cBvmPa3yBAdYB8dtGSFLipgseTuxm5L",
  "key22": "5Kc1QrvrNQK5rPfmMrvtFp5hcJ7qyG13NrfiGrdGj9TXNL5j7gihoP4LzmtBCSzHdfsHSL7X1NzDBuTi3HeS1A14",
  "key23": "4Lk6gUuF8h4wQcFkDa3RukHDTToELc6anntCfH8uLnK6im8k249zVqorZnL4776xtuBmNA46PbUGZPvdMik3rWEo",
  "key24": "2mVYdFaq2vh2ouhP6Lb6ruuBgTjmUEersWtmfSuZirWXsZbbqsUj6wy5eRokZbwTXX1Jd3CmKNCgcNSmbiMXyfg2",
  "key25": "125rCfowmHeSjxGV6VvscybFRH1G7aptKWYrUJSmJjDsxKeJSQp2Jg3qWEf4sc4dpUxbd3BsmH7yY3dmp8saTvbR",
  "key26": "3Sp6gND9hnxRydmK68gbASFVDwDUhXFPgZDcvFctYgfFNkcgjdZ4CCkLsKRP7NS8ncVk8maidxzDHMfNN4jdSGaP",
  "key27": "4nywWYt17jhJYwoyFsp4Mg4S6TCPr9NevMUFeBAfuTJrekoMBbGbQ5rvn6WiwqRf5rRnZWQyoYmYiVt3uH3Gz2rP",
  "key28": "2L3VaGK7FLormpdcmiuqdwFLPrAr7q8Fx5zSL2aJnP64Rd3brmu6kqPUQRzicFndGuGfVXLzGCcRGJ7oX4ut5Vuj",
  "key29": "2NAvi4MDWSPWSXeMKuzeRiEn8Gmi3DwUdsaBAHCZJ7LhyN7XbtsXK6o2kwq5E2LvoBjwmXhiQGnVU916V2DMCoFp",
  "key30": "4hc2joUcbfQwZrhQpz9eyUSz5gce7j9MUJa2YFxFxyzVawPas2db9tEANrEu8aKkqHrdVz3mvjEeTUp4EKLpUQJJ",
  "key31": "24CQLGyE69WfB49fE2evmDwVJdJ1rJbu7VXvREnHNqbfFc5doALyFJ9UmGy2Pb1W2sqUkQKJuKuLraNxWg5C4cqJ",
  "key32": "LuFwYd4BMKZkBkg22rZAT31nKz9NGZvau7ExutF9rdUeoJcWxaDvKnpma9zzdTywECK6cHACpy1w1TURoeorLx6",
  "key33": "5SLpC9adcWkguT3VP2UqP8gGt4LosWy1PoFrhfXezCLzKg42xhempT3mHreRa93dKsXkmk3gw9kTJncqkEzCpcWf",
  "key34": "22CYgMgqMuwmGciM18xWbwV8ddnvLaRRpa6MZHx43AoESi2fQ2b3ApimZnTmm7LhbPTz2H9bL8mbKYNNC37AdNGi",
  "key35": "4DMkduex4d4G5Kjt9CWVJeFS1PN7Q42fkHXyUcZYMBv17ooTtiLsWgh5cDmbZndEXnH79kFdkzusaq2aHwrUhHfy",
  "key36": "4PiELMAMF3aA2sjCYmBdgusmiY3ZL4qhneZq6iuR8S5gAzaBdfobFa5X5cmTcTp41Wwi9wq4YtFarKb9Vouh7Fzg",
  "key37": "5SXtigRVPA29Q3jcQFxq9V8hoyW5gywPiMLHNAZYJ694BRqJjXnjhJQJNMTKa2dKhKzgs7gLLxXiBrNSDudMTfL",
  "key38": "2RXYLuqbdTsvgEcgFFjaCJLwK3S8gjqVGHBP2A17ieU72wBZGBSWecJhfvZfZmofTPPvkZUjWMN2s4A7sts3o3J8",
  "key39": "3aLHbJcgQ9fSeGhyyibnL1dZEuxPGh6ZuwaNoSD3VezXSCYR7T8eZFtB5xiPiudFpoZ5ygRMSV67dtjLrb4xXx7q",
  "key40": "yWw1N4GH9tGFkKfgkskwyb5UWLzaaCbg87XEQdDmXa6e8vC9dBNkm6oit9JMZCYjWmk5MR7tH42uZZ5jdAH9ZcX",
  "key41": "2WonXj2CXkKEv1uscEJuD3fWiXSqQTzb6E6cJ6eYRhb8y1xYMWzgB6UAgsbQUq4KzXXVD2v7qg4i1pMf395cxCLS",
  "key42": "5fShEVK1CYRM5DYrXA2BoCBL7KGYjpm5mX6wFa9zNEL43kK8nP67oyjXEfSXfvqMYKgXHkJhFBqN7qCLv6mdiin9",
  "key43": "58dgDqqbR75EmcxyphuwHpu6GZHkCSDWFhB1mVYgqisvkwLnuo4eqcCR1ps1NE5JHaxto6RxMYi8RAFUDjbHwujH",
  "key44": "MrSsEtNzUk2BgVcYXv34ruJD9zTZrKTc5bHvDQQwLbF1EHmvHazHGx8REZ6tP8XUCUrxTst8vEXmhuP298gehFj",
  "key45": "2YgusR3BN9hRuMCWEfzWgdvrwgSdFnTkGR9CTmvQHS3kCB5pYzDzbp8cN7UkkWFaxkC6bXtyNBhSvzckR4jxidrg"
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
