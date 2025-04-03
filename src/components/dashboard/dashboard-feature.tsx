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
    "4hrV57KKXcKcfxbm8HTBbpLovx48EjscKz1LfKTLAm5DuSQqhoS4yxaUjMxEXcNLRqXLYf5g71HVMXscnphEvsaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AN9V5iMxRkr8Bq6dPnDdbR7ihkoWU52XiDiVpQJpPAao5CHwv36EQ3o9VzDCqPMmXvJHemTAnkVmRhTF7FSNARf",
  "key1": "2pjJXGAngPcL6ujbVe2KLpcXuYgHhDQxmNrhLZDkFUQjGWrVVt6Fd65eyZAM95HXqodj6Yx3DWznmurowwBTMbDo",
  "key2": "4grA2jzT8WbA94rkuqjNPwYAezHFaXw9qqda2vB3i2q1xWj3psAypeKmNYgU7DQhSbQ1DqfMzHRHvxyuMKkYVBF2",
  "key3": "TRHf9UUzh3pvjuKAXm5krkKUwqTy1M2WDHXbkRw6WwVgdf8mj1j9b7MxJSudPdWwGYrDgtzQY1ZzjqMRWUfF7ta",
  "key4": "3Gj9SppJsZcSVxqdzCtrHBo2dR9MaxLQ28qzfXUPwsZKgZtbGnMfULPXip4PP4GxTGpdELhrgPqbqm2pqANHiXqG",
  "key5": "2LhsDxcnzMunXnyG99zobYYVG4pgTWoexzBqgZkqgkmthVGRphf9qEu9wnC434wHhvPXKDjamoq5jhxP7ZdSkVVR",
  "key6": "Cw1xTCNEpvTFcPuQAkcmUimaVnP9USkYpNHytNroJ17T9nuotieBpahjLTqDNLK9dXqZY2WRSPTq93jfptAsncR",
  "key7": "5vBm74PPJrxs8GYyYYE6Vwkrxk7oKHhxzYzZsfQbih96eut1Z5aNDKsSB1EjveATAv4CBRqN9P7qA7cGZMhpMesk",
  "key8": "2KM7i9dwHe7GbLYT7HFQgAJtLH7KpEBuCFd9Sptbsy33Y36TkfCFrzoNfR2fyW1SHsyxL72NcSxq6SJVyaUv6rwy",
  "key9": "5X94eD4x6RU2a6cniH7M1Wn9eX3nd64T9bDukx5P7jqxtQosA8h9bFQzu5acnv5rTQxCYYTqY9WEMMTvAgnxYs1L",
  "key10": "3ehXvQoHS7QPMrpTg6jSfp6ZfSokcJGtATjB3scNAeTHxQfEf61T3nQTf2ghdpyjrLSm8gHBhVJ1XKNRDqW3vebg",
  "key11": "3KZPby3gR6t8CEtL7mr9N8KztNqKQDUuq5mBZSa4TCA8Zonu5A5rQyV2totJTwL1nsK769GJvu4t4f3iP6Ur8Jk7",
  "key12": "2nACvzWbMuhJQnWTWHikV43JLZu11Gn3jrU2P7nJhXnHD1QirSgXdbRQNvaZWstSQtKTfNGRXnmTtJYZ6EEu1NeR",
  "key13": "cgFc62hCcMAgyWsjSLZ4kTLS9KncjoQaSTNmh5kEaX9YKbaNoQgwYbyKeCkW9YbwEBQgKSjzwifTxkug2HX8QUj",
  "key14": "3KQdEjVUdha5fwDNL37KbrWnrPNHFjg7uKAXMpDPoxbwgbQvUEVs9NypLChM4KgXdAshmXDgKAj2ZUddXJGNH8xf",
  "key15": "2czb2WJWN2ALtAeTKFK7YsyCdDzG65WturDVx6i4kPQDeBYgAcwdPPTuA8JC6EinHWUDkfJy8AvyF2ibqYuC9sK",
  "key16": "3WX54UknqcJJp53JSiaC1x3iQMP91u5vEC7wtaAd1jS6bpaw4S9CU3DpypikSVFHLwNsAprEwTAjHLTnYD98WMiy",
  "key17": "5zw1GTHSTwkFciT86SwMF1JsLHdc6PN8iA2cQy53o8ZarWNQt4egK7JziwwreKHSCpXEP1ybKNr94XwGMAQLmUoW",
  "key18": "2yFXLedV6MCeDRRUFLTqfh5yxz4xD4A9BUwzPt7kMMx5RtFJFQ6iVDX81JPWEasgQiB1JcPv3cjeYQZ5Jq3QGseD",
  "key19": "AYtShySW4EhHMtMXbsZcPobHUToaVHWWvu4w6Nk1KuVn5qf9q55MfM8kPsMhe5BjufT7bBeiimTUQYa3ZWHDyHG",
  "key20": "33E8r2Audhuvm27242CjoVEGMU1wytXc6rrWtG2ny2jQVR25EjNyJebsmFVdHCDepDXvwA5RwbZESAtzMLjb6NZY",
  "key21": "2hiVCZ9aPpVDh92d7oLraA7ei9NhmAtiuK3bqBNc2f3xeUeUAF7knqWNeXzLRGoKs62hqE5HFYPh4buu4KG22Ye2",
  "key22": "3TeXY63js8vywMnMg9HY9yXFrwAaRRDfELWFTKn8hvmoCM4W4iT3vttwfqSTbhiVGAuhXahPVmC8MStZTXh3Lj5N",
  "key23": "9mkGnQFogjAD2e15BjNfpnWRPF3ZujdpY1a9FHV8Pp1WvRExjW3GAmhHWp2oxUb5yqSFbFYiEHYG1Uq2Eca7J4c",
  "key24": "3LgfEcoJ7tPaJQkYKFqar3LaW7VVUpjMS6JHjdx5QDqAEpa5A3nSc9zoLF6gZZyxgjPLxh3njsD5KHYMFM3eQmtA",
  "key25": "XbJm2batwc3L3VLZSARNBAsaNP39CWzzXN5MBzCx2nanPh394kfJWZjq8b8bSkVZSdXYyRXtpyjiBVDrqGaX6Mc",
  "key26": "TdSr5BP1ZeNhZsGoGgN6riqPe6JGE44YLqfDorVumQS5npm1XUEKJTGkFdF9ihwAAuBctWJ5DjehzmcamEfWAHQ",
  "key27": "neuJyXB9gcdpbJwPe8vkNfXrNi4ZPi454G7P3Xuu6cEBtc3PbywVcBAarw6JFrMzZppmRVV2ZCVKJSX5Mq2Zmvt",
  "key28": "5SjVagTvXVupS5rY8Cep57t5jGKckr2SxdMn3zQvtjhkEq2nEJwVf319h5yJ2mZnjWyzU1cWTXTUeeQck5zkBqhL",
  "key29": "2vvTbn2wSWLV4XoNZP3Yguz3MdQ5qUBv4oy8qmYGnaEBE5XY4vEaE3jWLUVwLDBpfALYcNzEhi5uk12svJrzQhr9",
  "key30": "4sv9841bjNs8gQCdPy7a3LZexHVxKDj8A4CRJLwEraUkK2gDvRERs5TsVZ1qZjVRGo3vqhxj9A2q5oFjD6RmdS9d",
  "key31": "4pY5WGgFoiC4CCMH3MVyMJTvWdHULCAz1pu7csiaLKdHX97BM878jPeXn3BLHyd1GWrnryhWGvjQFpaU1K7o7GXJ",
  "key32": "PZHpRytFHY57btyz5r9x6rQmiwU5yPpjjzEmFimrCrK5aYm33B3Rxkq4maG7dKcMLLYCjVUjqWpLg1NANv4uCaq",
  "key33": "eJAATaxNRu9UQ6mCYkHRub58riBgVc6AcZgcAkQC3DaXqaF2hZVx3KZuoXBi2EsocZ9dH72KTaPMUJw6bYv4diZ",
  "key34": "4mN1jTEj7wiaTAHcyHRdPKeA8uDuJKbdcmDf9CW8jaDKLeKtwsQceYKEqCTdALMUgQsAh7RuZ2x7JGFgx4gFsHeA",
  "key35": "34w1ZnML96zuFcTKu7RNMCK7XR3rYVRkXEVXCXiTVFFAdeeoAPyYiAkd9VewpdkWjzE9XpCws1hqdhbWapDnhUk",
  "key36": "2FoY4fdmMxSbxCjGfsmhczy5PhsfCbbctAvKizv14AaUwmUzeb2iTtooDC4CiWQ2uaQJEqwfMHTrzxKw1iWXfTwJ",
  "key37": "e5GKbavCYbXUdEErEwsz8XdrhTcHPqAN1kCXcrGjhuzkJNDSt4o86jE3NBY1TbhhzZcCfEknqgFiCNsQg2nqs4c",
  "key38": "5hkxviow1H9WV6aNvQMn8iRYNE2BkrmkUTTpZZzSJm7Tzcn7GRbamrYXUwRatFvRHUg1DgSxdzWDUiE3zMi8tq5r",
  "key39": "26sjw2cWXBDix9b4cwgWRF4sLUr6ThA5JZLMEo8bC44SZRkADwMcoNTTsJB4wrGPLg92UbQqJxAVK4M2tKPjkjpX",
  "key40": "4UiLjTmiFJyWbYUWzQVdt8DqU4ij6MprGWS4i9HZb2Aaiycu7vFKjac7PjTtAKmnVJTK91EfmqwYhv7cfjcZuQQF"
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
