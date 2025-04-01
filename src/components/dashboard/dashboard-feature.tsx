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
    "5HJpvAzfgYRU3o4ikxUgN5eppkNbsxA8K3VTz5bRqEkLTtndGad9y7sfXF1cLr2GHcMrB6bGKwMsdFsEpuYxiCHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D1g57wWqLHr9sQx5LgsZvfHLjtJxyqcXioSgTyosTwiD6Hsg5uQPqnoucaKYSxSf2k5iMyzpNDuZvMgKgQC9Tj9",
  "key1": "2aA9WnsQZjAN2eY7orPDFpd9eVRVy52EkAg9kz922xcyQ2RkLU9yLoZ4a4ww19KrtgbG8jb4KdStw5tVyvrEz7LP",
  "key2": "sN34Lzq6ZU5DTmX6GoeNfJqZrhwT7nj8dm8NDcp5oyXAvu7QsBHn3SWvFW9JUQsuhqnxsh2GVB3UwiDQpBC5d9h",
  "key3": "4N1U7tg38nnjnYfdL5DSQfKPms2RAAYC7JVy2aaU3jRd5aAJXLj8EHHuVz2Fi2vbhFxGS3cxU2xDM2td2Py5pqZP",
  "key4": "3yvYxyAQS9CjJU1nX3DkaLiFFJVttmvrHneYFM5bwwDNueojJUnLWgv8R9AxaksjLhETxQzSGEW25w2x3gdYYVLd",
  "key5": "5MNeWXQhdzWRBBLvrSyNLzf17mhNBd9kUdrAs12tfWssw1GrwuMaQuxTQEdUzoQ6fBQi6UtXRXyn7Qm4TDg7Sj5m",
  "key6": "5rH1cjB3VXRRLvfKLmcXjMw3E9uVgu4TdfSeHERqmoA6ic3G2GytRUGXof24rPdtM1Uqo3UUmtNHwZSpLcRV1j53",
  "key7": "3ynPyYRvAAVqe8cgdE91VSzhMyapb3rukTS2dfRh3pz5vrVtESscYSt5oWsPWQnAsCr2WWKeCsyrjAWkeBYv1zTK",
  "key8": "5XKJa9WEjXeNUFkaAjJkWdFAb3f6TTmfRQCSVHadK7bM1Z39qcc2JqieFzyQDM83udEEWCQBFms1HKEgGTK12W2X",
  "key9": "4FUstUMPqb41PuHD7m6FuuvHH25LVgH61vSrWv5JerB7vow8orhtNsdh5cKzCeboPxih7mBD8T8XbJyvaeZZ1AND",
  "key10": "5xpv7GuBNgcnsjoyrUaL2P3Uv9cgtWighR6XNBp38Y3HQpsDms9eC9TRq4XX1faFPNEQgspbGjF68cuBCs89hHQf",
  "key11": "4J1JLM6f4BCDmYqVdUoNWu49nnRiLEv8ATD2m8NkJ1qsYyfwtJAC2pbm7C89bVhtXNfo5fnmXCosxtSftfAtxK9",
  "key12": "Cy56QquJiQuYseYpbz5T8Mmpe7SLSK4Ns1uZsWi4NNMHBaBrNhK8D98PuTCR97DyBKkQQ4h5yxmRoveCpD1ebRc",
  "key13": "3PNZBTJDc2AfHQ8D38gm3gaDoR8GX6Tykupg4w5kwniiRpvBtDgFvGdLn3BQ6LPzkB3YH9P9dBxcGopDencAY6a1",
  "key14": "55m43CBrV5LUeNFmUAYkHqttbv2EWPTtcnUPzXbnMdgJsn52gdhh8XNYVtmtMXQgVSKYqp1DDA9Myw3SUbzcR83k",
  "key15": "2q42TeeyK3kwRznhUjfbxGF8aZYYNp7Zik6W4t5FRs1Vh8kias5LcrrBFT6yjX5ad2LQ2pffxvh1UsAe2CBhCZyK",
  "key16": "zUhCY4DG9UHpAgpkvk5V7ESu9Uq9WkdQARr8VPZbpz1jbr6Stpb2kXDD8zfkeek75MrEURNhaYynHoY6um9DBzT",
  "key17": "3vBzUPVLdsCNqJWDmMvWh8HJqp5EcNnLifoWvYeEbuFfFRnjSpY8K5noMZE1PJAdpKwisHZxghj8XD2PqAugsSqY",
  "key18": "4ybqy9WjcrUCvTGvNxDzTFewjVAJzWDAF38QX35f1T9SAZxZNYSG6eaMPbgnvUdnSz6qacb3vP2VUzfxe7zCRMzJ",
  "key19": "3TxGK7YZ2vYWDmhxZRg4M6mVHX5fBD5vpFPocWttJ7ZYSDX6ojB5yTDSbJhTbe5yiJHQCp7vYjLgVVTsYJZZqKfo",
  "key20": "4xcjvSUBfT5JVQWPpvCoLCYvoKRTuPQPApjaS1kDS5sKkxJ6xEMtuU92qhkEgP6QCUT3n4rY8YJCp9Kckn3G9AUY",
  "key21": "2HyF5iDqtR81h3DD1538gC2Q3TLCtCx3pPrLp7EyVzYRU42oDpHPTipkJRXCRCS1kjHtVMjrg3BoFETp95w769Jz",
  "key22": "4iB7cMQkWRsHjNvFn1o3yB8NG51BbtMsuxdDGRyemdvJEsnm4kbmnzAxepYZdStggVEJbsrtupRZRa8KT122T95j",
  "key23": "2fuwi7nz4LLhpgfFW7qZHqrg4G6PCcvFz2JuZi7yCyzMZsnYynNaSTE1uzkUMdmaR1kSFUggKuP29vUXL8T3N9a8",
  "key24": "SNKjczbuJLD8Ucw3s9gUyEhJyvHmmr7fDVWXuEnRr5gGz55knD2NmQnTTAegsH9MebsJ85gjoBESdRrGxKpEPvS",
  "key25": "4VWVk8qqAxSuL1hX1k3MSsraRYz9QxUkXAXxKkfEovBJP11AzXhcvWYPZeP3AJRZLMTkCsGTUqKCseNSwwTJgjdK",
  "key26": "k3wZDkyjGDFXyu8VYWnFyjUtteZt7NAD47nZ7pSfGMJByugeoyustoxdxfRE16GtJavvseAXHBz7QP998exxVYd",
  "key27": "5uu3cHND1vRwEEDbi6YBoagXKhARNNkJyaMMztFFgUw5vCEuGNbBdKt93DB5XdaeQEbq4Ua65wr5XS1Gmt7X7Dju",
  "key28": "2NcJqeaZV68pAk8adGs8k6hQSMWG6BCxSoqBhD15KK9FZCy8zuudj7iDEeyaJBMpMeW76NTQ755JtrBRBgtaXhzk",
  "key29": "4dhV3wFNBXdw25hT56sVYQ5tCdhbcLVRnZXNvBWwWXTV4D8opfhp8gG7mJUoKqHwaucdyocdVXVXMX6CyXhktZFU",
  "key30": "ufBjKKeo1qcQa82vrSbWB67YPqUek5sWZNwXf5k3bj15WDSc41H4hviYsvTiokDZ9PHDsTBGsLJQHyVJyKpr1WR",
  "key31": "htchUJHY39QyUAuThE5TRPtZEZGvxQYB2AbBynVozBzunJfCoLDd8j79Pdd3hdoQK7y55tezdgnRCTeWBBzzorw",
  "key32": "imH4g5gDfdttmNWC93HRBScNpjN765HZstwf8YcUj31Y9H3tuDkVVsnMmqCYwa7xgGhgtt3x2vcL13tNqCxSVNY",
  "key33": "32WvbebkoF8J1DcP4Er4cniQKYh2WDittCBo4datxqKMmCFcQVXqoRWLqpZQSBZr8pvnVE5gUV9jNor1ARHRzA5t",
  "key34": "3t4HpVFXsmyzRF7ZcDr8TKftgambP1nT2yaJgRMXeguwtLvKmBEWMd4Nb7Enj8YRt85gvpzijwjt8yzA5NLWWNh9",
  "key35": "4UNo9oyqdfBsjA953NRJWviSvFqwuAK1eQq2dqHei9CgGmVkVvxuhrUiZ8x6UFwNkqRBJLCLgFytZEgn32CE8WqC",
  "key36": "3vKubxzvpEFuEungvqqxUCuN2g3xbCPrgJPvSWnfEYGoULDAFY7jNSEgqbrshesbnrvcCKrDjRAPp7HP62cSJcn4",
  "key37": "5VpHc6crw9kQaE3HZixhwgrinkNmKPmZr7XHAnnigAnZ8SpaAWCxhnRZMJ4BQd7FxsuR4bSo4n1QYAL1nqFnUykV",
  "key38": "4UzDz7REdwnGf2Jyh6YNJ3EWN8UvD58HWxTxW4c2t9fVxRpfGYxZFEpRK9xuUo4UzVdd3HMA7eUZCVce1Jx7fprH",
  "key39": "5Nqzyg2gpQswEN1NTEBgfybkitKdxoqQNvortaKVWczgF3qQpDkC39o1g3Fx6eMGiR8ENukr4MCkQQZ9m7mRPLvm",
  "key40": "284nUzfpxjfU9QX8WweThhXVypHkcjX2KQH5REApQiHi2S2zoc2EgZdNBQmkNYKhwyYuwSJGenYhSXjxna96hUTa",
  "key41": "53tUCz2xTGNnT1S5jxDB789uj1Q84yovFcPh9wihfnkHVgMrfBU6YVTsxgv8gjKjGam1GXfuEGQqCgD5zfjdLe1t",
  "key42": "qamAenXewmeQ2Y2CjEGsjVfs2HAQRKV58hQ42NH4Uyf7ZFoTrJ6YsiBeHPS3GQwd4oUYsn9CZWAURKT5YHVCWHR",
  "key43": "3g83RQQtzYALa4irZxDByvnTnVq46cc7wgSAz9YUuRJGdXouJawosdX5GJz7Es2fzAHNH8FazcJcbdqgoVTW3KRr",
  "key44": "5mfaFTphWUNWFPQikBuprWokuAj2F1YRjx4HBmWdB1HyP1jFLgor34e9Vg1zoN4J2yFQtAY9dowQdGew9CrGaz6X",
  "key45": "xxXcxzs1rmKdZoLFFjfkGGsFqsfoALipRyGYgTvP6PbyCnrA9DdbdgWqiPq1PH4EWKRMdog75qrGDgoxCtoJW1Z",
  "key46": "2ScQ3X7AKm1ewLrNKRs78LTAj2KP4JRtV2H9geQHmDCUrhJ2jSKNc8iU72nkx873JhDjcLLXixYC31yZzF9xgmtN",
  "key47": "2KS95L15gosvS9KjZhgeVmVewBbU4dpGy7WErABFvH6PnSr5VsL83aLYn16PJxLngysjUAL9GLkCPES7hbSRCRkr",
  "key48": "2Mmfj6nEdBcKbHjssZjGkLt1gWENAkp4DNE3UUjW2e9xhUf3y7UkWzwZQhkTXAQmjoGZqgypbM3JGmFhchj24th",
  "key49": "4hnV2dZY42AKA7ALtnr1mdjKZ5SeB39EvYzhFvkDJst6GuY5dmLs8YwMZawv8YTyH5UYRk5d4Fho1UYvzuV6BzZ3"
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
