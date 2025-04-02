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
    "3kURc2dUV66aX7G9RwbhEAp7KoxZ2zeS8kKpEFscppbCHSTXcVrP1s2cPLv58LASbLoZHanrHDFi8xAcX21pdQmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WeMpchTtmbzyAy2Sydp4gv7mVcZRhRkCQVmo4x5BDvWRXLMLYrvg9Aom5QdYNkRji68qiTXaSmbi3dpBzJ1Cipg",
  "key1": "4P4ornrTzh4cS62m8GB7tbywd4AVuYL257hvH4kTVD2jF3HE8bHUHF1a19nfUje9oPnZHunxS8WY9cTLf1Bz7jzT",
  "key2": "1wuEHyrWGYpty4HVnZqusR79pmzJJSzMyxABd9TLvxzxzDYSoVbK68jzCRwW7RGLEsAaYsaYp4DHEP9diSTtkFJ",
  "key3": "4e5qAHG9Qte67AGcYVjVruomQeeRCD7A1MPJM5MS3fu2Q7HgfzahGNyeNDYaiyc3rKeyKWnKyLSmEtFCNfLyowoX",
  "key4": "5EUbzEWvdtMM51EcDPmSDiRMwAGaWwb4ESew8wdZjJ5S7YeqNZUTQhyoVZ46tSFvCGcPeAQ9gzHiTTDN2deXYGiT",
  "key5": "2kFbHAawemsEnEyws5zN1nNBMcUoei6fghNWVh9c8SoSeF9bpHEq4ADxKhJ6AeGf2iZEvLfEjA2RiHHb6UdGLpL7",
  "key6": "2h1mqSCtwLJxx3yyMAc6ZFd7Gkzi3h1EqAWVEwux9qm8dh53r5YsdqBF7tn53rm4i73gkxfGtrqyuDqzCgJmHAAn",
  "key7": "33ubekK46M7DchiD1JcbeabVuGe1Wzxfv6fo9ArAnthmPycGwRbYwWR6dGn4H3QqoS56ftZV6SaBv5kU2WFA2eyS",
  "key8": "mpnkVLv2N3W52X2KbxohLT16ScrKvjqKxB9K9vLTxXgQtZoJy41kMp7k4FZGNTcL25UobZFbRpHzgEF3Q3AgDR7",
  "key9": "iSgNeMEYzUPYDEmE5Ho7yqUBq55YcvbNVKiNHuPgjKF9R4cjnLWUyqf3NGiquTphYcPCvVbb4YfmsXGAzgjLWEV",
  "key10": "61rLTk7SYyfgm9teXZXxisZJVko5ZQ5NhkDT2n41Ny62HwmYk4uBNGCPsGMR5gBr8zKAX9TZXx1bMKxH9CSNtnmw",
  "key11": "5mpkk2zmdhb8g4xQ2UdR5q1mm12YDZRsgH82k2UNm2fndAaudWSh9gi6CCyc5mhyiK76qTRCebHLbxfKXRzdk5N7",
  "key12": "61DV7rdZ2UpZq5NpFe2VXfhphDyJu6p1wrc1djYso95mYcLewtBWny87FQq5bayitG5nRDMnkcLDShwUdcA2R6Yk",
  "key13": "trm8DXX2s3G791m9zDeqnY1VdeKxauHCedPimt7ofDQPTjem9hJgPXFj32Y1pQf5aGXQ9ddsW7AD5oWbrekcaeG",
  "key14": "k74YRfyn7WYerGCRnbr3Sepyg15aJoNig3oGXCFPxtfqw7zrKJCkoea9RLfApp2DmhtUn4GKAxd834RuR2NnuGo",
  "key15": "4WEP8zLKPebY12bqPW4VGLwkAxH5AFSyMRAQ1vmpGCfLHHQ1Ps45UYo2Bq97GWYpXEQPx2k4TCe9Pwjy2MpCY7co",
  "key16": "3KfeqEV2bfotmSFeNKYBKZYxM2JzGUJfMRMeNdoyywxpYfrU3DnCjdEWxhJX283xo3NcpfPyAUUeyX4YP8GdmXde",
  "key17": "47eE3CWMmn2gqa3S7SeQVCFeQwwe8FFnzprsssDvBc5NXJYvaxsdoYkWd3TBCKeF7n7RYs7SSQvjAUu4nKmKNnkW",
  "key18": "58fwrCnR9vYZCykfiNStrtZW1zbriSxwSMd2kYAD1gUmaePgTWVKqipV2JsaAFEuHrNhg7SKmJMNuN7DbUTpw1o1",
  "key19": "4KoVBtkFANLMbeU3oFKjBMH9B3hGboYK1nkFy69SwNZW4MVtVdw3bYiQryUM4RnSM4vvmXxnMEn1neQKKokWM89k",
  "key20": "eU8NMcRQN8NMpk2nZ2vfamDiAWgymemK1cCf8S7surioz5Bo6tAT1NJbvgwt44pNEwLufn3GusQE4G6chgkodsK",
  "key21": "2AqFLe1Q42Mx7AwcsXtGKhKD9FJxuT2zrCZ8DRndxi1VgKgKAbHpPPYJeN5SKxepqXsxeyreun83LRvzcissZzSN",
  "key22": "3NUzeDKPP1MMeSs1URyj5ACdCrugS6aJLNgxnirnn5hxMEv5vmrJBaBiB6zGVoU1cPa5RFr4aQTP8th5rWB45rnC",
  "key23": "2ZQfMTcoazjAN2VGo9BwiHthoAtzLyEt9uBi72SmxVmv5YffJFjR3ycP5Fbdpwj11xeBnHADbVfCVEDZtwQRcUhY",
  "key24": "4XEKkSQ9qGLCU38cT8Aevb8NTN2g3hCdL7fed89EX1RowRx3FDrAoVpNPgUWVo2vNqiF6LLiaaVNzBtfTcRn8zJ"
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
