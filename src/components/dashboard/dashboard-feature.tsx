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
    "4idSmkQPDHyFFcjAGneaKTYdptusdMrCaMKTKQeFKCkj53YaewnkbfthfwTmyzSdpRbdEMg1hdeWtCYcfGvtNFnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqASz4uvamSHieWtaJS4b183uyntSgW6GVmF7khhDJGCakNMibdMFRnHQs4dFCaqaG52LC3R1ccr9kP2A3YKsag",
  "key1": "32vEP5ZqN5xxUxMBnQ7jvUcWEz46hEeoFzPhnbj8aM8Ewo24A56kZSR8rx12JtfGTutSL5rrSaaX7VDgttTZaeyU",
  "key2": "5R4F4ousmRB3Lu3ennAFXfeqDnFk3ihcbRqPMzm2nKJiwZaPgtNchwBJq27PKbymnERGSudguSxe9fTkqgECHnBP",
  "key3": "5sHZJvvEM6NYKmQQDyLX32NVRLNC3S6jvSmiHT4BCQqZeeCHeKcg4TvHgFRx6kNv6FYGPYm3rtWnxshYajQkUbhm",
  "key4": "4KURbV9ArAU5XrmwS4zMERcq3LtmhTwN6iJrwV2TTfguHgYyy7kT3Pyf3D8wUoQt31r7CwqUYhj8Q2igd2eQacoK",
  "key5": "4GtaefJZpFii4iA5afC2F1h4qaypHfDDxZqPYZhrUz6YvQA1eX7QFnA1ExF1r5A82RCEGhNfU5aF1jJBA95acN8F",
  "key6": "372pnsyERrWn4nGakjU5Y42vZvepKiDZhBfUbHBU4iJJ784f2RuqeZBKWNiPM5rjQiLQid4tKUDxxgaPUYVsU6V8",
  "key7": "534UKtE8RzMQBqZna44a5WCe5Refc99mzfxikjezG4jgTbq3Wi7KSpKGYtjpkhqeqjDpEKFFsQYNanXNW6Ys4dzh",
  "key8": "3nuRSMZPY3XxaBjsDT6D4XfR5378LbwqGwRWLhGtZJQj68iQhtiFRRxLpXdUt3VJxS8foBkdFCQEXzBaKiKSQMs5",
  "key9": "2VkQgoS6QDAsgTaZ6k32Hy4hvvEScdLur2NKC3qBTTWr48Px4gQMrokKnNoKTNC5CkfxD1z3Whg4zsPa2PLyE9Ba",
  "key10": "31zvDArLyrbP8fABFp2ABe2GAXNxxg4aSdZSUNwSaUas9eGm78AmzfYLvEJ1KLwR4s6mQp56gNP7kWe9MofmaMGW",
  "key11": "3of2ivFM2iHhaQ3r9ny92uyHbmguc7wr3VVKhW3v51s5XTZkGAK259Kr3FFXXzMqENkac2wkJTqHTan8uBLLmUSD",
  "key12": "5v8XkN3nDbTX7U5aGSSmMrU9iepahqPnb7NMiAriqoU2Hq7Uzi9UUffdPN4ckPn6dfFHfEeYgaGfTpWMv7BAxR36",
  "key13": "3vD3SgHgM3trshYgr4QL1QwQbPrkSNLCS6WUCc5oRYTbipdSqUQsY86rjTn6FZeyCFM3RRN33FVktpNK5vNepbFB",
  "key14": "43DwSEGHRCuUyJRfd1ynqXiNpB9m2cLsDuMUfyyMeFeTTnzTqF2JxPqcnhXvoCkGAwjzmKPutKrWwYsmzT2ZMm1m",
  "key15": "LLKJAg7ZgvToJXd49Bvwi6b8PkB4fSrLFAhDPU1EvhJRfzGt2XtCtZ3tph1G2Gc4jvjpJqPa5XquMN8P5V1iQrm",
  "key16": "3wSKsiSikbi33Mz3gJJhEwHqUQa6Se1rthwPNDV1rkCa3WXPvaP7iVJ3tqb5F4ezZ1ad739TtvhQu5BZJpwtz7Yw",
  "key17": "TjVB98tTcLQRYmU9j1qyFu8TiGbp1F5vowncTzwQtUtrMT53Rt91UuJcCEMcVckGMwQbsCoVwnn3VXq64LUwLAM",
  "key18": "3DZ2Um4vGtyRHHrQj4p5Yt3dre9RHFXWr7jhsrE4vQH2nGhwBPoY1T361yVX8F9bJ7bHcTA4Ca85RniRQKWWMCSY",
  "key19": "4JqGVRoeumWDkci53UKJ1WEGmfYwSBiV5dwBfEUEeYrxsExXfuwjuqL46QkGNUBwYRiwo1t9jGGboSMZG1HXimNM",
  "key20": "5jjYa1okbjUFRstuPQBaF1XbRwp7kfhmrG3M6ZkhDZaH2vzQ7ptnM9wuyyUysE8nFP6BPys3rUTDRPr88rwGXcVi",
  "key21": "JxRGZ8Z3UvcmCRaZvTXTDvKmcmD1Np9PDj36PoB2mNf5sph1nqErH3rNiPXi7u49n5MMNDPhHgx1dHvYhc9qwnG",
  "key22": "3qqXHowKGh6WN8Dqoj3uU8Yi2LkdaoUz8bvrhbmjbszUxhK5BPwrAsKS2iMV3yL939kJCfScU3jSPuN4gmqQZSZP",
  "key23": "2JBb3dA2kzNrjkZ86BrX4dwM825DeMNucrDLGr7GVEHxUDdhafYPjHULknFVKX4ftyEJxqVPL8ughzX891G6WuFq",
  "key24": "iNYrYLGWD571pFYCTY9iNkQL4o6b1xyiPfyaxKcERqgx7vJvdXWsv12hM5Fx5c4pkPLYrsXbLmvY2Cueekav2cs",
  "key25": "4v1dJYfHULLh9XMDXsv7BSAwojpucjMwgoUQjsWBCdrhdxk9wtqLXPTY8gwSSw7Z9CgsX1fhWnt8areMdJDcupy",
  "key26": "2G5XH5XpkK7SPvMpp5z27v6wSViC1YDHUjyy196frzXoNxvkSqbTq1qwynvMH9RcdyuTzjDujopCVweE9C8zsVQr",
  "key27": "2ny2YR6h1usTeRfrCBctJhdTSzAtfYWdPpvwUQxmUaxZW3CN5iF7MbdxUnENkRDB51xoTBjJ9L9swad3FRjMbbQU",
  "key28": "3Ne9iQhM54dfRSNEu1iHk7PdVpHHPdy317Yf56AvRT9ZaF9XPNYLsmQNE1qHP6A6Ahu5nPbXbj6dmEyVnE59Cq7w",
  "key29": "z25rKhbDwP7n72DT1kkSdNPDiM4fSf7VtaZTTUQydARQYBVUpdDgcMYKWCYJsGwPDg4uWXWWBqhQMq8dqwHUAHc",
  "key30": "3BeTVNfMNXJDhBJNBzogrHpqWVsMxEwF32cyAyTbVhnKjCAnePtudGp4bwXCye4tfYsv9AtYU5R5y8fGwo6wsts8",
  "key31": "4vWsjdRez5g5RcGyNJPQJSZjAmnarppDxXqcqZPxjRo1JrYLtGwrzpLnVg5cUYQ9bSX6qBadN3wQDxXNim73Nypy",
  "key32": "2DoUNFyyQ4Nfcnf4pLvagdATaY4FBRih5qiaQgpiJKDHn5JcPQE37YY2uXSMMXvq3wZbicYELJGfwnBMqmL4iM6w",
  "key33": "4TxZHEB2HUjUwf9YnVGGvuPSjZvGppebwaSbC6HNYidcD4vvXAbNGgQYYGRw8TArfBnQVWtSKMbnVbvj7snXsamr",
  "key34": "2MXby2BYYMmXDpBfJfmnoxKvtSkVzWPT47SZPheWxKiofRmFnZi8sr1QjXcCcXLVXY59y3idw5gk8abAyePMPByX",
  "key35": "4oWfryTJF4sTeETqmRK3LR7xUPCtbunkphcL6EoTpD7qK4ozBj1uZA6SxUCWzWgrQ5bbqWzmS5ycVSkeeV9Hpf28",
  "key36": "DwEcfWsofguP9g3wbQqJqQiBVET8ruvqhWgA8LyTb5TF81PuQb7Z6R6VRMvUjDacUefmwK4GxGRXqbz1q8SFAkq",
  "key37": "4YJouxksqfg9xi69mDMUFpKt3Y7qPyjX5twwb7BL1Ng8TgvLfpfnMctuyPY84R3znE4accQrYQWBQqjTuUPFPsUc",
  "key38": "3cimPvZHWgLfSvgnfWYComfKYqyuE3rXeDAzHHWBUSxi8L4AYmtuZZbLQNtS2TpwAcEcRbZYWo9QRrYhtjMnDLUM",
  "key39": "53PwcwFhdgksQ6nt52UhH6PVHkuvFnE6rAHivTXZBzkqMx85tUzeYUzUzNvje1eonW698cDgjYFxwQq6Zi7WZkEy",
  "key40": "2UmCaU8SyV5dL7fZ99bmJ962fMeVQVZv5GpFKfSNsFiziJksfL8rSGZCEPgnaGuJDmYa9DdCHdnt59XYjGJS3Yjj",
  "key41": "4hyQz682z882fbU6ik2paxvdWRHELF3bP47uyvUHsaQHVzwVft6gjJx3j7Tbxnjv6huRbm2fePgm7gvYof5yhAnv",
  "key42": "3zrUyDUuKvTC2gKtXAa8BAQkPiwEKnud6gkbw9Vv2zrdwiA6pWHjKxGgq3DNKSw2feC6qB5YXsTZUv1baDML7Lnc",
  "key43": "Pti5cYKQ8dbsMR5tbdmmyqQca9aBfutVHuqHK9UJ9wJz9MYX3eysL1Kpyy1t2mfDLAnhToqC6hJAfNQvgpmRVq7",
  "key44": "4TcfrNTgGdN8CQCjJQWE5uAHFHKmpgi1MNgjgi19mneHokVh1GWJi4Ddnh4DMNMduDB4JkwmkTdMMwnsq3sSerxD",
  "key45": "22WrgyohxhApuuAsHoknEBPbphkwcg8aD9kmpE8sYcvGwYaDPNvAdgc3133JQ91Lm6WaawDzi6JmFfCegYhqs9sR",
  "key46": "2NbbExPVwVLpSg2Eq1JzYB8XJ6vfJuRjo4gagnF9tKQ1C5DGvGjp3biXwPcADszYcChGKa4huUn6wp1LJhidaMpG",
  "key47": "3EPPCLStnbmmHhxD6yfj5TnTDbjTePHEFjhpAy4BSEsAXTkBaXsRxnJ68Z4StDAF5WiNFK1UbLUYVZUfBBjyZ1Bu",
  "key48": "5jkpGyAvzed5JR99m4VjEXJ9e7qgiW8opbVQ5QKpxXT6y9pGnW5dC4zNsQ5eCnyQpBVqXHERpbAn5HAq97DmMbgK"
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
