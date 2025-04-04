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
    "3mvfXmdkMn1V5iiJ1PCiKJj1ZaWXHm3KjSToDDhKqQZywC4vHivDhkYB5Hb2FArrs5dUDe3m2KQDgU2ovXxax9pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PjM1zNUMUvqpfb9gBoKS8siDFk7vduriwZ4p5KKe49ZLPUoV7WsotNY9ZaLPtNeEpAsY7QnqibJAvzzigsML2ww",
  "key1": "4yKvX2bxZYbSHgyz5StPWhnWuYKuhBCTz4Y1CymXASJBgfivFoEiJJS6VapSCvbz8a4wd4kaKAf95ZpG8QFH2htR",
  "key2": "K72ytvBKYdgb98vepbGzcCTiVxSMTmccNhhnxo1iX1uYbyA9o8qKSjuRvwt23F3pnL95MPXGoE2hBQpkV9RRXjT",
  "key3": "4FHBRna8Ki3aUXGMA8dkVVKHQTBvMNE9pnaJ3qywCs1NKmHsq4t6QQjtPxr7hJo5A3xfTnHugud2AuUbr1eoPnDJ",
  "key4": "2kARdvBpxJ1Y8PTgFWcoNWbxZCgUYFHdjzCpxdmV4Amy9uwWLdTnChGy6GuPjevL82pZXquiEUYtKHzBv5iDY3Je",
  "key5": "2KRoGTjomteHcUDWZZzaTVuMreCWmpuusS58JSgqBidZcjXCrNz8dkbUiTbAzwePXiS4J3P5Ht9zBUogH4ty4qBt",
  "key6": "5BYnd8z3NJ5pAMbm6pisQsvv5mwZGBKnhaAnRHR2JeWRzEFAaTaZLBCfdijVeyzm5SAjzKN1s6dxhcuDTY9QNbQd",
  "key7": "2FB5Zb1iQQfPRCgCJ7AX1ozfiD6PTXuqrPe53HceD2eZsCajYyQZkiuzNok9hvKyzPVp1iyQtrRDT6i8PDqUBrDg",
  "key8": "4WWbmhCrNcj2jHSznessKS4DGP8vsMGgubERghSXoYTmuB4ZMtkfssRH14vUTkZNSxDwjx2LhasptyQ3mV6nvtrm",
  "key9": "2qKawh9YM3WqKcgT5quiz7UBV442oJiGJkWiJ1ui33ELxyNoHYgCXCtpZ7987Ej6meTH58mdCGDanyvrjG3Ha3fq",
  "key10": "5dW1wo39znrNWkc8qgyBVD9jPnfWwEqXQAxkxb9e8b2TxtcBZCZgmc3Uie47yVsX5dKsDwtV1PcnGVnzSQSfbg55",
  "key11": "58UJnDhYCgyRqujJpiDPWesespBCi57VvCuGBYGJ9ptrHL7C4i7rPEiSfSRHeUeAKcL4CF6iVhjHgtzS1WDECUpe",
  "key12": "2QuF7c3ECupA5DvBx8cwgmtZ1zKiM7ohjjmgNGGWQXZTPxxxLc8DefwRh1z2QjuEGTrGirwPeiTy8zxGeAA65chd",
  "key13": "3URWqrmQsdU4pBBbzJvGSzFJFL6YMBvTMShgbTPd1Ujf66LHt4SseoGUtkhRYkDjgK9nK6ZULdX1TH2LNdn4p239",
  "key14": "49WQZNJGEgqERuy5cQgQEXwsGxsnHwtqMKLrw2XP8nHBmLsa7fNCXxbSzszJSxmiw8EAnHXEgq2dkMHSzhfUzuV1",
  "key15": "tVSjkA4qBF1QtLT26H87Tj315hPaPRRhf6YCzwMiofok9QXME8VkX5SApVebJBXWY6SM48E59yR3Xy4G41uiK2c",
  "key16": "5pJ7i3qxJfBHxVrwFgsyGwxfRh99stzt8C7qvpUa7qpu5zSyr7gJ3g4R8C5iVEvswuZ8qTaiFYii9D76xHXFsQum",
  "key17": "3Gh6qXCmaj3FpZzkpUP4HGLHcB5eF8juMSqXQafTutTN1wCG1juJap7K8RBcpVADxecsb1vDKC2U21NQCVZXi3GR",
  "key18": "5Y1iCC9cd8guZYQFASmy8CBvHr7pxYU5ibsRJoQnT1fDsA3teHMLGqYP5ebJgAf4WiiX5wspNYrLEm8Z2QDMwz3T",
  "key19": "5qX7PCzfWRVD5krSRQQN6DQspKksnJZus9T8grJsaci4yGRA8m44kJ2MJUK5cSYUhJvUU3d1rZrKc4mLfY3eDFH9",
  "key20": "5kfZPj1HWv1Us6W1hogcTX5gn6VSqToKQnuQH4rC6LiQVqNFuyA4WzoryRx4bBYECUEUroD9iYBi9mPZbwUUhFR3",
  "key21": "4wrkzmYqZsMBzyP1vVumnuHsvi3LxtYFFVm9H51adLURtupsbszGdNgBdGaxsmitJqniEK7Zpe9evgD9yWzDnarE",
  "key22": "2HecLG3rVQat7jNwMxk9FGHn1F3NX1U5xvx96NSvveM5vRNohV3gWZ14hxk5FHXawHjR9dFrByMFrjVTvkxf4t8S",
  "key23": "5ZNmxeCvFqcDePwyYT78ujdn1NautL1BhF9VAQx1ZAyYTrsCkPfYwizoetx8fwSLYBru2THAvrPPBt52C5yu6Nt7",
  "key24": "4MBsv8iu9XduvDVShqExSuxHKtC4DEF2U6xqiYttaf49aBwtLV8oY2A3ZbujoRVeXFvL1un46GgpDifjwBJnFPNn",
  "key25": "3YXtcuz23avMY1oXMXr93N6aiGXA5SR3RJH8oBwVRx2bicu65n8jid6mhNiNLUQdW1EnjJSKgLDfSBxGXzaJFqFD",
  "key26": "22qSQBgi9mvVqjMuTLhPVL7iSdM5w2efvVooHKVrB4FT2Ymp9GjLaqomr22xAqY1DdrjNga5QXwL9V1JfTFZDnsb",
  "key27": "3x3UJEepYouTug1vVJYZGEddBoc2vwY8S8oEzgFbS1KzhUzavyM2x7X4F1JTstJpVyfFBcEx5T9Rcfu4PJqsWgwi",
  "key28": "51u9MMn8ekzdNbZXDqhJ7cjTQLuDhcGxLPJ66oC6EiC7634TGK84htVJUhWNzzCuxpG1GVM38GFz74DzKNDgyCTk",
  "key29": "4p7xdcuPCM7f2RJ8fojDEpjr39jaWu1jrZR8cibn8fiuz4FLQ6xjZaTpWLCJFu1hzSZB1K9UySMPSzdUWPMNXvfi",
  "key30": "4SM3iKb41FYpvXTA2t8xcxaQFnCZaWL8bkYq8N5EdxGZuM46sW63gY4coWVvcHvWDhZgQGaGf6JJXe13BSXNMNHN",
  "key31": "4Lnw5nYSvPgK2pgJs5YKLDiFy66Q5GBKn3KKfFVVG8wPt4LZK8geRVMTE8M4edtxXtky6UvwoLsftCEYyQJwV9eo",
  "key32": "5czkkrDk4L1z7fwVBasW3xfnSuu3DQ2UA4Yx9sBKWPmHVdK6F8SKiSPvf7dey72YQXsfYRS5gmqkfqzyUnuFUwog",
  "key33": "CUkt8JDg15HXxjvttgwfFND43FU6aa6LRvopc4M9BqH5qLAVr3nttYnLtZxUaFhFHoNwz9aWPbUJQ828McRSwHJ",
  "key34": "4uBKXNUCbCJ86YFSF81h5EPBueFUpvX39kFKaiQZDhhwL543tg7vYTySZUQtNjSuxecFtHJ5PChfcmE7JgkzYcAk",
  "key35": "4FQhtX9LiCFXZdDuuJenGu8psEb267rvVXFkYhwsQ45gCxcejxKbgmyty6BRReksPMjBney5iqHFFDBhsUZdnTup",
  "key36": "5H5bCUGWtDYAtnbNLjDKrgHb1BnCcQ23XhSm2vNAdesYEKYrc8Uc7MPCozXufDkayh5kZf5ZVhsvZSCk6x6R4A4K",
  "key37": "5mGmEvU3Kj5oZFnrFfbKoYyDGiD4wjLEEQkpKGZAAofN8xuLumznrNQUoR6xd1WbYohghpypW1P5koLLJAYKFVYp",
  "key38": "5PSntVhUVbt3WYwgkF7F4vN19QRQXrbQSGkMXDkNGdkSErATEuWsDykYRkwK4yFZCY2H7kMFUSch6sSdwpMNWEcC",
  "key39": "4WXS7JCC5cg7YuLnmdPZzC7UT2TcLxZCb51ViPmJe8euSrj5oKyxdJzhChoTFFR5S5vPrMEsNQZDWtgqVP5rbvPU",
  "key40": "5FB4gJtk7SA2no6R9mEdcuihMTsEmHbPJBiae8fMGDR9dE3yFMQyGuc8XT639JbD7Nx48wos8iKcbg4YVfzpkQyP",
  "key41": "59mBWMeExTg2YZmtB8acTFeLkmWMfPqnioqZA7Qb9bAfcJWN1GjpkjEBRKafMUG4fmaxTKkXNzjFbGzHNTac9K2L",
  "key42": "bCUUXi9t6BWwhH7TWQA8RDJUqz9YWFDnRompUMVqoZZwzUAinpo7qkuDfeACuf8PR2BHhNPbPnKqpHQjYkbeBUZ",
  "key43": "4wnf7MfN7JDyCcpCS1QrXgKFjaN7th4FxrUtnkVZG5joLCR72MSm4JZMvMmwWhQT4GcNvjY8hnoQmYqPY7tpnii2"
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
