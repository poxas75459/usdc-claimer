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
    "4HDB69iDvEs1aAw2udMV1z24CeabGTDDgXWrhWeoE76uD61Zfs1wVWAynKkCrMekiUoTiz9NiH1gov2FRDtxMiAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XUbxc3jXEZgixo5kPNgmkKbnydgzA3ZuubhSvgJ6QHA6zyRvu3Wa88uhV8asTa9Rpgb4A91PXCDgjdTRgggf4c6",
  "key1": "4PCE6boWWr1otADmpaJ9iTGQSH36QQDh45HLCWbKr61WzNeUxAoH8q3j9q8gUq6Msm5ZWJ3FnQXcrsY5Ap6oyAas",
  "key2": "66sMTr37Tcm2Qcy8TksGdyc2xFwC5nDa4uDiqh5XMHvZyePv7duqZLk6BZSnxKEDgmRGVTrUj4GN5uwDRKBTnMnW",
  "key3": "46FhMb3xyHBuKQXiDsvLWVQ7R1EufALja2ghBwdnoZwQh6jAYR3SNj2pVADEqZZvpGKvYtbKffnPNoztuetE7xtn",
  "key4": "2uuPXgN2fgjC6kKp9fpUL5FoGzzDUt1NoZL3Lyz7iDtTXUxxboGNZprAZ9bciVrPWgv4CJ5SXfYvzq2nrwcjVgnN",
  "key5": "5CetUiPaMstjvjfp96THDGPY9gBZfvjF4Yo1fyWcmQ9MdEGhwj19Ed4XuehJnd5pq8FL2VrbLRiuoFg2GB7gcgSJ",
  "key6": "h9a2mB8Yfk8hrUmc5sQMMGARrz3aMRCMmBikmUbBm6M3XvKGyA31gMR8PdPbE9Ung9feNwpBDkDbyBAt1Jq9SMe",
  "key7": "2ybjKQ6qqz4fmXaKd2ZMaedMrQssytwZgDuv4jSgkAXA5SPugFqWtaiJgbrAX6puATA9RVHJp5pA9B98iZ9aZNit",
  "key8": "PxAnj7oUwmB8Ti1taxcgfSg6hw8NLwWJmMLUcWR92Ma6DFhoSfB1RyADREbM9NVyRwgCWnTuv8QHvXKeTAqLrgD",
  "key9": "4hohikATgXtNmeQKJKMbfGkhj1DAYrJis2W2UiWccr6QHR11Mnns5FYsTjmSNaWvS7qPHDFaAfGunJDSrGCKzhXz",
  "key10": "4mbk7oj7uyuNKZEzpDNZWwEmALe2NuWgrxq25YcVVKLAmTeQDwR3zMCWDmU3nwUFXVhUw9gukrWyn7Mj7gY233Ae",
  "key11": "5YMT35EzaYtYTFggKLgaHpbFPnQqdap77PTdKrWi6ZfthFSFyFFwX6MBS4sfg36xfETPPoPTNNGDKWipNz6A3tC4",
  "key12": "2hcyXsmyDhdFpEMdt7irbsESTomkLThAat6CdC56W2NdBz9oUvSrknVmZ9LrZ3HKarzGE5ZpqUBMVT4FCUpJc4be",
  "key13": "2X1rbyMdWRQz6V8VJc4RNdu3NkKReRCHHxtwtaAHkc7C6zxAe9MzFM9r5hex8y8bZ2La7YrFpGTTtrEJtRpPXhAk",
  "key14": "3j21c8SdJ4gziY3vDtxBm5xDftm1NYPPCh7yoZqyA33nz7UWbxg9ZFKfxzLYr98V2oh6X3o8xbRgypjR5DzDoRPc",
  "key15": "5LdceLotanAnEXvwKe7BfyKCybVemEBtGuGivFnW2ok2fiGZn276jManoitgAUHrzWnZJAqpnPxjf7gu597Qt3mX",
  "key16": "3hVeAwXw4yHyTDxcz9pqbUffBtowSMLuc3TSrXkyVicG1RFd5ZPXWVr2iUEoe871S8ZAtxJqdJu13MQLYAgCKemo",
  "key17": "5AprdNeXvJsgNiXkXkANq5vNxxfAFP521SW4K3ksHRE1X97CEQ9PNJpvR1uRDBgQ2KmtwKyF5fBz4NK2QRmaG4eg",
  "key18": "2eoV9sonxkKHQPthBZuaWjjhQPmZ7saBorja2HbSoFfBNV5tyPHar5qUSqQ7ugBzFdikqh7aJqachR9n4zgtcUUe",
  "key19": "wanj75nx172QZNKYDLLANAyXZ5Kz5fe8Nsgc3J4emBv13rDCVqXJd6iTdUv9pLKUNs1ph1GGUZaxtA6ieUgX14Z",
  "key20": "2WGR5oE62KxCxkrJex4i4qjb3NEzNgLg3STLiUC4k6nW5DZtwcpY3Lkx3TaNpQs1EEhtqamraJDjNE5z9Ahxv5uM",
  "key21": "3rckHoFmV6sifvcTrXSFZoVL2mKhWp7FKoh3NeQRDwm89NL8v1vdWMdQGzwhx8y9jSx8Dfhfj4qgPPekZNfvwrhA",
  "key22": "3j9xyWz6MUvZkVL6emuQRnXRrrapCCDs3CKVLmUTU7m8U9fLRxXeafNkW7jNb4E6vncpTGDmpg5XEDAfvcxi9qcX",
  "key23": "5UZLryaLYCXt8gqL9P7rxkgZkhDmdi3GmcD8t7gZcxD2T1GkVT2EnXXiQT8gKGwgGYVWMpqNfcgVdYTBYgQ48u85",
  "key24": "3SgpUEwXGSWxemG9XzjchjQmaXpQ7gGhZ3EGNnWzAxvWn75TikyzwSbyx21kw1dcFp67HAQ8fPkVsDvgwStMwEEU",
  "key25": "3DEj8viX14yhUzZpDYEEUWp5ynuBwkARVRYZw4gGVt52PGdvnLuNZ42hQjVTvFLzDsRDfhRMAoxRr1Bsn3expPQx",
  "key26": "2SZyvsEDBKJnQcmrydQrpgrZiKHAT28j15v8DQktFJ2A4168RhYR381QYhgmMXE71ML7iR118qTuWweyMPr6s7yJ",
  "key27": "4iPvJkc71VZrgyLqFJSD1KtEVCSjNXR8U5EcnA8mFLZxc79345CPj3Es5HKVyRBhB7wG86Cj5sR5AyZiqrC7eZGA",
  "key28": "MDWbSr8F2qcB4ozJQaDg2kEoNKoxxr5JWSNBUNserY9qyJ2qTYpaEg9xc62jfVisZMxiu2QrBfu9JALZVPZnuHv",
  "key29": "5ZDG3xvxAfn56CgRVd32b64Kqr26oZsWQfpXnR44Nj27JnmoUHKpmrKShzFgsKqr88iihfyEuPderm2wLebFgN3e",
  "key30": "2AqJQMr61Re2QhEByf4DXLSogMbJ3je3wqjUvHuhXTBYjpJsGvdQg8Y3ZDqR9R3cGSfXh8GsKSKrVtX9Ro5DRMcs"
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
