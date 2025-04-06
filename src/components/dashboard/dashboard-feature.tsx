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
    "41Xd8z7UUPbNq8RZUYUYw391fq4n3abP79tNxYodfspBheyTxuyjRoiMPz1D8APuHwe11Qo6BSUTfqLfyVGuVKzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28YFcWuWZfT1gPaPKFqjrtRmX5V63AW3dhJt9k82qthZcexWogDGHtf8qAg576gS5VzeU7BbzGc5L38vZiGWKYe8",
  "key1": "sYEsgrFEEeBbu71Uk9UQaA9dY56vrf8eV2PofK6wNH4nQUkNdHouGZEQiaYr5kDgiLZyVdYDr7swsfpN3Cw3WoJ",
  "key2": "5Hu15LB5HAzgzYkwiq3Ny4KE7PBMG92rH86yLVQgd6LbQjHBi2rp5QeoxmQMtUibXqssq3aJEQgj6JX3zZX2mhdW",
  "key3": "2YTMa6zBzhiu6hySxYwhuqg2cqtrtDFQa1gREw42ik8W8SwuXWnEQkV86GzZuLPsEXpzGWMovmoPf5UWW85tQgq6",
  "key4": "36BhNo92gYvfT7NduZomeN6SRwfPWSUtGoZMii7g5TSs1HdqyKsoF8Mx93XYASCHBSvab5JjXCJB2NeHvfH2XDqd",
  "key5": "2Apj2pmuHpEDgRv4HqSReLhxzmkACFXBLu8GgyJoZRdwhPMExGCKKDR2vG2Qkc5XsaxEcWo6T2ZizZ1Q5P8vQ8EY",
  "key6": "5HeGAmvJMn5uhUvsSyFUDatMEDt3m1FKvSA57GQ6BnSHgDnE8QGiYfogQapRzR1C7LxnbGevWh7Lq6m6RNYiLHGq",
  "key7": "4zKoroH3EnRL8TkguvdEfRHWDtpGA9ReTeSDRda8i8goYSU7dDxohDeX9XBevaYh2m7ddSLN3A3nWMsW7oDqvy7m",
  "key8": "JQRC2fGTZa78PMsAQgP6VLiLsfYbo57LUaCvZ1iiwau7C6M1y5ceWo8nWcNKbbEv6nGbRpSaWhGAQdXK8b1YK56",
  "key9": "5MfPChcDNo1TbFTJGJgdi9JQwiJ7xuvQisSCbMm7DTyjCMF6C9bhF8NLvcrtA2z3WWdRf3VyNnTpGadzcPNVj5ZZ",
  "key10": "5L4Ge87srsGG1Q235QLbfi2Vp3t68JHovzTfjupcYDD9Kgm1eTvooNPJFg7R52TT8qLw5CHPEvUaq4d3LZ1LoXuM",
  "key11": "445YH9WxpKXYom7DueDndVByWkDLLsT9o1K83oXSvXARHj3twgkNnPDSZZCvys5Fq7VBrp1fqwXcEr8DC5bARdfj",
  "key12": "3FRgQes7Q6ehSwGUUGz6TiHK6RW6iyw8VBxEqDpkdhRbfnL96iPDNoxrVffrTe3kQfMAYgsyEw3ZcjGzwQtCPTDx",
  "key13": "4XL6PoJX2LHU1d1WqAAWuTJxgF5BKVPSgcPnwrSNKQbVYeTVXqPKXKX3zuYk4CY1QYEytSLvyCcZKeA6cPm5g1bw",
  "key14": "3cg98JFscTMaXD51obJjvrNuhtPWgokDkzHAXb2t1ENJzRnjUzm4ZUccd8UV1kFdP1JgkBPAzND2STGPS9WuuZDz",
  "key15": "2BtxMKSjhoX4c2Z4LAhsgpuWE8UqrhfmU3EGHhRL7Wg66pmdA9SmTvsyMUBDf2HAz6M1FhQh54jvPz1ShKgMqH8g",
  "key16": "s8xYGCduPiaNmjcVEBkYFLxa9jS8WLDsycQgYsmParXe57i3fvPWx2Vt5e1MRAFY23UYdTbas1W8hBvq96whLys",
  "key17": "3Ca1BePTqEXiqgLVYd8fsQyNoREXeuWiwN2dX9dPUyytU2eQiWnS4iBPWHMMg51aPU4UCGBLMbs89r5RHd3NLARy",
  "key18": "3HjMHcodvTtkFKkuzGT6fhEpTkB1pCpab1urdkURVzFggEnqKw6SZe8FHy7QN7aq6Tu5sfvhpaf6WbvnamKBmDZe",
  "key19": "ga2RS9B3vr9Szb1pvewfmr34qSLNYx888mb5Jx8BjG2eU8uVmjjKihbwcfZUokMVnoRPgvuqd6raEPLAi9Lqwtg",
  "key20": "3eqiXzxiF7gNhFVfnPf9kzTUdZtLxGUtWDYCZFZCBp1rCnTTNgSZaBJmXiFjpTBZ3vYDshAGjuFhW1bGsreskoXi",
  "key21": "5CJnoD6TTRyesCGU2gdA5vVdrg7jVeBc5CLiXH7gFAFTrKn4EzzaLd59bQ3KTViCuS899w8V34ngmwEufHXscfdk",
  "key22": "4ZowMoZ9UjPUCTAT12VhgPigubLfjbuHKPTipr3GVskAipnZzHx4H78a17Cn7TxCVbDQ3CFbBBaztSQpFe4ae5j",
  "key23": "3Cb4xyFWwkFenqkerb8H2ihpxGabmG5gTNZnEePhw77fbBB1pPNk5aJnPcTkj2vFMckzMvZH1mdz86QYsgQzirko",
  "key24": "3TRvHLgtP1csoBt66URhuZdAzzHcSGRWHXuwVceztr5TEmKgzgTwLLMoJLptR2nvsfDt2LnhX1785vDrhuxDJbUH",
  "key25": "5ibNPbrhcdLBBLCo81yvb1m6ruR2XnwdApntN55ePuMaXfbXi8mBjDJPZKPBEUBLgTcfbE5VeMbCdThwo3U6PsdX"
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
