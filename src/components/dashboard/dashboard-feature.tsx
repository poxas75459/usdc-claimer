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
    "3vmGAd3g5Z7af91QiNRuXQHL4dkiKKMofeQmUV8FdXwfVv9tnqYWg4TLayPR3gwv9hcaXTGX9AAVCqPiJbgXEgbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nVyJfjR8Zq5zVnS5Thu6AQjq6fPZjWnD9c9k71KFjbK58zWQTqCAiqTGa47sT53FRTmLHeLJ9c7GZC9PgAtxRv",
  "key1": "5J7UF1SXL2xKm6ESTBLFB62BPUjzEtgTvbC1kDDLvJQnG3qkrf8kmXn5QELFf4MseCPewpqaBNGQYLncUsyGPxJN",
  "key2": "27ws3vzcmtBwtLyGcoGpLz6tYop33hVuHcKATcwQTWFBfNqcw26kVwy6uwJoYTQEELFpTzCdK4LKpbWqhnKzkVws",
  "key3": "4LV3JdG8ot8KhmHnZp1BoYHSHThKTayiWEwLwoN85VweogcBuf7Ap6vNVHfqcvNfaD6EHyTUodpyQ2sgzCdzF618",
  "key4": "x1tXBnqxEFbx3W6HmKmQz8r2HjJQiiWg5MSh7xuri8CbfNaicJCyMLgtW97whC4SaQqciBTNLVFQCKQayvPdoyH",
  "key5": "3ePCKG8ugNUXLD92JuV2AyrBuVoYm4BDHst1d3j2M3152yqaZCfso9Sosttv4wXLKuCDPUJAdRfZhz69f97evX2s",
  "key6": "24iJWT6BJ18f3Zy8eoq7fgCsgSjcnCQeCrGWzQgcoSQdeeXnUqCnAaHrXZHV6nWe1JHeawgjbaHepQjf3VAXucaF",
  "key7": "5JZefHPRVxRL2AyDmHKXmHQSQEQdhpdPU1kedPAb4p3FRWfopQE5fc1VK4bxVGP3PqyeBBpoJDSZstrJGjoSAphK",
  "key8": "21EKPEUS1QcEQa9CcMz2u65s7spqfD8N5yHDseWTBShuEMpyjyix7JoDy66ZSgz7QvGV6BQFeKtufzQ79CfyaRUk",
  "key9": "2KkYHwSAT5Rkt7JCoX9K8bvWJqEcZaJYoPv9ezkiQGayHSwXeuqiRBL5JRwYCDpqV438UQUzkitF2d5XsfmCPgRv",
  "key10": "31HmG8aFXEQ8QUkbAKpZUg517947bQEvabtqMpQ4nxJGAxnN9neDwQVzpn4rYamehVXqixJD6iCTH82zTQbKDvjx",
  "key11": "5tsdADyULEyzmoQNmGns53S61DZ5q6hgtcPav3V3ma2pqMjUfJw3afngfXcLqNwHta1XB6P3122KwQfATjNo2Lov",
  "key12": "2Cp7czPH4ds2RS9mXxsdzjJbUcfKjT7vVPidb3DjWe9SBsnzfTRf52X2pxdpSa5MXwWV7ki4S5N81uNVFWFp5sp",
  "key13": "EDsuhsj5iTmevrhyAhVhLDcYxWbS3jK4FJb78KLdkQCcHSLaCE5N2KUAsJFzdHzqnsTYe9whwEM4xmtY7emLMGV",
  "key14": "3tf4X5vqGauDhqdxfTmbsuKRiyaLBcodMaxxgqAfpMLWCAvWMR2wDjodqomdFoANxdgapqPhWWERf1g8upiSLz1Y",
  "key15": "35LwYKEn1yebw7BHGHmKjLpXqyJgsPAxPpYTgBQ2KBJXWHrrWFUxhspestAnJCf1obNQJP9fCaC9RwCJLyi1F2dT",
  "key16": "5fhqeLjSPBojb6Ea4xQZeR1fV32TNtyxnCLTEdioQXYegSaPLy9Xm1d6aL8GL9cTT1o8Lib9NBwygfoGpD3xfg5R",
  "key17": "vPdRfchG1byEaa3YKRVRmQrHHHfcZcEXr1e3P77RkGwDkttYxUkneWPhVZ9KraASmA6uwBkSutbDynvppowVpWu",
  "key18": "7s4uRFzn6A5zGQ8eQ6oz5Rwu7GGp3X72Tpb89WXLF63CjSpSTtZEvwrGZScvVpZ6AZPcLjtNFFUcptKPov3iQ5T",
  "key19": "27roy7NMGpyLmjc33DKq7bVbHM5TZt2WREqraTKRj5bUuAwjzuHjHwFtTymEnUSHooVLKSEP1m3XxSk7HxGvQoyH",
  "key20": "6Tmt9UoGYTNkBvPMUxBi9qoTrkE1NcNVgef3rP9cLUwunDkjDPDsGEdjs26EyxZayqX7HS7V5CRc3k8oTt8irLh",
  "key21": "45SmDAPuT9DCkS4WPLdWy6YAJ3HhVs7GZzgeaXGdJ6Da3NNeu3qrGxCyPRcscYYCfpNCVAPwH3ZFjARJNdPBcfT2",
  "key22": "9dVHScWx1MC4CN4XuvHoKj3z5TyPZ5WRYcMdhe3DgvZZth2ZSLEj8rtTJUiZsYGphZTSQZtWRPDydG28EEJdLV2",
  "key23": "3jbMHWx2c699dMAJTLkT1iFiRjHTm1MciQmdkpsjkYJLP8i2qAGBbbcLbL7YmuzkiLhb9r2wRaCN9Xs8YP9FiUHJ",
  "key24": "43tJBqgqjiC7w36cWeD3jZcxciKx9PfL8tBSCDcMBinsVoSCuwKyAT6Y7h6atmoJVsrPzPgw2ETePxpvtAfDvuLL",
  "key25": "x6yTesWYUvLKz1GTFu1EqCvsqAxnhFvsVTwySi1sueZSBvb7SRUj3d2MEkxXxNUakFYcDbMJctpiBum6YoRDscj",
  "key26": "Zno5oATACkWRiMGfGAYdRZoAn22e9WJP6XuUwi36fJm27DB9NuhvF1BuDXDMYvzc9qmqeYREej9q8Zb9ugVmefF",
  "key27": "2nkbVTi8n1xdiYzgMK7gy4VY61v7LErUm5Xq8f4EAAEg37wsvc9nNDhmuZsEntUgWd1KJqgDsYwpbqMWigJr4Bza",
  "key28": "3jBAto6wyXCkJjR3v2de7Awr9KNdSPBpGima3FpxS6VQLYYA3ouZNH26BCQ3B2WQyxCrVRt6VqiJ2uuxotz3KpEE",
  "key29": "4Kfqvj19KHjJu4CvbzTjFA6pnZagZ8WqnyRyXnLyi4HY7rqdEaVSmErNcAL1RocL9BZLy22kBSL4DzMECz7WMDe9",
  "key30": "2A7SgWFAyMwi1ftFdw1KaNkLF1hW23z3m8Tye67zbsjPBkDxtbiL6wcCrChTGNEgaxU36q7Pm9euSZbqLrh6j815",
  "key31": "4pmyg5Dq8MhyvrExzodUHPQXk2nUgnNaRhCyPxH712knSovQQjrNBPwmWKTBuYR99iTbcxN93Gv8yEddB9kjGekw",
  "key32": "3Cp9f4ggYBw19QpvYeTxWP5cWBQuqxHiiSZDrU52ncCVdWrsFcCptmYPchvyGhQvRM7u7HdeH8uVDTBsn1LHWtnq",
  "key33": "4G5BKK5oSHmTin8JLmBfnLToqPFftYWox17Zsy9QNV4sMCaJnDgeyEKRoYnCPJFSuwQQZ4X4dB3uQgHcV8wbuwPp",
  "key34": "3mTns7DNn1tr9gX5GCjivgKsNquuJ7gUNhXZqPHijwSdhBXz4YhekJnfFHBe98SFtBSnbSzSWbjAL9BXFZHGKJBE",
  "key35": "3yGtvn4FYT7zRqobg7KrX8NnjvqL46xEzmVAyAV72B4LtrEa3gkkuzQ6owN4j1N4LZ2j32HvjLjaUk6CjYcU6ixK",
  "key36": "yBurdC1t9qYakvtztnKVj1zRj7WQQECFEoN6CiJN4VJiYsqceBu4ntc2oD2p7mxVM9nxapL5jAAUnkBm1VvQZnW",
  "key37": "CKdjPydB7Zv5JqoJ5J8oftNmUZT1gSzwcpk7nFgHbZAg2UagynmRLUCdN7BgSzHw58RWZ7tXhUocYSovYN2VRMs",
  "key38": "2nW2n4wtDaD7G6MhiMirPF84sMLa5NehZAHCtM5HzabWgZCL8n2x7KGwLw9dFrXRFuHu7VKaR5QBb8Tm5s2q5rED",
  "key39": "3Z5yL3GkiBu8qXDJoxA8L36FDdn4TLkmZ3jbuEuM8kqoQCb4qEbgVZJoKqG8LtnbeGzKGRXisQDPvxL3tJKwFj4j",
  "key40": "xkQt8d9uvHDjdTvAsibqxBhhpW1pUkJ5xedRyXyjE3xgRoSfnYqdq54eHUaPtJ4vLb9fpztcgM7xJqsj3k8i6jW",
  "key41": "2a43TBRfpHigVF79tSBQW6mcBuRreWEWbZd8WE4cvMVmYZ8Ep3ZWp6uLoJz6BY4RpBh49pPuJQVZWXYMx76VWDUK",
  "key42": "NgZwSBGL1dtQmHX3aVpJ1ydtryjWxPmfvqGJz9izPVmnGTDooT6MFWw2t4gXhiy1vMhJQwC1x22RyLhSmiCwrVR",
  "key43": "jpmEiuv1MpUJuPAhYpK3S7DdrGeXUVf5rAtYVr5a3UuZUjMYP8gbe2kmxmPKxczYFUAyQNysqxouo95FsBpp9uQ"
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
