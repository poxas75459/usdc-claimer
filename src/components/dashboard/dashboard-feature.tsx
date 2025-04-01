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
    "42eXLXN4NZBATWrww39nWs15wfJ22LcRCci5X5bWKmxLbPFVBxBaFFUdap1RWMKhiNkuGcGiu5Q3JLygzwNFkpHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBBjFgBamunMCrLuMVxt2drsNFMYt2BdrYxSJ4tfamTPFfyky5LE3NWK4W7FNW1MxabfCp5LR6jnUYkoQtp6p6o",
  "key1": "3Qhh7CPeTXu5CfqG3dTmJADqiJBMqmirVxDKZMH8sBeqS5FJ2eUAcg3STASg2V2XCCo4bMuiMJLGtm7Egs4fWsEr",
  "key2": "2nBWEvpeuQTViYq5XJmWFkFgCU9C7TpmPy6nSJc1bG6fiW8oSW5oeGwV6VSDXQCMANsurDJSiF5SVzju2aPDfQGc",
  "key3": "5DNJYPRbXCCUjmq3mM1mD1crRfLSzSwKfbodUC6U7GATiZDBYY4qGt3bdnedvLU7Bb5yPE6oQZRBfdDFHnLB3h1s",
  "key4": "3KbWanzyUpvfjejpEiAGv6TecPjJNByGmnxjAuT8braGhFshq2j9Swb5ErbyDpVdC7JDsompNBM4otsrV3fDppQf",
  "key5": "3xPEvnY9LagcbPa5Q2aBbJyv73Xa4jsiBS57h2N3bCy69Q7WSAcPDUVbUu2MBws5vaHLo9uZa87QtfddiEZjeqsd",
  "key6": "2796wE2ApS2dQWoTSyFFzXwpfob45SsgLizZbQt5qSPqotJEUY6v4Bck2dox7i5PabgpPbnBh6ZwshLdRezpSvbZ",
  "key7": "4JrJRJ8Vq1qMLb4U4SLSW95FmumhCAweRgW3g1mMMq2uQ9tkTSFGWTuEZ6UfmRsdbkfRNEAZoZQ9Fvb4AWCZw9zU",
  "key8": "K6KUehERETZNCzrJUhD9VFjbPfdVC1NVkgZPhh3xQ1nvsBCtx7mPV3fZ26JTqHobZyAYFDYQpdA6hoArHR5psMw",
  "key9": "4axRk8jed6MRzqPSrAdcLJJnxoQDmxbZGwurj9M3ACM3urisR2EPpG2ahAez2MRNmxJXfGFoyVjSfLiKv2p2WY71",
  "key10": "92WHKJ5DEMY2eHjbfMrUo6MR4pZj7smaS8kzfMk9MHsFE3WyDUUYZ7rHo54EpyQzy12QYLvwbiPZCy1bGyANzSv",
  "key11": "4eSR6wyiSvp58bfMtbCMNSPcMRucvTXfHSHh1rtHhpBRurqK6FgKFmCM87brLgeNiq4pektfc1ETc1nCV3ffQ5Jj",
  "key12": "5Y1HinuiRoh4rSCqswJhPAdnvo3NodxYE1ZbE8TV8vCDR2md7nWmSc8cgU6uumXknf4LifJsPxYF1NrQ4xuDsGYu",
  "key13": "2M15Jp93YDwuqDPey4fYniW39YSj3bnMjsS1ePPJkJ2BX9Y4fmsC6J93Cv5TqNZp6UPt6DNAiifpXPXYhQ5xaEiJ",
  "key14": "63RW8JFmrutS4E48VjoAeisFJg4iLf6SjeW4GPWdA7DRPFrCgJfebAsnCP3hsNKtCXXQRjD5qAu2MXjRuDp2NcD4",
  "key15": "2umNe5iRAsJg7TLjpX9yvCDYkRPjMM1ZJ4Uqmc8gTciAVocjzFdjjU1Vev1ggyeD3dHQPXRkiFwwCjAj1PjJ6sch",
  "key16": "RfxDH3Ggf3SFUbRt2jQQUnbErka3Z5RgCHrXtsNR2oDJvED5nHpE6jC12HMxfMFCUvD67qZX7RiSyCKar6Tik8p",
  "key17": "4aKDQYcHAGroy36eR1gKBiuUhiTqgNNRdws3Ek9fDU58wmKWMEGdXVNsJAuNRY2zSqXpfw5gtHvZungN2Y6F5zzh",
  "key18": "2NjGYD1c9DbgUfsFCuXo4UTvNFc1LfdJ9NFyeJMJnRkwcbMhZtFfdTTxnsVxu8fjtqAqSUywRk2nqDWdKri83QfF",
  "key19": "2bYF9JXpMC3U5LVBfXF8og3X1pGY8biBSfp45GjGHH8J5N8gFrvxqbVQA3UxfYcdPrbwbSuLhMCJZsEVTrEYzw6r",
  "key20": "4SS7NjwAMmKbc7yV5GnnYVHXbXrJVqNx5mjXnGLHdzFpFQXAHfNiE6YicHxqw3fr4sPvuJt66u48Bng6s5graznd",
  "key21": "4xGDQZaJRVAbnKsaXFdnkXAvqma2pDcuccVoMcyXeuq2ASfeCyKP84zitC37761MTJFzF5zypapw4f2YPFAn5foZ",
  "key22": "3aGTohPbg9YXngCVXs2bqKHpjBMeqLGcRW1gnLrDNb1ajXrTiUZgVpzy1XDeytJCSHRbMgsdyoXa9XbwVasifY2C",
  "key23": "4XG1QogUXNe3u3TmEYCMAGAyKJNUrwpo2XPpw6VRWUPiZKLeQf2NxUG57aqZv2Y6Nj24RAJWx8pwGJsAJgcxaCMf",
  "key24": "3Em1LCPApyuot3Q1DWZkHimjwLF3o7VWoiQJNBLGXfkJsWrRurh3pr2EheqmuwvDxHKpDYU7huX99QMG7KxnZWkG",
  "key25": "4jvkREV9gTySyUjTqEpvsaoUxduSGc5SnJio1Zz78NVRks7wBTGM818xqQ6ETig4rAm6Wdp6tjRn2Y7w1kJ15Lc5",
  "key26": "394jSXnXJgU6uKnYzdLg1bQMDEncQgJr2ddLpC9vfsuSskBQn3R6ZwSBC8gqLKQVRMx72dvtt2TZSogWigQVoVuj",
  "key27": "2tbpRv6u9UTu31VZz4p6ZXFb9EZN3YY2w1wF2AGpyugbfTSmYHeQnHuuiJqW8CeTBs17FzdWNrJq8GvczEbX9vUc",
  "key28": "ojQTwi3z3NmkQsvWaJiTCPEfbc8prAbQmFUHyee3yHqQX4ejXFVCnupfRxoh5uecdjyLqcYHnzAmH4eUDM4hNE8",
  "key29": "fMzkXF5mUapWMmZWAVEYkvmTwp1KmXCKr2cZ5k5Yxgc2sW2vZSVzN4fWgGJw3mutK5Jv7kQqUgs6kR1BmF8CV5o",
  "key30": "44y8QDoWwf3ea2XqP352NzBKiBnj9zNiyHosmmHDgnPqbmZmWT7WwvNUasLYUzZ8RGqrf9j1kGsjwFxbaupqpRUv"
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
