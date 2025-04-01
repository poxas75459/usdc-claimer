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
    "3V69u8Su3cGfw55L7f2UnpN98Gu5yHrh5PQXLDMZX2AxnMZHXgaiAQuNBiosCnPUHBZYzDruNdNsoTXt6DjshYMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "istZR6WGRXFXts2dGNhuYX1rEbWayJvFLtDUNVTNZAhq95VyAgtMGnD7VBUcL1ejDxVZ1oXrxuEcYkzMWDANpMQ",
  "key1": "7kB9obN2JkZXh64KFEeg1HC56cq4zx1qQk3dAZyXtsnPXCW9AxtbyRyiQpHFAYj8YY829RAeSqQbSfjJC4VQzr1",
  "key2": "KUtBnEAeew8mKYNr8fCHoBPNjpNfjr78vwGn1rZ9aiYGTVoNFJwV3F95LMKeE4KG4pfBxRa8C6PgC3t3rijxcvU",
  "key3": "3pYsq1MEJN6x7BwWLEDZ628J8dVUU2Eqc5th47Kn7KnFQU9dVaWLeZQ3yzNPyycDPxzZ6TaecfAACSUDAYyn8oWB",
  "key4": "tUH9VCCwrRem5Le5r8uybWumuV3n1Z7XsFBzQpMBWGpsKQXZsBnWDPjofHavh6CmbC4q2ekBb251Mkre1FNUbw6",
  "key5": "2QrUVfovJVK1n6CzPJ6T6hbB6H5QvzEW8oxSamtZvNpj1dovwC1wkkLFedXzSGrMwzc17QxpNUa4kKmjzSBHijYo",
  "key6": "49TsBR3PH9zjJNay5XkmxZ5s9VxeA5wTetqeJrGc4CrBxszCnP4rY8TLitf49z5Jryg1xPss8r8ebjjV9Gh5SGQz",
  "key7": "3HhoUVEvcFyBC5dWM29yGzz4kygfSq67HDQdwCgRPWfWoYZ1Piz5cG6LGNv51MJvxCtHSzSz8sVqNmoKLZLzHMgy",
  "key8": "5FQg9oHmK4Hj8Dr3c3GocZYbbawiXRBAziToSdmqB3gKP7n2DFU42kbnxKsb5BSjmhpTyjaqr4whNgzyo2K6RRbh",
  "key9": "2fVk57pVZsQUmUPc11qbketD5GYvtJMfpBfWiJjmpazx4knrWK4Bh95YN1ASufkm3u9Sb9hGkkWy82UoaSrQTsX5",
  "key10": "2Mwh9acVSL3K8JDXB2qZdzzPXAMtQasEFLJR6gkdHo34GnpoDj62CwjoJo9YsD1UsaP7nMJMwvHHLrGgT4iUJbu4",
  "key11": "663vbGDCGnT3JokMbt6QDUgPfH44b8c3UEsgTM9JoisvFHNXWDqbrEhkokdWydjepdRbWkjc2w3NDpoNehs9rUMq",
  "key12": "2tVLoHZsaaUGcbvP3JErDgynMoeiHkx9Xn1Wh88M9UDKDQbsaRLHvAoCsxA9zZBZDVypvC5oEwJsLjZBRv4DENyK",
  "key13": "y7AY7nRN8rWxpLSWmdwrTVFoYZK3w1vhPS7w4JaYkiDMEdbWZBqTjv3stj1rcrpyFBbmRT51TabEWpuuLn56tsv",
  "key14": "VNPhckzjaBvQ6MRACWmsh89roezezbxiFzcttgTHP4gUBKmcFjGTSPKp9T6WHPXgYmgKHfWPynqtSbGphagqefW",
  "key15": "5h9gvatT1dMkmePE11x7XyaodBTXx73X1H1oneAve1y5c3SB4ocJHuQE498ux9LkNs4zmKfVcsAhXSLkaUa2NUPf",
  "key16": "4KokkEoBxUdQE6XaacoVaR4pzNt99MFMMVCD3B5n2o21KBdbdiFRWQ9hFieMocityC23t7vbtcuMfBCdXbjjPMzH",
  "key17": "3s589J5c37P3yzuQRLTqy5yEb8BfbvFrVhGz4sqEhLh1Jyypx15Pnx8YJAmpsqTURMhXXStshEVWUEAi9EWzugFa",
  "key18": "3bkdvCKcTxLayNzePx4HDSWFp6VhvRssHh5w4XyAu8JGhi5anHzXXRA5UNxi6d7e2tM8jLwiyZXwfKmFipnzpKu1",
  "key19": "57w65kZLdXortC9WP6Fw9PPWnq9Xb6CwjeHYTm1Zmd2vKyp9C9VJzCGxXJTapXFcgCw29qhBfe3UhZ3etUTDKUsH",
  "key20": "pF1ZtBQsDtnMFS6NEST2DZh4gyvveMBbUrdWPnhpVrF5j1gyddwEwHZB3HvbDxd7oYi1a7c3HKX2VXJ8sdkH7xN",
  "key21": "2t9a74o3npo3FdPF3EN6M3ZLR6WLYAiqHCuUuNLfvtwsAZScanSrBwP8gngA45RjyVctcfw59jg1nk9LESJoZvr9",
  "key22": "55zUU8Rzv41QMuhP3nSQHrnkTgW2ZfF48j6WFMtCXLRQhx3cKMLpvPgMf4SFZeokoVmT8jspPFT3XdEUePmVt2Gb",
  "key23": "49BW4gRTWQX8WkaHmTHnkPBpsbp9yXNdKhWb2ntouqTwPyYVu7vwkkcNvWk1Y673qMfVgrAymf98xunfUiVwcHfH",
  "key24": "5yCRXNniK1Uqvfkyrgxc3NzHnFK8Z1hV1zPgaGTk6vD9i7zpXHS7oBWxBQLFPgbFESSSmsD3UXpqMij7vBKpNJW",
  "key25": "5MX7K2y7mAbHGWAnqRUBTYv6G4iMhow31PsVKLe41jq97Qv94VNFxbnrq8t2GbxGxpLdxw33mgDhnc2tvkhE8Fdf",
  "key26": "3bmYUeDfBkhhkPp2GMBH3KBV5KAqJEb6eCvSSJFcpbm6MzYDXbngNne3heWdZpTDRPC1cD7mc6PXFncuGG2g5DX9",
  "key27": "5N5AgcZzvfpmHkoLdzwnZWVhT1T8d7uwKu263537s82r5rjbfNBoGnkiH5gs8Pv14wXE9iDycZCDXa22V8jEAqAV",
  "key28": "3dF7E7biWKxtJ9sHT3tEc7KWJZhjhsqiiKM5YYiouHbZi9NYw3qzV7a4YBCpobF9UwgGVxVzZEBZGRDSPZ9RJtie",
  "key29": "3FLH6zsMauQMaNjPujBJjbDZjizRAGfSGUEZYPugonE3myfXqQPcxS1fyk6nSNRQEKFA3nW2h5aUcGcGiVZLtKoH"
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
