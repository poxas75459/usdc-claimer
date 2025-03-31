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
    "5vidLviToiSrswFDQxit1U2iskhAp8dPXChqxm9fD2c9aFmqvdJoHQqArSMs4d919VT6Wze56GkSFBFd2MXRVpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HzQ5jf8haVNsjTBuKHWA2CgxNKDiGDHZdSH1bYerBhTFxbpNeoQaAoC8Qw31mP4SVHQnCm9eTgbDCe1WW5LpTkU",
  "key1": "3C7VzpYc9JtcTNn3FuYudz8VuRHXKUqXdFApoLYiy7qCagAYvqqRpFmmNvPU7ms97NBvfaM5WkPmHzcwRQyvkjU1",
  "key2": "4grY5Nan7ff6k6UQ3YJupnyUyBMinrEEmCM1MM8Uv7CBbMnVnQx3JkiJmcgs8jXXe1W5QdFGs2CU7Hp9KvX3FNRk",
  "key3": "4tvoEFU64TEcEd8VdCFFhbntS5LCybE9mDZMVGWWgLTcJb5w6hTJLEBZRXg9yLdfWYwbDtxJ4WK31VS2EDr7VvxS",
  "key4": "4xX4TwqVC7xbAnhy3GMVU1XHgSj97zwpFSevVaSpbWexs5UR998V3UkcZSDuwKREn6Vw48d2rr1yntiBiTWJDcqY",
  "key5": "4qetJFGAorZ4Q7C9FXeVwazQfqMfrPqnL2BjpGyV4BRSUwSzpHzfE1bewQiKqGXRNrG3jWTUeqndyTaEgyqvqWdP",
  "key6": "2PXZaxat1ACDBWGrQxrvSHt5qaNZw1vjtm2wEexjHNnqY6yiUDTHrCdPJ9gUsCYrwzGpgCATztz9VSZZEkz2JGUm",
  "key7": "nNGyneneQrH6zmQnJc7j9QomGPfMicBBtvuUVoh9dMRG2NL8hT67gWvucsFEmErjWoXEyMm6eVYuf8QjTTvZmFA",
  "key8": "ZBqMuJWppH2EB7c7FEZMeQwEzkoshQk5492gtQFBjPGqjwU85ZCvGYjhjLvDNT99xGfLyGtrfMp4XADyiEjyocg",
  "key9": "4U2UzS3hrvXcVcYPCnCGtis1ieqoU8Z2kLKRaLAL1R8MQimmzuJce4gfTYxyc1mCGUhP8JEng5abVXLC51jgoBZE",
  "key10": "4U1XmiNyhBj27oiVtvYkZuWUymhzr6rp7fbS5CkHaCzPuikvKENKrzJ2H21C1CDLo2Ci2bBRi9eXP19w1f1a28dV",
  "key11": "ZLFE9aV5khjKtvTeUkpTwsSa36NwiWatysErYFUk2wHZmsvN4NdFLroZ9LZYF8ZTiXfC4DGvASjaCGHvF2Dc3Xe",
  "key12": "3rv5Rybypt2BXfAff5ZCs3GfnZsYvyLhVPwSyeUjp7nkGREeRAMWjuzLmDK8M1x1ykwREuDUjNyNL8qcgNJ3YBUq",
  "key13": "3KJGQQi7GocinGBDRyshuYeTSrXZhJUZyVTF1jm2JhQPu7ntkVnJ8XnwWNsiY2bQhcDuzMyR5iG74bp8yEAhKSF7",
  "key14": "5MUposEoLq3KHCU35MhRGHFYjsUUhALrCuzsBGx72TEqWo5mbGejpmBuRvNhEv4ty8RpFzYXvoQ4HAJav2PZ59w1",
  "key15": "3XCKov7QmTsTu6twtrCaMhqX7iHT6656swZUP8zo9gofGfnZ4BxHyEYfwMeiqjtj8336uvCUqvaF63aucjgEvpfF",
  "key16": "4tBv5GAAssHSZRopiYc4BWbU9eENv6T6nyfMkvmLwSzT1cX86AJ4bAcbQh24VnwvhDQ31GHjpEqCpUn8tnJy3685",
  "key17": "E4XhN9xhMXDAYpaHWiLpXPdf5VKqfxftPTXZKmjAmAcoamDQHRjB7mnJpc3DfvEdy9E2W4zDs1VobsiVSnXUhpS",
  "key18": "3Ge2u1XAXEJczArWeTcErDMx56fqXZtRCWYejn6mpmmk2xtLFaVR9t23w4MrfFCs7GLYDncF2Z9njAzjB34prTid",
  "key19": "2eWjuNGpSKfkzQ7N6DaNVFdiHuxszAVqhy4f6Z4Wsq8ZiTm2Uyjeo95WEhjFeEktuqGY3TEjpazbKMGKa4Kprjn8",
  "key20": "ynAx8yojmoU3dc79FszA4Kqie11iWMN5aBhz3T6KfdjHMzUndpb7sLFFSV21RUNyKG3ftsCW5yToXDnCNgoGzbq",
  "key21": "2ompY544jyUXCi2w76HCWcxBMKWCX8SVTrVQFe6nNHhqP4ZGLCVL6CWGRLBw8V5xcU4NtCc1wLTNdveJj1dRc2qV",
  "key22": "pY69fSHYVVnQ7rbEMMAk1W1u3esjWwTMga1FMzpqrFsrJZPYKrcdPHZXfLRdoiPsPJskGTVDP5yYHxQzWhoWziV",
  "key23": "3xDNDCwBVBrGcg7hfcTFDem7P8v4dsE781F3o6UiJUggjq3JGi2FMHbDzjZAvXGEzemLjCMXPibQKTVLR2JiT3Na",
  "key24": "34tXYjEvfgSBpYSqHe124Mvf52mX6xsHspyrLvNeLXTqB7ZYv4UgapeCd4DFdnHooRs4XxU3ds5Bdy4cVGQsFxzg",
  "key25": "2i4PuTnmGiHcSkDf6GEWS3ER2K2w2BV3GEs9fAyLiMAn8QyAN6RnenzsCQfumpSpxwgAzUvDBEsf8SzMs3UUxpRf",
  "key26": "2r6tmkLy56nen6W7SdjvKPVzwDmVdQR4gS5T2DMn9DHfE5mUoRujBVbD9FwpEMbAx8ATTZWQwMyYwGP3iGtGJ1LF",
  "key27": "KwPqi19FKZ7ADg1H3X6kwc9b8JMtMwRZNrseAuwdSZvRhY3vY5BHCneznty5V91v2bAssS5c1VHAxnhkRePcdCA",
  "key28": "3L8F74Kibu2URpjHV5rarwBvtThU76Zmf5MrGwHQ8BMX7shc54LTNNcCYNrhxpUGDyHrQNLZwzAnL22qm8rpbDDB",
  "key29": "48d1Wuz9w3qsUMYNTDYT9zXe4yEFNzd3Ghb45SVmUFuiWcoJc3ytkcZ7PZqAhaC41pHtn5RspwjVqZmZzWe4kisL",
  "key30": "5oEN7fA9cHFsiTALxdGFeHiBn45cdHvKzzLTjmeSrgwB8b4jkrffx6zkfu1xwR2vvaycP2E2W3gsvXy8n9s8ziXw",
  "key31": "5YGJJL8QfzjPUHVW1zu2e52iVZpatmKQXwhRMg4Cyp8YWtJ3Z3EhZNueB3GNpRnCqNdSUC8WVbNdyJbGjY4krPEL",
  "key32": "5hDcWszCYnagVP3wGeRSfRfAAwwhbfDegkgP79eEkgF4MdkgkMzTZNpcYw4nje7BUPx225owoJ3iipqYDQBm4Nh7",
  "key33": "4rP9wUWDhcx7ZykqGUVr5rwLzda47Hp8WDJKLRTxM7D4wvcASW4WrrW7nUJvMAsZ2k4EtRYj7dqvi2CtGt4wJAkU",
  "key34": "3JiqcvYeo77P5n1FaFy6PLNDbQa7i4jExRRXiNewhV2ChPt6oJPx6x3BnxnWnGuukfBuqFZ9f6EtJswHLUSZBNch"
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
