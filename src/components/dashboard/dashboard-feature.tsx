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
    "4wVeaeDQmEETENp2HiRaoUDPRTuaTBikk7oGT8QEFyF3x1585DmCBjKzpbhB9mfRjGoLBwYzstnvK1VqyKE6TyNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmorsfcGuAY4te7fUfBpCB6aQJePmpJdj8pJSqQcbJkz4tSkUtmcWzfvvyeV7m1fyXCz2YU3WMtMcyo4ZS8gqB5",
  "key1": "i2ZTCETgGDbAhPuccy31ERqMhXiisjNp7eNedQxKdjRMdN2LPSWgt9aP8cLmQJVNvp9H62MZ5enymL8RQdaMhVf",
  "key2": "5n6sfLDMr8RzX7VAiYna32Nf9Zhi2kVjx6Xhs1yypxMhbpszjwC97ku2ayKgVqWwKhC7e62H5MD9r1Wpeo22KTbp",
  "key3": "4quw8u9XnyX1WfRAsr444HtZMQpzViKoG2WeYGohzKYngAge3QgjURyGaudKK8sZfdy2nMc7Y86p8fR3Pn2RKqae",
  "key4": "2QXbcnh5eQkJZkCoYE4Z2oUryfse5mAfJLpX1X4GGYzAqqXGdZvFKUNzoygzTxJ3LcMihddS9EtNqSj6qCzdCoZd",
  "key5": "4LQaR6FJajGsfL5ZS7ziFKk3WRSvLaUHyA88NUEup9ycA4H7bYNbHZfieSPKs6NkN875D3JFR7D9ibaRrg2X8z9i",
  "key6": "4nHbf3ezFFVw1VurHKf6qgKfA3jjkjtHSnEimqTSPwAxBPKnHYdfZ2Sn5y5djS7te9LidrGSn76FZUAXNUFjp77S",
  "key7": "4QnRBiXARM8PReQngJ8iFxSBmF2UEEoXTeLGG1ihY4VCb77Uwa3u9bzhmnZ7baQjdZa3UDEAJhx2itbkj4Log4PK",
  "key8": "3LhNoy2gYtLYJZwKvh3YxFjfFPd7ZLWCmu4FoyrCRuafwHSSHcFtdV7WVgBrueTv6kAAv47z8oMeEgQqxWVGf8U6",
  "key9": "5nd8TW3qhjhcAFJ8yDtg3VapnLtuSP3RS6MCKqMC4wamc428CZ8KwFQLtZYsmzAuA4CfimtN8dPDAJj13VjPiw5G",
  "key10": "42isfieBuQShhEFkC1ZBwabVN3pAyPz2Wgx8CrxdWVXiiwjbuTkYB4Bc2oH7V6ckSiZZGfsgtaAtm8Z2hRC5viYg",
  "key11": "4YJigvkkQULzFxLX6crpdRVDJuZ6rthRzEUKonTEym7Ju6JSzG1ppTFdbZP5HvS1tnzgZjbWi23etYuwgpQhJKf1",
  "key12": "5eRmniSxy8uRmrarveNiRz1dXRQMe6Efa4cmH8u2oWaHFpe6mLBtCtTfpgitVVGiYL1XA4cG9EW5hyMgEtTm5qrT",
  "key13": "3EBLnu9ohxEqPkwAKgLFs48LsGBs1qBcK8G3APeLTE8EVBBnrfD9vZzBWpszFZUS8h1Qe13Xhkb5cKMFWeSX8yeL",
  "key14": "5ZGh8GeY68VNP2uCTRNeqW3YQuB5MV2stYFLaFPPVyn5Js4AwmZcmb2sAGDbj3veSVKL98VFymAFaMuYren8ZqsN",
  "key15": "3Y9btUvvtZWVifpbFGpBHKZiiSnvar8r934FChXYUa9M9Na1ydfFfJqvCPnxmZFQ2fXYoSFXF7wiqcF1pj1jf6sL",
  "key16": "4m5YSnPW7rN5n56LG7xCWY2dUrXtESREKLPFt1ooHs1Jra1nM1zQ6bMWtwCFN6n2dSSX53V3jWr65uzQkdPJBogk",
  "key17": "4FtXf2RWKGysq27ryfK6fw4fBRq4okNvHWyRGHmj6VdAYDbXq3eehbZ2oM8rsNcz32FWzsMP5zgxyNw1gMeFwjjG",
  "key18": "5NfAR33ofin9F4G3trp2pnTx16GDqoXDM6J2zhshJV2M49d4n3psMXJt4KTU7VcmLMo5G1rvXQZJcj5ag7Xp1ASE",
  "key19": "e8Ryn5w9qAJq1nPn97gfRUFFzTJLEtS47zPJnbfVwwtE2JJ3UbHkkKqBGQHLtnm3qK35wjUP5Z7ox4mEKipR3MN",
  "key20": "4rusS4eG25a9Nnhvzpp6sQvfBpMjFM3JpfP9iLY59F1XPq8mDxzCj2ZFW3LajuiXd5c9Qmmt7Mw3Ljv4GwgvNHmP",
  "key21": "4bWeUh8wbunVj1V6QsMDQ4ytMNvewntPymwWAYuyfcAGcD5j3ppAWANFm85Wc7i2dAE3fmwtTK9tqAs2rCmGX8t6",
  "key22": "x6vkWkXcPwn88tTPotJtgCnRbyVNL9HaHL4r6sCEfMVo8koBzD3KfN61LLdJjKsYEqijjE4uaHwYDprVUine91p",
  "key23": "4twWcLJjWbBH13oZhP6QpFaVwijmUmzCd5fYyhv4jHRjeGJp1KsVQGRiRVjMozB4Qode326MNymnekfJ1kjhwz9R",
  "key24": "3jKbuq56Dd4Zams6WLjPvxcta5WFcM95xKhRoFz8W7E4qSjkisczUpJ7NMRZoxrnpCerVRksUMp8Qp9fPqU2rYHF",
  "key25": "5xM8yFsBjjryLi4b6XnjNyKheacSpL4anPRXdwWLwc4EovHbCdWdKGY4C6x1XSVSPf7C16zxnct56jdNfJsBEfWi",
  "key26": "4XMZnj7CN1HFLU4ah3f8x9Cm44Y41MgU3uNQ7VHfqHuj82ocQALCmHqWqjSpBYt2T1EeL1UXZZiFa8K5R7rKPnQT",
  "key27": "2ShWxuNP152qvAd5zzsZ7Z3zLkkcTjx6aMtjRieJd8J5i11MZoCbcctmmXhiFopug5XjVF1JRM381oo4dGfHvQ6b",
  "key28": "66tP9KByD87yQWRzhmsdXWWdX7SWePRwK2rtLW9ZCnUogyxF261EwdKYfziRP5LCfrMJEAFA31ha9a72ZJXrhYcV"
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
