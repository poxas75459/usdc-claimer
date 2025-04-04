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
    "54tpMtUncoUKSccoNJaKxXNccRwQSPcP9UfrPt54BjNHELWFeHRWuFhiqbMM6DQ1BKr9Ey4wrF6ogrmAC8iXXi2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cpqjWPeThhtV5ZQxniygTbfmd2Gqf195KKGAS8ihKrMSFX792f5ExyzqjWTVf5Y8meWjwwBHqjYrnYpPyagt3Dy",
  "key1": "R7N78d3FpCEYUFYTDtEjNTGC1CVSSkc8Mi6EYUQUVc7kw19Ss115za52NC1zqBUc9qAspC9qjJnxXbh67gszih7",
  "key2": "5vaKSwP6Z84t2JFAuvSDw4JxQyVRKKj7KGenfKfSX7WUgc7EpBFVHSPqerbKMDwU51Z7dnJmJkdh5nMkcz7Wnpuq",
  "key3": "3UJU2ypKXQ8oZVDkcPFy11th3UGYyvFN4pkt3xQ3bxhi2Lt2eUhgsDnsTZWXtq6st1CUSNFmt4j2qwAmqsEfEcTS",
  "key4": "2HWj5nLVmqh4YsTXQaZgHfu5ve2H7KzhCX2F1iYzKLLwyFJL8eJuoRapb1YMJWYTxML2Pne6h4uP5riuDQgjat4X",
  "key5": "3vY3j2jv5PhURgTt5oBM5sJTimBd2nK3BYZrmuCDjEL1xhPA51KZN2RvvwMW2dCKsE936Qq5CiBiWHVPCRAHtVtC",
  "key6": "3KvyqEfNtKLkcmgjXRqZrTu9YXNzMQVYkjKZyLRkWFiCQZppuxYqybsscDjwShwYoGYuJukHaxaMztNGn9o2DYuG",
  "key7": "3dBERjHjAKHNJtThEyJxMCv5qPEVaG1Nakk7AJQq5kv7ns33Rja64EwgLdDhg41D3Wy4dT9s4DE1VtvVB9Nr3Sfg",
  "key8": "4B8XyMYxPFzmiwEbCgLJLotwvoXRorhcxigD6AGLkEKt7rLor2T3qVgFLEjz34sVPEopoMvmwiUZTZvsBx1fFRDe",
  "key9": "EdNcGnMvyacsd4vEonAhsDq6zTqjoq6yXPbcxi2fLyRfFeb3SobBVDx2ycxsQ5RWi5Uq9xXBcTgQV8Pwfcj1dHm",
  "key10": "36hXwN3Je53aHs6ez6RB7nUCXXCQtsf6F9DBgXLJr6jesq2NibZRxZz4sS7ByqZgrPEzKNsvjxCEsZSPFftRSNMV",
  "key11": "YmMsLVKiKbzRFPLN7j6jG4Wq3NoMb49yL7swVrkFThUEPHbCGQzr3L24g2YHhRwkQsrVBTyNjsL3gWj75rsLPPJ",
  "key12": "4wTuHtQXC4CA87w7frjFpmS8XHi1BQ2SRBujHifqT9PBgoZioNvG3D1G7Z1HZ1yQPJMrdQpPWmdFoYFQDfZgznC7",
  "key13": "stNftc1v21Vuea5ydkER5CqSmu4q5tntRCXquU5TsBRmjdooSCfTLhtWAw4NjMbr7dPpZAT2hFjrePnyMzyKaFx",
  "key14": "4Yxp3cWDr2TWbdFfUqyqreFrPvvfYU4H2f3zXwdh561MNRB8ay67mxvrarYBafTKwtpaHW5GVbBBSHS6Zkh6AWbR",
  "key15": "3BKcYSeSjwFgStmfCa1ZKsFhoWNfWfpE9yDspU92EAkgE3vDs94dpTwQN6c9Sxvg3mADGHT3aSPT8cK64YdxxKgc",
  "key16": "4QknujqQLkBwktViY8dmGdza7esMo7BM95QYD9Pg7m9CnAu1K5a97d5Lw7zEAdKzJAQLG62Aizu9Z9oMdVdgQVNu",
  "key17": "2CdhA25zz1Y3bGVcagMNyBUV9WxJrAvjSm6bcyEcbRcow2sZHo5NqAhm9unfzkrjaNyXZqZmN4SJRVRALmt5495J",
  "key18": "qsCshLsEmGJB9wcjYD86piKfSRyxHabN2YFN68qhFHuj4nhZcWJS3Qb3Agezdyod7ea4S4JhJFHifYC9oQ6tmtz",
  "key19": "2GBURmGDYVgSQfo6ViM3DD4pMNts5V3GNZXGZjfvCLLARrePPp7xR6WiWsgEKYRHDYQZJGLfMkZ9gW7KDSunzJi8",
  "key20": "6SF264PkjmQDptPqKMXajuAA21NG4iixBEf58DJF5Uytfw1k2PoYCv9HiwK59LwR3K13T1fTP6YJXkK5KvWJgxw",
  "key21": "29enWsv8533CAosmsySe9wyhXpGaR6xhCR43qxGkwrPKLQdtfLbMC3QPdLTGng8x8UgYMDrSfZ5o2vEy5XhiyVbt",
  "key22": "48roXcCSwZDMpD6iCZ6N7rEA8QtspYZm28RiQLmaZZsihWeSburredKAp8Vad1DbSKAspmvA7gnnwZbjdtjmeHc5",
  "key23": "5GmYF48mQVKx9VVRc5RcSxN6JzZSC8gbMMeEb5G3om9W4cUbRfffFcA95MhT6KtPfh2cPNsp69gH4t9EBE7uBaZW",
  "key24": "285ij8eQdWDQ1SX1UFEWRBhLn4VRpGDBaWTRtSG2V1LDvCTuHqXurzGTMPaSG4MXP4He8UKHpHAn5ifDkBkQAcAG"
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
