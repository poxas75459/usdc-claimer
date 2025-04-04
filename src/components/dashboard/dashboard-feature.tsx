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
    "25WzFp1sXypxcRtYrZHAZDqbK97SNcXfkj4J24KXNEvPEkM3Thc6foreGpejsfhyNgTj5VYRvyoq1ces9Q1WdxC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMR4X3qjEMZueQE3qR6hqwr5ibM8YXGfGJdfWRs3EuRhxSopUp4r2B8CJBvmELwdbipzper5v4c5XjRWerXESuQ",
  "key1": "bYyJuYPNYnCrwoSV8uLSZEHn7NnK7SppG6szvo7qRJne7VENMFftWdEcGBmRJwLcZGjNa4iejdHPjfrVPjD6CBP",
  "key2": "TTcKnPWrtDjGUL7mohTMfZKrVkuhtMDfh67r5Cwsh6Jj4DHnBjCyXumAXxNEEpRUcVB8wvSvF6V86pqwFKEFzq7",
  "key3": "2tX2oHShHGB571rKZ7GqcHsZxP3sfLuE3ftZHH9q2toi9eeWDdwQkWEYbm6bxh8Qd6bqU5cu6BBKgk3A3Rgd9i3m",
  "key4": "5v53wGgcrJcGKuEExGd2JK1eh8JcEAVqVaBuJht45ppQQpTmuwFceidmn83YAKpsc25QFvmaXhj2haNKBPbGrW3q",
  "key5": "5EG64VMyyx1RipTGGtK7VkzkTJzRGGRfcfbzsZrhqu8jizvAB6WiDZqeirLbGnUequedcpYT25CVTq7BBHMoovos",
  "key6": "4Roo2PenMdd6ZdqVyTbqF6UwynCC3xzu7pzzPWcfckJHgX5styVJD7x274cKsWkeKsSsoZLHgPgdVimvprNPyNaU",
  "key7": "43ddHGMiEDsmJ6fnisHKVUK6uJPKyVXVsJgUhrtyXu86vq7ZN6CWt9dB92DnREDHVpySFgNHPf8oybTzemn6DWe",
  "key8": "5QkgfimpHpz4pt49LkhDyJUgEpL5cKhPRBxuPoQ2ixqU5XUwg5b5gtqeX4pkFpAZ2SnrKZMDkrBG76jhwtQUkMcA",
  "key9": "2XQh8tdTHMwLbysY5JjH3fw71kVihu27Y7XHfrEWAxyWVWAquZxnPk8U2xPBHuwkZE2x1EmSVr6UikgAqq626Xv5",
  "key10": "2gDt1GWd1Q6X4F2xdrxWeicg7AX6tWhUH7vfhHbHdpUV2LtK48561pQ1CpX4txPSS6RJXWLTiSw8e5GZ7HMQJWhF",
  "key11": "2HHkQH9UGz5oqtfcauHFuuVAoc8Xj64ZnjoeMmgxmY2eiAMRb8NRyW3iwF4y7W7MPydYwjy9Z6jqXTuEVovf3tr9",
  "key12": "2UE6aJxY5X4GD2BsTAdH9TxVmF1tsAMzwURxpybgjM4vt3uWex1yogqVNy5BfdFjQUSwsVfFPNTbSBCWGWQvkjnw",
  "key13": "TCsdD64nN5e1YkxqpdZ6u2LpgMvTSL2kyKFt7iudkaDqL6wcafpdFtS8V1gStNX34JvTU6n1xqri2cKPVbezqVX",
  "key14": "5bo9YmPh8LMTbZdiJgJw9dbuupLU2phiVPUiZgbGzauhZs6PxW3BaDKKvjYV9RfesorNZSBgZ4k5j9gigtL24EiS",
  "key15": "3KrjKBam3QtC6zuYfhHLwdNvjLpPjWy4j18NfnhDME5nnkKoiexA63K7kuSr2P11ukg47Wdv7PaSAMjrJxKDwJBR",
  "key16": "5Emjx3piEHWpM4y3iERnsoM5sJnU2aWHmHTRZuSWL6p9UMgDJuiTmA5znDpxedqf1jzmLpbfwCeaHKX4rUs2LtPC",
  "key17": "2LS281gGsCyAWYERp5L5REiNoyKq2iZwBia6KS3Xaz4tVoig4MandYt2oTsHWxPCShxDGagJwjMEfUcgtRF7ip8r",
  "key18": "4YnTA9HcKH3ZV6Ebms8q5tsAM6MJoUMHavnsAdcLx7KfJBJoGnutMQLemgujPbpXryQtPY3awF2npJEpND6owGpW",
  "key19": "2k2fMwqTyZg4PBVaNu3rwQaz1zkLhf5nvsMACuCCMhESHYFsHoYv5MWsp4HDfPhyEGzaMKKnMt23o5Nj7QGpKBJ1",
  "key20": "4gwx43EnmBVxfsc4KPX6EKVsdoHRZ7DxcZAP6U6xJC6rEgxcgtZNqUSuoxr4nipZXdyHF6Emgyk2uVekFr6p7rVx",
  "key21": "3pVbGxTngrNheAGPAc3m2WMwSNtsXebt8ncYX5PCuT353UbM6amaXzzXzzM3XuSRtmqWXRNXdkCbcTPfPWWzCLEo",
  "key22": "t2S7SJnVkQ3rgN5LZxZZmnAm2Hwzw7aFXRMj2mUZUtXhuuNqKd69bgq42VYWP5HJ1Fd2FoByBvfnBksTenz8iT8",
  "key23": "2NRyveg79zXqJrA7rGxF4yksAMKd5B3gSZRNoo831HHgVxVUX31AUn3YnbtnxKA8FjAGuMug9GNbZUdNZKMQLmgt",
  "key24": "2TWeyhqCh44CBrYK3yrgEvaMryRsExaj5yTXP71CvJDs9b2Mshg8XBN6FaVdKjAYYTY5orpohUGCGUGnqm6EwnSL",
  "key25": "3X8EZkXioA5X2dYDxT2BXWnG25FjrCAqpyVVzi7JDvqoDbZW27dzJoxjA1AguSu7nDn4KyUY4wN15jwUe1HfZPwb",
  "key26": "4Ds841KpE8mRbN7svin7NuGZ7AJCZnWcKK5cv1cKGQb3KMtr2uv51vuGxNXArFgTCm8WaofJxa6EQSKDx25dNNuZ",
  "key27": "3tBxGaVPJfqGnAVmUx6TbSKHRzFBsXbzhc51w5baokKXvuRMsAk4LGQtvvMMJkkdvHhM55zmkMmnPZg1rm54dokE",
  "key28": "NHxc9aL4RNzER3mJ8aaRFkNS4HqfBwbaAKLeyKSXwpheembGahexRXTJkeHykcSb7JawATr6UAGcnqRG9qmsda2",
  "key29": "2yJZ9tDAAjeTDs6v6nBA8K4cwbJLoCxxZ7mgJKejpwV785UCqqx8SFcAN1rqJn6wFKd8wq9ucWJ1s5AiW6LUNHWZ",
  "key30": "UedWBiz9N3mau3EYRLzAF9RrPPkocLefJGDSMfQksPQVdZj2wT7Mr5ofEFcbUQ6xQx1TMtNxDe6QgU1GUPgtXny"
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
