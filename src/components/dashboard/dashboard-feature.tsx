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
    "5Pmb7REvKimNps29X2MPGJ8fwWkWrKB6ieffwaFoLZJqaKs6CxpPNqpJjTk5eS4Av6C43w8YUSocyeWzZhMnJmDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ctVj2QfQp9t5KbW4AenDbTTpKfGT5ZjUTZ9PEoVV9BG7nYJtNPcaEPPet1q9Y5mKeKQFwYEfcPeVyynzjmqsJNF",
  "key1": "4BMmRJ6NdSve3G1KeyTUARbfySDGmhBHezutqkgchrrDogJj9ZxrKbtRMKh1amQrdCCetMMeBS7AMPi79ysTmcgK",
  "key2": "2daX8x1bwMS6wWg2uXru381xSByocXVDxtLxB6tJFiLyTnMrKRaD13fyz3LWo91oe8SbpBKgNiHcvMLGn1Zh8kLa",
  "key3": "3hDpQnDRjBmRNy95vKanGYJ7G1xvjf55HRQYvKBgTXQCjXZ97zR39SLr7qa71SDkC2CyHF5n6BrKg9k9ZVRtDqNJ",
  "key4": "4HqntekvcWUAXjieCAxFcSGYv6uFxpqWUueW3VGaMt1tGaPRVE5EukD7wnm6ANv8iheS7mCQCGo1avJD2zZFHuS1",
  "key5": "3GHWv9zTntPUeXvc7cRH7FkRZyReZqZAnk4fHQsGF8VaGawAD6T2SHz1LWt7YVipHY4tUrkZqESs31FDsBN6SKh",
  "key6": "7xbJ8jGsQaVeLTHhL1pRGPR3AxTmxY7UZmree5vbqFUd1egzqceGgimqiDaZBwn4aYNQgfL4o3HVYKxJVgv3Vui",
  "key7": "k6UekusF7W96Pq7gk8ZctqrdKucRD7u3J1kkDVV46v6M6HfVnzrdzbSHa2PiQdkbzaGhjZWLutVwCFRUh68CMHB",
  "key8": "TQ8XZkhL3nVwrR3k738rsP1wbGPbSzvEj2geWhCevBe5QZzgerZSxJRE6Dwgo4urNR48AZfrdoHBKHQjjBeaAaX",
  "key9": "4ZyHUv89B8JQjmmqAzHmFr87dQQmbi9TvSB2mYq3R2rLEYv1z4rmmcCkkEW87LfEnhvtFEE9wodrZNMaUwSzR2iM",
  "key10": "G5QbwLFmb9YGWJgGiw7WXNwcSCHi3TuVBPX2Zm4dYU2Zx67XBZNNud6wHzypbHmqZxMLKSkz6rhBZhCLRmbsWuW",
  "key11": "3U1sXBnisDQzPFhHTYJJwTBGwAM4ygvX4DkAuDko5xtssFi7H38XQEs2usUsYkdfTxbPeDPwMJgkJJTMTsLuKpFX",
  "key12": "3j4id81gxZMwfs9az8FsPXQy784Wrq74Wv3sSa9RJ9n4sYugGefSi3X7Wb4Gk18EQkuUh4utyqbFr5yzkqGStBF3",
  "key13": "qAeAqK44iF59WV6iBUT85vnPRaB3qRrhuaQ6wu2k2Ezc2aYGvpmhpFQKwyNvuy8ysHSYXD6LfCiDNfGp5HoHGmr",
  "key14": "31QiYjC4vpvSPfYUYQeCz9sLouHjUFiiwA3SCXyRP6c5ybddG8xsq287KF5yLfbKiVHNSG4KsQ2EgGHm9g8fyBzu",
  "key15": "42NJTEioJGgxiWH4H7XKgJuw8T5N2aG9xahuz8nGrCSkQ7zJBdDuxy4o2GEhgAHWZwV286GSrsQXucF24jaY2ThN",
  "key16": "2iF3mSLrxpvxopwKUhsW2EbEdqBkgxuTiQFEKVAe5P1CWRUih71KZKUDYky2DwwXFoRGME2EugDaHU8cBya3wThT",
  "key17": "2t86D4FAncbc1i5Jxbo9454PNaprezjfnXyL2tny3nchLZJdpaHhQQvs5BMsb4BK4GvJE2m4s7p7xT2uY2vMBkC7",
  "key18": "4Gzu1nigwWnrE58bzdYwkzqDGFhQeXwMcYWtEdg84vvu9bLS9Q8axHyvfYCvVbeYeBM931h3dfQQgqWVofDZAtCu",
  "key19": "5NPomiEm4woMgdRcjbdPHCkuxUnWCUkrWzeDJXp4VaGBUsntnAouSPBU6QjswKziRUzHnV1ufumCU6uGDTicSUyA",
  "key20": "32gKc4EzwFDB51Z7hn8tG35Hem7CFzkLoRzdiBHH9395C5j71ARfXu3hVieT7azygciGuAXt3YUX9eTB9TYki9r4",
  "key21": "27drTcsXtNXh8L5JNfrFTTM1VLZ7ycgB5hHs8zDtndrGfTMntTdXKXfBMCUqr8njDacpnKsYvZu5RcVvkQVwrYry",
  "key22": "2iBuiqGcE5M1rJodtQgkYuWZca6NkepKx7qApSGm4ecTvRNxRxMQiDUg8z2kYbBdmPYpHZzBR83q2naGoVndqiYt",
  "key23": "61ni3oJF2Me1n1CpE3v7uC65pyiJc8eeQ3xXKfF293MhjMRKELx2oszb4c7AZSCPAXNas6JSoG61uwpgjK24x7e8",
  "key24": "MZYfphkxeuMGRjTtCNEx5D7HfRxwkEVicdnfhyU83PTmys6KUnD8fsQa8YbatxzuX9PGHHJUndjmqLX8g689AqC",
  "key25": "5M86fc1B2KySby2ScVdGvYxYR2rzn4A4S3zJia5sotrfn73CHGNGJ9FjMBC67VBXJG9yjyuf5wdt7PFt9YFUzD8M",
  "key26": "2tpCvU2jvvjQda7vpxPXNzioMJtvHcRha1Z5cPwHmxU9rqcUejtACFZYrUKs92KuwecHCjyohyPYfd5aXbfcZgAS",
  "key27": "62PCmzkbZnZSjFwzbXqxewxDBSZNE3ZTyLr1tgx5XHvcSpf3RDtTe7tR6Z6QxBcE52Sg62htTXHevsDkd2W4ApU8",
  "key28": "4bAsjifXYb88UzSyVSgvqCZBTAdjd1bduQGWoVbdE2Teo5vr1zoQrRpJ6fLQcQ68T5fczpDaMYVZCAbWNgnF1bwm",
  "key29": "34B5w9UZZ8LjauALWdi9UcN3L4XEcwvVwwQ77AtxRpF2mtyUtFYXp3gutUeAS1qXkzNdsMbQ2dRoDS7EuQBivLRE",
  "key30": "yhp3S2ZnbRPs2L8qZ5oBD3k8CS1ofUAKT4tPfr4vWoR15WqDwY24AV7AWzy8VLfAUkmLfmGndHjHf1FuiJdLukM",
  "key31": "Z42QdeXvjRVwSWWodBk3VFmVVRqLNwARg2ebPdvX4b4xVej6Y4eQBjUCJ5jyXk4eLNVyUmDaEQuRjVSkzhSeoWu",
  "key32": "2qhefNJbdVHbZdXTcyhhY1oyA6N3svgdKXHncUkFeB97mUti6JQnVnqqRLa17X32Z2igYFYu5ayqHMaAVD9WzfF8",
  "key33": "4pRvfhxLrrPyy98ttQCFmv2Y7P5KxZ376staJxzLgZhNEpAy2VE1FCUoJ8pX3ot9eCs1rSRDcfEhxrXKN7ZG3WGG",
  "key34": "2anLWUcXFSAYrkdMeoUartgcnQAaTYYN9xRWyqenobAZ9kJgGqqXbRAcSX3jxTtgXsq42Dd7KFuBuqm2oHncpPEB",
  "key35": "3gNVMmKivXz7LqsyFXRS6GJSQ81xBUkvG5xa91mDPJUoVhnYs6E6ivjvux1x6M8RKruviGdpMdCbiP2hc2mJfxdg",
  "key36": "3YJh1ckcvXE8MevBGEDe5mro1PcJobT7E38FtCxgwbToxMWiWTZHE4wiaDj6EbRWrXA5yAmt5B1PGen1EvrpqoZL",
  "key37": "3xNMat8cJhhd56npH1eZFxiJvKNLoLP1QNTGYNfZXYhq4h6moPpFpuXBnh82aAcjAK4sMhGJr2i2wa89x8z2pCbW",
  "key38": "3ELZjq4xcRHzZwWz8UjvvKyXUeUCtNuJkE3gyDFSxNAQT62MXMkhowNidPuauspb9uEP1Pa1h4zByE9WJepuxtNB",
  "key39": "4p8BPPkXQ7mNUMm6QmoRCuQiwVfeQVCf6moctPFGg7SYgGBoji8RVPnKdZXiPfmoPuNGTHbWoEDWucYNG6aTKuib",
  "key40": "475sNH4dmB4ykAYG1reyo3ftRE3uz8yFpcMkYBMnoReUJD25zXRXkcN26xMG3MT3MksrvvvC4bRioeotPmigmHpA",
  "key41": "4sgQ9Np4rFFz6gGTD6k7jt2g8NjB6vnyQ6YSdcYKy6dNdopDN7ZP5aFBKjajJyqV74apTJuGnV3TucbULSnh8B6K",
  "key42": "57j78W5R8CURSSoBCgMserEnyS4GcA3mKDiALSkxxwRSzUCFLWGHSw2ARaHuMuCBJLD5q6CZL8sZv7rLwBUa9NL6"
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
