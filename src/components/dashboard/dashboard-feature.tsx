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
    "pFk7qarx24Toq7LjiTQZV4Tna8VrSuNVyRfykYdh2zDN2xxYn1mRNGXV2hG6XKbkgxG7HBdrjAHNJGazDBWsGLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bX5Ne6AGWvyx5u2rcwBtPdnpzZ5KgL5zhJHNhQVaA3yPv8c9U4mhZEGcyTcy6QRyn1EZonBxqZURSqheNf6cAFo",
  "key1": "3QQV6ZMLmeMhKpHmHDeQXs1kZETGCGpMLKLoKuSi7gZKdSE56Sae263FT56YGXKyVUFxMai7zd9aS8b9FioyMU9N",
  "key2": "5E2CU5XJEUthdytm1pKg5xkeoAMByKvZ4oHpCwsuqb1t5o2AhnJ1zWZ1qLxH8qhRrVAfwntpnKz3eWMWFs7LrRQG",
  "key3": "5SnwoCTpnkLDDwCY4ohGJwXyKBnD1vPM1ggNXDU8ir9wXYkQN6Mb51Lo1UmhWAUhLHkn1j3qW1tvhJ3hMsidmp9c",
  "key4": "564Cp9WbYKTAcRfejvsGFkvH8eev639S7SFq2CsA62PvqHRbu2PSBQ5ggoW5N8uDMrPJwRa5F2Bo5Mv4NXFrE8zq",
  "key5": "zBDoeQhmx3e3Zi6SdArEtXngKLAjLVFfea23xw3C3cqqbwKNoV6rMyPPwSYNer8fmAHyEj3NnqhFt4Y9n21rahX",
  "key6": "QWRgfrrjGBuTd3BwRo7b7mQzhoKA2xYyuSeYF4VH4yVmfGPWEixatLfZubMsYayV1bu8S6Q1fbHYFTybku1P2LZ",
  "key7": "2qrrTjcSDCh49qEq9gc6L3Wj9kH86mLdfpzFTBb7Thunq3uCsEN6krXQVsB4dQ6yj6hsKDjPcCktKfu79dZ1TWSj",
  "key8": "2QXdFaiEKdvGe6kJd5SdECyrjn9X1LSCmTr8J5R2dU1npZY88ody7wZh9nE5ZF2qQXhV9VF5LBYqxrkQBCA655Rf",
  "key9": "4mw72AmW5CuX2W3A2N66vhBi3zDD6joy8omhJ8uqyF2Bxn2wHdZZbH3ii3AaFKQmqHwyNHQb4TDyU7myeocWeNfK",
  "key10": "5dRYMdFvy4PfGzBkm2pFG8M7imWEYzm4bXYwMqRTkE64T9YT24JYsjKuSiX66wSAHovA8Mhrje5ugsd3tJkt7Nxo",
  "key11": "4Ca8r6JRgueVtZdwfpCPbg8kFwgv372JADHmLtMQDaY7LWZE8sYgnuLgkwLrKWmirgK6vim3wBbwDJAhA7LL4eag",
  "key12": "2DrRqdBLS5KutGGXFMkdxDHd6yP1w2Bphzj3AbmtVPFGg7owcHgy6ziSQAyZJSworGpkxofhjRnx7vpmT7tM9bm7",
  "key13": "2GzLmmPc3a81mX8TaoaQ7L7bwpx3MjUhTiZgW63NKkaZf1um7LmebJgByRrNUx6idRn3P9pV6idUTh3nvyBgREyY",
  "key14": "EF7GxLYhrKw7y84sfEzhJtaY4cDPpAVP8uoYFSNtwWVxgJwvhYFUVWdnU2BPN8WdcfEXQUp1z3EygQYTkof1zEf",
  "key15": "t3Qy6kNsGEFTkumdRpojyXinHzAyAAZhkooXHkD33bqaFckYDn3NWMSkZ1R8GCEiHVQadd4f8MJNdorDTXPKmB8",
  "key16": "6iTgYb4p9cifDWFSfRtQZZroWfLoroiDiM4JrY7kD2pk3Xjxb5n8SrUZJZBQnhxWeahp26695RXXR5FxF8G3veR",
  "key17": "3kJUPfn7utyeKvEAMvq17okqqukg8ktvtxKWorfGkGgqotnYC8xbLqitMFwC6hAHkmymDwPYdmFAzcjna4AorwMv",
  "key18": "4g8xvZpA12Z77RNZpQk81CrGu4WhLMoRW4aSdRHMT9daescaRB5xzi9V5g88zXTryrRmx75xcpBhju3VaW7oBtJQ",
  "key19": "Ak4uxW1j9RgTH7j6tQmmCUyZ6PVEwwd4E2pDHuYwe3dwZuEAumpnqcTxqArSv8b6dUzmnh4zwnH4PusV6LU2Gpq",
  "key20": "5qzf1BJs1h24rRRzt3pAXoHwprHCSo7zaWDg1sFUU11WycFTF21pTUj84yYEFLukhmQLjnUeZN8q4kdcmip1tKHn",
  "key21": "5qmbFZXqS88awaPQjRRcaiqiZezULXcdBXV7oDkE6gUTCK8VhGY5m4t5mvAv24wCFqRATjtq9fXveFkcwqnYqjXS",
  "key22": "5oFi5dP8uNYCZ5nama67WGWb4r9nF4QU3YqBs3qQwvo5w8XhSyZMuUbDSWwspm9WZJy7VxeuvNTisv7VPH7hZuLi",
  "key23": "5Je5RHAXaFFcLTFH3QSCLHZbhBCUikUZjeQSBRUF5dvFFR8RQUDreM3nLsh7QkZVZ1sschuNkTEzCPcVV8LyfkN9",
  "key24": "4MosgLHJnwEioBihvpcWBbHKK9c68KAEWNWgSVie6d8DsS4mhTrhTWnFmhvoMy6xkoAgre6zHN4kCUdnM9KmzxCv",
  "key25": "4vCnxSYZ7WyAA9Pj28KWpmWZGe8SopqL8eBY3yYuMMzjnHefT7iL4L3XFU5pYT3bV2x35av8Womib6kNayuz8tD7",
  "key26": "95AQ3mMfF9Wgh7SzLzHXDnEeXWwnT3PLurk6XoMGwt8PgrKS93Y1db35z8YrnkPbfxBC9BuDHiphkvE55nHDyob",
  "key27": "zkdgiYYvoSSqGBBcTe9JzBoGHgTrcP9s9JuWTNAuraPyv8SDn9cFfcfAGCFgCP7EGWPVTa9S4XRfuFT8h5867Ac",
  "key28": "2y5DAucmgbMFPJcp42caUTCTzqi9VLwEwP6xpRwQNjxNn545NHmgSrnDScybKi57tjXsnZ65FNV63DthCynd8KvE",
  "key29": "5CSxWTsKXdK1kaQya7nMR33DuKu9dobuZhc7eRMaX6m4urSnSJnwLmrEt5EkDoELjnUm4iA81m5fTQfo8cHTZLtz",
  "key30": "3gyRtDHKDYoAHMTmvKD7bEke8WJeXhbNT5qvK3uJJEAYjF6RZ54zqhAWK9LcdYjD3kkvgWg7cVgg7EaNAkWvJiXZ",
  "key31": "4TVhPvhPwHMSwmXTPESgjJQ9vLXBgEpUaXTYRigr1DiHowgpVAomwodtZ8FMWiCTrU3cKxbi3oS6N2jEtfcsYDDZ",
  "key32": "StYSsWQ4inKYaSUw2igQMWU3n7L4wN3W7fpc9SgsnCzGxJGBuvchXyP5rRht2ZXtGdgUvJAJyUf8yLcm6pZ1vEV",
  "key33": "57RmrTmB8LD5A3tYZZspLPVs8T2h1kLfKyAtfTYcoZSFRsr7U7rQHpP2Gafunwf3K15wBiawAGEmYc2by6vsDJYw",
  "key34": "xPWvVvvkGvgLPVwGsDhvWqxp2gfdV4wjCJuTSRpvg1qz6iLyZjuekrBgMMuE2sfjsMGdjktLEmQWBrW4ncmg3Tq",
  "key35": "58ZsWmso6CnvBRTxuw7FEuxzFG2Xhy8wJr8HFxyZQhv9e33BJguNqYxoNrq8sDE2un7oDVDcWPK3v4pJe5BhpxEK",
  "key36": "5SZZ7jdjVL4FwN2fPTh9Tjm1h3xEVpBWhzsmUh4VWfsqb3sUta2ehM8uJjYkXD7EioLkmQfK3BmA4TahtKUjEfAV",
  "key37": "2TRUFbsqieRyDwnmgdaEpg2aKBipYCPo6HxStJ7NqiAGV1skVaS8Zr2dbb7vQ2BU9WLwq9puGL9RMi9mKsPVvRU2",
  "key38": "4omcQKPvd7VV3KF4oTbdBQGz9MiVBwD3monZQGfzZE567Yo7XpLaQHoDxwGchKkTkaPoaFzZmWFoG9rDr38bkY7t",
  "key39": "KeKVo2Sh6vBLsuWPHi2Gn2gSQbdgrDFmbpfzKRFVXYC3KYaUyw9NJreCocTs38ZEfHoeCWrCPzrwk83wV38Svnu"
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
