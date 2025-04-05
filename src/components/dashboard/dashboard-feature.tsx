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
    "4pkEbNRpFuoYPRBzoyfWCaWPSoEMmqR9EdqydwCBd7XbuuiYMBLPTe2rpH1G3tNb84L85JrE6YfUgRRv4xNBK4Uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4urk2WQY7RnMHTSEDLkbu52HqkDtGVc9ixsqHBeEhLPkYQcaxuogn6A7rKZzgt9oRiac85kg37E16LRrPgqjhAWN",
  "key1": "yZGDcxxEAt5ZDkzLv1NV7C9P7ebbithrmdxgG5uWnQnasmouGTwCDUyqn5HpD837PWafeJdQujDirHajTPL4Afa",
  "key2": "2ddqvTQ8MamzMaCe2EwrsLpkfBpctBXZwckvastZJJDeuYerKRcv3B3xrhze7Xk9Sj34FC3eqod4utAxxADP6fx5",
  "key3": "8chgF3DFyvgtkE9GcZQvrMvJANHLz3eCZ4QDUqj3d4H7S34GYtTZ62xcQF4DiGMP4vpRRgwi17xBAt9paHTxnoP",
  "key4": "2LTjgC1xdgRUxdJohSs2UwbtuMniHZXtD8n63GUZA5XJ2Xe1PNax4JFi5Pd9NcBMtbduEzGTdg2HeVZgfLhsMPYc",
  "key5": "5PDoG6VBDfP4YVhzFqWx8pdtZrYHHysJCPEdF3f1EkZxu9feBZQpD54u6sRWUattW8qngrBHNY2pNcoPWMKJtjPR",
  "key6": "9xQngN34XZqUP9Z7uv9yvgMUi6UqFdcFXxyCG4NSzvXvJE4obzoMknLpSNfietkBZ6YGSA3zmzfjgkYhEUFmBHy",
  "key7": "2ZfhGCPSoUatKdBsQDVRvtthtzMSN15BEP6KRZtMG7tsHHCbMojVKWPLGmrxjU5Che4UkcQhzGABUqmxz2qhgpor",
  "key8": "4GGDH9tN4X31SQqH8mZ7FbWx5Vv2wkFX6qdiu7uTwe4BUgobK1GdLfw5Z3789BAMTd6g47jPSgd1Ki8wnFVTbVdD",
  "key9": "43SgAJpNNqKHcP49W9gCBq7eBRBHj2YwpePSjbgsctpumUaM4baweJRyU74tajC9ke9x9oguPUETBZKSkxR1YVh9",
  "key10": "5eX1jUAiAwCirX1FfZE7TctYR3yV6xAF34mT8o63cLJRGBJuy4SqSXMWPcEjmUasC3a49aZF2XMLowuRwfxQFzzN",
  "key11": "61Q9b6gHKq1g27LJLUZVYB6Ba7fkbQF79ZeN3M8yYNdiVuUgkJg1XP9HG5rmvmuHZszScM1yHafrvS5xjEs9XgwX",
  "key12": "2PdooZTa1scu8C8Cmw7mtoBpomyfYUr7Vp9AebWBznMNYykNvXBi3MPBgkGcSJcCUzX2sVtBYkZk1fg86t2RQNjR",
  "key13": "2fCWcfMCVU2bfsaPYbQjzaLAZ8LrbirD4xeZsc2Ag8RevAgAdf8Yup73NSjkfEyZqXeY7R2oAxqw3xiCS8W1dYMW",
  "key14": "4zi9K9EoduuR5BJMZFhQxtjcKVpo1a3hpZFkyQrAhZcosMiBuLtJycST6grSjMcjKhYhK7U4nhGf71qCHJYAwMnt",
  "key15": "67SjkcWE6JBzJYqN3F4kZG6Dp5CheKF3d8Z6ZPukGAatvAcKTt5fBTCCosou9Ni3v9oVhWuChWwAS3ABkBHSKDQX",
  "key16": "2WuzZfrRwXbpFKkxs9KUD9w6PGKjPwM9F9yn4xU7RvLL9uefEQqEzat7o94BuTjHUUBDasbhsXE6QTnf9jwPUo1o",
  "key17": "3CRe1h711KjoCCWQYfZYTVUUVrDJ9FMxaUqnetNmHtg2hxufWe3sQkQdU1GFJmiC7sB9awNBvEvdZyE7GnJdjuMS",
  "key18": "63VpcJTyMagBoE5xU8v2i8Ffn3kX3ZRkzU2L91MgVnNUvS5KNuP4k2cG5r75kMaNrRnefrtHsVvWrkCVFhz9t48H",
  "key19": "QQamqguWt9psU8zFhqw4Jr4iimHfYdS2TK9o8tWb6SFJq4UKuD3AXuNEHw9KJM2kb5py7hTYHnw4KdJHa7d2pJ5",
  "key20": "3nXmQqwoPK9hL4VJbmxpFVbwurJSNxUUfhEqxXzmbWNHRr9v2nuTqe6a2AcniPfnWjtbpqBX66coeSa8FxoeTgvZ",
  "key21": "5e7uz9Rm5rePFAqxsA3tm7B413T1fhDaYyCSrSHdt1u4VdaoprHxtN114kWS3GUEngDtrUBC22jP88QzX73eqrnx",
  "key22": "4rt6cRXU9ZBXqK5CV3rRjhe3MHcsHpBs6qPFAgNHFvRgW5CA9HUybvcWkHvYem9qWgpJLzita1hvUvDC3C1DdNWk",
  "key23": "aVfFwETut3qqT8uoLDT2tozxJg1b5yAKiBvVYHsKyyzE2GsPAgv2Yy1URTA8uRPUsyVPPUS72pHRW97rEnrpkZ1",
  "key24": "vskHQ6eBxaR1iw7ZHq1fJjxhAKMgsfmMB8U9HA4tda63k1wxcq3CFYSC32tpubwCpg9vuF7fXuQm8kG5ZN2NXRQ",
  "key25": "pUSAcMHxwnBuScz7S6ixfzZDZ1WwfgTdMtzdJwxmQ5KCeXG3WsbVNW3Sp5bGNYpEsktV91RzJzFvqk1WooWwvCg",
  "key26": "3zBRwDhpoK4tQ2MtN6cqgXfhL9Rr8XHg3vaqGjrykX1vUmZyVbTTeuv3MmYLruczdJkuPGGFNd5XtTEThfL4Q4mP",
  "key27": "5VVN9mkrL5h468L49D45AZtmvk3zLEYpJhXEi1borpGnXC6BhXDocjgjf3QPD9EzGJ3vtQqbqoBHpnTCkTC4Yx9S",
  "key28": "2Y44urtsoN5kbr3vhja9grgJM7mCbhhQdt97dwFYh48TCpbfUw8sU9KyK1orh7dzx9pBkzrkW5oMzuhDWpoQxpM8",
  "key29": "4ZBzo1vUxbGvMivbtGyqrwHo38SA4zRTcHKduKBJCJQEpcUJ5C6FJzxXhKzVk9eMD7CqPwSpq4PAPr82KtVf755P",
  "key30": "49vgsSf9Lzec2q4k1CHGvkKA4nNW3TtNVmzJs4tsmaJQMVS773M15yBuLagG9RhJdpVgFSB8tcqWKM9qBLtuUzFs",
  "key31": "BepgZvGkJeXUKoU5fifKkm26fTuPxp7wbcKmykcv2dDY6cRn7e8cEYjMYJpomFdMuCuoJyVtJrnQ836v9PGkpoY",
  "key32": "r1HSEf5WTaK2qBE1ZvuyzFqN7PAr6E8Yu1MJNhzp11wCkXBqgh1hjAxdaeKoMw5uGxrBqamqjhEekaMFijSHCjC",
  "key33": "2x196t5MMaKpCy227cudxc9u2h9A5XZMF3B4VhRuZBSjg1S45nUg5usKo5GujswurTp33S2bvMraKWDU4zvcEC6Z",
  "key34": "31CMMBwgX8UkvB2VmwW49FhjFTjEqpULCm829Au9gPKSq34tuaXJXxBTWj4fnvdYyVa9faC2ok31pRsp7wREExWn",
  "key35": "5HSP133rdPNaAUnCgyobJt1dGpUChUGJEPvMmje26cW7d4kFxWrWZTf6fPrwRZGd31oGMvrx99j7rGY9qTQkfeFZ",
  "key36": "hzdnmyzhe9FmjzvTCPerndoiz2h9Pje7Y1p3wqVuPUWmVWYvPPW2ZFfKHMhYsnjAbkz3En4Vv21BC7ENcj754A5",
  "key37": "2Xqpmn1TgGibFvp3RauGNArNpEBRWem2sBoWpgj7ED927Nh6yjGi38ud4MN51Ex9fUhp5bogkbJV4KyaPsWKST52",
  "key38": "44hi16SRnFebGFb8L5zEJcVUXc5s1jaUjLSpLDgXqDXJFBJUsUQ6AeDMGfyD3D1ZKjTuSJSWZF1p72WAtoEqEpxs",
  "key39": "ctxeN8v1nayAvHfGQLMCUTwvkvpwNfxX8VBwHjLdgnNQrRAePoiiRinGaKbxTPpCjxutsV38cfTFDzv143StppC",
  "key40": "4bQkJpQ5p5smcX1y24MkjtVXfYxAHiW2KJdnM3wXvsgRjVo8Bvv6MYsCCuFrU2LziBD2yY8t3C5bh1kqYzTemYjo",
  "key41": "39L6mrsAfGLt9vwUerBgWa9HhLJCraCsVYpe4a6rHKMCqx7xBnuiCznLuCMt62dtAqYbZmRd6vjrM3SfLp7qcYix",
  "key42": "4grcxXDeY6ZXjJUiuZufNmytjHmPujLZxkzWi2yhMNyeq7nAMECcDkDKzaZvSTTG6RT3Ce2T8R8TMPnfqWuGYvi5",
  "key43": "KexVDquv7mA3bn6Vx4nCvgKPfiooJZkvELzqHGZC5mWH7CWG4RhoKVcpck11YnDttHwmQnhPM46ejZzAxt6sYLM",
  "key44": "5CKDfMzSprG7pat4agY2pWMzdW863xguceM84mP5hhnZKWmm827u6M5DpjsAevavnKhZVvmeUcZi7VC1K4fN4Nkm",
  "key45": "5KiwyYZYEp3uXaKP6M8FwJse4P7UwuJaQNtncRuzuCPsmTqF8jCuY58no3ptAY7PPRQwEM2XzsgD1RNqzmZZhXhD",
  "key46": "4yeefTJ8cdPDtAi1qNkWNqc2A4xNzX8NFmvwmKyFuQoCN6tY3hkLBEMtMBEp48oAT1UTK1yGPW9uJ66JSNoVbtAP",
  "key47": "YUSF4KQzH1kv4YyhafwVHRL9mA3ErEysZXuZnhzKBm1sQmwtsgPcPbqDvqmYkZeezjiGZEDBqRyHn7y58jHNBkg"
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
