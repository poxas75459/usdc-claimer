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
    "5yHCUGNzUpnBYbMY6FFYQcfcw6RGHfXBr8SXQNJKJi1RzbN2REmaJtjobxihp8SGdDnJnrnvAUZFxn3mt6GVmSp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JtKRqjG5kVBXKA5HPkXKuYdB1LTpyhPcth44Ty3w2SqzAMxNFBz6Aus44ZZhXbVMVm73Xf6BG3zzNo4ZMpUUfb9",
  "key1": "3RPLkEtmpYnCiQmFEcsf6q4xzkvY733FSVbN7Cw4d8YT25j3HBuFHSrDSvSMnyC5GGzm16nHxxY4fzf1zkRtrtYR",
  "key2": "3HQgPXSfsjEyoR6jEkcibifpgfBFDwB5gJxJznKndqmCFYh9hmLrQwEbo7aGYxANCy9UDTGkXKhAzAbEcCJ8eRDM",
  "key3": "4gocLNz57P8RyGau66Q6z9fSD2q2JKfkt6Qw1FyozJYh8QcKsPAabQS7BAn3juF64DWNKsFv8p2HMJQSB161At9z",
  "key4": "32PLbHGdRBmGoM6LNLjUqddec9D3AUYkX5ZtFFk2dBrHL7vB9oCri5R82bf9TRu7FcbUbJ4SS86Zq2wyF5RHtowv",
  "key5": "3Ma4fffxYPXjcRsRtjKFFW5KQxuvLnfQLqSX8sDQD5zZFTGC5zTSHRK8CpyapstQu8RhXSrDLmbEc5neEuetHP1i",
  "key6": "35X7mCfA7WkoQZhRzqpKbxtC2ueQBuexPzSffyxoHLVYXcc3KnBHibBDUMB89BwaMw3NktjAJnQRgoK54PgnY2iu",
  "key7": "jAuNY7JGpjA8UnsDHvFjvmp7qsDARrpbosyZrVLCYTPLMdm6Ay6ac4LpPGwNsYim2DKXMrVjTf2HvZY6omRoiri",
  "key8": "2bQT5U2zCN1imoTzijzMSnVx8B3ch3SS89Qvn9PL5RpzLFLHPTWRNRrKXwyo9ky7gawxPqpbrFyhKrX8ezSnERui",
  "key9": "2NKYuPV56NqoU2Yxq91nLhL7aZLAqPoZ5ikyxCnXTf1bqPEZgq5cgC4gJZdTNdVY1BRYEB65cUBYtxnYqn3J7kgS",
  "key10": "3zMSoR4kCxg6MYbpct8qDeVoB4GKGJSHXV6YfA3JGcjrhsY5BymQNYgrZBwPfZ3GVjz8sfQHAfqKpPoGHbjzfZTi",
  "key11": "5GiQ3XDceGusr5QizbE9fXNjRkF1DEidHuUHKXHEJ6f91JyeDrfXVo4FNg7TSNjzwzgpjxgc7tq4mw96Zjyetzmm",
  "key12": "dJBNYmamBymGVW76i2LHDtSdMdDAz2yKKzs4u2mTrDMzucxeSKtR5AsMW4omFFRVSELe8fRs3nAqVLJS78BuHrf",
  "key13": "3XSJ7QUKoPcLKdq616Dhhm921wxTPUjscZbSRznNdadRQ41w8mwWqxQS2poSgwQN8AHjKXCNJiJzYBbFNjRdaWRB",
  "key14": "5H7JgdrjuHSD6Wn474EPWMFuxSZFvb2vsKnt1DJ9PX6UJHNZU3iNwHj6GW9Ue6YYwkuSKE4F5Xnsikoc7pSN86GZ",
  "key15": "R99F321kSSXRoFGDxJTzWrhu9wgHkBPkcy8NTp4fknwsS9LnWBTxmZMDLtvJFoxTqQeZ1icrG2pjNchSJoEAV9U",
  "key16": "49UgpELDtriRHy6WqAxojDWa9CyJ4DrTvhVysrwB2r998g3nxofm7RMF4MPsjkDduGHHv165ppZNZbiTdg2RSzR",
  "key17": "5xUEEuWgWzWkdgFzjJSFGHAnT3tkUoxU3Hobwddv9vfsG6JP2gWumrrWjF499mD3BChH1NDWuwRntdZCKKU75Nki",
  "key18": "b7qno7F9KDC7s2aXF7StegsKgk36qc8AMrkD8R6w6fWjN3hwyU4iVZ9cY2htdc2VgKi5BYQESjnnYCz63bBfn56",
  "key19": "4gHciGsK3Ugh4ybDg5tnBypNaa4rZbzMWiNsp5bMFFVT3Dap8Li1ufVKdRQBuq37vzCW9QdjZMfyT5cZiH79wThv",
  "key20": "3ACmAG62hywP4uw7svWvU3xVRAAbNuFVptuQ9Ugmez5rVCJwwcWk8czkAxwHafH4XSvoddCoABTpJw8rGE3jqB4d",
  "key21": "25tS3G3PhvURnyFYnVhzgGAtF9DKuw7sjoeezMASHexFgdQy9Bv5NuP2BbPKAgqQq4n6zZV9iSwRmkpCmoC5vqaJ",
  "key22": "4gVVFKK7JTT1FB6rSgbgwyLSTyxBxWH8pgJKJMMEdSuiR5Axcsk5ZjsZAGt54zZ4uQFH928LLiK9NzJAeZy5NTBo",
  "key23": "24dhXQJYQHv6fPWy1oTKHqnkdUMK37sHgoSDGHY68mkBKA7zqg63MVWWgkqnLE5j9ejvy1AcgnQ4H23MM6tX3Ldm",
  "key24": "6cxzRswM29exLUv3tgX76aVr8L4KBw6b8QEjrF1UD13edwimYUhAjREtcXqKoMc5hhXGWhYcc9hbMLViHscu9tU",
  "key25": "4Q7jSvQ1cbdL51KNinZPZxEg1kdJJdAjMCauuJWw3pm41QCLDimgvwiouQubEeCRzdxsqjxmXTM7dwXJbiT13fHq",
  "key26": "2d1VTj6Y6rAGJxAXWRmu3tZa4scxZwNLLBjdQ8iKeCdUidJNRi7H4cEiko8x6Y9jwsxcBT6xcFP38tYuRAp3GY5A",
  "key27": "41fHX8n5MCdnBNkhimeZx97sebQmVaLfuL1vY6iQWXM8o6R8cofe2kbr81pctdepoAigRmy6eMdsBatJmRV6q2fR",
  "key28": "3fqrHFLrT1RsWU1PMd2bqtiSxKTxRQ26uau7TgUj8CfoMRZqWdAVsEfvdcAG8iMjeXgkPDgiPaAAJDULVYSwBcBT",
  "key29": "5u898i6a64N6zQoJK5sdSt1rvbo9kZacPhShFoiy4BiW6B5cmJxbzQCAMzPtxMxofE86bSGtMNzefRUNGgxofsC2",
  "key30": "65Kwe1NWq8fjF817PBbqX96h7yjuJsydzDmDXaKALtJ3tgxGqpRVL4TxF3GSDG9pfwTF4Psc7xn4qwKHEm26FdAg",
  "key31": "JJKCieYP7YnnFdNxRePRkZctAvuYRxfxmK6GopQ8jkU7HUppTQ3QQvFbSMbys7qPVyDZgggyFfQbA3xpQoCtQHy",
  "key32": "46YkEsZKfuk5DoJu3Urk6qzY8EdQ6V8oZhcCo4fXGqDATEdXFgTK3mjZi5HuudwthzA54j4i4cvg38yWd9kz3tth",
  "key33": "5jfSMG2MzN6DXPXcaDfDExFSUzUo9GecD3p23irwwaraeWqbkvut9rT4sDJXPGuW25kxo1TPHeivtSzkMbombNB5",
  "key34": "tKRK7ha1gtkwu8TjeUFuxV7YbpPhbf7D63CRKDf3z6Lv7CuwiJJVNCtiUyMt5LEEgUd4UeDcZxsUHaPMpqtsfcJ",
  "key35": "YjJ2WiKLj9BK6ejuFfSyxDw4jNWGBsYU34VFkDdku6dd45QWTvW4cwWPVJkYxcZjpSQiwUa6EtGg56rcWwc8VT4",
  "key36": "2PMSEuHT7vBAmqV13QTuAvYqsnYQo6ikrHRUAaz7MD4nx5LmBznt76hzUzGw7tXiSvJQb6WsHeBYxHU5PRhPuaFz",
  "key37": "5jAq5WR7UFxsEivr4PVHKHZqToBmCufRqvt1g22yUcQLRnmUGNT3d47y7fbqdZjfsGza7xfqHF5FEFHQx3cEuuxB",
  "key38": "4b27S5G3giHs84mJEJN4pyHvRNEqUgmhg3Aa3cnzBYj7phYpHuBkU1a4aVt9vvNWFGo3KR4UJJdxb32JZwdq1UPD",
  "key39": "39AgZeFepWqcpfLcKn5C2CyZW59hjEBjUQ6r6Vk5Ut9WVD25ri37KQCREG5T6Mfk3jmyXzvXNiM2M9kTmydDom4K",
  "key40": "2hfmjnxU8YbR2JLwSodmSYQUA8UNC16URB1BJ9zZeYzK44VX7pfQEufPLHVSeuXTPgcmGe8rBfiNdcuyawzML6EF",
  "key41": "3rAxPTBoVoN9JftrMDSAFKV5d5Gb7z6nm38LLvcMneaj1rBPeovkLbiqRQdaWUsxxFPphwGbfdty4jWG7a8PpWEr",
  "key42": "4HBYZgTscYbB5btvTj4EjyP2s1ZG3NwS5ueUu6zUJ4LTdAE8PpbCztTBBFkhqvjHm37cFu1Q51G5qLB7WtGMvMJR",
  "key43": "4EAhYkGtG5mrBtRnEtsxRr6q31cuQ8PSxz3iqDcPPWgcEG22nuLNS4rSNVc6MTU9WMqM3J4rLKRgd49VQrNiNBMn",
  "key44": "xqxdV8vjmre9WGMDokKwnhF5gbEDyJfjxoWbXZeAYRPGwBtGaQmzvg7ZnKL7EW1NcgCFQWko9x4h6qcoSGoWxBY",
  "key45": "2cRw6MCE2qFpbCCiGNXQYcijVH8dmj5KXMg67UhaxQJbdDf3kaWG7T7SUa82CenB6WRCMM7KL1KJTTjMU1bM3UB9",
  "key46": "2akUSNTvWesAd5LGjiq89GriWvNxp7Ln1Swv6TBNL3R9J1JhPdS84Z7RpDH96TakxWGz9F8chNyys8YJnvYa5a1Z"
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
