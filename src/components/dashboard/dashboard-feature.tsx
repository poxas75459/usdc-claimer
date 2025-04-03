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
    "2ESczn1HmxbvPgCetiZJQiymsxkwo2rYizPBTWVKQanCCPfsjFcr5mLhQbfSuUKRixRLLQVkZf3dAzu5Vb2UWaCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F1zAHTEeiHRAQB9ssBzPhSncgeu5V9G5K2CzeR2ArvAgTFmXaRLYNXW1UikBJ6meWVtdkJGSf43YpYogriJ8oG6",
  "key1": "4mtHwp6XunfsSRGG57zXj4CNu1GW5EvxFCtw6xGdq4QAnRkHFSYZigwUgMkh56FdUuRL8WudJdVEBHC69ZcrVe9L",
  "key2": "2bxhsacBVmJNn4AU6vdDAZVoxm5PTXSpimdUhsybpBzDZe8rXAo3WncPJ6XwfQeEajR4XGPngxhjLhrEqZwYN8xh",
  "key3": "4UJAhmnw412R5hycSbr85NG8Q5CA9xba75hrYZ2zYUZ72Y7BvLV7Ez6885L5xNFeuoAZeu5pkYXiojMr4PvT9CHr",
  "key4": "5kwqeQ1BXUmfCSNJL3YnFA8TieGdURmkUZAHSgharoC2oHcFZNGtYBWwCueLSC2SfrDuyGuhqf8VJ1qzB6NS2NC3",
  "key5": "2ULWYDtCs4s6mJz25U933Q731HTM9r7LwGd4C3we7CpgPZaT15TGx4m79XC3WeeF9q9J8ntR3L2HzvRn8tS1Qef3",
  "key6": "2wTLVyAPNKVuB7QoupVMfMWsuH8PzTCQBMaJUKH9E37utRuZoSHURk2oAbVEPv58ftxqEsURDZabq6kuPouAtRW2",
  "key7": "4QrRBBqF45DEUTYsiVFonY6QFnXtHMEVCHgcc6HvRLyiYRTA3m8ft3C5ACEToCPrnMQHRtY4aFZ8KLnBcaRU9qud",
  "key8": "upzLV5ipxzynankUU1rvprvBxNnqEjM68W5dCpQDtgKjcwVkoDx61zKrbAwmmXYQ4o8ocFhxoydsFydTwuugN1x",
  "key9": "3tnMER5GU23PgrQB6s376WiN2LM9x3fLAyFrMDWPzpk3PWUWvzbecwSBnG5VgGvhEGvxdbGPp47xKT9qkWNivrU4",
  "key10": "3EWvqLkcX5EnB7ftT2iUZ425YyCnGqYJhUGNHs3YSFWKRyTtMSEc2jz6uKijCE3pST5LYKr8DZWpyoa7yZEBoufe",
  "key11": "3yrSZnunfUD1C8iBQrSmTAZS6XpzDBHqTyVrGYoH6KcfwQUQiNhGY1DhuNihJLpUYHxf5rPhSHtbLCjKNj47gu7w",
  "key12": "3FsFoWH3A1Jzq6Gkc4xdBinApBsyKd9HnMRj1bstmXTWYo6fBMk11eawKcWVWcFd5VkPZG5Z4xBfQHewZbnL6u47",
  "key13": "4PE7GNUYKKugYoSjcDpwtStDRKg2JkfZCPHwtievzwEReJTYQgcdiAjaf98r973Qfrw1dwb7KC43KCRtMTBFx4g3",
  "key14": "5SV96wvomCMfZVr26opvR4bbkKivHPSo9sXng58DRvkWf2CVHqaYtckSDp5YsG3kvSZyxEp6Yn1hLiH4b8Ax8o7b",
  "key15": "4X98GtFjkQfvNv5CRBnNLikpS8PqNyDfgKoo4Qa8WRugmoDMcvEWxTovVdhFfU2JzEvpHwn752aXMKbT163LPcwv",
  "key16": "3AJbit3KnvRgB5apD9Lu2yDL8PtrwRNtutsdvAEGJDGLQPPSXb12fMRCEzQii5BMnckzof4P9burArFBNCd2SXpT",
  "key17": "2A2PnNEshMDVBB7qQ41kdD93jWyVdsJbfzk8EtEjZsGJFb3uPGegUDX9L873uaBX7Xx39mT1FzRwywjFwg9g6j8u",
  "key18": "655dGYWbuPPYYGPK8ZYKqVVLJ8PELcXYohQFp1f3HH9ixwnJ6NEKk3NJdFVrigfPMp89S7hGETp7KndP47KAypgj",
  "key19": "g4c3ajN2KdXivPkowTtTQqMKYrAMWXwiSvkSg8yHL4KfHEoG8ois5e74FzDGCfd1LWzpPjzcXK3vi7gdaaJmSYY",
  "key20": "2B7YUikvdixCqWkHuMacLmFbyQ1JghPDdg4iG7yP1scTzMxQ5jeHy8XYHvMF1ECYFxmhQqP95W8UbXmgGXCo6Zrw",
  "key21": "oiVsBPk5HaqyG4qQaxzMFKAmndRxD65XqdSSqNjGDnU1Jmk34V3d9NJynqDSBz7foKaycxNmSXaU6sD5RBXfu89",
  "key22": "21P9wpsaMN2CxPFeGjQd2oPCMLgCLnFadKSpiX4jepD4BBbxpjbFcH5UeGPAr3iUoPvRgikP6DoqBd6dkMoJxjyW",
  "key23": "5n4dFs2vNC4zXNJ6cbRmN3gQaMCsnWgHT6rbEZBnkuv3T2t73u2iAg9Ho5R9kDNaEZDWrdTi3gvwyheCSpuZ9Ep8",
  "key24": "5h2cehL649GspErhPeR9C9FhdcEbq3aZJhD9BsopeiyoYPG8wCVcX3jkqJuvyK6ssQmXj9otJh6fCipqHPz3FU6D",
  "key25": "4NGUQyjVCNaQbYG6wK7ZzknjM99rEXYk3srCYp8RKTJL7vb9DJkBaurDAVmK9AFXqiVuNoBEVAia6hqmBaeoLRSA",
  "key26": "ZscSAZT1fRs8puk8CXxnfZtGGVvrkCea9JzMcHh6VKkShSQxmvxVpktrRQrQRPFjgwHaamKvB5AgbE9SjkzhyLW"
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
