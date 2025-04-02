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
    "2oQdQJq4YmV7a7CbnzS7PV86K7eLTtyFe57pYYUvYSV63hB7dna1RQSs3pciDzLs4u5NbUq5sJ9kw7xkebTivM7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kgdWtLTvanrFhcV2NbfFkfrg5TztpykRXY1QE62daESLVvtUfKLTWg5Z4Txx6DVrQWs2V174iqq2raMxRjJ1o96",
  "key1": "4WSqo6K1kwE4VDMuSrhpL3Evf9Jse4KAMtzvX2F3NjbyAS1kD59ovogAZQ7FfYvQuLJFPr6tzjDM6hHP6eYeMcCG",
  "key2": "5aoxZCvRRwAaPXq7zUorUeJPp5S4RAg4X6BzZta1TsrS5py3VqmdgaTJUnJPDMCyn4crNApmsEUVyVsa2ce5cRf6",
  "key3": "559eGjweP9Kcr58ySwGncLhJiK5cHopucpPzeLAHhcqM3tHr6Ke3enxPrU98Doh6uRP1X4XE4oPEPam81N5W7MyY",
  "key4": "27Vkx43biqwqCYA2B4i5W2m6PwbSx29quHKwMK3swQhWudYXABXV2wLeFid7pbp8f5QKqxcSibqRiHbCgreDaoDx",
  "key5": "a82yJ9imgtiSs3WqJV5gtcaeZvLuSKQe46MdqBBWrn9UmuG4YrDewfqMzMyx4d53okaw1JjkqrKSfUDC2HXbz3u",
  "key6": "45x72UYfAtgQcD4VZHfqf6GQfVA4bvP7PkGuydN7jWMRtkawpRkxCYZwPfvwpLF17A4mcQ5aJGnwNSyqNC15xjwc",
  "key7": "MU53P3pijHs7VdcFWS67GTZqeSrzJkXKCGhTjDhddYckGCSKsbNAJQre8X4mqKW1ocYDZYYxfLCMAhGq9vhCNcE",
  "key8": "3fh3CTq2L5CoSfwCmhRg3PwzqNU87FeXkNxFdW4z2XsdNB2dTr8FzGijCm1kWZ6p4tn2w6YPSLDyTaUTCENKWTQ9",
  "key9": "2nP6k8hBK9BJbkxwu9bhU6Xh5NPDzqSuTu8cwxaV91uNx4k5NdVrCRHaPbNZbFznEfs4yKdtuP8KisZDf42QzVwH",
  "key10": "42hbkJkMSrz8BN33x4cbmbnx6aRurgHxDdZh9LfFSvgEpeWWvsm5qVYE868QrzFLR4tfkWr7mUW77tYMUfkSC77P",
  "key11": "3PMgh3vp2qQyMzP41ibWi3HFzsY7YMQ5FPMz5QSDnvsCkQq6xvPnMy5sAxXEidLgoUwt6GMTFv5w3kjVSmxv4x4v",
  "key12": "3sUkNLVnjDiYw4haeoBywNubK2NEjfYn9e9bH5WDVbnsG6Z92z63NKTePja5BDxhXrZB6wGRXbeqCFEArWyv8ZFm",
  "key13": "n2NBhKwtXxb8ywVSCg5BGA9dfTTDpfWC2TCuxPp4Ny3yGLH1RJppct3L4TuPtvHaf3pbnfdpH5rbcSVrCpsS56a",
  "key14": "2pHEft3r3A4dvktDJmukAf8faNppbCARupTjU5dkE5e9HMmwET6Jay5LyXs2vcrkSyCBSQiZLCf7H9TE9xVCybPE",
  "key15": "5MdTYXuBvzBisJmp7mosiVfx7mUq1Tb9mjwyp3i8u9gc4JRf4Lh42vZ4ZbqrpjBywq5sf4MBpx3cdbqEqMwv5wvr",
  "key16": "2QSGkWWaSy6VkQcFZ1xA8soQzpNZLAgJCF7X1D7WPiHLgHPYao35xHNypm8Uxa3ouk55TQA7nYd6qGiccxNYCSyN",
  "key17": "5wJNY5K2DYkJvet8KvUavJAFBCBipJAXRPAc9baP2eZ2MoW7a84kfHhLZJ6PoDfY3b2ebiRodBJ345LKVTqj2xQt",
  "key18": "2wrbmwJBofWBzSeoJHTvwQ96ru8dkLRfseeJkF8fLEAfxKDKCzxZMqmuYYZUmMKeveQCeVZTQb2euwyYscZ2pmgs",
  "key19": "5f2cwBWo9Uasbj8MzqhJLNG6NnwrgdopzuwSL5opHHseEm8SPWGmm8f7yP72XCF3sFR83TF44gWzqc8qRMA7Atgv",
  "key20": "3ehYThu6SQGmBkYnWoLbsuqyEij2DQzi64vyX7u9K6cHMkE43bfqwv5hbGYrjGpGvcF9J113vzsVmBPS6HrUQZMq",
  "key21": "2CtF22ReC5pBrVwidKrrmGfBprK2YwZENDx1f3hqyBcyUVjeyf28iRX5QHNBGzo2Mbujovb2eJyBcg2rP7Xa2HH7",
  "key22": "piRYQXKViUWnbv3UfetH7swKiqeAEJ9rUciARnEzmcY6ddhjdWWAzj3BystysQgKLmQbHC4Z5VGXG2mG3a4Wjiz",
  "key23": "VpVDGQuRTo4Ey8p3cRhRUjKueR29RYxXTHHbRNkJHFAu5r2MfdcPgbW2Vn5Xx3uYFD5XiknF3x5Qd986XZv4Rx5",
  "key24": "65PRuoZjWb9aL7SabRYGLVxtLfGuJdxmVfqaDPpELotmNxib3AUkS9N1qzVmtyLNd1fggmmY9WHZ9R1rzwhN61MV",
  "key25": "2We8sDW1JNpmn9VDt4dKzgEtVLtnWLPrvi8GuwpSvwehaQbAZ5kMaLzT1SWCpX3UwLrD6oAn6f267CW1Qsvn6Z8E",
  "key26": "5mVrkrgAmSYfSw6JoFJQ17NzKAUJ5kBt5VTKCMcPcRm4Ebci8RbwaYhifLnkgvAysNZJHzKkNXPGeL2Xjy2g1gSp",
  "key27": "3gRyirgDq9iUXFXJjhx6Nbqyh8wQ3dBnNhcVSA4kAT5zBHZ174mPf3vgVufiw7T1o1nsicWyqUKwQTUk7aKhM2Zh",
  "key28": "5FibLkw2cJC45oWMGYLXJf5Q5gDkVagB7zFY9YpgNLvkYW6FuDBW34ZctCxMDxfN8uzL4dKtbV1tzUpRHHt7pxtt",
  "key29": "VYRHGKyC27uyjn9T5xUtyeXMGYPXaAfN66R8wzeLMLM2qREJtnyESmZZz3rFxX4Dmf4hhss58KuBpiijqS8Lb3p",
  "key30": "J58DiuEzKKW6bGD5Ne8gbQU6S7ENrjPfqiHbocCjfbDVLF9M47WMyZCFPAzp6WVZDCpdP8d1xZnhXx1dpBH6qMA",
  "key31": "2ASvqNp9YbBW7Fv1fz6TeTU3eXGhdAApqotCKn2RoVmEQbvXg16rtkote2S7CinmVxwDGAvcuQoykYuEwYHnrLN3",
  "key32": "4NX9yUMEcYFGdyjVFjVRPdtUEHJfq6JDt5jwUAC4yGmUhrfyg1qeorKbJKHxPSFU9gD86fM4k6PfdT23hhepmKxr",
  "key33": "4agcpkjjRtV8jWMSchq2pi6YfShMaRmybnBR7KNCstiTyZZHEpLMd8BFZbvQL6Kp74Kx62WMQD8AVSaGHWi56QHh",
  "key34": "HrXSSBYUGCmW1KWB25FKNjnV6cryAR92ZE6oKeJNCP8ZAdAQie9AW4NJt1qCS7xfPSSHY7G5edMXaNaRCZXvcet",
  "key35": "32jZTEpdZudHJdi7ZktnJJN6EAxwWaER6AbNxyoMQXWRfRZmDnRHRz5aHpnmZFCHGVzwvpHdRF6df8duXUAJr1Wj",
  "key36": "4DzLYA92Dwhx9vZ3RcVvR1Dx2qFwWLymvAXLg7QgefB8cLyNBmFkdWAxQSvfM1UZBFmWaUSSuBKHN5qR56xXe2Xx",
  "key37": "5VbwBekcAaFUzknLcrPZt4PdSBkw6ndxTs85MuZ8AEwq4cBFB698co6UeGGvUYc4vDyRhARv3nnf1aKR2W1kov2c",
  "key38": "5GeQoggogJDmqXur6NFi4KfYjVhB37iLCAvLuvGaf9XBJdGLb4rzmyVSiAf5suzUEomNBemxqx4cfbNFyypMcQ9K",
  "key39": "26ffbPNeob7nccUjNTSg8vaAEukPeeQSQ8x4g2jtkiCWnqV1cJRvEpH49wRsVirLHztH4qYzMkt8LHm374yS8y2W",
  "key40": "5oPyAdv6mfGp9HPgYXdr2QiZKec4jfuVYJhHpD23yA8jWSxL2z9Q3AXvXuf1W6V1WiwSx1gwywgyxiT3FLUXuEgk",
  "key41": "25mQAtPRLkRFNGLTqV6BnN1JakpydWHcceUYAF29zRHL3hhKVo8LwdDw17txeQaimPvNWwNWrJwF6riJhsgKzMXo",
  "key42": "2rAy3n9VNSfHoy1GdMUpsRt6seGdiq22WAFXSnx2bK3jTvmV7qZp299ZgxCZ3r4XFAmJTJEZTfuxQYGZwbLyhpNF"
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
