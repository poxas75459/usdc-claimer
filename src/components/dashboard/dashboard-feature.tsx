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
    "4U78ijhifrSp5wYVnAvDo3yYpHDTDJ2LMWZtdjeWT2RCzDcV2e8oZ6VYi9im8Qi46Hbj3wqS2PKZQSjFvn72f9ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64g9XdsY5t29yBKtUqr3Tz2FJk9S1C3QeW4BQRyaxasoeyzucRG49D8TEFW7v8MUQHH3kK3PdW9FYWafjmb6cfGj",
  "key1": "3Lx2A8EqHFtBDuHRiPYwecaRJ2ysLyvHVZcSuqL1Z48J15ZprQGu7CnbtoUgtyHU4oVzF7LDfmzC6sXHUWQunrJB",
  "key2": "r2a6Mh1uQMcEre646J4MzPhNJ3mqtrEu7aoDkQ49kzLYpxCxFokezbYcqyGpiVzGb8o7bymEHxbWnjyShXtRwmf",
  "key3": "46NZM13WeFm2Rqm3JZwDp9M4d5UEwpg8uaqLbzfm1Gyn2mktgfE13G7K2qjYmcwSxsCgCVtRBrLEk86tpx7EwkMx",
  "key4": "4p9Mihz4QSXb2hCWQnFLyCspjyE9nTD7UCwHAoCdoaQY2Kv6qdFrWnpVZyCHHmG7DxMwoKwhwrkQQqwQJ7nPD9NC",
  "key5": "58rUEhaPkT4fWzBf7Q6bFvivtZMBJVLadJxM2pBrpciqvHHz4uGsMWbp4p86rWnvnzMGptmaYGAxbn1cGqZKihBN",
  "key6": "zywT8VemkDaXt92mxJ4bPn2C2GGbZWTbEE7F1Z8beB3qcET7VQW7wwGf7FVoTnxH7DAjHsR27Mt7Ps5Z7pgdF5F",
  "key7": "357J6SWC7ZfbEZRWC93EPeRrsZ9BR94gZ6ujzXB8ZPJgPQgECEexbSE7aTLp5m9v6Rr3vReGdaxU8sD8oQogREEH",
  "key8": "52V4W2E2sxVosFaTQttMeWmmSKHWYYQsaEfXvs1vCLgLni3n3rVh9ymkdmsXJgPknUoxgr4j9zF53GDrc3eZXL3g",
  "key9": "2Hwzdtqbj9CdSNr98agNcw6ZGupWxqXtvDDdBRDfw2b8FDJmWbSwdt8iEpGhKntmhffDHgNSMn6wacoyNgZ66f9R",
  "key10": "2CHZMLKmARGizKR9tg2NYXegesZJniuv3hxQ7vTAMx6H7VR1FD3d7zbAnXiepc65LeiMekTAypyrkvtJiJDqCQnS",
  "key11": "5r4yf48v9Ks3BK8ECGsP6gS3L7JF7Z5CgnADDXdcn8RhDEYcEmsTfMYKNLFgXiMyZMhmxV4uRSAqdptT5tGTtpBo",
  "key12": "64q8DzXXzedv716nAYQDMg2VUq2RWUQGcXVMoXrTV4vMWtoxPVojxLUyE4t8ABPZag5LBy4y4qGpQuirSEoKrw21",
  "key13": "E4VHRVKiNrRHjmwLuwemNr4jdf6qiMgWgt51rJGoGRKxACj2QFsqsUSShBMgg18TmPsBrytkUCJqSn2NUtnZxxm",
  "key14": "2nfUTkjHyHYTfZCedMMwrzkGed6MBgCQuxyLLZdRJmoVyUCitj7nmTgMr6WomRCRDjh9Jg4WYPkX9XyHnF8Qjy6h",
  "key15": "3v1qyALG8ZtLqg6xcj7VPXu7MPMb6R7h3ujgeH8Mg16we4UiN3fe4kigDKEMU7hzuK6RX6oWRuEi7xQkNfhU5hxk",
  "key16": "25mhs9cb8nVHCbn3mJuTMu7V1HvpoF61FjXNATbwsJYfE8MpJrcpkWMQX4XC7N584tMza1ALLgtg8pVunRstPRYx",
  "key17": "27jZ82HuhGir2WeejWqYuQKRnZjRZXJht2gWktZEHTizTyRXiiupZHiuML3PJPd3qKeVPWtrg7VA3ARutfZLPS6Z",
  "key18": "eU719sWimaonY5iiWLNdv4rVMdWiLsdUCebw31pgoXNp7bAQ1izeAjiFBSpZV3R7Hzz1rSPAg9Z5ShWkCswKp9D",
  "key19": "j54ReTVztqreEb7SyEo54xqhz7ykscYemUsyjzRnvtgjSfW2fc8wQYRxWURTGSafvAqeodPSnsy8955zTzTVeKj",
  "key20": "X5ohfVoYmvs5AyuE9geCMBLHDkUjnjnxMpE9U6dhxtZCZB7wkQ28Kz91LcqVnnonznkg4FFgCzkgVr2za11WokC",
  "key21": "55nuEvoE4ZN4VYYkXMuMSKf6ZTn2XdGorNmYkie1BoMw7hB4vZhrDtEMs2ef7eAvLMaKck6rYqJC41sLf8LRbi3S",
  "key22": "EXmE1UDFmGsrjAgpDj1VJtVjAojnLNKPK6s2dFpHoEfERtWGcDPMAWk3CNWR8FT6TC1tf5AP6BkkcfphNLSwyTG",
  "key23": "4jEnA93RpYjEfMrF7Ws9S2ZfB2xV7iScH4yRZxDiS9QNFUm4mTZhBLrhUtFK74rv3TWSL9Eb63hbFEzTBTaPsio7",
  "key24": "66X4Bheeva6ZkpCFpL6tD5NerW6MRtQKRaj3m7YijozFpYvDjAb4r1cCtUGECYN1XfVASnztdcVzsy8G23vuY11B",
  "key25": "4icJ9SARjUk6qjEgDnwrw83n5184TkNfCjvc8iy2xo2oWf4Q7EyuzLDixJxyz6Kmn7moceDDco2z7ebaqmxVFCkh",
  "key26": "f2H98WkyJJfq67aC7MPvwTMi7Tue1zyvDvYUT6XPrpvhZc2DV8kNLrFYH9y4acC2h1GhHegVVVPR5C78NssaVux",
  "key27": "43BjtftDNW6GrjfqTz1wTC8EPRaDWbT2gLKGjVp4oVKmVEL83Y56Fn7eGbrnnQykN45qd8JzgfwFs18Nw6qHPR4w",
  "key28": "4th2b88J4wVC97ePbTk5YuKeNnMZu3gxmfVvtu5UHiDeuCM2gno2NdxBMTpQzFnkTLexNpCmFrFvK1JJ1Fv4FzJy",
  "key29": "43cGkwhJbnz4DPwEK2fiBxts6pMm2mwhGV37TgHPZLanXTApt3K9HfSE8rMWgDPg5caBNG6FrykLfFASrCqptuMz",
  "key30": "Fuewpszj9Q2H6oiQQTyfhxghD6nA6DfdgbaGfBnjXa5nPrAp5jv8KhahRYqCkDB53baYWHJpXU42gp1JjY3K6mH",
  "key31": "4uUsm7iiG3wRsH9az8kvjDpniUpDYrtg2UE9Rrsnc6TqH2Bg4nvdhRWajPNkeHg9rjkg61SSrCCoLdqXWejHYbSV",
  "key32": "Ca1sEVwzzVGgL1oJhukLKowyRC2u7581Rkb1dv43KDc6gwfJJNAZG59cwcSFhycBv5pRf2kmpfQPwju2GnPwjrL",
  "key33": "GFuVbpJaNQgRU3zojWpWXUyeLjvZpFMjknKN76UcDa7p9r7KxtPyjwei5dsqPMnYkWLdb2r9mpW16uxfc4nBUS3",
  "key34": "63aYxtJqdTMfMEt5Kiyaxy3riQ8qC4cjtfR4nwQoBJ5APMxbgZcma8GxBZGgmjB3v2Dj8JD5bps7geny5L4ZEBCo",
  "key35": "2FBM81MdHjaaz7aUUFnFENu4caEQQesZqPegMd67GPBhQuJJ6ZSRtvZqPXiptwTCnpiCDmsZciTQuJKstBrXat7c",
  "key36": "25YdyJ25iihYJerSnM1vhhFrBMeSSjhCSef5pogwwashq3uw7vNZMggzoh9V4Fr7EatnPgMr7o8n4grc69P8hm3A",
  "key37": "uVkZjTs2B3TYSAuZs1KvKc18Qj6bJHkXNnkxj8v72jv2nSUXzr2Y1vik379srvo228mD262K5QVVuLFJ9Tmn3tL",
  "key38": "3EqLHEC5iMv4sXWwRKufNLdegDmAc44DXBK2AYiukxsvHbAJkdHmvHDwwtmPeYXEtu7aGQgEedb29mo9KX1TnfLH",
  "key39": "qd8DNxsvtd3xWiK7RdNzzGqbguVi5PmVJ48k3ZHWwvQjY5wYLtL5Nb7MBVooXyxZB8w97gnfsXcz3j4dDtbSK3N",
  "key40": "4MbfTWAeNuwLXQGZe39hwzmnS6XJWMdzVtPokMXMmE62avLA2JiCSXYKjRNmafr6TLp72cTY7AEzHoKzn2qXs7ew",
  "key41": "qRNDxze1kFsrkFNa6kFy1ymdT1DtmNem67Qs8re7VM1xcjN7t3yfpcXuSRVx9ZnieCLGxuy1MfFad8giNKfWKqQ"
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
