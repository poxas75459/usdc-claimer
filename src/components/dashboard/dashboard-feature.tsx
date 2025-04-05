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
    "41qXwE4xwy4gZNDa1EPGtng5YvLYmyEkFWjpfcQyGkto9dCgmEbzzwv8S8HPqW1AP7PLnvooZxTCL69YKXBwSTNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fpQeMRrczYocEsb2iGdQVWsFA4215WNNJgoWkoKT3QensUo8sZz8MZ4ZQzW9r4tmWqhk8rxCZ1ChSDjrSX5sVcy",
  "key1": "3BVWmCkeWb2a7jb8VKE3UvuDrG37W5dH9TPV7Fni7WHSPgLXGAwA6FzB7SbSDoEyZLLM7XioKBkStzZP2wBYhFZd",
  "key2": "5ZGrHXYt4jkjiA693W8TbjfqQh7yQsWMWiWNWTwhZCTmy2aXsbETg5F5V1uorGTpoXBa93aJCL5PE9F3MTFr9sX3",
  "key3": "3pri3RjomSqFP7Y4H2FYuf6c5nZxaPVhib1KFmENCEcUdPgaSRBBkoXL7rwMzBxxnF4PmqZ2XGHjdfdUMdrkyG8n",
  "key4": "34brornevX17GnxDTqd28TKAgHzeJY4ZNNJgJjxEq9RFvKSHNJgaRurndLy4akpdZTqc85fTgnUvHZTEU8qWosYi",
  "key5": "5QDX1uCgZC8HpToyQ9aspEUX8AksFUro42LXbuG2azWVziiJwKamRak7ii2Tj59RPUob8oA1Wh13j4DfDBuuNL1S",
  "key6": "37N63STKB5Sk6Q37TuaNKYgNdLyFrHt6TtCCxmfz5AC3cofjU3gRsDHp58JQizaY6DJo2m6pDDo9LYLbQNuRSvWW",
  "key7": "5wMGgimjd2q9RkykFGPNZ6jv1iohFeTQy7UFo8RPvNW3Q4p7DW8NtaeDnSo1DnGtXvAd1JXiXuvLUzxwuxpAeiQN",
  "key8": "3XCieYe6hpYzFJ4emv19vK3rwcKdMQRRwRnpaQjpnzc78K9EXf8wPpiRJEiPEgBwfPGnL7u7KyuNQvxNbQRPqDGn",
  "key9": "3stw98U4aEbubyzQ3Ponuwj2XzoEGAuEzZYSGLcGF8gcLeSaqYVReSHiVqZZRr2wMR7E1Q8VwBP1cvXUKbvLyoeJ",
  "key10": "2yp2weBFfh1R1VC713gViyBMoYkzrQApGgdALaRYDWL7NvGZ1iz4AsCCAhtEduZVWLjAJ2JUbJNooGCzV4B7QrVt",
  "key11": "5kEJ3exjHMVp5ZMtLQAHADmpTTRPzx6zf52LPvCN55paMpspyQHwscKpNdP4BuQnPUkzzMgF59jciLtiDxY4nwvP",
  "key12": "36cyREe9dyDhfg1xjE4CQfPdCGhutjH1Wv6uQh2gqRusAoCEDtyEJYngfjHTzMWk4HpbSHwA4sxti6iCmnTW9VVz",
  "key13": "ew9LfqTjmtYSENrAwtgph1iFLuvSHmEtEqsTnFVsiDsby4MKnjKbV39ozakJhi1vo834PVjj2YgPgQ97TFmC3ut",
  "key14": "4x95zL334HK26AE7cARFv8dUtGQycpTLgykG17oPtr3Wwup5837VZHm4P2AkfHt3vk8PxpDv8CFPzAqF6jnozYKV",
  "key15": "5NQ1cP4GpvhtNuM4sR2xtJxZ6L761ij3nTFFGBwRRjtmkBLS6NeNHUQ3dHc3c3gdCAC3SC6fyAhvkHyaFHngq8L9",
  "key16": "2WhCH8HDUKpRxZqRLmzncQhCQ88YW66cGqb4xEkVVysd3uLJgxtdoZSSyzsksiMdggWnjLFd1w7WJmwwZ7LDKAL5",
  "key17": "33Gy7w9o9fn2VAhNimVubocjvn8qZHYfhHcPA8jr3TvsnYc2vgzhZ6xDpyk5KXHZyfVTvwQ137MfLan3hfBuZBwJ",
  "key18": "3keBmnXPkmegVyPUtqStHauAx1qaAxrefKYDAfXFbh5sUcDuYUp64sMU8AcYszwDwwhj2NTcifMpZPRmvveQtahm",
  "key19": "2pMu5RaRwxMyUDmcHiQJ7EtsUkSZCiptaQwU5rnHtsR5eddTzrio8gfDiHH4JoBri1mbBK2nw8fed15osLLPxEzr",
  "key20": "5hES5LVpLYq3rZaGPFu9sNLbk3SiH8KSWjvFVVsk4xUQxYSd6rEfMwFeTzG9Zx2fKBHWbFpim3YREQqTLcdf3cvW",
  "key21": "LqNNwvTR8rvENapJePJC7azFdxQik42ZgBt6m1NrKKisSULBPg2myWUEJD471Nrpo5nkHsWcMJj7rtZrLGAqqC8",
  "key22": "65ugwRBnEfKmsiW9UUk1CQwqq8Ejii1ZLHpqLyQxnrXNt8Qv23mREZGom7bTNxSwxcWLWScS4TPqTRSHbYhUm4nU",
  "key23": "3MeKk2HDizMx4qXLFJ17oC7QhbzvHiJvYPAchighRYmWKsenwAoqRXsv7CFjRmRDscmvDa31FuQD3VT8ivpG1j1o",
  "key24": "65LKj7nsUKKmNczTsptYX1UaTGeTDPPMZu4UcuG1zBytNPr7vJxk9nmh2zDDBzT3jMfZCmJCuAaVoP8RwansMwjb",
  "key25": "5JmYc9m8uRvEP9JPxLXLUkL9amifAzJrqXKKd2QCKyzFyjYrZEmMx63DDmmcBc4TETxxdhHqq8h2LAf114aCHLV7",
  "key26": "2z3hhxT7VhSsWu8bPjydZsoZUAwem9UWZQFxUma4iWhRvo4AvWLMV455k65oL4wrP7UjEvRztACVUTQKEuCXdUwb",
  "key27": "3jqXtaxvFsrFdexCL7Fg3HNTm4WSGeN8RLtGEVA3j2WRv9sY14T8spLS71RUBo6zNrVfnGU3hwbEwYqi9HCindQh",
  "key28": "2oNC2RiMkwo3K7rYVsVorxai48uFaa3UebWSDZDbWezbeHgBcfEuQs6v8QHJctB86BfnY5igD9po2no7Su2NYKNF",
  "key29": "5mrf9dT7mvQhctQzQdccgJidpkbyDFcSrqM2Yb4TyiqaouQFmAXyo2w8S6GXj4PPjzD9uCBUx6Fq7hN2FwAN5FHn",
  "key30": "c8rivV7bnzD3dVYumzXRBHknUqeu1ovvddbn72kbti6Y1VCwa2VXkLrpAvZonnrFr4oprojtCMBdS84Ytp4icNm",
  "key31": "TedyzgBctX7Vm7ebU5T3iwTo6MGCTcfTTUh17ntvkuqza79X3ss2gzYFYjCBbJkaxWwLvuSJYDuS37coGKjFAbR",
  "key32": "5jdPc7CbKf8xcDUzRJdjemXzEherghfkzLqx6QFBbHUtLMjpuf24tKDUMyMp66kt46b9VZTdqPzzmRZKR7ddRQM9",
  "key33": "2es6tCpCimfrdbrGb1aTigjtTXAWHnKDcxit51jMJViaXbhC3g2EoTj8ToozGyiHLCjoYfJoMyhpTdnjjNgYqkSX",
  "key34": "4nUVJ8WnrhJ2Ghhq1nNebPfkBkAgY1tYnScRfrRVEmmmFuDZtstyKP7sNPUJQdLS4XaPXEif9rdjh3JyVvybfn1M",
  "key35": "2ow3abqEj8ZtLU54MEFMcf9mzXCtrypULwjjxAqyAVgPnrqjD8FhH9CpPB39jtbaBFB13vyL7tUYS25nrqe19Pn",
  "key36": "469hwKZbgb8WP7xHwnpRZTnFKZNijUmUGd9jho3E9u2qkjGQ7kHXMsJw4Rg9LgzH9B7Xsjwqavn3QtXdE6Vb32WD",
  "key37": "26hx7JqEbRWpzxBTsSzcSPVkqwkSeJ47DAZNYFnaZh5Me8eBa8BbMqnptZmXh8DxBc1wS5r2iQqRCLANDjuPT4H5",
  "key38": "3aQTF8j9nswDiX9L9xb2zfuhzp4AMK2snvqxAonVfygAcR3L7eDHXN32zLh44Unj151rviptgJvGhrWHM3kiawor",
  "key39": "3WxRnSuydLEbSwtwB2zSKox7d3WpFXJo7d1eH3NvBH9mBz7LL3R899arFSLV3EnqyBGaGudyU9uxc3zXSc1XcktT",
  "key40": "5FbsMeA9uCU4ZSbZH5ujedNPsKqJgNq8E39qeug6iwmxTumNhYHF97Vu83iAk9pest26pp72u4598GajZwZbWTQa",
  "key41": "4NB9Vn3r8j9ydUNTQ5rmxnGfKGxAgf4bbXBn9cdpNbbGo9bLmUg4tBEua8ek9Mr3169NYyrXfmyRi5dGDw2BRAYF",
  "key42": "5bt54hqrPgfYUd7wcnkq45x6JPzNpT5yKPcRGHxfuaux6Tw4Rqu6xh5SBtFPDuACtpnCUxyeYtkVoky2HdTTAC9W",
  "key43": "3iixqFTiX87dN5rCvfZzajn4R3hJUpKfGbR6J9SvbDnWGLA9ugFFMb1SzCtcURoKRdmb5CEGfMeEtHwi3s6wMmzW",
  "key44": "5iVzu9egRKP51pur4TGk4rDfoVT29iAC5iBvYjE6vP25LyEUPtsRLVYpnnRPGqUnNTtHsGkWyi7ZLWNzRJB8x9Kj",
  "key45": "2jHmcVXKWdxUgfzb6UjBg6a8HUvauyptJcEn7EH4Qpm88ts5WLfJJoA2Bj6vgrzq2amJ46xsCvifhhUUgbnuwNRB",
  "key46": "5ixyBXnF5ZZuDBUaCXdCJiwwvaYPigECWiGH1Kppyvnyo3i9iE8UeVBJJK1eyM13WAJwaVsXoYrTAZ8GUoSMrR5V",
  "key47": "3NVzQRH1sRbLaTb1UC4uGGGfxc6oM1nhE4duBXk3VvWJ1PEDhBdHJkDqvvCUcVDbGTfVb2bAbttiTPHHVYQi96Ce"
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
