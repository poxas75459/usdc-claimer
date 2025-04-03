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
    "55pumabuZMULw7twzHU4wwPPQYyug5tcD2fRRLX32K15rPKnK1Vr91Vz8enp3xpufGKi1K8aLhRuxgj5bz1fpbj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47emGzL5WEPykMuGkU3jbSEnouTNpU5WhU5CE5Rv7yQmBT15wRoTkv1Q1mG1NuzUy98WDrb93eYvV8fHaGQWe8ht",
  "key1": "4HYNXoxqedTywWZa8hwHhyi3QZRUxXL29uhZpGYvHK1CVsXpMgPqTQpECZuzhR5isPAoj8L7atR3ZmR7md96oY8Q",
  "key2": "5ZuXHjWFMq2phk5K6rXdrTaoQRSPMD77EaAPuAiB4XNkVRGz7Pfou1UK19obQECgcXoBkHefBjUamNHqVA4XFReV",
  "key3": "2iTTxKRZptRnG9B6zXGrdeX3notyQ7rtgCmgguXxT4xLFEVTYKihqtPsYHaS7M5DTXS2DV2YB6d6gLBfUAXDxMk2",
  "key4": "4RpaZZtyZ3jC4HqjqHcV28SGAKscg3cBq7Z4RUURvdixREh1aVrddXcjY7ow9uaUqqdRUBtQ1XKVo5ibTVBXCLER",
  "key5": "PwWCrghnYeXW5MnMjB8VPYhF1ywYz32ndJdeBwpMNHJq7UnrwSYPJwUk7ECTXFP117Q7LMRTWHZURRYXsFdbYSq",
  "key6": "L3piy7trVmog7q61sBAM1rXSCTmNuGrWCru3AjQXiX44XpQXarvmRf3QXR4f1SwVTzk2sc7JgNNxJtXWb6BtM6P",
  "key7": "Umqv5sC4MRpamqasXeirwxECU2wa5SXY552HkQrY5xNVmds5HCjrFWJiU3Dp34dFUqD9j6QKuCjpXwaJtGuRaXp",
  "key8": "46v4j8xbknJVhaDKfc3KVt8zKwgXjK4Qm3938FjCNuMWoR8Sz7j71nbyCw5xjgCyvjTp4Y77GuWLZDTiKjM5kyGt",
  "key9": "2hu9T32dCBN3YrDKjT7jLcazat2qfsMAtSa8q5zkwQiyePAPSaGD2CVQh2Fskh9BrrZguytwh4LPuT11JrgnUaMk",
  "key10": "3DivYuXwERa4kqHgWy4XjTCioy3NFrqViCiG8tWvx6rQLi8ftJBPu15gZfw4ReJHGEHjPpP6KjVTfsgeXeq1nyKt",
  "key11": "3Z8hChgL8TaUkKZMoXENAJp9jqo4x5dyz8sC2stYJQxP51RN47qsjvQhBdc3yKCsunTwgEXhrPLMsw9RatUQPDLY",
  "key12": "q52yv3HyRRfRfYodpTd84wbKShSfMyRhtpyNwAAR5iiK2QCC2HxADb8zDEiYMSPD8mzFFxngrRBkwGUsquEuNkb",
  "key13": "3dFr8zGDTxRe5CXvX8iK36fvnxifoFNa3YKQ29wWviLtJQH5nD5VquJoEPnd6S6uMnMQzFRqs9tEQ3erMvQzbmgg",
  "key14": "5PcfLAhJ76E1bcb3u5iDYthJnJSgpN5t6T9D8vvH7c57yd4E3fD4QgqLyd3XqjwE193ESDUoyTqW88YzF2ewMxRv",
  "key15": "CR8wE6Sp8FAzAQetynL871SM6f2oArdvoKkaEUUEbZ8qPmh9unbcKDbXipXJYNNEgnFrtJG5RHiXDKQa4iPp2pX",
  "key16": "5wAwfcXcgQz3HRXbUQyUEqDHuWtva7LKFB7c9o25GaxCGjdyq4KoczgNNujcUZAFN6HRfQUVSFpsQfoJ7qM8oeLi",
  "key17": "3jNPWxm2Sq2JmNFkLXvy7sAXTw97Jvj1Kgp1fxPodwJxUKbsxCyVMAwqLWkmW1aDszaQDc19sVnKajMuyndgBePd",
  "key18": "U8TGrZoJL761pRaeyYA31Kk2CnNRdrGEisbFmPbzthLTaMJLfxgkCCKoPxmcsS6KsRL88eTzE6kbepAadb7otGp",
  "key19": "2179Xgb81RK3FXSTMmtPBYM41sDpgnNqPro9kmim1ojP9vEGL9tMD4jtv6eLkLHsNpzcJMQM3ara8d4F7rxU6BBw",
  "key20": "3vUiasbJ8sisxANptcoG2iZiD5HV5XVJpgsoSSBMM4uiKfwHJ9zjrBSFrsVHbBAxykbJfeJfHEhRpZBVQiPa3Smg",
  "key21": "4kkHfA96uqrrc5ETwKKfR93ojWrrm3GKgDjbnBKLFFyRu3ZP9HG434C2W6w7JY1HzDRDPwuRLxSnJsfNuZX9is6Z",
  "key22": "4hweRbS4cw6Cf3mW8KQQqkBKMV9fcHQsVP4oKX96SojqHsbsEX6g4RAqR88De5unwkvFFuVuGdC858GCpGBPds1T",
  "key23": "hu4pmo8XHWPPvHXc7eZXDnDkRv3aurmDL7AtDisVKbiCah9yZZrUjoNj3NRGbdHiAyiDZtcSx49BQACXGGVH5v4",
  "key24": "KorXraWHwAPbFk7WQBHC7getQnT29ozf4QN6oJFTCf2XC6eRii1oxRP6brwiX9FxxP7ETWmGAVmgWg3EvwyUwQ8",
  "key25": "4qoPXZK45rNK7tocp8ANd9yfzWe12K9eiBNCcBn1h66RayQ4mUUeJhKsM52GHsBsGWSdQT4a189PBFQL28SUQXLP",
  "key26": "NGL75XMSA31aKzaWM1acTi6sg8BowxgzFrL8iXcmVLFEfK96SyZSDbDbHzsSfpfmTprLBJjE9e64doZKaPToDkU",
  "key27": "3emG6syz8MVCewUCBPgLf342EKGkVjiaD5dFQLdLSkUAWT8iFQmV94UiRxvVYT1pDUBph9mBPPCYEuJ84Gfg4xr9"
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
