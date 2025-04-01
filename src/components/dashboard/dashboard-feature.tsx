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
    "4asm5mxSoHb19WjgAFD8DzvhRZLLuqsoCQZGrCzKXBh7FZSNQ3isTW83Ue81XyoGJUSSvMwdJbGfVPzdM6ADYVpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LSpb9xzaxiPDeoPHRHysXDbUujyf9sASExkohRSB297JdmbD5b3x5JX7UnoEmWKbZNwsaYqFBchq8sMBDDx4qxX",
  "key1": "Cy9h8GhC1CzU3bW1QH2dPdxJHdniw6KYLcQpeJvDq3AdAcc5J6g9X6dhw5tctjYdWfHLozRcoj8soecg88vLAMK",
  "key2": "5qPAqD9fDTtdtyYFsHTfnJLNpGYuD6p4RNiNCLmYVFAd9uRHqjDwtupyPzW9hc3WKRxXGMt6LikTJM271Vkbupyx",
  "key3": "3ebcrmxEZcJd7ekEt68hvix7z1XfsDwvtTkTC82B1LjTxKQL8X6q2kWsa5fEm53RiCxynKruMWypMcyTu1xbiC31",
  "key4": "3i9VDrxTYybkCEXG8CByLFnZzjs47bm6wwXuxNWD5LoLY1shwHYq9BrEmzqk8UWeAKDBu5RqQMwBXrQb8jyvqWga",
  "key5": "3GXjxe3fpvvSkejt7skN6VEx9wk3HcRFnVz1nLCzhRSns5WrMzcXdVaEwHfD41M1vs6qm2ZHkWLCk8cpjiyQeajs",
  "key6": "4JrSpidwoeb8pop2Fchnh4kUojnRTyc2gk2TnMC8aYCMHGUk627gT4HhLmRSjWSKVtXYK4go129BLt9r1dJZHRcW",
  "key7": "4w6tryGociFdQt47ptzpvUeCgvwk7j26Var9FBAghXK7oasPFhmQ7PP7stsagvFNT5vGLANoTD9yrXnhu89LbQ41",
  "key8": "BwJdAoxTQQ2unRYx4k1miTHi4LUMQLJeitkUW5noFkEucMF5WWBZXf77TeFQLujjwNA3Z2yfFG8WoTKrX4W7h7S",
  "key9": "uX2JigejrXC4rrcd9dsLsbWUDD6xSTeBoTEK53fp2VpqobHe5oV14FpgVp1JDpHXiAJFgNxXKbBNCzmptEJhUch",
  "key10": "T1Qr9JgTezXmYcxUnYEGjFb5VPVGFvUr6oPH7bKrs9Gv9bECRzGEr5TUszNM7gTxbztvJmxLB7wTCxHF7AUcvY5",
  "key11": "4jT15vnKErv979oTBvfRSf7WHtfLHGN9YgZLxkryrMVDpCQcj38CpKVSWfCxS74aLqZdZVVgNxsG5YkvEaxChivs",
  "key12": "3jwwdme7iXVEaWXNnSbYVafLr6e8JxL4J24xQBfQmK98Ch72NMh9PrYVKM4fx7bBhcS7GPYEHt1mkxvjUKmiXwXJ",
  "key13": "U6h7xm39WNk4QeJeaPw8zwTh4v8Qr6JeZS7So7gmat3zXCrcxjr324mSCmDQvwDgXtjhFXAYLanFs7tPsRR7a2z",
  "key14": "4w6PCFs6RZWhymkTjT2Gd7j3isJRrNbnncbLTUZfvTtdMq85uDRABxGa83XWrZF5edhxKa9VfQyr93gwZS6YUzNK",
  "key15": "4pSXjDBavH3ye6iY9RJ7ucdugoXgBETYpmfVkyXy1c82RcvKH5W2qvRAxmw2vNfAfkxVM92MiPt9G5ZvJft68xqH",
  "key16": "3M28RKBJi4sMBGAE1Xmp65rDAGVZT6zV6n3qYKZ7TiGQ6xhrJqU22zuU9X1mdv8Kfy3JhWs6dLaMWma9FJKUHyKZ",
  "key17": "5skRiP7MCBHqL4tcjMvj2UugbHsQ8KpUdmudYh9Xowzqfd2T6eStjUPH6jvN5SJxAYHqgmWQbGx9dM1gPcB6vFz",
  "key18": "2usrAmDXrAbjF8SFnhrW5wyRwsjpyPoDg3DvYy2vE27zdBaMWkjr4RBrdmZmUamNxynfoctvnidRQ5oxFMCQb2BY",
  "key19": "65rJyCQmHso3iGicqPYqC9MTGwpjvVUsLTVEi1KJNuF2jenkkicoT9DT3qQ746nQkNBBjgVXBVrD9Uitva57wXgY",
  "key20": "DYPCUjbaMHzrBUnDSaSdMh7ApztgAvxiiHFFda8eKJA4vh3aKDkE8PjP5WGKgXHtnxBMCkrHPe75VPki4w25h8U",
  "key21": "5q434GHuLQiRfkyNzW2dzxLF8oUD23McvQHpUjpQyzt5oBbjUzwkPo5PAGcgoAZMPyNu4eWCRouogiCoyVEGtyUu",
  "key22": "k9ujKLRbDAyKutVQgUXF3u2GExhUKS1DkXtRCYQSYzq2skgcHErz7WDiWWnrYCfq68w5XXb6U5ndNp3WYrbxko3",
  "key23": "4u1KBa6zYMGyq4Rh2tDWZDnjccDFFM1nxa5dwhkqbbvnQALZfHLvJ5rcEKUfeMn7Ya5Qiw5ZLe2qQ5wRD2VuM4t5",
  "key24": "52JyYEHNZQibcekxvHuMRH5YYfFQJaaRwi8KMXgEpabLF3kEZhNQzmnzK1pJGUpWfxa2GBNdn8RJjKf1LvVP6MkK",
  "key25": "HZnz5weFdfkxEvhY8EEVe5X6srzYsYF8Cm8VKvr48jT1wtLyPWK4a6eH8x5SP48wwEEaCe3JkyfxByiv6dkqpVe",
  "key26": "3RvaxvjRHeFDRTZesUvxUXyHqfsKdMUR3d7TTUmB9sxiDrzyDqRQ85t8DMep1fFUvUA5sRXKEUKoF6Lxs8PguqJ1",
  "key27": "26eGyy8WhazrJL1716YTNt9ZLnQwCqbkZLELhRopzpnHRYY9CfG5vTtKb8aQsruRqpFA3JiZpSgxN2ifkdFjni8q",
  "key28": "2Qpe1orh6K4P1P9uTcaXqghtaJcVz6ZmZsPXyVosRy9JmcBPCaZRdBfTHuT6ZekVSPbTE5UCrtHnpWNieqFqsKpA",
  "key29": "62No3Zb4sojiSkTc85mj2wzoHrK3y2WKW7Z3LbMx2hAiNXubYpBoMHFHRg4NdSvge7rS91EzsztnstQaR9QcBDGr",
  "key30": "4e7TZXz6NJvJowTU1Gx7KSyT3nuNzWiu85Nf5g8y5eH3j6seTC6T9wrnPtbUja4rijKj2DULBkKJ9VPHDPYaWCpY",
  "key31": "3YYDSPQ4gkmELVer5E3RjucezgnWQkuyMRf3MCLgjH81QZb82ois4qSeFimkJAXgEek7VtSi5tdHMPnRhKWULMe3",
  "key32": "5TbRQGqXLAgdykB6cZwEt2HbV7FB84R6rEn81AhvKhruRb74ZtoVLpC3NUkzt2j62TdFN9gWPX7UkN8QWxzKSYtQ",
  "key33": "2K26m8Pp7n4JP1TrHdySMDeRLapZHWvzo2AqouNRhqVeqSPpjnHZX7MTF83GPDEZhpj7LYz46rBTidmxUr6bfveF",
  "key34": "2RnYXYnRPCAiSbyG2k5GZ2nQJQVUtuecRPivP5HSx6dEfjRG3WhvDahGYyKnY1ravQFFXxQ2PXkCVNWMjUyQPGvH",
  "key35": "7AYzX4WVHfnPKyrWuRa5yGrigk8R643scBJKmUYag9oyUHXjix5YQHfZKqrc79qYvvB3HwdeQKFvFT3Lr727dMX",
  "key36": "4DCqpqHqauPCXaxFhuQZdEWziUZmjdEgMWWPVP8fsvvsCtmmy46kHkFcS9UUmwpaH9sNk8Mqe4dxA2BhiixgLkyD",
  "key37": "Y5Zbntyb3DiovcDdyb8BrwW46iNj1JAiG463CXGuwuf6qPeXLNyWbDMeMvCHDF6hC2isQb4cZTDRz76krpi7699",
  "key38": "2hTRdq4Lds1d4JeNRypPf4u2iZ6ji6JvhSnwXdeLii5ipeAg6pEDRysYmo7WbdH9psqMgb13GM2re3HMnuQ1Kgk3",
  "key39": "22ST9KghtfywT37JBgNxvLbDiJNWZ4upWdzZY2Bo7CZe3UVERf2cpKxaRumBsZWpu4SVZji9Lr1CVqjrK4kSa9Sa",
  "key40": "5bTpk4kWEKvXG3DrBCE8AdmjgjN9Ar2u3qLH4iKa77gEyjCbdtfApN1btrrMAqYRXxC46N9iSZVqYNPEwRSsiAqG",
  "key41": "53f5fiExPpFMPViSZUoB8hAUk9fwfGAUpkUwaHaNqZ3D3QXJJ3af6Lf1QFG5aSn7UUAoLckEZ4qKbmR3SbSXjT1M",
  "key42": "2wEdCiLxibba5eqGqMxucw7b5VV56UUKt6T6LnVzhHkPCbj4c9vxyfc3iUzqFH6hQUdWgzhLYzz2gT7HvC5LryLE",
  "key43": "itystyV5tv611Pw6bwRBBpXSebK9puUEgNuZmsRRzoMG5WvQcBGZXvfPBQMf95exbGze7KEUNxSSU3efp1Z7MSn",
  "key44": "sx15ymqe3YedjFEN3w8utstKbVMUNYW9V6PF8DqEVhXYvRhfS7m19qfgGavaccd4CKaMu589SwvL4z5VPx9en2W",
  "key45": "4b2hbsJprNYboneG5Y6b9y1MHjT7WKbWTkNt4ovdcMLoPuGHnzyJ6ie77LjXwT1WBbGBB2AnXmHjnZLhDVveHX59",
  "key46": "RTHmJbQT8VXFq7Ar2ZCEZ2kkNGbcHvUfUyLL9j3SiRNZuDro5gYFzX3hdfnhrdkReRrN3tJnMkNY77N27gLXFKM",
  "key47": "2CU77HV4nwJ14CzTGLtfXm9cvomvpkRuHW6eX5fuR9UJX6fU7tQR9aJxMvuybDhhN2DzERbxkkhv3Gy9NgA9z1T9"
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
