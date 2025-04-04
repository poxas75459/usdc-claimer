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
    "3Cb75n18dBBn3WW1Kvwahw2CAnx3bW1KYEDfXDrqkM2XWrrJJ3T4Ly5PYtpNE1CMdw9Hicnyfz5fQ5PpPpgHYzce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQPD8AUP7D8zQFX1Xrpsb9VsNATLNwKRZp8Ywsx5VNn9eZx9FhNTdUQHW6muCHmYz1UcP6icfLBVfHJnNCc2EiM",
  "key1": "b3wGgMNWVc4jZfcu23tetgm6h9qypM4Uj8iHAkP3EkeecrcRjhaVvWQxyvDZTW9yDDMVRb8eN5MGn7VLmnJPPwt",
  "key2": "4KGMVPspp4FasEyNE57xhFGgE75Qxde4vMeW2WYu8bcHKKGWehqr74EV8zo7rEP6HikmMZQQU3UhN8Tk1FF4vNQs",
  "key3": "kcKemhUhTH4nZBM9aoJeKA4z2Nfwtph74cAvuRsJak49yCEYEzg5kDxTYJyq7C2b9D2XmD5NsVanYjA34ToUpY9",
  "key4": "8P6E2DcBeNJ7tRywCLmPWMWkDSNzWrtPsLajZBmP4gyfJjgrDsjWh6wJzdYPaSXNad6cRHY2S3t36jbUHWWCZ9s",
  "key5": "5AFSZS8nxUACQBKcPQ6TC8KzBvvq8C8azGppXh12Sms45pUCdeqPr298irdGmqtNuVZjx3YHL7m8DWr5jgsA6qrK",
  "key6": "43bFx2gMDKfAmTtNECaPFM2XjnitAV3YYWjutwFQ2EioVRTpiWXwGPy9ug8eq82TSjcoPipKggGguEAURnoNTvsq",
  "key7": "Djr7gGvNzznKvHTAyrXebWCpA5EadJzhixGmf4WLxHJBgcifTCqEWhfTRUzymp9AwdrN3adxyZ476ayAUHVGqra",
  "key8": "3b4PFhUAgoVq4Ke6GHrCCXKUpF5jyHzgaftrzF2aSj2RoRpX1dAyeUSV9LDrnVH8SmTaGAcMQ3koJ5R8mh5iTAWJ",
  "key9": "3xYABJkrMbJ9NcyHa8NS7FXEkddCd5BRwzLgYZCgjXaRzpM3oxEroFJEFYHY3i4E6TKmSc824RN1JvxECj7Zxnds",
  "key10": "4VAuTyzTwPs7cknjzD2FqLxnzX4E1iFkkis7HyhEHv4kxTKFxYCe7KBMBPYXqTSZMpbzWW7N9PuERjHgSLwjzMsd",
  "key11": "3WhkLJ55FDzKSE7YdHcK2cYpTAKvAJmuMheLHvsJRHEzqXpotWaazbbZxVvGBx9NquDV9w1Ncbhxpf9e7GhqyUX7",
  "key12": "igmH5mkAt1YsLnCJs22kyw5zd9uecEjxt3pcFFG1FsMYu4xwCDePhjoQTPhg3WAPMpzbLfvhMMJD6dGVPYojhmz",
  "key13": "33Mjc5SkPLoX6ZRoXx3CApZRY9iGrdwNXPzNWQDTgpL22ZkVv1FBsqRMXzkeEb5avt9kA8cNDoqvUgeokWf61Cky",
  "key14": "APrn9yLjZPQEgHaxuts5rHgpaNF2Lc7Ast2bxZK4vgp2xYzTCjHoZ7TTwMr8SY19gMiiBmrNMbqvXCyA9pgq6zS",
  "key15": "5bsPoGy5tWiFaGuQrUVEwrDDsQK2vKC3MBxkoQ4Tm1RwNXzWhEnAcjV1ukpWEe5yFwg77QR6VuSysLcYB2XmaNkU",
  "key16": "2ooqNqTYuFNSvhuLKwraRSWJHiocMFAkjkLH7iDTww4kyLFyus2F8VJMvNx3WEGbwMsTAgRUKTVbyb4JQjksBN3m",
  "key17": "262Nk6vVgoKAzNPsJCWhP5PXJuUvSDBUWcChaETCUdM4fPeCct9AU2daubbifzyYZ8eiBnMz7J1f4h1Z5FMZ6Vgv",
  "key18": "3besUhu5PWFzKaHsEjr2RjsL1QAfRMhMbTgR9z3aWXixRMAujDMUQVECZD9C2Empca9zi4QHrd1umYh2v3pMq1pm",
  "key19": "63bexYpgTUK5w6VsbffUrpwQWobcXiBECW5wkbwTfgE8jNkriXGBJaFLqLpPbQkbxMRyevWKL7wRHepuYg7cBUFT",
  "key20": "4hF9fVUHy62DjUdCkA14NV1b1kgC1UHGZ7CZGXgsQARYTdG8QfYhFE1iMee6bVaSroekpBuHn5rHWB5Jif1bTomB",
  "key21": "51ZPvL56pM3iGbTT6196erABpLcaY8tnYSMJDsioYDHeswptkqrinqjBMSbAHTrsdoSBFtJB4NHk1y1ZW8NWyGAh",
  "key22": "uwk1mbGzYx9m6CfTi1zqRhNyLN9iP5WPLHcUFZFfjygzXEbubEWYboVPWvdgbJhcLy4YKqAEW2SNRSuyoUBMnA1",
  "key23": "5eie2HSRrY1WExxupyAS8FjYCWw1LJ2A2u4h8xnUx2ELq2zCTqvgTRM2DS8VyLNmKpBviV6So7gxXxjcGmXsudpz",
  "key24": "24UDmA3zNFF3cRUm3yyJEQc9KpzShgn6YQoy4Q8Cy5JhcKJhBEzhbQ6tuBcx3njG3qTDsSZXhFjAoeriTg6ZAa7F",
  "key25": "5hjY9wp4djmP5pajZyo1R82UjDioZkMZbqHr5RHr4evmJs6Edgk77YsDtWzV3WVTaQgMEM9XwFGVHYxxmg4bK8eW",
  "key26": "24VcNyz5Fj939GqxvtK8zJn6N7CYFXbjBge1LYTurHCkMimB8QcgGokYDWczFMR9UnnWDHeGo1YCVEyXiEScBgFP",
  "key27": "55MFBzqH4SjHZwpRkt2WhcF6z71cb72Gav5Z54MD1GLknkksyN8DEZyc2ZKxNyaYUSp4SwSnBvmRpmw6FxTs4XX7",
  "key28": "8BQYaef7Pa3hG9do4xmJBUe8p4MrXFB86DBhAEjc8N85SGEeq6JbxvW9bvhWk3vDZiWVG1VJZNioQYvGhemaWg6",
  "key29": "jQz8LU9GbHGxxcMExWGYq7D7npU6gnG7AcaXPQAEVTC7G6wJHVdzjBkPcp383tJqgavRoQ63rdghGSJ5V79FVTf",
  "key30": "324NvKFtKNvmtVV2VkcxUqP5uUpGqLBjHDMQqJ6C8Y3rfUsu55t5wux39zq3WCGXCNBCAVBQzEFVxcbKpcAG2K8n",
  "key31": "2hxGvtSscEv8DV8XnYdgfjrm1VHKrGXJV72cyrExHKdWGtSrobzq7ie2rWqpJwjYahX8knTqU7yMd8d82r5tYuRk",
  "key32": "37Vi8qBPmWqyiVU5QFayTpey45jLVngpGx2Fzz5bnhybM5fh6zvEwYMskb4kauCUs4KT2WgNkgGCui2chVKZfcBe",
  "key33": "2KVu63TQjaTu7qKUAWkT9ZGPHgAaC16PQjYNYaKYD83YkgFWysFPFbrzQCCWBWcb4rm1jzBr6GxwLzV6ZmFkDNxH",
  "key34": "317DJostyixykXK8aTJrsv9gGoiptLhBDBmkBmzjSTwkkuPGhrA3cPjv2D4zwSJ1gUG28m97DmRg7KAR99C7TrMP",
  "key35": "328bEYYsbnwM2ufZYFCecpNkfZhp5csH24YMesJw57qMHtbp63AGgQwBVZTEFSRuFMZ5XtSANivtYHs8jUVCdUYC"
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
