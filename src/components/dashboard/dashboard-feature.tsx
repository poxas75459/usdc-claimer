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
    "AzVgYgks3ZHUNPZnhHa7CX2sgJQsApHupNkL7KabCLK4iNGHRbJARJ5oD4sBehdfodaufwfwJatWzLeeh1fMXm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qq3MPbXrqPQ8wsAFcNF1BNptk2oU2SordBVP45QzM69sc34BUycbB8iFdpyRrAFTz4Wg3gNwo4r1oktDFKHmi82",
  "key1": "2BA3rRge7Q6af72koXAQLZu5xsbsBqMsXuXw4RqD6qSe2VF5wsv48FHnjKb241aNC33dmuWtbacwzStaJBYfkgaP",
  "key2": "4Vj3uTXXHswdFUxTZZ35bRefCPyiUiZ7Q5HDDEdj8nJYgzcstJnuo4HhvxZGurXR3UVDpEfUhUtLmizXLL1RP5i4",
  "key3": "3av5ZubhBE1g2RxedAPxVJRP4AYm7gXBEnygCXNuprhS1d54LGSVXA9dhcqPjaN7hysZo5AUBsYAiHRUbJPJvsFM",
  "key4": "31gezeis5zVDBomSx58tovSfMPvF2kLRLrwHmPAJdfeiMNjJ8X397mpmZaqJYaeGFYxDSX2TcupEiFBz7HUpAfun",
  "key5": "3HH9krNErbAAsgdwrKFojzSQBAdcLVpTW73ZGRfhHiKf7c7xp9YGqGApNamHwYvHmucvSiNUEA9Y3UmkpTUU2Zir",
  "key6": "4eaCDFjtYx72hSdxGyvFqvQ3e25yCVmoJFtqA1ZQ7yx2c4WFLKLM3KisYyH2zbWRmfaiyqnB4viqgjYaYL5LuHe6",
  "key7": "2ytBcztoGsMhFFrZr29RNn3nj69KgixS63iNy92PrxPa5tLnGWbVfoeiPkWQh2avtikP4G4S6avo9Hwg59D5LhkA",
  "key8": "4dapr2r6rAWfBgi6SAGBVBcc5kbSU1WKJWwQwBcjpNaSmZNcpumNNztxmymvGjqzyALcZijqVTTTd1TRziqvCdLs",
  "key9": "446hoomNo2SW7NZ24LBR1vwQ3i3aoSqL5q3HheF7655Yjseh3AqHKpgmhX1KMVQmEm7CB5gaZZhku2fq9HERv3yK",
  "key10": "22yo569qGBhh8USTQEjgnretsGR244uZ3Qq1y5g58JbXpRXFHB5YpyTiowyLv1JukuiXVmq2Zkazoh5P9Gzew2Hj",
  "key11": "kVqLC3JajwUAiHbFEKKbXzD2F5ZTQZj5pJWsSQ47RAcHGfstyy2hmb76iqwDRkdLUnynrMa1Hby1j7cwHZKJnHj",
  "key12": "58JU2FDf4rfAXxe2NwxeVCawNT5sirE2MAMt95ZpJtBGPBGf8QAtFHpeGngbrx1uBjEayWgDmqr4fmHyevPHCFFV",
  "key13": "4c4tYQNyGsSF7Ya3VA3afVanfPH2GB6tPWyqBKGuPzfmm5SujsBjEE2mdmXK5EVd7ycbfWNewXc2QiEN1mLRhonD",
  "key14": "2wypc2Etg3s2JRm4BVGgtJiHKauE2fvAkNxnmBtULdqBFPRQQadDJjsgtDRSvMzS5yVbs7dLFhZbMuBAPPB5kaEE",
  "key15": "3CzS4XDQUE9isJToMWJet2eGprm8nc6gre9tukE6KwcH76mDicKYLyVWwuL7neDpf7mVArE7iYU16Heir8ytrywR",
  "key16": "4j5tvb4s8oHWgiipsZ2r6V9PS5PhEXrinwUEwi1jL52sxvTmzBwTzQJtSHkBfGUKVSUyyGksCzRJHbJDRHjokRGA",
  "key17": "4jJomEuxHoMsEwWzAgK2p5yyqrmUfbscxkceL27A4XzyPgARbinFQXemXQ7fcUChuVhZzRbPtLVbSteE8k6aMGZN",
  "key18": "2V94UZkToVYGwe5uNAgHZ5qzLWJ95YwWgGZe7KsB5ijfUxuHM8ZfVht2bvLAU1tPrPtcbheftbF8ZXhtyMxCUuYk",
  "key19": "4zF1syLxz5SSJ1nzyiTqGSg1cJMFRU4mDnBSDs3e5ZwsXDkvSG9GoaFUxCr1kExsUKYyoFr9vuHrDGKYHVUm6vE3",
  "key20": "TXJkDXPhgtrjSNExtSAPpxz6HkEkdRdotkhtcNzvmLiAk6hyrkHDErZUj7j2uUwf1dr4qsgVeMp9vTNe1yPEfMr",
  "key21": "3Qy3fnGfsYgkaU5H5yh4yzng5JRjigHpT7MCGKcmFTMhpQLYTGGLDKDpUcFHznsCJpJthr7EdCenxuBcAaadoxid",
  "key22": "5MfM7Jnf3hBJgjqapFdmVtNqjAY2Savb3TqPbp8y6N4UtTmgS7KhjecWm7LcKt24yZ2P5wWybPZegTY3N1WbS3Tf",
  "key23": "2WoHGe5Zzq5SkVxdsaLUWT47hX5HCcxqiz3jEuYFfaCUt8f26SDe37qy84YthVy9NE5Kw2hVryEfVL95B1UVWdTx",
  "key24": "h3tWXruTW6spz7FLg87BnRbHXJ5Gr5eHRn4Yo4W5xXYdP11bZwvMMUfZWzfKYBosd7LzxMpiffTArLp8E7xS9We",
  "key25": "4LHFDo5ENZMXWFWZzcXy5pEix2ux7TShY2BkAL5oF8sG1HqZkkim4jeN3chRNnxxZGUTGDYPn8FLUH4ajbEGnEEU",
  "key26": "3vBm7oLPDcCQDjgYe117xcfwDGK5dKnYuW1c5SPr1j4aRwcfb83DNQGFQg94wSBBFs5Q1chdk1uYe869VZSFz67",
  "key27": "4MPaXDFEQ1A66TXLzeg6ZLJvKUwgoW1HgAQnLfU1K1B2kAkacK1UZxf1mPhHYfwPpj97Mc6KWJ6ETRt3sTC7qMFX",
  "key28": "2jh1X6GxoYNRhP3q17DemYLSd7wtvRZsJAMDU7j94W84vS8ACCcB79yzg4Lcs1WzG7ZJ1jmTTYkEnrhruuDdbpSy",
  "key29": "4xQv9SbfTkxSf8r7DHpDuUe8kL2NdPNV14KiVyunFAg54H5BRbtRQ3CuT7tLVKeSPBCtgatwidMuDxgT9BgLwNvf",
  "key30": "42zLZLL3MtMAJXdHgtvhMc5PWBTFXPNF1N7gFmLiuQywDM3ySB9Pji6nfxH5jvtxU6S36wMqCCMsfgu9fZzyE6gs",
  "key31": "5KuJRsMbNdRrmQKZqhGp2JfKyi5Apeq7Gn8Y2P2zRrqjdeeGUJd2963QivqU2KCDYdoCcRRXEmLfi4Cn1VND3aGY"
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
