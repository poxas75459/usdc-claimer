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
    "4A2LwacKGqMxpfKjsEQRqHC57skkgbmtLL9wn5pxYAdFftRe8QxShmSjR7fms5eQoHHGkZ19mWg9oamB2XZbxdKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZhVtPVuX9ZYdQMK7TirUTnVfo54DwuHNpMEMQViRJzNxHggj31q9wN2gr72wgowY14nHCgBNqpBVyHgVUVnQdk2",
  "key1": "3vFAgBQF9ig64qGbcPws419uN8iek5P18XPeREpW5nNmCNKNQ9bggecRk6UNHFMyHYUG3LhKhfrzoHp5p74k2grS",
  "key2": "5HEWPjnMhxnjRMX4mjh46N8dZe947kYQDV731uJun77hEmv7emqxwHCPf37aixPN7FqDy2HUTJjkHodvGRUaETyT",
  "key3": "61BRMeDioq4xNo5dE3gwV9HuaE33rWBMZp5tAjfLXqaharKMoPej8d6tYEyAV16aa6jSU6L2kXVszLZhYkpTXFVn",
  "key4": "6beKiHxqvuCX4tehNVuRg6GDmFgsjMeYo13YZuTGHvuA6BTWVovkZURJu1tyijBQuPxfpph8qsb2usSxCJuTJmq",
  "key5": "kVL58sfuqZykwrLBMFPchvAgiogwyBiaLXcZzKTgAjNLgzavjfFdLTEzSZNewwyiQSPzU4pAF7Ewaa27Jn28DuE",
  "key6": "3DGs7ChWBsYJaAmbfQ6QSi7AgFLZUZfGHjYhdFVnZka2qQqywKzCBCg1w1H9htyj8zXBYoPz9CLhAxY52GZ6W5Rz",
  "key7": "2HaFXJ3JNTXrfYVLqhS5Tog4qsC97wD7qeKxdh41z9uFujKW93X5eKB2S7soaZPBnF373cwnLxkTugWniXN4ncAQ",
  "key8": "4Pwcnb8XC5US7rsCDHTc8aHkHDfWCRdfufiX3Sv91njZGsjSvK3eHqgyxLXwUTTmZjvymxk3v5yeSgALqbZQQUXm",
  "key9": "8SyEnKw17rFiMme1GJcBUf1R6iXnWjLCZ9gKn4kC4Nf8DRc5hqrS5aETntYhX63H3zzWiP9eeRLaumXpNChQTs2",
  "key10": "2f988oJYoL8ykE5EfupF8eMHzyz4Eojzf4hFBR5i3FYW3GS8UzcPbEr6D7xUR8uqN81a4s6ksgMhCqwBYmS4aBC6",
  "key11": "5BQQ7cQUJizU2tPhpk5uHWkGjwtuR3A7Cx5adnCAo4rHx3G9hpYiYfqiPPtubEmDCkP4AvhG3qHSMXZd2T8YY34i",
  "key12": "4Dwdj65PsL4nL2DKAN46UKiinsAYkBJqPHT4jNw8wgzv3iyTNWeoGmZQMcpf7R7JqtjTe5mymn7UfKRLNcKCGdh1",
  "key13": "gbP89XRsrS8CRLEWMHDXsetYSaN9hKKomahepsG65LWLs1udRpgbh36KFAbxjPf5NHKW2TXZq9sMtTewQTxke4b",
  "key14": "4SMjGwMuQuEKvCnncurNne9t6JpuGeAX2KUvUZqcG5XZZwzcNkd6P4yVYqYwxo9y237ppyyP223GHwkfaT48jSrz",
  "key15": "3bf3X7bZaKeGogUFURT4m13zaga3QBD5XjLznyY1eWQQ1QBxF2NDCyKXRkxruHgACg1hMPYSevq6mnA7g3UDgtbg",
  "key16": "4mGTT6kEwqVA4zFtneqX783G3pCuTQxaCwQLorMzBQbrnvUzvowaRB9KrjsuD7GFrnn8ghMi3PbodjZvUm7ASZRN",
  "key17": "3yiGgazzTFaakXfGnMseLuodEZDgU2ndiqQ96R6gDLLQoTMApoXY5wfs7W2s8yGRgB2czMeXEehSUTwz9B6nZ51M",
  "key18": "3TqrZMboQxZCV1GAh1Q4vW5HGkRFk2NWrvgNvMxBoJLAG5Ra3qDiNTeW75qG5uhUmbda6hGF1JrAKcordmMCKqYL",
  "key19": "4rVM89aP9ry9Gh3WDjYiRinRiwFZKmB2GR4gGfwS78R3xXmnZsP2btTQB547CaQLX5GyeiFniePPSUbRsq8LSDEm",
  "key20": "4YCsGVZ7djKTFMv8AuQmXD3UvBp4Z8s3x9GXQUrCT8EGoEMHfcG7am3aNDo4ViEUq7frJ6emdJStBKjxQ8h3ZCrz",
  "key21": "FbGfWNtMHCYCvSEPgtUxu2N8sNgRWyFYZNnpaGZwQvHFs1NCfahjdxxmXNnJiyTgbS1zeovhJL9rYayYuqiQv6M",
  "key22": "5raxygrMD4s2ySCbbzxb8467dehnj2DU1PDDhbKD6yAeX9Ac2CjK61nnUqdskH5gsACzQ1rU3KeKb2PJsJy9MQ1B",
  "key23": "4ncT2nr7ksMLKpsTaxDAFe3WptoMqPkciub3CuuPBpGEFQ1HP16SbMaYuMdPvy9wArk5A3NiSWTbawb9EVdoRXU1",
  "key24": "wLcCPVbGNacBkjTMGnn5A9jHnf4TTPByYhBGKBfvpt8wYmzc4FmFYRnhBpZSCryZq2nmq2prZMAtDborxEbsgP5",
  "key25": "3AuXscskVerffAbDUGmXWFTj4y9ar8NvvyL5jkB3NNe1DxMt43ic6JhBGnFkYwzHZggT3upNHqWe73Zidp5fEMC8",
  "key26": "31X4Gqc8UvLxPAYg1oSoVVipcjnXb8FNKAHVXJKhYxngYRBu8qhWPwAqNDkzaWwKyoxV2YxZJUnaJQ3XtMQiLvt3",
  "key27": "yt5hMmroNLXhwfMZqv1WFFTFXBVCngmRVKw8NzmNKJsuHV52Y3cCWjTwu2NjwUgbqn1Qobz5QzhZBzwFMN8YR6S",
  "key28": "4jbxcSsgRkmBoueTtKs2LvwvAjHyfv4xHDfqoPvxYeSQWy1TYFLtMpdWFc8rUognKfbdJiU3kE73MfJdTgvjrZQr",
  "key29": "5GnWBNtZysRC1e7FxnRiFu92JTDZn3cMfGKiinzo6QQVjUYgDTWwqHJtR1vgh6MEPd5gshnSS7UtL5rpzBwjFW67",
  "key30": "4TfABnwaLNVZD3h131RnreSEbMtps6sKBmNzB6ZgNQa3BYqru8kifADvxdt2YUPW15r3TZyC6j6oz3XBdWwPMsQW",
  "key31": "4gWy6xgKfP7HFJJ295J7ShR9YcJrH8t9b4BEBD93T2PacCMESBzch7jR4dwCdpAU9cmMoVKeFM7qmDSTkWeDwiQ8",
  "key32": "2gkspyiRgK5WvmNevj6UWY2tChARRxML2n9Eh8i3jianq5yjEj243egQrn3jRKH4YKkXP4SBGfQvyhi3Y6ZLQQvg",
  "key33": "4qeNp3T6PHDeVLZEKhRiXtFdcAW3Xk8dG9qvN9naRnvwQWVkoKzNU2K8k7Ui8PJV5NswJQAQbwFyCHNHdaos9fE4",
  "key34": "3uFfBkBKasgySAtAKNPSaztVMPk5gkt9WoJ7hphkvWu6Kv7ZskGb6Fk76krzrKhzmp8PfRLFPqrNWBe8snxd3zwx",
  "key35": "2o7sGjTSGWw1xJozEoYDxdyiTZS3vgbDjSCPRattxMiiKDc5eM8yj8EpZL7QK2VdB5u4Bf3goMRSwrAy9HkuPA96",
  "key36": "3phSGKKDABb1EwB9ae5Vb1chUGLdftNLVZuXH2XACFpmEBwC13g7sVocSnrSi3QiETQmSwJjm42qZAhcYTaRJywE",
  "key37": "NY2USoiN1ysyp67UxxEzS8hXt7rnchuGErkh2bv6ZoKVnVg7Ni2ss2Bb5sYrxQPpXHgdmA94yjSToijQicD7KAQ",
  "key38": "5rZ1NzVMz9ao3yDc8h8YKrKfrKn7M43pL8wdw2igdgKyVBN1rhfnWQ1Du5AcVG1ZnrhCkn8Km5gyPLZi8q4vDKUf",
  "key39": "2FHKssRTeTc8RrqR4Qu9zi6JYCrBjcWmTpbczT6UHopmTRXeNU2H3jc4uLEWYUUjJqR9Et5AAWcZAntoF4i3fybt",
  "key40": "2T6mSbVwfr8J4EyVNV8JdAgxVBosxqFmdmHUSdPjvStKJxbax2v2JfyERNzihSobxa5UEy91LBixNC7LHbJCFsVg",
  "key41": "4g52ui7Ld4Q22GFCxNaBDqezhekn5VB8iSCRE1k9kMzHDrLCHh3ou5tN7oBKU3wjSFdPSwLrkJADAv4KbHSE8LWb",
  "key42": "o5281bfjivDSUPTnh4knCxn1HASNTA8hJzrNTY2fDjUnCLG9uQmvRHQ4i7NHcKBVswcx7WUbhTK4HALWc6GwSxJ",
  "key43": "3DVJ4jn3ttQnzNyBu5AN9LB6FEJznvuHJbAe74uYSgnkkNbdb3W4J1gWRYQBypWMJYX4SbVzR2JQweGMg2Xkg81Y",
  "key44": "5LDKFfh64X6jeUEzTffMz26DEi9LrCigMnudXo3RqFthj6fLfSjnfnNnaCPMEcyfaafFmAuULxF3kVoTd4YaZQBg",
  "key45": "4PrT94P6X6QuFGMAs3EK3iPoWJ7EkrhAmoouC1SWCce7VwwpMaZoJ2KVUC9H4RydbrmCXCDEiBMWNCPQaKQ98Mnw",
  "key46": "5JVfEuLLesoDiuq8tcxGLmnzq2y8jZUD8Ly4U4hkCA8muYLZcqMs3Fyto1eA8r832GpJrSkuA99uMGYXGCczuuTd",
  "key47": "XXo4Q9NPPfqCYuDjP27B6hni64tkgMpFDZBJ4W6zm3wuPjSxzgzyBp5uuDgbHuK9SwEVaXn4YYbuDX6vptbQLrB",
  "key48": "5wJvAprezo4z7GLYSVrW8NmfhKsUA3BUQYNbnZBjPmqbjwmtqQZEdNjckKYCf4eCYmwsuUPHJpmfTYGfSjLjcYSq",
  "key49": "ssxurfNz14jjyTE8a9HXYyxKvBv8ehYGW3PNHQP26jthsATPM7RKNsdF2DFFUJrmNkKHon4vYoPWJ8o7iKKxVxo"
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
