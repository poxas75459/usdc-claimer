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
    "4NRJCSsbJFvcxYvekxfA7zFbcRKPLYWDNmvMB5sVKFF1zftdHCCXs1HxwarjaXVf1wmysncn8o2YoQfsRqRLCKnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45bG9nk6tjubuqbwnhvBRpQyWdi66CjrT6eZX1wGDoHoUdzBoPbrgh3CNN98J2NP5uMWErt97hkqms9g3CWk6UUf",
  "key1": "3bgryJ7EkUquJvVxqupTdKKFxuJ735pD6qFKJhvnLzaeEqK1iVKhNpfvym4jEz3hfijjq2EyXxoRrGmQ94iDY89x",
  "key2": "4aJC5kEdFuwi6FBCKrwt1NiHCNXaNh5FaxaBhSfp3dhQ1wujPPZLFHZ4XivBKf9Hxa8wLgVQ9xQaTcj73miwFohM",
  "key3": "2ymiy39kyEAsKhMW2UVVXioy2GLzuQnhJWQgcB76tQ2D6ZU4fCszBqNTRneF4coDANpvp7BTtxMwqsvekZQS7J2o",
  "key4": "3tc5HfKr5hMk2VWtK8JdKk2nyETiSyzuD1SG5eBNBDFgcPhnTT9JNcfLWZgLD5Y2oaW2jueRwi5MizLXFzE5EtUJ",
  "key5": "3JUqftc8992rBq5QHECQFU8f6YjP7xGiPR835czeKRuKnbnBQXFEdEr3eP9r93tyLB8jyuDkzcQZTR7G51wyZkQ8",
  "key6": "3G5Epy1C3TRGkrEBnoJxGnbaG56WjNiTv34zE3wNxURpLSEFtKuzN1ud1BphrL43GZm7jqkyy8NU4peWVf2jnoW3",
  "key7": "4eAcLEgXW3i7QaFE4QYQPATXtkZr7LZfG9SSp9LLG5CkTgA18pcHk4aTkh3wWqGL4Q5GumGNWFDFGnUEoEggdVH6",
  "key8": "48KUWaCyLcd75Wz5o4kdpUrGW5UL23MqiDAPvcQ7QYcHtELuc8GMYrVr8TNZoWaiF3t176BisSa5BPL1tMAa5zzs",
  "key9": "2xwbXKarp5Cr9mmdY9M5Povk1Jp2ProZQnJbtZMMZyhkRwFg5Ztz9anf9q2j1uMAxZ7AGwzy7gzbogQvCwtqJQdV",
  "key10": "4oTzZVDTyQ6TUNAnU8u8ujoJoHTAmejuXfDopn4RomfJJvcRPo9zkCHp4evKi4S5KgMPfpowMYHY5esfjg17NhXa",
  "key11": "34V75L68Q3GBY5uJGFDu3xToJKds17qH6p1SXSHjLJYbTavwP6aiiEvSAdcBokDREeqmVaqNfu5GRWD1EPu5fQyi",
  "key12": "45YY9v4u5Mq9mFcQV5jtXL2yYxfje3u4NXyPhPDSjNwYFcT8dtcMu6tgDCdPkA4sqfMpt17zcdswe1Pc19oPZYbT",
  "key13": "3oRVMpqU9e7NUboeutateRSnB465UdEoPzvy95Mfxk16Cd1k2SqrZZXwi1HY4fdH7E7tdjM3ENRN2rUP3svXNxMK",
  "key14": "5jbk8GyrRkM7m7fSNACYmRPXEUX97o7Pt79BPybrhQL6nTCoDuY18wPyepbrP6GCGScbqUbTeFjYfJiRVjX5T8TF",
  "key15": "4jkEK5n2yLPZ4YoJ4mYMRnrdtJWMsjHHTo8nQ5TVLbctsFpCUi9tXTSRSwMaL35jvAoFwWgDVXJJVXMwgCR2ofQZ",
  "key16": "3eLVCdsvf18Vp7mV6ukY9nMMcjdyRRKNmkvK2Go184Xr9kfdR3D1zo4PC8JxPnKq7Pt8SdoFAcoSszdr3AEdkkKi",
  "key17": "5kef4mSydMd9RC4UfBsYqXfw2tqTNrAzVhBHHFQtwBW88c8skD3qxK5jdnBWj86t8gtubK6ar681dpdvrqqP4zB",
  "key18": "33UWwmg8CwfPYC2h39fqYYH2RnztkYFnb3hCXjMHfNomUt1JSikqvHWvnj6F3yi144pKMn3zGaMHhQ15VU1qTDca",
  "key19": "5FLmLxMvpsd8RH2LQaRqpNo2HaZcLt7fUg3KytDa6sDXrVTPUeuLDVvipEnWHCr1rKpyc62nZDxmh7yAS56uyX9X",
  "key20": "QgAprjpbuxEEDdFGoxYMi8VsDJhzCTMih1PsFXkQZdbxG6tPx8jrUC53ZHod1ddJPoHkebu48nMvPw921NfvG6b",
  "key21": "2FXJrDf4n9yAYhPZB2jMS9HvhHUjP7KocvdNQh2gkVUtAiwcde9Qn8hz1Gbim3P8VYG7Hc75LcRsfbBSvs4JyVE2",
  "key22": "4AgPDbpRGuLa63sTSyyD89VbxBgT8v5sLCvJ7c24AARcPT5QZjHtj9JGyaXtNbKzGpfhWBZbj1pKCUawxHjNysS9",
  "key23": "5yYQmytfPAZ4Uokf26pa1evuMg96doafxiqxHfCetuKwHTd4yTu79GxpfrTi4mS5DHPDWin3ewJuiEr3ZHxVqAxm",
  "key24": "58fEDYLhaSEEThBectcAHbrfwrW9t8Pq6tVDZhcks9fBSE3okAqHdYdxLrcFgTZLzDJnx1pUojc4oh1225YUcQ2S",
  "key25": "3mXFwDyd3dr5z5jA9HidyNZqnSGk7231EEd8bigcKBFZ7fhM5nGyDqC2tuZn5qR3BGJqRNMwrpN1YcagkqJ25mR6",
  "key26": "3omvGNya8YQNged8bXXbMAdezw7NUBhiaHWN4QVRBpasToQMR9554du3oRibyqxWsa4WD2rK9dtChv5zZtzoZtPT",
  "key27": "65qNbhtWzuB2w4wobAYSJ25gf6AoLunpvqB7DsvnyTEdXBv3dqzcFJALQqQhUPbNk2HKaRbM94YUq7LAQU2Tn9av",
  "key28": "3nsViXgWkyHZAqK1ULe2CCvmtFb5sdDcH789aadrTPTcDFzi88xC4U6eEisMg4rA8GKu1Vs8nohFLSuSJFjNZu59",
  "key29": "655UQQgJJV7xKiQ1BqyHGmPGvnFUo8pj75cnvpACog3kDhYNztQx5Xoj1QKNRxF4kHbR8LfNZuAxhaWBRfgdrVuJ",
  "key30": "496zvzg2joi69FSP9pCQTtr4ENPxCX8krmBZ2Nd9yaGwHfTdtsKavi7eQPSsL6VQK81ZGLYUsHToTmE2R7QaCPLE",
  "key31": "4r9TTdKPfNQ4AZT5crgszLdqe6n1HnvZV72kkBkgSefJBQMhDXA8gmvYKGKoCVMTNVdUP3gLfqSBcTmJNmHoSzUq",
  "key32": "5uPCxFMq8kwX9YCCU6ECMD8LLNJMD86yEN83ce4MLc61v32Voi6rvzLUUT2UVnxnfg7PTPkDn67sCa1JhaYYERaC",
  "key33": "56YmPBR6AUoqtn7sk6rkozBKiWUk2RTUkhzYd6VpkNq6nwMUShpfiDnHbXkJmAcFmi8qRDteeMbZwgRrnoLhiSJR"
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
