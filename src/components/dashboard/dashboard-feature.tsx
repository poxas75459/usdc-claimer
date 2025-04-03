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
    "2Siei7CLuZGGwhRC6yucSGBjmrx2PuZQtZcRVhGdi2rMygBTB4xYJ1pPJMoN6Km1Z3FAjRF6fGd6cpNxz2LzyFfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7Lcuzjjt7DF199gF3azL4Pt8PwV3LZp82g1xvJYLMMQQva22T91AMHrXtZQN4ojg8i6WzMiFpgja5mprPxHd4i",
  "key1": "3GirdMA4biRdG34cuzRyBWyJgAemWZ5kYS1PtzQ526founZrNA2pduViDXLUojQtAdKmWKBug8tceS8pejHkLKT1",
  "key2": "7Jkc41cJFACpNhFUkY6YaASNDvHTQ2hSMtExmUUbMM1rm1CFT8d3Z34f4CVKevpwxXhsMTkw2Me9B1fBVxdJx2B",
  "key3": "44HS6koetBH6zvfHzVbqnE5Kh8Lua4TbQLy9418Adxsjorumtf7fii9p7aUjWy5Yz7qQe2qTrUVKrgWFMkNXsyoV",
  "key4": "33YNffJgyGy5oVanyzzoPdRuCzaz3nNaWu61tWocMGoAetbZYo1Vdz2MXKSxZ6JoLBzytt229zKxyVj2XKo6TKap",
  "key5": "5uR15QhmoLoLgGX3DDLHSxicAri2besAgYU5fwpiNEbs7guRA4ax4KuKXRxqWoiSc862sytKDuwFG2JYJmKKpMyd",
  "key6": "4pxkfTDnXPY7pHc9ErAdShGM4MP4tPjthaxuwKVg3rNqFF5WPasavCWKY6EB3jPJtzmVSePMPMPudqBwQwkUhjum",
  "key7": "2fFUB1AdeC5bVRdv6unyMYAKtUCP4xAGNSZ5Zove2KZJyFtP3LWtPyFax49g4rcneX8dgYSLRPcP4FViiMBnrgEm",
  "key8": "2CNBnT1mo6fqq9AiCCqVqP6oyd97i1qa9iKWkArHHvKA9SMXwoMuWwGJ6ZfzMaxMPv6qQBhjt24RauZjztVbHfek",
  "key9": "2heky1GhDq6g5x9rqNKvcGj7DQvC3FNixhszzdc1pHo3LMoFuLvKzq8s6bhbK4wTLdb8S1ofezoogt7FpAHemgyY",
  "key10": "3Z3a4ARJEaMi87PA1eTuzp1xFeQycRho2s3Wj9gYhibaLpgAhm6F4suScrX5SVtnYejtNuEDAdtFjF2ptZd4Q3ou",
  "key11": "2o6cRKFdSm5BQEs4R7xdRwJb6e5RnE8jBPDNks36fyK6MSws3rgNTzkpxubJihut67vKdRzEdX4fDqdCso2PKunh",
  "key12": "5KA6kNZztZG3qDrZSAqwxTCEjMcs4Ni9xVG5D1zguVRCk23v5AgGWZAf6q9nrdSPvVvwEUzopwKC58L55v2QUL8d",
  "key13": "2CieaxxFbjxKc8fm2CataYzC5SwhaAGhwFseEsxdb1TRYETSLdr97yM2232NhhFrVwK3cwRB9gRUU7kis4tAYUR4",
  "key14": "2ZJdrCYKiduSGUwJCGmjhgRFUR3581nmuQAQawQDpykgiW9QryEw5Gg9jAYD5dsyhuNP5pg4KwDTRphbSRc5hNjC",
  "key15": "2Mbrx4SPqaiEcwMkWNpqahpYpqmT3qty8RnuQf5wnk3SnnZny5kDmMf2AbLAv3aSAnTU7ZWxZUXyuHeMcCTxHzo6",
  "key16": "2Hv3FpWBXdzATjULBfdUgTFzsikZ48qmRGfzEYd6qg92PXJVoJSQJdF9geYcHhiF4uqWjPuS9wSYr6E9sGk7VD2s",
  "key17": "4DgDCCLvfYCCavEQtXo9jsA8xfZUwASXCmjKMueKbjyFHGVjecG2G1hhUDqJPyLWQaCcLA9jYUkUE7XhEWKfSSdS",
  "key18": "vZ8e1VM9XZebHv5k3bj3mW7jodZ5gGLjfqQbHtWWamqZHpJKYnJ7AHJ5Puu3WtceRWnMr7T4dSkTEhs1ieUhDbD",
  "key19": "b2MhXmH8iGnRNRcUqD2aTpVmQbb6GSSUi4GpUjMEhC8qUeuKNuxoHEpN82Grxb4d4GtXoCTTpmFrcMTUd6v4619",
  "key20": "376v2SYoApnD56hRGpJ8BUizrCc1QX7vUZr5K4uJRk4kpyzbQRW1p1Rwq4vTvC4Jc8KydPyZQtZXDBZUxicvScsD",
  "key21": "3iUMkbUBbLHEFjJ3iQoaM67JJKm5N8z4tn38zHKLmP1sbBraLmbgFDZvr28MukUQ5QZKJ65op6qePTZjQbTezLxs",
  "key22": "TBDNboPzcDub684XyrD8JU7kamQJ23yD2kGwV8Rp1PQpaeyt6vU6M658zBkfUrsrdwt7b9JpGHSpTqF13YuXidD",
  "key23": "3VCyA8CnwkdSGYTz438c2soiLAmYU24foXftB5DnPiCHFfM1TgDyphhXT7RpcT3DSmk6yeharYgkzTXpVcS8fvPN",
  "key24": "2tiWJMXgzgumALDeyeowJCAQdBCKmA1MemQtd19KwmVEYyMoExsKZXBMpMYUpcdwsvUMc1P9YMEBEm3qsF2EaHN",
  "key25": "5BZuqjYhHWWKjXfJhPD3wd1JacfjSZKbY1da5JPbvCvUHWVEniJvHVmQX14guBoTJjv6D2gA2uC3keFxMXXE11v",
  "key26": "2gj9yhkZUTSu7NKHM2m9M8Anx5vNqvh3fRN24E5xhDMDthBjDQKQG7DabSrtjoPzV5NLKX8AW6sVG3QNikAjJbFQ",
  "key27": "2bp1rCK2Nh1fkkGC5ufmPKr2fUDB2HeYpoHFaCx7prg7nNNbbvGokXbabsbjsCd23LGycYAMELkb2XW5oZXfnaUX",
  "key28": "4UNEAgkesjuEJGRoKwoSoVHwBmtWfAKusRE5XKkY7mzeKvaCkKydzP4G5Fksu1QyPjCvGpiA4DUbMXYZYyYM9HQU",
  "key29": "Tbn48i1pbCbDqUHQceLk5Pd6AN6E5p365zgyppjX6k2PS5Zize43NFHergbREFcoGcm2fC2oVw9R6JqCY7nGTyH",
  "key30": "3ib6ZeWp9CTMb45ry7MB1UR5jdfyR7Lpda1L6y8JoGecfNiVDMUsWgCVofEsKXefHHMfp817XaQGKAujqh9cfcGM",
  "key31": "aMHG8kiJc2dTGbvgYZn61RUpEKVqRyfz3ovj79wvp1cYwZmTwvY9necRgviVT1n6LTQMkF8wXWwCjvz4TPJnart",
  "key32": "3grgTxCaRgMygAjZogkhifp1SmNLHHpjbPqmvPqtKchsqtEEFiqxejodUCRx3utjGtTHtMEyRDo4rQYTaGGsuQdA",
  "key33": "2UwHb4TcCb7fNRzSGqT1Wuon87pQdX27b9DSjk1tu6VkuxkqqpYEZznjTDpDri1GYJX7KELZX825Qf28PHWNXRe5",
  "key34": "3vzE715m5LdR3ma159hSDJRUks64MYPGbVawCqar3rR4shMgXgtVGbqjZ1uWbKXgwHuajYY5oPeK6cCow7Yupy4m",
  "key35": "3bBGLXD5h1CvXh7qmchQf1kF5kDdsPoy12FPKefmghuC6bZh8kNJrkfqQkLheiyDS4aAMKRrPRunZAFtigTho5PW",
  "key36": "2zF9pP43qWqGzfh9yXtZ6QiwNmJCD2M9RA8pG5q2vNk48SrJCG7Vw9QQZspYNBqVdvsAHKaw5bwQzV9bogYDG8sb",
  "key37": "5ZcvLHGoGx5QnmNzEs7rEdTG4EBzqA7HtawPVRvuXwfgtVSDCGZ5pqngYcDpj98YrZ7JDPCtwegzVv7FjyqAaeTs",
  "key38": "29AoqYEvTEEhCHBaarMcKzoMEJu3W7pgCyx3fBPqbXLPytwmfaZefBvieMUpMvT2sFZ46cR83y6vRQCKWGZZsVbY",
  "key39": "ntTvn2Z7UChtNZHnWXziEzeDnimwiy2H8M2XmM9sL5iuL6tsw5sk7mHehTs1D6qUqyChPDVr5bAkMGdfkaMiq2J",
  "key40": "UG2vYfRFKW8kzGyWzSP8VL62Uc5GZQmRftRJfmzgRUMvCNfr4PAA5Ppv4fd3gTtfDAGE4jFBU8fRZ5LN8J7BdCv",
  "key41": "3WzjEPcWxwrJJnhNWBhxReqdT9LXUv6fy92ey87Ge438goErqXVm369cUAGc9XA8yzGWTiY6By7XVp94GESBYbSs",
  "key42": "KDtjW6QgY9z3xuf6qvkdVM24k6hVqvit25HteF4bAtGZWanKNnMLH1JAJLx1aJ2SoEFWNhfhAqbDYVk1qos4uBU",
  "key43": "4VgbmzsVFawjYiHMxjWuqcpQBhrXRiWjsHpynUaevPJTHiTPrNnkp21WggRNkPp3r2mwQw62QxgorymyjgMqbte",
  "key44": "3326HQWT9jpuq2wAnK1QuQDyAQSAo4hybyspAJTVeQzvDjNeUZNC5X9XiDUtNfYCKSweRwnB8gPgqgTAXKN9hioB",
  "key45": "aRW2D6MFQhDrtWgzjwrmHw3Hxecy5snMYi7B2W4u51LUJSCuvnog3AMu6nLfvDjPS94ATdCJomSSXV85FhZ1DUW"
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
