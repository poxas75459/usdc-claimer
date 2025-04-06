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
    "MnyavsVmK4Mxw5ePJGbVgC4JEF4fHeEqR7GyhpeK11v7vdVXKz7shiy4QJkg7xUc1BoXTjL3YRG4ACYjKcgEmCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSxSQE9pxybg9DpL92r3iEjWqgT9utpKnbQ2cizxSEuymbXapY8YyCTE46C6dA6Wys9r9cPZUMYTU4iHTS7oseP",
  "key1": "22wV6GUBxQ5hbqUnePuBCaZowYiZjj7tnhp6oTiXtMET593F7CyVthFyd7GzoskUdKuh8VxX3A9sasfzyvTjdCYm",
  "key2": "59V38GTaUiiATLKQpp8Eg35VAbJsGvMxF5bQdxqEhBvVRzQrf6GRXYjoiLVYk7a9gSS6sWi7Mu7SccRf7EgHHxA4",
  "key3": "5qngeLrtJrtWMCadT4XGrZwdeAhpezqeUS93996B6S1ci1iTJFbqdchoEoX3BC4iuZWKpTppBm7xjXD2aN1gTu7j",
  "key4": "yDuMRortrxtWQeuHxCf9v8pfMQzYiokrkWDfSY39BxDYxgvzD2EQCHJ3tpH5gEJW6TmSStASQHXRdr5Tre1j6FJ",
  "key5": "25Cx95EUb4tnbE6cN5hWpRwyk8EUCB2wBEQrTrE1S2yQYcfsADusnpi3strvf19EG9pzAE5GDmCvaDfUmwoWVCDg",
  "key6": "28RdzfxLBTmg6XFtKkHqcAxxTxYphgShVm3Fwb3nRbeBeEz1serfU9RPuKQ6R5RS6RZkWCcwRz1N1TfsJwQtuqcg",
  "key7": "C2ZYXBySoZfXtxs8xzYCQXZgh3QYfUorFtwGptoiLcg4GujLxj5YYUjEinyBspnBvQKjupfEbpBw1yckJpgtkEp",
  "key8": "i8v3Jqfrbp871Wqa2AMwTrZYtJmKom58sZ9RqFa7USe5GfkVuK9srRc6zGEm17mHBL8i8PudArkxU9P5eHrqXf1",
  "key9": "4kykNt2u27cVrSDBQ9hn94ww3xwGqL8kuJXz6QHQKTqdWUmo1UCHrWY4hwh5ZzSMQaihB4jWSM7kdbLScQujn4xw",
  "key10": "4bWGCiTepnHcRkqmcRiNVDxYqvwPHowdsjVoSGcUwZApbiS4YphQ7xuh5cm3HffoyHEpdnV4oh1r26MyNDNdrAYr",
  "key11": "eJHKAhjcm8jRbVPmCoezYexzm3TAtkGkdxmaenU65JsdVReAK3tQCtNEDi3P1ypG7crvY4skq1fXWiDXb8ffQxb",
  "key12": "29fGMGuY791LNX5SYryxY87w8X94fuaRYATMQLJ5vER6az3BLjzvBEuQMH3q8Dh4g3vfcpsjSaVukkQigsGUGrYW",
  "key13": "2dUzt4zESzEL83vW5Zgmjz12BaaZpgjptyM23oMnb4X8cUqr6RTA3FD15fw9zFdBra7N9SJS7U5ooRAYvPs83XTZ",
  "key14": "TUbcvcCqkreBuUAA5hZYQg1waHDXNTfeLSYgyhnTVHozPCq3RpN5GjcaxsH5eh3sptcgpbrevJ1WuRaKP1RRUoG",
  "key15": "sQzNuNbyiM8YjeS5zZxyzRCXh4x3Sz8kcrEhnirG6LyJb6shXgAAFscdtLsJKD3BNfzFsV2DdYqeNmMCtJXmZ84",
  "key16": "56L2u9wSYNaW8fGjf59E3BNFL1u2rEZ7U21FEd1yLkd6XJkxK4WczWd8t1RSyLmky6axDiytpxz2xKKqGFGEJgDw",
  "key17": "5tXZxfA9hyWcC336EVFpDkyzFbFiGRULu8giN2rqYL7pQvJXad5rfiCuY6jv13cJ3nbsKQ4V4kYiewQ3obcRjdj6",
  "key18": "2T2yo3VTkDgBM9bzEjhFbtq7ZArQHr4t44QtjcmLo875wpWLA8EugbR6Mz4bCho44jXnYnhH9rryU4mw1Ln26WpF",
  "key19": "3umaw1YxnfBRsPbMG9qRjtxaJEdZoVVs58eYGSz9GBwHLGRvNYeYfgz9QKVJttTfkxSbg8E4mDEyQE7qBAt1U4VB",
  "key20": "5GirGK1pkR5Ft51soubq8sxguztMPj1P3x3q6V2V9APT2kVmP33xobEteoerY7Qzzbb4oxMjF7V8pkSMrhgHdbA4",
  "key21": "2EBYZuVvwskZokvPBLNvrqrePa2HyHnhgPtR6e1Fs82ssxHBWjqhwTUCfPrFwWuEs7ZC4qhwQuyih8WXZqtftUGq",
  "key22": "TXiuKFuzGF83PVhKKwPJgMdXYdWDj5fNXjgV4bvianZhpa5SPzTJzTJDi8HBn2rhQuR9RHmiKDhFvfahB2vZeEE",
  "key23": "3HiLP9qN8tSPknfgZHeCNFTNwiwEcSEgkbXDNiqBCFNosiZzR2LcYg9ML29g6iorp1iuzUBiT13YV7hFhYFHumBs",
  "key24": "4zXCLx4GNQDsRWmaiLRZoc3AtpfNbBGw46AwWoQtcbpSQoF2pipdpFdUtN4jQ83hJ2SurnnXzxAz2srXTdqD8eHY",
  "key25": "2Gs4jTJPAKns8BiMY2Bin2VHKrF9vqrP6QMVkWsQFResTMg9yNyYzUnFrr5MxKUAxKungtwUeTbHjEkRbY64ioZq",
  "key26": "4X9KS13mp6pAZgBfEtd57iLKJrJHCf1Qh57CPLUqo5LoKZgMepMdNgcEJ2DTpRobef15SMwYBuJV88MfQvLaEqBw",
  "key27": "4N53nTnGZFXL45nvnN3fzzdDFuvApnPXEdmQ4XMD3vmrBMKiL8fLei1MjJ3nzTW3qKpLW4ZBkP7Az5aswo1RRkQr",
  "key28": "4Bf8DGg7xvSsME8NjX4sEbtoVLdpCKf3ddMJtmUgKnN4o8NZfP5oU6ju1hkFywP9qpyVHCPr9sKKi1TMgFWmqqCv",
  "key29": "3McSLSpdphoAmwDAx7fQExeVaynxHNpmHMPMJSAbARvCwEan7XXSs6i8tLQguBcVk2Kw9v1Nv1hNNFbLNyLuWsWZ",
  "key30": "5hnKWXGSyavb6Lz4sGTjpaxjbg5QA3SHU6RaABsUQq2x8MfWCjTk8YpDPMNMhH14XKrMux8waoWgAF7zcMCmuQCL",
  "key31": "oeP9VtBKLzPLfaerAiZu3fkRsjxxcaBMkXGoGXBeGnh3H9oRYtBpHDAVtQS4Jk47BS5BjJGJ7UKvggezGvy39hP",
  "key32": "2yGg3F14wrzceyFGAf2QihFBE5yeFttokWyUgj7ruFLNhRyoMqiVVAGs9LGPja5aYKZJEiX87Dv2cx4921MLs16E",
  "key33": "4wKQCwBv11yBeEz5ayzqe8ew7stozZzrakXBXSFwWKtkoZSXmDeT7PWaTKMAqHr7Gpub4ecwNWg4fjPqkWP5HZFe",
  "key34": "4VvAkf37Mi6aujWbC7fFZWzSqic41EyVWJm2mZNmoZJkuUAKcKX879B7K339BciMZSJ8D4XDLMENsPkHybWt5Zh7",
  "key35": "5ndaPgNktTf7EfgXbLBh25KVBLBXLDpW97LxARrKZjgucfbGgJR1tnqseLne8BkwKo4cLqTUmamzsrdngHbueZat",
  "key36": "61USghZUmA31crRvGMa5V1stkPRM3tApyShNzCC1PaDB6pUuNKTZuHoRJ9g15vHRdH52Qa91Z7Bgb85qU3fTRto3",
  "key37": "tXo3sd4HR4e2yL9JusmYeQGWMvwwNtiKDbwTDMbsHs65SeUL46itdiaZqVratxxGqYAMr8VWYpY8oEpQJooYH4S",
  "key38": "2kFNKo6y9yQ3hiK3Eu7UPqwfSHpgqvTvVU9Ny3eKgreeYLfEswSUtqJGFt4iNPbL1LG4RLT8pAvjjrm93fXwHLbY",
  "key39": "4rovAtc7fuaH2CnNrgXMxhrswSKMzZrTZfUwCezD3z3DTYTHN3vtMQYQFXJhue7RSRpmdqBQEw8ESSELD3xeKNC4",
  "key40": "62LDDP1gpqL2aHWYK23BBAnw83hSfNusgspnWayYwJixzCsUhewfuAboJPd1QQU7v1A44ywewV8Kd89WZPauaUBj"
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
