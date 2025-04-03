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
    "PhvqgC4cE3X1AcptStvG4qnnueCRg4iYNLsKBzXstnY3ubunWYMjoe8zixqUoMpMgWCNfRFL7wnZPe1Vv4Yjt76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8Qip1nEdHnDJT1fD88WhENyeSt594C9pRzDPoxHgbb9CM974MbE4gJFXZtij2pENWxV61Trvkm7qBNYWTHWmV6",
  "key1": "5cSnZDJ4nQ2t2r7PGTk8xWxHyC7cokw7TysSjVMiskWd1U4t27eH6wqWu2woA8VdzT6Z3NheGFX8yby5ChZgwcKh",
  "key2": "2DuyNeH5EzGuyg6zVsiCABoEZzVko1JUzabhSjqK62UrGZYzLWbkjrAB5DHjoQvm9hQArXFEVjt9zYfn734XL2Pw",
  "key3": "4dL3km3d7FmbcvQAuB9dMZYbQYxPCKwu2N8gNPFCWxUaJWaYmiPGn9uEa6jF8HB9hGwxAf6rhqNWsfZGi1G5bK5F",
  "key4": "2yG7g7ETxR5oJkYQCafYTy6br3SyN3urFfvKpmaXG8J4s1PthAcD8wJZUt4aMVXPK349kCz7BvfYzuu6QKNTjNVW",
  "key5": "m1NnFrx4woyeEs9PHjUzCQKYsHv2XubqnCtYuNcj73CAKRdAZdZGwYVnYEzsvh7wdLN7WFRKnbNAV3o7PRKimrk",
  "key6": "2ibSw3qreyzSnktAuSEh2ACvYuhQHRNNgSbmzNHhFVqvYGjhEm6TtYaJCftGADkJNMGJxfSKMtDTL2naC2gq9vKc",
  "key7": "2DhYqPGzhwD21X5NvguVWpTDxEiKcKbSubY4T4MLvwdtimTUJKVwAsUswSP9BDye2ywaLsdY75B2o8AmaTih3AvE",
  "key8": "SYpZE4DcU5ezvHvbZpyx3eGGqTrZXUCFunik4VYNMXBxz9sxyEcGEyJ9wE1TrhLYYai6kQTvwZczVAJ2o9STaWL",
  "key9": "2YvRMVWCv9N6aUJGzkCQTViZzKBS71Qq56ooE35jhEyuXRYr5ypno4Ab36tqCjVS65eC43WhFjHmBzNgpUytrELp",
  "key10": "2LubDRTx1VSNnWZELpuGhqKb3iJZdWK7yUdtnSbm8jF66M5iX8hxK19EzRy88osDoV5jSMfYpvLBnSLbU2BkZRdT",
  "key11": "2iw1qrZhQw1u2ejeof9bQ9F8CpR8Kjq8HbXovTG5BJeFZkFdGdRmV7nyUj615WzyubF3q8pdiKdp7WbmdJPWFc24",
  "key12": "4zvUc1qUdGd9qCo9dQTrJ4QQCg15jAbN7d5EFWe1qSbrVsvgLAQaY8hm5sva4c2vhvSLvRzPZcNpp22wPuqEFujd",
  "key13": "2EXp3SbAx9WStF2MGjUyLUwcH2brdkWep1sWanbmFQPhLKjoMbdHP7fwj4j919QUHC5mxjPg6YSFDWnzbL2pf9p9",
  "key14": "5aXabsUHC2gfeugkjvjdktjfu9XaX4emrGPfnGHxhmGXvJjUK3UexBXNogZa6FDzsmEKef49zyaFgs39hXjdr95b",
  "key15": "2PymcTrFaM2eNZojdcRcZwoFVN5Esve8mTsLvbZJ8vuNePEnRXMKmSvKMbELFsRHhEgJ3ytUXz3MsDyjzjhrF7tE",
  "key16": "2Tz9FuwnuKvJ2q3d3sU2NYzY9nDzywv11dEVkSZa67qTfNRgrBhiV4bES2EHx1tfVbxD4iutbBdZnet9kwxzSqGd",
  "key17": "1EYEWnLS67QQVVArSWLXPnRtj9wdvSFKfWqHB2dhmPiyHVeYUW5kSEZay2QbYT3GSBwzSJkZvjRFM9QkDRyvBQm",
  "key18": "5NYiFZPjRR1tq5YqXm5PUMbwk4ER93MFZ9KXCHbyrBG2F5twqXjCBZ9eHPvMah926gM7pwPa4RP4GoaBwi4kKakn",
  "key19": "3KCwMabS2Axcgy6yANgjoXLcv44Hr3aEFvP9bJaG9o3ta5GRWcRJNnD229L3mN1gDpec91T97k5XRXK2ZbcZ6MZL",
  "key20": "5XeUrrRFo6AsdLxvWd6Tbicn132ETowcmVCVWSjkFW2RifJg68X47WndauBocVAGSD8UKtQyg4BCcXVobk85u2Ln",
  "key21": "4RcBKhi5M998afT9Nd6vLVU8kaupi8PMxFwrzprxPqhiR8ZtFSji1vurw4KrVkARZundPj3WKftzhWcJws8mYhd3",
  "key22": "2qL7ETUaqVvpJTdui9jDNgqQS17MaiASFFgYJiNKEjhbHsx7w4qV1sLD5nHjfuSstZSLvdvui19rkVtpXNHCPngS",
  "key23": "5Qrwu9ERmUdHuV5Eux7eHan6yKB2ZXfb6GYf8UxnvtsAasUJ4t1xxcyocQpbVQTkhPkm38kunFhA4wP2MjErv9bV",
  "key24": "27N36LQuTnsbJxCiWoF5PqedpF4Z4GGkWY54JJzPRcu5Kk8vmRCpTYqmEZ6cwL7HmVwjc4SkDPLgzugD5nKkrpq3",
  "key25": "3vGVWYC9AbHCB5QF6tYAMTpTj4dVqEBy9cL2qujcqn94JfbcBuuFJ1wWSQDBQ8MAKRTpPpTm7ZTpfLWzKFYL4WaR",
  "key26": "FwQsXZKQRRMuxha4YcyMcKtXGmTyePTnzRC4k6WN3Tno25eFjsZGocb2Jw9QMmp8JerGxaMFLsLCizvnTg6h1zw",
  "key27": "55ZHG2gF2n8CjzktuMyfBu31QFg15Jp99zZjNnfFFC4EhemkiY9q31ZAw2v5dZbYZqecUAT7LibmfBrr7JmTAsSf",
  "key28": "5g5U89wWSDLY2ts9EoFWDWr1p43Ty7eCFdZK8kjeJJDTje53o7bvP72UWBgVdaxScPvwhibSc7nDBvFunpcnRw9s",
  "key29": "3caVVsMV9h89pKsVv4egNsYk8MkXREhixBz4fVg7Z8oLvfwtgrfiLTHF4wropz7GxsZjv4jTH5SQd4sV9iT9RSnk",
  "key30": "s98z5MU7cK17EkZ3mt7FHBp2RmHgAKyDLhwBGTSd1Rt4KEnZpGFDcz3zqwnvueieJujeybtvcvncYhq15o18YHe",
  "key31": "4ShAD3zsxM31DAJopxfohdd1u1dwn85BPA2CyGuVbWSBzp4o9RowxBXscEPZxoyi2So8vWiyarniGgAq6SvPEedq",
  "key32": "2d3FRKK6HgVTinwYG6YRbxYBhpXjcziVDPuV2TxsyaqhoSVFPjJZsmw4mFxijUsGLsmF16iFriPNvBHkS1hkxwSP",
  "key33": "2jX2cweRUbKXeH9pqWoxenuKqCamaV6m9Y4LuNT4zeYZRgnzc1RNsBuKfPhkRDX9Ws5NmGjWrGJ5gXqK7zYXCSKv",
  "key34": "5NhPFQjVVXJwPc2kjDWvinfcbCdCp7za1Kv926dpD1ukM1PWYM2XLo1wCcokP7Wgw6Rf2Hp3hvQUjZGx9QXaaNxE",
  "key35": "4Pzqdd1XVyQFuZ6ktDfTgMbL2efFRDjWWzC21Uu4q4ncGYpYpeW56egzvXKEzdRDEqYfK9h4ZuFHLmM5CQxMEufv",
  "key36": "byokstiE1xZr7mFzpMbvVxBWJoBQKvRE2RQeH8V3yKKPmstVx5mePQnFEQLy7th9hZZmL7LyJZjcYixigBLZ9AA",
  "key37": "2cEZr9DtCg1jhqtWCU3JKK2ficWpcbVpXbRo3Zrq2VKYZ6QpAm8wcTL6BpLpX2P5G33ZsrGhrkf5dQVU6ZX435su",
  "key38": "2PY2Pw1YsKVBkTKfZUVoFxRzsB4kkxNvoKjVvGsyT2DXnJB38sJark7R3RXcyP7WshvvqiBbSpJWnwX5GC6XiGEu",
  "key39": "JwmhLMYFEHs49R1Ns41Woc3VJuhX1m7Lmgcn23mkmrYsH7JtPYx4zX1YCchPb94f41fjcSdmxkLRysHF25GQ3A8",
  "key40": "3kzJnaxjH5tXQ8MEv22uF3DPj4yvEsuPJZ9PdQyKm6ZUptVUjGcdjxRoaDMZcpa2S2YqvUTmSyPtFetXA4co7a43",
  "key41": "5ys81ecTC93jXJGs9SK4jfjrn4ZNBrrKaTBg75FXGrrLdsmRudCpYjH7Mwy1DQbgqwDdKN5oupa8KwgESAtA31D6",
  "key42": "5ytwLZzb1CFJL2xWxT9mkgZU2EygYoymPdate7jZo2UKEdi1BtSUDsvEwX2kF84KHKgb5Y4iYU4BXdZqVpGUb4J6",
  "key43": "29C2j3fe2ArYu8LykW7AM9XM2tGJLzs1kaB8BW2uRHFHDsTEsEK8gj2Jw8Rj59jAnwVGmeuemtsL8rJ99Jpz7PK1",
  "key44": "5xFHaPrLJwo4VTgpyhpsm8DStTWBmvXSJDenoTy4LkJLxhaqZpPgMS7xtNL83yEkT3RcQGw1ZZ13ijG1KXySsf9n",
  "key45": "tJmjhpLsUrBzT87bNdDxFM2XpYEQA9kXLAJAKhhWZrjLxGdiZv7P9S3bq3Zpu3GSWZTmVb5hEy5QLAxYbkpNUTE"
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
