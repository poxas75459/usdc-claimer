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
    "iQLRzpc8ZJZRvqEo9nT1KpyuQ6s2UzgEQ1XMURctDztpbaBhBuPUFQKdZWCKPtwrhPPkiLtsv7oZxvrfCQTnxfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMyg5MXcNjDJ3ARw7dDBGv39BpqekTY1HqvCsYTR5Cczrx26mJSrBGLze1se4dQDPoxYkj97dfd8QNo8riy2Dg3",
  "key1": "56Tz7gqVZAtJYKHHFrCsgJu8vGGcro98nG6pB3SPRfxFaMTZBgCsLMgD23B6tAdYFYqFANtHAFny7D5pvavVKzA6",
  "key2": "3u7AnNmJsN313hLWMV5qP8Pacr7WH8ninaLuRPDXGQggE6EaYJJkth1maSwcHd8hLmDbQh8p7kf1EC38ev4UdWw7",
  "key3": "MQbQKNYzJkTwkgCSE1cqw61ZaLvTn52HXXvzrYFNZoKVRvDq3KCXf5QPcsTs1ofqeNgj5ctbiUhGAiKaWrvEKPg",
  "key4": "5eiDPmqzhxoB789zwf9SaZXc7z65d867AFQycPJ8BCJ1LgZDfySLms4SkG2nxAP6Uhmf9BRmBGhFNRgrLuuaFPwx",
  "key5": "3sSDr92eSkHfr5qCnqi7KihqHNMzuSNekNgAAcB6CDx7jjR94AwmwMjw1EXqvmUK86g3cNhHFQ4G5a9RsAfokXxL",
  "key6": "3LuhzP2LNbmcA5xAP8hSn3WYAKNeq3SLYuPmctRJm6MhDuYWi1SL53zt1hzSk1j1Fa2hdRYfduWHCwTE4vz5B3HZ",
  "key7": "QGcaFnPE8GyAM62zryumNsrxnfWMqnZyUQggkDZvVevfc5844wotdrCeT3DzttxSmm9VCRP2Z95iLQe8yVBBxXf",
  "key8": "2ce4ZACt26UN3dvQZj4z8YjxFAMxwyAoBSyLsCG7UZNVuXWL2hCZA7UmmKWLYW37UNQy6BYxCTmb3zajyBxjVncw",
  "key9": "32a3iZYVdBpjmTnMCrYMYiuS23fXiWUX7tdhSxW4ejdV3vRFpbaPDm8diCqxDk7xUo51vrnFy64HmtWuhsBSVXqt",
  "key10": "4x2yotDHjkugF2hDJPi8Bj3S5KQoPjNBzho99wREsyrqNieM6SWZG8NtWbA4PZ7Gp8tKMYaYfhLLxdNWUTY5bvFq",
  "key11": "3u89MMDtPKWCjzAZ2YSztwHRBgDztVhvZiK6cxG7WjQyDaCuYxvnVGqat69Gkqvn3kp57uG4YKWCiGe7HbfqhAcd",
  "key12": "S3ST7KSybLJ5ypSgjo8ToXN58SByUXKkNkDk3MZWoaQpKpAuun94mZG3dAXq6nECkTxgUbn1cL6BCA2G9nuzrZG",
  "key13": "3rowbiZ9fonhHGKMexjBdhTwdJ5X5eMFALvjh9RrtjVm82FB1CUwdS8NS6rSDUJZXXPArNEw3Vw2oPYK6iW6rrEU",
  "key14": "4WAH4CbbfNif7DVRD6tWUsTXtFeJQkh5RvFJkALTNru1KVkifDc17FfMCzTwH2NJrRmw6Q3sroPxkFQfBRH4cq1J",
  "key15": "248EB8MGKNAwYpNApAdKktp19BB2QNjv9LrQPSUNGwtd12AKuhDH2dMADXiSqL26txjWgjYpU4kL2SxVchZduBR9",
  "key16": "4q6skw9APDzpnfsxYeBLo2xm4y3vCHS3sALJrJfF91MLY6CZvC6HHGa1dprqyxLAma3fqKvDAxLPuCrtro4LJXgM",
  "key17": "crMosPfFULHiYUwytrLDLDHG8gYNDzwckqW4TYPmmBnzadZddZVWNqxfSASdq49iijRU1GDcPWbNzcEsL9DcyUb",
  "key18": "4KSHL3X6ABSdSTjGN2Q2HMyd5SarpzR3pg4HbNPhPMfog2YmfsiVR9ecH1MZbZanCtmchy3xaxdSBncuNrppWDph",
  "key19": "3kEjyLUKzfvTG5TsJ4gXmF4jWbqQ92U7YoMD6dTetCuBEUJTe34zb72jobbSKD6RPgEQAJ8RmqFcmib116xb5v3d",
  "key20": "34oXHwnUKZ42o4xc9zDgCvzF3XK5Y7RmigaNiJ4nNtbCKYcD8jYAAxPzrC4obddHePqATcmyNKhdtrTdRDe51WDG",
  "key21": "5BTJXAszomRAebfTy9x5dwEW3QdaHWb2HrWZ4BRmfH8acLXW2eQFYhRV7xEd52fnDBzZWChNZ4fEUvsJFrcxTDZW",
  "key22": "5Moj89wbREmhQgNuRDZwibfDjtyfLgLqDjVKNtPtv7vejSzA6bqghrq3Ej28LmknsKQHYbXKWx2npNDnsj944RVw",
  "key23": "2uen2axgofVJftva27LGEKcFGc4LvW9q8Zqt7yVSnEtUt4okcENpfZVVTdy23eh49yagPUARXwrdn75RAX6PVDW",
  "key24": "EQ99S55V2x5rNKP8agSYxqUcsT6NDZvDjVLs52nVcYU6zjXrA6zzRVPdJRrj2pjohkNmkje84sJMtp3n5ZZ6aMw",
  "key25": "4guJHoaGJ8dGTAk81NpiS59RRx267FzXgvk87aa4kFqZrdNRrSZj9YWBvfxvhCpv6cbMiUsU3tMnkCvcRssdCt9H",
  "key26": "bepkPa5abqY2DjLPK45go9KAgHGLRbuwqznESNFW98fxvMShnKGwxMmRnYx4WMKABp7BoCkv2GQnN61eR6j7e53",
  "key27": "4DRpWrTiSgWPsAWYfxuLEniJEvhHfwB3FFv3xMLzi39TfATFY4hqJnAbwgnS7WY3daaiojTh4j2Ea7Pithx2ZH73",
  "key28": "51Wgc2UnmLADZSbnsUmhiV14mx3KjESdXsMByonTnde2txkDArwmWWsRHotRRvC6HUoadkUV5gbeos4WdriUsG9S",
  "key29": "3pcZMh44yHscHP5fpiZ1EkMZTKGogofs5K7gmCooGY7A71n9mEbksUbrNf9fTqu1oPCVwg6Rc1zVTetdf3U5WfPo",
  "key30": "5PjByMn8ZZ6TC8C3n3UfXtDZsweBzJbmbjrMNbTVRBoiCYjfDKSQEyxGfvESyREyfY3w2XdFu61Y6hSyA3M2Rb6d",
  "key31": "frPAQgUWma9kK6UxahaYjDv7zMSbmw3hDuykGDjtyiAgVwy5kNV7qqn7SzPjZL2RnARFhD7qKycikUUfxPfY5Qp",
  "key32": "2rv57gkGGavhvgNjN7KNpG1KQZWRXydTib7y5hFZf1572Tftg2HehLLffeU5EZxbuH79TDsQTmP3yNSbDPJ7pc2u",
  "key33": "3xRfbuGD7Sy5mxMaiisLHcVrJLyjdivNr3jbagzFzAEKLEMMpcP5S99Nktjbaf4M5Le7zFHx6Rtcvqq959CC1quK",
  "key34": "3yw8qmNiwUUbrB4JG29fCfNpSmX1pfRBgqkK1Qc53qAX8taCSqN7VBAeB5UUGG7jBWskHsNT5iCF33ZrBZgHFqM7",
  "key35": "5Mf3TCqGPMbetMB8B9FytfDihjB75u5mhB9kmA75aNQr3vuDNppx1oPQMrhRzByBN5KsBDBuAqu4nXDVdzCdHRjx",
  "key36": "2Ak1x1kwPgSGhDVjesCCN1sxDaXDaPvFPW5yoTbTWDtcU44MBcpZy4FNTYChjdeBsnqpJsmduXMibmSiJpbxHv9H"
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
