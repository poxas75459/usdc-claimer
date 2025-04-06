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
    "3eykvPc8B1XF75hcvRQnp6gdodEYY9pHMNZkrtn8VYBe4xRWX8LMda5TW3KJKiPdjdwwwGUdhWh5qqTzHQh4j14Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ddZrSSxTEpRT5ZpzxZmCZAvbX3qXFzoBYrw2aQZXDyKgb5GrQEpXnxZPQsQhXyL8tpqGr7oTULh6Ga45T9mjx2",
  "key1": "5zBU68spLyH397z9Z1tk2m8XQvEjPz9pHxtp5x22fmiosoXqXUc5GGsvo3MspRqYexEk8VqgUiRRq1iLpKhdYmiR",
  "key2": "zyWh7c4NKH7U4iULQ6pnpdzqKGRPtb4EP2KtwwaXFZx62zFVTYoLnS65fvCRkJxwbQ5PasopXj8W7aNJGbKNNq6",
  "key3": "hG9TZ1MWqz7K49ZvZC77zzecqJje7CPUVN7Qh1dcCZQ8fmUM6AfeDT5KYCJWpRFfh7AVCfVh3iuZPRUi4ztwWiK",
  "key4": "YuJJup4HYQqg1dsD91dXuYKAA82if7NRbcjuhWHibFZUoAbivuNhbZnR5KmuSRhGJqJMhMguzbnQ8QUHMsXwL71",
  "key5": "2LEUoCV32w4gU6JWiri2GgiBHLrpeJk4QrD6k22VQyuJk22LTUeqnxwrA9cyJWwpxi1vHfqTEN6iQg39fuFLttJB",
  "key6": "3fNQgaS4ZDhD7WcJSTY2V1e2GKKagzyywJEc26y4BHByLxsbjVCit1bKk5fGz8PeEWgTWEzpbvrhT4wvd982Wiqy",
  "key7": "4HNHY4jveGS8xsSq4nxXvBGgdicE1GLXGGKybgwC41PML4DqjxpUeUwWDvtbtx8tnu1sAM9qAqxA35x9YvtPokhj",
  "key8": "aQT5e4RzwBKFN6s4qCZJi9LbBfC2BVUGqj8EwRzW2ZSC31BZCTZTMPRKHiRNhvAhEzCma7pfMTiW8fCD4StRKoz",
  "key9": "56gVRiTKu7d5S1jsLBGHEM36Tdcf9ogfD9RB5M4GUZHLPEZuBm1TkdtQNJ88JLAm4rMBAzBzAQM1wmyjZgeRGG5",
  "key10": "GboaKtX7ZyMhBsK8SsQ3TMsNFUcmUAqbcbcLRy6wTTPt1JYTno5bMY5tDR3uagacsnLZBJCscyMZAxAwLbG6YnZ",
  "key11": "drkUfPDMccVwhXrxtSkzd932FVdpbANKwtGWYKs4Gmb6gjJyKAb1XpVVQzLXBajnq52aH4MZLjy6c3RSfcRQEgB",
  "key12": "48D4CkvJWB1wCFiDhCdBeMbzLTNn4WDgBbZNKRg2cfAU8o8DGdZpkn1XgXdwcy9D9sY9HQ1yE9QnSQxuGGcotRMu",
  "key13": "2vQE1nkoKEjGCna2WUQmacqDJMECzjoVhYDxro3F6ojsYp4FP2fEQkEz21tVnH9A7xiQjCLJJjGf3UUEevfASWXx",
  "key14": "3qrEdLdQLjV5E1brHLmGGRp55YvAUWLALsQLUuJdAWnGVduXQ8cUHxFx7jbDCatzQw43YpZ5fSqLssPfLyW1nEJR",
  "key15": "2e7qdD2v9rWKEfJ6Rby11rJDeP16VQEeNTK64BpK9Eu8yc5RgyNVTADDMaMiYCma3Ekvfn7poHBJZGgeYcCmEyb1",
  "key16": "4isFaPkjk2mDpfExoPKMdWLj5FoW5JR1EQdb2dm79MbcsiKZdRjCaBTG6Fi2oaLGsLoAf2r999CPTaSTDhFcmuzi",
  "key17": "ZHznJnhfui7ukkSrAiwEeqNLmz3XNxKuSxFUzNMsGxMmgEL27vqc4YqNCvSB5KVbzWKHK6iYkHN5CUEtEGAS3n6",
  "key18": "4D9ftJjL3iwevFTA6YNPoxkQMupg9jVvwq5MjWQAtLaZBVU2e1KLHmZu8TrfhbFdcVMFm6AWfER4RMg7Ha1eumKC",
  "key19": "2rgKnzHJQuTsrRoZ8ywuiPFERSfPAzf2whBv7fffxSW37iJQdnW3VVW2HzXKQFsnHFvsTW7qooXgj9QuveH3gNPc",
  "key20": "HzNh4LFmjQq6FbD5pkEttEwwn5NJo8yWFp1N8V82SEuqz1LUj62cBPLkfxfpe25H9oY7kpXcijFzfHA6esXXgaA",
  "key21": "2t8QF2DgPwSNjV1WGk7uPTzjukAbax9BF7BkYxkp6PDWHimVbVW1JGwF21TW1UqFv8Fd98d77Dmzx4h8Cf9hTjdw",
  "key22": "2fi2L85WznzHsDRfGBb6Q7snuB2NeZqd4HthMMT2YDYyJyjEwdE5t3hTgF95QmCwWu24bFsYqPHZRbai96nMnjY6",
  "key23": "5hWhc7cA7A1t2nxLcn1Q2TUqtLKk2Nf7TPqtcJ4rQtm7nHNowusnVpuKVb8WEqikpSmvBhTioEjkQcWHmQLNAmto",
  "key24": "ixEw6VyxEwofqGQb8HxxxoCoXzYd9aQbXTDyERAwvvBg2vp1BRZYWjSHE7XzXcPMDtyG8N6NtigLnYV4Snztzsx",
  "key25": "4qQcQMa2My8KwPKBGzZQPzb1EGUhmhvdPzCRR91Dkp27g4LfBpSrnSoeHKTruFrEyUCAwEe8XwZMbU6zoWnqJa3n",
  "key26": "2MPjgPGjEPaCRRheNvQyULb9jGGGo3UDynGu1SsCMgn4RQQfLXcfhXPoziAZ4rZ6H2W86VtLdA5n14CYBeBWctLT",
  "key27": "5dt1sy41MRhs9AoJdaPhwkF2Ygq5FPRnmE2uW5mHd1Qp34YMdw9NCCofjjHQqdxWxjWvcfb3urJTBbQFzHLqeQEi",
  "key28": "2PGGVK55sW5a88j4UrEvx3yzEAV31WrLb3SzdEbsG58XKgUxesXxjLEyxiWTCRzNE62Udhubp3cF9gp3i3zbANK5",
  "key29": "5JmQk2HfPpoLWZ2xM268JjeENrCPTaTrRcDRpRUyiGv1CngdU8qDDpDFFcYRPBcBdW1Y1YsirQEDrRyZkuXiLW2J",
  "key30": "5X6KfjupFyioHFDLQshgi6CJSHMjnBGfDarnXQuGTpx4usDEoHoaEPRszMFEFCbRWBTPGQ7Grv9BTv1KxyAGfbXg",
  "key31": "2bBmeWJKkmxA31ZRjY5TvRZGLcgrwNncWct6HgwYZrF9LEqY4WpGJRVyyHAKXs1dFbLXWykyHKLhFqgDScqRu8bX",
  "key32": "39LbTwTBwn2PUtq3Y58RCQTJAaxSgUkcWASoFLtmPUYmPCnN7KR9AzSjMu6hNND6Bkt9b1LjmegWSzpTftk94UiJ",
  "key33": "3dqe4Hogg8BMhWpkdcRzro859T2VjBnRgHdGoHxwBpxg4KsoP9qRTXh8JeGJ3di6psDJyPoUr3hwmBzBFUXxp6Wb"
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
