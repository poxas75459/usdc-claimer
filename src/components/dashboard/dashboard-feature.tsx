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
    "3k5yd4YH2usdsXYYawWVTQ9gX92M54FMSd3X9MdibQjahEQMpKsGYgSB5vp1pBuUzz6MUVfjW9ztQzurzeNApiK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NdC4nhPapZGm28X4AiUekfLmbuy2qGHeDbV8nECF6kcJbtXcxipAwm3MKJ9JzuCU7hkJWVB7LpGChVgWoHzuEfw",
  "key1": "tKQTuMgo9yV686fuNo3zso6wfPKwQZCxmx5mgqdifgWrRMPLLxbNbih1jvnDevypCw6bpd2q4P6pQJmZp9cGyM5",
  "key2": "3LwVh5Dc89gwEztmo2ibDXBuVyRwAyhPAWd52vWB1Nc5zcTZX2bMnuRFbhSoho7gMY5EMWYYY98F7YQ9bA573z75",
  "key3": "3253HFfmjHWFsKV99yJncjk2EcZYRbH1g7YLiskSnEqGdtcxj5HeVx8AnjWXueHLdEvigeMyXrGefoaTge1vK7e2",
  "key4": "4iNYtnm6MEWZh3Nk7x1F1334gzf2uPVBFrEG18TbvMAx4fXqhboLMZxawq85T166J7isAJLzLGtWuGZ8KiiYttaN",
  "key5": "2zFQ17B4UmRMokEKdeahrJmKDp51DeLgSwkV4UaH7wAiF5nWnGAtFyiS3mrrugdx1tBfTDrdzfdGie3SM1cnfrNB",
  "key6": "22EnBf7x3ggp84CoKm8Q7LNdUnDLHC278goRDFuPnJCurg6Cg62QfRfHC25u1vvtrDbjbNAvui2FoHjgAz5jMjdV",
  "key7": "2ju7FPFFSvWE8zB1uiM77kMCPA93cHNhYRbY1A8EmJA2kCWqhpSpvbWHakY7BhzVwDwBZgA7kfTUwj4TnGANcXes",
  "key8": "gKk4yrJnZFAzd8ThmxYMtk3ALTLybY2VoXVngnpG7NeS9hy6bSVKMeezbNoatBABHRNsdYYgPnUSceVQpi2Q7Xi",
  "key9": "VdfDfVFmYMuTkQxBTX4ibbVHgfndZ8nCou1PbT9pEJcZYcZ4zwhrbLUz773ErYVopZdLWRE5BTtbcs3keqwaxQt",
  "key10": "3cPCAGjsN28cWqUT6o3mxYJF8dabmfYycWzVFYTS2Ktdx3UUdxpnUbNF1BedjW2H67xTGpsjQYzAeqcYksNVdhve",
  "key11": "3N2NLarpL9RVsNVpMVaPfYoCBiLEucqwqnYpxFSyrkiDfdaajyAuMnKPsbZd7bPvPHypVDJUvfJWzWusXWZwPXL6",
  "key12": "3DwGepwrVTB9ZFPsGEY6bmEUL3v4pH726s2ffgmyu8bEk3cP1Hy8GoTrNKsH8zcQCvSD9JNoRWvhJ29svSupdBLH",
  "key13": "2seAYUNkVRH3PxuUbf2o4DEYAnXjS2aa1pFGy6mqoscY2skYT9pfFrLCthceNqxf8CLUvZRTnvZYjueauXfUbh4c",
  "key14": "3DtWgV4KmBjpAENZxyjnnMrYA4Cm3QbdHxSshzTPvix2c46soVGfT1ih27dgKxzLeVwVA4jGxcM5SX7MxMUG6PKW",
  "key15": "Gs33Zd94xeuqVGjmXZP1wjtz7B4piLTkS9QYrLGwSoz4chpJHZs4a1GhAHKzD2FiePjQfQ49viCWD1aH9AKpMfR",
  "key16": "2vG8SmGV5X5A7hmEtvn2sAjsGWKF7mQDqqzRSxJqrMnJTxmxUoFqGeFLaRFWsVq7o7YgBTrvVEgrttZe1c8ZPTnQ",
  "key17": "2FfEBh7BsB57R2K8nqcNXdtKzxLmTeJ6oWhhJDeZ6cJD3tmXYLYxpgDE6FP9mMw1pVos741iRYJnv4PWkafCPB6U",
  "key18": "4tHnHN1MYzrWAmV44B9VLadD4P4gMVoMUhD4rgMybnvEGLU5JqvYvDNtjyWLGRRHbjtB9K2H71ZZ8UnX1Xr6iZtg",
  "key19": "2zjxQaorqP82KsTqYwpLjZgGDtk3C4f32LpFAUqLTomTmMfMcQ1z1fNBMg7fmR4RN1HbtftZkfSJomcgvNMx9XEg",
  "key20": "3S9iKGnmHdzFBk1SdNrYGDAgsfPYfL1yC9aQQBL8F9HpEHYEJEZW2RTvhcnHY9J7tgUZXjrp9fYuYFSZM3Dnxzpy",
  "key21": "khtnr4ovUDo99HJin2NQW5u5jmzqM6upWzY4FLg3PdbY6Q6WMoDh4rNSd4ev8bRrqPoM4CEWGw6mEbrC2mhtzA2",
  "key22": "eT33pBjQXMYzaevhis58AQA1kXt2zeqvB6uzhq6xp6vesiLqTGYonZu6SZoCrj5kdHR5aR7S9S23fmM7WWBYRU1",
  "key23": "1VmGKiQdRjAKMU2nwUCDGNHpUA6285Hw5wp91sAtajY8EtthjWy9iz36Tgwo59P91MDH6nqmrXRibp32xFQMJpG",
  "key24": "4L4X9iJ4EYkDHELkwcQbtEtkDe7UM5gwsJRhXAKC6qLp34YniqMB9Y9H7HtNq6B7KujFidCkwqitM7UXJsJ5MdR7",
  "key25": "FSuCnD2FH3JFwmiWDRK7mH3yZMxjV2xX6D2S1Y1iy5LXKGTzY1ChuW6gb6AyB2qbuhQEfscmWUUmc2yvd9Aw8Wa",
  "key26": "LAeu6LfZZzD43aKzPAqZNfCbYrVqq79KKXo485vGpgjup6mFz2TJyZViPqB2cSGmoKbNUmsKvKZfBRsDYNNXcAd",
  "key27": "5rw9ZAPFJ2Un9MasXrKt3nhddHCr91PRaPpWiB9ev3eHkY9a7UoogzpkQHLxVyMcEhcgxocHadU8qvv5kh3417aL",
  "key28": "5NPMDcB25g7SRntde8dmQTwhziFbjy2kroKNJoooZ6mqHwbNKcZgoR6dwyeviPyUS5UCLcdHp2p9Fz8GbnpamKaY",
  "key29": "r2tT96X3etfseRSXh6QB2jA6WTHF2dLn3HvTBKZbCf2ykAcD4aSxAxyozgCmiT5sw7HUe3LcCaf8b4vfGjC42JM",
  "key30": "37w5HrvubR6im1pNvHdP3HbD2DgUfMQNv89jhB3EuEx8momHrtergk5YGNQKM7XBiCfWYck2jnD54pwV9kkQt6XN",
  "key31": "jV7ZdpcCMzHzCBoh3p1G6WmvfM3jM23rcU8KXtK41ncDzW4SC7opLA2RHCL6wKJ61pxsstuBJxjYNkTRg3qDGiH",
  "key32": "65fa1gyVWriBPoayTpYiQAso4XRdQkX4vidTmMUCdgDMtgPW2eNCrsMrkaQheazCE6VijbaKwGqyb75SnPs7MrYw",
  "key33": "5DoCQXQwu24S6LDJcMg3c7V6MmkWD5CoATrF69ey2vFkoG6MeqRVDvDgtsYYaxGpm6n5zCyaRTKRbieDa4W4gBEs",
  "key34": "2upAXadJNcME9tAfLPBCbQd2JLHPA4a7ZiwC3oqipWUer3DtEGMcW3oDRT2J9tG2KYLse1yyiBFcgUoX2kED9pq3",
  "key35": "23dK5ALcetqFTsRT2EPMEpqWs8jZuWxyqUKTKPpx8fiAKaGS2xf8ssVCj2or88TCNJuKsZvZ7mNqwbE7t2QVtotL",
  "key36": "27GiAu2r5bd6Pj65oEjNzm7P8ggpnDfim3eJmwsbNNN7NEvJbN56X8CjEqVTTyRhHZtpx2oFm17XeAn5UeSeLn5D",
  "key37": "43CBgzyeAjRkb14UAp1avpsGqaW8puzHDypUyVW4SUs1zRHoGBM7U9UPVykBMQ3tug9D5cp5dFgNTc4396MLqLKN",
  "key38": "5FCkXn7tGbs3hCJKD5ygSFxNYuhS1Zymkp1wUq7SViyZtG3sP3rHApY8Af3zyDnKbLjiHHdu12cnVJh8YYn2MmLs",
  "key39": "3YqqTTEt7hXEX6Zu1XuypTQuV75S3d8UdmPGzyB8xvoz1KGMwVDtE3jmTW6VufPUeHZbKa9VCoxQkhTw9tTRnWWv",
  "key40": "36BfBU8X5nUJyQEczfYykxWarNvjQsBpHc9kFRU1ScVqqj7spdPocX97KGuUwVqVkrPT8qYmMYoSwTqSsbDRdik2",
  "key41": "2tnPZZvSzoS7siuotS9RBCsrEJcspadR2ZeLGbbrZnYHn1gMXNWMzQTayhBqxUtNLXKC9xj3CfibttK6uBj3CcQj",
  "key42": "34pdV1wUPdXN98kgBRqqPQZ5aN42RYpaC7aJyUFVTwjECP44oet9GWtf7EwBxrrY9gN4ecWbPsrHonWf72amjSmw",
  "key43": "5tPqjwYm9LPk1z6J6evJXsRc5JBxqdhMJemwcr8dpTgVhmqjy53HYsFqwy3tZfk6qtE35pcCX4H2sfRFr5tQpiqj",
  "key44": "3swm4AT2tQhY3ssLuJNdTDkNS5pyr8npoPVh5p23iMiahV7mtK6q432fgRbJcmTGvp1X5G28B9M5n9F72A2HYSX2",
  "key45": "58HBad8FebvcjH3ZCoxMyBdbQsFPYMa2KZQNQCVr8sRv5QxmV5iSr9dVQH213fBrcueQgNasGj5KiT5JMqCBJyaT",
  "key46": "2jdNwpsgcWuLtMZYyVxkbs1bkErFaYMVa6BmYU9Ugt2juwN6928BizyviQ7XWBQ66867S5u4ggdgc4qGGjKZNtrw"
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
