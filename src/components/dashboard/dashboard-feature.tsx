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
    "2DLXpL8cLdT7pPsmQbQ5w2aBfPUtzuJiwfnGL8zSDqihbyXgdukeq2Y5HU5Y3uUbCr633J2639CZ92iegJbQSVrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rS4Koof86oymMzCL3SaY5ckN45aCYSZm26pZexHqJsLXPhZG2cgKZMK2TsAZa4G2YtDBdVu11XKAo9YrUqTxMRD",
  "key1": "FUWHG7q7LQTH1nnQNgdK25HBdvo29PLwnrYkJUXHkEza9TVqfs36uucSRyGHRfdno7Myh3yaZSrQqBrHXKYrnDd",
  "key2": "4PRfzGRcB1UnnckNHs18gMMR8uifm8KAFVe5Xp9AgQH5yaXnt98Rck6eLxrgk8isoBUgEfsdcLCPNfifDL21Kf6",
  "key3": "o9xH6A4Lhi75FofFUKF4JUN5TCBjVxMUmnYHHbYNixd7CtZ7YK7zjNM5LvbXCt5KgdGf1LHjVUamcoKw9MvuJdk",
  "key4": "2jRmmUe3n6xKinbPyZvbJCGZRFfnHJpMbRNtcRd4tB8LUTLtQE1f52a91moeTs7b5ToSA4hnpwdQ1UGy4dg6qHVF",
  "key5": "2N5ENDh2zmbvmqJyr7ULTJfe1RfS4r81nXCdCQ9GxJzoCsiz3xN8wq1nQci5YFFZpznjmgsLuBeirZQMa3AerKJG",
  "key6": "52XswnkBmFDp1GBACQKrH3vaZhiNjKg8dKVD6aGZVnjobEnHajJfG1C5ETnudVSKYpb65HWkK8WHfddi56N5ugUP",
  "key7": "3dK3uPLmK8EcnwgZKpLReXa1cURE1CA5gQHFKkgUZ3fzfnrTu9Mx5wwUYyhRbE5G86Dov8QkoMveATLzRS3Kc3KK",
  "key8": "23aGGCdAmwsWct71P4b69eHKfvZjjEwLJpUqui8dt3kAJ6ptgCHBkuuGry5RuiPKdRP5Y2oxHXUfiXHshwtEBtYi",
  "key9": "3BbYfXX4imtuo6xnbugtbjKL2XCvocfZxXLdfSSk4RJSpG81ymzGxq8Zt81FEA6wnsxrLFhaHmhceWSg2ukqjELR",
  "key10": "AXBGxU62r9Xwr9wiRu8h4GovCFUFErGTnkYF4EjyXE6PCwt9fYJyipb5wcCw3C8XdavTBEiX9ma5xx5GUXgHzQV",
  "key11": "3wRwq5yx6pXozCVGtUkF8pmJLQoSKm8nexJoSuTRnoBgJRpy2Xhxa5Xon4JeRjyn5tEtoU2jfgBynUzbC3MJhwvN",
  "key12": "3aSUmAamm2j9oLPDoVaeVd241WSKeeqeDrXdgEV1rR43DdvbHjChVrfeSYXzgjdwR6nfqWUxRAKqibDnL3pnZvrx",
  "key13": "4XRcLswnSsmXUHjq7cDsjq2f1rbv6qUrWCZfeihH5naXEn1ukPKa2PxfxKwLz72mS6YiFrhKFibMCdLh5Vtg5DTj",
  "key14": "5TzfGJju81wRbVbX4PZARKd42RwPaQFFkRG17rwMfXoCNTtubMzU4eRg9r9HnsHLQMxrBNW4WSmoCj4ZBosQoG6g",
  "key15": "66rN61WqdiCz8PQUvhzPx8zB8EMYocUCEBXcXNaq7iB9FXADjNjqmxXzKWVPXSnGAzkYTua6ah9x5GgGVt4RodJg",
  "key16": "4UwPriL8VELLwvDo4N7LwZLCXqjremCdBvpkvf6NGynt2ChF9hCEZcUxsgrY8EN1Rs7FYFAH6t8D52B73RNUkCEz",
  "key17": "5zZdU2WEJ6MR48tcrwn91yHeoKAQMGGRNmbvNpLgr9VfnPmMKu8EhiDoDBpK2VXbJ7SRdhEHkqfV4LQs2ULc2Fj8",
  "key18": "5cxLeu97tAswbY5ZWLyAFBEmCy6abaftZARMYbnDNRjDGrMFgSU5BT8UJDX7dPYkssGaeiWRdgBkC1BSuZUprTxh",
  "key19": "DApL15cRKCopgzKwP6GJQWHR5k6i9aJWbAKeXwebjdUk44AYf8W4buKcRidaptsP2LVKgPhKqHVGkatrm8BU2dy",
  "key20": "2e6dkjaU3uechwjXokbRFBA8GyBR1RfVqUFVCwE4EQEDipP5LspVL36sKHbR3rgjsVY87EsjUv9q8onmLEUJYMkV",
  "key21": "4ok6vU4FunWKw4Cq1YaHdSdo4TNhpzHvKK9xTAVkgDhKG9EoRcW1tQX2n9breS9hqLoUGqNzaCnpXn2zz9wbq4rN",
  "key22": "38a3K5u4kzWD5Gc8dFEjdEdassTTSesrMsqx2dt1zS7VyNZ1NAd12NZeQRc2pW9rTtAi5LPpjSrgW8aDBpPZPi2x",
  "key23": "5h992u2Lmut6fdZgXEsbToLDgDRQSA9aD81yG798i6L68sahDrVwG7DBGVzNwy9MrqHYgDdgnm9Qj6Yor7CwdK21",
  "key24": "1vf7q12LymH3Pf8g8nUyc1eRu5mwJikx1wfsxW35cUhqnmhtTy8XfptUhRnbVZEZTMWS2sGJjZekAGzCohgdKxT",
  "key25": "3pjAfoJ4TLe7DQSr1nJonSWcLAKf7etPtmEegGkgR7ip591d8o6T6hoow1YvPBXB8sUPGZd8wDoKQwqbZ637sFkR",
  "key26": "2oPCkWuVBRaFfbGiLZjRyD24Efz8swm7cR2XZAiv4dJNn4J14At9pX5Jzx98wJKR5B7kwBhxABqRDw3K6PjGvLFr",
  "key27": "2gYxf6eLQXBVEarWQ5Q1R5kLmND1R9U3veuQAsKDQX8jXzwkEtbK8WS3wL7DrF981iq65MZoH2dwNqZRodgf6MQB",
  "key28": "2PQD4DPtdypav4oZ6oMFkqNY5fHKhwNR3tg4oZZZ7pa4aYRN66LixeACyjinZu4bhZomkwTK21dEMhZN1waTTXse",
  "key29": "yQMfUqgoNBoivxfLeFjcXoxsongDMxaxVs1aKtxkwp8SMsaFj23ZyEMbQqyYaQzA3i5JpgKTW1gDYJcYPDqPXL1",
  "key30": "46VHApAPvWiK7aARiKr5Lt4266ikCyfWPFjUq87NdRt6HZTrWzVWK2P9BAPXgCjSJEeYrqNwJivSt5tYA1AodMqQ",
  "key31": "23ZENhxWr1N1JRUh4oCMduPZfdHbSSUnZvWDZZd3x4YQFHbkNmwtFf9m3Jj6q58ibkQMrKydQ1riDwMrkumJrTLE",
  "key32": "3WWinsZHcNFjSVTc9P57hRtQ8wUAZ1ZDV1r6aTAweRDuRV34m1ekN9KeQm61ZdpqMAfEyF7kWTbJpSRAYiH8Xcbn",
  "key33": "3UQp621YgwbbK1pWQ7QqKRPhSqPAfo19Z6jKKUocAvNGpeYwyq8ZCx5huhzWZaZcZtrGt74dqhZtKbxDv1b62KgE",
  "key34": "oed8oojw831wvZ9QhmAR6CCkkHqCxVjfEB4wHgC1jY8BTHjvFh8K7vPa8zuHCSUdZMyEMmtkH1W2JTRgNrhMPRT",
  "key35": "58h5oFRVixJiBDynptUU3jPCQV1yDFwvPZqeFEL3HbtDHcRQkDojNPhPg52fZ1TmaNkX6EHSingQ6o4ju4Psip7N",
  "key36": "4NzDc6XQFRAv1rZ3XiTisN44NAKiWNdqYJPimVfnH96vJMyz5MejHSnzjoXSkHb2MVYFvfnPyAmpXZoZDnBBbt26",
  "key37": "4WtGjUeeDDLUFuVngsPbRXR71zHQK3aFydpovjWBzcXTyLytPrtZ76WU1Bz7QNcdobichQmMmtFCeUbuYYmTDVFu",
  "key38": "pVJ4DHhcxwAXkMVwPdc16Ew4UWWKQ9juJaokfyTSeFoHtRuCiq8RrLv9YqvNhXa2tghuaEDMqCYKd25duxtwbNL",
  "key39": "2MhrLiBH6UQyGWXs1hztkhpv9iLSeFuZmCnFMdCJ2gxEYmzZatUiTe5q9ZboCiAifJvrqSwWjAsPikxaYDmfpSLY",
  "key40": "573wt2UneoGeEWfEdggsJ59vgKR7FSQXQyUkzMpD7o8o5nGpYdZ4Li5F6PLUD1EV5xYSSsVnd3nWJUWDyh9ivGwg",
  "key41": "5BsPQQS33UxeiDKzEm71m1djDEVvtee4ty5gap3CxEiCbZghyUK7rdLVizGqNFhjrR9NuHVhF9XEtQatwZsFbRJT",
  "key42": "5WWCwQksnHE9jRiLqY39GSL1PBpaSzjtAhdKJ79SMx4YaXApJ93PmC5bU8FqrXpHExE5sR13zQAM1MgUMgc2qba7",
  "key43": "5g4cDBKYTAYVpKAZqvK9VdJEwzgoSgKucQnYjumhDuxsxP4T2usPZjDHs1176KdbSPDnYf6SCQoz3stHk5yTE2mg",
  "key44": "3UnDbkhZ4U1HE89EoMkokry3H6z2Pz2zy7qGymWMgEL9eaheQ6mhazL7fYiRkLt2xaatgTxezY5mjKCGYhbnqeZh",
  "key45": "4skGjhqa4B84VAQkPitigXvpmCQL85CRr83vWw8ZvDdHKMZeTxux9j6qT31SKWhRDh9dT4xoZXuDYusX5o7icRMv",
  "key46": "3MdmW5huK4M36MDJmzGbz8FfCeZNMavnCXVXzhdEm7Wc8dfaqz8UhBwxnvmKU97v5wL9MbtiPtAVyUAxibNxGozY",
  "key47": "y3TW1iT14UVNHWQnbAq2WGD3EXjUzztczPCCaFq5r7kEASGynNGvsSSGCqBCDGmWD7WKdCbtLictYeYumnJeWwS",
  "key48": "4knzZW3ZPj2iQtwxi44NFMS9aUovuZMGNkEsKcM1DBidoi5VGHSCwrSnQ5tc89BNN6M6gDD2rkWZDERRddjmDk3e"
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
