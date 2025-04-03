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
    "2MPPiAYDuspysmbRih2mQXXdtKCAuNyJVXCNrrK3WrLRnrXyC2kZxoRP7rNR6m37dPvbVUJaHbN1W5SQoCN3zJXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "447rStwDEVNzg3fWVRS3BExJf4v9e4GYRKZU1REqEQf64BMdSbRiX5k6sU2k9yP4gjRgvYQDRALQNxAYZkodD1Do",
  "key1": "32b2HqpzPjTk754L7u4akPTMCu4t5FGeYYxvT1VGYKGv1cA4bCAXkFCruxV7ziyjcwAg9oVnUo763YxbQGKMG9FP",
  "key2": "5FseD9S3y8oWr9B5FZ65UCoZXrfafWzWg5FuUjAPP9Tdbzr39ofdxT1Y9rfv9iCwt9bp7GySkeAoPBmjLEfmKEhJ",
  "key3": "32JwfSUas7zPHs3qpWWLvM2U7Cv7ExYLJQ9iJC8VP7JYEEKK8CjkpWTLx1VmgyGu8n2LV6ningqZ9caVmwWPtwp",
  "key4": "qjwLZnLQN86FdxrACyEUVwtnbyeFeLKodsZSotgaDMbkvduNaB3M4L254t3TAkVfLN4j5ppkCn71EcrPrDKaNwa",
  "key5": "48xdQzrq38vznVv5ziQTTwmVz2BX4wnmMmeKyjCPsTvunCaC9mr6P7QAq3r2CpQBux3GcGTNHp9gjs1ExwojC8Mz",
  "key6": "4D6bdVAnDfu9oga45FsxBPtXVxoekxmbGE51KesbuSaGN5vZNP13uYNJrNidiBVtfnwME9K8bnMrNHjmKAH6DvLE",
  "key7": "2mrPnc7yw1SMtrCWmZA877mvs2kpMMVUCvP2S81Tpr2PpPhfP8Jeew9e2xd6KdeMjLSUxji5bFgvNkNkqAFT1rWT",
  "key8": "4SuVQP74sr923k5o1h8UM7G2q34vcZUyEHDDJZw6X7zLyv59LuXPFPngDdLNNAPa5GkNJ6Lg8HAiYsLDQXvnsxmV",
  "key9": "5WJf85JSTJyqh1NPurmykXJBxgWJ9ZL9ur3oqEBxJtdZzev14mTdeTYmX8afSJ7w6UTBSKQdLHjTtrR21oXRvdRc",
  "key10": "kGtuK3ycpDpeTTyy4PxxboioQDR7q52vCmNMYWz7GzimkCKM1PN2p9od3VmsHKUquhLKzUSmumqzEh2mfd5EUCu",
  "key11": "4PkfmqfgKd2vzoJiYoidxMST2cBm8f81nzWehmcWY1mA22zpt2WNodTLrzoDH5sHw8ENXkX2RiUDEH59JyCFefLs",
  "key12": "5W6L6T1zgjSThszbJiMM1VRphegTXn2e7xa8jnnxtQDQTfUGbsBQQrq1BC31Tb1gq96HAVw29FvntM9SDXi668nX",
  "key13": "c22zpBu9wXcwvNqDvHCiRk8gxkWpVcguTc5KoitPfjgZCUT95S113xkMdzcTcLSo6qz9EymgAzF4M8714GBn9jr",
  "key14": "5SjbnditnoedJLE5X1PBfhXabZCPpcwnSXdYxHKFoWnEMXq28yRdWfF1HinuzRCjZoStk3PrUk1GfD7YfDPP1zW5",
  "key15": "2kp7j471R56Gf6kuMFrXRLZ2JAGYDWVkUkNpyFbu9LjtJpMKcfubTiVgF1d19up5Nj7hqykuyRJm9SK29aeWNEAb",
  "key16": "3NmQpt7FqTbNowV7NKpudAu4LjprzN4tfwWZ4Toe2AkE9ESQ7JL3i9ETvfUFDQSnju2tkj3qgQtKfofeq1sMG13g",
  "key17": "4qsp7rFqJR3ofcZdX1AqwGnCSWdpYhVu7bCUMW6QfSqwHGiqjyuNE83zHVBt5BEqk77cPYYfUgUuB3DNNx1CsPK3",
  "key18": "65WNvxy1oG2w4WWAFTqk8JsRhpdB2frSXq6X7y94cZftm4EQiXeyKjNCsKtgprpXJZqnudzqUg4YKpbPN4ywZBj1",
  "key19": "5EaR3Hj9q5arSdzKrMrq3dNE9wUd8sAEVZQ5sux5GWa3xi5wPWVMrDniKGM54chugLs8U58zgKcEtVZhgtzx6FCn",
  "key20": "62ijkbhURfNuetmMCpZJs2uRKGwtzZmE9jo5S3WP6EicFCyhPMUzxsrjaVxhUAjd8HSQ7dZkpgRjvKaJPVN7cd4D",
  "key21": "XTAxBBJGWd27pEQWL6yG2YChQQ4a48PcTK8XC5y4RF1AeccePXsAZ96P5xnmVtm3MPFbzjBcc9hKQAN8JPaEZtm",
  "key22": "2fFQ2TFdKsY76a3pGFZmzpqjHkFLatdzxTCev5UuKoQpsHRV9rSvrKgmJyaM7QzoLSv1pgkrHoe5ZMt5yjDt2hDT",
  "key23": "uFXMBB2T9oC2FPxo56Xb3sW7ScAFVkXHpcdC3sXSGtxuSBCQt8MnKZfynyGEsMrjHf4Dk8hMBb393UYDcvE4xCe",
  "key24": "3r9Ps1QwaDLoVB5SEDk8adPpUHJjSW1p68FHcnSt7NpR6q2azFt6vWR9TbUUy2PT1QXnzhgsvTQVdnxsPCyGbubf",
  "key25": "4FjDqc7yrj1rX5eqDZHFJTAJi8CpRkU5ZLaRxWpapUMH9t8c5XWLriRsZfGuShy1bhTLWB41DchmAU7SeGECZEpN",
  "key26": "3sKHeYM61BFGLAXAythbk8HHy1Fqutr4m2y3nNsiTWHx4uLsvVryhc1U6mcubysxTwBbhpc2MPh7iAQAELChLYwy",
  "key27": "2VQDbmfmYo6KKr6UFXs6i2GYUEcEnXzq9nFvk3hS9UE5DrqhdWRcpFpaqAUR9vu22oQAYBij1jTggDWVLXGMrF8y",
  "key28": "5o2YHv3VStteNzu4Yx16MvHSVvU9eAW1KFmjgHpX5jNAfJKigxm1pJUwJeu5Uoi73UqbPvhdefmwE2qp2xerPjV"
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
