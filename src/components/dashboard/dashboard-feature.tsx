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
    "4ru8ZGMp7M2EK8M6pknCuzC2Y1MUL8WabdMSoQnFFM7YFfhVEc49RpikLUAzWcXjroch4uMDyAzwAfKxG7JquGiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDmeHskaNp8bn7km1Mnrv2aras5PRgBKLd3gzVwVeqE2Ty9iyRGZGUh7L4M9bF4KL9SC95rhEpeog87RDv9XBCZ",
  "key1": "2VKMq3kGA8Lx22a3MUY4v5Utb24qtnmf2Ysirs7SBz2yNax49Kjn3KK7HdGqRxufYG3jS6t2CkmZxL8f7BUxWLdU",
  "key2": "3uehAQ3PhT78XCeb3ChQG6QQj4q93u3VGXhoxGamsDtzG7wYL6UZtK5FwmpE8env2btxJKhqcQzuc3JUVw2UYSyy",
  "key3": "9eB9mghpt87q6C9yUhpheYGfHfvYEixgNL7suLu9Bttsi3AaJNBktFAb55NYyL6MDzCNxZz3h8LsPLQh7zeQUY1",
  "key4": "2Z4mrD7VDUR1Eh6znxhQKKueSxZxUBXvX6e2tqpRmRHsD7wAV3TWVbsic2NHvKmjcsweuaDwirVpSsYijmoCm8qA",
  "key5": "3ihFrxLTm1tzMgBHN2Mcag6mBNuVmtz3CNQKjatj9p35DJSb2HuSqnANsyN66BgLC9mfPGzXjSBQy8cLX4G8W1d8",
  "key6": "2nU1Tqt5y1F9NbF26gci7Z6GFskz2KoFLx4y4XnUa6xhGYDg2qaDjCL7gL1b5DfRTjsMadE1aafrGquTy8tYCFvU",
  "key7": "2gVGtr2WvqEmHrb9ybC8NdudSq9dFdFsrAAHPp1G4Y65uX3iJKbNHwjjVSsyqgu9E8nHCpUrA4jXLMRXDUHzfbLv",
  "key8": "9SxCc1uBdFLpEiKctNpQt18xwRJQVv1kB8Ru7rwpKTmg52DK3gBiGr7FoHiYf9CSccakBVPX7hpH32ayBubBUHS",
  "key9": "48Cs4twhebGxjXmaBrZDkEgBwrSsqERd8FvKFPsLH8gpNRPWcr8V81wJAR2MAzDFq5rZe3Wg3Y2veCvdDbtsyBcA",
  "key10": "3DuLSLy5hEYv7MuHBV4iJNWZRGgMQLPwbxtfdMdmn2pUyXGBzkeH18dTGmn5xTDqo2jFsgQYX6kK4GQgYN4PGyqy",
  "key11": "5KsSjbecnn3HEiTMv5funEXpJbyixAysDc5xK2MmqGXKUcHtyHXDUoucWoTvca6USF9UYdNrYy6REd6hfwwbquz3",
  "key12": "5nks21RG6LacwLTYYQQGrkX3b9Rhee53kJrbukkUu9cap2TXeyukLzRwdrTC14YF7Aq7q1ekQtrRmBTWzKDWxeTc",
  "key13": "4cKToE1zw9Ezo7CBTvTJsP9bV8STJU2npUtRdAizGq45dncb3pqwzY9s7MWBkwfanBVgrM6HC22swxh5rDWrXvbE",
  "key14": "35bqCQ2sf1bZdVqEMhEMpSWbC6Bf1HnBJbXVsmXh27Jj1Nxt2d13NWwxSDUG9j8McLB7m8P8r1gj3oJZQinigS43",
  "key15": "2JtcgfFuXPb1WuCns8n5afiBWS8skXr9SBj4N8mDAUFqgpMURqKxCqvjMPkP5tWHHW2RiZ1ru5jJwJdf42nhvJzQ",
  "key16": "4ST6h7Ab8jWWj76moz4ex2QPbDxqxQqTkeBEbTCAy2rkwQzYoi7dNQag263fcuaFK9ZURgCqPzCK1DUAHpgB6oq8",
  "key17": "2DX8rw9KEhS81TfsmeUfquGDwB8avCgax6wWw6jKfwKNFa7Zfg1mEru7DSFcdEVEXRBxzBJoTHbiffD6stENWnz7",
  "key18": "2rZZWEAiLVkJ79eWtnL8vYYfPJGPGAmdBAiGredxp6EezxUgYvtmre8XmiucafiiDPJma83Cygxz9zHsBHtxB2cs",
  "key19": "33yy4nxjDheEuZcaKmzkTg8sXssbRZo8wMJmzRmwEs1w3YisDguVZmYyjs2GFERPQVgL6JG3TMssZrggChZUmUVo",
  "key20": "2BSdrGf7UyA8fe8WeQ1YC4agxLB9VCddRaQa8GRXfsoip6MYw5aSqxmnYLeh7X8Wu3PYbSzJWiqdxzqu6WUBpyrW",
  "key21": "3wTPXWgF5pRui9EFjNG2chq82aaTLxwh2S9vydKBUnf3qcmctMGvbJhHeub9Cd6GHjR6AxZxarewcriJ52VQdD2S",
  "key22": "654dueWCuL6BRV1mbBwNeQv79eQHbyjkZR1fAyMSGo1UVdJgPZ2SLYa5wqGCVMiz54oQEW8AnXt5osXbmgmVQ6Wm",
  "key23": "4ZEq2D9eHTjphzmTbQgBWM51GmhmKDjvRZzEEqjwARcL2WMQ8TBBnWGiA5froP1CdPd6ELN7zHQVriH75YaBdS4L",
  "key24": "3XqLQTmnzFtP9G1ZpUfP59WnKdoGCFEnhNDmBQxQL9XhpDevYB1AM5Gj6pyRKmRXNZ2aCaE26tQ4Cf1q49j9urVM",
  "key25": "4kFeRhnk6tPZHgWEWbRQwUtiKXRLZybsgSKLE8XBey7RqQeyQmo1TJGvJNzUz79BA8abuiX1sah6R3rePtLw1ntz",
  "key26": "jpLurhZnm5kSFkpjZcqa4idYMYT8zRz452TxaqNHPHWbfGyprgWJ69Z3RiDGCPDmHz5U3ezmj6BcPP8m513FShg",
  "key27": "2ZWMx5nARN1xhdszH4mPCTW91CBqjkRpDTSThyV6hPdw4oBnrCyu9e4kKayysxhvPTvuqjN4NL3kCMEgJunYnLzu",
  "key28": "9VezY8q5gDv2zmqLFfcYnfr3cZK8f89YtmxgKHft1THrGSeyLgyabVxeKmPXuahT6Fbic43qzxCFSn98FuK8ge2",
  "key29": "2zRkEQ2hpQMnkyJMwaL3ocv9Kdkhd2p7yQW1g1JBaJKNSJD8vYPMbFowkcE4MZBTJjz4PMWw2qCEbT3DH3iNPNoK",
  "key30": "2LKKro2syjDm3fZ8AGkgSR4uXsmZ41h2dLLSM8C8pMo2E2yFGQ94tnrVfo7MFQzqAMEZ9ALc5E8iwrfc69o5KKVP",
  "key31": "LFtRDfBQY7rqn3BxqsBoaWyP41LNANRxx8Gj2xqPg1sunkgroXfKUXDASADojHeGkp1tu4jCjbEtPV9hHiahyws",
  "key32": "58oUdvpBDReFrBK3Vb64dBNcsUUNWb3FtMEE9xJkNiJqaXwUAyRwv2AtTh1SU4kgo1VuzyNMabYwz73mLzjgLZiz",
  "key33": "fnCdBUYhsxnwDTz756h5WZqmQnfrmnqabwqCZ3PcTAqXHfWyeyRTk35MAhZP7Pr76bKJhX4xfKA8wfZ5SNFJmcy",
  "key34": "5XXQN99YD6YokGXG8UZsw7Lw94fRweDjniyW4vg78QBVoBgPB6wtfn18nP1evyvyQ3gFyDRBWtF15xpfBhZvhvfH",
  "key35": "4j6B6dxfXRbHMJgc8czwuwFYgnU3R2BPqbR7P7hUfi6jGDaxik8xnRzC65FUNN3QWGg8wQPCgXMmHNbiShApwePJ",
  "key36": "5tGr7qK7DKCGryDttXFk79FiSKzZd6MGbbkFordbfv536ERnHRG1Bz21mVfnjepZpiWvRdoNq2RPeVkG9SB6yJDV",
  "key37": "4bKhBfMSo1o8kpceKfHg56Gk2PRHaDk5CA6TwkEKVhjg1LnqFiinpPkdky61moVvARo4ZcvuQUxzwAEf383QBbfD",
  "key38": "5e2JvNxP2mrd92Z4gqw4MbEU389GqDai137DLufVEhPNLu3J4F6Eep7kgcAZjjcBxa4Bkas4me1tnqNebmbbKk5g",
  "key39": "3HiYyp7YrvWFDvcxTbU189ibNFwxqrNZn5txbxuDjJ9axCZAiReByf6e8NPs7wzYbpJauUrUN1KJwmX19gbAymiN",
  "key40": "4NC2HCv5827sGGQ6G4KwpAdfQRaLGUqEwZYWHGZWQBkrT57kLFaprmy6WRqVsuxJMg5iEbmXjoJ8hESPbXJpM4tn",
  "key41": "5txq5eC5b6BJNw2BWsVUwNPYmAx9NtMXRvUkLVBRiC28ZSFwqxLFJSUhi2gP8UZycywNydQE1pFybdhGbKe6PiYx",
  "key42": "4avNgyaBKJ5f8zkZ6nHvRUQgyiXfdapW6KwLFByzvx6cAwBJheWJCnMji8ezEda5LajtdVYkHun2jWbGrxGgEh7p",
  "key43": "4d8GNtFKydSzDVsn9dJLpQesdwfQJQoynZ1w4mK2pqpRKnNLjc3FJDfbZN2Lz5d5SN4zq7M7CWTX62umoNjfYx1",
  "key44": "2quvjAexdxyiNY7xCSPVhqwTEspMmpKtP2sUN1B5b52655QtTEvp9otct6vjVsMmYo3SPb4FSr6dSX4CqucDCYhX",
  "key45": "442waJ2pJcuEwDPgB6XUvG6psofkDZNiu2vZyymA1SHiNtahwiUmPDip7sH91skBzeF1kQNTULBFhankMET873UB",
  "key46": "2Wt2jNigVBodid5b1WWCbUCqwbrD3cRDEN531Ro9hAuHqkrJNFxz75YBQBsF6Jq2NGgNe3orD4LyqH85zRsmRZuT",
  "key47": "27CqXDWtvNs5t71dYgvdMgoPWFirdSfZgCnoatVq2k2vqFSdg78aUXiaRMVrgFnxvMP2hipuzcymTGEW9omFuixx",
  "key48": "bc5SYZUHf8QEysRK75Vmq2XwhqSVYHycWUK2UmGPm22RZd3PVbjsowFEMgFHowaBVtaDTrag2VsKC6Z5nxFDDdu",
  "key49": "cCYBHQMEDG2Eo7xVU5QeXPWsYPboicPvenqsQbpePLErqQSUU1Bvo3FgdZNENmSWKzsjjvaATqqCLmZYbcryNKj"
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
