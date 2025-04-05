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
    "49TGoGvhcFPgqyPLkXDnsZ6vuVszPZWCRgZMCw7SjKsHs26DcQCwUMkPmsD3D5hcX9yPodT4uh5NszhYivTRYDKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpbb347g2ToaL8af6CRbCgukRtRj2wwK4uGERi6msyNqEqDPGXtbPv8WFhCugc1skKqTV9NjgN8HeTcGLNFJu5t",
  "key1": "4ajGv4uye4mub5GAdummMtYYQnV4QXLXGDTe7EFrKQnhu6LxawVqFs3oqREuWhLeKqyzgDn745PzyGzNV8CPoDQP",
  "key2": "4Z6FQ7qkotAA4U841X9Senp9Dsdn9BeyuwXSzvW71s6mJ9AWLzY4fADBhvSbL1F6pYbbo9u1zp3T8dx8Mr8vzhPR",
  "key3": "3vK21RH5nYmp4qdsDWrNNqZwnQAkSBU79kF5cVFPkxQdeVP9a6DjKrs7QTbMRYcQSuXKWUpTe7PZ5UxzYh696ooo",
  "key4": "3Kj7mxRhPCBhB4hdQ9DKb5P8iWjqy5zE8o7Zuu8YjnBotRkmjVnJecVMQYDFWWZP86XbPLkVuDQXbAHfWuAJXLTY",
  "key5": "Ztk4KZqfnu6cQ39bwrnNVZwXZv9a6sinUuKgH5WrNeGceFdUtukdpYZdwYppcqxSzC1d7QdvybU1gZVfjGj5Bwi",
  "key6": "52GZBDadjmPmViNjcda8xoyvd3fVMeALHxRQEGvenedwdyq37Lkqhd6JkGjeuW2oAtormq3cbrpdN4fyd2pCwFet",
  "key7": "5tRsZYbwvgzBdJq4md1kqdJC1xsTrvtS9dr4SaHUmASRjePNe9t9HfRhnMsvvU9jxmDBbJ9tXgXXuvxGitReCP9J",
  "key8": "2FjFNy8fgrS28An58W5pKE1R1EQyj4x9omunJUvCeAn3KR2aphkQNepRUSCnYKV2K1McRyFXb69vb4E2s1zNHhqa",
  "key9": "KxxFbEGoLATveyLA639LNdB4mbcv65Q48PxnKPBhmJyEfW1iAq6as2YuAtCr3cHn9Qo6knPxtoDNK529koMNUqW",
  "key10": "cDVxvYh5GZXSXSf32QuUF58TzqgpcWcQpgiqwUSenrYqAN1fiWZXzhxKG6ecogyYJrKQ1WmdnEa2QzcbE3UTH9H",
  "key11": "KU7Py1ukpo9TbbYvjn4tvirLgaeYqqMAYSL8eH93VwAkkFtus6tHfemaRMTwyDS2XfHsbaBivEntJ7TNftvDScU",
  "key12": "3fjW2A6aDJWr3FvbJ367jo8peKHJJLUPk8pvxJyYj7E2uqWzSpqpCs2zbkGAwmk2T6ovBsopVk8CKTaP24z4FTF2",
  "key13": "2kwAW9UBb9agirDVrJhdsYABM9a6w6aPvBK68CCFPr9qx1wMouFhtetLa8ckKb5sr1oEgqrG2KvQXTDHupWmL8SV",
  "key14": "5DzxCwF8xukKq6ZBJEBCy6Adfc8uBdZDC6kNqTZmXXAF474PJcXq8Rg2Nob64VVT7xJygsnjf24JfzPAcVcU2W1H",
  "key15": "5cQnfJhqyi85uE1UZtQftTyvFYk17reUoiTxYHLZBMAPRkQ8KaoJo2fxgKSYSfPaXUJVJvf4rRcpbg4Nc38vgwJN",
  "key16": "2AY6sH4TRU55WR2JsuGWaKQknsuELcZm8LYMLgDurg5sZtbmMahTi8EVGhEmUwVrBsXWqTzcHAwJtNxvbZ16zi55",
  "key17": "3rgHMjyMfjSSjV3EZKfjBsM9J84uFANmJAAhGmAQBju2qCFCceEWYQt9VTZUitJTzmVCq2YSE447Ztwbfs5RMHfo",
  "key18": "ksH6UR9mbGpivibXQYghRC3SmBpsMFuqjXPoZAUrQgVmNnJkfDe9H3orC1zDjQG2nTXha9Rbqy83EWNhFZzgUS9",
  "key19": "2jPimQEX5EopgmmqfFmND9KPWFVutoi6aNyNAH4rsS45U2ENQz6nE2XTTeq3Nx6jGC999dh27EA6AkYeqyKPVzd5",
  "key20": "ffvidfAUgKh4kuWdbuZEooKVGFGqd2E4C914aBfx6WhRJw2vqgMtCPqqjy7bBGAQ39Eg2LBbHDfS9TKqkW1ok2S",
  "key21": "2otq99JsWW494FvqYPwdu5kxJJAtkCgJZT8MxFySbt3F5M9eXSHkMyX4tDCSkXPTw9cRfEL7w6wyFUDCSuerjpLW",
  "key22": "5nKViRSKomXL5HhjeHDNFAxLXyYmhVwTXvTYtVC37FDAoKVe8ZMmxuTcuYRrTJ5mps3hzibmYTbMmaUr3QzQNfhv",
  "key23": "5VHYk8xWeRGJqvMbzfXYq9mg9uBkGafWqfJB25sAZzxcViKYdjZHdre4jMnepw2S8EVv1dam44MLjJnt2eobg6wy",
  "key24": "2JvPAXhaoRPHr91gcp1zQjVfPcPwbYHGV4TV1Fs3gur42niXG7DgJA3DzvnYHqmU51ZvAgvUePpA89AmgGBgTHfU",
  "key25": "3Zyj1C4kYi9WfAaVuD9qdB74AFWtDuPGoWn5kZw1PjmFrsNw6HuLjiTd4uTzmbJzbzFuv944HqcAoKSU1Wm4Wz1b",
  "key26": "H7CAUPpJseA7mZV9Y9nUo3usdYKvbzPhVX6VibMp13pV6VgrZiHiEPej3JXBbT7SJhq2HLh73ki1QR5zXdzgbjr",
  "key27": "g5889qqRMMo8j4MRKB5TkqkbZQyxU5AyvTtRtfFUn7YyEQ5thdd43qFyj2g6uDzq6gjQGp8qdnzpLyzgtRHF9aB",
  "key28": "3NWQLKQNXKE8jMsbg4FYoCWP9wc3xYyjFwNQEuy7YuWfYyEBAh4Vkit7vr3jVER2KS9KrLpTxY723m2X1j6BpAiV",
  "key29": "64uUzmFRC1hWmH6nfL4uE5EuosJTZTBkRmZFthjES2VsaZ4BPTcPwjgq3ndcvGHbMTE3d5yZpPfLPLgJ2HjxkoKb",
  "key30": "5533Q1SdWMnK8DV3hNbpnuyHRxoXADZDQ6sVnekeAWdaLQWixm6uQsekvX8TCUsdVbsddqgFzc4Seg9dajKkHz33",
  "key31": "2WTsTvibKhMkPbbuhnTqv1QhLcsaMUSydN9kQU9qEsK6fPEB9qcDXQ1zPMogRHAkoFLRc8n5Ax7SXfEzNdeuwiyG",
  "key32": "2WYY9DGNGeUfhqRZCg9hdf4BQcUrvRxCAxP1qLPXFEuZ8Bx17iQJBrzgiJbeWw1GTcUh5K8AEFHuUPh1B2r61nFr",
  "key33": "5tKpy49471QdwNc27yTrSfwjuP9DLRpH1m31DxbMGcWJVDEfvX2W32y3AFcBwfmKx96yeEZEjeaQpekWVLtAhpgA",
  "key34": "5ZhWwY5D97qNbC9mczM9vBfQ1NnQdYGhcKjwtpbcCLYMmzPMQh9uBFrZ8TVcimAU6xd8QHGQa1LDRVTyUTqAMJDT"
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
