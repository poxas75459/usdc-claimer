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
    "3S6JiHjpqzQvjWyQJcFXcyp3nDrwwWNnk2QiGAUKQU3kUbWMpRcApSQMgo8kNjAXBqsn5uNnGftH1CBnmaButhFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jNKNyqHvFWoMikuNQZPDA8HCd3DiZpQ1sm9jz7TCyC76zHqgMs3LyTqsPiFtEMsN9tVp6Qvgh5stTTgsvnhMyQ8",
  "key1": "48sQ3kNNsTsXVQuTZFXH8fxELLARQdFoonCttyg7oiN6A2MyaVSePKb3EnpcThW8Udt793LKYRRdHSjo1JeytcNZ",
  "key2": "5MRkRxsZSutsV7aW9eapq2u42ucpFdKtVWKjLpjAUSACDkS2iQHACtzCL6Vhd8wvsUBBZdebg4h7WinMssYRWDNN",
  "key3": "3v3D6ni6Jn2PK5vPcEZbKZshTQDyt2PcusN91JxhwraQtjd75K2p2VGZDjgXyhdCS9Xiz6vxodcPCmmvzWP6XteF",
  "key4": "5xaxs5Y3GCEkybUzuuMdpWn9a47BaifzWbCqJn5Q8UhjkBbtGV942U5Mcq68qmEaiwAD9mXb3Lz2P6E6Qcr63iqd",
  "key5": "5srhGfFKxEVdLXWcxXdvAyw3oUytU1yZY5V8JdsLN7jou67hzfGF5TRN4vp7McL6rPL4bfjnG3MpKcc1pxcHVNY3",
  "key6": "42DCEiE8isBt7LW173VtfwKqdeW2jXxAeHqnuWPd7Q9kgsursYSuCTpoSaJmmehGhv8XB5WKKN2ZMgCsVXt1wAaT",
  "key7": "4GqYXY5DfMX3FuxuGDwuxGGTd5UeRcqDUsguM6mGsj6LcLPnBSNS9irqWYB9T7ZeMd1RAENwgjNYPkC7fTzoSPk2",
  "key8": "4nLewcx1bJqwMQYqM5Thtz44X7CNdRaYPXdq8y9KSzVDJzjLqAS14AaXfKb1zsNdu4TrMTxiymxYMNK1Q3QNesVA",
  "key9": "2W6tJPrP3MbDeNk4HKNp72PDizm6m1xeeASs8W15YXK4H7HYd5tRiydYo7hYzAbRrvF2nDoncCTaH5RkX2seLX89",
  "key10": "236TrVJeXKc2xNCwq4y4HWVMApZPGQrsoqvMsrZ44pHeBfmSJqUxvyNfuoaT2NweZZkzAFkHGFsHq1btZyDHjkhH",
  "key11": "pCsMurW9eN6HiuaSVoJjooviuWBEU6ccHSoYZLaLcE43cUgNQV8uduRzjBDCP5sjpWDBvdK7CjPAnAmJSHRHi1P",
  "key12": "5wLMWcVcJn1YT6ZK8cXwsQFVkqURTYSjUAw91oDc7xJqH6ZFzaoCYpL8WHxD8SvaGH7FGgy3QsgHgv2Ngmxj4kC2",
  "key13": "3N5CJfPoALMfXjDYNkNWJVmgYW9qkvAvaNJGo8Y18jPmeaCQpnQuep9MGBzTkKMLgnYhEVo5WcnAwMXKCXP73izJ",
  "key14": "2id72pzMLsrsSuDpDDAk2bX54oTDKaK8gkpYegQHSGkx9aMnHsgfzeBokDiwBXN56n5mp8kwt1bxXdmkSbmrGPDn",
  "key15": "VGmFYq2L5d3Dc6AZtDgLCNpM7SwyHXNbdk4zV7D6PeA5tPPPv9dVPxF1jJUCZjHk655Ve65eAd6jC2iG1kKDD3a",
  "key16": "3gFJyQoy2aegeExb8ziugb7A9TsioaPHzYfKufqKgaH59XtzuqpwPFHUmFsrbqHpPcxSbNHfXbR6hyzG2iJrhTzw",
  "key17": "4P58KUApJ2QDSLSYKSfzmZy3WifSuxNXHWjKrWMo4L6h7K8XnhrKRSoYm1DDBBGuBfUGkiD888XrJPNEjetSzn59",
  "key18": "4BAYnxvYm5VSHaF9qytd3JjP77YZKXpisWrXQ9yfwXA8cQQAMWvWSW6hmWtKfbZ3aR1yTiEghS2Rbn5fxw1DpE9w",
  "key19": "3NWxZqTTFvvAN3m1JhMSBqGniAdZuoqR4GvGuAkhWm8EkhSC2S3NBNGKBrvpmiQCUfJ9gd9aAApjiphEm92A2x3k",
  "key20": "5ep2ufESfqNgkdeFFNMLbEWrARoMurTsqM1r4ZC3smVsGwUoUdmWj45rb5vRRg6XWptF5HJHehyvfzUwgs9BZhhP",
  "key21": "2jbiH4ykKQYmRN2Ns2HXLb8hm89a4Gi7W3FNKnCSM6wfNwpjSozyMwYCLpp7tFNMghXeaezkvPLNK9egY85hqnn7",
  "key22": "4DRdckJSXCpNbKGQQze5zsVmakdzA89WmTuowkcHVecvix23LbUPy3B6TVDt2an3wP9Dv8dJQxjwSE61XmfDsPfy",
  "key23": "2NmD3SuuDRDTzCYbUfjn5V4abBNQZYxH499iAwuMWGN5gfJ2F6QG4YyRbrynhcGftD6rQ84VNtV2JCsJEtxNSDKF",
  "key24": "2g1BnnNYdD1eGMdpgk4CLABDVtGkMvNzVm2EkMB9cPwNANNmuxV2NYMgXh1Q9LfkBTtgrPAfcWk6R2VeqHVynLxZ",
  "key25": "4XzrXZErLtbyQNhpGoWiVv94Cx7y2NmvDYYxsrBfeBG6E9xzMUk8pTfngpbK6ECxtM4BZx212cZN8YPRpdVza6Ve",
  "key26": "2hroq5r74XdcjBN98VtNTPeXxKUddCK4y2tLCqJtAxHgz64ENswXVuKh72wwJMaFzYFxHN7jwMTp45jFZfyQyXTy",
  "key27": "2cBaDrtnXEwmuUYUfixyutWKSpATc6DMQuV3E11Rsw2PSb5fLc6wcxRvMWZpmzH4ZEtizdvKxyRhVrbU5mjrGuVB",
  "key28": "4MtMpiqtVVs9xuQoNz9qcsUUTn2NUSENBtsmRkXjURT9YWaEq16BsiuMUEZzVSyZ8fBE4ru2kSEEda45XxmEVzbT",
  "key29": "4Zbhuj5L5opB5dEJ9sVUS4BLhBR8LmxwCpwHdAxp6XfAiUiir5NNDoxU9xkTMsQ3AqkkPNUwNMTMWuF7SGDnwWTh",
  "key30": "4SngDU9tyht4oKjDWwzAMKqLRNyNSc2nuVNaToXwNEwvesEz4i8ySAq6vHqB951SWApbEAU9DhYAuzcgwbQMQQSS",
  "key31": "2srGzkCGTmSfRApNQjVWp8HWaEPSXr55DVEWCzxcN2io4ddkuPjvnaPLGtSmodbWSjS2PrVwe8ow1ezGkQuVjgos",
  "key32": "CfSLvhvxhKzoWRdkDzQFyWyA18xcKwixwbiMKfjhinkbwLLf5fSzjaRLKPjXuY5Agu5ukLrEFKFUE94Z5WSxGF3",
  "key33": "2WBxCagCfgoYWNnoGZZniNme5tKKHKW5y9tBG7xC2BAE9AJN1nYsE7u1Bp9oMxP4m3ua4k87i2WtnqFb3zbgRp1U",
  "key34": "5tCoxCWcYC7WweFdysFFbLU4GXPGttYacuEr1JVC5koWzT1zu1xLZUFLXR5W1K9Sa8TabtgccD9j1wrsZpQ8xh8k",
  "key35": "3Sj5Beq3wYcbJAgYAVbi4dPUUSokCsHKxc4XC2MGb1mAnqjTBJwN8v23tin62JqCKHAtFsJrKmhg5xxC99jjMf1h",
  "key36": "2Eqwi1hZw3WNwfBzMnqntqWt8gnP31VdzM3shBU87FcX1jj4rbrjdsx7vPVHRKvoznVEYi4m92z7NxixBiE3RSEA",
  "key37": "2PAGB8zrb6vws3DypPDe12QHr4nGPUxqKymQfA844n2ph8L1qen5LWutdcXq7ZEUJpjkTGYgmkvH6CwfGBj1h5qB",
  "key38": "22ReVv6F1tmrMDvMUXo4qdteHn5R9wnFVVR7fZ7N8EpJyc8NfwdrqDi2va1gKcQBQpWvoNrrKwHQQwFdCx7WPpQe",
  "key39": "2ghwrMXNHpUR5wy8Bfn8X3ZX2UPmS9VEDev8T8JHjgbia5YdDaymbXxbAx19VMtXZNpbYpe7AXaeGw5oCeVanJoG",
  "key40": "2EGFtP2XjAiSuUaWadAj7MxKwmpCoUeak6na7HTZLJUXKFq5MX59NLizfhqZUMxAEiANkKSy39mubAsGVfHD3LoJ",
  "key41": "52mAHE3pSfZbtTztbwyi1uiBeHTLMQ58y22wuAmT9xWFRMKGbFc64gKWgjAYxfYedG9MAUQMb3e5qd6uEdnFVAbi",
  "key42": "wcibykmuNbivHBgxkYtK2ncUNqC6U9aMugX3wqvBoLJnstc3PsibcuhqRqecq6f66JSXjGRQByn9FTGMVuTDFnu",
  "key43": "4yXRwFhHV2hkvu6qkCEJ6LVAxxDzSTmLd1jMtVf3dw6QNii2AuQTZ6XZafG7MvLuHsXxFfeJQuCSxAsy435E8o8h",
  "key44": "44JwtoxHzxuHrNjR5KWM9vdawxXWqaZ6DXTd1ai86HrEnjF3ub3BmSm8Maspt7cERFQQ9jabbhofyCMjktJgNH7g",
  "key45": "M7pHJNmXorDW5F4yStM2xPrTwcBgTFVLJREgj1MrAzBHzxQV3WSJBgTop58KoyPuEo46RreE3sig6RanBV3R8W4",
  "key46": "3AYopQbnPvg1SmL62qQfhMEyeb9K7i3GqDjkiJ1E9i9rsn1mvUACW3j3nTXVHvZoXPSZ4rHe8JovGpp2PqW2Eauq",
  "key47": "4y6C1NAkTyfhwvA1E5ZcC35VvoLoZ8edkgrtReCPcvgitaE2yJe94hmxdgQwe79YaRPEUEsQTGdBW7JtKyp7FmDZ"
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
