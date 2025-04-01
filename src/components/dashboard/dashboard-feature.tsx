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
    "3wuoUaC6ZDEmhaugbg7WPFVCRqyAKdBaoEHWK3nEjK228ELaruDFXNnLvpL7ZaoRXUbJcay8vA7VPoiGNYCVpzLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7anPKMtgjvHk83owqw5gpP2WXa8ETv1Uc1ou6WR2bysCBmQg1Ym3vd38H34UzAYnrrJL8kN29kXGAr8xmXqi8B",
  "key1": "5tcvvwZW6jZU6ZBsNGAD61A3KQ6DDX7o1BJaDhSqZXuR8J3s8tbjNSa953Ypskxymr1uarkPkQEuGuiNDLq4amvC",
  "key2": "3UHoEmhn11xrjtCVtrgjL7whE2ZTBbokizzNgtQo5kCMegkiRNcDMRpZW9D46nC1cJuDP5FmCxc6XyMWK4eTeSh4",
  "key3": "3XmyEaNNnoqJ4y91sB7UVDMVYiGvWB5g7uGTATutUJwLQhDLWhByg6Npo9AsjjM7xtWQTCCxoRX6Ug1nRkNJb29B",
  "key4": "3egHK7sdX7BPHiSn5JhmRh3urVaUyEXguF83WWx75s8MLJ9T1Sf4mn4y3obnzQcWhz7u32yMbZWGWSndw36cwoah",
  "key5": "55wSj5PLw5fBNuGMzXR4xwPu2ULaKMbeXKx1zr75QUdW4jD1XPXQ9699ebgHGoH4FTkaETyD7rX7EjatiAsAtQwg",
  "key6": "359JveFNKS2Xiz7B41PMJ7dmp3gj6ktta3DgWN32YFchFkf3ZQrkPxEsMHbgo9wEH4UgcB18XtbL5uvvQWU1ZfRf",
  "key7": "2ubomMqwY31K6bpF13rhCRYTh2GYbgZhR4H25PstFtTuM3EZeBoP4ZUKSWWwSNZedeikxDirwLSNhEpEoYwRCixf",
  "key8": "VxnK5pMEfLg45BBZGzcjkzmnkBi2RtyfJcyJJgN1iig5Jp6TwHCQzUSJPMSRxKYcKCGMvUFp5uUwvZXRf8EXh7b",
  "key9": "CXvTZetRqAfTbwqWr48FzN6mdX6Q61oddgLWLxWtHYoQzEsPmJ7B7c1DAPc5qWddzLbZbzACDeqH7WJ8zKUg2KP",
  "key10": "uAMduppEdAYSKr862Hve2jcUWZKTohunDDAyvNRiEdBiueKGMpGitZm1WW3pzRU1re7x3aGNuV37VZbYmDWQoaf",
  "key11": "3b8R4r9UvXBaVCqB6ZYtYhCLLcrSThTN1z1uskhi54uW9PDXCvYVPyK1mfYjtiuPLGn2vzRFrmpqrQ1Go29nongX",
  "key12": "264zitq6HLidocx2HyqTYa63tyxDcE6XWhoMgKLMEMNvNF4tmNMnSxwgCjqg4kR9QbnJ2c2FixJnsV5Mk9cxJssL",
  "key13": "5c13WLGD1cgyCeYZGGoJ7JXDuGBaiQBYDZwtKX3vEmqU5p4LgTeSsCMLceLzQfgK6XvtsSzRuMjbqU3wiFQBYDra",
  "key14": "5Fq9y8m6JhgUCaDLcruiwrhWudMgXfdG2WrpZzTpoEmjJSwDG5RLQPrQRqNFdVKNH4fQ375EoZsFJ3dR7G5dTcaT",
  "key15": "2pKeWZ2sen2nQX4FbVKaawChVHtbe4Syk8YukUMjJnW9BAuc4H5ranuvmUaSt8TKKFjYYTvsTme8TJLTQ5aN2VxX",
  "key16": "653fryTodAjNiKPwuHvPLrBmHKjdSCHBYBPWmnSbiWdrPW3NwTEFtYxqEoyPHTx576RN13TQPUSEtkfp3FGeTfLf",
  "key17": "2h1Dy81FvbqxmCSoWQzMGyhoFUUvF2LCzvcHoq7k17r73xeuWge5uhAFgMn2GQ5Cn6rGTHkGjotsTHPZsMAAyRu3",
  "key18": "5bhsjByWFFtiaj5Jg4t9BgfTeaTjadbJEHSeXeJ6orswoSwT9Jza8TFn9hWBcgdQGwpfRHFkh2iGPQqcruCHxcLj",
  "key19": "3r58ep5g5zxxmjDi9DK3tdZi1bpne7KYHN6yNDM4mF4FdbXj76i9NmuM4bXyYmt4fb8nSYtnGMjX9GNqvCGVcwoV",
  "key20": "4NyYtS6ghLAp3zMBufEPx7Fb3bz9GrbRLnBiGteG8TuztT1U8yu1B2vbgwwGpCCx5ySfq5jk14UjcCzenSJvQH3M",
  "key21": "NrG66zQWk1rxQvQN35CrkCea8tT5f3LE12HHxVqvP5s7t9VAfUMDSpvnqRZy5gi2juHmdA1VBPUphsRUa4JFLVS",
  "key22": "5V2iYCXZ2qadQLBjcgCx1uYmR4MSAhQQsRdfqkWsQL229sGjYkpBuJ5aKCczXSTFiGNp8MEcwCtpST8xoFKcDB3A",
  "key23": "4aVYVi6GfUxDPxAvtUGhjLpFRqmbU9qXpV6bgaDP42XTZ8ebE7vGbwCqtHN7UjNu5eQ3jZquAwAUuVoPnrGHA5xE",
  "key24": "5yLBT4hUYiGpwpffybA9w6ELXWoTpHsUGXpKbKArzyka41yDTyBPinH5pMTsHAdH6zN1nwb7xmRSr6ZWzEnURKG2",
  "key25": "4fNzpxpioh35UfEFDo573eK4quRk6JYsTK6LSovXQhEy8c5UK9tzbD5vXNeiiR73xjzD6xGkStusPRgs3BLNiRC9"
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
