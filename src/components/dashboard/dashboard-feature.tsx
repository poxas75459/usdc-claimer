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
    "CruSfC2AE2wG2JEeK1h84EwvE9s2V5kT6Y7txqKU5qFWeCywqTDJWvsdYrJZSnBtj7Kwf1M8jGLypBEdiMhQCsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VaM9k7yaq163N4BFhQMMsyRh9uqUFDrGWz2GnX1pU8UH56hwAhVNjBgoyXxsDntqR5rSmsNr8oVL5WtrWdvQTKb",
  "key1": "5N2DvY1zU4CvtMZCaBJ8rqQVTeDr3Waq6auRBFCaf8yKTMqBiWCssJNHRyGU9TRT9tVUmqrTDU6X16qCxVfVjmwK",
  "key2": "4bLhNqAJ2p577VwUMRt3VftHd3xRQ518dhkygGzGRFGG8CpQo8KSb6F6uciKbeoWwBbsURuHbvkF8VrbAvtikrpA",
  "key3": "4QyRqm3axdDfdjefvMLgB4onXu2LsmyVnPkotXwwNnSrANH6Jp1T4g4HuouUUXFRkNdGr7bV7ABwBnuGteZNfi7x",
  "key4": "3oVikVtFabJw4bFn4xLEvYm37SbeWx3jGZVaUytkuH7y1opvhjwHdNqHiNSr6Tjm1ijNjmnGxjcYucHwd4XmYCkn",
  "key5": "2KjaNhkDqcuecthyYq3DoUhjZdoeeMZ6bQFdwsVB3e1g6PBBvhbpmbk27FmH1A4vE6ZudPjNBuzAHxUfRroPKPqR",
  "key6": "4LmsuWJFdWFgkN7ypeDUHgadvR26Ao1T17enART9iCg8G6RWHswnFRvHYyVhNUiBsMdRPzLk6EWjWYFieW67nP4o",
  "key7": "5WYDc2w74ERVVUhWHh2WiBwWAvpwiZc84CqMYEJNmGHzKPjxZG2Wm3u8tc3oMsFQzRAgpBLVhLCxd3aGHFe1PcZd",
  "key8": "3dvmeqyrTUyBjs44PguFYD4g9RVUxzGW4XhBu1oexuFgA6aaar9FKPyC7H3KALqWbBKvaEqvSZvjT7tF8KDwuJFa",
  "key9": "2wCXgxvNLHJ46D6w1YLKxsnUCwJB8i7VV6LPAdqc9LQKYPjLo2xBAZmbHNSfho2oB8ci2m13WZgpu1z16LXzhxme",
  "key10": "5fxSap5WAFjCdaa9vutFYbdvTiqYEMPmgLTAqteFqvTk6qo1nJrFfDDVxtkR4Jwksy526GZGyuLnDJAuSssFmRjC",
  "key11": "oKQEmGy5YGi46vGWXcr8wmBBQDhKPjAxRT2ZSpW8SWFr34qKdQn6UeLTnkB1SdJaSrSifE4bCB5m1v1JoEVEodL",
  "key12": "rpxnZuVhw22qDw5JDusAWtVvCm1ru81A57VvJSaJkgjnowwfuP3qnVCwHVfqBQ4E625nNYUCH7kpa9J7A28iXdC",
  "key13": "PqkFArMuTqvdmAWwZDehZ8PpJmnp4dRuQ1dRfEorc7NQzHGXHpwcqowQr4t8vawMucsihXJ9YC6tjym4ARCi6Q8",
  "key14": "4CFYBXdzpKYFnAPPq6VWJb71fnoXwXwAVunbSz5zCGLvo7VpMguttmtjyRtQ46Ysadxz2uonzHtRirJvJ6c1UgjU",
  "key15": "29hzFxK9x1xgyGvR7eCRQPoowPDydXZQFKPdH1mBK37wbHQY2aDGjJiyjFPeid3aYGAcK1RKB7CMjydqEDceUKxH",
  "key16": "3kR1ecucTLES3uqe1BWf7XfM6pRePHUzYa8wAA6EsCgZo5gzxcPRWYmT7nsrHgi7M2nPM35cM9Ps7TLEcbNNpXot",
  "key17": "ms3qEexChWx7vnCkZceWFUJ2Ldp6ywCJXwugG2zH2hxy3QNnBqU2sK2dJ3nPV6xsRjgwMgAasmnuoyzgJR7KBRB",
  "key18": "46ZwvJyjfPHB1A6G3gZ8k38PSYQ3FfhVGarBdcYNp4T2hQXgdZUB2cuExechpuENQYzm2aL6GDjP2DST3yfXeAih",
  "key19": "2MKV3MGpdmjF8U6asg1ngVqG52pntHUs8XM59VubtLb9UZyDDg48vcXkc2T4vRsWiH28qLzFdmYVnTuMyBTTeQgd",
  "key20": "633BmiQ2tYZu2C6qo9zcPg1jfDngbP4GBLv8332KofwJqoAhYELmk4t8GvvAXcBrukzgQH3GUdNCjiMH6hQi6htd",
  "key21": "5X89bYpE6jAmKUSthFjXokCfqBm1ufLxZRzC3qfq2nTmARr7DbJPhna1ApkpCUw49D8TBEQ2259wUJMZnDJrMzcC",
  "key22": "hGxobUrDFyUWPnFbzk1bAoyJ8pY7aiMDKFgehyk3Qy1iurFjDfCJMyVg82Xa1m8DmzFxBvcLruVRotBhyCs3mX6",
  "key23": "5CeCrTE1Bp3tGDECHQ96S5EfkuTeqynLs4M3HMoTjmj9xsm76RztKSrCQpwNSjSsHHWctvrZJBmaHhFp5XZJwDN3",
  "key24": "2auj3wt9qxJ6LJeC7C5bRokYJy3AxNrinvgwC1tqBGdvQj4B99qywUEnGssf9gmXhn32aUz9Awjfxj8BTvm8R7iR",
  "key25": "65TiFJXPvc8jfigShbGswC2eRWyA8fh9wTw3c7fub4wBJPyU9KMjXybPM6Macyi1KLWGEufWNMcfPkBRGgFoqKz7",
  "key26": "2FRgV1DrNmxZ7uzrZfyBQabsmG9JrVVurdZSya1n53P1uY6jNEfVfTk25Ez8pkjSmSDSWDrzJcakrVGUG6ixxYok",
  "key27": "2KLfPPpDRUqvVzJPhtMXm1ktuLE7fACYWhQ9ut9fceZRvk9Q3srwZbnve32WAtGNF6kBoQggnjxnMekXmXyyPAKf",
  "key28": "4YkTqZBuHaH4ZD5qJFeWpjrpmSD1arg8mxuT1DBP6J7eTSn6mLk7ED1xWJAzywZ3pxhsX2V8hqZ9vbEccuundXYK",
  "key29": "DKKPjsDW5veTecAS3Ws7meTyptQSzpqrtRFCwjssc1z5utYHyvcrmFBUF4rzhcnCayWP8p8Cp6iRTFZ1PnksXAJ",
  "key30": "jXKPhkMruuTutBCVqczTSw4AWE4dBnMDGntKp65aztCpehEojCMgmarPRwcgPR5hwFdhUg67RWKHwjeoKz41G9E",
  "key31": "628ArV96ZuPSXh1JJziwic2NLxsCWxvnHyYLzmf3tNVLT2jNL7dXbap7Hnf1WcG6aeVqfw8oDobJEX326XsdVZ3g",
  "key32": "4L5FqCwVZNK5Kr3Jzi7xbMnBy9eMdEYD1RXMcWfg82TGnzpyVtAX7Zw4ViPTB8VjvyFCQ1Za7XaJhR4v6esM8YoS",
  "key33": "2e33VYn5dgGcPigrE8i8pTJdx27VSspL7JJrSGzuaja8E1fo1XPWfkdtQ7rjmqGbVgBk8GgGJNWtbvYtv7CwDvAS",
  "key34": "4bNhCtecoU5knzQaf8J7bPwPEKfCa3xpv9n69YAo2HCX9QkUu9w1mAX573jaNpeU3UjmMwQucB2LNKvYbygbLAUc",
  "key35": "3a685HwKqR4KpQkgwqoi4i8A5ae7FFUMqr9uf8t1rvFVhhvvPYx4m5fGm3Y7uga22MuKttSPefhtgAmMweBYbnt8",
  "key36": "4ccX24mH3URnA9yAunTNYqfN8h5cHTTbZweT5nZq4DMyS615Zb213MRaTbZr3KbbqoEkvMdkja3XSPq9whU87AFo",
  "key37": "57GbqgTULBMq5knLhRE5gR1LLfZ3hdnwKwTSMzryemycDRhijS5NGmg71XdXvoXmyRuaWfBWAqKiq5kVXiBiB2eT",
  "key38": "4wuMx3n6jG6NEjV92j9BMvwHYB46tPob2kViW8A3JshcCXxdcriP5kxtz9Tff6kS19wmhgALTi6byxwWm7ufsLKL",
  "key39": "2gkv14NqMt2X5sjzsYgbyYhiGWD8btPUGxtj6Jf25zzCbUfELtyZsq43SRH6sMerBkodkKupvq4Dcww1vfcSU1We",
  "key40": "MyH2vGHFJju9ddqFsRRPuB4eDxdqZ5usKD4F8sR6UZiAP6Bqa14GggTTBdoeryu1ZdfdLduN8akefzrzKQ9EHyK",
  "key41": "2ks2nmmjLCsCzKmZcbVqYFsVTr8ToDRYkNSCnMqo7h7LbeVFxipYygpZiNyFsBKB86bafTFmuDWsVZXCqSxRGLBM",
  "key42": "5s5GXmqzMGFyWSsd4FFrRKc2yRdjPVqdVTdpe4L2MEq8R161iSSxhWkrWTQF78pyS13eC7yMpGXH3AvRQ8Bn38vd",
  "key43": "2DuGp58nnsbRpnCNSjtvcBUQ19pt1LpbpHR81jsTeHKJJrgWf2Ui1bYf12qkHV6onAMw4JGMHnZo3reWR6wAZ8Lw",
  "key44": "2s3Lj1Z8fs4gtkH2qxHuva9yY2N2ZVyVerP5B1Xdx7RqfAjBqmiSjiiX8dVhFfyjkj7XSn6o42bnK56QdMSBho7Q",
  "key45": "3uu2fnFK97pnAbJtmdyb2H48vWhFz99VGHWHz3pCbAcSkUnMUSm4Youhhh3K3NShiyejLU8baUrKgmM31nELaXhk",
  "key46": "4xAnGXSdTEQ9YgFkCrGUzRu2xjiKEtGAsZuo3EaDt6HxibbCdMvrTHPf9o98HGAJx3Bogue4e3pQMHAkV4Exg65i",
  "key47": "4SjZAjdH3Vuj6x8iEsRmVx763abderxdhM96vaUNpbhD8vtuAJi32oLc5p6yuCzQNLqc5hNzmnFSyc5ANrCUpCJf",
  "key48": "3Q66HuT4Z665NxJ7qRkHhEkQgjkgc1m9YWX7VjheZxu25rhqttaZX79TSMDnwPMwbW36fxvuScifSrJiUsQRryxK",
  "key49": "3AdSdNAcpxh2CdXsZTy7HcSYvsdhzu8x7Hqpzfx3Dw4jyAak9sTrCxYRKhXqAVbZkUUj4PnLZ1qwvn3HyDkS7kg"
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
