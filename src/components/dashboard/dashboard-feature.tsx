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
    "5Q6mkmD1Ay47pxPXRcyXA9zLmG5abBRrtH8z6JnkHqED2a5e7DmvnC7tzcZupMgL9uBaN51gNpfPh2PQibEFSaxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QcRLxQM4TCma86dUHLGHEWi8rFgF63BqVVN6CAZjm9YANDLNWsX2USV2RNHsmLNNCbMNiVRu7ZRD4UyeZaYACXo",
  "key1": "2tuuNwX4pMhkyvVMMJHwytof3NVH2vKBVv3JFauj96CtDkCaCMvCeDaQ19wVFXaHVgrmBd8vrD6J2PBTfgV1MQRC",
  "key2": "L4q72pfoJVhRVoFXqsLfbSEfV6BrRJpunhJjVpKvmzLuFF5GivQMq33qhukz93tDmx9tnQsUNdUcRXJ17ju2sBy",
  "key3": "2ogp8gTskYVZnzM1AqAkwDoxKjFqxbk9Jveh54Qi5PhcZTQg6tDdYNAipZqVrXsNkH7nFy6Qq3PJSez7EatgMmqu",
  "key4": "2wARBotiKYxojxoxTZMiPhjrKwqvkWukg7wAJihoMP8BGCTqPvKKV8qvo57aWvKaC3maX2brWamEYcXvHeFwSeRR",
  "key5": "5sJJMSVBnbMtLtLhNzFNhmPD3bzAu9ba3TrXLFmXT8io1V4VELpzK99ghYfXyg6gdTKR7c7YKARPTTw1RG8haBma",
  "key6": "2ma6JeBYGnHipDhS9zciYzRcoiD1r1zxSHvSeXgT39uTUv3rmE25MevDrPSmhV8Wi6fUuAypZSuEzcDqZ5saEtk5",
  "key7": "6NeNwKAD86mnecv6J7RV6yW52E9sgD3WaB8VnB9K4Tiix3AvsNBBgrGbmqti3NyQktFqTCfnNPZkP9S8PPL7WcU",
  "key8": "3rz6TpzEuhqBesEkeNeo42eVbpbwzsxsHZv8wrtwgg695srYeGShSvtH5Xnu5Bcrz4XS4TycmPREUNVphz4Siv8W",
  "key9": "2e6ddPLQTHZd52Z9J7ns5RNhdhm4wopZyV1n3SHQ5XGL7j67QfAhcH366iR1eBibpqDB3397eEaGM1rQnnrz6Q2V",
  "key10": "4gDymvEzvFUTxGhLmoScXoQiDZH1qsbJLruAfaX6H5mTeRtMS6qHB4ogTZgVqXVk1na6NvQ3pDtHZZCHLoWUQmjo",
  "key11": "25hsbRyNoHaMsCtjtXAKjB6eRnfPFZ8fGM4eQxo7g92fPcSq59YeiDaebRsark8B6TjQzkLWgnhqZtyK1jiuboUj",
  "key12": "5XVmgbwvVgbQYr6qS6pNovWHnVKswgAqj8jUzNLYj3BHzvZuhZVNjza5YPTVrYzUi7hJsSsTffdpzwnucbCZSFDV",
  "key13": "3rF9r1JbdAvP9HybFhK3EApDnE4PAtowTAH5jSWcjhYCniFyZ1ZcrBsNaVcNJa3YCKpZ7c3ZhUZNQAvS9tv1v8L7",
  "key14": "4zVDykNBtCotDJV9xQxtKYPfy4EsfFZZVNwvpTP5KTrSBi9RsEfy9v9VMVf3nsWPQPj5Um7EEiL6J6vjSQ3fHn7K",
  "key15": "49pePC9yj4nypzUYL9Amx1v1bzWLS4ZnXd9ZyFaCoAHBSvbVmrUsSd5HxQg835CHFbghq5hYJ6VXBAPcdwamZE5A",
  "key16": "4W3cVYM3xnLb9aY3yXWtwPcHigXzXVKyzsQvN4dU76bFfv6uN5XpzB88MencaitwDBepvxC8QZp2ZdXJZLcUQ938",
  "key17": "5hM8Y9Yi7Ap1MuJ84x6XVqSRqbU5Ywuh7YBzu5twekbHRu2e9yF3fEWDLcw6iscedS1ZkCTLvWTVHQtNwmBtFj9j",
  "key18": "4kmRUFhKkBsprMtsL5KtWBZeixXHujUKry2ST1PmEZxvte7GzQ1jqZvAx7SdqgRp1E6DDrM4n5GAVer6o1CWFLN1",
  "key19": "vTQJZVdB2pBMoRDYUjAZWj7EcVMuguGeVUoJmEufQvV8aJJcdQHtTEnLYJshYvdtG2Vy9uLq8bPKKMJCBmfCWSG",
  "key20": "47HMhC4ENLjcXcczKgwyNex69YpxsJDR4JnzeJiymJPXmsw1QMBuv8F6f7ka8DfC3KdBfw9xP6p9xe8oW8TqdAZ9",
  "key21": "2VNhHTf5AGP7N2c5CTKD3vrKyiQEVuUsWMAT7QHXq5U4DtMThfZ2Sio6aLvyfgMGiegXSrdGY2kbXW6rXJ8XJTiT",
  "key22": "3xNnuFz4dL9RVZtYJLVBs56mEwejfuQFUtJcxZXVw4bQotqqzc6qMdyHrMWVCHcfdqCJkakHFPgFqBUbo9WpBy2b",
  "key23": "gE3CSeM2eEF9oa3Mmc8R8zkTxTLS2R1taMAYaSt3TN3RjWtLBTpDA55QQJMEDakMYcPkRwjGGC3UDnmZhNwgNSG",
  "key24": "uvbqqJSk4wKmWxYAqNPa5PQZNY1MHSPhaT2nTZGqBcy9zQMcT3awyMjoURajuY9oDkuuNkCW9xHuSyGTYTSa9FQ",
  "key25": "5NAqNtEaeNX9y4SuDkd1FmXwCM9mbVtjVwQ7c2k322aJrTGNcK3PAYatnAPDC6QzDdRxXqD25Khh8mmCezCRwsJY",
  "key26": "LTL7kaCkRz3oEte6Qq69ToCUyL2PrD8ieCqCg9hBEvTXCN7GtneBfQyrSH3rH8xfw4TbKLMNSofERPsdzE4LbGh",
  "key27": "8BXDibmTjSg2tkFJx9Qyq32qhHL4VtjjFSabtt5Gou5SveGqeSHFPESsvAQAKyqTcn7r1WPb3yWyYAC2XnZu57A",
  "key28": "3afaaWWJFUEPmFJVZssC6aTbqALjhn7J3gUZEPfmZ3LEpdmzGAaw6h5qw38KdfNJjgU4BzMTxiqDzkF4dKL2s6LF",
  "key29": "5CM7JJgXukwR74cUhuSGTkbSxf8yLkiEvNCbBAirtxEWt2VJyghugzCkckBs7koqmwzxFPM3pQkL3pL6PF1ASZHR",
  "key30": "4hRCjcZGzn5kQzPbQsvbrNgigTGa5SqHNvHPUcEERdcfPNZQVTnKeFCVpRSmscsVv1ua5aYX3ecTF3z5TWUCG8vH",
  "key31": "ATJ3zqxyFCJQkW4fHUxTmcAjwXmNLf2QPKmP2JrgRvJaGJmAsPJWLvLMD8kgNYLvMS5U52mfivt31KHqGum2Xsg",
  "key32": "5igEd85pvYhLtmxu9FvG5r6Gy6nwX3sCjBy359BSZa1EANapc1sSzeTJGvgTjZy9ohkyat3jVEaUppJbAcVuFn8Q",
  "key33": "2y2L6yrvZbqd5q2nj1WF14MP9Zf2Q3eszLKriuPeJ7VUdy4nnn5yJeGiKFR7Ca9kYr8eGC5UvqeEYNc4SybSNX7K",
  "key34": "29MrPXRVMRRZ7ToTLQCCHfu4jW3mWh8JK4HuuGmgKbWVvoF8JRVoxnJwV1x7ba7BbyHvX5E9SniYu1nA5fC4GCAp",
  "key35": "3fJJ4ViiUKBzYus4845zVbvACTzedwr7tT1f9dFh984RYxVKhy8PGQbF3EG6bMdC3HW89vkp9BjSLNPcui3sbH9d",
  "key36": "234KmQozCVUMdzVLAVpz3QsMLv4qvFV612JgT1nF7NwFNpgjDpHt8xxtDtxevaNkQ3nRpaLQsa6YiscwBicSbNVb",
  "key37": "2pkRtS7nQK73hBtMxPoVAcrPdB29XyzAswWnpqUUSVTmyRAbtAQMBLmcmvznAnEFXZuU5DtWCKpTdFw3PhnHBiC5"
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
