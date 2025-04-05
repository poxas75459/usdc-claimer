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
    "2anLFqdxgeXwoKvZCVTnypFJUq6aanMq1b6FSmvymnrUwLiYcv3ic9Qeh1BZg8s1qAzJCNrqmTvWTtLa69WPyqeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eeyNm1oanqGB1afDi98hbpL87uMNmU7MmP9HSrnQpia4eNcCuR1K43uhLwGd8YGPgKHH3PiinMEyR9SecqoNDQb",
  "key1": "4WBKRBSvxUrQYgBm2sThVwcAfx23v3E772rpsB7g4JB6nNhAiASR1Uu8EN2NLBaLa6zR8DvnwSjzmuTJYabwpVSS",
  "key2": "3HULuwqgH2otNmA3Toj9TTf8qnyD8zSDGAgZ4AgovCWxj1hhhMHtPJXq7EYgKQv1BfTQXZSMabBqJhZgqULipMJG",
  "key3": "4eZSdE3Ri4pWzW3z8Tp56nRdr2UpJmPTqcTH9QncJTtzi29o9MbagAxJ1PWJkcQJc8c4Eecw7VtLrRizFnEf1Q38",
  "key4": "2jdT7yniXioqrFz6fYiAdh2YEwHuT1NZm9EQEf2E9QV5TLSNCb1BW9uUCPRT3rxma2gCz7o8e9wkHYnVehwMRvQS",
  "key5": "2tNJkQq4EmcQNTACXQxh9bxeTdxQLpx2ATaNLwsowwfYUCkzPMRGP8UjfrpxTrGybgSxLbmjuUF6XN5PoTRW1jxx",
  "key6": "8kH7PDsVx6A8i2aRbYGeNau1CiaghMfXvaa3rJgcEpFrF4GRWxyuFqNdhXTNwtwjnx8TNsfweSTuTzBDb9WBd63",
  "key7": "3fg6c2Wgoh4gpCAYgsuRjwVixbUWmJbwijowj3zSs9SFNphkVM4JcviuNu3qbi4ChDWsENcnwDFKqSZTQkhbmETs",
  "key8": "5gms5aptNQZJQEQ7jNx36AjYdmCgKLyK3q9yuhNUWPoZ1Kyp6vHyxaatHHnyz4jvWNWxTmULfBqDL7LHnvhvFWSe",
  "key9": "5HL2TnCQMnakgdomywBVTNUd4qk4NMQwciuKdAxhX6V9jcgmdAAtdcvzQt1CeSQ6ZWW2aGvDjHLhmTuidZ6ERz2d",
  "key10": "2BkPfHPMZqjC1vCHUozTkv5bU6uwxGqw8X69fwTSL4e5Nnw5yuECMugxwQ4K88x9H16kspXU9TuNdfJuxbeKHY7N",
  "key11": "SaYaoK3fKMWYjFxQk9SXzUUt6MWYsnPz9G3CkAL9kBdAbcr79hphe5Q7UJ7HJMqZg6QS9oyYeeAvdvtSVekmemG",
  "key12": "JPWPk98MLfRyZ5kZNv36k9bxonNWPdJQ2DBDWS1uf74ttUsvriFxq6fM96sEQY1RJcc95ySoBNAzWHRQewiwsUq",
  "key13": "hbh3PYgfoFCA8yksuJJ1e9UAQnd8YxLeCf6xdarEvHbmYFAiLTHBMGUZNXw2VwHCzEN24E2CaXsNtti9QbqRrwX",
  "key14": "3hdNnjo2RVzrhM3oaoieY2tA63mhByR3CSkDgXGqqAjYJcz88wmXNMCydFqW974GbRcmj5rcXYq1x88CjNRxWkkJ",
  "key15": "5suw3QpmmYgwH8qR8i67LanhsKQxJmLENhb39fRGNiHmuDW25S4AkzCLPk726JLbnj44RRNknogHu7YzNWLNqWvN",
  "key16": "276voqAfaBNa3Cw6pD3NEuz2ydPyQCR31npZfDhAXD5zkYYGjJXTWvESgQ5BWjtX2E8hYrBWd6az91F82znG9R1H",
  "key17": "2SChtqPuvQYv2KpqRSnrpk52etFKSucon7K2gmZyqTZKtuBYrxXR3FLqCDmBgqP3HoLWsNhCioPkpjtZ61XaKCNB",
  "key18": "55GeTTP6aWxFX8zh2ggbRxuj2oxRFbxHvGSMs2TExbLdpQR8UjfJ7h4H4nM2Zmskguk3f9JxTbYFV2Z98HN6iNhg",
  "key19": "4KpnpwZpVSCy7VLY1Pvxxr9NHckEAZihz8zm29efERUqfcWYuKjkJF3GNuWgmM8UAC8vsC4cEWDMgd4tNCPCFmZy",
  "key20": "KAkpN7AdvetJAN4XCESUCzFE1sayQW33h8HKup8ALgxmjkMNeyC3kxiq4u9HbY43W9AZapq3TTLaWbrxrLyu36o",
  "key21": "2aUikSRicEtDLjnkkcmwUFkgbnucyu8vFXfDWpfcoX9sQ1BzZAXj5M6rZJ22ps8Lk6rqMShLMVS2fnJZyfFKrcip",
  "key22": "2zkjvXQf8rPHMFCVDkATp7VAhuNPdZcLkFoKpCJSo6Czb5KVZsvWFEaCmPA5oCtvX5W4fwnKJCtzBmtD5T16k3LN",
  "key23": "7ooALAzdV2QnKWNQHULG3caDinwzmf3WpQoLe92HY5oURUCPJrwBsTmxfWmwq8M7D9BwuCNCvLn3dz5Nv8p9V7r",
  "key24": "bbNhmsLvj5HKEgZoj8f7gcanZ4zzQ7kpFgKx9wjrpDVbSDsLBcbkiJxcbpnaQAxdKHYmKFUjkXhmXiYVkaHeuU6",
  "key25": "3YJrPHxNVzreZugiAtFJuKQH7LzRdBehx3MMDrNW5SYfAqAwuaGSsZXbWsZVNgwkxNchDSKqCdYHEPtRHMdQEKjx",
  "key26": "5WQodP93Vz31BVv4tRJW6wgZqDVbTDcAT72L4YfXMHzYrYM1cmZ2mt7mfrZva2Zebybf36SJidVP3mpky8zqr7aK",
  "key27": "2mwzqwsFVebRFT5RphfwywdrpZiXmJ1JJMEKMMs8Pmh64eVR4fwCxmkUv26Ji6YajPgqEQdWZUFH2NKUGwAyQ6hb",
  "key28": "5AYUA1iz3rPgQ9UTeiHsvkXgKoYKsXkcdN5yVdxD9LvmFSpHVcb2BYMeiPd6HPz6en9rURC1D4wbX4CUg6wMM52p",
  "key29": "42v7ybJFD3VwTV8iWvipzSvzZMKgiK1y171DMwh1v8NEWgr15zDrwZ8hFm98WXE1gVEEJ8BDiaJdQM8WGdNrcieb",
  "key30": "pLr9KXf76dNNsoF4V6J6aKWP6dh2bzYYCY72wnjos73qxhYHTVUzjbzQZKcu5vS1mfzKXKnrfwCCPrjSzWpGdsh",
  "key31": "5AcgsnQTtfCLFuQphscg2gXTxHm8apvQBqykgbjKCfACP52GQDQLitf187sQNEXDP5KcF1JdzBZ5zr9zcvsSQnsM",
  "key32": "4ZQPzb2YVGHwBQhqmudsR5UDNbvbtZYCKwYvaKjyBeTwhabxWrKB8CpqitY13wXkWoZ5c7tCyxRrZ7iChHKT9ZY6",
  "key33": "acXK8Uv1jNsa8h2wg6KUzPq36i994cr9hjbzLuvsbb83a2a6Pg5NBkBH7AcDhHV9wTWNCtihGoeEDmBvRSL9Cmb",
  "key34": "2pkUeWSTAegx8KK4zMK7rzqZQkGM2xnzdYNp9aXvoZqedYndWUMfpm6T28peEmtBQ4SydWEoxDm98Yr1yX1jjTtw",
  "key35": "2GENtxdQXYswnFTQDPoeDWAqY8EzJfH9xQUNQj1JC6RZHCSG3AoJG3QFsBrSfz9qdTL2seKtfvXbPdfBGozVwhku",
  "key36": "5sWV8K8r94xhpSUVaKNvJTuUUkUtp5PJfCB12Xf5uqpxp8zAkW8TqWWYS6utjFDxudx5np8Wrh3ujMczq1NamcEw",
  "key37": "3K48MEVsjQAUoKTuwEZQzAv1BANPUF4Y7p2zYuBUEkJ7nFoctqv4FhdPkotsh6fGRbxrxpZSpg3oo5Ct5y3pg7ez",
  "key38": "3hXomMPcpiR4eg6Xx7scQKjoAgMKLHNnQi4RFeF1bTV4ncDcfZAN9hTSbumf48qj9SXknf6g64e4zY2VZYm1rZJa",
  "key39": "2vRmvnUJT2UDx36SKmp7sA7nAdPVnqU8MA6bhqwB3N7Sttb114bGJTiB8QvfkErNQUMz1XGjyq83nWfuJBYUxc58",
  "key40": "5nu6TdEkdNXxqH9q2VrP7G6EPrYUtj1gaEWq91HovLPuY6QSBZkBHvPiXw2zTpbDc3GrHPAfNPuPPmP3tMWa9JGf",
  "key41": "4sKy2mjW9mW1FA68PcS16JnVtK8zhMPhiHVoNhMixDRpy6Ffe7eiURJfRyLGSkfdd7o1L7ijPgoTisNAtsbaYAcd",
  "key42": "2C91MDS5xc922wJdpps9cKt2YAx68cWp5BAjtXscmPMw2cgdBNypRRNikQ9YRyb2xd9NaDKRY41vq7BHDCiPok3b",
  "key43": "pfBHAw2H9PKbYNjYrCghb88H7fQpEpy6hSN254K5uS9PR3H4Mex5HPHJvWBBD9KeJwRnw9LPVVLhYor45tnYFsu",
  "key44": "dSEfFaHkyEhVNPpfaea9FdZDMEbLHVSrqLLVoV66bSNPJEyurLvntQjE3MexaEbrHrpfhZQnMyib85yuoomtSFa",
  "key45": "66WM39GAK562ZmRYScVJVbwCTf6PxtLtGB4BH4BggXhmdzZVA2BrNzAQbDptzWwTEHdLxE8oe1eTRngCRdhsTQeh",
  "key46": "3Pf4h7KnvHT6KKKJnR8RbDr6aeXZAVacVnC8EoVAnBmsXFCgcYLr32Y6EdUjExnKvwToY2n2HDxrQQkDtf4XhK8R",
  "key47": "31e1WopRd8hEVcxVZLQcSM3x9noECrToV5fHqQzDPDVSXoJXHqefkqEohiBtEwXdiWp5u7AwDz4dabNFBuPdyXAM",
  "key48": "5kNfs9QjnL37TGv6TjbhyWCUGx2tikXDCzhcTiHD5R9MNpqhEp4sXKEbvgpy4nL5uJTddWBYiHHpBTWi1jf4JS8n",
  "key49": "kvVD16Cp369rMVYEjSKXEVz9EGpRaEy9E6NtgFc6MXHtBod95yQgGoUow9V3wKEzhnRoGxGdqnuZuvWup2kJiw8"
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
