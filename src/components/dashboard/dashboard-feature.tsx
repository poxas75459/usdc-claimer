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
    "4JunAT7qEfxiCBnr6VKacGma7D51AagQFrJWmL4zMMyirYvo33Yi6xk25fCkAUwnQVRGReNCcxks39cKKSmnBUYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24E33x7y4VipBAJns6ozt1nXSXQqWuKwM3t3vZiBWUt9BZt4ZZAVRyMftVuGX5DKkGigioawRa4B1ZQkf7ifkKqR",
  "key1": "3uMZtGNaPYWuNJFUMnGKxsaVTFCAaRrpGZhL7aWEomyknziEEyWN6ifx1HxyA4p13z9Pprw4yZx9hmAUKnKVfEsj",
  "key2": "2u7NEWxEBn1tpXeDEaXPXsNVhUqMnX2TYRGPPqhgYJg93RyHSHduCp3hMbZ6QE3GvUfhy6YYP2HeUpM4XxtYrd4r",
  "key3": "DJK4LSvh3UaznV2mjWkrRhjXPW4aGRU8VhcRAEAPDfC9fdcSXZt6RS5bYfJJj3GPzrKGy1sbjtnxLBKnHppoS3N",
  "key4": "2BcUo5RqvjzFauuv9evTb1913bb69nge7SByhuxp4kEwFGKqjdpnoYpkuMhPUjMb1gci9PKoMGP3ANaaM5cYzYU8",
  "key5": "3T4EiCL9STHZ3JkTWHAAXa9Bimvee9Z65b4WwCys9PEvPSAvCHDGtNHdnWYwwy972mVJ592eXdFZ3y2873R3UgJh",
  "key6": "4q5e6EtdycfFAJwyHVAgsEKRebY9zdpcYGkAdxS2MkWoXMxpTj2ksHrC9QyCNzkxbhYrHe3ByioT7jGCWHBNCCzz",
  "key7": "4VyKYH5viDGYUJ5ky8Edt2BpHYejtWktnh1tLUA4FW8t3cFSn6ojsXxQTi4kxbFgDNgFv8KngKWt2RRQpo6XRy7t",
  "key8": "2y46fK57m11LgYrKcUd3UojqGvpN6ZJFLgK24LNrbvxSa4QSdyUUU4QZfs6TEUSypsz9yr7PAaXRBQB4UAV8XjWp",
  "key9": "4JZuJQmKXtH3JciBEJhufSmZs5bQwcY7ghVGaPk4AYRL1MvB4pBR4aHr8sfMbW8MXCuzjtX9CpaR1yWypBu9FrFQ",
  "key10": "2gvH8bMVahAeQa7YcaHzN6rJQ2yinnBZG2iuE9ztvJS2hSztr1wpwVDqZPDJkCHaqvayhLan41QVRJqR3Yd3zbBe",
  "key11": "2zfL2ZHJFo2oqbfod7f6XiGeqKuMPVDPoMCf464jzudrpPDG3hozmxnHc13jVYjALaMAQWvXW28HnZ6wngDZqGLe",
  "key12": "5LBwgwkHCaMLeZVp363TE9hJv47qddSBupwwJUWuCfj2QxHGHbexphVhuF1abaCQv9FB67GdVBByuGQZma3Nzbzo",
  "key13": "2dhpLpHoSxCcbFRYeuhMTaz8tKPYZvKcNWo7p2pdtyNscFSGuSX2kLAUwcCPNfToVxDdAb6jUgWhCtUrDdRGYtkU",
  "key14": "4aj6n5McYgv7HAiynAwUVgZTRkLyAReS1cYSwZ8kFYzKPUNJoUhWLD4BuuZsgDrnuAC7CedAV2e7rLdx3SLe6NYa",
  "key15": "46TLNkMfNVgRGj1L6crEMT4xUoSqzN1oTSEFcam7dbirwB1imrVJmzj7TFuj2yoDqJSN1vAS7d5FL2nuz3AG3eLX",
  "key16": "WUGyPkx5iQMSecLncY9DDMXMovWCfQSwpkPqmCPb7sxAUgHaH67SCWZuta2wRN11Xq1LdCh8nzpbRU3T7zza4vU",
  "key17": "24RbbRSrk5KnuVjxDho2EVqYrhWHtuuK3czLVEbMVQKSmFr5dGCyc2gCRvB2k94QHyCnRCbB6AkkXgnchVKtZhmn",
  "key18": "2schx1zTK8NRLCytkwW1UPHLPARrYazVisd8YGJnbGzHKHDxi14XKstcjcRrFfeVN3PjnFJfKdChza7ZB6tiEdW3",
  "key19": "2cLqVuCjpja1k5oe7yAbbaXaT2eVRycsqwaGWwhNbuZfEmksA68jVbx1jPhE4NPNq1AUhC4JP1Hzv5J8tvrC6Sxw",
  "key20": "2LvE6gwA9KpYCXahvmTFkht2A4bSHdeTSqTbDJPJxSEeKTBKdV1N2QzUA2Ngq1HHNQ3RgYTujwKWGsyQJJPraMT6",
  "key21": "4kwYSzLwcHWKTrfvCcq4yhUhohcowyHAJmQaQimQgsAFDVvFrewHi32ZCgttDng3qJVcQXuPH7A7eQDUuAVAVSoY",
  "key22": "4RTNFXJKFKmbAoAaHAaTJLTtERDjCVEjDFhd5bPyRFifqAQKdiyeqgT1CL6hP7JmGJXQPXmi5d9mxVNQHpqwV8Gw",
  "key23": "2nyjo4DJd5S3ADg4MjzXkBr1mt8mYWuPTwJ12ZESPuFjommYuovKonJ4KtenNqUJQuH2yKxHmMkMyifrpyNxremk",
  "key24": "5R7G68fVNNTqHyGdJdipYxEhNnSq2nUx8DV3R9WTUxgyuLRzSL2VZBoJmtuDLG2cw2QJSqi143gHb5kJj35S3puW",
  "key25": "48e8faTn8FTFpWSkELvHAF93vx9rWy9Ns9RhnkRc3qaE3iNpNjXfjNstbdVumSa2EqtYe8QQ9jkLfyTqh2pK3NtH",
  "key26": "3gK4hAdwSH2fjVyVQFdjQbHcZjDu3Ri8vCoC3Q5pAopSBR3TNMekn44pg7qCH1R8rvtD1EChrDQrXbstfyvVHgxQ",
  "key27": "3uHZBdyE8CryQ4uSA3M1HsS8UUcKkb7YZRpCFoBgjdbp5hTuwMiMUr193sxGBqTgHqAVhaZ489q673rhcDkcEcva",
  "key28": "2XKjjPRXJKVFL33DYRcVsfb7bvFKora71Twjixab3jzt7GHs7YWc21QxrfuuJTYUULKKRAUD8h3zN9quAqn9warr",
  "key29": "NeeqZaM2LJ4KtESkEYHomHMgFrV8PJKDNSdMqH5wRh4zpLGdRyk5rySnTErWTBer9ToRDhhghCAEbj1ZDNA9bVm",
  "key30": "PsvsBPuyeqVqVZaxySPTxUUT2WLRwDAZiu4v9B3e1K3sa3XNCPnXyopki499nHsin45htzrtVkciyQRLk7jcazS",
  "key31": "5ntCHxn25sdFiHpEssLSSyxJjqXrrQV6rk5AkM5ttYSRiWcJ1oZvoN5kXySW79AaWT9jx6yzYSzHRaCjQA93mqw4",
  "key32": "51fC32LmdPtP9wbUxhWhx5bNHwXewsjTk9sUZvNTGAEn4zvFq9GPFpbiX5EPy5zYquSgc6dhCp43vWpARvGQAaFr",
  "key33": "dXKZGXbvgxHASqTTjYUaHZn6pWy7QKjAfuMDfVseYfdr34iJCV4kGxKrPt4XZSMupVe4EGfHYjBwdHch34c3bij",
  "key34": "438ZXj25aXoZcKNNBWGjLtrabsFLcRz2frcnsydxknxhAkUgHqbXV7EMeBNeHJqXYHEakkU45yFKP1mxbkm4fXXF",
  "key35": "33XT3NQx6wb4NnVFJgc4eVq5sqdohR9L6BuFiGqgdg7JxaLUsF6W4sMmnF8vuqtreeE1nEeSZjupihKT47qwjyCQ",
  "key36": "4mekDHo5oKnSrmTbV3gZGDb62wxGEEyu5E2dNGZ3RStniPoUuJxNyEBGnc4bSeu6trEqDNCQTsMQtb27XW8RTPhS",
  "key37": "jbFD3Cjs3NKN7VED8iewgAmGw434QSEiFatCGfiQxNXNkwG6G62cL4SZJ2TdqHXQE9GK2tTHf12TXUUSpYZaMxS",
  "key38": "fgVfWUkUUgeLZgvueEU6Gznnk6U9h6vs84qWdS7LDeZKVo4Yu67iyUDy1NTEJwE4aYPuqtygk8N4CGKZPW36e9p",
  "key39": "4FLgu999Ee1hbuyp9PKV3pV4eYPaV4AzMrG1Ag5cZixmeQJbDB4RVVibnphaUwdZrsRTDkk2FnpS6icTQRETCdXt",
  "key40": "249wQapaFsVMrq618nXBRkDXaEQ8ALPqEcVtUFyWiropewhTxnVJSYHQZLMjTJoxYJVzuwrspYUy6hjgAAxifVsh",
  "key41": "4gj8xGNtUGwDrU2AXpbSbys5MQvRRDcNbH6u1Wa4e7L3TDEsMZyyNjjhgsNraDvEjpKgGBK2BTKpzqVpmLrGGiBF",
  "key42": "3ZsPrWmfXrxaapG6w2BfJseWdPETAT3Km9ovmscUqLfdaxEaTbM4HAmaN6E81NAG43k1KqrPUJ26ZEp3igMR3J3u",
  "key43": "2T2ttV4rHrBCDdHFhMdn1T96Q9MTWsSGbxoc3ZT6FauRU8VNGfBGvMaq33KdCpPNm9WUjsA9zaWetXMKpu8Znpwr",
  "key44": "5a9xZ7UnoTFw9A2hu891v4AexcUK59wR3ztPmYZzrbRJdc9S4JedsJ56uPrWAjNK9DNANYMqTcFjuh7AvVAXxWT4",
  "key45": "sVQ7aLwPnirWjRm5taDFdsZrJNsfeXifizNxUZxrWU6SYC5BHfav6VKvYCdnDU1sAXWQVRJdExjKwCcVffCtd9A",
  "key46": "bdUXcfh6mm6YBTmyFjFi2mk5n8ov82o96sn2ehLwdYah1MhvCCDkMRmPHZnjKJogDMTNxisJKEiByckQQCgsy3H"
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
