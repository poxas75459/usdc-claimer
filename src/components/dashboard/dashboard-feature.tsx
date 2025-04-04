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
    "PJBWiAYU2TfzvMzrAmbR6LJQf3D3RxT1dRXFPFrtwAU9gcVCWxGr3G6VpkLEQtbHrzvhEoymhngyvEN95pNZxLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d3MMw2wRS8Tkxaa3F3u6JqP5EB4aFttEvnVvUZnmGSCpr6UTGfkwbP88HL5WPHLyy9Y4tv1v28gPUHuchWA52vd",
  "key1": "4vgtcKM7dqSf2gdpBLD2MEJztsKUikaQ4zstcRdkNK9ZTMenjPGuMpMZXYkzEuC1DdQJQTG1xyq6WyH4a8EFwnz",
  "key2": "VoaLvCfLWyJHFnVm5ZbwLSbZyNHKq9etbLTPepFEWFQypchS2hMRRJvyfqMMZeb93wa1e2E2QrPRztJ38rMEDBM",
  "key3": "5AFyfL9VmTYGaRfqM3G9DEeUEonSiTJX6whDoH9Bei9VXhRd2CLDcTeXmg5Qozb6CyrHhtfowuPoNvkGX8yYJFDR",
  "key4": "9yZ8TUnTJh4ZcmbrJV6iYe8WVpoCVaFNvU6q4S51fxXDyuakBwafzn41rJaH1JjQgVB5bH8RMD89HY78ixh8KjU",
  "key5": "123a2PdtJtN5GToBmY7DBEyfVnfj91frhm26BmDtzMoGQvMjBcosLfFc8tpDtAJvLoFsAt9vXQaQKFq9Us4679gP",
  "key6": "3Yzj48s6xGK9xCUAUfY4qj1qUz3YQhcjt4FU5X86ceZtqAxkQ5L6xUY6AcV7ymga2YpABzB1koZEVJWuKy2y7Wh6",
  "key7": "D9YaydB1NJxvRMdab3Cv5LwehRAw8vd822PgBfktPqasMu7GDZSZ8wSTeeUc41hjZK2hJK5xoPENtj5XQyG7s6y",
  "key8": "3QJ62fQLdU4k86eXLK2FN7cpb1dWGYESHMdwwr2zKceQ36XX2WdZsh1kautT7UFrcaxzDrBrnefebHE2GRLwNx1H",
  "key9": "4iqytbMrtubuZkxWurwcH8WUSTmtz7KCuQYQAxjEYeNjpmALDXh4qrvxp33zRTQVgbLsqKPH4oszpSL5Z2hvLaJr",
  "key10": "4ETnsWNdKzwUdosYSaUYfxy625a1MATM9LcmbgqL6ZHKCmHR3x4LqWk5yunvQ7jVg5ozLR6UsZfYxU6fuWwn3udS",
  "key11": "4m5QB6BLeFEicSuFLoCn7ChzPKoqKtExitzDa4xCNTRtsaTjpZ3bqw8aBbz6jA2NAMGhro8VHGBZH8N98kDXzQ1i",
  "key12": "398w1fTHwK6D7gJRoFx3vaQqK4KMpyM8q5yAH6A4KBrKGeyrU1bGP88dAYRUzQ5mZqg7TVV12aUToiFpLFdCAdWC",
  "key13": "4S6mioCb9R85k6wvrTBiKjCvxie8JqtPmJMijzLyv56oEqoMwhEJW5TU3LEVrgoe5KtbRb5dxG5DcnjPU5on9ntb",
  "key14": "4NQRmeqxrB1VKRHa2Wa6su2Q6gAc6ed5kLX6YgCvkB6Zz17qNvoMUbCApJuvEvUkbRvbkHHXAANrw8yvZRh4VPrd",
  "key15": "sxsmAnM9ERCuH9PsZ1B33V9wZcU7Tnh3eHf6v1t4LgpojcGJLD4d5BmNwQmFKR9ArKhhjuDNeomFZNg2E4WAUBx",
  "key16": "5n4gZDvvbyrbJLpiD6XEaDtEMHaQ1S92xNG6AHTg6Qb3iUsdCJAFNUig9YMDYLsmH4f3fcKqSqyXs6JnVvwTomMf",
  "key17": "5SQASkVpdqmSrn1cuwJKaiCvzWFcbsZ9uLcgENqpqtXEBno5XPaDa9wS8rMgXdgJD7SpxF8hMnqZu9AGD8PNdsKA",
  "key18": "5e9TdFRkjgekuprtXcZ8ZX5XgD7BpvL9ziURZTwsuK2RpwywcfKr8ikdRkg3cAuEP9hSdQN7ncefsfRvthnfeUhA",
  "key19": "5sPe7hywV7mR7Bw8g4iMcsyxUxn6KntVWFTLqrTCCtZpXSSo31Akg328qhs65f5DQTePrC2wLXz3BwKLyxiPY8Uc",
  "key20": "1dnS9huBH8Rfj7xpYMiK1YGXHD2LBwUd9kzAAdQfAvKAx22BfU5rAxqa7HRBjmT5kazmjsApUcKHMiQaSKdFVqq",
  "key21": "4AYqYhxY5xSVAQy5a7JFawWndkkrZkQgUUPnciGD9PTbpWPx8B9YJbk3tTMuM2rZb3C79LWirwxcVX8xBvmDZqQs",
  "key22": "4oWTcAbgnbsiAtNF5xZzAMCdCx4cJjLYqxcpdfdeCdtbVzapaUZJ2yfBgPaUztyHoZxCbGpPKanrA7CRixPdSo1u",
  "key23": "JcpHncE77fQpDve8zBSjfZfRpkAwBjX52crFEJzCuUX4bFiZHSCvUEm7eG4hbFWicg1TTbNfUU13Wtj2LThmW3Q",
  "key24": "zqrFY97DyKapfSX34jhHuQP7kuZFTK78jZEYkrbzDoB513wXt6vngEGYLV76yNAQKRn8WHSTnzB1Gn8pKMMNsmx",
  "key25": "HzYLg3LCa6iMsQrZmLJWV6zSoNk7iA96Up1SjMf4ukUXVkwhRfZLz3TJyJhjbk34pBVoVk86SB9y5j5XRZ9X8vP",
  "key26": "4miZBu1SLMqv6pG4hjyPjxFo1xqv5wBWFcVEmkuWLWmjUktv5nkCKFHsVzNag62CjoQgnx2WmoRVB6ckzETCWpa6",
  "key27": "4ofamxRsqtQF278YATsFJkmMqgJFVWNYxi77Kvc4mrZ1BRS4uua5a6TRn4YiA5VAeU7zRgsMCXTwQqJ7qQbhYgt5",
  "key28": "5DT9iEDie7iDsJvfUxVbRLkoxC2WvRiF7dBzFfNZP2RidLjHi1PUKYpLJpxRyWPg9ZCxDNsG1fCXjbmBBGS2R6nZ",
  "key29": "3nuN5XTeFDM9XLY16XvwZL12UJnyZMQB3W2PcbMCnBDQFddtFeug2Qj2s3yD9RNmqxRTAG9Qk3ibZqFgCYxvtYmF",
  "key30": "1bPJyFYXoPSYgtw2eoRdD5RSzTwXFBiyZuBobUtNdsTq2Dv6VeXPjmy7JaUoM4EW6sdYkWC7bPC4FyysqocBp7h",
  "key31": "431N5gqzpoMSfZAkfrFS38v5ovvwwBVUkzVBG3Vqg5Y85Q3oXgEAp5C4K1u7AtkDi2J4jpvXZLAJou12ESebqccB",
  "key32": "5JENngWRsD8nrT6bvze5u9ScdFEkK7GLtF1hxabjAPoh4QitAwCSMh3U9CKo8NZmNJ4DZ8FRfEMQ9KoDTjsYuAy8",
  "key33": "5bQQuwN4bG7sD7uw9eCfi6a37aPiGmWBt9rLZ6CNHZw2WB127DcQjsaxWDJdbyMRk4vfyrsRQVWPxYCgmdbxysiG",
  "key34": "2N4ffXGegkdM6eVXSADFmobrMdHv4PLG7SRFDtm8tft2GxANPTppvpM42k7zzAL18ZRxHnuBtwykCijNeNibKVfd",
  "key35": "4ww49bUxE8X1N8nRmqaWdkVQJtyXaWVQRay6zFCpGX2ZVjf1Lvkgu6RQiNEuecejTzTjde9yvYfTjrmGvM5ZR8Si",
  "key36": "2d8XHXSd4BNFceTEJvG5PGPFg9vkVoJZLmZukdp2A7Zcn1BwPTpQEuXvKkEHtxtXDqvRAtZpimwLD4i4QWgY1PKU",
  "key37": "3vKoxCpaKpZj8uYM6YmpJFPea4htr2yBZF3CitHNH4gxc2F9pGvMGfeFfHtRNyLTfuXJgQoGjBxAGkvD6P4iFafT",
  "key38": "34eYD3bxeF2SpHfcqzWRpjqk67JzPRYfZfZQLfjRdMz164WgatAhyFUAChjpBwVkeVtLp9R4JrseZjAVMRooQk6Z",
  "key39": "4939AXcGy95igXXumnXzPcceZzN7MrgLZdfaS5zonkxVVNCE2hYrWwLhicHGbRgdoXRjhDweT8EwgMiWbso7UtkU",
  "key40": "5S5hWbMGPNAfha38Pa2kvwrijgsm8vKrU6S3KgZgdMBYZfyY7jZrEbBDYEAVse7MX2gUeoB5MiPLSpV2c6L2wspo",
  "key41": "25iheDWgNdeGCE42A8rLHX4FFmPPkUnU5F1m4g2r237r3bjBrwHztB9wDmPXKhTsyEaw92wruBEJ39Kw6RHnGAkY",
  "key42": "4J6EDx2rq4WgqNZ8LuTBpqwdfsLmarHJ7AjLnMAwGEcAqbJDsK5J9K5DgZxuRp5X33x4pxVzeNDxRHnQ2kX4Qibi",
  "key43": "5GH7oCGpHsDVPfeuxnCAuC84M7HWdrK52PjLXsrUh3LcXWAP6qLXvTK5uA5CXe3qdqzDvi51rmgF7DnoG7S3V9TW"
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
