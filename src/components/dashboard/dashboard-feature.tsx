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
    "Vex1PFwFsCoSRYQ9nYCAJU3j6Jcu3VkJzzA8wNpcy9JH1j8GN8Prd8f1ygxy4gRgHrEF99p76g6awYW6QB3e34K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MdAwrX7uWixN6DxP3fewRwRfnTPB8U1wkLn4Ft8zH4p7sshdWQYzYFqW23sfw2yHmWyzApeEvBQLNgEHc8ysTyt",
  "key1": "uC2dhbLamExjd8qE8bF1ytvAUF5N7ARJAeFeGPqFapChfB6yuAk1qb8UnRFViZvWV8bAec8KA2a4CDUaowDRn3i",
  "key2": "4DhzdGDyyZjkghFj2JhGrdaBRuY5dxWKp1dmcXDq2s8j1ZxbHpppJFS5dSFiaEydEdLmHkHzdMr8nNrADgixHuiu",
  "key3": "2amgJhvZXAGjP64g7fmA561gwp7RivLRL3pp7GKYARBQKQUz7vDtSW7cQtET8HjPkhZ3gHZkwDDu9KLFLQ1hpfBf",
  "key4": "4QbSUfFWQhyfu1CoCXLqLjrweYAgUGZBpWTsZ2xtL8ty6PRdZ1SrQkcDmkdA3jKFkoDWF165xw9HXVuPKzcrtMSm",
  "key5": "VNXtxeCX95QN5UjFcWKUR3ZoAUttg5LB899Bb4Jp31ZXszt9kDZ1i5dZWiZPSgJNErMuU8D2yx6ctbtww1pjnTD",
  "key6": "pFidzJVFRndN9DQUGQXhvpNuGPvNdvj74Naxmib7sEFg2GYjp5gZqqZEy3hQFSnjppyP47Xv8MaoZ3cUvTPEjqV",
  "key7": "5SBzZMCXYAffJRiV44U2odFTTBTtJZQt2bxrW7TjXrfAMSCRzAsfahzS7UMLhZf4tmGkkvo3r6CARFJKB5FEqNo7",
  "key8": "3UBjmwX4Gie4YJiHeWyDPMDo4TnzGfci4Ns9z3AVJwKQub2SiYGBiCZ8aVvqF4vLktrxmfSaK1gDyGZkspctX4mz",
  "key9": "3FGGS8xVYb97CNC54Va77v5hUL334Rrhv81neDWFZujZCv8ykQtgfZPeDu5i6meuQ9W9qy8ZkAtW1YmotS7ivrdZ",
  "key10": "2LbLgSsMom26NHe7WJsQN8LL2R9M3iAypnFow6PJZnyZs9xEPpTUW27koCXTocjgxevLSct2Aryc71pNi8MaikMZ",
  "key11": "62LuZnJpXcqtdUTH5MKWqtfehPKUiqdagSES3fXmFYwExJ2CjRbsR94zqVnv7oqpTScmgnqHByLaQWmtrALs8Eqq",
  "key12": "23791xu5Pp8kAzh1MTKwtpX7FUdU4HEBeWf2o9f6czDvBHDseCFPiZfDMUmeCMDVhk5tGEUnADKzkHycV8wvPfpX",
  "key13": "3wTxveM6rew8DtoswVxTAuRyb6wShDXMyatmCczaqWZRy1nBCYykAhtpRXLo5pNGRq7GwiLQkyNMNdfq5GTx5aLo",
  "key14": "62p1NuS6kMjcucSkrm9aafW1n63rQRc4c48qAC5KASVPfikbxEkBTwb8zW5gNV9k51MdpwitMuNrZkNrNv9AkMHS",
  "key15": "445Y6KNSUJDzdPwnqJ6iMPaEEnRNkqJSqqWXE3jLDzJZhY8FYNzG7pcja8Ss5hvH3LTLNYPVGDTZ2YUAjq4C2e8J",
  "key16": "4He4en1CuqdjUoU4Huyivce2EgvZzsWqc1ifdtm6ZKeQ2grf11RdxFrqL49EkdAbn7zCoGP4iRPLdqFMR963zeqQ",
  "key17": "4XS6FE5KCZjq3SWNPyCB2QDTEG5wWu4McoLoyGxHzkmvPJmqfSTmdBND9YzUFqa3SKmLwMDAK9CD7gWz3qtzYsie",
  "key18": "4nLRwwyXraZvzvp3v85TcQtvvgyGob2kU9Zb9iXx9v5X9RgDmQK8GZMpV9X6GZekKjB9SBFzsccbUyUL1ZEUy2bb",
  "key19": "WPMcbk5qdq3qZMvcfbUJ8fDyaJeJmmD3SEhoHE298KanNzE6PAZPNiz5HS9KB4NTYCQK6DmxEAXrJDok6Jt9UYq",
  "key20": "3pkcnbpRFrYS6LeNScRPf1CfJBvMbDwZW3SfjYnhGEBtwwMnkSSJcqQVGzC1se4GqMmsGXB1TrutkzqzfBSrck2f",
  "key21": "5LH8xRedqS7SFKVAzhG2av4GTC34XiCcJp4BJrnApX2WniqfPagYAyp2s5gAdFitpUTsikjAovmq8gzj7uFXzorL",
  "key22": "gzzv3P4M1CtmD7tYaGBZPpJmqA8XVkRofzLZqMMUCEYT36hRe6m8RCFNM2wjtwb1dWvwQ4uWWrdk5Rx5XoCyBvo",
  "key23": "4KXcwcMGBKX1ux6zdaBVAv7fuKpMzskqggqstGGUHANRf6udUHfCcyM9vk6SscyY1Akfvoqtf1CXUottuswAkXW6",
  "key24": "3H2bp941s6tuNHo9kZB3B9oXh5K63eBFQ3LwF1WgmS76fr36x5p7s1QFjguzQq4Ris3Rz9hfGveQ6GfgWSVZqgqD",
  "key25": "pD4fK1LMfdh42HLusdvXALmDTC4Ks5ZenxFCSX4w6wdeTXbmVxZGAK6P9qu3cBfMQv1WsQKNwMR6B252YAq9fiV",
  "key26": "3Sn3pMRSYkvuKseTgAhyRBN6iB2f7uxXJskiG8PgB2FJSmVauPmpakAXS7Qo9K2Wmy4JsxKJqSLTymHifZ6KdkD6",
  "key27": "44X9b3ZmDMVjJ45a1h7b7kvWJGvp4DyG8XswtDiiuwyyxbbKnVaehcQtVHxWygkUkasKRUsEQj83sGNBp4vGsLfU",
  "key28": "4mrpDxAjW6sCt2ybFfgMDzBKdVFmqesBS1qMnNs56iUdG2fZ8tipT3tKeaGdiaaCJdpSxQYXBzpBg3HW3hxeqwiS",
  "key29": "df2vnPsRjkfrCkFzJabwheiX5xzkyyNPHMJADET4irHSKQhCjcSLcwqFwBzU8GQiPkxiRU1P4Lz2soyBpU15aW7",
  "key30": "5kHYAGn7aXSZBieFy1d1tX5CjP4P5ShEwJGPFTA53QWDkjqRgq3j6P2wHQA42HYGNQVwaeSuausi1SxQvwvmHGkF",
  "key31": "4zvScCp3LHpPvk8g7PLQi8BiPmMj8HXJMKqYkpAWhtjU9fR5mco2fPuXmi9tpNyzAYhhfz5dBmTsCLSamdePjs4",
  "key32": "3B1Gz4SQLyPN5oRHbeUAHzWnvfHP8eKhQJ9cfPgrJ7snzSqYaYT2S3bktdePamarwRvmpfwQWtuX56UHGfTVwV2C",
  "key33": "4To3xKgGAF3fqfToXjDyYSvweXoy9mLkGDfABjV1V4S5mVHhbg2gRZBzVKpRZaCa6BHy9y3M8rdiUirPJoDYzrbH",
  "key34": "62g6SqN4xwFaEjxn5MmxPJZMeoKAy8A5SbZr55LXTmMkamCssXC4ehfAbxhPzf2u1XYqxWuWc2JQwGJcsyMRp6h4",
  "key35": "2MLco1wFTNTXbh22NcNRm2feQjPoQYj8mr4KBuGdj5tuNDRtgQhRQBZ4yrkwoimgifGdHvaFJNSqc7pmxnAG6YPK",
  "key36": "zE4G6QEHhvvsM5K3Pnyo9QK7gLEnC1iabs6zAA2XUEiTcC8Wu92MFU8aw7ak8RF5dtSot8pqfosrzD3dZBdt7g6",
  "key37": "4PwNQJmsRq82YQVtpbyywmx4ueU6TELdDzPzEPdrF1Yq6V5r5pvpAXdepm5aGNEZguLp5tZV2aaKLxMPbjaCwtyL"
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
