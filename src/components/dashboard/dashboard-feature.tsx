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
    "4cHXRFm41iasatoQCeoze6J7gpFi3WWT43jYTTA4hWksUmCYkg3nRSHQiVap5mQUrUodBGzmyiv79EGSrw3Rp85u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58FnCTWfkjXYwBSanEboWQs23HwfvWV3CAXVsrhgidwNCk2qFraixkejSJGXFQ1fupw4b9cvWyLGP1Tk4uxGwGLM",
  "key1": "5m8e4ngZejt7m75bLMxbLwVfTdPFo5W98wGo4h9qQfK8piqyvh5rVjqnASBdbvorY5k1aQFmwjhpfRUKJDbGJhnj",
  "key2": "4GRFtuJVJEA6T64WNJEHuDfT3TUARU1MDy2BqVZksTdVdxg3RLceMsku92tRdEFqSH5PviMB22JyeQ7i8VnaTduN",
  "key3": "47KUsgVKoM3MJ36PEfDVJixTHkc9j92Ycc3SzZrc2Uwh1VKukn6Q6gRH6z5jTuxc81mCNtcnTYJ2roBgRBzPVphP",
  "key4": "58k86ZZtJxG8g4girMU6f8wZ1yMVBMHs6PTZQ2F62UxKbGTVCnrTU93Vvev3wzmVsbudwNqtmmjFFbxMV29aeYkx",
  "key5": "Fbc21KEqYDUYP6GQJxj1NC9jgQa7us7HFaDxkGcEAv25o6wdN6LiKgK5fy9SBDXAwtRLRpDQEkotLu7ybcuypvN",
  "key6": "3mBmjUczX4AfYK1a2j3vDmSTxLQKGwcSLjQmwsUYm7qcU1uUxKckADqbuZStLzor8GxHrxCzq6dNUKJTQ94yqspU",
  "key7": "2BZdpTd21FNor9KvTFnKMnn1LiLrn5jKTfefh1Dq1ABdR9qASr9hwYK72oc2Cd9GbX54eFMe8Qu7JVmmtk6LW1fu",
  "key8": "3oQFxbFZVgMEgifY3B4H1EffTfydKgR4k6dAw4RoxC1H7UcX4GTesp1qki82NKPnPZFmuznTTyuk1XBaTHxwSyMg",
  "key9": "2bnS4E1FwYcK9E6eyL6cSggQTGTQDSPXegD2f7fQqT3qN9TgvD9Rhot2f4yfYh1bnqQLeAMJzc1fNGQefqKBS9Z4",
  "key10": "47JKnf65tbqHF1sfRy5EWK7cGrAwKNNUY9DMRjshDAnEdawBcZVxPdQawXsSZDdDGyHmini9HFq5jrNts7meRgTV",
  "key11": "4jVgGH5n4jdUHsRfKzJ1N4Je5JEPdPzqtmPUQ2Tyhabo8Zy22ShnhzBUj4N2LLXW2sJRN5uGn28mxAJr8H8pSu33",
  "key12": "4BSpdFdqQ2GjPXMAFqu25CwGjyiqXASgUHaPjqUmf1nMcJkWVeAixMRwFiFjHgemhUgvV5ik3mF17PD3wpPKDBwS",
  "key13": "4JY38dCyCyXywdaVECKedesoAeNybZoGBFNgTyK4VRyBR1Y6GTBzinnAJmfkFY1KoDbEfHkt7KwzQhP7fM8zyvnH",
  "key14": "2NYf78h8Nzmb7HmUoxq8SoSFiB1vKksBUCPWHqBEijyEjWBEqcuNhmnyoGAYHaV6A6pSEVu6oNweTDC1XFRrW2od",
  "key15": "yHFvpr43zdEGBoLhhnPKcJdEdWxB5wqMsJSfNzYUrezJYtcaPENQF58f42yb1AgawbWHj91dKGGG4Yr1xzfHj3k",
  "key16": "2hhrgJv6qvf77pmTZwEjVJKAV9ssCg27rTJm8rPqfJfmQJWJQQP6rd46gEHLb5fqAs8AFKo42t6YjczqQF1FaDbN",
  "key17": "2DUTKqyXKvmx3bYENYtk32mLrZHm5NhMUdZRnDu1HZVQ9Eduujtrxf9eo45QZ3RSrd6gw14P45LtfiKxaiEJddRS",
  "key18": "5MckMZkTwngK86eH3dDUGUZDZiAKYVgaNpcLirkNwaW1qUdPMQ6weXx2imCk8AUpHPmYT8kinArytiV3GYiiorKZ",
  "key19": "623uPu49wSY5FJqN6zU7TVNqKo1heztnaLTBiRePn11XgPEfNCSs65kdKSH2ZADor9xRg1GRfRcbRX2W6kH3TYmx",
  "key20": "5VLoxWfVz6ywnmven5Pwy5Aog5MaHqa8PNiRARsokUda4o5Qjq8LmZ4Cpm9E4NXJaXmzxLmxaa5mfxicBHG22VMQ",
  "key21": "Rtc4rrRuThZqmxL1hNLq98XbWsbPU1CtFY2x9VhH5P8pyJCPTqLXp1Lg54xuRTWk9JanCbpntYrtWjHAknBaVhq",
  "key22": "Ejcw1cAkfcMptfk8yjCpFyKgxxBdPF8VErCEQMDMLNKr4DKuxciZyHKP65dUP54HitS9q7grzUqzbpzpCRjS4Sx",
  "key23": "4VohQnLYavyLfAoVaJvREbFPHzZFMfmz5cthEtJq2CTTAkDqSiP1sKZTtoabKbpMFEAX5A2JaANhzKaURsK4SU3r",
  "key24": "VBU6kTMHf7M2StzuCR8AVnkCxisARYw8cY2j89vHm7q7NHWchhBzKad7sf5Ts4pmnL8RdGJibUEmbs4qAQxrSTA",
  "key25": "RM45T8NTBgP5D9ZKMBUaLu5CGqDkYShgCyjYJELpbgXd6ZiFtCEhwgk8qyiztoi8o7APxUpnKQ944ftm3v2yWhU",
  "key26": "3pE5xCybMtvn98q7wJcm3AuphnRM2U72Uby7VzVL1bTVebGNFbuAdy8TWxZ96qS3rtgbagtgdpTVTRBX4qGxWh8Z",
  "key27": "1qdjtgwdo19mANCgTgUv3oCzvjfbJUZdPrjTUBMpMCfYx9GyTGfMT5hyZ9XUHbRuX6dYufRxbUwisrtznGSG5Hm",
  "key28": "2S2q2auXwRHg6j3n3vq2NWLBhKgjjjVJkdTvQ5kDKp9C4z1N5wujsYCrnHjjEMX62nV79xjTTm7bTMQM2ErYGYit",
  "key29": "uy2KTnNrzkFYgdoLphxZXzg4vsNMQ9b6u1dksgSZp6Lu1Z93i1xGFG9fiMgLTjtohpErafVe2idsgrpyYxdaQhz",
  "key30": "48oSxxJsNHAzPZu7fZDxtzRAkNvQ8jNHmACLQGFvCdKLk5kDKqtn9vfeVBqvV5PbX9FDX3A2X8j2eotfScTq13CV",
  "key31": "3KcPKYjGZff5zeV7B3ArktmPmuKTZF6TWrrYwkxhtJDnnKC3uXUQmwr6U3aj4JvGt5TdsiD9vKnTmW3mVis9rA31",
  "key32": "4p7pT2aFnS6PADNLUpSgbQ3RsQZPzZNHvtvLEFaKKbQtfCKUv4WfhGfhNY4oTd1TSeYxxkcwohbQbfF23tjrPBTh",
  "key33": "mxrgd4o3P6aUiPVEADF1zCcApH6QmC741Xvd7A5QM1akyit41ut4f5gZieaQ2BdJqSRFanBhd3SbBzbvHqkgj9B"
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
