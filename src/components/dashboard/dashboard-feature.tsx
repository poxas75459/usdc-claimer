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
    "4tHjzMknfyuWtYT6zatYuuVuPTUm1U34x967TBCApVDsiZGQir5GCSRAEPpEVb2W3VhwwDcEbBG8RShcwynigZEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQR6isey91RKDi4qEMmmxVKhvQWtfHFLkCV891Y2Qe3GTBJjz7ig7HWbzxmuDgzQsK468Tjw34n2chsLd73rfeU",
  "key1": "yC2B6EQH76HosBQN323Qq2Xk9mPkwpwdcFiWg3hSxp5ZL5tCUCookQg7wVqD5mchpdJJbYJQ5V2Nhg2mrZXoe73",
  "key2": "2cfT6n3xrMqEoWhTMtQpCA1TigvS22CQ9zgjuSsbvpFpZJrL4a3BK4QCdw3WNFtZhJFedyamB1rzYn4eLZtUEo4w",
  "key3": "5A6hzMdaqq2K52bopS9pv8b5eeS1Ho2muzNSHyNEq9G25ZZA4iBypBAT9SQgmebFvzSxncR2KC4EEWKicuVL8gai",
  "key4": "3Z4X2zz6uBgwudEh5tqKGGBgMTctCcJ7f3LAKg7sbRz9QQ5STQpE6Sy9BBk9oG1cTrgvnwppQiR6D1Mcmm31RTPh",
  "key5": "3zjUk9rCoxWgUdLbvJE1hmBXxymMEMYAqxGYoQGHDNKFTDHQMuwEbJ3F8TATFdLGcqHr6gzk86Px85uoRUq2icVh",
  "key6": "49cyS1YUirLe1eVx37aF44gnasnQLckdDMbRAfyvk6TtDAeaY6AiVM31U2uZ3ecu2i1dEofNe4DkGWP3K4BWEDiZ",
  "key7": "577pEsfjhqwoTh4ji8Rf8AGqQa6L2Aq79u9fooM48kHuHyxzT1VYjdzq8gkcQaWqzGtBiwUpKrkn4YqGG4svCCNB",
  "key8": "4DguuACbiMxEGw8bTNARwDfgSeYCz3ES34Wf64dYEVeMYzYAqKSHykHLHLzBsRFcDrqoSkrhKoc69J9RJpkvxiFy",
  "key9": "LzQirMd381w6BrgxDoK4zyJp3qgKVtGwNfQr3oDB3iSESm9iiHdDTy7j3QTg3Ups3sk34vbnaTbi3c2Jb28zfz6",
  "key10": "4s6AQnT9njqhVBabsnRLEqtEt7DYwuHBNspjv8rACaB2Wvk9pa67tCSBfQf91krRNcQUPAA5fwXiWk2TFdwdLGjC",
  "key11": "5hLE9EzHmUXeKF5Hqeht6fmZ5dhCdzxrLLq8cYdLVyqZMKsCdaPnEwiZmWBU5R1RsbQ5kA6LsN5YhDcbr5Y4daPG",
  "key12": "53StcET7u3fbDbatytTvTLYQFm9XP28872YqG4gFohZm4ZmcN7ZBC7tofH3MNT9CUGYBxLMUgD5T8jJA4Gsjzhmr",
  "key13": "5ZNzjRWoZB9jdt9sDKbkfeBqxaiCr2FcepTWr2HouZBuzgFJ3cWsnh3Tur3p2QbcdaJ8Rdbi4RfXLBGCCfVryGby",
  "key14": "3akqLEr7DgcCp8PTLkb9JCbwW1fEj3Wez9QHzp6m7HKDtgJEHcH1gEQLp6udFt5TUQi18kVx5CurrAfLhEtQMRTd",
  "key15": "22QPdH3mZt33EHMgRwFwW6ahcRaL3By8YtbLiVs95Q753FPxHTanEbuB2hVZPz2rC1GWE8jUUWCBsu8zNXejV2gT",
  "key16": "5Lv2LhKypNdX4K9whzH5mh3KxoGbdm2t6tr5xg3omTviVmeitXDku6GLTyGGznakyuzWEsis1rhzKC28scZ4AqyG",
  "key17": "txcrQ9hZtPZCDmo7Gomc6x8ov2aKvLcxwtG3CeecRYUPQMqmAvD5ewNoj52gmMnGZGuJieRsp5AX5MwDLufQgzq",
  "key18": "48bdA8qq9H2Rhr62WA3oCDU9N1fSahi3khUipPVmwZP3MXaWMTPPFJYSzvBLNABC99s9GSx1h8AZSLfeGgLvtP38",
  "key19": "1i64AbgnC78Z9S5gytzTf5Wz2LXMy9HfThXjm37vHnVxjNs5Zwy2xFE8hHiZbEF6gpFqK1eox4yyuD9UxELKdXR",
  "key20": "44qQpHLix45DV6df8DkHafYAqDj4XksfBxDYdG91XmF4JpuDvABs6MsmPrWpGHE4K3twkQLdNits2c4uaviBd3g",
  "key21": "2SwyvJakSQ6c3DDVeNsScFYb4SMBfeC2Zn4u4CwFVfqZiKebxu8iUq7jML5QK3wX8uVgmLGim6rDYScqcy9KFnzG",
  "key22": "4pE8kLDG7mRLG8X6AMWjRyucn4YzfPWT2bxr93TZSYJL9p9DyHtb2azmCc4yNqLXgr6LM5tEVQ4Qq5r11RnvJKbY",
  "key23": "2A2sVoAGuokZGRwDBHWJi5pKU6r3QvSz2Y4vNjRtyRwqcrLsJiF7v4r3FWauvEQ1QZHK34fPxPmg8Pivsgaaf66y",
  "key24": "PBT9qHdZFZBC15ESKVJfKTb5pnxwfSZMCaRyxZ8PmeCtjBNWGq9StW3yRupRNWF4F6uHM11zHJb88eToi2v8Do8",
  "key25": "41gLZ1JobaCjzasSnKeZ215QW5EBU92BA6M8SyLMPwKic5JDVotB6KABhtPMTVykZJ1sTGNecrAShpTQHXBNHQWp",
  "key26": "49UYtocfw63KLjyFW2ivyUZYeaV1FvxRDD3b9DzLDMRHtNCQX6RrXaXDAj5UkRDdpdd5TuVpCzoWsgvW6txhHUCe",
  "key27": "PgUzJFLhDsW9RZmcXCn1dkFKAgfemooFBGdpffPRLyZtS8ufMS3FvTNmuY5tfoyCNsxReUJZuapQr1YMkFc1aj9",
  "key28": "4pMAcjUpMzysq9QrWSevW45exU3us27uL7m4AFEhKAzxzn7ieQZek739LSBWa41Ds2kPv9SbjfRKjQJ5UdhyneJH",
  "key29": "Z6ggVJWGEDfQYxV9TC4eDDk4gRe71M1CDkWTEXmgkbv94z6pXx6JHfUZzFZQYoNscoFdytjG3U1SuaXACfujjVc",
  "key30": "3jFEs6r9nhma5MR9QzNDPDtfWYuEopUJeNBhQUxGQz9ty9kkYLMiLuRCzEp1ZbbVQW1YUPuX34w6miacJ9pCFPEZ",
  "key31": "4wzGzU3CDGqk587BCCZkNeaRKY9z5ynhyWDwwJLKR8jcFNa5u2Qx2KM7Fy6SP82XTdX7pTdpZ9KWvChfyxMJ3PYc",
  "key32": "38iCFZdW2WjKEhx8uE9DHPuhpR85rNdkb6uTzqy811DGdvQ9yctZhHuNszt9JYb4feurmAN2bkXVZxiZ43gZBBfD"
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
