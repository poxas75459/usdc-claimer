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
    "3TX3Gc7nG1DTtMH8gSshrw6uQZcnff3Lio9PoyKy94THMBEmVHoJp5Qygr7AaNVE9JhR1p3LsJVTMjaFfoZyV7Wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u5X3kqvR1ppfzRSW41qu726xtJ8vmChYhJQCrn3vbtPYjxGvNqNhFXSvWNbPckgYLxXywQsDRQ7uvkfTGeQQV4c",
  "key1": "26159s1556PUX1mEe6dxEDAC1jYN79LmHtUt7yrCWnL8DuU18CmJx3qgzxVtN8hxZAhGbJGQmDUkFoBAPfw98uR4",
  "key2": "4bfe5rM5wvS6NX4iTDQzn9hWgZoVDGSzbDrJC9s2oXAnc3mbiyhdMmvJ6fuDdwKUBqFAbDQtKkhPXHEzkFYYA278",
  "key3": "4N7BDuC1s3PW4xfdSkwHoF11qeBQmCZzpfZgid3T6nNdkTa3qFn8NWeQXfzyqGwHdZvc64VseeW2MYnD9Pmb4iAT",
  "key4": "49K1XTHB7cr478jAhUVMGSWpTn4XbiHahxhKDXivUCXbGbtVE27ExQw6Dtji5gu8sPJWDJVHcZiqGqWh6VneDhuy",
  "key5": "5FtiKFFCR3p1guLg5PXTXpq1ayiHKLYxkhmQLpFsJZSb94xPFmv3M5UXW5YVA44bC8jtcULGbDy2hiHDq263fgUB",
  "key6": "5AmPA6Zcmeihz59339hUPFRXvNZVM6533EcME4MJ8AKRjmxTduTixTFAjmbhTBTiX1FczsC3F2JsjeY31aD7Xv9b",
  "key7": "4T724rWQjzgSieNyDkLnZzmRhaNFBDAPdr9FYM1aJg71RJja5c1HpcMNrtLHbnEARzwDPZVFZMk6CBVxRSC81Maz",
  "key8": "4eAMKRcXuP9vqfVYHEWn4g9sb9rEEnde7imyhTYugnLyUcDLrW9a4tgX6dwxZkK54Nufo4UPr6YAR4KUENAwWzMX",
  "key9": "3L5mznyncrapyHmfj3TfKCJoiwjNh4sBEM51zjUZNbkdfYqRzsRFMqg4qfCg2i3StwqcGdT6w5XteXSZxY84BTYZ",
  "key10": "3K2Tfxpf4i291NDefwcnWBKyfMCPM96RuRCKYmz9Yzr6b6x3pJDDe5TBW5HczVNYfNFtP6E71u2o44puTfWDhpby",
  "key11": "32DrU9kKT5rvdBw8VvhndNRWmpYUYUoMfSzzjDkD5EqSRec9jfPRngiWSxQ8fkwRKowiNthyA7KK2kRyRNZG1rpx",
  "key12": "4o5oh4Frpa9YbZfNbhtM8PSpF5W7zSt2CAc6Qc46t5XJehvHUsUj69oixCXAZjdE9auKiAP7W4kEjhsLs8ht678m",
  "key13": "QZgiPuFKWBddSC9tcQzvdsR1TxHZstmQuLqZaKERy4w2Lvs6Hef2AgVVETRaR91rqUcyaWiPLJg5wE3k1y58aa5",
  "key14": "2VyK9nuuiBKTjVCCuh9sx9EKgusD6feogsk6ctXuyc4bPG1Jtc6boahzDHDzKNBPHJDYAQ9NDui4RRFsnVpWiWdD",
  "key15": "5TGHzHLpXqb8mb1dk8hrrL6DycgyZrmEjE1ibBAeAY7KNKgZnMp7iToF4THh6cJirbnNbAmrAVz5K7Mb9X13gwi7",
  "key16": "z6EbXF3MK45PdLrx9MXaKP7r9bQAcUvXWspqzCKbYvS5zy5iqeQMGiqj8e8sTPZX8L2R1usAsHvVd6Pub26bkqw",
  "key17": "245A7sALwfg7gzgFQftfKoXz3WwjAfZehPorc2qSUy8GqfheW8hgdeBB399fXpcnv4ihwboXpuqjXf5dvAP7dYwe",
  "key18": "UmJAieUausSbrerkqR8fP79A6aRVRtKCR8dJCYuH1M99foQ2TrFUPhTqjNs5oUMR1z6xz6djGUGTiD5yiMAMZsV",
  "key19": "vUFSM3mhzKE3Bc11QiNV7unXNYxP4FfqytFWL389ggZxMrZQfZHNbjYiuo26vyiYPk85aXGPewZ9qruXFpHCft6",
  "key20": "5rbePo5nAPyrxEbPq2xt3YzN6LsT3cHA4sSwv3RZ5jByxVXbfp1V56nLQbbvjxsf3XhP9FzYrj6pwpDWfVwvtdhu",
  "key21": "2pXq7rFSkH9MzZKm73SaN4CHSQtZAoLtoUA7ocdcFy8oEfpJExb5HM7KRBMCDshjLCWDr9jRdvmVctjyGWbQNTor",
  "key22": "3isCDaoYxp1a9U1D2gnry8EZffcydM6vDVZK3Uif6CkLjzDF6F7sFd7x6qoqXpqXrmH4S3h5foxK6DGTw31dPGZA",
  "key23": "4crY81rxK9HTdnrHWwshzrUMka7YpSuDDdfoaqN8DxFRHvhpfBxU1TbA3buqCSvqDMSEP6TYWfJVmTqvZXWYYRcB",
  "key24": "5MAhnZDQCrQ68xQbFgCimhXFXJfsoyrvTy2xN4rQHiMbep4HBvkL37HLefuH59yPAmo8uwTEdKmYka7fPqLzxMkY",
  "key25": "4nk2MjguXFjN1jhL6dRKeTR3EFZ5e3UTJKrytaoEMZVYD7cKeVuRBnkKsFRGaTUGnMwDwz1S8o3QPJ6dBbwvz3XN",
  "key26": "4pf9D7PsNQS74DGXjysqjrKvhHNkH9HmPw3ifeMixUsPnetV3vpiMJDjd7igsqARVaeXYQsCGkH67TG73eZ1fXFC",
  "key27": "5Sv3ZVDFycKZAj6ZEPXvYGNKMVgT2ZHyKFV5bLTHdKhvUfh7SLW3C562v8A8dKDUoUUSufKL2xYYwwLSQaeDnz9V",
  "key28": "21QboNsUE3TrqkhEhCt81X3zk6NsgEvxj4icmCNZBiFLyUhkAsMG99FavmbikBaUrAKBhEFM1tVK3VDKkoDsfP9T",
  "key29": "49XAXyyYYDYMDJbPGfzsjtVwEWDygqp1GhmBhXP56doCGPo9DDZpfoB8iUP1peW4SAPQxaUUPXfHZ7nyHiFrD5S1",
  "key30": "3maoqbahSB9ALh8ruiSeqAPniCWt4D5fETxDhcUUSd2GRjx7BzJ1BbxuiMuUEZDkq9UGfdKkS1L8nQPJianYaif4",
  "key31": "59Ymu7Xf3Ar5xAxjdtbArZK9WfEmDns63MazWa5wtPX4o1LoA2Q5gAr4eDeswyoAra8FGDG5AXnmhDcBeBGEhAgL"
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
