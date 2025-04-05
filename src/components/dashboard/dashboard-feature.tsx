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
    "5SYtGiuaNEML38yAJVSTFDV1RwxBVogkt59pLrh6rR6A2qZ3zXmVDAoUhf8iMvDeMvBCFuoMJvw3poa62aSUTDjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fdxTP3zC2f96cFuKqzhPd9xm51uDQAjP9SwkSGnsacVFEk979jw65ucZTFbB2GgGk88sTgPJS6rv4dgxXvbEA7f",
  "key1": "nXPD5tSdkLcnS4YrEwjPuSWVtN4n3H1uznbBMgLF4w6z6i9mL5e3gKw3vGLzpJHWMH1XiBJg2vx17YgmaeMcexk",
  "key2": "3Bdk4vABZFkMgmNBr1tafTrfVeB8PPuiEfxXuNhGLuAmbBqZ7uWJ4hFHSWKr5SL3Unr2A6Wik68RG2VzgBKbA7et",
  "key3": "427o2y9KfdRbdpf2BuFFSed1djy2nHsdXbVBA5cypU3kE2rTAf862xLxEE5AQ5zAB5hJ8rckb98ABGcdrocTdXU1",
  "key4": "2DpM8MmQS2DsE4Zo9UdYALhr2ouYWf16jqRQwKBNSwCYQK32okCvCoFQ4dZ6dirpUgekEgA6XhUjv7sJTxUnFiDM",
  "key5": "2YiooGFJSShoes4PU9UpxQoAD9rCHMVmKQt9V7FYDEx1qtVnFS386UM4yUCfP8k765uoCe9htZQC52op8eRYLtQd",
  "key6": "4d9ZFB5wnRKNvK7yEKVANyunwN9WGTsR5Lo2mSNYGsb1eB7ZiDGcjNWJnZwBSSRWEievk94pTgXd27MNGp3nGJiM",
  "key7": "2ZaK8J3U8fLUjpYpvcY9tFyDPvWjReFSCjR6tbHR3UpFVmhm1sVMe3LRmVtMZpnde4ngnjjgPaV6UNjtRadALv6P",
  "key8": "31x8JVtebA1c5QpLK1J87KJrrVKYjYATEigjm4PTVVFFwaipfFRZTameNY9ih3kHraBwGuzJ6VF8PZxcZgUApNrp",
  "key9": "5eoNnvpX5MP9PVRiaCPMSANw4HDfoCRCTbWx18LyMMPnkwnrvXukqKj7P2CCw78cTpvZsZZPBVHkYNnE92H1iK7A",
  "key10": "5KWSsrXdnTbazLSAyoSnr5NLsAB4bYu4cb4Wjw4CG13QzJA7VNxJzSZ8vybRjSAnKstJere4crrdnZqTEdixkywQ",
  "key11": "5WekgmkNAL5hNyd1HCiatzy8ZgUcLr17pEQyw3oMriyhBXiXV4jH3prHKGKtfXFLhcsZaSdFK5zT7pgtESTkPkz9",
  "key12": "CYkCWw1DK2ton1Xyqd3T5FE3UU2fPH4RXxqYDHq5iiYxKSKAANd7iaQSEJVTWRbo8Ke1sw6TjJYYwJAjkFEmHMm",
  "key13": "63HRqspm7Wn5kLpJ5rppFNtiSM8UKCXo6y2Q5DAoWwN5hHMcLGmArfT3hLmgGBpxhLWCCj5vFFdKG1iK37MyjVKY",
  "key14": "4zC9gCaW2P8V4PtXM3dEB8F9CN7BqaRZZmUGxyhVShpeSZWi4tMK2wqTjqSyqozwpG7c5ow5QUaW1i5kefLB8C9D",
  "key15": "3vCmcrjgxGWaD1x6kXdLa2P9bHbCtGgtZCMW78MzFxWMxvorgStH5gZLeZLtE4xPhDXhxQ2w9ZG5uoc2kBcdUkuv",
  "key16": "2KXcJdaFM8e5WSfNZwK1No1e3VcE9b4UnvbsDEZ4j9fGQxfAks6Pk1QxsSVSgQoBBche6qvonQyS2m1PR3LupX21",
  "key17": "k3A3TgP9wFr5yYFzcJueGpoSJQckMjepJ22TETQHGJ1fNHL3UuhN2Sw58u7z62HsSahL4UzSPKxmcS8hwF5xZNn",
  "key18": "2RG3FoJTmsi3cQZNqvb292X7GQF15kh6PXikcPviwfCawZL3GvHvWG7wUVE5woy7f5DEj4ttfZKmxLJZTZMkCoK2",
  "key19": "YLkDANpDMqCMczXKPXgu7bVizmL5rb7VZxpzJjNN5bu7oFtvPdAcxVQFXqRdURBFiRSb9TnsSnV6ddp8zs1nHG1",
  "key20": "35C3ruj5SfsNGjDfQiiFNtEEg2P1cRgHDTp4THUxwudJYZAFYFV1d3MWjBAyrDxYVxxxoan2k3DUe7VticU9Fwbs",
  "key21": "4yt9swMUcwBBsVt4Gtfo9Gcb5HifenhwmqnZVRWywPeDj9B7pAQjiSjSXepsAoh3iYaekxHPvAYzyLkv4TR2H3PY",
  "key22": "5STCZkgJdQfdWL12pibfNU7cSxbaziQ2eUcDnqajuLecQ56yZRvo2UrLDHtHSSxt4d3J1j19hEXEeXAKiR4ZfDfx",
  "key23": "2Fv7P3j8ErjDHefiWrb3gSFC7WGSBcuvvuYDRckWqUkPdMrmXn61qhb8ofUG7GrhP9PSvsr4RuiZnymJqiMtbVb2",
  "key24": "4JMSTBKf7qeURU2X1GGHVUmZBGGLvAVKspazAq3K8uYU53FYptLaNxDwDKJE6hhaNZuvnUNyaEAjGiCeYLkyLxmB",
  "key25": "2N4fdJdBwsB5HnBuwhMZgXHZLXV3NmBz5ggYFRjddSeD8mqQgV6EsoekFikbRrHuu1WKeHVxTTiuKv45jiwRPjfW",
  "key26": "5zxbPtUCDTdZpYmGHmuLgZPvkUA6btCrrsMGDjtWAYWqhhtb6dTBUTUgxHxVT3Sqj6AGLfQMZREYTUfKqc9dYWhj",
  "key27": "36snUK4Mzk7YJ3WArvccV2nudtwDFPGmqPyNbXMSZB6X5DsxmJdNKVMtt2adGVphxXhEfbzvh1DdQ76zRQjwkSqQ",
  "key28": "2b2kwAuyLiDPUZxW1HphWNyhDsaEX9DEXjRoSUhx5NeBegczuiq4xbigmLJn5jQxyRUmBktRQANAuwFmjNmBjmVP",
  "key29": "F48dr8cDBYExeRzsjZRn2s2M7gArBD8DyiL3CK3KHXxcu5aFcJb67NrNZSshZUMCDnxLXyc42u9x69eMhnj2Ngi",
  "key30": "4qFuDiNcxBaVN5rzVcccb93LoJwiL5bwFCk3UL9iNqQa7LeYtkxrBSKpyQD24Y2Sz2LvbgwCR9pG2S4AhimsjzBj"
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
