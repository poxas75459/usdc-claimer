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
    "WnpAptPM4SRSLnnMXvpw29bjcZNjGLNWEXwd5FZUzYjcEkyBFskiuVmKxjrFWGnAPjtZPZ1AqhJ81PsBTkuAhRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yXzMrEipjpyKyh8j7aucDK3A9TMCiMfG28obwAxodY5fiAc2XFT4H2ejy1Va1PBy5ESnfi4VqHHDPBgXTLh1UnT",
  "key1": "33Y4t6BVsrQ3BWbjZGDB7UR66YQ3gnERPuEKsaSdQnSvAhZBpSTYvsBULFM1Zp4GN6LrmAPQJj6YDBx3P6PtmhL4",
  "key2": "33Ri2eb7nMk997iRcRkDtW3gp8Fwe3V4a4jDbn3sSJ4D79pjLrLLZTXx2pvZd6W8mmUsSHYYxbG17rNt3RzPu93w",
  "key3": "3itphPjzfzbGtc64vQs6EiMjVfA7ZWRpyjMkgmZYrUZ88gmEZKXXLuCVu9R8pbz9sWVQtsFRJ81hKU9UUph4F33J",
  "key4": "5eig3gPPrfVMBji9TUQEbAebMgFdAGgpLWq9aMhh63k1c2k7p1c64yDWY51rGGe4XNDqRNSPNvGFGZ3v1w465Bmh",
  "key5": "2jRRZurRKnHCEJniZXAsN4rfeCncL2URvxLCGPerDhdxNi665nqC91Vpvw4vGxmxx9AZA9V3H99o91u651C8ajev",
  "key6": "4tomKPLADZSNJwLXfu8TJHsRFFgh5YJigPYHpgfVgtH6Xz34DvC1kJr513sdDbG7VnnVXAjm5R2MKiUgsMQpTs3F",
  "key7": "57Cm4L2U4QhfJygozL9XS51hXYh5PYKNLPsfHquC949wpYo3dVYphAr6tfPAFjaVWfVpw4mcP6AjVLupXUh4CeSQ",
  "key8": "58DKBnMJvpMttmsFjBwwjzFGgfxMRgHU1bDmU9hStqsgmX1YefKUzkYCECUYVArHXdP9GXQSM2BUsP8JjVnkY6mr",
  "key9": "4deRq8EoVxNTc5wNTExqBKASYCHPFGpuaqc7VQmP94mxiEUJ45wSWbMBUroNgTPWeyeKpWsyn7R9gmduD4C55kyt",
  "key10": "3htaRrUmZXM2mUZEW8Kwax1VHKnKoomzkqTE6T7u4bXbdmdLuLBHXv9Cg6pY6qqcHnjpG5xJjBvnzGTEMNBLogYD",
  "key11": "N8pfu51GdQFKvBQdHu8tSgwZpdEpXCyGD7vhjoaRPYmzjFHyTto1RjWFX1YhkEiHV6rzXAh1hwecPTiS73D9FCR",
  "key12": "7KsnE9V3cgzjHyeHhWe5DLTnUamyh1tQPZAyg6X6qupm7erRrBERRunRRWFAQnKnTo6SL6oRCvtPqTQhoeLpo2W",
  "key13": "2qFxSW91s76Y9TTCMAGsiaHJWZ6AThde2TFkxtbYjM1xAwc9HQgTrkogFFqWuiguffsb341HGt9KvpRuoCiqTFzJ",
  "key14": "356JSrYzfEPTdSnCbkYqNdcuisvXiEd4dLQ3XTjSWXxDDscj26rp1cbHt4YPJQQ6aRpFUYBH5fPWq4qosnhn6Ryt",
  "key15": "552Y4MXRtx2qhe2Xh9gKPHSdvocT4FaAW3Hv6PHumXmHo55KDmEEDey8NdgahwQP48HCMzXQqfVMyXrkQnmgrYFn",
  "key16": "4sK6fhCGDoyGwtgSjTBFzaWaU66UEqAUiDYWVz7BfGZqmT23NnDmdHwpFcw2UxWoJ4TFfYVZW43bALZM2NZ1N8dZ",
  "key17": "2P1VVkryBsu2Mcap9Sz69bh1F2CWZmYFKFZUvvAxKUgMj1eDKNu7H3T3YiWwczmevyrnquZmUncecZ8FE3Na2YP7",
  "key18": "8pZ9XVcg1TeJ53uV78dQjHQUQvqKbWhBNp4dZgXjt5VEWCTJXMvNZ1VbntNysu85kuRto98G8U3veoqT21vjz6f",
  "key19": "4gxXwv76xHx3a7cATo5Z3SqhJtxK4ZXP5r75PKF24yFyVS8dj1s5oxUohTTeXvDDyrVYKezpYHh3htdV2TNW6hWC",
  "key20": "2a3LPSrubd8J5eNmDmpsZcFDf9Xh5EkTKAnWyW6XDA5dCQw8AKWwhqF6RBsH3g6WhS4SkMPDw1QKmJ5M85MeAJxc",
  "key21": "2jvriS5gCDw2r2StunhwCbUWCVhyoXFNxxTqP7zQgJtWBug1Pw1wJZqTm4qTYBAg9apRWQu484NMSNyyC3GXY3eA",
  "key22": "4d8yYhA9fMb4XVbGSy7L82x6oW8MWxWu9rmWeZWxoQ9t2JAoR1zqkNQimnbhVSb2CjU2deGT285nUkzHLkTaWAox",
  "key23": "4vYxumw3TaxXbHAQ78M6eFhT1Roax2tXBB6QjE9EmyYZscMpc9D8BnHbeDF8NoEpG19a1RgEjwvSdiT5hNRSH9BZ",
  "key24": "322bPst38Y659PN7q7tcMciPXgv2eDyC1NXgTT6YKS7XBMuNgsnsm81XD5rQGV7jEepSqZJiJWsyJ87ZD88RWwLr",
  "key25": "zZqbUM9s87Rig4Ek11xVqcKyEyCEBDNqrvivZsYjAmDz8Dxt5ddDQ5jYgnNQEJWZKm5UFtuQUzKbKiSMYXpHZMd",
  "key26": "5wA4dytP9DvrTUxV9caENn3u1dgJH5KDn4cSQEvQCqpU9Zj474BqrdWM1G4TEizCvxaedi7kDpq1aW1whjEWiRJb",
  "key27": "5dQwheK9wfshCEwGCvhd63tpVA1J9skRupFEYb1koU3BmMhp3HXud4CTFGSwm1AGWBZkcYkLCyhQwyaayA75htZk",
  "key28": "58Rn3X4mb6rWQJZav4UnZMyAxy6a8Kbzti7PYS6C65LnGWzJp719vTcU66mejLJjpBPhyUXhp8FPQNmP5eJTUhwX",
  "key29": "ToMossKjwcD3b8Kfn8ZMEcFqSmFHEpZBbAoovtjTdYp1DNmNuKJq4vkshATNA3oMzyo4MsdMWepR3kztvHXkWsj",
  "key30": "4tpemS5zHVa65js8scTVK6yrhPwz1q9gVUZsRB8QTNPiDVPHsWihjT7gd4hYv89JJM9eRTfqewWjbedvn4PceZv7",
  "key31": "3joQpuQ3idkjEwxfC9aXB5BPLFoLoLQJem3RHmLqbEmTWYxF1oo3tCPjWfFiZ78bXCcnLTRbXnAACCjuirNUqzhG",
  "key32": "52ZRngzWGVSUrf4cadiYjKpuqypnP3jAcbziVfRNJB8tYh5FDwgj8Ea2r4NVyNYn6v9rYszHc7kEg3pWcDaveCXN",
  "key33": "aacEKbDPWv6xrDGC74nFGzuPGeQDdjZbpPqj77gKzLE6UcqMw6E21HqP96pbB5CjBiJM61CKYtXM5nXqrHpk44M",
  "key34": "4tu82AyC5QAqTbpDBu38mzbMccQBEGF3hGTeH9URDsLTBnxuCtppumsUXM5VCoa4ez3y1wYwAFKoSKTkTKHNq3Ry",
  "key35": "2wk8hSYGNmHDagMhUBjWfieBWoc9XMMhKwNRdcaMHkPJ1wuNNARB6BdZnC7rs67Ze7UEurQaSCKbtzPTyGunHwvx",
  "key36": "4PWwLanNQdygWC8Vh9B9Ba7LrMgGzWZuJJPE1Aor3M9U8vx6jgMVmjyj3Vfvn5LEYpyCs2sBBuLQ9PQ3AMV4zXj9",
  "key37": "4dHWEsQamHT9pbN8HNnNK5V5182d5meXuxoGH94NdY1f2PrnVYic9iMWtSJ1cGg5DfCnfR3yNEtiMsovzVTzEUCV",
  "key38": "2MUgtEfbXUpV2aWCENP7PVkGxu9gE5hGgWcszYJqBQGP1uvMAZE7kRGVcGdNDdk8upvfCzGYhKJMZDo7fk7pinng",
  "key39": "4wjFGZnhFy8eKWERfLqbyHoNHzuAZAdmfh4GAX2Ni4pCxF9uYrydebmw5UzAaLV6hbPwZVgmNpgsUrSj5ZKLyqjX",
  "key40": "3KJVhfsi8L5Vdcj8JfUdEax8ccUQLKws4SEdXDZQxjBMnAUToTgXSPKpqbMMXdAWwUx7p5b7YiRT1DiSvj9FfdcB",
  "key41": "4MTBZo9uzCJ8TpiKrYdhJAh27qzQhnFuqhwSTgoyhZdNHf8Z1i8CoGn55pLAHzeiA2inmmdYymVD88Agc476T5KW",
  "key42": "xVTVxGgD5PQmsfZACNGaZNvFuFuHXCZUnSCUAXd6BsdrgbPherdk9yBZY1GzmpBDaDeupyckR8RrtuYobNEAFv3",
  "key43": "4CxxcsfEW7XaguaP6U5wQwgP9G6q5Efiwwjw3EcYEbXbw1VFYERwaKyuBKEssUUz182Za5xYZNQ4jnWcJThSBeXX",
  "key44": "3KnpTuXc8Jc4P8NAReJNL9qHdB9WqyUG3roPDeH5Nhrs9oC5b2upAPaJNLdE9MfKahbV6EDRVyHNWpVmUf7gmqMW",
  "key45": "8ZM6d9kpP9fBF5oZF1EjZsu5cvpAjsXCJfyLUziq7djhVjSrT9YFeFm9417YnGTJRtLZXihFG88ub8qT9Cbi5EN"
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
