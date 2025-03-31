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
    "54nMjiLdwu67F4BExRq8n2kFjfxkkDEYaxiAu9TXwG82dnnuWsrPT9ehiTkojGqhv8YsCAoWkSWKusxP5i133seT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnMk34VFD7ZJLyAR3J3WG4q83us8a7f2utQmDQFNkQE9XVUHtXkf9Y1ZDwDEgK8f7aeDEyRA3fUrnbPjbD7ebWo",
  "key1": "XC7qDGsZ7J7TWvpaX3tUckjr9ZrKELd3rBRA1AGPBk8YfZJudp2xJLWk6RtMkMd4SDMbqE2KRcJ487wM6jQ92Fw",
  "key2": "5pUGU1X4YD6Rae15gKd6NE1TDFePcinAUYZNEAiQPp23AHzq5rzqXARTgo7VmUx5KJaeoTYNjNgKxKtrUqnK8j7g",
  "key3": "61KL8aT9RaoxRqzxdgMjKkY24VjBMAJZh6QQkYwafwtcJhz55NxgXHpW9hznqVcSyTxe43pLpGC7omyoNRwLfveV",
  "key4": "u1SrwjU1xThFL1QNkAdPU7T26DmWtTiBQxyFvrfg5k1CeepaPtVSco8sEoq7MEjoFfCtLTCqykpMQ2HqqQhVCaz",
  "key5": "gohbRVxA2sSRYS55NRaAgQDuY8G8AbNGoP5VWCX1m7fx1CP85SYizvieEanMWTChmiXehtHenQYDAesDuHn9jpG",
  "key6": "4cBP5wbHVMJrLh2jYssSvbFdph4nVXztjVr8qY4LxGHkWioZgwEjgcppmhovJPqDuptsUs5y4koeXx18dWn9SjaF",
  "key7": "3uFgo9txKtfChMi9f5JzZPdTKHDVDWMWr3RzL6fe8JKS1Jwv1SjEwHLBkU8nnanFBjdX1ALXbf4Pa76qhaUrgZpA",
  "key8": "5uWgzZbkdwwoWPFuDtcPnbdH8azLCW8PMjKsLGEiNDoZb7XsknL36L5nF1qLaJ4ddyyrtub9Ca4Sqmtpk7U9KkUb",
  "key9": "hCbt21Asz43JDLie8fkHuZCzz3JS7MQkSXC14pu1kmQac1ikGPUZyf5zfh8iTK79MCVxYAKd2krUomdFk2bvbbR",
  "key10": "5fCZP8ob4YYhnHiZGzZL74txb7LKhhDAhHSNZXhTt5AR82hoaqz6kt7ZJTkPR5GTRxFeTLqfXJhGfz8FR1i5bPCx",
  "key11": "5WdxMEiej2U2MQrxVqoDAspF9uSaX6QPVREQejVbisJRss4WMfagVGxQxyFv6cgCktZyEUVEb9Gfqu1qbZCayo3q",
  "key12": "2UiMR2Vs3WtXtSy6bB6H2LxGhBt7KeyPGUWzTy8zbCQk6z3puGMuGioMqeTv3NFyNvTyXhXqUUaDWLgfGNr7Jpyx",
  "key13": "2CsWnTRwYNTpMZ5e8Q4rbQ1zSpVB9Eue7SNXaYrocVspQonZAE1HWSXM4yaTRHry22po5aH3o2JSdnuGBHJfKCy7",
  "key14": "eMVA27kBsNqpQxg2Q45cngqLChh9oFU9YMKxB6PJNFsukzFQMVi1VRCDGhfeVoqYmcrTF4NqKUDYexiJaLVb1a7",
  "key15": "dAUc34xJMoGWd6cRcYsrtPNMeLFHyhZ6oezZbgCz7F1Eq4XRFwJrEvkHXKwwQ9Bamjge2S2DvWHkNowE46doqCz",
  "key16": "3Cb9KaeuPqoBsPdx5ebKmsPJJy7LTaFnpq495L7KrTsc8jCFxdSC7TUBXeM23hvfkUiwy7WaMGFz1c9SnCy3b6X",
  "key17": "5osey3UysYBU5gL2DGrvDsTeCewfPmwwdE3xSyVcPiBxSpbYDkhBFj2DrHYd7wica4bpajxsy2w54AQVDinvJnb1",
  "key18": "3v3RiUr6R1K7QpSf1VwKa5FXLzxFCe66touFpRDfe9z6c2E9HwmAN15kQV3FPuo2kS6vSSGnVecF31cTAKX9zxWt",
  "key19": "4bAiCECjKDfU2d9j1fyMnZ7pRArWMjLQMSpRjjityfP9gqY6CaYExDQNDFRCqggBiQZgXawMzXNectozjJmYffHy",
  "key20": "3bmAVSWaVKAuMNUa6skQsTCDYwHapfYC1pqCm9ZakLkKTVuv2e853GmNjpmsCHMLYPfbRzSLQpMQVHivt7K7NNgh",
  "key21": "4wEEmfUjc9Cgh6oQxrM7UQi1CJvntXkRsfvo8GNNhb5Bsn64dtADVgpgUe7fXBdLHX7PiYACaboyx7RCE4cQNqB1",
  "key22": "5UhXHq4sHuAcevMk15XwJ4z8AgoAJcAoLopYN8PubSdPNNaFycZQs1SYbT8Rx4tXiwtqnT8b2PeQ1V7HshwhKSUD",
  "key23": "w4etotBuNaTfxU5P7BSvHGVc5dmEVQFanbC6YtewT2iKJgjS2rRfowcDmRKjFEjsjeAVKzDSQ3zwDsq7mUWL7Yd",
  "key24": "4dhFP1DKfb5CPxYdCEnZgY9XN8NroFM282MNvG8y5sRguPWinvSBjZYtzDqfFxzmtWgmgh8XFH1vHv1Vqq53zePo",
  "key25": "473KzNBaJNd6DuMULNCBoVh9kr1TrGwcvbemvsFVZUQwTrHX17G2M29qVjrHkHJziPxxUsj4Y9Bwn2AXDu4Vrc4g",
  "key26": "3cxrcbywuQdme2RyTWYUb2j1e61YM13gEqTTUYnZbqT64umxpTw83CXLacRqocML7pAuTtx4fPWfmqDwHpfLSS1y",
  "key27": "4VgjHuRngwVAwG54HcJgYxeFwSKRbXduTZf5TT8aBqMbskGswqvQFTRizwBdawsTrdt9JrXCShhz28Za3bwaeUQR",
  "key28": "548RWhSPvtWTzG8TjUVALW6e5zJhBo8K5s1sFiG4N91GS3rW2DjixTEanWzwLYHdXYUdTLkZVAt1EAQEe9XNGLsY",
  "key29": "2FGRBQj79iNytb1rUTWNxJfkjtbkuEmjfmxioFqah8HBGZEgFZxupzK4xodQyXqg973qpotw34sxPBe2Ptrw8b2N",
  "key30": "3Qvmug7guFLBYThqHT6BVAVxHFE1HydF8aCNz4SKoDSxZzEErDZW66kQb9YNqiABZqUc3AQ1cmhvkDQWH3DgvPeq",
  "key31": "4bsQKSrqrHz6gL6H2GFcyPMBbXdMD4VK8BM6qwU2W6uuZJRTHJNN6WFbM3VoAyrg5jEuh2DeCxAiC8E6fS8dbxCS",
  "key32": "4kShuvX45GHF6aZrmvp2vdSEnSmc1FWnT4nasFr1dGXu4T3nj63jhaHXMCLw1Uf74iAUxw3MudtXRg33ZEiwdDjA",
  "key33": "5gssPyB2hh4xpKPTQWfQyiqpNWEmJyQKe42Ev182L9UHgDxuZqi72PgP2EDjxVPUxpDvwVwwPeVFTggSx3XLvnv6",
  "key34": "579obLQZJCS1Wcai9WefsDzGwxdqzqr3VKJ9kUMHYV3MB5eAAHJbcNfomSdKGm7EsfYbpQSCov42e7EZmopm4pam"
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
