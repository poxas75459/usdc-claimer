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
    "5K36xKUMMNqGxR8EwmcBbALsfptjwLTFDt4Ty9xDQqy8nv3MGHMhp6KJscMLaUwaRANN4Z1No53ZuJPT7dMQqd8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S58hYMQw9qbK7Qq5CiRgA6k8dhDoveEhStEbf99X3Y5Zi6vqx7ngUJqbbgVxW3E2Wt8PQL3DFsifDuoND96t967",
  "key1": "3ifNgVDC6bSoQYAPt5L1kZK7dzwkacHyZGKfqRd7wj1RPUL5cgyZgRqLMxmj3LSiKH7YPJnuqfg12M6Eq6Um3f1w",
  "key2": "5ZPQ4b6c8Ymw49hSk7LJzneKy6nvzKRfeRTnZTbStjz1MUw73GvrUvQcEQTrbUw6o9RVT99cLFkdtjR5qtWXk3Ex",
  "key3": "2ipXLAqJxfdabA3mfQNKrfYgXRtGkHH7xXouMwUWX36qPpoigD8Ak5X8ajoaVmRh5xHsCkd3wgb1n83iZoS6Vw1H",
  "key4": "4QJ63gUZdAVqE82mCEjnx9NvwiFX5urTwmf8zcFg4bHRGSjcMjixv5WL7AJ4auNhYz26wsv58cHe3e4W4wjupqpc",
  "key5": "5mMNuatob6ML1c7AX5FSzKBzVTGHheJr19zLdMtueR3Eh3FfFC64ZWgqFHeqkPj6kCAKQGjNaou1wxX3TG8JFzX3",
  "key6": "4nKnQXGr5vbchWcALPEvJ9er9mFLP9ufC9ZrHpf1kQcFSPmrNbiWBnooNzFHpaccu7SXLnnivGko1MGaJ4wd49sJ",
  "key7": "61f95WDqMfAZNf2UU49aGVyRPHJ9SBFWcaN3mHGDuJRyWy8Zjag44SrN3L1eHcJ2u4gkX3dfitdyfZG2feQ5BKKq",
  "key8": "3GsxY4YBghwVmAJUD3KGTXKJXaQHCdDusric5N84rcZEFVAa25H6bmzHYd2MN6wjwwoTRjVTiyUCzWxUeGv41Ht9",
  "key9": "3BLjJGLr37d6hyrfU5PhVtwrUo2Err7D17wrgrqV2FRUPHpCoPZP9vE7T2uMpqGavg31i6cTAPYK45b6Jx6xqEYp",
  "key10": "2sYw1HzKerMzZKecBawUnRB2pzuJGmgzexr2tvM18GtT25MorNppd1afzg8WQXWH27Ebssz4zhchemqNppCUKcni",
  "key11": "2afoLQmRYeLDxPiiuGufLKv5Dft8xvTFqbJAZZjrHfJbXQiadPoZPPUe2pcANs6bzfZwbDsotprBmLmxMRktX3u4",
  "key12": "5iaWCX5QJuJghU5PTXANS2EsjDiZLczk71McKnwmg4VngCjeqPWjKUW6rvXmh9mYaazZDpspa66V6xQ3Dd6vHMDC",
  "key13": "4Quq2mjGn6YiniNNpvQp1zcnhWrKbkcXJKUQeQL8cVu9G3WTESjmBifGujpPWb8TQd6aKjeQGLafJqD7voJQ8hYo",
  "key14": "5PvfKLjn5pmGpZAgsUe3xzVLwP9TFdrqaeMjzVqCLsMEXi7z1SzUD48aEoNsc1yD2J7HkRgxdz5vXBtxZe3rs64y",
  "key15": "NsJ2q346s1NCYF5YwFAn113sucU6TL193P3bABYTJVwYUuQ7SvbB4qFPrsL8nhiJBHq6hxQ4vDsTBZTiFCkM774",
  "key16": "3pLc2gXjxCQq3shQ3MZ8s6QyGH4EjmM4JsisJWhr89UVKCLGdFLtXnjVLjwYZdX2k1a4YbzEvXm1BRTYEFsAuQwv",
  "key17": "3ktMSNSCRPzmGWnd4xU2QsztSx4jrDWgcwdn8DmSWDkqUnTfFhpgkcUha26gr14Lb8XAyqvdwWJK5cEZ4bKG6ak5",
  "key18": "fGGaWcWYQd9z5kDpLgsKRiPxizFrPAhtivwBQTpehGdtf3NnjtKzu24LUmekWtgDT9raRY23T1zG2CTbr7H95U5",
  "key19": "3HFCASnJhmFHwbUDuFq1TEdyJLoNU5v7jBbfjUkt27mXAMt43MRts49QpLk9DG1H9qsa8JwX5VWW68NGL9wNKq9B",
  "key20": "Jif3aWdXzZ2u445BziYSFNSgTWi88pukraEAkKuKEH8ZSsaqZYBud8LUqbV5HXnWAwBKUGk7M4xv5jYu6efy4zB",
  "key21": "mxNnTrDNhqXXuJMaRTwBZ46Hy3oi6wNpSSEWCZCkNAYfSj7m2iNKMVN8TYznv4HjjTzQ8SNK5BDnThVw3xjjjWJ",
  "key22": "qzmcVVTJaBcGr8Pejyf6XBYzSZDvhPjBhUGyaG8VGcwSeYjPXL8H97514Z8xrNudaYbXiA8XJN5sBqjYFbncJEZ",
  "key23": "5gMKazmtKV1EEKi4aUK2SozSTJQpTSGGCq3PcjgAVpRJM9FHHkm6YaHs33Y2HLzh9dikqoYwDBsB8gF3ofZjy9S4",
  "key24": "3PHFwLNEzvrHjuTBJJ2pHCR1V23GzBFW5r6GaJpqxzX5vBd42F7xg1N86mp6vuwqAeaN6aEgn1jdu5HkH6LVyyBb",
  "key25": "4SdzdKnn7evdig9GAshxdNcM5rCuU5of7P1Q3fr7Q24cfit2bwHxUDX2qQDxMMWL6AtTao4iBdL1JVJQzGRyuwLe",
  "key26": "4j2Z2AgjuSiCVa6KxaxdGcDqVqFoMmdVbyqhR4mnG3GyHpS2h4G9AWeyBdgYg2XBGE5eL3Xe7ZZq3xap7yUmBWU5",
  "key27": "KxRrMp54Rnehy2WoeRhmmLkGyDr9UimnZXhHpdojTvc7pPGiGtEW5ik7fRJdaJg36pk6VwMjPXRpA5X3acPFtKh",
  "key28": "38kS1AQjk3yD3Lo8NVUauQTRxoEgsKA4LaYrWfz7i3mrqS7kvaZ6Ln74ZA5u3PiHfGA4hKsupj7uZHq2LXAbWBRP",
  "key29": "5xwZaghHY44eCzmhY4ajrWPLcMbGBfSDaT7RWGGtGjpJREX64z44Sqqe1HrQ6XgHgGmYJZCz2GCxbcTjKgbz4PB4",
  "key30": "5KsYDXj2WDxN1ToMdKeW2qdjnw5VpZCyBtR5adQ6k5bZhsbmZoPiFpUUKWq1ZdsSLVjjKgKisryJc9z3QTEeLaTD",
  "key31": "3rsBwzxK1eQHry3wxnp58TEkam4ps1WpM6m6EVJgwGrXzxH3hzCxdVbNivAD6NUfPbzW2XTrfPcVTW1YYB8amTiT",
  "key32": "63QXgYz3jpKJTN6YDKLtoRZjeHCJN6kwWPDYriA44DWuWEKcxM2sL7UpKaD8zSjjhG8yWxGYFTmGTWd7uc2XTgWE",
  "key33": "4dVagEGGoMjmhWbrho62evaz4JXPG4AcpM7SQJ812nRqrkbzWifYiq4c1ckM1zPbZeC7zkJHCrLKQAKGuRnxYzV2",
  "key34": "3EJfhuaUC6QYMzRf12hEgdyjmHZbwFm98SBRBXmotSqHS5zMMViQTth1ZAmypn7Kb79gbN5ncDiwVpNtuzz1i2ND",
  "key35": "4TqGYbM1fHoJWqMokp3PebBjaQnCoasqwhgbKo9PiZAJ6g2A51UfGB5Q9JqeYirrjD9V1CKsozFCNAVkzsswFWUj",
  "key36": "5hTtZNpoYWDFyid1bW4mR8W9qacNuE3jp3yVMwnfvpxT5tCbDKdf7vWwK6jTbUbgADzvw7ASsJagKWVHjcCrtEK9",
  "key37": "5uX2KpCCNNt9yYcQXKyP3FnEffPTyVowBigwQu43LNkcytnCCjHafeKmAzCTmZVvvZdHMQxzmLcKS2RGrkfT3ggT",
  "key38": "2PRbzU6YtTFzchsf3MPs452QaE2ftRpJsv1PzPqzmctDzBMmoGSL2tPvggfGuL1Ta7TUz4ecCitxxNghZbE7p7KU",
  "key39": "5atePTWR77oBJhX7ChHU7yP3qePEstwYJ8xeWb7YEWfthvVjBnBtEGGNkR8gW7iq9ZLStZHGf8kvHGDrjPQJvoy1",
  "key40": "2vVnoPQUXiEKsTfGzx54ykKV5ASTZFTwyVmKdSzmhdSPZAaLLeg8WMQqbQeWavy5ExGE3isYMETrgz7AmFMfctnC",
  "key41": "8LYR4ntM9Cdzq8zNReEB1PW5KFEQAwWGj3BujLuwWn6zANYAbR6DdqkoaVtsLPrgR1mTxAzFmXxBMHcQVLMwnVS",
  "key42": "3vpcXqsbm45SGe99XdkoY6KfD4um7pADzftWUZHfdSuvaH1V8iDEYMgDrLd3x7pqkLSrMGjBCEAbKocn3icbUHKa",
  "key43": "3Uxr9N2u3WFVKZHxHX1q2qeFM9M66P2cxihbB3aNdX3kG7SeEwchj7rPxDAtbM4R4ENj5YMizw5eeRRCp8jo59cc"
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
