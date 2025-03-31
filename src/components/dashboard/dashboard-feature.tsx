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
    "4H5pee2QRoBzA1N7T4nhr5fUU6D6DvNmAJf4dU2DCRv68w5qm2F5ahD1yXaw4e5buFGG8h4FcWxdt5b3qgMfjmbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2orBnNnka7rJPiqa92vY19M44HZZ5jTMUMTCQEVf5fkos17EUvvLjdrrNDPX5ENHUGh1C1UMW6x3KEw8cQ4akBSB",
  "key1": "5AAU3mrHFvQRpjB8H1LGyR2N8CMvmGseArhsXFLGN1n988NU4LTkJ77HFub8s95YkxomY9iDW5bjmZd1W1tetU7Y",
  "key2": "2C4cfhDApfMJBai5QzMh9PCauNUdLD32h7e3FTm15KkT7pPZSsjqCgHE11RpFD1N8hAPQNpLnm3vBzJTNZHZsCaL",
  "key3": "KgHqUL8dop9THnht6DqCQLFTBJbrq5LZMy5mtm7TKFx8QqXJJxNe4eBTbRaYT6UGt8kX5Y7inJ39UdWcXHQh1c3",
  "key4": "4xRVAqnbSFDn4WSy6Zn3tpZLXnhLgS3m1Wz6H235oQRf8RqVLtoYPzt2eNY2NgJsj6zD9eUhdRcSf5w8J8tBZD6z",
  "key5": "F9dykXxrbyuEgaJKHWNe3cvxYN6R7tdUxWEmwpqMtqCkbpXgVjvN9hctniqmDSQv88mWvpQtpvYj6vKS4XtZAV2",
  "key6": "ob17EmvwyVCHyG9ZSXnhtYawkBX6oRieGcZDVR3vxbnooDz3fEChMDCazVD7LkoP5DU1zp6oMoAb4nt1u14W77H",
  "key7": "2oYfg4cSfSGZXXc9urPKbSxVf3evKLMKBFcsgABGpatP1oRzmFRe3dNDiVvRHCAHBfEMyyreegU6xCzV4Uy6qWy2",
  "key8": "3RUjfqeqGa9nAwvqrM7VdzdSmK2xA3dvWF6F1UXgtvsusnehZC4vDkrMSqfkqiMqhV7FqBRXdei1cw81BHyhv5xT",
  "key9": "2X3fz98CTVzt9bEQhfhnYpp5ZJX6iuKU89RwwYAjv7U9iG6nCC2gDTQqfPbJM21ZtHkmwBL1Ei4b3PgZhyD8XucB",
  "key10": "sa52V6TQDuPqHQdVG47F4jMaCGcYeJ62V2YLygRSVeafwSMFqgyMDgvG17qbJ3NypggggDm9vV3SBW6U5AV4QKk",
  "key11": "5ewzToA63hLjvbKxbnRvp5z9r6rnh3mGpz2GH4fTsWXpUjif4D4nw4mUe6RhaLgnYYiPzDCu2bGvCZxzZDaRqii6",
  "key12": "4zAvmcX15xXbNs7SdpNScLj3sYvfPERSWeebt1MNuchkCRUd2vGeqRCqPHu6wpN7ggAvWQNGAqYyZL7neKTLWqUd",
  "key13": "LK2RbY5YvLoobKihi8x3FfwVdsTejUhjuuYV9zDpjjWGqWLFnGorSipepbbkxbLbymgQjD8wMVCKavF41c8xWmj",
  "key14": "57yFHxBvf15haLXRMNhr9rSvPL7zNYaezxwqgFgeoQdcddeomsJbjqpYeSzukMkBvZQoSrypyPMFmU4bCbW9o1G4",
  "key15": "4qpj8FkcoSZigkcYqUaNk3Pj8eFtG8mt2cWM3osEQovYqhTvG3vsKTFy2PEEKbSwfCBgUGuKUcLpG4r4twSsYVVf",
  "key16": "44Wj6aA3KprEYnFopDF1cUEuF4ixBpF9F3EpCsX82jat9nFFoBQxUGvcZN5kTGDhwo7VDGXH7XcvJCF69ttZQGzs",
  "key17": "4wFCxMRwfuMyX7bA9yQPq8U3uaNbWrMcU8v1hrQ6uBFvpac8GcXHGU6ZGXvxhCfi3o8dp47LNTK4JvseiiBRUHET",
  "key18": "vbu5LQdQhS2APvLukQVjzSkQuF4jK4UL2WCZLXVxmKjAG8GmgNm9G95yjWkYeddamt5T2NEGzK649VnmbT9x5d2",
  "key19": "147fHzj6ShLeNaZ9TKEV3RHaCgSxUf3ZcjhZ3xM9SFeMPKSr5ULqSfuaCNd6cN6uHDe2oPKGNXgGqWDQjX3HpdX",
  "key20": "B992bK2X44m4D55wRasgDBhbLfkr9uSsWgUbwDuZW7pZcWRQNSy25pKYGFWPRf6yCikqs7DQf35qRgisMpPm1eL",
  "key21": "amEEFAE6k2Z2DJsFGtao9UqUtk9aFun8o1VQieWM2CDGMEu57nPVevgdG9DhYWmL3732zz427czPqCLy6xUzj1d",
  "key22": "3Y6QcTYjcM4XvDYiQwy6XS67qjPhbQRnYPkxoTnRvvWJaCqj6isoCZgfY6FShywFzvJJuQ3yC5iQerdGLBBeo7iB",
  "key23": "5cZoAZa3czLATKMArkGjGjsLfVTdUB9SvnxKWzF42CRHS67XmyvXernqgcBpUxDJrzYzkvPG88mEcLSDoBW7eEtU",
  "key24": "5cL8HE4V2HtPA998cjMQgcny6uT6rBPhFJRthZfvheEnRZH6GRBrYrS6UWu3njErzGyVKQHTjLJLamejTQmmpgBC",
  "key25": "w49xXGRh8UZLSbYJD9KCSpemGkVuaHWU3iXjFZe4nxo1BR4LYP6Ncan7QKAXzRW67mCTXepx9fd4nHzA3baAaoy",
  "key26": "4xombgGAG8VjdZjdUz8iTq3vpa5zSRyum3ETYqWQptzNHjVi5BycZdQXmUDQPj5SUrz7YbpMjTUTTKiM7xbFTcrf",
  "key27": "35hsipyTcyEz5torw5zF7suFF2nt5Lm5LFneFqx2djh83fmVVLh9Lp65WFncMhb89F9jPtDs2VUxoqEKA9dfsnfx",
  "key28": "48GwVnrdoo2afXYWh87pjS5SP2XJe1UsFpw2b8VD5HzkFzSm4UmZ7cJFdjRAiXZDH8XHfqHQctpmUTEoR3kc4SLg",
  "key29": "JUpiQD7gTWCDGgdLitmNXQq6okhR7fvzBPEQ8JoDxNXkB4Kh2hrkrSxXfwFJvVKyfWtAbbCpkiJ2gywYYhVFgHi",
  "key30": "2HFcB8u4Zmag31UP9kFoiNsB9AKV25PjTfo1APavuhcM3JaomXt7wQ6krrzhTaRx9xqrxwHPNTyB5fr7Gvwn2fcE",
  "key31": "5oc7iiKiyQd7kb3RLBCV3wdm6mwmqMLXAALVty4h6Ar2HJXdwouANz2bhzR6PozHaxstEji4oEm6JJPQGDRVsZA4",
  "key32": "5zF74uNPyL7VjZgzgiNTN4wxjeP1231gVWqSLncqTTWjAhqcnxEpu96o5pPH5dTv9w2noZzSztZS9MDQ8ByfZGDw",
  "key33": "2A8rWNe6Xk4VRfTMfJ62J3kDH555zMZLVgmi1Yi29jDybiyQpGqFeiUuRfH1CAXgvMEb19donWc5UC4NxQhfWStX",
  "key34": "2azg6t4xje18v3UqobgaqwqVRgD5VQe9oFZavUbvr9LXJxBeeXPrjgHhZX2K1MVJJjpvNw757APbL6UCLWFRwEPh",
  "key35": "34rcKYop4XyY38wFSuhdSCxSXxY7qGreKZtDsHYNw62NkrzHPxxqUDQG6K1ib7gn3DkuDgN4QiyBBTXD8y3JcDvG",
  "key36": "2yk94VWyYjYgVe2Ni3Qde9MY3LVHpYgbNBzxDADDsCf7qMnBxmqFuUchME7kh9sqoLXwXNnRSGW9oVMyCbhjz7zK",
  "key37": "3SaXSTptXtNNDsSJTCyre4iyjSTn29uX2HMqmgCQWJfTHWZGbee5VQ9yAxfihLhTG17hHbbZs6CNBw1SgbYFdYRD",
  "key38": "38UCFPHezufbrdtkXTFgSXZWSSMb5d1qczU5CtL1yPjAB97qqq4TsshdTkFrGYqGfTDFjvwLYr6AwH34oGNYiPKV",
  "key39": "3aosnGv9fMTMUntVhAD8ZvKGfXHVs1sZ7dPrCgnW7zETmxaTsyucTh6whEs7MmGhuPfMwP19JWZCPfHHGoEwGTo5",
  "key40": "59fiULSuXL3Fjra5ZyN4MPRTWHmBJ976XqedTEEE9j7A6E1jiKNuV6eRBkrGybTtHYyQpwv4eJv6kFSVWZAh6z6w",
  "key41": "291rBYWaF9trniFnCdYSyPBWaHhv3oeXNi15kjmC6MRLSjcgdHcPFWd2kJrvFh1GA7euW3bEbJPt29bQDZ178TQm",
  "key42": "3rphdgkxbpVEATEfJ5KFWxqQX6qWjxPpTTXgec7v4sbWwFAyvyFS6inJ6YMwSGuyLVZ1UuKj1Lg2cYxHvFR26VCG",
  "key43": "5CVtxSfLTz7Qa5W8hARkxgPJAaV5YHWST1qU6qspLYyhRT34kDvuHidHWVzVFmGj638Eg88E7vXmKR6dqb77CEXB",
  "key44": "2tQbp2gBAVYDgh3yPqVDnGhtUhxZw2djoMgEjc8Mqk1V8eXTWVpg1R1WoZmXefqQm3UwSr3PKp6KhBEc28355Zza",
  "key45": "G8z8rbScpEFvq4Ai6dyJdrirfkCuro3vtXTGJV7tjXU3xEqbMiTaDhfhdEYJofkjDjYXqvVj1QSjQGBYhjxEYiG",
  "key46": "4DJ5ZUq5MZiRiVUjVHWDDehz7HoYsSyf7hXVPQuArAUJhUJNXqq1mUt8YVACUS1Sii5DYf3DBNBNCngkMKbdZ8n9",
  "key47": "3duLHHZbciq2NNUVSKsqz5zMzj2nuyAn9K2QgYU1GhbLf4wWdSaVje8u9D7J3N18ucf47C7K1cPYMA6E39m8wh16",
  "key48": "4WsiTjmgmcZ74sFfzYeCpnbTytG8p1DUTM1EZfi9KvvcrPCvGYXXzCCRRSZpZXmr7yRXb24y3JwLLgWcd3183R93",
  "key49": "4AEn9B8eTw7XApaPhBZcARUFbAsdqjUmZy2XhqGNuRzT2KnrTaZrGLsfTVea79TawoRKEuDrcPFV7tjmcwE3S6cH"
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
