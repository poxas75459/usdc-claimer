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
    "3RifCXXkLvMgkNJMagJGbgShBBffYABfvoX1REDgPvSZGwqNKVjMips5qXpE1N9KE6wYp7jgcgYWseog81wVJbZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rfnBy8FH464cjtj2QR4KhsffJQ1jvFJFuUK3Yb84EiV3yFjSa6kP61SvRNerPShVaRvudRnc7vbhhszx7dSMME1",
  "key1": "5FpR3MpTkuTMPatbrzvyGRYs2RfGFQZoLRYN1KBsPTsVL7J75WsRG7k68ty7nNgKqTAQRHtsfB2Da9frNbNP7fA8",
  "key2": "3SQfrsbFdc4AU7PRZtLt92dkDHscHhZdg6cALvyguxvEeZizVGJtap7Ky9DSFiNK9f6vNLYGxkKZimmYLmCd9XHo",
  "key3": "5gqNQgsaSs54Nfw86eJf9ezZKnWV6cCtrstJNp6bGpmvSYw7VWQQssxW1dR45BYMwpAPRNyxY7mKxACpzoc7kH9F",
  "key4": "5USfSchC3a9LdAJEvpdFLe4bUmu9d6xfZKxPyY8mQ2A2ocxdB5xHUTBpoGhBeFBEM3XPu3d8zohRuUjjA4mFjvHN",
  "key5": "3DtyB5K2CiNLTnVvCi1eHWeQ3Rcma6fNfiuFxWbA2yEH8FmUoSZXkddAi8HNzZHAUnKhQwf4jWqzrEZFBFmobiEg",
  "key6": "59hx7PEaiXR527AWgtSqqkCcqPnhAovnU6AUPc5G8Rg4yHEzrX2aoCRXLJxAof4BgCtqvAbHruLPAoAKjiGH6R6c",
  "key7": "42GRUM1FcRKj9z7saghR6QFED1ptQP6Zg4C9oMPdE6uKETg8jGXpEx9GkJgGyTLSnnTSTvh4oFnjoNSDHhQNd5Vv",
  "key8": "cMQdErNrZ4o7VDR71ZuYq5vQDYhcTmPGjKTpAy95bgaMEJmVPGEdwETj1VejSYzneG7nmya8UhckC1WHDwX3CJ1",
  "key9": "4mjeUthbh52sDYoMUV8NKCNSau3owsVXXPCt9DBaWNKT23zVEdMvZ9dNCZJzGPJjVJdWHtqjdWZFKsx5HLh7UYLL",
  "key10": "2EPMCzKmC7hTYs4PznEukW84vmvCM3FeUKa58TnNSb2oaWKQ82Ls2rWWzFQMTMA435sWbP8GKQ99yX6KaW7xMrn3",
  "key11": "3kYVNYRhiVFziGdvdQKtiKr9XtJPyDZZQc1kZt9tMUTChnm51grtotHrUqSeZPRg6xCWRJ1vnn6dZVoEm7EpVa8t",
  "key12": "3wMvwer2etFBBeCqkqUhLMnU13KTLsDUNCvifpCoLQXUF5kowgpEcEV5iCv5s5PZdUn1G3Px177CJFtZMXZNPd7P",
  "key13": "u9M2mJ6Tu5e4xcSpmTegzxniJJs55P4BKgMkAuVxVZQ7bUoqQbYyXvUdjq4UJJwRcAzsYtpRUAqe3LquPDP1hbk",
  "key14": "5M5KSvUHDqSmQKuotzdgcGn1ZbnafcRJypYvfvermBXN8fJwuLx7yJe8k3kCoaNA3tTxeZRfoDPiGcjcX2UmVsuE",
  "key15": "3AGyhTJyE3ax4H5iiDgiL2nSK8UfCZMzP3Je2drjN7CVPDwLksiwdscJsPC6mhDVPPBbwucnwXTpRh28c7ChzuPM",
  "key16": "3MoMGAM2WwUL1wtevFtNBzGyTmj3fpVBBJjhmm5T8YnSze2wu7vjSZ2wzHbDxgFqxhVuFZNWzLxo877xzEuN7iEk",
  "key17": "2wDNhYuyw4RVuhkuhgTtQN7YgdRtbcPr1dHu2mby6rfcYpwF6KcsFqioMbTLdMU9cyLA2X4h3hak5HMeacpV6QL6",
  "key18": "BkVKUdxjVn67CqUDpkJfNEdVKzZqupjVMt6yjeqmHgHXG9amnayw2hucs7qCdTxREFk1UyBB5c2JqCWUT7LqY8S",
  "key19": "5HihPmVwgf4kiVSk3ZyTFn9GpwrjisP4L5KukM7eNVKXTXMMq1a2p6tiKTuYi33HLVLGiLg9jqucHPWMXhdpsi3e",
  "key20": "3KgZgaMF4LUhbRAng9BDdwqJLrRqQfFBpBh6kS4jFF9zyvdn4gR3ooj1w4R9MvoYXQ3K4WfKfvtxESBmQw7XJ2Fb",
  "key21": "9fjKEhZGDEzyvE6SF5UomUoqNNNHY3HL9coobZrTxuxrYszp3hz8YdX4Pjaj8gRuShtMbjXktRfRSQipY5H7MC5",
  "key22": "5mcoadXHUh1y79nWsFt2jvJniVfzdfbUJDcmzbg176g7REyKVVcgYaqqbx3xSqxt4w2uLRBeGDbo1Vt1NqH9Bhw6",
  "key23": "5Go2cw7LVDza2CmXBTdsLXCQUsdM4W8uE7hRwtezLbGKkXGWq4T1qyo7bG9Ma2GCsazHxRetCnzQKFz1oYZJ7jNf",
  "key24": "2k8SHY12u89s1icByb1vXNLRupKZ1pku3NzfNykfKUc5EEvUqGgfwKPXn3bzrVANx7t7nSRSew1hrXrgfTHHXd9J",
  "key25": "3gasHU1wavdHdHjviBWnWbbTJapLwfXnBBZNeQRiViR3QN2zUvVMhkuPi3i6SNkEc5hgKW6Usmq8Nara35T2iBKp",
  "key26": "5H2Ykzu5JVGqgzXmhmEn4LvT9cZNFM9T1vwofdKh3eCy4EijigQKZiHUijGcPA3L3RfUQxK9X4KSMvQAnPbdaUmX",
  "key27": "2gw7mgxPGYHadbAHRZbiESxZppb8pby9EK7W6RtfbbvrVJS2SSjdQ2b3fj3VHd6hwK5sTfo8WjtK6NNJdWNTkvLF",
  "key28": "5by9XeLgJ7kSfegmcVaPQD6utuWrBe268tbzk7Bq3JKAUJXj2eR9HV4FLutoAcDXDLSBsjY41T5qWb3pnSghVo15",
  "key29": "5Pw72JRTdXWuDDGx8pRD5NmGs3eeJvU9xxN5sD2MYmXwt7GoiWCjLKgmUq4T7a3UJytpv3v4ZNKqPMDcHrQ12pDo",
  "key30": "5xfv6ECTciNyG8RnyAhAjeBfk44WmZPTw6m6D1jcFWZJLu1VD8jiQvD2DaXPGySoqd4eJVrGmVoiwQo6YNF8DWqw",
  "key31": "3AawFCNKSQKLVtybhE7izgTi1fQoByJ5UAD9dDHH7PfZcYaBSY5AqXYPYVpmDA8T4puzFqLspvUv1C9FtJYiMSZ1",
  "key32": "3ZM9pPk3EWx5ehyzdDxJYpdCDtH5f2dju4zHqiRu4743m1UjMAAZhn3JoPGD6bbfeW9AJQBsyVxSs2KW8vvt7rwL",
  "key33": "4gDPXpfnJ3rfgWm3BdH1TgYAgGg9TYNMATrQpezjuQWQeZrU6D4hqWPBvzzdGeKBwz3jsyEcxcgwU87Q6849n4Z5",
  "key34": "5xZfrKNcD3TQkj2AxeRZfkx9zAk12TDnF29FWWLV6rXH5e8AgYEpXRtePFw8uqfdTRe9KLZivDVpdT5FSp1cAZ4Q",
  "key35": "4b9FXRiKC5op8MwiLwSbaf9b8mCqBHJx9mMuxxKDhKz4TukzB2rQvX7JQfUomM832CRofgLa53RKBo4pfygwSskg",
  "key36": "3HbRNx2SYKygYLJkUbQJxupgb9eDbWH8imz64SsVgoX3LjtCaeZug2643abNgXNFmQGgetXARDnvcwpoPSUNokeH",
  "key37": "Lbm48mSC54SWfgxgwaunbAYRVfvpwqXnfZzY4saWkJW1zbQE3W1Q83L3bVawQhA4KnpL5adjFzUBKZ6KAkp48FU",
  "key38": "2riXj4NMbtMwcNycnY27wo3QPZ1K7L9EXqLojFVoFzWMJxcFUEMban8rT7aFTVxJvAPfJ4yNjiLtRFh39SSpqV53",
  "key39": "3pXVobwQtmRmXFNM8x5HXiAuzN1tJh9fyGvSAJapSabmgB4RbcaQccXKQnJ8DM6kyzPfo9xjuLetjFhdufk6rnWv",
  "key40": "kc7ZamfWvzQtJeQPrcdwSQP6poF6uWHvJYs6epob8wqqy2QDLJUSGi1GKjupqnGSbRkkqo2JpZEbPRwWoz4yWdY"
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
