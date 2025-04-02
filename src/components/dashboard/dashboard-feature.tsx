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
    "5S9zRS7vME639yPeB1J4Rai2E22w32kJKoSB75qTTaDDs855JpZhzA5DrVCavKftDwP2vFvbVJ9zpmjfUNeZCiat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqZXMf7c54x8eLC7HcK6dEm6NXxPiNKuJffyW7DfwJSz454PgR3sBr3zLNcqUdk1P8a3z1go4GFpDm8MXmLHnSw",
  "key1": "X9eBTByHETRHPWciPczvtEbSUPhetdR5LFPF97gBVZLdaQ71kDEV5p4baWxNVgqf9BzsBK5qyUhha3YWMEMKEVq",
  "key2": "36Z49hwfWZuECsbLdrp3iAx2kVBuMUUhWxsDJSfbgnzgwRqsEV7vG1A3kHBNutcwzd1ZK7muBbfxBLjn91bp8iDt",
  "key3": "5mmX8WMp5JDc8XFe2syuUWGBLMs1bStznce5SxEu2gAGQV1UpVmKZAUuvxF6HxuVR3QdzaJSGh7kjd9Un5Z1u9CY",
  "key4": "4itpcmdF4JECG9PumPN26Mnox7xnJa3W13N9ELBxwrBEJdbNP5b1CH9h83Jj5eYYT7YzmocKSnpn4iM3GdRECTiK",
  "key5": "3eRuFgZWiYmayFcJXGU92BfDgdENy7arPUqPZGGjbdr8noqWsfc5cjMqsKD9obdydC6SgnwVUZfibs55SJzv68D6",
  "key6": "BJeNmwC8AKoyiM2cZaDZy8dhuE1Jb9VJ3iKUazgsqRV4wydsb9DRtzAjVcppx5WGmGLM1VB6X8NJ1UXYrQRLnqq",
  "key7": "2H2FgVLYQa9J9v3wft46aoqU4PJEeGZ86RpQgJ3H8b962H8ZomZcNqcsLYTjBCihuEBinm3PYXxUThqhQ9FNxfft",
  "key8": "Bv9Nm3SFvMqPp7DmivwX242a3Z4bvAzgKkc2he17EgdH2gUhKeEVP2Y2NL5f6hZtyQyuG5dXzDxvxi5v2S5jAnM",
  "key9": "5GXYM9FLURfvW7F3MszDxaEQkoJc1GsZSowfQQ41A6X8tSeLJXd719xuPzcPBbeUv3KYCf8upnPuX2uhceWC2zTq",
  "key10": "3ybWBCfg3i6Pbb6UgnYm2kCYnKB1Hv1jMkJCSa7pT14BwoY9Kf7WAtogC3BCTkjLDhvbL9Hjdgqkua5UL4KaiWtV",
  "key11": "4jMYLuLypZZwypoez2TGsRo9U8N98BL2E1j4DTSQ6omGyT32Xs5LTzEuctiBXeezY3GnRovLmXcgm6WfPGquiKry",
  "key12": "4a44kcbsMkP6iWU7pYQaa2Wbe2TwhkQSxfkzVPN6Yv3QJTRmjZiVTj7sgEPzWNMnGaZGN4m3BCMDpLQstD2surYb",
  "key13": "cCv9QYtiT2b5MXtS3jBwN3t19scgUqPBy566FK4bpS5rc6eiQU3S2Hwkeqfc2NzXRkEeK6wYfw4tZWomebGRzLB",
  "key14": "2tnfSF7DBpXctsVQ6MRQYhxS64cfmi6RxzttZ2eNZ3zTy4mYBJ6GBhVgVHSLPEDiFA1VWT2SLuzXJqQ8giubMxJb",
  "key15": "5eWetVwQy6BFQYQ6xypDeYfBMXeY9EsVCBwmCQQW3K2YvAqowLDZPWTitqo5k88hA8KJspnUhT9gDcPmN3N8Ypqv",
  "key16": "4aFRgR6ZaZ36p1drahB6keGrWJDdUoaB5oepktw6RgUMcXrrSRgxaRF8JtKdSxnthiaqveWRVEPLtsT1iTZ72QcE",
  "key17": "46RtDJcYPKEcAVNvo7MYoxrjBvAPEudmpatNU45PUKNCBbCdPEZW933N9C5mkDKWiZvKwdY9Ct9aDYB5kxfYeM6b",
  "key18": "5gVK7aoZabqmcsngWqcBkmbYj3kMZTaXDAb1ZQSY8TCqzQcPCZAg3kv1rmn92yzF1ibDwiNidHamaLGMzc3hTuuP",
  "key19": "264kGv7ikz6v182i66aYxwwVtyDQbuQGxZt3hj9xgfw6QPHwHi65KRzUwPK3CrQhV1kzGnaiKmj8DCKMvLEhr7p9",
  "key20": "5SVEtaHdyhMJBsazjG62JAuPXeJ3jk1kzoFSAYFrukci38yM2ERrXvrSw4mNbQxxkXgEmUtSBqkLMvUnd72QfXUn",
  "key21": "2bbHoN9K9pPXGAWiZRPmcKdMuUtaBde9kDLbHWUaKcYthtaR7VwMfeoqjF8YGFPPgF6GyiB1AP5bM5DjMey2JP5L",
  "key22": "WFsT77UAJXzdxBNSEyRM2FnXzFESAT4qsZaynRhhJaAueZVdPm6Qw4HxfNF9e1KkxhbSECA3TywPbcc1DTCW1qN",
  "key23": "46A2eVgFutAjWXgFapPg3brw4sF6NNgwgetnHA5tt2PDaRd1BCbWWgPDtmBGJuaKeEuPjciAeo2Yn8W7r1U5wZLt",
  "key24": "2C2ceRBA8nNroCCStY8bnwXmJoRGtS3UubTEDGLM32nbSC2Mq4i9FLzYMBDmRnT5VbEU2X7WLpu92BJFi78DbZnh",
  "key25": "5gEqYAnNGPmcqufBrY2Xk8aZzkjGPrri89ues6Y3b2w5GGPUggJXWvpKirhg6TdEVz7bwA3uHQzGQdiTUnaMkvVX",
  "key26": "Ys5iuPrFMuKhoaxvJ3bFDqMTxPCwb1NkaonwoMFKb9MbaEgZcow4LiEeJ3p4c5XKCzd96F8imb1yS4EE6VkUFUZ",
  "key27": "2aWovNAtEd7UUDYWsA3HHAx3XwCbmTvmTjcFCUmqi4igDYMy1dLCNvoR7rU2KxQ3ZjotRpNGH6W6c7c8KPiynY8j",
  "key28": "5uELwqfmBYGhBHGEgP6FAXcD3pheoj2a4sR7nSGZPacFBsWtY22QJY72hZcucQysNNY4GqbzVQ3HuWufueV9WkWr",
  "key29": "37b6z8yjeXJPtS36aZLR9yNBXN7FT4s4rB6aU34qrVDxf3raa6mcmbkeaZtykNWCReNgyBHGMrw5HzYXBVqevqZ3",
  "key30": "3sLBM4QvJy9YaXzpPc5y84pgbMA5A3X3pJ4x1Wo6iapBcj7SadhRzxPWnk1B8u45yTY6CLqXC3gxtZ5PrXBZvfSt",
  "key31": "3bk6GJRf4NgYD4vTBrTSMCiFGsFAUeW2ASBdMdMTpbQUoDC9DyFxJLFshVkkNBzTSQxKfzgU7cB8nrb7FEr7aQnM",
  "key32": "ZFobFL76vWYaUm6pvYU3XaAmc9GJpsPzZTVaCykLcZVQUcqnyMzAod9zoAJUcZ5L18Ct547RakGoK9TYwg2JSvq",
  "key33": "4EzoBvw7pDrzJdWZxpD6QAGKZGsazSBP7mFPGb4FgrnVWv3NkZdm8pseCarbBgkueKfpwGqeAeEs5JiWDPHBrxXR",
  "key34": "4Gtwq7aZFsphRAptgnBFfqFDp6KnmN9FEHt3DDkCgf6qa7fogM16wUVAPvJ4nWriAwrC1bpWShzzdDRNsqVk2Rgn",
  "key35": "PPgxMytb5gN9FCmqhutYdmxnEhNyVqkeJ62yQc1GJUoMJLGWwHJMGFMrnpqVm6eMRtVY65citYNzD4Agd83NbdR",
  "key36": "3cCzBc5hk5AsSuSw26DDBQSMnkrcgQRtPxfMiMSWfjE6GkowbRFcgSWt6r2odEDwf3b9mWxeFDBswmLWjFikPvkM",
  "key37": "3uRzCdw6mkF356REhXTBrBsu3Fyt2QnnSuzSunHnrjXFjJyz7yn1JCFydzijWT9YokYd52ZyD8x7NoRfXqeuQcdu",
  "key38": "5d4GppBFcmaWaVbxsNq3nWRPcQfVvwkk7PaShoUQhzBgjaitsPFJtTNRXeLXAU5QdvSTEYL1NEMLSfwfEnA1N2Ey",
  "key39": "FK4snzmsxP35s6otps7Q5Tw3D7G1M7WAGCSPp3iFd8y5yYQTXK1QkmqhKTtKD4M2D5Ufk6VPnakCHEE3mTTw79x",
  "key40": "2HcMsKtDppYBcDc5vuTWCBzC34qv25L8Dkp9yZMq7Fe52KfKKVgx5XavqUKSaGyTa8Ey51M3zrdbiLZa5xupLhDz",
  "key41": "5WuhBbYypkh8XRWgVgSz1jhrY6zkXMqTZxMg5QQRnCPNfpaBC2Btu53BtrWBQ2TqSUU6sTeYQ9MX4zYhTNxU9jpt",
  "key42": "2sa6hfk9PSE8iU3iMtJxvkPLReCsxfLmVvswSP8K2MoAxM2jg4GxtAcwyQihwaPDpCr3rgaAxzxWzPPtA831ibvv",
  "key43": "2VGwbR8yAxwcEVcsS4VtJZJAd44ZH8ZqNe78htwLnVHToX7qBc1onpkpDwMA7MLcPao8TRAWRQC23Veh5TxnYyr",
  "key44": "2yZcqaVuByNbNAwNR5q4xdPTkARD58YEVDbtJSzp7uoD8otxywoHdE4pWs1aFZiv9yyKwc44r9Y3Ftp64H3E3Yww",
  "key45": "3obo2r9FuoaserQPvh5BiHyoZYZ7jF4EPg4CPYNVZqEjr7QLQZAZAWb655DeeeAexbcUGge5jC7uS19eLGbeg9cn"
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
