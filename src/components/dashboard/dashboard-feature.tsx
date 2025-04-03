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
    "3Ng9Nt5PgQ6QyFuUA6XibJ5CUZhejAUTXC6H7Wqs4BivCFWNGkVcsnpW6bHZSvBauqcqb5JVf2FnXgLbrjEu83oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQE1A4TdJVNSsi5MMCpHy4oqTbvAVRUsnCRvJYX5DkBjdusxadRE2TCKfyxjTWbjteWrNhS57pwbiZnQ5M2Q16z",
  "key1": "gDoZpWRkp78JEHQeRcmqbi7qG6SppUFv54K84K7tiwNSrq8Cb8UN7ip576Ds9xgJVbgim8XkuS8xgco4x4D4wzp",
  "key2": "2BB7FkihASSLioMcFPWDo38fps2KcmyF7QQufDw9RU8yQkbRMBfWvvRT82nfzgv5dMHim2dbLrYc6UmkeoCACW32",
  "key3": "3c3iGR3f3zv6gJ6dSju3TkZKG82UZGDCMDjPJ7Bpv2tBvZr4LHmatB1Kpe5c9Qu3ahZWxtiSWyMaWN7dNLCMiwdX",
  "key4": "5WtGNnxJCSLSPzb4eUHhHhNuWbWKQ4eumLom3uhtTuxN5YVFDXyJcZ3guk1UBhEqVBaNHXorBPa5tPNBBoy5KcpZ",
  "key5": "2QPXpsCF8FKjoPGihAQqm7SKaiMZEYRpSit1MifTR1b3GGBFFgw6TX7tKVnUq6d74nVx5KeVcsB7bzd8yzffmQpG",
  "key6": "wGzLVkGmE73cmd55ho2KmRTsM5tfs9NYxjYj94bkVKgLG7cXioNqFHDXFyCym6XVKKdiESmAntsDmtB2ddLtBFf",
  "key7": "38q1YNeuubkbitNGQkBb9GV7a5hGsx36JER3noZZGfdgtWpEgBeoLPZx9LQh2KQnAUC4Lprwv888nuRzpkYJxL6S",
  "key8": "jpn1LEzDir4HaFVDQJx3NFWkJMNaq1Qc9gRfwmnQFVjdhnprPQ2j32XuQHYS7swacspGBdNyPNk8jXfoKU1JAc8",
  "key9": "2MNeaMbMa73JKJEzzDGvyULUnFLzif9mUeqz3uPQXUiqQo9DYSJ7m7QCcp6xUB6ZsCnrovjoHTfeeTEZjftW1GPu",
  "key10": "37PLE3P8HB56QP1PwoCrBJjNKtqXgEwc5Y1RckSwBh7ZUE49j8zbfaNz7wtxaQ5UMeGE3kakgJbZrhv4q2P26Fs8",
  "key11": "3RwTDC2yVK9C6Btv2PTYVrm73vR2aBFkoXus96mk4k4BHXprcYKBoa3qYZP8yr8th6B9KdZwypRT8QTWjeW4UfUZ",
  "key12": "4G5n9gAh2W1juHdFPX8mQq6Hr7J27ruJ54Pcg3XME45c9kL6X8WnzuCVt8Nkr6nat9NoqCMJszGxbN2B9hnpoqv4",
  "key13": "4z3cPNC9RwgMXwFvPimLz8nHa4U55PxMgYZnF4L7MeUdeko6geUHD43kUe9QSo6zLynkFG2zutkTsnvbTM5cpVp7",
  "key14": "4R5srePhG11MCYd26daf7hUxpzMPadhegsGKo4DcwmKkHdA4zrmd1ZqUyTgy3x4qnGvvWVr67jUxQMFFhx7ky7eA",
  "key15": "5JTyEGapEpEnamK6ZDJscb7iRrs7ZM1Sqjkk5x8cDTA2bSbyjmeJd5efzKed3ozbV5JEUDBXXCK4mStDmCHmd8of",
  "key16": "4mBpZ46FCrpfPZqJLSNhvqTyB3noewKz1VjZB83pJ3CQFiNrDN3qPZSWyiwQ2zLokK81xJCrVPa6VX8XCTJzNf3L",
  "key17": "3iUpFX1QJQExs552MfkPoXnjZwS5amYgXRDNQ8sNe39tb5BxJmHMLBCRRCPopB1nV6JAyzTBVbGjzbUxeFLLde7P",
  "key18": "4AQ2oxRPsRD6nKP1TsWeoKNFXvEE7xXk1ULku9aVk3oEVHYaC5THyP1GKnsx8xuXfFGjmPcc8sbeYKsqt7QjLWZq",
  "key19": "3tJWUPqQdycEt7wYbhqny7EpjEtSF4EysRBaGHzvuwKWTkUNNCB2oXwGeGVbQmnyaCVQW5ByfUVmMvRZpWJBm9Ww",
  "key20": "62xQBEtKeJZvTXwj1oXe66z9scN9A1RGkT8nXJg7YZ8sCwEGRLAPGYE59ojuh6xT4Y37JTD4aLNvXhCiBBaz3UdT",
  "key21": "5u3bFjNGPBMp6MTnTvHoCbhSbtQ13oFXQxeYqMq3nUN1gpmYLKwF1rYUSt9w7fiHM8h9kxjWQDnW4dXfxbQjug8y",
  "key22": "tMeLHsagApbas5LkM5oBfEhrqkvrMm5QeoZAV4SrJpCPTCvMhSrbQEvo9MZdoNnZnD4g3MBT43gwDKApq8NEi4y",
  "key23": "2PW3GGzAL4yHGPXkSYGpDGi2JYJy8focbEB1U6hpFYW47HYkbcSagpegx8iJY4tKw3syCjLyTkeW7T5v99K1eyWV",
  "key24": "3ndPTg4DaueBRygBes3ZDbbgZBrHhdizViRZWhLAqJ1W3epxz39ngwAExkLLbvMBhVnKyDRHyg3yvwZ1xN25gPRP",
  "key25": "4pnWLckCVP8Mo8Kdpbdq9K488ath681NHZzaa5xtnZk6DuJgRJGn2uPQjjEvAr5bPFPrprMZk8B6HEgia1YrcUTN",
  "key26": "Pgm2anX3dMR1tMHAcDTEukFkfkEEy8AArHpGbBVJZgpm2tCNBfe2iVcvd1QkRtequmWnv76UQzkvbLCrLpGhomq",
  "key27": "3mDhfDp5b5ok9PX36dHm4macn9hNF7QmPpdcqz1ByXNsEBjekPAZRG3TvohUN1h5jwCpWpCvwfxz2MEdKe74APuL",
  "key28": "4Cpm6HFpJHV54QMpqPwQLMfmLatXT6pLHfX6JAB8VjAEE8wyBYeSgPxnm1JrmLNa8SyCZWMkUYbRKkw1cnei7atw",
  "key29": "37txXqD9hLKyCKKAvNdXvHe8XWdpZSfxp5fZNzQokYLqVuoNXvVWEngmitNzH68DdwsMakyemBR6zuvA6xzekTpR"
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
