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
    "627XykGVLhDTAJUKB6m16noRAwWahV1GBqbXT9UVRXtWjtyNK4J87wvW7kyrEVRGh9vt1LkzLkxppB6c7DkoTwvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mwR4PAxRCpv4H4Sp2ipuT9zdBB9NV5xzd5sD2sEPr1EvKMURboYRsxQxEmefHkQbB386vNdMR1dB8tkkLRZK6mX",
  "key1": "5HXKP11ioRg1wzJtscY9XRVnZgxfEwrxL1RcGQsZXcBpWgHLbrbQRu7m4c16VZGVEAdznErczSt9vW8gX3bfnsgw",
  "key2": "4jT7MzWUPyRvss1ULSYYLv8FAxQhQemKDWBSrVUGtX2nJ21KByRNx5Xz5w4qfv9UPUsshdtdGn3YRQdsgMNpeNsb",
  "key3": "4io49pUj4nxTamsQ5cJkQ41t8NV43n3VrYPjjSV14xVjDafvLeyu7hB1W58DxpuEwgaLvFtx4kRtYHNa5K8s3iDp",
  "key4": "2jFtHhJiE2cJwoUsxaBcQXzFh9u5pYvhjRiCKfhG746MhEYCvHB5RhZaCi2QEwMjM2c8dK3JFpsj2qrTkp1ihU6R",
  "key5": "2vCtJk5kM4pF17X8GRXHDqZWQbJYL7H2WPvoS4nq8LGXGWh7PG2pQDJafE31iXwqh3rm1wZ4aMskmWoG8TgY7NvF",
  "key6": "36wEtf4nrVPHMqaDLQUk7rPpK1A6KXghpU399sp7PiqaaLoxrsBiYsR5Pi1c2RjKgUKbxW2maahtVPDMEVLgWyZA",
  "key7": "4eRuZY3irxtt7o818t7fpYB4qthGVzp7fawobZLVHAHAzcSNHZT4fJjX25wHAHFtCR7YjRp7fZYXeTMNvjfp9afn",
  "key8": "2gZgwnhegKFECr7KZXxHwQYiy7nPyHs3ULLonckr3ZCkvqqvmtJeZ79SpYC3FDSfF2oE9i2kMSwfuKSnQZgAerSa",
  "key9": "2zhKqWQ5ZJ7VdHnpZYg6nxVg1NqmCzCzTtpy3xTpwHEeCVZJVqNbWC1TDvLiURi4CSSQQMXADGGXHViaNMtidStT",
  "key10": "49xri8cXRssxmgXmXGMMa438ZzmqyCYvaDWBYgSycst4m7LVfVQh4aTYQnU5vdQMg7SaRNS5dLTpEfhVDUW9Nfth",
  "key11": "25TXbTR8tMCwNwRLFg8kgPzmvCKCnLLreM9k8VkTsj86c4x5EAGedDqCgmQD4sLQp6EMuc8pGfgeth1PXS8hDqnz",
  "key12": "5ZeuVkZaikvuFUZNZhX9zWng4LHKy4giLMfXMzKG399nmq1FppB6yJ74qCKYQmivosk9WE1rmgD9PovaBNASifqZ",
  "key13": "5iDQXQghHuWxvnVfcWXQ4rvq9xkjrHnWnxiSFCodKNwZVh4udhA3P6dvoERLVzTCVb7apY53eHXyYfh3Y7KxSofj",
  "key14": "crCrGMqyBoF1WMkbcwmHJUhm2AzeLdDqBDe7YHp27sbYeNrKVzy7mx6Lg3fV2MAETxUwwcrpNrK9kpF3Bk7Yapg",
  "key15": "K3YECKWBRVaUeNaAmh4RBUdzDgtaX8tuZXtokD7dHUdmNwwp4WBwuXeuDZUzNKUfjtAuo8Tn6g9w15u8BCxLoCi",
  "key16": "5YjpAwvyoL5a2r15Ki2jU4sxdTyKMjK3WVfiwPhuQA2up9GdbkUPgHGD68vWj1Dig29doXWWs1JwqXd65hU5mpdL",
  "key17": "2hu88MwNC3WjwBJRgEsfTrXvyc1GVUjRBnXVLsPtedha2edSoojTGV5XSA54z1ouaujUyD9Yhk1Ugj57C1fyNdgP",
  "key18": "54CcYKRSF23XKrzEWxVGwiykXdSosfh6nbvKVJjCK51aSuBZk36eS6jNLkUFtwB6gZ6gVkrZPe5GooDrMLxEr97L",
  "key19": "26mnxS1aAMp7g5EKbYVoFBnNDJE4DJsCpM2vjy7x6CPG7NFRXxurCB1FjcGSgrdiRDDu9SGPjJT2jnPYHwHxwGzs",
  "key20": "5WW9m3rHT3pJk7GAyEeGzcCZbT1MakiQTwSDhWHdTTdHjYecWDJFAmmnSgfteRL37eVYxri69rZWGHKR7nCjY4Re",
  "key21": "49rDKywXbA21jt8BoC9ZNnvTf4zU8jNypUjLyPgVNnJiSdS1MMxjwNbErhb8Am27maQjuvcFHcqNYFutG2dZ6q28",
  "key22": "MzNJj5upfAT61RSYhryNjDr4isDy1qjZt1ZPXQu1CPKQmjDdY3rox3rWrZU5e3p9rstAjBWtRb5qLWD59dv2Cts",
  "key23": "5JSa4ZNq4wiMfTJYqjb97Qgvy7CuG6WhbR6JWx7AxEE1f4AzbjbEaBtdAp1LNo8PZL3DK1F3mf9TbkYAbtVmJuBZ",
  "key24": "2p3RxiFtzofQ3u1741kfdD9WF3i6LSgtW3fHNZuA6zuBAtUTomciTgGEdHn5M1YTjnwhLHA96SAtrP8o1RD4UChP",
  "key25": "3sj7Fogr86mEJd49qK1WKUjD6o3xQau2mYgfsjd9ZeGbP7AkKoNxCHk4LErCLYDNiEyqDxbKcpbBmGgjmaZfFpwn",
  "key26": "3jWupBJ6eJHR6SFNVMtV4S3nsDopxDDKJvSR1UKLy88F93zZyFj4fyZEMMBTvKTZ7833yPswkWS9GnajnG7Ekdis",
  "key27": "5NNBJKDoGs3N6zLtBQqzuuG1M55rsv9FrcQ3G7enF5He5fTnQbhnq5xadNjGNbu1TRvGsY1tvsKdM4aUY82zqDQA",
  "key28": "2Hx3dq3tPQQcDnBkJy3qAYTHEWX5HgEnyCoBfPmcFQ2U5eQcKq8PY9K3RW5SGREbqrTiAirM8DKBdqjDBfGhKCNo",
  "key29": "4zpCx581Hjvv4258gcGjDKrUfYGZwMcfjUk9YUNdC9pzo8U9HeJtz6LUfoTexiTNTBDWN8JZPr3sb3u336CDvbpb",
  "key30": "36XVX5hMdFTvcjqNUJ7Pd4CXrxuGsrELRR8VL1LYoHdizrUr7YevTdFdH42Ut7QucDtDBhtmCGgKeAMBEcsVfobM",
  "key31": "28x2aDEHoLTUo9UriveetK121b2JQjZu13bqzFtD2nfKhPjujAU6Zj4SsWMUJ9Z4mPZhaJB9WEiW6pKxhK1gbazi",
  "key32": "4qB8uKKfajwj9TyvPmo16rqvidNMhSZhkSLd6QiocjDYKoUSZhkVfXXvf8wyVa4THQLXn6AHqzypyZnKvRjXvU5j",
  "key33": "21uv9tKNSXGpm9bnFHCXWBZ8sbYrgHPDdZUjXeNumy7FD5uZky3fu595wL1T3KXu6gwipAdERnGrsfreQiFdXswz",
  "key34": "2GFV4HGNPoyH82tpsLx8VV8C84TU971QLNHi4c4R4nHt9hinjToqxkbRLmziySwkFPf6JEVv7HAYQ98ytEQUVcpi",
  "key35": "239bJYe96nGZ9oztYCWfvY9VYWwFW8CDxvs4EmEMJqBtKWM4GniLPC2XziTMtzchyFnUprkrfpyJfHmsw31qJMeF",
  "key36": "2eeiMoasbMGfsqVw1MZK69UbXLJAcbAC1nfPepsm96HRbHeZLn7XTtPtnDAoEmu32SzhxWFd2HkPdd7LKx9RyjxX",
  "key37": "5P76icUvovDw9EoQu15peY4wkXhZRz4YRkxB6odNTtbDbr9JAmGvUvwsyHEuJbqWZqLsLCGnt5xHsZcXHz6Gm4Pd",
  "key38": "3qZnsKG3DPc2a5PRM8ox4yY2ugwtegu9gDdopuA27Hctfd1mjoRprD8xQ1rCmpqeKGAvShheyu9K4J9vQZ3R5F2s",
  "key39": "44CLD37p2bjV5DgSagPwh35J4iJjuj5YzqKYm8JyLEK1vNdCLvsMmzF5XwKuGMr5MkKPfGGR9gvcRjNKEJhDe3hh",
  "key40": "5n1MCd9oddYk65jr41uZrg4s4BmRK2WvSHZH4urBuCGFWkVrEKH2kxWFbnyRMmNSXQm9SPhtuMoH6386apFAGFfX",
  "key41": "5xTU2DGcAdxRrhENo6JZoEhD8mQmYGtofaZUrPsVYXiUyFLRt3syVHdBrjdFHVUC4XiqHGpYEyW3KMYxJfXbBfQz",
  "key42": "3Ez8PvBYyxfQ5KYvi4Q2Ued1kcmPG2eVgPUvAzYCsQHXfWiHAC7hccDRs35NG6CFi183YN5KddLCFgexsTWaemcw",
  "key43": "5UL2eWdWzWFtq1HRvzNU6JitCLQaz3LX7TUjMM8uW9JAsqvGkCPPzA8qDzPH34111sU7nmmWc1L47RaSFWBJ3hL4",
  "key44": "5BEENeFZ77GCxcvkeiqUtrHregPVGNbDHguvEpta5b39oAM8XtVtHLaJAgDjYUtbyZGn7Ghe29gE4WgBwMAUe3D1",
  "key45": "3cRFfTRqDVypxpXZGjNX3cUtnt4HR8VNHdyYVoAu7teMBgBie95vhqXGqatb1R1VR6Mde6yxAXKci2WiLGepP9nN"
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
