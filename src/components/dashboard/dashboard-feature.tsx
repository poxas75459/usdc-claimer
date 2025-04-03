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
    "JrryaVNZph465ngJLRbrDxsXYVsdtWnUMENxFkD7WHZwGCGJE4mNWMEe2zRPLcKMjLy63C7M5qBjhGXrEio7i2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "329KAYhytp8xyq7mnCXeZrHsapEh64E92oQYCUVnnXcRsaPMFJt6sgT4peJ7bD15BvSsFVZyZSLeyPqQpsdL2cb4",
  "key1": "DDzicjNqEo5eXUmBa66i8Hca1nJQrnQKbDmHt7nebEbWq1TQ1x8C6Pvy2xT1t5vqPtWwN6gqB3PPEkdc1Wn6GNq",
  "key2": "3uYFTHQHdwVtgQd3uVfFJGJp5PtxFnaSBjDBEDbd3MPSpJr2NHQWjNQ5GAnsESq2sPp532EFcdkJnKf1Y6JVfVTJ",
  "key3": "HenB2Hv8dBBN4Z5zu3nVh5njDbQ1fMoLRy3aPqxfkC5DzdECwSHWu8WKCeqk1eqsyNYDmJxcBSWYTuxCNeSc1To",
  "key4": "4GEut5V6iwsnTCyMPXEFjjUnR4rXZbT7mbytRxnFoHNGjg1iXusPmJHnPJ72oH8A122kp5MpN5c8GxeeVyFj9wvL",
  "key5": "4b6kLQpy6oMe5ckhdCFzJKeT2seMNdMc8upbypvcYpqZ4XqPB9kXe5ZJMgbimufDpzEot3gikvqYhYxLXGNgkf7E",
  "key6": "3Hm2CeSCk3R2aTqKikoxFi5fwBoRqndCntvjyZEfeRNm2kPgfMAAwB5wTRMJfTA77pbKpUieTnoozWnERbKXpTr",
  "key7": "638KyEmFxvioK3mUxRMoe1kyRz2VTVpybDA4YJ835ufCPDvMdRnCakdXsnBkV67cR7cvyLpCqfGhRuTAJpVvBeRt",
  "key8": "4P9xyetd16Zsdr3dw3hHGUE78aFyA66JMxXeb4FL4AFgmCv3HcV5hymxey3xHziJgF3z3jGy9LQaszQm7kdbUm15",
  "key9": "5yDkQFNBeN9LUrdwt942QUWjQe7BDEBYhAYVuqBNtUJs5hL1manBraambCcdJP4gj1USH3LV6zJfB5E3cAp2Pg6k",
  "key10": "4RayuA2me1ouNphKTCbxYyRJoPy2qW1wHgoDQhTEtkM4ZneWibSwmx44mX7jHJa26psXxApeQnCYk6ierSgHjuNs",
  "key11": "4eW9iKqhvP7DCrXzHWoXnz4WZZnv9EmtXFna9BvzRHLxMP2iaEagHNtrEWVAeCkBQwKQxUhSxRyywRiwzhW9HD89",
  "key12": "mYFCLuTNQCEZTVuNtydyjqsTo4mMeQZzDvUD3tzEmHPQPwZgHsZB69S7yG5Mp7v1kBQTEPHQy4KgNsYwMHTEgkA",
  "key13": "2iSA9hz2oW6AtKbt62VgtGctDVoDCVNSKCwD6qU3u6EELR1VHZ5CrjhYzzxgk571pwcGTa5doaGhZ2vvvJUaBLFH",
  "key14": "5BFfqMQHy1RTSn2HCg8QYCfB6JXzQWZebCRDWXorSc2747Z3qns7SnBTgc8cFE5oESjNew42e1a25mqvx9NuVc3k",
  "key15": "4CD1iwtZd7GskMKQDS3rcRcx8dmR94xuwNTyPhD52UGwZV765xDyN5WjyFX86iyxRd9j73iFUDpVxxUWMzk68gkt",
  "key16": "jBtpheicdTfubhtMJ5WsnpqUuBc9RVaj71JdNjQtp7Gf91kkHVQQJNDdsXjfJZZb6LqNQM8hjiR57dXaCLbf187",
  "key17": "3rotdr5qCU3NnQbRSmqFjcosX5pAMmYgBzDV98weMdD26j4ibLp6yHFxACEAHxsTQ6fzyLcHQ46zdkm2TCyAKu4Z",
  "key18": "4TwpyH2PHBnMLTnnCMXSdaygFY18KLyrD95L7cg5PXjTcQ9hqYYiLJMURnTTMv1hYsgefLxnxGUaSrZmsM6ngnHC",
  "key19": "5YK2SeLeA2xJfVyH83CfF5NeC86TNx6XmpxeD3eh326nw9xw4dQVcHb7tifs3tGXjjZ9HAYxCZy3aarFKXSDRLCu",
  "key20": "51beNduStVeuYNwf9QGr1G17Shfv1YjNUY7LVXhT2nn9iZnzAtjYrqq9ssZSky9WUDWNJwGnRQtUA4q5jAQzcddi",
  "key21": "4sVfmABcovrKWVfickf9a4oXL6DcmDH28JuGfeCuJbqbnAPvpH4SnDLqSi5HcmK8GeQ7nGCMDiesVWDHC4EKFxGm",
  "key22": "4jbgCStYnzwVnzSzA3n9gvU5hLrX9aKKVM7xpXDQTmLGjoezV3UTKLf3ik9gTcwjMY4Xn5fDR3Qci7FhYTpb2uaJ",
  "key23": "4yrpBxMvGdfR4FCgbnfDchPLFSWzMX3Ufki8pzSsBm5vEFRaeaK9e9SVTVKM2yMWVaQWUF3aXreswoCP4NL13Fpz",
  "key24": "PHMEkT51vjdRKzVdCYRHL5mnZSY11tV1U5xaDRX41SaucTrQTqt8udi2FiEz9ZqLBQYXJrBtrFiK2GWVkUQnVQ4",
  "key25": "7V7UE1TNJmoPPTiTn6U8ub3xsEpmj3wH6dkYKvVamCUNhSXukPAttjtY7atyKLLq4fEMN7ByFYWtJrAJaH5BD3w",
  "key26": "4TPqQPQhPaiGEmpykWynUTZa69iLS8SGFac5UQijf5CVscDcMXgEzDYXAijxCLAaRMtA1w2gcWAkqVJvALk6JrRg",
  "key27": "3vsM6uZ34KD6bsq2Z7szfAbstRZizc6Dhe3D8wFt9ybyv9wwhEFLgxf6yUWbH7C3v9vmXuK6fzgqef5pFoCL4iiL",
  "key28": "2bFyR6Y4fUj8fR9iPHjTJJc8BMLngRXZM8biZoKaE4jLkpNmefvEdRx1CC44gNi2tSM8t9bEgwLBJ3HZL5gSswL6",
  "key29": "3ncJQ1pZ12Xb4T7r5RJfPpaZLpSfyypMZbKmjf8K8puHv1S5DHbj2UpnnAg6226NUEkTNBt2syshWSwqeJ1y5gcN",
  "key30": "4NdZoT3BUwYJNYBakg1vWZGheDBksZkodUVBtomn9dZx1ujnwz6jmGBsePn8t47YYK5DiuKdCn9tmzgK5gmAb9hx"
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
