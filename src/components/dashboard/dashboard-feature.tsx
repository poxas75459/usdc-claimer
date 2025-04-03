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
    "2hVS5GCCdHLQGyFXf5kza2EToyoe4BufAYfqVMNBNzExXxJdWp1wP4fBq6RoEUxDX1hxUoxMnc4gNAa3dvLTsorb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DUCF3eRjVNPsDRAhAYNPTB3TpweJSPuZhfor56CByScPkwL3vLrzUK7qB3fK9oxAVns55iznW2PBEmDWLkr58ow",
  "key1": "3Msajt66znU7ckNNyx6TDhYySk1PGkiFHfta9BNRRvmZqdinYBYjXKbsEE5eXsHSZ2fzTiZPqWjk3qwqtyagPyMp",
  "key2": "59T4NNxaH8bfjyK96dBhZuScQk7MqdoiEKD7jzMGMMAHyVkEf96YojBvffzvx7ojcvya51CQUvhsPTkcvAZwZCTb",
  "key3": "3BYs5DjeeYx3FoDQDtaCTfrrSXsWCSx61Piq5GBVFireTjCKE1xh39CajYSD9cxZRA6AnyoMqe44ALjFeXz2E7e",
  "key4": "4fgG6L9tCMrAvYiULqMjCVWfnbiCjMc8cv46cgxBvSfJuwY5oRZW8zM7sBkBahSHzS2nh46VDx4rBzB5eZtWXCpy",
  "key5": "2jc5V3E7VcyW7EueH1cwtY295xaBzM6WbZjh7dQRnvbNYYbrdXhqdu1cJVuR32PXBcGzZpHKFzutxVw2f6AL9qqj",
  "key6": "UCv9P6ACbzXwp178e9Lan7RuhbRGiL8zXtesCJ5AvmkjdssQjXBbECwcLao5nHgyA936NCNzejRtAQUT12Syqg1",
  "key7": "E3QpUuEZoAmhhbcNTqghPS4TrRttyL93wjmoSWKetq4X65NTitB76jFoLkHXDsae3uKc7TbaykzNCUFRfhWcdHu",
  "key8": "26xweCnhFKgrfCoFVvu2nJjZ21NxwGb81vrRohtuKsWPgV4sB8TZoaGyJx1YBwx6HtUDHqzv6geYQh3r5sfJKyi1",
  "key9": "2px1ZB2oSoTcp6ZXX6QCvAfC3fH2U61kaVVKEXiDgfxnDJXyx6bBvURBxDNJhx3rz9qYpFMXnbxxUiaXjjGgkuqo",
  "key10": "2nuvQVQKgagqFo7noKTWV6UYovLKeujTgSCEFtnLG2ESeQYoNaKyxH82x8pk5YWKSkRMZ2sC7YQEZ8TyVniiDJ68",
  "key11": "3PEbBGtBrrSmMaP3BGPcyGfvidekRhLM9cofqBzB3s4c3xNnyDzhMUtyGy4tBrsZTStrBY2RBQr9q3FYyfJo9xtc",
  "key12": "2y8iVwZbkV7Tx5h2CpvA5joEg5HbZbsHhv7UvierkKjo9DerAmSDsuhaaGm5rR2VHJKd2XyrmwEHKv83ixjTz9zZ",
  "key13": "31ZFunUhGgFL3Uv9S3hWj1QaAkUbgUtkaAGYqbUVTMg75JAbEsok2nmhvb1pPTCRdiNLUxRKzukUif22d3jLqZB5",
  "key14": "2GhGuR5832pP5WpsYyiDR7QH77V4KaiWebGdoKTAFkPwgSyEB82RRymbte4G4jskSyuMYE6sV4Ydfx684sdhBBLn",
  "key15": "5bd6cbaLcmWDkMRibVBiBmfYzsVbEWfrkJjXpWuGnQP6nVnJC13p4B12LAz3oeGM6mjDkAP4bN4cRFDdtsUm2qGy",
  "key16": "4q12Jm7HNpuML8Z6qZreenC8KvwUa342WUCyXaDbmqSdjezm1QyfeSSPYCysFu7AQZtmRVRBvEu9tos3Qujnoyce",
  "key17": "4QS2JPnxaeoMCCuhxf6pdUxMWqZZ8nXEWkk1m3M3YxNx5mMVLD4ApeeyHmw58capc8yTLAhrB9cDF3b1PNp1wtyd",
  "key18": "2GX9vjpqjgx6nBwofSXJDhhR6Ao6josbRvQHF79F6StEG1bG9ssyqHBzmHKQRHYuAu3jfwKmsDdjqTtaWyoArsJ5",
  "key19": "2EsTShVx7BnhXawKpec1sJDcG6H91ACAcnJ23rvzpSqTF73vPaJ3pAovpSprLGeauMa8M4RB2WXAhbo6YFt3zEWy",
  "key20": "23dSmpU3TWaECTy3z6Bvnt2xCLAGJa9VcbZzQxo3EB7AZMd15Dg9y6An3snojnaMxYerLuS4ET2k4srnTDc7LefU",
  "key21": "2nzU5xbTVRjBYuP5hoxUrxxgVPN2qt161jARa4PzjwajGQ1KRFdPKoSE76JwkC2ceLeBFSkHBXtbhzqa6hVvqLKJ",
  "key22": "kSvNHrH1Kbg2Ydv1nkWDhpH48BU8KcfCMHcky4UaMJu5BvwZ7RXiq7PLanWhJAiXx3nMkc8zxanRPdkZ1fTE1b2",
  "key23": "4NkGRGmTFwUZR84XY7cUKcachhAnRzZtchqwknNnrJmEwjX4L3CVob2MNc1N2XybebZujFDZDQcKszSCwpoGM86R",
  "key24": "4BaoGzbe2X7v1e8Qdk3SN253jiGAzPXa7XtesPsjesGYUFf8vjLDXEnqybRWZqrCcfGR8EdGsJpCuZahWdhoanKx",
  "key25": "5q2tmuUcV8UdJUyBAEKmiT3uT3pKVGJ52KVgmVGhdzDGWYqDGroPXKew4Hs9MAbXtaxGuGgc8H9bZXmgGs56d74N",
  "key26": "4kLCWJAVqy57crAtP5XqAonoJ4as1qexV1z7UfF25fB1XrxmnKVdvecMf3ASn6Bbi87SZZfvLtYcnniJAQrevUs3",
  "key27": "5CCFzk4GG8SethoFUAvzSPkKHfjgHHaropwEFGjemDbi1ZNEN8irhD7YztE3SiKDQvgM8Q94FznYiNs6sBHXmTgv",
  "key28": "37sWHXTKN9hjiViNpK5J8hpNDDGUvXfqUmt8AAGJ9CWts4t6MrQV4y3ZZeqcchhatnJxdhwXiGKqcr47zxA14jTc",
  "key29": "Xn8XEEqypGnHeZoBSEk8LfkQRzFsFqABUXDJrPhAWoSSvnoU3pCNCBscRyoedWWMs8NyKqxhQWSng3jFVeKL9wV",
  "key30": "4LEQ4gZVkVwK6yioZTD17rrFVaVEmdBiAhqv6wJxjMKyXPyp9C8K4369kkvCwFrfHtAmjczJYKuUG9dUz5jgk4eh",
  "key31": "4aa2YWsfuRmo6VYseEkYxD6xAmP6RKxtCo2yzUg8hteQJ6LTffGM1G2J4WxzrvSCGkDXPd4381WcR5kiCCuMKC4e",
  "key32": "2FGfhmbZmA486bmyHAmodnSjyUvn8Zb4BYbStkqogbFmAUXKfSA9XdfNkyQKSSuMxxAKnw3CTqbtY4jpQxaRQsqF",
  "key33": "2rdaQPhh6Ex9vXZd9tojTGFe5ofphrWhbCKGTp5tqX2M11b93QRYny2TxZzEN5F5gTfrYZPHRfPhvUvbF4DJZu2",
  "key34": "2GsGeirJa41v1ocGcihwRmaCirdkjy8GCoCHnkWrdGST5DuMHqeU8ztEiQtw7AmVs5XwNFLSRPbJe2KdmiM2X3V1",
  "key35": "KBGkhn9gQU8ofDcFyEFTxRitbXjAk8s4S96U1CqDi62mudNf3VweKYhkygKEK4Xjvv4D8Vj3ssUz5qrPJ8vswqH",
  "key36": "rh75rgJERqBZX2ou5Dk4rYrenLDLUexiHBLnFSfCz7HsQXckovjxwT7TPprXVFFL97JBhtvH6zTSSofYunXowXq",
  "key37": "3rN8CoQmU6ZW9xnjp3f1DedARWrtoN8NarbBewpCaAUQpNs45KQidukLF8Hkqa4dM2GZKQQhn3enrCRpp3WEXghD",
  "key38": "3wKWFDf93YW8sdboXtAvJjLjb4PhmsbQKUB6PxH4h4bvXw6bmajWPKxJUJvCDnKWcV9iEBcaj2nVXexg3ybfDMRi",
  "key39": "2ve2t1ErZV61wEjXiczDrcEbTe2BWVGWkVQN1RCVHdCei68KrnoKjDq2SeapNjUf5LrApjuV4SZeChL8Y6t2yUNi",
  "key40": "31oWc7NEKqNMuYivTRMoZx46K7RXgGc4gSmLrwuqD8cV6bk82Hv4brzFVowLEb15hkgMmk2ZYz69ahQB2V6B6Kox",
  "key41": "2bpHaZFzwmzDazheSrHULLc6eFoAhRZL5PW6ewvJFuy7GH3BYvgMVEeZhiVTrxgT352ap53j8mrHQWhjc5p4SPnH",
  "key42": "mFuVd4Lw3ZngyDRhDGkuKtvRxodVCzJVJa1mkM8XQNch2GtFgtAFaDStSM1vZdoR43CfP4eDu8SzzWeYP1wvH9X",
  "key43": "nrnABvwX9PiMqEkd1cb5n6DUmTyxUMqHJYRMopu8ZcanwhYxwGwf41bxGuHEyuWuMgZ6rBKcpd1CY82RG9eLZM6",
  "key44": "5ihbmjLyzVrCUWx2eLVmv3Xacuah9VmA1utBCfFgX2kYLqoSU7BSD4RAkKktzQw4DxgBYNRnmdki9RByxQAdNTDu",
  "key45": "5wwMuAnrasuZjg8QzMGkq9p4RRKp18AGstwo1Gbj5xfS7pBgdLgJUepw1YpdExhic1HTtvAkqGM3FsJoMUryN5EC",
  "key46": "3xJQzj7Vx3MHDW5TTwcmmnqdAQ2QgrH96hPuNj3bGVbTMnUgW7Ek2at6TWjhR2FcWm6nBHtc192aKiF9WspYxuCi"
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
