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
    "2UHjrBFQxGqSWgQawnZtqVe4vuZfvMABFb2LEvvXiFshnVZsHbZep4cULi8ZkQhQjwN1zkWziVHx7cVdqpxG1BR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFS9UMjijEyVgBDa2cD7ZwYSTkXEJ21zSXdXBbhsSJVT9dp13UnDVEjgdjBcj5de5mbqXE83eAuumXTu1thGifD",
  "key1": "ZQq66Tm1QHVx42W4g66ygLpL1SBF9eN4X9icsCdhw7RU9VZQCrLgSzw3kgxvBmZ5iueUDRbbioiVAr7topDCktS",
  "key2": "zQiTHv8ixXK4viW7k4HBiza22CXYS4sehVwpTSz2epmutfHMVAmoDrbC6YMpNuiSwsDfC7ePtVstEduJmY7zuWq",
  "key3": "5JBPn9jArf8i23j1Xb97KiVr8WS6KjP9AN2UkxVgTrTuCV9ApHnAfx7ZyRC1Fw1dLStmW8tF49wK5QhqiekaehSF",
  "key4": "5ZJ7QfWXSLCD3qCAiRqEMpHH4pj4Hkxaq3BjLM87hfQwQk9NLMfGGbmQ5pTCkm7HWsV5FvGXcFVSM2PpqZtuStZd",
  "key5": "235s5KvfjuKPxMk9ijqr5yjmpvQcu8wVDeywAsmRvpAqUgSR5xJrH6ToR2tGGiyCMqDLwnNWi77eidqdwomTjcow",
  "key6": "2RR9LY7PJCLtj6nwqUqXy9cecWgNx7BW5vWAmBCb6eCXovcpRUC4CeTnMzGBtmGUpsCfYiEcYJpRxGkeLMcvXii3",
  "key7": "2JRHGRBFv5zXsrxA8SyydcAQkAbdfKZGTDWcuvHdYLG3NuC3KLHA1cmZPuq9ggPAgPKPhJMKvsq658qyLYJvwM1C",
  "key8": "3XxvAxRv9L8wEXHGfBShRSzs9TojLMrUvN2K96bLFc5NeYSJrfzwXXgMV2yq3Bw6nHxJBC46pkVjAkMtN13qjduL",
  "key9": "3KziBgBSVM69UzDsBbQcU4Lk6GphoyMFostA3obpisphEH2z31s6ga5VUcjje28hwgqqH4GgELTNyUsGJvo8QcEu",
  "key10": "3NZMALwWyHokk5gXYwy6FQCXHFa9jQMEJjJkQh4asEkUSiNmqR6pj2sL3APVdx5D6X9MGbYDx3wLmo4NszkYXfzg",
  "key11": "LKysKVrB7XnzdGpG7fuvGJPwvFU77TZagnk1qcNxAfi39fHLSZtAuH8eWqJrHF9xWbXuQSN4YhfECCAEuhayq6Y",
  "key12": "4Ww7scKCaBwBgvS2Y6DggtNhxrGRqP8ZTZjYM2NCeHqJ4wymqrhSphR5mFU6krUBvmm71wLkzcsmG7hbLK75TJ2q",
  "key13": "2QVkmRaTCaegi42cLTtpUUhS4NencCSiiykWexEeACKVGGvJ6p3T4tH7uKv4vsZvyP8JyCa13seC7QXTvNXrHmSF",
  "key14": "zLDw5XYGrr56VktRwk31W8fGkf9RjVbWyNXdJRprExPj1b6MNP441xaWEgNMWFBFu1qDXEhW4VK8T747nUiPaZy",
  "key15": "61AanwJMD5XYYycgMm8PayPqD3amVX2ZEhedrjVLVavgDch3mGLcSGuRn8wmcNcqSFfJmsL9QbRimX2tcEeEkP6e",
  "key16": "3yUuMuWx4mcWgCuGqiBNk5dnfhEgxjZPhqtgxRuADpWKS92Jk24d8fGwME1MDR1CFfA8ULbtV6Y8MxdYsdd5NQ3F",
  "key17": "3ig767dZ71fJvTPXjQyrewBe2HqRWYBY1VjV1vCU1RAqFZsM8JARWVdUFZYsmPZeazCs1eVU6DcyofrszUagxYQd",
  "key18": "4PvWaCVBcJXcJWzDpGE6FqSni3Qbp9H2Sci6HTgRXPHcRc3pozmLGrdkhFA5NSq9j8FeL3nT2UexQU5HE4xMwnDt",
  "key19": "3px2sd7PQYmhWCuGgEhAPGtpjFkSNM6QiNqsXdzijcrNE5YP7Eb4BjYT395M4ecp6N1h8ziTMDagAiiQ7hQE6hjN",
  "key20": "5FzkEY1xWpERNbLBJQAUdRaAWfVpUdFPr81PBEKpoRm3L8vWVVR8bkv4ytbwvMTaGMoUBxozBHiXqLX7QqR1XS6W",
  "key21": "5vPWqqnUZAcWN6QuBPaWabMZiepBPg7UFRNSDcS9r3Bb8uqRyPXGP6ZfycpMHYHKsfPDgVWbT2tbWY6NMqZocR7b",
  "key22": "4zjkexAn5jq66DyGwNt6QgGGrJPHaUKBKjVrFZeoR7BkYNSYxvpUJZvbPndA5RjbdaUTW8pRCJKqb4iRCiaj5gC4",
  "key23": "5coZvXNoS4b7T5QWJdZUCCRpCivNvPCN19oiBNBFQjiqYsqkQcqLUGT8FhuDCQyv69V4BzaeFa9epewgyLTEdCrs",
  "key24": "65nUFQzYVsfX3Kn2HhcTDNCGaS9c7zCBfd4woDMrqhSxfBurfdzpoRH3Lx9nUUbet8cwTqrcYgXXwT3fZMU2ZpDu"
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
