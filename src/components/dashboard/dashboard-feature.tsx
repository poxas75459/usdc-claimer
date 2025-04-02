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
    "4CwXassRa4zknLVPEaRNHC9AoLnX54uWbXdCpGyPesujBND4YMCiKcXybjdbbLVFwijQMgMjSAgHZUxPTCCKMk8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3akmJc2KrHRYaHtrTFQtyE2CsXhueUU4K9Bzwp6ZuvagUX2N1tBvE2QQSs3CSK6FBkeQa9Cuxi8ajNVxLWgBqoJ9",
  "key1": "3bmgX9Vsx1XF3rPN73tJhVxYg3PRbu6NeRtxXU4vNxd4YfbHSsWHwJsUgRB32tJc8cLTTYg4pp5h39S2366wTRia",
  "key2": "2Rg66RWXgnBLsd8p5eY6YAtRczyHAg8ETm8HAHc3T21irWaBSUPxwg75mqrqT2nRk3uYkWUviKjLPg7abU25qyH7",
  "key3": "23AuutfarexxgQJ96G6Vb7ocyu3aP5xZY39Ec9A4kXjoMrJV7b9u8RFk61ErZK11GFoKvHxt3w8vBDsPUnVUE3r2",
  "key4": "2p48oAL7kN1hqK3BYCRxAo5zHf3N3J5Skqez84762MdjTpQRyV8oRRhTBL7rbxKfBnGFJmqJvBEFwBpmsSRxJMr1",
  "key5": "35CR6J7Aq9qynNtZtGcwEZCxvDoR9ZzPZp5cWJFawZS3fsgkTgqinL8NNhB5F7eFLo6JGYQEoiArAymRf2YZw8Jt",
  "key6": "2Q7a94ATh8WfZy4CnKJZLF2d1KXpz8Ec2BihpRGS9ahHzKXEPpXBoVY4vA4JJAJZiRYvdGu6V7snGseYusucgtrH",
  "key7": "ipE9QdGpKzkCDWPPH33wBdU8ncfPnqwTYpdCrrETAyxPQNX8QrpbPvPnz1G9995nmQXRV74m221zh5EnQgizRdh",
  "key8": "4Kn4JEJ8NCzf2v89tuqp1epNBtR5nnCRcZnZDxg9TkKpaNnFjyorn3L8kA66LepenbtEDhbDiSAGaQFpqZ9gCdJz",
  "key9": "5bYpFvKebxHaPqwcUniMJWQ6tYkH8QF29qfrvZghYwYT8JAJeRMkTtmyEDiGf7Kegt8jBYj3W1mmu9MnA59Jou6W",
  "key10": "JDgSzzJYzNTDDaKiJrvDaufCVf7ms4S5goF1xvgKwGND2hGKZCvoRBuzN4rMxirU94zu1U9JCWitjxHCnTaHnGW",
  "key11": "55akmVfU3Vi3hkkH2pAo28JqPwnGsPB21Fnx1AfCo8LwwCmi9YCLDHao73P2cJ8KKfaSxP7MaoaD3UbSjXWdxncT",
  "key12": "4cwxvc3bXMZUphH2giK6DR8UCZMdMNXQBxjDsRvEaKVCcgFwKKAC1f4gXNHyffRqukcP97YqE82ivK551pWLgRUk",
  "key13": "26i8VHiqeBKX8BEBfsMEae44pNr9uSWFpZn32B4BerUeoAjpuorT433hLyefScG1MnBce39a3oBjA7KDH7JyE8bM",
  "key14": "5Ftk1uD9MEnQtroCMzcbGkQWfWH5S5MNccgz2QmCgV8PrhfXEZu3uMbNjo79HDiTYhM4ENiWTE4s7N5wBGLzsT2u",
  "key15": "3DFUrwrpjFoDJSNpGVaFykMbyhppwYmvLkAK7ipS4xm8Csv3w7fZm5yTjKwTgXu7MFocvpZvSAFHiV9jdrGPwz79",
  "key16": "UHMDDGvio7Lc7Bwr1DJT36jkTc9fK6PM6ENFccVm17g1sSEp4Ne7CNtxbAetQo2idhW5y5DZj18VzZ93SKhW86z",
  "key17": "4YRMua8mAukvHrJHuojwFVZvyRvtNczeaYg1BiYVrToMGE42hwptYWWB4ww2ispZxu6LUzos1Qf1xs7Rj1DyWT4J",
  "key18": "2Z5ETyRizYTBdChSVjxkMhgg4TS3Fmu5R6sj6BXFcjx7sgDiXNMvKLUwhCjhPtsDyhWzyWShZLrpnunVq2rveqU2",
  "key19": "3QrGpVeajRTf8un3DFRKtdKbCirNJR7uZDD8PmvwDJoNukEXmqx8JLEcNhKUbQzkifFnrSBWDSjYuqTT6K7qR6Xv",
  "key20": "5e3fk1YkdHuj4eiMd1ggLuix9c21VcZrccHfcbfPFcNSvFGZLNGfze1k8SkFE7rq2zYjrrUx4E3mmaVy2LFx4hMq",
  "key21": "2bQCP6XUYbb3GLNR23HX7aFezLRXcF6LBmbtvobQdws3YGh5xbd5hXjE5tu5Gv1XeTxKrsqipiea5wHBTySeiWhy",
  "key22": "51pCo6YyLpSRbCH3ZrrBBxEcHRr59SEgHFeARvhkvrhwrLar49L69iXMgQZDe8bpsQ2G4qyTJnjfhfQJos4S3YGd",
  "key23": "KQvqTMaQ8MN1qpn6GVj9gUNUErqnchyLpbRW2WkaeHZmg7wXvYgHkNDpmiANg1MgkcJd4mBT86iJEJDLcRECuLB",
  "key24": "4oMjsVxpDxnHvxCYKhYLkiZQMMzCVKgqrJMxLWhG96ogLtzzfvvrDmkiVQHUWLoWWGwRdqAZxQXAhJGvkGJYqppF",
  "key25": "2ACXAoxmdFyTYkgVtgt7Hpc85YsoxErEBFZVeU3Pga3XM3GbTeHZrNoAgsEjdK38AXa2vzDh48YjEVMTkvGjKF4k",
  "key26": "35JAJCwGgGY5eCHbQQWJ5kSRaRup352fMLtA8561xRivAfDpoD8WkX9C9y5R66fKMWTXpyCBiUKgXuws4hnjRPyR",
  "key27": "5vnVHHWSBSZFChsaRxLJgSCt4NPhN8Wat1Ji1dVeAN7RdmJc5HuUGjVy7GYBdDect41XW7MaJbJNX6HdAoLvYHBs",
  "key28": "4ZYM52xPeYV5sKQNXniBygz9TFYqjm42oqJmCZtVwpJCJM3gfegWgDYYY1URHZzfJ5PTaY1gCf1JNNd1xoBFY31U",
  "key29": "3pckXBFfPfCsFQo26nCYLh2j9rPbxjKb54jKxe3Dp3yYKtDuL7wdDCANgaDPATbE9y2shGgS8KbAMya197yoWBbf",
  "key30": "67eHzM33siBNDXGwvbwgfvAEj281nfdGqySdfnvCfKx9sMm8Zu31jdaAbCbmNCQqVECkoWdMr9NWB1xy3ZxdditP",
  "key31": "5HHGJuybR2NuCD4h8b85A3HvVHcmjVSVgTKTfU5BCwZigB2T2tevKy1eAzV4gXe86s337R3C386AMQz2AQPtgYk",
  "key32": "2G5pBUffU3ZT5QLXrt5ufoHySoKxqRjPMGtMVTNDH3rKQ2FQFHyjfb3mw8vhKYsWPvSC1wJdSGepGxNiVj8cXn5R",
  "key33": "4aztsSGGqWFbqWh2gMEmJ7k8Bui5pm9L9qjwzgfg9xqwZZoVAmSv78h3E6H97AjceVPJhEDNyyLCcEXmeJa8neGH",
  "key34": "2oH7HA59vWwdMTuckW2enKoGP8ZxBA26DiYc64gFNEomhbaaFSWFP8K5yHDsi6Hd1EwXG954zECDPt9WyR235Cbz",
  "key35": "3czwqhJUNVKHVKTgy9aZBrsHKH4tPStdhi3E2aPEBHYFTWPwtzXc6TXjqFTU6GGZZqSVrKjo6qTqTSzqTwKEFNvQ",
  "key36": "3L6JJghEMgFrr5SEMukRscM1W6hr56yWju4WdpK7mpuFikCKmoQ49sbEaNB2RQraB44rqPZVZNJNaiCbvX43UQ5H",
  "key37": "4MVZfWYaw32sJ63J68jiZpMzvJJYFmsbnuCLJP3DwgDU9jwy3ecaHg2ajBvqFGs3LVrQkGrCUc9LtEM7dNP5sRor",
  "key38": "RpVKibN1BroCDr291qBVzCWYL3V5ePaHHPBnrfzDwZWr89LiD83rMHdHCknZgsLAhAF28xNBPsEAyBVXjgA7Eun",
  "key39": "3XGgRJYG7JWeBgwYbW4WKeLfg5iJPcSN75s2cdg1eDsk4825msw1owpWb7eWfMo6bauU3CNf5C4oo43U5ePyk8Qo",
  "key40": "mdaZnMNAibtyBYs11HeeHg5HCkCKtTkQZ2xCjyo7WEh7a5zupnzKnnptDzcv9D1fTx4pGCUPL419TfpUQGAwhRX"
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
