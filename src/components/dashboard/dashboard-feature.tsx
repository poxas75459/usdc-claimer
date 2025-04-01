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
    "5eYweUneY8rqFNJ2sTpgkffvQjvTKnZsoWxDK5S2RBApydWsfDoKQ4fgEMWLMpJUD4xT9Qxz1J2GSXuUAbUWy3zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7vsLwMuNv6KdV2YYd1cxs3YvGP8Hxhkr644eAM8q9AQFgFWeumXfbwJgfFucrL4j8fq3PsQrshv7wbnYm2szYum",
  "key1": "3A4pGEqRmZybztwoE5UAY3ZfjTAs6TrRrh2qkU8a6dXRwEs4pHosBkmXKcLN1uvqZUAmpx2EkALZaiijFTMn31Kr",
  "key2": "33afdKd1hN9hWjnanBvrPZo5gdGAGm7hhMYemFmdusazcPUMH9gK5bXWipU1C9QQJUH2q8fS1ZQzDaq3SRmvZJwE",
  "key3": "5dx2mHmqvoZyS4ohUienCpVozW7iJ7hmAiiCiH7sAp7CKRPHXvxZoVv5RrFanoiZy312KU58hKia6tWU6gzynkvS",
  "key4": "5NM5yyw9rR1KniTSYyz1Bwz4ipgWjQ3jGYj7Nqzhm5M4LHti6iXU6N5g3bXHhBQxeDyqfZenNYUsCKKcUEd9BLSb",
  "key5": "3Fyp6JRfCpikUx11MMLzMtQJ1NNjaDs6CvUPeJY5KNDB3yZ2i3asukMa2cTHYw4mgx7fjsFfhWf1Cy3Y9P8ZagGh",
  "key6": "GNcLnNk1iVzVGV4EmdjXZ8eVVWH1zBeRAmM4W59SWEMqHhnqyABFS8HGZECXi22gNMH1WtQTiSf1r1nCUGRES2q",
  "key7": "2HNvLtTa9A6txac6oRaqGwgw37A8EcLbdKcuHQR26tLvDVkLemgNFsrTgc6JEzDLh7nk1tcc9ULkcPfpugKNDWVc",
  "key8": "5Y8LFAdeKXWQbsSz85SSx7kR4JuapJmKmeRrondzwmGZwm5Wz7a9avnwPUYEsCPiP2S97afwTobyiDnyM1nWkBDN",
  "key9": "5nbwwjTdWK57gY3tzFLBw4NwoW3pohJXGJ4xbthfo117fdDc7Dr3wATyvwTvuRVHiHRjzfLpqoTLpyTg9uY6BMSK",
  "key10": "Pwa23mUeZssuJHFKAKqTgagxHdGuMrsVXuhKYNg3NSzbpMEbi511VZrfQVp6sVZVek1mfH5sAyUeGehJpv946eY",
  "key11": "TzNXMqEdXbbjdntfuCC5s2GonjiLTAemfooyLdpX6QafFWefLG29mFWF6V8qKzVqAzN7MXJMYoHm5SKCdMTqeqo",
  "key12": "Jt2tezqfJNgZKVJgBvvhTPe4KktFjXjnhfRGwhJvntq1rJuNZyr166V74TLiRiWWDJEW4i6G1SMCtAsiHp99kaA",
  "key13": "2ZFQL88zsvn5nPLnBCf9cNBNqyrN5xqdLpDZaVz1GJU1AGvABYfvQ5sG9BKQ4rh7XMLjW8si6QwKXscVwPCrTkeQ",
  "key14": "3xzk9FjUEuDGPSw4hZiw9BmN7Gd9d9wonRyCo3eiQx5eNB8LqMYe5shKjfKwPhLz3cdcbLnQEHn6U9AuYTWB6L23",
  "key15": "5cgQfkURDJeCxcvLeLrtXYFufKPmbrVkDwF8aBq62VZUjxVpmwh7onQjMk3LfbjhaxSUogtnwrUUgUk3sAT9eujg",
  "key16": "5C1xu5o3BKhDiSvFAYmbmYn7Qqj1Wy7eYrP8cxuh4j2iw8j6M6gDzGnfWScRUvAXAUL72xh17ubjGSWdqpVb1Lpw",
  "key17": "cf4e7ousoraiPBUf6wJvKNEvJWgpmL3iDKX8Yk2cjfcQbUxLsZMNUVbUoG7w9obLfwh1vQ3RSyfRjXtgUNh9uVo",
  "key18": "4qtjKzAPqxNgV8ExefuKSaiq4UwXAySrfofmgjx6P5fjiLeDWaima6JHuw33EEK1to8fT4JyEjKzSVzoi5P7XNpA",
  "key19": "5jdsowWu7QKCCBQ5dZsJfTryiHaH1vfraty2PH2PaMKUozrghtjAh2CVv7uAyerwLJTUkmPEWGFSSorMw9rUgos7",
  "key20": "e4bh5U9HmB5EJ8CXFm93uVqKBwcr7oiRHopH5rFBwuzF1WV57QKnfGByfCsSWPMszCjc9J3Ws6AHLaY41d4vMrB",
  "key21": "2tdWCKNKCkeUbmagzj7FqxWgy9qjs8v1F4ANq1BHJAeLAyNMPTTaHQdhVtBgwnuuUHfhGtFWNvDupE6Ev94QwMMh",
  "key22": "32kvYyoQ279SxTaUxfei9XCnQTugjZa4QJx19rGQf66NLV4PWd1SbCqS1FF8uvbkLiUE8sNnp21GiML8wrWxw2P1",
  "key23": "2WVRyuez2CWrfqV4jFP5MM6UF22e6TTnYGB92kYv4YvaVhbbgKVVUTASo1YysioBC2Re1acmwHyTyzeJAi8X3csh",
  "key24": "3xrMU3ACkMtDWSQFdLbmLFaQWqEAkXMh4nVyAQ4qxcEu9AU29iWPUMUBUcpsbUFPe4eLZwDWMYbiAcWP9oLW62hd",
  "key25": "3QNUztWDkRQ69ixqQGednTps1CVKi7afB4SVVzKafaRCSncuWKAUSeZk9zhu6JPieKYXHqgaoP8qFQRneyUwMBCY",
  "key26": "EMeyXGeXnVLvCwV5uUr24CQghobByYPxPRzdXvGMgD2DUvYzYGMDtxLggeWfEHfb7KSykJsYX1fH6vwYKZiXE8T",
  "key27": "32wCxpfYgiAyUf6iHuWEQpETb2LKa5fqAHDXifEQ22SukaVe6BpaHa1UvTEd5bYDGcU4qqo6a6vvWLdWwT9T7Qxd",
  "key28": "4EwX41J3FUnAzyXg4tbVf1bFoBbKDZ7PdVvHpaUsifdcR1NAPdjtD3sPjs58SuYHKbEdVmnAn2X9JYN2Ff5efiWv",
  "key29": "5f5XW3NjeV5i2nNdu3UidEmwbia9j4tJRMfGYfMmfhw6ZEAq4o9UsiNDY3KPH4tQjNuqZ4gcwMqiajXNPxh9RAHq",
  "key30": "3G42xoh1qsV1v7MBEnx4PoTe7gTTFB2Vt4VFcre4gFQk6NAqhxJixt2j1fTHnivHmvVty2fdV8YXv6Lxsz3Z5eWu",
  "key31": "494yNjpVGshdzgV4rYa16RV1vNvSN9kf4MUUD3HWzZEmkodVgnvfGKJo5VyHyZ4NAVo8jcBnFtgtXgvXW2GC25y7",
  "key32": "2oyNCm3W3sM1cfH7QCh1x32GuXXQqiWPauEUFJ9iZmXiWUjn2BeAVNGjFfRgm71o972khzmxzb2YNrUcesbeYaEk",
  "key33": "52BPQF7fm8fP41X6Dd2XRbFN3VW4ZyuREr2LuvshZUqZijuMgsSSEeQkvaF3utrSJLo42Z4zGMNxPDk9qrhbzJEx",
  "key34": "3S4EUVcBi24XYCCJFVFVpCdv4t5SzNKobgM6GCJsfcRhQ31WLVLnQEN5YaMsYSE8seKxpQCMc8A4ATubosRAgBA3",
  "key35": "37FKMEegvaqfTBbkmq7viP8fahCd4yFiJ8XhZLPe77Pw6XxBE8qgTBEeWov2dcTDUDYVjh6dLeBXqJLb3J7jFJ83",
  "key36": "qbaLsLBU7ydwotAdVNteL4bEgKknHqNAim8en5wqKZUDkMH2DEp7Q4mWaawQPNdCx1p52LfVc6k9EuHVzgy63FC",
  "key37": "unyKwq6M5o1xHqDFQDqcFL1Fv7useg6SPUt51t5tujTiUhdBT3yiDriF7PANj8MWKXKsgATGDnGWwTKoGe6ASd1",
  "key38": "4JAb8vmbmA55aVpqH5hsHYh9dWxnZxfxNBMuPDCZsjGD6EQ9roZmMVRZdAmc93ybRh7aKZ61HtmGLUR5gb75FCip",
  "key39": "3EgwZ7tzjeqG54opnVSx5EmrrBu6ASTExD4jbF9PMsXJDm4QT53CnVHGb9Jq3bfHh6AeTbEvLBB6rqUGYc3ZbzpQ",
  "key40": "ixFLbwJQKNqrk68KkAcc8N7JN3KmGGY92czBfYn8gKJdVhp4zpFWbB2SvKNTJN4GxCgfm9KmSYDD99uRURumuBm",
  "key41": "ZYLpdERm8bTowQxQGyoQ99Uud741VW47PtG9W455eppnsk9e5xyUt6MK2uYyofjTmxv83wGb3FiY68Tiu8c36Z9",
  "key42": "3SVQeZAi6yYes45e2dcy245v4jv19qyy8Ji7WJ8pmT3XisfaVLFZB51WDb6xxr6T7xp4fKXQNQCkUWxximF9K9DU",
  "key43": "4mLDbm9Gae2dzw9sbUJ3XaV6g6Kva7eUWFF7zhKMzNrDCGnTUeaeyrJHh3DCyhJ2FK6Ut5QV2z9RcSerzKyNdH65"
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
