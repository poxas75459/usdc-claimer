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
    "25RGouNkVj29HpK9vs1Bvv9T8bac6VhuzU7f7XWN2Lf4EWaErg3m8pXw5GRBNtEf3VEM44d3fw5BC6NUd25Ktdpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GW7WC5ueN9ZJhNTUan4F6ytFynWVYwXY7PyYzr9JjipkDCZvCCQkHHi2qeQkJpuafvLnwFoo2jgdfSV8t9Ab3Qd",
  "key1": "2c8fBHUHBkTP3wh1jPZCbwf987PEFZYoW3Wx2gamgQcu4CprrbbG1yR32gmhKrcukFF4jbcqANH2xdcTk1cw65SR",
  "key2": "4W6AnBgu3k8guPyq3Noe1xVtN98saLvrxX2v27vL5xpCuJSrYhGECMYf33y7MievPP2fsyUhaUnx8Kx9wC7Mq5Se",
  "key3": "xhfW876hD3ufgKg722wur8KEVsybM7aNoCcePVhSEFMcq6MRWsrdptukcmeova8ze6LLfTYyLJm8rTx6iVUpwFf",
  "key4": "4URr3LrA6PBokJJA9zoAEh9Eb7exdcwJxoD2XiiBX3MySAaDYimy7rqCZq9hsCXtL5s5qaEeVnh2w6crATWKfqzK",
  "key5": "5qqJsvHb9gqxBwuvW3HFF1g9xo3h7VyUpnmBeiv8dn7FcAkQzHgxMd1C3tfNXBQbmStvpXLySxZkP9hdStoaMdnf",
  "key6": "3wvz5U47rFQgVfuoEeWSnEzC3fxE343NGwM581WteHhWNRnk24QTMJJLEtF3zuEYWujzUQeYjNJPq1y5PHa2v2Ly",
  "key7": "5xcfe7hFub4ZVJLu8QAgHGNhRrcwbkyJE4CYQfJGKxYHtyorPVA5fCgfZbBFBh5m6EAwpfwBQaKzNqe25MkNpxcD",
  "key8": "3prW29cFvzvo3YuHDpBU1GcET4P7WisDYzxxZPmqvVrorqhGwQk4HWXEeMXzwK8ia2FkotZs6riRP3jRTGerychy",
  "key9": "nLnJ3LqpgCd5vJZqm9VYZszoLqaDTbZVWeCZELLzGb7fLkzG3YtdbLcSeTVDtoZJeUkdrx8Vppjyp2refz8Rs3t",
  "key10": "WYMHFjbkQXd7Uba8SW5BbZPxxFCBNCU3MHVb85aQiTSpzfAjXWabHQY3rnsU7s8TTs5iL86HBex2C32TAMQ6E3F",
  "key11": "4ZKrq5jAS8yqxP6WwC2sUFw7zigFsPGJeGb5rdrTsXsDrC47e5Es2YSZdGLgQLjyN6Uvm3p1RYFuYC55K8UPdSuM",
  "key12": "5wXteWhBtT9ob89TiQU86eXeokLqvKyZS9iAPNtEawp6wMaFLLCJYM5Z9vTutZp9S6REfJ52nH8v51cnXLs88HFk",
  "key13": "swEkm6VxrVmojEzSHSy33qePcEPCg5QWiwsgWSYPZr5ZF3MMEot6Rvcg8tXWeh9hCoHUQRrkG2g6Zis4o1z41o7",
  "key14": "UozmCFQKG2J1sFHjAeCabbEj9KobJyqEpun9nzhv13SpKDdAFeC1ojf9o6HcoZRAXWu4TCAqVHJzQQow2exoLx2",
  "key15": "3zzH8bTmWiV1VE1brCwxp4tbeZYopANxMWoCtkQdQMytwzLVLtPfZPBkk7G5hu3trTvu418d8y2Vwo2wA3wJJ9j9",
  "key16": "3MwEfXW7ko9Nw85Cvu4D85Npn7HWJnwxT4CJxL9LKRFUeus9qaLa2TYHfzXdbVozYzwdkoSmfz51KFQT2wsbTPgP",
  "key17": "21YHr3qo4VBvcj7fRWm2fJV6J3A68Bb8bsMsKGt8evLh9aDYNJddYBKBwa7nXaMWx8vHXya23We2iFKDSaS8Veos",
  "key18": "29gkvm6ir5ezHjz6smec3qJ1oDx5wwgnXzn5E4Jpq8sUY1mJ7qqrVPfZWvDMSAZ95YNymka3BUtVadAkAD4yjzAd",
  "key19": "61e5UjD3BCC46aj7bb3S2XgmYdLD4YgczcyFeGeZsAqD6UyZF2PQY9Xw1X37bxNaMC8Fjod88aSzR3JJowdLNVpM",
  "key20": "2gbT9HfcQA491W1VSo3F7jnhKQWrLmZh36FSj9RxmjnUadDcPPKoVFNrYqMJF6ywvAdWCPeN5fBVcdP6DzVdknvQ",
  "key21": "5VxhBNejrzemxifDcKCUbMA5AWZxiP2ZzUbCPhvQpHejgeM3fHCDu8DswEAHUfjciorSrdiUxCgEKEeKRtpFNokZ",
  "key22": "57eqcFcSuVw45wjXMkWUamUhPnJ8TU1Xh5TahqqwJfxSeAUJqxAKTwtQf2Apnnv8bJ8pazZDL1JBD5WADWeEq82U",
  "key23": "3nwYX7SJdwnLLuesNoQWiohCq7MwajvGHSUNX43jS8PdjfDbcYByvM2fnKQiH1hZQ8yAtQgNa8aQqeEPfJDM7hy",
  "key24": "51uY6wSkNfmuCo74QjirRZ8gP9kH1SKTh57kkvSJAXmk64Z3n8dsuEWshRtyTwd4zH28aFwr7cpoRYBjY6e3ZzRV",
  "key25": "4oSCYpDgkN42JSfm5EeEY82rxjUnzL41ZZFhwzQzhLQpQ2qz3Ga5KrBmRotEGpHmw5DBnLTCP2yu7dqoU4KJK6Tq",
  "key26": "fzpccNAjzn9gHwCkMHi8KFj7epkG8pc3LPwiJLJWHLHXTAhcvzry94MBzCBJVzgoxn7FLDBbKvEGRkbYTarY9xP",
  "key27": "rKNZ262kCzPULnHXujXjdqscsKWTHkeibRza4Ko9eL3XN3tBM4P2Aw94bRjnfVdCT6sto5eodKrApsqmGrEZ6Pf",
  "key28": "K5vnQpK74cQAakChRCEM5iTuZYum2sr5NGPPTUbYqnNAJ1xcFiqZuU3rhgHUiyTYtNmBW3ev5TTwHsZy53HC5DZ",
  "key29": "2ufPwsXkar7U3oaBsDS1BQxa8Eao2NjdgnGa3JB45eXYYhskwHvksagPTMSE3sru2eE352FRXvVak4ur2c6peyM8"
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
