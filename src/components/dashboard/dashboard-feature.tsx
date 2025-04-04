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
    "4xkDjB2kf1WkcMeS3eotwNSos3eM3JANQurPbqZAHk56qNVvnEk3RMiCuWdpkfsc37hmA4d8xC4EpLZ5M4tVxrU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MAR9PuCnZGhANawqXB7tvYPSo3yPtr1XLVAzuL2T5vWXz3MHr1YTwgUW9HThgVPZ27rtwbKTF3Etn7Y4Uwtt2Wn",
  "key1": "XiXV4YNVD5Kk2aSUzAhhuCujoR44awJdahcmSFkJMw2BERN7HsJUNnETpBUz3W2vXRzSDbPyts1GY5k6J1W2CKK",
  "key2": "4e6cNVChCz2UygK87B2yiKMUsnfNwNysnup5Cng4vLv8SoAPkoz5rzPLbLUbaCfok4b2gfHpNzZVmbAvpW61dMz5",
  "key3": "2vBLUH83ASAboT3qaWQ9DtaDX5nXyCbRRDiqNZRRkGP3qbsm3Yd1SNQz1MZZZfPUm27F8JhoftwC7PiCnv8QjJ8n",
  "key4": "36bhBUhfJichZtyRUj2Q1RCm29XieFUa9NarBDzf6MG7GC4hds9KaNVMburYcEqEb5egqv8h5BQBXHfS4N3Xt11n",
  "key5": "5oFE6GanoUmqrMD2DJF1U1vSXeypm2L4ivQaKxTTmkfG3Qg14PjuiC3ZYTE5RdfdCRrRPH3NjX7ejtPWDvxPFruN",
  "key6": "gkV9GzBTWRsGPk1dxyGexemZKtBuWwskcC8JvVTBa5cRqeSDMw4CKVwAADkWotgJLmh9kbYB7ubKrnhkNBVCH2R",
  "key7": "31MW2PoFctU8iza7qAzi8Z7musetyqpZ4zJUxssHsHicwe56rKqbTFAEweNxS9iWU1ieYkUgSEB9X2oisg7cL2NQ",
  "key8": "5yeMYdHn1w4Aq4uWEm7GQZ98PsfyV5Kapdm7CWJ3qm8W7xN9h4gUtemTYxdTTxinX66dvsXMef92c7iGRubihNyQ",
  "key9": "2R2Zcyc2gni96RN8oKUqiSxXqEC9KeQ7LeLhwn4mcwdMi8EqKU214k6tA1zEHmQd9h27KrHv6zDxHVQtZevcK9Ee",
  "key10": "5ZLzpZR3fhBEpHqGpUBzKSZMYWQNvz2PwUHxeggGeUMsysyziToBgpeN7KbCoMBHD3v94RbHexZhKpUz5uAZq4n7",
  "key11": "UEDh7ucMBZ8YwdxQ869qLc2T4ezXKyhNBjVG6UFu6ChoGhXxzQEiqug7NqfLfaDE7t3uAV8fyW9JB87Z3R8DiLK",
  "key12": "53siQAh9PE85kZYAqtGejPWuVvYGcpnnprEhNmXdBPiP2iAJveFLp3WVtVihzG1PL2yp5rrCrc9UPZK7HD6BdT4Q",
  "key13": "4kgug14YpLbCCFvwXF8y5qK59umCv7DatwawceNbVENe8iLTVVV2rUYhWMBpZvxRyRQ7QLJqJZVnWAMyGm2Kktwg",
  "key14": "3KFu6uYh98bvCiELcpB7E9yPRyWDhS4CoTKyeRB4wCZv9Nig48KhBprXkoRMFfK6c7FcCkUtqz9LxW3SVQJjTbUM",
  "key15": "2jEU85JC5wnCvXtEmjSrPDLVLheTCmmopTWHSnUrFeRe9VjKQN5TVBbQQ9kKm8ewPAtUGf9BC4EWBb9HJjsKdLMr",
  "key16": "4CunpsXQcCwj4ps2dZvEDeMJNoV97MhUnKzsdenT2oKx7PEvCHL7iiENVR1xvNFiSg3jGRzYRXWRHyqYCfiMrs1V",
  "key17": "4u1JnSWfNmmTpLm3K8DaXoyHUMwt8gizjDNpLr11oGnt8Xfmocrjnw5cF1gt9mzZjRrasnY7UYMt9v5ibN9uYgKT",
  "key18": "4fNfSyEfsTm8Qdry32rxMLdFXJgt2hWuQbEgzEU2X7XpPsyEifymasWpVnqeXaqHEXVdVbKfN98jwDzanWHvvqKN",
  "key19": "3sAF67DVvShmxz6bwepCzXCtJzU9pVxkQvT76iDYfnFhgVCfpdxhXJYyJNTB2dymtkapSo6eSPa2JiWEjafu25At",
  "key20": "YvqTx2gh7gVeQwJJtaWD37X3ywsxiEQaMJrT1rfWfZr7BUJS64QuLgab9zL18LaPWHkULQLh6xV5xgF7RzdZ83Z",
  "key21": "31tcC3ExT9RcuF3QgUr6PHdjjkv8G5fkXYgrvcAQmQHAcUztFdtZ7z1hfJQtfZLbWAv9EadQ7YQv7Am8zjHpB4gf",
  "key22": "4fkj7v5845Ue5D3ZTCfVRfwPnbJxrQfvs9GGXM3vNZjdds8PKuuXV3CbxnF7ZhyWsbNmBXBNsf1srnVbP4EheBse",
  "key23": "2xZF3wuurCmgp9MvWgmX1UUDmfvJfdc8qENnMeY6uHbdUEkrnj8PDgmY3CTukbztdrpEyP4cWeb1JuWGYurDbXBJ",
  "key24": "3DrD37ftVAPFw3K2cJa7cbGurCvjdWBBoLcjpE9F9p2zpg9Fwfnve8ZRr99LndTcuaXKHetNuVrYi52xGCBGdpYv",
  "key25": "5NexFYftXy3u3zLa8GCG6mzvtuRkEWqi8STab9jKSaYibop1mYfeGYShpxmYqVi5CgVYh8jS18sriRKDJKgGdzEr",
  "key26": "Yc3j86mtkALMBvnye2YNWojsTZ3cETLXDZN2T2LLmVjJaPCJxYMXYPK2TUQoqFdjQSLqyVoAoejibbRC4o393uS",
  "key27": "2WTUTT4ETSpVC9ydASZUWPtMREJnym8vtaVk4T7LnkrShJkpzFW6JE1w63Px5def1Ev7Lgy5MRNQjGpc3gv8CjMh",
  "key28": "2j7QpaLd38eNaBRQajWxaaVS8wiZh2QFyWpMdN1kwoPCC28WZsqbCMWqDL8dT6NDHXmcmuvbmntTTsRmrhvt33oY",
  "key29": "63eKFLb2oMhcqbcAVdV3K2EYaVY4Pzsm8MtkGxzcQnHLnM6Hvjzt9rY39iqktSFWCZunUCCUZt5DjAEtUHr6EXKL",
  "key30": "4CC4poDVEWt8u2WxqV8jVbhFcupccyPFg4jaZBg1NTu7vP4y1xphaVBmZeSaKR3yhZuYjuSNNKv76dZgaBpgVgQp",
  "key31": "fQ214BtgjVfsdqVDvtBLTgBYLkKuJiLHTVPLcU5duzZXYApvPkGn91Y2XzztRG6wcF9QfrmU5ZAA8dpv5UAnJnP",
  "key32": "SRCbo5RoNUgQE9GZNpzHiCjAZAsi12uUHD1bdaWRQ44JG32DuQA6QQK5mRDkFP6GDcCkLo8YNVP1h5RPRYMgyVD",
  "key33": "2z9qHPUS5QQeYzKsPEnZS84EzsvmGzt4BVuqG2Zvz3m2Euug7tYGXxiS4TV362dHNonFCp5jACTvwhenksMtDK1p",
  "key34": "39dpgo6wnnqCoR62p8LCL8yqabnQzxWDbh1Jb2kbnKzf5X77VEV9W8kvW1eqejHznKCkcphXmkY58fFRWYvHzrCG",
  "key35": "5mcxEVfcL8wThy7855ESF9cQ76QG3t27J8Q3CWSRWAaQo5qXMvJGiBk6nGyVL3hUmCkuNVwxN8jTSXai2TSxvnPk",
  "key36": "5Q4oW5UtBnY1uZhrh6ScCra8s7bsoWWsHhGsL6GQTQPsCcTVgH8ZKpRCJGVSBr7PHzLmwx2hpCgkH3fcXL1X95i9",
  "key37": "SkPzo7HoFQwdKeMMncfFsBbCwo5oh2md7ekwSPUAbYqJcYmqxKB4Tm8VDNg7pbrCEdwAYTiV2XaDGDm7odyEAJ1",
  "key38": "36vBpy6YvrHp5dFmDaJdMqMNzm7HoVZHNLUUjNQ4s78ihhwTemTdjdJ4tjCaoV77MYM4HE1Ri9Nzaz1WEBSasuqd",
  "key39": "5HMugsJyrZ67bYy7LiCrVnDTXPGDXVWM2rAEDeH594ef1TRXNAySXLT6CRKcJ1FHnNYY3J1MnMuh5MLTqE7VaUZv",
  "key40": "52dHxyRTson3LdR2hxwwuHH6TS3EzRbtjaoz9oBrSBb9e2omH5Cad1LHcS4JaDTQSKzZXoq6gtmPjecenG7u6G6r",
  "key41": "3dksYetPmbZxni2k8QQbo3mXFFaJCFk221LKiPqy8UZr6njR6txLCuWJTXBWGcj8dVnVXuyroRGntXT2QBwxbEfA",
  "key42": "42wPaptXj2eFj3W9cPbijoiwtpWJosaYgGpZNYqf1ozdHKvvpoxgA77XfvMWDwAFerWGWJUxXc6JM6J7oexWxX2T",
  "key43": "5ieCahiJ1rMJA6druH8KK71BzyvFPbAAKsyvSZCakaZ8NLJZv9DfehotUbLpqCeA7xofdLTZ5WJBpbaYToCvSvgp",
  "key44": "56Ke8Zuk1zcwbXokutWyhAJfTvEfiHaF8dvxRC2AXRwXiJod5LvNMNNpgNnsY1H1tmipwetdGZYeUd4mKkQGNnAa"
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
