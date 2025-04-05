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
    "4sT6TitWqoLRTvek14oTBGYEqUDXvemK5yL6PbMFAKGYY8LnwX9ugyhvYs8GjbZUNFREuKJ6ADhkEGANjUWN7dC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XBWVDo2RVdKeUWMdxrEMQUAtQ846XeEDPGaXFMyutNuAe1qFjrW9pwd1vbHUJjPAo5uKgGVFG6sLzeU7ijQ93W6",
  "key1": "3xKMZdByXqN8TZjqWU3wbomJ9LeFifQe2qdc7uxdqXgXWqYzqe4eNLNai3ubQmjdfNugeUcCAPqMa6EhQkje7oPR",
  "key2": "2KQKfrvPpMGDXt5ozbZTSsRAVYJRMk87jfnrDbop5jyeFiF4vqd7j4PK5c59w9Ys95TCCxi9MqmSsZp88zVXmEqe",
  "key3": "45PWdpY5NwzLTiBQMnzVXcX4V8vYenzw1EUT5VyMNgC1ksnTu9itMwNttZyp1u7UqDuf2Ty1fh7TKDSRr6yQnnvY",
  "key4": "3rxKuwZjz8vMvEoC63k1WUmmZaWRvLTnqCJtYAN14X79bP4Mt7Q7x9mBV6AK89P9vgSKxMP7Rm5dpE9V3UzXk2Nj",
  "key5": "4gC3oDx2HQc2u8TyB51WmRbg9iDxjRfYLoafiqwdfZhsoS4wjeSLrtqPV4YvxbtvWwSDNaZKeyjffS8tKESRqEZS",
  "key6": "54eJ8xp1WXaE2roxSxH4jWX9Yk8S222T36PAEKLQLrUVK87BvzvsvZXhHk4Ccd9NWDHUReUyegzwKaid5cPDpaCQ",
  "key7": "212SEaPL6VpU4u1qAXYTszFedjfAtRZgCxkh6FZ7NgRzV9eb1Y5ZtDdDdJJqaAevt6ru92zMkUQgxwsaw3fHqiZS",
  "key8": "3nDAKqmic9WjoXN7nFd4DmnQJZk1yNNcMA4hUgB7AeaoLLj1FT2ztKN1SnBLG1vDRj7Qf7duEUQykdhujAWYunnA",
  "key9": "5BihnyC3eTq8oy4dymXhfHwXxkWknCPrFhUP1jRxZEwV7oUfujaLvSFqikfeGP3Ebg2tRo1RG8y4xvxy12ToZS44",
  "key10": "ZT6UP3F9oa4BD4TnVs2wgfbGCUodZVAgXzxp1cPykBmqCnQXX2w2wxqEbssMgPTpEtpBJwHn5rcWM5tW3mn5MW9",
  "key11": "445EZYKydYpdgwBEDv4Uos2zgC2upEVLrf7Jx71NRgSyxtS19aCcyjAyWVsyDWbUmdyDMpSLHfcmWPcE2CuEy5tp",
  "key12": "5gkHBcqBQrjBxxxZ4JNUijZAMWtwyUFrB8TMQyReS1sGUTX5UqGrD1t4o98C5nX5ia8rvg7g7SExWsc9UcZZMDq",
  "key13": "3TJtTor3kEegx7ZAHggTufJphXfaUGPMN1J7YTnmmJAGqaj9pu8bxt3MhhDerRe99CLNYwzfiSqrVqFKR69aTUZJ",
  "key14": "nJgtY3t4fwR1WQHvhpm3TX6C8n5pP1MEEgET9eoemooqgXa22oTvSXHzHjVGbC3FV6AWBg3bXgMSevx2dDhyNnd",
  "key15": "6cUqRFh76QjQ6DsTtrsC7ioJj112XdWfhXcAePkigAWRtKj2KaZpLAcXZbP7MN9Gva3URWEME6rcYtPZEhAX82b",
  "key16": "gW4gM3xnwQ3xHpjhMxGJhfpA1z3rw7rn19kX4NsxCrdDt2E2LrqBBEdaiBuAVSYUXrumstLzsv7WsNZaKE5Udp5",
  "key17": "5MQzrG1zXRAaVBGTkHHmya2ebYDPyYkz8EtMTEsfaeQWA7bBjutbgcDkHqP4GRbAo7NVwAW5eEx8eNqv8yXRnyWh",
  "key18": "3xh95v6Jrog1CZgZEqNSHFYEsguiGTnVcR3Ee5uxv71YgiJyfqPKyBqZJQV9e9pWh8FZW4NBpJw8jYRw1v95dPBo",
  "key19": "LrzRvHwSa1FQNAMsUpYPxSmU678vCgHgBxpUik2uSL9BH5n9Qur3THfwBqm38KPirvQ6BNxXz75U3YdwD6sZruw",
  "key20": "3FWq2JJWBJRGNkgSePh6Un4rZszPZJb3NGthxSBY9P2ytcbdzb5CmAZbQpkugw1gVLiW54UTmZ2B2KfiBpbYQMwk",
  "key21": "d9GrgfRndm16TbfjnBJUpTzJZZDyUp7iCNKFfbTgZLmxktmpYVCPkowvSkE7hRaxBzowuWW6iRzzhM1uQHqsmGE",
  "key22": "57xNyd6apmmrsUjHy8zfgDFpVQkrfofDRsFX4ELMtuTCmtZ4ULUbLddyKc3FaeYi6e3wmptWKJTsT7WqjzQKdJG6",
  "key23": "kgszL7m84xDYZtTeikt4QpDzY8ivmVPEXrgifXzCFxvBmfNKMMY9TSWBhxWPa7xf1x4w9UPv3igKAHsPNBxRZ3S",
  "key24": "3aD141mPDFft1xNGRcCVVdGmGzwfSM6ThoUC9GFzyme1zCrqp3d6cyyAu59Fw618DzDgyy4PYxfG7EUhmYFtTTVK",
  "key25": "2fMFe9MuJBBks7yif8SwEzaWxzUuKwAeSwLV2ftBLTcNGgH193yQosHnxWqB8SFvHLpEs3TgytAdT8jbr6Xsh2NS",
  "key26": "5JbuEG5XUfVBSZpmtRonX5FTMkZCwMy2vS3xkF4bhMMPi6he2pU6f9v7smypmgsstkQtjQBdgKaRFLZENcm6adDH",
  "key27": "3c7Vjs7FYYF4DytDQA2SfPbWFbbSMmtjGJo6ZrJZUrM184XLFczqv3vk816dCNoC7XKqq63uev6L1v4dnSWzq5th",
  "key28": "4cxmrVGCKr6AwnKPB5NvcLs7y7P5napU3noscYJXGa8H8yZYRSu7mB7ibtHxNDQUzWVCdoy7uLMQbwDBVE8nkz8a",
  "key29": "5BBrJkWPeBDKEULRzRaZEPikij8dzUGS7insoLqRxgkm9y34awgnAKJNJHV2fjszCi7khpg3MFUBifiYqjnuMSCm",
  "key30": "417fEGFEZVMd5W81oG5meamKg5Mgrms6zpBU4HjnoJY5nnLuzmST8XMg9yppD6qu8hNg4acjPnBun9GeEKGRHVBU",
  "key31": "53XuLZiAXf7wpXoKaF1pPGqY3zHncoK7aykiAvR7xCoAadLxZ7zPqEsBA2fe6YzuLC8baAxE4TQ99LLko3RpHu7L",
  "key32": "4DkJGVtTDaNGg1KCTe9vhbYjLBAKSB4q5mmcbPExYp38b3V2KbtcxFPDxHb7d9Kjt6nZKtoCc72tNbWoTonDwM6e",
  "key33": "4YS2yZ7iWGnsa51FyzmoMGHCdsnmAjcGY2tD1fLQbbb3J3WQHhAu6xWhphuh9WjxZmtt2F51WSk5xLS3xjbBbNsd",
  "key34": "4Q64XuNv5v9MQziu4B7afCsbNBH9KggbKhbExfAH2tabBWSommFsphag5cehcnryyzbengBnWV4ndMevo3piZzHT",
  "key35": "46L5oVscJHC9BnGmpx3qNfw6qYtAqM7QKLNm3TtUAWVHr24o27ievbyXY76CiyeiqgCoyRUpyvdtuvQzNW5VJNp4",
  "key36": "5YtxpFSKDLQL86rzUjtvTW1pPrSgRhd4iiozGAcUBSgR81BW7iTR8zbB4wB7Q8WGH2dnjpPdZh7eVtnEVooQ3nXR",
  "key37": "3Wb77BiFCSkRVYTrSSXKMXMDiPH1VyohgShHYDs8QMeELd58746xdpv6kp3HtFj2scrmsy9xNZQzjJrMeANx3mv",
  "key38": "5P3U7rfDk99999JzoWJvefRYYYRVmnmjjMNQQzMHB3GihF5vw5bknRiJ9T8DkgrFMyYAxy93k28wwARWENGpWuFE",
  "key39": "ukLqvLmwXAaeVwj6hmW7W8rH5tvtx85rZsb7pLJXzf7HSbCMPRgRda8KiyChVrnVNJpRn7mb5PyNZc6kz3NPPXm",
  "key40": "M325axPozRNemH6Husq3vQD2EC4ku1AeScVwcHJUQhhZ73ReRXtriCGDTo3Ja2XEmKwzeRwuUb2skr7LC9czPMn",
  "key41": "5EuWLUmiMfWcsQpvAZj3WTj5KnBbV1xNChU3Zmif2Cfp8EXSVST7UxdAr44w3GTWMwQS2FvSXyw1mLqBYQbCRrLt"
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
