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
    "hF98eFQy66pjLseoZfoRn51y1e61UjKhHmXFiwy6AaXuSiMEzM3KJtxptFxAtFYPJe9BuJTn9M1GYeGWous42L6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8rcSrvvqnNjVZY49P8deBRWonyQ6CdTWpbP7DoubfdVMkogx44BVTC84mHuzQfz8ee6v5zZDxEuDyx9toHE2id",
  "key1": "61GXnf4AqyVwqZmck6VnEKEK693mizSJr8kxnRQynrXXy2Gz2qL8ZX4LQNvfrRcpyxmRhDNNffpsYGPfeqBWPgTN",
  "key2": "2zkD7J3DHA62y4ZrQ7KWPGPVxqWnwD1GcEjncyKzGDqA8kKbh4QZVxjZuynUNVkpUPudVraFPUkdyTud7bD83cRg",
  "key3": "foe7Dfrz32SeBsMJi9oosRwWr8kqPdQxZwAxT85WLryXGq6AWqg5Nh6HuXMbJeYNWNw5JnHq55LbM9Hn2NkbBV1",
  "key4": "TmE6hsosESwLN7ta49uMrxCcejvKu12vvZBU7QcF3MroVt1bYtdUyvyxsX1DWH8eV8UjMDJ4fV8qcz3xWPLmNX2",
  "key5": "42QtWkpxdJxirKYBis6RV5sF2MQgNjHGQ83LVjkDih1xPRfkEcfruvKFTm78BvxqZvCUFnz7dcvrn9Ka9LXmciqB",
  "key6": "3iJdzFxr7rqDN5ASCpyxdFremJ7MfGokHnbb3oTPvyPdsh5uCLstEUhdXcFrQHP8jyKKprD9ohmL8NPyMTLeTEZx",
  "key7": "V56zyTgQ9Y7JVUZv9o8d4Ymy5WWwLmsRhpAdZ8DVMo2EheAvuanv1TXgs3amf28xk8cANdtjNLNoj31Xp2tSVuh",
  "key8": "QgpnNUSjnBfRvAsLFcYmWBKj64xeVUgDjVoMTUDQdukcbmVxaSDMHRZGBp8PruU6DTD8rSvu57yNpZqL7JGfuBB",
  "key9": "T5DCBT2895EGCo5r6yzSAnVxZocA7EFzhpf74pfPrrE3i7G6yL7Qf7MsjK5mxTfrSAgkhDu9wwNsUJFTP5yXzWf",
  "key10": "3gVMuFpaV7SfeHqiZBHEUjQvgP2GP1y9ztgHQ5SBNt7s8rgkAzuroLhULPrkyxZB4jzCgauUhmhef68EjWeMDHcS",
  "key11": "3jFtKqf7bsPDd99oXAwswMkQUCy4KPcQAwNFoUi7XYA8LULx4ZfMQEkHSJ58txFsBtMhpqJC6RYUAPonmf8JDK8M",
  "key12": "3a9UKxrByS3HQz4338go3G7uU6uPwDeK5b38ii7pb3pWgMvtXfX3kVrWiTo3rvpwnBwHQCUt5ADgzzPu93qWwm74",
  "key13": "2NetfytQpgbQwMdbawXNLdeQGGEDPdjaUgxPJAhUK7T5ftCyvrV59rd2Nzd3bN1riRYgQpN8enqC2RuoZcto6kPG",
  "key14": "3ozBsGVGqB64yS86AwkKUpwSjvvnHzJmU4xpQu6sW8AYv4vfyJ1hVyhArTGm9Yttp6dZhyzLnuMkKJhibsrSaJYf",
  "key15": "2yqbnDG4ZU37jKLJNqnJWQWWhtK5qnRJDSnmCygcVa4wZVJz8mp1iybk9gYajMYARLzivjkJBYWzk2LckQSsZk35",
  "key16": "5PxT7J2dPsabHKC9YjYzrhak1QiqTD1KvJE5oCBDxHtcbrTCg6GZRTt5moQ2GcDwu29bFPzMxP7spSa1FiWbDfAL",
  "key17": "4d2Wuio9yd2UUJgJFShZfY2eDaV9g4XA5dUSRyRZV8LAXmTpZM2KdJ4WSZcL6pmEQd54L1Cqj1B1fwZwrcUy4oBx",
  "key18": "3hLeAmi8yK9nz6TAMbD3ibqBiZn3J7efZUr5tsPD2g16oSAkG4xKY9gGngf5FXwj7GzwMb5vYodm5yynEDRrDgM",
  "key19": "4UDEFzhnHYXzegBpjeqsi8RxfoGJWxpPRkAXqQ8Wb9hTw8F3NS3vpTGcEjNpf3No1DKdC7NugfBjshWK9waJYpUG",
  "key20": "64y25ecDBi5NrukXRnLEuQDAYJxBpSFEP62uKH2Yinh58DfLijVgkoRoJ2iySWirqMgRfKX73nLiRYwZenWkDmsi",
  "key21": "5dJhhak83pRMq58bvbgEyraN6cbdrKMmZ45p2Un7bRfyfyThXFLFgMjVa9p9uZJP4tDQf44SmvMaYSXqBUKU4xbG",
  "key22": "2dzkpPDTxYAVi7piDZ8yuFomoDUu8h1Xv61xHF5h2n415uq8PU4vN7zY3UUYT5TL6AhuGRRfSXS9isgTZLNx9Pud",
  "key23": "5ZD6ZV8X5Y55HH5s4PQhiyxH4rN1qQS8G2p85s7YaEBT46UhykZaV6GaNHuPMtxw481kpgREMw4z5bhMZzu3kJs3",
  "key24": "53E6xjUMBYL4rxK5ssbu6RSnd7tLtGcve9m97EKghxmPZDtpufxLDmvccwRBB9NJDiRub59n6Ge2cfyVA3yx8gHo",
  "key25": "5WRiiU1qeuAzjk3FMgfsTN76q4bWNEGLhpVrcSPzn9ZvRJcyWacGkfGVniQoox24ZXfTvWr3agTvaqZTj1PBDt4A",
  "key26": "mTw1xbxHhA876J4WRpkrYJyHdn9scjZsNfhpQa59BjiPp7jxwwzNeZkhDS1ar3DVybe5h4anaWNnnt44DF9BsWv",
  "key27": "2wGaDZYTzicfkKHaBwvat8HtqR4Ack9Tqt3zM18zXbqRTMWe7MAvwrRchYvEZVCbkK8RpLAaoVFjcZdPy1dPcdxK",
  "key28": "WqhGgmKis6yJhJgBUF4bmtzkJE64u964evXt4vmF47fUXPz7d2NhHkWnPFuuPiP9rVPifNgGgrDQKX3ti86pZHV",
  "key29": "63F7bbtRFUgjiqVzi8huLVsLqb9Pn4X5ZX1obyAuUkJutPDsW2vZgXuQkvmpKgMJor9Mkcfc4BbgiS4QDMhfRSjj",
  "key30": "fkQBDvbUK44Pmp7QHRQvYQiVUU4moHvQLy4EMUGJM2s7a7jxXcH7hgHysGPXh4uiTw7XPVXURpTWejMSJePupXS",
  "key31": "5uEE5uu8nYSJe2EK5eBh8ZNSoMK3pLSstCJBzhQHb8FHyUAA4hPp7diseGC8FNwsvGieD87oSoVSSTANMADY1gGC",
  "key32": "72m82NbwcT8ijdHxrp1mGt54KCvSYE1nH2Xx5y4pz46mXG23iJYqapvC9QuP25XkeuRdGU2ET2MHCVacRvw2tb9",
  "key33": "55jCe2yh4fzfmz4rBij9WeiQxsuR72RnLT4STBtePuKP3jCeqLjce1HrSqqWsYzeABsuowiDSQKvSmJ6r1ZQSBeB",
  "key34": "3CDyHAMA93iMsgq3TW4xrCK9E2upGCfitKnUL8vvwcgJZpVdFp4VPtCBtzZYShi5p3nt4Zwoqu5yasioBXqoWEFT",
  "key35": "555u813JrE7fL7vqMrDEowS79nRDwtmjpqxMVrRQFzXxPTJh2SRkp8NpPtZbS1PAyayoZJRVrDgbSdBtJP7JTech"
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
