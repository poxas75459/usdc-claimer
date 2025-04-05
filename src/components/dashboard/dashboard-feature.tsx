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
    "4gKveSxAUUjRyEWDbMCy4QW5K893Ft5GnrCYqgRyRBDPxkDAZazYPFsUxn9WLpv442XjnnBE8zp2vyGVcSLN9UN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhceeebmMYGBv8qmjaHCVPGpTDGucb3wZrzhQ2ZV54LH1aYM3KmKDAbikFAkYVzFvAM32DbLqPLpRGXibapEhxg",
  "key1": "bLngpNg51kHD2Bkh88aU7r9aKry8cTQMrEUeagnP1atdFFHYpqJRmGQKbxaEd4zb4rNyVQGowLF3GdNekjySgaB",
  "key2": "36MQji8Stts57pNgg6SM4irGP11DtB6XPpWPeQ9MFyJitmTQb2dnNdbojdacRxZfAoYmzgUPYQvrVCpA5DvmoWm2",
  "key3": "4QUnCA3sM4k72zCfDoD4nK2YtTuJGTjYrpQ7dh7rhVRyRXngr84gYtsFgcFdixSztdVVu6bwWnbAsf5S1T3F2wC4",
  "key4": "51sLG6EmpBE58tbiFhfxgbmn93VrucNYM9FPo12SXxfnmjdSXRYtQZ9kjaBDXHS42w7i7m7yavLnew7SDb987TFU",
  "key5": "48mCbjeXdMuwek31byVZSnKUQRXmm7KJ6pBZepPHQkEkB1GMRqxFsQWLcVyWnFUbJEEWSkUXa55BR6C2wKPTasiU",
  "key6": "W3ErfFxvK36Pnzj7zisFzEgzfkmHxiGpN8qCg4bCmKoBhmAQXzbVDkNxE1MUHNuC7Tqz781tkPbi1ictNKeJ3By",
  "key7": "RbP8s4bxLcLpToYGd5PVLo2NBKXxxt1jDEwwPyhu4F2FTBP1AXjwAEAo8XZRxf4cwUezbznRoKDVNZVPUzGVzBi",
  "key8": "gacsAG1kCBUaZrzzxcdJRMdzpVJF3dsCwo9rzk3AUfdTUEgrThhk9wCZhiwX9MY7ULi9YePaR4JM4YKrMFaqG1m",
  "key9": "3yhXNa5BisEvNGDkEhbMdfYbCaaqnwiKhVqPM8qf2NQfahvhiJdmWyaZhruQjUbLHWpGsfFTPJFZ4JDFGgymKQik",
  "key10": "4XJNCeXymXezkCBJ75nG7W86eLUWfZZyyTqJZbvn17u9hJgni8CXE7cUFcsRfMzqVqpW3qPKs8AZ274JYQaPr54q",
  "key11": "BJTyG4ZSjZQxGYGCjvv3Zg4vRepKCTixPjcXsKRKgw8ofdoVMtX1kFYxfAfMoJe86QmeKVT22NFrLVsyCg7rSMt",
  "key12": "5ja6L2CFAeFoJJu5fUCRbCx3TiLbCfAfHevWrdLASE4GbcH7fkNDG8GK8WbTYy7LGa4idnmmbiv7Re2kTE3147B8",
  "key13": "5ZQsM333hFTcLCNVZYF6eCHMTrJHgPXkCvAjpQuEDbWcYBw6DA4oEoRY3testYFezvjJ1hJK4e9WCSEraUuS7kpN",
  "key14": "5kWqzgGJxMfezFWNng4doSfkNxekaFESHMX5NaQKvs8sAh29mDjxo7Bts9MLHZvaugzZnTdU1ca1hgUS24rKXtop",
  "key15": "tXNkCT4L8RM4cdrUANFLrh68iJjRqcEk3GyETg6Vqn6AfXBYMWhPwc2o2hPKUJmuy9o3CqJqmYejRPD77M5X59f",
  "key16": "Gewj2aVMsApUfHsCEa1LgYWp5cX5dyv159P4QyDUcHyfMZ656iS5m9qy2tKQhdevtFzt8qcQgADDmXs6RbuQLYV",
  "key17": "4NcxLCGVisA3R99XkaayhoFcjFfrymH5MfWVNiCx7zyKyerH2iH5KUauqzP6B7YXWeHZWg31tmeKiKHPEdsTVoNA",
  "key18": "TBvYVAMxdETvKZYEf1YKojRotz1g5PnD5GaendDEAqmkXMvgW8jgyXrNVJqkjdHBmf5wqnGu1a7EAxmeo53qKS7",
  "key19": "2XgMxFSW8sD9rwaLQ8jPE4Xz1oifraUxyUxm8fn7Tw2XZ4MeaJi6tMBPvZpuvD3iVApxLVxzEsxd5bScisUAxMtS",
  "key20": "3WbhP7dCL7hfvvk6r3ag9fxbi3wowAVb3hGoZPExYfJCFKMNVeSsTFt3JVPXXSc32LwnE1pwmpe6M1pqJqmXtBxW",
  "key21": "2NAXT7Zw8qKh8ZHABPUg3zEr7PaP2vLHKA6jLyFYKy3XdhJ6mfyfJ9Jz1gRHK6vT64MkpkDbrCU9XEXwPzPesdW4",
  "key22": "hv9869GkP555a46FKwLSf8Z2MUWeYNmfhAGSbnNS4wN7CJ2jZqMttyXAmoe37Tjab72KCudpjs7sU9v3ku8MW5z",
  "key23": "5qxytE8s4KJLomzcySYvxW5DL5odpFRwfKriw6ov9hDWofbiXwjcwZr2Gy11fKawEVVo2XzyZowHzgK93vGFzak6",
  "key24": "3mNGoa2qbDtcUPaR8wi8uDktu7qTRBxgL1TL4oZ9v2U8wnjrVhGpRbNk3bZrQZkDeTJzWAZKHyGani9T9GC1bWH",
  "key25": "5Sko6GGQMVJeUXCufdBe5yyteNRUs79MADp6D5jMtajoim5J3nqDn1b28GTFHeEjdbveB1uH8wK5qxD1VycEowt8",
  "key26": "4WkKG7bkZ11XZ8Grc4ucW6aHFUtvAEpeeixFyVjsxn2owQ7LZ7sU61Luo9QG7kygZzNdtVaB9sKnMifeiAwpkqps",
  "key27": "wRwr3FtVp61vGfNDpYn44qPXmuSTCfgeb9EXBmtuaVkZ8MZogzxFmD4LKUArd7Pp1dcDW9AVF9kJweBfpGNbuEW",
  "key28": "YW6r5Ed8XwQYtCKeWLtuxXNFXKffsQuaMurdFcmDefyk3NmiegVtQ7FAp7M7X4TjJMDKAwYm7mXRQ9Txy4mu3GP",
  "key29": "gDEkxNiHF3Sy49dwUsxdyYpDRNQd6gC6XNrmguoDWxeugppoZtXmfEeW1wic2dZEBSAUEfAqJMoACwRVLZ3c1Gw",
  "key30": "eUcSStrfRmfFUhoUy4uPgLkbKNoPFyNa4CRN8nVQfW2fC4b8y7Ze9bcRoXWbEEE4edDu6yyykBBT9h7a8or9PR9",
  "key31": "3yxCXfCGdVAJe9nizQ7XqoEvY51hSuGbZVdKXXHqXd4K48ZvMxLGRiuKMXeFm97Lq7RGgnTTWj5WNdBoQ6FJZgxt",
  "key32": "2jZShj3axdYbFvo3ZudpWwa7nEB9RnjzCkdsrVP7F5WjwNxpSzP8GK27ocgt7x13wnMQXBsUh8CQpig41rUqhEM2",
  "key33": "4HXVv4ZsaNQ2BNjayu6WoFb945zp5B5pkP2asvq4isxVvD9ExfMuea3GHGc5zUy32wZA8vvtpw93i7PUguRCZSkf",
  "key34": "2hAxG68dd3CpWG4LEZrfkadZJCGhQxywd31dznkvCGVX3gAgMb8sfqaSWFvnkgWaYBMXwBb9Rqd3REqSPnqdVvSB",
  "key35": "44gYHeFoUm8yM53S8KrBSxGUnKneX3yVUVMEZtGvfTDyZ5os9zrDuGyRxkGDWzZWd7HB2cGj4bLEjPGTwauMbWjg",
  "key36": "5w7f8jaMksNNMyH3EZRys7p2BZErfxiKMMkJQ2ev8tVNjtPUvGzkdrrx91sUrXW66DiXxeu1RT6dAFkwSUxVh9Df",
  "key37": "2ZMsCv8Zya9pfkJbUXbrTtAMrEcpqCjTKjdmwizNbRUSnjwr6j8F2XAEzS7gjnKpS4y1iMhGkcDLPEjiecAZsZQT",
  "key38": "4Nc8jMtguQ3gyr5hVX71TAZV6etpokUzd5biYCiXsXg5yDHjEX6V5GUoRoNo1yFPwG1PFCDHcgqeHXqWHUUvS8mY",
  "key39": "3Q5tUK6jRF8voE9AzUaSrj4ZPg5Riz3mMG79HyRgxnfTLoheD3v1fDy4RwPxrCfvzZQPH93F3ApRLQHEL69ivsiM",
  "key40": "59KjBiiNX86ri12SsMFwPdSGJJ7U8gP4cihJPrz1giXZ6vDqcSArGGNd37h9a9b7XUNgk8kQZQJHRF9vk8W6siog",
  "key41": "3cBsEShGr7dUrwo1mwEzVnThCPMSK3dLksSeiLdhw5FaLhK1VeGqzh7YFEu7iTHG28BEoTPy7dufAdsDFjLT81FT",
  "key42": "4TbQurArSyZ18uF5pWnCR63YDGv11uamzqLEfPrbQ4uK3epWQXW6BF3qTn1tbENGf7riWYuM8G9MZKJvgdpMsC4F",
  "key43": "59gjEPbmhPZoShsysXAequ1N7z2rjndRQm2FFx87SEMEx2ZoriJZCi4GsjYcdD5uZxwmPxqXxoM9MtsCmdmWeaTa",
  "key44": "g57c2BoA5FocdFa5ziBxtQeP32dozz6uNtPjdNageVc9XigYwLGe6ycpSHwhAA4hyLcBfaTViFChG6dsU71dffZ"
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
