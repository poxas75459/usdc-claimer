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
    "27E2QEvn6n5bySAqMMaBsmWXtnMP2DbMh4k7freJR21ibi1zuUSsKypeos9AMxhtRrZ6HimPYxXacmcnvk5UW7D5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SvJDwbWu27bHPZdzoAPyGvt7A3vokVeYqZuHp12jLrx4bKRafN669SAqmVBPCyHmYk523xksyEqDtSUbz5Foea9",
  "key1": "64McFGMeeGLro8XTAuaqUufYQ9XLH352h3LFcyCeSRJAvcxRMmEqxp2pRDwod5jMQernaPexTvwhftVU1zKopZGp",
  "key2": "psRg5aGopvHsJmLn5w9sUQJ2d33CsJ7DdP5ctj4fMzhJGgaDj9fAg9n4i4T1LdpVMPMmKKaG4XFCavMTJvEcJRR",
  "key3": "3cQewvMyU2SEno1tc4wyWJEZ9HwvD6ZFeoFhiQjcB7roENPhMhwWxTLcm8y3tnuiPTnzFkVwAPzq2qdViNnz785a",
  "key4": "59dCCpbmPduZGaXSMc6ugy7CmUhX5DwgeTL1GN54rj8nDUrYvqjseKAkwnVtdv2tigQkL9UN46GegqXYfaSzFXMU",
  "key5": "3eeTaCtAHy1QcfqHcvVFZaA17cf2KwEb6AHaCSefgi4Naw45v1C2rJG3GNKzxMK184zNys15DhQh43KXZURYzrHp",
  "key6": "4E4L2ePy4t6jCQAi2i9ogC74MFpBC6kawXbq13qgi26uGPKV5dPUfZj3ncg7QNRzxEody2rNz2P1aMmRuZbnKhZ7",
  "key7": "4kx7j3T6WTna58kQjrNqKAEsimmqEFn4FxRRboLwTV4yAj4brNJ1e6VYVscx4ZmoFMtBVDfXWPsBBBwTYicmCyGs",
  "key8": "SKrvv5N8i418aCARm8WafycUqX5vw4cTCLKRCH2MgMfQiPG7ewnjbxQQit75bnskjjsGC2ZvGLsdQNUTQBXimQd",
  "key9": "aLzRzLRUhULLjWyhmrVZpSc3XwVSLLZtvxYxqx6mwTiFbdiVNoZVeyPsEmL7GFnkpjfUkZXReoai33qfB4YM2jv",
  "key10": "QwN8gvtVkpCe29sh8fWp21WLZaoJogHhqz2wfVzdkL1nqUUtfvHxZDsmp5Tr3KNxGZqzKGfZYbY6wHziokbTcjb",
  "key11": "4CMpGVcWHRYFQzYXiX68RJQasMpRXHpcR6PC9AT7UJXSz236SYsZsDNsJt5J8CuNBUttMfnF8giMvPpZn6WYH8dY",
  "key12": "4dLSGCmhiZGtRpt4KZc4ymBh6PVfKGZaRm3FH72AiKp3j1KhGCWdwM7bhedZfc927mAT6b4Gxjc3tdb3BuKQZ3pF",
  "key13": "2Q3RcDYcKNhmggQTVZS7UeAa8MrD5myXYMe7UinWGf1yxcWYfRvH5EyQpA5dcqj5nSDu4FNe4mRoWRjP7KdouaaV",
  "key14": "3MREjLtXym4N4jHivuGjfdAAvHGfxR9orkx7HhbgsfRx6EMUbgEQro5PZmyyNJcfLUw99eb3wShJUHZFUFSgPvo5",
  "key15": "2EQKHqeVcU8612b4GaPxVf5DdgWdKqPV8D7Qvw2KF5GoV4xJvveM1C6HwgCYesy62VFeuuLRfggxBExnJniCfEAP",
  "key16": "2Hf7zvvsWwotpFseBfphFd1czrwBgX4hR4pmaHNAW4GqX9kNnvsjYJvHGJcuiQX2RYLbogsosXC9ZriPCidsW5qV",
  "key17": "62SNrGGNJJHEbRZc5i79gy38TJn3EY6q9TDYgjLC6emV1pjmaChWX7b3FFFYLofUXCEFeYyEPj51TKTQCMCkYKRs",
  "key18": "39mK2r1bDqscsYHxweThzggiasQgLDXJ7VjWiqe7KXw2KswHtQ9DdSwxGkTfrnQ9KoT9ySprDA2bXwbbkY1ieqHC",
  "key19": "hPwftQfSZ8P9BxBLtqN6ph26BYJugQ2X4L8gMZK9EcUN6CkX3cNJ4n3BPwPExDTFh2GRVa8jUvhMe1dLb8arrcB",
  "key20": "4UvYtgmQeMS9xUzzaH16UqvHX6xSuuXYYR9Lagkf9m5uLhPTWxoxrVnLtGiFXoKhnY81HTijcwxo4jtayFe1g8px",
  "key21": "32QYqXFy9o44FBs3XB2fDyjeCqAJH9kJYZW7PJM2jniAL4UykmdbzCKcSxStx9LHgCgAWJJePQok3P2iBUU5qzFE",
  "key22": "2aSwD8LspKaZGAxHWQJYxxfNaa778NcdjZZrrehyVWjuoikAPgPhcggW6FgpWbBmz9VzLzx5wiEZFzYjrYRbAWkG",
  "key23": "3bEQ5ww8vvPYLtyNC4wQWLTew6Ha5xs7a8nZHDRPvEzHQsqumbRuZXuEdGXtCWkzqUNCGFk8Mf1BrhL7tcpCxi6a",
  "key24": "2EXr4KNteSgPxmmEvXUvyz2r9SiJnBHSyH2FMrLzp4h4cEbo3MHRPgX1wekKYpfBiWvVRsJCev4ogfqVpyHbNLKK",
  "key25": "VkRFATBKLzjprw1u2NvBLzMw9xYrQMhm7dT9p8ujS2NZnyTsd2D8mrAdmfd81EVQPyDHffUPEE8ygANTbqminYr",
  "key26": "53AwuVg7agPt4HcAAzxxWndSdkcVx11Qi9vGyLnn4Ae27D2whzwpujVDS84XcXDuG6fAc1zWt3hVqBrtjTLTMnCc",
  "key27": "5oQ2WvN2PnankPFXfwAULdzKe41pMkjf6d4E2bewPmFvgftgS7VfN5xWcQhUumvCbtac9YuSPUnPDBjKhsEC1UCY",
  "key28": "4woUZULYhoeyzrJ7xTvVyvLRDKQKtHnquBhCHnLD9ntaBheEqbqbTLpd6GJwmZXBH76KBbdimdSgBmNj6mqtnohb",
  "key29": "CAsFCysbVgFyiB8xSfnoS8PS3hpzwpN3s2gWUng27pS4ThDnEjmTBC7pUCbobPzxLG95QjUVVhG3H1tcJom1x62",
  "key30": "WHVXzCUYqwNQ4C67SKs9yB3KeXujkgbAZtvkC5DPVdfsxy4ZwfTSVU33xY9d57h2LQseou63PHzM4ryfaem4Vub",
  "key31": "5uT4Y6PecixbtDgCXTqWGqtpWspqsjfrSzwrFD9vKr8oNTZBu29Ke7L7eiRBQA3VRpZTkYKuva9PmAXFuJkw4ax6",
  "key32": "571vVBGLgpzpg2ZYQrfRuY6uiFWMK5fYSs92rpweqg2wppHNVRyyeLvpcuVYfqvapNth8yN9aTkyLLkKnh5gvq92",
  "key33": "pyHQonhcjp7TSsN6XtB9BvwGUeww19tTt39Z6RH8mpjyjjVikvZN3pS6vBJx2WXjNWaq7FeLNUHYH8QZSqhRXEv",
  "key34": "42hEi8qBMFUCTMi71cPpnEXVtFwMLS8LBTXrfDsa52nQwcZMwbohG7bMAnvNReBNxvB9ZmSB3Nwdp2vxN4cNhpyK",
  "key35": "yQKgXiBFec4Y2jGeBi7HdoFshP55D4yVcGjJ6rMmyc1ddkYgqBDChSB1buVsesrRqdriHn9tM1AATuF8ALdMXKY",
  "key36": "5VijCUZZwPRijfDmGGrK3zDh1WaZiNw2XKEQ4ahff9VuxtjUp4x6gfioyVtfUR4aoJRnZR27Fm6GaCzygoT1472q",
  "key37": "3WJr4J64Qnr3T5DmPbbEkT6RR1sLSvDmdmA1egWQGb8qHPsZYHYW3oCwuVayfEvzMRgxNQBVe9TL2qaohChxATii",
  "key38": "izsT9xi29YtBdDgtfS9PY6mT8dRb1pyAhm9xLsmttXQqHgDP1iceMZLrVZoMqBKPCTNTroPFZRTHLKRa5ntE8Cc"
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
