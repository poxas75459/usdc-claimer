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
    "543CgijaHVJ69dFb5zvc4U657KfzHRrFAVW9M9g3RoNtotaHEsP4ghHfjNankupzVamY9G8hJY3ByTQxfaUf7Gts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UY2YwK3ZRdQiELxT2pYYCCMjDmGasLTBJKYyfTG7eGC8ZGouSNcxhNzZp9SqLih69W1E6sBXdtsKqtpeu1xBDo8",
  "key1": "3Q2DUaPzZPvmUg15cFmwQGwVaDY3osLx4d6JoMt45Bo39umLTLoqy3VLHEqfsu7m6c3cFKKnG4WaJcwnaag34Jux",
  "key2": "4jfBxTr9HvbejrT42p1mT1N4xcWEaH4CwTzm8HyAXWt4j3KY6mjos8DJf2CUvae9MUejYiwWhZdZGDd69BAMTHoa",
  "key3": "4GwgRKesL5zQHcR3MN9iwjwbHcEgbNJVEAJL9ZfZUEnhbnjguEBxL6W5afAG5zc8J7zi1Hy3h2kFPGMAk5cBU1PC",
  "key4": "2LnwCQgPDSduTgsHhCrdcWqWuDhBuXdwst6VC61WQMRrfZuzrCyhXYQTVKHsuFXr37jXGPztXLyUaMueyTpNsPgt",
  "key5": "QyD3vcvNpXUGbw9uDc8k1jgngQnsF1Ncu2YgHfiTabkiKj3gzJroZcMaknVjhgN8v53V7Yz2uTRdBxMYSdwD798",
  "key6": "3npwXaYJXrnczBRE9vrsDa2dHutACwrXuNVS6QzigLUoZBwtwbC75hupsDK8WYmDTeJiCWRkiz2kwa529WGXcE9M",
  "key7": "4gHJHvWmUsUN9DcHixapWd4JgBJxvbLqjnTLW5a13iKisXvbXFzyj9BVy6HShFTipjkfNPzhtfoxFSQJCcjJ1cLT",
  "key8": "61PpQHnRnX5VJZwkaAL2KkYcH95UD8U13eUBJPYdEzwqbdcuwMM8xxjYiaCsXeA3VvrnGXY7utKrUu5AcXeMTAPh",
  "key9": "3eoQ2BRnkSFSY81BjGk3qX58uzaLKfFcz7Npij1g1v6EqTVW7DXRKHGQPV8QaYitWzLAfCVzoXYtQU9uwRypzKLg",
  "key10": "fypKNxbpmG9TgP44e91afoUooJLB22mhP9DEbjPsUYVEXouN7b8nGTaqY4i9fa46Hohk6EtqFHmxf2tZegKPhvn",
  "key11": "4zt8ZwcCdqSk3LoDfhVhFTuNcVVbGkcauGBL8nkUBS5tK5x7rnvC6yaiz7AagWtu4ru84a4JtK9YqLsurvpgfdH2",
  "key12": "vcQC6zA3yomLkcjUwbVQVZSq11ytbvW89j7kjJwUaGzTqvLVujV9XR6WkvpvenHnm1nNus54YV4YpkiFXxQ7qDe",
  "key13": "3ECAsg9KXxDgDq97inrjWXimSR5CXoBdTuJRnPsSsCxfaE1tdBrBccWqzF4WVp61AXSYHUMMKySqH48Hh6iA2tKe",
  "key14": "2j343EmgMSLmfoPB9YqLG3A7eRniEP1Tgk2zHZnRVjtHAh1tRjhRSoQEJVXTffUaWpGJjzTEksrv4GQpuGJrYuw5",
  "key15": "386hVd4KwXG7ZW1Ecef6E46tYQg1s2gP5HQPq9R2NE8uoVHDRq7rrvi8CgDPcNb6nvZiZDFJAa7DykSdB94ZXthS",
  "key16": "2oaWnsWstxPNE5eHQ58XfrYenqNwpGAumiw6nL5Rii6xkvSSrocq4WPQhNqmArh2vZuKpozWmqKnTiuh8SnkB2SF",
  "key17": "5hA5Vfx1HEyUs6d33NWQKuk2GtHtYkQQmGQBdj9zsJZQ35t6mcEGNLSSHuH9c1RuxFgqDJZeGfg8uBdkVpFgMxUG",
  "key18": "o9HvFQMfnVRsjxF6BSYzhQkm7cQnnDWC9pKVRyca4Vyjvpys98XcUXntbHvxv7wPqbjzL6GodE5ia5QX9Y1LYFS",
  "key19": "56MsTwU1JcDumeqkPvdtmwoCdyxF1jgb7oqPHxju39esRz6uKtGPDQhscuYYoQuucSVBHLWMmjQF63iaqKGEShxK",
  "key20": "4rycGTVz6XTjxR4dK4DoHsJvh1yr4FuuTN4YSRp9PLYsuGunW3zDCYvEmibu39BK6KX4Yp6XsKa6mWMqUY9jrgtY",
  "key21": "2LQVojqt1VFQMhob7So9fWAWUkQrkQEscZmyTHyPaFoePGu5PPmd2RUtJquN51jreCzGwhtw9wkHiJaNEDwY8GKD",
  "key22": "4hFaztY47UF7F39QgSaqdkrcCVWfWQ4vNbEAab5VfoRHcNjzfM7dWMcWbCyGECgDzeWCv5TrwhJLFTHrBafkjWwY",
  "key23": "518hxCbmUTiYuCQydje6UaN1LMqTtXLf7DjntLwGs7xTeQUoM51WFJm5j53kxkuFryEGwyA7cGL5hZb24fP42EgY",
  "key24": "sH2EtJ4k9RkifQTq5pT7miDm5eXwomk9FkJj8moLUvSzf6UQNEbP2gGpPebizMwbqVrAziq1KAdkqoSNrUtgdZf",
  "key25": "4KeSMtkeUQe5XwjiBTb2XcT7aem9vJmDXn5xcxdoN4twb74KvMo6SxpSyvsPcD57fUXggWGTbS3iVvXUs8srXKxJ",
  "key26": "5uPZBcJm3DN5i1c95SPkSf7TVt3DyAuesGxYn5dibGGcewUNyhdczmj76a7oTdFdexhXQ9Gd446WFdXNRnfiRH6v",
  "key27": "xq1zp1ScPYcRvzdmiJCALTEqiokGCwJnZYevQ2yFVbusqjypiek9S7VJg3QmNzDNyrSGKmXy34Dq1jruhVXFdpJ",
  "key28": "2kzdhQS1iiM9Cnb4ABvjxnYg74iYhUnNsxXz8HJNN8rdP3fxidaigKVnX5t2uo7azaEefgnRmyTaNAX4HUA7VAuL",
  "key29": "h1LqqHx4rjC4C31jyx7DqG1Yam5AmYD3bKfmiaZ6z37TYeni9Tdrsns8iWuR1cT5i2XhCoQL9Xx1NzrzK8dw9Qs",
  "key30": "vYcKTS1kn9Jp4i7vcbKSzE1kk5Q2x9xWkPyKprNxeBghEAdZqMEbPxCpnwSbE7QYqk8WppswECZfxrAxGhYvprN",
  "key31": "3ptjxHLHHnndSg81rDghTWW9afjmHRf5psb8KTU2RGbPBiwWoL52kRP1hbXXxDgzfqdPTUbSnFdS8oPo5h5UKiJc",
  "key32": "5m7gC9RfzU4hwEEbKny8BzkYP7e9DrBDJo9grPHv3ZTcEsE4LXx38n2Bh4zNaBBaVKVa3ZfKHCP2Kz7pYqQXUuRW",
  "key33": "5m1arV452aZcCEDHoGMm8dPE7dWEbL4w593E4QZqyy7yNTkUyHa74srV4RV6GxPeA5c6AevU4TrJzUMDuHPyLUe3",
  "key34": "4cBLiKXMRmKMdNHiwDX8vsXg7oExdkGS5gjnHqk3MJzKTyudtDjUiDXwqvgr9ExFHaoAJps3gGpxcvbBwbaxkLer",
  "key35": "b7tpzQZW7ivHSVnfbkrq6hBqQwfcqL48qm61j1JRdVAyFzturs5JPfFggtHXFWw4tvEFrSHRiGpoNyqdqMzPng8",
  "key36": "4L13XBnDF5yQSkW7hQYCGn3i8rfsuesfQC6u7oyvhLut3HUHA8uSW64ZkhQyMKHsea52di62Wqjs11HgGr8Xtug6",
  "key37": "2kYB5TiwjPmgUreuBxwaSv9Rqpmy1BrMzoLPFzrA39RkG9JgQc65veJHxABPjFVtDtJzrw1fjT5JcnKr7qnMy3Kz",
  "key38": "36J7DD1RXK1RVSPY77Ycci8EhBNp4SkiLxiJCMJqPr3WWnrAQRPDpvTwokqSbY6Fh8hnPhwTxgfD1dRpSV5N14z9",
  "key39": "oHSuW3rffP8p1C6z8Era4aU2gyNFFvXCjto41cRNUZteotvoi2DZnMsPyHpTCbbY7ATco13aVb4CYBMVKGNCuAm",
  "key40": "3SC5F7fAHjBT9CqteCz1axPXdHw7QrWt7CV5mwGkkxnzUyCobEnq9B1Rb64thjdU7LXtNzhshwCjeqf1EcyASX68",
  "key41": "2F7rdAS6era16fHLKspCiTMyxNQ4pBC6cs7LBwa9jJsXTZSw8k558JkkD3CHAPpZ1Qi5AoXa5HMjaXGtRCVGuB1q",
  "key42": "DecBN5zt7yKFXedMfmJWkgR6seH1r321foTahFgAzvU9rfbuNJ2kWUZXhh5hTCP4e6mzncdWG6n86iKqhhuPKzc",
  "key43": "2HAec83CZK8rkY7fjT3jwAZehTv7E7XmwAP17PTWJEmQdsPHysJ7nQ4WjF4hEvsm5ymPXoi6zYzKDHLpuoD3CKcd"
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
