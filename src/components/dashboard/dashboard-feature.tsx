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
    "2rHBnV1X1HSD2x6pbtp7YoAvuHxAzrRM8zMkXE8XNGJDKvXqbpi2xF17H693Jvz3qP4ZzWV3xY7ma4kYF5N22ZA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N28imP2M6vndF113kxNPkkitefqGYf9KdG5asFkgLYPS7FnjcMH55NiwdN4KNCcXVGGzjT887bWJgpxxkQLfbaa",
  "key1": "35wAF6T9AVWJLh4ZdohSDcbJQiXj8LaSa8rXDhLpffJexYQPJYRCURkA47kBVos7AWpPXBr2iEtxvE7XrLPAjvPC",
  "key2": "3NwnbT5h66AN3Nmz18LDAb5up5FYJERzeG9p6QrUxq3HDuUTA5nk2sYN9uWXvKsATgBJwsMz2zVpz7Tnvx1YX8vW",
  "key3": "5Hnn43ERrGAfnm8ydLjaEKJYG18HC6qyWimk8f2EHtFc1T4cUW9ETyaiJ9wMWf1d32Vv8UJDASHWBxWSBv99mxvr",
  "key4": "5bw4grA1QffMBEc4nSecYuNJJZaUMabgYoYaW2mjBQpQkKDgnDxsv3C3VW5PWGPL1ZLhY9pWpKFh8VpDJ6TG75ri",
  "key5": "2Q8atgiC2wYhN8yRPTPv53FbCzhFCFppzRibj6BnxBLw8zCxge8DjiKJhUKCk5dEFvSum21hs5L7Tt7efMFqW78Q",
  "key6": "44ze42r2ZgQAjNcY4KtGZiphps6e35ihecXMv48Dvg7cdvmDVePPftfaDkVuwxDGFcB7CF5fcejoYD9hQoJfvugu",
  "key7": "4KPX6BmaYMgprNwLNLETBvX1zUYrTPZZXd3QgSSpkWPb5tnLX5WoWZCmnqHUFFMvCaV9JntUmniJQujKA6NR4KEt",
  "key8": "5e4jMrQv4Dk8TzopMQgmEYGbE5Z3qrbm5Jh1NNvvY7mLsiL6SjEeXcLycwt5WTTDoZs3w93Q2V4rqSBBsUFjenP1",
  "key9": "5nDLHuLAMgnBm8knZESdn1kg76AYU9eENmha1hB2xeLkXpXWKaxrBUXh7DLXmBLJYZekHdnQ88hgJw9M3F75UT9h",
  "key10": "4SVJRHVvTncMKKC14d22niSdisUoakiR2WFrJ7ecuhsz6WK2ooJirZbfj82SFzi43ZBjmWAhytReZxTbExtUF1hW",
  "key11": "ro3Pr61BexubGEcgeXxQDaHZbs1m4V7gFEiTDcDdpZyvobzjqYh15Yd9xzh7oAikDakoVNf8CZebV9Lqj95bd3b",
  "key12": "4oPCmDCerXZgepED2Yvn4JEkL3MxbmcM3NW68ar5XP62wPEVTiJ96fca51gQrJjPAZNxDDC9XT3TRz6krcBCD7wj",
  "key13": "3anuBJvUMC9L5BCA9Gvo8dtLNHq7dwYru96joWTgwCYSSM5yuFgZWq9GxySYf7UBjihtfbAh9pLa6NKLzU2wcR9t",
  "key14": "3cdHzxPAbPE9GZjGWuTrW2Pmmtkot2qkGzeYUP4NH7QQcb9y49sJACYVzcbQnBL4XJsjHwVJP3LcjGnF26HGkhW9",
  "key15": "2HbyXrN3kVNG74cdyXkCfYP2whqXsqmTRaSnS71oDLNafZCYx15VqLG97JujfkAN9dWXYegSPQjvDUK9cDCkWwTS",
  "key16": "4QLBfVBcpWsC4ZZyYRS9tDAPajpgavvCUMAhgBbuG9iQZzhUPb5ywhkVtG97Jk3CR54uYHUm3KjzzFUVXZqdW25y",
  "key17": "2GnGTKM7GgaNYwank5MHSJTzSjSY5fSpYUWaUyWVi73kfGw4kDtrCBFYHSn2HgkC5or42uDDTxBtHm6zHxV947TD",
  "key18": "3PK2cLKGw3v8GogJQCtcKssyV7gaTchaRBqdrF68qw9geoGSx7Z6gjv8xpH8DXY9YcuiAurmEFJDbbSdumFtBHYk",
  "key19": "L1BYYL1EGRo1E3xbzSByUwgEinZiwZ2L4jL9aSQWrRdcSho7VMCPGqgBhkdXyDfwMD6YngtHRdwPT3UCnh7pQdX",
  "key20": "umTTFQjDf4mPDv9SdNyRWxfX5KJmUAsynmU5Zjmn34UuMmeuwjDAZkTNQ8o7frphxTdL2sAjMnRVNdGMXnCrSPq",
  "key21": "umQfrk2GG2pYcdQ3QwvfMHF8Z4BqmuymvJa9fNP3stNDJuAcdtxTS9eDUp3GjSay4dzuS49wJbsmu6wjQsCYSBL",
  "key22": "5sozfiQtz3fhjJBwB6fSyGvcuaCqMUaafMvJZRRL2bxUH3hejLP49XhJC929sgSsbgnMqe4GzWc6kxdxxuiFxAvq",
  "key23": "djo2K576iX9zm2CG7PayjBLcNbqBNdVXVE3rv5pkEYwNknsffaac5WSoUnfpBgM3wRNvEsScYDWGVFQqfFDScaY",
  "key24": "JKhCZWMxNgj3Q49siGnpjLigNCoZ2Rz93rumTaqe2oYRmZV9oBLqvDUyj6FfbpMq14TBDgdhWuUw86vf55pT1Db",
  "key25": "hpb12uwsbFhu5g4nY5WCMiFkXhNrBYDPeeQk2j8pT82bvVW9zWK1AeoBLXpfbngrDANazBaEC5Xt4xy4qYQ6qf5",
  "key26": "Y5RK5cXTsz4gSquyr5FXjYtHG1ssuig6Ww5XzJWp4zXAZRrGrUHRvnNiLcDBmcdee4T1kyEm1zW5LrKVaNeBZMo",
  "key27": "354oyAPGHVCJh1nbf4BpVhjPZLcVj7SFg4pcgEHnYqKcrhG5CDrNcVPp2JkcFirUtdHW7VFj8Ez6eueaTn95TCMK",
  "key28": "57HySxH2633fttVraZsvLkDtzw44k1UB3ADHJcLo5JWy9GdBANAsKzwuFWhRJG8SMevqNrA73vdzBbU48VUznWYG",
  "key29": "31tL3YhaEQoi9KKvn7ixZBY5q1mKH74EUBF8eFJsNndT3ANsKJRNLCVYuGb23kFrSHULsTToa44dfgMSvGTPMvTw",
  "key30": "5gzd5DDiNJiPtL2bf6Q1951HaJjEahX5qUL7FAc5TwC6P3AvMXC8xrSX4XRz4o6UM5J9HFsuWAboxbCrZE3xn23u",
  "key31": "2Q3PrAoTEFK8eNySrDcgw8BAVUfTJM7PeAXCmkfw2icz9xg9m17saTC5sxdPRvvBw2PEi3ehwH1diQkByBAbDxe8",
  "key32": "3EzkU68px489eZVaNM6MrnxYzvGuNoZK9Tg7hEtpzeYaSA8XaDEdkgBrwyqdLKVmWj9LoYxSwVXxL9Vrn2GaViSj",
  "key33": "3LQmGTMm3hwzMirtnHs1PtEcbLSzLPft9Vd16CZzVZMLkBYBY6pcJXojLYGbSVkU8UvMZEhtNtq1gtsqHX8ELPVy",
  "key34": "28MAN4AHTbZCuAib2Po9Seuf4h6avma6FamwgVR5oHVEmVvHQcFgdykZuAKru6obZ6RaPexCfviyr3D31XhQtXoB",
  "key35": "B3opzPRqXPTq5yTGt5voDJzZRe9PQAE9hMYwmBwJFTTfh5YWLpkhEmtpdv6Ccbkeh3hJe1YDmYGgssMmgdGswL1",
  "key36": "5CT1KqMHzcRazpAKWxiU7ViF4vwr6EaehrABXvF6mMgAFdn78GSocPKVR5p754MrjgcuoDujv8YAnPK43eCL1HiP"
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
