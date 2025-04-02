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
    "5znbN1htoiMsE1QAztTsRq8tDPU8ywFoWLJAVQcr4BxHime7KRUqUSF59MPgjckXbSrMujers7R3wUoWav1mTfCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cisxDVMqif5qgPx89g412cYc4XZ648WzD2eUr1axgBLAQ3f9P3QrRc4zsXQ6h8QUSywWcKQK3Hcjw8XLP3bvFTX",
  "key1": "2Pw9RkyFjsHveZZGbXWigHiZrLnvA67cVVfb8UYdx9s4yeEBmVsT7KQvovjTiRTJjeA6UXX5TPuJMZ9d45ArkEJx",
  "key2": "4TRpSMP3FhDJPpYjimJFptfjUdcg87mFyJZe8yXDTUjH7UGYb3srApJrBeZkijyVbJbyP9TXzzFRhDuBqgfDogYB",
  "key3": "4Y2taaUNjY334j9FhVSX8DhVqgjsSkbaTSqiRYs3memFDpAxiNZuheZMTe82XHnPJ66bs3ifFDv9BQcjJQjQktgy",
  "key4": "2JFEz7X9aaSKSyGp1B4fNQ6EskSYk1ZEKjGPVpp9usg1JaZhPGGfy1TZzBBuDm8bpA5tK4JzvY41zBBnjjunCHtp",
  "key5": "4NmGRD8YrRhgqvL1adNBEtFS8zuvB7XgeKA3hyjNyVuKgufxsLymin13cdF3kwpVZg1GQirEFMuUkLZDQwVJ6L8V",
  "key6": "2MkwjTj8rn4Ewoy73BHc1TEq66pJTV2oFw16p8yiKy8pa3qfyJXAiV2zCDiUjYHzdvBRoVUHnGFnbLHJQWuxCDgU",
  "key7": "2PK8NNENSCtseZbqdE8Tx73fzCdKjuY11ZBb9BjhHw4xiL3xhxZELeLEC1uxWKGJMqZqWJF1j19Un9hT1ZQzr3Wi",
  "key8": "2R9UfPh1Af6qAJynoaGKQU2mnDavm7cEa85uDWig3biNHTNjWFSr8uVqfMGpz3qwXaDvzCPAb5oZ1fTrJ7YHRvxK",
  "key9": "5KzAQdJri6Zv9267kyR1ddX8tWJos1nz5p5RivRR5UzW2DuVfBkFUYjUcJkH2gBGBJWrKYL5shs5UigbJqGNRrpk",
  "key10": "4s7nM56G9ZuNiokLwNfCTbYQeSEsCTgAdpQr1XnKJZjdJVV6ssqFeu3dgo3MmQDFPXWiys4dL2iHPuH42hpPLJqg",
  "key11": "28REKPWiXJX17QBiLbxuNYAqz3gmq8HvVFALRjL8t19bwN5Avebbb4987dmyyTyD7gaYmN4bm452mb9JTNZBGYzT",
  "key12": "3RgWrYu2xkpbMqns1YoC5WVBZaKw79g8LKtiY79JuWcG5sukr4U4qGwXWrnuehY21Zm2kjKocW7qDvou9vWdowAD",
  "key13": "2oak1931wLNPAHDW9qwALyWEnqF8mSUidWHUFARLeHZKCU4UY3W4XThqB4eGRMnWqzDQqLmg5pACH2nFVmXMTg6Y",
  "key14": "3Kx9kWGdjpGQBBj8qbjYizAhWUVhau5XXHp49Y4ZW2MMvsb8qYHzgauJDxTQsrmRzbb5nTJey53tjowAcwAH7vLa",
  "key15": "DKtbztGFL3bp4sZtmC8XuikKd84UBGBB5pCJ8qX4woWeNvToJFCfrMEUU413Atqjm4mCbtcSfUNaDiniW7AZZzy",
  "key16": "3hFDJsX1jJ2uTXGSUnVDcN1AdwbKksUCmtNZPNH6hzkD8bETSqJ7ntvUksVMmVK3rejctMoZzy9ApEBppA4kef5f",
  "key17": "9aBgz7NCrGz1xhp3xyRzpQNwY5eXMxKFagkJqrXT1mV574vxmuHEf4jdRb55ZYnua5QsgxBnCprDZtpwGsUBE16",
  "key18": "3vr3YUg5Wz56ENWUCJ1ri6pSQVUgJcLMGQSB7zccWDBS1E2PhpkDS4MGA5QrYPsBTNw2a2pd64kezfhbAARiHujp",
  "key19": "3GA1R7izY4pgCmVXx2xX7e2GKToHdKYpYgnuHS8nxyKMHnBKF6hFmtDu9BdP89zbVwGgrzFWKXzR6k1GQgWrB3k2",
  "key20": "38FNmt2XZ7KEs1pMPPyosMbrFw9bfrForfoLZpDpGtuAHvZowoyqDHSjnqvypqo2L6SHjAncKuyPm1iQzQipuYH2",
  "key21": "MfurJ8QdSTjqKsFGtVTLpEzMpA6k5dMN72dsz1qXAza9soSdudBwEeiZAgHBW2pdeGSpVC8jXHFx1GvTBDxupX7",
  "key22": "Q8Wfmd4Fa3MqgKGLGmXR74h7nt5EcdpsTpCh8WaB5TQ9aN9h1bShBtwuQFwmuopQgk5y9ztdeLjEEReQuhEgpEv",
  "key23": "kPj6FNwDKBrcBVEtyaGXiYsrF5E4qaCJqYNQRivDa4JcuFxWywV3cYmYKoyJZVWmNn32ACrd4tpwgnnRioo39FR",
  "key24": "2Tvnjno57w9FjAfuMFwxDmGV7kpKn3onU8LUeEmWkWpF58BZDrXAWMReCDhyAKLCvv7WJxnME51Fv3rCtRD54akr",
  "key25": "csF2AkUMmfopSCAYVm68KAdWzFTvxoDcxfS82medusJsn4ZCLaL5fZpKPYMzr2KFtPhRdud36k3mXcGKE1yjcx7",
  "key26": "4XT5n7tzu32oJPxzT1y6peeh2RtjncPR1k6BFnPpbNA5AJEQeiYqJj4C4kVifB1iuNzUVWbeCSqLjooyqi1MsKF4",
  "key27": "zY4r1aL1933NUQPHnFQZgLBBC1FSaqGgobdigwe4sNk68fwteDePbJ4nMNtT46wAHbTBGXsHaXfFb8tt4XPGXK4",
  "key28": "LuB2Tnn9xYhkywt9TXxJemjY62WCSKNyeNEMsh3VMUtevD1azcAChuBYEwUWRg5RStxoyaKnwKu8y3bPbNjHjgH",
  "key29": "4xU7W8cAFeiu1zy4nhkiMExj7peaG2RAhJA2KZips9t6XmydUiGfNzhfKztAC5CndnquJXyYRHETqJAuK9iJQobp",
  "key30": "3E8ojSxwfpuGqdmmDFeWNR3CVxcrx99k2DTUaVz7w1gUWcQCY4HatYQ2HYaW4pzxYkyCUPyN9DekQm7H2E24pvCg",
  "key31": "5LvBKDaaJjmNwgLtsYVFEvZ1PCHJTfTViRanzcYFKm4KX9U3vSBoHhzVMjKr5sHbnrsUM3LygiruKQpq2ejWeuLX",
  "key32": "3HTkbdzhCZqYgGcCvgHLNX96oM7b2KtkM5BTf3qwrranUCp7xwQXM9GrhSCyMDFfYTp5guzvkucUFjduU2qR93CG",
  "key33": "rbnmdy5MiVh6pzJvn7HXeWnhjuJa8p3EN7LwEVUA6TCDEZ5E365S9UmqU2izfMnVCsWW9cMQjpjwqmStxsjB1qM",
  "key34": "3Ypojbr19RNCf52feHpjk8LQZtMDht5M2Kw5McWUjbkGb15iX2Lot5twSyt7hQ15U8SoPDXoDeDZSVyow9ainXfg",
  "key35": "5qnN9FPhxtWFme1v7VWEVsseGZXXebSv1hizbc1wyGCChuS2kuCPvLtuaqzg4iZkjZBixQjZchssvAfhPHv93hJ5",
  "key36": "32SiMdnTuuraPtqoeViFWypQFXkmyx1jv3R62DzPG7sn9Wpc1QeoiKzLzDA7fRnrNN919As5YHftwWc9hLP1yKoH",
  "key37": "4mfvGGBGajk1fvr5EbuQ32hcz5ARchHAJtupnQfq2AMMdWUFnGsjirp3WBpxsj9W5Zv3rvkxp57AV5HSqK8MRqto"
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
