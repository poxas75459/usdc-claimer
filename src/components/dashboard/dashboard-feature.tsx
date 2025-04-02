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
    "42jdWC7jSrt3oBDZ8o4W7yRKARwaHvAYooayx8hrR9WksECFCadG71r9eQaQMxqLfXCWYgRdgTv5RpJgM7mTUkuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9sMy1GQ8stHa5h6eGjJoR7XTBroRi8fvNcaXVVCYo6LCfv3cp7txQQ2343HeUdxeA4rzvpZNB7QB28UK9Vefp5",
  "key1": "5ZZpEPr3svXxcZNPk1Ao5K4utQJ5esFLaitHiYyHsMtA8gD5ECWeTzz5nhqpeqfCV6EC7F56zjb1VbY33Lc8pxqr",
  "key2": "5ftreAeFEdgBmQAH8akAABaEYrBA9iagm6X5AgpHR8ZNjfaXs7zg1PqY2HcFQvnaQDeEQwYyg6QpxcyJb9tceXbz",
  "key3": "3NsG9FZ13uHhVmR5uyszw83PqAnPH8tXYHZBQ7VXZ5GXqmtQFgdAozRnJRY4T5j8ygxUKEXsvSaRLkAf2X5MFU9V",
  "key4": "5NKhtwSVN4f2zTiTtC4FjxcknHYkafE6BUeiGqveeuqcRA2gcVjGG1gRhj77bk7AgNF2kykWuLrjUX5aB1tVbQCa",
  "key5": "3axbBAd588Zu5oFe8rNdTHaLRmczD4MoenZHuHjdGqoujoH5quMduQzYy5YRUC5AEm4zhhKrARq6etPfCEazrZVJ",
  "key6": "66yADdu9RgLy9HJrPiWPQLDzqZ8sGbUvBcJxUpGutYPnsTtfk9NKeJ5bzppkBRK8jUQEbqMCDkuvabrvez9kkUdq",
  "key7": "4r4cV64erukh4WoARVGMz6eWpdktaLeFQwtNYKfgjCEM1i7iq8P71Z8PjrLmYBWXxMjkd64gnuUsqjSqK4EGA6XV",
  "key8": "2mBvsZQ15sPGrjC5pVH9t6xcfLFugwbnuMTFRJrZLZ2NvT2G3JsgEjHT71UfGTwcALt9UxLiQGTnrVDSb5TBfyaF",
  "key9": "4cL3VXokAue5Q8EBZUzhRjDBrduEQp8AzvpDkg8hkMw6MDrNxV8j9Qj2caDCY28Gz5iBgP5eadb8bnGfmNHPjnJJ",
  "key10": "XsLGqkt3X6PSw7gnvnQacBC3vJp72QFGV4KMcpbs6dHhzHh9Ri5sA2vNLn68LpBoFnv9qJkXVvoubk2uLoHhoXJ",
  "key11": "3qCv4wp3Xw6chp8P9giDnpmTrgAnEhnTriWpHSBcDCgZQVjupNag468HifiU2WZi5sKT98N57adHcduZfjAKkf1z",
  "key12": "3jFq8LGD7zqjYLhBZ2gUH3CPrKbMptXoZ4sejxpQujij1inA752qEyrYiE3deAHkQHXHKrvKXXunSSMX1MzwwRDG",
  "key13": "2JXHRgoDtUGBQJ4EPb1EQ7Fb8yrP8pm7p4fKTBykbY51uCgT3hudUerEUBA1mijZUpex1oA6xsotZJYFvWp3oekM",
  "key14": "2GKFzNne5e8DgA2ZiPD2hgqJotuH7qpvnutCWTP7XZQ1vs8R4daLH9qTcRL8CovY7bbxEkiqmhEFcokPD7frP8j9",
  "key15": "uQetSByehMZRMZGP3tguS6FGvJ6qbo3655jeVN93dRSyqZ12LXt6WvBPWSiTBASxhAK6qqcG2XoCBd9d1m7K92r",
  "key16": "64cgpUYGWKteffvRLSgofRfVCZ6J2qHHLBX8iFmBU5EtH9rLaiuEBm1QwAV9kfeGe2aRAyd9JG6jKTrdUnXFkShu",
  "key17": "4R6DtCrzmJsMND1sHv3XAjsSDYykZ3pGqiwrJvJ8i8wnb4XYrBSZbtgZ8FAp5qcsLBeVy4tWthMSQgq8pSdAdhFF",
  "key18": "nahbS9mBwizzQZroZVK7KipQzQjW9DgENKrJxjNa9NftteBNdFiSWcbNBpHs69neANPCFcJWdAAKck3ftWHZnwS",
  "key19": "5UtGYkNjZvNgfU5HctfePozJfHWbZ6XYcbbkDwXzyZ2Mjts7v3uMYMWPTz2eCEJURC7tiWLeCKmNhVimv5CnhDVD",
  "key20": "2B86zNEqtLKzWiTUXjWEG31LgYdesLGsWS6Wp6RCdfMCdXL568MpP9Ngwe4Cjsgav3XXDCys2iW62R9iDLZ1LwGU",
  "key21": "47FBYwZHj52hvbzn81xYTdaBetZNiHP28jaMUq3J3SrjWxkX8QH9nte5W1DZcWepvhKXgtA29wHMrFSVJhzHF3fX",
  "key22": "3ohxDotwDWKuwS3BcvpPTZqW2djK57wgiBxRgkeQ94SFGNReyumvmVPNprd7FUMJTpzY4tzK32GGNmdpwjWN9g2o",
  "key23": "5EQj31ovRgoEnAVJckPrxD9R2EXKihLKRsUfdSxsfjTMShrPMn9FsUwTuBFeGyGyetmDW6UZGx8fNqDwZBeGYVnS",
  "key24": "4QHqKycQMHvQDZxhkQvixcYvABooFCf2W22FsZ5voQTzH693wczFaLyAR5SrNk3DBJFh3XBW3amENMGHCnQjEjo4",
  "key25": "47iSJUV6MiivKAwNHUtXebXqK3oeNDo9yk4DpMjTCCzQZHAyjDCunxVSnJicVAQo1idRmjpYgS9Gs3D3NuJR4kdX",
  "key26": "5Mhbr38joyg2odABjzqVCD162GXDTUJ9qcaRBsk685ZQnVgb9eExxNP33qN5qxatBhKBmVW8bkxaTNTaEZHkv25A",
  "key27": "3C26JbqHs9FJdMtRPwn4MSpoPfJBqd3q4LfqU12Bk1dtf3FkX5ptrz3dAJyKzfQ6jgHLAoeHNNjVPuqh3zQ5Spzp"
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
