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
    "4GyMYtKBeRHTjLe77VoqWKz8dYqHJQwYJamcmM9BAgkdJg8oqSE8nA9m9beEBy6snJLAzPT9LnZAdWqPdV7QcqY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jp3P8z4xYN8FbmLbq5RnTgdQXMXJ8SQqVqNAxh6eks45VVgBhPcC7FLXNzTQopiZgkEUeRMEyU6CzrRrGhGtPC",
  "key1": "5BdoL5vLsHHnU3JZRiNN7nKxr3r7VaBbs2ujic1n2WaXwtVkxVJQv1wRAsBuBBWsJtiEYG8SEJrpyz8RKGLeeYFb",
  "key2": "36R1SUnshopbeUtpv1ZBXchEmKEkme2wRmCAsXvXT5fLPc1Wn63tRZGP6yEiMJkm9eEqWrLUTtPBQTNQ5U3YVqU5",
  "key3": "3U9U5k9fBUqT8WBkuwEfkceJfdd5mtVLNXSfrp5NcVrNEEM6tEq3153VN1cwMr51HxjvNhLgHXGjYfrZ7d6zyHP5",
  "key4": "5GVZEgiUe8jjp6PeXs9GtyDs9nzxE5jjkDTikHyc6c2noLs2qqPPsZdvqEeTYFQDJwHifA5HPCiNF6exHbzKhj7e",
  "key5": "56McqYpRH46LpRUbaLAbfWtcyadKKruEk9W9c5WaDHhj43WGcutR1gzf1SN8pWP8KpTuNjZiYrUQzz2iiMikgSbv",
  "key6": "3uAZq6zX5EqWB1EuSrqERRtL796awk4PdWocauxpxgMd6EZoZ4uzmuqwgunRSw4Ye3aQeNoeQTtLvxzpeTcFFYvp",
  "key7": "56wMi1Y2RLXZKebUqpRRX9JesWTc6dUWRrdAsLZrDRXR16r7eXU8DVmE9yRdn84XyVZiWpA9VmXHY4QfCk484FNL",
  "key8": "3QTkvevY8KDUmK82AviYPSrzauggynGCG2XqnMFMNcFChwSZrcGZLHFEAzfKXuQgW9ASKnH1VRBmV7GEj7SE4RTD",
  "key9": "5fhTHFneGaeTzeRdY7ed5ewxDJuw9GkLaC129sUR1reKqUcjNXnnZd1G3rx3jQinG5M1mh7nY17EFZs8urdxXCYN",
  "key10": "WpAQQHuVMnvYwT8e6TEUdL3GTHV4sDQQ63hQzjJjU2i8SehbQpMFNsNqj2Ct39TvsYj8kJS2suh31jYUAnSmXcb",
  "key11": "3gwABfWQStbH8HjcveXbd9b6YvXPzAh6mWQU8VqviKb7wBimaAGtfuoPsJ6cYDu3W25DcQXfPATH4BVX4cbasv7n",
  "key12": "35EvW6SoFNFT4WWphAjBx1NZPNNEbhyeoPedLKmdeErSptuQihftwhxPfSkr7HRnCtGaaNdRapWzrgqEL9Dgb993",
  "key13": "5UG4S9L67VGg3xuiCtNf6qURvHjxssKxDLGt8rBpi1btSCHzL8HQBAxgrSME9uU2TABmH8sVpkzgkjqx4YfaG8E9",
  "key14": "2H9NaJ7sNX4XagMi53RqS2w9VES1Naw7Ttmejq5Dnhs7ertY4nxtUgdcLJqTGUddTe4KMVS22XQuddVpKhmZGQre",
  "key15": "3w5Y9vawVxRdy27xzRYyZXQgi5W37aEAmhDKtUGL4f4niWc3Kt1FWqQvs9rh9fBLV6L2B3UFC8RCk2duXbxeRcxX",
  "key16": "5k8hcvkx2rT2Zcn48LzoLaDnHxdCmECBiXYaShw7Xc7paJUmAqLS1TSBphP8tE6y8ct3J6JfbZWHZ61PAqAy6fUS",
  "key17": "3ebx7YFertzVKFkE1icwBh1oacPHfv8CcVbx1EeNfNZccK8hPnfpFWGRLFe7dmH2UY1ragrxrk8re1NCFDooLDWY",
  "key18": "Y8XjZ2HFhjZR2UXjRHdw4b39bPSEvnxA5zy9eyT8VCtteUXYhzfk6m3Sx8ZDm6TJXvQcrH4oHL7jS3vGDSDQnFv",
  "key19": "2yeTDGEPWdvUKLjWw6VwXTKqtotsEVNomJxFURc2JtC8AZ7SYCXMFG7sZYWA32mnNzsGaA4mg7K2MtQM12BMBroU",
  "key20": "2L357Gj6pZYNSrE3NfWvWYpZnQTGUb93UKdoTAQGDFFE7GmR2XJipW2CgdLHiA7pRUrGMhoU2LWRQuAPrJ85J4C1",
  "key21": "3rAaUvX518dWWJ47HUpznrxr1SvaqUHRnFEGeiPH1GG9vKgSPN2oCdxBh6UYxWw2LKWhHqnoW9CmtrNa1EA29s91",
  "key22": "3QtmMGBQCb2dfHkCwgKMmg5K6k6kmyUa6BKeDwCq922i3nfJaZmx1xMEwcewppELGXJXAYSX4V7VatsJHYQoHZPd",
  "key23": "2xLxuSDrf66Ugu65DG8YLFvAS3ni7uL6kDigEAPk6TU2Mmx27SAQDq7FBCQUbRG3kR1Ubokh8qWbUv3V59p2WPm2",
  "key24": "4WjAadLg1Bpgt2L2MNbGZUFWkCBAxpvUm59aEz9SknEWpXsNZhRQXzdSu1Wzqu1rckyGfkVTZQxEaDChrF1BDKYE",
  "key25": "5SVg7HPV3M21hosET3Rwii657Hed3WoPdZJubEa7XuMy3SPRe9ybP6MYYTrEDem2w2qEo8PSy1X5HKcySzawxHh1",
  "key26": "4ADwn9V6HuWFQk3dDRQZ6X79zKa9wHNctaBCP6zpxWrqRAmqB3DoCS3nzCmBssvezZyG9TGD4EFJGKUS9ikxFwfs",
  "key27": "2TjRUVueCgQGPgWkTrLZA7j6jjMn9ymjFN3bdBjvjwxZmaDRkFpikRPqjt74X847J5hTPMA82rnVaz9w5K1zJPvp",
  "key28": "5UnkW8cLFhc2jrH7pSYMMJJhtTKSjma9CL2rUbaHs67BcRbVkRZb7dAKALvQPJN9HCfcHoUYfjQg7MJU8F61niq6",
  "key29": "3WFBnapEAiCqbxj7FksmvAiriEYc5xjGnFtSH7yz96zv3BdsJiVSn2AV9SttpLSvGAVGMaYtj2YkAq2oP3tewP9K",
  "key30": "HzBNiwUUKG1bDscgHz8nVzBSdNMkK39YzoZsBeF8RMpAGhsU1b9kEf6kNVsGSQSRKkeAgdqZADduur4iVYzt8ey",
  "key31": "2RSLjbynzydTE9jhdxM4qGagDdCQgCqbLZW69tRvcEqtskAuxaHVBn4EW6CCHFhy5agMb9PhUNkyAzpgwXVA5kTy",
  "key32": "2WuwhbqJ2UaakQQbjVJQnHtR4KNhxpjEhdFFBmNHdGYQcahCfA8vgjVc6xGN3B24uzwij9XLWyBtACn8LAb6HBum",
  "key33": "5Hki6gNJz9nJdFeh32cFTBZugV8UMSHJVEh9tWfZ2ugXEGzDPQBVsauSY87Ft95MKZjSmSXQRLViKLf6UPVQ4N1v",
  "key34": "5veZbTW7UiGdkXNmuJGyYjoBEdNBtm1Uae8ks8NPM86hHG3782ym5yhUsYinALqrBpDavNiuHKwXJkZocjZUWKJs"
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
