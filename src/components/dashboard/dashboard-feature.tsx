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
    "2bAY8NmLVLVyav8HiZp2uFp7fm2X4kDDAxAhAVVSti3EEfJDTKbSimGbEFpT44j98tNgzeWj438Tz8FE5yLJU8bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T216D7DpQFz7n2XkLfHWeuDh1SHZ5untZUrNBTpjqj9CHNeaypJMrm1qsmYzHXRem1VecbPnYSgzQ5mKSi8rm4P",
  "key1": "233UkF64bruPnTTJnnaKUr3xHQ1DhqycmBo23P9WXaJZysLt5SjMgSKc6Pi4UxNyAJ7CHjCQfcPNQphkkc1Eokfj",
  "key2": "4U2vZbeCC4KWPFHSNkSgXKCLV5WFJjk2LwjnqbtVCUHxZCPWvqZAFcxu6S1ErmsrTMFGDJzrm2RFazaYRu8YSNVF",
  "key3": "3EYczcbC8z2j83kr5r2ExnLmT1w1JucWy1memaYsQQ4zoXYykWYcG8qshrgP9DanPnCPDHArWwd5SJq9ZEDGHotZ",
  "key4": "4pTs2C4j9Uz3M6R5VZrVUTehac6qeKg48eiy5hcacUxFz7DpnwnNre38iXJpBE2YQZzHhmhLbxFmxgNyWW1MLtwv",
  "key5": "3buVJUq9jr2vdc3hBBExP2yFTiVfqmYqivsnpPcWEufnmGMeoiQcpv1g8B6H9Dd3wWJu123ZF7dxVFhG6TRunYfs",
  "key6": "63wg4fc1GYkjcAnUquXAp2R7fUTQLDV4f2bYPCYF1QESsTyoE8SggrdfFoR1sRGVbUd6iHu7AahbWxUaM23eXSFJ",
  "key7": "7MDp4Qnp7jv5ZEU6zTgm29CLURbigLFWomkScCwmz2nS1yHbgjLCTm2smNH8szatu92ctvuNXDbSprEWXiAf1L3",
  "key8": "3yRj24MSFYqn2XzxxZhHrY8BhQsgmWuPPGijhPjUuBJWZz9yZxWxc5cphvrZ8JbVE1FEkUTM6jp7qVWxTN3NHfQq",
  "key9": "3q2WkTLtPBqi2mYKkqFseQhWercTnSmLx8j3ND21GAH9HvbP73JSkyZG7YhzTtvmZNtRPfrH9su1Zg55qCQswZTh",
  "key10": "E3f6pm3EMPRouJpgkoGWyQjPvNzmpsKNY74Qob7nMTxsYfKQNpmpbDBGuGB16fMDTYPJJ53FuUVWKyUjK7J1FBm",
  "key11": "3sVWBhJ2V91FLBRaw538o6xhmUq5QXqcXq2qkrpBtoLtnCyo5drTUmz9beXW7icHK2hKjRXLSSMQv7rhdezzxWFg",
  "key12": "2aDyUvqzadJ9CAHyEygPFkDemXNzgYPEP2iM6PLLMycThVXDWuUXFt4P6CytczjYxdQNXSuW82eATedzwm3VbV6e",
  "key13": "2VENYzLzkjmAPASWVAjdHs5eCj7Jmf6aNWAXjGPUNy2HnN8MHVa9gRQZ9yc9sU3hB3PRzrVafhnbgZrpW5FZjJbJ",
  "key14": "2EmWz5rxD1bLC2QBmHoW5cf1DWqm4m7uLVJvDcok53Ld1SSip4Ky5rRy3qCgy1ZRky5ffpmhk8C6cuJANeJRU3Vq",
  "key15": "4q1pa5QbMe7uPPHGJ2PCjXpAXfBZuoamjed9euJ8hPPmeeRyDPYcmi4q1o6bMmyWBuCpkxNkcSRW7Lnm1aSFmSRN",
  "key16": "5uEG8HBaZcgomAURtqw1882jeHiDoEYQZPwJhP6kwxuyJWNC45jeAQm8Cv5xHUuY2wyyX3BT6boYhV8BqUmzGci",
  "key17": "67KVDTZWbzKoFQPDk8fj4bvAFrZcaSwdFuxoYY1RPHDFajJrQoLN1Fp83dvzZCX6fuoL2NhodzWPXotkokuAJ1Ba",
  "key18": "5ReEopEZLzo3Y2eWTCDmdm7DnNqQE63Gwas5Lvux1NcpRHKrJ1eHPsgdJ3gEiStJeJw9ZMCd4UztCFpmmiPwpvAc",
  "key19": "5KiRhJeV9VbV83SZwLxQmZyoZSbnAs1zxhQutWREZLW8hkdhwVR7BVyGTyLG75sma5ZVWdf2uWkCsQP31BoLdNi1",
  "key20": "42qQB4PMXxx9MfzuqnUsijkgkBZheMhGAAMbUh1DWdtWpznC4eTF3C9zLHxpSEJnR4Te1EevECoD1Qc9fSN1a55F",
  "key21": "Gqyf4Cghpq6kNEj2X3Ygx5Q25hwmt7tYirqkUfmg5PQwNr63wAefHgEBKohvM4qpWBCL5Wh31GWtcwAAzhZhdXU",
  "key22": "34UqaKkNkCSCDxh1UHBtKKmXFAW46uE6mKP8tsptBYWCNRFf9gXpjnMnhf2GeJj7MpkZBV9hyT3UffU76AUfaeuL",
  "key23": "QQ9HGG1K6Y5gswCHRC9evxe5cRwvg4obtUvFLguBGGG1YdnFdgwcbR9GjpShZbZWQTtJRfizNCLxhY6Rw5EJZxv",
  "key24": "3P7KzxYzq5ErujNPaF33s2UNKbjPnMBgSJozKDU19xdgTszQGGnmT6h854tn4qUfEwZcvxZrfgHFesqvYUacCFe1",
  "key25": "3Df1GCG487j1vQaezVxeNCHzAKHqM84rt4teV9xRtfJxZ6jDLq8yaumVHaveQHUXfGx3tvjGsiqBV5z4Vjhn9KEY",
  "key26": "2jbTKdPXUuPitJSiCPRMoCPMkzA3k5xvbgyZHGtbanTdNPo2x836FPJkNWs5qiYQmgqzZQFUQTmLMBrHQLeC71ek",
  "key27": "5qD3Fdh7kMGTrhbsjdfKF29wttmo3EhZxSzfVScMRwEwL8VCZZckxyDVgKXhVvdku2L35y6geQs5y8VZAsiHKHj5",
  "key28": "2AKUTdcvnPyALbtRMPgK6kCPj2XMKr9ZMn9V8ZBcHTWz8igctGMDdrEkoEtSsxn45Qiej8qBg2MeZ89TLj3P93cb",
  "key29": "5mhbeTD8FupVyBHPde3hRaht7jryQm7EiLTQoS3dzf9vVkZaTe4QuqyskrGJWcjEtveRVxmxfeyzeDEVrd8oJtey",
  "key30": "tpZpBQYLvkFFPhehnoS31mfD7R7Ea13T9GcGXkhd3rpUud9Q3F5kQuEJKH2WemDSbM9Hkh7CA2kNDA71rx4T5o5",
  "key31": "2FqjMYAajDizvMgHe3pA9DC46XUKV7NQS3yPZExf2pJatGSDFRgpBzgP7AeMXfhnimwErBtcmfEgGhohzgcTF8Vo",
  "key32": "ZbsWFyjbeQ4rGX8uNHXcLbdiaCTCYiPFzzpSP96wZouYyakYoHSzKouadDdipCQKZiZsv2WD8D3Cnrgp8bNkXXn"
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
