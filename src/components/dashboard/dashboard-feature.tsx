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
    "EMKz8WGkjdb5f6qAdAizRPJ4he1TuW8DczJTQxXCXMFCvvTeLatW8njKVN2jXRi2dxrf6L3gAGAahr92ucJUMQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kmjEHnVJF9Xam9tqb5TBbGrtKakDgWVdg5Uou96ogRUxZXtvc4jZSxgoVLGiTn5fH3w5dp3V5hj24rWy5PtPzUi",
  "key1": "2C9MUyaFdvqyH7fBqRwj2T5wZu5EEKhx7eJivuPFaj7yshCoKhqLHESmWC5xAHecMLN28fgmat9pZeHirr14phKi",
  "key2": "65RhM2cv1ZeazeKkCz8eu5EP6PxyPKfzToEhwnC8WxFSVELAbvS2YeNNgwiP5bXYvwaeMsJ1FENfGeMck1qVE11D",
  "key3": "2LMYpfx8mAZxYtm5rf2dX33XePApQiX326fHvnQyoXUJBs9aqvgZxdi1RuBQQe8RvqkGj2Ebdfr2TyH6i694a3JL",
  "key4": "4awTNdpN4HCEq7v8E2LSxHRQdC8CxAMR4yGrgp2Ar3DYZfuacKbe1t4gZ41YeTZoQawgiEfR9GJGiUczf5EM85mz",
  "key5": "5zL65qYhfZjmp7HN61waFLbgtcXPWNzeu3AGYtLuEmcdvxuLcJWknaWQtMXiiwbx68xywaav3KDqcATeutcaJsYy",
  "key6": "xGUytGgBULcecxuEijM6wKJ19cLJBnWkgu6VXf14SWvtaUN1m1mhMreQy5L9Wh3doeFPFG8eg8c7vNLr9k2yTeV",
  "key7": "2Tx1CSTgjyjVxvfR7FpHD113MAfvfotGTPJFpZ7hok2M4ya3bKzAvZ6Grna4ax28WRJDcijWXPDiSrZXHxdjmLrR",
  "key8": "2MzyQmCN3fD9ZJjDEG7mGCzRAuCKgdw3NqAMEF8Kg3S7JE5jZoeaZsopKCFrjs1Pg5WvBtrrq2tjwEN2WioBBtvj",
  "key9": "iMZ2TGTnrLSGTvQ6AAJca2Q5VR1JbUZ14n4Z54AkoDx2P74LGSVwL2sdmj6HgFKkbigwJCEHM7MnMkzwWbhEzFp",
  "key10": "3FLFEan4do5h8pdX9mNk9UyvKzkWhxdiSztUXX7ggpipshv9dHnez9pqQHLzkQVuFtjhZ6YuPBxhTAPjSSt3rwRj",
  "key11": "4xxiNBUM8MUYMbVKNXza5gXmMKa5EceoGFtoy82c1My9PvcjqsnXfFuEds9LGb3sWmpoaqVYqGJWuTHESevEAPRH",
  "key12": "2Svt11iyND1MWfupYx4qCEx58C7TBdCSxd4d84xnsCiqV3RrM8kLreDJmhUtCCvYHA4hnbwX7rFZ5EyzQcndwUpG",
  "key13": "2wcKBuJRhsEnjAzM7CKGJdBLvxAtSqa8dKfxK1hzU45ywVEd2KYEUiYMGzcxdDBTYbohgixXnEVhEgj28ETJob7p",
  "key14": "3jKoghcm4BWTx4VGRoW4SM6NsUQshioRFpEzt9UzH5ELCrgk4Yc3A57NFB2PwYjAm51sByicZZPqmfqqm6jgfa5K",
  "key15": "4JQi1XoQMjNDPf7dGcGz7wGdqeC8mJy5DfnVnb6NU45HXe8TB1M5BkVrCqahfaksQR6R1qhvpcXAiXuYxXrq7tmo",
  "key16": "4ANz5F28KP46dDuzGJx3JT31bvGXCBj1YxMex4ygeHt12K7H6xniNN3AM4inQpbMehmgi6tAaxwueP9dG7CQYCrH",
  "key17": "3QxLXUyPiyRRKpNgep4cYAmnkC3q5dusmLd59zAGU1U3S6PabqXFRZYvSoBcZjNpcLkbjR5jS8cUchEYmM5ou9M5",
  "key18": "5bKkPKnUo5KE1pvgTkGGkJjHKAPUCJZnoztkkCegDwyEr59eQdqJZL5qgAh55ZXJwgWwNpv7aanTyb6Tm7CZYEqh",
  "key19": "4GLZHDLGeTpf1gDQKub8dBQjyUuQX98YHcWQ6fdvUa3p7ECj66JefTqkd7tDAytwAfmpXi7wZXk1ZZXekumo7Pnb",
  "key20": "5fBtogLdDM8hCLKhNAfESnPoNizgcz3BMnU9WggyaLaNCJBicXe5dDgu7YFPyNMANmjieSSwnTmEpcZ81P1y2mRb",
  "key21": "5XFoDDXD4LvhYQCE1316tGdQkMC4enZ9Si7jGTaZLef7Gt8Ee1YYD7pfpxvh96dDoLytkEuTMc1btHjVfibvt9nT",
  "key22": "2ofjxXEW1pPxzLvNXaiTvhZRDt4PHsq7xg8Uk8mXrDaZJifzCazLZJkL8SasQU1t6CnqCrEPVT5dJf8KdhNjL8XG",
  "key23": "5NCh7sQMYzCBD33S1Qrjwqc7iWjJPo6iRav5ocEegXbuEHYBhYBuh4TKn2488bFsLc99e9sBELufPK8y5xetvKLY",
  "key24": "QMu7vLaxmqKKbPxvQjTK33nzP5b4KsBjzH4VUCydxuqNe6eyXtoHvNDEYDrgVJiAZuNbKXMhP5RPdqsK5oBHcwp",
  "key25": "3hhjkSeAduAhsfTwV7KY4XUJ1xRUuUtpKK7oJutUUjPciZsC8dRRZPKrUCZnUBDnqZLeh6aAHHgf5VtVsyGuQaFM",
  "key26": "4zmTRPDpkdY6dA17TRBQdMeCRAsNBoXERPVU6p1UqPu8Wz2CHyh5166m1cHBeLcV1BZXDbRsnUzr8PU9nKRgaBV",
  "key27": "5Vm7336W9zsAjzZDs4dJeLu4hBCJCvoE1PeuMWb6eG47ueCmzKBHKGuuCapwNXFoYrzqL1Xmy9KqWLawr184Jm42",
  "key28": "62bFpbR9XDKXbtmHKoRfV32HZn496fWhXF6U58cfvCUen8SkDuj2PvRqLJmeVwAh4FneYmeTLGZVLJkYKHwb9GPw",
  "key29": "2u9na2DeF3Vg3uZeAok8iqASkfGAMmjhbtTSAnw3V8fcUusUHm4LVsM691KHDExUUAe7LJpQoRQNWEiJbm1kPNXy",
  "key30": "3ZMrmr87A9E2P6AU5yaydyz8E9nuP7PWDkQrebU555dZRb3JoAmq8kHMYMXBAcyVaXjezkvzZ4Jv8kEn4a8U5w1R",
  "key31": "4eR1MG53vPjbZataHFN1r2wRnERdHLYky3WXuVGgUtQJ5eZdJdNn2zvbdi6bzRiKiMjYTWyB7tPDcfKrSbxGmDkx",
  "key32": "3A8uNJAm9zRm7arBbP1NRRfXZZwskGknn43UmuNNLdget8wSxjfVcJPEQh81AdBDcCRLN2y1APz3GfuYyzBWy8ct",
  "key33": "2QxEBv2tScrfQqRMaG7e7iW7WQvpYRpLGdY93BxjXAMkRzHfgFF5oSUBd3BVgi1cGuwWpJUzYQHvKMXMsXEh7cCS",
  "key34": "WBo9ADt7oTct4ZHQA2eDXdgSRSNJLwnbMMCAsr4JUYeFLjiK49dWYTG8HCooX2FYS45jtXe3RKn5iNVupkmKb8J",
  "key35": "24BYQZPFGVDXH1vumESGgx6jx6oANP3K7AM5oVKnMT4PbbhbS5v1f5wjUrnC3zvgNPvd9Q2KFwaLzXRtuLoSEGJn",
  "key36": "21N2U3CEEXgMsZGV2BkHvAB3S1TapPXhnCMpRPATwh34WBzdF4kMocvBDBLViCDcPMsszjYkreT187vZCj3xsTyV",
  "key37": "67pBALXxGoRRTSKHhRmPjxEAMreha2hkbr9tJ6XhWgNv5vfaBQLMK5RXiBPbnoxBfoT4axdZfvy1A6y4nahgSGRY",
  "key38": "2Y9h8zn6TJzMJt5qyXVpFqcwbs1t4CdNXYeTGBAAFSBeN1ixXUJQhoQVxCF8DFpdTNgTStYVTgy8YMnWSTAtaqKm",
  "key39": "32GkoG4HT8rkzwk7YnYtAHTHwwbcRhU6MSeCypUd42TVTShjt7pcU3qK1ZLBPRR5aBMjYmN61nzoh5w1d4ZgKrJK"
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
