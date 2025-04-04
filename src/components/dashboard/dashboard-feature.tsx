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
    "2tyN7xcUHsyxhDetAhxctvtfLWBHCgb7j9Eo2Pryfwwk2xP4RqmtSgxb6TmSqPrW2qUms7q2P7FC64kt8LtvTwgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ekm1YaevKgRkAFCJz7BydxSDJGLA43eQ7uqz53n18gphF6UuhrSYfUN79dFhFKpBM8qF2fAySau1j1SQ8K3fNfo",
  "key1": "3jG22C85UZuTb4rY7uu2gUFhYSpHki5AjkKZ4KmYNAXy3zcdvQVCR1B1hAfpVKZ4Nm3HYRtT5kSGD2MGKLwf2Rzr",
  "key2": "2z7FmX74Nx2tVQJpUdty7YmdQr56UwsKNTgyV6VEQmVB2x9XvsxgpCGio89rBv5pBf6fHSmeWgNYPXsV4GQEtTzw",
  "key3": "4s5LtunEemPBb8vqNDSkPC2VNi7DJvYcvEfg19eRtQKAt16YZzum7kMT6ta2gmKW2BxYAARQx72bgPmkLjEujqnY",
  "key4": "5KTCCiFJjm8gRPHy7aN3ALzzJQ45ujHd1jqfH8xZ35QmaCiibRRC4BdXq28fr4rnheKgVSrv1uvgKBiesERsPLjw",
  "key5": "53FLTdrQLHXjsiPKNAPnReiqKFEmSi9kDpMCWBV1CvjjWXqVLhd7NDF5jPsNg7xbxtV9aw6iZ8WTfcsKoKCCTYFM",
  "key6": "5y2smtrjmn24qRCVeJnfVr82aUn6KQc3yCXU14mVrSMLMRzUGkXmoYMfBNFiiF64ZWzmAwwX5KuRdqobLme7SRB2",
  "key7": "5fM2NjRuw6KNrA7UnrGVQZFVLvKJbxZWqz25MxzDgkZmiEcY5gcmgwvGD26bBwNvZqeEdjymjx3vpYroZLuegVHu",
  "key8": "3gvbYDurFzjx8ehXCGEYTKqL4GjmGXiNwXDj1ycYKyZWAkr7WTa2FT9ov25GacaXswB8YFQYdk4ivizRpvevRDvy",
  "key9": "36a9hEXNjYQLFo76kgjeM4eqSMnfZjhZi3jA9r6dykLyG1V7jvb5BaaGpMpk1yaLFJBS5CTkWwGHj8S7vTucnKAi",
  "key10": "5k3iuETE7GpHRRERpfGasYSN4mWEkbpW8tudHg8y26fLBq46jzxE7BB4Ywn6KWej7KNbJSzvFR6mtdbQppZxEL9n",
  "key11": "2QW2yfRmtvk4UHH6FybyL6tq8h8Bf8NqTDCPYSiQK6PDNpuPQtDmzt7J12qL8MsBMH1Hxow7LFHaTCE1imgPJZcU",
  "key12": "j63Z8GMKwkhyymtWtr5Dx7Fs5HPhtehJa5jDDiosPYtJkV2CkDdX2kbtCt4N1QdZU7Bpr5nJCjVZBXSvWUFpZ2X",
  "key13": "3pGGZedh7RFaEtbvNe1ZZ8TnjGRgX8wEhVoGwFjMkyvY4En8rPRzC2r2JEDSqcvPtcYFuTTjVRBmZEJoxV6fg2jL",
  "key14": "5CHihNiv7GV4MxghLV2Ca6TPonq7D9WG1zw9xmqoYTXnS3Zndxk4DRvmLe4QUDgnQKiAsdcGJnrhDKpPZU9EuNY1",
  "key15": "WAJ9sYaaWZKrmBSoiTQ15J5Wnj8656qK4Avt1JXStiJk8o2w7KZPe1xGz1z2Lex82pvkEzPTMFSt5yZjGJNpkAc",
  "key16": "3VQEkMrCziFZBsTemK2nFhu3pyKp5vxq9G1dJNx9nTEPNic9LEUpPdtTXZBLRnjHsGjaxgsE2CL95FCzPWvkZk2",
  "key17": "2wjX21wGsj9zP8KBqyG9Pnb6ATsnWkL6Z723ziBeeTg5FB6os1379THr6XRFDJPcy45nBGgdraPr5ntChVHWVPQN",
  "key18": "33uYGqP6chH3uq3Tt7vnbPiYwFTUSbxchscn1j89owmePzTeZEBkENhd2aKXaPmzhmfu7SohUL81MF4UPMx1gyD2",
  "key19": "3uS5aRaeu36GmfWtw1kPMAoNw1tYdZx99kzPjv3UgudZP1CAECrhtKDkKx8bWHJzby8VGrcQBjgszWv12AKV8Rby",
  "key20": "56fN4QgdVmfyLYP5Z9mEQvYkLHnRmpUUc7EzwYb2EwvEQLDwf6i7qkZfpnsZksbbyezFRoPVXrVUwJyjtV4v2uVx",
  "key21": "5bpfuvc11pwtuscZphRUo7WNTnVpEaoJ4cHDeaR8iSxHNmAe1EFwLUFLR8J1UUZBDqGi1uGGnFY2YwBftEPNyUis",
  "key22": "52ZqsDCfZgm41pvazPqpdHXNQYSkzcHzUSTLZ4KbrFxUjjzNdAU7k6b7DkUzmqzVtG4SBE8p6VBbcUGZZqwuykRJ",
  "key23": "2wm13iMFi72VtkSfGNhVZomWzvry9tWNx3QpUhgiumoBVKtTaEhtPTNujDZDjJMG4fAqYjyDVAFLJnAgWGAg38pz",
  "key24": "4wRKZYMRaYpKA4XpEcRgCQ4D61r9Wj6inkroRBCRjun92ZY55jyKzf2b6kMthFr5BpqYithbAbVY5wFdtdXPbwUG",
  "key25": "65NDKKUkUi7qziPQwMU9zB5CR7ibNtS6Hcnqf1FSMFFimrkWNHA88nUFbG1sbsPRc7bU8yfo5eGsEGmQaPMY32Gq",
  "key26": "312Q7KY7zfHz7Vawz5pVuuQnFCy1ogGTP4Dvf8HpjgBDJAgH8FX5v5F9VrDg1ghV9BfV98zBJUbm4WrbRZw5x9gR",
  "key27": "3om1M3k1Lc4Hkui58BC4iyZyQc42mbyABLxgtTZMoL7BgEHV2QEhyH6UTkzc4Jj1432tDFpVttDxu7Xx35fH1VPG",
  "key28": "46wRw3sHf9ZZ1Gq4HL25XmRUCVfREPME7YXeCg72jB4d1rmXVF4xZVKLPChUATCg6ryp4Q5uAT1QkasaBnsnNBtn",
  "key29": "pLstVhdX6gbPdHCBuekEVRAWAsao91UhGWrPqWibLbJ516EcXTUiT3VbK5nJFERk8vcQD7iLfxznf4bjuiumZHH",
  "key30": "4wNDRCzdVJAvCduNkN2pdsc9wzBJ33MtbhSewDewPhpWm6zt6wRguQPBukyaYEf2hamzPTNsPLegGQRSrshK24XF",
  "key31": "21Tr9MqAjMSqdghKEZbBDBFMu1xrhhHoMds4YvQMtJtSzbUQRB3JBnBxGc3qSoGjQqEBNU7QYSMvuNbQcZtZAUNE",
  "key32": "2T7wNmHwfbCnRjZ2Ggt4Z47txsKMPGstatkjG3H8Z96rsvziK51TrLK4E7tNammdFf7nNRi2HY6Ld9Y2w2ezSsXn",
  "key33": "5o4nQ4wv1yYi6SnWuvAA41J7E6SagNXnBjX92siDrQkK3uJnRThT94anYHAAyBD7gawemnvZMT9GPAbuY4Eu8pds",
  "key34": "LtTD7G4ojGCNF3vjjdcRJmZwRUwh6z59UQVWNUT9H9cPzDs2vknSwg4PfSESg8HUQKH2UNYnCRZ8P7RjhvS4RmN",
  "key35": "38m6CxVqdHYfuj8AxZspB5qnTMfzoMBNLjKvou51jE2bMwEcZMCxNQ2tveabVJx3HuVo2DJHEcWQsy12YYK99x24",
  "key36": "5oBiHipZLCBshKT33HYgeHsfW96UBrZVP4DAwQkqMEcnN8MaCV5WBorVXme7hL7Ef11DD6tkJ5G5fvNvFgNgSpRV",
  "key37": "LoR153dPocFKXvvuL8DBZEhtHiA9wV8j4X1u1dTegz7NDbLzPPGkDfXBDmmjqJ1kySWj9X5WecAWJaY6Xbi1diE"
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
