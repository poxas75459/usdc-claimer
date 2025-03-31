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
    "57qrcyKc8zoTZCLwWcQhkyH3pteUTZpLN7iqXL2uLaDvjP35vjGg8rjxf86PDbVkNR7hR2Zid3BHvpRRLQT8msLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqCHEmRh9ghmoCbFyrrvwjtNK5TKcWGzKaz99RcA3Wv5tReNEALMHXuFo2ob2AiZ4ivRvhhdpDfHHWpiXCFNm5r",
  "key1": "2srK4yaPsxkqMuTudAvWE9vbuwaqgoasoYtZMXcuTKmkyK37VhAkDyqaTmZWDGBnK8oyHryk42e7Mdh4TBYmidQE",
  "key2": "5amsRGJbhTpHfUH57MD5eY6CTA3LA8LhsnEtkaPuYUjHGUpkXx5LaYJoGtUCE8BXoJrzTSHU6FRaNgNwkA6bVMHn",
  "key3": "4feL18Hs5YMB5hC7BRTycuGsSi3Sb4Gt163MQiKeDV9aRYdSMuXTwyxNxCNCjEKDZEwwLoCdbEqn8YrjEK2w3RTd",
  "key4": "61N4QWfrtbpPVod1dg9kerDEmEPhiGeKo4mdYyessfdcYjNiqmFACkTGbhQHjkh6iS4hpNocuC5mJSnFUanqQYnC",
  "key5": "koX3gfSWHzzGgaXrfmt3SJfqrC5bdQ7HCQpMzc4LmRgeMThaTFGuCXQhbR3L1asvAgdi7NxDVdGozTafJHTC73Q",
  "key6": "4C5akdPBweArvUMPSm73gGcWkZ7qdd9Y3sDKKHnZxBkXcs6fVgVe6E6qarCmnWWBMH4jY7VuaSx1U1XYv49JsKAg",
  "key7": "48ihCp1QmhAA2Qx5RXuc6PWNGiurUMsMrk8hiwH6vuadrLgxKiDzMxnD9Lb3NmQ2qYC7eks8BPqgA62rDByw6oTx",
  "key8": "5r5Dx4YyHqAiMf6kzvi9zUtpVro81cvkUmrLtH9NP8SAmoauKkgSpKAkW2YVJNZWSu58vSSvdp2cTmodwTi8DRwq",
  "key9": "2tnM3sK8xJXNmBR8vhBqF8WXXQZZNmqGZgHhV1cbvGX2Mm3uXByhyXdiqSpSWABAjp64J9QULFh3YXUpLTn53KPZ",
  "key10": "3bgRLAarSJaLqMGaoMDVCL4HLSNwUgsfxEc3ef96gsSkApdC4xtU2rJ3ZdLZXkE12ANxk7nrZGq3474c433wJM7Z",
  "key11": "5hSsow2jbAp4BYTj4q6NGFyjRj9pL1JBq2cGMUz1itTWbmnV3jbzcrGGaQGcKqxCBeN8KCxwBzutBheLG4g8msvG",
  "key12": "5JafraRHHo4WkKd1vD9UDJfjU6Reww89DWdePUVvQ8MQzdmUEvRoqnemoUcBTHq5kKNxN1ziGJb6e7EpHNoVsoKs",
  "key13": "5JP5UqTqAngm3BD4YkyKCYowQHUjPuGR9919nfbQub155633RtWMgVJqdMBzxdSDdwSBd6MKZxU2h6jrJauP6iz4",
  "key14": "5E5Wo8qdu4g6o8dw1FqrL3ypDxj8aFeCAJej6j6UpDDrvfRcUD7dBUSwWbcoQuK2qKA5iYBSFxFkh4ay38WtPetx",
  "key15": "5Pksr8YmrSmwJqZKwoTc5nxZJEzjZSMoQHFshcQLjxzPAARewERwJ8tAprAj9LQ3kjyhB4oEgYVCgKMJDdXMdG1w",
  "key16": "6bYgTmEUqdxiVyzNF6asHjsd7w4CrrQ9queUNdz7DJffGC3insxPByfgVJrZ7QfwEsznsQJcjZNLXwch4duHuzM",
  "key17": "4FBJSpvMb1WaynwKaCgqUk596Bzv8MLKz8Tx1CnFnYgdL2XT88pf3y5iQub5FxdnU13zAXLCLy6sov7DwSJFdxBd",
  "key18": "4jtEeANw8PNqusChvnqJxTJJ1K7yZtq77QBDmJr3GfDUoPvLGv7hySinUotARgT86DRMq16qXDQwPYRWmQPCugbV",
  "key19": "2ut3qCDZFqtPRPY5RtRoAMRTqd4DgCeoRMEbjcw8F2BGBraaeuHSw1S7EJnb2a7SRCzvZfWCZYtCJ4BiBmW58Lso",
  "key20": "2a4x6ntPWbeEWPEeMDB6JsKT5xvPTKbqbeBfRFGYi3CRsbbm8uQi9RiFsziWpbLktkiHV6FWbWLQpy15Nks7wxi8",
  "key21": "xcMLVvZJTtKpL8eE6hPgX94qcTbwTPAxfSjNhy2RZoFmJKyLBzZpvJUkbjttZMZiFk15SxDTdXf4fFKqZcbFrrs",
  "key22": "3Bq36BDDwjUQucrEEQqnv1VNKoPJ4pNxwmDNj6P11FxiiXCJVG2ukDRn52uKANGB6pHEvXMuYz3dSZoBtwknhXe5",
  "key23": "4Mx7XhdVVeaY7xCH2VSexeGmshNZh1orAjCgh797Gr4QSULbhcJqYCKKtuLpNZyeWkDo1M68W6Ys6nH1GAxYgrUX",
  "key24": "2YDfUZmKgdGPBsNiiGvEKJ4nA4UXHq7fcnbdeWNmNP6RJc4p5jq1gsHzHqvPfMyc1PUyCbknK6gYqbBE5zRWgKwP",
  "key25": "5gKvTJA69JpHxodbSaKpuW5SCiD3ujE96mM4LBPHWuJQsfgZWUz7XUGxNNi9UefGgoTMfgwnA5YrZcRuxcuVgK7M",
  "key26": "53CfnVMCP3WxaX1TNBK13S2mbbx85Z6ruj5mrTWbkKYf5ni64YaHyDbVuDU4pa4uFFrH8VkmrUaSq8Y1gQeAD7pW",
  "key27": "41EpSarHARCqssnYT6CgjXJaBQx1BYgpoKhmwGLULsMSx6virh9LCat74UA8Vm7b49ZRbm3uN2Fx9GBV72tfKoF9",
  "key28": "5kQHcXK3Ga6xFKH3c1oaL7GxxjvhJg4rWSL64neuqFyNXLiBwoGCPYV4z6iAZxofHB5wMm2ZajsgKzhWU8q119qf",
  "key29": "Uv6UXkNSxUAbebV5SPf3M6kjFm2erDHWt8sxVm2TGCLkpeTdtr9bZGiMCWYcG2R9A2npt9snG8SLE77CJwSwBk9",
  "key30": "2ZX2BYTKt5qJ54aUSiozptWfbkhr2hT1GVcJ2gZeMJ3zDPHCCkrYqv6bDEBkmkZvTVTdByd2sPRan1xvWGMLjVC",
  "key31": "VCRCqcqKM2rsMxPCHAQQYg81if75MRE5KEKeX8m8wVJyFTDaqut5TxybSMSuh9zLE49KRoqj3Q8K3UawkHSC2ow",
  "key32": "2kw5re8zN7FU4a9MBQ78CuAwJcvr4Xu2PWgh9DYG9TVSH7jD4SUFbVaWDwTsDeaJYSC3e17LTmfPiMt6KUCUgRtE",
  "key33": "33hjcgpQ1mGFpHDXfTEPG4EzA6j22odSzVqR438E99Y3thXAkWd4PNzYzJk4pjAypELQWAqMsJ1TddntCvrnspHw",
  "key34": "3z9fThQWJAiuX1ZDUpn7owNaf5LfcHGZ1HLXK7E5ETjGiMUwjn7MPzBqMRwoFWbPJFD6YcP8PSekFvSiXzjmoA5p",
  "key35": "5EaTMKdo1VJbvPq7ZNmYr8kj4sHScaxXzeFj7DNWj6J4Qw9osdUqn9XCG6yzAHmQitPuc9y8gKpmAtpFr1qyrDLQ",
  "key36": "4FLSxij4p4dj4fWuEKeWAgj9vXZcVChj6taqxAjGo8gF6ggrZkDyeidqgWcdZc4nfZmXGwQNJiGDCBp7Q1jDjpyf"
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
