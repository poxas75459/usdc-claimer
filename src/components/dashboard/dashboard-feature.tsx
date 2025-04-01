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
    "aa39nAgLLBawj7KdJSVsgW3cxEdVa4g3MiuegecywFyFcR7Qia1sHGKBq5517BL2m1skoksUaQx33FG3eeUY2Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqFqy8v8tJz6tAeXrd1nuvhcgz4CgoGxp64xNQ49AtH79iHK3Hc6zS95aerafAQxZhQR7A2GyWFRTsvxJNd8x4b",
  "key1": "2tAEE2Jq1dNXkkrhq2mvT28bfmqDsq8LcyMuWuGQmHjFvay2NJSNC2zQ3hfdwUzz4a266DexpLVRFaChrZxqbhiv",
  "key2": "UjjB37kCf4hvdPBqWkz2vPvLE3jYDoq4UMRUuRtAcza61DFAqHNpQsp9ZFzLXmUvNQqB4gZPL8uWxTduHGmcG2C",
  "key3": "3XCif21HWvSfwVzxiwtr7tmmKVY8ZTbabBbjirKZHCdANk7VnmyUTRFxwYBxuB4jKHJ9AYoWFM4G9JPkQeHQ9oWC",
  "key4": "C99KYGXLvYtZ51sR2Kftevr6RpzAGwQBgsYutEJeWkJ2dAbZC2yEpnvpxAWhQqFiYJEjUdAHMeLScig7wwt396P",
  "key5": "5XmmidR7yHPd5HgHzW8zQCnnNsDk758iCBmEmnVzVAHsZHHL8nj7G2U5aqj2jG6dR5WswipzNUePfaPBAwGdoqKY",
  "key6": "4LVKimXkTMStDbBvekJEe7zTtkA8aJeihpR4vwkXgZDq5PsyFiqKSvmuRAsUXs9N1h4JpgzdrfoK4721G6oZhH8p",
  "key7": "2tiaNTY2Cyzqe5H2UJLiP2eWhMy6yqpWt8bHF9oDbz3vjfmYoxcMWY6uXLUFBW3jXbXnxu8hwM5LHhs83AGmADNW",
  "key8": "5cKGFFxMcfYapyAk7kQvEFQZ9SVUxHiGeTx3keZj4pfdnCDczGzbUDSGHyot1QVbSgXkGkwMnC4QewmM8vDSKHYW",
  "key9": "dgnCzNUkjHQTMAjPiw1EkkAxuVQ3Jtek9EVTbEksndbvss9XPWNuP2s3hacFQNGd8AdYEXdpcbMzKBa7kHy2aJS",
  "key10": "5Q7be6iMaWYxf94MffLLUAgdgE3dNVovLbtAJsiTVMXeWPiJbkRMmCh8Bw8hRdnpf6NcEBpsLrFqUauTKdqyvBiM",
  "key11": "64r442M62f7MUxujUDYowtDdC93YV5HsFLbGETQGXzjx9FzQWGRCh1HaPARsgY6kGAe18PeYKRJxHCBr2swZrDqs",
  "key12": "3FJwcqqZy8hk2CX2AoJ2Y43Fg86GTmsiwGQoRtHiokTL2XhqPfVRLZoJCvhcwFaeMfBS9XC7GMVEqiSkFttVYiAA",
  "key13": "3BEmDvSfxw16ir5fbDPfm6NskPX5WfJ9qTSaNNL9kzJmxiVdS3TK5hTHVM1PRdNzBMoGQrSxdrDcrCN9DiCKQSKX",
  "key14": "37x2VMuwiKw2vrBHPFqu2VpcBMNs9VNFTvsw9is8Zgir3rS6DNp3o582kXooNaRV8Zm8mefD2gwY6uFNLhL6KWo7",
  "key15": "2aebXD3tSrDyNEYjvvGbw88nLUspQmuQ87LEY3b7c2XmdWnrhFui7whLBbD4HLbTNZKwtSy2JTjaXbjWzg4ygy4Y",
  "key16": "4MAEnH5WRzmsiyHbJjsLvNHLpiT6CV2WK6NprxGM97vdtCzkT7gKvBpwRAPG3wGJVJamrHcAirh23pxKKwB7bBor",
  "key17": "27X8kux7fRfmrDH2iwtJLQHWpzZjiM2TyW4dYEZPz77iQLTvi4oop8VNWovbEfcKFhfERYyyULhhTPFDAjdA17VE",
  "key18": "44pXWPKu5xMhLj1djSujt8bobyULUjqCjcTFdT8YYgPZh9YLRPnefMEBxdhACjhapHbWMPwY3WVUMuqX2WwbZeJQ",
  "key19": "2KRgvgxqXyFjfEoRT8ptAV7VukPJh43hdMnwAzz7qSTKK3J37GH8E7UQE1Bi72ZNjGBTmRkZhRT1ACM329P1GMXS",
  "key20": "dSMnoC9C21kdJnsFE9jVhfX8oRYA6T14vKmToGtN3MxWAZFobAv6kzLe4DLM3347Pi7U9QJru4xDzuKvJhGPL5X",
  "key21": "4kmcgP8vBVuDV8YxmTk2S2V6v2KKAfexHnffcae6xDHd1DysDvxan5LkPftf41BmAGTsED8VJiQv6j9dbr3ra6Ry",
  "key22": "5NrDRvQHRbKPrNySLQPE78VWZk77z44sLxeJLYt7Y448Fshzb2tNEKNdCT5xGpL4Wz7fJvtQDLTKz2kSgPuBBYjq",
  "key23": "4H8CBu3vJnJWuD92Bf6ReFvHBD3jgVuzLJ1g6hxUCvLMEkq76dZSMYDdQXbGFCGiK59sL5DHdZegoygqM4Dvh9rJ",
  "key24": "5MywnJRJt6V1iux4KnqjzeGiWeHeW5k957vkAZMN4DziLYMqgDtzy5Ff8bac6z3t62TV5U9oquyVfesxZjuhRGCy",
  "key25": "4DWTtes1ecvyHAtfqVjkKp9zFxaiwVtDQaE5YYzPGWxrK7Hu2nfkbbqKn7w1e5qyrDjMFity8h6cCFe39mFutE7a",
  "key26": "66UtXTovUUoHEmKY7t4SQU5xhaivTHyFBcKaePWCV9R7wgumubfyN6QjMvUpYRJ8rvRaQVbwHHnM4pcg9bGhQPWF",
  "key27": "3pTtbSAMCbs2JJRUUAxgecE4HXCbvCCLA4ujMj6DWW8Z2kGh38WAqzXBAT6WEkKmD1LNV8H4WhfMf6UaWZTkgyeE",
  "key28": "4aaL1YPYd7vWCd65PMWKUx8nHSB5rzViMxFyCD1Qhu7yrPmGymTmwbcAfoNVVgyBxRDvHd5pT6yKVRioq1g9DZ4R"
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
