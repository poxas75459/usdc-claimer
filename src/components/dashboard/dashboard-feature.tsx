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
    "qfJFwHg9ztdWoQtfN3jYJ3M4ppCtNVA5pCmHdcZvaPjPwHmeSRqpR82JmXCALn41Bg3ngtzKYxEaqzxrYwscPJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZeTs6poYTrrTH8WfeMdudpTa63oB5c4zPBPA9zS82KtKEcGh6K6sgiB1jWRVF4N2FreMKLWBnkQGqcju3SmRpav",
  "key1": "31j1EL8zithGyJBGwTE4NC1op4ELgYp9xKpkw5s8yv5oVSx2vFciVsNzm3UVtrC7UnHQB9bHWMzFmCmxxDYvB95S",
  "key2": "5MCUhMS8dxaFiiwJJMhZJX4PajRMToCziSXSf1dqG4nUbQiTFbvueKZm1ixiT8SEzosHLzhsypmskk4PcvtZXC8H",
  "key3": "5sjZrGGYcnSLnsS3R5AHHWEfwPYJYd4acKsBwXG2WCb8ebPLZH5aJH8mTWHPmmxSdfk2x4MmBRt1UAaY7ApXoGLQ",
  "key4": "5vTckrfkWAU4sQubkB7k8BCmqzVapsJ5sJ5BFKjAm5JnnERwQzHu2xj7dQftHCPkaQLq6Ckr6AJiZDJ21V9MyYEa",
  "key5": "4M75N3vt3YBAH1cKKi8CyQKvQfwNF9PmweSRhP2vskMkFkP4Xvtk5qjhQP5DQqzkPp6ryKpAxS4jpDgGHYz3391N",
  "key6": "ziq8vyFTVbREoBAgEWZpxKsYS6LpU5WkdGBzF5Gs9N3X7g76xYy94ozGT7CBFFGNchJzBEkPmj9NV3BApmhNtk6",
  "key7": "4Zudfb8KZmZP9CqcF3GYCLohYigGTpPD7PTa85zswCokBaVwH1onVAhegn9v1scvdHEUMem3AvMyDWtkU8aqLdKr",
  "key8": "2scS539tE85yEfrtW7Kwwnad9JK3Y1fte7d2TDbNqSgfUbhi51NC2AHs74JPy7WNz8AyDkW9PfM3znLN4E6VhFDx",
  "key9": "3KrixSUeQ9AyXv2VVxi2NuaZLFrECwVYwsR5wSdPJnp1f2HTLVrSo3aWZ9tJTiR8DmuPy4ZV6KrDmCHjkTkxSW3V",
  "key10": "3854CCnev12yFUueqxhv51V7N9n8MSs45AxcU9Wn3ksaF5Ajt3YaEw8E3gcTE2moapam3qgZP1imo5uDQAJJzLiL",
  "key11": "4E1VjudeqBxHvUAVzyk9FvExFJQEPytQnLK9yUAzTuMSbA9K4mTPmgQBSRhLAsFQaBgYToPhzyqGw1HiBvHi6jVS",
  "key12": "2DFRkhdnxFrjrky1gZMLWUjbkQdmorixemifZpev7iLfQvQgKuCrKh2Z63xAirroqMzfxjtf5CYnorGhwuruboBM",
  "key13": "KtuoEywdMfs2TPKkvZLY3z7Ftx4BQZmtMcZvAniUCv1m6ZSRUKGjSafUwoXjihrTeg3A9QBxLvQGJPXaaa2TjFg",
  "key14": "3Gpa2QqDVP8b2888Ab5YgNfAQnivjdTmyRmA4EVu3ZwJPxsz5WSneDDYEeevWgCYmrjsBZDvqohb4MLvVVbUDkvh",
  "key15": "PxHFG31CVWXMpsWpQuQNCWhGs1DP8VAmveY79gSonB8k2f9hztMGG3wDuVhnEVdUm2DH6Y3kiKfP4k2fPwTKdK3",
  "key16": "3MKqEXrYCaSbxXS7URgC5fxniCCyjNDoAHvhVPdAWRi3UsQ8TxuchnxncMuc1zdiv6UkdbaGXwpdLJD2cz19K7Hu",
  "key17": "363YZiwzFjSSb3pqgcEmyR8jo2GjsF1gqUtETweTN7rbecSYcqoaqFnosxGd3eqVtWECnkXrpY8iGv7mo5c4GXdY",
  "key18": "Hs8vZ9Ks46sHVi7KyYsDYGTtJyJVv8rJBda1YKRjCaPNn2H2qXSCjjqt685GLwvpZT68K4wgLAPXqBsYUnm6Gyp",
  "key19": "4HFbS18SeDafBZM7B9VATCjGYXkHVxd8uNPxEmyH2HMu82xprNyqgyqijfDzBsJuxLQKEipTLZ14ngXuUjZDQuNA",
  "key20": "5vSfPLjy7AVu5fFP1fsX2jpdJFTPuNaG68xbpA5D85SFMvFZDQLdddiCzYcibw82netFBgAPwZBig3EJMuAgP18m",
  "key21": "491LM3e7oQTzBfw8RL9BAXtVFuywA5H6NqqJ6b1NipHZfP47E6PLNNxwKs2yYFZ1WBE9DGzG1Dr88aK61HRLkT2S",
  "key22": "3t7CRbVAYTKrBQitxoBokHdX1sQvWR1AK5AoTvpphq7BPV7EXNsYHXJKQhPb3Y4HJ3XdVVcmPB6d5HYhvwc4u9mH",
  "key23": "4ev1YkHWcRwMeYBJL5A9gosDzbMLjs2VRY3YDMhKJwiH3Dmh5WgZD4WMdZwJ7p23Mz2dy3zvFAkKF3kDGN8rYBWj",
  "key24": "4ubXca5wAsx5F5c2kG3c1gyjc9zXvkCBpPKdM86P97UrQ61JyKdhmUQXpVitxtWuyKpDsSxL5vB4eavAMNvzcrma",
  "key25": "3crtPPKjEkZF13VpJ37LLKKYGVY1uYsggK553vQBXm9haoEPMm5JnueqW6uYMh7q5sKCXfoqdQ8aojun4iJUDFYG",
  "key26": "4hddvozmVY6CXJnCjew2fnENjgZWdLr4xBhQitftagJUFXaYASKiwFAtqdYg44n1J537HGgmCjguMtYWrRSnhxk9",
  "key27": "5dmAJ4kZMiB8AaMwMbFaxFNmo4mP2qoowwrP3L7K3Z8FRNqn3qs26tnNqfPuwEivLS8UTFuW5iNBNSfpVaHxv2kw",
  "key28": "51b7QKH8ctdMF72z3muCX61HMb7MDbGt3kvdVZHJs8fzyiKzzW1cEJgjFhBBeZwviwqU73TPaa1XWpQ9Pr4nqdzR",
  "key29": "5RiJKkvZFedMH41U91BAHaJLX8A11rrW5Hfc9cXCk52Z9dd2NXdqKfCo1Wxavw7siStMZFvgYvMEUChgFHrFSWg7",
  "key30": "4ES3qSDbDZiUNtfxR9fB7pqZYzdhkCWoTjYK2Y7vxXQau6RTYhdsYY7WcQcYScbVnAX55dPwh7HTQfoCeeNzuCGy",
  "key31": "3zjDvpmu12MCCToXULFtAEQUjz3qNKRLYAks9U9oSxEEbA6ZPcPEE8jCiVeH7E6Xzgag6GpA8p82n55Bz1PVasyJ",
  "key32": "63vBLyntzP1rxC7m5GsGvz9efNTVSGPL4sP6PxVghdCQzuhNsSC7pUigSZ1gMDnRU8b16ZJFaGYcgsvcPFiV3Dfy",
  "key33": "2KnBPNLqpHeCzEvcuandRYgWK4BbQCTibWRuHWuXD3D6stQm138GY7me1AToeRHxvdQ2VTshc2E1Pok1XVpxM4ck",
  "key34": "cXijjrkPXcwurSrzEktARV7aYhcPCZxi2sQb2XtbSSbSA7oQFcm7wUDkHxCzFo1DuDfHtK8w9UnuHRvU8mUV9Rs",
  "key35": "FgPaaJAGhKAWcD7qmu3SjYz2naxTYqN3rbZTGZxjkDWG6zZUmE5YfYdbruQnAZAoVE3KuBmy8Wg5iH9zGEVZRgV"
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
