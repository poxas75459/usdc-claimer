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
    "4asdag6uA6KY9eiuPR4uqbb7AuDqZUWrnax6WgGPnFZU1grPxTC5CmaCKHFK783UDSsg7VZMA5vs3Bvfp4rc4rHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XYjH2owmPCbrMPebXRQJTDrdqwsQdFtrsEw1NPA4fPjM2YF4iGZj8vpCXtpkB6pPjiU5qXCkA8X5qwPC1FGhSoD",
  "key1": "5VcSHNvgG6rUcjWMFAJwgxeW8ixJ2M4EWCmaKYxy2pyp9pbYtCrk1F5NgXyqw2Muy1HJCbs15k9UXvXBvSnSVr36",
  "key2": "63EUgp6pfGWeWvW1pL37d367rexLmuV89DRX3u1TpFHGPGU7nqUcBSin5thvzFWaKcGQHFyc5Mfmkybpxt6iD9wZ",
  "key3": "5NLnDjrfF4cjQ6TfNi4ZX5P6DriUWQsJJZ2KxpnxATczi2MKNdLasUiyVSwhBG3JUWZPVDmn2RxXs4Q1UZpBsEpA",
  "key4": "vsYGDJXCLtM8juv9swCfNQL7EmSEcbtRnL5rpA5FfTTsJfofD9xzheoiK4BkXZnqT2i1wcFns5DHtMkMXXTho3A",
  "key5": "anx9KBLY6wXKbUo5hqFj36vbVheZEfoAHb4JdSh2aG3vu1wvBZen8BQQdghGAG2jXcKeSkEpbr1s5cBa32CYxYD",
  "key6": "3BeJHt8JyNsQ9ZhfZFQ2mMhsRJfMpYtbpc9s9ztuCbyNUXj9Zav5bgk6hqLapVLoHFxPgJCx63Whc7yW8pZb1BkQ",
  "key7": "5NTFgHfZ7WLmNsWEvJgc9wnbW4ySbYZ6gb1Rm76EsmYq16e4whuY5NvDD5KNMUh7rEYfs389HBiKAeeNdcHNYE2J",
  "key8": "31GDaVTP6UoGCr1PSHzCwxSzhBhrXxcB3juDxHX1ym9HMNMc5Fz1aVeCxA4CFXkmif6LxcNQPnYY3ijhK5HTatr8",
  "key9": "5XTNjYxQcqrUyehdpzYTWExbtovhdpt7TJu9FAvdXAhE6yDhTFh79iFq5UD89P8ADfyiUisz3Wt4hgDGMe7ZaaeQ",
  "key10": "5YWHC1PYvAkpLMYDAKbaFZNfxZYQrW89xqxdpoNCVgdsSASQUQj6azqUJoSq9k7E1L7Ka8SNv25m14iHHuwhnWNa",
  "key11": "2ozUE5GCajCf6NyLmLWn3cse6BiGQCF98AC6bGXcsC5opwcUMLW2Kak9QR4ctLn7GrkZQjoxfVdZfnHb72R73EMq",
  "key12": "wqX6yp19MSvYN4sYLnU6P4YKpr2BN3LQFuvEDV5gNZuMNNq4m9bu1raN2iQ8g24zKpeWrSEjJs3hFHqneoHvFus",
  "key13": "4A358HHRTW6uLL2qnqmAMX4NoikKYzkvtWwt8eSZppsxs1vHqSnW6Fy2M4SeG5XJ3Hirh5tSuRhrzMNu38wN5Ao8",
  "key14": "49pggjikqCUsSsQxLruxi1eMJ8eCemXAKqGBTfmdDKufGR5rD7Jgeg8jA1b6QMsNc2hWLwNSem2gtPVzRd6VjJrC",
  "key15": "56E1R6ZGQ5TFVCrEuFZWoeSEre4LCbsGX5UsbraXr1Uh4ZbqX632W53t2M84gAbAQvfGdDQx15FaU1wY9iCkMWR5",
  "key16": "3eiwRji6YZK5bg14CrRLV6AjHq2drmxEQ4pUa9MmHuGStXPf3zY6SjLSfVTtvDK8c8LSuZYySyhepT3jtSx5rLZb",
  "key17": "AnUXw15bWtbSwMCCCb4KfPGhuCGaJh9ajUCDDw3KrTXUmx35eGtzQ6Sdt1Bo8VwzHAgbAq1oLHwi1TxkRucjhEP",
  "key18": "4diKzdi5DfZb4zHZgmDBxcTDjkJoxVMaJqprE5KepuYAnBCqNLtsRxqNrYJNMq1DWkDq2L5yFbbN2XZFcdhshSgJ",
  "key19": "5pTqLDdxAhAD5ePMRrKNUFHtMvbVUYbW1Kbr9c5LT6x8PVoTEBjMJenFcJST3zoVjX7gcoL1Xm2gSqyesMHxjy4s",
  "key20": "3Q4CznN1VLbiVwPqfpAwRBRpUd31gAdsgV6mrxNoyUqiSywMkmDxQnrtK8YKuH8KfCXSaL1TUnaYBgU6Qh7yrfWR",
  "key21": "Nm2betmNZhkLp8ignuCva3XQox1ZznEW3Se9xnTzZga7T9vZQXH1PfgxuctnEp2vEhptyiGrCB4q5gvGqDYqetb",
  "key22": "4DniBvFtm3TpgHkuVJdWBiA4VGGQmzGPQ1VprrqjbRBK68AykCA2kWBpuHtXsepM2CF3hYrdgnYTsNcdqKGR7mPv",
  "key23": "59AJihQqTVcfwz9ydLPWUKqwGguvjDd5ywzewtoxzuETkDHwnx3sq76YLtDXBevUqmPPGs2KRt2SJHx8jpE8X3bX",
  "key24": "2XH4qNgTMCfyLbsBNFwWebQbJkZYtws2bpp2feC5As1CSsog564fVGHVBdgZczKvHG5bRZcpo4QMFbnjT8rL97bX",
  "key25": "eue4RfPmo9gTjMZLBpo3Cq67GBd2nsqiCewcdFok2T7zN63aRvpnphphEDxdagfxeJtBmoj5y1BSkYMZP36QLoT",
  "key26": "26uCnEmgXzmcwfD7bKdxzH4xyD4ukKAnJDwEun83sbKDcFxzyCzhTGdFLupUWiZSF7cAa6rwWTLmZZDJUE2ptPTt",
  "key27": "X72DAQwonfr4quy7KTyosT88rkhphqyWH8xWfZHiJHqjppDZU7ecfkhR3Pxs6Br9f57cUH67XASeyorwf1HP7J6",
  "key28": "3MKStFyig4zWU7jDe9gqBtMpTcUDWrxhLjQEoqRv2fcN3QoJLzHTPZC1sroRbQMFQLMHfwkwwVnA38dveZjDTBGn",
  "key29": "5Cqdkb1XvLvhEnsUHwL8HyRc8b4epH2Mh2q7DWzU7reg1j4PNZVQCCweR6kcjtBrXnyeH16PtgLC6Xm6xoDxKwYb",
  "key30": "4gBAKX5k2T23x3gNx2WaU9zdaMe5ZxNBwpdgTV69Mc6X39t3ZXUnEoGoySHc47Aoq5fJVs9p2cwcazZ8sE9PeRwr",
  "key31": "5UMg8Xkxh6oc1hmw7rV7sFwypyGuzVrBXNBW42tVZNssVhauig2P6xzg6apdkm8wRneaEZR9d8EDRLoTgJX7fmME",
  "key32": "dgHvLoFnNR9pgdqpBmHc5KpQcynD32bTBbNUaMD7soiuqkWV6krEuiGZ5kjQnTuXSPLXvmHLQuD8U11pngAYA1x",
  "key33": "4gUPZfUAx1gLFaoAzx1eyGFss4jEYXVJxrUMkuKWkNkK2bGFizPVK8r2EB4KvTJoD2ZBecS3RNN5XG6kzsoBBZYT",
  "key34": "2WEtQkVErJDXgJmonKahrpMhaq3NzYVAK1DNpD8Q83CzcuZMVL7WgprQANUKeG8rpmPn7CJYEeLBQDDmUVZ8H3Ft",
  "key35": "3ieUnxBSnXsJSTpddohuSTvETey8pjKb2NTWtm9Kxh2FmnBu9f1S1PaFX6DGCmG4RMB6rc2tf3xnoHCrRz4PZZgd",
  "key36": "4HmD89Z4hP7fGMUypxe2nXnYi81ecp1M8TYQr7qQp8xRRvwQpw7RYrMeX9xAP1sG1FmXcyYnet4HmCvGrqjF8yXx",
  "key37": "3DLppbzneT5ttS2NZFMajitVf4hejuC28oTjVxcgsDaBugGRWsSQPs6RbF3rnr8LVtcF9fFDhJKAhgX2nh7WxTBG",
  "key38": "V4JNLVhEYjXMGT1iU3xEs6HhUtqZhjg4wE3BAGzkswHeDEh86mGuy9ymo5PYhRk39EPmEqaLNrvs53v7pv6qLof",
  "key39": "2X4E9RbWEskdP8ngSNyKUqCt2Eg6kgb6B7hp6KpxuUJMSFXDbyTjAg9MSy6waQRURvB3XxmQ5PtSgCx81HGLdUPA",
  "key40": "3YNfFwPdiKVfKVT2ezmjwj9BBEy82d3FMi1Sfsuxw3SLdTj4Y5HxDNico4mnGqQ37dwFURW2g81LpmRsGUJBn75H",
  "key41": "3YLqPVTiu8x7Pq99e8SbC43PtWXjQ9dCxLibiCvmT1xFF4dRi8t17tP93ftRpNJ9smc3VfC83BU3bX3LKEGssiNM",
  "key42": "5RyjjjQDkUv6HXpT4FpaxawMUV7ZdGnVkV6akfU7Y9VtSWTgQQj4i6q5HwhC4a1ac194uqgaTXSPaZQHriWgkz95",
  "key43": "3vzer9qYqnh81S2yu8pU5pepR7Zu8ddXiQTno1HXQCQgtWeF5FmodkFQiiPG2iKjP5Rs8tC8VNL1ex2w28ieAfzB",
  "key44": "5Rxe86i1Yvk31k59ZL4FQ6EE9g98RgXUL8fz2X5FWo27jrR7Ar3pT45YF8NAmn4f7CQszEq1SUZwfFKsTWEC1mwo",
  "key45": "37UJXV5qff8YFGHmfmTfZn55gbk3ThBeR5HnW4L32ihhS4SxAP4prf898hy6PyZFYwNm9aJMrWqKxCU2rwQ5PPSR",
  "key46": "5MS45aQ3tyAgvgNCRwq3Ydnsc6sQfuc6JjJNjxwHCrap6hbcHx4WPS3BDeqqiuZECjK6fxiqGF1Q12PxU5x3exNF",
  "key47": "5mjnfm5jJkE91zNMLYQXp18rbdUoDGM6ybuS9JSjy2f5ZT6CEaBc1arhqWMwkW3y3oE41WQuV3PUJKcXiYmUjjFo",
  "key48": "3qVAS1RKeFKQsJKgzrGRCsxo9bajWAXEs438K8L3X1VnqwJrM1ugxtE8xbbWdemctU5eNzY7dnqW3XMSeyEjzsXf",
  "key49": "r38uFCQfV9oyTLDDx3BkoAS1Ko3rVfBgJfCSRLnpekZQcfJU5u455dpSngoqZUx9gfJwx3qrCoL7FQpRSpYGDqE"
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
