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
    "2o8f9YRjn3iAzLGR2sPfVhH4jDxv2zjzU2oEPAfUvU6wVpbCgxXxKwWuFXDck1rLY6BPnUoAQiTmBbyCAaRcUYhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gdDPpyddudp6JHB1mXgi6T1fHqmXTP68RWWmz5FZnQmtmd4TcLPYBgT3ikqaUGwxY7yLgGTrnEDEEAGEjKmdqp",
  "key1": "61NCkCLnVPrMGNhoTzDJY6BXazoLzJfRP6nhRb7qB7jawTQE89juydB9zmwYfFYQyV84HkSAuGL1opJ4shkCqqmf",
  "key2": "2H3sfXFWdkG6reAHWu7RLmKBLzDhK65mu3VEXbnJKyFjm67RZeDsW1P2xjXB8H7M31zyMoLEznEtxDiyqFZGX3MY",
  "key3": "3n2JXtpez1gqRGDCmPW5XDtxNTm99pZvRCRgUkS6NyQ7ix7hVXtF9wrqQfvLQoRz3u6kR7etAGak3SRa5DHfXWSZ",
  "key4": "4vwzdAhH9ZyVP3cFn5fDkj1Yxc5jzMwfEvMAqpAkLfjV6jrFMF6L1GZa6pAJna7Se49MfbdaM72weDGiqha5vfHX",
  "key5": "cbw2z6FX87kz6SbsgrchPSC1BjzcJm8SWKKRSiR5tSayva7xYMj8dVmysKXWEDDUCBsEtbAJ25GdwbTMT5fNsHb",
  "key6": "2dkwhta2px8aUxGWCXPtFDAUVgNy4oY4EQiZYMDFkjtGAm8D1tNFg6VMMig7r7NgAXf32BT6argdGikJ5SkjgWt5",
  "key7": "3hq5HvTfKV2BRhce4Uf7FrwWyuJtwEsuXr7kptooWzDarqqXif2H7cUmxQaFAs1rnLjoXvEE61WSzJiDxCsPArcd",
  "key8": "2r4BG6Xxux3hjhsPdBh5QDSB62RujdcdZk8Va2XdRdFUTFD7E2n9W86SZWSsaYKaq4W7wPQfr8kSE2tE8yLGH3Rz",
  "key9": "3aafJ8pYLs61TLi4k4A5tckjaZ5G7b5gSFscUTnMWp3nqU9Kta2m66XcHz3JZog1JnXN24CDJEZcNBhE5yn5GmzE",
  "key10": "5SVUDRwYzoKpUwbmqXNxq4hzGsGsP8GKZacW4ZiPG7Np4xfHE4PRYGnND9YAmhCo697u5UozLecTag1Y6QxX22rj",
  "key11": "3rWUErdCGRxoHD8TFs3S32hRDn5cwErGnBh5W4Z8qA188vLCHrmu5E3iv8MXm2qSiAGc1R6SKr7Zx3L7mwDDNG22",
  "key12": "295w6VnjeQWLfm2p9SVCsSeMmuESjwVxHJT4ivECK4FPsQcMW8Nu26NMs9LVh5gX73KpQ3FR6wrMKqaeFCKCGen8",
  "key13": "PLCGryxP8c7uGDvwkdTNUHZvjBtZMXvfYRJPYUF8QRCizyY8bWqxz3E1u8UNDpQrLng5w7RugLJzWrWZj9SKGp9",
  "key14": "4ACJBSmC656jZxLAwCAVikwQqRHVqy53HtSfgWgSFmB3sPdZ7HxCR84dzeSYzhrGmN5vgfqyts8EJPadSr1G2mxP",
  "key15": "61VezWs5kNFXUoYqhY5d9f9iKdhAsXkkb3SNHSeHp4zWgAv81DoXzVRcfqgbym59c28FySbq59KmxTBwfX2LozAA",
  "key16": "4Y6za8WyK9LyoGpNN4tH7CFjp7z2eYf9W4bR7R9W7eNRQjR8FHkY5XFGABPNPTdezKgqchV4ZJ6ahnVU76jgaqj5",
  "key17": "5kbca1WD852MSNu7idrQN27tFPyg8DY9QurGf6QDLJ67a5fpW7i1EdMmNjZvDwo6geD1sHbNU1bzXEwHwUpr7FCW",
  "key18": "3qjv9XXJ3q7DgQYggsqYDZyKts7L9DF5C6D6RBTUNDE6BJMwbzYde14GtMUhBN8mdZB7JYUE5vRddBVfcpuvDG5E",
  "key19": "4ff8kkuZRNvNpFchv8p6SdRBfM7zMnHrmhcrwhm1cWmvqHuYMBHWnu8AJx1JHwkwg7VRMvMgYaU7nMAdKJE6XU2Y",
  "key20": "4DXAXaG6iCLmHiaS2hq2RWJiotvaVqBeiRp9H9RRNmMnwvXDjZeMxrVAN46eCdtCFNrv3hHcV4ZLxxdtrLdTidwB",
  "key21": "vqxvaFFpw8gaq1y6CGvrHznkMo2xZqe7ib7YrfsV9qwgQfjmaGNbwbBZwxjVyFz5GE6qtELGaGNUt6Kd4g5bSkJ",
  "key22": "LNcuDYiSnnef5g78iqHT3LQikosCPDhywCVRPwDvd8pKYta4fxEpbyG9BedZpeEQpbrLV66m7UWLibceF3okkyZ",
  "key23": "VcgyRTJzT55gBXLvy1KthmQi3CVr643y93a6vsfrrrhW27CFRx1ADCogF9qBc9n7vezFJnUx88XhCkciy2gKU4X",
  "key24": "2XxkRVR8Qc4RtGimmDzCHAXfuGBh9keSvwesjNV8uwztoiKFrXU9CsPkhVsPyDsxozKdLC8a4PB26tAuvSQYB9Sg",
  "key25": "3UmhSvcxovKY139gNNzFLC6aksaidnobcWqNiWyJYruQo6kV1husEaDeZqsWzZDjZ2MvA4dFDMC3sx9EoHVQYMum",
  "key26": "4YBumeC29vj3Usn2pD18KzjerziEgzwGDD9bLFavk5Mwny7kCFordXcmZusR5LK8E2k7Sk9wb85em6yJiECT3wpQ",
  "key27": "4bUr611xZVE9KXLjkPjMgDUANCs3ZSzPFkTNWUdoek76Fc4ksqpwRF9vg21m8u8JcpkphrWGkYsARugc7w89jFVb",
  "key28": "3NxNkVsLCkKsuyvT1xQH3AKS3DhFqKXWhEcN2k1zQRoSxQaSBwMKLZKTw5qLj7JaMiXsiBEg2t5ymvhuMhfoz3xs",
  "key29": "4UpmRuHDAk8ZhC6Nnh1PEDzFepsHJznwknj22d9Za822eia5QJMTH1SVs8rQb87t2hs4aS6yZq989HD1uVdbJXsn",
  "key30": "3NjV8ibcpDKV9e83N9UymoUWb31xjTjdHiCTQqoNSpErKN6dKVEBn4A3XyNS8dKw4Xgnv5vP7tU32xWHkctSdMZR",
  "key31": "3X2QWJeQgLTx5cWPpxYw9RuCVL5P99eGUFNzFCWTWfPgwN8xroV5EF5WBg4gCXQydmjxouDtAGrtfE1u9DU2uroQ",
  "key32": "4GdU2DPzJ4fzcB13DMsEaCQBrdfW7jFij7dJVpnKGSpD4mv8R5Nyaw6Z2erep4jjDXTHED7TaRpCQAKFxTdMKZ4D",
  "key33": "41ce4ajrcs7dyhdwDD5w4H8NVdSWPQ1fi1PwEyGhXpWADGSDJgAAzb6MxpgiXE7qNN5TzGCoXrfAq74nxDntSmSo",
  "key34": "XiArQk3maEDHKc1HCDjBkFNVwTcAijSNQvPSBbcV4eq3CYBd2L9b6BWQj2LVgbHQGJVacLDbnuy6z1yFNSCrdrL",
  "key35": "jk6qvXntnvwiPAowhjq9tfyw8QnscW4xwEhrHhr6Hfqu5pvkgTto3wuyN7TmSxjgSfZ88BXV2cw65TWkpCRHCho",
  "key36": "3AkGRDxSiF1s9BQRi3YwSrtuGWH6i4N8xTRMQW6U4RfrCtPLhbJw75JmdyCwRdLNX1o9kz16SqQm6bB4n4jBB2a6",
  "key37": "3nxyzk3cGo5eotCh6QBVVyzsFQs6WgtPmHGsnb4enpHiRDc1nCNiic1ZxbryWskuPeD1iYdpxyTkWWJySHGf8Rt2",
  "key38": "5k8XXmLeZNNHYRDHnJVzTtfTr9HD2XSDSE8r3iFX5GB8ukSnSL7oPDHKwDiCCATVCGEmLnEknh3AkbmC7a7cqNy5",
  "key39": "51jXfoipnq8H2o5AiVjaY1y2bH5hJrSCx1yBpe1kees8SUwh7gv9xJZfdk9LQ7YZBG1tSJ1t16B5NM3SotxTSwtN",
  "key40": "3QRUv8VZTk3wi3k2PZvjduA3EPif5eFkkQyJ2CC23EPo7ZEcQAf4fUVcc984kQ778UgKBs88soxii8RHa1JKRwBq",
  "key41": "WKsHtcZz75FvkQZJMf6YGxmgkSFvdkgJxHmEBK5Q9qpXY817wmm1hHFKkxc8c6qW7YzuKToRBuUTeWtXeBeo1Pe"
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
