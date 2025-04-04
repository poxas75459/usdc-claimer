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
    "5QqLfuKAnGy795gDSSrd2KA6ntAkbytWZo6GMje9hxtvR8c3cdHD2mpwpyMp71ywZHj2LyDR8kybo7XPEb8nNuen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uEMmW6SBTDdFDnm5CdKmL23s9BETthzJAiq1tyQUCup13krJs53YMoWMtH9iRZ35MjGXCKL3bDAYtLDkfnwTqQ",
  "key1": "456Gyz8sCDeRUsDLYQxU7jVS9tBxHvosrh3vjHkZNiufydTbJPvjXBKPnC9QgQEUffYBUHbPtNJdUrUFz4f852Hs",
  "key2": "5oHRH39LrhNLQj2sM7vA4jZWJWsrS796rUQLKP7tEsnAEv5mWv4zmG3qcsxNTPppsSnYJdDFF5u5x4JMScZ2Tu8q",
  "key3": "3XdyPPzDe3Pm3csvXuao2XzSoXHBEiP3FjSz3hwmkhPFiyByxfsioQoaphMWUEznk1N4nDSkRrauNvnKYQi8gisa",
  "key4": "2X2goVzrSKjfiZUFSh4ZqVXWbnXzA4xbo6Hw2ZQCZDvwZAsscboux7QY6JLCNNUdgjMzPnm5DiptzSjVWkHBuygQ",
  "key5": "2iGU9SZtCeTyAiCN2mimM7Wb78sP9F3wacmHKhwejr7AuEFDbuuHBQ2eC6SSx3nnGkFbQPd8gW2CDoW91jozB4dJ",
  "key6": "4nt5tF3K8sxYFn6Qdm6EdsP7GMcMsbJmpBVSuV32eAeyC8Lqdfgyz11EuYiUhAkD6B7UdFG1ep1nUyzJDGUpagAA",
  "key7": "4ytrv7DUaSNNdrrjnmRMzw1jRp19ygnfaUUkYsr48ozNF1UbgKGq79CFAE8LPGrB1eB8aN4YDmeurstr3nSneZ64",
  "key8": "3uYD3K3y4pPzjESxWKuV3Nvt5NNuEVGGVXtsaFpNqa12Rjz5C4JTibV4h35qEu5eLA4wMSBeydjJR4BW4XKZDSGw",
  "key9": "2MbVg89uggK7x8zSxaqocYfF8yPbAH9HTZjY7uL6mmyGMKgiEAvJ32odyNfk5wHJjEMPQ2GR8urctFHWWAkBoWMB",
  "key10": "2Y8MnD15xPHbHG5tQYhyd89urpkErcndnfDKaHTbmQYrXAXMkYFt7aQrHmTuMdBKKWqtfxTdgvKjwzYpUfheCMQ9",
  "key11": "2hwBXnD7UKUBEaNB7M4JE1WEWn3GB9x7i6RGyRZLk3TdQSS5fPyXPJhD1PCJwsQDwYYAQXTYvBA6pJf7mHZmH4Y3",
  "key12": "rcH8mA2uaZpmXADzVcP8JymY5iZohoS7WEzsPUFweyU8jUqgRaqNTMCWbkHMqupeiofGoRQVvjQpKfTP5MpRBWr",
  "key13": "2wvJ3Bb345JD2Bpyh8E7uG8SbiiJFxAngoLBDX6HFnBquwujeptK1apxYBKrqCAC16F1fjZniXCrekF8Bi3Gv4GC",
  "key14": "57JKG4wfMS8YtMmufDeYvU4J5XghaWxrxzTVfr9QaRFXQgEhNAQx5SMRaHaQ87fTyGkx8BtMpGK9NAemgwmeTpqv",
  "key15": "sPw947TbTPVsac7KnVF95Jn6GFVhZGH33mTU5Wvftc67kXpenR7m71HAhBckjrUyBWtd3c5YtSG7UcxH7WZggjX",
  "key16": "5Mfa5xGz1SDMphgqQCaeyt9ZK1TLEtUt2WfUFNvQdJPqEstDh6uqGSssKLBrc4ekVVupKokTVX1B6upa5rQtqCZu",
  "key17": "DGJ2DMMvKhW7y9nsYZ3F54GjNkqKD9M64hDu27kK2UcDKj5rAvwohTMnpfWS6NeB4uPvm12R1P3QUacyDacLsnu",
  "key18": "2Bt7MjxFXu25FeutsRiduJXNJe6fLN1mQtA5TGtHUwmvA7P5KHcfkuvHJwSw4V8Cu4cTUcNkoQgDszc3JEQL6V4w",
  "key19": "2Jk343ctv6874nPS8xvgtc1zYqcFazWcAK3z93UGB8gxi6bk984WtPsBHewtpMi2Dp4YSdimb7TJ1b9KUC51FtwS",
  "key20": "3bKH7jf4UUdYV3EwDd1pM48TxzTHS3a1Biq9dbCcftgvDaJyZ6SFKbbvhiB5GAH1gWcjE69RMjtwc4n4rRxSM3NV",
  "key21": "4gdNwbZ8LuNzp9EM7Vqz1ccwqPMD5D1eu7DC6nUgeVQUv27XowhDrEWTL6cyidN9wNagcpqmwf8sRiFBhPFED9Bt",
  "key22": "23uAcizCQzPyWbPih9heerjBKdAFZrBPL7zgMg9vXWTuRFdRtJ3tU9KyP2RmhSnfjENAydcSY6YTk41ipWLLkQsU",
  "key23": "4ddh2tCTFZGZvoin1NURZxAmHQXFv5L6GRhAHbF2iS9SZFT9WvYW3v47jYAvuWUt4uY43pJW3guZSvvGTUkWPfkr",
  "key24": "4m2ZMabUhQazHUKohBFUSjEEjBh5WwVgkCiPCGDCJF1vfWvZqASGGfKia3eM4oQBMW3CNSBFvfCPn5hzwY6WET2Y",
  "key25": "2bURVewgXci9MsUy3TkwsxKj9wozNksfD1PYMpgy8QoPkJJ4gD4kUFfiqKSZ2f5rycjZn851n5PE3qjVr8H9fm4Y",
  "key26": "3ocijfmXm6NRsqYsNVA9aNLqAyisb2DNoDF96gZDSY6mtokmvFTtSL6uRTNdukYCw21B35iUJEVms1FRDPCcrkDm",
  "key27": "3YFQmGENFQmQspzmkJXzDzP8M7eLgYF84MaK367rD3r8mMPei1BryRMGxyqYHpfKuqVqTqCPnbz7BUTdMpmc6y4b",
  "key28": "51yq9wr2fjUuzmQD2o9uXBJrdHz7SFkBrpS1JPF6FuEhKRJGfmrQXYzbmfWuG4RydgoRijBmxVRXVUT7Zo1MvQeo",
  "key29": "exdSzJNc5nsP27swvXn2xRtSByV4aUJDfAqCieHwquiAMrT6FCdHbrN84EVMwfaGXqi4QgP21Qoxx4PJMBqGmXr",
  "key30": "cq3hpfLiRysNm1ymz9jFNutEfxhG1wVWXwKhiPqoPP99ZVMo632FcAmQWgQ1xShQMiR2vDtSWBwUQGpnqaDH4BH",
  "key31": "2aGwakRtMsrHhgUGH2Dv32fEpcqpqRMjw3h3ey4YZ4mbQZUqnjy1bYAjCY2fAa9frHTyGnscg1Fz8iphyyr64NsW",
  "key32": "5tBJo2tVzsRaVQf3UDrjBSX2bZ2WmvJHf5yb5G78JyZfxfkvLwx1WFhDfSvsHUevhua1uZD8bSqxvmDSpUpGWNP6",
  "key33": "4s7eB838DgHibHtGhCPKHGkuqNUNzoph7iQoteeQL1Vkp2NtHk5Zs7HSZ8TcJGfR8MTAFN6vQJCRG8Te1eE41pYz",
  "key34": "4UkrnsmAJKJjVtWt6SM3vjRjb4EotjKUUTc2YkbHF17e5uhCWAj8fXLAqBQyNy9YQc4nvVvHi2A4LVZFqoFWjLua",
  "key35": "5vXY3aUroDnPxXznyGwbwpVwejRgH3iL5Sini6iMu49EBAEqzTMHYCjspVotdr1JvmPE6BU1SJtehBdgBmx9nu1W",
  "key36": "4FnbHtXUMVxgyfudTMQhQVK6j2Gb1jFjXfpUJBx1mbM5Fnu8qH7EddQcj4HmkRxbbSbPpcnxarMGuT2fTPtexZVR",
  "key37": "2q1wEHuKHD3gPYPRyRjmNuP6PWRDgws1Emw8dVtzS5uvSJQEx2zyZFcojJSYM7MK4nbnubkToQFfgAd3rsCDBvKa",
  "key38": "5y6xvtot9NVehDQUTQy1BSKRnMXADd8rzcKUgisaUkEHqhWZo28eWuv5pCHcG2XN777CgS9EP4HY5KTmPtBxLWRC",
  "key39": "2wAQxy7M3797zuBJUCx23KquCF5hH5avMEpoenXDwEEqMRFyv8SH3yaGyukFsQ5Ejj7Ezm3R79g9Mqh7wYMrCW4w",
  "key40": "ZFfMStVAZmgjv8FXXM5kA5yCyNcMS25KnHuoUn8fnLwb8wmmkdrURRWMWCu7hX8M3VfucsFj2TMoLmKGm7twHLf",
  "key41": "3MnvJ4ATxdABknvzvUiBMFcNZFuvakxjC98t51kND1bMEMUicwSy5BgRN2AmUHD6Y232JVzV2mU7JVEEjiXSzpCf",
  "key42": "LLLN77QQtb2LVFEt46byzJnQApsa69bTu9FNxjuGSyk8EBsCSZWaStf2YYQro1tfGtJDbwCGjsYEjUCiuYxrCKe",
  "key43": "42PZCqmFj5JKvgfDbFYije7FL4PoXh14RRii76oPez5qcZ8Q4Z4rbMqgSbaNkRjiURoW2REFYS1s5hRzF4PaHocZ",
  "key44": "EJL7iFNbgTcDh6EBFxjt9mZD9GMzk6oyA7HgywzQvg7FodcFKqULYTeeoot1Z4rXTYCWuys9JUoB9WYeMMwz6Yo",
  "key45": "5iqr1YWg4oVQitky6Vn8fDSYx5yVXZWb8fZXcwxntuwAHJFkFMUCCusZxox6QBNoZFrscZA1tbH6Dw6KTQHFUNWi",
  "key46": "5EcLSbqatHdahX3qtPNWcFf9m5gjyo4qokZHWXtfUDCU6nS9V6pv7Psd7HqprtYKbyjT4X6VEK5i8qXLDUuozF6d",
  "key47": "5VcFPmM6quqz3rPdwQcoHwK29qNF3KevLjsR9PmDzQbM9YyfLANsxjAbuVPENVhxTxbrEfVRPaFV7sjFiHMxKe73",
  "key48": "TjYyXm7HFapkRUqzWCRvb7EaH5KDs2vJN7a59nixmxYr2hxPxLj1TA5iu6aNdBW9jbZcdcHhgP4RprTrebhJD3d"
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
