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
    "4jLu4PU89swk3W3F8j9z61fHLwBo1MaJBP7jyNAce6HkSQRt73q4Qbvv7DKmhaUxSMmAR9g4RNsDg3YM42eix5NG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYJBxx6uvgAC1369xGcAUF99qCgBRC4zXKpaiq8kyM2TnugqpyFQcRtcD4yXsZTXWekG6QnR1u4Nvq2CJr1bvGM",
  "key1": "5FK2b9V3iDuGfxMUsewsoEDfwaDrXCh2MBQYQ9x18W8xdFDtuCsQpSsqdL1V675GZ4LxpGxDdSdZRza56shvrDWF",
  "key2": "5PCN6G4ky8oNnAdjcki3JPfzJDy48sSGrMQMFESWfwqeum2QNq4tHiVHmkJt7RFYTrfABUJvLy3fbzaSNGYjh1bo",
  "key3": "5R65cjw5t4PKuNxhqzTdgQnAUuCEoYbxSAqHtEABNPDFJqS7FQQL54zAFXBtZWc7RLTwQBsepRwza3nYhZaP3Va7",
  "key4": "2HU9RetvbbHGaWjkk7j3mSCDm5kYssRgmmTSjUorzu5VzDWtim1WGPHrST5xLhJJPnkx8Nisc3NLoasoqx2Brqe4",
  "key5": "2miaHQkdAjs5PPA1bC4yYyV2fmWgkFEzyiK9Lzj1ewmkmBgdRLKMkfvhWC4mWZryG3mbjfrgre11a1QUwMvmHsMq",
  "key6": "3Cz4JXoJisqDTspcaMmVkNR8zQHAN6bYFa7aAp7UPHuMGCS1P37QfaD1V5yT3vQpkH6b7hqanP67zJSFnQGk3cRP",
  "key7": "3CesorBbxDWTjYTMW4w9RaPuVhL8VPYDsRzFWd3zWf4Lx4Y1dHtGf9mBwuzxZocg2bwRPnGAcikSYEHM3me7ReyS",
  "key8": "5QEva7z8FQ3cvTSmXjE6W1t18AjdGFDzGVbhSvs8KYPNsm789rN6z5hf3svDPVqCwq9nEikANHyW7brVhxSMEdaY",
  "key9": "66GaSuCJau3hAp7bJZKWMPYzgfLpp5prLV2Gethw5FBk9JSNQZ46v3Cyuv28CH9JGsipJju2RseBmiKnyk3iJZbp",
  "key10": "qAnEh61CBV3wGpgHsCVMwfYoMQ4AJPLdD8T615PAQkXRfcTjLrb5abtqU5zPxvPs2uqBiArGYdR6EkS4PiMk4a5",
  "key11": "2KXSC6vXvurLv5tkvDR4JwVWvzG9tRFaUiitFwn4Bh5mxHLjyez3pnjSedpoJQKBFskXfjiinq7SJwSvVTYsysyt",
  "key12": "2XpYG7srAx2TUG5qv58gMbq7YFiJqCHvCWsvSmifDpCP3ecG4bvq7zgGhufwYGAaDHD8QdVfzsdgQ8QRuKeWG8z7",
  "key13": "3Ci8AvvpGGxjGPNEKA9xqd44k7tuet2fAzx1zWwMwVecsTFFem3riCV6yMCZYMbHmbj3isSUaUWYJodNR3M6CCCC",
  "key14": "4HCt3Fbrzv8m3iSHr13HJZvkronf5yZHFJAB9oAdjEukgkDFoMJzCZZgNJRN1W8C8cdAaVq5RwtcHi6aZav7mKFd",
  "key15": "2W6CovTw1hEbxwnQ41usHVjxnBaeBfE4d1fiZie1khvFwoxJFA31chw85KEoLqxX48ibAK7qn7UHnNQcW62ASdqP",
  "key16": "GVbgkoJ6yEXdfSYk4sdjAhNsKEnTasDYHgUjHGMDyZ7wmkQty4aGTktQW4VzuBRzTyBZzBXL2HiUPovgZG7vihe",
  "key17": "5YAJfNaNvaBsoMZLorxv3Ts88UzTpGdQ1DGUbpNEAYzCApsStF8WXw4XkT6wmgZoU6RvFEUj1kLZ2xwg5KUc34KK",
  "key18": "cKAagzXs5L6u12SMzc1fwXXJ3Kk2ceCFxgdNPsp4uoZ4F3c4Uje3NPwMhjtc87YsVWKXHJV3gHX1q7PpS1vafKk",
  "key19": "2oD6arfLYMDKptyzNAQ9rPbcsjk55c1ZMDJrUCWSotENYPfJfVk8ebNxSiYVXvAaSZjXfpjN5VW9xh2Sss3ghqkj",
  "key20": "58Q8fdyE7uCaBJUkMxEJfG9fjjhXrcS48sf3EXPoqbGWzihEK86oM8fEZhQB4a86T9GofKWmK9NiQxf9LPepW7bn",
  "key21": "2TvGpmDfMvBHfmZS2hueDVxgZcRvzq4tqUnQEc9DKGF6W4wWxMG3dvTeKNLYW2f5Kg3XnHoADA7BxjKrKUyfrF54",
  "key22": "27XkY7iBQ2nDUyuZTYNohjaThTL1D9a2YSPyBgJrkmZG9SZe3RLv3fGh1kEa33Smg4AErTQFqEVGm4JetbtiMxoJ",
  "key23": "2NWfQjLNoexu8UtEY4co3BogZTVh6FHPzVtrR4PtXv38R9VzZWTZE2QMx9nCtoNGqnfpQ9k9ytYzdURUfYVRhSg5",
  "key24": "3Yoq6uCijUCnuzRVMkK8aQH2ke1C3iayT8z4heFqJxv6YdTsuHdHko3NWuVgXTLbd9QwDDgxgHfRpPHNiJSnqcHR",
  "key25": "5tAv5kVxxa5Lutp4PVRsS5A3YtXTuXF7fwNFLF1NVZxseycqaGcRVzgHmW2eBRU2ZvTDs5mzSEH9e13tmCAcTH8X",
  "key26": "3uZwmZVWZeGKf9ESpFfqJdtyrB1RnByHADYsbJzQ9wo5DG32mf1aMVvSBrrgHHJFfxWsG17W8QVyoR3BvduFYDrQ",
  "key27": "2QyrfgZ4L7gjm7k2CUEQMCG1XvBN64d61zWc9vYdTPenxRgKUoY58hpqt8KxMZYJsPgxfSqFjguHr9XPiCQ25FMB",
  "key28": "aesErsqKFUfk7KGqYEdsPMDKYYK9YaJ4wM9nSLjKuS5u53zW4wXCZpchmWe28YAiJ2Uv1hf8Bec2qEzAJ34UxVb",
  "key29": "2eobhUKptvVVATc2VKNPyxuogY7XbFjs1AQsQjEoVpendjbqEG4F2AV13GLQQZ2giNZbvFvcFoRHd8f2Uf6z42WW",
  "key30": "3PT4MH1Gchhx9S5SX3ut1vNipFZjVWnFVdWLdUhrJRdbw6FRTNU25f5cZn6fYPByzFLgnhRMuSU57JdJ9W3vPitk"
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
