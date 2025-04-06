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
    "2XKS5vLiHFx4C82UvMu4wdKG3P4porNnC3LuFvHHya3SenTW4QUgBxBdc8iinLeBFRNWDK93xUhQsZMZ2KLEWgT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hSAc4wcRR1jc4d3fQzHdwQ4RdxW6maECUgiKtsvPkBxqeVCJvmqPGfzoXAafAVaycozuJMnb3sW1C8io7EzjH88",
  "key1": "3f9VKWYLKDidwRVuLRCD87FhVWyFbCVuyY7NhnE1EaSDuuqxWHMGAkmCjEbwLVFdEMnJ1h62KhcqBFtXeFhCq29C",
  "key2": "4soVhum8rg2tZ3WNB1dSdZCyzyhUi8dNLcU91QbXqPqSVsjtMN7t5sj3m5fhUdwhKAvzUjZQ9uN3sZnkmgFugiJM",
  "key3": "dzktfdTnf9WEHufueZjELn2zX2Sxn7APrzEFoGNndRo6V49ZR6aUHGJXgmtAoQbKBtbqH4wDBPihEBijtPtoMyL",
  "key4": "2EuxU5eLBqXvbAygbpAqbWMjZwPEaLZRiY3vo7BLnzAKxHCZaVEWpFCpzcQpKiduBZUY9kNKjwfXrjPDZtg94wLj",
  "key5": "5z2waxQwo9wvt1LVGhABNupJtWmokbhaousSAg2ZJ8rJp5GAdVkyf6Bzo9GoLjrVLm9M7ZKLVyY1xBEG3PSB6nmJ",
  "key6": "5a14PTmzVauTiR7v8ceEtrFBNC1iM79AcBwEaRUHUho7fyinxuhRtc1BjtMRswihNuqKwfoyGYn2ffB5PTN9bWmp",
  "key7": "2izWZJgbcYd8jmvdKYJYBfPtQ1owDHT6m9k1NeXGNtpdr6duyFrunQGu14Y6pMJM3fsQTm4RNAY1qnfytLdPpxL7",
  "key8": "3iJ6TpGzCoH5EJGUoomxQL3TCmtHnEbxdMYUEZsy39ncPZtDq7NjgFQgEjdq9rdQg6VvKbdg8hUb8QXMDjvGUFB2",
  "key9": "3Xq2xrtnB7enPMNFrVhMNvAhjKg9uo1DqoPwJ6nf1ox2avfFj6KwW37iEjEhYouE7bJsm9XqFrDeDs7UXC2VmGpY",
  "key10": "5sjMVaR8MSo8guM5rF2nGEd5NDQYkaXJ3r39ppkRUwyRQ1AH5jqBZQcb2xySTpnMVMYW8KofiYZFh5bmFZBTZQ3s",
  "key11": "3C2fT4qmo5xxcwnTRRUDBnuSyJwTmHCFWqUiYC6XpcyFQUJDjkqyLMookhtGWgp3Dkzr4ckJtdHVdSjFNb9ewU72",
  "key12": "3xHXv6dt3WeRkz9FHZSXGtWseZCHMyJvdqkKmn6pReNMkqC1wvsaMDTL34UVMaNV6qFih6PWq5C2oRH32Ey9Vxzw",
  "key13": "3MAgvdXHvDjmSL5kJoaw5cCXQgsXnW3WN7XoR47ARFHiuVpc1HFjS2Rpmy1UCtj7E8VXoFZzhKakni97pHRtY9Tb",
  "key14": "hSA8VLjVWSmWFCtRxaC6SGxCASvyvqv4PDQ2NX3g7GmYtBi2KHbmDRatxLoD3nKrWFSnHXUESLGa2YJsc1F9Gpi",
  "key15": "4CGh4FiGrF3eVMCLDFma7xCGSsokLTVGEKiKJPH29v51juU21v2rx6FCS1rFqPjBSgkxDRjG35Dapu6RnPyvaXMS",
  "key16": "CUpFCUx6ywEFoizEhFo4c2MNNFhKKwsNSneeTaU2wzxsFEKwqsY6NGf5AWttFfHZPMAd6Cx2qQSU1jdrchaLXKC",
  "key17": "5R1wSGX649GyuavEqoptKjCpvuNHf197qqRmUHgCRet1kqBziERv83VdcWkqRGfhxmpqLNjpDz6GtCZwyqm6Fk23",
  "key18": "4DGh7WddWuk7nEV6i65qPMozWUy282K7qt7p4GBXRskXCrArEmXMALWtf1Z7PtH6mLYx1i37GjNKSYLitk8aMTfu",
  "key19": "5KLjd47yMH1GjkJHDddip8WhFqMAKcS58gG4kEe6JLf2pkYyojzHroBRVLV9Lhkb2Mwt2s7uwnK5roW5UGxPguAy",
  "key20": "4L23mWi1PKbgiUeHJFfeojwCkfqKDoGAGcedyFxMhkMBSLaK9QgFroUXPqjAEWCQvQ5JnC1Xriu99AAiANXciAUn",
  "key21": "28Eku3VGz8KKhcoTACSFgNeksdVT4L7TFVSd78iqRqmnLseSFsY5EWp8yrozxmxxSpV3Dc6YyFjSSK9Fw8rVR5E3",
  "key22": "e4zGzRpGve834ffLmu4sBdhdSjVpPHNQGDTUxBh5VbrJUDhusxvsV16MhipdooPnaLqUbQnd6gR4KeogbQ3nbRh",
  "key23": "7HLugSFYMJH1csHrBM2qEogos8JP7Dfu5bgibLnck9uh18amixCZvXJahfeAGyF1Bnbzp1vAWhXsyhnPCPPBjXj",
  "key24": "q2DJj4h1zypc6pNv38Rrd6u6g8WgMeP15ys4ybCKcwbQXFKaQwkvBNp6RU7yGg4EpxeFUjpk5G7WZy4jqBHZ2be",
  "key25": "9wsRWiwCzcreZHKziWsuEfUSdoAv84fTrBB9LVHCunYEgL7rPsu8iTEHpUBhbvF65eABRkfznEuXHJ3PY6yyjhD",
  "key26": "2SNTQWeBGB5gu8JF7kevwn8qqz7byRMsN2Lrb22TwQ9juhWDMFpqAGoKYtTW9D81B2hML1dLSJnPxUqYwkLQQwUw",
  "key27": "bJPVjk9F3ZFJRJBs2dc6dcPPA14YoCp8siotfdSB3x5zeVj2rsWeuKuVgSbR1kjhGJHiPA9wFP4r1sHbU6jfh8w",
  "key28": "3D8TbKrjMWG5YvKMzjkAsPskmUgtg5vN4KoGGABownBhGf2mFmgeCae9C4oUnSb7jTioj92QuVoE2pibwTT6HLpK"
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
