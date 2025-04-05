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
    "4zDbDB4CLcrpCsNGC25dBySSZNtPG29wH21mSWjfSw2YDg73MFGojGcyLidP1guk1xHwkMtpxWbmJZYwn1k52pqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cLE5ccgyksqhooqNe83jkqqaM6MNY43khoZLyvEo5vqDfKGxgEhqUYsJQFwkqfwrzEEYCq99M5Ecb94UvM2tttk",
  "key1": "29abT8255pccm6brFN6DcqPeDij8Sse4i7kzRgUs2cthTEe2bccimgtqWmWG7joUKPwQKRe3qCaGyUo77vrkfjCH",
  "key2": "2fXJRDHpWqHRNyjuHnmkmfgJxuVW2qymGqU73DhvXFSc8yuN92Uo2HxD6xyAAhxyeuADzX99KKcKgperpXQZcx8D",
  "key3": "5iuW6svsnHWGiMntKuVJoJ8kuiEHb1t4smNj7U7LwfLdC9iqorPrG1rtRQFACPEbrEvrnEXN33Q9mS7NQ9tiwYia",
  "key4": "3b5SEJNEVGAc6yfHe5LWAB67RdfYPnQ9RDQKnGqXkch8Ewzvoq6H45iLBkahpxnM3dBTiDnYajcz5B8FNRUe7a4m",
  "key5": "29KrZvLohWBerVD3MnVNX8UdCMcSusFyjDZL7pd2L7pNGKHRtiBMp7B9Udjgt1oKsPfCPWgFAxiMECfGvUnCKov3",
  "key6": "jGCjooiZau3vj6z5XZ6AxHakyaXQNpqj5g3PXqyGhg7RvZ1k8u1MTy1EStcLNgc1r8wuEdtGStnrgvN6zbdDsuC",
  "key7": "3bWqVw3YFUVVDjvqL1qAPAaXZwyc9oaxe6UooieWGF6tWQ3NdZ8LZ4KNXJb6oJy31dLzgZ7tyePDq5M3F3mrYBQx",
  "key8": "LbBKR9iwbai42SoPPi2wFxhmDbT4xMcThRAt8BjHqLokyWik7YtSogEpwwbyp5a9ixAWA11Qwg7uHVmYYGByvwD",
  "key9": "344eZGy9zjDC2teY6Sd9crMpbKt2wKq3dUiCgZ2omFQrBQqkh4zaGP4USyJNysUX4EMpLBedjNXELLD4g7TxWEta",
  "key10": "AyDkREb4czbfTpJiKYPfSudwn8zCnfE1DmMRFibMEBewAQ4Y1M9DDWuyNESLQ7CgRs1nSMkWyASWVwC1282wZJe",
  "key11": "2rMGGSdAkAsRameF77FFgMVaiShqCyroX9R1Yi5mQ2Tb9P659HemU8Kh4dvghE8jXNaHydg4WX7WvUonifcxomTQ",
  "key12": "515es282Sz3aLLqLVMBSTwmfJ56ZW5gGhbcFCPTS65ni4EnnG17QoTkC1meBjptx9EfrLmPj18rVX4eieEHzv16C",
  "key13": "36z4sWbuhjhr1qfR6gtmY6rZc1J7Kj4zHWvpx8K8EMDxqK8p6P2yEYD6iRtdS3jUJ6qQ6szd866cKAMesEUuZSaK",
  "key14": "JaAcc4mBa3MUEoDSBw9ZwATyVqCnr7uKU11r6JoD6xpXDKfcgDdCc54Zx6JH8hjvSZ6s1xEBCXdQ8Ytf3FDDL3p",
  "key15": "3WvzGxh2m8yPoFX9wL2SuHxyn74BdwbBXLKCT6hsJ7jdteRf2jw7rWiMWfN7dFjygHV3eDuxBHXE1MzwRQDNkc2h",
  "key16": "yt67tLPaoRyt4EwiX3aYYpWwQEiPrr8zZ9V4eaMBsWkUopFMhWhGzs8H1rCCqiQyKbRRvgUD1ou6MdEZb3ji194",
  "key17": "4BNKvMRrmAKxmwZRTp81KhZgfJfEAhf6xUmKUMiH4QWur4Cd2823dsoGgmoDpjez6jmzsgfpNZKtMWqyMDiuC2it",
  "key18": "4AfLYBuX1HZbN1opPN7mx85C3p1TezQc9Z49PFdXUkCiAbnDQrm7fJSrouEb3UsSJLkKbcujfBcuWmwrvCWaJzeT",
  "key19": "cLQba8a4fzanvzErJEEuDAioKpKZeLWBr4Dc5sLWkEuC7ACxVNGtMzyRzbKY5jbFosWy64MxrT9ENLCtGipRM9r",
  "key20": "3NudURdcQ9k3nxoVoa5Wa1AsXK9y4qE5meeTU8bPswFZWkrbLnyveByCX8MYdBCtNW17pHbTwxDxDZ6PeZ9wgPSy",
  "key21": "3uwWURaM437f7UgNpy6RFCDoeFSpmWzakYqSDZbVU3oT7L7BfAN3vpdZTvwtQLU6ErKa3uxXyMsUKhVuCebzwzkL",
  "key22": "3Q3TAAcsfaFjwFC2Q1snjzH7HFjoK85GZBzCUCQKd5PktrbGDzTnUrbis6A7XR8Ff1Het3HrpwyJpYfprBaRMouM",
  "key23": "4UWuFSvcmqwGfqRPNZ3QgiWgv84n39F5jL4bQtzHsXUdGP5oELqr5DR2ve4pZFqRDDoZSEg3HfGkbsrqAqTqjPm2",
  "key24": "WYPP6BygJc8EUzBNjNiDzqxecYCqxCcAWy8Yov63mfzJQagz2drVQLwButhFHp9LHomyrBoWCFLjuB95LRRRpHk",
  "key25": "3guBHHyhey1Uz89zxZz15rX5Q4UTrqnWhmSCwbQ9TrwkyJqzWrFutCwcE7jrqTix7Gg11PGezwSk5PcuLwKudawF",
  "key26": "2Non8YpnYhKbvcVhg4Mry39APP3TXuoJgndR4NVcTMinAus3mfmUFa2TxnjKsyV6cTkeZ5txD17cdsvcWPqz5neL",
  "key27": "5DZdVe2L24L5vZJZfQfNBXRWignMbDgcPrHdjserS6pV2ypBzWFoazdYsgz6A6v8wJN2kpLEKVaW7eEemnGUqN3Y",
  "key28": "2MkSqXuSUak4RQdJS9RSpw99unvA6m8d6s2jumbjGv8Rbjmty6f1dcnWqJhni5qi1zp4eEreaHQ54xyG1ZRxUaFq",
  "key29": "2PXLnXcuYrgmqyAyu68J5shTx5mJzsdMCMifB4LyrEvU2hMKjN1dfU1EH571pagt7XQsPdCQ4zoQUf5qhuTD3Zpm",
  "key30": "5zFmXChuDhWxqGdx4dKv18NGXENyHi3knNDnyNBzVZzHTqwwMqqDRC5ReFkLXGhYepzW1csTgUsp29bAcGHBEbpY",
  "key31": "DgRrUsCHAEi1kzE1mHKHwjD7q9vizKBUJAWkgaypdyB72iQKSsZ9YexMvHY7gjCHu1nTUpY4KB6L5Bv29QeECcx",
  "key32": "2rZRnvzYBxs9U37A3CGgyk5wRdpHrXsvnnzSfu8AptNysyjVmPoVButLqrSCBmUqQWguQzUPWtXPUgLfPV4Gpx6W",
  "key33": "4DAWheaS2BDLGtK7j6PfTTTesCvLu5HxBvLU7ZtaUM2EG19zBN92AFEJHWCTQ4Xh7j69sZe4zhWP5jZDDdKnebA2",
  "key34": "5gmr9Lctbs92RYgBdik6xtpnqyNs8diTq2zsLq9bHnjsLiB2W1bRjL2dWmzdFs8Ze7Z5gLBEwGFbXrHPGoAb6CoZ",
  "key35": "4pr5U9jGxu2wmbvNviPQQWebHM7L12xiwQLz4NGS15mPbSCtWaBNjDbzzXDg7UYnmKHBqXMZdnbVFRAVA1bEHgGw",
  "key36": "rNcTYwCAEP3o7LjXECVQCYK74YrCpEZsyUCCEzdhWs3HRaK1zV3J13K4mDirnJ8cATbUU4vG2SHzHQnd3sdWCSX",
  "key37": "3fzix9SSonh9Cn3PPn2vA5crwC1Vf9S8rxiacFpxGStsojgcxTq8u28XuvPwpt2jpE9yHAsAoBiiKo3yHswRiq4D",
  "key38": "5vzoKmuBw2EDeug7YMvY3zV1XJeFY2SQdzQsduRbkMpmnJdasCXoBrnSQK6128MnXuxJtyByafB7knZiFAVCqL95",
  "key39": "32vWUM7cTRHpFQa3cmkTZrvK1QFopyNYuTMHewF4WYxp8KMoPd75BcidHijiMaRdaVkRN1XH9WTGBtxxbECqUdvD",
  "key40": "3DgR9FpG1vZC8Gin4t6Ce1Nm28HQhnUbcCdb8TnQPYcRh7dv7ZUdQKJddbE54tMZMFWR6gRUu7Gc7wo6Hj7QnU6Y",
  "key41": "3xQhRhvNFANRZhPiEGXm5bdctvhxYzkWyB9o7mPEd45iHvCcxpoRBwu1wyR6wNdatx8HUw2ycS429uyeGjXeXCv",
  "key42": "2cPXXyctnvUgdtUHjQigjTkxEUVTxCUFbYETuSez8zukojL8pkpdXFnFJR75ufZAQaANY1ZB8WxmRnhCUYreHmDT",
  "key43": "5MVefHDEyyfJw4Tg3wCeQzHdr2QX8DR1FxwB69Tqp5EAhGjA8iYfedYfXF1txk9DbEAsRkdxCMd7TMqoy4KC3n1B",
  "key44": "2w34eZaBx4ZcsrT6ArwL3CskMMQHRmrzfBNxgtNjqMkGQWtSfoueQFtCmtSjSRxEjius9rmqAi6nTKCtHnTZLAHo",
  "key45": "54ieKJkEdVrv2Wpn5XvvT4RiPqHyiEnAwqgNHahEoiu1VgK3gpeYoREmkVhcSch1a5o9J1VwYSr5C1e9g48kEdpR",
  "key46": "5xiehwPsaQfdjvcY6e4e5XRbEpxW5JMfTkpGfELaFKSB8acxb8rBKiVmxp2WtiK7xGdM54W6hpToNk28ncj7JHdF",
  "key47": "21u4UDp8DWQivmbZsgoMsVfvP3E1kB3V7YQPdUCrqSA99txeDXEjBXwQUEdiVqmWv9pjmqRCabziLVYLVxFVjZm8",
  "key48": "5RjzkLLnMpQGRQajnKWorokfYigKkdBMB3obvv9uKgSoVCGrkRB29Dq3B9K3aqfAa7tDMmkN3byK8SUCq7a7EsrB"
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
