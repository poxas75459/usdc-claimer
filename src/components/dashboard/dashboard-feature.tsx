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
    "5Cupv97Bcn5wbbyiSFRHPhdwLAGmhxHXFVUbzZ5ZyRj2EQ4m2xz6RZpcK4LEH5y9zscF8VQ635p9Jjxkfp2UQf1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q16iUfYkhySPpMGymdBP5cEJKufjh4LiVQRuMQBwfLBZVRCczWhfBDV8pwMuYMuLSt43jKk5XMtvyvRNHJHV6Yq",
  "key1": "4QSxmYQY8HM4NQwtePn5PtJ7NZTJRZHKS8BEDAGpTEEfzvkRjxzpZukDCUHDgCWQ4X9XHuW4nhHs6ZVFzAK8FUZ8",
  "key2": "2hRtiWMRVU58asE7W5dmyYssxjq9FxfcXa2dGRYZvZFcV3EiQRvmEfFhL8DKntdcufdz3Bag81SMJBKfJB8hg685",
  "key3": "2vQyYWhBCoofQmvj2HNrHkS22w5xDo9d7D8t3ZTY2ZGUaopFfza9WXV4rqnSkToiEmP7SgnxVsrgnftcVgbFQLR1",
  "key4": "7NdWQKzXEWiS55NYJTJajs8g9rCgtaso1N2C7GiCj9ktxhDBLwnE8VZLgRicoMZRkCVdJ2Q64rWAEPzyuAh3o44",
  "key5": "5wjpPSCneVyuU9KnZ5PQJt81JQrKMuKmfwpXZVnhb1zT75Suvrk2oCF1u6WP1Wp6Wa5zNrDxedmHHmgGM3Qhx8AL",
  "key6": "4nLcjC3z8mcAHxLbNwjGnHNcXtGsKZGN9BmbyzY75hSDbor843cjtCsSoXUWURs1esH9oSKdzSBbEFmn11n2vF1L",
  "key7": "DQJ17snX6nPLpaEyq5Yj6g5pBfuGAtZkEVdG3RY3EhEe4beUZRKGztsew8N6c4xJbA5aDZzK1ZMX6P4dYX2vmXw",
  "key8": "33i2d6SWTLRciie5zymb6icbzpgBFR4cw2MmZ7Tkg5Z4RTXchUjgmwrjgdfsAwPjiMcTHoSQcJUUsZFReY9t8YyS",
  "key9": "2xJM6wjYqyAE7MSR7GpGSm3dRnw5kuQ1pHo8K9EoRQWHs8jJJiHmFjnLEZv3x9KcNZjiLuDJEGY4h31e4Lh342uk",
  "key10": "59MWSCSiarxZQEvjKC8vo9u2GFgcAYRnx8YXygqh5KCVgCmcg8KEQdNhpK1a84av9HpeSd8DZJvrg7PNEgaMa9oQ",
  "key11": "5THu9qXAkrLLcBJ9eq1La6iopjwX1NstNQx4J7UUjKqWwPy3k4F1QHRmPAG85y6SjRnQxawn2Mz2ozLyRUPATKrr",
  "key12": "5S2YnB5NMNMR87oDMhUp6sYkGA7rxtgQDAv86gPv428xJzfceSghbg87mrDZxj3iQ5zMjWaJ4VKo1FtKsc2oVHsd",
  "key13": "5E4a8qH8v5FMv7rvMaJJqY3eVagftHBK4WW4ggeStneNbiNrN9s1k6Q7xGzueiyb9uPUjPyCiGveaKjGbLz5Hq9d",
  "key14": "4YZzTnBANanrgV5SU7dRZUTF6nSJ6KZUsPa8J5qciUKPtertHsPTcitR3v5YdhHfDjJugZCDZrbCQ2FmQcaHJjcY",
  "key15": "4N64TVsGn8cwLPViJ6vpgANdy6bCnvCV4bnT325pdETCdjwbh2RCyuictQ7iQgey8azqg3iVhPKoVjqNtng362NB",
  "key16": "3oGAt2ZaJh8PToePNQN6kZXGeD8SFhGfmYXh1cFaPznmFFLvNzAKr1t57Ft9i6xnKSWaBtGTzWSL86dxNmfptM4T",
  "key17": "46kgNE4f5281aDJUyoRuixq7hoWxYqDP8rqKrhwubUX5Uc9NAafMcB1CrBmhghwmvduvN81gHBG5WuehHvn29ELK",
  "key18": "2XAjdSsmqXLMi4gpk3GeL4TZN7bKKotybeojr7uBeX83V4WiA85JkeeRCeUjruPZueGW4P6cdvupfn9qgQ7VRNDN",
  "key19": "2XTFG7D9vytF2VhAbBrB2wTPHrGmWg1dr35dqGLaxeznv8xNCxbUfCkguFeh3gvzoWg7rTkXB2qxenaSoHWu2Zgn",
  "key20": "3zJNTmxEWhMEnrjKTSehhgPwFGm7zq8Ubz1ZE1h9AQYxan3G2vGrtAav9LbE8ATQBq8YHHGYsQxMvYzk4Rpof9iT",
  "key21": "4QUKWuqDF3L4P1DQ2vkey28Lh9ZW5nXZKDbfPX7CFtGAtyjASmfnN8UY9RRrifkjG5ebEzSm52U7LtxyEgcYJfiS",
  "key22": "3tEnTfsxRMnPRejHH7cKvvaMjtyrrdiEy1oXiLdVm62LKV5uyoyAmTszhAF5MQREKXk4XLx7HPJoCUo5vEitdNJK",
  "key23": "5vb8JqYyE4uCFW9fAgh4j63wJHagW4ZBxUUDtjswSaSBy1jLhhK73tEsPMTkP7bYf6VFU1rt1LZJEpPgDcxiih3U",
  "key24": "29UXTXEA59PQT4JxVBYYnPHg1bcf3az5UbB8aNGYPEnPuWVyKZv3FFb3WZzRJgogjdCVZyxb1rrkDJmw7Fyd1pLn",
  "key25": "4QpR83gsneEon6xBq6gWX7HAW31SE3JV8fDzdthuuFzYdnwg9Ke8L6RFhPE7npoi7k2qYEbxDAA6ksVxBWhZ7FJC",
  "key26": "4TheD3MQAWiKP1v4iQysyBpzrBfPNdDD5TZYH2qKLhv38yUsap3rwRzbEYL7SuQ2L4tnnQjvZeVVnckBkJZVF1bo",
  "key27": "65JqqzoNmocTVmMkrUNttnRzUSBe8SnjEmw9KaXawLqqFFuMwck2mVnMLmR1Qo6jDzofMy9LfUhrDkt5o9WCuUcF",
  "key28": "46VVFcMQozkL5oPtieDSBX6ixefgyQzhS52WvCqMCXNdXJdvqmtNRYuXPbNh86aDxGFCmDXoC4LFjHZG1vE81oGV",
  "key29": "hgZsLkBJexvnMMHRQ6Jws3YLzfmTPbhYr5t5RGWqdF5DNvJfnR6wgTvKzjydxxUqWCXghU16gAYH8JiSkzWkydD",
  "key30": "2QiZKooBFmnERrijTG3SKzeSKnMHmp6mddhLGN9M47PxmLQbpVZL6hetWqnXFtQKdeDtgxHbnpos4sxynVaRLdcZ",
  "key31": "5v1gEC1UrUGBX924TD3uSSc8wYwSEKHtSvcVePERYYyMessZB6ZgEkNSktvoFZtj8VByyVTjMKGNvKvh53LdtcUG",
  "key32": "5pihw3EVWkou2J9iibPVXmuFbzCoxjXwYHbFCVD2cgT9o76E9qM3FsHKxoHJvWxb2zYTtPZAWPkhfgBLhRZSEEDE",
  "key33": "365VpbSEc7baQ87vtFQr6uraYiyYizhwvzAbXCLZbrkwCk69z2MZTSYm695zx1kRhLFgyH1ktf2TZhayAGETpvYF",
  "key34": "5KqGJrooNtS9gqL2NL6tQScK2oExbikaMFKSz3qpRPsch46nw4uPatxw1Jp9zhfwRUcWBEHP8D2qpQ6xeKyADLFg",
  "key35": "5GTCG5pBCGGH5TuCG4NnYRME5QCgTLCXGrbeP1vo4wsgxSP7gZ3b8zhULHYcP7bnNcbs2wJ3wHZZGzToGaUrYfH1",
  "key36": "356ZV1eQeh6FFBXB4Lubcgukn8LZZyy3CJ4FkpLsrUvqpPDWVDXWd4dk2Ydxop2gFfdmYQ9dTeGmhGMBNVXtgP41",
  "key37": "ttGbQ39sKuvT8JkKGLY8vW11LWtZGjGZrfSMh2U54XKHLfdqaWgEDCpmXiS2xVwBHMNeU4WyVYnFc3Uu6wXSDoB",
  "key38": "4Jpnj9bzB4QBwbDyiMGAZcXDJ7drcYGc7kCfCEnuLKE9ZEtb8aWtJpXGhx4R3LtYZ7KMAexKqgk48aasU8hGuLkg",
  "key39": "5JocoSZVC31FUPDB6DYhHrpTrRE1HCjMFkJv74eD3WyW6wtfqeEYSkUxzotTXJ158NGZtN4zoKYBjNFt87GpaPFr",
  "key40": "38DAVVioL8u5oUetQxrByxn8H8mHHRrz2uUUB8YvjFPRPLr4FLNGM9wLhrH3HLicK1P3MnzxM1vCRPkACu8Hyct7",
  "key41": "3R5UmwbbX1VNk43X2JvLYWmAqbrtFE55tGv8JDRJkHMH4TWadBywgqsDdL33bcdFdBucv7nwaWe6hZTxxmrazYBq",
  "key42": "36GMRnpF17sBPmkFfdCRBk31ueYCdnAcLJiVoSm1ox4DmFkxjUUkoui3Hy3tXvfKfkmPaeGHgBNTC7PZGwZhHkL",
  "key43": "4Rrzomgw25zUS7m87wa1i7Egbd64yU5fg5YQLLTRiXGgmHndKwhMfhPtLxdCg9ityfh5h4hxtXrPVMu1CVAvxdPw",
  "key44": "2vLG6Y2DSgxPnch4xs4djRto7UzNqUsRwL5FQntt1NbfjhjRd5YMdn4AKUmsMJCW5Wt1Ke5Xd6qAzjCvew8aNDyG",
  "key45": "4eBCpftu41XwpuyV6xHrnVmGuvESmve9SPU9SxAkAGD4KTCemkEsGXb7poZ1fMJoPEWvDb9ebsMr5rKzdRFhAMyA",
  "key46": "Snj3y2sKhzYU5cZtvvU3uj7NJaLZUwFai4TjrYEnmTTqxWrqGLyhx4tLzBsikDpoYFt1KD3o4h64AWpEzLZsHL3",
  "key47": "5o9LZaNtrjf4Bt6gTpNE1kyWPCim6fMxcyGhvT6VHiNC4Btk9HYhqEHKKPAkuUsJTktpMYixS2szALdrBP7b9HGc"
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
