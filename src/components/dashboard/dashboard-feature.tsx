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
    "SZTXKDo6E92Xvd7LSuvM62nqQtHpTsNrcjWk7pXeWsaJm4QCpArMjaZFUckogUR9Myh3wdnBcJoGX9hVvbaUBZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EiWEex1adhvat9N89JsdmZeXzccXp9uM2iHHm42wL6o9cqUKf7b1VZssQThtRMWszfi1x3xFTT7wx6uhhhAbAeB",
  "key1": "3G4hdH6KG1XLeXACu4peSx7rwSTChMJ5FoefiAa5y5A5voR1EX5Z2BEiP894jt5k1nCMbsaajLtyXbxseZDa2Dhh",
  "key2": "5M6sLSTmVobMqZgYR6WGqLXDNZnCBsCDH2bnFFejQDMVfimXBxNkfhjW8naxMxx4XmgEwFM7PjeUcvMBfVq6t4yu",
  "key3": "2HPfUQ1Dmhis8rTsafbpeQBM5sMKC54kFkb82ErmXJVAaB1VV1NXXxmuWspdn8T5cpisYTGvqSTnxW2fDHky6sGP",
  "key4": "3hvSMMZyTm4kQtnP8U15vJZHTmGdqCYAYFGWTvyvtwjUcjdN4bFCndnoWzUJxnJp6qfjmYcbD3XwHi5ryssbYCt4",
  "key5": "4JVXm5cUYDDRNBGbNRFenBF4reeNn4VRSP8Mkn4jY5Dps3hmGzKEHGcdT5CiW3oivbqbyWS1RBKPMCXJnxPnWU5w",
  "key6": "PeNgXx3PSbQLsnoeDgtVgfJFP22Nin9m3xEw9sJKHvCsJ388j9GBmgLeXmFJaayPdCuMsZ7b87HquTDsLKHsRvJ",
  "key7": "4WFjBRo86Fn4HVuMCWqkdgsdJaXDABS734dxupGFES34i2rW8KgeMsxCAiGRz51jytHWptKe54rmFzLXCocG79h4",
  "key8": "4XWqr5CmoTaR5rRDVMNi1cFE6PM6PvvbbWx9y3RKEE1rftUJxRDLNqpQnqCf8MkeB9thB6ufeLA5q3radx9CzVwy",
  "key9": "5XakJQJHi63AWJcukXB66quMi7QbJ6bBBwE9kuc5qGndV6Fi8bNZihETeXMHbFgAP7Un4TTzo4nKykDBRoD2vnER",
  "key10": "56qjv1QF3Uzh51ABdhG9rWM97mBtmwtpjbeDtv2BJVAr6h2NscLeT5Ux34DVjBYn2Gke9zE9McyWJ2V1KicGpun2",
  "key11": "4iZqpw1QkMmHavJoFS8YYr9irDj68m4gkJzUZJqWxnP6siiuk8WFnV3Ku3AW5EmJyZsoX81WkhgvwUJ3egKvKHMd",
  "key12": "3nDPpBrRuN8UnAafSfSUQG8yHTGigzAb5gEo9UKQV4GNfYDfFhvuyBCcdFiS195KbWVwuzXwbpPWtf45xbXvvcD3",
  "key13": "5fPxkpmn6Vta68Wd2nUiL8SDjSo9qctt74bKyKAJgpjbRn8UuPuZhzjzone4MX6R5h3bRH9rGZHfkbPa8W6gcpDP",
  "key14": "38d7dYRgHyAbAQ82oi7dwFv5YiF6UBedMb3mfDznUXJj8vTvxrhprXgj3ExqbpcBRjzS4pHbGZ9TJkwVpPU2vray",
  "key15": "5yUdecJF7G4SCFaYLZiiu8MkRyY4QdfMxnKWafTiHEJMu5vRNfqWPdG8aSzK5aqyBJZ5pZCgWptRngst8QaSMA4d",
  "key16": "38WoAZZFSrtddkDGPnFag9d2paeD8AHUfikhcQJkXaQSiWWScSPwJ4YxDqk2Sj5rmfeNy4G73HgysUjuob2ctu4J",
  "key17": "Q5DUU7yH7NCmifeRWM4YsbzqCgJqBPFD8SuDN3PszMpWNqdZxGMevs2fVJPoEeUUuPCPs6jAEK1e7FpGcf4cNKR",
  "key18": "3HtsS1UdbfKq7z5icuhaKPnqWeSp6bexmBTiBbbCaAgJZQdDTKfKRLay7x2XvjfDwgC8ziBr7wxFPsfTSUKJHvbJ",
  "key19": "21rwn96yYgtjN4zp3Tmvq8vdPEc9tpySXYZKbYWgcQ47YUpuKY4twQF5Zf8wdUJvqUfKmEeJABJXA1czsgSbJfTM",
  "key20": "2598j7Eq8JHErRNsyZLe6wNtzrpndqmCcDNz4gFS2jpDaTLstgvg8FpeZQisSFHqhWSZwu9nH6BFcxPX2fHYdR1i",
  "key21": "2XHuiTkmwRRuypDrsHZzsmRVqHM3CV1xWY37KUwhmhqh3riGCcfxZ6CzRWwKYh6Rzp47zGvh3bqrf8yXiBK779d6",
  "key22": "57QCqq3jYXp3TURNUoUyUAjVHJKVUSK9vivBEYTik9AhM4ji2ie4TTMANGhY8iyGA4aXWHmiEYbVcQF23udxHVu2",
  "key23": "52mjWh7UA97zfwAW9ANvMVFACWyyyjQQFYLZcNM6iUQpDr3wqibpxFmDjCWBeV76HLLJ286THBysXooNmWggWnL6",
  "key24": "2NHM5G8deVqvN1oxkMCNYdyJ4JYFPxePQ6fGT84ivohCPPATjpTW2ofVomCMXDEHp2CpJN1KVgRS1EPkbxvcnpnE",
  "key25": "4enbBeZDB8RPUd1NKMH5pSwK5jJuMSQ9KzF5yFEuxyVBnA5ndMrp1VLpQp9DRCQztK2rHmUdPoYj1ajxoVVZjrvJ",
  "key26": "4cDQLRv4skJ9iU4LZtfQpmii4kwLVxvc1dmonBGQGdef56sTHniRMDTrDT3pKtpTypecxZjb1fK2rhhiJjuNciQ6",
  "key27": "4ysFGWkpqMmHWarBmr9HAbRJzzU2TH31gPYa1cPENtFNMReXT9XSGu5UnzeD4pFV2tBGdHQD7m5c2LrEhSxJWJJG",
  "key28": "4Yh6hhsvFoES8PTrgKvxuVsw8sro2tTWB4F3WmKUtwbr6tNpw5Nakyv5dXzzjNqT8DGEkwjwBbkXFHHDLAa42fhR",
  "key29": "pziC2MwkQ9U1Vmkfug2BZNU49zj4QhRNzmyJuB2WKKi2L2Eni5jP8otMoyMAbYNVHWq3ojk98vz8VvHL7GRCgKA",
  "key30": "31Xq2KwHXCySEZWXpsjuRuWPmi29hkdH6jNwGCrBK7RMPRM3sZc37MntsU1usijsnVyj7AcMSWua9rzN3D5rYd7x",
  "key31": "5tbD7Zu2CHnYad84KaxgyESVrkQR4Wg9p46vK2bf4HxURyMZSU3GKZQUeqpTRDuTbhaeMZWGtayTpvjuX4NN6HpH",
  "key32": "3Sz7gW5bP9nxsdGWga3SgKVCH5LHfYNq8Hc3V1CobXvLPcALjkaizbWB69Jif3JTWT4N8KeybHjUmVXQavxDreKm",
  "key33": "2EsqTLgZAKZ8cDt9Gjr59CSjoDDRrqLCeYV8wircdWN1wvgZ5VsBRNvF2S4C3cZF22FxYTmv1jeNkUcCLt9WizTi",
  "key34": "627xLiduPU3YnMxgrm26UxaVg9HHzqE5fpFe8QZs9ZJv1ihFFkA9eVxw7HjY7ZSvvBc2rde9Jm3jhmKNyykis2LQ",
  "key35": "3pcfzWBGYsvhvuDnFiwfhqgUY4AmFgJZ4szjBTEew2GvybQQyybCU7wGj2KdSeJPLefR4Chkb56W8UmZH5vM61av",
  "key36": "3eECW3hJgnBnnhTvxLJ4zEEav4stxUrBe61rWAjhP8iTNP9JZpdr5WoowKGysj9iRD89J4tU8HhsjfumBLxYQi2Y",
  "key37": "4Q5g4w8PYsvGo1BCEagkF8XebhshNTXjXKVd5CUCZ5id2m6c71L4JJWGNwgVLMMkPwyg8F7oe1wNSP77y6tMi5ZD",
  "key38": "5MyRDGrp6mqBGn6wAVuvU1sFEYErcfGJe1YCRiywpvB7qrRyj37NmrJSh9HaxSix4cBfAxhkxz5THbKeTqKj4zRi"
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
