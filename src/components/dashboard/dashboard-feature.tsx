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
    "5w2errHhGGioFsr9DwEU6Fqj2i8wjxj3uDEW5nUuXXBQyFx5pcnaZENNRPRMHEpAAkq4eVGLZ9CqTXuWWE5T3SrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R7JSGAbBW9pAzfv6jzdY8MpyGynbn2jyYc9ZSXkkibUBc8ZHsiPS96sTG4b5QavUW5D61LDkeYhfzjHGHM921vV",
  "key1": "sJXYftacdWkUSyVbA1hKSs2zs1nDzkm3JnTpxms9Z8Tjeb73QUTqs5Yk6R2uDgxUAWvgHNXBLi4sUYYNadTzEes",
  "key2": "54k1sgULz2Xw6uP2pxveuvnNgiLoet57ws1Mbi987kTP9kxDrDKf3h8d3H5aCG2vWicZfq59teLibRgf9UJ4FGZd",
  "key3": "5RtzRYZngK8TecZFJUzkbdf8zfXEZvni9Lyvggxp7d5XhzS2ye6r1E7bcwvSf5hiPXwu4K743WnBhro7W64Wvfp6",
  "key4": "5FASFx1cAnGHGPE6CvdDZxEsVWSqwXf815M4hwRnDwpfDxEQAokSLdGqFZ8DLVFEL5GMpD8CcArgL1JrCdJJA9gV",
  "key5": "4WEeEZ79xzXPBXAPtEv7QAaSaECDQCT39MvNQg6X1puYkXVw993MPBrGVKMiB5eNWZi1Xa2mCnT98PL3dBbCnadb",
  "key6": "EsUN46wRebfYMjxUAjhWR71er65D75kYAqML1E6uzUbrJoStw6WZEqDkX6wjWWvTThD7hHPZHZFHoNSYyQbhhTj",
  "key7": "5hhzyA7YMVC5j1mifvBn6QjTmMRe3Yh75so1xS1TF8UTbdGwiV4XuHj69fMYvbRneEFXxH9DtmUAzoPuq6diiVfh",
  "key8": "3AVEB4UPkhiKWRZBFBN5uEn69L7SpQYmAW4U3JY1UDnQJzW4jX3cJQDdpQ8J6HkqWjwGFQYchXg5ryNSeVCwcSfB",
  "key9": "SftbDq9CGCoRupbrWRCf1fgqvBMndE8ZnHUrboS2y4rQyCTF2WqQV6HEhnQVamR244xnxhSvi8UxN8enyQB3BUC",
  "key10": "5K9QtspW1PKodHcNspZiXUi19y3Ldf7nmtqnAErGRBM9DejP5cdf6BmM8tG6LWKyG2rHw1hjc6YLZyTBsPk8dMKe",
  "key11": "4UfxEyFGW1BZ3iZGJJp33CvkYEoA8hnPJAK5cza5BhmzueKSKLCcRfNCebRovqYzc6tcMZhCqoXSGAxxgYMrACRJ",
  "key12": "3NbDDL4bnrfdjAVeAPRXoBGCLkUJUb4aQzxPR7neQnzbmWAuHELDxDEpETssCSCV6Gxp2c42W4GSRgSZ3PmcwCjm",
  "key13": "2ViF4hZ2KY5criW96U9zQsb6UsMzvKJct8HVdXCYBACUUM4fnz7swcpqo5FSuhdjFkcniAFCSCWMGtELr4NvhvBK",
  "key14": "5vRruNK6K5cFAtYR3vZrA3UzPqiw6jhAUqo89bCW39cNzNSTdoUcYrdL2LNJT7Wx76yT1G1GrVaXQByTSTpvsCi6",
  "key15": "4r2WDyW4MCoFuXHPVwkFWM1wbHUS8N2j2ejmXWGz1ZvqJmzHLRbGibyYQzNfVuk61o4PrQKpwoJbJG1fpXMt54VR",
  "key16": "3vSJd9XG2BqSsjhoGwtxntGw2YxbyRC1LKPKGgMAp9JeGqorwk9JDSGGvLf772FCiqpDbYRkAMT37mFyt7hbxGvc",
  "key17": "2ckmcVrspfXCvTAitxa2832TwrpJmRXuUeqLzzf5a4raKA5BjPUwoLY51gf2XdSMkTgBEtjB2y1Cv6Wh6MEeCsAc",
  "key18": "5CxHo58NbQ8qR9jkfC7gyMaJrKoLZSfhSHHLtsoHn8HVRjtMvWtcMHsyDmrozF389LmMeBqGp5msynY7wDy3UG4E",
  "key19": "4248Ze2QqxN75BgawZ5FaCc54QbFQNuT94UV1YozrSfgzcXmNjJxSnKp9Hv5FZsqozW2R1SojWWusGoVXjizqv3p",
  "key20": "4ZHcZj4WRu2w1N7nqJTzRrxWg4doRMT39gUxugq4YYApkoc3u9aBh9H8RgmTJVxw9kp5qHWDi5LjNVqkEnQFp73R",
  "key21": "3XCoc5mN21fE3PJcEhDWbJSwuS3nnKmg4r8vepDiFMiGAsmMErskN951V3wTWnrEqmJrbLtT7f4DU8XWbSasRmWw",
  "key22": "3ByxpoWnD7U86SCAyvap6G9SVPFm4vz3b2o7s7YLRCCg8uwMMtSw9GHECGTjEaJvubchj8uCBQt7GrHmDcpqiWxy",
  "key23": "66VSS5D7Sdnrvdhsq1t7kqiDLm42FJkZNnaetMm8mA6J3QN47PaBecCuNcp6KmK2LhkEbwvPCLaATUr2riaFa5AS",
  "key24": "2cjjRKiQCPFySD8fJnmUJvJEq6em2HihrZUnLG1ycsj9VouowKHrDtrWhwV6HBkdh8tFHjgfHJjC7XHpkwMy6hUN",
  "key25": "3Zjjx2ewvj1vAyT3YzLtHTeJqhCgn7puoJePaTXuwqUaErxi23nAfoT55DTJAmMw5kiLuTgKHRyRvrZTU5DgigBs",
  "key26": "5WfP9TeDtstz4ndcztCJQ61ZHvrF9kkSrgjf3LaxDTiSfFUCvqukrbYHzax939r1Ku4gGqz6x7FCP6JrHJk6D9qH",
  "key27": "5YoWeH7acxhDmH1hjQqJndCSYm7eZv8PDiMcnYs2BQ3yUqtshhZBiRyu38noAWixWDEZGQ1PRGK8xc97Ma6eSbiT",
  "key28": "Gi1QEJKrXL95zPVJpwrfRDdWzeq63JmC86eLdXrT39mfbZEYSkfgM6sRN97rPhcVSn548yNqpCwFBN9PjGYxGME",
  "key29": "5LZyMLZW9jvskPaHyLUMEhdD2zethLsU5NuKfqTyCwpNtPPskDdBmouv1omvCZutnx1hvfNTAeuuJWvMCL74jS3m",
  "key30": "5m2qBo7gSuWE6vfptXmG1MJjp5HYEbPgw743t3PLzs3xH2v8Rt2oGf7vxbchwbqix1P4b5JVi5k2MxkR3bu6iMzu",
  "key31": "2nJcS7E5mYA6AMrhUUnSFXLFph5os22oxGitifGAC4p6e3CPFiT1S4wXg1veUqpA9ooVmvvKVhjMakmDpJwyPVxS",
  "key32": "59u8UQE6goqak9yKQFjpXkcvHowAKxLVDiKzrRhaWxCEc1o9mGKSwYoAbQFx7Rq7ZcRWPqEFU2N6fSySZoxEh16g",
  "key33": "2gEkdynYEXDeuCDtE8CTACCENRxRV95RLwc4PPRGezzQ6sb8WxmosBhvjxokxTEAGjpwVu45k8Wi67zdxvh9kk8Z",
  "key34": "3CGyasZYCFkeRNbd8QDyaQriaurRBuqvxB6gUQZxo1mxPwodNPGVvVFx9uyxyMaL2FSE2xZkx7fYM3474qpHiED7",
  "key35": "2XaKf2E5nqmAy31V8GDuTN9gu15iTadwjWTQN4rARWaCNtqdwVH199CMB6wueieECzXAkkGD8QJdeURRGTFwEqXe",
  "key36": "958Mgtfqr3bwiks4Z9PegT5ukDaCCBu8smSELsQpyApitgJYejF95GSRhXyzZkt1aNdWpxVUY3VChPUGkNR1o6T",
  "key37": "4AE5kRvdzT4BV17DrLJux3xFzek2XWYZ2LkmwDyArAgMjs2jPFepaEYh1RTxJ8TZEXvjS7Djo9RN6xsEbqumE3Y",
  "key38": "5va5kHJcnLsYE1J8yCoJjcpSMffEazNUVDcF8yT7AMTPjuW7gSPeyPjwVipikcehvddm3x2iqiXfh3u5yfpPZRUW",
  "key39": "2p7ujGjyd2itwJECi2UCRba1Jhic3jamioTavT7xXSAWENKtArwTsSw2az7U28cDUBqsiv6rwgC4k5stscvty3nM",
  "key40": "4LrDiYm87ugz1KZJp6A8uZhG4bMZh5K3CPwQp2guTbEUqwF6fB9dBpSsFS2e12HACgfieLd2BDCD1Wekw4ogitSq",
  "key41": "65h6ii3XaRBxJAqcRW9omVQWdB33zTy3JPUFGtEs3QH3p5eAXRpC3M6y19jbjYxgMntoGWCfhpe1JppjK6exDbP4",
  "key42": "4wbcXqtfnMJyd7hPEGDCxsmwAZdibM3VbwmF4P9PwtrhTykPTgVpyH7GwFmzeRnLcFjBbZPsR1T4eD2hpAS3R3cS",
  "key43": "22EPyUxVHifdr5Etn7XwZ8RQD9r6zd2gDpKsSh9RyCcKm1xgF6QUrACHTCBqhDM5DXBX9zWQdxj9ss5Ty8whvwJ5",
  "key44": "2sNEQTK2SW1kNwcoSNQizQCHvycRdrxBcw9LzxgrmBRf464dSHV3FBJ9XCVAu14VHTYstQweNetU2dd532jQUubF",
  "key45": "5doeCvGoo431TeUQyeMznXQ21c5p41TmCDz6aQewbAcw4S9ZERUeruNukPBFSNX3JVdKxiCvc68yqHrgHfhKNAby",
  "key46": "5xgk9Tincmy8CUYBDnpQBD6qLCujzBF4kxW1mHog8KwupDygdxctnVo7q4RY8j2kUAUPwu4a7kUhV3bBBU2hL6Yq",
  "key47": "3mSGvyBEaPkW1bYbvyygG8EX7k4GNkAaMjT6XHpvqAeTXEn4z5zp5rZ63xLuYqFnF65RHdqFZYHnTpu9VAa2qf3x"
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
