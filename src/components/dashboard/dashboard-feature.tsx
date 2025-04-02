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
    "2fgwRC2AMUvihQhEjeMhHQqEdzywqte1wAboriit5nAkyeRaEeqgFr4MiSGLKpdp84giyWXngaWDNjf4qCfDABAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6bHUnNELPTXpDvGo3yJcDkPDLgcXoowpF72HMd4te6diH3CAZNqfFHwFUqRZkKtnuAU9zkm5fXXCCtEisPAzBg",
  "key1": "4Cn8pp4UjP15dVcZbadhBcLhtQ43CRDZrbd8w8yU2UW71pxRH6hhoS6Pko3rhA8wEeYETKzEt2gCGFgyCzVeCxUb",
  "key2": "3SVBKxjTsPBvgQX8SQK7Gb1cNTsWks8G3Z25TAhfdHFjdTo8AUnbjiSaPk2pZjJvscbP5sFNDUs173ZYSuCx4g3F",
  "key3": "5uMvDJKSCEQZUH1vPYZfjKQRK2jGFjCQj6nHSmjHMqSFbYdZ8TvpEmhnagsZGwxnvpS8qXkDEZLrpGkmDoCLV6j5",
  "key4": "2yptd8rkAQ8VSynxaBCmi47N7NiPdbd6W4eoYgWCRK7vpRh9F5e1mPS5yHDNR8YrsMzAPRZXxruCHztcXtcDETtH",
  "key5": "2dPHHuBCmqXxjHvXRQpD5i7WyMKoucusjStkL3BpCfcUxsVBPpkQZB8XVDMQuNEcdPS1TAZdoJ3iBibE3hpcRDir",
  "key6": "4tcLj6oTamPhYqhBxkhm7KKx1KtwR4WXqGr39MKVvJyXXJ8koefgifiu2BdwWQRXQLByYhVTmNrHLewD62F5wjwT",
  "key7": "3afTu1WAuiCBGvj1Fd8amVp4eWZrTzNHYJbgbkLghnvJCP3MhibUh2xJ5ZyJAGCvQ7BuNFy155sPw8wKgmTGvtmw",
  "key8": "3iFbAGkDxgxZyTR4XXNJkgYoM3nWhV8r65msUoULq6adPk8gwniLnVniJ2mCfZVHDL4dSr7sREr8m2QWfxnNK5SX",
  "key9": "4HCYy9k4Cim6zyGr4nDdPEyeR38vBFW1dkjjtcWGKKeEbVkNmRUjdMaJfBbf5Q72zDn6BV5ZZYaaQ2VPs3gXFRUc",
  "key10": "31iiTrr4xnmhk1VS6c8GDDS8jn2ThLn1gZ1SiwLFueSqbBkVAUJ2Qsx4u3dZf9N3JUnAPDX7Pzg3e6LC1t9ALNjJ",
  "key11": "57M5ZwATqodEJVVv9auuh8njH6sfmsrJcC9QnwhxGKAJnXZigCFvuKjAr4Gvz1hZkNiMj6w1d6DBU3hESMrgT1oP",
  "key12": "3kasH7z8og1n84USKoDdFjJhGRWbCj1twzvVK69inQtdgw9g3jLx5BADDCt8eDMnYo3qs6FELsdWjwwrkYnp7uFV",
  "key13": "3hAQMjT8eMzBZFJ7Kji47VbG6AojtEyhGDJGMQQSV8e8ySov44kdUC8ukBNYB1GvamK26Se5qQSRYN7P5coChTKk",
  "key14": "4FiVXqccJKK5txHfQapaMjvigQbUpz4F6RzZdYKMBxayJif12ba3d1yTZLLH7q9oSPsqy6Z5SoP8kqP3r7r3aAKH",
  "key15": "2w5qVqbvintCqS6aABUvV4hxNrxu46221VZUYXMbhHnNE4nPRE2GgNz6D2KyUV6XMJBCuXP9rcaxPdrxyRmbmbx4",
  "key16": "4Xdpd8QVQE4nTL8duQv18tMhGUHsyPyhcL5boxmXcmnuhuLKVniSmvAHB429qdiaE8MdmcQBf1LaE7MLs5ZsMkhu",
  "key17": "4Wacf2biTauBzHrkQHRT4gVa6aPFEsWXE9RDsJE3rhu1FEDYL9Rk3PhhwbwEhrPGD4awmnUVAENA29MeWCdh6qFE",
  "key18": "wNrhLBqsCPpLLs1X6KUArS7bcMV8KJH918wQYWXGDafUF5dAUXRUtZETuPmUwe3CtCumjNVp4UbGgPpEZ8gB58F",
  "key19": "5Ejqpq5CR7yFrp7jRxfSGdD6via67gcnwjmhQGvgUZqDcG6jDUBmMT5TLkcn9fuZBwt8UGu9EVidKLcb2SrMyaVu",
  "key20": "48E3gCUiMFuwUPFqJW17r4rgDQYv5CQCNmv6SkJ7H28sYAK7W7Uxzr3HtaafvLqDsfk7Ldns5XmyCXqygGVLMorE",
  "key21": "4A3CWiNDY7CSoSXAJYLRyNEM3oSUqCsbchx2jegUa2xQJftiPkiThpRmvHkJeDt48vv6qJj7LB6ePY77uMqLVGV4",
  "key22": "4gqt3axRWVN8k3mmSFx1Y2Ue3efNY9bP7HzZwXRapkHFVnvvoSBsqPkEhtUxN2swMKP7jzYcuXCuqhZutkBAdnXY",
  "key23": "3qiWYoBGzbaEisz2ESp9Sp4deCFncK6WAiWw182CLAV6T9wnCtZwrvvjcBpRtyKqhYrkHMv5pSUEnhukbRSx3ceM",
  "key24": "2jtwC9o9sBinHLMfhD8xhPQ9CDA2dWzKqqRtuUgKPQnq5YGC6Gd5sKHpA76Xht9F4w5XypNyBK2y12LMxVZ1JyAV",
  "key25": "4CbsyDjYXRkRV3hWWhM7e9FKZ2oSqWUtdiL32vo9iFucK6CPu1eYm5i4fWHBzQapeTgE41wr6mZSTzwEwJh7BwC4",
  "key26": "5M1Mn7zEPqgwWxb47ymPRCgmmjm5FJE1XgwKwoK129bV5JLK3hAeNRGt25NeWCktusNqfBBZnntJ5U7DSuFNSHyo",
  "key27": "4PWsP5Sym9qvum6Gn38Hcm1Mr6dpzpkdbgQQDPYqEoY68Sqgxqc1nSyP2diRtEvV7ojL4RW5Pup4m3QrL7z3qDan",
  "key28": "4ebXmuYRcKRPJEqBorLfLosa8WAMjLJLegrPj5MfyU7ojdYXMtMfnjVnHkEcqpJLsFWZW4iduEtqnvvFGmSPopv9",
  "key29": "4mBZpnPijng6PeN9q6KqW1iy8Vto7P9q2HoyHVH4ThLmEtYTr7HLJ59XB8MhSiJrHnGWEHLw7uXPZbNPxF6AL4WF",
  "key30": "5GtyimtSrD9vY5DEvYibHUs6xbUgdd1ArXKKjshVoihatVUoJgmVUnytNobbxLAV99kYxM5mFkEbUeE97Zc8ibRd"
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
