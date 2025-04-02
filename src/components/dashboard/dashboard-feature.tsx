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
    "5QhwQjbQQnKCBtRK9QUeqt8TH2w4gJ6ayQti9BetJYPvirkzYWp2chGfb6m3xjvzjg8Shfs2BdGrD2EPKbrU7euP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31LvVwJh8VkT25UvV2s2v2iQtFpqvU7fk3bzFUuXmRqpWDi9jPV4ktvtVBAQurQBR9SxVSrsxHXT6Q2SK8k2fcAS",
  "key1": "2EmhoSyc5YzLRbLFGj4JNeC3RipGPg4JXTHNTrcAUCTeXJuwvZRetzyFS3j3CsNfpo9rmC174rpRRqWjhwVwvitQ",
  "key2": "32wAJgDcKEpcEnoP6CcDBjFRsKcTzTgpAhQU8jVCFhFGzbRRGc9jEAevt7jhfusDX6anqkJfAcdV3Z2vP47AdBhw",
  "key3": "38fvJjSL6xdi2qMpURCQ5XrMFjBxo4kAfLe4HCwT3FxVqYoXUgcwjamKoefse2A174JVPvQDzo7xdgxsbtKUpfan",
  "key4": "4n8YM2E4SzthQQWFJ6cejgZ9Mt4AHj52HmMdHd3VDr35mH3AmCcRtspJ4RLe49V16zyf7mDggxkZsiUUGYfbE8fU",
  "key5": "3kyFCxyR6sLkaj77khD9xYcUSDgxifWnJnvqcyxasCosAyiccenvPJy8GAAsbTrSRAddixtaaJACTL9wNQNiXXCu",
  "key6": "2YxDdPr6E14JuLmJRrt2tE6P6FbNuWcdgep64BpExcknHv9oyCFWjXGrjsY1t9r4AmZazvHtALG5pgxZx4t7zu4v",
  "key7": "4vf43sgeuAvVC3YvmkcHNdqgDN38Ct83Xup5JT14BCRqyXTeUJqAC9p5w4NFQQ6dZAKWDgSQxZ6Pr2tzE8VoDN2R",
  "key8": "2GETTg9f1P17kkdSsUzqieB6Uk8eJmq7u3K7HVfj79GN34hkbWk1dbVt6r1pCBxwixH2TQsKT1AY5qsNhxeyGPmg",
  "key9": "4e8RS8aWtjZSWdeKu4WencL877y8tBzyRc6H9QXv3eoS29z1SYZCm6M87yfViH51Q9W47iwvcJqciQ16g9N3Zr1a",
  "key10": "3EbqMnwaNXXrUsR9ELZGiWZr22HLLgPvTeZFjggbZU497vHGjcq7bD6zux89F16mkSG2o9GsbP1F8nKLLp5ni4Be",
  "key11": "4643iQxo7dMUQYWJM7W9hvzrvPF97N6js5AgoGT4EFmY7DfTMwmuGm1W1QL3pX86a5cziDkJZRtMP4JoZjbUsVaJ",
  "key12": "448BvEaucneygd96tX3nozRN61NbcSQjiiwZmEDzC1LchJXQWxELf691SsQ89gEtP2td4dcRkCVPGL3f6C975uYa",
  "key13": "5SNiekWTygPVoZQftUbjrt6KjAK6rx46zVEBiNZ79VKKpm5MbCjU21GiZR7vBN9gKSWicikUHVCYEpJg82rdB3nh",
  "key14": "29whhmEoWzpUJ79y43ZDKve2ZyeZJzW5kzc53PdbXUndAFTg9ZoHKx1u5hgWj2xR3DuUMQyvf4vCuZHvnw2yijsU",
  "key15": "3iNeZVcoKi2pAcJcMCTQThVW1GgQGVPtTeeqTrTh89bFoYB1psUARFSfxnMmvr1f5j8wnDa2kbX6B66cJ3LBcyXa",
  "key16": "pB2LVzem4GkdECSdGuHEefduQAnHfRoSeNyKNZH3vY9N8FgNGAX6XFW9AhoBXN9MoXBcy8yV51hA25iAsWSYkQD",
  "key17": "KGnjEtJc6AK55hWeeJqqhRXrtpFVT6nJ3qpwT211SJf2pmHQw2TRo12p9XkQWgKjgFs5giPoW57toTaxeKQeSoh",
  "key18": "5g5GnaPscpRTRXNTT3HfkgFPHmsYeWhre3BxbMY2YzpJyEjukwzHxynyBUcZtBX9QNk8zD8JhsVcQf7fGsoguntQ",
  "key19": "s4PdgwHjKLTQE6ssTFwrWD8anaK4tywJSx7JssDiuJAicURbCUBSoXTSt2Ftgdxn7MJciZJNrmuRZRjDDsioogn",
  "key20": "56c4inYwFUj11dofqWqAtGZ4aPZUmnUXjsTf7xH5wkE7GHtS6pQ2rULudx5uTMkyudTGDxnwt8rUfxLKSUQkN2xj",
  "key21": "8MpF7cqEQSsdNaiZkpJtqScE4u7eFTe2uFfPpU2pBFCZrPjraLXZoJSqJXGVdYjydQpYYEUKmB2EeuqwG5nVr1F",
  "key22": "65dNRwrCSfw6KFmme5atsoCpjjQjdEmJYcDkxajs23prvuh64MaNPL8jD6JBTnk3RV2C7ivm3vNbH73kf3W8BW6o",
  "key23": "qvMYyfHGbvtE5N1NDbbVt7F6aTJPkL2YWxYdkSPyx8EUPP3uWyScXPTWz84z94M2mQNyU3tdjRpkGbKfoHw66tb",
  "key24": "46cGuVnAKC3j1jri47SEYeqE85XYjP1NUPVaTG9v2rdGMdXd9QrN3CtB72TTSqWVTfXg4WZdHWMQovXUWgUaHDsF",
  "key25": "5U9uEtdrXLt3S4NfsxRLK1seDAsDNoF66MDVCdLjGtAAY6V2X58uTyt3PD4zHxK9KijbAuvuDGcftRKnPNiB2em2",
  "key26": "5VPrqTpNLhNz7YSvVbpveZcwHKg9BACnpp5Chp32Xbn97UP1C2tKZUg1K9rp7zpmrsuJjDifvH78pcAYfjaXB3LJ",
  "key27": "5WEry2y8hvcet9jck3zA2xh8D6Q6Bt59wAFJPVBXG2DAmJmiXwRRszEEsDmjDcrahCnDrdmq9ypcNCkv6GurJbk4",
  "key28": "5magkTxhdaDy4nXrQb7PfnLETHPBeY458aWocFg6fXhVeM1Rj1JZunSRBFZQTTRe4rs7TZGJ4s1QbmDXCBSJAJPx",
  "key29": "5EZrqytv1SJjTRyYPFio1pAZNPqunRFgoFXYVsAQBfvUmnq2xS65dgB7stTGz8yXNuqSdkc1B9Hyk7dzeUceaUKF",
  "key30": "4zXryrVWNKThYykdFC3VvhY4g45M7gyvW1EKC5sJG7hTsmoL2yXTNCJKxCY42CBVHFENsdczgu2YLNYCXBHYM7Dc",
  "key31": "qtTa6pedEN66i3dvq2aXjg6Jrnge9MwBX1EfzA5mE8DKDyAuGMbN8vyK9BUdp4Y7ezM35NVAauEQ8aFYUQTB6tX",
  "key32": "uM6xwaNA2DSUf2iQWcX8dQUJnKG3mEHqDsHs3FgCAFzoHCzAntRcUoLYFLc32aUg7rCvWvDG21gJBLLTsBnzrKY",
  "key33": "L5728UHsLsUEgHeQxnDiAzWSr95xWMMNJ3go7dihHe8PKiby5p9CZRBTxqqqtbZ3ahn1u5Ue2WyhDjmb2io1MQ8",
  "key34": "5kk84KkQG2R2BdQkYXtCZy2XKUKL9jTqjkVbP7YKcSWeeMLAgFpGifaVSYUscDr2BiFEyoHL2CRDypRPNhesBgjW",
  "key35": "5r3p2eGtbPtkrCCP44xyKub2zTtqxNDF97LdabeWXkZtVfpKeFKdfxo6SrMDkz2sg66raFcKG3HAnsuPahktuDsM",
  "key36": "5x3gSbH62TaJ4kih6SwWCssyzLPMCnS39nF9uirjC477GpwgX62obHZ1VniLAKV2F6H14n1yfRgKhHyNtJrgpVS",
  "key37": "5kgQSm1xqamaDHUwqhcDZ4gNBdPB3Knf22bGwzU1FGHfBfivgfedaMpcKJjBkoxvo6SxaGje6Cz2Zpt1iSLT8h7C",
  "key38": "4iFrWB4fp1hGc6uj2yYRkLNCw9DTJFgZvABpuDhfR1fKZMVYWyWnYWgyCak8RWSFe9UYdfwACwowU5ZuJGAsi2A8"
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
