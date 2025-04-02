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
    "5bAYVZiDcyNT4N7RG4bmWdFhFhf8ptkwpWiceakFec1dw4zJDXNLsUiaAF7d37TqEu63adXgrweeCdCAqmFcev88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ywxw5P4ewTfyVLoPtfYbaEtqpq7g5y3DREzbgfSfujr1fkP7mWBVoKm9N2cvenanqk5bu4Co4dcbdADom3fFK3",
  "key1": "2Js4UYqJSsf7yojE1ZgKwDCi5oHa4T3Q76iYeJvbQNNgV4LP2A3o1x2T8pRmFnx29yWTNgxWbiyhW72jKD6Tdp3N",
  "key2": "5KUgun642fc2PdQXHFtUaSBaPZZtsFdniU4vMKL2VD5jpwge8nhkLsz2EY1QKSmF4RzT2nGuYVW1Z7aM8GkaP4yZ",
  "key3": "HBY98nmQMXjLBdCQLjmQ1W9XyygUq2Z1hzjsSZMgSZnorYjRX3Y6KxmDsMjBaukHPuckEwQWviaMRcJ4TST8EEZ",
  "key4": "2RMfUxZX7S6uvRNsjLhR6U9ohkPHY3JcYsyNRMvc74fDAyAyKfmnoHoeXC598FFToYE4UCmmD8AjLrhU9GeR3H38",
  "key5": "EiUzBsRm52JjCwU5fULeRLNn5j5pJczyoK1cCMVP6MV5teQLvuUfcVkq431LHcywDsxGmKFEne1Rd99A4HXcU5C",
  "key6": "2eWiJjmnQjY3cuNv3wuixZtjohNQN2a589S73P6H4xkFy3B7Lb3vDeaGHFwpghpy1RCsvDRq64uVhXQBj4iaMHQb",
  "key7": "2HFvho59S6ACQppEJ1YDWDHLf6uemQjwxN4eqgtp8AnJyfM14R3YG8piEkxNKeShik9RCBvpDBA6JLibQ73wbHo1",
  "key8": "4Ha6tiut1p3o1j2JsJyy12MP93juxoB4magTuYdMMeq7sXphVfoDfpU5chfhQfCrroMPxiyTyudp5SbULNzjedxg",
  "key9": "NFC2LC8P4kFYYK98qg5MrDPQ9Rw5bizgyBQpH8sdeAY2dm3a1ea7daWoC3kYs5ZEsF6JvkqiAxebpXsiJF7BhFF",
  "key10": "3TFCocfV9vgppvkckz7EY1DqW5M6YLGyM9rEF3rKhPW99mP3PFivrzfRLktKimmsPUkdv1XVkD6DRcbwybXY1eAj",
  "key11": "4MpnqSJLbyCT6TyX2Vq25YAXFGUQvfFa6DHigPz68s4aKt5V5owpXAFCZck8opJB2nY2Jnp2QH3J1Pvez62pHi2F",
  "key12": "5tZhiHtc7qr4FcY2qKiZQqL2PEuYGUVLk31sT3S9y2tpivmdDp2scdxxUp8YRPyC8CS5vQtJ1N6cYNdepxi4opZA",
  "key13": "28TMsGPQs22KVo7aXkLK5jtcDRraJgtXM3XJ1PKTWuFYMyuJPnNgfjDGGrsriVzD4R9k4Vvh6P8DyL525f6Ht4X1",
  "key14": "5q8i82X5nsm4v3MQubeksv1iwHnUGdhN5ch4PTemF8eYkKxqJDWr2Xje5PJFVNppbPYcLmB8zgUv8BMKgQcZim4i",
  "key15": "41z5abGeKXgktUbtxUzK2pJNTkkYWKCVSC7J74QcKpnQ5s5jgQRJfKJs2ZecRdQ1TnsXasZVDCdNzrz76cRBr6tJ",
  "key16": "5mkomq58LtPEyn99LrqSHmCxgVuqRRz74dWB7XUWZoi9uLgg3p2HuA72C2hiGncYsgEDt7rz4ywo89nDDDTFaskp",
  "key17": "5Eta3xppGrWPn7RPruR1Az9nxStER7w8HeS6G6wjiNkbCPLPdYwF1bPrTCDKMESZV4m4171StR5Jk156rqtBTAtk",
  "key18": "266soWMuQkzU5yB4iDrWt42jGVFtVXCTJ8k4REmNQFHrPWp2R3Q2C4SfMrFpoSEaGaAPCjfMZcitt2MoZhDyBMbX",
  "key19": "G1CwWRNdmPrcKjRF969KdMRBgi3X6M52nHcek4qGqmvpaExQ4KRqhgfUncPQwWSGirBVAQ3N9AYS9Fg8SkEtuRZ",
  "key20": "2Ac4V5rYZGBEKJDvfoZtPDBN4iJ7woAs5BdyH68pcv1fLkQRg9hj6JMCbvRzCCHjVPkywd8uHpVGbq466PnGoDjP",
  "key21": "5VdsbzNhJvAN3s1fr7pZZ192bz2yx7xjfwpKGtd19avhvN7FugL4FAHtNwJVBjdKfJuF8jddk1FmTxq137y7jFcV",
  "key22": "2t9p5HcH6zsk3RGdesSwX3H6Z6vdRu1nhqViMboWZRDS7NGXjDkVyGWgruULqZuwm1FrYy9SzikrS7Tdg5tQVzsb",
  "key23": "5x53qbVHr8ZJgM4vvqnUngDKqfVR7mJnUnYyyuPmKchKUV2T7U1J4ry3Vp8XiCZuyh9n7sEtMfLVVZq4Qhyu8bap",
  "key24": "2Yu4eFJ125BGpWkyj4USWbANUvYvD116puxHKyn2acpUxybx1fMEBVrFoJhQnMv3UUksX3CEu33ZDwapKm7tjej3",
  "key25": "4WLJhAYL7YXBNYzNPzQ5V7iDNoV6USkupXfk4nxMe3czjwE7kPC8Vhu6Se5FJpvZCTc2LWbLwQN9TRbk8Yj1T8Cn",
  "key26": "6cfvAXBZPAdw6jCuLKH6vSefawu6HrTPf3NEGWEYowruYDwdWvLCE3WSnjz8Bp5ny8QEJf298QmT8wJwRaKNf3f",
  "key27": "57irKN8q6ZGs8mmJLxVVFZmdrYzK7zh7ZuQko4FmLdWPbvDEJZUoayX5As9vnND4dLF2T53hV7xP4h9uTYeP12W6",
  "key28": "2TBzPpUS2VP4JD8maQzNRVucERgvMKb9fsJSM5tE2KbkotBScX4fFwfvLEjYHj7E7oKzPAWruWtYHxt7fq2cvevg",
  "key29": "FHjXn8fZPYYaF9z54vtt7uWZGdbEqKhbZ6PyhzS3L2oExifUapwk1iERHxrGrH3qaTtKqezH863urrXooFQSPFP",
  "key30": "4uWGbpcPrc5siwYYLAFUd8dzgzSWcFCTxLY5ttAakmLVf2zqMhf9WK2EMa3tGwuQL17yYzGAEeQKHiTE25xrra4B",
  "key31": "2gxrM9LtqVG2rp4nC31vbkdqKjXpSAEY87rXgGEYjLxngXGns4ohyQQTNTq1PxgY4mpUarhyRp2xKD8Bt5HufwVB",
  "key32": "5zxjmgmh2HBLPJMW2UGgxDEYquCovYmoXBPoBS1WLEH888Qbfn1tsYr4GCXCieWGRKhXFMdvzbUE2K1fxB9arUNy",
  "key33": "2CMnDRPhn6GPQyw1XNsoD89JcgcdKhrWhWmvu3chbF6PiPBKLHhb8HDwGrXjyD68Nu833BaWDWyd9WQgoSgpVFhE",
  "key34": "2NboE56wb3kT1JWfbdm6ABXCyUdEdRQhaV6uaq9mZzUS3DcP8sfDRpvaedxVuAe32F7vAQaPuimgZQM4TGf7uyLo",
  "key35": "4gLus9n9vRYLkXdqJZv59YJ3EFmc9cKEeLUsJgkXzwpqYuf1Fe8GLLBaGASCGXwrofEjSyRB7YG5zPrm5sQojhb8",
  "key36": "aSBprC7qv1Me2qXL6zwdQAi47THJDbFUZh2gH4stELpX2UMuSpsMQNuiej93jgcP3mfjJStdmhKX8k38rXnP6BE",
  "key37": "5Us7Emc13WsH3gfpu7iEHmoTDpEwrjaedYu5XnygbAmkTLmuDzxBGViJcf3B8ubj2niR3Dok3aUKrKVGeQySjSsg",
  "key38": "2KYdmsJCh2f3PnmiCqB6Gyt629tqXXyqDTfmeZad4FuCySUeKquqJG1iwUd774yFG4EfFfkxrnaicts83rTUPJ5F",
  "key39": "5738ExWcWG8kBbDhttfG55892YAm5LD83Ge8KVSxDaJryA3zsBbeBBL34boPT8fshQBVHRUq3CGAK8ZHbqViY3sS",
  "key40": "2AetPqnLjYUHXoNug8W6kj5CcCH5WvMKMt7UqDGQgLaQZiAw71XXDbrAss6hxJbNdGjuMQXqof4XRnVvWfKS8jb1",
  "key41": "4t4UkaomDopx9MQ2YpZBqteofJxTTJm6PxS8FpjzWhh2bJEKFLziQcWAo2gw3vFgVwKtk5nsVcjMAYQMPEpy24DH",
  "key42": "4qshfv4MDsg4pbYiwmHL26FUQnRdax9TM6RR5SpWS2e1362aCZASTktwkUkAiJbdJT88fvs8iBP7s88wW1pcSV7z",
  "key43": "22b5ASGF5gNmwT6aXpnufQvQeuanbVr7GbtV9JBj8vkDWBAp3r9Gb4np82us21SJTzRHw76p2GZDxctWgmsR4k1V",
  "key44": "Qakzhy4LTdJBBBsshEU8N6BcGwYwVp13cjYJTn5RkUEyobFgnPtw6MDL1MboNiXgnSwX9CXfKpAsynL8fqCsrhJ",
  "key45": "2jKAZKazU1yJMBaTvCxENFnLAyRnh1WxnVNxkHGdgrnkForGpd86Ygbx823XPJg4iDRvukma651k2fqWkSiVYhSz",
  "key46": "4f2rbvP5N4GQcNZnxe5AaKuAwqjh9bMGNnXxbdXFvUmhDLwjj9zzfUtzHiMuPQJmXhSiFiD3etknDXgNDs1tXPhQ",
  "key47": "2vCPYMsmzeHRKobb68RJjSMfLm1h1a8o5odAVJ7aX1JSpdt9x2h3ogEkxtHA6P6KoqWPqfKjsLfwbxEHupn8Ckbq"
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
