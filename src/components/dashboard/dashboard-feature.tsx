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
    "TuuHoGEvbKvYBwhSS9c11NvZcbgxryp2VpTRZAsPFZbPHxLaLnXExMQbSrjoVmPTbV32EAy23M3yq8gTgL3mrpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yt7WY3qjtAHhYrBqivRGQHBUWBnwzQ4UtBMj7spijDaGAfyRJXvMXvXPMaWPuYEHvRPe1wcmwnoP9pjoxWkWesd",
  "key1": "5kh7xizFFXAphKNx1Zbn3ADBrsF1bBVZ3nDsdozmfkVrtu2kFbws5CKc2Mv1QuH6Gxabb7hiJrsKi7XkYaUZmYyE",
  "key2": "3SXUDRdYZzpm459uc1tmWNaPAU6EnPw8RuhXks9SMad9E2ritoeEgY1x24kER9vTsCTmvWLep92yDLP5UKXe1S6n",
  "key3": "txC5ax68PUswRJqNfyFLtyj8HXoRVcrE9jE2yqKUWXffNWjGnLmi6g9GiCjok7zj7Jjv9kZLXx8y4MhXnnXeXap",
  "key4": "66bvnSWjQVF8TeFuAAqVYgHeUBwA3E4RVjrpvLjALsZMyCiuMxDKV4JmCSoETzgWTFodLk8AMz6ixLVwmsMF225U",
  "key5": "5kMcarmehBSL2syac69TdErTBhVLo419VNioknnvVYPDUdAH2AAWxLU44SDMcpPaa8f92iFPmmLToqzwE3QZz4GM",
  "key6": "3G26JMR3xq4vn5hrZUmwcuCnKyENGPwHxiyJGsifR8w8dA1gPmNgaNTFo8kompnnCf5iSGnYB9YZ7PRZRimqecQ6",
  "key7": "EuBdNDwZRkoNQ34BjX7GS98hUFUpq1pr4eR4gcCvT4Js9KoCtSetLvhYiks3vZMQQYqhmexkPdbLJ6k3QhdV5TU",
  "key8": "4FkqP1giz3Ax7XbVeb9XoBCgpQLL8edAGmaAvaoekewDDjT59vaeM4PYqad3fMzKMLQWnyRcFG16twMop27zBTDP",
  "key9": "2WxiPVLew1djpNRMQ2qNxoBE7YZbhrhQqHL4n4wtajYpRKE31jCsXChc58W8a8MUMXh6aBZRsLV7xxtjNYKsvfSK",
  "key10": "4EGnDPE4KbVyvEfR5ihG75GFzLuCqJxWZLifrRKyPpDKtFNqLERp9Z9hmuGjrFLrLv9DQzrga4A57HsEPxZvmFcU",
  "key11": "V8tbf1i2F5stAG7s7gj5f5KWut8vHidhz2oD7CM71TeEwrdpKtFibZ2tthyULZk8K1ejLmPQ1eBjMDZGA6eXZub",
  "key12": "5tyVsdhpuk2LHToh6bkAiNWeHnWAoJNokV1yy93EFPwwUaStZeb7qjSakY6ZTBbaEj2mtdyMaFxBfCRKwE3mk2VM",
  "key13": "2o63XxJNgKAanHNuaqnEqRqP8YeS7XateeAXRdjeQwYuKPAYNkx2K1h5jgHdXyRX4bdjMzRFFAMM87YYg7ayC1kM",
  "key14": "4YnLm2j5iN7xLDCLhLcdfFeAgfMz7rELV4GMofJXeBZYGhARehfTUdGB2JqRf2SPPUxwZSL9voKa7aTaPPZP7KWK",
  "key15": "2vdzKcApxehdZUBfEtJTtmJE4FN9xbWcLS8yMs3TkpGbgN4yVx58WAWotJXzVzHKQ6P4ZHsjqpAJ6iAEDWpZfxdS",
  "key16": "4U9XxW67r8UgubPyvne4x5wpeaoEbHT7rGqXTFucvXqSvpA2MxQrMW127dYgBBh9uc29TzVY5584TVdZt435ejmr",
  "key17": "5MzTMeW4nBkTvaUrebbWRhUMh5c9twPT2VDs9Y89LDsjANeixKzsDdpmn3cuB8fdwJkuv19ZU5wkMTXx5YjfmZeo",
  "key18": "4WPGhaeY2SDus836mYV8YFTT5MXHe2wGBYAqvUFaLy6oxqJq1N5SyLUYiSf8gwPjr1wvjcFf9Rx8ifpmjZzRHKV3",
  "key19": "576cfmGs4JqoW5ZuH4MoSCXxSUX6ydUMkE7Lq4rgDaZVAr87R4GcFckDGHMEWVxrpxgvHQXB58NknusKKBREnyug",
  "key20": "ahRt2kVLG392PU8MWBRcQjptMgwNPSJwoS3RWAeVcKZe7FiL7pH4VZVpaVmwWmCfpCXTSCa79xdGXUm5dwT6afi",
  "key21": "58wdk8XAk2XvLxReEQFFothJ8hXfgNMjSpWpR7dUmgqpUmJdN5jzrAXgHsUH6ZTGmn27BMgPDRbqdqfNQknmmWaK",
  "key22": "3wQvGRYGtFvkoV4Rg3XVgxfkoHgzhWeGb473BnDoahnM9oHi56wDzQja1RQCUof1d7Gd5efJrVtf7kaPf4WXyZn8",
  "key23": "2B25ya2uBCy2y2e8A1V13ni1oqrYXWFY5CZ9yruGCUAUk8whZanv6YrrgBBWqGrdSJB3c7LdG4Ab8tsMDqsvqszF",
  "key24": "4o5hNd3SK88Kuw7pHaYit9dyob4UeDhSzF19GscUwPxKifqDwsNRyUqztqSJpT7ffdqXRP53HqfNzXr5j23wYEaJ",
  "key25": "4JyQaM9nBAGptNuef1zxG28VGAn18tkje3Jfj2rpZ9RW2cpNpE6WVekKpQwbZro5TUG9aP3WSAcieJs66VADqxUE",
  "key26": "5TbMA2vpFJ9HTbPpZvPHs5CFN2sQLPP6YiZtn8hcwbAvJp33Q4tx3MxUDs896owXaiLvZbcv9R7n8Xs3VUEunC4L",
  "key27": "f8VV8kuFkFSfwWgdnBXH3GdmXimmrzhANQrK88Ufgk96yp4NzAXgudQP8kV6HLV7h9nDX65gvSPP5cNgCWqBn3P",
  "key28": "224QhJ9e2gkCixUJxy4fwQCLBXG2EcJpDwjpsWTffgak93ZWRCr8shu7RbqGWQn6tD2w8CfEuGyvMJWzGmzmWqv9",
  "key29": "4vrxDPTsvDyZhAsYtCRG9YASzHq5nhK9wR1qKMTFn8JTJ4VoiiNaGjnTJGCLmDeLnDjMoGGodDF3EZiFDhQyrZi4",
  "key30": "4fVskR5WDSpeyxAdV7AWhpx6gZPexqGQXSYrnmPJPKSD5rvr1oDFBWB8kvagSM3cibHn2JvUxdgDhZxRsaSSrL9",
  "key31": "67nqCmDX7qdHHTQZzxMJbEeaQZ6J4UchysRJvR3HxhaC6JgzsyKZCLB2eLGT5Xc9MEXh63xEjG62riZBqSwZk7v7",
  "key32": "66rvtzY7JgEWeemyCt86Mmj8dQn62489NEUHnXJM4LMvXhgxbQhJpAGnS4JXr42NRAvQf9MxHHZZb8bgmpCaJDwW",
  "key33": "2dA8WfSuDT7nTg9Fnca8hKcQayHbzaD3y7bNu1DXAfazpVRnVzazDXu29gVEEDq71RPyYqsm43BjBc9tjDeGQRA9",
  "key34": "3QV9hN9Jh1gWzSuN6ZNg1sQ5SZQfkUYvi3EmDxUiwPZchUrB5sWEezH9mz5FbzSaHx6cvZQPB51CzdtWJK69BC3L"
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
