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
    "3uJ3L21PgfMBjEqg2hPvgGjG66MfcCRD8kgaDtCq1cKnvhn6aGD9XNLPvCux1XyRBB5LG6PbAM8BJuztNiWddwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sra5SzfZtN2SDGFqMZcqYxE9dMvKyqVt3Q7Ehi6kDSnX5xYMbc24X3XXNDFLTG3JGhtDKrJ1af3ypybrA8vYNwV",
  "key1": "LEB1xdo3HvzwBnvJ3iWw3bXTgcu1XVubxKibr25hyxUb3EZ5N6GCoMMRi9yNxgWTLv7ZTY5eygNZE2PpPs9i1MM",
  "key2": "49WF9zv16SmFwyqobw4Eu2tXPtzXNT9ipyd1aBFAMU2krEUg9KtmotF9L9wo2Wh1cH2U4iCpeoTiJHpFV8HyoSaq",
  "key3": "38rUzUuAbKzjTcVjhe7dARgEJ67uS3BW4nSg9PBXfLkU5X1GB7BEd7feurp5opix2ZGubDdVdXaEuFGfizrS53bA",
  "key4": "4JpNzpPUP9XbEw1XzjLAEod6Rxh1eFBrHTDGX4HxLHNiBMZbypspasvc2W61MSFfs562PWbsjbWuDJHzw6vgG6SV",
  "key5": "2my9rD2WBsC16niaUThqc9MPPnJKBrGdDXF69CYcXkcH7etn4vCrCgunnYQSDnGz9hZodUCWFqjCQGh33eCt3HAV",
  "key6": "3gmzVGhir74D15ULXWyQAZ39pFrPwJrYMxQT7xFkWHziywEK6VMLEZj29F5mbza6akeNgm2ugQKLxpdqXuAV1Zt2",
  "key7": "5zuRMRMVeJktFsx9fLcJTchDmZBFq4p5neBN6ZA6tz9Skme55GxxSHmCeahpwnzzeXf3NojKrzZB5cu9vdeE1q6v",
  "key8": "63ycxxZfNDQePd4DjYurW2CsSJoqjYW4nfjJYWiZdHvyyJSgHjnDhji1bjJUTpxKXa6oYSiUhV1v845r7w4oqvW1",
  "key9": "5UxpptEu4e4gG2pVKsBgqFu8HzZAVnR9qhfwgXmFvfPYcGUA1iVAe5ydPSweMDPF6BM4WYaLC2QevfW8iNzABosm",
  "key10": "5HKHJo7zzGTpVuv53jyAohjxMfavvuoMXtNfogVV9vdSvWXnmSTFHqkkMcPdnMU5nyfCcwh5eVwLnirCZQsTQ7z4",
  "key11": "3G88rcwfMnQWkENYPyKWC2yPnrHG2eMxFSm1wQUQV2pGhfi2isFTmdipbQBYSAUq5yNPf2dZNiVtSqhCu7hkY2zE",
  "key12": "2vDhS8NzhcrZMExytnapVfENHb96RZEuPHR6XYkCPkLeDKjFo8ywroABvNCLpFzzvJsQ9yhC45Etcr6img6T845w",
  "key13": "4dH6aaZ1eDqHJoRDDw24ph93yPfzvEQ8TaVerhNSgmhtFMMuVTZNmNidir4GtHyLNswYMDZBzbYc3tJPwZ8xdK2d",
  "key14": "3o22wWMdDoPDtq44p3LULERD8TFgTax6n84UpphzEugsZR7B8URqox6Ldh9HaHoCrzYyVpvLUhTq39qd6FYwUdQn",
  "key15": "3ZGaQkCoQnht2rjYmX7cd7fNTmB2y6LmQg4Se3CCzf28oz1ugMVZtRZyaK6bVLBv2BvsizUuNBCaAzku3rxS4AAN",
  "key16": "126GBhFwrQChKJZ4rXF4RYo9kVQnGAdtnCxVT4ma3bsWF5RMqWHCDBjpnu5GX53tUwVEGtzViieRbVhkLZcLLGD8",
  "key17": "2J57AG9EJ7m89jiRHuiz2Ut1CPY5f2gZrHPbiQjFm6pP7ym1Fze4UC7GaaA1JUtagRqpz93WTX3Sx118asdFWUq7",
  "key18": "2pGmupowtErLLrh4e4B6xYAA6LZnG7SGDcx5StMjqwJm5axytP8MFQ6xHc4u5jwGoQncHVHDWMugfb1YQo1cKugo",
  "key19": "5cEQ2zv8edCkPpGfj1eK5N2g1Qgf3aGvFqzoRnme6Ws6U4gJ5zXaDwfiRB6ienmfD8dMgjkoT7gQZtzmmRaxTwJf",
  "key20": "3z2PVei3QdqyTrqVf2br9QzdMNrQJDcoKwEr3wc3UPQ13JKWajMdCuN7GBMc9iRTZGx9sMEtWm1kZwzPZzoGcHAL",
  "key21": "V9teAyevCsLW6onD3zvwCBNDdJRJaztme7xbnpU4MgTon2pGFVaU2zY2XaiF3Y6oNQ4R8L2nWHiM6ZASnuy5jdj",
  "key22": "5TxmLJeACwpBpGA28PRw6UYrFHCBXubp8xgGLgJzzB6Lnt6Zmbnttz2EsHZaVC4t9hqsh9xp1kdB7tcvthbyzTgq",
  "key23": "436UUTpmkuPmyy7Tsi8wmsgfyekRydM6n1LcNP7vU8fmFHHKRjEJB54J7TWhUa5c37yHaZszh6Q55g4ZktdfiKNy",
  "key24": "2jYQZP7DZopKaqrXTTGphEyNepkiasU3LnJ2eGCYR9Zz1RW14Cks7ZFrcy3FLVSP9ADWcmeuEE5Tyfh5yv5AhYBH",
  "key25": "67CxwBW7KnFQC7WaDVcC5Fvr5gPPsNmHQvGsVUKtDvDYQYDY6oPedDnWSXYG9zHKe3HNX53RyGtNtQTA7HebL65D",
  "key26": "53n7mEmk3sHM7mNiStwdGz1ZCQwjJtvXr4mtNbJoZExHckU9L9zuX4gw6oZSuJproF1XDkgMWgTmx4qF1Cq6YyGB",
  "key27": "3PuXPG8gDTsvjQenm4uL62jdTjSWFC7nXJTjRPBuDAatikZL6oTdhj3DXL8iEjU3BS3eagxt7QVuCTvSi7envA6h",
  "key28": "2TeCSYrQbGhkZ8Cd1LGS6wXewo6pm433HSq2D9jDLZGV86ccK3U7gcS1xDki9ZHSs9JPaCECgY5xvbgMRm8VVAdC",
  "key29": "4vfttpw1kjA75E4Ursvz8XFzJ2CDhiNFBByGJiBv64WwkzNEMzWG3nBeTmTdzvuyMJu3iAvWAGoDx1UNhwdR8HPh",
  "key30": "w2xNM98i5iDVsTusp9KQf2WW5EHVrK3MZHu7uMXQfvAuqR96Z5jDZk1tWw25YEGc53o1qtkaXRB8sLtVQwzcK7U",
  "key31": "Z9hzdQtygSsPfYk9vt5u4YZjUq4eokapVNJwftcjwfATmf1QrZzRDQ8MxUjwvFCmWdnBngvLNPn7SW7fb4aTTpo",
  "key32": "3poqw1UU3ZU9aWPpdf9SBMEe47PE1H815kWSgmooVD8heZgGea9VprhW2YsudxDkEMdoz1XzYqPqu5ebL91r6G7v",
  "key33": "3pZRRCvsCX65KMa6FCVjMtqzZ4R68grsXxQezaAp9qSvWSZsb3szxBKW9JJ7sieXxFsgBsuM8g4EbixDedH8Fue9",
  "key34": "597KM9NWiS6UCYA7ZES4LQsA1Hnyg1tZA2j9rZ4nvJYsL95zddigzQaXJR8a6S9R6EP1XvjFN2oyVVi8d38fAvbK",
  "key35": "49b8NLh1ToLzxApoQhZnrkoV3KzHgrkCqwHcaDFX9xzckXeyMcMSQ5b2yQtgD3F5uotrFZpGeigrk9wawL72Ehfe",
  "key36": "3GCKy4KsePzsNXdzP8gy6KyAVoxKn7mKM5QZ9EKnosxWHv3LdWFjtRX84TTvdEiRXWSVqNzxoKehSK3kYfxZx494",
  "key37": "4rRZmU9yTCwAj3rZ93omMLRDjcRXutWgRcoXGNHAoojUNaS17WrMUEqcri67p44pmffvRohyo3srwcrRxWUAgBL3",
  "key38": "2FMQDa83KTRdaD9CVHD8Nsm1Eq6BSwCsj5m45UNbCoqAN3w11Uy91pumV8L1jgJsv8w5gL1PUju4K2aQeD7VajAg",
  "key39": "3H8gQGrPjAWv6NDa8rTQg8vw6tmVF4hjYQbdTAppiNDh6tgZtkB2MApmZQyJ5DQ6y6nM8fmZN6Yd7wsETzqaq8Lb",
  "key40": "3spJSDQJ6NzVi9ozNZVYBXBxtqnNnbQrmi5uWpnDkTERYw9o93NSokYZtVpB9CwTwWQ5rNVshsHYfFGwEczaPkAy",
  "key41": "4nDwj5FziX3khgBu8mM9mruuyyDAH7YnNn5b7eWC6aLesWNhzsbDYrYNZT1zdXHhJvEMHHDFK6i1jE3NNcqg8jN7",
  "key42": "4qdaJrRhAxnNDnP9Vf1HuAvJqRPyzJaDkGcECSXe1qHY9RV6mDaKTQ6SsQKATHFmF5djMZvkUQpJ9URGbvbSdzbD",
  "key43": "2VQjhpbMCrjusJCdXFss96tQAZhQc65uDEhK1YcMQqE1igEYL1fkSM3ycFBxUHGQj85mLk5kSZY8XxNzkUCa881X",
  "key44": "5xyyU1yUDzYueJVEf4PREys7AmRDi7xopYY7nyehzx2SR6zg9CtR2hsUi5Zm1zKuc5hoNeY6xjEj4GLtxx1uZWz9",
  "key45": "2RGR7Tr1uJBE3rfHH87tiszKdjQp5KsnmbQntEwZXdcxvoCFzNgH2tjfNbSttaxi5TbttT9Cfmos3k4Xqmg9bCYt",
  "key46": "2nfUiwe8GSyfgMspXVZMN66DseS9VdUoQgf81uyigAL5Kotz9QPh3eds5pNbTYBN4CAHBXuJMv6Th49vGHtJJwXZ",
  "key47": "48o9Fwu23rAfrggYDeQxNuJMgK8vdUSgAEbAQYGQEncQbks5vg1RN2updByZsBk71vM7sD6x8Wpp9gxVk4wsvxKh",
  "key48": "ox65gzE1Gq8TNbQpeGHXuKaW47TvPUQysed7pLZKAacxXEwBTQ3aWzRuUVMmY41EvXvxoZTdTziyqtjPWePvyDA"
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
