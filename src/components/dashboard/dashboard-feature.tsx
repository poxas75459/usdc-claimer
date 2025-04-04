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
    "4swCTokR95iNGkEjjnMxK3fi89h3d7MzDqb6dRDKdK1V29QaErABrvZhwp6B4aNriVeuSSEG7V2DQcjZCwjWTtdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtpWzzzws4AYR1V2nBmHHGbfLsZP3TNqtDBxn38T13uKJXdECrgPzHr7tjoVvGR45wYwShKq7xAS2NqpF88kgss",
  "key1": "5nFDmpTJ96qe4PnPtoSBTYR7jU14jkykLuhxo4FE1waVkUTduiBXinnvPiZk548t3biEoVBMC38kusEyExKWzcue",
  "key2": "mCKbHyoPmfxnfJ3HNJ7wyPX3EzCQdV2nHmY9tf5aAg7oiiuNgY4k3Jqu3wmppmmxgbnTvxTdfNZx1bb2ZMTg1Y7",
  "key3": "2LabPZZ4hoCG7mz7TNgb8P9mNCgFSFzyKvAkcdW3sN5DMQGiwc2ZpBmBYzQuUbR2mTvsK8Vcjgtu5eq3Gz18ty8v",
  "key4": "2EQtYSsZu9FRPwSgkMksjmtpBWurFQJKUyTTErj1taS9huqUE1en6Hsx6w7v7o475B3Bj4FpNqvnFQ5p149Vysi2",
  "key5": "5BtF1JrDcx4mAezMkBtoK5khYrFyieUhuYM4eVYihX5FoaDM5NbGbGXxQxZLG5gGQ8CYdK4cN7J4eEaJMiDGRQf",
  "key6": "2N3wos86UhPNwunVvYp5XKrsCFetVwhfoVGcfXwK8Lc7euRkHexfKu81jjLnZiYgEnyuQcM1N8Ykojx6BBA1Tvpa",
  "key7": "5KXsoAoZEG5wwqYUo5yfXBKvM3uapQvi5wyVhETcgeArcFd2a8DCXKFNyf4Htwo6xBfHPqHE8zbqLYpfMTvc5GH5",
  "key8": "4XYR2xccZi5ty5yR1ZEyqFN3nQgXA17C6fm4waZXQixUaF2CqGzZ7stx9qCorGBhQ94scr1N9BVFKpxstTrKEhKZ",
  "key9": "4VAR6XwzFoj2nkWNkY5567evY5Ag5GJrUWHLSSpVnjMyB6qYiHtZbiaitJ7h9sYHXSBR1tfj768A7b2wA8zowfXn",
  "key10": "3oet5DJdPqcwowpoiZKGfZko9nUvHQ2jDRPLDtdJWQzRtdvf4Rhyj19NdY5raRNWsjTMY1wmgiJLo5N6QLcBCNUW",
  "key11": "52qnziVxaswQViYEic8GozZdbBtu2D1vPmXW8QGHYHbFDTr5ASgm4CMuk3XkJ1be3A7zjcXDsGDRY4sokvZf3uhy",
  "key12": "2V9ryPzGnbG87n9WE3zcEyBHEZfD543iTTuExMLExQprYzYpKheGzwdzLgZFnrzALXR7vZTZyQkrkNWNpGRRTbz2",
  "key13": "35BGgH18go8B2mRzfppHBkQkm2H8PrAoSFP1g2xE2Jgvz8a9ugAedVRsUYrrL5ancuSxVEcMXtrAcNU9fzPJL7gk",
  "key14": "4NkK4xtoqYkdgfxJfU7vJWVHAYammsyMSJMquXL3ZCfHnXQLt4nUPz5ksVWWroxYcmnoNBxLYLTksxG3V3xPAfrC",
  "key15": "5DwwJ2aGsQ4UaZfmJy33jA6NtbpTe1KtXChvudMbwvxmYvwgatYzav9kegw9h4R6BKUMXYQZCx7pieveJS2eA7i5",
  "key16": "38yAMiW2ps83551dXzJup6X9Kopp52xKV4JLRnbocvgjLJU1jjQoXfxhS365AhfY6WbDwi41R3TSX7DDAkJjyrpw",
  "key17": "3yWskxZyNkLUEDw7AnZ2pefTCAhhjehqvRkgEjCrzc74YTw9N7YC3EoFXQcxiWpESPCaBanhuMx2YJVFxUxiei8i",
  "key18": "2ux8TeteLoH2wkthvbpftFqpsdSqqnvEXQMMhHJLRzHU57CGAQBuxjRCAoNKzDK2wgDPFEp9uBZNkEEDn6UgFoMQ",
  "key19": "64R5Vmt7evHv7UBJVMGVfR1GFhKwUPT41Yr5zJSEnvNd3oDRjLxbM52xeZFd34U1AokBzbUDmBC6Vsa12EiAc51r",
  "key20": "qdK1M71DCJakw28fJ94ecMEXy72CX88F5qUwYKa7W8fZ4PX6p9DNx1j556sgMkXxbcJEwtexTsCdCNq16nJHukz",
  "key21": "2cuygXfXD1rmDPJUP7PEvyL1TcDnSmuacjxEMJEELRdmTZx9mnwrC3F4w1jpiPavb4RC8KYGA6biMjRZrEdmNBDt",
  "key22": "5tciGCBnr2yYhkEs1zdcFGd4GfVvqwQYN7QW3oG93gJVVR2cCZwzYrvCD6GtLRXTyVFueTssDR2BvnEKKYUtgJve",
  "key23": "3UTdSevcyNcSA89PcY4SdRWTAcbqbhVsuuDV1pxd96NrpJriA8x4tmMxCYVcVWRZ5pG3izqWR8TJ4uWB2RBST3Pd",
  "key24": "36xr3A2QjKoZDN8Mq9RBejHraBeHj5hZKazQUaPFDRyqozH1SH57zxmPzH9LX7VCYKrFL8WVbx79tgwjeiiwHd27",
  "key25": "2o6K2SZ1hM3X4UFeyEBXp6JyJPWtxrijppc9HHoEqJL6eZ3UcsqnFWwngNnp2PUrTt7c2rVakjbpYbLcBicc892F",
  "key26": "4vx76vRT7MUVnNaoruAiZD6oevLfkcUZtCfhP1abkbthEnVvS5iFwXLjcQVawUQVSrkjtWQo53PXDLyNbNsr28L1",
  "key27": "4woF36AzuX1jwXPeaRe8NUxq89KANzRN53bMBBfUCzdVcGePQhvbB3tZbi9swQ4x9DJZnvf3xLyCNvWq8GgBw7Tr",
  "key28": "35tETiT6GNnWUv5fqzcbBXfhLgZwVbCbuuUpUcjzREBvsXiD459Kb2wTMjR4WsJhv38iABbg7tkjwf9xQrzbVGPa",
  "key29": "5rPAH3d1FRApqF2LWsugTd7115HZUFhb2r6UNdjXFCUvkASfX6s2S3cUQ6PaSmAw2Xt699JmDA4e14Asadpa6gm9",
  "key30": "2JbmZtF51tjQXPh19gv5mDPhieg1y65n6NM4HRLt9uz2aDU1xTWdtpKZi1ZnEkn24GbJCXsJ6xMqsC8NqUur1xEJ",
  "key31": "oNjcDHEBC5m4MuVaM4meucPpBgFy5MM8z2SN2K8RqUJafWFJ76GrRU2zd1f85JySWdn9hYMqiun6kU5NQ8ZK2fC",
  "key32": "BU7f6CbTFuDJ8AGRMk7chBwHJumDrfsUR82Qgk9mwZUUuBHQ76UiQK3EMcVYs8sPKJc1sEvnFoX2Cd8Q55RLtUr",
  "key33": "K3ERbxEXhY9HArNsLJR62rtW2jjtPBgAKeTSdPUxDPaqFSzHnNxytagCwEPuFJRPap9be4LxX6wxobsRtkABoJN",
  "key34": "i6u5NVJ7sj54uZbyGHTUtrQ1pMskebhZ9UQtLQvSEHStAVpqHSkyE4jxnVTr6pSFhSaT8oh3TZy84uLVmKrhFzB",
  "key35": "4SUAFyuhZ5cNJgr3KxhZ9TvCVpJQ4JPRW1c729vPYhvxtiLzaqpQXXz3b4XSWsqf23cHXQPCKeRc9rptUpWHtX2e",
  "key36": "2z5uMEdD2XbsAxK2h2swmkbtptFPuivvhY2xJQSuBFFnCDtG7bSP645S6fSvt1CsNCmevPgeBXtYigA2BuKKjyn8",
  "key37": "2xFz4npkibLzABNc7mbQdTUPTZJXHe2A5wgAQEiznCUP5JAiffwzMPyothyufxBydVDpmmjzrSuaa1yYbBCZfWFh",
  "key38": "32yacBJX8kWz33N8amtrTc31eDCyjJkjvfcAZcSLByBvufRVLjGbKSwbFbtVkNS1wNYFN8F7GRkpQB61zbsethBe",
  "key39": "LojRpX789oDFZfr1NRDqM4jWTu8pktqVkmXiqJbvbcbuR81An6btNJx91fzs5h1deQD8TqopKmdeUEoMiJwVxQ4",
  "key40": "3CTDC4wFUyp4BK8XEwynEnUbSUz5EseSvjWF85iqrz884Ag8WVNBbu6vkD91ahGU4FjMq14byBr5GnsTeoGcV6da",
  "key41": "2i8vicRj2K8vqKcFmXXUGYVV9DfJvXXf6wfC71cCPBbc6HnakP3udfkim2E2i3M76BegdfxaM7Y7ZUDKFWuR42ME",
  "key42": "2YaPbhTMN3XHSK179ZdEVh9Cx14vx3s4iAYSTDV9DjG26B2Hd2TXKL5fV8zxgXEbnT1Eu3hoXcR1YR7MJQPenuJ4",
  "key43": "3bqHruZbnQaPBRLtBjdpo2SZWvqZ3oxvKwJujoXU5e5ADfBDL6wXEGU81Svftve6JHkok8wEiofUhZ2qQxvp8VsE",
  "key44": "22ZvLGqGCzyZHh4RT8YpD6nSJQB8nZe1eY66YTbEqCPxXQT46asWVprraz3fpdvmg6vxRiHdaWWDnyh8Cn4PEPv3",
  "key45": "2y5ENWpPS3Uuv8o2XKGdvgTjw9REwuczLTjSyaMb6kscRgtpuTj2tS7b11C4iPFFeJVb7BJUtJZwR77hdcNikj2m",
  "key46": "pS1Jg9B7jG4Fa94RuiYaoFXaBktLstLAG1ipwLnrBhbUwpux7BTyTWKsow2AjU9LY5Si13ucdLNNiaWFNSjST2o"
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
