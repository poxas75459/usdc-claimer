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
    "4Ko3x5g3RDBJZwRYsU3p6bt1zn1dHbvMEF6UGj96J8cXqF8ao2EhoeuUJszfbGLWiDTWgCQw9ewFSoLp2zo3cCcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B8YR1fUtfZWEm5q4QfKr65nVzbRquYgZVspihHGzb4QBfyqge3wbutS6AE9qyQ6uqPCSMrKSSCuq2z8hSsVkbAt",
  "key1": "4ZFtUz2Cvw8HTe9GZSkEW3uQbJr1cjoMpSNXbFm7PksGaToVc5KS6bwfKv45Bo8YmMvTvZ3XoKuJcaSGzRGkcEQ8",
  "key2": "5YB1dSkQ6FfxQPzMoEgw3TMFS7vxF35vJWDrTPm7SSXC9k4N7Vj1Nnp6phAuRNTpMRSmUcUgbx3H7xaUVvv7im6N",
  "key3": "4xdxWWk4K9qB3i7DppcJczPBpx2fxvoWExHnEM5JoXptj7zdfxMs8bBC25LpvdfUPDJRNM5j7GZa5DRCHKidwYVM",
  "key4": "2x1jNyarGmYzhYJaUPFFAtVPqb6nmeXb9hnNLvTCHJTycgmKAC7t8qXSWBWDyQwdsQSsJTfeWXAF7YcKBUV7dGdb",
  "key5": "3GigqvB6m4aU2uVDqrx6jRhFpZKf5tUBLFh5EZRYvgNczWKcV5nhuGwmjrRDy8Ntso5rwmzujjPL1XM95wPEiMbr",
  "key6": "4fjb5y1QK5qXbvEqAKpr2UptUey24pX93aXFfxjR4UwbVd65W3VPBCmcuBATtsygCgSdzri7noyeNwtCzzK3NTuH",
  "key7": "5wvDeT2TeavdytLJDaSkMzGAvYYMvqYbdJ1tZAZ8yck6mzhAdKZKMSRCTtWxBZ2vKijgWo4XbPyJNYiVzVtPjHhP",
  "key8": "5PDLHjUjPQVyWux5neGGb8KxqQ7gC8DRFteaVfUqxw4Ju27w7HrJWwyMW678HdD36JcwkuFNGrQ6AYMpgDA843LF",
  "key9": "2jT9PjzgaEtKyCb1xaowaXHVvkgH4twUFA743fKSATgNqgZgVx73kqqwJ2mE5gJRL7DpVigYL3FZshZR9z87kJ5v",
  "key10": "EmHKHotWwrK96WBy56XsTevUEt7M4aH4Nc1vVy7qkn7cse4MpTDss1Wu9CZxLDC8iYrWs5EHiqgvfm525GLD44d",
  "key11": "5vepstAvUEQ1B7pfhzFBsVPPLmRwste9ZF4zLrucP4gBmdPAZ3jAg8rQqfMFUYn8yf9RjVNNECUeNuxg2C5vosMH",
  "key12": "2fyRVwwgH2EvbtkBEs4jwWR1dLeaKKZqmDtqqBDbTSgmp81BSdcU3KkTm8zTyK2CRZDeDFo2nJjsXYCijVLN6gfz",
  "key13": "2aA1Hb9BiT8FSY9GdPJmbtXQcAKLoZ5zS3SszGH47cJbydT5ATeF5b5yBiTCyi6twdmfYtpJpUnYtG5ZqguWYS6M",
  "key14": "Pxe9F4jgrziRBn76k7NXAMTX6DPx9Fgfzxa1vnpUcFj2o8cqfoNj1ob16MiQg6u72AcRk4GiX9RcbUJucsZiGyZ",
  "key15": "46azdHP7tmgTzQRwcgv7z1Nd2m4R1i5qt3Kyb7Jpy9jC7DwXUp44iX7T8bJZV4rLq4qcnkBvgXcceBaJyifb7tjA",
  "key16": "3hFtuUb7VDWBH5DkBzE17KiF2yE9Y5ibTr4BfHFqqt2rGmZV2Pc2Lh8mysHQr7ewUiEKJNS1e77U1Mxk8Jb5J3pa",
  "key17": "bJaUtdqnyHPWhgNUG6Sh6Mnzd8Bwg6dw842LjQcJq1xHmL5obnJc4ggtcrwhPvLuVxSWUD6KnxSJW6RVripuFdi",
  "key18": "2RCXoe7S99NqhnfBtLmw9SZH4YbVUYWKW9KNKWAHV74PzGFADpThX16EfBYxr3HETAJ2Ye6DkSv5SBw786fXE2Vf",
  "key19": "55cWijZ6Yao23qWFgzoRzn5XsEcUJTdEjtADQ2PzpMB3tbxtVkj2RHFoWxvnTirey78jmZh7i6XJTPtLR8VjM72H",
  "key20": "3k1jjMtjHmPoBcBaLEWczaM9QHDtQYK7zh4UDwXdMArieiXSkQnipQgaiM5Aa32g7KrfGqYzsG4tRtUkCmocxNyq",
  "key21": "384Ni1KJokfdjYmmjckN1HPhyyNE2GYmD3qmooZgPfpJZfDghzfses9LbhmhGqoByzSqDf4f3egVThGD8E8ckjxX",
  "key22": "47wJbx5onSVjDNSAH9DAgJtCiHTRCLxGuY9QafRm7ARhCWHB6zNnZnb9xsUeA9Vd3LvJMYdfuDCrHAeVtSgXiNKi",
  "key23": "yy4J85k419j13ybN3dY46y3aRZ8MCc88VZhC5iXA2y9wK3UC75SRLKvXFRNyeRoZHUWbxwRQJXSmp2Vm7ZFiAqq",
  "key24": "3kyL9v8dJJs2xd1MPA2eiQjSi319xR1mk5B8MvKAuDHkfSKScs8Kjbhn3FrDyrTcX4z2FaBLJG77HxsT4JFVjhHQ",
  "key25": "3dmAm6wuuD1GGmJhWjye53DNovg55PDdebsQpJsp59K73qh4Pg7bxHuAywTeCe3inFTiMjdHaggjJ82DpULypXod",
  "key26": "5P9M71zU3NF8oESMsNq2FeW58HgExQAywYvVtzxEGQGPX9BuDAvnzSr54CWKHp1cyokJ2Mad9DHkxR3QZvWwP8m5",
  "key27": "4s6vN2YGSAVUieywfKBFb28SmVdf8EAH3hr5XGfD8Nu6oRuq6PWevZpqLCUr99J8DL4x1Q2gmeWSNVwBEX9Bi3jW",
  "key28": "NXNZctG8ZyhXAkRC1rahc4eQdyH3GAR1Upw8YxCZNP3aYDqTNSiG1qHWTjuCbXmfm9d1E6ZDc1ZcEG7a82rj4Vy",
  "key29": "3R9ACSMHJxpDjQxfWXRr2gAt6Gca3J9Yi7i4vupxGZjQ2YT3AQrC1m7GNSXosNAdGiBDoFbtEF131RupnzfdtTgX",
  "key30": "3BYdJtXw4KyxqMYu3rCWiix1icvpsQTatxemUDW9YKhKTsAeaBZgm3zhYLVeGSy1jWc5u6Fj76o51R9XPabvTZZY",
  "key31": "2TcqucQYoihKXXbW3n9QoSKcpoHsVpcfkyLv4RHdEqSyHirHcG394wR5oNUQ7cWiZkim1wrtNBnYogLot2yy7TJU"
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
