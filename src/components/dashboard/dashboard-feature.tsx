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
    "2PycTCpxBznchzxEjKLxvjPxj8opjJp7JN3LEfP8JgkxUnrBhZBBZpPVt82UDoZApn3n9b176cFMTCA9sKcTTX4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yrotrcHNzvRQZTHfH6sVDfANaBE1bj9pWwUEUNVNAi5ePgEmVzAsdgirtcBpfv1rzHH9ddSmQE5vaBrRLAqdjh6",
  "key1": "38rxMmFs9KbNLdS2G3jdCvavb1azAn8sqbzsSxeuEmNyhQvYcTBJoVYnSxtosBSowQcLZ5Ef9fCjtae3v5Nwh243",
  "key2": "37t2wmEzy7F4w3umazWiRteUnzsmPoMFBaUxVk5z7Aby1gQU6jVbnFxweK11aBf2GqvffMLSoM6oE9GRNZUMN4mk",
  "key3": "3wmcNEHng2huvDPyaADoNzNGxKkAT2Sjz2iro1dr8y7xcqZWg68MjMtMUhA7YQY9MXF2WEn62PA9kLQLdhrSVTgB",
  "key4": "49Y6JG3douWJyEGxLTTWk9Anzvdarrta7N1rVgwGPsEZEx2S5c7gx8KB9qKPwVbSxmL3M6s4kZxMuN39EmNFkJBg",
  "key5": "52mryqCqHQVGwYD2bttcAFsPjbBDmsLt2ckYUL3PQfnhbAP9Kgw6q4MF8QVbZnubVJbXJsiiAezWfYRESgFn3gUk",
  "key6": "4kR9nWKMJ1BHuujuoq6NUfBgHd4JxG1omgzuLf1WvQigLzbYq4M31SDPFCLUspZLf6Am7RJr3KF8WJkWPWosucLq",
  "key7": "29AzuGzkHkJkjfCx4hHP2c6ujy6cz9Q6cVrf6AoRqfwNEC1wQGTiintSZ7vy9LS9ZZp1c9P9mAH8WArXz8X8yYkk",
  "key8": "hG5A9PpcMfdHZwRLzKxz3ceZZLnFAMYZbirK4XvJ5zPLm2QuQQ2C5B79CmFDj2yELzYFZNn4TZSq8rjpaBVBzNG",
  "key9": "4xMoGxQYv9UVfRx2aVYNfwnrcYTxZFv1KKezJXGQ7Ae5N9Ur1J3WFsVbnYVnyqLjH81a2uuHxhDp4JCkezvGvCFL",
  "key10": "5D965chsMqsV41fS3RpLQEy7mwRjBNd5P7Xq7jj7HWaRxE5mDG8t4vW1UsrHx3aKNJtpxHcfdvg2rbKQ2zre2kYP",
  "key11": "2WkWKYFfEjBgHkqZQ4cZv2WVcie6Dy8AEwBQGVzcPeUCG8qACkGrxwS7YnN8833m1DovHdWsAF4FEuDnqQ81k361",
  "key12": "3sNZiq85cNZsnoAqhKu69uUsrhvzGLkyQA4UV1Z6E39kz7YytAgLW32dHYT8QEpmJkM8e1jL2NMXHgzv3URBQ9uN",
  "key13": "5spVoSzxqT9v3VMHaKB24aE9u9nLxSAvgH8ynXN3ZDiUVsP3ozycSDjJr1nqR1gA8aeq2XfnSPSJdSmwf13ku8Gh",
  "key14": "2P3eAR11sYfoDYPZ1CRZFrAD96M9M9ff8S5WXij2esDm9GjrUuveLGqRUaXWsSKvS8cjayrKatQj7fTTcuzxrRR",
  "key15": "5GodJ9bY5iAXdkqS7UoKqtSWH2PNFkKY1ShGnZo2UpKETVATAVhsNwmnyyigBgxg9eBS4QEVZgfkbjxYHDKVY8j4",
  "key16": "3pSDGnZErzBDxsNbt26ax9Y7AnKayqFhe1FkPUdVMBv8R3LyTCp9ufDbDyw8eVCt65eV5iZDkFMgb6wgNZKEccjj",
  "key17": "3DgfCQDGj9TwRPdJCFgaRMzN7UenrqoeUQmFEvgUKosVfoYJcMjPxg32DYiaRqJfdcWXiB8dpBBdFjQqzGKNXemK",
  "key18": "3KM5rKqqTyXDB4dnC1cuwGh3xPnp1ZwVNmrD5AKpQv9DZ8t8xeekiQwVjWQ3ULMZTzDSikVbSWJNCu4MdBW2qbNc",
  "key19": "2WU8vyheP4neCM43oUkqiFdu2jbN9jTsaKY2xW4nuQqnoUMQDzweoGcEWTLoMapLrLCjziHmf5p7FTvdJeBPhhrq",
  "key20": "5YoPfnSvvyAo3P1DPaRXFZzGCz1FEsERD2ZAZ3D5jykDvJVrUy7mU4RnyzBuieZLJNUjUqapbkeC5mS7McPRFMfR",
  "key21": "YRAE7aHFVfkcbAVPyrkToitbqX5zrcKLsMvXM88uQs2e8FqS44ZRsCUVgdTjvPJVQ8cgYtD9EnaSsv5GRKDd4CK",
  "key22": "2speVueDxGSczMrxUPi8c3TgUYnn1fbhGLgTnaQ9DyB28M5SoACifFGBE19Fw18XQzyfw9D9FC5eUJdAbuRHYb4Q",
  "key23": "4vFwyunsTaqusuqW2ha2gL2qqQVPuL3ARu6gPHa4f4EFAarJV6umR8dgt8uaRYnm7UN2nbKfq8gqmnpS3GMqYVs3",
  "key24": "4YF7ZPrZvup5gbdV23M3f5BL74SgdXUDhbYwpNJqafPMMV84DDBNxvfyAR2NA7GL5SNKdvbCkwYwMVxaD4kxDNyJ",
  "key25": "2395urZbRCuzWy7y3UY47jx6ashnwCeQg2QCvri7Fk3dSh9mTXnL3NkwK4SZxS8Wzu2B8gCWjPJUjEiXdukRtjqP",
  "key26": "4DTwVDvV53KFeE69YfVaFBFeqqaLvvP2m54aTWjKUZD89LKeXsGmaDU4QBT6nBTTKXnynjQFo9ieMbSH2xL9jDL8",
  "key27": "4q3AXv9EJRJcgQt2zjFXBJySCHgDjChHT9M1rSiWK8Zwhf3kisjKk6SxnBmoYJKDiDbWKbkQTjqdYMTe6qTbRtHF",
  "key28": "4o6heLLaUf314J2JBpGzEBvvSjAbQXBBDQmzNmks86J142pNwVywCySp1KcGzdmpJeG5xtqBcfNxy8KN3LDyM4cJ",
  "key29": "9ZReUy5VX57cwBZcwxvgki3Z9sSxehBExCXJzyZqQikaZzjzBvkPMkhtxPBUHwXsMPPvFtMUBfhguYQreqFpH5h",
  "key30": "3Vh1NGozqca9JoYD2DogZxYqoXxAUSYJMDydBSxkWrJXdgxDKmjJDQ14zRS1dumLnZ2vEBfpsFd4Ci6sQTv7XauN",
  "key31": "2fuwZbbXHgZJEaoECbxmP6n6J1V2P4gXk6qW5MuJemgPx4C1yin53KM2q7cGuSkrYc5e68dZGA6XAKtKButmdjLb",
  "key32": "4HqfP86MEuxec2ua4vXVpUsoMc1yJcytgSf3QANbbhKrfujHEv63QuPFVYGSFtQdtXUBd9DYe3fKoUnsjCGgzCR8",
  "key33": "4kygxTExsFpqzShuvLEHs2SGSuQq9jLzZJm7izVmSNJVfuXDLFrmeR2TLMFwUksbyyyHVsrjjGxk1H92JjUy9iP",
  "key34": "7DgVZ6Ca1LR9UN7agVbgJvKXhHhX1QSnXTF9LFKNjGVZ25zjNYAMM8crmaPxVTBDcSS96o9VDM8tBG6tw3evvR5",
  "key35": "43zH3pt6R1ntWG1zBzf7rrp52fKWmEdyXJX8iCUYXQN2QhTq3eUcYj9tsiXNmTDrNj4KFLsg8DF1xbg8JEJKksDP",
  "key36": "3E9mVWM6m26n4pUxDxebouoHiGANFiEgSLcJm4te1KAEwBC88n7PpN5yndD5krKPuPTTW5vSqfsCkhjv3YZoQqt",
  "key37": "4WGLJB1Rg3TGhEhaQqZpSXnJnEQKUJCwrGa4SwcPdx4WqVbSymaE1ukY3Sj3cxYZeRMFMLCbizEUub398yq2z1Lj",
  "key38": "3bqzNN7YmGSBEojJr2aXr1zviayxLE99ocPUsXrGCAsWLNfGbTN6LWVL7ftdSJZAqzCpoqWDotyLyqWw7NCCGN66"
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
