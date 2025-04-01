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
    "36onirdR79k1jHinYTGfb5TTD1nrErhGLjSSK8wH8k5cz2Ck8Xa5hZEyVupKSbxZbRWoCosTDJBTSrgy1tBxjj9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKLx9fLAzNMbgbiTsTEaswPy1yGxQAt5sahcqQ2CdQRMV85QBMPjiJ3wUyFXi88b4sRCLbbAgNUvhDrivMNzaEi",
  "key1": "3znnWV3YJ22xzerGiAm9SJYWMMcBNKsFMiomp7rAKqE1vYXGNppARiKiU7WhABxZMqYkNwCTkB9r45g5vTK9KivS",
  "key2": "HYepg4jv2fJeuoRfB3JjTVUBAM4f44x2Dnagtyf3Xq8MD48Nu78tn4MSxntJGcVhf4gep2L2XuKoHScLb6CeVJ6",
  "key3": "TPTQhARsZJ9JCfehFofMeppmCCbR7j91v4pT3YAGm5ZjB8vcc1Vq27yaFVBieo4hwG9CcRjwCDsQmkMDoXRmPD4",
  "key4": "5g3e7ryEi6gCa62w8hc6tLEfYT6q8xMeKeTas36zfxjRUsbKBa72dPeYxRX7uXzHAwjoEQQU6U2uVWTK2NGm6JPD",
  "key5": "4z6tNhMD81EbM69TDPaCmhHUhar7CoRW8fxVkxjs8x8fK3FCKZpY9L7toNruCsX4syc61jqRySRCra2xWNvGB4kD",
  "key6": "5tghbJDPUhc4WpZXyDzuvQwbvdY36RJDj5sLBN5wUpJu711kKRABae97WjYx14KrAKbWZtLuZ7qVFHpcK61g1Ev9",
  "key7": "5pwRYzAbAUTqXNt9XrmwqtBv51PjhXNWWy1UaQThqdEy3G2RMEWMjeveE1446acyDLp3ZfbkZ2AdjTunCENMEmYA",
  "key8": "3FktJwwhA7gsdDZ9FhWBGnKAzhZVSm77PyDAvBbdUvXPRgqaVVcLsa8yCZWTGVq75MenB913eaFjxcCaZyrLmXdc",
  "key9": "4U3S55bXgcv4iGxAJ4YgPWfdrUtncBfpx8C4V4kPf2G3U24i5J8XvFJ5fBKKWQW5bU7Q6RMSudvdKWzayAZPQia",
  "key10": "2xfadCxJbQ6fqGjQZShWTMhrFCdks2C8peQ3TroBoYDjm5em7C6W7HDtUnCabNaWMbdz2XWawXLfNzvRdzKyGuGm",
  "key11": "YekH362Fj5vNC9vPRg7TFBAa9mvpewbtfiYFApsAXMa9eNGxRq7ME3bsLPsXeJUcfBDK9bRHLdL3ZzotXTR9LiR",
  "key12": "37vBv2EeVyfebUmFn8HWtzgjjqNHeiDzxc2sf2ExDA5RCLopW2GnfytAy9ibYPFFt6YDQvgwbsqoaidcLyZkqYK1",
  "key13": "3hCEE4yshYEGV5c8tn414iLhK12ZjA72y1yJyhqdL4bUXBfCtXh6eu7WUzLG4Sh8HjWzEZ6nL8T2opbYRHv4eUAE",
  "key14": "3iPvW2kmZqT6wM53GJjdeysUGANE2Asf72P4NHr6AXxHrF1FRkL59gDMyx7J6v9VPNc1nyg2nQMzVF8M2sZQfymH",
  "key15": "8CUWG3tUSRdpEeG9N74qb5rn8H98SFepXm9doQY8JCs4z5pdFzhFfqqsZr4JJiaf3hQ2dfkeFykui6JBbVbHJnZ",
  "key16": "23xyRYXiLWzDNpikAD9njPVFo18f5EpyzcC7tzNs5yWXPjBHLvtQxFVP1HFgKHNA5c9UsrNnn9k7Zs9WK8PBYH2C",
  "key17": "2Z5vBjvKo8kwb8evjhLDGhxrwsWqSbfTk6mDMPSQrQG9qAS7qDYHqQeWoiQCyQicY93cxNM4ArjdaQkAT9B1zqgW",
  "key18": "4Nv6yx1LtERHyyMGviDAQVtv6gg4V3hWSgmBpacdNq8D2TRaRAe4QZtnrSWAB2PfXTLTBWbs9ejniQEbRD3xgEUp",
  "key19": "wPtvPiHvazTXXZWuKeT17kExTzWYPDevgb24wkut2GhzLpi7rWp1U5KHWnnn4unUwdwp8jN4tidvFtSS3z8ctqh",
  "key20": "3wKaxdxKAKH1HZTRvPkePk7412FrV5V9LzYUNPVgBUrgifg3EJGnhTrREepeKXLkFTqrgidfUL9nFQTZbPvLUn3T",
  "key21": "4k4AksKw3LE3isnmiGovHgrG5SFsvxrN3qAJtHpe5PwjWH3zK7vCqtgHm7bMVebauxqatbjvwBhu9yjzKVC4EJkJ",
  "key22": "3pneYNsQMv7SdGCU1tZD3Ey1N4c6V8jFup9x62QsqxdwGgY9jdFRQ5rNkb4rgUScNhMSyqWm9xtA2uXb5DK91BPU",
  "key23": "589ZTeDgwVsZhpnkyntLD9sJmM8ifL5r4CW9fSMnj5rzwqQgRbT1V7hgr1vKkFarcMYPPDPVTwU1XAxT6hQnea3s",
  "key24": "4C514VXtQdmJWaN9ie3knj48fsS8AKyn1X762LbixucqUo6LwsQtLWsprctopncPAFqACL82NddhyZQ49B8SD3yT",
  "key25": "4M43YNd6xQB6kGksisT6VTbjdxBn1o23CgzH9ThgJsnEa3jZ1wRNPzcAkcQUQVDpwHmEokKV24m8DVUF2eqiaGhc",
  "key26": "42mzX9P6xP6sXok8pxCWcYYRTfdkNa1vUtj852otSaa5KDaTadUuJiVxnXhFuWwVdHuS8KDDPMJRzyfW21xri5Qq",
  "key27": "4me4tZUA4KXcgFBfBy4P93Sayd8P2H4ppGChHWmJvgTM3vMaSx82XuQ12Vx2fcpCfZc3PVPwKicEYqGNHMApYLus",
  "key28": "3r7DGhUfsYQ7sHFc5adGtRVs1yCwFVxtfdmFd3VA38oiSeSUdx8WRdo2Nds57hmuVSXN9XuXzQFygnHV95jgHhRQ",
  "key29": "23gXYFPLX3uYzzTRcL9foERoSD2GZ7MaooqJutbKZKxJX695Qj1qJnwyBejjiBikdaW5YFwEQ91j5zAWVZtT8BZg",
  "key30": "CnAFJsuk4JoZh5TjTrfbg1fdBMAHPR9eeoBFTnLGxnkUfvucDjyuKsEk8x2zDyGuVmXqFoYuUw6acBcsd78mX4d",
  "key31": "4kjLNo6o5GsjBPdSZXAR23gacV58dC574xZVM8CJRpxeVdvSxyDQpue6BPF57riRnBrWHKESRwgWPXxtuhASpXp3",
  "key32": "3bvJ3kevdvWzTZbJime77LmeWGVsdCnWcHwLcVMGB6tMopH7jPVGBrhxRaqWkZRmfFLHH7PgTDjtEQce2Y4hN7a",
  "key33": "2c9HmuSD9ric78i4X3XPCihwCxbn6ohP5kXrueQDApLrPNVfYxCCcTCYELhFYsS874wzVXCHK7JHHTKmz4pwcPps",
  "key34": "3ZWHgZsLHd9w1c87fLnr8PQEqKZHBtKr229WH9ZJfhbG8jmXsg8MWncFdfBx4krkfuQZcsKcWxmamnK9K3y6QhfK",
  "key35": "NprTyCpkDiMpQeennLnbEutxzVAerbGAYDJBXeqWZeMG3mVpByWUnHBLC6rBgKMCguDysS6gj3mu5VadHGJjREY",
  "key36": "3whYf4J8a7DFgb9UyqxLEBqJWBUCnMVuGvenpWrE3nTRcG5KEnUpK4cb3679KshX1HaUHSbk2JDsFyWBHCa1SDgC",
  "key37": "2BC4qF1wEJtCRPa4N7TJTM2rchcUV3NSvTK2PiF113vmKpU8eSotqTw22dVPtMzwWmRPgyPm4U3bTpW2YRBHUFc6",
  "key38": "JCD1vbtFnhCcwr38ejXfv8r4guCQyN7VxA5Quv1kV1YDjonRrpGf4V5BSj6YCVkck5UxbQZttMzQvEBZ5h4s1Ft",
  "key39": "4GSZNYrbZ2pdPBXpxFtNEPGKTgEPPhEcxkBkW6oonmTtxu9NW7oNbBytTtqGPTbWQzaVv53QDpfEnyxH18arLLxQ",
  "key40": "4rtLYcGoTvP5LwNoV9oraFYDqg4op3Q6nPyPyvqxfuDcsbdFBmQPpXLK9BvRPFsrWoKAc6VxgfLe3VXoWw3Ts6uX",
  "key41": "5KbiPSDkituEggFwq7G5Nmsi4kUBCNvmsqhXSvJdwjbYoa8kc7bKBArCmNvRbyNQHRdho2ZTus5Kr1o1RuSm6jKM",
  "key42": "UDCzQoFoSfgxkuDftbD1DbyQK6RyLzcRSkHSAcV9ivRKxpPGiX3bvdGxMKFCvf5RBz3ieV24MR1EcBVChEMsfQe",
  "key43": "4S5HSvMWgNX25RQHCTYKvfMJxbbPX7n6ppmLdLKTeooiQvzFZzCxFsDScuQJwDbuKc6ekSrHzs27xJmpGiQCikM5"
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
