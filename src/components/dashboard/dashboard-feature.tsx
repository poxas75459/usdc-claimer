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
    "2wz7USxYDUbHbcys9hvyYURxgjnVg8upmcYpGdaPLpy5CnBZCZhqKMQ593nCfdizmTUAAL9u34GuDMiKfccNqaMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22sDTZ1waewBihx7icNoRG4Kfy2BpmCJuVGwQ8giMXvboD1H99SCgke7KFuVZq54Tg78MSw5RotqmCqWSXYetv7Y",
  "key1": "3Mwuxng9P2Dnr5MTNdidhHDF2zsjPYndZeQVUYdXh99Bz1i2C7MjpuQ9wdFno51esSPgUB5cioWzZ4BNnxTkj3Y4",
  "key2": "3tkn6epVeK6tJhSrppaLDSwAWGmmxmNNhNo6pSmgfQTqHui4qLyp27cVbrrcKtsp7J7VoCCwYxYzLt24MsMkgFKK",
  "key3": "raLEHy7QSH9o8DCMZhL8GehvEBJ9STwQEy8SVNtD5Z2hZ1faQ1qZFZmtpUzWYMBcgBuHYPhqHRhXCcgYyoVZfzv",
  "key4": "bBRCyCQteaibcD1PYtQ1VT7sb7boVHzdEafMn5RQwP58JgNLKhroxkHhJV3j28Uk1ci3f9GUrL2np9XFmT3PLEK",
  "key5": "NKeoPdugxfcpHofjyYTfpA6i5m42T8JgXDzjKPEp5ADaLHXcHxqXZLh28wVB2tsVndCLvDBP1CS4vpZ7q43Xo9e",
  "key6": "57RdBsiDX6KY19ncQonkq1vk79VuYbHhKHRuqbjUkdLbF2xJrUR4CjWQ6dAyXeV92UzEZJ9rv3npXc8pAEDJ537Q",
  "key7": "291qz7PH7XXTtGXByH2bKv9fJ4Lu3zMjkhQn44XujMhAvhU5fxDMMrfgZajyTvQZZGUn2QYbha5fz3JLDDr5yw1U",
  "key8": "4s4jo2judpTYnmu7Cr5gdJsHviDc7VqrPjmC7KAmpPTjYWzn3bidix7DX9RxGqwNRV2s3f3NKAwFeDync8m3uwnx",
  "key9": "3jo3DEccVWv23kSBn3J3MSqyQ4juoNKT9eTfn2LGyQ2S3SVCURWiA3Tj9kJKbnFMYefbxWRc9ECVHhvQor6rY3j7",
  "key10": "2YwwdnBZ72KWVX81SqjtxSkUeFvYSGPNWiyzQ3FgJPFLL2e5DUpYiuLCZya5XMJAzy1VbceKKS6UPBNo9GjWubZH",
  "key11": "2i9qbREuFgbsHqEfBNvRbbBpj9MohLcndJJkn5LCScMHtghpxXyFuc93fgLivgyZhZ6s4vBmWexKE6nQy9PAMuNx",
  "key12": "5kNBZXaA8fRqCgikyeruhU54hbi1DNzx7FW1bGrkVP4ggruGhvqPnGrAVgX5UW1s6BUH1Njhtuy9mURQwcp5478Q",
  "key13": "2xANGzhx9FUPTKxmruWaLK5168XJvd3BsLhkJALEL4GeFHcibFXhMkUVcyZo6LMnV4pknF7i3yaRV8KYj9TwbmTt",
  "key14": "53EzeUdw7PZCaXhfQEzQ6RDZFb127mt9nXc9UzQvQf6XAB62QeW2bngLZd6vhBTE4dKMZxGLEn42DFjESBk3bLeD",
  "key15": "pkME1DzW5Wb5MDKD1sG7qaMDadawSMfAYxPosFtS9bwmS2RUrDxHzLvroQctZ8KT99onc4M4AgH3juyLANFxA9V",
  "key16": "3cJ1h4sVNc8H7LbfV6zh2CriyGeaKMVKE6CBvfbbdyDMnJuCh4EQZUmkwKbMfE5GFFTKazaUdqafrUwrhEthk8k8",
  "key17": "5EkFqqWAfX8aVZ5F3Tbr8fcfU2WKQzvhZquX3gWrbSFdx1XRTeT4gFwC3W1Pak5nmuYEL9notbycY6W77JeQGytg",
  "key18": "28cstuF4fphTt5vW8aGcd7Fb5e4t8EveQuxRMSJDaCLh9MbdzQFw14UkBMoPrDfPhJxiPXDdBKZcANYz631dUKT8",
  "key19": "2mMf871r2Z3vFct9raADMpEQYGnHUj8pYF7ohre96qXRshZ45zKjvou3EPqqDXBDuTCArqR3w3ed58Cn3BVBRnm8",
  "key20": "M3Zaz2Y5d4FNhRmEtWsWCbJgXtsUVKPfRAdrwP3j3zegVxdo9xNb2URgFYZmR1ESwtZQp6bZrSjEtqhJmrsmfDN",
  "key21": "31QqVZ6HV16Ay3Tqa7Bqux52RASy5n1mFz6hz26Kxc9bhWEJCS1gnwyzhpp9xaweWVZGASGYnJAVPNa39L4cy89c",
  "key22": "5GnD9d1dari9MTsJ6iTdByRYjc3S3VYMjB4wRHGRv5tF1QKRJq4niizqWfoCGZW7FydxuSFWCqGKAccMTxdDudRg",
  "key23": "2D5MTfBNSaZMfsbUQsovdKJdurSAh1SEvAMLHNop1iGwVQQ1CpHNSZGM9LhfAmhcBpvZuweJv5QSv64j7KVwwxjp",
  "key24": "3kFZjWGUBJakqyEHSwg7qiRhjf7HuVYyvXadxWZmWETMjWtnnjQPM1KGUSoSeopBNqare9zxkriZZSE4kzAz4XE7"
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
