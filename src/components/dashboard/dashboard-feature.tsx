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
    "G2k58XueVEYoHaf6qwvZU2FL3PbuFtZQA1kK2UPYm68A1ZDHY2QEcueNxD6Zxj8PKpBVidr9kj8Tqj9brvGYLct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWjJgBbhVH5SauSti1Ehf1Bhs3Buctkci4j5ByYCGKFpGGyeabUvkfPrFgnmMo2wgTDZUZQgbfMYf8C52xpd3p2",
  "key1": "5e7nmqPggcJ9JZTwnZKuZdNaygb1bWpeXHsUiGWxQVg2LDaa3fgWVneamfk6Rnsr8HcaYC7V1HCh4Xa5738VtJ4d",
  "key2": "319NAxCGAt5qqUxB3qFpviMaKBu6H8uyZDXHJAaJFgiJZ17SyLtGmXRqeXGqX1xZ21ZQiE3yMXArDPPtLoRSTwNH",
  "key3": "2gXRLnhrWhGaMuF7o4ZPYYptXnZZJDvzFGzmK4L8zmAfyNTJMYY9LVvJci7JayA2b8L4xezBGzGx14KYd4r6WKi1",
  "key4": "2Kze9t3rhvz5Lr5QCmD1L6uTj4M2EFV8mwonAB8AbzYNwZBEsjABz7WLMKnAvj8unPf44W95GvbXGMNJ33WZLfAr",
  "key5": "5wE3E8GneDACCieY2CSV7FFSWX7aH8RV1ZKaQeo57RtYc4EFahfZDreup1RSQpAzhrbdPQyxZX16U3gQHkbXHUg2",
  "key6": "26E87oZZLvHFy3Qq4usf4qN6SUn3SH5AwGM2QsXn4LWMd6jLhrbYzdCGdh46DABAhiWoRxPZycRPmfZiwV9xFpcr",
  "key7": "YZdHEN1AuovY6fN4JVAYp4nchLFm4tyGGtSHaeeDWJstsKMMUfncMZ48iXP2yWx2iTqVPgJtgwrvEgDVo1jhM55",
  "key8": "5i4BUWxAQD6zzbs4yusc7jGtfM3yt4Ay8wBebBqPjFWwZbHenPvgFHC3685pUt7nCoceyzHTqEMGGiA8xmcAqAvF",
  "key9": "4gjXXVwokuDPQgfhpJoDaTih49YGryChaAhsHqKPSN8vk91bnLeCcJbboGVhHyoW6KwV4qcELRdEbVC4QW3seL1e",
  "key10": "5s3UZZTZxP2bkoKxEVXiNWW6LWYBA6c7M3WwsDHCptNVM9hoLp53NbLLRX3TX7EMV8TTg4CAVkkEb4j46YxQNgge",
  "key11": "4C6aVouD7vfMypE1z9WiXbwzVe6PeKgct5tqz27HdrAxayUytXiAivwKkBQq6eWKNxixRXAwRpbWnG6KmCifmZAz",
  "key12": "5bRndpE8A3gS8FJhSVgmm6cgmTG1gcmHqdY62JrX2WWUiRH7AMWzMqhA61SN1aTPdKPDiw2s2xkvsV4PBoA86L5E",
  "key13": "3EYGf2vbyeKtQYzabkfBZgrKRL4mB6oD8itf76euDGnSD8JSSKCTWTRMhtYYBno5G6esxpYWb2s5yJqNq9gRwafB",
  "key14": "2DxfDnFJwf6gWtCNV1H9RswxxApo8FP5tCtd9nSKJREPE6J5BbBUGtp6tYXLucBbTK76kLsRPU9QyD8hLwJmWodZ",
  "key15": "45GNYQzRSLQHy2TXgRYAjcXo4gqakBg2EKhNTu46KZS3Svwk2Uxf1eE1znmoG75mnrTNdRGn7wQKqgvkg9XdcKwY",
  "key16": "2ZzH6vbefsZZkZmxU25ofgCBkZQAzKaV2Ns9qQ1LWD4jLxZwVh2KZRLJk7WBtAD3JDpJt1aefUnA1QBeHecXQ2sb",
  "key17": "47mJ1SrLuxyvqG5rM9rBgCJTMDHwnoYyNgnwWAgNb9sZv8uKdk7VEu7v23s6hb8e4K27KBQUmteQJu1iXvqix6jg",
  "key18": "4jXMZxm3EweZcBBXPySFJoBkWMdK9cfNRnw6zg531BmE2objfWB6VAiF4FxJEetyuL9698G8M5Gm1Xk4SvHQn561",
  "key19": "4xuFDL4indirxJqbE4hAUFkfJpov3VkpkEMQZo6XsDV3oSy2SDJnKjENSDDMr4wbNXQqD2NYvow9McehTRkKqxqb",
  "key20": "4uSYv2Hq3Uta8Xofn4BrHkvt7XQXN36svjk6N91M19EVy52DnDEYgJpzfjSi3HycwWLkfpiCkibpZApaiERU94Su",
  "key21": "4HuPR5LxL197pRCktvtHH8mAgeS6vZGEGFWcCRZQMZGDGB1LFWpt4EBrq1rUT1zZBJadk6KdGD94nCQAdGvs1P18",
  "key22": "RJo5ZZ6sqmjsByShSM3rjgVarPKsFeCV7QEoTxYHDjuhyoU6q9e1GQD4VRdgbBNSUCw9HXwRJZahq98aEKTLYsW",
  "key23": "5NsXdG7cVuBBoiQp6xoHT2ZmkJGsRkw3FU7cQXQtYt6UQpvVVnGp4QaaeuDRapLHzYMvFwb7Yy86Sdx8irD6n5Kv",
  "key24": "4WqPpLuBN8aTRSKM3vm4sfn6Zh12stkJV3U6jqa9XseYRcDQeJoJkXChghweDP6HXa8UYZoiGdsp1KqXjDaa6713",
  "key25": "3xStChhvpqTCUCeLrJsCWbWrHYXRNinqtTW462v3CsC1sZqENLTiZsRktW5xbnAMNeZHALHUXttXgxZTdTmnp7qQ",
  "key26": "qBsyk6S6UR5AM67fQ2DnYbbDxdf3kcZth3Hto5wUWJ1Nyo5Rk2JdG5FUZW1wW1yLQNVR9atj8vuAQrvctg9p8Ww",
  "key27": "3pNhMDkzNC1DyTKwJx2YMyvoBvA6GVCicUhBbS98ZLKseJnjLKaDmEmgKiRkqKHDQ3g2641jeeD9w8BFLGEoEb4a",
  "key28": "3QzZht7S52r3DnL3g5JvjnHkAvQtiKRHwL3BLoLpnE3MpUSVFMzbtzgDr5XQQZ4JfvZMKFgc5zGsyRZ9HPGhoByg",
  "key29": "5a2bD2XgUrAKFYCS7DSncmHn8MBTuueEhAbdrGLm7iGYJoyKB3FGKLmL8431mk6EDrhbUzDxV3fxovBWdR2Fv6q",
  "key30": "c6RChjcxuRaDhzdWDeqMbtgJgUAueHBFUxBimXGs5179rK46Qkqeo2p4JbCcXs1MLr1VEycMjFhvU7GPvvgLCfD",
  "key31": "nVakpjab6wi45KdQqxyQ3V5SaWv8eppbgLngkSkRP6GiqVpr7MkAyF9eVD1V4HntLoNwMGWQfdVBKosQiNUmoLV",
  "key32": "5eExUWff6XmbxG7y268VXCeBLJHq3vAaiTDbK4ZjaHSEVe5uyG4B5q6MqYSHMHBzeaqB4zgVgxE3xsfHCdtqbdex",
  "key33": "5Zux4XqqzRpw6QHbepWkTRWBC4E2icT6d6LGrtQnATiCXeBHvSF9NAqtNcoCQ8udkFQ1YibXkS74XvBE3EN5NXib",
  "key34": "3CiubRgK4H3tN26bdw2PBY1GfU3Q6DXmWhEGzRqHQN7Ue9p9pqjw8i3okCTZdwKQBm5RupBu861XJMua5p276bAG",
  "key35": "5brwtTXE1E2oVNWYNpawATYMvuwyJ11e7MHjPxv3CxiDL3CbcXug5CB7ku67Z6zTzpSFDwmgJEhLknBFegN1ZFfW",
  "key36": "UnxvA7MgGqq6wLEdzGq4RMRRbPaWeoEUEnJtQv19SB3TM47R8NzZcNXJ4uqCBZYUJq8Ud6KWqGgmov7PWhgFoHF",
  "key37": "4RwimeaoaDoJtz3rrBSy32XKNGutjppEPxrpXa3hXrdzaRWzsWc3ABiMms49X5LTKAXsooDUU6cd6eaieTbdDsyL"
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
