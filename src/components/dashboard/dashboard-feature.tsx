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
    "2DM3RMu6KfmX2o6XUfBAngenb1Cif344Ze4XFgpyk1zRUFu6FCtFY8pPt64RwbnFDC9QKXUkbvWZr7KFbBYQSXwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WrQ9Ck2h71QBjqJaPMcJfTCdSUdw4T9q5SxyeA4PwLddDvwcAJAz6ANV9DQ5u7C4XWi2fhMfPbqjaksHD5hrv5",
  "key1": "SoWCJH4sqrADqxUs8sgBGCzdmudiW2nFZPvBHattxL3e1uQestR7jdkysxZXoFNWd9KkTw4qkdWy3U7HsCvGhdx",
  "key2": "3gSiemzMDp9EDNz3Mcf32GQ9jpxefVSYUX2gvpt4YvxkmgqfLSif3Me8FLmSV9bhHVzSfC1p1VKesDzrcfZNMXc1",
  "key3": "2nzugSdgCHSS6Mye9dwYz8ZP5sDrTDs2hVEkL8jTjD3ZhRm7zANPj3uCfPN7Pxv5BBjiphDoyiFkQwXxfzy28NrY",
  "key4": "3gcRn8qoaMYpoWKoX6knAGQCVgT1Ma41KX4QFkgX2cXL29dJmk5d5wJAHXLZFdGjJcohD4XCYyAAZsMVL56Ph6s2",
  "key5": "4eAZUsX4s3eMvY7uvbWEeCPHudAMzpgUWfeofL9WGHs4in2JNQFifmLAu9MGEh7DxRepSzTDnEYbajXNvN5iDJmn",
  "key6": "3ZEW9S4JXuTW3aSAatUDm5Xrp6YU3dBAeNNbLDwgHp6SVwd1WMEpMjjdp9EKHuQDJE9kwrsNQ7gHyth5ffc6Qss6",
  "key7": "64ARR5MJtXutyPGzTQMiV2ENrYHiFsDaFDprtttTfPHyS4kHDRFHL8YwiEfcrcmYPFX4VK67SKcYc1usSbZpHXS",
  "key8": "3ENzf3CmvePXuZpUjzZCHsfMJd8roTsoHQGdQDc6XYLpKJ8oAUeJbugZedGkfwGJcRhH5piQ5dMoVnKN1xdQWiNF",
  "key9": "3iTrcLmikdB4X9VS1R5vwmCBJoBz3ofTHxcFDXQgmZpuNhcbmthaQTZxpNhJgyCzpbVZqHwiJe5wEHihpZmeN2JR",
  "key10": "5M9kLSb5cS6dddqgHg3WnmRXGqxym6GFdFpLXRfSfWaGiQx1wG43TJLpTkF48GMRXwtDcsWPnKcEAbNB9D9Frr8M",
  "key11": "5vbhCEuCTUDQXsFuwxreQdPxzr5uvrKn1ATh3xNfHu837ASa1KL2hZ8MjF9dKnbwjsAjyF1Yq64SApfGemWy9zHQ",
  "key12": "2nDsZU5TddMH3H8iQEmpqfmmNUAqx6rLy1tG9rKYRokKXFXbAYadXSk462yJ1A5fDUig7AVCuQzycvNucqFdsT7x",
  "key13": "3oB7gYVm7KD7jn2ahyUZqP1DcjcCWcbD7rSJgGfcW4zMxyPayEszUAhdRB9g7KRy24sTG24qb736a1gn3tUojGNB",
  "key14": "3Yand6uQm5WPAHVQ3yv4HKoUchXL9XHaKcpceh6m22Uh1bBfNLHGx93NyNpA4kLeNJt5jnLjYg6iMxjM7TaYLDbT",
  "key15": "5EBwzEEmAruZv6XNQUd7gQrjsXzcAhy1qfs1C8uQeWSsU58CNTzjusLmNuQKKE21PSeZNRWsioXyMygyHpDbdTGa",
  "key16": "4Cq2BYFursmdJt2c4EiHQ2LiFwDEFSmC5JeXEFQw9adfPjUiQC3oKsmTyse9uTmpkHM8MJ9ZYDxNJidWZx1xUPRR",
  "key17": "2ntmBuMpB5SpUxT8mcmVzXMMHrnr2LBxTDhYUaWgQdnDvqvXg71g2e1qjqqdQV8bq1gnSh4ZXPNDcrXciP4vk2CY",
  "key18": "5e7C5BBueXhwSwheX5GZB2FwH7q3zuh7ztuxXgpUEu34cJ5Wdp6iBC16tTfb3g3XyYNWNAKVH44soXuqaM3z2RMW",
  "key19": "4oiYt7mAFEzc1bsJ4rNZCgaxLhEkQC2UwcaZCEkJaDZ5RQK2QfSLVFcADgmY6Eiqxy4uVx57HFx4LrwotXg9pbxF",
  "key20": "3vb3B8nN1xpyCL3MYUhQs95mScNktrxVwWsjxz4FE4ExsSEGipvLQTWJXUsgumyeoe8aMtdfVkSPKVgtQU7jjoB3",
  "key21": "3MimkLDvW7vpeDCCKEMPpKxWC76J9mkGaTgy9iKGTBpmPDSPahAQGkDsFa97h3NU2RQdJjLRRh9QY4ZmeSNnh1pf",
  "key22": "5M7ghceY1sdfyYqSGR37SELgE65sQRywfPKJ94bhLYvaWuRn4CSw2ACuspJxo47ABhVZqag6ifXtNLPiJ4b9To9Y",
  "key23": "5qgrswRL3WBqhgHpR75n5capfWXkb5K8Bw2TDT5fH5WXora1J9WfCWV95YpM51ta1YLiCNo5jYk7ePajSWNHwE7c",
  "key24": "yw54KLEiWq5rM78avEWjJvvrPTN3JPXDGdg9Kw9smgZikWoVMxNWWNfye3cJEoJFb64V3qT1ZuxmpujEUXCmxG4",
  "key25": "4SLe4bRbdj4W1FqPYpJqDAmrmMnyhr8VP9s11XtDCPHtjevHSG9JvmjXCi9w8yvBebg3itoHoxQsLBvgst6PTjvW",
  "key26": "97EaK1vchn8WtkXwok9qNxGXH7MwFfR1JQN7VSFR4qer5yC4vZTzXVhJLcaZt3h6jYiof2Lxq5mvxVqhX6QVNts",
  "key27": "4vVucPR5EscRiQXTB8fH3C8S7qScY8jF7rbsHsQna6KpVKkcwXJJAdbiyvVYVDipkBtsHrDFyqyDntaVc2qHU13K",
  "key28": "63Gfb5ACUsj27rrMAyrwqs1GPxeE47SYqU3WKH95DGU23Z7Txj1uP34WsYeozxXd4Mjz93NCs59TsCmZ8BsoeGAV",
  "key29": "5JaqWxjA1m4MJziHQ1rrTR9HtZvyBsTZnvSebYhLzqbozJFYGK1TEyAnFTSHYuuSSQrUyBtTixk9HWwXRKRGYhso",
  "key30": "mMMiDEZuPaTTsk82cYUMLzUg56Wv3317VVEEZJudkQAD2cgybF2RStyJ7wowiFNhxs5pKnzHEUSTUk3uWWjUts6",
  "key31": "4y7MwC9jvyBhmCdGHTPpsQKk3agxtTZsd8swRdJCe4ndXwJVqXuKWLzG7Nc51kguPaHwLntV2F9fm34Bvo8WYVoc",
  "key32": "2BCziQPD9GpDaybi94jucwnQcsuKZ6BKWGf6eqythXq1nvGPQzSdNWsXh91Vj5fjLUpm7uwY9scXjvtAXvxNutS6"
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
