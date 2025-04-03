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
    "3qw2MzehVWT2GFE41D9YwjL96wa3mTVZw9NifhHwT37ujAjmyhgLCS5USBsYScWEToQ9KN9cwT6bikrHcqoNZicP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UsswUcJCbVhRfbe3ALpzEWAbWy95TfDmx34DD7YjR7Aj4b8GChp7Ana3UfWR3XNsbgpiyJPQBSfx7CwciawYVSP",
  "key1": "36tnhvNgZjmMd6GgJtoSPqy8ZcLDEVAXMiL6fc4r74F4GSTgmDTDFtoiaKoX3L5TbQ9maUTHxscqG8hmHDJfBxMA",
  "key2": "2MFax6NvYFbQj9XF12d13kwW4PMyF3JyVbESF8YKobPL1P1xMpgRoF6aEjTXg9H1M2TUvhPkg8TogDJrc2ta9af6",
  "key3": "H9oMumSPqEpG5TeXcWu4DA5YZ6pEEN3adzuZ2sbVwgsZXhy2MWjZQ8KvwrEBy3J3WiUVgiEJ3QKuteAvHjLqZp8",
  "key4": "39jAG1eU29f25YrB8iEacsfvfaVMtL7HSJHNfdXQQXYFCMpGQhyA11zKpb25MTddbWM3RYwWd1e2PmpRis1UQjA1",
  "key5": "22cJPCcJGs8Ncn3jGmhbFagHi1BEPFWxBB9G97ugbPXNgLoTsjHDHkXoTbkTfhdTBz5VN4dc9SfUrt7MzqpNSHiL",
  "key6": "4rQD3VdkfHsk4rZBTwdMpo6MmGCmWimYYjPm24yEtuHafrCbyrGBixNDNiUB3KZKDNHryJkN1T4enSLF6K3gxxcr",
  "key7": "rKTHBTqbnYgn4YHhrjZmob4kCYLEQCkMshadJiDDM7kxLBpwwmzWnKK97Nk8nkvdxEGxURrSxc5x9UfvzXMz4Gp",
  "key8": "qC8Ry4fMSwbs43qAUMzssy1YyhZpf9eDFg4qUrHWgGHHUtPTHNxLLLFSSkrgXEW8WnS6ohxyZVXubAKwjS4UVK9",
  "key9": "5heZs5JQvtVehNqE3PguFzxMdGJntQepd3a8mHqJSFjywXEGwqULkiABkxR8MBXuUgKpK9iiVSFgD8Q4bDcKvLyG",
  "key10": "3fozFhDgRLSFGUpsH4To4XnDz7QAH6FPuwTVYRFE7b2xGoypT25ofapAdJNp2M9q359Jm2XhBbRu2rg9LYACHsn3",
  "key11": "2QHwbkz2ijvju7UN8gMzMixNfotBwsrSkoBbFDNHTzsnvWViXr82QYAdYTyAnSre1kLfnUHv4cmEJtY4v8fFhc6P",
  "key12": "3hxXYdKEDWHwsZ6ysc4NouqHafsFWBeV2qoxoW7rPiMTiHXxxhrp5TCj28VbiWz6sZrqS1432DUEYEMknu6jLpac",
  "key13": "5M3Npgy3ykrqgw498XVznQ3S2C8BpbG7EToTLFRyGA6YmxEpxkYnHLw5uSQsmhyphimx6YSnCCCzoVqACbDxZFVx",
  "key14": "4qJ4FUNHNTPnJCkSwYU22NQQVs9ZZ9E1VjmThPpxeQxkaVS9hokhHcPGZfEFV2DTanqHNyUHcSKtro1idbaQbdKd",
  "key15": "qeNQLivBW1eFy2nyq4KPxsbXjpa81eN47mtyhFNMC9oPZnNQWocvRkRKMV9eV1C4G9nrZdouCZUsUTL5m1Hj3JJ",
  "key16": "4ALX6DNEZZpSUkwhvZVyzKLHRVA5i8xetyTZJekta6WEt2wGTj66H4nXQaPVDvcbJN4fBTM4MJTacgyR9gBvgb9b",
  "key17": "eNGbBLX42PuDJN6DfbVpfQjH8vYyj8Yc3GAgA6jZP5GMTi6Wqsb9hBk5TAb9qAbA9iHqQosoMySzsBvAy1tzzQv",
  "key18": "47aFghLxe4ZwH1RJTAcvoWJGRBsSxoYiGZNywDYnXBsGn3n4w2prTTrChK788TjE5WdKJRYjzB8PfwidwRRWtQLQ",
  "key19": "3nRtWnBYDqmNGuSSpqQjgKnUQUksRcwQyLodyD67UtMQAXH5f6Axj6pi8G6SPgnx8iuxrmy5H1Q6B57iXk53WoHm",
  "key20": "5PSE9SrhQFiV5Go9ee3DGGcJgMgyGCBvmvS9a5uANNeKGdzCKxDNkf2SBSv34Qm21Gdjxp9SZ3dYMMdWNCDHMaKJ",
  "key21": "2rWfA3HqYmpYTJ2eu1468wGVbUWjjnhZDAtiiazJq7tqDkFyNsCQ7PLGadMNmZsGtnmVzFC7YQKxUTxGRSjYMQKW",
  "key22": "5uY4AC1iBtPKQcvjhTMTny9gEq3rBKCaJeEJea3j1BKmFTtgNJBRb5qa7zusvjhFb61tVehxa2EGnGHbXmaRAgnE",
  "key23": "2zSsLNqZbKBrc7Nafk2Khuok42zzjCFJxFbZv7q8TpYr1xChJ6gkxBjwK23EnaBHQVjX5TKcVQdy29nArEvuFqqG",
  "key24": "PvDLEwwydRuwztEhD33kSU8AKhxQ9fsz7u23v7CNLYzgSdURZWmnnNyE3m9jQtoyjHj7EJY53GzHnVfKSnqUvvp",
  "key25": "52K2kNSoXcP7xD4XfUe5e3SXSVN6qP7Vbwa8tdLbr51eJfK5bCt21xhEhLMKYeYoK2DQCYTCrUTQgCE4u9MuW9jY",
  "key26": "2YNJH6sSQVdNQaiQ9wS1QMDTz532XuV2Bvb7gmvS7fGtGaBc4DoCfJt7uGeMpWq4zRoHTCSCTfNqQ7syYJkMKaya",
  "key27": "Yk6vrSeRxdsUF7Saj6k28yHsmGyFXBdcgfULWjTU7NdDCospZPRKVrkuPNoiVNFQZ2iqBiNfhT93jUveU74LduB",
  "key28": "4DnFELEDaJ5pjph3ULqMZxc5Q8ggBMvSmRCXAg94M6iazdT1dh1s6xgJqxoNbfFFAm1D437phZ4xtDPNK9tvT8Rv",
  "key29": "5GzCaDG9wgNc8qd9dqqmvuywDVfyV6rnM1da2y9uQeMi1DtgwRTMWv4hLnghdMeN86rs82xq4FRVciPszfUXJxYd",
  "key30": "26S1ecQvTRw68565D1ytDoWB1hyxcHbFnuqotrZRPAykLnT4QtnnqfDV3avEPrQHFyQrETuPUH6cBMUnuTC9Lvou",
  "key31": "5dhvGAQw4QjfmgXhiKofAieYnzrfcPtRf6nfWEYnmRAkHmu3cFhUPf7rTSCardMrCXBbCpEZZpRvVM2zPutEo2pa",
  "key32": "4gHufvdg3YgyG3hxc2B6GLjCVSquHt3UdtWZXSEA9c716RpvwneRnASZPB6Nz8bvaxUJ8DeMfxQeTvu3CnxByLNE",
  "key33": "3UwfkzRiTP6iKdLvUwMUkSbmPuyFxefKtbF5B66F7u79AHEmWCPyu1FV2wZiJE6PjjnGwEkw1hBjeaHwcjE31c4u",
  "key34": "R1M6jBJ8zUkmE9J9GXG7eeHnCnhBhL1vTJNFFmWpnRr3ysZkXvqVxLWMaHYJjYMAwLatTWiUpxJosXuAEEJKf4y",
  "key35": "3ppzuRvRRHqanZu8kaj71RBwYXAr7qafJfGtDNNU4YBVoDGFMRcNqCCfZWtB5pSQJBoWgXPHjpABBbbNkHjeJ1w2",
  "key36": "33Gn1w1uuRdBr6TDV3cG9QNJYvnhCQzQjGDV9wQRYzHhTks1dfJUMNakgyTRS36S4kbNy68nXcGx7siM7bc2Rt3u",
  "key37": "4zpXtoYj9df2LVXGMEfA23F1YoF1fMmtSr6itJqD3xur9GYpFaXq98Mhifrg2zPwpkQ3Qiz1btDKJFQfJr35wSFP",
  "key38": "24pbxcKf92qCCpNzx2SWHccfoh8dQ1X8kK1UL8MNnha7by9DeX6RAHB32Yx3qfnfxMULhAbcoHscxoAfCPMW8fja",
  "key39": "34F7ZPnTTdhMVahHDv5TC67FytYoHAJydk8ConQvxAPgYcR2u7zvNvHHvQNm6JWeJzp2Lh1UPVVKckRbHAe6npN8"
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
