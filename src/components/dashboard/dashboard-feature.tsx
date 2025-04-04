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
    "2gSkmmMwgSWLiYMHqstZfcZsmsoPaSBan11djKVq95JS8EFSWDe3X89uVLcBXQQoRL3SMWFUwsEsSHKbFAnzm76X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ssmg2K5Hy9MD3tWtLnert9KYVfWC216MtjzZSK1EUHuXAVtYeavEjmCebvt2zRcvNAE8qziqoY59N1iC3K5texn",
  "key1": "qU8v2GYNTLDXenqJnhYeDCFDAm3Yi3e8eXjXryqiGW85g7E2yLF2CBLZtaHdFwHDwZzP8RkJKxyDZ79dH63HRLd",
  "key2": "578PGNVTNCycDzBgwYwHpj7N3F8XZajXyrdzMw2LR2PuphR8d314at3TnjWWZXCnxp7S7aaKhX9R5hfw15Gb2cLk",
  "key3": "2mUSRjYLd271LK69igHag1nFfVoryHUCeJTZkLwMDVpKjZvoDTmgXp2hhu9KzRMf2AXLTiNZa7KiHwFCL8Ng6BZ",
  "key4": "2P4aK5mSCKUkENYr2aw3ByjLVWhhKYwCFTa1QkNSnb1zWgU7CUkBQCsu4VMvFpBiFvNwu2LAXCkTkmn74LkB436F",
  "key5": "2dR4E9k9jZo4QLtbPcmFBFZVbWUk4DYjoHHw89d9SSSqv2BPsFJWj4Kd8LVPYAr7YGUtH1Ur9n7uWg14a2Cbdzfj",
  "key6": "VhdsKmpdf2aPVqCZbRaagZQcEjPgGDj7nmQ3cJRpS4U9Em6BWH4bAc8r1CxBbPbhkrp9dJENwDCGpsmkJ3FgcB2",
  "key7": "uL3buvzdX1Vub2fryg5Rqqoo9su2UtGUeFuQYcrFK8UdWKGzJudM7WLFFDAMYSg4WC2RZuH46eAgGMt2zu6YH9b",
  "key8": "5VviYVbh8iK4WUHp1N5ckaURpSHnY7PurtrmQCHVq6Z2NjubFBnJB6yK7xSTwULqFn5zvgP4dPyXdRLGPTmjUdeR",
  "key9": "4RCk68CtoyXrDSvKJiTciDwryk38FZquNBXgfE1a6J3qJdKiMJ1RuTRC1gRNtjpVwdvhKbvbhRwgVxSqGwoart7c",
  "key10": "2gjtjdtDdJtZW8FpcitoZDRsUZfdgykGeck4GzzXg2huhkP2WdXiKf1CDbkzErrgsvQxVDueD8ybRAkqvbu6WExw",
  "key11": "M1LgyssHVRfYsQuoq43u1BV8uJPpjrNMpcckjVNZyf4GqTixZMeB2fFoQWetoq1ZK8efiBGSQrDZGSxPmGfuw4h",
  "key12": "5v8dUPoBRs7MyMybtQDFEtdRWRSGTit9H7hyfXxaweGCL3dk5wqTjLkuUwVkHBz6DUZS63AXaEHw4uFnsWMJ8Rg9",
  "key13": "4bsYEBauKEVRVGLjiF757yzWYAtTiN9pBsYiMLSLjwhAT5NAvquRh93RQn2Fry6zwxW5wrqMmTGATtV6gX65Pbye",
  "key14": "jsczgFY4m9hv3usaqCxpTALq6Ne53AGx3K8MBGeYq7cYY7JSKxSs2wXcMUP5ZDBccpQdXXtCwHSrXVt9YEy6UPA",
  "key15": "39sRgMRC77Q8oNYnavYTjidzmEGqjtsLuVF7efFSDbW9QHvE1h9yK6Vc1hRPnDGShQN5Xcw6sWwKnDaRF2vSU5Mb",
  "key16": "43PbXwu9WWc2rkaK32VkF9MdQFoFW8bQJgq4QGuMZTZSEJLgLPmC3sJDmBQXin4869DJKPUGvimVpQNTy4TJxJvs",
  "key17": "2EXvC1dshvTTjwkFxuHaMWPj3kME9Bpn5Kmmbg5nv4Dz7uPkpcLCTuT1mkt8CoKkFQNxA22wtu2cuP8VHDdmR4GU",
  "key18": "31wKeMYCdnn33EUxh8AjzvsK1wakNFtYikHZwKwTm8Yvy6Jp3k129VVETeRHycW8f7iBqvtE2L9CGLkdZ9H8R74Z",
  "key19": "5Vhw4eS1GHWPvxoQdeqSyGn9jTYBTEfk1CtHj2oN7mkQzxT5SKQKeWi4iRrNjbyooPxpYjZxBmRCTDtMNhSkiddf",
  "key20": "5EXhCf4GDPSBrQjHpVyo4PbnmBEsmDwdo5a1HGsHEjvz4nFNq2Noj7moN5W9WtRQG5btfVjJEw13UFeUquFiEZRY",
  "key21": "5G9gxQp4uXjhbSpCTZKYn5vpggKMx6uh9PC9sH1sWhoPwXXJyERLNZwWVeud7ULyqopqKdppMCTwUS3E3RZgQ7of",
  "key22": "32SnHwzxxUHUzoya7YtiZAD2YY3PZgu7qMpt9eVLFYkvPqeWXeVLxEmpNorwBwRMQyia8SHYysoPivVDr7QZeH1A",
  "key23": "2Xqivp2qKiNLjT92XX6HfhUyRJtxYvSLVnsxGoWcKB3dcTSgMyUomofEPXVnVQ7zQPd2aCBhtRYtWQSshvRrBuoa",
  "key24": "5D7n1JQqocCNohvCCNxcowP9oQLekSi7x3aZg2QMsrP8FjDVS4FUx3H91TQKXEWpnCAf1urLYfm9AANFM1C3LYCS",
  "key25": "5XXdhSrD4FEYzNdain4sTmz3AYR8cXMt9AkthxumHu6craK2PDLTHywZ8x9ncszwBfEMomWGXh4FRQDQMkT8aKgu",
  "key26": "29KbPUoqa6yRkJWqAJFDU3tyQ4Dk688wQ3vXyTR8hRb3oTryQ3dp3GRKnmtJBoSt3HN4bvUgC9jsHH3WCKPDrCYg",
  "key27": "2P4T7NQ62pwc3mkZ4FBJjzMnExsTqNAaaUQ7XkQ5aiiD5DJEhwYCQXvvUx63Aq33NFyNaoUkCiBpFD2uF43D6LmB",
  "key28": "UQS5KLLbzYKFN3QxtttxquExaBdLDhJ5sCXh885QjhCMCoyvKx6eDgfk4jK6bJWK566qHcHVXcp4Ydo9RG6knM6",
  "key29": "5YV5hDbVEpgWDrC1iPQ3FQbgt6DwHunHGVogrWjHwkM1KjV1CGXWhZ7yoqLHcTdpnQMMrx226pXpq2S71Qai7wEV"
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
