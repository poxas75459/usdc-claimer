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
    "31buhGDonV28MnhrSiBBN3YKAkwisXANRox9VyRqMgbnC7p126Xe8TirWizjEyg5scf6C6HXvvaJamCR3JPFCijk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "to249pg6hF49hN7AMVzZbAcnbMBy5oRcGNKtqqDzr4jFAQi6QqKWgNu9X1S2DWgDvcpnjthyLcoL71tYDCVe4Pq",
  "key1": "4QYQTMeDsR4rsmKMtFQBzzmxpuxaoCDd2FsJjigk3NrEXJM4CQ7DyUmek8EbPr8DvmvvcitmjNMBzmpy66C16Wkk",
  "key2": "3fu2xJBXU9rjCuqg25bSJwnbaqXSsqeMTWYwfDypjAp3FRpbDpThAVSaNaejdvfjCpuiREkZFo2e7N642ydWMsKb",
  "key3": "APaAaiaGyaNmVJK9G329PXPLibRSRbngTPZLJYRw3LTGtM8Wh9nSFn4e3NQpgef89FqLPaSjwXQknywUcA1g4uD",
  "key4": "TnxUXajhVEpcvKNkQju1xjwJ2yrVPZmx8VbE7NhQevUfc7SdrbuLKpvNvC2vSUfUfbxLNkSnpuXAEknW5XaTiN6",
  "key5": "2SZDKPnnx5JgAf4wXtxbtWFiB2ndjEFTuzbbuHqAixEeLbP6hou3ESU7JkstZWEVxAprxASfmgcHM1xZwsbGtiJ6",
  "key6": "5zPMZmrfaqRd1BJrPDWTpEE1PTs3rcEJxYZNR1JeiPpKcVsnhuev93mzxdkzY9mkcA2iY7tJd9sSyhZAdPSg1gQB",
  "key7": "5LyV9mVEVKh9zAiz5cysEj4fQuPSybArGDbGaf6Ee9RwEf4Z5T7ct1tVazKYuX4rG2ng5tkiC6qxZN8jQtAnqbSt",
  "key8": "2mHcskfD3Hf15ai9om3d8UDCU1wxUpscoV2mV3CpRgaQXMwMsUUy8NDwc2s8h7KJJ32YfHnr2vrarptEUej6zi7U",
  "key9": "19c8f35zsWJHbd6zVdyufzGmvTQkUf2Jj9fBMxBtiFzPSkNKb9qSbQuu4by5XhtkMNx6krMdPkYHY3JiqkpvyBv",
  "key10": "3toNWRpeKhDGnNaMLB1YyF1SQfztc2BSp3aBDqKkHsbrqKT3oA2ZdZGJkH6Zh6R4mGhriPKidMJGjhjy8izo4sSt",
  "key11": "5c1bnA4jts8mdt9CmgfbLD9Y6tM59PXiCYWqStwfAzeWQHogDfKkPMy5WDtiFxV242bvNXY8t6zQWx1thFo2LP9p",
  "key12": "2T6qR8y5N72AbzHDAiBUXdxuN4bNuccJXQoR4o9wXQvUVttVWX3g61FNh1MqkjB4uwRGauCyeujPBgd7F2jvrECT",
  "key13": "Sj9tmZPpNX14Y4fHjneQe1eLceHi8JoHZpPtUQjYF6vogggQpWtu7pZQG4UYx4R8V7YeJT49D7y5cT88ZEasam6",
  "key14": "46wqvHQXD4FQRMaWdkETaaFTLRvsmTepXmdp9JCzgz4hzbqMSy5xFuFcuwRPivnB3MFXVjm4LToLWZCSPtMDkTqz",
  "key15": "2TqGp2iKwPQKWcNzCggbdNhijFVYqmsMBf9nyr9UVh5KqrjYcGvJDCCtobWv259HgMUQsTSC5id7jyjVCRSi1465",
  "key16": "4qHBUZpW1gfokLmUzpETYf2Fn7FrjwZwkhqRGAzuPq5hQoMqvzWSzcNqxPcqR6BJokV5HMdFQEB6XM26EC7Ytfjm",
  "key17": "5gZiiin3AJVLzfvbZ2CMY8x6oqkvJxWYRaFy4hJncW8uajsze3FfvyDkdnShPCU9o3GDzbLewnSabEffMoaeSniM",
  "key18": "K2tRkWFSXqLzhcKTnGHTXQpjmUxhn6Qpz3HGQA4vEGBJQzyMnxrfYATGafH4ko8GQTmy3xZKeaq13G4khkL2BNF",
  "key19": "4zhCWpPiqawqwMUgF6mkQErWyW95aTJhBfu4Ydb52hwqnKSXe2qLCgf4S5vrsVYaNrPMxC1RUWU7VkXhW6AH1mwt",
  "key20": "36tkpbFw7nvtTwutC5GZZ6RPeDJf4yPxGZYTgRqrwYyg7LzUvLarWepgUN4KWfrXCcNWpEHgetzU4iJjikm1xMn4",
  "key21": "4LU31qHUDnkzsTx9g17imhu26QUw92vdUgG78VsnPqmCQbzPseQv169S3pD9z2aWcM2PgSQAPiAXps7S7guAQX3S",
  "key22": "3m3xpQwXvetnuJMCBR3Fx7veo2Vz6abuFtQb931utcjkvK1QdM3b8y7AiPd2QcQJWyiqWb3ySnBJKU9dYpto68Bp",
  "key23": "zsDuCfx3aQ9vYunTtHxk2gLizqVCm3q95KhysJqoQSRbA7qXS81j7PSdqTCRnyZYaJiyU7edURXJuP3DosZhtG2",
  "key24": "5yeMck5TniCaKX8QgVPRquQ7tBw5WbmhmYZ1ZhdaFDXYtZfzPVhwb4jFX9Vf1ptuxSi2ALECgDb3vTk8xcikEYJe",
  "key25": "5Yo5n7bvFsetp1WqUANhim5VNtNtVRRVdnvHEtPS91ivrTM9SgR8YaFXSkxsPKhSUck7j5df7qBSsaGUP5LtBmiu",
  "key26": "38eDSm8k8kMDHaMnNfDvv2fULzBJMZDVX5GjxZRSwDjTBkai2BdWdfkqNSyLUkpXh2KG2n5j1bSgpwBKD1V8bSMP",
  "key27": "1228TSM8Phu6G9MG31jTqKizmAwASn4kRT5kqrpdA8pVBgG2QxJ3ApmXmRPEqCYg2GRFaLMUrzaNUUBTjexqWZ9p",
  "key28": "5XnfGK4ihhpcDqBNmiiHKEqxozeVrgvELE3qqyrXJqG48dpCdvv4wCYBkXU2whWBVBJjowf6n5zLL7RFgTSKDdhQ",
  "key29": "5LVkcaUdMhPjLpAX12kG6eJDYFNjMeKc4Av444FzvKBeruWtyRvfYMT8xGurS3sJfHUyBN22n32NzV9dtEKVg4qD",
  "key30": "3CUMieDdF1aFZEgrTTzTR725mXkVsX8ydTkVJUAwhYgNyT49aZSD9JhBPinQiFw58fDmdy12rAmFq2TUZLYbjeJM",
  "key31": "5D5HcjYnZozLWGj4hoUiS8WNgrkYEzpHEQANgthyqkMeo854DmmD1PXy1eRDUhTkvVAeLw6yL2RNBQ3JnC7SxZoQ",
  "key32": "y9Jgh4oTonwEMD4UWvUHs6jt2oocwfU4UW7rkSCTug1kEKnpgAAmG4cs1iyHdCGTmYSUingx9hJ1hMEB51CosEb",
  "key33": "4gWnugHPUoazHxbYqQJ5P6cqKGaHJAeRERJBFzyTuci2jFPXb6TxhCVcbBsZdXqB6BthFsxsnikCYdUNbshoXc8C",
  "key34": "y4bWSfUHzJfmqPSVdeHpX6FWaEDfvnj1VMH7MekD4PZEC6j65WnTVXLoCAJPRZuQNJSz6WmEwrVgUMWxHnNHxrC",
  "key35": "EScSFqgREga6AMWrBptyRmjwYwV9xWAzKqm5iqVVHNZvFWQFWEcNgHZdCC94U44BY7NB9JLkzi9sjD6GrngH4ug"
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
