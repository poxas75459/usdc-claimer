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
    "4LtSNTv3ioHDxZprrFpYD7YoPqP1UUN1U8yBB3UqM8bc4pS6BNSP51iMSHzw8jusrq74qpgJCxxzt9ZvduUpaZCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h3VKRyBq9SLm2fhihVvbJhR2gcghZnpjhr7D4DHhFn1PvjVKpzD1DM5mQkqZzaVdrcXu2DGVDA1qEZdkoyFa8oR",
  "key1": "3x8232y4DASiCQFp7URunUZ1RQRffnoc4pbh3yPLL8h7MM4s9MLYH6sTjCpCWoMTKayUt2CoVoHtU5jowJKSatS7",
  "key2": "2KLr5zfec4S9dEZoaSxUwEhajDJpg2Lexpwj5p1Q7PcMAm7wdsMz8my92bsiHqApi5Kc2qakV3RXTUfMp2jW5a25",
  "key3": "5tTbxi5ZXJWaSQ33Mwu87f4pusoaLA95WQLHyUsv1gJoZu4qKfkVNpjmDK6ps6EZGRNrHGGbPpgBTGvFvdQDynUM",
  "key4": "3F4ZL7TXqMJjGoeY1kSgVSF5AhkgM46Zh49HbHCCsSVvUbaK3DH3NMziAFCQRw1CuyCq1j96dpbXPfgHETwtVyVB",
  "key5": "4ekDfdJv5RzzHfXz8vvpqt9v2xUW8w29J3xbWEHwXZxu2FLCxbjb9wAY5yGx85kY2ZSLzjZ3jZLooyN2P7KYX6s7",
  "key6": "f5gUFE2k1fwiViV8WKRFNjgsbiErJ2L5KNeKH9Tegc5yfgy2su5xjvQ8DvTpDFSiybrQFgwax41hy2WrpXkX4Aa",
  "key7": "QifLGtMo3CNtdmT1QSLJ4g3SZtwteZ7oqxajhBYq8GeCYe6kXTzFeWhGDHfZ52tg37JVLyB4wAwU5ByxBwenP7q",
  "key8": "31SGZAxjjzwbQvvV9s1RZWBqy1PnwPDPCrMBqkoFQJ9V4APbpkC7XN4NS1UxkDwHsdJMRm8UivYsJks3867pqput",
  "key9": "34a1rdMLj6k6udB6PmbNY7muJMpMjV6yEuB7jRTRSkzS8Ad4rR67H8JG8oR73uUJUDjhTWNztNoTSXT8dV5FdgXS",
  "key10": "rkxxj3hY4TjGNFA7WYCND6R68z8DKfkA8dd4PSGL96BFcz1xtZU5CxBddLY9tX346TomMvPZFc7SBcEv8iwZ7N3",
  "key11": "4PA25CwZvckVwh418Zv2dnTP23wSq5yaxVisEkXpk6no92449Q2h9tAhHFCbTrFEkNbtuJNYSdmSdyFps69xztbC",
  "key12": "5pnqyoFFxkyM2BwB4JNDn3EWw4PBMCKGoZTa6FUUBjtB7QJyQtU12NipzKytCAKwwD9tGDSmHJ2UhytFmLrQnKhh",
  "key13": "3vEdnV3jbGKWm8oFBQR3fRXVotwuyTmachsL15gxjDbzAL16C1VS6vHeCU3xQX2Te9faUxBQB6MoNXdHfPjxiR23",
  "key14": "3Broeu61KMpRN6JqVdLhqz9fkfKDeg6YcsodoT31Tz3y14d6ypSaVQMe652NSuXZA6fp98yS57162uKDVepm6fCD",
  "key15": "tyD5WBkGhpPUJRyfJf7FEdmXZ1bTbbpE5Q8SJSbh6WcRr8q6bmRm83rw8XM8qKHK2UDqN6LiaPS6DTJs26yErih",
  "key16": "5sJRyWU6r2B5R3j1mttURcpQ6YumAhGZJVijNDazzohGndCpYcqfmRtVTFcHKPhrQrcVBZKhp9xiSbbUe2xdg6K4",
  "key17": "4AGR4YGmkgpYwThSxUzWKYFoSiHd6qcThmg4nWftmfoKZYwMo9ntJqviYXkVWp9RMApFztQoTPYk4WVFNPuEDNb7",
  "key18": "3x5MaUrtbCJWfZWfLHxyRRnLNofDoN3MztitHvSFeRRG9SMhbpt2M3n5mHQp1ntcPrjDg8pGt663GoNJHVnHpUap",
  "key19": "4N6179J3gziViknYPfRhQfp9McrJJxghrG3pUTfGdAL7EibsY18nGiMNHfP5QzCy3PTNj5622MTLrwFGVGfDLsab",
  "key20": "UeH8zniji47KPuYnZ4bXa1QxNk39ZPGzj79NKkwoGN9B31G11etyYfvBtja534CyAo9tELbq2LcBEukNZ7u5ef4",
  "key21": "432evfHhDMJ2gdNqENSPJ31TwuqM65gtceKHgscXZWkr6REfdTGMv4shvwZK7YLA3wLeKntdCUsNR7jA85YknLBz",
  "key22": "5eQZ1ENzsdsAfYgvnHE6Wtsqs6VsSNUshbvpEXjrowhkcEqkhfsSMy9eZ5t6D3hSVmbkh6YD1otMpmYZsqNE9XWg",
  "key23": "5c9JFJdRD4ViRzGzrxcDLwTqNdiPMCzvMvQvXBBH92mrmNrU2gazzBmL7rkMaKxbHK3xkWSSW6Ck8TT1Q7FkiSja",
  "key24": "5QazzmNgW8aAnGe3ZP6GbGPkGkt8op7hLGz7Fyqos3pX8mFaLqn2hhek4Rupdtz9rGfo19w9EsU6R6uN3jN5mSzq",
  "key25": "2K784g5McdeH3GkFXhqyPiG8rfiduqFtBqJTUsSjpRHQBBVFQs6RLou6JRmEN5CpnX9e2y1kNmK4Ypd7mv7wU9Xo"
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
