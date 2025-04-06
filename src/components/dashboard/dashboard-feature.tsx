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
    "4Q8WcdE5q2hkcsyptCEEMncbWHJBV24ZgnGjjg1vTfkZb2QmtJCVUCyPzEVPL8M5rDMZdZA36VMEoDghC6eJ1MXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qmPq9aTCk6q5HHgSnBwmU1FfmyW7xqdXVAhqHpXRLwcDaNhsiE4wQX1kqVZHwrrFZMUks1F2eSnPEJiCSoskChb",
  "key1": "3kJRyJDAerZCmawd7GbPMe7rg3vBhEXU7PSvj28F9qk5ypqh7MvFkmuGc7e3iY5rhKEsumquVpa1GQNqkwVvKhY6",
  "key2": "5113PoiaqL4K62CZV5e55KC65qkgkpQnSfCnGG4quHwyY4LEWrb44ctX88Dd1RepCQ9KsTMa2Ne18ufauSaTD81s",
  "key3": "5aSoVt3k1uduuVyRkTPD7MGd9Lz4ywf2oPqSLFscjXb9HfdQouzAYQ4ZtTKiFhtgSuRUEo4vgSGZ9PrtPyQgRnur",
  "key4": "4fzdtePsNgdT9w7Nxv1zrn9ZVUUZ4Gc8gPqCQgR27goTUkrF2XFrKke9PR8zyhe5eR5qoEPsYM2P38jKSKYCkuJh",
  "key5": "55RqkGYNiznT1hf4BjbobWiqJwimoQoVdj43UViS31XHA9e1EiSvsneBwWVVnU9GMhZbgHBxyZrQeZdqeD1gpWBi",
  "key6": "4tSs9qmZWRiD1pBrZVGWt43zTL9WybXuAji9HVF84FAeKteDQiPREQaL8NVBJRegdFyjgJYM3K5q5NmHgRrpsNoT",
  "key7": "QGSmayqtvJrw6CThYqE8sj27v7xdPJzyUBZ74M3MDPkU87gB2czsqa5KP5rGRZ2m9GFP4a76De4akiyzc4Xada1",
  "key8": "5toYKAU4QdktbTQDKmmeDC13AkP8YeWiC2tfxWJq8w3B93vnGE1auUpDZNu6YFUP8T5enLZYRAkjgaN1mmBxBqbe",
  "key9": "Ppc8StvakbZFLQarUtWTfa4NCKa7RkedhWewarj2cx5Yx6EWFswNTCRhy7Sm47MaZK6j6efZUWWLEsNYGuc8kt4",
  "key10": "2kpdz3wRPHJPEe5BHgy1worDFYfgujB6hgQg4qRAFySk6r3bxJ3q5VRvTM2Vs91saW5iptnm4LWe8rNCmCohqWkC",
  "key11": "3eSwq8eRLpzkUAK33ayBHiFN3W17dcUhE7vydJxH9eMcDkXvEaBbyVddeXFsTQWVJw9E6UBPsTuW1wGbLLVi9cXj",
  "key12": "33AWKq65tArtMHASm6R65ShQtQjP9JtyUqnP7v1KcUiyfzNVacdBbdgB9aNMxm9UqPkT1t6qnsdm9PArxkb4qB7x",
  "key13": "2Tv2RtUUMYpxxVmhXp6PpeLJC8a6QeE5zvDrr58JeheuoarHemoMSRBWs5E9TAPyRgf8Z5t3XQTkhSCoXYLXkfW3",
  "key14": "4wvDsvJkh3gA1zvTZQ2UJUm5AoQpaLgWoXYDfEPZa1YgLTtDCW2T3HCwmimDVvv3bf4Q9Rk9J55Ya5jHwW5z2doY",
  "key15": "5ZeJqF6uJdRZEMDvMGnCiRBSieNDgxKpagEoQGSbn7uNzDTEj6XfsCGeFZJVYpV98VMxEuqk4MgeJWXKGH14zKwx",
  "key16": "4SpghGaSp1UgDL5tDdsjtVtFoFkhQ171XCe7taNFfz1a9emgqokMEY9BWnTTWFtmVDVo5AaYF2xNkRkvdkTXpAq3",
  "key17": "2cNS1bM8D9gA1JbTsDUvCeEtiSoNUJfjXCmmYd7rtEVXtMhLxrg4b47BqNGMc119xsgK8KUXYHMZkv1ZWQE52JGG",
  "key18": "2UeQaA26bBLbpD9YKPLDsVWSJU62FbvRJVApmKzpJTiSxc6gBvNV81tXqzgReKJm6aixA5xcPqQ4Z4HjEog7nDsm",
  "key19": "32CBp1xi92ud8LGM5qeck42onBVbdga4dKxPFrZsu4UUgerAvwikwiRxKYXbrt9Xq8Lhd8TejWxFXZukKdf4BJNn",
  "key20": "2LBXYErMJffgYkKSzuNRwoYkg6mM9wqTEtKvpggCtXzFMxiDbubAHKjFL7dvEi5LguZQXtXW8RFecfectJoj4Kx8",
  "key21": "2xSk2gomf9QpWtptJJHd7rKHics6G4c8ugFe4UvPcnrHgL2ueRU9Zjw6D1yeh7NjHuU7dEnxQMcHgEPAvcNWy3pN",
  "key22": "caD1RsoiQLdXCpmW3kfCrVb3FKKvv7oULE7MvFbVjrP94t3i7KtuQwYDzRHkBkLUDu9PoyAK7hUooGWn21et9o2",
  "key23": "24m3d5NJZYiwwfkhZyqMpSv6EuiBwMBTXm3jXGA4rVievtnArPnt3Vc1keJ9umgwjFC6PNrYoCBuG6sSxsmkWgxU",
  "key24": "3A7fUDTpKY2BaXVGXqv9Hh9XGsUgi6Lzo5K6WWWcoV9Kb9gKA9N3tT9oPQdidGV2W88dKaJp1HUYrWJ3SMxgTizq",
  "key25": "2iK6BiqaZvcsHj92yUq5qA3tpjtXr7imruAf8GXkK8hLqVxTTyah3ccbf3tGbvBRmCSreFvQzmtPPG4Um6eas8sZ",
  "key26": "3RxwZgPwb7soqyPG35tt9TecL6LGUJqovQ9X89oi9ZEVMrMgRSMyag1zkbQWATNodcMwDjjHXMy3VyXqhrUxgFjW",
  "key27": "34EhDWHprjKjtVtNyTJkWRoJxm8ZWb8aM2Ggu5noPruFtbJJte957AnUcr8CaVhjtTsuvA5QZCTJEtjDqJwE8AFp",
  "key28": "4kgAVUHvQHqCpsgxGXqxNMyRhMj6EKfG8zxSqddG4zgdoYm4Wf2PT1XuMWQ8qr28PTfsXAqo1RWov7mESTQnRvtm",
  "key29": "4TiPNoHkUmxhtQb47E9pm2ZiHM2mCmHZxK7f77oMN9yN9qDr1k6ZvibijDKCBGEXx65gcmEsDwohw3TDjKbdetyZ",
  "key30": "62LjEXeLAYKUPMXzx2VTPneqGzQQpe5oK9TMvNvz3jNQ4bWwipjmuoL9Rzof12UEFkxXeTmDurRAYFHRDcXVDNtP",
  "key31": "3q6F9sjNEhKeYUVVt2N53sQUDCC7bka4x7EAeVUEW5y5Tnapw7JeHMDDhzdA2vodeBhFhBoMuwf6YxZneHTJnCZv",
  "key32": "2mkhnkT8RkHUPxyBFcDbd6sFTHcZJP6t3YC4KzNuGeM8duFXjc2k8icchxKtPcrHmGU6iVk7BnrGeKUGbw2detQn",
  "key33": "42ZRFvRDLYM9ioiFLKhzgtk35S6FL2tW1zfmT9DoDZefbsbWQ4j68jTcboB3tzfapPPa6gTjvr49255x6QqhftiV",
  "key34": "2RhnMog6GzPD9wa6bmQmm8Qaqh4vnTW5qNDem4UFErcuT6Dbi8zw7RuVtiaKafPQQX7woe18qM45T5WW37dcZz7u",
  "key35": "KNzSPhDYmK83xqTTQWEMXjfxSc2fLmpTdHocbQgN9LqeZsgauhGEAnpZfLvBDivohKBmMoGiUo2Whz5QVwTCHJD",
  "key36": "QzRuLqHx4nuREA4EMkV1TYi9A5CCZW4uqWDW84iHSDK7nY24MTkPrUrWARVnyJmg3Lg2foncgoWa2efjpqkBmBs",
  "key37": "55fuZY9xK9Syjqnf9BG5vkd1WmAPxq39mvKQhq1KrJefbnY4bQiKDzYNV9PK5WN43GyrnXzSQE1EFXGyApa4h2kK",
  "key38": "N9ps3yqLqTdKB5TB9qZPjhzmsGdKERzxDVHoira22U3brGy6jjSr5GZrUL2Sk7Aj9KCVMrQ6DGovWeRr7ynaCNy",
  "key39": "nttppjAobv3NCZkvpKGvd1wNgTrQRzdPAPa1wNrcFd7JzMtu3M4iedpGR6WcBgGZnxbs9R64REtR8SZQ7n4d2Ue",
  "key40": "EqSRJVSpogZ9hZcUX1RHZ2McEhcH8q4wJeUMyNSUu7e5bxCtJ2goJoF1hWRMDzMTj4RhU85PUEkmaKRve8TRzgB",
  "key41": "3oLcrmPYB4SjEA8FHUHQ8P91dihuVPhyrnhWGwEysvNeddpf9Aczk36WfzCxCdZsbsJwL1rppHecYKaG2JK9wsr1",
  "key42": "28Jqc7JPchEbktRZgHqfVNb6YhoDG6EH38EK2xYaMiCFvG5hWcRGvTJM448rJxftd89bQMeryGqmftvtSBkLcDdR",
  "key43": "5kV9YANQn1TMtxvM3YXGvjYAy4eQLPJE24avDrTggTiLuf3CvVt8Lmq7ozfiVmW7fcsDwx8TzBMD3ypZT4e15MUr",
  "key44": "2UAWuiMqKyhmjpeAU2u8YpxvuqtcQs1M78PqQhxS2p3h2dWxJm9tzvhcJQSvm3wxdQUgX2SQWX4mV12ejfStPBiT"
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
