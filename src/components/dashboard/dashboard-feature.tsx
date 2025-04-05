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
    "4yD3wT7nZ1BCZfwpjmXCDuauE1YGynPqabhGjjq9wYBwy9oE34dupTt7df3KXNF4wgKAhKGUAxqRYZVebgMbZCMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x2CG37YpZEJm14PrLtb4KPMguwkyjSsC9eSQuboJN7AN5y7wEJTufFnzuZHJJjnBcGtEksDPVvUevuWDncrgbFw",
  "key1": "54FDDxHp2uzkiqGfniTavTycMP8BR4o5gVnpeAGXB6ULwiYJDCTJdLDicxNbxAWY6QH5UsTzugKHuyxDeRr9Rn8u",
  "key2": "4E8zsxUMoAHnyvoq5A9Z9kV6YgVNp9qKCsKrV6S9iDz1SR5BpfJPzVodkUoYBNjFJFjAGrCwji4q5CmTv9GZqbAo",
  "key3": "rh1BuX137h985GnokunmHb4Mqu1GKqUhUJ6XY1a7YBYRCC7C4C1Hdg7koqgYPsJZJpUQwnJSPUq6ychBAsJbFcg",
  "key4": "3ZsSxnDEBTWZGYCpQmUZuerkaiRWoWEuP2ZfRY6oCV8ANUVoMnGhWNFk3EE3iGP8UsHdk8NiyYy3AcxYcgbUmX7v",
  "key5": "A6fyfBKhySZVNHDHKTBNXJo35mad5FoUwdhASeTyakokXYMqJfQ5pTmgLJByFsYx9QnM6awLhUfWaHbipWfUXhh",
  "key6": "JQP9MxemoYZcfQ6MpTBZ8p4N8X6LWaatyhabhVzrUHDkgJMihU5UxVdeoSfFpUqFa2L4oQwVRxnnLQpVPcvCRSM",
  "key7": "5D17XaFM3n5nT1PTtRRd4wpsA1AsLrjKiRFSSo811PboBdS11U6bDtoZLmFUaUGvVX9qqXdzrJuRYrb2mF6YLHYx",
  "key8": "6k2Whf97Z12nzi4BPcGM9uHvpYyCz8cDQmpM6WDTkCzpMJNxWZTFodzYnFDmhSGq2vHqg3biqKwTGcVxHm9oySz",
  "key9": "2vBcFKcMJRrmtuXgpuWQ8yZb4hD8gYCynSmKbiFZzqiJuiGgZy2zeoQ4eMVdVxENtUbTPYwMB6JVEDsp3oVgnwdx",
  "key10": "51KFeT6KodMt1bJiH9w19rDbVL9h6ycJ3scF4CQfvtRi4sUHKPYA42dNHnpvTBScyskWbbqWBZZ8zphCEB3mwped",
  "key11": "44YDMXfU32LGB1dkmVr4H5NhyiZ6B6VtPXfrJLwS2papkTH6P9MepesCHeUo7JfsnTmnxpXz1Pr5K5sZrMYPoo5Q",
  "key12": "3cmxkaaaJD3UER6o8p3pkmAYY29gBnuuRtczHhqkyVPiarU52sCkoJB6stMe42L41LTaY7gUpnPr9E9dqMG8eBtc",
  "key13": "5dRm3W6vCEDWt5SFW7joXjoJ2usyReMdS4kLE7fnMtMHqewDGTQngVCXB1qEGJVjwNWBnqKKDxTvoWJn8W5ys6qT",
  "key14": "3BUuoCsbcgh5SwRHkGcWCRXjVqLhLYvnS9jHu56QwQk6aPHjT9HjsCmYYBBsoKNYgSt8HLNirENR9rZXHH3vCd13",
  "key15": "4s586y8nZpFeENRQwXkCb7jUzSZV3d9gXt8AqZBorhmmpTH5Pin21wvMwmstuY9zWx26j7kqVVGJByxFkweNAcb9",
  "key16": "gRFVgvc53Ge96kWM6Yqd1Ki6F5S5GsAtWc9xnhgJFMYfnwFTiP3o72AfpwRAe1Ym9LLC44vMsJtJmjRx3TSZuW4",
  "key17": "4smzJokNcm5HdSYTnGAyVsi39NDsWfkSagKi6yVaa1ZUXkFreTnBDK8UFGt7jLA7woSRFjdHRHkWbiEGJ4nzVBkh",
  "key18": "2Cbj9X7HnxrkBRNhDqN38TYL35TKjpUimhqtVyFtMcBkWJYPRCKisUn8UUte1Tb3GU7YGiWJ7cqCjetqVB6XyePV",
  "key19": "m1VMvsCuskHSVwP7KauLjKbMGZs52o7MZb9Vze52VdKWp9GfZzckdrXR3aFgwpb95DPukFWS1q1J5Dt5CqtBXtf",
  "key20": "4TKDCW4bJSntgMJcQcKH7oEXCa8qfgjNHyxT8MBUXDDqNkYfgZinbEctBGaPCJ5tVfEqv5BrsL3FuG1n9zUQ1BMe",
  "key21": "2TFd9ogkXmuZzAsNXMoHSmKwbF3nzJbcLGoouaQNpC8MGHmZAzmeZLQDbmMbtTCJdaePu1nxH6vUgVZ2J4CNnvp1",
  "key22": "2e25K5a3QWChZ2sfT1oSXvPXsoTVJpcZywJ663KzSTsGgQGWhk1V3QfUwFvbBDVDaDDXuog9LsGhxPzgY5pyoKsS",
  "key23": "4f3gPDghs6bbTysWECn78LddbshNPK92jSsAXnhDM6ybmXwQMPbdpEBow4kRpv32j1unRiXKBBfhEPHXZDj8nku4",
  "key24": "3rA7FZw5XcdN26FzDvGgKPxvw7CRNeR9wdqmrLknvLQyXtQZGtbMJbeTqhn4DhGjtA73pFeRXiv84U6sJBkkD3RT",
  "key25": "5QmxK8wYGkiDs24f6Y1RfEwGL2kura8qm7TdXkBnE9fRJ2oDmB1pH5HUYGH8uvoLBNz6QbZU5HzxentNwCjEsr2D",
  "key26": "4frw869S9gxP5T4D2hXSG4YAkXioMfEJxsPg7REw9ofHsfDP5sMLtgdCoozUMsw9EcHh7mtd9Rg3oJeSCZe8mrqw",
  "key27": "4cuy3kDPAtyn5SyWcicVxnuyJx9ZQHfzmoqRQBFKFvXihexxYGtrfoZEERfcBvodpD7FhMGn7EBfKU9s52HmKZyp",
  "key28": "21dLudSCW9Xk7XKtauimzRjVFiJm4BUnb7BafixduShxUFrueuQTYvTCnJe6kkrTzHxpTPFepXUvREsLy2gKXH9J",
  "key29": "5RMmns53MA8JQMVLRsS2dkcqtMZ1inY6cYnwPjRR29QbP2DYGn7LBSSF6gMiWrcpVtC3zVQppcqST3nqvLo6A1uV",
  "key30": "5GDFqmQL67SoabKpcKiHnSaxhxGo78G353TDDmm2DDfQPkeWd9Lu8wxQD967e7oL8q44SJ8LiJiq1Jj1URkj6LLG",
  "key31": "qYQ5s2ubszvmV5kuW4XT42oCzsRGn9t3ZiXLW351BS9Cx5R3vFTJmEzfzAigrpHhg3nhtCo3z5npnFicPq3hHqz",
  "key32": "bbEt1kStuEwkPHrd8umZXi1uvT7GJDT3WNCNd7Lhpxkwpdpf5GhFV7v3nuuojxnPx5mbvkpJhSo3YGQTuYL1wow",
  "key33": "KVmtwfV2CoLNG2HhxeHcGGKV8cR2zpFa7P8r3Ag1LGuwoKw1qJTHCmyZahaYMNK96PoMtwy36CD3Ev9TmrsCeed",
  "key34": "4nJJ3nEsM5kMqaYSAmjEsSinWzu7nFL3kpWDsWHEQLPJExJr5rbmeYigF9SCcpRTfU8hsKVdumxrtdUAeGqJ5J8g",
  "key35": "2qQG4g1WTJnnuT5SANMzsxXw2Zoq7btkaa3V3dVfBo7csDFuQiwjXFMYAzxTEouPtAoumADuKk1eo4KnoGRp38wK",
  "key36": "4DuVEjSLPZxE1CjCvh4DUj6AfXnFnV4ZGHqEPJpBzQtfudu1Wde7n52BqZwyEBToVw2i4n3sQMLAVLDpiSrmaMSs",
  "key37": "2HbYtuesHUNg4M1gMmyjY5Dpp95hAuZ5Xa7YXtmephFrYPzkb2DtuzQPdVcNKGZXxUNQVytpA8N8cCqBbsnXwuXH",
  "key38": "WhirrCJQdP6waqZR8v9qkcCz8AwZqy9xw1tW733iDi6trN5RZaDMsUeJuBb3VeYZcbCYWzEXyzH6usHLsBdtiLK",
  "key39": "2KyqAdu7SbPNRdLWTTP7aF6FC1MLgm389ZqiiaV5i4BxsCsRP1zDwvNstHNkAYopJ2dFCyhK2j9vUwNhRJwHpDt5",
  "key40": "2xF25rBovp4KYNVQ3evCn1ygJeD4aTk67os4stinbBdbc1DjeNTb2ns9V5zwrQq8f7RYMAbRaE3MKpYULabcyjiN",
  "key41": "2ztmTUVzBSyC8XMRgMNfSgwkLMq9v72g2efYrgzGcSJLziEai5XMU8tYJwSYZSEYuqgdyGqfdFyAjAs3ZHFKTyKy",
  "key42": "4BJCu3X1fyZh2gBbox6DsATbvjn1ADRineXqgzhebHMQPb7K7vdwEbBNFHN7dBj38WM85eqd1eFGaFMhHPNeYjkp",
  "key43": "3QwqerxCHEzvc9hbjqU4yCJy2Hv6Kywypd2xHLkbsLCPw46678qw8unco7DW3qozKxq5ozwQpqRpxbeSHjjkyHrF",
  "key44": "bJvT2S9gEW8kiTvESn8inxRXbKTSiUrRkjKgxPwyNpiUnvtUw4uNQPqYa5b4VubUYLv8pEh5LYyB43Pgwkkkc4e",
  "key45": "fwZEgmxMjE14QZhTyWsNpBTss7mcwMhoE9maHuticvmY6DZeYRw9hgL3ePYGRD1fqimam7CD4c2Dr16RvAFw5ok",
  "key46": "4FFQ4ybh5XTuiQ8jjxeyVdrpkPLuQ2rUUkRvQDVGcrSQYaLGkbJD7ookaKp4y8xPUoyydfw6LkN8EQki4k7z6uCa",
  "key47": "3q6Z9MYDk6DHuH43NYmycNBWmGbnLFsEzmHNiVVhrtqg18fN1DYfwqxqSLK7s4JHPzWwprrXX4drftzQvzjTBGr4",
  "key48": "2Ty3aZEWjD23PqZW3auwSj6dQUYbkScR9UXBqVqMrPLpyzLtrTrmC6RHzB7wwyz2ByfWdz1aUANRXiN9KJ137rYC"
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
