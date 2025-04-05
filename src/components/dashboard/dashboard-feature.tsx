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
    "CcEZ1WF8fAZFjvxnH4JvKVoPyTQQGb3JoWjhqVttrAEUXa7RedfrNzbAVNBQZELiSiDZMi751E8TkGSoYUDzQac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d6ZmCreb2ds3KaodtFL7pZGg8KnE4MZWBvZZsJNfGHN2LNEuRFfhm24nSzkJJF6nzCqjnzSLcTk5Zed4L3BQC45",
  "key1": "2EctHED4czwCQSLHcEMKSuuiuRBrmkeBtF3DyRhyLVzXSN6pJvwMPCqXgzEZXttznAHEjryeFJoQG77s1VMjdGU2",
  "key2": "xZmdc726NNJ6bCcNGNJiwYamrP3P4sGwHFnz5x3Ni256uubMZJcsnD9eLuhEesxmBa38jfB2UKs2UgYHczumYhG",
  "key3": "2EYB47HvoL9tCJpHAc2kJpmkSBVXowdX9JEAb6w2G7CvBgHcSPvX1UuC75b9z4m85K2s8CrVhWyVWEKvund8TevQ",
  "key4": "4YdR1QpFRgdzVRqDaX16QQCy6GN1PEA8n8ZpTT8dDVF18G4VYrwB9PqGJTGZh7xy5A9r6DqiZNziC6XDwrK7F6jG",
  "key5": "3hLkVeoNwsZKnZPTpuCcPUqeQVCLWqs8HEtYqW4ESj3yNBcSHpBfwVepMrLy2MztPLmWB5kAMAZYaBKZ2vGxLCH6",
  "key6": "3TCQQEsxcmXCRRHfjEgkRwZKShFqu1Th8SpCtGodtZJ95P8EfoFZ1dyhWp28iTsApKrtHt6KAX31RXyUxaUna1S6",
  "key7": "3zvouHgKfPHqd6mDigk6jE2fadWnKMPXXPeaqZ1f5DFCKXMa7SHLSywjNm119ACYZ9YrtL4xsGNtf2n1PMeXVJSa",
  "key8": "3CfZLHC6pmnLYHRtqM1ub7623KuvnrtNcMff1oYA7AYU3ZtVhjTsLYc6podkogrTVTwNbu9GCby9YYWe945BMwS2",
  "key9": "4fkLUm842qXRJwjJsZE1rwhNrknHgAoBRUYVYYr4vQChaRgyDeDsctUiW8su5JkPDX4GNsZoUdpL7xQf8P3FNdQa",
  "key10": "549wtcWmgpnGtatUxqay8W4Vmd7W5vRnFx8qG7uP7v83ReNZURCyoohGLFM6XwrmoYg7P6MQzze6sMTGJPyW3Nrm",
  "key11": "33zemNpTRmvJX6bKTNbYKNxhhztXF9q1PmYwzsBeouLEZ63i2Y6Qx7mZ5D5Tvb4ztDRgFZW2YfSQBXe5C3mjASpS",
  "key12": "Fr4T2iAzKe7YQ8WYE6fBxwww4zQqzWpKoF8YEWNRwhqZhzqFrsH7ZpDD5PFw36si1afK7wjZTjMW55y9MiM2T8t",
  "key13": "5fVwmxzCZV4FPouRcnKxz5xm88h6am1ZHpie88pK6Ta5sQJW8bdDP7MNuBapDhNKhZkpUhX6h77zVVgrtfjJZgDf",
  "key14": "4CtEgT1MvYb8fhAJwQB7fRYwZhmJjt64VHNcAf6Fb5LJ2AiHaMdpiCy4cNzuWpJc72GjQkqJ4zffoJ826EqMLsyy",
  "key15": "o6DUKA6jFgBmLQsX5Zm5GtBQzJjFyWchBSXaX7EDQL8CN1B65kRKSnucypZW1HmPyxnHpZsmCkHVegyHQNFX3LT",
  "key16": "2LyyUrwj9FwSPoRQaJbSeVHgR1AhBXzYnPmo9uF9NoLMXKAYwBk4iXkfRtqHbAWruZRvdVsgTHVxhXvbobggVEue",
  "key17": "2LgT25cR99A8v8ePaA5XfZypSiduE5BduWa3CsVz7vTBFFMkTTMQNYwvKjpqDVHcaAWuU6UWJ1Mdj39qm7BdBLFY",
  "key18": "54KB844NsK9fpSkVM93x5iEwsHNX8Q42zNNxwQpTjoaDbFzhgf6MnGbk4VUrFMh7Ynt9NvAndMmPfwr1znESjhSS",
  "key19": "3i8ypWFVR3suRyA7hpWYRrPZFKZoecF4ipJBkSrqxsdnbi78vnAaWm8aZZcgpJC5oGR9LJnnqYm3d6nsFAu2PEbZ",
  "key20": "4yMCH526aaZ51KpnwsaGEk6K87MsXiEoBstJteakq2EgGnx2NiCR1XaTadeXmrQMzML3xZ2NN6Mug4534ihswzvr",
  "key21": "4pfs1bS45nab1gTooL29YXNj8XYeqLdsGmr3DQrNZqV47GoVMCA7rTYN8mxmYrytW6wWjicEqcRiywyc5RaqA2RT",
  "key22": "SmJC8QAARAQ1Rw7Z3WoVj3TwNRYBPbJ1BaNyFpEzqPkSbRU6KA8gqYhTPx4LTb5RzvQDyYbUr9rNS1GKPjguHPr",
  "key23": "oQuLvkePfgWrkyUK8mzjVBg6CBCjLxu8pn61qJ8b8CPa72aCgfmCVPPwtNJsXnvXuvuy9cyhmTe1x7RDmeEbDRj",
  "key24": "aZArd2ZHtp7DvWKQNEpmsGCLDUTxr5iGgCJNnyAirtHQ4D2Z554wVqUKDqzrj2Hb6WN5R4U6eiu6NBYkUhXBLhy",
  "key25": "4KCFFJaeGgkPgAC3CBpiG74CM9mhiwatKgYebbQ8poYjm1VmcvQn9Q5nR4bnmmcdbKjrpL6biC7J6Dd3VkdvF4tY",
  "key26": "3ZteCaLLLjj7Uv1BUPapsDT5c8cRc3p1F5TYoD5oWibW8HfDxRvdDKWWXeXUjHEAijvxWZh3tWHR9PGnVP3WEfEY",
  "key27": "65JVDpf36hGY1toAoKHHfLhWCF6dKPs3wxCm6KQearuXg3ycDpgeTWqtawxeyks9NE13irFHjHy4aKxZVam2GSJ2",
  "key28": "5SjPY8zESR6s8P7gKrdYex1JREz4mV6Zu3ArxpYKaACWc3FUDCo8uR1hWktmcA36VdC71hFSp7KYShA8czxtcqoV",
  "key29": "3GRJr1WLyc33wi6CziUf8ZcY63iDmqe3KfxjwgsMr1NTuNu5BJ7jHHtB7umZxhS6UAnLSakqa5K3eaz17uzWDXeo",
  "key30": "a31FMkUwRprgLvd5d8v8K6kki3HBQwJEZL7NDgPZZEBFEYDdi7vDqrDHC6bzGoguNiBePkyhSuVi4ta4ao5vQmh",
  "key31": "65Xs4FpaNDZVMK4E12KYzoB3VfgeaE8ca5CQkhpWDtjepRXU2zDm19oEKwsgeCuXWmcH3exxHWmb4SpgJtZQJhWy",
  "key32": "MLkCsuVsWAnYGJKszyC7gzATTbr6mj1oioiPz35UEeWzZs3Xi1vxp5U8NTFQA3YhandyF8hr1c12neng43WA7j5",
  "key33": "4KoTurGf98N6GqoUpGvCwL8Kw9XGiqnYG2reiQxWoBn6y17WKZqLBESBeC7rAxaUV7JLsKJHnG6EPM2d5SzWrQuV",
  "key34": "5oaEYFVmid16tEbd2NisRd1TBGNWkG8ZsZjw4tZPfzWFPs3EcrMu8KPBmbDpxmT2918qRUi22wW4LezViDrutGmS",
  "key35": "4ds2JfLKvPUUkrrNL2BNtSAgBDtoxtb2eeY9H1nfJm97YiPz7Li2gtcd2K4U1eF3szftjhgqUwWfRup58MXwpYaX",
  "key36": "CodwRnr7y7aEHq8He4nSY4ep3WoEzpmiFizNrs2aFGLt6mP9WY3fTZ8UWU7PfCycBkAcDb3G8aWMWJPDFuaREo9",
  "key37": "AVEs5eLQgTi6RMY2KUUucf2MoJiWYZ99xWUaaHRXpXM5CNViMupx32NMYBQ4BdirR5XafCkFJmpktGneSXyweKy",
  "key38": "65e4nzUwPSbYj3uJKstV1Y5VJFrtui1X7kUenS5sc56Q4BHxDx6WkPGZjhnn8FraZQC3eHAngiZVk85JTg1XAxWQ",
  "key39": "3jfFoxUsBivNhgTn1Nsj73zchUA4gusGpF1xW5fk58EBn3o9tFgL321GsnPVfUitmcBzthTQCSTrzwqTrbTqcWqZ",
  "key40": "3nQUABHVGw5KMe8HQJEd8oB5628ZwNmddpHUgXaTKi34XkJ7Xj78wkRZuQPUNaZCdGKhBdL9UV4ZNWvdAYGSjs1b",
  "key41": "5Wb8k2nctM6MUuBJ83JzL8LhXPGZKZ72eCs3FdSMEwHq2Ks4La8KAj23hQirUxcp3NjVRUT7bfntfAkAA8EWN8TJ",
  "key42": "4CELYTVVZor53v1wfFbKMGE24cV28hDeMaVYoTNPwZTDnG9iKgibg8Lfsqx3XKvCk4zn8UCwTomg6pYgPSbbE1TD",
  "key43": "5MKYazGnUDY7B2ywVqZJxSgQqSXiKG44u7n2aLVxwYmGJ5zQMfHUD6jWxcacR9b79GgiZxXF4eZQwU22eoLhnTrs",
  "key44": "4FkPucDg3kaMYV8E8MM9rAC2XkERBg5tzQEKajyRhPK7XwCqEobnq4zFQCj98XSNLXrCpyBYTgW9PnkohGWMHFYh",
  "key45": "5feDJcNDSYNZSLb7YZ3ZDiNMQJoPqfYgqtDKa9RxaGTcPS1aF8iKtTebdqAyUGbB5vFCkAdbBiibEP7f3n98FYVu",
  "key46": "4wravAALJHGMHMsYhiQSJZQrs21xLco2nrqWp9SQmRmig7fCQ7dcCfC8Sgxiqyw2WXXwLUUZqHUAn84mxbseNLwt",
  "key47": "5nmBCs5UPU5FY3zoeuBWAFZmbemBFvePrK4hdf3CCi6gq2q4oTzhtyVtZ9VpoCT5WDMuoAsnmeBzqCs1rhKZr8xc",
  "key48": "2fqo3CryxgX6Ly9MChx8ktJUq9mJofQNxMLjehxdxm5t5TZWn5y6gRwZnbvQ5htwU3dsQcdGR2BgnwkwyWdp2SAw",
  "key49": "r3atnxf8GTsjXKK3AVN1EXJSHHB3XouBqEUeYjG8tmuGBVHRkLryHfii6uGVSfbR15uHocGbyddmbxQqCVnuV1D"
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
