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
    "2rZrsaKJ9aRuJDBgiHHJrQeM2jkcrncMC4BiRoVzPrq2d7mhiQomkC2wQ1Yrp22wYLHqm4QDhVkjcfauKacNwkvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SbAp1fiNZoK2D3K3JsPdoqY4m2Wjn1j5eiNRjgAhkHa26QuzebAQC3ZRpoXBLPc7yjtFsfdg8RWgqtaZzrMLSXx",
  "key1": "5RJ26Dc3RWr7kv74nCnPCgGfpbXsax5iVyXEBKLCLaRCbPkb7CxgCh8wnb1S1y5o1gJMuDyTm2riS5TTWPa55JMT",
  "key2": "2ufmQ3VfJszy9pfkx3Av2Q2TEem5FJLWgWqrV28uywNvDAsXqqrEKBNGU1ADJHanauae7rQp7f6LmfpsPreiw7kK",
  "key3": "ShjY3gNXCxH8JEWQidEmc8258JQ6Pp7Kv4EyFmqqiXVuoNDkG4ykmwEKhJedWxXbc9mYgwYAUULgeQZyUUchpCu",
  "key4": "2AxTAX2aRcug4SFjWQYkkwXkwxnBKwaJKP6L3ZeqmpDtB4xbSiWZ9YUJdDLayLWXmCWZVDLRgJ5tnT457Yoy1Bdx",
  "key5": "5zTTK4QnpxVQpPpc39zz3qH3yHqXa9dBcLY2GXsvGxqQM3p3fFF4hAHumPVzAXUbxJzN8mSY1v1j51L1BzKZswfM",
  "key6": "3cny5EBrkJoZ4NtpFLVu1FNxVv5GuQxx5GtmfEoUBPFTokHSnVmrL1YmajQj5pUEutQKWs8hHMCG6pz57TyyibFw",
  "key7": "56UofN22FoM9st1M3TebpG3LvK2TSoLwwXMMuGNbF7uqfYGEK4TcEBFfUw4mrkjKtEei2es6kURDaVjdQcfAd5tF",
  "key8": "2piJvyrqwbTgswmNGM8dZTfLsZivdmM165QWAf4KXVS9DUpDhzFSvDEboWZN6oXcdgLsKkjX61UkqabTuC1TA3d1",
  "key9": "2bWNbHg5rn7ZYyTq4H5i9qScEhhHeaTNU2G6GHECfiSogaq6fM89tk2VYDPpDRW6a98sdE2BK6Xiw5fPxPg1D6mZ",
  "key10": "2VjRgeyk8ihbGnueAFyiQcJVYxVmnp1FpwZvrnKn92S5dV6D8WjzzniQ9boRaY4yrcecNgED546bZPdxcUEa7Kz5",
  "key11": "3oY7Ps4ijmh9PVufnMSPB2wUGQmG11rN2PhiAucTaorQqb7b3xktHUF348vAN1sJ9SQoDy1eApFK6quWjoSxPRkP",
  "key12": "WKiUwkCCHYXPTT6LjCn4JKTssqgxXv2HbDsQ4m6yCqdiBcXk6mrASC83ZJczAQduMoLGYB6GeDUyuY5Lec3Qu4c",
  "key13": "5xxbECgHjckfMfXvQrgWKfNkyxpGzoJJsEjQzR4ANvXwV2LTpco4ESL5KgeoyZJ2yUf3ZcqbCdTbycKZTtDVkRex",
  "key14": "yZBrPFmpnes4sd6tV4t5sAEKdTZVzGjVvJvYFgSuECWrxJdzpaZUYAM7uUgp8cQQ5bPyWpymgyKQaSgbPWrfwia",
  "key15": "idSU5o9kgqHV2Z8ntgythaomSM4NWNQTsSBwMy4is5cMzVEs1cRsbBdCJbxknWWtVDHDoYG64iSoa8kqSAkxHNb",
  "key16": "4FZ2EX2WifcF2ZVGCedqPLufeo4Jp2w9oKkbA5cr4KFdmmcfydYbfibyguE4ouoEjbm9d7auN34cq3xKiJ2shP5z",
  "key17": "3ujZYD2CrdEMyKP6xWobZtZuQNg5AQw6vz6bEKbfePdPENAnhPoFLhEobCzBHfgJXoepmdroCF1MXeMLsQwfNazm",
  "key18": "5KtRoM9uz5dUuzSEEbBvLYy1fhRoWZhE6GES9Uh4C2uTW7WLNNr1DiTjBqgYwbQ1EEMSskrGUUhvKi276EFnK9xn",
  "key19": "DWmicANnvDebbJYyZtj9JaGUu1H7ucYQB16EcJKszqLc6BcSwuHbae42wzk79ZcJjEgBp4rXmcmE5wefdiFRhwx",
  "key20": "GmShETiVoCvvtYh4SETZFDoTfJjWSkPBoK4L5MMcx5LvTdXHNsxp9HtTpghN7W78e9F4woD87GM3jh4awABYk2q",
  "key21": "3Fr4mT9JSbcHmG81iuxXCpXYCBzqz17omPoymxvZm363NJsjdvcW15EPjCQKsWegXVWsxd3nYFCtwxdQts2Lew67",
  "key22": "2gWgoFGAA37HpV9xj5M7goJQr8VNr2CW1kEFcBqCx9xBKjRmY1T2gdomD4DmRQmGEZpR8wh7FoaM2vAzb7rCr5kQ",
  "key23": "wBzTVFuUaVVCxXNJZ1BCxvxieQSwwYka4641XQ8RSStEDH7vb25ckAJYqs43LL55A7ytBgPUhBrwLuPFFGX9m3Q",
  "key24": "5TrYY79treZ2WPhJXHFE64s7FarxC1SKXUfyxXya31SfhCU7FbAixZL45m3r3uuSCEBBTHdZxhbDb5Ex48Au5w9m",
  "key25": "NTSTh2m6eTM8ta1DKFCU2tinvv4x88SHRfxemibdqpbAtdQoupjC4VpH8xBJLsLbef4A9uWZvoLDNRcxfUpGG1t",
  "key26": "2TbtCTw8EXMvHLbGZrL6eWvgyskKNZcAeqG5ho1NRsuMjs9YYdDjfVFoCcZSMwaY3cm8aCpGkGDJjpBa47ayfQR4",
  "key27": "67EuD55Lryp7YHiUg5oiUPHgNLrj9qzJKcGTL2af9jzMGFgcCuNoiPqxeEfqNVGFWaGqccsPEbLGeSqJKx9QPMEg",
  "key28": "62Kn9Hcw3RMYK8aVCtpADTqpEbKRaTzMDF2frpy6FK1eWLCgGXgHUCYsjg8yPHfZ14JUrBv5dsiLjwvcJ4drPbpx",
  "key29": "2qpxsTjyHE2PD199UAQkEMryQWFmaqmfzVCA4pRx1u3UyPpxwXBhBk4xd1SrhnrLPdu3Fdsrhke5J4ohKGRzNGbw",
  "key30": "2JozvvxAA7JdLtW3R94pKXJmyRVWfTRcdZBF5hMp5nYEVyKkSgDaodEY4hhfuXh72zaU5w7UFnTtVoxeCykfaAsi",
  "key31": "45fYMR2zNX3sZa62GL8otZmH8fbs7wmqFH1Hxgwq31PUzGp4nKJVNC9sr5VWRhibXi5HQUgf35RaCNcGpcEBJqD1",
  "key32": "4XWqV6AzgR8A8dzJCUV26YDsn8nFzgaPi1sR3GZj96b9c12Esg8pzHNzyxbEUhyaenaMCk99BE1DwAnY5WkZuncc",
  "key33": "v6BdoRUNnY7XzPxvqvgh8mSNarwSeAgdaYTD5wrqfVHpgZs6CuXtKrzTpnkWUSPgvph7cHPi7kYPAEAkdeCq62z",
  "key34": "rPiHUieJEUnGBK5XQsPwSy2kAtpnmwiVCE4jUEjCEinkJK8nSXKJcSt7NF4bh4mv2ZNcSKmgZeKqMSbDdRdLDWB",
  "key35": "4XrvCwoL7Pidsx1gxUbhA5xGFMRc9GhSPwZoJ25yzjjewxsws9fK3YkJPaATRmJC5fNnF7exiWQxR4C7XsTUt492",
  "key36": "2FDLrQubCvn12dAE9Ssuh2veZ1ySBKEyDqdoZ32B4H7YediaevsMLJHtHuSK9pb5DRmTCNdTEjQrmdzsnGbhRTJz",
  "key37": "3x5WCfQqbYgqZstJerq2cqkeWR8S49RHgCA7tbwgNNYAZYCCuALU1YZK6kmUR4eX7D1MpqNPSNuuyhwfXpAYSGw5",
  "key38": "dFkR7Qq1gKAfTUBxTY28vED7VzYwFbkW92PGUrjLeT9XheyzvkoeCWhiWVqJ68VMxX58tPumZvjhrqgqCdXVU3i",
  "key39": "2FsDRgPEUdo8xTu2ovVSUUvyTaJMVLyx7hYndd84ytuGHdtQ6dvsNrxDEcFSn3CAdj4SmyTBVLzqyZsJrqccwwBK",
  "key40": "5ybiZBFHe6ydYBJDH65AgmivnzKsALCF9QMjK7KUHhvY6rXLEDM7nzMU41nwgMPxCXRfivvEKVzJkpJp2b5AjudL",
  "key41": "5wQtSgXUBfdAMW2hrmigk2j2J9ZFdmpoX82jy6xyF9L3ACNLuLt8baaXhMEbSTxNJ8ZqeMrVrH4XPQ2BVtbYoEmQ",
  "key42": "24eVKiyxTuMwPNMs6vrpzmHffeUQbjVN4fvghk1uskjdw6w5VQXRifwbyoifdrkY8Kdgi7vJjRZfNyrdu3NeokV1",
  "key43": "j3CSdj4E299hXTCpEcTKztKJuY8YR31SnGUe1JcUmEcQuMrQkFkwRRSVguXXYNND78iV5eAr2QYtb6WPqZNPnNA",
  "key44": "3EmgWFeRSDAwepBxFkdKAm2TeZDuHqNkMGYfyzNDT77F1DDH9fy5xBpEL2gmiQbNr1KeHGK4NWXkGQpzMNfd9psR",
  "key45": "64mXbZS2sxQXQUqc3Vujh9P4dC7wx6dwoo3Jsjg6QVKpkLjXgtit1qgsUC9sk8SbQvKA9tazLkZUu9SasJboa8LR",
  "key46": "XQwqtBkQuv3bNZnXENV3K9UwMtfnDtGUMpfhHt1hJVHPyFknFNec9TbMLJvcW3iXng3tABabhyLgPg4v2zeroEi",
  "key47": "JAAbGtKyv9mgWfH4Scmf37hK4ceesN7iS9GcJe1GA7xCmiPpBgdnSsqsUsMiYoDsbLGinFCzZTQx1wtqEMHwfKu",
  "key48": "4NkjjTPw1vSCtvLUH1Cf6wnudTHVMQ1qjrHFFn9JsYGi8V2XpHx7x9AvtxotarbKET8YgGXBb7fN4SqtM5inA8Ny"
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
