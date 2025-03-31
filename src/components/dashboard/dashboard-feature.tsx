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
    "666JrFnWzPbv2vYmLKdm5ewYH5nFPMCtPAtb5sbPZBx1BkaCCB3yDKuAUt8vy1dAicLHwaPq9CdGePrvS1km9ueU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YbiVYgCSyBSZZth8PdMrYFV4ymbhyTeBQ9Uz7UV3MvwQ9YwzHP3nzbHGkcsmF9f8BVA2AK5chEsGHntQ9xC46WP",
  "key1": "4xyTFZLkyKGka2zyCjNoFCERbGUuvwmPAkL3wnaj9Z5aYkWTf69b4NDE4d3Duqxz9tF4t24umGfFcBnn83fNqH2K",
  "key2": "3wzMxuFJx3kY7rR3WrzwMALBDcP2Tur3EEE4gC5muza99tVTd5yW3UxxVbyiDQuuD5BJrHeUNMVeMpfLNDje2t4M",
  "key3": "qZvaW2swocYEu6RrSASwmTDdaHcSuEr4CFMNCmydgUZLXWmZ64jPYJgqxU2HcLNo1XM4XQHAJ1e4GgamD3YQHTN",
  "key4": "3ZD4kGkzf9DdmoffttfsujTaxcf2uX5n5kBVhzKLC5XeofeF1qdHKR8duQGnCLuvxWGxENRtAiMbMi4rLVaYf85g",
  "key5": "334XXABV7pHacVnAsEbtpizKjXMmv8LiVKErUjPbW7JVwnqHsdEHkuVy6g3LWuuxykxUAmWwf71ttHfvvaNtfweQ",
  "key6": "5bSGGPc51LLjyntQCUFYDDMPKFKAsiFScc94FQcKfHxtWfqwRVh9nRW2JFCc5LGAW6ddx9Qh96WwcE3Uk5TxoRoC",
  "key7": "4vx5amUiR8PKEF7XrNCdo9D4tKj2Yi27MP8r3kQJvcdDRkppi46R1bFMMsX8YaYsrK4rcJj9DoHzhxJWgtmcsTrL",
  "key8": "4RUuYVA9hePo4h9VSotSriVMw3hmR644DLP9zHPusrWrNhEsVRX26jeqjnaZXAYC2toB1Z1qfeEhbmzv4BA7dqhQ",
  "key9": "BMwkmaCMrF7butfc2Zhqn81dQPabGt7UTqFAaEnfnLYSCoJPPrqhnzdJE5ExqPdLx4keW7cZTeTN9ZXbynfKSow",
  "key10": "2w9mst3XZHajFBw3NrTYdRKstW55wVwfobN6hbTkwRPpxkrohyyXaR83TnXZfpYibwiE2uoZS2tk99xxuS8i33Ez",
  "key11": "DaHJU6TgKPrjL2zqGBg43YBd8EAXqAxWZvq4kVgVghSgeMiYWUCpdx8nK82mp9dLFV2QH7uawHnV16g7wFkMVaY",
  "key12": "5DTGf6GQahvshrSeQFSKuBFow9JmU36BnYZAHDCrcHCqoQsCi9R2Nb27sxkt7zzjsbMz4woKNG2bmpvN2hLPhzGe",
  "key13": "4XnMPNVh36FNmTD3aab7JUkBnZxNZoXQtHSmaoDUXALFyQX7MaB9Gs66tb3ituhaMS5DBqMfCMNnFZo8MCEsnfJX",
  "key14": "61b2AFNXaZrFSnoGpwvyV5kBp7Nocgu9nS1THRkjVRSM9fGVPrG2i3G29zQxtG6og6WHPkiUi4WpQ7NRNwZzgV9Z",
  "key15": "4JSebbQP4bCpSb4sG3xy6j4CEnyNMJNan2VA5TVURReeEFaPNjQZmNRNPuURgKpTD9cMHSJ6FHHy4izsittBs4iW",
  "key16": "2zVMqZtjTBdqSRsbGsKNfJwPsERfnNoHtDRhHshn8Mcgf2ZfXYQabGn1hSYHcp81bhgNPW3gwBaZqATKHf1V3Nzn",
  "key17": "3SEXdTUKi1kRZYtxPMPimka3hw6sT5p4JzNgurpduSh439Droq6hqsMdYjRHtWH2t2MLPAHQiXUCXLLFxhL5VmeT",
  "key18": "5RdAoiyxSRVWHmbk4zHFwQs1emBGuVPx7wftAEa7iPkjyYJv3aiR32Cws6eYrHBSWGc8aQVkhx2UZDZCWYf58jqP",
  "key19": "4VofcRJgyrk3q1NGGu5ra5uXNakaCudaxQ8yieaQarjz6TmE7EQVFGiNfNfULoxhJ9r9znqABpY7JsCY4ZswR8EW",
  "key20": "5ughB61ERuiMh3gFz8GAhYEFaeXyuaPQVxw3TqNpFe7g7C9B9ps3WMyWGPeAa4eazwFmDUFDNVcGhwNyu6hre4Jn",
  "key21": "4sPaGRhDerPFPq4wAW9pUtzoh89nc4BHztedet6omM8rUb3vrE3eaAdswNfQ87GdCt6MHGmd6j9kwmkFtsMaAJDB",
  "key22": "1228zCLZkLrynQzCZY2PYWzyZoJnpJmtN8Chhbob3vHidxzg2gzmkRHtREBNstYYQyUrjgwpr3pkcddULMYyyZ4U",
  "key23": "e2Zwa3f1My3Z16p79uqDQ5eqCJ93rgpvCdQp4sEbZftD6aFXg7LShuggx3CRDopMzjvdJR6GACVTpTmq8LjUcoN",
  "key24": "Lmykywi3R4f9Wh1FxaUu8diHSEixpqcrw1az4AHegNypxqx8C8p4bBD6qdSMdZy5zUPs49GG5ivG8JcLLknmYSs",
  "key25": "5KwqD4DgtubycoAKAxqJixQPs5XkJxVZYxXjB2ji2oXYvK3rR1nBeMdMwsSFTTFJQpqSPQVYx5gZ2QA7JtwwGhU",
  "key26": "4dZBB1uoNCFDx7WpvcwXGFoKZyLG9nMkmYN9tczHRAiWsmnk5WChEXqUQbeyCmpGmJiXkDQXLGZ9xBbyScHHJtnZ",
  "key27": "3gJuAC4mnBYrtBeqSo89fVRr3uudRcv87eDdcQ9HUpuUio7sBXCPd7qz4wHWoU8uzUd8wypEBv3ByaZpxJMMMVgf",
  "key28": "3KRTfAhT76w3RFA9kCBuaZ6kymMZQhAqrSm3fYvHrs2xmXggM4ksBPFwkuE177M7946nf34yDqw9aaNNrZKoP7SB",
  "key29": "MoS3NaXskBLg6M95R4czyCwKyHiqRPqLBYUxELqtKZ1HHjLEVQA2U3dbSb5L54y57E9tY5ggRtuRppEpd1y6ym2"
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
