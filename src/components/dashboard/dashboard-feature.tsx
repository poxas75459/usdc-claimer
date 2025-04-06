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
    "4PSuGvM6PnH9P9gaiFQFr7NYeELn91VnE5NPna6QLVjUQZ6ceRVLHrWtwwFofe9gfCd5cD8c11T3PqW9z8JuEs6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33UH1DX3ubVo6mA2p8gdrp4M3oEjL1axq3wqGtcz75fVrVph2sPHtvH5uCa8xG8X2AFceuVrv68GzrwoXKZYRx5M",
  "key1": "66EjVx9vDjfCdeZ19NehG6SWdTTvJVaZp5AfbjKLFRy4Atw4vBXvEofcZgWRrwXEzr4amhmwpk195NtePP9SWzXu",
  "key2": "4BQeZ59xRxvWad8cDbNq9t7HENrqXAcAobmzFXsnf6r5KLWAhp2uKyyTGsntpjLrHB3QYHaTDxzzzjY1xdF8F1Tu",
  "key3": "2sAt5oRbEnwLD7BYCmBtejwjixvbbKcnS7qmT9nnk4LeC8DrFSRrPrXnzkAjggdjobYVaLk3YJyQm5JjTgM8Qp5M",
  "key4": "536kvCuwRApdhV3KJAGHNisxRQnFjj7Mz4tQ9r1piWTdFz2adeeDQwpP7ba4NzgykdtYtpKrcDJhHmU8MAt3qxbF",
  "key5": "ewuMNuTY942NtcFh27USMvYZjMiSrrQvvzJrzhHdYSBKnQm1qhQYykojokcDp8Ft8R4kzqLzViXXpwAN9TQmze8",
  "key6": "3V1mBv7bwJRuFQx3TP12htgBbBeaUchAad3aQLXHYUJ35ptX4qdf8vNm9oGwCbmaTQhhSn4pkHxy2bJtfSPkh6py",
  "key7": "63uGwivzMCEJNPfktZZVzJwz3xtjeTe3SWoaGh2RgVLECe4vPc2KqguMJcdSzmWQHozkEAPb9nkbZCt5rjCr1DJW",
  "key8": "4VttNnjN9vfhQLTpHKSN7G7hDyrpujxnMWCJ2KVa7TH9VFRCsX4h6wb1ZFNJipEFh6P7npDeqUc9aKRCP8SBvNqY",
  "key9": "FnyTTVWuVHTS6gN99F8Fr9eEv6rUqFVBZm3Rg71qrEHQ6d6fdmXxdSypeLqxJKGqg77wGK9Fi2FH7UrbFkAqxwo",
  "key10": "2LLkAL4xtUMLe4QrfjRBFXzZNozpJy9kNi9X2FfuPL4r1z1ZBYCtkduo2oPg1TTPdELwVTBbQUffVwL9wQ6NqJBU",
  "key11": "4We68YRmoiuMGGexSTaJrUJcdCYsa4Eda1YRBVfMt9dztEwSfQhrrHeA7nU1FgEACTVvTWvgDquWerRVCuatQnWj",
  "key12": "3XJgVmb4E6jEjk3EWucWGta8Bhtpn26vL5czRoxJVcFqx2HCjVz64EUff3Z7inUK2zszRSedGSo7odZPeV4cQD4a",
  "key13": "3T8uDA9xfWxzg8oB9RgcFn1opykZsGaKRWnSsZ6aP8ptXrA3GK83StPKGjPKyUoHHtHbqtcPAstb4MMYG24WLozq",
  "key14": "56ioYYf7ap57drh1E2FFg4WNMMc3KVdozYRJanrRJEm943uAvahBsaaHCVm8eRyZ6xqiZ5xPYDit2xef65e7Q1j",
  "key15": "2snPTjCg4dxHKRRGg9FsRrYgedpenxMn2qnjR994zL6HQfyA7mLNonC1P4CSzR6swXMVTNweVUD7AZYWSyguX51C",
  "key16": "317uU8MHt327aMR4w6RMsLatjk7s2UmheuPB7E12k7Ei92csLMshDX8PRjL4jL6m8vY5RmnNLTPKCGATZd7A3mdm",
  "key17": "5hNpNcrtX1aPMGzhRsbzww6uEo82ZoqLNdyvufqM3XQWdVcpHap857WaMMQgPnQQg7ws2omsdhinden5cCLZQaQK",
  "key18": "V1zuRx2b6Qwqah471MxBWG8sMTP9DdhqCxybAqtKq8A58B2koQ1DMtMWMpr4QjpmLYn2f6gQUgDz9XkEwXetQqT",
  "key19": "45qMHj5LVnbaCjGZFdARmTRcu2Xi1K5J7s2GTcZRnsmiW2XsZ6iU44HzpVPJn6W3RQs6hq9iNyoT23Tw1pWprbPq",
  "key20": "4QAPFytHTvTUrK15cn97zjLtYBGDjKqorWXGYTQC8Q34JF76izkPbRfQPX4TabdcS2DDaY1KTb541CbQsRMkDPua",
  "key21": "4ar1LR98AJh4ynSdz11J8Aet32YjudFr7Y6y6bu1wXWW3DBC6KHBLUE14Lm3MTN8NBdZbWDXaywKQUPfT78HK6ph",
  "key22": "23437rx7A12jcnnT1epERrVpvQ36pqvtsNXBTZifk7vAqRBKpiQNir8sDWNzD9fdyDSPvW34EdcgHVuKAZPawe8T",
  "key23": "4JKPqRHn1KocMZuMJtB9oRctKBzCykfui8tbcSd1RKMC4b4yeF6QUZFUBsymskd9yAnqi4CcHnEiJX39WBPuFzmu",
  "key24": "2j1HQNN8VFrfqaMwGJpL299C9vJEQtaL1HeDpqzB9CFend1TyTcyDXdgSi1K9e6M57jW5R7gKRAuzVNFWZxWCUYV",
  "key25": "5GM6cPaG8vZc7DzBTgG8cB77XDECvoDGL6J4GxCuuRuhDCFpPc3Q515cc2hqwsWBiirfEbvU911ATyDveNjGxHd4",
  "key26": "3uK4SY94KHi9HigSUuyJ7UfwB3ZHsP3qXpDRY5Cic3Lixfr5ZWJr1LNpMuup2Nmv9EoxfyJX89hE9YWb7ZbfSXav",
  "key27": "BNu5WnmcJjsKocue5LPknyW7CXv1Yn7xvoRjNXEafJRESM6YwWb1BTnxx1LEimXe2jJRywRGnftWBg8wHVey2xZ",
  "key28": "izcW85rfyUY1kLEHPxeskuR9mqWvB9ZeqvSi1GsXYUiUE4Dcbof7qrt4KyAYrFv2kbXGo9PeR8ue5QKFJ8VmD1s",
  "key29": "2dCXLYRvbh445PzH7Q2JwPn4JF6fdJpttBP1oPCbD53NGtvFBLweU5szTMf3NQoQf6ALDaFXBdLJnSyT1PvvheUH",
  "key30": "4nZAzgRTVEdCXXBxFuM8zzNY8yMZdT7fqQa7U77K7zKGP8Xu5vmNuQDAT675wJfbW3Lk4pGj7f17Mzz4myYSiXa6",
  "key31": "2XeWW3jY56RWXUAyNByF5iw5kQwqkELwDhvJctX2QSyGjaRHCPVghpJbGEHpfiutKsc1WaXn6hJBrGLyUbuf6E1a",
  "key32": "3zGDLYhtwUPbSxiTcGUyvtPmx9Na1BxjqBdwXk7MNLi8uLM1Ue9xLMTfrb35R5tMXk9DwWxTDpj15S5aCE3aL9ZA",
  "key33": "4KXD7uR9g4EpPZxksrLzdd3a9qiLoo33HTRSwkSEBFo1J991SPGLLDZiifuTMPXQKVxoYiLjgYphPFYP3pNdxhmW",
  "key34": "4HU7nyGfxtXj4V3v6FvERp6vegZvYGoasP9kHYrqvMnCeXmdZQYxwSmMBuak1tg3hrGAyA1oxuz7jbojneq4TnVy",
  "key35": "2YCW42u8VoHxJBjV9byYf5UA3DxYL4vEUUFyBhjwEEMT1zJmaXRBCZe9PpnPa2c3EPMDy4P3BaVrjZUupBWpA369",
  "key36": "2EVmsgupmko7jo4aXZQouMF86n5qKmQsR2qBtpx1tgJfD8jLLnqC4SUwjSDJnuPoy8Zu8Bk8WJcMCA9fzvCHryoe",
  "key37": "2amS8abi33uRrWF8ZcX6DKni1K4SLn3yUGa358zCjFvFTcwqS6rh3z7yWCjaDUwCxmgT7e45weWCKTkXUy8D5LZ7",
  "key38": "44p5PHNKA4yhdAR3gpMJfUm7uTBREno7zYmCtaWzYtU8Q99QhCEUJyag5KQ3XCHsxMpCWSwyrSco65NJqGf83L2e",
  "key39": "mLPAwmNMoA7b5FQCMRyXKKHqG3L8M4jgwfGdoGuJ923pci52vuEcYY4gy7f3sTDR7isL6tMigUckJFmSn5AGGMB",
  "key40": "j6tiAfGp9XYhiGtQXYK24GvNnu3DVqS9EQgorLk7B5akyMdcf3wMRejePH2m3eByCRqYStVENAugZtxpdEh4gHu",
  "key41": "4VGVkNSFtRFQWcxDKgsMhGKkr8CmxjrmhuDFJ6oUWLQKyRyZsvsNnbMy9ZxnoY5RDJq2yPCBFZTx8ajBNscLiF11",
  "key42": "53Pa31wGJPu5nEnrd8chcDZjuPfyJ6BYc3qhUKz6ERtDWKNH4sFrcFK7h8BY8haC6e2EtQx42qaK8B3bZ2GJsffs",
  "key43": "5BuQASvcaqqcoMvnSYaGJRJLCf1yGL8FCHh6WTjjJgxMoz179VkUGXrZTpa5JyTzeSWknwGMWPw5VoF8BxstKGFk",
  "key44": "2F4FiTnttQLhYTPVH2R4B2fdfCHT52xiWrgke8Vq6vvsEM3ZD9u7cJWgRjTvg4gM9dPQ92c1TUYHtro2ENd4eCBA"
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
