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
    "2TfL6GBHD4atDt6VkZwu8NJDBktoKftnUVyEhgFHBMaj7MR5Pes8sGN2vMPFgz6pH8sJv66H71pQTRL4hYE14AbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tbUuSr34KjsAcgGensunNJuFPBNURe98wVVZQky2B9eDWgvnkEdpZL4JE7xYdjjZXQpxyJMb5v9NNhK1uwR2JJt",
  "key1": "5qrhaMBAF9xhT9Mnkk1MoUtLuNH9aCXBgDqkHSB9kKsW3eeuBVxQhxbqtY9H927Famzn2KPoqZZZdPr5ZwFuXqHY",
  "key2": "EGph97WByXtbumtNiLZYFSUEzxc19okoANfVsLpAfDTtttk6DkCqiRxTfuEbPWbp6X3LxVuKPRtFm5LNRhmFmyX",
  "key3": "E3MQcjz9PFQosr2LMtHC1ekEBrMrBHuimAP2d5KeAVpcmNFWPxcXGa4WDqScMvCGzxshqNnbKfaACmSWx43EGKM",
  "key4": "2YqhyHpCFHXBYUBLU2GLGnhmB4usegPDWb9xJXYdvq8ZQ7BgqLr3uvRoZYZX4R1ZVyHaX7z1CrkFMm7QMNZbc8mG",
  "key5": "3UfDRAKTRV9zmrzS9qa9X4XQpNPrtFVYcDUyduhiqNRzArZRHW2cydYaunjNaeZHJEwX1cG6XgibmZyieEzujG1j",
  "key6": "5PgpR8e9ENhcNgMBenCfQNVEbjBVsPBaEMmQWUcg7QmYBtRXe7vzLRpqRYFKMPxicgX8dKNThruWKLMLe9XkxCUi",
  "key7": "2GscAyvquUV9qUn2QJbX9xpxaUdqca81Kp5zwwjTBunVAHDhU7BgyFpKVGgwLpprzkXYWG8QjKiuHeDnuRQ8gV8t",
  "key8": "22fUjawSc9LypMWbutSCE5L3JvrBFFZsmz26DumGMjRd7y6iJoydUr44Z2hiVsDDLfkjhMNKgpD5ACt3aon22cPc",
  "key9": "uZho6xMh5Fs3vLVuCxzZZQQtvC67YRN1go83tRgkDV8LKychiAZrhu3yUKZeXXYHd74HFQV493ydmvKuS9NBKeC",
  "key10": "5djiwsdT3QehLra1Tsy4G85xffjS4PPxiY1SHqCLZxVGxHwj3hHcNH4hdPWJqtSUFSxh71E6x8kGm4YJMgSrVJ9",
  "key11": "3ZByTmAQFLs2TvGHNWMz9p84BDeX5w4jGPvh2xK16pEjKTN7bvj1AkTk94f3UkcbT4qZ2ku9rgZkUo5iRGhNHSwz",
  "key12": "3NhkXYsmpToxDBmD9wBWVhh2f84yyBP5s77pQ4wB3UtDeV8rDdpv6yvGQfnAphXGMYTzXN8JXeTzSK7XASTM7Mw1",
  "key13": "46whnAyg4z2xk7Z6np7nbYS24B6rF9t1wzR5StiBCrcMPMRsA68rzmeDaTQaSaq8FA2aJursnoA3G8kMp68Eu62s",
  "key14": "4hU7qBEyg43EvNsyxXrVhR3qCa2Se2FfVEHPCkLZuaxhgGaUs4NuX9xrqyWQQ6bBJjkDhFJs3RqQfhZaRxaMCZwy",
  "key15": "5eb3iaZmf7tZSnWbdLB5n9F6iU5CB7A1SmCpiacSCmvT1GfAjJRvemGd95BrZaVXC9NaJhXRTDhGFZaHxCpDUQGH",
  "key16": "4CYCpBGoogjnkV3UNPrAJVfYL1ZymPWMYMesaKVbZ278oMPJGSFU1ywAopdNFn1PhaP6KYz7CbzGpMfKbRVZmLxi",
  "key17": "49TWmavSbdgNCpPc74rA2kYiB6y6BDsoBMAdHCvzCAsC7Uc4cq8mXFEWEU3GHMJoD6dXpCZskQSSec7wyGTpwcsL",
  "key18": "3UDz3TYnbynGcMULvnTXhZTyx7Nmo8vpPk9UJ3kJhBShoFkgKwF3EryuGY61cdhkAhz9YGxBqjsa4GhqFCxxejBF",
  "key19": "m6sZcAER3ks642k21ordqNZMMNrtBPGXczaSZvJaSJtL5qQbQnbaP8ukB3oraE4RgrnmsYRofhwNs6u9g3NkyjY",
  "key20": "5hF5i2zKavEGFwNmLG6LDy6RnxJMW6QHFk8DTxh7TrNEvhhqw7bgcfgyRyTLS4CZisF22UJKRyHTaEJtRtMjgxQU",
  "key21": "2qCpjVnmArWtMGsptefAzXCmHhjRF5LYnyT4PKpmfaxo9BaqsCfWcqMxr3roVyK6qj3K1omXMTzyerhEyUNxUhbW",
  "key22": "vipYrYuaxR97Q8kKteFstHyYydEb9N8C8p5WkQ1CsRj8D4JKcyhvtp46MXgMA5eLxUa5nc3Jp1DKGMWd6UVAe86",
  "key23": "4vq6KcUTfC6L2a6wAHstv2CZfajEeH11TabJk4hqs6p8MAUex13byEcdtukiiBtp32iFy1euMrgxuu9cqrEPDQKi",
  "key24": "2CbhRGNiW4Ztbr3CxgWmRPZJqMWwutMUV5pftyaecQqTg8oK7nbmgxu8KgMEdD8MMAXynxJkg28t1pEE2AKMFoC5",
  "key25": "3owfTmJdit9GE7CRwqxuZk1U9PSFbUsnjK9PGSVqzGdZFgNZLEb4fATnEJPKUcBdm4hACwPNwXLmtNTEssj41fcV",
  "key26": "h7okby8Qk7t5XjqaoqvJ8mocraDs6AHR1Sqk6MpSdJ4Jr2PLbxtMcixXMRBW21EiJNN9644baoiDc3hL6zSGnZx",
  "key27": "5NM3kexSqcX8FUhvrftQj9W3hGDXy2mazUdveFwPsjfKu3LLyCdQ9QC9jLm6GmxS5EkeCptb264sZT5mdgM5SUsv",
  "key28": "38wzMKQ2yyFZCfTFdFBMoU1nfqhL19FkZUPWugDxTGxYfq67MfPkBf5RikuLgGrMyYQ54zgFrMncuafFUR4A7SWZ",
  "key29": "37EawkD43e1zwKiMsJPxiZF2RgQyo8jNgZFNbTPXZenLT9aDR663WqVgTLvWRx9BqxVJ6FRN36Z4g1PgvLywgoSm",
  "key30": "4HnbMJrAG9ESL4wu64hZcr2HryybJT8HziBTciUn5gJDbyo8Q9QDaRo3ER6JK9R6HS4R1cvuCYj62mWyFDWetUcY",
  "key31": "2DUz1bNByHtC7QujeRrRCj3inncQT5Pvr9EjNJgw11CUuQ5cgzgyPhh7Efq7nrDxUk1oZ8vAwDtYd3JK111dFFSY",
  "key32": "2XmMmRpig2jepf6auKwCekG8KLwFiSd38tDyzLDcAcS5Gvpk7FKpMju5g2pWDrCERn7naPmLx83pp7AQvLzMwcfg",
  "key33": "2dAKWz73SEmYf8D5huTxVHt6NaSqGUY7J2AfZiyyRYLJLDXBaXKNTq8jDcdxRtcXun8zFGErzZerEFjPbuas6GJR",
  "key34": "4mUfDyrTZbSDRU6z48wXMfXeUc9wN147BAR1uRU453vcSFwqTb5eJNfWEBozp1WKdH3Fb7rAMFUobi2UWXwQs3x5",
  "key35": "mDcPVPq2KGznKJATdSdmyw9J1knoShWMkeZwwaZiwyNacsU2on6LTdJcC46jrhyimtNZDXcym9tzvgvmvU3uX2w",
  "key36": "5i1a52PA9zZqDvJnnpCPDNTEqdhwvRPNQXPPoy4dfUb9kh3C1XxZK1pSwh9hJnQTGA668aJje66kTsjbJMfeZfik",
  "key37": "3RJgfCBtt8FTJGKikBPAGqVkRQFG1PLGK5ottzUqzvnjpoVDKFTkNiJJ1vKyqh7EkvQJX4qeiUrAJh2e3UWZiYsN",
  "key38": "2rgCp56hhtMfUoGJTgyasqLRXYpkMKPgaHwQiH9piQjPYnRiLvsCY2K8CCg1xh4u2wBzUu4YP4wyqPQEAXHBsvnq",
  "key39": "2me2uDG7obQvNbytx642yHspiT64apnCykVAxRD2Hs8y2TV5G5UzsFXom1M9CCpssduNecfmX5gYKEY77ZsRuhoH",
  "key40": "54muBpefxeaTa5uUkRtQxoMFJLP3ynykt7We9UHvtF7BVa6MbJAmZXmCBCBnaCD8f4AqoePj8kCxdYTFERoFSAJx",
  "key41": "46EVRdmBDgrjY6PcSEdPnrtkiamEsB5t4mNn2NGnriRqRx9iX5aqzCaAeVJbyiafih9TNziYrp2KosanskpuvLzs",
  "key42": "3T3J9JngH4kK75zgNCwaZRenkrkPYHnZBT5tdGVknQGXysSs2V4otx7U8qYAGk31aSej8fBeBiMNGshxB7HwxbSp",
  "key43": "2rJSTudfVg28hazz6oDXSBV9jbNpYU1PPnqraExkK4vAjRVEpMUPTAAwf8hpvpHfModSUvtt5YEQWxefGJQspmQx",
  "key44": "3PzhvDzLPBXm9dbeZDzwywHsKDATa7ycdGLi6eCyMdTSCwgPqUi351VsotCqWwSogCH8CaudQDX2Tmwt9hr1jgUY",
  "key45": "KY3dCHtc49Sr8ceyX9XN8KQyUfMhAfrsaJxBm2k7eL7YZEWTA4RCHzbZqMNbgNvtuNZ5WcnZy9CdkWqxkJ2jRTW"
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
