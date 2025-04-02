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
    "39nm4GtkSxcWvGfFw7RCzwJdjnu6yTBUFQ3aE1YMjwZ457xK4r9cjzXJkKDYkYFsLRGQsh75AQbwh4qNVASee5oK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61v4BTZM8em1BbBTVswr2nY5wKAhFsBgxnDSAD8sJzK9X2ahxWz6gtNNvUsNtWgq1P5DWzpsiMDh8fj8U95T75kF",
  "key1": "3hc9abykehdSZvAU7YavCNHJbdyJqvrNPdcoQzXYwSRy8mk4YoPt6GC1mq9UKCZ2LnbMW4r1cQhdqi8ZpGs21vCt",
  "key2": "5uNMh5U85fCc6K1G3sJsMxqbEEYLbVUUwgK1GfDfQsgA5jsr8mf8vgnC3byG7SYTVJLLD1ySgG3rVz6U7bLbA8kz",
  "key3": "1RUhoqGqWr6u8kTXfMr5uscQPoXpd5qSgvGFUsE2dTxKgZNtW1pfZs9LeWiMNYU6FioQvzstoYLiAgdokG2mzMn",
  "key4": "46nbbomrSYet6f9PhkfQz8xGi87cN7BuQEV8YuJnsNSeKWaeAAYMAYY7jcAgDJVwzNGvsTETVgSMp76pThE8ZMBg",
  "key5": "YJwSxpirxMwmu2P6qLPB4FnPRGsTVdX8h978KgSmTAFwQ8SDHTu3hCDENRJbXmeKZBb2MyUrQCq4mL5fxeajDLc",
  "key6": "2DcSFDG88MU1U2hERc8gPC1jNC9p4WhxA5ZquTb5jyybWa76rH98FqQm2CWxKsWdLW5Ke51np2jLhH2px5ixYzma",
  "key7": "5tTqJa2QGW3y97FWBrJ25mgbnAXUfpL8iYMzHVU6SBZgCRhFuFqqMctGok36gi5r71CajwyTkm7FTomf7xt2p6bx",
  "key8": "2F8kMfDnZsjvojJ9UeLfwKMLTjfUvubnpiBvf9jo6ri63yYJimYhjT1Z7NT61RCWwhSJMPGSWyeiD2Ud9dpfCjrr",
  "key9": "4whoi5HmrfwyNNk8TzPSqufTokMprHon8r368aYjk7kMutgFn9zVmK9hmXRnw7r3y568qr6PdBp4w69wXUARz9W3",
  "key10": "5SyRCAHNxZQ9X88PpZUgMH1RH4sneHdszd6wXPTsPmHS8auwPiD1HSB2GHtVoMrJcgSy9FYNqm9w32u2tnyK8zTE",
  "key11": "57m5rpL8vARNx86jgbxA4VUQCEcjY8uY2nBxJeYbQfsV9mXaCY9DkL5ACvLavQte7yY4poCtT8XZhw3GMvan4Hxb",
  "key12": "518FWjQLXYNz3HoAqV6Zi9YJz8R3fHf5Kj2EGbXhDBkMkYWPuZAugTrb3bzRFR8UTjWwaZ3d3CLN8DZ3hk6jz1rM",
  "key13": "4x6bYEfPMN6i9W4wj26eHPXmZTjng2SYTUQYiZ7LTXekGF24SBMiCJnaoQHzvjQBxjbtythRjvm93jyXAW6K8Lg8",
  "key14": "5teKSebH7kFmAtHwGeybDWK6YCBSCVgux6VMuWQMjN7Zua3ACj5X85QS91KUBcNEsj6u28yk1n1nGUTWpSjJuL1z",
  "key15": "3RcELvY94t7C4RQYg2phcxDuNVmkXRUcejUJpYsRferg65MnKrtSSDq3FHugALprKnzBhxK7Do47h4YeiUk4C516",
  "key16": "41TAuXrG9VhxwtW4uW4R6wWqNxc9GUfi3bUkY8pM5XZPtGfjwRpEQTtr3HjtRTsUJCMRpvKqF8kBq4EA1Yg9gyje",
  "key17": "3Rq4ntTJY6CbhxRR1C7LmMRPxh6ttRSArWkFapgMb7a4wTUJfmpktdJfpZZYbT5cwd4KPbWRxR9f8WLZpu3AYy1f",
  "key18": "46qE14Q5JDpSm96rj3GZ7R37Zebysxf7djMi5JPo6dBJJWrWMeTw8C8yb7KsK8G9aUbxT6SgXw8mo4Vig4YLJTCa",
  "key19": "7Zrg6Dvt1btHoxTvNPZUQ8KPLzZtFFWxxQ9paGfBS1ommuAoE1jGnSiE8pcNVvcUv79U7dSRsxr9vFDuDM1aWXv",
  "key20": "3fHbZk7Mj9UkCJXKY2KTT3c5C86xhcumzRvgwMNqJXisYVYpyXKxe4vW3TJiD97QDZYACRkTvqArMSjaLtti5xtY",
  "key21": "quemcJRfYxULE8YhZYm1SroG58wHw4Se6N5gtqcXAcXmnzVPahXJryfu6E6NJZjJnGUqCLyx953UQ9tXVE8fdLJ",
  "key22": "5ad5PAMigcSvmzXqUGYPpMnVSDX3EzvZdH7M134jSpr5eYbS8BwFvbApHFwtL8jnjxXbUwKvq8a2mScBRQt6xGXT",
  "key23": "srjFQA176fgqV76EScqTmeyupmtRS3LQUT8po1JdGu2AGVj1p1pLFyXZi3rKXs4WjRvrQ8FY3krPrmhh64VsubB",
  "key24": "3WdD86Yen15ktcbxC82iNFaUsS19jQZzuj5FgFNWgswnzNhW1sGy61GMm5jFWDo92MCVNDDdJajqMpgbXfJSHLgc",
  "key25": "2roVvDC63Bmr3uWnrwX7TNBh7PAQAMZ81PgoLCRwa2e2MasvvFbq3m1PvaiekXPSshG8dSeJZvWEoJtRpAuFYayr",
  "key26": "5ibFNL2VSUvroyaVg9UsyPNUMrNpGDtREWnycmYXAQej3SgyZJuC1LEgrKatSJtqHYqYQkruwTxGU664ABXrFonz",
  "key27": "62J7dRAaUGaT9GDVGmqS9cE5cJbqt4CVjRG7HCRx541jwuXEbpTQxcYx6vdKptkEw15PAvq6LoaCU8i3NeTwLkrN",
  "key28": "2VMvSJaNJHpGLTqoTxxb7p28YoGnr6Rujdu83nYHV6Vk5Kgj2ZZv6PLEjDzdPL4ZdJtZ1bm2adbuXnvVEo5ZqiuA",
  "key29": "41a334eauaxtjsSTpn92Vqw1ERLVkDmkhZ8fanU5ywtiMUyoZvV1MCFmjPJcBKtKUnd7SoqKw9zzqGUoh6RzBp3L",
  "key30": "5FT5a38K6C6otGUHz2AyPQtt1j4XZS2znkoxQaVBBeCp527DtF99ZPNBabs4rxzEwh6bfxSgkQwRfvMahhPrwRcu",
  "key31": "4dhUKXhBxQajq1J6zsLtruF4EeCUtQ57HMcnsK8XuEFt8Ngu3ZwDajTgUds4bcMqr1bT1WaHNyiC5GYeUYTp5m7L",
  "key32": "5b6VUFkMdrDaDievYv36xXJjeMW3xFFVXmzUHV9NGzawWw3fuZTxncHexyQaNHF48WgcHoNV17G9Wa4Pk2EGXh1G",
  "key33": "5G2fUCiRrkLy3UMeuAsHxpYThDQc1PP8w673i5gxwmDFh9qZpyypuWgrxG8t2VSjhfYKBzRaQKtgAotUG87F1KK",
  "key34": "5CHwGBdrNYUA67kQhgsu84r3SoNJmhLtFzX5Q3jhn9zGAXayHKK9wqp7JdT47FSau5Fd5mUvf5guBoHKFd2musKF",
  "key35": "2BTs6w8dvz1HaPj6bKaBaPnKDLf3UxhDGv4PBp8s4MCkRTZHd5LjMfTUdBazd3riU1egFrGRjxRv9F3X34ArNrEY",
  "key36": "5wZvQm9BtQSEUQhqgwTmweSHseJ9BUfUFeSvn9YPVnZVmYqiytmj2jsuxoQ9YjBXFXXsWj42uzGkAMNh2V2bfG2H",
  "key37": "5MNS9pK8HDEk2SJwRGnfbCvhe9uoYkqTHTmN12Qk4Wgvx5z5aoY6joSv4kZRHJ8D44JUpqy3zGwpc9do97FnfVtB",
  "key38": "456VgD9hEw1jAqUnBwqwArCQ5JRTPo4DGZkCW9tzToNGxmc1jLdMby2q6kiTmDmbKBiEW75G51CdE8pvd2NRcxPC",
  "key39": "5hd5cFqraswbD4iSAARsMCjY2M8oU684JJgG5JjJxKehFMFmXGbMM77aLvzeNeBBnrAaSWbvryCuaantXi9QT7bp",
  "key40": "3SuAt7DjVRDYp8H3MBwNLSriNQq6WebZognfrasHjTkrU1dajqRNSoFw4Tcu3wGfDRYkV3kY2WKZRqnp5keELLK2",
  "key41": "5AQfyfiGdP5pHQVok8VhXi1tB7JyQZmDaA6CjaV9F2LGRF3mZmED25igsUCpTmyhjpUyGNNBFqQG3kyN25RppQ1H"
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
