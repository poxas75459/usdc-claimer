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
    "3kdaLa58SenvMJQU3Kcyd9nRWBY1vXv5CJ2gFb8pa91WutLn1UiWgm8s5T291ywi5xfyzFMZBHf4mVLkH2HqpeRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YLVux3YZixxrEFeMF1CXdkASV1dYDLJff42CWwyAzAz8tUmcsUdcpiup7YAbotfkYPGC2Jmzg8C1kNbt3KG8jM4",
  "key1": "33J8CcsTdFQ8AHH3uugmZnrHYAKwNJGr5XJAxPVyYc7yBTTypriG9cept62JSHuRNbf7SuEeu3PvcwUPyuo6155F",
  "key2": "5Dx4CxssWQkJ1Am5foc4bi7hzmwArmLscqCXpN7UM5X5iEYcCtM49zu58xApNPCszHF8pzNEqCdpwVmsR7YQk1hE",
  "key3": "J2xJ9auHcZu8As7wD8L523YRcPCwxZV6Pq9eVMMBXNqukFRragUTD7f29bAZ8twWLq4zV5pvrDC6S1fa6YmoqyZ",
  "key4": "5JYQJvhZYHDX58S83c9wunSAPx1YsR3JGy22oLfYZoSWRXQxEWpK23pDHtBdPX7dECEwhQRgkerSYnRbGgHCbjnT",
  "key5": "HKt89hA2ieuBTvCoBSooRK872eyzwZSyxrarLYewZg7PJsQd28rRJmi92v8w4KxZLqtXeVRbiBwhdRcx5DSUhg2",
  "key6": "4xDHMB4zbAtUNMSnkd2Zo9YJLqi6gQY6aNYSxQCJDKgWaE7oosqra2oYWhDf61e2VwrDHjKxB6iCvAo4ACrYSrEM",
  "key7": "hcsjqjQPBbTjSCAv3CuS2PmkyMaWcjwBkzM95UN2Dw9R2WAtUxqFSrLxT5xFVQFMcJP535AdJdXjnsGkHDNqHFM",
  "key8": "3nrc7XFQSzHzG1bxAR3YFRBfxQtw7fQm5QRZwHE18DhSLuiNkvKHW8U9CghEJvxiFjGvNkq4XVzxRQyCxPQGcAzP",
  "key9": "4xNTZHkQYKzZsoFm1VBytnxguxqC64dXhPjz1pJ8m2HtwaVPzTVhyE588sE47m4FXkx5fhuqyE2KGtBQDivb3uNV",
  "key10": "2wLFUKAWAYsbrpgJKPJ4B8J3EHqMZarstHbzqtn77c5iPSRsDxfANvjLAX9phcqkdCVhTfy9ApUDcPqYAEkLmnQj",
  "key11": "2Xse3MoCD63JCkFjSrJgKaPvPH67icNd6KWW22MKqJ9FjRzAf7MbbsAgY22CtqqqqRLrLB4yUzvT9zBVnZoNmr4M",
  "key12": "2ry5TwPwV1Ue8AMUSYGUQg9dVKFZbkmTEYC3WP8zU5tQyVwDqJViW9sJqi2Mev4At1tadLJiW8JKey3icZYfa7DX",
  "key13": "xUKnCzBKVczEMKtkfBHggLyurxJ9Ve8tvhhJ6QDQMJcGUpN2Qj1zswQ7TTWMTLH4gBQkYBuWFgVWFJXCRaSfSyE",
  "key14": "4R1ESK6ymAxa9nGNE9MmqodJBnTb6KNLHUAx21kCRyFEfFuiuFfGXzSJRoR68kF8gc8qg2dPG9cKkaoapSc3CJEq",
  "key15": "2yR4hBwkgkvTzWGZ3bqcUceHtxYPqEj221qC3DqZKL1an9eyZC386j5eXVNmXP9LEr6P5BRW5AFrzGX3sVzSxTtr",
  "key16": "4aBhVpkEj9Z4tcCYA8aYd1GhuEXNGUexqnPc9SFkrpjiVDLm1NSoBNsz5MfjNpZbe5RUmzF8SzCsNniTGY5aU2rZ",
  "key17": "53a99zVNZJJBmA6cUgmpPhXBHE25JDNojTDCfUMjneEVxVxFNGrH5eNGACa6W9Cm1pJbjbhi9tkhTbXsySsVoVQ8",
  "key18": "2hpsjwWCKaLnCyty4TxwArYWUmkA6eecgwB49XewajqcCTaSNPzS5WdPkFjrWpkynh1hVZ5ah6jRuKHHhWTpmeWV",
  "key19": "isvAJAYnJWFYucLm7ezVuAiz6qA6UfQrJbXsm33Xh6CMCDhjwmf213Pz1r9MfZQmzy9oWSwoLS43r4JJGfVg36s",
  "key20": "5ovUvPuRETNrJZypVLoSLu3EV9FQTc2kJ3C2JaffCjNL1MGYXMcLguoaJM9ifezBfnHEqZJE7Q4GD5NC4QWXi8hP",
  "key21": "4iaBncnDdtWn62jHoasveCHUTcY1n9mHzJ8scsffLGaFDqjSu1jLMDWzGburmU1HxTi6UNK6ab7YBbufw7bpXMR",
  "key22": "5AbqXkFFZHynx8rGR942Uvhk3bw7UXFeHvXyYuY4U2L373M3d8uCvxon5kjDMUgxfQNWJBLdjfcTKkXd7jbCRYvt",
  "key23": "46pbxrzeNCx93SRjJTRsSbcCLNpysF8vqkNjSyy83SUMt5ohRzHJmb4fukALcYTwPs3Rx1ah16UAy2h6vPcFe82M",
  "key24": "2Yn8sULXB1AML2wjkzC5PkPhDKS4DQq3aUKBd5TCyyADiDpqDXz2qw3khxQFtVCnN194LP7Sjhx8tyXbm1weB4fa",
  "key25": "5g6QhL5SNGBhhEGfc7awjQdZPSaGDQWjfTHgEcvknrMYx9UaTUWmqhFcxa5rP952LCafZacQ8eLT4XPdUwHV8nFR",
  "key26": "kc8zwAAzUNkr2EZFgTVHeMDEAVSMsgVczGYjb3f6XdSypyBv55FoTEmeJV3HUv9DJXcMhAaZLCNXQHmiCWoz6pm",
  "key27": "4xNjkNpMTRCCqac3JQ7fb7ebVXaY3BwanVzm2x3Dybk4F3cz4h7su7CYA8wUXBfp7yJvb8LcYY568wzPBD895VBH",
  "key28": "67iri5oYJbmPcyPU9ZAb79Fgh7cypFu5iZY4MBsYqp4Edm5g76ebsde5fdotXivnDYwgu25kaUPJ9Qdg1MTTLtXf",
  "key29": "qYcktHdtj55QQEtmLdn3DfSimVetqbUmNKnwAj3F79RX91fhHVBxET1vkac9XMhdNptSguT4tKnW9WnritbWf86",
  "key30": "59gQPMndLdCKYDHu88Z8yoRf35M3nrNFKmcwr9p4F3iS2wERwbQTvhEVr45U6DBnohTcBgBqLHVWDfcZrXpgxUbG",
  "key31": "z8F7ph1gS9iyYKWRk9W8GpVZMSZMpWt68J9fgkef6pWxgTTF3UhfaHfViZvkWYGGSiiMmYfutifRjhb2z8tP9Zc",
  "key32": "77iBz1ih9W9r7GofrwjdyCYyoGhTKzZsp5DF96yYop6EYKuPp7oCxRHXTRyeMN5NXghTfDjBW1A6PoMUpFRi2ZS",
  "key33": "2UxbhZSxJRjqPMydvrSSKwCocSEGqMHd4JWLbu8uivf1ZrEHgkQ4kaHYFUqMcrc46oLYjukjB1gjuQRuWtzEvHmG",
  "key34": "2YyDuPzCBHmfsPHUYDKMR7Lm49nKqGgsffHFXakCL2wQP2imrQ7XzsTb8Ejsiro7QBcXERWfZEjw8ZpR6qjD616P",
  "key35": "66VKLpLXRo1UxfdNL6vi8Mr345vEuKfQT8rz67MiCqXBCTrjZcT1mHMdrPW1ECmVavX7bR4PukfPYefC9eSXHMTk",
  "key36": "4GAkfF5uvaE2aanG9vHVHVgdrdEqnezoYGsUJE4cks2KpfqKKPNfjM3QLcXJo1PHE16yKFv7t2YsZ9BzdTgaJCoW",
  "key37": "2n4RGiB84jBmmCcyR8hvPztWX3ZXyNtw3HpozaE4PnRMrHmyH8mzkWbQKyGc6hXKeKfYqyUSMbQToGEVKSCUBvqP",
  "key38": "33Z2gSKWhgCWkZStC1xVDBnwsBeMaXEG3EusPqf7WaCGrRs6UXT3SGGsuBGEHgdd6x8qAD7DjcpGA5CvyMUt9oEv",
  "key39": "5dtjocLr633idKU7nxTSWD4Ny4rDEYY8R47yFwowPTKG42fAUk64Zdi83fA2AQZ6SenT8pbJWpsk8o2qnuVaFuGU",
  "key40": "2pvMsLEd9hRWfiPBGiDV1uFCMPhdxsMRvW31woRWguoLZKJDTKVMgCot4NSFqpweJVB3K1NzEuN5yHQfa4Mkv7At",
  "key41": "4PL1njfd9X5Nq31zaifvM534gd7Pg4RfXZmFXqgaJmrj8pnpxRrxtQtgJWP1pwVMX7YvPVzoaKLRXaCnQZxXUbNj",
  "key42": "2DL5xiBZUSVYG2YZWtdF8HYhVQfunCX8KTmqicQKDeDGXrwVcjHRuJberqGySD98RDbWXntJVoErx2FCU282gWoc",
  "key43": "2t3ArfrUbpCCaiQFWQ3jDJeBFPzDwWpyZkjdfEinZRMyCsAWCBN81Nzcv9UvRiCEKJxaf7f7XzxBAa4yy8ABEAFp",
  "key44": "mS1A1iwFrMWpB4N7nP3PCd9Lw8toS8nXkgiejws2xv1y6xRFVVmRZfPcs7vNd8xMkVWnZBauDj3AjzbBsGCT4aw"
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
