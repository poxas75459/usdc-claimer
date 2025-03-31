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
    "5XCgs7hUNbjHyheHfFEufDS7gMoPhf2MXiSozQUh2rvfdgnfPp2KX3pWR2eVmsve2LmB4nfJJZVNyWB2Lk3RWav7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zH7NvvmhULMugFBN8TTroM1ZjLDeA5Ve5KFrdWfdEtmWZ8xm93uaX5V99JQZyLZhcHDwhGwGbVZcqjP9CjkbX3W",
  "key1": "3vCApQQSMyH2a2a7UAWCtBctKGMqEasXfvEt6KGYa9pw72h2tdwdQee7NZBb7QkNiZAAGkWETEpFCSFsgyueNx4W",
  "key2": "kcTgovhRQfL9sLoBAvLCTJZKrNygEsJ4N8ifNxR9LPN6KCBxJRj4G1SQ3xAVZ8ahVjaFomafk42fRdHq7KFJeck",
  "key3": "67n1SQ2naj5qMmurbKrzR9KWynsuu7A6rHRbfyY7rRByPh6vEtRqLamxgaLEBWTBe1RrgX78NmQ86AZkcufnrk7i",
  "key4": "4vQJnJqdwphy3WzwaPq9hXjALoqm6vHhyFk89HozksxevMiT3aFNzdUWu6U9U8Lv6Bs1AbfVPKkGeQrfkkw1Eiip",
  "key5": "44nwwTiKnQUDTWR5ZXgLcZthaJNfjt8idRkJqjDLRYYmoPiyZfx3Nfb3Y3dm3oigCt6dTF1FtFyQhSyxAB565ZMM",
  "key6": "BzhcM8T7veHquCfvgDkd3s16ELnCuAayq8aN5nnghk247yonJ86L1Hr83QPEG8sZsWakPirpcugnYTr4bSP3DRM",
  "key7": "4MyzBz9k3fKMVTUxVow3Pkh2Ax1PCrMcaUp2GYbRZktJSRSd4g3L6VyxaurDV3PftsYKLrNoqcrwv5aDr3LSbEXD",
  "key8": "SvaKYK7PRnBf6XaqfwqoJKXtqnJQoagaWfAJT8ZfB7SRTGFDHmTUKaxohocscxFaDdY78TbZSFqwmGyvXviysEt",
  "key9": "2XqRP3JhkvxBXwEhmvNcXADKLKtGG9Jf17gNAzfNW6gddXupxxseWL1YJyWJuZh74WTkg58hk2w7vPv9gE5suJgA",
  "key10": "66jtbR6KksT8nwNbbcQwZ6auK9PsnSh6qTikkdpdzwCFQxpBRarNtxK9KN1crehqcJRVJeyKDsBS3LLVE768MV49",
  "key11": "5iAMiiFBN2TTNxmr4EEYCDqh6aK7M3JFTsEu6LTwYftgLKgvuJQmSJvSWPHomMAu75qwqjgHxaNceZkX2k2SPMJm",
  "key12": "42GRgDpT3rpDi3shyoW57QmbVai11Pmp8GMfE9YGS21ggkFdk1YjwpcLJUDSi3FjNrqvhoyUtXtfzBM95anPHBVJ",
  "key13": "3W5GubMVini9stDEEfQVaoxgDnPB2hmZX6tUPqBF7sxZNrYnp9SXwNNypPtMDitbjDvKtpYKQ1z5D2HJExSNjiiy",
  "key14": "5QHc2KpcKjKXHPfaDeiHPqnuai3pmw6PPvwNNxvs1esEgsMUgQUkhXZNz1WTj28HMpRa1u8V3UEeSwiziAFzVBnA",
  "key15": "5zwyFgZyMZCMyj66DPk63XUreFMna7wME3ajSSUZ6u62fmqFtP1mtzV7bkXmdtYHV3iddnQDZVgBWQW8cuMStCrS",
  "key16": "3B2x2jJuTZ44TVoeRLoP3PjzeyCQ4V42fd6TmB2ab7jRkiotJKRGQPaN4yGtQ2hnTHckZtf6fMA6LWnbUPGR8Mcp",
  "key17": "3WEezVkpzMywCBUCdAk1C1rf2vt2t9kbaf5CQWfzEbBiqX11Kr7ZJ74nw7AyhTzjGXTZMpU1W6cfK3X2Ure2ocJy",
  "key18": "5BT5szriooDnQKk3p62ccMnJu4RwVBg3kwz47Sg4p9gFoftw9gPSbLGVthfTt94FEtLaNnLTTuzZ9FyebuXGDduV",
  "key19": "A1yCvmwSMK78zcLh71PHYvpqTTYneynCxLhzbz2wgfMR7rJoJymZccfm2ZUzeBUoiXAeJgc7jypFUWkNfGNjJtt",
  "key20": "34UmHTMHB74B5tjkghLw6VBTz6RLvNaB4yLiRqUSDouu4jzVTYPGBBznQmrBnWqcQoFkSQVTEYjip8mN4TDzqpvz",
  "key21": "5aUaesVMmDrgnzGcYWVMRL9xZqDxYCRLpcu6KjorrC4twjcnZqGaw1m88MYFiouPWhffyzvciGnQoLb3dPcJy2e8",
  "key22": "2L9KNp1AyRv8EHK3vM48PZczx5aZunsz3fVmmYCn83982qPSCMcbSsZCBLp2351tViF5srRuLVLMTC4RdwDEgcUt",
  "key23": "5qNtjh59mNUM6SL88nDkpai5pPJdMNbvWpANfZevwLy9DMbz2YTkvfH4BmCHjUSEtXP3SG2fav4NRdy9v8jzYtkR",
  "key24": "2P5AR1WZzokXSJFdzzc8nGx32DrPoW7kcXuR9qWzoE4YFQWmfMaigRyafGUnkfmN1Wb6pjudb8fkQLBcGgppriKt",
  "key25": "5jYKX4BeVJQENfAnP1dbqCFH6gDq7pduQsN16VTEB9TUxwt7JGiNa9ksoFdAbkLMB4X1juFTBk24RPgdSevFXPQt",
  "key26": "SaWxFYV3jUaMkLQA4rYHQgWiVFoUWknzXUywKi6TD1SfSTtYz16hmFthWZLovHT4qCn1zhFHa9qgGk8URkbJyqs",
  "key27": "4sa8oi6xfjfqSt7wy6Xbeh6y32G4rACVKfhfU1uvfsoG4eFoWHYPWdhK2kPGLHap9DKi7Yz4BFknvZpMKbPHuT3h",
  "key28": "2vqsMpg2bAZrhxF9MUpKhhTX7H3T1XiEZKg86T9SMvaKEMmVqNGSeMtq57f8cYRkkRJ5vXZa547dREUCmqkUxAP8",
  "key29": "4QcPPseiV5KoRdachLvo28jZig5xG77mX7efKJqEgZrLnsdMT1hyydiE79HpkkdBw8F6j91b6VCmbHuMfE3aGqvJ",
  "key30": "2QAdeTZBZfmSKZXzvVzYjHnk297BwL5fvKPW8NJTnNreAsvagFM91jxU456Ymqv3oHFUAKW3DW4orAku1VZ4FjB6",
  "key31": "5bhDDMfhp3fdQCHUiMQvMua69vMCiZWBYXExXT3MwEFKMYhVtLDtxkLLt7i8SNWnYa3u9WFFxRqDZZU42CENcRp4",
  "key32": "5wLWnF9uoZJ3mWt8Wna78seeahhyj3XrH5QUdU6yMJt1p5igiSFpMwsMjY1MC7U3wTLSBVk6gRpDzW4kckci19Jd",
  "key33": "34YN4r96boGSmRgMH2p1YL71eMrWz3XcfdpehCnNu3oq9MzYjVxw8GstwJHWTQXheSTV4qd5cVMrk9goiAzRGcYL",
  "key34": "4V3v4d4xTbdMistHrswq7Pn5Cn6FUVYpjLFisYnuLjsDB5QUAPdQNM9kqudYTgpLPKNFVvn4TwtEGjs2yz5BVtdb",
  "key35": "2TLH3Q9R4ybQvUL9KFvRhYs5vEtVNeFXdcfVyd1HcGCHqWzLaNnDKgymzefDBNW87UjW1ZPk6TeUVok4gY5qxN6p",
  "key36": "4zV3Wq3Pe8TD2q7o6T1QdpU23bQxGwxqHoUsKcCwCPjkDLHvjF9oKQjEcoNAq8UwUABgiCn6FTpp7H1mvU9eL81X",
  "key37": "rTGRN36Ea8SBs95SwQEDApaSjq7qt6WTfSErcvQZRMqkpWC6zNP6pw2YiMxBBxwVZz1YhsaWTRyZLv5FT45xX2o",
  "key38": "4cfofy7fj4vs3vX5sSJZZ6GtcPpK1PAWgb3nAorsQkageYbegHD9TforTgpFnos4b3bqR5oJmMgvoVtqC9gSMVbm",
  "key39": "2LF9GNLW8N1QJBAYUCgTAZPuRpcAQ5xsNQuS3N4P1WABj9d8FTSiUMG1Uzo89Qjhio5b6UWusWHY6ViGddQ5pB3K",
  "key40": "2REFEyWVBZU5DtRU41DzbRtqUCNbLTtVGP8sbaUnz42vo5htB1Ywpf9Q2RXz6zsyZNrHd9r72fuUHfwQtpwRAUE9",
  "key41": "5BUn7XmgAdho6RThVEykjLYqE2E96qkVNZ3w4VMcpNVNJd83BzGr88U4QQQkM5uzRbQ8wWjQMA7YN7WppVsKrtRs",
  "key42": "oKKbR1perXsqhEih8FTa6NRX4DpjvzrdkZ9KdCkzoHTadi1pc4jQ5HdR5LP4WnJBYPzaZ15ob7Rw4sgNfLmpL2s",
  "key43": "3SFSWSWBDkJpZoGqcLn6Xa3paV9y2jsZSnUwKJkSd1H3McCtYxjLfUYUjY3DtUbyUwXyAyNz3TeTE86sm2TiNwdo",
  "key44": "5wDjeSY5gBiCkoXBNkrnmsfkANvdaUJPzmADyWze7Cv1vrum7RQRtp2LfkmkCRyptCCpG6f5XE5LMSf3boAJEcet",
  "key45": "AeJu8vws2ACLnQngBSHYdp2mhb2wsZ1LUPrcn43nPV1R8Rp27XKcpf5fZsUewgCPRRaVuoPTiwoLszGNp3rvjDP",
  "key46": "4iYxKkHf6zydjUVr6mAEs3AmeoshDP2wBnX86UMRKmRHmhYeAJYtYVit2Bs1iJanwSz2NsPk3S6w3YHjhMBTGi11",
  "key47": "2pXuLPx5EEdGHZyhz9cE1gTqkMdE8KjvY5DwGpCqXY2BAb7YAmwcQ39gPpkWEbhj9WGTNXYvrZ1enfyxuu5jynSM",
  "key48": "23wnoSgML6pMGDtH1EgBCzhUHt4DB9jETYJceW2ijeaTYk5AwxuZ3TVtBFeyejK5tySd5SJsaB92HpCpCjVitCS4",
  "key49": "2cFNK2Ts2A4hv2UmkGwGCPdVDJiY3ZhcpJ2wVoJDunJwQ5WMVF5L4Ebz9jop8YhQLyb9KKVeJZ8jHCBk22pdSdgb"
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
