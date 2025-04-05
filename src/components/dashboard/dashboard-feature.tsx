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
    "3q9cmcRZMdZVJw3MDojEYw5CzmeFiNqjdPcyqzUaqJpv85GAr4xv8Qnp8sJnT5QVTiEP4TttXdhc4zmMmkT8TX1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1214DsqwQ1BwEP6VRnui64WXo3rrQoYRjjSkPimYe9vnqNfbz1fLTG5QdgE5ZyWK95BNhWvfwzShLWSxCGkAMhwP",
  "key1": "za6CjL54eFEJTxRCCNf2U5yDD2k8rDQe5GKUR8yMp1cpDMkrxzs4gYvf87dGL7Adasa9NApXrYyyJdehyjMsETi",
  "key2": "9W7kCEWyDBGRGt1T1WmvmKSvGAU1HMNQFkKXrBbnr7wKDtzi9chsTckAsaAHbgs5vea2RtPGEys9cYHf5BJgmHV",
  "key3": "3unyixh6vckAF9QBeuMyEqkSD5fT1TU8woFi36SpxLmyfYaTPYf9bKP3FbgEoyekL2ymy56mg4wsSrd8kw5HGiT1",
  "key4": "4FhUsvJpXaUi1ZZHp82nGHUkrmnpZSjuFfNmmSCdCEJWLikFUoxEa6rnUG2XQA1TvXnVeCeRswWfH9RpjEgxSbxZ",
  "key5": "5orLz7xfL2hCiknT7tPBw6AhaA65XbUiZamU4HbJtyn9GdZFMuaUMdFrAAnA6iWTDh9DiMN3cdA1uN1F4GHWNMqk",
  "key6": "4mWhCmtDrFEYM6BcKSArg4hVPth92PmN3umrg1LacwRS7G6scVGC6K2jJZNct3zpHzmSKUBSoNDrznVAyXNz4nta",
  "key7": "4g1YeohafmCA8zeyezuusimw1d1g8cxL77XiXec13sNUJ5sAusvfQpH3j51KNcZUgikHTuF9Cyz8QWmfVCgPatFt",
  "key8": "5buS4wsnMzjaMGidMNpD7ZDqssEY18rYU6pwpbX4sJ4bN8KMbYGb5FVCqzJq56zNxEsv9QrpSGaR4C3qSubiG4cU",
  "key9": "5UEKeG5UrrAi3Z7KHcmuZJADdHCyzQG3R3BKMxWsuvLpnz7A5hEeVz2QxtwwoAUTNaTYsEvwkNK9X3tQ5dcdV3AX",
  "key10": "5uh1qufsoF6EugeWg7XKtJYN2wFnraWLuayuyiC3cf3SrqER4PwcxRBe8rWASaDNux4q4HThhTPMr7bHEVjEnVCv",
  "key11": "4Vw59KSW5hENMF431hD5iJSLbCCeHZpjKQU8Ek8tY3JpNLsMNJjGWSDjLj8jv2JKaQVkHWmzwiy3CJkF6k8MRj7u",
  "key12": "4RFKmm9oRqiHTQtRsd6hC3iC3RDsGMV9pQ5osZMzbyGdMdW3EPYujFAyVdZz3WNPec5Xasq7D7yYFEvRwpoPaJZQ",
  "key13": "sW6K9aMcuCNbAqDg4KusAb9PF1fLWt9MGV1d8V9Hy42HwGJkUoaeCsrjA1s8hMZiJfTnNdJysS8RaWRQkeVehVu",
  "key14": "2igeW5eZ8e13wvV3LApgCxeHn8tz6YcnMXyHQ6Jb22kzQqTTagkKyspd2RyuTv3s2WFSWWt7ycGNYxBu6phLqL7x",
  "key15": "59hQrfaFqJgdsfPQtWg7pSi6xa6xay5pxoj8dt8YK8CYbzWc8GmKp3zVdYkgy3edGFCu1hd3BRu3QGSqXRxXoWCS",
  "key16": "RNUbWC4AicjjvKYhaXWZN1qQ82EhTeEYFmJW26VLMBDAdUmLdkUcsNAEUFaHemdcZvVAxW9AVCTD6WUB2jXnVXG",
  "key17": "37KSx5BagJnjQFFb7181YT6vY2NwDEUk3jtbHDLzvMT27EitPtGv1gvJkqp3VMm1cnVQfHXVqDfkKFxShExzNR3k",
  "key18": "2F7Simszf3AUuNoBaBGihHPnTKjPsgEgAvvv86UJc5ZKmeYRMWL8nYrsKnBqNaowd7Gh9aDSe7mSJe77jNLQgKgG",
  "key19": "5aEwhJB7LnGEMeauaaD9VLcDt6SxhizqnZGDkhf9pAYCqsfUjfJUcQxsQ7eo9pmqfv4kE8PT1RnLG1sXet7bXKsw",
  "key20": "58cRQRpB2GUnjGpUprLhQddo5eu2WnrubFZCCD8jG4gA1uHknRjgg5hGfcTaRQ5em8PbXS3VnVdFdbMv7xbJmq1D",
  "key21": "4Z8xwuUAtFuvdnPi4EdvDEECFo5Ntu1KjNVyh7MnhHgKYYSDbuA73TCA6RvfKtcDG1X81R2vwL4eHeZcGpb1tpYJ",
  "key22": "83RgXzXZHVTw3D52Rs7nrsq2G9sLq5LfWQqutTqUDCdkddMjXKaK5DmJZyVhBxVFdCEdF7BQGF7akPpHpNmvtfM",
  "key23": "4UYQ6XSkBfjbHA44zAteix68B7NRD2MN4z8bLJqbmqDEbtz35yNQBdadYCTVj5MjP99zg3ZUcvcSWX7qZgqmgWaV",
  "key24": "4gVkvgVtxgVCYLbUbRA2fhVWh2stHwEDpyTNg9YchxuaXTcHBX62xTWHwnP4S9EQ9SfyyampHNvDnMbhS8bz2Keb",
  "key25": "4qUe7Ti8CbcW69kfufNkVKFiyq1qPC7Ui9VxJSJFk5TLVJiVNAaZHbuPt8Fjcgfm5j8y1zuqFizRVdbpjeEySx48",
  "key26": "2dM8Kh3hfFQtE2Zx9JFy2RqH4Yc4kXkzpANLy3HP7fUxKhby6hhPyaa7683iZuzz8fp5p8G3Lafreo9RAzdFnrJ5",
  "key27": "2UC7CqXt2XyJfBg4PQy93EafkXBWd1X2wGzGN9MmpgfZywLnhC9FxTEqSrdJkAeyiM5jpBAd6GH4RYRvMYdspY4C",
  "key28": "4p4vZKzmWbUVPLgsSErjuwh5YbTRf4USNP2xNRrVqMM9cZtDm7dMvx94JKp7cpmU4W6CghxMAbzTA9shxquDx92n"
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
