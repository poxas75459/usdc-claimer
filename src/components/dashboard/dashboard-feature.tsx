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
    "4w8sY3yPk7Jygwpe6GtDMcf8NDvJT7GKrhT8nE9u6cyYDponUnM2DmzZsEm2qN8g7aokNVbx9ykQbkq1GxZifMEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ihgU2nh5sDBoNGVw2U9svu9y1pJnd6sZrJvgEm1KCTQhiqGPeuaqXeoeU284ztpQJ7cqdeyD63w7Gxbsc9QReB3",
  "key1": "3DcPHwL9p5ix9NKKHFdQPDdzSNRbsSZjs9zUUdsd61DQ94XmWRgvtDJMaoxBTq1qQUzdAHSucziW9R4CpfaaDWpe",
  "key2": "63XSjhMBRvsHyVETeq6Hb1J19cwtuFwvFJhjuqPcfrm8sRV9j3WdwYg1dF6DcFp3sfLZRJMGD8sv7PTBisR1CCn8",
  "key3": "r9nP6Ys1cSXSKEQuL6gfR3DAsXWgNu3aisLYXGJ91ZNcb3kpbjLJbxPafeosPApeLsehUbJjMTM3eo3seWRVfsr",
  "key4": "5w3YEhWqcB5DZw3T4N5w6mJUpTgp5AnJ4M5fqW6bGHSgYkw3KNf4iHa1qfHhdSd3jtERC4wroJci6TPLUFY4KZiv",
  "key5": "43bC5ZiGAJ62r4AkW2BhovaEPr97iD55D6SpZPgWYg6BzaAJ9r7hPhu1YNSqns4NSBPTUYgB29ovAt21C4ZDQhLF",
  "key6": "5smXyqWQ9bHapbNLPRKL13iKEtSucTChtQWotu44MNh2fPrjCevsMm1mkR9Dt8UjBLHzVh5Lhf9xqzggZojMqA13",
  "key7": "CKfsxxxzSBL4tpqeK4L1swn9LGKs3Gat1kvDxBcdcgfLhad9444AgMDi5mN63o24wWtC7wLHacredm9qgcJbHt3",
  "key8": "3RXvBXpCKn7TLa5notstoRS2abUpCm2p9k41J5yx3YSFgHVF3RzdGiBsAi3Y1TVvJRDcZ8GuK5cWkTK1kyuVp4Ux",
  "key9": "4FsYHTfEHxV53zrkKi851uBCpZLTnwiuZts2eMhv7bvcw329Gb4yiCWUbzApfwiL3tavjPYn2EuX4cdc4Rg4t7yD",
  "key10": "2cYy5rQ33EF9ZW3oiuaoAkXrPrS7qubeMk2qJojbdhszKSgFsQ6cDiYXeUwwBC8LG5PRB3a35LgRqdkyXjZoUjFf",
  "key11": "3C7UjwBJLGuvGDCc1gk42DN79obUsLY4yzWUTSNiAXwCwgYmM5urbXKX1BH9ZkgG3LVvWdc8Eerf3ngQDCX5gp13",
  "key12": "2hwhhBoQie39KpyMaA9FJ4DGfCk4FfXyUsrFgUnDpUDF1FNKySZPAZsNGL9xvMCicWDmCJoofgdvmHmKvDsXDknb",
  "key13": "5c8MGvr9VjqYNXYZMuKajCyLi5d84FEEVU2fKXsZ4okLF1QcWbvM3RC6euAMH84ZhF9YkocXJmvbKq5YFrn3rEay",
  "key14": "37kSP3jC4ucBPTa4JFAe9SLH5sKuZg99dDAprStFnyhrQ689nqxdLzbrRWQfrFMhFM2yL9wKMP8NHvHcm9knACCV",
  "key15": "5VmgtpSz114z4MF5gHpChHZduE35u5DYxFiFS7qW9U9Qx3JQViUMMNaW9dhwN7wAu9epmKse2jS6i4MiDop9ox3R",
  "key16": "5rHkeLqR3pxpQBS3VVu5xcm3x4V5it2sB6YoHNb1hJZwf2boZXK1hi35zeYFj1t2X2jbYDcwANtJo6gv5bZcm278",
  "key17": "3N6sCe3xypxjmFu8hQSFyrceZjiFQad5hSY4A84Jet2NSHbyoFczJjFBXHkqSYPFHw5GLQjNqWh4aBD5PqGPMcZE",
  "key18": "4K8qgXGVkGmniBhjaHA9NKKzAjZMNwLcWEUiywqaXaB1r5iGMeGLWWnUN1bm1UH3L3ySdZeAQxPaNAzp4zryLtRr",
  "key19": "4HauECuKYpWpSHtoTUApuDbbsrbjP5PtzzsMq6paHUpcVGvgJ165jYVrPSgMdLXdMy9dzd2mgPrU8XHAf9ymeaM1",
  "key20": "3EmAFc5bNHDfdyeTP9xWMn5TBa7G3ABEeDDQWQ4e4juKWBbqqXKwnrNECgtKxm6wZHYAgLgRhSxD63Hj91rnYMCL",
  "key21": "2ADayCTFy7gpX6pk2oEvGhDkFZnfQyMcB9b8gDYbpaoRUkt6H1jnMdek66eSD5goW56tQppEERE9pkCBUugn8QW4",
  "key22": "5ELoFFgcRFQy6q88jmUptu8w8DgsL8q2YwnpFVrE9TYKKcuvYXjorUoHNE9YtTJbc2QiVHDRR3QSEBbia6K3bWNL",
  "key23": "1CmdPcUXABPajKPo8AkQCmqmKJrifGzn8pFvXvJncXgnfFiqxRWPaSMKskMAvc1eWwKjVoUN44WpQVEk7hFXfSf",
  "key24": "7kN9dK7tL7fmmesnp2QQfp6Bzd6EYhzzYuWF9NKT3XqvbnuNdtbuhSSGX9XX7GZSkbtgPrhVPA5tZBA22JBoELg",
  "key25": "3i7a5DANvBaV2ufygBQmJiC9HnyjYnDFJbb7zfVyNpxRaTQ4QYXSDpe5BevurQ2jAkJfahcjhmR3ExDJNsE3N8gU",
  "key26": "RyqbrkBPX43vyQM3f19t1rrATeyHS8LmtcCBCPGH7yJzmN5Yiw267W6dnhRgpjTHAc4GrYUrsmAvfMkVRYKCnxM",
  "key27": "58xjgEPgKuD1rto87bnk5gVQrXvBGWauZNvKoKDCPWAAEFUx87GxJSQtKMcXAq42hAaXbN36v8hZvBkNwnXF3gck",
  "key28": "4grGms4v9jeFuP4JqcDsRJj2Sn2gMFkHd5EVrEqgwiDChR6PDrsVh2hktW4CrYGDbgNimQhNadHVNdeoa68Nrq6g",
  "key29": "2FvH8YKe6Jyf9yrQwCXejxusPxnou1iUV4jqQmT1t346gaFV5eqz2EHcVfmA3uKQT5LLiEBJ9ZamvoEnoSBqvvDj",
  "key30": "4PMeoDZ79UXnT6hEjsLAcGmW7E8crhg5Txh9Gn8paLhvwVQH8ZGpLtfX2P2ygRDDhJeYpM6FEJC3AScpD9LfeoMx",
  "key31": "57q8p9wLiSzNS4esaWM3gvoSf6pu3DmXpiF7nN3t6y9eV79EgjMiJky37q6tp73w5VuDWTRomsqwD8Fu5rRD7yWc",
  "key32": "3fkv8wA4bMt7gymwv5xKxzHhDXXNrY7PTt6gevjN9TKdvjfRm2CrGRqKp1PcdfJYbf6A1jBEVzf8L1nyguevqaLz",
  "key33": "264NMC35iARpAsK7gUwCS96w6RrFP4XJeWmrxr4bfbPg1Tq3MWLL2wAcR9k4bcHyqfGyhJXpGpD3GD2YC8dh7xr7",
  "key34": "5114MzkQ39EbBncA7evwH9Nq7W7MTeug2Xv71pS6miPQ5qcZjMnEEdvUtsDjvWdic5rRCt9kkYUYJVZhLHgsXY9R",
  "key35": "35yBAEsUD92K4zmDzeejMZGnDY656iWUv3kJQLJtDQw8re5H91Hk56eSLfybCVbs8nM7gBQwfEEmTbVLQzb5riXL",
  "key36": "3rMYBrcfusREL5McPJS1x8DHT1yYWsiR9qmg93b2zFQxX6bPYeUeEj5o9J9y9tT1tGCT45oBQ16FLp6t7fWnTYY7",
  "key37": "2qri41eEz5ykNsAVdKVRHQ67jmQotimWxpVmNcbv2VrgsTgTyad1wya8Fsri8qgV4ajNLgV4cPF4iYRvV1NQqo7f",
  "key38": "2xBRJGt55dYfqaFM76FKAHPtchVdFVYj84fR5QHnVtVMhhN7rVvzKNLpX7kjSsKESnp98VeEZXhYBh1NGN27Bwi9",
  "key39": "3ye8kNpSK9LTJBs2tKMK8oG7KTEqzYFvs28VxpVg2Qv1hrtyhB755t4eXgo6Tj7ZUqT3XrqBjWyGFM8LFGwZxV34",
  "key40": "39fEMGssT7te7nbsUnENRNLgQ2xwaddaDekf6fvbReZdeJ99VAbRqviQC4dgFvNmFdmsEYFZVQfffnpGz5GrVnFm",
  "key41": "2uyDxeg2g4GxCRmbEx9tvg7niiu9wGg2SsPb8A4wpvxx6cZyrBh6zBK5DvdyE1CRGTfoK52oRYZiwMyURUJmKPEZ",
  "key42": "5x8wRrEdUEEtpPM6yVnPNRBhufATB9QgrAbHBnGSBaVbn3pvWDmkojhDM7LLJuw28YeUna6CLWukk7tHqLDLwEfm"
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
