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
    "5ntaS4T2Mnaxa3J5p6gVGPvdb8Yq8a3DhsPA6yvE9PatDiF4D7ocRGyKi4hQGw7G5qdJJLXqvKUjuwysD95G7PaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wnd2ZBw5gzgFJG4561njLi33JtBRiWkZmZMzyZNVYvbbgY6wx3URUMPvRRjq9wp9EndWam7qcMSR8JAfB4vcs9z",
  "key1": "44BW69ywLX4JEw81NqE2cnxhCze2iEUsGHWfipF69jKihaBNXasSj7vdpY5zkzPoZAxXRaCPBTLRMpDw1tqwTTDB",
  "key2": "4Z7wdcwY14vFYVfJVewAswf9gCBz2ptzpvbSS2zUr2e4xidSVHhaAGSToW9rtnyXby7M3M4L5CjALA7iD18Arq9N",
  "key3": "4QdAcMbrt1VATPd6pMb1vJSMWscD9zcj5ruPz3Fnth7opfm5uC5dhiwCEkPvuCoHzA67yvHFCjQKXknh6WteGKx1",
  "key4": "2Rdjpqedx9RhjQDMbJgstJ4bokWRRnfQRygJmuCWrhzAxqAcRHuHssXXmjd76PKjxEEythnJi5uoae1PnbuyZN8d",
  "key5": "2q6dkVe1sdrQCwQENfHZNiMHKP3QCqBh3xv7YyDFxtZh5DwU5gHYYVWo39ohJopyy6pJzxi3AJpmjF6LMaqF7Ana",
  "key6": "4GAE6ZR5PvPzLeEwQHaz4uVCU3Pe5hP3wKcd2e59g7HyyNPTAsCagLJM8Fz225K8zFWPQcSB9CvNU6p5ZzuTqJ9",
  "key7": "4Cp6JG2bFqfD5dbMDgcT2AtDGf7epet4dKNK9EqV87timCjqmspvdkijerTKobbDznEKVk6nqUPrBGanvGWJH8Bp",
  "key8": "r9F68bnFy5yeTtMntRwMEj43aWbN3xbByAMHjc26a8AdRcGVVn75TSowRVnhoZAVNcsHeQdQcZbjseWA8hJ3EmY",
  "key9": "2QuzouxjzbLDscCB9xApEXtJVkjqdaBpTsmveNTsNZbD3kZkJEJCbS6968bYTj8Ev6bcy1BxJuQARQAkJwsUuzAB",
  "key10": "3RgvdxyNArDpdXJandSmkhv3H9fW92x9YWqpaL2QpoWhQwzCW2HVaWDweidqLoozBteHtwC3rEdScvxfNtPMLzm7",
  "key11": "5gJDcMb2CZXDQmyZFHzsiQSdUgZFYLrCwB83YXwwarhXrZ8xXmjXRPt9sq3CXzUaB4euqnCFtgmM3FMQJ1eqGbF5",
  "key12": "5sfQWHuVtMBWM7LX91dUD7UBXBijurnYoRjsQN67e8MN8cJFBgVCEdyULxtXgUZmSKQx2oU7mT4BSsYgtAnnLMSy",
  "key13": "4hKUpkV6ajhUw1rraYnTaUpzt5tT7pUTcBoDAHgAfSPRvF9QvU5Csgxsw5douSEh7m6CAY2WZHopVoMS7B2HzdDn",
  "key14": "2uEdKqdjDoAgaYNFBHdCc7TsfbUvmFDfPufo1id4NXUw9BUgzYi1ZhfrFPKmu9jgB7EKE6njnMZ5B3c6u9gdgQV2",
  "key15": "5uFrgEpbBcyAmq2gucCbnV7x7nKoVqo8CEdRHYbs8YW974K8g4vU54Eua9evGhsqejs4iFCMjnertd3LpeVZbMQf",
  "key16": "3QRqFtRCixD1uFJmwtU5siFRqdWqwQ1AGxioTuUmBEh5Hs5r8XuY8GJp6m1degrhKoiYnh7Jd4aBc2HQ2DPBfb6U",
  "key17": "3m8NhAFLmA5eM29x8WRuWUUsUWzab5xT719JW28Enp62ahyZFu79tYiMynYAqGB5AwN8pY6jXthSrRE3bu7CzLWp",
  "key18": "3XfUw3hmsycx3nqWZuUJb6djGBXga9qxiunRoegfjzCLKB4iJTacSLtbhbTErVNNhwW2uvCjdTnrqZ4S4DMrrRoR",
  "key19": "2tJpCSgqfa2131VcLP8GZxYiBTiy5jzuznxckiz4UdVMaoq1MYrtNiVJtjXrSqaKhQx6mA3Zn574ASFEaMggwuCN",
  "key20": "XsHMvuGvg83tNvxULSwYUoNDSu6CoQVQyxNH1pRxEfqu6UuQFnRQ2BYumJjSG1EDLEg1v8WfxcYuEnvjxxAGFTZ",
  "key21": "2LVWfzJkwyat5CXfbmGFiPBpKkpuEzrHoz5r1vVbJ999Rgwbdw71P8zkFzvX3hRVuYsQcXfV3RLqvmS8kaMF212M",
  "key22": "2DFD5J79mqXGXKWWpNe96rnoLRUaedquSmnGWL2h87714d25cNMB8kqP1UzvaDaC7fww1BBBx1uN5Ae9g1ck6XDk",
  "key23": "8Ug9z2JjQduQ3JCt7GrVtHbHgVe9hwoabk1vm3TkWo7vByn43Eimmv69F7p2Y61NYYUkyQT11rQuXqzHV5D7yNh",
  "key24": "bNTMjorUkSzVneWHkLTc8XxMJjCQSHE7m4qmwAxYeeTpinpZbCNXCwLZdZ5KtonRua35q32ezur8Vo6UpxwFaZY",
  "key25": "vu3HMW5V3hJ5EUuS6132grG7woxiynrX7PuNrHUwQAxwRRAVSgMc1ii7ECPjyC5yb6PQuzjRHTaCWqpBGyA2o1x",
  "key26": "N6tkwp8coAr6ex5gDnNAjU33vXt3Mhme7aobC4J5LPaKJmDGxzGFyVqihF4qmPMPnYwn745gBZiZuAXYU7AVact",
  "key27": "3VzVBVJBqzaWKDVrmCHp7rYd5HU7k8dwVqLVnk5aZZEZW3yGMon98sJSNphKYDiycb1a6a71qok3YGqY6mqGB2QU",
  "key28": "2HcVAHbXNARMuL5bVopxwUmETgftbXDPHrpwz6NTm6No7traCdyJPDiXe4u3qJm82VcyHeCQcTLqbXJnX7xRMSZ9",
  "key29": "5tg5sPm4XktcKEFRJx9gTLKvuVp6zotN1PX1tS8B7BPWfrdRkgi1X4FQRmoeQW5jnRzFHPQPar93BwmSjTEifNzr",
  "key30": "4ExZ2g1M12pzy9LdyXEKMTmxGAkfnes33H8mEvmnUViwkwer1iKhwq6E42iGbX2ELKsnoCGHthRfdZoyj7PaCDhx",
  "key31": "3YuUA63uw8EHTCWohAphsvJuhtHF5SUJQhSVaWPWYXiabnvcnpB6qcSfhZiCmCYiPXQM3AsCNhmKL4kMH6xfZM2N",
  "key32": "5qqKnfMRETSk2Eu1pEGMQzTkMpTMxTiYP57ixSaZZZY2pX5ywRQFakbKodstzAymgnb4LcoLqYDF2mbZNkNASLGn",
  "key33": "5rgkb1R4zvuC65qBkJ1iHRKx1KpMuX14g3fPcg2cSYqDMZ6wV278FB7iaoZpXhEyZwtaek9fgF1yq7um6f8KTGiE",
  "key34": "LcSnpzAELTAEb6vj7ZDYnEKhTb3rwGZTxs8WkvsRWFhx43U1Z17V6F9Kfw4G8co73uVbnk929rG35A7Fns6GNQD",
  "key35": "2dvBtXuGvmY647jnf6eUqTPRgytJXcsozxK9sgu685pDKa5sPj7f81ZUUhoAu3wvCwV6186cDevu2mboYBLbCoxG",
  "key36": "niGkp4euQwEUjXswbvg2d78QB4xMosy1PH8W2uQByPM8fBrKuj7TLCmqnkF5nDqXkhx5ADdxCqVXZhBmmhMBp1o",
  "key37": "2N7W1qsAq32w5xUiJHE2UEgEdpVuYzfnCnaJhbyYnjpFnYNkgmgdvxAYKtsEaSyEohK1HnA14xQRg4R3F3NTqeha",
  "key38": "2yjv8EAdhr5sZKuWLHV26vH9JBHtC53TJwnAyc7vMwMXSdTYUPW9sd7LuFLpPDRC8D6spxWVKP2ioGwpFSb4Lz8D",
  "key39": "3rcfVPwpvraWp6uvVNtS2htYyJdMw5qXMp7imHTvEwxiKUAA9BeHAvTqEMG9DoPmZmJ26kWxVYKZeaKq6HBZaG18",
  "key40": "2HTioS2SnasRbRMLyRZG7jeU8TMFkjRC9uMDCgBGKysPy5koKWq34ngauZ9p6xmKmoa5JoXvnfVorYNiRQbVGkXA",
  "key41": "2iFLkMBGdYcx6j7V7qy7bX3Kjan64yFgk3vfj3PW1Qe1XnVbpyykGef45Gin12Ux4WUyUgbdkdg4e2r87JM51v8Y",
  "key42": "2N5Fm4sZQ5HX47nuczjEcxiaXs8gim23yJMDysWdaxtBaF6rmYGtQDnussY5obvQS3MNQrg1y3StkHZ6tzDYUz6a",
  "key43": "3sD6FAnAz8bCkfTF1o88VU1F95kjMtESNNmBRHqGswwVJMrMQAcpAmUEGUrmRc1CUM6Cx2vp65zp2zeiDDHZSfGv",
  "key44": "3Jdi1chpmiYsBzokBn9JLfWQ59u4hF9zqMuBhG7yYfYVjmozJ3CRR2eemr7mzNTQPNKAk1T4FtFdm31xx46cmkKx"
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
