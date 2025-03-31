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
    "3mav6WBfcrB3aP1AmQgsTNJ4b8DnwZmgWqd7gkoUPB73jMufWdGYB171KFRyD6r2Vw3yBsk8sxYb3Ho5RyuzTTbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeHLXRfXiMAWp5QpPDmzcsbftVyttSSAGMJmbrmCFy4CEyP1BahQj7esBW9a5izR9DY1GApEXpgGWWCSsgnyENB",
  "key1": "K5y9cuXqYH1dNd97QwmhiwqBG5QJoDVx6aqQEj7AVZDzN2LURuViH2EmSxqGc1Kd1vmgBHNxUwicQh4sS4CLwnN",
  "key2": "3dzy2SkHgdFEP2AyB4uUUgnA9NJuGJGPV3FkhauHxMXr5UH7DsirPNTvH8HsbVdMEJQpHQfQKU4EMbGkPq7nQYQU",
  "key3": "25M3XnYMVA82899fiAdSXxxUrm8uw1Y5baz5HuGU9n6tmxwRtZUwKkeqha96qoMmzXSULLtNhwEdYbta59REvoTG",
  "key4": "544T9tiCCMKr3nupFV8GRGqEfELowWADVeinKTRq84RjyKg53fWv7AHwo8HoehTyf5cPjHzEGJZ77mnoBf23KeqX",
  "key5": "5PZ31WqHD197txWqArFYjtuQtndpNzKhAW2hhs75VuDPvPW4jZ5s2TrWhtuWrGAcHzEdwwLsEiYf7mWnPmcaj1P7",
  "key6": "3D54Gkq2EwmbGCTXzhkgMKsyN9FfSEMjFbysR5DbBMcGGw9pDmrQmuvKVvQUh55eG8dXY2DEW34Sar2K2rds8HNV",
  "key7": "NmupHaJ9T86bBgbcAk5NR8UrMiRJ7XHAB7yn8SqFL1hGEcbRxwxbNmj2cKcHVmXWWS3nxoQQVfXUZRNQr76CmXC",
  "key8": "3mv3VxLhjqgPu7inZdVNV6yXW1atCHHdQau6hxTzHDk3niR87fpFtvBwN53vzcrqw5cMdcztdx7FcDj36KTrTWVw",
  "key9": "5KwT2dnM7eP67Uk43gkJuoUAcbMhgt1dbep26PWt1pJ967ZR5WjYZyxexL9e5vhPHze1CbbaieGa7181we3Rp8j1",
  "key10": "fsDrFTetBFcZuWQ4sVeqYBuSJ1MtM4nxAJRVPHSNrYaTy5FRBYcojSbebxbDEZNfi3mg2efMkXwbgCgx1t18sQd",
  "key11": "2u4NYvScJbjXSxhth6Giu3zUEf5pSxTmvvnRdHYFsUwYVxaJRCTj3X3CNj9i54bGvV81ExV5kLTY1rpEo851eZBK",
  "key12": "416YiCV24oSwx4Ssoz8LmZ6hZ3GTmsUVov8bgpnY2XDEYYj8vnJy5m1UPV9JBRjj6bgpuEejSTKz3EzuGypaFUS8",
  "key13": "4CegH9HhgtwWPr54PeY559aTUcPaB9Vs2zR2bNtfzdV4GTkCa4KwAgEQip88gpzWuZ52M8vgW5JSVtRPNk4gvoR",
  "key14": "e5fG19YectaLipBw6vgNESPrF77vZmcgaLzorNn9vVjXW6Qs2mJ3L8ZRcwJyWqKvyVp8EsgKUYe1WqmAR6UquWX",
  "key15": "4gn6DyPvUvwc34mPhMRJjk9oTehz9WLNtMRMyipUdSVqWwjXnX7mzwHg4Bif2fNBkdizWb1MVCE1bDi3wPGCreDx",
  "key16": "5QmVdNT3uk6sjZ6UGMYdw12W5Y3WrqHpQ47iKwdpQBPpHoNjmgfz8fPJAr9pChNBwAHvjZEQE2265x61PCgLZh9c",
  "key17": "38nsWcuvbhNAjTe6Rx7tatZmjp3queJoZVQ3zCgWabiFLZSf3gZCJ8f2N35hF1sTnPZPWUPYXKkPiKHb1dWJeFUG",
  "key18": "4RacQxLW2Rd8PSex2sCm15wDWBF25NwbL7APncfvgcMhXtU8ANTcwjZkDaHi5xjtEAiJcjwNz95WgJ1vmTbL9uqn",
  "key19": "3MiXokuPYM87YdSPVfghYw4HGvpDhTRonSUD4iNyXaaQJHjPgvocbMeXgGdGLUzCps4gj6bxWKARi4rQfAuRkCQm",
  "key20": "2swbAoNmdW6yDibbHvFCBtnYL3LHjNjjYxBEeff6nHtUbxUgWDwfNvoctDjPS39U4enwxibTxB4MK3pmA9v5omrd",
  "key21": "4cUYistzPYczLcjWQyhyQub1M7ikSe1PLQo8eP7GvccweMgmsHwpU5PJsRBitQARobNt9w6faacqdGrcN7p2LSph",
  "key22": "LYPsCeoaKYvbwQv5kxgxHnCUDgYMkwTFtgRShJAgtvz4VBBgQizx27PNg5rWGhzrkYoS5Q4V7xeSu1VmB5sxFZ3",
  "key23": "wLYraWCLq9kACkNoj2bBHQTdJDSz9ATWAxxiz6ubiF1QX3CNinmq29RMWwwbjABCVYtCTBtz86DDfiFUt2ikL8w",
  "key24": "3P3yxVNr445EvzLCCBCqvBFJXx373Gq9qGbTEbz43fkxxPbFRo9p6NKcxc1ZeuUNTVajDFYscHdNy1K26SU3b1f8",
  "key25": "2isujrp6kWqSBsHuvDedjLtHh1ppWhsP9ajufo9Tdn7TcfVcxhnKgC2f2f9uRAPHxwRLjxEVQKjLmBoJGqWw6ibG",
  "key26": "3tbntkhtzLgdT8RASYuhmTH1NzE6zGuEhbHizE1Nfq4KZHhsYbsJK8YJcVDLpwW8i8LHkypoWsanRPsh6kgJ7PwM",
  "key27": "3iN4DRN8iCuQ3qYBKXvoM4NUKAqtLa4PCt7zXQoTgDko2m9ASfVn7jVEzzUPtKbmXwwtUZi3v5s4n43d1xdH5rGN",
  "key28": "3iWLkt6eT45j7KUDae1tJWjiKGsQwQm5Bp2hhzDfW2KCFkfjEcNd6v5QtexXnoRoRhAcMwcmdaW5hzFu9QaUA3zW",
  "key29": "2wff7HVhUA7W1CNZxfCjkEtU8MD2Bsf5prDpxNHNgCZbRR8f5e9cmFXDg8QzvaZiAQYq17EVpjfG5D6r7TQrJG2n",
  "key30": "2xRh6uBzxXNmmahN6JHVzxZSL9u8w5ZVYV2wiHm9byebpDy5X5AyFXQTHwwgmVTjQAWDsQCF276gS9vmA4YrdMrd",
  "key31": "3vpbPhwjVGgvHT4Cwg8RTsCD9gPB8bPUx4wkKJPoXE4sZXKpFu8eJbWsz4TUqWpbZjXA1nFU8JPMiqLFfH3G8fhK",
  "key32": "2D8Qdshutvj787D8iP234De6oT8rSnn6w7MALmmHJUnWePivfnbNSdxPr2FUPAZa71ePkMEd48tLgCFGT8os9VGH",
  "key33": "3xGg6TreintbhkfBabiMHHpqwndZ3xBW7TDcrgZwFJhJyg5mxhvAvLRbCAbVtF71JmFKsxG7FMLrDxSRSc89ZaXs",
  "key34": "sPj26WQwWWBL1vVA8f6X6odfiFnUWCQzSL7TENLCiAkeUPieCnoMEqTpWabYL81wYsMgrpWHkNT6oQtYQ446VZR",
  "key35": "4u148rW17KiiHjDoT7dj8eBW9fiEkehNTbNECJf6YmPdJMnTa6DgN2Xu4SNaiK5YJHPmjFWjDg8MhNsbA2CQYxKK",
  "key36": "4una24y8U7psHGArNxLMCvJKbx7f3FjoJyBPsGuiqowi9AXoY9jrmk4BvaEWpKQeiSJsGgNdG2zfcu2ibYDCCbNo",
  "key37": "v9yCeZDPDf464JZ1fXHaztnLGNRA7bDUDdokFd3BcB9fETSpqATkAUbGeGHjWgwaNautGQVSxFBpStuvGhDh1DX",
  "key38": "2NY2SYLcv6Zk8uSYcYPkZiiwdLoC7us62aLz98EWaRqB4ybsxprYzVvZmYHpicxHyxGMzWmSywF8BPakb1aZvq1g"
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
