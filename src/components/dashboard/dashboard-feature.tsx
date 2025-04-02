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
    "2DFHBak6uput1etfYSXLfgYSo4GJWQ5YhTDKj9d1oK8FewZ8eiukdwKUSyZmKqpgajEsuTDTZRkZ1keDAxDBeYqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48up73HY1mrR5SnNJ3WMda9JkVWahfLvSUz3RbAMqt7dgbyzGHipXbg4Hz66dvEBpyCzX2L7ouPeDk7wMMEAcpFr",
  "key1": "3bky8V6fPYEdcLctzRSPvDw9gTga3tiF2jkVnpzTqc33Gb45fUJuD2xvE9DN2bVtQNxyauj1dwQCnNhAtKifpQBY",
  "key2": "2k1WJ1w6nxQ8teBFuoxn5hKmFbSnjMJgsfdVYYTLnp6NP8ccNPssvmvbHPefVswVnU8pSj4vpbmb4q26TXQJUjtx",
  "key3": "2AFtapSuLVhDEcSLYjmEYXxJxsCrPafjJQucsvLEj9kLLuHDLyLp3zCpmeHphmL8bY1X2Ad17o7p8LCqRYrt7N8D",
  "key4": "4MoQsQEz9ziN7YM1rCkn38YiVhCovW34TKJx64gv51BoisYpLV6T7ywtBEKK7YuEfDrz3kyFfiaTrxbF6LFgUCtv",
  "key5": "2xZoWiu27s164B47wXxsa51gXLwcQtt3A4Zx678BBGMeJFybqfZRnzgjDz1gmTNRyCx8YoACcmQXSz5nacMY5VKH",
  "key6": "QBLzqu4jFQ1UxD3RQcEJtbPDQCHvfdccd9y5vduseQQLFYVMkBgZXjkFDLwJzehSYZ4hqgorBkz5Aajqj4uGLNA",
  "key7": "uZaDMyJTr5gBo1wPkdNkqmQS5zKVPYm397Nm9yHoDRjgo9xNZZBffD87zuboG9rcjyGb3kyWt4juRzY4xRcoEpw",
  "key8": "3NkpcKRshd9vECmyGAcQaUQHgtT9v16y9FxGiM1Ge4y6a9XXcSp28qLTWf7nKgpLc97cu6E3WkKuGx3MQtBym5LB",
  "key9": "4wz9ZzbAUeH4axghVcvMNxGFm98z5pJLh8QofP4SyQMd47rboxb4HS87bVCK4XuNJAndHETmjhodGTMM5uYWqoLe",
  "key10": "2CBu7mN4cTBTRgZAbxzWdF1CmsHpXdAa6JnpUQ9zmASLaqVbBAvL1opLNwKZgdvrV4GGtHFe1KNXwUVSSXRVRdTy",
  "key11": "5gdsJZ7i99CFv48YFQ5Vq5N7RChs5DVNRw8Tj156CNV9RoWbjt7XW47HgL2xtPbRPAxdaseG26drRAvDc3KrdGt9",
  "key12": "4SkHR7B57PY7XQUPQiAHCZcrEXEhwtLgjPB8Ykp5oJDgCyJPXMd44GCpqkuFBPvC23AaH3PRHeSZrZXeocBVP65C",
  "key13": "4KF89cYC4gKNr97eXZx35yvF7EgfgWvZMhf8kojvaoskw7CvKMBrzcxgJoZW33zJueMdvn2nCJBx5PGgkWTWWwMm",
  "key14": "2qZnNQ7VC5Ex3STf2WaXv1n9Vv3k4kz6TXXNYfxNUsMVLsaqHbNxM5kstxSzU3zgLMSWFK5n2Zaf2v14tQyLHK6",
  "key15": "2tNdBkhz2S7Cy1j2BbnGJ6d3euMLbj3CcUaAxymgXn1qRToy98XEUdTPZTeaTS5WFnuRCQXUcPnH53kQ7tcKFHwn",
  "key16": "yuFZi4KKxEBgXtQnhMybqiLZbfVLwPMvxmwuzUbw5GNngUvdVWo7tcbrTUXzK8uFmMY9cpA3YgQtkcFE7UYQH7J",
  "key17": "28pRdaiGZrAhgvdrWB8KRwgAxrHUtPuJaQUKZmsWJ3yVQMzmZfjvBieByZDZ63u9UJkECK2rgZsvQEUZ7g7dmnv6",
  "key18": "HPhTGxqsHZzBK6HuzqWoJxHnkaAJVH6QA5LYFjtwDRziCyFqWfQ77govw5iPBdquzNcRJgqUxjpmhztEjoJUyMi",
  "key19": "4EQJNzRd4Ctb1LHQgqFc4Ad8Xuvo3gUcwjsxJ2ztnQnWnagFGMrf3cnCansYah7wafMA3jsQnNo526HKq2ftWtTu",
  "key20": "5HEC7wJs8Ja7WxadMyugZ7TQj7xPdHNxZa245vUczpfvmmB4m6moGwbxxnwWLGjwqPftX3LsudLVPS25f8gkodTa",
  "key21": "kkpH9xK2w3GYPpzgN24HZUxU63nTLHtzMuJeDtwSjP2ui9mTkJgQzXoxcKpv7awNyvDeDXNfd8qJNYfHcyEpXFc",
  "key22": "41zZd6PvDhEKZst1mhxchrY31GccZqfQNzxZNMjvtWLYbn6GJ5oYHTMB7prHM9VaUrJSYxaad5pMVmqHj7JS6mgp",
  "key23": "54iFpP1hpLnwhBm1tVtHLwYG6P1v8cijZ614ag9yQk77Ki81MwygKURbgHS5U88hejuJ1NuXd96y4zqzKDV9euYZ",
  "key24": "5aZGwaQ4vwxtXdTkgc3jp4Yf4evH3UyqidbfnuMLNa3pY7Buw2Cz9Vz7nabbjtCLgqe5FSAC6FYzDCR8wJ4fiPLd",
  "key25": "3NWtL8wKupoxi43AdmBnPoUSMNYtX2nbBm2zm9YZV68Za21CGDcKYu8kDDP7PJn5k9u7TdzA2L8p98n3TEQsbWn8",
  "key26": "2HwzUwbMKs54GCzrgUhREDLLciPaLcj8h5bArHZCuJSZsbCfmhxi3rsgVtWHT58f2tmiuvG8G9s9HCfvcnVdkW8t",
  "key27": "36ZFWevhBM86sj3LNEkhQDRx6ASGKspoPnGauKDRirPm3mQaUMm4Fbk4nrkNXxEwcCbLxDQagYZkrJJXAp22L1ds",
  "key28": "4Vm9fnQiVwaLxuyaZaFmbdFc4w2QaiVGSu1fz3Xu6uzwmSDNc3NyFAWBqAVGhSgVHjWTM7Mmt6s5B9ai1rdJaz5R",
  "key29": "77YywrFnBCCUi4TC4LLKeXvS9kSrW6e5mA2tbWrN8L2mSaoeiXE1Jr3tVwexmYNAa3X59vsp6GJbMGfhJPNz1Yp",
  "key30": "5L4XKy1MPSgQgp2bPuURr1c1zXx8rDJm3C3g5bzYXe8PYFm1nCvzTZtBWX3mTGJZP4XNHurM8Vc1k1M4rTKz4H7t",
  "key31": "Ront54VFnNACi4vPKmTdHxTpxFLUgJHXCbwbvYGgrR3jJc6efqWiDVA8tLdezD3gNUxZ3NcQA9J8B1uapx6mDsL",
  "key32": "4dxQszjmUaBMjg57zx7asrJpyKXQLsncRXstQ3yGLv5dN6zSU7HsVDURv2rHmjgReNVmFyi2YgDVGzfdSxUFmV4v",
  "key33": "pDCKW2xLDtY8avYpL9atLjxQDKXPMeqKdKYMnhv3QpRMz2pgw1iePzWoAwigpq4ZXXURhCcqpnJYEaGBG4gpXYA",
  "key34": "4nwfSg4aP3g1hi3xWKD2TVxamVjPbRn1XRSeBVYLitCTXfh9sgQ2JYHfQWv2sRLnorAdVeZy2jVXhPnzFzLF7AbC",
  "key35": "2jn4haq8cBUvCjdwTTbfh645LYD52JHW6XPbvJFu554xszMUzG5ne5S6mfes93SRsCTBVxoD4vBWXaqsQK8XM38r",
  "key36": "2Q6LfJTwhGZrRBeEZyGm6GHsdVGcr17gfxPLaav1WMXfV74x2dwtXTTFjs8NuXRBaRe2kcNS7iM7afXKVv4NzYzb",
  "key37": "2GdJPokV3wBr5xKwzB7btKigCY9R6oD2FarkLq7ioioNBLyDRggUbjnDNC2DT2sw7zr7UiKYwnEEygKUujqmRZoe",
  "key38": "QyVuYqJJStg5dx3Mpr3wy5hsz5npG6Yb7FCjv9CGMBgWY7iU7iHEaYLczD16iXikH1NXBzFmrDx7T2GG51jqX82",
  "key39": "2UTWxeKiV21rRAPABc3DxTsfjZGnj5aZ6kNvHrEqpE7aLMFEurxuTXTKwKBFoCciw67ETAvbA6Smxyh9PM8zAC7N",
  "key40": "1PxpKJuv4e88tRXZUmN464SbdZ6Gn4oh4DJXGC5vsf4i7YZnqpfdpyp9P2PnMN9yPahhQ3EQfhg6CFZ4aUb83Py",
  "key41": "GbdZMT4R2gZJ5WMfMrcVRAaBG1JWGevT9wJK86EVkjPqcY3MHJXZVLHSVQgzznuiXpkopJbCwF7vpn9mogdTLz5"
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
