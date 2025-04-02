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
    "48LwhXJ3CbDMsp1CmardABz9VeGiQKiJ66Yuot9CZKyvzU5DKj2zAkr7xuBqyrDA54R12gHbZqnoBaXdMoPfywJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rX3KKSNvZejWYVQMsHwFxuUMPN5kG7Gk1utJ6DP7nxYTWAAnCw6YZB8hvDQeH7JLBCfEpjfWxXRkohfZofLowLb",
  "key1": "5voBQcPkMwMs9PGDP53eYgY5eJiSkKxFqZ5UfwhjmbABEjJ9JTxsvUeSLyMMXSBp5pZHQ15QnbMR31DExcJZdYZQ",
  "key2": "5bmV3GcvAvzxmyvWeoD7TLiopTmPtcLK18SQspfGc3CaopyqACsFDNi3cufLFaXnFQb7wPtTkQkq6s8wSNVdYumQ",
  "key3": "4NTuf7VEQ1jbeQKYmnMHxG3dVkmcRdaD3PL1zF4g3J5PEpNbvgiti1o3DpCHvnNumAFKzkpV5ZHmw317Hxn9qbaC",
  "key4": "2kLwQbwwSQrvgXPgrvUartMyVWPSJsU9Q4V8RwUHfyqpKMWKv7t8kMbhVLWxJ2Em28Lwyc2TqBVLR9ewHha2Wdt4",
  "key5": "5ME999bTmsvySemS7pB8Ka1yqFtHHfG9XcW5JdLRAFTwMZ1mrMsjC2VLHcGCvw4gKs2VLb3XxcqVGPnVfLgUeNW3",
  "key6": "5qJXCso18nxGh7rQpikG1j3qf1DpKHF4SJi287UTWSXXBiQ1oagMXGKNzUe2UrdfQ9WAhhMdN3Q2NveCepKpsqaJ",
  "key7": "57i9PnZyLjkSJvS7VihnoDPJQeKdjUF7WFHYW4kn5zgreLSY5AHLNcCKUvJGMqV8LY73fhBK2w48u9H9o928vswX",
  "key8": "PCwJnNfd1VRM6rQ8TyvQVWVKKYYBq8XCiVWkJS7hzu8QNCDm57ShjrGu5XhxZhwRRsA1p7esjW1CUtXeCoDp7mG",
  "key9": "3g8iUoSio4UqmqNYKSMegQJPPh8sVnsrPpCEhkyaUzWWWJZpFAVSLrY2eNWkCWdncN7VXPJCDaikX3dNDQgWhrAs",
  "key10": "4UWzWTN2L3UTLyPuNr1nBFGYwCELQbRbyBtZj7d9q4hviZqD1TEgVSAqmVLAKTBU4Z2vktms2ubXqQHYJ5KNUfZy",
  "key11": "3CGdsqhSBtUpXmFmnLmj84txBEJjqy1iZ988d8ibkEdVvGXCqB6GfN2njFZ8MCTwo27FhhneCE7vS8gXQmvcKkCG",
  "key12": "2foEoght7dUQBpqMFYW1L2yF3vsaXDX96w5XGmpnCYsjZKEMbt2gZRoi9ZUQNhL7JFF13Kg1Cev9rjmYRNjbZf3R",
  "key13": "5Sp7DoFge24ELZpZC1AkPNdTfrkY5iVqPEhXABop9fvvELSnyJMRvRuCyUS1he7AEizRSjP8cBUVLpkmRY1v9B9g",
  "key14": "5DnM46ztZgRDiTLcfvLsBeoAgbEaThS3vSomYtCHAXwSkn3KerpJRuG5pxaqxhgxfLi1KvsKxFMUSFUPX9Cvtoup",
  "key15": "2ammcRsJuSHK9AoDjMKbrQXp3TCNcgfTwdvuofmHR8WNxXsWMehEhPRu19U2wbc6KsLZC1imwRC3tyw5D6e82pkV",
  "key16": "fzbyaZTJL6AK81DTEWhLWYV8xAeCtPCerFk7afbTPVAUB9U87joxCuAXyGaiuofK8MYg4SpsBjQj7wXtuVWSzbt",
  "key17": "3RK5mLGtBUqgfMinGLMopcLhTcGkf7EhnURWAjY8Hfb6D9qGFnvQevwW7wZ5zLshxH57fRMbS1cAnLZMqE9drYHF",
  "key18": "2ynu69N7GkramL2ReTzDq2uuhyJs58j3EyF37bkgTWWstGR7Vr2L3AUKexKQ3cLR27eXn4iAUvM3wPdKTS5zfjtH",
  "key19": "ZYrs2WH5F6xQRWRpSGxS497iT9GQpsky1QFdWacvaQvZfgrba8jxDShiy2gM68wU5ikCdFkRQCQX5kSoEveP6Lt",
  "key20": "4khriG2ZdH8v5jzcuksNHn65kw2HgarfFco5zNuXoKBzzQxv4Xo6t7podZG2vmnx2ySABpu1CcH76cTdFM4tLjkh",
  "key21": "2DtcP74tk1qvNGbwcf11eUP5sJnGvndcjYmDmAyf5qsCQLCPvu52GuGio4Jh9181JFEuJeeUjyAs4G9ghNMYHCiv",
  "key22": "38sX99VXgr4WAjupBBPkgeJmAtepXTLp6iwe7ymFVYjgRY2XgB3xLjvgxhneBQejrhURFFvebRJ8Qb3eFUoda8s7",
  "key23": "2aVUq7mA7bGSAp1QGtCDkqHGM1bRHppo43G9A57fuHv3xC81HkUd8gv1ErzJhB8njbhDf6spD436vRhfpkoL967M",
  "key24": "5ZoAJVGiajK8GCsQuL5S7Q5P16eLPD8RdgyBytFsrvXbNhx5MQcNjTCaxPpm8LCHmHmZmHtCqf2CFmZSMsch21PS",
  "key25": "2N83RZDUPMsmU7stLTKjdwBtr1RQAXht44ht6FeBwiFBS3swej12VG2AQRGFt75Fgo4b1aKPk3rsNjoHUFxd5ZuG",
  "key26": "4reKdLQa9yxF5dmiedpoythcMXvpG1AU1uycfFVyttec5GfiCHWqGgU8gkc9YMRFLi6DMAN4KQMAUVB67bFH66iK",
  "key27": "GKddTS1XM2eytBrpo5G8eFjChFf9MxqGLojawAkpf7KdfGchZPza1kSTpxrWhYFAciAEnCMuv87KjvnKuhotyEs",
  "key28": "3W5HGGEMrbzqiYzF3VP1GkUHsq64uPKfaygrwWZMVxYYh9aSwaC2fFfuUpc7maqs3yRtChr2ykSfqffKm7x5Hzr9",
  "key29": "3XFE6ADjf9JfVEgnAHHoJcKtiqoS1LgkLo6bYMuzHt1tUSjWg44iNJXJkKRbcqQDCwLigj5Xid7Ze8TWsxCr6UHj",
  "key30": "2rZRxk9jF23dygQ4CTDiBtQtLdejtuzFbNgzuRePmHHPQ44MjoPMnRNGePPe1TpbVXV9VNjpRxQYuvhkCNwTPmeA",
  "key31": "2RgK6ugGbCh29LU7o4dfWx9FFXRwFpBEWvFf2SiWsvbsE8YAknUVPM4SiabVSgcPo8BawktMmDoDwTd1vwzKmYeN",
  "key32": "3K3re6NKRDjbYYfxruCc2HAYd3nYzWu5j9zcZTw6SSDwPfnJuJqpXCAbXvU6QCzir9xufbZMbqsJTiEFerTbNj2n",
  "key33": "2xAAerJ577n9zLHn7cMokKTcXXUTB74aDVL7fq7mYfg8E6edcz9z4sbQCZHLXrDtkJENNmGqEsXhT9nD5aQnncpz",
  "key34": "mvG6DJo4NokeXd3WJ2nBVuh3bWRiD5Ea3QmkhuusTbaTsicTq2znx3gUhZRLvbi7wwoqboAu69u8rYvXvxBHxgc",
  "key35": "5yYDQHFGCJLtSMrg4JSZWPjeEY8bbrK3mzinuEKwwyuugPqknzhkotwJ2PZdcx5VfEnjnEyshiByZky3GXJNqMUz",
  "key36": "5JhcBhnFVpk6SrnMB83b3B1RPFcWJnWWiu83vwfVzLQbc8mGHgn953CbqkzVxd5phEquvGPXSS8WG9EEtVHMr5jJ",
  "key37": "2fJxKq6tUYk2rbbz9nWvkZ4pygfw95CuuDbftJfBAHkwJ7qYVsrqhLHGkYR6y9PWtbZWrScSKYKdKBAi9LYDqwr3"
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
