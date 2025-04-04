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
    "3YNuaDUpdbpMmburZS9FX29XRvhmRcnTGEXoa5axffYNgXEHzR7KhtBEKzx3AfsujhqkL34EekegWxEmVx392cwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qdhDKWNj3NrdEirtjfZgrgh16jA3NM7fHrjrDyxHF6AVCdshcMHi1RVs4G6EyQXVeFSaLYnWozu1w4qrdm7TQNW",
  "key1": "4h89bkhUJpkmZ2pcnxjEMydyu8jqhjne6fNtzxbL3kZGa2FRQDJWRfima2mYUNTiuVbZdU6MnZGZMZCBX9kUXxtG",
  "key2": "5ji2iBi1b2Gcix24TfSYx24uHJ2z6HjsD2fdMUbG6zi4pxnym3Na8UCtVFiXsqcVjDFWw7CUH2DPNnzFSwcB9bp9",
  "key3": "5Z3RcCXgL8awwDkDQNw5nesPBo6sxPcdUsqUgG2yXeezJmtcFcCeijPRqAwg6iDqBSNuNVVAUuhSeBn8zxTY1bso",
  "key4": "5c3JNYh84juzwGWLwRD4fFyExehU3GGLRJ2epJc1ypEfHcPugP5yUd3HtQJsAjGQRxFshwnWMT1H11AbEDAZp4Qj",
  "key5": "3ghU2xYbeRBXZpCainy4HkDaemweYqk1yhcQFkr2sGQffzrbPTcEuaRphUAYaZuFvW6aVFUBL5VTnedQWsayxp97",
  "key6": "7ck7nfGtFGx8jk6fJCz8D3oeQko4SiSFNzg2C4u5ijZTQzeBBmd8jxzJHMvGFNgE7R7dwVcdtp7i1GAEvtug97n",
  "key7": "4LyVyxeE9Pwq34XJzUAjSAsLiJ7kQ6JvFn8VVgLaRLPpVj1D4SYhSitJYuvJ9VXVA3g7xw1mrKq9gNSVzEQgLXt3",
  "key8": "2pq9vt8GAFAStEnwXowvnVi2Xj8E4uonLex7mgBz43vbUidbWn4rUxtTNtpm3i981p5AruEHkrJXYxidJ7cRJBE5",
  "key9": "66nhrnmVX49VkaRohzirCGN2wztqPp55N7GVb5Upf4nQKutxW1o3F2M3FbgMD8n7G8eus2JbSHMbq7vxammk23ML",
  "key10": "2MQuWRKoQU7J1KqMK9qj1TQG5Dm3BHxBR52fd522PXYqorhwj4M9fUvkF1YoUjyGAnWSKvJnrmQzFi3GrHBzmwvs",
  "key11": "27HxL4zxK3oJAgZdJdgRRkPbGyexvYYgPRnBuZcaggLkrzCbRWYDoUV7VMibrKmGDwd1CZRwFDNVhBDYgfZVrB5P",
  "key12": "22TjEkhADC4mbEWTUixJy8kBefGPEqKAHTWa2PLA8MvWxSZ8deapx8Sgef4PVhcra8PYBMYd56tBvhvTVvXG1hm5",
  "key13": "2JMaj23jPBGfh8F6qukMxebx8kUrvBhcCs3jvFPkAtTzKbctH7myrL1LzBVxDTwfn4DP3tWvQxaxnLFbqKGi4bXq",
  "key14": "3CLEtTpUYjPNi1ftfeXdrj57qXgKJQPDsDSBQ8Tpky12NqRN8tup3RT22sv56LZPWrqACFhvsp4gtGaskiVnNGWA",
  "key15": "5nSzXRUkJkoLZRVt1kEfsLLwopd99L7GpvGNZvFzNExWUu1b5Zyq4iemDg7H6iTqrvKeWHuCXJz4E7jkZ4uvZ1cH",
  "key16": "128A2dtk3WbKQEhnRn43T6oADQMKFcsJkr6PEu35LacYAJvRgbC49MRQe3gVCgcuqYHY6Y19VBCBCAF4ugc3vUbc",
  "key17": "2ZB8yShq63otmMntTt7aVuH83LmeBJckkR9tJ59mftugeLC7UPEBbFDdP5FXTmqUNKgpd9axizVNSSjS4fgSF1cH",
  "key18": "deGtiDUcZLgmRUnGgv24cD9c49h3BosMCcQ8qAuc1RjzUQ3Ttem4DjeCptxpD8XTTMybo1tTGet7iPqS32nW3zv",
  "key19": "44mDNQGrzdzhzW5fATzuvchtbXurRyJggLPZMmpVDJ3HD9KcvswE32URwLAB3qR5v4RujRtNxFYNVd2vsoHeVaNK",
  "key20": "4E1E44GsbdVvZB8HK1AN1fbHNs2GTNgcNRMoZZabtndgtv476uqvK9aeCrTicLYL8mx9mWbWDnx2ADVp1447z2xf",
  "key21": "6zkqrAuJJMuH7Njm7PVHnAxV6GUMAurb6kEqXRD5MtCVXPQBcw3RB4kzp7qwwfCZ6QEd6LFjowd9s8vy795agcg",
  "key22": "4b5Gb7KaLybw2RZK3Bxx1ukBZ4HvbvE4R9gJMbK3SkuwznJVe1P28EeZd5JmjemBfG2kYeSpJcpT9nFBJhcBrWV6",
  "key23": "2wW5y9L4DV5MPuVbEze93FEoN6zhRJm6w2cL633nxoJgpLX8mdDpMt8aZVjDFof7JVQgKN53szRe67AVBpAAwToB",
  "key24": "ZWNoVuTJVpcj4FGcWxTeSFSyzSXDWUjwZJW8hYUe54RzeKBwbg6n3VKyuX71A14FFGVozjJFa7cE7Mudo4xVZeG",
  "key25": "2bxJkN3EryudyTYopt87KpVKTmMJUY38Fm2eLqABEZEWiNvfxQS1QHW1wn9KdtZWo8AmnhyKEgAiRFqRyZUzWe8J",
  "key26": "3gXicGHXGse9YaTYr7hndSyPJNUkjkiHD64me1WWx8fawDXhVrKN2GF3aSu4Ww7V1NAXUpUPbTxRgyRKFZNvLbRJ",
  "key27": "5pa8tEHSeQiWpu7tRaUmZwx2cuxT13gemkC2ktFXXhLXj5QyUVuY1tv1cyENsvzjix72ovVySmPUKP1vV5MWhhXP",
  "key28": "3LQzfUqYw6cE2Yv4dYPc4iWTpUM8ay8Zp1XPoKayKzb9962TUvMBuNLe1RqT9TUxCqFgF2aaou3VfJQ7ixpmun8s",
  "key29": "yn1Grh9mD9iapbtomBWE4Z4KG6rs37F6LjRMmJTxCVzUHSWHZNnn3KZ3F4dh9SDPcVuWDvxMWxSHy6eRHCavmFc",
  "key30": "54xKj61bBuA4KFnT8ektMseMyESohG1SCUu94HtVjAs1wuxffN3n3DSetbqKfCXzDRqqvSKaJLxUMDHLVxbfZDFt",
  "key31": "2cRo87K1jjJF7v7upAoryUh5BH1GUB33P7K5XVNp23YQFUhrx5zjehegrYhSqCY1qGLTYdzKnAo3oMcX14ohwcc9",
  "key32": "AgguTYt9TVStajcxdaR1hkAkyN3UWjnCu68dPH3iwaS3N6P6no1vPSBLLEfg3FAza48DK23ZBZbdZncfxVMnbcf",
  "key33": "3JQWqgPiA6zEgBEdHoDdrziCxkdjsPhPnfSbXhpVSnisgy1T4WfMKZ44nJAnsCnno6czS2j81CkCbmuBrviwa3CS"
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
