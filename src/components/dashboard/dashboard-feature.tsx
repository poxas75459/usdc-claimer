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
    "4dZWQUWstGHjxbYCaHpuHQiDimBJeM6oaHEj1DykYxr63RM5sFsnsDHqHXkyWRWDTFnExxXXd6WdeQqcvrYKrMVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465KdYyzJmm7SbdC4U683nFXzt9GMwnqNRB4yrySj3GFq3s8GU2Nh1jJnSgcro39xFXGGvHW3BnLTtF3TFBq6mFc",
  "key1": "4xFJusFCMB2T6pii9j24xnc8yjdR18bk2xxyyCRzYXany2mJcdy4eB9xaFvimxy18UKc4hbAxAt2QTaU3b6jsJYT",
  "key2": "2UU6t6Ga3k24pTY7RXZARjYJprmhaoSkojEofX2LUKexG5PyS2c75vFGXYqSXQh4P12KvKF43xcDTFPTegEhav7B",
  "key3": "5JJFnTWE4XTjkAXwFSGRDPHgNXcKfhJvr3UFPWofDdzzWjwZTAAaFXZEsxUg1Zm6t2abtWgYxyAN1Tr54JcMr8vC",
  "key4": "3AVE6gQMpjeqFH3azjprbJgGexHGZTAojox3mg5KhipUGH4KCjgPrKWUTTy1eenJehKp3uTKQ2Tu2wZEqJf9desr",
  "key5": "4rGRwwHDTCHbciKendJbD7PMpRr5Vni7JLDzpcx5kz1mUDSNDLacXJu5mjtLZzL3ctuTGiJiHrrSyWqxxAKkkcFR",
  "key6": "BMUhdGEP3XW54XsnzTeWPpzpAFCabokWA4xkwQ81iUqqzsVbdvrYfsernENyy3EL2mdhCNh8Hb3NvrnDkhkBCwE",
  "key7": "2NjeeFqhqUC89uhZmhGzZsVKrPft4CE5kh2kuQ1Suw678k7uYExvHEiK6XpsGqc4tRyZueUftSeqgs5Pkoaw6GRa",
  "key8": "ZiDTrnPY32FXyYxZWyy6ZfkYHcSfVBsk2YiBbvh8auBcw1EubkywDWo3kUFbEzP2vshRgDmEa3bPGkLjTaWnZE1",
  "key9": "cCZSzcXj3r84bbfNmU62nufGmtgqFvDuTkg43rUfEFpkpy2XVrmxc1nhPkxZvthfj2ypM8yhGSXT65KPmcgRM3a",
  "key10": "3hwWv1wKZHuDsSHFch35NCHm4YxVgvXaxc4SUPqEUK3HeQBHFRugVwZGP5TW4SMYYew8ZwDBJyjr6mNDFXPHapLd",
  "key11": "3vxRLWUDNLEyxn6tyCFxWKZUzQWtMKnkqVgNw4yiCqLrjpBGzZR8GmadHTc2w5y7GvKAci4Ux4W4dnZWGu8TQdAg",
  "key12": "V8BbjfSEDRJXME8yFKxoiHtpHF3amtoizt8G9dYiAi1Y11LGyVqWTsPYSC3DMpH6vvVwouPA8UfyQNzEMegreXc",
  "key13": "5RhZ4ntdjtTU6bUpGH1fCtqBgBfidhY1juT9KL9xThXuWuWEbGtgs31i4q7koug1d8x6ftNH4J7oTpdQkZjr8M9B",
  "key14": "4xZpNh3F7Vn8dxZp4x3NqPEyNuKukr5ybWQVmsyQN2e9uXNUpYhARxwTnXz6r5L2zgVJ7rUq5WkLPec9e72B3C6y",
  "key15": "4azyZCgfmydR9JELRL1BWcUsecDLDKcF5rr5b284Pb2eYsJaSQo5GrDkKEEdfs5em6u2G7vNuGbZJ8vKHs2shyMX",
  "key16": "58VDcN4fhw27QbMyyLBNr6TGmaU2ZxLdn5kcqoJ8zU7aQpYpDz1T7XJcqvN9eEozfBD81yCcDBuAq89VKhL8GgFo",
  "key17": "64Kig3Uvz8RjvhUKSsvsf67BG7HFZFSqYxBpfH1iSxHV3mCm1jozG5NCCX5TdsVHwadbRh7j6ExNW498mf7DdGkt",
  "key18": "53x6CkAHnmHv3UDefQVV1fgpXrjop796rVKGXKpBA8AkNefsyDY3AZQyL5c9orVHR2ifYp4FAajNj2JEaXiFaeco",
  "key19": "296tAhsKg15gK6ZgVCBnrSTq3deV9PUiHJg1yxxeGtgrdgQm7dUaLMRuVKhAFFW98srJTSJ2PbWNsmk1SxKB8EZg",
  "key20": "5n88DaKCCGGM6b3d6JXdU17wpibAG9BrQRpGA3zazZsxJGCu69QuXJDp25n1YomUGNmShpYoM2ykYjCDuFN15eED",
  "key21": "3SuiJPobxscnuhXZPkw9EovwcecZ3Qhnip6RcnDTUvctEbeCpEq8f3k5hmzopzWVRKdRLA5y4ezTS1GJsgm7xD3R",
  "key22": "jNXLur2cR2Ey5VowaCP8BuVrfX7Kf6es1TXvZ8Q5S2TTmYotmgYsXXCq8YJRmkXamT3mtDik33XkcpU8RKF6pbg",
  "key23": "2Vs9XPCSKCubCtCgR726rwPNc1ToMx4X2CCMs1KiKm1rM5Yx6gipd8YvBKHfB3iY6jM46nae9LHaG3X1Pj82nZ3G",
  "key24": "4EupJDFBiqjvXENeDTUiZRop5L9xZzT5tspSZ1bmLtcbd8jNdgEdXqwGsVHXwBjsTWXjNsJmFZSAiDQNvSoV7RCj",
  "key25": "3i2Sc3t52kzpTudFUGPUqAKsHDzRyEHa4QvqsQ5pErJXerNhfbnoJLR34L8xjVgQd1LsYmpwDSTrpZQPANaVdeo",
  "key26": "5LjnWF2LSSw2VZjmVog5si9BCd7nVCbqig49s2ohy1So24Ea12y4LgvSmGgqdoQBf5GsMELwXfnQYmsUJHAhMDfH"
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
