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
    "4aUT7nvfjBWBFJpD3yLs4X7hPVkZ7YsSCn7bx4c7ztmvC4ZLXuMBuAKom1H5PFhkQVPNVcuVx8dnBap5G62F3Hti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PSY7TzA6zRZDjeaPPEfp8URbZkomyZT9m1UzgQKs2xQn3ULDQAwyvp3hYGMmo9KrZpQJccWBbiwJkNmrLuM8n8Z",
  "key1": "2a4UoEDwFUrPr3ZGZHNsdKr6U8DqEFpiHu5V58W8m5s2j1fVmD8xi3johT1vi22ZB9KpjtLYJYyttQU6fcoWhFD9",
  "key2": "36EunAw4qqTBL1AHixhdDHVFZhGDhConwGpWYuHYWuiifBym7u5ifVXbhVV4wdZB4HSUVdEEUfHmHTLdmxdN3dfj",
  "key3": "36DBmRfCdPJGo9ij4KugT2yBuMuuTf7bqPAZRmsL5TgoNsMkefMKsUJDAWnucYuf7AL31U2fF3VioeiajMHZVVRm",
  "key4": "2sZLyNcRkmavMZHzor79yggwavFe7JLQDuhMHFkqAqCZCogQPMeMW2VD8KKTu99SZByHzX14dRuDSJW87uzW2z1f",
  "key5": "66F6yyRoMgCr6zd3G8FsHPW1jKydudpWk32i4xRLXwSxbbE8QZWJbwAetVCzEUJiGR8Rwexzjtpr1uw48bd6dHVx",
  "key6": "9Npkc56355TTWJFE5XZaHT92Sqpy2HnMyamm3mgPLxgF7UomiUc7GN76RisB9k7qSEBr6ehZfnmuQt6QqgssSUg",
  "key7": "3ivkMCddS4EeneHwW5abGbz5FChvQX3NV2Up5RriTgrLvPi8P1anGKPig5rSANaXVCboUT8uU2pHw66bQSmUsUKX",
  "key8": "3QR1gnvg4YbQUvUCaKvJV3LXaWp1DXNX2AvLZ2zNMDyrthyYR4cTASJWYbmeHUjtBPdTrcGWGK4qadyG8aBPwAAj",
  "key9": "Ny4UXt8d86mMLYSDLs4gx5oLBdxVAfSZfhuTzbpLyfX8q3xkGW7BCJMLyYyCpCxiPNytNZiTUphFV9VZ4gatb8h",
  "key10": "3NTSFaTJ9JxE45ATXaVhZjt6ucdwhL1SRoWCH8nunYJJAfbTUKLfnDGHb8wiRp3u23TLC5bPvv1BvJTntfDB48Ns",
  "key11": "2qEjrgXMAyXHqsuWJvJjnPzvQwKZLe3yVAs5dYFxmHV82WZUsfQnyHfwjdDvuGE9RiFatb4TZXXwbkZp9Hj4WNJ3",
  "key12": "551VrhGZFLuDpqcy1AK11UhnMJkLo1T4HLXAp37LkuNQg4ZpX8AQCX1mRcSWfhpsum2HQEq5sG4YwtTZZ9c4CcnW",
  "key13": "aAnfUkqm3M4jsHuafFabfzZVx2NYcPQyowZVj5V9LtFMBEahu4eU2h4gTattnbRGwzj74vZz88rgYFCyoixpdbA",
  "key14": "2QjsXfgms1Kw7jSp7yf89QH4XjHeJ4dKCy4TFgu3G9PoqfGPSfXLQHuQysdNvTwoZGFqSjjokrcGV3Bux3vezFSp",
  "key15": "oaZndEuBSD7Q8gVeHvkBKjY868EeTFWYS7XTe13rLP7r5AdKQwnxyip9HzusTzRZfdKkmYqXY8DnysjKsm5kvfq",
  "key16": "4hYZLLoHxAwk8VpZ5KSY5V7nK8nSKJ8RG6bjvQk5pCUeFyjMyjtHLacxuVo3boQcmWxT5k5sMxurMG9QR1Vxm1qw",
  "key17": "4y53qFqmExS2FNYgnBh4qft5SdaufoEyqWgS66uXSvsnhjuimgLfdMxRuE7Rri72EkVS2XnTQP2EN7FuYLfkSgis",
  "key18": "3tceLQtmoj6VjtHRLRPp4jzLE3YAhd2tjcvfnDHm6ejkQVZmWYWaWd3U4EPGFyHVHi2CXhDKJooXidRhYjBUate7",
  "key19": "2eyDJ7d7jyCS859xbNPzAqYjqjA8QFf1kRGhaJg6ozNu5o3BrQZdHLtm2GJ2yGTMjwyY3af65mcwrRXMFRwc5AHC",
  "key20": "2eduBF1FXPGuCxct7jMWNPpMoZbFBEiNB2hJsMShJg93rgpDJGTcqpYyFCKtAw2fT6f4K9VFkk67GtA1sbfeqy9z",
  "key21": "3dg4vHNcRvoLVujWC4r4khZYf7LX3ywMit6TrNRCoDLFHKDE6Q4oNp2ybzkYgEtaXUTqLwh3gU5R7VU2jfyw2e68",
  "key22": "RzKNN4WhUeyY1KMTCirjqCx7Yo2ybKKGEJhsj2kMYNwq3DcGMakQoJvVErHFRTgBmBEnbSdf2i2Lrnj3vwPGyyA",
  "key23": "5PfcfhoKKCDrj45Abn8Z6K3SBFD9zCbnsvbTfRD3sfQWogHTtbii4qCP2Mkkbz2HDb6e8xKpEbezTLta6eP9to3i",
  "key24": "4tUrbHc23WEtF5adFxoXtcLLFmG2XbRDDWeqGGK6hvVvqWqtBTFEboXg9cachFkA9BX8YPpvYGLBrPGSxRfaeuhb",
  "key25": "5TwsH1RfDUNqHWe4R4a1fVK4Z7pbzRa8sLBCLu7LaE9nSPLhQR88DprGdzdq8HpQFjurawaPzR4fctH24WAX5bvm",
  "key26": "3pt2xDGBq3mXmvSVsB9fXSyRwZndAU3USjmU4DHbMzkY6NdEuRAZGVunxMb8uBqQEMPgkYigWtEK1Gnhbtj7bdHb",
  "key27": "39e8kCFH7LguT9cgGewrNTyXpW5VGA3o6hGSNoyJWpW2oFWnXygze94keN5JHoBFJmoP3yB3PYP9jcMnJbYGUeuq",
  "key28": "4WzyZFps3m6EsGuQto4kNcxz1dFDSYSDZDnmDQyhKU5JX2a42CoEk7WkpYm4sbk77Z7jrSq1xrGVD9F5Wh1JJrzn",
  "key29": "4k5QhZ4FXLCwDLKG4hWXfHbyofcemRpKBeqF7cokPGYpbNWkk2BKdXR5qCXKpcZsiPAZhvXoT2HnK2a4QjUtTAcv",
  "key30": "5JEk9rELNqPhXD9EAXDMewKugu76G4FVqGNVx3S6Z33CQZ965MGPJugyJCLMUeoNxgHnyEgML3NegBWCtwgyheP3",
  "key31": "3wieeFfmucD7ZU6Xiy7amNTzm5YCU3UM1aPaBYm87oi1a48w13RgCzDcbWZQyeDbQNfkJy4vn7f8DQJwUyxv1phn",
  "key32": "E533TTKnjFnwJnKz3VNDJMzbeUTNCWGtzX8pFn6vVDa67J3NrZYgjrRVmveA17jpgz77JY32bEEapv8YS4WA2K6",
  "key33": "4nb5uSb3DdgRkfuffBNzAkvXjb38BgEg4txSC57gE8xduSFVcbP6UivKipWwFcQP1L9B4pXoDCu1UWme1Bz2wpNR",
  "key34": "JYZbS7ZF1jnKbvVW3HJWmRsygYKbj3t6L5YT64HNpj4FVeh2exxdexXVBuTmjRoL5x1YFLwdzK3F4863ieTwskC",
  "key35": "4jVRbXYyyDeKpjMetkjrmiTz5Ptj6PyJ34qvt621M6aKRuaXSyKiK5YvDELkKv8GdNaiNRsWC4dg4zDz21KsvBYb",
  "key36": "36Zu4pocHDu7dh7GgqkesuTNKMqJr8K77nJKKEV74voJeKURQKMCwc77DjwNXMjcyCTZSDmPNrnzbtTd2KvU3XGn",
  "key37": "38ufVe5pVdxWZMrFHAmRmsEmEMgXYhgFeTYJSaF7xCUqzQ81v9dHHJwywaRvdwbw5aJ1xhAh8dhRD2yMGAjiCkVZ"
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
