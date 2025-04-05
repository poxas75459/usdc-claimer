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
    "5nfCGpSqd9EB12QpUTUr4bq7LoLnEPJ1dFp4tvy9PxcNiJV2mZZSDiSFf17RsFH9d13ydRES3K35Q6Ad7BsHszSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BMw13bFqX45yNTBTSubZ1i5sJ3go7Xxu1u3n6QHfz7hCcPw8A5Q6cugnpip8GpwSon7RFigFuSB66i5L9dm7Ecy",
  "key1": "TfDEFmxWyS1M73b1AXyzASL3e2WvRVNfv1Nantcq23ziuUis82dHZhSEx8NbEmb5UY8bQBdWUqqmmy9SNBECg7j",
  "key2": "2aL8wfpgm92N11Q8XWcUnmB153jvvJZub6CLSohzzsQM16scaCD16BdKkpPAhEsDL4UUdc1dxdnz4GRnxr7gypHp",
  "key3": "66WHkHr2EqxWUXCeheZU42rkWbiZgBx5qbaoU3F7PwN9qDupere7v5bQQ5xvU1BBUCcGJHGayAs76nM2cbFcpMZ4",
  "key4": "L4pRcvuSp9kyeU8o6EB7T9t1MUXtRGEHoJuhuAhFZxVtaPCa9vUrKtRZX6vhvTeiJxLrR8G2EapgY94hahJBc1b",
  "key5": "45yjY6Asczz3vwSEkQKbNyswYvmYPvzbeYpaZAUvEbs1RimhaKWfW4J44ydRDsq69JGAwqyymg9FtJRenCNxcqwS",
  "key6": "4N56daNp7o5PXDfbckH48ES5MiBt77eRrE3wGMyx4nUYJo5NtEm2vnpnFrq1PSRrEUZn4URtmCR3jL3uzYT1mA3E",
  "key7": "3ECuA1MoQu8y6Gt7T2DgfDDphVAquYrhfeXcsYx5t6TrBeQGVZq7Z5cyvBEAZ5zr4WUNBcruS2cNPdM3Tb6ezA6K",
  "key8": "VFBAZrGNg9REw7AeSbeyEMraJLVhsbjPni1Gzrqikx9WRq9W4K8fSa19EmMyzjTo9jfYTtahTN3w6693yKPdHUA",
  "key9": "3tNPPo3Pdw4SEj54JASs7ehx3mdxssfVF9wL4JSDdUqxTtAw9F6GwYcGNYvQ1F3cat7yYeSFP5hmFNq97XKi9ScG",
  "key10": "5bXDc9Yj25dt1ZH6psdFXnDxpQm7CdDVhg2AZmceoburSaFCFXugmBh7JsFpYNKXYRFzDNp6PBwWDsDD1b9AGRtd",
  "key11": "2uVyoa39t8qh52ENXpKq7gAjqspprGYQPCWGUZq59edtWhg5AHFFv6qYmo6G623fGscrFjoppy4QD4RAGQNEsRrU",
  "key12": "4pbPLZdk7P9gm9LuZhvpaLSD7gc4RRMASS4ZZ3oasiRp7ytzMigvtgx2gRCg8Ugc3HCDSpdBxbzcp5f12zfapsw9",
  "key13": "2ZUrnwUcSwZ3oSvJFpyPvbVBYojdMox5b5UDvCi6xxST3BB4NVPYoJR3Dx5jnWRqyWC5LekGw6U5Fqo7zRSE13h2",
  "key14": "3PkAnEjHWZuZkJ6xH2eijn6BEXioBw52fzubZxmBAzckZdGhMf3z23mxwGe7ka9H8Yxp3YSLUYmACZ1ddErkS1jh",
  "key15": "5vyqHWDj3bGUjW9u7MjBkZFm8SsrJBEhmqqye3otnxDo2CTgLDQLzTCDg3wKo6xjNCCWUiyEH3ZCz1z41zqgvQjZ",
  "key16": "4Dh3fN7NweWfVtFHpK1o2Cek3bzcm5CoW7DfxRd4Sq7khtVLcANnrgVds5f1mgtP9xG78YnKgPwf3XQE8xf8RN3L",
  "key17": "3xdSWFTYQS7wRu9tWqespzEcwc3WVu4wNjfoPUyNrjQ5HQ8qLuw1bNCn92wKomNJoHmdDGtpWAgBVx6aKPpBwyx8",
  "key18": "63gUH1N5THYT4UsBCR4xHBNBbKviXYGno74ddJBWXK6mU41LJtybFTJaMS628vhyuTCPJyWFCLrHJhf3u8VWzsdt",
  "key19": "2ht1kHM74683p2ojuXHDag2rCp1d8Az5fJf1hw8QYaXHhfJDoJhd3m9TKR21pNs7s4KzgRJjLSG89KDztgvk3zXP",
  "key20": "52Rnb588i8Zn7E9kDxTDLSvwF2AkyffaZL3jkeupDD4WtNtGNLV6fYhsMbM9tSYoP9RNz6hxcHC4tS1NnztiHMs8",
  "key21": "5pPXTXBfzAX2bspyqToMeyttW8aZduh27F6Y2g9npEjE8vUE7xLxd9ACoYYPvDcSrzP7zEVYw2AFJCCC6VKpVQCr",
  "key22": "66Ld3WVpov8RFFNKVZ2DStbDg9P4HF1mXyHZJaxKeca7viUcFUDn2wovdVgFHPyiN2cBE1zwUD9Q2DYBSSfVktry",
  "key23": "5zF44MqmQ3HaLdmZ4s5YoNxF2cE8vpmjE5sbGZLFDuH4TaXJPdv2kZL3zDg91poMLWE59WgpX2WDCRURKg15Ecjb",
  "key24": "4VVdJ98uaWTyBvUHGL6Q2GLA4EbQ81MQcGNM2xTCH9JfLnGMeHpz7RpXMomVxDP6FEByGjHrpXJcibxSCSbLNrYN",
  "key25": "2QUHZPEQnhzYWEBRbJWb9gvYGYJNFLQPp7BycMUqQ4Md5XoP5Q1ZbTQ4sn6SPVi5jg9GsY122EDmTUBE17pRJxGW",
  "key26": "3KLG6jryrUXd47Dqiq6iSA6AEZvZvLjddvqz8qYXPfquAPCJfSBHQrWQt7R5smH3TBxDkJSQrxNQR475A6pTkWac",
  "key27": "2HTCSSosxiFi9Tr8Gmeeiy82EPQvtjxaVmbT6mVuobSQiPzr4CSpizrSWYwnJF9iiVB8gQLvggTvk6XsNP6Jyb3D",
  "key28": "3qgm9qQZemJjfTHeLrZSCaGDPiqgiUAm67bAsTxWYJRLz2wr3c34BrNDcczuFZhRtXZX8sFi4eb84hSuZVEhTpNZ",
  "key29": "64SaZx3edWe79dKs7PAGfzAWjh6N54XzcL2g7JoMgmN1CMthj4MfXwR6iyRhqL65LTwcW8sXV3TahyPMf2NXtzD6",
  "key30": "25jHtxLyABQCctRHD8vW5SGuiDLb12HpN9XKUMvHVgyQW439CTLpwemW95LvdKi5XPpdynnJaL259qi5SWsnQzYU",
  "key31": "3Ccnxf4db5fN7DtT2UpdR8mtaLZzPa1MrkDmRCNmxoLoZRHJLLX38bBovnyTjiXMmyofzTFwj7DfD9YFC4t7pWcB"
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
