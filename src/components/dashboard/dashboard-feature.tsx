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
    "n8mMGdN8uU9HGBVxmjiBqJ8JzBAnN2pufFvej34D65r6ny6kxxNtLWPZtSz97T8Pm4ELTkKdu8ZLRSkeGQADRap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YpdLaZ9VqH7FqQEb3yyYYzXTaFLk5K1JYnVR4YzeLHPHmWTNyaorv3aVr9R4V7aGbf5iQbtcg8uvs1tGReJG4kL",
  "key1": "knbutMMdyUKJgTBUsewfJB2C6zR3AQJiCF9rSHRbDKKsXtTtJ7RkNqgahuBhcgfZGKhxoPB3ozUEQqLj3yoGQLJ",
  "key2": "5p4HrgugYnvPcdb3XnYHvr3SAESkhbSKs7KfbctrorRNfDd3mK2s2yeHebE6c1UwWZCchHQMfhBKbfmANWm54NPd",
  "key3": "2FwWTEU4pVdQ4D6MqwYHfGtx4qNxwmFxv1Y7tEsvBAQo6bB5QN9MB5sVsx5NyGa4E7z6r8wQJWjEkQYWsUFiwom",
  "key4": "3dHnGtWzrrQwneGtm4CjhHniu33Cb7ccEzaEJfweeh3CrHkkiqDfZJv7TzHmuuH4BLSoUjHmh6XePWgD3Yx9NGXf",
  "key5": "2VY6W365Jw7ULpgGcPYqorNhohJPpuoK7sLFZ9cNoc9EGHpuXdLd7i8rnjTSbaLBWd6nMVbNZQezeg3Yyy4mk3r1",
  "key6": "2TWvoo7d7L7TXWM3uTQcssiEc52x5xM8H958CY5eHb8zZznDsfud4eqBYYyuyeUpQj4B1itQuf5X3dYULu93wKu3",
  "key7": "34xy9JzdfpbGpivrDqTRLLDZj3kdwGvCNkFfDdYXzZ1tEtNUwtmY2Se6Au9zEcUke9BLU4RPApRK4vwwuYXBvNQu",
  "key8": "5oritQSbKg1qK9WhNmkV2ztCuDb6dhUnmMfTLN36L9CNq8UffK5uiPJuAY8sdtUymQbAUz5Shi654GNs77fUY4Vk",
  "key9": "3nRhf7ZA9d7uN9D6wYNgrnV2kJqLwUSacTXMMABG5fPihWkrbzaCA9D4BcUWBZ9HPWF83byyYR7gqGrBZePeq5rN",
  "key10": "2qWtivVpvxsdNuvZrCP4U427x8KvFvtNCDzCvrXBedBkzepkdz97QWArFibYZ75kCKPX5Z7WrAtpExRkY7xYTrkP",
  "key11": "5CMBZjfpYBUqnTUkb1Ln36zWiSoRjohvJhx7fm2nDgfdnWJVBCU1yRTXJEQy8Aoi3e7VK5FugCrdMihgkqi4enKn",
  "key12": "3S7V583eijSB4VsRvRT3ByhETWNV4tsvJ3Cjfdajv8e8zuw4hNhZ5o5oGSgKCvnZ484Vt7h2vBfxfygVzZYgWVm3",
  "key13": "4er1RSF1A1CtELePSLrQBUDq7S3TQpB58XdWTfE2DzwiEDRg7wUUoucG71ECENtYJNVf2EVDhG3LAj1RjoyWdXJs",
  "key14": "4YRyDY4tVpCQfswrJ5Cxb2GTMDTq3UMuC88d55a58CTfxPDW3CPvXGDFnUGQ94asgYa7eSzGyX7heFt3cVBEWrh6",
  "key15": "4NffdJ7VzVegkXruvE8RLC1JJ2bZWLHypVL1SHxjm4uCwAYp92JydwNZgkFoUMtKSjdjBN1hcAfDMajhRX2Rsxs7",
  "key16": "3BV2UtQXHcRjJq19LRzPqeSgMCMWhhzeh4Zj5Wa6KvXXz45NzBHk4wT3CXDRK1VtNAZrs2BzdQVCKbcJPMKsUVDx",
  "key17": "4R2ifKwjCGtLkzJwU36yrxCi6xJjK5p36AKXA5g1DpCzqiYTvqxdoNSpJtb9rgxoh2zzag4eMkaPNWHivQ5x2yat",
  "key18": "2NNPvKzGQiZWwb6LQ5DxKs6eYyQWwiXc7dEk58wfMcR3UNQRuezf9boHQZ5QzdrU5pTaQNJrsec1qFVuDFZUUoJg",
  "key19": "36WxrcADDMPGbXeziFRBUAHbXCUPndrWHkJtuKcjyBG83fsrbms6yQ6mcWtMCbvYpmgyyy5KZ6e9WFMeWVJY6Hmj",
  "key20": "3iFoAdUinLPUYX1cmoPcV9dELPizvYQtiCfXZYEpPF4CkWjFtrqeAoBh1fzR8BQs7Jwqfrtt2BL6ETSRaPQ2pC3V",
  "key21": "4aQU6FhAiRow4Z5Rh2VaGpXzjBtioYLxoEjsz3fBFSWUYbzR4rLP2tdyPPbaJ2CZgubDcQpwV1X8oEWrdPP7Yvy7",
  "key22": "yautaeZGkNTZWuhxquWi83u4rpYoH1EbQmUHPwKgNa9qbDd7jm6uR3cZqPWRpgMwZxPYmWe8Gbyd2RNyYEjBNbe",
  "key23": "w4YGZFRNCcDWLXsMUh7DGcsb9G7w4oPrvNEQjC89qeh84p6Sr1mreiuZEgDMgdtEg6JVVnzKRnHd2h3gs1Wy44W",
  "key24": "sm4Jn8ghp1SWuXwb8uiRLeb8ap1D9CbhAHwPwr7Whz7gkuLiXXBy1aea99JzNJEADBMzBwToEUz53zne9aHGBwH",
  "key25": "2eZ2FFFbKgrLFETXH8EFWcKfYGCZ1xBzSX8kzD1CrjoGuYwzsi127Lpu867wwTV9dqHA37N1Lw2pM3gpa1hYm6Aq",
  "key26": "3FrSXig7SXzcrc8UNR5Mma9URwKTpXeitkn98yyRFYb17NLGNkSexeBuDcahr3NPzh5Gt3bWcSbT3zVAFMRebYzG",
  "key27": "2YFoBa4Fa7RVRV2EkezjT643MUfd11hTNFMarmH28z3drFLMEu75fskwMSNhzqdMdbzs5mdURABtiRQiVBFsu6px",
  "key28": "3w6VLKRASPwcW8hpJkMCHkNscsCceCMSPUBgG92pEb3u955CyRF6dudewB1CPAuV1UugiaiEACd6V1GAwv65FMrB",
  "key29": "5K8wbSec9MtWHsG6AaExsewyXnfhKokmnh7wBgkq5ZU8PKsgcx4whTo7jNhTcdcq7fyWSKLgMGm9mX42JBaSLzhD",
  "key30": "4Fxfvr2UBYurSz2gZcRj63Aa1Szf2RXhmTrLoYGX4GPLbD5pke1cpuvDgwU5KHPFo2hF5MyuzvXX36Wve9TgKZgZ",
  "key31": "egTntnjp6KVyqjZxdDsBWjEtCPGXCpSKoEZrGhqH6UZqmPPdNPgk1ip6xCY558fNzuEVhWT7G8M1Pith5WwT2XD"
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
