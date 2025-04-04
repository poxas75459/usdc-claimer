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
    "5Bg5iPu1DtQkcvws8iudFtvTgY8Tasg84GZwcEC9V55TbSo6M4vitpzeLskEGM8aNMithseDD7nvA4Fik8jCVP5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GK8x9cbyxovqHJPhEBbnoxrfSeSw67rE91J4qkWZ9aquVTJV4sSv21XSRSBe9HVxQM7ZrjhWViUWWoTpcx3CB9c",
  "key1": "NaycMfzeKasJmnULnRsj1pXG4oafuVAsA5RjYeHZS8P1heX1tKUazZH1YbjVHu8ViN8b8HDNvSvvrKz1NN7WBwh",
  "key2": "5DGPifxWJSdAAvmpMrPrgYePjjW4VefrE9HaMkfmM8asHXnjtgmbQakogt7SJXV7Ze3yGYEhsSw88u1946CGADND",
  "key3": "28G1rDQaYMw7s9UNWxC4EUzm5eL5SW79uwkUSVhroyG2mPCPMryZhnTTcTq7dvg5tkLMGydefgHZ4FnFREdhu2dw",
  "key4": "V6PoN7vUAkWMXDy9umKPhTuUaay7Y2YUAX844cuizxF26xm4TfQsmfxwYoch3e9FbTaVzzjL5xYcKcnSjrLT8wp",
  "key5": "2zQssBA2PUJsYPy7JezBqmUX5gxth2uwQ5aFpzFiMrWND7zeBehqaHJSqsVnrWefrMPwMknvYnAazbTMLPP8Ddpd",
  "key6": "4gvwBo23kKEX3RyXBsGmgGmGA1TNeDDRQWpS15BVQVVjTZ8xYL3MiUPDAD5XGxhoYvkm7ux3MkYPAEzoi1Yhs5DN",
  "key7": "31R89fvU8ujYrQYBsjUvpTmJk3E5pxdzyyLT8izyqjdeJJNhwxmVoMiBZCmuxbNK8aKJdievAptue6n8U1meqmC9",
  "key8": "HDgfnnx9vZfZxD43GbBXGYFMUge69e527HgSmJ1eb8XNdWRVTBsxfRzq7HQS7kdNqWcuBQfrJF65JV9P4rcSfid",
  "key9": "DNfXqaTuQwTspRM8LWf2eeshx88HX5jWb1iTZMrySYBYQ4fmKWHpsPBib1Kj29aFiodRtCuBxWmQ5SgoRiAt1q2",
  "key10": "4G3KtMo5Rp7hURBEixFK62wdC9JPrYAGAEsNQ4zL4vegxYevn2vc4rx1ECsBNkvnkA2j3Ymq7WhYvkoS3YigQWva",
  "key11": "2jobsRSd2hYU6AxPNuXmopyqdmPEf48hGkNCJZZmJkUXLHx1TwDHsXqbQv6TFZ9NEjWjCRFdFx9Wf9K97dAwwymf",
  "key12": "3ic2WAkWCYX5hWkd9nBjTfBF3csxVVLHuS3srdLTdFT9Ajpsm7F6RiJedi15XRLXAV7mT5vwTT9LZq2nR4ks1A5J",
  "key13": "4W4jjwc3v7XJVfzbkKhHxuzb5kmkgY8k2h2Ce52mKzxaYqD89nvfiqyRVjSaC6di2u8jno3Pnv96ucmWgSqnxq3z",
  "key14": "5zfU4fjFvg2TjPL5LdE4PdUv2KD3Cb3xCScnbRdsXwAB7hgrjmcnts7J7EwXoKAnkxFZHcxDh2KFevam2MTuUt3h",
  "key15": "2CnKutyXVrxUPCUyK4NSGExjQYmMRkLVs6szegdVbw3zxBCjdeoj6qDSofyBrbsPd5UWcbqV8EQ46posQFN87ENX",
  "key16": "42Utjcupc6mU1BVaK7EY61Km8TFAoCshNm1d3u9zn9JLfYhHFQ4WVshWWS7VQu7KoKwsCt7QcJs3YtKVVniqCzMa",
  "key17": "4UPDFGtEmedV4MMm6JSWCo8vhW2ZnvSE6d7f27H4JSweS8LdoWrNEXJE6Hcp14QadfWyD8NiAsCZY5NZez9j8CD",
  "key18": "2ymudG84k6p91P3hEgZcxivKnqucK7mGpLkSTn7XNPAHti2az7svKPrdoEi32rKcW9bDBodT8qXHNMtggZ6h5r3U",
  "key19": "2FZNki67fxprvE9FuDtoZnwthqBMtEBt1CdYqUXxtAqrWY4Wi3DeuswLAYJ8XbmA3UhWVrXxk8PPmfQxcY96nEy",
  "key20": "5Q6o7WwgR4YrrXzoj3mU783Sp2RWsnQTB5RViB1MWrzEDE2mpYkihtqebjF81RjXt75oNSKaG6eJRWq5suihMiyg",
  "key21": "4MwwipvxtJWqFc9BVfVEfcECtm3qExovkdEG4cwaPzTMkfspMoy2FCsKQQBdADzvmmFEv1dXbPE3sb2YYpoG9s6a",
  "key22": "5ETZXbFaYTNLwY6BhbkEoQd4EUvvntv6QhYy8QtSMkoGy6xRDLmt9k9yo7GXSweDEjDCbmrY42rVyBMRB22CLQoK",
  "key23": "5zVruPeoV8bXvcRStNeWFrhB3GixKWF1sivga4iGuS1jo3Qj8F1m8P43jVvLPs3EHT8MdMWfoj77H3kAiUXVs7SM",
  "key24": "uTYfPKUUWbBeN6r7W5dYt6jnzKXV6CnVRLgEUdxR96NzUAACcXXTKEtJQB954vni465FySzkS2pvDmnKNkUKPn4",
  "key25": "5T85SxCqr9vdDuLtmLgtZwX1jkAKudnM6Xnvuv4WMSoc7DGNn1bpLKV8iaMbvxQMwWu8SJHqRv5WGJtrctgosNex",
  "key26": "2pDZd2iC7QctVxXcn866HVnRmKviTbfi8PE5wco3JdFT89csf5qjK59u2z5ZEEW7ri6V5o2ryj8tdpwdtW7CoAgX",
  "key27": "36yhJgJgPjjBn4EJ8aPgxqrsNQVnNsuCom72BtGju5e1dFHpWmEuSho87DPGWRS3kLwmdmLkTy2f1sSs3mECnmzJ",
  "key28": "dp8UBJfRt1SNftJRSHCr8Y93RqUyTidQhtDB5SYa95aaTubcwJssDsuNEv4BAB2kJ9SMNabuP6U3Eo4j4rmcJEQ",
  "key29": "4cPe7tnH5He6F7DMgCakPnUwWXWTYkBLV61Amr1dv4ppm7jVYpCjNkktqDMdJb1ded4faUNb9RUoPwyLtRMCo2xr",
  "key30": "fkv5Hkie3Xe4YudfCLJmnVBxNjpta6DMTYy5XbqcdCfMGd8GBU3xsCChzwSGLBUZpzsPS5YNDqke3XyvmoXQdsv"
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
