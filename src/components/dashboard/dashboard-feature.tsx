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
    "2nPD86d9wxr4GiRqwAXoxZJwYYYC2wGpJzKjETnnqRAuwaKGEqc2hs9Tizv4LQ6N3yhi4Ts2bRk39FWpsV9A7aBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hvos2Qh3KoKCQy2zt7WygcKXSGxXrQm2RMeGhNyNUXRf7BpJrUVu7riw8761PKnqYtvUWYMr28e8of5x75inBcs",
  "key1": "upjCNzDtSDQ4ox2WjAejrG5QUEWzya8ASNJFz8jtmU1LaYmoy499BVSxwgFqGrDcVnpruAD8fdGoTtVXHkPXyrK",
  "key2": "4E5VDimUZogJyYtg7AgzvegtguV5HUJPHWMiSKJBzWwNr9jF64JsTUqPLxi837SErzXUuXE1Niu9zHksCrJGVThZ",
  "key3": "3MsagrcUPJsjCi29a23bAvJkPHuP6w2ZqQcPkVZ1M2tubv2gJfrgjjGY13zhPDY8nyxUBVvHwBW6DrcXwvGz5HvF",
  "key4": "485WNFgNWz6cYW57vqZzSHGRZJsGaNBk8moEyct2U5ooMBsg1VienmMUZoHxKPxDNHxeT7hGqovAKo5zXqEspbNZ",
  "key5": "4SF2PDKMHyDjjNFnVJmoj6oj3g8e5r9Vdhr4UttpyBn5Meei9LxufwAhGZTPuSbBhefNShyY7medrK67upRGjpcQ",
  "key6": "3rgQYoWtgLHYsoXhprXQHU1rs9wjPV2i1cKg6ZiziBjhAkEr8MKEbtJhGXvxaQJykAxznKCMaXngSb7cXmLpZfWY",
  "key7": "63a1vPaVyBdgs8K1R1e158MG4HGrhZdY1DxBGiWbEq6uk9nfhXS5HPq2eXRormeSv8N2kyUEKCrhKjQoAQgFE4tH",
  "key8": "3UuDTj88TNdNEt9hNjxAEP1tPYRS6fZRg2cj3kHs6HzQJ44T4AfdfiC3bHG9U9gB69cmeJ1S9AdctnZ3s4htWfYB",
  "key9": "2Y9wSQboKQ36jnqDv8tymvz376zEFYgDNoLtDTkJo9gquAxZjyyu9tZ8NikBBGT1gjv2sWhbAqXVsykmo7J8dj7B",
  "key10": "3SqqhVnQCNaLrtmjXm1Q3dq7HHFQ1nJ5EdzC4Uq5uuoLL6uoQcQQhiKKzoqRy693nnz5WGs2sjkMs3SELhNm69zR",
  "key11": "4ZG2QZxZwCWWGDQzLPyGvokYBqNPnXWdns6Xk96QbmU1u2QXDdqjDXqVzhQ3mwq6jtSxT4DhXrtfDQFqaxRQzpkF",
  "key12": "EoEd7FWYHBchmzL97DZm7sp4Ymw72359KtTSmUZWRD9VPBJoCytnmwinzqoJ5joDDnQQKDtyivUJad3WVDkTUo4",
  "key13": "51ZsefJU9bFhfitGFpQq9VcpZC9PVDfm32XW97qko5twZANYFJL7nSvPETA2zvGx8R6Rme3hbxPcKsKMjs9rUxoT",
  "key14": "477FFNrzWCn3QWfiuQty7YkHcv8Bpdf5NuDux1yNzsuToo2pgDQTdznSXtQHzPF3basHK2Lme4wZgWW2SRMdWy8x",
  "key15": "3VGPv4csmCUPiPN6ehx3gQVPSUceKLLkaxmCKfqCUAftRVy1FdcK8ZuHfFsKX8bv96y9PuGPnhnHFMqLFeByZ8Hb",
  "key16": "5ZWTBKcGoqqtQXG4GRQvtxX5ysjuQyXGbawkYs9wU3VXRXRpbfPpzvfbp2oEUUU8tkrr7AgTjkTWokqpa87FtCTn",
  "key17": "2oBRKRQs7iURFC1tDiH8Z1qrTzpgd7XybaocJFqMGGyJAhcb15eBR1KbstELJ5QDbJRX4zmtXUc68gGvQBaREQid",
  "key18": "2TCNW5nHmKXoT7otwUTTQWW7ZrAkzA1miyrrvmDi3KAdvyPaiXaBxeP2hTr97bbd1YtDRyYquhHB8Y3QkZ8VGiQy",
  "key19": "1qJytUNy8RP2xhqsHn5HJpyBU3JTXvSYVQxvF5b35B8wvnmuWdoozTARYE3KodusZBVqndhXWkpxC337W4bUvRw",
  "key20": "2W5xYKo63bDQuuBCJhiDnvZ97KbrvTczu8D37hjYWXJm7CKpLpX8W5QaBNpQKg5fmnDho1BbR3hYfRKd4sqFc8a4",
  "key21": "2S7UQgLtUWhCUVo2zdGQA77K8Je9x6EVwYnaE6UFP8ZE9oTQbcaU7rg3NS5CpkAP6txLqcSh2LJY4hwfsnthq5zN",
  "key22": "Mfhdseb2pqL2UTvcWnW1qtBjBqJBxc2rEhaSGvhdaSXYDX1WZVYEX8gT5SLnmkpS5B6aHFVAPMNTNHpe5NL2hYn",
  "key23": "5yMTh2HBmxfdFoawAVDKojsv8gmSdobcc7iy77tZ4gPmBfVoyc8zw6Cxsd9sfLMeNmCQwNN1uoNF2TseRNR7YJPS",
  "key24": "5Hdx6JpjzMFXn5JsmCvaqoBHSRA1TxcceYvPQr3Y3o7xZYwGzJcKEjPuwXhqeKjFnBuvDvgJnxiy4zeNkAXa1zmc",
  "key25": "5RN9z9es7bWad4CW7rEQagPpoQ7XeeWf9TYuu8vUSPPfzJe15FkqB5iVSqpCrNfimqAFHEx3cQdGRC11WiSKnSzk",
  "key26": "5u4KCTYmShooodtLvHqhwRpUNiQi9RMeZBbT3ZdQPxeAifBB1tWk581bdWMBw1vvMKCiRRWLwJxzMjf77KUsJYaw",
  "key27": "2x9uX2TDHmfJ6L27Zn84uZdQr9DKdCwzVgJmYkPQmBks4XM6meUG8zm1gCotQwrGjj9qqVzctYSxzUjLnNFuxUkJ",
  "key28": "5rprpmJEiiJnuog1ezPbvgupvCeCCZ46jVbt8fx9qtWLHKfeDUdUA9vicPAdgZ2KJ6HnC5cRSmZUmbJwhTDqk7L6",
  "key29": "5cGEhqtpwE7uvgt5BwJvBiy7fRqXVW3KQPMkohvKHAPaSs13C4NfymwXdUyYEZGGDEdsYsPoTmDHpCUTegNSVNo1",
  "key30": "3UrtWNrGX2Veez4i6sPkajEeaszLVhZbVBspy3E94QHE4s3uYfSNHzwaQhUB9ttdAhPLGZ9hnemT9UL1tULLXfGp",
  "key31": "5ZDqBytWTmnQ2EbeN1b7KMueGoXYSqhSLHC2UjZg4t97HWy6XXtr7NTd2pGUgrGhQjsQTFcAJg68uWwzHXK5caWu",
  "key32": "5HiKY9EZe1sktsiztqwEfsaGvWYNfHNmLSrhE7Es6EdVH2ML3Qfcz9bJ8sVzpJC2XCEeh3QyVeuSxfZ47dyrcTai",
  "key33": "ELL68nUpYa8LzGnPyzwUYbZn6jaefjTb3nkDp9JnoUF9Lh228bd2rRpPHvMrYr5e8LvEqGF8QmbCvpfgytF4dDW",
  "key34": "2gebbKu1Dyxw4e9DizpAx5gPdUMmr2GwVVa5DP2q6RKQCQfeej28wqzDtXqzN8R5pJTb8TKjLUeKrfVZ8RaKH6DC",
  "key35": "5QJgQMiywrUQnnkM7xJQw55HebsqnZbTqQAWXnLkRmMq6XjbmwX2Fjk3m5wJCNatPUdTupHKifeNYp4YmmgyJH5y",
  "key36": "5PG4zwCPzEEsbmCUkwTJXVnRETR4eeNUrzLrrgjFr7TRZ8nnESXN2kc1s5q1JGmbQtAXnGU5g2nLmDBonVeqmge9",
  "key37": "LttR23wfysodCHMjqaxeWSUg2HptjUvwwtRXA9nLY8AiwWCDpLWtLmnugdd8XtqpFoqF5x7uwjWEdEqBreEqUa6",
  "key38": "3Dwsv7KUeSDUMEVJQV29p38SDn1RwS2uidaL4P5nrtRA1LQKX7zANaho4oiGq7q7GfHLyyF38Rh9SJHJTnoAw1NC",
  "key39": "2KotHDigZi92wMZohfhyXEczHQrfqrqcUjC9fyEaP6peBuCEFTS6zFyx8CvRdFa9thPobuu196nwkCRs3iAjsFFL",
  "key40": "mMojdPf8VZWv2p2x961vNEEoL8QNZNwsKuukzgwLAhzLHhFDH8aXUnzrmEgmw1BDF2aTZgYwLw5LpkXT8Sszgd6",
  "key41": "2s2ko85GHt22quhWmusWi9N3XLSP7pAbjMfNRaH5xTG5Usg49MX9teTCAa3Pv3knTUzF4eVAQc8cK3BtUE9yNLbE",
  "key42": "KYKEaKaC7Xb5PwDN8eKSgrfv7gy6t1fvAfJFP9Hxpf51qzjzA8bsannqDPpRoyFLE76ATLPB3xFQcnzLot21BAm",
  "key43": "4kiL6jpruKbBeY1SehFjBTAn7UxhSfzvEzsKAsrRY8qExzRr7Ci6AfmKcV58Lp4iR8SZH1vj6pxACtacs3ac3van",
  "key44": "GMzutzruY6U5NHXre5m8Ep3i8wvv4owHoPWiZSaN2oYh5nwMWuo1UvjEymwcokCY1smX7QG6oNSXDFWsPw3wyS4",
  "key45": "2ANZSEa88PbSG13fnuoL2aFhZuhqWj5CNmyK5wHvSaUubxRePMDjNjVEKWooiVmT23otxM1GT2GmFPMNTd65PCcN",
  "key46": "4zC5KALe4fwfP3EUqXtuvgk4YPQDAeV11MiUW1hZRQR3AsnB5weadfx44d4ncoETWDpzq8aVfd6hJiTTqVYsHYXj",
  "key47": "32hEBxiBACC8z6zeqokridrLxiXoMJNuJaSNXBnvtHFDUCUKR2TWAuD7gTpfNmfhgdf6b5aePq7fBAmpRprMyFbY",
  "key48": "7fN39mPjCeJfCj37rKfHC2hg75dY4dQtPtDcrWtqgC9YBq1vXFo5Pc4MGfcQTDPzWeUpyqc9yF2A3yhcr8HUqCt",
  "key49": "2gpwh5Fr87rVyW17HqvYD2imZPtp8FfeMSVzcn7a3Wr56TaKnsa1NMSqm54zGpD3m47RaTZGuPQndeBbk3NHw4hp"
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
