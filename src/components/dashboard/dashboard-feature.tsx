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
    "3h4Q4n5YoTfzRcGeN7fvB6QQEXqxPdRgbqCZvQ8bxt3gXL7FcwekJwaS6iZeiv5ddG9shm8NH56NuL6gGjXteWPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vxk2PBtVvdKcCn3AhthXkfMcPTiZQs773shYxL9ovpyEBPumxRvYoN65WjTEQJDKhg5Jnr1dN39KdbGRxp3ncjC",
  "key1": "4tBqGfEgNZDaRbxCdjD3BcBoDyN1ErhYyMFSJw8HQzodCbHSPXYANVmk1nwWNdGXeMpNPaJC6EX5ZXXWmzuMt2SU",
  "key2": "5Xwrkw6QUEhYm14or7w4jTKfosmiYxcBvwJHhyFg8ANdanS8RUxcBGccJVwmgXWkdb89usWe3TYmJ3DLhHZFdu5s",
  "key3": "5B9CfTvhX3iWSmLBJSUVp4biHzeYFXAj12x2vVAXFpBymnea8iNFxMXr2JEqRB7yPYkmP8zFYQVRS7ysRYz1myw3",
  "key4": "5gQGuAWwES27Qx6WarjcPmywSQbZVgkqi1w7QQooqUZBpPaJAm76wmPL4GRZZERRTa5f8eoZPonrx3MwJ66JHtCw",
  "key5": "5xSQX7aCRnLFKnFfPdCw4sTEpWH2uNwmFRqJrymLpfhR2EvzTqkXSveBf59qAD22R74g51qJraXZVF3im46mWpuV",
  "key6": "4HE1qRBDcGRJCEQ9WBF7wJqULFN2NrCd5Ga99Tj8mg4tNcT2wsmZrJsnQg3hERa6Zm6ff5f294DHGLtquX9BTBHp",
  "key7": "4PQhQ9qmm44bbvpB7c2BLa8mgTYcJcYDkxcbMcRCMJpBrapULXMg5wbdjJ5wY9Eebe4dXLmt26PCirXYz4eX1Hp1",
  "key8": "3ES8wsoSBEYMzLzYtgJVYxNhfuV65jqxgCxFVKq5LVvSNx3iyUFqLkddzpNCKhtoJq8NnTtKTqc3ZNkN8sGQyAUE",
  "key9": "gfoR1dNE9z6yjjVTL5jDqw8RyWqXVoJKapo6oxSCTaSAzTNLyTKkjV11H4rMiH3Jj8KJk4ZPq61MXDdJoe5SqDM",
  "key10": "4ZgDJBRRn3pYevLY98LvUxMWJpKYF2wAVe2M7PKjkoatXM1R1BSLwEFHUgvB6PWWz43WvQMDUTh8pqLAsrUYraXu",
  "key11": "sV95kxuksoDpQZmonfNVHKFWxvFuCgs7pC9QwYBciXRxvvKxiKVj8hW9t7CohXhpofeaf23RCeLGZvjNXR68cDF",
  "key12": "5fjpvXvaFbYrur2EQFrq6HRAcSuUEZPuZGUCrDib7AsgEkbJU6HX2N65vpa2JhXGwUHikQYvcHkhKLHy4hwsx4XC",
  "key13": "VKBc86x2QnyEPpAk4S2W9PUcAd1nzSCHzU24pa1YrE6ziVZbpYnHPYQFhwunTeFcNXyvFuH2QhXkHgkQnZZehe5",
  "key14": "4UkCkze8S96BhhdCKKgk4JZBzc39qf39eo8LUwMHKkJczPW9xfc8GfARdxfnzFKAJoNAHULjnVSBDFR6EPo8xkg2",
  "key15": "3zVqKskQcJ43UD1e4xtePcoyZinLYkmom6YYkmi9UKntZjg9KA6aA7PzH15gjR1iGguV8YPU3x8CvD7ZkFGekpHv",
  "key16": "3k3o38wtRe93YQeJ3ZwvLaCn7gXNTRC1fHkgho1FrjgiheaKBysP87TsHb7Z9VAVdYPN84hgwu2rgSRT7Nrjo9zj",
  "key17": "ua4aC7rUzT1jiEp8t8C4p8fdV5YSk249qj2hAGDLm7ct4figtsHAjn5WxCYEU4k2o37f2HTNsvpVtWMLWuLXoyx",
  "key18": "edn6mPeRScUVcxB7QMPy8qtts9Vq3tfBTu1TM3wXZU7gDAS93KvEpb8ZN6nRLtjzT15B1hnYnksZpic6KjQXymH",
  "key19": "2Rd5nRB5UMB5z9ah83YedZNPUaLv77x59eUo6C8SVhkoqpfMVwYAAbf71wjnA2KKDjtuaSYu7aRYf4tZQ7pxg17Q",
  "key20": "gbJZyqvvHV5zkEWtdrFsyCf9gob1UN1h6Wimgsyg3ju7wrVoCKFy8AkD3pgBZYyNpChFakJVT7dqKTqokc3DXMo",
  "key21": "2zXwEf5QzvYP7pZzH7pQkHd7c61SQXrzKH7oxph56PbFB16fePkkXDJuffnh4msBjESdd4QjqYX5A8jsVuFt9SRK",
  "key22": "3K9vHbsmMbrfoeKdxKSaGtKACMrCfJQGcESxx8uPz4nPc11ZBJV23o8L2zRHWeP7ybURFogzoRLnDf4ersLgxzpt",
  "key23": "4LhHZ2isxE6iqLy6pD19Pkz7ijJkN8XMmKKMdeAJdVqJomnTxHY1ZzmJ8F9D3yWUBfa3RUimnEwXd3ZcVPVcUnqY",
  "key24": "63hrFcihNvGGWUhdPa7gL8QzNSJw9o5wMVGf3nJgSqB615FVoNmzPxRNsNQcPNxZMZJFnhCZoTzpJgrZx4UVmwZe",
  "key25": "3Thpvyop8XXJbvBuM9xjNyh2MGAC4Y2AXMSaqcHPE9uhepNp9LBfnHnpXsErgSQ9z5nwRdThZj2utxbet6XaFVbD",
  "key26": "2W5JWtmPPLxdYtdfRKchQeuEmZfDkahWrJpn84qveWSSsiHWhpSCvuLL3KwerioSFC3hVBcfqJyMbeMN9PDyFEiw",
  "key27": "5wkBVxQzdFpZ56UzMLxoFcZQt6az1ZuNsLsz8GBFEr11owfefRAkEZD9Y6WtGuF9soUKDSgQSe72toA7np1ZiP4Z",
  "key28": "3Zb83qJhfeBcnaJcffcbY4PrudbP4uPu13dQuAiZZnWyqCQxhPW7PCM9KJabcrq9q1scyhUdhHuPtp7SYViH2yjp",
  "key29": "3tTuVNmYw3rgA7Lax8rpHyAnsPzMBd6jkWu5st5YzuyaqvrGNCreqTDkhnCkKzvK6ZKiRB1gov4DutSEHExPc3fQ",
  "key30": "24SyCLQspBTaBUpcVrvxMNhPJeakcn2Npk9dDmNheLYAJn8PfPRYqwp9uLacRZ1C4z8ANokVBF9e3U6Xbo7DbLM5",
  "key31": "4pKpBAyMKxKKPTqKsPQ5f7HQouQKU389E2YPy5zZQmLDbuqsU4LLDRvEw8L4xMKno7addQBMaYXF3pMQXV2uPk6X",
  "key32": "VhCbZmjDLp7FqUxmgY4mN7b1fA389AkUX74by5HiwYueXdnqYhZuVgiBiYjwTwbBV8spY3AQuiVH1nhfMNTF48b",
  "key33": "3i6d5sTJ2BkLfzM9v6EGJp7VP7HvRyg9dqSQmtWB13XEpGotNWXaSWUCxwoVdq2khdAxU1NemsJwYefKaHTcvw6r",
  "key34": "Uo53Cr7wNYy2CBSwyiddpGuLNDExfkgQMz7yYmBHnJjS8nCXCqEqj1SJCoXnpf8F4bCjJR5gRf4DxHRKEUCMK3z",
  "key35": "3h2cY8fZitKEzv7tnPsRcYhDLgoRDkMZuPQj7fwyVa4Gjm12S52NHx36ej17JuwuVyqsJqrkcGGpBKo9ZbnNU1U5",
  "key36": "3AwyWMsEUYQLf8mBsf9xN6axkh8zFAEfSv2A4jyePQfQdJfGbLXMp6NcJPwQY1LY3rP6XfMoQfAiLkXUVwG6bY86",
  "key37": "wX2R3yaLrQDo4uXXHGG9ip3Pb6RcstEEf2YbVtDudXP4CHr7hyETPkLvFJgoNWRfMeSUpQLHASnumjaDQnCTNRa",
  "key38": "5zf9wYbAy4hvGcHQHjjJyg2TwdNhCRunrCM5cVwA9Bujtwitjh59rnPfs96vHVWw4DyYhNTbEpSQbaC4fHLQjX1u",
  "key39": "5NfWnzwr4kDFDXP7sVxsZHFNXWXbFn5hb3gJ7FivwzKVmopKmyjjpoHs8Nig6sssAq57qVnrJG5Hrzb5VKViEsS",
  "key40": "3K8KyTCUc7a8sY5BgkYtjuNzUxTFDg8iNodv6WgqEfLVjD29PEd6pLes2di3VMqjKD65zsuH5m1dtPN9u5Z1XJTT",
  "key41": "5vuoZLKzT1GgE8tXyJ6QLxBgnL6s4gJkL9xBTAqQJSLuAyMDS23nyJY6H7vSFQKDMQZ7eLvVAtYgbN5d7gpcstkn",
  "key42": "4hmZKgND5Mv2DFQY4KPHUyCmJYzgWqVk4UgF6bRQKtVvkrsEeXSoQsg7MHX8QdaUFPh999EQVfCii26BzScjMooU",
  "key43": "59CGJFN55HVoivg2CePUTLg67TzmWwxmsE7YsxJEsXZ5gKEDVggK763VhPdXvX8eJG7hNCAWSzwJARxnuc2wjfp4"
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
