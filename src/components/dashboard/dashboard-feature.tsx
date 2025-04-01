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
    "485BmWKPXAqwAwVW6hafYDsW1yoFRXt8XPyeqVBqLqKmh3u4wnbTL4ehBZfScanyHiPKQZLkxP442GKhYLcgfxsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25quNmaoaCk1FtvyPceZR7zxEKpBAqbUfAWABB3m43NnRjGbVYheHdyPFqZGbjuXRs58LumaaMT5iPETLyPKGgby",
  "key1": "4KHxmYMhQBpER5Fwbx21v5phXyPWukFKXRPQUdhc4XPHc6oRFzXYm9iV7foMdpdXw29J9ZEQwLJetZ39u69HZWcg",
  "key2": "N8EQ62gz1f6mEQgNERbjipXTdtB8Gg5w1R3KEL2RP6wM7eyjZsyCFTssjTtTxdPhb8anTLHCtSoX5EnAKf4yFzJ",
  "key3": "2iPBxR7cEGRRQhDSkqDy2whvWcTc9ZAPP2KEyXR4mbx93Rg18Bdre9j4HTSnQw3hso757x2uwaY6hYqENfh94kjW",
  "key4": "3ome6KRtT6v7NQRgMViQJmcyWSxJuemDGBzvib42HCxGXy4NmmkURrbxgSPXRPAZzBBKo2VrBvBvB4uaXsUipFZK",
  "key5": "ZyeBsy75NXEtvx7cnP6Yd9jBm9a9VLDRQiZJoahfTAyC4H1PTYPDBQ3Nt8YxoC93vtxu6aY6tr2678CnLpnfsy8",
  "key6": "647dBnZde2GHRcnLFhoT84s1SQ1k6bQh7C1bFV4uR5U6jUYmgSFzYLbiNRuR5xfQRK3KtApUd6yySUrwJ7uAvHaJ",
  "key7": "5R6qoNMkiZuapB1x2UePqSywGi2eMtpMBP7Nd1wcEcACqZBBhJevU9RZMUYmbjjNYRdgto1nCrGayoPtCw9PVCkc",
  "key8": "4qZwLTxaqR7APAQQkBrvWvwRBG3KU5BUatzREygKdAu2WFGbpUpUUKz1nJgn65KmzZBamuAxNrX8apAK48imTyQ4",
  "key9": "2MdyBGhgVwo492TYgrbaWPFipDSNwvtd4xdYAQcKCPfVdWUXADwWfgEuHyJFnMiCJkAj4ZwhPypVLL7n5QhqHwxg",
  "key10": "3v1oMNAaf3hUviQH6jr1hoonSn3thpM2iwLcDWh7QUazTewz6sp4nq2zkCj8FyfGyEWkAcjsxL2wgTJ1k9mF3A7U",
  "key11": "67FXPqmYEG6bZSX7nSoBv1xKnXUi5GScTCKbELCSwLkS82T8T2K1crpgvw3xU86RJpvaQSxbzGq3PPyPLhYA5GLJ",
  "key12": "Jy4eANyCvaJSREwVhPLB9WkpKjPiUrQzxrYPggJKAepf8QB2vtk2SWDmn7jv6WNS3oSykswBhnr9mZR3iSmyXSW",
  "key13": "2M7ronT8KgJXtC8QYtkiqZ8K65bXZaXqPK3V1cZWf8r1oPb5NQknd3esX36vNtCobw9MvMsjuSAaF2EofbN5YvyK",
  "key14": "5Gbzoj7Cbt4AyRejLyPkGE3VPE1b1mkzZtgRmFyomp7srb9h9uQL1nKqtz2gm99EmvCTFQHZSwfYDusRH7W2zi6V",
  "key15": "51vWtXfD3HrRFHA2w62wPKf33YrUMBXAh1E2WhhndxGxRdYYUDAk3MhZT69Unc9qJeKJdvmDBCvZWySGPDaCs8SU",
  "key16": "2CkGHTP7zQGhu1frW53vGEMEDg2DHn2UwseWEZawCVig42PR29PBHRseSPwkHENogrhCvRbn1p8xYxuv2AXJ5xcL",
  "key17": "2LW8e3T3743XLG9S4BoSft2ZbHFxM4epB1it4bEMF8McTy6aRMjgAmBEwKjpzmgz7pBEQviD6KUHWm8Xxg2WDWx6",
  "key18": "M9vi646LYtySCBcynFpC3Uw33jidDJ6e6fSD8SER4zGtiRj8Cx7C3c7wNSiLQFvJwfnduT6hQMwGfUGQMSQ8bqW",
  "key19": "4UXbg3sfnAhkUDRSUsYZm6VPgKHh28dXHfZ427xjqbS47Ui8T2xb4WpDnVV89YbKUMbQKVcJMvZuSGkf3xF79JDi",
  "key20": "59ZGfatmo4jvSE3XLZWQefa6GwXJx2dkW8VNVQNtp1n87y2DM4QWoKM6gz2qZ4asXegSiaQ4H7cJQADQvKqnWJ58",
  "key21": "8gH5DSR73sthVjrruNwHRg3EAh5r9ZJjqDZYu7ox3ZuADcPgcKJpnyNyUzFcoC6GgRxqWbDCJzA554Y5JWLWgek",
  "key22": "5crk6tCsqBMdLZ8v3xNZmDtvzofzFTEq2MHvJfcxHo2T3G1dE3RYde1BHauzNsz5tHjPbha3RqHWvowFBzQuZqHR",
  "key23": "FXqra27xD5JasPn7ALqYf9jszbKAn4wqtSxprZX6debTZYLe8oZoSKE4GDpcV9PVVxNvM8sSFFp7TXnKU4xLCyv",
  "key24": "49YPvCZe1a5ybpPaCxStw6WWCVDjN2QjiwLMaSes6ejJvCKoiJTScjAkrQhUuq1k3yiLKxJjLo9Qo7Mi2doa3XfW",
  "key25": "4m8vJVx6qGSkc7Z343krARBLk73Yvn5bViLeuZ2bkLxLywxytK5sRu1d2hikymkHmrDuwo97eD2LjXc5R24qPQAV",
  "key26": "2xkpj94N4PLGzYGRvHV4sMmdVC4xtKAKhu7uLQkjkQj82NmoQFeYNwfhe36icsgV2drhq7d2kSAh1SVeQ3w9UJhd",
  "key27": "4rmfi7baVTXrREoZqpk3GVra92GH7aeDwY6TdYJNFBcSbzYRZNHumtiiTkbmm2nEKLmyPX8iHYanqDimrp3enNsq",
  "key28": "5X3Z6UAbqf5yQhtyz5GkV6fd6pwacPzmqPbfU72xh8dtMMUx3Sgk7EJHNdaH8Cd9jQtv9DtZZRLwVg5CJafKjVLB",
  "key29": "parmnE4af88x7ai18GbkUNP2mgB7UkUzo6wDvxyMsH8v4WnhsMfx5um5mESM2Ps2L51cNafQ2LPqJdaftTuKxuW",
  "key30": "4bjPK3T7i8U5p1ztxfPeeNexggumuk4wx5sRjP2pzMQkfKQA6r8852ScxRv2GAPsY4HHK6X3f3w9FWCua4iTMbvb",
  "key31": "5Z8JgaX9hx7u5efavb4wELu4xMiRQF17BHZAGQmjfxg5F5RoHtYpDHwoTiL9qp4fjYwCCvPJLi2qCsV5DGdj7yBs",
  "key32": "2whMMo8LBUN9Buu4btsX5ehe8btxRHeaMek78Nv1FhK4TcMZLBG34jpcusED5iLXHgEQe9zCNyfxCNkVFNJvXKfN",
  "key33": "5K3MP2SANm4jAcWf7gapmBG2TyBUpwEyXN7LhHytYpvNASDHQUBjAgDRu9K5Qj6NocvWVr1bia3UfJH2TNdbkJfJ",
  "key34": "4ThHeEcU6m5ZZsspBFpcvpjun3gaMSRpiAQiYdYGT8Xb4K8ct3vZTS8eLSaJ7hToFVVzzGB5RHFSyA5hFftKUxiE",
  "key35": "3FaeKwytxA4DpP3TsLr6GZusUrdXsbWRqDVF31WcZaxuR9tvyYX51rfLtLwqoMsCeMgHPJvhht2XqDxheDpgWmEA",
  "key36": "2gjsCCwfCgzBQTazwrRHxiQDdKweEU45CypdMS2T3E6Ce5iDqm1P4oT4PcUrmG7C1vEehtkS4btdf5KQErmquAHQ",
  "key37": "3uPtWdVTZ4GdiBgEoDysBXGS5R72pTtuMPz9MiAKcVCfVe4hp6twKTXiuiBmkXZNuGZ8QY8RncoqASabZHMdnYTk",
  "key38": "5hsRyQpWGNYovZeuKLSpzBtL5TfYBcqzFTbPcDhRAXj6Kyh5rev2UQXPLgP4FCW5ZbjpbhjKogHJm7YjmTGRko9r",
  "key39": "9aRZTgSu5FVoCSTExhyNn3iwoYnFuQTDgvg9MBYbXCNU9W5Rf1Z86Ln79WqVGNCcceV3rw2V7iSa1E6s6ZSfhpi"
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
