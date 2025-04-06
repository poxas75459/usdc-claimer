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
    "ZbXwNd3Bipw15W1BcdBVTdMZYv7zXH9UC1csghk7rshbeNNXPWoRo5DQdtjJZp31rUo9yBRrgzQekr4rCUhJETm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqWs3SqYJ4i1dPNhLgZcZadZ9K8vEBwH2gRzC49bwiUNcq9nuhy91gYzdB2jcueTzwkpSGGL2n5hanat5TcUzva",
  "key1": "2di7mYL3d8oV24QV6jKH8gVBW54b1sBGM7EVitq1bKEeWS2yUQ4uG7FGwrykZ8nrH7dTnWHF7FZVBbQ6FznNdiNM",
  "key2": "3ReXNxvCLwMJv9v9NkjQmS3PCCpjoxiPZbuLxeHcJc998xv7CRN7s7wA5WUoCKJnGFXB8BA4C8eJhi32yXMqRA3e",
  "key3": "2sQXt58dxaESGUtuEZmCUUfURWZNpnPjK2op7VMzhthdqbXs9xZcCPsUi6SRFs47R68jS7ihm8q5xjEyJe4TxDJz",
  "key4": "KyqCKj2LHQdoFxYsaaaNzWRQksQfSRdcXu6kjVzz429b5RFYLm1RPNHQj8EQDyGCqY1UQdqLrrNg6FQ8uAyfYHD",
  "key5": "3AetdLY6eaoqxXb3X67kQB3X6MMnZUDz3izp7aj27MJsEpEJTYQy2ehgvY7WxB3Q11Vrx35FgD3JR2fDhCKtcMx1",
  "key6": "2mLrgSBh9iaivM3xt1hfatqT4W7gnCPgov12Zncz5yvPDX5aEpbkRaPTJHULrRbJy84EoJDqQBzGctSaiKs1w1q2",
  "key7": "yHpoWRg3v92FZjwUXKqqameDkBoWiLrttmGczY2YYomhxJveEEmP5JYA82bRbnd5NmQCRaaeKjnJrPpzbNDu9kG",
  "key8": "5Jn8Te7gvmtEfKJev2t91znutwywN6FcfDn1XKQyLUzfABdTSEVrvoWagpCMMaQPqWyGU61Ph3BpKCPm2dBVhXub",
  "key9": "41BoZnzzfPmyJJVKpEorgqKmBRPbyokMCXSahoFApi6CQsLa8NN6wJYuRsVKuQo1MD8n4o8hfJ4ZhyVbzAArMuD",
  "key10": "5TjcKoRjMho33AZanae7364vYAWr5AMrexm3D6Mwq28X5aJBED2h76VdE6A8Wi4fteqnzBYRDmaqS2DqWRbaSMVT",
  "key11": "3Kfh686VWGKUQPVNRui6gmMPFV8dKbKNwmdQk1TLsjN9HYXPUtrjZs1jQZp37AXseNfjqUeZrXVjwztqaxwUKz6p",
  "key12": "35Kfzq7GwnMjJAUCwtuTvQs4D9XTjZYPSJQuLwhLUYd3FoD8u9rBAhpPBUw4jMpZATJNovqM7Qmn3wJDygy3rWgJ",
  "key13": "3hJ25toS87NMebmEsk6GH4Ktxo4n13hdBfAYDhYM9fFtndHyD6tovoShuKfkRqz3n3jm4nwNaGqQbDgSYbvCcWDL",
  "key14": "2ksumCaKmTSqq5SL88QNAHtjeh8L9iSCM8ktTuJdPEPCT2mh1nS5sXmZ1NwysCi6sjgUyy8ZedxB8ExctLcoCK1k",
  "key15": "1PXe9UnpZLHAeLH3wEASnjsydjUzbyn7unqeJyZxvohYjdH28N2JSxHmhuZ3c4X59KWrrKRu73kKd1ETFJRW1e8",
  "key16": "4asUeBRcXDUBG3tD5nksWeLTAg8o57tVzecJtQyYXZ41ra8e9Cm7daGuYGpJA9YFLc8HasJpSfaF7vT6ihfb5hRt",
  "key17": "2USysThRXoZFR9ykwodA1LAu3y5BMHdmqzbhiuXTdUZbkM7jEh9ANFKzowXFB3z2DxX1cSNDBhJF9P8X9qi4Qo9g",
  "key18": "2YR6CLs1Z6fbCDyYzd7GqxAQj3ZzuFzGcncKi2cC6x6PZSMkqD7SDHKYJsbNMUcVsqhM6t5TwrYLH7NxLZntvLSp",
  "key19": "5ZeUsQuzubKXsMmrFpBqCurPGjLqV7wko6Pd5zAyEfjXgUd8qopiA3vKcFLQ1eW2jgKTHygeq4Ndrf4LmPuD2yuT",
  "key20": "59FaJY5Dv876imbR1iwBXjM3sQJy1iyJvc5b95sLd1QRNEKGLXNnmEUkZf3aAhLU4GAp6Demt39W7uVQFsAiirYR",
  "key21": "36K1uYgVQYeUL2wL3pLEV5cLzq9sHDvTPGuk5XsvCzkF44K8PAgyQvNGKGiigkNW7TuK3ooDQBzTvgiaNqJQYv54",
  "key22": "4UsEYBUB25mb8PVeNUtR9DqxbF5nCCQu5ubJSM9tXBFuBfjHnpYxhfqqSq3Gbd3g8K252ztka2cXXop7HUfYejji",
  "key23": "4iYFc9NwWVzGgBi9QPL5pD58b2ScqTzoSNyribHgpgF9sD8GYzS8ABgLfDsspBrtFGEepJDNJEZFToyNoKkW3Vr7",
  "key24": "2hmdaThLd9SGHHPxRadspk5LTcpa8jH2YdkcPHHx7AGMw22spwQ59VHTap9hj6dckHJzToRQbakoYaDDY2NPXpY2",
  "key25": "3M3FnN1kwiaDd5EmbdkSQXugrf5XocFDAiZHnhpC3VdQoM8MtTf2ELHUHDm5E4nL4BQiP4ivfW8f2h8kYRfeBCgJ",
  "key26": "5Nong9zm54RNnG1PSGMGZHevf4sG72notcpiS6qKkucgi6ShXxhZFZFobETzN4WAk4wuuRygoYUNv7YGyHRREB2i",
  "key27": "2HDzAenvmsLHW29BaG5TEdcMBroHXbUZFgQcmtSAcQ6KCofwYWycJSc3pky8KSHJD4gfo5FmQ6zWLQATcS9MHzLt",
  "key28": "nLcxTvHxuAFHqvGtstL12YsvmnCA2UkhmKVoRkQaoo7ZFWb38PFBdNkyKgBPjQsnH1aQ9utQrCwYpzYtVSDGY62"
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
