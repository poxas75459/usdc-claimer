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
    "2TNxim1dcjJMAs9qTz4j9WyhSocd7uN3DtXJCT9uDJtaFAyaSVdHMfiyN5ShX1J2mc2PJwEPXedC9eLtoNwZhZEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ciz6yxSbANK2TX9ZRqtexFriPAFT3a4hGzHA93Ep13qKyZj8t8Fu2a6aTjhGFQeMdoP1UjT4ozaCpjdYAFnkW25",
  "key1": "24y6ZtBSNRJGmndXyxxWakUiaX6v7w9sAqRwtmDj2hCHBF6NUkvBFoHatJi81kETTndq11yrKua2cake5hb7Rkjj",
  "key2": "3F75WU69PbBuPLoYGvmwu2unb5kBSyEFXM6BosR2hpe4gJnpYMYpiSaEeasopz3SUVjLTqvjGeS2A7wCQrxaLCPF",
  "key3": "3Fw1Smcy1BNVWPKWKGWhybB6vFAWPWdWGWq2kAcs4gGLX18MX4k3GxeK3kQEBgU14iPKSXqaF2vZgUMdJY6MAh1Z",
  "key4": "35zt7RQ3EvovHg6up64ePguHRbQHDPTPk4b9EYFNDGYY7rmVL8tMuTsE1SuT4U8zvR1TqeiGxLbGCAsyQM6WCqiK",
  "key5": "4ZaPMjFMvuBTXLsXXhKWog5hjS7Jq3icXNRvhW1Amjmq4PUsdutSpNwBTiokJu2aEPwJZremCjrkzXKu8B7Jy26U",
  "key6": "LcWqeAX6a3yvGkjVEGZxksLc1ebRmsbUsv7AyB8U6HLMNx7vZk6V5FNwPoSNyxHQvW9w2Rs431K3Exx23ePxrCn",
  "key7": "FFSbDhQyN43frB2dGyiUBZhiG1SUopew6yp5r98qWT7zgsWR1EzGYMEnopAh4b8EWHRjTPNDdGdJz5yB64rYE77",
  "key8": "5s3hbv9Skogz6ojiay7sQizFNqK6r7sDogRhNWQX1BPjtM28ZnYJhgrnCb8W5yZJqSvvxdD4Ep6B7ibUzLwBxbE",
  "key9": "59vxHY9582KrNwedq7pGUo9xVovxeFTxVCRhbdv7woK5APyg2BsQTjZBkEXJWPRZaKkiUErMMUA83rWuFhhWz6kc",
  "key10": "3zFPNpaSvKgBWpZsyWzHCCSHxgrbnvhCEPtuPVMfgUkSFouUeBE8yUYZS5sNNk3Ce6hfpaMYzdciyJTh8yETK4JT",
  "key11": "pMea6CCv6xc9Vwe63TgTyXxY4hjuFZ7RMQyK2DLfzXHoCvhAtUgxKrEfbfY7XpZkYfZTRUAwiNhA2vaUK79K7NA",
  "key12": "bQq9a96Bvi2Tivzcetoa3mce1WLaR5TVhUnQLuZXQ35vCCksia37H3WAY1xz1fCZjho9272jfAV5Q3fMBem4s9C",
  "key13": "4bDppdL4VutXZFSaRQEWiS7kZCEwJie6Xw94fEChq9p3QvAfGUMTUuJg3bGybPqkoneoUicgZLtsi4TZisLDSH5X",
  "key14": "g6aNAN2sFxmFmU3CJUrZiCWMZoh1tQBfrh2KwpBhe7GrsWKJqqHK2zyYbeapYyPrWBSbKHWste7wEf1H9oH5vXE",
  "key15": "5mvcUtBF6Q2XVASTfavF2dVRT1CoSgdphYPHp91PzJoKV9aiaoRe6S2UToQWSLQnfKbvMnxRNxy8tE1xJe3vH3LN",
  "key16": "oiQW9rLHRrQFnqm2WBJtvxFRn1bP2GXQmmVdfy5JgnSw8R4VCfdtMfMTrAHDXBtq6b2zjPsHUc7wZGrUcJusDgF",
  "key17": "trjBPHZA3LnRMMo2GfchqhunK7vf7N8ZZknomriQapwGkMBbBduKNBmdaTDBD6YBCpCMdqj1gJxCXffVeLEjQvq",
  "key18": "n92ZscpDTuTNpRChmhjAYXgcjjk8kgJza49tVwDntDR7Tq37W445LxgDnV34T35mewaavDD8xiB8gSirjiYDMEe",
  "key19": "2ccccVZ8qTZZfTzm6D8g8o8Rzixpef6sMN84i5dUuDUhWwJuzVhcn9ZxZeFSgG19kT3TLgTdYaekPXsDGsmzRzkn",
  "key20": "gF59UhyvE25jyKCZqattxeuZ2fJHAaxernjF9tShGJSerQ87hyWqXHJxhC8faGVyHEXnK856aUS8ZqRxaCA8oVU",
  "key21": "4Gbm8UzvPJRPU23hgk4SLcWvgsDCz7PS8MvUb5SVE1SMQD77n2nNTgYPJ873RKK9j5QTxjGQJwh16xxDoxMsdB8Y",
  "key22": "2MYfc3KDc4H8dxXMgaq5JQ7hDkKFPWtpkYkdQaPS3TdTPiv1BBd3ForTvLf1Ph2GqBAmZHZcmokcddn7vhKjP4LU",
  "key23": "3Xspa5DdMpJBUqjzCL4UNuksDVVGgfCNjaYKujPsdXU6fWJqtu5LJgD2tqGFoAGG3DWRavE5Xrh2Tk153uuTSrRr",
  "key24": "7YcE4MPAqp8dR4SUT7ddXsmiNB64tnXBu1Y2xv8p2oaCUEuWZb3VXE6aNnnV4x5Q2SSg6tzwNss6KWjweNjhh6V",
  "key25": "29kVmYwdHQVHG6xovYNgZaZUajemx6xZ45FuRF41QqxSGfK6NY8Xg3i4fkpDVv5irf17V8UYoTbBPqUSsecromxm",
  "key26": "W2EhNuJcfJSn5LTwpi9Jexx5JEXwPoN5Xdr5nGiLiK9Sja6pbnfP5ZfV5bV4XXpqDC5QwyCrEQ6KVo9RJfhtAb7",
  "key27": "5xaejtH68tM1niX6EaZL4pANeVowFgWUgWLTcmn89uBfyy74qSgAZebebShEhENCTiXisfanN12zAqsRxtKvt6cw",
  "key28": "s6VYiGRfAc1rjZxmCwGGhskL8SYhycNjNp1kdviUbTZBbLjrZ3ZB93KRUGuD2A7ydzE1Ne6KgnAmvx96wAogkNe",
  "key29": "dLBhAkBWbbpLDW4ybogERPGKBeMtKtxRrecB1uowiFChdLGms1uUU6UDeE6EtCMzDUte1GsgVakArc8vvctbhT5",
  "key30": "2bEmFoPS8ZCQz29NrU3SaeX6RBunzoiUqU369uNonYUxg6Z8Zw8omczYC6mvKPrMzMkfLX62962M95AreKMjLsf2",
  "key31": "65n97L7epFNFbobLhUNTDZgNNhAj15yBk8wTDtAL7Fo5nYXiVn9yfCu6NGrPG2hXfLb63YTaSe1GGEp1PXsSH8mv",
  "key32": "S9ExTJsDAiEzkvqJzScQhFmWGFN6WdGcjkVUC5hnQ5GspmuDcBL2syWc5aEZBfAXnoDgLY2TovW1ueEEwGrXLs5",
  "key33": "3rjLasKmBxnZLa64MCMhvZkkNWKprtp32btN2WXhXNPtoJDFcS9UykEq3kxnCLvgpFEHwLPXQVqPrREWo2wN8uzV",
  "key34": "5HSgbBDAFucXXcqRqTuEMRCtTPduq7zx16dSFZLCpsKx4j8aKw8U7JmhyaLjk9Rc7FKFb4CqLz2KEJSDFspmRzwc",
  "key35": "2zwyRJrH2z53StCv78Qt7H2YvCboT7VVsfZDg3pfPDaM1G8hgp6S7MLqq3kPGZNweSmNSKuKQ1fShTU33vHpGW4W",
  "key36": "4aU2jJBnLmNf4rdHARPsjwRnjAWXeu1szz35myvn96H5EJEHzRT45ZSz2ga1BPQj7FDbbJ3CfD6DYNsP1trrErW6",
  "key37": "5wviVZLLcy69cagHEKYV3j18KgfYD9fSR3kYwQG8vrUgkfiprHqLqSKX3Yo7N49Kn6mYzcUbRfDUiAbbcnPqLArJ",
  "key38": "62pQ4pA1KNR1HSsqGQEJmsxfwYNZrPcTNkwe1WuPVzou4Dad2h2n6ub2N7DdSyrU2RAorPGp87kr9H7wbMej3Chy",
  "key39": "623joQC7puAXS9osLaQUEFsWCidzmbKU6FzL8MDi6s4Fyu2enya7CM48yALctC8xNfQi1L9X1zVjURNj6adUU17n",
  "key40": "4t4CDVBFKBm3yaP5MWj9b2LyZMy1m7ve63ZkTtEhh3bnPwNtFaaCveZHyLvLXu1v94LipAfT8sT9uuKYNivsjVRg",
  "key41": "4bXKGJVb6Ysvv5AqSXuDHTGYBT5Z6mSUM6M5oq58sx5KRXr8c5nNEbMMqVCmGWEJs5pgb5U1gy5NTWJSrWJoJhxh",
  "key42": "ZAbUxgvjDCXojxB3J8YtpS4YCsEpDpHjbdGRpBCrP8fyvv8SRpgbw1VjvVKjSbwVqGJ18vZEuNzKogbgkv737bk",
  "key43": "4CqGSKENs5XsHEUat9NC2GXR6J6nvfpJaBmBUfumTx99jY1SzcNzNq7cuZjy4vJyBnvVzDtbVLjhkZej6x8eMms",
  "key44": "45r9TQfJGMY7822SdBG2jCz4eUa4nkX6H2xA3jyJQwpAj8wHc55mChYuHXG4VXku99HZoL1Y1or6w3cMexZh6SZC",
  "key45": "2Jvd5KHFdpVsKXkhSHT1Yo692KWAEUgs4FZ9TrEh55CuqtNhXd6DFVypVETs1Arn8mFwVsKRiYBFuzWXumnGoHpP"
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
