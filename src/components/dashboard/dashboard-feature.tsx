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
    "4ZaMHDDdvD4EvnxL4gg2DF3feZb3Te8QuxEyKy1h4W97aEWxcNjLjgw4DSXjtjLpH6qmr2UkZ9nn3sSfiJ7YKu17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SoSewMMpFegkpGreL7TgddHfXQ8MGeMxtpjB39bAhwvcHRZLyTCddyJQb4BkB1zfFQkWmhtjvmRsNEdcaLwi9is",
  "key1": "32TkPMgbKyRjra46vpLd5GkVx4ab5y8id4Jb9LVxRJMTEKHvXmC3FtGnQPwnWetTswQehBz9GLwSMxLn6Gv1mEsK",
  "key2": "2kmeX8iVP1epPX4rJFd2ktDs2gW27a6n9KF9jd4QnCsrTsN1JC9oft4QCkTwv4d4WJV1XdkxUgN5c9vgpxzuRGr6",
  "key3": "5HEDmNLxWPZ4N1wq76BAgxJqQd4GxWNogqKL7gqQcYMWRYcjZAL9PCbwySHrDAUTwShzTBsMHQSZKTAZ56MkZcWp",
  "key4": "4DBzqnhyP9ergt7qQKXxTZMX8SF975gdjGxDwuNvebvmG7SNg9QocMATeXRiQQrHdp65Lc8qs5Vt5BkZBgjFVCUG",
  "key5": "4vANTjUqJu6YQcUsDgSDWNKcojB1tHoLkBrt17LpPB1MGuUPWbTRfMskMNTzQ54wWSi59DmB9CJPiTQGcxG7xuuZ",
  "key6": "gonKfSnhg8fTyanTXdzpgqpJVUuPbgonceHR8K6ki85o7AJci9SJTxNWcuiEnhbu5K2MzDC58iudWVnSgwr1r8x",
  "key7": "5jahNCbdDJ8trQAdj8BLGZCNq4aspnaekDRUS8EpH1VDtZ7XYhbgmgVDXbZ1pUqgF4G7UdGZF2DBRyQQBmZ8Kw5c",
  "key8": "2eCh1ABHHXJo9cvrYuD9tbLKk8NPhxrurjvyAXnXPrRyQ9d6ZGuWLXG5UavyfeX83qpY9RKdY3TjfXZ2HDWUEeDJ",
  "key9": "4DhPBEzxtmqJcvCd76ycBPmDnX8f78ECFDYPWnUfD8bzK5e3s8gcUdkQ1SLHfztij9PxrZM8ekWxASg2ZZeTvMEt",
  "key10": "5UV5Z3PucmB1j67ikquT5bKhXFNcvC6szVGCh1ywCPonTqfoXpnpG3gXFaWnxuyqcoVoALwdks5DjLr6ug1TpGvs",
  "key11": "4F1bAZcuaKWxD64uQ2VYtuVTKQwFhS2NjDagNZa19b9u6423pf2enukATvtfiBrhaMZeQKmasixE14zkYAxGNGj6",
  "key12": "4a8YLPai5TDq1ooSsLeumU77H2DvufHLbSjmPVA1TVQQmY8aAfEv2vGXS7dPCFoWKU6Sjhbt7i9UDhdPVjUZWag6",
  "key13": "3AnMFH2W426JCV76g1dppuxHqSSfsiqQMG7qhkkdqzpJKGxBDz6qzTKQruMp189boVFPSwLT3XX1z7DVCdsAks96",
  "key14": "3dhaTRf5GsUXZdBdYWSKP3yXz2g4ed8LVas5XPTyyA4e877t33K2yRKRQoPtoBmVtao26YK59CyquEEyjoUCzDgG",
  "key15": "5CUxbKxK34bTqLzmggX3UjZHYcoDax24poLvBpHL21EsKDbe7yqADsySTok7tVBBfG8W3dYxQyzLMZt2d6epM8H4",
  "key16": "251oZgSHe5xdYiS3iJ6wf3Cf7yWmDgTrFj2SPMiYmUp2WfTo9GHqZyScWNADhwffCLFXk6g7p2em8LRUzfaM2967",
  "key17": "2dAKfWP5FjCRVntQfrsCZKNTepSqDQLf3oFrU1WDSXLwTZ5UPDZGD1PxgNWKV9jGudXrsfoDDpn8yuZCVGz5Kqy9",
  "key18": "5oHGRfox3XJX5bjv1y3Z2U63qwhAVYCtbiMaBRshASfNTkKfHjHrhAUAVw2uhxXJo74E8CxpywiycRt7d5wk3QXN",
  "key19": "3RiLydr2jHchchRF3XkE7mXF5U1Cw84xiQMWRi3HGpTHJznjSAk7opuURA2erDbbwxCnE1imhu5QU4CHsasaQAvo",
  "key20": "4Er5QpQPHrpUkCWUc5vsxN3XPjKJcRR7eJuk2d4UXFgLdeTTEK4U2h3FcxD9DhS4BdBTM29cLqxphRuauFzW89yf",
  "key21": "4euRACeH9t2SeAqCNUsRGM6FpwuQz22LqwLu8F9YdWnQ28goKmoU1NvftW3CBDjjYFdnD5qo3BQZJJ9YCZvRHEzH",
  "key22": "5fYL3ovVG8UsCHkJFQUqNaUF9xzcvMMCxhNbXBTRiUnM3x8Rf7HXRJhLzAieh7qoUyVMSrzYC7ZZad1XSN7UCLAv",
  "key23": "5tHwESMCQNEk9r6vViBr7CVKM6wohYToedyEdXyRPZHzcL2drywD5Stg2DZX5knoAi1Am2V6wXfWVsEaYvb2ZUUH",
  "key24": "5uRKJeVR4i2tGScYbkkN8a5J5WFHUyDPGRMrie29BP96CJXHi42mE3TcHoDsU6UtXTEJ4Mw58Y4EGGr2xAFBe84u",
  "key25": "5gFWmKg7PNdZeimmA3PXMfPiNkwrqiB7a8CRUzuNDBvYFadVuSwAabPC4ojvXdEmyL4wvJGkDsfh13yGLFNUMrmj",
  "key26": "3fmcRWz5piafTrs9HVCj69A5uQ8XEBffwLpGQLaz7Ss1iyx1uk7rQ3jHc2G6kZMv2xvgfkXp2yNagm5qSi8uKzjr",
  "key27": "3U6BTwBMpDrmgTuUSvhSCCVbvAYcbcc4mK5ZcoJXVD81YjaKsid5dUJs9nUwhFwngH8qCx6Cn1nxFWmyZTYdzJT7",
  "key28": "kFh7wuGsZtnjPpNHdvYGhDCpL6SJpcd1E5pSnhqJVSnerXKAL5MEpTsFgGNmAQmPEpdE4DBbo7RzC9zsSGB22TV",
  "key29": "4B4YkT4PuFMBLpQfnNkF8pEg8Zn2h4oqThEMk2g9ZiRoJigkndGEnFYzMWikwe4Hg8nTG51FbFZHr37DHonzXAAz",
  "key30": "3itvu4wyTmvLcH5t4JPd3xajH8q8ncQe4hLZjzrDAipZykyB7N5FfzizN4ddwNeVw6ikUWowSkdUDPCm3Y4wibDb",
  "key31": "3PV3TENV66KmdqFCypxPpMckdRJA8eJ3A9D8QFsQ6Uj7NJQj9VpfnQMLZfE4gAZ8noczWCwc77uYUZenQ2miai6b",
  "key32": "3FxD1cEFxcCw6VxNS5BzJxa7SngLUETn3LkN3vJeP6gGoyqB7TQrnqx7GGWNg9JEPNpiTUCiLS24YHuykrvyb8gz",
  "key33": "QPYyvbpf3vDT2H9d5fXv5FBiAVift48u3S7YmC7MEH6wo5NnFtDAyXf1KeAM2pnmsPs4kTTZN3febAEoCiqPNXA"
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
