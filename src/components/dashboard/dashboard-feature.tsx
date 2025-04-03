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
    "2hiNQHYiNmp5bYR5tUGUmzTC57DZUdy1wZH5o2WB6ZfEDRNC4zU5idr2Y9spHiDG4viGfCi4uQMHAn4Q1pkSJg98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oL8iMaY49XG45wA2LRB3Si1Z5Yt9thZaWp3Yaxw1gHQymGAj4zaZB1YKt7wYrZDwxzFRW63PTZ76d6WuqES8tjx",
  "key1": "2RAt9PfZd2ST9cnpjq8CUetK2VhrnjqRsWYjC1oSUn2u4EpqEQ91W9U5cB6ejFmXGJsuzHCWcVKfvDaA4zFDk9VY",
  "key2": "4PaftuXhgE89GdxdTNsZ8Ng3TTackhhMwhc9QtgNFUYTy57nuvzcZBHw3n7ozfJ9fWe3TjGFMkqwuoLPHDiPneN",
  "key3": "4kjwSqKxaciDU3D5zKfzhEWUFx8r56CsmfconnaGh9EJRMX287mjJHkNAMpve6Bkw7v4BH6C33qo25RJQxAyjxpT",
  "key4": "3xgiSasz4wgyi6SaDFXG63FPvZNVEQBpYiQjjejBPXqNCqgdpkqudyxdUJscw2B38gaX8vfJaMZg1ajsWwc6sBP9",
  "key5": "4NKKMsTVidV659QEXofWfKQMD1u8SjoDtegh3zy7e5aJC4FtJH8wxyY251LgmsMwXmxyprYd6nPS9TqJ356BmYEY",
  "key6": "4q3p3jAtqAvD3FpUkRAMSPXped5ccdDxywn4r7TW1cG9afe6wsC6F5wQRyusw3sqLcdLchjr2VzLSVACQwwQ4Bmh",
  "key7": "5wVLxvqbYCQPH9HNhMnFJAebEKu4thQyZXX5u4m7aVpNMgscJidthc7h8YPGhBELUGCvWJu9Kfsqd8GDxddMxyos",
  "key8": "3L7XqHomwM14xhCGuFyhaAzoj8hzxYNJh4oXmkfBwnKR89UcJUSc54HbJ5G2w4cLqoVjRYjQ1bGXrMWrNYfPJ5Dy",
  "key9": "5QF2iCccPhVkFsebEdAaTnk6gfjmV8aJdqKBU4XnwLTd9b1EqEsbxzXSvvLFaEZaf3ZVhk34n3agfhHH6NNnmh5r",
  "key10": "473hD8sS7zPRZzUyNfWbYhoREjnurs4r2rYn2ctfRh2QSaQdErg4e5HbMVwexxT67ybLukoJkFU59JUm6jZ6UVyC",
  "key11": "4ueCyTgHsBgh1m3ExBj5xkgNDpbSbh7mjWEUnhqJaJSZnmGhdcouxvdhmhsC31USBekCDx8eLMCChGaGiNX3BLxk",
  "key12": "67M1BZdNgJA2SMyyFxLAnASPi69qVDVyCMtT4VJGEj8GuQxfqoxHVGjH6eYBbi3XACvg2AFR6DSeo8bQBFZbpz8F",
  "key13": "3YafYE1tqCqmuRFZK1E5hSzxNqa55Ht51WcYFizpWer3NbWXwmF3CNCBrab3KZgQSzRvP1yp8Cg2jVJLJLen1hh9",
  "key14": "4u73AZ9pcJWSYYh8GWkJjw5kKarQTJoo8jiD5Qf7sJj6WsRPYSbWruY7ymp8MhsYcVdMPpzA4CrHLu6B9PhaR3EW",
  "key15": "2TXaUj9riuHv53CcFHXwGUwQbQMWggzuM87vbXcPm7Nk2ZqDswvZyf7EnK6BWvZxzyApzb3XDyNyuZKHFyY78M4F",
  "key16": "i5LbafpM7dsZLcfnF3zKhVcjahj4wftKpUPCmbGCyjZhD8t9fC6cHtvh5RoUZuFyDb3do2kT5nXhTroLWCUUHUT",
  "key17": "qA1qBsURCwGwuvbiweLTtnTMbYxcqSzhacBgDGtpdmjdvfESt3kQt1dNfbXxSmy6tWBMXUhw33VypvhQMTh3cFX",
  "key18": "3QUgcDtgwsseFpoUvoFsDXB9ZK25aAnvKLsRo7hrYYgsfFDYRLqRznogRk7DjCncCLqEvJ7YcsWE2xQw1zF8fC2m",
  "key19": "kZF3ncppyZMNbzn9dJWKztfhuhfHFRiDoVr9dyAbTanN1t28gVy3CjEm4dP7bjEHKaCsWL4JqNKfWsetqicm5gK",
  "key20": "5c4cHEq5UJDHUXDsqjKBqf8eJ7PMnk5JsqmLv1FBEALSogbba4EBd6AEwqDvEAqQ7tgosgHNu2EfjyDMyyMuGnKQ",
  "key21": "5Phg3rMNdckXE9Gu6i7Ldmv4jPCQ2kevevCVxSt42PdK8zS1XfzG19CEDo5aAp5AHkBsgARPSz6qrj5XCuDrqZB1",
  "key22": "2wwu5D8qQgaPh9cZXt1DQPWPZTLbpsP5G91rSJHSKjX2QvUsbBB3L1v8N65mBDdzyntHRwSPLQQ693gFYUstCgn9",
  "key23": "3UbgK9p9Bn97W9aNJmtSUtrsRC2cFSGKwYiDHXafpDExdKQ1jgDWoq8Ybof7q1tfhzfR97F3Fgd3Lv6zx6gGnqny",
  "key24": "5YsUR557nDoVohUUGxk3m65SQ1jcYLf97XSppPVVqXpcjg7EoEonmCeDcgAP125L6VACnNMZn1EVaV87shu1YZS3",
  "key25": "5356ZQfTjbYQs7NquscSU6wYrbgFXEihbSYSS8jD8pJjgV3gC8ZSWgSEhvBQpL2yRv4tpW3ZUeucaDibGYN9NtY",
  "key26": "3bMBFNnzoAZ4zYDe7t5aEPcbp1q55eSJfKkddBP7J4VcyeXFKvR5WyyD7nC2dqvipcwVdKTvT2M513oTWVBFMZRq",
  "key27": "337s65dxutf9UvtdLqdY69fJRBYhS5sbxakBkUVnuReaoG9iYozTkGucUnKWShCQkTGTV1FWAtfKYSoqbFmWJ4Kq",
  "key28": "5Dxjcs46WJcnTMpYqtTQG46TibjgfLbxo9fpyR2RntAYzjMskuWnoX3hyTCCpZYKhwnLXQ1GawAUnAwsXP3bhtrP",
  "key29": "w8jFg3CdEq2MfNSjyzwpbPgkALwUcuW9CPgLQwvUALdoK7Hj2d8AeJuGF6k3BF5Mxc4vZMhPAgJVcoXkcqZUB7j",
  "key30": "QHxwhja2KTpjR24mhR9qZSgy3DDFLbr45EUoMz6hDfGjTYkfNUT7EpnrQw8AmZ1p8q1CLW5zdcCE3JeAB2MRuKq",
  "key31": "4kEyhc6RR2zAXC72VzK2ufzZz3aPndVDhSExtJn9Ec4PmDLVn68SeEJaaR37w9s5J51seuo3waJHVRBfXXUjgvKA",
  "key32": "3JS7oPEdr7JVfATiyzPymu1ZwgWbAUTKwsz6fhf2ocTeXPQCPGBmmdnnqrDGbG9dKm5AaE81x77nR42axxAwKZvW",
  "key33": "559SxJBrs9E7dDW57W8Nr7FuhoekRZzfES6R47GxAxWkE4r3M5LZVucjQZTt7HZFQ7hEbFi97WfnmaBAQgsX25GK",
  "key34": "3GcF67q9hNwKjbcfVMXWMjLBfeddDn4jDcroMWWSNHj3yWBxpSKGpGb1FTw4B8c7NF5Dvh8e7WCDmio6Shkt7Lg6",
  "key35": "2nHcyd31jAU4cd8nwUSRdeReWGPc98Wq1SM4DeXDCwNZuXHrhhAKN42rSCMHL6bt7eZcaf6DDc9upkuHfKcmXz4m",
  "key36": "4NpwnuNHoxiN8aCAnBkvS2gjKKSAt3LLsU4bQcAzoCQG3rQsaj99EVwv2HLmoZ4xoorwTvPSJ8q835YYsdYVZWSZ",
  "key37": "3QCaZ1sVczz1utpLaeJWGXEpi27xjsmG7aJzNLmXaUBGtCJ76rBARi8bjKp5z4Vn2GszpnSA5nbWz9JRD4AthFyD",
  "key38": "5ys4391D4Zfpu8WGCrasqBnbSAZ3aQUQhBBZbXxAhfMmnhbcNiqWGMgM8sZ4gPVwMNBjj4GuWGyLcoA9xVzNNR3S",
  "key39": "3U539NQixijwRazdDprSn7NMkdK3cGiLSQEpRF8qqFm1GNUr2EbGwESrZM1tfjyocsYymJ2QscTz1roRyfb7wTGF",
  "key40": "4wBGQRnTr7HqKBawuN6H83vVVRaXMh3tCDmqBx9BAvC3t3HzS1GC9td1fBEbBxXfKxuDGjYfUmNwfLFBSLLkn5EQ",
  "key41": "3nRMPz6gu6mGtt3umZotUsLfW5FkSnmjqd7HoAVPc8TFXQH5XXCYxqrbMCKvaczgrDX8MXExNZDm17TQvzhFYc6M",
  "key42": "4iTVg9veH9F2P7FeVcaiZpENT4ccsjYDoyHssij6zYmzSHuh8ptpmGDjsLtSxWnPfVALpXyqnKASVP9Spp6BdsZr"
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
