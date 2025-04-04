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
    "4uRH5JXjDeD1rnxwVDQNMcfYK5F9i4tcLSyA3t2ugz9XQtUKfxeT9vexawcVqYBJUAF2Ya84oj4jChrye64HdPzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DQjzHoEoqmvxFWkZnf6GcjnNLdctGkN1DydXJ1h2VxkF3vtyLk2iv1EFNJwdBhc9JGSRtAXT2HqfnwDPWEw7zif",
  "key1": "2ASMUCKct8N5Utv5kBgofnnfth6EXsJDY49xHfwxbAdYiuwqAGtVomGzvpmmyWV8PFRnZNGHN1qaErHmX7dLheAy",
  "key2": "4SKQVrgjAq1gH1ZYvUbeeepz6eG3mLhosLKNEc4n6ay9eohQ6BtAt8XheCjT5sTjhnGzP5Be3N8NWgUAzgcQVd8x",
  "key3": "59YhUG3FVaTb6SjRh1K7WU8NV2nbPM8HR2eWiYGqg5zLwjCaamsEHDp7BScqHGsggCXPx4uA1aQiHSjgoQfgiGzq",
  "key4": "53FuD65ZUmU3MqxoBkJmaFZuGGNMa82tSKzYUjzh6bLfJdAmkfAsDLHPX2igwv1q4LPFn39NtSP86fERx1CShfjJ",
  "key5": "5EN5XMX26MC8yvATunYNTA5dmyDaSivaxxYHhrZTBCiXqiJwVprpVVJqC4EP345wqXXws3DxiKVPD5L2MqBS1CD7",
  "key6": "3QRHCWUBMZWrWgFYEu9nQB2qoQgNj4NyvaE2P7eiUgpjmWggkRJe3Yjoja4yQaP2p62vdannwi9ZjZKckJKuendN",
  "key7": "2GJ2JSb6i8vSeZgfDktw2CTRtoUi4eegjYRvxTrvRyftzhjxLmv2jcVff4vT7mKKQQ6M3bVi5ZAxUCqcfbxrzjfP",
  "key8": "52tyRF6A26XGgcgg2Ve5Z12JTsiaXM21qUUfgaM6imGdn4yw276T3wAtHEunChBy9PA7odZisudADtHiWEzoYGaY",
  "key9": "5QxP26rLfMh2wB7poY5K365bPtsLxfwfgeWZwXUbnJNbqnWYGbnxR2EU4e7GuhzzrWGVU3VGM2ttEMdardV1ZfkT",
  "key10": "5Vmj4Bu1azbpv2rKbUsYknQGU1mgH8E5ggZFcosnfkkghpXu33zY5XT3wK8doAuL7oiVPQhvD33UCQJTxUYC3HwY",
  "key11": "58bMGnCtyYkEiDoJAvyr8z3Hym5G4NXh4hGCTMFfJ8gYknBpMw4QrJXuWGn16QU3zdM9j85XQUP65RrfG9t1E52W",
  "key12": "2SG3S68bLytmxww2tPWHVhN9uei7JNWhyXv3juc4PfjxGwHj4xZhMCwddXZTKVfgJkQTPwiVfFTsvLgL9cx8Wtk8",
  "key13": "FkwvBty3iuoMS66q4u5GdBpiCdfKhC1NMVYfHeRaGJpKGtuHUfzBqzuMDFiigjouRZRUrW6Hs7zR2MEQaLjKTGU",
  "key14": "65Z3d756sFgtE7TMnrkJdTY5SsvpgvGJybQrHmF1VoXLp37p1ZmfUXo3mjm4WHJSrqAZBFiDLM53YQyo5YwxWdrW",
  "key15": "4mdm3moB1o1iX29kw4y3HdTLQRxCg3RxkvDno8DeFcRv5xML1iRZFHxNUBS5Xsme1KiF7pbkkaWigwLNvXKAUmkC",
  "key16": "3k7QCtqiKLm9Sy3G4CAby1Mrfmuj48eL6YGwq6ZgAZzvyVemCUqrJzmGPEuFki9iWSHoz1rvEeEaoYXg2a7y7v3R",
  "key17": "4QfZQSEjGUrv3SFU6tSm89ssVWJHkFnbji9Jfxdad7xVRaB4QXpSmx8czFjiZyJaDAS9K1XJzyArgGo3ja86iTx",
  "key18": "5b6jGR6XDjxJ4zWyuPoyLMSWysU5uG2PA4aKKWvKvF9J2q8t9YCaVVimca9rvagz4JRx2NkiinuBmxREyXUfkPtH",
  "key19": "wkLRinRHXbm7F5BMKHeKPbKr7EWQRC8FQpVMKZ9dPrdaDVfrVkoQsARPV4iG8L1qRJVvxjFLRAcrf4wAwnQmUMj",
  "key20": "5xRqxzJURQWrfgg95UMG8g4qDMfVRD2YJenHSc7riW7cCHLfUwXeugeXCmqjQrwSFM9zv9PTKNe7ciHhmda74wWY",
  "key21": "XsM8emU6x9ebwwMJP3gLRgPPUWVanuH8oU5oraSKEiP8djDsdLW6cvPjtmiEhg4a3pWC483oVZJiAYQmFDxWLwC",
  "key22": "4h3mJXhMyQZjc3W8jdsgqXqJED6Z5MnwWRJLL82q2NXzddhsVdR97McxsvEDbwauVU6D95FRh1yJbGSp8jfoxhLs",
  "key23": "421oovU5akGFvKJn6K4gNkNhwqCwrT1ohnbHxzijEnJcyg8CejpQb35zsKMCkBPmiisvU5SpUQTZiQeKsfPAvv5g",
  "key24": "czZWmEzXyRg9wi6HW8sBP1YuobJR2qrvDvNsAMHiEaR9kHexFrdAi9cbLifiENFBYSi4oQyZEkP4raS5uezRoEv",
  "key25": "3LvEqTed2TFTdmSzPRCwBa13W5N1wxuopirs98MMwgV7g2xkrLrgxRH4eu1vzDsXuXHbhuCdcRiCuzdP99L5knBi",
  "key26": "88Nab7cK2NbbBamNwmzrnw3n5SjPgTZ6W8XZ3Ceu9wrkK21ko7KMW9UDpZfyDVBB4xnAbCjjCSRFq4HUNV61fFe",
  "key27": "4aF5dfE6EsQKYkbgJj4UiBXAhfXj4gEkZqay9JBWA2Zb4H4xZHkPCaKwuoKgHc7JfMjCp4dBSXWz6L5bFLZ2E3yK",
  "key28": "3xRgaHMJPPxg9C8dJmH65Bvy3pLVwUt8DGsRYppP3pyLjtpLiJz1k3oTxsBcLAApovsaaaGqZxCyBbhvs5ExUKCJ",
  "key29": "XZZic6JwH3cCkhREend6JN7HQsWzbKY6z7oMqWxTYaKCqgzRvcJH7C28ksf3wa9pFmhpwrMsvRbSp3XknTzM651",
  "key30": "3d3YWCmcbLAukA3MqsH7qQfjvpqF9ApLoPVmyTAxWi2s8Qf25Y6jRhkBM6M75ecN8GVHw6xMSJdBBpQSXWHpnnwU",
  "key31": "Ubzvdt59KRv5pyxhd3XRHWYMeSXU66dYK4cj2SACyn9EnKZCko2CNYqA4jqhkMHwVziyDReXtLYTcgdqSnbiq8a",
  "key32": "5MzuNg4QYyQ8MH91URT3juGP7t39k23fFLgpfqrGpUHjpNqr7voX6PKLrf4yV26qys7FG1ZJW8VVx8gLFfYgmS6y",
  "key33": "5CTaCHJtTSu35d1cE9Tpmq8cDXeVwcuLHM59Yceb4CpwkvNBP9E8eaGcxQV9StAHAjqs1ZyKJZK7SpAj7e8AvD2E",
  "key34": "3W5pJfTpNXnQotkRMPCYBKpMizKpKHXWBjkCCMg9XDuB1MVozpYBES8WmFWXYHVA8Q7apdNRXwZCUmSmBLrVGp3D",
  "key35": "2oZTMV5TpTQxhRwR9rB84qUeCQfcs3KNrfsHmkFX5n47JGXt8CpaGSRkgmZ1tLyH3yhwSHW1jtk4TJMb22cefDit",
  "key36": "5AEeznR7cJR35g9eCJUxhT6gWQ6uQYvUKkRNGt8bU7xHq25njQDqABKUVxTP18wrk5u1iXtVNycP4GWyJmjtdBiT",
  "key37": "4VVX3BGYeVWML1DFdm6fUwkgBftkFsPpr1QXKz9k9TZfqRJHXsJKKuywy9PFZ4mxE4T6RPbvHoT2teoMgJDJs3dm",
  "key38": "3g94ovRbjkcFchaYpgSos2EvYfbezXhLQtRUznEiGpxNNZ3Sv3jqDcGFcrLAgR2KrpYZpFaG5cqq3vEX2xEDcQJW",
  "key39": "2hPwyTQk755AVbNh9cU15VtNq1a6JK2fuvjWQkxy4JQA5W5WLfAJMU1N2uJCjwbuLEUoKs4qMAjDRGnfhLRVkFRQ",
  "key40": "2NsbffoptVhR7z29j4En7dAHrC5Nq9aD4YanpEkvW6S74bDkT3b15RpmCnzNx8rbG5NWFcaEMxUWgTEQeaGdZ5mG",
  "key41": "3dNu5t9uhYh7haVa3gT4tdZMc6cTpV7BpXnJo6DABbYuoPUFfdJXQwuQdPQfiQJn5E51fFGbmVTdAxSM8iSh6NZq",
  "key42": "4TVX4iep77a4jAN5WFmtQSzfwv7xiVkDYvh8ERvCoRLCaUN3LThnfCEmvb3n2fBzH4JKWPPio7PbDjQmkJR5p9HC",
  "key43": "4CXfnos3TLQJCZkJCRMekfg6BXCgEEevXupVZVvqgBKSutyvvAF5M1cjwxfZUMceeayHePuTAjGYFHVqaeM3yVEL",
  "key44": "Sjk1j99MjikNanCeUJq3dCfGG51h9TeDPLzE4w64qSwctz6wdcvSukAouR3t6ydvdP2JCxEvFAaD6Dv8vzJFku8",
  "key45": "HHbnYSDvaBAobRFqVo6xaoQZn5XqHbzR8LN3Lh4gG4KV7LazVynqzkL8MLYgi8jd1SxHFDjHWv1imbnFU4Cxrq2",
  "key46": "2nFBaWovX7YYtdU2SzkWg9LV8yuFvFAE4Lr1FNrJbeqWeJeMrTAKhr8kW8JiXNN7JXvz2VgsronVa5djT3KXjvWY"
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
