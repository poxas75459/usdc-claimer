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
    "64wddHxW54Dbx3CQWENFvKLdAuyVAqZdnGSH1SsLbLhbvzPG2gWdbEwF44XkeuThzz9TnboUQ4Me9Bih2m4cTj8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WNQqAjAHee7UbH4h3FrySvu5arxzwKoX9Gv7PQpBG7U4vo9ZrEK2VTqh82q5ad4rUaQZnuRjgH6dyTmZkYPfWSz",
  "key1": "4rkQh77TpSg8UjfU7bHNCBSDB9M5K3TPiR67swzBbMLtoA9SXZ3hXKKzzdCojLaU4muodGKM2NiLtmzedaBrwESK",
  "key2": "3D5WiWpUURLeok3nH67MX9TDz1C5Yq9QNoo58D9TPMTADPPny9Zbpf4FYtNKh8FJ63tgBfqW1UHDHPStrJYT7Pet",
  "key3": "3QhTYdDeAWXa9WU4iprK2CNpH2dXsJ7ARdUVqSCZE6HcQ9RnHUb7oKdQLmdmNQM6u9KJietk3zbgMiki2gW5AcZL",
  "key4": "3hE6uadaTt5tj5t2ddexqriLVgNQ7Du6xr1ofNriYVHT5Db98sf4WytnWdMWVRgZB4AHsUmdMa5HHXaDQQk5QS2q",
  "key5": "3R7qd6fY8Kxzma3fH3XNS5Lv7A3zuGm7B4PrtSx64Faav7wjExtBf1pkCF1LPRtVJKJW6f1HuCTpg1vvTqu5cFtR",
  "key6": "5WLBhxpWmFZseqaGJgNowfSdooJiLUKA5RqPaddFyKLnB6yMAugc5W6j2Jydc5KQzRH1zTTMJ8XMj7jY8ZQBCbgu",
  "key7": "5fTwRXXuYBdreUJ9ARMPCEeUSM8onfSSRvTYThqEMnAAnPRxvCDhWsNUxKeHcgQARt9kFx2DkUuQdx1jrB2BfixF",
  "key8": "MszU4AhnfVadFScLJpYLV44zRaRUVeAyrYjvY36sce7WHk5ezBPD7c8GXrVWaG7CHNPMNT8JfPAw19gbfX8gaSm",
  "key9": "5RioMYxosPx5iZaYpLyVgbHzs6QJqXfCVUU5uZrt3LrQr57yDRBXENoxc62x1kDmCDARobZZiLMvSzyhojnN9PQZ",
  "key10": "pQFK83QWqharQ5gM87aXz1TXcuTA61AvKbHRdo6Cx56Dziis48LiKRZ4nRhoGgqDTYRGQAwQgZAQj2fNDnPNb6L",
  "key11": "PzXZqiwdYb1Apj3UTu6nMnSbfq3kt41QPcqrnfXGXNfNDZeTF81wyyR4c4pWoe6yQZ5f96u9TDTPiKSc9jZ4VRo",
  "key12": "5XKTqPQS1Nxa8TCUrpZBfysQBySZDfyahUNnWsLSsMxFQfwiAq7JD87DUAmpY5pEkwLi1gN9w6y4LxtQ1hQ16Akj",
  "key13": "4i27XkgjQwGCtXKp9E4YDJzfU9dQzw324DriPjqPX1xcgudsbTd37K9CLzJ9jxRM5Z9uNTRaKwkoPFSZqzbNnJ2S",
  "key14": "3NBasPdpaVHrbEdxrrmy9zjD6MGmdq7DSXa6EABzZE57QMRyrt1Hdte1QkgP95yKLSZ1RJ4TGUer3b3LD8py9LCK",
  "key15": "2NL6CiKXN3kskyX49iCm51NAzCBG2Fgp6yBM1ckE45ZrcNqWURRKDUXqawUPFMesjrVjV1nTuWK3eoo3hhiK2yRN",
  "key16": "29YEayyWgH5kpiekNmN1gzXtiKWozSaVzrt2WYCdvUggSxLXK46mxVK8PXSVT4C5EnKxTn3hYC9kb7yuTNspyZGP",
  "key17": "2ZdCZDvGEG6dxSYi2yaw9usehxuYqYMrYwCVv478emCSDHuXgPDQHQKehXg2M6BUMHbmR55SgNtHPej5zSKT6yXk",
  "key18": "3gtXvJkuCC4w5LrTgNSbeqGX46bseoX1z2ssiHkoNCdC9RbEzijGsQGFUcUATyQdppJTC2bqMKGCFkSztBEVAXu4",
  "key19": "2vwmEssPLygDnPdM1zSDkaH8AM7Awt2SdWSuWGJ26h9qTbVieGqTtQNBu9GkbYxK2hWJS31MrknzXtr6sC8BuwBB",
  "key20": "2dWK2P9MdqhdbvPHbrW4iDp324bF7fjH8hVoRfbSHx91Hub9JmvfCPx14cXMuVmQhxqWm2iFVUTfmPWe4BjVfLAj",
  "key21": "52EP3U5BV1HJewJN2H1KXKCvkpu5ouamARYkVxvhAq1ebqEUshq45GcQKHxoXJDRes8CSUESbcwiak5UwPLviRiN",
  "key22": "546Ge8RpgRhM2X3LF4YmySmrsstXERDxHEtDhjTY11f2fPBSjgefk6ysn6y4CfxEqbkAWpNhHHTmTpQmrmQYB4hj",
  "key23": "44feWQBBimr1KFc64ir8ZVFXNfTve2a7QdmcUUyFytm9d3iKezdvraEuTSqg9H5LBuM2p6iYnctvTnec2bMfjyMm",
  "key24": "2pT8vmWaxHtS76atuWQTUnsZcPBFXQNsYmokocqU78phA2vK3mDf7ymtHPdAPo5qSvgfWY3Xtvu66HR2m4uBCDbE",
  "key25": "2R1gm2wVhhmJuLPAGyKYzKXMhJRsMpPtjonSUy8w4zVbwxhFr523USoG6A86MGp6SfDuvCRtEJGzCbM4MzSsRNB2",
  "key26": "4GA9eRmcJhyAjrjZmEWPqEw96SjM6Xg3MJiPAomWRvMz8scgaNRtCtnz5QESPP7SbsaSNrP3EuYxxjuM1qwPnCnc",
  "key27": "tysAKJcKwjPpneEap5BtntKQBV4Nwu5Kfn7uBiLFfr7MM4gjaxhdf27b2d7w3grs63Npo2khrubNEzqi2fC7pJ1",
  "key28": "GWRyaZKah5wfvuSNPH53Bfo1P4vjhR1ZfTJXvVYNpWNuKQ8h33hpD2qidTGbK5kzFG9XEPbodFA2nngpwjaTJmp",
  "key29": "5HpwGUHVhN4csf4p77VMfHv4FCrtyQMTjWEqBwzDVAaDABKmHAFp9rMKLafsRSx72TQ2uKaDDKsBuHmkjTtRgnWe",
  "key30": "3v983cKxEAXiHKKDuVPnzCjQbPhCkdPhG3VFJaJu2WX8fV1rut4s4fqi3oF66DrDbwdTXwDD5xo9pXrg2pt3Fm8M",
  "key31": "LBwVtnQJS5XXuquzd2Y671sEvpVsqWE2U9HRfo1WV7MB7U6M1gBp8yQVXdANCP2YXNMKHfzJaEnMZZWaL6cZG9L",
  "key32": "5fNqAFQMfqdZ1Pgw57jd8K6HVbgTj2BVXnYwgoq3sLEACuPAkNQQvDrWoDaWtJ9yA6TRs7udsFWVsUm9u929DpKx",
  "key33": "3aohgKbQKN2pEpK9b9i19cvSbq3Axei6HUhjbLhC29QnjHPkawC9jwiY5J85PfBzZBdwgRzGwEgk35au7FLU5EpD",
  "key34": "2BdjJsnhXgD86GoUpTSohWfbsRetX7e1gRFVE7ztELGxQ195abvn7894GRyxUhbPGwnHgsmnAVL6qqiA8CvyUot8",
  "key35": "5zu5xwFw64V8v25VpRWPZnr1cHGyToxVbrC74nzEt3kAGn64cmzS1h9d1aXrS3nfpB3Kovc3oh7DJXrVH5ePQDLn",
  "key36": "5n8fbkCwdRRKL1o34jmSPFgAFSFgQCWfPaU8Rj1nJECRBCqkmScvufMmuHWiRvjVtxozsHNDtPC62xwLZzczHYXs",
  "key37": "4AzoUEUJ7PgVyqsEvs6rsJRYKAMSpr9fAxA1wo32YHqH2C6Rd6m15PeBCYqM21GEwWHRFpYQe68jib3S6xBokkgr",
  "key38": "4rKFdY29sjvwawMXjxL71v3GXrkYhHpCLTNNCY66Naejn8R89MsSWY46i8kiewmfYEuJGQHhQFwMkkSMDPLiJ9pt",
  "key39": "5atfpEZEwfnk2pZnaKGi4jzt4mTnPjh2CaLrLsnRVM5LfNMYs5S1JhQ3LWtMsf7TWM89t3sopnngCeBCcmdpyoX1",
  "key40": "2Abs334rZEbZbAHMz7eMJsvVnoMEqCuhjzF3gxgniEyCrE1Gy78ACbBk5V5bUUEEfZuAFpdVaQ7RRjn6od3m66P9",
  "key41": "5pJLmfdP7HDAutmDbNXRCsc3GBUdqTMqpa29UmhXTd2EySM7gNN67etSqkGpCvM8Kd6z5wvGNnYvi29hMbmZhAf8",
  "key42": "4FdjqtbYK9fTREdEF92fupR2bXj3psKY3JzjqCD22vGi8jzVjdPanmm4yC9WyxP36vdE7FzUMjdJDdeyKkYXeJZy",
  "key43": "4oSe9m3SVjGWa2DaY3DzDYCJyECWu5vee1CMcoUcn3BkfBozhDCJEVFQUhmd4htiF3C6MMmZrWMPhbjSQWajXdhg",
  "key44": "5W4VrcSvXWUKecpP9z1fxXr9p1ScizmSmWowt8Kkupm56wucSNjKyBG73rN4PVFU6JXYwiHD68fsVK1SPWPEMKgn",
  "key45": "JHoNittS8hwVEQdLFcWfnWNfau9xSYWd6CpT8D2fsrD87VXhSwLhjorZfQrW9tibguFPzC1vYbAfYtSxA4GbxCh",
  "key46": "2JX2naFMG38CXnqMzvykStbYGHYtbd4S56eoLPxghpX5vQNUebuMFD18zp6Vg4vevRwDja3D341ZqD5VJ9qqXuML",
  "key47": "32Zmdp1XPq7pUZvSF5a7XsC5whYWymiUYYht5Dj1QaqMDuhXA5UgUCBuLi59tiMGeM5YMspznZkumToXrC8F5v1L",
  "key48": "L7bP1HLnj28ESr5ntBeHbMNA78RLUnVy4iFUoEo3ykEMQVrkt3139ftMp81NvfVdf3FZnz93satV5GKo7a9vgTB"
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
