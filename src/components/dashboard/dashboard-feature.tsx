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
    "wAPst59A49FkCatcYPhnPpsRo7sxLCnPeYP883MoHwa61EtLBeDwo5bykBtQmKKvZtBpEfXvMiLSwk8tz5rvu8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BLg5hwKYpWwto1xfv7s89a1uMo1iaV8wPx86p6V8PwTMbbbSP6VAetCbLvmYWrGyoq7J7zHm8VUnqPuNsBgaXiA",
  "key1": "62S7WZ9RAF6r5WzrcQLSLMuo3aQ4jfXTdrrHYJqjjwj9YDDm8JWwcCfSowPdGN1mbmbZkaeS1Xubi5HUZeYPCcoG",
  "key2": "2X7s7AZP7Ea2B17yNTPTHZz9eyTFsK2SXMtWxh2Lp9QLcNsnuwRYqbGA1VjKgr2QkRxh4aiWCiEAYG3KcSLcBZNG",
  "key3": "3uoaxSMMwFbnY93uqczSGAqBWUBNzCMhBfXt9yGzgH6KVpihL8HeupCcL7puLnFooi8jBFEEtJHb8xdegvA5MkLo",
  "key4": "2AwzLPRSM7LgdgTAPXgw514AHaRahwMC1HabtFwrPA7U9GuXLFJNLAm4dJPnpKMGB14dsXJ2yztBfgg791EtBES2",
  "key5": "4t38csEgfB3d1nraht2Dhgy5BwnYWcnXTfDwFWzo8swroJFCVMWBLaXXgjBRf4R8AB6cr8UgWkykUKR2V39JTjsd",
  "key6": "5n5heHzNKKjTPEwLXPeZAx3q5Bx7hnPWrwC78B5DNg4qLyLZLEMtLeFZHq3sJ1HycZF4a9yDsmThZx9eRWZ77rSt",
  "key7": "4dSh4zk4DxC7HhsTCpbR2niJEusKv3A3As4CjnfUF8piH77AHmpk4bVH8G6Ciwrx2vKTMdN5aM94buXFqF4Kad1C",
  "key8": "2wAL1DnDpXEo3WiZAxD7gUKPjM6YTG8vpZpsh2WqKjK1Pzkq4dQMAeJmrMNyufmNfiYm3StKYbdT33yKo79rFwMC",
  "key9": "22svZy9t2FRQvcYchUcRgSWz6bEvyZAcZoPffd6KCoYxzZEVNxtMTGXha2ejQkBhYmq8TxauiVePYCxC2wmjp8zF",
  "key10": "4jBMm56DJ5BTvDLxizykFb3X5jrWtKi62ZyMRTWPgsC1AnmexiJrUC7fy5fh4zpMmHLftQGhynnwzijdJvJvyDe4",
  "key11": "41ufCzCt5qS5X492qVgZKs4VLKCzyewRWHAbEmJVfVoQqKwen9kAHQqRVWE7b6yFVJFNun7vBHLTAkn2h3K2aS8q",
  "key12": "5chBgKTXmGJ4PpfS8KGugL4HNxBpJLKPrt5bdSeXwNDUqFMZGwaVbkMCm9hJyPe8YUrgqvZSuzvrkErEyuGf9DGD",
  "key13": "5YHhyiwpQVMGbkWBvd1A6D24Ygx7QXuRX5a1PDpgGayfzb1vbArrcqFrbCP9cxgHQP3CdtS5Le6zgJbytPdRCUbs",
  "key14": "41G3aXeQA1UZUkUJ9HkRVvezW16NRHhpuLvfK49RXBP1ZV59kKtbkMHo4SHFTEx5onoYbh6F45iPVmJSvqYg7nLK",
  "key15": "3F7MVRFpFq79naJNgPHSbsz4qRPoNuhetMNc6f6VD3rvmQeXf78VYAdz9pPF732Lump8F3MunL3yEmmmi7LMLEvV",
  "key16": "29tm8JSBd1hdMGmqDeF9Ayr1rGBMkoJz6KNhmtX7Uuk6Zn8Vea8Mu2XyLSERGfQShGQR2etTuPXHKsBKQ7MivhEA",
  "key17": "3mmHvKdP8gyX49gky4f8EgYAaeqnjLtSbYXsiFHzYmX8YRgJYT1D5aYPQR5UGezG5DkJc1CnW3GLCAvVWDZRUfmV",
  "key18": "Jy5ZigrSjPJCvdGwtrqzwL45KJ6UFjNYfdefvZLfwPPNJrwdXHpnRBnY848MD6CkKTTbNgBZCYkGpySTTMfYJKq",
  "key19": "TYxRqQR5Skvm18jiTyJ3mnUcFM4P45RZ71ZxnJKxD8uL5FzcQV4Ri8jHxsJh2ufZGNKSED9KZXAauWwAuLkQrVP",
  "key20": "3NjD4gvc7WfFhPypV9f6yGgAK7kF24SvtPaykUQTptHbtU7EH82igsgF254KcDYXhCCyQzmz6xnYMB34jfTCm24F",
  "key21": "2QayR3P4Z5ha7tf6jYdHih8ZJrZE77Bkm5ngu7ZTD3FhrMRuY4NRCwbifYyTaDWqTRpWhL96BVLBuyUsgSQFqEtW",
  "key22": "2hpsfeUu8qp1akAJK2SKTLWR9R8Y8qRvDwuEEBw9qYRGo2f59Y3siBCUPhHikBd1MhWyMVXYApePTtXCG2MZXgvm",
  "key23": "MLfHzh5XJMwAMX13KmZZzYDLkL2zAJ3EYEkBVuC37hhFd7qQomhYBhksGeA6DiSd7r1t4dwyN5m6dGYm9UAjGLt",
  "key24": "3FkihbJhhSV4qCwMFdAwfz8iTtCnJbEwUnPtd3BhtrcktJVrWppQ7yncLvRxQKCokHpY9iVHBdDDnQjYTzZBxTAi",
  "key25": "yiv9wavg53jtCa6gHdVQTqteKpF33nDzr5LaEiDCugtauhv75HKaHa7mMB7ZCHedceu7YBBjhadm8Cu6fhoNYih",
  "key26": "2ZTWBeyrWA27o7QytBSAXomp8xhRAg7sacawJcisu4SjDr3J2rmYwiRq2HeuSgHt5oznN7eyKKNuajpbsW5DXatX",
  "key27": "3imiMwsoQu1JttEm8Ev3NDbf3UF6QRpGmpiJxhCYxNt5bPtxmCAjzDkXmozdij1CHjaBUfLnd8WNWr9WKi3hG9cp",
  "key28": "28P1vZvEVMxTgkUTwJZmn4jjktFGvUxCtumfQ1ZsLKSPjdUhiEtLb2JANBjpiFJirWeyvJbUZjjSPF6MEkjLQhzH",
  "key29": "4weGjWrNkRUdQ5N4BpywzSmeyZVdF8UeKMaFWeymXZxqpLhf4b1qcGmkFA59QNFVK5tgGtaifpYZxED8iHNbrj3P",
  "key30": "22QtqyEBH36n51rJLw2eC2jGqZt35v79WUj2tW2Deq8U8v62EswUrcPj3jLUAWM7cZUndicyEKSkr7RLyjBd4sge",
  "key31": "4GFWQet48UESgzZJbsyRKc8AXwqvApGNFe118omdmAC9eFjtv6zYZNHS73RPWzVxJ6gEkcftpHQriYUZ7AeDfqfS",
  "key32": "2RF4zNpd9XBmyNzYhWzub99rBS53CU2Cz1MbDzn4pWaxw9SAZGbL3Qarepeg6gqUTcixynDGBZc4TrGGvRCxZXtd"
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
