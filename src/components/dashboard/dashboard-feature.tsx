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
    "gmyhRKFkrttN76dtmARgMuskSt86nrThAw3PSMPESQQZd9d1VZyBGuddPJGyAoYzFFEAvwDtmQiBWE3SmVWGCi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U1JLEsyjYyYBW6oQeRQ6FnPjQoEtSTBwNSHcwz5ZAw5hdJqdyDtRznPp2P4QFhp8BymKUx2ZackFhnqzpWAFPvS",
  "key1": "2RmQ8oY4VivbZz3L4c9Rr528dYx2eyFhFodJwduRitbHgwbYgXwJXF5KsozvXZeDKM1k4MJM7zV6ZNwxkYhJwEsx",
  "key2": "3f91MyoYVs4rjqkokXxcxS8Wnq8jMR1qAGLkW8AZqy7e6mskRtcTBMcW1Hb8GD5YDLKDFrCENeyreQoELm6dBCxN",
  "key3": "3xZZuMJunV94LZaAe3NY7gACprEpr4Mke6FxT4uzKvPMG4iaDJ7hSgmsxM9CpsFtdXPsZqGkJU5M2DJsrsoaBNtA",
  "key4": "4j5CmxBJqdsG4w7Xba3v5nRP2hoYnUfQfSjMD3zxLxqNMDXpyT7HRgdZCUkFUSX2KVgjXzvvF29kpZUvrxHDRva5",
  "key5": "3mUk5tzzaJva755qKm9r218iApygqbrdtPqh4E74yMQ1S4aCf34oLdZhvWzk7ThECmGXJsKgVsuYyAVb7Z3ePvPu",
  "key6": "meHF6u1PqGPzeL92GwZhSiHGErTj9QYNBB3FwxgUVWjxbZiFhWyKGbWeHupTyVS3oozpjW7Ervkte9xn2Dp2R2S",
  "key7": "27MsXdvmFR9VbQmc9WkkPxcepjMWrYv5KAfXTeDik6voUbHMkbvm2UmBdfHKhygr8ERy7csk4P1grpDLPnze4MdC",
  "key8": "4RnUmX6eNWX8XsVTyjzTQVbNmqoyorbkqzZjQA9xyBiQW7Ff2CxMADx74xNk6rkpnYXXgqHuPb2J56zvDseRh3p5",
  "key9": "2L2eZ1tXMKcDfPCPaUsmG7xAFZaZQKy6BgXGjjhiEzCGdHWoVcxf3uDqqfKdmx7E1eK8ex6WPcJYQBtAHSkeEe3b",
  "key10": "65Amaa5x4qGFbkTT351uu4nKsbhxcXEcy9ytjtUAL6TGjVJtpjPAGW3a2t9hWHrAsbnD2a7KuVBMt7XwsgidbLt9",
  "key11": "4UuCfR8ePjvXSx2V1cqGv4ybVg3qAkdR5gFxdPiit2t6iVuBsBK9QmFCxYDsqpNCoqTYL9ViK4CF7e2MKNv1uGjf",
  "key12": "271mL5Stb9gjsmNsz6X3qHvjTG1U3dsj2toBMq2yAR4n96V4DiADoziWzbX96ZpkZnqX15eevPc7qifV3a97jp7d",
  "key13": "5Q9DJxQTYmiKEPDivqYUksXCZaGhLFYwf9gU1BKnb4B2XefY36jpftsmqp5HUc1EHkQWZC2L1y89YqGD6AughgMN",
  "key14": "3L6q23Np95nYW39y8sFsikWX3kfBAskLvH187S87bSXQj1LABD9NdQSPSsyakj9WnrVFWm8cw3t64t134mQpgom8",
  "key15": "4CFzuTYhdRXyBrGm3qs1aaBqJCWUyczMLM7rb8neaJWamDS4waGur6KAJWr4b5nS67x4JcPDWPKMW712gCZgPocU",
  "key16": "3YfoW2URsuuE974hpgEaN4R1M3qitN5BBmvGg7ZdA94SP7TX3bMMBTPWkVEVXvdZPHT99MRFVCuDnpMjo6Bm2xid",
  "key17": "5dYKkVGrpPmSvZrNHxRxurCoA2cr9D18zuXonr2Rjm1wUez7JaoiszkCWdZSaPsCDbaaqThSd7u5nWbUPHsjpuH9",
  "key18": "3dFf3XP5EyqFtxyKqwUo4rhpjjDpuaDmQqF4sVY34YB2AAT1fXynxxJTFexMTkkbaeZctASmfozSmLg8Xdhykrnn",
  "key19": "5p2eq2gTRPHdHQUA32L482svwM8cXbY7Zmeshyh7gGvZB2qZHbkpmv1BDpDkCggu291GHLhKGF1J5siQLYkG4kFe",
  "key20": "2QKhbcPEBoWHSfcnZ7QHGbRFTGbGUbvCGgfwkzS9ratyHkDpT2ixcNxVmchy1nYiw3EiYgU6wCz2eCqWbgBSAxEE",
  "key21": "2kDmfQxcRmXG8TRYE5RXGWG1YLMPcQXFLz9w7o541GzfWSqsFnuk46YPeWe8pihThLjPQVoLB2GD2KzwbH4vuoRx",
  "key22": "2XkFJcRYSHYtULnSP8WyNoFZTpiJN4v3LZjHY1YA7MWFQn9WcrGq9H7K5VLM742rneP4HsKWBM1vLa7vDqExER84",
  "key23": "4yEiB4J7fNUbeFwTV1NcfBbKxvjFJwzoSDxKYWaPxMUjJh8i9UhyqQ64qYpbh6kzC8AbzVG4bVaxeBMxu97Lnai9",
  "key24": "ZHiUrWKmWmp7JqfXAmBigZYKDqDJCh3N2XBfrjrX5tG3Yui7jjvpP2u9mbtvSWjwmAUP1u3y2jtFjr7qxR8v8bA",
  "key25": "2ASvSpZmgXJbXgyYGa1Gc9hiNA7EXe9TtHjSkZgjN8WEabj4TzT7XmDQNYzntBUSuPVUM3kNpEYJ1WDiK1L8AmCV",
  "key26": "2wTUqGssvQtCs3uajWWd8rus3eWJfpNLkqu5zrDCj6ViLaRzVpCCFS6UK73hdWj6RcavggdgNap2pu1GQy7g8HjQ",
  "key27": "9fZnA7Q9gajaZJpxK72N4YUEPk5UKpt28obHy3s77MnySJiZ4hcdU1NLS4g6W6ALmjL6fBzNHkkfkntQ79bEkpw",
  "key28": "4Toq6Nd8SLQt5r7Ac4TfcS6J9AP2JJuJBfBfUb7N25zMS1eN6WFPSmJV1jJ5MBkvd8CEYNvH8cRu23Kbpt4i1LGs",
  "key29": "4S5abEDvcnyG1uM142MePvp6UC2bcqAVEd4eBJi2fNARTWpz4QzRsMJEkdguGLzCoRctdNhkL9JYUPY1BWM2AQR5"
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
