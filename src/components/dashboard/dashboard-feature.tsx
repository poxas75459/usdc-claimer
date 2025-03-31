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
    "387vtLKXcBgoCFpAZbMBYLYk2k2AMYQ5CrLbQU7Xz1BygKt32fE86ez1ra3AecjkE28VZurf55rGDSX4BygE8bbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNp9x6GBZE1RoAzhFjAiXeWaNhZjESVfkNvBxJv1ZtUMKUyrZHs7w9N3VesU2wfeWQnsE77eViS81peGv8EmB5e",
  "key1": "hcsw6UJDNJjDuYphC2dTyU9hV8o6fKFS82JdTRsmazWKQhQdSVust5CgFuzarghwkUHrk25JRbMuBrMm8uHSpCt",
  "key2": "3Bcn32HSj9G2WrtDeFxNMS7TG3vYRNqW6Zbmi7hhqxFMDFK5Zv2PpKq2p1rZeWuhjdiay4TUwbihDCbanyEYE7on",
  "key3": "3LdpQAHYtGfq7dpwPCD3NjHWgdrzFZSnkBkrgDY7yabkvb3kkG7EoJEZ8z2AFYnSsFLrPMwEvPByYT1eZigCm94",
  "key4": "2WFVtXEnzG4tvfrup6Kdt9gPgRvUigtc8c7dPobKTcxrtjgXEQG321mkM6rdF7BdM9LDXt3oBq4qqd44XKxwSUNi",
  "key5": "59TkMRwcvB2MpzbPeB8EXqhmGP5o1BH4aGg2qPgsCfDfEqMQxnmVYxtPfuKHoiwRGUVi5CBU2FKaej1CuXcXZPzy",
  "key6": "64Ec1TayhJoB2FV19mxnUCMMiLrV7mvdZh2mdYReoxtQDVX2Ka4xB7i88X6RVyvJo1P8Ggd67e6TAzB8ttw5NMvo",
  "key7": "39X8eqk1Sr9ZP3Mm672MMtA3RkoaSGnriHJpem87TKJvP8hDqN6rv4TAyVvyfMc9cLRNCzCcdTq3hdR9pKSLoemA",
  "key8": "wEmJHK6mfFS8B2EjJsMDgENT7WqNqKg77eH5zJ6wMHXV9m6b5nB3Fo65euN7Jft3KcaWA1UKpkv5k1okVxvMZMf",
  "key9": "3qB9MMzpVEHvv6CW7wAUqDbiqmUgV8xgWwSJPRhsRRbCzNc8ZMrUfvSZarihwfHW6gC5abbNagDWEE9t51mvmRYY",
  "key10": "55j9htE81Acbvo5YzUF8tKVCsCeXi3Krxi8gdXPew1rNpUywztMVKZ7BEsi8ow8BRtw8iDuqHFLgEbJp6y1ricUV",
  "key11": "3haxXMkKPU3ctdRdUvDk3jK3ZtQsskMt6a7KVfQdSP5Ynnk6P5fZ8rXocXiknvrATgqQPRSuae2nCsjZK2Sti83S",
  "key12": "5519GTBCTjDMn2girVmgthBikN4zy6YwwKqh4mXbzmcEBdW7cVbXErCDHifhq3CbQXzr3s3Crc7neSyfQjrFGDac",
  "key13": "dRG4ddLBEf9dArB9RRi1Ce6cHDWCYQuyJdaQQBSkUaLZXvXrisud8apYM7HGBfvPE3Ab2eg35AzAUb9HtrmjTLc",
  "key14": "225ptaaLNWnstTjbL4G6pjUD8xzL1qGYBVPxGdgSRQZvWfJp5wVtkkf6BCKJ2wRqfjqeZEVw7jSYvSodemFmtxDf",
  "key15": "23z7SuUhQrBa6DXHYy52HmxCrKNnShj3eaQe4WSatUqYc954jqoSQe3mymUwgTuUEe6pFeBUToC1BqYdhhznQK9Y",
  "key16": "61kXJoZQXd4AXbEx1W2sqLGPkntWXia3dMK2DV8mba3AUtqNbRCL1SXdszhoVea6kuEQQh2uswwywb1RbfLb7o36",
  "key17": "23FRpmwnnXiJHqLVQKW76gS5Hvvt9fg6uAbrFTPV5AvWSiRUDVrWtVxDtSKaDenLSs2r8tVQ2b88bDi7cZGWpRnr",
  "key18": "5Fo8QupAktWvvyT5X23tgx6ikWMazaYcVL2agHo3wF9BxVEAqQST12NrDVTxFXs7u9EydqD5b2ed5epbWTQDizb",
  "key19": "2PeMzYV6CTdXDJpCfstEMnYUVsmkq4dsH9bzJYrB9jNTQJUEHuUfyRdrnczxDPBivrdPL7pRkfJf9xfXoAypz8zT",
  "key20": "5DCuTQY6yga3u2w8N3qT3vF62gPwE2Mbdz4oiMRrEYxUyVvSC98d8vWBWf8zXG4vJWmZKDyXjhBQ1Jho8KbNNU51",
  "key21": "5LZtgsK1PPhTjAXpcRkYwP8iTR5NKHckcoobfAQXQx9xG9E8g3b1XreXsyDCapk3bWZKN25Jr8ybrmxXdJ7cFXbn",
  "key22": "5GCqFk6p34tNdQ415tVaq5dvXgNhoTfqs6aDDBBDCLwBzu5vFZm2kffvyhJPtFVfsF9AxeFoo1Qc897tPC8CxFGt",
  "key23": "3nXVZxMa2EzgR9TYGwFYHu4CHLd4LMRPW2v6kopoDZ5cQCrA7njpEJKJrZfDTpgJtQXuJEvMVyVTrXfxJxjw5UgS",
  "key24": "59Rh9NvfHTSWCaoHVC4PuWvx3DfABn8YQi22XcHbyNbwoT7fMx6f3zWEsZxo2ujuQ61VyowbFbmhGZJvXwnLCDUC",
  "key25": "5ujyUsaHXQfHALfxa6J1yCMXKnT9EqRxceGNC8ukRCTYBV2Kz8dZcCNHN3ywGCWV5DeJYfRby4VysG3rTG48zpkF",
  "key26": "t4nE4wyKFtrGkRbP957wnKy1Q7wiT1rpeHu1tfkvoxQCDsFiyQsR2V2mV6qdZxHmFy4ggtpGE97YugKuBR3sPkk",
  "key27": "bkU8SyFSjXHFGXoaw3nxaNtNZwC4r2qX3zaBBL7TKWSLw7g7KdF2eZ1Cg9jyQTY7hxGWZTWzeP8PruH3bmHRprJ",
  "key28": "5Hs34rZgskCeahMVnW6VJUcZrsXQaiq53RNxTRdQg6f3WaiL6cuVJLTWEgiFv4f4YHkTjUSuzU4hTF5fTHT67tst",
  "key29": "4LcdXbodyiAeBDiUoCVxy9VutAFzhziMS8UHkKG2YQfhEMce4Pb33HbVCn8F8LYYty3CeNRyEdJMKBk4WvVhBBtQ",
  "key30": "294Mut5ANh5sfDd9c3sqM7WV6zTh9XSD7RD5N8CxEMMQoxYUysf8dnNX2s8Vu7B5tnXidK3abpcARdRaYQPJpnPP",
  "key31": "4bqiw1ecU3dXHLyKwc1VhUVP2cSBgdKb8aonHE9Di66RJgbuvqWroT9NFHbWfwcdJKg6aonJRqv4Dd2aCu7DJ4Ta",
  "key32": "49PiMoFksb9Fs8P8QVnyhwJt92yq12zToSaDzM1GkE1BibmQUQCCyhMuk4PFYn4rYorhPaXsscT4UVsNCrvHt6zY",
  "key33": "52AcBUr8VbcStfVkbSKx3qy1ZGVH3G5J3QQihopWa1dvyDYYKzS3ckYiR14LGAnUVqxzgg68Da2PWFaSogbcmnLL",
  "key34": "5CL9ExFqR5UM8xwgaLuhPyTAkZ56zLPzLncRApbKSwoUD9VGvDaSHExRAhCrsJb84SzqWvK95MGdBXiisuTGhDqh",
  "key35": "45un84is65MVuEvgundqPDadLFc5f1DwnS75cymGcgjkMyL8oPWsziESxSNXpmTo4gXUTLSDyuyCXWNYM13ggUno",
  "key36": "5M8Tf9vpkxt1mbghn4EwkNNxZ8XjxaJM4DThwZKp7r1APy9MQYNeWTJUm5pbRctKAtGyC3ZNG6e8JmLm3VcfX8Ai",
  "key37": "3WyUtiU23xwRrQ8fRcn5LPzBz8cWkiUzmXEiHh36WaMjiu7y4uWJzzX4NJFVGMM1Xi6HuyKXRGwxmRiKKYvfCZfG",
  "key38": "3PJ9X7kqQ5R7pHN4Frderz6s3uvXgZKZtvSALJeBehK9pfvBQANq2MNnANFXphSQnGhbbbjKH9ckjGiL3NZGNTd4"
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
