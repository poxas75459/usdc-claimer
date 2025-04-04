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
    "4soSsx2Qm9wETwsyQBf9SmecwdXiXBdCYDHAeqky4qtNDZZYB8ZGGjacogYnAErQTBDnR3QEPq3uLobejbo6QpaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkVbaqNkXkJT55vG5SBr5v6z89h7sh8ZHRnCkKJL9kRp6sJYzJNyaZoUTJwaA6xRAaUGxs4RwFbPMLzRVabasVe",
  "key1": "2utYQAN3nyBEskTrVzZG2WT22S3hwcNuFRMgwJkCaLZyndy6LW5qMzjLCmcmC1R2QZmXnqbUHA4iYLXJgykP4tcs",
  "key2": "2eSNzs8cpvRAcJbVJR4KfbrpWfZpHgHTCT4g1ofF9qMKmzM9qyXjrRkz1S93vhk1vvbGs1Ciqh5HykpBkMA3t543",
  "key3": "9aEq7GFrotrQgizTSZxaRmxFbjfcYMALwiCC24s7yqztbQha9BKCUmYYTnYmQDX2HucjW8mySo1aEhJpaCA75b6",
  "key4": "3cZ9tbokXCSU9Gdg5B6qmudqQsaTsvPAN2GrtSuH8moAj4orvZkBMnkps9sGbJVpPeBaDH45VFDpds96HgMjoTDz",
  "key5": "2poW9iWUwggBitqmwhdFyxTjdVzzAVMfox1Yg3JjaM9hm1izMEzvYoiA6b52WqdEjqb5ExyHLsBz5euSXPt4A7Rd",
  "key6": "4skasUahGkKxBQPkJXwSz9RbntWbZ5GJg4yaT1TNKiLXKoPGxJRHudYPb4zjxb7Jncib9oHaLwNkypSBZq3Tz65w",
  "key7": "3Zd8y2ePHp8E9AJXjnD816Qj1smPW1tpS7QZTY81rKwzjm2REmAV5EWCeY8s6vEkfD3ZCjFmesnXqasX3c9K2z3N",
  "key8": "4cD7hiwm92F3T6RxiReJiFLoM1hDXach9h6BaRe6menah8c4ArC8vnPjLwktK4P8xkn1eahYr1JZsFL4Nup6du4L",
  "key9": "14SvgcModorcRcPsim4ihFX6xtehztL43vy7Fz9R6vAZVs3H1J1asnixg8DppywXftYxbGfsBbqpd6EpnnhUXKQ",
  "key10": "23rhHPDGUu2RKp3wUCTw7AuVqhXraPNdg9nQDYdYCWoH82oVg5VYftNz85vFnj9uR2Gzhz4czNqFNGedwkFcsqej",
  "key11": "59aWUqNFFysFJtHqYT8WQdMsGQSxkPNwRnZW8XyFKWHdmjhLrjNTNkoM6YLNMZyYLdEjMi682ZnsVo5LNzjwdxjo",
  "key12": "5DebtGbgeKRLysuZNunmw1SnpwkZX9A765WPqwqTp862WJqX6kStRXAWfUqGazn5NAu4NwjCM6TvrR5bjdYsyfAL",
  "key13": "2Aja3Xz7tqDUE6vZXGg1H8Hc8ZgR2GFJy6uVZt36ew2KyJAWkorPysymbqRRSD9G3Z5QJ7ksiVz3iF6B3q58hTQp",
  "key14": "2FuKAz13FsbETuhStwwYG6P8a4feTSRMoNGdyauujdiSzYiZhM9132JYWk3E3xEXnUguVsU72FzXySxVNXr4b6jH",
  "key15": "TnVfuBxxnUNeQ1CoGQSdujnwXZNwr9wVwJvMRR7MX7mDzJuJiJBWJCj4yahgS2tMDD2vhp88vcS9nkARucNhPh3",
  "key16": "2pT9tRfd2KLWupzFQmMgtoo2M7tiWMZ6QA1Uj8s9SNFHNLuCvsyv1Tr6zL4VRYUywwikibrLhqgyquG294mWQMMx",
  "key17": "CdzVT5fWBjZW8RX5Zkat3joov2bzdFfHvTrK2Eroe5Kork6Tt5Cf9C9GNGAwVQFNRya1GJxH3niccwyUdcNAPoB",
  "key18": "5tGCTpYycXYUUNVxiybrUUkf3EtVeAnjbBB5ET6bypaD3CWG7R6yGTh9MrK3ZmWrmo38f3dWLKMoAUtu7KMtpVyi",
  "key19": "4h6coaH9cDZqWCXAgibzBvaJaPrE4EJ3vExWfwygVujjef9iMqa2dCvwCdyRTKXw3MXTXYWjrPHEn4LDmfhDaM1K",
  "key20": "5WBESdoJ314oCUgBSZ2zunfXdnhw9pb4mJmKrT1Vp1LkTetFW3zGRHE5uZqQEGNMEkHCVzk2cLLYHznCQzKECCVD",
  "key21": "5GVRvnnD7RpWvvANm8MZsAfMJCxLsMUfBGyYPgZaHNVpr2HNEcHvauFdW6bp1dkBefoBHwrYDBHCUnbo3XPHsVF9",
  "key22": "3GwrNErf5xfMwDQQrJmSjcowYDKg1ywUt34JCMt2hLid5R8Ute5WJRz33Rhm5DuxJU7ukNeYV8AGqtM1YRzCS3Ed",
  "key23": "2YNbd5yfNpBNw3aRNnQm9E7goZBu1GrgmcP56DoESAAhjKAakWwCgVUKug8sKui1EUKteZrKMNnshrBHZ2FTm1tB",
  "key24": "64vNSjjgWJjaQ45m1YRPzRuCB1yrn1Ky78g8NQwA3uvpmuTJAgYyYSRoaQ7MMXD2ydDfiHFj526H3LnCM33pidsR",
  "key25": "4iyWhFs8wFGr3fDdryUNPQ1qVWR6DEk1M2ReedcCFbBwKsjHqAMC3DWTxobu6YUyV7j8FoFH7EEbmNaJ5jBDAKpD",
  "key26": "5TuczYWXjEDMjP7VKh4k6ZQzoz1QqMhu9NEC6R3mFS7bJBmRWJvZwSFBF1kbUqhVtqsC45gfoQWG9r5vpCBY7PkN",
  "key27": "65f61HhS87zG7JpfZuvnJcNbkSMeNcx8HYGNrV43hobQLFnJFS7ZR5zu7uMoMexSfZebQ4MPPEeonQWkLEFaHoTs",
  "key28": "27pao2m5VtMEKrqcv3a9EZ8hkBkgpxxy8mVNb247AqDPidDN8eazff6koPef7XiREuK8K2pMVrqWQniJhUUJw6kT",
  "key29": "3tPTz6BfBWjH1UiSuzd3DPBB1HURVW8Ce7o1Xqdm2MTnZ1MyWqS7TeZH8MneHnmPSy9n3PKPM3PkBq6q2z6ndwaH",
  "key30": "5BSss2AwoQAXTArgg3ueuFjeMB1k6YKdNzBcmK93YwBgNdDzTJoRV6qiod5Eo1sUJcPkTDtixjg7NnwRFLxbYPLb",
  "key31": "49PJFzMu5dcyGyRebZqmw6t4aYAML6e6XJQ1UBNFceskUg8maYQGS9hg38MvXz9Gj98WHSXrbmPVzPZPCaQRzaj8",
  "key32": "3iSA32pdasbgUz42sL5THVar9H62km97bfvGq4bRGNoeMrgG8Zi3jzPpCgKsUsofnegKtn1p8JVh3DCmBebGn3x8",
  "key33": "hnRrPRKfT3PU6sAgdRvrkfE7WEWm3gBfuhBaM7pQpXZigaH4SRzqTw79G2cs3nDY6rmjPyZBdmN6wuxrZLsffmr",
  "key34": "C676r4moNPpnxjFXzWufB9DsUmDz7cjoMBFa2zRpBpAiUgc9933qZDoXG8wrXpffcK3mTxVVHS9EVhbeyvKtKrM",
  "key35": "2BMupJgSPqcaUEJmAGYVNsEAUQi7DAitgJZUm4hkJiHG2UDrg1514jb34Z7J4FtUSenpAnSE6JvtDcC8e9bc6dEG",
  "key36": "2mLbU5qxfjJr6eDyqh47PJybV6JegMCaVaCMuuueNxJkWnUysbyow7DoiA81UtMHXWvGiE7HLu5YcYgprsCBM4fF",
  "key37": "2SNJrP5QAUXvsJDxaUCzfjHqtf9S6rNET22Sy4b82bCjdgdBoLbF7ZzCe2wKYeqPAK1GtjeZrGcKY9HDPzYu2JSb",
  "key38": "WtTBtcBme5avoEjnGehC3DpnHYEXsVF4UftHQAcZn6mFXMAsF7AEdKqr3ZQY9xEoiN9UHpnDRdemjCmYQssMzAU",
  "key39": "5fHyGWguKgdiQ1GH4a9NnXzh9KZnB3kDyzdTe66Ked3XCpKwM9g3cMD1xFawD6qiDqv8EvHZcrf5EzFPyFTJiPtw",
  "key40": "24SiPaadvDsqf532A9YvE1Gr4SpJ3jeBwbSUkaECfTMtoHC8Paa6wkiQudHQjQPM979d6xvAXuSo38jyMgio6ycj",
  "key41": "5NnPXo4wRo8y4ebuiD8cMVgUEJ25Mh7znTVnsfiCMU1JWCEhaqhyoWFbzBqyLcKVs5pxde1jQmso5cKaWoBqBPF7",
  "key42": "2UqL2uQxiuL5QL1EnqXBgjbhig4aPaGoxAdS4TR5FxVczTR2MJj48M3nkxjM266ipNx1AqTXYPtQGW5UukTPr83X",
  "key43": "656NrXK3bwQqATJLNP7kdAyzi8Qp3CmHAzPn2gq1b3KwGrkMLtYaYioZUudMawMPkLCf9LB9fTqHYKF6g6KFi69N",
  "key44": "5PwVaoKx5nuD9jfpttXksJgyrgi99Q3ee4o8UixGFNUq1mX9NfDmYUAp2YRw3ojws4sUhF4pY3GL16h9Jd3wffdK",
  "key45": "2rqaCN7mAagdU9vM4YcfW4tpWdcL1LDqFZDEyFNyi6oyrfr1j3pz9b61AAMXhM7KL4WtrJBDnEssiHsbqionit3g",
  "key46": "2oucoACgRa9DjAB2Hmtbh8EYjFRR8e6XRPq3WhTirbBv9mkALujhjXdxVh8Jv9Am2aN1bx7DWyDn5ziGBVEDuSyN",
  "key47": "2vfVPE6dtoFeRQzs3YAwonj6hEzvsW5uRSZj2gxMxqQmvwriiDpvwxA31Ko6UhwJ64gpimWGwVv5pogcwoLRCssG",
  "key48": "2kBEBWWbZCB8pKAwZcPh2L6LQUrFVGbLM57fZ2M3opz8gACpeNKkEyibAmWMFTapAB4K5C64rhnmA7qBZieCrrtD",
  "key49": "2UnncMfe5uW6318KdcXvst3yWHJPw17DuXzaYo9eWvQQjtNmiS1uaJdMmH4TT84FAyvsNGfzFcHWkQfydgXu2tG"
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
