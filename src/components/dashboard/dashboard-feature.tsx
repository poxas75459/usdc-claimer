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
    "5WXNrKHzEyCDFMP4dqob9AYxaydKCwcg28c87wSqwBTzEAknyju1Wk2V2gJzM9vc6YmTz7F4emHLL2aphjtkeuhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PtkeFe37ADt5NzPDU3nhiXe4xHSQZnT2CpveARPh8V3f3jo1AvrqsSuKSnsrHNeSkfF49i9taxDuTPZ96M2mVAS",
  "key1": "5ERJpDKR1cHYYM3hUBe8s9UQfMyCKLeYKziXQGKLsxiaqyoentZohrzXe23yK3bKkEa6XVnrJepW1kFU3wWZmJcv",
  "key2": "5LiP3hRjXPpx2dvgHF85tKUNwqYbdp1wNocd7w7tTZEH5YUev7ojzyqTQownHQ2WMD1HHcRCGioN2EMTgU9m2jWU",
  "key3": "d9CfcVecaGNpma8LszzLU31dzsCfKhoJzzooXDycA3BDHhAvSBt6YCX3JGyjwcj4sbSMeFa9KaEW1K1g2Y3JJ91",
  "key4": "4de8L3nSG4bHdANnzJMQGgt8QpmebXqRBquzg2oTh71CqPXQn1WXW5d5ztDHNX1g77T47ir1pq34NUhBo7XXeoBG",
  "key5": "22jevdQDGGaqn5bvifcj4ZCquMS58tBPQyK2x3Fw4LKQSFBL3yMDTJBEz22GkU3rgy4i2MnBHvptuxHMqAVJbSh1",
  "key6": "kA5nbCy23so2JN1cBqfFogAKp4AbH7iMEK1StbdiBNxnDRyeWDfxJgSx16eu4LwiRhY4hwgTxGs74pGv6UMn7aV",
  "key7": "32gQAEhrGm7kVTiuioijcKQgN3p1GNyML5o1s9f7JxQcVnxpPZBm8QW74ybpNGRwpnDyZ7MApfEPRLw9NUsMooQZ",
  "key8": "vHzZiqSHYWkUJaGj1nPuVackoEauGgHVAEhDzHUtAEXvreQJZuEBvFM9zmN7GpFhEfQC4SbdLrMMPids9yTYna9",
  "key9": "5YqrY7WLHr1yuvZBBrDNbNswqkcdyoPVGgZJt67VLtTEmxwXuipsQ4Wam4CTNnnvg6B2eZ3dBvsSCPXQWZJbyww8",
  "key10": "Y6XAtGAdLTXUGrHNNwWpi7mQ4r68oPbw5icucEJnLZwWzbQ1TWCdhqTryBrkeGcYDyCb7K12KxJYwfNXyDGukwE",
  "key11": "2S2igKPNvvHKcFw7XxAQ2CUaEU42YCmzUpe9aqFjxVjBy8PCQFczGm529UtyCEiTguQWrMudKcjotqaaeQTV6iqV",
  "key12": "i8bumxtAjv4JLGdpbrdpFPZv71hG8f3ZeEmnSpmcmreXV9ftNeUPBcdENHeVEPtfphx13XgQtrRD3KmyVaHYHXd",
  "key13": "3NJHEvv4ughM6Bw9Sd4fZopLU5pFeZCZZjY6utGuBKAYA1YcRa57Ks4PR7FKHcpRryWP7PaM2Pxi97FuhKFkXKTy",
  "key14": "2p5qutg33QCME6GdboY684b1frbnRjCxAb4cLqtoVfyvqonpinjGdwEhAowkSuRdEBJsPX2ifKmWXfAAcWEdGknu",
  "key15": "4f999oYbdUMabcBUJAQfHJPZSRdQTaGPCUwDbZvb7gc9GmCtf6CRr88ox6QeV7n5NogMtgDH7gmeHHwLM8YcvNiX",
  "key16": "2uVzCft4zTgAyyjmwaLk5Ns5F1adE98UBx3baKynuPamyKRCyzRHhjPgpqCf3rYeHGAnGArpNeQpdeXzdcBUJ1pr",
  "key17": "dFyR3sroCrFajPDhAH78JJGFghLjtG9Zj79C5bLMPKLxB8siEE4njT89gHBnaZNKYy6xZrwt1wx3GbegyjTNFyU",
  "key18": "2nZPj8acLQM9CNyyNMxVGgRLmUXe3989mdGGBdP9VwahWYtP8Rz1nbCaEGfN27zou6GFnz9Hba7uL3fyPvvMFVsC",
  "key19": "5KYSy7etkDegR7DceZZEnfCD19f7L5DaxnGeL5ukMFFvG6ToVV8d3rF1CuXXEeXTYfXbeuEnJSxUd5ZQi912Jp9b",
  "key20": "5Acw3ZVXuegGLZ9DzfENZn5psLaXEauRtCLp4PnYn11teZPAQb1xzXn5aEVH6pnCZ6vbfrSud7RBki2aqBeWTMxZ",
  "key21": "eeBLUsxkXuMstf28ZDqPzk1MPkPpJohXB2836edCyhqbV6fVQ2stHDA1C1G2Ty6xvE7vP2Ci6DyRSQ8YLvuXDX8",
  "key22": "3WoyqPLPQ4wrFfKPFmjKf5teFiojXBxHfqZsup77D3Z4XcLUsYeHf5BqJoBg1gqBmjR1W7Pr3NbR1w3MyZmKMiCK",
  "key23": "3mJiYH1cdEz3RsG26xBhEaAHRMCagc9MDJzqupFFz1vvxvzqYo75CqU7oLTieQ4ELfSrLCCbbuaThggnGoqWhC8E",
  "key24": "4vqhkcu4pdzvx2daFVzBcSBdBE1kY3bJPmZqCd7YPvXCHkDijr3K1TjF1iocjkJuoE7ApxqWgLdi8PAFvXthedRB",
  "key25": "4VqG6bEFH9D34MszWrKo77vNxk5R9UdZrEcMYdVq5SAVKpoG5kcjq7TNByzYrK9TQvTiGuiVmNbkhfQ3ByHk9zYB",
  "key26": "5EoQ4S3eJNdsrLe7JHzr85RGj2GqKHWiUy5fvnfsDcLqNjRMQR2CP8xLycsz3J6TURM4RSsVd3RTEboi5Ha6X9m4",
  "key27": "4vBzZHBdgPsCy9qc3JdW4PwEXpwAfwEsnCeu94XCM8vKCF693VaZE1jJaffh6WRVR9LtVPKCK23ZuH3HPUuFWWxh",
  "key28": "3AkPsi7wsFrrbEybAqRn5CG8VDfxRzcFsQYGHoa724PkmyEr186PWdrTDtrUza7WGtwYYi6z3Wn2PrEocv8w8Cz5",
  "key29": "4YSFuMaUKbDHapgSGeKLuDBGQDeLMKGxEWCewz3mvPTMrg6X41CpgLhygHebxXPeGyEuNuhjNxQdNafzJMptpQGR"
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
