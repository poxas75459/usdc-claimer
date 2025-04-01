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
    "3Hsz2g3PtGWYn4FWxB7Zs6wbPeUeRkdku4vts4DAeXJ2dMuKAJyJY8GPeo4s57YVzB9W3akcH2oQkwRaNkHiPsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GgrbxLEER1RcgYQbZg7wFws5jDKrLSABJK53ngu9QLniTuZxXrWUsohUEK56gbs5MLodieFweooiys7xHfsJtYQ",
  "key1": "MNMUQomZsyrweL6iTZuurzFpXfLkdim6NGhbLHUrf8SmahHGYb4yXDVxJk5vLGdWFCesw94WrdbrLsD26TZKGiU",
  "key2": "3WcSkMtAK4qVCsUG8s32ACaJXSHgBHPYbeBGDvTdCirmN5v7AKWqdjNJ8nwkVBL8TMggQ1PogDDEMNiy22L4CgtQ",
  "key3": "R2TkfM7KtDYjCabn6gJ8UriLU5meTbCCvPkaebJYo8cs3CGUMeaBd4PQi9UsghPZL4Kwt5tLWZmvMpiJoks9szA",
  "key4": "26bJ5LakfpRjwV9g5Sv2UqGpX1m1yHvE8QHkXMEejZdfRua3cf6FAM2TMgyRCPr1tFfYRRZEykSrGiRNspNqPZ3B",
  "key5": "NG2ptf9bySrJEG8t7zsUPieE4pnzTW3ckFVoiq2N5Y9Wrbh8vh3vB6CU2eRwdLXEB2iA3ytrjPa6YHCQndFx3GS",
  "key6": "3QWBV3aLMPQEWUNT6fhhYqoU2gsD921Z19YSmd419tA41HwykACvDBemw25baLG1EUSN8tzAu6h8C9ouj5oDwQh7",
  "key7": "4Q25QMQo6FNHSSF6But5BoCJZhfEfYUoHqHxEw6peyTa6PnJC2WUE68pckcMM59fL4p97johySMyXEso3Cxxn47",
  "key8": "8BJYRYH4hxPQfLqVJrmJmnMjJzqEdETYpNNrT4FLKL525rCguzSePRKmhTokmHciooeKDveS3zRuYwrgteK4ica",
  "key9": "ZWL2qG4gLJGugK7pMyKkh5wHhpLRry4ysCFZDXKbMzqhP3JU22SKTSBzzfgu7o3cdz6EGEXTNQA43S3CF9U6yoN",
  "key10": "3teEN48bLxTJ9YcPGemJg1SCrrGu36wEHAhCtE44wPW9vXR6hpJTCgy745ZJ6XbTe5Q6cf7YFzPtaWdAvYTg6AVL",
  "key11": "4PrzwMrP2CYA6pqQMVKwted71J4ZhdNsJGxKNWLxSswDzXgsDNkjtGZ7gD42zNr9fJJ4cZLY732HpURhmy1dhe1Y",
  "key12": "pWHboQDfZVMT6pgfmhtRukWYCPTxYVWZweejMVPzzz11PvKY9jSNdzigP9JL9vDX7Ew7Dx17rDhkZZSRTp3dHAk",
  "key13": "2BiGiQHaNAwppbK1yBrn7R5nduthrGphKGGscgjWC9AXhrYR3Khi8TGCgAQaTknzDBhJDjVcfsAqxgY193otpkHz",
  "key14": "18ZoW8WUxmVMEv2yajNx8AZRDa4Z5CjqVBMdcwLDPX3EuiDP5eXMi3F8MqLapLpUCp2nMMeunWhaZvYaThK8Jq5",
  "key15": "63N53XrPThGPEY9vTfCFXA9AnP8YkLbvsx5wZ7WesrCfXwRQHF2QGoU3UYokrkpUgioZzSnSZFPCxH7YDGzeVPgn",
  "key16": "4SKpJ38otADzNiTQt9nbgf5cYyGgEazSJWeULwUtwYpuNjXhvozFjDvth1i4ZBe9rQhaVqmReRgGbUjprbnMBKZ4",
  "key17": "5sxf7ggYaHRka5HjUuytwSKfv8s8aPS6pUVYomeE7GQgrtnqDb8nJFB6gCVwd8GQ4a5zG7iq4UNhkxDfnBby5xQY",
  "key18": "562Wnc7YGaed9PEDuieU77qhk3K5AVBPeJYVCwhgUPjWCySww74zB6ce7Dhpo8CPsYw3KaCg79RabXSBJ9n3ZHC8",
  "key19": "3sc7GjRBfXq5GwuXDchhBYquty9uwJ9DE6btsmJ86fHVxAhU6f2beMbswF7hDstZWCjbKNs9gfFJsM1cp6K3RUe",
  "key20": "62xE872p4Kp4h1hYyLbMZpCBuQXt5TVEFfsikTHyJ2fdqxec1uMF82tKLT5tHMRYf3yaFBW5SEN5V5tFz3o4n8B",
  "key21": "TxYLLEPPvFLvc8AXQovTKWBHsrw3wREgGYryaWcD1tMsF38NkduciwJ5gRd2tbPs8TaSBWmkcUhNmSbpLPaDEkr",
  "key22": "3XH7dC8tdSJrZfsM4EQg1rPPTKyMUhgre3pHWQ1oQL3ASRMjfA7H2ejGmWd3GsU1fXH983eNnCvfkE8SY7SU31K2",
  "key23": "5ZV6p8P3MGTCFboHVEQN85NDZDeVARWCVhGpmo3HuF1hcvxrAffvzLX5crNkAFwH3tuSo7tMMCWHnWT47GHXP1ao",
  "key24": "4Z4Uu2m5SxXtrs4qfPWa1FLgnrMyRX8Mu4maPUyKx3aefhJd8gzCiZES4dzttV2M1VfGHBD9oQKWjvPXFgwj8ubB",
  "key25": "3z3HU4S1xfxKyqb5dKUNME5Mrkm5FGSXQ4ZVhL5RgjaDmrfSxqcCwDwFKA3TrN5WXS7KP4xN1ZrWZfBR9A3MqNao",
  "key26": "3sLVuHMryHgEcK1RNyvNWzUWVXRKbw1RYKA5X5xHiiJhpiJPBK6TcCz8LjKaVLhd8LTeNGWCP7SNK2TiWG23QFAs",
  "key27": "49vLJfMC3mBC22pT5zBp7JWwux4uLe7YHhiTj74NQFgqMWQeZoBfbX6g2GGBLhkF9grxFv3v6mcMF6pEGTbdPxcQ",
  "key28": "4a5at6DEwEcCFuTtpy1YBDB4WuuMVcLopticubKdbrNJLiwrM3q83VX7NMEgNh45GjE8zKYM9siazLQj4mka14jP",
  "key29": "3NQJUmg4pg7ce9JWqaG3bsrJkdra7d1nLxcKCStzoHi71rkHQWaFM48AJyMqD7G7Lvrv7kxcVfgTvcWzmRW849g9",
  "key30": "3QSjcb7FrAeLjxCDPUrkqFvh1TH1YbYNTVRFJjia8pYJ1Yaim71cAT4wGDNqYs5tYYq9Eq6NjaAFLXR6SQuFMioB",
  "key31": "57rLe5hvghpHksC2XK3yEHCcviTuBnT7kYSVj313FzreKoUAU7U3aVZxhNvYpUUVARX6TREbXPMYuEUQ1zupMohx",
  "key32": "2vJCGqUQB2XjK71g7wYYG3QnKjA1Ab7tAWhzwkUsCxK65Qpyp7ptJ4Ez8UgxxdymqH7G6yLYFeqboREoFbGJG8Za",
  "key33": "4EzYVHSeknyXHALhnA5HmytKLkSRANteXLD42XNdJMktRRt3LjvBryNLe5DCRspRKjAX3j9vbDNgbmryPqa5jkK3",
  "key34": "hZUN12mXit9r7H5braSxJyFDpN5bYbMKxeGeZQJ12KV35gDkBdSgTAnoQvW28j1n1pUeksCx5urHK67ZyWsFD3B",
  "key35": "4LLk86KFgEm1v5uKDkeA99GvrtmWumTXhR9H8tEEsQitwLhr46TPfmuA18gEUUKuB6y1sDX167FbY8PCeWYmTbj6",
  "key36": "mJGkuuSpEP61ZX18vQXqNYaxcLgAwWMvdAVXY2zcAnMvuXq8vyHiUFURquvSPCQwvLBA33oBvZarMmnq4eX24jT",
  "key37": "2WXdPztqZ5LxjHUAsEJN1yKzkWMcdkypsuZJJ5k2wEpRTjFA4CfBEgyszysuCDJzDvGqAJ1G8V7bCY1jwbeQW6S4",
  "key38": "66rDaw2heWf93BmHZ26P3fRCunTwBgj65iUaVk4Uw5ZzCKAHZ7mbqQwzsK3GLMPxShYsTQc5TAESfYFaGxwBU4v8",
  "key39": "3p6c8wzTgppK2CuRjD9NQ8tJ3q5S32dhQLpFSFUDMGwL3hBEqVfafgEaZkxWBcxEPX7b3B6mgcKDBsyL3ToPv6g9",
  "key40": "2zqsznFU9xj8s6C4n6yQnHwHhvt5t3j1QNuYvKkoAFJCd6SaMPnnAy2fGRPeapREtYsfmWU4fijmELn8oeaUwD7s",
  "key41": "54ApSt65oARi14pwWRoGBKkizAMtixwUvnVDpzM5F6PZthpnMhC1rL9dAhwMipFjsB15uoSTj9oirBYGqqeD1gHy"
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
