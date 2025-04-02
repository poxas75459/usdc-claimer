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
    "5x9Jrg8mdSGANFzhV29XKWFav4YtdKpEbtW8RUf7AUr1PduSWFJ47t7EviFGDbnWfLYhqEtGjM5Jiw1s5CK1JQLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4os7aWvs6JciGv8851VKEXp1TusabPrDZHrUtpHpx8CnJAG1M7spKxU1xEoEgUJaftBrpUu9PB9wPp3fer2rVPty",
  "key1": "2ftaAjPy9iwY96YShCoBWjHBCBFk7AWRTGX9Yvd1gLhVGMR3YSdb4TpD7QvHDXFNAiM24YZRKLH88VmpqX5iYEVX",
  "key2": "2E6NYsFgzpJhR58ATSRqiLq9Q2BNsrFxsjoGKfzrrLmfQ52ttw4ZV5gHG8iwT7pSWSsBA1MwYH1NipWMQF5MTvYh",
  "key3": "2smwZ3pHTTDxCLKoSVGr6ZVnxMY5w79Etxin1BqDz6gdWSUfVvZysJEBv6gj5q4e4SNAJiJ7weLbhHhAdQELGuid",
  "key4": "43siZKibK2fTrX1oKh8YKFPRMBywMn7WkEPVKVH8HYcQuhugxxisZ9gR8Upe5VnCkS4q5fDAecrUMKg3zwGnLpAW",
  "key5": "4XNdZ9cKeM81MnUuF2v2MqZCyJ5PVnqAqBdcor6MYPZALzc7isHVonkbQJiKmKfPf8zDjoz7S69JAVbL78dFUo2M",
  "key6": "3BHLUByYRWUkw4qpqcE8VhATbeN11EJNnJAKZq66F4s38HX2KswXUqZm7XT3HWc1VzrhgSJykzv2gkie1HjcHnii",
  "key7": "491uescQSnLTt8cRqG2jYzHHXE4ZPPUtnuj4Uh42BcbS9GwsQCzq4FMhhdGXwDXAtdrDVr6QS37DGXG9KMA7GoLZ",
  "key8": "ny3kKPK9GMVkfuwFdPS8Z7J1A7n2Si9PKGaFX25hqbi4K8Ubzc9MLPTi7vMYu76UjYnpW5v7myrGXac9Ziv5qWe",
  "key9": "4vpyNwFVfHxiXRYzMhV49naX5iomkhWHyRjGAsFGuBb1vvfdrEtwi1EB78Sn2oNVGvgEDWNq4YZF3iLXqMVy7y6f",
  "key10": "4tgu9WJ28RadcAgLd6LRPWzmGwq7CWPhPmnAbTX98R2RNUCnP8DxVaEdQq92Zpx75PkcPouo87gZskGVTBAEWju8",
  "key11": "44jjoCSvVxFZynDMmKAYhzxvzQG9cHeLjB45oxGbxppv9vHx2paNYR2XPy2nmZvxiiY6SqwoADpnnNBL2Wfa1i6n",
  "key12": "4s2Vs2tEc9P8ottQRAkcDxPnw275xqevGfdVjjBi2JyoBSRsy212UQAyytmEB2Dzhvo8VrDJd7CmDLjNjCUfQuFU",
  "key13": "hDSK3oBR8rEg5VD81y3WiajvSR7BGueLp6dNJp4cVkuJyDK2V5mW754GmMt5RzGveXDyD6xXr8zZ9UR9pMzGRYJ",
  "key14": "2pmjRmdxeQVsidMYy28BMphK16Qy7VAPSpcwEXBX6FmXbH485QPaSJYDXLSSbQiiJ2rPd1PHfR9q4S9hwcBKcLNd",
  "key15": "dqnFyfnyHhtxPVkD5kb4KCS5fu2c4w54Gw4XBVCpKMn5HW6R4YhiTM5H2rMNxmVDYjSMB54EgWMSDysWfQxTMzi",
  "key16": "CeQbCurTyCGTuAqfT9RwxNfQsKmWCLmauURxiJSB9CTNUs1DxMBxRcHZ1goJKAnVHRvuts13w5w3KTvB3qV2MBt",
  "key17": "51au4Kuzu6CrBDP5sdqHyTxjvXtxf9jJ5SvgpCnc952qu5bhNNm2zgtvaVbsTQR1b3FfLkbVxY9f8dvt3LTE1ecA",
  "key18": "4Um1DombnG8Rt7k4xwjU16kdCoea5TeHSjcK2rGH3ux7murkbuNZe7iiqwevfNM1QSCXPc1m13J4yGQRWWCDJa54",
  "key19": "4LT5JGvSZR2cE5b8ZumDEMtqVFshvAy8mjSnTGfEcAtEWcmipyUJkrnrKgRsAQhJsQLNDED47pXc7CUmS1VhSCvC",
  "key20": "5juXez36Gzn69Ym3CyiCGs79TkEET7yYmrWVEnaijjANThnuoYYQf67wocL7vMMntfmtwmsMTjcEShRUKbfwWfUU",
  "key21": "5cqS15A5PCk3c1Yn7upQkfsPSQtvmsgvv3T98GN3L8msv59C74PjGhnvqnnjWQ5gUxkvtTtMVRFi9N7a5QTDxoTW",
  "key22": "2wc1YsAsXiKACkzZFAtbu6qk9QpFgamCyLkcXdpkQesBvVG8qooD74RFEnMsNK4HqycxcGZt7di4Nh699JZRhmUz",
  "key23": "3Gt5kqzZGkgKMynbDkUYD3fstdPxJRGkv76mtEE7XsuRkGGrWGVRoTfVuzdhey5YfAx1Xm5M2XYHC8tR8TgrhkDy",
  "key24": "3CpTqnNc87Kjan9GYwc6KrMSFg9uf1JXykyKrUYVp9dKBqhX3Rddg3AywYSffMA7UCda1BjfSue62gTZ5x6gvYA4",
  "key25": "2GANAqit4LKaMY4DFmTYDD8WWtSksJ6ohZMiSC1afTnyysBcqegxWA6GXWpkg6ZJMsJ4BDL2pKNXGSfCnNBysJY3",
  "key26": "4brhLsp18bKvU3ZaWdMoBgg4x8ETeBoxmbyDWcsEYHDn7FNsxFyADP8yzqR1WCb7rvUJxL3mAHaKLKsDCRqr9qii",
  "key27": "5qq7hYw8e3Nkt2PPdxrTKXumdTvpgDgRjoHfxcGfvnCb7uC5jn8U3yDJ7BwD4g5HZeUjxN1eGc1YmDMhe7JBKb4w",
  "key28": "4Y1Jh7RiBD49Sjf9XB2yTCeQnDgiRY76XtLVMxHupTHEhT3kNqrLj5hos3F8NS4N7V9RigmvzBEFTpb946BYoekU",
  "key29": "4oJunL6scG2KHfti8eGJzjKz9DUJ177kmWsQaRnpPZd8mQBdDrkMkdr1S3kU7yx2SATCzH11SRjBSXKWft9MAKFx",
  "key30": "4F3LiZ5hN1ejYAYFsW6bYSm3NqCyNy8AQhDVKxFvxYC1NH4ZTCdBbNQeZeRjnyNL7WJDiicbdeeBbTMu87MX6SNq"
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
