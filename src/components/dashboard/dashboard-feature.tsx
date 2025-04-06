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
    "5Tj74pKwN6Ghv3JSqUKRPSkF9Gn4AMqpFBKfQ3vdsGz1f9EiYfbhxK7HMWgMyKj7VL9UTr818oWjGhc4dXgDBE59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjwHVx678QKf7UmNbtbkT5d44dnjr3s42iBX3eK1nWFUTveBaMT2mzdfPe8sMthNaYEuQCesZmf8HVoZryyWhcQ",
  "key1": "5pJDvwAzeFErc6BRpTQTUG5KqvnzXF2USkqscY3WSySxUe14KqFx1AuY3WKGVj4pbxhjRc2kBmFEjaDy5oTWuUFk",
  "key2": "6ve51ka6885KeD2WsToVyaCZFkCqxgxRrQpZoetMiiAphKFpUMDVJgdthM3jLWfjcTasMq75VNg3oa4GPknsnRy",
  "key3": "4fPJfKEgP11en5ozAmMUhNLxTJqMXn2DMotMjTj53ByjBCovak61zxXMP8SRNR9bCp2ukEXFyE7iuwFMeoVDVWZH",
  "key4": "23pF2z5YM4mjbwhXXi31fdD3y7rzeYqv5bUKd4DkRsCbUs3J5fP6btZFSJzuPbv9BtcNTyfP4zJoGDzjqCpxocFL",
  "key5": "54TtQmxHdFt1BzQ3DJncPLbv9B6nxS1MGYSwmui1QEVqJ74G1M8Ggid1cQ5kvKqC17mvDTggWmnPSZWJKCyU6JW2",
  "key6": "2wBzVvj6uGYuhtkBx38SjQTKoxHkNKgq5MULJBaPHyHdhDLLmZzrecFhkDqE8m22xjnZs7P4jHz8L9E9rFt1NgfV",
  "key7": "gjYZtnbni8YobRZDYhACrgKwjACpkvqRzoqrAbcBTwDoiM7i7mWHcHh5EmdhWWKwhGKCS3UxEcjPzzkLdir7rRS",
  "key8": "3EDgRNuJ9xBMEnatHpwFXdrNJbvY5TfkqyHCoN1L5JXiXeZ8tE14Gqso19U1ny9LnT7x9jULbQfxCkoyS6JbGqhU",
  "key9": "4KopE6pW5o9aV6n84A24Vu67H8nSkc3cPk4R6y3EpJg2eNrcUAcCkH9kcu4UqP15QqUXN9GRC77PmYs35TpSVYgD",
  "key10": "4TSEoETfFgkqspb9DjbnN5Hgzvm6XFqfkJYwe5UyUxVejt2Wr4XFG1iEGiHB9Z66o2f2B9BVjYqnXwXZF1NmKuZa",
  "key11": "2d2oBHZxRT55XtCfmaaR35ZG6wjnVAjWXmCw8Hd8ZFErxhQC2i4rzgS9gmBZPJf6FzX9sqKoyufdwe8MKQdrdg8",
  "key12": "3ZeEMiN2oVfMGkMQuZ3uQELpTaAQhBgUwACehw9d4vJCTBR2KkSLtLLiigLB1dGtzqBwYZpfA6pssi9feusiwaVZ",
  "key13": "2qk84A9pvrbcmHoknsQY8gYg8vwG1Rk6qaDw1RyQK8MBajHCvCrt8cctL9WKXWkXF1biAoThdAgTowWCGLJEHCzK",
  "key14": "2P77PjVJ8xrZ9TUbEjAu4wsDgv6JdYJWPxhpECq8MKoKooF72AAbEEhQc362m1RUUtXAwokGnWNrEWC1trgSvbR1",
  "key15": "5fBdKDKn93yFs5U19p9MgJaPVGJHFkT4dMwyrAp9jcyfTAx8KGPWVVSMeFzTRiE89SLZ17Z68XP3B56ri6CskBNh",
  "key16": "532z6EEwzmfWTnX35pkUVHLhemeS8knr5zSLB2gL9issECgWS4trduy1w7aYab1Y2kxV3Aw1dXnfnS74HwFZ6T41",
  "key17": "3qMwUgXZAAFMLccCM17N3u2CA6Xqr7LqZhYj96ZCavdE3jVcHWP3gMiGAUcETYn8HMxZ2kTPLkYus47oQrLfkdFN",
  "key18": "5BzUfktsDKAiPaZAjmVJnf5SkDsTsvEiQRqeWFVH9ZC6p6sxN2BAsKP5zSNrvZrgpHsyW41iF4Jox9mvXAaoJSVu",
  "key19": "4T1U54CNHbqKMNgSLct2XEoAjZPUVuMh6eNGjrUgSQqVXrpn5d846ywQidLbc95Px2kFYWmcrrgrxUzuBQuAnPWf",
  "key20": "5qeavaEqqpVYRmJc5pzMb6mZWTEfCn3P8kFDiWHUSdH5EARus9qypTouyYKQnReppzLyk7MhrAqWHTEdgdKemAAx",
  "key21": "3wRBVpTfNNnkSZJhPfeefuHB4DvdP45kPJ2H1aSVe9jtPfYr9ZRJd6yk8AXpXwi7ngQgjcPDrnXvTmyF9LCK4cme",
  "key22": "XqRfYkEgrZXQbV1fYkA5uufxkxmERypeQAuqLfHT3ANjyCDVjP7ab5xoVgGgxxXiz98wE41fg6vxeiJeEo61Xvo",
  "key23": "4NM8w6b3Lkz3pcf5W3Ey9dsCbrw32iJcQbK8Zd9q5mmm5BkPVpAF3ZCcnq4fVG66jegkkRYxDm8Cvg3fnrbuEfvN",
  "key24": "5HAHSRwmiiCuxk3RGS96RuYpnnpEmr7CrsSymPrK9sD4SPjjL4Bky1wHzcyJQiu7SDBJiG42rZ7Gw8QiKFgQ9weX",
  "key25": "3KEUWx6GHcNAKBVtricLWnjbojHwkxMmsNX1nuh4gMKUk7adZjwz2BXiubErkywi6SDt943qHvisCnPiTg8M7ENL",
  "key26": "kRH6Dxmivvt2xPZ94PTRHwSmFjpxdgahARYu3AYQ9z94RXfNmftABv5bJsUkmE6p5rrad2KQmyUnAhpLYso7BYW",
  "key27": "67cwizud5mpKepLqJ245tgXH5rDARbu8ouoe6gDNLGMpdthJN11PZZYoCAL3u8xBbrcp8xYax7wzThe6VFnL3w9k",
  "key28": "4Pfe7dzewjMMVBBERJJwEAi2vsVWrCXocPovkBtpXtoZAxJQpcUmvZYab4hXvCoKXVABauRYN87e4SWYEEpPgUa6",
  "key29": "3nVHbp79GLM7rNGCsNgh8AyDBqHDUd4Fc3gwyXoxf9gXGHqGPeNzQWNz1quHvY8S9Y4RhBkR77aQUv6zt9iU1oiq",
  "key30": "ttz7c72sypE4pzT2rkEqEQf9gEzYdjKp9JrvLikXGbfco1Jh7RCZvPKBPkMZwf5TTgdLXyW1HH5YkwRFMsATvgZ",
  "key31": "4ARygV1fxs7GXzd5rmYMvMzW5zduoSbnKME2vGgvcvuB6iprdyJpHdtUJm921PKg3QRRSXvh83AQGL7u1C8xhNF",
  "key32": "46pxci3UeMThDArbfBhffo79AfuMMFNPoZ5tt44U33vCHftopknoh5wWxp8hSSb7treWXAvNxgG5FKf4fgPa4T1n",
  "key33": "3z2LFTF1uA4GKqdjYcUneKeGmiH2c1huFpURTsTfvxnpBLPeEsJbwfdy9LxgVdpPiaDgrVAtj73XZzqnRAR6AM8m",
  "key34": "3bTuJdt7yDh5HJkYutq5Gd8WgXUyhtwWFscdoGnP11c6kBQeJDTv3c97Z32CAhfZ4KwHRwdUafhknpdtz4dScuP6",
  "key35": "4R1jeaFeJyq5M2bfawSgK6H4fYrC7j2J6s83uVwdpLgtTxFC8RYsdpyBNCnB7uePifHC4xUwX5MBPQjanSRpHyN6",
  "key36": "2oYVwAdgDUn4RL7Nvdt51XHCrjTKurdsPJWABoE9tnbGZ81qxLi7WuQNcBygNWj6N3fbXYM6yBBjbJ8gzSZD3j2Q",
  "key37": "3s1chPB7cgSjfUt8p8HgdvMBTYGkqA2LBK63W4ReVT8Mk1kXcKpBgxKpPotz4cuNijeiWa4GhE4Pm8pXBsYzpcNt",
  "key38": "5KBfEvx6BYECJi2qcMn61R9oCQzah3ivT8fksqvqpUSBVwuSCP9CXyfvvQW3gB27EdsMKU5gfvQ78YTswAgFwkNi",
  "key39": "4hzyEp7Cd5ZB9LjS4UmvkpSYJrWqzRCum5nGPS5Fppy1ywndmtE1ZtVanRQHGGCLK17bN8kFEMMfChWQk7t7CnxR",
  "key40": "5uN6HCkEBJosgf4TQEspWCLSWRKURPJzatxq1Rb3gHsmJoPTCAsXsf7kzvU5ZFEMsFuGNUNMfdAVURfQ6TkZ1ZRf",
  "key41": "5eBjufoX6Vk6H3cq5g6N3atBeLygyqPdHTvNzq1LLAsMkTrHin1NLFHx2C9tnkeCc3C2dzgMGo2k6phxJgyt2vcY",
  "key42": "5XD8zgDqo9Y1m4ktKAYpqnUrYr2nq5twm1CZDyP7knDRJaJ1eAfq4FEJchtS8JpnYQ8o4Hpi8U83415joxnXTkEf"
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
