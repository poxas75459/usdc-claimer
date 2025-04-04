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
    "2Yq9QCh3iZc13VzihUEe3VyhpS7NKFcrM2q2vkxjpi4HhwehGeeSHusDfcg2iGvovVShhgAquBUCNkcaG9DWxXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeAkmzBY8F5AUp4WwnpADKHhHtoHYGsaGvdFrYaufrsiA32ckoEtLLAD8XGHUzUeGaUXKye2uJ4ZWXUHUowhqpr",
  "key1": "2CduwUMw91eYs4LDN6Ks66i6AqTsQNwqTc42TvDVZPvtXAXKMLGnfvdY4dhbSnkNjS8kx3ttD7bKfSYdJg86yyTr",
  "key2": "4tPWiY2FxEAW7JEUBEQaNvR6yy16tqjE63XZznRpgWBAieHGCTP6RFnsJRBKBHB2CZgNnn5Di367hwhW7pK2GPdE",
  "key3": "4pT9wLM913K8EpuGbkzKPYn6pL7dyWPZgpsUF2hPCCcnesbzeo1xTPCwRJ6NPJiEgyfzGNcR39ash7bCW3om4uVT",
  "key4": "5qGujAm7V1xq1H1yjaamtGC22Dg1grrQP8U6QQ4CgGjRPwr9Wymb2JFQCECwGXRYjBanjs3FRZ3m22CFjKt1ioEv",
  "key5": "5DT9NYu9veeQrp7ifPhgnjHseaj6gKT5AuKQa36yFp4aRsam1JJS6nFyRG7uC1oqYwUietDiYwsLj8fVKMxMKHPS",
  "key6": "47nczbRFiYgDb7wknWkuGbh52pN2ipFQwE2MRj7UHe8WZyWKbVyrkSyFWudK7Qag5mvH5esMX8iS6hCwxZ33QrE7",
  "key7": "2VLY9bF7m3StjMeQXNsYvP3chg3EbsLNfCaHMLgnkwoJ68KheMDhQ7RsbaRKTotckmfBk1ropQEji57J2D1NjWcp",
  "key8": "3NV4jpkdfQQ6rxbyoGsXmL6S9U54jTvTDfB5TmmGub9FLVbNkoEbfrYkFi3CXeaZ72YXhmQzBddxKLEMdd56pZp8",
  "key9": "2r2fLdNWwZGDW1efZiQZFurQEkezu8ittPVf2MK9EFpLRhVdAV3WaVWyRsyyWtMcHbXU378i6mztvRz9rUpQjcZo",
  "key10": "3grGa1WqLK4Ckytwqf5ZgHc1FE9LvYCkcE84xMsw1pXz7zexPyHwonjZZLogPsP5K6VK8xdUQPdWGCbzgfcFhV8g",
  "key11": "434sEn2H4otAjriR9VqBigtqDX94mva2KzebAKXJ1Xa6HqkFgQYffmZXh6hToATSjnzU5MvsRXaNf7ScYPVsi21U",
  "key12": "4R5uD16ZnzBqL9cqLuFHd9HUcP9ERuLozQsyaF8NmWqjqb3RzSwJjy8jgSqjBdRXYbyoeN9vHK3tWtGjMCWKsD5p",
  "key13": "79LqGtfax6BiUAaatFxfMH4Z4Hd5pMEmrER3zV9Ua5aGQam4JWVQK3YGhcEWZvh4Y7fTpukEgMTSsQnMBiMwSPw",
  "key14": "Ho9hx3G5R6d1TUEYFZottawoDKUgZraFCkmuH7Q7DBggF4rB45Jcb8Cda73cKbcUfBto4HjvK65fQ46F7M3rry7",
  "key15": "2K4zmuC1FMgERiupqnvNZEYFHUSB3455TSfwbeuxmoY2aCZk5V7nanDFTZYsJDV5Ce3UVktGFQrK5vDLgm8NPnaB",
  "key16": "5h1LijWvLGCVbsjkGn2ZfWNoUDKxVS6ymR4W6Na7NkyxQDoaHUabaHjqTaRc6dytN6VBQZWudtYE2PvWsiNwfatf",
  "key17": "3FfRCwLUG9DyLuQ3Z7Ejms3gVZEkmLzMiczfSJR4PCpT6GKcFL95xgSup83AqgeScNWi53H2GxPWfPZXVKYKtr2R",
  "key18": "2kFKi6LZnnx1z2LuH3QmPrTFre28gVJb8wFCFMgEvzv5B3qE95D4Png71eLy2VW9LQy5Dc8p6f8K9qAeM6dXC7Gm",
  "key19": "Fq8Vnbeg3uXFUsvGcWexwu3pDCjqp6XXgh6eQH6sKtMrFSJQ12UQWKrkUPMWgtXPbKUUDby9nqsLiPNZ3yNqx6U",
  "key20": "3QsekCaoP3cA4zj6hTFMintrDHXwdsQzsgRLzEFWtoyPbTRTX8ChFqbGo92R5BCYYuKw8UD5GDEE1wMCVdp5Xpuc",
  "key21": "VYFT8vtF1Vvowco6KiWEwG3Pot8fLSHgLCLF82ZrCLmvxjUNfZtSX8ZcFasoxu8RLSvZTFYTwNgLdSq1DXvp65g",
  "key22": "3KW37GBKRuHvr2Tr3vKY2VPWVBHTTwwihekav55q7i57aP54YxDNnKZ8bQixZTjgaRoabuogBWULSUwaWX4W7NJo",
  "key23": "5Dx3wMw8suh7vrjtPSvd9T5U3icA1b1WC8XJ2yn2YYgESXAEnhBpeTrqNSviFiZkx6rJp1dNaCYqSPgL2HH1Xx7z",
  "key24": "358mdX5PCb2QxHwDd4KBH23RW3tLMbTYasGhcQW1WG9vSAqGdLutC26P6c64uRYv1xpqmvkYtix3Nmcb1NGfh7QL",
  "key25": "5KkGcrUssCbdR9XSQLZcYVGGr4f2BEEHgWvP6U1o455qELxuzfL2fHsQ6ntCq1qK9B7ZudG4BN3z5P9MHebxyKXt",
  "key26": "5FS9ppeWNATM94cTmspZrLSG3HCxxfwjHF1ghxMr6nKDt7Gq5QayM14wQKAmbEwhWyQV1y8gP2Q9azzoeyVeetMi",
  "key27": "FqG6TuN6pt823WCFSptWBeqbSUzBKhkTPzcqUH7wqBYJbvY5aGPwGP9JMKUowMvNNRh2GGSCFcfcdbywx3ZbcCs",
  "key28": "4zkvXDimTtHRwNNAMBWWZa7cxD25aLfVtp3BLyYXECo88CLpf7jZvKAhjgPjQyJ9C7GRyvwZXEP741XSHdwigf7v",
  "key29": "ax7ovFZ7wfupWntDP2viZenDM1wW9x32grvm6VBNQqEEFAvCefA5KzgjPyCBtGM66UBSw4RoWHS2deTwV4x6w95",
  "key30": "3Ax2iyFqRY4v1uBMdUZHoCNqa72rtQMCohR83GQpDsbLNQF8hUxRX6U7bWmhxEGXs8MgxMrDfkmANzUSSU3qrAWr",
  "key31": "67ZEsQT2dETGjrRCqEb6SY4wesXT6F7aU2ethhs4dhDHsb21uRnz4Nkr6jsAUg3zE5S5j4k37FRBbxj25ZrAeKDi",
  "key32": "5SNaLeQadJtZtFaHHbrXfsGgS1jHPE173pAPxmCrwqeJ4t6JeBBijBWnZiTaL4Q5AiXzajbgKwdXJWbSceg1PDNy",
  "key33": "2dgA7z7FwBrutgStB1nE5TTfMLKv6Zig822ht2jk1JNNUJU8bvD3cLCqAHoXaLGv3bw9c4ewaVFh79WoUaHKLzWw",
  "key34": "5BN7p6dyjhwjX1F4c79kUKHKjWBnx6CqgL2LzG3ngHdxfVEUD3VSzaJEmvjnTHyGvSLgYkJHqHhogaiy9pBC9BQp",
  "key35": "Ws3oVyH7b6HvHbu9WnmLEdpzwD3Ze1LdXpW46Rmo1riBvtcx8Xi2HnnJ9YpKHK5aJBU4TCfchCWFtuHApQZcWZy",
  "key36": "eHkbxCSDfiXxvHr3RQDE5mHaHnHevw2ekUDz2Ne6Xo1YEMjfFKcSpabDUUJLBGcSyQmbYzBvuLvXFHtCxGChcjV",
  "key37": "24UkQXjvs2sbeiu3TKe1LakVXRDJRtv7ue27yA1WzuPdWsv3Fkw5hJ3DMPAkc4v1U5tk3MH3EudKuVa1DQiz1Er6",
  "key38": "4GZKVbh8E62GWfJ39Jpgwt5wQA1L1HvpkNHW8N3VEM8pvaasRko1BdMcsn59A2ZETrLYgnJUFpntywU9nytpHCqD",
  "key39": "3ci7LamBePpL5wk6N64xEepH1mtK24zKeyDt8wX62RutyBWoYPWt68Ai3uHgxAwTEzEXokaJcVreafDBamsvkZbz",
  "key40": "26zW2sT4XyJc9JGTjNpF2Xyn8wGE59V6sjsVFankTX2kboVv93NqShXKrBTk5ubPBzUGFH4mRFmrquDjWKZGxBcA",
  "key41": "4DBZVzhjctPvXBsekKZ4tSXe7vnx9AfzedmKjFRibehooAuL5L2ujV4sk9LxYTztr2Ym8K1W9N2KktwbVKBacPJW",
  "key42": "JDE1cQfzYssh71B5YZHZaHnXk51vUiENX9YZCAbZ3FWHRgrDRXivuQtMoAZrBo1ovCbKBpVKYTmTxi1UikVsDga",
  "key43": "5jHvcRozCpAm2L191tSUpshqdUB1pusxS8Z9tXoxPFWXHZQkcVuzjW9Ju6sk2GpDM1asfHpXDhYJW8ac2dUHNc7m",
  "key44": "BndLisCHkgDbspaw4XGLm6Xj5jLApTqjLNYHjMnFTBtjAiJaKPigKZe76Gcj6n9WsXXysJAumDHYVhvTbvsQxMQ",
  "key45": "3V4zqPm6UGjkb3edL1FDY8fbYGBWDS7kAubVYgNhxasre82fqTR1rCSVPjR8itr88LXruenfUVTSjDMjGPHWat4v"
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
