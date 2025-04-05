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
    "5xMd9NmTgovXVsMyUrQimms78MAskcNGuSrWZQTkUCB84QVcM6Ue8r9wKqC9XM7rt77QSLcJuEY2KA52fd7aKAhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3szzJWYshCUyPecttShBd3pDJR3eTvfrYf4bqVHwLHNLyeQWezrBrjHuBqERpxJtoNpkFoV6bPtgxBhcrM5iehY6",
  "key1": "4ZHvDhCD1dwfrynmC6AF77uHTj9f3DNHFwn4mcHQMHnsMPAFwCu76LR5Zpo5YhXbwmuhTpbV1X55T8FytymHgCC7",
  "key2": "5WyBrYkCipLTJcvHeNdmwYBWMkTopvyChUvHSbwvrNGXggGjV5pwUzjbfWunDR3FMHAucA4mEF4pkJB8y3r4Cp9Q",
  "key3": "3PEmufFKhJXnK6uhDqfgyJF81hVNdFhp9atJJ3uW4q87ptcCxqUXzDLyrGvTeJmAfQZwdsLPPwsXHTv7QCXLCMAj",
  "key4": "5Q4zGLPXWHFHjkqxjTakXsWF364uSqstpt3v9QWNoCdupNymJyBTW7N6JkpcJnLKrhWdxN29isn566VNnTEdfscm",
  "key5": "5qD4DJwDXBWTa8ny3VX5AxHFXQZRkkcMgBKZp8cHDiKGUnKARjHWtPzEsXT2qPJLvZdHSBry3LB1RQ2JHfFK7UB7",
  "key6": "3ZvMzo9sCtkKbgLSgTtwbNYFLh3vMea8e7D3L2mSKaj4oF6khgWtMTrXFAiyWD51sdf1F7QXaxyjV2CGtjMWSxfs",
  "key7": "4MtFSdpkpLnHaehXuJFh7UzQKhv5fCDRosePypqybQXjkNnqiwvivVgieWQHdUYgsVT9nSjsacWxWQNzh5ZAA4C5",
  "key8": "2yi8fVxay7rcSwvvUrrmVbG7UTC7AW5RjEjC56MaqQmDbNyWA9BaaGJpMtEecC4WgWege1t89WzBLSMhw4ztDPvj",
  "key9": "N5jBfKE7w9UHBXBrx3yAqhKqupqWf3xCQWqdWbbHDZdy9qY9dmRbjdYqgaMUnAdqS4oSmfGDwMkrkeKwJHyikw2",
  "key10": "26JRn2dqZNqn4reRjotrrJRgXeKMrnkALeEEwL2cFSQE3rKutiZ3JNwiPhVAvorzt5NMsPb5Tx9TgeMbiADbyMxF",
  "key11": "3cqH656zgmVqVHEFxWXAxJrxpU5iS5W9mKXMzitkejrStCRJFUHNYQFps18jjR4qusy99jQ4rS5qPyL5LnsqyJ4D",
  "key12": "3SGRQEPXmiCgdLvSoeSxekSE1RVjXjKmYqDfhgoNWmRR91zsrwM8MwJA3keNBELKeeAhZY5jnGzns6f8o5XCuQKz",
  "key13": "3UhE5UbEjYCH4XkFLQb14AJVoXtSKFRzfeQSnxnabKC3Bx3sjb3anKi95L62UVepqkA3ayoQ5C9gJ4ArR9igyoqA",
  "key14": "5MKHUXSR2oYpifJSTc51kcAR5xgEatqE48nusV7aVpHM7vw8yDpweTx39F2ptP6iMa2t6MMZN6fbYtMSguhfu5Pr",
  "key15": "nDhAA2dqb8nMU3BiLLmv5TqNm4Hu7rp7JpGrp4nAaz1JbgAoACHxyCVgu19Fpbb2HwtNtRmHXt62eqzcGxK7y8j",
  "key16": "X3uVUTgc15QXve8EShXA9j9G8Zb6HTb2MpaBac41bxqxVmUoiet293rBMpypFVkBm5g4YosDobHKVoedb4Mc6Sy",
  "key17": "5zi9NLAFYq7uvncVh5Au4FeMyEmpFT6vY76Se13dEN3wVDGs9hUe8kUNPhrsXVUimXWhNFfixpg87zEt1HgUxeR6",
  "key18": "4fZiH3dxXnYhyEkDzpC1nk3627VrjwCpJ9dgZavkaZfjmLNqHkMpcdEWX4YXUQTrKa1mTkD3SSRYebjfvCjVrYkq",
  "key19": "5CZegvXdhXdEmpDmgghMEve9tZnRw94waTA2DicuSSbpcxn69TU63uc5ZWrgRZTz7Rdjd4Yr2eKppk9SGgVULvFL",
  "key20": "5vpYnLCScaVVNMicojKdUzEhLepJ63VNgFWVYuieHmwipDHJdNoPSNecMtiqdK2pv3P4FPaUKBuAKkouUV7UZHQE",
  "key21": "4LaeyYC68vCMXqACP3NsnvFPwn4TjiPo1UGc9tH4EeLZBFd3sHGgsxrEqc1mrzsXk6erVLCMDPhdtkakkQZMnUQm",
  "key22": "63fZGQoBt7fawrZJryzB2Ghmhet5tqqx1GAVx3CkWctc3DCyfuTZ4kKVAPk7DJSoh8qnHC1KafUfVQN47c1L2Pc6",
  "key23": "5GivTDfFNfMwtPw7LQXBNuPCpqm3hpsk1NojrhBx1GukJaW58oK96ixj3n9FeTjzRvEDCDJ14xGU7W2Ngxqt9FzU",
  "key24": "3AvGNmcm1zMbkqDAUVu3b4aYv5hRQKG297dMTQ7a5Hw1NNrrvEthWEPXa87AfXDgJkYAtsvwKLDb66gvoCW1RmUQ",
  "key25": "DKT3Tm6gSqSZkVxahBAkzV4B5QUytHS4Js548BJDHzuSjrhq1synnhDJy7VdTnJNffSGBVeC7oT39t4ppd6HUuh",
  "key26": "3MeABHkcR1T4RTZjeR9uWXt9TnmKZanEtmP3C4X3SfxRhbt4HDcFM3wfEmreNxz8BTdWK79Svp2ifrHh1whr2YyQ",
  "key27": "2BuBVGxKK5DHTzCqtC5ojmNcxJKZU7aQrFXHkJn4vz5KJPNDWNHGS29Z8rFPkdHyjhaQAypD6Xpkg54XsLJWprx9",
  "key28": "3pEnoVy6c6MYqXPVK2NiBevBjxTAB79JXtorMGjj6KEywekPD5rCXq71sd9eWnXqx9SZMrHVrz6KKAh6cNv2TyQL",
  "key29": "1281SdwnzfKMomgnt3Bz52fpgtfCYFDtWiTXaLoAeRA3DhyKdgtpkzDpZMnX7XfHPu88FzC3KqG47QQA8PSpCFFM",
  "key30": "3L5qrRk1HCsiUahEi9N8bfGLGZdWJrb47z7w8Duw5UnAaJHXRq7T1UDgV7TE7YjFQm2aynBkyPPaNs44duiuxRqy",
  "key31": "3HTmAU4BsGr4huMhiXQWN1H8SDNvqhA15AgFat2uyR1gGjNectAcMkfM2SEHbf1jqFc5keetMXYUBtzmjahoT6Tf",
  "key32": "19k9bP1CDFT9ZmE6oNhc3tZboJc7iQwGpLZeYMna2Pfk7pZNnXdTczv4yeeCKq4hXJNUXJea9FYFU9rkvBwN6PE",
  "key33": "45vkKY1jFjy5EQ4TUhFgoJTmAk8zC5NaxjgQE3Q11yERREXdZrtoZNsc7EUrwYoyaZqFCrAVcE5tacDCQiDrXUvG",
  "key34": "3ND3TV8oyzhnGPy6hW5TQ7dAb7ipd39fCErBRKZ8z7S83dtVZWW3eeWvqvnWkaFJA2G6n9XVyxfPDLMqWiajqXCe",
  "key35": "3Cq4UAytAYUTV6zieFPtk9mmNxpPoYoW647QawpLmX4hqG9hersWd8JQ4KAm3F8AuC93ULcoW9kWVcUe8tPSBTLt"
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
