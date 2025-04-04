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
    "5UmgeaJubF941yTwUJQUGhwcQE18LqvFSkX4niVFa6dSudYmuSXchhk9hiuFPgABE2q4iudfWGkcLE66y6Zys8xg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25AzBh8mmFLVm4151vGJtQetEpetgrWRkXbYApWfY6ZPqkFLyNve4KMcKdLb9oPsHjm3pMgRVYsi9aZYGk5ykc4C",
  "key1": "4QpgJaWVyimHyhrJVv4v4MD8jREeuZ2JLWh344Wt5jr94SCurRBpXr37gWikZoH9obVgnRiobynvxtV9YBwq3j3a",
  "key2": "KTJFt4nfYSwQpKJo7SMpU8LyBhFwjQn1EAGcrVzYojRWRTBzrCc4sc6G4StqmxYnToBXVnTwEokALLWET8adLVs",
  "key3": "HiA55293JPi7mj9TTAuCMGZLXbowxp6zjkSFv8AdfKrjSxN9ue6bzwxhRh7ubCTpaxoaS9vbYXYvvdBa4r66ZLg",
  "key4": "5BRke7tddUKni6PbEL45LURcH7fsvpYACJW9QNUAJoL3qd2XNozKr3BdG5p2Lw6DrXFHQJTHgYxbiTHm19PAAgAS",
  "key5": "2qat9bFiETsAR5eWZmvir3EyRL3mErPKzsvGVgYBtr1krBUb3skRZ5By9WjF2PEzDxBBGSbD6w32xZxnTdqTL49x",
  "key6": "HAQ87FYFCSwqNJK4M7kwDrcXeAhv3Go1T5QhPkH9Jfc9BvQnRSDqkvuQwSUjNkiiWdmXhDifG5YSPHfyHsasF4f",
  "key7": "4nZShU3RuRTxPfNetSgzgsCmMMvZnCC6aXUAEkQ7zf3qbbNZpVmccZrL2EoHUb3HzQhntEcrZJMxUchzf5jKNJJU",
  "key8": "5zQvzsEtPPUv161zbzvoCzu2ksPir3kpqLBcMurM7m7oxrZdsJ9AwH2ogzGZZxCzZpBV5H9qacUcUiDVwvkzR7hR",
  "key9": "33kbtSsuBAzHmBbCh4jpuBfg2TPq4wet9o2mmyhurt9djmuBZhSwSnmD1A22hcmsd7xWEKYHUfczTA7hYhbLjysS",
  "key10": "46CRUoB3tzCsMtiGX1iXUXeSBcN9QpVrDKhYh8F9yU4tgDgMmopMr9W8TXchiPd83WrzqAy6kk9qAufrCumQvVin",
  "key11": "4Y1aLQsWnqaKfo443f2nhGFGVi2aY1H4KYLu75vHXu8sM5wfHJRJPEAmnfLLSHz2R85Cj1mBVzCRytCtDRJjkAvx",
  "key12": "2qGKLhQrMaBm1SdRvCBBBdGCzsA5vnYuWBJGorrK86JDjtVs6wS9aiTPeytZWYmKx1cJZL6eEg2reTPC7KURCMPe",
  "key13": "32nsJiUoeoFRL8BWywoEN7xpV28rt4sLM5UTwDyMLP8fnAmDdxfrsLsWcT4AK7cncYuHfpcBrhXaMF2tSuVbnzNd",
  "key14": "3ULFXUW8xtfyzFY8MidRMuYdtGbf7h4yokHE27g2s3H5eHqmDNTASvgWH4R8Q8WPXDBntpyawwnK8iKDr1Ccf5zc",
  "key15": "5A23evmKn3fM2vJFMhWegLY4DhzTrsT2amaKtCviScqsXmCpE5VHsybAuFWwEn4FBjavWQPsWrnRmFrzZnUd1yRx",
  "key16": "2MvZ2KnodeKvC9w4MXNazLNMQo1X8ax2jysmKSygS5w7Agb3BSAdhZzhiPHh51QK8DhNNgerueJn3sVfsB3rJMdS",
  "key17": "3DWXhbMEwNY1pjppKFbwCNPnrF2Ei65hnfNet78PqULDtSV6xdz4khYgtxcFV89xJj5MbgirpdybiK3XKUwzKsQK",
  "key18": "4JvUsqUzmb81HRmSbPnpEJdgvZ8k2zTLEwSZ73aubfZDeBQKqzyVm5PVLaXmU2oZndYQh59a3711DnJZWt6eJN2P",
  "key19": "52SPGi4geD6ndahUDKKYrpJfjN2qAEJWgXidopuVDMFJp3t9W3Y2nLS35gHq6WRyLDpjR6yVWM6ir85bZ4KmHeRf",
  "key20": "2y92Rj3KiUo2Gjjsjq76g5knyUS1fWJpcF9F1W8yh4rfpFiv6H5zgDEot5zAYXY21Bj7MdvcXbst9bhvsq3vfARi",
  "key21": "37j3CFVgYgf5rRfJAwuore3QM48sf68H9WGA5UHKHLG4rh5RLqw8z4Yt44UssXvd9t5fXyJYAjXaWB7JNoudC1Cm",
  "key22": "kfUDGm3AdUGhHmJYpqigStpm5uhvyFoTv4uKjPjbRYYZ1rUDYZiqCbTZSeri6RHU2Bh5Q5MQGV7VEVUAp7KJMwg",
  "key23": "UN1fxxzgX7UaQN8BDYmrNaR2d9sPQSgA1womdFavMuDzSUGiYFJYCk9AGY4wzVxMArM8o2kaaw6Cm5inBd1V4Gh",
  "key24": "NEWPSbr1gWEdESfSzktgAoH9rjgYbSFAFcnvM3SK8NyBp7pxXh4EU8b1FoB7TaBwJLbDYeRAwQU2gxwnFWYdcY8",
  "key25": "4Z5kDD9UQEiRKTD6eTKiinMTDnq3QB4kqL6WJi2VrUXN8ynFJ4fkNYfdXZvrbc4H3BgwNSauAqX5U592h45MYYc1",
  "key26": "2qzhDc5XXbpFfRAnZSXQixpowc2h1Zm2tRehaLSqi7GmHbXB1E7koBD4B3x9CDHvLGxDQgT3Bv7LH2dwPagYgKEz",
  "key27": "2d2HDzTw5BpPD8jVjrfEmZryRmHDXEPHQyMZo5Zc98AEuC684nP5BNkzoV7DrdgZdr6ajfsvwMc1SrS4JgNNKN9A",
  "key28": "2vLNQbAbtjMk2iBGw2F6tqPFdfRqanoujX7m1Uvz7MhbQQFS9CEZvoNG3k4PmEQR8qFEzze12poGyS4ytBWosiD8",
  "key29": "3RyLPW3qkQzf4w12Gcuv2FEsdBh2MJjxDDA18bWk9xRi76orshjLC9rWMCDUCFEFutTJgbbd1N54XfosNHgJisMY"
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
