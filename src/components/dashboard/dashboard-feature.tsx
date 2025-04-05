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
    "33aDNBCwdBHwCAZoA7NFYxu5QB8h32hxsn4GgTHWK8uXbcovhWrpkidun6if4xnpgVhQYoTRRxyKhqJZeVkBXMSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aL6so57FBYXJLRC4n9VjrT997GFQkrm3deKGezqXpRyTn5PPcPBWktDLJ4dvbYwQ1CW8gFKUkwxmi2RPeoowH2S",
  "key1": "4mXcK3gNbPzzgpa4LRZjS2L7Z7nhQTyFgEt8qda1TeTPtE15tA1AtCnuj3mJ7BSrz3PjWpEunpthrjxx6TXB1srj",
  "key2": "5tc98Z3no2f26UVn19i8xXmeWCWdp9Wgmuvshv7984gRKDpuvP72yKiX7rt4g6RwnGeLCaj2WHVSoBsCy8QqAqJn",
  "key3": "6mVmAd4AfJi1stjxFC5HH7Mdi6Zm4pryCUUcZw1DVZAPH3zfa3oZreoSp5pyyM5gt4dtfpDRqRhDpTq2vokofJY",
  "key4": "3JdYXAabXp6onspQv8W3QTapVrqV1ceZp5cambjeEFBbLsf6TKjtS75ihG4fDZNHNDnRU4yofJACbJXFNur12hUU",
  "key5": "4qixkjToPmjb64YNxS6cXfdurSA5jWvxQanZ4PQee3B1tPDEMKtdCL3kfrK8pHS7dWJMqQNGqTPR8CmAqdMAi3j",
  "key6": "bQrRbr5ueVWfnTgAKLLbtfXYAGiSMUBfmGEQT8dm3AYonC6udV9MaQ1WHRGS5WJDZaD9VYXyXqP6cgCeDtKCx5i",
  "key7": "4agbvBiFmxo3MQ8S1dPQA4L5cHYbSXPcMo8FbodKhJHkvrphb6oNbzHicgMDyMhhJHmZ64svgDrjdRxhagHDUySd",
  "key8": "2VrTmj4A8jtTK83VvAfw3ysuQkLg9TE2EshokRfB3iCjLsDuRyNS2yZNBbnPgSCYWGWBJnW9gTXxcrmbVhypXxgv",
  "key9": "2ttMwVoNLs1gJDzWaypDexnNrwAp5FJztKiR6So479UmGUTi1348mCKZgPevZYtk2GeZncdCCyfbiSaCbuaAdUsC",
  "key10": "5J5VpDJ2mewjMQ1itjf4sLz6nN5pf13RgqRywxcD7ePvJiq4NWfbve9DtwFumd9QCGWuU4guXNGR5ovLQCFYfguN",
  "key11": "4WnopbYPAFVZMLQNfZVTNpR3ChjEiW1Cfw7Sh4k6vrgv27Q4AXfR5bPhW11rxRWs2PdKbTJ73cJrn73p91VBQApM",
  "key12": "3tTtpfGxNfGnVXUpqAU8U6Zvg88aArpeKfzm5TCwWMDBwuCkEVoxV9ySq431NJX2F4KtRtPbSsHUQwyNrnSYKAG9",
  "key13": "5Agez7YRNd699gnuv96J3J3stKGG6jzWikVTUEHpzcBxeftFBvvhvjTbRhWoGYBG36KdEcLPPNvKqfTtT57ryMJG",
  "key14": "4jhaMP7xCxfkJwfBSWgXHbSvd289qmCcviuDtFS7ywp4KsABR1FPw2znUi4qhS7h2Uc5heEWVpimBGxdrtiSPXrm",
  "key15": "49tGYuLXHMHVQbRHjvixYNPzCrDjcutUZoXPJDfkhgCNBXHFJqYatVsRnA1rV8a8e1yJD4GB5sGjFnLePiFLMjU6",
  "key16": "WLhQaTHpfPdx1bBNa4qLDpKsWphCALzm8dmKjwYXmwwvwu8uWFW3LbqehngYyNEEgMX3jBPFowwisP8hBuifDbz",
  "key17": "363NAHpD45x6KQ7kA2AVj9fbtMFddEA6rgZD97XRBVRuNGaJQa2z74WucfEa2TjEPsWLi3ZgoatCcWhqCWbW4ebA",
  "key18": "4hgnUDHFW2BTUXbKnqv1V7qR8asLGx5HVFAVTqKNwRxpkQ9eECw9nkEeXThYbJPAoY66sgMCS4fk948XECD35hiS",
  "key19": "2Q8o9g5DTLKxsJ4Lo9M5Leqie47izHem3rbxruoKWwgVMEdrVYdnFr2Pj3vxLfdbzBcHEKmtAz8ZgFM9uJb8EpZU",
  "key20": "5yrV5YQk5rWdUBYe7P7pmKCTt7Dub5TgmZGDKRv5ajr7uTjPgxVsK7icaNBvBetw2t3ZktKxjjBP5NAirWoeC4Wi",
  "key21": "2kqUk2S4L5ZjK7MGEwo1KMDw1vL8jsnGrLtwDdfUxxv94YLZNdAK5JzDgBB6dBMAzCzTn5LasatzNPR8MDswmBfJ",
  "key22": "5PNSoxtKYQJPg2WBgSZVKYax5kRK52GtaH2F7QGLbxy59f3sBgDYQnajZ25Kgh1ivs51PiqVhD7rxuUdSVrSr4kx",
  "key23": "4EMU9MW5q1SCPx8jy7h6Q7ToddvBEGa8Lfb43iYhtHGr71EPz1xS7uHQaBbHPnLGpsPfpyjgdnyBie4KTeFQVi4o",
  "key24": "2jCC5sf6rL4qTbMBaE7fWFKjXto7EUMzfUHzCmnKukvkgzXwAsRAFHrQtuUp3jxbCwzsTMCaq55PYCzuX9Abakx1",
  "key25": "3WGTjDfiwSpFSJUfyboRgbHi38ETBtCBMAKUNcoCrLc8qZDpWvQZ6567nVxGr2Qg5xBKp7SynSswwXdsBN2dpSP4",
  "key26": "5FerGjuw4Ynonz2kW5GCcuynsj8iApTvNpKvdcmbzdCV3R1Qkgd32v1iCDxyte5hFWr7bHeHAuhs19kr9dUUCamg",
  "key27": "3Ewj4HvKYLAVM5pCrd9c5txvsrsRU7o4XFofWDo8GDd1zCaH7BQraE4CxFa2LDbUArUeLPzkU57rk8sQncEHR4r",
  "key28": "3aKJ4fwHrY7aXXj35Jwyy2sAAKcEgLsm4H2RppEWwrdcLKmZZh3hrP5P3cCjVuB1itXRDS1MJdPtrzFZW6a1vyPV",
  "key29": "63KkQM5yN1Rd8Zj1nun4Qj9GPQra8YqPHE7BbbRoEp3TbMQx3pdDeTo5Wu9r9SKufLXv4gmAuhEoGRadtoLpvXLp"
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
