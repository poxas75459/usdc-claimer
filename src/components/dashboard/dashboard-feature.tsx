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
    "iiaiuXMqAsGhysD8xxUZRr6Vz3zthSeyjSYmxQtvtFHujSW4gvPm7wkrzPAFb7pT3jNn4Qh1QRjv75jvGPRx21q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PbhTMSkcZvdCZYF2JtrxGTFxpZzneuJAGKh9wXQoCXvUY4nfaNKH7rDf57wEo8uJajod22CJCzcHj5JgK5MFkNM",
  "key1": "2w9ar2MSuXcQ2uYE9mhLNK1QqeQxVMao7LwXPKQxE93AFxsYMWashZ43cr1zhckJJfbpD5HB1aFBzzFUvnfTrDSN",
  "key2": "abTpusiBcjz29ZTmQmnbfZwKszKy1JcSaQyis8FKRTq6dkRuW9EPKvLVEhxaJG93kFAiNmT9sMMgfFENfZicVkn",
  "key3": "4m3BTBBDWrtNQpYr6daHQxY9seQp2LSSBQEZr1W5RgDnWEfyyDJa917NdY16NMFKsgHtsU6NXneeg1R3zCk3xjo8",
  "key4": "3b2LmCtZi7CK8qmQq5Yd6uYhV3DdmnWh77P2rfnffCwkeXRmK1rtd42RAbm6bhN6YyKQXw9zMyfcs51ZGRqM1FLc",
  "key5": "27wNJaqDEVpnqxaLejzckBPQHAYHqK2H8SoSczEMG1mDj6BtZh9Lc9XdG498GUt9BvxYJveA1Yg7koMBxU4QusoR",
  "key6": "4nLgDbhhcGGZrEDTjxxLdrU5sY6YfB3HcTkcbmTBDoXaybedMqMjmrzTco8eYF5rUa5bAqFxwiNf6BkyfpmvgYFE",
  "key7": "64tdAyXKWfMFM1x4ZvmJyq5KLbtqcHh9i689oGeQmCWWaL43LbwfQqeaZwq7qfZDfbwAYYavZExfx6WTH3ZfVR1r",
  "key8": "CxxadeEsQJs4cqLAjjoPk1r4im5AFpsszUu78uLXqAbzh4CE8CnWv7BkrdRV4vZQF7N4YQ3co4NcndBJ5d3dtv2",
  "key9": "3T7pVwKFUMEJqRAgNhE5B1DvMgYbcrNzjS3Pd1W4zU59VoZ3nzRBHaAEmBg8qeHcLE2Hq3yja2oguBGkuahnZPzW",
  "key10": "3hf8Zo7AnSSoG6bQytxjeymzNZqvVntmMnmphoUvZ3vqg1Ta7FaTH73mM7a7jkqjs3fidA8cif7xGELttKpUaA6i",
  "key11": "3y53iB4ijbNv83HcBmyqwRZKJ9NjyD6c4PvNm6X8gePWaMHFceHWX27Myg1FKyM3wphc1FqZPxWX37pV37VKdNnu",
  "key12": "2hHss1PVmNWoVw1Z8LgaGeV8SZFvW9T1rCw6buNuFEk4QvMinfQveMMXBD1pfHdiuU6HE6T5R2ipb4rMGDDsey52",
  "key13": "2dxj11kya5XiPBskSTegPMgEf4qsVctkgXJ52idcmt2u2vJuDY6UD5ca6eV7rz8jyX4bLknaLxyotoY3ttFidsKd",
  "key14": "2oDcyNEmiRSEA65Zho1DbpNDGDsN1KPCv85sBhz66YgsPEkVByggiKzihJ3HnUtpepLwY6wdKGYEtxUA9v3bY8hj",
  "key15": "5yn73SHmGyZgkY989u9RBnPeUXETstTQMGfEM9xw1v47abgP2gxicU1d6ASiyb3RNyFLjEDAVSYZCW1f8g2jcLSc",
  "key16": "4CxA9gieKRiTrfP2FnzcKpKSbmLnbhx9nU855vwPRX1Su9CgEWwwK2HK77XNVNsGX9yeSYBgQmKbqKpyWTuauAdy",
  "key17": "NaCY1sLStW5kbj9hTYsjm7uL7ZfdXP3HPXHFTrf5AuhUi6PnRUfGfmoGwtbFrpDwzyCRwJev6uGzoaRdiXVDVin",
  "key18": "3DUs9JUER594ZtEVHkzGeq44o7agDnoon3Ca95PgoCHHdywMDeECvE77eN1WUaVk177GW3hu4TZxwuSVJbD1kwW4",
  "key19": "j5ig8tJP3UfgLyMZ8MJJS1ehyE3GnKwvxnCmFLbARWRijW732n2pKpEDgpzBeXtmGwPPPu53pTGA4UTmrq6WrHY",
  "key20": "3xKKFKuSNS9wup2ywh7Py5DEYMuXhMMjAFABrocdn58UcjfoE8WJe1o6Rou8JuNmLT9sGA4CZqXoiu73VEb8rL8i",
  "key21": "EWMU8DLir5UcyLWDZScL2hnSTuSZCGGTe5chRkW6hDA7z8gVnh9M1uWt48Bxgy6ns5Fo9WC7Lt95JYyaATr1DWN",
  "key22": "3237bN4LnpY5YysLBifwvJ3ra6LrCj6MYdtDD2zct4dPiLttQvzBDcoYAnMd9Lw1MxUUaRZ83w8kuaFrjM1EGkBM",
  "key23": "g2emxFvtTzyqPnPTRWiunt5fyESfJoeiv7qnJGi49sTNuBHo2q9fTaDc9qCanzNTQk1jHhS4Lidaus2vt6MZE4k",
  "key24": "5XGxWaD57y8vd4JdWTw99auH6ctRGLz5dcyMQz7icawdmgPpP3eM7DKJwU4yc5fq2TAFUXyJWQnE2Jspam6NAnnU",
  "key25": "527EnL7gqFNH4J6P9SNu8yQRK573zkarLTzjGBUKfa8GxCfcJJ2ryGcdFNsHs582CY5nv4okqfExzm92poCs81DR",
  "key26": "5LRQLeXwcQbeCdBToLpbYbLCTyGtJKL5XG2dovSszhiRSN8BgWXwdcMqLF2eD5UYyCEjkJcEcciBKvHYY1RCgsFU",
  "key27": "4V1m5gg4go5dhb9RG8yuWf6ADjce1kZHdSLZmsANYFjB4fDRxzTiZzxpDs3uo6ZxwxHmfMNs3sCBbkwWbNGYp5v5",
  "key28": "3PMGeB4rAwCiZfPUeJ8ajp71643V2XTAVdnzwWWuMHFo53zdKgU5pCpx7azx6jiJK7r4nMNLLGaohSrCFFsCD2o8",
  "key29": "31Bxdn3okH5b7xJAQHiKm2Mdoh8JG3tp5uUeXnThM4vcUgKsotGSgKfxprauqsUHdaWFJqqJDxgFhaQJpjCf9d9V",
  "key30": "LSNJ9mG7v1xdTh7tGidfkUxRStsEc2U7uCm96Dc71A2iQcMjJpME1wexhdNFn8DSXAbut4KrChEamisyQhAXyP6",
  "key31": "4YAV8fmN63K74CFSgAb3umb54egmGTvPJHdDcnXqcGtu4nHhXF81kxbhq9zWun6WeN9zw9ZxYgs7mPdFki1NQ8fm",
  "key32": "2eY5qxjJ8hQWdLSX37ycvs1nBHNuxSk5vWkeJPYGBeE1JiqXt5TmxsVSX5KqcefEf1vgB3HiyQuK3ueYZfaYBxKP",
  "key33": "53sjukYa6ChA6YVsgtMduzG7kGiT4sZNChAgtc37MHnJbLEQvpQo1ZYqjnoadPsANhi6naGdDqy6FQS21mkzBMC4",
  "key34": "3AwNtgEJxStMYYbBtAd66FvueUvdoqX69zvYHcPWFqZKAZdGDgkbouchxECmLmi6txySNimh6PyAXaHNYfdtYh6N",
  "key35": "eZuuLnvTQT3sfiYNtkYBdedcpweKuzbAnwhG6Nbd5yLBgsnT1nCx3c9cUvpgdWnjJBwMqj7uhVGPRSmbG4L5E2s"
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
