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
    "3ib5aR3f4qK1ranpYfmVZdRN1ZnLRWY7iEJsmFah2kfzfQZK1rQvpQ9VakQwNHjT1DXGaQYUsytfuqmULuEmmD67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ogruvpbdVbpZF6LQZKw62MGDJg6BBBC5iDAE3EmqC1aCZ7TQQbprjx1TKSS8TftQQVrL1pkYZXMk97fJ5tfuEg1",
  "key1": "4CNAZ2WBLTgfqtwUW14xmCAuhNRbEuaF8VbN3UwhJG8Kjiy8NwvCY7BFuzqgNQ1DH6PCjo2KSgmDRW72N3AEC1q3",
  "key2": "4Dbxz8KaktF3RUNgLXjMXFVDg6frwQqGCB6TiGdYiRxCAZzYP6KtyFyv2RFbSLsfYeCB6Nd9z3tkKgpUvr3tjJob",
  "key3": "5pw1aD5efcdb4p4p3kgU54iXpiZgAYoULQoT7U2KWZa8Hd6dhikdnHBFzkSCGvCj2oHcPfj17JhE8qWf7pHE9Mve",
  "key4": "We5nevhBUAiFq3b5gSP5woFzLmvT61zQXEBdHJRfEeQjE8FcMCRJu8MeAWTJjfgmg8E2LBn3eA5cMN1tTDr591L",
  "key5": "2djaSUPdcG5RA67hUJD9pqMPgmDrGXZAZMQ63xsJKyqeXHo5JyeFBiK6hUof5hNtZtoubimgaKmLCQAHRypaomrP",
  "key6": "4VTBMGVBdHsMZZtrPxvaoQFBNPy7VjtgHsoiokuNG9CJQStAHteukDwLFY2Evq1KeU7h94Z5Ezzkekx1yRfW5v5q",
  "key7": "4cQ5skpLXAVdcjPKgU2eguoWmXWp57ZUMp4rdDmsjpmN1RQ76PCFhVmqDJ94xkgt2a63eJDP5vHaWg44ibomEbhZ",
  "key8": "4dVJhn58Y6EgZXcA7t2taVbEr9QbPEU2zjgnbsRdtrKs4mKDy5LN1wu6FoB2uCPnAgvNLBF8uYMN6WRyLzw6B7Mz",
  "key9": "3Tt4JnrHPHCVX4JPQLPQm2qMuVW83WjEWomSX6zdKjucAA8iNY88zZkSNUSfZKv4zKkR8D36yvxeXSSJvWK1w7gR",
  "key10": "5aKoFokSc2fs1fjtd2AAxsjP5rf4DyjUoEkgFRM8yQT9mmDbH5XJVQyRVHvUzPf9M2ddLqjLBjmWRge8ugVuwhmt",
  "key11": "qE7HQBjao4fcGkDB9ZjGB8sRw4zSrBSVda9VSVovRDquMWArgWo6d4EDLhMN41jjexY9D8gFHhB8kz7GN1skuWt",
  "key12": "5sis2XJ1fv5Sc7SG3UprZhKNi89QWPHTGRVfmmKBKokKsdjjHgETe6on4dujiGq1dGnYZFgSYWq7rKNK5FP6AfZy",
  "key13": "4workcGB1KZviPWYG4ACdnA8MUTfMrY7fS5Mcg1U5TZ1tSX9emJt4jto2Z9RW6ygnnEugkYzEfhae4kNFMHLP3Uc",
  "key14": "3h6pjmmN2hAWTnSCQzQF7upDWqaPQbnVTReNiv16rNGhqi5ib4HZb1RaSs64pksK21J7ttSzyGpGMjpadaQB6KxX",
  "key15": "4qcpccp3bVohANmwvmvFunPjMVc3rgKbJNoNLMB6S2kV7Y4cSNbkEPLj6FEViSw4Mnr5H8avRaJ9WSUUkCnFizun",
  "key16": "4Be33v7kST1AjXWScg4JiesGM9Abj5hippFMm2n73wNCGgKCRgeSGT6Uj6PXZv7JU6cU1RXFFBJtpgqJca8thHXR",
  "key17": "4ynnKi4ekXhcwYL2NFtET9P9rbX3F5zc6bnKQq9GRwQTT8aV49NeDGue9EY3SSqJepDhHdGTA2WyFxdxingyWJMm",
  "key18": "vRBS4P4SXPiBEyC7f251KD82A7R7ycJhPJzXZcaUSzf29R9i27AR9BbvoFTM9Jeiu7P35rfwgVEPF2umNp8NheX",
  "key19": "2FyNYn4wQB1iBTsfQdvrh4tYQnszqyTYzYmXzce4knmXymZeHMQGuMMrRQYATp4M6nQauFvfykpvw6H54yuAb2Gh",
  "key20": "29NbfPzbdVGh57CP9qqr8fnzhc5K51FRMD2Tp9WWudew3njVQyJPx99x2hwJc8rpSnampyZYA6NnCGhXb1yJko89",
  "key21": "2E2LZdnf9bXDHYaYPfmFumheDFdhnbNsXxNDSsz8tJZMoxF38vqcTMaHeTFSNBxKcEmWrnRrpnRiJn8Vk3ikPHJ1",
  "key22": "5FW29TP6dJneXTE8pf9AP5z6NEH74FERpYkpXhi7LNJv6z259nmDtbtoPx6sXctqEdwNpubFuarABeyrs3q7HUM8",
  "key23": "3LoTzjLtHKJSG1B4HfeB1GDS2ChW4akhGQHWJMNNZFxfwqUGYQQMuzx33wUXPSM6wEjFyq8aeWpkidRYbaUKZz3C",
  "key24": "2c9Rj9znASbqFyQamWcDWDzJka8wWst5bq7FFVTjPuXi6mEhKuejLxTFipcvCqhcehmHtXVmFAL7JGRKNVHKTPTC",
  "key25": "3YzpTDxxk9rMWXAVcBvSR6ZmFxfmD8kEkMN8U61WCE5aFGnHAwz3DLKMv1ULYQj7MTLHKMMzzddk8e26yxJWBK1e",
  "key26": "4vM8L6SKfnArmuA7Chyt3kWQCFRcE99XXu3aezabPKssdUXDbnfs2iZx7mqTdJ9PPm4QTkyhRG9UqUqXgDTxXfiZ",
  "key27": "66sy2VHm4ECGxXRhNYoBW3S6tvRuVQKASzraMFiyYQPcxY3o4EYUuCVDnWyzXfy96oMzcEhpW3m6VVgiKBKWVyi9",
  "key28": "3R1Lq7Enuj2bbA2peLdyvZH81Q2QTf4EsHRv2v9jbctHgwU799t5NB3AfQtM546eUJU5mUaiwQDqtdJZU98rxG6f"
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
