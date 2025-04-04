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
    "4Wf7BP7JV2CdmagCqavv1G6peX8SnSu9RapviZCXTswGzWtida9xGNBHttqyHhpt2CfEDepKAGaepyij1ojCPTtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F7AJ9oSL4yHnAW4tth62BMuc5vfWXnpfn9zAxiFb2sBUQEBTdPTBBiUA93tZmix7Ns4ucuTaUS4g5T9mitYhDg6",
  "key1": "zHjFcBk92ZTRpafMxAdzoeKMNaeTQ1rbTeVCas28VSB6pPcT6MtW4CmQTtWZ2jXbVvXFuQAxPn66Z8GbEjAxjwV",
  "key2": "2b675MxaWiShmMm2hPTqQHfuKLxL85bFu5ZFsHEKgXahSUDNUWAdkUzp88WSQKjTNzd7waJy2zGQt2UdrT2BYCD7",
  "key3": "3Zdaw45xvaSoAUTxcgqyLnV7C2Y8PNZxSRMVe3VgETQCe9FMqs2xqBgP2zLTWaC7xhAUoQx2H7zaNXYmags7SFnh",
  "key4": "51FfHez76NU79JTGkgxPkdrbhUErkRnzR2qBRULMjCyVDjKfK9MSXQLkV7BYUxorhaGWCGGzcfTFkgbQJkhNhHMh",
  "key5": "2MftYa83Tgjxgbtzww7j2K1q2WZv7qNLejtpZF7dJoPkxsreZz2yh5CoMWw4s5wsckDzX7c2QqqY27rfFbktMJM2",
  "key6": "5CNTHCw8dRaG82tCzrJCdrzDvEucVsNvjg37NcFawZJEURiPQWoyhgyKLJXZmmtk2PU6jbaBeoXfj5snEXihKU5h",
  "key7": "2pSuBeZMbzgHCm52CHZT2L1RTQiQ2Tx55NsJ9Q4ppTbWhKvPhiT2RqfEQaiCpycQYccNpvAqf8Wtv7d3oxUBejsd",
  "key8": "3jU38P98NWB7T7CA3neFQc5j4CXFbPZRi9AdPGPuTg2TBQpk6ZeGZyhxxPP7jW3yT7xtVXwmBv7Xw4zZHK8tUT7J",
  "key9": "4zBzbcAMTJR8WVxmpYuoWkHA5NPzbfie6MUFDKyPH7PQB6waMqairjx99uwt2w44hdCDK6ooxcbAWGNUmofiiuQf",
  "key10": "4KBPxkKEaN5TzP57CSwNQUs67Lfue5Tmg2rTSGeahKF2F7kVwFLnUXLEnbLhBcYmH4kQbhCDJnAjrPMxm9rT5kU7",
  "key11": "2mvXD5bvjwpSgr8W57sDC3yzR6b5to8omRjSQXMNTdBSjyMdqo7vtDEhXdLtJjHHXpeD3znjNSv3HVi8AFAayYtz",
  "key12": "59ic39H5P4pY3mqj1mAevLvaRexnDJUdMeMRz981eTpjirBFydJWyXkppEyQ8koXzmhqorDxPf6zbxmhhai3w9Yg",
  "key13": "2eewYb7jm9mbD93vhBv2Lbjo3xZkNyzsZPQ5HUpV5Ve7P61U5v4CQz8smQF72RxNsgJgnMbqgvY6ebHi4ZKXUTk1",
  "key14": "4Sv3JtEdcarZ6Bme8MJ2ZQVRTGhALK2ihtZkACuQHkcMfKRajdxESqwhAuHTHLMwpnPJR177z7t3mt5emKshCk7C",
  "key15": "gMYKT2xAWBqsTSMC83ZYru3vgDt7qBsrKrfkC5Zw2sVCsbuPaYT5XipvdhTfhSV9XX2nmEP4C5ay1gfQ2wXEraE",
  "key16": "3JH6nT7HW9SWqWFBer96ShvYyRvLz2wEGYV3D33Rxt7yA5WYKyjUSW5QM3kcmyMMkioWFyZJxTJKoyWCzkL6e3kD",
  "key17": "2KXN5JXYo76YuBGZ37CHFNoFHu68HUxUmmh69HUgaWAfkzRwEphQye4rfuDFB6WNkVP8Fva8wHWW98Y6kAJWyLSV",
  "key18": "3VBoX8PFxskPmiroRni3Ar1k7Ht725XNgKQ7BjkM3BnTiqTUpPjngGL9ELWKYTMgs1ASepWLY2UZFEhQL7NuRuai",
  "key19": "4SDkXMrg8XJoXGwWW83T7ZunFiPzRstJpiGzMkw2dR7xhK256D4w7PGzuLYhcJpXeukcK3N4W7F2UAPPUz2zcbwz",
  "key20": "4vW5TXtWgyQ5jbpYy4XyyLu9VtbmHx8keaSKXhrtrdTsH2GVsRABdDdu9Cjk4NyKVrssn3kikshBNEkbNUm7XkcH",
  "key21": "rErCdRDjhVjvL59mhs1nsUAAXmVukiDTSzhPNEvoAXgn8uU5REuvKCkCdv2u2eDuCxLmHQCubBZb8VXAYDeWGyb",
  "key22": "5DvM4k96ms3y4wDCTGhQ5Wcf7oEp4PvNx7q2XT5ohfcPRDf7zVEXdBtdbqa3gSN9fdKZry6A3nojL1K14Acen1iX",
  "key23": "2rRegCoTK6R756TbEHCzc2y1X4oWmz1AxWq1jgTWvmsrysik23rkEgYeixTcWW9UjQvgRM2vqkNqjjuXPmhLKsuJ",
  "key24": "fp7DEqCbLUBaj369w9sn7RRnXUVWAxpK6MBidFZz74U3DyBGNV1SQaXBUnadLnqGo5aowHauLxKzdbbw2Ex8G48",
  "key25": "3pvTmTQejT5CLCk2LU98QuJYvbvudki6wqXcyJHkaGqnrJbgqhm33QAh4vcQFwWdDD7L7GrhmhVzqKHkLtxTByEG",
  "key26": "61Rr7eN34Uv4Ls2fMLcMxwV4Zmnes2WUfpTKYs1VdXMPMj9AMUvvZ9bE3BurdaNZZGgjJmkzaJxqxPMsZBkKt9Fp",
  "key27": "2n4G2DyJmwKxFkMiBbPwYeYkAdVsNU8U6ffyyCQH3qWae5P5e7o4KKSDwaMCiZWjYEqn5HEzptzicVrqeKz5iBfp",
  "key28": "2SGzJ2oU9QtA1Boutn25JviqwnVFP7WpgRsAooCV5EZapqGxEL7qKQypMgoVkmhqxj19zP4MZXjAGz8c8R3jfFn2",
  "key29": "nq6Ev9N3dfH6urzC6jSWrF7HZ5eyLewPxbs4C2p4kvKSN9ig33FjPmhtcmVzR3APHG7zYmFXUtDJfDm6i3D65iA",
  "key30": "3T73P5TsiuMSdELXJGi2o9ALfJshup9atRLEvSKEdL1iwtGwfcWeBKmNo4G2patZdayq2s4BJumwbcNg4KRsyWZ8",
  "key31": "3m4GbnYQVuPmAx1ppXfUu5bp9hiZacLPYdWvkaLNdPtb1nzXDYJ8kGxTwtkYVujgsLLuJ8o4kQqzWvfKEJ4MWxAN",
  "key32": "2keaCPmZcfeRmLSwVg1RjSMp7R892YkxKdTwPHe9w8G6qxDwtj8tHnwuGxBTsSDdpt97c25arbdCtm4ABfAdMzcd",
  "key33": "5nsaBvWursNvwEmwFiiwVeo3P9cKKvhT5awx25FLAMd5tUUnpAvxeJ85hSuVEF6GW2Hcnp9W3uxyobjpUhWnLnKf",
  "key34": "2VqaPvvrH2DWyPQpMcaTjYV7zXViSroAv8hGYVS6o64fgrKB5KuwQ8T7PkpLmhKRZfPeKNqbfJZvQQDBiwtBKr46",
  "key35": "2R3T61qeVHSHv7iucUzprk92DFQc9F71e2Y7kUsUrVjzJ6KTmcBkC3w1FjBD2dpaCmYqCAQmbGbr5SrA2LDgNiwu",
  "key36": "3a464kaQCtMsteRcNEkThCAvh7nXWtREfKGdEnD1yztenhPcdVhHcxL6d5fnh4y5aSU6CRDMBLQtkhLAbUbAiPGy",
  "key37": "5wPxNjsXt5f6ojus1MWa9sNbcRnAfTfTz3zxfh6YAHkzdJ89bKa4LDmEChBLMJNCYESxdK5S9jTFhh4RiCpTFsTd",
  "key38": "oXkqqRpFDFbZ5yHnvh36wNS1NSUeZHoBqUokWaEWHUkP5eKcUAwjKop4NbDTccXpHbDrMcSDnvzSbWfwYN7jMyx",
  "key39": "3bLGic58vXuTfvRBNbEdMiTkTER836ex9NdeYgn7dhwmGwzZt165M8zjzu6j7FAcdMEwuCViCzYkW1fBptAqEG1p",
  "key40": "2iWWi6wKMuPtchwGimfATsYhW6VCjT4jT8L3AwaArGNJfR52PDgScDLkUkGFhpZe7t7p4ciQPX4DzWcjhRY1CZZc",
  "key41": "4vozgrEAftTogVYrqnu4oeHvAQdQRGH1MBqyoXqbDwX66KXFnEVgwjiuodm1gSGsohbTn6qxczEzdeCaP9ZYZxNR",
  "key42": "2sNuff1Njtdens8jcMhW76sn3zvUkBsSvJciyLZLpjhWUu4rT8Aaf5y42F7HDgHrZGDCjGvQ4U9nFGRQm7owg1Le"
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
