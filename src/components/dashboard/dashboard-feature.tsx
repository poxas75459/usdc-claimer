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
    "3N2n8L9jxSgqo2f3gpmYB68zFadtzVtorEX8PqfbMCSvdZSnGHvvvNRQXsB2cViPj6t4sHFtLAc9oeSH49xZ9Jt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjr2VxWf2HjPWyiig3VyRgfQmiAbkEog2wGB7kbHwhRFx8CUxYJqM3fkLbBnJDBEhbscaA5ottiAgNr44qk2YBX",
  "key1": "RPT5tEhRDh5SMbDcFnGBkzFrQZ9G2R4QNHSzorpv3XewqMipAvbp2pXg4EkaG5KYURZ4Lirt8xrgiNGNQWQv5ii",
  "key2": "2uvXf4RHZsy8dxebr7dEuBfYaacWkgzsJQsuaVkFp8mQf2nY6nd4CwuLdCijZF6g3YKGSDNFJZy4zUqnRtcQ2Z8N",
  "key3": "4k8DKyoDpPEdJdba1pBJ3fy6JzNxwn3VCg4Gx8zHVZ8Fp7pddkL6tmJuBAqyqaWa19dvTBCvvTvsy87HZ1akDWMm",
  "key4": "5B6VDG4duqy67KYB32YeYUhkgoy4VJkHK1ii7R9ab5z5xayxqogHdBKASEesF43YBQp6vg72LwpjsvugqiScHiaD",
  "key5": "2xaY1NYbjQVN45tPmvhguqSe4FkjZARYyZ2HuQJtCc5BGdCj6P73P7KZF7J1V9VCBtovBQCSiJrHNsBWjyhTMGVK",
  "key6": "kDxWjXRqWnKAeQke12iELRuVYoBiz9Ua6go3c94mKHCAZZbDpmCiGz4Co4ZEvCHRgTN6aFPb3qNj3v7gcYY57cD",
  "key7": "24PcYPRh8Z4v2CU1CEp38QwGNCmFPiLYRD4QksWbybT2MMKwneCUS7LsbXAt8MM8QBM4U5oMWiZ4YDaNbHAvEs3K",
  "key8": "3XcJUTpgjsJBnzNgXtm45kiBxrxU7tiqv31rzuCpvu3wxQRcBsZKpUE7YJJPsWoMgQS9ioQwzQgY3QwMMENnKszs",
  "key9": "3jYvfc5UjuABbYbzBtwkAVcXEXVq8QYKrDPcg2dcSuEGBThrbBacursPRprSjSezB64ToTGAQXDQYgmy1XyGTCnf",
  "key10": "48U3eKUQAZMRRxrVENW7Uc4awEwuuwUDKnnbrbcBpyA9UMA2eT6wCyuXomZUf4QrUFp8DLn6NBR9piCUUgGayvA4",
  "key11": "2n1eHNANou8gBi1yHXW4x6B6666M8v6b4yC6ojfVp5FeieapoTia24C5WYscfhahqkRwSFUEdW8AYD13hho6oGCj",
  "key12": "2iryTHaGZeLoMs9UNDHaHHCfAJpjo3fkXKMxbzR4oht1JU6sqU41VTvoKRZQm5rgtKcGxQd4dk6F2qPz68ZzjyDH",
  "key13": "2SQEi6dEGKPCvvhf4UsH2YeWVVnL1UcAGxJBDs6MnDJPimoqTHEuhhsjXovWsHxeasajt5jrz4Agn9oijje4JNw2",
  "key14": "4gUZCzf4CVdJcfWDW17tgZTdqt3sMsZrJoWmTSjdcWdXdPYVFbFPkySqbSBx2xigqDaGvJ4bKGdm9VyjiXCfH82Z",
  "key15": "5nENxtrrC2a3yM9MSLAiNAzmJwZRCBtkRPVx56XmG1TfGJ4EPojd6Y5tZPjUaqCUxbGPcuNUdg4RTNqrwFwemN6Q",
  "key16": "5vCfeGayxyzzusHDiktmWCUGWKp85MmiXEwKLE5hd7V8uEyFBjYEEZS2ctytMFsssFHJtFHsun3CyYtAPxg6rzj5",
  "key17": "5Cf4WRreGBhQCvh9UUYo9wG99RmmsK3nk5d18jMym37q7m5kZozLNkwxBPj5aNrdN1G1QpuHsPv9FFBuCYhsC5Uf",
  "key18": "3Gb9QKGPYxb4u18V2svsQ72e7xotKe66zN1vmutBztECmzfAkasJy2aCawpy5dZVHA64nB2Wqnuue1g1pLWG3vyr",
  "key19": "4qmbyy296h5CyHm5o7dBPmmECcGKrUnASCXdkGozvTUdRKLGEPipN8ZmM6DeTKsaDySX2VoiFDyG3hQ1fnvuWc3j",
  "key20": "bSE7pq36SJmmbZTbVs9X6r7ydyTJCRjAxFSwcAgby73hQqHCSzKFCH3M8BMvZ1iCaam9zhHaRYYejZyK1ZAZuuu",
  "key21": "tZkP5gvjNMLTQvosxuE7RjFQ1mzumDXTyBHhnteDAtf3E4uGEe69bjvKCv3bidJuxwPYtxe9cewTPv49bJPwbhc",
  "key22": "53VByyxh8SeuET36aR2YQtZTCQZ6EwBnMp5jDUTDA2YiJhbRRFfS8Lm2yaShY1BFJDXfQiL1Nx57GuPfTc9GnTTC",
  "key23": "56bJkJqbhmUsDnufhBzsjUPgmqtFSkrwdzfM985E9k4NERsLTnaF7wVx9aMXkL5tpTGcbftjB8XKHKatHZq7HKzH",
  "key24": "3TWDv1CGFoQCWfQCnZvq5Cy7EJxijEJE7rd6c8SHwBbtVPj1MmMP8gyBJqHzL7wp4Xwq5TAMqUHYyZnEDCzgxVnE",
  "key25": "5f7dXzvJ1qnd17oTVkWWGJSJXA2QX21pswmaMmZMD6gictCqVrG3wDe6X97axeeasQHLSxX7gALWx2uQ7816DF2n",
  "key26": "2XM4553BS7d3nHCzZnhRFeHri77n4MjccZpimd38YXkk3Gjo8t3qUPDGFV4QNhobor5sQ61UiPnTQMzFqjc8ZjaS",
  "key27": "8DDTz3w77pwA15v1do6gSfVnA2fYpsxKzqDVMiSjD5iYzaPYTQvQua3vaiTwpbDz68z57atARPPFKYvzrVtNfqu"
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
