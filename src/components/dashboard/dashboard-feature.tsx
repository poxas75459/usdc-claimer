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
    "3BRWwzRuiiuf4WZkZ1Vj2pPHA5VFs6hyHdKEkBz5Nz4Z6AmzrC6XJMdMtVX5F4RJ7WdhPzUDRaaKXz2nNR24kgbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfrxRj9g9dgvhTupr1EQA1zrqFMpVnS5RRS9CS1ZC9tjT14RecWnqUdri3jGynaQP7VQHfWmB1hrn2Eqzs3tZfq",
  "key1": "3PNYgnbBa8mkDxbbtxoV5wqnSox1Ecs9cVcjNGkJsKZUw6QiM7cThHNM3hoUrN3ZpLyq2raBwNxNZkH3zMQoDiPx",
  "key2": "md8totuzLFLgYwZkWAgC1VhoZbCjjKyivh4P3Ess8Ye9oFng3rks3bBtM4A1dd4XzkrhDs8dFDYxFEPNpHKYP1s",
  "key3": "4ejRp9cQ5H2j3bdqYzShr2CPwbWwNs4JodjnWUh2sFXagFDZn6Hjmw9AWTApRMt6nMkAcoo1RG3jRJkXmWJ3uDcT",
  "key4": "ksDheqWx1HZZvPcc2xE3XqB4NQvWAoT6F4y6UoAazfiPKmF8ivYHxuLu8ALcQf3CoK3U8R8365UrSd9PDKdLLvf",
  "key5": "4Yv2xEV7jxqCha5Lt5hbzhFmLJYTY5XGyRhntiTz9K8hMxRHXKsXxDLcxLtqBGHXXhNjKQnQu5aA3RwB22HMuK8m",
  "key6": "55Yv3pqSMYEwfMTwKPaaduyb94qjDoc6kLhyjjMRh6SzBo8hc2YfcMQZ2FkobHFrVGwpSbam9A5hhuL6p11VMpvr",
  "key7": "5MaJwrQBFqGrRFnVmzazVg1D8xyiLtnLin34otYzW9z4vE5bWjC2T1PrSBuBkg7nJqiMDhiXoMkeR3T3uDVdBHea",
  "key8": "iYtMxZFpAJKBBQrGfMMnrL4D9w97nNbX9gupWqwxWMkTg5VXQReUu9Ry5qQLSboy8bsmT8pXzjzTYttuKsrPfCk",
  "key9": "9dq3iCL47NMuaFpuHccE1Hf9ZcT6uEE22DNFePriAe17wDxvRT21nzRArhA7WwZMfeFwRCxacz7wy8Qc4KB7XwE",
  "key10": "czYZwnEUDHQTqEFfvNCikMuptyNkHhMbWYhbyhY4CeyeRrrvgivJmaFVdAcqVN8jM9QWgzaCpj1f5Mp2t5Xkowb",
  "key11": "5XRCDHV8fN5LGiZRHC4iuMHBGvVu1cPBkmNjGUhPiFGfFdzwP2BNVgJnwYCAHwEqcay4vFLyxBJowXehZTdyfMHy",
  "key12": "2iATqKd1Gngr6hVxSATiFx7QAofWKHickmjkYCfZJzekdyE2cn8Zmi782Q9aJMgJA3uFEPQVuDkstNbzDKCVtvh1",
  "key13": "3bSYSSi1wj6ZmQhejekJECiPGD1U4omiY65serF5yrd3oVd6pJiphzpCdC1yjNFZD9KsMULaVGniYgeqmED1fUZJ",
  "key14": "YWdmRyaY9A9eyVSCqrvXMjuPVrt2a7RwR3CEQy9YiHagGXhtPjix3amwxxsFoifgyff4SVAvGMnKmxisEqBXpJu",
  "key15": "51LMN1sfsjXakd7wtrWTZvcwXJgZZNy8UKSQeGwJ6BJHV3HrLH2guF74NaovFATgDBEGxUAZ99bx9YqvywAdZZQL",
  "key16": "hBsD1yPdpNhLXQTZhGtSjsyVdzeoE8TwGGjaVmxH7c6tiKbW96Q4jKaMWUtTwTtzYiH1rju53mnLQDCQbnDNSiF",
  "key17": "QMVSnL5SZbzYbsDtMwkdiaoxdFtkWHA8cyKd37rHpv7x6LCrrHdB7xpXaZ6U2mn4HEtjUhiTBSvLJAmbwG6YfBh",
  "key18": "3EPnFTjp1gkpcPnGLWwQDd3KZQyAwBqcm6utzq8p8oVQtCy5BUi15aoyVTbRswJTdbUsVe9MiwL6Gr8MopPipHwH",
  "key19": "3qCHUGsW8SBNtFSqf6nV3JhucS91bNauwdiQuwieqFhAkytBS4CGw4JPPkKZP17ay1QFEnsrha1jTLezWgnyHbms",
  "key20": "gKtvPq9ayApRKPXmrf5sQYV2FfwqU6xC3xtxhurnLjABV6DxyEFyqCWWrP4D2Tj6vFgLPs1Nwo7aiavra8dEn2F",
  "key21": "5ZNDnx6VBJ1t4oayGTSsWRPiWc1KWUTn1RM4fM4Nhp41gDN39pBan44EdCPL8sxr6VqUZs739mVDhb2rKEBh33gc",
  "key22": "4xWxmXysFGECq1hoo6r8Sc5d6Jrk7cHxNgeupY8WP3bngPFfuP5yQi1VyCDKkqo3WGXNDoi6bVU93cSeN8P7pHhw",
  "key23": "YhiVGZf1Rge1FtpAEBJrkiryM84dRfN8fbKiV4ymx1EgwVTVPjSBekuu6rp6poZw5RfUZC8eDqsYkYGwAoN3eGg",
  "key24": "35Nbdu7hqjhro776fUC9qFrVHgV7qPTdXN4wrPrpSnEVxmTkdy4KJjUzvn6k7aHj14mw8hRjqort7JsFQj3uUHF2",
  "key25": "4nTfp7S8i3SS4z4dVs5o9cxR6cfwZZ13GzoLn5T3tYxBJoM586xraVYkFXcqS8pKNaefddAuuEGcXFmnpuzcdg13",
  "key26": "G1jFirFUxegNTE8HZ4jvaX6bEMPbVuHzENDiz9v31QgRksn7jc84EAv796UgSDjhtkqLYaDY4J73SYKuLXnr6eU",
  "key27": "24iSeua4tySrKWLZo1YbhzWKKBrCBKnNa6eggfjg4PCJrFS1wVjcLoKFEMEG7PMuZkSxPy69sfuWEe72VuGQBMDo",
  "key28": "3CwJaeVG9MidJMM3khK6fTF1TNawrhZsvWJGfzezpRZEpJ8ZJh2GEQoTXsKXsYneBVR6Tw4K2qnLTjwzc1UsKubH",
  "key29": "5s8RCFSaD2qei58iZUBUAfmfj6Bu7yDVuXTbwptqky3Pc9LLCBxk6jwJJqYfK8hKwwzufQia2zymCpRQ2VPvazbr",
  "key30": "2t6JBtT9ZofmGmQn9CvmjwLQnH6YUxbRxDUz5fMp5PQ3HiY6NFRSSXSASU8jtZVXpAqrCmefTkSw7M1AFrYdTiCm",
  "key31": "67dq6gMUj12HQ92nfukputrzE8udcJ5tiBAzGzi4fXkG9GNDRKNFKkAdKKAzvjoVp7crx7JU1r2jMXyCCGQSDjdu",
  "key32": "5ufrVHgBgVP8ZDrLLJG7Tje8QnSFQEaWocNxc6YgnGFqc6eJEMggF9nSyr4zLup9xYVnoXVt6KgSTLigVXReZnK4",
  "key33": "41yydA1mLfnBdcxQh6NJdAtB87u3bsUVEVPvEb8877J6MHUC67FYPJuvuDMJ1ctFTGcfV1GdhTEbRSdSMZZbTdA1",
  "key34": "58oGcGkjZLLUZbSXsKjhskcuP5WSFobzyTaWRsEwoSoDzNHGPrqEK31pABXZAuqVTJjr4wVszS87T7jMxmxEJNFi",
  "key35": "hvAopGWDi6f9wGMH1dyEF3rKubA32pUco24LnuCJwtpzTjrbWMTtdudXK6EETFxYc6h9rFzKVV12sQdN9YKyMyS",
  "key36": "ytGg9W6FQ1zsXYeDi88fmkAtrypevZFvMoweQQ5sYK7dxjT1dLKyh59LcFVE8ZHGddaxUPkoFYYHH8zsXP4GFu4",
  "key37": "5wLCHqvoUQaEjLKRYwfDUUc2LvkFt1PHsaH9dsMjQZkV7k2f6mkhsRyBTBjmCbqPpEFqmtyYiHLHTpE5Fq2R5tfj",
  "key38": "5JaS6uC91ATfhLc4VMsNbaQr7dqcVM2iT1xArhHCpcCFn99Fb37KGW8JtqptTKdqxr7NS6H9h8zquK7zA9NjkLoY",
  "key39": "YCDkR2gYczSPS6Das3RFYUGKh8aDnRhNCMwuP2LRbLTS7aQNDFs7oLSocPV5qoDQQtRJtJiZaZwoz5G787u7o4x",
  "key40": "2UaP3P4mNLGwqLp5hwS49BosbaY7MSw1Af28R1iwvzU8dr9vQXsSW3Emm1RiqGF423VaKQkpS3dBRPwc4pMVbx9T",
  "key41": "3N2AwGG1qqVeLd1ZZWcR8uWV1Rmqdp1VPocwcRR1s3T3m7GgtCfhHmYhccQSeKPT3gYHuw7ZkA5ANY2usk8k3p71",
  "key42": "81bHdt12EbSMu2SC99KCyRLHM3QabQaeMP6jwyDUQkMDMzLHqkBq52pA8hzKXnMfK4gWHNVLuyFJ3MKYyNxLfAH",
  "key43": "3uoex3Pgp72Kmb4QrmJ48QjaDSdVZyyyFGhfnKu5C2LSfnoMVed1qey58dqtfvHeanVxorQifLqG5mBrihiR6B4U",
  "key44": "3MzMpDBqyX1BEGmhyPXBVLWJnfg2MeuF3jSDj21mrSPyGuirYctvBrb7XLpUXrdHpHf66ThPDu7TCET2mjAchGVb",
  "key45": "4gwzXKmu5mgwgJccKsrJ4yeeQxs7nTJQ3jRLqsuHrbZMnNEvtKBXcbnSSeSXy5KiWbvgmzvzcK46kmwDkyjck8r5"
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
