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
    "4bvrosmU1cAMV2Lyk4tgcxUtdkxBmpc6EdQqcFFGBDqRBzy5Y6YeFfebAeMFXqmB3Yra1QC31fRRjWiU2AgGX1nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uw2raAER4nytxT6yLdwu2AuMSudfmEXnGFnioJ2BNGjFmstmXB67BYYdwSGCiLLigbu4vJN6LcWnYqQZMGRQ9qR",
  "key1": "zzdmr4VPDWAioKE6eQ5vUjdCh9U3HEkKGkgEZxFWiF361DwCFkGNm9UcBPsbHdxBnKJj3WHz58aQCUbAxzuUpFt",
  "key2": "55bQF34MuPkn1YYtSHFQuXQnDMj84qnhUZrT3YZgTP2YsW27g4aCVkkAahkGyLPiUr9E4jFnC5sxZt9uEJvyXePQ",
  "key3": "LNtmdK1TQvyCxG35WczqZtaJqSuEqX6zhCtg42eKAYquXRKVhysCBZzCYHZUrKfE6EsoujMaDcJVm5cXgDsRShg",
  "key4": "35wwaas44mbNZKXV37oTafuUcuHdEFQZyXJpqCGiwvVUMigBkbAwCjuVwxVJGhRzCttTSai1FUTbYTe374pA7HS8",
  "key5": "GWoUNjhVyWZjsuDRgkSG6wxN83DFQx3TxMbhuQBdDteK4a6Yksve8iVom7kqc3hfYfbcm28zePuZiZmp7MEcyK2",
  "key6": "5vhxhmP77kpMzxLWK984QTpNrYEv2YTMFm2uLyMYqSrS2tRYga41RCH2pc2vnFtuXbtod4yvBn8wH2wM1RoDMuUp",
  "key7": "pC8hzuidU6nSaUq761SMNxzTiyTcuuKCBH1aYKcTV9rtBdTk233w7xsQphU5fRjw2LnDs59fLaAqBhAY1LQDLAX",
  "key8": "4TMxVLDv7AQgh5FqAWz94dGe87dF8ggmmUpTsTkKU6QQrtf6Lf2oAvbJU8jwQDg8Lrux46qZE1GrqmWYjH6Dmqe9",
  "key9": "3NdnTeHBeVFVgr7hRhos8yJvqzU6cziqjxxavWYyVfyGRubX4vpqBmt7oeN8VbSvWNSBAif2qXabNTYSmCUAwKfr",
  "key10": "944ehATMy1q2Da52pZjH56d4yV6saTzfg5UP9Hkas36nYo8pgH4gHHM8xPAmaEATAp4i5T14KRFWE6n4T3JoL6C",
  "key11": "4bZBAeM69ZkLtAd82p8SDxMVcwbVbAjRPaPYH5rQsm1E3mK9UMd9bi2AbLhreDg9f3uRUCCLkzizrKzg5m3wpCKP",
  "key12": "27ar8tgGzespBGyrmpB3J1QFrZP261h95uqCrrcL1H5THQ1fbZu5qYEiSm9SjgxUxnQnybngHgM6cNcYvqQjDs7t",
  "key13": "64zDizk1FD2TyhVC69y37j4mUfZRVvBhX6qPDozYBFoW5sdQeiNoRCU9ukxjLNcq6shCpQSbpiWQzzWdfDPcCcYk",
  "key14": "4kmNBngvFufCNASiMqhN8EQP6Z42neeytcoEfWdUGiioJmH2LzX2T8DuTqKYdFXQ2C2bswEWSxYZQwWCKstkPoUj",
  "key15": "3s2W8JeCaJT5UxM3D2ADhf1XE4juxNZbvxpdn31vVz2gfJBcp4r94LL53mUt1vt9WfZPifHevpDTamPmSvFhNWLL",
  "key16": "4UBCRYxSX1V4kEgaMfDeiCBkTuSze1VUyW656S8g1cUNNna6pEZeacGdSoMoet9XpW9iNKkrLREHdnW46kh3xMuh",
  "key17": "5kMogU2pFDvVH5S8f123j9G7yMSEr5WWT4ed5EYs7hLquwMAt4RbJ3D3ZCrEmJczjQcPD95eVSvyScMPZQwNhzWN",
  "key18": "43rpiT98zVcdz7tHQF8G6M32XeMAWPDpUTxzRDuV8KmQMQVSJ2yDzViuT6mXS2MJUGwYxUZWjm5LZrX7iFCdymcT",
  "key19": "3N8NxUN2iWgBp6WoFjrLDRGwyLfjKAzuGieSjMEQwjRhrCSHRbFiJx2Ruf9aTWDubCarYDNbZJSGeyafDNts9U6V",
  "key20": "3AL2Pw62xCoSH59Uz7fQ94fMAceBfzybCRbNgraAwHQCsgfmswUsZmwtCxWdsYnJvsRZQDBB7eZ3KbmqeBMSie6w",
  "key21": "z9LQ21XQZAQpyUzsiS1YZ1LbhydgUmRWdn2r4nChTfDUj7TaUtf21yU2iLhLrasopyrH8CR84GypntofEZfdmcE",
  "key22": "3boCDjjPniqkKb97r18YuhUggTo6mBMPdkMKAxVLNgYnSXbvDd9o94zypC4F3jWFuGmhPUKwZcQwtayTnJaZEBFe",
  "key23": "5hPgGdbHW7fLPCiTKPSt8kAhz8W35XZJbrKYH2aDuANjDHFcLEHcFvFe26HHRncfxUQfkkdHvFYu5vuELuw5iN72",
  "key24": "5JuHKwd6EV2A2tBbnwiz8r7rUT95FYgBFXFjsfD9tt9SGG1goQUrthgxYupHm7xemXwPivqh9WFJHmf1u8FGB9hC",
  "key25": "JHssMZzBkECZ4DgeQb2FjEVrTPoujXsC81rDNN1ja9g9tzZMUpNdv64dEiq5gk8WrdBHjjN3KxxJAC7rH276RC2",
  "key26": "9GeJjJnVmG9wECqLvWgnFC1doZFHYs1MAUKqTekASm3HfxeDhyNtNbTve9rddF3GaQmiyMEwxJnhdVBcLhDZcBo",
  "key27": "5vb4X2KFnYv1RVZF9GRHoExmbWdhrGNe1Rso3DXeuLuXB12vyzDcnebJu9fJHry7cK4GBUcaPYeHr3apEz3VmM5H",
  "key28": "kZds7bPKnRxBGqGPwSpqVukcaKT3pf3xyR7oKZ9MbtgwEJQsAfqiXepZ4xLwWPRcKXSjxgJwhaPuzJNQEwS3i91",
  "key29": "2k9vpiqKxvUiXvFsTXgF1QgKZ2vnqh1D5hVs6MJPaLyYuJZnFLVWT27YXDwfmELCLZZavKEDTq1B2kW1Y5i67Xyr",
  "key30": "4udGAxvgJBbRaMVWThYfgoNoYBigPizJPLk2ymYDQfJCaECzSXokxA2NyCZwZz3fmBY9yCZEttz8bpUPWtTNPNWe",
  "key31": "4VRC3d7Cbt3sczDDRajtZThQ9EoeyQ9TnButSdZgtxrbuJS9Ex2zhGVXJRJLPUFL1JkfYMWvdEaWKkAzAVJemNyy",
  "key32": "64EFbUQLRRoVpvYfhLQW8gKTRtz3uKQXxMxZjuu1Cds86FH1VLe7wdVSvGGWHi66g7pKR3xmQAtuC8n5DfLTLicZ",
  "key33": "y4X2Coo2jivvNkopQxxNpnkEroACPNyC74VmdSyyoBWUAqvWsd7sDrgJyUxFfMZG39Qdwd6cNKH8GNK8fdfhSiv",
  "key34": "4WmD6EjzSUubxonTHX9sLoKEZ9epu6ey4wiFwX6Pi2fCyWvF6Y6MQ9coHQvfSJGwgXPxutcDd86pdBGJLLn4dZhq",
  "key35": "45uZkWXgc7CJBimKWY5gHjB1oPp9DV4dv6pe6H2PJ5SfpFaceB4baXudm5pk27WhuvNEe6uM45ZoTfGWL2Dvo8uL",
  "key36": "3etF1WNi8drsCZaST1aeUAZkE4UkjLpzM3bQuqpFNDT94CaLcyMHbuhopC8GkJqhAxHEKVe5KeP883US4ChwG1U8",
  "key37": "4WMRfWaDX4GRzqWuJKviXnCcCx6mesi9y61Q3nN7znR6Q3PqHi8DEVWL8FF5CCxRHzbUtYXYs4Rx7nuySW6tWx1i",
  "key38": "5DEkeQBjYeax7XNpxrdo5xYgoqNMAuQstSu7uG3mnjaRYD1eqWxYei1ZRV3tUdkhtBYimfbzzfpEdiM7yFMXrzaF",
  "key39": "3aJkMmEMSxA4TDjkk76TVxs5au9mKgEA9fkfr8LkYg8vzwvdv5iSdmt5UQWjHVN6Su4fAopkDKdcRHutqFL1NChi",
  "key40": "t9UeaYt6ptMxgMngvu7si9LDiq7QHHY6y6mn3aLQ7EMqDPbLryhaoco19apPw7tt6TiACfLczMH9q21y8MYaAZg",
  "key41": "65YH4xso79c3Sj3yRKsHAhEcQvFVW34TjMPuUSuunjTNyxF1HqBMurReWSn4oWHSvgpHNVLToBFp32XjkAbkiJdC",
  "key42": "3P4qFY7DYKoKeKorznNaQL1EvAo69MNQFy5ZYNFcGxi7EUfVe2cx4ed6Vq98ActdJb17M5t28SeyAzo9nq11mTRw",
  "key43": "4q5pVbzCrbsAt3KJBT8Zt8wV4598K2TsMG4f3BaPkReaHf9q9Ko5jvnX3PB9VKDGH8FkXmZVdkbyaYmzKd5mcppk"
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
