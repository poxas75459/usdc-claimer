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
    "4Mnifo5xkPWG6QC2YneykoHtbZyifPkbAaZUyYJnnq8EYNDzmfKcT1QWwKoNwPXDA9YAmAAFbSZq3ncuUHkyWUhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DwjtLtb8K2Q1zU1JPyoy4auFT2VDnqrbbr7LpuZUgnR4ZGcJnKD7WPHAPzbAQNYSzQL2hS3EU6KBuW4xnZy8Vu",
  "key1": "f4JYdrY3mMmfJBroYJm4RP1aaJSnYU8zxbX7eM6RNN7KfPiWsRERA2mr5HCsaZ9t1RTdDCkxu46q4CRnLqsHooX",
  "key2": "4aYwyqNMNiDB2e1LG7uP8tAatsg1CUZPRfF3fmzAaFGiQcBsTTSX9JzBWb4excWGiMNAYiyQEj9HM4xc4yTqzR58",
  "key3": "5q5M3SsWVAir6JBoZTaiLvF7ZLUPeFynbWZVAnyyx59kZ4t51Tp7k1VWPPzgPt6X13YkZoNkt9DqCgiUZwtddpaD",
  "key4": "5ZEFyR5GWKmXcdW98iqociwAcEusgcYPGsZjTribYgw9F8YYEfAnqyeGXmJf2oP9FE8zBKGT5ZnhmXJxWTBGDUb",
  "key5": "4V8CSDomR1eS9u6bBXAp5swVMxd3HkBPyiPbPs1tQGRxcnFi7DFmphAPWnNdtHWDEBaZA8awntuuh6ivv8ACEbKs",
  "key6": "3R3s9B5CZpwbutn9twNxQVQBEX1u7u2Xuqq1S5vhSVub9PS8kwz1qbKEbkA7ZfDPnscmCeWmE3gkFHudhWMFzpHe",
  "key7": "2GrBQeajaEhdN25wadkeVPt92xtQRMWQuiGTPA7ZYiTHhEAZTY2bD3f7YVdBV8tWt11YCiEfZTnTE5YKaR6w6JhX",
  "key8": "5TF164A2t35jdvsHkAj2tTMKPfLmdRMkhJXtZksKPkhHT3wW7KRmZo8o4uR7RNEj5MavnjhzCen1rZ4QdhRodh8x",
  "key9": "3SRe6aUsBuoGQPanSZ8FrJ8pCZQNBjSCNBcSxJ46ayb7vYNHKuyXTTLK5SzcSESAxJH1FwwKzvowjEFf2vHebz9q",
  "key10": "4ZK6FkM4h6HUGx48cRmybHkVZqHCMFuMqnojXs2FmP73sbeXUqoEtCSbQjknJBwQSRfs5c9XCBvHrwpT2Mhpeg9k",
  "key11": "1iq2JS31aJ92AKyGicrZ8PSXdE4ecTansX6j2wffBf1v7J5kLuEsH7EU4gLK9KZ4ae11yqJbPg1Kq7nwjQF4EcY",
  "key12": "DF2apypMgZGc2kmJDwVSGhEaMtzejrARd2MQ8PAhrpUkm3NaWhpC46ZxiMgwfBrdEaptPMHh9EvN2RDCWan84xT",
  "key13": "5cwtTDZFbCWtYbuxihxKewQDYvkL2orhgyyQ7Zy6Y3UhExJxHqcmjWQ6hswcv7cNnvjiDSP1VXtP3pGJku1Sgup9",
  "key14": "1NNYZeVBZ5zSR1PFhvwEchDQ322jjYgeNTKdKXW6ZmXoC4KQoEjbFRemsuCffBD4Uh9SXq22kcFLRYpYQgemLcD",
  "key15": "4cnLZdN87xau3WUJEAbJP9NZn2DgiuH4nq7psSDJQgTERfQgEUYtswiEF2ppAeEd3mopLuwXmvDSD4AG3sC9iXkr",
  "key16": "3ueAspEE8x4sGHyjuKRMTofFbAT33TNYsR5NrLbzArjtBU5h4E59uP7rZ3ht9wzTuh9D86tmnuw3DVUTxqXJmJKz",
  "key17": "4aHThzSCd8vD2u82EYdKoR7hYXhkc2AGAuh1WLnDE5MbJsTANf5nUAzs9SeGjrdNfCgFHXGM7NeEhZb2gHPrTGBd",
  "key18": "76SZXALCGH2z6GU6iSXzLpXjGHzXSjuJ8aPS3kbLiyC6CLe5A2BqDPDMLFomG36fouuusVnthHBUEdRVFzjZGUq",
  "key19": "2JTAh6Bp87TqMx4NWrTJBEaYYZTHCkKdPBzQN19ZF7dPDHNtkRPhg7fHmTcT2QPCShEMkfaz9i2W8jQrJSLMhoq",
  "key20": "3EQ1P3x8iWXNUoziBELPCEMxgvf4N8ciaWffFBudMqCX4gyvCqSRTP5mWoKAWyYFTTsFdpdi6XqJEvjmJSQtWMaL",
  "key21": "4AgqYL3BPUakcLQNc9YaLz9hPiyLNmdpEWaX4jUfvb4Pv1Noa8jgn36Wrj5v3jYiYMwA6mpAMQsEsxHYPqqYGbMa",
  "key22": "4AQci5Ms3RiMDS17tK3drLHnu8thfx8F4ZF9BtPbkP7YuRKRX9yMKBoUjCSM5JqQEpBkhGGqyUdCour7ALp6yfdB",
  "key23": "48Biw2UXkNsNyhMCksgn42eYSZYnQGcBnSFYV97emHJacj6sHdH8JJ1XkqPMfwzEQxFxK5HgEQaxU7QtuCiQyCQH",
  "key24": "5vCNv3ixz8XqhJJX1MkN4NcfbZnfj5F7FnrqeNrh8wQpgEM46Di4cHEU15GcgXEidkEcugmphLJS95Ysz7WgXgNf",
  "key25": "2jCcf6577RqCpXNnvEEVnC63MPjuRQLEQgZvMq31ya58nVqNuDGZYRjQ4Tuo3b3BtPArRsJNBnhsQDUWKwHvxgS",
  "key26": "QuPTNqRW4DeziLTSJVys3pXpZF2SsPax185zr8GFm84bqndbd3dTcqhrczGTFjZLEPhPr4DCVpW7jew1HdH4prZ",
  "key27": "61Aw6xieDeC12Mg5YDFam7RwMtV7zH4XpfAADv5vmYM2NbHJMTcsUWWJ3o7RiL6cDKbjebgR3Ji5txGHY8edzJHv",
  "key28": "4M2gzXG3b5LGeZurFGEP7EhVvS8gYEp9apH44i5roioYuEFBA5ZyEEXw92XX5aKqpKKjsGKpxuwiRjp4hzrJbkCd",
  "key29": "3xDRpv9SRJTaR6W5EWFGak42q6Gb5ZdLvDekanVdGnNCDkDWE235sjsP9mEjwLSZfEEuWdhmnEYwWXvEXBVNtFSn",
  "key30": "44bwXhzitdJYtUzCobcgZDDysHEAL69fnhrj6eKJdpw4WTuQwK1Ljpj1r5syCYQoiQp7eYWJ3wxR7sLLK3r916A8",
  "key31": "4rekupoGv69dBWyLhftsUkyEmeyuvFQqYH42HhyK189GD2pGsKjC2ecM67JB6cJmy4Z9KM7rHo7sxoApPqtmjtnk",
  "key32": "cs3FfbFXrwwVG3awcciL7qL9tqXddiKndr8dGZ2fduVNHxJqe7twNTBXUkXpg31zZ3GsKDFnw4BpYpqYW5LBjYh",
  "key33": "4oCScP4LCFfekoe6z4Xe6UPDuBnw7dyafbqaEPfWkBiQbm9BibRHTn9dWyYaHQoBcZwCHfCCpfuMDWkENeoBPLyK",
  "key34": "wkccntbmkxYUtoSTm3DjzULNzKjjnjzX2JJ46KeciyVwH53c5nM4aD4r9zfH3ER9Bq5QwNiu7fQrXNZzmaDXS7S",
  "key35": "5ajSLChzTtT1PDp4LNufsxqX24uzGEbHQTr8pjMnkBZ5KrLw3RbNQLyp2EhqbTJdNRheBGsucUMPAHjAB6fzSBQb",
  "key36": "EiP67xZbpZUfam23p9V3gHQwNShY4ox8FA7Dwenq3nMMPJtjvpRi8tJLKZiJJ7NRYwob9F4pM14wbUxMWQ5K3Aj",
  "key37": "4FQiuHepCstMJznRuX9LrDDrtKP6ux43R6BS9GTZMqwq7skcdTrScZVvjWVELW1QXMy4h8fJYJgQBjmMrXwb6Tnb",
  "key38": "3UTJf8NR8SPXCrpQ9fVYhicUTxLvSYVUqUuZKnSSosE4Fm5mfDLXx4qPmQvDUi5fCR2TTmBE3PoBt5zrrMm1vFkn",
  "key39": "wvJnqn4cQZZEGNzMkt5XTA9pZa11ieGte3xnmHWu84cv1hCF341qokyPUCiL4DM1DyE9GXAvC72xqYeCmpcYkVY",
  "key40": "oq7kZvjR5qS9XLVHJbtKbwwVK38VurcxeYAHGu9RBYxKtCrsot2kxhEEMMMMPxHPo4DNZGskFoi8A3WaFLjfESX",
  "key41": "2B1ToSebaoAiPpCXo1PSsjLJYAN9bbYyk34gaspxEDYSpXpmK9Sgg9Xr7QJqS6bpf6kVPeg4ni6j6dU8B4J28Dfs",
  "key42": "3LifN34zA1tXSDPTXsuELPgJRDdxbs2Txt1ZL3JsSZr2apGmmoXtgRkeBddtkCiEv7QUnFbegMD58HnA4fCD8Do8",
  "key43": "5qTdN3vHH9HCypihmbtpVV4aWYHZUxMZdbGUbVi56sVYJzQgjk9ZuT12zWAKU3cMqumFhGwqZdPsTa2MVxVgMP2m",
  "key44": "5bE5PPxoQydurXvfrkgSbsmpKTGRn5ruw4Cv61mdx15U496WVPGFcMyiKCrRaSPv1VQNSHcgHCo2upDrrv2fbeR1",
  "key45": "5YYyCRrZ4Tm9ALYVCdTV55vFnjAMV4vZh2EBfBpVookZVZzKBJciDGJUkPcVF6J6hAGcF5apXdtvYLnN9cDFZh6Q",
  "key46": "3HP2CXhp1J5PxUQ35CUeZdNy8xgmDAPKqMMN5JuxVqeX5Zfip22Zh6aduhzHcmzPVwumwpNpKLjwnkoLQASCTso5",
  "key47": "51uFZevsRTrhsLrQFcYWAKApsQydiC2uDLxm4VWTwr1i8heKwTc9dJ88k6kcNzM1a8e6wNzCpzAEdcauhuLndBDa"
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
