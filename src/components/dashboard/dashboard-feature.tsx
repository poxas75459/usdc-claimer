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
    "4FbhnCA6eZgqLWPYSY7ntzBmJ5ZUb87YLE1yAwPXs3kg3cEoKA88qe45WWKbyVdEABs4TrN59GAcKtFkEeaA4YWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3giRaSvDGoM52npQ3vYu5E8dqrwpruzLyRMuWYvD3F38aAGsXyVHVss85YsDGyzJxbMZDKEaF8Xx7rsCPgMWZ2a2",
  "key1": "KoBJiSZnALJA3RanEMrD1w6pZ3PP7Fz4C2S324swysY8wacQS3abBZ6QD9Ch9sZJVB8Yzhu1nyzRi7isSDNXbkN",
  "key2": "3AHnYGQqhWFQCcJyEoXds6xNcfZWapRxjJXbVkN4UqvLABcoLTf6dQang3yHLrY872g95k8vzhutSVHV4WaveqcG",
  "key3": "494xCVsndKPzzmeT7FwsKwL43YyFaa97Xy5vttZ1R65P3ivAaZr3crZ8T6ZAUT92CkuVftjnCH4jtZX7XbdE4UT4",
  "key4": "29yLRYT7DHu1hZi4zCtV7Rrj7QjL2Y4BGodQxRBpjKFWUS2y1WMSmGjh1FArL89zjToipYHoLwNwGUFqYFWGbuHc",
  "key5": "3x2ui3SKPmHonhTF3NEWfkfuhgQXB39zsbzEEgswJ1HeVfe4QS9NRNjm8HgtcLV3PtZ43NjPLRPupT4R5sMZkJSE",
  "key6": "5Uv5qcQMS9s9gp2vGDLMp2KsJo32uFzkPvy3yFCGMyi2CeV68SQzb7gtvZYrvbSvCGwzkmKEvoBLTUteKoFBMv6E",
  "key7": "5ED1MA8LFtNHkMRFuDQBkCTaxq9o7xqjjWnqTtyCBTPodmn9nokgXpabQ49X8RV94wkc3zCmSPvixDJdCaNPjcbp",
  "key8": "2WHz4E48v1xCr3Zm5WpjLuA17WsGUsp7wFdC9hMh4j4dt8qmyEk11vWNrHY6peqGHsoM9BL13GnRz4u1ffNUK5ZA",
  "key9": "4y53jzx2cVHCEfrgoucyZXioKZniZXTh4ToaML27boCD1kJ8zXgZoo1pFaqhrtFiT5qrrhK84oZs57pWuzdhDN42",
  "key10": "2bpmoyWAFkTTm8oirAnoLe9XKL9FMi8M2tZM2itA96DZegBMKs2jevun38A5KRq2525Eyb84ZHuVWeBkT4G17p42",
  "key11": "3My9xTRrnksegJ187foCh4hiq7oZBTCuFMXeQsMdSPdijfNm5gtFfw7Nhse1iXA4Nh5aRrSC5NBYcjVhjJEg7yT9",
  "key12": "mvf3Mx8niAd2uSaRdn1eVE7S6xFMqb1U4tb3VXdK94nafvgnwLFsTthqpyTBntZXEHTjEVZmF5LwHQYmX4dtKfL",
  "key13": "4AbeZ6o9adzfEPpuuEDxddc69jcTLs4K7Rqc9bC4Am6Xn1fdW5tHu2wsVVSCZy4mHTo1ntq3Scqz6EVGcQnMWNYX",
  "key14": "4mKGuJoyVFYZetr3v3rQpRYU3uBo2rXZdUjs3iqP2cv6vgGKghPN2DPnLD6PZXemvGm6Wqm5EeMbhCtPc6jwpDRs",
  "key15": "4RBVv7Y91vgQBLhRz3jEPv24Z1G5Ku8gEw4hcQUt5HecGNp6BSDdegvi4149mMA8Sm8ZGDEsUXEn9Vc6Z17fgarC",
  "key16": "5EPEz2z4rwWqadpBvRLfzGeUjTthmgJ6JbyEaByqdXLdmrtWJz7LhPtveBzTESCgsLgjTaQQUzGuw7Mn7HHhLy57",
  "key17": "5TNGoBo2aomcNA5Q3quQjYMen8HZR8nbJQPUQBwGyN38F61iQnwSHfK9vdHBg8mKSvMbvBzc7yGG9iJtCwFDKWHR",
  "key18": "4GSvjxoP6FjFrQ82BnKRKd5bz8UC5d442tycqeGxuYAGZDxPCC228QxbimXPor2sgxGwha8GaCQVXibfm9bNRZvw",
  "key19": "2UMfDWAS7gf3otWyb543VHNzUvwaTnsDm75YoxDWkwFXFJD31zDT1gEVqbXUHxyn4HtxsqPS8nNgUQJW5PjnVrai",
  "key20": "2inWRpwoKKDJAXt68yPnDpRJrniPG1dcGxKRAiP3PmMLVfUJnQzkTKGjTvecksVea8hnBzsUF8H4D3PZ2R2oBHqm",
  "key21": "2idNmscB4gp8uFeswooxKgtnkGe2jRCftzXVpcELgbtLYs52nyh8MS8v54rCTj1VjthVBVjcdnHhdhCQ7nKK4Xuk",
  "key22": "3YVAC8AkdPtNjz5Gm7smDGR44JwxviEBgJyYVXEvtWzUHyXwDivahWEa6M47WyDSfJeVNPzXwGpC9S1mg9FBRL7U",
  "key23": "2B3BLodbpBsDceDkfni36T7vKnfXiDPYrSBBpgCBK9yNvrkXQTCjRFpr3xpRbMgyrfY2tbR91DBdJMh3KmW4c3J9",
  "key24": "4LWfPZZBwAzBuhpKg91NaxsdtCkg4XL9xAuaBJYsBLtm5YbtNxgnPjQFKi2kdqkgCEZKKPkbCmPPgf2LaxCk7vtu"
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
