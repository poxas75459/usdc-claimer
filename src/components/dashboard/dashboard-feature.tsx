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
    "4VNKfM9YFujsAVNdY3LvPgdZMu54cbtgCDHedrVpfUi17rYkCnPPoeqCDnjw4ogbZm45hGBVCNLqo2qEfXsatFFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YevfF2XcVLA9MkAZVHj5xbWHc6sgK5NadQVvpiLa2nc7M4h1DhfEyYqTxzgxDAJyoGdzwqr7sspCdpEqvSZYgmt",
  "key1": "rpWr5wMTUkGYPGPEEGVcq5GyHa2GFctDSwrjvQWoafxR8rfXYUEZiGsydc1QeRFAPZnPJh25zR337d2jbyPJvGd",
  "key2": "2j8cHGSdzzndvp4BPS5RMcpEW4in73qMVzkXU6rugs1usWGGGowkfyutCwBDkki1z66LkmXbS8SPq2vc9nQtqiBp",
  "key3": "2GjWbjyaLg4pAiJNpfPQhf2tbcRNH5daoYmesYaMHvbzP1HDGxwFK3DUMBrmvPrgpzLcpgbZuFjmvFHDRAnRC4RT",
  "key4": "3yJ4ad39Q2LXPpHZupNJVJArjFWBqG8CEFXzyPxr7PUex2eeJVqSSSsozyxeHqHunRCrTh26dCbt8zRBrbQqsFLx",
  "key5": "4qoWWz7Q3SJpuWAMTvaQB49nv5SXeA5gSLKGv86RPZwytT7DMZPSPky1Cs3scKoBCdzK1Mt4EXSt5hihmYNLyvSw",
  "key6": "4eKfjMbTLqJpz5oxnBTq5hWJPFYyDdTE3UPTPmvnA9uvZhCNcXf1HEGzyiWu2RgFHimWZXQKGsv5cY5vGU3BSgye",
  "key7": "4HnFcUwxXb7SDHkoGr7JR9F9A1XC3H6FUSpkwFYEtxfmFwijLJD9esf3xgTWCFupnbNEcfQB1QxzjV1avfA5byKD",
  "key8": "3RSZchLTzSJfSEEAjvGra4UB8SeHkQp2AtN96NiEXtYgaNhCKLgK8jQSgc5ej9gfx4ybg2FF57diQzwEQQ1B6v7Z",
  "key9": "4rADGu95moorhHWMjvTxmqej7BLygYnB5CcijGfrnWLrnyVysarhZCB9CiLyyXFW2xL9mnLRbq5ufrMmi8TaHeGV",
  "key10": "2iYg7JV7PuophnzRRw6fr7qjgcFjdauqqu1c8eraLJm7FMrHKNXfqbdPMGrBH2N2QqaUAcW5rQHEJyr54aXKmwaq",
  "key11": "GD5UCqL5byK9pNqLbrUah3gR8CR1yh6SHBgpsmXW17mBMpnxBRVMpypywEyyoRkNZAgzoa4nN7nKHKzMJmTbiyf",
  "key12": "2sL4tLEYGXMSs2EM7aqUK76r1GHXY1PYyCQVDRcvWKujzFaGwkoFoEnLK91qrqNgcxh9bVekBKU9Y97Kygu7drWY",
  "key13": "B3vVyDct7yBdwBSjZxtnk9bxiDduEULxhpijd11xFHchgL6pAksg2MKRoADFYuWGxvdb6QjgLheud1QBMJ6bHng",
  "key14": "4pmMe6NwkzHsiWKcVy4Qpj6kH8mEiFUoo2vQnLPbo69eKuwoj87EzJ6tQFtUhcvN76jnC7TdWce7gFYt1XGaT4wm",
  "key15": "ZS45KuGPB6Lxw6J7p2NbQQQhccT1dGHPUq9zEgKF5iRwDJv2NnVvoHNCS2psrcnWr4bzXbyxuPmpVhohex9yNj1",
  "key16": "4M5hMVD7FkQDcKY44gvQK8A7vrumXqAq1A88BzJGSJnzhiQqEHVaErCVXJ5LkVbdkHzQW43QBdiRYKUzpFbn4JPp",
  "key17": "4D8Mhr2eKrnuBxRSNM3KDbRVPnkVdgwxaUvKsZegXvKXpwnBFjmH7BTrbhh1tvXzM2vDvrxi1RU2pj6X3oUqqiZE",
  "key18": "4iVsopD4Eub26vpEUWxsYDeAQoevahWHnDiiuRgdci1A9FQGLDhATeMgX4jAKQKkZR85zQvQMseXGXy22KZqrRto",
  "key19": "4PAM4e4gbzAr4ZPmHTrg1BBtypXNbfdJju4XsF1Kvj3bYzmzTj9kQFh3G9tJip3v9yjBekZEXnof53B8NSoKVhCP",
  "key20": "5FPFqW3JrydK8aSL7kQv1CuNL7nDR5ahzgUopRe5sc5PEoBaRd2adNrgptF38o1yvbprMDbuT4zJPwNQDPZ2UCs7",
  "key21": "26ZRBEhA1JcVxtfxnGEVhfTRgFgGTYk9fojkBFaN8zqQMpjnmM4fsBA6M99aXu71QkuNALpJqsv1TGCpMaEvjj8E",
  "key22": "TfHm4WgvBbo9dQY5hP21kxE1EX7jqwXzxi36PtXgDa782c3wqFBroPi5gzdhoYJxka8hDrX98QWBCTuK69aGnYU",
  "key23": "3p4zqpJunyM6fQWKeLcAdy8gK3guabNhLQg4Lq4JLFenTzrzjWG1pJDAQ7QmAfM599kfJ1uUyPu2wmVuKheKJKQs",
  "key24": "3ZDAV4X3uSBz3JFRfkJMk2xvUf64sGrC1KE7DzgNGV5yhRKgHiGUWerpCTSpTFt7h3H3bWortoxQVNh12fYmi7sr",
  "key25": "tM1UDWdrqxMCmK5nDKRa8hTGtusFuB3iNJb5pRpGL5k3ma1vZ1VixSNaTj13ygheFk6bamWW7s1JZc2Uyf4dMdC",
  "key26": "4CxgXvc9pW5iqgJTN85y77z9BceHZxMVHbYvTN3GyZ1Ko28cPXEgwbWubuYoeUP64h1FoFfsrpfJagihvi8YsMAu",
  "key27": "5L654ZazErvz46k814npzQAwxaSHNjTENtEzwzRTaWksBVmWYbjXqKZY9QxZ4ba8a7NRNge3WiDi3NFPXnVUmMPg",
  "key28": "5oLTK8SKarF64VyDPNBWKXrvgb3W5jkp62SnUjrdBJMvdGtEEhUd3yLhbUEFX7KTBU17VHimgLAYnCz9UWx7GV4Y",
  "key29": "5CqbcRPbktcynKTJzKojA2cpakULfGuqdENyhiFGtdw3TcTXfsPcZxY6dj8RDhhCXwPguXxLDpctT8AhfbdZAjcA",
  "key30": "27wvsZbWLkak5UxFTuUqc9nnsp1ZuNCDZ4jvCHcm1zCEbM2R6PAub1duVA6oFm1mu3dX7J6aispmzvFjKNfgKHPZ",
  "key31": "5AGiXc3KY2VaeDvT5M7if3KEjE1raP8ii47VUhGgPMfctFj9dgqpaPv2fjZgHrn3nYUCT2bHPr6j51PUJCXksKev",
  "key32": "GtBgyJRYu1sgX99cN77SdANex8WySPK6frR5gUc22RvNxN6vhbVduBLDeoP26Mf3GgQLnvYz9qDazC7LyE1tebN",
  "key33": "4pLVY8ibcZU2G52GLATa9wziywi1pmeKbW4ottxvy3BRbWmVUfr5KHKuQ4sVAVgSq15FCKJK1fE7gTkss2fv6bLj"
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
