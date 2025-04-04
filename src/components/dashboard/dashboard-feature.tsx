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
    "4sjQKsf2jDynGjm2dfAyQAVvCQNmKEpi1J53bzTabVm3kKBpsYkMWjwWGW5UPsXH8Wjk2njaEbJcmo3sTAJJ9yxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zCo5vB6q6BgmEr3sFZdMoTcqcJ49XqkyCZnkKnSXuMefidAQUBbwq1VAGpbpXTeJCCzPoWUzJscTgcUJMdXRtw",
  "key1": "28j1SC3cGo3ZLDUYpjRdwQYBhH1HifpZX2kmr3WNV5taamqcAyQWAZu7rqPq4FgqEfMrzNcjB9o4dTtEFT64Vi6V",
  "key2": "GgdoTcJ8a7KaKfHqexBiPTDkPn97TNBVJN7evJv7uZziHQS7zvq8aQFtqEdVJYBhwH6HjJpMTg6aKiaiZqXb61H",
  "key3": "237ST1xtnDwjZdKDHExJqvKYyTK5LUygyVguqeMYWYww3giVPf52F7mp77qUr7i3h3Tih7fTfyZK4Z5ogEp3sdqQ",
  "key4": "CYz7qmFXm2t5z8qsb7e3D3pgcL8LyRvamWqabRcewri9ArjY7XUFBacaDQszQH7JwgpGiBpWTMKDjdojXb3SFzA",
  "key5": "s5XyyZzowcQywxxBaYnwgDorP7DdWmGwRSTDJ2PtnRjMah3YMVEAuKfq81AzXSREGqb3JZpAp8RdWdWSB5xmjJk",
  "key6": "2mhvxfxG2W9fw1k4wFXqAfoVH9pp1h82DZYsCN4agsuDWoGhTof22Vhyg2fyUUjKSRW99cpZ98VfJwEQD71UDFRk",
  "key7": "3vU6r8MJS9xf7QmQWsZANVmKznXBmqADNj9BNu6omNQUKKXXRw2n5M3TSg4fsxNRDh4LFT1fK1JvqgNvdMF41u2Y",
  "key8": "22zHSeMjR2WmNAjJUUxRaChRQftPiePm3NSkdVJArfYqeEpfoUnUrYUMNDVAYNSH6QZedw2LfC4FHpHy1Fnkw291",
  "key9": "pQo2nAGDfbreKU3bR3qwjUC6xPvtE3t1V9YAF1AdeKqpq7NocAEXn78LNWHH5L5pVVyBS8beezp2kcmioWWjAez",
  "key10": "xUAd1icsrfvXxLQg3nu2KYTgVTm52ihCYE7wiXfMGFf4Q2ngMGfvoacRsqbr5Az61fvsh79JA7HWgQm9mNdHzvy",
  "key11": "3HAH46akdv2Mi9MF4EZ9zZL9tPnSDd1MGyGpLk1PHC12w7VZtDQ6QxtExzTYqbPsZhRoou3xdg1mNz4jFC7WqEgH",
  "key12": "244gHEi8KtwUF7Zxe4QHBMQZr5WmRJrk6RTYqfGiD8vfwaYt8HGqk6t84jM3UDXgHiqK9xPPDfJRgu8Z43VyYQC6",
  "key13": "3Y6SW2FdNPdhUPw7JxLXRgGx43CZfGW2frAUNgnnCn9DJ7uJSuzv6ehnVrHpgFUgkZGDxaLCK8T1NLKBb8xWjbBi",
  "key14": "5L9MjY5BQS29RyWvMaNTaKACimBTpWAxK5CYtNg8boFwV3hgyET6zgw5Sr22Fu2E5GhCJj1vY5c4xFDsg2DdguKX",
  "key15": "3fUEhs2GNRxz1LK3Vu4zoF5qpWQrMgoyL8pxk9Us6mDWhvAE867bLxCLWZtmaETRrzZDEznPyyqDh2cLVsaoeEjN",
  "key16": "3My3xqFaRqEm1LcDfXkYJBsgBYeqXMem1V8CHYMmvKsTbXz4Xa4m7JaVyeXSHq3RtPrDBeo7yJ3WabtJoriGHbBm",
  "key17": "4Hxskrstg7qhRS5Yi9D21oBvJ7ZncpZFczCpZMudN8JE9HXxahaWZgz1XesxAkxh54QCuTenJV94zb6X5DXA4bow",
  "key18": "4wVBNF94eZG3hbSqkZ2wiad5DJ29tfizdSX9hagxW16qL99xo72m9vzK5j2QhfBF3KEcn8VRViJZ5N4Ska4zxHyw",
  "key19": "5D71FE59qdGFMwUpK4FhipC5EABd5AAQieLuqWUH9wV199SQvbtogiMaTsXyy7UTz5wVUMS7DZZmQRZcMBPyr4TL",
  "key20": "QnpyQtp2HWBb77NBm7JTxHLPv64tMvXtH161EgqkdHRg6VoTV519TuZiNy2xvhZzRoxiB5b911peixTj1WAibbA",
  "key21": "51E2xvyzFpq2ac7Q2dE4hjfeEH6zKEh4gRfKd7axZim7DK1fC7bW1cvHXPiBnqVZc1SmGNHxdWd9vqJTkvs17r9d",
  "key22": "EUtDCwABMKkbK8gfz8ASGUsxPy44E2AWWfLupS9xcszPzy2Wkq9ouxLnxB3kFpCVcuLzRA4CSbgrR3ciZweUsGN",
  "key23": "79C6Lo817vWsxmsLwp3uFdDrCwafdmphvtm4qLT1fiqsVovr3BCKmjQ8z9GJDiDWta7X3Rz8w2PKYoh6nfu3oHB",
  "key24": "2pSs8NygmykbQ5o1U3fQimUaumGfKWmqZk2rbCdCT5TAWJtCE9wo21qDMEM7MexKfjGU5XeH6JGiergeUQnopyxM",
  "key25": "27zH3Zh5pH2A9oCctPdzBzVFYhd84cB7DBSXVJbo9vjgQrsFRGsMJbnpjByN1JYd1uEEzxX7JEJpFWPUjM3BfJvt",
  "key26": "5VnayYiCVgJXD3jnYiYmMMAR4ch8AEgAwxyfoSmbyXbBsFKgZ8fEAEkfk9LWbUMvNFhAZwsi9Zf8CW9QY5Xe6zfE",
  "key27": "2x9JDip9jxPzRr56WquhWQCCMwDUvPcmuByyNMGGRay7xZpwnmByrM2nzVwuZ5eZfzgMKWPqRq34JBwzGAKm4HtA",
  "key28": "3V6Man23aTkNULXctrnRTceqbZ6NGMBHx4KGEaW8bBqpwZ8LCmJrLi32E9HNbTy1U1uoNZLuWoHUzRS6wv8Cd6mc",
  "key29": "455kjrwstssTaTzutLJedKMb7k1i794ea13LXvWHz9PNWKDDpjEp8CLjKhW761kusKaF97vw69ErsvRqEQUkk9F4",
  "key30": "2wwW2RtEAbUWwLwzJmNDLXNjQrNajmPHFDyPZ4X9Fc4BrLbgo1drdbuu5eGVLv8fxYb3ydeo2Lx3wEMrgLusEVh2",
  "key31": "5qxea74iCqeyFKwMwUFpAy7nLzY2LrxL3E3heH9gmM9vMkaTi9rgx2U9WE79UommyKJ3NEz5QVbTVfvhQEiEmA1U",
  "key32": "sr35rDNbfzUXuva8MBQLWdtjekY1HMJC2g6tcRmSV6XfhHSe7AKY9MzSfsGLcsdY3kLdPfh6XN5Akv1pLptdyQS",
  "key33": "2AFLZZSvyg75QSmC2iQ1iNrMha1VQouys1j3HmtyZA5hQVjc9h8jQs1pyKpudt2Uz589DS5V6xCxydBtGvPcPiTs",
  "key34": "3UQQKqxAdZERwXNb3dRCvEufEL5J1Y5kSba5sSvoq2G9vG7gApqmNjg6WufwWVLwkRUrtJ3KyRVrEKjEnfx1Girx",
  "key35": "2W4Rrsad1iiMHkdDQV8kwf1RP9ioAeVi5QCBwGKCeY3yB5ZzveYH4q1pXHPqmgtGs2Cqhv3S5TbdvpXYJSNS9jUB",
  "key36": "4QgL6YEhXJ2PEogddr7WNmGBgifQnVRCcqidg8AJXXfAgECgUnX5Sa48khK9VnY31whbUEBc2kwRH6BKUPLokAwr",
  "key37": "36ycsHvHefpfdud5rdZGGVNE63KW6Lpgpq27FJLh7vgvGfGuVaxS5ZUkLbogfLSWJ8C25ymR2wrRSRk6bmwVwEER",
  "key38": "3Cdu9wbUisTF8trJtjvREcw3WtThNKxhJYQxQjEMdG5TjRMDgdB1sdvj28skEGSDJzMZhXWU4LUFoh7AFLG3Rwj5",
  "key39": "4VKqXvKrmeiJfLfCmGzL2G5Kq6Wzm57n8WEDNc68TzdW9R98qL11aDeMUD23rTQdvenX9d5cXsDeKg2kXC7SjijJ",
  "key40": "61niJHzj8vpZfePLnM2koy686YYEnSao8LUsWYvutS75kpM2EuFvtCpq29mHkTCH5dokiQpm5fJreJh9WaYfjNQ2",
  "key41": "2Y3wYuA93KnBJDjz4815VMbjj4js1Xt23EMMerPeVjibWGsUGrP7CYBJHmakzwZLojns2ZjMScf3v1Rf4dnn6Adw",
  "key42": "2vEah7Dtam14762ckZHG7iBPYRzZBdo4pQ7EM9eb3v7wEhxczUiBnHxYRxL6PwjJzeBMmx57N1DrmaFyuj3CzCb3",
  "key43": "49f7BmRG4kKe1D6veQYDEGAjJqDbLzrNQHkrWFaRLzKpCU8ZRvbx7Aaz3d3N4PivLB4AoUPH8DCj8zNRoJEtNzoj",
  "key44": "5m1L4tQ93xD3NvNVTLNriwGJU3GUn6wSTPA8Y5PoFpbBxW1M79ATRbz71GQw4i9c84e1AHduVghcMm7fmqtBHVtA",
  "key45": "271WbET5p8wQPeva41FDUgvdv1MyQLTwTqZJUE8kLBwvMJBBevy5ctwXHDzSLyn2zZs8Z13ew6j3dpAEaUDz7ajr",
  "key46": "4WR7uFhjucrubAXeunSY2rFiGDqYesYjcjPxYsuSBUrBsYm8xi7ms9tzQZN7GUBd8wQcpnBGjqmoS882eM15Z6S7",
  "key47": "5LKZmzwT2bESgaQqfmjx6a1dKgJvPvfpoPBa9QcMCAzcU6DXiGjVFHjd9VkZP7b3s8kCMKZDaVsB3UgBTyJ9vTHC",
  "key48": "5a8C7A9QZBDPJPiGx789AdcVnc7xLXVjwcJsJCZTPVHCga2r2SRTE1mAa3cjhmMRV8oW2H5UiTpUrNNCC9wtvrdh"
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
