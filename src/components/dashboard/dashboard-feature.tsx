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
    "2kdHg2217zEz5kneNdyitTkqj9Ny1oMyB6qJgs6tajUCLLYrxdzq9Gf9hxW8u1xMpPEHtxQDd5bDdJKtgumqa38v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8DhVtFue1pTJYi8DgLkzqKpazUgRfjsxRDJgF5DGjV7a6iRNbySUQMx1PgD7Dbws2ze9yE8eipseWAB3cna2gn2",
  "key1": "4CQ2Ym4hfodprsSBPHKsCjJpEhJ69sG9WY2NPGMaasmyDctnueasAQtXpe6YVofWfKZ9TwUfHnvkzVpYB3v4CsEQ",
  "key2": "4qPoWePrYvUddkwRvNcbPbV4niJRDnrtr3YHvqhUoyA2fhE3FFSxFXYr9AYvzgaP5NMWo5FHfkJb9Y695mQCos6d",
  "key3": "2D3drKLc7AzhBgwcCsvvJbpTQhgcnbSs2YsLACFYD9o8siw9z6oZC9pkiZudSnSRBzz3ywpa3o9uRr9DXJUyjG3X",
  "key4": "3zx872ERnmWKGQn6sRi8Bj3coFXkwPRNRNkqb5z8cfRbHNuDxoa2hkE6Jth1uaR7Psc5Nvm2NKxBYkTKLwh882ss",
  "key5": "3MUzzVrrf9T75d9VqdJVAWKB4KQ2JDEWYz3VNicEckAbiWzsf8xuZjq8RdEwoL6L2u5x3vqVUjcDphFtxpBsSXJq",
  "key6": "5tBtaJp7QW4YBz2NjiJgr6bDK7sH1dMYersocSiJBoaaLXSYXXYTmaDfzZX6AySSoQYWTp4K3uv9qvAkuoHDfWkM",
  "key7": "bqLDrtviEtYpb8rxeZDrKMLFvVCKsneaHJakRFHQ1txEL1mjavwibphkunHg28hpjJxro1VmBtMzm4YHMWge9Dk",
  "key8": "3S5MtcXFSKGejjMSanAZwY1p6ZDA82ebkgox5ZtUyoAiCRkGXHK7meeZibK4rsL62zDQVTSVxB7wfEmV3gHLg8VE",
  "key9": "2jf8zZPHWXsS7PNxGrCBVTr7XGLSPLtY1sKUhMatsFuQcK97orDB1gGhpyCdhBXeEXzadh14ZvMiaVLb12fiXe9t",
  "key10": "4FSvgxmFxYdL4uATgpRgRaRQd6Wx5HLtaScaxY4CT1Ju54PLBhWnMVFYTYVtfCsGviP2u2fcnyrRUA57GB3nh3kE",
  "key11": "5WYrAkub8f1rVnXdSoYmPbzAkehN25WVT9i39mL87Qt226poh91HavkMDCX6NEqyU1JRMm6rHEw865QUqrFNjxro",
  "key12": "5hjUk2jQ6KLAwrkpR4ycGquBThkpL41Q2VJY9YPeJnf4GWFpPu5e7d4R1jDdsHDduEV2Muh6urh2hHoonpZq2HyU",
  "key13": "3EfzqBeB9uMKuRzfQeTUyzEYHX64rPeE9sMkP5CNWzUCavogUi6fXB125RsJLWMAuiFPzsvKix7dCT7mzXmCViJV",
  "key14": "46ZztkXSXtkjaGoet1zMCPhFbtQicY9af3jCu7UpAkMUkKEGy72BGTVxsP3aRxEBhe2fCSLmszUeQjfn6ZFmimeB",
  "key15": "vpiAuC6Q8ZGEg7ppzyht7bErPQ5hYb4qTEg3ya9PNN1ijpeKJHYi3ydc21TmtucpsTtxqDCLEGGfL4qYiabFX5Z",
  "key16": "2vznosKbWJ8WA7iKF9FoggsW2uvt2AhWtpfYvjF9CbDhsQtNhErQ6B1LWTQY8vk4BgmM87Sw24u3wV2hV6fsmJLp",
  "key17": "2ViCkAHkj4tNN1Z55fMW2LCRRJzRJ2LWzk83PaSdTGUvzuMoDPbeTx8qTbaP4fN8yjdgFGP3FwnAKWrUgm7iGoqs",
  "key18": "2EWeScYBudNkGR7Ut4Zt98GmV7YVFatU8jjbfBUqsv2imnY7CXUbizgfThkCwduzpL3ZJJ18rFFbLA64FT9bm8k",
  "key19": "5kAUFBL7zM7SgfHkjPcxzBFKsi7Mnfi4UHDj3gAhygFDyLgRYHH7uEpgxsm6PTjkLuJc5gTfUxr1bzwv63cdtqMk",
  "key20": "5p4o4jJZeApy76SodkTEKj4YePQX5nVXuYT7CEDQsY69pyfdsmvqCT1wNLNm6tn7UPaCaR9nR1PLAcQateYmraqh",
  "key21": "2CWJgWjhZPiMA96ntPM7zmyzGzH25rQBRP3XX2XfR8zDHmtAsamzBLZmrMPJvdeaM2rTGq23kDy9xfvMGgJU9q7V",
  "key22": "2uPjxS7yYZtogKhqHJKHZZvvhWvjHz8gRFpUaGDCeizvik8uJEhmKD6Eno3XpsRsHd5pbLK1jX9G6gXm2WFJbPRw",
  "key23": "5mVhgNw58mPveyeteGVuvJ7mwN4dC14AfZFFbH8QJKJ5JPU1mQF289umKJy4hjRGP3owhbV1Gv4VuKjqPV5TqXM9",
  "key24": "3Pc1EArmMpPvsuaeTMDfJFABNY8ewoZf4CvUiZcBthcHMXXQ7niAQjdSg757WXANEr7L7Po1sQjg3wJm66KqkEb5",
  "key25": "tqCiLaHryGAEaLLn3F93yUcj8rLsa3RLoWv6HwkH2akoWxJRKEyQV56xym5hPiaENHbQbUBb4W2AoH3uNpwUsD1",
  "key26": "4MBeN67fT7ScWAd78WvxjkDqEoX8fKM4NY5k3h3Tismb3TczRtzeu3p1XuSdy9Tz18jvZt3ggPjszVS7Fjze8fzs",
  "key27": "3F3JCWjkTtcw7wAa2CShTGH2xZshrRfjTwUMb6sCv2XurMsjCp9oWtzsFpTuTwWQsdUiQo62AU1m9wT6SGVHgvxz",
  "key28": "4MkWm8K13LpbKoo36Yc9ewTE3Mq4uttBVkJuYZHwnE2AKAvpCLBC7619HkwVHxqtjfScwqd5g39wEZK9bouDayZ4",
  "key29": "2g5EXWBWV46mAjVk19oo6T6yHgaC3ukQ8dxzKwBgCmwyr79LPpaemyPEvLUb4F78GDjbiwWqLd6ksv4o2ctDB93e",
  "key30": "s7kKzumw9YxU2qK6XEZ6pDLdfoKsCYi2TcXae14G6aTsyGY7u83r4diKt9pUeDwXn4QZtUnvwNHW7Sv4vZFXAsM",
  "key31": "3rtjnGztBZjXVaidsVXXn3KH5bTgL3hqxFhVAaYw6eW4gdef7cGUywvTLATnmrUkwJXHBP7nZ2bMHeCRakmGpn4Q",
  "key32": "4tV7teJ2AjNQ2CyvEWT5AbxsRSThCmNNjmwNpWy5iSKNsbr9RniNnhecBeJ1ZYMjpqUzR8ikUGr7PJaYM82ZsWde",
  "key33": "2dd2GYiTyDfPQAJWBdTyHHh9Yny4MB6btNUGDY1PeW5CMy9PSdA6yCDeSKjRt5aGVGmHEm4oEhjwysVrAb8BJLMh"
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
