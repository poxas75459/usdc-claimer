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
    "2zYoXT2fjYob7HYW1tGSTY5fhFP24Lgftncf7VQPpYh4yicfgaqUukt14VMmcUG2tp5KBmP5gsngHzDtJPCWVqYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQhErsebKQsiKCBRcUHZTjdEBBLkZxYmbUYQVNikLXeKzHmjNpDj9sJMHM71NJMrNzUShxULQpke9nd5PzeGkCF",
  "key1": "5tPjJxTG8A6XnRUthKzTyJLHnZ8fS1CRQRDeM35A98yaSZVeSHYtZGkpQf5hCyGjdHLu3VwBbQbouscr231wjAQi",
  "key2": "4xGKm5viuirZAG2xBD4HGQXsoSUDw3mjP7rtsj2XpCpFFZ57iTqnezgYe93NAFfaRMqHu6QyjA9ZzqSsxGj5Xmr",
  "key3": "3EZGMCvSa9eUc6Ms1dvHCU8LWjeRucsvxJL8hcJHeMrtyP5pKnmr8t2MhtS4xRiR7CR5joQe3tChHhKQvASYkgd4",
  "key4": "4wjbHx8JaEgwM8BZ5aGosWCqDFtk8WkTfiwx1UPxSew5pd6qudQKpbKKH4TgwJJvCeiciEAuSYrEgzm2R4tXdVbe",
  "key5": "3bguL7zU57DnQavZxzmZyPLZHEYgTBpBLvkWn4hVALCT54YMH7HHx8NxgAUEpyCCracTQDMhRtEN9AqsADxpJfN8",
  "key6": "Yzcj4FrzvHzjLMQqJR9tzgE6LrBb3LFH7RK9SH7kXVywY737WLLbv6cjUPx1oMYtcCjTNa5Lvrf5B3eJHp3Uvre",
  "key7": "2p3brSqCqCZZjBCU2cRP47e2j8cTYvTbT1E7aBorD6nuR2RPBvrwi1JWDwHS5nDFn69Kci8p3SgBMR9GMVeQkW4K",
  "key8": "5G9gMEQkYM5TgzBVHwYdnbY6AzEz6U8cPkTBCGb7wqXp3QXAwY93CUuAdHSornsk6UbG8Qak1UFe6zEtygjCaSwq",
  "key9": "3c5NRPtGPiNJfaYk7y2KFLE3So7wBZvhB7Fm1WvB2HvCLq59SHoSH8d8eFbfTQjQwG5G98X1gyJYMDmjjs1sirU9",
  "key10": "64qVbdE13qgGakTjxWmNzyvnqtKPHhnhC5oEesy6FvBb7eNaJt21KrK9GPy6mnyKsGvY299qRgn1CJBppfdyqtTp",
  "key11": "4ZW8azh9sbP1hfzmWWjgtm6ibBY28ZBEVECTZjkEHa4EpordSduxcoCDLDPE8zrCWXoo1PAhgxZ5TsLb2JayR8PC",
  "key12": "4dD9oswVrEdoz7Kg7x7kwsssjAQTNEgHKHZ1SshCnhc4nDBT1Qi3Fpep5PvXw86GUsfCScD948j9w7KTc9tjrFwc",
  "key13": "3xUY97AYaowoerbTQjpmeWeGdN66cvsa9p835MtcpDGmmGieUfLJwdGMUD5ve3BgpMJyT8q8FHZZGhdo2ELn6KLe",
  "key14": "Wbok7FzFfweHJi2X9Rbop1AzRZZkN8KxN8bf4jax2wKyzJKiJGWThLTEo5ntit73btaejynKjRsfPT1Sm5kA4Ah",
  "key15": "5F3F8MwtURXWsG7AFATWYUoPNq2Whe28SccF5GhwHfgqyjZHxPQTY5K2Qrg8ZdA8tgcM7VsaeZ3kN4bDtF8cUftD",
  "key16": "4nyGJ2PeHaHgEZ5eE2S7eUnLiqLqm2txqxGkPsvoDg8KJfBFbXDzhAPH1AATKBTHWx65KjsxgqhssBShs1nviPTn",
  "key17": "3p6rFzVFKej9evt97eBXaEph8PbHvyC5L2fZXMXiYj1xe2TuQryRzrsSHCiagUVeaa1PPVo6ymwPZM6VyLwqLE3w",
  "key18": "3Ahac9rJP3sxMavBxr4ubWEXQsWs45q4TmPxqVpJC5UCabgjACn93BhRKLUcF3jbYq4NUbe97SwYcMXMUew7XG2X",
  "key19": "5iRA21A1NwjnQswu8QXckytKvrq63LxHSFDQmmNu6btC3jzPTcMEoY3zVhDf8Hirwv8k3Um71gfnVg7L6rnACVMs",
  "key20": "xP8FdKQEUAopp1k9bKkVTd74aewrEwNiJYDcUYBUJNCoBzXSi6qF96DeqiqhaaxrntTCb9EUsY7K9EixxiYABj3",
  "key21": "3sif1fwsniFjviPN6rvdxsq1RWn3ng8vzs35b3jArEb7ApvbWKpujgPg3EXdbNqDQgKRJmTygC76iYYAFQaugwVV",
  "key22": "4jekLgDUG987RiLc7nRyDskpcu9W9P3XnWdzEyro5HHyLfzkpwwW4sVyuKwsHz13twtMW8jYhCMUaosnQHBxmM4o",
  "key23": "5mii6bTxWSDhzRTmRNCQwqWwKLNyGRF5fi1op3XaZC3dogGZdchDBQATavjvBqDaCmCUqYD7gBFvNV6DfBtYgU9x",
  "key24": "4EuM3yghqCaL9YfBR2tvUip8BCEpNcCiQGRKNw2HpVT2Y9hVid6y6WNptYfu3oyFTwNBFLZkY59PCw5ZftHPZBTU",
  "key25": "CAAgMvo43fj5MbKGC74vZ9iLtw1Tt5qM1yzW4smZkiwz5H1i2Pbfn5rte9iPUwhnpzi8bQXRTCHHaGHG2wtmNbb",
  "key26": "4fmWYjAAfCLx9KJVspo4qVnrsJtuUCj1dPjkkohegxH2Sbkke8kPG9s7XugWQ8K2qPXLpFa76ewKf8YsbxF9hb9D",
  "key27": "2GpvrpgrBpyoC9JU5fXSGfqNvi6MbC4kHYFZefXdsCXx1WxnxHVk4fPoMbm8EsFafaQJRbAvnTurT44SppivMX2Z",
  "key28": "2F3k4sAyTinuUVasNEW7XxCkQHpBgAidiehdNGJVeG41HQE66T3w4H22AomrkuwzmWmpfKtvqVMa1A8xFxWTzT54"
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
