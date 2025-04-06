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
    "2CU8pixu7XViJcKWdseYWYXM955f5fi5o3qjpeXganwZTnu3wLVeysVTwPdP78xbmrcdBHoqyD7vWEPUSMswVPAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDZAEaqgN5d4ziw4hbCnJc2C6R2FtdqW82hRVX8KoHZpuzhp4X6bv9HrKa4T5mur1kRK8FkEJuCXHvvANZjSZu8",
  "key1": "4HmHp25qigTcaTDzXqwb1q8GsZZoKhJG4WXPs2uuqRxCxzRT2X8breURKUaWEr1PXksM3ZeHp2f5HFNbaG13crcL",
  "key2": "27uk72pEft26NCN3BthcroHiXo4weEsmxpTqtwBSD1De4TkM1j4Nwj3sawDbt9xwnBxbKc31pETj1W5KdfyvTd4i",
  "key3": "4FmSjT9VzigmrqPJZYewXM3LQn7pJCNnj9idnJ5sgMzKXYjEomgPLrfbrG6x5oGJiBJ6bVxQMUG363BS4GD4AHTF",
  "key4": "R2XvJ3H35M8fvPHdAD3BnUi6Lg4MpLaPsbcPFepb1gttQHMrL5zAtdLVS2QzpGJhHnLtZFiCR4ArgRhvAtY8Djo",
  "key5": "63scmEjWGyceY2HZbzEo6xATV1Vjm98AjdjHDrJysKzkta6Bu1n1PztEagST8H5sbN2YvmNKq92rNnUP4bemqeN4",
  "key6": "5ZL7Hk8W7ZDPiEUZ4e5g7sJ4uNSDRXj8zfDaqGj9ChKuwmnarjh3fY4k8EMkK6jGqDCJ74r9uHv8FYBoy5Xm1vy7",
  "key7": "xyZqaUseaFJAZGCjnXU4X1h3XC6suNpE3xjKh6frKsBb6xPzeetDepST86eb3aT8X6Sj8or3Mw5iBSFBpSNZahc",
  "key8": "5beXRAFnsMcBefNbr6pgJw8igJ3ZYNoKrDxYAdALVZeHCPTshXgiGg1FTyzXBSy5FgGpxmHSJ7nTnKZcE2X2DedY",
  "key9": "6PRp4pVYdydBQ169DYmGtrZANibUd3hc2yVgkhF8h7MD4h7scuFQW6fdLZgx7bkz8xqxbFRDwtSDKpH4yiG2gmP",
  "key10": "3nCacV7U3j3DiXNXdbz7rzwnYQVrkJEg1dhNjyzfcCZn9cE2XpReVREcY4CFY3nySYAzhEhSvKeyhaDZnfW5LfVt",
  "key11": "3vNKupTn1b9Mtuz6tbCKPaibWoUZoqDLuM8qcPiuHEKDEzPFwB3p73apa3GBmYrTn1mSHMQjNMZBAcC1UMZcftqp",
  "key12": "5Fkg2cqHFaQZ13Yaj6oBTnbVPcyTeit7fckwaC8U6rQDndjctCi7TniBtK4B3yDszvsN7VKqWZCdhWkqRqcWA6sg",
  "key13": "4fqN5VxSpm5VJhHmkP1oajB8Mu6qA1ZAfNQjWdd3UvampAzJAHFXCgk8YhVpzwxykADkBxbwvgprj2ae78qewQWB",
  "key14": "2ymT8nV6PszYBcKrLsJXZaNnFJEtpb62T3skTSsSS2giBymjyhaNpZ8vM254JuiA6zskaoEoQQmwTz1zoGFvxBcg",
  "key15": "2ycAX5TkitdPat6WkU4NayqKKtKAg7MNfLdPDvPNHYFg4Aqj9tzAM8D8NBckKAH4oiJtxwSBAzZ7rdRieprAhzaC",
  "key16": "3jm7zvEy7zyBSdYJEJACdmeSaPDWzfewvfE3LxMcQvt4ue4wPwV9nyWBm6kFrBkJHtqnmY7wNxnHs9UdNykHgFo1",
  "key17": "4Bo7Bc2ZYf5NnNxXCMskukp97Z6mpKW3CkMWSQXqYV96mHbDfQxQeE6NuJ8WRMwoAqWNsCuYyesmEShfvbeRxdqJ",
  "key18": "2mtEh18AtvyacSmrRc6Ls39GmN2S9YVxBmvCVgayaKQx7BimmvDR5zKdAnWb8enEr2UAPWpx8WDk4Ap7oL53Grwo",
  "key19": "3Upw3JRmzcUwz8XHeFJqfYhF2fzLf8N9A4qtzsUMXUjqHDhDXW5z7PtwL3qtn5ZVEWR1xMaPaDXbH6WFDKgCAkVs",
  "key20": "4dHXGKmp6qBVJt2oktz6xHnxEVxZvkwYo4Q2eYrtnzPQkCTStQ6RQvW6eTnaa6JuxXZHzPcvw5H3DyVTuzJiNvZp",
  "key21": "L432BJ2MwMzydujEGaZE434jjknaTQqZpsGaMCe2uWMtPuGw5qr659C5Hnc7aMdb8rVM4uXscps8b3T1Bn7Epvs",
  "key22": "4DED9N5HxVbt3edSku3apxm47DW9RqHmTAjmRAFxKNTNMkXc4j6EwVJyZGgP3NREDe24PbHMfPx9dYPcfZKPHp9j",
  "key23": "4MAYYKJnk6We73D43etZXkEkJhmpWpNpzRWbhr27xfjQGsprUePXxzUu48jxD7dCxPjV5fQawqNiKhwgegLPZTwq",
  "key24": "4Z8UFSUKQfT26RkToFnZR4PHoWMmhKQidabogX1JbB7K5VQxaroC2uLhC8P9YL9mBi9735ejS2Nsid8CS88T7RCt",
  "key25": "4SEp4EDEvtPhC5DzWQaMz2iTARTvQqyDs6jcRQphah1emvEFoNvxMxeaUUgPFpkgDpgKAK3nLYQWQZftrfhyQJtU",
  "key26": "2Utg8DgVFmFkn3ebdud8dyebELe3juNZJfvmFQZ6MfQEswiGyojjYF31PatfCETkqZbUMk3sz9XEQ77hGyor4vw4",
  "key27": "5vmrMJoeZZvABoDkbLnDdCn7QcELdXUwYrjFHMyQbJuKRDPcafV5v3AgnhC1MMG3ofHFX1uQ9cszSf9HmZouEBhL",
  "key28": "4zQR1TUVGZmjBj2XPKb2h1cdMqEDD7xkAUDmVsegriXWtWMAAqKH5T4eAkoEZ8JS4VbKJfJQsDaTjFLsU6MRfrMN",
  "key29": "ktcdYi7UuQboz3aJJpTti7m3ZQDSx6hGqLMXWFza2BucDCpMZeYJm4bwWSZSMkuupCTQ52zoVXpAkZyMhJDr43D",
  "key30": "5YNdAHcwwi9TJFEvqqn3RDiZo26AzdQsDjaUdEvaGsqVD6HHEjXpXuF7mCGKXzdy8aZZGwqktjAmsM7himfmuPC6",
  "key31": "2rAqoMUToLR8LFBD4P3xJkdpXBp3mx43rDugYdH4zXQGTqfkpcrq9uFN75Z7LSq7GxxgkwfW2j65zvKKhJgZzn7h",
  "key32": "3m1FxaTVYiMTLhcZNrEwQXRM2TSdbpb4mWF7aMUfkZ2yPTzsyb6fE4SquraBKCmVF8dNvo7WfDXpszk7a36qBmNE",
  "key33": "5pXwDZsXgET3GabLVHxtsUTjHJsN8QEZGTGGGiov1JqP51GkLV9pvFX9Ba8ZTWqBChrFiD6rC758Fh84Xuk6Ph6E",
  "key34": "2XNQAL9N52URy6BpPmX5fXZY3SBifJJ4bV4L62fgi6Ezg1fVXywfCzTWNeLPLDTVXS26SMpiEBuaDvmvKnCDmbFx"
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
