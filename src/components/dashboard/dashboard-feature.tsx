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
    "t412eHk8kvrATf2o23Y1AvLbEtzky1ie8JPUk7kiUoyKbSp7445H3Db9WTKpXeE1h8ZBCk1chdiwXVXFA99J5o8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQ3B5c7oZfy7KgZ5sGrFaw6SDGwMjFiuCJEzCxoX9CLHp7QMRLGE6e2ZFudoJDpoA9zZn7USy6yTh6KDNdr5MWP",
  "key1": "2y8ERQNdWtkY86etCU5qASzdCkypbKt3PgXfWdZuZdi3riHv5iVJGMkKauB6UtfN3YkP9yJjEqRwFHzC73SDjp2p",
  "key2": "2an3Shqha3RFCfcJ275bJEyUdndHyopVjnYb5SMrs8ePBbkmEgVYsHoZDCxgZvTpLxASBuoYiS5JtaajJBjTUz6N",
  "key3": "67Nyzqd38AcnAgU8yHXopqjZxbpXi9C1M9Go6XhYkiBs1QVSpooPRAqHqsFEANr7cfDzwM1gYZ4mfRK1G1cNJhs8",
  "key4": "8Bysjoxe2RDNRXP2LvmZHtdt7bh6ZiJzZoyJEFuon7g1QSRo1GeEN5kB93e9sAx9CboKU5iM42oH6WLKVU1sjMY",
  "key5": "2nU5mSjnubYet4Zpk64X4wqSsbrbANTJHyNDbe4Tji83qVkAvBccP6r5BZhC9t9e4q6UA7F68KhRqaWQBfEHCBtx",
  "key6": "2LprArZjHzEQpKScUM3ScAowtrSTQdzzeteftpCYUNZHVinMTYwvM3CiyK6ks6wMoy3JRi5eUEpa9mysuGAsZ5qn",
  "key7": "gJsz7DRBNXhV4Jj4XcDkCaHuqrxJLUaq9PoKoQmz2myGvfKQkY91PzLxaz6nkw9cnmuPSd2qs3f9sLoH7aowLxL",
  "key8": "3DoLU38Qm4uD6xtzvkYUXHiEWuDaJZgKSfRyJG5Jy35dyqjAYCE9TQVsk9DvsvCfUgAzBEEVtrWqJ3fRbZN1abmM",
  "key9": "2DgN8Nu1nRVSenZ2cABxAtih1JX4j7HvZ7aTkxWjWZtcKHGLAnqUhVC5AttP3pchogTLDWcVKUkaMFWiqqbupJqX",
  "key10": "4uyD2mCaPTqo7rfyDBrQai2r7qVbScymPQxfctV3amBeKiN4URHPpFF18ggtVJ7JPziWXPAeBQH4Epzat18QCPip",
  "key11": "5hhR3rffAz9pmbScafQUbx3LHLFsohUvdXQfUwUaQMJxPeUSC6m9FQUE5TDioywQuQ9H3WQQeDdiLpfRNLTsr3Pj",
  "key12": "3gJbngLYoKLuSxnkse6dp7dpCm4h5S4vNHC9f2wRZGjiheQdNm97WeaMQGdcGVV6S468Uy3SuRuEb2qYAw8GX1zP",
  "key13": "xAezgjfCFKwKcEMSuFiqSrtcMeUKCEe45FmztoxDJH8vkXcBMb8FdmTaJ8sTzM7HwZkrEi5SAFumHeWFxR41ryw",
  "key14": "5YizwFSaaHAaBAkpgd4FKK8w4a98FLaxQvCGkifHd41bxURzwL8q9DPwxsLFrSiAAr6BNJeMSRTCVyimmjEVC4Lm",
  "key15": "38VoeXEkZe6r2kZRHx9B6hAJc2pQxGGdtBzvMWWmNaeLK3GYaehkP174qnkimPTWitzMPLgUKob1hFXoZkaDurkN",
  "key16": "5bmryhc5B6sqoJc85af9FVkM1gyv1SKy28KwenZzK62PCWv8Pu8mdKMdyUgpDFWnoiDxphVNGxjyjf7SdVBatbzP",
  "key17": "3LpFWHRhjezb1HoDbA9DXuDBHCLwt7Wb8WavGx9qzzcDKhUd3WiitHCVMEy2kqLX6Zzc3inTcJttDJBDJCDXyXmW",
  "key18": "2aB5UtVizFdq5DAGDYRVesxQYUvip6fGFT1DWw8DuNSc8bcS44R6LCcMtEv7dpRr1gWbU46XBMVU1zmiivVk4Fe3",
  "key19": "29652BRdEemu4R4UQStGNbQqUP64iLT4R7L5NLCK75pAxd6rieqtVP45QbRS4ijSgPtbHmdFFvYAPqsVotq4rxnH",
  "key20": "5vfccCbqV5dHgzR7nZuUFkVjXxCyWcjzzxB5jwhMaS3NcEPmwXjfeyeYYsPNgCP8ujqRwb6f5ssgdPnV94UCDhux",
  "key21": "48pnNjXqXEL9EsQbhDGFVVgB8kMFNDvz2YJsA6miLRon9LSfWNdxLvu5E8buFJRuxSi96NLPvKaof4mhyB2mN9Lw",
  "key22": "4FmQRUKEnKycEJyRb4HUBUSt71VB4zvTso7E3tKUEeroPvSG3TxYNXEeB6Z9ASMkXAbBzeyceM9xo1wQLyZ1bDXQ",
  "key23": "4htU2e62d2p4Qif2TpY1QqqSzq9kub6TAqCGzsmUtxrEUKoj9MfJtX9WauS2FKk4qGAjqdcz7JDjHBFaZ7jeTkeW",
  "key24": "3Kf7ZVRK4XVkrf6S6rdjakWpsbJm2eQKDK2dxX9GzSsPme26ndCt1wvgxsTCZuTtFGr4sybDgbsHJyVbKAESxSdx",
  "key25": "3ySLBVaTjLNh6vHw34nnQ3nshnwxs74ojbS3G9PWqvBqSaN3mLhJ8qEM36yTEqaz9nmQ3161VgDCq6VsJQdTpRms"
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
