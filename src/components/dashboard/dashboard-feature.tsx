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
    "36pkSNUfr6tt3Mjagz6xKgLzF7kEeMDJTqKrDzHWEM9LSAwi7cWygxC8MM4abDUDVX1RLFV6FEdXvsS4kKjpCEzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yWSwCz35KwPxCy3U55RVw8eiveG87qsuBER7HWPjQu3RMed6KFgfjsYwPapfUjivw7cRZNpVw5rzmaWexoVV876",
  "key1": "3pSbin7KfsqhsCDLbzL7wgFhVDZTWXkLhUxgN99yPxRCHsEuRij5sq1hZZR6DZPoh9PjSk5Td4cKbbetp9SJ1X67",
  "key2": "4UkrQLDG2RMJYFL29uYBmGoXThusRJNaxRBaizMy12PVwbPs1zJAYSBZFaFKQ59SfoBE3nQApYshhDRF7p1yfvFt",
  "key3": "3BNeozyN5JZXMHCsxZom1igFPBwtRSjbj78sJBNNGWYQu1Fp4kvtC8SCHy3BPSbue5Lb8coM7ZHS9fKCZTgBgQaT",
  "key4": "buQWXFGivp318Up96Qa3eyHcXvYpPaiXn7zdudvdhE8uKuKPByeQM9z7M28H6XjuH1UMmBiPevdiNTiJoDZNaXv",
  "key5": "K9aN7Nhfd6yXy4K2qMQCy4EknumHWcjsBYwcgeVwrU7BHiUGm2Le9ZTKimxj7Xz8oLNfN7FpWCz65gE324hzja3",
  "key6": "3HbU8VVMSXYW3Jfmjjs6KWsMKiCcbCxMjQZ2aHh9sW7UhuvrBB2ccMk53Ev4B6ZqC9ff8MgPH1hTqew7pkuUo5qC",
  "key7": "3MaQoUHSfV25suAJmAtVvA4e59BmoujBQifHqUDQiXT22hYzo4tJrXef6KVZL8wH6rpZPjNuwMuCUUpKUFaDHVDW",
  "key8": "3GhJ5YKBJ9dgrsXw2MHxGUdtfdBwcbx9dV2D4fZUMTV8MMzEXJCxMBoCZdWonR75svPFwq8FvSnrzGFVYbCTCSYw",
  "key9": "5ZqHrtN9k8aZ2Afh4MSYGwjxxyHeRAg71eS91asoJMdYNGRHDPj5mKCXSCCNpwLFQaWL3gt8btTJvaN19nXmK9EQ",
  "key10": "517h36ovgeqTb9VYpM49N3xzBankBm2sDJZZXkCL7aqGJkkTqmUfSTDxxchn19JZoXtmekKEgzg84Hjbgeo7tVz",
  "key11": "4C3pXEGo8fPX3sggwHRcbazPnGh8hH2Lk6mSpvHqKeCqntBvbNYR5ifiJ48q6jTmr6Lm16doFUBDhqqTReJr1Nqc",
  "key12": "4qboj9AmnJRhs9zFWvGAeSkZodhfSSS4zmayxChBQzYGFqB1LhBvbb3eFULWE2X1mMx7BEvJQRSBmNGuCTkY33ue",
  "key13": "4nCfmN4TJ4iXU38XKKfMUVfCrhRBrR9JPxcPy47MNiHcnuqruvZkPep22FrhwZdZ3pAraHozNiYpRn1VuPNVPzxB",
  "key14": "4sDUnsdNELop31T3hX4iNk4LMVX8hHr5u8Bq5ExDbbb2dXeBetLx9ngTd5g3QK4eiQpfiqZo3hmxt6gHr6iZo6dZ",
  "key15": "4CS1jrMqeK8S5a54xXwc9AXwExKqgvSV4Zk5ShBFexAX3ZJ62owbw5QtSL5K8XKn4P9H1TA8pMPPHmniu2nVuSwd",
  "key16": "3zzjDq9wYEPNqooMYimTWo5GbSMgJC2pzWkqkWWd7oYfqv9iDyhevK22njmTrtYTMay9iFVe3VPaKh9m3Te9UHTS",
  "key17": "35wuHyMDQy3xrS2JYxzcALyHKA3v3mY14DyG8sxELqcko8pNFdFVuw2cyV5rjH7rekPP3tCRBS5etkRqNHETvw3Z",
  "key18": "323kH376yT7bNBJqhZhvauUJ2ragSaT573WcLWwkuCQQzW4edsSWhhQXYMXFZ9smBXRQmkpYXjvfeWocKW6XDsFx",
  "key19": "5oLASVLcMBDrhAGVxKc1GsxwA5ZccoWyy9usgzKKMv4DZtvVGtz7mKA2h6MTt6kNfH2AES7TZzAhyp9PP5NWD78Q",
  "key20": "5myVrNtJCFtghjzQRgQqA5tZeAQMp1ujvmCHkUK2sj1d1Ns7pTVcWUn1SPGr1GUWAzkjx7x5QC5yN7CWENTAQhhZ",
  "key21": "3pntvkPtVNaXvgfq5pFY6ffvWz71xA68EN5hH8faADu8F3Zm2nNxeBjLwYHy6EDjqiqmHP3KJsKat9oNj7pGBVg1",
  "key22": "35indYoLicaBpzU8ysy1jGMPu2mpmjrQhw4bbdPbxwd9MkwnVmikCTodXkzkeTcSDn7Sbt4pcddQ2DHq6ajgrGXz",
  "key23": "46ccC6DJcsHRXuBXhhcLEomBhvcSz6f9nZjNG7quuHkFkLJUPESEjcnHqyaNfAqCXYgQFZzUUAFCXwmGVVKDp3ZM",
  "key24": "26a3XHMDhhfX1SDv9YTMYKV7NmRfsbXsG6pJJpidcZVw8xTCFtSCSg4vPieU1dp4Z1KEMPZX3Y77exHJ5awdBPxE",
  "key25": "3HusihMQ8Z2XA4VE3BDqN4sEvUk3kDeBipCSewDMViAfJ9EimLFznLZKbcRM8NPzoTfpKxeQ36YePWH3NpLnQDXp",
  "key26": "5tGKMHo71ue5ao4Rs96He1kNZ1sVdtKBZGpSsc1Do6N6g4Upp6Qes2bwez4qRK4qdQToD7BfJG2YUaM2f849ZWsy",
  "key27": "5v4qzx7n9KSiFraSiGVsnHVfNAP382TvunVUS7UCP6L54wVAycm7avVcdcXC4GLFPcRTnzsCH5tH7986ZYxWHax8",
  "key28": "o6SYvRtsqtjx2dcNhsd41fvexNHufqCBvfBLSQyit5eh5rj7XwFbqao6ghM91DuuvGUpZqbUptveZQ2QZWrsLvT",
  "key29": "4NUuJA7bjRP25A8aHxrTL6X9vbFB4N6bUquEqop6hqEQFsZpmb3bqErYxrk4jyXegzFsDCECRfoxVp9nEmLRkKXi",
  "key30": "494nPMgeZHqwUBcTKnnWwyRjNEgSXuCNHc2mupZShxJJ56csyh5dFLaXG4oTV4kwKbvsDqsqZenBShVXJfaSSKU6",
  "key31": "33gNuY1jkNakv1D65TbxxUcqDbnGJ33guHJN7zNecZ1feVWSKfRp9LwyW7eCkEnkfrdBW3m9eAjvbUsPp6XDnvpw",
  "key32": "3odhAeRkeHYwMWq7yH5SgZ6VMW22biuMRWbhhmB25B8GxtJ9WeEMdo4qC1jQh1BuJw6wRDoXaxY83MpDK1Quk2zA",
  "key33": "5bqZKEMn8PMkGxTGo2sZPvP8ty9xgi2L2438nitwqFGWhwydD85AnTnhik2U8Gft1aUeAgepRqMKaNX2jgQGtpFQ",
  "key34": "2oUzfnmo5NHGQnYwqWuFbvsxgytk88VLcoNZVHNgewHzUtQzR4hApAi5Lt3cp5cmudyfLC62cCjCrxo1Mg4fvTSm",
  "key35": "2qP9EvPZHprYM1xuEUKuBoq9DNT81peesDUaUVT3r8ZNer2MZuRZ1mfbNyqNW6oGsqa4R5Lu8YKdgJ2cJkGSWCYF"
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
