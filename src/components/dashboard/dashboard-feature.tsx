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
    "5Sfa7pLZHSMawR4JxUcgL9Xk486wVBBse6L4oCSFHZSps3aFvtjxWZgTshoj74V1imTCShebvhWCwvuQbe7eiZBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pw6PchY5pQjututrKF9wXE1ugXf35t23zPzy6EfGJCqejdEKssmNjydZfKhr65RpDvqreq6sQT9EsmVhQr3dvwd",
  "key1": "5He41ST5Hiwm3nEqzFgLcw8ZjwUJiEDTQUMLoG7whbTopFo9gGhciKvUM8sLsjtbAZykXiUwJeyUiDpWsK2acGpe",
  "key2": "5F8kpm64WVCyDV2UshvNCXXY2huBL6bzNmjg3xHeddw7MPQpzbo5hF3q5cR1dPyzRkQjTqvjCf8Y8Sny1KpV2bwN",
  "key3": "2Pfv5PTG2Qx4jKZBJhz45Q5LX396P8YJzp6g4tTrKnMaz3B9HCR7KJeDqwohEGkSGr55jHM46f3Hpg2iqeM7DS7b",
  "key4": "2WjRYrAKGgbb9kg6EEJ9jisbyNMzBZ9J6iu3EQLW6snUbn6sZ3KV42iajcB2J5M5C9X3tQufvr52pmPuDuksqwby",
  "key5": "4UztaRTX7ABQ2HJcw3tVsmPE3VkCkUNgFYyz1Xcn27FsRpVTxH2xnqGYZKn7mb81qmJyfbpWkpispQRziJBVqbH3",
  "key6": "4fsteseWhfPyTV1BodMMhy6yVX8Xbs2QRH9qfz4b2dYwWDgijj1ELixHYQ8v8SKSYnwDjZwdibjw3TAEjRfRERpw",
  "key7": "4ByNKmzDhaQaYGGctJLUwy5zTEVr6Hf3GvSAnHmT6t6mvzedMg8xGWoc93QUnGerZu2PcTDBJywktDqCZUbb23rR",
  "key8": "2Xbr8W8tfRdF3gQctB82CjhjygsWR4AtcMgJYTCk8MeKC7v1WzerFACR4k5SCuwyy8ZpMjGsLRHrE6qMoZ2xSaAJ",
  "key9": "4CnGVGYjrz4AQVxY2uSFgptKzmeafrwnv6LKhohrskmSLjtG6dXqiB7dnwZdBfefBNrsrsbiCaPfvH1XzwCBkS4a",
  "key10": "3nXzTeZmwKVboKr9wpLbWrmkzKaTUpU8GpNcMiti9CWARB211Akn19VyUtJtvPJxwGnZ8FSPJjFo7C6Wm4AogWJa",
  "key11": "fF7rpzdPa5GhhtnuKyYjjaiAR4RF6Cr1GGoSadtiKuY3zVC7d4EFJbhRj1uw7SMJQDZs6nEXEAas5NXqk4HU6bd",
  "key12": "35Fwr7o35v52i1RYxJh3n4WjddB8MAXLspgrPbrwvx7AZbbFjubb6riqwQ1MKKuGxiQtBn8D27aMqReBtJQvb96v",
  "key13": "39kqziuytUA1UoTfxGHd8egoDEpVFjccRR5kugetLvELk83igtWnqqCh8uWbbfEXga9kUS6RNqALMkvXD1j2txPX",
  "key14": "65LQsG4rtgRshRsANrxrueJpwxGnzECuggstVFWLwvvaMqg2hGKCQqyk4L7qh9oGS3uDChiRBPKFr2BMXbVDpLV2",
  "key15": "5mNefEDp5VA9ZZ8UPm7nNVnjrRXLdH4wpcta4RK3ybcwHZhgNUPkggP4i7SewxN9KwivbnRm2LGFZVWN8MyGRoRs",
  "key16": "PvyUNWgd6k6iqkDuXdWwgmdHeP8SBi6JnGQC3kuwcCpWQD5pmsKMMuRBWAJ9jxssgVW5ANUXjAXeP9CgTYVB823",
  "key17": "4919WRDVH5NZApnevAQ9aJk238er9yridwAENWSoTHugvSRG1CxQpbT4spzaj99mZvUE1hPCLp7ddJ8UpXs3oSSC",
  "key18": "3Kkth2m4TkPKwHvxgditbqj6oFGRfj8fuw2Mvmc9Y9YhQEJTjpHcuRE8Le1URBDsj99ADVFPNqXrYyfQFM6zukT9",
  "key19": "45jifd16AnKwewZyceNnCXJEDnQQBMjUTZue6S5EsEFszEBBRmyK5n1LHQW1cFb1vpGR6LSFqXSikLkJdJsbVA1d",
  "key20": "J4a6xKjjh8pXTZF3fE13M8uY6JdihWBtJdMu45EF7nbGeYShi1b6aiAY7jmp9eqTfe766crhck56vvAoUwQAz96",
  "key21": "5eZMnfK7E3sniaL634PVHFTWaXdUxK3hbLANF3SKDs6UZH9mvSFxcRCamgAsGpSzAxhcuKohZQWuFm4Rvn1Mg9fR",
  "key22": "3kcXmQAZCnFdY64KgRxztpPMz2b7XAz8b9oxGfbyG3gw1jXnjGwJ9vZBvyjJXSfcBsFcjwRAc4RkY8YPTi3BJLMP",
  "key23": "4fqdztaqMqhc2gzQqEdM6RVd9W9jDNgC5GRjJGPxUEoBrpwqz8vmJqCXqugLrboDk9C1qYC4w8qRdvhCZ85k7x2m",
  "key24": "5fh3pwJSkLF1myFBzE2CmSdFXi6yA3Hx6X2R3SFt69DYeYZYYWA3M78LVskwskBGwZ9aKd9QQBv8PPbBpGN9LN23",
  "key25": "2sGfXqomGxgc7ydHMGnvR5FxpVgkD167ueXnrqfnC1WNfHyQD6TcmrzLojPWM2V8ouXufe6EQqYy4BB38AP1SNz9",
  "key26": "4pLTPvdZT5sxTg9oXHHo3HtL1wWaAJqdRjh1L2WuJRWbWgot7BCYb1crr4C8HxUuvAov5Ge6CRKVBgbNzQyduYrv",
  "key27": "2TbafSCJEj1QfUsNQgpMUh3AMjgkP1vufAkw6QHUeN7GriCwq9G4FtCUTzjbAxCAxeuHK7ER8SiYtwF6LFwd8bqE",
  "key28": "3Ecn361q5iRJafPEDsiipLkxeo4dh6iu84nZAsUoc5axRrYf2Y4sbDdrbXrbgKx46WV1jCbdQS9rAQgqCSZKxwA8",
  "key29": "4yNSn6CgecqJtDNSihujFvYfFcu3JyQGbxsnnrkkpgN4qis4FbBb2Dyk773xXHczVm7J2a6SMXmfVwnxjFDNFb6Z",
  "key30": "2X7jBwXgAZSKVLUqchDyaiqkTCDpiUdpXPaoFgh2ywi9ivmbKaWeG4BzfTH38ewwYVnU47ootzfgzR2gMXoEWBr3",
  "key31": "vH55NhHRP1yEdzxqLbn2xT5mVZEHHo6hW2YG7Zhi5oGcFSQapZrgzUzyj9aQc5YqUh3grjrE6uMVYQJQthwZLFF",
  "key32": "2Ea2nCb2wuBj9rtW2EaCud5vUb7LFi3vFVccWMSqyjm9tbbp7aa1BQBZ8ne1kyYsV7D8LgfGMJM3ykF8UfTQRNYH",
  "key33": "22K8dodyEra4EWohMcCS1K8xCrG5eHF3ciDySQUnWsTqkDC9eVZKc2igSa5cmDqDBVx77pPaHce2UJ78JzvqJbM5"
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
