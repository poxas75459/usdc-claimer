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
    "4LotkfUQK7mphQEM55ZfuXc2C2d3FymFYnCRQhHA824M5juPgyPP1vCqWw6UhseuLiK2VsBtTLhn8S5DGeqHbq4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5AduCXZJAFtXufXGkQf5xtB7P4rVA4qYuqApBjk3VKBTGZR6JhULZEBJbWme81Q86GjVvgC57i2kgBPNSyLAgY",
  "key1": "Tb6G2rsxyN2wcFU85YTxD6DbTNBeSS8nTbVzbKm4dKr3fANY6U9gxuZY93bLNkktxGLU7SLZUzb7TWTwy3oDUEY",
  "key2": "CNG7YTSjMgH3G7UDHToKV4ALoRW4xmeFVbaf9s2rhUpxgenuLF12ZULt99wup2yXSMXa7PYGPfyYapdRzVdPKdK",
  "key3": "42o2fctBMmEeXpxpuJJaPn9wm247tFZvX6LN8wsXGFrmyDDLVJTKjzS9S7ojXGD1TuUTvK14XzDTSLPYd3qLt4Px",
  "key4": "5TLRRzmhkvCSSpjzQgCHXcmUmaEoTU2sEAFALkKpb3sYeXcz9fsrtEYnUN4HFZRj8EmbqU9DyLbYPgfoDCdWWK3u",
  "key5": "3jpT1Tm8mQ9HKkk1JL3wM7kdDWyJ4FEBdWzyccAxc6C6rRirvPr6Wg53yCWD4U5NoEsR69oe1LQPyHVTeyvRG9ZF",
  "key6": "4NybX9Rqr21tDiak4VBRQie7N5NF9RQzwxLFQfjJtSnZoGrGN8iPu3XyPavfQh2WXSGbM8nxmC9w2HNNhPgrpFgT",
  "key7": "3MdpfDrC8BaihiX5qE5SDBkb9H1GT52nVWsrGB9TYc1eikawjcipCUd4y5o2bj6vXUz2QN42kHpvvQECqvD7xehx",
  "key8": "2sCrRdbropAisfbsH2N7aKqpo4RVm7MQ4jHu1qFBY6Jt8sVcDzg9kSbiHY8yEecTT7uhGZvSJ3R7RjiK6bJxDteS",
  "key9": "2ZLNQjCYYmLiBxMtaPStrLvt4rmbUE4DMXajyDiqMcTBmxXsmsxLSx6y35b8hTKEdiVm4nuqjFEreaVTQQSGz6pQ",
  "key10": "nGHB2UvVDJeyENLHBYMgSD5UJzuo9ifsqYtdzHMg7jyV99Wm2e81FXLRpEiDVMk68vAszWnTrAP2JmzgetYMX6Y",
  "key11": "5VxipshtJipqxfaMrCRQFfsZzanpUrLrfu77Q8gJuTPJ3a3RVe2SHi6QuBzCiLsTkQx9uNxZLHYMAbpiUax3Wh75",
  "key12": "2RpnV3WZM65vPyuv6C7mAUgZZewAaYDDA1MTjAW16fDEJvYEVBqUTuFEAnGXQk8TBNbxwuNbveGqe4xDS67tAScj",
  "key13": "5s2Nm41LZBd1U9pYqVDAWKNkcYfKsinGpknYDQeKcdcQhpkDcRJbKzQHAPTnzvxeMgtV9ZPNY1Y8jtVDtfdZydH3",
  "key14": "6331pwybiSh6c5BJfckrnVs6rSbaNvjkmGUhnhJQms2FcNf8QwzybogMTA6BcT1scysUpaZhxRRQwZuoXwrhxTDx",
  "key15": "P3ZfMGnn2YwuXZcoKJE5JKmQ3sFFujmkQonc7UwXc8d3tHMrosvDQtpDzpiABe6bbRZXsbBg4xtspKMQ15ztgYW",
  "key16": "5c9JaMrsJ32fQ33uZ5RznGUopkVDYJfg9B1fUoAtwUSRRsLRAh729X8fuCjJVRFqCfTFaiVbefGZpA8fZRzjCj6L",
  "key17": "5wdx9tKUSLekxqmM6C5YdL21PxPAkKx9iNtgu3LeZ2grjVdnodPKRAgs6hnRtuwHkfpxTRMJM4YvukCB9cSxaPrV",
  "key18": "5br16TsTgXdyzcLUCeeLpJSXVdKMhChnpNhuczCpvqDSVkLaoABLcHiAhxhxdQyh7y9qDu7Dz3KQMFMmRJ2fJk6G",
  "key19": "5RtNxn1U6MB8vWNp4DpbEoYu3A3HjB9kbzf3ULfK9cNQ5S3Sxn5m32yh1hQWAQjxrQkqoYRCrnsESrtJ1Zr3UcHo",
  "key20": "4HDgw3VpNYaHCA4dkKcZHBhL413suoz13HGSQNzhJkzfdjo8zcc6DSoSHwAb5BvuUN7tUKH8DXxbk8vcH6V98rbQ",
  "key21": "RC4bxXLqWc3dVSCebRb4hjXXDdpHXoQZJz6dDxx9wpEPMw4Gxzco2uSXKr1ZvV3iGQTz6inMJqnjLXqYdUcexdF",
  "key22": "2ruA4idwsz9TaRDveYHjVqkmB7uwdQCjVWMaj2DHisFDwBp1K41uRixv6teBh8gX31X3dGnrTt8b79Xp8qBd6nQ9",
  "key23": "4oTGQ16bDQ5Af8vLsTnyuRsuGzoPWvxk5yRbGvkZioYoYYTjCU5YzndPKXkPW3YTNhDxAtrmH3ZvFEwoMuc61VDj",
  "key24": "4S5eZcZ4H5eZspQ7zgerJVMtXkNUiMYphgXD6aefcJN98Agjcrd5gRNvnrLKmtEaicETJU7mqaHr2gmit3eujaut",
  "key25": "5pJKBe5AX8F3ut7DPcooy76vBBhFuQVvmoKsNThwfkXTTbkRrfhxmV9u65b2na5qLVNdg5Eh3HMnhj8bw5TxG1vw",
  "key26": "5LY5FczQZ3v6S4osTYdvrHq7fa21JB4Wn23RLQaEhep9G92cb6xNVBLsRYmpU12AGoUtfg6cY8N43HwaUZ3w7ttP",
  "key27": "4jNbSN6X9m19fFRkbrRPJr15YJJeffg1wM62MTdhu48qBai9gacA5gVcSgoAHjHSPkAiSXMP5MrZT72L9txe63JY",
  "key28": "49kxxtCrEn7Cf2gdtUC9R7Y5oXpY3pqzcce4nBh5AQiaPGzNXVt1xtYEDn58zpd5HsrYDoQ2QF1rjpH2cdywM9vR",
  "key29": "qNSB97H9oKLAYgUTo8siHwDX3uboWpijUN6UiEf7HXnpxR6f6p4E4s8Wug1ApsjZJ8NQ6Jc5srztSax43oA1UVz",
  "key30": "3pGsff857vFW4uTVLZWdUx4Drs8PHQYw7Sbaau5mqU2jQsUrcJydSuBcSFndnUMsEUAXacNrjgQS1TJBAxtrrJ7c",
  "key31": "5ittwXvGNFwCqBnoMYzQQV8AGJqrS1KCCrQ8eaBxteWCTX9iFWueeqEmwAdfPKK8xG3C7kMtrLCQjp5RvRHxoBJD",
  "key32": "aAab2FpsbuAu6uEh9L66p1e88YiVGcdwejB5PGTej1DYUj55GTFmkSqKz7ZyuqrrJsGDKme1YgoZyoVT6ELfj1R",
  "key33": "kwwHGc9r2w9ruYKJugVzXUu99ptD3yi9X8unYqjTSpmPMWrQkTxQi1Fe2YRaoW3p92UfHtL8eDKKGvzTEzdHYx8",
  "key34": "3deWjpdCQ63DVWPTFAL5pyZf9nPWdzd3bSXHSn1zkdLn8uFejZf4ujTUZm4tDjcpM5hf1xYZyjZZKaphvE8NXuvx",
  "key35": "4hwWCa15rKUJgBBg8B8x4okr4yBvakTEMHE8opj31NdP5SoUdgHttMiqrrhh2RhYsaR7pSVrCXxso9BPfFB4r8CT",
  "key36": "3rcDgUWAm13B79uRfPgsvEF9aQzev5uPmWq8cugqYBDQjeLZc79sJZCc5BGJvC7n5zsvpyVDhgpHnbjBHTXbEfDz",
  "key37": "54XTpeNv2LErEQYZ75BxD69aXBdTR1SYU3KV64uwVeNK3uRcxvQRpF9iBXV91M84JioEJiVTF8qAVqtGx7XA2iHz",
  "key38": "2PzL2Aj92pETKyQGzBrPjSzdrFyGZUGwLz28FJmbEQsv4kVyV78VRiWVsdFQappFPD9oaJe3k8UaYKg16XX2jkQV",
  "key39": "zUXp2mMh37GD22dtoY9QoEtVU6vP85yXBD6hjdgdzRzyE4yhExL25Yyrp4hk4NVDfvaoGLLTCwS7Zg5UZkBeG3x"
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
