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
    "53ynFLrrw7UWCdVzqo6wfEQMFjs1sGG9MeAqGnytQ5W4B257RrT5mSjNv8QoqjNHs3oUF1EewpwQ4UvqMoKe9UFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMpQV8uzC7HkhWjjLig6gdNFnZV3rL2wis1Abce9kdsv9vWUfU7cAt7PJxq7AadRMLAgH5irkKSG6jHBiFQZBPv",
  "key1": "5om7rur497B8JDt287YPqcjipqwjzxAJqz9LDRYYkf3PfwMs1ZXVT19HHUVHhg61P2g1eq1Wp3EMxngqRg8aJnmv",
  "key2": "2S3pST2uG3C56pxuvRdbExWwivCwRjJPf5Es55CLLWNxRwXiHgk1U8eCzAEmBRhXfXFAPcWR84usZtb4UncfAWkE",
  "key3": "oKZNex47eyHGdTaidafLXvgKaAXAvZTvC9dHDs7ZrFBG4LZbXmNwUhwgprt9cfAvC6TB1K11swBxKCMqbMgQkew",
  "key4": "3BYowp37bY2uttocYAfgJyo78diZQgYStuxBdXvSyH3wRUCJvn7GUwdAwKKahYZpecApmigh5iBx2KJJrbShz79z",
  "key5": "2aGArvsddtwyarPURmiPVhcBA671x8tJKBds22TNKPCoBaCm6sqyrL7wkHA3dAaKHoktgPoVyrN8DRaPL3oZPJ1M",
  "key6": "wwtt4Q5pXgJXZp4XdCVfi5BD32HkRsNbCspHyngAZsvzcv7ortmdZdfPRy2QevJ2rcmksZCBYqCnzUJgUzqab9k",
  "key7": "LhegL2nVrzLBsB2LAfvPGJjaVKmV2YcQ1bSGS5MSXKT12R851EtviDyw28sCejL3RoYzzj7WYE5rFfWNpfjqY4r",
  "key8": "85P1RRvcG16Krre2VgQFyKGgKXCmhamfSFpGDRLRXLWZFKuc8tBGPrm2akoQU2Ku3GUB9Fh46cCKmQcy9p5JdRF",
  "key9": "5kmQPkNqt2TfGoLBKpSkguCp6cXWJkczaSVqJJmzoNGcSDKhBTXx92mxYYxK7yaGdgwQWfPWj5SvECQNFaJ2DBhm",
  "key10": "vjmT1hYjpMC3AbavFQCw2PYKPPh16j1D5TGYrcMGPP6bZXkeMDSYQ4sQFE75aawaqRb3sj7HHkZcLhxFhxradto",
  "key11": "4UMAgn977MeMQm6H1785wXF3jbxijeYDfvt7qCJFFjS6AuiNq4ymXp2Qhs3aNkhStZVsxYmThDTPCmYbrUFdYpVn",
  "key12": "4nUHQPs8RJ3BTnMsHLP9bcpVTTDygVi8s7twymPjV4tzQ4kWhhCy31tJcYMBBLAXWWrxFnyKGFc4FpaTaM6fru1W",
  "key13": "4wb85owCm2zRwBWTjnEdmUWL4CTEDLuTuDom16ZDtUXsYQgeTNafvzaRdNgmuFMvrDmqfPmn51awRTB6xYeLR9J5",
  "key14": "4oGCjVWmKp2ifQmt9UA4bj5bXoJTSU2237YJoenAUn9oRdEtpyPzXkqj9rpFgtgADFFdWev1AGTGzL4FXrgo3hgq",
  "key15": "2Ljj5HdSptdxAGBUxnBZJ2PcVn276neWdUqtJJXgVG1F47w7joiBoFAuJrPM2MpF1bEviqWwEcC6eUgNp8TFPiwE",
  "key16": "S3zpxuKw1BwX7VBZoWA7eAgugsJuVcYUUZsPwX3RBy7CLhTfnyqJWURT95gjfYYLZjpPEgkrmqpo5Tf6MA843Fw",
  "key17": "i7caF8Qs6NRpeDEnGswoVvHggfHU3p4YC8D9k4t7LAudat4Ec1QWrXUuDjzGTdrAnYr7kZ1RRdLGoTyUmBzBMGj",
  "key18": "2aHhMyJXUE3ZTtvoJsppkUV6RCyXhro3LTwxHc63ujyhvxKsLRzwzqvJh9iAzCy3sh7EQS4DvpUzivYGiLeiPkCH",
  "key19": "5aH4EjckYZvtUWe5kikh9XDii6D7H4AeiEkSh6zYJFiMRhjsqo24hF2HmjBevNZVaMPsAomhxc789x7awB2dSyjv",
  "key20": "nQzM5apeW5dxbrjqukBP7Qbmp1FNqFLLWe92z6PGq2VSD5EBYuUwCjUFqtkRQdWRMJhwCbmTqhzdjb3QTUQXAFG",
  "key21": "4JwGhDTAiYHooAy9yiKeEw9F1RNtTYJfuhPNg6QiZW51qzapQjxAC4suHQfQoKNL5ZDdzwmXnp4HSkm33m268UVf",
  "key22": "2KD7PvfZLR7nj1yHnfPwaHZQN22ZGN8CometuBSJkk2F6ns3e7qVC58XKJmzcdd8x33V2ZpjCfzwfskNyVuqbcmX",
  "key23": "3NCTuHKtRTxqpNSQ2C78M3zQopZpQKmLtDbTyYq4zht5dZk3yfHhBL6YEiMSe8br7Uj6V18zvaLWk9nqirnpryAd",
  "key24": "4BaTsELWsqb22DrqBWqkWjXoCy8j4TfHRkifpiaNkckmTwv2G2rX83rwV3g3hXgXbu1mTGa9sysbgeBYi8Xw1dZ1"
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
