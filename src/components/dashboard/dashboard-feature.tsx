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
    "32YmDM4YedeUNKMZrZ6vUjj5t7RX1a1mDquPTjmRcfwq9Yx5C8tgYXvN46wki24uLCyotdUBnw73nqRsiWsrbF9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4doAAzibjkb6V8CMHoC4nqJTpkdVwvCnSVPF5ofnbJya9S13MuMEZGmUu4b3bb1A4tCXmVcfeinizx4f87h7Z1kF",
  "key1": "2uoNaEadYesPD5oruDSsVQv999P56iWApDaNdFnMH1Dy9YcCCo1cKzqdW64S52qDrh2pMEQWemLrPvw6VJY4kX88",
  "key2": "3nB3WNT84x5kefQJZBsxBgxkrv8VmKuZMeViFDuA3opXfCaLR3LREKaWs5tk2CU9RYLcDLmpztXctwyhVkfTAAGZ",
  "key3": "FsGXTynMwXm291KVCzbgbZEn37awAcVwtL9pkU1wENn41xTVjGb4MmRQ5VEdk6Q3AKgN14XK11BKDUQFJjaXMHb",
  "key4": "5MTEjJFZv9PCeyGKYbpUTeT1wTspoFGoodWofTpEY7TRbtr6iGT9mCy6A7VZ4hDsmvwW8WU1Mcj8SnSVH5G3ReBw",
  "key5": "3KrrVgZGpDJ7jUCdUBQSddqfSfxjNr3WA1t4qqHcT739Nu22KZvtpunY6r4a4TgjreNNN9qux1VCUtLfU18RasLH",
  "key6": "37V4rPCwThrx3WUbLBfUPZfvX4W3WvK9RttnDXGJz46c8agH14sGwE6tDrxLAkuCWNodDL9i3XXC5rBDrb5mbqvw",
  "key7": "9MF5ZugTk4mdMDrgHmJKy7N5dVRp8prRG5e3uU1havwybRDpBmCSQuqBSLen1L8AZge37BV6jdi59FBkGMYLLRu",
  "key8": "29Ps96S8dAorko4RCzZyMZrv7nTtjGegF3RBy49y6ftvyPthWEn4zFoQzAHu8jbJvyhcUPbuDWxEEiF7dPjqJJ8h",
  "key9": "5euYQn4iBuwH9pBfxUF2w9pUqSyWx1eP1PQEkEueUTdLi2vZiQR3DAgaM2rggesMxRYZ2YzKbkvAxUit1oafoes",
  "key10": "654ed1vrxYJRUstnD93C1PUsxVnEVeyiHToRVHrrCqVn9MtiyoHCB7HgbXwFEYSoMD5nHthztZf5gUW11ZQGzNUZ",
  "key11": "KJnWDuwBW4WDfZiuryYseVqw5dhmFNvB3JZhSQeYNkRfnSAUWQNWgxCSKbQV197ZJD2q83vcwbkQqSqMTBjQBfs",
  "key12": "2C3DPpH37wiEMDu5Y49h3yfoXeSgq7Miyb4T4UXPEYU9swsMWApodAcnBWDH7hbVdYpWY9NxRikH4G3d6JqCBa3j",
  "key13": "nUAmPwQj6sZtPoEH7xJeycbhmRFRLWvMZfz4zefaFfDzTdhgxHu7XMMpQ2DTJpaX1fVQ7mSeTiLAeP8zo58Z6fL",
  "key14": "2DoABX6NEWtNsaRKeeX33Xcc2fxUgVRZdvEXXbLSy6aEeGfW2idPEnqYxZmgTc4b43dWiVBroso8nvMJ2ay5KtA3",
  "key15": "5DZc8rgApAqhMT6asTWh8cuVRJag6D7isipUBRZXJgwzXHNFG1BFZHYfeACTBmrqsH2NKvrGgi6KDskuFeVT1wcu",
  "key16": "ECWuWh83MYxgF5Ruo3eNVqmiF5cSLUkb1GZ9R8TksA2gaybFXstcsHZBAbFeyy9WB9ve3nfVFrbA2x2ihky1scC",
  "key17": "39CHf9N2fsn5uC8cpVrRpfQDF444ZRJavd48HC2WjMsPQsoBXd5aszwqbc1gcwN6JP1pnVSNvRSBXEkkRAvXAQZM",
  "key18": "f7p3Mj8AhpWs5ibjph92q6TZ4L7GytNdoyjjPgmiAM7yLp2F7gybNHEr7bQGh4SddGZYRQx8tHLVwtxAKaj82TU",
  "key19": "4u42pdPCivdprwTxW2BCxoE2JcNndN6LrMhW4jtAyvhJgCMp3XyJvkftZmUA9JrnypUkodbRJUmfjZGKaLKnRbaK",
  "key20": "mEwxLagFehBRkmqN5gKmxmRB4yWVjkvnwhzHxw7ZKQvzkYqYvUYwXpVEMU5FC3Ssz8tcu7VBqoBuqHsf5r26PFu",
  "key21": "4g81R9ekRVstV4DNYwiCMDwQJ27kKssXzTssBskUkhEy4ydKTc5wekgt4w4kTq7zQqvgsTGFogiHLmG5hzBToQja",
  "key22": "3GWXJo3MqwYpBRdRrKU4YyCvc6vQFKHRvrfoafEt3MUV5RhGNNBrbLgEV7Su7qS7ZKZbFZKK8wY5z6dJoU1j1svU",
  "key23": "yrsbNZA4dpn1NFz1G7e37VAbxfn3hsHxnzjdYRurJABgvZWh3Mqmnfq65pcVvBLJyUwqXFXfJCUustrEakJ3uuR",
  "key24": "2vfXKS85HaWEPGyZS6VBsGfcHoHyNBozg5EzFKjTx9Frf6EAMHv3fHfRh6M827xE36YVYqn2HkXRbPxmvcq9Dsge",
  "key25": "4o5fSm7L1jK1QgZ4NiMne7ryWsUJewpSGZweeksDFrBtdHpXzPZnmaKFAoRtmzacaurGUDZBmUF7bGVdkAKyxPux",
  "key26": "4VZrAGEhUhZhbCo4xFs5G6wNTXctNWsWbyFtD11QPWvwCeGGNZ6gJsBRaZKo8chJpae11ZLSsAuCZskQnwnuQVQ6",
  "key27": "SBvLrJY7hveHFXBbRzawgW3FfkW3dbVeesXYL2sCCwLiAbgF2bRqkyKsyXASJxbrjJbppnK34QRA6AuM2jwRtNg",
  "key28": "3GK7fb6eFXdTmuxHN81cc1p7qHzYpGfjDP66y6rZJVVSEgrSWmzud4wtdBHRiWy44mAo63FfiU5jKqT2yiHCnNN2",
  "key29": "19tvVpdJmWEY3KydNJe7A9VFnDqjsLRsxVM96AfncxmFjeHy1QFfj48BhwzW3cRuPKbCc8pxRjNwG2XZfet4rjy",
  "key30": "4zrqtSiDSaV1EouS8VhLpnQSo319LPVWgVCUn3J5J4ENb5NxpDdAoN1oQ2irfkfLZaRAcKQS16CzaFAvLYdBJtXw",
  "key31": "5e7qREMDaCRzeBi2dRwGexm661LJ1s9hQGEBT4ecYhkSXoK4fkgvFnqizzRPKhiC1Ab95w94GP2v6mVtqnQghqBV",
  "key32": "4zF9TodFH3uK4BF74DFRmhTxeePiMpxPiafrwJMzZ3d8T8G2LS5nRV1qiJvA7EMgVarJXrBt9vPVFvPoxRzbP5Pp",
  "key33": "3X2v25VsMVahKgv7bKMB3wi8xJ2oW2VRxVYE8NQzBa3yMq2R8CmakQCzFqQpsRQxK35C5vGVDRDhSFb4jqzVAbC9",
  "key34": "4nG6Qseg7YL8yqAN9NrghndSQnZDAeCic2SAkQod59hWxkGGrLnZF7TQbuRdrwb3oAAWtDhm6mTaaM2amwnAiDC2",
  "key35": "5wXBmvJqnaSZNtAeUnUejpDuT3eDzsEFdjNHR1LLz93mHMZCg2QxcLBv1wjfAAkhFE2rL84rkDxRnimsvy74Qdhi",
  "key36": "4WhBoraa4ti1FvxN5oJQFV7GnMdBkmz17svYaSXvMVfBJGGNJB2cjYc2dBtNk9CPdQqotriyuUsh9pV3kiDGvHVd",
  "key37": "4cLF1EnDs6wScKdUUXvgxxpKdUYYh1VTXS9aPwr9mEtFe2xxv69Ceo8yBf6LQQ5Vu4wFqDVqRN6QW6otRpuk1vE7",
  "key38": "4YUztnq3F3dGzDWFuNmyyvDz5HvnRH3MzGLVF9ZsQy9d6fNCLCEqC62mB39SnqxbCwipVyTzpeJpcd7Q5ysPpR9H",
  "key39": "3sGm3GXQYkRp8JzwJJXj2ikcBAYRTEF9pjWoBynxXeHDc443yq2NXbFycUVtYfuBcz7viGrS8FyUVUHcRiqmeuGh",
  "key40": "Y92p4ooGzXVSoRM9fTHer5DHpbqhqY5VWgTZNC6HVq2DwSCtD2TdFdo24ocY2mnhiLdys2kZFmgGiFaseDohatE",
  "key41": "2peShZFhjC5NmJi24TH5vLLe9cYQ4P47RXwGGDXx8gmdGji6GhiK4chSzgesPLTyxEzzPMvai3hr4ef9yz4beAz2",
  "key42": "iwMEGV3aKjqu9zPWXTwhKHTCfevzR6sfX9kb1PokZZZNY3zZQEzyVpLWvkZc99hHpurTLcJS9KiCCXfHmwvLfQr",
  "key43": "TUtZCkUPBx9Ruw3jfLMvyUpAeGrFfprLqH1HBmtcwAKvg4jRkQmz1WR6De1NQ6Q8eg7HbKVLcP4dqGiBEXMhGLv",
  "key44": "27s2RiBeQVTc4BQR7ftjmnacjX2g9rhzdpbFQPSUazgK6g1HVQ2fbFw8Ve8MKCFF9RGdjDPdb6UFz7HVWMzBh4QT",
  "key45": "2xBPxTvfnwxpsP9KbYrvrLNZNryUD5ZWSWgwtHaV6LFYssTnEatpM75YFiuqDatqaAJrbY8xvgWinGaKcJ3Q2dPG",
  "key46": "2sqhLK2cT4z8MMQfJywLbwm93pUYykDGjpfjqRm5NiaSPLVhy9oNrWpVUjtHwciQsVaUt7bdQnBpJTiFAw6wdJc8",
  "key47": "2VTvoUW46TzLW7CoTNkA6f6tXKCThVjxMwqjK2BmoNTkKdFhQQhv4iSSNGX4GX9QxV6z4SEGpk4YLUZeB4fMBXDQ",
  "key48": "4semn71tka6eA5sAPYWFtkjcf87cZWPNo5VJRiaSYYY3PRvoKeezM3JvqwcpRjyK1oxMoXiv5AbLdSJsFeSXmeWN"
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
