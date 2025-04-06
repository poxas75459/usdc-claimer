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
    "611a87wYreyzKSY1bEXU6kQdHCX4AcGdXErZw337k3xw9hAufgq3NXzMEhfdreZDuTLwa7oP8GvmqoCd52ea34nJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HSufYerDx99Ef2YzvJ9PJSjbWYV9LSJr1GGZYSGsvqGHPYuAH1Fp6AtX4PvgqqqFkx42XBzv6yDDMTkyAZoRfh8",
  "key1": "5dQhbhY77PVWMQZfFtcFLGUgfpUMFhkrUZhMeMnBRs9pfgDMrLVWU3tPgicXbeHsSheoDqTmoqCqCWLDTiMoEcrg",
  "key2": "2vW7zUfd16EyEn2b4BnAheopLCZdKDrB2fymzYqcncKS5ni2K29N5sQwZc32j2xsF9vxJYDc4yiqPPDMwHfg3zfB",
  "key3": "jDRpxREioCYJvo5pnuhttFWf4kcWiatwWrd9HMcPGTUgXS87dtasnz8qQxRQPQMRrvRHnhcYFpNFpZwnhZzVURZ",
  "key4": "63ivf3w2Ese41UHrz43WkWLzeQTaYSSnEgseE3S4rxSmoBMydeeJVVEPsRpWu6pWC2UNrnkLyhrf2GTVkcgibnv1",
  "key5": "2GNTgdS7vunQhiiJYEYTEtSSgD3EodG3vefpBQcNrH1L7nLiMfYw2LEkUMn5AjXtVng3JGo1mH1cSLYRbdQzJAzH",
  "key6": "5KkXiRxqNoTScGBqGubV8Q84ZfU1tTSxT2WNwXPtERWRsVDYKEd3QBWbA8DBGKeq33uAgDfkRteDwvS4m1jjyKsK",
  "key7": "2P9gQxJjAB3qDRLy8efrUGLYWSFg71ox2wBf6H44LtmnqRcgHVxYDonLRJooxJfPiqACuw8UdEieUthq2axtUv24",
  "key8": "471BxCBGCPJh729XA445pSuAQ2u4VrC9zkfUW3iMd4PkmfkvuMURo9w9sLmjFD259azPrRtDjwXWHJR2vxmYAP3E",
  "key9": "35kXkgdstv6wZn5JfRtyz5SWfmf2yr3Qx3ZLP9uvcc5BHVL4FRrmRSZ5jFEdPVU9KmCCUvhbyCga5y9ZWQniqCvz",
  "key10": "2GUqY9UEDC53DK8GpfYcAf6Empbsbc3YoLgAxBxLKZKoyQWAS7PPQhswZm6ATGyG3Mr6xuDEtUxqv3jm22ykXsDc",
  "key11": "48yhBWMwSCnktw2vxeo6zPkwUS9ingZcoMVevJRnjDZJZFE6DiBw33FT4jfS9tMZ7Ue8RVn22pr4zegGKUTigQRt",
  "key12": "3tckUFXXhMjcPxURzd7k2rCirSaPK54hX7osg8RVvQBW9SFim6Gj4KScbmDDDsKdBSw7T629uybNzQP13vpLee4d",
  "key13": "ixNYFxq3FnX6x2NH1vxWfzWrDkULghAZRsF3yM6ZhjHNACfKjkwVBzpcAaTrCaqCpZUAZWkDb2QTvHswTxDRww7",
  "key14": "5AKMJSvb7916QmtY5CENcRhL8MZj9pEMs9sjG1j9MNLRN8bdWhQBBdS3HsKXk36VAdKT99BiqeixfwFGJctgbB1j",
  "key15": "FvGVxq6BBKqpawssPxMdjEDEPoyziSCBohem5TzqpsZfzrqjFoZXsL78EiRc4MjaPtbwe2VehiE96pzLAkEYB3A",
  "key16": "2PP9jSUgdMsabcyah8nnsp5K91ByrbGFyND5ogCFaCr4QAapCHKpa82XdyFBXcBjboAtPA8qkdqi1owxaJYeJ9ja",
  "key17": "LjfMp8uG9Jn9GoKaabY73EANksznG2XWmo6e3VCx8EQqgUgKtqnmkG1FrM1kEdPD2srPWv8JWvLqs792XuaH5ih",
  "key18": "4Bnjhk3nTc2ZdSWfcfHTQ7Kogy2pmW3XAR4VVBM8VyDiCNWsGTfNm8aBDw4nNPNKBDD7MAoW2udmxED3dAHFZ22m",
  "key19": "2rMdzEiBWZGPuWB6GANgMkeX9CVdDKAQGpSyMP6Kf5rnPMqCnvwq114rDtzUwcdBZQMK2738Uguu1nvpYVGU8dJN",
  "key20": "wsMeGJfHYw3zvhVnh3Qro7xgpWpDKE3P6MSKdtas26GCFSC5SFcYRKEcuVD7YzhAdd9rUnYxMorJDUBvz4wkWHS",
  "key21": "2NH3JeA3XwS3nUCUmTtpA6D1CCEwAJWym7UFz6LrjQr3cVs7CtQZGLHu62qA4h6hifNtTuH8yJK2Kcvz2XTMEh9c",
  "key22": "KGfgnzUDgZCkcVCHpYYEJY14CvKswGVno3XR1tyXjXpqs2nY4GhsQXZMCdRrcsVJhkqrkNmC1em2BpbWdAtPu25",
  "key23": "5JreFz42jrQie6yFoPNsiLebm9txoYHLpQdW3kFNYH6QrcRv8R1rCtGSZSGkzt5TAH278VVaZD9nSRpQugA8eCgS",
  "key24": "5DwE9p4LzLEwQj5q6XbQq9vK9ikxqZ53JLBJgmGmBpTdTeAqWhqLT1JM6gDyagj5X1uw4qrKSL4v6EiAwBACbyRm",
  "key25": "2k5txbdDzZenm7ufKynW8tVaHGyLtn9sRc8mDygWUimBCAsjpVUaBGpQcoJU2MPSuTjZGuZJynNCmXxHav8Haf3z",
  "key26": "fQCEhq97sLoVsg8n2uWXXSkXuiu96oHRX1inWQLtxuCf3zDFWiYH6HSFDSUEyviZpebjqXpAmqeZZ7QpK4zkGnL",
  "key27": "3PUjo5RokDKwDtxaL3c7Rj8k3Xx7ea4QdAGgdsEAh96FfZnUqeQYaF6UEZY8b7QcydMUpbneKhzkd4wE1vrUeRkV",
  "key28": "2HLF8XiaWEnB9pWbtDm3RtKRdcsUXuhfG7WZuCf7A5oFKqfyTTChpugkZ5JC4R8R7cnxKx9QRhbUobntbkdn7FMs",
  "key29": "3GG8hZ9xybTj2ARoKt5dYnqtb9RCfy3cgXJ3Mn7wjxuMkEnGw825GAxUTVonPhe3b7w98EB7HerJNpXDQXhgnKH8",
  "key30": "2w2kMfbNSi49cz3C1BMBFuEupYS9kmf3yWP6MvttBK3twejanxRmd1XFbFsKKSqjVQQxXJZ5LhcBHfbbBLAN19mV",
  "key31": "3RbK9wK6sZZiNGybRQ413S4Ny2mrsGFJ5438z6qMuqaV44gUcsYTNakgVVhwmjXW9Rty7t5WtiqKu6xwAQWd4meH",
  "key32": "xdjTtLTRgJzRiMUQ9VRQ7ZDN747h2cCTWPKPjV1byiMe3Jcu5kAJNs1cvUJ7q1APQT9U873aMU9JhZfK4C1Bizg",
  "key33": "4LmPkFHxtzexGHWaYk9TmZeTiCb1qxg12iZW4FxHrZkfubsBfseaG6ytgAYE3Qkw1jm2PcWCEJWYNGqThHzC7sNF",
  "key34": "mT3cuiguQ5TMFFQpJsarU1TKkYysbqQgGkrctBxZxKZXLzqSJjW1ctyMwKXs4sETnarkWpfA2N5q6aax3ky7w9E",
  "key35": "3nnenLJPyzTmqMyx3smbSmT2qZAnpW5r3HP56rCnzA6ps3Zn5Hr6rTUS6Mq2VHWC2R6kFjRhNMGaWNLjfAUdcmhW",
  "key36": "4RYTKnvRPx5PJRdyshqSWvjyxp7Nuu7om7jJ5Vk3tEAtbXX2jxkcg5xZ8hyPd6G5DnFaDEi3kmgyFeEvUe4wYhgY",
  "key37": "5tiFvAs3iKmPqcYdx22uarDiE9EQcpVWfR79dji6RWuJHVCpZSBuy5nqaTmV2SzSQhFYPZkrw7UvnMYrdE9goRZo",
  "key38": "BSBNrZwytQbAymHXLdEZVNSrtNzWpFsr8xBVnnavGWW9hspe9aZngVWSimF14nST2w8u58Fyc7C9M1g9Pot11Sh",
  "key39": "2HKo2WSE1PCjFB5zMVTR2TwhqReBSdTNMm22bs8EkxSYBYSxSMJYbPM9fVgcPx2C2kcUxE6fUJDhFoqykgeoNdHA",
  "key40": "mq4a8VHSzf2Rf5ARhJgQ3DuSfupi1A49ZUX6sVjaewYozrRMwqaEnwjxQd1YuTfH4x2kAfKyM2AQcrFExz754dn",
  "key41": "Zg9EsabEsUuunyibgiFXtdjjP2qQtBJiec1P6wmWzB45BErHHCWWCjoKhCwZmr9YjgPJLuR35vJh3ZrmjrDLBWA",
  "key42": "5PPPxrzW7A6CXV2ZsP42FBV9EpDXcpFQz3kmvu5rWen6ZR8rs2QHLf1EvGkAb5WQ3gB6AQY7FswgmuQRJ3AMD9bF",
  "key43": "5a4g4sz1ssXfUcDP31H2xK7ndQUb9z6ozCYdMRYxvKFYtPtLbJuziJeWSUPtUCtXfN4k7YSPyxVqNCicudXfofMW",
  "key44": "2NWDaGVV2bQNKrqi9NsCCzjyBUuz5xtqh5tK3iwf3XGGcHHViDqaJKmeQeAm2jwJSRHtd5b4Gv4kDHr85Z5MFVjL",
  "key45": "4CvL6sAYfcyiQY4tKovpgduZ5TkZHTs827S8wPLo4ZB2eAbopkwJYrymQAmmUpi7tb6q7DeKy672Qzd3Yywos7By",
  "key46": "4sf7YfJ79WUWdjANfLNkpiRvEDMguY5wgToukgxGujQ3SbFehVmG4kMKm4bUUX42JCZjJ9b6teLMjKZ6hUNxeQoA",
  "key47": "2HPWy3v3KTPygCikYKuYt9DXn13EwTPhyW5g4QZSKdtXBS3DoqDjNhZCe8uW6XJpyf21A5PxTKxUWJitbszDr7Q5",
  "key48": "4NwCv7ZP2sBtMNv5i23XyfyxmUeFjbvDdGybsZAYGqcpissCdti9Rzw5pAsvYEfSuVDp6uArCmwBWsPigQ6RPjNy",
  "key49": "2GCm6Yernh5JqJnmvbFL1HxwcUdksQHEj6Kg73eEcdqoMmApccfskM2jsMWxMKG1wrw1w3QMfgARBuEzMK3cJkGH"
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
