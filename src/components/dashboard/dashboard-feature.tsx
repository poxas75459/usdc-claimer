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
    "2hhXutWHDaETaybjWE6M8TW978AQ1CuJRmayrWUWTUbBQaP3vr27CRQSjYnR4FMEW6MknBx98u9a2jRLNDEw3tsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6naH8pfHTUTcC57WJu9XtpeQNeD7poMd7bYBxAibePtLwF9hKThm1Lzm5R1DDB2UvVZfRwSgqjLiwtNB38BgSn",
  "key1": "2Ke5dY6HPi9TPJbwxDK63srwPHPTwkx53RvX7J1PM5qxsWkE1vpmeKrSJtQ6YNWxHdtBDZQQRymQNK7RWAa15asz",
  "key2": "5FabJxHeErPUVysJ5UZUWF6TGWPa4Bw4y8hwhQnR8giZynDJSnkSdJ88tVyFLoLdNVWnCGxuQu7caiqBT6hghtpL",
  "key3": "2hcUJhyDGMnX21GYSc3xcTqnbqUK5UbSDPNnTJ18bopYDXpeXa2siMamWw6HrJNkX13393yfE74ENFTcLNUzGT18",
  "key4": "5YbcFnywu9xHju6d9vBaxhEZANksZjFU7YGwY1EwiJCXX5XnS721GjqGRcdgiiQxWwFJpiuD3YBMWQyuHd5zaPzq",
  "key5": "2CqxDp6zQ8QEzsoWJKjqgBoNLBvMzdPabR2QLN2dACqMTctQEbvrma5VnNNFU7fkBPt6mLAKMPLRFMBGGvcNWCsr",
  "key6": "4CwApjGsYpYSpk5mNt5ZUNeLgoVCDYLoRLhQhSxpX7qiHFzL4Pn7cgxKC8JPGB2C1eBxsCqJNSmA7HxrGuxk4kiu",
  "key7": "3VVxDwPv1goHvJpTh464fYZFKQ32YUJkpa4KzXaykRp7rMJVJDTMxCs6Wg5CzoCFy3Gp5wqNbvjGuWyB8D8SoCpt",
  "key8": "EQQbbkyeR9GmkSgotV9ZpsS2vJDv46mKFjKPfgXJ1Nj9xw7fPGuQQhX2izeegV3WDwqeMVoNNMJwPKAmzB4gbBL",
  "key9": "2sZAu9mLHRUH7jRtG5VEJcWS1NxAnFAsx8qLGJJCqh4vcwAV1R7SQ1feo38buWa2hyWad1RnRaf6WP2bbQCoT1W8",
  "key10": "2GkwqSLce4Us91H4PrkMwrHbsN6ssBJUFx4gFyDENSj68i8FfM6mt5GrMysPw8EunpLBjGqFjQwngYk32oZx5M2D",
  "key11": "5XwMRtYGUWmmUos7Mp2LL6CdonCmsv4MA4XhLuVyqYgEHCEhhxsUdbefJECeaH6cWry6Za4uDyyMnWZvZhD5R6Wo",
  "key12": "31tv9UyNgBLPHdMuh95EUiqWMQ6To6PfnzcukvgipC7vsfv4CbFx7vAVHp7j3TKZihghXp6yZgG46WSJgncziFvG",
  "key13": "3RSo1HGmneiBDN2moeR7g8sPFqpT9vpPGfjBQC2xqGyyU1Lp9paLyiFosdToi2R4V3eLUkXj2cyiEVuyna8ddjrD",
  "key14": "4tcgeGTXB9ppZYhzzccevWeDM3vEnGF4Nq4oQZpp8Rvku3RkF771Y82CkMzL7NGMnQVUCumRfGwb1ZDcpVgzykxx",
  "key15": "QzEb5xnsSFSeL1YT4xUgjLYv3r1CUJusu73EdXUbJJisk9wkqMFUAQ4ZFHLoPFUoHTRCtuBpebMSUvzzCWp39Le",
  "key16": "83yGxMn9ymkY9UJbbDHtL9cyGp4QSPhjcPK9Ua8hmtxTSevZJwdW4cFNkeZttcYK1n9eSBWEgP9orsrw8R1WfVj",
  "key17": "4CMkPTf6oe9ARcdVcGo1WBM5YfgNJCxd7jHzKGNE3L3HjRCWr9Kr8CiEjjVtRdd4gVEdp7aQtACL562PvhJsSfW9",
  "key18": "k5iz8MbduAa4Y2icBwwwS4hspLdC1EHifUq4R5BQGZYpYkF2PSKrkacVrGmWSJ2PyiRiTKx18Bcnx3qyejHsey1",
  "key19": "39eRexfLhCe1wmFwxvYLwzWGWKRca4NSQsVqN7yUZvjbZsqbYyTFREVXb89GVm3jyKsE58eehrQsaTgGa9x3BD34",
  "key20": "4ZQxSq8USw3Qt6eoyBpUAjwGXNKfhFswm8jcjCU9P13wTgjWEteRogwdffC1mRfvAbz3PhSbqtzFYWSBHs7NBJFh",
  "key21": "4ZS7ywMrWoBYi2PzJzHcNKSHLqYmALdTTZPMxDV38PTaZbDmakz86BuiyQvKhRZMLVjp3CBo78it5VbYmwXcPUcy",
  "key22": "k1YzjkQzJ1iQJ5dTVpxqvqXHZKdJuT7UhpYzDyfkENNGSTMDJXijFrMvvTm9GHmpRPpEcgQko6ecc4qGNzGJzqT",
  "key23": "5eRTHoWPpndpFdZ5dBXNs7TT4HEDHuBNtG5yCiRLwchBge53TdkRhDU7SyVCbFNWCNhKHyKuPWh3hZeWw66MX9Le",
  "key24": "4tGaXxWwW8dJTJmwcX8KJ2NDV9Ep4nyd3nfEf8QxST7VDNCDbb9VVajBoFSEuHuqfFA5mfWCupF32RU7FZt1S2sE",
  "key25": "53ALVYPW4iQNyGfQi9fSkQEVZD17UQTmHUFHZLdLWPfvLgZneAuZCfjEtwjU7Ubpr3Yov768vZsjbcbMJmgqRjMg",
  "key26": "3ey9bQcP9k5RVBXfsymKBCQnNAkZcxQCwWQAfQxBqq9EKJN7rADyBghJmgiTTovRbXWAU7rK8zG3utFrEkeUDnXn",
  "key27": "316CPcBVwjoM1tdX11xEPKCauKuHSEYrmmCkcusndaJvbQujFreydNcNwfMmSxzmG71hTdfNZMwt4o6t561u76n3",
  "key28": "aD71cX5xKsvC2kyRHZDXPGCFA1yefb4GFh42AcbX5mugrfxch5caBFAb3MWZwt35JdPmx7Tj1jaQEZ2zA348W1n",
  "key29": "4bqPQnPH9RNkv6hbCQdseVoMsXsfM9VGeKCeWFRk9YkCY8H2PsnM1AqutoeuoyXLdeiWkWK649ATqXnraD6Z574S",
  "key30": "2Y9LkWLhj4MPxEtDX8J4aU9H9KcajoekKPXkmB1vsanrcaWiuK7QmYvvR4iodBXeBx1dazhisFQozFFt2hcYw2sS",
  "key31": "4Us9c3kVcJkaMeadF4xzZwrXoTkpNejh2TmhLDkEckux8AJHdWQpsKce1kyr2RqW82EmdZpgE1MbGV12ffmymjBh",
  "key32": "pADoGyH7Sw6LgZLBhX6ug7UHrQVXnvSNhnH9SxSZsTvb2aiHReLaPh1JBrBL8ST2fXU5cQPLHAvw1gUeb6fEu33",
  "key33": "39mGht23mVXjwQh9TLKdYMdKRJys8Q1vtSin536i28sMf7YcrofZtcmErNifQ6tFqcs6a3YS2bod5y7VCvXCbAbF",
  "key34": "2YnKCfTgcgEgSTTCk5FXvgbfJgvJX75HfyWeisSSGDHM26eSp9rFD1YZj5YEPNHBmY7KYkRcuh42Vc95n16LFyvu",
  "key35": "2F3ENox4LwxDmSmmgE7JtB6QTEzLkdRWtPkStddTwmYp6svB7q1uVzzsQyRrYsru6NRQF6u4rju8W23JFFZHkjdg",
  "key36": "zne9gxQsEhFX13HEwvHhU1rbKvYTjK6SVDPmAXKiNZmQ4LJSRei97mSe9BdQsNx9ctRy35Ekq4ywVmhXsQtC41T",
  "key37": "49FbAwQjYw8hR84LHjGXtXmc6kXk9eUQ4tz1T8UgvcZQjHcAbGpZL7bHopXCMUzuthGXZiAX4z278tAoff7GJsnJ",
  "key38": "2J1b9DwgrYi2uTz7By33UCdAFd79jRFxB8dEb5sZaxDTafuMDRweZvM9jyoeW3oM4bYi8TqC6c1iQwhhqM5NUYco",
  "key39": "3VCR7gYq5BQBBvGLMw8X9yVNSnvNA3aa4fmXTrYWPxWaDDvmd8Gz3CTvKbQaoPDGhRvvnuRZW3c3Vz2xokdskxEw",
  "key40": "2zSPP57oBhv92PhSwjw895s9ct1QtP9KiQtSL5vE8ZgEMxjb5JvLJiUNup9BcFPG86NSye2pL2MZ6ohNb4sf5NC",
  "key41": "4gteuSqoXACQreYPREC7AEDFWUmwdVNnGpRpxdcAEm3NG6NjuXC5TnHujRhHJf13G4d2ee1r5uGZH7uGi4zPuYiW",
  "key42": "42zzz9Wkm3YGBqhiR24TRsg3jeMtETHEFj6Sx4tFQ8E13sZyun5wbLaVYDzBCGKSDKVNy964oSAPmzG6t8mLCi7m",
  "key43": "31XGvHZxTXcdd9vEwDTvTx4W3scWUw8nG8Vc9GHdkXAHmR9w4zKzyyckD42SvDEix61eLQR7sbH5k7orWQPWD8gA",
  "key44": "5ERK9iuHJYeitTPhGb66Mmh2Rspk5a5BiAouVNe15FmtJsjpoJSNG3iGBnesGqJbAiLCZ9h9YEXW6R4SUBc3AwAF"
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
