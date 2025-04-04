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
    "3eaBo3bVyhjWXzUNdN32BA1TCmkfc7NE8B1w6rzrDU8AumHnhS3wHsSLRboCeFpaHo7i5jymqDcegstnrgVuUBHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4SdVAdoAFzxJSRXwDHm9fxYhsKE9vip2aBcRZp33YXp8AXTGao9MdB8XoY3ch9Z5cd63krpAZjK4qhqt4uh7w2",
  "key1": "2p3aj1W3tLWAimWKsnzZwpwP9BETq7mp8mkL2rHY2z1KA5Crj9QyguKTW1f7pXu8jrwiBnfDGPwPn8BjahyBHztd",
  "key2": "4bYBuPu1s1u851WyfF3kfS6rqeoU2K11uFmdaaaT7QdyLtePwi4vM6Sagzj4fc4p1d3Lnh9BJq1ZeQbQZB7cAHZn",
  "key3": "2khCLZJwruSGBw8wHVpZvFgZeggYLvaenAWpoxpse57vqFf3poyQ3nYcv5Vd6cEhbi24iLfwrX6EuPhuidMUXSHg",
  "key4": "4kq4XNcg6VqemHizCvBH4pjewGFzehrspBWDd5Y3u9wnNLUcd1gRvkzouqSEBMpxYjUAvKt772wv58Pbq7p2N2st",
  "key5": "3P4acWdvAgzvJnGqtNCcp7sCRJSYUxbzBeWQwC4K6NkzhT7Qp68Ee94BoQvnDKDXaRUiY38J3qRzRgU5a3xGufvo",
  "key6": "51UDqQLcNnNfmMPMicAKSnBy8yMA5YYEe3nVY1ckHDgfu9d15K8ph6z4zVJquw9GPMgiTVgJiJVeLwFRo4CKDPB7",
  "key7": "4daMwueNKEkD6bx9QqCiorBXkc28iqv13ycQAAEmXWYiXYcBEgjkMy9oM44RMJxNYVS1Eh73fh816iMYUwERzcFm",
  "key8": "5UtC9UAKSFUKZ4oZWumPxPv99wDm4W2qQZZ8aG4WgxfKWaDAzQLZ757J4cXxVuevHFDQSLVDNKn5aLDLLeMqEzJD",
  "key9": "2Kk4Fybegj1xqJoB7vrDusLYDTm1vUFd6NVFfAi5tK2VoZVagevpZ8CjA1RdwAXynEUTY4JzFNKXu2BQj9BVfBo",
  "key10": "49pcGriDSqhDE1Q6Cr8bhW96hCuRiaKUDQP3jCHeRXLkJj4yJ7GKxHUur4xSJqF9ZBz1nfeXgnpb4vgcQJFzQwuH",
  "key11": "3cB7svKBvGbk2VUBFV6kCfhEnw1V1rhxs3HJYoaYejyz22GYi4PrSfwJcHiP2CktaT8N4V4r3SM1wgKt6JQFysXb",
  "key12": "61Q9Z6P5EJeqKh5wkDfHZ47fKBKHbADSDbYhgy9W6j82sMpnZ6raVj8Mqc1cwH4JH9UVPDmEUeXR2A1z5dz5KCxV",
  "key13": "5qNAST9dWuVuLhvsa841ZC6c6ujAV311X37pXBgQtk8868oKGqxfJECk78jtxtBzfG7HvMc8r2M27kYZWZnDKpnk",
  "key14": "5hz7GYkpQuAk6DTYchQi6tizCFcSNNci2Ee86Sqvc4e98JQdS1Tn73B9qXvsAsAHHkwTxK56AL3rnEzLVjWQK7oQ",
  "key15": "5qnmb4jNwQUfyp4Y7vhvtLK3ZYroi9eBa64TDcVNkcP3CoB3TNtPbtydqcYBpNn8ikUy9761hx7NJg3L1YbyE4zR",
  "key16": "67qg61M6RSJvyvySJQSqtGrBqz71rwcGADLXHxzNDVeeXRGyEZdFSJv1VLc3ujeo6HQ81NaN37kCGaiFJbRXpRMm",
  "key17": "UjiDH8nvTNFgMjT194MKpxFY2r2N9rofuk9qZQE7cmGrCWBtDCuCXtnNpDEhx46nkAhrMQ4Ux119SrHdHu7ZS65",
  "key18": "AUfkcN48u9iFP3t6QNNtapz3mRHdScc27qh8AMHJyCHjj8PK1h48Nag4iMQCh6qp3rS4szY1SHPAYzQB9iJJDQX",
  "key19": "3sZcoNp1Stx9q5qmSHWZoNAHsd5m997VkVM4Hetveba28v8shcSTV6f8xSf49s8vaomcCFjeUc6xxBm1ttVaA5cz",
  "key20": "321oSt4nniNzwgftGErSJ7ZgUVu8vS71sNBcPy71VaSyaCsYnM4Wn7X5UWfAxpmRm3eut1aD4MBrujwdz9NiwyPi",
  "key21": "dbfNtyKbhgWaSPaDd1qhuTgBZJWuAnRnKyysi2SEA4WQmKAvN3zZkoCkMXiRqNysWCXXwiYtyNTEEyF2h4xtVo7",
  "key22": "5boBmbguTFXmoqtgNcsAcakJ43NuyNToG8mUABo6cbCYqXz2bvpbjdiYRsY8AwxrQsRwpaJgetgA7zTuq2uMfAD3",
  "key23": "4C212S8XuCR91kuBB53jA2VNXoZnMtobeyVENrAM4qohX38ops2JCcM8b49pcwNLHpuxARVRwTLdqjhXzvBye13p",
  "key24": "5Q1s6L7iBry5Aq44xsbvRpm5eQuhS2mtJUvhRXiax9zUTLGy6gF8AaTQg3ct25CJBNMcVGMJgvCwndaGUg55TkBm",
  "key25": "3scY1Rm3LgZBN9EFVc9UD7xgm1kHAsQ1NSvQmGuiAuJ8AUk5qnAHZTPpw2ZJGSr3E2782Rxw5RdZ2QE5x6ssZF54",
  "key26": "5pyxbWzcU2e3w76msXau6PgHHJuDcFAPKgyX4nsEtHTyHJtuoCXYk7LLHWxJzd7gAqtN2VaRqQMvEef158Dx2CRr",
  "key27": "2Va2YfgF19UgJJG6bRKFEp8W9637qBWFPAysPMLdY9R9X4fdTeH9LRNuW1ETgV3wpWYZA4CypbMJ4iZjScLwiUrZ",
  "key28": "5Ne1Ufq46gm55ghdVLczWtaqpPXLkdzhHyaADzLWZ5F9bQspc8Gt2T92sthkqXdoGzDH3z71qcHhdffjEddgnYpt",
  "key29": "hDFaPJra92bcudn718azPpWrs8HpnEmVkz4XwfGjUx5Rr6S3goJwqwjnyrFbSgF6CET2z8B5FXEbaiiGptJFgx6",
  "key30": "3DF9chJogeLYVUf3s6XH5YsiVgH28ysycNPK1N52iHpAY7AcejRBjW2WqALvEgkMddixGUqn4coSzpJdqB3R4a7P",
  "key31": "3npW7nELA4LkubHCDY75LsRGyaf4pptGfJezZcwGvMN5atLN9crLoUE2NsJimzzpgr98GhtgGPMdsk82hXVTUde7",
  "key32": "5Bu8oRiVUfvFCcnb8ShtgecEGKoNmQYSiUBXAnVL2WKDYjmpu1C8T4SNRikc3tc8xbbUKB1No6YAMFxwPjc2GvcV",
  "key33": "3Em38VtvSR1jUDnSNmV1NdjNDmous6FLEkNHLTB7K7wKuN8yZbuLa6pWpm2MGn9dB5BhLTBp3garocofwfUoCByu"
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
