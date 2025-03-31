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
    "JzqyJDjVo12AgcC31ZppBTbMgfi2mB86wSA9pd2u8spoUHSy4YQNbpNtFiH4CPbMhDtmiY2w4faRtgWLvkatxWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kJKUb1tN5xdZyDFzfgXu8xsBdxqWHSdvTbDUPuPg6V6ApdpeJvRx2Vadf1rxX42HqrsFYAM5PkHseNfx5fu3uX",
  "key1": "22yQZ6kKyNYaPmSxb4S1hoJfAzP4sZ6hyf2296EXvk6rE8wj4L27Zk9AnzuMGtjZP3V17SEArGdzvFu1q2bS3XPA",
  "key2": "4te3GTkjisasAivTKBuhTHKJ7FWRHHHNki9MUyLXpbX3PsBp7S8Cvv1FAmZwNKeiH6zZTvpZxUtbX4tRWHBhiahw",
  "key3": "4pUiWEDVAEwGWbbBKoCKiGfD3mpBezdmQqccXgpEKWyFdXMZKxek6v8xHBsSpp3obxdLAKfTKgzAnWytjwRLupNU",
  "key4": "2B5bcSQN6aof6absurQeZ2Fc457aygTRRWQaXU7LzooQdAwRJ7LG82ofFkPBRWe4aKZ573WXHjF9HCXSZH4jAxN4",
  "key5": "4woS78VwjPSfifciLRynbrsJskwjSpsT6erMMiGm5QQVtMnta6JsrKKuqsitWZpBnGsK6q7XuLzpcvhwRpS5zePe",
  "key6": "5MjPt861b6cVwAyFVt6aU8TnrkrnUQpqoWXsrMbxwH5hHyWY5NJFtE1xKxkAwXFUewPCuM1GKs1Vw8tuFf1fCPfr",
  "key7": "5Cy1xJu7266ywr3RJtAzwsrt6BBc6P3nnjpLrKKP48AmfjR62eojsWiA8vvyq1nR4HKLa5fV8DmhBPc81tpHJ7eA",
  "key8": "R17my2V9YqBQDBZgNzif1tJCp9YDDsQoQanNjmfL6thFje8EhcuhNTsEyDqR12ttHBfteEKi32ey8vBiivw1TUw",
  "key9": "5mswF2d8uVeRtSGbUBCstmStyuBuLGDtQyvZoiTyJwdJ5JDjfZCb7gxruSa9fgDc85k4zxZfzYrp2E6VvHYD2AtL",
  "key10": "2RfFgz3CZJ5cprhQr5gQXwmjMPM7NyRhj6YySo5bLcAU1i9J8x9vCjZ2nyJsCP6MmVQrH4Y25ohnebqc72Zav9Rw",
  "key11": "4Y471c17qDiB21uB2XqUAst7JfHMDdujdcQ2NQJwgM3bW5PdnjRtAP63vBwtJiH6ya187TBrTWAbP552eQhV6F8L",
  "key12": "GyAx61a5VWrWoocNrYaxwwi5RHHY4aSn6EqLsH8QajiHubUp34TjqG9xeoAv26uiQrivpnxkz2K9JMu9xmbtp1B",
  "key13": "tij1QKR99ZQKXAK9XHGXpMm3U3ZNgoDTH1JM8dMZjVzPPsfgZHFoeDkU8A7VLYzrT5wLbzne1uMqLS6qwZoX2mv",
  "key14": "4SXtawyLL6byFALNLyVpmaEx1iVkskZ9UwnHfe9SaB2T18AAyaSo8agaNKBu4yyj52KbQyT6dyXB1uRktJfmnAZo",
  "key15": "5vodACNacDwyJJtYpEiL5fGAAMJfiaemeBejJ9KubMktMAZUhoaH21dZr9Wz3sg8sY3hARbbfU3jLwaNxHoKC28R",
  "key16": "5srf9oX6sGgyYTjGhexErPJFYM2y6RrhtbpcsyW7btWLeXu8eCEENBV7FtMfvqn9rGxciF1uSRbPpabiLNGhUbYy",
  "key17": "2iapGSodLqf7vcBHaRkMCy3kMWGaVCUhivesoxQuGa3SoYf4k4byJfRH7p9RQcg2phnPUQR1Pck6CYdvmfjaF7Bb",
  "key18": "3bZnR7yym1mDBX66DdYL48FahLS6qZ3Kk9EP2vri832auZKusGsFCxBFdMzC8wa9ehtNm8SZ37XMxSUiyQ3JuGiq",
  "key19": "3PzgZeTwUFoi94bwk99dAv8SYDhqAPtVBdaR9QLVzAcC7vazEXstpGBFDY6Nu3uCA6vqq5zTFn4R9s6p4CDfJ18X",
  "key20": "KAY4LqdaMeY7JUsHG6c71KR8de3Mi1Ve2oojhKqpCygpHTy5STMVgZxkXHi2MwUTPW8tRGFSR7esBXX4KM48eDn",
  "key21": "4Px5ZiG9rZszozVzftxC5W51mxRnMPkewxz8YuieLcVAZUKo8syJ3vexc9Sx4Ce6QiU58eUC2sn8vj5ktHRDzzy",
  "key22": "5tMFNyjGJ5BdedsmJdDGitj7FUdbCc4PKEATDENEAnMmfeXbrwLN3WLvi5iu9xgdX7CqqYGJcv3ckThBBPpD96To",
  "key23": "2XyNg6s3kTqUg4wsUsohuJE2DB9hKWduP96Yvpsve8XHeRQDSssKfyzWpKX5k9jKXMSTwFaE7x8VKtTmTho6jeHW",
  "key24": "3yjecmsMjDYWDbXUATD4HY7hdYZPj6mYkYaNN6gaEBEGp3agiFYsxbc8Kic2UarAdiGV2T8ViV7rswSi14ciDYLW",
  "key25": "2Ze1CRcPudV1LdFxeeeWzqrjSSdmjim69Qwf62oYixksvgWDr9LfR4RzLEsCq8TMGSUU5TxyLDbDVgDZAckQiiJ5",
  "key26": "3WKTqKjb5VWkCUwpPMvc1v6h4rE8ZSPw175TWwtfyiZh8m3mkUiJzRDNUJoutDLdHK3232dWtAzx2sXWjTEumvF4",
  "key27": "3irkdwAgbHpu2hugY3VuHv6HM3MxPTUkbBZ1UuQz9aaahuw7E3Cokc9t7mr76nf52SKWD8ZPmSEL6v6KP4Re7Ckd",
  "key28": "3hvszk2tu9Vd2zUNzqYx4E2AcpwBVHLtZKx2RpqjNdQHmmWqhjCprLXzPKEJt97nc9fh5XVAtUxFza4MZHiH9DSE",
  "key29": "34dZg3A51tvck1depzv1AxC9F1qr8UaNLPfKKtSN9bmrKj6wiXHGvRHLndU4NTBkZitiXr6tLJCfZmipPv6LVPCz",
  "key30": "5pvk5JzdzhdQVtzF1bUXTLFCiUV7aRJ9Zgg6z4wnm6gWQtaM4TD88qbwoWgq8r6sM7MNeUTCkAxRqaxh4kwT2WoG",
  "key31": "65ZnpMjz6CjZXsF1gZdYZ9w22PJYaEtgXVsow54Kjxp7JS3pBnVTa7HJXcLhUqUzZvTP8SRidtWbWa9Lj3LNyJQH",
  "key32": "EbDWWjw9pFnYozTzKkHmm3XLNRNN3uJVQ3jdxE2KL4GZtSt7gPfBzJJSgkEEbTFjE4Ry8MifJKa8tHoFKaEFwfq",
  "key33": "3z8zUp8FfKwwP3nMdKkUyLWPfA4cPUhFUfHVRQC6F1Tbv6mkyMRnjvYgpxZThDjX3t87dHRRK9H7pj5FZw5tjksW"
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
