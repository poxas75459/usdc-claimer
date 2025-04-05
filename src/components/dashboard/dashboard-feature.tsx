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
    "5iNJWLHPi9HThZGJZyAp9MUj7Tdeeq1AcWdpYnLCyTRkvD1B5zb15hsdpWHatwVXDWnXQpZ6U2jWoYMVevg5dE8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wp3UXKxH9PXs7QugW9MLfucW2hM8oPfx8vKaiC7GCXCryg3NRodGNH7o2mg4VsdCLajkwbpEasirezy6YgsW6Ma",
  "key1": "6nhihUhAHzk6ibRHCumeXGVXvt5UGZS7DG85688koSmCgzvJLDyGjLCN6Huyiyu4iCGguVDet45oWXNioyy1Vtr",
  "key2": "5Y8kwd1q7pfbtB23NRYpGoaD9pcJCbaPG7xJSTL6b8Qk7hxX9j2fnNP5cbVEZ8oXi7KkWKJseDvn3DVfdcc4FHyP",
  "key3": "2qLm7KE8zV1bE5easixYSRnP3W5gSq372wsqUNaEqB9PoiL7envzFw65BznRuYY7hcTGAmmqszNZ1tVFdtrcXRp",
  "key4": "4Zafcv1dJhybwc6mLmkTXiVjwTfa6V78L4rn29XyhQCPYiSXmDqRaCmmchMFgcnpKBjLvU6BmGvwcqZyBvWjN6FL",
  "key5": "5egixSMZ8rTWNPJJA1Gj43a5kT4bYQTbKEnvsahWRdC93dTze5s5RGyHDrpcwaUBNQuLeRUfSxe2zugzKKdM1oUG",
  "key6": "2puqsJcFZSw853edb3guHBHsLXW6GtYQN13LGPiZUCiisnQnBE34bhcbMtBh96iuKMkB5xoU5MT6duHSYCJhYRQa",
  "key7": "51qgtv3cRpgKzmEqcGM7Jam4ERJu92B5FZY3HgycyHqJpKDE38T6ui7sd7xqT9w9PDoGpq6Gbute4mEZnJjmRu1q",
  "key8": "2mDJ9mQoAUi4PsZRAa1iBpTjt4YNEWGRM2T71NY93ctBn8TtK8u9tkogzgqoFpKZrYtUdjoDBa9mMyhHxVtbo6nv",
  "key9": "4gfA4a41eyGNygbY8A6uveKVv67gUrVFUfHeRwpmrBZ6Hph9xGkeozuZok8VH5akvnxAUZhbcA8PR61Er8cNFkza",
  "key10": "49HgvKoJJpKQJVAQpL1KvkrnPUJgF625C7rsxCCjwPCTD1cGvdTmpdg7yMTV5PaTzU7fQ7eiwf12TTNJyNFXGfnW",
  "key11": "4nWUQ4biQR3uSHs3Km1Yg4dDvs6bxhiFchtjUnESZESmaaWwNCU5g5NVVMHtV1rhHxbxcmZu3HqeFtaSSw22HnYN",
  "key12": "5SvvFhmQUwQRpkgKeUxFBrnpcbUbwNXF6yfZTYnuFeHrXpTyr1aiPJMW9PFzxhhxyHtPLFx1mrT3pZUAJPtBrcFW",
  "key13": "3nTF3tj5vcetyztEDmAEevgCnphqpzWmVok5fvUiVijp2RcjV294XA6mDkTvY99HfmKpXYMeXcZyVSd1U7Pjojjd",
  "key14": "5HVYXhSXdDawqKoGSiv4h2rxZ7BhHqjBrMuJUnjy7jyEDLHDg9kmEKqroikM1NGssTbvW5BAeJnJSiTaUkpPH89Z",
  "key15": "4Hx1yu8sdmEJA2azkfXvT2i4qMpfko6tYk3ZbLZ4eoHuYLF6YJ9grafYgsTEM5ZFnK4ZMNF5b3U7bcKTaiJW2xPP",
  "key16": "5j2tdpijvNWbZVV1QYBAAesZyFQtypbEP7ospmn18VixBTuV4CRaj7FgH1qaN2TCTbYPQQsD3zq66suULymnz5R7",
  "key17": "3teXaWtzwkunzvfE2wKMruuZ4RjirahSpE95xoEZ7LC6bMXBqgQ8d1KQBoEBKYjUivmvusyAwhS7d1yknsY9wLyN",
  "key18": "48UJg3duGytyrHk25hVQKZpiXNqVKS7t5TehoGWqPABw2oYKcdNMt8LBHgTKros12aFksGGG4hGWz5Dqp6hQBvia",
  "key19": "4GbkvPEyccZ9s9pVJQ67iU5oE96rXtaeNSwkMMEcvzu2r3pudejxS1Rj3YRBXLH8NaGx44W5Dp316nA2QwG7d2Vg",
  "key20": "w1GARVrmYc4PdXAERofYn1Fep6yeQyQ6ouCkoTehN6VK17TKDeA8hzvPBSo64WhBJW6mtTsqn5z3SNkx3qAkZf5",
  "key21": "3AofQDp3LgLP4qL2rxHUj1YRC5xg3XRzKKDjyL2ZeYKpE7SjAkmNAopTtA9X6YzgRDECFvkorh1Q45dSWW46vnvd",
  "key22": "48qTEL48fWpjYBDRAWy5gG8bRvA1HzxJZXdrc9wVHC8RL4gUiUNdoAkcqbJuqqV8g1ydGqZ1mZS1U35oxT3cYQRJ",
  "key23": "3PJLoukQcGssbapDsPXrS6wmYC9YXmqcJvH6WQ2niSz4CGJA63hSdpcjJesVkRBXTXdNLpGQXYgzMso6oRuMmujz",
  "key24": "2KuWYXUh7wJghYtB4Pb1TjU2ET76jE9jbTGgxfmUWnsskQ1pFiQQbnWTe4XT5KmTPZ6NmMLKicMTk4xFCRu92Jr3",
  "key25": "5oaao4Hh2TY38FXZE67B7LNUrEEwT9tEpqtJwe3DzAT2eMySLJsJ6VPTJfQrt9Ce2PHphQ8bb8D3nDFB17xDLhGu",
  "key26": "cu2PZ9Ahf1DtT9Kz9PspNptVWVR9JrDQki78dHLMqJYd73a1GiRX2cTX4xWuMTryiVJamagXmHZQwrbawjR1E8E",
  "key27": "3DhXMCPVmacYJHgWcpek7WsYAaCmqK9V5e2CsaMj5qwPdSsnEzUpkLfMkaTioBt4ir9uorVTkf91fv24tefykukX",
  "key28": "4SvrmPucAwRwUHTrdpUQ88SiijHsLBUVMt4sueErD6z1KupAiqjunovhFG5TDGf7cbMx4JgCPgptaF9fSq8HRJ3A"
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
