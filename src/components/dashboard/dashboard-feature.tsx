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
    "EGwKpiwWxs8S92EdZMRfPtkgE9odG5hgFNVdEb5z4c4oU9jtgLN2PA3DVVwe1Yw2kwfNHXU4fwLiaorrCy3zJfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qvbHYUYZkmJ9Y6buKGVwVmB3JSXztXoCcRkuuKLE98VmZ1wPcvQuSgJLT9Ehd1JqHCwZjVXg3xXJB9AaNTR3Gt5",
  "key1": "5Z1qEWDCmUW7jpCfuKTxpSsezMpb2CxTyoiSThqhy2W2JPWXp8Zuab9riLnL6JeeTWncKiKjxFBmTsyUYxnbKGqT",
  "key2": "DfMszxCWzB8VnaFUdmBz2GpBnv7kvnmbwWXXXxNmWr1WU2bhNHqRnq1xDJrX5nj6yuyXgUiHMwTgxnXGjLLTdnR",
  "key3": "4qgjzygVV9TNB9xLAQt9cJiAcUHUdXy2nPC1Vi7evSe3MzPH3srjiHHUpWxH2joVVRhezxYoTtRQZ7hG8HkvzoLV",
  "key4": "3YBwW4YU9cFtcJX7pAVhgBNVkygbMHXeiFTqYJnQagS7zyUS1zuD2k2bxRz266xhC9ABAKWQmn9K3am4EPRQVpR2",
  "key5": "24smEydJtcsR3eGtyahuBTPBt8yMFqG9ri4T5AKWrAZEx4WPuctw4qXct4msoMuEUrSSEZA2Lr4LwJmyN42QHKZX",
  "key6": "4p6EobugKRZ4b6AXff7pzwX14zrFU8GNG9moFpRo9kbyUWLMNaoFbASkyZPAEzawRLSBQNTrr9Pz5MkYvS6fDMab",
  "key7": "8X2y3P42x8fwgU12XXjQjnqSVuVVqAzZpbUxirQr8NunbSGzLK4kbHdTK3mAWFWWFPUwaDVfpyxvnxAuPrBp7Up",
  "key8": "4B3KNhnESfSSHB3JJt4gpLAorDuD2oNZcKAzJAyA8h4Lg2qVjmE7i18GdcCDRoiYxw4ZrWKgmrMD96gxXzkDEQ6B",
  "key9": "31c9RerzkPHPdoNqJBoVsiCi7UtKzKq3j3ZFbZDgDCduTgZLByeAKQgko3YREUkW333GwsWPRCPZwrvQgbgZW5vK",
  "key10": "33gpCcfDK7SDcBo6drUEZhkvvt9KFoHYAZwpfSyT8ZGMoG3ocCWsXsyZnXijag739tnrLwWeBkXu9H4UGEGYWYxq",
  "key11": "4B8rcyDrjvssRfkHqayNezABEJRS6RbcFCHdzKVqSjR5p3NWAfpUUh18st1hq1h1QkCqNnFGe8WQzPSUehC6eKht",
  "key12": "3WKD38A1jUfW7EVCfV3oWE76MGYu2nJBpAwPFtDV2TL3k3b2xAYMyyLuu2MA5muddVW1iyYXYTkGgSi1V3rsrGzm",
  "key13": "4vviPhBSCQdBESe5cymRhoUWbrBazUQUfxnxAbLbUtHayEXVuC2j1jowUhNsgNaBYJWK7hmkfoBJj9b8gjtpGUae",
  "key14": "3pv4PkUMu1QSUzoZuUJqN1RuE4AyymtHmp23MqC1W3kPyp12GDnwBLAHRw4Yf2XynanfxWdHbL1wVfEXsy3kHycL",
  "key15": "4pwZjNJYK52DA8vkoYtxUrVjqH6QGXf9nmuVzfeJeVV26Zeou9kQb2WgqFQJszdTW2t6fWdAoUDXc1kGKao7ZLzP",
  "key16": "41eMQSaXsAjSFsGEf2dYf379rf58P8LnCNbUA8pC7W3YCKqp8752A8hjUFpDT4QgP2x2rwpUbCVdn1gMCzbhQukN",
  "key17": "5Xm7RUZPovEULDH1MGFGRF2XyhYmiMQuuj7nWgrAfyEbLQMXc288eXdqAGD66j1Q9VBoJHmEhSH74q98pj9rsQaz",
  "key18": "SVrxUXB4Ycivgrsoxa5GRNLhPhJU4wMWmJWZ59b3dBaSg9Eatd9kiYhE9RNbxJMbXTwmAMpcpkWT5K9M4Wz1xpv",
  "key19": "5pzZEiAuTHRFa57cRkAZQzJhPcftoKrCPFv5iSidUdayzRgqEiG79undeMmaftYUpJhocZceSr4poGNForhYGt5L",
  "key20": "3FxCWVXcKYSiY1d14y2HL4AvVhMdZNM5uGkCMeksZeszcvDFF7WnNGs11D964HJ1Td59wuGAmjCxr7LDeMXZFKpD",
  "key21": "5d4SFfSWJVcyyYQjh2JCcpW8h8LYQnCPds8FuosYx44JwkdRdvJxNhM6SwkGPCMosbCZhQDbJrTVi2Mw6GY7fs7p",
  "key22": "2uZBrVXjWVL7Rp5iReMdyNi8Nn8ntf2ykgDXKLv4tqWgwSwoNa3izP8f9PcZyKW7YuFX1AH6PvppKBh63cFLYTMm",
  "key23": "5bu7vrRZVW9p5R9LkBci8JuzDNWJfZsimqZoH2tmQGnYRSVVPE5kjKBuFvbAwerChcVnjjgDVoxTrGBLrRJFDe6R",
  "key24": "5Z7AbQQCVKQmz1iWBSW5eMXLcugjwHTroyaFWopfhZ6yHj1uKQU2PcfuwaacozXj9FLKcAuq3qUh8i1G4Ffq737L",
  "key25": "644tTPe6VF6uTzAQyPeDXPhr9Ns6dcAntXDTR1z52k9ZA8H8iwPXQJnNWXD4Xd79oVNRQ5LQDobrHo8SDnLNZKsZ",
  "key26": "3nErZJ53Zjz3fQwNqjLVVPWYYf17iDstPxHDKkyeAjHz25QfuHAMzLHBTjXb2JY3CDRDSesoTPJp5ft9gUsapmrL",
  "key27": "2xJYWEEwnodUCE7zE5cXrFzQiz8Xk5tzz3w9cPRRqdsUPz3WLwCXokLWxM1QuEFpaqeoSCR6aX7FNeHMy4FED4GL",
  "key28": "49YrJmwSsZX9tezjeeyxHgu7prMWkQrdKDZbNdyepxdUkUtBhMgP3CNUpAVZQ9wv4xi7X2vTPeD6A7zHqXw5Yq52",
  "key29": "cVHsxBQLynoNtxxxg6KeXUVkMLpZLrrFbmaoCro35zNx3eNho9sGhqoevyepQmG9KDerFWrYvdjxRdgwUub4wMA",
  "key30": "3BdUtQHDzS7biHteAaVvKNxfh6qY6977XyDPsLJBQvV2E68QLXAzT6sNYp7aRVXFhZyEJn1NH5WmpPbSWnUi1DLM",
  "key31": "3BhrjDnSA6ySK1WDbaWkUApdaKTwCt6aGDodG2Gz49HFdiMd4BrQ3embDsgFwRnS4DhGd3X2r6Kono8Pi5NBaUv1",
  "key32": "62XscgVNU8aUEmgfQEV34Ghe4mnDqysHeimpjvtRM1D6Lh9zWu198ufQSqubxnn1QdmFtTvAaSfyqAtV3utKgj8B",
  "key33": "4XGweetAhhGukoSvbHbACEkrhwEoe7FQG6YW6XzummwicikjnGjTMS2SLpNcM2ua5d1WxzhS5jxZbExT91hpGt7M",
  "key34": "2fQV9isefGuVVmEhqu5u36eAoaB5WvvEKxudkAc26gW3meBrseB2DfTthSvd6nLkYVZxXvT9Tju74bdpBQiZ4EPa",
  "key35": "4h9UbsXb97ncCT8q4YZcs4RsXynWj53uj5F5KGd5mVBudceF1MaJkYrFCWq7ziwasm1pnP1vMcyhgMCZe4gjGMHg",
  "key36": "3sFFBdvgxe1xNuYMunnVhvt3aUtVvz4EFxX7CoVp1pQiw28LAUn9yrWAXRvyJwm5TEdjezvWuTPs1h3zPycryq3S",
  "key37": "5PSU7HYSczzAE7m1hBfFZfoert7RTbJFpwmcS6FigpQXyQuHDh36bnnvhMrr1ALKnwrL8at2Ge76attDZrh6a1hx",
  "key38": "63ZDn69mqySJZk7gLY25MdimnXaSouzMiFqE1wPqP29fcTZAwGgqbHDkRAhs4mtw2NjLgXKGFgJbDhuh9QPg67Vn",
  "key39": "4ajqzSCNsERL6FQsmXMoi7DvVezbPrDv2FPttqT1nfk8kAc86bVuVnayApteuNEiM5Z8rXiB7jDNzS6HVxSSR6bA",
  "key40": "s4CoA3jpV9dLdBg49kEmhyRTXCPnvTHP5EbjeXMapAggBkJBLBjVwGvXcsvC435D4EBizkfhtXbhKxqdamxwgTV",
  "key41": "3fY4juujD6xqNt2KdBiXok6YQqHnq6rKMCwvu2KXoUsz8Sv5xJXv7aeLEr1YFMdnyqpPvPySgQ96cWicTT7FwNjD",
  "key42": "4vq5oSk6U7FQkwpM644ZTLQHcwHLuHAiZoN1iZTNB8KpsSZzX3Wgts1a3d1G47roLLsC6hH1xNSPk69KpYxamMck"
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
