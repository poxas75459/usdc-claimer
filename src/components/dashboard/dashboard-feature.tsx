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
    "Gha32CdvmAHGryqKNvCA9C8qDpVUn7f2CNANQ2CNgM7hb4qqQZEExPpZA8GZUi1aKZfc8CUFP2RVBmrsykVsGuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21uZwYsCZeXXTavzrR5LPDB45GM8U87cDQ3nVpFYrzBBbRqvLzoGKb1XbQSUj1NxCF9DAysydxUr5s8EZNAEKqis",
  "key1": "5tbi9NWL8FKFSJMswqvzXxbujWsKGTgpniTjWAJJfnk1YhT7ZKpQ9qmWYJv8XJE4fEopz82YqU6mLuumXr8iwfRp",
  "key2": "G61dsfToTgtfZpXQshhmdksmpjMy1BzjKikmsrJ3e7B3HLcNerAjyyqx7cxv1grAxWbZjiC8UMhtww8oxDT1MKj",
  "key3": "vA1QYnzEAoTWojB3kuKRtg7yKu9QZjcQsq62AGeUX1WU3tQ5ezddHSWWZ1E7KcFNw3KPCkyf2feYfspaPmYKbaG",
  "key4": "2gKPTeeJsU52Z5ToRvPVQqz3Msynr751okmVkQVQAVxhtXpvsSTfiVJPDLdyp3WCCrJnB1efPu1RSJCdavxecmcr",
  "key5": "2Yo66ob1hNoxVTvcXudfCnoBsrF88GE9cZncg3TJGKhxXpasER7hefCUUtTmXc4XQRBoh6e2ndtSeviK8p9sWGeP",
  "key6": "45X8ASh8qPo6amCBuL72B92xSjccBn7Gz8dBffkE9SYto2uWXw2rSdgNKJQrgcQ1unqsUPhjd8qzQRyWr2KZ9cpY",
  "key7": "Nan8szoqHtxa46SNoiNV2vRD3PbcxWJ1CJDYsVoECHjiUCReMBLF9hvL8ub3a8dJKdirLZo6sNYiAfk6TvT7LFX",
  "key8": "44rYkf9wzHeP5xG3Y8guwUaJBSx2PjVAPbZcjgQxALNPSsQ1HFXuvdWGTPcKhHJSdaXeTkJhkFPpfoMBBtFa6Dcg",
  "key9": "27AFN6nzez8F4vijuuf9dnVLsgPQ2cACmA9sM3U4Jbc7yv2yN6Ers9CaKS2CNArpH4TqMvqgoHcbEfYfgo3GhvNX",
  "key10": "2LAktavFufMLryZXrXfVMY1HEBGw1fEHrxWLwbAn42uhTBPRNaqPKACYH2B28UkBzhXLkUVYdMbp5qyjDDmuPyWB",
  "key11": "3Dy7BsdaeKHULpdGahsKz1Fs8xVZ6CLojhRCXnqkX3Ye4DJn21e1TjikaYAMuUyu6XXuwxQ3mcVg5coeF1DRZyba",
  "key12": "5mJbYk5WFzfgFfuBJJQ6bnLv4TYQvzD4S8NGsWKx9LLfo1MQ6ZRE5pQKF5jS42FAqEnNRs4NT9P2PTKZ1XT7UcRe",
  "key13": "4PkT1VaVj9o2tMmhhBB35rG5YzeuUysc4rfdKKWesbmquGpiJ4ePiMqKFycvyrMqRyauR58pjJio55NMzyZnt8JE",
  "key14": "ybRgGyheEmPhEKbZNpUECcAUjK1XFP6g3TwNya3rniXbsAign3o3MYTHosF3YuQfLZSptR7en8vMzgBxc8ZmUER",
  "key15": "3a4SYzhrq8GwthC38sUPNuhbUJaAzMFenCdfye5JsJyZDzJfhFPuMdQxCnFxy9rpE5ziaFSjgT5FBszt1yqKK4ch",
  "key16": "62HL6i21pZo7aZ4yFUpejJJAzy9WMRT3N2QZnzkXbbCcUSeKzDJ3fPSmeGqhNs63igFSdNNhxnN3K7AjCs3qQoYP",
  "key17": "2JBfENBNZYBqGzMZCEKKUaBSQjF1Z77qb7w1Bjvdt2RnewT7nfkCDp8mUcqfsjtYFUkcwzcydEBaAjuBGEm5889K",
  "key18": "66P5QsTmDjto6uGkomL8Esq3rt2feu1hLHqHzubdyzmmJP29pZxUamBTPu3D9mb7cUQ3yD3k1NpEtqfCUoFNNYhg",
  "key19": "PfTrqQuQD2pfN14bnEs7zeuMxbtct6vbVwdW1cxrZQpVF2TvcrdRxPa2J1NHW5fTbgk2QJXndBjpcH8QhKcA8V8",
  "key20": "3uQXfGGkWMwQHMbAjWzJVLV2fsAMEEP86FayVmxEcyW8deGArtzNaQX9UDhGCt1kqoZvpRWwFCptNPnSdwZqXJqj",
  "key21": "4Nafcg6BU6LKVVGyg8pjq3hMm3rjThas8u4dH6PKsFEtHNzTNMtGJ4Ln66gxxrXzFxu3uCijFc7bc9uoY9RcyhBa",
  "key22": "swvMFjqa1ugSDffNxmekVJrZND2y2XzyaErRwyD9YeNcWbjgVsT21HKZ7rWfBiB2ZQoXwTvYH397Vh1qGf8HpfS",
  "key23": "5guL1xkdAyeApmRraVWARnEJKNCW4XRnFRh4pakjm2L6RRgTg4ZKtMtUMcZwCF9y4YygVAmVhHdu82Xv2ho2Zdbh",
  "key24": "2gB6oRw5MCGgeny6kQM6rGGbEf6Ts6FR1aNowpvmraYRhf7jWV5xbs83kZkeMcgn9uj3rBmuGZktTdU6X74uats3",
  "key25": "5i7RKaHf9Vdb7PSxsVMJw6afkscnyoqiDXXrHtvrZLrBL6geAT5G7y5NcdjX5wfCoUC5jcVohsMZXjhefa8uBqdB",
  "key26": "4AVBQR7pW1Cyx9Ujbngb84xVq71ngdZSNJaXpmpWsf8NqTAuwnHfavvHZ6gcrM4VD8R19oRZsVr8AHbVThhvZCtR",
  "key27": "5oknoTBnyj9i2jEkyEAkmVkBdqNAZsybNgLfn3x72dX75V9fG9HNoyjhxEXHyAqMJd7xnfrzJMjvtJ7KxwPsrCWa",
  "key28": "3arphhEsWiTWEPshjQ6mHfuzKCLCK1oK18H2ZSon94VFxNFtoZVQLsEed7SypyLv6gamZeGja4c9v4RfX3zjfbkR"
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
