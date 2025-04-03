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
    "5X7xomvYFjSjMQnGekcHmLvx3BTcsNVjUsKATKXfTLwjELBa6S9GpXk8YbfbzJ3cwZTynnGvpUkwhSm2PpXz47nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cymcLLyiL1jff2qXceDPX47N5qHpR5zb35aHy8Vb3o3T1ata5YBWXxMzmnt9v5qwkgCenz7exKzHs7wgfpfHqa",
  "key1": "xFXbhET8noExC6taZMLww2qaQn4dSZoUSCapFAoWSDziL3M5RWgVs5r9D3je95Q5r2sznUHYL4BTVRMZXjSPTYw",
  "key2": "5vKzdo1QZh2dvsbnfExMB8pG6CPGB4eivCweGoZtfX5Y8ZvuNaa5u2z8KPvMHk76YY5jmpD3BrXKoxi7N8V3vXf5",
  "key3": "5r1wH2LAmLa7zgcsAUUJo66CMEdZdZP6sri85AHFnVNpBZtQwzE1JJVCYRKBKGzg2hifU6wk6wqv2hWZYUtks3Rd",
  "key4": "51qZeDY78NXSSJGfxwrxoLgmPwh2k1mrWv9XYteLzvtGBH2fELx1aUZZSNFcE463gPa3gPPJTEBsDx6oWpj8GSXp",
  "key5": "yod4jhaneq34DdZyPp5c8ZG7CYykBHPg4bNrLdCd3ESX2V9S8D35u2PmEeWfBfoHJ5kw8tRgMjg6R2DhSdUt5Qc",
  "key6": "3LHytVroVcFhost5Er7XB116i6yzEqVZnnpry2bHu8R9nEKAVC5NXgi4txq9zqHRk7MdBq2Du3NpVdnbSiD5ucGD",
  "key7": "2eCFQNh1Mq2ih7F26ZsLpt2NPeTigdiuAS9XmqbF6vQEu4SFhcnokjfuqsahEm8Bh5NCBXZxvnNKUDTdHWcUFH7o",
  "key8": "64BVDbGLH6PJmmri1yeXZ4guKFi5bc3UU9UTPSctGJJJrb3xyc8q8tzLQVDsq18w9s4fEvRcbjLzpyv28EfZmHeu",
  "key9": "3uvAqE29DaVFQTxc1ogFoxed82872MfKpgh3AyqtiJm1PXRnvdj2KA4EW7CbyqJZKCqkufzz8zKbdsPudDd823qS",
  "key10": "44dHrLU1k5ZwcTCcaATfs5AC4se4eg6jeCbtJhhAoppP7u9PQiKgJoZjft4mbNaP7MBJHcWA5uEsgG8MDPwWLi9U",
  "key11": "sdE5CtDWYVAG1hMHu4NmJBZasNXUpZiCBXw4xSWymKDfw8k9ed1FT4Bf3fPrcFmGc9QvPj6A1BbLioZz9pzjtBQ",
  "key12": "2iNRYLwnBeqaz5z2QzG7qy1cERB6EfjFU49nL4JtpcbCGrdcUsnB18bfCCKHRYjVX39yx2gZDszXTHAZprdCQpFj",
  "key13": "2YbYadVJwTztmvzsGtytiXg3xEL9qVYAEv65SbHUngYrsV4rptfY28tYyGYZ6p2VMuJzSAUxgSaRkpLmfhcnTxfV",
  "key14": "25jTnfRyh7NrRB6kpz8Gu9X6nbJd9n1FNMrva1PWcq7YWdmshcBmhAx2nTkBaC7womN8mM3Ns7nbLy6kRiM4RqAg",
  "key15": "4GMmA7pNhoo4bCvKkCXFEJ2cAeK1hoBSTL5UJetE8nwNBzkywfYZJcmVu3sRkyG1EeoN4phfpdMxc68tHxrm9HgW",
  "key16": "Sij3sEAwEDwPofptL5DyHmWrmkodN2j29VNwov7BpTm7cskv5YbpGgHsVRRLZgURg68NgHt5KhfCBXrNwbQ1zLf",
  "key17": "zheNpf7ZbTge8DSoBi4JhQ7sVXhdATqSA7oksnUkNkZVvGhTSbGdWmst8Y9G2YzcNMoiVWPxasnJGwhwrhqRF6e",
  "key18": "2iQMaUZUgvkBPG3SMUDsigCPvqLXziCXiZiQhmZaoXBRsBtFt3tE4w1o54As539dA4s6HEwJGJPBUvJNLoGeYq9Y",
  "key19": "3jLwTc5DisPCMy1wHX98GNLkmwgc6P4WUnpv5CR7jiMGucYpxN58fCEJhEfjhY39d8Um1sFBCCJs5s1UyzD1tnU9",
  "key20": "4cWEsWRYvpj6P6xtKWtPg5VqPjaD99sg65zJefFm6BptBH9MFmCH2KB8jbYmvEM5W7HAcx55qZXHp1J3nw8y9K5t",
  "key21": "21Z73Lxr3SW2jyRVj9Q6sZbs3UNeH66QWkwpmkynetdSSpT6JEbcXWKdYT85rVcAjsw2sCYymk6dWYknhHCGnpqn",
  "key22": "39ksQVfaj6bFGdcGgs6ShqsC7vNRzRBAzmg2Whjbmw29FW8TsazBf3NGg9HcFrhpAcsR4m9rs95Hqd3WHRWNoXqv",
  "key23": "2d4wkTnZQeXXzWFczPXEPMS1NAzjH2UPkN7zW5teVCgVG9Ufxg8UfFz4vM2TXtyZe3kf1peryRG6EdSjL2NYTnTP",
  "key24": "5smA1sCgPYaDXrABq62cuV3wWSUmuKznZH4RAtvv9rL5TU2BHWE2sZeY3af4g4giGWf2y5eJgnMBXLyiFRVuqEJF",
  "key25": "25AqcTsSVzUXjP7cPL8bjAd7TFq5NPtqfQcsmnsUTJSUxbfZoySy4y9PaJ38LemobYkeshYBdUy7XgGzbsvkC5fr",
  "key26": "2uWuNWpX4fJSA8MMVejk4HvNiinCXCxVQMGTNx1qjuehveR9gwszUpc4cEDPo4ySSSR5rfMuTvWeBYNdBPkFGbM5",
  "key27": "3WVJ8H4HpocnU5dZNd5rBrbrZ6o3DdUB8ydoUGgA7c3Gfb4kvd5JA5UmZrHiUNewg6pN64SpzQigB9MDxRUv9gmu",
  "key28": "VARJyA3iryJ5smnXaHY7FeKbZVpHDQVa3FtXMAn3NaHkZvb1xoLuysTSbwCNe1kFg1RyqGJfafdgNFrYqjv7XrR"
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
