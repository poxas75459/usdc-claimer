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
    "cUWEZhZ7JvH9znBvgc5rFcn11s1dZbVpTwcYh1honwufo9GtJ1hmCeJyqEjbKPkahGdA7Tjp3PixYJeUnwsDuUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qDAaXiiAUnHJEb7u9HKtKMwEzkopxvyWTYmtXHkdn164MiPuCNcEYZiDuWzFjwgNbnzBCKPvUkQ15F4ojsfqfRF",
  "key1": "3TQu9WRxDynbjnUu26oKm6Z2k3QKxdCh99Q3mabgZs3A92A8ZfbsAxMyzpJyevpabPXqDRqAAB8RUp561K8zaFgH",
  "key2": "4HzyQMnUeJyXCRPHVnNm5LZRz7aLUEKVZdtxkJCYZZNyWyFch5Dg951EsB2Di1HMFPrxcqQeWKgCbW7Ad7estWbQ",
  "key3": "xiwpujuVbH9BRfYP7f33nT9oX6U56syF9NVPKc3yF9X6dR6fjtUpiMaxGcqtfu2xUjbkQepPKGS1W5qqB3tLAoF",
  "key4": "2tkbeYd2eKPgpQB39BRF9PtyPJrdhuUhwTCGh3KAmZg772qofTo3aYbQqnxk38TVzWLmUFbe6BWNXfeFuvpgUrZ7",
  "key5": "2bBnHBB2ReDzWTZjnDJoB3pZHfQ7mLNhJHjVPtuf53vGn5HUtnDG8Qxqc55zdt1T5F3RtoMgJhmExC8B7xz61KCT",
  "key6": "44C3RPEjEx1VdMsamCWCLDZBYu9QWcX9US128G7tMSEoGrYExomWsQsVRhomQXP7GaStkB2qpg7cboYBEBA7fA7U",
  "key7": "4vV8njCT38gTBa7UxapcPKTq6ytyko94nmWGqfzSh7aTaiQbGBTHXmpSo5ntyNXervNBVY7KgotKJ1H7FG3Tfiyq",
  "key8": "kDVrDhNuKPB2qkzXV6TPagFtDCKR2NaNAJ5jTfCTCEDDvyZQmPxbzDMn3SmmVF1XLcjpwSaaUwehaq6xePE72nU",
  "key9": "3F6Ne6pc1dkZ6c8e6RpvVn1PYcTWQETpcphW5CyS4RQ9wNDcqnCyBrQLydyoEbk6e4Cvzpk4RfBSVBZiL9FD25z7",
  "key10": "22eUbhSH8KoZZRx4PfEiXig6jSW7PnQvDcCp5gdEwpUngVJ2Gv56wfCZwduwqipExe2DX2FrRAuo2ztnkZfzdoc3",
  "key11": "65kESE1YnA2TETd9bwoNfYumEcAfJmirxAj8Tprz1dD7EeFqJAcxiy9KpcKQS9aD6kdsXDU2PQ7eB8XpxwTNu9p",
  "key12": "4zDFWxY6xDtgvTmd4hizreCWuhs1uf29XuQVj6sn2nQrvxqEeKdJFRqLHzVeta9j7J3ud3mUFVkZGJQQRAGRQUbX",
  "key13": "5vDhcLKaqP9qy72qfw9tu72uU1Ljwq6jdFa7BMDcoMoggqw7TNFc2knqsJTsVWzeRBG67UTUzjjQMatuC5ZaUdrZ",
  "key14": "qz1YBCBcWRaXjLEbAG4p9rQHnFuA4he9TdCAmiG6axJVtne7igwQGrjZBaSvRUgtPW4i653Yt52WAQHHhgq17ki",
  "key15": "3wU8KuMXDCS92R9j3QZf888S3wQb7F9iXLqAe3L2QDj22q1RRPTVCGaHBrVtHF2QnxdhVaqUeGheoPPR9zhc3oHR",
  "key16": "5h7PqK8Sy2AZi6sTqEekczyEr7G31bzFX82w5fcafjGk4iUNNh28k9xqZat51DJrwcR96BhVtnCHxAopBpGyEmNK",
  "key17": "rMueZF48Pdjjv2zRcsMZ9ToHA1SdTi8oV43BdoxtsEp9nUytZ13crn75zqTdtPhV6WDwytXkD5gHdC213JFw5vy",
  "key18": "UVJpLKE9bYQtLCUxPAmpvgN5wFBT7NUur8ErdnioQ7XyM78fJKPGHBiDjKy4ML9vnUUjzbYsJEmXTAFCPDvVSmo",
  "key19": "4AWw6zXeYJw47om68FqRJgcqwCRjwpL3CyoyPGF89CSUs1KedGVLMuFXWgKw9JqKcwEdLWxLu3jTEUPHjGticssc",
  "key20": "4ZYcdbJ2FhF3HQsEqxD8HSsXLq4Vvpgw2NA4azNyftG2QHQyU96TXJviAu4eXV4SwnBVcmeCmiY963Jjar1ch4xW",
  "key21": "QKc33TkB16R777WQDYKAoQHKsZ45LXy7bw7JkKrsMFSBLiSakESimXvB9uETLfgJkd9oZxDexpScecNuFekZam9",
  "key22": "4K1iAUAAkpiYfMP5UKm71WRhbRDm9FsuhDQPZnRCT169KNqHwbs839Pq2Aee3pgyebDLYe6nPxiQELPyEqzP1M2U",
  "key23": "3kyXgZhFfKs3GAUhfcu3QzWn73SFk9rVA2QumRtP5QDvz3NuWAdVqd9b18iwrp92LACQuVYARLjcy71qPrpnundj",
  "key24": "41Laz2TAYS378s8svZk4BgGEZ5GbA4f3wibbpJKBTx5i3FYSvujjnJV59VPrG9oqZQ1iS5mUd3c9rWAtVi4gZEvG",
  "key25": "3t3jycyySw1LvyHHRdogckaVznyGg65TbWyJ6ypJMh1egXNUXt1VHUqJHCEyr1WszU94BLvst3GgBY7RzQ4TXx7t",
  "key26": "49rp7wJH4HYEDkUaJTxBXRD3hU8JZUnrUJGrHp3bPA6nGsTiuH3pVtavABgUQVSv1jvQ3QPxMZdJ4W3ZUcg4jV7m",
  "key27": "2YU8BHjuCPvzyxRMS6Rg5ELockGiAf586tXh7rKLLNrpDhWQyjsLbX7ijJ1uEnp7FYdwnZ2mm5HnL53yvZsFwUUH",
  "key28": "5dG8Gqe6FJLu7XkXaHritQN2ruVF4szAwCrYVESsh29atYuqiPyWjT9vR5dGjC8UdEaE8HW2gC71X6P2twaJ3djC",
  "key29": "2ffxi1cmSQcUy5Nxy8J7eW5dszSytTCQxjYfrN5J1qYAQURNTHEV3gJwGmi5sMFjpFy8QreQkLJ33FYqnjNkftrE",
  "key30": "4rn7GEM2ZpwuRaPjnBSASMsnhqx5hR4NzX7pzaUUxs4cyvvghMxgsJYHAF63mEua7o9vLbasPJPC2A6Ujw6PmNSk",
  "key31": "4DvvHzR5zKbCWMzEGA418hg7vBRB9BojnVNRgPNaDZtA3EmkoSuH2sAzcrfFTPotuyyNw4S4G8FD18WzJgCK3Sbk",
  "key32": "2LE2MqmNugUXacVdV6um6JznWC23T2Et3Lj6EN3Ry9u8h2SF9YTJBSjmJJp7onJAzL9kDkUcrrw2Yng1a5myw5v5"
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
