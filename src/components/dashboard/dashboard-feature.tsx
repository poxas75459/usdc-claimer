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
    "5cZ43Rsiwm7wTdaYD5Bs9nEazMgQHh1xED7Hs65m7PZ1dNtyCMyy5Y6TcRrxAeoxvmwmeMz3u5XcPk4RYVktDTsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cToyXytPKUryEHdtMCpEEjbc63BzyURHU6pcFdKUvC64mpzmVV4oHj5K9ftz7xTpVPFUxWD3qQAjTxMagERfftX",
  "key1": "45vzehYqKqZXjFuJA7Aivn4ysZhAUUCRyWYFvkh14THcqMBt5F721nahkBNGr8zBtdJ7L5z7LLv85AD95Tw9hTmF",
  "key2": "3H2Fy5p2wj1CmPV1Po4vbuNgbALgCcKfX4Keadn1hJ6qcx7gAaK9g7bKQbUcScZbkHFvqnA71iRb9d6wtHagyhwy",
  "key3": "3umMo2qkZx4G21YZZoUEYPhNF6aAupa5zs5zhChehjhirg56RKW2N4EDVGduw7o6zAFZHzvGx7iHMC7sd1ASc7P7",
  "key4": "39RhXXdQKSpQkrzeSFGjQCTqEG5p1hATmazLeFAJArL8yFgy9zLfjtBpc8qcZbPbvm9mkecuc7bTXTMXLcktZ1eT",
  "key5": "5faaQHXja7tyqJDw5u5ZYVgBoNBkN7iPobXho1DLzEmYm8yx6bmcuAyobMQPPGkMKEDgvxkrzPbspW4zkYgt6sEx",
  "key6": "HGGgWupbWSmky3vKbf4gjixs7vskfgRMw5yUsvHZ4zLZ7SVuCsR5Kws22smdGLDNWMx3yWjuhJ7CGbeeHdh264H",
  "key7": "5NWpru95fUxe745f4WhBS7JdxRUASMkwVp8HoLikgQXw6nkfwW4osDaX6k5QfamEZEqbrrZcaRQojaZHNnvrakWE",
  "key8": "4XkiCxNX72tQLm1X5Bc1R3rZ1jfeY7ZWBkcAKFhK7igwkZX85sa9SFSand7zm9VyoP6Ch3TbQwLHxGnaLQoRuEQb",
  "key9": "22Pbp2irFkVhNz6sfzPZvcR2Da1xrCGH5o35cMqKB3bHTpeUdPNjWvvFdjCEeVAStcNq69i8vrtVigFEEH3xAbkD",
  "key10": "4jsmQ9XkNVLtAM6Up5zwRzLVxyZ3kz4C4eGe1phBP28nqcr5qSqAnevcdBrT71zNKDZCLoXSdQTYkxF3oZjPhGPW",
  "key11": "2T12qnM6M7qXRYr7iico4ECZG6XuqZCR9pVqLfcJf1Zr7huwJBxvkAWM3SWFWXxj9iZrCNthW5mTE88diLdsLmaJ",
  "key12": "3aP9UiubBJRoeGeHWSVQZ86EFL17m8wcxWB5spVgSagHthQPqw9qxtoua9VYHTQVRuWAuMGj5X8wGajXanwK7UFz",
  "key13": "383S5BqwioSq5x8hjHi6r21SNN1N9iTSuyx5xn6MfEYMxPWiGPYuAM3vwyZg6SEY3fUURqftoajq4tX2Fd8zft1B",
  "key14": "2MNChwRdkwuR2NXgMX7VzM8yZXvzTKrrtz7cZhzjmbpkGWj6Hqpocq7F6p5a9JrVsDUyQ9aceG6bHnxRzUtvygc2",
  "key15": "224TcTyMzJcrS6iWiQ2nta4p7d9GPsYwopBSJL5cfRHiicHXJfZ8uo7qJnpq2pyuJZyJabsFro5cD79whVtDYHia",
  "key16": "3rwBUyCdQazKJmWHB4uHXwP8LF7LtNyPBu2BJxZ5TvXjBX48dBxKBYCKMt6NtfCLwRGPP659pGRrLd2gHKgyrzjf",
  "key17": "2ZKAaZejUPR36wmRKCNL2eCyt6s3aCYW8PuZcBogCaXtQbSJEXqdrMucry3KNM9P8e9vA49fKULv4SQati58TVbT",
  "key18": "5PqP8qpYp4SvvHug83Farv1QwaYfx8quVsENFb6d4SGPtrTRNVsuqrCJRdLvjWEtZTE5jSRQ6L4mS3ULbWcbJRgE",
  "key19": "4bdfRSFqBAV7tf2a7QoaBm4TMJuqXysqZXiRgG3sP8nQG2w3XG97bF6cY93PzxEXMpXADwfUY71nEUtmSpouwv8d",
  "key20": "2HdmmwMkjMZVuYjo3pbe4LR9cAXQU3SXv6MH9hJBw1bU9np5xVEqHLbNGUPqByfgXpERDXBT7HsgqnwDZk9a3cJf",
  "key21": "2pCeg4tqg5rXgKHFoeP5VwUygMDbv43scMzXSbvmuJCoBLzcNavMNRuvq17FBRtvzLumEEdxVHcZc16fiuJkVRT9",
  "key22": "3z5ahY1DfGUHzWNVpz3kSkePsyoa3hHToe8nCmN4sad1rE2FwYju3LECsWe7twiHC5umNeC7dDAxHjykEjvcyd3k",
  "key23": "qcsdVCYtMDtnFe1NhzxEgGUCu4NRwk1aYhF1sgoXoLgmvXz5z1kaL29gJfwqwvsxVvpzpiaBLffSe4CK8uTVdTY",
  "key24": "43KmiKUpGryUhdznCzNZgHFYmFMQHfsutcg8MbwyyCgMfoptUne8qo52RbY332nxwMGNTBuTw7Tx59qrGS9bQXdD",
  "key25": "3WTX6fDNFha8v64cqnUrzoQPKw2CHBpq3goStiHBLjqmkC1J6SnbnhmxGjr3Pqpn7tpQLivJZLHq324RCkpLa5fp",
  "key26": "37F3SmJapMSdg8ZPoWhmDdtNLfoKnB1D9CKdJYr59BZVk4a2Ft5cG2FaZZxMcQvdpxrNCs1woJ6HVGYBue9eB9hj",
  "key27": "357fe3JgzynEak9fNCENrZf5UiPpBKDQKgHRDuwDiBN91ERo6T5876xQ9EUzp7zFDQpxLYSzkB19rzTYhprDCew7",
  "key28": "2SvAQmyoQw7JGhtVgkVNa4e1VrJNHW5JqwHq3aakxNewC9ZyCQUJRyoMGd5QkPHdZbVQc53kMisyEAe33xpgaVmA",
  "key29": "ME7WkdckiEAi8YCgaUfh8wXmFJdyJS2HjokddCg94bMfhL9FLkuGCotKF9SAShirLotD6sYkWRsKPEEHpMx1fCR",
  "key30": "3nyGg3mEeM95ovJD9LbjpnG2KwTosUZwCVmhiBqpzuyQ3gKhLbDe7UBsncqic7yo1ZkJBoubqLXpgA8Q4X2GhTea",
  "key31": "cXctc4LxDGiZ4L3QyF2TymkffnhHAkgasU9xedEy7rCs8TotFjw8816YqsZiRBYtJyA6y3AndUpZmQyJhyUgzQe",
  "key32": "2W5Pn9oQAAmygFEqUb3KRKFr2uY7ks7D2hQXViZabCMADxhJqSbL4qyfxhsyMJo6wTnqpniHheZUKwtiM1wK59BW",
  "key33": "zWjs33qE1zrGAenX8y2sG4P6LP39bD7yjpzS3GpTQhkwspoEcuNcu9sqCYJh2bp8ETqUDi7M8o2FA9Cp63N6K2k",
  "key34": "54FrBiSPEfw4YD6o3S27obNDRMexTvQkeMq9LJoYSSvtFfJpzYPgaPN1nwV9bYcAsxE5aZN64EePPtvx7A5smqSs",
  "key35": "217ry8pYNZ98pp7NiGwBtHE2G4qMfGoQfeJpSokw3V3noFBL2vyS9LTa9W5zxctguzjnrg53YcdDWcty8EAtykbR",
  "key36": "nDjCXjXcxsfDF88CAvSqYi94hjkdGYXENR2LcPNuPnM3psX27yhGPHdpucLMXEfrb2D7bynxzPJVkfYeoPSzMEq",
  "key37": "2gB6u4nH6ApmAUrWY3AZdEcgqpF7qnqS7rWzNMrUkYLAHfmdZv6r6mgiakLG6vwrH1tMti7BQWd1EBWBxBmC2t1p"
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
