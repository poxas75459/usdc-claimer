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
    "4PfryFYmJJRm8gWo258yvMnU89ve6YZsZeH4woAsKRWkBRT6uHwszcj2cUDXZeDRYezioUztrtrAjAigjEKudNDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uAvibnnjawH4rEwMYrnP18fwSAQ8jx4wCQPVWbnMQ4G3UAc42qZjUCNLKpPzMKstR9h3wGiNKW7yncaDsh6H8qs",
  "key1": "51HdAdVRiKDvyAgZayphoVFwghGx4i5pSS3aHrLgy4hJbnYfpVBnfbp1mrokKkGaH7UcyjwS6weGXTyqe8mZLSp8",
  "key2": "3LPymekag4gNFPQuYSydWYbZekGKPVnwb5EoPss2RrSLYbHD6SSjD64EPuehShkdj9CXhXpBWDQjc3FhvNmRa2hE",
  "key3": "Sfi2rgY9VnXWZKFyW1jKbZAsT8j4EHu1UUTAK6why7K12fsXpZKKK13uReXhnwpqJ8u7NGoomvp4r4or4JjKNUx",
  "key4": "25pcRe2PdW9N8jpQnkG4dJiNrBReQRBbNHd6tAqyweJKTcqoFGVFFvRqSgcmXNou1vkJXps4NhQRg9ytJdsm1rZo",
  "key5": "zaEUUycjBfag38CChADtTRSX3juoT9afkXULA7biHnHmxQFiTR8Fi2p3c3mzGsebAmyuJMZ7bGDmrfxVa6zgtrX",
  "key6": "223yw6LHSCaTbun4XQms62diPeMwVRTxmbgvTe6UNvQYp6PKWbSEcVjGAgf9gadGN1ydrqxmXoxcf2ZDgqLi8TN2",
  "key7": "3LwZ6rfHbCux8kFUwStHb4hc8D21ywihwiHTQB6hpfP2VLCPTcoZ41FNhHrTmEsGvjqfwwMED91FZnoz8Lcu5Xjw",
  "key8": "3iy3UETctJTyU7UvzBV3fQfRHzzctqDbvyGHeBuZ56EBBz5HMWhgoYRKHihAf8XeRpxnK7wSYGLhBpQH9w5ypZtj",
  "key9": "G1A2W1Z1gsgqVmNxergNpHngUNhWb57v3uyCy2qcvhMqDivkaMyTZcfutj6hSWCAdDcWnTk96wgJic1BZcLsNaX",
  "key10": "3TEbbZmKhrQ7GCcj4cBHt9wyUNgFhbf72WqJWimBBcnHM3XwEhJduGYAqyQWKySsBQawru3ub755EAAnYaZ9irFv",
  "key11": "5evJaKN7w3Pwy2FA8srz6CsGYCbwYwUD3nbvbpVzErkbMWgQhF38TjZRNY6FzY72v9ZWKEPjBJcr8GkTjxWc8169",
  "key12": "4vMn1KUseY6L2vBJnMhUJJyPFqbKQatG9aLZyYS6wrbdgXAbuVtDGihbJ9QUdCo31V5iswqVtM2UYzZim3MM7zN8",
  "key13": "2er7A6rbyRyXcy8MzTLpEqFsvTbGAMu7jnM8VByDGNsaVg8xs7HztvPJcXrpBPETEPfkZrtpRrQnfLgroaHtHaiz",
  "key14": "rdZjR9kf5WR4hrgXCJD6DurjuEJaSyBGy7ncCdx8M2AQnnTX5dVHpje6xiCry8U4Knsu1zDYLppQK7ofhSEPRWJ",
  "key15": "3HhWncgVRNAzqKz7D7HpgWwuyPtzmhrT79uK2myJ7MshF9uHNvMEaG79i9Ae9yAR593HGkCuZT8PbNzWiRYUtGAq",
  "key16": "4aS43xjEUbcGwGVS69BEN8iCJa1fSHofxG31FmNLh2iNrRFrXeoJyDCWKAK5e3eueyRW9ZgidYXJQ6aetqtFWgm7",
  "key17": "2w4v1mw6fzCfAGKQ6R4MomGAMgfQGeYWHAzHRHua3PmzYfNUCRJhnqiBHonqHu2QahiTVyyDjALVorqnaHWyhgYc",
  "key18": "2LyBFSfqEnyyU3BypndTjamV8HGgfgbfjAwkGur6uSoUgTfh9Jywphfu2vPAiTStWhJLTLzufdirkf5r7CP7L15v",
  "key19": "5yiNTbGLu75obV4UK6nLeNiGzkjkGXv9fyojSGFSBZBQ2cvXcQV5iN9fH8svAYdjVaMNLTWuURLGuoqkY2oZY3aP",
  "key20": "WwCzyc2R2EnqLk5eu5FMoVrhh2RKGd4qWR7BEA7euv2YpR7dLffbRkUEpMAaGWQhUHNuwkBKSxhFNnct8wRkKJb",
  "key21": "erDHnvPh1BNm5pZQwxRcGaqGLruvkdG8ogRmoXzTaTVrbVtY5KWREmBfzL13cC7SNsJK3j9vifda3oqL3dVazML",
  "key22": "3zV9G4x4r3aboiND7XfJEhky9aErp7BMMrxB9KXsz6raUsZ7nCe86sSRzkbe35FTu1F5nuqidEpzFHGzYjLYZBUW",
  "key23": "45T544vN8r6vuA8KixW39dRZU4N7hSmqL7KuDbdVfCNfQeZFmANNG6btgcurBEYffkL3P3JZBYXD1pADRUUBPCR4",
  "key24": "4xA17fyYsWkLe3GMvC8H4kmzMnsbNEf9bs2FKcAh9Kdz2iFG77u4UvAYY5fQeYe7PTRrHraTjCu9dicnaG9rT6VW",
  "key25": "5ekargGEYr9YrpgVRtTnCxvesdoU3vbjXpw88eag3q8ymgVpnQP3rqt84REsgb3FxMr2ua1BXRgs1wNXSE9iZz3f",
  "key26": "5ceRMQVsLXH9Wsu5jaoGtXMTP6Q5hRHovo17VDSnhxmwtYembtTWaRgKV4sDCpckVL5skBn8GE7bKFQJ9msZfjxB",
  "key27": "xww73cAeUGNqwqqQruPRMqg2d3FEounTnQTvrLKf5VDufbCbYQmtHZvffqtMV5sWrejaGA1Sdd1ZM7DHsGyMz6k",
  "key28": "4aRmqtgBrfjVR56TVJZgLAgaFSKrjj69mwFfqTzMqAVe5CaZd6cFsFc4fbBap6H8SAp7LT5Vi93PrB97rDjq8cpS",
  "key29": "3TvEQFuvPDWLABx9T6PmbSWcMZqYvKPNnXJsamgGdu9x64uS5gneWTpUot3zyXZLchACWSonS6onkQVMPsH7xVEw",
  "key30": "5ibSgyYn13VKyqq9BsdkRfV5prZ4ykhVByXg3DH9gc9w9iPs5XKqf2U791yfYpUTpRN1VjPvLDFfk4LzmexxHkP8",
  "key31": "qAtQ5dPXZSNN6RhZ2RuN2pi7Mnv9J6yjjsPSSNnHv9Y9SikMivW5a9rDE5tkKFQrLaavo74qQKca5rgEWxfk29K",
  "key32": "DoqUG3MAptFnTC413AEouMRfu5qkzJmnLHhZyqyACNdVjLWqBYbZMdSNehXFzfiGGzDwkL2XtGGhejmbAzacfap",
  "key33": "5Q3MozzPXRGvTyvkTULaPnMEj5GGxpSK1jkHehoE8WqvmxM77bUSX7diJ1zJHKkCSPQXF76jydKN1qWowekz9Eu6",
  "key34": "5NymtosxdZ8KeiYoUn1LMC3AUc4fEBviBPfYEGZjrpPQrNtFaRYr6RPR2bdPWpj3YRdDECVkr4m2GQCW2wiNRQpz",
  "key35": "3Wkn9D6adf8ULg7udSeBjaWFVzLm6DEqAscSTK9ghUx6hX1sdAJooXd6pE9e2a85b1oxCJm7JLVUJBJaa7U8jH4n",
  "key36": "2zeYWfs3jEu9jnpuuExzDZNX3x7wvkcGFZuHWQJGtJxYEH6h9H6MCPpn8wCcBU34L756MV4SUoDui1YY2pAr7X3G",
  "key37": "4M1P3nWgBSGKzfXRKZ5CmEG4UNyt69m9pPDDhWGYsAbZciqJTmDQyS6w2RMJmbaXkwaamWtZDw6DD1jZXBjQT7gY",
  "key38": "3FKNyVcsRKS8TGhCVLqrsmjwWwfGRudJoRYUMKuzX6owdNcbK2XaAdzy4pqauMankAgCQrfF7Vkij9pQTiQzD3Wo",
  "key39": "3nZ7VGvun5m9oBSmwKMAuZstbN3btxgByHoRtKZNE35DddaLm1YLyGGKm5ycRXyT55NZuQaUCDLTEuSEqi2goTri",
  "key40": "2bK6G4dPVcYQUx8CNqpeC6VxD2Tu2eNjcapU97ieN3LYfADRdVFemoPQoj4NP7zYUjEJphUifnGNAi1UFAV8ZxAj",
  "key41": "4SQ39snFFFpj4VAJ5HyDF4esivvBVwo9Q9kY9HX8oXSchPP4eg4RQ5KiDYKYKHo9BdWx2BwXGtjj2xRJtJABk14N"
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
