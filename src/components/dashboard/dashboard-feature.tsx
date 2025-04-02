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
    "46d8TfKJ518igGasWiMsr6LQ5fEwV7fuWjvD2YdDUxG455q5WEtMQYXVY6wxnfoCHg6eWXsWF9rG4HsxN75wB1YW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44huFQLu9rSPHamhp2VuhZQnoYNpLwxFahmdUcZ4zwb3HaMgtXNUCr4uFfTRCTKt8J6b9LnCoZQaME7Xvy9Q1CVo",
  "key1": "K8JjiMkx6MUb5HUdk2GRYj6JpUutJrd4CWyJasWCq6RaD4NhDXA9D14BsYtZx5kKKQK6EgbAiLV1XdHusNHTmrr",
  "key2": "5XarXzmLG2s4Fz8jjNxvNS1iEue3eREeisJ8NQnaP7mfkF1MSRUoWGUQVXGwYN6g4UUwM1ujvrGEJgEtoZdFLiPq",
  "key3": "PKqiEgJ5YhFwQZSmEZ9YgTMoQx2N6tz4iGK1rNewgUo5hibfRp8LxWu1L3RXyF8knfzjdxGu7JeYVMqC6dr1ZcQ",
  "key4": "2PEyttBNMFybWHZEXVFyjTLMtEbTLDXGdsKkDK2LfVWWLGBbZiLrNdd9RJhRWNxZKiNdKrAPLuVXydcM3q6DURPs",
  "key5": "4PibnuPdgUYb3fgrNHMnvRnTeDdBYNs3imb5hWFqFkoXKuySQC2m1TY9udhxediC93nJhALGVDzCmReCb2qfCMM2",
  "key6": "3cb1RDjy5LJCnS4MhN2nvm43YdmfHVBGHAJzSz7YfxUPMeBTDVGt1pwt45diDb2SNE8EJtrkUkc7LtMRxtCxtMzt",
  "key7": "ckwnRB7wuzGMKKcpnxGZVxHLiqkJyPVg9LqUS4JZp1G4v8rd6WjrjAgF8SzAekffn4mzLT6gVEnvVJHFRydsYdY",
  "key8": "2XF9zPnBTak7hC8kPdgdp6i32UubxAJhj6NziXfWSoySnsZ9PfqbwX1LMRF1nfmW7t3iUa5sTNoqTwyFbM1Nnp6k",
  "key9": "3VgRQssfeaMzCz38txTmP7rycGyC462DPVpxcGuFDpHkAhsnCYXesUmZU5AEyfvBghWNzDCVeqy3CpLWByPB9gcu",
  "key10": "3PpUEBmEAL3x3F8QfuR9T9pJtozYY1zSBAaHf7N6NpXbVNvQfDBowy71owtzh97hHeJRBYR4eyH5VVW2Gb8zqFA1",
  "key11": "4zkLdTjxnPhxjbVxpxfSn3sHKe9Kykh4jzHWtvJhvuQ2x9eJQn9567WV1HKBQDaAykyRkF919h29iqTHPPfWVfbH",
  "key12": "24Wbuksxew9SCm1htHiH94VmNeEioS9n7HB2YsrMHh2GgPSCgw4DwcdTduCEtxDHp6Xq8ZuM5WXYEQYtLt8yBvmH",
  "key13": "4mGUfKzyojbyuYyZaQkBYAo6g7rDcrqHnMzMSqSmtG3LXZ85njXjcwsqPJKfwEhjEMBV5vZGkMQdCkjeHdxxGQDY",
  "key14": "24TmBVJhfPzw9CUWZae22TkWbYBN2azbycYiRsheXuAsvt2rnpCYm4zeq3oSw3uTTakAjnohvwFaGG3p9zuXj8Vn",
  "key15": "49peZ2onWPyEXNX5Wh8dCHuP2a6tQbc3M2wA7TthDFUtwTkoyWGifiG8VKLfAQVBsLTd2H5D1HRiSK4oKyTHCZzi",
  "key16": "yhVAU4C2vSbTcnPdhggq4reQgkjz35rSUpKX35t5tsJ6XDk6ZiPeontqmpBp5rtZdMvuhuYDxBvgMJzy68KiowM",
  "key17": "61Tc7VTDkSpur1nejgxFdFey25neCcHGxwS4gymPtktwPmmFHW5yzhuBqkhEWFJFLGgJatGS2AhPrYmMvv8jJABJ",
  "key18": "2P9RzH4eanBvdmTU4wbWPY5DxTyHdhXLW4zeWUsZ6vUrV6GspsoEdcqVX4ePJahAG4t4xFAWa7SRCEqYuDASJrQX",
  "key19": "1r2GJHU92g7QUzdCcuixoNDieH9frWQ2x36WHDrdQL9cnDBoRWQR1rMtmQeN7E8axxcJbnGeHVnpYCm8zWsnfyW",
  "key20": "5mLAMcSGQdno3XpqVNBfRwdTj3vaHQuYpsYtrsNZieTMm767rrWbogG7nbKhnRWdkAG1auapR8h44V77rdkS1ocP",
  "key21": "4vdt6k3HQMqAbKZ4zbfZCpDhxKCLAwF4RRr5Z1e8H7G1YbsTcquL7hx4mqZCmUFnzr4LZdBF9FrbJwyVwpPxaXhW",
  "key22": "4NMp8eGHqfPkwy5BfVTgRYU8qh5dKrYJRNFWxTjwoQwCNJPPqK4zFUUCeaJiRm9J3uFRsTAaW8aJZSbNEdJpAX4X",
  "key23": "44hyfjpvqWeRQKyHtw1jQYvvoqkro7Co5LCL6fTYtDXqX3zxTPAHZWR1tUGYs1GTkDC1CNmzCjLFjk93UNf7YSpi",
  "key24": "9Yw93cEKL4WSS1WhGSUkayaC74RdYFvReSdfSKNEAzqspKNhxRMRqoS6CZki6UtG1VM7b7HTb9F25hAotNSufxe",
  "key25": "3w9S6c2j3L5n2mWWWQuuemicaT1vw9RUsXR2QTsqUXKTMKzHR4gSByyJov7ZPR2xA8hPf8oYyY3crRpBmwM7oWW",
  "key26": "49jbfULje4p5fhEXKsH5wYcMHG6GJS4RWvdPKiFuvGajPBLgwVPEBNQ9UeGswr17qS1WDUQB7PHgmdFRg41YeEHA",
  "key27": "2vFF1AjeFHSszPVVX4Dggzu8Cr8p3dsYYXZDDJ3dUdiYKXoMHrpmLdo5xwCqbasCPdUhXFHQhnhnyw11S7aJFb7z",
  "key28": "2PcsxLuipWa91Yr43dGTu3HYeERzoyQUTNgxfUG7xB4J1m2dQgFzy1igSk8xHwinKyee7dhAAkdZb9y3wzpvye1p",
  "key29": "4aXwuwjkFYZF5ECutn4tJj7DTGvMEjtjTQD2qSMrf3jDcDVtud8CegZ1wK8LvLPpFwVDC53rgB7m4n6UEzGeoAvQ",
  "key30": "3SqVLXD1CypDconHDnd7u83fugvC3uKjBcRg4bypZNGqHjYfWj87i4uP2jvd8jjsFneGMayArrcuKYmfiqeKGbrd",
  "key31": "4uLCqFnqvmVSv7saqtxwS3Hf4cwLEz1fJ5YkVR4WqAhDvtHjLSKyD6tfcab9xXfpSdAxt8w2JoEo5sPKgrHzv4CK",
  "key32": "5U6UNvCycmvKu5LkKrmAeeb7vbZQbgg93v7RPZhk6QJ3J2Ped8RgA6Da2sy97p9NKYVrkDRE7RJF7HrK1vCP2rjo",
  "key33": "3rTUaeAG1vkAoaBHq6Cx9EbNiH2Abkg9MABNL3VDM57kVYLLMWgTrMNRNPjpEZVHUcQZzmAzgZSdxEzmGQoroff1",
  "key34": "48eDvedWxFNKq1DNFur7hwooeS3dt457cEjuTVu9Uj7a537dijxNUJFKoJGLt5tSSG1Zj44DpXbCYAMaKhXsd34p",
  "key35": "3kYZZMgQauvWFKUcWdfvaZ6mb9A1aC49RHvLw7brDbZnmH6ARWwKtELiCvRw3qWLJ5w3rJ7nnYtfSxgzUsZU5Bsy",
  "key36": "4Sq3VEhe8t2XrA5scchAxyWbMdnD42GSJp9cd3xUPebWGLMWyMYpMVYLUpkdtqQKxCJyhXj1VK7NWJtDxoQ71kW",
  "key37": "44vjW2eWGWefvuz49JAm6NJLDFiE2L4ihEWRryU7XrYPY3GhJnKazS7QQqhfPp7goPL1aGG5EyowAY8fyuEVEKF6",
  "key38": "31PSWoatAfcyrux6gZwdfrHq2FNv2m26QJzrtSUTuLaJYuR1Tak9SimWpPPbSRRa7gzXQBGe9cGSfJa3d9jAzBDq",
  "key39": "A1vFGdMhWwGVexRQ6VhciJgBwFGoLMPcaFgaBWoM6JZobg4VC2qWAW5cK8zhnwmo9sJmmFeTPKTwetMmVbzYnNC",
  "key40": "3vh8EWHCCohEyeQphZoSmxvz2vYhsPBf3UNb5N9yj2ZwMTEhAe5XdHN5cSJ7tYZDFqPyWX64F8FxJxLjziLVQqaC",
  "key41": "2BeeW6etWcJLutc1u3GySC2hEDWUbSwEryHucdvycvSFi6ETsLM3188inhvc7abdVKJW9uvQ3Lam1b1wrTSzsooF",
  "key42": "7jANGcmCfHRFf1HDbzzRz4H1mvn4Rr22FJSbB1H31PyJgaFyxpNWvhFC8x2HvbnrQDGhkDUu9SKHr6NaH4eVAjC",
  "key43": "UBcmZxpi6kMjBT5Vwt65oQg4ffQSQNVmLQZbGB7mSsy5ad7JSEqMpJxZfhh1Z3BJaD38qid6BijHpqbBadqgcBs",
  "key44": "4NFfpdRWF2ZwCRRVQj8Lz6URG89iVZFGhxPFMYwPqrSxen1noRC8cNJ3PiAceg4FqndPXgq3tTA2KzR5htSqWgMU",
  "key45": "4udw8CSRBAGDy24frppo8j36cBUgxasxPujViZfyjSKxrMuZzktQa8Jmnv1feh3WyKGMStPYfryL3CoJk2D8yyrW",
  "key46": "5ouLxgDk96pY2RKEY1Vx4mbqcBVxoTNM6gCei8P7kb9hmcrHAVvXPEbRoVoRVSq1e4D9McCaWktBtNKRCaXiFFYa"
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
