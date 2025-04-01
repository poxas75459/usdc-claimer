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
    "2X4A8dT2kAzNrMavWtAgd2HMjKsfrJhZX6r3eMwjZMPHAqPVfLFnWSTRHVN8NmGf9iKK5tpqBcGd4x8KhKgozdiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qC891MLdRHXv3Tk4LmVgXJKbK6ftDYcgmA7apEoMdsVK4srjPLucb8nJt1msfhBGaXVrZFG56Qz2Dmu9bVgfv9s",
  "key1": "2KdNvWgsjctvedL793fRYW4UtnrMwcq5rCE8uWh6udZXZvu4MwWf8WRc3qztupuDDwH5aKqzehVthqgkeSshUmkJ",
  "key2": "5RvbcNYwmQqdPaDnY4ThG6twPCTAqJW4UZhrD8o9e3fZPASP4TeVRUBVhQxWV8gGuGYewNhAYDauZgbctaF25fJQ",
  "key3": "46ZYkE4VdTwgCyjHNB5i9GbdZanrrLXaigLP9QcrDwqRLwBqUnrvFtkdEg4qhqXc4U5Gt1xCSmnLYMBeQpPgBK4a",
  "key4": "C7hurmjpgXWcjLy4RP1PaEPrYwA6QgeqWnCvjPX4g71f4fMhiL9N7gZdgz9wFQy6R8D8aPtfMDHX6HtmhwX2ZAM",
  "key5": "4Ae5YyuHDZfL6SBp29qWszQR2WRauQ9wMSFZmriAHdFzxnQ35ZUAHVXsNEobCrhDz5SamcPkbe5gzhhEkwDqFv92",
  "key6": "4fq8Wx1ZZMtKTDU3UVyHDWqHAKUmBPx7uuXonpFMmJ8PjY25D5Has7ceasKGYiPbHLWGFw4NztBp5hDpFuvPzkSR",
  "key7": "LqKvvUKutDw72GpoXWcf86J9sJb6AabUv76NYBALErpAytDFmVyKPUvGyBga2Hjo9zBMcP9zUGsJJ6WNU7hhPkM",
  "key8": "5Bv5vKkP7XkL3AVq4JRirvhYEE54Y1EnXzKAh23HwFXkjCXFP2HHUCEXbn9XF5RiTnNwDB33Y5uFBbuD2yTJd2C1",
  "key9": "5JcJxcLLx8LEXAmac8sjMuonJ5nTSWPMfNKSJ8XeQkweiRxuirarzVzgGSj2CkZnmCK9HgeiUFwGBdkqESBZxsbP",
  "key10": "2UwTgryHZDrrRkATcExeAwA4gqmqrzaSRnRtuVP3VcVTCU25hCcf3sen7LkVpwnuF9KQPHJqpFbFicJ6LoVeDjFm",
  "key11": "5WF5sVBgb3TXv9f6Gjn8gE5WP5o7cyf8rmWPpsdvQn6sFZx4QFgho4g6tSEAzfqatFACMt5HuriXMr15hn8AA4qv",
  "key12": "3F7McSJguQoJDZPkrQ4aLtjRLV3kPSdbxqaojrnqDhFGigk1LCLLGjcaJMwt371mgjZqkWVXFxHBiwZvsmMFvXXa",
  "key13": "4EvPKg4NECJSnssRaHcohPv7R4jfTAHZF1fWhdYAULyEowqVm9En9nowKJUEmmNeFEq23URVGCF96WG74x6FZfhb",
  "key14": "2Jeb9YY23UDBQ2aDuGXv3tSeFmoEznu9ALzZiJNDqUaXTScgCLU1TajaKJdaCj3fZVmuj1v1kMmhmwZLDupdp3EC",
  "key15": "3Tn99ZqzNG4MBrzFodRmQz7ZJA5c938jKtumKAJYiaDyWijzouP9B57i2LhF6dvTogDidgdD5PeKs3xkGzm81AVV",
  "key16": "2R1jDC8qKADqJaXKJUNcRPUqWtK78MqecXrRsvb6fUEoCfMJgczBcMpPZg1V5zSchtfaEsBaCztGP7TDAopzKnaM",
  "key17": "5VRx6hkN3bPVpfrEyZZtTcyu3VTtDU95EdAsujF4KfJHsEdFLxDoeG9seiC3MQE458axu53tA5mEUUvxVuSYnXgu",
  "key18": "5t3o9qLR8DDYWWWBpCZv2LfbknLRhRKqvLwWoN1MZfYYjAmDQa9oFzqZz1t6tMJCvK9pYbKCj6wLg8Dm1SRzDWNr",
  "key19": "HswvgFnXasSPiK3XrgyZrLjR4cjZQ5QKmkeR7i8MtcpjnDrJB57oAiBjMeEhAeTULSeGF9q869jhryFCcBBJYes",
  "key20": "5ntNfyPTrnqQ9KJ2fw1aDBij8KvT9PFSu7yuo3jURPYpnViB489m1wi4ndek5kCJxm4QSsugGdhTXGiGm3gsKXSL",
  "key21": "3opTb8nSDmeRNV2tBG59SnfsdqGMveE6Vu7UpgeLrz3ECTzuB5Z4maTeJWt8pKHp6XATPdKRmm2W3FxBxHLgKazX",
  "key22": "onJB5F7GjP9Us8jchf5vFyB54gNnN5dp17BGbGcRwMkQMgYvknRoscXw8Go5bS9JQ9k4mVxnpkdYsS459DmKodq",
  "key23": "5UitU3BtFfZEZye7XENK32vPaZvQeZsCNCQX48K1R7YjdgnmUYDh6ijEaynmVwT9MgVqUDBQ8C9P4SU7vx9PCTwa",
  "key24": "5pX2pXt58LsK9zLAyQAQUXHjEGr2sAEHu153n76oWvQj8MkxZuXH3UyEpWVkLAknMrKvzpzi8TCZ7Vkx9KSPD6ey",
  "key25": "3VPnAv8KDftYiVJJw98d34oUgVA98RXuDGidxzCxBeVQSUCtaoevfzkQ8XnXrfPPDKNgEMtpctQHHkUr32TLRRMP",
  "key26": "3RhQbq1U8RV23R5D9iriPwr7AhZdQ1zc3MRgXsT4H146RjanvveM8Jau3h3MJdiiWECDWvzUEJJBpvXfVXv7guc4",
  "key27": "494jWpAGgL5AXXuDfVZ9gjpfCroBzadWn8CigXgrfsR78TWTYV1aMkuHqG2TGu4uXiqya5vvLqaARRoYLb4Wwwwd",
  "key28": "33TK49dMx33ftVGuN2HpTxqXibWD172ueWHoK421FBEPEHjnLabvgRcTXV5YF37zKvwo3VoumRqFYktwTBMAuZMe",
  "key29": "5boiV6cfRf38NqfJFoaugJQF5NgrkzRMQKnFLkGuLBYMs6rPRfbncbnVmMfuTjBAvDMAquz2rCaS8WxM8tFBTcxK",
  "key30": "3ZQarnVNr7cDp1cHW9UDhdzzmTRcTUav34pYZruN1ZQ5T6JSPQ4FbNAfvBjL2peRq1gDdWwjnh34VrpvUUmHdKx6",
  "key31": "5QPL9pS2Xhg2jWCNQHMxssiH1LbHRvHQzZDVgpyBGN2mJiVEEhVXR8mNyAGvhbwNdgxfuDe5m8naKdb2hVkoLB7b",
  "key32": "4svxFxCqb6zekFfa3fF5pjcALVy81fE2aT3MKUh4j7FGCdibtNJRAusXd8UBq9Q2jh7g6xhnKpQ8tqmNhZWqrfs7",
  "key33": "zFLTCPUjhRKgJPR6esFhtPLbggCMGNmVRym45LHxd2L1JE3iMEstJ5UDVRecWDPbgAcUSei5kJPxiWGnmK4jN71",
  "key34": "X85XSBG8vKRq7eAJTtzSznUK2jQUx3kX1Jx39w5vQLFam5huiRJtMiok3QujfHkAjsRhPS49NQY2vvHY5axvSTM",
  "key35": "4gaUb37wJYAvxCkcrVg6D8oBftZECJpXdCtDjJE3rwi3X5NtHe4kKanPiDbSH52qZR62t2ZFWbkxeZvomUVwGMK6",
  "key36": "2mV1GRdZuteWE1KuL9ncRx6yGYoZrvhQeyGm2P8s2icWxYswiZNS8CnStBah2YxcrCuwjVAu4pNgLJAwk5oJ67DY",
  "key37": "4F428Mp9hfARGEH9923XPrkUX9RSBxfCAoLZyKPJPHSZE6khn5gUEArSnqSbFB6eFssaxG8Jj7KXCzhKJPb7iSSw",
  "key38": "5vEQgZuvtK9SBnbMThy6GwZkyWMaFzu5o9fQmDLUzCwQKVMuwNGqhoqakh4UAh6JUS4PjVgfFGWsgHi4DvkWYT6A",
  "key39": "4RDBVTEJbgKH9ydo42QkSYg9i1h3PprM2ZLdx3ZXd369H8Kre5GiuQ28FsSNhSEVBzu9DDiCvHdQ1MmFQSd2p3A2",
  "key40": "2PRVJZ3yo8vUEHF2SpPUQzA1CGeN793CP21Koxd52CwWxzdCcMFyWHoETAb6ZhdcQXfeQpHQiLsv6C6opWFv8i9S",
  "key41": "5aFmSbzPaC9QexdpG1dnSbJdS2yuU77D6imZgthgL1GX72m8zcUwYthAMm3UJqYViRg7FWhMDhC7F2UyEvbXxpqz",
  "key42": "3tJBUTncPowcq11CwCYnNMqkGZBYE9aBPkaBNifSCagpyyJzpx1GtFhbvyLrUmJuwgLX1hi4A2t1PeKA9vpHWcET",
  "key43": "3neAvN1Z9P7Cg1k2xMVC1JsdVH6EA4KRzX8dL2xekusTYfzy1DwHqQiznLBNJBoGJcBUFEYWq66a9RDMW1Cabr6S",
  "key44": "2VFQuuuoWfaa6WJfCtBC2hAegoL68bhqJqxgdQqbgKb1cuX43xKJWEa1JeT7MCWFvgdHPyZVVpBzGh4t5oUy8Yjw",
  "key45": "4fPbLBChCku7jU2CXuXcgooCQpw8NA15YhcVinAh65CnBiCKR5op64j4yCFMY3kx3JaQvDE9rXH6P6fhYHnSZhYR",
  "key46": "61BKa99FSu1pjyunvGjdtdfSup8xVNtXY2t7zy8EeXHgVwhUq8t2fRAjpTcPa7dovq77Ya5TeN3ecxvxF2YfnXGU"
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
