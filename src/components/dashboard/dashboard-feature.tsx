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
    "AE1eSnCW2S16erfqPNHDqSvrzaJSLJti5LTiE52ZiozsMmS1Tsqq8p5ZHEzuJzvJjdidsRZuPtRzeypkEATseaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AXAh4ejJSYdcpNskKy8tiE9DsVAt8o81TpxBXJuih5BVZU2nypGG7PjjkRhKoLcApMuCGUxgYrKjFDki5HfnneS",
  "key1": "37yGF3qztcseKubiRHLMiCQsCCrznfBdrYkA159U6jLqFTTnwm4PepFYKGxfTvby6J9g57rVyyoaeBJiFm6iJiYS",
  "key2": "3KN9j5H1vN1cVwQ7wswS1pDBU5qj4gxWkJM2pVcwHGzVaSchnj6aj1zhq1YnB4ptp5ir2LqoiZcnNXyD8TzbUp4v",
  "key3": "2SyzKayLdRES9dZq3fWgNNfseYbETnwPeFMESmgLoPtjqCDXbxSb27CFFxtF8Fnhss6YuZrdyCZ3VXXqdXYzZXNX",
  "key4": "2p3XfQpPpYYynW1cLve4aqXKUGf5HPhx9kN1b8Xu8dv4fLea4WuaXC8zcuZRdu83qEsnvfiwQXAFVuEXdPrMnFyF",
  "key5": "5UWnWskSzSbbd9bgKgpuxE9nqEQsm5RMUznFwf3BhdqRjw7j1bEf4hnwgzFL54rmqcUwdy2E57jikScwhNEehYog",
  "key6": "2FqczaCr2C1vxwnEFDfn6BtikxKbHcT2SpK16eBBGXogq9vxX8FomoBK8B8Bie8WdPWcyuquxRvvHBT4kDzmCkhq",
  "key7": "2R53kUQ3dqnpWX22VogprANDtCir1txBLGXBCTdYg6fjuAyiTppNFaYofPmTrHysr4p56iyM2ywSL1AE6ZZSKA8k",
  "key8": "b48CKMeugujwEgjyaWBnTJ85es3AYKvjQjjQKHUXJjVUv8E9ax2dP7XyQgbEQV1vyKP16UkRqMhcmhdtRFc4yho",
  "key9": "SQGhGyNBh1svKryFDSBo9NFfrp3pDeJgTohSX4LL1dbDqNmHT4JJw9zWKfzcHgyUoPXyeb6B6YnSXBr8PhHWYLw",
  "key10": "4GwRS27bTRQmoWiej8uSmoH45pYer9r5HFu6ALcPofeA8CFEnX2h2gWXmbwsoGpwgyxfuxveTLEPPRym9NaMKUqm",
  "key11": "rozAwxeJRDSdWVpM8EPsg4j6TLLzP38y5J5nFfLjbUQXMHm3bdWbR31jyZxKzTX8uYCDbiQ7ugBUsyizQsm9Ct2",
  "key12": "4wUxycX6WBewfRb9EGLewRanu4BDa1vVmSkvCuLiJDuYBcpCLarW9PiUVKH4ZooJ7pM2SpQ1XCcebzfqqEZ5KDtA",
  "key13": "Cr47WqSHqes2dZyfZtnqNFP5Q2onjo99tzihLbe1ihd8Qeyqmyy2beYqy9r9NqEJsnENJvx7wcXhWcaBezbZfac",
  "key14": "3fmpxnGY2hehk8r8v6Ck9AwgkFwQ6ngKVKW68g4rwo41yUiEbXC8NHXCjcVzPjWjDqJhnqcCojMQXdbMKxE6V4df",
  "key15": "2R5Pey4ECm3wDJVoV4rgoYAG4VXWg3x5Q6gur2E52seaEyMqGMY9ZuFhgbiVDCPF6AgCkxfcLBmog6HcztiYXDus",
  "key16": "4Y7heuiXK9QdcngufTjdnT93xurz2ZJ2kyHd135rEVEkq5SZVfMFpZp9FgcwJhH45kNSVP4Ayxdmumi9c9ZkwxF1",
  "key17": "3vfsJg24K9P8epXgvH8HUpn9t3XLyxEFQWWfhTzRquT4LxEChTvPBmVGnWV6XbFo4wPAG9PsDm5RPRvZ4LYzXCUa",
  "key18": "4Pzaq3QLV723HuoTHP7Z7kEskgrLHMhGuAVWcsqmF5HHPB6fZuMxhu4iKUarf36KL7wht3q28KdJTTZJEDu2NPVj",
  "key19": "5UAfPWRZvFSG84U1y86gpPQRkpnzhHDvceEFW1o4HJcwdWeE32N6pEZmF43F413aKQ7K2HvhkmZMUQ6f55jps8XR",
  "key20": "4kugBoS6pnjvfSvK6ZAkdjaKGVLp1J46HvhQm8z2Pd7QgVdSgnGWTmFV2TqKgH7gNAhtDC5ichXHFu9CC1xcmYyv",
  "key21": "TASuT12oDE6HURMQxPGzzmJySk4iDxjffBUttzMUEcNPK1bm5hPiy8qhBJu5yLpRXNdFMYB9SuhMFJrQ6a7G8bw",
  "key22": "3vLcyMr4SyF3FDyK9Fs5ViMFafHPzJGdYgyi8H63XnyaGwYYUF2CdQUQGyAnNHMf6PA1DeTErrff7sTrithE6e4s",
  "key23": "3NFWtUTx3sdoWLPxCoTxv5H1wmYaC156F5MMVM295nPaSTVkKAw9ggs4PAVYBu3YqEvPGLLed5mL17N64x9hFhGk",
  "key24": "55QioGTX1dtd6RyyLvihb1pX2vQ4Ff3kwqzZMB38nQopawrtDjJE7WAeEh252fBm43rgAiu2cVNnKCunp9CNJtdf",
  "key25": "3Uro5tX65o5R8Ncn2r8iCRCq1B5W4gHQEuYDfs5DrWTBQtJ2oJof4448FKuqwvvcnxvHcd5Y9nsWFX2kJFh5uda2",
  "key26": "2N3DW1ku2a3YKAR3qFUwDHvc2ZnZeKxeBH46oN7PnuvtAjsTAGViBZwyPCLiBQm4jJe2VU2tq1rhW6FzYbSVQRAH",
  "key27": "2uGRT1yYNu7JupjokxVUEKTwUxDbWNocmnGCK3iYPVanv4s8KBXn3C2mJW3Jj4RRhqKL1uNDQhpoQqgZowqVvUrb",
  "key28": "3gqsUvPjkhvm5ucMBSePcpYhzJ1fjb24oabLb1RFQDsoAGD71iQH6D4wqovbBnEbrSHodmCdurVFCPMiCrzJNL7c",
  "key29": "2smQ68XXfmQTc9EyQXguYzzW3KAYXf7tY5oSgfhnkvnSPxNjUqV3pMUjhJUuE4HdUvr7RdxHcZsSLBh9eazwMWxr",
  "key30": "2MvPFf5vWobiNUQytgK7QMU2QUL6eQj8nHWugJYG38q9NYqydqwRjuQqabyVKr6Len7xEpQXH3MLuUxvKvkCnqTk",
  "key31": "3Lvidr91znVyJubFfuxRerbX8bMXnVWF2uvAL8bmxFd3UdAoTXhhnPTGasSyDuA2kNLQcChCkf5Y1KSsBXQrLkEz",
  "key32": "LAzXViXxNRDmth7aN7Kj2DcMGQLirseDsLUkaDZwEju6JsFQQSGx97iWJnvN52mUwjfpyRMjRmrqGg6YHpjMERg",
  "key33": "rRhkiPU28AEVyc71EqFKdp1o12mpeuLjvjgFsGns1LYXJLAVfjFRLvZGVrFTz8ojUAzJcWnfnRrK9SeEwQ7EcTy"
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
