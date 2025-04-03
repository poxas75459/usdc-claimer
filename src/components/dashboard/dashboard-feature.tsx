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
    "2hs5hu4oS89WzMT6nGPahDaJf6iXiZTon7HjAZD1wKvSTN3jUFGxu5LneUe9tavyRAsLMppG5UPhnJrfQUoPkFMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMRvHZ1AyMTxX1VHTXmPm8PFMuJ4teJRFYqV6Ty1nwTF4QGoPstr96KRehMa4ragiDdgMMWoHwkbPKeWAZXFisv",
  "key1": "2KhMfSBapSZBLkFkcBt5Qf1oqtjQZc8aqpVZ2R6HUw6qHpo25FxJgn3GHCmuFtSZdmyGRSfR6hLaQq7SHh1vTLB5",
  "key2": "3Gdh8k8XRpZpb5CehP6dUuxWhaFpBgGA3UAQqETnFrqKoYyqf2eRsXoDooz2F3HXPox8a49NVCT3U6aSc3EpxgcY",
  "key3": "bgPaywykto9Gtqr435adsvwNGKXz6p74EPqUNLLpZs33CVhJxnsgQDMRYKwrSxq8uvLTDkTGhHaLkHZ2BcMsegn",
  "key4": "qoWvpPUhkER7VUhc1362bwzQ8CkAdQqSuGw4FUy9c4dtksgncjogCVfNgo4o4sdZyfF5DsLdf3zV7TjbinAU4zh",
  "key5": "3dBQhiKm38NMaafVXZfqGQGoqyaKkgnyMpAE3cgPMDTghDWEA8S7xVWGmjHeU2Dv6dkZvxZMM7VwNbnJjE5vCeq",
  "key6": "4Jt1VCZQCJwA3HeEMnCMbz9yS5fHmhL9k47BEBrAfWTnXEtpjREMjQxVfiC9dAqoEyRLHfe5L5NQBMjTbBdwYDCC",
  "key7": "4W1DFKA9Ht3wJfchT1HKx3YZQUp3EkeFgK3rBkU43o1dCQaMWrf3NocjGSJy7PyspSzFEjhjGC61MnsAAN4avf69",
  "key8": "41DiGUitWKZF7MrD68TYz8MYkpxeEMAUigKcEpuuKpCQAMyCe9SufgxMHRHPbJGsUKgbsQqcVvmRjfhKR4BDoF9A",
  "key9": "r9iP84bbpPG6TncKcW6Uszv2tVNMxtDCTLeXfEbAubAfBXxTuVhZhsNPwfHwr5QEB2aUS1Z1GyCtPP1mf5Va9wy",
  "key10": "5sHcNKCVVB9cL5vFu7PZcA1d8QSWFmDFLYjEuFWX7nEzi26n3HN2r7yw6VPYqaaJbTdrrjgVxd1DFzjZvH487PZ6",
  "key11": "2PSLL2EyswyXMVinDdPXZ3JPNdcFLFZXobhiK73wLS3qwBcpjNeNUNk8EDxLtH4FxQhXewp2C7mgdhqC9R7ThhkF",
  "key12": "5apuu8duygog6MM2B8Lfdo5BGddKMC5w67Zr1oSNGU4ngmETGPijFXBgawerfpfyRffoTRYLsAsaQ65vSYUJuNzn",
  "key13": "5NK3dPxZV6ohF83S6d44SgN23ri5psbtRUaPKCp4upsEE2bg4wJSrbDstDcxXNjBjRtzP2eqFh4b1L8gjVQMgU8Q",
  "key14": "a6oZvMTcz3BxPHASn6bUmAMisRP8V3rP9Ej3Zq8RoaspT3MGyuPKVrLpWeWVPQWjFSP1mG6MUYa1yL2shUnLsFS",
  "key15": "23rj86U8JjyNPJ2n7PPB1d38M6xFYVahQYfh7KkeEkBdKqd5FSLqp7XePJvetKzC24z2PQX9KsCK6cKsoepfiu4j",
  "key16": "67wriiBXW7oLbAqy1XD3h4f1rRAUZqb389SfEWvqw1uvJMN5TJSuWQ33gc772HTrQJEM2xsbmo7QpzExyX5qPB2",
  "key17": "3HunRXtAU5pE474ziajVfLPoSSx15eYuhbP91BaWHL7GBUHhQ5DvSoiui7FL2Y6N6VYgdDuDPHVmC1qvXXNc2E7f",
  "key18": "oiRczVSTtyJcnfLNK1Gp2uHLna3dfpYqCrw8a91MGnK4FP2YtkT1Fis9ZWY31KXQrG24qPkwX4FeXGBoj1NqRFQ",
  "key19": "4exjtSrsHyCy97MhJyTeazvxm5Aq6cbHdfuJMhhdiQqgyJV6ikDjJwozSHeLLxVajtLEHZVvyBi9maPhMQn6qGhN",
  "key20": "5mPzzQ3jYL6kB6AyQd6gQBE15QU27SMELupcB6JCTL8KRRpxsVvbGu9AcTGmREdaqfQCsMBbcsUzmT44o7Q2W2fu",
  "key21": "4BQLAJQfyC7DBNfFFjGnPe56VCengjL7BfwRzv3ogHBq7QmEd3YJRs6us69aacZ6dfBB4KD87qRb4ymLDQ8DQVhF",
  "key22": "XrC3eCFpS1AqupKBhHQFXwzZKSctmfxex5Tjiu95KHVjWFi5dPiEKZKpceW7Qp4oS1egecqycrJNRdQBRSujDeZ",
  "key23": "2LscWDsivHTv8YxxU3SYRmudo551Qud8nd4HftgJGFUnafVRbTiCiQ4PHgKzWUD661bywps33onaXC7avjCVutwP",
  "key24": "5gYbQsJxwyqw8Hhjung5e6osoQSubFUdPtZZeF4E6Qgm7AaXCpcbjAXRHwbwvL3mB4y1tPLrx1sPYG5MXnGkCdvY",
  "key25": "4KUF5qY8PACrGZJcT9T8nzvZRd7qjfxesgxodSYEyoj3SoE9ymAaRkEaBxmohVqTpXJiSRKqdaMB5LZ1r95vmWqw",
  "key26": "4dUFsVuMhyY6VvytWX4RGKCGxPBavwbS7fRNsEcvXsfZCi3pqTK6bq1hvetYXcWh3tv4LEpcWC3vR7ZR56wLt3Kn",
  "key27": "5EVuKMRsk5s9xWRj7zMqiokQftgW26ARWfRYxru2kQnAYCuSufhtNpktTzgVCdqHFJWcFnxKYvf5tQsxzPwohhb4",
  "key28": "3YDs6xWsPFYavR4UU3Y6MfSSzNJ61E5mGMLfdUXTAgHewJBS4vQPAfV77rr9Wp1rd2gJUuraSfV4CqkRRLsnMonL",
  "key29": "51bR79ikeLaKXM7LrqjiL1ECoSAJZyEs5xjFktmgeezrBRTusrLDkBKL9S4QAV43DJezznCVnSYR4BY9PkRLmBb7",
  "key30": "3FDKkYYi27dY5J5cwQtHyVYaD8x8YhQvZ8eDWbTR4CLmUQtCEYDfuVWjRpA7anwniBs2JNK8MNTmEgDyv8Yyyd6t",
  "key31": "3pDeq585epTeXJm3UW8SmCAwrwM5eR7N8iKjZFErxyA8jruXCH1iGdY8sNxqu9ohJWUvrW5dQMJZwSjdoR2fuiYd",
  "key32": "5iwL8BG7bYi62yhVgt6THcVnhsM1EDAZb6WzHtzSEbzKzPBnnE8JrecGAracCnptFiwintkH4pBFvQi4WmdS73Pb",
  "key33": "3UQDHL4F1RiW51LSHYNcdJvzjvcXZJ9CRnFHawhJyg1ov5u4Ch1QkLSfFVkkJjNhPrUohM8mLfFi6by7KnEUSrDp",
  "key34": "4x3CZhoRfviHLSsAnGm1JGujZZNq5Qe69nfknE8UN8fLaGGwoU22YFFZsma5RJTaonY6cKtYhKoPk267mW7BdxPe"
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
