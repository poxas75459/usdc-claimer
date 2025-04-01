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
    "5WTdH2SbVogQpGVbjsTJpy6hPvgwZdgkPz6BxHddeKZAmmjUKPK25HXCcCVLkw4qn9gEceypKTBg8FbFjmq7vbwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4je4ofcPDV6kjsaBCMtT2GaD9iMr7LGMrz3Q6WVQ3TZZmhDc2FpvLTZBLEk8iu93MsfF6dTGPaJTDrqXS9aPJYWn",
  "key1": "2GwhXNzXYM5Zv2rZhSE3cWXzoUuuQPLD21maB1KHFsdGMkE5i1oTmcTjmtgxRcBsCChiqNc3Qxv19KiiNqeX8948",
  "key2": "3oH1MXHNhUjE4DXaYhQnPWY6bryTFGjNeLV719Xbv82NtHjxfNHxVuPyXdzTPe2L2SvsXSipVfoCRHg7tKkRtg7v",
  "key3": "u1cFthxFbcTBh3YsZD47yzAx9Cn6nMP9VXzfrxzg3L5uCwaaxXgzZaGDByct9cULsiJ2c54u26ft4j3XwASj8W2",
  "key4": "5x5SXm1ggU8YrP16E1uN68fiBWXFfVW73Z5zcwteXhD2Y2Weaj7qRjSNiPbq3xVZ7Funty7jp8TbstJDN1nZuUg7",
  "key5": "25nHox1pqgxXUZBpYFVkAUCxnqj9aDMCqikfhxB2KKTWsbGucPnXsjE33FjoAkGVPtvna5N4UvTHGhhpAHBpwK7Z",
  "key6": "4iuT283eVT3jm5Gtnme7pvrtRyyxwAvFWZKBgYQUKeHh1NfiQf4pmr9QuEybeqAc1cCsK5WcnSfXH25V9MRP8fue",
  "key7": "ZrmDnj7jVrWmomwAmakCv2TTyJcRcnCGaSnFfUFAcvEeM8Nf3Kw8pGPiE4HimXnjy3ESpU9ePf2BQNhdPyQFLeR",
  "key8": "VwoeZvYgFsvGyG1557mrmzHMhZLywSLgvPp692oFGSbwq5NEZQrWTdvtm2dAHKDAUyyvMmWNBBMXKGjKr8CYADw",
  "key9": "4jW8BsYKqoVCKojEAMirSXBzgJKjMuAqbcpyJH67GvMaAAQ57ZPmsumTA3P5tFddSoVAcxuSXkFe6cfk9Ed2uy1V",
  "key10": "54MNra6FiDx4jkhD4dQvs9bnFp3RamxH1sThYipfnfnzp33wugHpaF4qLtZM78YyWnRpXDGHdgbNriTjz1XCXuVQ",
  "key11": "26ifHzyNWXYyAuFCj5edjpxPV3yR6A9E1iQseLv8nGkGrK4QGwFJh7UnLTnBn42go9dYGMysU9E8CkPxi6dkmENK",
  "key12": "5gWdZh1A57NMppkv37xyii6wVwZT4pzTk3K8bkMLsw2gogc7PkqsqTyUCDiQrTdD8uC87Gr5ZbudUuh71PouNdMb",
  "key13": "5bQ46fR81ZQQ9Dx2SzLEsbMfy36CD3war1JERX2QHtKfqskmuLS1u5R1Shog8bWKq532RnomZAJeFQuWtbknYPTm",
  "key14": "62mfniNUU5FiJEPuXcC2M37c25GJtwAiW3zVCnbvjjruxMM9qGuDFQMNcXww6ur6DgLf6XaCpNaTh93UxndsGMmj",
  "key15": "ZaSu1eX9MMVwMw7xi3LYpVfq4Dp23J1HU2jb9JeVRpjbaVRSUcgdWb5cwo3o6xby4Zgdt4xidZi9FvLFD8Yz1WM",
  "key16": "29S4U26CaXtbUnPCZry6GgrriVbtEPnms3UAgQD2QVqp3UsZA8LdvrvLnXhKXMwzMz56pGu4BxB7DiiVzEo4MAGs",
  "key17": "5CCQ8JAdYxSXWchfTB6rAVnxAwMpwwv6CZ5WCA6S6JZUEcuQpxrJkoU6p7oS5tkyZWLbwhxy7AasxWKyNs3PF6Ta",
  "key18": "nteG3rn5oUxrHpJW2sv4BvcFMGuVoPCBxXeChpy7RGpvRVa9tRrtKuWEc9B7N6rAhjj2mDNJHNQXJs2xDUmVkWm",
  "key19": "3CRXNx9T41ngBbKVqT4sLMZHXDtodmfrKLQzeavV5An4gnPkM1XQQhGDX6vn2EUjmCpkLxh57esGPsk1hGFw4CKb",
  "key20": "2NYDHVzenucFNbrinuHddA8nRJgoMA9Mwr8QLwNNNFkp3vGGmFikZ5Ctaye71SNjF1TULLCVvHk5Qp6x8E8QDUGe",
  "key21": "3B3SMDejA5qKLb7sox68YrGF2BcEePPQgtUdPL9VDJij4K4djs6rVvdyXc4eqeM2kvZmAX1gRudAmVbie7QFhNdo",
  "key22": "4Yca5ibZwYhaUcqkchCa7HTKDZEBysLEQd66RQmn95HC4PZ9rd34CzKM43hh9HzhMXJoDXgTpqZscqBD7AhkDzd4",
  "key23": "58Xdez7DFiRRJtVx4iN11SspdXzsFyE9QbgE1VE4ZY7chLX7wBqqrMKX7A3s3wPP3WA7Mpzd4NTFKFaUm7BNQqQU",
  "key24": "FfQLrt5YabrcQ27Bih7x54yuqqPA431ofRVNy6oszmreLQQFd9NoPDhPSJK3uaZLCAjwLRDMfiFqBjDogkc6JhA",
  "key25": "2i9Z6nfnwjaEqbf74PjdbXmowaWud9SgBPY232acZD9RP1k96R1w5gKcdL4wpXgnJstKvikoR16Tat3xET2T6d6v",
  "key26": "Kaw6U8c3uKtCwSf1MDQp783nCGNW1pvgN8KQGTzrmwm99akwawx8fT12GFdS4YM4Qt6D6vEF7ov2Q6riuyuWdgP",
  "key27": "EKkBM6x8VrWLb9sqhX1UmGQWvzBoxSkF3XqhB2zKMkVehFK3RcNsBN9uPkbQnj1kZRGBvfNbTTLkrq4uTpwPiLY",
  "key28": "67GYQURgXzNDXT4bvC4iuRJ61SG287yGHqYWiXRASDgq1moWfdjVxuAN7awtAUq512aZGN2ajpjLxorCc5i9cq2t",
  "key29": "2vEtb5ZMd7xPuUcihr39h4MkP3vJ1wzQ1RiYWJBKnqBVgzgcRZMGVaM8zhrPgJLP2AQvJKMA2dQek1DRWuhBc2Vy",
  "key30": "5eNLP2rmHLgVce4oVSW9eyzdf2WB4aKbYm1dtyDdDk6CDr4PZwwGrWf74HJfMvNteKGHc13PZm5Phn9zDhVzXmeZ",
  "key31": "3pRSbT73xLf1qVwp5YDnNYzwM6s4ZfMuYmhB1KVPGAeJvYZBG3pVuhe43SqYqdq12sqxE694LckxKEHfd41cQAce",
  "key32": "3JmSQMLgYmr8K9fMtdDRGyMLrJuwGKtRi2nVFAdgPu6fce1YhSULTAsjJa5i9H3TDjVYBj88MZGrmYgNbrDMXZVb",
  "key33": "kcUeBPXe4r2kZMsxRtXmnNHFZmiWzkES8xxHkhtyKogiyLudevMsiTFRGbU7KMW8HvwZ8Tb2MSbjK41arZEdbXf",
  "key34": "4hfb2tr92YozUWQCmFuz5AMmrKMd3FmnY8ioMysPdsiGLPqoyicFGmCJhCCHeMFcXH8RgasiG9DXXK2nwEBbADGh",
  "key35": "fbPmSzUGv3PJwUc7bNDrK5QT25UENVy9PTGMqRYR5WGawacEQp4CW31Qe61Z1TncYfHzg5aNAGBQfDKDsQoqm8F",
  "key36": "5PqebWgUmy3QeGNcRnLkT1WmWiRGhT5VJ6ZQ4aonzcqRMKNVh3GcYoBXX1iTG8Jj4cd6YTwWXKnt1Z9VNksgX52C",
  "key37": "3dWoqYQJbexRASgwtnXuNXJumBpDQ7ia1pYh8QP7CU752WHNQNm2T6i6bKMC4FnkvLzvugSUZB9mtzeZH1t7MbNJ",
  "key38": "5jGdkK6HdsiYSdRSGHTnV9tY2eEE5rhRcbXwvrN8BAjxWWUX8ogYUwSZhR52KmEB969WwLKTyPCeEVKGopnxqFwp"
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
