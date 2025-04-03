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
    "4kMnUUQDor9hgLo8EJyXJUCHpeAYhZ4xAkjXZ7TSLg67GVs3fbMGuYBdZghFeZ2m5iMyZ3WUJaqUx2Rqm4QATnUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BNoCPNZAbXbzkqeYxgFA5JYiBSV7J9BTUepxEBF1X6d7eKGjbQyvLuFNnxVRWzfYE1HBbTevAXUN6UhcXbXuFVG",
  "key1": "4UdSVE5aXAVTQcu26f67Nk7amLvZ3LXLnGWgAf6Xi5aJPGJdtSag3DkTcEZMzW9T5suJCCjWhKrAvRdWyju9G3o7",
  "key2": "5sPrTK5gas2yfg4ptgeYye35qLARJvtYMWBfzFX9wyxxAFCC7iT6d9CdMM15oS7UXwkEqqdVUAPwLcrMVsmmE4ft",
  "key3": "22GcJk5ozrKy7fYuDSyYNd8JLfoXZMaVmqvvHPrKUgmtyuH2d94RETLCjSHGRCav5gFtdb3GLABnicVtGnFKjpsR",
  "key4": "4igrs5oMUNb18fLHs4ScaT689q8WaJdTavcVokXbgkWt315BgY7kE6sdbaNL7MTotECtps246obP7FYJQwQY15Jd",
  "key5": "2Cq1LF1XMs149HFxE19s5cXXsg1UjzyGe4hsg5qRjQ5nZhXvPozhHxyWMVXCcMXRprGY11iByAwJbxXgkQeHZASg",
  "key6": "4CucBFrSqCTM9zvBPqJxLS3sWADXF3sSVQD1PDBdw8nNQZt9aBMbNdFLak1i6JfVS9CxyVo11GMAAbU1njGSvNia",
  "key7": "3xR9v15rhbGeP3ZLRH1iDGwLhXsTe7knidE7xb2GM6RM6o2DQYovs3XPpqZV15suLwVMEpgTMoindnBsNCnHs3qx",
  "key8": "4dXDa1RnvPHKJwKLhZfGyKMhneDkmQLzfRpZ6RzDErNs9bRZ5fuhES93jkK5b4f8ykK8ZBaw5GVDrYpdgGxyNPjh",
  "key9": "4Pi5fvvt8pHAuswG1rAaQdGNHCk1iXtturisiPiEuSG6teJ4KZ9aHztN7GLWzvVV31DwGqQiHUX6ptoDnzQyyHkc",
  "key10": "4BjNDQp1t53qraHYoXBg8tCW7TjSyRua5Th87mNkMEjUdk9qkWVFgrAWexR6xFm9jzMBqEP1QmskLjiF3USEe5Hf",
  "key11": "2Wts8ArxRQoojqpjhEY4wp2FWNm56hydFGmw99nuvDfybzX1vL5edZyiWjcRhFtQDaoHJiiYmZnKpkqxa3cAdUNQ",
  "key12": "3k8swU1tceEPZY6VNBzpStKFoCdx6LxCukG3E8Qqd847xvbprX4n2pWBjuuzrk8m2rwdR6krtn52svCEjU814Dkx",
  "key13": "27rMaS5NPfXTjwAdLo6brZt5bYogMCMqMgASacVuW1qq6NreCbFuFYy6H2xTH9hBgLhenA9jCDvFCRTuWCK4Vcrp",
  "key14": "3XozKnSPB2ttPFimBn4RXKV2xGUai77GTabE9ehnoKZ2wf2A8SUxMNpCFKToYE1wveu1g3pc7Y12qd7gijD1NjsH",
  "key15": "5pq9ccD3mz2QPzqNKfXmogeD21REQAwbNeGs14h7inRfKhUc3QhHMwFxNJ9HEWnoejoidwtysRn7Skwa7VkXLKPt",
  "key16": "2W3yehYPUKef5pjmvnZbKCoiQ9K2WyUCqLyXpqnnvqrwmC1MvSdcB4tmp1x3iJ1ZqgG3gfWmYxEt92KvyXMG8vdq",
  "key17": "rGAq3Y8c4mbAe7TKP65exnUrAnP4w6UvFi84ZvUMLPJyhueqqGgcL2w3WdXZfgbugqbWmq5CJX9s359gU4YGwC7",
  "key18": "kSNQRsZe1DXQ3NuWoJxpCs2Q6raKpbx3eYEKTKMrzUR5mYoM6PJvZtxrNsKmZGhEktDmKSE5jgnELL5uvPNbgXi",
  "key19": "21JXBFemQkj2WVWLfNqowfTUTUHzSdirsbXuhyDkyX9JTb4Um6CkbjzXQUheaVyPB9FsxGDAi3srkx7L8hqKtzdj",
  "key20": "5JR5TEeagHRBsLE5u18eRwPdduG7FbPyHefArQ42JzpvBcE1PgSkVgV5t344LLx3kQ9hh2itRPeStcT34JYKMRct",
  "key21": "2mosLxpn9bTXRYi3YhXy2VKRHNDHwS4xk1FYGXtgcYh2uEvB6iJ67VnA7RocZgoeXNft3xybMRcJGexADoV3TCrG",
  "key22": "gDRLLhMM4bLyWdRqvNgLH8P3ukeE1nBmq8eQDhVEnWgwpEmaBreTdPwd8AMNPUnwuGEsc6VNTb4wKimayEHRdGQ",
  "key23": "7SRwyaQkaXxfWVC5PLDCCYkMq9gH2LFHpZDNLmEfrZJ9YoF1gXY54aZ17HaCr1oNb2EPbvwzoJPZZqyqrq67rjF",
  "key24": "2RFvFcsuEih8BHv2H9E8Z5FNnGzRWNKSstJuvQzpzoFuQ3WDRamhdMY9zi4HPXbtjXs6WSrXW4RiAUoaiLJnyiZp",
  "key25": "3oTGuZNFJHbtE1xhAwitUdwX11Qtmh4qSiYyXB87vufwQCRLX5Cy1PcR3WfWPR9exbboMVfR4oUxaRENfUcqxQ7A",
  "key26": "ASbd6YKDaGsi4Yi9okeDmzaHRVRTLozJMxjBCLAg1h7EsB97pV9KX7kH1i7y1dCWYk8LdeCkvGP9wnZgojg9hG6",
  "key27": "kwu9KRwrGgDeZz6eW5tWh3FBbuPQqxy1rYArbtUDijT5odqpu9dfcgN2hDTPbPoiCCTDdzpc46TMMauxXwx54QB",
  "key28": "X7uSRpsfFFRCabriSyPH4rzigvcAbVYHsbAKKXjhVhFAcs5irDx6WB4irmdYaqt3KB7mv5wpsukDRjyVZXPk9ZP",
  "key29": "2AdBDcJ6Rym6hnA4Siu9mTS6nSuExoRqjYxBPidYEZXpZxVbL9naJuCxRGJb9oENtL2RPNTeJMZScaYfsFt83NB9",
  "key30": "QHVMJRMLTajCiADKCSWCbsoAb6ESwWThM1h6iyfF3ZdTRGKgdAh1k5FkUS2fu4ki6aAWDYnMSWwYMtf2xpBvmmF",
  "key31": "2uW8JZwrGsguPoT3oZ9VGxw76P8kJU2TxhyZ8n8SQP4BzbEpTh9MLjZsPYD6nKK8EFU6fsfVDNwRhDZS6Ze152ia",
  "key32": "64yywSxGZWQtZ49AmtAb84cisuQAd16P4Kmatczgexmsv5wnwJdGF4oKM27fp1dKbpQJRTML3sGC9NKBMT35p5P4",
  "key33": "4yUMBH63sYhFaZzRSjQjR1meZHSSuPJbQqrqNT5wzHfXyzJ3uf5fgqENWAtDRVLFwDHKeifYf1cBSN5s8zW3xPA6",
  "key34": "5ER7YdRS7i8D7tYmBxvw5ZK62aDR3tr7mqHFqSgQV8cRCT5y5FunM1wGqXhyybXZRAEWfiQLzpADVsf9j3r1Qed9",
  "key35": "3HtoqEawpsbbLKaLUn6tmntGh8eq3P5URJCL4u5AK6o53m3FCVhEpeSFgTmoSKCTxsMMUeF5KwUWwxZebsY7gRyx",
  "key36": "2jYwkKgxB5L5cj6Txrbdt87V6HdPDFpDtp1s6aB1CaLxknnwSvWXbFM2NXBu6EtDrJ3P9g9Zeh8bkXmXLDzDJ2Yo",
  "key37": "2vvxhgPEUWXTdBGwVGRdCw8RkVmbV3MM4Mw675uEZdkKY8iAetumgYRLtsmapC2841Z29M1LzUtYJsJJB2Zfux86",
  "key38": "3sZvFuukPPpTFbqmo8C4s3afEM9eAKJEhW9Yw3yrp45gmyfZmYDaks7MiFa76zs564xGwSJGaYB6U275hWWRKpFw",
  "key39": "4HpCFd1CcbrQYvZHS98htEKczKefTCqVpL8oPJBozUt6Evw2vefsYftaKFvQZt7WWBLxo3ndu6jmcMLaLnfiVb2S",
  "key40": "2idPtYkQhheMktUMbUcGRw5QbNC5ixjz3jJESJNFxgrU8aT9PRUC9DYeQhsz8uH953kM92YM9k1keGRL8BWW7eAy",
  "key41": "4LAfvEAFBTYuZ39tYJhvYJitAUsQvusiHNUhqU9TksoU8sAcReJfz2sCtqwXfBokzn4eXK3nLhRmXtG7XqsgMPMy",
  "key42": "nE3qqkdHx6yTa13YQ4egRma8sTK3oNiDmwj5c32bh8xxAzRRF42KJjoNwfmk2hYJNsh2Eit4i1sZ8XDRPXj2L8z",
  "key43": "z8b8v1wtwZzCPvdRtyFgeMjYdiUWwjZFWHqo37wAn8eiSGRE3oD62RSfwKs5XggRaW337Rv3Jkrrt3VKtJLJtjx"
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
