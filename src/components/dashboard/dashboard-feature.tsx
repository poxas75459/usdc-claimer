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
    "55sErx7j7v31wnHcEPb399yymMeNf4uXDFH68rQJMCA56PPjDCEYSgA4Hoz9ZLBcazAYzzmhWAPEEk79s6a3Vx41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cCDQASY47SNNcfvmLdHghE1QQM2x2Kqh4LCqu7XgxbYV2kLXRFn5PhMTPFXAhQBiy2tVmzfD1Wfw7iCr2q8DqMX",
  "key1": "5fn8KzyLo89E7y7V9fWRKZmdUkw5humCwfpJWgbiPwMJSQEibWBJn9gBwmHY1w5FR94qEUZ8z5b9TGsHNXdX1gmJ",
  "key2": "5Qd94VzcmjvqpJvKj7UQpC8VsRF1fgDnbVmpPhp2BedrVZoCB98hBZG6fYZ7EuoLXw5x2kT3VYaaLAvJ9Uu6v5a2",
  "key3": "5Jsppa7CvD5KunpFsooYHKA816pgohEG5VhsHiRvChgBd3e14GUL3uXiRJ39dyB61CwZQpbgmbmjBxCiCVvjMGg",
  "key4": "25QTEjyHonSpwsyxg6jVFxA2Rt3PFmekvpe9GsPGRPLbyvzhaJKSxVT56zDsERVkeKGbQHjAyncyj4cw1DVscK9h",
  "key5": "4MMDGr1tSPNZh9db6LdvTqHs6Yzknia4yYfcq4GNPN3PXsoM3jBLzypgJF4q6KDF7YVw1wfXTUzgAvYvP4uLpYAB",
  "key6": "2xvYKKSJLxyynAo2bn6uaJB2Ekr5Qv9aBumhRBJcP9tkA2QexHaXakztQUYzrgKgQdMSXUBSFC7Wk4zAT2dnqtpS",
  "key7": "4ih4NrvuHwgRLPG26YpycZRq53b57w2Zj4NfhV8Xskh97ACBrjrkKRM25EKSDB4tJSwgoSV2BV4WLQoxjFPqSLCJ",
  "key8": "2DnewEDbJ2YuCwVLRfgfkgFH6DayDCamYeE2WheUNtWxuBpY1pq6u9dbUWfPfW5Z1gTE3PE7FPd57HJ192RpHVUt",
  "key9": "4w5qHkGDQka6UEV4VSKmnWfi7Q181KeU4kwAxdNtxzMrQECKc6ScZqhNqUZBYBMNPHD5pcqFMXkWn1LXuuSf4oGV",
  "key10": "4WJ3b5SjfnjzMC7kEDm7QjxsUxY1gDLEAaxsiEEiNef1oQeWbZiz4GLY57e2bbiwuDEjvFZNiboSspM8NN9uE967",
  "key11": "5C7ay77iykYT97BxrQiZKwrSKaqNgkXYtThixxbHxbEEvAvMbaFEYhyHE3Mqrar4N5v4H24S4cYQXwsSwez8fbw4",
  "key12": "4b1bbSnmP4bhVeBaZdXQLUvWHgvcHb7eg2sqWjPPwBAUdVT3oxfXYfhgMi6PgbJNHGucmx3w7uncaNrNggFJR4Ba",
  "key13": "WAUaZMiNRgZczNCun5PYp1aJySH8SSFDBNTNEcWpKpUgUMrWJfxaornuxfyor8sSm3v8kBh6Dj9RSxU2ZtYEv16",
  "key14": "3KjXmvh3Wxm83nAgC7FnfetpSt9nZUb3eh5pp18qv2UZFhPbBAZ2HAW95qsEsDrtaYLVQbNvSKxUNtqVSti9fRMg",
  "key15": "3eLGb1cuvpG1t95fv7m48qrpigtvMFFtu93mK9n89iDWvzpQrLyx8w5VLDa8Y7hY7tzuGPEA8GqNQWsHffzCnzrY",
  "key16": "4ymdfgT2g823SUdf5UAxn8c6qtaHrXjhnjn48NHpijTo7re5m9BJg1wqd2ubFEEi6ycorLQhfWQgQwWCPCrEe931",
  "key17": "4eL51g4jcnrKtypY3tXArvqxNjYxhcdepanD6Hdx9KwneackrWDTfdfSePHpdnpU63qxPnq2Vc6QuJbE8WEDzwaf",
  "key18": "2UHHVwSpZPJNNNmJ9hCHWgTKuRJStbdZvM3ESHKtnk2xJ13xuC6t3teybQRzDaDSFtmYFEPP4CCgJ7xsfcSBXPXd",
  "key19": "4WEUc7MsRSyVyZuGU37WeiBBphMgQtvSF376XZdZN1jXbUnowG4fofh6trporabPXyzeMLfkmsppBTgPa8e3dkAy",
  "key20": "58WDJggbtPHpG1Rs6zLLPy4bSbeVcDvDiyGhYXwhRNiyPAjTbkX9gxopFdi3b42HiZzsdSiq9FST3gDLsHwEG5xc",
  "key21": "5ozn5maQ36tzjD8ZfvVWvoQjw2HZJrUwmM99NFBpdSpCUTzoF6F7YnTubLvfoTSztd2oiBk3s9VSBi6kBUZ8Ee9S",
  "key22": "3Gh9fDeMmARwH9ohro5NNyvi3H1fXztxAdiTpzpp8vHtHHg7HoEwQLt9Ss1nXvDKoqeKuqoapVqqAg8gyrP9etLK",
  "key23": "q2ERh8ViJFYApgbubMoV1ZsDReirfjYQFghebiSsGDEFCmvSajj8TwE16Y2ZKDdQesMC4ezq3rSVuMt1RC4t5Tg",
  "key24": "5Gu3CQwrLMhgjby8U1jW22deYwvo5kiDHz5s1VNgy6FCpRveyqm6UEZRDqk3zXmH4avxmmwuaW6Jkby2rDQLZZYo",
  "key25": "2xp2uJnkWm5JnwPVL8kkJ6QZJDQPdEjC5trX4QaoW1TKbgEE8f1ZWCjBwXzfU6D3xsi9Ysmjx5EtLTJu1EwNWNfC",
  "key26": "3AYYky6Pzj2C58LPmHMWfSzHuyx49hkDHtqHX5CPj6TrVPC6DiergeAuLTcRhgYgKALCzM1uuwTLVABZiZviiTcL",
  "key27": "4ffV2AXnEfh4mnBfMnyEoTvMzGvgoSDq235qk7rEtqFsijEjfgnZQrgjBc2GTA1szqjZcN76F6uzB9XzkodjmP1D",
  "key28": "2A6JNTjutSm74HMz7hbEWizddXUtMUvGaQbQzdsCM8oNLJtyvPq7qA6vv5Q3wLKGoCZycAre5Azoovtp64sDEArn",
  "key29": "2XFzQkmKYzVrGKEqhYArXWESteeNhPPxUDX9rq9HdFGuckUHv2oF6TCSTJY5J5KYye7c8sFNR6yXJHrPmQyCqk8j",
  "key30": "s7MVKYB7NjMxKHuciLUFS1QWMydpuvWhBekd5nUVLa5ANcoepgzeBkogmqS8HgJWbLgt4JvrAyz3W4jexXgqA5w",
  "key31": "2E82QcxAgoyqZw3yDx3q63TLibHXNHy8LGuxoSNTSq82nncnvLHw6W3YKMRWQzacz9oAAwFQku45DyjgbpJ46hzR",
  "key32": "5XuLA8rLsXRo9vJUHKZzJhEqDZVq4nE5HtFvDvn23V3JW5ajVnDWpRjRFPZR88qD3y9WtFhmqNqUCkeccHNpEVuw",
  "key33": "3vsSUfWnVNNrhS96AM4peWRKHtPJAQVUTKgo1e472F8nb5aCbUiJKAW8ErVPHyJnaWoLjrCfgMp927UYS4MAmFrM",
  "key34": "2UsjjzTKojBBuBjrdLw8gHQzfxvpEXirLBcM1xCZf62nJASXYYmPpMVs5TkN1usRHkzPZYqDJiZbtm4YwESHjmec",
  "key35": "5m8muF4Nb3JKCADGNb48zu81h3XApCs3tCzbYtiAAZAhTdb3afy3bvCTL1HTqmkADz5jfihoG7dFZhpogPLsPjeQ",
  "key36": "bqykY1ifZPfbptF4vhxqEPfy7cGAmzotm77DfVRcD14mhZxvn6923EHgTc6NZMQG4p3doLYj2TR1oih6jMWa8qD"
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
