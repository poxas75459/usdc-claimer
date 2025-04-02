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
    "nFuDPCdVueyWGTZoR4AeESRMcgEshSiMfvd92SFssKEdAi9vqcXZy6EvS5btgW8RWHxGK7qLktQ5LqxF4HVqdsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gqJ5hUKm6LzYQbqtMC2bwRjoeKLcE3ZTp4RSsz7eAicaWGYTLo4R1vnJQAvqyyvLRELkdQ3LTNhF2kd7yBD1v5h",
  "key1": "5KKCCaK5fGRZWexLUExjm8b9BEh26QX65TkRb1fzNikF8k83zMyfBMDdk9gs1mpZih1g17Gdiu1obisZhM8E4LRT",
  "key2": "K6s7UoC1ad9YnP6HpUb7aRbKx3TohnxGmCBVPZdvKHzCGqx2BTXV4itbqohQ8Y5FLMYn7KmyBmts3BMwbrn3Avs",
  "key3": "DtjprhGTsykCmZktFjK3U37m2Z6pi8bNFz1rTkRY7LwMkc27edDqHL5KeToWP8koVBNWtnbmX8DbPprPrdxANfg",
  "key4": "4JVQny6ZQRkuAEhCAjMQ5kPkpJQWntRC8meFZfWNwjqviqb2KKq6aZeNiwj1HwyJ4getS6rivrJCtqsVQcrx8o5g",
  "key5": "2RetHJUc5VMC7tv28sH261o2UjwgLrA3tVUwt8mqKUPhNpS6JNjKSXg8Q8iseQQqNJuXQasQkFffoNatGtFrm6vK",
  "key6": "51Udj7PAqGjiAwZvJMzKxAP7axr7y1oCrPgS4a31VJvZvuxmXRq7JVvnzM5LNKyn9ax5AR1gdDEKrJM5cQb14CRL",
  "key7": "3xvcyuoTvJnGpU1T1JMecXeXbXPo9zuPUEH4tro5VQSWW2eYNnJLZ9nHARNJJtCTDLkJuDX4TrPaQRA4eD9Vcg1k",
  "key8": "6ATaWHCXtXNq84BnULT9jCer3CRrEZGdSUieqx44rE97ED4BRbx6weuXtNZ3MkVzwFRk5JEFKtP5tvEZeSADpkr",
  "key9": "47bjvgZimqBEhZEdYpZStvJcyJC2kN7sgpsRfyecan18PiZaPqrr8eQVHuu1zYqm4eDWj6iJvQd3movQKqsXWXca",
  "key10": "48eTzbnHhTAcdufz1FGE4LP58mdfqHAPRt6cTEvoP5bHZ5oHxJVZbG3gqjXE5TrWsBmMV3v52uqf8hbaoumrKAR6",
  "key11": "2E9Gv7fS51TpibkXq5VNmthLvmNgEyCLnFc7ymS4CBBM1aSEM8ZRakTbhZEi7a3CNaGWPMaBfnR99bjGTPuUFBmf",
  "key12": "5HAMLJ1pfJ8qnn5zstbzSiAeZ8YNhE9UcbuZ23ZfjjN5fQxZ5LwTzP48yf6mQVXxxpNBf2B5J5w5MLUQ1954Mcyz",
  "key13": "gnap3W9kr8z7GSFaJ5LdTP9Yke2gVxHY479bywMDqpGYJmQwBdVUyW6FwQygUZxTigJDxgFpumCc8FhYH6d71cP",
  "key14": "4XR2PzmJBZM7mDf8cK4RCePGQPZNQtYpBdsqoWwLxxD7AffD2yxAgHgYrQb3D7guKKMYRCxytemk21ALR8GoPHbX",
  "key15": "5TPe8cPrsWh7mgmynuEBALMCRJcTDfhSP3aHqhmPyjqdzfamZ9rtKkuUZm5bDQjzSyBKP7oTVQMnETsCJf2gwpQm",
  "key16": "2shXnfRJW9cwsXACdtroETFqbfEwp2wUnxT5baRzW2F4naqQVueTBkfvTSKtFzFvVwuvsD6xS1rM8pRQfXgMx2Fx",
  "key17": "2Tu5rej7etRvaqNjWxjwkr3JxyB5zGAntUHSpcUrYuy7WapJtnkVkZDLxxYdZfo4NH2pREqcaqihkjFVMUiSPkWF",
  "key18": "2FofwE4ut3AbW6S769iCpG3EiQMs9KjMyJyJU1zP7GGAmTLDJT6XaQBne5fSKEo1baWcfGoQjw1c7GedW3N6qRGi",
  "key19": "5bYnSCV7unTkQfpG1s81VBwUKNW1au1dsk5C5fd4U6yXcnxkZD7Vh1DZ23utCGQTJYncTT3EoXLMPp95wUT1qmDg",
  "key20": "5iinaDgUrWfTZRZXd6zvSk8GQYEPgBuQvRaQWJGYcRc5HPLXnTDHVk3m2hV23PdYaCdP7NJdsNwwtwDwaWBcEbf3",
  "key21": "3zMPBV4D3NusqCP48Bx2dicoWxBJcWVt2zx2ehJWexxiZnnUV9vkQjkYLtC54KfXp5oemGHyrmeemSRFJ62ZSVEp",
  "key22": "5XLS7JgY1MPMAmbLshePLKmWEqcGGF6VnFLd9a9hinCZFCt2DaGn3ixRX18XgcXPuTaozMj9roxAWo6wPCWJ8Ppd",
  "key23": "314YhYiBusthroBEkTc9dN9zCm6xSBFB6eYV6stmdc63YwVmXBtjRFtWAABLAXFaTWGkcgVSxdVU4LUNTWFbCp9J",
  "key24": "Dh3aZqsxHkiHvDtbCKK8Md8objqvbbrMfGdfrT4rvabiF5hqiMxUWWnRsj5pHsqufVkvLv9Cc52N3FpCr43SyaK",
  "key25": "3yC2CPC5MWRZNoBGn8pNP1PRnr3PwbnthtkhETugrgDsDf4kmUsx2X5Xmi5BGx1rKDz7dkxEX7y333qgNAMrHzxu",
  "key26": "4YMjFUQjLQL1SLT1ERUzhbrjG1ZH9cXNeJDghVRF4Sa9Wp3PUgC5zrbw6WojJty3WfBKw2vfgwLinwU7MPdqqB8b",
  "key27": "qe5U7VciXvAHU7yuPE7qNB5ueJvLBXcrB7Q4bKc1jU3Agch8nCzJRXuFpRHz71BDXQKHQbkG9647DuknaksUb4p",
  "key28": "4zB684izVkcdGtW5z1htNG2FXW2KSqAdLgEFZDNXh7Zr9bUtycmze3Bxowz7pQKzzy1VFzrFKkWPJJFgUoPVKsRR",
  "key29": "4jV2qCck2Drq9fWZwvECEZ6cGfiisr7H8FFrdWouSkmYwLukkxoGD53Z4jd9agVUrQRwRJCze2p6hJfppr3ATERa",
  "key30": "3y4EJfnphxSruQHH5oLuG7GUzQjDDM2BFPoKsZFekG8zy5Jm68R68bvwsg5SsWEvqGXGZdb2iy94nm7eLwNNxCWV",
  "key31": "4CoJ32Qf34C4FC6Q2vhEQTCy5NpDPXMei4g8bupoLcjnpmd93JrpD5XUyBRxKmCQCwGZ7mBV5xfMvHvsTYjFAx3x",
  "key32": "4T83asVfsDj9jXD8fZsytsN9bM5foBvithSNAPyTAqwnqg2YRApMRAUuTsXi9QgwuRAryL5oqF7VaW7SE14E6wh3",
  "key33": "2H7EdjnRJwfDVH12rs84n3JVXUPdF9JQC9T36LFntVaQKh1mt62gQFbWCJbGav25chQ15o312XyQMzCyRgZh7kF5",
  "key34": "2ozm9xMc1oWGgeR6TGQn2rKAReVrnetsVgEbwJ8wXP4KZn3NaJzyP8m5o8dHYFpBuF4pX8KKAq5VHqQscek114uq",
  "key35": "29Bi9juuJbZh5M9SwVkjYxr9iN348AGCBAMWDcDHczXXVKM2vMtFhzzw3NTZERdNeGB9FvUoGUzLhW8jpTqzKtWc",
  "key36": "4dZzh3sSRmNii4ng12RKaQioeNo2XuhpE9HRvCT7jGwu1zRF4YxZfc61Ljh4rfdaj84bwSRy8M83mXGddtDoHc6q",
  "key37": "2nNx83JQykAfYZyGp2NTiYvGpVX5B4AM8aYsN91FvsTrpxHReLA43kEJqjPKPj3eNxa5ejsQL1coZSmxADByWTBZ",
  "key38": "4Czuy1daf6rruAX9a1Y61VUMrR8pDm95qjm6SoBUHgzJJayRJ87ve8XH3Tuksmc1PteSLa6E6MigbgTABepK8qAn",
  "key39": "2gPgT1zvg4FSb4fn6oce3KnY4obdMjmCmt5Qxk6JknyJZ4yGC73xqpevYG8Ao4BgnXeLzuFeAgeqZUAnXpurnBeQ",
  "key40": "5AGabisBKNYa8UB39uQwZqnip4Dgn7uceaRiS8JqkzL2V8KBSpGjAkJMJ3FQfSzWbUPoiceVAytk2TbFyAKjYvrL",
  "key41": "2eA9mJZa2d1NPBzWUHFKu7kM1dLSqpV1RAaqm9cTijedyNnhKLkQifvLVe8VdR1HQHFQUgxrDhhzgKDgFemGvZCr",
  "key42": "k7QFU12PseLyE6zUtjB8aFxEcB1XpVRnth4NSUR3aFPuysQxhrU1YZo4EPUC73kHhWy1CkaZmtBQroDFmdiiuDG",
  "key43": "3u7FMnbfDLR6w6nVyiwMPYjccNwvmtLG4Cz1tuJiWzr4ynkbcnHS8oHVAcfm721BgaoyzhLAPSAvq5A9EgbCMTvv",
  "key44": "2e4mSRMSXgx58SMiZsK3SB6iqbojs6f4ieSsUC1MsAsWyHcyrC1yUHN7b8QYbKV5EA65EyRy6TotRibndAkbMiP2",
  "key45": "5TQJXajoAvXAEUUk7WonYLVEntsaULGhseGRvR7WqWNnTLvzg9FpuQuti5wCwhyKRwekqQgvgGP5bYfyujVgcboW",
  "key46": "2QZdcDGKPGQzwstzHAXpg1ij3tQzxPEfEZoto2LyfY7sb2Ctqorfzzdv2cyLZKdVmph5N8Ns5BSXvz6iuF7WbTEM",
  "key47": "4aiMDqMjPZZhPoP12dD6WsDhE1SvMYudJ3tyhhifEfYgS5AYY1sKxVKsfeXN6ZyQXzzk1HVBuiE4bTfA5mW4JQi",
  "key48": "5JGRYw4FPAXFTDXAQBZqasDk9JWDdPbkmBdkEbmcLGdSS5paohnBRSP5wYjsf1k7oExD5ySS53o31DXF9eMWTF6V",
  "key49": "Bjw1NsRyqyD1SwcxaXaThZbUngC675dUw8g9eBwcW16u4mbvXcNP1ETyNMuCTpKJXSYR7e4TiQAGcMVdVagKzC9"
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
