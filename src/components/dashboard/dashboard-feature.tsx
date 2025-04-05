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
    "5VFM8ad2C7BPqstsEX3A6nyuRqxPg8ZZYr2NYvRcPSzukjNCZ2ND1Xq4kW8JkzskfnKtECBtrUGgPbtmYLazoCvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YtsNsqu7CEwLSMEDuP2ipNHkFLA2jZ5ZRP9UfkfRTwSpTLkJ4fZkdwcARfMbJYMS1JhJThvBVnZ2P2m2AACXgfH",
  "key1": "5Pt6g6TLUYCuJCdpGZQvuFHcVJ1aALmAsLmkPUx2ZfSNpiqTn2rQd1YZtWwDZG46JpUvgLNVTgSzwAqefTPQ8yY7",
  "key2": "5PbUc6TEzTcPRFb4dPzsNfRTrKHnZ2bVjt8T4ng75VTCpbYQYYGFxnKbumNr5fDFvr4YFKz7KcuHEqw7U2mKgq7Q",
  "key3": "hTF4yfgWvB75ifBM7G6VKBUpW9gY8qLcwAbaZxFZUHnDLXgyKbewwpNeT9Qs1czcgQ2TcHmccY3FSgYJL9P1vkj",
  "key4": "4Wm5R8cPjR5m8sbhmu7ZpVr6oKQGYxFYGJNuu5u7x8bpinX6a4y1Wsh5t8o2ptmfMffgRL8J2CewRWTY1Q3J7zwz",
  "key5": "VFugg59oHovDHHVqPZb98oybTmnFbmeDHWBEousieXNnRJxtp8KX5zfYbQSXAq3kgMLzavGj1UVSkxwmP9toQmh",
  "key6": "8NDKpWLNpcih6xdvFgeFFBZbtRgxH4ptrHxstdL5aWzMJ4BAy4wKUAtDNYtJ7gcU5t2Tg8KgKNyAKZ5juudRUXJ",
  "key7": "51UEyeqD58S7U7JhXwA7thEajuqdQMaiEWqog7AeZeZ9b4NAGXuMFWLsWtoNK2HP7z93YwKxvtdjsc6mCnp5xy3X",
  "key8": "3SdiWcEgrrCtwRXQ81R1CKH1o5UF889at1gr4zryWCLvVZTrbAHDub3qBbEixyDBMFAPQn9RcFhef7apnHGYvWGk",
  "key9": "vZ1rfGEuo6boL5Z8ZbMhJf1qBDUrMoEnpxv77mnDJ9E38VNT6jWy5pxEY9ADcEPGngysVQQAVp7kifCNnbkdRWR",
  "key10": "59aHLtxNEuCVGfHQxbRHnSRuTKnkgz9TWJAZvK9jHTeo2cS3Ui7Mmx2VtaZyW5SEPdMGsYjadM2QaDHu86tgERo4",
  "key11": "4T47Je9TjfjUVQzybynR27RGeuc194V21Axky6gpzTHqxhanWX9LtQwsQtH6kLQXT7faGENt2QKf7rzerp6DpwG5",
  "key12": "3Y5xZp3XXYM9bBwA1i6pHikdateMorp8Tt9TAaowuhBNQVmtf6goqMSGcoREPzoZktGqfAuhySrsL2yMyNPpnoWu",
  "key13": "5tyXccXw3Y8pkmbKuYHvxEwFssMorSaYPPfUTdXcKLm2pFLjdBUC61iWVN2jWnKgwkg4KXXmBPKbxGZXUKkUV5iF",
  "key14": "2cejNZKTb6vcqei1o321H7aPcw9iLAJ144WX8wqKxXjC9dN6j2VHXb5rkMJFqwiEK34hL1KBKWkkhzwbu7EdG8v2",
  "key15": "2mcASKcCoSdXxLTomQyENL1hA5caKQDeKzuwNhtjoQiBkSYWVdRk2ML4gkpUeJM8Yaqaf6Fow3XwyE6yPSBHzsx4",
  "key16": "NXzeKMxWD4saevCvTi4XemUkgo7KsduYkPzohEJXhX3qMFCYzYJLowkqVB1GAxKkDtu9J2kfCPiQM6H6vGcHYrV",
  "key17": "3iCv6fvcvdcf8e7b5jTKdshSfokLGXjfeKADmusNxgZXwf7fGBAxiZJ7AhZymUjp8yP5FSb3ZqNgAftb2CyYFjUg",
  "key18": "5Qoumk8CXgob3mQ8RUWRBBtBjDDVeysaXRx74tMQXmy1HZuC4rai3uaoCHpcc3R4h5xg5A3FujuANVwWBD72REyr",
  "key19": "oN26jHWQqsais88iWK5GqRWfXjsLmR5rqs4g152eAcS3Lx1n87QPX6MoMQVM4yWVV3xYWbSK8RRzmweSbUv6aDa",
  "key20": "33kDJsTqTXDjDsHqco86NnLHhVQSBHWFKM4iesmFEEeQZDjrW31Z6Fh8VsZqmTatt2oJXgakmQv3WiAcmMiUeBhi",
  "key21": "4MMLf167HVTiPULfT1aUNsPDva2dEqu7paaSxi6jga9ZWbvRi5BJKLSH1KgYWEWo3SMQCkdP1cUXDAxH7Nq8s9Ld",
  "key22": "4PvdS5LzjsD1msHzZKLuuppB3bMHHZo6EShKuybrL7qAxoUnJettWxFGC1uVgRan5r8xPde5PMgkeTNZqjkgryP2",
  "key23": "oGpmY7qHuc8NRXtdVP1HA7G7wTdr1r1otGeUMTdHccsGrX2rFnxQ25AUNbU1wiFryGRyvzkp224iaFbqTrZnmX1",
  "key24": "XMA2Zx2U5CXSuqgwBAocdyf5DyjGHrN67c7aw8xMDw8J5MdvJBCb6tHUJX6vhBzM5LLsAEMT2P9BSXsa8riGvde",
  "key25": "4NBQoDuBY7yQt1stWnctw8knH6TipL4x3QuJ1cwjyf1Nvfwy1WagdKFJSpnErEVAuixvbskYwSmgmGKuAt711BJ3",
  "key26": "5rk9D8Z3eP6sB8wAupXGEFe1j6aaD9J2o5DkAEj962CbzhnNZApNornb9f9MBJttudgVKw4r6mAcZycE58Ez2r4h",
  "key27": "3ukAGWEWR2ELFM2UwyCkqkmS8vjWCHqkAfpEJtrWAXybxBsVG7WZhiFcEb9bKgBWKmgC42mt7XhwcseRTV5sBKm5",
  "key28": "4EhKYLVhGFwgoVwJBZwP683k68c8SwPDV4yE11QjAbu3oZY3ThXQ1w1wz47dTDtnd28rX3eu534GxAZ6dYWGL8y",
  "key29": "58ijVPGTi2naqWB6d1i1gPg4UKi19tSV7GYPDrDXUxQRybH5pUcyHRFAzhDD6eBU46MhHh2uwsx3Eigs2xHcTgrQ",
  "key30": "21t92Jrq2JPCWS8nmrRU9ct49bcJ7VpQe4uhWVDvwAQJbk84M9XanG9ZDpnDEsZZusuKNx49jj2GZogq7Ue4xuq3",
  "key31": "2KADPdQDaQMa6WEygKJvMrYdqUn6DHk7c1aCS6sWwLqYAvXtQDmgt9xjvqS7BiwXfNQVvwT2qn2Qu7nsQg2Aa7pt",
  "key32": "2zfxfvRnHug5TFCxbiMtsA1ofU2AeLzXGt8eY2HrkJiXiJ3JQKo64cppK6YapkLcbw9Aj6aGoWAVUkwZ7sP3zexc",
  "key33": "4Q5oyBQzaP5JvnB4k7UCxcQj7CEthJ7FvvdVtg3E3LD939FqkUrov23YaSAMZrSM4EaFd4rASCNu4xVh43rVskt",
  "key34": "37cz1WWGuDjjPhqvZnZGwRHFphCkubYwvXAYmjU3uX2qk6PDEVVukYCHjApJ3FBXDBWdH65pZut8drou25spmbZw"
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
