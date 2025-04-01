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
    "4eLDrsAK97aU2fkfrJ5GCW3DKR4wCd2LbFYxMLqgGoame5XhnLz1r9tUR586ryVr4ymwFwov4yKzVS4wLTUEsLwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuQJ4EZsNVkxfkB6zCwz8fyUarQ3beBXqz4ErXKiVHZ3dTCfohA95c9Zob8c4SE7YAR1E6Q8FNSVkkjRLghU3X",
  "key1": "61Zjh8YmjnNJfrYJCoPoXmdsUWuY8tyedb6QGGjcGuV6geGVtQ4HuYL53Xc7pSMNt9qFiYa7HrTnoRcZvvdC9ZN8",
  "key2": "5F5Yd1AFjhXAbAVNn8eG14PppEDNGW3p6G3wgTbB9giFq6w1jbhYh79ErfZFtPt9kkyDxtt4qJd3i54KFtJwSaU9",
  "key3": "2hkLgCLjCjsjY6PFh4AWu9aYVTNwQjWi8dtSHK6hPyLSufrwGanAqdMigrcbEQbDkPZXfF8UDsTkevBv9sxDfgRJ",
  "key4": "t4WsjG36ZiJeSNjkiaacggrPCtzUJcgxVpT4imDbbkNsU5NBn2bxdcTFLLY18hvwnyFdERbzMkme52cGaNqR5a5",
  "key5": "2aZBr3Yfoy9sL6hpJq9if61cYjYNAR8enPMB1dzZUBCyazsnyM7V2CjCKgmxyYMxNPu7gEeSVHFWFAraTRPwhNCf",
  "key6": "5Ec49SRP7KdGrBYKG2oNWxXogVjwPfJ8UZfXRxYBg29gdU6byNyRMeNGEKBMsR35g9Z31Qw5VenheuugtvhD73W8",
  "key7": "5t2k6Pz8gVF1qdQvWGUuFGH2q8ZxTCqbMkdbpHFGC2uyYPMY5Sdem1KTmYLzxSnoJM1tJapBTLpWC2TW4KJcp1fy",
  "key8": "4CxCdj91boZu4sBzk7Am2DFQzLZYDa3V6o35797z6dJXKesKoLUX1TaWaaNoApKb8yX7X55oHW1hTVBWzB3ykGxt",
  "key9": "Dtcrwu2xWkn9LWTxWsDgiqVB2asYVEJvLkdP1hXZkPj5r5mRvXTFcxhJ745ppqCE3RJAwBesQjQnvjkfEgbR7bF",
  "key10": "2gvDQvTvwNnUD9ZpAGQvQ12LkddUpzgLUdqtRcjLRdypFxi84Rp1bgLULgvdVcDjkzZCVR2dywCbsyQCLqN8sD3H",
  "key11": "3JKh531gPHAAMSSBgpREtTcgaxyZW8nF4vUivm5fKokcsvm3Skxwq5tq5RenwjB9ZorQAv9NVKstcYww82rDp9rT",
  "key12": "3SbSQvc8jqAemg9Rpa2W4ZAqC2js8iZg4L4Bu6THtp65TJSaQgko5SWPNmCore4qcEDmBSeoKcsn9EBVaPv6n4g9",
  "key13": "Xkbx2cGrsLbw5whMHVtP4BhvUc4A2JFXFvZSWPoCNZnYEAgLTXw63vesRozeac4bSasnJb2x1fQVhAXVkxjtCV5",
  "key14": "Lonb4NZ2Qcneqwvcy4eqU8UTWdZgUJntGah2fBoFSRepPbpanLHRsYyCGdUEaBNHcaMqoh18bnea4WeadTkj6Ym",
  "key15": "2uSxvsUFtUvzBT1w9YWjHcq65trNYkXUC3ebHgVA62WDZoGpZVVmFJxd4g55b4zqaJixN5imbwq6axmse5nZBqmU",
  "key16": "22V7TVn426mzgeWTxzCYoxDTZEou8wpDeFUutEDbEw4Du9r1x9KH27XbJvy6Q5Wh7MveAa448zDDh8LBw8oJnVN8",
  "key17": "N6MSVy3WLkA7Ko1zh1p2MvqqNa5uo3DnXt9fx6pWVaM67qeyQgF4NG8dWHsQ8udNfbX3rCupATi2Ed1gXUbY68A",
  "key18": "5DqLJpghDGK5xNgQa4E6uprk19rqrnFobeQnrZk8zXjogi8jL6xZgYkzDgJKFmXsTbKvS1vMwXPap7DxJJf1FgvU",
  "key19": "2YFmLCaPmE5ezQTDBLNqkgQKKAfDkYBxx6YAyENZHjXx3V2pkwaG3qh6EPhhmDLWeGt5TVkSxENE5puUkPitBMNr",
  "key20": "hk3uodrwGMLERhkfCBXfyh4KjbXQnYW9Fy7bw1K1sEB4eV87dLZsauPesq2B3KBBXNDwtNishDrY7k7kdoQ6JGt",
  "key21": "5SYZqva8vdLJMny8ZMq5VRuMuriixAbt6yay6HdBCogXkZ3zKNg7q2mJrcupnVqnqYVZnnZaoHXnEFhoY4mzMU7N",
  "key22": "5NVcfr3mzyf5J2c2ti1aWcEsyD9a9uXAYqkhBBQ6T6TouBj5CQSNeK47wiUHXER9a7NhdRgFS6fyxm8sDcLvHiD7",
  "key23": "5PT6H2huj3f5j3XLUSrKQbKJLjUKdDCauy6N58ZwkXWcujSJadDDK6vTeN6WAcXNiZYT2ZpZgiXC1cRmNmbsFGMQ",
  "key24": "ySu8b8v5Bpg9v2xVS8obiMxwMXfZjdu7J83zgQ8ZvD4q7TV3nzx1ENQCdk1MNPtqjU4EBFeQrAmHzqsx7ayndSV",
  "key25": "6pYyXSk4FoYhkomZXyxwndnTpR338xh8Bv6Ftpoiu13j3KeANTtAXBjQrcUHEe8Baqxu9M4pynHvWTNt2JzNkVN",
  "key26": "5tHNjPFNf18Y3tmPfaGH9GGCFLmpFqQh2dtmUSwVbwjpKfrWKjQmpniSRHvEtH5CK47w8KJoiC3quUETh2MbQ1yF",
  "key27": "515Lf6mNL6RRWmJ92pMTxgttCHrP9rpHX5KjH6GNwCiX8cGkdp5szPWsLjkfQSkfZcbbh5jR9CYzmbFnMQNMR9h4",
  "key28": "4eo7ZSRtYm6Y9F1szVqDTzEVTKAPaT3WYELZLLRYzQWo7pmv8fnh3ACcoP4bSJeePeV5e4t456vpmCAQsve6AQJW",
  "key29": "3tWDnikzEaBTGQXpHPUn7EyDznL6XXiSAZvQ2kjcGv6zccdo63Ef7HffhQqswikeA7k9ofsp9f9MocuZyMyouBAz",
  "key30": "1GF7jkoF5MUwCg7SqVaEuSwN4bZazfwnqitpyjXWqPYgJ84tyqzwjf2cSA1JGz6zhbcDHpETnnJyGGT4jNYe91b",
  "key31": "4kjwm2s8q3VSHAsFTE1Cttoa9MKd71bBJsNDS7s3g7wzQogxLCmVBpjoY9LuwyEVX7N1kE4PUTjpNz5aVuKERaiL",
  "key32": "xgaAbBGaaRytsRKBQNJ2uz7ipftas54ykuiVCSEpWAfygA7go9MsTdgw9sRMCubX5HTyfgVMVRp3JnT3t1i8Zgp",
  "key33": "56X55LbMStbtFAyr5k7XNhXJpNnAJm5CNojK4TXJoZMh61SZ2qm9dwpZaK6thmVTmqo6AVjNRm9aHvZGJ41G6ZyN",
  "key34": "2xucxECajNoQ5HVnHWK2iaAJDLnFoHj8Jevo5729CyUzsnmpneDkD51sB7pTpPXDaSwezBUBndDoe35fyRoRoqiC",
  "key35": "4g3WsuwzUuXaHmyEiH6Xh3DXU62pFHvCX4xfpF4vmQzdfWxKbTQzjhkSKposHRHvrwwozLKgx6r8JMJWSbF83Xjd",
  "key36": "5UfBiG4D5ptjfbQJLjdugLcn3iT2cRpHTKwm92RAy69a3AWLL5RxuA2o2D42PGg6g3khQkxG6W4qeXm5oWJ95R9h",
  "key37": "2B4Z2TLrniRxdzKUCGJohzo6Pje1EJeSfT27gZYa4Cj5nUkFiKEeM7iwuSjJAjiBvjAR25tZqH7D7ftd1JbZfUfH",
  "key38": "4ZzaSZy6fgqTKr8zMrGbWBEXyExo5B5yJDp6bwFoJE21sNDAgpBB5JodFdFSKwVL1YkpErCjjwD6tXLo3dTJoeUJ",
  "key39": "4k42K9bVFyiirH3BfmVcqKhwWHUC4b2FqPhcSS53X2gn2UymLWJ3aqP4vyGWWMR4fiRRae1SYptvRzTNp4hpHfgb",
  "key40": "2HSMC6gCzwbBJ8w93kmsiKNXyPkvzbAGDv2b7dMBYqRPa5rFFTrsdzTzvwtn3dc8SU8B15daysN6JGHPi3a7NJfa",
  "key41": "63EfqSu5zVejvWYU1PCC6zXh2BnSCYHSmAPAVTRUR3rbdfL8ouuAZ1xJU4NsKU2mqvYh4RDFK6Sdq3jt9fXY3z1R",
  "key42": "2rvyo7GcRQrrfoWCxLKPBw8f4zbP8afgrjYaJN3wdbZPQUQXnnfV4JY67JZjrdqTxwwHa9zDdS5eFZVkmFrnQmFg",
  "key43": "5ujME3GkXpoNg1e8NNSwHMbaC5EuaXpU5Nyu4hZs7Ruoti6mA7DswzRVX4LP3g8EXQw6UFqJjemmqs4Z825DcsPg",
  "key44": "chfostEfMS488Ag6ve9dLALsYuZu4dzj44KAs7mUr4z3Ds6KGBYj12SCLJA8gnk7pTfnMTGnYp4YU9vJ16N3CCr",
  "key45": "24hqf9f2jQARgXf2atDQrJwxsqTBYcyFgs4a1LcecEhJQyvZgb4LpP6QUiJSBasAmizARuK91FdSJ8zvwz91rFLt",
  "key46": "4nvdtEkfxHY9g8gjEStPB6o8RrnFQ4LGK1qem8S9ec3VpRv7mSpjVeAEDCsMgNwKVR6dQZjydYSmHAnpXKx6q4sB",
  "key47": "43rW7SkULbLLEhTU3DNi6yj7ofhRWi1UkSSE4okF8eSfnvTi8WUEu2K5PXzyQhfoAr4SDCJCmGAzqJCj5XmGZoZv"
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
