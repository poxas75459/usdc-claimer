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
    "uimubz8Z2Ee4ZyUStobstcxcEWLjC4oFzRqmDBbiekoRgozMURSMEr6MW4vjEHwd87di9qdHNzonNWij5xKW7jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "huiw9fQJCPsQoT8iPSh1aDUdJr57EpsHA22m7kc1zbESYFU3axFo5GsSkvfmuWcxSJ1uAHgdKeybzCAud4jxZpM",
  "key1": "49zMsR7GGJ9ETwSW4HwRivFaas9om4mh9dR3cKoeqVGr6V24d5byJCk19mqm2QufuFuDeBQQhAkzpC3zoxFg27Dp",
  "key2": "2r3fzS5RHzP6qtZ4wgwz4ioMwkp5ivptdhPGbKmzuP3GW235Udc8pxZTqbVy8A1HSEJ7GyPoE2UQKKtYMhqZtD4q",
  "key3": "pykLNHZMRqKtQCee1ZVMrdrS78greGnbT4q3theGvMS28KNuW5Vg6tyRMqbWJfUiu469QdjohLZKPXuujiy1bXQ",
  "key4": "5Ux8ndymn2GAQhphoRKsKnnxxubQHkTwqzsNbEFiQzjA6ymnFntWURrdC7Lb54DQxNEtYdsPLgZwE989dFxaz1fb",
  "key5": "pBcyMvwMm3b3FP4zen91XJXZjqHXMFZTfK4wRxda93CKSCRjH5Aff3w8kWXFUCEsmpWSefYCWqyHxhZEw74HbtA",
  "key6": "52AF5aqX6LicicyAd53iP4ufFWFdfZisuzxVcuiiEbuWqMUBVnUmGwx7vKc4fvuApjRoyYbqMcvpikYxSZ2sqhyD",
  "key7": "Uf9KRVuAbbgiMED7znZAmmEYqyQHvFhVZiMoeVuMrgpns4M3uYhEv9DTwvojsLjS5UwEUPs4YwwTnQRPpFPsMsg",
  "key8": "2jJfhNAyLPhaHHPKzYrSCAYNuNLUtp9qUQ3pwa4a89NZ5UsoaaBmruPvaRuNNuQm6m53fpR48opaUgG8z5euu1Jt",
  "key9": "5xbrncVXipfSbNMRQ2T87b9HQoP7oiHWybL27XfPL9YZ5AwHkrx9G1ZSPCYg3akv3bfhRacMixCu2Ci3sKt3pSCo",
  "key10": "2MUyRLptZE5YSrmPmFborRX8AiJFHQN192kLrksS3QN5SQDPJMDqS4q153482DJ3iJhSbe6ft1i51ZWuQtpTwDir",
  "key11": "3kKhBeSPVQMXXvgxVKNfqoDeEPpJCiGJ3SQpr6kN8jur1uEf5JNiiAAcgdW1u6QmGEhq5ZecQGzbM4pLgn2QGg84",
  "key12": "2HVcXT3Z2jQ5SvZ6Er6zV8seKHryDp2AxcQinNiADV3yCCCosFfQKR3bU2qeZ2ouYGiD6nkL75Fr8qc3GQ1RNvp8",
  "key13": "3kMF3tTWiApNcJ66VVpRUHBZTpraHvWoySCNUJsQXGbFKs445e6x8oGx4wxAntjbWuYd7EnMFjrpRZhQytzau5h5",
  "key14": "5yN3mHqmnpet9D6Fr1YQV6ZLPitmGjrZvcGpMg3w8dzd2mmXwf1toxV82eLJq9keWMTJFb3z8NJKiW5nakZqsoap",
  "key15": "2TBPBDbTLsqgHq8hZkrezsw49F29BdeHfqQr25qE7fwjaHu6WDLa98pgWH3DTAdSTX3wLiBSMviqFW2a848Pb6ET",
  "key16": "5Qw1W1WMSgqoQeUWWvchv471bcGFwoKdLKVJyDnX8BxHsByERqxWEZw1QN3cSqGSaQXiU7k8htdRnKYy7Zq2JwKM",
  "key17": "5EvC8UG98UBV3HnEC6BNfdWBbwbiTsoTQVue4MWCoGEx5LPA8oMHo5JJqqgXJiAJL46SQbKrVKM5RLmwyqR6SwHR",
  "key18": "2HDSYpfmBbbvbFxQeUxXW1Bgt54XegHjFPqXstfzYP9Uy4ogCaqjUyRgxfjwRN79zADvX5Xqgg3TH2W8c5ercFSb",
  "key19": "38moWzDeqoLJ2sd3Hh2HHzmf84Wuky4rg66ZZDcuYu7L5yQ2QUPynVDDsNdN6Sdup6YQNx9UJUeQtGvdsM3pnttL",
  "key20": "4GUFN5KrSmH54ZobsHcppjf8v5LVc2yqbVbrfpx5Bkc2WLFGZPVDvpXK63eezapJ7zmo4cU8e9RMRzyrdayVTR8c",
  "key21": "4rFrXGDjd9X4cTaCrCKPefeU4rzEh3828ANBzRK4brLJ8JQ7t9s9RVruSJFkatwLe3GyzLuQdpSbzASM15m1eAmK",
  "key22": "3YbvFLcF2DqTPoYfoprvsz3FsZfBRJZ5TFaDcndgSABqgVwtSWtGDxqFxQgDDfGvFcVaqpNHP2ju5AGa72KKQXMF",
  "key23": "3WjMQrW9ukCxFX9M5sbzvNjqRQ8hgMS8Vpju6ywCDev5KQUTCy2gWeAuN7qb6nH3M5TyvqNFx5s7kruGZeQhBWBg",
  "key24": "Pqf7VrQ9eGouTfrEr8ZtQsGsqciBDXuCzLtECZu3n5LRNuQHHCPybAK2cBtBydkRSCjmv3a9C1jEikR9mRDULab",
  "key25": "qTTbhkdpjPFuvD4m5sxTvubM1FtQ5GdFD83GxHwJWrSpLNoLD2UrmJvvziKMvq1fm8vwikNQ531YtXUcsZjw3DP",
  "key26": "4387AkaraMZqcNPpjcDvuzfr9t647jgZKyq9winRRm5GGHfisSxLfcDxDvK9jNRhNjmZvaLASNAJmbZk43BawJgf",
  "key27": "HSktp3115BWB3N5p6FBna6ffrnRuLzesuJCzJxNBtcSmeHNxD2FzQNi2azXkxJPdnicvE9Z2K1ziGhPsnpiR7aU"
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
