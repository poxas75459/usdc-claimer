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
    "ZNB3uqf9tcsHosSrfmw3Wmp3SM3mZaqdRKNXqM7Hd427Xa5D5iVHr8WEu86M4WFSWjmFbRLBAFXCJGvotoePeED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PN7YsUeowc1si4Q6Eziw8nX7a7oi1a4mjfAPZEiL1MfkKNRtFuefn2JrFkdEARdHRTb6HokE9ReVzWKEyfK7EY5",
  "key1": "4GBwscEgay74Vevn4RTyCyYaKzM6gGAX4jyApe4UzuYj8ND93GvwypWQDzNRTDxYdJUP7wW8842GJUYVK4i39WAb",
  "key2": "2oaBEwRLED7iUGgjmXUCs9VbJwqn3bzFsGCjj2W4n45zCyQfZqixAELF2DhKAXwNtZNbFD86xEdUNWTMUKjDjqPu",
  "key3": "46L9w3VWfU3mwyaDqE2XBsptKCMrgnMfieuqM25smrrtpPqS6NFjwte6thbRADsmV8bZWWKpKUiaWpoWzTD8d4xe",
  "key4": "5hcY7DAoygE4mzjCkkNcSYZ8pSuvXBY1bwcxThC63w85HZ11NGSzq7eEZnS5Fc5ZGgadKMWk1g4KDvLUJ3do28x7",
  "key5": "3FJEFfBJDLeX6Tiqi4bf4ADGycuBjcowyrapXAyWLoJg1QeNCjPUJ8q3WiXziMmcdvtHt1xGH9iotDBSJEZEvKVG",
  "key6": "ecyvHVgTPU3tcksfHupjhoYCVA5uFsyb93GAm8zNifDLB3pqq3TueDtt4gKbYMH5Py7UJbbGjpk1PNYF8v3h5Ae",
  "key7": "2Jc4ffvi84mwbRyHKXUfNdaRZq88FnXqWzU9xsH5TMRK8vBp2KVnNYjLdME51b25QBr5Hb2DBfhgZrcwB9aPxsSn",
  "key8": "3DwHnTK8oHLX78kEmuEmUz628ospM48wF7q9J1vYddMbpaqoVk4uPH3N6jGNmKnzo9YdpW65uxWS7QzxV6gBZNTM",
  "key9": "2My9eak6vtzG9KpRsa2fjtW1f5MpE5NK32XHWPBGBbLiH3wFVQrcsEziFdwAKbaYuAFZMCMBR4Dj9QNCPT9EiJhy",
  "key10": "2U3hYsp8ACbJSinJGG6MVYcS2La2SMHamAa7Gj2WcrKdu8q6KFuM8MRxs3sh6ZdF1jo93uEkLAdq2FNRRFScZDnQ",
  "key11": "35KfktmTZpxbYV3osxhbs4Krp6HNYXNj2tGqteqrU1muwKXdbTBFKCsVBL7Y6bXSSqbK8LVP9BgsVJRh1dsXPtjJ",
  "key12": "hazVX5jpn4fcD1uhb5ZRaHZdkHx2s6CAsDjABTbw9je916asbSSKCMHNureNgxFnUfPrPsod1Tips1KM5zo2BDB",
  "key13": "36a9dsgBYMFVuQ6m8iD3krWYKEDi6rSxVHVctnEpNeVxv62fizfZF6UxMdnYq9NhDGoJj7AcTBzopP2vBYsYnxci",
  "key14": "feYR3mAZ2qvjacB95K9Vk13WvLuhTHbs8BJSq6LHuGqseay6eFRhe3DnjDLLkUKGTQQQ4qv6ntTsPPXnjNBf92t",
  "key15": "3VkuVGiYQF941qtiNT4tCpigq6KKySqZbo1chPmizJSiTyDp96eQoU8wkvT39JnVj9Tw47bb5afy674z2C9PCLiX",
  "key16": "3s5C4muZxjPk8WS8dpJkjCFvD9Y2U72TEFjyincaZ3KXVfY2WPFi6Nwca1qVrugX3THPGDNeJophyYK4e2Mu9xWM",
  "key17": "wpFh7mHh6PAmZw4UZZF6NW85L6AvS2FCD1qFL6VmkFB8LTPQgeVRKYN176xx92WsZboydKSeCyL9fkbZ5Tqh6KQ",
  "key18": "4CrZpY4iFBHATS9V4cdk52njF4hXA25B9dn1qNhXdXDKSp94rm5xUFn2hkG5Z5uJrZQmEgejodHjRHuENkw9Bwop",
  "key19": "2S8fPZ4qanoEECaF8muG5HonxzNoqcrJrPbe33MwxppxWheGsPz4LocBfXq5Gmd9c1duREFTUpi1YQrvJ41Rv9Re",
  "key20": "3X2CiZpM28axYqJSvKevi1rspge4ovZedm9ABNSAKxxZ3fNVMZQyBk2r73W5g6vD6HrEnPumocJ1692SfL4VoFLn",
  "key21": "4nvDPmv4wzrYMft1WVrQoBhokZ2ZAJD8ysXEtvf9GyFB5WH7ttpw8qvdMDH6XsHonkWf5YH99f4qShscvd6DwRAW",
  "key22": "35Sk7LrAzxSuGkUrkfnfiUEwpca98jx5g4kgUBLZLHFT5XuyrRZoNJnL97xMo97d1GQGai4KU8FyyhTWBaxPR5DM",
  "key23": "3FmEPfXAFcqZg8zvEvD9LWFx1ZaL2tARdzyeobPgikKu3i25BZNCNeVNixaf3HRnPytrpdF9xQbsUrg2tbYKgSDB",
  "key24": "2QCt2Vmit6LGa5maTcZtktuXNXjqfzBgwAKiDF8apieJNS7xuRUsEGujK43c48rtdQ3CWGaRf297Z46jfPiSJJu",
  "key25": "5n5jXtUy8nuMJqFExrkGCpVBRjUezRRcy4iHhJfYas8P3BjoUhbDDcbgu7xUePCQhxwNHKeAivFMbCq4ZszkciSX",
  "key26": "tCYQBjCNGSpCajgBsvQ2daSjG4e8Fm9Xnu5Ym6bQiGTzSx85n2PpXSZUxQPLBDkknUs9ChAzJEnA32fyyGAC4QW",
  "key27": "3ob8rPJfj7j6TpwhqwhMMmaxpwmXXNpmVPcKdb5y5EkQo3wKYeptRfK4JxaXCe4GkroShNoJasRkAg7RoEUFZhhu",
  "key28": "EAMurrsm22DUmbi5XdATJwJ6jCJG2pfoKpr7Ru9sDvRfSQut4pzWGBtEaoYpHF9EKk3MjYvWPQCaVzWodP6Ht6o",
  "key29": "4L2SC4P9BhayESKDHiAddktog219ecQqXsv4ZuSocmrawB4byPGC3gfMaTKcnTmAZZmL3UYYYNmhqtPhd4WAnTWd",
  "key30": "4vQs5NU31WPiW4PCGKGPdoMeGkKr3Vd2AQPHPjZXPxSU6FSgYyWjsXWvrqkWjXHj6cLWxN5ix7krqwLWmHMSs3Fp",
  "key31": "2YsuFrDDbigWvt3CNW178bVNH5o2WugpFfogCcPGaaenG7RjoMQXrVoqotgcfSYYGPA82SEts7FKxEyLqMtEcvAN",
  "key32": "4MR4oxBgS6BQ4bdBjQ5YrRbu449nAoFoZTpmEsrvjwbR3M2BumfyyRtwu2vRYZJHWz5b8WvJbPRLAY5DfgBz5cvJ",
  "key33": "4tG8XNUhuFR5eYqRavq441vXhGbBDZ1x9P8QVPo9xdnWawvtm8C1feVFNgXVZQRSDJzNKyvJ1R5QxG7TU6u6TWQk",
  "key34": "54m1u2oDo8f3TGNibQZU9FBE5a7cuHSGV2xQqKGVgd2KTd2Pj3yp11vAFM2JtdXYZrmH6AKNPFqhqhNvZem51YSJ",
  "key35": "4bi1dyHDQRdUFErjcEaiGvPNCK56cBKQ2TGG1AYu9yDjN9ZdNN5KjDcrfChBjt8oHtA61PSwBAYivicN2yK6WhUT"
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
