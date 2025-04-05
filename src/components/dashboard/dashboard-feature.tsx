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
    "2C6mp5CtD54HqnReBH8GSHSji2n5Xw2XmSq9cPKe32WM8mYTrvjoWZ3X97nefzPTDDxtCuqmPPvi178rD7xCRJx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBhbi3rhrwVYoobWo43okUjPVjx29CbkKpA5WaJXRteCvq3SnciktaNLCUFWmaZoMfCY6c6iyTA4v9VJN36dGoM",
  "key1": "3qSxHrE1VxbRk4pvNXfV5PGNH4hGskcH7re8PCVANnMowhy1R4jyeN5VdhSPoKEkbKnD2zFB8n8iRQ7rXAkx94Dq",
  "key2": "2eueZxH6jNFrcrfuG19YGAYVxTNE4DCK9psMXm1sJ2cCzFcoPAxcbYD5zTcJ7wqy4xGLyPc76GcsWRGVQZzRNRCy",
  "key3": "2KH9KjpCxRAJF538upK2Kua423cfgFp2phJUTwCVfVh29mtEXFbputk2rpykbcDZVypY23ZowXTgW9SKVKUBTBeU",
  "key4": "2PWXLbQfpEf9mjkBzTj5yDuJpspxxmiCpQ3Kto42N28kLvmRVee3uGXFioYnXnf6hDbavumr2YHxNAAKLg2WneN9",
  "key5": "2tPueqNeZHgYL47cLPfWjM3Xwm1CRCAuLSrmPJ49m7FpmPJ2DnM8kHtfLG4mizjZvAgqPUiwLaVDYvfsVhYVnAhA",
  "key6": "2b5EGsuePeqwdyUNmD3RuGr6g18DLaGnSVs79vLTXjTsZ7CcQ3xgJydRrYhc5H1NrBjs8yXhKsTfNpLFfxm4TfsR",
  "key7": "3SeSsGHcLWYfkdHAM3uyC5Jd8XAb34y5u4FzSje3FFHFK9jbC51eU3zr74RFbx7qnSRHBvdVwzL9T8WeaAqmqYoV",
  "key8": "2cv6aeBiYu9P3CGT5oL3vCSDEcQRhaKYpPzR3VHZMoLkmXkdoocgkTJmDJkQyQGtVARpCFMdgujF97kxTh9TZkJv",
  "key9": "2HktPds1vBAsKqzwPN9oMb9nLxbbH93X2F7DNDZeLg2H1oUmFtyBntF7BwgSAeA6b28t2G25ZZeQgL3dwwbMHHjf",
  "key10": "5g12bpGDCE3gs8e1SwefVTmQPfahU3a9k1vVpFF15oRtJJ7BGWCkqxcNs6QQdz7NGSKhuqUj3nBCgK9NCjSf6cet",
  "key11": "34b2HGNjtAyqdTwnMC7CffH1hx8qfzs6xneQorQ1vguBiQrafLkdJVKfAPNjn6YKHBiNJEppZFMM1nhJaLbPauVG",
  "key12": "4brdrttNcC7PHHwLQqbXNcsq9i3am4RwueqDM2ccFZorTR3x2uRBrP85fc2rewd4DbLy3ni4yPQAy14yS34TwTpp",
  "key13": "4bKazwbcSb7pDJQFRbpJr8pkmfvtVUmFGFhFogSdhJ8iVKFmGuH7qS2fGG3cLU7vrApYDLQgr5gKNRLE6X4gYZXx",
  "key14": "4UbyaJZFGxnjPMNVqfwNJb4twJ3bTezUSC5PKwjrEAQ1iDFrktCWdAa23GNA2y594WUk4fuGhFc2Qs8WZsZcj4Cv",
  "key15": "5N5Vteezpkn6Pm1wMRyYUkvABMTWKgSfK3Y27bgKkaTjsVGv7W3HVk7cqm9UyEJfhgHihZJRPAt8RYpt9bEh3VtD",
  "key16": "3kFCxS9yS1S2w58uyLFuBJZDEKX7ZYme1YvryoxLCgiq7akuLg6dskSTJMkH9ERT6QhXxXi9SMSZuPQ3tZkrhf61",
  "key17": "3iWSCeZpshjj5CYiSHeB1o4PmX1LdGnUezLSBA4xC6cTbS4PUCXMMp9NRMGgpWdD9uEyfCBM7YLtPpViPpNuxVxb",
  "key18": "5MPWESjwvi8zcEU55iNiYk9HU62QPxzRYQs6VH2YgyP8YVprk4cGk8rchWAkCN3gtRDpKGgWdJHNKksYvnHL1hwQ",
  "key19": "1hmJaudvfqNKpZsf3rgsALrExAmCKTJjRQUrS3EC4mXhMsv2uzM9zDkXfD88AdMWH9ndjYW9QHT54baasUsPw2n",
  "key20": "3KseCFJuEU9WKrn5GvuoTf4pGBcBbYZd3X4Jd7LrG3pVaweBg93ec9JHPrd6jDT1jnRtTDx6KtdmwQtMgxwuCR4H",
  "key21": "5Ptmd7frpR6L1dfHEGWpYhcVh75qfLfhkehUW9caowYxnnkuWjH1EvT5AZDAMV89T7cG2ULnVjLHBx9YBdbsBS8x",
  "key22": "5CJgxZxs8pA8ckvWVGKQiH7Q5aYW2hWupWJ2emT7MB7bnLwAiDJFEhT9Z6pvuFXYDSaMd51QLPpuGZQyZf638HSM",
  "key23": "565vBZguVEuVwsnkJiYxud72zvqyAZDiA3QwMfSDnCS9ivMcETSmtaM8MiPEnXAFxzdBwsPrLwjRYSC6pexrsCXH",
  "key24": "21QMoE7rvtRcNMCkEiWLkFC9WTNxdH5LiejYkKjwAsk86Zqdk6jBJrLyZykNnWg8m45LYANSYnouuAp51Yx81SbD",
  "key25": "44nxUeevRg1VXh28pk3wZscwj9qTeS6YDLfdvazX1SZ46LrGH2aHbAiQzRN4VospJ8Qxj6vWspfDM4cSGHANnh8",
  "key26": "p4Kt1ySXjneWEtfzMmg1UVYqG2EWkpoh6HFaRwZdRV6sHkvZdbNGNq7NcW3Fo9RbSNvFyqjKGky3WjaBJUjxyoT",
  "key27": "4pfhJkPVkA1EmcA7jRSkK46NNU6qBHHhTku6o6VjQ4PTEmD7adcB6aD5dEeejdddhK3jevrHN9117nnuRVC6MBvy",
  "key28": "5SE7eEgheAFon432sCUpDY4P4XeDeS5axkRYkGeGxNAAyxLWQ3adpvPqSSXbb21Gr6nYzkYLqNQKK6PfesaH974A",
  "key29": "5VWss9pqtUvPjSGQjWLfJuiYLiVVaPryB6ZnfBahZbAeZekPpWLjJmvumvTTrkxNEcvHKmu7DjRs1VJAQue9Dwi6",
  "key30": "5mEVu9iDc242xGsMF5qYAUFYfdvz7ZvFopjeJmpout1SmSgvw9nNPupwimbDUBzbCFwPxrTsCYFarh6KqFPhVyZZ",
  "key31": "23dzzun98gE3AG4fu4QQ4YNisheF3CRhuie3JKgN6631WcH12PgLreFWc1eNnpabLnWvsTQ3Rf3aEZwWDRwTHnKp",
  "key32": "5h6UmngNk1ZisnpuNxGbgNViYGEUNwYZEsp7R1ZMw1TW1w2XfKNVbtrsThPYaGhNDpDswdfBTfEPfjdmgFt5bhMb",
  "key33": "2LPToHLRHSjSMRRuX6cKVGEirqk2wDx6mjBoAExHmsRPWeSZ8Uq24Vq8FtrpQsGj9RDhctvaz9QJofemoES5Crsu",
  "key34": "5CdFKUmw1eACAr4LajUSKwVs12ey6Wh3Kj6AFFjXwa5K9T6u7Bu4wr61o6BU5n62m1h4vtAZr7KyQpZbqQgXLiwW"
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
