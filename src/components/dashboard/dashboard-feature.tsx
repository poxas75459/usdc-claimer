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
    "4EtV3ksjeEZDJ7x4SSjvzcwa7FP5go9wDF5BZCmQnsskF7yZt6Nob2hohbXLu9JK47qmrYr25HoXffyWyWYDxLLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c5oph2yKFZuAnuuG6Ht7bJyyDNS1MW845UVpmLs98N7fxDHnMmNdnn18eFQZaa3SY8Qy9AXKaxn2ij1BEw6b7Pu",
  "key1": "3e5e68qvHsnFfuQG6vxNhcu588oF3bbDmhN4ax23TbwahwpCJxMtRYnFTz8EpxiEXstmivfjsUFVjauUi3bb2m5k",
  "key2": "5UZkjtTP9aWf3V7gfCQQfFPiuAdmzXaZMbj3EVCB54f4WR2QvkL6ET3gwgtWwtuZ4YKSDNAtqgtZPqfuruFfxPNF",
  "key3": "37DiYSwFAWrseQebudkgkmuXNiKdGjvBnb2h2jj23HXJmgbdv4NDa7WZWFvDfFfSjqJEjSiWoVZ41CNQ8RpXkjnm",
  "key4": "qxYMDeC1uPGxJwKVry7me4d9J3E7CSni6AFpXD1miuyaeUhgPSyHD9ZGxh63UEG9exgnDRsCAicZT9FENvz9Dcm",
  "key5": "2baJsk19oRZtyJC9t31xXETp4PkhrGr3GkdkbUoJDJ1SiwAr5LScZvaQgeRdUKTXc1s3W2DnJizoT7qjb3VG8h5Z",
  "key6": "4Q6dm763ASknfzNmbaCbsGBhX1DYuNHHHvg6RB5SPFdtkgR3h3qHLBQJ3dhjbwz5BtNZBG6moL9gwC6JYCnTfyJV",
  "key7": "4aXZMqdtsYrq2hg39vfmPSgwwDEVBEm2NYU2ctcQfp3Z6AhJrvpGSiRnLEMXCdunKdf2q9Vn7yHZXNUpqMGHknHZ",
  "key8": "3EaLhMEsdTVmqrtMw75uP2twcCAdFFqozPQoUpXNZG1xYK89Eq1qyA6TqkSMxH1KJQZVqXASJZkcJRZKD1cgCa7o",
  "key9": "4Z74vWwoGZ11bEmKgPLdrb3vUZ6v6cP32tmuph2kuS3UgfrwdiGqQJNydunBDo1nt4KF8zHdCvUbrKL9XRyQcfQy",
  "key10": "2141QxL2or4V73NBiQpjtjS2vmrx3oVY3JxyjRdPkHgkh9qqmPfdzBXwfDxu3k7mAApHkFXPhziFyazYhTu6oKxH",
  "key11": "6pQfw5NZpV81VTnkewqdWSBNXexoAHWruqteLh1bhaP4VAdxoRpbQMQWk9qxi6QivWktidrH4o1zWztvwZ9xyGJ",
  "key12": "4RbVzMRLghs6yWbcghYDcLkyHKgNrPh3bUMTn2KqZgFZzNzdgUiiEp7KNDLSG91oDXy31zBA83f9ZdZ8hmHRg6aq",
  "key13": "5hDJPLNCjHawsUagDNk2GmYrPowowy7SAE4gMA5egBdZVwR1UFUcExae6wYkxqDTriLH8Yiw4eVKAC6UQE6BNtf5",
  "key14": "23UapiuJA4rGoBS1BzfauJLXkGVhwGFxgCj7ugJf7QLuQjQCB36ic7o1BCdaCu68f56gxmNqudzzLo2MrpnusrFY",
  "key15": "3VmwyJvjeiBsNxmwitH6FTgFNeSVEcoE83amkAwHjR36iCvhbGyzZr1WaQpXSbo9XHLdirD5r6QStf2ivstvrrPY",
  "key16": "49V3xC7WvP9rqWSE5VCmyPPF2rNi5EtF54UsDdH68qdVciarVAtwg22zkhPwkfVgUat2gJ6mQmTfJ2MSyJ5dZHUL",
  "key17": "3KoNJRPtZMfgiB5zxmTTcCTH74mkA48rRKwqwYerLAPi6u49WkdCvXKQ8uHz57ukEtENF2TPscrnmGQWz3X4AQ3K",
  "key18": "GQtT8S7bukJdvDKRFEPxPJA5q6nNeT6pFBCQqiBENXSHXaAzsZaXDzubfL8ivtzZiuN2ZNKqMm6DAZn3oAySNgn",
  "key19": "3Je6qAuRyFNVaHnns7h39EQd9d5pexwRAFeNuWbTx7WzUPpSSjNafysGKL8gr45V65HzuVDg7uKDjQZXFu5h2P5t",
  "key20": "dTYgpvpR3oHfgTZ5VB98WT1m9rKogVcpeyH3iAqSrB2qxiq95DanbiYFPQh4BABd2HW8QCLhk9e2vPhcX27pCr8",
  "key21": "yZP9WMSW3CsVu13WPqA5bxtM2KcanofekcxyJqChtx7jXumwtHvJDA8GYUgdMGiff8Pi1uKA6EtKVoSvXKMTQsd",
  "key22": "2RLohYd5VL4Sz5A58dHw7sevdb9D4UBYGWbhoKYirvvrwTKkDqNQXfHygG7v4LiCQsJehVmAWNeKEh9Xns1Nasjk",
  "key23": "4UZia4wXoGuK4VH2wWL5kVb9xQ5a9oL2wrbHqmt6ENqCPgppdSvq2mMr6TP1kz1JJA8HY65EdzKgr3N8bYuQuVQh",
  "key24": "CgmX7wndB6bSzzx4Nh1PLeZbHBtV85AJhgY1euTRESXnAEkTGAGrQrdG3wBjhMvuC7spK1mV5WsWRT3op3785PR",
  "key25": "PZkDoGJqv5bJkBxTs6aiF6ASyrtEjka2sj2T8nFuH2XLgM794qwufvXJ3iPS8hG6Ppqi8bSgGzyUroFQH32M6uP",
  "key26": "DmzYgwKXe44qm3EvMHMvvpahbgimmQGvUdmR8Z6NhAwFhTuCzRY6sB6fkBuZxC4tJNcwKxEPsfqQPB22pB3cPrS",
  "key27": "gQfSJhoNfuExLcsuNKRoGgeczqWUmcyBGF3XqVr7LQvs3ST5cVZXzhEq3MADiBMTArWm9WxmQJjURP7UF86pv3G",
  "key28": "9JWdcs6XVHek9owyUXPTsn4yCLffoiHX8obkHd1B9diCuPYVfQvEKGpSQUjKTBHfjWM7q3m2s3yd9imzd8bafyh",
  "key29": "5SQK1UDXQarc2oxASDG1H8RTwbXHLGYAegaDtfVxTbcgRuubmE8mn5GpXXXeFVL9b9bV8RjXWfqa4H16vPaaZmta",
  "key30": "5jKer863WrkNEDqLzb2MvS73TmgdiERZu4xPZ561fco7DGY1jgWzpm21ytXj8T7uZ4g3yKkn7axnaxXCzxYxmjRd",
  "key31": "PgSPAPEqvNuhyXu4ATJTkkqLN2oS3hDuMFsc1xGUgMQ45niwDPDRyLdqPiopE7wWaq5UBfWsRo7ab66tG3dCVYu",
  "key32": "53cHLNfFjDfR6Ni2HBXD3cMfyEBAVLHHhYftSeS6NPUieuRtBgYtXYq6dwsd4yehWP6wxqVHpbfYm3GJre1h1AP8",
  "key33": "5FMc6XUYFymU8HehY5MQBjcAnuQqno7RHknFmfY5ahXkD5WpXV5xu2dTULtaUoDxxPKdEvkvxzdnikU9XAbDNQv8"
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
