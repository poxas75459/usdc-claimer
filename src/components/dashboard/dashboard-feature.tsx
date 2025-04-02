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
    "5DtN3MN4BY1DhQGd5s4aefrDzNGhy5dSdvpbnG4GoAMYxR1k6i2Mip1qyDcbbbcPqCq4VhuMHhvNrv3djwV1fWaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nuY4buT8hWbRXJahb9owhL28jij1sA4chGYMDQD3R4GQpcyUxQfmwRiQg3e91noNNKkSx4W6FKMyEnDnjBWhQ97",
  "key1": "5C4UiHgohpLEXEr1tXCKcNkZxDQKionKue9sCoZX8uEw2T2zz9ZkEeBzybiL9FXtLcufzsbjccEMLU8SaJNV1q6v",
  "key2": "4K3hZopBX33RqTtrVBmtvwAGW2BWG37zbrTRXpy87umatYdtSPAc3izjt7eyfhGoNTaJmU5HKBkdBncEuHbJ5tmr",
  "key3": "3Ga8Yc7GB7UwoUsU58SZmGScAPda8YmjKBssc8k5jBg3zsVVJ6LrnKXckVmftjEhyWmthXZpU2M5rnkkXL6tNZMY",
  "key4": "XAnAQRwHU34uZ1GGGiNd271HUz1aA9LuXFKhc8qPhWHKaGM5jHcZ91e9pmRgwL5DL4VHKgogd83a3c76YJUs4xA",
  "key5": "3EqsMBkpLu67peoXydgvYrCec2sGXmBg2Pmp88DzjmRSmT5nyWd6dYBYY1yMrrWEh5en9NRKqA5dV9sdsLrmw414",
  "key6": "5ayZNTqKEHK7Jv9YSGmmEBZfes9Kp1g4MvvingKMBCAjutDiK1AwMWerMAhH22RR3qyXwuDyhqkKBspZQPCbAG2K",
  "key7": "2fsJ6fdQZ2JuqWzesHZGmvwZu4hPP6JgLv6sCEZweuYHiij2MkiZwQpLShyzCbxQsGXPf54rCs3yJH1YtTvrAZUh",
  "key8": "5UiLDnNKcgGkYyyipHeNhZkmwiH3AgohKaq9zbLtLt297WqP8tbdxWY1Hcyx77NeKb4ifVRJWZPCbUzLFuJWacaR",
  "key9": "3yE8UTTPMwy8vVXLtvZGK25g7FfRHJLetTKqTfoPakeZAYAtkqhCMxtmuNAZajnAHHrtLS9cAPKUZPyMpTDkauCW",
  "key10": "4AG7bZues9TX57U7438fuMPJ7oswdM92SFHcKTqm52fZHHTioCjKrcWU3aTS55AebUnEeoEG8TtDy7apFM9q6Mr4",
  "key11": "xyjQkKrdko2ScmVerBoi5N2pqQp2m6kmU7Uck9tg4KuwML14krGq4TUt8w5bzTVA1gc3K46CaSJn5Tz9emZiHGQ",
  "key12": "2pwwKMBJVPw3mSAUvtcqatfDocSg42UjPqMomjqjQ1JiFiK8GwcjFz8gtqBrPiCQngf8AR9nPGwocm19QPAJV8dZ",
  "key13": "4LozLXxABojBtgQ841htUBQUhcyx9RvnZQzGbiyZKpgouygDepvS7D2CeihnzeMVxbviq8QRivYwKjH1f1GKZJtR",
  "key14": "3iJjkNnjPExHUKkjguucqRJcSUvfaCooFqot9j14MD4zAiMr9qUqbQfMPR4wT5NzQMrLmFJUgTXPLXh68eeRhWXf",
  "key15": "4PKFf3NzWWKmuV9JgFLHgGomMbpur1jCof1qDjUC9GPFZ9NcN1PZ6bdWQq4fV4NX24312mvboqjXtTem7xNyES4i",
  "key16": "3o7WU3H93KsvSQKYtXExwgtPCSc7jmeJs1D12UHixHVF6oC5EWJx5qSdQVRbCQJFT6pda4kYevVsbs8TePLnknCB",
  "key17": "2YoodKqPnjvT1JqVtxoqhgCaz8hiWjHieon64YtsKiomSu7jEj8ZKgDXvj9kwbMcWmnLHRqn6C6djaeDNYeie13m",
  "key18": "334Uhzs88iSJYrPER1QvCJ2Dzo3LmJAqqTfY5wP6D1wf8NSmQYyeGMZKVYBRHjJrmzMs2cCQG1zMURskPD1gN3kK",
  "key19": "gWAs6mEzEzgGwWMPursPrxN8Fixd3wqbEPXbYeBz2L53bXQJgGHoxwvgmr6hzY6dgXxEuV97tWmyF3KegUsjKfd",
  "key20": "48tYP8tXcZiNCXi9StGdpfa8uyoatEmQLVL1jRMtFkdei16a5cLYme5S4n8s5oRBYixxDCCnsjDRy9V8spsmfF36",
  "key21": "4z6JSw8kmMB12dqAJpNHYJJPCFAWb2PvrwTiWmu6MbknfnAQjkoMnKgp7mvUzGe5hW6EFx3ShEAHgu3TpncUhgHp",
  "key22": "2qtxt99B3pnuecRqeyDQC7QoioeDSbT7m2xdKecezKMSfmp6gQ2oKGDHHXSubBTpvW8nn97V33rrYo4U2tKXJRec",
  "key23": "1TenzM1g2Hxn9hMvAbFdpywfSbe1Mxfw1uwcgR4awjepk5to9VdGdk8nY1zPh2tA3rU3ZC5sVpXii2UbontcHvb",
  "key24": "tf5tusWfTA2MJikoTpEBmTZ9ZcoRmmCLX7TGjhGoRUygAD8VxBRChYSssCLDvV293DUjjYF5G6EBsnQ1PQw7LUi",
  "key25": "kFBb99eZAAhxZ5Jz8J4SsSJriaoCVnL3eFuqvcPwocv4RfwmXkkggYzWTpND6P3HzA5atu4P19g6EgQWmsaakEr",
  "key26": "4c6GkqPPwjk19pnvPLtN4hSXxwubetKb7oq6hJJN2qMe7M9aSaifHrswmaEsz3ZPedMWUwb9Kw9WRBBasmxc9GoG",
  "key27": "45wHTqeymRBVww5yf76JXeBD2xKUNnf7zKGtg8ChwCMJEGyTbkc5cDSQnTbcD6QZkUYRNyFanAV7ZJS1fmDR33Qk",
  "key28": "4bZ5fyPiQqEdwiVJoVsEHQEU8DRjjQqMH3TXssvgSyaQXahTqCgFxbtWUuLhLDjbYqHApPXFhGbZqfoLUFD2CUeo",
  "key29": "3ZtoYtg3T1zEKQbac3cbWznuxzzchex4dTD1ynmJBnefMg1sUMmUg4z3tAjKgBtwq6uhPPNz1ENL9DKQeRrhwzFX",
  "key30": "5xnTow1z6xDeQWBfRwM9in8QK7tau73h9X553aPWDxfzoUs5TGf9jyNmacQPeBqaTiMD9Ni61QaAR6iS1df9s8AA",
  "key31": "65UDyQvSj7kBQwy56x2TWsHEnFoGRnzMJpSXyTKBWtLwnDYH3KQoyzSTSmDAmSFDJJzFq273Z3FUzUWFEJXFYVbY",
  "key32": "3zSMr1XMGuppHBPXafmjvUvqm1UtyNu6Q1119dTwxuMZuxi4x7c66wRi6GrPdDUnAsP5PVCTqW8x2qHeG5q95gpz",
  "key33": "31ZkGc3PiNfz3udPwDZ99QAvi12NJz89ctspEVFjrRRhQCYSVoUaEuy8rMLE7ZRmc31JueYBgX7yQHgknCHwCy8X",
  "key34": "fuaQxSvEtvDTYSVtwh6yo432e9yerPaYcniYa5PGawfgjcQZNW4ySH7uR9beYTPiuBw2GKEneyBJBUHQ1sVMxeg",
  "key35": "3YNMvKTtoGowGAWyZkk4kibvssnWkFHSvFwnUjzvWTpvnx6bAaNX1MPZdTSo3No8XNwT6e7ijeEHhh1eoaZfrijm",
  "key36": "5GKQJKyjWGcryrH27VpGMQWsG2BoCLQ6gd3Kt241R5BXJ9MTyoxMhPZD6qpAhBZC5xAbAYERdXfBFabdtrpvtw4q",
  "key37": "4akpB5NXRM5ESM1trBeG1GceAFk4qkb8fWi1G9fsG64hanTQRwrHLzgwDg7Nr5soc3rmT8t2YLq6NDNsFpHUWMXH",
  "key38": "4WMapeLjYsVVrvWdVBmmJ3Rrt2GuWmh1nDrp9BwgLdrvZBxri3TDeBGE8WwMBgzBLe5Cb1jippmoEsjAquEQoCVY",
  "key39": "5Egz1ExcJXsh173sEGm9pPKAMvCcrYCTozoM75MNznxSkVAsXbbLwfW8jUmEWfxHk3ARkZwV9UbLxLKktguQoSF3",
  "key40": "4JzrK6LW89i6RXZXUMomt8UEXK2Dxhgwwf2kgz1bo9h8tLGKNk4srEnbBVo7PSVkCKHrDe5i3n5rRDBgrwmbW8uU",
  "key41": "5E2eer5pMXiSVnsj5VzFc3xnGEHxQqnVXt1Bm1nq4BrxNZaps7BBhStL8tqT7E3C1mnK1NwVvMtfxqUVqV6Hs5Un",
  "key42": "4GMvb58sxCZFv9wbJbqxQhf33BL3wniik9ZLbawxsLhL2tq4kB1D6bq5HduQbdMQvyTmWvvqC2cEw2Ty3FW7GhC5",
  "key43": "3Z7bxHGMzQqcQxuYhEDVF42hfEA5Gcv2UdyJjhgCu21h1Hw8nGCTVGUjSazBPA1FxWtKBxr9XoMnp8ZNEzSJzkKX"
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
