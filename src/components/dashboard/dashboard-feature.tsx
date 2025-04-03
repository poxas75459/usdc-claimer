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
    "XKEnbMVNrHQfg4ghJjcbTTJYMuEgRtkPwFcF8LJBSyw7apjN6MZSc1hfJnpzNovWxciGpjocgazQKFwQo9UZwtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1SxVCEvHySGomiysYW4ET4GpUnufBiw8UdpLvSsxCdggaQymwWyQQzAw9f5HBVgYipbM2dFx8mnEAWhzY8pFCT",
  "key1": "4sBq1nRwJJt3k5wtqTUajLJr6i5RANEQ5TNRjA1tpy8EXwwV2Mz6TAJozMsxrkTQLFyTQKgSpECA9A16uGARWEeo",
  "key2": "33eMJVwxhfnP524pbTX7azGRLDVXJt2eJd53hqAVuVhSnTvGG9thh9bgpnCv2KbzExe9HwuYyE8uCL314FsYsJPX",
  "key3": "K8g74UvwgM2xGV8MVEdw1gfbaigGmkwrq5WFki6FkxYszMJpiK4CrGxbPFXmfqhhaA7GqHvDh3YWgdAAhKNQmHm",
  "key4": "5ecJNufSApFVmVCDN9LT19sMFPCoUheBEfgb1xgQzrMwDzhTtx1urFr34xTQmEerqkKQ2dvdEv4g6wt811stuQkn",
  "key5": "4PR7yvrLy2xhV87JAmWVir21KkKTeMkzuwwQFVtfZo7Lu3PQaHgyhQVuLNELET72EJ2fDMjJdvfPgKkVqEXM4JxS",
  "key6": "49HTq9aEeEnEedqCrmFgq6CQYmPnzxN17oscB46AuRgQyaocXtwHumcNeUNV15xp6NFkRUr9Wi3BF9ED19fxhYAe",
  "key7": "21b4JAPZbdDKegZ5a9WVSXamerRxGewZT7v3dx8Byd5727fFTnZHbXvGdmAGqPykcoigJa5ARj7iUvytxHua2H8w",
  "key8": "61rc489HWTgFYVhW6VzVu6me8Rvy4kvsaSp7oU5L8JBHUWGJQo2UbUescdDc3S9SADhGNajQsqwJQ71pcWvFg82a",
  "key9": "5DpjV4QgyFYRjh8F4iptYZRjdFTf3SvBRmvc23HsiTUP9GbT9NJeWfxLUVVnSQ8Foii547gJ611ZWVXhkbyuShjq",
  "key10": "2Hy6TnrDxgQKpuf7YAfPSTRCp7af8m9jSCVSQaBrtE8wFzagX5jYbgjRUiE4GuMe32ctuNfpYvyop6outFS7N61U",
  "key11": "2hwu9HLGYpUztwUHu4L6PSnsveUsL6wTMLETKqBs4pb5X1usmbFGWP8Pu88oiy7FCgjPKGkcTKuA2mLztbmvqHcE",
  "key12": "32cTk16i8VMbb48KVFQxegHadDvpbCTNoFPD7W2fuXtdD5xBZ7oCRTL6N89NwU9HMo941eKRadZpunYWkmfQc1nm",
  "key13": "2kChMd7qe4LR9QN8qk7a9ugUgqVoKdjBMCp4SxLypCcqAMcvTXqiiw4XUGKtXvYNTJfdtPhkLQEPhtN1EmjWPhve",
  "key14": "3up9zqR1kk94P4BcmNx9CL9kXeWLPZ64fzGmErCUmVwGHPQzoqDd267CaPFV3hWXGF74P3LQpEZTr6171eDCr5ju",
  "key15": "4BV7YtqVe2LBhA6SckMY3wFNWgQBr3hyHSfD1S6SS7ko5UegRsRGEUmz1HZ4F5cjUmBv3amuusYNoGJX459CU1Ta",
  "key16": "2gpucM4y2P8t3MJZTnksbUJhzTNdwpsfcokZ32DSzGNRyoEBqptSMXqAm7HMyE7L8CrzV3xam7bHKLFvLBC3U56c",
  "key17": "RhrUGnQHRFTmqLww9nY4mJq8aPNqsHktW4MUqKptwVqcSDVdjxJ5Mv5K4KFe5mn7ATtVbfZw9ZYRBiuLQq2PABy",
  "key18": "ZdoaWjKF7RRirVBPxiwcT9xC8ov6paFMJVFohdxqzWP9JkCeQkSZthG8LqaH53C38X6u5prLohhsuCbQjoCLD1u",
  "key19": "2zCzVAEt3RYcHLNDwANUUTKvzGhGa1XHQZHredFEi3ZL1gYTP96CVEroL12yVq8Yrc2mav3YXRY27kAYD7iWPCVJ",
  "key20": "4RFixzfsUre3q8xzdimavd2fafJAsDh9HQMFfiWuJKdPuidb3zpJDxHL8cQbKEvafXZNPvh5mUitvKPFX4156AL6",
  "key21": "3Ub3NVJCp7YKmWj7GjzXftS6Nuzc6VgUqSgCjjyN2x8A4tzMW7cB63FeEQwhiMr21z8DYiWn4oomBt51PHNNn2o2",
  "key22": "43QVtah8Xz2VWSbMzXZgWk9Q5PNncf1eZw8ccj4qNvHcKeJyDhVy8QbALpBneLXydvmzt1867hqqtDnsM5JYuvSc",
  "key23": "2sBSfkb9hks1qXc5xr1wXC7bHwGu3U3VJngcXVd1j6fye1uu8UABh1X3ginbBGZ6GwhJyeFEvQqvDACDMd5nUPSh",
  "key24": "RDfEFtbQsuE6oquYzYqbrRLiCgsgSzyjDBNVdnXXZWagZckoXrPTmqkccxMGF8XE61wjsZY4t7YEusPRUxs8FQH",
  "key25": "36PNLfbbRSeoweGBqRZzsH2EGV8J9xQBowy9fy1K2bbE65tc7eKwW6J1Hi1bHNLo1b7qB1zGrQtJNz1prpwP1Lya"
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
