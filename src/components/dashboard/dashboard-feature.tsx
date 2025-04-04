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
    "27ysGeFT1EydtbTzLhTM7rkj4RGWtHhTnvVCawAPVcti7cZp5u6PPSRHCgurvfrgW4VsK6cNrp1uBsAr8pe8ZHxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duJD1yeVWCS6fQBUwff2a4hHX1Pdpa34iWC4Pc5kCqKFF2XBQgrQvkMGc1DDSqECHusrkXbNXYdKmFZpHVBQb5E",
  "key1": "42EHUjTakgxvuH9TKCteTvVvu3xQHXyqsWD4ipuCkehmTQXukCN8KvPrf66TNLbfY36ijgrnDZR1kpjVRC5h9Adq",
  "key2": "2aU6c1L75N4nA1bG5XD9hdUvmQdfGm94nE6PKp77VMyrndVTMfeQYNmZrbYaF8RTp7vCLGNZNCcCcRMSqRyk2QNZ",
  "key3": "63RzKY54WQFrSza23ypZxjTYhSoehdZ2k35n8huwoChTXxPczEAcco2XgQ457GN35dN7VJEaWdiSDNxmmqr9X1c2",
  "key4": "2FbvMtBdWmuVSB2rL3hspJECX3LY9M4RMDRnNMYujEPoMx2g6uJWJfXFMb5gFwf6JkVWf5SC8aRTkWLekogS4H7T",
  "key5": "2KyAu1NBCarYMfs1Sa45gFzRCtHsG73PZzCn6jkx1vCtixG8p7ZHRoNE4LjZCk1zit9pQRErCNhekVRJuAwhgzNL",
  "key6": "57XRvg3gMPPFEL92cLnqxdb7HFcxPb4W4cX9ybMGxwHo8hTxRnuGD72P3L3BZieoe7FNtYVPhpajWKD2eTexEUXM",
  "key7": "25wofMV73aQtj7C8DtXXong7MgshuyDMogRU4xZ1xQ1DU348oRpZFkCwpEyhKVespR9pFesh1Nv8xeCxEawGbw1T",
  "key8": "4UFFQF76xj2jwaRKo3RHFzbcgvyq7BsRmVUneDdniaTktBvLBoJxTursgKPDgLe6FfF3D5qnJgkJiPJdBGpsW2bE",
  "key9": "5XWKJiSKMpdiPuZ42GLD4ayq9ipDs3Z9cFPVsMhnCGAm4Jk1e9EGDXtp3so72vrXMuAb5kJKMEg2baV847SJx17G",
  "key10": "63yVLWkWKMW6J1ajoG1MrmgyjSM4zna3Sr7EQwnSFqftPQpCHsiZBT9dyUmxCVWhuZyfRFxsT5tcNAV7uKMwy43P",
  "key11": "2xJAkBCxAFmaJnaLG1LcAd8psSqaxXCoahBM97WXvNuswaf7wGxSZrkzjcjZN628BxXHsydryMa7dk43ADyAQ9ms",
  "key12": "64XoTcv468Ymm3Qij1pe4KL3TrjExKTVSV3hsoehvcVkVbDWAaZx3uEa9PnANMm1xaC4bPJhhQvcV6Zi16YZiaNq",
  "key13": "3MaNfqbEAegcJEcsGsZJoZpvEUrttGS71ex77c6XGKc1M82f6abHJUCUSSp7aPCpaRVcpSca5ZAvPyfsPBbc8Ydq",
  "key14": "5NhpxQRuPPtscgdkKeY7MDZznb22EaTapZtsDU4mt2JrwBEiKKnSoch6hvcM3Gk5iKofnk1jBte8CKMtHzNe6KeR",
  "key15": "3bbEbmHZmDsJwJpgV6MC8ATQX8GDs3ZhdZKU1HGEAgjXmFBjabLgA6VwEGDVAnERpj8sqmmUqQxJUsaJtMBLKVYF",
  "key16": "MutA9jrY8RcsWV4EBps6E7NaW81uWBdQhg8xH81bxzxcmH3nDhibxGcd1usNcH2EUqMANuALqSHuWqWqtDY2Pjc",
  "key17": "3jm7nRjFbtYoPJnTqDBAK1meL8j5x2hYjodP93bxANCpdRzhD6G5giNbGgS3Q8kgZdn8CmhdevYrx9FrFiu6iDXC",
  "key18": "2ceVTqt89o2ro1Ew1ZR5qQp8DxAvoc5qZ6vyQwQv8J83Bc7tysf7zpNtcfBavyDhUsWirPHqzUaqKVQRzNfKi6bc",
  "key19": "4QkQNxagHibYRgNdox2EYacoiFsYxo1uU81RiWYY66dhehqZE1kvxf48Bci8nfdxcuE4ZKiYypQCLdj51FjEmWyE",
  "key20": "8JQDXzyLGwfMWBiUwATvak6oCpGfeJPL36rYZgAidVunDjcypD8Kjg3FDvJSTtYfP2MRwMfNKiPMdJhzdD828R6",
  "key21": "3GiZLAks1sgZNZK7yBtJpSTQytFM4UWWFyr7PgmrwafhhP4znpYpbFteV4nPaQMkdm4torVxwMNYuyURrheEEm7F",
  "key22": "yfMVqBC5b8MNNSe1tjuFiw1zWFMyJCpTzVfcD9CYRsmqRQ8UBcarSTwPJhd8J8fH7tyWPjt38mQtSCuLsJVaDcH",
  "key23": "66hFeBNUCkwuoZ8ui3fgwsHMCCL2SeaP5K5Q17q3Wtv7m1DHH8XTFMxufsPsP2u1s2iLJEeLtmAoCzdnQjMNW1GM",
  "key24": "63aGj4gWyCfLqDQ3EwkQaeJmiP2Wovf3XwNtobj6eVhnb9L8rx234TYht4bbBQJhM5nmkZ268wNDgvyXFuG8u4sx",
  "key25": "4XWBhj3rpEW4teb7S4PKdd91XYcTYnwRyhoD8Qn21EifoZb63gRsiU8NcNrTKVs8uyDJt1zb291xuGzzRfbw1Tnj",
  "key26": "3FgXgaic3ok4NqKFzNoV7afzrZnUBAuPLwjfEHCAUPFyRKnPKej1HD5FtKyMnc3AcXqAbQmKyfoS4xR8vy5Touip",
  "key27": "4nAfzyEbx2Rfuc2CUuey3s7hid4bxzk4Fne6cBqdGcko8xCLVztd3FG25jMYJYJFnEvvSKufhFGNumuaVryUC3xq",
  "key28": "5mZJAsFf79UPYxagt3ZGpkCYv3R2Btg7rErFJnNDyEb37wsHSDEPXjXQJYD4EoTDARA5Yt3vqvJuyDPXR2X1Y7Mf",
  "key29": "xLdrzJ7bgtevqaPJB7A1Fdqgk1xcGqWGRYzYXU5jTB9xyoY82RZs73Zbp7FWjr8PU7SGSvzLwx6pkfVhEiVnFuy",
  "key30": "MPYeUgP3y767ZayeKiRgaRmdXFNfMBN9CvpJrVzoKXiNGXFf1aXCTKhS6BpynA1FECam2feJL586W82X9t8WBsz",
  "key31": "42GVBQdXvHneD3j1iMpG3LLGERYQ8srkuFepLQkx43B9PHwz9NgdZUXzsKRaevH6AihpJf8cQ2UGYYTNgpikJVCJ",
  "key32": "37pPTLRYs9kUEJZVtXyVAg7VkuK3NKo8hSoa9iCcuiufRVgeUtkN6ToXvfKTFdVXPRnZFWsAYsho9ZEPbtGa7u1b",
  "key33": "2QmW7CEurkM3rDqZqpDRnYbEmPMbSC3eeATUd6sJYZZtKkYGoLEhvAViTht3xU5mCd8qNZJw5iLdDmcXsK7AWvuD",
  "key34": "2s5oj7QeGrFcrfiLstvPTnFsWwvsoGmLB3MpTwgbv9Kn9kWPT3YNHkVQSw4FzNb1H1QyCHuPHD2eAjVf33XpgNjp",
  "key35": "2NSFp4pusjDaaZu9xLsRc4vs2J1bLW7MzRYFZKLM6nfLt5M87Gew1iTvqAV3qkDi24SaBuRBCXQn4hEc6dLjSYDx",
  "key36": "27zpAiSDMwUWV1gGzMzDz222D6AdwaaoVpsLKK2BPondJH8gZSknbbHHLZdX7TuFZCwvoXPB8umZjf7YtSPxHFjW",
  "key37": "3K7zbLGR7AdbybVGY2o7XAWA2SUjXYtjxirQBPwwm24f3WZJK2M8d5Qq8U6KtLsBL5mCDGUsGp2QSranbtaN8vET",
  "key38": "2RnPganU14j1wiq4i5sTQHSr4aV5e5r5mwfjcCHaN7AJmW9crxbAFGibneRFbJjV7wwuGNchS6AyMHQUCevk1r3S",
  "key39": "2jz9HYKvbrKvuCfs7kTAjSxEYLhUwXhfx2s5kjid4Mt7sJyjEmTE4k5Td8g8VNQMxBZWwsW5do8pizeQiRiYCr2y",
  "key40": "4n9azFCVwtJ57PTvAgVUZYAFHWpdRTAEEu71mF9xhZPXonU2X63yieZfngxhbZNQ1xeFCaFhaBhPnQ7BVLbmrqBj",
  "key41": "4m4dysbpMHSgxkJXPnkn6PcKLNUonXL8GfCrhX4prE3ZkKwoHzeSDqsx8RzH8amWVHaE8e7XjZdgJhbS5NuvGfKY",
  "key42": "634bvyW5h8rtV2RvMtAD6DpsGgBJBwYWp8ANPyuwLUrtPoG7UnApHUMb2u9oh3WxUNNWKKLoGEhuc8d74Qsqnhvh",
  "key43": "4shfnDx2EatBKCRWK6YA9wSzMCvDkiowaYNcATrffgUN7sFTvzkVEc3qeHwr7rx5yor4Tc8y79t4uFp2ozqPbYYB",
  "key44": "4a4h9ed9Hee8SwD9XcMKcviLQh85cJm6rjDXeVy5Lr3dmyLKxomRSKfSwc29jsgEoqc5Efutw3hEWwiRm5NLJEXP",
  "key45": "4PsLfxbA2qfd17RboiwmL7twZeQrMhR5UxnZDxRVwdBkbTWgmc2x4A3tPHQVv7Q1BJb56d1tz1rrvSxyxs5KgoYX",
  "key46": "2sQdkqYY6fBFVcXHLposH8ymuHrEz5HzHE4frgAQYqRH9ZjeAtbqb8hCWqSVkLFtMtvHqAF9g7Zr4FXVqTHgj6sa",
  "key47": "TWhUukjBxK4bbF3xFzGBL12VGLv9iHmmZ13qMRqJmVQQwT3AUdk6iZQ3gwN52XC7JuNyMJgkG12zoTYgdpoktTd"
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
