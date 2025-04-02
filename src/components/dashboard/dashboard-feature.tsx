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
    "2RiK3ak3y5imiNQKwsbyUGQvJvZ5v9rr5B9KV8vNDDfZrhhGjB4F4ZQ1r8vrhshe4RfGGWGv2idbKEXoDeCDhBg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SDB3WL1jFn4NKLJT9EZL8pZTb4Fc9HCJqm5vt66Bs8MK4v1Th3dynDLS1wzSHVtqn98v4XdhVuEXbRCi53p4r2z",
  "key1": "3WigbJPp56snEhdJYunM8kGqmJEKRvLYgfa7xtK4cJxWrpuS8Sty84Sx2N2cG4xf24wGpZM9P4AcirL1AdzZtoxM",
  "key2": "4BAFuNHJd7Y7EBXoXMbMML6KVbtM67jmAuwsAXcUU3vfjJfgPvrcpixvBmTVuXw4coV8y6LWqrhrQHhHVV9bkV7d",
  "key3": "5DFrD5oFj6shdFgHS74S9gyuxNj1ABeXnNWeaPtFdQPQ9RaUr3YpmeByPjaWdKshHVs3jLEFcyV16moM2ZVV6Jf2",
  "key4": "4z7FRrdHtyqSFKkDxnTdrcjSEy6azJeP7CMhtCXw47sQczQHMoLAzg6sRxKf4L3N4VdAUER2rYipyxMxZd4ZgNBj",
  "key5": "3UubbxcPtHrBYbgGCDHPcvB1BhZm5fS9VgxeSbovtYfMo9baAnLY3RsUTPEYiVZjWsTCadSY1rHY3HFe1HLdfXdQ",
  "key6": "2NcerBikA9x3qYMvagu7BUsVVXZnFJ4AZUZB31p26wgLHeMixKJt6LPsDSjJvyyNqxdN5ibd7voNwPzuJzeDFGdE",
  "key7": "52NKNkvvPNWoehSeVinz96sp1TSiF9k7bgMMHihMLEPry3besGVrfPWVzmSiruHviEjnSSt9SucLHVY2Qwn6rrS5",
  "key8": "edafwWk5AtacwKqLdgM6XLByyaq79zqiAgd1mhpH7m3HJuxH5QMifycRdBsJhT9WoTnwDMjZiW3QYJ5AajVGw7q",
  "key9": "4RWHGqH1WweAKrmxjka8pmFudzMbaCHtEPdJoUKhC9JoKhAnBZu7TGZ7nYWto2ed1VmqEbpDXkM5P5cDwsAFQ4p1",
  "key10": "3ADcdMWCgZ63XpLp9mHedpnStd35FM6EbvsVSpLNxxRHhcBmgtv241s3nXn8BozcdjMg7YjaLHKM7XeTHpU39HQ1",
  "key11": "2Gn51vHP54B6CEakQg3Hv5DkdWRKNwC1apc1MT3HE7J65Bpu4Ay24YJojrSLJdRV5bUAUQk3D5kPsiieU9pUENUn",
  "key12": "5xkN335wBLDiaqDge3ForXyVDKNsPGZY2QFnHVcT4phyu26kFBTyhf1D6QtzTj51xHVgn7uS6tZxrW6MP9Kv8FJW",
  "key13": "1b6AemffRwhsxUoGugeLdhkiJNw35fbN4feNrADTQ7ngs4NXPxpovCCFdbvXiEuDu9g8Tq7BeabauqghxmmoCxP",
  "key14": "3hi3VFJZpX1zuyk351soUZ4chEdkpS6N6J6dzuJRRupgrYJWAUH6EHaqnHenTfuLP4W7c49aShanvXeYZWco5UvF",
  "key15": "2ysMzJEy5rhd1bexhrzHGMWbvzaqym5snxF4d2QMN524UmE6ksEYyDReirifS3ZbqKznhzyr9X4gYHNsRxqgpUEx",
  "key16": "456gixJL23y61VVkAFt475rCprKZTsEjV6pfytJ1cSFqo9P2bdr7YDA9ZXCWUzsrsVB9MLWctGubfbXQPPiwzRFN",
  "key17": "3K95o5N2nostqpdrPsjYPPHAVJs7YnieK9PY3tHU2ArnYCEb93tifHaaxY7m1Faicd514JWqeMjiYvQ3JDXQ3ZYU",
  "key18": "5vLWgmBsgKd7DAN6aarqM7cSw4MhMeH84JKFEvf1VKoAWMfroZWSwMF3mGJmBTG5Av92GyddNGqHLE6eCtTGMzLe",
  "key19": "BNfZUR7NCiy51L7Qh5611Zkg1rg7QZEbh5dvyHpDc6Uc2WwzZdNPoxoedNNioRjUgByCpvC3Nh3kABzRSQCCGAS",
  "key20": "2mX1Xpuc6UPWADgqfFn1SZ7oMmistpNCYtG1v9QYFquSrDkEbBBcd6RyCxVkctVenpAvGLNZS45ndg8sP9pr75AM",
  "key21": "5AkYAa5EW42s32ocL2AdMG297wXjLNP6qyXro4bNbpJDR8RSguwtjmQZiGxRTCkCaLstJcW55U9Yq7RGovonr3ur",
  "key22": "2xYDm2MohdGQmbgzrJs55P4J1xtLEDkryJNsgGWZfWcsHEWmnkp28CwHCeqZpSYDmX2e1udZ8drn968FfFHF7DoN",
  "key23": "3rjaS5djPujDUPJX5BAmpcvgMR9qqWiWVPhx1LxzKMoLWWQiZLMogaQVaiLkGuM9pgyfzJydQCKJjvjVDAnQKMqd",
  "key24": "3tTECtAs1DP6E1V1MhbwrWAmH2YXQY7kvabjkJpTygQt612jADiBajZ172ibDfHPm5aNLMfv3x16vSXxD5jPyBWR",
  "key25": "2GgBWZFaYgAzcjbwz1UVJdMVyJ7emj95VnXTn1yScjk4Us6deQZAM1L5BumGJ4c8h7gc8Pwy7BkimNP4CnogiUGd",
  "key26": "5sn7LQA27mhasPfw2GjUeTQ5qTgVTk4JseGHs8PYHYnmmza3S2CtBUrPrSo4mtHmSTGs6xUrNJrgwRQQFjdQzJEK",
  "key27": "5nKDjtKFLPVgNYzBxbaNSEqk1AzaP79wiLHEuANY24ksPzkP5Ck1trNRNWgazBi6wSzR6ParsnhDcL8HgkxV3RDn",
  "key28": "3fnvEY2QRL1LoKtcHWHghPtjmncsy3DeeCMoGtDSJiKWpHHc4A9WBWboZmV16HtywTQbVZnGKdbFqpsUPSHVhQhB",
  "key29": "2VPGb97kGddEQeN1MQsvBE2qcmBdcZUVDFcnz5KEzw4fyvqygs16MyKHCx2nmFW66YK32EzddjN1G2msJoBrNJNx",
  "key30": "4qzsATHbCMPKxuyeJZqaoQBhTjXcr2FpntChsbCTWsp5vywN5WNvGrmin9S5o9t6hcVUkQ5pe4KsxpNcoHgpBkNv",
  "key31": "4c9VMkeEJAyTyRvawKjtBL8pmp9oYy3q9L4vG3kWT9DbdL8LRU6hpqxy7Y29Cbc6KM2SSUE2cThYjg4Sp1Epsxfq",
  "key32": "2EXyTmpCjsyHnKuE6HYQKh7kuxqmMnWcTgpravBSuz252vPjtxB8amUyY9s72Prg39raAt2g8zwxosW5eWkyf1nF",
  "key33": "sR5wu1JNLGwy5sJPaXHa4S1VPEirNS2FZZSbDAFtebd9vFLeTVdaLbXRu4M5iX4L4UJhcSsxewPUYzcWESBnUtP",
  "key34": "38aZoK26S6tDKrXyFZiHMVeo2MRmZCz1YBzGcDpbL63xLo7EoCfzWYKsh9oY1xQjwhebUjfMWNXqqUudEBo91F14",
  "key35": "2kStepFgQukHEB1Ck8UCz49xgycg3WhWrucn8ixcL3dPdfzyDob6UfDMErBoi5TAJ55hFXmkMUoizfXB4WXuL93u",
  "key36": "4Ts2rT4JXGqWeEmeXTmDJx4AcTRRsUrwK56y8Kee5mxUeeGfmxvX6MFBMGoGP1oXLPaATk1M6e9a4iicvjc2pAt5",
  "key37": "3Vkckd3TvpZvmoZ4X2ePf2ZAXjfRAwK8E4zDizY4abce2Ws9Ne5r74GSDYqwL1bZ7zPzXsT6bPKeG4nMfjWo28B2",
  "key38": "xUrJjdz6tF9WGd2ZYKK21EofLr8yYWB2jXRsJqHy8pp4PUqhDxso3VvAJb5LqN3kk8MTvX4squAa3QruUe6crxn",
  "key39": "5fvXL8xmRvEjw5eBUiK84sjVW3m4fzTwbPwpbk4Xya9s58fwd7EeMFF85VE88MdG3ph84CmTDfkQhJNg7S5kwpqX",
  "key40": "2EXfqY2vhDcUkA7uKS5KPoBWxBMLX5KKkCpffdsVhHrSWrbr3k9fkhKWpxJtSXTgM7hSspki3qd4TVCDVXMmzhmk",
  "key41": "2qg6jUK1x7aNpiThFS1FxDWEGBsX9itHq6kiB4Zc7bab3nhPD5PtSKhp6MbKGyZRBaDBgxQXGxZDdwx257DxoTHz",
  "key42": "5F1S4eT5gooWAxVMrr9iTsEWA3XRzT37D1rX7sshd8vuEy1srnn8EEBQogx2hcfa6sawrNBXKuQrBXLWsBr7HJxL",
  "key43": "2cGYmgu2exxb5zYuFVE7jmgXzxpqAi8CYbGscB336X3y69uUKYTEUM986FYiWfcVELRR66JsprHm8jSgK9ndJh17"
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
