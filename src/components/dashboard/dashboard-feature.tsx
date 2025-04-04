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
    "dhvFs81KkiuYfrQV1WYfmM6B5PLVvR7tJrQ35fi4Ut59vYUXdFXwGz5zvYBP3EPHTRybucmvNxYcC7ntgHpGEMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDw5DZKqBLbGqcJPTgGTqhCtJaNjd5Ugt8qrcWXVnJpmh1VavHyEA6qs82749Z56NwzYCB8for1Pff19WoYutok",
  "key1": "4HunsTPT7V2qCL71ZZC2NVq18YwDm5HYpmVcd5BXcchNvHbdrm2pRP5sbdAX26Sh6Zr2oPhA96e66nTD2LJuKw5g",
  "key2": "5p1iHwCY8hS1pAjK86cTJcQpsfwyDaKG7HK4j6rGJEEbumsrw3DwTiedbTXsrvnq7ydjLFaqaHTxiBK2ni2pCjdK",
  "key3": "4GPAi2U5Q1MkbVDqYNARWRxEhjurFQ7ya1sUP6UceGpxZi1jLryMnm2Evfkh1y47mx6S7G2upQV9XK47p1awsdGq",
  "key4": "3aZCWQUWzcUFPUS2iBjDWsytR7xhE7tRWsTZVQxDR2RbK7GJbouPriskorakMjZ2pxKcbgwgVYVcJyT6kCXUfxxu",
  "key5": "2L39WMyGpwcwupfLStWgUGo9KGbZuupEsZztoj8NseKzNGeg1namcy1GjUuzQB5gC6xDRueQRYFbBtSM5TVM6uDa",
  "key6": "2oQWC3581V3qaoVMK1bdLdeM2NAaeBfpN7AUYKmA5oNVnt2mbuoza8mFTiLGBgD9UoKV9tBoPH2W6NqmXpamtCnh",
  "key7": "4ummGJWxueGcRVH3taijQzHQ4gD1MvppwyCGh4uEHRAkMxTdyPzwH3t1pPKzDrgkUvjy1szVihdkE6Xg1iyCzCch",
  "key8": "5ycstzNPZVW8hi1f3ZbpEGfyUmDCdokBRdL34Nk8uHi1fkwFCfwiqiYC6GU9sd88kQp4aLjmAgvUMqHMRydLdjNT",
  "key9": "5zbvQPyNQWCtRsSGQRmfeAsbQoNtdJXfTAkfL5odj4119dzKnJpwdVTTrnyjtkm4qRa47SNSWQqiciEnTdhYfJvj",
  "key10": "2nkFrkAUidPvburqdJrafBPgpJmNK5gNQV14CktSwERsGMrEP9hWwhAtj5wX9FjwCbhWuLUEDRYZrMGtiqHGCz8p",
  "key11": "4pdj1HpVZnBw3XhXdXEYUF4B1Pzq9ypjpfY7pbN7hsn8ntTUwuKreHsu5FEUhBxmZv6gkB6Nbrkthd4zMsV29DJP",
  "key12": "5Wqtg3KQgcmHibsePSFZM3cPf6886oANadQh73JrdvMrM1JzkfCWZtp6SiLa8FwKfsXu8WjwKKhjP7yFFQ6hEjHq",
  "key13": "2HShmqDTL1DuBkJZVdisddhvU77MQ9WMAJaDW5Jg5YXn2g9XQdYwq2w3QmUA3NC1yuzpa1z4QUFho7NmDsE78zHP",
  "key14": "9FzUQGtoBPdBEMupERHVCJswefUV39Cv4ktMZzfru5qTY5UfMH8krkPE1ysCDpwf37dhuBksDxwFy2X7APBCezg",
  "key15": "4HUFuJpyiMDmJGjJat8QFYghUiTKgaznuS6Sv89xgPdPK3ouhD4AKNeK2iwS4R3t7imjqQ8ZPGdNgJmGHrTfh5qU",
  "key16": "4cS3U2gzJhoHN9EZSryTzEt4z5eW9yXfGg1pL3iZGUmsXSxLmU4FEMzpWE8E8uEGQiVS1rMWQZCpQSag4Nivm8d8",
  "key17": "2izP3hxSYapufT48pjEcpzzgW3bb4n7tbvHfBg5YHsUT1R4ozbxFfyxm4uSeS4UE8CeVxLWERspLczKHSZUTj6DR",
  "key18": "2TE92QxmTUfsoG4713s1VoaniMAuQ1cDJ2zH25JrFXRR8Qua5fD81vss6o2fwyqFCcHHsaXLvZxqEhGw542zvncs",
  "key19": "BmhY27j67j42EerppYjYtEZvEiHCs7Zb9ba1XcG1mD8MSm9mVpCKGCXhp1VeqCGt9d7fiQMKzdnim7thyMHX1ch",
  "key20": "5ZCRuDe5dRKspTeu68F8aE2f5XuH5TYy3ftdyjYSehdV2E7GCBSJqFocanjdsTvF7rMWGErCxH9TLNBYNZaJT2Kj",
  "key21": "32gMCMkgWUwWEkFD7TZtdcwCBRQbe7YTKLVGsXGXvP9ZsmNNgfCjokYjrusZxJHSKVMiCZ56S8pcRfNEKK5dD3pB",
  "key22": "593svXcqjuVGuL1sEU5ULUZpSUaknhWgbcAWbBR7yKo6g2tZivKZTgTotHMFE5oB73WeieeW1qRTiP4LzATx7L3J",
  "key23": "5h652M6BopjVDoGSbDCvHjPxhqfKNsdDuV1DDYJxrudBf84U2j9JxMt2TUhZtrGxZh1YhgjsfKaG5BmdteRVMmHr",
  "key24": "5yk1dE6E5JqXVpFyZaJ5nPLbXFEUQHoYCrfxWL5a4TqmcwWxvdUgAoSmUr2Tq3SPNJhxkaAhPQ19i5rBJGbtPD9C",
  "key25": "58V8zWpibDdLMaNt4tPppT7ztcQSWPFEmB3tb9taF8qVUTgCe5j2ZZtHL5KyRX2HLro2eNnEsicuEXsWhVyiKfKS",
  "key26": "5ZB9tN7yn8JBdVSMBSnNoGSWrDE9m38ATEiKq33wiCACkqLr7kKz5b1NezN17GbcBypbbrcEKBW7uT9AaeuPhj6n",
  "key27": "3mKkiqQrqmDwzfYf1xnDWnPd1a4Mm4TPkityN1PsfLXJ134mV96mCvv3UMeWbjGR8XQ4N91qStyxirCV5wwDsVtg"
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
