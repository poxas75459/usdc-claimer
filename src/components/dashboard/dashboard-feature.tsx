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
    "3qym7QBnCDpW8sPjyGinFMTZFxPBix92J91Xre8KC4EKPk8oLpcL9HuCQWLwTqfZ7b8JX2WXXHNTPFky1d38STcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQN9JX5UA565vqtBU3wb1ZDDkp6pEzwZxkDgTDa5hkZ6iCWLqkbBBsSypABPcHU1WvD48de22EfHjmRtmBaboWF",
  "key1": "3jeABTQPWkG8HYr6DfyMU3YHRtqKNJZKFHT1ucFeJVFNo1DUKHDQCsJ7JRnTicJZUoo3EC61SZbM7ub6FkicYPwk",
  "key2": "dxM6Z6U8qbT95wn2EzNejbtk96k5HvPw4v9GDhtAma2vFhYeVoJxpxv6kVffnrMvXa8KfaBLQh8ddTRGApSN9rt",
  "key3": "5GvpeUHi8rVAf5s9ESMKCLLLrrM2Kzv8Z3iq7KjQNmbV1CY3t6FqaK4oinM7YiwhYh3si7Xh7w16wAzjbeYU55pL",
  "key4": "5oT5VuNhWDrLkVfkF429NRnfHJeQSQKx9QgmFeWdAvM3REyjwRy8AneDsgBjrqVwbDwjHj65kxZAyGbnuYRvH2VW",
  "key5": "4extYQVJVtdAccysMb6RR7krSRJaKwHY3B19ZEBWC8La6Fp9aHvCc2YbjTF54eKJmw14ckzacHmdXhSYyA65N94X",
  "key6": "3qWXHqNuJWJw8tM4MxC2XYQewK6Rae6BZZoZK5wRnfkyYjWKUmvwAKry31xtsmsFwsykUpbVxUK555ApkYUE5ngG",
  "key7": "2nCMDKfQWnzj1hxL5UTTNBN833nKXcrKux12Bs3gZAa363VDwt16tD3nqPdxddHAAyTUHDmxHSeMQUNoxttqpqVe",
  "key8": "2LxKmTGMup6u4kn7fxdQ3i66sracRxJRgQk6SRzubwAyT7k6awUboAKJUq2UeNEXcUMJ84Vyj59vKcHu5LZxHrG4",
  "key9": "3CagPhZ8Y7vxnEJw6gcua78PL3YKJTYWkWkYYLZaxr2MCbLEHvZh5B1RpJ3hdmUNg324RtXyXWZCqHmzBaZ4a9Hk",
  "key10": "5gDLKRi4sJFWeD2E4XUsscEdgfr7HvBeBKq3cy2pgBj4m2qvxezZJ8Y16SVgGqHX7rpA9z5D8ZNUmf5hXvRDboD9",
  "key11": "25VejhYhzUQQ33uiXmAhQR8qyQgieYLj1drezRpoWvhUMFGpdQVABVbX9SUrhh6pLMH27wAkUegmYJUDMtNb3WRp",
  "key12": "31uXk9hZwqAJEo1AEsbvf9ttSFkzgHyMJgUfB2ZrXVxe3N8yaMyzaPiq7fHEAj5a49whQGu9jfXARpRqU79fCGwr",
  "key13": "2ZsrCwBdWqmHeT25jryvFDce7h7dQKaQF5eeLvTGFgEJsFBMNuXv23TGEVDHkXF7qCjTy775JxbxKwCN5ecB9N1v",
  "key14": "5KVQhBFJtNvhuN2PqQZXhbL6ZGXSDwBaGVzWBptUySN6rnqvV1EhWzRUE11H2iUi9TL1bveneXqiM4GgRig2ruRL",
  "key15": "4LDbG9hppmrwD4aJj2pC4N4cPmPzDEjMTQPiEBkFupiAbWf9QurYWkiZ2T1T32KiXnt9AyTqaSMuKfZP96pUWVX8",
  "key16": "23oUdrUNV8WTmUuzMEL2i5W1qNFXPDgrsjpouSoyjsLvskrVix3M4FfJSC97EmW8LVb75dZF7BFe8iLQ8c8r68Dj",
  "key17": "3QUAfDMaHmu1BLd3fGVEVgWRoE1KJPrCA31FV6ibV7xYSyGKM8AioouSs3SznRts2uAep7T78wQwGL6fatBW7wY5",
  "key18": "FEwDEMfroJdFn6kQ37PcCHUtgGzFMVC3uUAZJv49ygVtqAmGvAUHEzkb8kX3L4NMq56CSSLkDH9eUgGo7oMGeqo",
  "key19": "65XPcSVFZTSff1vZvcn53znHkQn27nVNrLecx2tSJ1HLqv5ZLrUed4tMnCRNdCTfoVCfyoy7oCCwPkPywJttMfcr",
  "key20": "5ZdmuuPhtUWhvHP8mGogyXKHL8XZYJCt3ZZgjXNHTnXN6UWf1mbFvi2s7PGpYokeYvU3dQut5pUiNi73fKcHZJiu",
  "key21": "bdcJ1qqJUsSq46S4cjX4eNRG7DKFqDQmrcB2ycWcpNVzEB1SkWAEhQnjNKGMSHiqrrKM6zTiG2my98psPLWLu4s",
  "key22": "UYUEmt4WEXqFwhPQUT1kSSLJEPPGWHq5tkfS2ag6cKoq8zC7hVgVMbdYv88cJyALtiJ9gPL1hbmYNg58QGKBdd3",
  "key23": "VXM4SJxGze3jdHQZCatopEtNS7CAE1cvHPv2x2SCiomnFQgnaCkSLaogBZ2SXu7q8PJHQj7XE1wZ4mjBhPcHmew",
  "key24": "2SQJ3URnNAe9gP7LyPFh9F5KrdLJbCe85AchaJfJM8MSjfZmLDr7VnGho7JVXak3umn3J3P8Fbme2DcQZCaKqMXi",
  "key25": "44YkjzvihQtjy1EdZQCRq1W4RWEHzMyUNpwWboqTXzkQTzr73dVh1omfE4daNANM6b7yTUYtktKGyu6bSH7NcgYx",
  "key26": "4m9PivkvuT4a83dw62irbqezD5xfashTjZjHcdmkZHQ2kN7JU8AMVjC9FHeBSkf6iB31DW7MwGPk42vShawxHnZu",
  "key27": "n538syWZtN6ooprjXPgCrJgavfTeE2LYac9YU9yVLKbivYpStge7mCw5wBxG1uzQnUzKD8XUNavbgaPY9mgjjBM",
  "key28": "578Mvn4mvW4yAiivPpXCWGpkTHiP2Rd45egPJeUWxxdUWhmVKixz9JgYZZDX9JBnEU73spkrAHTRHYZDXwgBTqyY",
  "key29": "36m1hzUpchdKLntNqn71uvSSuuK8bv4toyMF6LCAc7t4oDaGAzy1gRRCymgK8BhwmwHULqBD31JfGnGrhyi7su9x",
  "key30": "4Agmc2cLjeaTkhNpKPHhzPCsC3vum5XgsVQyiAJFb1TEu4CgXeUJGwHTPRanWyg1pK7LuTzmUvqAyVvRghMzmfRw",
  "key31": "4dr1hsMnkoStLzhucHp7e84TjZGwm3bCDNjNVHRj2HdbfwHfYYiH1rLgN9KhcofA8EwALrrydFJ5rzDM62L6HBkF",
  "key32": "2kMuTzm3oWceMQc4EjP8YqXs6emwavcYdi98rKWiwd1eS56dSQdz5afLpHWxyFV1RP8QYn1kQ7VRdajeb6B4uoRy",
  "key33": "2zVNQqVR8jf3E6F3JjKyXVb34joYEwja3EFxgEAXYWJLdPjNSZx9sR1QWj1wcgq9BMRjr77CssVk34HjuVuboS5S",
  "key34": "2FrLasJTfZcddCMeB1s69jhRbQ3uKvqPpF65pk4aJybwLW9FLc1gAjgN5mhKpHtag9EounLZrap7qH8n7p6nTdqK",
  "key35": "3VnB8Ew2znHYyAHnw9MZeqq4gn3GoxR72WtfX9fepzyPUmaJnvLmPwND5fsYe2kcnFAJVVartJH88wPgKrXMGtiJ",
  "key36": "4Goyak2kyUae1GQUoNRwNEHFne3cC6WJ9MjjyNsT3fqRhizAJtGsJSbDrrfRrcB6X8zoP3zcsAMh7KnxxHFhNFfD",
  "key37": "3gxWczZ7qe6it6w61W5Y3tWAjB3YKLTURJx4c5kp9i2KoVHBc1ab46nZnzAmh4cj4FziH1W49Cm3daAqETKY2azD",
  "key38": "5aAccvgihXHzvKDsp5neQ9gFs5Z3rZmzRNgouAQ8h1xhwHjLvg52vCHrj4nnf8QJY1urFq5aLoQLuEuQmJk3bJC8",
  "key39": "3Xuh5jNNoNu5ZCfj6T6QYXTJzrEYaGxNNA4maZyyneWtKwnqAierQ59fASgJNGUYB47HmNJqhGsLDbz1n2xs2Uhu",
  "key40": "64xe4R2vRyMFWa6oRC86WsLuLCJ8HLpiGoJjbeqVAFSduR8jqq9zHHZ7ae2Rb1NWMbLRNK58S9TFz1m7LjXnqAek",
  "key41": "5sU6vcb9odCbdoAi1VgY3f5kymd5aGUEarbksqekc3ULdxHwd6QJfC8LhYvjQAfzaRudCrXTpcd6bMizr215FWgK",
  "key42": "2eGTJxNknp49qimgRUugQRHMBPyTpg56bPb5RacpQT3hYT581HJ6BcSjhjAE7NHoMDJSYe6YqQVN8t3wzk7vexsb",
  "key43": "5uFhQ9eAUHS7ExXwzT7DwW2kqXXVNkG9yQWeirqgAJzeqNEpcQY1ZrLnkR5Z4BWy9zq2Tm65pcs4h13KsWhDSUzd"
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
