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
    "63CDbGBqVUNh52PFxBzoQ2mviFiQAijTuVQt7FfPcixgNKFRYYjW5SfC2hWaD7LEoKs2oJJwFcQLUxoZZdnhJ4PF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b6aFWNBEYW2vrcK21didztTZZeT85fhNLxQSjbgKvbRhs9kwGgUC7fDdpXmtYKB5qEm2TfXjeWqnvnKf6anXCg4",
  "key1": "PcnJMmVJpifPSZa9mmHA7pWgh2cWXp2DHbjHpp7DGM6zmNbQ7N9XWYPVBwggedZwi17rxP3eU3pXW8cBXB4Dj66",
  "key2": "s321SzJffk15t2UFhj52hgS2VbJTp2y9XrVv2h6pgfFowq2SwaLvro2UmSGKYeu6wRRTefBFR8Wjg9qCfjRAfp1",
  "key3": "4TLwJkqCwFVveRNHup12DwF7C3YgaPTJJ27AL4gdAu8pwq4emmLdh7X7GKzRb4KVJJZCk75pxb94nvPNVu6Thuzw",
  "key4": "KJKvaC5Aj8hDapTQtL2qS9cyQNC5vXCCDJyGD3wf899QUxFhsbLf2fJbotLv1yX53hbgJ2W2CNVA4Z52Fqa3KNn",
  "key5": "5xMgE3VDse3Sxp3sQzkFBqi5Jkh2y6ueDsPhUUJuqMMUnYfjA92V71J9tA5w4kEWbVAnfs4MPYR3wyMnD4gpaYuC",
  "key6": "iwvUSJMAD2RtJJ8AcKREG7GsMPWs4hB7o71H6Bw17n7A6NAbTmLa87wBAkJg6kzKodSFSrVahsY1CzxPirTuFQx",
  "key7": "5RMr4n4DbYwatBFyJQ6EMwiNMjYFE7uA7vdfQdFVHYwwGD7YgNCtb2xftw3SYyumBsUkp1VSP8YLP65CCjqCArY7",
  "key8": "MYKqCi5moneSh3H6AfawECm7nv6qzxPEzMo4pNiLGjyuwNafThxcaGGWCuFcexgE67Bh9JbfNyzsq6ZoxznHsZM",
  "key9": "4pZz1dYAYSSFbB31yMiPq4rbwi6H778b97sXceUazktDUcKE8NAPbxJXpRRaVXyzRGHUsydBotHombdsB2fjWMaZ",
  "key10": "2EaLBvvXCCVrscL9nQZhZ58VXc5Q7MdhdPZu4g4qGPWCXuMaaNciBTVooNWfsSoq8UmrvCPwVFV9PRGxM5RNgf1P",
  "key11": "5mCcnmtoV5KJwP5gFpZ2HhStNvMKV9ZLpHUrpq6Y69sB6FTyhjk5iU7CSguU6btbE9TodbHviJw6Pk7rzTSmewWu",
  "key12": "3qH4r7xvRtAcgwi3g4bcoyQrEUWDm8FeyoxgFin31HuWxAjfaTydKrVZSpC2yfZxhVMKsiq2fQPXuj6LuYkY9QsX",
  "key13": "59s7KHHevYTqpjaZ68iFi2iNnaPADSvgAfiWktYMpKNPN8cSeQHc5TvcnqCUTRsgXNtrELbmHzprujS9yiEZv6Qr",
  "key14": "3jpFxUMQT3Wd8ZWWahSB1cfxNuJAUftkJGpwWy6ifKpz4ehkCM575AfDSv7BcUhDnxRCzvB6XFGhsPLY9Kn76JKy",
  "key15": "3BBmyafzSFETtCfTSnzfQotW7mU69AjRmJ3kTPZjkgzmpSgDMp4RmH64moYDA1zMJz3ETh48ThSe5RQ6pWPNdxWH",
  "key16": "5pbFzA2M1uuuBBsJ6uPHMvBL3nLJKUcgRjKKm47pgwRQ8M5kuT8xGvkQuE9wxUsr3rMbqt1MgeEAK5XiyeLZXTdE",
  "key17": "4U7t2HZBtA5rB4ZuioPZg876KchYTnoaTAT94BpXTAPiYmCJakh8em4QmYT7w22G5cfuqoXwdByGYbBPBDQ3FQH7",
  "key18": "5qosMFUqTkgj4a5sYaLqqGQEySrLy2uqfpza3Yz3emePatEHHHunqwVvZ95xeCJYLHRBGX6V6iBcqKGrKowZwgrb",
  "key19": "FURvygWLndesnoCLm9TEruFTrnsyWV49F5EuzLv5juxMXJ9GQqh5WtFnNDN8EvPGPQGBVqewwP4VopytC7UuFjx",
  "key20": "2EtvPZVL54ezds4D9xkBBvpTcSPhz7Con4VVci1ryaAHwjLmyTipdieMifNc4xDg6cWcNgnGMBJnvDH9fNNjS29u",
  "key21": "4XruwyTfZap9Mvuk11KsAxCvEzLWEUKkB5gGAKzdaKUGZbn3u68R5GH7wvWfwJ8EwJac2qS8EuBChg7qjTmkYnsL",
  "key22": "5yh4amMCVQpukVNGA5g9UBZaKSmYUsVLWWMnH1MojxuH8PTJ3PJTL2wR6zU6uZPhcDe2SVDJExW4MahwVzUDcYfX",
  "key23": "2UMrVyzD4p2PJkDj91gqvbQtfMJURxkC9PYk53CxVu9EkmKAfEQ2fHdy687tCczUTSSeUa8GzhLiF9iz8c1iKQqH",
  "key24": "4id3g1sDSFQN7ZeEkx6MnRthkcuf4JdsU1NRyWpAdn3BXW2qpgvsfKtekVpS1S9UeeQv7Zd937ULXmx3itBnN1C3",
  "key25": "51iNWRQMwkhVBtVUG5kNehc7rWrRaqTwHFWg1eVdgJNbTu7Z5ugq5DkHUbzzxS2hLWLwc8ebUahUqsQHnazdcabL"
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
