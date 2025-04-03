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
    "2hQGkghtr2T4dMg3DvAzWCjf8fkeSv3EyeHZ48jVX9gn7GQnxWEuUESDuczUfEhkMN2W4B5VCXRqumkg9hr3BkS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBpL2NaQY3zv9b1f8ZHpgvZpJDcbgpLtxztjQ76M18VMvEcHxmCrmrumjRpbEy68jPgSbamrxYSXUNyXEsoeYaY",
  "key1": "41Y9TU6k6nwB853mSCRnDWZR1URJiVDJ8fDu16Edj5TU8jJSWBnYHvMs3Zi3qpXrCkUM9frN5vMG95fpoFGEtaiB",
  "key2": "4sR3QwR57KEuqwodhg7WXarNZ24unDcbkkXYCGsdoSbhMz8ui89DxUfVEmvNBaLjkzzr3MoqhdPmJ5UXafnpJQn6",
  "key3": "32XJDcXAdNJb6cGQMfgAqSDyk7RwuPKHYPVadKKG5EgFUMM7T5RCQXUcHtXLfDk7A92jXi1UJNbpWZCdZmvL3BYB",
  "key4": "2Bpa3ZNnivQxQuKVUze4uWfNc1T7UqtLgAG6RSj3oxzRExiLjehe639pCJx4B17ftByRtrfkJPwYhc4NuXHDoUBc",
  "key5": "2Kf5shMP1BMjFb5TBCh42ByiX4ZFcRdVLYvxABnp9grNjuJxYWUKcCrSMf4GcKJiGxHKgbV9o4pwE6jBpXGDoV5V",
  "key6": "2FqzYEzPxbdJDSZG6o8EVa1JWxrHuX9yeomttchZWAdWdLF2sX25uDNAMswKZwW9xLKYYE55REVQ3GXC1jr7ojgE",
  "key7": "2JpjTyve7Rc2QNa8nc5fL8CFYhk8CWYcU6chqG9JTS52uJ6ngfBdxSSLiRW4vqheHnW8SJHyHChR9mxnJ8sbEU8k",
  "key8": "3r7QMswUEdoDxaFc2o6J9WEXGEc4A66vKc1hsKpqDBCVRcurWLmbNZT6sAjsZ7zknVfvVhiiqH9bR2nHXsbZKZ11",
  "key9": "5gMqkojF3FWPGu2n8KbGfkMvJxrUk5JowoimhQpnJggZZJe8g5rgZ6uPgfUpnW3nnrD5Lj1bv6BdRXqjYUfZXSiW",
  "key10": "GETpX9fNdEDRHMKX1pZrbtQMPNoggBbT2zqtPdcxMEY2mzHJptfCoVjnMXy2b8eJ4wMVoVFgW7hXpGmBerEZQJV",
  "key11": "ck5g345WxcbhJj6CLF9FubPcCTHyD4fhC1YJoSMdPb75LHUCoxYeB9rNd41VZkSbNwHJqSCAyEpTrbU39qZCtaX",
  "key12": "3UF3qNAAPvYxMFiA8Tf1XvMw63WsAKAqSGxngFuN8hURCmcwyMtsAavp5hGgQHuz39Vm92vzUSFs3oE39UFCHvCn",
  "key13": "61BQ2AZS1HpPKfVss2uFR8g2z5ivKdaYjcTh3ED8t84LrYe9BadYmmQFkBJbJnf8H1rubPQgdPDYY8rN26WTVucB",
  "key14": "5FazyMHeo9n4XEQQDYXDXWQ1amhgJMfKB2acGgETLLxsxThyYQiVNTpyQBoQNGERGQZzx6Yczsmr5m7GeUZoXa5X",
  "key15": "YWhDGMhXeCA453Hx1mpBcwoF1XotTKKdaDrqPAzmXiHrb8VT9f7ebcfMeyCoRLocwGczQXa6ooKum6erMVR11y7",
  "key16": "2ZvRRNzc81UDNkPwwknhNR9wMUyypnFcoxSvVznLCPTmN5noAvhuMWQb474B4FASjewo22jKA4ffQmstoqRSPdNM",
  "key17": "9AzTkw91KpgDiFXoyHf3G5NzaAS3qoYfQo86Xigpbq6AUcMPo8dZJxRcb9pvZrua5UeMJgcuiMDrse7qabg1Gfy",
  "key18": "ZCzxFfkyLRyEHsHEx9NobdYKsYtYpdB3ZaFS23aPiwJQLmE6JkLjMs4Mv5cs8HXdWxa56rvRrcwGrjmoXHtfEQU",
  "key19": "3N3ifzjzpC15SGRPovFkDR3Z62QMr1euxqnSBkk62i2x3kLfcNLT8jwEWisNgwhUEqkPBFtcNtecEQx7oTZo6hSr",
  "key20": "4JPQcLT5eLWanHRVUhjLyjx27NWkhG6aBpKBEioDuyRYdyba8yrDrxPLqxNKsGo1JwwpF5JjV4J8apm4iRmnrP3A",
  "key21": "rkL8pKU7DmHViq6miNzUZ4AjnPU1P4mv6JbwqnrHvJgcJfCeoj4qr4fPHSNZq23ESM1n5t893hBP6uu3tq9gP8s",
  "key22": "5uVfT26Z5J7Uwn78dqBXaNmjL26gceGubG4Ju3Fye2QAMJ1LnRiM8seavJWfv6vAkc1dA9TSbvGLgvdQkbaCMbX2",
  "key23": "4nsoxxf1oRthH5oewBbRyhWrnWHurgjuXWhtMYcf3Dwu6oHM5wiXdmxBHPuAzwXB3WKEiEyecvkDYBfJ9FJNuvrY",
  "key24": "3GgbeustuCntHn5e9wMCif5fnoL4pQqGW3gdMfHng7cVrZXJ4At47u2aLVBgt8QzkPGS7NieutaTnfxvtcdoN1Fg",
  "key25": "YmqX4b2SFjn1j68fq9yE3L8bf7EtJURXJrU7K6tYF3XhCx3TWyuxL2XGD3bvatuM1adBdej7EeVJ3rQBcBscqia",
  "key26": "2pnx6ZLpLoYczrPhbch1eh5TcmDRUXR3JJUUxU4QbooeV3jEig9wFwE11HC1fRNYUxs24tNSaQ6VhNNYgWKMx7nF",
  "key27": "N83TFpEdzDkTDc7UVnFcMyPeSXi72PrhEMcy4ahVVKyBSP5woDpunjz5XmXSvgKLVrKook2vpLVoVTLZLj9eX5p",
  "key28": "5qFoCzzq1HzVwQTKSmYmxPLudpVLbYWSwFswKJ5wVfB8QVne2EzjZ4mMSX53kERdumwst2ZVikzWR7FwdQ9zFpPT"
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
