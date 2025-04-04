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
    "4ceM6WgFXkveSyhhEpHvUK6orRBksD2sWSX5LsuW7vhzY218Wt1TtokBAbVH9xnjUdXvFrrctCspKqa4ntBvsXtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZQtSCDdv3qdyuwK72i5qFHgLnEJJD1rTp6iSU2Q3F7bCJXzuC1ua1wz9Rjvg6nfH7hcU3g8Ru78fhGuKyXA7SVV",
  "key1": "1oodLjenoUDnhNS91UX4avMoPmQD145WEyW2NpiqfPry4CLLjTpRGUPzKgozaXngPoD5nTtmZfkkuVFz7KvKkDN",
  "key2": "5nXkouuA2P91mVxbk42NBKAY2va9ZUtavB66F9KN91Ct9zyMZ6XpVmCDNFhj9KyMJe3yKGN1bnKdXQY79Vi1yYLM",
  "key3": "3j9K3WMaqH3dBRa9cmSzHM2W6HH8t3mmoZamffqDQBfn9WBJwkThqnNZ9nmMbu4AJJkzgJsGXdcT15RgSjt3dRz4",
  "key4": "q391k1jEHs2S41CFNf1QJRbT5ZQSYurySYgF1hdUY3sZCFzeTVSX7nXnvL8msBBQMw9bms8GrZXSefKinMw8hud",
  "key5": "QuwxjyQitEoSrgFvYgXmLWgF8u54mNJRQ9WBKRaVPdb7tdYpLTHJZZuY3pAacxFJwPtAih23LbUady1smCLZKbf",
  "key6": "5GdF5j5eyHy3iftn5hqUXMuj9Hr23YKTpAPemn5aCvkKzUufxSGtn4uJrEc234KAFentNLfryj4EnHmqT9gSSx7x",
  "key7": "4tLjErmFCDawzEpuKZHc7ECVEPRSZckpUtgNXkJHUPuBTpPXQifGu8WmkLaQbTbRmLUZCWrmyWmzCFJ9GV9Xo3bS",
  "key8": "36K5PHEHFKotg5z66PjxRpgoHN2D64P5imXsSZfrCbCQ2ARhHfxJTBv9g9CKAEjE5XmqE55FPaAwTwa4JSZFYzcF",
  "key9": "4LyN7jPfsWTCdJ41sXV8onHvkYgguFgeaHQvy13Jtoe7SvtMfAY9WCUiTrydWasmyCaEzn6wRhVyaMUtD3r3X5CU",
  "key10": "N9zqTq8LR74BHTRzBEMrooUERPv9KUo48arBmPrS9QHGATdTVKViLvkcW1EH8wUiR4NiXGBaRLPQK76S4KqbaU4",
  "key11": "TgMpu7proatiKacpyucp8RaQDbfSAkVZpXRVEY2WNVzZrbwb2AYeHd9gbXzag4bHk1h2so1nDrhmKmjnZrVWAM6",
  "key12": "5jmmdJN5RThQkYCSS8tz7bt9yX1mQiJt2AAQECX3tpo34vMVD9Nm6Zzg4i9DDEE9U8BU7bpHBQaVqFocdQjcXG2w",
  "key13": "4qnH8Dbo1Km4FizzsXQbGNmE6769iG1SLK7A2jjBLBFfUiVpisBkKsmQ5a7yyskbAoyvkZSQ1WjFB15MgoTENoCa",
  "key14": "3phMW6BDwuAeS3kdWmbX1AwymcEFfaxwU7cRjfp3AUMZJqdJftnWRqpGZn97rBuzfbu7hN1WcwiiME58GTSxjE9C",
  "key15": "2Aya4Y2RCxPiF7dGe5d9tfsBRHeru4oqSTxEtQGSteXtt6fHXT5Gkr2e7DMxQWEuKK6ebty391JC8fyLNuaf9bA",
  "key16": "62YTzzXoVeKXqhsT5xTZJKxSD8EkSzcEFVU1uStd2rsyKxjX4xbMqaCWpx5qkjbRZTwaGPHovmc8GAvN2Tnduxso",
  "key17": "4WDRTB3dQSBH38Aye4tnCb7QMAA8nrreuKdPucU7DLmfXhJS9KuFoT7biuzEeWS3aKUCcfgFyK9S4RQapcsGuo5V",
  "key18": "3W3zewNqwax1UGZtxcLTsQL7jocMjQGakr8bAYCBMUvYrTWUarAPetQsPis6b8pPqJVjzsqXaJbgcj8fbrx46waC",
  "key19": "b5qFCoTq95gy2vSzQ4Y978jHueacHBUGhH5HEJswm7UvP65PEFu1RRpk44knS7GktZXpQvCV5jZDc5QLb2mgHUG",
  "key20": "7ZN2dKPHmiarMqnsNBLNLUHi5YR3afN29n6w2AZK8sdjRuNMUEHYoi9BJXu8SKRiyYGwgdjUirxKEK8zjAB1piq",
  "key21": "3tnc1JDPRk6T3erksE9Lndf6QFvZ6Tbw6bqScpoVaUnuUSN33UwrHuEEAVexmcj7tgfjJVvaA1QQ9s9DDrdDNe1F",
  "key22": "5yqQPY7ytvaVCwtJj6A21XiK3BEc9mMQfk3ZzYH45AmbfPbwFLd6mNZpMQMFkdcDg8EBPA6i1DDL5iUEn9ZwAz7e",
  "key23": "664Vhfevy3HwTuqokz6U35VgpBGeGKzL6PvP7wbM4KsBAfsR5QsoSJJGi2Q9p8EseWtUjhrehb8Rj7Aqdz9qdWEP",
  "key24": "5wonTD1XPeLMaSfnYWKdfGXQxYkwQ4UFJ9QheXBR6VmhE4zSwsbqAQ8CQtUiQPbbwRFxNPGHheKVxP5WLvEfRLX8",
  "key25": "2Bc8nZNKTs7H9EScGyM1hbdWc1sgop1VMvPzidsVDUayBXUjAiHBod6gX7pQZu6VWGechuqbzZhLmNY6uvS93CS9",
  "key26": "24DW5b4HJYfzaEBt3DSYHGCsxT9P3RtkVgkBbLeCL2tTTukCRH38jsVSxg3zFfrzWd89Yzw17fCeK9AEaaY9FLUC",
  "key27": "dCnuZou7w7ovAm7ZvEYFYVk5juj9FCcTNyPrmGxetD87g7z1NZ2mP3ZNifKgxLoPncu8Xku7sut2bxtnyT59rum",
  "key28": "5eG38avWghdWVZQdZR6nA6PqV1gMx5aeFzYNw2iCjtenRBT2rWXZVwdaiJvd2oKbJpsDQg5VQBAU7QfiwFTjH3Pq",
  "key29": "4skZXCYsyzFgcqe5FYyZpEyE1im35AhcoZzFrRJvSjTNFGYrBsV5pN4FNNoShBkEv45s69BRUomaK3nu4xfHeKTe",
  "key30": "4vdPTnhuxyKDH94nKNzk1hLz3EMY5jf5FDZFQkL7c7TwZQCJcnG91ABB77TwcUggtRaxV9ViSPC6Rk5dbY9f3k6h",
  "key31": "4RKsAABMEvbjdx3wFdXH5mnfpDebiSaCq4jb4raU8czcmvN3GGJL9kVyjiAYeGRXFxAcJWPC7W553n7PGCk4jmkr",
  "key32": "VuYWkLBUTw6vw81nPZ1JtZxS1A86VuvuiCyzgUGAmfHPAkqMvyBVyBafAk5ctN8xLHxiPimQGVKaQZ2uLCWVu5U",
  "key33": "5NgqaRJYQxAK4EfC6rsyktZWVseEqfZx6ozk4B3hviinHvY5dLmF3nPAE3QRscCHdTKUneu89zoJRMSqRtdhpXEo",
  "key34": "5vmFtBqMShnYj6phrE9EfBoetuuY3huCyJnLvo78h3e6qCsJ2DqEms9gdTnGqe4TNowiMKsZ9MkKUKL7mbAyncfN",
  "key35": "2kHpxLthPu1CDcZaNC6EFMW5ENcqAriFE8CCoEbN6sKPZCUCBeihoSKggCQQxyHacbp4Sy8TktqBx4Fw4Ba5nkaZ",
  "key36": "BGWvhUDieYt9M79AofPudNarfHZmkS2csCjETxTietJU3JxTu9AF51GU1muzRbaVy7317z7Z2zcuV4SdeegYibJ",
  "key37": "2MAut8FCWCz8vjN2oxoFSyGDwVYEs3qGDN2FpSrikqyw8UYHR5espJW6L5YG3QdBMgWEvuASKtcMoQjyu1AHUEFP",
  "key38": "qxa7ynZaL2kaeA5ahNB8z61E8RLnth9Wg7E2nPT4aKo21rCCLt5LQmw552YJYFFJXZEXjhGEDzZTrYCJLtwwTzK",
  "key39": "5YLSVbWyCwH5tcTeLA6Xju5mym9c43qUBsqXcjJQsJ5nTpJV6DiPtKyMeYkuV27jqN6vbRJrFxQLH1sDwWuHVGjR",
  "key40": "pHB2M4CMwTcZnwKom41tvkbNAm34aExjbuitrTs2dkDMRNrJDXwik79N9U1eeh3LVLW3hRaXAEgYHwVKc787He7",
  "key41": "SKyX4rHKciB6eoGxfDPppEfwaHiKSw3HWksUzTonFsu8KeD6o1XBmu33r4VtVgfbvs5zf1yLxJ2a1WaTH7BxFVu",
  "key42": "432hG5yacmLS2nNfBoA6gW7BgPTNzTJSNLeGitpF6H8uvZTimgkV4NG1tcgYnknSHVoF3Z7sSCozgFaKUdGqpovt",
  "key43": "5R5rN1akZkhX4XABwQBt4ZkzcbFjnjpCgsk4QagC7zR9zJ8nnSKuuYjR1roXn9HexBZDbj5Ad9kcM9Umb6DpNojt",
  "key44": "EfsM6nEgFw7Zk87NMnxyHqfwKq4ma52vgyLncJZfRqsygSBQT2zdY6iX2E2jMVmG77f2qNGDniVfFTXyfMzgDoL",
  "key45": "5hHM7Veq8waJP9Sqh3CJDSEKnFnUbd6CfQTm74bHDM4FXKWwrKPsGEXv2dkkZDpjpbjYT2PePHYZ8S1MMkhYX81w"
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
