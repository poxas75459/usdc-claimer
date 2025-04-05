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
    "4P9B3gq1fA4WiZUMp8DJvnng8QsNYjCPxC8E2hmrao3zvvhZexLJJeqAYBKCpbuznBCkGiSFeWbbKGwrThwaY6nG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VmxHJKSgANAAgJhMFMwPwm46CHXQ9aU9gZj8PkagNphLop3MFmBuVGUvz66z254haWkuqcCNpnp795FmTBZMcxX",
  "key1": "3UyfnjWyPrBtFL2cKSwLocnvovC2dKJQuSHP6VfwUnf3A9xu9awGqcByzfPiHHckSgVhUqFDSoToEVhmK8KkPuNb",
  "key2": "kuirenoGowsVrTnmM834yhRasTJT9jfJMLBoWh6Eqj4FWMhyUU5xLzX4iv5wVxVUaDnrTeoKHxvugqhNYbvwzZo",
  "key3": "5WstzeWhwqVKndMnwgxTbH25ikRVe3Qsgtv77QF6agZsB1UPHDzR7SA28f5Ykvtvq7yfPbZ2vQJfUuZU1LqA8cqm",
  "key4": "2Utpz5FxW74MkpdGFFayhH5VArmGWx5RxyWpupcjC93o8sm7QebPqhSgHL456SDqUquNFXNWVcNLA9Jdo1tQ51D2",
  "key5": "3KhzotMmGwYMghkwF93xEeq1Gi7Lw3PuG5fKQJU4XuP4WfbZNrymA5mPbonPUHYaoeS2MZ4RVwAuc4RKa11JaBkQ",
  "key6": "4JA8GVS7yUFRjDXaqBWzS8Vnv8xnPysuqf27keRfgEYmsq1srEGHYKw78ShtgpxZ5b6EijdyrrNYkiXSSnZCyj1b",
  "key7": "5xSqj1fkQbMC6KwDontbY75cGZ3tf9GNKxL3SLJJCvhidNk3zYRgpMNaEbNydJ7pTqdtQeVTL8wRKoca6qS3mtix",
  "key8": "4n2LpuspNXxBUZSP6pBkws6YFhGTEuF35K8BiWHZ5TheSWrprrE33zTgo9gXU96c8woeBNefM11gP5Q34QA3KBpb",
  "key9": "4utth487472Zt66Ghm2xLcUWcSH6cqFbAQHFeEETAqdnAPmuBstZ7CgCF9wbLsfqdaNRZQxMvEqZY7Q29KrFaxFg",
  "key10": "4mvWB8HuiRTFuhgNqm5k5RSP5Smk433498hZLe4XdYasSxBXm8m4L1uaWKMreT5AX21FzKZxwbxFHCFfsiJP3fsc",
  "key11": "33BBfoa6gCgRekrbckFoeVxqbUwAaNXAqnqjtCD9PRL5rA5xGH9zHc1YnUHeJ85VMs1j9zt8Uef6pPGcrReW1jy",
  "key12": "3Hi6KvFvBwARvHmQ9vxhY66GNUUHYpdCrJbnrorSYtVFL2y8TMnZAMJQ7RC2sCWxnG7LWkiMwV64adCVgaZtLqvH",
  "key13": "3y6myVzdHphoudw9vBdWChacuTzFD4ftrcUGTUtdyXt6dVPa92gF8ovWUiuUcVQCfoSNRfHuRYKoEhxEeGqQhwZH",
  "key14": "35F1CyKyuSwDpjiP8iPivtUvEy1qRU3gTcDMM6oru83wvfzaNodqrrDjvXyTKcnW1ARnqcf4WyqGLkHRxdPgDtwL",
  "key15": "2CvSg7vdEmA9WreTAHvxGn53xdwertDcRTBiH6cX65bPLMzVNTRgUKxRtEiCmhUFR6pPrpBi3gq1RGii7vNvoGmk",
  "key16": "54hUWkfUx2qy7jBTgV8W3zXWGdDvxsV5jtBh6hsatp42Ve4kg4NTfcR9XapMksNRd1Xhb1ucqXjnPwx6PuEkLvJP",
  "key17": "2qtveH8D5Pz5zgUhWErJcX1Ldy7wQqqDS9SMJ1GtD4y29mMWnnboGuVA4oooz3tcQTYeNKcx1TXGJTVEQ6FKE1j2",
  "key18": "8PJ7w8xDK4T7YqQtWPoTCwpmCPd8shHyN3K8ogTeEh9CxxE3P7pkJ1Xaub4ZLdYd9iR5Mst1ZmJviUqxeaVos8C",
  "key19": "3E7AN33mtQhcatAbhYmAYvuTNvW61faFBKHshBEJZJ2q7XHDF4S25mAt98EVeG6ggw7NQZpVRVx2aJ5pTSLGjBzd",
  "key20": "6T4CauBo8wn3LckeKwwYi74Dc1fk3EomSXFaK7ZfuoN6GqpnUixqpuWNqRQQziWP6b7HiY5Dbv4ShmDVLwCkLv2",
  "key21": "3N6e1ovReq4mQP1wVp975YgFmeeHFc2LCK1YoEUWBNFDMF9m8A8TpKmyn6KU3PDDN3n5moKkQo4YHuAW3edx6tg7",
  "key22": "3JqQXWLETJjZLo68mZGw4ZLV9nZU3fz7fS1462tciHmS8zLXpYqU4G5ACFXxNHmEB45L8XfaGnhNUUDXjPghS2Mx",
  "key23": "2WkJYc1gZziv7261Kbaguifd7uT8VUqubDn3nWC9A89TB53gc3nkqi91swi9hevLaERaL8VbKj7ADUAdJa2TfGFH",
  "key24": "4sy6QywCaSoQ6MvTxCEScDv8JzT7BkA1hvwfeEyJ6zMLf6UryQYM2vWHLNTWDEDkApukYonZVZ2zApkqTuWN7KSw",
  "key25": "5vrMjms9PBSBZruixZ2m9Jah4CNMr74aCRXTC75SSqJiJHht54ifLzwV5dv3v2nzXstZ5bDx4KgAxH1qNUGfwhdN",
  "key26": "CMhtBLSboNxGgwLrDehWBie8ptkANJtYjFpAM1AMypbwsU8UEfEx7rarVfHRBnhuHLbAf3X2ucAi2cSBQaoPu5D",
  "key27": "5cHQBwb4ARuDu2aCcyxcdkfrgej9qKGSqsuPfac8GZtXjCgzX3wQhgJf9rccepVPox37rVPAPM2smzNHZBSTERRa",
  "key28": "BTtYr9vhBFpxd7ASwwBCuX6PtV4UDp9h5r21zx7PXN2KrBMW78MU87bMPXMhJB6FaTGTgwMqq4cHak69as1FxV7",
  "key29": "2VpQoS2Awe2GZHJwDSyL9drLVZ63Q7YF96xGPXr1mnwLM7WEssJmHUSvU3z3cfLnqG7mNwG6zK4GyaXrGrkkUUJS",
  "key30": "3cBAc1qmGyJPoGiL2M9twGK55LJ4M4Zyxt3nsFKW5GPgfxbcNAqsjxBkPy6Qahpfj1W64Gazi2mAULeownV2bYuK",
  "key31": "4gmQUKbzmj88K6xzJQYHi5dGEk77ZXf9iwJ3wUXWP7kzXKtmH4v2CUrToM6RLCFDVQB7rjf9j32dtURtSbL6VpSL",
  "key32": "wdMfDES1yLhFzU8onA3NyRYExRPa5LxfuTQFkfgfs85rodg6J7g418rD9zGqEAhx4AV5xkUcFvb1LaZhDCwKhX2",
  "key33": "7nvkStaTpxACEKAfK4g6PX9QWbchjENrzwpijfh6xuUUpUAGjb8ymscQpUKPWPG8kiNLeuQjypJuuQMxtwHb6Pf",
  "key34": "2gmQ7CfCF9VPyDgfENWh7JDeyfqc1hwFsE2X1jzPWcZmWSxHaj8ox2dQDbMpBmHNKSoZtxXYeZ3xmnC8scY6Q7Mq",
  "key35": "5vBKUSADkvSCdprwLxWUGgYiaAHCMV1DeniXDT4rXsfE7hZVevYS4eMB1QhFSKi5ndvoHqDJXnrB6eqFLgnQzxT8",
  "key36": "5JkYuDVySVHUnYMU4DXWfdAYo1KvbkQpCqTLYbrHJCdufAnn2r4QjV2GBGBCdoRNQ744Q64qxYqx3dawHy4PeDzA",
  "key37": "2gjQ5wXnmdJyk6t3u5EmxkUdwWPCkMnNDkaGkYfLiuUx51MicAiByfGpDsZRksBjNxcCymft32CJE36VxeWjRTCy",
  "key38": "4s15Fdy9yUyugMqBua9v9LeXypCvMpLeBb4S2mPpLgPmgFRgvwJwoQawmwo8VmKLsMqbLNqB8JPVhCYtLtQjg54g",
  "key39": "4nr47RA1o7hCJohcx3x4cC9dN3QqF9d4n6X5xkUsT1HYB14d7SFVFfiBZ74twvDS1G2V37scvz45FXAPNmCxGqWq",
  "key40": "3c7Z9mLBU9VzFuCyjkav59HfY2CZxLh6YGzDYaowS5NkRsjVASWA9bsp1F7mRT2tSVdDNnNXgsWd5ZqcCZv8kivF",
  "key41": "2A7e2LCXTyKY4as4BxgLAAiPVYaKE6hgg9Hgp5b5omWXoH8KiW9nqKiAcEqktjs8p3ZGA8ToVapV75FB6fyQftJA",
  "key42": "4o7JLyNkD5g65b6UaJVcxaX1kXjU84619mkLd4ckJwwke1KNridHmdft6zrDBtapRkv1kLK1pFEhoDpXMH7u6tZ8",
  "key43": "51QgumJoihaxSQLm34mxzq8BEehyDXLiAyFZMSkUL6QKLsAo5Tc3xGtB9f6jQF9oUvrxeTicC7KiZngcrampiw6N",
  "key44": "FJNuED5joXvPCZiZiDAL7gP2VcYX79HF3c48vZrqvp4fCTucFTnry3vU2CYzrLW8m5uoKEuk9LQPvi5SQYFjJ4w",
  "key45": "VsvLy6iq8axWeAre3ruoKm84PJWc5UZ3eNs56eMhWyxCGQwPxBZQjq6PYuvuXioB3Af7h36nf3RNW2Yiih3F8Ph"
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
