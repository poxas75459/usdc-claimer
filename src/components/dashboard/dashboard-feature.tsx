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
    "1XT4JqdMd7A5WXigqrD6WxXES2rBTJ9Xgv8KsNNa4q9WQLNeEiTRYinnWMPsnr4sdUWQJugzmWArdnQq1XjLP1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vLA786fH2iSqK3CFKbbW3VbTvLJPj4u1fRhWe29prZD5DtcZm8g6HXL2WYzfaAWv2WeW8FLMfZKWoXQ6vjXYAPR",
  "key1": "41TJob7AQT1A7kaGRZ2ipoPQ9ewC6fibv4efFzx4c8Nj7uKka8tdfS5fq5UYjU6zGkqbgfPNRFDCX42BbZzwDtop",
  "key2": "4YMp7rFVwyT29eFrovZPb7djrHLjAGJNgKMBouzxBtVEJ8UZLW84rTTBf94wp5RHqkbhBt2wa5A8cmyPWcgGXDXf",
  "key3": "33rTr5zGVFvQvQekXMGX6E2sDheQT4MZ1H6K6F8NRRM5J6nPpnQuqg8fdqRJCUztoP9kawq11N5MEg8Z6g2QbUmT",
  "key4": "LKkVmSUY5jJCE7bdBhmQLJjcVNVYvhkbP8VUSLGayFunLNCM6PXLaZzf6Qdrf85HMjroSJLEQgak1ZdRHp1PtN4",
  "key5": "56PNx2UNChRwpm5TAbWuUUJPLJDXUHSL6kNcgsDLwhgBEzrWoN1PR2StMtNiTSe65UksZ3iqAosLUyhGYXPzeVbC",
  "key6": "2Gou4d3kXicH8eXjZmMkVuDJ58UcZn3JhoRWj56CFYUtjpyHwYyxQTYXYbbmMr9LYz9XTZcFcGJbd3KBHbgSL3ck",
  "key7": "zknvsjzRkScizdi81kEhtkLu8BNnxFwdkxengTbRrk2UBcdFANm1VdzgL7p6XPLXf1rq9N3933XftJwL9AsYRE6",
  "key8": "2Bea4c7A47rAMTAKnVmfnXGCQdqcBWYj6UXu9DdmaaUDU1oSeDMmjizdQxwqzdsTunVzei5tp7CwRFQ9cJBhcgi1",
  "key9": "gBDHtNtQ6fGVreJEpLsMsfFNqQQduT7XBTL8nymd8qRk4dA49U512JHhpuG6p1TNGAB3eEdfbqnoivjCTjviac3",
  "key10": "6eHuctGkYr3P7QzgYbFtVrZvjmpngaiitxFf7abvR41BnFet45drfX1qzEGvWWDSL3FFKQ6XrZBapLVNQ9VsiHf",
  "key11": "4pq2RueDJrNriS6ZMMLFZNfF75M2poKKE7tn6tVey8mgEGtXpurnJRHjY4MVBsWuJ6e6G2JKBmmaeiyRH6EqAzjk",
  "key12": "2ZPzGzpmRyagW3axjTu2qCZZruuc39efBxtiPJEsp7SeGsiJeKn6miMejnxXs6FfbbEVAjXeMhxbFi28US1Fswwb",
  "key13": "5wPApCUp3H3wLpnLM8VrqS81ekTfqYCbCZNNxUwn8nMronbtthmQPczsaCyaVfveHqBcdz93iHa5MknC2UfJUnT5",
  "key14": "4qDU85BydxxaogRGARNxn48xkzdtobmXsEiUdB8mS5ZGfP2Wt3BzVfoBPESrEMAaJFZau4FBnFvX3a6L2YYPQ6TK",
  "key15": "4cmL9tHD7gpReHGdR3Q8PWzR3odBcPcDzvuvhjNngvLM9oc5MVEnMsvXLrc4ibjifshps9QhnDfchu3RivNEM2Gk",
  "key16": "4EhucKAer76EcreWhEa2PLk6bjcv8UCezi5HEj3P8md6FmWYrZHGKMDqMopjn5M71hMSZ3CKX3qriQVgWeB6uLs2",
  "key17": "3Ww2jvvvM5Z5MFayYBZZ69yf4mJNCzWUQr49ut42ufxEWTZx3Geqq7UgQ3Ta2cjqgEyuCLxQnFdQVePTonQ3fFxz",
  "key18": "qhX26AoSU7Nb87dbEUrzzWSdTrfSDsuC5WJbABcLK5vyYr5v6PcQK8JNNGEqAhsy1qpgRW1vfwe7JLfa1n36Rse",
  "key19": "47tUnUvw7rfatHZQtsfVZ4iNgStrduWmCREmi2Wfru23dn7mXYwRPsBatLxnEPtwVowRoLNvVCgzmi2mGaVAMkJX",
  "key20": "3NqM7hGk8hRQm5tYeqqi7x59eYg9Jdh4ukD3XMonb6KQUoi4ZT8qqBSzMmh1DaRa89KecuuYuL5cPuyP1vzqZsw5",
  "key21": "3nWq1YdUGQRDwz7GHoFnhxBk1HctPzwPeUUMGa1hSpzrUR2fpapXmy3wiT2Er1wza6vEQ81V7HE1AnrNxsLacLNk",
  "key22": "jwrbtnri7Jem3ZccDyNuNUZ1dEEBLaRizSVG73WtpWget4ZUCkjq6ivieuj2uFNMwG7S75QjDsifbywPxybKDWL",
  "key23": "8M92veXRMv469DNw3xXj8jmP2HdBCaTEKpLpC157K8SqoKsR6sHW8sTzVTg3L2Gzfo8HGGDy9dNrQwV2B6FxJoU",
  "key24": "5DAnhpHs52xo3c9h4dFLfm2GfHwxC37j5QYTmsBgDzJBAWPWtDbasBEo5KBm7aUTptkLVybTtLu8YPohHJBLwgHV",
  "key25": "4cXWzzbXXrr81yqY9DVGda1hzzKhwFAXVJYRwDDCuxUdudDuJcACFuuu522jG212fAxyKe31Gqvf3KSrGnjZ8MR1",
  "key26": "3qJGQzw4JsdpEfYYo1HfAzK8eaqSjxxmoEjzNRXRC8n7RqGGBRvhfHCEkQy533aKyeANiaQfshzp5uxz3vtQseWa",
  "key27": "3jRVfuspvzmQBqUUz6A3zYEsjzyxxumWo5fKhQffsBuHzcMjed2rTHF5vhipXd55xJqJbcHmGULMiGUUL4XHfUFi",
  "key28": "32isYAhE8KCPRvwy7nKd4J4BVHyV9yaDXawz9xF6v2nNvRuAJVv3aYjgYT19upcQLb5Yb2f75v4hbLnKb4aRc4DJ",
  "key29": "2FdW5m26bz3GneipogjUxg1Ebun1BdbBFgQZnH5mofDSrSo6qEz57uS33Q2u7KiEMMUxrJhEHNzV11VGLzziML2",
  "key30": "nGXwNiqMXEssKXPxqWMMS6cE8iMyTJVMNA4qihDwVr7XTCJMYo5877H12yZYqHbYq6BXHpaEfN3hXvtMu3BCbtL",
  "key31": "61cMWosu3xCNoQ577EJibm2nttd5ZD99kVF2Nj9dw7eMQx5BUW1v8h3cvkQCkNH8jF9mjN6kGC6MTkiFZ5x1BAuj",
  "key32": "4dc4d8cLuJ6NBuUZHJD6WbRaUsNfzB2aApqhDQ1nX69WfxeM4f3DvUxR2VVQB9QYBqmXFSbLYP4w2gDP4X1sAgPL",
  "key33": "63hszRdgWdcvKw8YZZcunfMPP3ezeFGaAz2iPENhBkq4waFt1eZ8fwSovN5mpDoQw2AzvaYHUMA1gadZtaTQrW9q",
  "key34": "3dW12a2wXmJgM6L3LBrfwiRh8GnZyxJsBTfitUdntBeWtXAEyKQAr7T1MuA3AZUvkBm7cwLBGyBNZ3GrtBE5HqJY",
  "key35": "4QrFfdupKEpz39myaaGfSdo9igMQiJQMHkytPFjjFU1tvbELKhEKn5uiai1enQ3mfz66c4jrsALH96F8ZacujVqc",
  "key36": "3BAoPMku1u15ZvxCRDncUKQmU4MtMM332JeefTKYChikngP6q81H9gUVxj51xreMAixu5aFuQc4jk6Q4hpVwGPTW",
  "key37": "3buviP1M2FLCPJg4eSy7gNcwnc1zoaVHUWRc42M9NpWBTnQ5R8nQXjh1fFLV2RLBU8oiqbXASVvTLQpNpL1kEfL8",
  "key38": "jxqAzG1wjEWUCoAAvkWtZpj5GedeThU6HyB1Vi2MRGD9UuU8gQDCMagk3WtPzrReW1hwAN9p9zMZz97EoaSv2GN",
  "key39": "PxfLP4yXhjhxjJqcrZSp4bG8BG2UiZjwyHvhsYvcEAd8iomeQcxr2wXQuBr2xEmLMYXTr2bJdjyGP9PPujLzC89",
  "key40": "3owXihFMNBjPXvjPLQqMqD8QHMgbygRcobbpKNPGRBprNQ5ywHyGkS55497AHiSWsLy46mWadhQTE9rsRNCVYZyZ",
  "key41": "2KTPpCsMkPQWYFNqPTzhmEdiUAPoh1oLwGSBvqCqymy8NuMcoH928kiqhoxMXVkoQuMNovh2mz97Sgd37nCrBLJ4",
  "key42": "5Zz2fte46nxuyuCEtSfYxJJH4RZYvGXeGA2i2t18WCoiT8JiuNjoboKnrX58eB1yG9WVKNBVy5tnSSJBiyq2Y9aZ",
  "key43": "2xCirycQJn8VMxjHPemUaeSUk8AdHGt9H9Tk7etND4VtDWg5C3QZNe2djZxWUyLPVEEohBg6gXoPYSJhXixfJ4CD",
  "key44": "5DFUSs9fFnSZWamFNNm6V71gz55f4c2SouJPz6riZMwdgf76oVH5pGzLLV6dLSfifcSSvm9jnj2jjYXKiQ9kEXJZ",
  "key45": "5VtbuCfU7TZwGP7pKC5yXg4EpwvjakccfimV2sfjyuZ2uABXM1sFrhJsQGwaua5VBsSPFov7ZNQpRtZJoqWhk6BV",
  "key46": "3F8vuZr21YNb9uAirvwxJCLMemZL441CjBwa1G3taoY1tQPVzQPGx2JEwNfV8trvpKpWQASuRxZBUtq1c7AGE9Yh",
  "key47": "2ZyyNrTpp7SdTDJN2CRmeTergFniGbo2mRGfbuw21KMY6BKFFSZpKMBPrat4zBSHzTgcAUbndbaeYvWsbMzbpWxh",
  "key48": "2zJ8UnBnLC6s22sbiNjHWTDVvu7x6cLDmX79e3TD5yiZ63hcwUGHmcKAn5vXMy1a3Zsjkj8HJoxwYXyXoXbxz5WG"
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
