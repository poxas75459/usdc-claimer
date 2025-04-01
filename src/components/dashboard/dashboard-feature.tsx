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
    "4BaQB4p2ywV4PuubXuEPVy14WrBwvGUGzjJc5YWVHkWhAq6B3XWi1NtiGoariizUzg2eKuRHzwwCobzmq7s1pG7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TdUVUbxicUZHpWmNHSNrM5QFxJHjb4cs2G7B7fTNPEypm9UA43j77rXM7azKd6VnE4PAouhCZaxthmR6JFyaHG5",
  "key1": "3MEkUC2CRWCw6LBrQmpkHeg5fC6w2tCYdkEDVNN7iyghJPU8Wm7yoei8yfrfN6nSfdRxkfTxSnoGEGdZVZYQAUuj",
  "key2": "5yoNZ9a9vwBAgnQkBfYPQ1MRJN9SfEGvzoYioK4Z2AmHc2HxonrmKWdjCoMWDdG8GzHwS92YHxaePphMcXd9FBng",
  "key3": "2t2LSS7PJVVypEFbk8u4xPfHM597iaVaXdksv7pU17E9rfAZQHzBqLnJaCM5zFEtfyhgQ67Rp3yyC3R8xkMd28v9",
  "key4": "5Cv3fgTPobgwfLQbxji8kowfgdSYZCCmJYgqoWqHh2XfTym6YhwRom8cSja3btCDvuRWWqKbvtixP9yxwQp1FGaK",
  "key5": "4imCkDGqJF6dYv2wWWWDqCGiXVu2ymQE7TcCiAM2Tpsj9EUnFA9dFwu28XTLT1mMJQE3hPSiP8SpMp9Zm4MweTVA",
  "key6": "64EWvbKgYEUcPNUiK9xFrcHE2xxCfiYiqhfUgXC3cKEKNkoRRiCL4T5AeC6RBi2XUjhtdVyjpwCRxL8kLBnZGstT",
  "key7": "M6pGkTKCo1EFGVYih7KoU6NDG177dJNw123cbcAp8sko8YibnKchmyD5qJtn6fHk9W2LzStQ6SyMKHtGiiPQ7DU",
  "key8": "66scucp1hUEvN24Yr4tDgGreYPY5VfU6WZ1vNDgbLnznHcVbDZPtSBkrgQt67WrWBFkeEzWPSRcTd7Mpa4mU87UZ",
  "key9": "2qtZ82bWPJZ2SqjAnveqniqP5ZFFhqEt9rjRQCArPvNf8YSrrRd8yQjksqJXKuLFc5rAmQc41mCdR1S1TcxtN2Xo",
  "key10": "2xaey66Mwiez3BMeVvPRe7behv1LvJHng5cJNf1mQBVHnyNkNJgYxzZ1ZMxFSu4oX6dnwyYbyrhUNzRAAwNkPu3F",
  "key11": "kwDHykErBz6FuCPmmEnqgKTLFexh6LdR35VSS5EeCGk7FLpVZzZ9M3nNGxeFmpS66w5GE4gVzWe2YBpbFmWGYhq",
  "key12": "2LfK91inwsQGuRXnWUKoBLMM9Q8dnc7SD2DgiLZRBPLjcGqgL86WmJTnAELvzr6xfcbV3ZLrDnSdrTHJXU9YjbAa",
  "key13": "5v96Q3aEnvT4H7VtNLcgVs9aUPBS6JhGJ4U5GJeMUNGGQLNWRTDdpxhPS6o1Y5wghFqmEmHdtNA87CLEAqFhDYze",
  "key14": "3hAMseonr65JrZQh9Jn2hAAqSRf8RFf4evzi7NbsYsmFqNP2YgXjgFUegVPVHA6PYDhkTDG5xtkgTwMUDTDGYptD",
  "key15": "TBHcbZNMULk1afKcohqtMexaZx6Esa7ZuDcy5fCZXErpv9zPBWExCAKqThZiACAXw3ytLBN3nyMehD1TFCVwnoi",
  "key16": "2vW5bfPx5HKJX2S7oBqyQteV85eQWHwPZKSAe7SdqNGd3WcWs5FVhU8mmfhev37AESowcZTXdmBrj6xEK7uZPMA7",
  "key17": "3NuGDpETSuRHYpnzHJF2YYrjHkerx3fA5kVjEpJU5H42UzyRUK8DHsRWjnCKptPKpaEPBvHxLTJk3WGdRKuvHCC4",
  "key18": "31hmGXSYEqauQPzojewLrfWL13SQebiUC3bYd6RYaeCdXzjx9wbkZY2umNriHeWw3Fsno8UaihcSz5rxQFPQVVBa",
  "key19": "24XLGBojtgR9yHWQf8zNjbo56a6JoSyzkxSgKnXa69k2J9k7yBqPE1PwNCQ5KzJ4mFY6gEvXN8AetQNG18VEitp7",
  "key20": "iZZn6X6jp2yi5kgjxwZnpY2oenJHeVMxWkp29Ta7NuxTEUL5jHtsiq5BeZ2M11V75UUSyB5ae5XANt42LWgmmib",
  "key21": "d5sUiiFMXztRo6JiWCCkVsVjaM7USkvxLmE7uRABq5LnqpNAUnDDMNGSi5FrFjSYLJep3tmHJYbd24zeP1bVPtx",
  "key22": "417Rqexq8XzXoshUN5MWkMnQagPWhpSEgG1h714aKEJTKaAJY29fKHcvYgWGQbZFmAt4qnxyG1qqj7y3FKmxh8Jo",
  "key23": "23xzUKEAWVewQfPeXoHeLPSgM4CrP62CiR4RnXLadHBpZgaTFUdDsFpRdvQV8zXXrKzPsBicci9rVupn99iMZRF8",
  "key24": "3ZEgD1znqvscrPDMcvokmCs4U1kHXgkZ4YLoyJr3tjLSxTjikGsF9YzMT7Djy6YikDEL4MqKiaspYtagwoqHwfXg",
  "key25": "3FJoxNjEE5jSqD5M2gw46ANG2GibvTtf7yw4PcBp2tbmp11aCVLy27wNHTYkEQAK4dL1D8ZTcSm2t6kb3oULq5ps",
  "key26": "2h7KBAeZFfdaZbMmxShg7JyfXpfCCHMRhmhNUmFDWrofgZTDpyvh2mBZpTK7TuLyifBCdgHgpuW6BbaiwUuWZPHh"
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
