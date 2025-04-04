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
    "4Y1bgXiAodcybcSJXYqQHMh6jbTYb1MPJh91QKsxbhmF67bcbVu9prLsSjswnxvkVuLFjThcytzZp6TKdGkMswjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJx4wZ1WDPMaENY8naXUpca6zVu3jozMK3rrZ1aNBQJbBWcR61oiA3RCnUfjJnPeNQXaL33mxVtUoYTUsCKUrQc",
  "key1": "4iFEVjuSXfgfT8q5XHr5pYjs8kDeTbV2SDkqTbCxQZLxFtEvkdFKWxhi3AxtvGwk2GUb4Qk2nv94B5C75md6UPJo",
  "key2": "5JLFNrP2asVQjnXfKzDkmMqJyBA9rMweBMVVCwgK5C7b2jA4yLqohcbfHQyQZFNktekmW4UbiqJngZT2po8Jrf7e",
  "key3": "2FoqwLzcLpw1728dQ1UJB1akf9Jg7JxbDfoTyQmueZCAkyQnawP4KtdR8yqUt6V5uK7GEwWHxEPH6mYaWGyJP9xb",
  "key4": "448C8rFqYjiHZpW9pEsJUo6kHWsKGvAxcwzzMm2ESyrgPXBDWoY9tGwgPxNuFqwqb6cG6TZX1aoVbvw7pnCbmec6",
  "key5": "oqwyFfhxWdsBXNrgB5VVWFhG1WAfY3eMsTrusQjfn2Yem2VaZVCmHdYmonMnXRUDcJGTKVkC1fWiEpLCNormcHJ",
  "key6": "4NwMGbSzizdFEBAbi8vx5xiX3NxYhxGPQG8WPiQaf6VemCsdcgzqSsqicUTuJpYuasfsBuCRnwzWFyo4unyznGL8",
  "key7": "3w65Ao1qrE2RJFU9Lhz4cerVucYtDyTCH4jo6gzwJDKkFMX9q5tUz4smwkpkmE1MRGfosgRv7icjXqyEV8RKYFa1",
  "key8": "4SijBfNTeyuQ2YSzh6QNmoC8WFpNY9BS9vXZ23T9AWhs37tUkvhJ4xSVUgFDvDWiasgKz7qDg23HfmCeBeUvn9fY",
  "key9": "4bKrP5fbbTJdBybsq23EhiwnRp1n1xBsnWgz2ZdJy8dz3AFsE2iSeTURakeWCucVb8anapaYW7ZZWP5xZZeX3WnQ",
  "key10": "62ncC1n8UgspfAHLAFpEvpAuJAK81uyBVZ6QLkb4dg9VKvngbfLVTCpuXWWYnwMMyC1wQG8UXyYPeLpDZEDFypha",
  "key11": "5LwYjNNNxMdYMHgopojyAZJP2P2AJwfbz1BHpXuzc5tMsHXHcLAziq62eFCvPJmZ19dkATzrcEMvQnWdZMX2ZXTT",
  "key12": "2Cas4H4xMGHJmdUJvNs6DuRgoSADJ7kc4x2Ffomr2sc2JQj3TJLKZcscFgabEYmPs9ADenTgyCdSV7MsGKZNDLVX",
  "key13": "25jhFRjntkZ8N5EZS6WzX4iTZZiNfx9boTJvBP3coMH3uHLhkfs1FJSSJc4CVkjjQK3Xjcy6yD5LV79SkAcyQvBt",
  "key14": "8WFQ9aZ1csZ3tBxcJAq15zbBKNE5zGgcvzP7UBK2EnfsyTyz1yCiVNztu6J4fFm2woPaRGnzqnDen5QXxfp1jeM",
  "key15": "SSugy4c11JKE9viayeFmsnQX5o94cKYV1xisa7Y7Urp1Xr6k2ohvdYttZyQQAxJeFDb1h6YMFVj7oirxTJ4vWUT",
  "key16": "bhouWF8oD4ipYABXwKJXVxrqNGBaiNJqUSQcRCsX84rPSFzXvrKsUqWKbw9mqMZybSrtp87mtoThHSqpKcD965K",
  "key17": "4EePzvr41j4r3o87jENgpmTABSKuvZyYDkocvsa9n5xnRB1zyCwUgHoaGyc1zo78fx33uLYdcNbGjBTbd1pbQMJo",
  "key18": "TLPNND9T8DyuRhkMX2aLiqFMDL95Dy4fJrHmwe8nErnuiQxVGsRZeRhQTy9Ah7Pe4bW9ryivqA9CshRJFweKx8N",
  "key19": "62ym9rprP89xMfQxzQToFFuUb9ujrqXATtfQXKowxgpZrpxCXV2AZni9eu23zmMzzbZA7d9Sm1SkNazHxHWtqtUf",
  "key20": "4omPgeCFUk91yncHCBQdQQGF25QbW1bzYdE98LL7vGSprgFh6ypYBpn3HLcaXWs6zanxppCUymdrSLWjwfTNqGC9",
  "key21": "5qNvEi4jvPtfrzGKWTndotZCvmrXfSZttzbz46kFz82JY8HJ8KVKfsAQXJPWr35AQERGkPRsoXscfU86oFeboM2S",
  "key22": "3T3wwjn94ZTyUt462vp3YShvqVGCsoxhqy5fC6LkbkmbaXKx3ZLacGSuNww9g6izBKVPK6W8zwmqY43ysrpeexEM",
  "key23": "4EPeRFmx2tnC5oFmx5emaWoeBtgSvPUqkKFFsYBA5N5uF6CNP3sFNEaiUXdDGm2BDQXUqsCFS8mbGmdWUsh64wqS",
  "key24": "5r7Yfjz9dtv9XbrTha4ogXf7g9LizLbGYgUtqpzMaoMKNQkTheNa6hz2dQ3y4icAppQNm7Ket7UZpKqaRfjRjBsz",
  "key25": "2yPrB7g2Dp3YzPhzUyN3Pg2rnTfjQ4ZGxEme4CgVx1cvWj2Tc5Eyogy4AyEamdx3H6Y4utPbexrPGygRu3BgpkaT",
  "key26": "PUzUNWUDfBSLAAbMc9VtEpUK11bb2Ja8uXxeDLG385gcR4LgdNkeiM4ceWn3vVRekbyVHyCBqavxGkaY1vj45zr",
  "key27": "cTQsyFMx2RH4zaRgypBrbAt519cG6fJz8SfKXZbf6RnoNktUqW1E9pthhKuVznXbFzFodv7vuUbZxuizJURSknE",
  "key28": "3q6P3dBRzxo35Sj4RCxiKQLKhyXuLTFfNV6PoQ4SuuZN9X1X3SykGRnAVLoDQhtksBskqoD2dDQ2c4P7WR39vb7N",
  "key29": "3iixvoYSeSL6YNjaBUJX4UFaKV4T3uBd1WTNQkSjVATrjDhibP6ABBzadstugsGwfHgdnvFY6KTMAz8D5Zx15xZK",
  "key30": "5nS9vvucz2n5CAxJ4MxBQ91DypF4v48SboNRwx81uSD97mEvW5NQaBd3JfyB3ePWuGbPPYcW1E6Rwp4KnSU4La8e"
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
