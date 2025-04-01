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
    "4BTXque9B82rt1DWdiMZTHgNbAxNX57sH5KmPGo1j9VTXj8E5ym3XYkuCNnE6AfB4N3P9afwxSKJnhe3UgDx8ghj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VQAQkaCsQuvCh6fej6i34Mk5mMAz1gmYwwAGTcsCU6RzPCFThqnjf7xm8TKiSko3bwaz491nQNjsr2izmzLsma9",
  "key1": "5FGwigw7rEMD4aBs2vT9DaMzLYnFSNT5dmKJP742zfGJM8qUXacJ7My7cKsHWASEGyRTJXR3PmtR8AES4FhbbTLT",
  "key2": "3GaLwEXKCyP6xCFUFbHzsujgwwyPZfuExkjmhHiUYxagE9VCPsMh6Kghgf6SekLcqJkF7KXTsScxcRZ1GyMjC5HL",
  "key3": "4ZbWUjGPJFVkfN6w6dxXuLf96fgQdqsDgYoX6GBbGvA1hp1QgamsGQ3EMNvhjtiocg7ELbt3jxzHgG5r65NEwcVL",
  "key4": "4xK7Mm35QEaDErbEbMM85sFYfRG3qg9cfcHMVMLWXR7MqAAb2eRBZLTcs61UjDKRqFhyXAuJnwktnAZh36Wy83SY",
  "key5": "4PXRM4o2S5QD72LHGTPartR1njjJqDXf452jefhqj2C2GLZLL4XuXHtzQ3voF4Riy61FY9WQ2iQWVH4ZHiagNku2",
  "key6": "385XTgsuBq8zyqsLmUrCZin8uLnj4hjKmQ17x8LFjWK4kG7i7hkyxfFkbZsGhyURvaa7CL3YKvCbULmcXksUqZ2d",
  "key7": "5BNz3D2fW5UVKJ6cGVXnGg6uxMTYFYX5cL1JoBsuxf5ZoYwyjErLtd9V3ZboWQEwZqhYciXEiJFNc1aC5aEnfg6d",
  "key8": "5naDvtqHdGdtM8sj5EZhQsFvHNKunvjeVgE3mzw89TQzpp1hUMvcsb4bteRWA4kHfbG9K9HGvpXmmn81rgTBd2zj",
  "key9": "2kMzidJCxcenuoWMWwLAJ1NnKzWnApChZ8vYPhCqeWFpMjg37Ba3vs6eb7zvTYQ7JXCoWMXptDK1DLnMPs1h8kTS",
  "key10": "5GJmK8iTTspShBNZUWmUyH43aP7jFcnrcU6ysE5LgMcX8JB6zphJ3EWSXEui69BV1k6p6Av4C63Y8rztKuaxM2bS",
  "key11": "44Toz2MWLbnwhXbQpCdd8wJ3aipU6HUfWpJAbGyuBidn82dFK4GsBWdexLoeJnTdGi2Mrn4fLYoHpnDESuWhCFYG",
  "key12": "3QKpUFJVLm8xktxMXYegr5opMXu58vX8S9fS6pdKCpC2Tq3nU7rC31nynoVKMX7bKxfA8sCDUjXB8vofoE6VsLSp",
  "key13": "4icGE4GFxTLeCGaDNqMoMi8GLYzE8UHRX3NWM4FbEyXham3jeAQT5A5tDNe5JynxdUG4yfWxzMaezgkEQ2vhNp59",
  "key14": "22pHK3MLsJFx4d814P5oTVfVFopVKCr5NQ5wbp3WJnMa22ecp9QxRdgXJZiZzB9pbxmkpbLkie9HqEUVaJ8CHBkH",
  "key15": "4fmC5RvTdv8xPYPYJHzmjPrd1MPhfyMzWYooKYhK4GFiX2j4ucqee7wDWH8c2JbDmwi5efGXBwHGoXH7bDXHe3u5",
  "key16": "MkQPhFrCWffFYLKG3fmVvbWMmQpBUaAt1QWum8GfcAbi8p7ovmbGDcfrAJQjnuBHnXXzsBXbG48ppXViT9QLCSR",
  "key17": "5qHk8B2DSy2tYbkbFPCqrwpnBEk2dpmH7fqcaS1Pf9Crpi2kuppeF5fH5fwdk1rnvHLp93kKvjMtWt53rMbqSH6J",
  "key18": "j522yiq75XggW91fjrni3h4m24cky25dTyWUUCM5q18LEbLJdMYgLTjdtusY3tksaCeV2zFYcjChU7YmNsBGxcd",
  "key19": "48MHz8mHs6BSQe2Z2ZTLSHK4zM9Vnisy7Ce6oxprzZ1NEXRcTAerKPA7geXm4h66Tq5bDPrLfoMEA4YjPDduGeE6",
  "key20": "56KuX8wCNhhzrCzVYwgPw3t2Q1qYA4Eht5ji5UhFDoeuScvWZPfh1Cb2Ck5YZa9GXdGHBeibodhEqY17pndc18fS",
  "key21": "3LzaRHAJg7m17judft9q4aaoko4DYjd9CuQcA2mZW9gcRCZNArp6HxRorW12EhfoiTAXky9nsh2iaZJxX1ywXVRe",
  "key22": "3QakotjvPiaJcoKvvvNMbRn4WCQrrt2zaHR6cF517M2QmXiGZLGvRJ1ABzbzzbPVYF5xBzh8o6CweUjCwuQSordb",
  "key23": "4eJZK9pptayVefutQjwqXitLJLSVJidndNYNsMVQBZNBZZMZ1jZ22nohsgJDZCpM4Tma5ryW8BNVUG2na2FkfcdP",
  "key24": "CDBCsnXxa6KNs67k4SbGmmqN48FEnEU51Bo5jpNmVbechKFhJSeUGbtHXhFUrFqzQw4AJmM5SjRRojqF3aAGMef",
  "key25": "2ZspKKeusHrB5r7xTDYvZuKnu4YwjTYKRXYJcxs2GK21pVaBRKxFkNbzdxhdnw7MuMQyqfrKShB61ypFNp95uiMZ",
  "key26": "2AUpnptzZMoaJoco4pQ9UYCweYZwErwyjKMesX1xrK9y2LjtuQmfJp6N5KbNiTU1krwxu4q9LKVy5Y893rCpRzZ6",
  "key27": "3dsbySuN6NQRDFn1RRcspBqMY1G2Mfu4LGuFHhqC9NC7ifYHZoNHdDWNEHDNSxgxPJQvMr2TAwVdZBV3GvpE2fZn",
  "key28": "3M2jhGpKKmM1odQT2kCBost3jjMXsB4nFHdepA492x7UzKEtxhFJkRFPhyKDVi4mxUabwbueBTobJGFVGucBHEp6",
  "key29": "4FzpCDYyTFuscwr4ELGwNZNtsN4phinvqyaY7WCarSfjUijNQFAN6UHD3JyBZrN8RYgCqxAFhTLANkzUJKRf749r",
  "key30": "4dGuAbcJygfEhzGdBsJzCFdq131WdphbDDyMj5m2Wh8H9neVgSHaPtZgYmGmyTkfgZzbEngtAXWQ8Sm7d7jKRa2S",
  "key31": "4Ui6xY5r5c1e82cUoozaN6fxDJ4ow4PXhhsSs7fXfuoyn21fL1VtCdgufVB6ZZPgb6cQGYXSETg1wHyDXPHbTWp6",
  "key32": "5Wv5vkr2zqrpWX4bhAvZuLK4at4VyTAHEyXydu7HpbDbi57rdjwscxpLmoakcRNKUYiKnD6y4eyBW5AXfBZhp6iv",
  "key33": "55wnG3184M5SJ6spHzMvm1Hv2HGnJZWDYdRWRt7PDC2qWefWA63cjvUAktk22N1Jxrnf82CJoZTqF8k7zqkqQ4UH",
  "key34": "3TAxmnpXiex6co3TfVDrNWjok7kMhBNb9mdA1nftAfut6xwx1tEaCV3cbtZaBzjgbMHaphSyu7yUV1GAycBgYPYJ",
  "key35": "2KTowoWnkDMQQex6ZpTJKW7HNoV7EYRqm4N8AnimRhwWHbx1yKQ3L4nc66gurxmjc4mWWiTYY88pNnRpn6b6jRS7",
  "key36": "4pHADQDHvmE7TSFXYi3DMhLfRFf1KyLx5erRuT7y9hvHqsiEjN9aAunMZaMSYrQ4mJ4YVWdL9y4iuxJRLSdwdzjW",
  "key37": "3qiSkisC6oRnUJmeyVTi8crv9fq4mLC4qDbg3qfG4hHmgUcUXVCo7tHFFFytnxnxgxLwESYP3rgDMsWiJdtGTzYd"
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
