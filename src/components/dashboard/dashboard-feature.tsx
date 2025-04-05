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
    "2ZL1qNuqmsTMYf8Wfv1i7VnHLE8k9EeoefE6qEV3mJkdgV9ZguKVjVWm2aSeJWc7SqBAZd5nYeYQpoHv1BVmAHyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sr8estN8CxrHuF9KeyLRgovyELgEZLEweabyG9cyjTnpJ1kaQ5csxVCEKP1ZapJyX6GZvXB7SkaDjb6UiRREL2F",
  "key1": "25EKAhmgQi7qgWc6mw552ngNwnuNGtF9fvqutjGvnBi5S8xrtgUWDzevF11moJXLK1AQCN9oPcTLyuvWtFvP9UHX",
  "key2": "3EPF946PusekLDjsdKSDQWU1rsSvDVfLuF8szcQe9TcVPjoN4xv2Expp6ivktgU1U5JXfpyiAnT732XBQr2xR4Xd",
  "key3": "2535ZSAUXtzJrpgpyHWVpKd1p16pLHRJvVqo72i5QuhzvKthSWPXreYdrQqbY3iNvtuXTwy4PpkvB2jQfAud6Enh",
  "key4": "3oLb2u5Biu7NwKQc7fHgsmKnAyzMNPNucvxbfwSmjjQEkHoykBcsoc6EQUdLcTBL61A8v2qo7NP5xU7J5XUN2kWn",
  "key5": "tgRvMVc6JJK4n97Nt2kdQjsHD7EquikMNxR54tZUSYrjp4UpcHjZvShyM3XfarPrBxbFtBiByoawxfL4zXrjE8X",
  "key6": "ks7fmpFp22AaC6eAdNr1JWumLAh3FbT9LWhXNaPkteJS7N1ZkuKFh6ytckdj7XMgkUxRktiyqYGTzrTorg2KVJR",
  "key7": "5N9Ka1fApFuVp2X7pGxZTiinTLtUZZVbLPm6ahkBVNzuti4XpFggXJu5qT63Zdz6xhyzw9wKRB5YbXV1G8kFL6Et",
  "key8": "3pECY2TXPgemiugkzTbe1XC84CLgrTpL8ibZd8SBavurDGJuoroeJ6eZoRoCqurDaB6bTJcCnyhJYZqAKZjmS635",
  "key9": "HgvF74VYfYWSSJjZ8PEhLtv1uCgVz6DUVgMM8tETmn36JJ1TGJgepXjwjRqVc3qRXpc5WcVQBQqsZFKwmhrHrJG",
  "key10": "2JAcs5Q5iGTzYmZ4khNRAS6daiwAF4tbgf8DrCxB8Kd7YmU1oacG7UJKQg41qSRZXPyt6zwgKdLW6LeAqGJRun82",
  "key11": "2PXJ8cfvXiJ2xrJe8ULEM8JYX9JeJUEt8eC4bZ4yTpFAsPNtMiYkhy72bH5eQUMBtSERu6NYfxoUNUsS5RUonvyP",
  "key12": "4usSCGXmXyjRZA1WZkq1CLBA8uhmPSNjTmCxZTquutSurVHh7U2Ex2gT8AFrLokXjw8RVdfhVnA4WghNUwV1i45T",
  "key13": "j91w2ZYHyqZeZbusWM3PKSRmjFFy9ouNvtqGoQPETytQ25pLmoJtZpNfp6k3Tb2QLELy6FQyus8xRSUVsNiM1T1",
  "key14": "C1VyJMSr6TKBGSbK843ywdMiZXXhB8Auhs93L6KhyTPV4HvQWGX2bLVKQujfZWBLaF8GPSFhcD5ePEjcj6Y6Ju9",
  "key15": "4vBUJ8fRVcPeSWYp3crQVvWJrsy46Btf66SfYm9gxo8zyMSb6fdVgK4BTx5YW4mzPmmFkegeMqEKuoyjcANyyZ1h",
  "key16": "UWkgu6tmK7g44wpyDXDEdUMzYn4YwWwymgyodGqfCcayPXYcnMJQYGXp4ktcxZUsF7MJb5kmv1i7iiP8tq9mhuV",
  "key17": "6363qdvckxU7H5JeCQngYcFWLCdGweF7tPHGiuEaJKhsWcghhykyU4AKW6CXyMgpGRBVTjBNHm62nftP4Mu4v3Jd",
  "key18": "5MUNSXV1V2ovnFcoxmWhATwrntUUfmTw9jJyrSdTLTZoRa7ZVEvuggyYLmrmb5nKZv6WC3BKqMeeurQFKdaLhD8A",
  "key19": "4X6GqgKCM5w9AetweU47tTDhD8zhxRe3bTJEobbZMd2xSyTdy4st1pRoma9taWN6Ho1MpCqDpjcw6CDRA4Vpxsix",
  "key20": "25aAPv7Mt8asAw4mSDTYsXDk2R49KZuRJDqNcjiua8mTXANwwEiLV5Uvh1w3x8KmyXyhatpnEXCyzXGWMW5rnAze",
  "key21": "4kV45mUYSsBJxvjRDYaoXgQzvaD6ezABtMbVehdMKEHocsdq6PGJSB57L3EgVZbquWc55Yp4e3KKRcoShhhNUtGK",
  "key22": "3JRz3omiCxQQyaNtFJWJKR4daDmrxNXG2SpnBRPr69YXzedA4nYxh2zsB2XgosnLQFTKmXFa9nBHcLV2Skwqjos9",
  "key23": "3g9UDHvkpe5icSxKViSYyBvbKBgL4hFdAKHxne59H6Q2M8W3GQpU957RuGiuTm4dB3hvsoH5F23dq3WPtXiAAJeV",
  "key24": "SqcAujMFnQ2KhREcxw3MkyJeb157haPHSKhyKcQBRXobqMikjV29N5P8vrdTS9cLWv3ueVmj9uZYRpRCaPrDdNY",
  "key25": "cKnBA6RhojPkTMQySyuFeakAqgNtkJjHUzHSEJ372CCiLN2APAYFXNvz8umVsqULySw3YUCeuQfYNJQyeqy3tJe",
  "key26": "3xYaA5Wj4xcgG2hiRFDnDecVUwQN9RHjv2E9HiXL7YZZizoHJonCJeRyvyphkA53PqAFN7RPYaT8svbWqScdXUR9",
  "key27": "5pk4qkqY21EZTm3B5YZ1YhVe8B5Mi81tF56PQTjkbsjak55WEQXE2KBBzSGaa8dgQE3RwPC4gs2MmZVEQZP8S4Ww",
  "key28": "3VrxyAht48MyBjfLshgBW4Wrgso28oGNqfiM58efgz2ioCkrqiaroS4sx9AL5TmX5RXyqi5VPSqnLHigf18srocd",
  "key29": "61DQLfXdxUVQ3TmBytTPtmakc7mrnhq64PgpaSK3D5Le3dwKxFhKmprGk6MrWWjDuBFqwe94ioC7FS1jpU21aSmp",
  "key30": "2JKuZL6ZQzCYFeqKiWnjwgSpcBn6mwxornbeas8LoTQce23aidjiaN9fm7pAkSVjMap2rVg7SEmTt3c6bwZA9uj3",
  "key31": "WTPYgJY24EnTeW5xEDzQrFvUaMoPszkVutkuP5g3wiUtJMN5V8nPVJkDo933tYhJsjtk21E4FzMPHZRAkaXb1mu",
  "key32": "xtuQAUtYSDzF2nxp97cz6o7Mc3dpHwWMY7986c1xXadYiadcNyPrT42WNXs5ypy9ug7e5h72n342aqrGEJwghmj",
  "key33": "4k9x52kLfanpm3pMkJBgguSWTVGqviLP4oLVrv8ZrV4RNLTAuQrbMhR4JYwrhVTNJc8f7m1emHQ23ZXu5WGf7MFh",
  "key34": "3HA6id8WEZtMXPEjNcArU4G4wasymFtksg2ou9RajyW6yEeU9vsXembz1Dj4GskFPCy9QdPgcLheAeFKHPg6vDAE",
  "key35": "5izZePXsrZBEx2tUw8WnfzEbZp4DGvCvKjHa6trZaempTjo454rsL1zTTQKVEWvGekrhixq96N3VGf2yfqYiTjbB",
  "key36": "5K9Q5LxaxUFVhihdGgU8TzLPQJG5daUXSEoQuq6PAYZZfWZa9Z99WhV3hbZ1FaQWStXMikpFdV2e8nJuupJWT2zt",
  "key37": "2C51ChnfR2DkesohxMWqNecmQZf5LKK7JFcyV6c7AwBNW6CjrxcifWNrx7tHK5a8ZKfrFacnQAAouRN18NUCyKfm",
  "key38": "47rVjSZniDniXwkRiSrwF2VG3fghRot8i1vGWLi1TtAaNXz34Qe88v4k838iAdXxdJmH6MfaL89JbRV997eQeke1",
  "key39": "5rdKBYFt7vw9BXzrLKnUzqK8FJHGd3DhmCUNmXzwwNnWuNep9TFtTQ4CgAeNPW6eoAKT2cphXs63MsDG5eSDbVHP",
  "key40": "5TaqAXH9y6h9D5PgzayYdwEKLLa8TPMy9d5sRPcUcb1JEqLJ5zbWy4YSQ6nzi2zSxEa26aYG8vA9mp1F7SmUJZpz",
  "key41": "2y8LqdKtJKNi1SUjjT3e71ocGWXPGFXggkUNfz9GRwiALfkrHmxTNmyuxmLxtJpgdeDPt7A7qTEDP6dZ1HCFrd9c",
  "key42": "5dxKExnMopFfnMYNZ4A5Z15vJz6W8WoSzrMsZo25D5LNon6bPnK8iJiSpuSLBMzvh61c7T2Gdv5AFmV4bp5zrvmU",
  "key43": "4nCjNWqZET1w2DGKovHtFvd9F4JTFbEB3adxtQQkEGztarWbUPQS7RpAY6xov6HdLmQ6ZsP4tp925pZMcr15dtX3",
  "key44": "2w5aP9aeEij5gyZ28skm2v5eGcesmwYtP1EqztcVbFbkwhbHYPz5BX7c6kEbfwVPKCnFS5gBTmrRphb451AKNx6u",
  "key45": "66RXwCLLwtqPW8SPWUWwMzzQk4x4eq6jxZMzX5H8CTB6ECuTSKZ6QtoT7LNMZsxUxuKjnEKWw9VqCUG8BHaz7Ysu",
  "key46": "3d4Ug9LuNC2zZYPyVFju2fczznFd1iJrEk9WhkedutkZ8g2wjWGcvYD7VvfD14xiwkBwyUAxYVXSRixfQXeTeytQ",
  "key47": "3s1JmzgDLMdjq9NUsn37MoL8vHEKYW5hrWDmVAoTU4k28ARfhAaYkhwfzHVSepP5KAh82QQpYN4icVkWwpUS1XHJ",
  "key48": "4UhhdbAWYk7RRGJcFHNP3Z3BzumgZKeLdWvKSLedWNG8hs29LAC2N9vwVv5u3iy6WFLCmMmDYDV58VdRKtE3z7oE",
  "key49": "4hvAJEfHHSnFyn1hptJV5KLW5gbiitLsZ1PgWuRufB2g36SPnBvtZ22LhfALk7Jpcp7esm9uSUrTyGeTrvTx9C2u"
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
