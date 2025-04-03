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
    "cgUVNwxFkzi86bqXDS5Bcz6CuUhNvVJRXmoYGCBwzywt9jjVhFaJgar6acdiqBg5hER1k2ZyLynkKi4wL5aZzk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2FULbeTGZ5R6kyQBTb3WdU5mR4avJkQBsbkc4hTGbhFDTUy7yi2aHqCcfNa44Q6fT5MLK6uKuiDxPj51BBkdME",
  "key1": "3ppGXLZwVUVCzLvpCFCieDdmSCWJNvZdiuf1JxjKBnei34pkkm3h6cNMsFN3vibpEGFsKMi49tN2mdzG87rvtyzJ",
  "key2": "3ieeCgPXNKrfjL2JTWz5VcZ9ZEREE1YaRQh2wCw3N984zztLqHyrNSEptFd7xmH2AHnkTFueYPBz9YFkKhEY9XuQ",
  "key3": "f86AJuWdkWYHRTChpMwsgpEYtUgGLzvq23MrGdMGJeybbWFYRLwXfNhm7iuh62Xb7jFLA4JNNw77gM1h1Jf6oHw",
  "key4": "4xQnWMcCoRGT9THEVod5bKE1bX7FhVjgZwr3BxZphQE8LCnV7VVNRWMCsgdUVtviWmCPFeqgN8d81bv3VHxBmwjq",
  "key5": "X8Ez3bSoaRuxCUyqzXB368msfSzkM2Vq2WnFfEqtMjJDx7WhvMXu11vMyS1Ew2XaFzfBxahx6DeQHy45AWTN1zY",
  "key6": "3iFVgkZHS415tCfXC4xmRasDtXCb3eXekDzQQ8PfXza3pCu9AxxKqkJkBzF8DxqbAZGEvYcCLhSb5Ypzzvfkbz73",
  "key7": "rnvZ2sRydvauHZaYtazphULn4kxLybHGqSKTHpee5zhqoc4ihLX2cAcxmrKsjqaMKWRRS9t1GjfYJiWqNZpd5A7",
  "key8": "2DbfSrzsAVG6U6yydNz4xMkkkE2qk4PxrYgfqGopVe82bmZyFuUGjhCp8xDyK2DxyXcShbg9LDz216Bf24r8Q2ke",
  "key9": "5bPjDSadVAGaUb9QDA9YykqnrLtNsRjskAC9z21a7SMnUjH9or7r6G6W1gAsiMfCQNTFmWhjM3AWVMqQW7pFTZ3x",
  "key10": "22VqYX215ukyk73wARSeGQpEuQfVryzNmLzMxS36pnd4Z7dJG2U9GQrZTYS4DrN2X5monTAZV79MH2ccVd15Y6j1",
  "key11": "5XDnkmkq9ixkyRkLiTpryk96jxMdGFyMxJ9d9ZFrEKNjgmgqWr663H3pbKGCAnmxYYFBNYHLzwPuEC5DiMabJEiq",
  "key12": "5WMN33ouCeWbFEsNLCg7S53tPeXJ2sT41mBYVdnaQXaR1Uj8HhT1zASDTZExGiQhqdC9hHmC3bk4NgzgzacT5nyj",
  "key13": "mwp3YiJeSBtFQY1XpQ98rS63WL2H8HH8sxcrvYEi9z9p4Hrtcn3YNBuTb33iQrEgjaaGDF82k4vVrjbCcKRAdUz",
  "key14": "3bgW8EaxQPfpKwZsPywDgcckAit87gSPZGgQcDeYBnFMwehSYz3SWaWXyPTfyLTWXEHojQXD5UFaipvCtBzwAf28",
  "key15": "44ix7TgxmHLDqhhFbpwnTFtEvrkHbs7e6vpGULiwRzUCSDQEt1DC1Hcx2mQexsqUZzWmEhcE7bEHqQGezbr27GXz",
  "key16": "xHgR2KWCDfYUt3XQxnq6UWtae42E4JJJopur17vdH3t12Nx3rkHpGi7scJxLs8RvuYM68yytkLCppXAuv75cxMS",
  "key17": "3n5MD37hbEPen1aaEH3i3u87BCoezi4aFMxijKa7RwGTGsXKcaztp2daKaMjtJy6zwEpcHdPb3wZm5NHCFyQPGbG",
  "key18": "4bF4LcypxTonzX8LBc5V8qUkwxv7XMBY7jciNVppyjmZ7gLAcwkJpcX8iLdYn9tr2WJK85rdfqKUwTm6VHYFv3dm",
  "key19": "tEvxNu1KGiFvgSHjNKySsVKSjcKHCCjScW1XTJxkiFssbAijiDCTTavfNApxguRYbr84bkutUs2w3KwLF3pvCF9",
  "key20": "4uxYMaX5WbLubtF2eKoBkj68Armed5xFSMEF8Dd1ssZY8LMtfM5M6QCgeVfFttWKtEfVSjghZytXwnhAJZNyopHQ",
  "key21": "5cAHnnXumaCUkHizMHBVLako7QC77igKKEeqXe4Ssz7AqSEX3nG2JEZK66mh2FDJQmE67AK1uL2cfQfYRJzEZh2M",
  "key22": "49szDfmUkrZWdDotTPmjcefz6iqby9C3bsXwxz18feGvivvwpM9GSLHp8FfB9j32nY2yc5s46wXiKHF7ksPiJM1K",
  "key23": "28RvrtHcXH2JjZGw6UqpshCNnZfAamhHLtsdKYQ3E8dN26q6pTtKuqoPZfV2vK7GbwrDLNL93QMR6qV4bH711XYw",
  "key24": "54rFhvFMN9XCSvbMQsSME3w9VPmC2yGfdCkBWqtBuXSu5bWZa7rjcaj3octZWVVZedjyYwdkRyXmJJuCVQa4zB3a",
  "key25": "2XytYhfo4iJgyWckA2AzQkGn3HJL2ZWizdHCGM6CHPshhLuhHwktyaUCWyRUY4dqNmFGHDv5CxSti32a3wUvGf5h",
  "key26": "4gWXbxyA2gw2xtYnBbSmXmiXqcNNN7K3wbNMpUmvthzodurJw78HFZJPLXkBpZiMECUuy1bojiyvkw7ZGwe6S4JK",
  "key27": "4GHMxraZkhxvrvYtoaYvtuFQ1Sfza2oWC4byDyCv3FRSS2spr36sDWboErckEBHbTADnAqnjLGcJ1aRJTFRwUufZ",
  "key28": "RsCJt7UFkhSYGY1kTbpEk7MyE8AZBeZXWYSi9Gf4SDDXUJwrarhEXdZ7kndgJrYFVDowWm9pm48YBBCp1WBocmo",
  "key29": "3x2ZRsHAnNCZUrYvpRm35XNaPsGThdBuHeAn1Aq98Z184CU34e6AmPwEEu13nwVTJCmA8ei7ZA99VBpe2RdiHYb",
  "key30": "dRQYXCi99b43sAYP2UCENDdsqSjiH5tZX9YiisuAGdgbw4VCTjeX83kTfLcAu9Pj3N1PEktx26q5rnQ4GqkMi3F",
  "key31": "35stjDuZzyL7gECNNpMJmQoLvCurfSJjbX9pY1iJMCqchLLNhgVze9X2ukvXjkEEagLRJTZ6WGWj8vvdmYp6x1Uy",
  "key32": "5qo878WhXs5EukfBvEqKhBfaDRWvuaAvRocj6FsRe3UDFNcocrhLjiMFcWaNpMJRP4k8Nbu5zt8ZaN5iQ59vP6Mt",
  "key33": "3rMnLz98Fx8T7GS38bvZL9wLHs7Xhwamf3NoJJxatXwa6i5WV8KPE4RMrLCVHTB49mjQR3QUh5ww1mChBLKGkqxt",
  "key34": "28daCYpZnPf99GbxDnzmi3HdLDmEYbkin6JS3uTdsBYN49oKARub2Up8Yz9BaWZWBf5ovw44MaA9RRwgRsqKagMt",
  "key35": "3GRs9q7HgqLsSbjY9XvwTpaJeSKAebrVei9MEXSZqX1skKq5XTPAw9Bq8xsapaEeCzyFwKD6aWh8XtpWECdWUP4v",
  "key36": "5xnL2giRdWbu1es27ZkCj8B9A2mSiXN71UtNPwvvoc9kYkvWu6ymhaV7tZaiWoW4uYGu8Sw24LYHg5ooRZsvM2o6",
  "key37": "45mv86qeSaFNyHCqNhHfV2ewHGpoQnp9Z4R4hsqnkcuHBCBUqHV9ae1oXmx2gjVr1rAgSk1gmngRpGfSydqzTS6v",
  "key38": "2dzeZ8jbFAPv11NhcVvzTqJJmFv8DDbb9brhmUoByZPG1MnhHgsscFDeQLcWxKRue61JMmrsRaw8Kcp8PkF4GUWG",
  "key39": "3bcMgpVE8z8AD6bAiyaxBvtc5mL8HGzM5f4M7ELkRWadk8VZiBAkK4uGBb4W7qkCrEyMTVcMbZ2NjxFerYp2xJ2m",
  "key40": "3PWv3umR9WbCrrPr4Mf5bDiGxwpsPvE3DjxiUq4HpMbmRr8h5rWGHankU5Y4KMZzJ4hsU1AHzEsJup2E29biS7dM",
  "key41": "3vq84rDDEaBiNiKX9b9ZmKP6iYnBBBR971kAGHhnhpUGQToA3h5T6AEgE9abn8d5TQhjxvqGbtsMVCGoGMDnPigs",
  "key42": "34o15DsvoAcCDR87zBrvfzCKFrFEtgwJpvgaf7ndkdWgQ91cV2D9h1Dxacp2gxM3snYQet4uR6uFZ3hn9pWR4Arb",
  "key43": "3U6s78e691BxpVXxf2U5uWhybzCs6WyHZwufoAdMXWdNKWst7TsZvDwB6x2pVpnvny15JhW6cJLmcAcpKiU4hMPU",
  "key44": "2sQj47d2bfNehMRP6hxp7jHJkd6ntykBPUeUfhNrJytSofYmjfyBpZxsh2D3QhM2cnNSBhL4FRY8oTNqzKgcb3qp"
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
