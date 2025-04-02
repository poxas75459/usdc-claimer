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
    "4mevXToE5166xozwc3XgAyGYFpcg1RRSa1VizMNAgdXvPUJTBEDt6yLZB6yjSpJoqJLHAJLsXsSeEk6MJU5136fQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8avtjuFEp7P1TnL7uR1BP6vGeRqVhhgSb1acZGoVzW4yGtS7akkGUiAYrRF2Z1kLECzCjQiy8CaTFo9yEJYQQgF",
  "key1": "2KLCGYvnVRaLBLtTrC1Vbwnop7KZDaiwNcJWTpiYSDirWhGdvFe8ES1jZLm1DsjqXhUAD3A3JSodomJuFH9yaUmd",
  "key2": "kyu9H3cjHTCK8Zv6C3GFoihbr1FtQMsMFmnLN9KFNH9FD7BXHRv4nDaHb89MxyU4h7zFCSgsRSWhhdWr6Jdd99F",
  "key3": "36e9UqcabeqenvHA83zzyKG7TAyU57Nz1MMeUMQp3FuKT6dugaemGaDEJNWoRUHCUuQLRvbPbnocfGpzBKFRYr8x",
  "key4": "5Ur9bZAPDEpb2WwfQqTi4TwKsC6Crw4kg3nzcSkaKEodjghySeRQJoCFpYLdVziwBnJ76gCU35bDD8f2vdfNKrw5",
  "key5": "5iMitWp8UHiQHWbT3mS7fZRcWJiH2WHFBo8BP9HTkvNDhe74PLn29Fnarpg4gH7V8RErdQkhc7TrNo2XiMxMD7D",
  "key6": "MGUi53Aoj5kYW1gHgSSsEBD6kWSeudnZcCyzFXMuVT1iUKtwkqrvNhoeeYPvke4dXkBkKwDGFm6cehbygfhahNP",
  "key7": "478mzpGDPLw2e3nZGkx8Z7xSzrQ6EqMCsAevHbuqeMSErwB29TQJSpwNBw61eieSSAdinbXLZU6AJJb5gsNuwEhL",
  "key8": "TUEk7Z2dnFYZkQKBBxhdvjQJQQiwWjwCPegDt3Km48rn2eh2SapQ8QQEkqAmBErjQc6LcdsdzaxEac9RqH8pM77",
  "key9": "2xrfAirm9vmyizoAxNyfoH4oqvDn7i6EqM3FfYFfpDk4pyKVaRYDEWLtoNLAvnqf1WKHC7UUMY6XBjevrTRSnDCk",
  "key10": "5vxcyStmuvbwD7hKrJaUdhF6EeRSq4nkNCAZDxViitszQ44ocTHZctET2JdCyvDoUsYNPeuVQdaFxxsTTAMqmozW",
  "key11": "32jrFFvgVKBT5je3CbhCymhpw8xjZZrgLm6Hfb8Ez7NSU8cDDMwxUdwHKNmsEQChS7AH4cke31itZxk76S7kkNKa",
  "key12": "5FypQDFWBEWtqfr7Xowwo8vtBo2JdJMUtJHgCiuDwQKKxarCuRKTRGqLTGgoiRpafGxhX6V3bv9L4Nzn33XwddkN",
  "key13": "WQ8YNDVtv9u8mYepN8t8EVAt6LNmBygi3HCQaX7nhwTibWTqwtj7sxQwkji4s1yGts12Q49gXFboWQLJGd9FuY4",
  "key14": "4y1CQ8Zhk5Xd2oWPuZpwun1bA9kJRFbiWGSrpEtMbnHfn5VHWbAbc6DBTKK3c9PLQmBw8MbFTQp1YjZSgxT6fZi1",
  "key15": "agVtkaF2HwSyVEzLEkw8riP7zSJQvGBnHQ5izb1LQbHZAfKuF3A4FAkCBBxFRuSXFpBBz5eust7DhNuXk5uEaHx",
  "key16": "3MSFbjsKGMi3Jm4vaCwaPZpTc5pEHtgeZkPpnxoo9y9Bt5HAda76tp5wQ3FmYd8AoUJdwk5wSWhuwT1beE3psmda",
  "key17": "KrAZw5xq9fk1gNBg6s2uDWLVvi7JpnMr7y3ATrirQLAvtNXtqZ7Qi3TWBbaHWk4ygcHT9u9dqako3ddstckBSMs",
  "key18": "5TwbFCETzaPoKhSZiZiRts5KzWVhf8NcL2JMM9eRTqnNpthWLXc3DJNGXh3fYeqzzqs5brtudy7zaCbUqjWmEqKV",
  "key19": "2vzmuYPTqf1b8ECsyYpKnmwu1GnXchA7QXgowjcJSR55Y6iv27BXK3yPn3nbjwDhXQti9mbjw5NGif7XTp4GQ8z8",
  "key20": "4gvkJ1j9nuu6y32JoMfbycz2q6grJ8GFyp1acGDjPux823BLTvFrjcKDZ1agDLqLEVZVwKsQyeVkwsmANEZTHry6",
  "key21": "NL3aoH7nXkC8AuTH87Zf4LhprXzdQTvmt8WhHffmDJ3H2Gcy7vU6Kub5qv8xedpCbNFFxfTVyP2ynehsVstBP8u",
  "key22": "4BM6GUUR2WouBCZMaozxJt2oHSRJtccCM1SzGmbHByTpXpvxQ18jnjp6ptTLWziRgy158dDZ8DumV7tnxoJGWUkd",
  "key23": "25zrk11eRodKkAJTyDiq2PLYEURMzevT57iiDfGLeraHaeBKn2UFq4cSvwQCE2uxQdVQDBytCLxboVNTAWFCxxyB",
  "key24": "3UCXf1Rr7MBF7fdRbXcgRSVREfc5geZD3zNTsCzqTEC7pgPkxZuTR624U7ep2AwsRybPJVqfhCMLPZrt6VgETA7V",
  "key25": "31GuBnAXo3CksbkLAH2symg5zrFhHL54f7UBSbcdfuCkxece4WDnH6WdtcLeFDJsh4uwptHeB4ozjjoU8CmFsvxZ",
  "key26": "WXfSQHoQAnMrRLqcMFXPBbTUWqzyKheA6PQ6fHqxiKfdCJXvFKL2bVhFMGUENjfAxRrbJtn1jpaZ9fuxnRB3dZ1",
  "key27": "28nfmVVk7EfB7Rw4EjGiJ8zAhqjeBBrY3YMdjU2FZkkwEKPnXbokGBNEHaPK3cmF5SnscwFC6eJgAwkPSNj2uqpy",
  "key28": "2uuTkRnrFv27GzFhimS8jqxbZdrPbZvhSkJcstG9T7m2yr8tCaNdYrz25SEcQrKK4S6diUJngbwEud9yrpCXZPWq",
  "key29": "45Czg3hreG8iYVFLtmHzJUXBH5qKGBwhFDHDu3emu3f7cULQYWBJG1tZ4YBTnbJdETCNEj1Aa9LWuJsVX8SphqDJ",
  "key30": "45Jpdvs4SFWFCQpBWGK6z8ZASaXXYvjojmMAX1UF6fRMK19QvNZPdGx2RdvuyR5y2Zqto9qwCkF6LpWhxnAbUa8x",
  "key31": "2dRRYKUmbQu1XhXUP251AsCmSdjkMUeN57rTypGdkCFpJZ3G9kDPeg79pc3wUPf3umEPboXDaAwcfPfP9VYNrgxt",
  "key32": "3XxP9GLWvyQkdy1bNakfVrKNNYzGNqLXdyirK1o517qhBzgwUFy41o9HzwnHHkubmbceTpTvrqpb2gDEACxywyhM",
  "key33": "2Zi1tryLzUAbGCDLjvanrU3Zmg5BXUfqkhtcw8UsrG7H7QTK3xDia2tEbmVKBZe7weUAFn5fFbW9b1ot6X5aaBqS",
  "key34": "4zsmY6zM6AYMFxzgteFdUQCHyyGEVgiM9V2G3y4rSFpS9cFu1vNqW3AUfosQ7Yezscy4YmCBmFQJ5PUsYULjecU9",
  "key35": "stqnKJLHHCt9vWAEkNwQYwYc8hsqJFQHCLMMCYHUsG3SNuo5KA7MayKhFo3JFLkQ1TfVRMULpBY7bwdVLJQJPo9",
  "key36": "kWq7be2XSEt7EzYr1sDbV3i9heL3t4QmiznEYXup3SqsWp17H162iEy5aoms2SfgYVpUxRTRnHZb7rgaVQ7ar5E",
  "key37": "2bBdJUGTGR5jBbeeYMcwaADwH5Cwx9fN1S2AWRMih1AWUWRWNtWLV8Fy4zHdfNJn8he7pTxfjxz5SGJobzWy23wr",
  "key38": "2igtTRN8rXHGMg3S2scDdjXJ46GFv3Tdnqrzqf8wsVSbk75769JjxKbmi38t8C1DpqW2iLEwkGuusqMV7zYhzhHj",
  "key39": "4keGb9KBvNCHwBdrbSUutxBmxpG5RVN1jUUsn5RKP5tgapvd158FGtaC5MgyAsu9UYXTbJgtiZjHU1hvaMVtNZEy",
  "key40": "2s743fGCC9rq4fYd5bHjLuZ9q1EsJc8iMFoKGeME2SSbHYszAAdgoAuRLqmRaF4Hr7bsBrrMUGQim9KsaveRzbsM",
  "key41": "2FEYSDyH4Gx1JshCy6iLqMqp54R9JCerJqSCN2TzgoAxatosgJ8YW9VN3stz6sf9om7BSq9iZ5bSGc6GmCx9TWvn",
  "key42": "nkN9KSeXi9UEP1D15aY59kw6LrsXrwj36nrMkw9Sk92NGDhja6TRVpHuo2XcVzen54osUrSfCwzL3UnVZ9Ld21S",
  "key43": "46QvVT8hM2vG5sKC3Zq48g3p5Wx5CTp7XoB525FHmtq2zTi9pG5ZYzQu4HWbGajwfViFYrJVioYPGbnoWAh3T2XF",
  "key44": "4QXaMMEgtMXdamnS6mY9S3Cvz9rcBqpzGf1iyXqNY9iqv5w7LwjkkqinCTRqoTSUWQDDp4GeuVBUZPEV2H1FcwGN",
  "key45": "2Pfn6LtpPK3ZTtUhw2qiCpmJXjC7MevdfyNrXTRKBfTCXcTXRNhZP6i7CSwbP6FpkuytCxJv2RjRGmY2ikhRs56o",
  "key46": "2T5qVKcsyWCddV7JyM9M6gsk1qWpVYsA3FpFWKwN9k32mf7tdkbnKq6hH4q1rkvzH39AZSuBTVoCac9JtwjvAXbD",
  "key47": "3aESbWQCxUpao1fjnn5wLkiErHk8Xk8GbSz7UvSpst2Jig1f3udBQKmr35Ei85vKp79ZHS2PiUQMJp2rkc7iw22y",
  "key48": "25eyA8PUdp3NVJ25XprWXDeJFWtmGfGeCi9iTGyudpAPvDPMV5DwQa5otriUTPy6jPyiLo16LQjLYZs1ibM9MmmQ",
  "key49": "3jQQAZ6BH2SehTtrhko7Nark8YsSecryTpXiQUDMn84yhvRTWj4jx4hefyK2UYPUfyg2yzS84FWfU2a3p5j6cfqd"
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
