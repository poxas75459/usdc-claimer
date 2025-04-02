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
    "dUYTg5wmXkeRUwwuJ2d6BAwh84zKCLJqjmUAzPS3VVXGFGvdW9Y8BMhRgb57FfBCUjWvdTwqJA9ttYpnJj2RWVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nhkh5voahrKTi369mNE743iSo6uSJVfVYamAERziX1wkQrFg6W3MM5jU7RYJBgFhZp15xK4x7YnisPXAX3gwqqe",
  "key1": "gXnP7cdxyBsMGnhXawrXDQj9r9BZdognZZHDJijACmuFsKXEeMKjZG7213qGy76ELTTtTif9ZmDjj3zyKWiUvkj",
  "key2": "NwWveSPWR2hZP1jHwC7LqBune1o2iAxGhBWrgTUiZ9bvnr5X82LA5qvQTHwDuK9XsuLj1L6Gmt2zYUrcporEJqv",
  "key3": "5SdV7qCDfrkpUWwcdzo28EzVVfa4iXtqMMnNV8wD8EyFaFH5reyMZXUhLum81P94sBygivobdHrLdwTR7Qfxb56X",
  "key4": "3tZ9wZosgthqMB5bjTJfmow5VncaXXh1xLJXoMFPC7RJjW4bunxLdbmMohmiCzRxmj5qVKek3SgZ7ruzn1uBu2NB",
  "key5": "CLUiTqJEAii4nuBt15WnGKaZgWSrfstUAskpiZZzByvY1SuJrzJEz91LdDGQ4thEFZXrE94BxDHvM6q7sxUiiCr",
  "key6": "5o2jC7FgrUPWbz1d2Hpnmi168hXxAhtfn6KRNeHJDXPkM5pQwgaPzbjMF4mEc49wwgSxZBpCTMAVKoA1ZCuMchhf",
  "key7": "4y4b7osaeauU5rs3ernRCH7iPnzwEPoX79o3TycfxpMuXbh8hLctSR7aPUc25EPMgQisnj3Er5DrFAbjoiU4hRT4",
  "key8": "V3a9UV9PtcrGndoo4EtsRa9tcpj4obFerTS2FLKfEYq5pr4pf585tPS5bYaZfP9CCHtLL8R45yT311GWY3UogrA",
  "key9": "5DjZtSFTtGBjAoWeVmdh2vzVH7fo5JGMBKvcEnJiwT9ikS7whNupKxZJMFUct2XyCxFPPo9PmmnVR3f3CNVcNGbU",
  "key10": "3AdKCshnrejkr4DhKRq3dgWwcdFdU7Gw1ge2aqMVgmP3EUC92MrZjf9f4X2ddopKMPwFe7afMesxy4ArpUEAoUqJ",
  "key11": "3aSG4D7WjxxjtY4MY73sG49Lsc6ir54pU5MDxNntHFnTUhDuSBj2NqehJXCkDmqMJsQc5XYc81uqw5fPRSfsfjg2",
  "key12": "4vLNw3WEJYhZCMZu29wX3afQm6L53Cak1rV2maagn8b127D7XYdtFcteNvnwCLu4fFgdBrwf9S8Fym75msiiKrUZ",
  "key13": "4zh6vaEwuNKx3SzrNukE6yGuHZh6LncXCXaofqizDWvzASmX3HXFStZ2iARpz4fU3CgjPXD1tGJxgzBZmLkep5m5",
  "key14": "5bLvBx6rAf3iG7TDoPzAhK8kuMNhCRSowtH89wUP447tnkrN9QvBKKe1689qVMN3P4UmsWmhj3Lqdvypy3tJT6Vd",
  "key15": "4kSphu18sA2bgYzQtQGi1DDRxFve65LJj8kxvaHnTRQfzL96HnfKbkwboZPXzjmukDmLNEFmSh3ZwTBZ5cFoD6zS",
  "key16": "4WvBCawnZikBcFNipd9WivZ9dHbfcfzXJZPZvzasBzcmNmxtFsm8r1gVdufErQj6A27xuyjv5g5chLqtbUQVzfkX",
  "key17": "4AWEZs4AjDewxcRdWSFsBnWYiC46UZF8HFxB1dbnAaRxgdRykb45KC3naPbhFjYgER8ZF2Z57ADzrkGBfae26VLV",
  "key18": "4454aRJwCFz2soykTHAURaPf3hWvmyRj3beVHstLc7sio4QCXS5e2Rs51TzWgvpnV6TUUyFijMJzcB9FzH3oznr2",
  "key19": "5aGZry38DjBLVFeXVvBZ2MGq2YcqQR5zMGJLGjkBq2TuoGAadp215nMAtp472zN4ReWLvHq38Wz9b1wk2YJ9mMnu",
  "key20": "4b1yWbowbwAZPE8aKqLxJBv8zBQRy2yQ5yatYNk9B14WtdmTdV5qZZNBYH7Yu37nYUECuNcxSxmbzMMenbGjpbUt",
  "key21": "4rMeedpNPvCXRJyr7P4eQSwYEJMx83K8RpAQeHhj2urWxCWATGmsKsCogJ4uJwQxMFhwymcn82fMyaZ5mTgFzxeo",
  "key22": "2CZga1eu8M1FCZhvJ4SM49kPP3tT4x4184pnpANWMSURBQYBSZ5ef1Uho4gR6HbqUYjQDwUN18w2CsZSsgUuYKpb",
  "key23": "61GzMyHwskVdkToAa3oB5aa9JL3FMKPPirshf9seGAgZE9pSUYE7aF4Mri2NvWoE52VL5EbTRgonyLfFhDbUhCCY",
  "key24": "4SNP2ez4ZakQy5xsNy1gPDh6bUyD9JxVderDmHPD2qXELfPGUhJF72CoCwfzzUpRwRBoukA7N1aMWdBvGutjxJUd",
  "key25": "2oMR9pCtSoLenAC7VJJ58N1x2fmP9gvxY15mhZBW7ojxcJmHoxRC4R7qGMNwfgV6Qi1oER86JoDhy9dJNJvo3MJx",
  "key26": "5XzmfNHSNHWo2PS155Hwp6H5KppRfvwczp9QcBPmZmWSU9BtUWvH3g8BNCJRvPSBXe1z5QtVh9z9hhEDQn7s8axg",
  "key27": "3ghqZt7DrCZnjCBdqbXLxmJHRxkNJYD5L7sibipQxnNPScVfknopHH8i6xgQnKRVo4uPJBXsQAEPFbLRUPAsa9K5",
  "key28": "2LYV9Vh6seXKWq1sc8dXHkNHmEprC6rJkWQY5yvyeJ69P626qLdKbgiL6xPKw2TzcV6UrQhGszEKVgwxNJPm3cvA",
  "key29": "4aJqere2r88QZSbgSuWRot9569MWC5dDqt2z4ktGGQZP2Z78rcbXMWdJbyKLteAwk7SZBop5kkX1oZDuzCFnreKo",
  "key30": "4YCWavDz4fhz1skKiAoKZWmf1auuAkrmEduvQZk23DZWseEHKAjCqdwvT2DmVwTyeD7fWY7G58sXv4J1bv8MfcDS",
  "key31": "4H6QpTg5kLUHZfbFeQD3uxqMLrcDawTGSTioJHyxxWvVma4xRvqViK56QnA8zTPsoFrdigyRTCgZvzeoTb123Tbk",
  "key32": "5GfPp3wesYt9XWuTCnHjw7H8VLKjxRdUVmGnMFmi4iwktQLYMje13K9QS9mZ3zPRPhzc1gD2a6F2foTwAinXkNc8",
  "key33": "bWK35yjJwk6dGRCtZ9xVSdT6PZS7QjShjh9YrW1R7p7hH7SQZj4foWbSp4TkKHB4V5ut4pg2QJpFKoPdWW4ZctC",
  "key34": "5o1m4HNfQ8bouR9VE66AiB28vXn7e3VKwXxk6bSWS9aNWUtYPCeATEFodVmB1FaC9iRKyhW9txjbwdqKHXYYziZ8",
  "key35": "QPkerczWXZUufNdgpvLwntBFVGDxVZCuf4iYPDKKXdE369Swsn34LqJS1pkPTxkwn7vne1TpaBWRQxo3VjjHpby",
  "key36": "4KyBwHnG7ivohMxrBbyg9L7XsxfPaHeNMYYLCHHWfRiEGwwmEVLfpUHM1Khcp8HWrKe3wHyikPaHnFFeE4z3ZS9M",
  "key37": "VREEHX1zSWTN8TuWTuFxp7aBdcncCo7vDh6L227XBtUUPx1rMjSw1QyXEsRAY4xkctCftsiyc6vp1oAK8nssCgW",
  "key38": "2oNNqtUBkYC2skXfaX2anv67r2qK2kuN3gFDPqfgtF6nNi4ybNnh1595dJVJAMDfUJXFcaRJFvCaJtkNh6u3TDDi",
  "key39": "3WjJoJRwXWsbyyYRMS22gdVQVdwzTQDMuL4un3HQ5eZRhGzj2c3mM22BJdQG1RhoLt2kbj8gCwsFoJT29A7MNo9p",
  "key40": "4RPZqAm9ZsexbYrpuvfoVYeQfnnxrhhSwfrxKYsokfCQ7jCR4ZWLVYMmZeUsoa9rYCXCtFSSG2hk6GpWQnj2PqEU",
  "key41": "2g92cDhB1pH2jHSffCg4agLamCbu5KubMV9MgiSkG15V79QkTZehuxb6YKpGNjTbMSfC9upk4bo2bFy1sH252BP4",
  "key42": "46GwT8mFhw666vKgQ14jbDYWcjUX8yX7nMbVn5i2dEW4SSH9LWZdyv4GndVyGKFN9pXsrFdvA3u4JjFXeUVjLKgJ",
  "key43": "3jHNa5sDZuskYCtx42GNodZfYJzhpuMgAUbzHA55vjkDLqwWND5qmHmpvSnUuasjuX7q6ck6JeFUFJ1dYoYNoCAa",
  "key44": "5x314FkFniNJZmsszGodJLcCqgPiSJqqA3QPHUD4hbmTHwpSB1PqcZ3XZukhtaJ4HVz4SBZKCkTpfbASAEL6L6jo",
  "key45": "3XS5MHEhPmMui2AuYta98XgGvkHm3zoekDqHCFyn8i1t7WgEjeauZ8uYhiwZieFeUWfGk8AX8ysGL1HMtU3mQ4vn",
  "key46": "55bK8ipA6pZNGHJM4xyeddKQG3SzTY3DEw69A1G5DkgJjXvVj6Lr9QJ3MgQtyPHRD1o7BKekEuY4KJUX9xXjbPS6",
  "key47": "2stWaL8Wz7fadf1ahpdFndRFmuAKzxvDxTsxDiyBEwz6vtAiZHZE9MpSyH2JyvMTuKxwSywtzJG4qF3aNKUVXn5M"
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
