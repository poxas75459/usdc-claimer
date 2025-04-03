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
    "mv2ARA6kFLAYxJCLnbnRRf3ZMisPdbKnUaXBKtsnJ3qKPa29R7P1ce9Q2JYeK3GV8XGJGD86jpiA2m2CuGXKKrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nerBkrBCJq9JBiRarFj8eXPYn77UVfGzb9Ko7J3W2BQThcrUwXULH415XDcW2j7ASpvoSGrTdkwrcK3o41dsrFw",
  "key1": "3NuBt2QMQZDxWeu1Z8WapfviyrSNu9qrhEcv1UbxqEGGk2nJ1uKw7zHKgRRBFzchasaMZFUrVGMd5grQ5pCeP26d",
  "key2": "3A3S4uopHeUFgk8Vzfn2uV6FGUWMZXPvnFQ4y93AdzqyVGpBmGUAquwVDyWV8AHCypNmH6kUHSDp3szv3PK1nHVk",
  "key3": "58QL4PsxPb3oeK9fhLPmN1GvSwwnyKtCKL6ZzGUngoUkkXBe6JADEgWC7xztYS7exod1L8p2mC66GgUEvx71xVTJ",
  "key4": "2XenD38So1YrzpoyRxUqPttQAHqPECJpQascevQdiNH9SUHwmHbjoaF6tRr4GVZKhd2Kq1dxdPuPi8ZTRoJniUfy",
  "key5": "45NBkF3QXoq9qUaHVLZrFRf53iiHN2jSfhWCWegEZQnrBAMXBgNNTd4pKBr2P4mWgKMXdxs3btjp4Am3Hi6hiXJn",
  "key6": "5W1n1v49knajGnpuTF6ANABTeFqzdf9oJWHDccR9CFQ2RurMacdWLHvPxkjw5EhkPv9QhweEBdkaWPb9EE5CnTpA",
  "key7": "3WDiy3XkeTbGw1SJDz3RGR7w3UWB6q9VRv37o8onw9YURHnfLqe7r3H75TmZ7HApHzLADi1NaMo3qPnMwjgJCCea",
  "key8": "3nFcSj7ZSMNVX5fUZWvEse6s7kr6gwz4px1kezJTtepwLSFcigbhoqX36PibpFLtrWqjD9T9trz3si127jU8uJoi",
  "key9": "dv3pN5pxnsS9BuhFsg8YmoAfSW9Qha1MhPKW4zjM7CgaB84BKpYbN7J1fGCDftX3eAfeWBusnuAwfYQZfunhcJU",
  "key10": "536X4i2p3EZWrwWEq7MGR4ZE8y6vgrX1ddudEZFeduXjPSnq8Nx5gnQYwogdJX5F1ZdD4qKUrtRWQYRfZf7Hg9iw",
  "key11": "ChJgB9ZwSSrTntVKPYEsk3Mq5EeJ1NEoGjxHmwkSZXTEr9xSMT2nu3TS22Qm5KRL7CJ2HtZ5pney1WcA6nu59me",
  "key12": "428eP8FoXzHu24t67qYGA4oYANanBJD6HS77pdg7jAo4119D9E5zmfgcJdjuAgkaAbKpRVsswiUxwTu57Wm6TYxN",
  "key13": "5zuPDRtkbVwKbbWaBrvFffgoxW6UKN489mjQeK82LMFirYErG9LKviERL1roCX3X3SscpqgBh5EMfsRddxa9wcLp",
  "key14": "5crfRCr5QWGLafbKc9sgTtfPmu9KiMEDfbMa3ozcV4N23DK2pAN76e4tyXLEHvgECBVmQrMs71u7QYStLnpnocDn",
  "key15": "ngNamCrqebE45M5xmdgkRtMbPtb8NPrSX8N6Rn9rf77xsBJ4yGHf1xGcieM9nSpvsbmtsQxe5UETYqXiju9iaxQ",
  "key16": "2LqFepYenuEnKoFUa3RKsx9LtYK1a4ZsqLhML1rxECXYRHfwMDT3oAKaNAEPLBeow6yRQnpg4Wfu1z6tBjRJ2dRe",
  "key17": "2qhMKFqVjUBNoNDuXdcpUXvjmJCJwCN4Tir3esAx7uhp5qnTgaK4XpKy8W7fTtfJ7bXJ9No2ApVNEe735J1qY7o9",
  "key18": "5aGi7k6PkQNeG1gZafbQfXFSLHKK1DpACtruqcyv2eqL4D1YJbRHGmw8pitnwwzZw12qU2KgCN4Wbw39SS5PCJU7",
  "key19": "4n4Qphet5THqRiyEBLrGVARVhdjtFdKEZDTDAbii7uX9nmGUwYhBtpeokE2Y2sHfr9EBzDRG8pzTvyyS1PS7uGiS",
  "key20": "5k8ZUmggSNTenCU2PCLCGKZkN8zgzBtZm9RAADmjsyKGsaLQu5GEGtwDb7oqMGhhBywLGvAtajyhWeJjcSeUyHVi",
  "key21": "3ivFFHkxrQuW9kULx2pbCJPrJ5JXUHkBEYjvMPtfABtyrwnzF2WrzNHN3VE1j3xtQm1nXhAB9eoUK28AV7pQAt2E",
  "key22": "4WWm1bEK91Uwwt6DxcqVSZ6z4CneYx4USGT1EAk4NAunh1izaDWowpA5NP8oCvnt6hqd1mMQ3cf9pRD4YUty9fLg",
  "key23": "5Tvmp9yB67c1cgLHqdidHNsDn3Y2h1kCdg4L78szMAKh74EH24uhuwVLvQyFFWZ2od59R3GTFxhJzFwvoGLXzs56",
  "key24": "53xmuUQr1vPjmgB2BhwfE623LAWm3Asa1ShPDMcV17gY9efUUWxVgS9cPzg3oS1yqcyTX1PfX638hfRoA5LKLfx8",
  "key25": "439voCjxq9FPUmsW5JwUPqej4xPPVUcpukZGcemXJMct2o34GqBBu6jvFojFN9zmAv4mBMXLxuZfaPoVXvbsLcSQ",
  "key26": "4qqSsemwhSQcHGuFNaDhr3Nzz74kPuooEFtrtwpthtFpLfgPd2MK6ubcFXxpPgj4JrRBzm89bJN61J8YjQdWDae1",
  "key27": "2Mi4y6dvVUYAyH6sPEi5J524QTaKBwtVdU7CetwyznTP9xC1VFomYLjijcKs5cr1U9QSBBfzd3xjnmNSuNdH31h7",
  "key28": "3pJVENBHpi7RafEmo4BBo49vDTrST5uzuVPWkmTJqn1Zpnsq4zfGqqXq633Pa2Y5uJaBPEaQNY4g7qXY7hpu7MFX",
  "key29": "3qf2GSCLxoyo8NEUpcMHdTSdcQwoyAdeb9X3PmaCcbPEayy29skUcFj1WkPzmtvaHh1LfsU4bKURJ5ceXG3BuBn3",
  "key30": "V8vfsPymth3V1odnJFwGP4jqKVMaoakAiBiXpAP1r6RbxQAnVbFvehC1sLuQG89xbZCcTJ1VvBi4fvnZJgP2Wy1",
  "key31": "35ZSu3LxpGWrAo5KdDmfAr84X2gCVyaHpXoKNyro21it3uy8zwLAMjoMpzfFPsdo1D8tnTqXu4y1P4nGQvwXhnMR",
  "key32": "Mxfvb1wcfsNthR2AhXLTBS3gPaGCjUjzD42aVG1UC1pWQWk5iMSDxcHWy6qfJQWFFUwNjvKjqee3QPXZzkD16u2",
  "key33": "5VnxfZBmp25X6F2ysBZRF2uyJ4CAvVEEpAWXwrcBWBEwrKca5zmj1twVLJwpCU4D8qYofywyW7HJ6ckpzpZSV8wP",
  "key34": "4RFePbCgSdZjrtqpBJjEE5Ftjn6agNmGCZDGe1bQk589hQ1mKXkgrfxv6ADN7snR1tFCjafvPVx4asWSTfFmhm4n",
  "key35": "rD1iXpFHF8BvaBGGEmiwbSVXdgvaXj2hecBsGouyUTak5xHpE4RUB9G5uzCJ65uLhYRKQY3VJHkdt4cYVaLUXhy",
  "key36": "5GimdPx9sSNBj7nu5B4qk9KtMHexfC7wRSeTgDHQcTnPqhiunRnYU1tqYwYaWQKZVkJ352pjUGy9ZEw8HZ3dbqQy",
  "key37": "5GyD7z1mbw2BReChuzHLnPJ1MM5MMKNu24SeWpNrJ1VBCB3tZCGsWB1Jo8jD3S7McNRkZTTC6chS5pV1ttxJixTC",
  "key38": "4vkRfZfRpd2FE5LPemUJqN9j3EX8xPxVXSY1ryfyRAZjHep4tLDfYGCnUiGMsTNYjqKCoiCSxL3aT3zD2VafznpS",
  "key39": "3vSAJ8dm9t1PrmHH7gdWGC5n4MUKfCSkvKZ3KynBh85pg6WAifhdYQui3sHuvqagfqDr5u9gF3zE8hWFst9bvjcH",
  "key40": "5Fvz7bxFTXMsHKzm2BZqL6k3LnJJ7ec1P7kKMfgGZEuDfPyXoUp5jKcxADELfEdzthcQSRenUH5EgFnD9Txct3rM",
  "key41": "54Hmw1Y9ZFED6L2WqA6q85Qv7uPt3J1DyvF9STCUuBkCRgdtNXdu76xHWm6JSpafsVnmjsYiH6ApYR5PQs4uUiQA"
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
