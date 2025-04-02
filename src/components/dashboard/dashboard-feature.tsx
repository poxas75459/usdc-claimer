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
    "4s6kDxbEMyWvMh89GLNbXKeu7Ax9BYgz1Trqx2scXcpJJ8WSiaYpuK5GrHb8xfdjXfVZ53Sv9y6mXUkaGrB5vU9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "261sb4s5FmecjTQ1ewjsHyJfMnHic1JDcGHJUXbbwqGBJFVKoqnAfc5HmoDKkTQ9qfmZk1dHtTjxixSBazErxdA3",
  "key1": "2d4ccPF6pyjva3PrrUPbJGaMZbhrw3BvH9eU1H95xvsqLr5FhfwkMkzkPNN8PSszjpVYDMvUXqX61Vie28xzQxzG",
  "key2": "ADR7FWUngcJstumgMTkAPDoBLA6xfxwgrpbyucwnG9xcGkejksK1C7LswJZCaQkTY8Ax6udbK2dGvBt8N1Jj35o",
  "key3": "47EJqWkdGuP66MZUHHNEzxRVsEQ2nt1o4bkQVwkv1PRpkZpmFcCGBCjjeozo2DU4dGN6kaori87f9gDpUThR1qf",
  "key4": "36hPpDzUfEVKxdZUMJBEUDt6pjtxVorLwye95L644j8ahfVM7HceEWYK8wyU6YsqxRkJKB4Zr33DdGfJV3RVrTTT",
  "key5": "SBzzXRbh6AUc6SKLsDZthAYaLmCmdy6sGsLKn64PGAdhp2mhyofEcwnZdVXHjuyYRR5PJzpq4VykMGRjTiQguni",
  "key6": "2sysrfsAJJtvJdraAQeWcF2jCzZdZJ9f3CmMCx77rmkSxLNdvWdx4mHJAumjgVNJpScQ2xKCrZ9GERTYVrBP7GF1",
  "key7": "22ASX97KRjwGaKxu1Sw3KfztxR41NLrHshHQqR3a8swonhtYzk22KFbGVtvrPeZ2LMN3bpsDdmzebUoruLpBNqco",
  "key8": "th34V47Rq2ooFTomxSxmUin4A7aDYPy9aBn227Wt4jQuTrQkTfLGq45VJHM4CHfChuif5nS2263P2vfU8TCSwdp",
  "key9": "2eU33HNMNoNDQ8ksnty7jjeUBBAdSRr6qPxx65iY6FfkRouF6AwhGnEzXosMRWZoSzLsZJeQnc3RCChurBkm2gC4",
  "key10": "3cvUUDYEeFsMxPv8oDYa8VpuKifvdbfrhxeR5DtmXGWXTanu8jAU7kFWKThtXCZUV8xdBQsnpEkcJCCDbVr6pbUk",
  "key11": "5kJSnZLvicAEbqqo6rbyYoT37M4cUpDGDLmi53eshzdLGXhzcpgvLLZsMQuZwpxtAFWVoAvTxTwmc3s2js6oqE4j",
  "key12": "3D5XADdaMdrTbQQVesybSz8qrhgDTZYNpPAGzn1R6Kdn2UoQSpuHfuW9hNEvVdreezA1wTcf8ntyKFwL8xU4eA7V",
  "key13": "3yZVQU9wyM3kZiwaarqTfzwv6xQ5b11VZ7Qg3aE42TQBMqcNkHEhGxC7t6wABzL9cKBtnGWrfzpqoaJb95q6tTuo",
  "key14": "gaf7kh7GiKHbp5Gb7wjfqiJDYufdowkU9jFapwZyS4Gm4CCnNhFxFXMEjcuRsrQkxHpBdKz3sEr6GSRgVAQaiJR",
  "key15": "5L7bRr5W7JhjtkiUe4uhFZ7zCV8rnguaZfgqaL2fof7iePXV9y2qkjPxNXoYzvbaWugiicTB1JXJqvdp711U8gBM",
  "key16": "2gpLBUeCBfAuAkMBcVCVVM42x7J65GEbTa2uqjS3CtzSFLHjQU6wQhxCq3MmE2QmMxDBpJzuGwstRcj2exLXKyCx",
  "key17": "4syhzpfKqbjYUF4u9NxqJgWtFGKxgUY2RAVoPPHu8wZyiARhYZpvuX7C5ntYju8t5TdpGjpSJQySiWWZ94VRrMFV",
  "key18": "39WhbXuBJL612rHFk1aEzLfXMFENFgNb5S4WvvBA3BPuz2vu6RPM5ahW2sG3zKHgGNhPekdtpxP6uAj8Mv3grWNN",
  "key19": "67dsmmziJRJ8oTR5BKDroVe3oj1Wyh6HrpsN15tzXWYtJ5WLo3enQNsj3nBLJ7BQQ5r61btSni6sn1zEVuo5aKvR",
  "key20": "3DxmvrbFo4CMmNTcsy6yhBaNRduBNujHjrXEZGCEM6jqxf6JpERZdVdD3Co5ZnyQdnN6TcuJtTZCSsU8xL3CqLM6",
  "key21": "4R8C5JGP5utThJHb1LmG1wbDBjNfSCHCZTQq9KdwU8CagLcyN1mVp1guk6sBrhv3jazb5H7cETfMUnKzfvWdAg3X",
  "key22": "5tYwbzFgXkw1f6BCBJHUapbqFkotyLehAQzbQ7H7EmCJS4fprFjsdexfdVvwhpR2bVSuCkC17BypmrfwyH9Gj18o",
  "key23": "5evni8BBrVkkQYY2josn6MB8bWkvcsnUsAt8sVv73LXpv9MDXtgv35n8TZn5G8yFpF6FfBQKGYuWjHdQPH5cpbQn",
  "key24": "3yZkPxjwaGQSrwB6s9C7iUDLQPk9KCxQPwoLNhz3dR2N6ExMBbuZivYMgoxzRec1gqmfUucmde6W5N6s3LBZJomP",
  "key25": "4tj6FscgaC8uJxg4qhQ4eddW3gs5L8zQ4JCC5fnHfFAATY5b1UofUjr2Csm3CoS6CtP2ohHpDA6KXu5Kot3xfrt7",
  "key26": "ngt9A5XM2gQ4nVGGCguCGdaZspfmnBYAhUTTAyXhd1gYRLoSoNHq8cqpmkjYNM1kcgEhrRRHg65XZUQrnKvjDRM",
  "key27": "25o9cvQRCjb6Q9Q93Nk1X9JXsKfmVkDX2PRtDoadpnamyQFiuECNeKZdNNZtrbJVQpWXLfhpa8WEJt46JH6Lv5Ca",
  "key28": "5LreUQZENnVhxQEUT71ijYnHFf7QF3o2kQqkgBWciPfBmjm4a8UdJZDgUNucC55CjXXRqRi1bjG8cbgttqUPx4ek",
  "key29": "4RdT9Y9SEdjHg6ENaxzMQLhiDXpDrGue3nPsQPfcdad1NS8yNcvp1a2GLLmXWwP9gGDQdniwqTHna6PoaxACm4Y6",
  "key30": "5TSY3yn1MmMVvwMaPib1W3eW5WWoLzHi11oLYH5BeC8GGDCF3nfoWWCak83okkxrKidCBFMc5gjAoqjVDGqXiAeb",
  "key31": "3FZAti4ZPjJHf42Jm7CVdcUgutnWny1Pq9DXzvprkxb4tppe7mAPAo5iSA49VCEKcw5iikELLf3mjtbCWjaH3wWD",
  "key32": "3S7fpuooRGEqWE6DkxQ3H1Uza4azdLLUniU96UUH1n2he3RnYFaB2ovgqE4UjMShNSaWcKgWXrEcesYKGqTGGUaN",
  "key33": "5Q84dS9obtoGtCFJjsXkaV8Z1WKs6ftkoU72AJVGb7Cioi3jwmpiodAgujCjGAS4x6ee1Pp6wVHM8yKStLBnLeqp"
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
