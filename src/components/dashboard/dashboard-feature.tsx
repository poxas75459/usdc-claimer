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
    "5xy969j2PmqRoSh4rqHKUYCaJhTiL8F1MF4mhcPB4N97atrLFCQ9X5gviUqsHLe7iNC2Hpenpnv8b76JpvcxKs4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NecSe2JiaQHo258MZoW7SLCdqDqHVvb6L1YiUGUytdzXvhYGaxtXNyiLLobGN8ARLurjYekUFCphoo8uYg2MnL",
  "key1": "r2HL4DsCLvj28h47gVU35JuKKsBdbj1Eh4VdWjJT1pZpqyoQTFeKr7Qp5kQAFHyc8JRiUFnrPamMNzT38o67h5f",
  "key2": "5PRxdrf7U6iFQeqrHTJ3rxSvrVCDS7nK9YG5kqn7C9LPNti4AmMFN5X8uuFQqK1wzMP6Bfiv8wrW4ko7Cueo9bWv",
  "key3": "5MA9wxKdyJAncH8LfS6AkukapX5FM2RzuGGnEC6ZSMHpBaA4TfthJZC3o3iBSndScRrsATXTRMMjopdpHSuKQ5rt",
  "key4": "4T2qxez1aWh9EYTEbWqjQ43in3YoJqhuWjt2BrkS5DgZtVC95CBrqX16yNNq81i2Z4KGwGXy8PR3yGCTQuHbqM8x",
  "key5": "2HGL9JNMUA4bnZdoJahuiyQnjrdKLwHVgHsG3hmqPhTV3gPhWJHHirWG6uEbY16gBUBrnKZQMMuYCG1EaaWNjag3",
  "key6": "3Jfr4epuqEsWPpRrheEq3kvVxaJUHrfeCsgwpxhoERFyruTXqimiF9MKCr2VeL6xM3EWrwkgBbHX56hp2UGASySJ",
  "key7": "5zNFb1cuZDbiH5aGECX9xdGVKvGRDA2M3ifrXLyB2C8VUNc17YQk3zx5oEsjkubmusqFLZEz87PxqthhYkCjPRSz",
  "key8": "2H3G7hjtNBDQUGJkXxvqVMuvbduFvHhPCYnRg4xmQfw3ETCckN5qvwLQSXejLwm4v1GmBbUyVVFQRpiVwirbDo5f",
  "key9": "4HARD8NbWCvDEEzC4ewyCZtxPPxqRXCEZr9X98oFsNiBLEMHcF8SzGdQtGscRdhuv7m8D2fpFqeEskXJHGE1Jor6",
  "key10": "5XjZ7yPZjsZeSYZuoQ7h7pXzCnNdwsLVCucN7RrdFxeLNggbHpfHdCLyBS8rJR2iq5XVF9qBNy3ENioJGsx2PY3a",
  "key11": "5gUashkC5nQe5CwcZpvseYUPwVJt2gTLjZyUMy5gW5jYRhipDMGZEbFSqztZoa6mkLm55haXvUJRB7JFND574B7c",
  "key12": "5ahLYP3htze5ncXP8vq1KjSYSQRPUNJDr59yRwAr454hbeqKqMD1aQDJNEBpaCNsArztgubCd3pnMdyrrEemspPG",
  "key13": "2PAj9x94tDxrRfA66dBbEbX4k4aAmwUe7q4QP1n5VgGSHKmw6QGmeb8RBsPVC5ZMd8HEDhv8m4TDYgohybn46139",
  "key14": "3QhdVNbrbcR5v2LHUb2xCwg7MiixobPM8wkzXhwNn7rKMPRE46SJVzjLFxxReTxTgZiZvepHkPoWqAP2uLyLjBQr",
  "key15": "4FXNVUKJUDkh2WT1ZmUmC5fsiVvXyFoyuzm1obJeiUiKvk6iTGrvn5af71NCs1grA4mkxvikBAjswKDwzKNMYYqw",
  "key16": "P1dBPxtgqgPg1QeyJ3vBmTicvcjPNs3G1zqAM8DpXLiKGpJnRR1kLRpL2KbdWXPELao1GAuSAh4mYQ91sBse3ks",
  "key17": "3J1N2nKCbVmhf49h7U2T1rcwNDTov5DUjCvNJvLkg86fWi4cawKP5BfgjRY9EhxjhyJnRbVXy7hqTER8LvyYT9tz",
  "key18": "3FT3cZHNMByqwMsHzwVAjeQ5Auk3DKk8cYu27qmZqpbzNpjGkntoRe6vBkY6A6fYkLwi33iu3J2km967TKa3wVgF",
  "key19": "5GcoSuDVphs6wYXCSiyqTqvVi1eLonZvYTWVC3FpR6DqXnyf4biLq19t7KpVSwmyJTgdyBrmS7DkEp8LrYHGR2my",
  "key20": "5pRMkd3YNAC8aiAdidfiR5qLFEb7tnFSXhXWAEqcR9z8QnEVzhj2P4huM4rG8EPH1TkZz2MQs8yxtHFXemRDUs9d",
  "key21": "2KPoLeauyzsTzcceXk63GWXHdCBxe3GSunCA5WRTx132yUvyJ7AEvdqcq17GYowJB64agR9AtDoE7DTbd4o1KYzd",
  "key22": "wZruoQg8zuSn4AGifmN3SRhKGGohUhUDfajpYeqZJq5AafiSxbn7ggWWEbDfdLeCqhnKLoNRp33qhsRv4vHV7Hf",
  "key23": "KvBijhupkTpna2TnhwiqkK9Ww6uGxhopgBKC954LCeEp6ZSfDLziY6yd32RpBRQMX747FArRrBE9x1eGD2A4CgR",
  "key24": "3594RuHkMct2cqaDC6zNBKmKSmmrBNjfWG24AX1Zz1RH2VAhYeqskbr885E9bkr9uejJadNLUWf8QeFPsEVTb6zn",
  "key25": "4CkXjHSjNCAnNkExf7HWvLshEgHN5Yz4oKhJ6y4fjAeMqTHmPXF2wtwrYMZZ6t2CRA967A1dxZvtneKAKQYffwq1",
  "key26": "4whciywxtMbF1wGGRSSGnBzTfvz8HP5Mg1AjCMqt6bKi9CCNAhf6GQcoqG3kxnud8zxaZBsXCAXcLYoaA7hyfRhF",
  "key27": "3CAuceVQPWbosfjfVoTaN7QtzSAFjgGL2bSxyNEz5bdbrW2CVtgEFFBQRBNo2ZRaVm5pN335xKk1j4k3Dj9nnMyX",
  "key28": "5Z1FzpBhpx1KqxJpAPASU4Fj71KjZ6swNiw6n3ZY53DQtGVD2eWsjTu8GgsXc4xbJZHPeoaT7MkQbomhSnGGvM4k",
  "key29": "QcS1xtCMQ21oh2DMRfUU6GXaqh6efCBk13XoYGBGLHip7mXkTpuaTB57auftPbMBztESxU4AZuQtzKc14BoHpnp",
  "key30": "nxWj6Fu79azVw9K7Rs6xAiRbiaFXAEjrUTUoJYjV7bU4hTBXveLEgdniSfniRzUjciK6VBFUDfd4rsyJfoDRJoK",
  "key31": "uaNb88RcRKJ6SFc5AYSGZvHfuKUTsoTEYe9pAaquBNrHUFuHiwwZPpZ8mhQ7F9YfFK3yfX8oPDKminp2omyFtWz",
  "key32": "42Jc3Lx7eR8oYzyGwuZo5HyuhBDTMm6Edk4YyKLdHPue3Vqyrd7YAHLbxwKXquhSoyQF5tB5jV75oyizR4TkCgry",
  "key33": "2NZi5kk7CGj5cJkMDkdiYBvU5UPVExDR1xYhvs4fTff1sQSvion5F5NjpiQjDpPssa8mNKGJTBNgF32ZqCS5DZod",
  "key34": "2t3UGfYcvu8GWG8vshvuVyG2J6PCeUEdFtfTsBtFFHqmgop9g14ufFEUM62FgHwLsQWYkMKmBXYztWBBE3RuUEMv",
  "key35": "2yCXWTTm27bsxrx5JkEbPCrBEbNfdsBvX9QVg2MoN5HF2RsK44QTg4GhQquzdboUu1xjBbkt2Quf93tkyrVf1TwR",
  "key36": "a2Md2B2EVRLSXX3vXRSrUo7ixuL5bXV5dE3k4gzv6kTryY8x7YQBd7z7u6BYoyLz2X2CHghBh7VaPSW4SZCSrVL",
  "key37": "55k2K27FqbbGa9s1NxGjbVtpSmMAKYWNpCTizEeVhy8WLGV9Ytn9Dp73i6712HEWWJR4m1aQmR6FFK7KTntgm2Ca"
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
