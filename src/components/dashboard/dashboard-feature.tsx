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
    "4TzumYzGYuTVo5V71yrsMQDFQtECu4z2aGA2yfpAeLPpaxdxsytWJaypGsxP6CtYaZ7NFDCpZdoXQj4vXqzB5Um1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VgGA8E4q7HX3NU6TqjTCmfH27DLzHTcYTnfF4ixB3BDvJZ6ogcfgjmQoKnHw2YQgdoq5RmZDpA8wANQQKXB5nnS",
  "key1": "3M1GgY7bMRyutzDpVoj5LNBQEix4gBkVCBKvoVBbQQqBZWfpFUHrZqEXyJidje2Sz23avYf2q5D5oRuTM4NaMDQ3",
  "key2": "5cXMhEpub5qS7VQLKDitzXUDYVQdFyfeXR1s2ZWtMsTKn1DPjR4ixENLdVZFWVRuZXz5qQ6vzPyWcW7B7b5PnDe2",
  "key3": "4UobXouSszNkQwMzPKnc9u52nWvv5Rsnv6o1aFQxma7JKxoh5BARLVpX9YozYjzQq2XpiCjQFGKz3CD6eqWzyfWN",
  "key4": "28PdzaamyCzgwkqbuc2ufczK4bs74p6nmVmQRiy6v1EeA588WZkayqqeRk5Lsrnd8L1dfTp91VP9MbRoRkLE6sQ2",
  "key5": "55SZXCytShZiHduHDcJmKczpQpqmALRUw2eSaSGDEjXtQapQVkJbeiUv7GWq1BbpugL1A4u9kZo3mrQyaG99TiMN",
  "key6": "uNmvCrK6Tk3BpTNBN6r8YNytLKjXz3BZLcT3ysmB1jGXBe9Bgynaw9dCPtJzsdKtMPX9MbjpEZbJFJcuso9DWdo",
  "key7": "21YJxFUvF6KUWbSrMxcV9CQwNfXDGUuAQusLaSRE1zVSWoLZr5htmwmeNc6RqWxMUsVLy6A7GBaxg5YWrHtWak3v",
  "key8": "4MQApduajV17G1gifMwgknwjPGxxhcA9Xo59AkxrcJavmaa3sC5p86eQZTV7SiAfhXBrkhFzHmFFS5mEtHEKYWwb",
  "key9": "5G38t6EUhYeUaUdmND8BLDQLnvVyQmJEMnmpPBMcjAHXKCB2avvZzrRLSj9aeLTActhrtXGWUVQeS2bS75Xw3h5x",
  "key10": "K36QVzuHMLCUfyGQVSBgUx3vX4vYPKhgiK6o3xuXBntJSxa1XSCw2ouB5zsMNCnn4GjfzAST5A94UYdApfGPLwi",
  "key11": "5Nb3wm2yYoAXjLwuwTv4gvmPw7rGUj4qKoPZq2X1PbKb45ZfRfm4BAtTwqH19fKywbgj3FVGYdDtpwER81SkEAb8",
  "key12": "2FVdYAsEam6uViGBnnpt4LcWLN4c37VBFumsw73K4qUkSnZuDSEFRtELeJib4HsiVn4zAagZq8eK9nW2kpMcBrpE",
  "key13": "4LT4AFwXak8Xa9Mj7QeaMbkReyufhgrvXqf7BSrwrzbjs38MCU8mt6vRoK3C1hKGG24Nanuix1g9F2Dtpzc6nWjY",
  "key14": "66JPuttxbw7LcQPbJqkyeVLZY2RPrPV2azVxdAczvYhqCKzqt9z81ZB58UXeE17rxm5fW7buBEjPaHtHaK4Fp5Ja",
  "key15": "3WQKmGq43EFYqTDoLN7f8km2PXoKr9vrhmzjgRbW8MTWSMEQrHcQTPf35jTrdsL9fkZ361gzSiybu8ZG9Beh6Zzw",
  "key16": "3JjfkyY9GxXbzTJMQQbNQUq1Vxxtgfh5XKQ2bJi7wCrkXg7pazhz1ML4muwBm1vkEsznigcFMrDoJNCDXAzYK6C6",
  "key17": "3ntcCjX2mnXBjN2mrycT6UPwWWJrdkX1RmNFx3bbvPZW7uCX4hUoiXTW3YhsQMRzJPyNuSut1DnYJbr4FDtqwsET",
  "key18": "2MVi8AnVnHkcmFg1Fyr2aSLRRZrrXDxY2H78jVPh7fii78U4VA5bbLdNQprd3nPWqEZboj9PAQAGFPVT4fKf9Vvg",
  "key19": "6GhvUhVNYatFWqTryUCAKw26StYGyAqr7kRx65mfowB2LEhpaXkdGTTLjj1KBmitZFgpPYpYDrp2sTqHTgGhcQA",
  "key20": "Qjq8WbVvY7iR5hLYDt8UXis7QaEHDDY8ZcMRmEn4p1srF2vzgXV3g7f39k2fhoWEywt89DWpfKtxNEoEuNcoR84",
  "key21": "4cD9CipNy1U6QqfLVGYFk9dQGgNSXLjSiqa6nDD6WojLHkiQuD4ktui5XXmWABck41Dq6dVQF2FHUsRDVAcHDCmn",
  "key22": "55ycffTU3t2tzLsTScAdiBZeZp2qRmftUA7obc2U6d8oH3xCbkGwQRRrKbydFbv1DeEaAGdfvAx4BGrGKRR7ockr",
  "key23": "2zQcMDU4z6wcKyA2yqs5bTzspbuGFrtxj6X4bXdSRnumRM5kg9sMYg7xJj1jbeRU7xVbfJUBJepKYF4DzkGvEJis",
  "key24": "4XApV3Up8H6Mz6jEXiDP51FG7wB2mAkJtRX8q5i48C5ZGZFyoLy869EVXwHCBWwxdqjbAPhAG4GtGK8UcrnZVCis",
  "key25": "35rTRLXJV4kpPxYZSHLw1AxmAEeK6zMg1pWTopjJ3RiZGbbQn7LAzs9DEHnAn8TisB4n4SHz6iwY9ZpLUTZpqRE7",
  "key26": "WG4cUFB35fWsu5Crad3tijtmNt7uf5Tmd8WySKAD5vKpyaXHeesGMj1LNERR6Ls8dDnsYQwr9L8kTBugVWaoX7B",
  "key27": "4xRvGfCm3dBk2xUKHJsPikiDL68AGZuigdytpzbBRhQsrmvV9Dhr3FzdeajJeUeJZiTyVg22eKAp9g25GSNYgrkE",
  "key28": "4EX6Hn3qpbS2z1YJMWYRnAjXyGfqHz5PBEssed8yRGFoJRJQA5BzJFH4EFLkfEFavJFM9wdsCrpXrDcWeUHmzZCF",
  "key29": "5AwMXmJpqt2dA6Lv2QwSnjAT92Luu8bDLcGt49mVQZcyZmYXznaDGZZk3CgNvD7TzBDYUsYpD2L1CioDWgCvaCey",
  "key30": "aqbFn9Ppqzbf8LjsUWLciBBr4F3HmeajjCsaetYbNGMqBZojYv4x6EQVARpcAtr2GzYyN1asQAdehKCNAyzamXS",
  "key31": "4a8pWcBgbBh1HD8fSg1zt3KUZmViazUesRDhv8qdtGMRsT3bSxirp2pob15E4K6X4fNmqELk6m87tJWXYqFkKxxH",
  "key32": "3pcxQNPraidNMwMHonkdqJWpCVpPzxFKjGsQaJNxff1kNW6Ath41asGZgohVLoSzrd6VqpzyuwsAzTjn4r2769ws",
  "key33": "2owLb8B9KQsAxVuLRUkuSpSLNZ6oGCKJt1WJ8vSjSqAwAhqmzkthHa6p71tzwCMyXc9jLjheqYhyH2zA6wKtPuYB",
  "key34": "5DhZxbjkfqQBFizVZRpqsdWuLaiS7FRNgMccmxZjVxWnu1huoGjFcFu74Wo5RFKoLqTLTBUHjr1FUae9RqjF4W31",
  "key35": "49AYuCDRWi82qrJsyQoNUweTBE7xy4BqLNq4EwupnCqbTXaLQm1LcJVCJnRoBcRUa4ExNM3BgcK7VGcL46GK8kUe"
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
