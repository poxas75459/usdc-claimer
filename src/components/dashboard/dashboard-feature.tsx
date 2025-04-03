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
    "3qrZ9dTuZtvZuSYxE929e5hBgKK68YTRUPcrFC8Xkr5tA22Qw49RLhRsGxiXty69Yzy1wTgqtNTFNpyFKN9zdj5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pmjxn62A6HgDLTHHFNYpBpZWGLApafuKidwWthZ2LUvfobuEKRemLX16MavKMGw8XYZbqkzQyb5DMXgTDroYywW",
  "key1": "3dS2Qhoc3NAh9AjncvPDP93W5YRjskAYafoXb464Amrsupby6JVDF3kU5FuCQaiLTFifB5D9qNvBaWVh3TBd3Esg",
  "key2": "2hewPxJ72NKFDuLmQDDPkkGS5XeFHwFRQRMg8BtkxPi5cornFgono5t8wneXAoQhSZPwuMe1GJdxULP8xUNnWVBM",
  "key3": "4wZgCL74TLAnQV3sUkmR18QooSTCDaxTVEjLaGE5dW3UJ77RcEzyEeqdGPTsLBiJG5KhdqbJstLMdwCzduTrGoyX",
  "key4": "5Fc4zXf6cLfY3EJ7s1vqkDh7T3M9Hw4vyzpmRcLosXirMj4ohbkusVt5QKxR3HNNXpQsQv2XNuPHRAguaweCVSW8",
  "key5": "3kKUbU7uQ3vvWVqm2WR2D4a1d64oLnEwyds2zfPtvngyiAV83eP86szRwPLQMh4kRtu44E7Ukqt14iDwE1uqA8Ud",
  "key6": "4pJPmbHtkhoKj2bwJASFgS9z7LMHY8hiSoHTwitJPDYwEhpPTptsiPpuVntZ2o7zDuetFkBobxNBXCJtqzdXHfPc",
  "key7": "2Wrsyfz2rwx1EBji3FgvortF85koNJ6ShFNjzTbezD64zDz11WrDd6MtxvbuRSh2ojsi874ixBA9zPRJMXL7UwFJ",
  "key8": "3YEqoEDiEoqMFZYeStRttWLUqu7rcXEUykVpCMJH3XEYdKd45jrGHFU76du382RgJHaFeSkVpXxW4g7nqYMGABk9",
  "key9": "73nYE7GdN1CAGGw3xrvb944XffK2A4JmWYi66f22y9PDxr2drLLVaC1dF1rfh7QYhF1Eivq99p66DkdTgBim24v",
  "key10": "4AMEWnCrNyh9vHp9FvyAX4Be8Kvei3EcexfAMcJp2MgyhNgvc8oVpPGFyVyQFWhVgspdtZrZJ6XiG2BJd8AsSPmh",
  "key11": "3NUjcAEs7QkxPVW9vagdrCcJU3VtJmShXGbegTyGSQiJbhjhyXvqPCZMBytA1PyKbq5HMLXvmnDwKhTJCc57dy1E",
  "key12": "5Y2Jz9DFcroH9emCVjYwdbaCoDauWUhQsCeAfBZJTpJfJkK8WiM4PEBcxYtzVSt4J9pYui9ZA4Q4aFEqnr17ycrp",
  "key13": "4kazPWmamByHuVjcwYGXZJ8mLtXeRzXWHkB4UxmRzrunWGXAwARAHNqihsSDidv5rmKJgqzv4t6hJ3wDE2AJAqEy",
  "key14": "5v7REvpjxRSrujKPXjidiGjNytaKiMqcrdSbFRFvAPD8UhJBWksVdHSA2ks32BTeNQ6MEuroSRqLwtnxV2yHmfA1",
  "key15": "5qQxiCRCrv6pWRpCVM7KTtar2D4qzH6mZoqVs5F7XPwwq1woqzBz9AMvmaPiMWy6JkZpKtbnVexcp41GxWxacQjJ",
  "key16": "552CPQBEmbwAZMLhudsh7McwySQznu5WYj59s8fJ3bu4XVE3mQpZWNhgFVYYfMh6nSakEdJMfp9b7o6UFxMA3av5",
  "key17": "Dk785m8tM5Nw7GqqmmeENiBzXPhPuLcuUwKMRCuU2qThyA9nkcym3KmdxdRRLtYBM2fqnFwqwRRX27g92B6cKjJ",
  "key18": "5CCdYWGxX183AerTPc41mHQvf6tqnnzcvGpUbS1PVqiXcxiV8MSxayNytdevAbwyVSZxyRez3tYF1wdLPDq2oemB",
  "key19": "54nvkkct8wASwo7aFHgu5XMEXsDZNj7QiAiXUmHm1FJVUP1JiQFQCY2NoHkYvzdMS6LNKgAVWeAoGJq69dVNMxub",
  "key20": "33P8PGmRMjUdhHAs9bCpnCVP2jFHctCjc68s5x3C8Xob5iGxJjuFdgeACUx63y8AmyDmnvvUeYsYjxSbhfbGNvgs",
  "key21": "5EPLUYBdYEtRXee2eHPDzJmtaKpdZe4m2xwBHi8oiARehbkSFJPvWeCQKfhceL3QwwJtewXA9Xsif9L2GJDcPr1r",
  "key22": "2Q3dh1gfnjoF4vDiwmB1PthoPRZG26KiqmJpMQM8WNWSzjcoMcERc5GG47r5Nwtv4hWxa8SXdLh373WHGkPJ6WuF",
  "key23": "SwkVuy2yJsx9SKJp5FXvrdQW5Reey5xsenBtX1Hqamg6pxPt4iuvRuKA6kcQBGtHjWcdCDqxgZRNZgrLzBgMRXv",
  "key24": "xzaH2X4YvJgmUoMrCKZh63n1ygdL6PvqM57vEWr5NkZJf5hPSa6siEspADuxzhtEUrBDwvdYaQfP5PG7NrX7qWY",
  "key25": "43YHzPrCYdP1GVxgXzhbuWCihRi2aJVY8hZA14Jf78FQLw1YjFhmUrXM1qeWur4rgCZYNhBrXkz4eYoxg7juTMHv"
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
