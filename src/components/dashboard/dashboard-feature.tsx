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
    "4gnmU9oQPdKHQdkwW77jzwLuh6LNRUdT9RAKBqWJH9q5Gh5kEedzvacMqcyrGCeQsnETjEJ3frJejv8mKSRrugNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BSF4NDHcwsnbzqhX18pb7FefN615La3E4rXMKpxXHuSmYaQpkZPfjuB76ZghnDhKbh8hortvfKhLPEPC2nfMngR",
  "key1": "2JrAneuEovgeEkHMGN3kwBqKwp7SmLqNpJ9vu76zgo6P1gZkbJrCDfGzwxVGXfzx1gc13vDWRFdWSBSzGvXtkMHQ",
  "key2": "3Ubu2eKJf4V4uaCWp82U31iztkyfCyebVFkV6oXwyVnV83VDM6VQm5trJ4YfDQzgFVFqCNKhvD51WbJoJBju4GzK",
  "key3": "5MeopP71VyKtsbpXsjY8Hgs36w7JKhcwjJ9f3PZtaivezrwJt1zhf28YJNi5nSPk34gbBgeEGL5gycgSrA93BWYr",
  "key4": "3x2gMLSqCioTyX8XRvCL4rbzXTPSmZDHn47cqMzjxoXTEBUDadapVJzJnTiSceRR2Mf3XFnF8AeXm39NAm2dt1tG",
  "key5": "4n8f9zmmCUC1WBaxWSgGrrN59oaALeigw3RSbrnkgU667M4EYm7ks2uLpAgeGtoYoQ1uN77k8FuBe8VM7Rzb6i62",
  "key6": "47fGLM8HtMad5EH5Ap5ny4iwWdxKosZ3TRjVTrgtBLtVWTNmiRAB2Urn6tPDinFU2GBUdhuZGto5FGRvcY8WeBim",
  "key7": "2EbakzA8m78Y8hnQQdG82ie7Z9tn8JZCjfWEeqz6MHRc5hyuuqECLEXVyeXbVztb3UMUo1rPWiZMTwxYLcgo4JGb",
  "key8": "5P5mU5QYnBaqJgsLFfnvLvgETpaepPLm9hi3w5qcy6CTMF584E1i1k7qxWhCV1jMzsjAPbNzeXFe5TnTc2C5d3v9",
  "key9": "5nsdJVbi6K7foWddDqqLUyW624UTKcuCg7HzYUbBUP6xDEgdvCqF6KTctpBfzSjSrAddv11wGoszCb2UwHqvggQt",
  "key10": "3qbkeicEtdPxauVYPwtwk7jmKmnQyNLFU3R4zccJ4omHtf4BfQfsVTfTWhhduKac5fXi13zKiB5hgAdUbSQP9xAB",
  "key11": "22mvCoyZSirNUzx41fpBbn2GhpwdJpSXGqSAWHArZFuZ7V5JG1eStire2GYeERBnJN54XUqPihSUs6QH5wWSdZjQ",
  "key12": "LYyFHQcHs1LahZKUZWQzyMjR7y2dbjYSv6c62XAkv6ogE6Uy3sfiMXh6tMwsQbtX9J3zudCnpeWusSNmq8oPCdx",
  "key13": "3uW38NanMn1YzekdzYMWvEVDMT66WA5aa8Gkgo1XeYCqXtd6UFDH9mLtfrf6LXchDVokPeDTER3bD4SUYd3EDDdG",
  "key14": "36k9kXZR5GNG6yRRdPaYTQirdDc9U83KSCFEqXmfZjTK5rMaceESubK2gi5B4NHvDc9N4Rwydji9bvY8m6NArNGi",
  "key15": "4wdfQQofsVDxsSwDby9miumXJmGvbdzToGsLTHq4fRVSrpFPJ6zC3ezrGPegw7D6uLci17ABSzdXTWDYnSVrn1Ku",
  "key16": "4pnYkcp64ApH8Fs19GmnYEGmii1C42GKS4kdCoF9xqsn7jDhpX8398Hg94fjGuyYrpPz8gGXguKpvZwPCWvpWaUD",
  "key17": "23iS1nta6zrgkb1Z4SZ5fQBgxMWEbeBPVAuAcPRPDJT1emBKMWxUL9FtoJDbwx96sYYipTCvNAPSvofMUAztukfe",
  "key18": "4dxxZsrPLXG3DimU3p5NuA8pQiNMpYwJViYm7CUg8EaMY24ngmXkfeC974zdTBrvMKwGp5Abam7p24KF3TR3DKxP",
  "key19": "4AYtdcvatG96xg67kdacELvH564oJQAaKwvyzhT2hpMwGiEG6BNcyU5yQEMH1vPbzqUcGx3YgwCPUGhnzopJ1vRk",
  "key20": "5WMyH1q5TCYXnk1vyFhQsEW2R6F8cdLrAvHBa4Rt6QCGGWeoUT3BEHmDYqD7Yd4X6iySUWLNBrBAkk5PuLzL8dC3",
  "key21": "4yn15XKRaMenrCUH3fv9BDVne68jTf9Bg4swy1uLs4PB71dCwwuPbRaVp8y1qAs5fNNg3FxEQ9EAWezwwg7JVRnQ",
  "key22": "5WMFCJ2gtpG4bvRV2RGM9xN9p9KuYuCtFr3nS6gPk15bgD2AHXDU8CyJdYvaxPLQMQ8KdQ74EWPaSKDdA7yLgJgR",
  "key23": "3e3pEcdi1U7JJNBxHeGHshT6tJVDRdgRHA8MBK54BXBuSjhAikaxizKkz4sYC5AqV9RJFcsn4fJiiR7uybHpvN81",
  "key24": "3CV8rDJh2JtbWsfzJ2ZtdSKVa7mTHsn1U4Bgujyr24yrFSJeHNvXBkyzvvBeUkQ5ZoKg5NcUBo6qsvfzgfVT1NUy",
  "key25": "2aqdiKQFqGuqitZn9TQ7DwCsVhYRXAgL3hRp1bFjzQ6nyboWgSqQxaJfSxWUBctnA32HytK7xRaUWfHGgoEB8YFQ",
  "key26": "2RAQyfFafoSEa9Ri5XzsezYRUdAvLQFiavgqEnANKXTAGLhBuTCEvdVHSX8dRoguXB12hFwEjYnyUqcGcbtEcTUD"
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
