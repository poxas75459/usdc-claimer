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
    "4XKNnuq253br5Jp42JGQbM4iBJeyzitjHNAsZ8KAHH14siUvQjXYuJZzY5XQ5C1swgaryj52i9pK3Pcf9ATospwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mTcoJxcXNGX9gaub3eFF7ahNFEayC39zgb8NqZtsxQQaJpVQpEkXW6twhbee7pu1KP185qUXXRSQSXHW8hRH1V7",
  "key1": "yUuKzu7MN1e91QkADobcDn6QtYFpKbrydmfPdj9YqeYyujPTkhUUGfCRSqQmm2HoMnASaaixX9n7Mcx4X5Sbzvr",
  "key2": "4Hbf2yxNcRfGesRFqiHqondC1AZPFJEF3eMQp9cGbS6VoTEq44QznCyKSGPVU8a4GDYUZo2jMQAUfsygzUkWHRtH",
  "key3": "4SD7DdeaMrAVmAakBvneKoAgKx1XtCbjW3PgUU2v39gST3HuLKJo4zhB1ub6e8CzyHetnhpSF22dKyTEya1pZnJP",
  "key4": "2pJWfDKiZFLn5dFMYDwtVaFY3XE9vNf2DF8gjBtGuRCBgRYdETW9SXdQb5wLyasQJxEE8Y8Fd9RqpkHRnrgzNwFN",
  "key5": "4hiVLfhtrRri63fxu45ermYHabGck6x1H1yDDNNxzotGCAnBdkopmLLCdWoXyZPsFNS5ftHVnx4s1PnCpF7e36SW",
  "key6": "2Xxj2FpR5VnbwUrkrg967mkvuZHoSBAESLAg9rGcDGdjDFRLKEDhVyFYSMaAi8NmPQiLb9MRDQvsvtmycYXbBLrU",
  "key7": "4cYLLaDP4nys3hgAw9jqgbsmTDeNsoN9897WYVAXo8CAZvo2uBTjvTPbsjxHzLdLBFjQTBzTTdc7ZYgFATx5cTHD",
  "key8": "XbwvBmNo844n8F3rP6rVsAhv7UqDbLr4Zs6JGZCsvyiD39eE259cVz5wTDsRUUVDZmHWH7XAJkUFLNQdEZQ1R5w",
  "key9": "49zchSWnA7sCBbTArQ9txvz1WG2ouTX4zc2nQSpFFUrsxK9VCZTCaeRT9Vo7nqBGrpRufQjEBGiJmhuscynCFFaU",
  "key10": "vG9TztLUi7qRiWXcn65g7RVcPaY5yj6BYCrn3V9yPQbFq9aNp8jkLaJKHKYWhCUSdnMEbagST37v4kvn3SnxZSE",
  "key11": "5tC7iWs4owbx6k3M3Wc1V3zPhSTA9XEtgKEjociSyc8uiCFDqgfVvRENrQkB19RFQogsYf5LcBWLanjyacE9oJXj",
  "key12": "2ttqYtkQrhdruj4FRWrN2BD8S1bedeiYcdS6Cx9ABuK9xYWSrRuCTfGzRdegQNEqkC3HMt6kn1dWQiMgJrBsyGd8",
  "key13": "5C2M2qXVeQYgTdHud7rBScHPDdP4x7bSv2xCuEKQvC1WmwZgX5hpKNqpv9Tur4kPEbo6ubs375mxpQztE3vTCH8X",
  "key14": "2DTb125wuX5xJtk5k1jNs3MaKi5NqbMLt2ccS7nx38kEnMjjm1SxvFhKgEtjtqU4m8p3ggu7uoGwGUAnVE5k3LpF",
  "key15": "PTckHPo3WFKogSqjUDCrH8W7aebR8amonvJYAojEAiM9FuKMXcRpjNRVKjrGHgfBWeGWEbJUQ86J4QeN7iUPEC5",
  "key16": "4sVFe4iG19cYUxSCZh9YP63dmRgD4v86Z49HhpzUttHL49nSt8MU2zDimCRYajCztySxwCJx5XPVb1FgghswpAyC",
  "key17": "4Xcu7i38ha446q5aFoCND337JCaWE4tkNtcZyAZa7mpzkpXcNRxfHpg5cpiLLfsGvLFGbicDdAfZNVqKsCHsy1Tp",
  "key18": "664X6aYpwYFTjyzqXaGKL3mTmkhELLZCdMZ63MnZ56z6EVTwsoXozcAYq1ZLNVSvUA1YXcfKWwWTo8czNfqsfx5K",
  "key19": "5svWAUfFs9rT2U4isYt4vnsTuceTizzSnMGpYW4DnKunw7cpwo55c2Wz7UeSjzSY8X2iHhevfBqrcNapkqNMDiCq",
  "key20": "2syrD1Fx8Q2C5WvJDVv3PZtE6mrKamEmzZaCcw8eKEPahaA5WKL1NrX6JqPypYHcvf4dpnCdyGWLk1amQiR38CpZ",
  "key21": "4K5Dzc7i9r8Zp56Y7MQJK79ZzBGVxCf6w8Fkvq6YnEGu9asB2jBi2eMGJYFTf3AhmUCL3svJWn1YWq247eBksExu",
  "key22": "p77Dn24AscWqHNNTb3WzQ9jkw7tUreTu2vv4iyvLfrniRBjfx2fBW4TH75PwGUauDX5NKtzHSVHk4R6TTXhqafv",
  "key23": "4T5MHKHd5Chuo6DpDytzccj75ZcEf7aa4LRztb8GtjvrTd1tjwYCvquuLmyuSxRBQ3tJ5PSnDPSbQwTDcDbX9wdf",
  "key24": "4WFewNgUHdqMUKg442SDPy68GMvQPy31Sc87CrJ8nDdxhyGvDk6GtJ4XMMJD3ijiUGLPWfuHxZB49gwENvDH15gi"
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
