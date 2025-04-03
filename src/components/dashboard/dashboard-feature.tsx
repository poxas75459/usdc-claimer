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
    "5F6LHNM1gn4fSLwBrUE137t9vwGbjDxyEC3juff53QEFfpi4Cfo3PXwfnjYi5dfNvaxMtKbgSH41BGvnkyyMuX2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f2Ni7ZKZgMLqNkwrCT2Ro4BiGaGGNanpa4zizQjTKPtQkMk7fdDEwXZAzarCCwjk6UW3pSXKAtMQ5BEnfNY42fh",
  "key1": "52xDYTJqFV5tkZFgkRHKqgMeZunRFf7rrnz61ToMavz1tfT9PLGKEZm6ZobA3MRgPRLBeE64jiitwHaybQbXyfGK",
  "key2": "3oEMREW7Q5NWxVgScEuxqnj2KYuL9mnrjXxqGDkjyJUKiwTemSPvT2Wgva6LkPks5z2ReVrTUmcemZUDhGVzM2Hd",
  "key3": "3knXFeCoNRiUUDmFwp3mJ7EEyVD7uVmvNntxJ4LVugLoyESHjLP5i3fgoEzPMQNNSTnyALVN5pmh7T1TqVkf31ob",
  "key4": "2CmwkC99yS13MivUqNnnbpR5LL3mTBY3mKiR2n3EbkTQjRefnqBasL6DFbU3Yz34z8F2YjvjBBzHcV6fwhEWbtiV",
  "key5": "5CGzVUsFuXeNADEbtMWuCZcLUuUuabh8Ct1QWzbpv5kv6eZg3o3FYieiJqHb1zuJsR7CSCqtiHD9iBV4GJUuwr2j",
  "key6": "4kPniBEzevhE1X42N5RQi1FXmsHwf4HKm9mVTrjoxKWFPFzpkqaGvZYPFao21CH7Tm27uHTTWKqFYcJXRALW4GG7",
  "key7": "4maQvKSEWfC2Ee2pEM2YW7k2MBX16uaTvs9JiTzZ2WZgyDGa8q4U8JMN2Zoy7DPtmxU7cayiZJsSoUjwwmQJXnC",
  "key8": "5dGAr4ZdVksAvAcg9d3SEv33qq6DHngD63ovrE1KspHsmoYcsok1tj93aydqZmcM8PoPjKYpNrxSYiKWarFUjGyi",
  "key9": "2mXLQ9ehceR6EVTjC5zgTtc4W53G4tCbcXWntSHu4TwMzocHk9tn2NVu3bZjHpEtXr3ePAPhUm16at9FYEtRfqdW",
  "key10": "5PPKo7xdJL574PfG8cBLUbB7GXkC79Nb4rtqapo4CeqyoFxqunezRryxb9gUrnDz49Uyfm68ztX7wPdyKtRZvZPQ",
  "key11": "2rwcXwxWYRVMUChaN7DsAwk7ye4NYs99r8vvhNexeHJ4V8rWs2Wq6PWPqESkdu3PtJfzVJBSh2Edpsi63NtnkxrB",
  "key12": "k1P5ad5jrtBkYgae8Qo21t72Mrr8xL2s4YeCYwbJz3YuV5WKgrEGQ48cuULwAqwFyZ7qVX56ZrL7kWnEjrw5qgc",
  "key13": "3k79v67ZMBQhsA18ZuHWUpFkcHSd9MidVx9j47ywKD8YoWMmgZEqCMEKM6hpjva1uKfiQN5MeeKc2yf25JuCqK7u",
  "key14": "4sfzjUXWQyfLXTvP9STnaAmn8iRC15hFEB9Ek1WV872CkvgRpwWNqH8i46PTnLP8wbtnAgej4YNq1BaUB6n8CY4b",
  "key15": "62phV2ZbDshCSqbmv5GHu6DwvBDjQC6eFmfsy1avrFKjdQeUknGJyk1toF4bCoxXYXz9hopsYWjqkVLBC9BNqAVR",
  "key16": "5ABE2KjJuZ5Y8PtE6qLwAW7XHwHxhQ1raRWVGkWDS9FrpJC8oTtXs2hvF6aCXdUGoQAu4D59YxL5x9hY8Ak8mUBN",
  "key17": "5V3crY5j1L4Tf7D9eDivKtpv4DpNibYfLxQyCxEJYj3E2CKgo8q3wQhzM2XV32bbwWEjszBEXKGDz2SWqWAQL2HQ",
  "key18": "2qu4ef5oc1TZ5XF4XJDMBc17ef27AoEbrUTf3Zhq7gMVLdVrvA4Sbdr18eqXo845s1ZHzmUJupHzkyYkhgV8C1do",
  "key19": "5nwfkyVhhA5vuJuJ73HpuHLpx6zX1yUyZNMigk1HDLQPbcVYr3VXVYTX6DwaVsxhcJnDwbRtAASdXWytu41zcTb8",
  "key20": "4dtMaFfPqgc6ScxawxE9yrexssTuULYm85m9eoofiRBeXFP9bFVESEnhuL2E4cuRiZM4wgQxXHs2sxqxJkVnL6Z2",
  "key21": "2ibKJpE9As17mj9proNM6te4E19UjKMhR3TRQRTQcnkgi1kfsr7GcWtFZAttJ6osC1jDh1ZFdMKrRDYNNVrQQfzT",
  "key22": "5fsbxprgCeSqbN8XzG9Y8WLHQTPWiEC7yXYTQREqyAQdq2axirLHVuxzZZLZ325QHvqgBytVMprDsjjnrhesME3u",
  "key23": "HJfSNS4BZthoyxbcqt7PkbSjaPLwg89i91fMK7Uk2x2zWRu5pAwYaXfZ7omuUC5zYd4m2zESpMftCQwyTH7JETC",
  "key24": "5FctZLeDxMrHvENmT46TT8FRFBimoh5ZWotMHj5qCXTEHwKTM1g16eZEBBLXSZPYiXx8fbGbFatS5Rsq3Y5ugPDa",
  "key25": "qFEBuyqcvCWrGRfnKgZJALgHcdGM5JdqqBshHQPmgzTUSRi38DpMr6MsvwtfgsxAdvsVnq5GqGiQg7ZBfAE4xx2",
  "key26": "RMPhqWhivQbjxaSAj3bP8xTfugiRbgHi3jwi5WUPbXtzu4JDEbCxTjF3dAxLQ2RejySuj8pTczjF97sLPY2G1zA",
  "key27": "62LF1ESGqzxaQm83WivHNa2bJq4ejSgc16wog4Xaq6Vwqh5B15SgJNE5ieVJvvBGNS9mv5SqndAb91C64kMnhLBf",
  "key28": "5F5HLhsM5JNmXP8JoNiDXU4v8j6yA6pYHKpWwiXRsDEQ1BPpxEqSdseR7TfATrycqw49ntzVwhvRUmTLZ7GQ65Qk",
  "key29": "4Zz2VdEZizqahmBFs1iXGoAHMjoGabcVjsoobTAKe5wvZrNygmYw6UNJJ54SgXyzmLCswHg5bh5ZHxb53hJLA7TX",
  "key30": "4VatAdC2FMeZc5PCRiG2jroaMKkAwpkDA9tPEkoHJnTJ2VqDhBudwUSzNYMsGTz4dE1NPc6vGk51P8tBPVfiQfna",
  "key31": "5nEbeKEkLEj8TGDs8V6DyGQy2Tke1uDH6hJVdN9n28aw38VJuqeY9RWEwLaRdpWxYnfdtUpcxrewGBzmZ8p48c99",
  "key32": "2wX36ETibmzA83oBEqyRjeeJpfNudGJbJ7heFFbaV4serA8b2yZgdeq3dqTrhM3NHLCRGW9w3bMFg3ngLztfdPX4",
  "key33": "4xtFrm3yQtrKKkYXNYZe4wNs1qP59dyptJjkPfyrsybCP4HvM4bNhRqwoZNHb2FW3dvnngZymWx7hKyZiqFh9jfZ",
  "key34": "38fAvDfzEQ4sqeLNdcKedABfkM6dmiUy95KkmzTDGsm9nG53qdKA7gxGNUj1J91tE7XpAPdarGHmQN6mPXftetbq",
  "key35": "5ojgVP7D3Qc443tmSibib8BaV1Wp6Ej9pi6f5msffdQxgDW45CXtWMBCmcFxdNToSJSTQQmrSUNuUtQRRE6iEkXU",
  "key36": "5FMReSbV4UjZbMqDqUjVDiEUxu5ZyvJjBwhY55ZRZ8ogKQaaanEKoUv3fZBKt7htK4A9yk8yMiLz7yadbZaWWoEN",
  "key37": "3BaKgWj5DhFhnEbMaDTKT5LJS4XyzcaGZUwtMeU3Jns4dL7iZqk2x34Jgu24mayTmGVx56uw8n3mhQnaMCZwFC6R",
  "key38": "5j3hgXvbSuPJXujutMGXjRhmLjBuBAyk1JBzisxmTK7bSPM7r7kC1jhv8Wigb7BntiyrYH44XG1dF3yBMocV463R",
  "key39": "ZmfEckacEgiNBvLz1D67j6EA27bUL5TLKwVqM4nNdsWCwFqx18YEbVyuZFYrGBF8vxLsF23zeRBQMc815q18E5H",
  "key40": "8wW4TnrB9h7iwRyZBQUrEpvuRrGjgHXCidiyPP85rhFhWjt494sPq1zsUva9sBbEFh55cSUrZFb7LkaWmJ9vr9G",
  "key41": "2w2cTvJX4eVJe6fxJGnoaF4vx2g1xBq1zhmxhvTgiK4EjsUBof897NHFS2kRpMZvHS38p4aiuyqPrtfiSWHGp6MS",
  "key42": "2uokpwzVwnNCaRrTtj5MtHyh4Fy1QCn2C26tNiEFFBUDN5Uc7A8ZqMfvoN8QCN5Pj3x6saifgnwkU1UPYr11j8Ew",
  "key43": "2ZGM7Tas8jWc2Acx1T6DYqa5jri8sJvtsiPVYDCzg15okNpQreoCFu55rYFYhxzmihXgw3CT3zHacxiSFLZid98z",
  "key44": "4CrWu1YQnuSrKW89jULkHRHq82WQjCs3HtmZn6yrB2qrKAGSSL317vTcYFRugoSi9PuSzmYgs8J7zeRxSuJDqVbQ",
  "key45": "5qByEjAde6PGE9unKrEaR1CqgdEWSpJKSUJJVpRmNbWSuDb5smVAf2UHjRix2j6ULseVQC2sJYCF9WeXCt9Va5ZU",
  "key46": "2RZhDyQqobRcUnuKw6mbkq1EXMQ1DcJdkjhepcSnLSuqAjPDKQD6GyP1Jo55j1WSPQev6gkW5dJKe6CZZo2VafdZ"
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
