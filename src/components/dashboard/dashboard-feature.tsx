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
    "3StM82eE6KNp4FPs1humYsTncJvKVwWky8Qw3JMG2kB6ytYTtR4HuPk5JdaXoUM1jcNo5GnScvH6X7Q2QjdDvdqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8WT9hVHdJCvFbWxwnc4dcNnEA2VjMMA3WMFJDNkw99syQa7qsR13KP4MQta6G3EvTeWPE6N4M5kEPdxuJLLzZVD",
  "key1": "2SVixKR5W3bgbN3Fi87fubYxYXfyLPQ3kPiuFDyHn1T7kESiPazypHn4Z3eg68gmvr3L61PKFXHETY4BnDVUhk33",
  "key2": "4JRxRDQ59evNULFhPNUBBHydfHbDd9WjyoEqhkxvxoV5UkZf9BRN3xxEuDSF7GnxUcikcRrJsFsyc4JTRFznm6ir",
  "key3": "59CVC2J7UuwtpAcWCxSNHWvhuPWHc3hdsF2NdQvL86tGUmZhgk7gEjWTnoT8KxyCBiCvpmLz9G5Lss5HMsUzwny8",
  "key4": "ZSnej71piJxUDwonzkiUcvVEmkvrmsf8dMWGhRX5D53cq3CsLiKpi57z9UYhKZ5VJKKgs3wvCGPurF8qPVW3NE7",
  "key5": "vy8V9YZRiptuJmit4PEmyptNyQj54uxEE4deUtbapZh3D8DXa7WXdbWbaXY9FhbpbZgfUUQUeuWGhqHXyiaPxub",
  "key6": "AQNV4izvTeToPNeV1hgo3zXoyyP8LupbG8698aqy4bxAqHCZtgeZ8HwFdt45JVWeX5NvDzRT4A4RA6wQaa1p3ZN",
  "key7": "2HL6LV561Hq7Gw3LMRMCh65ohGGjggyGevqdE2f8n1aTi6ExWyrJUpAtQcs3fpAsjL5oc3cQX7c9TfjsNNbe6Cdi",
  "key8": "2EzLEBNrdtiBmXVHpY1U33y6jrEbosPkgvs4DUz7Ao5aZogT1dMNtyeAj8fpdhBpVSYEFnMfwFHgNDGoMqvkmxxi",
  "key9": "3Kgb2LoJZ8DHG1hnyprAbDCRcaXNv5BC1F62z2GHQR4f3rphUHo9Tmq4fdmGRjbWuqvF9Pfn7tEx4qpTETZkpZwT",
  "key10": "2HtnbdS2syXVZ6zq76CYoRS58jdTgWjrbj9XboeWMVGxENSbVjWYM5LJP1mALG8U2tQYTWZ93t95UT7TFLL2me1T",
  "key11": "iSsKgkp1Gtum7wSWdPn5ykUgHgi2RwKGMQKaRj86qm8jXA94vXFfCW5zRGW4FQ67SnGbo7MPRQ5k7rtWTDoGhpa",
  "key12": "4kjTQMrgvq9LLShTGRo1JRiQHAFmmZ5n3hH9E2fECRPHSwGtGwVqSFMXtL9wG75Sok4ppR5eyJRWQwvu9xwqsfQU",
  "key13": "5JBUoeAEfLwki7paPBe6xBzYPh96tEaLChTKX1BP35EDZJTPe3woFunLezHHxbyMWvEdVMxmmHKCVEkGRRTM3GP8",
  "key14": "2Sya8CKD8wzVGFSDkDjHRL72r8Tkk5UJkQnAhgg5Pjq45TZGb6xC5wa72QKRRQoSYdWLrEHQSeHN5HW6dCP3nSsz",
  "key15": "21S6BUR284xg4XXx826Rhd33Tc4hfD5wJBkzoHC42WwVi9WNKzAud3gHiuFTwMDHVAW824NwxJbFJWUA9tP87JvW",
  "key16": "4e2uZRFwGWdBRssj5WYBQiDbthAXpnbaQSerk7W3R3RAoESUr7GLt6FE1YuopRJxyHsuwCJJZgnGKYdDVQoHuLrH",
  "key17": "5BWeBH7KTAreHnvooPmDF2V1pEVgQUZ6BuzfSNzzGDohoDqhAudmaCccY3iGGeNAXGy2zxEqEV5Yeo9gB2CcwAsb",
  "key18": "4h4q5KDmv6B7bUcRNg9PGbsJknMJZPwxq6MxYRUebkAHuYN8wtvf7GFWuVtHcf4W19ttfrWLG4pejdvEm7D69LmN",
  "key19": "3fXaqPQVDCNvJuMVe6uLQSYmeaWPJmik6R46ncaSF4TuQqwkWLZJY7yDZ3EoAgCecw5n2KpNhMeHSqrkpiDFZncC",
  "key20": "4BpdVswyM1AtuCG9Qi3THhhXzQwC79J1fG2261nRgUTNBdec2U85QvtFDDbPdLeazK2vYafQxnCyvc9aZLzKa71s",
  "key21": "3FAsX6mSX4CLBpbQALCR4xjx9mkQSQV1sWBh9jwbLpK3T5Xnb1B9ekbJ2rfiN24synUWEMxSmeWvypyH9gcQ1gSs",
  "key22": "2G4Eztd8Bb68kr2PC8mjnuD7D7JyaNRjrqE7Ke2DZ7uDZZ4APvUjWidvYHpEz36A8pAoKjzUtAtGbx7upBHRXBNK",
  "key23": "GmQmNxpQvwUXmCmQKJVg4aJPeWLfq8Z6zAT3YYCLHDxNrWHLiovTZ1qB5YsdbggT48pjy7iRWLAjtxgkRSBGgwv",
  "key24": "5qMMQeXw9kkCHbZABaGQF2zjJ3JFuj8sZ5g6V3MP3so4QCSDR4CXrZ5hZRPVid1mya9SKPKwaCqQGB2H8SMCXBQZ"
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
