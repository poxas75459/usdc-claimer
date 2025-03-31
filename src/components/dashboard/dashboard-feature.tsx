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
    "sFS9gjf8wAY9YLX2aFYMNgpB9jqoXMavPVT2Bg1nYi7Z9h1gBe7XA1Kk8QMaga7pCnvyQLRk6WYnsjfs2gurqsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fySr8srSwEL1J6YBMcFS7S2EUpttxmcXNSfoxczvtVHdTo1DDQpVYryiYHicy68hC7UjDFKHtjGVSm9WMSGMzwa",
  "key1": "4XbudYnyhRe3cpvbhuebtDUr21cgh1bB4aSfk2MdPV3JgkYzaVdkF2R6nGKYWBNcWHJNWznN22GBcsg5Cxir3vSG",
  "key2": "46DfhX3bKtooMiQ4W8ichPqHQGbmVVEAUBHdboB5xT2Csfhrz1DhTMxbUGP9c5BWKkw1pk5K3tLaGic6uqNm6hto",
  "key3": "3PMBp2a4S4nGVFUhjC8Jc7gFX9rvDN4uK7oN7JYM6NnMi7Xv6GnHJYNuoyQucPEDowZLC2PvBRoavW8vKfaGdTRF",
  "key4": "2pEcz5gNzRwNcd56uHtaKscfXBoVw6W4ALYGsrza68XDnnREJjq6FE5LC8sz1UFNdvXUkLEnHMymkF6VpwJdi9xv",
  "key5": "5TERdXFnatgdKyw98ynBKHwACSHJ28TtAYPnM6jzy9wHBdQ5RJeJTKZBxooweeQg1vQ8ApTBqQi4PaxrvUfSfNGD",
  "key6": "qwDKrFiJy4kRVtACA1jogQqv13R9NeYcKQQSg4vGgV7NpkRik7JhdV429xcyXmKcBsRdB22jdrFUhsev8ypwHTt",
  "key7": "3Uh7gtArr44U5jtFGNiZouBNn5qDvpAsWj4HLEFa5TNioB1QMTinv2KPwLLoEQqTdiDJWmssxRXpZSrbtTy5aFmm",
  "key8": "5fYBW2mJ4z6afsNyvK74zEzFtzXqdGi3YRB3tJ3aQVeL7YMpyzTUTiuSrSTnBMEtZsyZhySVbBTmK2ei6ApcnraQ",
  "key9": "2MZKS39UpvJgQhNVGXW74A5NypM7jLFidH7TQ4d4mYc78N3644Ka9986dDxqgW2AvK1Rpv6jUd1vnJsHufMrwHQJ",
  "key10": "2kkj3dagrgJ38uBtDiLMtWJTkYaiqu3CmDL9LXsEQt1iHrBbTHCbGCPMt4hdfKKkgeoa1PbPdfyWga2xKmDhfjAZ",
  "key11": "5Lritbk9krep9jLMVeHfxwwqdNQJ8Y7Yp7gaXp2KxFKeqCY2Cvm3CvPihXZ5zoQgSTdfjjAJ3MwGmLiaQ7YgaHPm",
  "key12": "2bs5bbfSMsZDfMmDKFexPaMbEXqkEUYuYNywuAhjrkfqTFZgWLwLjQ5HzPipUUnM5utgc4huj1cNU2XowNQjkTSk",
  "key13": "3KrXznNJjnQ2Q86vn9fQwrY6otdfsJTaMaaWjb5LD6eUApzi1zTCcDS267umn6CyxoBNot9nm1g8vAd44Jcn7AQn",
  "key14": "5DPfaQUGU17xqer6sHLk3Yc8946jMb8NXBUSPujhjrxgoHeoiUo458zr82z99tYxYxoe4RAqPfg9nAoo6bhpwm7j",
  "key15": "2rWPmw6CBwBAWzBCnESHkH6YVbbUonRV1ehvWiH3auf9dESYV6BAnWSXSESr1KX9FTPPRVT6LScvXnscRNvwvydK",
  "key16": "2CSGnse9u3Hx4C1ZSsmN7RzhVcdtpJRDq5CHN4KHNXWMf6YeNvX134itYDuvrVdeVpectwpPLo4T1wpFbxnb3Xsn",
  "key17": "3mfvLqoKG4GYVh59A93Ajbi9EnMADuFN9Sth5HhYcaMgDqkQjwD5P7uhCV1qKQSqg3nh4SG4CErkwMNCWMDgsWB2",
  "key18": "4SEgaHKkXfZkiXs5TQH1R7CzjzSE8VcP4qKgj56T5y8vDtkLpFc8KtKeALexkhfkUPWE6oKQ2T5ytFZUHKCGnPXh",
  "key19": "5Xr7pi5EaF6aPLp97ewQY2wZizYftbcHGjRoJsjjRfBKqAA7zHK728bZLkeWjJxRduYtxADgoZzFx96qE9b7UKwL",
  "key20": "3fh5Khx3Z1Xn5Z2X8NFdrpC7kTaFjD64Sj1XSyeioHBMz1jtJ258kydyu5ZXGKSbzbrgtpsJ6tGmdytE5SryHsPM",
  "key21": "2fUMp77YJiSTbXRUgFNr1UnGb625Ttw9ZDpmFBs2ym75Rizkzmpyo1YQDJju3xf4VAeUUbp2LwqWAYESRiSCao9q",
  "key22": "3sAVRftj5GDrkyEESFeBemjdgjCbWWrLGPSJRXFdnEbBXfDqDg1gVnE1TnuNjMBwTbJrtUMbWhkKUcdwRouk4NGz",
  "key23": "2jXXgLFXmqh9VPe1x1HG84CXfXhGaVmhvesUWi6DEbhhHcCuuijEHSMGWfBaRZahPmw6aonQZhR7i9GQHEUmfC5f",
  "key24": "2DmkNdStjCv5QPZWyM4B7GiZAdXdPQn6wooGbakUmc6oE23iuUpUgqnxHtx5uib4sMrWSasxpJMqMR9dwuvshSNv",
  "key25": "2UiB9Vecg9tBjBLUr6ZQWexAw4jykp4aBFEGrLQjJAhkUQhWzWa7V72VkBLrSSHEayiFsAsL85KkZ5R8JDnmNHji",
  "key26": "4fzuze7xxzwsVM4FKZP7vrcFaCAw1f5PMR9FZaKzkUU7AUn3Unex7HK2rtEqn7Z61v7nsakFvKjMmwa78gYDVMBT",
  "key27": "2g1W261TX68s9xHZwqfRb1UjR9WmPNVdVVrxpZMLgDWT3xAc21VLDtawzp1jyg4FQmvdhjyfEsGLF6t9Ha74Dsck",
  "key28": "3eyUQ5gMJhYe6m693WxdtFzbjrZ7HmFzY6TS9J96N7tyaeB6LqQY7YACaKTcdSrjKqdSRZc2fwkVc4WDuTBePVYL",
  "key29": "4o1u8rW9sGmTCZWEcirREWQjWvoZjfV7Z82ZBgo82qNR88NhMLvXHtoH8MrxGFuU4BN3EGngbcnw3jVGWMpjHKsd",
  "key30": "4SWUy6uVGA9stDRTcvhQyjfF1a4m1AcLoVYizLyZGUAQ1CzR59BRatsiVzLVjedYsTPQADsSWysgyr1z8X3XCFiu",
  "key31": "2PPN423kjZauzRTfjp2RY9eKLMueCVgSRMoFXJHoisdJgUe5J7RPmLuWhtxuhr9FaM4Sg65CQySFWbpVqRky364y",
  "key32": "4hRNJt315q85esUtUeXdYrWFJRjs8NXixQyyLrxhmYtC8XE7LoJQJE2TAoVMHDP5rTWH4ehzCzchA85K8HpL1B2P",
  "key33": "2o5BLHUUEWr3kZxtUCu7pYpZUj7ffydBZkao99GqGujmtwJ4TH341qugKe9YuLsewJ1URnT579e5AyyZVqrzY2RS",
  "key34": "5F3wEosdR1eG51HSLjRrteCps8VeybxLYdu8Xq5UQVCm8sf39VL1RN9ou4Cazo75kspD3Gt6aHg48fQKp1zHcEVN",
  "key35": "4oYaGH6rgB5ms9PofhkQ4qBQVgaEkBmqqSM42TAEv8Rc1f7bhBSxNyz8X8qdk5MAPTznmTh7wTrgUYPcZ2VgmeQq"
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
