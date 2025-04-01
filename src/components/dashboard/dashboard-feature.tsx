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
    "61ah8z4YoqX3gHW1UEnJqSzpJksBAV38sbgprkdMUNd72K4Q2hijR7RX9DQ5WQ6jBEGXHQssHBp2KsKLz2baDvDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TCDfepCCWKHM6x7AxWwRqx3uGJfstFs9GMCurg8JmYqVp7nv94f6XAvU9NtpTVDe6y7B5K7osHiYdvXmC7vmt6d",
  "key1": "3pjwuiJvASvTm9Sh8imJF1pnyydrNSk7RfFRyzG1XHLtheHbHxpBpkhq6ZGQQQjpbCqnoqDcohvnwfTJVgtr5D6o",
  "key2": "5zQJ9TUrT3PTtmt3dUz7uM4H3TRbyojhUmZHRzucbvH42omaQevbVh7Hy1AszTveK1362c2hjVHdqKaVetCJ5n9B",
  "key3": "3M8aNSuXjEpse8yDRwZtF78B8iKBSB9oo6pMJWJpKTz4ym1KPsVKM1my9nuTqAWhBaj94oP25NaGaacRM12FtSGL",
  "key4": "4JACE9ene9wBThfAMH2yfdTtSqrYHtmFGKRBEEqBqtSGB2eXq3BuheRc2XRT77rxa4kTEnZzJH9tyqeP89tVX5ie",
  "key5": "57F2bvpaPaCUftBCkiDsAp6wFFBk5xWSsSkHP4tnyP3DQ6KsuKeeU57an1kzXgzhPbnv2bxRY22yrz1CQBb3vLnH",
  "key6": "UTcX4yfEKk8dMMBHdxtWYMYZBuDbjiqsZ5ScoMFcveuoPow8g4g1Qm7YkQCdZFeNhZ1hjvWUPjzvkBRXSHKC6zn",
  "key7": "62BiDjTBzKhu2v4y5cGrq4hf6arHS28whYQ5faHR1cpqxhPDSUX8GsgU9g7tnez5spDferRtJrJBDiLviFYdVFVS",
  "key8": "5KzZskeHMDRy3zqN68FWPV2zEXa3D9JmeTtk25Q4zg8HusdJxe36RBBzEeNn5zgctdxrGUnToq7Bwx6DCLuHX8q8",
  "key9": "2xLXsE2v6HXvTnWPwmfccfMNAJWmESV5YvVZcmuGbV1vZmgqDXFhVgUDZLpvwkqrXuaER5PFnMavaB52b3wrVAzH",
  "key10": "4jmrbwA9QtUW9Um9yoj5tgcSUX4RboPWHeWvKtSJaFxYecCg1XknHRYmVPmVedgkvrgJQaYk99D24L62s3dcLowG",
  "key11": "3T8d4TUBU5sa1DDAMxFaG26SmhQqdJ12exF63ygzsfu1VUrDbwehddyhhL4czL5YVrjLkuX3oWAT9JrHJimTAqRq",
  "key12": "5eMuc9trMkxhxuJFZX5nCXYp6g1iJvTiDneXSCHUVKU2hQEHc2KdPmrVbhkoJAd1wjn97VbcbgHepMSBrdEfEXL9",
  "key13": "3Ea7BSJL6vjy3hANpFSwQ2j82zz1aJQYQKJZ5GSzoRVadG11CZC6HppZbZte69DadCU3prb1QtqNY6JjfYHWgAns",
  "key14": "4Bwqqee96NNBot3qEZLNVoHTnGdKugJPy3EmHHsHiYrKWXdjrA6msBdZRvD62BtCr6tqcqc4p2KY3AX1yjRX36o4",
  "key15": "5sekEwH2z9gEjwNq4ATceHTj7VBjHXEEX7DEtEq11d4oriYQGnarMHMRERDrMWEHMATJzXgYuVhCWRUFtLaBg48U",
  "key16": "2yiNVCSw8r5LRYUWRb6LhQu8kJE9QkbfQk9Q3C7fczgsixUhc9PUuVSCFzBdem6cRGDSBq6SrPzVMnRXtu4yYt8",
  "key17": "BiqsRXVrXNqq8RLnKvamJgtZrnYS9bbBoGLqfu4yfnFaM1T1YzWSziffukDD9dgtdnyVrp48JSSPFTcFWPN53Z4",
  "key18": "54K5bVBzzCKXoX2XxNo8n2piCourEgM7cNkUqR7LoRsLDsVSozzPBYZzFGVbob9FpsrisE7ZhDN499Hih6p7ZcfP",
  "key19": "GB5n8Ud4zpqtREwUR19qA36MXexYiBgQPLiC3XcGAkW8PceMXGvG4p8ELKwga7ctZWPZ1wE2JXeYnVyPyZ82os7",
  "key20": "4XRkpDxo1N194L32JgPg8C4x2LC1p4ZaEd3jRsaf58mxGCX2XTdncqVc1sbtNFyhknECk4hXxcHdFQMVgPNhNirW",
  "key21": "4g3upYy2pumMTkkYinUJZKf1JJQrx2hHEPRbX1AYHHQkVVSZ9UHNRNmkCurxuaB9DDtCaXHxUokA4dVv3tsBronm",
  "key22": "2YD8iyJd66y3TiewTdYci3zU5a1uKm1MjLizq2ccGcrkZiD6mmjs3hAEkKXeuKomgsvWhobi3BKcybz1cc2apKjj",
  "key23": "4SP2Qr3vLn2CsbdYGqXabmbSUCAEjdHgKadQBBfCPpr6s6Lm2qaJ3NubxUAhDUZttbLjjbgKxBTPW1s9mC4W1M72",
  "key24": "47CQSRWc21uzH8VLzQSdZ1QtHC68Qv2E7FAoBNXSrDVoc7yLUNd3E1Y7vUGqNFKtta8k3nocgQu5K8PyNhYBEHFn",
  "key25": "2jLtk9Kx8Zm6wvrfarQjQpRgfhVbjgQLDNhHEwfcQZpabywbT12ghJe4LU64Ptk6FojtmKEpNrA1Qtm2AtV51Hib",
  "key26": "3PkBbbLgiEXctw9Q1R4rxrqBP8fMdV9hxvmG8PpHg67Nwtk8iqyjt5xhJ4KcBm5QEPcnZM8rwSRbJCxKTgTBDuyr",
  "key27": "5fKqJX1iQskUEeYpuTAn64AkKPfgAQfDjNpsWwDcZbqiat8MykYNDfkZeHVingRHQKwbU3heUwfWQqPHc8PX5mQN",
  "key28": "5UeCuRXtGDbUyYTKxieiS2pQUeWDs9UxQWAgErPTRyshXbpP4KmkWHp9fL7zzjkCcb9JtyeiJw3UMRpsRzcE41XZ"
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
