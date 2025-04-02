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
    "2bhrBCg17hk2iNEQMfuEdxKdnBwbuS3MAqvXJbiMwK7GeE8Adpctq5ReZaDPUK2LHa5FCcowbQiPBwe6QxXEJRVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xcLzD8C35XEBce7t9mrMJnepKJJxhH2YXbwDC8gdXVF9ruuYbqoaEiMyzCsSgfAtpnnJnJDvdTKN7BmgqZx4scp",
  "key1": "32rsTuyLfLWXUm3GA6buMck1iCiEgM17RGLTzT4Y3kH5Wp5QhpRG5MyZ8F4ysAfsnALcvuAeqtW679emimaiQ3hJ",
  "key2": "48TnJGsEF7eJp42PfcVQuC1o9wZerBzWRhT8TB6cVjsctvN7cu7UkyrQtukgqbT3fq57m6XjMpsREmqsGjevGtzy",
  "key3": "2Fj5h4ZnZEVnXWcSTf3BzKn39FWEgYCaKKUgLaw48s3xH9jCbfweNcayWYqxNkVaQ4DeeMWxs829re5EbpsYJwhY",
  "key4": "2DK9HvfXeRo9DUbdUHxoDH5f5f6Xwa5grafzzBQ5ykWYM53HgbtAQ2RgZEDsryFSGtL3A6ctes4vYXXfruKwrsUB",
  "key5": "2t6BwEDwbqV2JSnwBEy7343ZWxSF5Xxt4Y2f32qheU8syknsXcgDn3SMUtMZ7bmhFuhD3oAnSF9GRHeJy9PcXAYt",
  "key6": "52eWFWBoNEurs3zdQ7SxAF7h4o7net3C1pX5fdboyxKtvisBmJV9d7aKnH6Viy6kYJgcrecC6cab8YRGQMyCBZvB",
  "key7": "2E2uv7W6fYV7eiYfgYh8y7Xb7LQpNAnpRdGoL4JC3Cx9mBFcQmTqA92Q8RyPiGUWkoPX3eaJgQ2UmnfYJnVSpqQs",
  "key8": "J1VwUswhPPiBFJykAPCFfUzpJkCtjgb4S2hdxYMTCZSEnZ537Qvew7Bkh8T2oW6CRFJF92JicbdzDZbvCA3KuSo",
  "key9": "YuKevN78ZaRkZiVDrUdRjnrUNp3p4cU4Pz2Dm4nPnNCyST62FaqUZjuNsJXjYg3d25SYMNMdd8cd8kQiLNpVVEc",
  "key10": "2QKtUs6HXoifHgrT12B3d9fTqtBxAaDe6BZYkjktHYSofwzCCRy5x7w1ZEFwbGv1HPAL7jvSJ4BZcQYx1s6ZfYLy",
  "key11": "4arcvwULb8aj9K7UBPyZBtohMsRqyWCKMcQcEx1zKfYgCXdZBZrAPAa4royg1jrdjt3agvTQ8hrhiSzZQAab2w4G",
  "key12": "5fwNVBGhWYSbtzhHK6XfcgxMjNLLpcVGqz7DS2Kj7AMgypciCiy5Z9BrvaAyuoTbSdfpK1Qw6xwtASNvJ53N3PKo",
  "key13": "4NpZwEB7Vh7ob6TH5fMDRpVoeGSWkbaf45xH7XA8RPSvKBseiKB6WZT9DgUFZbv16wvZhnjoQMFS4w6cXTmyt8pW",
  "key14": "3wVfYSL1mBHaRoceeBcfs9YgHum2o6z9ULemLvHTk7o8gkW77tQ9qo4W2tNND36xjuQg9j21FPp4ijmCowE6rXZW",
  "key15": "2uw9MHvv6E9wU1H2FSsC4P6Tg2mgSvjXVyHPhUfuFvMRvqwb7cpXAMRPHZBrCeHKWGrQ3FTYSAcPqAapSwqboheP",
  "key16": "YS6CAA1Ab59viVbvM43k5URCqs3DPTH4TPEmrkh56wtWzUJwR56WayJkWRgHxP6PSxrVz5LVKj6HjYMDn9kbmup",
  "key17": "3TpdUpAzNYZMwAZaGfRwYFmroAak75QhgMrHC9fszS8wxmHWMhDKQe7uNLwCoqZiRR6Yb6QcApobvjDFqjwpz5ff",
  "key18": "h7T6P7rRerWSvZJEhcSABFchbF6wFqWhCijSZASpnWXUiFxDAER8Cbb8vC7K57YhyLoKSTaS5PEqFLsPycm8yJD",
  "key19": "5s3x1RHmSVnQBAQaYmehgxcou5AnKCLinhGntN7qN7pnX3ibMAWThEKxGHjHvtFT4UmUnqeiDfGRtnXEG4cEqT7w",
  "key20": "3L2bAj9AEXVeSmwz7AG4p2u7UtGPfvn3TgTjxC8yvS7pFWvE8ZNxvCoQ8rtD9BakSvvzwzQvFUSZb4EbQHv16u7M",
  "key21": "63Tf25gsFHhgCzn72a7ZrdGMDSVpLzmzhBRaXcTZKjVYUPEsiKYR4xjjRroBHyQCZBeDNMouuEGowySfXp2ru33d",
  "key22": "4XuLYMMtACEWMwsoKABxJGsSroKwkBSvFZh2h1XEMVWT71K7Q6D6iX9yHsE2W5Vm8fYNnetYnjvALpiPmvLZpZ3m",
  "key23": "5tM1aS6TEySQvxb567bNRA4UTBmMsKpFb2uxH26TBce9bXhg37L4cYPt3yWfjqJacqmUQGrk6yaGEC1hVhpEdKWx",
  "key24": "4nwAKGpBizsNwdMo7CzEVYBBgpVUzU8GosUxZmvnnKTRccg8HMsFZ9YumDoEv9qfxS83ijKoXcscHUHEwuiJhdqm"
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
