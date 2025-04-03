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
    "3x2GpD8VeWiiJmGwqiKFk9HyRPPCPpeFgcCQF91tqYDJsbTqPpCNv7RcqfKXT2vqntQUQozRwQSbnVeoDHtrFuiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q512W6EbnD5H2QNUqjZJvvSqKYhjaUihUXA6tMJ94jf9dDUTw8KqMYdCv66umh1r7vvKSdDcmhdpxy4VyicppTM",
  "key1": "4ckPAW5x5XdoBn6dfkqND3bX1vuPE5oVnVpZXdYWFepBNUMfhz9bsGnFwGMUv1Ge8iWq3gRRcNU6yD3L9jeLoJdy",
  "key2": "2XbQTFTje4tZxkk4L1eZPXXXDNNwR7oqvVVSmvb39zoKfBDPNfsL3Mm6oamTDvdEjEivtdLei16qo9PdAiNr4ggE",
  "key3": "xYUXaPpgxP1iTmAM4Vs7XLna92cjvA7ipuC3rRGseGPzaWWs7ndyMTixEv4YZWYkaVUqSrNJ8oAUfQJAK3aZ9JX",
  "key4": "3Kmc6bvxQyVCD8HohHXmch4eBc3wvqiHgHVzqpvBWf4W2ZMu8eyPmKU6ZqsHCVtYkCxtTPi3mR7A9yaiVgygdQEC",
  "key5": "2zRmpKtwcrbtfDpEHV2vwhoxcZT1QkQAnWRVKeW7oiBzUXPtCRetpFWKWcy6fpmy5Zco7g6V1HMBb2upiBxaD3Sc",
  "key6": "58fvTnLFdAA8cTyjKA2Apagx2WJbuWzTwg79rHYaqXRZuFHiSBjUPvgePhuTzPvumqiUkrZL2MDx1KDRWQ3q3sJi",
  "key7": "5xXoDtHizBqaNigeFmCaYSBtwDMaULdjkkyFfWwBRjavHHDdpRWpW6L539DT79VUEYw2Zo45VgCXoZGH3bDk6nKK",
  "key8": "43zWFvYs14cU8yqRDgztLJLXEU5tmWwv1hYVhdRizQuaT4kuhAKqoYXFUSNhU6abUcA9gYDrLTiJqXay6fHtQ6Z8",
  "key9": "5Hv9zb25EQiavEwZFWQavSJGDY7rEthxXGfEG1WgsipoAbgi6ry7LvSQPrLAkL32nxzS4WsmrPc4PXt2DroUqdtp",
  "key10": "2UQrVtcqrLeH4TZjGS9hSVo9x4oLbGqYKwbHgKg27hvW5p8jPanoRKHE87vZZRmUSaeVnkX5DntcrxGsrWB64Hmh",
  "key11": "5MVdLVWxXsjpy8YdMnFR3VT2PDCUkxUzqbKFLva3JzYVhRkJnHzfhzwN4NZF3LUrsFRSV86cU5eQ6WtD2BKT3G8N",
  "key12": "42VbgvXBw18hhWKwqHR4rTRW2twhCXm1xqgAQ5VaDHV1pi1F3ToQ7harW7RpPDpwMJxVgrsLadyL6sSAkfXxUc4r",
  "key13": "2wQ9AKLGHRgYxfuhuv2mBeDYPMdgQYR4PN9skFFUqzy3Z7943SyLaW5suvyj4Y5q17QET6f4K2TBaY3TZq3MJPRE",
  "key14": "5SbZapsfcXsnuGkvmMbLrtxkMNyp76LT3nohToVaWrVnVBw34Pt6tGnzqUVWDbw2QRnHB6PRLbkaf1JS8gFkGLfa",
  "key15": "2Rvh5AXGGJEf5z5HeVX7T7kvrhP3yE6s5RV2RuDXsT8ywLHgWz4izXpYZnzitYuw1bAFtw7m55ooAhHVkATafbRS",
  "key16": "3jfa9Vg7DAmTQE4kgTaTPo4BknqGxApAfvEYcX145yJYbWL8UuD7MVCuNoWMLBrkgnPevQxLCQbadCJPTpNQaZ6M",
  "key17": "4RXVbw77WWZoye96zYtwqLGxH63hxJ3d5Dw2KmjytKcQH4BV8h9fsMZpLmLmo5cDvMPPmJCmZ1R6AkWntqMawuP1",
  "key18": "cPq3n4LXJsMnqRpT7MRuvN7vCXtHqM79PpjwAjNEifjJ33pnPra7ripJfsddMhn4CpDStHgcMh7yZXfk4sPLUFm",
  "key19": "9CpvVrhRx7xdXtL6DnMCM5eEPrtwpyLHqa8zbnPPYbQkBsiMXdiFYYYiUjdSur4t4p7xs1jQ4jGMQ5Yquv3CJKs",
  "key20": "2JFj3yVHfQ4knEvCyd7qqQ7FQkkM3wsRojekpDZd4WbPa4KDMgSChVxrVhmWtb69hgsupbKERnZRgbpaPGVJtQA2",
  "key21": "5EqdAxwKjveTDBEWE4GedhD8XAh4kEaUNbpjDFznTTUAuDSv411JLb1x6yiYXhnSgXzwsQC2QDkcnX7HRmfJKZry",
  "key22": "2mPPmdKQiwVEGJEiSs4TPQZ27hqvKHpXvHWTo5oDR2MkqzkFkhe8GJTC8DtUED2ofWpAg3ho6S5DJ9jtwTiuTBUt",
  "key23": "Ja8AuoG6j7pZsjt1MBG4oSMFkqWuxLxyo7nsoWV5qzDkCZxWvX9DAYm7MHFW5JavNZBDRhVxv5QZHzWv9Tdv8un",
  "key24": "5VKECQ81FVMi9Lso4h9dvt1i73jcYfPuXwNfv7srjoEkFCEJbZVVzsR7cMS4QmmxhaWeDqdQSPVLzpE7Fhu8EVRf",
  "key25": "5EVVzz6H9ipZ1k26ktNpSnPZMx4LePamzTCq2VFFzsxjeeDVrQN3mHAfAhyNSTJFPBHU616eMNujbmhR2E6WdiRU",
  "key26": "615bAs3fitdYtTjmESopayHiL498LSNQSYQXBWUEBFhuMLco9UAnCcWqEKDEhDkUAYUqkDYPCEFhoUq9f9gBwxfJ",
  "key27": "4bUEdK12Jzg7G9L57WAgENCspRNBSYYBkse2pEbRMb31tB2TdCcX32ikkjAqUQz3cjLd79MwFUf1DBX7Ms8zH92",
  "key28": "5jZWkzGyfVpquwJh3kzvDrRtWvNNzcgzVPdfzbobVmcgniRRHn9vgSbGbqWtS74kPrvSMNiY34RbhDt65AcjaRoG",
  "key29": "2Q93pBN8MARram6LYxLfN6hzDJjuWXwybeY9AM396boDoDfMaoapu4aWRW9PbwTpGofTre88JMfsCQc5w5RdLQoV",
  "key30": "4AQqD2cDPx1zpSn93R5cj2naoJc6fBTC6YmQ4w5A4wkkMUEDvS9zhXA9fAGc13aKgJUrM8wPGNsEYJvvELDVwMV9",
  "key31": "5yhvob18enskSJGm5csSz97PKJSdLobr3DKACEfpzMxTUnQU75QA6ffHcyCPAa7AatRKuMGKa3tTGY2Rr153gYz1",
  "key32": "33FsGxZd1hBANpiF9AJZ18JpunPGd1PfjGuRxhySQ6b4Hhx4aBqabwyU9jL3FXNJhwvZrEPDQsw6FjPJ5VUqfbzv",
  "key33": "4HWLbRMp2QMTj9Ev45NAh4kjcWwoxL1MdPK3B1mJNAGxivUabUwAuJLpy5TifZx1wpHfWMiBRDZYUuBwh5bNBLYa",
  "key34": "q7fL3arp8jMjrRD7XiMiwFE2cuNtELbPYuu6mkCVDqJEEHj4zUErHQ6J49bJ7pye3N2uFDTunFQ4xEYcbTSqwy1",
  "key35": "yDmWMYQC7RQyNzVTuZ6YuY1ydQm65Pi6w5MBtxvYVCjmLGrtycGxrYW93TQQ9mA7AQoaXCcV7BNmpMkrUGecQKx",
  "key36": "cvz6d8X9D15vc92aqFe3xDfN68fD5tvgw8QDJqAgNGfkBJZLdAFTTVCE26MCt6mwFcGF2mXa7kMs4e2xbLfdZjJ",
  "key37": "5LFEBmamBnLnWWWDrq5a4JEoFwXA5cPUCpcvxrvxKFtGwgQuvFtDCRsdzjEU5nt17yB2JxgYimFKGxrHqKr8eVSG",
  "key38": "26fhcHyT2fDRUjKTMYj3pmpF4NBspjxDScQ4EtMBr4AMK3EWJQT7dNv8JRSa2wEsdi7ed4EbJdbWf6oFe3HWxBxv",
  "key39": "2y87XKL5mKXECY3D6nFCRBpLTJtspoWA1MMJn1mSQj2Fgry2sWqGqLV46933BrpYBExeKWW2bwiYQGh1W9j8pGkV",
  "key40": "2w6jKuR5Sao1zTeiLe5MAiiycduAFDLVdwUhdaSckz1HMopt3DEhZ7RxoNUMRwVWZjuGU8q1aQ7Zocsgt3Kh2wTC",
  "key41": "kWaBnyxwUNGACYy6zRPSKWNNUu85hM3NYTxgMw3XLz2E15p2NnnJGKtH8gDMJnwnNViUc1mSUBdVkWSeuHEAGFE",
  "key42": "4MZa1GcCaKjFTBVV5z62WKVpYQoSHwn4MFy1ZeYfwB9dT1yQ1zYbnMh8KPAuvw63MNVn9gtMRrvm1b29JLvxNkbt",
  "key43": "2gLHny7xejjKpcvqG2ULXTPMkE9TQvcGMcG3bCVB7ZDCPNy8gZVZp392teYqX8u338wiGdaFdct7n8Ca3akn7QcR",
  "key44": "3s2S4xvCcFeg37xcpgUMkWG37ZzY5VXCcNv81C9oSMg3B7T97VAbuyALxJH2DVJnETRLbcMjJomNJACRdU7MrNEy",
  "key45": "2aGD8erKNtixALwCf9pvRpQSfg7ZuafHAWVDZngwaJ6w5EPMLfjVoAUEkBQHJdpyVuuYbPZoFFaEruyd4dZcYvqd",
  "key46": "3ZzqG3uzCJtHaGVVb5s2qDDvAbbA1boPZ6HuUwCAakApqaNFWrXjpgeyVBzm4Chxkuk3njjtanZrvAUAAcHFZEVv",
  "key47": "2R2meMttu2M3HqiJJG77bhDy2HUS1F1f8qHswMMW4yMjkr7vQ8o55VCpo2bcaMCm9rXxrmZsaAb8dNXkxAWeaqBH",
  "key48": "4B2apFQyaCbCHZaU3Nm64m3aNbvJTzvTCYRuf7HvJFj3ZrWwJVJju8vwqWGinvPYqwLS92Xr1Hjtb3dNEjvmpkYW",
  "key49": "5x9kEMXQ2ohUposESGPkCRmkwW5FEoE83NG7ZvtdESrU5WftpEGttazqSX2pYu7tcpK8nd1NKy59vrMzFdQDeeDo"
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
