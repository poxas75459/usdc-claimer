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
    "9v915Wz2cg7DHGcqkinapqHjAZLdPTxcV19KjWn9oUjB75fMCr1csahfEEZjg7XGWaBB36vkFKBKLXEmnf8Vvzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vS2fSEsnkwPPcGodHndD4Q76dnrRBzMVET5GCvHMjWV123DTQundERWsbATA8WBAwXimf6en3CjDS3hUJV2MEii",
  "key1": "2MVMieZy4AR9SAc89N23WHF92DxKrWv1ubGV9wUTgBf7xdkLb9qkDeguhWDErXgHWYRHiyf7AkEnH3wF69ger2wT",
  "key2": "5Q5nZE6o3hSW83pA5vRHaTsUzaEqmhaex2Bz4buJdzMrgCB694FZd5SL7xFPKJjpto9BqRdgE24qawND2cvms1kN",
  "key3": "5ChzQwzECtS4RSkNVE11x6xsszYGPvDGmooeZbaL8Y77XeqiPGVh1Hft7aFubdrPEx4NRzaEyomJGR99WexQPoKM",
  "key4": "2qkfxW8XcezRTjkYRtmFCUAKK9iLzaVr9o9h9yt5bGbM1CkatjUHDcnSkvF9dywqM4mGqm1zJUt4FPJ4ZEAGHze2",
  "key5": "4VvUCncbmmdAj8BcHjNcoAxqL3Dwxg7MsmL46dEhADMPH95aC8hAmj4mMPtHBVS5YcyQF4e3AY6c4mXiHCFMVZyY",
  "key6": "3mjJzwMsaEq1sRg8sPdeJQk8qdAyW8ALTbReHX9g246bhggbeSVWrfEjYGABygHufu2qTp4VgxbZiyWi1gQvgKET",
  "key7": "2T7LPAbXsvv7X6XPLX8S7nDE8VT7qk6DX5z1pko8ezVhWG5NsUSEL4kT7VEiaMq5LpAPbzy6WyFndwJLKHnqoVPB",
  "key8": "3mPCWKDXHTnzvXQTuAagErKjSzc7Lo3J8KqEonyLBw5Ru7RReSquqSaeNh2sdiQ6GJq1heSM6HitiiK7M6wndkBx",
  "key9": "5uSARfEysVznLWYGnq7uVj2aEVg8dtG85AkzWnR3FMdHjiQed5jYSYJuMa79JjGR3PScjvbZanzqoVwfCUxNhCe2",
  "key10": "2jgwoz9es3HPV5g732ME6AoZbzAxKxyg77Ho4EBQ4pdBa9ASkfKrxLMi5KzndF2q27WmRvj5zKUofT4d2v1TTVHG",
  "key11": "7nrWAMy8NoepdAbheVJz5j6Ry4jBcTHXv5QEcMRCrAWM9XxU5dVhZQyeLKgkAMbPKfK6t9qsfPQkm14LoaHKWqQ",
  "key12": "31mZjYY1HbkoQ41RvbLdtJM8gCMnrHSTWAZALCUHqvtcsbKVYzJ52wh5abcXb3NG3Uww1T5usC4exypFs6HmWQx9",
  "key13": "3KxmtrJrSr2CzL8zd5e9Mt3YYuHH7iBBB9L9Y9KhZyuHXM7PpBgCi9YoGSBGdU32hZwzDPV7JU6XpPNsTdx21gmV",
  "key14": "2HJuaTdYKhgMFFGhBMn3J5XDyyoB2rTYveZUeGJdi7U7vY8SoJJbV9bWrgdwz5GSjSAC4xChZDFF7L22gWHd59eP",
  "key15": "47quSskFNeQzdDiM2MV7VJaZbNXu7XGQ6xAgQXZdnZAutcm7SHv5Zzmbfrs7bgNkBq1ZZuykYJrZaTcwZh4zRf7j",
  "key16": "4r5d2uFxX3GEcFHZPK6ZcafD7Hdcthd1yan8rRtBP9fSaCVkBNt4ZhFRKKzAxSk2fKNmSDbpbWWpGFe3aFa5iT41",
  "key17": "482R7WB4NSaTcsGgmC8M54kFBJkgqTiPMReS9xiNjWqkdzEAuiR66VfmJDyrBQh3kHXimrN7oMaynYWLogG9T5AR",
  "key18": "3rmHpzPJ4fHxHr3f6YCAKhXd8jmy1z1J3HySno2HEssyxiQdbxazGyoQME9AmWQm3LAtfSeAjeUpDFR4BpDpoGXv",
  "key19": "5cgJJedG8YtnquRtsvxaBNyFM8aBHJTWJir1dHB7RReSF21tEh75v3aRSPECQ5YPKKNAbjHfLU3eCvJp6NCsiJ5t",
  "key20": "qyAoVyya8m8kZC5BfrWymZoGt6Bprmyd83nwoTRAfQwtCCh4YTpfG5oFZkV1xnfe29eny49AMYvMj6dLrYNpefw",
  "key21": "2qzDYY7AyeRPgt23F5DY3Pf2DwZZmcgFZprPWyYebemWkvjt33Kk6QQ5uvyH4RLox6SFadyxi4GMW89wML2qE2yC",
  "key22": "2YKb4yZLdmsKCWwDuzmDqPDRdh2CFS4ufWNz4zignAeSxvUG9vSfQQxxtqK9DbCVKUSQpyC7rq2VgCHPeByomhFD",
  "key23": "2njyLdNxxBiN6thr6BDWf7W1bSCTrUJS1TEYvwK1L4Q7J14HXaGCgX7uw7EztbTZxQdX1ULXu6JA6V7Ye9o7PGXs",
  "key24": "4WGdc4yhG2SMkGwPeB4ZbXNwCu9JxwVkUreBZSytz6fgUdnFrj293hJymK4HGtwNRak4McFHvMhfsoz4Pb3eJYAz",
  "key25": "4uSF5AH8AbQpUANqURWPKdTVRycgmhH9op7kxQBx6Lxk91mFDUpZMYgenB2bkBozVHEbVQNUnJmm9k5XHHUPLeNr",
  "key26": "46pzVNfroi4Ntnw8MmWgg2kHxwrJXETL4op9jHKVC7Em66pcpx5izLUBanogBL5SDD9BJohTFXnVFDuRFFjLiU1B",
  "key27": "7Pw87BYTp1Q8QyH4oUZbdr5XVFC8i5Q48TJPL67jXS6Wks2D4Y3Ns8YRaGokzoGMzpaNYYKDxrLHvtr6zJhBHC1",
  "key28": "2k3yqppPfjFAriYvNAJNFKitiNxh8eXvNr8mSsUU1AJvwXpGMeVhUKuzWJ9NpwzwBxb9dSmYyA6MzMi3AZqJkzLv",
  "key29": "51cjYF9rXkWryKqRnC52DWUeMee7xRmEuCM4BV5evHAgPk2UzkmaqfWHBcMG8g4cDGbpSY1FMHeWsN4JBPeLRL3R",
  "key30": "34BgEbmNnehDmjatStXwR6g8abdga8TjE7PbgvPsyPA7nf698JRrjLKX9LZFL3AXbWLAt8Avnca3Pm9UYGqso7FA",
  "key31": "4QmnmdyjNmhtwcCENuMaLpGsCC6zB4ZMxuozeQjTuzKjHNT33HpUqapyZWJ89TpnWkeKrUFVyGvRLy4ARJRjk1bh",
  "key32": "udXQBVukFVHrEjqnf9gzPz8BALbm6XetQkPuNFCYzkuVMQEZuSsFMBU9SNeJZJ4i8ib7XXy9xHbAKLuVNNyU1db",
  "key33": "32UBHNSZMYD5eA5gYhFCNzb5LNShUtuSmwVajgsXyk661nQDWvAc9u4rsxM7HUeNDstbVRwuMftvp78GtX1g2Xgc",
  "key34": "gyaDL3124LKGK4awAzqaTYnbWvANdakGpeGiiZyv7z7QDH5MH3pEKCjYGfLY7ckC8f3mghGcQ5CXVktey26uxj1",
  "key35": "AePUepmRyhwCv81YgV5cY3GNm3JXezqf1kgbvHwQv8a7F9svvzJiviqq2Q43XnBDRytuMtpbSz5ehJC4G7HgPpJ",
  "key36": "iVso3t7s5gBxyF2GSyj7fw1uYe6jWeDzGJhmKy7Uef1dMkkN44wEEnVCSZqkNzcykE1bkyXdP8UQsCyTKjiZHjh",
  "key37": "5y6TCZYfC5q1ivArNP4Z9NgKHMLFVDXd3crt64NqubQ745aputigaeeMoLDaUPLY8SWBnmgPGEPiN53ngrEWV4SE",
  "key38": "4zDyYVtGZ3kQX3pwmPt9jkD8WEHh7jCVNuKXvMDpTSPD8r4coVLRfWqXkzmTC62nkg2XMhdTb1Fg1E4KaKXnVzkb",
  "key39": "3ZEQs1NGihEDFjC3h3fq2RaAgJ6fbLXgPsMiQ4PtEQDdhBHRbbPp4Lfshzpu9eMvFd42Ei9X77iPv3cok3dHTCfi",
  "key40": "3cRpnmiKh4KnC1DDeK82dSy6rXziL1XZFBHmHTJWgykeBSdoR3TXfxC5bbzZBV1KfqMECdPtJ1RkJAk1jbxGUaAM",
  "key41": "5RqaBJAJ9gv8BE1EFxjNg18MwKBwsRCKboK1RLhUUxXhoThUL4VcnpUCgY3HgT195Vy7BEYdeF7UxGB1DHKwqmJX",
  "key42": "pf7HEisJZQkt8ryftUei3yGrb25F39b7qNRpnFubbmbA7PcE3yyJeDPrHWDqYQbY1BggDmT8mWrwzHMPzCEYsCa"
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
