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
    "467D3CrDHyjkKmuJ6XHqmxukBsQwZsUWfwNQYfFDvceqneeD8woLcTaAgfNs3n5WcEzpWPPRKhfZDzde9MJXkrFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6xhwPgXjpgBFWn9xwdihUREqBYUFGmK8yW6iNrVMxAUC2i51gVUy1eZ8pz5SGW6TirMi2Hz5vYjfTVoeraahC9",
  "key1": "3ryWSyE1w3ZPFP7jMkij7JHytrVVaKNHjznLrMg9Gq6F9T2Tu7du5qXZCTt96qFLuJxaCQr96sTVDXut7rvwKVrS",
  "key2": "m1EKKTXhWtmgAub7xZTSvXcVEiBwE9iaZXwtXXd3Tau662AtRjNunSebxp4uXM4axvbNGuedestA54Zq6xSdWgn",
  "key3": "4yFy5SWyWbr94ZtQuMm7zRDXQog7NJgxejwGwH9U8b21fE1fkCearpxwXU7HufGn4HxMX4pE3Vu3fzAJfRrJVqio",
  "key4": "37Vz4DCAS6nemajiwHYrQpCmrvioeTaiEDuDKYYNEunZrnAFdvJ2R84UFzNNo1KxLGAjG1RyfiTUk2d5jJ7UUcJ4",
  "key5": "2pCntmdvfKzUfM1ePBjB718ynFuhupxgaG3ZxN1GqsWBMg1vEacjExbev3Tfs9m44qt7NbnyrNryDEgZb1TydpUB",
  "key6": "2zS4m3iXdefWuWi3EALeTM2juo6QyCJgoFdeTce2eNBAXubgEVUqBfhXQbY6y6fJHYrqQkQAApxxBLMsKJAeK3Yf",
  "key7": "2Y2XdqQNLY4iNHmpCfUymVv28wNERcgNZShy9gPHwuMkQUDUjYT93wpxijhqgu6DhtRweKTTremykY1eMAHouUTH",
  "key8": "34PLpj7CSDiyCJXDUNdJQ2m9wxfUSAV6LMWkmKha3k8GKyibXanYKbfuRfNAJutLQ21jzM7wMnZL9R4z6TUSKCSg",
  "key9": "3pMbrcdFA3bKMVsPEM5myH2bgUEudg9bkoSPD2iF11wgwu6e4CxQd5zNG8v4aFqPuFUjH62ZstFAoNBCpAHbyfbj",
  "key10": "4dJhwgAk12fJWhkFm4wDV8BhEyk135AY8js5tHeohfV9RaptoxbKmHgSdq9LbHQg77775H47X1jwqZh19azPK7B1",
  "key11": "24L9FaQRSoxy1D4pCXjBNLTFHcqm5ofKFycgjx2LhsxMo9amVvMDeByMw4A81Fw3hjkJdNMhP4hQHfeL26ZfPq1Q",
  "key12": "5QeApw6TeRK9phrdLKpgaoZov5D6dW4yGuM3sWaPtvyjrAdPLapeVZdtMrxJFHsp5tBscCcWS2RK43qNLuG4tQmz",
  "key13": "HAmVoszpJiqRQ8FifKwWoQabNjTR3NzGGGceExUFiZbi3sLN5Ddo1XK81G3DuzahKwAEK3Mchrd7kEu5jaLmMrD",
  "key14": "2wvQhVsYDsMq671yCmzQz5X8XQAMpHYDwGbnR2w13yo6eqhAinRbXiKKFi4DNmM1E3inqRrWSfZAGEFzNGM3QnPQ",
  "key15": "5N5mc8oUuMZdnduJic5Aq6XYumyReggoPxxZmDLCHtoE64tGhXYeCnZqKuVUnMvFupt6xE9HgM5p9TriBCbfhvhF",
  "key16": "4okVD1TJBvtWYyLAd2Kpuqch9EQtoaDH4rGwgj4BStfkgNLVb8VZ7T2muZDkQ9WMA56y587y76ST9tpK4auaEbmc",
  "key17": "37gzg3KwMLFng56R7FdzydyDaow6rDTxLqYmysNuu2FX6UsDNgCsQJPCxB52h7Zgu9J6hFuxs4iEcKgAEpWR8cas",
  "key18": "3u4nt8bH4BLGhRajE5SELX8n1s6SxXyWhHMZvQ3MnuMnoCMC37p16T1wW5sDTo8cmts78zojoubxVuXTkzTmqgdP",
  "key19": "4PoJvhBmpKX4YK6nDBxGjujagPojbHc3BSzJQJK1Bz83ZpdMLRUtZVLG5UzmouUZABnVUEHzTKcEAZxZU8N3E6TN",
  "key20": "2ircZa9g1kvdYKpfZhyYe9ZmrgTXzukELDtZo9nXSFeM8MEwWMqZoYdTxccyDTCGZXJ5LhZXz6N7PubWgYnBAaMh",
  "key21": "4p251468zCx12Sc8y7dm4YzaBBcjGueSkK6KfJjHudFi45Dj8hVWGXj23wSrc27Fdwz7BzAfohhZDDBYbxzCekq",
  "key22": "oYsp9GxfSX2JCe2uCDoGFtBYThsAJ6B8pG63HYPHdWGJ92QCGhZGBQofrC1Ungh1u7Ez9Sq6jm4woXu85YmfyZj",
  "key23": "2FixtMx3hpz7YiYAkSdqnJcgksi12AuxtErvSq6HzFCd57Zd7CzYBhnohWPpqAtoS4YqcntQVeVwqVHLpTrPS9fN",
  "key24": "2cR8NwCFyaFwFZqh5qX9hV9AHUMqwZTcuErVkEcUZAad6bWvLEJHxWw5BWRJJhz1EhSbCm5HSyNyfgjMqANff38S",
  "key25": "4oZnkZsRYKuwLrMb8DSZe3odZpHy1zSTAySyKSLN4fafQXuoZbXrPp2TcgvneUuVAcxVNK5WckKZjbjyiB4bRMfs",
  "key26": "5fNx3WkvpxC16yPZHBpUF3wa2QzRcKLBghiiKdkxVYu1cXjYz6KgDmhDLySCii7ihaDPSUcE7K8KLTi395Y2upG",
  "key27": "3erXYNDdbqcLKWxA7w1ZWG9AXLAZpFwcGNhmFeHSyZCjeUgP5jEM7ZcehxmckvNvdnoLRLK5ATK5BATRRgvRSUKe",
  "key28": "2iHUw9xyPi1q2vESeM9ATYXrBBAozC9RR4aFdMtGxjxvPGtwXUQ3ta3eH1S6hHcqRD67f289Vu9tq36LnCchPo4w",
  "key29": "4hPhJ1kF8UcdaG3TckFXJPzEjjCjyPkXKijabKUktsM1my4ghikfF6ckyNL96pHUh6gitnfLYS3RxZWchLwvUskm",
  "key30": "2mMfqGQEfh3MjRYbhTHYyqQCLpuCE1CtzkJS6VLNypS8T74qvnadwJQ95EtiVF4S7SgY4cq56htzEVCSDiFDm9c7",
  "key31": "n1vFZyGYCnzRNBuuvfQexQC8d7SpQEf92MSLs8JXPJDmqKTNbJMT77L7f2RgZYtSMksEzJ3ffBTU7iMDGMY7WWk",
  "key32": "iKhzRet8k1gwn49BSNA3gitQniYvFpKLPt7pK4iZoWKooBSvJhK9PiuYRNh59LCBqsm3DFZf7XzAPzgrbFfAQc5",
  "key33": "29kiFEFGorSxhEtGev7nYbdHFQdfGdHCrgdcenhnp7aNg1hRfL5jVrAs5RpbmK4JocbU8PSS18JaZCjJy5GBwpNJ",
  "key34": "5ZwNzqxJDK1XxmTpesg5icXNKL54dTt5iXnbnGBwgs5j26w8QmmdVkm163HenfMZuSNFt7iLo3PseMJ578vhW1we",
  "key35": "2jcsFwCnCpZhL6WjYoHr5r27b31mAicc9ZUSBnEG2LvGHkujBGxnPtqPuMqnVZquaLyymSAeaCGN33F32UNdeA5f",
  "key36": "4DYKjmGj3QdHEHQ5VfEtafLgeBTrAtCLrAtVfgRrnART6R62rT5UHFJzwo3mvAW42iR65qD5kdGkAoeQDj82zo1m",
  "key37": "SThRTL4Gk1HrTBg2i2SgCG9kuwGzmfddmzmD6ZpwKCjWFQyvgcUvCe77CZkVE9emn9SYMebUSdykj95uoEgCB9k",
  "key38": "3fhhPgBv3tJNofANXJhyv4vx59srqHjJ2fnX6FSCRTbQZ2xshE8VF4TNjyCGkqFEDdK8MDW7UnsSYfxAkuPLbr7z",
  "key39": "5Jw7XvT8589mh7LspqUSZ8a4W662xBr9Lv65rXniw5v7tqcXJfdc9j196cu3C3WmRdbY9sb3wsn4EKcjURAsq5K6",
  "key40": "2DyEtLhMogeBaH6og1p3kLspFufoa1VKkKNkcaoEMFFtahK9rkstaXBBJjKFBnSGux7sDBWGE9giD8QuvAYrK3bU",
  "key41": "3GeXe1TeLPQiibrFPbBK3QiNUuuU6yx44UGQSnqCz6SJQNhHZxxFuu73tGKEgjLLpYeeSYAKA3y7G89qytSFn2SE",
  "key42": "3HkwebvFFkibnsVZPqjHQmdgJs3TeAKeo9X9DuJb1cwwcUanWiJUyFFXCY8rqmctb9Y4BFiVhqDGFJ3QzA3gcQbq",
  "key43": "37to1xAKqT4JAEEdLAnP3cbsFwPo39eS1fs9fZFZc5XUVtpcunh6GwaBvhLKaQ7tyq3pjEprqgzYmu8TozDSAHmE",
  "key44": "4iBWgTdgMRLVo4FTFGHaK3BA5dJrthbP677xLA5AH4LCvb97YGTLTcHNf38sAVAJFQveVcwg6NscPgM1XYfoFS8Y",
  "key45": "2PQq3V25VaBNbZAZUH1pGkPcf2bfcAdbwzwJvBjcDFQefugPrZ255R5ra1coiJpWv1mQb2s1N1NmF8mZkrdtab1X",
  "key46": "2EPcEP9TYwrYxkUQut9BjfhfhdrDQeNRxEKSXNphob5YjQLpKXoA8agN49qZxD9qbxMup1B647DEGmcZSHSPqk8k",
  "key47": "44ed83ub8haTdqQ9dMoTCrg9pTn5NjXMg2Fvhvv1SsK6r5He39mrE6FCStKXerCT11QoPXgnCWQ9HFNqvZm7Xgfv"
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
