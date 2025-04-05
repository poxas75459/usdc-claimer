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
    "4RhfwzoQXASktHxe4Cec5ifs3qo97yQusRYkmtvvNuTJabCufpqRtccA1yXNpoFRR5pid348xe8LE9XfhdKSW5N6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aVrFYyfTT6H8bDXJefdg1TfCNBDm123pLcKjGCWKou8aBCSQ4J93VmCPerCpJ5oUQqWhnKCwrNkkjfRfWPijKir",
  "key1": "rzcUALbe4VTucHMF5JeqCFjAgaVtePxK65nDiPE1R15xQBPgGa7eoGHACybXX5Y6WZbJwExUZMpwsu5FY69QwA6",
  "key2": "2CfKM6t4nK6i1SNh4oLfVqNtus1ZFvt5U8JvXXFeqvHZgEDHuarsoZRo7SQoooZ4ULW9FXJNzfYSxYCqGxjshJnT",
  "key3": "5JtEU6pUSSSqwathSAU3Q1sYSnNEcmnWDJ1Z8FJx1pvAtxZVM9GcwyEFSnDfAXKdst6vyyGDJ2HqAjUeCJAmiReq",
  "key4": "5xghLjJgq7qrEmJ8m1BK2pT9xAsgF2CATVZiDfvc7ZTcTR1GBtMMC5EEuxPuXjfiY3SFYSd5jJjZY7vJyqKBPJJj",
  "key5": "5j82SMG4X5oBBumzYETBb17gM5YgPDNMF1JT1aopnmDpvhCPKVv353dBLs6AV4zbwPw37cDARWnPDNg3Ei2zeWC1",
  "key6": "3WGwWG1iaoyskKqjX192BTxND7qVW7ikfpfB37PnEWFKaDFcnqmaxPGmx6zwh4bZ5jX6C9CDPLgDSzQNcbFiPy94",
  "key7": "2ZbuHUxcRXU2neqTihHC5sMdiJnwYUfFBpGAqz6Gmfsv2nSqpqJBuq5bY3TtXqomY784akXm2UsPxk6kLMAg7CQ9",
  "key8": "3mTqABUGp1SnTL9Rtv4y7JMigMrWbG7zwzKzBVXahoZCxGZU41EpKQtYQ2fYZbpJGVvBmSSubC4AaaQmd8b9LJSz",
  "key9": "5jceFB6S65ZPsXL4X68Dcx4KgvhASvJecv2q7hoPJ8Ne4Ld9CAptM7bpdBYEYWDArDiX8PZEAvvWfDQaUpeaNkVG",
  "key10": "c4i59vihfztu6AfSCNDztztEhgkdAbQeBHk9HLexfiqT7ab8fk8cdmTyoFD5Jit7achcKDywzBEXhcur2vvRY9L",
  "key11": "58A4KfFV8635Yisz7URFz4qwAYewjHqf3B1Zypa9XqQiWAQHXYhX6zDkTWUom7NMWbnJUA9NbDjw1QnWmZJDVv95",
  "key12": "2sKaBT44Y5GWL3MSjMZwdapRkqFDwjfWBU5ZwDpUjRKwF3pkoyHJoLKq2FKvAEZhLhSDfmgv6XuJDbSfoJ77FMBV",
  "key13": "43UqLbeaM3xAB38HERArMnUfWmXM7Kkr85UstFsv6cBXDtN1Pvh6rNjPQo2KRGwgFv64keTENZD7dMmaZMQUJxc1",
  "key14": "4DJbkhPcZv7LZecJBkqDSytSiAVDYtYbW9WyUarspRhevRBqyCK2Rc2HWr648GpQRvxgrMuPZM7ruGeNKket4uBa",
  "key15": "23ZNBCaGAMG5kvQwFGEoVWZnyuutZbDhsMebLTf16mjaogtv2x9cf1khhRPHwx6hrfcShDn2seXVmkNa8qLoJNUA",
  "key16": "4FME2LdPrnuEHbGgemBjQw4qWcWAMCXPkKp8oZ7P16HmedooTSasRquA2N4JXnuKzhQ7XKvPCq4oGuFRRADqoESG",
  "key17": "2EdA7KKYQhYAXdgb8UuqUFr6VxmcPAHAZYQXvGKcz8r4NFsNx8eKearkpXv2rbaSZX7wvD54bbqP3Ph2Q1nbEo7b",
  "key18": "2DdNa2tmWBxFuNqqaQwR9uXQm554yNnhMKCYm5qCmNdfCMqLwuL9f2ReZR6jmW4vyoz2qSEpDjbcX7UmZ5T7vEA9",
  "key19": "4B6W4yr1nCpSU4JMiv6rSNp1jqJb6e5bDQ4macYwAWNZLHGyJk9Dcmt3QoUar49vNiEjL6jYksbbYvkbxpjLZjuM",
  "key20": "vsP6xwukjRu3eqF1BKmG6a6WaF2Q4AhQWtA9HyhEwE6utaXhfhaCbJQnqPRFcvTn3pSepborywKjVcAZ2VxtdWR",
  "key21": "5hgZiU9zdcjyjhDoxjm9dfD8gXWRNBpBxH7fdMKE9Xc199K7gr8MWvTfTpgbhChe27rDguJmo71uJWdy67kMVkQh",
  "key22": "3xjXyTQgY6FjJzDUhtKXMsGkUErQbGQZSs7mivYC57t97GXgeeAWnwhncBiwgX1xCQC4jTf8XhKf3ijf6ZwtfPA6",
  "key23": "vzFQ5fBZxDiqgBzGkMpENaWK4c1TLr1Tbg4DySTTW4vfH2p35PbfoRFypHow3D4wnEWQ2nfPjt6PcZwsLMYrALH",
  "key24": "2phJUxA6VYVu7vpLbGPnybWSFE7ygeaE9ZYCPyw25Gns11GHQ8ZsthZgf8LJ8E7znBTbhehUrQqUUbi9tLXbLaFm",
  "key25": "41Sg3SdptB9zt4VzDvpx5Gm3HyDcGEoJ2gUh5GZJquyzSZhM4c27Feveyy2R5hW9ecDNZsTrAFMGhnVBQzT5PAZE",
  "key26": "5gMmfvtF4EsSxYhcHvSGL719xD8kTJESBiiiKj3jVaL2JcaN4ct7NLzKG2Q4U5QR6UNEFQWneEnF3yi5DWDvkb7t",
  "key27": "3ysT4TchMv9jACBp5tG8Vnza9pCE8hiEqWooRUvJ76toBMLk7gmBRt4ThtnKx4KbywkK1hSVUR3VJehuS9yTWpZ",
  "key28": "3b2YKWbnKb33uFTrGadheKnqMh1CQpNYMjdudwcdvAnAAMuSo7H4sNo2KrcT4SNdjwWCbGBswv6M7ayXc3aHTWw8",
  "key29": "4EhMqi8DiJSkftJNuKCLzARTLMcouEcgdC3n8crF5crZVg3AvcPytrg8tTpEeGGJwoW5KFCMNBZcu53XbQcnbN29",
  "key30": "3BqmjmE1CxjKZd2Rri52Hc8zPjVw8zx3cCg92vm4ZCKtW5weRtEkZCxAvVW8CWEndKnKDrAKAY1zYMaLSLL6fPLt",
  "key31": "3xjRoRmE7YWVSGSndDhoQbdygJLQuBMi4qw3nMqf98hv5CsKjSK5eUBLpyzGpBgWjMtYdEAxCh5mvcpKDPMHmqgf",
  "key32": "4vrVJyfUn7Q5BzWq6z93MLVWa5rPFEnaUzehwSdyS1FeouLWjuafNH9gRpMH8k6JwNm8uGbn482ZMfxxZMZMvjQt",
  "key33": "EkWhKTAakKZ4SbumpvPsKv1qjWqQBZqGuvsxt9ZB8wJWTEnCBukX3WcU5ivJW5Ycdk9TgdSj85ddfKiu49fhrgt",
  "key34": "t63LeZvXbBwHXqCQyNdLGJHUBBwwULT9fQWymeXzaMxRKZKk9ybdfD9vJKhBPyFZEwmBrKUocyR2yuknqKkZ7HF",
  "key35": "2aUMGSD8gjyQgFz2pvBKo34Uo91dyNV6cZGXBCD1rdjoaAqXkLv9Q4LCxbHmxndouGbyjnRVayu9WT1YhQwtkk9y"
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
