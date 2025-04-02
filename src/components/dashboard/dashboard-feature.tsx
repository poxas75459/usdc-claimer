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
    "4xiH3ad8gJc1HSPTHetQY93Zy2xeb5A72f3SYcBP62Dszu8srovF6WHHgJfAxXbtWX7pZqUc9Hjn2PqaWmQPmCjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p9wZqbwkuQKAtPUvW69E2XPcwzmxQ6L8coFqTspWJYCcU1LpXdRDe33uHAVosvpsnkaoGxSb1gbRroED8uZcusj",
  "key1": "37sRby2SPfLkYpWmyErY1mm878116kUWZpWgQ5k86SSEvm3baGgUsgowCi6mTd5xrDTB6c699wKtqYzASajtD6LC",
  "key2": "5mMQpine8n8FE2SqU4aQBTr5q9krfXq7LKpxiu6AuFEY5vNNy4GddbS7rrvwKKS1xHPoHWgXjZfZrYd6zQHffrp3",
  "key3": "4gD6ULumML3uBUFYN2v5gfp3R5YJdZ33hb7AkS3pUJ1aFH37qy3YNex3GoBMEGuJdvECsdBCTcRm5PvpxFh1uT2B",
  "key4": "Zf14jqkCfowpkmufc3y8mCMN68cPupDZyGUKs9QmjatRtbsSaB4Hbv9euvwemnjAPQ31inkmDNfrFHaDhNE2roR",
  "key5": "L9RybnSqVmgBNyKQNxwiSiz3XeRYBMizFUyeBmuwkSPvLpRFkmP8p28r6AqJ47cpSBGPz8qgJQ2WWKurP1GBVhV",
  "key6": "bz9bdZmxDW51BfZpxWJemooTCV9PPnwE67BhS7dUsX9GrUN7QghSMZ9B6M8m1HeNHa77DxnbFyibSsGRdATYACb",
  "key7": "3TXSJsf31W8PuEvwFAuDMucHgc2avEBLVCnViUnnuXcTky2HN7wShXsPdHxobGABUHprgotdQWxk55UC7eLqyAQa",
  "key8": "2pGY6Wcsg2XTbRV8kyX1GN5FEZZyUxKi1YDBuVFU7imXr4hRXeWR8kzFUw8iPvgYWHo1xk8XC8jGPAkESG6P7aag",
  "key9": "2smgeuC433MocQxzk4DUUAquZ6XhRCLbLq5PoRAa51Q6MasRQ7FFyMEPTizHojupymkqhp8S2B23uNehS73AT8BA",
  "key10": "5H2k2WB69zBND6VQiVRekvgiWXrcLNPaZneMp2soRRLDPnAFqw6N9fTr63AhnKyBQ3nZnq4HDAGDWMKCtXudNcnJ",
  "key11": "3LB91URyPudFicjNj6oo463BFSa1mgtEiqEJKGj1ZLdk8AU3nYg64gFTsPSCfG6AkKqaUhi97xyueFqnxigito3W",
  "key12": "2AnRWm5khGVsi4iYqrMdMCgzd25dSvg3zMGsCjAbRMYhZninkoVTJPDApBm96vXqHPLnBECTTMKrPrn7DuH9yjR8",
  "key13": "2GGo2KqCuh26A2uf4JJyNbTk4hMSTNYggkLMZMSG2QPaRUc9MqvqfCJKLj9aC98bfsX3NAjCcqQu7q2dcmmchH6y",
  "key14": "5kxv9SdpU5JdXcNnoVUQBqw94t8nYHcx3eXacCcTcH83KQiUEJLhqdNwiGxbkGB4mxMz4a32he31czmuZBa1jUj7",
  "key15": "4wcHrbcLULRpgxQpouN8Zx2HeYC7G6zf3xkvo3LDfZqVYNUmkTm94Qp7i59jDTYUUT3qdZQRjEDKBWkexptXhkUQ",
  "key16": "6fccUwqBJcr1vsiuuXxpSuEwbPw7zGnLThfwuQdkh76RdpUEQbRCpimkK7qGQGa7N1HTTxb92mxYUpGAiR2eEkR",
  "key17": "2QqdQzm8VGMsyqyhuKx6MkWmMPtoTFMQHab5fdZRhCnu9UtuqUpGMdPNLmA81tXEfZFQ1PBDduS53ZhKBZatopZy",
  "key18": "63YnX3ce2moJyUeN828XqZaaFuJktpewxX2vjf9NDwVVk1spUDMQkKrD85toYrWNk5WW1WohKe2Jugaot6Giakkj",
  "key19": "2RpyPWCPa4zmC95tWSefFiALaDXsSaCYt1VSBLW8gc52Ri5z8bATNsz4jyGu9MmpPS1wZC3vT2Gucnu1ECfS1ofJ",
  "key20": "2JDmKjf2X5PB5TU2sx6YVLdubCevX3ztK9adbhqYoVrqTLBceMfzDy9cjT7cCKdQKwELUt6gPY8SUCsaRDfp3jYh",
  "key21": "2Q7W27LoiHB8HLE4djfHH4mi1gZaut8YjZ51hQ9cWZdXKi49x57bcTDpNhaR5UH7QHHcMDgzmAaRKFtH35Wreroq",
  "key22": "2nQYX4uzGv7Z1LWt9f4FrizSfJrSuv9FJRBAHyYjTmLmFmdFBE1YHbR7vtCKwmWG9jWCqsFp3Jcu8QM8QdqW676F",
  "key23": "36VqQNxCG5P13pL3rbd65ePamDfoMaGbPZ7dBawdJvvkkK3k4Y8Lis1jvc2FTFDAi6W3Y7N3yRos3extZM8aoWUT",
  "key24": "2772iJnHMbQcb1xBWXbik6gtdeD8LbNj7LY2YVsnvWETCqP5ATiP7aXic97aXP3bg9t3zwGqTGeDVg14pwGNdJPK",
  "key25": "666dkR4V2atnZ36LKs45BDeSEPfXr25hLLuv1EPpBHGkiQcECwxNZ9PsXeJDqJNNDKwKb7Vpc2NiuiwGyP7MGtXK",
  "key26": "3bokaEToLXbxz2foEvnnGPH9aTwek5p6Z66jcqQwaUgRdDhRQvTKVrFrUNJgzUri4nLJDUhu1tzpXhQExb3Hpchx",
  "key27": "3ohdKa1BAqaMKn424MvoWtzEN8Mh1QAmyVrrtUbGNDrhBNu2Z4r5v1z8cwHhg2yLJETdhjvqsEo3E92RBn2ksmo8",
  "key28": "4st7ynmRgDw4mB8JnU7ddJEfrTf5avgXE6cAPPYDmkWUB1hcaZbzC7HCi3tTbnkBX8gYYtXx8eVCCoHEMHfzvaLN",
  "key29": "3Rhu5jQdcnJKiZHoz4YeDBKihv292YqvWHhv8R87aGB2ZcQqtwK9VhFfJ9DMzVj3HLye5CQYEr2KznwAiq7cpieR",
  "key30": "3fFsAkW5EProNtceiaUqRyrfpkkjrrWdRpGH87ySjgHwrLUaJWdskaMavcGnxcbehZq3SEmcEU7XPArbsWANHVWr",
  "key31": "3RabBNVZEag5ZSeDkom1yYX7DqebikQgcZFpmzg7o26dAUetpDnt1rCJuGyHdPZzkUYu2aVL8L4vXaC7HaJ7HdMT",
  "key32": "3q2ec6q4Fg8rfc6qF5qPip8xkfMuHKCqUv613FsimUCxRh2pDhKBc9tKBsow3RT1pg2Lp95hPFf4Fuoauu8WugvB",
  "key33": "4MJbubf2iU7KPJJa1Ks1gJGhPucQVG8huGBFE6W7LXiXidBwMKepZwN5m8SQTSHZgCbcnEDSmswqF8ZVTXND4Ky6",
  "key34": "2Z4TYXJhAnA8hnGs59N2XiB5msz3VsyJC9nTMHujLmkRWAh6UyuQDtRTTtr7iZX743optTqtGiYdAJehy43sxcTd",
  "key35": "5Ngd8QNDxKQEemP9sdrLrZxjZSWWwTrFac5zAxdhrayqTHUGk2RAHWdovvXpDWRb6XfeobhJe2GJ19KYB3Sc7cxx",
  "key36": "5oXvZ9SvG5WDXa873yejqvyh3TSywMDAqDGJUToFE8ZNUqnYiKfWuN63FpkTCr4kpMPorKwUwpeyrbrkTDCQPJNA",
  "key37": "3pERbvRry6BujdbfiLd1w6MmGJHYztSirH6ea4FrXjXouYXSqfXRVEgigeGnB9FxzmwEAaBsbv4KkCMEWmi9rmha",
  "key38": "2hFrxNohmdhFepnMXXH6Uo2ZYNLbBKwo2FeGY4jvHAC8yVneJZVsPtoufd9FE2xa35UGRoonKcj7RpCRzmHtkhZj",
  "key39": "5Mdpd51oezHoN9PoR7oLdRmXw2cPG7dBVcdsyvqAapUrPRCaPYkMBvE5Cwt4R73RCKM9RZcr8NRhmSzpu2BCpa81",
  "key40": "cS8MRJe8HGtLi367qSg87ViNTnX7tuXigmtG5XjHk6nDrFU1YRshtgR9suorxNaXZDihpZs8SUhJe3HByCr4enn",
  "key41": "4kDjoGbwrw69PP9bGtyE7dtRJW4vMUo1mqFQTMMLaBbA7zf345vvzgDK1XCcwANBn3ry5Tik5bAMMv5zz8Ztakzc",
  "key42": "4fyuKaAucjgocxcPohqf8UnnQh6E5PWKjbLZ6sX8ZcitpdMWR6hogH9ECekzutnDMfFrV2TvySyRLRFxWtJ3BwsS",
  "key43": "67af1cUfiAjjuQ34xmSpqDDCYtM1tXXCJZPZfTC8Nsf8XjFrTksV3JrVeBedH3ojYHT7PCRpfjPhcY7mCHR1SWM7",
  "key44": "52bmKMGRLVPJhTMM38CT1WyQQBaXaz3AjhqvbFkgBQjKV6NdtH3J8zEstUb5sNqq9Y2AotRhLqBws7EJU8evb9To",
  "key45": "3NhPGQKKMqQLZp6fJJ9kV2P4zpjnARELPbqDGd3t1j97gjXYYH2Fckwwekfmdc2giHGDRM4Ymd4x6j2E2bbZRbZm",
  "key46": "VX7D1hLk2mgkT1csbvWJkQn3vRPXQQj4UydjE3JKVSzuearzLzvUtxt9PWp3FLJCnxVjU3CnA2fcDrNDiyqfYJ5",
  "key47": "aB5mN6xNnLdQeysko4seqRPuh1NNc7fGzdMESjNFXXdpYamsZXUrractDgrgzkwrnG25XnGhiLf5hS27wKVgpxg",
  "key48": "457AR8rdkNYzCfLSsqyqg8gAknn3428DMbgy2FfUDvZ82QXJDCn1N9NfCf21Z5BBK3htrwPsptRzi34kpJ49gDG1"
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
