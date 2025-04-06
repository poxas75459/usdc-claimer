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
    "2Ta3vwnxB1nphGreLCQu5KYxHFQXh6p6jgadG5PvKyN7XeXCW9j4vfMXoA8txGJ8SP7DnoJk6Qqof426WrHnhQVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofTWWmQWghTLC5YR3k8Y3X6tbgc2AYzfcfsHWo1XJtGmss4LXhTq8SxU8BFNjvSUZLSXnKehgeuAC8q8jeV1j9B",
  "key1": "35ZPJSe17WxvPTC9kBhdiTkbwezX8EDT16x33V8kGr7yR3vjRU2gCBWPNYD1vGizHBReY6jYRnt8RrDNUugEfNMC",
  "key2": "4m33EyYNaKVQbCiNnaWdVPqWo4tHb7wW5Avq6apQE4ABsq6ekWFahySZk7mRDYC9AHPuAfivSXQ7mB6VoJN7HL6E",
  "key3": "2d7VqL6T1z4yUDcADrsvLwcLBKuziSryLYXQNsG2HjveK8P8234yd84r88D5Rba3n8u52PYdDWk72xQKwebkacnA",
  "key4": "4mq2Fmdbqd5vVwge3R7NdDdRCGw9Drkeyz73NEJJthS3aX4HFrtCiyCqmv1hqZxyqFZyy9KVddrZ3ZtRCdTaafAM",
  "key5": "4TipNwwsF8ztdzwy39PwuVRJiCnVzKJNaE2ZhDiKthEVxTY6rqFjYB7x8GUCNirkY22nPHdKVQ56Rg3QS5j75Gwg",
  "key6": "2NZSzzoaYTVkbxgp3VuLdXvinH3WE2q5TpPBLwnp3J8zpQd5zzxjtwu8RnLTuURcMSj2VYZU1Fv2qd6Y7Rvttg89",
  "key7": "5Yu6xpnhqSLyhqVQ2tsu8oo6kZm3PTvMs2vHTzNwb2GgXyweJG6vrXiJ3RS7DWnxEK5eWwYUwshJYG9j59Ng8bVx",
  "key8": "3Vp5rHwKSmQbQT2DjqmPwAucQsJF491LQ9r1DKUdeEuEAw3qSZa9g3HxmHA4g6kkcYDg2Xuy5niNo5Z5ZQEL3S3e",
  "key9": "2GQpkmVkoixFvWFdVnsJfjNG6emwRz6eYKU4QQMZkPzURc4G1Rf1Ny6ErwMdVC18e2s61ofptQ91tsPe41kUVi2s",
  "key10": "5qnfcMTydEM3nhbE1bkp32zNPB6UUXmfP8SmEjR5vcsjn4N3Ybn3gYu7zywC8fwbKfT1JDbcg4daunNbE6BrJBLK",
  "key11": "43mxM7DECdiLTeUFqRq6ZDuwrVX3jSA55gseTZ4XVeK75Gvq29X2m448hYuoPGT45razHRyhqM4tRE2arJKXNQsM",
  "key12": "3eP7QuguBg5VE4ZWCPagjqgUZte9FGv9Dmkwb994StAdetcLFPGxv43BrDwgsE8NabU49kXWpg2yxt8WDTMuDs4X",
  "key13": "3ha9uMk9m7zTcDXZF4pcLpJksQQs2YUQnVTwXt3ejfa1xjvh1A5k3XmJ43mwMaF7m4VQtBkZiwqzVKGkNL32ddZC",
  "key14": "2v1o83v17YHajjLP2rupg2VbrYa1m7WtFpVdTcvGX5pxGxS5xMBKjCcoqHuc6rvRoZZnJkSz2U1Pm9k8KuVxCaiN",
  "key15": "2E7uzobPjUpMeSihU75vjazasTsbSxfY7pmJgxbdaXj1C7vLBkQVagu16oXrfbCG4YSQVfuANrr2mzWG4YMiKNwL",
  "key16": "VGD6xvcAwNJhVxqziePJYjcXwLpa11rdea8BeCqB3dzNPweTVztZ8x1FS6QmjKxmUfDXkFFd8bcCUnELmjqm5ed",
  "key17": "21kcxCESP2oSJYJVrnUSr5XSPvFGTHkNkh2wovwbFsGyrYahb1jXo83vsL72GaZW4gHWwaNemaA81ueRjkCyJdyn",
  "key18": "3THGgTRjE6na2DPXmAtFVGavdiqASTa8HF8MKhUzsGuFCe3g1oGqb1g73MSF5CKhgG8RMW2H7Hm9xLQ8pGv3X8oQ",
  "key19": "3K3iojkcFbvML8dVJvMCbxkr8frYQzT6RRNtPozBfnkko8QbAaC6d6cuUcnVbJ8WgMkkfMRwVhGs7ut6nxm6Ava",
  "key20": "4QKgtKdsJGmDcTFxvorbTthzZmkRV6WUDkaJLQzH1BFw7Fq5ojR3CNVwpVtDvNRH56kgVPQuPKvropr5KEbueJZK",
  "key21": "3WgStrNnBW3DY6KUDJDoYbcV3hbcjaErZCwc4U97PAZxECUGrTy6J98AkiFjoKaQDmGJjChhQpwxSkGVhUJcgZAQ",
  "key22": "2u42LBmppRxUq3vdupE9UfTq9phLxtr7edNwT1gqSPSmVDbwGMAC9dxFiSGfHWBtWKiMRJUcZLd81nKKtHAqaRHv",
  "key23": "zSeAXQhB4nxz3GhPLcgWug9j2mm6N96f4NMK8thuavqr4LPmAJiykVBL3vdd4xGy4deaBjkmFRFW8VhCrsZUGZD",
  "key24": "5bgm5yyKS2gWTQz9oqY7rYKbqkeeca4DyByY6VqJTg8JD5pkTuUEaT6j8uXSvayjKLUseASEq2o7A3R3sRTwLfMH",
  "key25": "5jt4sRL3SxsZamQJ9vZrG53ubMeTUXf75WjP3jHTCR1axn1i8RUCceqV3CVQKKFcvco5vHhQU7WeYKapQQsbjcPz",
  "key26": "kQjyvyTuDs89hZMNSB5PBbxaQrikxxfcduaqE9xVRhFkAZa1teYRoesHG1xfutZ85mPLVyY6e3ddNgMMQAHfE4S",
  "key27": "gNMV2MCjLpRk3yhKfRrCigtDSFsC23NEyaWUBu6MnC2QcodeZzXvexNbnvG6DZxC8gA39x6SgQcvJnpDjTkTfae",
  "key28": "4GZH7J8M6omqSNrbV4UojZDMje4LsoiAeAKMRfHdkC6xoo8RMxvAkyMTEd9NFzrgWFdqB5pQ9gXa66ygiNgUsbVv"
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
