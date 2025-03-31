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
    "rq26qoD65Qbv6e7TJiKwMogetfsvDr5SJRWMHrVuFC6aVYXxhNawquhACShW2fJ1L2JSrSHMmJQEZeC5Z8P6rVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzePNe3n4v3T5kAxJgE2DeZue4r2ce71xTRTQc8ZXDVHxHSJZrvf2ke2TuCGG9gBmPQPXv74tTD5JuDTqVGaVdn",
  "key1": "4HGgwRxMPt74zLSXyhsA6FsWT39XkLxzUsxtaRzwbsSbkaLCdDRSc9Q2t1soLtgeBjf6J9xhZNRQ2hapV87ALRFu",
  "key2": "QPKV5wVgcNCRk7jMqb7eTMXEP2pQzyH4KJTGS5PdHgcoku78v6TpbW9CpPncnp2CkpEB4Z5YwYYgm3ingeMMyUE",
  "key3": "5jhxwrv2apjzxR1mAVrs1yFMqVrYL2C2aX6JbpLPB19whFwBmag4zgyYVETZjPU3YEGb8PiBF26yQD1rrQgPtDxJ",
  "key4": "3LcFNuK1GfQZdfPkFWyLFrYBnLfs1sRm2pxSwFHx84GmB7ZfB7Ygmi497FwriX4zpnDX1RG2eL9M74PrpAddkt6t",
  "key5": "26yKJQLxk1pzVQ2kpZ4FhWzc8iPGdqbu6LhZgW2XA4YP4TFBECctLuEHqAGxQWb6SZpXm4dbmPk5nWV28apfoeRR",
  "key6": "5echjakUuzLLVWhCZEtVdFCA4aXtBTz2CNYJPo31vvqALc3pM5UT8JK6ykBWUzorJmo6xP9Guf1Dxyv434CsqbCq",
  "key7": "2JreRSKYdxfFM9JtfaSvqoLfgBZUJeFZsrcMBa4hEuqxDRcfetGwJMem9mvmqD6VoWmmXS8wYSXvkH5dd9e6Gktg",
  "key8": "3jV3jmYW5BQ5Hqar3We6TKx641ZMKxhp5bxuf1TXnFLanih56uWYrWNr9fTHQgRekUWjqmoBL3p1xZtL1zP83bHB",
  "key9": "56bkUfQabuZfDqmwAYu5KTmK8LBXcTfDuttgyAXLfcQai3VMHJrtM64ugdfbZrDrKE6SCydmW21id9EWLoWq5NP3",
  "key10": "w6AnAYUVF46xN5o8EhVAzeELqM6g723raabiEernT3QfC6XeuLW493RUbvbDW685Rsg6FW22ptgA4d5MF7BdwAV",
  "key11": "5n9oQKndHtHVU4xxKjwWXceB8emuyNyRi7EZZKuvaZH4c9zf5WpzcZK2spw7FYbCvjJeQGHrkJ3Jde8FarxCYe7F",
  "key12": "42xBevFuEFf3N1KTx4ixm5Qohu6JSncrBJu3fNNh796ixTszQxoYvWq2TUVPdh7PcmpU3iKYH8bKTQLpvWDzVrZm",
  "key13": "61VUexgWEZiaCjGyw5po37dQHAWFAUyC3ACkpgndBx3tmCttCQALrHzCtrgQSW7sN3ZasHG89YwJz3FZtCz5TEmK",
  "key14": "XL7GSDqbnpmurJQt8b2VvGDGqzW76SPjhB92L5rzuBp7ht6k6YjAhb4r3AosXJgy72ygaohCchaB1qHaHUyADRC",
  "key15": "Z91uw9A9GA7wuUN2VT1LdtRxsKXHYGqogcWu6JnGeXBHQwgtdJ58ECtw5ii1yTANEztWEqdmQPqhtpRkArLKHBN",
  "key16": "1t1814gKiME8gPB89Xgc2C2xmKbxbjmeAbhySSaKmxkL8QRGPHnSeYwTAKyHnsGntZAVqz9pVgFt21qDjAvjZbF",
  "key17": "3CmjCujyZHFt4JTUjsPNHSozqaKeS5kzthEoT1TZoL2X7UJx5uKcjKRd62JL9QDNoDeoXRJDViAGxkBLMkLLg3NG",
  "key18": "4rLBWtjoDwpjVfmDJ9AbegaJUrcWhe7b5Nu6CeXmSef3V3FXnnV4R7WA89xMbcYN2pfQfKmiSYtdG9xHM2AtZgPs",
  "key19": "9i3GUBkGHR72nxdGTQEzbMkDs9JMpPQBhobH2ftVobzbm2Q5TiC3uKqZbfPFqFSPthrZR5j286WfrYkTr4LkbEw",
  "key20": "224TcpB5oK1r5Ui2nhBx6p4AQ3hjXEzbS6R1pkHgyU2CvAJKN6mnb57cFKDFWhgx2mXfdo4tchfZrd4MN8XcBArh",
  "key21": "fNT12eTwC8wyNRxhcMdUxwhanySpd7qG3xZAAFKA9o2BmfD8nndo9PzRuQC8wFMCbZ4k5y8ZpQ1UTaG7UZMCtG6",
  "key22": "ynuhieBFuysFh6mLrubwvCNjCuU4rD1fzCiCjQ5d5YGEzNdicHnZLj3T7GHhnKkMY4VV6wD9aDiiMpHSbdisqyu",
  "key23": "4hZ2MVd86dse6h7cce3wzg1jcdvYNcB7wwEhKVjrkv3mGrijHAxoTWWuMoRmR3XpCbJCqKL95nkVNbV5KMd8WCnW",
  "key24": "p2dKMBmSZ8uTJQqpiVA8QGhtZhzb3F8HBtWGjzwfFqXLWodMpUHUGeUywSk64593qui9jgxfnEH7HjajsuV88AY",
  "key25": "4sAH37gv7XiGGCYKYzejC19qEfmT8y4ViwvczmxMUY8SVmUjivFJQroZNgbHMbsJ1NstT1iEjgzS7cpZSUsoGXFu",
  "key26": "4JhgbbdPdQ4aosLWzcfJ7qucRYEbgfJWB4MT9Cq5rV6GLtBtZw8Yjr8L3AaufWY5a6EmBcyS6MYSPssHhEGymFk6",
  "key27": "5wjV9MsZ5J1PbYu7PDsbohtkqwhfuegUk4TZqBNKCG1z6318wockxGJMzZQzJFrBA79ZggjAtR83Finvh3YJBKWm",
  "key28": "56tbnb85J7vYQL78HVKGxupxNArRcqS1HMop1pjpqiHQRTqqs7WZPFSDjiz4WhN2og3VKWjKecmxb9sKkKtVGAdA",
  "key29": "rAqNWUE6DQuGrSH4bpw9MKVn2CZ8YWBX8msLU1amuK3sd2JzK6rz3jMaKUNvDTC2mf1dZqxPPtFUmPqQgDrf7mu",
  "key30": "4Bgm2iuLBAgnux6toKrPzh4Y9aCsxs815dJMbD2AJve11MKftHRyWCpHKgYstdkVotSnZ1zai9hgsHSmvLoBrvte",
  "key31": "WKaXuedGQsVbjmdhuaxi1FTwENEtEjc3cb5JD9uUrTRCtwsBwL1er1Aw5iQiZzAxuZb4KjwQ7ozNohcg4yunpg8",
  "key32": "67L5sV4eBrfLtfu9rNJ1whidqCmMEjVtRx5Q7xuYJErdH529PYZZBVUDxsUKLHKXimaysNBW2CewBt6dW4Pacu1M",
  "key33": "64atbq6ygGBGorKPHCNGQon1DpzgM7e4Sd5X5JTkNHrjb29b9H8NQrQKPRxizFL7m5oVmgNx6zcQvTahDzC3H9EU",
  "key34": "3s6zQh7nerrudjse76ezeKMKfbQvBDkUg2rgPJRHSbyMZa11zdndcVSt36pZx84NkCKign3E1SFxR14e1oqRF1wr",
  "key35": "sc2p6WmSLkmRBUsFprweBzEyXVT6Jm4D3Ju6nEyuMCzqj6Wz91SgnPo4p2PGoDji31qvwzCo5jsFWgutDE5Pbwf",
  "key36": "2yLjB47RFpvArpQg1CszHQn7vBByCjXvYi1sP6dnPzCGRkgFc9ds3Bsxr7z9RVZajFii8tdKZFXswosXoJq7LCvw"
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
