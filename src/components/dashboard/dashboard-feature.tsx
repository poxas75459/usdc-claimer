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
    "2Hq7s9jphfaSnPDeGkBk6ewuNYt6T4CMZ9XvUaKsRDjbQUJxYtsxrsoaeU5bKw4txLqiWuiRQSWq87FqVrxAzU87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9165ugfLLYb3GHMqSxSDZ1MiAjPk35ngNK8foxrxcpV3zGnqky48eSAV8Fbf8jg2FpuhmveM2fgrp5S9RMim6r",
  "key1": "5sQsp36PEuGq3twPtgQRD2gHZU8NUb5rumJ2DtZ2tMJ5fFiQfpRfwyCHjqMCyNeYyHqjo2cF1SK6omMpJaMJr3fD",
  "key2": "4cSLr9fvpeGuHiCVDunyb3G2uDxbHbxZGRB7KrbkuLtbo8b5GVKg1hKri1qU2M2mwtUE4R2VaydCFBXiLMuvpSHu",
  "key3": "QkrsECaC7RbyvKMe4ut5XhupzZhNSui5MLbeAQFAxCZBLE44VQZNa7zCnMdpcFPRedgrddLBiWFfSwN8yqz3he2",
  "key4": "5UB2Uu3AwoNbfYXHx1ursDb3rzYPSdr9mnzcv1aqGsnCzw13L1BAbtBExz3Ny8cakf32p63tPK82PENGCQjhXBDk",
  "key5": "54qAoEV3aYZiXFBcwZXCGSM7AtfpGWCnkPBZSdm3C3rRLaQkYc4KRGg2hFXC4DdDiUAFRhFg1DjMKn3hQhfXbQ3w",
  "key6": "34JQQ8RFyQvsipj8AF5SKZgN3Uk8AHSQXKHyBKRm2LRvvhtewAuMUXXN6NnRwCLhwabt3R17tJPYUesCVpX29zoM",
  "key7": "nt8S8iEyvjMuEVym68kd7KBGRVzcjEsGnbRPa76YJEAZKjuauAHavW8HyzCH3GkxYzs2eon9RRr8de9tBtbwWdE",
  "key8": "2TtvuhyNTYhGitWDfE5h7VkYgR8mFNfbaC3T3Twpx5AGnkxkv21r2YXXHVU9oSyBreLoCwRD1ujVpvrWwvSTngUP",
  "key9": "LtcF8YxA8FaF5C1r4KvmPmZzWfTihJaLArwgAcGKwZefL53nNAvcrA5UDMvuzMHjkYa8ZWtAnU36CiFwxfymdSU",
  "key10": "4P4QxHcCL6NuWCucUYXXw2GD2cumfPnJ9Y5GEDBafVuLBh8ggVuFhBXLvKN9DaRyE8y66DnC6RYRaaVUJ5nYP9d7",
  "key11": "qXJtBjUsQjXWzs4MgxU3PeYTVxJ57WmYYaPDtard5Ja67hZAgVjUhjWNq9YgLhWx8UBZEXcAzRNqgSJhgEumuof",
  "key12": "3ixNWHuJiMbDTKmH3PEucBwNvd5Wx1C7xUZpJeX57gGMbQvWWgNmyuPq2ABDEWrmyrqiJhjZBBTh4xv7xKDyqmBX",
  "key13": "3vUcAxtZdQ4KoALNyxMdyRPAHYygXpooRh3AoCpMx72DoJvTqi6N1DNZ8ZPtiQUQYfkNQy1R8qT485WJuvM5BCzh",
  "key14": "5uUXiTTvi9AErnMmykTExEmafbJNeQbqH4f92r6PN1VdRUcF3guNnKKq36qg5pQhs413Zt2JvTTyDcpqEHaWR7cz",
  "key15": "jexnpgZesYByZANex7Ym1nqC9e5uwxzuHiqv5KcWL7c4ywDY6pars73borEtnr5ddM8mJAwNoWZjoQuQa5A1ZwY",
  "key16": "3op25BR7KSWEK3UoarkqXrm155wPdf22BEwYfTgyRQpAEWAchsS8p7qWjjBiK2vZhnfVjvW1tKKgaUw7hhDF22AB",
  "key17": "2cAnpX4x76WZHLKxHTU8VmBr9oynFoVpcq7rWQhpVWNcH6y5PNUr22dFVjbAuSGEvHGokvrtxwDJP7EQ3u7J8qpp",
  "key18": "3cUAc4mm7F2okpZPazGoeEaZtYjmvfe4yF1YSbUFqhiYU5wDrnzaA1FAwyuyNZeXhRw82YMFYf2Dp1UBJv9K2NXk",
  "key19": "1vt2HT7ytp38KpAHeXumd5uDtSY3W5m6oSKTRLXBify6y3kQCPLfbyJ1ghEAfgHzCVDtvtPc1QpyyVyTU6TYypw",
  "key20": "5FcJsBJTVmShFHmReLeDaiSEmMs7wqWtuuV66MpBgN6CuRyZby34mCo2WU7MXFa56UfhUNgnNanPWBEDbMi1nXn2",
  "key21": "67dTndMCUA7UZEqgPBHUoGjLQi34cNZge5kZCpMFnfjiK7kv8ZxXrg9d5VQywDdwquNGUqsTua3bRKgK3RdbCeiE",
  "key22": "NFds5AAqM7vGa2i4Q4Ge1mfXWu2feryUSKkfoofnuisJ65pCe88dHaDdRrZthLEgqpioQUp8hZz23z7vFC1fZ7H",
  "key23": "5BUPLxQF7TVxCS5DRpv1eiFBaNgt4R4RRwDqLNG5opPxs32onJbp8FWq4ou5adyYE5sGe7hRsFzrPX4b2wK59ad2",
  "key24": "22AVgQaEeXYriTWzBYoZMZ6cCoW3DH9fJM3XGfiQLcWb9miKGhKQYX7y6A8A8Sq2Zs8A5Po2WegfAHRdRYgCfKMZ",
  "key25": "25xbfJbJ97skPPEWAZPig5FCLLqm6F3DUnnpVVZ7WdiVtQjCwnqvHwFNjFmnYgiW1gMcEwp6UP8PSAjGnnbW4ezx",
  "key26": "2wcbaPcCwKQdcjrTvvPHUti5C9DC73D1zVrNZ22nJi5LGcCYGFu11fq5eXi3UxkpTwsh3qsFa6j8yBWV1TWm8T9B",
  "key27": "66j2NcFthNcEeJPUPEHk5s3kgGbnywhur6nEAMtKAjYwd6UuusoHf3cHPBvVpqtvjHzmpd1UL7G4Kaw7mzbA13Yt",
  "key28": "nGBe5Z98SaVqRbgNmPnWhXXAEpBAMFkLsojG2FwoiiNYBKf5z5kgmiswwvMLWjcroKtUBmS6DqUZ37usUYbRHnS",
  "key29": "35q2yCCh5Xq45obbm43bHpETA3XEg7wzNHUUBEzrdYEy1dy8vU74rWEYVbK4LSqUPciKPy2tKMzzH4TNeNaHqA6H",
  "key30": "4wLR8qmShWrhMcp4hJ4wa2VV3MW6XXaVukDQYB3MwoVMhnsWFKzCHPXxst1uFXzNDLjtbdKMV3xe6vAaEXks1Gom",
  "key31": "51DusSGpKevneLof3rb2yCvYu21so4VCs7i2EXAwhX2qhVJ9ujMUKg5AoQszTNUiQDMS4NpvniEkqdGBBPUHDPMS",
  "key32": "421KLKhSw7bLiHRbH6hM5eTuHWMc1cAHWceY3AvABCmGThJJHTP19Rrts2iNE4HxQv7wZ286hQGED5A8ZheZrkkk",
  "key33": "5debZMvjRXipXL2AEf2LJQEGmRmQymhzRShCwsyQomVYU4sUMjxAiCRJ7eLQDpCDm6357yWskdTdJj78wmJeAqVs"
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
