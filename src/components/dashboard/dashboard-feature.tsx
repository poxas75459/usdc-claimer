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
    "33wv1SUtYGDyK1aE35pefZEdmwQdoCMh1bdxiCGjBZnbzYRrCYNopPuaqkgB13MKU8AoNKsZsEgiPJ33ziSuVXtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTgxAtgEKwqCjYJY7q6foz3ocQjEQVEKubrCkpwUbxMuJuxus4giwNxQsQnYhLec9baATgKMDX5Fe7pkGLJ6zir",
  "key1": "zTuCSQ6tZarNMzPRWn76N42KHt57Vh3xkj4DYUPfYXpaRjagJSwvmY4fvEx9eMVoGJsyJhWuHyMSfShd73uAZWR",
  "key2": "aX8GH3MbskY1hHkdcxonN4qopwWsVoLaWHCeWqZEXk8iRpKUh2cFTsb58rq5cS7Jd3giQVVJ7bxpyq6JQMKSgSS",
  "key3": "67hy9zWjrewHwiu112tKy1NjW9dTYCWMhi4jWcHJYr7iwscFnLzD77uv3oPry5kMNDTo9K4oCEmDmrY7njZEM1sU",
  "key4": "2vyfgm4pJD6r97XmGBJosyzL5DpDPjmh1yGm1DFEVnRNYTnDBHk8J5xzdWSZ6gSEHsqFT9XnXogfnAHq6RgvHY5u",
  "key5": "JvK9jRhoQNp9q5vnb7KCVTPyuFdVt16QupRCnsj9E7tfJFktGCMScBjNbMaqHtEnFE83NP6MbKY1jm3ZXPNPt9m",
  "key6": "3M8BsU6FV3DFtS1sV2KSpmXpZmkKRFWnnjW84H3CHiiBAE6ixCqa7YJmFT9dm3j2E1d4XnVsK2KFNbDdiAP1Q9J6",
  "key7": "36XaPLPtkV1fjVZfM5TwiYdWSQD1yFz5ij4tJxxuS9v6YkVWGX8QhqsQK4Y8biHPf956RdwRwksgSvRVDmofLZjD",
  "key8": "5efuUfzNKUkEFPbW99oF3fNecZT2ESLcjuYsi2Rc8ER4V1KSVVPSdpAgKq9MEcdjCnMAz6Do98wx4LaRS48ze9yZ",
  "key9": "5PybPiPbXjRTUP9Y2HBpLjefwsxYDoZw8smF8yoBYxsnqn4rBmoWFryo6ck9ptFj1ydBF67WELWGzRXLTQt12mtw",
  "key10": "35TsHHiEeRFGJPiZuuSLT9UnDXsoJ4HN2wwg7xLMpSNKW723KFtoPfrZpkJKXUZGRDt6rHoRreeLvJQprfLA7h9v",
  "key11": "36jeJ4ykT5w81YMjuAAc84mxAVoC9UD3jcCrvgVcyZKJEnVcNrzNFmbcpGw78L6puDsBb6r1mbrStE8kZ8TBgH31",
  "key12": "5PZNkh4mDsFfGhhqYxCB3SMyBCAeagSYJVdfBrhBtSZdS9AESAv1YXCbb1gNFjjea1syuNPr8ysiJYvShzzXjVYy",
  "key13": "4G1ZyY1CK78Q8oGRaZHYoSQMPzdxkhw55gTgK44zmwCvwjs6mGaPXfUf7SbU9z2jm5s8kPuw1PXMZLj3Jb6ES51C",
  "key14": "5ZbDcRWciYSLxXKRNis3Lny4U2Fcddy7ZqpWtNLnTfSh9W5jVprdfanCGSmi4yWQmf9F8oQNjiSTgLAAFP5XhfnV",
  "key15": "2YwzfJ1rYCsNZJ4gR1z1hic2P4Tcqebqfm3JSHoTs4YpyHMFrwRwe8D4SAdeev3549W94QSNVZM6RfY3A5js99Bk",
  "key16": "v6uidvZCRE3rfAHG5CsmG1M3GhJ5WyP7bnuLDKiM58ZLwFCB4w75ArXw5qbq3qwuSVMdkUCQyHugPvGzdEhwPNo",
  "key17": "61S8PgsaEWezRtZvxS1DftsxCXKfAFZkfD1sJkki6PtfzdeyX31ihzv6tgReeoJJ2Fz3HNYTgeGcRChzUfMyoMt6",
  "key18": "5oTihvki9hwuegAppnamGNsFpeoyh7aKK8GxemAgXPh1CcyvKSso1ZeJ4nNnQZKjUH4YWH3WHzu63JrmKxC6H4nc",
  "key19": "3GVFUJ1oFnW2JXGT35gHBMLJHB3djVkw1V5Xz1G5GGx6T1mQWeMGCDACqqyQmD9qi9hZijdjbW5cUznxipg58ZVg",
  "key20": "x9CTTkXo35UWMzRpEMZfbr8fsUvqdVrsnyGeyKG4sevUprPM6PRasjLoTyfaDihmatukQc3qGp2xMXxxzBPY7qs",
  "key21": "5EB2wDdu6qo36KvzmBpUdyY5RezxqJu8WSVK9gomDVPjoEhXzXtdCCHPPSdLTLYa5asbMLMthJGY6AAQDMR8QCBg",
  "key22": "3NLFzdbAux2STEnKoT3ZaL72zBvMnFSSPBnb5ywVTfsD6NWZwZnuPd2YQfYqNWTqhar23GrJHETxhG53wMfSSdUJ",
  "key23": "3JUDe8YkYpEogi6Q4QY8Q8xEXcBhQDm3VPNGLkFnDspUVnLbMtMA868s546quNct9EudMxS3cJo7azWpmE252Vue",
  "key24": "5mqUGf9VWKutcc4ahCiZAQ5gJxykcFBXdpiKZf3DPWw41jivgizwzf8F9WHFvY1nYo6LSMotPrp2x3zGTcy7fniz",
  "key25": "4Pig8SvSjQfABKtdBUpMrWMzKXuMtiYsT59gNyxjf9W5xbEh1P6crg6jnkCAKYgvNKVU7NKimkmyDAuLXpXqjcbv",
  "key26": "3ZqNSPkshUWx8YC3jNSjcMEq2ZhUWaMAKfenmHzNVnigjw8rjTEr7cNTisVuAJ8roVwAguWqJ7FG8hCeAS6VVvPq",
  "key27": "5KmuYaTcmZFSdehMg1a5irfdMn3gqrtTnvKB2rWEZPhzjBbu3mW2QwPyUZX2sJHh6SWLzUTKb49Cs2fn7jLayQWS",
  "key28": "5d8HzE4b3zwfHXUrqnRghuPqH6pg6C9HaLvBJabg1v5yFCZf8JB94n1eVw3XxwS2kJikNg5UjU2pyKqqXDujxAox",
  "key29": "2HZexFGNeioNKdZ4rqm7ecZoaA1Q4jNRTGHPhdsx2Mqz9CC4LphChXYuPB8mX3wBcnLaw3KRWhim526La6wDPt3o",
  "key30": "3m3p43VVef7UfTSnSiUBozA24d4rtNRA7tdzeNw87VzUfDYPxtPKGqkKEpmjcFdHqDCKWoEnWkuRQS5mRM8CdLrg",
  "key31": "4jtqj3Yc4bKoKhAF9h4TJcUGAUSHn2wyTKsyTuwAec32TtAbUa8wUjszgVJQVvfaJQHXFt1jDbBrP3BpSYhuMvrx",
  "key32": "5bmPTjABgoBubsPM3H89FVNQG2VFd9im1iS1qAWnotYEa89fNbVPXE4EZtu34HikcNy6LeVBTBLSWUXDtfudeGSp",
  "key33": "3JtMY4biXshqQP9dvkt9tCaDWBy3LTeKLskYkjwovR3ium4Qhm8rgNhvfz4FpxwnwfABVNc3xsYLuPK3JeEkVk7E",
  "key34": "BrhuFyWCgzgLsSEUznDsnru7vX3yHPGizRypbCamdniXDnrsggiF1f5A9RHbRmd37bj9KudWZwZXNHQ52SSaTWN",
  "key35": "2GLQrKHgf1foRi3aVDZonArSYBZpJMSXC1973Wj3kPy94ARx8CpEDJYisBoucQBfKiGD54riLge1aJgn9mHWEoXC",
  "key36": "cpGGcshD5BGrQmpkMJqSg8QHPvLcQQd6QfBQMLd5rwLENdPdp7xUEa9rVVJZ83293uHdeCAqHi3nY3TYQfErYqr",
  "key37": "2FebaHnBXurp4VSvnXb43gkUMVGR2N5qPXJXfY5uefYNCwb7prmwxN7qAnvuad4dPbiXUdadLj1i5JCfAezX4iY7",
  "key38": "3qRFivxVgNMy7DgxadAGmJq91LXXTgVKJ6iBFa2HbDmt2xbXjLdzDwn6d512Aba2d7AxR9yM7BW2BYBxtB2CHsRV",
  "key39": "5tkaem8XyZ95qFBzSd3PThdvDmX5QodMVgEQ53eMSx5bQRJm8VdKgA8gJsHUpVr31c6edCa2SnMp9bSVTfhZ2w83",
  "key40": "48C64A5tsj5BDhv4QwNdKsA8MN6vm2TALw2jz1xX5hpV23LwVKpphFMuggkrGWhjcoSBkQ6bwfHF3TuHqGQRFHqv",
  "key41": "39CdSVYb1cCstVD4N2vZrZyxFeBCCuXrzR8onDjMMCo7qTWwW1ocKjfqDasvnREAQwQbEGzsF8kve12tTF37nyKq",
  "key42": "yeuVnxXZehM1XgPC5LURLCSMsN89ReQ7TZLzxxBKvCkdDxjmBwsnLNJDPKagRx5Zs8cewEqfHWDLFYCZxBbBUmw",
  "key43": "h6Q6kpvTT67kt2hnzvLWvU7qUqqH6HFJh56z24NwWfJTiNoTuYjwKVrUfDaW4cDAognHdNejrGyaNtf4kziRBxe",
  "key44": "2h7mcwNrQzTkdVqpqusdrDmam5idVMsttiYPduucPyAPhZhkkj4H3kUSsbqbwsfjNCXXFgcLMUG8bmG16HYaoJr",
  "key45": "4f9ynFEPR9jBCz8KRwxXX3HxSoJMqqLzTTLqYNb48tDtAEiizf1C3fZj8QuWfFgfat6e5GA1YQGH9ue2PTgfYB1d",
  "key46": "59TeRi8QY8k3vGFdbY655syhxfBsKFpMTHT5nhd8jG7fwjVjHCsBh8uTJLgxLfwAtZDELsTHQNWfjQ57nbVcyns8"
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
