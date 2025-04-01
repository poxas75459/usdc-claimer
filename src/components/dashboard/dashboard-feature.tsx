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
    "3E4LGpEbLwcBwPSLrSouFX3BoLvCxgQCt2NU2f733r4oP68W9DiuiQm5aFkxPNLtXxG9sNQLcfkCp8SitFAroEe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ai2Uvht8Xj6X39bXY8M9qfZa2DprBMzPyDF2r249efpRrCdYnaFdNkjFmfBJopgVdj1CBcCLn5jxNjoaYqbSSGr",
  "key1": "4PtvBR3LBRJ9SwwFsGXYqNMSyzhrrPwMkd5eiuBfsTYVt7DHm1E2KVtDo54MgitBx4MvYn8oMMcXkixj6syz566T",
  "key2": "5Xg3uec5ipbKvUDQcHknqAgmkcZkksmweEmu1SHb1kyac3AcFV99X4NuZNHSH7VkoPkpquazoLWZjAHEC5udZUru",
  "key3": "5ofrpH2jpkcj7FPRoqw1spGZrpeJ9YZSegkydCZ9e22nmP2iAUAhQgFRSSzGEa4tptXsYyHRqqYaS18EdD5fxqSy",
  "key4": "49b6eqQu9KgTtZvU9CGvPM2pJ9T73LsjTD54ipBCwmMw8jdHzWDbtqBu8vV8c7DW8wB3hJeJPn28xR5XUz5X6Mk",
  "key5": "674ugJT1CmN2BasEHHuQrmWPQAtmyYJtuhZp1Ke5Ndqg2WhSc1GXybwZLNSxbDuJPtQxFcEJMw3y3JbCLVG2pgfJ",
  "key6": "4ZifV6gjjsgDbYJrfYCTj4cFUycyugdct5nbarQuweRtXm1fSxRgzXyyRCNFmT4Pa7nVLxe59Nr3hNtZsB8afaN2",
  "key7": "4sNKAFDae1zkx4BNsJYrN6GCAHicDfEoUFuHeie3c3r5shpMSZArcvwkRXCUrrbB3nfz4iiRoz7v1NAEZ8VUdLa",
  "key8": "5B1zRrPeyDF5EbkqQBDPUmxLmE3fpw9Yj2h86im9jCwnu5iP6XHeYKJi3xGq8jAmKSQGUzEsEAKgFNT149gKDaYU",
  "key9": "44wAEx5FmqHtYKo8Zaj5SyyBySwpHVVTRmPcF13Q24CQ4dCwr5VDRLmCFBzUMeFrQtt71jUEF2C2JuywRHG6jPb3",
  "key10": "28UmR1hxeda8cC8h3qRappYvgtw6vziuiXbEezS8GrcfFmArWV26eoKj4zSJdudVAbBJyBkaQm3Hs1FcGR6eGcVe",
  "key11": "4ffES865ojRir9YMPYoCKPUvFDgZEUFXVkJWxsqm4Ergz85VNDwxJBaaJQEUUumrbG3vSAoEyzqrkXaGfRADYFbK",
  "key12": "5Ap67cvYLinAvHvRYXRbAowb5JP63cmHS6NsDuXZNzRq7bHgHtveemNnG8Td91Z8ej6ak2dnxfAwrLam1Z3Yi2vC",
  "key13": "5xRUbpBWrNRnu9ozqnh1D9XbXqxQWwyexDA1HeH5WctsBDTcvjWWdzDHGcVcvJsk98DgBjQo6VErQregyWzPWzAR",
  "key14": "9ezncVk2SDZe53J3UtZqJPgCzLNS3uB2962t4h8L33Mm3s2DSJwhwfRtSB24LARmUUtfP5ssdQWZJ9duwjDa78V",
  "key15": "2Rg7ioWcHHjLDV8gkydEtyMgVex6CLmasnppD8hvPBqxKR9VuzLYdcy9aysrrAKqYgj7MVtLehcKEQv1wwwETzpj",
  "key16": "4yMkxH6XU9FvP4aAiD5gYThkLYK9xbDxi3JBQFXWB56nM4t8NHJpU95tTpdHwgqVZQYpcxvKwzvBiqCuf7izwSPv",
  "key17": "CF6FtTZciFuwfxVTw1BwHWmYS4BdHztMbdjMzgk2m1G47NtjE8drzXpSiJDXcuapcENikRBsJokwGA19TR993wB",
  "key18": "2BaQkCJ7BbSp4gjvo42Kc6YRdx1GQcofarL9red9sKaHcJKTjUFVfxXGokrY43sEbJCeWrW2JaHKhSEtkZpXqQZq",
  "key19": "47kFKbcVxAcQUFKynivzxCphCzqpwDp78FH2EXjykQXRmr83dsMzFno2GpnZujkTPChRMWvH5dBw3pjidpuP2N3J",
  "key20": "3LbAkq28So3ikgcva2ECgyZkz9uWH6ZZAPddj7ogQ9Z3FXteAKFdurfM62GHunAzjFPdcKhbraxn6TQfbhsx2M1b",
  "key21": "17WheJP8Ft3JiLJYEJhWYAMS47cb1rHdkokkpeBt4vQjyP8gqDBDCfkdXsxhNzHjYTat1DaruaYva86rRCvox85",
  "key22": "3Y3qRa32nHxq9xgzn9criQiMi6orwsmHbDG5Fjc7kemMUeGjCL37gLoLa8fjWSAxTXiJid6bkPRyTqNZtCGy5CaX",
  "key23": "28dxEUdL5bUg9a1rsn98nVWxDjMSCVd8yz3NBXrdWFsSMrZpty4bmsqtw2fXaYkNtnZwU3aZiwQAiRi4cUgBmZoK",
  "key24": "4JcSA1zSTLxb3vNpNt3fWSpKpeePRWzf1KeNmHzKbSf1T5EgTRERVj5KkonN4ZYMmopzWFEY1cPVHGvZYJkqmaYQ",
  "key25": "3BW7FEH59SPBQMDsLAiKnrFR8o5afs7f7zSk5brVfyzWgY6tq8paa2DJ8XKbudXwR65LbaeW1Uib7Xd865eF1XNi",
  "key26": "5Y9aoKZBTtVQ3wNUtiHFK5h8V8xBBkrzmhjutPNZZ8Jj1nW4ziYgJunnaNJP2CKTheLpzqbAJHXA74KBLzCc2VEH",
  "key27": "4j6xLgmaqRajrRND5BmykrJUEubeQgqJ8psmkgtgWCXRtenvEtBibH4C8TGK6p3dGLGNEVRCJP8BhxwvJtc7Sf7t",
  "key28": "35MdoP9yJXKHVrVdNE8XcuKHNhBG4671asKAvG1yr5pH8W3F8amve31Y7z5V1BR9BLWXiEcpq5xJVM62ttQbrwBD",
  "key29": "4gsbZBTBhN1Tt5DStQQZ4ZbfDf9jggAxu2Edtz1weu84VMCksGH3kC7p9Yr3zbKA37rtV7rAmaLJg54QoBKsvjyW",
  "key30": "5Y6pfwG8ojGjW9MgiFN6vzzuuXNhyeYSUxUuVQfSQmJ9eUdja1hFuv6wJnot3PxP2hhMZay4bSoDckey5vTaJGBs",
  "key31": "4q5HUgs3SJZh2q9kuyVh5XUqdEVY7RrNMfyUfZb4JuhVXTQYoW3F8ZRWkeSngMiToUp3DsQBvLaPE7LAFazKxyRx",
  "key32": "7QjNpYjudS9doZXGpaMnmozLAoNMzdEUa8RaEwG1L13bHpZfwhsTec3uDU8aadL5nxrFHLSGLNtymAr7HnBXoAv",
  "key33": "i3pWZNgTmcKMuWW7TNENh89z5BqikSfc1Xfw1K8Bx3qxJfjXaF9wWpte9x248aJrpNtfFRZ3SDYGmTtBXGEEbpd",
  "key34": "4u7g8xApV4ysbfAzFbPsxSmZb4Nh8Kpe8MEEnBQHuR72HrZ5fF89kqkPBCVQzbiWmdgXACrt8mZ5oAa6sncCnh7N",
  "key35": "3uCSZxtBHBu8y1R6pdC94EB2AWbkWD44tF3RagxQgqHsjEdEieH4em5bbjiYjshizzTZ28s4msuQ1YqLVR4aCK5F",
  "key36": "4dZZkt54j5r6Q6b2T8nyLGsqKBsvmxeJjFtu7LLttXkaMZts1YmCp5GbkPwp4YwuWGRVC21ygDir8ADUvKEnajaq",
  "key37": "3TX2nKQyV7rCJvAQuH4HzmFvTU4sK8FcUwzYkyotvyZPaPSN45p9U3Wpb459aRK724fBdG6gyZKAnpzfnMQ1Drvs",
  "key38": "5tDQefDXzMtR1jopRYTEkHZcKejHMiETBWtAvpHFjNPXFAp81FQzf5Rv3A9o6rH2XjoAEQifTexnkev31SYDyzwm",
  "key39": "5n4cS3nUsLc8pGto4skg2inmpHuW2MXBK1PEy34b72CbeFjtuAmXpKCjUGqA4FZKEP9rfZuUAQvpe8nf9UaszGXY",
  "key40": "kv6SuLUPmQ9kHVms2oQ8DKZD1KCq5iLwiWFnwGLm9DsWiiceAWYGEmohHegqVfhTGSuD5v6gKpTrjUkgsQR5E8X",
  "key41": "5gnCkXaPv4TSFwEHuATybqbiWW6u83fAU69kn7DGPdeDhcPmE2mTqT6FT6Gp9YfkF3DBSHWrEbiNstjjLHcpmZTp",
  "key42": "qoF1oA8At27LYtSg99onfc2y4sB6aYWXLwpyy4V5NKeXQ2nNKp999Gn1kKNvY7T9YRD11ogMxjFQTod1iYicQn2",
  "key43": "ih3A8TdhLkQBCf6sXpVxPK1wgoQ6DmoJmBU8qUMykjqvUzFd7qv4swVFVfeRMW5g6wp1wKCkpQnTXNGN7SPK2Vr",
  "key44": "RhKP4DHPHh7G7wpFLzxqCsEP1dkT74DrkCcNChs8MeFFHkdKGHRs1Fmt2KJn8wVfSrxuH7JT5PPq9MQthEMw1Nc",
  "key45": "3eEGQDQtV3HXF2hyzyJHmoNxc5eRXgBJjvs8Rkp1euXWmADZFC4mmK4o5ipJsAubUm68kSysRzk8t32LSDF6N1SV",
  "key46": "2gUuytm37WCSMtAuKfbF9cznBiB3RDbFiioGyQawk8Hwj3AonHhfcjicAoudCqh47rZNLnLQ2epAWvTc1SxMJnvQ"
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
