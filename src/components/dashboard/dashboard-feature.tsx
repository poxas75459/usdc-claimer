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
    "2VzFJYzd4ddbvmPWfMFLwxnPnUpwvLucxysKov3dcB2ph2spCJx9DRX2AXc83UKYQg848JfNEPSurSEU3upzsF1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DXxZeosz8oeNPgxWByVxXe45fQ6gCq5kdtfpmKQ6G8TrkJeLd7uV5Tc3uickwY9iivAy1mETv8FT3F9kdCyrfUk",
  "key1": "3fDL7JBSV2wR93ccjKAzES12JrdWiX9Fq6ErbST3zRgY9H6ceBYg4DAgPFfdDbiQVyhCj2RuRHoqfkjxgJaBh5G2",
  "key2": "24bFm491ZpvzwZEj28yaHiW8veAHzrxeyYg1QAfFNWrtLSyFgBx5iTShBS8sA66bPHvRWGjRcMygc1nAvE6WThAW",
  "key3": "R19gQqueUsrPFAPsT9DcF5nVimeuo5SZEBU9fEmRPFJoyUWvFmohnfrGoCcN21tk3wPKZnK5LsNoetHvhH7kG1i",
  "key4": "4ogyUgkACWTM4rjaeATnApFnLgmfAQLXQStR52bsAxUeKAZGBvQ4VegmpaMkgfn9Mo6obT5A5uzSbPiLBk2kkeJX",
  "key5": "3WK3G2WQXig9u684ASstoDsnC2Wgqnx2XVq4kDWiZvv5hseverr7Cv64iNukKXZivECDG4VqkChRdPSHRJm6hxgi",
  "key6": "5v5mntQsHL97vyfrmcQe1rA5o7Psc2m27TA9WViud41B73YzGQxtnCnMLhMUZZRVXFQv3FDJnrYZ6fug82EzWiVk",
  "key7": "3WGWuCY7HU3pavS6PyVMuq2hrR7a9V1dbKkiwHduGp3scgnmjJhQBeuMRzLNHUGQjMhv8SWrHwJmmZCKD1KKPBh1",
  "key8": "z2RktACukELHo6p8PA844VR4QtXdPkhjdj9Hji8dnZ6y1fHpinz3QNAoCNc6tJK4AuMXLJGPyuXzHuKHZ7PKJcB",
  "key9": "2RYoKNvVh7k2dMmCwzX3sJsoK8WEHZ54LJcTxLZmAEs7YMYDdHGaKsLbmoq3dnJ3LmPCb2xQEck1kzMRCmDS4D5R",
  "key10": "3CozVBCJQZpsDaQxiHodYtLARNjLtUYtuf2ssM9kEGmhUHFRocJxkdYe762BhC8nj9jQUeouTcFZBj3zsDMm3YZ9",
  "key11": "5edkjHHkyBJgfLyqmn9Q4M49rnEjb7HJe3ZphALMapqXZAQHQNBTQxJcjhT2a9P66zrFXJSisLxfU2Jdv2ybBmwi",
  "key12": "5iwtwSZo5UUfkCqbeBUK1zoqr9oW69iKXQojRCU8XcxmS2xwQZSRQAwTwoofs3hKffEFdipSxqc5SvL789Uev9wr",
  "key13": "2aXGaMozkGFz52YeSMDSTPHLUwrUtqkJtxfUK71P3Mf8CpQSWx2bycusgM32jpRpBoe5EubMqR161ojwz7nEFFx3",
  "key14": "3SUxUC3UFMdpZCohEUx8vbHW3ickNGspSGGAV7FoxzcoJfggFHt1Bj8w1RpAToPtGfPc2xkxDrz9HXbWjcaS4heE",
  "key15": "21wXDr1D8eZdEi4BhwS9M6RX8MuiBiqAmzdfGS3SU2qw7RFrh64tBuXwj6d76FQqtU1zi25M4TsoLxTgUY1WPGMD",
  "key16": "hkTqRFbL7qsKYTTb7cj8fnNNfDig5yG2E24tVwmVZDHw7dMdvZhTgwBPEMYXKueDoHr5CSTz28VtdV4zisQkjav",
  "key17": "5fcB7KKNRFA6A99n1VVrpFGQ9bbgh24izvQxwpvpyip6ythQYkqFC6JJo8vYCZBMMhArqwvf49q2pEKGT8UWzbmB",
  "key18": "5QVMTGaBqXwhLVoNRShXeWzwqtc2J345oVh6LmdZ4xNrEovoQJWBw5JzL2EfpK2WKHTYmMvwkqHzSQTxBqQXFcQh",
  "key19": "e1HPwoD4yiZkXWjb1KqHvpZRMdVDdy8FepUFNmLD2cocpNNczTkoxjDuBmpzjmu3ZiGnmyRKKGSWZahCzxGRpfv",
  "key20": "2GUoWyQMujruaRsqj1z31JDc1fyHgNwk3CiP2DhLRYZqaEAn5jwu4UWgK1beAVwLno5jmHbJcFoGsc61LAG42gRG",
  "key21": "2SuseU5SQL7YCMjaSFYXNv71C31RsWzQdXTJD9mFCV8GauChrMJFymJEr7icZkoGxsbzsZp6YuE1goXay5drBVY6",
  "key22": "XjXBMGwEMA4X1R78u9HxEbTt83XwFQMsqGoB75MgzZmtoqiTgdrrXnuwTZThZe6WaYvCcbbEUkhjyqNNof2WyDh",
  "key23": "4QuzDzWu19xHhu5D621EXQ7HX4X6df8UNvEtzmbrA3ogN7c9qe8es117qtFTGwg28gGYUtwJq3mdL5fgPHwL52J5",
  "key24": "5z9rA7rJK4ZEZkAGaR8oV7V4kHLMrxSUQjDsWKqnsQPA6ZrmALDPLkYdMZW8fz1heB7rSSbxJgUNbXo6WQZFarAD",
  "key25": "35nQv639mCgEq9kydXrS4paMMEGEBBTMY4admYKPFAQa5eXmEjEMPbA8s6gWEb7BwJ1dK6aDcEbnqtedVf7xzqRF",
  "key26": "5nn3GbV8Bj4bZ8yfsCCaawoUfAYVy3iwvcrNbdZiLxUBBpFW5iXNC9ae4PzDs7Bs28eVDkPXcPPCpoomXj292A3B"
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
