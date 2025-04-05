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
    "32hjgGowqgn1WXusdgivHWc87vNGA78qbGWwKR5A82ScDuzwB9pBQv8CNxH2ugPxEB1dZD1iBN34opPeNWxp4v6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZjhaZ31Rau8NXPFmMGLXYwrCP11iXAipwEtqHEcMKXoiNCE5ahqyzBjWyk8ZpjZuA1NSNhHCCFNcibX2CqbDMCu",
  "key1": "3Q22gr7tbbuRbmhosJjfVALnWveotE3Wfesvm2rJkbdwMZpXPeZw63rnJCV9mo3TmUdb3WaT5PDKMdgQGyp84baU",
  "key2": "zzjcLn4VhxNqBC1bWMeLsZGu9Ww6nFjEVyrqvan59zttHbsXnnSWj8Ftv115En6EcrvQDb7wTCPiNfEmmujzc59",
  "key3": "3LGGGAWnCr16KfuuapicrwU8yXiKBgF4SGVubPtUf1UDbgCf56e4gZCxLgafALAapVLu74FP8hxicNxtf9rinE3T",
  "key4": "5p9uumJHso7FovzK9LX6T4X2yZQ4s7RNnGRZm6FAFBtD4HQCccCSo1g7iQL6rRGets8SNTYnxFGZVa425Zygvkce",
  "key5": "qipxgczna3tbCF3dWEbPtTNjEmsos9Xk4EoT7T88MeGUyfszTGXBHY9XAE6m5XaYXGvrrK5MkKajTH9rBx52gVk",
  "key6": "32cQzFHFTJogEwbNRYno1mzcJdaX6qgexd1XovhsfgqE2rHEjyYjidPkUeKQ7AsFv6pLBRME3S99JRXzDNWyXjU7",
  "key7": "46AWFXYJDjtXknM6XBHHygjCm7aUjWZxsTg61rbpHdJgsZvFEQW3aadp1hJwJMgsE4uoyijA9emogT2Zek1JzL5W",
  "key8": "4fGuM2bbyAzFW5ZutWumvBfDNmucBJG6dEU6VAkzo23GE5WcjgyaTChNmFB231nouHyX8NSTzzEoyCYPpfUxb7Z",
  "key9": "3hTowtURmBybQcFp5Nqgn4CRKdMVEiBD6nndgtSewNKaPLNwrYJn8VZSgirVcFtjuHQBHUTg2vDADKUhiEKdnT8Y",
  "key10": "2z6PfcSgbbvpU1CXHHiBZi7MttP9WWYfvSDA5Pp15kXBPPXBhQwM4V79QB93EmrSziiTRNNKMi4zxxr4fivet3as",
  "key11": "3oN32GRQ7UUBZuXCCMeh3gGcGec5bgAmV11nRkCvndgEaBkpPCvE8AYFfALqrjz9KVVwMbHtfFqoB53Wj6v1xR63",
  "key12": "4fHxAUoEsgRwAS1hbT7TSPba7EBtvPEgwwXZ7AVhaPjqjwqiuPA2JmnhNrRBcWRiURU877Bs2YTTDLMgLZmqrqz3",
  "key13": "5URdfG1ybXp6ZrprLRbPQgdKBYxyjoJzAhrB2M237c1DxzCZyzdpvQcuqwRScaKmNEhABAwigWMSGP353Uw5nv5G",
  "key14": "66SMU3GtDUkKEQ9n314fUa9Qj7b5vJkJgYpA8Nt5tAbB98zHAAvQgbBnD1NNyRJtaBRzp2vVAtj3AmVfqAaxm6iS",
  "key15": "36LdeUasJcARNFFGanMG24BfG5SyxeZmsdT4gFTHDjz3UK5SS5spAwFdV7rCQ21a35Hv7bnoaNPPsneQZK7XBL3v",
  "key16": "41N7E4t4sEt3R8cTeovjB1ibhG4YDgtMc2tvka3HhgsEKHqaEWUuJWSD2oXNgwnrvqaN6oFXppBWV9CEMrEXZZaM",
  "key17": "5zFssvAiC5G6cYjqKhCNn6fjqfnmYSTJcucYcaXvcRXoiwtjjYTPFTKwfLQY6xQ6PX1HjCKnqaYv8NojtKtiwBmF",
  "key18": "4WXRvDxzRAa3Ka5zgRb3uWgBwkCE3MWasonM83MVERkPfXutuN56NkXq1suLEcL5j1Dn1K3WZdv1uFAV2BHVwtFW",
  "key19": "E4oh52MQqtZT2tf8mH1shUdKcEGkBtZGhYGABu3zkcqUeeX8rnkT4DXoCMnhPCYZp1irU5qkqMkqBDjKo1ZfBbr",
  "key20": "4WkWEVxtAuXhWiUFLWeM9sTjhyaUB1WybMj1djPFLa16mUj7HZCKJ4AqSex95fjaD9bJmVLTjWTQi1sV65PhZkid",
  "key21": "5XWjuZAXjELdnNhuXVD3y5DJ3dVZMqHsG1nQ5GX196BKqSyYHBgQ74Bw6W4AHYtH21Yq5QoWsCyZhemTWRkeKDza",
  "key22": "NfG55BUD1t9ZVjdtNUJMT7iXKFTFoNMcPMxrbvK69ov6DqPmbD2ptjhSTQrs2d3S59tmWq8g7QLVon5fehEreYL",
  "key23": "2MdTYPi6EFGVrFaNbwHaECEgWDuCL88QDSdaezqm6PEz45cUj7RD8szFBpqoxtv1w4KnevomtpPHuuBodYcwRbhZ",
  "key24": "38aXdkqnseDoeNWskmQfo3E3Z23ysK5w9FNMenvvYbrn6bK7NvFPHuHEkgHc5FCGaewMRojUqg7c2BZ3tBwKV6Nk",
  "key25": "2NKARz3X8K3VUAkDYcsdYUeRUqBkZ5kCNLcfimgecVtkqXQEanbJWrrKcJ7o3LzA1dGaVuMzZpcu79YfHdzgUpNV",
  "key26": "3YX2hPhRuueBX7NHGZAMMFfuAtJLzGPSRT9NN7wCAQkgNbxe7PPjiSomAvdxASvUQfxZFEccdGZm9Ce75MoTBVHm",
  "key27": "2xyqyKB6QF5J8pTHtmubGx8ZoCnpfCJfnRJj2FVxyym1BqZXQ2t5eL2T8TiUgMhWqBA1HjVGCqrKKzqGPASPULi1",
  "key28": "4zGzUCJXbMsfgdv66a2pyDCMVAmd1XG7kt7bsX5VcQjNJePfG3kTQW4YfjVCoaQikRyFqebMG7KpSwgp2hV2kr8k",
  "key29": "5iQhyhxNTaeeUTCaB9Dwxi5MVNdjShuSiVgTJdKAzu9VDdFviS9XRVp8qTv6hmwk7wHUQ8AZNnFrAQ1Ug8F9vEi1",
  "key30": "2mQGdd9raAm6cvkKn7q1czGqxQ3WXZEJsYfm4yjA7XUSGXsK2n4KHjDDPbJUxjkWJXLz95JKrFvHwP1RJZDhjLV9",
  "key31": "4YUHSiJ3H1KRoCkZ2AHYfKHxDx1YRzf3Ywf5VdnyVEupkp8qNhVV9o2f6HJMVSKW6qPsCV4AEMvxt87bYy8E9shf",
  "key32": "3sMoXvnJE7EfcWyV46JodE6WYicEdyoF2mnF6VmEiPjhAJFHCgG9LyzdJghtKUdwCkbWKwmJeN2K4wctjQUj4Fmd",
  "key33": "5C4pLXRJ2qWPuwK89nfiUcsP5H6uWYn1ZNxeUWq8cCkYWyHHj9iVE64LEi8XpGN1164Xdk7XsqjoSfhi9G99jWjW",
  "key34": "5WekHHmJxHP96GdRWrDM2L9sbbmudSu5pVVVmnB1bq6xXGGokk9KA3zrG4CPsxNhV9rBPhTQ7VXVR4f8X3GH2ikj",
  "key35": "2GztkzVP4X2hohzKaQYnVGY4uyRbFfMxNS24Wc5M7hKGnXeNTxy2vfmZooCkKhh7FzJmaQsgzrhQeLsrJ5kZYoNj",
  "key36": "3vXGdzHs8mfyUR5UsagbaQdHeFkz9WFbGFPCCUULHpsVQHo2hyn45zXnmhwG3xKEw8jeXwwCMH1tQdt2g9SWZWxR",
  "key37": "4sWjCEVMFhTetPrKnB22LhWuq3ABrH19Xzr39zomZdVaYuyy5yhppiVyT96uN1PENUa3oNnSkDyTCZBDsSLD1ccA",
  "key38": "HCWvj9jU3gPjbjykBPWXzLH6FDiXHobniQaAKA3yxxfsUMVt3ZXUUwvLrcXsg58WSrvct1fpnoCvXxZqdQwmAjW",
  "key39": "5RW2D8hMzaDa1GcRGVfbkiQHpyzWhGk6KM6TEnh5m7PMp7QDiaztR5SsXSWLR6FiNseLog7M3Nc4xvw6MsnLQ9p9",
  "key40": "2QnyNLZducV94wLyViWtk2rZnjG9XyrV1m95hkfNpFB2ELvRSBa9jXn4H4CiRauPjR8tsRbxECgE5Perdbjb18nq",
  "key41": "3WLahogaq52bLzj7eHMKubu8299orMvRB5wfmhrszzDYV6NVZXyLNHmp5LnPbnUFtRmpZ8FRmc8iAn42z912Cvjj",
  "key42": "5kRsABZqFw1XZHejGfYUWnR1PrgrFuHeCjxvxwUdQAFbabaWkdxHda2ZxU24RRVHEu4tRqPrGcK3HEWCE3cMBRJj",
  "key43": "5aWjb2iNUmxJi3dg3bDL24cFeagc5agsDBTEM1XKFVPraJWrSWXqA8NciV3hSjnCvM5eq8UBMGvG56S21FxQAbzz",
  "key44": "4Q5UUEvWoCYuhjhm1U53N7sskr1oDGHQ3K25DghL7bB9UPFqygSpP55KbruAn23TcBuwFJarpKEZhUDwe357c9JW",
  "key45": "3Pq6qsofn4LtyKP9isB4QyfiNxjJtwajQAWbyfTazKsr3ceexpdgDGxoepSHSEiH7D2e2USLaTjuGZ1iE6PPsFkM"
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
