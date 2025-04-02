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
    "3AvFnSd99E2nPqdJugnBr4zUQjTwW5Rjg9gvAYftBqda6nm1FqLP8NafKiuER9pgybRMJQUw2RdEAsF4bTuXRJbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecrCioX94XG5kA12dzAR5CyYYC2zdtyr6sH77Ec5J3hcr71NTk8epQfnXbb91CWg84Qc3oy51znd3tMGRnmSoQj",
  "key1": "2hhsWPZPMYnZ45z7UuP9NZj9T9KPDLgxKxyThPxFFFdGyGYxUJnAADK46D3xJ3k53gQxZSu5cbAhghrz5PDgc9nV",
  "key2": "56V9f8YpekemePmebK6bFeu598UAEujwRXvN53DWGsg3MhF2SyH17AkGy3qja12Q4EJJYNFaVxC5SvFfDTfknEAU",
  "key3": "3P1zM4amVpYU5SFkcLqU2ugp3S96rAiknyrPQusK26gY4D56itMMGpMmUpmXFtrSBG2QbayAm9Bx8dMk4HWQ3aDm",
  "key4": "3RURZnND6r9ifwxyZb8RV8xQZrWrw1DQokb79vUhxrZ84JFjzQUpHiVGrLMUddY13yUj541YeWNQHPkmjuhjNJKM",
  "key5": "2JqQDQpStPW637KTGRoEmBeFUSg3ctAgu1LT3TrPXGTURRE1VXd4NHK9jdD2QzWj5R6jxDiQcSdnJKSQpMJanNWr",
  "key6": "4HE8mJmQcUkQHmcjn5fb8e3CBAvHQ4ja2SvxT8RatTuyV6f6deFPL6suPJqRbWgF1J2Q2NX3jRe9wBrKnuYTjPLW",
  "key7": "2s4DAQCuy7zCfYbTaqFEKEyjDNhGZ8zpA85tQVCHpDjmTy1EjhmSYHpKadtJrXKJZPhb9MTp2t7aQB9FPwXyNpV4",
  "key8": "2nXojXpJc2v6yfovfbQzDjwWWqSfVNpdb6V8sL57uC5qko1qaEGRN7epWNURcBUyYFyNJHe3exxw11qhvr7HB82u",
  "key9": "4ssnC2XWno7NgSNW8TEycQMY81wRjgqPyZbNXnbiSvsw2eaDqYSP6fFhbxbxjXQhREjegimt5TftRQgfgyUoTD34",
  "key10": "2WcnNAKwiU6kc6NtQyi1wcpkDcMLeVtZncvjn2UgeEXFhNNyPgRYtFcuStR5Defd54kKheV95yFVYpXWVuvSRwFZ",
  "key11": "3nM6BydUXqwxu88m2Ln7AV3RuSvKozxP9WttWM5HGcTPk4Q3juLpNBVjrxpnjxkVbnYxZfCmktJTRUgTKWiSd1T",
  "key12": "5HxXEGN7KzDDfKoCnPTTHsqtm9fB4yt6rJggTLRGDSULZfnCW935tLot1sk7fXSSGrnpGqUr2nxmAmQefGzDE3Mj",
  "key13": "2oH29T7XuMXetK4EnXxNp2a1xvk9w43XfDnCnqJz9iF2EkRbyPATV6KpvrTLsByA55Dup6NhjcKdr2etvXyKnZqu",
  "key14": "3HySexwjZdDRDUcg1gdjxvboCETAZUMHyN7tYecFPXtu5wkv2HZukEfixyAR8GntXnxNPfxzT1G6Qk9PF4Do4cCK",
  "key15": "4UuuBvseP2os4YkZZ434HkXsMm7C1a7BjkaCHDpfKNg53JHUMvTK4Mk5b1Dwy5YQfnjDL6u4JLtJu7QPVaK1ktTm",
  "key16": "bXF3tKa5TEd5q1d6CqGoMcF4HW57T7DYjVuMcFtVn4KGDWxcEoVg8o86njFECcMEG1M1iUtQDhzVxLmWtKrKYap",
  "key17": "3KtMf7bXGq1hseZRvaGdLvgxAZSFGYYWL71REHMiTJQaiGAVmyBNG4a4M78myJkXK1JsRctxP5f9zbuFrJdHmFia",
  "key18": "MtvnVaN9LXLP4GffPaXyd24RZtcniidyyH8fywZ44jRG48EJrPs9kQtYXRxUE5TWkFSexe4JPWgxxm7q1e6Rmyo",
  "key19": "N71iQxVkYoxVEzaWhSbanTVLqG41B8mBn98ufWTKuUQAHEzMt1QPXAsiV93zcdccAKhM3y3C5nUjum2Ms7eqGiW",
  "key20": "66d5fqzs4yY5h3nCExn3gmEX66RAhJyaTsnWwgfdiQfNKzYApo9fAc8ahkEuHq78cdMt93cuma5HJ8eDa81CUBXe",
  "key21": "5bAh9nrCMQyRFxhD8VR47CyWJAKAVuc3dqy7qhTmjgHyMmikytqW8WLyF4o43h5KkBqWrQSqobSjHeFBsE4dVhhu",
  "key22": "36MpNaPwcEeXCp1hm7yCaVJz3EM9xHFfqbXRcJuxxKt1rMK6is553h1eZjRgRW4LiKcuRjn1SyoPzNNGaQp9WtxU",
  "key23": "43n13YCkbUiyWMuf7yCJaTWs7HLJppPCcWmdPuX81giXWDgMx1H4dz6ZHguXhZx1Xc3Ac3Tn6qJTi3ddM1nv9gLn",
  "key24": "3ELPBHakaaFPZq6AkVJBfhbGD9XqoVsh6qN9BJuFUajypDbyxvbbFyqGS6tm8L45bkPM2WfuDEWJ7oRfLnEwZSZV",
  "key25": "3oCC82sNHw3C8VWkVj9yYKXEL1ecdgknCpwq2LXQEKmhW9GYMPtw2nJzij23FGhp8NRYK7wFvm2ySc9gkuK4tRY5",
  "key26": "2BtcQKettS3vV7fhbDSn3JaZUQUrUUv2GEy7BZiYPdUQkJsXK2pKivVnwbN3uj3xzEq5FLucDZJB6X3Lo3cixV1H",
  "key27": "58vF8qiWM1br37iqjVMiv1tdEvzTdrPCCU8GkQJU6Hfb2zsCNjKsrzehyW96qyQWtFquzEekpqZMWrJvoKAZpNCu",
  "key28": "HbK6YzRyvxSeaBM5Kz6VEDEAHKpXEjL2HiYzQNXoGM532WKMQMUkqnSr3mtBx2Lfdkub6K81hFhiknYNAbnLgFF",
  "key29": "3ZJYLFujA7GhdmfUEREVb5HQUpHz9cwML3CDBdzrsn2pxKSCarKmT8Z1hFM2sgPo7sSzoURbvS8VBAbCCXSn4kFg",
  "key30": "5RGgAAZ7iE2ZvvP5fhUyW4dTq58Wy8RyoYDV9Wv218RoL2wyudKoLJXs1UkHu9LRZGPn1fKSRKkvT7YmrUG2AiSm",
  "key31": "34DUcKLD4u4jcKHgE8rwUYN1eZTqNkvuSUGgwWXb3TpbZhTmkp2hEFv34igZDE36gyC931HvHRHMvrVdLft6A47X",
  "key32": "54HxWMTbKsRA3wbguaBV78wtKrNd5GkU6gDKmDx8PxjofcMB1hCbY1TyvEKvFWqYjFFscQjcVaBxecULNMRVoAqs",
  "key33": "4uynbgm76oweRtrvf7eKA93LhuLVWVUJf3psoes4mTwxELZKKtNKZEtVqbjjPy4bz4MJrCMfQZ9Bgu3zp5xVsxQx",
  "key34": "5vNF921tmQHephZ2WFY9cPKhn2kbDKWfGNuKcj9Tn7obPsewGYJYDWeLfJiSWVxswQzsQfSHRzzuxQDypqdYh2XT",
  "key35": "Jca4rN2yF9YBf9Rx4nuVTL9utCBtu71ziZJPc7ybbjsEg2bHRPronn5UMGxA6r5BBMx7Pd13KHphV2aTbxK1WGx",
  "key36": "3VbD9eTiHc95MxkH5dhrGnUP6BKpGedY7P5fexCHtDPUtbmRWdujWB1AqN6U1oPTGRU5vkFVA72Wjh5NEffShjDd"
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
