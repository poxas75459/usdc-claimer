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
    "4VF2aeMGZXL16L3v6kApeVr1hy1a6JyM4vAB7TkyrXX7ukWLgveFCd8pXTdja2HcMuShMFc7W31wJMrACj2DX6XR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DAxez8ZWjSWsHPAQ7JLyhzuUpqfGrQCRDqUFN2ks7qbkQtXwBbiUTgumncLx9ttuBUgVBoq8WXZnbYzMRHPJsLc",
  "key1": "2aUbkDawayPBxjuqeuYF3m1jq9YE6CcNex6dp8BMcPkUhws9tDi6PrbDFUeBSnSfh9XNXR86tELZ4snRfDhWNzCN",
  "key2": "5cf7TYZ2HAsgZRHuFHYhZDCJv5c5Sv5kAfQGEPv7p6xF6mzeZwhY7SaRt6KyzqsWakpaEhmjvd2NvdecKK5FX8TE",
  "key3": "5wdLAmAGjoFWwJEq8g9L3qkTKKFCMsvJFmS8w28pE6BQx31Vm4WR6Ti6G6BM1gnZbaYeksSMdUgc32HCwWcaAERa",
  "key4": "3wf2tkdv8iLAs5qZbFiK1r6Y7QqgfAHFmwVo5x8biziQzxSrAZUXLJSaP2AduL1LTaCJ68fFM3HaBoJvhJScnQxH",
  "key5": "4UQ6drVZhwhtTKmSkqsepYrLGCQSr4Nv4YSdQqorbcVaSnvSZN1YyWZiWHLvoSQCWjv2xZ9SoyvP7xYF6ZE8TwX4",
  "key6": "3EqMxmPLvGX5txwUdtX5JHhvEA8htJxFrpdkNyFjvqFkbu2bY6hqdFgv7FyNUXtRidgmXiaLB7uZqao5zXDTfy2M",
  "key7": "43BFDsfPEwy3TQM3jtM7cLLFRqjnWK9CTsPgJ1F14G2eQ49nyD5o9GShfz4SXf1EE12RAQHaFHeUnRJHF6yGznAn",
  "key8": "654y5hxmdpZQmvTseLXN5Z8mVZtbnoBP2JNdXxocbGAGgg29cJvDLxphkR7iXRmcMDyeQURceLMVMchBndj2HRS8",
  "key9": "5NgHiYYY3ocFXyi5NrwfnyBzdxahjJf6q42hqQw5N36V3JT3k9vNv9xZWFZRcTYPe93UCxj4oHdJ7CKAJgZ85YY7",
  "key10": "2onTtm72jjJ8xZjrk77QSBZ9EUqgVtj8iUBJLg4mfRBDsi1R3EPumwWy9ESiprowiosTVDaF2t2UdwFaEHmcavuM",
  "key11": "4YpDgddLrDM8d2yRyNTHPmMeAh7twdD7RMRM1ttyU3UgQXJznQKXPFvYtXCNHv2cS7L7HK5FW9WzNE2juHsh9NdV",
  "key12": "5dDbMV4Y26U9ewRsJoS7gtTswH6AZaZHZKd5Lc9poDgK4z5LaSVG3uHhG6jTUuEbRU7fdt9PVRedN3mYc5XKQENt",
  "key13": "4cJyKKteA3hjik1XckA8z5ZKCagwysWoF51sosdL84sg4Co2c9AuUW3z45GXwkdPEDanoFz6BVP26rLX7FQsznR4",
  "key14": "299VW9LgzKrfXghJ287w6716FmAUCfSUSDpcBaLJscSaVy8iRsLdHJ4Qa7FHJXf36NCa2d9HMtPS25n5pMYEksru",
  "key15": "55v8Ytnm7NdcgTMERVZfGHVWN74ayNWhZjzmSFs94EVWatJg9Ft9vUdLSqYjJ4axo3MRnTeAHuty5453XFHrSFiu",
  "key16": "5SpFtXx7w3fFpaztdcQhqmZmujBEFVVjbcwHfAsQTrZ3KsXosGoPzXzvqZXer2CaesCMwUZJHMf6r2GUnXYi4iZN",
  "key17": "5YoG1JBWSBcsQz9NoMNVt42JS5NvbXKjwmTAqtc1whE6615PmYvxedNBNv9qjRhMwH9uJswnUdww77CV3UgRQFyq",
  "key18": "5p2E8hnLneaALAKk1XmepERkNirnrdNw6XKgG95xmHQh5JucwMYPRpfY2TCjsf5W2Ftzih8ZWUkF8pffR2JpmvzP",
  "key19": "3WPC6c5ZdUqR6tXcoVTpvCyzg6KBkK6XtqFauWsH4RbVKC8noCSuGL3cjWW2xCFnvoEZnpRNsrPZdJ1Fts4gyHW5",
  "key20": "zot97L3XtPVduDm3GNA1iFwkHc1nXqhUEhfwtkkU1bVyhWYrKGSin2wnohemXJnH59aR73ZfyNr6ipTMADsJ8zF",
  "key21": "47NFTSutFNYePxkBcdJGarCU8eNr9YZRBNvk21TNhMeLQyp8Faqx4jVrEUX4TaL2A72bXSxPZ6XWkndTKNUcnoje",
  "key22": "675rWRmvwp6tN5xKJtuGarD2jkx8FkhnzDim62qymQqMCziwZ1b9xs8Eqnp4RTAYWtwmaV3EwbByD4yHpeuPNGL1",
  "key23": "646ujWB7PCaXt1sexnDBCk8WgBBVk7KmqJjmwMNUFzYnmyY8YxRsXSw1sVfeSfao8EK6xZp6R6a6CJqdDQ4eCtM8",
  "key24": "2Eqs6b1J6ey3WYzE4zAfqs6s3mr4uNcPFVydT6KbFQWVC4jnH8GihQU8hiKhtHeeKuq5aXx8gfAdfcHcwzrvdhf6",
  "key25": "5peZFj1X8k72Tg3bYWmXjVrqziKsXqTXsxTZmtjDRhGDsj4SVyxZScqQs6NjNwoDytSoEcK9XEj31BgaZNixyuS2",
  "key26": "2jUSMAESTHjMBA9pZGh3cVQM7QQtMpZSBDBv5W5wjpgZxJdzVvVxQHmE97jgz7BVGiwpUpPwwugfrK9b74XzPVU6",
  "key27": "5EvsCvZyWiUb7hcPRTTY6LxaAddEJ4zfERbvQ1ZNw4yaE7JsVVZWT3xhwmJTpFymcFEYJ6nzqjBbjsw7FCrbMCSi",
  "key28": "2qYPsNrY3eLJnPZXSc8Ww1wFr2eqmyGfLaBQR3Sk2WwCk2JFfQE4baD6kp7u6qKXwtHGVHPpLgjbKkdpQRYxMtFS",
  "key29": "3RrbqUHzGPFAesff392LV9Uv9AyqoukdurzYaMoGza1mouPFNAJ9PL2L3jZRQcw3uauWRM7pNcTpzPsHjxJ9bFip",
  "key30": "2EoWiAuCuANbLKjc3zHNSUeSzxVdQyTipDmXARLe39PY9JbcC3q2Eb4UH61tZusiYPh5yLu2Y8jHzofmtUQU9ZPn",
  "key31": "67nitehs6Wo6ogxrBZgMGzEsaiDchHgmxcdjTsUfuaDoGqD7mSDPZmK2aiDBegja1KYCdpWTFFWqdgTtKwVnDd84",
  "key32": "5SpaueHtQLYoEoLWYsBtndSRw6XAvZqKhdhAjFALqUHsBTwxyTc8Qieggbtoo23kSdbHCPF5cyypFWvdf8vAan9C",
  "key33": "5654ihfjxGqNheNpuN4zC46AEGFACSHFsd3SkrTVA66bJ8RRfirUb4LtqFb8fxdtKhGNUBXzDBkmpzjyLmLnhrkW",
  "key34": "3ipymTNCVfJW6EfHF6v41egzSSa84uVPFrFZtEqW2y4iEiKL9n4Sik2oPcYMoK1ABDVtBZbS41mPKSGwVghzUbAs",
  "key35": "5xRAWYAD6BFpoUsRK7oPmHhkba2wM5aVoj6RotaYh1nDT3qir2yujfYpQVDFDLcyL8ejnPRTgaTQp2ZFqGeYgvyq",
  "key36": "4F3Pj9Nxi3rmNPbayzUHCaoQunMieLW8htPSkQUwnDpdeDcrff82EmuaTS55EM6PW3gFZvTxgrFFnifLyKiq4bgb",
  "key37": "3H3u3R1hLcsS5Jrfuxkjnju4Gu3QCsvFBkiY6dRZPvykG2ySbXLCLDF5KCLsF4iQhDn3uKEEYBfEdvgzMD2wypCU",
  "key38": "24epWkpApZM77cQkCFhab5tVBSbEp9dNrxGCS5y2LAnj2SAq7iRQosq6jfrgMgexwPrPP5xtv4prCjNApPYMxa7H"
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
