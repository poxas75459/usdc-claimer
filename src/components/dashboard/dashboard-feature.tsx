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
    "9n8m6FPwKwgdsqknkUDxWstKTomU23MahcWKotEfJzXxEGcyhF1XD2qQDYVi7i7a5YhozXN3Qhsw848CG1ruXEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3zQDZYyHQ3bGWeQZjERHNkpmHfPP98qg5WZF7uwA9YJUCiMsuM8J18tjW693hvZh9d5DXrTpGVRCaTRGfuekXa",
  "key1": "2NrqYwgWz5wrbTfyTfTRnva9asbSyaYEYNLSMQMSmm6SsnUcaqKCqJkAQTmN8DZuXbUeMrdTayfBzHMKuYsNXHtE",
  "key2": "39bGcG5jp37cRdFUTYQu9DooqtgErTa4C48C5SqGBkVjLvzsDQQJzssiLco4wMsdvbrHxEBbQ3SkBc47tZbKXAvr",
  "key3": "1284gxFonydtDFBXFrmeP7TYhPa3ssYZxBK5C5VRJTR49zEgvicbzb9JhxsDgeQEGBeTxs8op7hboBDanZCdj6wV",
  "key4": "46equqHn16prUvp1KRUAFis2P7ZxK6xerLB4xQc4g9KuekHwPBvAs8FHDSuxNo62J7NTDaitRrq9y3kjfbJgddad",
  "key5": "2xJZbSLxbrk8xookGDrr6fgmjHE4yneCqsYwHPfjBzLjpkpqQrbYVsGvwTcHBVt6dGmYouFxFwt8wZVXXNx4y56v",
  "key6": "47wz1aBtRoGEHfsRzNyHZNAiZjSNGqwtAQz8s5JXBmLRaifBT7cJveex8mqBd3MSyiqcxxxnEG2q95UW1quXrRB",
  "key7": "31oHJUfpJdDhf5AGEMUkw8my2jsYSp7AUtYnJ33fBRB7nGmiYkjo2DxJf9SoxTx3TBMVDTjbCNFDk7drsGsK4amW",
  "key8": "35u9q86vvndnK5rwJdhi3DL99HkpGuv2ohyowF7wCjRAp4PuELLnvhmKeHXAFJrzT9thKDXg8Ly5HryWq4AxzePJ",
  "key9": "PyvQsx15YjbFNyi11WaNwtWQFDtfJymcF4sYiboQzCD3L5HrYDLJZJ7K6saE7j6uFBzLtJo4uscxn9AAJqrDVZ1",
  "key10": "4aasuPNx4DeKPMSYKFMKW8fxMaq7T7FqkzGGJnPXpDcFBYpj5XWT7MeKVh3MBXkUCeTGqxzYqZZ59eWRwdsfqUQo",
  "key11": "5oUK9KccDq5KYnwCi9m2bHbCUwXfnJk6fdjVpYnY6kpr9uEBPG2hEMhgq9mytKCvXyr1sVn5bjsdB8H5J3isgedm",
  "key12": "3xrfsoAjpbBiA9PtSV1Njb2SEiLqUtsN22crCR2HApT45LfpbFMDAWkUUUDPSvkC3eDitdN9xdYTZPuLSH9FWCzU",
  "key13": "2Xzs57TTEAWMbGEpuoyJt9DWe6w6r2SmGJ3et3Fk6Y7WY2JKH9uK5YUsbdAuKL2KJnQHSNRivAi3JBZcQPEY1Y9x",
  "key14": "3w9RCakpe4BEzGf8TUd9Ki5KPWmASyhDRnbsVbeWsVped9NtvQoSAWadV4DUqTAkytW8eq73xz6H8vUH57ZVZ2yA",
  "key15": "45oRRN3drhfeVgy4DRnRFGZ75HAQezv5MhJAacXonUHUuto9b1JAgZbTcAVXvJbmoDAJeaH2XoUktZTjgHzbDiMg",
  "key16": "3GRWBs1fRykiG61GCxVbUG9ibQhzWRpzZgN4JhjTZqLosYJnvqQHYpoRWdgEM3uCs8UWFB87q8sHx8LQQ8zvqrZd",
  "key17": "26R81p43piw2xz99Jx11UNhXzmV67AJZux9eGch5Ki7gDdE2dTPi1ksA1apER2pxeZt8nWaAyiGmW3QVVSxhEoBy",
  "key18": "btrnFZkV7tWe7f68u3aavMNsH44JoxkGTUoK99BQc3NFhdGTCH9ycgDFpTrwWmH9XaeP5JwVJjg8vzn6qphNTPt",
  "key19": "3xDs7w6ccvEGBJ1wDF5vYsS8hVALt6fmw8HSogQSr4U3M83rayDFB3cA1guDa3oUgEWmzYgWUxBNjTtaGyjKHRBt",
  "key20": "257doeSN3WixX36UBp3ZLWwiAnzxdSYBD1rmBE3to8ivqTHrJHKLT24h2yssiqtuBTSuvfXjKiNYRUYGHfw2mwXN",
  "key21": "5b6cC4mjgJAMggM7fomdwBinABVDe4RWFivSZkAR7S52bS7qrf8Ej8ngJt1Z1eCffuE79jPz4nGmJgUCAsTNG4Ee",
  "key22": "4j7xmhTkXTV3qxJw3g6hBZxEwbWsv1Gz7hk96RfHTtyyd9TiwjEzdWccBZYr3WQNYRrfqo7u52zUN3vHhMYGr9YF",
  "key23": "2VS3uz1WZ3gtT5DGj4vykfg7MZXNxm6angjea9WpqrPB9nwLXjPCfYq68BSBj2rw5RQZp3ktETJWZdJsSJmt2YS7",
  "key24": "GQLjNWFFbgqc4MB86HhRcd5TqHKeXNFoBtWN4QK4jjo3yxv48LbSoNkPQJxtKGRmKGB3gwXJJX3k3fS8yVAduER",
  "key25": "gNoBe4ZBZD6c2QxsmV2bYrWjxsZgUzgJiR63WkJ1ymfXhENXk6rBFqY2xU6TpFwg8TScE19yNUiGm2YCofp59mJ",
  "key26": "4HXtTnT8KbT88bYoTB1GXbHSF5fko98bwu9KH872Y6aYDXpAZtjAJ3t3WoA4dpUqtG4hrqcrdxGhrtLmQNMgfaY4",
  "key27": "2hxvB3voN16SAmgNygWeSbbsfbcWu6FkSV9NajGLjdXcZoqSGSeVahqfzpoN3aeR9965r6zcCzD8Q3uZFuHPtKoF"
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
