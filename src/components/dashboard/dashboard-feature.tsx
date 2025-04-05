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
    "2zpxufNUFXNR7ULJgAKzNUm2WHFYsRor5ufMuJn4PBBz3vei85X1u1RqRmm3VrjX8Vubu5ntgzKd89ATMW1XdvVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ifNNL5p6p3vVD3TJdeba9Nw2FBUj5EMz1GGZ9o3eQ8P3nF7cmBNNoYoWn12fa2ZTdjBe6QqRyNtWyXJWSSkRpzi",
  "key1": "YCUpQRwBiSMtiVcWxXQtmxiF9iaxQH9QTRGnCPEYfmg5nV5qrvrBMensn4eLTwsRzraZ5Bb6PweJwNdWCTcWrjD",
  "key2": "AQoqgeGHXqcrux8qzCpK9wbXxy9dmXbbz64Z3zPynsyYwyptAkwTL8ZxwD7DdMCF7qGJnGoQwqsBZXSHxYVcUVx",
  "key3": "2chqiNWpnDfiDpcnc3xPy8n8y31Mt1j9QsqmsimsB72NgMtrijuFGM1tPW9XDbh7TNvxWoj8wonkPYogxTWeYpoP",
  "key4": "5TqrZQP6svpikkjY56w6R7FgdmwS44fvtR5ZRm2ysjtXfCPiiydf7APrqKt1EPZWSW1cK6z3iYyV412zEAuCzMnf",
  "key5": "45L9adxEBouBgtpit6tny4E3xyaYkbSwqeweqJNougGDRrLvFBMdusLdg1a8jNbddqZm5XUGNayX7VBYagG2Uu3N",
  "key6": "4x8ucNqfRnnXTRozTKocmoFTE4w2DVcXLWE4vyLhkgtyeYu2ki8mqK4FCefbYTwjCR4EeqEHyDcFmzjrwEsWDfZ7",
  "key7": "4EnsqbvgqC3PejS5VL9UfUquxX9UdEtrDVQvxtCm5mCjkzh3Fg6kBtkDV97ohMz3AGzx2H6DyLnYS7Vo45tg7sJ3",
  "key8": "rsVv5WjYnPaZUmLuKViksqaKCmXpp5ZFNZUgc1ZU7Nc2e8Hju322D2Vit172nup3yc8Adf5A7QsxuXHFkGYWmRD",
  "key9": "54U5VeuWqU4EBiAiitm6ceRn94VctFGsh9KPLESKhgx23Ctnbd1DUeCL9q5c9n8m2tsZ9VQNcVUUDDhcAZo5yUyX",
  "key10": "3ELkWinK81CftF24rqyUXmHSyn5aQQrGMxJfMS9jca1SJy32rMc6dT2fnav27frB36ZqL4m1HXh2x8kPJah6Ldrc",
  "key11": "2A3T3ofZRvibFsuGWpyk7iqhJfBYhG2QmSJvdpuyomyZTpLVp9pm4G8fGzjontH4E5bKSVyhakLXE1ngeBkxU8UX",
  "key12": "52LKsRRHhQ8r4NSvonhAfyy9zAes9uJ8mSMeFkzSt3yaF8yrBu9NYQTJHqwA3JTKRqr1n9EBQrExqKyAQgAcapGZ",
  "key13": "2ifmVAT35WWddQ9tzSaLA7YtwM2KTznx7Nhy5UyvaXqm85z9Hin8yKGrXMYuA6GMsyF1Gg9X8eQRPPQTABjr6gGV",
  "key14": "3pi6HyvWh9Z4AAKP8t1xCCz9QN7wArqAiHeSRGu716FogVkwNGhd6iAuTwyNyayKNGPuFU5AnnvD6vv2hsSvn7bB",
  "key15": "yhHyft7Aa1DJRTn2iSyuUXaJw59BbYcrBpuKyZzd7mjpALA4uyVkrkKGZYKdbC1WAwNvfJG5sC7DXQg2pp6Md8m",
  "key16": "3NyVNZik4UGSgFmZ7rEjmexcXuAsYQpbfeYyw8jP1jti4yvntkmA2379zvM7pt4mVGbFbKFbjSNwe6dqKfe2N6uV",
  "key17": "w8g6T6zcz2D5CTqQPoPZvjT58uQkT2ysSSkvqMUfRSkXDVEk8Eji3DdNjXJjpbgcojU8UNvjbSsP1tHB7Q1Em7D",
  "key18": "2VDeabnVVqQPtQWWH8ep7UHQgAJhT5QhFtEwqVEXcgjoWEXWAV7XhD6fh7ormZSUiMjk9b3BXn2DRvBpUoL3uvHn",
  "key19": "54wrtJTU1jyj5dxTLZNmnqSS1e5UipKkjqT8oRUeigENz7ywMfrqPYYzGDmp6Spx3nAHRt354QbARotDPfA3tKmt",
  "key20": "4SLZduFkECN1XoRXAQdtMfJbnbPo1nDrRtLHPXZTMLJzeAXsVVv5CzdjdcEXWes51fVWZtrKtyoBQy21wbcDAoSF",
  "key21": "4FfxdTmRZjMQKeRs5iNHZgXwDdWLB2cy7CdcfB1LngQYhDqWWcPNDtuBzkBeCbTMVKfRk55XsVUA7JN2YJycJD2c",
  "key22": "2jwiUURMLSm3MrF7U5aAzVTra5rqzJJqjZN1jYriU5nLcyKdVgkMvs7ComtwEYFHwQHbETJxGGWgzb3Y65WXGmAj",
  "key23": "2ruFtbarrxUc5KFDSknRfJWcPW7Frj5qpEoApd7o1i5KLxKrTRGX4mo6CLJj36mZx25RhEB3SDLmMZdGgUUrzBtU",
  "key24": "3RfSK5L45Wxrn9FGfkAy2gjgBMinCVmFGqnyfW7m7FYEc3k4pkTJEYJ9y4cWTXXggkXxtLarkFtSbCcDqDDiUjmu",
  "key25": "53eQrDneEp1EYehG2djpy7mgGdZwdbmPQZX7FcQtDZ8svm6hR3g4fobEQZXBT4Yqf62n3avSCpgjTVecXkxDataY",
  "key26": "ZcJWV5bCGx1jUSehAEpYf5hbHzwh5DfiDDF7nowKz9bPdMAwoRpS72zUgNtqvBiLQ8Di994eRLogfS34Y4SLMdC",
  "key27": "66xShMgfbzs1UfDBwXazhDB726TYPPBTprywm9Bfv9uDj3cYE1GK4ChkpCfMHJ17DvjztzX1cnaBZWZ7Fm3PhboB",
  "key28": "4LBLYHtsHyK4Jxc6FDGCs9qEjV6DQHNvJhoPJT4fKZSM3acNBF7JsaDmkyoWMDRiDLbC6Qj7DiFssjVQKBi7847Z",
  "key29": "49YVjKEdDHVXqMQzm8W6o6qoWPFA6RhDwpVBg33wRLhCQ5sYErv62ddihQxqRpewUgvpFCwR1Bypx8vEQqhVBf4x",
  "key30": "124t6YBQtVGnEpR8RE15QiHQkpkVxdhGZjbaTyzGVTmQ6JrGzFPGcyVEZv8Gu574CvcxV2SgQdixAm3g4RtwZnh8",
  "key31": "2N9m6ESemLXtx9PcFEvZuhkkKWgk47v2M2rgeDN8djEHNj5R7qWqNnNZg31AwC9hjtXYsyDAcezxEBCJeYKN569P",
  "key32": "2VPS68yHskP4KSiZsZERGBzhxHEQTaJHsErZDY3upB1SurqGMDj3T6YK4gdGxm16vaGhiAyHdzWcygT5b17iF2Vb",
  "key33": "2hGfSc2bix5YS8WJtGFbAsUr3VWtZTJbDkPsoNeZ2QYSHEC9d6xe3TGdhYJ9Gfrm3TG1adbC3ZRtBaMms2ZSiYqo",
  "key34": "brPkAMzXm1ddrQkxZicXy4MhHCHRHFBWRvgn6g2rpUPAmHYfJcL3j3CKb6wvUM9Qqqro5NPVpEfDuTt9ad9g4nL",
  "key35": "3mmSEgXpdcqaHBhropFYUhCepqmki977xBSRpgXZcjJPgM7t9PdBNVGYjyW99UB61YTAVRXAxL2SBye4gMPajAqK",
  "key36": "4SHk3FjBw6wTZrJNCe4Ubjbo7psZE1dfRsALHWcpyxBBEAegQF5TVdnUvSxoA3vma3YSb2LRp5o7LoZx75UHkf2x",
  "key37": "3aTqXfWtQecn2d6GPZVNi4FKLhUPaFiVRVuQfmg9Ne91AzVhExoHtzuGafjH7mHPX7J3h1FK3HwmgZqmYyTozwto",
  "key38": "2LECivpMva4xh2f6RVnHao2R8pELBW6Bbo6mhFthdXJP3touMNBLcDjxszGGfSgNVYY5sE532Dm8qA2sAoR4FZBv",
  "key39": "4hmqxraDarxivRreS9dXQBVCr7PGZEJPwdyrE5ATnZjvDQzQhPTXDScMLgeN7sHcKsr4uhBCrHt5TasdvstoWxyb",
  "key40": "59LCTRjkBvDQYQgfK1Mrd1uhfwBNrV7DrmncPiaDRUHN1XcL2eph6Vg6Bjqh671dUfjKjcDzg6fSm3wTtbz7SJ85",
  "key41": "3R7KE1kucCreAoiHAQ6nBS71cQ8JchUk8NzjnczBvBXzUgdEjJ3xwD5zZvSRUqdBhcn2NJKkWoCDsR1oBhUtNSyD",
  "key42": "tB5cKxLpXB8eJzWgNJAQ2ktr3hYSLcobdkh9HoFyztwx8PZT5k2bcoQMuNPLtcc6AC1HJy5dMqjbLwwGkieQ8uh",
  "key43": "4zQy1vf2ZdB6xE8y2SwhnDqgK2akoZjyBYMByDMEMhoT7Fc1qcPkHWSydXMPuGRSpY4imo4xhNFmZ3gZe4Whw6LC",
  "key44": "4x6WPWB4zj4JhqVa8aNBV2RD1Sj9hXk137guUt9YGHqaYHYb5VRCpaPZUZH2kJi5EGWRq1BYhHysRFXsFAoQqgGF",
  "key45": "3EHa15chgScpSa98CrRLGJzMBLBaGUy4xVewjSgc7tTHzH3BvnNga24wPWa6gP23T1yBUL7FNDLiUSyxZVQ828f1",
  "key46": "4dP6BC7RT5NFSXrBEbENF3YCF8K56eymYCYnyKhHPgtBrah3E64vQxR34wzAdecv1f73R2x5CpGVyEn7sM5HgU3m",
  "key47": "4yye7yKsq3tjXZDgjLJu6FJVL9RfuQwpibf6sn87QzTkniUQjCWYpdijX5681wAeqZZBs4eu74dcbS47TJ4qpwtM",
  "key48": "5UxMNd6PNvEXcWZxL3sRkUPkNYLABg5gXwuVz394VUELvZ3jCqA8gtTV451U4Gf7su24Yep3aUbUQP9zv1z6QkWT",
  "key49": "s56ccKGMu8iFpFUYKro2j763L6WcXzUQBnzf93afS58iAF5VRppZ5LfMrkuPYmVAJhJqPZ8rdyzHgc7L9q5TZSy"
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
