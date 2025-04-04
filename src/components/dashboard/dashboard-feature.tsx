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
    "4St5m38vekHoR1Fza8PrfP6s1GtCHCR5HWzpJFmUkF6yqi2eVx1ex3Mo4DrPjJqmNKjGb4q86pkkoiH7i7aCKPqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMW1gsBsdcAD8e92juvZqJw5p8J18RansKy3uR3ij3DRyTgfoTxJmh8TPY5wTd2j6pzcA4scCRuQjWkfvrXeQ3w",
  "key1": "4KN6CtTTZFqL5xNFSxGWm6kHVccxE8Hs5ZLVmFV8MYjBJ4sSpBzjr3h1FQwe97RdGF6G4CqcUVrVKcdY7knJMCuk",
  "key2": "5nnvT8B4a1bQkq9SMsBJhygm1QV1Pd9xu3ZspZ53x54cVrQjFuTw6EjAmjNGRVqow75wX9eBgPPU2d6XSJUV3sis",
  "key3": "5kr12fnN7b17ZrcAh13uohFb8ChWzLDv61RJ969WENVvViyky8hsPEMho3xiVuVpvbf29DnooQ66qDM8fTAy4Mxy",
  "key4": "bpMRi9WeLhudjUkKr4FRqEcW7hiM91NoccmNjvvjF33gC2ycvPaMZQoxzBgyYEVd1jpEdxEc3rAK8GAhWDKqudF",
  "key5": "5Pj94Lgu6cs6JviY4JL5t7SXQNokE1g6CrCENR1T4eQFgmooun3xSY4Bwub6hw1ejay7kaprFp2WNLVjz24zwctC",
  "key6": "5mLZyCwL19WLYxAGLty8cU5EzYhkECQDtc4myvKjJouuzCbW4dmTrnhNNWFWmy7nPDZrNqrnUtAXoKCBnrv2y3MP",
  "key7": "3ketjUA1cHBP4FT9dMbfJ8kAF2a1Dsj2Npigct4zNtw629F25dEMqe7W1pphkHBy9acqV2qbyw4WQYzBuLvGpXby",
  "key8": "5K2GF3pVNkkSFcsF5ui4rV8o9x8LoT1HYGhehSVexb5UWNVxGkqtkQfA517asFGXywBCaMmhbSfstz8qAN2pwWZv",
  "key9": "mcvo1jZgSD4d23gCsBDzpenPdF1tnyG3oRCsWWLcFq9ZbEvwUKZ2ikcA8GbBWqggg4XrtvXQGAAGdGRo53GT8zP",
  "key10": "38J9AbUozDvzXtcPCCW2JFtq86pPZD5cNM13QGLSZcrTTqz2VAnxhsn9ziYjoxfoiRZxTfzmKTiLhevW1KKpFrSt",
  "key11": "3igqWc91APxZCBYDbXLQ7wKG9RRZT3BVHv1XKCUPL1gZunuDok2FVDptr11asnCCtHMbEpYw3yD6MdZDqUP1YwNT",
  "key12": "5W37DpXsXAdEUu3mjS6Uhp2XHjGWMDGCYeM9TW7hqTdW7xhwRPmKsatt4we1ppBVDAuUw9gr6S1h9zQ9smHkS2Nb",
  "key13": "49kwbdVmFPebE6uCkkc2L7HN7eWHRD5qiwzuEHdEi8vRxQCdmiTz4ZgP5oSFt61WLUq9V8qki5UeBcqbyH8tXojZ",
  "key14": "43UcWGq34YVWqEimsSM63uaLDgMZ9xukpRtrTmPEFDHUNYR5GK1RSrbtADrQHqBgNvgatTZMusNvxDsRyAaHkdjG",
  "key15": "4tCboMp4dQ3LiCor2Ph2t2gzeEMneMfJTd4DnKj2wGUcYVRrqiXixP7E49fG2VpG1ooiv8UnngUofumdePPhGpZy",
  "key16": "3a7mnr28TmF9iWCw3ZUaxriRtDRi9mGL4JKtS1mMzezH42HMpX3CV2TSGAva5F1EXZzS2h3ZjwTS4BvWeueo1bmQ",
  "key17": "4iD4ztbpYZUAwVcjF334KpayEUFsNBpd1zgp8snPUPx3NbRakZN6mddVCBBUXCRPe2GgX5rFwx4enWanJm8Xoo6i",
  "key18": "MSUJ9gSREtXarVeXaD7767DXTV4saAtBzbPwJto3Nz8jkXgiCbb1ruPwCQuaGxaZpGDKCDoqAmATReuUxw3kAdr",
  "key19": "2bftpeKsiwp7qKqgcQP3Mz4HwAwS6GaV9gZZpYRceoovbPUZAJWPu4DHXvqoZFinmbMRpTqNtCRiVShfS4zQQ7Gx",
  "key20": "5JBpg9iqJQRteWyU8GjNZMzCmesgMdaCAN3g7Qb6zmsSgyB5st7kUBWZ51Wcu3g46pkpN253SWqba14jsQeWwhE4",
  "key21": "3Nem7S5vRKdtasAaX1VQeWr1b9f93GhL7Ed5DGShqRYVd8E66P2uJvrY3w74HFFbFwcK1agvURXZ7wEzN7dAJBoR",
  "key22": "2uFLydfEvuZb4WsZyx78R4CiZmeHpejpFrRidrrzxr9McixEc4YiWLkjXcmccFJ4nYMY9HWgdXvmnVt7Yhgzu96t",
  "key23": "pDJnBoFZtbh7CBT1TwKv8x3gQazpqjUtYQ5QEAW4u3fDx9YZcU5zovCaTpBUXKr8j5XG6qdHQvu4pYpt8hfaEJX",
  "key24": "t7N1WkGrSGpzDhUV3rsCj3V6bDXNGnrBAVpcnR1vm3gMwWMWnWSgrGNBqVeKrovUZgDUVQRt8GwHGyBtKGL6eta",
  "key25": "64j68nzkABRBzf6w1hwCD1LmtQRU5vKmT3UEpcmYz2KbAn8bXdsDoxPRpnKqPXw17h2dzTkYAsoaPQg1uyBnhUAt",
  "key26": "5tMkU46iEqmvUBwGNT3xA9hs4Yki28nHAuoxgPMX48fkCEijBS7buBVoTeW25j4WMdDt2uDZRbms1tRMh1qNJUbe",
  "key27": "49psMsVfiL5WYQhMGvpXfEMHNTf5srqS61BvtzsXwPZZvBzs3LyAbx42SahUmr5q8a1ugRz56XCTQ2J7ae76wHA",
  "key28": "5AqHQjadwAVdAUZW15F2frHUBUMcnR2sAkZt8HKyatYSuJQBR5BundTiVevmnnPyKuy46AUSVm3wxnA8x1L4dSjD",
  "key29": "2V5gk4QE9NATPh3yfdAnnswRhWamwPtPVhKscxDXVCknTtyvyvRmuPH9zmPDraVyZcw7iRHKd3iG2Rd2gN66YGak",
  "key30": "h4CHgToTGbs9chvnhoE4pk7mCCz4oQtvPgUeFUcn1yFkBzLUmN4Nr65rNicjhAfQXVLvPGM8fsNindvHZphePcy",
  "key31": "3W6V3ScWwbNtvdxewJsCEYmLsgFTjukxJaoUJ4pv3V71Jui2U1qYSMzohnb22Y8Aj65jBzv7qUDjeeevq3YtUCwL",
  "key32": "64tiy89NgAC67aoXExDf6Tj8iB1akQouYGsVf7DHENfoZgRv6qv7NhqvDPSPwKJXVe5n81kHepj1dLxw7cajFRZc",
  "key33": "2tQsZBELouPxCCeSCypjDEp5U9WFv6Vyg4ziZaYVtRGv5U2NzJ5DKQjPty8q8mWjUNUnccfd379uJFEugtJqcV7A",
  "key34": "2EnhPVNDt776gae4KEoAmRvUqiH7Pmnwr1p6WDkho37w7FCLkDPm63TZScsSVnrfrsiHwaLCrWG1qyKxtbBp6FnD",
  "key35": "2UVbwFuN8MdD5x7pf9JiVFkYU1EXrKFtobaRdT9G2yvbzBHx8Acx7oJoJbJqYm77XkuDSgi2i8VtdgxbcVp2Sa2y",
  "key36": "1cNLzRQDMr8kXAXHKcQENpEgjNvxxaA7X5CRm49CDEnuNSto5Tu3LoAuQ8c8nWZWcLDqzMDLs5HSk5sCxvHzsB8",
  "key37": "2zMqthM8i6ogpicEqDFqVdSNEfVVRX93UocgSzGvU5TgbMsMHEdvvCaXfUq2dHQpyMoGD9WCYq7k3X66xAUj5iTg",
  "key38": "5H6pMEtjNvp52u9Cyspruje5JDErDz35c9xqeva7GpBNo8GsgzdbC5xiCaKzakQH432MnnGKbkEsgszn9uGDpent",
  "key39": "3M31NBTorTkHbaCkqDmNJEpWfz21oRun1Gh64546ZgLfcFk1notAMAf4ykdHBZJD9yRe1xzbMdYSrN5Be746uhW2",
  "key40": "rmFYXS7L9S6eA1RvAgXeoeh5oZSiYQkbQGdpVQAtJHQDXHUQ65TY9CrRq63pbFDemDnDG3vsqK2JarvzSHLWn2b",
  "key41": "4P1GVsfxuYuFiH8fvm32hrjJKB1kBviKWvnwbff15XZvsf6ZRYWjkNP2sjn9CFsAHanegQMffZnkEHRDqVcWvmBm",
  "key42": "4pz8f8CrMjzKN8owjPHSFDFDBfb2jzYpHT7pkRVJs4Ak2Ttc4zcxL8CuAUnUHYcKqMwyx3uVgH6aYBtUFJr4sAZA",
  "key43": "Y6F9BWSMeG4g8pT3urzxxXwSZdhmWznQQiE5NQGVKnyLJh6VdG8jvjqvGijS3wvhCUGNFrSd8ka7qm3c1L1KxSM",
  "key44": "4fD5KyfZQNCVyCC5oJtSBmob2g6FKVk1L6SecWEvVAqKLYjcYMvxHSMgVDpbnW7PzMR1wpctcug8zy7KbyRVWR5Y",
  "key45": "52TxM7AN5x9nVZ99rPXqiAj8vNJRVCWwRto3Vu6rB6CcTz7rMXsK3uMhBbWQZT91NdFgy22fK3CPL4xn88D5BypD",
  "key46": "5BEr4R5whZyEWB6WijAQT5chYLYFEzTFWAkLhrvP3TnxdDoH9ozv71d9x79FvSfUp5jbLcPzfMg5zKPZ4NfbnLtr"
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
