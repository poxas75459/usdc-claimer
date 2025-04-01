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
    "5Q7syr6FfCQHSD2KjQhrxpbrE2Pri7ohAARgg2aKmSEAPLtJYjdvcqcSz8T7ynR22ZQ6WwcFoJZcq51dL1NzKZTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cb4nNdn1xZVi2mcBXQzRepvQyWMerckfnnaChjsHS5YMFUW7R6XoDdG3TxWLr1v7coULCuRBi77J66bCZuk97zk",
  "key1": "epDwpP81Lr9qiHPNkpT1pN1mbWCLSCUCewdXA5MRDF2RYvCFxLTpXeQuo9gAUWGRnQubjRyvL2YBoK1TxWeWhc8",
  "key2": "2kL6NFYRnhVQTQGFPHfK2pn83oGoiL4Da34eqjMfXcxhZu2yy7ttgWP9s6JAZVE6viVYKFBe5ZRjQLPTQkvMPVEg",
  "key3": "3rzpsmyFLyzLem91AxtM763iU2cnV5SNCkqJBokFtfhFDw8foNij61ZKg2E38dQNkHoDXKhkTahdNWmA7TPW8dTn",
  "key4": "5jgNHMCh2fVVfLn4BzdbodiGruozeUSjacZpsvGo3FQzSaQADXdyjzV7AQ9gV4xx3Uq9bEbnRzFBVRFjfGZr72i6",
  "key5": "2eBuMx783Tt7dA5kdYYYkXG4VWeUXXp2UUY4guUW7SpH9AymU5C7HVo26TUymhE5WoUDAydn3ZcRqQGGKjZLzmAn",
  "key6": "5TAoXvWskwfyRbiDvUjWjJ69b2Yh8RNUmY8hhK6kaYfpzgyXA3FhnzdS2RQujLX9jTtDr28rkqRUaKsnZpFHYNcp",
  "key7": "5BDwrYHYUPucctvSLwAnuNg9ZWbS6e9fsQupqJ7zupGBMcPhZT7C3zWUvpvcgA8aofXf6FvzN5babTKvKf1Vw3he",
  "key8": "2BvcrXLT8Wd5AHgzXV1eQ2xRdpfZgN4cog3LtsNfjBsxkWSdTt1KsYfLruWs1y3JM6Tth16R9MBQFyHjK7rjD2J",
  "key9": "3jaikYd22q5hjLTLBw4GnT3dEeeT8fM19M4hykFsibibqQpyYRtHYQuo5Xb36q8goGLkCUd5Y4nZVKaFmAS6QiaP",
  "key10": "42HFbR5pTcoxj5nWkZFDEUq4qnkg1K95CEeGYNq9G17eFbQdaZ2cVeTyFBiSLs58RnKocMGSymZ1skUKWVdJ3eMs",
  "key11": "47YGjfLAYQPWqYvEzs2Nq9AeeXDqjCgTzNo1SS5Z47SG3ZffcszZQq4wbH5RvAU3ebw5xtYf24KzUx2xWrj6WzRH",
  "key12": "5mgejSuJtt4h6Hs9cwkVvNTcQjWnK7YZWAkmptV9WWaU1rut9S45okqpJnBz4Uho8wKzUpLNC63L58kxn6ciLutc",
  "key13": "2QEsZ24SiQaEzgicZG33LyTgWUoNghceCngT9toHz8KunCfAXBBXDHet6VsRFoTiSwmUUU7yGGrNmZiLwKFv3hAd",
  "key14": "2DM4uHW9VbbHEMdnzWJ3EKNp51v4yeTsT3fZexvodP16hahzouwWTdHCw3zo9wBPjURPA1oXd7GfAUh7wuh6a7D8",
  "key15": "2PP6UPMtXFJFopuRzjFGnneHEqsDvLRTdLgtCF8R3Wa5EiV1ww3zA5bRZydMfhiWiU45Qu6KjjoFGSmJGAmnTmqL",
  "key16": "3hFbh8wQdBmyGwzZMMEE42KNN9ijPW7rVS9qsFPNk5qZ4mK4n4o19SzCbrPA5SF7iSQj6rRWxA28Sv7yhWZWtUjf",
  "key17": "3siCKfc5oNadKuB8g9JFJwTxZTk85NVvMGsdF4XfvKey1zRqS8GFw3eBDnwNVMNBEoPxoWGx4aBiHtzTB4QJKxDr",
  "key18": "64N7mJjP9f7eRsaUnUzyDM9aqVHibBwQEAmvodMC6Jfe7AiSR9toLjeMif7kpy3HWdf5dTPRPN5XiYW1pbHhRsP6",
  "key19": "5wGGhq1TJ4cU1Upw7g5831BK28SGG7L6SBmp3GDcXvY6oKDyNk7WF94coc5GbJdEYxXZj9A4FpdUfMW4MU213N3",
  "key20": "Bjn8QsXeZ744BmDpkNZRboMNGbbixP7UkbYRqu3cb1XSf6HXSvvrJr4f6k16hQbp7ijXX7baZeu8BwWRjnduBQK",
  "key21": "64vTb7Ku7uySCfCSpmAXgnfSR9MSZsuKYZ8QpPyv6xpTjHavHHeFCLtk9xCn9VhVBiCQ98nJ7EoTA9gnXLQfb77L",
  "key22": "2H2Z6QwxhCS8to1n9E9kRVV9njRPu1fdekA5hzhAzW1uktfc37shswgMbPuDVJLbQTxGnP9ewdW3cyMHXyLBBX6Q",
  "key23": "42TuuuxrFdAgZPEyGnzx41EaSxH6iX1QxgmVjZrJhNKobB1WMUKFkDGtkBd96AeyfWtEFskTgrGU3tNgW7jKizuX",
  "key24": "kUtgwy1tN69kMnuZVB3zbydq4o37Ai1WJK661oHkaSuPwaADCER46YmQWM3V9pwwNSeUdeQ8EP1R6XDAGPeR5mz",
  "key25": "43YYCL61BaaJ9JYPHjsCZNWTygZudCDcPbv2W2H54K9FbLr65vXPgTvikt884bt4hqwHGo74XJtJm3iTm57kppa3",
  "key26": "SjXTP3behZmp2FHshddrunVGmcL9pm3fe6PoiV7gnXBr7NBjwcarNz7BwYF7gmZUwFtJ7dfPMQaUvo1hq2N1x6o",
  "key27": "3K18typ6cfe3VR9ZKC2HEXEQvVFPmC12yv69wrWWj1bTSYZFnhrtgeqncjdVSsjJ1M5kdyXFhi6gHwgsCoEvYea8",
  "key28": "5MHASaCwFyMM77gbaNah3m3ZeF7BUsK9QkRtqeJFCLK4LEPxec58LLZTuCwccX6FMfKr2V1qGGSmky9xQVbbE6rF",
  "key29": "56txYLgLAQ7TUGFaj15NejW7qLbdbJymS1oAwSdZvDudAoWcDKApGDY7rMC5WaJJNWnV2DCr4Buut7Ze5NeWyXMR",
  "key30": "kNQ5Dhi3CQjS31Jox3uvhs6YV2JEgq4CKavvjrRf2PMY9269nmowRkrnLEoQEYd7ABQv7Mz26pFbxJKY6RzDPY2"
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
