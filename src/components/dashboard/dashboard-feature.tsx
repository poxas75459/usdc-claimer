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
    "3HGEY8oHQuV7niMmxj27SzZKz8QQSPoqWmHQvtpmDfv7xEZVVCabEf2U7AZSiq6jmPR89w6aZePTYo2nk1GsEMvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467MwCZwSoZ5Rd5tRsN95ASLpwaMaMKe4nfZUoy5HEMKSBbLLi5KcFTwxQKFYDjtFewXiiTvUmGjEMFWdY3Pix2G",
  "key1": "HphXPbfd7GwSMLayTsTpXCamWRGukuCffvp1xsW1ryQxvCfR3XJ9kqFfp4HPuiUBrSNVzxmFiLiJTb8McN1NBES",
  "key2": "3kj7BPuFQX1HXjXcPhur8b9gyuLHrQL6FGwrVtgRc8NSe5Vk768NfKtsGpEkTDRRjq4iuXcrpZZ4qS1q4LTMJ713",
  "key3": "21V5C6uapNHcEA66qXvemjkKMvwbqUhwXPZ4xg8aDSJgQ7ujV3Wmx7p12pd4tNQRwhWa9BTf79xXLzh2z11akRuV",
  "key4": "2UtcwpZoSiP6Xo9QUmgkv1LD95Et3kTz6a8qGNxaedjBMi53WG7Uw4Dw3AWy83BHPAykTn4uwY8TSbsyf7bnLf7G",
  "key5": "3FzvANn5tjNcbgDYs7D6GK1H1uaJqnrP2Fk21sL6g8Rj2GCpG7xLDSotHT6XRHLpwHx9X33v2eiSYSuNueCjNDuN",
  "key6": "2BdqJHQ8vMpfTUn43MqajARkba8CDSyEpJMRdtHALom9HmkwmNwYtRC2mURL9ttWJtk1eChxZCYctpJ9if4zDHxg",
  "key7": "2Ao5AFWsgRQgWjYSLPV6ytDEBPSCfUn8GqYAK9anAZjoQ6AtDeMGEeuzoRKM814EwqbKRBYeZbnu8seyvYBjCLsw",
  "key8": "2hmRb7nrQFD9cPFdE3hoE5X1kriXeZzjWaQyqBadGjdYb1mvsVXd6z5vxJaYsK5AbsUNCZd4ypa8NRU9LmubEZSP",
  "key9": "Fo7hXQwvbeaZwdktMCf8nVr5r8hpu7HhYwSCfrpNNmgMu8DBT1UJn6DJWYRp4UW6Hsk3syLLzsYvRVAnckMMker",
  "key10": "4qHUL6yZU7cLPurbMhseUKMG1CAxWZAwv6B5ty5vJDd29pwiH5tRefkpcDoyjLThA84koPZ6eiAGWmW9Gbg1dQBT",
  "key11": "5cidqMotpwtvz7wGAe2NnS3WyNNXB6zvz8vKxPxSgR1EKdNBuK52P9n4PqvsCEgD24RQ5TF3TWxD33GfrXWDobks",
  "key12": "4mhArAMHgP3FMn65d2RXtjEFF19wCzoTr8w3wBBogkigxZbxAwSLNM5uLi89jLYF8snmfXqUv15ZVEbkBRP5xgpa",
  "key13": "dssJKfjjrCcWPKuRfHuxwpzbYeJr64UzVYnk1bUqLE3Dsa3Dcwzfwkf9xL5f7pFUrazeaxD814JD4DnRQf758gn",
  "key14": "2koUWbBiSjk9Zg5GHMLCyyaraT7TyzBQ7ZG4Ft7A7PjyPH9CzAojhJjDBSypPJbGxLWzY1WKmiTJaeTfwDL36c8y",
  "key15": "2ZMyuZfws721qgRWGjfb4sgqiAKLzGEG6jbe2jqjFwFe74c77YLtuKFLErG8RF9LuNX28ZVzqCZ1bRCwEv5MhEHB",
  "key16": "3SGbnda1BQCh2R7wFxw8CHFehSYU1xEmY4GeHSt5w1Y8xb1qK7YVLqxuqQLhuBn5q6bjdKxctFT8nHWBjP7xC97k",
  "key17": "5TsLceJuEdEpT6S1Yt5uwbfUcwUDYzSDNrJ1C9y3ZNvddYrRLgEpPijfgd9gnAPUUxiZ6gfYmC2bN5sDGrZcSadL",
  "key18": "5E6PM4HUCknJnLyPWk74se4fhLu6gx7Xtg9GzJ5aN1jPq8rksu7zcB7pjxdChmXNCshA3nTAtgLMsWANi5ws4GAc",
  "key19": "2UHZpoTDxcNUMku8atif36KW1DPjMzabJLVPU9WosK8J8Rv4R5MVB9wi7y4Es6vJA43QyFZABNAvCDewyBSfeKBh",
  "key20": "3BrFSmgECpgo3FpQGYGM93rvR75d1L719Kf49bPH995R6jvffWXUK25b7Y5ENGqNNs19GF2HQsANTwf2HM9V6f1w",
  "key21": "5fQPyJEUQLQu25NZNX52L7noNn8WHuUk3Rk7xVc2aKT8b2Ej7ih8Nu56PLXVfcoYYQSpmFx2kermL9cLAyWjaQN9",
  "key22": "dnZttqCfmoxiUxqmdvrbHVbC2HaSVZgDTEyLKrYK1aLuC3ykBNbTDNHYYciELmVU4txV42VnrfVpjVxvvPVrex7",
  "key23": "ShiCAJ7FdRp9bDCKebgSKMwcMJP2NmonhZ8MCtEqWkp2F6JVFBs6PHi9WcuJDJgCmSjP3CsfFJG9QtUv6NT4XQt",
  "key24": "2q4Ep4E7JZ7gMDu9QTxEiBMehjgudeMJVMo6pusRY2jg5Ten6RcVyqKd5oLp65TgQb72X6eV75LfTSt7am1cbCog",
  "key25": "4WKj4LKBVfoFmxYq8rRWwh4kaqz5x2pUYpjTQppjZ33wvJvd2KZR83bk2QuHUU8xpqFcedMwBu6E8j6Dq9GRW1hU",
  "key26": "1VtTg4cDnGywEttiC7kiUHQhZA3Ye8n7qKYDUnwJ7MvHKZHM7CELqnUDijWi4nPzddP6B6sxtEJ1tBjo7MgX8C",
  "key27": "5qdt8Gbe2gjgWKJXkGYSrUm9FC6J2du5p45ucpj9BWVD4otUFJ5zu5PucoX1x11EHckijAhj7MyeGLoE7YQRPUBA",
  "key28": "3EWXF3eDM1Uid3f3rZ6aAUCuwKh9sMRJxvqybhELNWkQwr6fZGsfFe1Qib9VPn7VRoAo3eroaMhv6XuzQ6NRGLFo",
  "key29": "TqETkvvy5yZCGemT2NsfdGZHR24ScVFpYjpWvWJ2sV2EG2znZiL8dAVp2QajeyBRm7UzV9NSzYGXPd1YRQfpqkL",
  "key30": "rWJAWfH9MHtQ7GWE9F3MfXZ2GhX3eMFFKNXf4SF5cwHaJTPADzausssNgXWs4HzZRmdH32GqKjMAgxUfzBCs5UL",
  "key31": "4La1jzjGp2yjRsyoDVf5By12RuGyoG1NEPYb5bAsjvTZJnqomPUBhCdYobyM8wo5CxeWNAporp9NLnnUpZPpw84e",
  "key32": "5nmMTpjXyVMKV4GCErEo8jNsDTY4BNWPQ5GAeyHe7Hk8ZTyw9j3MaZw5RQubNqgvi32pQaugsdVXZBMUvAs6fpXt",
  "key33": "FukD6BnNwL1JPWVysJofYpHWZWz2QJthqSVdsGf5BjRCybQVTbpRL7DMcJBkNDpGvjAdjFHJDyv2LYJNqGbZJbE",
  "key34": "42vvQu8W7r6w3UMPkN82uhVcfnxvBVLpppjmV2JAuKtigRdF1FHe9W4BYqMPmgR2WcMNMFvRsCY8eEBXuDUb6bVz",
  "key35": "64bUvqjm1eirSQ8z5WLedW2RdVYfntAw3aCRbgNzadZcnftAd9e5WBoU6yC7KQzNmtvp8YW8ficT3ERyd9VkB66s",
  "key36": "2RQwEE3foxrXdtTGGGi3FeoZqf4jBPvuGL3Uq9HXLfCCUnXhdqcDvKfqeRC5eUSLDiRTpUkQzrqkaGU4vh9P1h3R",
  "key37": "4X5LitA4PH1MrSHR5pffzdSSxVS84aUcpmVUAhyUNnQ2VFS6tjkZ8r4VWmtiqrHd8YGMG8CSdMQRQhkeAojRWscx",
  "key38": "5CYU4fKKTmNJitgdGBncUjJPJVhjn51jBAB6ikrxJZuYxqSFghxiVrHmjawLcwWFjJTpUABFNcMGM7cBsZVrzLLj",
  "key39": "As2hQadYKTNUb3bBCBJLD7X1rBZPZQC8xAdHbKMj9AmHBCxG3LaR9yG5baggSd7YFfZpnt2rSt2FVerRKwqtGLq",
  "key40": "ntTRsy7vR2S6dRWVCuSfw5sL8G7Tw1GWoWbkeJmeQ8Rxpk9ekq2btZoAnVyJ5ZJ4NmHZV1eaz32cniaqrnN5cs8",
  "key41": "4zqzg2cMqXsSqHfUXJPbUKe9mc3W47KSR1Mp8RVWjefCxda4VpFYCkJAr2KBnZTbftnM9tkppdY1TwVCZSpJJQxi",
  "key42": "2H16Tk2KpgBWiXHrovF42jHL5Mzm68TB88Efm2KpD4MQj9TEbCoGg2TU5CWwNxuQvj5C9HCbkuTdvYEkMS6fqRcN"
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
