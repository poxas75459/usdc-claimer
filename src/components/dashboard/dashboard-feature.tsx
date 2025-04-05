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
    "4rriKUY4A3kDtKoRNuyj1DSi7FxrvDwy8cfaGeJTGh4z5AEhWJSx2FTbj26WYFGgitcyaRJLPCM2cvm1R6BMkJgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUryGXRpozrUXq41TSAvWnjr86wuffv62g142D98rKvQS7oy1Bk8ojPVRY4Rkemc9uSPkZ6htrxD8SGhSq3c8J3",
  "key1": "3P7rBaBgV8Ld6vxGpedCpC17SQkxiayfBMBD2zQjYfDFwnpLcoVLth64KEuu1hyntaSTfZ7HW1tyvvmr3y4Bxc6F",
  "key2": "wx4riZUbZwpWZtBeeMx8Cwq2ZeyraAQi2darr7DhJTaZe4TWYEveCP29VZsw9EqbxswBDHF7BjkTdkokXGeZbHL",
  "key3": "54Vv76WzUz7pFAgDnrbQDgsAZTzPw3hcxCmobDRFgfDzvriKEBfNHKK1ZeYutg5TEZSsYV5YzVwgXjcqNpRyhXio",
  "key4": "4ekJLNgKQzJf1XVpRzLsv9SVQQvWNLeNJ9CnQiF27cogBDjjTHznzJrgVfyt1aKBxfgGLF1keMQqMJygvdysUtvi",
  "key5": "3unJai5dWiSkSy7ugtKnnPUN9A6dijzvr28T8wkt6px5XKPou7q5uQhJwkX8qrHN1at38GsxXMFJjCRWYBZUziN8",
  "key6": "4c1q9LRUjfCAeqpX4S6mrXTEekyktJ6Rqbo1RYnXTghRL4pRqazH4GmZcCMjZFkYKKPLWsKi2ZkYHKAu9N5DB1PN",
  "key7": "4ibwYowdfUrvtm1EKBHoF9C9AoxNS7gsevDxKwgxcqe7jE32fAjtc9ohM1AHKvzAKNFFPe2Rhn8Q52YNscd4wU1r",
  "key8": "3LuzhEk8giLVxrTcGTuhZatuPiczmp3smbDNxJVyrXL89FwCaXuutdrAP61Toc7S8xbe1f6E4eXvvk2SyT8DYezZ",
  "key9": "4RgkP9CnHWE9mi5ExjvSq6A4QQ227TNC2o37mdEJXmvKRMqVzP1pQYWJXhAjKReFmM4Ap4mxNA12LfUxW5YrzVKQ",
  "key10": "sZasW4r6uhwkSupw2UTpRRAUG5p9s8Kp2ZkR82CVbr43eUKTmyxs1FabJYVK5K3i6Sxz8ZAthgkcxqSwUGP12mn",
  "key11": "3Dn8J4QbDemkSwDom5zqbkHoLEwgG15w2F4LrAMnW97TQhysUBF1EYSumYkKqAx33qTNXuWvYoZYBFHrLPL7bbfp",
  "key12": "4J45mxYoysEtUbKxWH4PcTHmRn6LSCpiELMUYfXCuyhfR1VBrfXbrg4Q8jrtUskmrUK1eHz9ZJuNUz8bhtcwZVkm",
  "key13": "krAhPqxijKfuLWcAFa3zqcZU9VhXtjyL3dpcyogNpSM7Unm16rErcAAr1BRsvo9hTzCyXXvPpNzExTJ327wdAZh",
  "key14": "3SmZhSFrXLee857bEmfseZbu2hyP7auxAk4AWvPJFKurxXvu8RGgaHgGptU4mdzmxLbU9WAToc7FeRMA9RMcbPJs",
  "key15": "3iEotkSovYCWmFxCK8X1ZSUFPaP7V7F1jaMekmhdMWNTvLwgGagQT9eAbe4SVru73Uyi5PnBoKLFj6Pq4v5hPrQ",
  "key16": "Tc6RrVLGUa5bPqkDUYfJhbhJQhyHLZYswjXQqBtFMVb7eor1jzYzxbLoZnXtmXQhJDwVSdCLkc7nNtYHQHKwCbs",
  "key17": "4JgNB4FB3tpSTre5PKvkkHXthZ5dvKazVjBKNQtXYoMguiFVgQVC4vP4xJcCxxuwfXoKRyRnSGgvjGszvjjyvTb3",
  "key18": "4tdRahGtLUgTdSfv3dy8qyYaz2wD3hHytbLzZGKZAnkjEynQwoPGoLeYMpUkeqfJmPz2DApBnBVm36vHAxLhfDC9",
  "key19": "Rij5yCzX1gxYp1MbLDvWaA9zkkTcZStwaTLS2awUZrsbtnVE54aqE2DYjt3KzZiabKtwk4H3sUUcRhQK97gzs2r",
  "key20": "4eXC3ZRviJAstDcv44f4H24k2Fzwuhi19DtcRan15QxRfw6aoLoMdMWBc5gVTJWr1V5E5gADCs6j9UhgFqJiEU5S",
  "key21": "8SgwHWFk5fDr6LnK9WRMB1ne7mTWvJc3PsmrcTvqhJA8eYxQS9dUjQrw3YtMSY3CQMDU9zmdH4VTpc1mJqEszWu",
  "key22": "5r3PsyhUTrkTK8LXUj97jnzXX558GUmguP7erZ6foZSHEe5z34WBoaXzsjN73xDk6CEvk7w2tbUguUFD2RqC1GiU",
  "key23": "36RmCrgFfyBqdqpP3oWTzWPBQmyKokAK9XrcqCqt2vSksLX2RPNjetJ4NrVjU3Xxbqc2Td49wdKgcfBuPRjSxQ9Q",
  "key24": "3Fda2EmcWNcSkxuo7LYm9iArahpzy1wKhoN2JHQnvAn5LjHUJFPg44SwTeNcHCa95Pr47PZohif6ebbRaL38Es3D",
  "key25": "5ve6CKfzdHWCJ5x5bmB85aVPJ5aGZZEQqmVwXEXHTRG2QgrmTCEKKKnoDP6s4XP7UecnqrFefLQw1aTAoZpVsfkA",
  "key26": "4yNdEysywPgk8svcAgZEJshGj3fgUVyLwGAuTbP6Cer1R9GbaA9qzrcuyRracLw7sW3Qv2i3SjQoTUDdgX3cqzvn",
  "key27": "5LR8PHeEgfjtWLmMBQc2c4rQbGX8chZz9ci6dt2J4vzXBAmuMYRZktCTM1PmAM5yMfmN2iJygBLjjyzXpfE1rfHW",
  "key28": "82NYShrFgDXzaiD4FUyHbz85z4CRnP8YszyChYT6VtWGBTN4nnPixp7Mf8Tic4th5F4ZbAdXFQR3ZKXQxyKw4Cg",
  "key29": "3eRGpymuefqpwyyD8oB3SrsHwMH3yY3UTTL2BydAJjifHCFYUYAo6zHTb5vV98dtWvFxYFRfPiA2HSuHMG5JKgj5",
  "key30": "5kQ11yK46cTubvwMGKZCCBhGZ9TGZ1cU1x2Rb8s3QLdEjdGoYV9hzM4C38KDH9LjzdjySm1b2e6DH2gs5fhVKNod",
  "key31": "RsBkwuvSUcHozAiDD5B8XPhBEdNkrLqGZRBKeCiuCyEKsDwAt44q84vHBbeUS6PWNYbuQtzhJR9Z7Cz24vDFhPY",
  "key32": "42mtUb5KhQqd39LJAmRRdD82exs9oC3X5NLtse8FxqrzsaS7wKmbN2FRWDmgXPSwLC4Fq5zirNRwfbo3WcYsKkYh",
  "key33": "3b31uc515j2xoBLTmVR2RQSbLRVKeaHwvHXkbnFDSti4mSpKMnWTrE3Knx6gJYrRxFGP656rvmDCo351tRKKc5AA",
  "key34": "2GbP23eWqSn636q4A8aoPGnhVQWHGoxyfFAqQJzeYSQpgTNK7TpcyLhGeV2oxj87AZWzfkaxLpvFjCfCY2sTPL3Z",
  "key35": "3o8zqegvTifwVyvrM4mfK8GBZfyn9bnAYMp4yHrQEsCKjBDFLTuBDQxmRenqirSkqfJwqzjzHWBSqD2tca6uaK7j",
  "key36": "2RBfuywD6eUfixdgArfL1UN5HDvj85tgk2bwimnoDM2CA5QJ4N9JzKHy4vZK6LSjnjrsYzHMwsYHNsbvLCqLXoD4",
  "key37": "5efg57HAokwkpyaXsEcKVXaxcKjHKyZncefV7G49JNKWommtUpHSEypT3An34Pxhhzf8BBpyAquHLvPg4bv9uU4D",
  "key38": "5DhXmXC8rh2JfhZkp48BTyJzyRCfMpQWQZhJVdfTXn2RjL1aScC6ywq6Ak4CdaJ3jYyn2Nvmx6jebiX5CBFp9BMF",
  "key39": "R5ndfCTQGT1AHLsu9WoVW3ctj7CjfX6WWfwoiqhPq7FDJ5JcPgsYCXs7SZZKeTJj7JcjKtuq5p3V4yT99nRrPwT",
  "key40": "3zwWCdEf26j8FsrFmr6cmSSWuUM2n4d4Rr6z9FhBbnJSGfRy9VM58xQD4ZWiQATZDNPV352DLwJnT1ysKstGJyR6",
  "key41": "5RMhMx53P9nQyG3nqvXmHDH2SV3kwfnGAakiorFSjruY7sJ9xQzHPnp6V8MBubn2kjwucuKPHsRCkwaWnjrhT9Dp",
  "key42": "38wDyLkr5ZAhFxgRVKLMZwL213NfFbiTGihWcmYrsSRHaCLEnm8A4EiaBmGLeXuNQ33VzdQASZJXZWtm8Fg84qzq",
  "key43": "4AweWF3nFXHofDiK1gPN1Eyn7coDnkmxXW2RWYggb2AxfKenZAtm3rRLaLRDwB4GjF9CoSgAByv6cBp8oPKWDEHP",
  "key44": "2uzyKDFD6vLEuKvKyyLseF33A53QrN9adjjTrQTJrA8GzJ7mMpcSq4LSKEiTPWo2e92WHQPaVeCWLSwbWnshPC3G",
  "key45": "5VsV62XYM7pSDhCcUrgXVcqRQf5Ad96wGYSrTzTkVRvqnVacTkQuhqBM4VEJnsaTDaVf9BhBFJHEBaEppRH2emdx"
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
