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
    "5m53uYKgKgbDd5jpyAk42B7gHdVas5yAU2hymXQcDf5VHTVqrmjfgnbWMDDVNuDdEUach7PXrZ3czyqyNvGj8PXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDpMg7arRAwz92Ha2L58o7QQmQaRPfAtfCBKmMMjGS5SSNrTYrNXkYmYfnK7RTpnJGRFmNkpT7jNKe1sjh3xwkE",
  "key1": "5Bre49vLoUa5EASEFdbsqM3iMo2Tez79ZrSWRoErob5QEq2TW98HeTkmDuq1gHgET34jbbeAG9exWZcNdJ7BmvTp",
  "key2": "34iA6KjdUDLvekwdgdyKWdYGeCWXqDVqgn7rBMC8GjTkoDpDyFTToxGFeavFR59iF5NznHRBGQ17CrvvP75gkiik",
  "key3": "4ytMeuiNcrsxFz4kTjRqkB8jXiZsyAkxbyrCP8fDbGbLYar7sT9ZKCNA5BT2RcfquBPMrYXMcSPMG1vPWVkkYbbn",
  "key4": "2ZM7Rb2voS9ki9x1GKMcg7Gf3UXS5TM6zYS27XWCqVSn3wERcf6vmw6PeAUv533VSLwCSNBDJxZBXpR6tLYzVHha",
  "key5": "41ErW3PeSsbeVB9kKCyCVojjWiaRMao9etWp3wNm6m4sZnNuJZSb8Yb1J66vtjNXuEaG6eEjM7inGRB13hZ15jkJ",
  "key6": "5p57BXEzaUXYRXjMUHVRSSncsJw2DxEQPEoNPBY8k97EBitTq4VKruPw9a7pGgE5rkAQhzzDM6ns193HbHXWeLYp",
  "key7": "4CvfubCXey8Ep8cpFD9cvozpupSk2P97ykA6EnXojwYwG2eLcr2WT4fYrrRB9u2zHG3bby36BceWEs3EvT8Tiw7f",
  "key8": "51mB37X1xYZYToAJodCvJNSj3HFDd15N1kukLjgd7ag2nw6nn6kFpvpDbjd5YP95svh2LqAXmKGZz1aY7JfedJCj",
  "key9": "Juds3vCkxgpoBhW3Aew34VqDhp6HzNc36irDtqdSMrT4BqPDRQL59qRBWwEciwjk2LS6d5pLBxXaMYqQoKEZrLz",
  "key10": "4avrf2ZfqKdQNf56VSWNv9kmmef5Z7A2YxrdQf4hULutZ5XAsqunfghP2a3WdpBDKidbp198eFiPdhivzKJHoSdz",
  "key11": "2YtxMntrbF6RYZq7gvVXg7oEyN8rcA6MykzrBqCC5ahvBTf2kEzkqtJmoqR5eMU6XEgSipUm2xmbhogcEnkEhZzd",
  "key12": "ZjRg4s8gqt2YhwhYuve49MMynKhvTujk8jKYooZsWjWEMKykGZZ9KMFedubx3PgQRtiY9Ny1Kuz2PtZNJTbNWcV",
  "key13": "4ZhHdRsdv7coWqyuhdxFpU2aUvyS6qKMcRUJD2og3iTgdiJ9Yoi8DSuch8mu2iGPfahXNQYXgE1rLHctATjbNugV",
  "key14": "4GhsKLS2m69eS5kAcymKJTjR3XLEjuymKqS4JqehJjsCAdTUXSRA7ur92B2Hs5HAhNm434SDvy4LhLhPzz4qETRv",
  "key15": "5QhTrAWVK2L6DcFp8V7At3sZvUACNPGuSFXnoGPhLmJpJjNnG62xX162VkiULWNcwDwNinLxuHC6vYAf4FVHpG5M",
  "key16": "7krGDqVyFNeYa7Rx1GoY8daCAqGdqgErwG1UF4kko4uixL8W83sa3RZ8Lp5QYWAPBRQkFjKdwopXqwHkxSAQsr6",
  "key17": "Qo1y5fNThxEtz5qNeMCqgUoxXS1EiDBFFjicRRdWuNBZ9K5rRUv28PJx7qbVaT118Ax1EkMmyirs31x8xxch3FW",
  "key18": "4roS47G8ro6BGgXdb5ZRLeKWRvWLFb6Js64LTsdk8tzoQG9csE35kivHtxDyrE7wzMcsUK5b2zaNnucWMaudtCdj",
  "key19": "62mwgzicjgA5o5PNqLR5L5htJn4qW7PiWjMMcpVyXmxcmSDPcaEp6tJaCu2tcKzSyqnjXzC2f81MMf6jhzzSkdLv",
  "key20": "HLbX4Y1CtdFBmnpEdPaWTNekjeCf8fi9xyfhen3XXPY4LWcfJ1kGnqfAMrKdbUqGRMSpGc5KA3xWFSkuzjWAFu8",
  "key21": "2kaJFhmP9pKBddLwesRuEWD84ve7BjkznaXZSsMX9BBBD87Nnb9J6iCANZBAfjonfFWsgnzu5quLxaphbAM6Ugf7",
  "key22": "4DkrYoWkZWtsNeRNJiAZLR61veCNMzfLzvaPbF5N1EZMY1M22kma62yuduFPz4FU2aNdWrXieAk5nGuUygGrE9cT",
  "key23": "2XtJbBjf5RHLcDicZkWh8mKGEK5M4UdZtL5twSApD3SQrJutV42j4YYD1QqcUqsrgorx11cy5WA7TfkcZB9ae73p",
  "key24": "43C1nEfA6CfbCB7MrVDQRVwxs6GgdUCCxJLkW2ZmxrQbynziU3DDvQByRdQZrNYTmssaDWjTDK1brMGh4JNFEnED",
  "key25": "2xD9minbic8Gm2aksg7ncTkgnxanzsMibciA5whp8xZwEguChaNJb53cnTcv8181Cf64fc2Fgb9pyfGXvtbpjruo",
  "key26": "4KERyandro7ZwQDkKdQN6UDaZczWz1bqwHuBkdQXWm8RSe8SQ63s5LUf5uxigmc9QgTKdTqUqa7yeQkgzBG7jrkx",
  "key27": "5FPfJnQK74W3FjJiTXkfFFFx7psRTSppLf8LH6cTMEuVEaGir5rvSD2U9sKDyq93Xc6zYFMd6utGgVRmavoLmXhy",
  "key28": "dij6LoaqGU86MVYrt7venLsoWEiwoWRju9vsh66u9yv3kJ3bzhQuYsNPb4ZYkuemS2pi1NYGZKM7fLtw2oU6u4P",
  "key29": "4EqH6NzwGNbFByUWt7Xup5nG891FDcP6e767VbdeaRWSDYkrbGCiDAwjadgbyovzKQrfuXxtbuvtmfxvFDvcgfi",
  "key30": "47wwrqvQztagK2ZxG9MdAbjrGshwAjc2x88sKJUczAdU2mYDE8imbJcB7bGGRPqr1GL8ifnkabECvTPreB8odYVX",
  "key31": "2wSCvTm5vbhamNzVx1emDWDFHDzdkd1nGVQgMSucuu7ffEwNhoHFicW3mUPazCaBv2BeQGTMRSWc1YucfbsejKUS"
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
