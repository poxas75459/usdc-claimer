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
    "5ubpmsWxEjE7sSwkyZevEuLqnSKcUFHcMTVHhBDqrrMagpBK29qnJsavXqFsNP5245uje3JymjuN1FaS5C2z2ph6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P9KuCtVsaHGie8qnsdYHnHg5Nkh5fck2eRyg9HxqUSLxDnVCtXuP4AudMZ4YKwqohkr2H3LTc6NyrFvg37Wz4JC",
  "key1": "4JbGLQDUasTXb1LwYga4k3HzZgLzbBU6s1HSUcxkLa1wUwXJzfE1WPckgrSXkUBgaoJg5PYWXYCbyqevR2XYoZNz",
  "key2": "3xCE5JSLjW4D8k3zUZ6bHddY3kGZZeZdh1FYYtDpeZT8tUvBhBgvi9F2iQC5qN3EbnHxXCbDii6Z9YXwjK8yFRw4",
  "key3": "2Z9Hyh71UPigNhFWwX3QQu649xpP2ESQgfB5pPmYprWcLotDw6tMQCbFaE3JvUW5Pyn75UdKTCvAGgoU9aLm3ebo",
  "key4": "65dWkpcrDb3oz5bUh4MKYmmggeVNaRuTh9dpivg1k8Fjw9gRnygEYnBdiRm9ZnsHMEAiydyuByNM73KL4sdA6Kur",
  "key5": "XJPAVGsfgT5vY9K6fPqeMRhCHfrUWRYECNSiVHWJYrMGs9959NQWHf9NDoPnuXdABoxPcNPF1QR278uc3xeBNuV",
  "key6": "3H4cxcpR72NtSthQWq6qJL8HWMfZKN6LyHhanwSuZ3GVeiQkANwTdchQWQdG6uEpJ1GKjQeFR8ofemS35EKmSFUF",
  "key7": "3tzH9eGVAQqcnveuGz93eJKf7hrcdZMZ6P8pWmfUGg3KvU5MqkfAL4jpBTsWhRYnLGyYEnRM5ARaoAgNtBjn9x8o",
  "key8": "uSrmi5iihmVJg5jYSf8xxKMW1DU1g8cTxVdTPFi4DTZ8myfGngtTWQ35g8BJyQWThuV54hMSFpQGQgLpKqrUUnq",
  "key9": "3ebLQnpDTeN5KtnN4n113CbYR4sxh1SCGJYjZPiuWFnEJEJTV6kXtC7SXpPwU789PvSxT2mcqm16Y5jmfE99rzYt",
  "key10": "3a85A54C8n4MZxmNyXAB3h1Bmg9coeHNigYvsuVoBFKVUUT3tnmnkJTzUn56gJ9yc8uKkmAZbCsEhYXVYkrVKoJk",
  "key11": "43CLghABhHz2uit3VsqQkeM2HkYgS3esvbLia1bBDkMJSNYyGDUgpDyRJSwdN6kjQSVJ34mG9LNYucSChoJNsNHP",
  "key12": "2JW8AKQREMTVobRTxESB8ozYY3qWGsGx1mW7UQJ8dT1QAwynoUsjQd1CPTbid9o1hHNbwEtgZAjYEn6b7a1eXeuJ",
  "key13": "3ABYJmbPfJE7HfK2mTTtWEAaUiEoc8jEvFY4CnMmhWY7843TvrCXJY88UHSFTFVdoBZeFRaEBfMFZWdh2iqNn9xM",
  "key14": "36E77gsSyXpjX9icigJGJb7sFQznP2WUG6UbaiW1gcmViui34cD2s9j91V4WctGrsgFGikAnZE7YrwfhhUbJ6op3",
  "key15": "4yM4aNQod4T1RDzECyE2CEQGJ2ZVKjR6ADzkGXjG2KgPL6j2oKu2SkLknpPNzoWApVTJfhwCDSuSNEy79mQKrEr4",
  "key16": "3GBTbEXPXGALCMwvRMaXUK7ASnujLpdatedU2u4eTu4FWfddiJnBCnKjganRqq8VBTJW63vBGYLwNeL4Q3MPhqYG",
  "key17": "65ZN4yLAJA4QEMXJrtyU7xMzVEh1yk49JQZVD55giFygF2iC3MqFho9wYpNpeZtFKF6NhrCVjs8pr8hgwHio5WFA",
  "key18": "511tfUHYq54WzLgU8zSVmUy9cyg3bzSXcGyMjLh6NgWWfgL18E5B6vyPddMamhv4Bfhj76WffVsw2NNRKx9FUb5V",
  "key19": "QUQZv7xHcoAzXGZNqAjfdSgitejahmgwCnjJPDqWyodXsF9PpXHwNGevxzSNo6saAShJ2761G863Qa912w7U7Vz",
  "key20": "2gaWYjWH4iQ1Ad5tDZvcZrq2E4bGM5RfKSinMsrEnLWYdd1bkfFXcy1L84bJvZSXXdzF4jSBuWN3XTWQ2FL34smr",
  "key21": "67CpvTaP4WqtZD93it3H7MMkKYNHbidjtCx8G8jFwv9FumCtA5aMMzCgBDBg8pRk1uesHpD1VfVXUSUBEdC2gXGD",
  "key22": "WtZYys9p6mxpqb5UB5e4i8uvjfmRHC7RRKPYCuqfVSidjTBCkoM7kPh4AzzzFG132KxjbAakjp5kbRDwu2dy8gS",
  "key23": "46x3R3HYYZ2mh6TsEbP4c9pUFKNBJEvYinQtKNgXjnoV7TDB1jzo4p4Ubxv7DWw8xN3PDYx5qzanChHwY49bMdSB",
  "key24": "PQoDUzL4bmVTkk9oNYJESkghtVWfzsgUKq37PdT8TSpsdf5FSxMjo5V9qijEVhj5dLXfPuNVAEExAHH34g1Ljhe",
  "key25": "2EdwWZ4GAZtDXGqYkHg2q49p5tAGKCFtHD7mQCM77zHq895nbNwRuQN7nQoVfTySLye298CKRHxwJQ4nCRdwt5CK",
  "key26": "5o3RY24szhodrkgi7nc5eKkq5eVpF8z2hdnwJQXcdATPBg13xEocRbBQ4A8DgXmDeNzodg91AQmwTJegnkSFwxWv",
  "key27": "5c7D156iazCSiTqR48ajB7pemDbxjcLnfHtUhyfTBw16DsyGPsSFTZFyEU3ee2tnAmKxVqgzmLoc4DZm2XqQVFuh",
  "key28": "Bz9y3KG6X1kaQ95D4pdkAbHvgswryCmGHGQnMvTfmWQLaAQGuYkDVedmr1oHuLEmvbn3opQRnk5xKK2EoSnmhha",
  "key29": "pkaSv4Cz69eRQE7C2f6xpW87fohLmbkfYDDYp8uefwnUZtZaFR5QbKe2s97Hc21o1pny15YKpj3WSih1QU4NtSj",
  "key30": "4ux1Ew6gaqC6mRtrhHW1b1Dch9S6L72o9jProaEFGnZXH1ARj9VHmJaXzZ1ympC8YrRKqKVLUE9jtexHX99tEoir",
  "key31": "3u53gAwUbbpbkQVvJU5eyEALE2yn7Brdi2hX2fx6vksBb5Hpdr5KxkGrVkQxEcr8o6ka29RnRPNoBPA1GB8Ugyep",
  "key32": "4hHAKY1Z9QP8Qufevz2vxwyjHHZfPbJw3Mgp4jG2juyMhtTgcyFztNtPWyQ414dvqYqsdyfs3RtweVh12t77QNbw",
  "key33": "3G6CkGCsKwMTnrJJJgWgKyMfbZYd12nHoZv6YLhBfPCsGCCfzok3rVhQWExmovXDYhAynwMYLT5QCDVg5Tf7k5KW",
  "key34": "5TccyeKWKRZMzkktf3DM373zvzeMv5ZVWrwzCem2mW1vgAadgGiHeM2DwYteiyshaeMjV5wtdP9wE3E872a8KLto",
  "key35": "4pCnNFY7Xt6AjiAbVR93rxHXky24sNWfcHuLdeQzFYYwZS9YziZiPtGZLA3SzZ6D32ufNiGbBmoF2gwQ8xoUiPuz",
  "key36": "42VWWb69xEbCMY1NeKaWk9GG4hbZc4xXwaMDVhfDC3AcvbMFxWPkf5FmPSzd9XYLzAxxxtakbZFd7CW27JMZ8FBi",
  "key37": "EfcWh2tAEpiY9ETyKnapKwhTjcxA5wKknBjKo85angTFpa6o3zVFmy84L3BwufY1958XS1g98Nz6C6G2GLMcRV5",
  "key38": "3GEHbRwfUneNdCoMLupAWKvKzay9hiveGSgZuBA2si62E63kuUHD24V2yitq8puMgVpNksE5W1yQYKbezF4JkPmL",
  "key39": "3qKrg41x73tfF4nyeczPHCw6R35vBBEiV64bhf7KQFnxNjG22dP4TETCPqfNnzhKmVQLsrJLGwMsm9xesmLjNHqF",
  "key40": "3Yz3FFBdbozQM4V131SQmqE1U2Fki9gHqoRFA9q6EZow31FBbX69dkcuNrUz53mAUWwycg25M4Mia8QD65mt83aS",
  "key41": "2ntmkmfjtdCqFCFY2pbWNSHtYzaZ7JchoHr9DzCLKshF23KfLS94PoYk3PhHPD4kekGZQyeydQQ2L8E8UwtDwGg",
  "key42": "VkVHa4REYGb9r4tSofAz3LeuydPafedfaogcTZv3SpbLkMD99EwKXyscRKNaRoKe8mgYubU1oyZDweZFTMK8Bi2",
  "key43": "57zaBVneGARiwpNtWxUVs3uNMpRMFLf682ZYBDc9FCBj4ukyW1WRBQ9N1kRAvfsWwX3UfKvYFGVkB4sdG4wUHzCz",
  "key44": "37Bp8LQHChALsjMWhhGn1gtiixFanrAZukdJg6vH9affjc1ygMmmQPfss4m1ukiM42SN4dAyFZEaP6gh3X7PcaZi",
  "key45": "2iNgkyp7ebH6zdw9FDFPjDL1H1q8SbxVkDD5yz9hq8UvpCgkmrbxFA9wZZie5KsiZwaTDTQ5e47Z1crekRjAXwcA",
  "key46": "u5fPcE6Wxy6axLbhLkTHPjgTerE2UoA6moX2idF9D5TWuCK4AoW2XwqCefXHU6XHN9pVVhQVy1BV2yeW5RnmGCP",
  "key47": "4epcqrvMLWqkHQHCNZF4ZeC7gmjvcShoARfeWer3bPdNFikDoWBSsBm4RVctPYMxMyucGEPUfSNBsnHcAn8ENTov",
  "key48": "fqTdRhzd8P5xxPWqJ3uTUFWELKCNL1atMKze4HrJCzZjMrwMh8XUMsVPefkczknFgQXLPYTtdQd1HX5EJPRU8y6",
  "key49": "62Hsy18K8UetjWwMK2dGvbpiGwkokNQFrSKc64tZeenjkxEu5H2Zh6gRZKpMh4wzbTXTy7BcMEnYuY6Rd9ENcDGV"
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
