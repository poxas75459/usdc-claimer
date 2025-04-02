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
    "4dgrjjHu6HAwdu1A9iP2opuswqxHBn3Cv2hKcvVZ2c6wMLA9hUjHeVaeobZEPpQkj5UoQBNzodzeRx2eVtSCwgZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49x7sox1TfwiH4uzPimgA8erZnq23oQ4SfytdUpS3gtoz8Y2EEfL55CMdiKfeHGm4grDCwVUkKsm3Q29WLuwM6US",
  "key1": "3orfiaXfRq4SUHML4aNVuvfSjV1YhEFp4pcS1sArc8gV4PqMZxBu3qwVVx798AVbQ8rUGLBugczutusosPkY3GJp",
  "key2": "5E6G7WumpRLXCXNGoYTzcBumqGW4LhzzcD3Fk5ysAuHqKE1kn9s1rEmY46xeJg2njh87QKiHSHRjRfz8f4uDzEaL",
  "key3": "5miUr3w8b1WJseggvVD8ygENQHFHiMiXiGPrNwc8GJY8nfPzhWZM8DvbvEZnMH157b3qRkmqMgmDaW4YAzRZATkv",
  "key4": "4HuDK5G2e7u1hKkNkvwEkybZgDQTGhStxeCUktCLp6kr5KVhtnXr6yz7jQEUhgWYZVKuvHkH3yjrXSVeFo8jAKxZ",
  "key5": "wPwwzkmpwV5yzj2t5jvp5M8utfu23KidG6QDzgsUFkgkZK2efecHudFPZ57SJC4hakaTGTa3LQ5tYvJHNKtkaqZ",
  "key6": "3gx9bkkkF34kEFL8RvdZHGnZ2DK91dokxDd4XtPq6EyfvwSXgAN4VVzzd564CFZDTEnYBxzX4HEn88m2ABTNi3oW",
  "key7": "shUiMG5CWuuJDfNmY1dh48MoR7LW6wwTuECbgqJUtw6sF6Sk7dDQ19ePMJhMg5GGixUG85dTLu59WkyDP6pwXeq",
  "key8": "3mGV9BdAyDHh46omDsJqFmCECMm9dfyoMMzzMhFZcKLmXGiVe2Vw2TiLGKQo7eqgP5G6K4mR3hfwPLvLrYEa3mLU",
  "key9": "5XFL3X4fFP6VHFyEP43osY4HnepMvyS96Mkq5mvYewPst4NXB3AZp5tgrqBjGPUFcgDLYYgoxi95d1sRbYfMUCdG",
  "key10": "2jwAD4sFEkXUvgJikhhksJBWdxQgAysGrF772cYLmheTuxR9kuLatzkR3JfXVX6H9K89hnuT7aDzXo7TFpFAmswz",
  "key11": "391iVh7NWgzq3Wf9yitn1N6Mt1GxUuomMYpuUmVGYWEHvFtmXVnKQc1e3sDLGfwGrEzkdDg6YFXrDb5VbRnVwQ5t",
  "key12": "2E1db68Bi4vV8MMtE8NsyuH8LBLceGfHQsEDnkK55w4s9EntoiD26LCy4BLZtRGPcEXX9Nhsyrq6XHpNuGgz5wXx",
  "key13": "4VZwQSqssoCqrg3r69mjqiPfwQeVYF8AUMh3TTZzSYwbVAkjzKkdk7czA1AjLDfypaEh1JFJxKMQbqtiJyaMk8WZ",
  "key14": "3Z18UfALYjyy64dXMkehiparQ3bnAAFtJXSbumCD8jn1ow4d8whij5VJV4yfgeQg7VBic8mdsDqVo5nJs9feCJbC",
  "key15": "HL7DXK2XBHaLYPwTdcRDGszfrRsXMPkMKrc1zuPsj4RCWfC831D2rzyydvLiqhE5LhuMrEnh4K6e1qp67Bk3KuU",
  "key16": "2Er8cThMZFj2LEpsU4EAXscFzra7Y7r2uJYYUjfRQXYsAzgk1Nm6Zf97SPfq7TsnkjGshm1mbiqWFuv6mdDAhPwh",
  "key17": "qkt1487yg7B2Q4HrBCEctLnKiCCxGbvRruK4a32WxJ84T6zRTXF6kvrRyg7HZcKjfSNvQuVavysNP1toqqy2KHm",
  "key18": "2jvsFDsrN7jSpZ9tuHtuQMLZjSsx2ZRcyJ2dG3g4nCFCch6HJAUmv7NkNxgTGf7PzNX9SCfVFhrMXs5A1nUGGUu5",
  "key19": "4feEyR3rVSDphFQkRm2Z5tMTe1THcywr35fsWykeGxB9z3fN5RD6CmffBtMgiEwA9Q5guLNFBP5DNzvDUQvUp63b",
  "key20": "3VPWvh6uVe2kFQwxn11atew7B9VZ8qjyByBGtwgqFkXqWmHwvM2zy1Ft4mxFA1GAb88k5PYi1Uwc6u3856eVguVP",
  "key21": "3V2S5gMoU59qPuUD24J8D6JDkwDGizJX6dz9fGcu7eX4PiFQ5T6ptP2mbtLEiGBtxuVLeAQp2ry5YpzcxHJdSgoi",
  "key22": "3TXwnqnsQtYZ5nQCX1EEwK5o6ojpBJn9pnu58gZt3cDPysNRrjRfgaeWmxcyNgcDWTHMQi1Bza8ypxyqu3Tj7zkr",
  "key23": "a8SAfLszag42uC62eCMAbnjmk55hYwTHcwk6f1pvHVZFDv3x7R7mjAwFyMNFJ7DHBkZKKvqavuNXMd9Hbi9S5Z6",
  "key24": "5EAD4fU2JuqfgsToQHuvMn1tmk7vT7xxVbkhY2Zk2fHD8y3epaJgSRyTLuQmaVxSmwj3b9SLTc8BTzfctAkjsnCW",
  "key25": "4ataJFiNNiNDgBdb22K5dHKHQYSviDVfCZND4Ppnv2ghLzxtkrjhVMCMMr64KTbWKcxHM5b27Ygam3AEtyz68YqC",
  "key26": "124turDUNLy8U8Td391ZMYQjj71H83GttQWFrvDp2zDUJwwDYaUixQWksUjrrg8EKqAMcQJyEkDRcVZtYywYtBDt",
  "key27": "2pB9EFeWgYCzyTz1Y2Y4Ybw8z5TpfKoSN6Net9UQU6e3NWCYa9CUenVAwSKNYmdQHB4crhBRM8obbNRbUHbbuUpN",
  "key28": "54wFxsuS81CvLH85udp1RFDnYPzD4ngRBEKg2gXPeJgKU9PtkgsycWZr7wtqWZavCdtRmACxVXjNUTVoonXLyo7F",
  "key29": "4xaaNL891cDyWrqvgTa1uVixCMFFrWMhCSHyN2EQEwaPE8FnAebAGNfQRCyroQUhWCdHQ56aGGYnE3Rd6Rd7F2G",
  "key30": "XsrcV9R6ZmypUmjnEeVP9dDZ8fNhC1bGRny82KeqCuxuscA6MjaMgYJtkyeATGHEGRDUZLRVWq1W1GpM4xV8Wze",
  "key31": "39FcHhN3yYy6VxGQEuYvV4qXeppgb4KqyesF9uJ3BvFgfFTWNi8KmoUWVyYggui1LuPxuE6KYmRJLnMW8SHFFWMe",
  "key32": "3ULqxDpfLD4r6BBA5jgSGmEPWwMwwMSp4fox62KSU6Q2QKpeRJpeCNC9UhF8sySps3tzdCWKffVwMarDEJVt7dMG",
  "key33": "2kqgaWB77raDvKzewr4W9A3mES7qUrpmcrMPHFMEDY4C44MDsFQhbpkX2pSPKUyWEFXPxdVwuRRGbN3dXS337DhP",
  "key34": "G7zArBXpF3kgQgaAMiyGhnhq8oZYgMuCrdVzHBVpRfEfKiJ8zsFCwBaG3sPt9sbPmAdq3qtiNp58Qp1mGaavh72",
  "key35": "4w1vTSoWJ3proDgekyKPK5w7MU8fEheoNuaNcoCfvuV93dNBmeA9egp7QK5aEDB7inXf4zwuiZJkmwk5nrCFutAP",
  "key36": "478qgLVkVTnnmqWk3ABERV9p7ShficdVjCXJtNmtHNLMLodnQV2faYdSGNanCJF1RdpQNU5rMXQYCowYZcJ4tRCP",
  "key37": "5rofrcmPf5jnQ7jYQSPq3ppsRY2shZtRbMePqrfdVkW9wTKGd11xRiddxK4ti5Hef2N5RhahoxNFyogWsqoKHkcK",
  "key38": "2wXBZDwACCtHvdECtJhpvuBSHkzMEHUc2rWkfX8bGtXX88Xga9qpzARjaDpdrAEefFfQxqJxexqyZ1A3xS7Ezfgg",
  "key39": "52DJQDEh1WnDDVAmoHdKJHqkpJVR6MYnUgLNxKHAHrHyFXpeexQJwFSeiPDf75gX8NgFufoYgb5P2MhpHNXfzxaM",
  "key40": "3u44nSGZAyKGzxomPRKpJhRbfi5tFNYg7Lt1j4YmaFHaXKvpCPFokieCquvyH7J6GFAyvDGX9B9TKMBqi9dJHWjX",
  "key41": "4W1hfnJfYZM8Rc6smavCwWh9guosr9ooppVPmvELZvHLVj1FRdkJQCrigR7Vz4dvP76itY5kHKqiFv9VpC2RBcn1"
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
