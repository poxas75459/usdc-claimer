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
    "2cFy5UtAeYuLDiYuEB7AGdCrKjFK99mjQVfvZbLbA2CTZHg4TK8aouN3AwMSK94Dk4gaALLmc9iq1j7J5CzYXjWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWSJWzfUJGeLeTnrQUd98V8zdwiEeuZZFXKVwTx3qhNj8WboLtuapLo6tR3TRpRjRgnJ14sqeV8JJxqb7372YNq",
  "key1": "sw9QV4d1U7hD9u1mZhXYDWKxRv1BANyPMt9XgeDvD5Su1cwzV9X2ZCQ1rn19hqGJq93pAwPbM9N5sTzGQp2fATy",
  "key2": "2bzhCnKe3N3N2uiVMyo5L48jr9JBekqZBptnBzWTZDmWKQUhySi4SdnchYGyouX7htCMhfrtTMcFgUZx41R5TMXJ",
  "key3": "4oRTBCNp83GwAovj38egah9Lgq2NHTJwrL7kRMkxfb4VdGnn8TGJ74sJC1yKomrUdYMaCpTTmQCKuZphz61BksmY",
  "key4": "UrJx2ej7KvYrgnW9JgbD2EHb6r592UvWmHiwDahEzMdLVazQez3eGG7ACbJREANQdpcrZvoBXStJXyszBbxxHSw",
  "key5": "3Gf8bodjtqK1Y2E3atf1yvXxjWSWbLgproWqSDSh9gvyXfZmGwd7F7JzYHDjKhjkiqD8RVP9F7hyxQ3K8KXBNePj",
  "key6": "3eRTBuX6LNnhWDaUmsxDsDJ7YQVXJ8kDsqgBrNSi68WVeyzY649Un6t4oSHfm86uWADHx45LthVzWgMTqhMX5pUM",
  "key7": "5Grnaku5t7ej3SVmsPXLpE2PnhNRpLUtKNFYXFak9KqDyiGm89WMSad74GUw3aFg6pWdSjg5ZnPsYhgWz1fiDNt4",
  "key8": "5c9j5hFGkTRw7Vk8H23zRBguftwT7KYXFVetuxitjyRyvYqwCWG8BSQiCA4aBTNFpAeFWvyUQjf2mD6pJ4woB13i",
  "key9": "5zjc54N7xfJnKhRXCj3e8AbN86qW2KjsRHvWqP3zsxrXcx2YTsToq5Wh3wkoNME1mveVuhywSpcdRHt2YDZvCM9o",
  "key10": "21NaYZBp4EuzNmZNQXuXSYnf5zoDd1nh7YgfHoUD5xnE1e5Xc2j14YKv4DzmFYYXtscxLzCYcMmNDvRnqrqFNf9Y",
  "key11": "2dcYeFbso4VkNtHjUbUpVRo3JMfN1Z5iqyveUYy3XqeC3eJ337j7HRX9rhMAaTZpy3BgTEsDwxhgUohF8KF4RaNs",
  "key12": "FCykrjaTYrmYYG6VwXBP7TJ9gZaQo9tzZtR7oQ27RBc8vix7sYPuNQKwGbrGqc1F5X7553PVVrFNqzYfa4GaG2g",
  "key13": "5dmNuaGE28gaEqRGrTm8ktu3rMiRohh4fHWDjL58TvvevQAN94fZ4SvXt4Ntuj5kgrCWKtesQnmG8pNTAghBzbJP",
  "key14": "ytNWNdwcsiKsuahBFcVAdeZhP62pBEJarvGPV8V453NzrJwR6ZyG9guTK5Jmzn4CwgrHZ4kzKL5jdsoXzJWwBwN",
  "key15": "2mVtzViJ24ZTitajYiTQHncbBWqYnMZz3eWDMM76Ex3btbxvXjr7yy98qMFyMXx28XV7b3CJK6Sp6CSD1BUzCi8d",
  "key16": "2MxPLpifEDM4rxLJqxsHLNzqBP2qAny39pSNMkvcEZnQctHCBfAwrX6QNGUz976uvZ3o4PpZZDzQuRNmMLuADUpL",
  "key17": "2qSFnwhEN9RtecfVgftkvq4nPyqkNmjNoAWkKXuRuAXCNp6ZMEySb6Ko5Sni321F3DUJFqVox5hi1ayrFccbiYxL",
  "key18": "2ym6XTE3SXBxfLDueBZTMkiJ3pnzpZZvM2rXhKVkYELEsGg7pRjcJQgqEUkTWRSNRY5DW5xGAi2qe3HrpbQvDfcr",
  "key19": "VUhuhF16LbwQfTMXrk3kKq7fm2TuZ9Uctm9cJD3EckTUnVMvEZy2sfksJqT4wp8PkurATCiDkyPeDJ5GBcYRNYT",
  "key20": "4UwYiPPFHBr5ZBiUVaXE57iFmBkgLPi8VKn4d58hhQN6g8uEj5Ltbq9UMgk8aNSNMf9FF9ZDoRgFb6ULZnE9SXou",
  "key21": "5qTGM3KdXP1PHRkus7qAs48Af8D79TcWzBQULAJLME71nG1x3768tvTSgnqSjYxkrQDENNzWoN3MdoC2J8zhrezX",
  "key22": "c9ma6XjkKQm8wPWtaRaoPijQt1Hc5bCeE76JJEDahdi97wwFGDEdcuMLGbhrSw7fmP7M4hC9vGwLLZgVCvjUGjD",
  "key23": "TjrDdAXizYY6JQVqEMjh6xhw8evK9RriPRaPDP6tAU3xrCcQu2QihEqk6RFw3WtAmabrwgAjMBAcai13XkJBkNX",
  "key24": "3YeAtbJ5EBccMHy9TzuSCnZ8KVjtJnwneovRmhVnqRXYnkcYhMWAFgwcoyvHieecWmkTEnhc16pNPCLqJxzcyGo9",
  "key25": "4ZUvYViMVWZSQrYvoFKfTSLB8oheKfkqDNJ5QzTD8G2WrZTrTS4FAiPJgX63LeCZmnwGASAEtHT6rVCD7etdyb8L",
  "key26": "3gUv2FU6yABVt9gHaGG6F99TjmMhyAzCUWsjczwaKYe8BnR7uyoEJ7L8pRwnvFM1W91PXZCvToH1D3Dt8ZVb9Hw6",
  "key27": "3U1Ko5YysQcCiCjQtYKMqecvsf7rXReyxspPxPwpfAL3Nrx6uYK2o6Xp6btV2PVkuawASsdCcTbQCwqLSwECFagd",
  "key28": "32vkG2mCCiqcTNQ2BveQc6ESDuTnR17fxB5EMSk4U431DttsHzLqT6MGeMCsvcmZkwNQ6fTbZt6j64TW4azTiZG5",
  "key29": "3gwZUr6uRJsFWoaCg4UVXRT3gw76bSsJGfVFygW4fCNCUVPuwfZgaXUGYR74T8BcbBDAUs7zp77xxkapK2g1Rr86",
  "key30": "RSt3xJcWgitbcbpB22kStouZDDQ9WcGC4SE48MYwnBS8MH9aNrP4qBTwe35YoWVJCg5yjLPdZoB33f4hR4NpbYn",
  "key31": "35N4rCREjfJ26uPapASf8WgKY7wGmWa5CeV3vydsBfSvvxywuG2ZeW46eACNapn8Rm6KEuTaPSwBRffqRJWauChi",
  "key32": "yp8hbKkw88RCRxURK2NQvMGH7YzvKiizbWWe8XCrvDyad896cXGqkgwCsdHkGJwV9kmdWqQyfpQUgSV58DMfXeb",
  "key33": "2M2phhuucrKqQzrPh6SVxRto2wuGjADwd3oGaNhudEoPETDRiPB2Ys85SRXFLcLRoAMgoZ252jkbTKvtpBQrfbtd",
  "key34": "3FLUbZ51Hx3JXC6GSjVVfJtWts6hq8gF79YQgopdjTiDJCJUeNSFV6KonSdwBZTFAuvRLCv7HhCy6wpdwEPfU2MK",
  "key35": "5yZSyyyXsxXt3wT82bX5mv1Kx3CmdLtQboQjBV9XCVko7V7mcNgSQZkxX4bby1FStghjGhBs91CfjSejkMsDpqfa"
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
