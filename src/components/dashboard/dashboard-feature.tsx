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
    "9TQ36gEsVQ5f7QF4N1cc5grrCmgUHr2XebqyQYvHVxVMBQApfXVNvc4u3AivbbLEDvbgxvL6RWYah7gDP4KSUpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XS26f23xDt5sQajSg6p8ZvnCjoiQa6SRCid1tLfZQrnaZ6t8Pv2vVXd9nTnNnvtVppUCEmnEjKz1FPdTm5LFGz5",
  "key1": "2xSahbFFQ1mcHW1VDjpMuhT6PJuogdUw3EAThWawcpbKyHRG2y5KPwkau7nFXX9jUpbZrufENjNevfCx1huo9UTN",
  "key2": "2YksYkYNyxqZvoe2zCaDZudXhimeNa6PEVrFV4pL2KBPX8XtEBdx8mTE3sreCQhURSwQSCNjzPcXodq1QCDo2jtf",
  "key3": "55nW6eepjg4rsUr62AoXZtrtQFAutMugPGruFGkotLEMieqMB5fgvcrjj65uL6FA3UpTiv7subLPkgs1o3JsfJgi",
  "key4": "4Ty4HtBDFH9hmWPMvo6Y6xrJB4WCuaFz64PnMWUZmBxbf6Q3x2vK6tvQ6PXEWNY9kMStEx9L9bVdRuYhxeAN8SSn",
  "key5": "3K4uoS95K9L8E3AEHWCPbxnJ2PseYCXy8sj5yMYs2jPE8U317BZkG5khGMmyX2XrebeouFneiYNNzxCt3seyW9c3",
  "key6": "Jr3SKkvSW1jN3T8oe14wSuqCN8Je6R2K9yYKQmbAxvvdQCrhxE9bHyQhUQEHJqidjnc3N3UpPoGfsKs7KY7Rvuw",
  "key7": "uiJXXUAMiLwKimJ3BpB7CxGcty78hSKVNPzknHaJ3LA9Je5ZnheYMwXsJbUgCCn6TMfyC1TZkve6gpVUKXbh24h",
  "key8": "4J1ekAoHs2mm1BeCYpYK67Wouqcp1PTy9XCMdtYeuDbwmGD1ugaN9m7LEDWSh66xC741Ea9ZS3q8vnAF4EUEeJqe",
  "key9": "5eMndgs7nyL7McSa9CDjC1G9pKN7RHCJuqBuPqAqzV95Zq2H5Ju2B4z4PWXSWgQiTns8DZW2mqZS9UGgQxJLHE7o",
  "key10": "421feam6N9Th3waut3VdxxPvWHHG4xLYMrv41kkPvbXgXgNynoCboMtBuRcv4kE1XdDmMQ4qcGm5MXYLhcY3xZCN",
  "key11": "5H8manBxwaFqgA6uGXDY99MjcPa2iGDVwttxYZ8BVgETfsxaJQf6LeUgqmXGhZL76D2EpREubU5nQsGJwiPEwz5X",
  "key12": "93V6FEEkEUFCP67Gu9HagbXAZ55jSzrRA4kbYoCbKyeUbeXCVJ1tT5UWefTUtX4QK8ht2xLD1TZFTNSgVbypy1a",
  "key13": "rTmXyd4gEk4xFK1tocEp7EYfJa2S5onvd4EGUpKLUA22WEeTAfV2LiFtfMhGR3qdwXKybqYqbuRU84yafaVdcMf",
  "key14": "5Bmvib7NFRiQx4HYDuh1WzekEQyuTrpAVAW1aLukttQfSBN4jNXyTcjFw6Fx4VCAss697NxZ3VdJfrmg2mngJsip",
  "key15": "4bkCQdAsZ2c9N6vWa1oNbzJT2AB7RvUoN54hwsKcpoa3d9WHHV8mfdg84Tkn4VrFKp4fcWq1zxC4xHar935mcKyz",
  "key16": "3szj8wysEt8Usrcyi6G9FDHskTPLL3oNfbjmYWtWVm5TRc7uC4Rv8AcymmHNN244z5Vqqxi7CgJkzp4vmpadRuZV",
  "key17": "u9k8QJJBZfyK7w4hc4yVC1c2eJJoFMpE7kE1r5HbxrYcoKd9HFrzsGZ1F7BCxGQ2T8AJsuuXF9QKXW6Tpzx4WNo",
  "key18": "4LvJfVV9B6iZwK1KbuBAvw36PfEupuhbcyBbykxnf8XwVbYMgunK4oKSiV3NaYSCybVjh3oz2MiSgQxz6QwXP4Lr",
  "key19": "47j3PizUm7NayDByhDQWEugTu76pYNAjMFLf5rnCL78mayfCxYkmky68iPr645qWDkm3FcTKKA8dqsoz7hrQeygy",
  "key20": "eY2YAGcnxjwC9KAmgMCGb3mLQ2r1WBUQDR9BS1jUZ3r9U1Lx2NRRp2VWBuHVNQKRPUex9Xy2XhQsfSXqXwESoBs",
  "key21": "VAPkycP5mzVfe1qb7T23H1ujLiRskXuGdN748vVq5jh52T25reHteHzHYzzCLP97dKqd6RCTt5oEjSXGsQaxAzF",
  "key22": "4DwmuVJeamzPof2LeckLQ8Ri66cKCsV7F5cE7oFiuSgRgNRgAYyhfE2b56owEZZPSRBqg59QkumUMLqo7dJeNRPh",
  "key23": "5xukHHGQSNzRvDWv3LF4yvNANYsYpqDVorrDkKKqoJc2mkHcyugKLnpKVUAYUJwo9VhVteZgGHozWzMN5gacgfk6",
  "key24": "5raameEtE1N9KD9VxS4GiWQTbQmStVwTxpSyYFZEyKidrr3tVYiC28X4qZ3TceRDD4QMQZhXWo9A2Wma43Dpf77p",
  "key25": "Sj36NvDBVJzTcUuJq7p1ot2m5uYeDRo1uvtczGzGqQKnmXB8vN4NHxvWSe56wJvxaw4mCMraNuj3soqj3w177xd",
  "key26": "2pbGMEUpaA5WSzSy2KoULuSYoF3sbYRXHy4JZMZuhPfgZdacpfiApZTo6BMczRPSB3etNDg43DHkmbrnCZxpRgC4",
  "key27": "PG23Pc2USBv8w6MUNCgj2TP7oNXhF7KkPVf17FEaFbNBahTRCF5ypPcdud5Bu9RozwT34CHfg6qjY3XrMLct9cX",
  "key28": "JwinUC1vUoNGzBQjE1NZkxNfWS2Yr85cguztxkT7yVvW6cNc8RoRBkb6EKME26DweLQZnScYQHEX4MZyQY8Mt2e",
  "key29": "2YsH4W1qGqHeKXqiVpKBxrk2G6EyKwbYFxVbRGyw5ReWZ95XRYiu1ERpcvYBbi184mUDmXEEwreQcN3T4BtsnsHX",
  "key30": "3NdQdLUDY2NJNRF2Qdpo3T7pkD7t1gRRGZrtgeUmA7TWj7oed5g2UBrdYkEpuYuManqBcRpCWqh3hjH4WXL8zeRX",
  "key31": "22RMnNWLnCsHocu5HJ1UeJM5UzhWnVoQLgqYQatLt93a7wYLFXW3tJqDRjMfPhc38p6esVdYbWee6q7m7GvJxdfr",
  "key32": "4k7osXScJmgUseCeaQgjXUB8TFnxf354NzjbjdPs66L3FxVuSpZ3EvSHTTAFNs1eNezNgogtfPJTDDiRkyGS2Axi",
  "key33": "pcKipZdcdZoMGijWqHaqBJoCS2kTaj7WpMiXoMkbiD3QV3YQqy1baaSgAMtaeSxwT46DAhJXCUr8UVL2wcCwvSv",
  "key34": "5vM5qtq8euMX4Tx7ad19Yo5cxzvJkBXuQun8g2u2mga1CYxZtA4n5Yo3qGptgjqW4t2Q2WKsfcSr1ekC4MBMcVHS"
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
