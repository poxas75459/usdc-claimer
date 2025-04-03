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
    "3pjiFHe8zyACGwzzTeLCYiH4rAbaxwrtLjVJnHhx4MzuvW3f2Jngt2zLhFR4udxCZQFqkCny1uJK8o4Mq71GiKPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H3hLqabWsmiBtBdpLhTpZb9ZNs9oEo7UvuBE222ktvBfSn8rvxCwKdPYo99VbNnTo8UkarBmiwSSj4aMPFnxj8e",
  "key1": "oNXRYKzpjsAifhA43qtzGr3dAr5hAULf7D93cHfczaf6Seca6v3qoXGggEXHaa3B1xcMHXYW3QVr3PpY7US7G6v",
  "key2": "6xCvFuNydr7V2HAkXg76mxTWApz4nW27V7RzcNqHBMUzdWBJVa1vyxSSRHTrtsoC96WHHPMfL97XPHncbUzk2S9",
  "key3": "zJuxsPWggRUar1bp8oQZPYe33fZbKxxTPPqy4nmpHdiDprca5qdH3bCMV2o37nqs3oSFvfVrgSFHaHjG7xc1DKB",
  "key4": "mEi7iSWfq3USk46fLYczSbwhXKYbNiYxjrrSwuQTwi1UgwGJ2AUofC7TJBKScdXWj3tN2gg6t9HBC7sTsm9XpoJ",
  "key5": "32x3j9jV169GK8XTDUPV2kQEgJZFuM2c9CN1MWVmY3ASYUtyYUzM4PvujgtrQvZSKU6i3sANmRD86zSWTwRwtzyM",
  "key6": "5wC1fGxwgiMmQjZDfxb8orwkbNCn4cWUjmSBe6RUBSribdrXEMrEwxMqbDHA8noACx7aPLyutAUnvNxRuNhLUJmr",
  "key7": "2DqdznU4i4EKevsv9jFuJxi45WP18G5SzM7Dmzqo3tEH1pUcVY2N6Z1ubK7vRiQUiKsgDE7Pt5Q9eY3VnJWeNShB",
  "key8": "5UQ3FyewHPB6Q4AjXvTdtNbYbaKqbw4DGhE1NTD55P4rbGFudg9Jn4avp8jtSH2xTkZNHvsr5gDKJ4oTTNrB5A6Q",
  "key9": "8FFTxwqajdTL9xKUKP3NxcoYFbvY4e4W6LLCcDBtvGtHKfc8ZqG8i8KCoCyZN51985KJoKfT94Dbf4fy6Bppnpz",
  "key10": "4oZhg2EWHzk49D7xapNwZECYRfV81EbZ6eoqedLyTSXZoVaAFSXrcHR6MFo6kNZoQwryq6Fd5dkVJMJeE2xr9qVq",
  "key11": "1R5is2Z74DPKukZNYBWz2iMxbZQYFjdpKshijL2GL68znVcXjUUKpBeYBFez8ykKP34Gevhjj8vPGwo8fbtMmkh",
  "key12": "2iiaPhbLBEZ4WmTySEAvWZpQXVZmwrfVLzQdnLAdMSLmWxUipok49HpcjNfXCyBfNxEy9kMEeHTrCip1ZP9YM67U",
  "key13": "3HGp5nmnqG8yhSe26JnBKzrS6wH9XWimZVMX6hy9zHrUf8pMHcD1ddtYathXRXj8JcwEoJBn7LD47UMejbkLaR63",
  "key14": "38zbdqQiBHMvhCoFmiwXSUGqbkToxMK3ptCAJQ2YXEJhcVQqQYdKzLGX9BB25bXFqssZPfThmuevmFYrE7jbTgXY",
  "key15": "3FrhsZj4XGGYgMJkG2ESSGr6ptTDfJbYu9w8ZVHTVYtdP3CBzABB3oGyQHZSN9PZNeZhDBVQ1gg8UqbTFLsiLVGf",
  "key16": "2FdFinCuVKj95H2rfzKAAQ5CqdGuwf16y4NtSWZa1YtAj6bLJU1yH5Y8URe2ifEttyAwvypbDCBA8ay5Wp3rbGaY",
  "key17": "Pkj14hJCB8zJutaHRiodDD4fJqbTtEcoXoexwd3kG6TGqc22eFoRT6jFdpNN49h7YrnobFk1D64v96qjE2SdriR",
  "key18": "5iSwd6Xzh4syAanoG6raTfuaKWfzfbArwuz2MFLMvyBoC9Fx4TaU3neiNnPYSiiakPyjydgiFdouzFrAM2gMMfQE",
  "key19": "4BtUSB9MCojAYYp3BAT8sWaqGgvZrmMxEjDig8wmz5HEL4ybH6WMtkSKAzLGzAwK493ARuqgSRV7dQzWwwCDG1a5",
  "key20": "5pbVAkLRYF4i5gFfYqkGYwfUFn6DSNTY2GaWBsBC17J9p3f1D4nCCiEHSwjsubBfzjAy7Tq975AWiqBM4PyvN2wC",
  "key21": "57dtqLR1imjKGPS6zkjK2NBdq3jzDmiyimbzVs94xqbE7VVnkU1Pyj9pyQuJ3dMKMZJzE7Ff864CDmo9abbdqqtL",
  "key22": "bPNoHe7LvuebB2Fbff5RKe542kYV8ZR5nU3FtevqH8au3DANphZsyYDNyJXhiMyofVjRtPA1Lna4WGw8bnea432",
  "key23": "46iSqukVkvXhJp3xVKEQwXRHwByHfekRye95Pxvvh8GJMR2oUK3gkWJN2pWb57Fp7EnPSCWmaSGcSzsvWyb51iBX",
  "key24": "62Wi1edWvPcgAqCpRduyqrkwJSp8ma4VTK8fU9Q7zGLyUcfT2e8bKcTb9gHHDYyfL87RfG6KBP9yB2HARRsnj1HF",
  "key25": "dCpD6tnMQXakQxT4x1QzwVjWLVBLXoduwKvtRAJvAaYQZqM92C5RrHkw71UyxJLDxF2eRRQmfiDuqa8LvmF8AB3",
  "key26": "nP6we3CpsQ14ersueRkAG3B6ctXywhC8opJRVKt79QeJzjDU1e438NvKABMBWYQUyTcZf78gbCo2UucbZZZyx6D",
  "key27": "5BCJWonGMsFf8DL8Tcimbz7Az7v5Bdd8GJjEP5Y19THAQRs5wWuAKQ3XtPsw1H5GrmkFjSC2VnGtjoRt7unG7QGW",
  "key28": "2hPCbpbE8CJkKtArSfYJm7eKGegdU5gwzE1w36jUdNrtSMx7f7Gja9nNmmn6DnJWn44wThrkfWnYkimqVXSsqJM5",
  "key29": "3SzHPC1NBGCnudwut8f5wpvAGhmzxXb6c9anLT6VHcUCpctMQxhSzt81KP34257g84guERSaiSMmsv97jj4Ck8N8",
  "key30": "3ZwTGezU8ahndetCjjTtZEFsJdsfHCyQxvEqYRoMJXteh27bgip4aSCkN2LU6ckzgXmw2gJgeh2xgTNLnRuc1wfi",
  "key31": "5BtSEbKEHd8q1Ruvt9Zx8sCZ9ttEKK1NyaTto25KtggexbCJXL3a6g7WyYMjKBPG3DRduA7fBfTLRsV4P4mUve5r",
  "key32": "57EuiYNN8xaJGaYFRq3ggyUpWNaBUJDyeLSf6wJusojVKp7ApmaYngV2h6dqnKeWFNoY5JRJv2MMBnk7ET5N4ejr",
  "key33": "GfhEzaKkwcGJMwe5vJkTTovPLUaZ1wbw2A2C4aDMVMt3fUXVyx8QPgSmhTgs4tNXZ1p6Ea717ZyjBPrKJJVMK1w",
  "key34": "PyBY1mhMvjw3PNUSv92UQZetEJRui19PPMW2ws8taSMkaiUn7GWJ2TCGycKaFgDA5HDmxVBnbcRYT7WLKPug27a",
  "key35": "23AsUrWgAHMXBbJi83EHznPJk48xgAH5AMJE1bNTS2nRtAgx6ULDdDD8u8uF69jDHL4tz5BFgkG2k44KdsjySDHc"
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
