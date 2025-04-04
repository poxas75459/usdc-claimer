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
    "3Pi7vUNfv41LhHz9gACkQJ8bxVvHp3H1ZEnTzgLkgkuRibn2v3LJ7xwJMcmcg8ks2jbvBvuMsH5Lf9CyU4cUrTLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zfhDTmYbZ17PruURVyAMFpe4ncidWPP9tqEdhQ8CV2My7bxB4kxPXuC6E44sJ9XUyk8L8eywvz6owUFZjNSbrMT",
  "key1": "3a43g6LwDRUwtzzzhPtLTSwiD5htjtb4uu9DGuRXJptYAhvqYz3VgciPdg7bo73EnczkG1ZzLtxVQTm65pNKwsha",
  "key2": "5uvtyW3BD5XiJQa86mKY3MYiTYqF3hfGHVZJHjXKsUWg4YnUCs1p5PFaNFwFaypDYqXmDC7eUBfGYKACTaGbkSK8",
  "key3": "3eC4NW1DqvgvgFibYa6gPgNS6ieJXFRaLWVyeWujqGMU92Buz1NrnJ4ZWzarPRCxHj3anPrMeWBwSEVzsnPzuo2u",
  "key4": "31YGWss34xnrT7dXZ1SjZmTdpgYqhRAX3og8iKzXXYjaavRaho7TdkTpi326UPjhWUxWJdruViTisxaJanDzKr2G",
  "key5": "3SuPwopYTS3Z7KYRZjbpfMZj6MTLx1KZXxrm98mc5ryVUYWK8Vc7S4gD516W2wRcUiQabkE8GNqmWBSBdJ3ix35x",
  "key6": "3nS28CvpE8a4nb7dXA3X6dfiBQBKaZvrAY7sBY5BD4gAgBV8sqJ5q1gYKtn6vWs7QLKtchb2cJBj59FmzCfsNMSW",
  "key7": "56m8YBg63NkgtUKYAAdFSDGpVpxASBdjDXCgvLn1mEF7xcBQ3Bc6hQLrDmAJEK7S1xveWrD5uj3vLnTTP6BjNTxz",
  "key8": "2rGHq7HBnfFjzUqdM5sthUaoVUPeW5BcxHSecut8BZUZzXzH6r156wKDYjA3zXUbQaC8P6cadzU8zT1LYAoSWwod",
  "key9": "2snkdR7ikT5EwjU9Bpn1LsNXsSjHx2fM2WE3mfiLHGRydfYYJxUCEmRDh7BL9cb4egHP5udgiWXu98x1mSEsXzt8",
  "key10": "2rWH2mmR5tqsKPq1AeQQxvhG5rJyo2mKNathWhbyRKGDJrKAPNeiMMdEAJ5ggP5wpaQ32ahQ5VMmBZQMgqviAURW",
  "key11": "4fTuhgFzjuMzsS6xARFVrDA4rsn74f2Y26BSv2xLK4UH5zDtqcqfyHzVRSoZGjJzczCkeDWN3Pe9AzEChbVy2oDH",
  "key12": "4xTWATLrkhecegPMbWrArDvxsMgU9KLTemeeqB5SzqPFm7edFRjXLGDDDSCFEi2rNWREMUszL3VY3ZF8uanQqUnK",
  "key13": "2GGBjpHDbqMCzDiu1xSmJgjaVdpst7nQDiW8J5yaoiYEQAb4x6xUAaHJhQhp4HyrK3nLEJTyiqzxpkt8dXXQJQWx",
  "key14": "357Xjf51naXUfiSu6wUiRSv67fCy275Cfv8z5gx8VY3P883rHaJ5LgNESsrowtEfVsKZRH5q9Lnen8Ps7Dr44tkX",
  "key15": "21YGXAtUUUeV5HP3MdDfKJma4Emnc65XcuNVeJGzZkjjtWZHgfK8YHEDuo5XrmDeUWeYn38vCYUqgSMzCeiXukuN",
  "key16": "2FVUXEkoczJj1knX1LasjTGQd5AVNvJLvCwUe4DfKy8uNBfdn7RJqytWuJRjNMT9nbLCqRM7CyVyRWE4RDSbu4zg",
  "key17": "5jdNdSJZLJgRzKXXcm3e8bQbdUozq2nkrVwz6td9bmCiPRMBwJDU9bYgTbsmz8RWJaF7GBfVAUFpsY31juW8aQsK",
  "key18": "4Jr8yLuWNGvis5kYW1BEhtf89znvKxZ1df2pbETk8j6aNkRTkM1R4q7ddgL7AJw6RgdGaJ19Z9ENPt9utmUb5bE3",
  "key19": "2BEsrbwdE8iGSQxv1ihy7a5axRw8xbNibkpvuEJooDQRYyUWWTmkcs4Hs5YLhuuTbT2quysrJ68hVPdaCxwem7yn",
  "key20": "TsbXsb7st2NTmSYFHbyusp8deMHKoMVAE85FamRomnz6xbXYPbxcdWEJcrhvRRWo8T4tmJwtL16CM24D6CWqtYo",
  "key21": "5uQDv1W8dGoYev27twQJQakHFfopE5FswZbnHvo9hELuAps5MpAhtp4hBWBqC17qeWVhnF1YNzcATq4TnQhaJxdR",
  "key22": "3cBkXxqzztd3CjHocjtW9H6sf2woK55NQeiHWXWVBm5rR62QwgVDXrghnaQuiEs9Tv3qot4B1t59UaMruymsafiV",
  "key23": "sREDZFp53buWCUR5qztQy2RZmVuZvfbKbmpZBKwZU51i2Z8o9LdTUjxYVUFANwvCrUb8tYmLSTTFX46Zfhbp9Kx",
  "key24": "2tRjM7vFjvCB97oyjMyG8nMgaU7LjvKYejEDS1NtqZ9nRYrK9p9LV6AhVVdot6sZbk2L6QwYyDSCNck3hUut8onL",
  "key25": "3AR4SGNPud82ajVby9HmvwDoy1GiJZ7t9CLgMSvWfVkGDdB9HGE6iYv39vcZfh5YpvzrJ5iuGZWyvQP9m5YVvGqP",
  "key26": "4pHbWHQGNs5fsat4KW2Tkytj8HGwEZv4cDthPKVpr9jCXntwhq23sYX8H919L8swh3JyVRgCKhPz3hKV9Miffevk",
  "key27": "61eF3tCZbMJvhmaCNHDWmVQT7FUqb7WLjXDznRjEbhC2onU6sSC1vBkH1oC2TchccSfx1QEyqk4z2rVPxGrz3Hhu",
  "key28": "3uCn6E4t6arYr6SKLxo2oYdde112PKGzLTJ44A2VuQYPLV8JgofsPHQAASZ5BiSfjNSfvhu86gfuzNjzQTajv57F",
  "key29": "FJgYHXdQY5SdBide3K7tD8DWZ7KMRhwfYXXtyvBnufGxRpbHFrZhueFmmxWaWEQB2NhdhEB36Vi8pUauZs56596",
  "key30": "3f1d9D532fzsjMQPCZLG16ivgF8Vft6dJq78ux8zWqtTesYQwknVAcDDoVAeNsTHV8CFWwBdhRZXwGpWh4NMW4bK",
  "key31": "2s9W2mcX2MCdDWhJjvqmstL2iZMta4MadysVBtP7qJGp5R5TTvo61Gtmytsdp3i8TS6YJm4eRLKJNLFQtYtJuXpy",
  "key32": "3oyFDFv54mkCG1Ep798x6cCPLzxCXMxpuwGVkN924GtG1mGLMBZ752SwNTBs1YCjb1o84mMJ9489MacDXw4WjjYN",
  "key33": "56PjLqPaQ1EkfLWeR3EHwo8nL7iCdB6RQc2d3a2DF8EQAAT8hrx6SX59HedkisjT93MUcNNLVJm5j11fbeFHCWKa",
  "key34": "4NPK4z4utnLmmdrsGG6jgRerUBTsTESapFPgg24Qf9cttZ2BYqCgLj2ZjeJwUvrW6V4PCvK2H8XbjyRxQbuiGjGc",
  "key35": "518eFq6rvH3wsaAsPHEX1z1LcXF7swUT7KAsCDtLQ2R5qYoCggYiNYXrqUYsSRraL74i1KEzx4cKctpDpT1DWebh",
  "key36": "32WagFUV8Hz1k6gisRQeuFj6vR6inqSUt2XWzQ8FAAXva3hH1dm4ywYDXcAVJjnv988wVpEs8ybbBXNL9Au93zC9",
  "key37": "vCY1FrmjYGYazGprg4JoQmToGZYJTUt7THUvCg3EPpGq94kyYjNC8htNcfsmHTXriQ5ahx7hu3V45tc51VARQ3Y",
  "key38": "5F57n6yzTMvWWfCs8X2Si2RLfRQNAoG24DwS38rFvipW93LgxwXGynmnmu9EUj6aZywDB4oekGRhwzdFNz9XmpUH",
  "key39": "LTLvu96RmLF6Sa6Fe8jJixo6FRYdnW68VwMFTj9f1fqzVJc2eXXfXGKRVfxkFGbmndRFaXRfMYDWRfUhQhV43aU",
  "key40": "4KjqkH4VbrkQr6DbnDwV7f47nAR96Q1pzeHUbm2Q3Ehv29So7aebvmF1NSjGZSNKfq86VMDvGztZXH46xZHmHsoq",
  "key41": "4aUWgwzbXyxsK9FUvXpG1emQhch5GASRq3jWqnhEEeE7J7d9ohSJoaKvSCvnA5C2aS7MemUNTg773m7JACzCZ2HM",
  "key42": "Xa9grS4xG4BUgQiEqFKDiSFh1NJoSk6nFqQ2uhXgBiDiF6qVZ4mdJwb48P926xCEevFc7xW1xNCjuVpTh5H8gtN",
  "key43": "4VP1Fne8AkxwvDiBUNCPtLKvsmeKRERU4RTKp2hxjB7DdVLs4n7RAZQ6TPZ7Q6f6Zw3XQBJb75Ern6vixwhZxqRC",
  "key44": "3jNtLHRxcPiYRW4GHF3kr6aYb3t8qhfmZSpC2RByyzmdr6GCYJQQr98xk37jA2XExdziV7noN2xWPvh8Rc97k6cE",
  "key45": "3L2hNLHXWSYF8g4emQj8MtrUF577GRgD8zj6837jLLoCvRNHHbvgiGRxAh2odZ9aYSq1Bu8VAcJwkV2jTNGUfo26",
  "key46": "4yphLPvmNxkz6P1Udek92kSxg51ivL4TuTm5DsJJnW55X8xcXiMz9t6PLGHSsYxtsokqaerg5puVjQt7RB15WuTV",
  "key47": "3VVAqZGAizKpCGWpjHRWDfcDhuumoqjBnaqWYXboeVNtGQC984VjdDX4SoPYLhhY89jySYocXKY7W6jauDqLeauL",
  "key48": "2qCjhJ2m2xBKCCAemunC2hC9MdcdJiYBHvvKdEzBHpL2LuPEj9xnmPU33S4P8nWzxfbr4UPHbWSck4W7TyyrimGL",
  "key49": "59TmwJik6B8scvA927jZJxixSMmHu3mUsspz9VcZgrwAwkehU7MZ7Y8JD42V3GdFXqxF1UCZYcJQQoM1Cf3fTevQ"
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
