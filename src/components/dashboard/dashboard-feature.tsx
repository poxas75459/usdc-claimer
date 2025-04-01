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
    "2M9sgziyTD6fLm5Qq2fdnq1yqJ1QmgghdyshnMfkLZMV1da27oJFv7nhoGdgUMmZ9cSknS7zdRs4SvWmRm8GFLio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NP7rhr472oL85fg32wLnt1RaidPifoDuYyiwKi1FPk778XZHt7mfBQHsnvLQy2A8gzsSSoTByNvtqr6vVvhPrx6",
  "key1": "3tPnUQtqECaWBjf5qe8DuSkFVhjFVHediqjEfeGGJA7r8rNZxzpmN7nkyf4G3AJTn2K4Cz91bQstXKDB8U6GdMZu",
  "key2": "3snB3eYWJMCee3LTyenceNYa99PNE3GUvFnpLQionop6WrPM98ywMmZsTqUYY1DW5jw6JB4p2ejRHB1WpL1FS7Jb",
  "key3": "2TmKrF1CDEwSZTYLXWmJQrFyUGw1gbh1mzpfUoqndqEAef6VEnEyX5U1w9JtD5YUB1gg7Rn9WLxapiQN7RxiAS2d",
  "key4": "2ApMSFWstn2qUesZEzyRwaubuahktyfDEcvPQhZTEwgyXz4z9aWA9aTsxCxtyDteUcyPneqh2aeSdoQS8UPD5CVq",
  "key5": "RrxorafxNwDMJSaZtBMUb3NxvzyFfLYnRPTZG6gs8LWsrxxu3yf89BEjSHoZwDZnZmrYriSzbggTS1HrdBWSgwY",
  "key6": "2AqhAAMLLsjgAmfK65guhXw8wSQdkvP2Trk12hK6BNPgNi5FdW4uAn3k6WvnmN3hsXK4L9VoJrC4wQG7z7WLi3s2",
  "key7": "UCUM6nD8Xmd1wVVkKBovy1VZ2E7v6oh44XgwkXHVWHonfw2zqYQGP6iWiSRZNdBt1sZ4UeMdFpZwfRaBwUEWhDQ",
  "key8": "3quy9vKLw25Vy6iBAyrEdWabKHCAek9AVUxojWnuAN5cmjJL7T96mRAe5t3Uf3ZXxJdCiWHrk3LRBY9wVMD4GF8A",
  "key9": "4cio1Gnk3fJgZ9spJcMgZi9bJ2LtjXotAUmhhdCBwu6hEn3tndYWfWTyCiYGrG8CVuNeYtHGLFQtsUgwfyXzKMWm",
  "key10": "4387RJWMsr1eZ1smyMexBUCwkLQ95rE6cdZNt2txHUsP9zBD8AizLWgnch31BMEoZkA5DJuBJqp4UgqRKy7mtpBL",
  "key11": "496KgGq6Ug9FULM5E8vTQk85p1kemDSMLkCSRwCbru72Fzfp13BNbnv1oJaH6D5vsTPzJJ4rdfcMeVyHeveU8p4H",
  "key12": "3V3bbCswiKtx9yr8GT76up5Vet1Ykf1pbcNaNyqYU6McjYVEwkZAhdqt9Q6eYFHW5E6wU1Jq7GvY28FXtDyXKJTv",
  "key13": "38dzZZK176ckhUvJ6ghQcNJs7Xhq5GDc7TFFfTv4GWbSrijmYhMQ1aAsfn2iWj6qneeKdLbxL82bJQ22dJDxuETo",
  "key14": "oxuTPHcXegd2guuouUvmJo4vatFt53QiPgXEP5c8R65Cd1L3nrwxB31evVU3Hhn1GRGkXAAsqs3uVmeAUUsZsdG",
  "key15": "3Zhodrn1eu6B3vybo98z9L1oJ5bco1FPAZgJtTmksKbmU9KX9QfEDwKe6EWK1vmjWeUW55zKUEeUyBcM3EmdTEeA",
  "key16": "3y3cyz8R7DGLnyQK6vzuLJJtBxsVFRfBf8NkAndKfJA6xM81aKTn7hLQ7MMtoCRZoS88kDtd7Zoe6JFfMRiAM5b9",
  "key17": "4UeRpmFvmZBmDH5QWsrcJ3WNjAWQutgrhFLjWexLyJHGc1SxtJkscxcz7PD44YTg8hnpTtkKqPryoNx3CDGT5g1",
  "key18": "4xVEFaqBK87DX4kG7J5uFZPW1JizxfvbDS5Dui8kNLs4MPKjoca3XZsgxPNskKSS5s11S3364Ykz9F5Lut9TVCvh",
  "key19": "32qi5sAnGQNereMUMsWRiQKW4Xgvhw64iWHxXdgeLQofa7FCiJir5Dua3V2YGCHsmrZdzManyMhgodMejwQ2zJgg",
  "key20": "5gbtqH6zCWFbndYiJuZ9fvG83g5SEATMACA9zjR2bvpzzsExdcqCwQx4FE1kbH2fv3gt9h9dKfAFTHE19uMBbMKQ",
  "key21": "3E9J4SPqjRK21qGnnpn2K3T2G2Kk39KPCeKEFPRWLNbAu5aXEq1UQP13Gh4iBzMzFSChCZbN6vZj4zUiwYEAqYGS",
  "key22": "4f22nNhJP6gw6cTMtJq2q3R8Ssrmw7Rvkb23qLbKyc1gcnJ2dyGPs5FKhRa9dE22Tk1ZWQRYd3m2WsiT6F7qJ4qc",
  "key23": "3GTN3T6zAJrBCThysRqiVtiTi9W34KfUnFavub2rteYjmCw3sk3mYirbLHKA9P4F1QcPiEoi69bRha31ibaWEALZ",
  "key24": "66ntu4f4ixD9T6VV896j5kH1DHqv9Fd4byLie3ouBA9gQqdDY7bGcqU3UPrTHSXFVpSMpXS4ZihBJQnbjbf4Yh2T",
  "key25": "5EEhgcdYug8C7kvDXc7EXW8AJfDe9jvzmdRwXppKj7kkBJEqeTdaWXNDj8P6w4PsZHGKVdn3RaAsdAszkpDNFY2F",
  "key26": "5sf4jTWt7q52oMrBHPEoYWgV323nRmAdkVB6yQUYxKsXqYhcUjSZivjJCZxj5pM447kxZsuJF9pU3iEr7p97vekb",
  "key27": "3J8LTHrvQ75mtRXbygrWzZJvR8K6KVMpVo3naXsQBy5meNSwEB27wqFqkEVtDJB98sP4LbTPx2FUvUmwpQ3Z6kVH",
  "key28": "5nsTadMEWep2cpnBZ8cP6sAafii7X9fXmkA4wMqi93FYdjYzokmEBXzW9E5d27hEKgXEh1qoJig5GT6UtvW64iLZ",
  "key29": "23EouFD8MGvrDUBMcfVVceKj74hiACEqhqqyCrKb67vkPfZPTdU9yB184dWopxX7RnnbS6ij17sA3y96tgAPGyAz",
  "key30": "2oLmEFS1JketACZKbSQw33rNHUd8Cn8pKLLWJFG3oXvPGqftZpaexV7JjvbAseupk5t8SM9iPySmin1KVGnHbkPF",
  "key31": "46oVnDV5TtiGhmaFsVzZojt1QNQ8MdVvAArt5k7Aj89EcMWxmvk2YxikaqkrcpS9rvufRnPgVaJCo6f5auitkBxx",
  "key32": "2Kw8xWdV4vj7PjqcL74fe5e4y8beGKnMLjD56pULjCBeKhxeMXeb6VkxWQgRiXCokcxFyt5ntWBDfWGExL71Aa7p",
  "key33": "4MYX2jENGWKnMm5YdZW27aEATCozUpPu7xc4DTbau5TubjDty4CZfiwJLgMeFDoNFQPihiTg2KqTUaY2hnuwwBH2",
  "key34": "63Mep9kgFMgn1qZJ6PtgBA4RUrL1q5Wq8cYxr2FXb7pS3MRvw5hahmENqar7HvuXvBGYTYgxsBrRiHvmqXaBNp4J",
  "key35": "tJup9iekje6fb1isiQeAufPxYmNHCa3SkWxsyHjQ2rc3Kjpf1vmRL8o6nxvVgrsubUJq4nkY313cpTM4AQk8Xkg",
  "key36": "4qMXFQtv5nMpkqg1a1sdZWLu2Xo3nL5o85ufvbxJsWGFAsyAM9uZpz9kZTTGq7nQKwVpQwJCmfo8KKphkUma7DXq",
  "key37": "3th2v1gBXx8ZiHKKtEctRHTwTdacmwXTzUxt2E3JyRSPv1UU5MhtDUKXE1kBn8AEoFKWa1wKn2e7tt39SYqhPnGq",
  "key38": "N92o4L6g5yWHLUtzWrUsXJ2nrwJ8RL6sWhoQ4auSr3BTEeP6R87bptgzTbNeUys8RbqtXSmNu82KuUr2R9UgghS",
  "key39": "22C5UTr3y3ddeoqNFQYgEAZGysotAZXKsjtivZmbXHj57UvZsEBhRNoEbdgWpXSWd3himrdUU8aoZU3oP9bWjsJh",
  "key40": "223WstjfWyiFjZCRnsDaxsqcwfyhh5HHNrAd8gLbH6Pgv1PBgw9erabtCYvM4tcMxhfuCnrSS6311BkwLe7AXxjz",
  "key41": "3spn9rp5uvKdyu8dbJ3D684DE4e5xZ4Pacnyc6XFAwp1mdgFqQJf7hs58kggnaihZV9kkjC4PQe5M2odGg6ZBLGZ",
  "key42": "365tCxaULtLqHzGSNsoAh85WQprBjtPtByssJ97YdJhZWaKYjkxnoADdn8Fb1Wr3AikMuUDwj5peRvNeRkChXKH9",
  "key43": "3Q24P9FwJr9z7yYA7cqHy3H2s9BpEpciZoQtHTaCrYZCWGSd2dCGyHD2dHX9xSyfYbWh2aBrcSZNg4Dzz1EMu6b2",
  "key44": "3BnUMWh5GbFWAEFURRT813zXb4KEXRG7uvAfSdWnyyieD7p3phYShYAfPCqzmkASMEfSDVeRwbMoDGdf41J6ofUX",
  "key45": "64ZoezubSgnbMvjn7xVugs1RtGLmfYLTw9oojwZKexsrN3NorQFMcFpnpaH4FErXczmzcrQezTdHtvzdLdrrZvrW"
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
