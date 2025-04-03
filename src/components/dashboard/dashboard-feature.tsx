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
    "3y9B1oNMETSnGNWRz2LkYyZJhdfVbZycyFzcBTMi8kTjZaGFHftbRyDZM5UezHmfRaYgKxK1Gb8coWazsxkdrVwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMJJdDvsJcxrR8UKGYn4b34Mn5UM5FVakHDrSmMfjZHoHqGr6FCzKfu4WpgaXhpfK5fZYqwpVbAwjwSsEPR8riV",
  "key1": "4nRK61zDs8RxDezsFfDb4UyWvKDok2FgRG4UpRH1xnznKvxBqNqr1A8NdxgmaTV7DCKLzxD9sCz39K16Ep9siaV2",
  "key2": "3itmK6CQXPtSuKiZrQLxcY5zpL7uCKjVaDffR6Gdqq6XCcA481ovQy85Vc8nhbhpkZZ2GSKUa6pSA88B8EYZuELx",
  "key3": "3h5M2zKwvVCwSGCFGvAs4AHgKbfUm2vvNzrMWHVBUhzJ6WzWmHMPN9RMpuxAdRsAm9XDVDg6ni2Ezx7YkuGuj4N2",
  "key4": "21V46GrrkbkyBbbw8ya7d7qA7jKBsQYntpueGFLU4YH4zBCzGztZuhJnu97sqYZc9z6gjzM3DHCLjKsXcaaeFpSh",
  "key5": "4EPPtYddLUsygNTtqPMoTnNSHn88ssWYH4LTq5dd8C8YFUF6tspxskQmB2ApivVNJMhfWStKw1iKnCuLieAeEY13",
  "key6": "4ov5nwmVyeR8MLGYj7EiuDy6V9WPYde5FdsvUjEX76yW5eXHKb8XJwMxUUy1PcY8degn3Taut6vNc2dpgKrniLHa",
  "key7": "4XWPGuQPdW65LNh4CzonnrKeRAfGHFvara9Drxi7p9ThhPJUP8bPd6tsfbRVEKfzYd2B3QL9bD2Ve2Vgv7fJVJuH",
  "key8": "3tWnZBLkvTwgT9jm7BbMLEEwpRJ3kyZDb43ivnd1NniP7gyvGRK9eG47XeS9eeSFdoP6NSYvFQsnYzwrXMcCmwiV",
  "key9": "4n7HcG6G8S2DE7DeL5QFzN6HCRVr7j8tU4JP79bZNZaWtehy9itkhCduraBeGcJhbtT7GGciggrNCofkCFbHrEVm",
  "key10": "5dXVu2tq3a3SZYexy3xmsfJ3hrMq63B3vd2A9e3a72iTY33EeuCUJrS5s5JMicZ84UY5ZVTsgy7aYUazRkwGsgBF",
  "key11": "5y9syUmvRS7AUF5ucmLvWcpKoU74yfUMnDcSuLRhejtp23BWK2pM1a4R2Bg5rdEnupjVQ5gMtY34jiW7jYm3hVGU",
  "key12": "ni5Y4oBc8cbDLzzXWpErSvzYJmGApnwonLKksQTDdY8xjpf8owmsYiak9xf2Ef9gFvF7CoLuyXqKdD964fwqNuE",
  "key13": "2uxv6VbTaD5oeBZrYeTeVJGcZFxjUi3yzbptJvmNfS4whM98xQdbkUC35gXNFHWq5uXpxY5QuVgqdQ16FpcfCLmr",
  "key14": "3Urb8XGM5e69rXBeFpXFBzYiLfpT7HZFRqZ6X4eTmcmtXdMLwri1G6An7ZoqZjXTgtLNsJgxYLtK2bKgM3uCj3uN",
  "key15": "3izjc2aYuD9L3h28JeBoxCH6ncLpwQwnHC2ZpKA5BBMKJPSA2vtKsW1TjdzSp6PpGzVmBMUqC9dkPz6m3tCUDDw6",
  "key16": "34ARCN79EcNjPRcHpcPBEC2kXEw4NNUd6usDQcf1EQtKduwUk8ays9M1gmYqZzSxD5zQn5PVz24XdXmeHgYsR2DR",
  "key17": "4dAk8fyAkVcBM34akqA9DC1ymRRykajpmGLnh4x2WfaNhYsVeahbmVzYnot7fGB5urPVou7toi6tLjfRUogmAjeN",
  "key18": "5wP93YQMCjFRrXQ6had7Hk6JWPT1U6z7F19PNdhzhHnD72RBbMPw8JQMrSYZTg9fB2dSniyoK3DNBXBesn74dfyt",
  "key19": "43FFTmtNriAARmCLR7raMPqUvgBZersBxYMt4SdniJjNfdog5asrMARkVwKQeWgAycGgCV5ewcYfSc92oBqy8kj2",
  "key20": "3hcCsxKFUNmjEVxo4vEBwMmYeNZabHdVV9B9exur8SixycD6YLYcUQtW388UaoyinHBzhXUJ7pD6Ww86cTyk72A",
  "key21": "5n9vh8TUgavyk8EXihwuFUg5VW5fPqbi1t3cuwrU9nL4L2Ato3yeQ88UUsBHKrGTvqdXgBQgAX1P1YTzM3jLJW8X",
  "key22": "2FMucefSSFvnW1pB4ga2n71yHdnb9QCkbjR8YogLconQBV2HhNB3Uu1WkmtWmAnHLB46YhiQt8pbz6of4TjsHd3H",
  "key23": "4TyT1zdxkJJnmpvMRXVW8ixUARfhWY3C51nn3HD9j3fTmoNpaHszdssHsQgttnB6N55SPbvzZcurXRJA95Wzkfwe",
  "key24": "2uebNoQBorc7sf26t4AJccN7jGmk7CpYoWPnfJ39hZ1YzAWc6FSKBj8TpRF4foB7mXZMeSLKnAjMjUGjnUpyhdxU",
  "key25": "3GpuPk8bWKBW1mVBVPZMvRKha5Vvct62aSBJVx45GA7xMaYxhHa7FuvyXAR6WaEGQwsaZqVcLJh39dzXfkEKJW7",
  "key26": "SkKFmHQrF7yxHX3DdQ3B4EHXBcZgFhes7pnBcgHSU1yFLwzYa7KtVvpx1ZJ15Q4WRCbMe1h9WzauSUya7CFLJ5Q",
  "key27": "5UgwNAy2YiHrwZvyCxzaybdyhiznEKxhDSAigFifKwoyLhVxMjR9XTLcNCqE7eZWpcJbpU1m2gd37XBCGtwczJNg",
  "key28": "3AZE4WXcxBiNkMnMMMpRbrwjinoz99LVhFgCZPkhLmyvS1Bwyb5yQkhotyXoCVKfvoijeTqx4UvB1T4VJcVBtq29",
  "key29": "2Hy4EKRmxYR7NzhzyNssekiHZV6dn3aZF3ETL9gcURcFKCRiVtjC4yvYdLgTCHMph7ggVpf8UyyZwoSxDxh4ovCc",
  "key30": "2wpj1VJ5KnqDBcmC7dBfFCMmBxf3FBwvPsFXdbmHWPDHhb12sRta7tJSNXbYAPS9uAqUrZRAnpfeEGuRhh1RABCK",
  "key31": "56QmBm5EQvusMQnexzj7yUszzMmECy6rXjK3LPA2UQGuQi1wkRr2xRdSm8cqQN1TbDq5TwFBFJGsmiaLM6cyqq5k",
  "key32": "5Yxbm212jXBWCDDRRgKzDULmJtxrX77xQHU7tQH8hfwaBUEt9u8fmFi8ifuMQEqEf6CZSBNRxMywMc3N1Pp69q67",
  "key33": "XAaUFEoSJcdci8tZPKa8WDEAHyum6shASzG5Cfc3XcCpBXJJD3EMX6aSzd6pWSF7Qod86jvEx1pPty2SgKDs3DQ",
  "key34": "5ma8vMHAeA3ivim7zYYv4XVCFatDiq3zGVnC3uPVZfLFwkzBpQUzZrhirPAtT5ZdAeuY9udJPY7TcVP5A88iErzq",
  "key35": "3QMrGLzj6SsYWzf7xa3Z7r2vg9EHJ2gUiy89DZEPU3fDBfG4K6EthSXNAFdD71waigjaD8iJSfGEsgyWXRDGtejM",
  "key36": "2TCaKDKmmCaEScu6XSAsPPAgukg4pq6BoopbLVrsGgiHUv7vYNA2Tpa45Rx1axdAhgrE5vsnoxN1fhNGPYAubtts",
  "key37": "22VqS188jPTKaxyNNSwyPwc5tYipCtrEdDTophp1oCchB7o6ZXUTiEYtK2KHQicwr2JJkrXS2YZdHrEf64QPzVEW",
  "key38": "2iuDsNBjS6DYGH1fsqLbt1ky3qespvAiibBPHQM7Bw83m7WRMhb9dbZieKVmMdXGf4eCjRHxbevh9eA6WvcwfAay",
  "key39": "4mBMA3JNtwTUEH5gRn42NBUgu4MLhKp85F2LXDCrE4cLjCVm8TDdu3kKMheW9yuado4KdQiwHZ47XgkFoXyW8Tu5",
  "key40": "okQ5NAi7bAveqndoRTuTLBrR6UwyRYBVbX3khmg3RnNrNrQyziknag1mWhDTuYjWTtr5UxLT54n4XndGvZ3zyVh",
  "key41": "5XCTJz3iEqXrkWm3BetNyW1KMoUSEnXSARL63qsTPHrCn94moaAAwV8rgMDGXwzWrAGKnfWHExZv2zncpczJoKmK",
  "key42": "5tWNvVy1BTYtLzsqjmCWwmvVEpR7cVkk9pqEjdESKFM1TWagV8UT7RL1MWEj3V9pVZL8bgJJLNCY3UKeAHsQ6rxt",
  "key43": "2cxr4RCKFT58RrdTzfU51Ka5gU58g62tE33ewEWXtbgSJyGLmZtbHku9U3sLNgCtPetN5wDNa3t8BGURXmRipatP",
  "key44": "31QymAzGw47Nfct5ZP749u3SvbjzagXt7nPWqTZAY6wMh84idJRf9AiHBCLfwkFJrbrddCqbniASZ4Nr9ENHm2bh",
  "key45": "2CNHccWCL1vf8Dsv73WZprHRZANjEnBheRH88jrzpWRLoqBViXYebv78XXaPWPsati6o1JGnV2Dg1iFcE6gMdR9e"
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
