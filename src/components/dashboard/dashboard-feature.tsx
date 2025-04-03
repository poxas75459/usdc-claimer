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
    "2s7uEUPhd5JMPTGfHKMAWKmpYaoTVCcGiag66UwvZfUUK9iRoU5PLQaZqsHPgUNz4PJv1rMnEzimvCPnGbhz5X8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ShToUPPavfgxAhoSTHezaWTzxRrY4wVmZxydqnZNR16CdaSE39rmBYvGH1Dbsj4EWTPxTSnBQ6f83d3VpNA3cG1",
  "key1": "2itVnRjVVxYho6QKgpgvUrD9qmVBsM2kMznLjW6UCsTw6NcAq78PFwDWGYP11k1PEVXzR62aUJ6zkPuCqQ2yEecJ",
  "key2": "rf43yoMBHnN98xCPa79jRBqtavJCVgqFf5pKToZZm1daMwyoqTyum2T5yzCoCyjZivBVReFv537Ggc3rkTgKcsM",
  "key3": "25BLLw87NiDovuscYBUJcy1Z9zx2DAoFnHzErCc95cUB6sMhTbkHC2vEk6cuJdMK1HMjiQQ8hJZndadeXXpxNPXp",
  "key4": "5tF5k3yJjHGVUxNV7LvfayYe6NEa88iftTSYdUyxTL61CS1pVtjg1VJcC5ixTFqJAMuYVKdnVwNAw4gxwzMcHdPC",
  "key5": "2Ws36WZwzhGUxWLt1KNwcbZpXTqw9mK7cCudvTywYY3D2XF6NS4n1A197tRuz8MLnUCuZg4wf6vGYMovyHSokzjh",
  "key6": "4GxsmJxFcfYyp34YezBwxbzTrVvM1vn6WHxv93YB7RmEed74ojgJxodkEWzTbtUJJYMtXzdWZdfMkR8mPwcRSZJJ",
  "key7": "idBUm2NX4XyPsrdZYqn7eLLZzaZSkVioySkd3XEwjh84ip2SmFTZ7jWnSZbWUS3sqAHUm1oLPufoc1hiwyTs7jw",
  "key8": "ZkpfnWDEimhUPo291vobHnS1rC5owaDYbDPDzAaZcvfeEoQGjyUBqkWMxQM2jsryaUVDmzUhPvoZQqcXEsCBBqJ",
  "key9": "3k53eRgP3iMcVLjHrkn5jWHEYAmCuoYQqTvu412snxGwazWbgFsDpM2XzvhTEPhzovcg4dWMB1QfV2khGKRs7xGf",
  "key10": "yCemqwnDht8npnxqJcn23feszcmtMv5xZ3tCFfKVUgmQeghRuu5mJX5v9Xrpm5DVnJwj1N7tY4tBRPAEN999ZFB",
  "key11": "3J48HYtqtVR9QoLioiycBB1yd5aNgQ2iANquoSLBiGxa9FdnqEW5X1X8xWck8t2V6UAcqPc4SLgexfo9xdnb5kBC",
  "key12": "4mDgaCZRUYLtzLvi2fP39FtTgmxMQBvuSay5Yn6rw7ZE7Vdsyco35366hBkYg4zPq9syvz5gyqKDcBA9MdAjQVBd",
  "key13": "tbNPRcdtSPguQ9xt2rjfLxLkwdoXKzNEbHW2W9W2Qd3C2yBRjttz37fGYnC9crM9G8cSFmJwDFEdyLa7zKmELNZ",
  "key14": "23PEPXtVRwZtyPNrPxHTTjP2B4o6gEUdnf196TgYqW7QJWYbvqqeECtzxkB9YMZ4DXVXmT8H3zCD34hsL7MPc79o",
  "key15": "S35hjj3KchTRYE43EFnMUiB3Ej7KVvo1NvvnDyHs9DBjstXAFLZwP9cx7fU8zcLtDzKXBLyJPNrxZz9degub4jV",
  "key16": "4FMucA5TMA1GKVAgwkETKH7rsXV96j6ejsND3QWMXi9vgey4qzBg6A7LoSQrYHTEerk9S2CFMAaZwtM85RwmENt6",
  "key17": "xn7yLR9tp4vSrigDg6ff919aXrSGD4ZxLYQPAsfQGnfW1EYe42nbG8AF6iJZt1gKRVsqKxAt7CDhnT2ePWrquwY",
  "key18": "CMek1HL3JpVRc5iQNDdUgq5iGU5pLHgWSzu8qNEHQqFM9ZteEwt3VAeqwZAdcPUxMAbsvXG9TeFmpRyeCtGVE56",
  "key19": "4mPnzixbDn9NMW7LW4JEQeE4LB2NyyZDfSekKqFVBRdwBGcdpTZzcTdUzNTrahmYEpXX35JgDMkUju7QKcsnCQD1",
  "key20": "4j8ovcqJYjEknCH6qawRmc22cDz83zU7eU59eXNH7oDgwBsLTcoATpk3pWzNdmG48Zu9VyYnzjQAELrY1amSMXcB",
  "key21": "xzY3b9FPLR3yMTJkqHPGWqGnGSVi44XzYb6rvcWZWWepcTuALc2MoWT5Zznz7oPy4uhDffpnKVQXKjcN1iUpDLX",
  "key22": "32rwxq656ZTLA3vMbdazxyseT6V3PBMw6n6NYiPoJcroGSkigcrbukMkqEW6q3gdfHR5ujZxMUsUQqABWzq1Qndx",
  "key23": "5SwpsVY6WRfNZMdBEPG4nDxMd5vuThctxde89N9gBcmDLc9Eh3zdryJKZSUXPHfxgn6vu3yrg1YNQszanQA3QjCh",
  "key24": "2BGshKHkqqFmaEe1hebM3ssYB1NCpTxefEDPfiwxxukvkhmPu5kZRY79FWrzmr1u9DmE9dyDyWKqBp3Sobc9o8Lt",
  "key25": "3V37fqoTY2LGUEnCpgdY53mVL8omaAKuz2eJTxN3ddjUUQMSFNHHxipFJUNKnvzujxGrCQuMqFhYZMJ7tqVq4Wcc",
  "key26": "5PZ87qajBDjZTMBTPaG6p1Y9yGrqDMBTR7jKefFiqfAWLSu1EW8HMz8kJc15UewvsWkeSijJeF68BLLDMB1AsdA8",
  "key27": "14D22mSDnqNdVnJmM3Nce7CSCXq2tAq6uf7AJtgbBzEg11AQcW2Tw7hXtVfW54LGLB3qkRa8jH5d6oENLMT6Kck",
  "key28": "3xFLowyyur13RreT52ntmrJYaaKyp365hAuXq45FPy5AgfBtSZkakFQnsDuqtruhq8k5YEgrWDoK5rfRzTkstnjk",
  "key29": "5xstthJHZwNecEQtftTozSuuNYnJKWVtGUpLD7RPXur3E76hZxcDFeLw41gaACbay8V4pfMefA64cy3cxf3g3tU1"
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
