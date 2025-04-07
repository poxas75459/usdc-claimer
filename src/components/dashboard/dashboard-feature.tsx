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
    "5FdmXHeegqEYCi6FixHVD8Vw848Vsqk72e5xcS2rwdxz9c1jRFKfMcZMt4dpKKDSXrAqvpnSF16BS9sURrjxST89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rh8xwe5QGwz29zzBadN1vT84Sd3s4AuUUdTGgBM4ArsChiwZTLsHspxqzpSfoJMejtQiSiJyzNYrDNzwRRxoKpM",
  "key1": "ZsDA3aNtCfKZstXmiMp3uptvatUe73qJTNwLdiH5dkJuBvSC9PhxuAn5tjzdGJEeUjECfXQt6yMeMtWAZ51yvCd",
  "key2": "4gY3QFp9VGrt4QYY2VtLZwXvftSh3HTUQgbbi6fMakaEppuuVjbaesK5eRcjeWgmoBv6Vn7Ft69EszoRAvNwJRrP",
  "key3": "UkJBB59MKYbtdZXJ2FjxZaysuKkPHrZ9oCQim3NzJfmzaTKYazx2WQEgsirGpFQvRJjoRLsNVP13W3tdrrr9Dz9",
  "key4": "vQmWQRiqHPuPeXmZ4ZekBUvYWdjgg44CeUTU7E6sSCc4HVoCqTxf4FQeue1kDNe3aVPe5tmh2Lpt7gATSmgTKxL",
  "key5": "3j5s8HSvDsVkk6ysFnEMLxNzqncvBVPkZXEU1RYiKyaXcxDzPP261rzfmvwtCuDk9CFBS5GYioRbjjrvjsDoaTKL",
  "key6": "3PNbDXh4fMCBDWiQLGRAgPFc9V6pmwpxtcLL9f27xeEzKQjR3B3SdGL4PxvD2g2sz4kihDtpoKigPwsTQjVdwb27",
  "key7": "553PJ52xMmPwvd48qzxTUKruqoLPBkAUQZxbY1cZhEDvLKkHrhPwS71JBThVq8QMMjjQ11xYjvZDHytURv4qYnuF",
  "key8": "4WQrP2gDcphq8ibsQKwRu1iE8rWZfbp14gTKCrNEggraNGSrH611hCfoJUgwb5c7Rvf3S8Xu9JLsk4xE6SeBTcN2",
  "key9": "5Jpc9VEhUH6PXPwktHhZD9R44ZqiUEJiBkJikGVSbUAFgqK1KgEcBXRCJZZpNDmexHNzuuhnQQEv1YGgiNece4e7",
  "key10": "3t9GyQRChVxtN1TNrzdHn7JXFfigjxhb7nTApkxuU3NE4cRH1mu6zvZB5BuixamP2NuqjjMj3TaML2o5t9Fp961g",
  "key11": "ocZUF6R1E1Fh2zyfYJTpZG3KnWND4rgGwYzgBeytpf6D5WcyUUnVsBGJjeQ9gqQQwj9svdC96ku3YMv2pbFXCht",
  "key12": "FyiZefLw5hSLgbXzU28YGAeJo87aMFgsnWuLSA4wVQhbjcL4pJaAGRJT7EbaaCXfQfT6TXWwCJTdr4SHxdpmSdr",
  "key13": "cy6uhfBc7M26TmBgS4BVBezhDBe759tDTatsj8Cds1vRtnXrbXpGCwvMkHKmLdidPtLCSU3GDMgZi2EjFACUjZS",
  "key14": "M4iUeozpSJ5rqZtSJFX8dm4bX27hSr3eKDFCNSeoUQF3MkK1Z59irRPXPJu1PpboE8kywttqh6hB3c79Egznjcg",
  "key15": "2TmVYiuGXRULfm6K49CgKiUEnpCbpGzWd6JDhAjZAJADHB3wTBmzJ73fD9DtZCbtoq5X9729xxaQdfU13kfeojcD",
  "key16": "51irhkFaMeYNHgqDgzcEisrEAwBnSXUjFCLMBWs3Fpbapwb7wAqjvpHkrcCAHXaLwmaTCg4kZYyJh8XEdgYz7tsX",
  "key17": "629uzaGg8DszoCNykCMny4C2g9QnFSRJ3DhMjzvqnAhWbppzTKdWqYbFwB5RNTiuDoYV6bj8gGyXxvzFma8hompG",
  "key18": "3gt4QbdKRERZPtSuokQVrfjfmSAbfbEEjfZ7HqvoweWwNCV1iVS8ERXZmsZFDy3THKM3RJEDjTBeStbEcSGuBS7u",
  "key19": "sX9mJ94XT4zb4TP8NLYXNqfgxi2QxG4MKHYW8N6vVr3fxRktZR4jSsTzevSoQxXwEH4amuYTxVA3awWTjcadVsg",
  "key20": "5PB9tb4VE7dAs9Z4kvHzosi6pTj1VGcFnhTCiX1R5y2CtV1FvZhi9ggjjiJFp6LcDwE3xjL7nDXjaHHde1C4Dxw8",
  "key21": "22XoztbdHgrokga3g9egPaDioVeY5v9oiFHuyfGRn1Wkno7gsxJQU7MKVevPbde6D9ooC7yg5eJGHZpS5k3Q9PNG",
  "key22": "5gXVjb9sGfVJoZiaKShUccvdWJuxm1bks8Dv9iYLtCVzePS2Qt3aSETXzopPFiZNyS165RZKqVDhUv8RYDP8LG6m",
  "key23": "3FyRPkvvWnzNyHqxHjFmh6gAJNCQ4VSz2S87aiCPGeacwXxvJeLPdoF7QAcmRGbvdheJ48UTa58Fn67G7CkWX14H",
  "key24": "2HfU67gib3GzYKEg731jtVCaLHBvNTA2sRyaLrXJwhzVqxDUTFgs2vtDNDUkwQJeyiQyVTLZrSXRdqLgjLxp4N5y",
  "key25": "5LsLTht2Ae8C4AZMa3mMba6uvj5emuAguQP1dDnzBk6w47y9DssVeH3g1SPGSgUYLCZwTTcRgQsrSSeiUwNddE4F",
  "key26": "38TZJDVZbz5jzbjQS7dApXBedxeYfrj1ungwWewKuqDy68Xbn2Z4BuUzn3HqzDjRzMETdMkTZNGquAmvhWUgNd8w"
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
