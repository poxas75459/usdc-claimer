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
    "oPwEtsZ3SKvTCboFFKiTQ9A2FfLuseMWjcZ4Ugp3kWpZwEXg382YX8jDNwZzvT4mSxLk6N9eJRvPyZ6ArDQgY66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJw6i23H4Vib4oz7akJaazfuFG7LRSiKVU1Pto3uZF4EGJj4CdC9Qk3MGKaFbzhTbCqCLU8t4LA34hET4Qx9XPG",
  "key1": "3k92se4b6tLF6tcWRJrFkiTawvwifoNUfpY7HyKknT1Z7SKAkcWKRrw5HPwqHnZfTa2SkFMhJfzTnk7AX1o1pBXT",
  "key2": "3Ze136Hp6wvXkTQTAXhHmFJ2WZU6QASmmUaZZvUmsBXu9nTrfW7sq4tAiu67iJgi3hHJLjXaknYaBzcXCh4jpHr2",
  "key3": "5NyvqNEPmZFw3JgshdwnnYJ3cS12u9b9rNDyNt8FbUFDriAmNaYwgVxgKYbNXN2axZzzeoUv3YjADn9mB8nmPF5H",
  "key4": "4LHmo2okM5hFWGDR41jAR4GF8LzUgg37dLuzgFCdfMUGWQ4xjETKgKMKoCVmrYXmSrwQde4mehbXfvAS48onSJci",
  "key5": "4SG2ziULCgwnhELVkHTNEMa1JPZmPF2Zv44vXkoNk3X52BMuV3rB76cYCuLqKxb915qBwSL9mWn7pZvAKBmwELdb",
  "key6": "2N8tEpRHEM2JnZBsyuVoGKz3SMzUc6Z1W2w4HM5BkPoXWyQfaRr35mMRgjymJtMYUFt1FBUt23gktBg1nj6AsKQJ",
  "key7": "5HeU2iDr9ECNp8P54ZoD83GZDHP4RBFdCnFzViy2ZCKiczKd2r2YhoPxQfRTtdup8YbiTs7HE9pR55cxTS64wLPU",
  "key8": "3pLpmDcVf8au7HzsceSLuELH5Qc6c4fyZRgGCd78Upb1DooDHCjZ94E2DuySAq6SSSr4iLtc5KegtmBg2FZRzQs3",
  "key9": "43MV1fvGxbxQBT9turLEmprHiYppBfU88kHLPBmdKVXx5xEYTZu2Pcf6g9hu1dVvfkeEB5R6z3oJR2V63GmRoF6C",
  "key10": "5w1EfDmKaZiwhgC1dp8uqhDAX2srqPQpnsVKWmyvwhNHiWCD4Fs1hJ67PRRRuGLC9Ky1DT6P2EMorgnxKeTx4kH1",
  "key11": "3EV339NDEz9PBpEqupz6prJtgn8NNcgBcJXsAPU1Jrwq9h26vQAcxL2buTQCuAxAxTK4hd1Rh2Xv91XpCBm76nnW",
  "key12": "2gX5KFmMTTXZWV3wWZzeX8rDHSdMZuTrum7yDoP3LAUJcDaLJcMTfkTtkaYu5oSyRvdWM1TFjd8BDWKsYDQ7ytpT",
  "key13": "4LSdgZVQp8KPqW4nQ9odXs8dD3Gm5sFpy1XZKca3mg53bC4Pr9gmXYW82kQZjGaU9KmTj1ryd2r9Tr8TWGdy8Mcn",
  "key14": "x5b1rRzMGLoDug86w4zTogDwp9q8Xa8JGnvHcMiZFkxFtUhUjdcn91p8dceZyJc369kauL4yVipGHjgJaEqtiSa",
  "key15": "2avZM243dDU5E3G617iLnbEyxRg7nLivM3yXsz7BgqJ7LcmTHG4nAqwyAYtDENcDczt6aVGKWC5PUMAq3fZFNEqP",
  "key16": "5oNfoxkEA8ctibQGoV7kYUqtSM13EzQ4RsgUHJSnRutpfPsrZ36DepqLLjYRGoX2etj8hUrKiweBVyj7RHLHE51z",
  "key17": "2QFxvSmVcbJ1aCQo7j5n5bTGPKteF3V2Y33z1vGz5GiZMYegvgzveZTMYvAv5EBaMS8s51cMUyy43o3rjxBPubfZ",
  "key18": "2osRfA3oywdGLMPoXNfFLEprDsUTfYqsUthBFdb9dSguvgkJqHtr9CdGReoQzqM53Pgv7JcbQVaPJxiVxYNUxjyg",
  "key19": "4PumGJvFSskHMzEZFV2rmkymKXdsChi9PnxN611jycP4NdeMYuaejJqLK6wP6YS8ruxiUZ1smXHqRMuW5868Xzb6",
  "key20": "2niNd8Fo8oyG3uncsCSoLAAFcT6Nu7Nu5aBnhhE5h7R8NzyG7e4pzKLp1kdiahqRzENiKqELFExt9HsyG8A5Rdoe",
  "key21": "371a8XM3PgZXc9cAg8xTDraYfGqBNr4WD9eadq2oxQQtPhcWjfZvUvnpbebKeMnBmugvYRtb4KHyEnVd87ggPR42",
  "key22": "4Ewn2BXuWyJFJ6KvpbxiKz1FipnzzaCmudQzQyRVjCfeKvydr26MeX1B7bu8YKWJPT82etubfALigVT92n2mYdfU",
  "key23": "4aaqAYGA9MiPpjUtEdci3Rifua1CiKkagz4ohSP4Ui1UcaZcT4ixhBiJocyBQiBpstPaD1dnT8Eqe3XkF3thL5Sg",
  "key24": "4yLPZ4KySNBFcr1idKpb7LuFwnFfSHxF189eUdzsGWcBu33yxomabC1wnUWejG4TZrKAJxpKKoRL1GVZiw1Eyfsr",
  "key25": "4R5vsDi6AR4qwoKVvwrEd6x4PT8Q714xQxHX69ymhauzc5C1YFEkg5vXsujt7brwsQcCg61vUoVa2KDrVprZtutU",
  "key26": "4Mxz4kWPKVBPs9L1Z5MjeKVv2TtQa9qtFEwqerJrLGsMCs9ejkznLY49K4sz54vbPs3tPYGFbBNQpqakBncthUvs",
  "key27": "58DtqufLYftFqS5erNMr8s1bNwdf9GvvuA6D1ECi4Mp35jvNkhWsRathKYYyCGrvQPhn8cgmPNXbEr8BPBBDq6D4",
  "key28": "3gd2UDAvy3jPFgAy61VpEEJ5k528GLq2tD3PpC9R1943a9bb2wkJx36Vemph5jNM9Dg1gkXyaKf8p3Z1QsLV9ri1",
  "key29": "5WRfgvGyNhDmzr4AWaovdbFX9N5WpsBMjeBXxZSZrJahfsPBGdyMxPA2obHDyGdK5w5MA3F1FEZnMK2wfBrkmVUg",
  "key30": "KUVQxiP4mnfoDXoFmkf2RjSq5JmLK7paK4HiEvcWvMvAuQ9V3RmoRnPV1dPtewNeioebMokm8x8BrtvW4gyUXHG",
  "key31": "41GzoNV4yAjTK27RcL8bca7ZsyooAqWrHHZpZmJH8RGLYFrPYEjU6iyb5GEBDKTbeXamq2x3EQyGsQR77KosozKn",
  "key32": "5mFQFNBnGZLECFvR8WQ9riCUY2gFCYTS8D5vMKZo6V1zZZskLzEmJjdG5JMMQZBEytcsuPq4Vip7R2Yg5PctK94R",
  "key33": "3fT3fSDQ19SdMZZtABxQS7GYzp6S2kFZhiNxQeSWfitxvZ16LXyqi6twnV2YXKbehudUm3itRRxY9zg9PspZvtBf",
  "key34": "ZXYh9zv7NBm2C6Yrjn6xg1ZLprH2ksmku4MMXYfqJHYBWLzM77kCNQYRhGR52dKszuN4sS8CKei26Y4r11omj4M",
  "key35": "37svzWftVV4dYKS8iAp5fY6DHGoiC1ptuwfNdUgHeNYZNLkE5JiABXovFgjKXkF96ivbLoDLshE22qaEFG9UnMqU",
  "key36": "4SrPsMvr7uNc2AAY39ko81PZpKf7f7TaAh8DUmX3p7WWNvbR1dKDQYsibzJG15NRXnHaztxhFN3yUgR6vvjwPSQn",
  "key37": "tiNz8xD4TXs3L8FB9ruthAHot1g9QSSPmDSDMTeKS7WVpc75m4BwspuXzAQGMdxTdjiZhBzhWvDv5iV6VdxYc2p",
  "key38": "5LP5QvioYVsRBPxQ2TCbvPeLLYY3k8Z5Xy9xysHiG8QptxxiRiW5oPjgPuqHKMfARXeWrXCsCLhcfdVuQzTL1nga"
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
