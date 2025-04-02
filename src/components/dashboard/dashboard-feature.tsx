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
    "4k8Kb6xeunhZCeszpuQK5tVE7Err1g4bBrbNQWTmAXdgfidE2idU2xCVWUMPMVom8RxfJizQxSgqHRLrbQqodtXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVG7yAwihYDt1VSd4tgzXarGxsuK6ydSauHedXocNR8q6fP2sxqkCMgQTsPC3XvbVf5JBqkLGTKsxCHBi53t5Jt",
  "key1": "4XsjzdrA3oSCzebQjNcZfV9tjhFuCb3Wcq19CRY3815V9hpSBNLnoKa1K7L93DgGv5TuETTG4hDrwNyDypATYvbN",
  "key2": "3gdqErx7HLrohAzhwNhZESuQaPzTuXNvx8GtK6cUzgHfWhPcH4enUAg45zoBnfHFKJmj4ki2y8fyUNg6pbvxk1Ta",
  "key3": "3yK3g6KP72g1pdhZ2bSYR5bG7R5qi5wAE6PFVj8X5UmaKTXwfNyG635LwyqyvXguP5DwMZpNkaA5uTcQJjiYF22H",
  "key4": "2dzwuBos9mHiNGye62M26iLEqqYWSLY31nw34TXnjLdFwDnuoMx2kcVFeBq8MZg1vwhG6pgNNDx4T1BTiGdGvc6b",
  "key5": "iEF4SZj272NNJZ2Pq6uMepjkk8t27ziYKwZdmYQXni3kvAwgUNQyVzLCdPv2V8nFBQMCrcDuMcnNt2Nf2dyLBCU",
  "key6": "cyWpbp8hwGDqxWaajaE9t3pqq4ySms5BrvkbnFbRLXdEFNYcSYLT2d5c8GQ2FUTJ4yQk5TrraBSvcJBsxqLGh31",
  "key7": "2DbVVNa8bTNHq4im8fewzomDpRrYXeQBQCS91B42uRJKt6R5YxMzD6G3TT9vBYAJ17AQbYZLVu4r9AhWgAmTV6mp",
  "key8": "4zoSQULSUefkKCGeami24Yqjv26yejJdo7XoPG2iQwJbKyswB5Us6tAuE21v1g2UKxByYZgjkxqKgpRYeAtcUFqB",
  "key9": "2p3pMFMSB1wSAPREV8YZmhRATW3E2PyskeY8i3itwzBfHmYEQqoLu4sXEo9AfMPtL5Av6BYTw6GkY9Apawjq1j52",
  "key10": "4LzE8Z5U1MGwexSfziL4SNJvZJvUnZ6PxQSveZGUQzRc91htPN94DpuAZBxxteMBSpcKbcuTihiDTkcJfUYYyCYp",
  "key11": "riAyBLZwkDJUyfdmMbnuPQnLscLsQVsBR68LGLJVcgPmsp1TNLHLsXTjkT46WoRSE7t8tzKue2xbsTy5nwB9TEz",
  "key12": "2HDjj66BZcjw7T5rhBLAsJ1kgym7Zbq5JvHvYwaU1kWBmgKaGerGx8esbJTkppaVkgxXJuv4UNRnTsjPMG2rNQTt",
  "key13": "4f1R86WRqhAejHKksDfNshbAL9yLwDjE6SZv4yZEZ34Ec9o2A3cp2gvRanvXpKmDDJ6cfEKw65k8w86w5dkU1wpu",
  "key14": "3Nh3ahRcrbhUnzSaDG4Po1JyGTNvK894bHiTmNiDwyM3GXRF1knyVh5xEt9SK5sLX5iQRaDTj1eH7inSLN3RCEPa",
  "key15": "5f3ksZswkKynuKmFHG1pTcg9sA1hqXF45AAZ42yZtP3a4Nd6G8vb9vhWnrbpVGHGdNR2cwPWT4fGKZSmHRPwc94Y",
  "key16": "3VHPfB8q7XLvuoZ6HjFxFQhkehUd2x6rfi2Hs7vh3zuhYW5jg1kQYEqyuKP5qC68MW63bbqAMvpcSdzcMrYjZBtk",
  "key17": "257Pr3rhU6Ae97d6SVxM49MykpYkeQ22QTKFtyobQ3R1JVzCCCebVqfiihMqTPS11hvPjimDqEjdebdhocWtvdJC",
  "key18": "3WbNV85VaTjte8xPPiL49JkUxFPH5sufUyucGP3nvNi8U9tTwm16arrShQ1CgDURrAoRu83FrEiVpbgby9VxhXVW",
  "key19": "41qZgMi58CDYMiCkCnLcJAv9nnEqFUYZRdJPggcvrJqBQedHHJdv5xSvhspBdtmqv9q6YrohMqGG3ZkVuxQJSqby",
  "key20": "2rpVCZAYwf3vMVEXsvL5UMxJpdHHvXMYjwjXg58MbyhEkXarmU2q4wjF4b2ez8zjpxhiZJztUrddPdDHx8LqsKa3",
  "key21": "5rzr3LW3adrWaCjyuhHk2LWzfkgNNcuAzQJK7g2kssPwmzZs69zz86Zyu1xNkiDwYxJSEUFErJjdkqH8PgeN9XsZ",
  "key22": "22Z6VWBsVPYRuTyH2whoyZWrjCcH6PS7p12r2eseLHcgAReWcZZRoE6u3VZjws6RgEh8uXCMspndiZjNNwUHW3a1",
  "key23": "3xNs6b1EjWF5UM14LdJzkJBxH4YT7gRiaR6xGxU94s1JHg3dc4Kia91s7ZrYZG5p3HGB28mraTtb9c43De2ebVss",
  "key24": "4UPLMnoyirWgGy9mDzFXMSoywy52pKfz9dtbroDG2Kh6mdYSkr6wZfCMRZgqqZQnsRYNETKGjPCCDRbGEohVzCvo",
  "key25": "4VRsTpX8kqHB272Rft8KMWgH7BN8apwUgwSgHutsjUXmZci9Pooy3EYAb4v5FdkCpDXRQ1DdsqS1iZiWYYMZzBQH"
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
