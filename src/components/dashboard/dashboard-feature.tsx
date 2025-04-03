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
    "3umTgjoQticboaZjk4UB8F3YzCHBPzSssJFoCkAPaYrHm4nQX58TrjAZYWmGoeEqTQo9PBLd1SFPiFCxSVj4xk8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m1D6wzFpwEQixxJfN6aSqK1hd1BQUtLbBNa2YwikaSzKT5NQWvBTVWbBYxnz5SCjxxR3Va6YwLbTktVYvUvVvH3",
  "key1": "5si15F1oLUa8QzwjtZC77uwSC4vDiaYWf1SyztE3jscFFQzK77tyJuhBm47fWPFx1XmyEfpD2AxxXE2P7Tj2GMBQ",
  "key2": "3JWjyfS5Cxvqfme1Zx5ZR9xtXMrMCwpSnKbAJkae1JTpoMp5FvVF75gsX2PUyT1qpYcye4B1Bt4e9pZcevxt1yAf",
  "key3": "4rC93bXmKkaP1mPcbRN98FQ6NQ1MtYtR84MjTpGxLUKMvpSPdpxSGdEoNLUfbWLjeeX7zhDCwexZP15LEe3h1JNb",
  "key4": "qp16HCBcKLqABXsn1quZExH8VRPR6m8zo29rjpTPMpzNyVF7rmCzJ4r6GCUGbXBx5Azv4YarY5uGqPtiX5RyEWk",
  "key5": "5NxQJZ1WPdwHv6Azn2Gi3ntaZ1n75vfeeNwt4avhed46TYBBTPY7PDJhCuX92dXJdGGjj9AB45s2fGE9HhnhD61o",
  "key6": "4FrNMj9kEvCmeUxu2gYaPXTQLJNDrwokvTQZxd9L54JYfAXSB7v5qNB3CSsotxSfqXD8GemJ38WPGM9srXHa3JBg",
  "key7": "4fwXRJ1aE55ffR1ZigFHjqZhdsKGRjSKZNVBfAwHi74Kr8nT2Gbp3QB7LzwEZ8QG8cRxYGwaV4VY4Disy1TnkzCm",
  "key8": "5pYwMqv7zqVYUSZULuhDhDfLPgun2oFdsw5Mb73C6GSftb7kCNyZDybtsHfF7nS4E6CG1VqXq5w95oqB8QbRG3Er",
  "key9": "3VUssYbvCAYppCwE2CrkK9fkCxuiZMFo8fzwQF1y8tPTsDepFQap18QFkyXGwGTeVfgt2eQjZ6tEQUiGGsUyB8Yn",
  "key10": "3pn8Jvb9kRRP6TdxPJ3LMye936KyvCy4zEas487jYk1dh3sieyBu3djfeu3BDcyP9P9arsQ8BRpjBi4onoLYaJE6",
  "key11": "GRpPMDkH8PDX12dk46yye5uD4jnicEkrugY1pFuYYGTiL7RjBTtTjiaPakTyZPyjYHgqXNq4eGDATt7RYa77N44",
  "key12": "xQiRtNzdrXsffEzjgf9npbd6KvE7fNpay4b8A5Ys7RLiHyK2EecSPzefLmxGhxDNQDTthEEGuvK8rEoSVLAjTcy",
  "key13": "2yzoqSs34JTFT7uBzg7ganWwARoXLYGzovof7Su2MWEZBcbCvfAtVmtZViNWfoSYnUXYsrUEPWP6zKL1YKffXztv",
  "key14": "4y9UdxCdv9n89YfSrKzRdh52JJEnMNy8FskXYGh52Xs7U6tPTiRwK4suYnoSuA4M9S1N7DpXHrUYKqaevrfa5X5o",
  "key15": "EueEiE5UhgXHBWwZunXm52bjNEuEMK6pgn9D1dCMM9c1g8VtjEHqnLzAv8jNsKRUmqPuUoofEpmevSewDdX8NhF",
  "key16": "4bbZ6tMFKwKLbecjt9ExfjW77gYkz9zcVJnJkpBUvSdkaCJzXEFp2g2ebh6YvKNz9631RSk2YwYsDsmfqJzgN2WW",
  "key17": "4krQ6K4TBpXhZRzVyDHoSeRHQhB6rRsY3tkj83org2L14Fc2BzqY5WLQB4jWKDEY3JamUdtHHqL9q4Hcfu8kygx8",
  "key18": "5pywpRJoPSZeWKHWj5DWzX24JHfo2tfbopEL1CCcfhsTYKAdc5VYZzuf4igZ6izMeDyPjnAmv36SHBR67g6nJppr",
  "key19": "4XojmRrqjP5cu9oci64p7abj9AXWJ56CqHM5qzC54Lt1YeN8HX5FSeUQe7kKqM5uFWzzkt5wXed3NERSUsKS7tiE",
  "key20": "45A6XXVdVrUQ8KNdmKdTGV47M6yY54VLMphKq7Cpv1AjNwwimXTNpiUGPNevGT19Mdszbhq3MFKiKPVmDsJvd1bn",
  "key21": "4eWuvFiwirp3YqhUbFJ86gT84VhsETz7xy893WfFV92skVZ5faHu9exRYr3iySMtinQAKg6xaEfToVBHQx6DSqs8",
  "key22": "3DSXxEN9ewuTsy4TobDAUApWexcHyaEhRGw6eaUFzygsqsDdVVCunxX9hsCdm6rvGhesEBPWLy1Ace7nW8BCUaaR",
  "key23": "2E458pK2ZPWFdqdqJYqK6vhxBTLqWHVEM7EEdgoDyXXjJUnmfmyyxhkboQCBE7hYJvG79EzcshqmqNacp7XvWTfy",
  "key24": "4z6ZXnMWbm69wMNXkXNesG5m4dxVAVPwDmrND4h9Ube6mpVVwiLSrkNZ6uzn92QBdsCck2fxS9UaRg9XvNweMUNj",
  "key25": "2cdwCwxTYrkG2m4Nd84KJNNpsxGKHmwDKxsXoqZp6j8HgKwvD5LAxGCqCRFAgXeVjQeNaUDhMrGhicFLGyQnJpAA",
  "key26": "3dNxD9Fy2GYqCoG5Js5NBQhTXK9MvLNH1GsNy8bT57vmUi7B6j5gf4f3Pjz9ZDQYnbCjtJtKpKXYmp5iKcbv34W2",
  "key27": "CyK2uwyqdTExShYYSog5jr951uK8uLaFdnFm215YLXpVSpKBfYLyKS5UU4AR7B8Qg7TXdHFgvjDbxs4o3m667Dk",
  "key28": "46LfqDuWcdmK5k3LyKK3bQumjUbmTQcNUZuWuANKWak73e1LnZGbjLkYigtf5xu4ms7zbT1gUK232o6jByJNFX6G",
  "key29": "2XRGNN6BbWURQnpjr7zGAhYgVAyGnWyFDnXUxXncCHyJRTiRtXcBCD2VtfitsUMd17LtKZ7YHpLuYHQ3DF9JRtoP",
  "key30": "UDmLBspGSH4b5RPcNCNVZ9HQr8ES257JN7cF6xm3A2DPCk7dwkQDNQ3fZ3R37ZsMZ31FnNsqCRJEDG3d93J3VyC",
  "key31": "otsNeDzY3922hxQffVdpAbnXTx6yLcETyA2FrwyyFuz4k8ZVU7bh8fsDVquVif8Y9UfY8NvngEL6oAinxWAkTvE",
  "key32": "x7Wcu4HsQpa2AtQYywXWhQc8rtAt5ppwUUVvXMSqpNLFTW5WHmPkqNndU3qpyYLoosDQc8fcaJ8gaw78ocvi2MS",
  "key33": "LGGGcx13aREhS8tD52iSvAcEDyngtstPTXuTyFo6mbrT5j5okW6RrgxvfTJsnacBqrBoGDcLcoTN7KCYnFv1xp1",
  "key34": "PXkpyhVj6StzsHeJx5QiQHyHUL2Bs4UhuYDeddnz2EJFMGEAMkXSrucRM3oS1YGGXYh8RbgKPYddR3DVyzfvHeH",
  "key35": "4vv7KFQmF8ACTZg8fJziRB5yVTmbUvdDZazsXtjZuiRRasoxQvi6oJRKHkjv9FA3516rhLCC6M443myTPiqao4te",
  "key36": "2K5safqbyHcoDjd1VS7nQHw26saQQ1iSdGReSaANXsJzGXg2Q4aem26RCDTWu5fvnXSsmpn9ivgAqAvtHTsXn6k6",
  "key37": "35ZPMSTpLQGdxdYpv2WG58ymDuGaXhwqQLPZRDsCyvrTV29hSA2ai3mFY3x1o3epryxjNr9PezrCtb2nGLbeSUmT",
  "key38": "2mG34Y5jRNpQcQBhiHav8yNoMGtQrzLJdQ3L9tJTT6XoXDffEe9xeKNXP5L798XEjtgNBkn9EcDyGSqDShZPPJfe",
  "key39": "cjauKBN6kqhzY6BzBh4gAe4eLmkXEhbeDYeKCYbmyLmqidMt3JnahX7cCtAULsqZnHpbvAax587zdJqsJRTLHPR",
  "key40": "qgvs5ULvY1W9CPNexDM1C8eUmq35mDrm5pq4fmy8Md9snNwdbtgTr7eeXtDok2ADYhXWpKqMNwDWiGmd4cRyJfE"
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
