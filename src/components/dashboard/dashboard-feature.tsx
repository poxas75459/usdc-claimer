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
    "5aWfWykGqZ2pSBLv6imTMUMGgW7H4uSBtod8mojn8drHQEGQfCTnmbmGLLnKArjFkzk67oqBEJpny5kGmZCZaGdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mv5w4hwSiPw9DhBGmzZgD4adTknYp9NUM2GgJBAkoQunZsmxvMTNtp1E9o4wJnrxdJwSJk5GPcMTu4UjveP5aSa",
  "key1": "5SjvzoseKCeRN8uMxZQsQR8zsKUqzsXSyXmU717btwS9jZ8gn6sdSJuC5YYsnqrW61EzzEWYCW3znBA68zndLjQH",
  "key2": "2D5ZoxmFnhxNbXqsAq6eY78UhFPhWT1sxWTCzvXGWGPLSbJasFPuyVv5eaE9WTkkHVvMWSwUnmCngPUuivFJp4xu",
  "key3": "41hewu1CSnxkhRPHR2EJmiihLqoKZdhkciMBesgkWwy2jTxq55zYqm3huwUskCBBePSdxeANr3LQi38L98rZymFG",
  "key4": "333t9UcJp8FH9gk1QLSWsRVop3ouJYKZPru2AjeiSuP6WxBPVddbWz5fvzMU7rnTkkKHY2YSTFsnr9rPtyUrNtjH",
  "key5": "2eZfZFocYy2XPwC6mBAVBHctyUFYHaKNQa8pAduboxKX2FyQazMAzriwu7pBddna9JJMmyPVYjpN26juLFHX71a3",
  "key6": "63qRbHHnHEcEta41zacD8iaid9wN3qaVxA4LFC3zozDST2RLsevH4469kV4egwtJUgo4M2ZwE1gxe5u59Ni8PdJu",
  "key7": "4EigPMPosAwZSV829XWon6zWtzstCN59iyRWRqoWCTEWoryk9vhhzxcKg62ggGdLZ9VGHfxJvRF4ZCCwD4p4E5dk",
  "key8": "5MYBJFAWZHciwPkadMACcvvMtj8cr5KAFKHQBPzHj22krn1xQBB5z9HVKfdDf3XZMEti1VGQPKwCpHRGthAtgLAh",
  "key9": "4VyKgHDPBckZ3TLT5tjuRtaSsVRLUH2tHG8RxPMwTi588Y3bTPbprQ5FLg3EonL9ch3QewdspEVk73BiVgcAJXzK",
  "key10": "3fdiVUtXsujNPP42sVSBeiVdRkMRAELESo8NEujrmxHuc9yLKS6dFYAkzx715jvSwuaqk4oAQWFgs3SRVCkaKLbe",
  "key11": "3XupKD4S4712xNKs69Ja8d5xV9xDLLwCgzE27jxqB4eEJjZbouHSNDtHgZYPciZxc8ae97gdVEgxqcLVG39bEAR8",
  "key12": "4rB76xtRTGh5fkyesY1HSJ4YuMmGEriR8taU233syW967Ut2sNoet21nDYYTkuB2Pz692jthX7UfyPheBob4zvAn",
  "key13": "2aNW9cLWqhRESRrbBwFQZm5EezJe8K8MVrENP94o2BpgMzVzW1DyH5Nk5WZ8xJxGfK7c4gNBiY1evyVFPcsNvdxw",
  "key14": "42FLJhGGgo7PvJKa4n23foJ7HfU1xMpY5f7tb42LpbHdxc9QiMMJbwTLqjPU5hR9mycYacEC4uAeQ6xSnXFE42Xb",
  "key15": "kMp3GJccVp37sDgGMXx8AXPcafANWmpxBvb9qFChnhoTpgorTvvT2gEbGn5N7aHpduprAb7HnYuKF6oD8ZFWzh6",
  "key16": "28jACPz3LaiisTTsqfHSCPYGt2UxnnkddpoKrWreZRZCV86XbbNEQYnG7WAwBrabtbgxs67MR6bDTEAVKJ8xbpgV",
  "key17": "4x2maQHSKaWupEovTywGsshH3hutFfPwxJj1qmxsniQKpZgPTx4BccigHWwdhRHhXymDp9FQjfgMwxZSyixzFRBg",
  "key18": "U8KJLmktFpF6VSwXJKo5PkWjCYAcohjcFrm6GG9VzK8TnXHHwyjeBq2am2VJHNKwuYu7XeTzF7TJmo6mNut88Eh",
  "key19": "3s8KSMWjz13oRUkzZ6JScFoGKHC5i8zVHJ1redSQS7sCxTHf9hYsw5YSELuitL7kGs3vpb7HTMKJtZbRgo3J5waL",
  "key20": "5k5aLUKVd3wpp6qmeVfKM4FZy3TLj7vpVyk4CkcXRxhm2UykiYUMmERtJZKN7yaSHpQppPWcopjXBFaYxwJgSKZw",
  "key21": "4b4YGo95DkVqaTtNS839aAD37i5pfZ7bJYWHk8TnSq59ohn2y4PDkCRnyG6KtjUtghqTdvyWnHRyj2cWEkZBsSZS",
  "key22": "3FUBNo53ExkXPKnJSbMX6tvJyyMpUigQGCC2dKNZ6GiCqrFB2JN43ZVp6uxAbT3qbXEEEVxfwnaL8URhH5WiDAiZ",
  "key23": "3UKbnAHXZoMg25sHAZpUwiwDnRuLsH4LLN9nd3Ekno4vBPVubLKpLtgi5cG9WWQPHnmcfGK1bJR81bHKzeLT17H2",
  "key24": "4gQnSFmWimG2R2q9kaM8cfJAjmqG7HSwnUBaLeGQyAXM9VGjkXhCtbUpsfJBXBE29QAiDXLoznfjXWMRdnyWEui8",
  "key25": "4XZcp7dpgoCsY2DLfe4VB89tDnWr9Y7H1W94sCGQUdLnF5qGH47kcAsTxebniJDEyAvWznhHKF8DxVaBpBKHEqoz",
  "key26": "27DPPLHAkcod9MbmQqErx4hyuUm7ydfBUk7EVCjxPnLztJ5mL21EBgg2fJ49rbKwYeDURXbB5FBuaJGvhVr5rBZq"
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
