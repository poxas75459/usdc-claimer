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
    "626i7VwAC5hpNZ2Qi24567nodQ1yrvZuTSQmSLJ6zoZzSDGsuenuKMLJqhxBWAmGygEAy65BrAbY2z1YHkSQL64e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HdZmBJBKB6NASU9b3F2TX4ke8fbCtTGwwPCqAvuKyU1ZLdPWWf4jkVYY9kFZgmPvwYZNabCZ4tGeGccqwTCAsr",
  "key1": "5Bueyxj2XWnos9SMhcshY2sJS7FFXo7RPDXBj9NV22A7wTayPkh4xWs8o4NcBjMtd4dohoQV3a8i7EmEDfgS9NRW",
  "key2": "5s5UX1MCaiAHFYD3SLLytbNf1iQDAWCnVH6hhY77n3j81WRuAZmnvdaoLLvZAwM4QPZk6biQVanz6gtUTZJs9trG",
  "key3": "5NsWBDgm13jT41EpgLJ75LnFJoub6TyfarpLb7SxLLXURw7vuNiaTjq1fQkDHbhBKXjhj1Yqx1LnkFiTcQiTH8JG",
  "key4": "2ChHgqT8PwMnjfuTrBE8a1g5GCV84ok5XRBJ8jQRG6gsC2anadKEd5LA8k7w6NqnFKZG9tW9187RVJiudLBTBuYp",
  "key5": "5aK72spTuhWEFzCS3PXaTCQNomF7ivD9EAFU3PPBAJzM2QrWvXbEQEtPfKGhW3wEx3hJuzSBNy45ewXsDgheB9F7",
  "key6": "4MHAkcAsqnumpCx5MzKo7UTNpCyfA26QF93uvXZhLvoPUXih1aq1FZuycGi9PLWkS5gpVSt45t217m1p35iCCniJ",
  "key7": "aA3mwn1eegDo9msGssjZbd7vajz32XaAE8LaFRrZC57oVjU9tfipa3iMq8c9mqESqRA9kYrPUX1AgiZJ3bLPV7t",
  "key8": "43PWEY6vtUVGnNYSYAvrygDQuKCeCnFWNXoiii7Z8WQ6wG1khx4t7Vpyxvdoz2ytGqxpTqibxaxX2S1G66rGThB",
  "key9": "2MFJvBXBmT1ni2DtHWdS79UME5rQ1wzGpbmuML2xRNwdQd9LXmY8hWzqV4nW47ZBze74iBE3fkpFxf79KaQ4pnDJ",
  "key10": "f1PCBtumPpRDMA3nbu7kX3swuwAmpqSkokiDc61WBs9k1jyEH8DTvz6NMv66wTKmaLFZCWAVcX9QM7zFcHQnPKE",
  "key11": "4gUdnkTjzn97uH5vghqyJqhKbp5mkcKCJFM4VH5A98eE6nKgr4V4fDmZgG3esd3VuPPcJFFexA3wd28buWtGhKVw",
  "key12": "3LKfkjHyWumwiscJn1HuuRHbPDAMawgxTeWhHyBkd3bBN3Ai9iPNbopXQTHGqcPuKZtXsTwWn8BUPKs7fNiXAjuq",
  "key13": "3aSn2Jpa1ePmSB3K1oi9viy7XXw2ZeZw1cpYNAotaU4pbJaPA4kF1CcbZCaoHCYtNc7b5YUtiYPFQsjtjr8SXN5i",
  "key14": "41RqkQu9XGnBgzvan7Yt4aZcBPFAjXiwqwUytpeKdPGnGf9zS4tW7s5MtaSpewfjEV67MJn6DZcUmK7zg9yL9H21",
  "key15": "4rdmxgyx8qXz16bZkz3S9FtihBjt3VhKF8wZ4Ls2sMFx75N5TFDWsVpuPJ2KJqMDPwvzNfpMfwKLheftmQRyoBA4",
  "key16": "3dNv8f6yR4P5TfojPRXhAFX5Uo1hiFNUb4hBSSr47KmaYi74AoG7ENspxdR1YsWUSYCfy5tx76nPuhyKKMCCXsQp",
  "key17": "3Rgs2kvsd9orWzBhTMDCYGpkXMtc81cTFtYnN6TXrp7kBwDxPWRG2Z1Z8MzGa9uTPct82Zbr659HuUdvxNytR4mG",
  "key18": "637stwtZxGapk2hpVjKCcRxvvfNJVL1FCYc2KwEQ8kmZow7xdpd5BqNgofYwf5k9QnJ7JAgFKGuwnV7ZVrmKJ7ch",
  "key19": "4XKmUgEwYkfZnJPoRsWMH3cvojymkPkjZ5aguBJnDq7mk8aqEwGp3xvTfM6GS2qxtbe9fbqLVGQSnYSj8i1W6iWm",
  "key20": "3WEtxEdZsTt7JLmQZtdpydTPvymhzhnWmwyeBoQKrKTT5SEUW8exNYumpwcBDKAybsrU8b3tvhynDc8A7rgoWnYB",
  "key21": "3TnZFLzmsHLtfjdDULBqnZskByZgxbN1xm6DbQbSCoAyC3qBkRCtpLwNKmGkYTWraWyFEjX4YfuazXGsP1rToprz",
  "key22": "5K8mXP7mtXPPjYQ6BMioRo1JKNRDG6dxSyqGc8oGDzXke9CS9QWKg2igHfizfDAqYhHpftHXbnwynhoAKrEz5KB7",
  "key23": "3xd8weKTufxLQLHcdg3Rxmkiu1KxUK88XXW53aUwD8qf5Ea7xtFShooWwVmRxrUNbrqBmppPLbF4jMqcUPVcwDWy",
  "key24": "4ge5v8WpQA12rwKSFEuHWRF7AUc1xw7C1rP1krvvW7XFfwzJN1afKqzM258oZymRaZB5uL2WuXkubFinHsZcffrT",
  "key25": "tNuUPaihpCF6trRvzNtDGnWXSPJGrjwQs5UQ1dZCdBbA8qXJeV8LJo5QVMoW4QnrgZrua9kLo5pC3Dy4JrhQ3gJ",
  "key26": "5ZvgoqD6Bz7ARhtGjWcm8AhmrYvJH8HVhJc9cSbVgxSfmCosXFgXDMnfkGJTWoojGpBXiAUzHJ36pbPMFrpkCJpy",
  "key27": "4wd1eSXF5ChbDFDMYBwhMpR5hDaPtn2zNcNDCyPxrknq7HzYXxkpMv97ZRT1cWhvembDUuQDQRyCMFbDRcqKGbdz",
  "key28": "239vsyaYgZnu69G91TfHe5RGmzwVBMmhbvdsSryqGmWAz3QRHfBrcLUescBmwFb6ZVr1BGHQg6JTM5imMHfhusZk",
  "key29": "5uXgyUnHtj9oLx9CUt8eHRYW6fbHaKZzQAu6qQMxsquzAmib1JNgWxMn1ZGjtLREKwUrYmRbCKR5mriAu6yoYvVS",
  "key30": "4Z3aJ4Pyda1BvNanqZBhZfQ4C5P5YQMERfA8dmjxEErCp4T857QNMKwQCoyrYkfRw47moFMdDyZxkY8JA2MW87sj",
  "key31": "4XU5u3QErebXSMc4JVJCwr5GVWx5xgs9husDX5xYNe9ndT7aJvjAcSaSmgHKTjurPhBv44sR5qHe65RuffDwKtdq"
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
