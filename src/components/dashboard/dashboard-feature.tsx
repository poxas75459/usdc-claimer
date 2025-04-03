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
    "3Cf3aMXpBHgYATihmVoonKn27D4GaLsKzNwLYd1tS5izw6HoVPTEzppcSxgaDYK11hERHeCkYVNH7V147Vk6aiER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G73VhvgkxWaDtGCjHrLevojiWoBL2jwt3kXw2JfQMr92X499PLoVFJFJ7Gha7g2ztHBp55ufY2V3hgkBXZgVnB6",
  "key1": "2Yu7Y8DfYoeZ2tFjti3FnrEoGFaFZyLdoorrzKMvCeDYzwiD8EncoJejMzTCizkdLfSD32ZjeP1PiCUo2fupwA2r",
  "key2": "48JhctWNQwAjsefJzmqkBRYcpD7nQX1gE8cRaapUBBWRCKyffCFz6mcEZVXRHzkjiD6PeyZgizwLDARVPgLCkGym",
  "key3": "2KMBCNWi5C9Mwoss7vCXMPjS2mNR9B1NsYgYFogSFxPYLPPR7BZj9bHdfgiJhgM6EFgdtkoYj7cbeMtnsrykParX",
  "key4": "y3tEqCF2P58gNoUJkCN8poj2RdQCmHVLiW7y3FS3A1hqVqxqNZPLKqtMuZazjcS4smR8ouxmqaWxiFtVJEBaNXR",
  "key5": "52wAMxANgdgRwCywq9SNHDzcjofpS8DpZ2SnWWkNkTbiJAvGPBwzYXoEH18LRnsU6UvEYMDBMGJzif9324yi3GAi",
  "key6": "4qdHWv2gDjzdsPAUuiupPHUb1Y3WYzLA3U7zZ44hFRaDgfsxXdzQ83TfwsbhwbakDjJJWZkPGZhsVAVnyCxf5TAq",
  "key7": "CxWB6ecwD51gUkAXhKe4EA3mKV1eE9YtyTca1Le64nLytnfMSrXBuHBeq69ycFWbYEQLFGQXw2ChLLswzgmjtXZ",
  "key8": "2Kd3cReJyAk5jqnbHdYdT6JdwnwrByp8i2pVUTBdSPSoe8JYpHSZ4Swza5wHVCJNQ3v49R27UV3q2SkodFhcru8S",
  "key9": "PcMDLUozTaSWDCt1WjLNkTmnFqYwtCKiwxqpCxbWN4FTudso2KMax5c6d1CNasWH25djGgKCrmgsjkG6rhNvACv",
  "key10": "4a8ERUJNGGZ4AtJYAMXz76JyELqjSF2czsN4FS7ik2XMY6YoJE2xWbbESZuiUbgFBHsDYPmdSmbPrg6MS9rqMKJk",
  "key11": "586EpuH2j4i9arjyewq9AT9234GELg6ep8oFES6MaDQZPx8ab33WUdjvrLa3QeoKaoHtb6CJEivGA7HN4rBoFuU5",
  "key12": "3S4nHZSb5wByAWEtFeiLwrMeCiwH8pT6qZ68vwD4a8GTPRscRodCFh8vR49FxGJNVHiUps7JdB9PTUAfCPv9GPg1",
  "key13": "2HsFM3VQcL9QZKboEm411Hh1UbnY7GdsSkcwxKspbcy5Dgmmvm8XCM1V3TxrVv9Ppe2penxwRcMhgtAA87yurvvS",
  "key14": "2FKF1faaQwp9pQDwvEvAPuXdVXFCeNhMDEk8rTqpXPipvBumeABK8ZSxsj7qXPq51hEUchndDmyzwAsmNFkJ3eRx",
  "key15": "YiDkmgyVC8sa2mGyfmawYSf2HBiKhK9UiGsgj9bds2nkVPvJgL4vtXgWJTdNVLZRuNru7oPLSeaRH1aggskfqmF",
  "key16": "4EqQhGVjF1KhDYd7JnyNKyzpxfNUheqsQj41hxkvQQUHDLGqEBt9wx7tC2AfRpzZ6WhDTi5kX7NXpqKRNV8qRQnb",
  "key17": "4dnAYqRZP3eHz8c9qs85TXF42QVZAZAG1rD9KGbSx4nauUaGfMu2fUyRXNgXtdXMkBGec6qv4r6YxUZaP7hRtHSH",
  "key18": "JDu1C8gpSvp6cHpHhuLogt67F4XCYfLnPd2zd8f4rBrtjRNKCfbMbuG7tHXk9VD9BRP9bKt796nWux82myKMDCC",
  "key19": "5pTfWXSh2w7EnMZzsxHv7qMwy6n6nAKgKHvBsKZoRcj3kqNMGk5tJyR3iL6JCuv6dVUqFhm3WPAnoxBfUAnkunT5",
  "key20": "48DhjpFpD64qCTCvaxe6x36hQ7bBjq3ezq7jrAwoufYfkGJNzXqeYG83qkwfJKyVX95zfYzuBWh7dJiJKYgs1x4c",
  "key21": "3e259VqywfK2QNZ6QHXEH4NJ3YHurMaDjcHXv9HFjuEJksyEqVwNunsav1Q99PRZpL8P7G7sS9y2zQZDY8Cvo2eL",
  "key22": "2PZn79ZJTt1J4rriY7hmWE4xxLY1Jcjo4R4zD1DR4FhsjrZDoTNvEmNkyekAfbAqcSvntMwDByMMpaH5QkJLNcyr",
  "key23": "58JQu7osAEkwpKVkx3Kjzu7r115aYu7UjUZhmBPNCcws2pnHaum9tD2CPNi74Fuv16s8XuyZDy86Y9KkFqPKDHKh",
  "key24": "3AWzvhngj2Yaad1LbZURMPuRxUSDsyD9RL1mYmEC6tQhtUfqUJvmDYxH6qdDnUvG4riQrsrXiGZrtLHBNUPQ8Lfp",
  "key25": "48SvHhqM2QkCqT2r5G4UtdfGrrAAX1K4orc8Bdh4iTxk7g1FVa4okTR2vB7g5F2wMMMRnnfrWUh7DzuMAJJ3xh2F",
  "key26": "5XoaMMa8MHFUoqiYgyG4nWTP7vSH61tSTmMoh7YX76nRHuNTFKRcSTVrbqWWnJJF1Af4vyYFS8yeP7T374dGsNdB",
  "key27": "2Lmzi96H7zDPVFZTycLkty341eJyH4wkaDH853iJYAUV7cmae5qidUdJqJ1QAvEwAgSEmuXBSgCrW15YchRz4NZ8",
  "key28": "f5L3UjHVWNfPGnPUrmimcPUKMWaNPtQ9rUP28RC32NnEVKG1M1dXD3wVjNEbGaCt7EFDyk3bd4ZY8VEngKKuJYg",
  "key29": "3JQpquPGHDZco1m8TZPw8N8V9rX3WiH7BgTP7RmEdbPEPtEQdEr7RKFc8Ap8oUXFLiYLQPHx746JAJko9TmNoPN4",
  "key30": "45FrFqwzhVthQcVRTw7ncdAvKXECadahdiCBEYB9L8NCogRstAu81bZyYHB1d8Lr3E6m7XNwN9Ra9cyQ8CPuqYY5",
  "key31": "3XNpVEDZEJm5u1XPhCsnTeXxpQP7pGQq6fKEY4YuUqQjWoeenf4C1z79RJDBhnw5nCr5ppWpxMWK8kVUK1hLT8vq",
  "key32": "7Ve8dBvfy611QZQU5jQtBnVECS2DFEqBaAgMta7shA13726YPK6Bv4QmtyXBZS2MWPYi1FdrDRFyNwvNEje1aTy"
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
