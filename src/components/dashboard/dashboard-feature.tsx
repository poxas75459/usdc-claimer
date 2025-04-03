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
    "MEBdE81zHc3xd8hhMWoiwzEcTkf6E5j4iCVGkkHgwHMx6NipD6t99167d5Nk8u6yMHhd5Qt7VojbrhTqCzxDPip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkQkQCXeBgL4XSFK4fzN12joyZTM2THMK9WGFXTpLzw9EbDiBJ5N6HJUrfS6n7oBuHN9K2ZzmdMfh9uxTrC8T1j",
  "key1": "35B85DiMVdxy7LyGTjYtrc25bjV44HasNkoPkM1cozD3t4KoEn29y2UTmE2KQamLrVXHRFk8GPPKR75DPDdHDTZm",
  "key2": "3aVjTkY5r2FJPGT9DN1vUAtRdMSUDz17eCZuG8apmMNhtEfzbyUwzMrRy5yahDa9R2hPxQahiaM1BnYrZSa9jQaq",
  "key3": "4BJTkxNicjxNMvhiV89DEXoxYiMe7h7EeNLF1pD2VyDoJwPdGN9diSksf4x87XFTuwNcGg8sk7dvMdrMMBMfFtqR",
  "key4": "5guFTQfEEF7qwdxSc8mrhkTB3vkGqtUGUKufQAXZD34pcu1sXewbj4CWmXu7M8x1UBuAfmGhmugd1MfSYfLZxJQH",
  "key5": "gzRHy8mTQ25VSZ69Uc4euGGwMmapWQNr2iQX3DLm5yyZWEjb5aNR6Phb7PMz4T4PVHsWmejsbsQqLLcppr5vcha",
  "key6": "4VBcwLGr7DijQfjVQ5nhBqS1kYa9LBPeALuw9ziKvVERWq5vZ2EyMAASpBsmFabfLNiKZjcacLTQZpPiszWkJXSu",
  "key7": "5NHgnxfurzbTtVzhwgGRwx84r3isMtsYWzydTJsY41HQZjnLp4HzkeDNrPud5LgwiM9YXRJgNnXvNfNy6v6BSnU",
  "key8": "2aYPF5EEZqQFSESPDomYW3icHxojjf7T2rYjY85mjis4X95BK5WZSTKn5sgnmDJVd1K7QXtaHTC2b5XMxeYF9tNn",
  "key9": "2GXKqX4rdxqCTRp55tVPpBBn1iP1BQa49au3U3cgYTUFiKc5Ysnkvr59bWsZDiJoF862JMMFVs1fUt1ekHrusJEg",
  "key10": "124Jy3PWr2vBpMnrAcmqCZTANuNz1g3Xs7CAU6uHNtmmSuzCWhp7GJRpsjBgjb2iLaP6BvsYsG4Am3NZVEsNNgFM",
  "key11": "2WXryQ7WjwbzyU5aCUTqoqWHJYZnkj3B4nmWPCMpmGCkykgwVnyRgWj6n9Z5h37B3eyMbqhRwjNrZH13Sp7hW9qf",
  "key12": "7YwPJ2gtbzENL3EzuF8AihQinxQL7FKnqWTGkkwajr2RwcAkLN6xeYR9fVt74EzzakP8dG1cZTJsFybTY3qYCrX",
  "key13": "4LVU8k4d2YpuhfusAzFQnkzdr5hCLedu2jnTYiqeY2WLN5o273yZWkHTBk3pADznAvVs45ZRQag6HuLECfQAPj2B",
  "key14": "5NxXuuLrQfgb42iYWMH7rkv8UKhC95XuFxggt8AUw48Cnq4G7LgNnffMTWsL1wsgBSuy5mUKqFtp2pnS94RmJUw4",
  "key15": "2vjD1g1K9ABumFjrazkmJPZnjGsCQk1KtxDhKJgLhrKfenokgZYFZc9tcAB4Dqh9CcYNjrDEkU7CAe2uSfzCfTiJ",
  "key16": "3EYZQ8P6r7gUznEwg8CUprTazzF61A66yLARLkvrgeV1Cpb9E27Quj4khhmz28SaFGisMBM63hhBfRDgNG3SSydz",
  "key17": "7TwA5QahjJ7sCFQoyf1d8vZTVFxcf6TVzbFui87dbkMHVMkH2WdoP9QmW979uZ8rKiKFi5b1Y1tg8Mzj9ywhCRP",
  "key18": "2mUqCYPPbnSACM4gLvvBMGpRT1iB2oe7BKLg9dDdDkS6hPcuXnn4LY6RxdFNPwptyNvv1LThnp9s66tgE2mjAnNG",
  "key19": "2Drr3knZfLmSbWcWXpU7Ncemngi6ZZQfR5EYm96zEpSqxvr2bXh3ENgCsmMaLX1oSSjuzKmVzdxbbcqLitX13SNx",
  "key20": "3S1LDm4gJvC3wvSbpPT3eXCGnJUgCBg8j5wYMGJxMMhf5RhQ3K7CpRxFgn2hfLPB5eTTwyrm6m9x9kiL46qGxC2Z",
  "key21": "4ijUy7qmBgmi5FcuA2gRWz3HsfYKDJa7nVBZJVb4kNgzffUU2YAmpRCaxrPzzG2HTrXFCzecrhxUHeuLbTm1N3K2",
  "key22": "43w57tkEjDbPAC6zdxfjBUXc1Qxrg3t7fBiz5ee9rM1hyfisuMccqQkcFiCyQV7zAWgEUvEwaKx9zuvtmqGoqbVq",
  "key23": "4tU7rAhmht2wPDb2VWY429TbExSHuHUEjV9fKyQ4rwt51U9dUbeWzsCTC69G9P2fmEftVamcAhL5u4RzzG3xtmmz",
  "key24": "2EsKFmR6oQk9oTF5Snh7DVTUc1TwTZkYLpKfBumEp5g5msjN1jRRY7yQ67Te8oiYSSSwFBbXvxUmiwiHyFdUp54C",
  "key25": "3wBZ3Bo3tZ2Vh3ReTo8GDZbKiZjNdcd2p3WxKwCHdvwMmo5FbiTjj5fu8oEVi7U2S2nHVvDdYKQfPaeSNMRScaKg",
  "key26": "4vhJMyBcD2FQ1rkEDGqvXsAPFReJY6xn4nh2w4RWzdAzzQdKgBhVTSe8YZYF5GmJubyXwvjzcXiKQ1ahXjxiB5tg",
  "key27": "3AcPMLtTPZ2qFps1HEiFrCJNBB4uyGEetAXsuUjTEhqQQkNMLAzvfetiv5RTzMwAfHcckfYN7x2DxYY4N4ny2g9E",
  "key28": "4wijrK4Kan16SqBr6wg2WtjXyQnYYiLyPANeD2rnXbMk8Rnr5cwRGZ7hF2eJ3XZM8wzk13YX6Qa5bnuCoqxWo3dG",
  "key29": "2rLJtqJ8ZRAbcFUDUaqnzDYzQPtUKpfPxsb9rubnvNLjygx6gXUddsqm12EUYaNe9MHaunr4JBTPeSxEPKuxdwey",
  "key30": "2TjE2SBAchYxR4PcoXhsykvugizFCqJyAzvcPDhXr9d1ev5Bm5fcn3GUWCHYw7qt2vcwabTHxxmHk2ZmygEXPdWP",
  "key31": "3FCf1EUnfsymgDWpwZ2i3ZyCKKFkSpERCJy5Fko9k9v8pbxe8Sg1GYY6YNT5vQotQBgXaE6qhzJAkYrqASNnGjW6"
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
