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
    "2w9HUn1b45nF3LVfQgbM15BvTTHJH4WB2f74uyd9wHXMrkKBZQBtLDMLGTS5GXLotjaKCpWMmUQk6nRD3fm1eTgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bMRsAGHp1Lr5j6KTiscNMnNiUhHwgYNLigTGmVi3xvCSKG7yb8iUJnamZ5HSM1RbYUnEe4mvWSJZsm6iTuGVKqm",
  "key1": "2myGney3e6AD3M7STx6fzmvnLRSxySTqnSk7rHa6K8sS1PNPU9fXa9F1nGi6dh6d4LzEAY1bhMiM98S6QTyXmCz9",
  "key2": "5cQFTPeWWTp9ogkk5LM7SZVDoGmU2RNhktwNuvN4GsFSdRumy7TGkFm5QrgfzKGuo75q7jLKojZH4A5o5A94Qp6L",
  "key3": "4nrX1EkaGamhehzZyWevaVQoTiJLGi2oAz2AhmnnEGvKk9MZwr9sRApeYRLZ9ctnKj5jKWNewjo8Ynt9kbNRSaXL",
  "key4": "5uZVJjzVhWPCCZm7ZQxFXx2d7htd74SnnbMThEKNoz9AjodAB1UHwdGGERPSf3GTamaBW9GTPBatLQRQy7TgZq9d",
  "key5": "me4C3SdtnHe4pkdWNGgxGepSdmsfodsRrMqQuRTKEfTgAL6yibPjUGTFhyQBrRV2dfF1RznhWXDwPrp6pUHZTgD",
  "key6": "2xwgpFQaEqvWYaVqLzbYhTZVnyjk7Ezi9Cuj8PacYgoi4cwNYY2N6r6ReEZL5QAXPgNvnhCS2RzNpVTwPwqNcN8b",
  "key7": "4tnxCzhqFJaRXt45J3pFyaCDWyaskwwF2N4dU91jkVrP2dTgSCqkBjFeRpYCJswMTxSBWN1TXswaZMH4nae9XE89",
  "key8": "5VdKNM6Ys5erh2VhGMeu9HdFyYeGuyp1V6FnXmSzY9JJhc5fJBCQnxiHeFG72FGS1htKa3BNPYCaiTSqdyzvS3mE",
  "key9": "4HxYNopbEdZeT7y4CN2ZrySiCpMRCjH4jtiE5otfFgVyUbBBe2gwpswKTyxK5185o1bZAgr3G9EGj9KVed1HcvVR",
  "key10": "3YCqov2FakLENCmzxcYf7H3jRo6ipVyPGKnk9FK3s7KnEtnao1Kw4n5uwtUqrRXr16TkcLTEKpSKeyUoskMDvURz",
  "key11": "21hGwirAcbsjbSiWUVGBW1e1jZJqcrdKpUMVEvbT89gDmLVNUb1YWW2ZJ4676pmYu1NCx8asyfULsuL2iDeMS3XB",
  "key12": "2wswcZRMSZRPwbMvvAcSVzg8xnMHSxcaHbBaCMx4XSX1YAdB4sSe5MFkZvCKbEx5kMojaaLhkSXhgrRVA7YWmYMe",
  "key13": "3ZqnAVBGQU7uQaR1NV14XxpVB3B1uShkiP5ScwtRncwazyCq5a5mdFcuSDJMyTqk9L9idr9VzMJnL7Z7WfGC9oih",
  "key14": "ABurVoRyesN4DhqZbewdAEMw36ToTzivsFdCM2vBMuK9iZFynQy3Yk7aNxhyBQZi1PXzaUm1AEuCGdqyPxUvP8k",
  "key15": "3LNDdqoMkwAA97Zdv8ct3LzwLHYLBj6hAkJukGyPxtJy2y4fyVEw8vFTdZMJ286fWjDgs7jnB3UkGd1JHA1zypz7",
  "key16": "4xXM3JZfo7nFGfJzuzXAiK67HGZm4jbsiJcHYyfCU5VxexpwZ8YNy9iLXcRzMhnL4o6A77TgBkmcD1SH9RUoDwCW",
  "key17": "53qaoJemJpiFjyeTfmcEwrwcWum5J8Xtz1AjR9V7UJnKMGkZgaAeRuASwF8xrvLR7bAq93nxeJZPxDNV1JYo8NJk",
  "key18": "5mKzWbf7wwcyMSAEBiteh1tfjxkWzzfj5RnbpZ9FmXxBj5EMoG9LTVcKPFFRToJQnK4Pf7rW6MsfkPF7EYYBJyyc",
  "key19": "4gkvgRRdAkGzj7dujKNHbuaWKpqyqcQQ6bUgdCceZotYqcq8ojkuXVKn5fYTR7z32kpDywyFbgghVYG6gzF7rzM4",
  "key20": "5mZZohiQaR13a2Spaexb6FYVEYCwcRkHnJefGASregm6zv19Ji6tyb4Zdc32QyrABadY8BjjmyDdAUAzvCf6Fxz5",
  "key21": "s1utmwVtXQYwLxxkmfwahhsc9HsVNBDYFMTguxoJBa4JisJ26z1Qd7aNgDWLubTxMGFBdoAhrqQTnvnaYF3iWvA",
  "key22": "CtkKUiTk5FYcJtCzKVzBvMYaRfGZFV5NYA7r3NyDV9WsecwPuLCh2H7NMukSB89JZ5nbW6GkjQjSe7P9KnM9tTR",
  "key23": "2ezK3SVzQLwzuEnXm1bMxrowKYpgf95nHUQy1dKsRnu9d7hBWhaFHnjwpmfmPMs5TyZCCkp6U7R4fS51tsANPKUH",
  "key24": "4uipQTkZBC1UuPfS5fiNSiah1CxkVP6asQ4mXq478by9tcPbjWatTBzz35QnYL1K3ieubPAtUakzo7YickmvPqYk",
  "key25": "52GHdFrAAXUEheQFtZxjrDKJ3vE62jwq3En8qDrBnpebqvdQkP9jLzVHGUvktQBD2Zq933CqdHRudMveWuEXVtHs",
  "key26": "jMFW9pxSdujxBBmv6RjLUgLYB8956JavwFS5Sp5A5ixMv1G1LupfdCWxsKXVX1ZWC6GS6g9xLu12v1yybjDjH1K",
  "key27": "2Vg4VQkqx2xcnwsKPkhPCBFL8wMXX4yHTqmoW29Q7oJqqL5SR7EFqCQGCyC1uivExjZy6BgF4DfkM5Q1iyU5vzyN",
  "key28": "5dBhpqXhziQ9MB11xzjyF4t3oxNckV1gBK7V7R5KmD1zejqdHCd4T1EPrHXup3HxutwGsKukcmQvMxP74y8w93eo",
  "key29": "66FcVAaxo89kxaKWWg9jGp1DBtZPSie1n47pqBJpw8fFtiqZwRQuNuoFoh1CEdEhxRMoFjp8PP1axhw7EHJsmHcq",
  "key30": "3e1nn5p4rB6JfEXj2GQzHst7XPmMMNub35HV78gnijaVYNAPbUNeNAifXNJ2yZepzJJcrvTjfVfUTXen5JPL2hPS",
  "key31": "5YjrhYiQDhbF4PLsDjrVdj4vgYyGSBxPZXqUSw6ECRRkpmr6EuforrbVsok37WjKi2uaJZdxtQh5rjurSvbGWUBF",
  "key32": "e7MSN8GckK4zKEaMpkiEnwLhbqqRSM3QZja3GMWMU1n4cPamEuFU3L3CpD3CqDfYNao6vt4jfGj4nHR8YL5D4jv",
  "key33": "pMTWXdqXCeW5LxrSiTwTKXKoqQg1eF1CRYG6BkAfLKSMPa7KJ4v9VFfuNYBhQxsoKmBQJUJDMEwSEixQeMgJAGX",
  "key34": "mkML2YYzrUMHMb25YseRGKVTEifzhFCFceyPanwkfkHmbL55foneFCRZnxbWGFPCg72fmyoAa9hB7QQMdcRtaHb",
  "key35": "pDt6GxtRyRtBxohfUNauKRPdb5DwKwSbQ3n34KK6Hzy914JvFNZpjnBf1goB6XdPvsvWKia1WEVpHKm5BUnc7q1",
  "key36": "3XBfATemwpuuDxCE3uuSMVNdEj5QfFy36nPgTxohMRn6pfPaUqgqQXaf3JNQGUKkaWb89jbdw7hSSCT6h5kVEmFw",
  "key37": "8RuNNv4SscqPE1rLUer8QvfN1XM5JxevFjSd4cB1fCcEiXPVGfWvfxgSNc8ruMkQYD4SNeZ77VrT8Z1fBvag2zv"
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
