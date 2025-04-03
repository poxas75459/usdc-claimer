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
    "5QiFGxpwaeFpW55TKM8oaJctKgofRhpkUmu4ykMhiKvFJytndgX25w9KUiHczHRPEHRET7oVXAQqWhfZrResn753"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZCno5MnyzRDPwSdAP2QFtHtzT9o9KGkir7UnS64pVH4EgEsK8V8wTBofcpp8mXxnSa51HhrAEZmApWPQPErUAw",
  "key1": "35x2qz5QKTgtwNAY5WZN8AhCrBtR8Hg47Lcr73ew7BFuuo2gyRv6G3FCZtkUEhFiRPzBqCax7d2FjeXxCPbCi626",
  "key2": "4y5tnRwMcsXN2X3ZTjuDMCusyDwcDF5narehbw77ZFiq2ihmXkTNA5Pj4mmkig1SESLhfPoALfq9XvnvHEPLNLco",
  "key3": "438eHweUdq7mMD6gzycVnGxKFc9HzgXCfpLXiWxPuDgTXyn3JSkSCC4NbNQHQG6DSxgjYY3LYiorJo8nwRPqwjTD",
  "key4": "3LaeY4nkovwzuyRYp38kqLJYg5nhsQ8cWYgf8yphbsbeY8M2Hk4eQhqY3sdUBCMwTBQwkrpnjRskLEo6TzDEdkSN",
  "key5": "4ecbYaQgWHakz8iLCagtpohNskNjLatPTD7JWNWoEB9j1MSZBzwsLpSu4ZotJQbfUDJzmcjPjUXo75N6wJmqWjk7",
  "key6": "598xoLaTocgK7nC9BKsKPkDp53dD3WqdckscHbJS8njVMc8o93spkubtbGAnUJ8U6ZJJgagLdunVhWRP1ao2F9DN",
  "key7": "63gdFsdPdFqJwUAvkAfvSJCRdnQHc8oudbSeBkAGgj2FKjEuyvugh3EDakxnM3MriqKJUzjJr6wbG1URvtiS89cV",
  "key8": "3gtT33vW5W1KGd61CM2DMgrchDJpjnpue5824feKAPvXpuvBo5t55PYcyoLWPrFpjWBZwqYu2nTBSEPrwfhm6DiX",
  "key9": "5D9wU7nq6esPQiffkdYx9e9idHq66oDYCR19ch177iP5QWE9q6hwwhSxQZ5rPBC7MXMmYF9P4Wwrj4XJCQfEfRk2",
  "key10": "5CFyDF25aoequihB2hzcga2RvCxZWtcQiid5it259TLtM5xMqHQ4qqRmf64nU1N6Cfht2hDzcfexsCYwfxeD5Ff1",
  "key11": "SS6NLRCLye9FwL3vi7jCLbczmuwcSZFfRatqxT82KVcKfybJ7KpX4UmtRNtmKWiDUGu5cdSg2CsoSqqwLGXVFoi",
  "key12": "4BhqtU65XH5DA9hwwmYkMiJZN5LGkJP19syMeQ8X4pMrd48mwVK43CU1TzY8Fc3eiRt6bVdRzWPXdw2zxi28VXtE",
  "key13": "5UNMWUJXr6CHK5pgUMRdgJmv8QbUpp4JsKUbYbCCpHHiqna5nbvoDycSerseiUoPQwDEC2S88scQGjy26KcrbsFR",
  "key14": "3gJmRW4jSWNaXiy4vrBhV7r8nRcQ19UQA5LFucMqV4rviFj8iC2bo5eBYGM1mWBpYsjhUPntFvFhRkkdP5qPXPq",
  "key15": "3cvwx433Ra9zH1Pco615uMHMY4BnuN1xdwqyGmPdnVoJQRXnGdCjQW6snE6s3HR3WxKQUwN9S2rr7VsU11NAX4fB",
  "key16": "2kp3wNWPoCEtpoHqres3sP93p4NLHiqHxtLnnUfZT6E1nFQDUz8jJ1zMJZ7pgidh946p5YZj3oti6yYvLMudKjR7",
  "key17": "5js3aUnWQjuGR9BDjY7KdhBvDe4rjnHCWjTKw76MC1CNkQdN7cnJ7qt8rssjcScTV2WWg43VtjaMdAXErtbMDUUe",
  "key18": "2nRaEbY4ndU8NVDrxoCLudGkHkpGuAib4w98jExg9cGEwqJHYspPLNKEHzdDHrrVAjfGMACiL1EKk19w7GCLzKLa",
  "key19": "4brdkiHYCi4fZuSR1ihWAq5phqHPKB9UtJWMcKfwZrRV4snqFuez2znBceYTQgnsQ46LvvWaqfYJ6XWScnzFpbdk",
  "key20": "2bYZKG8rbUwLhxVvakKa6Tr3kCKED2rFSoe1B6rW7wUniA1KgJrSGwQtK4BnbVPaEPsvSmvNkTC272cdTHRy5gdz",
  "key21": "5tQSdFL6ihpq87FkWhUTvfHf6QsT7jsw7qZ6K1sPqSxCNYjQt26rz1GgeaUcoEDp5sd1CcFQBtN4ckZ3ceD7dJaz",
  "key22": "4HucXSP7rhWvdXmZPWMZ2kjMevVMP3cWJbcr62c26iVCGUWv1NGSAALuqRC1yhcCUfELy9DEH833Ae4CQhPeCask",
  "key23": "3zHw66B8XU6Mxviuh382UKQ95pPKmCTL9D2JBnaJ85SoFcdgwxceptZ1BBUUZWsN9s2G3ZXo8PyGozVwBbrBuhb8",
  "key24": "y6R3HWEazfnwHAcjwhWp1c31MYWpoHKvsJiVV5TfMt9nDT7CQKBCgCoJLhdJ6e8Cte9aQ9KgJspadZ6aHrhasnh",
  "key25": "4ys9nvmKUTD74VQMcSp6q35ZfnJ9ySHnwfQFCiDVnGqRQukLgmoxdJUoLpHmcZpUQSwn2kW7WsidmUF49W1HJZPt",
  "key26": "25wkDjiZex1246MKoZxqY5e4ceh8cCuQmHCLfWNY9U5BmRxETVspKiAX27Uw7UKNQDWqkFZwSM9VcEbXM9fPkMgS",
  "key27": "3mNpaHUViXSX21cCQePZSbw17YtU8upJSeP5NNDE1QtSLs4FmKZdNbjdvpwag2mJJnM9DD4J3A2Cyjy862UpdoS8",
  "key28": "5TpeaVEe5wYB8zv3atEap72LdCDBvuAJULBrhtwtF9dquXvfkUMfosKqdCpjxp1Uz1tsaMFWkJH64eNubGtzRB4c"
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
