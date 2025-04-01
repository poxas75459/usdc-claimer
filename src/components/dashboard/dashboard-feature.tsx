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
    "kjTyu4bg9b1ueJkqingb512RroVSZRr5htn3BG7j31GRnSbYqv8iEWbMmr8uLAGNBFMQPQS3oZm2WeTDyEF6SRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bsxDMTx5UCw831CYUfajcQ4mosBWLcpsAbGN43wce5VcVYiaLC3Cbk7AECMXAfvzmCgZVGwWNoBjoS1nR1ETLsx",
  "key1": "4VtbQS9nrz39HdZ7tGY2pi8D4KnRmuDM7TMmth1FAh8XwkikuVtBZHDg1iYy1VTrydUNKmhRtcJkEc9hgyGcPM99",
  "key2": "3Y9s7c3amWkwGQY4sEExsog22L9cwFjDPR6Zens5pCPxeqrwihceipWt4kZbXgZc4kULAP6mVFoH4DPr88LZ5CMK",
  "key3": "3fq8qKmfu6ooHXTiY4hSHgghNzTY4dkKr2EGZrJXFtoSfKBhPGWSecHPipGrkLPoDCvWatQoLTQ6vMGqM9YxMU4N",
  "key4": "3VniXNEwC9KWPxFKQok6FodBb9FZatTSFMqKGFxANEXVpni9CYiUTz7yLr8nUAsNRZ7n2YaEgBYqJ5LCMMaFFfD",
  "key5": "ykVXva4ruhBFZ6SKsyEwqb7DgGhAAb1TBCXyox1AUpKLWcGiyu1rhZqm9WQtp8d2e8xM7Tn5YokBEFuqjz2TuKp",
  "key6": "SqNgyHMp5Kzh5Cr7qaCnroN8WnooKrC7WnYg6NDZH6qFZnxAU4wo4JF2EXkGjLcdWsQofXgx8Hn57WcE7VAd6qL",
  "key7": "251DscMNybSV8Nw6V2wFETJzmHfnJiQNPo9sdf3f8SzoLYgUyQXb5or5pnpHmQripSSwnKRJaYhLxkbbyU8UYjwK",
  "key8": "2fdZdCsUgJ6HWy36gy1MXvshnWSPuZVkp391o9ms3AMs2srWZSsdi8djrsPzQJs6tVt7jdLmKy28tNodiiMGeQvk",
  "key9": "4QsLxsS5e5GTJmuMhdQg9Up1ap3H68xxNPHnLXaEYBjAtYcjDNb7uikYH9oXH5iugzgoMwxVhEvHpKtFFBJLstoe",
  "key10": "3AJNRkCPzEdZaJLAKwA8ZHY4GEKjDoprpz3Z9LqJ9uUGh7xWha4vTaq5B3sPnQRe4DNMmL61zuQJAKGeEg9abrtW",
  "key11": "55QSgD7TJZrccgYg37bUeVrwrCiFvnCz98qYAzdUB5D9UNEzYEiBanH41ptSHvFLJ2Fo1i6eE79xBFPZRDvNxMBd",
  "key12": "pdE99FgCPJsK3LKsKDxubj2Ktw4JguxJd59xgEFZZgwnEzQFjYjjynPjsZggsybT9u3aYfSVjrHCDS3aVohf5TL",
  "key13": "3929VC83qFbRFw3hHxdkdAoM6nRYLnhUe3gDyhK2fDQvtL9uSkUrivFGXbrUuf5J4RPknV8BrqhhoWdc2c3c26yV",
  "key14": "hjy3msUEWJk9p9GFzBwmXszqs7X2CowqVEnjpThLYNRX9MDqxdWEpoi2pjAJD8eGC7kq87LdFhZnvkJ5MDN5xRB",
  "key15": "36PUeVKoSNaAodkiD24ZG2puWC3TvtF5d7pbrtNkVpA5GTx5RS1DSCKrpRXr1PBwhkfZfBuPpQsidx9rf6pKrDTD",
  "key16": "5igCh8htZSv18WAD39XdFtHFrVoXoXTcuM8VEKoNw4FQBa9rFbKRL1je73spR7yAjykC23NTxzqoAPCRNKHv8A4",
  "key17": "4BhhgLsbBT8Kv4efbVjvQFPsk3vwC9Uun9nx8EbSxjKDY4jnaapP3VGPE57NXiGdwEcCisXQ3qP9jYuEughtLVSH",
  "key18": "3iANu6AYjCJ4HT8DCJ1wYT5rEX6rJhc5ohzChz4rtYQDEhzakCfuiCLu1JgrN9ZQY3daQ7sdmXj2Vhe7REgzEMvz",
  "key19": "25QGziuNSxxt9dJEygsuV6sR7LnZNbHCzDHnCHcuYCRisz39gbhQuspzSPMriGx993aD3wCCb5zgTSUA4kfehu6g",
  "key20": "4NotntLVnTmnFSVRtMGtA8VJtGDdGcZYyAtd6Wd2rBTwSA5ys3y3iLsxPD8uNtNKUvLpsU4DkmScLhNZj3hqSBEQ",
  "key21": "3cq39Qf2JZ7gHsC775UJaJgojwaTfRmHxyXFi5RJFC3BaK1QWgCbpjJesGspbVq64W3FjhnyAYxL89eouuZJjkQL",
  "key22": "VpFXGAa6TteXrUhk4AaLYShkuXim1KhLTyLTZpcKsT3Wqus3dR1hHMrCAEtzeA8g86NBxdCycabUYiaZ5KJE9C3",
  "key23": "5v6RmdS9aEnCzr3jbePdc18nNsPpwdtbQfzuyQGffdfMFk7s34bbvL3MPfDWfujGx7XaLkyWYVWHpSrM6RJV7Vo",
  "key24": "4fjjRgf6HRLu46zubyWSTLGBys7FLVJKmj5QdfiDkSNt8psRZaF3JFReb85NkgCqMeqf3vEEZe7t5fbtqt688QPp",
  "key25": "41SejzzoMmZpzPuBHNpM2jPMzr9hsXFpU3S8zgRbBJKuF4Bk6FJwMnkhVf7EyHMEMyChkbMUwFbUrJ5mbLXmxxMa",
  "key26": "4QoDctx2XdCAHtBpJ2SaAHCFCNER6oTgbE1aGjXcC1P9i8ticRHoaM39xPi1Fjuub4FZCKGcdSETWibQzNbGhh92",
  "key27": "4mGK3KsGMBTTnwa4iGEAyGZnq4NQXxkPDqWX1dXKQg15Lhy3FVfkVt96Pvc2yXfjzGwh9qPdKxFeg7YyXBQKRuGa",
  "key28": "29MNNv5bwDzagLNHZ55yh8tyyEXsZi5w2YqWu87NDSqpcvUe9XPntd8VjV2snp6sS1vJVC1on6VnvRQuF4CWwdpR",
  "key29": "2Vgo5g7Ltsr6523f3FA9Q14xSfbBpF4ZJusxffCCQ7cSPcz4byTLz3kMKdD8usRPAoz4KaJJvtAq53zsDJmE4Kdv",
  "key30": "3vW597rC4TVTGSu3nVQVMkXauDYyZ3mA2x3qHi186kPWYp2NopJoGoeouSwcqJhTBYHKt1HoNXFdYyBbhqnSpLV6",
  "key31": "2wKHFXtvt5njFzrfeymFM1z8WJvtq5PKQ66wrSVV7yMRdAuLNgkohCupQRxc6Ky7ujQPSZwrTYGcHZ6BQNV8b2V1",
  "key32": "5s8x342RqBq67ft7TZyP67fzXWSevhsDgJUUkRnP69G87DgMRGEuq7fP8YnZu2uWztHShemVPrMiJ1dGM8zW3xZQ",
  "key33": "2tNJCCn8cy4uXf3Xtzn6bzdZVHBgHF5F8PpMBn9AEb7LMaf39zBDs7saKsQ8uWPCprW1YXLSowTGi2ZCJCP2Went",
  "key34": "59XwvoKmQLJsudUzX4BsvLgAM67RrjE3oK3yMgyPCTJQfC9wKHsTNhkQySyzoAABmnyBnSDF5aYNQor1eh5cLkbC",
  "key35": "3aR5oGTc39WufhGahvvgq3TXDTumG7vtMkubNT2P5eTd1yJHb2y41t7Ne4m95SUCNAxfGbG8gRcSmKmi49V6Uv4h",
  "key36": "3keHjqUdz5ZdbmsStm28s8XD9dsbntNj85GBaz52jWxsVWUDzKdtCLCBuASfEPuZsdnWz7XXXC7TVURVeLCkyXEw",
  "key37": "55cpCDSGgUFbEtn6dqkDG34FXvLQG8YCrFHoCnn2knE1kvUsgTHMpXvEahJhyudqnvVo7V9DBr7CSKy7mnKtddjJ",
  "key38": "5MsKi4K5c3a7XcM4vFwNHdsSD1YWVLQD14QSHhB47o8nBPGTurCJbXqncgWR9x8JT2m8oShe1AwCeHAzNAFyKGjU",
  "key39": "mZcSbVS72nC2sxNGBtXbN2Wi6RtF8W8pVx7HKB15pbkon1dFNVX1j68RyVhCgYJwYA1RMLBQfosPoK6RSL8prEs",
  "key40": "5AYXXTaJjZtZLAWEMogFy3g1kdkEgp3g2oUKQjQ3Bfi7nev54RhbLURLbV8Wt82VS7ozxoARtbp9pXGXLAthvk5q",
  "key41": "3nEMRV1EVbP5w61aHRvDpDziwbWGnuXzFYravZgZJ3RuZVk1UPgYjKCN7FVaapAKnQYUxZ4nL4Ls4mHY5A5tA5cV",
  "key42": "4YpSFRc2HDubxZepEGUopEpfnYwsveifDCNo5CgzYMvJLdyN5EReqzz3toJ3soGLE57Acm2UCjjMFhU6fNsnheSf",
  "key43": "5iBaLpQQ54Mpgq4xWwXeqBhQSat7ZD3rf5XUfzBRkTtywrcf9tZRBwUtmSwr4HnrdwhDWDgUV8rfbD6hFM689G5q",
  "key44": "a9mvk3Dg5ixwvKEg4hNYCpkUXPpWAJvvnuvVQzJK26XXPkADDxwQqmDqrDKZWTENFscxocHsCmtNg8MRzhKPEdK",
  "key45": "5bi4WJo3Lq9vSTrYm5tB6p2to9yYG9dMr21XG5bY1tc7LSej8iurEoAFm37bj1cCcMEjLdgtn2t8kfTR1Jpp5SAD",
  "key46": "5ruuseQZANg8c2Th6wbVYqwQxcLFL8BYEwQBPaxMxYG7rbqPcrUxXd4LAzSyPDpb61G2RqFuKpHPfQBZEdZk82ED",
  "key47": "3g1eqzNTR6TRKuvkvbCBxbZwFD84XDQXzrCmJbtBbLqDHgr4M14qCKRdqj6Ek4HNuKrmp28vLqDDK9Fs5pwk9gYH"
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
