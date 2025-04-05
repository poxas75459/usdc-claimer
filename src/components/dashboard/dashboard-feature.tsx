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
    "35u7c9XMuLmTzMR5bk7edRWU8KNH8ZE4atfvc8rCXyLyFUiFRZudwhxpLjKZtDUpXHFjiNNG5WYt8Cn9rfddRHmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uC4d6ktv722C5Ly1PVG9H2Ujkz4sKWd8GRD2wVKRUSrPHFhh56eLDBZHoAjv6aAcTe7DtuYWbD5YFj4UibRirEF",
  "key1": "VC2eKLJAfG5eS5aGHCytHj6ZUF1yJ8kzNmnNjJWpjGPizuBydmjx5pSRYUHvrVLLNzzHweZDXAgFLY2UnaCx8sq",
  "key2": "2d6siKHNXjR6FYiQNHi4Wje3VQHoX8CrmCjVbrNzA5WMsBRYdXc9Q9cy6pzZKxtdZrXPWqgoFpqrHCXSicAJFZQ7",
  "key3": "jVY366JmWuVwzYoQoejmzAtGH5X2Pi5hQe4DF9ih1bd7fgMLgRFGgg66UGZdgMWn6rA9EwkB2hAQf8Swn8w6J7Y",
  "key4": "45278HFRe5o5ZpymDR2L74qcm6XqmR9Y8iHa9weCZEZb5U2AtLfyx687jzQ1eAvZ2c9iG23ibxWpJVZVWGXxffqJ",
  "key5": "5QHm7XJrEjfiKNuexVht8RCe5q47reFSRAB7weEKTFxfzspCTz9qHCbM1kn4nikW4LH4k7f19tqTNo8mjQZSwK1J",
  "key6": "2YaRZpjYNBAz1YCAd1Lkp4gCSUbzmuMpfWYdXgfyQ7mddD4yknEE2BJ9uup7QbJSRTRPhFLTnuBxQ1jhRNgKy24m",
  "key7": "2zm1g2GK42RRov429QFfrTSeCkyzZR923MNVoErPu9NJrAfUZ9D625S23kZ14hf2pecMfzHSx6Gx7eSbZo6cBsP2",
  "key8": "KhgDoR355HcAhNfWFuNcPDHY8sDx8EE6ybBF3G5pM1XtnAjziMTrokCvCrHNg6fJ9Sz9rmGYVbeeRRw3adncSMB",
  "key9": "46DWnQ23ke26HMiphiCWAAPBAytD6nZnxFJ3eR9L6TBnw6BJN7TG54vJiKEtZ58ESvwSUJSNkw5d5jdnWAiRsfkS",
  "key10": "59vW5GGee5V11LwPw5WSSxRmaCxrZHMAHcbuVhVskMbQwLA2E1GwY1G8qS3TntQwUo5jr6xYRxGYnMJkgFMMcLFZ",
  "key11": "4fUXWLG9xTTywLZjnfwmHC3tbeZMKN8jdTNSND7douj21o6xcWLShMgcV81Uufv49cH6whXH3QqTA999XbaLmJCm",
  "key12": "5XPThdY2bnhXNt23NYiJhscQBuJCgqccmTMya18QkEPWVYMbdjtkfvnskwvotaGs6W1VQQgFBnvZJeGD5eFpWMLC",
  "key13": "4b6n81jiTzBK6M5kaMc1sDjjtujFp7HE9gvst5vY67FqBSYJAxijeAvuXvCY7uQCoc6GvUjKK6ECEfGrbM5MKbn8",
  "key14": "5RPuv8dLREiDNEk3AsvghLfVdes57CGqsGLwozZqCATGn9oAwBT1ePRfh5Easqg6Qvj6HeZuGcrNmnHc6SQi1xN9",
  "key15": "4x9vo53xy1K6912HzPJ3nYbPwc9tE7MrN1BUdBCzSfTF16kF4MP4cf8URbZpW9QSzQtpgUs5gknRxhPf7AGcU57k",
  "key16": "4eE1n9xNs5pKoATm9G3KCFKUf12U7DpvFWywGXoe15gpJKVieDZco7m9xbqoKqpNQNPoPh8qc9eajD8BRV7uow4x",
  "key17": "2bB7cQFwtEDer24KXdn5izxDqbNfHeCREiprTkvyz7fFFZPLhEpnJsBhrPadbDQLRFBLgGrWmpHijS7CZTKQcFg7",
  "key18": "5dETVtZrQ5BAvatkAhVfi1QmBtFrvT2drbGgknc1o2eAVdexRRUNcTHhKHtfznzcEmhGUhWbz5ngdAJL95qzqKam",
  "key19": "63skpqR4P8w2nCM2LV6suB8Xdf4KW9ZKRko9r9k1xQFGBhT78JDWb1GDiKc2KxyUXKb5Jm4H1WW2x1AMsZTPgqRc",
  "key20": "28JfaR8RZDBm8m8fbXhDPqvqTgPsa3yg1C5fLWeca6Z1ALsF28Brfv7vsbdt2gZUdTbDP4tFSbk3hvUUm4sfhTmE",
  "key21": "5LW7ftK6zHyjZssDaLxiC1Ki3WiJFibYSxLCz85vX4Uqky6drTNiw4v64PhhugKoZHq18PLXoSyfGiJptw9MNrEu",
  "key22": "f6UobrGgLPpEwAsNzCyWyvA9CRCfG45w52E1tXM4ybma2m3PjPmbyVFcNYKEKkP3UxMbL766HDgqHqBFT1ic1ms",
  "key23": "kiJXqSSJrU9onCEU9t4WS3uJL4fgaqfY6krT9LqVxAp9HKktcgY8w8qDxSJjZ3ReTPbk8tb6AwXxCXDgWs7T5sg",
  "key24": "4A4MjQqhXYxHWXLN5Rt29X687vJPNAFnSWFYWqvxgjY8aLGqXcaJBTuhRPuC6CA4hRW7LfBZxgzZbKsoPKq819Kz",
  "key25": "2uxmcMNoGX1PdvDSGmLBgpWuG5fmu6phaCvbvAXE2RQVDChQsEpg2A4UAuFxpkrP8thbEW1NYuGUXa1HKvuMCkPL",
  "key26": "2DT95xbmc96FtGjgEtKuVs4sCRZxjsepYYMXqF8oPbkGLkLN2BxytiQGbv3aKSM3EHMkWjouKpD2CEBRhPF8y4Y6",
  "key27": "2CxPtUDkvp7wWLimuj1aSNKgWKPxqUwBnoQW2X2BgQ7RUraduMJm23hu37aYc2Cwyx42fdJCMb9nCytMtPRo8ArD",
  "key28": "2ursx6xQDUxc6ywdpSeBSJAFRtMT58Y1zUZtXFM8DWxrHmVLZg4tqurZgEp3rmbFP6gmyLcKNq4DsPWYMDMKJW85",
  "key29": "5id8USSirAXMQP25VzhaTPsLfN8LQKB5usTdURJmuCsHN1atJL9CjjbcFoeSnL526mdBNbce7Toj2Cj2tp3qmKrH",
  "key30": "Y5bzckWvZ6xWGFoTjnFTr9WXeaiDQXWw9ueLnaBVKUJfcWcgWwGpSYm5voDwjSEaTivRhzJPicLaYm9DF6Q12NV",
  "key31": "2AQakU3nyDzqwbTQbt4YLWgewoPPshfR92HE36gZ7XyVC5zEDhf4MRGdnFFmytCqAT5Hpj8xWpcCj2qz2NjNLih3",
  "key32": "KH9drML19EXTyQnJDeZi2Y3S6LSYHyroKPahsxmQh4DkPTXN2ukvAtEqnSdrQ2Fkudp37KHcxgqcgkR9keL2Mxb",
  "key33": "nChpjpRk4S79bVoj9VpsmuhhXsofDiP7upCXKV9CciC23iJW2zkwxUL6vruZWsz6k3eY8dnm3cr3A6hxHsz36ED",
  "key34": "24dGUMJY7ycvmui5kW8V8ui3Ygs4aTxuSnvQzvTL4KwsDHNU3J2TMFYCHg9vHZVJpS7GwiMgcCeyrTmfQ5Qj3b2d",
  "key35": "3KSKnYghwoLXfud52tLBUSfC3nZiujhrMDgojbRtBefY1tryp3tF57fcidtrciQtf7iEFMNLDWbVBNKEyMrEMmbu"
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
