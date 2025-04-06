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
    "66mL3c5eR39qGDEuSpTDQFyB7PcFyd5hLywdZpEKggs6HrFDPdQRh9yNiU2RxzCou6HZ2zHuUdN893WgVNB5gdbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gQxwqafcfqNeEQsiXnVXYwUCtidxQbsZ28ZFWWnqGA8FrzMLwTK4SouzG2TdT25M4ftsPwNiqrpBfZfHFfNULMj",
  "key1": "3g5u5Pc2ssko74f1Y2FpPhKjQnGoJZi778tcBDiYLMMPzBZKrSTuLsJtdWwaGopipx6YiZhnsoHtwYn6sDvnLn73",
  "key2": "2Qk1kvANJDSYAvbti1R1LJTCN2FFCog3GqqMcoJsFEmBk6xNLZayCSLZrrkfSnHyjnvuG7Jnc2Ps48ogA2YV5eG5",
  "key3": "3fSCbmF1T1LgqxHbAB4w633z9YKv5NR1MgmxgdfAvtFj7SodqCpfKNdxzKEKKS6UEhuphYCeTHzkad4WhRPvox2m",
  "key4": "3bu2bVeZxxTpJbdZFHGZruV8CKY2G9CxoWmMRAi844WTXDEiiUADvu1dGkNdA296yuvrvkByysfxvrKV5sRFmKto",
  "key5": "3muDCzhVTedtxmEUj8yUhwvSMzUD5hcgzSXanHrt2wqKy7uMktstabeV7gBt857vfuVHDFvQ2aC6PESPwYgooANq",
  "key6": "dhaaDLcB8MvQV5o17uUrkeMN5aNTM7D8Uij4qm7wGTgSCUvb2ozPnj3hMxDS9icufXcCM7Ysrq8NmTePwHeogZk",
  "key7": "4ChBg8UnPfgVMHJGikgqGBY9pRHbUQmKrEtJkJamHUY2VnK2mXBNNGCnuvmh7fYSmpYYU6fKHggjhjnj3j1JRzQ3",
  "key8": "2LSzhS13217ChxchrsT8TzYuQbZu3agArioquqh1VPG1eQ4rxNQCr7F5tNAiSVkBneKUhpC7vHACUjRa2vwwwhQj",
  "key9": "BgSDstNjVmKXKRvwzaBJNZvWnJk9jo1W8zvMUFQ7cfk9qzgg8cYU6LCexfcDrv4r1BfdTJBfAXtQLsRtujxS2jS",
  "key10": "3XSTw2F1HK7xEYxyzbRb7wC3H7pTqEWRPhYFo3mZcJkBb4CtytEbnQCa32HP7Nuw2hwpGCpqnvFvD5EJaauPydTs",
  "key11": "33E9q2XdF58mfeVK5dn9QG4bnLEP3LuCbsxsyQYyXfHz5tqM2qB4dGBBGqbSxZejpsYQjBY6YpXjzNJTzBkbXQC5",
  "key12": "4nHpBQyi2q91LktBFJkTibDk23x5YuT6aY5coqWQMr8sHoxFKWUznKFWRMkMLmQiLUmFiqhJjjyFQ1MFwNoEbwC5",
  "key13": "2WRXrFFvPciHUZjhvi54siTFych2sxthMjco8pdH8YcDwuBes5xHSeLhhQWYdcD3kr4q5Snzj5JV4pcio3WaaHX9",
  "key14": "5GDfeBhSXJwsFSpdnv5sRnUdm1e1coZgfArCRToDf7shunkJD5tMgXzKFzMCrJHndz6kJ1F3KcMH2QjQ81GfFB2A",
  "key15": "4vQWy4yfB8JUFTFiFcDa2LJTMNm4fu3CRdk9MhZJgjZj5HYpfS1Y1sUGDLJ9vFGDP8mTCryxtwx4pvKCKSHB2SBe",
  "key16": "3U1xtRVh2UaK5VnbPAXHULWZtACvKN7bEuWNxYSjyd2NUnRMdmhsteovcatLP5oET3bw3pHgoF2fvoEcuPGvVAoV",
  "key17": "24CdznidYLx8VyLogxfDqYroRVFcda1UCHwtDxUs9PoryTvE6aJx9yAvozjcbik2eP2JreGuhFz3qKgrbpMdwUc8",
  "key18": "xYdMUaMECe9yGf9ud7iPJzzwCCFkH3SnTraK66pfK4qR4cqffcCtRohVztxmXdMVAoevBdBNFzAdZrUFBopNPPe",
  "key19": "XS9H3ayxGJS1WdFFpKg7dothnzzYoX7RswewAjnEccYmAzH2rw4yu815w2jbc5Nf6xdL1yhfR1DSjJmwCDBCKB1",
  "key20": "2JXXGyedJHNJbCxxnLnPBPhoCzAjoLhAb6WXg6oy3d8E4cmn7jhJ6os671ZZRjknxPGek7tBsMczJXLV4AKMsbVC",
  "key21": "5xLnrih3efVwCmjnVByA75R6U64WCVZ5ZtgBDR91CtSnMpVhP4LHKf3PZqtmpgRQgoSv93cf3UC6HtwFUEbX8Fq8",
  "key22": "hgHNJQ6ddVP5mjx5fBZkVeh1ebfPwuWM9WVZmMtGUEiNuEFinuzetFvjfHr3tvpoYWefVxGtuEoc47MF4VkyfWg",
  "key23": "iQP256w5PzPTaiXjm7n2d4j7HUwAPFEUTME8pdzo4G29tkuC15YXEDUGGoHFUk3yNYZSGfF5EpHpTBJTrBdQFeD",
  "key24": "5VkqPsYxAV82UAN3W3ZoSUa86d1no9DS9bJyGHqcdm1Gg4AqSnyCwte2K3duYW7gWTZbcCaXw17qcXxN9UKi2d27",
  "key25": "4yPmVnD85KJHGcSDFXLK8nheDvJrh9E7SvU6tbaEXJgjGta9mqpW16mYDvcEsaDVM9kHR9NjssTF8FKk5AefFMPp",
  "key26": "4B9cFnbaiax6bV99n9Ku2xbCJESVnhVQA3Q1rwBhyfdJAiT8q16o41VajcP4tvtMvJ2rpEoEMxPLVLtwNAh8NtJK",
  "key27": "2W7kFcnjCY3hrJ1Dvqde6iy32Hp191KtgYy5xUg3Mk3rat1zQPAdyDdpnUP7277XWvCHy6JMDThb6Ut2LtEVnGqa",
  "key28": "3dzHrqWqUsJndJ4KHcecHcRUEqnpswRQa2PDEvRTDXvxnQFXUK3DwWWaoc1p6DYbxTqhUG8RJdoyEaJ8QaEh2TcF",
  "key29": "SgFjCTwgX1m2gdNUW8h32uRCdJWU9J6BEsFbbiN9iFGEULu2R7dJj47wtBJmgHe6D24NGyGJhJZiv3fa699A5HL",
  "key30": "4E7XMjq6yZxSxt6UAbP4r14FaYK7A4kaoJmFWBJZB4WbYfR2W3etmXfcgfoMD9BAJwq5g28nhj7g2gr2qQBRV2FT",
  "key31": "3qMurRLbEFSDw9daCrsRmbHnWCgWLjuosNokZqupa2i8j3qThSp628J1t5fP1u3vsjxLhA7CRU6niyFqW3KgjSsa",
  "key32": "5RJnSA6NsDZvVjUgEFtyDRRYvUQkWxdbZC9YvFur93gmmtCKze6qPC4kpzREf5L5eeNeeuMg2wB2px5Emdxo7jJp",
  "key33": "3sK7EHewDuiPrpbd2EUZea65eATezqx79JHq7kxxYDqmvErFkQjUQd9xk2Wjj9Cu7dqiP7vS8pTK9TERP2sZs11t",
  "key34": "pEdj1J84meigDspsmQiJySWDLUjsS98codzvDnzCSVCKgAR5WrPR1vZ1bTJ1DYSBTidwC8HciXnfm42JKm3DrFV",
  "key35": "24JTHbChptrBwLaNqJJtsH4jvCA5J3u24kyxEufw1yNUoFDpMfNcs4TffBpAr9V2o3kD3AzrFb9gnhw2EMrXKx1x",
  "key36": "236GHv3uvYgXugraQYmuoze3zcfgr3ts9LPcEqLWxa8anboskZQKRio3NarxEUqBfYrVx88VKfgjqyKVtvXCwRgR",
  "key37": "5ubqnSjKjhjsN1cWBAEnaGbAkuiaS3UHtw9b3TrFypCuF8qJQFMrMpnHsdRWtWHthKSgpA7JNS1bEbYpYP18NfrS",
  "key38": "AYFairoxvTT5Cj1wc4rET1LBgEDr7qiZV7JR2awSuc9XdXpZSXWhGsT87VjgiBrPBJWHgqGUCJw6HbuyXonA7PG",
  "key39": "46Vm8P1DPwUEX7zLWBpc8Vkvamho1tCHwcknoCs1noLE8TW4VU4kLLgf2pipjqVL8dd3psoEXdnEKdguXNmdezAt",
  "key40": "2SVFZTMJHxGh1jLwpPVi1ijTJwMHrv8YM584ZmhdHhBuzPg8jbGJzj7UStB728uRo9MFUNh8wdSA1WJjb5ELhyY9",
  "key41": "5NdZsRrWNSKb9fuUVVH1BtenR1Y5jPSkNi6PJ1KTaiLzaxbsaQsnmEMMrpNKXELrK6xpJ9CYsT11v1VVZttYxyzh",
  "key42": "4DtWkL5xiUeATsivGTdH9Mbabb8dFcNh3BK9Wic5qp663vi6EdTA5Cf7akbUkFHMwiB4FnNmxFYbFJB2VfT2THAH",
  "key43": "4XHLEQQdvN37auLfJVoqNudUvwd6SghWthCEs5yt2dBDaXwqaSWWW7m8J23FwbS5wYTLyGaTyobVJZkMHUZHB87w",
  "key44": "28fSwKkxcWKjZiAz8pV4Fb6A2tUjLd64BsLs81pa57U6YJFLi58vDbe1ykEHoigM8CuNoRNxifg5fRNn3uroDuq9",
  "key45": "5MMH69CQAVeVBV3q5vaevpde8CuhVFBBRwKrKKGMiVfoAE8rYUNhot6VdHAfL9andWg5A4NP5tLKLsLYMCiBx3hz",
  "key46": "mJntrjj2smLfiqFygBaF2J2s9Pche9uqAgKuxDg1HqfUDhyUVNhUPnvpJN7J1W9oVoeCc2enwPgkFWMMebPpPhh"
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
