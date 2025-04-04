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
    "5Ci8k8xn7VsL9XD5Xg2FAe6P16VvoXXY6sPGDtSfCbgvyN5Pe2uDZwGwg3qtvHKvLYwJkv7RHfdS7VDKpaT9AX93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMVxLAQCV7GG9XsUmYdgfrVKueeT4tKnZqCwMY77PmUHH9kQqp1tWN7SGugkhdXLbhoTVGfxMhuLHk6iFy2wBoD",
  "key1": "21HdzVYrUwzUGFz6WEH1mPV9Ms9PsNUJrKJTMT753RKcNNUay8jgjFvXieAdqLgX1xtxtnqt5L5crJ6hFcx4u7sd",
  "key2": "4nprsmYuZYUUnbfXrcUoJxHYuXFDyJn3u7brTnMRDJwxG91HNuhxtVL5ZB1DyUFbiky3cPs9YexTQDY9RJWK9DoC",
  "key3": "4wF4rUqvcFATRLHxjeV517LPmooQc6SnjyFk9k8mbpPkL22PDhpH8Y5RAUVomNxWsG7eXbZozwihTVKKiJK6SyM",
  "key4": "5AJxB15UmQjccC2ztWAxczAjrTWKam8EQ4C7QJQkmR1LccDJwqi57bBDpbHU4aWkEGhRZhxzvz2J9hu1vg4Q9A8e",
  "key5": "3PWjHTondHN5RHAHLkNCmvzFua9VRSWm86P2rvHP2sh9BnBn63MkDkypoKDmYkJXfBnPYvKhdGicp3gKnMikaa7E",
  "key6": "QATNPnHPFdNYdRVXhmCRR5zMsybyjSTypLdit9jCmBrAPPUsmSxZoTiUGmoe1Fsbcn43EBpBcAQ5UhA8bvvQFPH",
  "key7": "2exdMNWmJ12vqjQLQnVfeYVoeJsp22CJGvfpZABzaAJKbzJm7idN1jfGHXu8MA5riwEyw5JhXcj1PDAksNVaGJEK",
  "key8": "46vA231n5bX83KWc2VTNPyzsLfUh4u9SvWKxeWEuyTffFnDdt2vdJm6oqYKYNvBsb5wzsQfJs7LELEusmPQ4YfN8",
  "key9": "39nu85BucyY2ipZjERxQ6tYfRdy8kymaNFRfSgjPuP8LN1mk7Zdjc9hg53BWN6RAtDwTKBfG2ojD3M5w4G7LVng",
  "key10": "5gVh3TcA2VCSc1kpEvMszfrGsbcusv9VA2AJ2goog3kyaQFiALNN4bgi6kFJ8yze9L76xaHMN1Wc4cwkZVw38yda",
  "key11": "56Q9b7JfcNWUNUjGDzzDWoZhoCUUFutj3vMML8o2NUdkDTL8FGynf9t3uvVaxcDMQxB3TyYmpUby35Yy9Lv4CCZz",
  "key12": "3FDkWZyJE8WrWTAm3M1MfXEPFZqhLS2BwZBmeJsPhWSQmLKNCyjx95kyYJR4t9EPbgg1jKd16yP2hwDyFWSkiAdg",
  "key13": "35rd2P1ULkrEVW1LYG8Njhjdp4tZEWUYdKfExkHJMvKrK88mVu2XTrDm6SzkY567QiWdkEHn1eMLhSZdBm19DbP7",
  "key14": "M7HfeBPsQz8dpBgjNsNMVcSchA5A1wD6XxXKXEiLMYBBznMGxxi9QJ4DnYum2DhqsGccxpoX8nDbJtRGe6HQKKd",
  "key15": "5QpNSKrQpAudhfTbBA1xAWN82B1u6eHDv9nBZH8kxsgTHmuwJv2VmHNkp3yybjWASVT3fZ2Kbyfh1A5BpmrNTtXE",
  "key16": "fkTwSE5pToPnVMYwHZspcQvuNMiaHDx8wf5G5yQ8E5XCH7ZaYo3mVMKnhu8Q6m4aQ3D1dGe5FksgoBR8YGCAhYE",
  "key17": "4L6JEQtqQHwkLvkD2eBQQrZPpeXtcho8F2H3mngJmj7qFgvRjExjN3oYvob9iQAW29c1zwUVZrMWW4gGmef1SfnF",
  "key18": "4gkNUeHDKJaY4CvfNAWrBZtHBFHhPjRV5juwLBSLmomcEGkgAFN3Dvqt3Z2xTC1ZXPudigaTDzA8rt7SK2kpZ5wy",
  "key19": "3w5971Cxpj4gwNfzPmMJw2s69pfFxenyDqWR9Z6VF2ta1yW66q9BsFRKc3brs1tVmCyUmZtHm6vx4uKWVpNc6bgg",
  "key20": "29wVACubdsDYHT5nTrwA28iicBrKZ2qSoSZS2NkpRngfZh5TA41tP51E6hFUHa2ZruTDzC9YzNWfRiBnw4FDjVJF",
  "key21": "JJNA68p87MUgH8QPohTz7oFLBYXVdTGFSnEkrWwJYaWNQhfpnHGd6GNDGR1eGcaa22ZvsrmtPdV3Mf83JQFryfG",
  "key22": "5gZAdMqz9x2oEAar7wuoNU6fmkFVSprj2mC6BaNUP6D1tffsCxu8Sy3BrhS2pFbh2biajUtnZTCNBBGnLmRs2L7t",
  "key23": "2MeamafZhhw3hRdiQSoR2Xi2AnYbP6QPonXBDkZB4FGYAoo4znb5bdLXr9MgPq9HByDHqzwxfaRd2Li1XDFrCfV5",
  "key24": "2t3AcJSZUun24wwTaBDvSWsyGovS4XqANJDoqmVWsBfnZEb2anhNEbRWZYmiXXgH7qFkmA9tKnG8h1JTWEdKfogK",
  "key25": "3ggSK8xwaeziBV14CVwKdUg33eJD13YbH8VeFU4qmZsWCcGLGCGbgnGxAhUJuPK3AVKQFFkZp5qncfg1zUvS8EUG",
  "key26": "3keNkBQkjgKpYBrdXUyP7mMXTvFtrgoJES6vUfEcGiht62vDDcc2CAw9oiaYcSt8h5C1EFNMYjmmARtPyzMh7fUf",
  "key27": "5MaTMrbJbNQYsuCJwsPijyDPDSvfxY3Bc4H49s3nhpW1DM5YqpKdAyXrCKZZoyps6ojzz7KPctjfzbDyoua6HsK4",
  "key28": "59Hhii71YUUUr5ouBy1XbJdbr3khZ67SEUe4RSQEM1c8tjH6VvUkouLP4cSuYBbu5wUjjY1ACLtwJCC7Ufs2rvvD",
  "key29": "3235fXy1kkBp5QrjBSewtwYMJUZWr4fuFTmnmtAWtziTVxuv8fdQGs2xaER1d1HrycfKCEzbrHdVso9Lr7Z4s79T"
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
