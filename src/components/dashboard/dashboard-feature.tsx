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
    "5meTX2bPSqytxg7PKpwC8L2Bnt8j8PYmrfN6KVBuSesYA3xmgxjaCEc5Ru3obuVuvGAeMD4EuA1NHycmeYbziqTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WT2BHru44DySXZgjGXcNwKzNvJ2DWmViKUHXSJvZg8METJcN9T4huqnbmf3CiPqLpwRfNgooLXX8Wff4UZfGLfT",
  "key1": "5dzzypAKRNjGCX3RjFg4sMfZtSUK73awyGRZzmPfFC5N5Bafkz34HLXKHi8FXiPoS81Bde69fKV22Y18ypA7zVVY",
  "key2": "bjfKuJWkAHcJZXqN8QW4EzuptD4tHdczmA9HtGpdoDbiXMBvYFZLU83J9rkjnVVYKEJZ5UHZch4bF4qYqCStz3p",
  "key3": "3v8EmJvnqWHehALicBr7rMgkkZ3QauKmh5219Fifz4RxtyhKdayRX7FXBy4N6WAtaJvW7cxPxyCt89FCiJ4ewTA4",
  "key4": "5k7xnKwH3X6BvKhQauVrbtV8uitTweY967Ukk2JxwjKNeu9YtWtkrEUkwBeAxta9UjvqpmnUDDFRWxA4FojFCoDb",
  "key5": "4FMeY44sCJ237CM7yRPQ1XTWfWwU4hCPP96Kjxr2ukLVB8XbfsCazmnK9Gz2w4asZkV6eo2TKPztfzh5F2aTAZN",
  "key6": "2hyi5YvKpDivURvUotNmTMdL4wePLDvPX7A21FDuzjJC7SyjDpftrQtxuGGzktdwJXXZMC19r4LfUFKME8mw5Ydp",
  "key7": "5VgNi5KmjeVnXepXJFqx6sjL53S4ZJUDRy9CpRfSfpbCiL3kaxVxHTGtuwnADktUXupS63JWn7aXkE4rMYoZ8tkN",
  "key8": "4HC8PwACGSJXfYkGsGxHxNiG2seUWBz8yZ7M75foAx63N5TMmzg2dUTz2NYRkxg5dmez3FPgP6KtAz8XVHFBvudk",
  "key9": "2UPiBEFGdRwjVu4V2VDRWPHEp7yQiMjNfsSBH7GQxEw5DkB5nBB4YBqs7ySx62Vyww3Dvu9SxaWpjozmPv5X9kf2",
  "key10": "3MivRdWsqnbbDgNEHMn45DrEtrKm3U6zeDwHzzY1kzzNUeA3ej8H7XswzAtHNvJ5FpgiAJuBmN5nRaFaQn2gPHKD",
  "key11": "2kFLBXoASUBMuPoqemyDAKxb3ak41BjfA4DXw3n8QBfzREX6n1y33YbpWRkCLLKMwHB25QKrVopQSirYv6WYkQDT",
  "key12": "kWAXrdKV6rtVqhNuZuQisgHGHzoqogKwp14VZBc9EGFCJA5R9f4BANm4PiFQeMoFgmv9wosr1brgRFFbZ13RFSD",
  "key13": "2BkosvQ6V4Zs5z8u5V9q4LU22rRAGPBBeBYtBvmnTxCSpcfrJCovXBcmVwiBCoH1NDPCAWEK8T3npcE2sJZezScb",
  "key14": "28xZj4daqa2Ru54Yj81SCKM1BLupzUDw8WWkp6FKJfgRPeDxo26VDYizcKXzCUPr3UvXhCrxJqptceq1MXMAaG6Q",
  "key15": "2LXYf2vVsWY2p3mZoKtwMrZPxySyjCZBCTxk1xacgVgd7zMkLtGD1935U8eCGBmHzVHMff3XRWG1y54Mscan6rHb",
  "key16": "QaFzKiFu5VC5xMcdzF3M8NCw4ufM5GdoKkRsvNLzokT8PpXrAqGhCXgiWGaNkBzBHijYjnSsBKCCnL5aAVbrgof",
  "key17": "3gdid9wYCe58CXMmrW76Tqqwdf3BYHaSAoFwcevXVWcU7ACiPQszLmPfBB9muH9eqg16SnntkrtxHDYLAtTfAusn",
  "key18": "Y47ioaYY4D69sDytjpgWj3sRG8sKTV8VLJB1DQwNHViXGaVVW9tdxRnLvP5tiyVDZw9mmbkJgittRLbgeLcSS96",
  "key19": "4YxQapfr32xupmpaMi4mGKEhB4xHF7AhFJxDEXKfUSGjRmUgQeP9vfqftLstQfc8onGEua8By18SzKRkMxWcKet8",
  "key20": "tubPxL1UxG3Ys5pKvJfWqUNAcD2eFF4fBMUvjTvwuJwCT2L2RhHS6zyFPn8xrkBoDwarfn2K88FxtU6xTt1WdRJ",
  "key21": "65C8hCVaAbQmspNKdXh7hoLtVhxYWxEZtBofsnU8PphnHiERJgFKMvse2Hj71ujLHgh71g2W12hoqJwRD8c89Wme",
  "key22": "4aXeq3M3tYjxm67EzpBatkbXrbum1Lk82sYt9rCTPWCXdvnwGXxCZSUUpfD3hit2qP5UmEzckiDwZ1L7T2NMeKNd",
  "key23": "35DqFLayrgJkybq52khsLu3KNvzTZJhwuJ6VzrBE1t9HNyyzxqNn26d3c8Sog3SiFarbNjA9yCKxUgMzDuE8LBds",
  "key24": "icEnyiLLNY7fK4FzaWcopem2RwbJubmeNtrcEoJb5wjgrKgCoDN61dXxc9qRCper5PrXZWfeM9QA57mTEhD5rpL",
  "key25": "3Dy6iFr3cmqJGuHeecfJwNDhT9BVCtpP6fPbE1Q9Z3eknRMGQm2P2UzHJyegLjZEnHr311fiyndV8iFEUaGpjFad",
  "key26": "4mGYi13JhjHJ5Rth6S32b8i1AnLPa9qik3jgqhm9mxoGwisjM1FfpFddrPudZVxPq8zJHsykUduUZ9CesaeZp3rh",
  "key27": "5wYySRhvaS9ZJwMDDpzRutTuzpS4Pvhp7fTfdrhht4BvitPwaqRuHSAUbAXTkfNm2RsMw4oLpgbQ42fYbicQMxSq",
  "key28": "cYD8iruhAbpkpVnH1iTid7xzhGj83YNPJ4iqJy3GY3FuK1t8Jhyjvik2ifr7MbDy9oAuecSXMN4UEfL2ANEkeAA",
  "key29": "5Bhhr4e3winFm5vVRNNV6JSnkiMKARVhv8FrGeLqWGhgE7U9xVq31F7JAfX74AKmqrLj8V5wFDXiYTFTsZK1mXeK",
  "key30": "5s6kp1Qic5zUTMam1aEkwabmJRD57KTNwPyyeZ3mQfxSkfNWM83s4dvSpyJNiVPqR9D8fdjf483jftE2XWWHtmmy",
  "key31": "2prdNnbPngWpm1CJHrK5XNCaUSwVaGRbvDq5BwVm5yYbcrhC1K5oKoh1v2o3Agc6vpbE3PVfgaLVkoxbR2dYnqZD",
  "key32": "2cN2F4Cidbqg5XvkF1VKWSHVZkMB31F1tS1ydezQdSGNXV66pTwVLG336KsxyYcYKKcfkXSLWML8hS4WQUSD8CHk",
  "key33": "3zDUWzSaGVLLLpWPTtc7FTmAfKJb5DWeW1H61XY4xhw63UB4Mk5yKRUGLFjfadUXETSDL4sB7FqHPePNUXbRmUan",
  "key34": "53xFEAdqWZ94kFwv7g4bXkF9b6pyAkfNJjLaXCd7rY59EwqhVEdCcBDrkQ5Y8s1q9r5aEFo5zih6LMabkfe17KZm",
  "key35": "SCYbtBKW1XUGH9wAnNvgsYk3GR2WCsQzdrj4XZwYZ6qiaKgadm44LQxBGc9JGSFVK4aJ5bW8uAtWxsGK3oBdC2t",
  "key36": "2pE1ZBPG8fEp9fGCEMN1z9KoHK9riTQQyABs4nQfYX8mSPhSEfgXN6bxsihsxcm9FxU2psYgomZHUnANnKbAhr8o",
  "key37": "5492jkFjkpMJc82UKJcmma3nYtoftFikuFE1RCVDb9whvPC4fiEgWinkC4MizVNUFZhAHp3sJvf2uJ2GeNrKMwep",
  "key38": "5o6XamijmqxtQdwPW6BLUmo3FBfj2yHQnEUDvoD6kQuiqS5crj85ezXjiVMPPzDt6sYhEAAjFrY3UWFWERkuv7SR",
  "key39": "2VRZc67CmVjbAbETeTMFw6bWvF6EQounAssnvXT7YMwjBrTgZWULoM2PkUEw3t7BXV6SnYsRF2oGeVYLKqpRYABD",
  "key40": "gC79JCcuzzuoiQefHaRhjaq19BSKMoEuQGt5cot57L3A7M9CtnhgvLKwZCYPAZxXQAPDWcm3zruXxapYrw7BWeZ",
  "key41": "3ewCGJKLGmnts4PNnkpMdW4Lm9iu8EPeR85nuGpwjo8ZzqKwTPJBd5oUBhc6Vbxb2eSBRzXXjecYA66UyeieAWVL",
  "key42": "5puLjSJe33aafEJmJSqWfnqhtDr6XFXmihPf7njxioEE9ffuWsmx8zfccNTFGbS2DMgApQT38hw33q7CrBW8FwRp",
  "key43": "3vd6YNynWcHWY2Fko11DTe75n8ApJThSmzbuG5BhwLDqFzWZk1zo98tsyBViVxNLYhMPzVeNDxEdnY2G91tH7tff",
  "key44": "5PLfFA6LSrbAMQhrsVGJeiLHjj2CAM2EGzRMVEmWA1PTSH2ey9GZmukcXLvvgs6tLeGuAXqSbpB8ALYnH2fZNGBw",
  "key45": "5iChZGt7qm3nqSP3vrXnFWwvfr1EtsjbyNAuvzxrpDRCuPUZ8k7KNpNFVZWgrVeT7FiwwSHEcCsHgPHVUq3Np213",
  "key46": "5BP3xskJja4XHKVeUQkSZmjrVwcuRUD9VDdM1BTvC5jkCTWgEAcqwjp9FuvxojMamCGLvMyrBqsqquTLpb6dtzxo"
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
