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
    "4StSrHFKD9cE7VqWdqSYAADF6ybxKNYJPZaDJK52wcFTvJopvAXmRAvoStjij2P1MGwUH24ePbHAekCpTn7J3Aor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "re8QaowueXvxunUKXv92q4BRy9MQ6dYRAFN5UcjZ7S4WLfTzw3Dp2Xafs4m6txfGNWZxGfy7rRSE9YBoXVn7TDk",
  "key1": "5fKy3uHogC9Zyg7hgP1BaRM2u6srTWFs6fB4dDRgAFTdmANjjpRnLnBN6nkfherWt8Qa5EfMsTiohFgJUG1iE5UY",
  "key2": "2jvthCo6CvMnaY1dSNDCw9DgPy4Dc7fhkL1UgG9UsPqTkUasDLbXCzM3DjyPXuAg22UbsVWMBenZYbMdhps3YTVq",
  "key3": "KKN3Tqgr8RspFg7uZcNr1d9Niqdcm9nkURSkjg36GZaQGY6HdFyV7qsiouhEHdxeXd9ZxDQBwBPrJrD2t2RSUyy",
  "key4": "5jSZNqCFotXGzZBgA4GFxPRq42P4MigJkpXwXVwpcMGKTtgBrbh5A8Q8PtUQrR6grbXFbtETpVmZ41rvjhiQ8u34",
  "key5": "JUsdpRDreBrCwcerqg8DyRWWJmubiGSLQc3e22TKKrNJnhY5XUVNLhqBTw9KaDHHGXqhjokxaLbMYWjRg2e85uZ",
  "key6": "3GECxhGwt2rNy9YyipkxGYQQwdwRFDdjFHW9gZHkSJ6zpqSzWNPvjQiUEq4GLvayGdEBrQKcXhbm8f79unLA3726",
  "key7": "5G1hhno2hgS566HJHgjgENNyk4WbTWsjz8uAs8rdxNEgWELWiBiTQktAMrbNy4jBfDpzAmk2ENqERxAx7bjzX52L",
  "key8": "3TVeJE3zwXey5oQKpKV9MScv7YvdxomP9cJHaPVbDMsuS89gP4mz7YaYSmBWDS3u6wYHMxkHyzY78QfpSJuq3X8h",
  "key9": "2LBTjbTGEE6vS9vPQgwDa434Z3ejkoTofjFcX9n5FrFMa8xJkDbzuZV9DFmoLbbXNAP3mRkqLDcpFtPGyqPevWam",
  "key10": "2wMuwHuiDJSu45Poj4BfnrmB2xRcqh2RqrzFmwxdq4KSWiX41xAsx2xfU8txvkj2xKSWNqSVg4fg7zQUZDmvymaa",
  "key11": "4ZLFRPgA988YMbebwNf9mFNrVfa4E7dPkrjaTg3E39XtQEXAhXPC4xgcqv2Vgyg79bY1NCFSwUU1birVYz6Ydqac",
  "key12": "26c14RD9YxWUUEWfemHHKeTetnFhRVML92WoA7vFTXiveBC5d5bxoDbVc6z9fDTMDS4TyTtsNxpZ4LTxU1Dd2mUy",
  "key13": "54VzY2ST9F21f5mtHWiiXHSPkKkTVLvcqBJZqR4RATazcQVJv2QN5hiv8DFEkS7a2TxzTAZMpYXuQz9GpWDsdM5f",
  "key14": "3cKRi9ZZSsijBqegg5uUJQvbztiPbvXxCfwHoHzgz4dg6cybEKAZgRzezNYAq5dsgwhDNVNEyXtNmXXLUPSQQcAU",
  "key15": "49NHn3o9dUP6coQXjicucX2hDC45sZszqB9czU9rszkCM76bzC1g9oYyRjeJEUPmR7q4ufVSBgsMCTBPTeFNsgwe",
  "key16": "4tTrxrpdB5Q29yVs1R5Kqe6maJFRrhSwDRwXqn1P5jZM3ogJLozFMivkiViddAf3zomiMc3TqQ2cbK8zow2AP65M",
  "key17": "5V2ms2FfJPhwnvs7MkTF1ftkLEirCEC3y3Vz4FWNjNzQr2Etuj6ernMBQHKTTBce19yA8eMcZHm4M8FSPtViDMrD",
  "key18": "22noNfoJjbQ1MV34xtXP9TV2xoVjkPeyympa2LEx6KjhCifdFYbNZ5ZqiyytGH7JztWdi7QKMU4SfAAnsSLrgBVn",
  "key19": "48zChgt1YoSZto34W1ebD9V11BsxpeNaSzy58ZXpHgbgKo95fVjuDW6MSfE9JEg2NqWvWLE9G512fRFJLCzjWthN",
  "key20": "5NuSMgbGBUYtfWRYZU6oDSDV5vgcP2QUkQbnvBCfG36eY2B6SU6ESgnK1ASL5aprB27f46eShfojGUmzNHyLkU4F",
  "key21": "5dNTPTibFVKqizddyWszK4oMcvxLusJ8hLBPCg4fKvaKuCpzPFJJwJv9P9HfmUTAb48WxiVHwdC5QixL73b6tzNZ",
  "key22": "5a6c8dY13wzywaWxzGdgNFYxVkCHYQ8nW3q15vSaNJHhy8gHuSJMV5md3W53hVfgkivG7bbe9uYqAmFDzY7wAt5x",
  "key23": "3rzmX5pBmmYwX7Sn5CEB3tubynKVtXYV4zqbqje6ZKb3Rfa1ip7pJtgdEoQ1wsSoNfekaUKt63XTQE8B4AQexWb4",
  "key24": "4yZw2aBnFmdCUxkpTBQtGV7MAZXT8nbPSa2yonJ9SjFQaAt7nJMTFph4AEmE34DeS2DjjsXGajeudJiJuXcBjcM8",
  "key25": "2w3KH86Z6h8KDkKPuhvMfP8oGj6xiHaHJAvnEZeqypNtYoAtMK9NZW1bzsBZPUMxA6HbuNpJTxRUcWj7TH1g6vyJ",
  "key26": "3swQPAxuWteBv434Qo1G6BLaQtmK5w1cFNmdstzTDvFgkVf6yUKRtGz7wAUfPnqfdrYBiJLMJADHWgfVTeybp12b",
  "key27": "2SwgYXJzxTH2N4k7mMbtNetjf7TB3iMaotvUvoh5eA8QRjm7ANvGxPfHPzK5Um7HYXS8NcdCYTz2hJRr24xdx5i",
  "key28": "24a4MGVCta3p1CJqCGSPaGpBgxxLhiB4oXuavMVKM9XPxqupsBzChBJCqkU7FDJFmkpAjEN66ZuZMPiUtjJtoRRz",
  "key29": "3wzzNQ42iah9iXAM8Jd13iD9ezq3FaU3n1U9CndUifBBmHEdAjorDxu6181Lz2WAbPPfLaVR91xYMQdXEPZJw8LF",
  "key30": "5sfdQzakdZmFnnqH4PACQTPS8KRpvd4k8ZRjxpV118XK3YzdJ7CntZHQwYPv1uV4Yi8dXMYnWWrhwQAo5e4ozbwz",
  "key31": "53Rg2nyUgGFp6JSsXwoBBqyqgdjGWszvx1ysyTiMLMx15deUyMzdxdViMGuPgfsyRdxhGaT4MTs12QvkaKb5vg1D",
  "key32": "3AxSXiuGEUVETV36KhBt6hgeFefs6kphzBukc35VR8m46jrVyRspuwgBZDdPcq3R5RS5miekkpZT3yHhGotQWQGi",
  "key33": "3b21qCKSAmCUxgZW2h1C71bd5TbBtJba1ohqi5VmoB8o3A3LoHLdTrtLTPoYdNiyN1vg8cXyC8Fomt9VbbfKrKJB",
  "key34": "2nRdMu6bdehVdvcZr9uGpJexnjGeKqk4875cdoPbD9b58f4n6j2BJ5o7z8bW1zS937TNxDBsZ5zPcuKxFLo9EuHv",
  "key35": "4VQMYjqs2Hhx8xGKy9JgFwVjBFWFg3zjY38JCnEZ8Fit2sF3onczDvqwZv9Kf3sydEGxF8qaJW2ThrJUAPs8oHBY",
  "key36": "2QnK2eB7FGiXLsgEtaukmYFrh8NBDo96zaXg1VN6JDNR7sT19sL1vBupmt1oS2oTyAVuo3c556A91RTZfMaLCmvG",
  "key37": "2PRzBhNYetAZ9KcoFrh4d26gNwGCQ6enkoxkaYUVWAbHGAaB4UCw7WY7on5oQmKFiv38i1DvonLBL99TwmqCh85v",
  "key38": "3CWQawyjWJVTFseG3HfzGcgTDcdh8esttws9zhsje8mP3hcztqcqGaSSBAFqPKBfG756yr1FYpzQpaD5nAq4mQFD",
  "key39": "5UDMSALNcx3Hv1RhVan7VUp5mHmxiuCpgM6m8gkkkZyipXveVJNjA4YHjSPTzQKkTQVBwpbjKJY1cc2u5Txfq8Hm",
  "key40": "w1sbFjQoJXg7GMcKNWrqPFVUW4Vvk6xHjSKSii3KigoEU2jKZHhpcNkYuv5SLbBwyhSogHGijkH4jKvwjLDXe1f",
  "key41": "44iMHgG6pF6HBDTPvYTgiL3dudAvmRaiVxNot469SgDvjMibUnNLBaiDoFEctKniA7RB3JYDfp1tkqzGF3nXUvzV"
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
