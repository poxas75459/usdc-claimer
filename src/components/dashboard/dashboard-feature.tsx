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
    "DM1nWh2t7vTzRv2CjTigNQQqQLKzYtspRmXzCGwGgTcb4Z7TzqCB9bJFn1AxFpF4Qjdhi9ZrKyarJFX188CbryV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hnJp94vznpYdPRv1ysPD3FuGrwGJ1DdPVp8mX2qLBUsSyd3zFcAYdqXxGWG7H21N2iTi97jnY6kP4KRgMCJ38SS",
  "key1": "EsYJLFcknTSQSCmAEevAig6VpPCZSqdwRPWxhVfBH6To6UmUgENA4iG6wZjrKB1PZz6CcUJDohmjrC3manc7RpS",
  "key2": "4JhYdojsigVu9zfkWmbLemxRoXQA8VNjUMeq5hDbkeUmwZphoNaP1ZMZ6M6Y3QiGN1Vj8YKYaZGkuGYrEtXkDAb9",
  "key3": "Fu4FhnAvAZSCAbfUGSsysJWg3hByr4XDB1n4uqq6W8gueWXSzPfuQvGCgqWFhMzuaafu8Ers2cnvtMHgRBn8ZYX",
  "key4": "5P4by1WaVTteUvkSjrj6cjan857febog1bceiaj2aVJCKcjtaQgCSNgAcF38qwBiqZEyxKexUufSnESVSvUCT58y",
  "key5": "5YnHmrBbW9h5gKo6BbAhZ2dhU1Q9FjDuro2vpcv38tU5MEnCGzfR3DAa7gkRgp3ok5w3xpVJg94Qa9ZGiB3wshyU",
  "key6": "4KozYtaFCBhr1zaGG9bQbsQUWsZtTJePa2m1qpAtS3GWcZjMczKfzVRfRWe5PcMMPG7iocAYZgmjLUrADshyy1gB",
  "key7": "3YhHZK6dazBBgxfvbhtRfCqLwhNvbm4NTtVgTssP1c2victNsUzbnvf5BHiDk7xr8YWGDzutnt84KDGVBorXvB47",
  "key8": "26DwzMBqFyJv5QXE1iyPZZoTnhJ8CAPJuPScM2jjyrnEC332b4abRJoHPij7ibNRmrAsfnz3LERSj8foPKWoFcWb",
  "key9": "5WhPLpLrmaGv8ZbScgPiqe9C4WY4twLruW4YijWgvz4tWyGmbo347HbgK3DapYyAfpf7CKhs5U2jX1V6uRUH4m76",
  "key10": "38xLxyuZSkP8CkRkCzHeAcCpwfqTf9WtYgqzwA6wkjzuxWjsZKXBfqDpEK5bxv712bgf2Q3DrnmWzScvwvw64kWu",
  "key11": "46fdEkWwfehTJftWgfgaTQpVC32arjKdRP8xY8gKSgpBgdZpqCEBQ5MCsQRL44YEakbSTBBxQpS4hAvsp3oxsBRk",
  "key12": "z3awPcYpScLpuV54jmwpoTbosCWwL1kmCMSNLqsJ1YTfQotQi4N6XNGQyMVjTb2vrUaEM3VRphfEMRNnN8hz18M",
  "key13": "qBLyVuNPX21ho8wDSXW7vdDfTd7be3Ad7KaKgfQwRQRKvFHNP9sjP8gXE9EJdXzier9ou58gTwJDwJXdi9v2UHi",
  "key14": "2JHWfuxk9pyBnyPspYg2PZQBXvTgvEjPNjpgb3iNr6u7MtrexprPrboaopp2LHC7SKwmoJUuYtDmfMntf4S43zjH",
  "key15": "5GmtpJC8YnwSw7ukeE47fmhcoFaAv8RVYSAAUmVq7fT8eNQ1ELuXdwQCusda8dsRgLtVNxTwNH9DFAas1Jh9WU2P",
  "key16": "4mKvNJHe9FwddWZnXgmMTDYXhT5RADwsf7TrsBXyLJrqMXyUKWWnw4Rtkjq55hWxuFRps1e5yKEN39mC9Zgqyoq9",
  "key17": "H14ndrMj9ZBWy5o64z36MP1eDe62r4WYjhJ3VVqyWm9kEA51z62L1k4RxjKkETvdQFEKtHUpVFkKGHLza4tqEyN",
  "key18": "3LgpLrMXpydmiqJGeevyKzptDE1QM4kRWvKDxwjaxqiPBBP1f3Szdwabse4hpMdKXjFdZb3Cyqy9YMPDtSZowbgT",
  "key19": "5tPJuqLWGrWHTq1shQdQZwvoSY59PbvkqRd8opn5sPeCBxvGrnw8cESHAjeqqqkTqTqJ4TKMXxp6FwH5YGX7wtTN",
  "key20": "3tok7eMU1Le2uZKP7xQf1Sra2TUCSeCP8TX7YhC6CsYYWQ15Sy6hRczmbttsMtGwzK63d48YfH5vm8rG5CFsMJ4o",
  "key21": "26yuoWE2JFyykat5rkJe444da8cXMrKupwrFJnFnaRxiKzJ1WfoGghGoFGWsQKVc5i6tzTZUFUWWDD8YpyPEHTYF",
  "key22": "45jWKsaWQ89f2JVaweXe71GyPfqVYcV7qGTqwUfd7RNcJrfayhgZaVGf3vQfMx5reN9psQTMkXJGLcrW9UMtFtSB",
  "key23": "EZVh8aDXLMKLXdbm2tR11F6GFZWtirVkVGwZMxmaGyKqovWN2nk545XzM5WPZuKQiTq5YysVNBkA8pLKU4Ek2bc",
  "key24": "62xQ4Uei7wrCCVLGrZdyPseyrtdKMbpbfjNbHCWA3u63Y4tM4fk1cAxYVqMKQGJ6DGtTQYVWc7wxPq7rBWo3Q4Ar",
  "key25": "65WFx5fS1DZTpaVDyThmf3RzANPXyA4tXVWYsJnNDZJ82n457ygTHYR8B3coDJ4u1pY91Z3vhMRouoZbHvgCfYxx",
  "key26": "5LEH9etQZ4nGMRQB52YAP34UeojX1e9e2T9sWxjdsP2Deky6NvWXaVGWFp3CP9MVBppaWzquUy6TTNtEQxw97Vzk",
  "key27": "2mEZE2Cg7SKZfAxLfmNL2wFSKP9rWxgCu4WqprYSXwqgoei8SyD5mEMBzds8DH6tB6DxJRPZxvpGieXdUP7HznRa",
  "key28": "L2hNTGFHRC4v1UZQAV6RQKhCSghdTXvzfz3AdgCy4xHbLoxqkWxwZLVtgVNDEek1pDfpcTzSTrLk6Zq8Fniyo1X",
  "key29": "3844YPT9FbXp5ASgC6FSLgttP8h15xLhaozDjb579CE1vCUUjRQ9sJEiZBvLos6aNHf49E8qUwLQVzgiMUU1Z8yZ",
  "key30": "5BSEvcHT7wA5ALdNERfncHTr4BtdpXncFxmx97edbspdVgXxLqT8vnrGiPvsDFnbqfD2VpzajdC4ikxgxFv2WbJc",
  "key31": "2WBwjpcQCcD45uKDpt6JrgqBtzhu94n4ihLHZrfErGWVyH44VWbnGTTtoFErkMSF5rhd4eg23yb55YzXvJUcZTSo",
  "key32": "3wRftUhCC98LEXmed5HvmNZobMrZDDCTf5UJUv1gAag1nRRxktKkMSTk4pVfqcg9iTgpFsHWG26Q4WBzKfPjs7Xb",
  "key33": "3bMdoRGbpBnCSsG6zumB1qFgC4GzARCVkGrP4xckEvpSYCuSjfdapZh9WnknBeAWeKzdmaVCWjcoqfVyvS45Mgb2",
  "key34": "wNpky8Rzhdcajk7WPAYM2XHADwJTxDM2oZ4hwzWQJ7oAnQgk82TwfEvWKwm5dCrSaNSXHY58Nw5LQw96VK3MdeZ",
  "key35": "5uiu69zQkieiRThCEa8vkHTddBy4AyTwXjEkB6GJc7KKkuNizKU4TJwzx7zyDTNcwtKTsz8G5BXU1hZcwccDUicK",
  "key36": "3YVmZAVqurgzYhy1zRoDx36UCh1ALFSrqAjtRjYfDqddKqwhEj4A6pjpv2pCA8G4qFus1JB5c9EwiFVo7NvP3R3o",
  "key37": "2qEzkGiGdNojJoGNw3j9qYEGeiZeyocofw2epCkScPngToKP3Kufpk5DqwN5dmwW1CjCknPdbaCP49GMAtKEP7N5",
  "key38": "4LTxnoN5MJwDtg4pN9krv975ikyGA65rkJShpvUKNgFnCfnXEfHP4wQSGX1E7mjcb1EPrCWYy8q59U6nF9S3uuAE",
  "key39": "4qtvo1c342SrBz9yGCkmxeUZEMjiN4DFVJ7tu2XJqtMQv3quGfi4dUWsU3XnEWWDETq8xQ44ErtztytNbAcYRvop",
  "key40": "5ApSWYX6RNEx66UsUKnhZHNoz2fhvgaXaNzWbC5zkatoSSbAP2FMJgjEjw4fFykV91ofmHFiucsBZMnxtMmBTLn7",
  "key41": "5epzXnGHmMwcxZRjU5oyrboUjcJmrVDSBSU6dmuvNMbyYinQx925ezS5UmirNFFFxzMbvApnn59LbVh1GVjWuwUx",
  "key42": "5LLL5oLGVaLSuPeePpFqQCCftWFYdwDw9ocE8W68p16qvwpdvAA2wo7fNhF4pB3P8abJFu8HmtjBUtPtHRgYjyq7",
  "key43": "LjfpsRzfupvEzF7amoLGzFY69yNU3E19UGN1ikqMedpEfjftg1YQqjJLDa7Pptth3k3X7ALWkpGhaWn6d7fNxYK",
  "key44": "tuPmmG7htA2qzSkj3jTGuEHsbhp8T6SZLDN2qB17p86W6JiFZ8goJ2Nobfj8UnSkdSGyugZ6Ki6NsE4oJn8B1n3"
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
