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
    "ditipFzh9JGCRSKcfsi5AxRsjCtVnTmhMFiobD9HGTfyt3mqKByBiFcDZqK3CryfDiwtwcyQY2D2HLJu4rAzpjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmvM6rDcxtaot1UiYHiEo7b2rednHJhaJotwsT4CWYUD7wEgaZyJfLdWwXqZYzF2bSoqcDeU9L16KKQ7Lqvh38M",
  "key1": "33956e5SSFMw7opeeB9ns3yUoKvPwdPRVobpDcjZwqpH6Je2arxK9X2fCzt9BeNs44oq1FwwsHjYHB72MWZ5krRA",
  "key2": "2gqwwt7JaSvrAss9Bba2du4BgWk8z3omREmg9d2cW81cpTAbmmPpkfiRgc2CmNzueM1aXcdS4HthotQZ1iYFj9am",
  "key3": "9epsRsuF2VfP3StKAEtMp2t6EgiJ3Bpc85hwt6tq4aTJ7Wim3NrdKsX4tfqt2zVQtVKwvCVXtLu5TdziHbGWv3U",
  "key4": "2QDKVpYVoQYgC7ruZy6tfmcTfnKP8cnpDjdAWwjUdZy3JhZ1TkCNPjBBi9RSNLNve1w6VpTgUMcmCjkgX7oNnPKp",
  "key5": "4pCQeqXYWhzHGKQiAjGCMVsyPxypcXGkucV6wgZa1EmYvxiquQ3pJ4TLF7WLynbDPiEsaQ17LdNzcWdny3rtXF3u",
  "key6": "4fkCgDLW7UpHXYBMu7NsZRfBdi3xMtrQhTgPB45jCtopM4qGVh1eBSF6abS4tthnwSokwMtWgcQpSrwCELC3A8zF",
  "key7": "2cERVcqtrd565srdBmSC4LirXswzfR2CH4k5eaMxZsRpKPLPnEaioLphTdqDgMA4yaDDdykcRaoq52SFP1ogapC6",
  "key8": "cDoYbLV5ZWR4QRc7WYp9oGWYsTK5kfGgUjNPC9gvzVs8sbE68MZ9KJfgW5BfAQGKozLKiwN2UrGE6qnq4tAsK2f",
  "key9": "3LXfA99AJpeUTydaByephEbwdY7owDqCBSHKGRZaF6boQ9fngMv5XKf6yp9fE9wjjwUfw71C572bx45TdNhUZAti",
  "key10": "39nmXrkq9n1wpsiSCmFy8bvNNG7nvXCEz2fZcjxdKkcUFnZpJvDxTr5GG9ynG3pStLiERKZspHMrz5X1mddeSHPP",
  "key11": "2iGQr68Srw944edFfczYJfX1bieonSALb43HmmDteLqDYufAXDjAZJ69pFJfCpr9wg1nHBeWNv9NnWnvU4npQE7h",
  "key12": "2GQrVGXMqXG7DhZh6riM7KQ6229QVQ8iymJgyuXThgntsfTjey42LaDRmeC4QcHhMKYMpUoNA4LQJfe8Ucd4FxMi",
  "key13": "2N9RW768AeZyGCezhFNtB5Rn9aUU5tLLE4pT8z4py6cAP7skMfMd7sCsU3VWQyVRbysqCmYkYMuL2xsS7P7jVZZT",
  "key14": "36cvLJzYM6DzDhyEh9RVfLRTgSnrQivAUkXUaHmUAAEv73NFp5bhPtnazZo1XqaUFqLneSVLyJaZQFZbiFzaYjQP",
  "key15": "22zSpeJBk9VvEhHhcEwoo2Y8Cp3LpLhBu71cAV4goRpZARkJrcBRpwmYeBztAx88PkrHq9cxpzfU7Fimxv22nP7f",
  "key16": "5S8pnLksEtmvVKrkgXYxNvPcnPDNruqzzHbG3aDk31JCQL1MtdbuR9SfedFzL8jFcDMThCwtekggbrp7JdcByyfa",
  "key17": "529A1DYgXzYbSCBWpgfqkXDt3CcX6aEgtx3bNfdPCZtwVSyfuedqVS55MSj9iak57bEDsLfVwfmAMbdRTNnmXGqK",
  "key18": "4SdpKhnc1ZLXxtxSubPrdcjLMHPA2KWrvQGMaeQJVKw8qEaWjzanho8G5saqtjPjG5m7nEaDdyT8Fv8Pg7BE37A4",
  "key19": "2MR1pD6Q8zVsaiTiYQALieBMoP2EiCrXAQrTaZm7jdTGVPG3g4iVpucxEezvWxNeRo1KnnP9UHQoq2W2TTgWfAuZ",
  "key20": "5mMLgXfgs4YXtJftfgM7pPmKuNmqkRBcKcm48edvf2gABndYPdtkud49fczMNG4YEBCU3fqYBDj31q2M8Fj5Duzu",
  "key21": "2L1xxQBBvjzmZD3nHg5yZ51sF29PRMKw1pWojey9D9z3BrbPXWS5KKkzXKX46F9hE5zzQ19PVQj9ue4GcNLfmina",
  "key22": "2BFC6qCbvA6Cur7HRApAwt6iYVwmRjMcryBieSnVkwv6DSqbqBLd8dj4ZtKz6VLYv6EyEQaBWnJkn5AuR1KEpYr4",
  "key23": "4qZNgMWskHznjEdCViK2iAgFUmLthaqh65sbAbtRfz8JUhf1i8sHN6tUVYtgyPGvAA7idUpAountJj4c26VigCo1",
  "key24": "5p4iPFUVy1yjMpejGT39bg72BFDJXu95W68EXXsMLC2CnC63SGVJ9wsaP7P6XKVCgkndCAgcheYCxdm1rYnXbJta",
  "key25": "5roeQQRD9r9HpMHDkjBCDKLaKqvVcM4Jx7MvVcPG5qtwhwzyjH1Hm3rUq61UpkEM5GqhHir2LyoiMwFUxMXkVqxD",
  "key26": "66mD8BiBfnjchq8wxR6JrD39GVusvjdCZnWo57iE4euHTLxhrHqpr8trjFPtiFKpx5n7tAuEYZYA4FQbnDipdHoa",
  "key27": "657me7juT71J6WukZHVKCEqgZ7xh1q51JyFMHBJQJLuJUNQoHZfbwX2pscQL4urUey9RQRJu43zJHgou5exaAC1W"
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
