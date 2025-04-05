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
    "578t8ARzyqCpdjucVoiMNxJknEDpchV25biZWXjviwCipXxoCSuj9nyoBQWbNosdUZGNv3EMemnuCPk9ykXexD8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vPfWVpdj5BQyiJk4NqFbhfBkQsPdaYksfqLgcqCyQhqxUUxd5eViW7KFfEYrKiHMRHHo7B22GrhFpsN55HuqcgP",
  "key1": "3vHy46foGiryBPbHRgRhzeqdeJ2WZVUwrtxU9h8LV98Mao2W3LfEgcLR2mTZetC8CDTrcs2R5q9JDus98pWQy1SW",
  "key2": "5XFHm2Hz42X7WKq6Rb2MsPkxZAzNerXyshW4qytN75ewh7B9q1MScAojDmQsGH9HZd4Vzz62bXQrz6To9TBobnWT",
  "key3": "4JB7JqwULh9ZpeVwz3NwAHSvv5TSu9PEmbhQs33ippxVg5NjhEA4kVJRfAynTPLujTd9Lv4UvG2vaY3dnmzPuSY2",
  "key4": "62sLkErmD1rqMTumioYpNVKipnawiVvhzj5VYETTVe8yPXRhsVSySdUSpBWMoJ1WMujU2FktRwhYk26Gj2rbZQBD",
  "key5": "3MUHUaxPbivmX1JrB1YphVQNHmaidDzQUCjkhBoBTEkbXvGaktrwZsx1tuBUdAHXTBVyeuzYN97nQ4cdohw6Tq7P",
  "key6": "fZRfESaotZRxcvYZtGMjJkmgtATPuVw5s95RAFNixdaY3rd2wsoZJSsAFkrCuDK2ymLykVwLX8q1zBWxTFU7L73",
  "key7": "4nTVf6Vf11HVYHVM5fEmjhatC2J8686TRW61iGLzquW6viWH6K1zdc92E9oyckghC2mamprYin5Tih6cEPMCg2p",
  "key8": "3T6SMoxqXRAym4b268XB9aH2FMAyuccE9rCBrE28dZ7q1udkHRPwuyGP3yJE54iEQQESWR3379MtwYzeHVrKGmBP",
  "key9": "3YQrb2dWacX2RUFmShYUstFWoCWEPk9BsaaLFuaMCbMsK1QwRyBYcwSYQkTEBi991NN7XiNFWs8pGgYV7oNeP53g",
  "key10": "5LfoadkJKWwvKZV7neEQutnDLZE8EXHdtqLeopPhB3NhEJkeDQKn13SgNrvz9ghioXuRofVSAWEMgKzskoHgUbyM",
  "key11": "4h8pJH9DYJTiyx1FTY8EXPebbE8aG3pMMwj5mnU2qnHmMXTpTxugF4kiXk8ygZ84PZdz85wMdW7GsU5v1EXyDTh9",
  "key12": "vKiw2GLns5Y3vCZK3M8kLPdx8rGoELHFNW9GXz7MNwrQT5e7CmJHzK9aS5BNzsDYmpGd57cmntiDUWwq9CgqwWN",
  "key13": "4dUfsQXMvW7AtyAQ5LsfVryg9CFPfhWeYg8mcWwDiYNne7mz9PMEUau3a7TvZibpPZeqREAsKfU4hwN8gDWYwrE6",
  "key14": "ccJyirhks5oG7boQuYexf4T4ofNhVqctCmaEifGKvFpSTAYWxPf7ej5AjaTaSvfeezYrjNf1U6s3g4BJQ2VEQge",
  "key15": "2VcQdxWsbHcpGnQmQ4vi9huxZKyoRdugpgxhP12p7icbEQnvv4git6iQwUuzTVzA4RxtP6GqebasdMUgbB3ajWwY",
  "key16": "3MXTj2rGmyaw21oGHZnbPM3sRyzcQCq5sxryThuxzS9RkBgabKbS1vFSaKJuNqtCcFQG6G48Z1Fotm1RaK27n879",
  "key17": "2HBVrK6Td172EdJPP8VRf4DcxVfN5mW4sDwUesbrny4QShyXM8gdPibXz8hEM2ikkvEoFkzPVoZVwnvZuW2mgSAd",
  "key18": "31taNAYdf1rgDq5vzxit393nF9S19kiQyvgdFPKYeRfm81bae5JdefjcrWoaoxx9mpBCwK54LLkMimRQgr1XzCmN",
  "key19": "3QdDuAErN8tQyMQnJRhXBJ47PQWDSHVc4n1e6a4K1cm3CLgpyi5i9mmtXzzJdxG4JG8c2b1FCN1tffA6EV8tX5mM",
  "key20": "njGMseGDoUixuRBCFutudEupK9z5EThgUJvNQzRMgTRCjB5Td1p67Vu6iZxPSYxGrEK6qTRPjMvTUa3vsCkniHb",
  "key21": "2iGStEqEEFbycw55vuY8HWCwDheKHhBpB6H8rLPUgJEL2QTMuDBa5iSbhe9Cte9Ni9uT31M9oEWJemE2Ub5MFhCf",
  "key22": "2r9HXrQ2pgyk1UENFsKQy5ZXwVX9wzqTrYadTBeHS8TtCvQGxyJ5qVQijwLjYVtPgxrT3kiuZZZtQ8v5ULbWJL37",
  "key23": "54VuvWBM7VjTw76SuJ3o3xjZV7FBjAd5bwEUJnG65VPigmbJrqUcA5rqbhmYMGtedgYfQyNLeGhEK4YKsJsTo6Np",
  "key24": "kYj91tj1sDdJNAVt2bMTmp7jAZFF4byqRDq71Lmj1oZ3LSHnRhHz4gFH8M1cVVpwsawQYr6M1MUVVo4eNnEjchm",
  "key25": "4k9toHHokLHiTfF8fSdXxsRuUDpz2xZQV95kZSxcjFVBQTk6PfJtkApxao9voEg2FCbejoGZUV7MbCRuJDimmZYi",
  "key26": "3E6v11iL5JPnGfRJiZZ22GYQ8Qgu16EztTfwf1w1L7paph8ps6x3jcBUQKAU9aETu1BCij7yi21YFbaS3kTE39nW",
  "key27": "4YQ8UPQW6mMghvAJpnFq5JhE1vrvLH2o12Gruv2rp1dqhe2MsbxdPHHUvU96bGWsk3XVVfUAY1fWggii8evABhtU",
  "key28": "5xQvQs5QnDGkQDUyHSczkyzfDGrEeniyq4tjSW623RTsYScu2bVfC1ppW4oocMXwrz7q3whwin3NEuqyUZYJNfbc",
  "key29": "5VaSSaZfAT6rGEvSAeAYE9PwP3ST4YHqX6eLjmJLAtaomad3tGKt5tHYS4hyhTWy3pWgNv8jMADCfwPUqF3mHeet",
  "key30": "2w3X3zmqUBXnKxjRMaihybL2S6SK5bCnRQxjWcuwnYR9RVvm8vtcuY7zSALNdzyJWe9qKqggRsqDFQgswEBc3itB",
  "key31": "2xM6n633fVcsFmmN9eV6FeM1t1jHBZC8YMZUjozqSsPEMhLn6X84b1jf745f2Yqo1yfjTka6nRg1BetjXUj7KY9V",
  "key32": "29NZsm7iBzBwt9CmcdNo3UKEftPGHpudU8itNrZGcGTgoYYGDYN25bznBShjH6xCxNkqwTjPHqzXpUDwYQXGtcQM",
  "key33": "6VjpSJpJJ41GSQALnT9sjzC7wPEuvNFh59QHSQ5v33n46mUaQdU2r935mn12TCoCrPFoYFYRJw384WZDdiJ8D5G",
  "key34": "2QHVUdDSTYTdyPVLJbphmBUGZqPG4q4dXMqxoPecAPvzJuNwH9vMKBcy8pKd7ghhh1XZVqtAHGc3m5qdEVtwAkip",
  "key35": "4c2WWGzSdnjtqHKfqiDW2Rr994oeg9AX1xibHRkv5T4DN9BxJF6WwRhq64WbshvsyNegFibiLDgjRehEW8mo9bqw",
  "key36": "2xaLjVaWfTpcjqAu3wZ7iJ22rNvc7HNrQQny9AVMDem1vtEnky4Jitsq4kDsC3eBpcH58sPt3azXV3KG2dDDJq9u",
  "key37": "WgwYjdxsGQBbpMcUjVhPduUE4UZ1Hre12tPfpmTTcAvbRmctmGZMb1XVqg9PGHe6VX4ypz9DKKr7DCMLdFdK1gq",
  "key38": "5qbx3GoUz6detbDYUxWM29AChx3nm7cPyjQVALS2wNb5YGVEka8v3UjBmuYE7dqhfdUo4iuCfVLQ2G36xfjXhQA2",
  "key39": "4dadMdBnSuaNThutnCUTZRF8aeyCz2B465rGRLhFRVL3woPgPFsnqSz2LRRQNDaD93KTPWihbb9tjksNDt9LGQFs",
  "key40": "67D2XzyFTxeFaZHKuxCET1YvaafT76ptmszEX8v6nvswkNw3Qsakv2VXR7WPvf12uRxQPowMtBdD11NMHkF37CJg",
  "key41": "5Dhk2ppngggT23bfARGT6xLeZZeGdps3poYKsEw2KdCEJQVELLszCy6RN4TD82oPuWNCnhERm75JskBXSddKQv86",
  "key42": "3dPjZK8pA27hwSpYcyPygghTuHrvXriva647uqo3rAeMuTYmGNWggZ7TtueJuy8naVKwnGy4BPzVMPEs3D9oi4dA",
  "key43": "3kdGNo6nyPS5Nn8YdGphLiVSzBn4VFtKhsKFPV7AA3irqVytSg7Z9XForZaVmafb756sWJeV3ggQFSmzCZtD2QYV",
  "key44": "4habYJRPRys4Ab4waPqdkqBYZqBgNNDwJV8RJqZGUhHSoWRxdk9ui9ssz1e23LjmEHeboVeHSPK61HGSjfXpJgDq",
  "key45": "38MBro9H8212XbFk4dHnbkNU2e3QLGiqnXQPCDYEcmx9eCXWr1U5sum6RCsqqTfVc5jA5KccpHc6ke2sJAR91ovq",
  "key46": "3ZQTS4Qcpg1bpLQBi5kwtvhnnep5sStCCXtHoPBiv3Vpa9bMGwqkMEMsMrN4z6U1kPvV1M6SrcNxz2CRAXtZdiqB",
  "key47": "pd7LV9G6fid6H6PbhJa8i8KjDSDYP7z9mQbR4HUjLnEk1dSFboEkSBvbUmwrDeN5w5kD1ZLTeFMMu1ytits8VKK"
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
