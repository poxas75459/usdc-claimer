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
    "2imfo7V2ehcFn66VqG9sW4Yj2UUvc8625nk1zkCAT8oDBNoRZgqYyXsPoqbavk4Gh5jNkpSoemAEvMqQVeCLrJew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tnah56WiGLaBTEvLGA96zPZZd1XRsfp8FtBoRRxAyTud2MjsK4cULqZXRk7umvZeE6fGitjTaZzdVxTNPHB16fj",
  "key1": "1dSD1uyLdkFpXup5PmbT6cVGTHwkLmcRrn3cnRPjSGoYPVLCHXWZwz2xLbs2NsBMWt7piUMceZyLXEC2e1vxnNV",
  "key2": "tpuuG3FNBkAvZKBnBYEK6XAaa4mMsiZrQXsXYyNaJsj2qprEPsYyXguzARaim36JT4RKhJCMk5cC4AVwxATapZs",
  "key3": "3B14EjUbH5Eir5BQ4m7Ub5DZaV6U36y78nszF1LKtSmGbX86zTyViMzToo6ZN2L1V5GLBpxTDmND4NG6JQTW7GaE",
  "key4": "2tUQR9rJSeh6cYQAbiShLAAKBdcUXskPV7dNZGDERrmV9FZb5unW9XMQRTV7Vjc2sg4ufuzbq5DEw1hpXUCp32Ai",
  "key5": "4VB7mkfGUjJZzjw1GTQ5EqLVQTJ28zMCkVBSi2tiMgiq6KeCUTNwmQREYuvWmKK3Ao9B3hyWjVa5PgnhFJCZtXnY",
  "key6": "GPGTFoWySs1WXySJa4BPz32cpmHJuxKeoDbj3xtpPhhAC78Ax5aEUmaXnhwS76wLk3DhTcipbMkTx7U2CiTvkdh",
  "key7": "2QVocrTdf2V7wx53EMtgk57xaughAd3KVLcbtxVeKAMrReg6uBxukjXTrWUdLBhg3xYtQZEs2z1Eek4YwReSsnSo",
  "key8": "35QhCreg6Y7WMwrgUA52nv7nzX4JAjFDJoZyV1DDAuTDt2JhoXYpi6teoeJn4LzLvkJHCRBe9oppGuJRygi97Ecz",
  "key9": "3ZXrHQJPKv4VmA9EML5G4onC8nZ9mvjx4a8NLYDacAVv3ZJkVP5rj1zvhmiYXd5U5QqWbm45ThqT2Qseb6CDHgw9",
  "key10": "4fESip692jikhnYnX9q9wZExJTgiPdkSkkVjrtrsccs93q6wBbBVRR488RUqhBgqSRksY8SDg2bF2TfP2MenPPPX",
  "key11": "2DVpSshGTi4ecCWjNdYsEN61qyndQoZSfFGncHpGULnSfwQVDqts13JUb5BDor5iY8EpB8CzJi6yayz5ySEnRqYK",
  "key12": "5UXXrMy61DAhYxxWpMKFA2FC1HyseaSYmLRjD3zeJTuJup2QscziCzLeis8Uubn1Yec9vEDNfjJz9DAmtDAjo19F",
  "key13": "5pvB7Fuw8CRAPaaWaEZiqsj3gJC2mWGZxNrQiAHcm57J9Pvvko4biF9wKUQKQGSZqQ91SEJhfFC5ExRvdMuhHz34",
  "key14": "64Rc73AxNqqvEoUBSipAe9U9cn43UEYPf8q1T4SMBeG35nGmE5BPBNHhVzJNkKprFagWFHwH9GHiwTqZJjZEgzot",
  "key15": "Afe6BXvyEneQYvJdgAZydpRJ9Gx3uph5k8VGsDsd1ipyBmevvwBrw5BgegHnNeCt8A8ojwy8Ny22Xe7MoZFYCos",
  "key16": "2A4SzybKwHMZSQbgGELkv55LZ2EZXpPMmb28gaEMieNXZC5a2Xr9P8FfryifjtdxDsCetVc77rJvgWLettcCo93X",
  "key17": "5x11swvQiTxtwxB5GRRDAivuNv5tdamaduXejen2VJ7KeqG4TAM3miHsANGXkq52cCHDSEobJ7m8fLNZ14Gzd1UP",
  "key18": "2fSnYKWKh9SrSPqdQiy3M9T8zNT5mEBWv8V4x5rkEC8aTbuN8T2Kr4c8JzY6x2H4i6d73SityNZHS7Jgyg5gDLjn",
  "key19": "2Hmr6BZufigBWSpJUqLRwLEz4Z9ZaexwqJGhXrjZuyVqvY7J4ZDUvgtniwXmR4hXVQzAao8knNeYyPRzfZQ776ai",
  "key20": "3sKs71zP96rGAYKNSkroRGWmWa8maCq5EBeTbm3nRQgLkd9rUXmwWP1dCkd7GsysQuNTgaabSug1jRhGG5SctWTr",
  "key21": "2Abkph7AgbGBeQtYzToEEeHMtyE5cTP9ge6nHgoyqEWW1JmxSGBUHGLxgWRENGxFwpMii5esMqhgpBgdqhEYmfEA",
  "key22": "2uJ7PiCW6h9WFA5Lww42JHSJJQmkvXzW5EjbqRGHaxeJZJBB5AHyr47tn87weZPEUfGmroXfREvGF75AtateWtgg",
  "key23": "38yb7X99Cp9dFz8WXaUwbW5Le4aaadkGcVYop5DsLTK2gkixtEQ5N2f9Yag2beknsYAc9SpDZuj8zGH673YuBhvp",
  "key24": "46KNf3QMF1rgFDtz7wt8vSpVL9p2XkoDNyieiqEWRhU5NC1zJrBkBkHq7zYsZn77Dr8zta1gcRtk4BHD4DrEZmJB",
  "key25": "347MvCCZnvKDafnNb9522TBuFSc2NNHEVtMdFbx17kkFp1qAjsPaz6RHWU46tG8WMmF6f9HyVRJrVXTEUmsgRH75",
  "key26": "2EGxQW5JXQWX9fd4tsbNMw7AwcbWfbYtf6KMsbqJvUhiUAfYCmyXa7DzHpQjQaB95y4nYmARqckGUohMKXBFrviw",
  "key27": "raFWiWqKMSqe5KnXzN5mrucyK77vUj9q3jAWNJ6HLGgtvN8E1GwggurBXKFUpo8pMDEr3gCHUyQLTM5FzHavPKW",
  "key28": "2r7H1trnYiMq4zqjFx6xgPz3KbhU3TS3uE5fCyJWMRTJnVic5ZFzGCtvjCe6acMUXHcnnWijXbCc1rzKesBmcBp6",
  "key29": "2kPbXq77zsTecSovozv7dnq22EFLp7ce4Lq4PrGRxtusqaxt2GgPjJPKz4NC5M556bnWbgBXF5ABJfiHLZzJyWjk",
  "key30": "4dt3WeNvfs4sJoaW5QpJ32YU3SUGDa6R3cMbjwnSNHphy7bJAVH1EAhGF2yhyK6HtceWg1m7vLY8SGnaiAVmezFg",
  "key31": "2sgNyjqfM3MWPRKRbG1QV9Hb2gBmM2L5hJgoz2xXYAYoBdCbNbxdABXW2CVyrFaqPQd3xGscK1EwwbaFWyRnv71G",
  "key32": "4rpf1y3hTJZwpg9xDuQHX5ApQ23BJDrGxY71NCYkWXUTzbibnVBvpQnPGywty1q3Bg3wGAxzYsobEsMMhKyQscCS",
  "key33": "3Sou648q2LQk1REoLwj6VTvL1YN412U2KZJexEx6XDHJKxiXo3NFuxyFhwzdF1EaSYhqQ8cBrNt8c8AscUcj4Jmt",
  "key34": "WcrA8hY8tX9p8QpKBVoFdV42J65SxHhaTEb1pyJSJ7VEcgqjLdWzn77JVXV6aCvjjWQN95B7wMQDY3NuEM9zrPB",
  "key35": "5AhjigbAig8zT7fPaYnMVUNf2hVN9XF9fDEv7GEX2PQVvRQRY8dfSSCJ2TrHy63hGJRWSKV149aDi5ppViboLRBr",
  "key36": "4GJPmixEXk82fRYF2obXdPcWaevUasAk8HaY4vzgEhjVBZE51TKtJdJrmn5Ja6Vddkck6xPiyyZw1jMr6aHkg5Q8",
  "key37": "56pfBzJL8UHr61SfRUUJ161133mxsDaCVvWfczf9VeBRNcDo7pa2sKaeTVp2RH16XJkba8TKm3d2dM86Mr6sWjVr",
  "key38": "2fm5mG7hLSCH2yxow1oHET2AAay4ejfK9AQFGTzZmcm6itTvFbNysmjT1c1VWG2qRenorfAKDwB2X8TMGFySGE2f",
  "key39": "3pybfX4omKC3Kti1z5hThHksKmyc4AyVD9sCPRbtoWB9yY8KzAJz154YjUqBmyQBxToav5aDvdRKunB2XKt3ME1f",
  "key40": "2F4RqBtXabrseHHaUdkNyBS7fp8fHVUCV3BDmEsLuXPR2dKRask4iygGGaUjz9tSnCuywaXP7PK8e4uJCtu9kj89",
  "key41": "UweLQQ3eQWzNDhdp4GxjsYXiNuJyApDutpajhDqJuf7DvuAz6b4daEaDWY7MGeeFyRhPzD5kebL4AqKrCGCLTtV",
  "key42": "4fupUjws9fNVpKonksq8CjproMzzDE9XQqurScfCjh7bW5LcPboyNB1du72QWwyaVViHZpc8HYQh1q5eqy85SxWc",
  "key43": "2JutCNXNvjLQAupxVe4xbDK8KHvksCQDNHENNwtEUpJETU3iLxnDEpSfc416go2Q4YUo9m6FdgiH8BzXm7nXcef7",
  "key44": "49REAMLhjA3W3cN4M3iUpWhunhAhu96n3JLsUv8bQAbSjPihm9mYo3Vdftmn32UNQDzXhwcMBTLgkSrPSEkuAA67"
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
