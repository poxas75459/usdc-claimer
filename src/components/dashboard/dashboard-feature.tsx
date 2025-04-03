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
    "5KGEEf9bs31kDB4DGbsmZvvYyv8oqjGvKH8TA6MFyBAJvuokWgd8Zya5WWJMztzNf9spSzFyA8LhBLcK7VYXk24D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63wtrKkBcYoK1yyaZ6yCNNmvuCzhFKb7pT24TpYdQ32vduUpU6qYQqo9L13TcmFTQuswn2uFhGkxNVX8iTf7wh19",
  "key1": "5JanZMow6Y3mvyggPR5iJECPsP5QqtB5u5FSjUvbz6RT4sfQvQ3xJ6WBJFQg3JpKjiYW46TU3QamsyXbHkXEvWRf",
  "key2": "FhejFiG2tFPbEyRqcibdnXtQB4M41SUnomX41e64cpjTqKg7YDqqpd5YPsvxUsBH5SUBVPaDnEfrtxeH8kCnAGN",
  "key3": "3AZRHXDbUgV5Lh2gganEbnDTfgaKTRzmP4syYAsTeNtGnEyMbbwS4ynLRmZQm44PiExtcbqei7XXBx2oJ4DWezZX",
  "key4": "3KHREYFcdPhY8JV9Vgxvdu6o3ddwrXssYiXXMD9VBrKTPy3bm1Fd2EAmy258nZ1EbznhvwwcypurjiBdasuSNsVJ",
  "key5": "3an8xPypXavuybnyTMZjYnwXRPx9iyCFPuCw5iGwCvQZPChUJE7eSqZ8i6DMg5DKvaHv3JkwqpE1QyXHSe659mrv",
  "key6": "ep62HEWVZDU3pNmcB1Cg32QzgHSvcxhYRd4dyNQeNWMEX4tab45KqH5CSAqamuhYCHoT33F71nKRvX8EhWhKbdb",
  "key7": "4Nq6tjd9MWRLK5C9GFxySr3ovDuMAgajERjTeWcYhrg7Cu2WuHtcjjjNss8xm7i8bnv22LhsewSXmpGQdb2ek8Pf",
  "key8": "3EeS4QMoMKGDxnZw7X4vXDpUEWzWqySn2HgEWXwGYugByKNUa5hNsYkEr7iJpsYAaL2EpQ1KvgkKhQqBP2WsFCXg",
  "key9": "2h2qx9CCPMEZgXhX2xRW7SRvhNBc89bumechuon1Ay3N4uZ8PoZ51DGRUpxyoEasG7FKYvaEGiMfhiQ7EaNuHQoQ",
  "key10": "ETUoo423YuQQjLwUs2jAKywwSJGRPeQe1WRYHN2sTkcZfnm9s66qdm6t7hXaLrMKmpMze4qy5Zrj1hvbrvA6pdY",
  "key11": "4LAx19FvFPeVuuA9gXw7yH9BCUN2ccEKvuSvEbzxPP5QkyiGLMRo9M2P5jHWFSeEzGAZTfrAtW6beKNy2p1TBFQb",
  "key12": "5Xqk8qvwbucZYrcRB31CiLMmSpVpNKRNEWgTSeupA53Do1Zo48oCVX7WQGq4pRLLX6gYxGC7brcAgGxibSEgvT1B",
  "key13": "fLmMBRt9gfyd9SVELKxCFnD9FvqwNh3GHwQnUajbGhHFJW6tYzg1JeYMC1ZLVu2qrPq1DVUpvGZP7CYSqugqCrq",
  "key14": "3nTjonQ2YC6qXcQf3RVJLnYLvRgkFvyjg4BWrJAfhNM5SQLzskuGLZhyiknKzjVjHY2wFy7sM4fpc12atcFjfi8p",
  "key15": "438TGVhL3rFryemkirVcvZfJK9XYBmGAZm59cAJW4mTycbM5cPe61VCoSKAeDwJwpXA658HNEDHXGShNxt68XdfV",
  "key16": "2aqfRchTDRtQ4miGKqZfyieqdWa9hvFCzztKzv4A7MjYAvBZjYKmufBZKaT8Q26QPHrLhfDbxmD9KqEpg44ywAfG",
  "key17": "u6S1gyLTRpqSLyjMhudBn97Weg4mWtgcBbXsH4dsQvES2EYg1upvqLE8xcWCtcaXEytV5bQLPQJhshaa2SFzFy2",
  "key18": "2qFifVwMNqaaxe5P4tCy4Jtg3K6PdfPMmZEGraYPvype5bwSZ8nxBxWt8NPouoNtyqwL9Wn3Y7MKpc4sFyJKzY2G",
  "key19": "2Zi8SPPQrrEUZPKA6aBq9yKmT79YR2EiR8SCGhQ54r93Ettc48LGey31qnYLiomDC6shQRYRp3vsaWDns8c8PBJx",
  "key20": "2nncXCQJETHsYFfHQXvafQ2tYCLQ7YFY4x5XBBeC8VCsakc1RXNKmhCmUmty5zzhfB3YchA9hfsLXCs22L2b4Wmg",
  "key21": "41oqrTxLYFy6xsWLAAAzytbbBgkM1NDN3gCF2XXVwdJNY1Hc5sfAaAUcBs9f812hjstbaacr32L2WCACB88dEwVe",
  "key22": "21Ay8HbkUW2M7rBTULoScdkBodxPuJvFWXyJKFFvvC4v2a9vQwL7GiwuHG1CTmX482nLgeq5VdqNihwQ7d9nkx84",
  "key23": "MaWH44eM4v29x6Ht3dp92ddBg8fS7FGpQ5zhSTvgWzEoeJDJLmXnTaTaiquHHSZ5knbrYBDCx5t2PUpBsGg8yGY",
  "key24": "2ESFUY9JawgmkzmaWYt2vrZ4ZVmvCEBjwKcSFBRWdGKxo8UbbbA3bN3eeRzb5euSyZUKs3HqEehkpe6jTYzKqwt9",
  "key25": "5fQuHm6XFbBm3sB5AEsLhggQjS4rZVMVHVnUbd5CsM7mtRsLv2zdRCveeAwnzKAK9p72N95tKyVW9BBiufYoQ8nQ",
  "key26": "4i12Viu4GNvbpSHhN5kVmoVPFPS5ReFY4HgCQKZEZByruu3E5Lmv9gozRFW9Tkrk9oE5bws7AE41hfrzRAph5Zn",
  "key27": "MntonG7mV2T4QmbfEotVk5tk26a3ADwiGyYsox2tuTRBAWgheTcgP9RaUJDUEtbnMAbmCmmH3dF1VUa5gxhizHX"
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
