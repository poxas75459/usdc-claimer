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
    "2C9sHwjKLCTkgFb83J66CTpUp3i3npLJLwGBYeH1yfwGTE4X7qFga2GTB3bLcFKM3D43xMxebSXqftMjEuV9unVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UAxeLdKJuzyC5PKqTJqunUEt1roZrCixMSFk7DLonb46b3DVEN3pLEYmKqArJEfu9o8Fki67vWj1ET4nVtrvRDK",
  "key1": "BYEG9FZy48ZMnUWfWmpnsmBNUFkpWxccMt64uEkNKAjZsVeZjYxBgXUsgGRaZik68KndHNmwXf1sxH8YUrbPrzf",
  "key2": "efKrCP9MnEQyRwU1fcsWRWhhMg6n3hgtsjXWPjsuQgkCE4QJwVzzinfzhfqxL5evEaEm7XDoEoTaAC5q8B3XwRS",
  "key3": "TciC2AoFgGEY6JL9HB34P8aP4FkpZ2GEBEGJiGysUX2xbx36mcVdLQHRY5nDw1b2SvvFfqjwbr56312WfCQgGfj",
  "key4": "4Qj5myULM273HdTXrU8JCiTPPeasDNFDjj3cgjUf4wiDUNwchdoaWEXwHjia32Z6bPFGifzwno7gQ1MUHFJTMPKx",
  "key5": "2mAsWDpkxyCdtENC4mDZn16VhxJaDMfSuABMQuGgjeSEd7WJDCwAkRG8LhonkwwE4B6HGDA51c6V16nyZCxcrQ3n",
  "key6": "govssPkWEMHeAzRDGQVbkWSZCfSvaYSsKnno2dtf6NXkyWiYRsQVWJyrkURT3GnrpojggcdG3UYXPbsvRTwwH42",
  "key7": "3eSoBYiAYHSPREU46rJ1iBWbrHmeH31Bm1L8Z42X3HsS7t51A6tvhW6BrVnm5MaEePwMsArySpfGEHQFZw8CTT4e",
  "key8": "2HuJr6GsJTDRw1rwsqNMMSZk5yk22RFV92h43FSyWwhFXRWG3q7SDgmVQFJX3AR3TTtBy6KnywFdK7P77om1pWMD",
  "key9": "5RPy5WsjrtsyoL3vku21gZPq2vNUSnp1RdvtK2DXgGpPFgKtP6yXEGDRwXQPSAknAd231CDPctgyDwuF9AQ7HJvv",
  "key10": "3NJR4Pb4Bicv36rKtRmreaj2HLsSErCK9WG5RF2c14XX2xZZnPq9dSZFsTH8YDxX5j9Z3GeJdhhhVYk1MUGwGbuS",
  "key11": "2AmzjaPvEtTPVitBiYiPpX3yGhtXypg88oCaBErPpM2DkaH9vLq3V5d5XGs6WeSsZoZ8aRZF6zmwvBXWYJ4Hi6bj",
  "key12": "72LCtteZAp1kXpYg5LuqFQjd4FnPjDfGn3XUcBASH5rBxVSZ3C9DtrHd6zLcBQ8ydu9U3NWn6cWMzzdKGCSR7cZ",
  "key13": "5gCCh5dqLM7vW1kdwQ6kdEXpwmdKFxvz9tcacUBzyQ92YSJC9W8rUpqXUCc9ADYhZ47caNH8JGVdU6phJ4Dk23q",
  "key14": "3gB2Wz7Z7KfEpvzGQxVWtEcktc66NCRb47hX2BFmgrCk9YVvDkHdNAfDbSnJdN1Tmd9aFNZUkMdZ8gBhLnNUtPpB",
  "key15": "dPjikHG3rbnWEUfiaMj1jCU3xmLe1Enbp5TbCgzaXDniL5KLoSLqmgZXRneJara3wyMLeyZE1LTzBdqpkpfBGm2",
  "key16": "2LXH994NaAdY747qLP2osZPbwdW6Hr8UERZa99XrQbahKN1aumoFSaVZTF5DYLuN9kGBvvxNm7W2vHb2jf6SRSb1",
  "key17": "4rwiQ6uk59D9K8kRUSpUXM9hXMnwJRoRTBcU328QJh3PLRF4w1WqkgFTQcbxHQ2p4gdCJ3Ac2dsbC6DehoBHksqL",
  "key18": "fggf6SjjhUSEWdSwoakrEZSScsrSz23NTUer6KMWKnU1ALih15oMys4Hbsom2jNfPfR9tG5F2dTZ9xhAgrQwWWG",
  "key19": "5CFWALz9hZKvStSQUtnhNYnaqUy9LJTr7ygj2tJ2xEhpWCUJLz4bnkTKi3htNDuvLCUPu3jQ5DjVVdtzAhJVk8dP",
  "key20": "2Ff7TSKypA4pLq7fAbaJ2Nf3MtjfdtnRJ5zNCLhufTPUT76jtdPBkF1kt4gBnCYhn58gx6ev9bxCVJ6GVnnTbnyz",
  "key21": "5T8X4ZacAKvGBBmnrqC7oeEauyrCSgohFTYXhrXmGAnaFWZRaUUacbK7p7nMhadu27cXposoJk3BpLGhmpryfiHp",
  "key22": "4jR71ernE25PfLLhQXvJGXoHDEsxU9NLbXScrAXXMXr92p8SwTsCXgBo3YeahSyE4jeuEHTpudBUh6sXTUfodDUy",
  "key23": "2g8PPuKWWvUALCatVgrNnxo6pmjPqWCuaF1ACNZhoyuFfsJuKCbXGiK2GY2BuZTjuVMFttkJHUd9sPy5kv9AEaTB",
  "key24": "3feEspNr3X7UGSzWKajTny5pXMy1eQNjbDheZto2vPbGmLgZBguMzMPCfaKUKqLFj13f9soGH2K6jATaEsYtieTk",
  "key25": "sRAN1jwU6Wmotem5Feuu6LtTHJLE9RVLiqib8pSSEGdASZGPdvEUMh2p12LkTfeUYtYQ1Vq5FyDB1pbxh7EKNGk",
  "key26": "5itYmtGxCjWhnZtRkJL2XVK7CXBufRHdbthpWxFn26huzJX4hHpQ7hhpJti1Pyh5xiomtYDFNUj4xA5JzoWGECAX",
  "key27": "2jax85okWveMr37jDdycqKbzeszB3HYNsGjoCzsna5UQzPj6cTcYbqeRUuJWtHU36HBk1mXF7ezNfjtAhM6a6zKc",
  "key28": "4TkEdt4CvAC5DWKk13S1GwhcGKvSiFmmoPcReKpdz6BeKE1KSQE179Aqs1NhHDs2o3gsqK5ZD6P2j4BXPWjWBWae",
  "key29": "3GVAwDsSfF2ah5N6y8BJrUVuFEunw6Pz5zPCtzy8fxfzRDnaugGL3JErEGPiubrFo2BzVAx6FARweXFsZGdTXfpE",
  "key30": "2hJSktucNpvCac4ZvZZWvgesWKNkyBXN2yjbJvaoDvLP3e1ySXHYZAP1fJ24SJEoCxDcTJ5X1duzg6du81hTdn9y",
  "key31": "3w3wBvRda2CwYUb8mXiSprDqsitGvfVgN5brY47AukVWVnyFG8Mi9yMkuVGBT32ug1PpqYcTfuAJzx5U97z8nwhF",
  "key32": "47k8DN5RKKuL3U1QZ6xKbqGeQvqfnRNyxw9kCPEMuGhqwPpQeRNaS6fvNcqKS1q9y66mkum2tAiT2TCHUvcAXuTQ",
  "key33": "316YEvNDBKiUKJqBGy23CEDTyEAaapJc9AKoK2NHKcj3DioufaEMAkUFNJ1KGhUfbewtfpzJsu182HgCGyRjQEaC",
  "key34": "32WGpVYD4FC4LCeHd3XYq85RFvBktBe453TCMnav5ppW8Gj4pu8ib7oPUHUhdxtGxeUR48S6ndrSiLShsX2Yp9Ta",
  "key35": "4BnhAbrc4utzZHBqi9nZKQzDFFDATr4Gof8qTnPDm5hk8sEKzLv5LEuuDkLh4yECHAV8cFG1kDhXnrmwSfnSvc4F",
  "key36": "3od1e54cVNk99vqchZBCC4vbNwtoXe6tWgG4puEj9ExLx9nMK9EfqVFZd5fFoaiubZ4hqUETnp2oGMGh6i2jFbNi",
  "key37": "5mw7ueccixxmq9SWFG7Sgyeuf6fJfwuMhfrgiqPowmVMXKetCebvFduHc5uAPnho2LRSULPWbsH69MrkRyas36qj",
  "key38": "n7YgiTN3UNhXQx1rhsG5f32BNVa7qoyDTSmURM5VPk5iMFxeyHDcQmT9Fyt2Bi7CW3vjuhsLpGyCvDqM8Lzt2jD",
  "key39": "2nTdWixZ8oQJuugLiAAAYfjYfTFEqgYN2yH3U3DcUckqxz6TusiwMfeteiqZCZB89EciD5GfdykVYaSchgn5Kvcv",
  "key40": "225zgq8eZnHg7prerxWc9YqXrFY9RVj476dFindHT8ixuuhXovt1YGXHapmPgh7BXBkQUv7AZvE8j3xFcpWMcoNU",
  "key41": "2Aef2qTtGvM6AJwbZmW4gHAwstgmHxcDWVzxdcVhbq1cujpx95QEwC3HEbkjyi8ZYzdz3ViSnsBGZ4BddNmoJebC"
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
