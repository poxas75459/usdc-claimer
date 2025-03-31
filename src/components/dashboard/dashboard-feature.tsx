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
    "3GiQzeH2YMbjckufQCgyyWor4j1FHuXpwXWaiJA1ZB9Zesjaw9BcdaPsf1WsxwCwADVqJ3a5Xj7VbmNrA5Dz6Hp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UvaS64RA4Dv3AuYptGoprh36Em6cDBqUqeFYCrs6zgqJ9sMgn4fnkAqfeCZi3LQrKAUgB18w8m5DA9b5Nu8NsMJ",
  "key1": "AYAoYo7dd32uxt7fSyBfH6Xr4KpKE1j6kLumE8cXRg54voBPuLJdcPHMPzYZSsH6ctorX2Qqto3pRyhLzVjFZrM",
  "key2": "3QpxL4oCFz2iXD2GShT2XU5j3K8SYHtynn2tHBfKGgrPTMkXQUw7JeMPGkeUpNp2BYNWSYLmQhrzwETUR7CqAM1o",
  "key3": "UyZfXyCfzzDo1hbECy92Rq5Vp5uS12ZRoy52QisANFTESTSd91FLoVv91G1MhHHesFh3hV9xssdptKSPYCgDAy4",
  "key4": "3mStU1LNPDqkgHAMbhUibaRvkXUB8qLhjLo8km1hnhneumoVDW21zV5q6ym5fy9kwhFyS3Kirj7CDFcdg2CmRuHT",
  "key5": "4R1J7kZgb74i5LCSoAnemYQmpjx38ULzKvuBWZGR4XZRd66o317XiJNWrs93bfsqK9ZV4HR62HxuB4N6NGHaoXwu",
  "key6": "2Xcsdw2yDTDTAnP7iyB5xcGXJPAJ6nju67YKanWjgaWDzb1gozPkNGpxH2sbJs6J4L5BK6B5y33NzPgd7FtuZ5x3",
  "key7": "2ZAJXTVMnhFkUMLAwfJDSXHjvxKp7scEhSHZLf8ZWmQcVhF7gHKFsknbcizFKs6s2XwgUH8ZGGVXHwAcKTVugH7W",
  "key8": "2RmjtXfRRxd5qXxKadgwzLg8GhZpAFVihME2qZX6AvhE2wfdizb2o5UuZgvKJT4woFa4n2MyuQGq5QmfVkFo7KAN",
  "key9": "4q5iSiECYLMZ1NLFNRxQCUatWjUKVvkQqUx1bfDqg6bBPHNTn7heJFgha4c61dFTYWxK5TZYDSdKtTdU82NYDic8",
  "key10": "3XquyDajaUspVeWdG1ycBgh53qNuTCka7y2HjFyLddDWBHGpxpQsHzFhDs46CqbFyuB9Eq2jsUUBPJFBvGEBMh6H",
  "key11": "37wJfJJAxgKnStQQdewut7xaUKaW3ERUphVaguVdMggRmwtVYg1ZFVg2BDhh9NXysT6KVUWrmwxirszJYc8LB8Yi",
  "key12": "3yBCswaQmpdgmXRprRF2PHaoBcbYVCba5FW4qDXvXwRxfrGb1VqZkSBhibMhiKEAwQpdNNZgu1FH5ZeREkGrb8iz",
  "key13": "xfjuxLoqBa4itBNtdaxX4C6KdLSxTCcHCzSgoJtCdc2vKvMaojUn4jJ3NgcusmGj4KPRDB3rtLPFY4N3ZztXKxB",
  "key14": "5xEHApeUvh3MFzXRQdAPKJkj7XoukkaXKcP8dLf9cZCFuE2E1Lcy552xzRdnvwbakFH4o3agNaixHXCm9TfreC7h",
  "key15": "4R2VqrG8SLZatDin8ov9fgTfx2HgRbZHBRsaQcZoeYEb3qQdq2WDqU6xmpmnViF5W4UKSTW7AdNZ3XRZEtpqPfZc",
  "key16": "4rzLK4hVW1UaksG77A9z9mJAjy8a9WPrQ7Uq4ZaTpbC5wvuHEthDksQXrRF3oHahUNLNwuc4Cvz9RPgBq8fqTrz4",
  "key17": "4MsGm1LGubCjeM7BAk2ZLrD2LQxPxEhxXwgjtj3uqyMTL2rZv1fHsprrkbXWiiB1sHNUjyHKxYAvj8srYoNwhjgv",
  "key18": "45ek3yVQF1SxTJ8EANXBLXEEvrLe2PPDDpLkR5TGmMW7xpdtTFLNreizv5TbTWX7sBUJjFMmQru1odxHPffA2ufP",
  "key19": "2hwSpaQiFDfN9V7QvgR96BEFUkfxWSE7yb4dZD11fXEXW27DJWff8JraWU3wDDh4jzXq1P6S7qm9c2qSN7DsfPKn",
  "key20": "77kS3ecKha95F7YAfKsQh9FZYJC7mUbauBubywCSxgqXDS9SZjYZjBzXmVaBTKGtKNLsQHyE5xrUccV2mvWrwy9",
  "key21": "4sz3xM6UUDUhYz6qS2f8caZyeqEmRrJPoqctoRQAgRRjEqQsiSo9A8MVG8o5cqSoGM9pwMmfz9ELiy1RTLEP3Xiq",
  "key22": "n4S9eTzhpbXqGCLFCyJAahbtY8Sd91Ztvt8BkbBHHMEqwqxGTo3cKZN2oeUes6fyeV9MtrSMoc3cmB5hPUezTD5",
  "key23": "5B11ryRLSFzgKw3nExoJBrEtJ5LgWbn4KKza7mxhLQZyfcMV41aVvxzbRqJgqvJdUaoEECtPh2GnPrLP1Xsi4DHK",
  "key24": "4iCKSLBrA7mk7Y9QrNBUw5UvGDXJFxMwwgENLZcpkkiDfTFG8eZUfgrzx36yUoN7VQ2VvoHVh4mJCh7C46KBJLrv",
  "key25": "65NHpyo76PiQkMR1gw4NUWfR9GAn3PgkaR6tJBcXKBubXbnxbdTRafeJ7ZXs6y1bjeThCaYpNW4U2ZckrftAguEu",
  "key26": "5PybWrmnMd1UULLBFDhGBr1sfRSWa4yeA5HiwHp5Cx5dGpZua57pv2VqvXQY5p7oc1E642ykdqm3kq8oasqhxtGj",
  "key27": "4bFmdFAkyuxdaoAoMVxLKeEJ8xovDTo2oLuAjGTcYGaBPnsp8wsdn4oJBXsn7cz11zi8ZTnJ72rAwm411gkWkra5",
  "key28": "JE7AXTUbATsfGv2K1WSmTDwdzHyUZtrUbV2SJx21hcbRHT57VNrZewk8UT71JQ31pRsxhrsWqqzXU7RK65WsZat",
  "key29": "67BHbKWyNsNFgLPWKYeVSgbtppmP41LHAT8Lv2StMQ2t2NfneNJzWtitHXF9nQe2GugaJDrFwM8AwYoqRpDiphjF",
  "key30": "5MeiNMhDQ682u7fBwqnYmMPo8VyDk1UdfvV4dpvpFCEkBAMJSmuqjVp7gzHGUg32crquTrS4PXND9SGBigGVTHXU",
  "key31": "hTids5cYmQMTWhgMZQqXyNzxVwVAG8kHbJ2qKRpMkXQyrW8UVercwJFoFes1cQNsYsVP5iBcXbjVxxMvyfUDpPb"
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
