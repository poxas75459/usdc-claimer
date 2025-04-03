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
    "2byxoQWff7GVGESk1DtLvGsA3hexK8cb5Es3eHh5F5jfDo5JCT8jCcNiFHc61N66PRhQnPiVNnL4Q7FiUiZs2oRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SS5gqdmrCQXi552mLwDXVy7W8ksPZxJWYFTWVdZ8TsLGNd9KPNqP36wfdZUbKPYBYRkEt4WNLk2EaxiAS1vEz54",
  "key1": "csn8wwftU9KK2k9sPFoByrd4NXkijXwVf6ivFka7YTfpJefNCUsRTvuheKkhhFiYie2HDrWyAEsH16ptHBVTuhs",
  "key2": "5WmGLqgb516Mdkdw7Yrj12eD1iVozzqjGj5hL7Mr43gCn34NYQxu19y7a6Gs5GRaxwzmmiJQ99VzhLgbk59TBSdy",
  "key3": "43X5uEFyrZdsJDDPyMGD6KHV787tyeDqDbrQMj2jvRpWstNwH26Tud1S2hoMGjc3URmbsTcECsHSnQ1woa9TaX7q",
  "key4": "46pjQTK2XhQQJ7C3AWtiqrTbufeC9cTZvswE85jN6BqbDnYfpKTXqCL7FxMsfapfbpMhb9oaomw72zRowBApoQXn",
  "key5": "uk9gnkJ9sYEknPPsxPT7DcWnmokFByJERXpPeuwc7DTxx9CfZ5ocJL9WXyv1Hf8UF4s2MxSRqRqJ6EAovWJcFNt",
  "key6": "2BSbbZzXXpmZxBdzZ7ATqpDw9MV5U5QBPdfco6BpRw4U6ADJWsZ9s7kKjXHxcGQwhEf1EZqRyaeshVE28BPJRXKt",
  "key7": "2bfbtRfnFVSfequdq191Tkq32AoLbnQAjPk2F6e5qw92qjJEhPZrnJnyriHb7kwx1rA1bNxLkyWEZq4Q4VvcncW1",
  "key8": "5dp4Xeeyeouwgft78fWAtRZEQ23hcwo1Barp9p8GhL9z1m3gFKDfKopgzNPwDvYvg3MXtfxKBcbQKZWqJawthubZ",
  "key9": "jc7ZEn1j5MLnAaVbTsrbwmJKFSZBwRq2Qp1hQnWjJrf3J8YeCfLyDNo3AR3WiPtT88dS3Fn98r2DPww65tYYzDx",
  "key10": "5DwuJwmuXgKrD1t7YbtrNn2nffuFZupcPmnaTr2UTA2uARA7pQi2xvcLGQjCCpxdrFFwaGHSynQDCyAhcyXNHcs7",
  "key11": "3fXmpQfQoRy2K2ebxKMr1hkJTamfVwBnH2473JJno84brVUrGKHTGNbuD8qB3D58rwaSadSNF9UmvTHdvWJ5jFUn",
  "key12": "MSquDDDxP9jyjPSywVkRHFDZq6wj8CxSqiq1Vr51qYt4Pi3SLEEwmN8dqgRdbcxQofPxf1NhKPFMc9rrstQTJHY",
  "key13": "22X4qvBsXWZGgqFkfMmQYr5owjL7jS2HV5bxNgbChbr7tdpg8oyFe8TMgZE1kkoud3keGaXpoRLZc9cQ8zm9wKZh",
  "key14": "24zj4yaapkEQ3zkCJeEN7evr1aVPCpnYtpHE2okWWuzMB6dW48p8X39Yh1u2rKA6pEt3y9U8GoAWCYKaqUFSuLkW",
  "key15": "xMDR4q7DKs8PxXz3Qj48FZenChojJ5T3LmBbqUDPZAZNJ27dzpVd1pgMpukckHPrB1RcjKuVKoyWah3HpPjLWe8",
  "key16": "4ztFM5XvsVZYT9xViFmqdpp79qVGQ3ru4RrKMGiCzTYA5aRhaPNXpwrga9UBp7qGzDG3Hn51bBNzvSb9cDnTMEqi",
  "key17": "3LJX5c49ZJ2D9auwmqvvCAdj9a92CUPkykTQtakgCzPCiSE8bcMLTvnFDrPYZsCHbQPJB4mPb5Hi1ryKFTdYHF7W",
  "key18": "B2ADQbKV822xxipFXquSoV8Jij8kdMni9opoSRcb3STMNmrFrXMYp46H6ry5h8CkCJp9Q13tuvE5PfsssRJFoFN",
  "key19": "5Q3AxcFozN2TieyzKMNMACajTsB8itognDGyK7fJsYkenojQe6F9ZhK38r6Yr7ARsv9rvfKnxT6VsgUsqV6gPwJE",
  "key20": "4RspcL3EJa5ZTbQoz4bjfFXng5jWVPRG2LK2NRuDeLZj8mpuSTkHX3CyNB7SGiXrfVGnFANJHUrFL1ioEJ915hza",
  "key21": "4Q393s9SHbh6BMLN8HwxYiMEZGUER6HhwyVezDgujBSchdmww8DAnXaR6ULAU6SeWLgvPtCQeVAok81XnJUDzqhS",
  "key22": "jTb5WGrZgcXjjG91ZSwYhcAp1nVctQkwNZrtiRyBGRxQZUatG5znMcpioaNguFHQXzivfmWPLEdiJFRTGmgEEDJ",
  "key23": "54tnCbJ99XAUFeQPG7Es8jaTmVPF4Bmne843hDNMx86thHwhfTpDTD4tvRPu8sZqMvN6uEfwv2iFp7VwjCYCYc6c",
  "key24": "gXzW1yTkFUZmfHvDYFU4ibCmPoKsZDVoMKYUBk5BRyb1wg4CA4hy3CDTLgcY2jZtTb738EW6gPy5NUYXLdSvWML",
  "key25": "4hVXmSrcKYZXRze3S4QeebGkT5CYDP5io5tXfvDgZM6U6bmnb388bbjz1xWCt8AnBoGXTaMaK2sGHQ2PYcREqnbt",
  "key26": "3hTyiARZgLcAHkGGoNMfgcDv6UNw97MJXdWsQZWEBx3bT6TP6Rn536vQePZJZefp3DDphwAD6K8ysZmoxwn5VS5m",
  "key27": "3WNpJUdN924SriXCdgSi5ZfzDVo99by7CEEUK3DrF8KSL724ocozndAk9jSdSShMn8uVjZ25rKtwspnuj8wP2Chz",
  "key28": "3N1Q48pQxz56z1uHHpTmSup99ZBqrdXhGf2QkUM2npTL5M5KpkRvyN8W2JbAW41JmCciZ6KbVqtBgsrHCqGzs6CU",
  "key29": "4WTPtwzfPbXHGigc8SE2QSwdyfn44fbWNAYQ7PqzEjTZB9omewfdyA6PfnqMvG7UcCFrrdtxCYkgDUnd4widG1mC"
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
