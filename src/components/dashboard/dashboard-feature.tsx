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
    "3pKaRjvTTvaYwzPfFWPem4MaAYnG9vGXK6J2b8W7b4ja3bWkGWqexzRxuZGvPEkru4jZfV71op4ptNBqxZ8iS3Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3krr9VUiYSsr9QaMgfkZwoD8iJiuiMTkD6SKyWx7sk1wFT1XnGKHFRVe2JX682C8u1WZ9NQCF3v1ZwTec2XFDWJd",
  "key1": "3dtpXjZTKfdtYk3EeDyR7gbnzXMQjKFmvy9JWEwbCaaDsu5bdadNJtUTwVWa74MR7wD4X1QcDEVW1QdrKjH7tocZ",
  "key2": "3mVrM9164grRPgnHyH369RyEPZcSMpGutK4anotLG2V5ixqJcpwpxmvWsSvqGDdTKiLQ4q7KLfqNN5DXv7HcPWzT",
  "key3": "4nPGkbspBQKpGCABjgHFiZEFpWyizeuHEWMuh6vQmQRPfKv6A7vTwUtuC2QZVqXb6xsvEd1A4DNgCkDah8L1bj9u",
  "key4": "1tsDxGxxHhnM7cmPssoe5nWWoBtrAYJEy7AjHR57aWRGgakxmjSKbzkoeFTsDD2dcv5zTV6b3UQ6hvC473pMUtV",
  "key5": "2pmzE2dR9fTVeKUrUBupYBPVbm1aAPbGJHr8TEcNZMZGBvow6xsRiSjzGx5Yq4KH8YpFiUXqbAUMnPaJiszybVRp",
  "key6": "63VdQefZCCMo4PP5mzx4zXrXeirnEdkGbcrGetoPpeNq6iWzCw7CiwgufjXrHSPCTPvEHHLYqh95YUdDsPfjcK7",
  "key7": "387ZpCDU5ATShHxhHNP3XhzW7hTzJ2oaEd9dwrXW6oAhTeL7cdEn6s2GjkYAUtxbfCj6CPC8igUmTaCS8Wjw9sun",
  "key8": "KpGBB8Qj2p7ybZGBZ59mCjVpgrkc5tgVQ53tyKFRga1WsCGs1m7twNrkZPNvRf8AdJ26pUnzUpQsjLDw8TVDzuX",
  "key9": "3L8DJLsuuwpyqz51FxXiK4WzVaEDGiwS49LPvQBaWcgWtTEX4K4CXD8qmeNU3y2bHjUSBmyvRqafU4MjqgXkk7zT",
  "key10": "3CRd8PP978iuNMbfdmAhX82M845fWqqhbuqL6UVwdNcjFJGffqSJokt7cyxzYcdARmVtheUvd4avGk7mGozXhpP",
  "key11": "SxXpdw8TNpk4gXRy1AHjySEYKYmpKkw8zMAvUJTWnyQXf9njzEUZnGrf9qCezJf5VQgzLnLH9UqWJiMXeiJS1gs",
  "key12": "5mmsQSeWUyDYVnMXcpfehvX6Y1wJVNSYAZGoqtz2dARENdzqE8FTRm2UZjjP5UxXs5gW4ovQEiSeSrKS6UxwDvBi",
  "key13": "X3cwNAyHeYDWFd7fyMh5hxS61MTa6ZMGNJLJAVxLv7Fi8fr9ENxjC3e3pHJyUG8HaZFG37kvtRAM8eKfbcwQB6X",
  "key14": "3eAS63eXx26jziWzSCWFrnW1bGRscajU4WTqXk346J6EWs3UJL9tD4JTS554oHrVvT2WRiusYHeMPtyrzcgLs1RH",
  "key15": "4ctmUuCk1MRPAv84ZY4AkiKWNP1Rsz8tFAygB8k33JwhRfozxuPdcEoKR7ZJRvCdPNixDktVs1nPtRXqTZAW6z1C",
  "key16": "5bQwt6e1UocLF4981L7s1RsZzTou8GDfHc5S7KgBVHGKZvhuRePQMikqMK1fhvtWUDfWrNNQRoCTixsViJCDmrWN",
  "key17": "2gLqmi1WFsxnuvAs3iR9RabGgEBMtDGAv9duEuYiHtCaNV6sUq7DFMd7YrMNgjdotB3nDTn9UmTW81DAh762GgXN",
  "key18": "3wZk2HCvBTPM4NjHPFEKCJMNJ4VBXDyduuW5Cba5SFV3mxthtRnFrJXCQk64axdzVpovKNH5A6bNVzzgf3v3grgs",
  "key19": "4vkKaamsv3squCoDT9SGA8cSuFA7rYsAu61E6aggPEZK2Y7bPcNFPNpmUizpSY1w17zwNqMLUnLB4Ckwhck6zQdE",
  "key20": "mLA3SpYxkf8ZGYReavdyRYE3gwc1goiyi6sK2LA8sXxjvyEQ8ay7ZkNiezSLKVuXDf8nEdoDw59atjiLXSCoRSa",
  "key21": "3A577YvFFoHpiWWejSsG2cycz9843joiPxA5isxZ1bmPhzH2ivb32Yyt32jsJXvcVyqaT6jsXKq51L9aSM5zHips",
  "key22": "5TVMnaAwZDnbZsH91bK72SvGKPMu3zAsHaZCfWPzds42iSAMZVWCeCXPii851ikPigiSPCDAGXXRWo8EMa9wWtC3",
  "key23": "24BrNvgbUkngFGjfWdDUPBNaH8699Jz93n5Uj2yn85uyFNiYpMMXFbJR2yij26STCqL5FVworSnz4kBt8ZnbJ8RV",
  "key24": "5c1VjgbJeGNMjUd3Kx32sL4MbW2q271NvNJgpDzEzV8gdbiPr7AWD9RDdRf4qXkM6Jbrag2kMVKNJSHF4zxv7t48",
  "key25": "3KeNDrg3UXXHoU9zW9KT44SRNDvuaLAatvH6okktUbJb8HQDWuLZn1MtA9U8TdAbqp6NpUudPF3d6pw7Jo2yznWs",
  "key26": "3XjaJaXNJhakdM1SgDsvQnJfi6HR8aNQj2Z28L2UHLbNkypv7qVdg6E23TDM6YV5xt9d2u4WU21dRPR5hUtumEbT",
  "key27": "21cp1xTVDmgJNoNkQ5XjhcfwsMxKhgjSqAofnXUkvRqq5659NKa1ySNVWFtvw9BQjBySTVNGo2M33gCGjLRxm9Kx"
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
