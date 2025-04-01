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
    "35EjxprXbUYvs9ZJNtfTCJcUajFD9mR5Fcup4GhZ6zwC9mfVGMpWgSBcrbhWQdeBSobcpRawhdV48CdgXLXFBRsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBpcxBiDLL3HoMVJNwYpggRkdhGUGPpr4zNZpDAoxhFFpTMn7ci9fz6jenvUmPKEcQzAXPiacofBohxWmSYRpG8",
  "key1": "5dH8mmJE2D6YmLh2kmfTz76tQqy7uvBCrdsiVea5B3NmbbK8RqvjCzGSB6HCVGXahrNrMLcPUtg1FuWBdPSUax9h",
  "key2": "2fgFfpNVbqSUhpdhENyAbtw9KTeoZKJhnoYSEfkMAzZ8Bkpc9Mje1wvBHwbY2VMNQzCzsQ4bsBmkJMfAyh2VfwKZ",
  "key3": "NLe7h4Vph4c9oG4Huw2GaAaMMyfsrGBCrp1mqEEYZsxyqvTEWNmGJJ3e8iNKJdGy71C2AzC3nbm9m5XQRnLzxWU",
  "key4": "65S4TsTGsUpbqd7rW4FvAgfdnNDQciDcmVCxmrjunMVpfvws2ZpsouaE7HkL6ncaYJ7kYWJ6U4j7GBbbkTJsG2Zm",
  "key5": "nLfGwunksRBXnepNDkPuf2HMdWBg1LujhKrS1AwgsBHn7GbqVfu7R9itu911GfL82eo44rqMnTiNPnURWPe7jbp",
  "key6": "5NZxQ4U9gbidRkcE1bie3dc339j4WCAo7L9Y27qVYjRmWhWaTtprKcfckfRHRmzUPuzhEWKRKFi3T4Thd1wR8nfh",
  "key7": "2U3f5zK5a8eFKbcHkFhULyVUhap1eWczq7UWW557YdBwyPzcUDcTehJKm8rHXqqH1nuh4gw57DN9mbjzqHFy3eoG",
  "key8": "Kk7ubuQcpixn1GdsZhE96vp59Augrt35p1pEArcYgLjxexrPri1Eotzyt2GZ3JEf3aWJ4MBDXw7qFnTAE1RXwXg",
  "key9": "5VavpEKZu63j5sDyhBFZpGYukf3MTbeaikVDfX72fgma347Lr18WAgC4mV2Pxb9Hg64hCyhB9SFZX82bt8yKYi3p",
  "key10": "64MLbYpYw6Vv8cumcwEkzxg5b3aphtaimcijghUtmHZgeZkqirqfCKnv19CFWcpit9doLs42dfY2ArqxdU4f8ydp",
  "key11": "3rPx9cnwVkfyw8sM2MbNW7PK5BHJU4pouwjKGFpb3eaDcM9vJ29NkKEktdv7EYdvQVPDsCM9rGaMgsJSH7uEAZb4",
  "key12": "3NSFx3vi7muyfvEnyLE6coTJpBVnEne79guVpjtfbVyVCSjNkAY5KMsZ3xCcBzqpCFf61aRDWJaCFMxtfQ7dVJFa",
  "key13": "qJBxnQW96mbuorTLXmVAK1YqQuzuyobi1B4VtWRkxtgDb5KTgBPCFfDWMHSDG7whY2jqP32jcTCfTtzm1A9qbJa",
  "key14": "57brWQuNKNYibWgAH8br5kRPtdAdRY9pz47TTq8svhLFvCB2DG4PerNfGKRBuHgCy7J9Jfhy8W9qtfSzXeHLXrfz",
  "key15": "2yc27VLY9ZS8H7DyQwNjdHKQQnENST9nqLHFVf3KZqjp6fJRJZribbmPrvtR3CqEXY5fqk3HSJx4z6q4ec3BaUcH",
  "key16": "3steRsMUBpUfC5NTUzaNiPqC75FpbJMTCZoftULpZ1Z2WNw23xQhsXJwma1cWanEs8s9pHBdyX5CPRtoLA3KjX2Z",
  "key17": "52QfWgEHbNVrkvrcmSwMcDfSPVBcTVSFXY1E2qBrqq3A9BkXq7TmpzYmYgZuSyg5MTLfLrh5x9HuoPFquFs4AyzJ",
  "key18": "57r3dJacXJSYR5ANuuTPVbJvsjoBLfPCj5MEEUkkWarRWTwVx9h2msNdkkZCB2aunzx9KQExXK3cbdCbdQyZrj9",
  "key19": "3ag8kz9NtFbPZBr12eArPpoj9uLZzq1aAriTE7xxp6JysYqqNxsScpZ7pucU9QRxM66WnHyRhoY8WGfW9CEUMxY",
  "key20": "3kWBispQgK8BtMzthMTdJet14u6quDMGqsyFvmWa7RhkJqTTpMnJVsFrgjHjA1NwjeAUg9gVTBP33DU2rrZDJunH",
  "key21": "26Khmes3s7aefiKgSxf83pMaBjyfxj7wuHWaadRxLtRYV7A6AFukefEt9UQHnFCv1CvQhNJvBHHg7RWDHy1i4VvP",
  "key22": "33TjBhCSMDBMZRXsLZo2kzz9EYSmfeYK1K2KVoDZJmeRPg9yRm9w3UGZcRsmYqbbaNCREnmGM49zQGqcwTKXBBqM",
  "key23": "BGsh1Cj7rXDpUANo8AC6YXsqBp5SYMQzyfKZwToUehwxfbWhU72CwqLMWGLX4WA6LDoDNZaQeJS6pwedDJrgK9Z",
  "key24": "2tM2No44ZZa6MLMXQqvVnp5cu7HK8f4FFYvei7tVPzs7uiNzd3RYPV5CW6WcDDbpM2t1dkHLsg2dEhuYRYf3dvtY",
  "key25": "9Cdm7s1WKmFBizh7cLDpcGtS9KyTjaBTKuctzT8u2GZ49TGbETVozzvjjfGDpY9Jf4KiZaPMtku1FnGnm48n9Cy"
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
