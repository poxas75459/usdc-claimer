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
    "3bZmDrgyq68xWXugHSxTDxAVmhWkL3KpQQxyiWqvZNrh5swsnbcowrk6wbAGBhu45m3TuPzSQixBqYRous5oRUTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rsHaT7TaN6oTVga7j9A6mWHaMkvwBg8EPYhfNuKUHt5RmFq3d8TS7wy4rdDeD7fTSCLX2NSMJdg27RJaR1W3Eie",
  "key1": "31sBgknH3V3LoTHaxz1x8xJ6z4P2s8TVKvG6Y92EzSAqxzM8VUoU7qiz7A624Seh61bGsw6yiQt5M2fvPxL5h5vX",
  "key2": "dBFVPZw7nc63g8dDSysNdv3u95qQCNCh8Mn3CTrWeMzG3Lzj41dLH89koTdQ5F67MbV1JpdKbaH4d32VJPWRtcB",
  "key3": "hzJLVHeRzfow9mQTkpwCe1eBu2yP9zDH4krfDSYe14VgCDBnWpcmEkvLRm7GDm888Xt3JHSo4nTSmgDK6ifNM89",
  "key4": "3rVNUoBtnAjBLnzGqyrnwp4oryHQdE2vwJWCVQTY8CHQfAsFgVsoo7yL7FhpATNhm2ArBkiD3pE21KwtCTwMivwD",
  "key5": "j61dhAmGQ9yLuxSaru4WXkAHoAwHxeZZyyqVwv57QCst8EnFyD54HJn2tqWCzuq1LoqE1vFeZpF9RX3MdN2zZ93",
  "key6": "ZQN36JsPZaFctuKFhSoDwpeDtJDHncxh6gpUsgsN1k54mAMhFjwv2T6rgsWWoTm5RK1idbA6TG4L4adYNFqDn9m",
  "key7": "JytpMDWAYc4apvqh5Z5cVLarM8tNXmYUQ6oELHVViLLaJysgCquu1SGsQwtr3ZFgZE4bq9C7a2PwLpCYUALVKsC",
  "key8": "43sYbSYK3QEVMrzzJBArWW4yJraHXadwi1bSJpXmPXSon4ZHAhQ8n5dJB4VnQjBRkZV2WjnQgVF4vNJeK6jmHkFb",
  "key9": "5v5tvBCwMfjKU9gfvWBoyuRYWTSATztjAcNYXxw72b1bGYmmzvtwPLJE6QdKRkua3oaEhvfz2NLfRAZ7hfDwGWp6",
  "key10": "3tRJZGDLDVuYcp1yHyQQQMH9Vi4F5eKgvmuqupZuKANfV9UKqdRzHnsuPmUpuLdgrSqXVK9KE1CYQyjnqmokf4gb",
  "key11": "2bTwPoBH5Zz7v6UkQRwXKDX2V3LvBepccsdg4tCMWiF4KGqQFxhndboQU3srkK7LBgiVFSMiXkTTj8Mv6YUsqJQA",
  "key12": "67TQqsRFcJVNv4NGjVMzNLAmC27Y5uMKDZmmZogLcUXyXEw48Y9pcrkZroiFPqBfhfv8kMhtxUcMUXCS2qyvTxS5",
  "key13": "2pScjdStfbTQDV3qqzkjgRcZg8xxNpbEEn6qjS7GAn6gdx69ZsAcaUiBaJJdksNkYUZZMQhtN3XoGtDsGDSMGHuS",
  "key14": "5DNTwaHL2qFu55oYuVDRC9CwRHUMyg8J6XG4d3VTJPLtvu4BvTMVmTHffbx8LHyLZRdcN9KktJjRUMcnPqoCkNpQ",
  "key15": "5JDK3yDtaBMZxJahw3kPiBgFpUUUKAuaEmThyW2Fp7jU8j9PepVxdiA1NGALrRXxgHXESDsDV5NUoFK4EbsFJWLE",
  "key16": "B5qmBsFRv8LKZruCmXPiA2EP2DjbtuQzGiLVymHKC3DgVkceN9rM5DUHESUjX3FzHnLeQ7M2SfBZkrRwEpihRN6",
  "key17": "4sFh8UonegsEnkAJCyQtKgNirtnspnGFrKEnNBRtgLEA6PJpRKBbZwkpSQ7MqP6GypwPTZFmJG4g4zandKJnpDn5",
  "key18": "4JzLMM5KtToBiiiMG9QcgjsZDtzKQ8Df8ESDc1qYL8nbW1sggKAE29DUBvgbGyQZUUqKm6xGc9NMwEsRFfyReKby",
  "key19": "3Gifnyg5aLMKZRGu1fkZQ24Mjuy2N6xCL2xRVgoRdMxQHGVegu48tPiiivCfaxs2BH7j4q5n9QzLdNnQPZfydhht",
  "key20": "4krR1eETGG7pwpVd4XLTPFstt2xxyqT1iTZTrn7fpRJbMxzxv7PP3CNsn5XKk34QhXSGQLEzfhUDGpaU7iMgpwVg",
  "key21": "3Khm9xwABsyb7P7mfo4NXxzoQfyswJ9wSmNsGe71xqAc8etPqP5HgYcoNTyVDvsjG44rQVVM5XkZMpdNHRU5oZ6T",
  "key22": "67MWPSzgrD3sZ8NT7NWEeCkFZqaiyoZMojkfWUtVuEMvPFPXTUEcttG78VNWoAE5uSWE4XNPtvkjEw8xKSbDrVNm",
  "key23": "2MTAzAnp5YqNXynJdBEj4b2S3cQeTqArbGCQE86mKjjVmqYSyAcMadUZDEBAB42HN1CvrW7qxDVvVroAjxoPMUuA",
  "key24": "583m4rvUHcc32fNjaTkoTcAFQd6wXdmN1Z7V6JNTzWiRPWA2WHghSSCPDjEnB2ZG3Q7g53c9CiD9BksEJUT7dARA",
  "key25": "42H2FhhUE8cXLfyD7vxzG6imcZCtqDSUyVoY8hn36oGrZDEeNrrn5uNs74VHdSvcF4WB1jRUC2UbzrFWTkfRLxp",
  "key26": "gDzetZMH3wxYcjn3YjxJV3uX6UqJouUsbWnRTzTonRLQxDJJUSzB7UXV4k4W2xcwKZmKjjuPJ2KXEtUmpQ2S4Tv",
  "key27": "4KoL2ezLvitzZsRRpRgKpMKLyMx3CY7wZ4rA3Yho7QfCqHJq1B8nACDRKR9Tzef46Yzbg76cRns6zRvsawyGMhpJ",
  "key28": "4fWZbBB6F4AA9i2mVRzQj3aFGntmFnyCpZfXGK3ufTv6p5ucxSnqZwkJuExhsCjipmyRqRujKMsgyx1GAByjawCA",
  "key29": "3mwzMgivrxn57d31dxvDh5r3AAVbn5NWSDH4MAPYSpfVMjPWsX3GzhNykvSEmgSyLRiTMMtAiYuhqTEeygVBtF5U",
  "key30": "5dsSuiyNEGgvMSok9jme1nYthBiU1dS14vmx43aCXSnvrqtV7zYAfZzbnQ7g5jXCseaA8iCUcnCT8Fhgbrqw165u",
  "key31": "4eDgKoxxy8hCFEXDnZjMSt9TAMBMFHpRicBiZWdhZBhnw4q9CnSKVPpFAAakRWGXc8Nr6Za5mMafwdKSr3DWvRQN",
  "key32": "oaGDoeSZNLe2Cn3r1an8KM9Zqe9YLoLxXWc145QN3iT6jteKxsk5cVJdcNS9HPUTVJJtZgsjgCFEDZRUDcgmNLn",
  "key33": "53ZnVrunnMTHkA8SNx3YwbpGvgafspHfB1UNX4B7JzZZuN28WKY8oPmtZQN2aFWWGCK4Eiz1NPfWeGGJnFZhiw4L",
  "key34": "418gZmr5RRHza4QEUzZov5eZGfRD32MtCFagXKJcegcdLRBkCza1XFGhA7tgPGzxCwxkMnEz32NdgUvWPHtmoiFn",
  "key35": "3wg93R72kBJECMmdnrjkx5mbyEvLRzVVWTmJqBGbP9QZgZfgmCXmBPe3b9uwa25qsErsb7g2AfDbPUAoUHZBXNmH",
  "key36": "khpQmsZYRbAztnJq8f8mmNX2QfDD7KBdfnqx1t1EZq4YaN1MuxgmWMw7X2hbtfAcXmTfCXqqNjKamut2EZtZ5cX",
  "key37": "2oC2VeiLdwN9sXjGdnyWASxTnGUsqqga1Q4u9H8o9QPxQQXZJfZwXAc1jqYEqHGkr3ffHos3eA9Mo4agrnZdwU52"
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
