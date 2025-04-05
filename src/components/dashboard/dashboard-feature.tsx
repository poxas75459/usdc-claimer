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
    "3Fn1diWHLAhoU8p2FMamHLeYhoQtTdjzSAv2hz2nAz5CwtdEqx88nyfRJwkrjNcpVt77n2YnDXvoJqNEuXHiMjuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M43czojdDUiftqERjX3XQwtY5zKihQ1a3J7iD4YUBcvxsdwC7yP2c6zqeQVaoJK899yq7DbLni7pxNhBP9iegiR",
  "key1": "66jd9SA9Tfkr2aByFXyEZwS2XBAQsWW4oG23TtFnpRAqkSYrpGA64DmPRZATHc2tU1n77pD1iBJg9jYhhrHDBvxg",
  "key2": "Fzfxr5p6gLjx251QohXWHd46j7NRYitpdGhMtuKuhVuFNU3X677rgHTxhfzxcGR8vgRExpT8chGRYYnWswNdrkt",
  "key3": "2MdJp7aDtvVePh9Dn6ctq4GsTvnNy9e75D7oFd7ZKc7rF2gLcyaEcDk18iCL985qdqDE5fiGJYy9KwwY7SzuWJCx",
  "key4": "5mv9grQBtRKuDZLdhscRNjM83dcLeFrtane2o3pfsyptqzxRKqhzkFUe2o54FexnSB1QF4xYN3whaSaQoVEmsDEk",
  "key5": "5PGxt91LAeUtkvx3EXg1LYWeBuqTwu8PZwSVx4Ag96gyXXNNXpzpzmwt8cbsZaD6UuQUvh7Csitv1WSyq8gQMa75",
  "key6": "4KmSxKibUzRW6GxsfVnJZSrPgAJJ4zqiJDS4hkV3tqUi8Rq3A1ze221Md6tHwcfQfbSATRvrxkrk8eo2WacvggZx",
  "key7": "3ysq3sZZaafidddwunw1Az1irVKtxmQnWvgHKPwpFzEgpFh9y27A3GqRKxXePNR7mtJEKTBAEFQ87y7mv6itC9mS",
  "key8": "4xdsbkGiKUhNHQbgBfm9RA965dRdtobePPvgFPPpZdypiwgw1782GWYxwfhAM9Ur7dxpWAjqBWXzjEugL9FoHLXP",
  "key9": "3ZRVVgWy3n7Ea3STCrs8TYKPzwY23iaJ5nfrpYSBupPbrWiYrR91bDHqyCz8CXDf8PtYM7NPxS4BkPUEUGuE6gsm",
  "key10": "3f5Khx71m1LTHkE2qn3esqtDE9v1aWHc31FtQtjyV4y3ovH347DhJoG7dMnqUvX4dR9XonJLweTN8eJkCJPFG51V",
  "key11": "5s5ATGLVbSnsEyRNPWdmamAy5RiwMzz1nNnLaQzjVvRv35BXcPtnXs9oQFX7SDJTZitX1jhVUi9Aa7Q8xm1pK9Gj",
  "key12": "4Rieskx9oWtKG1KDFqRN6Pn6JuyUadX4Z5eALL22MdoyiZS5SNH3G5hUb9ZbGcVdmo3EECmerdkwh95Z76nArJv",
  "key13": "5MBMGcyWPrAe6URn4kDhiXivvAgQVUXWMQ6BMcdajx479zDoA7VuccboFhqr7QuArS38Tps59H3YAeDxsyTCXLxv",
  "key14": "3hk1sft59azwpALL1NFzEvifxrUe4KnhsHU1uN6AzjbWBNf44BnZAXhj4wAToc334gnFQwXyNKMLQRwjwsR1edua",
  "key15": "38Xf6q1VonGSMBdC4kT9iSef7xmcNTfyiBE8bvPgEUCxGr6iuz5GxEExU8GZxpVmzp549JxmgWXTNvXyCbWEmbMM",
  "key16": "yiuN4MmTWWZyDWzVeDcLQ9oRBpAetGt3LgFSEFwCWbYgbvEK73jkk5pYSExxYWSBFMD3XZQP9qcp1W6PHDFvLpn",
  "key17": "5P3m8ipRgZufHXq7z8esdcz9Viavvq7Mn9Lx4hNJ4B5uBjMoPrYi4EDZ7ggGQE2sZos8vZLEjhbDtoptqquab1mn",
  "key18": "2oWXGnDsrfdxdgetAfLE7msePtFzUfCTXyx5xD3TRZXV6haYBN6dZhCs29TiV7SJWRLUcs7DMryetkzibsBRrZP1",
  "key19": "21tUebzR7fhHqasHe5opQPRuEoD2MBNEhdZsrCxeks1Wq9k6pWBXp9s3FMfRb5FXVmgmWsYAmbQezToYGC6uBALD",
  "key20": "2zDUwcXCx8vbY9hQ3qY7USkorneBo4Ejik7s9GVvXhJc9RkKdUo99bfGW26kPfpd7ENEZxQkwAeg2eZ3Cua32FmS",
  "key21": "2WiBa9ggfMhE6Tx1hwdLwZ7eDqWauuhD3njqqzeDhqwWD6VwhSnP1wv5fi8a71LaSNXGPyh9MUAJMjf2j6Z7WxCZ",
  "key22": "63Pp6UqzT9D9rML9W2fMSQCgUTvQJvcrWUzwsYooNkiLQuU5jQXAi5LnpEEgu1H4PJm9Z9dpqP3x8tD3gGyEZGC5",
  "key23": "3T7XgxJycLAMnMzgr8tZJbJnRYD2P7S9UT62LbDMVKx1D5dxBtLazrwAqHWB5zNyUDDZ3QedRpB6y6tpDTm21aHV",
  "key24": "jUc4ZyPZcu4SRxcKVqvPG1BUtssLajF87nXWWDsGwGs8zQJRpTzavmz9soTWhk7MNUiHXm3dSQKgrS56XD2qZBP",
  "key25": "5Y7pAbTnTDQWs4VXfhAk5aN2ZRAiJhYBWtMsDJvuN2NTS6duMnyiWWhqVCWxF3xbLagCRTZTYT2Kd5jSZ9AdeAFD",
  "key26": "36e5auoggRBQQZgD3F4EPEMFPs1tg1JDRVaWrKEiWbJ3mMvXr9u3s5q3o6M2fibAnhkPpvmsAZ8gsnzLWzeo352e",
  "key27": "2VjJf83c9hwvMm4gpv77zVn4vtVvFgPNQ8MfSNnVaX21Mfu9rFm7V5QaMg8TVJDtuMMqyfabmEs9FiCHR5FBu4Bo",
  "key28": "5TVDhb427FE53AcUpQdV1NNFqd7xYUnzW2BFYNcRCQhQw2SG7ABAMsWSNXXFanWJP1yjfHM1qLuMz1RYSb5wa49Z"
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
