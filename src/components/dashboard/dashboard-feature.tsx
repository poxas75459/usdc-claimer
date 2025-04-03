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
    "4C4Vwqek42RqDcKNbjHcffKX3JP2upMuwoiGi8uy7EZrSnTCtKZrMPbT6jaJe7PwtSbNRLdckhSqpQYZUvT9dJBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ar8vpTWJabeb9E7TnrbytSeE9RSXbzmpBWJUgCjQsTo5i91YBXexGqyuM5oreDdH2rcAK9LGH1rNHcGv8u6Dbym",
  "key1": "2N4ioHhk7tuJtSEjqvxaXXDwfYK9ivtYzFLk6xK72WxNj5d5bFipBJtpMWdqK4gMkdJTSNzZFpBisLGaKPwvgkp5",
  "key2": "3BvyVjsP6vJq6hWPEY7UUXR9NWYguASrPtahgyJAWJDnrcMTZp5FSKfKEt3nTVi6GARHmRpmUKrZBacFqUdZVCjF",
  "key3": "RhizFiqYqXYERMSE4NXiwt8h6XHAioX9kc4QBkBY2mjZK46PmLyr6r77tLkxaBF9U2aPxb9z47WKUpKPEokeb7H",
  "key4": "4kGFv9TgdFxh2xitXCgQXD1pjbBjYSXvesozpvicn4iXDetf1tRNjpPtwgDeoweUN9daDNUZPQ49bVgvR5whpk6r",
  "key5": "3sjFUtfFGqhHkASuSb3NuaqEJ6BCHUh3pRGkZCCRcbg1TMeE7Q4ZbiXYwjvKSWitSufZ277yZJSZmVCSoQ3st6FJ",
  "key6": "4bzv9MKdoPocvfU6BADREEDHDj9fk12FPcn5wVWorV5FzUbMesY7LwedJnmxuapuUW6vCGy7YHzBKDCXDNyHDqhZ",
  "key7": "53A97YBtQrUHZ4rD8XtdM4a4d3bsyMhLj2iQqQQjZ7VFh2VE4vaJZ2JjQNqw8mVkthD2tjN46Ty2DqnHG3NiPFBM",
  "key8": "5K5t8Z9nEc1Yun1AFyrMMoCmF6HjV5whf8JmfN3N5dP91RPzg9M1Fwg1WkmVRWuJzU9MiMUXf3hthYXQux3qoyC",
  "key9": "55oM29xgkCPXU4yZLntZS8dEgrZRVMADGZJC8FYe3m4H1ocUhu7fx5Bd9AhueH1fWcg9kbs3cqeCqH1GsxcYQJdQ",
  "key10": "2Hc4qjPRatDEc1KANpottwv6ZBXJvtdL5QqAMSaB9xQYYJsyTWsfRX3CViKjWbgLeaZfEbzprYAPPWqZwt8Qs5jw",
  "key11": "5nyPqRXyhptCRPh7BWwFy376r7s6TS8QwZyUyu6ZQZZ3eLAoGmXSXLULhJDNQJr8UtRqcbAGUCmsqLEeWzDneQAL",
  "key12": "3aHRscAJ8L6MfPQtJxLHjKoc3EF1Hs3pSxBvGSYocpxRaVGAMcuM2tdxjAPBuntjKZZ6FuECacaPDdUQ5HrDWycK",
  "key13": "2MMX2nuwih97CUymqrYWkEDen3bghAtk6Zg57PV6kghDUjuMF99jBtpvdscCTbhecLrP5yRtVv7n5rSRCMmnzUGP",
  "key14": "thGphN6cMgKBu7LnWj2Y5ccZBAMvEgNJNYG5XvviYnh3Khvj3wEH2xR7fRTEeMsTEuGWGxKoYP4yrEvaHqabTkb",
  "key15": "25dC3fJWwQPuaAXqHkUn7mVARQudT88rX9omkSTLC52JyT77EcwqofHCesDna3tYeK3FLmaAN7PurFnk5nHBw3Q9",
  "key16": "3JwwsD47Wa4euBnvsuaPtsGsHuVN2aLKjhgQ5a8rxGXoMWoVKawEm2GszChnv9Wqovn7m9C35NfvfEWPsXe68JpB",
  "key17": "3cncJUgTtPBdonapdURsWmAtSdBK2cYCppPKguHVZrKtuA91vri7TxMoUuLG6fVCWTpY3a3XAKE4UmXSokxYz2wj",
  "key18": "Cah49VBcv1dwCo2SJ5YAnXnhjaG5KAKVbxmuGUUnEkf76oBh4ABoe8H1n3EYsXBGTPSngcszLN7L7jQ4GFtSLMM",
  "key19": "VwPf1vq3ndzs3Z3qD7pcDxyGTr79FFgBfsQyjcLjj12Y6Qiwm6iqfyoNLXPyqSf8m4kQsWmA5nQX2gwkkv4xWWo",
  "key20": "5zrKXsKjadUv8TSEkv6cCavjaFDd5tj1HTZXYRhdZ98F77QDHfDLmF4kCq8oFTn9yPGUaYQUr5UGYErCAtP1H6Ht",
  "key21": "tKQ7sn9tTFgdRXEzGZ48DUqqvkXd7bdqUimvzLLbx6j8moRujkhqe4s9WwQpcZ13ov9gef3VQiWFrnVUjp6m42H",
  "key22": "2mqi56XiLconSvoHcCJ3ZTQZh6Fap7ubLppanrUeEZjkidaGSdw18W19jybPzSfN4pYb1C4vaYvBzrGFPminqzm9",
  "key23": "4C9hxkfuTQCLEXKzMczmZMATFYxHcbb63rhUuHiYXVb86HD3HzMyvgYC7FagzwFmfa6X9oHiRCy74cUmvnnZPowi",
  "key24": "57tWQWUpCSMTaBoMG8H9GU7vCqPnofRjL8RJvanvErEzivzD5VewVMi2YUZio939tAUk8kfc7EBYc54i4FqmSv1i",
  "key25": "5Kr2WS4exVjnSr4TSWr6jjbTy7f9ZMM3i9TsKvw3tmZ3bggycuF9JCcBKKQDevdUsDhRKj35ax4j7imud5Na8f59",
  "key26": "4Jj4pG9u77jDa6mveHY84SQt9wNapQ8hrFbnYakUmNTs9bew6KopaHs57hHZuVy9gunUGaRgbxkDfogwmGVYG8ja",
  "key27": "3byshydvdyrj6BcB46RQhKwJK2hyq5XkqkwBM5P73P5p1rhu6PiuYySgFyijApLHgLq9x5GGxY3kzxDHKc6dPqhG",
  "key28": "23pUPfTCqv4ByxwYHmQEzt3YenNALYK3es7y5rH3vcjzrr7JaNHTPeRTPduv1KaYmaJCFfWNV7TYmZfjrShbgcJa",
  "key29": "4rMrnk49Jrpr3r7tYq6fXTfgYLDWEGM682WQWZbbQaa7BgCmwGNx1hQHKUS3fCKqynwcAyEDrqjLvdEKwRGnepYz",
  "key30": "61Ya4chDhiWKvnNF5oFGStckwi1CfJhsg8ugQupjHANanFYwEJht8pmDvjuihe2Q1LNQtaPtu2bzyjnkRpuZPxrA",
  "key31": "PVjh1YJzVnqKktF6WiGaK3qHq82vq9aaVwHgeGdUouEtCBPBgdLfe1juX5tVHxh7aju9azC2f7ikkHewZwWPL3u",
  "key32": "4R3UaRAscmdukcqJGTFaopqmoKnFEwZtP1bvKt7Rz5F8quX6rmfa7d9KYF9ez8vevBAQ33RxFActqDnpSpyxqjA3",
  "key33": "2DVbZUMpNyBgoi2j16cvyueEUAswHboBv9J22wsPoGTnP2MJvDfc4NZY6Cpq7FpDb17D4ff3PLW7hCayfmX93jmK",
  "key34": "3WpyqQvNtwdTpR6v7hZR5UHXpNVUNLDZdA61JuYG5aK4Vk2SCaXmhNPHdWEzuWjrT3jYuiHHRT8PyzSnVg9XyWhU",
  "key35": "3yzp5iwWge57b5EijC5FoADghMEHVmzniw3mBjevTopUEPknjpMUNz3AdUTm4M7HwPhAB1LHMr1dFq5Bv4T8hZmD",
  "key36": "vHEqBGkXykFoKYSb1VaXiQvzp3ELZwe5vkJUm2kW1ZUUH5Wn3MEpcPvnvdQjk7YtQaZ6bfnCPCmfpmDWk27SgsB"
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
