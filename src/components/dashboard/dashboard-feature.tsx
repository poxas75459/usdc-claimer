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
    "45irGgHssaefTVVeUEguj9XtNGTmRg4DxQdaa3mG45VEgVHcKxiKND6Ag7bQq9afDMe7ZF7q13UEWr3pjSjHWusR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3N2jDnk4BfrVVDy1gmVoAHYWukwQE1XV6KZPjKCyASZGwrZ5fWLMmfLtBAnT5tFHDb7wtn32BLefK6TRY9Pgp9",
  "key1": "2jqfLDv3kmoLuC9vhGdPgnoJPTpPZUmXaopYV2kr9ndVcWu5aG6TTixZQ9fSt4KaV39ZfzWgVWJqkvu3e2mJBfBS",
  "key2": "2pvhpJGDQwBdVh3uGU3xp291jqV1BT4TqgKn218hyZkXEUQPLisUZhHtZ9gx9vuKTNm7yds5L3ShWbKL6G7Sxh5Q",
  "key3": "3ghs4ksACmszVuDHpRQyqsgJB1esRp53sS9aZpB4rW82PshVp7RBkUvYrdBSEWupuSpKa9mxBeqzWBZa5Y4FpzLp",
  "key4": "5NaUoMvEPFfm6xxvSFSPJJdqgeGd8GhoGr4e3esPwcV4WXgn9rQEzcirCLdwGT6s7uFK4rmv4wrHXjpVoSWeGrj8",
  "key5": "3bVeZhYg5jM4hFSL5jpfPNMZQP1mGZhbyWuasxpngts6yWGaTq52P1m4KpxNWVwhMhBhFde1rZ2PXT7RGqju36qE",
  "key6": "47Q6KKUbpfAAfBuoUUPwzgrabSqjn14VEYRBg2SPsjqW5o6Cxo3Feo36jCxF792zVtnjscoiirafFeTURVmbqMAU",
  "key7": "2UXSjxQAempv13jGEH6PWwPsnbcVUjUg8tYj4SsCy6rg34dTup9wwnyGJvY4J6oWeN8kNxf177rtTc81xJiCx9P",
  "key8": "4K5mBcMKPTH1UdDRxWe8RBF7jYyf7TFkQA1YdoTnkf7UxyoN4P5qbUgXeCTZ8i1vtdk46CSXxm13UZCvBUs16V7h",
  "key9": "4kMczPBanqJjp81c8No962w2KxEoSQfiEktGh5xf5eaErDhwPcXRksnTVrnDdpGCxUQ1WMxoe8rJHA7vi1cooZCt",
  "key10": "4y8kGst6oyRRSSfSK9fU8ocj7wdaB3hfA81r3WDTdpPbYpatnnmcnggHTvUb2NT7Qb73zspbLLjUuoLeLCAc2oGy",
  "key11": "dHmN1k3FS5ZgMdCRqgPRL9D1Mdy2nGzoHQUDJvPURpK1HZU9sEh4HqffFc2AXbWg9MTNqcT4SaarwnrmmDbNPwG",
  "key12": "4jvLuuMfxqea5NikUGkRhZnsukz2N6JAZg4fYigVXbewmztY6yQpexg3jaAkJEkdFDniiAfYh1BDkhDFU1gXdjVG",
  "key13": "3kRoFD7SnJQaJ5kG2fDhbDyTHtTrRer7fsNxWPt9JSQJSdJ5XJb34xkdvVrVSFv4tzh6U8TEPkcCYR1By3yeVJNZ",
  "key14": "5fcVab6rWk3baeAMNsFVmwcbNhiij4hqnMRS7KGoZBrKQZNTJPqX5gpkb3gcVtuY6bznaXKmyhuSr5coYAwLCpVQ",
  "key15": "3myiL2iHm9GpWQcNspT5952c9xLniQ6H4YihY7971vVorEGUahQUAGxrddNXtqV5jdmkE7uFYqfkk6o9oskc5JGF",
  "key16": "4UT29gUSWFXttpCSrT887uwmt9p8PqBeZk2H6uhAPsMprsBL9bti2WjnjTphi1ZXg2PwqReoZzJX8X7XHByxsxd4",
  "key17": "2QEMJN7xP7doY9nHf8gC4wiyXSW7zp1vR65jafR6nonhcDxi2z4KiyM9gHrb1GfKxMUKeB4fWTcoRbkg1wqCMmvj",
  "key18": "2H4vWvsPPvPuTUvN4UQrUsXmaxkWwk9AyPGZQXKsVdZ9XdVUeKQg7xKM9kzr7yQ3eQuS9xSFhiqTfrox9UsLT3ib",
  "key19": "3Cwz6uzZYtHyHWpjvGBjuvJVV63SLyzo7KUhPmLDanKErYnx3JHZv4pzzMkYnHu1phxq2FTdJcSRddw3dbN6cKX8",
  "key20": "4LNYTzmN1Ypzdogu9MXz6vSj8v9Lxc35Mv2tjQ36u4uagb2vSKdn441N4t7cQJPyD1XF2RJ97rC48YsWaQhuz3Jm",
  "key21": "4ATBbRLsJe9mtKx8Ts55wUdZZAofQT8RK6rcscwRbsAqUz7V7uX9MAVuEHK2zYYcX4ozajrp11DrDcRE3sBtcWg1",
  "key22": "2mSigaL6mkq5Jr2wY3kKweGKRBfm4Pey16Lq62g3CxV9pSKaeG4d3sixrV9MfUNS3Fh6roBLwd3h2eMHp4LD6dcy",
  "key23": "4CTWxYy6DEG8mgMGN3kxRNduFUz2mMX5WW29VXV5PyRPz1battSeMxGcju24qfA3fpCaJVr4kzX3h48utN6JXc7V",
  "key24": "39tS1rjhrC2PFm9VmLWTx53vMkktikfwb1rVQJ6HxdTJh6sEVQkB5RLufpXJy4qFSofcUMFaAqpxs4fpDX3BoAUB",
  "key25": "3GJ9eP52HdjBJdbPHwc1zV3XKP7uszDURMeeY2kxyNjHtQFuQXMST4g1LnNM2EmzNAxSScimuxYYZuPeXcqwKxto"
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
