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
    "3F9j1gWHcBcuHWHm5fe1HNqd4oNtS79yBxttRvrt62Cg7sCzZBifPjKxuNjhfxnDoGrH6MznPfY7ZntAuGB1q4gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WPLbd7rZ9LUvCAV4yWLo6A6JcBjnkaFk1mCK4HsZd3qFgv8EwbbLgHkQ2xrEA1fNZ1LN28dRAN1naHJ3DQggrtD",
  "key1": "2Ke2AfsrbxodknMwdfVKEq8ixW6G28s38o81SQ7aRknEqbcJA6ma8gGdj4yJ47CF7Edb5pfEnTZXikKGKf3yEtZH",
  "key2": "5YWhp3bQpU69mq49Jyq9G7Zi4jZYKqUBE6LdFwnAonu5VaEYNuPNc6znCpdHMu9Qn9KcnAr7atuZ3Goh5jZayF5J",
  "key3": "3qqht8aH1FvE6S9WTXt2B4Stv1mPVLqVqL7mAr72qFxqrjZHLKuV3Fj4HcSqZDFugPB8jfQSPaxNaVyBCCumezD8",
  "key4": "2tqBzzxPy7xnF3mtG5z8NdPiuBXbychNcXUspEkkncpfaHmf1zijtgf9Ra3ZFzb4hZDiC53Q6Br7UHqehjVfeUPA",
  "key5": "5tY1qcGQ1JmWBt2E8CwGPBZDKc4XvJwVVBVhKh1UHF81ExNc11ekwaGExHnUEJELb6PHWJD9SQ4AEE8vx164UARY",
  "key6": "63KN4dj5HMHDn8GvXJmcktffQkfD2aM1koX5Gb6NGRAhdEgw85yXJvJGrdzuYZiTMm7BDH3hQ2KvPfjPyiTfBq83",
  "key7": "27oszvLtVByKjSMYajzSZSaEgxRUha7ksw6CLWVEfWXzfc764REo8r1rZWwfTpDShCVR78MtFGtuS4MeUKnWvSYG",
  "key8": "5agDvvMHHrtjnMaaeVzCfXspAocJMvnDA437bUmh19TEU5EZnf8bFjMv38oviXk4RGFW36hRpSg7F8L1t4TZzsot",
  "key9": "3ZtADSaqEzJY1t3Mp5r59eyYUZomuoiwfHXBbhaAYBEEnNja7UwCFqz67khzgEt9oRvHmp7uUwDGFFPXKyVLhhqs",
  "key10": "L8uEqC8t14xjZLzKxirPwA6m7ziysb8qdWv71JcVaFby9zK1kXNQcv11wkUmJfayUwcFsbrLSvTwbgiQsNzHaYo",
  "key11": "5R8kTJMpbBAxBN2d6iaSuvSsWwhh5dGfkSzpGTiYnLCj1zn61eyyZ9n15kdxkxjjHbCRmakkoFuNQr8asyFEpb6t",
  "key12": "2NuaF9hwiLeSoK8bbdN4QQqNF7NCGTyaPxCgW3yQcBNw8gUx6eMShygeJJa3SUGqTj2Dr81EVB72Fiv5kqSGu3Uy",
  "key13": "2BoDPFeGq2YV41nzbdDWcJdkebnsGZV6KR6iqLQAr4iczkCTMMr6stnjUEPA65grUzWgGFumg3JduhPioh4EKkPj",
  "key14": "kPShUth2WvCj1SEPnZveJKKeaPQ1uxWzcNMwQV27KxxU2mivJt4zZVzCwHvzmJ5btVcSwgvEyn3Pv685kGZgQQs",
  "key15": "2UX1Vt24vZfTonfN5Sakdo1vwgw8CYwCBTn1HpN1SG3FDGpQvmKNj5H1DWEV243H3rfUK112r3C7WbakLUbAsqyM",
  "key16": "CVehbfJsnPhcYiXkCe8XHDnQX9bPmMk7vK2Qy3UC57yW3fLXoCb4XGVx2VRss1cePbiDohtaGTmAes9KuebUyjV",
  "key17": "4Xxu527WeZ3ejdbtHumv3xTgiaBEFKauzaeQRQ6PhKy31XTL6Gc1opxLR64QmS6BZ4J8p3FDxbpthGnpSCmQajke",
  "key18": "5j8qEZ5jj49CrXJHKpRSXUPTjU639VFcnjYMZ52VpDpsaeTudSDVygBhLurp8wUgesdA1dCJH32VzspaK5B8PcM1",
  "key19": "on2NPHnggG15QSfP4N2Qx3zHXj9qxjgf59cjKegDn9tMPvvLRs33JCoWDd2aWrL7dvrCemtjHCFUjRacaupiUAm",
  "key20": "5xcCuSzzcSJSL3Jb1MCvVE3ofEdh3TXxaK9aUETNE3Sn3Xuyp2Hoh431uNotEkUxNjdpadkYnApxwKrEB5XjcfY1",
  "key21": "9BjmTWoNaQZSBDC6f3pwS17fcUYV8bCArnKssJUB3QZFoqaDTPjbkM7p6um8uKAbxXJA9hVFc87GqwgGzNTY4Y1",
  "key22": "5RRs3MPGxXPbxWyC9BmRCqkxwvxnvqJkVtJcGCMtPfjV8UosbjvnajbYivBHaVYcMMmeMofQEfGB6oTpxePTFnyj",
  "key23": "2f6gYGsdGqPuaXhYxbPvK9XwEe13twfHBpCmbQNWQCzkCzhKH7Jqhxwg1peGqK75PiumKB89zLC3USN1nH2kcXKC",
  "key24": "3zca3CeoPFcaJ8Gqu9DtwWc94XZpCC9znMbMhhpmXKyru7N8StgJHBtJucRMuSqnQr4MmYizKSm65y6WYEKsmVKt",
  "key25": "4X7Kb5ARSzpJs6hipDXtRTjEWTFupghuKLTtVFv7RE5bBjJSYqM8ikeUZHyEWYevKBJGWUetrS5evUjEopwWE7yf",
  "key26": "4cPeWnV6SF4zPu3p2NSDxVKhLhEvJddkksHjhgvvJtk1yBA7JnT6bit8AmiDxbS1grFipo3ANTeauPJmnAXbB4AW",
  "key27": "64kiEHHjvhUxVgHdp7kA7aCwvJbuUxb5n32gD5SmnpaNXEnxcuej1fTYJYCnP4FDQW2vz9GGvx2akwguZtQFXpr7",
  "key28": "5n8RWQRWMGsGZAPqwJ4B4NFXZb4zgxhCCXzoFoQi8FTnnwEuASK6M3a3XSVvxUa75vhVcF2nX1STyWCxZHuLKBWm",
  "key29": "4J7kR55EJMnfUzqBjez3TesmfNPCvUmmJETPBCuVvT1YPk6GdLkfJyRg3wANZvdcUxDEGfMaUZneBRrartA329VJ"
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
