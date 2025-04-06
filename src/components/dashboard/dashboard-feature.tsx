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
    "zedqkVrAsWh7gQTJDq3LsLixiecPYFEjLUTeU76UpmpGeTwzJVUM7sqxedfh35ESCdcf6jYvLmm32AFXzPtDVxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9ngFfbKyQwzqCvEyErXHopbWwiA8BRo3XApqMwKdTRy9Z42sYEDHqcmSn2TD8W3q73izSqTdhFu1AWJkBY8Lnv",
  "key1": "5XG6HQQUdrz1vY77es75ZPFbcLxBNS48WVW8khze4hw7uRQCVYaGF4PZi2qzRTEC9qwHFUySBgLNBYix64fRdx9C",
  "key2": "35L8bNjT9rdm2U6Ad8tSAs583n4rS2hDGpxa17RNzkQo9E1bGiqYWyJLzPzgFL7FQSEowPDwASyJPGfVaEaLvryX",
  "key3": "4SWVnvMH3FMnQZ1FA9bLetwKvB7ENZWdPkK5d1bC5ZJvB92xiqa88pPJ8PWqv9F2DUZKGPX6SXfzNvEj9Md9QvZC",
  "key4": "3pBXnA3foFFWjTmjRxWUpAShzWZrTwjKPcUjnVfX2aL3NVF9S7tnhqZxfd1c9ieDqSNSxsw7L8Fk5vuZd387Qc3z",
  "key5": "3ZEewgJdKgLNEQQuzfwXdpfxADjNtUwKYaduk7ghDC3rCLM1QCw3iysbSPSot9VwWbZz3abaP7VdZkVYZfkQyVTB",
  "key6": "2M8boq6EETcTNtQQnJY9vgeAkGsBuwgqbxbhtHk3yXQsFL2v4drk2nxZbZRBzq154w96SsEdBCuT2Sqrjw4hhNUf",
  "key7": "3KBXTFE2haW4Mhv2jKepZNwm3Zvt5PWxcx71T1t1SVwYwtRwQ4tsoG4ueHeUDQ7Chd6FX68ncAwNxQZR71TRr9H9",
  "key8": "3fHJFyA23t5RrAEQDPvoHiKkoqC5LPj8c79537PFUEm7Z1bprshsKTBYdPQ7SANeTHMJSVZ21p1UjUNurMhKhDau",
  "key9": "5phuFrCHLV3t6Z2zQxxFmXHGFSgCkaKGSj2U42omuzdMcLn4fvfs1mg7mNr4dckokdT8zQywfAx9yHF5EEr3aFhv",
  "key10": "4ezJPP9fKupJYvvgayJw4Gm93Wuh9zKfQpsTiPRS1BK4UDzRcSrW3DAW7ZS2KapLwvAEEQxpbLX8BZoiZyFgKkoJ",
  "key11": "4ZCESw3WB8mdEue2yBkzUB1gxi7aAaGahscfi4cbrHcaqxgPZwWvheAxNfxcxwUaCyLWXoNpD1hFhTtmoqbtrY1X",
  "key12": "3AHArewdZ5hAn5ahrr1Htk9rbd1un31cJhJceNnCsB3UfjgB4fne4zxQ5CYaTU94VFshxyd71Kisn7TrhbB4vB8g",
  "key13": "5nhNkxBnZ2UQBVTzzBkVLpVJUJvS4McdvMmLLCk9U4VnJ2bYUHqLAFRDE6Hahj6PnweuF6cR9qKce3ZVU2XXenoY",
  "key14": "3eAgF41g7MLcXyrJ2ZxZw9ukh9ShzQLMAPawiDmzJ5DiG6x2qtANawJZUriAzhKzA3upAmwznFqEUmwR22yixRuy",
  "key15": "PJ9rdtprkxHd6HdEfdKiqz8PvtCGaUNEwZaoUBJB15vF3iKQRduqk5pwz2QT5J3gMuLrhMD3fTtESxEEuQUtdvc",
  "key16": "5yA251iRDbFcSPS5N9nhBJ9ZdTNAnJmkNwiXugGQWCkWxytMdQQ86eAaVez4RZyXHwwk1aXJ86mw7KAfkq6kj4b4",
  "key17": "MAxdeVf9xRZR2M41TycuCg6iaxfGKkJHM8PNDAnL3KJtoDcVJYaFucvw68JMGLHsAMCMxKSWjzsAfieucZZ1pdY",
  "key18": "493VYEbozYrqDyYYmS2cNay9wZJR5h6mbc6kBH47Qr8ZSXUdESijRcvjk5KoUuiqisu52GyTqHVFRVktc46K1KNP",
  "key19": "4MMFz7ga6PgQqjprXYFq3BbHui6qdPXBi5GqKoQd3Rw9sE7UjUeLhCiKEoA2dF85GsWb5R29UapfM3Hh6GBfST2U",
  "key20": "36U3DgV1cTBon8DcrRjfUaFC7CCnDxihVPVvo5BhBQ9R1pPHhYig8VuYzwMywuErxLzE9Ztwuk1RTDSHSLwHhdhF",
  "key21": "6rT1PC1TgQVSPMDF7dsjsScWSi4DJEXsCHdmrQ4gWaQQRH6Ziovpo6izoCvMW7bzkW9oZBk1Qnztb1U5bo8vuNN",
  "key22": "3K19Pyo6XhnR3eaBnbstftFLTr7eVKhWTojNE9SbHxgam8oXqZicQevsokE6esUUtXFPNXt1oSeV9gkefMi7owK5",
  "key23": "8KjXnZy3jbZp414dC6idCWUNUQzbdRg2KP4Jf5vC6QUmcE44dUQn4nCj6oJUiYfaErGsD3w5AHehDambxmcXjQt",
  "key24": "3TxEjFyTA5wairPowsLxTJX3KAp7NDA97uDrar7kDnZaWdVM5bmTewmYM7Fwj4ueorEDJoVL6M1eXi5V9mUePyvq",
  "key25": "2tgX4iLsaYnxxAojhCYcUikJYrxWVmPNY7LHF7MvxKZDe68r1TauDdfG2D8z4tPTenWNjGAGVAs7g3rSWjAJvhsC",
  "key26": "3PbdZP21TYZDXn1xBkeQGJ2kFTdJ3ffuDRtnwAJhugQetP4V4j5MnPqPQHiB9WD2eNU642AXjcvasMLGn4S9ssMc",
  "key27": "5Bc5Nry3SrUivDWoLCGCEGo3smZw3UrwfNgtUz8HUnsPbqgDuAkCXj1nFQHjPeFq7mhGo73zzHP2HHPWj1Tn2trW",
  "key28": "ZjsEUKi6s54zmVVdpGSxxj1iQT2uLQisEabwQTDqMwccwWxQz8WPWXu39oxJ2t33irDR7mQaDf4FfXd67MMLHYm",
  "key29": "5nMZRea9CQqzeQvWHZMPqxVFEcS26KBH58HvWSHuipHvEucJPzgDWJfMKeZL99QEfm2XJu6fD4DFRjaPj48Q8efj",
  "key30": "4nusHQ2WsDU1X9dg2CoiBTFegFTGmKTNGiHzmx2wem6yhRJBUKhcZpN6GTHGEY7NWUbnhSdW5RGPNW72s52U2SA",
  "key31": "3iR8Ea4diLA1tuJUg3zD2qHRybQNvLNibagwZd7XxNYt81nv4zqsfzLEv6bxGow1YGm1oUS47KpcAHcmdhRTxCvt",
  "key32": "4BYMTXFem2TtE6JV6N6tHEdw7AwvDAgkbmwiKSFF86RvKg7ex2qMmMiQUAKRYa1Wt5MLhQ3R1bwUnbJnHnyrm4t1",
  "key33": "F7hQMzh8Fy6Tvdyc7hV46f8ATn87YT9tAMXrt85VVcTp1DGfG3U7KoYWbo6dDqosmaYt9rM2s3fZbogGgU3J8at",
  "key34": "6a8MVLMrw31BQyMwtKYvZL6p92CSYhfcnac7JXX54HbZRQ5uFei3kJ8hk4kJiR4aPEeKDBycTtiqYsajs3e9JF3",
  "key35": "4KmFqrqrW1NVxkrqiwPDE3dr9yw1cXALzacb3oby97bXHHEGFBo8KVRweE6YeAHKWr4qf5ujY8PC5k1LMY3boUzt",
  "key36": "bVz4QsvdDJSdT7nZqJdLNvxQasPAKtkVEwBHyQSvxneLdF759R2DBbH3Q5HzpYqk1SsHbpVfgFMLPaJSqc9XbxM",
  "key37": "2mRJt4ybGsRFtzyeLW3WGn3JN7JNEuQQDUMz6WCx4jxrpzeEspU46vUYDi9X9mstQbboLKwD7CA5vFvuytcpYgsw"
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
