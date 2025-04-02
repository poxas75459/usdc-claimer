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
    "5yX5WoeY2LHBcd5K8oeAWyM2v7RKpcMTi2DmwfAAxiKcfezuLS6vHgo6A3SFgVTpSe5P1chc8xQxUVU3xPcd7fb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rXeB8QvaTR2eWhP23BHQUNPYDM8jRyqVkDh2jiwrZV5oMUHKZTstJTvjeS8cVnvuTgYpZQDAqFAvK5XcvAZGp7K",
  "key1": "2hmhnDHhRZCCSF5QedWqVhsDdx7xiDLg4r6PfBP2YBkCqmveifDidrbtZC1hzZtNo16YxpPAjugUKomrnbXTZSyf",
  "key2": "2XvEXwuAi7qtNUwpQsJTZj3jJqqKZLKYwfLv8ywmW6PGjWs8Cfbquo8wXiysb8qLxj2hvwAcdfxdknBz2pM9GwDm",
  "key3": "4jSgqLPBqrSgsdaZh2xRcd36CUNptyHN8Y6MraawNEmaLdr6XdcZvchWnvogHcXQqxRX3t7q9K4vXXdTvM2rRGGr",
  "key4": "3RSnkDug5beE2xnJM71M1pBYk1e6CeYU1JNbG3h9edzB6QhQ4CWqyehGB83M5CE6Zk4mPMoeZP4aNyQ3fV1w8FYN",
  "key5": "2aUn7YeMr5zbHpx8kcv4GfbLFaY9AegHbHrtixR9mBrhZwNx943Y6g6KBvYhH9pmFpSQ7JEhGKetNoSGtK4hZRwd",
  "key6": "47HCBqHMPjM8p7RJeUDQtYq4V49J813NR8Concds6aBXkgJRFnUh955GPqZsmn6znEFEvpSxy1VSGm5A5bU8YBnq",
  "key7": "57DCphFrwqbbK3xqWariSqrtR8mSEC6VnF4VxksRHXx3vy7Acc3dqF3pXmeXWEwZvqBWCufhHfUNEf61HkbPK33z",
  "key8": "3pSxFU5KdBHefjrkAXxJwvbVEGEsBbYwHRwjs2qWrpdXqUHxscpCJSxfw2MyMG4JPkDMHjbCw5caS6jnMW3kyEHW",
  "key9": "3rJUXwkKsf62MY9LUwjmF86d23UVzMetxCvJ9h4ZBAcqvFuzBFYb47ShJmgQBRP7w5VJmoYuCs4w9hYtRBQAPZSR",
  "key10": "4BuWQfwusGWHJ1TkV5AcxP6pwXpB9iTfQyC2xMgEpNyD8pyoV9V2YWh5xtdwWnF6ii75NYnk9LrpnZTZRxy3kAK2",
  "key11": "5WZSxSVPPMCL3QHqcGxWUSM8B8Mo9D6WPQHAHj651aDPuC3R8wmapjKYnmQf68eKKCKTbNbEtPv63UKbzLnor3Vy",
  "key12": "26rBDvaRCdvVhFyMTUidrQLzTCq8AkRdjqHxeH8DtNYqm1FZYJYKwVGf2QXLqV8GskgzSQG74eACJsUFmMMhJ1Ev",
  "key13": "2USkYctzspwUVtJJ61TTLS6gsdarPU3kW3An1WLhgd5PUhGJehdTtAjEVtaAUTCMtsx3NqMzBD4wRSGcQafwP4L3",
  "key14": "P6cKQZwE3dbHhU351xzKaD58iArsD56grEiQksvVDqUTCQfppWw5JjiyNeFYbCfqDnvmnz4391ZY61RW7dynRgN",
  "key15": "5Dg5eqAvG7VA9jfUaePF1ReFdw7VQLneu5xxUJmJCP6yQq9CtZNW7CAi54xgFdWqGN41BqBoFn8LNJwRFadpCYRH",
  "key16": "VUxTzdNTaDx4697hPNMZwaEXcYY2xG3snddk2p4TucvLBLtLXa8GamrpcGPQjGWtsr2nXVLCwXpyzgd1NT53hHt",
  "key17": "nkUiavvYZV6TTsWWLFNFD4jLtDg8dcpNmvHSXKKjyHcZhVMjUforVFt3R7RgEHXWjs38BTqwDvG98RGNStz5CRY",
  "key18": "3iSLvLr9qUc9DviRngfAHSV9T6dtina6dbe5cJMpUQaHiatxnerWxhWKGCHFeaQ5zCQAgLL8Ucjr2jQEfzNH2CA2",
  "key19": "3hEybXvjDzgKHX8LRJ2CiYAHyAL27USo9jGXdCYFmAJbZwUsDgEjgds8NCfn6SnwcBuBkh9dtHPGKB2APHrgXSNe",
  "key20": "tjjqs59BuiyP8uUjrGs2S2DnXU4777XNEdTf8KhVVWBLABLMRXrs9FHAEm2LTybuy5m2Pro9UxAACuRuo4XgEr1",
  "key21": "5Ny2ssn2aeMo1yKu8c1WJNsUKkZCJAsrhXEy8dpCwdkXWyyUDs3KAaGtyTy5b9GJVSgKSpgP6k1PyAKc5hEeGb1k",
  "key22": "L6Ey7CgUc5oauVCkZbdE9NGGs8gMYnpE5c4CFxj6kLdGBfsMushh7e9yeDV7XXz8dXhyF1ks8AjMqW1FZVjLqcx",
  "key23": "63xvHLeTCSBVQ4YAryDxSGiB4kHFz8qWvGF6qy2K7nGonCmmZmWHeJKLzgUpwUjoAj28gTGmJX4qYRAyoqRzQYht",
  "key24": "2DfXb8CsqVNPa86trqkhpaKzo9RxeeLMuxowHrRssWrm7HxfDhTktQtRcTgWMXybQ33yL9Fjw3uNEYjxn2G8pQam",
  "key25": "3ocAB1tz9AdF1SV1xz37FgKpFac26tjg19F1jNtbGUqJkiqoP5UYBDoVsTTP9sUPyQCrK9jDoonrqFHDmXuk7XU2",
  "key26": "wepNPsSyDq7CqovqpuYALjGjMEW2xetUzHFp3mtjVve82URgiFd9J87QueLkta6Y391XamK5YuNLoegHdUuCqNM",
  "key27": "3mLVKejTrB65drpWTBSCBTCVbDfVqh6Y9Cd1NV2FNfxh2eQ7bZVRXyrfTgAx1rHELxdYYJqJVS5FsSVve1gtPL9d",
  "key28": "amhiycfuG5qoK59ztWzS33kPp99gfGWuLyD4q94DqvQ9UtRwjdYw2MYWPxUzKcWir8sxF7mjioCuYSUXUhpoWKi",
  "key29": "2VP1b8gXh4H8VRTHqEp4gwt7f69tvy1ReaCghbh6v5PppPrbeHT8H3qdpBK9aG6uuEDXXAPEVdHui5gDEraQeXjB",
  "key30": "4NNhsWYxCKTpuNEUBKmvKWmkFuY5UDdaY8UEjnwtfp5tstYLq5Zr3oRo3kyVyNjC77TPKbVKMHgjqgLyoRLc47Sq",
  "key31": "2LGkK2Spn5EWuxe4rFp9XCAHNaac5Xn66W3i9B374vGwSVrj2sNJ1NuPAd4Y2XUY81gkvE8CugWEoxTpjvo3aHbA",
  "key32": "5HPsFShRsakqSRFhQc7tmyeiQNiX33V13DCs4vMNNVrpzZauq13tUwVY8CF3B5tMcXrj4FZzXLbg1eGwpCzTKzeZ",
  "key33": "3BA6Rm8Bb1iYcbfvDT1iA8zZLbXWuth1snh8hqcnyEW7b8RkLSNDpiY3sKXWAvqreRssH5ZHQTThX7r7DsutLbs7",
  "key34": "zTZ8mEwkppZaQFHNeZNGTs2nBva24Sne16hkSV1XmRbLpW8ccVtgqqSTswRAqUb2tXAQqpY2krgftaWtEYHMMev",
  "key35": "5hjk48qAA8b5SLyKy7voE98vecWj4Gg8cq8myxCXLxMS7f2U9VEihKKYBa3815abdoo1TQz9aW2Mf9kkFrENkNQw",
  "key36": "4zANCtvA1sNfJQsAwMc36XSzUcuNcheYFys3LvY8UEL6gS1Jdfyjw4AoUzdr2gDc15536h32KFKM783jY1Q2YPTv",
  "key37": "4LY6cDNsWWo5EFd95LDUJ6gu9yssZmfmqZvEve91Xn45DRPJVGEovbiz1spDhwWpCXTKZWxQTK9s6Cf3NAJVS5ry",
  "key38": "2PaQ4d5pME6yXUcQ5UosN2VvPMkE6HcPpAgPGxs7Pa2wb3ipnRhMr6ebFsMUt6VQYSMkaFABVzC9Y6DoiUJWMcdj",
  "key39": "uaESW8mzHv1kddBhMsd3X3swzYAhcQqUpsWZTngTMFXNQ466f525UhNMVN8nJmzLB6tGp7HLRKguvo1vjFRQ4Qo",
  "key40": "2fLeoKyPT8UmhV3CPCKoWTQwEAsJLGBE9qHZ8TtX6LjAmCj1bw5BeNoJb62jNw8XVJC8jG71FEH6QNxfizkWtJiH",
  "key41": "3TDiZBAoVSrYEGEeEiqpcMrRb2ARWSr77yQcmHkAZMDCKkYSDys8yRPfP5D2ALVSu3mda8Lhn6yaKam6CXVN2gwj",
  "key42": "33gmPMJNKCUPtsB5CQxoD5uiNq8ZHTVSaMUTGPCmXk6K3HAJPwJGgrahRanYMosLXrppmErRAE66S1cDLpUgCSLX",
  "key43": "HRcs2gerCt424mWLdFGbWMHA759wEpoN2wAuFLhJXTNGt1KyzgozycGdTP41VkkrTCsxqmyE1z5dCrJFpqu6DWU",
  "key44": "5nqQqx3mfkjFyybSDWq77tJGYesJciTuT7iDwstkhoEX3DKjePiPKfvhu3mPo7NMUsmTdkoh8DqLqzXTMEFrrtEP",
  "key45": "4TdFYyigKRrA4WoaLjPQNmy7vcJCF4zGnqAbjHNxw8BJ3yTtxboDVxUqpnrbXkuAFx4HUdtBX7Np4xLyBZEVJtDu",
  "key46": "31thPwTDrH1YfstrNs7P5Lts26wdLhp3BQ7bwiNrxhGmKgAPsza8NWZWDW1MKs3X3iQT7KpGL1gPkGKoEjgubXYo",
  "key47": "3BrHMcffi43WRHE8KCptaofiK6hPeGpE5QUtjxXm1NXrzV9MVqfrTNEvmqaMJQcQPSbqjJpyVR7JyKD3aCYMN8eW"
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
