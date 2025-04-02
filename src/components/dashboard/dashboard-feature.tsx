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
    "241MfDxZXUruHxbFpWdBvNvGgRgoMXQRoz3Rr6hmd7dcouFZuRcntUyGwMa6fhyQBjNhqXLXaspaJkueu8LBn8qK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ra5iMmC5VxUpDsBX29W8aqdCWYmzNbdGrCCjKM5Fmndo4zyBzXcxsnM3S3V3v2hU6FzonaRJTCMfthbDWm1xJnk",
  "key1": "LEbDWo2TPdBXqxxkedvL8HaYAkWyPQu1DBYqbsuqRiNmd2saAb3FdFFrmquyjvBAARwRUa8MV2fKjr6XHxA87oy",
  "key2": "4T7Ctm1zK9gNarmYzfBoctRw6TTJpmNWfDQgNprncLEdVTMokQrbHr4arGF12pLYESmaixuCXpLgLGvTsCqYtMzr",
  "key3": "2WtzaMUbSHuon1EKv9dc5iqMH89a4kmHhKot5iDjkyDEQJYdbgrZubmyJ35iSsBDUUJCG6P97YRxDYUWv3LL9srq",
  "key4": "2sqbeKPrPuLBH32P1bvMMkyFsi4JnA5wR8QcctdkL7uPqdXiNSQcvsEHMXQGQwibnLWoDvWSWTGSvLVmmkqcRvxF",
  "key5": "5geira3zmEN3WCcYyhgYuZaVv8NZRnz61K5xEGSL5GJJ7XbD1egqZCg8rnVSZ1vctoTvpseqAVMUehTvFsXCm1AN",
  "key6": "4kmA62bX7wYLonShgLLDGYdWK3Bi9YmhwLCLidb2zSv39ykdnqPVgnyxs76dSeBuRD4hfbBUR3eVxtbNVmWTEiLz",
  "key7": "3U3A3MfkxE8tVLYnGtVXDHE4v79wgrnusXSX4zqx3uJuFfAvsujBUcNwp5s2cNMkeTv3dU6QPtw8F2TaFd3kYJ9u",
  "key8": "5xUZDgLzvXiqaLCi2aXFR9TPPYFiXnAjEpSh5dgoHbv9CbQERPiKFjJscV5og8z2fsUfMnDSmCd3szkiwHXx5SXp",
  "key9": "3tDwPz34v5seip9S4Wd4Sw32JZEFgK4eKpQ2CTYexGjLFgSdTHfk9x8FAtUi9Momu1hgFcXf1x1sEHpHH1M47c62",
  "key10": "5XRXihPCvTtbFF6k6iWPu53ipC62xrGwj3yv4FfGT7ZxzxtsB1KAzBmvV77etP4YGeVvJgEiwTKdZ8xov7o7LQtk",
  "key11": "3UKSzc6vu3uBn3WGovs9Aimh92U6EwVZDEkWS4C2M1oGbkUcQJ3wpma3SPUKLJ57iYSR78M5pjyTUZoVU2yokXXy",
  "key12": "21or56Jqq57w5GSFszNrNcR1Lx6rAPWnxg3u6YZSVsAaoGT1h1MLMnWRgAE68BbFfaYpu9ZpB8bh2ZUXrj4usRbb",
  "key13": "5Mf9u67kJmMyirzCELMdebgVCMi6XBB8wKAooJtjFZHbyvdRvsEAnB5h6y2F5jUVy2tfEzNQ2zupgp83Kz55Y946",
  "key14": "ycPKDezzLVfXVdfTQyx3wj4BigisGtGa3mZoeSu8NDrQYfRCqZxuPFchZQrzwfB3wxSb8yaKi8Wys1tJAUquUZF",
  "key15": "2tQ6F1qbADXYZ51LJNAWe9XCUjccqVvuh3wyiEhD4hP1aEyuRzwBLazmBi4iL1vNVeQgYsYAWhghvnPyqVuyadVk",
  "key16": "2Gpiku7t9c1hsfMsXrRbwdLnbBExg1AjJSVoFPLoxbLyTBBUgEFZWknx67NjLHZgJpvLQ33HpQgX3uQFQ3CdGbuR",
  "key17": "5cGxt9NqUNqq1nVqqeM3QED96xLLB5VLndQnsBgfoDhV7y3QUnjXP6VZoCSFECemwcUYkpHKtRxqqDhuc3MUXVwC",
  "key18": "3azwfemrQDNwaGDwSy4PRQzXNj4Nkp5S3Z2RKHZfVkUDD4yKdfkztTL8SayWmKzpMb7ELDsn3EQJDGqYu7bndua7",
  "key19": "5E8N11vjjABoUZz3bn8V1mDqMN97gPdevzoWrvW3Bs9N5zQvrPpYiHBFmGrPpUnNb2x6AzXEKvev3yERArJSKiPP",
  "key20": "4r1Epod6tL2ug2KehdTbeghhFYo9YUsCBFU7KjKeGAtcqmi2iPT9mvvebezaAAoAmFMaEuh5eLPcU3PRVdC1HXQS",
  "key21": "5xo2UC2GZ4iQhBav6rci5yK1N4xmAwkYdK6qFBGNkPq5zkLbMBX354FuRUe2QggewryoLoTjK3Gby8CEGdhn1W8R",
  "key22": "3sQZygofqn3icMwck4FT9WSaEjhoSmLiyspWvUbydmWFqNKTAazDJe2ZQ4DDscGnAXPQG2vJJiUsxxzpyzeQRCVH",
  "key23": "w28ZzRHt4bbwSDNvfmZCo7EwNyek8RUx1eMdLUXXrri92Kn4FETtHbuKWPgyGAzWBTBHGjRvDNb2psPGZPPjFzh",
  "key24": "3LHDyTH2ZAvTeLJUVRkGiqzj1oa9gGvVHEDfQP9WUwS4DuTukkPmwby3HwAVtRy6uqYomaukCgHmHGkKfuT5BxyR",
  "key25": "4NqRuZj36i9m7YhfZ7ELZY3HgqVDajzvmfcdVXzg5K2sooWh82WviZ73n6ozRq8w42VxTrzycM1mnsjPNjQraZHf",
  "key26": "2ss49tYaPSskxpbBZeLdVEh9koaBZhQwtxj3jaFyoWR6dmKR26ZzY2RrVDLAC2t1pMwTD3SqFt6hiJikyjfrxeWT",
  "key27": "57NyYY9LBdp2jLRXARyAWV95oKiK7s3oL9AcBSdWuaYeNE2CYSkjNPmKiQj25ZJoK5VJEwtQbxKGYTQtSMwGEDth",
  "key28": "2S65qLiwcuNFNwdYYWQxnMk6FMYzBHXEfE9ciyRsmF653t5jB1HFsyu2V4BqJpixYLzqdzzmLLL8EjxPsHEyM2uv",
  "key29": "4JQRSc2WSXuT958F6EGpDw1USwv7CDnN1QKTqBg6aaYcpyVoXPcgDwQbvyx5BeM7vsB5PedXkjefLGrDuV2goqGj",
  "key30": "kQZqK5VRkojPc4ucvZkuEKmKcfoT8RnifSG3bEePbPWzUsmVHYU7am8rBSuzFmjsCo5tUCHumeDNNMrfZKU1CgF",
  "key31": "2zvbx4G2d2WR3tVuZVrSaZhWWz2XQZ3Fm6gkLauNV9ZFmxaY2dxrPU8owHpKSjEP3UCQywDraBpLFzjedCeY197r",
  "key32": "4wQFeVK67u4k6rEn8Lzz2GXomjwRgV4X1hb57gvGZTdXKcJRoi2egx4VFujR7YFw3H1b1NJvP1SwaJK887d9Xo1T",
  "key33": "NUZ1jSWXyGmxe7WX3UkT7wgnSxi6Yg1ZdCUsKYzYPMAA5D3ikoTpatCzsymCCEUQ7rqJZ5jskhfGhWddGxmN6bb",
  "key34": "25pFucz7PsCHurXwQjpMRXH4q273Nt5VAhY1CcHXcUnN9hXhx2DscVjEnLbGKdxeY5YDYEwcKjHUwJ5NADGbHb7p",
  "key35": "3gyjGf8Jbu5dvKThC9JJ1qmocmVQdME3UA33RbUqkxshmrvc9NPRYU4MdLjXVx9ndENL2NxEbwHoP5UC6unL9UFX",
  "key36": "4dSuCwCeBLaxPG896BvTymgGuPscZfEF4LnheJjMBwyZWjtfKw9w3LpzLMf9A43Qus6w1oCJVsWvaRiTSXWUpdKv",
  "key37": "5HRMgP38wHrDKNiPSFsLVdz4bPudJwCJoqXqXG4qhUdQDJCESWYvL2sdacwFe7YVYUy8kmAdCf7mgp9SPYnXZBL5",
  "key38": "qSBNt3Fe7m6AbvDVTbTbne4s86thrhSu3tF7ffLuFi6sBJVnbZV6pGWysXAoUttxPTq1ybGe8sU9P5KJF5GXMV7",
  "key39": "4cYe3EtQJC3uM1dFAYLpwbaq3w15ArhY1bsoXmNW6tHcVEEyQmKYhH33AqurMBzs5yHtKpr4FB4PUdC6JYYABbas",
  "key40": "5aWTSZBhRNy1Bo6ixjmNFCrNgPLug7xiaDK8w5xeDMidHFbcWu9JAyXhULnwLXoDEyd7uZdJSEStAwghXbBypRWR",
  "key41": "2ivTKw8h6XZuVevYVgCEogZCgEe9p6ZFpnMAu3EZ49G9cyB43EXgq2TDo3nyWHFaGF9eiKXr8TQrcUaGcsrqv3T2"
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
