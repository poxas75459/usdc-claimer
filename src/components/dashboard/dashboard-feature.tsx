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
    "x5rtEy74NcPWG4t98t7N9ntVLWFacxf3p1goLz9gDKj99zoCekBnBU3jfbAsEaAR8F4N1pBB4yz6J4AQD4bHJNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rAiWQ9LMTBS3Lf2HjU4GSDYHtC74D2JzdxW3F98FzB72Z391kBszkdpDSjSgCUMJKHHmjZKtYCVpeTtzCwbeLbT",
  "key1": "3CseUhvg4RYXbvS6szjE6GkNvdHtwMuv5PwPKDVbpj75fnaFGzm4um4QGMmLQYJxLatL5MKSiLJrmoRw3EyCwSwH",
  "key2": "2RH8jLnHA9YGvCpKSB2LpjRahbbXkWxyCWVj1FkrqTwdZiwFn8sSoxAt7v2SbYHkHB5aUK3HJe4FUuWHwHu72FVA",
  "key3": "3CAWjU7cr3ecnXsiWXN3E6L4QKbhjPJDjNMujLnFXVHtfR1sysMRkFyFWpRDC26PBDgt2KFdg5jw2kzyokZgmSp",
  "key4": "2yVtWCxEp6RCzbTKpXrRsg12LQ7tv1cKQo39J7KZ1VUdkpzc5Y5PkCRqLScoFPJMS5mgEBobQobxnaN3KiyYwn1y",
  "key5": "5YbXajGmgdFDKRBpHcyZSyHjLymuVJfx4AJAHbmUk38bhRigYokuXG6mQMpBdzQRsY4siL1dTA8GCEuAH3cmdwmD",
  "key6": "omWRY3nwJFzrYoiXebyCJMvmecMgkQqamdagNcubcnzvLes6EUyhiP6ZtwTZpysYLRBV9mvDMmX7wkJ74fn2qwP",
  "key7": "3ei6AHfLcWj9zLQxo8mdTSV4689XyAh9zjFASBRv9w4c1ix5cxnVrySWipVCC64x971r384nP4denqnZ8z5xmUUo",
  "key8": "5RGsTXpwMqyMgoERfWiuMwvuGb9msiRpndK51Zt4KPk2QsugiiyK3dyob5bXHQqDkcytdJgsvkRM85faWVChsqU3",
  "key9": "561kWwvqkL5Jp65ZBv1NGwUWdrkfJgCv2BWUhHEFthLMBpizigLvZWe49Jbjktos1TJFpPBNQ6FxiuP6qa3TGdfw",
  "key10": "HV46B6aLZPksZBPJmQZ9mhWKDvLLTrhpEL6ws5ujWWWPeP8WKxHnjaALLZd4HzariBCiZbNPV6anp2kioj2pY9o",
  "key11": "2VGxiK8aXsKdog58Sahjzb4GVA9LzjJdNbbbZDmGLCYbk3NeMtiTmqm7NyNkqtnrQE6sNm4Vx62T7BM7xTqnwVsB",
  "key12": "5rXkEZ7HnDM96Ld38tKd7enkXGh9Ubygo7pvAU53W64JYKut7hD8ZDLgVUzqHiHgVEcom8vYuoKvyV6nypgV7w5G",
  "key13": "5BkaMVXLWW8XAT8eiE6rdaM8G6dPGQDrm1o5x5C7cM2MnX8m3KGaw6JbEumxpiE9FarDobqZRsNGZsBsBJBhCT4p",
  "key14": "3V3xx3oKF3ufvdr1s62w8UfcaxJZShH8Hqw8mdEvAnJZ7wsR5SgQxL9KuJ6XAGjYpNtWtdgfPV5UTuQPAbXDep9T",
  "key15": "3kGYzeJSQFkD2pht7M5xYKcEQn26fKbEf78G7bjGJqtB9vn3qRadvSjoAoQFFLCdBsXAifKcAmyH43VQpgzGnDbN",
  "key16": "2bSqQaRHRDZzozNBSVjd9ezXWK7KrqB6defXtwAk25fZRFTDGWtZHuipQPwfkCjS5r49yCAoKzJbWwXYEamFXa7e",
  "key17": "26P3byMR1Xk7Y2ybhV8NXX7yjSSiQ2gCAY981GcS3L1Zhy2LHiVnWyZeECnmeGTodfHpSKYQ2EQyGjRP2kUcSk32",
  "key18": "24zbqMddxM9oF3xGwuSCRU3vLaJXGpCz4UbmkQrAov7BKni9Lmigzi58JRZoSSCnYuqekktCyt5WACP1a7DBRcS9",
  "key19": "4dgtZdDysEnoa8qxGXDzyHFsFSK5ARuQf96Ur7EC67RssSBNDoa9YAztCc9qzPSvaaU1QHyrMxAdq2mDpo7NSFvH",
  "key20": "4thwTT7HpvmzwaEaUDMwfUFBQr2bsMzmFTQG5kFH32XV87jeUnDyzXaUjk2K7suwxY1fufxdJ9YSXVSYzAQcbSwa",
  "key21": "4ZxKEFAEbac2KuRtdbEKYKoe3AqU2tCJ9ukFpHMmVy41ZYHoCTT1JwnJZgDyZ8XrQ8M5PSTnHG7xfRJ4NtELpNfZ",
  "key22": "XeSy6A2etDfRNZinxDcBiAiYdL1CDFhUb6wxSTjTJaLvop4KFXBX1D5gjNQ8ctZv1sXUuiTU9LQqTUGYd1FJQ5U",
  "key23": "D79djkuGZCxrCSVZC1oYdAgDdoDPPitvr7Y4WCq4DCeiA9qsmY9UHDcEVXcw7j1Y9LKYWtYUkUamGTYC5uWBhyT",
  "key24": "mutuTzsNEr3U6zhbU8FeakHwkjqWhPXXkja1tps97YKjbUY9P4PSnCwpFDEYTU382tjoP8CR9DHpq1BcdxzCtqU",
  "key25": "2vVFitEajYmdW8puiMEyXfDMACz4ECKfbhixS4TyiQ33Txu9uruDsbFUfc1Ha1pHXSph8QToJjxJWng13V8Fke4E",
  "key26": "2xzUX4W2bpV6ihQPvs1XxDtyBQkfaUCNZyQQp5L736P1hGUrrpUmXfcaNSBazfWiPLAjuLY4SC16QuFP2WVjcsEk",
  "key27": "3VozTht5SqwccaNv5Zqner6XvMzDqo1cg6byYBCiaQAbNvs2CgJA2LQCzUtRhkHk2YHDxbSuT7cRsMCsFaHZ3wLZ",
  "key28": "3iuJdAvKZHVPWidJi7SZxAqeZ3pkW1KhoxG5pa8DVtFF1wfCQGmupe6zMHEVWRGRQJN5d83pomDaNnqkwz8QbM6r",
  "key29": "4EjnHMkm7C1XBza9UYYB1EtGWn6r87XTpcwYgrj9BwY2Z8JniUtJyyhkMHgodKoeZbVKFkCqjWgQEUCKRskpy1GS",
  "key30": "51w4JgHqK2RYJ4fZFsX2C1afzNjfJKJdQjwuPW2oKPXgQUKwsmkKqdSfBvwC4TbpL8eX8Xjvq5BKHVfAcrgE5kcM",
  "key31": "5D6Hkrfh4sJaLNLbyWQEYqAccgkab9wDBvkzCaLr2PcqM7FapXKCJXwxxTpmYuupxuT6aWHXUu8P5A7taQqN24nJ",
  "key32": "5cG75NuhCbnLJrd8Yn1PEqnKASwaK8p6JVWXQMg7h8A4fLh7qbTbHWu6pMEHAsRfEH7eMd1Qfb34kRBBiWVjnVE5",
  "key33": "AxnBN83gMi2WBZoKKEES2fafDGampXxJNFu32EeBeXiDdztBNVdK8V84FZZVMckTSgSaQR85rRXNg57mGupN4uS",
  "key34": "4cfVc6YQDAt83KVYN7fW9R3xng4iBpNae1vTJnVJR8FvB17JNYGSGzrFMTKKiBqp95LEK2zXVv6SSTaogKboxSoN",
  "key35": "5faLa6ZHWf8FSsbekN6s8HTdxHKvTiibXigxZqvMESZV9gLNYoRoqjQdNroEru5NJbyFF6P6M3Yo3U8LzUY1nK2G",
  "key36": "4EH14zCEVrVUJMLhdATzAoRAJxC3rFPy29PdeHxBq6YQWsSQoefeQvmzqbxVabj6QFVNDAmeVgv2JCgfMo5i5fn4",
  "key37": "5L4cDRCJGj36cVbFBHY1kJ72jzdkBUYc3PwfeHq1RpaLFwuCQosujQ2NxEXxJX7A9rT3gMQiTJTxw3gZq4N2ugxu",
  "key38": "4yShEjBNHjs4Fza2cDzaCVX6xseTTAX4panbezF2uH1ZdHxHW5VbSoSCsHsKRpACTW6jy2XYAGqhx72xbzmqWt6h",
  "key39": "4R39A5qmeEr7SV7xybCYBX4hpuBBWDSFGBbCuhdRz4VattTEx1X2Lt9zSWQr86un9jT5eFiRfyHK82J6rVvJX84m",
  "key40": "35wjF57gekaGt8u1gWSiAgeL45JEDMXTYUUH5zDnrwaMWgJ3Gty5CwHVBokER29JmWxV2JNEyEtAe56SeGPB2koi",
  "key41": "3Ppo2iv1F3YMCboQxEgUbqyVW7DTSTKWBNUeC8jB1n3bqxfFoimToEQUaxdw9ckjpwFGcKSFv3RmcXF7gsKmSnrq",
  "key42": "23SrLQitVTJpekYZTUno4vSDL32KEREmxsbNgtHmH7TovXcjyrcXBS9DBtjWF5x3Ggae9TuVvU8R4mNdjameZHHx",
  "key43": "3FJQcLhFpWFpWwzSYi15fvSsKMjbTYGVzYhUzprJjPchvisThubTKASGhMrXcGGNukdCN9AxLweiwUN3XhHfcXzp",
  "key44": "VRgqrAqJU6poELLpvY2U814ktVWLin9EdBaRQ3fCML2wdReEAfXw8YzmEqMhiDE15Cy5xVeE1G6o1pXYUZfFgVN"
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
