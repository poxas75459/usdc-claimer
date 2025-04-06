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
    "2iBr1GEZ42rnfuDov3a7XytrjQScmy3tpNkXVRXzaXU3JbrVmaztqf16fXqwfH1heJxhPB4XGzKhp4EGcYy9tkvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVzSRr9wSZAm1GKC9BeCV9yym5xDiMSdSoPzwGNEWQEZys3ibXVkgLUMhNKf9xCHLADB9Z42FqsY4RLgGDyvi6a",
  "key1": "3mcoi1KWQux8xKcdaMNha3TfDP4spr8djWrstxmKyL7D5sU4J5UAzHy8KyWLRyWpzv2GrqL8ik9QwbRAPAfeYrQk",
  "key2": "4BYjKJEzfpRG44bwZjzZzPoGAtGiNhP6rxWUjQyWVJ2BAyPbsnRekSdLpdohtjs1VGnsisxwvpnfSrF1oxWdxDeA",
  "key3": "3i53uLtEmcUgY2i8WTnG6D2LUqt2TB4wyCWajiDnowER9fva4XeayrG6cskrc64n4YDMVQKr9va9Gzf11Qs6Dfdk",
  "key4": "326EG77zg7kWBqzaJt6LTWrpDr2FFM47yB6GJMZMLggYPKobnLaNXuyaiLyGh9kfkhoiJJwQcUv4h8Wg7o7nLB7J",
  "key5": "jjF2eV4HU31aPkczP3yw9qTF1segNm7izdySJ5JYK3NiWRmXMq3s5TevMDe9Fgy6Gok7oNtKQ2JbQFPTF1LAaUT",
  "key6": "2hCNRMQCwq69NYnEtr56oFbJTmZwgv3kzoLQWePPaWMXvk2xVbJkonwobXSfZJeUhr2rnvEmXUVyVtrLkTrUYv5e",
  "key7": "FaowoUdEpnJmefzUVrobkhko8skmdcpUV6dSUxpwsquCXJ3nQMAKa9tEvWjuyy2cFhZrb44gYdKGsoaJuPJaLAz",
  "key8": "5X2eTR6UzvqL6RbzvBGUcA6ty9RnSKa3LiyaKjbrJyDTDyLKk9xGkLfENVKP158Z29QS6CBcHpFgdggNDcEvqYpW",
  "key9": "ixqbMX6xvoKkQASScA9EDbsSJP3LpTwLAkqzNXPDJrkPkPywjdvv7Vp22nNdRyiNHTUDd9E7gGUTiN5TD7jGCh9",
  "key10": "58iD2eyv6Avi5s9UCBZQJuxzqdQfdfiAyXafHuk5JwwHjmjWSYdkLktzFAEbmqdwErogZXnsssE7ugMthXNxPf5s",
  "key11": "5G8qjZYRtUkvAgm2LF1vSc2syaGe5EeJmDuYLsmxyRYeRxhaBdjhqqvQYGTaTFW4D6KBLC6KgmFQwy5PoXeGLPaN",
  "key12": "3sQHANq6zRa9PPPffeh2ZGHDgeFd8FoARnB6mhLuGQhPPMww2G8DtUJECeDEjrwkb2ALYvUvjwX7bm6HFLxXExA2",
  "key13": "4TvRQ6Roy6cUpWLEzYgjGAMtzmfST5KpyUGMB1wSmrZXwrK4zeHJxZAEZjqQQh9TrKCQ2XneUvhgm23GSwK254XU",
  "key14": "2nKGhLEbmwXk31qtNs4xmHh94WonnGKy5imYTZzDnmJR1aBzjFkiu7kTzaYW8vvL6iXz4rNiiJe4Zwyh1niyWgpm",
  "key15": "61vSqFMDsRRDuweoWv13y5Lzve9RmNneDigTAqdFAZnvA6phodxZ4dzKfgHQ8AYA9FJi2e9Tp5GrVKUExUGsZk7Z",
  "key16": "3ThwBRcEcP21sPFzjuUuwugY8jdjvCf3AbFtd3ibmeRJSTjrGBngspQ6AMbCXhppcUAYugmCSSbaVYP1zKcAroDZ",
  "key17": "3tugTqvykkZyqbeUgE1oKjyRz1MZwbJ9N1EDpVP7DEArXjCS5Auuwx69YvU9Vw6v2yDcwXcTskJi6oE6wdaF9qSN",
  "key18": "37tJGRyi4iTe49v6gyhUyTC7ughqiQ6iGJYiD5rmiPM2WthfyxPvwUDjoQmyMGUGMrpTZvzhu9qrM8VH7ANafMGA",
  "key19": "2uSEwE8rUhYgGgVoeMyhSwjmwtvKT9eNFUr4KM8wJivEUXVgvzAYyMByNa6YFxhoUAN6Hzan69qsHfzxFzaDbMHo",
  "key20": "qiJvKQPfjzH1DuQ8VB4FUrt5RPn6cH9jzcFKUKfGwXWhQxv76kvUCG2LVBdkGBZdPUaqaBRUjH3ENNK9C2sz1uJ",
  "key21": "2phnbPPqsB5VvZuwPibN3aUB3DBn2mZhby4j4Ut94Q9UnD7ANdZiTyfnc1geXtxBTJGD3meuK81ZQxgTcjwsEca",
  "key22": "2DSozFkFj6svUzJwQii8v8jjEPBfL5GKoSkwRga2PV9KLxvwp2CpWo9Ar6PnPYWdQWLjfUqHqccuSBScE6tQtHWy",
  "key23": "123ywuDrtVEKada7yNAcHGh2NRpE7JExrscYXCT4RTjR1DJvtrMfNte5qDCHUyZfEwZnUDaGG9frXkwqqghX22pj",
  "key24": "35UcM4mdpqYim2hbZRsxj1cNTJeTM7vKcoqeZp8Gimpxe4Tof8Bp9HE1hZqQuZmYAjR7brr9Gxo5TncqTY7X4UyD",
  "key25": "5htziuXCek3qvMRGgbLV1aoQBfj5XRgZzJzpPzsTwAmPmzhSaoBC4gJr3d3zQ7WkKDeKgpeQVu7bnu93rmTdUHvb",
  "key26": "67Y5nMKXWWF4u7ij2dhRwLbjEBM3FGZkWsecjZMXMtNgVANEwgwgEwDdFWY6nz6JnS5FnEAvR2W1uD8vNojwrZdN",
  "key27": "2Cmj6UMoWS1XdRRae3u3gxceA5NuY7YkW45EVmComLrAYp2gpPutbfGSjSGqamzfqXQhNx9gyNT36QXdgNrMLF4w",
  "key28": "udpMnknw3jRa6acSN2Jakw8LzZZDySSvmukX1My2YPgG59s7hBBAeLYSG2uk6ZFcwVAK3rBKUM899KNiB7oA4YY"
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
