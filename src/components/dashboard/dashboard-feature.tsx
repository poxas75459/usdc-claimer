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
    "2nhq43inefiSxySybKowMk7sqxr7aRr5iX5RMRywNpfU1LPCmr6KzpRg6X5N4TrjhVDYLXKU5xLzL231dzNAFQiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzbfJseRJ6FyJKpitpEyqMVgA5VLruJCwoeCEKPHaqXXxUZ7y41861Tj4Nr1pPb7w8rQ6zXJoBi5P5fgF6xSJiE",
  "key1": "4iBGnA3d3KimbqVhn4GmJD4CimJa28bNnRW5Q6YpATmhqhDPeTYQUMvzVoGgnHyofXWiRqiUdBaw2HwKNMbiHYH9",
  "key2": "PWkpSAH7CH2goQaCfBqb89A3g3gGCyQoNknfrZtryFNGtLWutzZDdq5doCEzFq5T3bA9wNQXHnkDQLpkqk5PNwC",
  "key3": "2dsgUSWuUdi8eq2Q1Ws8K9B9cRDHrE7S76CWX1MUQXdmwaDPsSWTmqz1nFTxJ1GG8NbRgUDJVWGY7SNWNtBQRXdV",
  "key4": "3eRTrLQrGbc1nvoZUBLiLcYSKUFqegfaK8ij4oAivyAJRZHCR83KxpbGHPh5EToxDgn59dt4uR9auURytKUaTHoB",
  "key5": "wnWrT9yMVMJDXTqQt1SnhnN4JD67DTT3CdqLFoDLtHzmuc1A57yBbBQpHxxJ26Cxw5GQ553foqbuu6FtkqHDLeu",
  "key6": "29iqwakWZW5kpZtDQDuvsdxqZJQhGMBQ4KHaiR2L7X5R1iFaHe3bLGBAYwjyyDb7US7PXEWdRB2pQDjezR6a4TFp",
  "key7": "2hZPdAtNQubrXtDkbogy2Nc5qi3jeRKzoTwevZGnHS5r655jxfNXQoSm9wXaVSPDhBz13oSpsrL7T7pzh7VF1Rsx",
  "key8": "4o5EakaWtyCT6M4TDd3bHC7z3BbfxZHZyNu7fp9qhjoP1PWgfs4Lmkg8pxiVpzsLYPJBi2T31rtorGDRyS6UvxCm",
  "key9": "2LJMMjadmKkxvYQr8NTjopnAcm857CjTJFkDMPuxvZBMzzmWt8V8cDzG8a1SwaJvWUsgJN5Vo8Ucktqchqc2JzYK",
  "key10": "BTxSs2x8L7qhw9ZSynQ7A76Nwobm7LPBWKkCYmXpFhKcpEhFAAE9xR3HxHwNUNZ4XoJB98ikj33ACWm7BHfr4Bd",
  "key11": "511B8qqL4Ys8tHzx6tG1whX4QxpL2o2vQuVtD9TwywonGQpBMRXZCTPYEaEmkr67KBc8NEUCtPsJWJTF4kLp1z55",
  "key12": "nwhhdKGmTi5msb7nSvgQNsbf5ecT3ZpPxDQP823WH3j68eWGpra8GsZw2ucx4Zt7FCYdhdZhzq4J2XgReMtt67x",
  "key13": "m9rNEok7woAT5CvNS1V5BjsCwtrWstNijEysX73KD5cj8MP1gvXKtc8v8QDCSx7PkcwjpMeZdzAHdpUctBTEeqP",
  "key14": "53zVkX7DRj1SmJqFfziyCQ7K4a4vuioatyqYgG6bHUqmd72wtVfHW6umwWk2ijdn6qM6DgCgTkXoiqrFDJckswJz",
  "key15": "21YYVvPHZ7L6DD3qdfGuSnDNaFDZs9DoJHPkeq7xXMo2b6yCNqLLViZAFkE24EJ82utjDyArriM5WdyHHdTQQz4C",
  "key16": "43wGPKughXMPkzDczLWvR682vegh8Dec8ZkY7W9zco8Z6inZGSLdbUfHHZ6XAKAhhUkniLsbjgns7Krd4znmPSPN",
  "key17": "wvbAV64tWHoiQzzpTDkG4PW2Lu3J6nm73EE6rnLXUmiWpXAvv2jtt45Roc1so5Mamv6C4bBRv2C7gwumKnX6psU",
  "key18": "2KmH6Gf7ZeaHfCi8fvaSeRZiu71NndexH1657tCtYp224sfzchXEunCPiaU99dvQX93Agmg6vEHSMcCv3uWCRBVG",
  "key19": "5EUYanDXRNY4LSKTbFvVM4w3yHn6S8sqHB7gC6ZkS86KYNxCCk36oWR1VSopxqW8wxhwijTuRGnpLez17Hz5KCut",
  "key20": "erz9cSiCn5XPuXEAzjxegHj8SqaHdznhKZwm8y78NC8qQVgq7ufG7TTiUgqfkDrGFRjwvvCrv2VPrxf52TQbC5U",
  "key21": "tJVZiycdcPT92TrSKYWSgJG5CJEdnoXghCZ8nvYBSKqA8JjzD4tyG2xVuvXinRWTrNHUU64dgCxJ9kRQC3zsu4F",
  "key22": "5x22GBCamTn7tvgfRB9ZVknxad3igiFh4jS6Xqafia17DMmu1Gg5TbQE8MWf4cD6Q5PGi7mSBzzpJUPmrnfWftwc",
  "key23": "ZM77sNAzaVo7tr1TRH5RiaNJM5fgB6Uw79rxDpr6CpcYjTF4DV7r6XRFuLK35XExfVE3Xu5gqGQnAvzhHW4H4tW",
  "key24": "6oEtrySyZCTgAtcLb1i3kQp3eiAM5md9gS8LNZHuVB54dznwWmHkG2h4njgCbWMX7XgJhtVP9ZMWxAaxkPnKBKH",
  "key25": "5XDpyBV6w6cUS3nzTiGoDi9ZXse7FRszgiugs2mGZJDb173D9vC9EDmsWrtDf4he86pgkFMaCahGZXQgVQU7mEu9",
  "key26": "F9HdL6JmZDyTFBuwGassp2MMeErE8b3gWL6dEkwRJS8XhaySfXLrgPvE7fPv5HEfqPgepHLGPQBJp4UtWvi7zHN",
  "key27": "3UMtX73tvnM5QhVMiYi174TDb9S3kMXeCVTHM81CEhKprwQ629F1yHwPYFfJYHmdjdDu675YFZiEnCvbiyrJirx2",
  "key28": "2gmxBLq4tP1P59TAXSn6AK46tU2kdfnDsrXAkYSFqM1bVADJwdndhf8t5i8VcN32pMinDVQ8XaRVXuSpxpY3CEJt",
  "key29": "39weZHkh8JpVZpv1gZgvWrATLgXD4kQX6VKBYjFXxziPsQhNUJn6e6jnHNquEgR3kDKqeGteV46SgX1BaMgRwZKZ",
  "key30": "4ptcRETraohEksvN9NVWYSS8rXyL1GCHmSawUXawNTwkC6SM7hTHG9eqiiv9FaujBPz2BWpZmSzVBp4zVB9sgvJ4",
  "key31": "2viiSKydpJaiFEFRyUTLTejLbs7ZNAZhWy9BUN6noiHw5RPMovqAvm1WyGgbM1JV8ekvkoS79A1fLq2nh3qGDrTN",
  "key32": "2r8kHokEVzBdQhpD1nrP5foVdLFwpy2o4Datka4k44Vcdi5THdQ4AvTMkB9qBXR7qd9Ps6YmWa5MdfKtd5HRfV8t",
  "key33": "2b953KmZjxc8QcNT86C31d3G4ZrkX5MZUpPnBW1wxVfBAgypecqB8NqX3M6zE9xCT7GMQfcFnwyyVYkEVtyppHaL",
  "key34": "388kSbE9YyH48vX1DsTEBvgM1qdD3nnJNStYrTojUQ8bMgBXUyyNvYqUh4rt1jSrUL5YgwPbTzoVdpJneJLTkzFo",
  "key35": "2gKkECPoYHM44v2nNrHarTVBRjUEWKuERypysVN5kLNkFAGR4NwW14fBaP8iJYwZ9QUVwcPLySLhVCbuWg637w4k",
  "key36": "ssnRWDbAHL5geLMrexuqTwwgg1kp3fjKd3LdnarpDaB29mRKbyCZpsC7wJzjcGZ6QAPTjpCWpGqV833DJJCQd6a",
  "key37": "2anv58WbszXegiNoyqGQgHP6NuQfAZWmY4VGHhesN8edrZcstnsAdhZ2DM48RrkqQMmaoQZhFYnbEqJfwPH89Yio",
  "key38": "5TYVyiQBxh4Ab4YgksprVtg1LVoN6N6TTviVHHpJVvGwA5eZpJhvHeMDfzGvUfeMUzFxx5q7W54mhpkxDsLY36Y3",
  "key39": "4f343ZVecXqnRymhTVCNYCkjuuf5HXuHn7jKb99tJe2jctVRWCP5o74hAbA1GSPMUGJFZ7xZV5eM7kcD8A21Ft6d",
  "key40": "4MgoxW2P7SwA8Xdk4BapujDjfKjFqc5JiePXCBDGxWvLV3XJwmmma1VZCDDrffstidYgr5scHrf9aUTNhrLQ3sHJ",
  "key41": "3gvkBjCRcVPRbGPpshRFhZzg6WdwAJixwdqqpjLJu4vZ5p6wHQkJoqRMuPKvinuLnexeqrxDgWhaapn83hhsFeVr",
  "key42": "2qhKqVzfUAgDjzNdzX7GURhUJbYJxk7ckYi8Jr5pDSoxpY6Q7CE7Y5NqYfjwLssF6R3G1pxPUvVH8TaDq4Yv2Zsi",
  "key43": "5gTFuipRXbZtNbbRY6P56N9Ew22QL9q4ZKzLnTAngGdAkBxwzFBujh6jUX84guaEMrbdu8SRTDrDVEYXDqgfk6z5",
  "key44": "4E8HcJWYDxbAHzkhvxKciPM1bEXroHTt4zsKrksvygF3zymzDnMBEk5KXQLgkK9mac8HVCr9noBJF1mFj1GTP7MG",
  "key45": "5UpBMoZBJL8YCAtk4yoiiStQMty5Kpk2Y2GjKYb3vqYKbBRvpnUw61YY73nwXUEXfyLbvE2YvykuX2VRhG5snFhf",
  "key46": "43GCQzXEK8auJePu9vcaQw7WCUVX1AXhhdNjS2acMXJfHE6JR8hrSVSxhrszHGp41eofaZZibQ5UNu6T5dhS7ygA",
  "key47": "5B1iaKUpQRCq26vnQ8dAXEw1BAXmgqk6KMBLLKw1ZDop73PfgBi96n1aCM1rKM71hzgp95XaXx2CyW792HZAzpdB",
  "key48": "5cgJhcV8U7ZQdU874JABYjaaHarwu3hejEPQ6eGEv7KHRiekuDXWZ713absWzZTpk9DAh4BhgDfjX61erSpAJc8P"
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
