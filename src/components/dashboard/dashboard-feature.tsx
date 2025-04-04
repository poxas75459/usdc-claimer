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
    "3VbQx7sQiNxZbUzqhHoFcBsH1jwwyWMLqmPohsoqhNsDkhpcxdRsyoaou4QpjiB1wkXQsrxK4WZtLZT7NWbRXumX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H4NAF42u1d6Q3sfA5tXK5gYaaoAtGowqkYAmySZd7179pUQZ9t2hkYEBRKvGBSdhPgx92gbaoNPSnhYNU5ERJev",
  "key1": "7x9z2g55zf8Ux535MPRCrHQigHR7GV5U3Ffgncez3vpD5GEwk3mTohZY2ePLU8hvWZi21CgxX2hYwiaSjXwtpZf",
  "key2": "3VAfC8pGg8LAU8qMEY9eAi51RYBpXy4Ww5NbTzyt8zh3G9zWzRgjpYqotUN9oRpZQQZWnCmXhW5uuVThAL1nu2Mk",
  "key3": "5vUujqkuMrzFjiuPxpy9WiY3c7Qzj9bHALht12dDKhUwRN2B7QrM8VM2MhD4Y4f8B2ZhsMeTcU1bdTJi1Y1DGSR3",
  "key4": "2rPqmVNBhj6DsygfpLKR6gPE6GfjENNbRGKfNVC5Fz4X5RuKCgR91v8bj2aPPUxUPhTSHp8cWdJUrAABqFEMDdb",
  "key5": "wxcQfwmqm6TG2b3wsP7KNd7TSkwVytWG4f77oBuPfjDTs9aQefoVfHoostvM3sQa92zuPdwuGMsRcBX7E1rxF5B",
  "key6": "3V1k3WNEqVVEBDzPQdd8QY2QBL19PXUn9LRi9CHz4NTffk5TP3YsxuRZs4Maos8WLtGqoNV5ByfoVr9jaiWiYuFU",
  "key7": "5Z8y3mkv87wHjm6Rw6kmfJYVFrJh4GqrB4XzaFTgcw8JUFYDECu23buRfhfSe4CP9qY2QXT9KzfpxiYkUh3YSP2G",
  "key8": "AsYTAYQcimCFhZdPMDVprMJEFQAKMEwmQfekK2rKRGx7RAH9eZtP3bp9rXjeuBeL6Cqg2vaspn8QPfm8yNvpPo6",
  "key9": "z7Pz4qzpJxWSo5PJAh56fUFFzi7LWndMje6heEU1Hzr1jsX8R9RVQXU2kG9CcCDv4ppt2TKThZ2E3peLqQVv5UN",
  "key10": "5EznLFKjdq8KYGsSKvL9sVEDVvbkv5Rtw2NisPBTzdo8qgLiQtJiAbS7tY3MTDxNiaTe7AxHmU1BFWvFkVvqXmw6",
  "key11": "4PRwMYJFMShxTYB23MQpi8K6t1GQdWvR47bkrVJgRmnzJke2mBu5qkLp19pVGwq3xrt79MGpAtR8BoyZSMDgX13b",
  "key12": "2HcfSDB5XRVhtaHdWxhwGTRiEXwaxeGv5kXCAGkJ7Pwiot4zbEn5jkciA1bQ2n8jjhG9mcYPGzpAmNEyfubkCXtn",
  "key13": "5t5HyAwM6icR3LF4tPLzAcy2yLPG72XLFBqVomRxBoPAcJ2JEJew6vP45LHpnbxQQ5hPQdpEFswBMt8ZRhUQwQB4",
  "key14": "645Qme7gq9EFJvrFnfkG5CcnV5bFNgQmpmMFfZu3z1mWNk7eZ8faorS32979GjyCS1Tcq8Cv3SFJjdXYP4jP5fBY",
  "key15": "4fu71DWv3PBdanm2sjz9HowC4f9BmQ6DkwKMaEfaaR92dokXy43Dr3Wm9sfMber6j9yUPGSpor5CCe5nRzLcznZr",
  "key16": "5DFib9PH2tqeLCjznBSumyah51ncvKtvCCMMsZppi83cosxPujR48Wa1XxUZrw8xjjsUux5iJUHQ5spzcGj9MBPv",
  "key17": "3DSHA2ynBpZ4TeQKVuV5KpsDrHVNLH2BDUH2s6cKSJAN3D6YLojbczdqKQhAirkGaouu4dLbfQTU5PzwFchvfmpi",
  "key18": "5WtMRL2MpZQgdyWZYcHasxP9axyiyCtonWXrYo6wihR2hSdbV6b9StXjpN18ojS6KXwYn974bjerDYWogaeJA9E5",
  "key19": "41GA6n7tC78JN92hwTfBdRwyu1UMEufA8YENQcrKqDzLbC5RBE1o3zgbwyN79TsFnZVLpAX1jfMzGH8aPz8y3RKP",
  "key20": "4HMH1Xh3FVmG9sRw8jcrKGc92iUQor7kJ6JdHToAaC9AjCYxFEErY52iw7e6sSTjP91RiBXkWt8516K845aFjqTp",
  "key21": "2WSyFfK5oHMcE5XfpASJhzLyjN8Y1Hh1bocczccdUHzu6REjC33Ec5CVHX4SKXS38uKmrsG77HVM3EF5zgZJW1RP",
  "key22": "2wfUpjgbW8hxtyymDrQssbF1Ahen55HsKqW8JJw2EFdTPSg9naV5cjsEMX44gqti35iqUGKDLwZ5mDyegMum6jja",
  "key23": "gjHJxtq6tMUq8FB6xU4JV7EZ7iAtLrWwk9foZG5PfZSJksiwDJFpn8iM6nFn1SGFutkNT7FS1PzCZmvC26vF72U",
  "key24": "2Q3ZEG6N3xFN3xoGUXYSS1Gmerph8wqL2Sry7aXGCiS6BGDHGArrFRyjBFDZiPVSEJyzZMUvDMSyiqRxskgZu6uk",
  "key25": "4wEa3NZDdptjMbZCZY8vaDA1YwYwmJsuUDE3qWdRf7L22DfaG5DzXLr8MterRCUKqGNRSp78nQsYatjqKqRzHeR6",
  "key26": "4TH4jV87F1BdqwwMd3VHJpTUP8gMsCLj6TGFaZmeCE191BAvLvPSWhchbpu5poQoeK1WrAcpwPL2TnQWuBgMxwBQ",
  "key27": "5i4pMN5kwTtDNbghn4VM8nBMZ7xpKFCWHBbjcqbqLBFQRKAAsgLpcJp87derRNkHk4wZsKgeCBPznCARP5fBiyE",
  "key28": "sMqENqngkm8EYZhGvVwZqE323w3skazwrm5AZFBitywXNSZZ1gb4ETctG8Nf97xTYbzHMk3o7k95tyCpezmNi9L",
  "key29": "52NLdfm2TPLPcQdoSaKELRqttVaLzzCcYYDuf2tkmw64XPaukMXSoZBbKZ5aXupzDuqKRhuWKu7QLSgLgHWbR4xX",
  "key30": "5Vvfg9guELFCKXU5KhvAdJ1o81q43jrX71iD2qUV57pyq49yXhUtkB5Nx1qdaqxBFqFvaVvT7EPVcxEWKXPS4L2V",
  "key31": "iNCPEeMP4NKPENruZEZ95yjfQ5PvzuTERZXyCZLoucgJM9FXmZao5XECK7SRxkEiQdFnrBAXKn7KVoWWBLHA7HE",
  "key32": "2mxb7DnUgheqMF377x4a4mgypRnfZcgzP1NVZTiVc6qaRyHbCJDPM822UJK1XXD4pJFoeLE7gb6VenLcDu16EVeM",
  "key33": "28g4XgbB3XAwR9j1SQBMrG8kPcRv8wQw1pDq48tknhJFvL6LjuZAEAkvqkPpYv36aeYw5zdAAmTVHkq9qALEGKCc",
  "key34": "GbicQvvMZxtboA4rPAiZGm63Sne9SaEMc9ku1Sn86214LpWXi6xr72NhRLz7R1CnfgRWKBiFmuGc9TB2qzgFZ8J",
  "key35": "3DeV9s8P6dZux7SzX37FfbYaE8QxwfVVTfiUJqjeFY13huaivLQbGYRMEhyBUk3WeEQEaLnKGQGXstAKsxHas2cA",
  "key36": "4CCGWEjPQvbnKNASZrtPSPoRyk5phsFZq7yeX86WLx7sgDjy81pkE4aapiVwsxrn9D3c73DbJ63pw2LQvnF4twAq",
  "key37": "5WCwidU2hV2fC3pqu19yJ8ZtQLc5YyGeK5JZZJ1Vthgy7ax9doLdn1EUcHndwP8jbaFu9vUzpZZ41P25yVjJ3am8",
  "key38": "23P1e8WTdj87EJ89ZVRaQj7nE9YpKcn7b3g1NoaTYW1KkX5GcHAuBS93E4CZK5jDCkwMQ1hGngPnyBSRRXBH553m",
  "key39": "5mSK1F7d5wY8kxwqh6aPg5EUs32Gw4chKydtA9E6GDP4AJfAvbbcXHEckeJoNcDRKWmhStEXNFvTJb5YSc9vKQqq",
  "key40": "3udUnvYonKs55DPo8jvzewA9KnnuE4PrfnmVnHw4nCaWBFmHmFQNtVpVsMvfMz9TSD3Dhc3G6F7oz3zj3zut1ckf",
  "key41": "2sTqeaoPBgLSTgtMx9uf6GGZgUpNu2WpPAjni8Vcy6QB6DGM4nnhu4xRsNYXf3P1GMP5fQQMDQtuY8YHSwexefEG",
  "key42": "4FwcNZqbG1e5uLk8PuPn1TgRtVrNvsTjWuzJQokp3kJdge3mqfpsMqcCkKEGtkb192GT8LZUtaRGGfksPXKEjSpX"
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
