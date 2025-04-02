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
    "4Nm1iiLyabp35gmbFxo12M1q6BMBpDtbL7yqNxapJX2oxrdBCTNbycrWjRvbgWV5hKqdq6EZNEDWdp3NeZAVDiL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CCYbHrFqFQ8JKv9Pkm22NPZGJgU8H3yvT7zbgrt1aqLRgHXZSWoh8VMjXVhBBHxqjW8GqQt4WQ7ewy8RDhyaak2",
  "key1": "DPoAHEi7w66vm6jcASVEhTQMwAHavs8CfZkzjZcFLyBH4UAHCK6C5GxVgwV6MvYcgJVZ9bvoowLRBr7xjqAtLFJ",
  "key2": "3KkZdXn7awqzNDAWWYvAwyi5PgV88L4nBob2NB6ztuauMazomMU3z28GDDTDnN87gSeL5vxuB6D7BBT6MWP7d4oo",
  "key3": "38LqV1XtTFeXCnYq7k4d3XmHK4Cqc9qWsvgt3vG48A49muicVrU7s39qS1fDYtTNSdX6sZShKZCmhjqA6tkKPygX",
  "key4": "zJ18QAxuAHUh8nfrMEhetAbqv4rNdN2gLmtN1Ep8yR4MAhXpdXX4wCZbbK4EQgLNrbmEt3dRTRmq8PhGmrNgAz3",
  "key5": "NfqtUu6t2qmwf8QgoF1Ghn8Pw8tGCGapedXvBVpFS3kn9QcKaugQ6VTYjQiZwymhbRnmUR7YDc5Uz1LiXWoAtVx",
  "key6": "2jaMMUP53mMtuQkzqzoFpEtGaLFUrStKykcyq7N8CQyZE6um2bJmqYDGyqKCAgrssfGbQ2WXrjBFNUuHjqBEd7wM",
  "key7": "45xkFG1ebUFiqGXEX4oK8HQyfeX97yNfP6XrYfSQkxLShrbopXPUkfZawkHYfstqofDPWCV7aZnqor2Uuf3GD8WE",
  "key8": "zE4kGG6Es396mPDiXXLebwrhjVZfYg6yfucm4j373DqgfFDAQA8KKFAb6wBPPTAhWxGoySR3ffjTSAZPFFUzy18",
  "key9": "3wc7yFRC3YWg2xsmgecuhH2wshyyQAtcTnriDGRnujC8CjRym9uEUXypmkaot8fqTWuuX7qrRCNS6CYHWzt6Ymrd",
  "key10": "2xtKCSdYEjRswZWbZcVCyzos72v4th8f4JnhU4cp8vh7L8XnbvrzB7YZJJMAQNRm6WvQdcBVpppt5MjpirYafozv",
  "key11": "4whuuUdcCdqHMwDZ3fBi5goqmA2rtH9GKqaJptGjUDdknLGA1z3e2Jqjt7xrRogWDAzPzjMdbmP2cj1oZ32Bk6Ci",
  "key12": "4d1QYEoL4a47wceqXL3ESnuPCBZfEsUsPBYanXcCBgbFBpJbKfKSZGkqPw5y3DVqEn2Nxt58mtxSTPSrNdKLsSi1",
  "key13": "njPnnnDokk1Df2uEi6vtQ7sJP6uPmjCGT5FZj6vo8LdhgFhPvhBUxmPAb3J3LPwjdbzactH4knFjsGVvRsnJeRr",
  "key14": "2iWqmob3WHpqBFBU1vFtJRNCw7in9BcziCRXPq8j3uVQUgaYJop5WM1tcs5ZgG3t6w2vwnteqh39UcTGUNUYgV5C",
  "key15": "43z5SkJuBLAy26Liezea8uGK7u8ENUxk8mpkppV3fBPnSCHVG44x6nNiQuqmNoE5SHMP44nHpZukRoMxYz6vZW41",
  "key16": "53PWWLbBpgkXfNVw5Tnpq98Ka7gPWEngYjjboDN9xwNNgsTzJk8PPEhtYK3Z8Xg1DkZxK2eqnwyd5X9SWNubbBXF",
  "key17": "36Mn9BR4SL54Pprpc2MWK6ZfiafH8PnqBhEMJe6WkRyPssL69gVjyaxeNY9887TV8yFvqtujSRL3T18d5bymk73C",
  "key18": "5L5VwDMTpqmkTVPnWnz8DkAPom34hm115CCrcs3Lu3iCzSb72NToSXv5UZi6WZ7XiKVdtKVFNaS2MZRs8rRoE27q",
  "key19": "qmdafGb97yFmgHxudwdBuySj2keMEk5FyMVf6C6FSY3oLsuCznfwBBtZymcZHmjyPRtzayQWaK6EBVWtQSh1cUj",
  "key20": "2KDZ6AwVsC9EfrEmDkFmNPYvDqqotos3q2PjaeMJuMhfeuDtnbCSLD5uPzfQE36wTQwehYofhXKLfXx4284y4LbV",
  "key21": "4FCYWRTGw486w5PpELimRu1vYJECzWY1TSdwKaHuqzRd5EnQhXJMwgAgXPnm2EoS2DD97wsvP9tdcUV5mVz3aixY",
  "key22": "3ZVecvsuQt86kP9XKsSfqrCLRuKViWdukWmr16rsV67BDAtPhEjubgDhpJ47sVEj9GiW4GeWmPJksAjUdCeybi1K",
  "key23": "4STy9B26d2rWVdneLTPd4gXHbtpRD8vCZf6s7zyciu9gHCz55swDryVXKAkL679cCVTUSR9ZzFtST9xJP3NtDQrx",
  "key24": "4pKpFQ7kNezfRzhtYhdnLTX128PaTtWpPrWqDkZNsv8srRiWNizxBF8TZfY6iBzc93Bybi9CiGs33VkekXFSWHXF",
  "key25": "252KhVNLx2aUXTa4Mik8Z6fThfuskq2kP8UkuFVvBSgVwdi8WGkB1D5EGkCXcBhaLXdaDAZz1v8La6LQuv59Yqro",
  "key26": "46BqNhkECDTaekTS53wFvXaaWakkGThjmC3uLQYz3ug3z1kcHo65WYd6UtqunQcRu5J4211FhSDN8LsGazW18G6Y",
  "key27": "tmH1sZ3dsYpK9zfs3AhHCv11mkH6qvC1xY9BM2PY9rcP14ScH6fyVSvpk5vUv4TgwcSpFy2wyNT3jZBxSCwZQLg",
  "key28": "3Kixc8oW8Vh5PX2xmokaiU2QFDLA9PonbxGs7XXrHrAhUBG2HcdTdAuUpruZA2REnzbbyHP9nwRhN23JJ161MGUv",
  "key29": "339fh49kAXSSyBCqdVhz6JM3hHMhAAa265vFJdXajKHnLJ2XnKazeHzpFQ2vGA1gVPetBcUgs4MM1Lg3u132qfmK",
  "key30": "5ApGJ2w9zKtNtZnN6yVv2QddnEE5etPL7Hi6VwWYDxpyvXt7G9Zqem8Ze5xgVEvycrKWgCtZJz8z6uVGn1SYYVDB",
  "key31": "3SVxBChM7bK3J4uVXzyU9XtiE4XYcdFLWKTuB15GUJbA6LGh92e1FpkuepBkqGdamesvzySJwrURZUuHhNcgXGCn"
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
