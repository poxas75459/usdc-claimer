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
    "p8qZo7uPcAdx4ywqgnxf8aWH89qxEu8XhdkX2tffN4JGwZxa8Zo5dG1dgPipK5zuERye9MPiEc5rmE31EEmidbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLDb8QWdJcFMeHoc71aLkuLuWXjTkkEW39PEJi1xXhgzJbUbvwChteiA7cgEauufHbXTHvZmqnZ9SFCFvUGoo3G",
  "key1": "2F58skZXCu6mtGSG55HQKKQ9qXzEVR8myBuuzkgbP3rEpALdWq3Zhh7vwmyRjzBdqnUyNEumtWL5qwkWf9ZAArmS",
  "key2": "36y25CFcb1L9j6Rck5AAHLzDfD1SRvatifyNMdR4849b3nR31SydPJbmEzu2RTEzowxRT2PWq1pGb7fNrSh6rqoZ",
  "key3": "44J5NRUCC9GGKhjy8SKNKSavp9ksh7AcJfcqNFBGczqFB1wK4Fq8sgRS9dHgMC7rWhEzcrvgzEJNbRvnVaKv27HR",
  "key4": "2cCKrBP9CJHQgK4NDSMdG2GfoHuhXgXGB5AR8rbA4Emz2PnHUqmRHeyafWZj5KsfqoQYTQneEKAnDTqaMx3PdsXk",
  "key5": "2q4AYucTJNyw5vJErTTYtshgZAHjPM524XYHSeAmVFMzWVst1dBAA1aGsRWq1EDv3PVkoWuBi8YpEm6FqYR11VhG",
  "key6": "2NRhXaAoR5hsgKQeRZg6gMuiouywAeuSA1VjywZfQRvTW3Kjg55aWCqD3W8CYKZrhdbQDnVphwhfjGz5sV5PnSuz",
  "key7": "4V1HFYf1wh9NyU1VqiFK4bEZD9szwCSLJJdS55gareeFqWsVxfexJKiMkiEHVqhthC1uN8vi2esGfZAu11ZewPXv",
  "key8": "3KDmn1uVEob2AXCctuLpaM2qCHdNQu9wYfArCdEjSTiPZpQc9M89QitC5KWtY7cFoAkhrZG3SnVCHekLy2iLBTU9",
  "key9": "31PHTMnaZTFwf66VQYcQHpZqPnhQXPjStknmugubHFZ4hAwaPKte1h9kyU9MRiTFonLNyxeHq5J2fHSs5JKuDXVy",
  "key10": "5CbpBsvQYF9pAtBdSwdLY2j71rjiG2YjK4xPpsZuEbdNSYaoNcfQRDR1M9SPRZaw9cXodHemfTJyoUp3Cop58PPf",
  "key11": "4jbaEZLLPqW67eHBCHnocy66kHKxVt7pZysKEHmwMH2r8AbuikRoE4kyNBcUgPzcLCphi2ZMTAcYpyaBqjPiiJ4o",
  "key12": "PDcUpiALX2Cs37ak5BPhbzLYJBrBJLTnYCAJrpqmLSombC1cHeShaqtPgG4EofrsZWPFAmqM97mxfj72oVtzVg8",
  "key13": "5a6Vnbtnbp9ieyQyKp7F1LRVkthksGGo3YLrkJJzfPpvsaKY7YGK8g2V6Z7PXPm8UGfFQ1ixvdyPscVPQNpaLRvQ",
  "key14": "r1PapKuRtFadhWYj9G8XhhaqenWLnLnrpXsMKityX7izP6HSmZzvQNFjRQT6k65WhHQiHfxconPfsDQJcqpLhkk",
  "key15": "3rgQkzzGbeekpaYxH3vFj6v45QhW7bbjFmWEtA3tBNk3GqWrnqewtnry8Ws8myusxGuNiWeoPtuWhGYtDga3L6pP",
  "key16": "5pgQJrHf7Fp5PAf89XVb57XJTGaVAgztniFxFSa5WK9bd7s2xdu5JzTVdjRzjE6RwoisEwAqTdhgSY1ee7rKhq6k",
  "key17": "2LSq2pxULWxVFVeAniCr43aW8UuBxBJyh5Ji6EHLFSFZ7fU4KFsag8myRoDevggVtGVKMAvuX939YcBigxe1Sd2N",
  "key18": "4CfynFbdeLg19iJyXEbrpKwWvGkAgf1NEJ7SuZno3JuMk6MxXt9cGiiUJXEy8Sz6zJgozRYARCWJdeqYALPCHmWV",
  "key19": "3okFKi97yyQEjRrzyiE7E15mery5bbhKAHuGheV2N2HHEivHWKhGzUdwupaQLcsQ1WWa2RBBj6cJo4ihKRvmi5fJ",
  "key20": "63rfZUS2imdvnNS4ZPpF2AtfhEACqFGryTppJCMY71B2z5aac8QXeeWbGjDeaTryzrc8nNK92jn4zHLRV7hTJoba",
  "key21": "oLBFb6VwPdTuu41vMQWULHZaixcaRnuktnqBov1C7RtSSaeC9tM6gr1fRxtQp3bMEHVRnV6SFqkpQYPybZ1P64S",
  "key22": "5nYHtYW6RaPs5p7fiWJBce1fqVGM2DGxH2g45rQkbk9M9APuXK5K42hFGtWsMF7X9LhbDgVWvcF8rVmaxw59JPFc",
  "key23": "P7EYjsre32UizeBjzHCHQKmw3cHbs8Guo9SCEmR5ce2ionXxigKfn28ARQkiN82EJGXwgMkneZg9Kn4iAXzvWqk",
  "key24": "2QrVGAaYS6dC2y6yufuc6ThMx15bZTv9UCyhrBmcQaXwhfvmaFjwnLG4KJ6MiuB45Ybab8CDHqVtSyvbgEEEX4Y5",
  "key25": "4QBQhvD7kooj1iyUbrvUMHPSXCJfBiRvwDQHtnLJHuqi3op3Nr8zWPMvnzJnR1uXCPmQWRekzxktG2QLX8vMXd8T",
  "key26": "4ikKU1QHF9emXcZ5vgXmc7oMAVotoBEkHC2spq3DQRYeq6J1ZZtsXsQDy8DJy9CFXXFWR9p5GXDti929xN7cFbAa",
  "key27": "2xK61u7c3NkBKW3y3q9DdchzFazABt19kbyqUGP8aiTNWojRL3MTTJjo1NWruie8DrBMjbqfKnfh2iHEw6i9yhbV",
  "key28": "431jr4JQnuMs85SCCCXjhehtbjrKqdgaLEvSamuA4uZfV6LSdXRj52jU42V8CepM1yems9UhHh4pC1quCkX7842c"
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
