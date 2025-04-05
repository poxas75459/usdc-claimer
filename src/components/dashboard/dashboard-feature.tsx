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
    "3Fqyzap1Jy9exo92bzVNP6oiiNVXRp3yFDYrpXYQNni7tm2sERZkjYQ1C9tp1FrZUFtfPhYoXX8nPm1NHWUrXY7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwVDfj13o32BSCSrgpfNP29Ft4ghq4D7YrXkbZxzvyxtuSqnksirZSgdxVUjv9BTuFRMeoBmiXrizSPjw6J6Rnn",
  "key1": "36ArX74EsKT9i3xydd9HqggAmoJAzrKVJBejRmiEhVKu4sFmbrcuYq6yqnn9KUUzzegBh1nh58txja9YrTtEi1Mv",
  "key2": "5aw5noQwj9jbiD8uukqgXCVQyC6tAxXr3tHRfFwKxmrAGNPsjnuovZhgNzb9aPSmBjPo2jLR9sCuk2qNtBjexGBR",
  "key3": "3UW1Zsm14XKy7qTEmTpzGu39rdNYY2A3YDUaXqmzENPcoBhoWsL6dVTTtqGc7vrqPWs8pVMacTCc2w9ve4wBqjqP",
  "key4": "2vuB3onAaE2Uk8eyT5fy6NRxD1ciHJhQA1jTUPTJ3NyndHHAx9AobXVghgaMKozgCegaKYAfYa53amUzbHz3kzKg",
  "key5": "2b5KKJvrc4JHPjTkwFGnxdrGYM9Gp9HnP7ion9yEzvcXdbJjJVmodzRiVc91XqARNMTbbwQ5u4as5YzNnWbdtGhm",
  "key6": "2TNGLU2KVcEr2hQM2rwvGRGvxvDZichdsWAgT4XqCmjBFJ3ZoALP63UdVLBZWabdEAVWtodWECkhve8io4d1BPTe",
  "key7": "5dE1GXbKUu9SNykFBisoxVhsL5f6NRqipNkrcRnC9xzt6KV5vHvm4Hmt6a4vrru1j5o65q3WtouxdjSqp7s71Jgx",
  "key8": "3ozsUvrYaro5cjxhBRyhxSXVtzbWvGqEdzXpB6nZsn3ebHwBPNQX3dcXKa4aNhT9tSGpDRKPAhbtfGwGUJVs7Tz7",
  "key9": "ZJh5tgb3RZtRfLw77T1zu1j4dmtgXcbTfrQkC3iKmmnu4kaUSDghUWhdk3UdpBN7nPAFLV8QcZc9vr45gXrAe1W",
  "key10": "2C3arzfn2SLHamy4XnH2dCnpVLPdgfKzBQnnBdZ5wHGqJkeE1uRJHXcoPJEmuTba4ByYoYjaYmxEB1FNSzYkgzUe",
  "key11": "2qGp5ms47PtFx4Qxn3sHpHuomB9cwivdbhxwS47VXemVXrLCZp757HBzB1uuAtq4MeeoyPefPtQLJfZ8Zw13Nnvh",
  "key12": "3KkEZu755yaUNWHEcyJuDoFQcSjKxa7vKErW6FAGykwGKBstN3GUF7JKCEHykh7DdU4VSN5W9FtauHU9PckCuY8M",
  "key13": "5bWyLCChFPyzxbVDtf1mkKBYJuLF8ujEYzGVzMrDoLMvDcQvWcMM864ZgRv1sSDNtGT8HFTUnT9rcdxCJ7QrcxtD",
  "key14": "4w99jkun773yNtZtmKTGin99D2vFN5gyERN5JXDWGnkXZtbNhx8av5gobJ3M88B4TzcTM3Z8Ty7nJNYEpAUNw225",
  "key15": "a78MYEqeZi9WvLkEDtsHGCyARbxJcAuHKk7U8vXwBUh9ZjH65NsuxDefiWsiPGxhL3M6hUHha5yprBJpf7AxdE9",
  "key16": "2gpXv2UkRJJM8Tf9WL4BcQB3zr6Pyjha5DdDV6NUcGToj3iCypHZeRb8jDuHprWeNtb7XTN6Ls1xccwgTJ8dGM5V",
  "key17": "5vfjR3iPyapMZM5ZVeztTfySXqXt6GEizniiNwgpeatHbVWhm9G1yfQUcfDybBdHASn7UsDd7uBVKDmrvPp8srBz",
  "key18": "44FmkcG5Sdi7CocXWB9vAisbZrg2cUNXjxgGvRVrMBfUVWeDYzwm2Z4KVneNS61v6MQ2gMqc53AjtZhcALrKTy9i",
  "key19": "4koezeXrKnpce4JMJi3CR9eHNpGp395sPCd1mH8ASDRRB23GzqknvuYZEYyhPNNKjpWHBoC1r4sKRhxjHAQbu5Np",
  "key20": "2Y4USQzUhYHwUYFC3r12xUCM7zu726q93FrwZZpQsxRwAuCZw8HooyG8vEHdnDdsbo4UM5B6YHcZFkNne6DUtET6",
  "key21": "2wNsj652xUbcmWq84jfwZcNCqtHmEcFD8YwgDu5dfKS7c9gkB4miQo27RuPKwHEJsKWgJeUz7M4j62JbXqMnRefV",
  "key22": "4qyAhAMTUA41qz84sM8mtvunZZhkpwxPJPUr7bL9LpHkUuz22Ko3GGWAQSBBwzq34DrtBnXQASKQECuNn2EcHXZe",
  "key23": "2dWmoFqGU6Tf1JUwuKQQ9qkMgUxKcvrzN7h613ZGocif75kbeUVHov7MakfQaKUYW4GSoojWrrN4cCRQ96FZZ7eP",
  "key24": "38S53ZeQvUXbCQui8t5qH8Egxajp4X6WSjsqwnmi1wQahY6gPUEcrgYnzmWyxtn4pBRnGfWas4nKXCDVokMg1gf9",
  "key25": "3HGoaNaEWbfUx9SdGNUyLaPjpkc7e8YxBbfcFXjm2Kci1YVKvVV4W67HN1WX3xQ3z6WU6iauDtAsmEC48PLZpjsj",
  "key26": "3s5fvmFGaWyGb6Bwp9TjCSeunbPMa4VyzFNZMFs9jE8FMdXASTNrUP2Cp1U1vkjN2h8ZKbdaL8GYF4T9N2io3PCu",
  "key27": "24k1rVicdbD1UaY28vcLYudQ6xXkAw1c4mfeXhyeZKREfBak2rD91Dg2cVVtrqAqH7Ppm92Kmvj2CgpA2i3MiMZo",
  "key28": "26P93XW8PFpaVz9pZDJ6PtQqPFi3Estu5D8ZRLPJdA5XMnJ1yXWNyHKiesixDbNH9SdwTjXSSuuf8UNm8duFS8Bx",
  "key29": "5Bme1XKidf5rimTm8Gj6tdktHW8Xdy34kv4Sxq2QDbeziXEGdeGZQzG59AJcnDqipRWT9G64ugMF1bHaK2QQfhJT",
  "key30": "Qe2WKtCSgMBuBkbzy8HbdipjPiqYTKXFAPPQmx2nWJTaaz1hwSnpba8gh2VcBCurR5ofF7vFssiUr9YCHf6eRoY",
  "key31": "4oDeDg19trEQ696F8QyFDBoGzRnvfNy7TpmDikUL57EFBhuLWMAG81MirTipabiwMXsG65XKzBvbJNvx5G391heM",
  "key32": "4baaT9sWALPjZmsCqSaNfhx32uU4ipwMWZMqHy3uf6zXUK7zFs8zxFZBF35ACdZyCqxdXsi2E5v1th8zog7hxVBG",
  "key33": "4w9RqSWa1ZAGzYEK5NFppKiFfwAzqtPfJJsiKrAiCriNheQTFCMbZYhKESzQKtFrSPMxnFt1ZXAu6tZTpBz6zxNo",
  "key34": "3uWJCnYB3yT5xe4WqToGESCf9H8nziowkR8RhRrHuXDs8XEri5ZDjGWUHT6fEsG2R9o1UPBob4qRsc4RS9oiEew2",
  "key35": "WoqbUXawvP3RoX3uYCzdg8idb9CxNVUSU8SHACDPcpGVtUtJkZdqiFWr25pzhD1uG9d7DxEWDt3ut9WiM7TrWWJ"
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
