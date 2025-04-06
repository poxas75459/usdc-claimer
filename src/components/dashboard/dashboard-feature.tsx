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
    "2wQZaGKsPUsFF5JgmCziGUWvVnhFVNcg5x2TXhRLbLmsBqQVK4VWfoJqNAE2BJwRPjkmftGXniYoUzvCPWwGV36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R2f5dAQzSo567Hh4fh2SzZS4bhz6GTjFWEPYg3MK4VEYGwwpxtcP1YqSjLzxhPVXYH8hcewmmdYuavj7LHWFCTo",
  "key1": "3hVVzQVxysdL9Ujgyz5q9SQtQGPEPgvcBe5HB6qpfBMjxw1e3rSPyzGU4TN4CxVYY8YxpomAaZ9UpnWcoMds9ZLe",
  "key2": "4s53kLQaFsY7PQPs13nv4k8sJFTSLCRKQm1joz7si7Bj8gQJzxE78gvau9XqwzzFP7MCTaz4z7dkVia4bpH6sK93",
  "key3": "5QQF5A76FsLN91nwKZPDwUFKqwWedWjAuzLXF8wanRG9gZDmPVFx91t8r2cyMxwd4a6Yqkds3p2FeQUXSCMXzhTC",
  "key4": "4viqjGo96G8Rw1uPvXpiGqTHiQbBkiog3CM4vUS97daLtJ1YZxMnnxwgMxbvoWsDfGmg1P1YQDNhYu8grCp3NEim",
  "key5": "4sHz1nxLD7z78tyTBuDpunbQQVFf7UaghQjdSPGfTVcKaYGFsh5MEGPRYQV7om6YcA4JvpYZFP6en5uKRjSfduV5",
  "key6": "4imNwVa7KE3pZL9RYpGKWoabJSgm2g1HWFCqEr8tg5WWjaBFAMUKaHrRSv7QjmtfpvJVBCfCs2PF1NWce4Zaf2bd",
  "key7": "2rAeGtnKBmHUJSf3ZmP1xtE3o8Xy6epUFMZ3mxvi7QHeMqNPirbgm2DL37fjDyjBw66BgeyKetPFzBEQhepGLRDy",
  "key8": "4gTaQWVx34464wTjEt6FyZgwcELAZjcRtcFDWbMU4Pj8o8eRczhQpiZdbcdTYsakLjHDhx7E5DjCSWMJTGU7JrT",
  "key9": "3qvr1uhWsLEUPmZBUHbhJAJ8VusTc6npWAedo4AUr79RMM6aXe45E1tftaeMmnUXNKLHGfiQXJ7gg9wA57qXq4kg",
  "key10": "zdUQmaLft3ZxhQup6kjsLvUx3F5tBSwTHT48oYBRHA2sveRyzLLKtV51F4wMLTsYYCeuMMRRNDYhxU82waDgGhh",
  "key11": "5Q5oVitjWME6764JDfu793mgKYpkzD8SwJjBQSFz3NkX3eWcKVTmmMVfCB29jcf5hY8xLqTqxsU4mhZ8pbmkh2yn",
  "key12": "5XSzqVVBmFGQKyvedZ3QDCj65w8EynCLmEQcZPvCtFpj3kfB9hfkRe48qyLLiNr2XiYPxFGagFwK6gDnae22ZePp",
  "key13": "5FjNuSe6epu6scvUEJKrVqyHahsM8Yuu73QofBu5R5gRUzYz4vFNkovindf4u2SxuJz6keePJttcTtuLBGuGTUDz",
  "key14": "5c9mWH1FSgSdtr9f6YTVHfB2SZYo9aGQrJVpBDcqkB4rrc6sJWZSgMPvxAb5yhSoAxBwmV7uC1osr39JCW8pD47M",
  "key15": "4KaNFci4A2cy3MuPKVn1nwY6FxxikQVLPGVo68VM77yk4mEMdK7vxw5wtGvscZQX3EHpd9gvH3LPfkYubWaVBAQF",
  "key16": "SRVqRChMVj5Y5QdHSiwGXn9mmtnyU6p4F7KW2wQc8nrzcYA9Hucgyx8HaJFNfPRBReF9NpFfEfzmXmtbVWUV1eM",
  "key17": "3WYBpim72UAD4ZNGL3c6pbyPACd5KNWsqWrfoXCLeNGua6SGZvKjUsKTnFDu6BoerFBD39wwsFMqeyP6UoQ6dBfn",
  "key18": "4GL1EqQwh1WbuVC21pSQNkGkYAJkNz3aBaCCQ9QuMT6KGSAhcsgYdQHtSKXeD1vyzThzzjzUoHeFracwaNxxzfhA",
  "key19": "512KE9ViBQ8kdeHyTYc3J2VMT65EM3gDFcNamyrZYsRiedUgzrrVSYr4xwUX42yTSWmvgFUWAGb85w4XSDah6zEp",
  "key20": "4XwxChcJYyAoFKdzv4bVPpZuWrafEv8gkjqufD2gqjQsxyLoFhPciDnPty1Xqv7KBJQ3VsYw92iMab3ddQqhxw7d",
  "key21": "rjBGJhVY56ZB3gPiFmUZW8hYY8fuMKaRivDsWTP5TfXY4hvbJeYsCe7FrfdT8CQyQgoBPwZqhZrKRn2V3fUPs88",
  "key22": "3TEJF3viEtXyTV95qpwKimTo6XiJZ2ysDDf5vPZeAHtjzjRX6zGtJpBwX2ebgYAYEKwz4jDqPTGAJMgwzsmeykKe",
  "key23": "3tyiR8CAzBXgNmPristrWD235XzKaAFf9fLmvyzGDvtazYBhYJSdSJ8SaBcnnQRbnihA9PHyZ69Tw3EaQjC6Rnuc",
  "key24": "59BgyKLmXb92UABA7iJ4yJDcfbk6pdGJw3MB7vHHnVsCeoA7utzY2rw7p39TbKjNbFt9w1XxsJ1eLea3cde9KfH6"
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
