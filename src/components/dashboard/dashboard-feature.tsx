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
    "5wZCHcW2EBYKGh62h63ov1xbwCCTTuBVxK8vKMrb1Sm2J2PDpjYpWAredrSzzLeQfvqwbuujGd9xSVjedpsjXKbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zBYh6h7RnBQwm8yJbuW7hEuDHKpuk1xRd7XRvcPRH2XqNyFHLKYhgy8u99mikfTg2FSkRjdk4MPARSCxEcJVPxe",
  "key1": "62fA3iv4LBEtXxpf5wSBhjZUFpUPt6xT3Q9XsM4Zf63QR857yp8oypeDU7LPyoe3oJntVMkqsAwSrEyQto42xGDg",
  "key2": "54URoRrwYjMJxNU4RP3bsimgSvE3TYfomrnFzcMjqGd8zgMtNZUxJxs2jDf1x9WeGZg6NDeRN3KqkRfwyvhgskoW",
  "key3": "5TbPvZamhxNjtTxqZbsaZJhYjVM3z5nqeAiS8TvLA229nzyZ9mvduRCbFCQez624Tb7qfGuLSZ98MHnXky3ZRxC5",
  "key4": "hsovMz1xTBGj6UXHApVRU6smgxs8t14SCzN2FYUEjDnTpFAK4x1hLJdhS5YBL65U2rGG3TJFcRsGRoZGDUbVqPw",
  "key5": "4CQvg8YSsmEh7T8spPURXm5APdNdYGUHZS44ATT1gsMr9bi6gxAyJnP9N89coft3agrYZjBoi4q4fvSbu8RcwCYE",
  "key6": "UPUPT2S7dyjTWFsHqH6SRpdZwjkj1fe9xbXcfKrogNkKJRVA4dD5VbBisfDhtnn4Gvtb3DrjsvZY4DkToVFYvL3",
  "key7": "7m9Dczmfibo9tzzCHWPfWP8TQghXTignqXoMRAuXBRX77YcT9Nk5MMiBmzLBZqYEwnLVVqPz4wp3mN8r3cAaXtV",
  "key8": "2RNy9qmA3TYEkSRNrGLg4T4ELxg36qt2oPXwSQjiwHwNAFsXQ4bkf6GdgNZDyn8FZf4XKBJDov83s4mobRmPSbuR",
  "key9": "3NrJBXE8vPCzKwZBp8F5D2xT42W6AdkGknggcN7jQRuWWB6vMSjuVviZCTUsRFJR6hJsKG8v5F4pE9HPCmMhD7eA",
  "key10": "4XM1QYZEJnAPfS9xDAteLNANdFh7LhJy9pdmjvucrTTKgrF6kMqECnPoXuyve48xTwahMzsD7esicYoj73YtvHqA",
  "key11": "5W938sLv3TNgWwFKy2zebUVux3KLNzfE2EZkzResEohAip3Xz3BvzWLDSBn3irvo3JiA8zfoXDbjgX1H5QiqaTGQ",
  "key12": "ZhC6xbN3geqd6DS6gyqQ3KJ2hZEKko84jXSpDGmeHnF1rDg5uiT8Z8EJHs4r5oAaXipjV9P7EgEN1KKdxBAk5et",
  "key13": "4cDbmrBmrYndL1BjEFfre5PcJmAE8k5CKZzU5Rvm4aotF36r9Cs792cQma5qux4FEkaLR9RnKKY5sWQHDuqsmxFQ",
  "key14": "4FJb7zMQic9YLu8xmgY3MpF4ynCD7xz1xng19aZAqyRgUq6HWo6nFR9i65rPbN1rxvbrKbhU3a2VNSrSjyPeJTXZ",
  "key15": "3ng3iCgnXJnqdRDHdqUFCJ4mndvSNuaNQjTwvBEgynh1uwWubRiG9pwq5GgMxxZNWQ7iXbsWQJTp1xg4BDthegLS",
  "key16": "3qwdZ1t63Pm4wa3HZAqdtHFvzXTnMoYQrGvt4ZXcF1uzKyEPogZqCWPEVYgWZkPy7s8cs7LWU3j7KPFNAUCWeCVW",
  "key17": "2CFL2EEW5Xj5PpaFFUDPF9NAQgi4DHqckpSaLcvBQoyrFfKbrMYkUwKYysLe6M5rUs8PEq3jcpzhMjKb7HPWaeyT",
  "key18": "3ELr5RxMB8ZJUFxLhq564ypuD3GdswDdGQ6b8oNRJNt3n25uPT6u6LJdgWrwjvgZPxxd34LQoRTdH6NFevdq8oEt",
  "key19": "5HssvDStaCTet33TCVvyivU3Zqy2mHqRvrr3N6tR523iU69TPg3AHee9GNkb21nBVHBMStiy2u2tPEJToHcPhFya",
  "key20": "34bu7wmH7echy6CsmD54oxQDb7fxB9V7f4qHaiW2u6QM5yhPvp54SgYLXMHB9sQ8KBwiUeMVaktmyiRPQ9Z4Uuc4",
  "key21": "4E5qE7SDshzFBMexM6SfNs7zYtNbqmzeFS1ZtrL51Mc7BHMqF4xZnZ7HiUGNToeDSyr8vWZgf1Jyv8LmBpX4NxL5",
  "key22": "4Cj7K9xFsoCrvn5Egs47aMHAgjcd9RggAPTj7VVKSnLwD6kySMCbtSJrXHbNpGtdZfFa5ftVLGy8VApaCqRAXPTp",
  "key23": "2york33JPMVP6eeULHKUVRWyrZjymREj3h6B4ZmXvpa8XiMiEcHStzA2cGPAyN129YZvXcMrYrnrUGyEbWinX9AH",
  "key24": "2vWeucNfnaFQk5bEPCg4caqChTsSpgNdoJPvQBVJhyVrKT2xu4GzFk1J5DskaWbxbdBSaiNkKqhMiN8wUqiu25bb",
  "key25": "3L2wCymQ4WKjMwZ9emSfTTQeoXjF5JqYeV4XUv3KLCizjdL4x4nRP7J87y5s9sWhf5SAq89tq4Qe71Z3KozKQJEB",
  "key26": "3ZyP5yAzx3PmqqWJXsFk71d1EFPQ6JLjEgDZ83s4KXLoXNf7MzxopLBcagdDqB854KZmCnsPHsAbaXafkyFBTQxY",
  "key27": "2cK1vaiy4HiweCJndqGGPBqSJ7DqsLUu6Bgu68SHa8CTRu6E7esLtFi7hoVJjB3JpczrYAbcnq64BCoKHZoEA2Bc",
  "key28": "28hibQowCWgESgkabUrFivtUTY7WJyqFTtjpWTwHuStCuUn6dAgj8ukvLMK8Y89aCK2xT6oCnt8Pqia48wJfAW6Q",
  "key29": "2HtbNe8iGJLEqsdyKi41vzwEXqrEVDEAsHMH2AqXWhzLVbFreto94unCBQyuisn68mQx8ERsAfvrnmRiBChJ9mxN",
  "key30": "3rmGLsDTNdES4mLuFykqcphbANF3YdFQi78Yn14KsXVYk7ofqt49R4PjyE21bpP4Fw1et8Wcssy7AV2RgugbDC8E",
  "key31": "4MAVgL9JvRh19qZV8nYdUSzk6eRwyCG5UZJm4Bp5QZdsNKAnaAxy4qsr4KsMtf9vS9q5L9JuKFs9hQeWC885GwsH",
  "key32": "2Gg6yvbZghfLU2zroStpynDrHzibE7skkQEsnyF4TmFZTmRSLiuP1sLTHpFPbswePuWyspied9FvQcmBsN9QmGnJ",
  "key33": "4GRcP2bnYENFL3yqFuAsTwEMyLFMgRsGJC2PCMsijXAmK2jgWaE9BTFKHLtgQJa9pJuxZz8nZfhEPTA96gNRANSx",
  "key34": "5bxPqtUp9mBtEqcgEkMNHBSxTHcifUhXZzZgUmSftKNszPKW7bESK5m74Dhtrzm17MxPYrMZRCqRxGMTL6degXTM",
  "key35": "61MUCVT2aSRteWiFM2MRKN5TzYzFVMRNkHLqsCaoSgPZQ11ixyPnvaZYVWX69PueiC6UJFLeExBQMPxwnfhVXie6",
  "key36": "3U3ziCzyVBEn27Rdn7xEqaoGEovha9xGJyfKgWNYabCieKwYh34wHFqjNHJxPHYcdVuJZfXMjM6jTVYaozt7YQZL",
  "key37": "zmq58xMRehoUVVZQEbGe3pw9RvdAM18BygAjDBffwqgz6nvyUatxVPeFMNrDtd4HaH6naJiCeL38uuG2AmYkE3h",
  "key38": "24NRgSzhuYPnpgmVnfiiwmhBw2tJMm3VKHZUUq5qejnCwEiCdptYPtumDdCG3fvcU6zz8kdasXsnTi23XyzeqCPW",
  "key39": "dtyojStxaAS3Zd1oqDFh16shk1DHEZkRHAavjPCCGbZGyJMJHg6DA8EoSU7oD8yfjzg25iD2qxGvN7VnigTnEfE",
  "key40": "3XhbBPE9KxgdwxjoNZsKUJDg7k9PuQfXZJwzCEwWQaCwtzHJEitTDxn5o3LzWeKpyPzJS8cknPfotBuYaf1k9rnD",
  "key41": "2wziWvuqzzCB2g66t5aF8wrPH5cb9KD4h2wKKdYTEooy7SWr6DG72v7S4ppuu2hqo7dZika5VmS6rEdeRn4ciapG",
  "key42": "2BsdwH5qRstbW3n3dYUL7gVQfu3WsDoUGuTHuDyxyBmDpafK6e6QMMEe5qwrEf3d45wDtzHhkjumLi4GrWEG3FSa",
  "key43": "c8uuHwkUG4vcJ6ofi6Qsy87CTNe3gvgWLxUxz3bB9X6rvnwDXbh8aq74XM75GTJCQibcNYwShEvZj6PkEJ9yeCB",
  "key44": "2fomZYyEtUPrNF7noYqsR7EQhK5rqCMEuA3qbaZVaiKMu25rxNaguVq9nsCbrxxdZKX1JWkAfrBNXb98QwKaN3bu"
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
