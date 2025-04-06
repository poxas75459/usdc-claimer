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
    "3QmJKek9Cqx2Rhmiv8xwqKBbVt9xCniTsAvQbS5BxALRtN2dSsXzYtNtgaYsU2pNU1NdzFmhncdzitM5Wcby1ScA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1aTKAjajQqLiaUMvpaasrVQagX1t2N5nmAKbS5CgKVR9zixhuF4NwxSKrVXvfQKFRXPpuTne2Ws6zmm6RLjQwgc",
  "key1": "38ybKNJzU85gEpLfuouF1EdMqCZFz5GxtzLHtv6kFDXVTLuCD1XfxP3ySuFgp38LWMstjZ91ojtSvF77m268V3iR",
  "key2": "3u7apSwiZz1e4esKcLcYtRMertxJp7SKA6acV6fEXCJATTRaCSu6gfQcvshLhcddDPz8mdxGdzhYTMyh38hjrwAW",
  "key3": "4TyG7wJE2uyBvpqean8WhXLeM2W3BCMnAXYGJmSHVmV7owx9opMsWNcGDf7CAMRd6QSkREALzANDkufamx3cqh4A",
  "key4": "3UAxjYghq9BSdsRrc8VFduxbo1YgqhcP2B4dgatiq8Vcob9nxDe2iXDc7QAyNhfa93zYJnhHtKBpqqeVB2iBGv2D",
  "key5": "5ZzZaNFwEtsdz7DYgof8mmnE5WNsb1if67Tuwvjc9fVkdEFLX7DqhXjS2XH2KxYs47KwAFjb9hvagdvmYrk2Ki53",
  "key6": "p1LwJ4PjwoGBzspTGKZWdDuXFyt7bkB6eUZvpfWVgj3oa6g74QtHW47oYuDJZjibZELcYM1hFfGuKXYSdCCM47k",
  "key7": "3bEtWqLEtwhWTq1yvPUZU1sfzM7tpjax8JZEVWYb2rs8pXGtLgcH3yig6yWnK7YHmQPbua5SQZGdwjw3zuUTgfom",
  "key8": "2Hoab2G3mTeXMNVsVApsrCm1CVybAjoP6pPmLXvZuWQhcm7MccYvP2S76XsM14fsjzkYsTvrrxRVKH626MFh2wuH",
  "key9": "3PehSC5WwMPHG4YttQMSykNxDXDm4NLp271EXw1VhQxxDmSz4yk6VrsECyRosMfpEYFCynazsRrvW6QSUW84nduX",
  "key10": "5fz9rjpFpTi2dT2mEpmxVg3AzmKqK9Ci7dS1TFK7hNxKq93fNp6P9pG7XZrW3vx2m1xNMjqRBZDHcMC3MSi1PCrx",
  "key11": "QqNqY6B7JwenEPpoi7UQKZCTDnEBYWcGgRzpQ71oz3sD9eyEqwajDmwA1XaLXmnkE5Z4aPK61nF6y429bUGYcga",
  "key12": "2erUfpZtvnvwbdwS1q67kvv7ebRTi95qcDXN8G2xBK6AWt6hgaeazfD1KQL4eXtKb4QZPygF5jUWdhLJGVF8ZQRs",
  "key13": "2eZkqD9z7Um5MTBdHcUMD8BAoCH1E5njhyHrDdJGSVnuEFTzgdyXWyQZmd88CKNKTwM8mJsKU1nz9gpcJ9LypmWH",
  "key14": "4iRapYgtTuG3VY4iFZ7mKLvfEeZJivcPwfcyWJVsT18hqx2kUYy7zramBYeDjyDnJhmJzpz7jGdNP7KASqqs3tgU",
  "key15": "539XTwMTxM913jwX7XcVYxrs91z3wkMR5YtisWoEcz7jwHjVZAocqYo63HftveGQ5NfVvFq7RZ3gfhSchapD9FZo",
  "key16": "54mDvkPFSFqDBrzpCgkNfbnitjWFH19PL8S86tR3LH4PTGuNYC759tLiYsuYBdgZBdH9Fs29hbawcB8gLwLCpVcQ",
  "key17": "Lr818EgrCwnhy6Wg9YMA8vXEJZJghW8PoKCKARYs3swKs8zgdtPPKr7tqsZJE3gAErBoiuyNN1p6CW8dZMkDCKz",
  "key18": "4zU69RHEK28va962sQQAqamp5ATvtfR39QCFPTaB5XKj2v2TFGrdkfLFR85ssWmPMrdnUpRRPLDDsndgSzRd1TV7",
  "key19": "JXWrVMT2qhmUQbX5Au3zTikbkVnKae7k5AiV9SzbyBEib7q9ECkvrGm3S8CGA5W1pQW1ftdG7yBi1YFArxSMa7V",
  "key20": "64mStJ488dr4y5Yvur5FRNgUGK41KuedMiFAEXTVicekZkmwqbBHhUhLeCnFxEXGLG7Yk2wSKu3s8GYWw5jwoqM7",
  "key21": "3BfVU7Eg7YBXKEvXh1WTAvfWmtruqsUKneo8zf5DiYm4zgy9hiTs7JHEAsfSc9ehhpQgHywrXe1s4d4RTbdvzetz",
  "key22": "2A2QivCHYdqJRe1Gum1MYmi4mxNMsqmB7v4C5juvfb1kxgKVRemwCphV6i41CD6WRWRaQZVet3DwhGL5sJF11YEU",
  "key23": "4bAsLBjiykVukSUzsPDTwLikxGDpXGFFXLb3ksMEu4REAFGgEePSDunYLXuPnZZcM12xqKiEpMUdygRHV3PT8GGA",
  "key24": "2Lj8t99bUAFnPqqLXnfG2VwcofxxQ56nX2f43WUjBJxJ9SPuWe6sWwUjQJMosPJFFBU2UtotPVWeDGF1VkW7psxo",
  "key25": "3D6dRLtod1utYDeMoZisq157mujmwW6V3T5gjEz5raxNyZUBCk1SvnskP5aofMSupn2iUBWg8wen7YGWM8zrycBY",
  "key26": "4yyPF8Jtdn2rh6ShXZjaF2MRgXpDwQe63xWcwKyR6UMS3tbFidfT8T5FKsRfkDXPUHhx54nUUH3xq3VUy7v2LMD9",
  "key27": "5QNBsiaWyfbNmdf3qyQMm69BBqZhdioiEyi4dUPVGCUkh2JJJ4Bxkn3cFesnVe1TEhutp4vw84FEygS9fABJL44s",
  "key28": "jcWouLX5W49gQXcXdtRZNDsacKrUQh7kjvF6N9xU1WTCRJzSmzh63CzYnLezYxWKd9F8wTDprGVdpGeH3QPn1Rf",
  "key29": "xzYcBkjqsNJuZeP9uAbw5afEu7RdjaH5WAVVYkdSrXCRnBBQFq2AeYZhTkanPfj3xBqnFtgwvgZLwgPXsPMDeCy",
  "key30": "VGQ8fHpHQ7pDKqEbd1B2WQhFmQMLcDqtJtgFFa3TXH2gStiKQwM9QKer85e4BeZtSmLsTScDKburEYYKYLbBihm",
  "key31": "4aC4HdCm5iLV5eWmTbPRRPJoP1e29dXkNr1qF7PKThCM5Fm9yvzY1NXimgmnCai9LwunAUCr4VjGNVoNNTHqp5Wp",
  "key32": "4MqKmFZDtm2ukvzhjeHQEL6L7i4Wk62mTNPYpsGMTWSL2B1CXKScofNqj8HEenX5pV9HGn3BqBTjrSvSX83hDe8t"
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
