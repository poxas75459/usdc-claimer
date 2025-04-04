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
    "382bQzW3rVqWAeb8CZoYYguimAJmesZAySCHWrCVtz26kkuoHw2UQsXLFtm4aGSVWZwhiMhmWoZCLGhsBZmfMn9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uMDcU5Q8YVsiVKt5jAUYbZ7xHSsyTbE6tTiWVRxNzYAZE9bDFK5RiKdZj772JZVpJsBurz7d8HULC5VKpPYHJNU",
  "key1": "5WYtWJWjuUjwKxtTaAgNJmZwP5R1KMhyJSB9RdjXa1xFoMr6wtxH3wqhXhDAiR78dVHwEGKDLBDi1BQLBjQ3gidA",
  "key2": "26Y4RdBpvYtJDFyUM9N69rPUZ2bGeetbpua8VxLgKAnptggJG96dz2UFJKtrAk9jCeYrRSL4CFQMHyBXwtNX3KTt",
  "key3": "5Gc64ZJSXQvZgFMiXdZAiWv5snkBAhs1PQWXHw8FHxK8ww9LzSiewza5SUVd17adBK9kcNRQe1Bg3X3d1GYV2YTd",
  "key4": "5UPEH5GE4TRq6BueVks5MfkUWurPDYyTXkcrZ1n9Tv4NjKGuniggwQYoCXMeH5g14pwv2BP4APpvn9H7ypJjeYAE",
  "key5": "3ed1ZB9VKUQZEYFSHaQ4M7wxigXxNsujbBrsfvjj1VEwQcePJJumL5qKkL7VMdfDG3rv4EB5vWz9VoM7u9SQ6ag3",
  "key6": "4fNT66f2TuxphonW2iYHJCR3FvAzw7RPzBFjaXFhhHTzFBBu6gbkJBFMoaRXhKY8C1z59CEfhLL4uQZuWGP7eDP8",
  "key7": "5SeEkdZP5W7nhXDsw7aqMiHv9evkiwWan5EFsYpPnEEydyYPZ7n9p5kUmTUyQi82xjC55aNDr55LurFcv9Rh9qAA",
  "key8": "4Az3WYW5fs3YMxLkbuKzD2asgMrucnvphyh1MwPRBNDC9Sz6kJrpdm2wqWcrsxUWUHKhzxkkhqn6G3DYBNs93yvV",
  "key9": "1YAK4vZLCoYE7xVsBfCFJgb2eEpBjvc2aVhDVDcVkGgbcbX6TRv9VZWBqBK2bhhvG3pNfLLtbJp763KmxVgxHUC",
  "key10": "126PfdWVABCuFTnJPukpZnxJcvaQLDprvFkVTbdHDdBZaDLJT1dMMTQbei38oWYaQpjqhDqxGVPagew1mjJGMBw5",
  "key11": "4X67dzYBiMxYVECjJC9wtTC8vUBWAbGwFe8Ta6RnsxqUwQywkmwHm914LNnDwoQj1kSnMRYQMdLLQe3GQWsCPMqi",
  "key12": "DcKLjjPfLwJNk8gw599HW2CgwyU5x9wUwA2VV1bqhBd6EXazsMzxHCEa8NLvWRQoRAEZp7hZhmxoPdKtc3W5YTB",
  "key13": "2g1TsB7hyxHVNdj7T6EyEsu9tjHvvgiGjX1RmnVsxCwTQPs9b7HbLzcxDTcVyz61xS6MBPSNJQDn5Rmkd29PQQ9n",
  "key14": "2RVmDF2Li7QTGWRM2p4nc5jokie4rhgJa4LfcFuBrurfqLDGAqpQLz6VWnPrLrK3yKtQik4SkXzZ1ZQN5XyCtimy",
  "key15": "61LKjh9J83h6cWMWoeAm99F16aKpP6AQFskWUskRu2Pmg9wC9eURCZwUB2YYyCY2359EFQE8Sx8hMvAXXnLWML4Z",
  "key16": "2p4MQj9jMn6hoLpHFLyzAh6FFYAtGmLnRXYzxJNR55UbtrtkpTYanjTzmofjLoHPEAJKgtnnLP92fQR6StfZ8g72",
  "key17": "21gzrnXQj7qkMR1Hk2HZy5EUz4a7AFNuhsNtC5pWzSRx9pyKfMCxeWPnJD8t2ScESftukFns9zMubkCMF2An1vYR",
  "key18": "oeVFLh8m6ViFvhdeQ8YG5La4ZcEc6M5uPT7a2DbNzxxmCMpMWM5MzBdh348B7PLnrff12iR4vrqfMgba6s331RV",
  "key19": "YgUaAePdbc9ZbwpetKshgZe4AFfk9SHmw8SQJCrCYsvJgd3RULBXDumRENpdBduYV7s3urT7pGzx3BrydNJF9m4",
  "key20": "4GuHL48Lp6sBpDDM7pn6hPdsuJxFutZ1bFtiVLT88BzDS5T7kfium93jbhQRaRxcEgFNSx5KYTMpTNstgpPoTJRZ",
  "key21": "zJ6MkaoRLMhc5zZTSR8XL17QCigjEyMkEXEz6xnkiExZxBb71L5f7pfr99aiwa4yZHYJFcPVoyN191mLy3BQByY",
  "key22": "46xdqLw3vaN1bvFmYR67gCdzXhitdRwF6aNViHMQew8S2rMdXWFaoxidsGYnPmkKBmcqRZLnyQmG1Vk5vR3khUpc",
  "key23": "3iZgrVVpriRN7JwJFUGAGoUAVvz8LTWNWaZxJmXJi9Jr3DPvzVeXFXAmoqRMfQ4BzsnccpYPydH7fvQSAQgKPpi9",
  "key24": "3CM5hzEMh11FWEq5JZAMy6tLvb4XYX9DjNK1eT38p9CP8Cy1kJvW8PkMxUii8DL1jj7Qq7viyLLfRCRJKff7jYLo",
  "key25": "15hV7wVNrfo4uPYsMhKGRCDWR5XefoN6534doZfrybr25MXAeenKNFJkAReUiPBWsDw2ei5Xib6bcqerLbpw2JE",
  "key26": "5YziYqyavsE8KS6Q2UCoDfjcLszfyHv6vkqiwqH832gmy58phNrYpUkETftmxapiCRDDUx9Sk1LPYkXEkApMbW7j",
  "key27": "5qG1qVDXqMEoCHcE1xg1yy6gaUeSeg4eBeDXUZnXjKejyrLRr7vN3j8Ah9fwrj8LurhcvsEvPkbxhdd4JipKYidz",
  "key28": "zAuzmb9GPbwzWFC5e19dmnauf8r1d7ej25pgMNN4V43DcTjU1FrZXC8AXzFarzkD7Lha2cq5wdnA9vsT88eGFfi",
  "key29": "5mxR519sBtnNSLjrFBng2hhBtbv5XFxT1fUMYUQGB4iiahvM9zcBya5yrf9duexGBkfw1vRw8ZUqoDDnC7oEruvJ",
  "key30": "3V9h7rPAWqG1p1VAbebzguet41A95FYLBgEFL8ycR3y1pGTnjmZUP8EMcb76hG12QxwbzEYDa9Jmxwa1YN29REBp",
  "key31": "SPwmc9hki1WQJjUjzDrBzhkCo6SKN7gyGWgAWqiCJ3C7PHMzCHGnQm5kTYXDZ5jGfH3NKJMAaewWaZo5RBmEcEu"
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
