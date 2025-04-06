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
    "5zTnc8LCS9mkDunKGVYS7Cwh5oZnktZFCPrZUQNjLb9uHAruBTYgyStnmUVCfvyPy2Sr1g6u7LgKQnHD8frGsbpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jNFUzZCxFy9fcHTGPjKjtfhL6NrGu6swfPFN1i7WCwToMaw89VJm28KaYAjmrEkRcCAvB1BoDLfDP2FopefLu1g",
  "key1": "5Jo9MpecXvvhwoXft2ij4r3avhAcRwvUC3MsdzgmYhqu4Q3FjtZMRxtizGbTSVZQQCrhwPRFHHggX5XwoRZaL7B5",
  "key2": "2H5SWjDiM751GiC8eZ7huqPgiMCkHdSU7AtXzm8TFAN3iuPtsUTX8tMyAUyzwJEdATMvTMzY1BFez8nXQqTmG2Dm",
  "key3": "AXS8Uo2hu9VNu6nhhJjDXbSt4KLM4R2heWqZemSzJ9ymskoGJfpCk8v4ZhfJWDMQtxwq9z6Wb7Lxky8txFqPGoM",
  "key4": "4B8J6tyUDdX3a2Pjh4Uh3S5R9UhUhoAAQ2TCrjjFA1LBBvJm21Mfv8TonA3w3y5f6z6Wrx2mHLPjbke2RZpiPopz",
  "key5": "5Q8QChrT5cLaPzHkbvsRqHgmJLGsEyvLkpLMTDPhQ7m7Sbwtf9UHeAQkARFieFVPgn4SaJ7XmWTFMvSQxQAyaTGH",
  "key6": "3DrbyFtJAWbXUDgz2AaYwaZgbcLH9Cou1Ykq6M7xhgSTTCGC4EvSwac6DDATjGw2SgtWf3kSqNn4J4EMr57sygov",
  "key7": "QotH8S6Tio4bE53QJTz2G6vGTZrA7dN8FSVfppuXYxKZ96d3z87cZNKYxuroYzKhxxsoF4A73fhNtECMZmaRfi2",
  "key8": "3z8ug3VYn11qRVixzZMx3dHJCKbeGNFMPTF28oBTdiPASC1oZpL3ixCnFj2GAkRnaBGaktsWXK5Fq4hcbWMphXdr",
  "key9": "4EYbk3aR2THNpfBiZh4JTJKVKwPnBuJ7xwUAMwEgC7bxyuUFp8mbC1P8pwZfGFmHQB1xLfVDjguLr6AeZWvX2kcj",
  "key10": "4zxiiqg1VehM5EmPzyeY3rouQRpMnFgDJnTcTbKdrivhppUC2fSQzYukcn84g7recDkpYDVyFHiFSzumFQLwiuQU",
  "key11": "5Lh6ty4Z2pKXg2B6VVEofD6MVCUz1hi7wWVBs5jpNXMCWpCfh96YbgPkA19BGZf9pHQozNKbyDJn9HGq58F8G7nM",
  "key12": "RGGWtoPjcn1dD2Ux9nS6WEUbY6t7DZNs3BDGNT5ebwNUs3AZXdpzW8uViuqbzjDL8ipnnaL4XUSEtuco85DNbx5",
  "key13": "4Lw7WyhEAsQGokAnZ8LJTgpTxwg4pFTkXDK9AHnNojSmv6UUW9U9YU5ffZ9qLqmvMqTyErFZ6cyUxtad36AaP3xR",
  "key14": "3SCvwcUmMqbk6PfV3sAN9VVjsmpsawFqyxVPGfdePRuTjxdqFHVb7F4rPnBNgPHDBMnQzaeyYZiFqKeAp8cKRCav",
  "key15": "5HqQvWb7n2z5w3asqA6yVUoBBK8hozV8i3sBqMpR3VXaN4iHPd3n1MEsizU3Fjhn64LhMvNcw3xKYmTgjoobTrMh",
  "key16": "5MUXFEKrvi9FbdBqynFEx6PD96dwkJ6uJgihA3cPHP67r9HtUyApgB2MATHMUVRz6XMWRU4CVEicGzNkxNjmQ9TW",
  "key17": "4YiaraA77VHEx52UzQoPUippQcz7sRo59AqtKymf9P3RYGVA8D2ZY5MtRazTQMgQNVxsKu4ZRhNP77YocybohdA9",
  "key18": "373hmzyGkQN64Saf8fp8pCUgtSXoPnGqgJ8D3WLAHd5nvR9JYmnf2uKStb4A3dompiVKfXmDAKo3LnTAKtJbfiEY",
  "key19": "1fRuu6yMjBFFRM8QxomdyH6ABxKtnfkkw8hh9E8EDooD7K7apT9QGwofP6LUG1vhi2LqniD949CxcmpoV2vtUp5",
  "key20": "5NEiiwiiFsqntvpDkzBTV7T5RfVMm4GkQqo7Rm1kMenZD1JQhhn38p47jaKpHz7uBpoMiH5Jrh9Dufc6RBnbEhoe",
  "key21": "Y7ew2E5fqyzxvsVsx6kLdicmrX6qEb3ZKTWUJWXRcdtQESB67uFaMgKkZ69N1qHpVM2R4ac7uxiCHkkbN4tP4kW",
  "key22": "kGVYiYfb3N1Re3r76WX2afdL9UptuGfateFZPQW4suRJ1AKT8h3pzfnweoGDVBPWcodTcw3GGMJ8Ed3Dqpcz4Ug",
  "key23": "34sZHkhgex2qnADcLdN4uKwSbE9eYGAKfeW4RsndB7biD1b1wewGqJTNc7t4Vt42Sgjspe7u1JA4zd1CpQpsqhiP",
  "key24": "4aTF9chHLH8vM1BFTutBN8ufuEyGPCtzf47fDchHAyKgMcRDLT4Bc7xH2Q65pEHSuWX8sqKHk2vwyShx6TdbxbJa",
  "key25": "2zYm1B2Juf82GB9JWgHP9zRmTTxFurHoSqriRQM9Tg8BPgS6cEfxBepaSrRkPzweNjfB6B7hKH9aMJSff6u3KiDv",
  "key26": "2yDWzVbeqshmYDNDovgaaUKhuZj54vSt2qbvc8HiPoVZwo7gctoRSxTHgmb94AbdQrkCmnHgMmfPcWkhDDPgsXya",
  "key27": "2dFMVjqj2uesiT4zrdgjdYtnp1tJ58z2q7tAJtwKZBJRUyhcKhccjr5NfUGdij2XmUqfqPTpGnkfDY4s3QAaexPd",
  "key28": "3HPX1GeZnPHERGNtSK1XG4bTPtyRfK8SZBBNs8nAYdBRP5nGT5ere916zbRvNNsu1A5aPBwBavYqWmK2VtSBQyzT",
  "key29": "2AKCUSyKfVCDpy33tjGgGHLcSUa3dkvx5cs6SQCigQYrwEVSUiVHn31FgYmqfD7j8rqJSXGaRJTQAvhGWRDxqNCu",
  "key30": "2MwtSVkYxTCBnkyfd2AQsGkDhQrB1gkAGLgxYLRrDLwYkzWQKDs7pXLcJrxKNoH9Sh5smGDsr7vaaLEDDaRmPxGJ",
  "key31": "5pDQgueXsAMA4WSqGjCpFfLuqoPkV6FB4h5nLFfpCF7zLSpWywDkpydRSpjKXxyT1rWUCN4MXpov5hj3tNdCNCqq",
  "key32": "58UVH3xsLwndZdTFQ8cfEXuTe9VeszibhAgMoaendJfdk6VenfvxQ4fiN9u6vNqpBiZWZx6gL1bXHzrRTVkkvyeu",
  "key33": "2UoNgGrHPvCTYGJhMaKwLwGGUB7Qyg4qaotzHhxPT1eD7J2x7jpcG7NHeg5Tcc6KUPc2wkMVdWfxuVa5VPFKSLPR",
  "key34": "3cmYJ6hYt9vcMrAwKqYozUMRMwpctiySHfRY4SWB1MSwJSuhkMw9bYgkRpo1vvU5KQFtuuUWs594iMCmYg5T1nQ9",
  "key35": "3yhQDsmQ5UPpWFL2dLN3FTtC4gs9oxwt5GNUCTyxB9XDagraKs8DvxrybnK1qmWPENdyxiMeoxfb6gJj2ZdSZAUN",
  "key36": "dzFn7NcEnUyaHa1x3ak5Wg6WU8moeQXY5ZSSb7jN3goK9WtMRfcEbgHgwgvvf3uARCC7UGy2yfB4nijY6nh5mnQ",
  "key37": "4c1FGonwpkWRE8PcBBBipg9EjasV8irBhbPmHjnoJmzh5zqmHm8gecfBiUKL89tBKW5KhnWuXf6rymWvwpQ4nWHV"
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
