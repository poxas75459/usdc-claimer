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
    "2B6D1VfZvPPK8ornLeTTBLUbcE9ZHq38Kt3CzCfukCHUEiXYmkD6rAFX14Jm5zmDSRhG5E9k4EXCqTbYSkbissAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UtczN8HdxZyV67VdABiDXSDiVPn6Ls2CfTpe7tE2zpbpFZQbt65pdfa3NKuYorVBDM6MtFPo6wVHCGmbux4ujLr",
  "key1": "2ChkPmeLJZb57RqUomGF7fwsdJnTBKJaCF6HaQXA8QTCQVoQ4ooHNTQZGgRipVhEsxk1GAG49rNamLkJ5i8NgztG",
  "key2": "3XpcVvGsLBfoxitFfsVmTpJ7rjrRADMzhGam4wVRRuZwkLV3EVkXX7zmY8AU8cg7f2Ybo9ga6cn7hFvD5UkSY9Kx",
  "key3": "3KpdYyLGnWn6UQ8MfKDMaGYrCqvmqM59ED3uHmReZE6BpGqNpT3rusp2mEa5n8CGH95njED2154CPrLnsj6jHBPt",
  "key4": "2Zb3mmQSXrkWENYqfxpVXysMqz6PvcXyoH61a7XrkjbcWSC9wdt9J6pBLFnSBXW3V1bJ57qDWxuW9sfcRcQYCxFC",
  "key5": "4JmhHZnKYNnqohmd32eaaA6nhJFsJpokf77JzzeeLKjzZyW9T6otbCoDRJkfThPBZQ63AaySS4ErirWiG76Za1gR",
  "key6": "3mGuWRvTt3PwVv2iwWKR52ZrhgPnm5YcbVFggcbVNppMsSmbFJyKfy57fVySpRZeRCS5KHBJNayJ5kvhjemiCnce",
  "key7": "5GRagHQ5yLVgUR7uWjpzeoW6U4xXeY82iCU9HqgiN7JJpzYiabRADucDJXqtWNthWZbXFACjejTYhGnsDE2jJJSy",
  "key8": "2PDE5jA1tHL9uoFV7FLx5XsA4dfEuugPowjR5BYoow5MZWg1PVua5NyeVAicnE4GYaUS4JzyGCpufBWJZWCdUvNy",
  "key9": "5xewGnN53qbJXZDwkAFU4tvbf9QmgpbAspRHajyz8DoQ8nqssFyhMNqDA7EEr9iRhCbwmWSTXVTe1sYqgDRfaAqt",
  "key10": "3rj7YtG8TGwe3XBnsnC96x38ctHCL6uUXkUquzZHp1gV3RyAaok56KynP8aQTccAV8Jjy85vaojWE1DzbqJtihNB",
  "key11": "2uyc5k1FpS4hzESJh3YKLjTxAVF4cWuHeLCAbz3s7MRUP12nmfvKGpTdX1NBgC5Ds1sUUAyS6EFXdW5j4jGkduV4",
  "key12": "27sWXFU4pZNKp7BHu3q8cPN5R4xBDVapgJj719MmxFXBAiebUyshwY2Ufr91UzvrPYfRaJUuPgVa8xk2nPXbqevw",
  "key13": "4mFb5sWCbBDTDDkPNaLpJmHVhegyBVdyM1J8FqkKK1DhxQ7yMkv7cD8ZUELqhgxf7JWGhKUwjugusk7EsfAJUKXg",
  "key14": "58kXzvjXsUvvoHCjNPwNxuwb7GFXWPR8Cqh4o6iSXNfMoBZvbx4qDTdSuHZX4VBMBZKRwP59ZcmcSnBArho7eoF1",
  "key15": "3HNCsCgdZJjHBbaL3TwiYmURAdGLAaxHzBFekjXf54izgqpVQ3bNUhmGweBBVFTPGMXVJ3wwYHepLsgsCB2ej21U",
  "key16": "3J4euustdrUKZkWcd9dwsSHM7derXNrgqHt28kBE9DLMAcT7Mo8pdLLsyqmtZvpG2ZGNqnwd9YYbtMFNTtn2AXB5",
  "key17": "DCZkfjJV6Xbj3fihKEewhvGioQkFoAmmq88t2qTKuTWmNAYW2g1X5PfFqdbRYBofnTsSWuXsthWeBsD5jRx6KEB",
  "key18": "34GMFYP1EeND7YTTGDvDJikKVzq3Fc9BihcxkhJ3gviNadWNEsztVd7b9b7GA79vYm7iyPAt6vm8aNRZcfPmUEmz",
  "key19": "2YMGJjb2RmKTDGQcr7oVEHkZcDB6u2p3NwqYuug6gAbaFC5A6eUCFXCLJeGroasRXZpRfSRT66SEN98XKd8fkHwT",
  "key20": "5hPQCdLYiSJYKpdVBdSx93nUABMCgDPFChiUFJPx9yc9MSfwZGJviRC9ZiuLQLEDsGGsGYpRFUTF7w12Vgtpkiqz",
  "key21": "5Qra3CidXPFTheYx9k24Vf98nKM47P8NvrVVrTU2bUfpWDcMnhfsYHE57KFa7W6PY1R64qv6Yaa78aUzu1ksKqPm",
  "key22": "2JT39u4NkgMRX6ijTVeJEGKHQJYKZyZqCDqhpX8MLTcSYJ47VZX6DtmSpEWBCd9sztxtFLPytztFXu5vdyD6yeiv",
  "key23": "3xhC3VGMWpsydrUykcyqTAF69EbmuvP6rghHdpwXChbVTURfGLeLtCLdDR3sm6dmsVco4SmhMZUAR6KBayrRMEpP",
  "key24": "5GRAXdXi4HCDHaiTUHtt6JZm6qiEiEbUedFrUMCzAXKrQdYSh4AWkWW85y8GmJf3tUsqjTRG7hk16ttADg2YbsvY",
  "key25": "466A3SDKXyoL6WRBwGdXJJwELo7rRvoPdMexYpXuPJre5wb97UtWwSMAqH8H4jKLvrEfexgqh4eAEFeNmvCNPvpt",
  "key26": "4SfscyBp2ZC77VZLTV9XDyhPvrhLbwF96XijVDxXB4wJLvPRh3HTJmdWJXnpmoWrGqFrJK7FvW6sSFeiWU1mLcw6",
  "key27": "4t3NjKstWBYMfpQqSVCCfoHTb64GcbajZ1feNrXFQQ3fRyBjA6wUSo2qn9JuQ47AZX4YeAkge4w5P7A2TcJKwG9n",
  "key28": "3xnHZnLQt5nCr3bpTAcUoGKRiqaLtjgw7Ly8xw2adpZaqGyjDA4N4WUwhHLLL43TgB1fQ2kMzNytx7CEWPuJgmmQ",
  "key29": "4kWs5bxTcRaC7PH7KuMmmLEhXyy9q8neaSCQQELVqfCumwu5zaNp4kjFJRmqNuvuZxQZiaFYH4yd28jMwYLWCxdY",
  "key30": "2ioX2cdjyjf4pxfrMbUneFLqkfxTJ5ypAf42vSUhgMTXyTgrKkrG8C93spA5uDXT1mXNyGaVVwL9Mv4mkNzuCAZq",
  "key31": "mkuYRJoXqarXfRTJcvB36vT71oDqKU44h8stpzBYRX7MFDKTXQSu9VQBJ2WVtiF4uJXdawCs8yQ9fVTj5rbnA3S",
  "key32": "2FLie4NPkjvCHad8sXQYUFVx3WD3kBqd5G3eJfs6TDgafU6MaDB1q7yFpLicXKnPbU585JJzs1kRJoea8vMcY3xh",
  "key33": "ADW6SoikzVyJKqtUeDqGvEh8WZMrFURcRRCtc6gFnfUtdmarznHcHKP34JB3UXZNNMnic7kmJHKwwsdXf7MufHi",
  "key34": "2U13zSE1A9rQ7cMaAWhKXLP55We5KcrY843oW3mr81VxsLiJGR7zzd3DacuJhZTqPzSW1Z1s5qstdv54xsmNCXBK",
  "key35": "4LUXZbW2sfdmJ98xgGqNA7jKk43tC7jxEyHtPgGRrbqoYtgCRfRooghyoZ2tjzQag2wHgEA1NHbMzVvxRpRjw7n1",
  "key36": "3838ZKAX6zUN1YFW17wfKoT5P49FdFw4AnsxbBoBfkZfbqbXAryi5tda45NwUdWHYjeJAFJueAhJosvUuhHBDCnV",
  "key37": "34HaYF5v3C4Qm7SbkgiruMFxwMPnQHxa92fZPyNChxbxGLcERKnihheMhovtvw4GTMKJPuE8jKErXtPGCjL4ac1m",
  "key38": "2SP7LH98RpcMifgSvHnpdwAYN3UAKzRmdzCybMKTC3SS6niMSetb5D4n9MMKYBeWC3YNwrWz4x9SCzrJBh5JNqKb",
  "key39": "5MgNogLm3YM9ktXVeAW2ntmbqMk4ginwUfhd9W8uhgAeoziXv6b3KZYuD915Tuzu1d5cab2b69gV8p9qs4M1LikP",
  "key40": "4oGy7WvKUxMNxua2PBvFmk71HqZPnFujiSGrvP6jshedhUsMTry297nQbi7GKxYH9G4kdzKW6um39noLLCaKgHjx",
  "key41": "3hhMu5zBeSM746PiUFNebaFqM3xeJNRE2cqLrFxuPqtAszYwDqmeUNz5pqwf7mCeeuwCz3RsHNDW3XhgBh299EGg"
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
