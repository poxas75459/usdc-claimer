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
    "3xc2rixyeZqG1edr9mTgUVYYgUFhr2DY7a1t1fYzaVW2j5KX8SyW7wnH8mtTX1ii2AQ3pKiXDPCnwEfYLhdMcLYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LPU8mWf7s1yZCJaqjUQi4aQpRAb2fnwTfkNbx5YvKGzp1CnZABmiLQnZSbtDb7y5mNejVRifH5s7ZvRMS4MKwKi",
  "key1": "5h6YorhZz8ZUpHYo6sGSBvksRXpCpvpbGzcRtM1WVu4M9cqF7PLqptqmMVfLk3ysfddVvKbUfVkCFZbmF4ntM9cE",
  "key2": "87kjqbARjVwibhqKdRbS3gPnyPBmgzFMkgTQq7PnB9v33aQmWY8fZP4WMpc4qKiBAzc1WoJ1RGyQyCScGgHGv2A",
  "key3": "5Tf7VXtrsyNX1ysWRcW9hZyhJWTykxap9YvLyrYcP42gD3XPVNYrkyZdpjQuWCXyNrjSHVQJ1pJezUf2EpU7CA1a",
  "key4": "2rBuEmZvQ3DLA4woWLshxE69S4GSBKy1zh7GR5v3JSLENYbuH8ieuhRLXu1r8CQ4RK7FUxe2RMP7fMdPMiirqHit",
  "key5": "dY5urASkguoZi1SM3gSdEDSbNT84epHMksTAnuodWkpwviQmJSPwBcj4j7PnbtRRRcUVDGYzJm3BFk6YuuEaVEX",
  "key6": "3QQMDYMAW6uX6RQkBH4ME36JAwm6Vg8rKQdy4dSTQDh17bASP3Vt3fo8pMHn8LT9rYrcMKnRoZo9WmGy5ZzGU1QK",
  "key7": "5zKiboWu6MfvF82z5f5pWK9iG5Ux2J65AbdUAckUYPaGDLU2k9JWyrbUrfBzNJ9FiBc6CMVmPTfunHT8sY8ViZmd",
  "key8": "4QGy6zg5bDnHC7A2dzTeK4qoCwYi3woPxM7B8zKXLUziNZRgVEoeKXG7q6rQnLR3q186ojD3iTo4Kry8K1FCtvkv",
  "key9": "2DnjXrHf4QQiuxBXT7ZhdMeEXRDv7khqmquxhRri8Fno5oz13x3b5ZZTknD1LnyrSY32dXPiGeDxjaRJCJkYBRHk",
  "key10": "3KETze4X4zBCyBmeDoUqR8UT6C2yMquX44GEigMbvjx17bHLz9SZmrwKH62d2zyXb4zinohqYBk3kKUXMcGp719j",
  "key11": "k9CAA736FH8NSAEqP1NH4mjkSZVvjMCaVkZ34wv5aR962gaWSjEuV22o33hjzYJ6hb4srQdByx2YwZngN2cR8ED",
  "key12": "5J2tsnK9C6CBFNNNSzRbr6E8AMyYNePxKbziN8TKvw2SquFj3qPkrPgumnbzifyRfUpJrTNqccKHYQU1DZF8PHRJ",
  "key13": "43P7EraQYYxKnAbA6BdAH7TjoycZWpipnNVxEV8QfnHjWfsE5qZFE1HpGaxgNrz53Uv7LE18XmmWgLDfmDHUVQgs",
  "key14": "4cZjPiTUbViQakmmFF2atmTurdoybCkZRmrNWRGR2a4zazRjM7SXwV38tCTTnS2xMarQR3w2xECbWoxkw22Qb6fX",
  "key15": "241Vv4PzppqgKRBtaCcqiYnV6UC5BRrqYVXWaJfBVoscxXuDP7pnn1gEh2kLn2rXv7E1N2TySuQsYWKLWmuinaH2",
  "key16": "4e7Gz2Cu5NyEXQwKcEAzV7NU5G37qWumS8ywAWGVnM6LF6RjJfgFKSjqsH3YgnF9e2gWawSgjjHUnEY7uKiVKtzZ",
  "key17": "dv1umvpuFKK2Zik8VdannpPZ7SRdwAYGAPPznRcQYsfxd8Cv1kwSNmU2YgYbyjm4XEv2Z4AHdRjxJuQKTQ8gnxi",
  "key18": "2wM3APmTxwC3h7AbmNWSLQZguNV3st6qiREQhVvsVJ52NerA3Z1DtiGMjpdzdaZq3TtA4hjzm4R9LnvvXGAqfn4q",
  "key19": "gsZouoRmgw6VGZinzqV2wZogGxnTP7XtNMYJzL5CjgNpAhJZzo8ddZW4xgj2T4pmK4gM6zYoSDUE44yAEzMZBJB",
  "key20": "4DYRDnm7CqnaPazHWKa9GLBRJXwFgaeM3Xek2AkMfvQXkRYDqwEpv4Upx5wNEvj8FSVcPMPKKVhR3SQBSJGEqhdf",
  "key21": "2zb1rPYQHBH1i1Lms9wpU5VmZsp9G6VVGfQwP7yDWAKYbBaiDSXcWV9z2NZdq42cjqe31deTRHt2dfWckFvVEyWF",
  "key22": "5h85Peibpwy2GqiEZx5MfVQutMNMqHiq2XoiiDchL4PrtjCXhhusYXvUuXZdVXGdpFMopd8TbQzK52VsHGMXKna1",
  "key23": "2uSWj4X9s9WnbindZ2GktwtSznbPsVsjRQqr2F1X9vuPku8zqtfotvFexUZNtjCsvtVmzRzxrrNonsYGYsSfTep9",
  "key24": "CKxC9cwVgf52fQY1mfd7ZDLwBg8G4NrVVbZY1C7uX8c6XVEzTmfJjPvGVRqfNcYfqSx8DqdB6jioQR1ha7N3jkw",
  "key25": "5EpnPPToDZZbbFH7Fd6UcSzuLH1zPeCaCUTYaGdEYNTSwDQN9uMwTZH1z3fuH2t8BGHenRxNniQ8c7UrLvRsfZMj",
  "key26": "2AE7AtHkbUU3ze96hRtuEmR5dEgkeQKtWn2uJRAREuj7Jk9hcdWQETaJJovdDmQ1JwqSa21CCQNekyziQRaFUREY",
  "key27": "3FcpYedgh1X8WNhWoBKXtsnHYncLyPnpeo8sNcDvCVKfMcXV2Gou3rf2pJFMq7kV7mPyb3rWqtEupiyVgfLyga38",
  "key28": "49DStnWDwWMM6NUFAAVNvGFzpyH1RM1mGYuN1Y1GsKr3KAvAEoA9ZEqXUagDYZ6jN7z6yV7HJVWZUw56BkH1NwD6",
  "key29": "41iPxk7SqiCMkDRpuBCUUtQzKMVMDcAb7VYfnB4UgdhiDwNnDdYUTwMip3wup9RT4UR63ssV124eFuTkwPQAt4h9",
  "key30": "3cmKgmAc6EBN4dPAAM8ChbWbcAkD6yH1Gw6KD59epVHz6jx1v6d6PkQKxVjeBihbw86C5eSEFy3TcvxF2eJJ61KA",
  "key31": "ZQuyLVHMXyQotCxJbQLHbnp8KMcT3oPsLP4X7viCWXb65vRKiS9DmwEo6HkDMYcEmWrWdg5MFXQ3CfeCtUR7rxR",
  "key32": "5cFRmkE2MvLauEGLyL6RPt9YxXH7sXzNKMmMnNhpJpK9Y13cWraYP5DTgJCAJbzegUcANZPEii6gS3QdMEBLWWq5",
  "key33": "59JLYW7GWmstkC7ZEkZ8Bvh6SCpUj8cjDaZJ8Xv116xe75mSYLETW7YKgdHABZJ8qF7q5xTervbcoEtmUgrKNKws",
  "key34": "9u5iNfSWz8J3MEBW772i5KhKDQVLrUZYuq8kNFucDCX2EkNj1ngnFnyQCMFGKQ7ukXpfYFYpYGf6wyFyfmTNLrn",
  "key35": "43KsL2onkF31zkME117t1UdUZXHgf5bzku39Gdo21fuy4wWHDg93LJ95ErqEKwJgN9D5WM789SGo13MU5Gbe4wtS",
  "key36": "5ZJm8ZQ9HvaDdkuw7yiB95qfjvvHNKF8US4NKfSFSUzxQHzhS9SZxNcwYtwjyrx4L8BFztzZdGWh3JdncWRRG6qs",
  "key37": "5jznhojWQsWVtKyUaSVupLztzvPoH8TUkbXBLraazCJEybys9ggUzexMW8ANEbvge39uzL4igZzHygQPze93kiYM",
  "key38": "2qx5H2HY81U28Td12Y4QcVijAzqnSKWPjgNooysYu2TQiUUg1eFco5zW9Sqbm13QcxhYruzMrdAetSRHN1M3WZbp",
  "key39": "22HpVVrTcKgUEY3KXKBDQxgMkhsbFwVEBEdingJTNxuZAJep6ACGEvqsXHe3jTxUhi9n6jv6NpUPznNHYuGK6rEV",
  "key40": "EPJ7qjp36CX7vkZ8HWDWfG5JGp48R8Xt7PRn3eCVH7m68n3s78s6XKCCnysffKBWDpV7pPbZ4bBJDyBEBtV7kBt",
  "key41": "9mnBSd7k7MBkjUvM8f7MjuHWcoT8DtwLuFqubEKBJjD5QBt2cbVFmogkSfrHUoUUkzE9GDYaMqW7J2wDVNYJad6",
  "key42": "2LxqZb6hSBL7npXvu1qcyKKw9zgDrdbTdZemqNHiVSaj3ifsiEudejdA18BmZ3Bo8fjXkKoQTSuaQs5MvJkvp7yL",
  "key43": "WNmZph3Vx6RkExZRRg3hNV4qKSjXHgB34MPTptzZcWKELt5Ei9F9PooQkkxgWuNTbk7eDapVGggJKcovehghsdF",
  "key44": "4Hfq25hyXVgRwqsbrYL67V4kgvTVhUej6aVMt82XgSc3mNrcNn6PS6p8oKdXNqybPAgqwBErr9JZCMruq4LuCQ1K",
  "key45": "wwTiRRUN4XajT4Tmv1zaKxquzZA9WcNsTNihHCTBqPwJNs8JPrWWLmEX4m4gi99hZWr5SjV5ap42Lkubfh72NCd",
  "key46": "5qnth3vYjXxxCZJ4iQnCf9NA5PnE8VGjcLLSTK74zeUNqvURY9zcypF8nPE4S2eQsEuCo9yfZ2UQCAP3nT2zzdYq",
  "key47": "2aCirDVfyZbd3qqT2Kgz2khdAeBw7vjeBx2vuveUrvc3V7gtifahBk6xtFUgi3gV3YhSKw8BHxfGvk6t3oXBxd4L",
  "key48": "2pds5yEsX3dsSvcRK32RFoSoYEHUJAxrp4CLFaGk5gRwBn2hBy6heoFJc6YtjmCYvh6hSAS1JDpLkQ6CYD7ikm54",
  "key49": "5fT5pS8zXJAizM58hj8nxJZoWRy6xQ76iscL1enp1tLpjBwRbRmCnXah2WGAKXgrUA8XkKwHKxEJeJEGPoRbtHYn"
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
