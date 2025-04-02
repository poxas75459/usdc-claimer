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
    "ThnpZ7KStsqUbvMLYinh2TFmjfsmDt2h7qB6Y4Z9Cv6PvkXagFHLT2fESso8F4PDjvBHHk9aXZm3KyPX5HNk9Jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cHbQg2Pn1UFbG6wLUqdqfkWCsZWzBhyUK1W6giLgArNPVFoHBACR4YS8x7MJksEpWfrgS9BZUjzpH28Jd6ZCq5H",
  "key1": "4VB5o632NTkpMpJKNj9Vbu7fiFXVPr74vHBEdBZMkBAX2WvYvEqpx9ZYwCthGqzWgYSUaCN5fD9aht3D5K7CLTks",
  "key2": "4R3Kqb6k4DwfNTXVXjDsNU25pmVvpiQmzVxHgXNvzvMyKjTWmg4jRVjiXQseC5AGcGynP2E4DbihcBmzVqeKDJs5",
  "key3": "5FhGqbeoNRXZcsSGCmoEkBy3AVsu2DzEq169445ZAANnJdQAeW9eA2vNizFDobnQohE3gBJR7JekPJTSV4svTuhJ",
  "key4": "3dqSvLw5X3JvHuHpgMJ45N27tqvjSqosmb7C5KtND2Ki4EaDCvSKo14Tvotrs5Z2UBKzMMhb1U565A9i8xUL8jwh",
  "key5": "UTnH2BHkhsX1L9rv1LiFixmDVn23Sf2urfNXksh1rwnUdXt4BQMTvd3pKpCEXm8jfoN4924EmFTZsUwRfWLB5FK",
  "key6": "2xwfTWbUWpFYfC7XQzgKZqFz6CgvpeCtkyLaXAcgHRoLGRFR3cPrDrS6ZFNoL3Ltyi7kuGuhxVQYq59Evj5Sa2xM",
  "key7": "5FoGTSXBpjiQs6V5EgDZUAzWunQ5LgKQ9xzoWS6UiT1VmZgypGeEEohtdt5ayXifF6QpjC1shiNTYFUg3VLP34Ac",
  "key8": "56uDGiwZpUeMpt3VrgzpWWZGroJo4KeaamJDDc6T8LcEfXQJo14b6ykVjm7epfWb8FnDYjfBiCZihHJPLMXXr772",
  "key9": "4gGxJHdspNBUhCysBRkDP8v8QBP8mq4KwAxSacDbQRs9VFs66m891d72g9xVUEuXfKzQVqtCGYgieP7XoZRiNUM5",
  "key10": "4gnL9nYsky46tB2yTWxecujjNVzDAAMct7GbPHftwbSFWisjkP9G2bD66sBq1S3r7gFE1DQ5sLL4AfRdKcYoaE6b",
  "key11": "QMLLnQZTdkYgt6qdRjfNXqRsCok5yq1n963rNd6rz2NZEB98ycC7YQ4e3d3KD137HWbCdR6hEMaCqtf5rVe3XxN",
  "key12": "4sAFHRAR4c7jsHHLPtM6HgkcbzRdYYhL19cXgkcQnp2raMEGzLa2fqSLpMwHMoXj74rojDexcw6HHqut67w46iVJ",
  "key13": "2qQyX5vKNztS8jdp532DtzEdkVPsmZZxQ8zeobAVgjcVvTB3NYd5h2VyzJVYteKsqHTKbmcFkPKHk9qbsaNkuZm2",
  "key14": "2rsdgPvSnUQtuJojj5bKnr19YGhhULop8znmEtEjZjh6kZHgkgmi4snXH8r1mjWaYtuXjRqdBdpZXaR6x6PEcw78",
  "key15": "25HVebUULRcDgVmwALTqi5t9SBnEFcYYqCjfejKKFrVDUA8KPYChh4AijtmwR3isgfsaz5emvRyS5to6LrieKpGb",
  "key16": "41oqmNyQ2PLH2aitkHpg1zARyA7fEqN6YAgcGxK5rebox43ViyvrQu3aLZYtg1A8Y44PDqsnTNEiE8kE5y1MYqb3",
  "key17": "24afHtznxYqJjPq3xNbsUvunuVjCXq5KzEfZZbepQ2vBcGRAFsyPakdbN9YuFe1g4i7BwqFJ1DnpYCK41tBeiutU",
  "key18": "p9rP9aLoMHbAQt1YgHWhF1MG5R8TNiU8KgDbf4DtBpJwJzhoWTJUigAjBhjinrxto5Zzf3gX3b8zabqRUi8VKBn",
  "key19": "2vVRNyd63MNEce1zXosaH6Gn9WWHeJtojqu1f3gBL6hB6AWMwMRhynoRUymBqtTbXyiMsT75opGYg6gdEKcMzAdA",
  "key20": "26fjg6BTcvMvxkw5uGgjy2hSAejo8c64NyfNg98mTwyNafeP18eaFJfKNqSxNbtuVUo8Attfo5gVHBA4J4TbAv1C",
  "key21": "2s4h686ChPvwnbxMfUP5htoR4ZkZvtXmTNHkSDeBLJ1NoWZ52cjmg198pSZpRGKvxzjzt6eP8CQZKg2RTFPJBzEp",
  "key22": "8dBaLkeD61hqn2bakxGVeFDmnztU7jrNeZQxVFuN8EraX3LFhSUcgFdPVrmSh322VgB7tVzGFbsjSFnzL7yN7Rn",
  "key23": "2pRBDvBJ4ysEedskBXUzb2qpttMegSuhpbE1hF3U1ABBrjHeKxLb9GMLcWiS2Xs83iTD1mrFPJKABBo2g29K3FsH",
  "key24": "4sYWLuWNysJcRbS9J6jCNgBKbtWohp7wPubC1bhzU5RbwVUheNrh9H1ZzzjzJJSuQrut4iLcnCFiYofyf6jd4zgQ",
  "key25": "65Ad2jcJCumGn2w3G9PBzCM6mFYdZFRbyVGMt32WBbCbuepJ4oPNxPGNhpDqav9QAajAuK643nCWcGuXMMQrQCRF",
  "key26": "5Kgf1A5Fp3vRx3C97JcGnj7xA4cAQwN3aTmzEV1T5dmp4SCxx3Up3vUnuQNvD5GEgSTN9zkoBGA1jpahavzvANuU",
  "key27": "2JBqtRvG38sDMVXTGm2d1hqZSYATgdGbpWJLKM8vpkByF1SZANRSuWSzm1RberYfcbV9CBNjcFtaWxzDYc7FoHsp",
  "key28": "52kdw99sQYtZ9noYMuu7f7c6svW34CUsX1H2PzGAWJN31JX9G5HFJZNvWVhTe9xZAfKw3uo9PbZg2ZD7PVPtQseB",
  "key29": "4eZkfF34Amf6oYcgTjTjCcQpU5WjSWsb9gSBd6PsYq8yV7jiuX54UEXpc55tYe5bQHdvmKFvjM29SzgGf1WHGCiG",
  "key30": "5ymDi7WJa2FVYQqqdjgF9nvJxPTXK7SDnbBjfyhJqyZzb6HFiDmaaiRRMhcU8SRVvGHQ7cofXTRKLNeQUjtb2uzz",
  "key31": "2t5VaNkLhAULtpSKcG9YTVBsa8mC7oii3xAHoa9Atyx5wL7sUSdnxr1M16dvosbCjmPKoR5rXKLD5ZNZXfmDbK3e",
  "key32": "4UrzyTWazLREWaKJLNCAyqNnQXtJvbj2nWwzgr6JCUPnkXdhLxJcpduvP6npxjq66WqFjUG9bGLLhukMTR1YAcja",
  "key33": "3UJa7v1vZLycpZw7ZDDXT7oJuj2ZC1apDmuNHzDhPAhrJVZ7wfBqbcQPWBRVzzmRzj2peigFKDFLmj6bwUp6XDFS",
  "key34": "21PVJQAf5GvmCWWw4bB2CU1f74d5J9EBrTRngphP9Q8tnyGCqptYNfgCQkMLjcqAxgrAXQAkFsCZM8tgSre3FLUC",
  "key35": "NYtVs7M7Gis3Z5dH7x2HsqkyTpm4BRtkE78FNFfBuKj7jH64bPF1hm8kTm6owZeoS3CnkA2kZG5LZAmCEcgzJXM",
  "key36": "3xL38URn6ahMFzV3SqLAKYUs4K7YERCNcyP1tauJjnnfrvoJUDJJCgskfbqUEhWafz7KoRoWN2eCKEAuMHQmpJw",
  "key37": "37HBhj56gp3Bq4gTjmAKzqtBmy6o1Lnpy6iBcip79fwUtpW3p2BYpqEXhnBFF3zCfmfGWVKLSuad4Un4zF6B2jvt",
  "key38": "4qDEWmxUDMTSp7SjeLsdNrhgMxz3ZwYee4cwNHzDcA9KHBvqXjvja8fo8w3pEfMy1yhRj4nYDfreS9a5dcBeXxzL",
  "key39": "2jm6thqioMAqRRmgy1jLCSNiLhWeVqekBpaxoJU775SqaXguDNWgfBWLPdHJBZnUYM7e6T2iPEJ3VUWMHadF81nV",
  "key40": "uVoAFKmkLqsgC6sSJSjs5dYLGgiCkd1Y7Smt3zf4Wva4Tdj2RQYwDSGBxek976GiRM2hVMTCxGxBx6Vh1QRdiM2",
  "key41": "4NufyfonkHMPvgPQP8ShaUY9FzFbQUhBmkwnfySAt66JBdQFQFDfSQbCMZWehTs991AtW9mRt9pi4FwfQcqKmxsP",
  "key42": "4AoMhTFAXET3rYTzbxm2yXzvsxTp7zJJU26grTXsQeZ9LnBGqsXWDeo35osmE3shkGmdbSWEFvW7TQXd1t77svtT",
  "key43": "57LdrmF8BKf94TJucnrjZyQ2fTgcvDjYY3hGv8brF8o9qmddz8CziUxzXBdU6tQVK87LD7PzKgpcFFkY4hwoLnUS",
  "key44": "2eS1XJrWjPNPrf6DtLnmaCNNwEnz2TQMB1BxWkJgLiRe8UiwN38AVwSWeHFezRFSWYz6VeoHLgEToLqbNXspdSkR",
  "key45": "44XKEM6v1qUgxHMfCM1ZdTdPiVecC6ouYZtpLk76v4YvrBeJJn6P3DSumNDQXdqedmbJVU6ark7TPoPTmRXZQaB9"
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
