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
    "3z3qo3R8Lq9ZYdQAf461gp5wvadrbJ9gyF5jQbXi8VDppCaDRpCcHwcwByFL2sNsZ6cEahYx8BxbhsRMYBUkMKq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rRYrascFnS3PUfpS6XbRavoQJmkDm75JZ3Wmf8TLixNqJ9HhH62B9hQA78EbGkaizwVKoErsH8oFN2qMNrTd4CV",
  "key1": "2VmjSXcZTMtzaUiQSRn4Xfg7RAPij3jKHBJbSHvyqmzLiyW7fLDnMckWpjpBRmTw1Hqoo1SPZyPy2bvvgJhun6Fq",
  "key2": "2QzdiSfM96mNUepsSvafmUX1TDwNvbhaetexMSSeCCVpdCD3MWZRyupb5m5uabR3gbKWsJcWXkey3YADLLcghbBM",
  "key3": "5WFoMNWJGKmyiqmni79gi1KJKkhhK3gDQqnjfqLaXorLa8XTTuKAURsUDX3nCdC7xAoRYgqyiofCNDQXVNbtzVcx",
  "key4": "62tkxCWg5JjXEXZ4MFaQS9qv867WWH9xszwjvhSqoqZ2foqsgT8judnouoHrW15bgzwNHs2Vy8t4SxtSrjsv3uYP",
  "key5": "5TBRECMTYv5vekXCWa4MrpLiAK1mfWT3vdFDvAYnNcyYLCRjDFYfShzyJTMhbcFX9W7hyZqsvbkMi6f6bYkpsGRS",
  "key6": "5jH41g4Kdk5ebhuu7SPmMFM7pvqGJayWwJCFTM9iRqE4jCqeW3FU2LL18pKDwa52rvjwkLerqBp2YTFmJbWnC5m1",
  "key7": "3bX2L8ZC6cUezozzKBSWmyRmYRkQKEbT7sE6mqtNWajjwSTpgqtaR7kKckKdUdQf8MGQh1hbhw4iQbH58Bu75CuL",
  "key8": "4muQf7vxZKqYdF8EETbL4rXBpj5LtQhpYgoiTa1AgtWVbBVTzCDsUx7AYwkBj6noNioGSxQ2GPE8PxcFuXmMJV3R",
  "key9": "2nGR9e9gbzH1XM5mpxPw8R1Cifda6aGDN8P8ZKuprx5dLSWkbbVfa5pf85jVKvpAM3ArDjduvenKyxce17HZi1Ex",
  "key10": "RyoGo8KhJeSzfEY5hNSjaKrfEfG4z3kHvKBjRPtf9oeUyyvcfdrLXiRaPE8i1XBY7KWLhPqcrFLmUHnajxUeRGi",
  "key11": "5wtgQvHJix8zkqPSJoQdxxC7xQd4Kp4hD5tFJ31znpnFyUjUjNNCf6tJG8hYLhng8R4kanqSUoWRPKJhfxqtg1m3",
  "key12": "jYHDDzC35Lb6EZztX5VoNmvURz5nZB5vwNhH9yvCAKQ77gEJFK1NoZo7EP8sposnpHC76GCZKWmAFbdjC35AXqs",
  "key13": "5eoNckfW9WbiqKFD25H2GX4QDGf6DYnSNcSJBuEtcQU4esbjmzkgks9NwMWZvce8kzkqzyJHaX69fFiqGS5PvpnN",
  "key14": "4BP5VDAdd941b1RQaPd1oz3bFiMQoNpdZbSs3rkBzni2gmpMDuHokr9QZPNEriNv3zdUYp4YbzkWkKdmvtLyPQgw",
  "key15": "SUvRYWXJdCwpPmvcqdnBVMR3aqj1wVe8a5UNoyEEy4fFoufz7SNR96jv6WMBqkwh7JkBds4QphodHEHffmwexHM",
  "key16": "MZ1mxJCSN8z63uvb8kHLquLMEvuGE7FCoBnfrC8x8esq8GFd4j5HF3db8LJL7EVbk5KSPCcti1Du9GF46hpu4wB",
  "key17": "5NMXg212e7MzVxZdUhwrmvSZ19ioE4NMTbcE1CReFZFYQS99fjQTFYWNRD3hYyQ9N6hwwHf6qYZDY1RvEfzd6neP",
  "key18": "3g9i1Edd2YWnKLEkHEX3HjXj4t95eHW1KvPs8VYbcszfxPrVgcYb2WSU3FvcQUtF89K51JnximXdA9ekuTiGp5rY",
  "key19": "5jKS6FUk3jHoMPeMAqs5QEnjAY35n2Ct7a4uXWYJXGgbPp6afny4bEth78rzd3Q19S3GVak3pTefyv8LafrQfE9r",
  "key20": "5XpnzRJBPZzV2c3QJq27qd9ohmq3ahn3Gh5gcBRd1m4FupxLNhGCDtE7DbpzPv1EZPobpPkZtWgnB1BpaJtRZopN",
  "key21": "3upKUGiaScStEPY9crvQWntTzWqyqtMZkSNcMYN4YgHf6WnAptdFP5mheZHEWhgYwmk5iWfYqeoWpRVTNRCVGSU9",
  "key22": "4W48Mje5a679VLxdgpx9hGaeB3MhRh6FnuKaHvg7hBaE1LPNGnJPLzm3waysNpeGSvLyMv3wJPiv18MViV4P8Qxy",
  "key23": "rNJZcjuwL9EeTmDUZMDm6gv3CGb2A57w6kgwtUvtc9oD5d11ZtY4vFWQwYMMMTXbu8MfhoMaFdznxYateGY1ztT",
  "key24": "5ogd2TjucabxS4J5Bzzd7DCyVaz4o1mhxDrEHwdzaohNCj887AaXViCjE1fn1ts9ivBMDwfvE6mCoWzbDfAXhdp4",
  "key25": "2W6v51Gb4Qo2GXGK1B73Tu1x4LG2x8GqDHJad9eLUs9tWB6Vg8gxtCXBU7f5U4RMaxFVTdEERsCTJc6z3xGCv71i",
  "key26": "MX7VkJLLLzBpgzQxV6dDW6tfCShfpJKAEQnp2e1Ftsm6R9fZQS4ACQv3wjXe6GdGtG25TpUcq48Fp2kZHr6wWCn",
  "key27": "qmPz8u3t7tP53H38nfdgxHe8xhWatjqMT3uz4V9UEb2zWeXk4hZqoNtdx1euCiiTbqKcVn1rjqshwugFV9YLsV5",
  "key28": "kRGDCgMnLZUpNewkFowENAkQ1MA764ZKf8sFatRgsHQzLX6hHUJzrSF7z5pxtAatbqR9d1mJEFSxZSHvY59Btz5"
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
