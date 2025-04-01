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
    "4Vm8USEu1iqLBL6ssgsAjgFmLJjzf6Le1DisNF17xuUZ7J3Z9LF61EuFDiuqWcVurckD47JD3uRZbdw1ceGrFgwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CYAZPT9BNBvLxqsT7FffGFLuhiUgnc7kxst2jDYSJkfiPDfAoD4Ddxn1ZSHCZanhyg44bx5zyzrFXC7X5ztRdQH",
  "key1": "2o4KarFPH96hbPMm3KUa3hUaPzWXAqePkJvAvpkVXW7bbTCAewcbPuSG7YobJmu5Xeq3rhQ6JTs5oahwPbSZXwZt",
  "key2": "2QCmE4eWY6fXZrrKgiXM53SshejYrfkuFW4A8TcnYAY2wV7uCWH93n1gnWCJ5VrTbCjkQqJUwy6Ra63gpNph5qYr",
  "key3": "3RktoNZXkPJfBRsHSKVnJV2jrmNWbmKpD1hJ7QYReTAvbDdgHZ6mbdRUEjaXaGniRMpQ8wFP5gWqoKi7meGaGjtZ",
  "key4": "2NxETR5STTTuUXQVyLEaJmL981JXWR9dFgcJnwwngxbwvN2QuhPtCX7xW8ktgMxzvgAEQASAu92V6roS2i3kqciK",
  "key5": "5fw2NGrPwer9Yj3VSYGj8q2uzUgsVxXpnxBD2CcmBy1CXvKoLmf943YrUy3Xh8sBk6RQr996j91Z9y4dHvw6dUVJ",
  "key6": "277NiDE5hcdRBydonnwAxCde5Pfc73KqBcdSY743KueAPAG4B2DRyBTNQBMbYrJVjN97f5usA4XQHf7ppzCmgBPV",
  "key7": "3qkxAFxyYLApb7xxAK5RMpLcEbWXdeUH9jPSNBJqjHEoBbGpJNtF8gDW85m3FGuL1abogfapPT5eVYHNyWAn6Sam",
  "key8": "4jSerdBPSEjCBMw4w3i9EC7fpJhj9oMSidsPUhQJ2AkwV4VVBDdtnuARQVNLrGPNhDqs6yc772B6eioQqhveSCWD",
  "key9": "3keU64qdu5LwAAAHBc8hAxsigDH2W15jQJLQ5fVN7JrazZH3yexWkqzLmVeTCZUnNsTEPS3wRLfX3Kmk3J69Ag18",
  "key10": "zBgu1pFqrqFogoDSDMmq4NZv81XPuEsGUnPVLkrCtqfNatZEYq7Q24B9x38i4gfkQSxB6G8Tnpk8oTgxPFbRpP5",
  "key11": "3xoyTPCLNQdRNAAiL4Zq1mhG7xfmkxUPfJdLNcgWwLqj5HngR1bAtqJHdhXu3AqU2Cy6AQAYPwYNhpnA4qTEU96b",
  "key12": "3WtvjAtgJ5SbTVjHs6XxHnqzNVWafm4zCV3t7pZPHF8iyRpoqoDrc3Zwjf7PqopCgwbE9a7via7pc8RCWKDvZ61F",
  "key13": "3ycDk1atdnP8bfxELev1nVCJdBL1T3APQQuN86qXXzhNfzQzKhhiD2zUEVW9n9KP33hY23pjVt6ydLHLUaxo6Dyx",
  "key14": "4cnwRBpHjY8fUdUqEzBjbgiBrqsXxB76S1BXvpgBGojjj6Ep28aktUinGyeHKYKAXZLNFMqQjjWsY2xniLieNSkv",
  "key15": "3oGxPZAyZWuwXKtoydRvQHT7asY7ciode2P1C3JErFLYpy21KmRoMqmrnNfCbWkRKkvRFJgpvp4xrKUJyvKsg6f4",
  "key16": "ceK4eByhB7v8rDaMrsLdotsdYTLiqCmaNcv1fKkjxiVeqHsEvcV54R57UE7Fcv9cfGxBEjgEYgAoELZNGKEU9hC",
  "key17": "3XFtY6CSwdrdmRt33iEUc2uxnXY9xM9a7knCqQgUWfQ9SHEcbh5X1FidMWfaGzg6sN3eYTTt8AUMo4e4b8UxZbUV",
  "key18": "3GqZRNb6FmdSphFZNy4a6iD3Vc1prXaQGGdWV6PaNcWq2gP6enktv77G1ZrPzNpuKpLMprfiosF3QgNUNZBeAmGA",
  "key19": "5srBS3sW7gcgUz3NHdfm5Sii4msSdbyWQBJaUPkRVQvATvsUevqQFqQNt9mnC3PQJjNA1nU8su8vaMM1hJ9cPDvV",
  "key20": "2e8MUmvoamwPeGwnDVSQ8PQT5wcoxy4omKEa5Tx4a2QovqvW4q2644etTiPSPErGrsztbRvzHgLYF4xAkihg1Ayx",
  "key21": "dz4joaNQG96DB8d1khmgFqX1hHhWRgDgDsch8BhyTUb9MnwNPgCaQ9UzFEycdP16cVK9i8p6KWTK8mUeNn2RUj5",
  "key22": "5HbqMDu5GergzciLHKqqgQfR7kFQdH2npJS1Jx9SyJJnynh8hVMabS2qz41bfnmyCsRySF8Rnjnn7wzroLRsWWLR",
  "key23": "2F8LBnWnTev4jpWVyD42Tv8D6bFrLk7zuYoNbzhGrt2Q44BDoaQzNDSX3jR5Xndmzzx8WAuuk7HrZktZ7greQEty",
  "key24": "dwuvs1RZjJ9XLtRDE7r39WMamc2xbYWQDxiYLBoroZf1oxUQz5NNNyRfduSWsuVdvZqtn698cytkjdvT4cxphwJ",
  "key25": "4jYLUJE9YFYdiwLbYdc1UVGLZ3MfhZHYs2rBNYaTM7Wv9CYMXWm7SPBDtg4Dq3nyRsJAxx4cC6urXsmLBJQK9Yts",
  "key26": "3Ned2wymxurEjosbDHwvaoKDFkG2gTprffEr5ZitNkjxPnNmNaE6AwBF3eoP1gZSHuhrNpWoVFemGUFiUR3M3ihz",
  "key27": "ZitS1fgs1yAd6XHNxsQSzTZyZMU43pxh5P4RsdxgSLbVs7AXgkTLK58bkcJ7g8mnjpn5EQBg6XWiczthk3ueMmm",
  "key28": "5Ycra9ZxrZ5dDy6kLKvrrSA5JY7LeNkkj8vUgVQne8q26vozXoXudNaHdXfSd8TSEiFbEXo8Fu5Y7LkcCXqNhdyg",
  "key29": "3nRaauyjT5F8tcrKcPASUgcL6yNNHvQa5RPYRAe5y9qJtmznuhH7b6XTn8nsLZxGojTjnaYfVRaYgcvMTFVWSYZT",
  "key30": "6BgwoM3CJzg7mpfeN3dzi78Ksq2NkZzJLjsj8PRj9Jic1NiCd1pKAMNQRmbAdEzcqWz5HsrpnRkenUm6aMwAr72",
  "key31": "3XgcyvgNgmwQWLXCYYVzQw93Af8NhPWujPRQYFq95847CCKWtruwCAS7DXTXG1W8YzRsnNxD5sRVJFUfojiFNk9Y",
  "key32": "5pd7awhkqhv2m7y4Sz8SFefqkyM4K1VYiabM42dsGVRvKho9jD1cCXQNMLsY3saupdxXLAMkfuBppxzjJdPiW59j",
  "key33": "61DBGzbyJRCctpJHVX3NnSMVYujRpeJsTpi8DGKpGLEYmGjaQo2FSdhp2NRvRgq7n1RtFzJVJ2HDZVFgTG94TdsW",
  "key34": "5RiFor6WX7N85nhNpAs5Zs9AbNc2KYhxeKcpe6QjiV1qeTfMEoYUvHx81dduBAtFErmgSPe9jusFTYY8Z8oaR63j",
  "key35": "4i4ppCHEDCwBebeWYG4AcDepcjnV4WWkjEDqookYC5UQjnd99wDByot2ce9Q5M4NBqgJQmhWTf2htpMmQmsKUGZq",
  "key36": "264BFqGNfLjU95hHpz8EWKvPNCpSNfK9s1XwrPG9JyxfLNfVNwTii338KLSizM27qFyX2YTkxPLXwBFs61U5FhBj",
  "key37": "5w7Hd5nJMYNdDEHgwvctqjb8sEQs9GSKdt24Xk2KSX1943Y6S2xSGBqnwQuxvrAvBu61fhQczVQNMqjJNr16BwEy",
  "key38": "4tHWCa11ua79Pbjn6ii9Y58tHeu7HoFz8CX4nueVwYfpBwcw2AMu3zguN1zeHBECi8Sk1GW43VzmW3XsRVHroE9k",
  "key39": "4tVrTNb7twM4wd4MP9f3uqdb64Pd8Doo2oauM9HxgYiwWwGAMmbo972siwuQXT1r6AWgcuefPo3iF5RSHKbXmpua",
  "key40": "51L7hWxaBbFkXZuv6Tz8q84Na3kLGiJTTLZ43SQ1dWGeQA12shpqfpVRqo4XrWMMyJJG9Ty2mTWbdQenyEcfLvcP",
  "key41": "4PWW4ExUCyzCGPguYgWeRK8e4ZR8PmLmsQFfvhKm5Ce9MLC59eD9MM4xH7SmYLdHSNX8k4dXWuCNDvCWmyN8REfX",
  "key42": "4R1PUZKQdLZFypd4F3M4Qpz45E5r1WedkBbxQn3Ef8WoiQqrDcddTGhjeCjKxmhcDyCfJ5DYgcUDKPRjCVF6d3PS",
  "key43": "5NJ6DmuSc7SWas8DMuwnazaAurpbhpJQBPAJLwGAzNG493gQYR1gAXuY9TYjvi5GaZeYCo7NCQRPLXR3DX5GiJe4",
  "key44": "4FuctJABtooeWoxo8jTc5sXwkMu5aMWkxfo6U4WSnnwma1bMPssD99Us5GtzuTErkxvT8SXq6NL4HRH6bSUkKWBg",
  "key45": "5qkV9dTxK3t9EKCsbzovNNGaTHFKQPAQ9KG727rRtgvZhS3NxNjLYueHCBC3DWywF29854z6jxRwqgHAAHaCDWfa",
  "key46": "3phYav6tVM9DxaD3abiL15K8UXj1QpBCv5yf5U8LM4cYFwwBPsGn7D5b3QDqKkxQRpY74mhvKsQqqF3PtwNv6mYt",
  "key47": "qgowwrKma4FnLBNnTBBQHeDpFkV55gpf9eCVBRiLxMF4v9QvQjZnTKMrpCqhtKmUvRUfuADRKNSTqKVbnaNNuJu",
  "key48": "5Hb5GTKagtz4BNxpMF7VoztxKwVGRgPAecFj3rV4ef5F1jgkoKaiWJ6icT3Qzytj64gwNrNfnGXwjnxUrZxwzLWw"
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
