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
    "3i8CQSjp9gH7k3u7QS8HGskZrziroxp23wyFYkFxisDCmubuQXL1PaQf1L2UkvNWW3nWmMeXUuXge6mG1cYLirYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFfxfHVEkGnhnSsCvBvemoRdp8JEqcLaTnvKJ65YKEwVoDZVZQ8pVYiPzK9cHTrZfD3G8KcGqKzHgNnALbykxey",
  "key1": "3naU7XtrmTCdZ4hsw22f26XjsNwpKtoVe3Wxq5aTh688Bzej9ZUHEqeXz7ArR4tPxEW4vQvftUzu2AJMJaDfoiwp",
  "key2": "3BvXraKfcEczM48Lj39DdpfEtVULGDfsBYt6r8jX1dzC5Xo3LbQ1TmugFwSJEo3vk1WUMxZRNj2ZeGqo4VFPJGr7",
  "key3": "3hsBheLUPuWWYdvemKDHmiosgSUNYWY1jDm3uPMyJzDD2iVncJvxPYvLxGKXn9F6mQtAprLGwBrtE2GLmMj2DDcC",
  "key4": "2sJcQR8RPbZujLF2PBz85FHxrpWhboWtpdfq1BmezYhg3S5f6axGoTHy5aTQSfS6GtVrmcaWw88ckN93DfDAg5bM",
  "key5": "79BHYzRvgwz5PF2Lq5AAFHDHbBeZphnTLcLVCoqERxAnE3YMAper3od4umTrXsfXLdcCxFvR3Y3sxysMnYGri6Z",
  "key6": "XKEUc3uStc9dYnQihzd7Yb1yipHv3ZVs296YWc2UgPckKPAm2ZxsJr6s9Ssb3o2Yw69dxwoWYXgvrxDwUE3wbRM",
  "key7": "4H4S1eyBFedKiR9j4KZ2q62XRnQwBdNjqswdpeUacfmvQLo9DK2K1cdajRtokbd6A9jgyas649rcrcFKn9kcbDQT",
  "key8": "26ZE79hxezhwrCeWq4oboMwjboHsexuqVuV3cG7LgnbjKdRJ1nGmwbR7NZbgoqQ1sKPK4rXycFqKEKhTuzqvf5uV",
  "key9": "4RPTRomxufn1hgodk2VS6G7sK3vdMwEG7BbJCD9ofPjnpb6wThpq9xEpvhxR68MRQ2BVsaspVuYwuKnLHH1yoV2j",
  "key10": "66dVtPb5yzB5kuE1qDWyMGzFfLkH7aEoUs6ekH7CvSto5NcgyS1Q328vBTzKkS4MVjEQDvMW8aSfgu7G7i9f5ccy",
  "key11": "4BPnz9gp4RgT3hX5t2yvWSTJSsn7AdTngeZrkbLK19rvDTshHtTsLneT2ukZBjgdZXjXMMPH2PD7uRvv1qJM2PE1",
  "key12": "2Wqv6i2HxZy7xCtvEWrmJaBN2wqUNPnNqpu9dmb3MTQ5WKqcyeG3z6hkQ4wExUv8j5YKaiQi4zn3UKG6EbpQ7mZR",
  "key13": "2cbUMVYuenhAhQ2ebMCkaTktdtuANRJJerZF1KzDmoeNprapHisXp9bErKHwfzjsLaBkSUNWJAoW9FuzQ2KR6Kt1",
  "key14": "3HpJcrUN67ARLfmGdGaVm926k8NQoMDhMSM9pEDM264FwkC8U983Y1AVndHcbuG7kWebn6aQuNCUZFMWP5imNSzw",
  "key15": "wYqchndxdXHEdWLowKaESv4M5smCPpCgGxvKkanLdvZiVyaktxmDcotP8oqM8SrdNgm3assoKSjxS9N2vsRopWS",
  "key16": "4Gjw2VgKiFeV1PNVRFB7RTdxNWNrfLD1dWTSuuRFQZ1JVuMMLGsqDCwQbZXEcgs8TPCr8Nu2U4cKpBXRXumgJf2d",
  "key17": "5zCXmjGnPSAeVX5VZhUBbcUpTD3cKQ3yCwttJCXrcosAwV6WMbdCf72vEQ9EpJFUdJ2wP13m6hHwfA64zPGgQndh",
  "key18": "2yHuQB4ePssse1tvaZhgcTzKC3oWXwRisNwysZBvLHvAF67QT6sWQ9thKZW1A5Ur3MQ6frZCPUaEQxvnc9vCrENf",
  "key19": "zVVCaMmh41bpzFEnBsrqUcEJansHUYJggmXcNFtQ3BLizCKv1DUjdz64Kja11WdYCibkuwPmCoyBq1Zq7NYLFLq",
  "key20": "3pM8vqRnMdHvwvWMbm2bm6PhABohHmwh2YYDJW1Nk39a7yshSzVRbtiqfGx89291pDmRnuncYrQcy5mtM8Fthihe",
  "key21": "3bptc2fjNW9u4dSVucjbV7iys2EmRw4aK29HPekFtFWTRhjT5tuFhMcPPx1yjRkH54EqxRqHoGtuwSV5qZ98hBXF",
  "key22": "nuTdirTR5YcV1h93kPCU5dUxxC3Q2hRVzxLnFA1vo5jZSMEmqBF1xniwzVkQZhYE7RsLQkEnSDJN1z4bGTCNjYr",
  "key23": "671sysMCa3EnoJqyTfHFNQL8FxCTmzqsFkGV91RWTUHzENJZMnQdD61gkE1SSX29bCEivd54McUDzf9dNJpD4PPY",
  "key24": "irAjvXPbmYAZ4biFPx5cwNJARzkHH9NKEisncBoc5o6SEuCaPu5sLoEi4RMebDvtpAcJnmdkrPYdhyEiUSqBERw",
  "key25": "5wYHRhPiUDxH7KQF3tY4UXxaXMXnHRMSJk4wtZKQchqwuTowB8zhcAGsPjFg9kxFKjH9JjSgEpRsqsDg9KUApXoe",
  "key26": "4qfQbDhHt74gwXZGVx4bSszm8TGwtTYpePfaMcHxFjdN7roH7yGGaCqbcWE6GS3SsrZPLKRorgDt4WsgMbm5xqLs",
  "key27": "3L4WHSQ6ixfcaJ5S8HMP7nw8CJVaHLLJC5p7V1V52STXEY4QVLaAAcJDjsDGBJY1frzRYC6WeiXWCdNHMvokzfK2",
  "key28": "4LESDoQmxNyMCW5eVMec4GynkqwBpw16BmHjMcxFLCC9kFMuyG9v138i6yMPxV6W9Ps6jHhMoxPhU3p2qhxL1GLq",
  "key29": "3J88svXNWfPNN4Qo5XQTLkGXXvZeABpRRJSPvA8r34erDTtHXP13gRskVyzhXfyZxsvQyJCoExd5YqPapG2wuZNX",
  "key30": "5uTVbf8TXjx1QpSGfBWHoxZ1a66wsgwQLnQqV4tjS6DR8yQqp7SbrGDvJMskNcpevz78yHT9EMGoREXv9uUczvgv",
  "key31": "o2PsrKoiwwUNdRPhRtVBidTtRctU7otrFSsGhgstgK7eojHFCY3xNTzpT4HAShWGUdTfNn3irNiWJ2tbqc23RjS",
  "key32": "36GxdcVtFWvch4t2YHk3os2WZt1YWsMkppD9eAZD3NFRf4nTxwuYWECABix1LCtr2uQ9vGmoJnQTqr3nE2v5goc8",
  "key33": "5ghPBWptKsgWisEfvgeE2NKftAadu1tM4hNe7Dd2XBBZVF9ZpkhQE5Kz1UTHgDR2d1mY3KanhjmrBuxPPg89RAhg",
  "key34": "4UnUJeKLYAmheHUkBhZyQVwZ84P36bPTsSyxamRyZvoDkvihzcCiuGJvQ7D4eX8inAuPPdLVBSBTkonNGqtxvJDy",
  "key35": "5mybL5JxWPWrqw2eTBa2TtYMMG2W47yaTPu5zdgUUmComLVoL7JAWQLa6aPDhEdWD6Yrq6GwPcLkuosj2Gm1rbUT",
  "key36": "sJzZnFpgqWfWzrpGMoKZ3AV65gZURuFuEn9tfjg8Ny2fMmqei9NnAgeza5XV7K2dBZpK1tNZr71KngTb6G42RyX"
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
