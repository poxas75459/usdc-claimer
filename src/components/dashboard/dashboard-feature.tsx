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
    "3PNqRbfJGZiyeAZL9WCjGWtZznynuWahCaN5itzwSUmdumnBLGoQad5wbUNPPXXdZhhg9GYsTQcykEkJ5VzoF8v1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29FbNeErULa1rBXLv3qwaPA9JCsUHzpN1iVBortyr9tGny28ZTd71ViWhBF4hyVvYz39qdMZ1FeUZzFc2JG3KbCw",
  "key1": "41JXYenPxHTzMeWxWBEip48ZSsbeUx15kBeRcJrWFtxAdr69wAUMfLXUWiHLBucWUTExGJJWJvFGRfkpLiK22wah",
  "key2": "5swMnjJP5e1uUU6qkp9ZafkGxkYKaMvYpSf3YahM7fnd9C2cHWLGQcNjywhfXrxwN9GJYr5YAqpnhCuQUBBaF2pC",
  "key3": "5QgQbwRVw7X19EfAfNPJwcBkt1zPSrZexBSP3HQ1ufFfoCNki4xJeCGTRzJwRsfsr2zmwxoRwvZQBNgio9diXY5b",
  "key4": "TV9BRzyidDvn1MSJRAMDty8yunUDwAyZe7v4nvoTmoVhNAMi3t3SWQjDnvk3244kW64nz3dnf7Aeftrti85wJF9",
  "key5": "4UpMVrhtihjq6FLRjBWEp888VHUE3DoLeaxFTDAYDjPbnnY6sFg3xB6t7iVLefXwKbTASTQLZREFZKYDz5FFJWUK",
  "key6": "25x8HFpAwV9BkoenVcyaFcub1gxGpruF6cw5UKpCRhZhS17irAaaXz1VUPP65VbUAxbyXsJsiR5Jdcouahfx3cTU",
  "key7": "4wN1Nm85L7daZ3wqiV4bGijxWvaQ6Y9XTjVsLaXrgUHWwqYUfoCDTUZguumLqmbnD7F5ML4JzdumAzsmCrkhgL9m",
  "key8": "4y6kzjaJh27iv8YG1hRefcM7WSHeZc6wHAaf2kXq53U88KPC7axpbY3ukdcdw26AyzsSjY6xxjmgNGJ5cUvJNh7w",
  "key9": "5HYjCdWT7eMvqRTJCKMMw7hoiJ3spNRA2SHiZwbRpjtF9kZQCm3DYp6tN3CunczxTbWRyKxZ3egNECiEBG14Dodg",
  "key10": "4KpqHTetyjcexBPUsLWjWKBsynY7bdPUdDPT1WgYux35ebxou4xR47ZyzH4z2AxgLSoQbB5eLAeCrbhh3rzqdq9V",
  "key11": "3piVwGrDBBrnnbkAaqqaxcwXXv9tFWMAWphbXvm1PGYdDrzhvYT3Kh2Y5Dz5qBP5mg3WqhHjBbg2w2wBjmtLZvZs",
  "key12": "4HX913JfgAqeyS7bwCDyw8mAzurvqWQUnp6btpeuEgNSqNADomMStg2HDEYFsRKECd1HuoefCFrqvydP89ekxtHi",
  "key13": "3BMqDWNhXp255Q8R25oWsqhsdvUtpVAz24uxRb7Y1eAT8XAwE8rktUS7woPcqrR7gCwE2xCRmrYkboMfJ4zha4ms",
  "key14": "4DLxCDYdv38UXsrkSu4jS67Eo9NuXUQswnDWu8dnW5uCSFqrvQi8UQjz8K4iNUX3EiUaE2AATVmYU2izvzi7sQFs",
  "key15": "ED1pA3HgL1uaScR2g1JCiqJH4v7TmmJnE3XG6sBzgxEiWApo6151pjzGmwZKjRDgSYha5xUPCtEL3oDfkDr1Fn1",
  "key16": "65wyt9LyXDGrbozR2Hg9isYsKijKrEaLgpSyMFbmT4ms7pSqrx4xPb3hM4qekTEmvXAPUQ6wuars9jZSq8eVh2pV",
  "key17": "3p9etZUdYE4iMSrwZ9EC1kEKyCaBHBbSFWJC72jg6sGRFzosHnVdYGyrEbD61kWcmPowVShLmUx2fV7zVqe786Ws",
  "key18": "2bKmERKftvdieJQvwpkTn81qpmNLWrZxvFoVLmBkc9Ck2g9JmKZ5xPvezivGpt53bFqo4jeVYBiZ5uiEtFhCegcu",
  "key19": "2sXGhU2UmrXXPB78J9PpLaEP7VP8bU54MGsZykCZPtAqqAUr9ksJF5SYMGsgUGnYtErJU3vma7Ea2izFN99jH4fC",
  "key20": "3nJw7EWHHx6vyA7xhfaSxdyGwb4v7oVsaxovMxgpSiZeUYoNownSxEo5qfMQN3GJ1fRz7sVm5ox5BqPLwFYsS9V1",
  "key21": "46hxFxF3v8ofa8oGxxG5vcJ39fgSA5QL78wAtDDWiXsBPm2ctNgBvYBGfXrf47DqMVoJKAJAoqPNtPPWdn6LyNAg",
  "key22": "4ax6F8FLSvdqbrWAHSySF51jikpdNnHuKPZpVwwNhwY5NYPTLraU5oojyGrZq2w19htaLRX6NFu2EnG4oTney69F",
  "key23": "3dYucdEufLKyFGcMCHzvnqX3Z9BLuKN1xpNHQhxb7KYsxDjUbbeX6iyo8QgRkyCBGyYswv5x7X7s8ydXj9UQF8xu",
  "key24": "3XteBAJZYc1JWUBojEJgJ4SDNuYUsiAa9AFMsffEaVWuGFy7epPBgaHAYDgTDVBRNabzYZhowdF1rG21Dgd6A2Dw",
  "key25": "3Ai1juBXLjiVjpP1tj3zCysxd3qjS9ia98D8ZVt2XSsMiarMiyzP38yh1co2jcHMi2ztLeLbQkioLDSnbysSaPF2",
  "key26": "5ZSAyRAATXrYDu6mEPyv6GEm5qoNk9iCsQkuqJ3EQ1L4u9YgA797MjMTnc5a8WsJnfabJhH7ZpoXhygECsEuiSWb"
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
