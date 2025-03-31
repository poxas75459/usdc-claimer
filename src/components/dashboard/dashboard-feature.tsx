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
    "yVMvtNcsD4pYVroZm31wrmc2J8s6nho3nuUjEpQyuZr2HQHhxd5cEDBf2tDL9nJG3B87pEyKykHKQM7tu1bHkAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCDkR7je92ZXAFaqCRb2waRt62rL1RCYQ9WmXK7n6FiiepXQD1WubFJqyJzUqgfSwNgbNDJ4LLwoetHNTZ6hhvU",
  "key1": "54WaHeivsL1YNvTdFGtUu7Z72UmGQ3YsATf9PxWvb1VpFjQvvMy6oNFdkRcs8yd7pZV1JDM5vC66x6yqmUnTZSGW",
  "key2": "51dvzENSPK7RrSfoxMY5Ha4DTZKcBRdMfAJgDXpovuUiwiyPzYnRumUhQbXxD6J2fuN5cHmCeWGnNx551voZr1dB",
  "key3": "3PkBnCMCCMYiH86tSG9WB1K8x9p9zgyUUj5zzNkuYVvAMm3bWgjUdf1zDxr7f3AWgey11mJ5T2tP2wofQWvhn1WX",
  "key4": "49vvs9Tm7WRAnigfAFDNPWSq4DJizSseETeQyBb3PQp8uMq3VFTcQCQY1RLGEMPk4W87tMENMA7ZH6ZWAw8UwT23",
  "key5": "48xx9x4hVXYprJCZ49EQCiLgoiGYdH229PdaoEzF2STMivZnMqaxPryQUcUwQ3VeydrEAfNdbdSgQve9d1RDEAvS",
  "key6": "3i6husmRwfm1JSYDYGKnsGnRCbnaaFYURHjSPBT6DQ7yxpHJ7E6x21ZmRRxKQ3NyhtbvNJujJpFVpPdPvXFGED7P",
  "key7": "5CEDLGLvQrB7WZrcUhkkYesgCHL9nLhQ5hgY7SYWd4EWxgNkqi4vNxotAy59eiSBxLgFhxVCJpNNqG8Shp682ATs",
  "key8": "5biqm7SQcGKJYfNMAwvZ1PHP7u8RsYUKfgqbxwa62B5JTVx5Wb9pCj5V5LpD2RwXW6MPb6AQ38AL6KswxgQonUhM",
  "key9": "kjHQKr9jSpWV53y2avFq3MdK65grx42s6QFtQ8hg25Kx8ctH5zwN4sC1Nd43tTKiVtgXgkEFi3j5pL7pTbkD1H8",
  "key10": "nSXhTyG2phGEjcA1r9JTqGn7JwFaW92KUX6vhjBefsj6PVCatBKqF5dYPZAcNkPwfac4uMdKscCv46KrCSidRH3",
  "key11": "2qEN3HHPjMyH9qMqSotrbKTJ6aqmCiyWrL5uFEo2yhdqwxgCfjTDMVkYo3mV8jRiYnNCFFnzEywQ1GrMZCbdfqZ5",
  "key12": "5MucBtkA6FEGECXkXhZc9LPWTMZWFxr4wejxmSLYJo8dfHNie3hMAfpMd9iJoE5n3xiuVioHkWEq78xr8F92Js3S",
  "key13": "3ZRL4pAt8Y2NJyHtB15W9ckYvC2Q2K97REgPEqH8Jrx3PW3mWn5h3ywF2oX7q359Gvh7aGUpKZCveWWUpXd14yp3",
  "key14": "5D4QpWmLJBXoFxFN8c7XYRY3xmiHwnKAHywHFW7TwVLcdeJtPzdPjVZDBndigReveoaSJJ4pR7QVjfQHaFjoAKcT",
  "key15": "2fyK46YAXi3Ut46cLaEerzUBeL4RzcHCnyDqcqsU6oHemUNVqaEdv9pU4X3U3sBruT8iG57AKcG6J3dewuBVAe5u",
  "key16": "3tgrBEJ7ipzyXAd9gjCg7irenZZoDGerHqskp2sUGaZBfaCbGQ7kJxM2LXuWMWaoSbJUPzvJex7u4nXNGn6XCPn2",
  "key17": "63h1xZC5zP8WUZPZm4MitrYAX5mYHPoETNckanGvFL6ii1TwxYtGPPYNvKGKNPyhGyt9QoJHG5MtyFdfGDmiqmWc",
  "key18": "4j4b38QsBzd2g4hPB6E244Xa4KzYkW3ALp3Wk2ZHdzsrUaLihY5Pw7u6vmEkqjpKGdhkmoxJLXS57q8EeP5dZHpE",
  "key19": "46DnvHABM82DcgLsdAic9tYjqFiJXqCqoupGcZFEvuQKTyKoJNz9nRmJ7cf8FSqbFRukQYrmqYt51FCynqz3gs3D",
  "key20": "2RWJhSqTQvriVDBsUFEp2EgqkWRVrczpuWYpJowM2v58dv77g89q7ryoBbRAXgLoohr3P5DTTeFnTxKLkXut7Nxv",
  "key21": "5wJwSMnjXzFgMENCPHqrp8X6GbzPdGFXPUbfgUjFe6GpbcYWHUdCnMRNAjokNBYwZz2WGkypq4Lk2YXJ19kD9grY",
  "key22": "5ZbahJz9k34EbtGs2KAiGXeuuS35zVQ14CtvCq7ipPWfPdfFrSoZdcacWxCxJX8kojGwPg36w1Ny5NB5tG7rBK9t",
  "key23": "65hbxVNa4AXv8sNJkPgfZXjZ4rP76AF1mupYSYvJmw6FXqWAxYBFzA8qdyp8uMCve3NZ5iyhLhcxST37EEsAfoLr",
  "key24": "AUcJqkToTWRfHbE7wFGTVSwXsceiXKwnE7we9U5V9MET12km4UzoA35j8b962JkmaUv6wQrd3vDPZRmsrs3Ei2z",
  "key25": "34uG93vjKRaM5eb3eGYaEyB7CA7waz9dSYnLVeFq5ymcnr6eUiGZU28iKnAZeK7zc9PLwfvWQf3uREqLgBbwo6vP",
  "key26": "4UWCizQVporKNep4V4BQ84B1qbRmWuHfaZg9DcNC1PW23LbDJsdYtVCFZp76egW1dUg8otQw8EBGG6Qw87uELBJv",
  "key27": "mzetd4HUKJdoE3jfV9mCXUvvXXmVSsJJMfCcHiwJpnsqw6GqquUmx3N9xCWJTex5YQL3a8hFyQZbYmF3JGKstvi",
  "key28": "3jP3hsKHdZm9SMsC59sux1vXoRySoTVixkfvtPGunh1VugmvEuFfAT6uVeopaNPruwMA28uZUeyXyLD7Dd6rkEVF",
  "key29": "3FL18tGkfwxVfoneN35kndQkzPQG3eYEjuLEsvuygfyVLB3gEC5gHEfxQP3RRR3Gx9rHtmunJ3DjKAJT8mMfJQUN",
  "key30": "4TZro5boDEiJ8gCAcdA1kkA2vuCH9QZj49SMzgbnpany6G99f3Uz26dDFrNLnLjGxe9yuJ9TgreYfdQiqXATJN2r",
  "key31": "4YkpGn1ny1vE5tW9AkdQrABaEoos2CgKtJDvrcF3K98fesRreZaEPYQX6Hgt67dWuiSEJvfnXDcyvpbkLK8WnYCN",
  "key32": "3hGfrR38ksfMx2sjX51aitQ2uw9vtn8LFK1hY52DZM7KfeF5Em2zTtxjQAZ5Xt1mVXqN2kMU1RvC5XbFqYrmCQAd",
  "key33": "43MbvxJd9MyJSHXgCtAiimxg14hz45i9eYCZGz92SzFZwXH6gayWRotFZ6tZrZvp5eg1vRekBjhtM7S8puCkAivb",
  "key34": "PPj6vene4V7yu27QaHt2EpuJDi629R5tZbw4HXMoZZwA2JGUinYzBjPQhnSyZVev1sGUQAxsHzszE9VtFKHTMGE",
  "key35": "5ZT7whtftourjM4RRiB2JYoorNCG9zPo57ahhZjgURaKByVdZT7hxQdWcfPF45Bn6M4L7ADq4SQLtv8CcY7cjj4q",
  "key36": "2p17JQAAGU16qQcLWdhCUGtjN5d7T2qXjoCRisNEySfoUQ1j33B1PDtAdxCjkp859dStFqd8roMhjmGnxKJjN8p9",
  "key37": "52AP2EFQAaXRbcKi7gqfQHiURg44sEGogCTZfs4PHAD721SykJVDyUerRpX1otxj3iVYqVMrAtKDsYSqgQuweUmW",
  "key38": "3sACmt9nwxorGPUrofEm2n2mQkCKDV1neEeDqe79EH1mwFsmKVV1BTGovTURjBYbMuzYgx12ohuAY2SDFrpBhfMw",
  "key39": "2iorv2C4A24Sy23TdWWu4eYipuo2tCzzJjpfdERbzoPMj5VGUYSvYq5ygVBmGaUd5KswTaF1iotvY5SprpAFHj6g",
  "key40": "2inbdgKnJRvt6DzpAJbUm7Hy7yGZfLijxssEmFGRmSmrrvnr5oruvvSM5uyWxDNBKPYVnQT8pxMj9Gxqk6CvY51e",
  "key41": "4deQ82TbxzPbTzjPNng4pzxouWDqSZzry4HqXFAQBUpCFBKruZ5E5g9LT3iypcRN97qwRn5UYypKP6Do4iA3wbHR",
  "key42": "4qN7dxYW1gaxVHm8ZuMKZ7YQvtA7if7VfxQD93xCms6nMPp9FGhhYRAMUuGRDuh3UrbCT1REzPBjqzajaXPJR9vm",
  "key43": "5PeMNcqTbMrAxqTW8tktZEbjw78W4JJiU8b8hzaaYmiN6qoDVvrJTD14RxwC2tQHBjwrJkvMxc738JsbDhZDkJN7"
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
