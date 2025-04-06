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
    "2v3C3xdMaS6neg9rg8rREShwwwrbLoXadXHGfmA3Kqm3ZWmPKrqwcrUkKpZrUk3fdUKg7LWrzb8PmMAF3Pf2ieJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m53be9Wjox7ccLQKqpsc45Kz52QNnrNudzU4CBSoQonYk3sE379x3SXbrruox7WmiriLNNytAVF3etZusPv24HG",
  "key1": "49tf8SeCGwUg2Q96ENXbEpww4XwcrrA3JttNcSzBWVSP5xwG7yooZ2qN3YvaSuYF1QHHshvHYc5s5msK9zWMN3fN",
  "key2": "3XmuFsSVaB1pMdvzTFCfFKj3wqqcwsmRZvovVtVYLYRzsy4amJZ9JSNDEX8JCNf4RpYrKgUuWS9U4g6G2VRmPvyt",
  "key3": "5xuHhzHNS9u9iqoAKrAcUovJNwHEq86i43paqtU1nTaqmZzYxFLPRWiQNbKnUvrqFscDigJmuDS4JTy3MXZyevbx",
  "key4": "65w9vspp1pkz6o3qghFMiDwdP3igo6WjzY791Psiy6gDcrtvGdUUHwcXJZBvQYx2mQ6Asufgakg5go9dr4g6G87y",
  "key5": "4iBhH6bQRJMzikazVjn35rKKxQqbJQz8eV4cVTrfqp4ujBnFLbDPBA2NyRudfD9yQHTrwqgjJkywRe4htvu1TWyR",
  "key6": "4TRaT6PPDjPgDDtLLd8MeFiqpz6tRLrF4MWuvM5Er3LkUmwX8AmhnVjhVQR6GoxmMBmGdHVdv7UaoBXeA2JQWXqG",
  "key7": "5U9empfyoriUb2a86ZWZxoYBwBTZJMEyfkqBoW21jKx4YykNjB8gz7um3abdSRDUJu6YoJfQzwhxdSW2jsVfXWPj",
  "key8": "2HqMUaT5fXPLUXWvfN2gpH8DXuuiahrnKE48Gms6hzYSzmgnnHY2Y7zRKbFaVBWjZjkkKEyRPetrxkJ5oqX74LqS",
  "key9": "5WM1CT3e3CfDKtGm9e71pQumxyNvbZaW7Z7ptBf7SqoF5qQ8yxi5LxKqAgNiKbrtTnSa7mAwYxjKRmzf7xWQvnEw",
  "key10": "Y1Sowi8ZeaYseHgu32X3eUmrn5g6FdSBRx397qRyB4iGQtTRFxfFjyCzaY2HmjnqTqVoUAezdAPoHZNWeiPPiAV",
  "key11": "5UPT7xTAgJAsbQDeKktr8NkDMWLqJCmmoDYykx5sXmvAXkMeptytGP3z7eQZVN6d7G2ADtVcchZYAWadLATE31Hz",
  "key12": "53RHKFNramswonDyTCFTJ4bcFP8SWhC2VfF4Vqv4SSmuJTfomn2VZwEqFgNBb3oVMsm1FXkrbF8fBeNKNMPG9A6Y",
  "key13": "3xU88qm1ZHzUtWnzLUjCY6MvwMMU2ZCh1AQKJHqtkhiAQSgDpFVdiPhCANnhdp75SJDdS7nqh34RFSecgE5zYjew",
  "key14": "52bMMY7XRrqkgybWwMyZbN1ky3L8tmFr5TX7cuG6zif6jUrRrmNZ9xgdEBM67DnaHgBGoooxWLNBDcGHx2fQqr5d",
  "key15": "3DKmDvd32zUn1Phfh5RjPeR5paHemNiiuzoMwUp6LtDoK4MYCk8WuBbBqdRpnQUxFwGEGqzC9VB2i8WnNrHW2ZJp",
  "key16": "3p5X5gAUyv5mmUTgWwfh2UowztTGVvpYsFowf66N12hFYtvq3rhRswZrAV3fkXR9PsbnwA1b6Bg5siyJ3TQXQm9q",
  "key17": "4Hg8PRM5USvQvbMzv9YdcWTsTqHSEmJN12KhmnXgJUwDSsRKFpFaKELVHZt35MghNJHVq2n7SXghcoh8yRdBKiCu",
  "key18": "22z2bengxMUsb4u3eacuHyry1cA8MGEoJmweb898w4syzfN1yUNSsm5irpVkx5myTVpBjRvMvevYEqFPAp6L7916",
  "key19": "27FH3h6hVRYABDNtLd4DzDtmcJH7MgvUoh2yDGBmEDeEeQJFzZBnBiiCQRUfzZyzbWTWYkeo38ToPnETaC62F7uA",
  "key20": "5PDdTe72GTH2UYgBov13VpuQQ5cV7HgRbKjkuxuXkrjnEjynQmAtrHAuVEhcmo8JAC2xetFhczSJZnDhKC51F2ki",
  "key21": "4kpffNXJG6Jj6mHmFCJ8UeU8VEHxvXMzengtMR7kSyunhqz67ZFQKTvGGh8NBpiTGPiHNvkjUsNb3zw1sCjzfkXr",
  "key22": "2fRPovoJ2uCnkDVTVJbA9oqsXWDbZ8JSsWiMphbByYvnLGPofRZJjAK4Xeb2uQtZcit2sWTJ4JEEDfqC8zXU73n7",
  "key23": "3Wb4aDjrkxBPkRadDt5mNGbDfbgvh3YXxpVpznV8Ep7WUifDXkNW6YBwDYZtAYUjkv3TqMZcsC2nBbAQzhxKQVSG",
  "key24": "2wY6jGb1QuqQreCiChiE9oaAM48xfQydnnbEQNTz3pEUaCLSLqfaip3uHsHVPBKy7eaj7d5jWJCurS1u8wQyqHKp",
  "key25": "4MkbKvqpvzNC5VkG6j7xgUXNt3vjjCgte2jDt9MhPvqDLz8fivnZEfdyGPCLMk7y6hrTDaXGqCGfkxXZoUZ3aobX",
  "key26": "4f5UhFtEBm1Sry46cnxBCrk1tWdju1Bkb4wvcwCpVi7WWNFJ6EXC5EqrToWSFbcqUuKnMBWTvSb3d5MnsXJVwABu",
  "key27": "5sMDxwrXe1osupGMBd5JKHdn8wPnSuMCp6sPdQpjzPjuCeanePHJVU93qKnHGKZ8rjE7GmQqVFzFcJRyt6g5Xb1J",
  "key28": "2BCvAsCcZsz1Mk7d17dhzhY3o9CGwmTUaBiTk9U7gjNiDhNndGbj8xhJGSxZPUJBdtWBpgWpLJciTBtuTqVk8S1z",
  "key29": "25mPAsVGM4em7uctfjYqRjX58fjtHM3mybJPkk7TbeHjnMnWdQz4EdMqanpj8FC1wxztfPpKdwcDFm8VPNaLwN9x",
  "key30": "3yy1tjrgPv4CuSieoF7fYoLo94Ku625v3ACPyzRQtSaTPbCj5ABQPfwaUVKssYoD49pQiWCqpDxBQvxuG1njayta",
  "key31": "2pmQSUK55mfypAewpbuWahJAp1edBMiVWTmXoLsXWHAruty7ngVU4zV636XUg6Qsdmy7BLT82prKAQu685AswMav",
  "key32": "2HoKMzbSirt9ZhVyzYaijngRtAfYjnVA6iVNqtjHtkHgadEpEFuW5LV3dgdBsDqR3QQDtd8cteJfeHAAD17qjgAQ",
  "key33": "56nWVBp341k7DZSoqy5des6R6GDzsaH59jEMhevertnKJxFgUBVcjAgnkQaMbsUF79zNnoj2J6pmqqKjcS13KWxZ"
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
