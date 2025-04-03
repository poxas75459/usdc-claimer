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
    "4665W6SBxAykNHRvtbSrSQgiAU17RL4c2bitSqhxngU6vN5q1ojMHMWobaAxeKgLwUzEtMbQL8FiqbEjkQXarcoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oTDWy8vk3SoKCZepujaELKndi5tHGuVk1F51FJzAMGCAVsFbER9jwjEL832DLFe2fWzCsXm9obPNG9HHKCi9LWJ",
  "key1": "n5QMUM9ghYozgehsYjj2EnxwZXCXrZjDFskffrKGhQByspZgeVNgVWR6KVo6x5L5mBUDYKmvCykWD1JL7Z9vAWB",
  "key2": "65AWwQqicvkCFx87dFkPsCoQtzNmuZpUgS2ukE2DDYnhR8y7VK5naZto9oUM7ZRbSD6pYmQTpWSo5xhyf1oqBxrs",
  "key3": "k6qHxApkqzz3MEJVu76juTdSEeEGeEAwMfchPBKQ19YR2RjUSEFLNBuqtqY4UcGqZwrE2H7bPim6wgYYiNuXb9P",
  "key4": "2dtYLQjVELJ2g7GxkJkbCrNhNQrRaKsiSrV6KHFZTNRCMw2i6RNjrZoUiz6Y7YFahx3ME7xZ21HTFwR4H2o7PMqf",
  "key5": "3iPWbm4DQUNZVK3T7DjxFdSLTF1WMKmVvfd567APMZYygxgJdZ9p1qcxSWeo4JDvf3oKKHHNsX1Y2v7Lgi9WxcQn",
  "key6": "4mcLbR5MWcWtLrCtsfznhKsBdSqbMbAkDMtCRHqxmQundpfen6XreVEdWnAEJaLZ6nAupcxFGJPZaASZg9DFhszV",
  "key7": "24BwjBcsFaBWMgPt7nN73jTdNg9upkruAY7sUKXp7f1M53YwyJiVX53PwWyngDXmypeq7XUdVnLxSrY17tnjNdGH",
  "key8": "3Kat2LWoy4EjPE4nDDoFRmcuwA5zGmyxGqdsV8gpMfw1untP5Djhbem2MvX1ZmsxSPu5fP7GE6HWaQzerQJWJthu",
  "key9": "545Kif5v5svPv7erXn8j726aYG2qEnG2rHLKfs5mx8468P2kTa3rzkaTVeTzPa7ioFzx82tTjGjT25QgCaz55X48",
  "key10": "62z2PLBCRCTfav43TgoUGYcYh6AxTLo6fCTM39YXseKXhv9qw3yYNkYeyuovpM6rAAUGZxmKgRwZjukWGfYBvi8e",
  "key11": "4dFCqkBUEt1FeVf41TektgX6uTCygeK1yfWuKYiVXH7MdxhaoHtNm59uZ7jBcUbR8AomZU46Sbzm8WFfHQ56uCnm",
  "key12": "3ZnSSqeMSrAJvK5es3xwDgXpZycUmHEhCirAxafryy7aAig41uAEXzppo66UeppiL9aiHn5tPA8pQ6UisvNcN81W",
  "key13": "vWtupotK1yHgBXBnbAj56piCPPVRo26tvkeuWC93ko1DPLboQTv5hqfVvPb2dcfNJrXEnygKWZ8WibDYPZDoZUV",
  "key14": "obUixyQeA3qGCJXmaMgDJipgCywRQxdeQ6BCycUqM5TvDMV9YjK5xNTifUnrrwQAjU6HykAPmZes6M9cR3BJq87",
  "key15": "4HkymYczSXYbCUZCkHb6ayFtZ8bWmFovQZzBm9jukSzLhrVgQbW1mzYZ5Cm2MovVQXpgZsY2Y5KzzCDHuL9C3fU2",
  "key16": "4UfXztrKa8ZRo6TrGZT9Woe52LKjKMMm7HeaZPFmroDbLMNQayxAKnZMnKyeMBncthQGqxPoSRa5X1aZdJAMPdJ3",
  "key17": "4WaHjwnNkmVJsfscQ8q7fQMB6zK3UgW8br4PABvpZrRkP23PpD9CqLyjZkXSy4sePq9qxYss6BdAdXJQj52q6J6M",
  "key18": "2iUFRBRyU2BkcsmzoibA8WiT9eBSX4HBgSRfqRXNaA7CUtr2R752oK9Qr5orEzDxTGcksz2P1xbhddBPQ1gFynmD",
  "key19": "47K1JzvYXv4vTpuoaZQHHMQ55z8qor1M8DSULzeNFeBLYn7hJNP9WrHcH2BJLmf8yiMB7oZsvBjj3DP3j5G4Acca",
  "key20": "4GbtC8Zwk4tK8k72bsopLaAo5SH1suxAqwyqfvdqz8BDFv4JWMQZZFioXcvhupkx5mXU2gWMFfvRbxURm7VnN6sh",
  "key21": "2WECdTgtTKmPN6p8EMLbuHoDrxQgDpdqGJb2KUrmkC1YX7ESEXMsbYypdvQxMtntSBuhppbFS8GpUaCtW6UCEB5D",
  "key22": "28bGAh44deBFdBk7kwcJbbLBRkS2wBQQYrEQ5vzjzcYrKWJqD4ZVz6uEZW7dBBRFqdpSNPV9VPVfjKiYhoySLL4Y",
  "key23": "4xxC4R9wwH9rMeFsTew77NT8694RNhDithzmc6Yv9wNNVEVsDhRsY8Av9DJwQv8rj11ZqLah9U9d5D9rqF4EEeWU",
  "key24": "4HqGbKVKeG1AaDYPCvLraXkGn916xyLXhbXjQv7zacPKP4ZfJVioRxFnvAK5mesJme9toPWEZjbeq88yFk43BrUE",
  "key25": "4MV7UqjS6o6622QxG2atAoM8jU5UCpVn3r8ToP4WkPC99hhJHntpPrHaRLyq7fbsKdDzmbXpQtaiLXYeaeRV3vxX",
  "key26": "3bKxF2G9FchgYUJVYY9cbcXHqFCxxxSbWsxWuDkDSwdrWq8YNQdikhYebqsEad4G8TJKzPQW1NbatWXqnSYZGVjf",
  "key27": "2CsBhYxp3ZepkmiPGb4w2t1rCxdNAdLBxGiaEQEkydbJDBKtNDZNnbkLNVdQLbKzAaVKNmzwaxxA1Nmx4YtmZ7zu",
  "key28": "5ii2Ki3PR8StgwycfJ1X4yLvRefyVkVYVZ9rpqJ4JWsEHTSY4oi44jx7w53Cv6AqR8nsMio7NnmXo8E6LNkWxpmZ",
  "key29": "4VSidvL15EoTxDZkce53d1M8rJKZpypteCahoddQ5zuMm8PiRBeyGCNSQpBiiRUtJJGXrMBKJ6KuQwx7Pk9esmJF",
  "key30": "DX9bUZat2NEVSSEUxis234askLqARcSbSGSp2jNnkeFSh6LGZeuMyDwjGSpSmmRb7nsYVaHKccazuhpQ72KtWxT",
  "key31": "3XVcPsjVL3puKn4zqHiAbrXEYaWJDQqakciEcpkhxuTZESpDDaNtRpL8ebtoeyLd9GxyUHp7Y3pqpPZ1h7wDFdPC",
  "key32": "2tHe8MmgYUfuAUKMBPZRQM6exeX8T2JBZMdqkYLacnJXQxD5oBetPdTDSRQcCyBbhf7Fp9qYZVfUX4V6k2MkpKPE",
  "key33": "3P9BdjpNhr6FYcwPtvf4zVkqR4PvpBnZxqTx2CbNwvt3Qq6rjJGMKV16wbH3KYVb55t3aWVJXy874EwZfnNMo9nC",
  "key34": "2mXvGkQot7GegsRPkpwvhKMbpxKWbuyuHzPyiBrBwg6AnafzBdfsBbrwYZ5rR88buXdRJn94TNFvJB7XoCGd1TAK",
  "key35": "57PHbxSdni8f4qCpjQA3kZzZzzvttzaUWPyL5WtBDMosJnm37DmfAGdwYWKDopofx83Y3AimQFKGZHMiGbqCrgN8",
  "key36": "5cNPQNX3q9mdB27g82n3z8fDFjKgkZfwPzvuyKgVKeUXA3Jr6kWvEcijsiFTg8nWAn8t1jiWSDitD1H5V75TbUDB",
  "key37": "3bEZ9TEdhZYKfHorbNMDrRMeQRwhESCc26imFKjveCKa26y5iRFu8YcX1CD5CDGQBU5pNfGVAVUjQLZQPvFEdH52",
  "key38": "54v9QeSFrfGdeHTyp7BRYNqcVZY6rXS3oZhmX97Jgac1tqXgNHvVo3Ax1fM6c5JHtvLvuHHt1eaVjX4sBsouPh4D",
  "key39": "54PVr6F4twRUUtqbKofuGAS1Wbh8dimnTgkDxxSVmNKBS3ZiEeTmtRmuBYaXfbcLxSEgNfub8u5MAn1xAwgpjvid",
  "key40": "4VD3NTxe7Fk752ZbDtDU2ozgg2q5hbMKTJrZiWixQXgZVLf7W8iJHvW567MoGpN7qfQpgPgS3hW8EAiyfh67qJXT",
  "key41": "4XWXdFdESpNjAQosr4akTHf39gEmJDiHA8mtgjqcFWE1t3tXkzJ5wwQWL7PmoXgts48Ysosmsi3Zgu8P1mngbbJp",
  "key42": "3yddYewEDzTCaycBQaord7CxGvP6sWUGCVPqRnfS6kdDUpwyeJfmNridv1rwMxzT1aPZrfrYCc4c331CQgneqyYr",
  "key43": "5QW4mX5TKois6yz6q2JzBHYF4VdFXoQnNTzD683gU4fDTKcSZwV4dEpPjeHkn51yHKP3Nd6Tv8m3dVTaYnMUjneo",
  "key44": "3sPrZc8871jBkqPoFz4LZqoBz7rM8BeBBGAiPoCtiFakd3rqnz2pP2FLgtXbD57999qvFS5z5osyB32EWUx719gk",
  "key45": "4oMSF9kcHkeNtrLappyunY8PvEz8xV7mG1pUPpBFfs5wsT98HKN2ZpegzJCTfkcLUtSAQ3DM8at4shf23k5NwzjP"
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
