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
    "HKypgC8NYfpfDKzW5itYwqiP2ncuZJ4GxJFJNxPVgb8G2aNWB8ohnJTcBg4K5PufE35wUXsjYdTGgiqC1GVdD6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8g1QxQYYCM5xigWAtrZMsuSwtAtQjTCq2vZ7qd5c8fJkQvD6XJhV25HyCf1B6KPLwF6CNKxBWKZtDgoxqoUd42",
  "key1": "x2J8HQQggry7tuFK4vJPaFPTAocGdyFAJZTerU1A9Tdz8r2NGaxcpNvEe3F8t95z75iKYeLtvB5Z9gRq6uYHFMk",
  "key2": "3cHbCr1FxLajQknmCaCKpuCjWtLPD5h5tj161Qekaz7PDE22xsjQu7SEqn5wVFAirFaRP4a2bLVQWPrKtjdJCWrF",
  "key3": "3KsEFpfJ1CDXoUFVkeDCvWwCGcKDt3hF69HrFo957kBZw5Jc3C9gyt3GE3afMvLMozuEwi3drsJCSKC4FNbg3yV",
  "key4": "F9KCyNGJq4kbSESVnKJnMwRScTLq2pLBK4ZfB83QVcb8UH9hfWhpsm6egkhPHctU6zA4dhibxZTw2EBf4A5JXoo",
  "key5": "2e5xLvsnZKeb9HTNfLLsCpzGMkB1AoAqqd8w1wvQyd9yRrNRYr7MGaNf5uq5eiQ9PSUSMYjtZX9WZuy8Mz5dwCST",
  "key6": "2aYAcQwSn4x3rYL63vZcb3PUMs3a3qBTLcUrTb32BKyzvGqATDTYJD763ZDg9cqfdFwzgN2DBrZkffPBU2n6CE9c",
  "key7": "5kLcRjMhNk9STp8GcFkLRfobLYAJTk9sR9fmUj6S97rr2naw4fHoGMc7vHHzgku2nRSpuH1hpTVBwLpkSZGSnUDJ",
  "key8": "5RGLxjGoGEDwEk1MLCjaL19e2KRNw4E2CQekFQTXij9HG8LmrTBNysqwmV4F9by8zpkcz33XGadD67EGzfGKtCyq",
  "key9": "531gBNWHJwsbLV4phtCPRDmcqe5BypLmFHEmPQXUGb3VAbekqpdYjUFWAySreZVL7PMTRr4HbQigukqcPYQM89G6",
  "key10": "5LKkhYndSSDYXyJ8UzmEDqf8aGZ8jJ1CxDm2NjSoztmZKWYTc8PfZKiZRFE82iJhMA9Vm8tB1G8X4sdsjKrenf5H",
  "key11": "sE8JMkW6TukaLNtWKkGTxcD6SLLYM3kvsCSXrsCB2nyTdwWUFnuC9ueWpFFdfEVXBT785dA6BCnh1ctP23SH6b9",
  "key12": "Z1gt5hjKfjFzA9buZBmhKzs9nf7qx8zDXbikGwBJdwAeTsKY85ZSvHZcD2o3AVfUNCbvLQsB6MDrVjfkpUsQAaZ",
  "key13": "4fBjS5GKXBCk2PPcy7qb1h5bzA3GWPMFMnKtL81fnvPaRQ6Q35rmtei5KwvwpAjPKN5E7HPnLPPPNwcnSXdo8TXT",
  "key14": "2961JjNyMxmpYuH41brsn5LEtZWjqhMCgjPHh47VBzrxBjPZAmxaKmjGuioDYkHXDuNggTNDDVADyGaaX1QVoYA5",
  "key15": "xdMzraopg3ByXytFebvF4vbpK7cqn9v4y734F1BPYNR17JddvtiLP6LjBibM9Cc6umdzvK3Ri33Qhnqnge8Rhs5",
  "key16": "gVQvJ1siQiKxJbZoHYXc3vbJfyv2vnwWsN4uGn8rSChXnSzJmsudLxFNmNm5M4Nc7eaTZjJfhykyMXzrk6fanic",
  "key17": "65iWLiqjxwQtgMkni7a2xLsgRcDqwGV6kwr6Hsm2eUnTMARtTW4ygTR1hcCaoUfA2HMkEENPXeN7BXhjGfEGe9pQ",
  "key18": "2J3dfL759FQUCxVnMHnKmqR1AUhrHYkza5cCaEMu4kTmkYHU24VJp1Np3Qih4b4gUPoSBdctMWWZZpjWHbXp8Wwt",
  "key19": "3Zunp4gnms3eyzFNLRnN6KPq9JCpiZ3PX2QWmiNCrAKTLeQva6ShQJzWsqbMEPLaPZiwSzTj2aqiHSHbtDUyetcE",
  "key20": "2frSY7ZNQ4bSbP79rmdwRq7juVHfs8sFzdwBpw7oEGNfR6wdBY6XsEbFCYkBURup68hjEK4JmJ1qZnN82xSPCgZL",
  "key21": "BDmwRLFqvFC7vXSCApZmgSN2446x9xw14fcd55aNtJjkbRp7vTcs6zcxHaLkjchQok8zGHsadGyC4U59Jwp7Qmn",
  "key22": "4PX9CXtbMVELwMMTHn5TA6PeNAdvtPWvkUuuLof2F2xpjhXopJcNJXzHeTBQ4njBy35VJzQzbYbnr9Fr1YxNTdXv",
  "key23": "5DhaGffXpshGABe1jCu4Kz9tcKkesRDHBxdQmFU2JGVar7o5AfDygjsagYY4LWcq23od9CTPjraq2gbi1g95UQVW",
  "key24": "asEoTDt4zzL7981rUenQph2KaDvsJTJwRivzigGiLmrcYMUuACXvZeScQAUtuxkksrXTcQhN1okESbQzczVZLWX",
  "key25": "46YVUZ9Tvcs4p6E5w5RG4QThJhLfUvXFjjReLgjvQbDFeMzC8togG5U4iHoZSr5EXSDzV5yBbrUbth1GsBLQLUx6",
  "key26": "3oe9zBJYB1zR8aBBRx2eBpyPuzjuRLquk55HWdujUoT6fpR6xwvjRF5Kk2wGWoVhWqw2AiD9LPJmmKzfZ8qBZp76",
  "key27": "4sd4oFYRyDwyfbBGZ4yt7DvKxfpCsapjae61Jxa4y76u67muY8B5EQPGBK7verqofJTEWD3Qn8AzGNmCdQjjfQVs",
  "key28": "sRxcUzz8VVyszX9G3Pgya3WjbUVniY7hcoZZZ9Joy7cHTb6Z4DHQojVcVZHitJMmAQJLerBhhZ8UmCbzZEZZmjT",
  "key29": "2eGKs8abToZV3UcGpWjJDcDKoEoMcFhRbdcd67XeuP7yihztWjLbXxpn2tqPCB1AMwzDCSM1ovcHCp5bW6Eg1SYD",
  "key30": "2MbPgdEsnCT42DSDA6VCKmevuXdA1y7LHN4ZWX5wdZGV2Hv8a3AnvSWjfZVYNYRgPgPniK25B7khGQpwzgQQfbE1"
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
