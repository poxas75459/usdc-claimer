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
    "57W8rJ5jq8p8f2aWbjqkv2y7cSU6HDRBAkd25iMXSMubuhvTF1uNoE1Lx3xA9Zf2N7an2Cdo8ZPru7K7Vxbh2JVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9wXc2z1Z9wJMPFK2e76sWDPEK7s1oFLLnR11UCAmfLkTccLS2uGt3BdHkaXFnTqofHvVF2pRkW8Md56Vy5tqJF",
  "key1": "3WLLhWZwoUtEK2PYaxBNBbhwpESqrTzHdwhAphQS9v85jp47oL5HMUJKu5578LjY39PYF1dvvngGofsXZgejoDSw",
  "key2": "34FJbsFrirSw2gH8iFMkERf8Ak5HLCQRosPD7ksb27fPVqLxgkVynUWL9snhXNJUm4pvSWhFc6saDj9EARQHxwKk",
  "key3": "2UDyc3YcLsrX4NnyWtfya3e5MryztEg2PS5S3vjctEaTtT22oxESMJxSVHD7A4XneBfprBPM2WZmb9h4ybzkhuvH",
  "key4": "TWeQEw9cT5sxmJZu1VpbfzZwEmCKczt33o7M8YT1d8AqLZNeGxc1Yw1EZQQvmCSx5etfZMZ9cZ3iKRnuktFCK2Q",
  "key5": "2NnxS6zmEYsW2PrLW7KUFafs5yAR9WwpcFpk8uGJrU7n1irHhNfHc5CMYzJgz1dFyGKCXc1h9dEgSz4ccJkQNct7",
  "key6": "LmgcFM24GsEKVATnP1oJxtJgwDeTwEP9ZzhB19rDkA5vWGXKMR3JNPD5ErinfF227U2Z72NjDEQiKQN4dBfpLqz",
  "key7": "45fevpQ9xHqZKWziQDiTve6tLYXUm64yvv2de2E2zo7oJYnCUK8J5ZZ94qDVzNX5zxakbryDKKcNNoZuH8QeYw7i",
  "key8": "5amk5DWnQmbqGFrXBA9ctbs6FiPniAAmQefPTxvUJiAu8q9xt5bn7BTPTDwZcbBjEHRSKAG8fuRVBqTLeTcTU1i4",
  "key9": "4a19cJwjFr3soxKoQyott9WVM3wPUoafwzeWAdsgHrzHNo18s71F8sDcvWH1Yp1Z9sYwFF8JRWoNGu5oWZGD5xT4",
  "key10": "4jkb3zAYFzL9iX2d4iVF1TDaDMoZ8PCfLuVicBn5puFrgyF1Uuj9zyw1n48QHEJFtTrfmpu54NkVNeV81wphLw8e",
  "key11": "58kwiyxACuHa6MoZwHtEKZwar6bdhnsR2JszuFPDrq8Hs9YDTPwgKEvRJxAw8UDMfKogp9xrUojczmW3TxDi2LqS",
  "key12": "2LW5V1szqG6sgfW6U8wkCYwJmDkvTykzzJaWrpTxhwuQgLZ986G5zDE8PMbX7fDmWAWVise6wGcMzH4edQDGH4Gb",
  "key13": "2yWRd93K7bzJ5gS2APnmwgWeaw7JjsCqjNTewB6QViYyzvZsvSUohdRJDkh6MZjL3fCx4m3avGH5KvQgDqt1Ftp5",
  "key14": "LBEtZ3vsPecenG3KWE5WidykfbugjRDcJwyCe19fhhXzJRmTecNKr6BwCiomCLtRZYbUuwq4cKoqKPYPdcuYy7e",
  "key15": "29FK3N5jEJjLsVJwF6CNoMSSQYMU7SnrJHEe7LrsUWf2JjJT2HWZ6RVGAiiY3Yjz8KvqXP2DPVGqzzH7ShPxURLA",
  "key16": "3pzySnmmChzhiL826EPeTZb9vPnBZZsxSPib4k8EZvrid6UhNuE7n9FpFC8vKdgVDZjnsD3pHq4EPnX9C6hH7dmM",
  "key17": "4dS8gM7su4P1qhiLLbk95KwG69wiJrgG55yzAdg5TvK8Z2S46r2P8dWh9mcfjUPh9LhpbW2pmAkk3acHrxH84P4",
  "key18": "5ffKFg5dQXLMtyDmtGpnfWx6j2bnJGHt6g4y4N1cMTER9mxgFvymQhRJrcobvo83NMkjXuaiwCpnXKhSTPmAvF3Z",
  "key19": "2UX3SB9ENd6G4yhtAWNFWdzztobDopFNWAzpKLMgAgBA1wBmVnZ1U2sYgMjEfVwadwqV3ua9wbzH5EaJ4GHhkuq8",
  "key20": "4YrptsRNRwN5Xsujga4LeK54HF418WsTNoA46vYseywcPWP1giQsNX3cdQ86gQsYKSHMaPCL3mjRseCZzhrzJNG",
  "key21": "39tuT2BcFHmqwxnyzzfYR2LqjTapsk89bQ1ztgAxUPW1KBFL714xw6NdrCqtRdgRoZgUYAA8JQwZbvEesrDVjgZJ",
  "key22": "4kjG8rApnvAC962RsE1bZykKWSehjxNEdqrGyn1uKye4LHJ42MnLbCu1mP8CYWmiC9xDoifMBoGYwoEremQH3CQm",
  "key23": "5uCWHzkpZjwUGgMAVkFB5MVXXKT6N9kxL8oA4aVxs5nMTnYVa1dJur9xQtzYkS17StUMdPoy7WvvrAXhdc18gv2k",
  "key24": "5YA7N5xb21oymAzA2uKTKT6EbxxPELBSU5bj4HCp7zkfW47Ztn6Y1WXwJt3HbsqXUgphCDW7cETxuGyiY7VENPWg",
  "key25": "4qZTN34G5zQxfCoGHAR93TXSJUvrNLzRzvhpBeBJNpZm6MGxBMT9kLwq1GB7suBuDBVn4ykvF7Qru65bRpTQ69vj",
  "key26": "2QA773tKYDTwfLV7uabWPryL7u2ybbrADJ3fCJjPnbg6XQVXqnxmNzYgducqQAWPqn6Grv2tjaiv1uKe1VBw8gP4",
  "key27": "5NSbN54dyBxcGQq3w1uTkrYiXAn93tJsH5mdnU9GNCESYBB6VUGfyyP8vr4YngoG5Xynon64tMhUWXGXFFjZ7L1E",
  "key28": "4AZebX65hYbin8JuXQRxLyKhbs834DG7G155syvqruN9Cu3bFLyPBi99THYkqhuAhT7r7AHLju29q4mhRpCtJwGi",
  "key29": "4Nvjrcffjta8F3xyYuL2pdbS5w6vQrFJPGHwVHjs8S7ygFjvoJy7kZEnbguJP6obyZECzfvYrmDWkgmcNBC7od2H",
  "key30": "2PyoJnLB5Gh9iBPTqbkYsn4k4ewy5ecB5dG5EDSZpSDJ9X1NPXkKs3nkPrzekRShrwnS3Zy3S9Txr82qtEo83eoi",
  "key31": "5vf5kg3o13fGgtRS93qCrFJzcRyj5HCkkvNaPfg5eQ6ZGpmiUezUKyYf8iQmd8XWpN9QPoEaYHZEnPNqpLQvy5qo",
  "key32": "5vdYYfHE8bpX3UuqzfrUhMCPkJa95EFgWSTxVnkgfT8zVMJm4jtAVGUDTL5mmZ2oa6VvGpmhVq8uCsUfzSWSYcf7",
  "key33": "4SnZNEMPHboxmFyySUmq5ocvhMnRxPQkYq93mQoM6rxgioHokWLDWXodwXEz36Mn42tUMY59LJVGguhniSWxpG1y",
  "key34": "4SMUZ5VG9FCGDzK1o3cpZSEAaw9uTb4rBHLvnzCLkQjtjwQ91Q4Y1exz7f7s5kTe5qePLw2yzYDsGBTCCQNkwkhA",
  "key35": "27F4MdSkf4BTaThMkDCCpSZoVMssT2CiTLUfH6uPKFHHfcngGdm47uJxy77iBXDPxcptfM2NSQN3Vm8sLNxK6raE",
  "key36": "4J1vbL798dNmsW9YXXzBsCN7SBQ6aQWb8ZgHzN2KsBKvX4okc3jHMFzfAx1fvAyG8QQ9TLU1tYoZ2y9pndoVuURA",
  "key37": "2e5RKe6AAQYHwXVDTpx5VzMFZfhsZ1UgoEjNpTgpPGFjavTjuZiDW9vajwUuoWrgtL8YHsfwDButE9WFuoWTE6rf",
  "key38": "617cz8QMLsHPmexK11zpYUqjxg4KwZTgFacLjBoTD3hBgokKB4MzUwzzrGt1x6SvtobaRqXsTwSi3UZtQeu6HHi8",
  "key39": "DaFC1u5ixUjSJbBhdre7xqSfevhBFs6J7a1BG1wgEMmfvgqxzHWdE9FQ1gLE16WvCS3M1w7Wa1HiudnnVCL2Xsy",
  "key40": "FWzNCpFJSedh7xfoMCc3ksmwHBAQEgn21BMM3zcDgNrkbUz3CkgEKhdvnkPwbcTDzAqC23mTPqrsoKdFq4Lj5Yk",
  "key41": "o22c2Y8MV5ZEHqc4sHyvhznu2X6RVjitMReQXru4X2wLNw387gij7YYtgWQUcy4z5Ghx8xpWLxZpuiRrfN74AwB",
  "key42": "4VdCcA7eKfueH8ZjSYe73ALNir9iUc1U6NG6GkVAsS7Z6RRkhFp8GJwMHgG359GeiHpwZpvj2ibmW136zM5mP2FX",
  "key43": "Pd1YEWukqpbb9SR6R6bEKxTyKnTsEsa2QqfNSjx2oSgQ8JpDF7SfpdQGQp39vHoP4Z1Bqx2MvXkrvRjeDgBmPt5"
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
