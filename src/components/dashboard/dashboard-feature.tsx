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
    "66VuPTersF4RTcnNcnWdfjVx5ggkhRxfwuNzcUJSAPXjsV5GvTurgtCNhaanCyAbzKkv3w8XVNq5koWPfSXZ2QBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NaTp5FAFAGXwtbPh3vzc5dpd5Naj3BK2HCZxJLraD5KXecDUVNxp1FKMYxoSRqfytjnA2AYQ2EqVBsJVxNptu5v",
  "key1": "2UE7Vj2Fns166K3ub8oZLFdA7fbMiLubNN1vfs3nN2obPy5vvX7cg1mfpgKbpB2ZocjePL1Zy2TmUkD2aJSxBRSm",
  "key2": "35gq3nHthQAy4ZKnV6Qh2HziRNwncvEEj8edtJPKxggrYT97cLxzxsKmXVH84ZwG2hb59XHuKVXJKdmvD8eq2qvX",
  "key3": "3AJ4oNoFQgkC6XLvzxwPPhtaKGj7Va91hymFj8XTSRSLtWJvSP7HucvqopUmmh9qdRhfgV1PchAGfQSSLaqHVnyd",
  "key4": "9cqGdVS5v78ZrsdGgrTDnwSJMUGcmPndXmZ19z3cFhQiaZGhr6xPKeTUZ9tQ1RxqE1HnF6RpaGnoWZer1wfHT9L",
  "key5": "W7BudrANQniraWaZn4BqESbCup27sLHReFYrnJwcR1BWXCC82E5D2JcFmdY2gZrN3q6ZJzqC977bH9oBPVeTnKr",
  "key6": "4FoWM6dFivmPHHVLDCAF8Z68UjzBp8A8bXmjuFvoF96AgoAeejLSqzVMMw2n25Kyrkomv5VPUttKQigyY9hNQpw",
  "key7": "5FH5BFNc2GWwmjRBgySNXPKRQt1RNVNM8aGzpNLLXwFuHqr3arNiUvdBPAEmafYxGzakqbmt88SV29FpRAn5mWz2",
  "key8": "3Gdnv1vCEBubJ4GjZfCLU6LTy9aRmfEuyiSAQ9LLuztYrCAVasm4Fj9wQWU1Eyq3KNRa4wwD7hcpQqS9it2mZKF5",
  "key9": "NV55rkvtQgehH67i3nTe4EWwm9WAjo3wVeVzDQPBHtya38hux3m7rYWkrPKdGkJv9vt3MPYX8f1Rjn1B7K2Ka6b",
  "key10": "5rzUszScWmH9kfeXAc31XQ8PAhtXJJ5WiHmRSCJ8niqXKVsYSaH8suPkp5ooCwtLNis3PVh3DXPy4wjMyUj7dEA8",
  "key11": "2uBDDcRax7wszcdL7po5EwFqVRfxwknPTU1PSbMBvuGvqvWBK234QMiTcgKxgysZ4gCqFZQJuPdQ4JudFupt6row",
  "key12": "4EcdJ1gG8SVMTEpifVn8jMZJfwhMfoBjNcZ2avo7S4TYDWNCgA8QXmTpyFhVv9qYczuXEDnAk58AZZBrK63K8D52",
  "key13": "5M8ymGnw5z75PBJNgoYE635uhG6g1GCfUDqVJ6AF9JuSeGkmWdkzDYfZg78Y3mirsu8263YF3Xd56TmFe972Xyns",
  "key14": "5Q7vp4g9p3oMNgJR73965B5xEoqaYjUVKX6n5UnQ18VBSfvvcPJDWnSvPRqAPC7UtxCw5BZyHpcmqkmCudQd8Byb",
  "key15": "3U1YVbMo6DNJ3mYa71Guwt8J6GHnyAxNj3BPX3QvN7qiKszVTz7kf6z95JweySRSeKd6BiMBhHcC5HdLv7HZkQPi",
  "key16": "5zjxeFfafJTCYCRMykWJ5XPG3XAsh3bFny44obp91Fg6jpNJA7JuyZAyYxBAPJxpk7rMi9bwWi5ee2EhbvEs5pBM",
  "key17": "68gtfpC5EpzDXhcCKDfwU1RLLgCcpqow9D5QfrXTsqNdA7uukNNM78vbAKQYgnC6ZVGdkmAR1yus2K41iAenLSe",
  "key18": "3imV4jqjukv8yLTFTuv8YhoYHKVTSLWRgwuDD9ob4Rb5J9zpAD88QbTG21z9HDR5fJk9o4YA4HL6uA7F2wVPRFA6",
  "key19": "4QX6jUuanDdSv2TfUmjMu5cMVQXiNe6HsYzTZBLCTLY4ApfguRgmVWS8A18Ae9dYu98a5K5okdaJQT5vehZt3aDn",
  "key20": "2MLPtygnVmUhR2uE8ZGGGizfguBdNdEktQiLNrsQqoMGiKjhr2AR7A6JFDnwigPYT8nhMQdebZ9RYeLNFiRUTuyT",
  "key21": "4CiXjBNfEMKrU2StmSEveT9HpUHH2oXXTWFrXLxr4KgfhyVLdMgx6epWG115avRU2nNHpoA5tEMbGm47rxUy9JUL",
  "key22": "5Wa7ZT6K5dmdbNEpVMXwXUtrLhZEA7VmdVi5Zsde8cWqHYxSzj4nbkpCfCbv2kfdLNTQYSSB9Uo8EV2FqLGAhbZz",
  "key23": "3SXtPuREUWZiYFj8YeCBLWWTdT5RqzzTFhinx3T44RVeGkjCdrGK5i1DY1ppBsg9TvxAgiuvQU5PdcXDfdk4De9X",
  "key24": "5vwo95AManJySioLoqJ2ckWUwtj7h5pP93QZvfHk5aFPRPjiupWeh1eSk6soSmCFxohG49t5DRMwEhVkfGbKDn2R",
  "key25": "65sHieepQGfXeMwzoN1VDmehxmiNpDTeAjvfhMBR7CXcnmvUMcw8rfRRApvXR5gEtCVVqApXUexLSbm2qTvKo3T1",
  "key26": "2EmQHhkXqzDLxkinnuffv6QJ2GybGCNSH5pDGkYBskK5ecUiS6T6Hp1UmoLNaKVaSboY8S3zGYAAAbr2G5z5Re65",
  "key27": "5wsboR2Fm27453VoEiR6ymPjXKuEiUNTEjETA8gka5oHMd628zFo98yRaBEopiNE1NkGaHCeoCwSXqQ2n2TmAwSV",
  "key28": "4FrM6JLKGLeeQUGnjBQz6eDABpwK1p9LkZm8u9BWn3wm6dBu26WvJdDS3oHGZaDhuCa5uPJpAV2om1Eb6inj5DQA",
  "key29": "2Nrpb4gGXxJ8qJsaSXY8P1mQwvci1HnuYjUPFas3EbUYT3jMjwqT3QkGNvRMc8va7ZiJyQtJRLNYpcPKZJtTowVu",
  "key30": "4LubeBMi3vJUUwzV5Yha3d5JiWozEaPCwo8HhxeovoHByJAJMXd5rQ7GeMjStnM1HXeEaf5jDcBLFCKbaXpgiU64",
  "key31": "Y3We1dxbNprNFa8siJ9FJrMavNXsnv6odVckkiPbJRMbZMkf2jruKu5Um7c2KpnLT1kaeDxMZiVfUdc3atKw3WM",
  "key32": "531ZTRzm9znGFdTeXFoYZfvKLyTtZ4tjEu2NyvHkzm8hxoYi8QpbR81We1BtDWDRYRDnvdjDPVaVA2EapLMjndZo",
  "key33": "4rc2idVahvMEP9bhYBcTzSuWtYxXFyqSJAz5jCgNCosNT2YL2kkFsKvFwSBwv7ro78yZoVpq4NHD5kyMHT1DLUdz",
  "key34": "5ctHbcinT6oB6sUTf3ySFuDqxTNWUJX57XkZTn8uVzGXjFYCFntMjbds2a8Ex7v5G7zA9Fyfdft9XX9u5rt85y3E",
  "key35": "3VP7q6hCuuorCBB89GHKygwGupPxr1yFx3XZwN6dRsHpAH81bnXU3mWsLxyWjUGpQpDqX4cUTxXbX2RCqLEdgRFD"
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
