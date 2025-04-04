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
    "4JhHFVqBs4ofnaXShDWCQzyg6hkWukf6hc3qgmygNvkJUb5QUD9P4CMGwYGaCv4tZmQCKLZQtNczjaLqDFYSEQMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggqZ7KUGQCWbmVmfY5Ddk8M5Q1gdRXx8rBgBUUZoLV13FMrSQS9qTo2Ame1AELYeEGcUxHYvHjLvkZozxJcwPsZ",
  "key1": "5nqkKma1oL3gV367WiJASVEH2vAMZYMptb9Y5ocukQDhiwxxBRhi1kXCA3oYJFYJVrVRYHrwUHMqy8pmiyhjmUvJ",
  "key2": "4FEigJjMDbxHJG7cyxpBiup6YWVNwRz1GuvtNCBqLkZqaEJkda9KU94TGxnzpERKBeeFijvZJ5bzDgAhi6MdwDyF",
  "key3": "4Bz3h6A4UNSb5M9XAdTwGy7uiiqDDzHyNTxFKoRHkUP5QRPLzTod7ec7PvovtdRNScypZmL2U6jXmSV3YcZHZCL1",
  "key4": "4B715kdZ6Dyq9EH3vg8R7xYwzBSUp25q86nW7KyrEVrYjMuNFk5n4JuqNrRjTPHHbqwcq2MPTwFzzoX7ZkerBeVB",
  "key5": "LYXEAUC5vp94GBASbP4H33gPdyJJiVrtZY1YcMWpkdgtSCGh7tVeAfDpJkh7wFsEg1qjsnWZzcZZsN361b7DgFx",
  "key6": "5GcdCzCRS7qBht3NyQxFFtMePSea3dHa98fzRAuYwrVDxXVmTzefDA35NvKKvjWiuf5PjfuuNkj1BKjkLCUYsbwh",
  "key7": "23fAcUMTrYoZb8sfA5D8Y5zVBxAHNxr5AkaQFkmKGjxxYBgooPibQDvPX53vp8mCTb6djRRNTXvHDMc94riapyE5",
  "key8": "4gqgqrMaWDaH8tCgMVXDvQVM357nwbqqz1ZvfnEfjEUtxUU9CxMd1R9C6sQnrGaQFyTpEeMtJm2LiYnhVBVfiJT1",
  "key9": "54Fd6Di4dXRWMC3yMQdmgyxEiav4kJuVJZ2ADuwvEjj7qBEtYX7j14vrQQppVzzd55gr1iPNjuvb63qsUFoDCLHH",
  "key10": "2NLbAhAS4HTFzcWGHNaVq8LWSnR1TUPwx9KTDzu2RZEkCSexR3CZiuLWYMpkocnfEgct8rkXRnvkmjW7D1mCawHZ",
  "key11": "3HinRLbfoMM7LDw9gjBcEPjUf1VUv1ZSmMg1YXMbkJ6rM6jmdqAXeqX5mf7q1tuLaUahVDPAZjn7NMLP2K9DCZGA",
  "key12": "3pC39Jp7f5kbyBJW16CUFCb8d9BjSzV6w3CM6KjFvRbsQUkUENhxqpcaeUxhUPGbBBMg2cDzM3Z52oscqzPuNgF",
  "key13": "3vFbUMckiY6ZydDYZwG3xuxUFru2S3rc2PWusHTWJD7pte4YHGN9buavQjLxpTUJQoV5sdgNRqKHtmhmHqLNPoCy",
  "key14": "2vMQE19yAt14rjPvboGYaSBomfCGCsJWzkxi1dkcZoLQYVp7ApQquz5uqFRgegAfyFyHUu4AzK7vzLKs6gRLiz8v",
  "key15": "622u8b7sfwbWafcTYUAjSonWidafnNUkmSVeRmwmwVfhjniGqi3QEf7pNxiSZhL2VMjWNNsFR4M91z5HLSKjhwEx",
  "key16": "2uC3SHGKzQRva486mP7sQ6WuLz1rKXKidheFumpKAqUCZaYFerNzm4WJQpaTEh4y49K9efGiXJbDCy7dkbQcyaBM",
  "key17": "4iapqmfSj5wvuHR64qAbk6DxTwxVoZGmo7VPEsMSyt1A8rLEcHPv7dPHu2QmPkVA1gpdoEYED4LuB8kakUee3g6J",
  "key18": "4nheeeueDJF3do2vcBrzRmp6iy2jYqkzVWmKXSQp8yEsQhz4FdH89tQqfrE634vsWKUJinme9T8srC5FEvEUq85Z",
  "key19": "ah7bLcDK2ddJxEByaHhjNyrL5QBUkA7Ng7U75HANndcJ2gPc2FsaK6hJLG5NaWD2aCxSB6howcT8yGcuWSWDV7x",
  "key20": "5PjhXhkhp6CKyTgHco2y4SGMVCANnc4rCxwSGDcyQBS4meYxzMsYC1gNgQkGyVm87ab8UvK3nTUdMBxM4YhYTt9B",
  "key21": "3mcCNHtmNxuy9pV25YQ5j7c9Tvnczz1esmhKQPDuAEt38P44UK9p4jktmxNLc8YAUu3VhkWarGvyCh9HmgYBKTA2",
  "key22": "5b6tDnwxf1tPUo3C8pf4GBpeBKA4qb8PAHMKYGWEfF9zVRhxUKMArsDi9z36tFH91G9eVfF8hX86LTsV55zHcEmG",
  "key23": "3yY1zS5UCRDveUTG1Px7REHWH2kjZPbm1KFvMNvfBufS8YYVDTgricZ2FPdhcT8nik4Xh5EsAEs98sMXPHgkNKmc",
  "key24": "4YqL5QK82VG85vBSeYRikRcrLoM9LkuB9JWknaUMfGLmXbKtmcH238Dfc5bbNVFhL4V3XU4fdRCgZUn7sVaS5VSb",
  "key25": "5qGU6PoTSsWgt8xEDqFjugnrKZ2uEfPCsLCGFaBKDjgZyrbjvjSPwmQ8x7jy3YpYdyqe6NZXN2wwYrYswzD3RooL",
  "key26": "4UaJEh6Ggt2sSbCbqZrKKxtHd42kkCege4kBr6EZfZxTTRTgwSredtuuZh2v5sPGRUGg3DEDoVgWgRGpgoZgS5jD",
  "key27": "3FmyWy3GUeSjT74HQzvsWDgwhMi7eGZno4zt1VVt24a5ox4caow7FFcAUrKzhMePW5cfFJYHhvqXVGgu6X7Jx42t",
  "key28": "3tr7SyLySSBhR5mtvcPJTgrnJ6fNPVxjtdKqXVkZLEYue7xJo6sVziEd51fR2bMAJxpZLrXNesmHFC2iafFJrdmn",
  "key29": "5NSit1W3MHpaaBPZeaBEeLMAXw2V46JK9Z5RvYSapSrvn247H2xPdy3Z64nXKQ3Wg9s4vCfUA6W83wHhdZjBVhaH",
  "key30": "2tfxqkCwPGT5CBZeXPXhtWpLwAcUrhXNySUXko5FTmoapNVyAHVWci4JvJJfH1fHUCDmtnKqYoYAk9WVQ5wdGBrf",
  "key31": "fZ6ZWXwhYj52zuWAwEFw7tjQpRQ6Mo1gyZuv3rgb1vSD7gTffwS69UScoLpRJfAkrZB9M4JkJQuJ5zxDrK98jTA",
  "key32": "4iEs6rVYtbneBbQtsz1kRqUH6RU9T7vdaynJmWAnJ54YMUN7zZkvA75YDZ1FFNR5ViKTPsZpKJqxCPyYk97Lzxso",
  "key33": "2bPhDWEA3hfPtqBVqcrYuZJyLbpQBzGkh87Wh54Zq71qz7Qj18VGWZeX4cYVcoEzYqNn86oALJja5avwjoeQzPRc",
  "key34": "3qSYHjwx5enJemwnAuq4ZeBJF2C7Y4ypD5fptd1jK8jgpqdkymJNFBmVcr3uCC5UDv3vVRzctXs52XLD984aePM9",
  "key35": "3ncn9w3K1CrNBVDJGrbXTMETfhMVZUfr4neJaPKHHh5MxHBRZVH2no2sK37Pa9QPri86F6aCB9YPCoB2PXNoVMvN"
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
