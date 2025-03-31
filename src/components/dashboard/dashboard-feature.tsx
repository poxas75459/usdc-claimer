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
    "5xqPxAsw3z7ivSRtMu6hzHpC3doosVxb8xMFheztHX6CP48Gezp2s2EVup88kZF9if22nXx1pZuWJZueE3WnedS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jk2m9kyajj1UijMSSnagN5xyjaikQksWrq5H6ZFSYaT9zyYatk87Zhc6G9BJCqeW6trUHeuvwhVSKpa3Pfst1eQ",
  "key1": "5CHEey4hiUrHczH7Ufncb2iS6pxeRM3Pk8ax8NfS88jTWN9yfzjqVj2MDD9Y62WaGzmCTBjzMVbWv1Wi7Fy2Ugy9",
  "key2": "iZvK3KCQN26hVWzADUDHLtvnxCLm1pEsbvTbGs6fCgtznGp2JcSesaPULedMTvjBus2a9uBc1AjBe2TBVz3DJKD",
  "key3": "4qFyFZbetbduoBLxPk2XtEzmyNK7e2sbYZCthQvmUfMBCgV99tG2u3RLzqYfHNNsiRM9QgMNjQcZ5uHYwqu1cviP",
  "key4": "3RpFuoB9YTTHLiA32kxth1xqPb1qLQRHVNpkGp1jDACMvesZshxHveB1j8tMGo8cbyBdJAzJ28Rj15iGnBwB8fdx",
  "key5": "22eATCxN7EThUhRZo5bRCLg1fo3EWh3LXwSx5RU6gTceDEoNP3bAxb3D7vxwPCQ9MJ9PdY37cSoU5A41exQKVdNm",
  "key6": "bWKinrvmiNKuRttCC37j1LTxXbeBbS8GG7mXipjNK9UQAWsGCcs4bNdwZhHgfns4xi5r5RoxdaWHuyMup2kTew3",
  "key7": "35Ux6rVGRb1c99JRh8c2ECWH6mQ4RJrtvWpoLraczuUbwDr2YZWT5rMpjynwACGJM3aaoYLo1bwhYgT5yZ8Jh1NV",
  "key8": "3uYybuQ1REpTHWwdcYTuKFLbnRqAHA7yjZB4d9NggP8RrWd4Jt29sjPzdUxUD5BNZ5A7JttUJL4sNfrgLwcq3LxJ",
  "key9": "3hooDv4r8aCbdwKMwWoKZFsrqznm4dNuF6jQAAiZSEuCUHXwjmDXUV2tYiujyZX3cYJ1BBVvt5CNQF7R9uFSfDJp",
  "key10": "22x13yGU9mF52MBp1FtLi2obmt8PMEZTMr7sSPh6V9JPEmcQgrbLc93CtqRPP2UcxqSf6Mb4Pg3N5gHK8ztAvRPk",
  "key11": "5X1qg1F1mz3HFKJk3nYDyj7i4LEJqdY4uP9tyeHSfBpFZB2QMQmdSmyt8YFHNSjQnu9uGz98WPifmUEQYhwpY16g",
  "key12": "3pZ2FoSzJDoRW7WzSrifGdm4SngEQcVX72cubj4YiUNUaeqT2xwdFM83FwdnCjtEmoFVtGWLgnT2EW9xzEJrk8bf",
  "key13": "5VU9Gz4rmUFW7CxYSyX1zQqmyw98bwZh9e7TkXtD5SvS3wDocmopvrxaQBaXo2oYr7gmUDsSZGnk61ZKjFKTtW3s",
  "key14": "3pMHyv9Cn9PXFXR3vREz1fguYBLyUZ874DeKAhS639ZcGmojFTw7YFJ4et83EMcQeGqMqFooxaJGeGT8QymPj3Mo",
  "key15": "TL1Uo5Z77wwcexwJHPpkdnqnxcjTnFL41JfagsZJmQNXS3967NBFqudETmNmrUhz3LJjGdU8pUczCRSBUTXywaf",
  "key16": "3kvt3BehJ4mEPo86oWMSTYFNkfMBPfSqNqckZeoF4K9fLE7AiTW186h26X1w9r2AwSC4ZUdfSBsfMAhK38H1Utdp",
  "key17": "yzWP6KKkgDpwPswPRfjXhd45KVRKbXTy2UgNKMzLmRkmSZeaKgdUtbddbZjuDXziq4UhedU5o7kX5ZUHN81SgZQ",
  "key18": "31fRvsvzYEtR5N47BjioPL1QNhz6aLyVe9MaDkgGjAkQTLM4mWPZZA59DGTp5CXVX3KMQdXMNiezxPAT24kYAyDg",
  "key19": "266Fr15wvzSyYr9rxfGm6vJDrZMjuyzk1d2kXy3dTSAR5MdgU9Vdxb9QtsfqD9EwZHSy6A1yrkjbZaSV693sHREM",
  "key20": "BTvRdt2jPWvJCEztDWZvpXskG5SSdsxjxSkXqwrGZwaGLNp1iMtfR72xW4bgfojkUaq5Vunurde73xJejRHeYgw",
  "key21": "VpTn19zgRUafh2on17SqVsHJr6jPzWVYSfwuRD9hhTXhhfQgpdMQiPB4hFq3rmbJmWQWee6yKmKN8XeUFspFRQ4",
  "key22": "2qP2EEZ97ZTbGbowkns8gEgzFGifkancDszstveEhJGH9hvNbGrUbpXnnfLw45YVR2L6hGJoaTF3hM1GP3xabTzF",
  "key23": "4WS7MDYQ554WckvXiosNogYcrniLfpdtqsu2C21jrBTULfxuL4tibF5vMbYRpVjo8sNqF7Lyew7x1gWEPwDLWHse",
  "key24": "5d8Vx7TCZguFyrnA42ubNCuChiYrKh5HD4yxZeFFLixdpkSDjL5wanDeUTT4mKWHQ4qoLcnf2nAB65bdutrvHw4S",
  "key25": "u8ia9aNVc5DEp2smwcUVd2tCvXdjWXjoing8XCYCZKsbqpAVJe8nTMV9Z7qMcBp6edJSwbNkMFVELBuVahbsyuV",
  "key26": "t3oPK7idQ5DnJswgeMc4jesDjcTTKu9XHFJh6Jc2xE6r7mK3m5fFsMjF2uSp1BbkziHWvStGBgQ5BVoHVcpe99P"
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
