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
    "5sJSuwKszQCqobTEckrq2c3c8q9h9jYpcZRxpBXcZap3o1pPKqXYV9L4qhHTpV5yS4PMWwjeiY5f8W7B3oe4MAQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QdcFCtAzttMS691koiCcbfJBz4UqUo8gSdHP6R8VMzcf6ujG1MjmAJp5QREZqZJ4WjSVGEbR7y6NE69YiSmAkc4",
  "key1": "27rJh2yrgoxF5drfA2tsLkFKytyVVeVv8WQbH1UYG4Rw66CXgSzTUc7panKhFXGqgo5kifXo7qaDdQQysfE3yKZf",
  "key2": "4SRbX9VRekruQqN6btVLTE9dPoDFxmzj2z31TXHXraG4c9gnpQNQtf4PKnHbKWQW6BDX7i2wyVqujaW7bHsjRTyW",
  "key3": "6DWiigzBLcEDk1SQ3Dgx3M19UtB17rgKjbdKmggRe7rKE7NMArvAXMYU1JQBoajzC79Cm3rHZQVRXEhuBt5xVoa",
  "key4": "2U6KuBBS41UYu24Rh2XEngiTqZvcDMGUTyTgtAgbszQE7n51aYRrdbwX9JyysSxmVcER6DRMKS6iqHwRTQzTkMTk",
  "key5": "37B9x8gcdrLiP59Sgbu147GGBwzp3K5NR5tjjS7VqqNA5K2Ltq92F8JVSR74At5XNaDAcPuAbZurYQqaZg98mGVb",
  "key6": "3Bw1mC2ZJB7gEctCN4wy4L9p99xuBokpCMe2E97UbGcjKxJz8Mon25AtnQ88tj6LLRoqZbcehJruxeZNTAoRWryF",
  "key7": "4peV2Bya2xazogixdfXFvdF8bbkdcQ2xkGCvEQyRnVstog3nB8dHCefEMdt28xYimxKxj4CYYf1YnJrPhmn9nubL",
  "key8": "5H3jFUjmxvGHiqZPwLX9Nat39Mc7JbuWnmTCvRzMeyNXexYrRco6v1dzbXiHkVHed89UAErbN4Ty7R9mSs5Dn2h1",
  "key9": "3TEToijCvpy6om4nJPk6ZWnSz3rP8BobpsVdQ24Brtb88BSRMx1aYNjugxyE55kkDvKKBDGzagPFCJocTfG9rGFu",
  "key10": "3NmRXrMUkKpKYVExs3TyteUoMMp2wTrruSqUanqbatV5AMzj1mixJTg2yNhMfhwUzp1YxECggKcXkn2mkwWEGbzt",
  "key11": "4UGe6tnnSkeDVxzKwToe1soJNJPDYeWcmxYvL9rHqxqrV15r8AXLCBsFqHNYUkvW9kgM7ksqQUx1eQk8iaRyrX2W",
  "key12": "2yRiPS6KDoXrJbEZ4DPec7gmbR7tZeXBQ2m9SNyAPXdZ9geBTxsnJSo6TXzGJwSG5AbbUAgQvqrKByp8rNQLXWXu",
  "key13": "5uPeJH8qZEV3i74jdGrayVKdW6UZuXmBNA9DQF4JKa5Rdd4G1qEqucbiw12RM3sKx9rdCqy785dnazgiNkZ3CMk9",
  "key14": "5jkjF93Q4TNVFvv8t1nFBKaFkqrrrbAEofpRfyhECQ1jW3jhemy6ChDGZJrZMMVvepb3TysTzWyUrpT8sBjMrSX4",
  "key15": "5vXaJ9nYueDFV7wVgrAmgK31YdFkFwEpBSzdwH4ckU5DQ4xZk68ha7rm7dHFvGSb1rgERBdo2txoT6Qy1J2NUsMp",
  "key16": "47DuRPKTFMyqNqb9XiUcmhoCZLuPdZSrvxz4vcrEcii9UPgnti63FQ3N4KnxyGMMABawSg4cJJzMX3dZtj8xdp9j",
  "key17": "3MfC5wzVRbVEGSQYoYBJ17pgqtjSaAbvmyKBwMWtb7tK8b7HFzwFtJC4JRgNsNBLoFHuk6cumZVWigeohdPSV9UU",
  "key18": "uVtD2j8KzSsZLMzwrFZ256XxBTYix3RhosEPFmgkgyFbKEnZQ8KJrgkRHbbV29D6oVRoW2PCv6NGuF6WL8tpHEQ",
  "key19": "5WY8t9K3BwVzmi3mcDHnLbsCnnhBRWA5rhNUVLy4iwJas1Qq6tJES2DPtgLe3LspAjagF26Y4Nqyf4vAfoHnC545",
  "key20": "S7N6QHwHRDFNNzmKVk53pDm67zGXEwrJ62pjYcX5qbb25wsauAJAnPcSqhFKo59w3zVpzsqkzm9U5f5n75Jhy5d",
  "key21": "2kR4Jz6DBxK3uVUmPdnFF1jx8Uwe7tit235qoKy5syEYzdUmJBzHQ4Zj88AfZQ8VMgovw5dmEf8Qkt64Q6uXiUai",
  "key22": "5X8P4ZA3ThdB9oG8VFmbRgBN4BhvzkSN57t4bGEd2VPH4HNrwtDtN8ndY3HM8s9Rah6sw5DaHPYAJBBjeRVhgzfU",
  "key23": "2TWTT51iE1UtXcxYYPgCeA4ZQE7syogURL24mWY34wUyzs9fBxawYpRgzr79i5xXJ2G9nYMiPopJD64woY1XGNEt",
  "key24": "zMpdhRhs19fNVY6nJYmspz6Jvs1aE8oYjCNcfNM1eHQ42d9jTRw6K3T8i96ff3Fvr1AJhoPybon9We8y5yrqrBn",
  "key25": "aEfGVegbHBrZk8PWR2c27Xf6wnmDcbBeAPZPrtVw2XFfYYX7LnCKY8BJu2wjsQwnaAgUzD6cAVaBHjF3tyV3D3o",
  "key26": "3mte7TiysWC3SvEoyV1biBfTyTSA7AdnZaqzPz5K3s19FXVBWws25M3yAsmqnEoi53D86SQfeNomCVzgdYiknsVu",
  "key27": "54oE7pTwqoLJvuPNfUWaaWo6B2WVnkfP5sqC2CTYVoJaBbBR7KMebAqKairvKRgRxCdW8LffAU8g2yDt1apAMEeQ",
  "key28": "2sDs8oiaJQeJ7hWhH7xSeWtntEQBnTu1JTRuip5erJ3xkJk9HKFGe3fuXmwLB1phWa7trLCzoZK4ZyAxywzaWmYX",
  "key29": "5XQbYQdmBDznRWCATzX8wniPdahXfCPztPSNeqjbqFHFdvJk2tDMW3kH3J8y9TRv34pxTN4q9jYBDj9MXnxxZQ9",
  "key30": "4AMZWBjjGgwJnDKw6wUYZEZ4b4LRGGCLbgxb73mqqWYtbBUdiWEDRCww3ttLvTd1gNbG88tpoVRWW39r9FdK8BpB",
  "key31": "LbjcBFo3EoMp2x19KB2hXs2AKhdBHegE2VtRrtepe6LmnmFG6FkfmqUeaTNrMY4FKTxJE1Tbi5qnXv3gcVk32zW",
  "key32": "4LCZPi1qAeem5ekj13KjuiZp9r3w6s2K7i2xwK1APxwCMGviRY2FvDAz94CKHy2f5XHVCfRAjts7Au5WaxJpHjbs",
  "key33": "27aLxZY7Z7ZzJcUvLW7kERXbziazHjn7NCweT1kcFkAUk4x5iiDP7J3nz8zKiyB3zYaTHk5n2Xn9yvPwSdiU92yu",
  "key34": "4MFbeDf9E6EB3Eu7h1vSKrVaxsy4T8xWc2VU3owwy5CJPmvXUHs3JCqChkFRzpsBTPaRL4fJCxAm4hpv3SkfzBBW",
  "key35": "2BtB6WM5uVJ6Q9kss2vcc2ca38uPHHoEEmo3jdn2niWKmQPXvHe83iAKibhoL2rPvwQBiG4cEiQsippbckLiA3V6",
  "key36": "5F2JqRK94BykGD2Ks1DXuQk1vNaK77uj2bxKN1bHinEj8Tv3jXLQukSbp3T8voyxVSJru1W5JB7XyLzZDr64Qi2T",
  "key37": "4UYvS1zggBL2KdXPHv2SVLbAsj2kUNMgKnFxNZDCsgaZefrihFHufkavx4E4s8o3r3eju69h1fZ7JMAXyCQyfUmg",
  "key38": "5Zj3iTivALh2BaerK534psPYXu4cKbcgorpqi5s37tPSUYYFCcE836htqpEVf1hxKYHHXFwSmLyJ2vRv8b6oUZDr",
  "key39": "48DPygGRZJ5JwB5GgbgXbFVcTiteqba3ntnthXQ5tfnSSssMiLxVTSCt1SMvnzEfUAVzyfo4Nmb6Mg8AWBPSWSdf",
  "key40": "3fUFMSY7igh2yAaBxkhRcRvhQKVpBzBe6BGxsZCVGLFPJZYMRtFFxjiABXRSuSDGUpEr66v2mMFv1evuQSKgA2PN",
  "key41": "3jfb2Z2nF1yWFo7YtZMfZ9kVyXbSFco7dDL8ypepxJn3NFFMyto9qWaNqA2cCSq4yQJcRbsTfcybvnwQz2g5tXJ5",
  "key42": "2RPyVshwGZWHDfuGkiBECcxA69ojc5GZG4hdWjz7obmbpM5NRmQPsFP7k5iLpAPFfjnJtjNRwh9KmjobNuSHcgnp",
  "key43": "5yN439nPAuTrAwJqFGVTfi8ndxS5gYqS3WRHBZSyqLzEjY1pQ59YsD92uMNAUSeQG4QgNpKFfrqRUyXxuPK8xbFA",
  "key44": "2vQgKncTze4ufdxXgZPrYJFSD7Emn5hyoPGqPrkV74mR9uLHi75VrNTwLJZwL71QXm76VVStJGrvTf2MjFc8zzZk",
  "key45": "2xtLWrHVc9eCcjPM7VwqdYooj2st6kWHTdgLopzb6FnCZM7tBE2eMHZwJJTJxQBY5iokSti2uvrA9HG5vK2CYgCT",
  "key46": "2itwim7Fa3iSjw5A6pzcy156kQT6xFtgB2pgDXaX1ggkxJiTkCb7DiAuGq39YPzgHYaPCH4rUsAbTw7vQswbPAWC",
  "key47": "4HPDTF5QC9D4eBy7HiHBtFPPwEa9PaZnT8QkC59VtLSKRqawsbKCGjbfpnKL7yW5xzErooxm1ETs9rb8sx1bxniM",
  "key48": "5MFeXxH2rwM1kJih1vX3H782KHyPH5Hcm7QTxvj1whq6UzFFHNkMaYvNFQMXktd6DoBsZWbHcbaNgmDtQjWqY43A"
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
