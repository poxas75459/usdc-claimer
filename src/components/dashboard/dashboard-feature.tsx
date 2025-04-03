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
    "2bKK3i6ZwhKzqAP8iqrjxWUA5mcoZydgdEa5Ltt66NzVJQ1mjzPFxRrWpNyWTNfhzGseh3D7fkb6z6fSiieffY4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UhzAzA6LQCA4WzpPH2Qn8ndjMDNYqpE8Ge6SSZbN9QP1LvtZPzMMZQr4zpgUs3zWwQxiuat4crEZo778W3oTpL9",
  "key1": "5KczQnVCz396z2sf5jzm8dMzcapV3v8J5THquBm7LYxuwacfU2SJCtkWyn9VAekxDT2eb4CZesHPWSrqrXRuRDF4",
  "key2": "3gsrG8voLMg3NMMEKsV9MHSHd8F6NdJVYhHLQC8MsN9n14eWkfkZ9fUF6jBCdipies1ovQsSskxfoN9GkwZzW9bY",
  "key3": "62AUjAvtama3H7jEfsbH9i6e86crCHVovuqBVsM5F7NdUEysyBVMmxWCJdbwTwYqcwW7d3TiujqsPU3qMJP83xV3",
  "key4": "Kfog7mmPVMhAAzW5FNPwzRUgkch2cBowG96ZNGvUjUvyHcDArbRb3qxA97rL8Svx17Qx4fBgVCNRtDwSJQTLhZD",
  "key5": "3D4SHumjgAmKtNPsXYGKunyw3y1dSySokGjnUb2p9TZyJdCKa1TZzDJseCf1a8nZCmcN1GEcBiWutBG2fiXXDdN9",
  "key6": "mBR2eaARj13ooDh1PJFPdfVRzwb6wALHED4RS1PvZbZeHq2emeEyEGGGKP9ChVycz4ofPuCok9akPAJiFTqL756",
  "key7": "5ttrak6gnHRFGYHHLxKoCxNUD4LAZasMmUh32Wkyf68EDLRkJsLknvd1UMJzr66S9ARjmEAnpgzo6rKEGR5QGrdg",
  "key8": "2sZCJqBQQhsbBYjTi3JZxSbirUc1AppCNBeYLBRebwrZmwLJ8srHuMeJhPpvZTBkYKQoLTfJMXBMg62R6g2D7hMu",
  "key9": "ZSXw7jGCD9GUGjgSJFwFSYpkjH5f5YYCEdJ6ywNWwFDPcx3LNTkT2q987eTginPhfpwU227JqPNZJndEsWATCMq",
  "key10": "2NcrKYgBm73zSWNvc8MLwrxsUFahYXdd6daqNJv9DtsoB8JgHBhBKWYCTt2rLSP3mn9FqiX5D2UiJJBiFdHsHJ8W",
  "key11": "3LgkdZ9pR3NZn4Zeecnu6VL73UWtr4NYHj9s4JPW1ZFizhU8aJJ1Ar76kEhZXrD7qV5WHsiL7jH1oEpprHxeohLG",
  "key12": "5mXBk78ZLbuth93HYtHVi1QV7oh2k6YW5BXqe26uUNs9d8r72E8BjAabZdDAFmei9T52uR4rpWFxY2KaXQa3uRwy",
  "key13": "3yKh5a45wc95AW9qVmZUtq8c248aHpQgBso2zXUNCdqDrAmGTFUBgfLBPPXTBZCPcnFkbZWo7A3zQFLtiLFHoSdi",
  "key14": "5Ujix1UQYHBitxYni43hxWwwCdfbGE73Gw6HSEa5bA3pgF9pqUWHQAjvxYWkRCT5WG3RnbEWeeB4YWuejjtijC6R",
  "key15": "4276vn9BsDGqgdQvzurqe7m1ZwKpug4msYdsXfu7Vof9qZ3PVf5E84PS424i52d4QuBRbjLQE12CaVHcvvMjzfkp",
  "key16": "24XqrA1tsLDARrotgcS75vdpqXdN1uS775ihJRdcqsusjYiU7bwcSjJ8okdu7jmmhJHGVvWxwGhiL1BPD7Z2nWxp",
  "key17": "5ucuT3uwLNCYyEspMiDGsZGEazHRNGsiq8YPUzCboJGMWmMq3ytB5VB79mwhwac6a5Gb1xBbH41BCVQKTkhZepxh",
  "key18": "5ean8ep6huDXgiNiC9YK7UKcknbqyUFd8hU854LwpNC93F2TJUFLg63Mm3vgzwVS7AGJ16NXvYncHvG9RTm36evT",
  "key19": "3uStqngpuQBpYahTkbFvuaMD6p8nPkskv44ZQfwDvKyPZVh7h3N9se5F1SxZziZcMGZDJ81cUfJm84TnxaADkNJP",
  "key20": "57FJyVt6V34KTzV4k887bUL729u5PaZEp6RPbtu3saPjNooxdZbDP8MiSVhiMLLagHzwRWzMwsi1KiA7cN7NmZ6F",
  "key21": "4FBYuo3WdHe2gW434vDmLA4LUP9piMbxms8VxzFNr1nsn1k62Hw46ykRMnhpXSXaaLzLtsWLZUdGjKnEe3xE9vbo",
  "key22": "2e7GAQnmCWCxkcRWU9FzhHpMoL81yS7tvdCjdM7atGkTczJ4y4GmBWd4Pf3VD54ciLf29vA9oihauTDEa65t3FDE",
  "key23": "5BU9DdcHwZsxkgwJ26RR3iqDpXWY2Bi2nYWJD4QtPRXjfcXKtPEvaQVsKCq5qgibSLe5Ek4i3UgdTdiE6LpJpwRs",
  "key24": "4CSkgJq23qJ16hMWN1sxiuiEwcbqscUnXixj9p21cfbsZZbSHPHDQvULDqbvU4wBcPLJYydqbZnfUqunMRQh3MWc",
  "key25": "2WwHPq9bxn9tBZ9j4NY5v1XnpuhWVc6WMgEFAfGCmAiVNJLovfSDWwNdfo89cCXvTUuYBYS9iFtYct6ZQvg2zAje",
  "key26": "gdpQwL1MLdE9sDVteutJbYREFh5xB1SEVrBiGs9UQMtv9phvS221xBcaGxXHtF7hoExc47ZZT3aBFz3SvmZVLJK",
  "key27": "Q3jz4QvA4iCDCxKCLTZ5mAmJdFia9py38Ajiz7cB9837pta7FpPamkXcYnmiFJFZXyxP12bSrno3jovPqHgCujy",
  "key28": "2K3VcizdbS27ELAqKVXMBypAMTvn6re5Qu4JcpzhCqM68MNNLFCzLxsdmkiJsGFnEf9eDN7L6dXZrdHq2zKdGBTJ",
  "key29": "4rX1JN98m3QS38TVCQ4bbH59PvK42KCfqZK5BVUspLwr3eC7YhRD9fhdmLmUXAUVirY9UbRJVe5DCe4B9zsFe9Ge",
  "key30": "28yef6SWhEe8BzC17TN6NWNpM6R6DX5QbQjRKhmXrwk1ERZmbfeSt7RwARueSxUpjbzQnphf1PBV4wewh8Vr6n9x",
  "key31": "2x4Fktt41XgtVdUWMXR53vwatao3eJw5RgSBabLgYdm6H3vURF1RhFAvMhgJiTc1PYRpYDsz74mrtSggDFraYTEE",
  "key32": "2sEhbsw3Srzbiz22tCHM3hy84TSFQip8PeTBqqXbJrdib2ikPTzv75NNFL7mpZ3V5R6PYqhwQWxMqEe2peTP6bvd",
  "key33": "3V7adV2Skvw7x4S3Vn8qb78JLGBXVCwjCFgEesuDLboXd9Di525uVS191N6P7CFjLkweo9hVAn1ECNCcHDLWoFSr",
  "key34": "54R4vDWdYGHcM9rE5BcFVcfaNrrEgZFrBCsLGe46awfAfkq7Ae2M1s78n3N1qW9gk7B7CN2z8CaUzLG2fqm4p1Ft",
  "key35": "3X7A5S4WXr5du96CH1HLepL6JEYXDpegAjzKsnx5RdG3RRrq6SyPMjeoLfSh2iS8LzHoytoKpYtMXKbVne2Va4rn",
  "key36": "4niHtosdLWnEU9LAoDNfavWdmEDYiNB2CW6FkzNKBDHZdXAYERdxxivofXPnsZwBMmBm6JS6h7qE4sGyuzv8rBgN",
  "key37": "5DTuZeqP4jERLDWpCkwS6bUJ9jvkwMftmNEAVH8J5jQDscjY1ED376sLYAjcgYNG9GdazvxwipvwU4UJ4yUW8jyh"
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
