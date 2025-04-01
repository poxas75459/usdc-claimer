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
    "2MqE86hu7hbQEQui4at91pqj4b95j29iydH9nEAqDsahJkzsjAtk8GA4stnPBvgZKmm9Y2bR4ienejjjEmojD8Bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "499BB9KwMFY4s3voGkgEySrZKAqnbeYTtEdeeRwxBGWg5qGLFXpRzwq1iK4fYGL5ydBXZYBoasFWg1B3a1wDWLVs",
  "key1": "4rGZk5HaVqJGZvdoYm7py3DntcyXqn2UfaznS6VEo1KCGUkqWCZ8S1aj5vqV15bTbj6WQG64t3PZ2R1Rt3SGvfjt",
  "key2": "3iJdJ263NBJZscrPVG29QrZvxctxWGHdBEeHugG5SvZd4qHNGHQyp3awb6LwSBcUQWou5HUxvkPLe8cMuYWjw7jJ",
  "key3": "4Jz6sVUfcm5C7bv2p8deti8AFfTiQdX2Y9CcxU2RHd8FGF76TTvXqwy5qVMcc6oFRUFtkr4iqDoaAr8u568K8Y9Z",
  "key4": "3TvxwSx9ftNvTdxYHGw4uuMTzuugpeE6vTuttZoRLr9CEwt3k8X863KhmhNxeSBK7xHZkXGDJkE7n5KMPqVWkJC3",
  "key5": "4DQwpmNbkKdkX5a49fgLFSUewwBunLNaG6XiazJa21HTkx38yG5huRAdqkdySAZy7XwAdNfDTSRjSrXDneqs3GYG",
  "key6": "2gCKD655dEbJKfsXgW4xp7ziSiJCyFvDS8quSPi6tFSCUr1CrT35shHFyQggJBmcCtALAQoN6d33FhgtGWmnY92h",
  "key7": "4KFjYaMFGEpEtMLqUsfuJ1KtzJMZjD2cmat9CNHjUJbRVodYvov1vtmsDTUGcELNTeU163qzhHNNkmjAELTeAu25",
  "key8": "3vyaEuRc9AKcaFstbZ8imddtNGV9kMh3DyvAmTrfLdd9WvnGovehTXBHBn77kvVP9o3XBAxPxD2pW1GSrm9UtxbP",
  "key9": "5zG56L3tD27m3n1USdQXEG2ackerZ7DUVwhWSLSRH69uprciVqfHchWnxKnfa2o4wPXPrmCdNtq1zeh9wqoYqRRt",
  "key10": "2KtxiD8BKLoXMzs7Cxbjs4qJ3crB6DZ5Rb6wHJTfMbH1Jj4qkkCuPALir8ymVBHbUrnGpD8pYet9FwT3DGJGRhdt",
  "key11": "4asavfSNksHex8FSBhuoxDHKPTxZ5tCYKxxNzyn7CVCK2apHvTmMVV95KL2BfRoTJ4myHT3fhanU6V95mwSruxS5",
  "key12": "3QuWH1wPW3oxrEdb3brYv7x2p345FxR99JE2UnWUjmMfVUMsnYeAoB2jCNKy877Ec2mYs446pLPPx2F4yudYktW9",
  "key13": "224SFLF1h7VPcNo3pXywBjRbs94wc6zweZjzwoY1RrNdinDCn5eWQCafj6vpmem42ZE1gquqeSGaaDBJv6sfdYMr",
  "key14": "2H6RnnXQ9uQPuTJjbtSk7p72LSJt8tdqqJgpyEcjPpcRV44HE6heiystTt7UueWfwst22CUxW69pVkoDA4gQ1NRM",
  "key15": "31dhVJXMP9WbW2VJE8SEn3BwmBoubUR3yCjfZRkRKahbwbzHHEw5XHRjC2n4dPCWySFRXPKU1DUNTV7Y7afVWnHR",
  "key16": "4tzBgbznUyhP8CWZQf5QFwLtAancoRhTh5MtbyowTuGuyz44uCKxLQfxjdeGUecajWAAZfQNtQFePrCcv3J3hPPL",
  "key17": "2dKkDngQWFBuqzxEWzwYiRTJqtE3qWrnqAPfaw8QtT2ooUER6mwiCbCTRWxEo6dVNkpzrF2KkqADoqGR8zCpkPhY",
  "key18": "gVon2VmYAaNyTyUXTy4D9MrTEG5imG5CKEBxU8H9kJoE9DGtQKEagDTSQquXGNvEL7UwgnyFFkELLNTatsy3Ejp",
  "key19": "3YP2CNGmCFBWr2SjqEYdSovt6zynqsjqcYNw1k7ajSXkLh7Qo4YBUYwEdb8kkAUY9Ap9YzuCJF24ei5LxViStCLF",
  "key20": "2WSt9NV5kWknwi4CrrCaSk3A6gUCN1bcipPK854CrHVKfcUk6PfDRgSiLFx2m2qtjmAMc6EBnuhuktBYQsy73oom",
  "key21": "5ZAt97nyjhVHgm3D69oDnRuWfEexHDsbpPPgMLCHKhuytfHVRYaGJA4RaLzq8uZXQ14J5H8piRQwLeM48qneZ5kK",
  "key22": "3ZhNB4CYqBwY1EYQxr5HTh3VZJmcDkAGDNyjKey1nFoXfDDZoSzML4bB2KcXB36gGk5Jmz9kNCLHmb9TqV8xbTHg",
  "key23": "4MRr82rV2yTk8C3NhnM3y9bx9ajWJBQYnhEAYFeNfsWkUB76a8zqZQaRXi4GK3ZZEeX1FypSkmtMQaV9KnxVENHW",
  "key24": "HR96K7G3DC1X3L8E6Ej8B45Dnc7ZqzaUVrfDU914AtFQipeLuZpjHQeDtnPPF4ZE554u9YgMnAZxJCRqZqq7GMc",
  "key25": "uoHcvTGrYVvkvia8eEW8NtNGkyT3P9xijuN9V83VACFFC8DzDsA5GxkgvkqoyGKCias9hnBM4UcoYpQkMAivBqY",
  "key26": "4d3MeyEZvVanybatZhrDezWZEK8P24m7iVDnDmvAzotZ8yCHueyGgrhRKFcnrUtrWhkbtM9PNmBfrQpyKhXHSbLQ",
  "key27": "SxAtxNGZC4p5KvhNABsbB7qM2dnaEjusJdKeQUD7xj7e5Ted2p2ePGcKmqzQWu1vPd8BahuBcFBu9DzSSTsuZSW",
  "key28": "3DWaiZqFC2HapuWTCg9UrqvxuMemG1CXfchvhC3LYoxvqWUYYYUaJJ45ijd55Rku7Ck1oEQqKak1xaaUqt3dhhbT",
  "key29": "5dtKWbqPYUGbieiQY9tgizpm5DbqANRuxgdseRSeEvcpbsUsACRuHpCzATLKsTXRsurLQEYUS4YGG5EoRvBHGPth",
  "key30": "2YwbaPotRSEnNtVD4uj4YyBua6RjqW4TNKmPQwr3F1FmXXGuzNx3xCg8z6wr3PwXNaKgMnXunqUajHXMZ6L2b8No",
  "key31": "hfV24VLw9UeYQ1PvhgJEdjFt8kwzy6wAPK7dLQwwyoZEygJh5MrRk4vdeeJmHCmgrJmEBTRCpV4LcMYa9JbTjdc",
  "key32": "2aZhaWrQ1CWGEVP46csWvnpxtNPoCrGHM1xWB9Hfrg63kChjiacS5BKdAMEcTibaVyHWpZJ5Yhwagrwirzzou8N3",
  "key33": "3dSfT1Ws2Yg75HLmLkYbo7jvmh1TBd1MBgtHtTr6tnML3K3HTFEBugrXmpCUvJkMQgrP6a2Kwvre7uW6cQCN8TNe",
  "key34": "39FiyZXTNvRb7GENPTGMXoeZX97X3DPLVHEwynKk8tSc9G1cqnKi8PjZSCtUpKhMuKrB8ko2wQot5wj1ZYDPXzCd",
  "key35": "48CFNr5F97wKUzfudHquu4zLVcGtafsu3oxthVFJaKZgrczTe25WJ1pX6E8EBbzkumnmHpGH1xKMGwnvq4ggitVb",
  "key36": "dfeo6KowaJGaPMaKzDseQFzQ2o8qBNSoAPcUbcWwa9yGN5iJD1zr5BAsmSrWrnJrdQ1Ur8xEsWPykDiDqwhcrks",
  "key37": "3uJJhNVaMsBkLCPrDDS5m6PCDwQUeddXPCVCst8s56wPySpgPX2ioENVgk1GixYWHMaYK6ZCCJnNcVTaqTDGay3",
  "key38": "46frVW3Nqw8v5mcQMBHPA55X55CAiRe5MZnbxQ5KGgqCxFXVZeNW9QnXtEmsX2SRWgvXmTyxdbKkubeifyfi4UBh",
  "key39": "znFte6TafWXXZdzkTUNeZSiRBaiagfTrACD5TE7XZguUK5kZzYWjLEsUk6DvyE8TssU38VC8KA6R9BUfbMFav9v",
  "key40": "3JTeG2FQipBL5TQgBDYCcYLGPcZ4jCPTPDfUTz7ttwXACZ9xXv8TszVxgd18oApeKATLwpGU8rNUv8qdfCTnMXkg",
  "key41": "2pXjubzkEi5QfNH2JrAKe9YS27Q2n13TFWvqLczwk6vzCoTPje5ZPTAAnd3aCTHgTpKwnzCr2ypGcpsz5Km4aCFr",
  "key42": "5ax91v9gpuSNyBVGdgjnNVTzHsct3Ck1WAgVdA6iAoizRx4QazV5gto4o2TtFJjqVgADTsRnkDgP2j5SSed3FBy3",
  "key43": "Hsngp1US6WXwZLxqJ6GWvVkm1hqGNLKFqTeERpxvFxpEnKE1pkiCnFh3yo2EjYZNbx3Xvj47MfvSpeP6UW3vGNx",
  "key44": "3RJyUvV4pzdb48suekibBBWvVhSGNyZ4y4tgtS6H4STNamGFevEYv9RBhgAqSjb4kdeyb7MJ7xA7sMVyzhYfFST5"
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
