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
    "3NNHNGu5zriYaah6rAf6LgHxQ6PhnVdrCSFmzG4bhuTTN2MJucge6JAnyMGQMaZKAkVcramj2oUMa2G7FT7dJnZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jEJqFKeUtoMAYCcL8i3nvPY2hxhNAKVKmz7aSLrpEjAWb4wzMKcV67zWr56uT9Ytn7WuXvByLRmVfKXb4AZMrfC",
  "key1": "536UTud1RhCEruwdUMFHuGX8Fvghr1DBjuC3bRCE1SmaEha6FBPx9EE7hKVq4yc7fKhS2GxAdq3SpJ3xzjTLK4Dj",
  "key2": "4WDr4HgQmCQsJ6UVH9A3boH4ivVZNTuEvQeUYYtsAvtENn6E9WvCa3kA1FjxAetVtnwHJdomJq6xG6hPdxdCS28s",
  "key3": "2Ehbs2YE9eiaqDroG5wQH36KxaAnmHXAUzBpyCtNEN5LqWf9CysGy1a7fjdbvJ9SV7kK6qJt3hTk8ykQXZXkfv3S",
  "key4": "4bpcsPSFnnxS1eFkmsP69SfgGzuEfzxJW4PMEsnk7ofMg5S1vnqnKkFKcU2zPpi1LxXe4RDLXiwrQWEcttzADUCT",
  "key5": "f24f8mmdEEJe7Qsjnj71ha88Z18AwRRrSvnqvZLwF2LB6ppcziYXUTnFZounHbLM2h3Pewqi1wkVP3PwNMURmYZ",
  "key6": "53EcqPHZcqEYpSRJ51W2Bi4n1QLsuAJXTDq3MRboUp4nXBVV3VexCjbwdpZAXwPQZfAjV3SZwWWMnzbKRnp89Uyp",
  "key7": "48n5LBp5nnWnoW6T7tVcEorAxbxScxKp1KmRoz6NxWE1Cgt2LUYMsa8dR4epbTTRjNdXjnmXEtx6R3CQzgpd85qo",
  "key8": "4Maw1oKcAZH2pzqsBHi4naWjpVPXstD2sgEhDQern1UKT1bWdvg5kgZDBjoS8BPbzraG4Yr3QmVCoreorWyWfsx7",
  "key9": "4ZzBhG3swH2ogd3Ugzz9zctUwchTBVym5ztk7PdEptAi3uyvHPSZ8sdCTYBy32peDJdQ3yDgzpteJXdFaQgJwVFW",
  "key10": "3AVswg6oZmdsVTPTRtS4pbRLiPA5XotSNUnsb4aJ1UpFYP5XhNQoJtQ7hVmbB9SjNHFpfsMctt6nF42uCNz44w8p",
  "key11": "V9xCbTELrFeEdn6jfF9dHizjQZMu4nQDzAeY5toetnJtfFC3Qdjs37cmbB6edQ2Sd7dZpkpTHF9qfUWT5kEWo6E",
  "key12": "4LN1Na1pz1vrM5BjWfUZZ6ymH3ieYmR1FFe5aLzKF6oGNE4e4xUdp6yKMjNwGVQS6DdyhQWATu3kyMpxZkUoiVLM",
  "key13": "4uS4Cprf18Mo7GUoVTpEq71jj5vXN1GCVi4jw5RiEcHdHJCJzcyo6rfqwAztdBw7tvR9EMSxgf3mLBvWvzrfycBb",
  "key14": "UkFmPxo8hZq3jfxyZUiU8ZwLCE3xHePdxgNpR1TeVAQs7h2uW8Hb3oPNTTWyEbEiCceBXL9jzGY2uXjss7rfn65",
  "key15": "2nrrXaZNS2Leq2oUtLDofRbtzFzzaeYYKU7wMBiHbkyD22XH2QrtwBcpkuyehPFi3csXRpbAuJ8omL6fkoGSspWy",
  "key16": "YhDqbdhH3TECQd2nq78QUgbaBA31xKEmkLwLJXJGszm9hJiox1EzJhiV6TS6QYZDXv3vf4KDPauxZRxH2nsTu8J",
  "key17": "4yxN8R5UeTUCdPhX6hXrWXyL53am7s2z4JLGhp9MF3g4HhnwoXFz8KQCfHcJHepUHgWSLLZV9xz1aAhezGELpdqf",
  "key18": "PEUUuau1aZCSRYiL7qiuTze7rx3aXvLS4dCyZi7oJFZL8CTDnVoziR6uV1Xar8BTRFKgjVNfBnvswhoD1XSYe2S",
  "key19": "531tgaZqaBaGNirKaN8aXrmaSUwSo9QRrK5nRi741zpKJqV3Q4a9DqrXewuK6efAJahbaENPen7u6mwv7KbcYkUB",
  "key20": "57XSouyAx69zEaYUQ3D7EgYMcAYJ35u7MtMEJN922jLqFHphDwAnpx8TBUp3E2YKuzt2DLtbMZ99PEWbQAc89NZX",
  "key21": "3EGCGJvNgNxFE3t9z5Tx9LoL7Ta83uXssjxXqKzJ5gVoXfGCbq53T3NgUn67q4jXQNnDYUj4ky3dNN3PU5t2GyD1",
  "key22": "2T8JKCZ5VKKZ8DaXavznzgCD3MW9wDV5gviFivDsNvNpkhRg1oK325aQKPkVD2EuFN5g97sqWn5R8Md2ZM4nMaph",
  "key23": "5mg53Y34tWemssFBejQgVa2o9v3Y1S9auDp1jhaWZXAS3DPJn3kYvoXu5fHk3u3h1JuAn2uTPErfWtuL1ugwFqyH",
  "key24": "2v4Us7oEoJeKSZ13nSv6eLmcybzciNJEZPHstRDYeDTK2hpR6Pxk3jKEr3yTm8pu8Zyfz9mNcsP39LDdHnyUMibK",
  "key25": "4gDQ5AfutdQH3DHC6uLTq7wFA7kAsaVEXkJFcnZsxV4tz9psk9tcGozuNjJyK6pfATUC7QE3i7jeXJSejdqETRpw",
  "key26": "41XTuYPYSCFpjyfsSDQSmJRNXfW5pK1cMGU9Z5SzEdFoSN3VWuMz7SZM42NEgLnwrgLL2S7q5NsjNrKtbyVxtWkT"
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
