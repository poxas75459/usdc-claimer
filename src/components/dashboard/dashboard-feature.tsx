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
    "5L9HnpDR8NFLxPDQnXKTJm3HDKQ3wAx9c1MW5C7U7ZXLJewP7k9KHtB2WfCUDEu4g9SRPNugR2hBq6FG7qhhHQjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmhW29ZQvZChVGzweztD3bL9sb7aLb3bXewswoCqV32DC3t4CSVUNfV9rsqLod9rXDe2TQby82C53T5wjgWmvyi",
  "key1": "2ueVFqWM1nPjRN1FK9TfuTv6s4EfrZdV8AvnwgUSTMpkXZyDWJqHmYMRvy91EfVk6nuKLRwfEjL5PPY6bBsqtJYK",
  "key2": "unXVhxKJyFmpa1jf3L96UihcBFrjrSah6rNLzBL4JQPP6zRi4Vd166C7tRdftY2PzprXNix62FDKdVxW1MGBgh5",
  "key3": "3n9rLAHixhb9PLLCcAWma8rcyUBYwSNZsoBGJhPGpoLDMgqTYGfUoyTBM8pc1xGb7seWz5Xyp5BjEL7NedFPR8Mv",
  "key4": "28FR3sVCkzhpb1N4qVWdz9MmDL7k2kTMwLwrS6rxcN5JCHPcoTWzjBXD3e3f7ELAcUT8t34H3GQagY9uFjmENTks",
  "key5": "4yKLi9AJbzusEZKLpKu7DeD1cbq9eFAKxmbNhpb4MULhHSxhupq5iA4v1XWCDwJaEBhLSvtLUf2zAA8RNFZJnSDX",
  "key6": "5vS2S9Lbazu5BJrgsKSsmmTZ3HiaMm4nWnHp2sS9dfnNMkipRHSh65gMdxwNZzK2bm2HVjZtBbKWhQShddHvpfEn",
  "key7": "5QyYgGA6Z2wJ3G7AN6YhE4VxWHzzf1oF2qdff8LYVWXYGVYChxt1ydBWBn79E3dnYy4YnSX5SdvwrgnMGvuuwzPT",
  "key8": "5FAToMVSyD5Ucxj4WkZwSoDTUDxV5NAgH3Yi9Yo3tjsndZPaG5vNYL1NcG6MWtQmuUzYTxhjvkUx5KTBXzvK7qYD",
  "key9": "5jJavVLxzAfiqqpD3CrRbyrp5b2CRjYTfQvERUQTYWzyRhHX3cYFb2mxmU7yMQGupsC5tU2R4yMZWZ29r8HH3G8A",
  "key10": "c8ZXtAE4tPkPXBS8bcQyiUm6hCqstpbWN98gadwgurZwAeddV7tMHjGS8sFkxPHUjL7DzZWUqBXMMPLd7K817yC",
  "key11": "5vujev9ncxzsJNUzA1pPsmoADVnSebDRtroD4e28RyzHqAscKQAnZikcMkUh7cNCTXqi4a2yBMsX8rJxrBRUwdUC",
  "key12": "2VSxhwSMmgJ14kZHsBYFjAAFVK7stj72UY1Q38z2BQsBdfmTc2Z21RBTXHFEpisULEBx9XydUq36mbkG4scmtqJP",
  "key13": "5xRwzmqoKMUp7uVpoqfpUrKrwxpy9UDw4mpQ66umoWMBR7jSYhe5Xrbu9bXVdeuRvFYHqjnKvW8XUqgYVazviv6W",
  "key14": "5m6bNseFZiLpCRYp4PTVmNci5JxjVjHUB8MS4zYjebVwZUHttTemFPMLhnZaZdkzGdHFYN1H5Vb9q8djgsc6Dfpu",
  "key15": "4n2rGyEdDKU2bkdS8TtGTzWV3oU1pHrqus2BT6NjcjuJv3nPGB6RsBdZVFbXbNiqzvKZuw8NgHNuxrmkuZxaQG7R",
  "key16": "gwBjcZfa3bMsGY1n22gBmibVLsTfh1o6HsE3xPVtveHMJ1yE3U3LwXeQWggcL3E9f8GKVUhtgxYZWePCg29JMnG",
  "key17": "4sjNZQ6m5rWkrLdgubCr9AwTKyJ3x8ZJFskfUmnuJvLFn5UoWkuW5LmwHLqnH5hkYfWL1S8aAXvqQPqM723AUZL6",
  "key18": "4bw4iHfSrGZU7EgPY6KsRMiYDTGoUW2hBGb55MqV6LYb4KNkihKY3ULQYFt2SFTbng7VZGh4oY2ztyPCw6j4bigZ",
  "key19": "4TVj5rGeUEpTC1M6CoUQbHxRDSFVUkP4ubvFAdChArt56Pr7N8wTkyyZrEwR4iHSVHBVdCvp8nqYvQmJsx71p6Bb",
  "key20": "3txcBBGGvTdWsvPdsx4C7JBbGMkJPVAqNWbRGzwffMoQQ7F2fWE5g9VhkDaRpPAMQp2DHyZFme1fsAsxk57VMW5g",
  "key21": "3aDnzwHFqJQzkBmVzifYvoseDHV5bbMmKLbEpZvGpY8LKYZ4LgsUx73Mmkn6ZMHnPJNoSt6YDscSSBkQ9NX5ZDRR",
  "key22": "Yn3SsYQ4i8FxT7xn8JQAMB4CaH1EwrsP2Yb83TGNDzeJfDSLSNZ3bRJYw7MdifkxMxxFrBMfsyxZQByAr3H1CF1",
  "key23": "TKVXxfbNYrstyhS9C9tBN26Yy1Gf8VMQo99PqUpREaf9PDSG5bqZujoKH41GsBeBAFad9caqQEwsXRyvQ5EVw29",
  "key24": "2JSqUv2XCTsWtJ7V2A2AzLSKPj2t5o3RaMc5bjm59rK7vwPw2BxBgvAbRmE9b9xmC8bBPYKXyqiDzrnRxUHyLYga",
  "key25": "UGJzGRLXkcLHWw3U1AML8g8UigtdEHQUxFo8xX1KviLrgRLgNVtWcRjWNrojrf7i9QeixpsU2cyhMSy9PFbidUZ",
  "key26": "5jgo4ZTrJnoghKDPzr2orh2DzD9jn5Lgozwz6SRVjJF93SvvtSaM73qQR7PE9e4BJrmc7c1qA4vdkKSAG3bL4aNL",
  "key27": "3sTxGaMLgSi8iMRXkn74bskdQztmoX99ngfmveZxULMP9hH96AeEbs6CQzeXu3dsG8oFQ7GrV24iVFAMmaRbfR83",
  "key28": "2rSubonwZWgJvad8rCmutVUx2yPGufZ7rVoNkVK9jr3CYrp4LZn6LevikvvgULP2JDsYMH4KArgTdhx9Frqj22uC",
  "key29": "5GLKRpkezUHWXmTfbPJVqezKgJAkPnHxJqGc3cwjGNEyjQzUhecrRZKXAgtHjzkRZtdjuFjXtLEgEgmwEuiAFPzQ",
  "key30": "RcPCFajGJez2pUofk95t7o2jkjHAtn6eb4c5TKxFP9WkV4yuXD8X6TGHRd5PGtpHqAzFJWjK8LFJRCsqkLo8dMc",
  "key31": "2qLJyFTha8h4Z3JBksn9wceYCVK4yfV67UVZA3L5vJnjyqrnZ6Cp8PFCYkRpWT4P1DA9S6W8AkBRV4hXhAYtvudU",
  "key32": "nS5S11VwXzrpGs6jpCZddTciFZ9JbnA7uhSW3eKrqTCHctXqnNVz6oNqAD9whmQMPy43DGqaV3gwaRgLBv7qm5j",
  "key33": "343jt9VvnKqQzvcUxcFuQouwuDFFyARZaYXKqjZ5cYX9MddDMyK26VGTerWFBikQmkT5bjdGTMYNyCeEKomyZUEP"
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
