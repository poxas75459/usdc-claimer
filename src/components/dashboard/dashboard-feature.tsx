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
    "24b3d21swMnzmm2H4QZUckAw6QE52Ypwtb7sH9uCLHX88tMXqGdbcaMEDpYnvoZNU7xLGGoNvywABVNF2Xv9q1r9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pnetwgpa7Ex5vqSQ5w3LLxhiXRsxg1Y7kcXQobF6kMa4Zqn1rQc8nhb7nyZrs75cocyvZC8cNwwoAive5PuAmEJ",
  "key1": "1fpuu4NzwzXuix2J6rccvYAHSjgEoXrxeKviFizqcVWyyA8eJnj697rFXxeRKxavKZtLwVv7cumALhrDMoAwFWD",
  "key2": "4tEaaPDSzkVqughoH7U5M88G5z2LzaKPXqgdL3KEeZ2RYqjF8r3ncsdHVwTS2UjXeaygttB624MY5SrwHoZpqwYf",
  "key3": "2qXKbMqveMEEDFpTR7GUr8mkWkRaiyoYbMa34wYAGAeSomxdtwndtXcpwu5P46A47WKoxFKmgheK8WWL2wAn4qgq",
  "key4": "64ta8Pfrp8QgmdErCAcfvBQKGmFuh2p1wW74Gq4PVi1iisZDQFBE3LcRZUY4a9bNWHQg6VkXcWi4LPN5YjWfc3S4",
  "key5": "vmo3mzpD7UPXV32XwU4JmNq2dRgFPw5kcivmbH2z7wbQ8abk4iRKkSM63Tvqr6PGzYtsk69sVegXSvgw5br2Eqp",
  "key6": "5CfMew1cfbt1qweTELHjqb2wfJ3aSo9VTo3WXmxzX9aLExzE8R55rLj93KCcdH7BHGCHGqu1b3YkCZhXydt4xxD2",
  "key7": "kj72AKwnbfUfz47gSPYyHirsosPeNsJjHqEGJsv38GKUY95g7ccSVkELrKpfbg6xWy6vzmvFew1uwyU7wQiSAuy",
  "key8": "3v9uBkVN4CkNymaKkSyXGwTih1naxybJskFVqHdvUEcLMoyjr8DKCY4qfoW8em76T2wZvsjfyPyjFmFiz76TqSJY",
  "key9": "5FaPaDC2SCP5TEb6fBYa7r77dcW7xxKhB3sUP6v6AtawwcRg4c8TvB2YoL5rrGsDgj9sPu7S6hMAMFsPmFMUGFDb",
  "key10": "5hMQu8zLcpTpuy5SwSjHFxBR94BbaUQrFvL6Z1Rs7VWzPmSWZ2a87KxWNWtg7d75oEejwKwsapuLNRdHyuk4co7T",
  "key11": "5knkaoZUHN2CLCReiS8wYfMej57Ga7veN1khVf2jHJBZiFxpDzmjRbmBkUjFDmS1oQh6VmFnQv5wdnDDjgKLFmRt",
  "key12": "3Y5SjzDQ28AuWSQ1g8td3ozKaQ6Fid7meu3zszkW1GWDKTvz2Ww1jfKWeEdeTdGXU2QQC51F2nMn4RjbGv9DQo2W",
  "key13": "4gvtpfA9t6UMJiULdSwcmm3dU3AkGsooVgenYsufo7r9SHAP2NontcCSn6cAJMpKpPh5uH35WcRembjWXhVc13iU",
  "key14": "rWZ4Y23cfibhXmMs8h4TPi9QfgiFFGDkWbDFjLZAGVaLxktc6pxwCfpuZ9RBLuhsGSg34PaF5T9NECwoM4i4XPT",
  "key15": "4dbEVFjcKfQ4txYzjxN4W4rF9LG1k4b7i2HkcpwhJJdqv2G1STSTbu5sEG7CbZkrF9jWRz2CpVzSc4mpKUXkM9M6",
  "key16": "3oVxebeBc31wkXCN1sxMhVeG3fmASQNMghFx81uosrqPLvJYmnqSoLDwbcLyoegnpqCyenx9hzMXXUAFogDphYNN",
  "key17": "P4KfGewDteZ2gUwbHFbtjWG9zcF1kjnauodN8LxfMpSy2f6dW7N8bKzw3WVy5gGhCjEY8ek5s7jfUA5sUptR8JC",
  "key18": "2W6oSjZREnJoT3mb3qJZ9hy48pY9E4EZm8sKHKRAeAADMqRBz7RyNCaK71BjC4uPffQEoR73CjtUSBV3Tq4uYj17",
  "key19": "3Qsjz5YKkcZaskmgFv59epZSDrzHFbWHwopBSwRUsEdwGnzwBBrQBiLUYFFQj6QqTxLS9KTg74KwTQLfrNWZTRwV",
  "key20": "3GaABNEPQXZ5c2q3FdHBdfVhBwHz1r8bGL9Fj3BdEeNdgf55EioeZtAxJ2sszEGhgPPzZSt4VmdgBVQNt4Ubj4yK",
  "key21": "268cDSzLYGG6su2PHeVL7mZxgtRCTsAnLZzzRiy4a1SQV2Zuczjq4KATLL8XB24ubPQviFnpV35zJj4eAQZLsp1g",
  "key22": "5w8gVMwFANDxZqxMJ1uic2L3AEfWuATpSYjVsHMgSQK1H5zdyeQkMkPy7wgjpXLdnLudgHhAasXrUVJjUCspKDVR",
  "key23": "2HZkxaZEMAAttzZRNWW7qBAm5xfbPdM7yTPBcFpi2JwMbgvX8fgFSG9RoYhv9y4vj1wrdHR5Z7rvRrBxtWKjwSHZ",
  "key24": "5qNrKBYb2uAD49BHTRiaeTiPq4LrwHy62z27HBYrhYc4kMiwMMD7mvVCZkXwLavJTtCZa5tsEjmqrUe45Zv31Z3E",
  "key25": "42teXRtCCVDTTLN53zjmjvtE9tJ592VAkhV4i887nJ31co1jqCDHiq6VvewrZzJkj8jUb8zwaSWqSUT2rKTELgAW",
  "key26": "5E7TgP8LnUZDzADFBs6AnwgZVib66GmPT6yjLk55LhQgQuF2bNYLzBKMg5sHPbg1E5zAkwQ8wP9Qe7qWMBjy4wsH",
  "key27": "5DVvjZbtF55qCPfJb7dXEA52GtZrjAK73EVUZCtreq4GhnA5qzJLJM96eLrr6wkyN4rurTLaiQLVkzFNJD4ZDVKf",
  "key28": "2rQs7uLCLiM3aCrm7DThDruamPR2W5eMcxYRNF1Jv67bx8LjyrPQmrBGH4thCWV3GfWR15gAK5vf3MjJiDripqJC",
  "key29": "4bypoSbQxHTCRGLmB3jS6hMePsnbLy2RvppHGVQhRdR4pt2NtNbBmnUYVYrca6VrzePdTR4GH7Z9hwtpxd3652W2",
  "key30": "aPN5HVPx45odQUH1xAgDapnzgRcU5a5hKeLy1qUhRhfVdnEmGTML48GDofzHDS5gorBdVVkPxqfGoBHWjusddtr",
  "key31": "4UqpATC2gMSBTdzABUgjgFDpwBY219CbLdF54SHzfsXcjFDQaewiJ61wxyEznpYdN7iVrDeF4T7k3PxU4KNdvEPf",
  "key32": "3gTWZvCoC3wGzdHjTnqgg6yb2ztKds9iw7uoWqyqzyLzYDumkmDZfeGtcTCvcvCNrZKYaLCnxh6H4XVvVsfVLABd",
  "key33": "64EZcN7frRZ1CsMtToyb2bSAUwz8UhBQSWN6WJ42SHrDuV2PSgc3a1RgdUG7osofe7Sq67Pa2VLBaeVezQY9deUe",
  "key34": "3dJ3gsQpFHAT8LcyjsdBQA14CCeivz5WFAbSn7rNwpiyJ5ckViX6gEum5MCLVk4jwHvM9rFMovC76TtCZfJi6B7K",
  "key35": "2cMwYQbUJ8waJKWCvYYyFfcKDsfmiKbMHZ4NZUT6exR6n9rnaDCsashw7V74NmZFjbF1SUN1QsURGbvigNjDXRMN",
  "key36": "2u72kpNuu7yUBjx4G8x6L4B59sZLTjW7FHEpk9nBztEvbNKcuazyh83jNpjpqEnC72HdfpQZSRH155KqQiYBsofj",
  "key37": "4oEhRi1JbhsdppJ4coRfjTjXEyA2fPM2NtmqrFceMZPsh4tiFxwWjBD4MEM2n5HMPMWPzGrcT1WHfjyq9s6Pcu3s",
  "key38": "T7N5JzLbxt15rR4wQUndzLbU5n4HX52prNKMut4Y1b5yf1h1d53a3XiHEZeQKRzxHhxjhebbYokj1dRMwvbYjjF",
  "key39": "29QKf8jQbJo9DfkyvksG6Vj8C57HZHRAxfBBfmurHadYxBHPfG6rf48njzgPW9VS3EA8bSVPKMKAr3iXzgyM6vSx",
  "key40": "WcUxer6nPy613bKUPR6Fq9SoSpSHuYo8FyszR8EmyVBNnbVFb2SQ3DhKPcjCSEJ96frghsQCe6T41xc6mv7eTmx",
  "key41": "2V75WCThu4cZF78AvmCwLQANjAw27pUWcA8f2tpQZiBSvp2Mmze9daqVKMtsn3i2KX9gfiZgAaDVCjE176PGkKYs"
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
