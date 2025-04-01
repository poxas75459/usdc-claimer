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
    "2HTnGKAsef3m2t75Td5Y8mhUER2VBb8UYwzs8Dxtg1PRJ3trbBMuXsVUrnwJxXUQoCpj5woELPELZ8P17iHumfSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEuAxKV7qGMgCGrmcJgeeW6BoQMifsxTQvCFXzdDJsBduem9aA8hpjpsN9wFAdJ7LWZyov6nsiiykeRPm7Hmn7G",
  "key1": "2SEUYVdNhfjEPUn2UCztRQyEiij1THuAfuh5WNaCTmPNpWqbUGF8AraKBYcH4BtGDqiAAuB3TiTzqzaNS55RsVpz",
  "key2": "4C2AE7SWRkE5otrybR4XJ6RWHUzbYa97GthLMb8cWhh5Td384EHGmeSVduEJNukefbjFn3uc8rTfprXMeUDV713k",
  "key3": "F7tsbEDVq2q5J94D3yd3RgFUnJ7jgD7T4Vo5jSrpD6eJK5DNThFkKMNHLZ1vjLQ2GMhkFwaUDYytfnHNbUHk4Sa",
  "key4": "3EcFj7gSBiu2SMBRHX5SybtYJZqPuXwhiJtFVeioysNohWKHzP15iY9Vrrx27iopGq6zA6vD6nrX3BdJUCcyksjg",
  "key5": "2kP7Ccyp9dJH6Km2rcGWAyQubFGXHVEUGTD2MTijhVQEm5mMgWGK7uGUaKtN4dut9nZty9gMM7PiKyZZ5U6Q8np4",
  "key6": "33C1qrtBxut79dhqVgaLZs3XerJ3HXYKKJbsMfqx8gkRTTMz8xrwL2xyEwUpqr9TuB3YoiiY2nNXiaZdbt9etddQ",
  "key7": "3dd1hsoPpU9bnZ1BVCNRMQC6piiQK4m2jP7A85LHCpntrSiAWfkCCjd7FZujP87KKUjHhXKtEE8cZ5jkHPytLBgT",
  "key8": "5gCpQ5fReE3yyPGXX6Y3Tx5MZAFddSivxx63Db8Md9CKrbu6qxxZQV9jmf3AmkLULpdifKxai485kcqYYSJQ8ArY",
  "key9": "57SBnuQX3WUjm13qSCPdX9PVM2uJ65HWWqoyHshXGdmroT322cbmzw9DU7Znsd8h8dCu882zgfjXGoXdMsd7VAhU",
  "key10": "44jyzV4eqWhFAA3vDzam2EhwDCiYhfznzadnT1523upfYrhi4ExhaiUcnSMNrz62g2u8xsRmGBxtW4AotLCmiBnt",
  "key11": "3c8EzPyHBJ7vdbazMdfkqziVcp2n6a7y8jc3ZxveAXX6Lr2aEKF9wdeGox1QyHT41DA3LPUdUXzGtMNG8E38pNHY",
  "key12": "4L4Cs4t2UMMz18yqh4imE9MDk4X4MjouKmHf183MMW4dXcut6ZV9BuUgh1ywzs3tEvisrTa27WtwiTv7FcEe4c26",
  "key13": "4nfLsgUngzbjUYX4EjznJzTJQNecAjv2jumnB3RRxo34Exe9oMuAbYF5uRdXUnimVq72CDLcRP9UfDft2vXjsT5W",
  "key14": "5idcCFWEaV6v6pGaXQeEwopU7ccafpvaBvuzW8amdbxevghxe8e2hL5Ncx9T3XVdMeNfHejZ5rgvVGgWUcWjRsBr",
  "key15": "5TpQgp8Lf3ZJ4ro3J4KZrSmW9hoqoZcGsxXPKTPxwizCKvfupmbRDwRK59zca3KjSqtypsXYYCA4LZiSopmxj27u",
  "key16": "2Eo3xxXeXYZJnsHpJeguDTe7u25jKyNGyhdBmifiMtih5TETqpbBWbg3UwoDUdFqMXe46wozAyqds3zCF2bATPb4",
  "key17": "4m4mFJRwqMMJsU7FfttFHUNVNLrUZ7NBrcYqYdrx2G4qXogcmRmzNrk5pJ6pRG9MccLzSnmiStixzKheJqs9ZXpo",
  "key18": "rVYu58dF7SY5bVpRnn38oLeDdA88Lfw4ZPUqvzK6CGWH7dKrQBjVdHeoP96V16zRqapF5PgUjNtpCXyk9MNLNzc",
  "key19": "5BiRnqH6CGD4HiJAZCHha4PnsiuQSZbEYHVdSGyQC2vQs7nETGH3tFJjoUk5aiE3RfjNnFAzFKpkWezAMn9crpwy",
  "key20": "2HdsxxrpcHDVMHqN9z1QDnqEuARdaX6rfzHf9wXZF9TbeBrD2bakghiFWvrnFLjwYTU5XpzzF4dnBZgGH9xufViC",
  "key21": "46kjVe5RbkjfaC3Tg5y4EzbPDmoW5rwkBML2Y4xvttnM6LbyiaqbgriVQEuWmBPhVUeu91nnBd74zeFzZZu137Kh",
  "key22": "5SdZhMa8DrUMkk9HaKK5far9nuoTarrDAg5MFhzMP7SyGTJtjnCR39AecPrLWoTkAgtVP2atVwLCksndNg2hvFLJ",
  "key23": "42JbC7Easmw8C9vv4CCTitj518s88c9U75GQ6nvEbB931jPwEbMNBym7z5kSd3szWSQxN1QEi5epcADY717JZQcX",
  "key24": "4nXDW65rfHeBr32sC5rsPK7FPkq6rH5vDrZ7HjgRT67xeTsuVF33btJUBdkftYsXUFyezP2NXGups6iKroDj71ML",
  "key25": "XQvzGp7q69vRf1HeFYArprq5TceN895ZC1g1DHdyEcwiNHUDF8Dda6vgAEDcodafgd82mWkzpy9AtfhB1NQZ9am"
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
