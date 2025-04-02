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
    "53kmQVisoVWEMh2kZsShM5vQrPb1CCmimwBeUmKoeGAKPEEihYEEWBURMNHP1NxCiW8bErPt32Q6oY18eK5UK5nV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lnr7mYGZcBfLZDYg1yAHpudtHVaiKZ8L3LGQ9WmzrtT2pXjp7dXUyfGBFRpJnaUwVtQroEVjP8E5jhWCcMK1W99",
  "key1": "4vKwa4nqN6FUNU9v9EWcJq82kqThcreQaQLMgT1KpB2sfWFzJhSfWSJZPEGGpwBZgFLRvGdesb4undgwFS3DhvLq",
  "key2": "2yLXkJ32tAZAu6bGSe97Hs89TyNA2tCWUYZwen459SKe6fFM6G7N9nH4gPf9RrY7znDLgoNKa4VNGS1g5uApiPg7",
  "key3": "4KTSXTPv9d9TrWr2CjcmYKGf3VbwtyY4UJTQ43syQAMZUscMBtfR65WmktJtzMSPBJciCSBZppdFswgCVF9VdgMh",
  "key4": "2MbUw1xGgH2DphsLb9RBpzjmYpMa1Pars5CzaQV7KJC79ZCYcx5LD2i8DdGRi5Fi1oUfGPpVJvHW89VtYC5SLWFr",
  "key5": "66Mt1w5tncR1WWCqKNQQEat7HdJvnTH74FgZkhR31zu9nAsTAHtqCn5Ty3Ytr8XBafoy3QAnyDXuHdQqDsXyA5wQ",
  "key6": "5rZRiXD1JNrnGDwXPGpGjbMVUztUiTPCU3jCupefZ6humvq9y8RKAEPEd6iWr6ywUiVThrNQ3afuJhBhAPZ26Yir",
  "key7": "56UuEnw7p51zu8uNAhmWU2sAM79VnUXKjZoE83nPTDg7DdRSuJpUiAU7QcGmpjvnLmg3493HDSe1PekiNDm1VdUm",
  "key8": "4vAKshSmo6MWJi7LvjzNDSc4Covb74DajHpFYqw6DQvZZsQt6GNVGUAeubpWh3sa9arphW7ebUsVcx56YKDb9Lnn",
  "key9": "2mrzm4HvN5mKa7wtDEzFSaunx2Rp6neH7YF2B8Z9z5q9Y4Ftd9bJb8DuQQAq2pwC5MjhZLXpyN3HRBmBvvb6PHKC",
  "key10": "24ePFvzpJMYt21m4iexZhcEoVvExLNKqgCxvVT5ra9M5pGHHgFBBVG9PSCaL5D7KKUScwEwdJb13Dep7JwnwVk1k",
  "key11": "61N6nRkv89CbkyjkJ1aeC3eFT5qdPMhHLJ1YjWM4gdXVKFDCHdR4Y2dFzfN67WgrQoNM4m3xVEhKvcg1U3QmXVHY",
  "key12": "3Arf8jN6REEf4tL1nxnBtrBgLLw6YDZCsc963MwoTeNvkPt6RAK4FzwwTzzX7sGeXo3aHVwX5v4PBCz8rzySs7aJ",
  "key13": "bD8pb6yTh8NWak349vbqkRW7xUEXgTkRb4V4ZoCpMnTfnQZguSA6dCrjFoSAPikh9ibPGLN7nzEpH3zthQ1WMXR",
  "key14": "35P36ZTue9r2ZP7SJBw45Lkhv1o89HPxwmRbavjVfJ5LKsn9nhjFkumLmXpVTmPjYqJLrsdfGeoF9XSSfSbCvHLj",
  "key15": "5iKWMTnEFKSRjLhC5ojYfysAjCwC2w5pkFe1z8g1SLNN5au6MBjqqKt93fhroYSocrc75CHGVcecB1nTPoGkUKTi",
  "key16": "22QupFd5xRX2EtpdbAmP7r93NFzQz6M4y2qWqXo46bEbyEvTky8638A3q37YohynafFZZCBFUFFPXmEEF58NFJuj",
  "key17": "4v3U2BRSK3LteMtc12dwvf95bZSKnkaDPF966iuZiK1TgFFqwpY96c4k2jtssE8VDfuDcrBmY3ph6vSay5txJXDn",
  "key18": "5Y1Lo6LkTip2NFhsJ9YHBJUVsU3SH5GML3oZsrm3oxCHH8NtqaW2ag9MmehueV27ynVrE25G1F1cTh4dmiFDMDrv",
  "key19": "4r9fE9i5anCj8oFoxxWiAhA42Nm6ZiZ4GjvJNQttpnsAy6znTE5wKFiirhG3VkMZS7kvsdbPZuA5gtxyFgydZB8X",
  "key20": "5SsfsLZhWjExtmKqTFQjEYd3gabrLWnPFE9UJ8ymx1urgnusHGnGAjfeVHrCGcPfsyyVGRtW73eK9ySiD619ys7w",
  "key21": "22zCFqpk9eByiePnKdPAaxZbqXJDhZEpDq7bUwwLq26n75JibQQP29ZiZVrYVCfEUdRvxuE9R2RbFb2zHbvUgdjZ",
  "key22": "24gjYhpf8wN2mTmQANBUrdyhWvpPAz36NmPgCPwRKungp8mrNA92X1e3PpAGxQbztpPX6sHmL5F3rk9WQ2RLZRoH",
  "key23": "53wvPDCsaogEEYbr47DaqdWgiFNSHNBKB5gwLXSbKFZgoeh623MmfzXmbCeVv83uqfgBqDK4NcixrHHPS4RLiX8P",
  "key24": "5JPV6HTbsADqerBmkhJQpCeyNtKyeu89M3duQoXtk4E1QUP1Uc4XbqXyxcp9M8QeVRpBkZFc8CmvgC2XAEp42Gfa",
  "key25": "48S5a4kre2QVkW37SZSH1KJwXhk2mMLvUDJ3QWzjH1MM4Qw4PpcQECEbxT1QBedycXjgtFXCkDY8gYHxcuXUtzNu",
  "key26": "AFCoFUf72P6kVPnbBo4kGwArdsA7beB9vGm5ruKSnRHnENnbiUF7nibGkgECUZkfFmHHub3HXz7UpMKh9UHo7cJ",
  "key27": "4PGtfZRM4Q5PGQyK8jn8smFybBYShF64qYpQj8dSZi4RWSpTFL7jUYYVRVHERLNVASG6HLFzPwqvqFNj9Z3w4eG2",
  "key28": "UkTChWR71DGKsC6PwGHWp2iwSN7tzcYdMZxenJTA8nsRZA5sEzCfD8Kedwq7gTzDYLocXwgzQE6NjVrJzR5jC4X",
  "key29": "5TcNjnVJMjQ6ofWe1tt42FUguvy7CBkgGWYbbt81sgXp8GyWndwguGfnpzz3RtSyMxUFG89N7vHemcxWuCL7AHhi",
  "key30": "5tfHUsVGoTN9kdMwy4MXApvU5WnjBgszfgzkLCV4seygpTDJRMVXoWcSHM93QHNvYoNhVTGMXeQC1bjMxTanNM1b",
  "key31": "33TxHuLd4ibERs8or3o4rcvJsu7aNAmgmkFjyjorZgjDzXpbGS3npf4TwTAzBrPmEGFKWWpFKe1kviAaSPkB8UxJ",
  "key32": "5prtb1aEFi5kHVYkHzr5ExVVi6YCnZaSfWzvGhHyRkF7JnRY2eoxsxJXLvfuMTbSGXFjbiPXk5dSpzbdYE6jWn4f",
  "key33": "Bq36ibbkNYv3fKsLuuLKWdfg6hyZujQbWufipeczVBcDS6ApXdmPRb8KNQyuZYLBQKJaVcW8g17a4DkTGPpYJVr",
  "key34": "5Bvw5LE53ZA7TjAWwguwwWdvJGZVNzicMhd6SuSqLmEfZAGoibhADMApSkSUt5mHsgqP6EDbwknVhMa8gqG6m2WD",
  "key35": "Tu4oH3TxwsbqGQpHX3G8AqZEtkEJ2346m8Cj1VfLwT7NaUr8mBk7yfMxMFFPc43MJFy544LxV2Fef6i1j1wFyXi",
  "key36": "3JZPoGd9kaUhk13U79iVgddrxXCScTB1yFM9wuwFEDF7XjU2pRS51HK5mNJPcUsFRo4N5PFfnJvwrqHsCDuaRXpj",
  "key37": "2WAFHPEw3mpbh2CMtJUM2GCVoXVbcce4toipUUw4JcXosWYALwm7xguQ7VxNGQErtHfz3SfnvAtxmRLkpkfijM24",
  "key38": "64av3hHKp2KEPJmeAn5zmZB6F9j9NzGmb7wPGUHq9j6h56JgKdU3b62sXY3Vun1uEor4e7PupcQZk3H4mti12HYr",
  "key39": "2QMpwSXBKtj25UqSnV4bTT5GvBRkaZdJfissG9PrNh5nN46yXhzqu3AKkBnGoBAb7DNJkFdpeM9Ts45KETNJyH2T",
  "key40": "5dkvxbg8MZoTup5XkuPUCvR9UpfyKSM4QykRmMNHRviPSdAMPTmdBKtkTB3QDCEhRXt2mMhVRNxQEKwXmXfcWq66",
  "key41": "5s6wtNehRyDhTrwrxZGEQ9yKfVbPrkPqs4VGaeYpCgWhnUoSXtWGeCjTQWR25p85U9tVGXmR24Uq7qXD1CD9A7S1"
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
