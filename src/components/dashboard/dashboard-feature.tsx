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
    "4MRXSQ6JudAjCB4ZtB1xmSi47EdDJEBeCsFhdL7q6WHNnZFD6Hhe6jxUk2qNKtff1k3P2wVdnBkMHv2CrdNc4t33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4122SCaFSqE6oVgLA3V8ybJS54WC2cAggMywjbad8fMcc2BW96yPHzGjz4pGLudGu1XRMEqag5W4ivDbUVjXog96",
  "key1": "4FBRsnbDuK8KVkHjrXrUaS68WqKLustLPnimYVzZL76fAyccqaCcZmmTbdyEcbNnRcbdCvdBU63VxoKhiXbKbV8S",
  "key2": "4wcBQ9T9q3erHRX5f1ys1BFo3zA5cBtAyErEdWc6mS7mLGcofhNPGdkuBqgPWwSSdLbxcPgPSEV83eEdH6fuFk4Q",
  "key3": "57asRLyg2PuFM99LSfmVQtwezxrfUiwBuLZ6kHVGf2NZ87eYZ6PUSKEtavNUHdYJutqLXMyw15xUSTdCFtZNU46G",
  "key4": "4W2fy2sLbqcPDNsKakyNu3MAFoAz5dLTkGkvsP1929fY6DNjmRuRxPxD4TjSca5gXdjsUPi9wJy8RbEr6mMquY87",
  "key5": "mrn9iQUjteVBDTbQgtTsJ76qf5xfAccxrCM64uDPR8KPZm8va2UmvB8FD6q9t9zgWwmcgwMpyALCS9Y3BxMZvLd",
  "key6": "31SeKBaCqgizjtYf7ifTrkeG1BuyJGLih5jqoG1HNHMtraFsNEubkGZb249CVxYxw2CScLo9nZMS9qM4cgp54bXg",
  "key7": "ki5YhSMCGigjQ3bwoYqfXrxgjZsWgSXqodCTXxCh1a4nrS4kS7uFfzE6uLZYQwa4V8yNy4qPb9K3b9xzhr8PvH9",
  "key8": "5n5iWASKBLnf9ZVxZ4auGi1AMHES49kkt3mjZTBQaqLEVTWSWvGVQFT9jSC7LdXGVUxgUbmz5rDgNPc2GbiNzGhx",
  "key9": "aShFh2i7YHMfDUFw2xAJAEN7khNCQmXCbPYsTj5JhRNMKw6YhERVuqvuHpSpGjjvc8cioKJrp9gi3Dem8oP7cSa",
  "key10": "5EFCmyuLg7zGWhiTBZDCJiGdZtsk4udfXqtpbD7A9YY3CQc8tMDKFQv2HyZLdNYjDhHRUzk4otyKBmbzgrcJPS6D",
  "key11": "2Ld9FSBGLsVNSPQwXS3bXY1mWpybMuWLMtNFUhM89Mncj7w31L9VK45qfnLZT6Kmn7DT2Ueah1KMh4pWKFEULatv",
  "key12": "66zxM6Gx87tmYDEV3VAkJ3VbRy3eBdQeLEvXpp5MC6BG2AB4MjnTA11jqCsCvD3NDj3wp8GYo33iKJfu5c5s94DN",
  "key13": "24Spx2Am6pMiUz9jcGLrtbeTrA1zboqYVvrFWN18nx4v3KXpwNxcak7YVSonwu8R1zu2gsymbvRVU2rXEyknJYzb",
  "key14": "54ybFp4UBPKE3uhLmxsHGuXqDGSF1UMs8FY6CnWRCEUaUjkGLBPbLMCxhdrJSqgzgtRsyEHkNkv4aVfQKXZB2Tmt",
  "key15": "3jiFzAZjfDHsbN51ytNaCAX4uzq45Y4wbqUKPzPR34b31pxRSoJAkiFEJ4eikHDbzMrpwZ9sgRBz7PqnbREZLySZ",
  "key16": "N2xwvXNnvrVcUnf1Sfph1zGrzbTdKGRgoL2A2tZRm1BE23mWBvVV7KV4G2pmmXK8ok866LD9nMRecNDXUXV6C1P",
  "key17": "5VANgrv5TSfnHfjYUiJTQfzh78muBdYUMt5n1te8LsyEyJN4LGaGsxMNdzDht3aLntyoifkjqWzhNCg8ovg6uDXe",
  "key18": "2A74Ajj4qANQzURqNTpsU7rfpBg62fyAyB51kQhkLgjSLateCcXDuupwswz23g4DFA7m7edgZdQMukMfT7fk9xeF",
  "key19": "27a3gg51JPaAz6fJyTAGGNieHcZvnfSvbXBCxi4UtKvCSrZ9zmLvrujxvo2i3JFMeeYLYJgkqpNFmUE2aXZHTYWs",
  "key20": "5KnDCWboNjCyoRnP5XkJqEtnpivCvvLw8iBJVvHd6W3WEAcB9c8RaDBEkNJvcWiVFDv6NkJYWtynPouMTFXKwnbT",
  "key21": "3unFVB9X21rC3tftzU5JY4M7CJaM97uKhtF5w67SBkx6R4BsyDfaXHYvfBHui1xiKRci4HHHba44Zzp5Kcu1xMin",
  "key22": "2FEbRtVx8j6wJYNzBxm7LqZJ2w8Gr1SKFZ8SCWMMweYL4Z7izAZb1WryP8miQfnEgqZ7t8NfUcqQZ3MTt2w7khSb",
  "key23": "5VYhRkxps5De8TVkUaeLMKNejq1FhL8PbQMaNz4F2KQAFqBriswJApqBuC3XuoF77X2iPGwmbZBK94GdLuQDcGGA",
  "key24": "4hcamYW7oL4hR6AVyFmB9u2YvAhAHPPf3sAzth9Quk6WHYGrBTH2sNb2e5AhxRAxxcNQ2xV26p6vh3wc1fCUYUzr",
  "key25": "X283B2CPm33MUzNkqFNVBiCmXAgRtAtrkW52ozJgmZfFd1y2r7TUGr8LN4L6sJsWas3sXykurL4hM6YcTbAxTAf",
  "key26": "53dDJUazQtwsrEWH71116WDqwTHgsiHpSdwGnjf5f5L6tURTr1tCL9uPQgbWmv5dwasCgMZcTMnh6GJxj7kTMBxp",
  "key27": "4ry7H3tC8szJGVfWb6GcCrg6sByo6g3fQEdyr2YhXwPbN53BX3VhPkJ9sTyLmmEjJ2quzH6qbeyo81icchRPstPD",
  "key28": "61UY9h975NdnDzngr56TNVi6qMTzBZ8R4mggChG784reun2ruJcwTjiiSCqdKQzcfTcYh3zN5DSdci6Ed4rhn5JE",
  "key29": "2RKN5G5LBfiTvGGemWj1orQ1gqbyDZ6RCCgDmT7oNnyf4sfrQ9tghPH4aCzCtuVDo246JfbieRzLBhta4Zk5PzZD",
  "key30": "4K4yh7Dx7F37gXEEW7dZeufnGqGYftJPr4BszwMrHp1QDt838poZd24iMSk9igcPpsv8GY3NkZSPh5U5X4yHVy2o",
  "key31": "5hpp7x5dSs5a9Q2QTP5YVf5tzSo9NM9n7pHCyA6Jmi7RV3jYTrX27RkFzWjc6sjfFkDkevDbpRQYBCirV7gU44UK",
  "key32": "59QM7wH7xvgtBToCd4RPbwZSXMoGiNAxeVKpvH8fMxfAyyaQ3DmLT16yR7GpENn2EejW5pXoF7MVzGkVjDWEVty6",
  "key33": "3kyEpDxCvsE2XGgV8Hqkg8RwAECn3uXGAJLXS4MSuBZSww21qbLMxYHd1ZnwKbtk5AzQe5gwMesWTwnowaLMVdHc",
  "key34": "UgWqCHby9oJYXf3ZVr4pQ9ruPE8dmW2wqzcN5gseq1ekvau13WaGneZpeHGnYJLE6MEeXBpLnhuEuWFDQQz2BNH",
  "key35": "568sVoV7VhZHzWQZSE27zLSTqvmBzpU8yH8475Wj9DwCa6iQmXXxXt25yk5GL9Y9CFxbA7H2FCxzgU3sBPanBrcy",
  "key36": "3ZmsxrsKFaX8UB7B7SLXBrzQkACGmijQsM2BUAvQ7j39Xyx3obnkU698ZaQ7qM2yfGKPY3wGhRpZ1pp8BcykjkgT",
  "key37": "5ToQu19aJtRZZcqYZjaJnTNoQG4E53uB1BWmsPkvEZ7HXRsLwjrzxZg7YTgj3qSj6xPKKUs3kq2mJZHkTV5LZWbg",
  "key38": "5MMDn5Tpew5QNJaMcaDXZG4wgbY34rXKTC9vV3heV72LKWqhVBR1x4XrDrDcjxKmeQkLkpvbAq1RQYo4voUi5DNd",
  "key39": "35syFY164rSzSryDas8yTHzya2DWFsR8yGeNVd1Kc99YNFgYJm8tK5CwqD5sERvH3bzjY7s5YH7bKXA7MDTWiPBt"
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
