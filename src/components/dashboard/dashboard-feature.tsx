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
    "GLYw72pt27GLY2NVeEdyJEuAdiKh98jcMGU7D8wy5iuGkPznUyd1bvz2ZxjHJcVj9ssSsBVuGeEwvVUix94oq7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TH71AF6Ussw8j1ZAMH4TyWuNmdNvtyZ5tQrizwPTTyNgh4d1F9jpLAFLHCHDG2RbAo7tZSYEHbimg2LFwEJnbRi",
  "key1": "jmYA3rYbE3YUf36VeUrvHoGFyVwNgS9n1irGthpv7gdihJDatiNRNyp5QmhtdXxn9sXBE9JwcabFwaatfZFDHuK",
  "key2": "3svFvqmUizpVqkMJE52ESb4dsSARchJBA32QH22raxwH1CxBPaEHisDojpcBkP496FQqAYJ3EAHhK7aTPEinM9C9",
  "key3": "3s3k3YdF4a1KtvqPEnhsow7vkHpXqR1DowXmkRyjh5cDf7hkM6DhYCKmCLERFAMVeZsFnTma8moDuXQSzbnW6oC7",
  "key4": "4ewSQDfTZ8NS2H7ywd5wLXDscGo6M4XQTEAYCADzxpieB2kReaCgg8qps5B4eMBRNeK5TJEx4MuUr5ZZXaNxhTSp",
  "key5": "2eabzqQQWqYrHs675wZtqUftivfAA8UMkYvokUSzEPtq7mznDiC2cnq6XAAy16RQC1NKrDjpq4uX18YjHix4zN7v",
  "key6": "habbXjL5DQq2eBYuFzrRt15xxW7EXkMEjaqjmLdyg4Lhnyq9oLydrbsJ25kSrGKnZh1kg4cRutSVLCshvbR9seK",
  "key7": "4DMf8BUa3E7NhGQ54gNmgaSXqRMEbCrkxL35GxihNPmhaivLpyRUwj1hpyXjvNKbpyVBBJDsLu2FLqZ3spKrcbet",
  "key8": "5Mf6PMUyoWpMpAH3AUr9HPNagsVtNuewujpWCha98BgT4ZYwBzsDwsMFrXkaQ4RoifgvK788sq9jaYWu19PkjGPK",
  "key9": "CksBD8K9N8HzhyDt9s9vduv1qCQCheu7L8FcEL9EUjZr9kP6fETcQJwzUVbL1kZDjRyRPjcJcrR4mvJ5e2jrzC8",
  "key10": "2PnhWCCknuMa8sWPvUiuRAE1GmDXViMPgsPo7qqRWdNkL1ErMgMVMsjBUGLb5pkatdmLXJydFTKY8Wkp2sZGUm7r",
  "key11": "5bZqRHvk8dT5vGGLzEWfemDNydU9yT5CCGyE3f8kAjrQwYv9NSDrFnox7v7qnYyAPs6WWqQp2ryy2gT6wuuajkM2",
  "key12": "4QH3PLMzWDrLNEwYYdBjd8XzKYdbGLYoVbNr2ZEgj2EMjGvwdH63hntD3Vwk35aGpZHHTiX1EuKHfvfvPuKf93Hc",
  "key13": "2agiJLyWKtCFDWTbbC8xdHFEjXCHdY67a7Loo54PJgPdwUuwWWYSwsvsxW7UUF4imn3KAL75nkYxDJnFAteLYnne",
  "key14": "5B5m3876YjamuEaM347p58zPFfiMRCr57FUCvBdQeCTU6QyJ2T4gK5CVQhUCVKiNkoabJz3xD9gHBvwBaYdPSu2Y",
  "key15": "4pAVFPKvY44XcXHjQHgwoSS4JUMh9kJbhdYbE6NR6qztzLXoFt8AydATqu9a6QFP2uQaUikjw56vcA6LoZJbTY5p",
  "key16": "2q2cL3TqCqVmyokTM12rdxZCuQ9Hqhd4dCwJGFsVnrbTbHD1p2YVE1zt3BbQMgciGfyQBHvJSG4jiMCXxnd2gtKr",
  "key17": "VTswyYHz54XMD8XZsmmaNnhr6fSaWhRFygDo3tVaE3PMnVhv1UuKpcYAPVnZ3Fqbuf2NSYhkJDzpFQ67aBvKNx1",
  "key18": "2LdzGp1w94E9WBHNcJGkPBQsWkRBd5sMn9zqUrSDN5JYmrtcYgwQez1Z7mZC6nU7niBMUQ9vab28FGD11yH9EvWr",
  "key19": "64J8m2phrdymhrq3FfsbkzCLgS11TtWntddFEaMntmypdfJ3yMWMbGC7Z2jBqvnxKwMXyWMLWnmQ55gEdy8PwdWJ",
  "key20": "3rSCGamBbbg43Mpy9zLdpxNBXLHtYzHLhwsAsnYykqkTRiKMKHk2bGiwnLEU2j1ZEqruKEurnrPZfZrsRymYmRqx",
  "key21": "5vtXPRnVYB5XaxzqR8Uyn2a6qBiaL2k11E6yZDhGnvZMevWm3LGCdx2if8WaqTGQbGXqAgh1aH2AWNM2f2hcSXtE",
  "key22": "4aFDGSgR777LXiX7VYnBdKnx3C93Z3Qx1XFDeyWg1GKxF1aj7tBQKd7cX6jMyvGqgcy8zuWMrJpTkFf7HBqP7Fef",
  "key23": "5roV7keVKJzZHiDdVccEKABNFpfpakYHZm6En3Lh8qWjzUkkSBGsRzXZjCmpvFQafXcUKSfbUQWtBZuNq7mpABro",
  "key24": "53LtWioVKN56Bf4Dre5kjADVMBFUpad4EajnLwsk7v7Mui8D3bgLRiiTn6naNc17t66etXcAsRvJzchXCNhQMsR3",
  "key25": "4EpXjfj3J6y111MJcYvoz11NJY31E5tMdKitiBfzQEoSWViP3pD4u5UW3aBYePgNyQYjB2NbuB3668s1kKGKmZ12",
  "key26": "64pGzRwmL218B4ueRa2f29rRCfX9aPGPG5Fomb3sjhmQnkcpkFDYsvoU7AzYGQM9UDZpJrbQdhaXhXgFscMJJCch",
  "key27": "2wxG3RnMg2ZhbFFbYSUUX6dpKhn82f3eDXSzyxQYJBrM9NZirML6YtVYaMAdx9qEMFQX4fmVAM4teZc7AkR6zT2M",
  "key28": "5gF83JzdkngUCBmA1htzfEfv4CSRPvi2CGYp6cyrtgfbnfTFWrvSxTfC4mQLjT5Vy2yXrYeLccCTvFcREBWKLyQk",
  "key29": "2Laj9G5mHVyQZAgbNGq3brTQjK1gZtGC11KAaANm42gGwvvyot5nCuwsusq7djDW4jZhieNWdgqSuzNhsY9YRn13",
  "key30": "45xpwYDvcyzrrK6Nk2JbwoLqtz972Jy4vidnpZpcV7B8FkNG4dnLMgDKAVYvYUwAfvFxNjuhXzcsthcXNHFTH8WD",
  "key31": "FdzKcJrMHrznWfU1kfMEaMLp7pLT6US76NYiSBmjEQPEA9cuztrmk2iK23o4mGk7DAudGs9dCLX8NpdEydwv2Ni",
  "key32": "4ZGbjs4MLZZNQtSpCXaVszERCeBbGriZv8EGdWauqD9Tmi3XAXFqMMfnZ2hDbV728qAhdJhdg4tRFK4ZWByaeX5H",
  "key33": "45YsVZwBDTowSnXsfaK3njTzgFZqwpq69VZJ9sVXA2kX8BbjGdh8BtH2Fuxys9LoLbHPrswLytvvFfJVpegx8ouu",
  "key34": "2pugTA4A39GukEYrgitutbRF9QFbCSa55iLhVLZ4Y4b96x1xJGYzoNfZH7vFDRjd5jLaHenCKvUnPevrQkqXLLsB",
  "key35": "2t4yem6vcfEg68Uni8pGKwHRKNC6XFRFyt7Ghm5XrtESyR98ibyq6uefr9R8uW2UjRPK3norJ3RjDBj1US9Kxiff",
  "key36": "54cwv6bNuq61P6DfwjNnRhiyzinoTbU5tEpMdaDcoJUWfZRXBrWx6ghPBVt6sHwf9HB4M1P2Ko387gEVsqj54ZKp",
  "key37": "4s5ZnSfWPGgZ9S972B4nhcadWofWkixkWvq7CMsN8YPqC8jfp2oTyrDyAnVzz4MfUyjg86GyRjcXbKgyTqGbcTF6",
  "key38": "3XyzMQ4CgSAVD5Rq5m3fnw7b4PotWfRgnmJLc1dj7H2TWFSgFMWUbyYubFLVh5KcxMcmzD7w371VdHKNcX6QSQ3y",
  "key39": "4TK3DfE2S8HFGsFuSpBeERVHz6ta5KWpAWWoUxcek33G3WgDx5mLZvFy9rFPyArfijDiMuqQsznngHsmKspjT2X9",
  "key40": "Ph8mUZo6Dkc1FWsSA1ZKV2mPQLNZBGKHCbMuSVD1fq7GACjkKYj64eZV3guFubEz1dBdLEenQWBCzBm8tHHbZ5c",
  "key41": "3KJMMNHECkHjFvRfdGCYYZCm85dXXmPXdBTGMssNs6GtErRb7G73Q9jtZYLup71Afqv9CL3twamaLXqg5HRWuccc",
  "key42": "4ftgpvURGahSd4GNWrgS9YMuuiEHXFfqLrZvDtPj5XCuy8BcerSYwdqi4c9x7UwPTWjPUbUgMP7H9v2wmWD4F9Wt",
  "key43": "puBvqATajbeevCPfNsytvyDomQM5rsypF3aqX2qjBMoK1S5y8srd3Q2gRHjmEtjBgW1CrQzTJvWrxPc5BNuavd3",
  "key44": "5LBCqcFeXe3c29Cec7nPAgtq8HVvWjgLKGfi7qKVHF9ZKoWUZw1cunXduZaYMqpfTDbhTdLekvofjBZy2chkMhAf",
  "key45": "5JDokP32JvxjmcVAQtC76hgiV61wT5xFVdreGCFXHFAR8CYxzSPgHL3iq7mAL4kpG61uCrZDDk6EyW6CmBkgoAUq",
  "key46": "2YcKLghsffmJzvrr92GgaiTxwqpQJ62tY7N2i9BLygn5RazhdcXqQ9DcMVGS1jCg9DBsFXQdrd5MUBvvHwUfXPtt",
  "key47": "55bnfjmTys6z3esoHfq4HGP8Hp7kMkEBmQpzbNkhtnLB8yjozrGK964H1EfjwKC2MgbsaQCNmEJYcaiiz6Yh2iik"
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
