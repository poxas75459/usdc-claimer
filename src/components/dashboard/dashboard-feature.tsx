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
    "2mvk9SdDpvT2Uf6yd5C7KSnyXCVXdqKPUtNAPeapdNYi94uwAN654EkTAp4yB1FcBRJJZHf6oqR8oSCEoHPuqFfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BExhQysYhMPvc8a3LNsBr8TEWrCjAjXjnDJJyY5iLvsGvkb5SLfEJjgozztL7aV5iJ3nmciHxmS1j6Yo5jDHQ1W",
  "key1": "3yAUWNBbTBkqUYWmAajM4vbMjvm8osgpq9aZrpnD1FHAEovHXz3cuHsWDJqu71QfLfeQT3DgRw1Ex7hxL6t5gKy5",
  "key2": "epxL79AWC5jcx7DJCpufQo5RXJMGiPSjG7GUcMMXUoGmJguYxgpNj9T8DDWvzxVwoRGYAsjgbvY7EHNEt3Kgo3P",
  "key3": "3C7tFmYRjSEVZzm6epjEABRBKKtXtT9Ta8en5DtZJ4D79KrZQbRsg2CLNfeBrykN5Rm5ktnLC7DTRLgEKAUUtZ4t",
  "key4": "5jrHj9XLfxcLGuTRouUNEww7hgyHQQKzB4uLVsMYoniNWSwr8Em4PBQwxFSY4qVvA97i3aRV4xWsst4BFSZpxVB8",
  "key5": "czLPwtzyCQW6bK2WfeuvzAFpSnnb4CsVRFnskjbuAKDBYefL8Jo8LSnqadSb96RNHqBSxnCTRZ5r1C27iqEoZGM",
  "key6": "4He1dcs68F5o8XLs9PiYkZSkoLQpXaRGCFAe8BmrTzbfDgkSreBUeuioGcnxDsp6HMxynfiJWGSTCUpstTfCkfQC",
  "key7": "QyM1QNwWjU8QwmSfjHpLu3mczkNh1AZoRKpbyZFefEUuuxJhy9LAsNixg675TENW4fLQGKnAwrYKsNnmz6kpjco",
  "key8": "3AbiU28V8tVLHQdYyPmrR528Cihx3zuM3pkVGKmBAq91i7kJ7z3f29oTtQ8N2VZMEeXsD6eZEi69Rzv4j7b3rHx3",
  "key9": "33FJ86PCw72QtPKDHPi7dULbFkTyBSFhkHdKhk4aAFesc5xwxUjMHK4htizJBRoeuxep8nh5DbixvRGaSifkZXBW",
  "key10": "26ZKcwnnyJxF4ifufDRwwdoDVwNsHR1yKiQacTKRoJi7WG28w6a2LEPtuGnZiibetafiPf9mG9Uqx5oGF5hrceyf",
  "key11": "2ZP4NwFGp1u4kw7k5HEsrYVxF13EMQw8W5i1f5DZt5r8MjMyjUb9ogSxW77MwnQZNaZ5pZ3tM1pvXgNdeVKmAWPK",
  "key12": "2RQcZfdh3E3FYZgR6C3Qsq9rf4fgd9Ba6HvBbqnVBEFvHSFgtMEAKpq66eG4wHPZEZeTxgJqMkVb7EntL1LUPmyn",
  "key13": "3AgzxQicMbD7NSHsyLNMEaGHdspGriTDDBaTNeWfXTpzNDMuJ19EXsBYcqVZf8bdooztRCcjAhCERs3aPveDEXwy",
  "key14": "5uDb1g3PuATS4Tmaf2u14Bn9uSe5v4hqSFP5Eu7rDsaA54GtVXPuvG6hxCQsiHMzndUHYGbJFesMMJxi7u5M4idx",
  "key15": "pHZpv4GexRcKHVrNBpSf15Xmx8nAw123DsHTqwPNGz58WHL56GyoKheG12zBuVKJvX8dtqYWZDH4pCvKA8AJZfS",
  "key16": "2Hs5EfxHkbDj9BEdLEEfnNVnvjnZppkQKcfZ3RbCtdSdyXsfu2seb1sifhuvwTHqaHQ3NgbrkJpfkGqrcYBVSFd5",
  "key17": "4iQoPkMwMyRy218ggVqMVbEMomAKeaRAe92meva9dL1f7ev1s6iP9xxYma3gqAxp33SBDHrrwrdV4a3UvRx55ZUY",
  "key18": "3eDHVPfWjQNFb2NgEsy2YEroHj2brJHf7chLJCu32bbHqGXEZ6zcFZHGy5AKFG1Co46yc41w569i1Qa937kzBVnh",
  "key19": "3bwQZKQAwEYTCF8Gebbr2CQhYF5jaj9rS5bh18akxUDaTyKHxoij68G7vVgfjZrS8AW6zkSPFacdNREBF7KM6jUo",
  "key20": "2uqaxnD5TVVhAN5RSCRWsPt8XF3BbSzNE88u9TyWmC62BqfKAFzpB7qNWsyPA776Q2JKKSXrbjCkZMzJ1Cn24jcv",
  "key21": "2WbZgCr2JVh525W6h7CVrBxbGEcZHK9XdhjY8GvdQyRjQzEEH8o2C3zSyxKFiESbk8K3NHbqBRQc5emb1P1x9DaQ",
  "key22": "4jwfU5wPT8ssSSfvEuZctxWfnhF2Zq6PForfG58zwtWTdMNJXDtVpi2hEcHGjcj4Y22WsNRzN6zTUApjJTw514e2",
  "key23": "3VooJPbeVt6XBWMf6qBoc7K63Wc3DTBCGsztM5Cr4PqUdteWVhiEeRzE6oaGX3vNEB4AzRZLNyFzu17vVGjtPt6C",
  "key24": "3J7h6qFeXNFaj5HUJ3E9yn7SSLKYSevyFexKYNmK8G5Ziso7k4FyfFMQ6BG3Qh3EHMztSH7Ye16JMzhpEK1GuhWQ",
  "key25": "3Jvx6evEfFCfdFshgjcuKHmnhkT2p9QXzPE2ppTCHRM5CNUHqU5PfoHMidJBtEzYZoHBjmRX3dk5uZnM9SijvTW9",
  "key26": "4vGjdU98pjGzL9BbumkzjShsaZRfqYGVHXudSvVj1oUFde72qgBD7RvTYWtGTpU2TpoVALTB1uMTJp9WBQAdyDMS",
  "key27": "8FmdYKUR8a98kAftakmbhbazmLd71nAbxkbCqtHCUxqSCjPUdhNc7Gdi974WGazwVXNKv3YvwHohn863sUei84i",
  "key28": "59hFsfzkLtn2JXVnt52VKzUbUF9Ae8D62mGCYxCcDCRqLaDKG1zXusLnQwNKZ8CxzUwcQevo2ga6Wy8ondBXRD34",
  "key29": "4EzHGyXUKGUKsqmdJiBm3RDSw2L33wHJ4btnK6ZgzsSNNDGFtPq99jrVh7PxygADC5opx1fqP2Mc7qsQZJ3VsWEJ"
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
