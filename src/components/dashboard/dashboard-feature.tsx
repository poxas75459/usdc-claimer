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
    "3juENECMJmbxvKyqvvpnRL13JYtpfsqSk4Gg1AxNqAthrrgMWeCUuiQii15q9YANCt3HVvrg6ftDaqwZoerd9ddL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B915BegMjQQx8eK2SKgyiwcYakY1axnAZEuXwpi456Y9WwULZC3egooPvMCBTtqvUzS86kxEjXoVi4mDbsidNiU",
  "key1": "Qm43K4sYSgHnrd8oMQuY51NoE9EftA9zXkhsmfPRzraxiKtNKkoWDRrxKZDRoWfv2gKLvXCTvDBPnPsBBDfMUB7",
  "key2": "62zkUfiZeg5M2Kd1pMfMMdWriAEhh6moiWxLCH1pmFBZUUwx9t9CGJiWdNME6S77L4Ubpr1qpGi64vuY4y9Bcamm",
  "key3": "3EbkQYn2p9rPcL3Mv83qCcvPuAx41ipkc2pry63Hm89dF8Jh8tromBZ5LhEXWCWMGHUTQgTBhRm8UFCwHdQAxzFy",
  "key4": "3phGnRowKVYY5w7LM9VKgLKF15t5hhnwKtBtUdnNCLCZ7xKptPE1DmmLLyDmv1i61p19oCBvnaVCA6CeDkvGaZ3s",
  "key5": "pCWJtctcgYGDUiLaFq8AiydswqEDSrDcV8bVVPa5KXWrQc273jprWKaScv4bRk9q7GBTrEFS5jpxRhsX2ixzCxL",
  "key6": "2CP7Bdvko5NhprWU8mRRoGoCtXDndFQXKd83z9qC6sGiBu9jRd6y9b8j7487LihcJHUHU7ffxL2RmD3DF5BpmBpm",
  "key7": "26y3jkhxTTCJaNxLLHJj24gWqJn44cf1fgCt3Fpas57PBFdw8RF3tJ1XMQYgcDnAcCG6q9WpYHKmsfTjCNfLZoRX",
  "key8": "3ustxBTTSKpxNKqodK78FMxb4zTWuK3Su6CYdN5mJEq2TbqRFjvFFynrPRDtTgMjATj3RqiwCUaUPDhA1RrA1Wbp",
  "key9": "3Ah28Z8EMsF8kg9Kah7XjgwCqkajzaYBR2BgNNQ71sKxG4cNkqqypgqqLYQ4dDRng3SmQkMid6s9jzNXzhMp5YVe",
  "key10": "4BHNzqzR9VHj3SobkRkhjkj4GNqJLZUoU5xY2ruM4wsiJAPsR1ei5spi7PgkF44fTdVXq25Vfpa9gYK1KBRYEsEZ",
  "key11": "2bpQMvAJ6CboJD77gchYvbZqEGvkW1KgwB7zPGQXsgsdCscXZTJ5pGDzZvAxc1x6PjJLgHntC9cJiXvDW3WxSa8N",
  "key12": "3NQZj9HXDjCfDqMkm1RYUDro1biJBxfUEzoYZbGMVAdNwaiLo6Lyuk4rfZnSP2bjyVEPujLWJtHMnNPCSRDzqMig",
  "key13": "MYJRVy2Ye7wKxHm8y4xvMGceT7jPgPuDK5oy1oC84JnS6YiAB8azuiVbckVr5yrLizDoLMGXu5oJ1CF6VGQXY8L",
  "key14": "45mqmg9oojNJSt5NKsJ3zG2CATJ6HRtk1hMzGdrap2ZTD57rAuRunoPV8jXxYAJh7msoK53T26zNBYEGicmv3owY",
  "key15": "3hptVeYX3tUvcPM1wZYwoXDj1YfgDsWWDCd4cym4nY2SLsv8tpfv4qBMcs5jZqptsZRissJF3Tm4ibjTVWkmiNgA",
  "key16": "5wB5fkGK6G4PAQvxPCJrDHXNyP4x4zNr7nyQvFakjKMQXvNCGPGJwdMQrYEK2Angr6jVnSa6T5SR8AX6YghrCS68",
  "key17": "oFE7gL17oDVtqKhfK2VYFy4d6aui9raXVfuFaeNEvxm2mkmwK5AjyogScDUw2YFxcNgFakmuEB5BrFsbEz2PgKX",
  "key18": "4U8dAMpvUC76tFX58HTYdEq5kBx1MhKLKfsyCBFVk5X5L3GDLFrbB2FwG3JoJ7VnxR3Lszizy3CqHpczXuoHdobs",
  "key19": "4guzx5jmzXWLCs1bFZq6SGrJF6zrV3YNzvVeVGCYwSmyXPgbmxdhEx4SxjtJPMeqwB13VHvr74uSrZCXhAMABLAx",
  "key20": "33h7mAGiEfcWyfKWUcrxtPGJAeQUGNwvfu6Pkq8oGqe6dctUBebURyFg4uXtqU7Lkws4RVQdsVW2oPvmemh34nHP",
  "key21": "4mKfnSiEDrT4drLTcyQaeyXpxLeoyV1DwuxZyhvkZYxpoGzHxpm3sLmK56mpjcE8ZvK2q5qjwmagAHvU9FkwEmoV",
  "key22": "5nEWYHUc3Ag7fHjx223zJs4WHs8fvkcRPihrx2JekUaYe3HRj1DLC6HwYLXT3P9W2kDwvkwyP4ecKnbxqTNW3Yub",
  "key23": "4KrRU2obQJ5zCwFLsLRtzscSovvJuXV6WNezYXA1QJnuUqBHQXLicW7sNoy6ZgAqQPQNKkKo1LdCS5XLDECAb7rn",
  "key24": "63tcMumGahUnmfw1u6KL1YptDx7UycsNjQMeRUv8XKsP37qHFDJHuM1oyuPvxNueFsF9ByjztpZm3xWBYgBSL7hy",
  "key25": "5h9swHuvmx29GewVHDiMs7b3BxnCgsCXGg7qx7SdAbTxmQgwwC3Ep723qoH8MZPrQPcCj4Zhwzm2EY58LZp6RTJ9",
  "key26": "3LwsTmkWZK7XSRaW6gTaAAQ9vT6yj3ftx8nMf76TeT3cDc6CmjWyUs4hiWwcZmZWtUqEMi1TAoWHeyEThLL6q51T",
  "key27": "4SZbuqxj2Lu5pu7XsdpnpLhKWPZajwLKdyBtg2rGW2LnTo7bFpgWTU4GYW7ML9TaeHyPwyBwsp3UN1VhXBUseqhA",
  "key28": "3jPY3d5VTLaGwTjwWeieGUZmb1bhsZCBbknJWVrFV7MTzyUgaYGhZ9CBkkXc68LoeYwjuj7Saicd99tmi7Piyy4r",
  "key29": "25cGLg7mURLaPmoZ5Xh8b75r4bZjPvZBSEn5cJJAbX2ZUjPj5qnfGCWaH5V6pWEaav8SQFMFyepio2Ai6m1e8z26",
  "key30": "63asVigKEnAkDPvdxvNXSH96HopVzeSLNWJvXzbgJ7PzrEJjC4GYXPQ4Raess1KcvXP4SoNRbCyvCQgRxgPi558s",
  "key31": "5VwwSRpTUVX3xymyNy2zku57BPKu6czaZMEF8XP6QhmgJ5EJHyft3rTxf5kyNH6HPBZAGjmw3tS57sfRG4Kk1Zjx",
  "key32": "2tqKwxfbjaDB2uW3Nf7twUUjtwDrDvafjMAZXLff3a623o8wjNG3fkLFRM6fUmRdKGpVbsenwRwh6YbUfiFibnju",
  "key33": "4CwiTCuZ6UgrmLNT1UAAGdJPZd3p4CWZagjeqDvDPivjPhJdovD3bjkvqhDDsXLyPUxF2Lh8cDaKZkbECPAW6e7Y",
  "key34": "4ys97fix7nWfKXLruyZ4BcVx8QVDXrWAJB6ZMnyQcsteA3rvZnQavZJNA9oaC9gKXt1UqTqfcBrwgYT8VnkEqb7Q",
  "key35": "3438dnsV4swTQx1DfMw5oE2CPKTEaoHjGbRDVcwoqRdT2ydXBYwvFLjfD6ycmiPZ4QsCnfgv9GrJayicnLo79nCF",
  "key36": "5R9T5b7EiKem7tgcjr7KCE8ZBEuidazrEj5MfYD3fJ3vaft4oBxu9Z4S1L1vs3grBTfhR6jzL1WkVaZCsuXBSpyJ"
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
