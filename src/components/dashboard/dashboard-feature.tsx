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
    "2j3QamWsnpEMpqQ9Z7iqkMzSvX5JVoUWrVDUxsWAmN7duhdgN7TPFHvMDyVHyiGfCfFantTg1XfNuiF9pAVesXT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RKrvUL3dR1ew5FDTVAFp1ncPVkQRgUM2BDTLkRNgsuX58vnWLfWsnHfe8E88qLVe2R7wvskyDBEH3DRLp3A2vJd",
  "key1": "VT4JAnHd9U3AHnN9amEohkUhm8VNonaMj8LnUXpXgAv8uiYkkUD7bjcvuSH2ZVmD4MMjjodQryxb414ovr9aNxt",
  "key2": "3iz8wqjbeMtA3GHMiKDLrb8Jqk2FETkLecWGGgmEyQP8pgeStmovVHFPgWk36khMJLdEHdQ2D8fs476GyBj7pvhn",
  "key3": "3qoYgTTnJWYTFmTJ2NMTSuveoe9xG9a8E5Au7WUd7Scbs2xKn5SNkNEBRE1cib54iHfqztL4APWsKJCEdVzzMGNt",
  "key4": "5Txgvyg7VxS1ZDLAPSCoXQWysPeFy3SwjmDspo3CYKm2AfL4Tzf8ahh4dFhLSGSZeU79VScEPvKqmMxv5fz3aZBa",
  "key5": "24NETUYxq2pvsAMSSnvKshzzThGDW42bjA6R4Rv2ZNoNXsAhAbDNnKR2Y6jD2uekfrCsGQPo2t1uLrin1f9uqWy8",
  "key6": "5FpCoP2SakNxHfR8RqarfQxgqCoNzojsJir4sxMof3khp3gwvpP92hkAxKL4kegvHiG7VvShfTCeQbjJS1ZZB6aF",
  "key7": "2G7pegv7wioaokDuNJCaimpTsFYPbobsncEqdSevwS2eTD8d2w9atUkSr79SAr923fC147vsfP5ok5YgW5WzmPEu",
  "key8": "3YGyZvtq3ZuVsy4i7vh8HEihWJKArBMZBPMvrFzBQeBkwNiwWaS9aFXzGywKV6vGPKg9viv9McXURANbVEtJmXKE",
  "key9": "5km3HL6zaoYmPBZMYxyoUGgvAtScrMN9grwCHLfR4Hm2eRmJ13tz9e7JQ1KJfik3bt1E2Y2p4D9bPMUc73UpjK2y",
  "key10": "5hsQEgquDThNvUUKyYCCthRLuiiERT4vPGCDNEn9XCjXEKYqEgmMm4NHbee2jWTMLMMZdtdBJigb4P3MgCtRVq4X",
  "key11": "2fYCFqarPocGBjPGrVs8dkfZNcx3xdyidQ4DxA91sHRerJV9iHfnKydZAXR3hcct7r3yGspyiefQZMyEU7XNSHgd",
  "key12": "55dZF2nG3FdiNiUEzcXv4o9qBRKKfAFb26mLs9QmnS819E1YGZuXbp9AwsWxauymPz1nauF8C8JXKo4MxKxgsUA7",
  "key13": "NzGS5HzngdNjWuDYqpBWsDK4V1orC5PpVaoT1FSgfBubdbhGrnm9yB6faP9G5kbTe1i49mHaUrasxkwJDQnAtao",
  "key14": "3hBruKVSKkd6RkUsk5HKWcc6sPRHftNS4LYSusX6WoFTBSSCUFUyKFZTG964TSWcRPu5hy7ryczeGd891mUiWnDb",
  "key15": "341RjEGKdrcytjoSNTS3AyihtLoppZJSYguDWaaznAF8RoQe5tQsny8fArWigAjx4hR71BqYDmDC66jnH1Mm1nyn",
  "key16": "5e2CyqKTh6UaUHNU1gaBnK5y1qcRW818SL5tENiEeDFYR4rC14k4JNnaLBaLiHheyCHtwLTxEug5YnmUZdfyrLor",
  "key17": "EnhuTP9u9FKq2ymdkSavt2sC6B3ucxu23EAmWM5zJkgZwf27f8RexP3YyoP6RGKEjy4GGif11J6QGVHxA2hGwjo",
  "key18": "64eLkK8pkW9BY5f9VfX3Q7YzMogTgUFb7m8oWQG7H1LJP13Gtns49WneBHyVEAyBXTvnkWp2fMEaXwB1xGdUorpM",
  "key19": "2nnRkS2aJdA7k63evQq9DsdUfCcChXyJGvf5KqDHVcVsqtDSeQTFSZd8ECYfsrBM6TJGx5J2vwjqi3j9Ufuq9QnQ",
  "key20": "2gzv3W5oMxkQ9gEpbdi5rZsxGmwifLvQ5xGpsexW3du1wnrzaj32YrDWuTqzWtJXerhr88jpYsmf6Kd2aLngXV5t",
  "key21": "2L1hr5tCwfVtQUNc1gRNMPYFYyMymaE7AAM86xz4vvC6KVJy2QeZmtgCsGaW7kS3XHH3AJRy8Nk3MAWTUxYSc16V",
  "key22": "5P8Vob4hLd3rG5kKSHYGN2jaiGX7uaiHNZGHtmnkGqPSD9MQVaNKcc2xxDdwDwUaZpVVBQ1hwUHiFaQcczbF3TGF",
  "key23": "2Mu94xGsaLAB2yatKqPdciaBiHboaTuWkR4ziVwjW5DB8nTLjBz5iDCq4eRxTiQrNgW9e2PpEDesoMLQszqtAUsx",
  "key24": "QgG7ese7UKjwrZQqDKZNFbveD38C6faFn7RSnp9dUH6QMVJCNEMnJ2VpgPkTehPQZZQ4vsmYH9S8gjPzH4nUWkA",
  "key25": "sioWJd1MiHFtiTRiZMy77PC45Ye9MAdJN4rpRz8E5wrh2yt3cyQhB3eZ5nCLME2UqJBhfyUXDd96bL3WBxg7pJ3",
  "key26": "5m7fXiF81RogKbHMyun88UCUTLaAkdvZ3534Q3NxhVQp1Ext4bcA9ZkuvjJcZF6t1gBLnPnHdxqZ7cowaCLCpzM6",
  "key27": "3MocqYyxiost6XwPeXbbAEWdFgYkygqPKPMkdGV64tFgJqaUsqexbJTcL88aoNwno978fJqzMZrSgCGSe6iw4DoK",
  "key28": "PiUkXonBAwDDBda1vgsD4gBavqzVGzcrgLfAmonBtZD3WRKrtuYJWQg1v2C8o9BUZuYdV5HRXdruzm9Eqf6D7mG",
  "key29": "4o88TFEjSyofNwJw9GRKJJg7zcoxagji4Ep12kZo4fFjhgnfM2MSJmSQFDg1kW3WZa3EHUeyTCtpCqSBkHArGCq7",
  "key30": "7GUh3dwdA7dW59JCALvzMyK5y78Do3nEa7nDWv2ZeJCmZuK5oUdrE1d6SGEphy2iMTq5ikMiQK3QTmFzuRqHN5q",
  "key31": "xUBKsiTBvmcSaZrKuLHCbsTfHYfUHfKRncUXwkUu3SZFmRmcHWebT4RVSA8cGanzrLQUPG2D3U5HLdE9HFnZaPz",
  "key32": "1ph6NT3iBhk7fWzYA4yyZnNAUoAVbN3XYwg4Qw187mckMiziduQF87QxyXHwwtsDYaMzNLcwSbjk432oBMyuPcN",
  "key33": "53Wey8ksANU8ZT2fE5HkaAFkqTbiJvkVf5aA6rpZp6kcWV5vcU2vCNT7yEcnexD5b27YucQpDavbDGQoGmaqo2FE",
  "key34": "41kart83tv8wfcFEa6amfBNs4G4wh8mmFyp2M2pAnfs823NxZfYyPg3y6zq9LK6XPKQMV5Lv6qTPcuZF8PMxvywP",
  "key35": "5ySLgcixxBWUpiDSNLF1S7YVMWdXSoTEUsksq48JPktdjjp3H9mdJiYWuZed22XkH6UWGEqfEeqjBEvw5idqw1jt"
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
