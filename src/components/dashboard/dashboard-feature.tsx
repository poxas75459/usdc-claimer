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
    "2vFE2gxBXbRyeyKbJUrjgu3QPiJdvt9v7Z6yQJi5FApdenKHD15rKc88yTM8q3QA2Fvtv6uQpnmmRcvdDcTUXJ3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zH8Bqr3QRGZLpCZUq1xh2sc2H8xGSWAr9RkPe1EW9twUjpZtSaRQ5DjGJMF3pxuqjSeQjgnRczbpWT7Wa5d6veD",
  "key1": "2PEkz7BPYmNGSJbuhLv33aFRJuzYgjasmFcxejTeKjSK8FDSVyVTDQAhF8rR6bf92MSzvQW1xZkEGCxet2Ckp5Yu",
  "key2": "4ZwvEYedX1q4scxbx42yB9mSvKtVprM1GWbQ9F5CoKGpiojVqbov6tSgy6Wm1BEDgBaiaaukmDkuvZoiBeJkbk4H",
  "key3": "2YYz6Rh7GhrtQ6bE4Nj4b2povikti9HQ6aEbYb5g5aDaWMAHirWPGSWxhp27TFPganKMkfnQ413G2p6fR3ZtMCnk",
  "key4": "4jyfcMk81PX7Z1D5Lo8xgqMr9FPzKVGHNPa8T2hGBpdLapTCG1Xy198Mtgt5bx9TWmDu89nLDhp3xkaNHEEEABk5",
  "key5": "7KEcPJvVyS9naa5ZDuU2WCPkPaBB6cCMx7rJxsM6L7U5NPiaXiKeAMGQHRB7ZoX2F9adfXRsbbfGfxKEfmUGZHh",
  "key6": "5pefvC7MS7VoPkPb3SNh8F8U8oyHqVQ7wvZx9369V3kFEjcdnmRUYwMEB1VC5dry64zY2e6p9sCM8m6jtLcvXpoC",
  "key7": "2P2v6akv4ee6Ntn2Vne65uobuXwUeyzbdse3wZAtGgRxDJtY16gPCeXzD8UayeoLVtSH6g8PxWvvJsi6w46MBsA",
  "key8": "3rrjGeP6J7RqB1DEV9mMTniFW1upsR24CvdC5Z4oPEXNVANqc6SDaTMnTJwUWWxHdQVPpZsQL5bVVFe1F6HS8Lvw",
  "key9": "um9MREw4CFteap94kq6TRo6ddujo3qCrG5KiruSAe57vrpwAYvXhMoGW7ww2mgpNRny1vxekvRtJNTn1Q9Hp6En",
  "key10": "3RLczUSk7AikuzXBAGghQcx3A7kQoe2xP5xgSxfN7Zi8j9rDtQUR7CbiZt9i7RRZ5mNyvrRdHM5YZn7GwVG33D1X",
  "key11": "2rkKDrcgYeQ9o8cvqr6snYcCopsVZ6AxL5jeayEkaBFpuZuTV61TSQrFBYiPY6zWDoX8VSKYuU4yvFjuaM3idckc",
  "key12": "2HZKaoiD8CNzRCV4ezLxev4HTs5K42ZCR9C1C1GVouTS1qgawgGg9xXmma59A3Gy2sih5ueWKVKawPSh28QNst5j",
  "key13": "61iLkWG5hH1uSGgdA5z7TY9i6Q3LHsrgMWFKg3F7ECiGUNfDgj2uN1TehiZAfydkDnHpHY12YkZfUVzMTaG2or1K",
  "key14": "4LNheYLEMjQ2o9XdWysW6d7b5PZsvD4j9NsRHX2t5LhZzfFNY7D97Qm2H4Cg7b55LTS93dgMgTik9UJro1gN1A1e",
  "key15": "2fH2JahctFroFEgU4RMGRNRLysJRVKYS8qpBcwKe7Cg6Euwu7JwxYHwkEZR47zEfUukL1Z3gve5mB7Z31BHRpjxM",
  "key16": "3NTtH3D6x5UrMGpcwDa2deB9eYhtDB9QhuaxfzFmTBNBNqq3pUShKuzq8UMChpdqDNp9zWN9ma8z8dhHa33dR3ur",
  "key17": "kQdkcpSdWa9tT8LzRAQtPEAca5zf77oAnRd5h3GAKapnEA4Ag2G3r1nf7ChzC8nKdyo7yW2qCm2m39PDxAKXRWa",
  "key18": "3LWLKEWzStG5DN6L7TwrKCyAiSpmp95o6KDTQJqShF5L8PMcG3RfEz7i34GBKjFzXBYy3Vc4MJcWFeYN1TD3JEpk",
  "key19": "3GsLfuLKei3CaBP9dVkd9Tz57zYsie7G7kAVcvNAw2cvMDkNepf9GQJPpbdskUBRjVvCF9KZyPVpyy5cXtNtbLCs",
  "key20": "2uJwu5xYWFtvqZnqfVmqjMdZ2wisaahsBhjTTmrRMjqLFAfqo3E1CDCB1rQ8EiE4ZHsiWaqmUW4MYAyUiPa2dKB3",
  "key21": "23JJr4qU7KQoeXVPmQeQV1AvZDLcVDbGdQ4uZS12GuxNRDR8c5NEeA7VjogPZGyvghB4RnZX8NUQh3Z8XNYDiZtj",
  "key22": "3DLdCPbDqqF6vYk1171ucsiWDBtoAwpc1esbfCy8t5omCTQWzamXX6KUNo4UKTQvCXKdQega2XSvMYtZvSebgY5v",
  "key23": "6QCnWSEsCXf2QU5G3RMWkvw4kHKXoaQdBhjcHCHni7gnpLv1maAV7JKcNyE8hNtpEAbZtp1kQHMTm56dAm2tPCZ",
  "key24": "57nSp81SB3NHDikbZy2mYXsbWCnbPRAfeLHfEcvCiLxK2eiPYviK6S3xoTLDJ4cjsWVs8xoUHc6NQ38QUzh6VsM3",
  "key25": "3JNarV6gU2mp9NjvPSawUyxkRrHj6R8C2bcjazFtgB8VnV8QAsyQ3xiWBtt5Gyd23ecc27NW8cQawCgAMUkKTJ5r",
  "key26": "2j5TY9oQTPnapZDW1sPSGrJhsWBozbtXzhd4x5ygmbSqTrDhLW6sCRxHm6GowgxHCAY9kx7nqB8ae8XvN68ztdLx",
  "key27": "3uE67FZbLib1R5xhMFkhnfvFfCT7TZM2jaECdBXjBf3zYZyUpFdGPB75ZSVXqGv1QZBf17dQPXMP9uGgm4UcU5sx",
  "key28": "47fvoyHeYadT5RHynmhHr7fda5VdLehSsub236b6RW7JM31FYoz8qTogVUJgX5ufy1Wrusp9xe5AqrdaEbCxQcRH",
  "key29": "3FYHgdSomqajaTHchewYuXb318ZYPKTd8VvHapc6mcjj8UAmg3Hop6MGkwf1FhNM5LXhukW5xMi4zCAMb5eUjfGi",
  "key30": "7r3Tno1VWeAw1n9jApgy4mKZchicvtnvMHJ71ArFkr1vW1ag6D4vW5YTHnvLpnuHDyogby7oTeVRMt48hrrEFuE",
  "key31": "3QxyUkj8jsZUZj17D8fog4z56cxQLANXBpcRe4puz9kvDBBfw2nxmr3rqNjVNMDEgBaGURqcmsZsoWA963AjCmwz",
  "key32": "5qfH2fCXRu1v7fYqugtTGGpTtmGCfwFC2tXZ6ZsBdwqvCCHZfKyEiS4Y86JsgDvBey9RYBzpkK7KD6H4Ro21v1ZC",
  "key33": "rd7LUGbsVaxtnUFVMzCWZbLS6fADB9SNCTiJLgHzQVJKPrw3L5Qpf2QR3gjrohmJQbygzG5xanR7Q5jt6j7R7GQ"
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
