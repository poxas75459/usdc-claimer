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
    "4sUbWDtfYn77pBcqhV2VpZt22dHuZ8rG5gj3cW22EfdErjTQS6SpPtGPrHVcCtay65GmfWiHoioW8ScyHiyXGjxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32htVekuPXBYrCbN5yrGnDJMVpmyewuE1LA9p71PhWYB4SaQB6YRhG1tsmJZq4M2ThjPxdtZQTLTmaYVQLkD84gf",
  "key1": "38b3NVxA7DntpaEbA5M37g5KoFi4CF8h7HK5jUHEd5d7TkWJMfiwZpm4SMLAH2sc7Um8mwJE2QM8Z6fCL5GARmmZ",
  "key2": "2rj88jHvSPojE6JxCWAtBXpyvezir9dUd9DJcFBiAuoNcrKuTixbpBLNLyUyjFCy7VJhB6m8Av2zo1629vNKaKZd",
  "key3": "2JYwnnPZDVDUDTPDmM4HLkAphysdcbHtwq8ty3RNWmdxYXYn1a9YPqbHV1fVmoWz8G1WQhXhzNSRQWoPMkooeF4C",
  "key4": "5wmHqtzwimnHAbXyYdJFbWAgWZDhQNVhZwbUcoT2KhT14DboTHvfMY4bDTZBX5gzY3zuUZLhMBhr7ecaGDPzmVFZ",
  "key5": "296MFT1147B89gS66nU4BUKZC8oXTSJzxQyLTVNcX2rGoWNuwkGPQvQHRGkUayWTQLc9CMK1a1N9Fx9HqoGZHyMn",
  "key6": "37fy3FsZAbMfnkqhu2ziesjJb3qCbzbDPHEmFaN3GDLoUxhNLZXWpX8uqcq4JWnULUC6HTj6iKzEkGGieWEdidj3",
  "key7": "5dMuMYaiAXb8Sp5LcB8Yxorz1HhZARYnmyHuKmonPaJce7gQPqvjM3j57udvcAyMbwzsEp4FAqSb3egyxCMGGuzd",
  "key8": "5F4kXMzhHg6os7tDpPnAbVZxAgG4P5zQUMYWV7PZXVxFr4JmUC4A72Xo7k7wRf1wMudEw4eXdH1mPps4W761kkb2",
  "key9": "2otm3rHPRYzdMeswAbSMJ4im5MDRANXYyH26xeNoYJmzsDArb3frzsmaZ2LBU5gHCJ6GKNUHxb5Q3dHqwPrkxRLm",
  "key10": "4c4tuWrm9vXccNxufk4yNvUwnYs6jQqpTcEzib5ncZhiSsi5kSyyeskCen994VsrPs888Dd1XQPHhukkDUhoZ6BY",
  "key11": "3hf71qtLCSJfbm48dMbRTCx19Ji5xPvo6ZbJ2WjPhoct9qQrUR7DsbyxhLPAyKgA783dWMrRnpVJVrH916o6up3g",
  "key12": "4k7B2qCo2rYhD8zaJ5cDLV1GSrdPA9gLyWxyUvkTuhNe3WQ9ysE7EZTTPaLYbNEXjEiHBqY5Trx4K1aR3Q8VV4uA",
  "key13": "F2VBQkG1Y2NwsStoGBFd5juTJTKu1MxPoX2GnVk6SB8ZQ475zXQVHK2egnfHc7PD1SRbtLfKqQFdosrrNthLTwG",
  "key14": "28Xvpys1quVX2E1ENW9tv6Sjtmv4Z31GfzHZCdh1tCaC7pnsYZYSs1mTW3FeB2CTbZ4Kbh7zgojPWnaDfe31Ajpm",
  "key15": "24UJMfisKcno61bo6bRhGJG1FVKLsQ4owGE2tWopwbQexU6Vg6rxXQVFBXQxVCKcUhZxoJE1RNVxAtaFb63Ly5Pe",
  "key16": "3h14sEtSvv2ATpfppttMxkT8xi3JPdz8KhCqT2XQ2miLgSNLb4cAshk71vNiSyesfjAZyJBr9KLbGaAWnsbL1fQn",
  "key17": "4eKE2P9p3rgcGu8xGKpm5kVfbacpyiZ1znKj7nMDRoMQXRb2zEumkAQqSWrs2k8nX5PrVwHmwL7q93EQmpjv54LD",
  "key18": "4JXg6tN5tNaempHK6P7qi6PRFykp44xNHK2UAgsPqn7ThdgvefStDAB8vmg94F6vCQ7Moun1nC5suAqr21xtQdJ1",
  "key19": "afuj9w5CfbqrachLdRUvJGofnj5i4sBUGWLpJUXzFzG47Pbv7PJUbmTpxrgEUqpQ7SALajDcGKDgZtEHHGuAUoe",
  "key20": "2uAfKxAHMBrL3qak32wxjisp1WNCxENyzwohVJZyNPY4Zjie2szdFLL1nFt1A5tzVn6k5Pc1jT4pHznHvKpABiea",
  "key21": "4xeht9jCjyTRrBqJ4FwJyeR5zBDumkvm37ZQEZY2x7NkjpwyyVyCNYj1FyfzWZcTDCkAn9ujPHvM1XbNC5m3devm",
  "key22": "4dUFBkaL4Pt651ALtgsygVmTGGUEusrsdgZP4h5Pm4hZnoAT9SKeLzgQb31D4MfPsgSGxKb5LPbx7js2KJ24ddyq",
  "key23": "3Sp7NsYGA8YzQCSqJ3SrL8KHMvDSbiFja7UZtQ887dKW2a1bAAzs2Th5HWnzL5U5AvgKPnFotGv8FMaacjndEeJ7",
  "key24": "4numQ9s1rwTzCEkLvf11ZsxB1VbUGuapLBPY1xL1tH99MjPesoseCUxKWf9xizJoZWeMs5phxLWaVHULQiVbt1py",
  "key25": "3snXXLM7zhA9d3kK2htC3Moxbaits1oe6fhaDgUVnR9cPp2KhaWUQxvWEwEj2FVjEafr6kEEitw81idizju3FPag",
  "key26": "2iJGGS9xuiTQEKoLawwZna86VkHxmLGDbf8hsSpRWdTYVpg8vQiY8oqaSGPG8YC89Xf2HYNEC6pSPgatb3SRuRaS",
  "key27": "3pbAPv67Q8ss3ra3j6zu6jL5BfbMLQ6so9jjHDXoEotdoDiDQg9dSwRroNBmLYEAcRWwjmaAcwjmUcHjocBnSSJR",
  "key28": "46wa9Poowt78Rkr7eYBmWDYfMKzYT9CLQhAc3L9TrKvUks3DnGH24q7dGXZuDsgeaTNozXhmpiktFdiNUGwyYpEN",
  "key29": "2vtbcSHvCdMExiC1XLdn2kSCaCzpw8yYpuSnPhQQaNUSfFM1fcjErepHLUrNvwAFnHQzbJZxUwVSi7Yw8wr4cZix",
  "key30": "3RojSAQdcmM17rf1FJ9Q6DzMc2jQ6FSF9o6QfbYNbTL1J3B9joE9UpMDfJqeLrQvbQMjrX6JvJTqbRwLpnS1C76B",
  "key31": "4h7QjXuoCjSMfSveBSdvi1E1ND6jnGSihV4hYkDKHR3Rf3vRBf4bDmg7vj4sX9TJkEsx9eGRpmbs15CujL1iZR4o",
  "key32": "5vkMUXM1LaWMsXgcRJWkndYB3Wnzr3uBk2Fu69oRuF5iDUi7rpL2gMfuQzsu2oEAx22L4fjZdcTxvCe47MHfs7kg",
  "key33": "3HHWYdKtJTHMcrwx2XRc2byAnVvdTLzYM6HdoNjbcMoj6TDt9GBwFxfQ6b6sheVvHCVfXeKvSWY9cKmngSn5m5MY",
  "key34": "2Wt2b54yo31RzXCNVDRUwRcJTgAgAyxKhxUZ4s1pY5TLGvKFgcMGjGdWM7zmhzGtWEYNWgdMYfDxjJoccD9NbAWp",
  "key35": "2sSfFwVCX5zTnbxxni1hRfM6Pen3UsshBRLjDbUEXTsdeZCu6wR8C88tDGfdt8aahKqQc469ni1LXCJtiG32SYdW",
  "key36": "4c79S4CWaLdd1NeyiHVCPedsednk3S9qxYixQGekr3xrFXfz12BdaCE4sDb8BTmCJejjwEJvFnmiHApgRwKHhy5r",
  "key37": "59JJTZUyAWPu2s2GFyAygBG8o1ksrVAFKH3fakV6p4R84fNPCGz7E4YgWgmJUUeonBEQznBCTwVCWqd1WN2N91ip",
  "key38": "4JTTH14ZrrC48UudoS6xkhNoy87SW9h78Y4raGU4tw6B2P4uAyQin3r4ENHsG9dgHbT6e3weHbU4EJugeetow5nn",
  "key39": "3xzZ8xFHCKYYB6rDaDdsW3TR8ZkpA1vRE6o6Be4Xeo1hRow19kFCGfCnX89yaBcm1a1aC6twsAHbLctChfsLfhJ6",
  "key40": "2WxCuxHmxezWXbUvMnQLXQeD5fRGeevuoWb9TzXBgvppVfhYpTjRg6hKXWPiXZCc2pkuvxM9E9x4VBRUu55pWWJ2"
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
