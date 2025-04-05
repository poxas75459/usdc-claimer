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
    "5ns8w82QANaWeDuVEkLFWnshVBUPnwTY45w4c2tGkvvELZpyBN4qeaULZXsDWTkUSTSNxazy9mtxh2KfDvJrooES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2zGfcNog137K1TgErZ3PJ9jKQ5JorXoBauUhSB5qz3V9yyLbAMHsyFv8Xogy6cJyRvmKgBMKHwx1T4uSiqRPZX",
  "key1": "eh9yQjBdWBuNfsfRF9FF1AoMfAWRtLNusWZ4Uz3PonzPJtHVbwNWfC1C895Gt2u2y22uA7Kc6dd2rsZkCTVfhno",
  "key2": "2CqZ5TkpApVFX1vucHeGZTT9UBG6K7peRuDj3fVV8sx3SPQLXNAeM2XTzXXoLgCGBwoQz4MmmgBzNQcv4cNELbVp",
  "key3": "4A69nbHuLU6oioQpomZpW5PA387R8SLaEmwBcrqh7wbpxVd5UZcWCQD4KgkhpLtR1FSrcwYRcPeJASkzFDvyPSeN",
  "key4": "5EQfqhtfbaZceDcYKdaxFU8ZtDMBwKC9kwYVxTtLmtKFMP6e5epivSKKeseygv6sg2weqGLEy3vNHjKC3kmrVAAJ",
  "key5": "3Nu7qWkD5dk9FzfYfgyHBEjyM96u9ku2Yrt2coagxEBmPwdY3a2YdSpFhwmrksW8bbXMahjo7ic5QfL2eR8jczfB",
  "key6": "57dFLiV1V3BizEeEiRCiF2TcgY5oikhr5JTxtgGM4z8XYWtb1wsyX2ArAaGjL5WtDPGtmY8W4q8pR27sxRCqSiSE",
  "key7": "2KCFLcZiddHUGk3ZaUSdtXexTR6cFGQfpXN32dPE4rLjCy88S6hZ3pPbpsEkzB85v5G5e332r3RqJCdCjhx3TBKy",
  "key8": "45eLfhWFn3TrXiNt1wQivirRhupcSfAiT7MGqGYYiDm7LiedLFg1zP8SUBaopYXyhpWkjz6VKhsexNgGtAYn61kS",
  "key9": "59d4g9uLcK6T5EE8WF8eg7ULRvXUu8N1YL3gVr9mXVDuScmDWZVdH5QQNrecG88gcavZYvHXzLZjSiphiUp2E7Gu",
  "key10": "4kNLxb1tapNB3S8e8wRCwcYg8E27bpG5SjKuhpYNKN8V32F75QGkqko9L35U7hxtrtGpu4DgrWMQZtGv9x7Bebeb",
  "key11": "51gqDWXkgLtz1L6XpyewuR7kFicmPDBxTuiVQmhWtvW3cEF1bCz6Z1yM6FeHWhRdcviJfP3uMCMzLXAUftuJKM98",
  "key12": "4vuGyN4mqd5p6Ar3kANb1ogKCTde8Yn5oKShBEFUXGwTWpCBJqLXSa5WATqo9M13tqqQjoescqKxucoZkE81XMfx",
  "key13": "56hifGadctSLNQGrDtE6xkmRwoHd3izo1z4bFGP4rEChELtuetJ5xVueNiN8ZhXCs9DNFcbYZVEgh7CUF3qGeecL",
  "key14": "3WrA6fnU4KZ2zcvT8usNcsF7maJCuKb3SHnZofibnpL8yycZ7Qpn8KBwZcjepGqtbzQ1W7VgTTSe5idX9SYy5mkT",
  "key15": "sF4XAXMb8nf5fhcfCjR3B7m8XAKEQ82JP7UWafSbF8HumPR8rdFFTFzFYHXtzAAEa9xM5mTBxbnV11t7XuPMWDk",
  "key16": "3taGtoX8hw9qppZNsBYboygAUfN6MT1vaa9mwKFx52UiyKZ3tNQQYjeSauVCPWR93VSKpyZGtnpFDZjoGPKs9pg5",
  "key17": "XocF1dCpi3TUXd1W7uQPuhFoV4Zv4Go75FShFwPRZj8B4phEs4EqHrvHFnZjW1bHF8bKQ7csKKHg4BfYsuevRGU",
  "key18": "4BBS7jWBsCZ9KbKYNq8NEt2VnrDSdAawPBjSbwqgBRZdvuXi687tncBNgYnWkWZ6Buax1rnjoZ1qyLAUDYXDJDMg",
  "key19": "5mnAk4oJS7bJy9X5mSUGUNr8Q75rNXCCfh7ps9G1wSzR3EGGHPKz5LRcS8QmNFYHEBRsNG44NybJHaXhV27m7RDr",
  "key20": "urAbxaaYxCpYGufj4zC2A6uLErg88K8qULcQdZAP6LwtvpTEaYfAA4ArdzFLJqsMTkdRXeooD5YeNHtox5zhn4b",
  "key21": "4Z2T9nDf4weVksFLisjhNpDxQWRtqKUU4BusCxsEDiEPFfT8jTLMMhbZuFn6CH1EZoAnT3oegGBb5aN9JnHfhcqv",
  "key22": "4FReEiSvcTWKC3PDE6nMcdXREjRK21UZ1Xhihp8yQzw6Emcf1VCUPsQENLgSTNDVTiSouFPZGRdL5bH7h9HviAF1",
  "key23": "3vm1SzZgysdKpVXL1F61kNXZ9UopU5XDoBkPFiHr2iJC4agXrQ2aFZXrcAwwPwaXA1wSQrgKeH1w2LAR59wT3nMb",
  "key24": "Dh3MEx2KBXo1tQt4cmbR5SqSs4eHcJ3yNJsdyQBLMcUAyitKkDkoVRSGCUvuYTPCoBvpiUj7A1kgFuznGD3ZS5m",
  "key25": "RdvYQgcJ6wYSYqBR26JwVSLtvAj8vtDy42zt2SM5uMUZ9KN36c6oAkYNrn32z3CydJgaftEjXrWHekSgWxzKAbM",
  "key26": "5gj43uscqgfCrhcqTo95FjndAfW4NanLwjJWNH3mPpUHoiAwWXEpd8KHBwwkFAf7h5Chqc88WXkn8irbgVEHu5c1",
  "key27": "22BtrcwCbWt1cAMyi6hxqxZPTXBPRxumfY7qqasVmrFmhsvr8xfyjYSoKsf4xrr8gE9vAY35fbXy2jvTVGDoYFgm",
  "key28": "4kuKcobW2bBPCfvegzKg35XDsj6tcVWk2Bt6XdtBY7XQhZfYw82AQAKHPJBnaXXZGSKn7qHJdKqhKaWZvPuQMCoJ"
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
