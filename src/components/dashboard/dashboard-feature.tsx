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
    "2H74YXZLWYgnbsU7HQxWBcm92psRNUcGX1uM7b6rGFQiczZq55kB2nNENQdHrvDe98K5dUHhyNqeipJDfY6WdnQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Z9gvua4Any9YAwg1qiQ2DsYffD56Vuc9VX5R7JRxmpqdhcGCF6PXSjVsvhP91YeDaHT1epBx5Voui45pDikg6W",
  "key1": "3EJ4SnZLrc3mP7UHoQUTbPzFpwNL41P8os5fh8sJTWwr4uBhC2RiALcyhnW2GLHqiSKvWwvPnouKcARcRnnwPfAZ",
  "key2": "3J765gDiHnPXrZGTwYMEgQJyzDPVT682x5wW9QPSkAWPpULPYSNFzQTZJG9MfejiGpZ9eXMYUvfDheStqjRFDY1C",
  "key3": "4rZ2QC5PHNWdtSSQtnDn5wGjQixQwhjk9SwteFmG25TCftsTizwhESrgLjyxuhaBftSvt8d9yfh4PW4wJ9EarC89",
  "key4": "4tzBac7ee7dRiokwcx3YxSCxCsWy4K98HP24r7watVegdpoPHyQfkjsjz83MjWUE5YqUCXhexqAXnoGybjCrcMP4",
  "key5": "5Pbv88fgAPJArTSZWeiMYETkQnkvwcLa5LyK2HhZn3KwDVMaJind8Dzkbi1TyZ4ByKoYdBYRDvWvf8zU8FHZDsHP",
  "key6": "2RMfkAJNzFQXD6qWgRc5sa7owCgurW9aVA1EaRpcQSxHQ7wCewGQcjqafUfJYSGWZBj7yBxeVDnGMZAcJ1eSA7HA",
  "key7": "438T3gwWTqnuzu7jazqECR45RENFAVRDgw5j8JbgbMA7JmULfCpnQYVBHHV9TSMyCQAKwnAKdivyaQ2sY2LeiF74",
  "key8": "4zFBK2dLrzv6zPEHnqbk5LN3DbGfwPAt3KFsg4AX1t1ZGKNFwtH4udpvPATreXbX74sMCyJGo25WbU9eT4ux3Dx4",
  "key9": "2EGa9cHgrN54ZBX8tRZQ4uTamn2v3qt4rk2sFPmXGZPejXUE7MuVaYz6vSVYHUKdvh6ktdDcpGW4k8jK7tWQVFsZ",
  "key10": "34191Z6Qo2ycrH8n4qpYQG1PErCRoF6FjczwhqHULeMsALeGBqWndRabxhYJPFVQzMUvQKJ2don23vhn2pKAdcTY",
  "key11": "LxDBnq14ECXSV7sWa7vKWtm53MBmUqMUzDWgcBLKAKB2sMpKqTPuuSK5HcEj7yehihbNgpC3F2emyRGyLumENWS",
  "key12": "4j8bxeRsb1G1WE93Fb8Q5XTDWFFrie6Xw8Y7VknQ4k9Qnz11vRXQVd2JsDAJheKyHvf4nWJWzKX4phK6LGAkuTcu",
  "key13": "XHxb1a9vL8FyHFAumTr6y6r4A1LLBuPYLvVXhhUcekUqqJq1TfJrxKc5mN4aNwXCQWv1ccvXtNeLm5Miy7NyTgm",
  "key14": "5e3eNJavmcu7vC7G2rJVqVvMQ7gvJ1UbEoGf8fp37YUvvy1UsRQKHmvswAXSh5wuenkuYMFXu5pWTL4K3CK56DhQ",
  "key15": "2SR9FKdnJ3ek4sGxPQKG69DqH4oNoyeJRFcHqzrvgZxSiqXc33Mfw5GjBnZQG94TBpRPWuUYz8v8Dh53R6iviY5x",
  "key16": "rfGqjYGd6pDo5mUKkwVw6Q8DCQYG1tsM5HPgNRG9utnRgpwSH4e92HogUSjES33Jt7nwDgrJzYu84bvGdD5DM7R",
  "key17": "5zuxvFzX23aLePVYtPfMTHCmBHYPg34BSLmY2YdLcAr7zedJu2GQ6pnq2txV4XoWrpW4wmuZndAy9CZr7AkeZUGi",
  "key18": "3hXc1T3K5xPNx2j9XdNCijgw92Qjqh9oDTgACqu2M8anUiMVFNfqi3N1fwvqxNwFTTbxdoSb6kw665iuDsmPcmnQ",
  "key19": "2ZDrBSXnAcmLp6f5YKugEsMeMmjCZWY9A7cpVn7VJ4vy5uWck2k8VZKhPmJUns35cTEWTkCBsrdqSQJdan8J39bE",
  "key20": "hg1uPMB4PSCm5oHQtxHkWQhJYewea1CJuJkT8KShqCvCtSN7ke33kgE7VADZ2quZL2fczSiMcfYZzRnYCuENmkb",
  "key21": "5HVuAqQRbxMZ1GuHfTYJhL73r5tZDNZGWm8GHHvL8qxwtAjaMcsRrnwuxr69ZKnyczo7jucxYnzePeRmoW9EDsg2",
  "key22": "2xejuGEeMD3fB479BSC8fYkdKwb1rxKiD5963dsmSSLcdWQQPtu2NLXgcFVg3tuLtT6QrsyVABx9KkWoF5QaDKtN",
  "key23": "HoxPVxxkSeyxWSZ21z4H8S5mL6ERG7TCLzC1MnQdy2k25Vikk21v48Uy38i8MuUf12vSX9gZM6NiHsVbAKcxGN3",
  "key24": "3CLnL4MTiBuFFFvn9GHWacU6nRPJy7gGXFD3eUJ5Qre7Mp3m4sXL24Mu87xQJGnJ1YpFaHVuqp6woeediQPtntRp",
  "key25": "5AoknAdCbpng5N339G3S7i9aKjvBUxXvboVEUJhBkztZbAbrAE9YcV1bi8fdvTPBb4LkGYig2RKVATtocpHnPAuh",
  "key26": "3gVcoHuTMy9Uo5Wsoy6S6SvXA3pZoCEYxEDQ3ZCBDxUSbJxk7NjUALTJQADhjnWAusjece6mFZJFUesfA8K44yQS",
  "key27": "2PEPt7yNqf5wu1eMCEXEPSsMfrf5X9gCdyAmfcUpGB3weiRRqbbarqntvrGQs5fx5suz4VVgvfnSxCGjThmhuMKt",
  "key28": "3AkK2ry9YvqZQXUzp7Xqod6uP9xmryMh3ZaNdiHDiuW3ch73k6HgwG7UWug3NWGUbw87n9cBi7qJ7TWhXwbTyYbV",
  "key29": "5md5C1jvojzfS41VHRzLLsyQjgwUbyU8Dj6wPmYrY7FwZPKhx1haoNhLNWYT7WEHWzdV2EFJTrE2w95ABzAkP9qn",
  "key30": "5RCfNjRzfzigGu7VzfZByGRRRrvMaKY6tHWQCWdv27nPhNc57ffMgTtnqdHSuKzqhbqBopvqxeYbCwQSYSFVqFbE",
  "key31": "3fx9Avy3fmwVVuWsVTqTSBr9F4DK31TqQMmLtvyRQ27bS4WwZ2aK2bGVXoZXTE3XU7v8bfAqS6hVi5ARcQp3HyJm"
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
